"use client";
import { createContext, useContext, useState, useEffect } from "react";
import { usePrivy, useWallets } from "@privy-io/react-auth";
import ERC725 from "@erc725/erc725.js";
import lsp3ProfileSchema from "@erc725/erc725.js/schemas/LSP3ProfileMetadata.json";

const LuksoProfileContext = createContext({
  profile: null,
  isLoading: false,
  error: null,
});

export const useLuksoProfile = () => {
  const context = useContext(LuksoProfileContext);
  if (!context) {
    throw new Error("useLuksoProfile must be used within LuksoProfileProvider");
  }
  return context;
};

export function LuksoProfileProvider({ children }) {
  const { authenticated, user } = usePrivy();
  const { wallets } = useWallets();
  const [profile, setProfile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      // Reset state when not authenticated
      if (!authenticated || !user) {
        setProfile(null);
        setError(null);
        return;
      }

      // Get the connected wallet address
      const connectedWallet = wallets.find((wallet) => wallet.walletClientType);
      const address = connectedWallet?.address || user?.wallet?.address;

      if (!address) {
        setProfile(null);
        return;
      }

      setIsLoading(true);
      setError(null);

      try {
        // Initialize ERC725 with the Universal Profile address
        const erc725 = new ERC725(
          lsp3ProfileSchema,
          address,
          "https://rpc.mainnet.lukso.network",
          {
            ipfsGateway: "https://api.universalprofile.cloud/ipfs",
          }
        );

        // Fetch the LSP3Profile data
        const profileData = await erc725.fetchData("LSP3Profile");

        if (profileData && profileData.value) {
          const profileMetadata = profileData.value.LSP3Profile;

          setProfile({
            address,
            name: profileMetadata?.name || "Unknown",
            description: profileMetadata?.description || "",
            profileImage:
              profileMetadata?.profileImage?.[0]?.url ||
              profileMetadata?.profileImage?.url ||
              null,
            backgroundImage:
              profileMetadata?.backgroundImage?.[0]?.url ||
              profileMetadata?.backgroundImage?.url ||
              null,
            tags: profileMetadata?.tags || [],
            links: profileMetadata?.links || [],
          });
        } else {
          // No profile data found, set basic info
          setProfile({
            address,
            name: `${address.slice(0, 6)}...${address.slice(-4)}`,
            description: "",
            profileImage: null,
            backgroundImage: null,
            tags: [],
            links: [],
          });
        }
      } catch (err) {
        console.error("Error fetching LSP3Profile:", err);
        setError(err.message || "Failed to fetch profile");
        // Set minimal profile data on error
        setProfile({
          address,
          name: `${address.slice(0, 6)}...${address.slice(-4)}`,
          description: "",
          profileImage: null,
          backgroundImage: null,
          tags: [],
          links: [],
        });
      } finally {
        setIsLoading(false);
      }
    };

    fetchProfile();
  }, [authenticated, user, wallets]);

  return (
    <LuksoProfileContext.Provider value={{ profile, isLoading, error }}>
      {children}
    </LuksoProfileContext.Provider>
  );
}


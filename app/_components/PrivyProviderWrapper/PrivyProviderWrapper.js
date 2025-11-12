"use client";
import { PrivyProvider } from "@privy-io/react-auth";

export default function Providers({ children }) {
  return (
    <PrivyProvider
      appId={"cmfy8bsft00d1js0dqaygn4uw"}
      config={{
        appearance: {
          theme: "dark",
          walletList: ['universal_profile'],
        },
        loginMethods: ["wallet"],
        embeddedWallets: {
          createOnLogin: "off",
        },
        walletConnect: false,
        defaultChain: {
          id: 42,
          name: "LUKSO",
          rpcUrl: "https://rpc.mainnet.lukso.network",
          nativeCurrency: { name: "LUKSO", symbol: "LYX", decimals: 18 },
        },
      }}
    >
      {children}
    </PrivyProvider>
  );
}

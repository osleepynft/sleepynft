"use client";
import { PrivyProvider } from "@privy-io/react-auth";

export default function Providers({ children }) {
  return (
    <PrivyProvider
      appId={process.env.NEXT_PUBLIC_PRIVY_APP_ID}
      config={{
        appearance: {
          theme: "dark",
        },
        embeddedWallets: {
          ethereum: {
            createOnLogin: "users-without-wallets",
          },
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

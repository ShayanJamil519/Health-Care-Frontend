"use client";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { usePathname } from "next/navigation";
import Header from "../components/Shared/Header";
import Footer from "../components/shared/Footer";

import { WagmiConfig, createConfig, mainnet, sepolia } from "wagmi";
import { createPublicClient, http } from "viem";

const config = createConfig({
  autoConnect: true,
  publicClient: createPublicClient({
    chain: sepolia,
    transport: http(),
  }),
});

export default function LayoutWrapper({ children }) {
  const pathname = usePathname();
  return (
    <>
      <WagmiConfig config={config}>
        <ToastContainer position="top-right" autoClose={3000} />
        {!pathname?.includes("/dashboard") && <Header />}
        {children}
        {!pathname?.includes("/dashboard") && <Footer />}
      </WagmiConfig>
    </>
  );
}

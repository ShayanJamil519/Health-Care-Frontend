"use client";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "@/components/Shared/Header";
import { usePathname } from "next/navigation";
import Footer from "@/components/shared/Footer";

export default function LayoutWrapper({ children }) {
  const pathname = usePathname();
  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />
      {!pathname?.includes("/dashboard") && <Header />}
      {children}
      {!pathname?.includes("/dashboard") && <Footer />}
    </>
  );
}

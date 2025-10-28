"use client";
import { useState, useEffect } from "react";
import FooterMobile from "@/app/_components/Footer/FooterMobile";
import Footer from "@/app/_components/Footer/Footer";

export default function HeaderWrapper() {
  const [isMobile, setIsMobile] = useState(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const media = window.matchMedia("(max-width: 1440px)");
    const handleChange = () => setIsMobile(media.matches);
    handleChange();
    media.addEventListener("change", handleChange);
    return () => media.removeEventListener("change", handleChange);
  }, []);

  if (isMobile === null) return null;

  return isMobile ? <FooterMobile /> : <Footer />;
}

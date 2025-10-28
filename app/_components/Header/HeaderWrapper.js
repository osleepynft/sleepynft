"use client";
import { useState, useEffect } from "react";
import Header from "./Header";
import HeaderMobile from "./HeaderMobile";

export default function HeaderWrapper() {
    const [isMobile, setIsMobile] = useState(null);

    useEffect(() => {
        if (typeof window === "undefined") return;

        const media = window.matchMedia("(max-width: 768px)");
        const handleChange = () => setIsMobile(media.matches);
        handleChange();
        media.addEventListener("change", handleChange);
        return () => media.removeEventListener("change", handleChange);
    }, []);

    if (isMobile === null) return null;

    return isMobile ? <HeaderMobile /> : <Header />;
}

"use client";
import styles from "@/app/_styles/page.module.css";
import Image from "next/image";
import mainPageImg from "@/public/main-page.webp";
import mobileImage from "@/public/Mobile Landing Page.webp";
import { useEffect, useState } from "react";

export default function MainPageImage() {
    const [isMobile, setIsMobile] = useState(
        typeof window !== "undefined" ? window.innerWidth <= 768 : false
    );

    useEffect(() => {
        const checkWidth = () => setIsMobile(window.innerWidth <= 768);
        window.addEventListener("resize", checkWidth);
        return () => window.removeEventListener("resize", checkWidth);
    }, []);

    if (isMobile) {
        return (
          <Image
            key="mobile"
            src={mobileImage}
            className={styles.pageImg}
            alt="Sleepy main page image"
            priority
            width="393"
          />
        )
    }
    return (
        <Image
            key="desktop"
            src={mainPageImg}
            className={styles.pageImg}
            alt="Sleepy main page image"
            priority
            with="1405"
        />
    );
}

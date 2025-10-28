"use client";
import { useEffect } from "react";
import styles from "./footer.module.css";
import footerLogo from "@/public/footer-logo.webp";
import footerImg from "@/public/footer-img.webp";
import Image from "next/image";
import Link from "next/link";

export default function FooterLogo() {
  useEffect(() => {
    const existingScript = document.querySelector(
      'script[src*="static.klaviyo.com/onsite/js"]'
    );

    if (!existingScript) {
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.async = true;
      script.src =
        "https://static.klaviyo.com/onsite/js/SnhqKL/klaviyo.js";
      document.body.appendChild(script);

      script.onload = () => {
        if (window._klOnsite) {
          window._klOnsite.push(["openForm", "VidSZ4"]);
        }
      };
    } else {
      if (window._klOnsite) {
        window._klOnsite.push(["openForm", "VidSZ4"]);
      }
    }
  }, []);

  return (
    <div className={styles.footerLogo}>
      <div className={styles.footerTop}>
        <Link href="/">
          <Image
            src={footerLogo}
            width={272}
            alt="Sleepy footer logo"
            priority
          />
        </Link>
        <div className="klaviyo-form-VidSZ4"></div>
      </div>
      <div className={styles.footerBottom}>
        <div className={styles.footerBottomMail}>
          <span>SLEEPY INC, © 2025</span>
          <Link href="mailto:hello@sleepy.lifestyle" target="_blank">
            hello@sleepy.lifestyle
          </Link>
        </div>
        <div className={styles.footerBottomImg}>
          <Image
            src={footerImg}
            width={227}
            alt="Footer image"
          />
        </div>
      </div>
    </div>
  );
}

"use client"
import styles from "@/app/_styles/loading.module.css";
import Image from "next/image";
import DImage from "@/public/D.webp";
import { useEffect, useState } from "react";

export default function Loading() {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const start = performance.now();

        const onLoad = () => {
            const loadTime = performance.now() - start;
            const step = loadTime / 100;

            let current = 0;
            const interval = setInterval(() => {
                current += 1;
                setProgress(current);
                if (current >= 100) {
                    clearInterval(interval);
                }
            }, step);
        };

        if (document.readyState === "complete") {
            onLoad();
        } else {
            window.addEventListener("load", onLoad);
        }

        return () => window.removeEventListener("load", onLoad);
    }, []);

    return (
        <div className={styles.loading}>
            <div className={styles.loadingInner}>
                <div className={styles.loadingItem}>
                    <span>{progress}%</span>
                    <div
                      className={styles.loadBar}
                      style={{ width: `${progress}%` }}
                    ></div>
                </div>
                <Image src={DImage} width="140" height="236" alt="Character image" />
            </div>
        </div>
    );
}

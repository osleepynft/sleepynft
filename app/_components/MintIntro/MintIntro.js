"use client"
import Image from "next/image";
import mintImg from "@/public/MINT.webp";
import mintBtn from "@/public/MINT Button.webp";
import styles from "./mintIntro.module.css";
import {useState} from "react";


export default function MintIntro () {
    const [count, setCount] = useState(0);
    let lyx = 0;
    if (count !== 0) {
        lyx = count * 10;
    }

    return (
        <div className={styles.mintIntro}>
            <Image
                src={mintImg}
                width="1035"
                height="818"
                className={styles.mintIntroImg}
                alt="Mint Image"
            />
            <div className={styles.mintBtns}>
                <button onClick={() => setCount((prev) => Math.max(prev - 1, 0))}>-</button>
                <p>{count}</p>
                <button onClick={() => setCount((prev) => prev + 1)}>+</button>
                <p>
                    <span>{lyx}</span>
                    <span>LYX</span>
                </p>
                <Image
                    src={mintBtn}
                    width="163"
                    height="70"
                    className={styles.mintIntroMiniImg}
                    alt="Mint Btn"
                />
            </div>
        </div>
    )
}
import styles from "./footer.module.css";
import Link from "next/link";
import xImg from "@/public/X.webp";
import youtubeImg from "@/public/YouTube_.webp";
import tiktokImg from "@/public/TikTok.webp";
import instagramImg from "@/public/Instragram.webp";
import Image from "next/image";

export default function FooterSocial() {
    return (
        <div className={styles.footerSocials}>
            <h3>SOCIALS</h3>
            <div className={styles.footerSocialImages}>
                <Link href="https://x.com/sleepyNFT_" target="_blank">
                    <Image src={xImg} width="125" alt="Twitter (X) image" />
                </Link>
                <Link href="https://www.youtube.com/@SLEEPYNFT" target="_blank">
                    <Image src={youtubeImg} width="125" alt="Youtube image" />
                </Link>
                <Link href="https://www.tiktok.com/@sleepynft" target="_blank">
                    <Image src={tiktokImg} width="125" alt="TikTok image" />
                </Link>
                <Link href="https://www.instagram.com/sleepynft_" target="_blank">
                    <Image src={instagramImg} width="125" alt="Instagram image" />
                </Link>
            </div>
        </div>

    )
}
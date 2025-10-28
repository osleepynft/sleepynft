import styles from "@/app/_components/Navigation/navigation.module.css";
import Link from "next/link";
import Image from "next/image";
import X from "@/public/X.webp";
import youtube from "@/public/YouTube_.webp";
import tiktok from "@/public/TikTok.webp";
import instagram from "@/public/Instragram.webp";
import {usePrivy} from "@privy-io/react-auth";

export default function NavigationMobile({ toggleMenu, setToggleMenu }) {
    const { authenticated, user, login, logout } = usePrivy();

    const handleLinkClick = () => setToggleMenu(false);


    return (
        <nav className={`${styles.headerNav} ${toggleMenu ? styles.activeNav : ""}`}>
            <ul>
                <li>
                    <button onClick={authenticated ? logout : login}>{authenticated ? "CONNECTED" : "CONNECT"}</button>
                </li>
                <li>
                    <Link href="/marketplace" onClick={handleLinkClick}>MARKETPLACE</Link>
                </li>
                <li>
                    <Link href="/mint" onClick={handleLinkClick}>MINT</Link>
                </li>
                <li>
                    <Link href="/shop" onClick={handleLinkClick}>SHOP</Link>
                </li>
                <li>
                    <Link href="/community" onClick={handleLinkClick}>COMMUNITY</Link>
                </li>
                <li>
                    <Link href="/mindmap" onClick={handleLinkClick}>MINDMAP</Link>
                </li>
            </ul>
            <div className={styles.headerSocials}>
                <h4>SOCIALS</h4>
                <div>
                    <Link href="https://x.com/sleepyNFT_" target="_blank">
                        <Image src={X} width="50" height="50" alt="X icon" />
                    </Link>
                    <Link href="https://www.youtube.com/@SLEEPYNFT" target="_blank">
                        <Image src={youtube} width="50" height="50" alt="youtube icon" />
                    </Link>
                    <Link href="https://www.tiktok.com/@sleepynft" target="_blank">
                        <Image src={tiktok} width="50" height="50" alt="TikTok icon"/>
                    </Link>
                    <Link href="https://www.instagram.com/sleepynft_" target="_blank">
                        <Image src={instagram} width="50" height="50" alt="Instagram icon"/>
                    </Link>
                </div>
            </div>
            <div className={styles.headerCopy}>
                <div className={styles.headerCopyItem}>
                    <span>License</span>
                    <span>Terms & Conditions</span>
                </div>
                <div className={styles.headerCopyItem}>
                    <span>SLEEPY INC, © 2025 </span>
                    <Link href="mailto:hello@sleepynft.com">hello@sleepynft.com</Link>
                </div>
            </div>
        </nav>

    )
}
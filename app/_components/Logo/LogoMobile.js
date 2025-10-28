import styles from "@/app/_components/Logo/logo.module.css";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo.webp";

export default function LogoMobile({ toggleMenu, setToggleMenu}) {
  const handleLinkClick = () => setToggleMenu(false);


  return (
        <div className={styles.headerIntro}>
            <Link href="/" onClick={handleLinkClick}>
                <Image
                    src={logo}
                    width="100"
                    alt="mobile logo image"
                />
            </Link>
            <div
                onClick={() => setToggleMenu((prev) => !prev)}
                className={toggleMenu ? styles.activeBurger : styles.burger}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    )
}
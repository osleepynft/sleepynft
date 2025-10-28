import styles from "./logo.module.css"
import Link from "next/link";
import logo from "@/public/logo.webp";
import Image from "next/image";

export default function Logo () {
    return (
        <Link href="/">
            <Image
                src={logo}
                priority={true}
                quality={100}
                height="145"
                width="145"
                alt={"Logo"}
                className={styles.logoImg}
            />
        </Link>
    )
}
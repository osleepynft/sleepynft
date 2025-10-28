import Link from "next/link";
import styles from "./navigation.module.css"

export default function Navigation () {
    return (
        <nav className={styles.navigation}>
            <ul>
                <li>
                    <Link href="/marketplace" className={styles.navigationLink}>Marketplace</Link>
                </li>
                <li>
                    <Link href="/mint" className={styles.navigationLink}>Mint</Link>
                </li>
                <li>
                    <Link href="/mindmap" className={styles.navigationLink}>Mindmap</Link>
                </li>
                <li>
                    <Link href="/shop" className={styles.navigationLink}>Shop</Link>
                </li>
                <li>
                    <Link href="/community" className={styles.navigationLink}>Community</Link>
                </li>
            </ul>
        </nav>
    )
}
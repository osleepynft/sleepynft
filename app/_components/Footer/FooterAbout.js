import Link from "next/link";
import styles from "./footer.module.css";

export default function FooterAbout() {
    return (
        <div className={styles.footerNavigations}>
            <h3>ABOUT US</h3>
            <ul>
                <li>
                    <Link href="/team">Team</Link>
                </li>
                <li>
                    <Link href="/careers">Careers</Link>
                </li>
                <li>
                    <Link href="/blog">Blog</Link>
                </li>
            </ul>
        </div>
    )
}
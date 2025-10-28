import Link from "next/link";
import styles from "./footer.module.css";

export default function FooterOther() {
    return (
        <div className={`${styles.footerNavigations} ${styles.otherNavigations}`}>
            <h3>OTHER</h3>
            <ul>
                <li>
                    <Link href="/license">License</Link>
                </li>
                <li>
                    <Link href="/terms">Terms & Conditions</Link>
                </li>
                <li>
                    <Link href="/faq">Shop FAQs</Link>
                </li>
            </ul>
        </div>

    )
}
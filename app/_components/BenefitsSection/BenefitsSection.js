import styles from "./benefitsSection.module.css";
import Image from "next/image";
import ACharacter from "@/public/A.webp";

export default function BenefitsSection() {
    return (
        <div className={styles.benefitsSection}>
            <div className={styles.benefitsInner}>
                <Image
                    src={ACharacter}
                    width="163"
                    height="195"
                    alt="Benefits Image"
                />
                <div>
                    <h3>BENEFITS</h3>
                    <p>
                        We provide comprehensive benefits designed to support healthy living, ongoing learning, and
                        meaningful professional growth. Our culture thrives on the exchange of diverse perspectives,
                        experiences, and backgrounds.
                    </p>
                </div>
            </div>
            <div className={styles.benefitsItem}>
                <h3>HEALTH & WELLNESS</h3>
                <p>
                    <span>Medical Insurance</span>
                    <span>Dental and Vision Insurance</span>
                    <span>Health and wellness stipend</span>
                </p>
            </div>
            <div className={styles.benefitsItem}>
                <h3>PERKS</h3>
                <p>
                    <span>401(k) Retirement Plan</span>
                    <span>Flexible Working Hours</span>
                    <span>Conference Travel</span>
                    <span>Unlimited PTO</span>
                </p>
            </div>
        </div>
    );
}
import Image from "next/image";
import teamJoinImg from "@/public/Team & Careers.webp";
import Link from "next/link";
import styles from "./teamJoin.module.css";

export default function TeamJoin() {
    return (
        <section className={styles.teamJoin}>
            <div className={styles.teamJoinText}>
                <h2>INTERESTED IN JOINING?</h2>
                <p>
                    We&#39;re a team building the future of sleep and character IP.
                    If that sounds exciting to you, check out our open positions.
                </p>
                <Link href="/careers">VIEW CAREERS</Link>
            </div>

            <Image
                src={teamJoinImg}
                alt="Join our team"
                width={750}
                height={750}
            />
        </section>
    );
}

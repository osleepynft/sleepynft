import styles from "./member.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Member({image, title, description, twitterLink, twitterImage}) {
    return (
        <div className={styles.member}>
            <Image
                src={image}
                width="250"
                height="250"
                alt="Member Image"
            />
            <div className={styles.memberInfo}>
                <h3>{title}</h3>
                <p>{description}</p>
                <Link href={twitterLink} target="_blank">
                    <Image
                        src={twitterImage}
                        width="40"
                        height="40"
                        alt="Member account on Twitter(X)"
                    />
                </Link>
            </div>
        </div>
    )
}
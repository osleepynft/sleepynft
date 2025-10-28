import styles from "./jobList.module.css";
import Link from "next/link";
import arrow from "@/public/Arrow 5.svg";
import Image from "next/image";

const links = [
    {
        "href": "",
        "title": "SOCIAL MEDIA MANAGER",
        "description": "Marketing // Remote, Full Time"
    },
    {
        "href": "",
        "title": "HEAD OF CONTENT",
        "description": "Content // Remote, Full Time"
    },
    {
        "href": "",
        "title": "MARKETING LEAD",
        "description": "Marketing // Remote, Full Time"
    },
    {
        "href": "",
        "title": "3D Unreal Engine Artist",
        "description": "Art // Remote, Full Time"
    },
    {
        "href": "",
        "title": "PARTNERSHIP MANAGER",
        "description": "Partnerships // Remote, Full Time"
    },
    {
        "href": "",
        "title": "COMMUNITY MANAGER",
        "description": "Community // Remote, Full Time"
    },
    {
        "href": "",
        "title": "PRODUCT MANAGER",
        "description": "Product // Remote, Full Time"
    },
    {
        "href": "",
        "title": "LIVE2D RIGGER",
        "description": "Art // Remote, Full Time"
    }
]

export default function JobList () {
    return (
        <ul>
            {links.map((link, index) => (
                <li key={index}>
                    <Link href={link.href} className={styles.jobList}>
                        <div>
                            <h3>{link.title}</h3>
                            <p>{link.description}</p>
                        </div>
                        <Image
                            src={arrow}
                            width="47"
                            alt="Arrow image"
                        />
                    </Link>
                </li>
            ))}
        </ul>

    )
}
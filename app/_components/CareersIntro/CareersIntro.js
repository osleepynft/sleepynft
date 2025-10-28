import styles from "./careersIntro.module.css";
import Image from "next/image";
import introImage from "@/public/Team & Careers.webp";
import TeamCareerBtn from "@/app/_components/TeamCareerBtn/TeamCareerBtn";

export default function CareersIntro({ onScrollToJobs }) {
    return (
        <div className={styles.careersIntro}>
            <div className={styles.careersIntroInner}>
                <h2>CAREERS</h2>
                <p>
                    We’re looking for passionate and creative builders, creators, and doers. Those who share our passion
                    for sleep, technology, art, and web3 culture.
                </p>
                <TeamCareerBtn onClick={onScrollToJobs}>
                    VIEW OPEN POSITIONS
                </TeamCareerBtn>
            </div>
            <Image
                src={introImage}
                width="457"
                height="457"
                alt="Careers Intro Image"/>
        </div>
    );
}
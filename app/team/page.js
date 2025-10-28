import styles from "./page.module.css";
import Container from "@/app/_components/Container/Container";
import meetTheTeam from "@/public/MEET THE TEAM.webp";
import Image from "next/image";
import firstMember from "@/public/SLEEPYSIGN.webp";
import secondMember from "@/public/NNNOGONNN.webp";
import thirdMember from "@/public/Teezi.webp";
import XLogo from "@/public/X.webp";
import Member from "@/app/_components/Member/Member";
import TeamJoin from "@/app/_components/TeamJoin/TeamJoin";

export const metadata = {
    title: "Team",
};

const members = [
    {
        image: firstMember,
        title: "SLEEPY SIGN",
        description: "Chief Executive Officer",
        twitterLink: "https://x.com/sleepyxsign",
        twitterImage: XLogo,
    },
    {
        image: secondMember,
        title: "NNNOGONNN",
        description: "Lead Artist",
        twitterLink: "https://x.com/nnnogonnn",
        twitterImage: XLogo,
    },
    {
        image: thirdMember,
        title: "TEEZI",
        description: "3D Artist",
        twitterLink: "https://x.com/artxteezi",
        twitterImage: XLogo,
    },
];

export default function Page() {
    return (
        <div className={styles.page}>
            <Container>
                <Image
                    src={meetTheTeam}
                    width="740"
                    height="135"
                    className={styles.pageImg}
                    alt="Team title Image"
                />
                <div className={styles.memberInner}>{
                    members.map((member, index) => (
                        <Member key={index} {...member} />
                    ))}
                </div>
                <TeamJoin />
            </Container>
        </div>
    );
}
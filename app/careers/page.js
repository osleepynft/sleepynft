"use client"
import Container from "@/app/_components/Container/Container";
import CareersIntro from "@/app/_components/CareersIntro/CareersIntro";
import BenefitsSection from "@/app/_components/BenefitsSection/BenefitsSection";
import JobList from "@/app/_components/JobList/JobList";
import styles from "./page.module.css";
import { useRef, useState } from "react";
import Image from "next/image";
import comingSoonImg from "@/public/comingSoon.webp";

export default function Page() {
    const [commingSoon, setCommingSoon] = useState(true);
    const jobsRef = useRef(null);

    if (commingSoon) {
        return (
          <div className="comingSoon">
              <Container>
                  <Image
                    src={comingSoonImg}
                    width="1200"
                    alt="Coming Soon" />
              </Container>
          </div>
        )
    }

    return (
        <div className={styles.page}>
            <Container>
                <CareersIntro
                    onScrollToJobs={() =>
                        jobsRef.current?.scrollIntoView(
                            { behavior: "smooth" })}
                />
                <BenefitsSection/>
                <div ref={jobsRef}>
                    <JobList/>
                </div>
            </Container>
        </div>
    );
}
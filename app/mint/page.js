import styles from "./page.module.css"
import Container from "@/app/_components/Container/Container";
import MintIntro from "@/app/_components/MintIntro/MintIntro";
import MintMap from "@/app/_components/MintMap/MintMap";
import Accordion from "@/app/_components/Accordion/Accordion";

export const metadata = {
  title: "Mint",
};


export default function Page () {
    return (
        <div className={styles.page}>
            <Container>
                <MintIntro />
                <MintMap />
                <Accordion />
            </Container>
        </div>
    )
}
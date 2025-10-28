import FooterLogo from "@/app/_components/Footer/FooterLogo";
import FooterAbout from "@/app/_components/Footer/FooterAbout";
import FooterOther from "@/app/_components/Footer/FooterOther";
import FooterSocial from "@/app/_components/Footer/FooterSocial";
import styles from "./footer.module.css"
import Container from "@/app/_components/Container/Container";
export default function Footer () {
    return (
        <footer className={styles.footer}>
          <Container>
            <div className={styles.footerInner}>
              <FooterLogo />
              <FooterAbout />
              <FooterOther />
              <FooterSocial />
            </div>
          </Container>
        </footer>
    )
}
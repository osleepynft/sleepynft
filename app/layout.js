import { Geologica } from "next/font/google";
import "./globals.css";
import FooterWrapper from "@/app/_components/Footer/FooterWrapper";
import Preloader from "@/app/_components/Preloader/Preloader";
import MusicPlayer from "@/app/_components/MusicPlayer/MusicPlayer";
import Providers from "@/app/_components/PrivyProviderWrapper/PrivyProviderWrapper";
import LuksoProfileProviderWrapper from "@/app/_contexts/LuksoProfileProviderWrapper";
import HeaderWrapper from "@/app/_components/Header/HeaderWrapper";

const geologica = Geologica({
  display: "swap",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    template: "%s - Sleepy",
    default: "Sleepy",
  },
  description:
    "SLEEPY merges luxury silk sleepwear, premium bedding, and anime-inspired AI companions to create a new dimension of modern rest. Designed for dreamers who seek comfort, creativity, and meaningful digital connection — both offline and online. Sleep smarter, dream deeper.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <body className={geologica.className}>
    <Providers>
      <LuksoProfileProviderWrapper>
        <Preloader>
          <HeaderWrapper />
          <MusicPlayer />
          <main>{children}</main>
          <FooterWrapper />
        </Preloader>
      </LuksoProfileProviderWrapper>
    </Providers>
    </body>
    </html>
  );
}
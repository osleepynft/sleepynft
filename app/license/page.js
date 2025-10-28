import Container from "@/app/_components/Container/Container";
import comingSoonImg from "@/public/comingSoon.webp";
import Image from "next/image";

export const metadata = {
  title: "License",
};

export default function Page () {
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
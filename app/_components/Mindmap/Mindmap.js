import styles from "./mindmap.module.css";
import Image from "next/image";
import characterE from "@/public/E.png";

export default function Mindmap() {
    return (
        <div className={styles.mindmap}>
            <div>
                <h1>MINDMAP</h1>
                <p>
                    We create to empower others, bring people together, and help create healthier lifestyle habits. A
                    profound vision that larger than just a simple project.
                </p>
            </div>
            <Image
                src={characterE}
                width="316"
                alt="Mindmap image"
            />
        </div>
    );
}
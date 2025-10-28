import styles from "./mindmap.module.css";
import Image from "next/image";
import community from "@/public/Community.webp";
import lifestyle from "@/public/Lifestyle.webp";
import metaVerse from "@/public/Metaverse.jpg";
import vision from "@/public/Vision.jpg";
import wellness from "@/public/Wellness.jpg";
import crossroads from "@/public/Crossroads.webp";

export default function MindmapImages() {
    return (
        <div className={styles.mindmapImg}>
            <div className={styles.mindmapImgItemFirst}>
                <div>
                    <span>COMMUNITY</span>
                    <Image
                        src={community}
                        width="399"
                        height="400"
                        alt="Mindmap image"
                    />
                </div>
                <div>
                    <span>LIFESTYLE</span>
                    <Image
                        src={lifestyle}
                        width="399"
                        height="403"
                        alt="Mindmap image"
                    />
                </div>
            </div>
            <div className={styles.mindmapImgItemSecond}>
                <div>
                    <span>METAVERSE</span>
                    <Image
                        src={metaVerse}
                        width="315"
                        height="810"
                        alt="Mindmap image"
                    />
                </div>
            </div>
            <div className={styles.mindmapImgItemThird}>
                <div>
                    <span>VISION</span>
                    <Image
                        src={vision}
                        width="300"
                        height="200"
                        alt="Mindmap image"
                    />
                </div>
                <div>
                    <span>WELLNESS</span>
                    <Image
                        src={wellness}
                        width="300"
                        height="200"
                        alt="Mindmap image"
                    />
                </div>
                <div>
                    <span>CROSSROADS</span>
                    <Image
                        src={crossroads}
                        width="614"
                        height="597"
                        alt="Mindmap image"
                    />
                </div>
            </div>
        </div>
    );
}
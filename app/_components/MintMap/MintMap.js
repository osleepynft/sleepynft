"use client";
import styles from "./mintMap.module.css";
import Image from "next/image";
import mintMapImg from "@/public/Mintmap.webp";
import mintMapClose from "@/public/close-btn.svg";
import mintMap1 from "@/public/1.webp";
import mintMap2 from "@/public/2.webp";
import mintMap3 from "@/public/3.webp";
import mintMap4 from "@/public/4.webp";
import mintMap5 from "@/public/5.webp";
import mintMap6 from "@/public/6.webp";
import mintMap7 from "@/public/7.webp";
import mintMap8 from "@/public/8.webp";
import { useState } from "react";

const popups = [
  {
    id: 1,
    class: "first",
    image: mintMap1,
    width: "308",
    title: "5% Marketing:",
    description: [
      "With a small portion of our collection now minted out we can begin marketing within web3 ecosystems and help bring more new users to the LUKSO network and SLEEPY community.",
    ],
  },
  {
    id: 2,
    class: "second",
    image: mintMap2,
    width: "253",
    title: "10% Mobile Sleep App:",
    description: [
      "We now have the funds to be able to bring our mobile app to life! All SLEEPY holders will have free premium access to Somni by linking their Universal Profiles.",
    ],
  },
  {
    id: 3,
    class: "third",
    image: mintMap3,
    width: "283",
    title: "25% Lifestyle Capsule Drop:",
    description: [
      "The first ever Capsule Drop for SLEEPY Lifestyle will go into production and launch soon after.",
      "Limited Edition items enabled with ARX decentralized technology will be available for holders, as well as have discounts in the Public shop.",
      "Holders with a set number of Access Cards will also obtain their free claims.",
    ],
  },
  {
    id: 4,
    class: "fourth",
    image: mintMap4,
    width: "359",
    title: "40% Website Update:",
    description: [
      "The SLEEPY website will get its first update, bringing a Community Submission portal and Collector Profiles. ",
      "Users will be able to collect unique badges, emblems, and stamps for their participation in the community.",
    ],
  },
  {
    id: 5,
    class: "fifth",
    image: mintMap5,
    width: "294",
    title: "60% Social Media Content:",
    description: [
      "Creating content on various social media platforms to promote our brands such as: TikTok, Instagram, Giphy, and Youtube",
      "All content centered around SLEEPY, our Lifestyle brand, and somni",
    ],
  },
  {
    id: 6,
    class: "sixth",
    image: mintMap6,
    width: "311",
    title: "80% Closet:",
    description: [
      "Production & release of our 3D character models will come with a website update within the Collector Profile, known as our Closet system.",
      "Users can collect and change outfits for their characters to personalize.",
    ],
  },
  {
    id: 7,
    class: "seventh",
    image: mintMap7,
    width: "277",
    title: "90% VR/XR Companion App:",
    description: [
      "Begin production on our AI Companion app. Web app will work as a mini-app within a user’s Universal Profile Grid, which allows for a VR experience. This launch will also come as a mobile app for XR experience.",
    ],
  },
  {
    id: 8,
    class: "eighth",
    image: mintMap8,
    width: "821",
    title: "100% Celebration:",
    description: [
      "SLEEPY mint out celebration! We will begin the process of our next expansions within the SLEEPY universe, as well as come together as a community with our first ever hosted event in Thailand!",
    ],
  },
];

export default function MintMap() {

  const [activePopupId, setActivePopupId] = useState(null);

  return (
    <div className={styles.mintMap}>
      <div className={styles.mintMapTop}>
        <h1>MINTMAP</h1>
        <p>
          Progression of our minting will showcase below in phases how we will begin using the funding to grow our
          company, bring in new users, and give back to our community.
        </p>
      </div>
      <div className={styles.mintMapInner}>
        <div className={styles.mintMapItem}>
          <Image
            src={mintMapImg}
            width="821"
            height="2429"
            className={styles.mintMapItemImg}
            alt="Mintmap Image"
          />
          {popups.map((popup, index) => (
            <div key={popup.id} className={`${styles.popupInner} ${styles[popup.class]}`}>
              <div
                className={`${styles.popupItem} ${activePopupId === popup.id ? styles.active : ""} ${popup.id % 2 === 0 ? styles.reverse : ""} ${popup.id === 8 ? styles.popupEighth : ""}`}
                onClick={() => setActivePopupId(popup.id)}
              >
                <button onClick={(event) => {
                  event.stopPropagation();
                  setActivePopupId(null);
                }}>
                  <Image
                    src={mintMapClose}
                    width="20"
                    height="20"
                    alt="Close buttob"
                  />
                </button>
                <div className={styles.popupDescription}>
                  <h3>{popup.title}</h3>
                  {popup.description.map((line, i) => (
                    <p key={i}>{line}</p>
                  ))}
                </div>
                <Image
                  src={popup.image}
                  width={popup.width}
                  className={styles.popupImg}
                  alt="popup image"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
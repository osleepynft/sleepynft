"use client"
import styles from "./accordion.module.css";
import Image from "next/image";
import arrow from "@/public/accordion-arrow.svg";
import {useState} from "react";

const accordion = [
    {
        id: 1,
        "title": "WHAT IS SLEEPY?",
        "description": [
          "SLEEPY is a company focused on creating unique characters that act as your personal companion to assist with promoting and enabling healthier life habits. "
        ],
    },
    {
        id: 2,
        "title": "WHAT IS THE GOAL OF SLEEPY?",
        "description": [
          "SLEEPY has many goals, starting with creating IP that can be used to drive story-telling and innovation.",
          "We believe in the ownership of characters and the usage of decentralized technology. With these in mind we can change the way usage of NFTs, authentication of luxury fashionwear, and ownership of health data is used.",
          "Our first demonstrations of these are creation of 3D characters, luxury sleepwear & bedding, and a sleep tracking app that rewards healthy habits."
        ],
    },
    {
        id: 3,
        "title": "WHAT NETWORK IS THIS LAUNCHED ON?",
        "description": [
          "SLEEPY is launching on the L1 EVM -- LUKSO"
        ],
    },
    {
        id: 4,
        "title": "HOW MUCH IS MINT?",
        "description": [
          "Minting will be in 3 phases:",
          "Access Mint - 6 LYX (Max 2 mints per profile)",
          "Presale Mint - 8 LYX (Max 2 mints per profile)",
          "Public Mint - 10 LYX (Max 20 mints per profile)"
        ],
    },
    {
        id: 5,
        "title": "WHAT IS THE SIZE OF THE COLLECTION?",
        "description": [
          "Collection size is a total of 10,000 NFTs featuring unique SLEEPY characters."
        ],
    },
    {
        id: 6,
        "title": "WHAT SMART CONTRACT STANDARD IS USED?",
        "description": [
          "We have created a new custom smart contract on the LUKSO blockchain using the LSP8 Standard.",
          "Our custom smart contract is known as LSP8-TBP, which stands for Token Bound Profiles.",
          "This custom smart contract allows each minted character to have their own Universal Profile attached to them. ",
          "This allows for each character to have their own growable IP using on-chain identity & reputation, stackable & tradeable inventory, and programmable usage via LSP6 Key Manager."
        ],
    },
    {
        id: 7,
        "title": "DO YOU NEED A UNIVERSAL PROFILE TO MINT?",
        "description": [
          "Yes, you will need to have a Universal Profile on LUKSO in order to mint a SLEEPY NFT.   ",
          "Since each character has their own Universal Profile tied to them it is a requirement for minting and using character inventory."
        ],
    },
    {
        id: 8,
        "title": "WHAT IS A UNIVERSAL PROFILE?",
        "description": [
          "A Universal Profile is a smart contract based account system, which acts as a standardized digital identity. This makes your account interoperable across platforms & apps, secure & flexible, and programmable.",
          "Universal Profiles are compatible on both desktop and mobile.",
          "If you do not have one yet, feel free to create one here: https://universaleverything.io/"
        ],
    }
]

export default function Accordion() {
    const [activeAccId, setActiveAccId] = useState(null);

    const toggleAccordion = (id) => {
        setActiveAccId((prev) => prev === id ? null : id);
    }

    return (
        <div className={styles.accordion}>
            <h3>ABOUT</h3>
            {accordion.map((el, index) => (
                <div
                    key={el.id}
                    className={`${styles.accordionItem} ${activeAccId === el.id ? styles.show : styles.hide}`}

                >
                    <h4 onClick={() => toggleAccordion(el.id)}>
                        <span>{el.title}</span>
                        <Image
                            src={arrow}
                            width="60"
                            height="60"
                            alt="Accordion Arrow"
                        />
                    </h4>
                    <p>{el.description.map((text, index) => (
                      <span key={index}>{text}</span>
                    ))}</p>
                </div>
            ))}
        </div>
    );
}
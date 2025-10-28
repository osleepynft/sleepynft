"use client";
import styles from "./headerMobile.module.css";
import LogoMobile from "@/app/_components/Logo/LogoMobile";
import {useState} from "react";
import NavigationMobile from "@/app/_components/Navigation/NavigationMobile";

export default function HeaderMobile() {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <header className={`${styles.header} ${toggleMenu ? styles.active : ""}`}>
            <LogoMobile toggleMenu={toggleMenu} setToggleMenu={setToggleMenu}/>
            <NavigationMobile toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
        </header>
    );
}
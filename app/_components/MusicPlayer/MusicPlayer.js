"use client";
import styles from "./musicPlayer.module.css";
import Image from "next/image";
import MusicPlayerImg from "@/public/MUSIC Player.webp";
import MpPlusImg from "@/public/musicPlayer-plus.svg";
import MpMinusImg from "@/public/musicPlayer-minus.svg";
import prev from "@/public/prev.svg";
import next from "@/public/next.svg";
import pause from "@/public/pause.svg";
import play from "@/public/play.svg";

import {useEffect, useRef, useState} from "react";

const tracks = [
    { title: "Reflections", src: "../../songs/Reflections.mp3" },
    { title: "Dreamy Melody", src: "../../songs/Dreamy Melodies.mp3" },
    { title: "Hazy Wake", src: "../../songs/Hazy Wake.mp3" },
    { title: "Late-Night Reflections", src: "../../songs/Late-Night Reflections.mp3" },
    { title: "Echoes of the Night", src: "../../songs/Echoes of the Night.mp3" },
    { title: "Chasing Dreams", src: "../../songs/Chasing Dreams.mp3" }
]

export default function MusicPlayer() {
    const [open, setOpen] = useState(false);
    const [current, setCurrent] = useState(0);
    const [playing, setPlaying] = useState(false);
    const audioRef = useRef(null);

    useEffect(() => {
        if (!audioRef.current) return;
        if (playing) audioRef.current.play();
        else audioRef.current.pause();
    }, [playing, current])

    const nextTrack = () => {
        setCurrent( (prev) => (prev + 1) % tracks.length);
        setPlaying(true);
    };

    const prevTrack = () => {
        setCurrent((prev) => (prev - 1 + tracks.length) % tracks.length);
        setPlaying(true);
    }

    return (
        <div className={`${styles.musicPlayer} ${open ? styles.open : styles.closed}`}>
            <Image
                src={open ? MpMinusImg : MpPlusImg}
                width="35"
                height="35"
                className={styles.mpIcon}
                onClick={() => setOpen((prev) => !prev)}
                alt="Music player Icon"
            />
            <div className={styles.playerEq}>
                <Image
                    src={MusicPlayerImg}
                    width="120"
                    height="120"
                    alt="Music player image"
                />
                <div className={playing ? styles.eqRows : styles.stopRows}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div className={styles.playerBtns}>
                <div className={styles.playerBtns}>
                    <div className={styles.controls}>
                        <button onClick={prevTrack}>
                            <Image
                                src={prev}
                                width="21"
                                height="26"
                                alt="prev button"/>
                        </button>
                        <button onClick={() => setPlaying((prev) => !prev)}>
                            <Image
                                src={playing ? pause : play}
                                width="33"
                                height="33"
                                className={styles.playBtn}
                                alt="play button"/>
                        </button>
                        <button onClick={nextTrack}>
                            <Image
                                src={next}
                                width="21"
                                height="26"
                                alt="next button"/>
                        </button>
                    </div>
                    <p className={styles.trackTitle}>{tracks[current].title}</p>
                    <audio ref={audioRef} src={tracks[current].src} onEnded={nextTrack}/>
                </div>
            </div>
        </div>
    );
}
"use client"
import { useEffect, useState } from "react";
import Loading from "@/app/loading";

export default function Preloader({ children }) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 0);
        return () => clearTimeout(timer);
    }, []);

    return loading ? <Loading /> : children;
}
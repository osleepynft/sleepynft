"use client";
import { LuksoProfileProvider } from "./LuksoProfileContext";

export default function LuksoProfileProviderWrapper({ children }) {
  return <LuksoProfileProvider>{children}</LuksoProfileProvider>;
}


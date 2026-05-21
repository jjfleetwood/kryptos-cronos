"use client";

import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from "react";

export type SkinId = "youth" | "standard" | "mature";

export type SkinTokens = {
  id: SkinId;
  dark: boolean;
  pageBg: string;
  cardBg: string;
  cardBorder: string;
  textPrimary: string;
  textSecondary: string;
  textMuted: string;
  accent: string;
  accentHover: string;
  navBg: string;
  inputBg: string;
  inputBorder: string;
  btnPrimary: string;
  btnPrimaryText: string;
  successColor: string;
  fontScale: number; // 1.0 = normal, 1.15 = larger (youth)
};

export const SKINS: Record<SkinId, SkinTokens> = {
  // 0–12: bright light mode, violet/purple accent — feels like a game (Duolingo/Scratch)
  youth: {
    id: "youth",
    dark: false,
    pageBg: "linear-gradient(160deg, #fdf4ff 0%, #ede9fe 50%, #dbeafe 100%)",
    cardBg: "rgba(255,255,255,0.90)",
    cardBorder: "rgba(124,58,237,0.22)",
    textPrimary: "#1e1b4b",
    textSecondary: "#4c1d95",
    textMuted: "#7c3aed",
    accent: "#7c3aed",
    accentHover: "#6d28d9",
    navBg: "rgba(255,255,255,0.97)",
    inputBg: "rgba(255,255,255,0.95)",
    inputBorder: "rgba(124,58,237,0.25)",
    btnPrimary: "linear-gradient(135deg, #7c3aed, #a78bfa)",
    btnPrimaryText: "#ffffff",
    successColor: "#16a34a",
    fontScale: 1.1,
  },
  // 15–50: dark + terminal green — classic hacker/CTF operator feel
  standard: {
    id: "standard",
    dark: true,
    pageBg: "linear-gradient(135deg, #020804 0%, #061206 50%, #0a160a 100%)",
    cardBg: "rgba(74,222,128,0.03)",
    cardBorder: "rgba(74,222,128,0.10)",
    textPrimary: "#dcfce7",
    textSecondary: "#86efac",
    textMuted: "#166534",
    accent: "#4ade80",
    accentHover: "#86efac",
    navBg: "rgba(1,4,1,0.97)",
    inputBg: "rgba(74,222,128,0.05)",
    inputBorder: "rgba(74,222,128,0.15)",
    btnPrimary: "linear-gradient(135deg, #16a34a, #4ade80)",
    btnPrimaryText: "#000000",
    successColor: "#4ade80",
    fontScale: 1.0,
  },
  // 50+: deep navy + gold — executive/professional, high contrast
  mature: {
    id: "mature",
    dark: true,
    pageBg: "linear-gradient(160deg, #040c1e 0%, #071428 60%, #040c1e 100%)",
    cardBg: "rgba(245,158,11,0.03)",
    cardBorder: "rgba(245,158,11,0.12)",
    textPrimary: "#f0f6ff",
    textSecondary: "#94a3b8",
    textMuted: "#475569",
    accent: "#f59e0b",
    accentHover: "#fbbf24",
    navBg: "rgba(2,6,16,0.98)",
    inputBg: "rgba(255,255,255,0.04)",
    inputBorder: "rgba(245,158,11,0.18)",
    btnPrimary: "linear-gradient(135deg, #b45309, #f59e0b)",
    btnPrimaryText: "#000000",
    successColor: "#22c55e",
    fontScale: 1.0,
  },
};

const STORAGE_KEY = "kryptos-skin";

type SkinContextValue = {
  skin: SkinTokens;
  skinId: SkinId;
  setSkin: (id: SkinId) => void;
  prompted: boolean;
  setPrompted: (v: boolean) => void;
};

const SkinContext = createContext<SkinContextValue>({
  skin: SKINS.mature,
  skinId: "mature",
  setSkin: () => {},
  prompted: true,
  setPrompted: () => {},
});

export function SkinProvider({ children }: { children: ReactNode }) {
  const [skinId, setSkinId] = useState<SkinId>("mature");
  const [prompted, setPrompted] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY) as SkinId | null;
    if (stored && SKINS[stored]) {
      setSkinId(stored);
      setPrompted(true);
    } else {
      setPrompted(false);
    }
  }, []);

  // Apply data-skin to <html> for CSS variable overrides
  useEffect(() => {
    document.documentElement.setAttribute("data-skin", skinId);
    // Font scale via CSS var
    document.documentElement.style.setProperty(
      "--font-scale",
      String(SKINS[skinId].fontScale)
    );
  }, [skinId]);

  const setSkin = useCallback((id: SkinId) => {
    setSkinId(id);
    localStorage.setItem(STORAGE_KEY, id);
    // Persist to server if logged in
    fetch("/api/skin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ skin: id }),
    }).catch(() => {});
  }, []);

  return (
    <SkinContext.Provider
      value={{ skin: SKINS[skinId], skinId, setSkin, prompted, setPrompted }}
    >
      {children}
    </SkinContext.Provider>
  );
}

export function useSkin() {
  return useContext(SkinContext);
}

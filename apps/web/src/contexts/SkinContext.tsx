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
  // 0–12: same core dark navy as mature, larger font
  youth: {
    id: "youth",
    dark: true,
    pageBg: "linear-gradient(135deg, #0d1117 0%, #0f2027 50%, #1a1a2e 100%)",
    cardBg: "rgba(255,255,255,0.03)",
    cardBorder: "rgba(255,255,255,0.10)",
    textPrimary: "#f0f6ff",
    textSecondary: "#94a3b8",
    textMuted: "#475569",
    accent: "#22d3ee",
    accentHover: "#67e8f9",
    navBg: "rgba(13,17,23,0.98)",
    inputBg: "rgba(255,255,255,0.04)",
    inputBorder: "rgba(255,255,255,0.12)",
    btnPrimary: "linear-gradient(135deg, #0e7490, #22d3ee)",
    btnPrimaryText: "#000000",
    successColor: "#22c55e",
    fontScale: 1.1,
  },
  // 15–50: same core dark navy as mature, standard font
  standard: {
    id: "standard",
    dark: true,
    pageBg: "linear-gradient(135deg, #0d1117 0%, #0f2027 50%, #1a1a2e 100%)",
    cardBg: "rgba(255,255,255,0.03)",
    cardBorder: "rgba(255,255,255,0.10)",
    textPrimary: "#f0f6ff",
    textSecondary: "#94a3b8",
    textMuted: "#475569",
    accent: "#22d3ee",
    accentHover: "#67e8f9",
    navBg: "rgba(13,17,23,0.98)",
    inputBg: "rgba(255,255,255,0.04)",
    inputBorder: "rgba(255,255,255,0.12)",
    btnPrimary: "linear-gradient(135deg, #0e7490, #22d3ee)",
    btnPrimaryText: "#000000",
    successColor: "#22c55e",
    fontScale: 1.0,
  },
  // 50+: deep navy + gold — executive/professional, high contrast
  mature: {
    id: "mature",
    dark: true,
    pageBg: "linear-gradient(135deg, #0d1117 0%, #0f2027 50%, #1a1a2e 100%)",
    cardBg: "rgba(245,158,11,0.03)",
    cardBorder: "rgba(245,158,11,0.12)",
    textPrimary: "#f0f6ff",
    textSecondary: "#94a3b8",
    textMuted: "#475569",
    accent: "#f59e0b",
    accentHover: "#fbbf24",
    navBg: "rgba(13,17,23,0.98)",
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

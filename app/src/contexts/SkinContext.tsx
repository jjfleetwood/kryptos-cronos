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
  youth: {
    id: "youth",
    dark: false,
    pageBg: "linear-gradient(160deg, #e0f2fe 0%, #fef9c3 60%, #dcfce7 100%)",
    cardBg: "rgba(255,255,255,0.85)",
    cardBorder: "rgba(14,165,233,0.25)",
    textPrimary: "#1e293b",
    textSecondary: "#475569",
    textMuted: "#94a3b8",
    accent: "#0ea5e9",
    accentHover: "#0284c7",
    navBg: "rgba(255,255,255,0.95)",
    inputBg: "rgba(255,255,255,0.9)",
    inputBorder: "rgba(14,165,233,0.3)",
    btnPrimary: "linear-gradient(135deg, #0ea5e9, #38bdf8)",
    btnPrimaryText: "#ffffff",
    successColor: "#16a34a",
    fontScale: 1.1,
  },
  standard: {
    id: "standard",
    dark: true,
    pageBg: "linear-gradient(135deg, #0d1117 0%, #0f2027 50%, #1a1a2e 100%)",
    cardBg: "rgba(255,255,255,0.03)",
    cardBorder: "rgba(255,255,255,0.08)",
    textPrimary: "#e6edf3",
    textSecondary: "#8b949e",
    textMuted: "#484f58",
    accent: "#22d3ee",
    accentHover: "#67e8f9",
    navBg: "rgba(6,10,16,0.95)",
    inputBg: "rgba(255,255,255,0.05)",
    inputBorder: "rgba(255,255,255,0.1)",
    btnPrimary: "linear-gradient(135deg, #06b6d4, #22d3ee)",
    btnPrimaryText: "#000000",
    successColor: "#22c55e",
    fontScale: 1.0,
  },
  mature: {
    id: "mature",
    dark: true,
    pageBg: "linear-gradient(160deg, #060a10 0%, #0d1117 50%, #0a0e1a 100%)",
    cardBg: "rgba(255,255,255,0.02)",
    cardBorder: "rgba(255,255,255,0.06)",
    textPrimary: "#e6edf3",
    textSecondary: "#8b949e",
    textMuted: "#484f58",
    accent: "#22d3ee",
    accentHover: "#67e8f9",
    navBg: "rgba(3,6,12,0.97)",
    inputBg: "rgba(255,255,255,0.04)",
    inputBorder: "rgba(255,255,255,0.08)",
    btnPrimary: "linear-gradient(135deg, #06b6d4, #22d3ee)",
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

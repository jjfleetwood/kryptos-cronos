"use client";

import { useState } from "react";
import { useSkin, type SkinId, SKINS } from "@/contexts/SkinContext";

type Option = {
  id: SkinId;
  ageLabel: string;
  headline: string;
  tagline: string;
  emoji: string;
  preview: React.ReactNode;
};

function YouthPreview() {
  return (
    <div className="rounded-xl overflow-hidden border" style={{ background: "linear-gradient(135deg,#fdf4ff,#ede9fe)", borderColor: "rgba(124,58,237,0.3)", width: "100%", height: 84 }}>
      <div style={{ background: "rgba(255,255,255,0.92)", borderBottom: "1px solid rgba(124,58,237,0.15)", padding: "5px 8px" }}>
        <div className="flex gap-1.5 items-center">
          <div className="w-10 h-2 rounded-full" style={{ background: "#7c3aed" }} />
          <div className="w-6 h-2 rounded-full" style={{ background: "rgba(124,58,237,0.25)" }} />
          <div className="w-8 h-2 rounded-full" style={{ background: "rgba(124,58,237,0.15)" }} />
        </div>
      </div>
      <div style={{ padding: "8px" }}>
        <div className="w-3/4 h-2.5 rounded-full mb-1.5" style={{ background: "#1e1b4b" }} />
        <div className="w-full h-1.5 rounded-full mb-1" style={{ background: "rgba(124,58,237,0.2)" }} />
        <div className="w-5/6 h-1.5 rounded-full" style={{ background: "rgba(124,58,237,0.12)" }} />
        <div className="flex gap-1 mt-2.5">
          <div className="h-3.5 w-14 rounded-full" style={{ background: "linear-gradient(135deg,#7c3aed,#a78bfa)" }} />
          <div className="h-3.5 w-8 rounded-full" style={{ background: "rgba(124,58,237,0.15)" }} />
        </div>
      </div>
    </div>
  );
}

function TerminalPreview() {
  return (
    <div className="rounded-lg overflow-hidden border" style={{ background: "#020804", borderColor: "rgba(74,222,128,0.2)", width: "100%", height: 84, fontFamily: "monospace" }}>
      <div style={{ background: "rgba(74,222,128,0.06)", borderBottom: "1px solid rgba(74,222,128,0.12)", padding: "4px 8px" }}>
        <div className="flex gap-1 items-center">
          <div className="w-14 h-1.5 rounded" style={{ background: "rgba(74,222,128,0.3)" }} />
          <div className="w-8 h-1.5 rounded" style={{ background: "rgba(74,222,128,0.12)" }} />
        </div>
      </div>
      <div style={{ padding: "8px" }}>
        <div className="flex items-center gap-1 mb-1">
          <span style={{ color: "#4ade80", fontSize: 9 }}>▶</span>
          <div className="w-20 h-1.5 rounded" style={{ background: "rgba(74,222,128,0.5)" }} />
        </div>
        <div className="w-3/4 h-1.5 rounded mb-1" style={{ background: "rgba(74,222,128,0.15)" }} />
        <div className="w-full h-1.5 rounded mb-1" style={{ background: "rgba(74,222,128,0.08)" }} />
        <div className="flex gap-1 mt-2">
          <div className="h-3 w-12 rounded" style={{ background: "rgba(74,222,128,0.2)", border: "1px solid rgba(74,222,128,0.3)" }} />
          <div className="h-3 w-8 rounded" style={{ background: "rgba(74,222,128,0.08)" }} />
        </div>
      </div>
    </div>
  );
}

function ExecutivePreview() {
  return (
    <div className="rounded-lg overflow-hidden border" style={{ background: "#040c1e", borderColor: "rgba(245,158,11,0.2)", width: "100%", height: 84 }}>
      <div style={{ background: "rgba(245,158,11,0.06)", borderBottom: "1px solid rgba(245,158,11,0.12)", padding: "4px 8px" }}>
        <div className="flex gap-1 items-center">
          <div className="w-10 h-1.5 rounded" style={{ background: "rgba(245,158,11,0.4)" }} />
          <div className="w-6 h-1.5 rounded" style={{ background: "rgba(255,255,255,0.08)" }} />
          <div className="w-8 h-1.5 rounded" style={{ background: "rgba(255,255,255,0.05)" }} />
        </div>
      </div>
      <div style={{ padding: "8px" }}>
        <div className="w-3/4 h-2 rounded mb-1.5" style={{ background: "rgba(240,246,255,0.7)" }} />
        <div className="w-full h-1.5 rounded mb-1" style={{ background: "rgba(148,163,184,0.25)" }} />
        <div className="w-5/6 h-1.5 rounded" style={{ background: "rgba(148,163,184,0.15)" }} />
        <div className="flex gap-1 mt-2">
          <div className="h-3 w-12 rounded" style={{ background: "linear-gradient(135deg,#b45309,#f59e0b)" }} />
          <div className="h-3 w-8 rounded" style={{ background: "rgba(245,158,11,0.1)" }} />
        </div>
      </div>
    </div>
  );
}

const OPTIONS: Option[] = [
  {
    id: "youth",
    ageLabel: "0 – 12",
    headline: "Young Explorer",
    tagline: "Bright colors, big text, adventure vibes — let's go!",
    emoji: "🚀",
    preview: <YouthPreview />,
  },
  {
    id: "standard",
    ageLabel: "15 – 50",
    headline: "Hacker Terminal",
    tagline: "Dark, green, and sharp — the authentic operator experience.",
    emoji: "💻",
    preview: <TerminalPreview />,
  },
  {
    id: "mature",
    ageLabel: "50+",
    headline: "Executive View",
    tagline: "Deep navy and gold — clean, high-contrast, professional.",
    emoji: "🏛️",
    preview: <ExecutivePreview />,
  },
];

export default function AgePrompt() {
  const { prompted, setSkin, setPrompted } = useSkin();
  const [hovered, setHovered] = useState<SkinId | null>(null);
  const [chosen, setChosen] = useState<SkinId | null>(null);

  if (prompted) return null;

  function choose(id: SkinId) {
    setChosen(id);
    setTimeout(() => {
      setSkin(id);
      setPrompted(true);
    }, 350);
  }

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
      style={{ background: "rgba(2,4,8,0.97)", backdropFilter: "blur(12px)" }}
    >
      <div className="w-full max-w-3xl">
        {/* Heading */}
        <div className="text-center mb-10">
          <div className="text-5xl mb-4">🎮</div>
          <h1 className="text-3xl md:text-4xl font-black text-white mb-3 leading-tight">
            How old do you feel today?
          </h1>
          <p className="text-gray-500 text-sm max-w-sm mx-auto">
            Choose a display style. You can change it any time in settings.
          </p>
        </div>

        {/* Option cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {OPTIONS.map((opt) => {
            const isHov = hovered === opt.id;
            const isChosen = chosen === opt.id;
            return (
              <button
                key={opt.id}
                onClick={() => choose(opt.id)}
                onMouseEnter={() => setHovered(opt.id)}
                onMouseLeave={() => setHovered(null)}
                className="relative rounded-2xl border text-left p-5 flex flex-col gap-4 transition-all duration-300 overflow-hidden"
                style={{
                  background: isHov || isChosen
                    ? "rgba(255,255,255,0.06)"
                    : "rgba(255,255,255,0.02)",
                  borderColor: isChosen
                    ? SKINS[opt.id].accent
                    : isHov
                    ? `${SKINS[opt.id].accent}80`
                    : "rgba(255,255,255,0.08)",
                  boxShadow: isChosen
                    ? `0 0 30px ${SKINS[opt.id].accent}40`
                    : isHov
                    ? `0 0 15px ${SKINS[opt.id].accent}20`
                    : "none",
                  transform: isHov || isChosen ? "translateY(-3px)" : "none",
                }}
              >
                {/* Age badge */}
                <div className="flex items-center justify-between">
                  <span
                    className="text-xs font-mono font-bold px-2 py-0.5 rounded-full border"
                    style={{
                      color: SKINS[opt.id].accent,
                      borderColor: `${SKINS[opt.id].accent}40`,
                      background: `${SKINS[opt.id].accent}12`,
                    }}
                  >
                    {opt.ageLabel}
                  </span>
                  <span className="text-2xl">{opt.emoji}</span>
                </div>

                {/* Mini preview */}
                <div style={{ transform: isHov ? "scale(1.02)" : "scale(1)", transition: "transform 0.2s" }}>
                  {opt.preview}
                </div>

                {/* Label */}
                <div>
                  <div className="text-white font-bold text-base">{opt.headline}</div>
                  <div className="text-gray-500 text-xs mt-1 leading-relaxed">{opt.tagline}</div>
                </div>

                {/* Select indicator */}
                <div
                  className="mt-auto text-xs font-semibold text-center py-1.5 rounded-lg transition-all"
                  style={{
                    background: isChosen
                      ? SKINS[opt.id].accent
                      : isHov
                      ? `${SKINS[opt.id].accent}20`
                      : "rgba(255,255,255,0.04)",
                    color: isChosen ? "#000" : isHov ? SKINS[opt.id].accent : "rgba(255,255,255,0.3)",
                  }}
                >
                  {isChosen ? "✓ Selected" : "Choose this"}
                </div>
              </button>
            );
          })}
        </div>

        <p className="text-center text-gray-700 text-xs mt-6">
          This only changes the visual theme — all content, stages, and progress remain the same.
        </p>
      </div>
    </div>
  );
}

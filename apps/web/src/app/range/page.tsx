"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { stagesMeta, epochs as allEpochs } from "@kryptos/core/stages-meta";
import type { StageMeta } from "@kryptos/core/stages-meta";
import { fetchProgress } from "@/lib/progress";
import { getSession, setSession } from "@/lib/auth";
import { useLocale } from "@/contexts/LocaleContext";
import { useSkin } from "@/contexts/SkinContext";
import { epochGroups, extendedGroups, TRACK_STYLE, DEFAULT_STYLE } from "../stages/track-data";

// The Cyber Range hub: every hands-on offensive lab in one browsable place, plus
// a toggle to browse every CTF challenge across the whole catalog. Reads the
// client-safe stages-meta only (no heavy content barrel).

const RANGE_GROUP = epochGroups.find((g) => g.id === "cyberRange");
const RANGE_EPOCH_IDS: string[] = RANGE_GROUP ? RANGE_GROUP.epochIds : [];

// epoch color name (EpochConfig.color, e.g. "Cyan") → accent hex for chips/bars.
const COLOR_HEX: Record<string, string> = {
  Red: "#ef4444", Orange: "#f97316", Amber: "#f59e0b", Yellow: "#eab308",
  Lime: "#84cc16", Green: "#22c55e", Emerald: "#10b981", Teal: "#14b8a6",
  Cyan: "#22d3ee", Sky: "#0ea5e9", Blue: "#3b82f6", Indigo: "#6366f1",
  Violet: "#8b5cf6", Purple: "#a855f7", Fuchsia: "#d946ef", Pink: "#ec4899", Rose: "#f43f5e",
};

type EpochInfo = { id: string; name: string; subtitle?: string; emoji: string; accent: string };

export default function RangePage() {
  useSkin();
  const { t } = useLocale();
  const [completed, setCompleted] = useState<Set<string>>(new Set());
  const [username, setUsername] = useState<string | null>(null);
  const [view, setView] = useState<"range" | "all">("range");

  useEffect(() => {
    setUsername(getSession());
    fetch("/api/auth/me")
      .then((r) => (r.ok ? r.json() : null))
      .then((data: { username: string } | null) => {
        if (!data) return;
        setUsername(data.username);
        setSession(data.username);
        fetchProgress().then((p) => {
          if (p) setCompleted(new Set(p.completedStages));
        });
      })
      .catch(() => {});
  }, []);

  const epochMap = useMemo(() => {
    const m: Record<string, EpochInfo> = {};
    for (const e of allEpochs) {
      m[e.id] = { id: e.id, name: e.name, subtitle: e.subtitle, emoji: e.emoji || "🎯", accent: COLOR_HEX[e.color] || "#22d3ee" };
    }
    return m;
  }, []);

  // All CTF stages, grouped by epoch (ordered).
  const ctfByEpoch = useMemo(() => {
    const m: Record<string, StageMeta[]> = {};
    for (const s of stagesMeta) {
      if (s.challengeType !== "ctf") continue;
      (m[s.epochId] ||= []).push(s);
    }
    for (const id of Object.keys(m)) m[id].sort((a, b) => a.order - b.order);
    return m;
  }, []);

  const rangeLabCount = RANGE_EPOCH_IDS.reduce((n, id) => n + (ctfByEpoch[id]?.length || 0), 0);
  const rangeCleared = RANGE_EPOCH_IDS.reduce(
    (n, id) => n + (ctfByEpoch[id]?.filter((s) => completed.has(s.id)).length || 0), 0,
  );
  const allCtfCount = Object.values(ctfByEpoch).reduce((n, arr) => n + arr.length, 0);

  // For the "All CTFs" view: order epochs by their track-group ordering, Range first.
  const allGroups = useMemo(() => {
    const groups = [...epochGroups, ...extendedGroups];
    return groups
      .map((g) => ({
        id: g.id,
        style: TRACK_STYLE[g.id] || DEFAULT_STYLE,
        labelKey: g.labelKey,
        epochIds: g.epochIds.filter((id) => (ctfByEpoch[id]?.length || 0) > 0),
      }))
      .filter((g) => g.epochIds.length > 0);
  }, [ctfByEpoch]);

  return (
    <div className="min-h-screen px-4 py-16" style={{ background: "linear-gradient(135deg, #0d1117 0%, #1a1030 50%, #0d1117 100%)" }}>
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center mb-4">
            <Link href="/stages" className="text-gray-500 hover:text-cyan-400 text-sm transition-colors">
              ← {t("stages.title") || "Stage Map"}
            </Link>
          </div>
          <h1 className="text-4xl font-bold text-white mb-2 flex items-center gap-3">
            <span>🎯</span> Cyber Range
          </h1>
          <p className="text-gray-400 max-w-2xl">
            Hands-on offensive-security labs that teach the real toolchain — Metasploit, nmap, Burp, Hashcat,
            Wireshark, BloodHound, aircrack-ng, Ghidra and more — as faithful, step-by-step simulations.
            Every attack is paired with the blue-team defense that stops it.
          </p>

          {/* Progress */}
          <div className="mt-6 flex items-center gap-3 flex-wrap">
            <div className="flex-1 min-w-[180px] bg-white/5 rounded-full h-3">
              <div
                className="h-3 rounded-full transition-all duration-700"
                style={{ width: `${rangeLabCount > 0 ? (rangeCleared / rangeLabCount) * 100 : 0}%`, background: "linear-gradient(90deg,#a855f7,#22d3ee)" }}
              />
            </div>
            <span className="text-violet-300 font-mono text-sm whitespace-nowrap">
              {rangeCleared} / {rangeLabCount} labs cleared
            </span>
          </div>
          {!username && (
            <p className="mt-3 text-xs text-gray-500">
              👤 <Link href="/login" className="text-cyan-400 hover:text-cyan-300">Sign in</Link> to track which labs you&apos;ve cleared.
            </p>
          )}
        </div>

        {/* View toggle */}
        <div className="inline-flex items-center gap-1 bg-white/5 border border-white/10 rounded-xl p-1 mb-8">
          <button
            onClick={() => setView("range")}
            className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-colors ${view === "range" ? "bg-violet-500/20 text-violet-200 border border-violet-400/40" : "text-gray-400 hover:text-gray-200 border border-transparent"}`}
          >
            🎯 The Range <span className="opacity-60 font-mono text-xs">· {rangeLabCount}</span>
          </button>
          <button
            onClick={() => setView("all")}
            className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-colors ${view === "all" ? "bg-cyan-500/20 text-cyan-200 border border-cyan-400/40" : "text-gray-400 hover:text-gray-200 border border-transparent"}`}
          >
            🚩 All CTFs <span className="opacity-60 font-mono text-xs">· {allCtfCount}</span>
          </button>
        </div>

        {/* ── Range view ─────────────────────────────────────────────────────── */}
        {view === "range" && (
          <div className="space-y-8">
            {RANGE_EPOCH_IDS.map((eid) => {
              const ep = epochMap[eid];
              const labs = ctfByEpoch[eid] || [];
              if (!ep || labs.length === 0) return null;
              const done = labs.filter((s) => completed.has(s.id)).length;
              return <EpochBlock key={eid} ep={ep} labs={labs} done={done} completed={completed} />;
            })}
          </div>
        )}

        {/* ── All CTFs view ──────────────────────────────────────────────────── */}
        {view === "all" && (
          <div className="space-y-10">
            {allGroups.map((g) => (
              <div key={g.id}>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-[11px] font-mono font-bold uppercase tracking-widest whitespace-nowrap" style={{ color: g.style.color }}>
                    {g.style.icon} {t(g.labelKey) || g.id}
                  </span>
                  <div className="flex-1 h-px" style={{ background: `${g.style.color}22` }} />
                </div>
                <div className="space-y-6">
                  {g.epochIds.map((eid) => {
                    const ep = epochMap[eid];
                    const labs = ctfByEpoch[eid] || [];
                    if (!ep || labs.length === 0) return null;
                    const done = labs.filter((s) => completed.has(s.id)).length;
                    return <EpochBlock key={eid} ep={ep} labs={labs} done={done} completed={completed} compact />;
                  })}
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-12 pt-6 border-t border-white/5 text-center">
          <Link
            href="/stages"
            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-cyan-300 border border-white/10 hover:border-cyan-500/40 rounded-full px-5 py-2 transition-colors"
          >
            ← Back to the full stage map
          </Link>
        </div>
      </div>
    </div>
  );
}

function EpochBlock({
  ep, labs, done, completed, compact,
}: {
  ep: EpochInfo; labs: StageMeta[]; done: number; completed: Set<string>; compact?: boolean;
}) {
  return (
    <section
      className="rounded-2xl border bg-white/[0.02] p-5"
      style={{ borderColor: `${ep.accent}33` }}
    >
      <div className="flex items-center gap-3 mb-4">
        <span className="text-2xl flex-shrink-0">{ep.emoji}</span>
        <div className="flex-1 min-w-0">
          <h2 className={`font-bold text-white ${compact ? "text-base" : "text-lg"}`}>{ep.name}</h2>
          {ep.subtitle && <p className="text-gray-500 text-xs truncate">{ep.subtitle}</p>}
        </div>
        <span
          className="font-mono text-xs px-2 py-0.5 rounded-full border whitespace-nowrap"
          style={{ color: ep.accent, borderColor: `${ep.accent}55`, background: `${ep.accent}11` }}
        >
          {done}/{labs.length}
        </span>
      </div>
      <div className={compact ? "grid sm:grid-cols-2 gap-2" : "grid sm:grid-cols-2 gap-3"}>
        {labs.map((s) => {
          const isDone = completed.has(s.id);
          return (
            <Link
              key={s.id}
              href={`/stages/${s.id}`}
              className="group flex items-center gap-3 rounded-xl border border-white/8 bg-white/[0.02] px-3 py-2.5 hover:border-white/20 hover:bg-white/[0.05] transition-colors"
            >
              <span className="text-lg flex-shrink-0">{s.badge.emoji}</span>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-gray-200 group-hover:text-white truncate">{s.title}</p>
                <p className="text-[10px] font-mono text-gray-600">{s.xp} XP{s.cveId ? ` · ${s.cveId}` : ""}</p>
              </div>
              {isDone ? (
                <span className="text-emerald-400 text-sm flex-shrink-0">✓</span>
              ) : (
                <span className="text-gray-700 group-hover:text-gray-400 text-sm flex-shrink-0 transition-colors">→</span>
              )}
            </Link>
          );
        })}
      </div>
    </section>
  );
}

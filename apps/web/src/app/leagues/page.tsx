"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { LevelBadge } from "@/components/LevelBadge";
import {
  divisionById, promoteDivision, relegateDivision, isTopDivision, isBottomDivision,
} from "@kryptos/core/leagues";

type Standing = { username: string; weeklyXp: number; xp: number };
type LeagueData = {
  you: string;
  division: string;
  week: string;
  resetAt: number;
  promoteCount: number;
  relegateCount: number;
  cohortSize: number;
  standings: Standing[];
};

const MEDAL: Record<number, string> = { 1: "🥇", 2: "🥈", 3: "🥉" };

function avatarColor(username: string): [string, string] {
  const colors: [string, string][] = [
    ["#22d3ee", "#0e7490"], ["#a78bfa", "#6d28d9"], ["#f97316", "#c2410c"],
    ["#4ade80", "#16a34a"], ["#fb7185", "#be123c"], ["#fbbf24", "#b45309"],
  ];
  let h = 0;
  for (let i = 0; i < username.length; i++) h = (h * 31 + username.charCodeAt(i)) >>> 0;
  return colors[h % colors.length];
}

function countdown(ms: number): string {
  if (ms <= 0) return "resetting…";
  const d = Math.floor(ms / 86_400_000);
  const h = Math.floor((ms % 86_400_000) / 3_600_000);
  const m = Math.floor((ms % 3_600_000) / 60_000);
  if (d > 0) return `${d}d ${h}h`;
  if (h > 0) return `${h}h ${m}m`;
  return `${m}m`;
}

export default function LeaguesPage() {
  const [data, setData] = useState<LeagueData | null>(null);
  const [loading, setLoading] = useState(true);
  const [now, setNow] = useState(0);

  useEffect(() => {
    fetch("/api/leagues")
      .then((r) => (r.ok ? r.json() : null))
      .then((d: LeagueData | null) => setData(d))
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    setNow(Date.now());
    const id = setInterval(() => setNow(Date.now()), 60_000);
    return () => clearInterval(id);
  }, []);

  const div = data ? divisionById(data.division) : null;
  const n = data?.standings.length ?? 0;
  const canPromote = data && !isTopDivision(data.division);
  const canRelegate = data && !isBottomDivision(data.division);

  return (
    <div
      className="min-h-screen px-4 py-12"
      style={{ background: "linear-gradient(135deg, #0d1117 0%, #0f2027 50%, #1a1a2e 100%)" }}
    >
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <Link href="/stages" className="text-gray-500 hover:text-cyan-400 text-sm transition-colors">
            ← Stage Map
          </Link>
          <Link href="/leaderboard" className="text-sm text-purple-400 hover:text-purple-300 transition-colors">
            🏆 Leaderboard
          </Link>
        </div>

        {loading ? (
          <div className="py-24 text-center text-gray-600 text-sm">Loading your league…</div>
        ) : !data || !div ? (
          <div className="py-24 text-center text-gray-600 text-sm">
            Sign in and complete a stage to join this week&apos;s league.
          </div>
        ) : (
          <>
            {/* Division header */}
            <div className={`rounded-2xl border ${div.borderClass} ${div.bgClass} p-6 mb-6 text-center`}>
              <div className="text-5xl mb-2">{div.emoji}</div>
              <h1 className={`text-3xl font-black ${div.textClass}`}>{div.name} League</h1>
              <p className="text-gray-500 text-sm mt-1">
                Top {data.promoteCount} promote · bottom {data.relegateCount} relegate · resets in{" "}
                <span className="text-gray-300 font-semibold">{now ? countdown(data.resetAt - now) : "…"}</span>
              </p>
            </div>

            {/* Standings */}
            <div className="bg-white/3 border border-white/10 rounded-xl overflow-hidden">
              <div className="grid grid-cols-[2.5rem_1fr_auto] gap-2 px-5 py-3 border-b border-white/10 text-xs text-gray-500 font-semibold uppercase tracking-wider">
                <div>#</div>
                <div>Agent</div>
                <div className="text-right">XP this week</div>
              </div>

              {n === 0 ? (
                <div className="py-16 text-center text-gray-600 text-sm">No agents in your cohort yet.</div>
              ) : (
                data.standings.map((s, i) => {
                  const rank = i + 1;
                  const inPromo = !!canPromote && i < data.promoteCount;
                  const inRelo = !!canRelegate && i >= n - data.relegateCount;
                  const isYou = s.username === data.you;
                  const [fg, bg] = isYou ? (["#000", "#22d3ee"] as [string, string]) : avatarColor(s.username);
                  return (
                    <div
                      key={s.username}
                      className={`grid grid-cols-[2.5rem_1fr_auto] gap-2 px-5 py-3 border-b border-white/5 last:border-0 items-center ${
                        isYou ? "bg-cyan-500/8 border-l-2 border-l-cyan-500" : ""
                      } ${inPromo ? "bg-green-500/5" : inRelo ? "bg-red-500/5" : ""}`}
                    >
                      <div className="font-mono text-sm font-bold flex items-center gap-1">
                        {MEDAL[rank] ? <span className="text-lg">{MEDAL[rank]}</span> : <span className="text-gray-500">{rank}</span>}
                        {inPromo && <span className="text-green-500 text-xs">▲</span>}
                        {inRelo && <span className="text-red-500 text-xs">▼</span>}
                      </div>
                      <div className="flex items-center gap-2 min-w-0">
                        <div
                          className="rounded-full flex items-center justify-center font-bold flex-shrink-0 text-xs"
                          style={{ width: 30, height: 30, background: bg, color: fg }}
                        >
                          {s.username[0]?.toUpperCase() ?? "?"}
                        </div>
                        <span className={`font-semibold truncate ${isYou ? "text-cyan-400" : "text-white"}`}>
                          {s.username}
                          {isYou && <span className="ml-2 text-xs text-cyan-600 font-normal">(you)</span>}
                        </span>
                        <LevelBadge xp={s.xp} />
                      </div>
                      <div className="text-right font-mono text-sm text-gray-300 flex-shrink-0">
                        {s.weeklyXp.toLocaleString()}
                      </div>
                    </div>
                  );
                })
              )}
            </div>

            {/* Zone legend */}
            <div className="mt-4 flex items-center justify-center gap-5 text-xs text-gray-500">
              {canPromote && (
                <span className="flex items-center gap-1">
                  <span className="text-green-500">▲</span> Promotion → {divisionById(promoteDivision(data.division)).name}
                </span>
              )}
              {canRelegate && (
                <span className="flex items-center gap-1">
                  <span className="text-red-500">▼</span> Relegation → {divisionById(relegateDivision(data.division)).name}
                </span>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

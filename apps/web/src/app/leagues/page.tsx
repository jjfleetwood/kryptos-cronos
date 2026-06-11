"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { LevelBadge } from "@/components/LevelBadge";
import { useLocale } from "@/contexts/LocaleContext";
import {
  divisionById, promoteDivision, relegateDivision, isTopDivision, isBottomDivision,
} from "@kryptos/core/leagues";

type Standing = { username: string; weeklyXp: number; xp: number; lastStageTitle?: string | null; lastStageClears?: number; pioneerCount?: number };
type DivisionSummary = { division: string; members: number; top: Standing[] };
type LeagueData = {
  you: string;
  division: string;
  week: string;
  resetAt: number;
  promoteCount: number;
  relegateCount: number;
  cohortSize: number;
  standings: Standing[];
  ladder?: DivisionSummary[];
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

function countdown(ms: number, resettingLabel: string): string {
  if (ms <= 0) return resettingLabel;
  const d = Math.floor(ms / 86_400_000);
  const h = Math.floor((ms % 86_400_000) / 3_600_000);
  const m = Math.floor((ms % 3_600_000) / 60_000);
  if (d > 0) return `${d}d ${h}h`;
  if (h > 0) return `${h}h ${m}m`;
  return `${m}m`;
}

export default function LeaguesPage() {
  const { t } = useLocale();
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
            ← {t("stages.title")}
          </Link>
          <Link href="/leaderboard" className="text-sm text-purple-400 hover:text-purple-300 transition-colors">
            🏆 {t("nav.leaderboard")}
          </Link>
        </div>

        {loading ? (
          <div className="py-24 text-center text-gray-600 text-sm">{t("leagues.loading")}</div>
        ) : !data || !div ? (
          <div className="py-24 text-center text-gray-600 text-sm">
            {t("leagues.signIn")}
          </div>
        ) : (
          <>
            {/* Division header */}
            <div className={`rounded-2xl border ${div.borderClass} ${div.bgClass} p-6 mb-6 text-center`}>
              <div className="text-5xl mb-2">{div.emoji}</div>
              <h1 className={`text-3xl font-black ${div.textClass}`}>{div.name} {t("leagues.leagueSuffix")}</h1>
              <p className="text-gray-500 text-sm mt-1">
                {t("leagues.topLabel")} {data.promoteCount} {t("leagues.promoteLabel")} · {t("leagues.bottomLabel")} {data.relegateCount} {t("leagues.relegateLabel")} · {t("leagues.resetsIn")}{" "}
                <span className="text-gray-300 font-semibold">{now ? countdown(data.resetAt - now, t("leagues.resetting")) : "…"}</span>
              </p>
            </div>

            {/* Standings */}
            <div className="bg-white/3 border border-white/10 rounded-xl overflow-hidden">
              <div className="grid grid-cols-[2.5rem_1fr_auto] gap-2 px-5 py-3 border-b border-white/10 text-xs text-gray-500 font-semibold uppercase tracking-wider">
                <div>#</div>
                <div>{t("leagues.colAgent")}</div>
                <div className="text-right">{t("leagues.colXpWeek")}</div>
              </div>

              {n === 0 ? (
                <div className="py-16 text-center text-gray-600 text-sm">{t("leagues.emptyCohort")}</div>
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
                        <div className="min-w-0">
                          <span className={`font-semibold truncate block ${isYou ? "text-cyan-400" : "text-white"}`}>
                            {s.username}
                            {!!s.pioneerCount && s.pioneerCount > 0 && (
                              <span title={`Pioneer — first to clear ${s.pioneerCount} stage${s.pioneerCount === 1 ? "" : "s"}`} className="ml-1.5 text-xs align-middle">🏴<span className="text-[10px] font-mono text-rose-400 ml-0.5">{s.pioneerCount}</span></span>
                            )}
                            {isYou && <span className="ml-2 text-xs text-cyan-600 font-normal">{t("leagues.youTag")}</span>}
                          </span>
                          {s.lastStageTitle && (
                            <span className="text-[10px] text-gray-600 truncate block">▸ {s.lastStageTitle}{s.lastStageClears ? <span className="text-gray-700"> · {s.lastStageClears} cleared</span> : null}</span>
                          )}
                        </div>
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
                  <span className="text-green-500">▲</span> {t("leagues.promotionTo")} {divisionById(promoteDivision(data.division)).name}
                </span>
              )}
              {canRelegate && (
                <span className="flex items-center gap-1">
                  <span className="text-red-500">▼</span> {t("leagues.relegationTo")} {divisionById(relegateDivision(data.division)).name}
                </span>
              )}
            </div>

            {/* All leagues — the full division ladder, populated, so you can see the
                tiers above and below (the leaderboard-style "everyone else" view). */}
            {data.ladder && data.ladder.length > 0 && (
              <div className="mt-10">
                <h2 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-3 flex items-center gap-2">
                  🪜 All Leagues
                </h2>
                <div className="space-y-3">
                  {[...data.ladder].reverse().map((dsum) => {
                    const dv = divisionById(dsum.division);
                    const isYours = dsum.division === data.division;
                    return (
                      <div
                        key={dsum.division}
                        className={`rounded-xl border p-4 ${dv.borderClass} ${isYours ? dv.bgClass : "bg-white/2"}`}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2 min-w-0">
                            <span className="text-2xl leading-none">{dv.emoji}</span>
                            <span className={`font-black ${dv.textClass}`}>{dv.name}</span>
                            {isYours && (
                              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">
                                {t("leagues.youTag")}
                              </span>
                            )}
                          </div>
                          <span className="text-[11px] text-gray-500 flex-shrink-0">
                            {dsum.members} {dsum.members === 1 ? "player" : "players"}
                          </span>
                        </div>
                        {dsum.top.length === 0 ? (
                          <p className="text-[11px] text-gray-600 italic">No one here yet this week.</p>
                        ) : (
                          <div className="space-y-1">
                            {dsum.top.map((s, i) => {
                              const isYou = s.username === data.you;
                              return (
                                <div key={s.username} className="grid grid-cols-[1.5rem_1fr_auto] gap-2 items-center text-xs">
                                  <span className="text-center">{MEDAL[i + 1] ?? <span className="text-gray-600 font-mono">{i + 1}</span>}</span>
                                  <span className={`truncate ${isYou ? "text-cyan-400 font-semibold" : "text-gray-300"}`}>
                                    {s.username}
                                    {!!s.pioneerCount && s.pioneerCount > 0 && <span className="ml-1 align-middle">🏴</span>}
                                  </span>
                                  <span className="font-mono text-gray-500 text-right">{s.weeklyXp.toLocaleString()}</span>
                                </div>
                              );
                            })}
                            {dsum.members > dsum.top.length && (
                              <p className="text-[10px] text-gray-700 pt-0.5">+{dsum.members - dsum.top.length} more</p>
                            )}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

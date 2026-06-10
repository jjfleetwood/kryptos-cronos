"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { useLocale } from "@/contexts/LocaleContext";

type QuestState = {
  id: string;
  period: "daily" | "weekly";
  metric: string;
  target: number;
  emoji: string;
  title: string;
  desc: string;
  xp: number;
  progress: number;
  done: boolean;
  claimed: boolean;
};
type StreakSummary = { current: number; dayXp: number; goal: number };
type QuestsData = { daily: QuestState[]; weekly: QuestState[]; streak: StreakSummary; pro: boolean };

function QuestCard({ q, onClaim, busy }: { q: QuestState; onClaim: (id: string) => void; busy: boolean }) {
  const { t } = useLocale();
  const pct = Math.min(100, Math.round((q.progress / q.target) * 100));
  return (
    <div className={`rounded-xl border p-4 ${q.claimed ? "border-green-500/30 bg-green-500/5" : q.done ? "border-amber-500/40 bg-amber-500/8" : "border-white/8 bg-white/2"}`}>
      <div className="flex items-start gap-3">
        <div className="text-2xl leading-none">{q.emoji}</div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between gap-2">
            <span className="font-bold text-white text-sm">{q.title}</span>
            <span className="text-xs font-mono text-cyan-400 flex-shrink-0">
              +{q.xp} XP
            </span>
          </div>
          <p className="text-xs text-gray-500 mt-0.5">{q.desc}</p>

          <div className="mt-3 flex items-center gap-2">
            <div className="flex-1 h-2 rounded-full bg-white/8 overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-500"
                style={{ width: `${pct}%`, background: q.done ? "linear-gradient(90deg,#facc15,#fb923c)" : "linear-gradient(90deg,#22d3ee,#818cf8)" }}
              />
            </div>
            <span className="text-xs font-mono text-gray-500 flex-shrink-0">{q.progress}/{q.target}</span>
          </div>
        </div>
      </div>

      {q.done && (
        <button
          disabled={q.claimed || busy}
          onClick={() => onClaim(q.id)}
          className={`mt-3 w-full py-1.5 rounded-lg text-sm font-bold transition-colors ${
            q.claimed ? "bg-green-500/15 text-green-400 cursor-default" : "bg-amber-500 text-black hover:bg-amber-400"
          }`}
        >
          {q.claimed ? `✓ ${t("quests.claimed")}` : busy ? "…" : t("quests.claim")}
        </button>
      )}
    </div>
  );
}

export default function QuestsPage() {
  const { t } = useLocale();
  const [data, setData] = useState<QuestsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [busyId, setBusyId] = useState<string | null>(null);

  const load = useCallback(() => {
    fetch("/api/quests")
      .then((r) => (r.ok ? r.json() : null))
      .then((d: QuestsData | null) => setData(d))
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => { load(); }, [load]);

  async function claim(id: string) {
    setBusyId(id);
    try {
      const res = await fetch("/api/quests", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ questId: id }),
      });
      if (res.ok) load();
    } finally {
      setBusyId(null);
    }
  }

  const goalPct = data ? Math.min(100, Math.round((data.streak.dayXp / data.streak.goal) * 100)) : 0;
  const goalMet = data ? data.streak.dayXp >= data.streak.goal : false;

  return (
    <div className="min-h-screen px-4 py-12" style={{ background: "linear-gradient(135deg, #0d1117 0%, #0f2027 50%, #1a1a2e 100%)" }}>
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <Link href="/stages" className="text-gray-500 hover:text-cyan-400 text-sm transition-colors">← {t("stages.title")}</Link>
          <Link href="/leagues" className="text-sm text-amber-400 hover:text-amber-300 transition-colors">⚔️ {t("nav.leagues", "Leagues")}</Link>
        </div>

        <div className="flex items-center gap-3 mb-1">
          <h1 className="text-3xl font-bold text-white">{t("quests.title")}</h1>
          {data?.pro && (
            <span className="text-xs font-bold px-2 py-0.5 rounded-full border border-amber-500/40 bg-amber-500/10 text-amber-400">
              {t("quests.proBadge", "PRO · +1 daily quest")}
            </span>
          )}
        </div>
        <p className="text-gray-500 text-sm mb-6">{t("quests.subtitle")}</p>

        {loading ? (
          <div className="py-20 text-center text-gray-600 text-sm">{t("quests.loading")}</div>
        ) : !data ? (
          <div className="py-20 text-center text-gray-600 text-sm">{t("quests.signIn")}</div>
        ) : (
          <>
            {/* Streak / daily goal */}
            <div className="rounded-xl border border-white/10 bg-white/3 p-5 mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-bold text-white">
                  🔥 {data.streak.current} {t("quests.streakLabel")}
                </span>
                <span className={`text-xs font-mono ${goalMet ? "text-green-400" : "text-gray-500"}`}>
                  {goalMet ? `✓ ${t("quests.goalMet")}` : `${data.streak.dayXp}/${data.streak.goal} XP`}
                </span>
              </div>
              <div className="h-2 rounded-full bg-white/8 overflow-hidden">
                <div className="h-full rounded-full transition-all duration-500" style={{ width: `${goalPct}%`, background: goalMet ? "linear-gradient(90deg,#4ade80,#16a34a)" : "linear-gradient(90deg,#facc15,#fb923c)" }} />
              </div>
              <p className="text-xs text-gray-600 mt-2">{t("quests.goalHintPre")} {data.streak.goal} {t("quests.goalHintPost")}</p>
            </div>

            {/* Daily */}
            <h2 className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-3">{t("quests.daily")}</h2>
            <div className="space-y-3 mb-8">
              {data.daily.map((q) => <QuestCard key={q.id} q={q} onClaim={claim} busy={busyId === q.id} />)}
            </div>

            {/* Weekly */}
            <h2 className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-3">{t("quests.weekly")}</h2>
            <div className="space-y-3">
              {data.weekly.map((q) => <QuestCard key={q.id} q={q} onClaim={claim} busy={busyId === q.id} />)}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

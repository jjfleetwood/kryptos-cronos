"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useLocale } from "@/contexts/LocaleContext";

type AchState = {
  id: string;
  name: string;
  desc: string;
  emoji: string;
  category: string;
  metric: string;
  target: number;
  progress: number;
  earned: boolean;
};
type Data = { achievements: AchState[]; earnedCount: number; total: number };

const CATEGORY_ORDER = ["progression", "mastery", "streak", "epochs", "leagues"];

export default function AchievementsPage() {
  const { t } = useLocale();
  const [data, setData] = useState<Data | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/achievements")
      .then((r) => (r.ok ? r.json() : null))
      .then((d: Data | null) => setData(d))
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  const grouped = (cat: string) => data?.achievements.filter((a) => a.category === cat) ?? [];

  return (
    <div className="min-h-screen px-4 py-12" style={{ background: "linear-gradient(135deg, #0d1117 0%, #0f2027 50%, #1a1a2e 100%)" }}>
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <Link href="/stages" className="text-gray-500 hover:text-cyan-400 text-sm transition-colors">← {t("stages.title")}</Link>
          <Link href="/quests" className="text-sm text-emerald-400 hover:text-emerald-300 transition-colors">🎯 {t("quests.title")}</Link>
        </div>

        <h1 className="text-3xl font-bold text-white mb-1">{t("achievements.title")}</h1>
        {data && (
          <p className="text-gray-500 text-sm mb-6">
            <span className="text-cyan-400 font-bold">{data.earnedCount}</span> / {data.total} {t("achievements.unlocked")}
          </p>
        )}

        {loading ? (
          <div className="py-20 text-center text-gray-600 text-sm">{t("achievements.loading")}</div>
        ) : !data ? (
          <div className="py-20 text-center text-gray-600 text-sm">{t("achievements.signIn")}</div>
        ) : (
          CATEGORY_ORDER.map((cat) => {
            const items = grouped(cat);
            if (items.length === 0) return null;
            return (
              <div key={cat} className="mb-8">
                <h2 className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-3">{t(`achievements.cat.${cat}`, cat)}</h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {items.map((a) => {
                    const pct = Math.min(100, Math.round((a.progress / a.target) * 100));
                    return (
                      <div
                        key={a.id}
                        className={`rounded-xl border p-4 flex items-center gap-3 ${a.earned ? "border-amber-500/40 bg-amber-500/8" : "border-white/8 bg-white/2"}`}
                      >
                        <div className={`text-3xl leading-none ${a.earned ? "" : "grayscale opacity-40"}`}>{a.emoji}</div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2">
                            <span className={`font-bold text-sm ${a.earned ? "text-amber-300" : "text-gray-300"}`}>{a.name}</span>
                            {a.earned && <span className="text-green-500 text-xs">✓</span>}
                          </div>
                          <p className="text-xs text-gray-500">{a.desc}</p>
                          {!a.earned && (
                            <div className="mt-2 flex items-center gap-2">
                              <div className="flex-1 h-1.5 rounded-full bg-white/8 overflow-hidden">
                                <div className="h-full rounded-full bg-cyan-500/70" style={{ width: `${pct}%` }} />
                              </div>
                              <span className="text-[10px] font-mono text-gray-600 flex-shrink-0">{a.progress}/{a.target}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import type { StageConfig } from "@kryptos/core/types";
import { useLocale } from "@/contexts/LocaleContext";

type Props = {
  stage: StageConfig;
  score: number;
  total: number;
  /** Coins awarded for the clear (the stage's base value). */
  coins: number;
  bonusCoins?: number;
  recommendedNext?: { id: string; title: string } | null;
  /** Offer a fresh question set (quiz-only stages can be replayed). */
  onReplay?: () => void;
  backHref?: string;
};

/**
 * Celebratory completion pop-up for a pure-quiz stage — the quiz counterpart of
 * FlagSuccessModal, fed by the real award response (coins, bonus, recommended next).
 */
export default function QuizSuccessModal({ stage, score, total, coins, bonusCoins, recommendedNext, onReplay, backHref = "/stages" }: Props) {
  const { t } = useLocale();
  const [visible, setVisible] = useState(false);
  const perfect = score === total;

  useEffect(() => {
    const id = setTimeout(() => setVisible(true), 50);
    return () => clearTimeout(id);
  }, []);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-500 ${visible ? "opacity-100" : "opacity-0"}`}
      style={{ background: "rgba(0,0,0,0.92)", backdropFilter: "blur(8px)" }}
    >
      {/* Glow rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className={`w-96 h-96 rounded-full border border-cyan-500/20 transition-all duration-1000 ${visible ? "scale-100 opacity-100" : "scale-50 opacity-0"}`} />
        <div className={`absolute w-64 h-64 rounded-full border border-cyan-500/30 transition-all duration-700 delay-100 ${visible ? "scale-100 opacity-100" : "scale-50 opacity-0"}`} />
        <div className={`absolute w-32 h-32 rounded-full bg-cyan-500/5 transition-all duration-500 delay-200 ${visible ? "scale-100 opacity-100" : "scale-50 opacity-0"}`} />
      </div>

      {/* Card */}
      <div
        className={`relative w-full max-w-md rounded-2xl border overflow-hidden transition-all duration-500 ${visible ? "scale-100 translate-y-0" : "scale-90 translate-y-8"}`}
        style={{
          background: "linear-gradient(145deg, #06121a 0%, #0d1117 60%, #0a1628 100%)",
          borderColor: "rgba(34,211,238,0.4)",
          boxShadow: "0 0 60px rgba(34,211,238,0.15), 0 0 120px rgba(34,211,238,0.05)",
        }}
      >
        <div className="h-1 w-full" style={{ background: "linear-gradient(90deg, #22d3ee, #818cf8, #22d3ee)" }} />

        <div className="p-8">
          {/* Status badge */}
          <div className="flex items-center justify-center mb-6">
            <div className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/40 bg-cyan-500/10">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-cyan-400 font-mono text-xs font-bold tracking-widest uppercase">Quiz Cleared</span>
            </div>
          </div>

          {/* Heading */}
          <div className="text-center mb-6">
            <div className="text-5xl mb-3">{perfect ? "🏆" : "🎯"}</div>
            <h2 className="text-2xl font-bold text-white mb-1">Stage Complete!</h2>
            <p className="text-gray-500 text-sm">{stage.title}</p>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-3 gap-3 mb-6">
            <div className="bg-white/3 rounded-xl p-3 text-center border border-white/10">
              <div className="text-xl font-bold text-cyan-400">+{coins} XP</div>
              <div className="text-xs text-gray-600 mt-0.5">earned</div>
              {bonusCoins != null && bonusCoins > 0 && (
                <div className="text-xs text-yellow-400 mt-0.5 font-semibold">+{bonusCoins} bonus ⚡</div>
              )}
            </div>
            <div className="bg-white/3 rounded-xl p-3 text-center border border-white/10">
              <div className="text-xl">{stage.badge.emoji}</div>
              <div className="text-xs text-gray-600 mt-0.5 truncate">{stage.badge.name}</div>
            </div>
            <div className="bg-white/3 rounded-xl p-3 text-center border border-white/10">
              <div className={`text-xl font-bold ${perfect ? "text-green-400" : "text-cyan-400"}`}>{score}/{total}</div>
              <div className="text-xs text-gray-600 mt-0.5">correct</div>
            </div>
          </div>

          {/* Skills acquired */}
          {stage.info?.keyTakeaways && stage.info.keyTakeaways.length > 0 && (
            <div className="mb-6 rounded-xl border border-white/8 bg-white/2 p-4">
              <p className="text-gray-600 text-xs uppercase tracking-widest mb-3">{t("flag.skillsAcquired", "Skills Acquired")}</p>
              <ul className="space-y-1.5">
                {stage.info.keyTakeaways.slice(0, 3).map((takeaway, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-gray-400 leading-relaxed">
                    <span className="text-cyan-500 mt-0.5 flex-shrink-0">›</span>
                    {takeaway}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Recommended next — the "one more" hook */}
          {recommendedNext && (
            <Link
              href={`/stages/${recommendedNext.id}`}
              className="group block mb-3 rounded-xl border border-cyan-400/40 bg-gradient-to-r from-cyan-500/12 to-indigo-500/12 p-3 hover:border-cyan-300/70 transition-colors"
            >
              <p className="text-cyan-400 text-xs uppercase tracking-widest mb-1.5 font-bold">🔥 Keep the run going</p>
              <div className="flex items-center justify-between gap-2">
                <span className="text-white text-sm font-bold group-hover:text-cyan-200 transition-colors truncate">
                  {recommendedNext.title}
                </span>
                <span className="text-cyan-300 text-lg flex-shrink-0 group-hover:translate-x-0.5 transition-transform">→</span>
              </div>
            </Link>
          )}

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-3">
            {onReplay && (
              <button
                onClick={onReplay}
                className="flex-1 text-center py-2.5 border border-white/15 hover:border-white/30 text-gray-400 hover:text-white font-semibold rounded-xl text-sm transition-colors"
              >
                New Questions
              </button>
            )}
            <Link
              href="/leaderboard"
              className="flex-1 text-center py-2.5 border border-purple-500/50 hover:border-purple-400 text-purple-400 font-semibold rounded-xl text-sm transition-colors"
            >
              🏆 {t("leaderboard.title", "Leaderboard")}
            </Link>
            <Link
              href={backHref}
              className="flex-1 text-center py-2.5 font-bold rounded-xl text-sm transition-colors text-black"
              style={{ background: "linear-gradient(90deg, #22d3ee, #818cf8)" }}
            >
              {t("flag.stageMap", "Stage Map")}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

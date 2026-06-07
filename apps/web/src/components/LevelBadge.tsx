"use client";

import { levelInfo } from "@kryptos/core/levels";

/** Compact pill: rank emoji + "Lv N". Tooltip carries the full rank name. */
export function LevelBadge({ xp, size = "sm" }: { xp: number; size?: "sm" | "md" }) {
  const { rank, level } = levelInfo(xp);
  const pad = size === "md" ? "px-2.5 py-1 text-sm" : "px-2 py-0.5 text-xs";
  return (
    <span
      title={`${rank.name} · Level ${level}`}
      className={`inline-flex items-center gap-1 rounded-full border font-mono font-bold ${rank.textClass} ${rank.borderClass} ${rank.bgClass} ${pad}`}
    >
      <span>{rank.emoji}</span>
      <span>Lv {level}</span>
    </span>
  );
}

/** Inline rank label: emoji + name (no border). */
export function RankLabel({ xp }: { xp: number }) {
  const { rank, level } = levelInfo(xp);
  return (
    <span className={`text-xs font-semibold ${rank.textClass}`} title={`Level ${level}`}>
      {rank.emoji} {rank.name}
    </span>
  );
}

/** Full progress block: rank + level, bar to next level, XP remaining. */
export function LevelProgress({ xp, className = "" }: { xp: number; className?: string }) {
  const { rank, level, pct, xpToNext } = levelInfo(xp);
  return (
    <div className={className}>
      <div className="flex items-center justify-between mb-1 text-xs">
        <span className={`font-bold ${rank.textClass}`}>{rank.emoji} {rank.name} · Lv {level}</span>
        <span className="text-gray-500">{xpToNext.toLocaleString()} XP → Lv {level + 1}</span>
      </div>
      <div className="h-2 w-full rounded-full bg-white/8 overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-700"
          style={{ width: `${pct}%`, background: `linear-gradient(90deg, ${rank.color}, #818cf8)` }}
        />
      </div>
    </div>
  );
}

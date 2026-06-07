/**
 * Levels & Ranks (gamification Phase 1). Pure, client-safe — derived entirely
 * from lifetime XP, so any surface that knows a user's `xp` can render their
 * Level and Rank without an API round-trip. No server-only or framework deps.
 *
 * Curve: the cost to advance from level L to L+1 is `BASE + (L-1)*STEP`, so the
 * first few levels arrive in a stage or two and later levels stretch out. With
 * ~200k total XP available across the catalog, a fully-completed account lands
 * around level ~63.
 */

const BASE = 200;
const STEP = 100;

/** Cumulative XP required to REACH a level (level 1 sits at 0 XP). */
export function xpToReachLevel(level: number): number {
  if (level <= 1) return 0;
  const n = level - 1; // number of level-ups from 1
  return n * BASE + (STEP * n * (n - 1)) / 2;
}

/** The level a given lifetime XP total has reached (closed-form quadratic inverse). */
export function levelForXp(xp: number): number {
  if (xp <= 0) return 1;
  const a = STEP / 2;
  const b = BASE - STEP / 2;
  const n = Math.floor((-b + Math.sqrt(b * b + 4 * a * xp)) / (2 * a));
  return Math.max(1, n + 1);
}

export type RankTier = {
  id: string;
  name: string;
  emoji: string;
  minLevel: number;
  /** Hex for inline styles (progress bars, gradients). */
  color: string;
  textClass: string;
  borderClass: string;
  bgClass: string;
};

/** Named operator ladder, keyed to level bands. Palette echoes the trophy tiers. */
export const RANKS: RankTier[] = [
  { id: "recruit",    name: "Recruit",    emoji: "🔰", minLevel: 1,  color: "#9ca3af", textClass: "text-gray-400",   borderClass: "border-gray-500/40",   bgClass: "bg-gray-500/10" },
  { id: "initiate",   name: "Initiate",   emoji: "📡", minLevel: 5,  color: "#a8a29e", textClass: "text-stone-300",  borderClass: "border-stone-500/40",  bgClass: "bg-stone-500/10" },
  { id: "operative",  name: "Operative",  emoji: "🛰️", minLevel: 10, color: "#38bdf8", textClass: "text-sky-400",    borderClass: "border-sky-500/40",    bgClass: "bg-sky-500/10" },
  { id: "analyst",    name: "Analyst",    emoji: "🔬", minLevel: 20, color: "#22d3ee", textClass: "text-cyan-400",   borderClass: "border-cyan-500/40",   bgClass: "bg-cyan-500/10" },
  { id: "specialist", name: "Specialist", emoji: "🧬", minLevel: 30, color: "#a78bfa", textClass: "text-violet-400", borderClass: "border-violet-500/40", bgClass: "bg-violet-500/10" },
  { id: "operator",   name: "Operator",   emoji: "⚙️", minLevel: 40, color: "#c084fc", textClass: "text-purple-400", borderClass: "border-purple-500/40", bgClass: "bg-purple-500/10" },
  { id: "sentinel",   name: "Sentinel",   emoji: "🛡️", minLevel: 50, color: "#fbbf24", textClass: "text-amber-400",  borderClass: "border-amber-500/40",  bgClass: "bg-amber-500/10" },
  { id: "vanguard",   name: "Vanguard",   emoji: "⚔️", minLevel: 60, color: "#fb923c", textClass: "text-orange-400", borderClass: "border-orange-500/40", bgClass: "bg-orange-500/10" },
  { id: "apex",       name: "Apex",       emoji: "👑", minLevel: 75, color: "#f87171", textClass: "text-red-400",    borderClass: "border-red-500/40",    bgClass: "bg-red-500/10" },
];

export function rankForLevel(level: number): RankTier {
  let r = RANKS[0];
  for (const tier of RANKS) if (level >= tier.minLevel) r = tier;
  return r;
}

export type LevelInfo = {
  level: number;
  rank: RankTier;
  /** XP earned beyond the current level's floor. */
  xpIntoLevel: number;
  /** XP span of the current level (floor → next). */
  xpForThisLevel: number;
  /** Progress to next level, 0–100. */
  pct: number;
  /** XP remaining to the next level. */
  xpToNext: number;
  /** Absolute XP threshold of the next level. */
  nextLevelAtXp: number;
};

export function levelInfo(xp: number): LevelInfo {
  const level = levelForXp(xp);
  const floor = xpToReachLevel(level);
  const ceil = xpToReachLevel(level + 1);
  const span = ceil - floor;
  const into = Math.max(0, xp - floor);
  return {
    level,
    rank: rankForLevel(level),
    xpIntoLevel: into,
    xpForThisLevel: span,
    pct: span > 0 ? Math.min(100, Math.round((into / span) * 100)) : 100,
    xpToNext: Math.max(0, ceil - xp),
    nextLevelAtXp: ceil,
  };
}

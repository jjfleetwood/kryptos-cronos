/**
 * Weekly Leagues (gamification Phase 2). Pure, client-safe config shared by the
 * server placement logic, the /leagues page, and (later) mobile. No deps.
 *
 * Players are sorted into ~30-person cohorts inside a division and race on XP
 * earned that week. Each Monday (UTC) the top of every cohort promotes to the
 * next division up, the bottom relegates down, and fresh cohorts form.
 */

export type Division = {
  id: string;
  name: string;
  emoji: string;
  /** Hex for inline styles. */
  color: string;
  textClass: string;
  borderClass: string;
  bgClass: string;
};

/** Ordered lowest → highest. Index = rung on the ladder. */
export const DIVISIONS: Division[] = [
  { id: "bronze",   name: "Bronze",   emoji: "🥉", color: "#b45309", textClass: "text-amber-600",  borderClass: "border-amber-700/40",  bgClass: "bg-amber-700/10"  },
  { id: "silver",   name: "Silver",   emoji: "🥈", color: "#94a3b8", textClass: "text-slate-300",  borderClass: "border-slate-400/40",  bgClass: "bg-slate-400/10"  },
  { id: "gold",     name: "Gold",     emoji: "🥇", color: "#eab308", textClass: "text-yellow-400", borderClass: "border-yellow-500/40", bgClass: "bg-yellow-500/10" },
  { id: "platinum", name: "Platinum", emoji: "💠", color: "#2dd4bf", textClass: "text-teal-300",   borderClass: "border-teal-400/40",   bgClass: "bg-teal-400/10"   },
  { id: "diamond",  name: "Diamond",  emoji: "💎", color: "#38bdf8", textClass: "text-sky-400",    borderClass: "border-sky-500/40",    bgClass: "bg-sky-500/10"    },
  { id: "obsidian", name: "Obsidian", emoji: "🔮", color: "#a78bfa", textClass: "text-violet-400", borderClass: "border-violet-500/40", bgClass: "bg-violet-500/10" },
];

export const COHORT_SIZE = 30;
export const PROMOTE_COUNT = 7;
export const RELEGATE_COUNT = 5;
export const DEFAULT_DIVISION = "bronze";

export function divisionIndex(id: string): number {
  const i = DIVISIONS.findIndex((d) => d.id === id);
  return i === -1 ? 0 : i;
}

export function divisionById(id: string): Division {
  return DIVISIONS[divisionIndex(id)];
}

/** Division one rung up (or the top division if already there). */
export function promoteDivision(id: string): string {
  const i = divisionIndex(id);
  return DIVISIONS[Math.min(i + 1, DIVISIONS.length - 1)].id;
}

/** Division one rung down (or the bottom division if already there). */
export function relegateDivision(id: string): string {
  const i = divisionIndex(id);
  return DIVISIONS[Math.max(i - 1, 0)].id;
}

export const isTopDivision = (id: string) => divisionIndex(id) === DIVISIONS.length - 1;
export const isBottomDivision = (id: string) => divisionIndex(id) === 0;

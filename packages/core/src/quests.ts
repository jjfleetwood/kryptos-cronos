/**
 * Quests (gamification Phase 3). Pure, client-safe.
 *
 * A small rotating set of daily and weekly objectives. The active set for a
 * given day/week is chosen deterministically (seeded by the date), so the
 * server and any client agree without storing the selection. Quest rewards are
 * paid in COINS (and occasionally streak freezes) — never XP — so they stay
 * clear of the self-healing XP recompute in the award path.
 */

export type QuestMetric = "stages" | "xp" | "clean";
export type QuestPeriod = "daily" | "weekly";

export type Quest = {
  id: string;
  period: QuestPeriod;
  metric: QuestMetric;
  target: number;
  emoji: string;
  title: string;
  desc: string;
  coins: number;
  /** Streak freezes granted on completion (optional). */
  freezes?: number;
};

export const DAILY_QUEST_POOL: Quest[] = [
  { id: "d-stages-1", period: "daily", metric: "stages", target: 1,   emoji: "🎯", title: "Warm Up",        desc: "Complete 1 stage today",        coins: 30  },
  { id: "d-stages-3", period: "daily", metric: "stages", target: 3,   emoji: "🔥", title: "On a Roll",      desc: "Complete 3 stages today",       coins: 100 },
  { id: "d-xp-100",   period: "daily", metric: "xp",     target: 100, emoji: "⚡", title: "Charge Up",      desc: "Earn 100 XP today",             coins: 60  },
  { id: "d-xp-250",   period: "daily", metric: "xp",     target: 250, emoji: "🚀", title: "Full Throttle",  desc: "Earn 250 XP today",             coins: 150 },
  { id: "d-clean-1",  period: "daily", metric: "clean",  target: 1,   emoji: "✨", title: "Clean Hit",      desc: "Land 1 clean solve today",      coins: 80  },
  { id: "d-clean-2",  period: "daily", metric: "clean",  target: 2,   emoji: "💎", title: "Surgical",       desc: "Land 2 clean solves today",     coins: 150 },
];

export const WEEKLY_QUEST_POOL: Quest[] = [
  { id: "w-stages-10", period: "weekly", metric: "stages", target: 10,   emoji: "🏗️", title: "Grinder",       desc: "Complete 10 stages this week",  coins: 500,  freezes: 1 },
  { id: "w-stages-20", period: "weekly", metric: "stages", target: 20,   emoji: "🏛️", title: "Marathon",      desc: "Complete 20 stages this week",  coins: 1000, freezes: 1 },
  { id: "w-xp-1000",   period: "weekly", metric: "xp",     target: 1000, emoji: "⚡", title: "Power Week",     desc: "Earn 1,000 XP this week",       coins: 600  },
  { id: "w-xp-2500",   period: "weekly", metric: "xp",     target: 2500, emoji: "🌟", title: "Overdrive",     desc: "Earn 2,500 XP this week",       coins: 1500, freezes: 1 },
  { id: "w-clean-5",   period: "weekly", metric: "clean",  target: 5,    emoji: "💠", title: "Precision",     desc: "Land 5 clean solves this week", coins: 700  },
];

export const DAILY_QUEST_COUNT = 3;
export const WEEKLY_QUEST_COUNT = 2;

function hashString(s: string): number {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

/** Deterministic seeded pick of `count` quests from a pool (seeded Fisher–Yates). */
function seededPick(pool: Quest[], count: number, seed: string): Quest[] {
  const arr = [...pool];
  let state = hashString(seed) || 1;
  const rand = () => {
    // xorshift32
    state ^= state << 13; state >>>= 0;
    state ^= state >> 17;
    state ^= state << 5; state >>>= 0;
    return state / 0xffffffff;
  };
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr.slice(0, Math.min(count, arr.length));
}

/** The daily quest set for a UTC date string (YYYY-MM-DD). Pro users pass a larger count. */
export function dailyQuestsFor(dateStr: string, count: number = DAILY_QUEST_COUNT): Quest[] {
  return seededPick(DAILY_QUEST_POOL, count, `d:${dateStr}`);
}

/** The weekly quest set for a Monday-UTC week key (YYYY-MM-DD). */
export function weeklyQuestsFor(weekStr: string): Quest[] {
  return seededPick(WEEKLY_QUEST_POOL, WEEKLY_QUEST_COUNT, `w:${weekStr}`);
}

export function getQuestById(id: string): Quest | undefined {
  return [...DAILY_QUEST_POOL, ...WEEKLY_QUEST_POOL].find((q) => q.id === id);
}

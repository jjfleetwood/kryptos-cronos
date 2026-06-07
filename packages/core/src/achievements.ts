/**
 * Achievements (gamification Phase 4). Pure, client-safe catalog + a derivation
 * helper. Achievements are computed from stats the platform already tracks — no
 * new per-event write paths — so they stay self-healing and impossible to forge.
 */

export type AchievementCategory = "progression" | "mastery" | "streak" | "epochs" | "leagues";

export type AchievementMetric = "stages" | "xp" | "clean" | "streak" | "epochs100" | "division";

export type Achievement = {
  id: string;
  name: string;
  desc: string;
  emoji: string;
  category: AchievementCategory;
  metric: AchievementMetric;
  /** Threshold the metric must reach. For `division`, the DIVISIONS index. */
  target: number;
};

export const ACHIEVEMENTS: Achievement[] = [
  // ── Progression: stages ──
  { id: "ach-stages-10",  name: "Getting Started",  desc: "Complete 10 stages",   emoji: "🌱", category: "progression", metric: "stages", target: 10 },
  { id: "ach-stages-50",  name: "Committed",        desc: "Complete 50 stages",   emoji: "🪖", category: "progression", metric: "stages", target: 50 },
  { id: "ach-stages-100", name: "Centurion",        desc: "Complete 100 stages",  emoji: "💯", category: "progression", metric: "stages", target: 100 },
  { id: "ach-stages-250", name: "Veteran",          desc: "Complete 250 stages",  emoji: "🎖️", category: "progression", metric: "stages", target: 250 },
  { id: "ach-stages-500", name: "Legend",           desc: "Complete 500 stages",  emoji: "🏆", category: "progression", metric: "stages", target: 500 },

  // ── Progression: XP ──
  { id: "ach-xp-1k",  name: "Spark",      desc: "Earn 1,000 XP",   emoji: "⚡", category: "progression", metric: "xp", target: 1000 },
  { id: "ach-xp-10k", name: "Surge",      desc: "Earn 10,000 XP",  emoji: "🔋", category: "progression", metric: "xp", target: 10000 },
  { id: "ach-xp-50k", name: "Powerhouse", desc: "Earn 50,000 XP",  emoji: "🌟", category: "progression", metric: "xp", target: 50000 },

  // ── Mastery: clean solves ──
  { id: "ach-clean-5",   name: "Sharp",     desc: "5 clean solves (score ≥ 80)",   emoji: "✨", category: "mastery", metric: "clean", target: 5 },
  { id: "ach-clean-25",  name: "Surgical",  desc: "25 clean solves",               emoji: "💎", category: "mastery", metric: "clean", target: 25 },
  { id: "ach-clean-100", name: "Flawless",  desc: "100 clean solves",              emoji: "🔱", category: "mastery", metric: "clean", target: 100 },

  // ── Streak ──
  { id: "ach-streak-7",   name: "Week Warrior", desc: "Reach a 7-day streak",   emoji: "🔥", category: "streak", metric: "streak", target: 7 },
  { id: "ach-streak-30",  name: "Iron Will",    desc: "Reach a 30-day streak",  emoji: "⚡", category: "streak", metric: "streak", target: 30 },
  { id: "ach-streak-100", name: "Unbreakable",  desc: "Reach a 100-day streak", emoji: "💠", category: "streak", metric: "streak", target: 100 },

  // ── Epoch completion ──
  { id: "ach-epoch-1",  name: "Completionist",   desc: "Finish an epoch 100%",     emoji: "✅", category: "epochs", metric: "epochs100", target: 1 },
  { id: "ach-epoch-5",  name: "Thorough",        desc: "Finish 5 epochs 100%",     emoji: "📚", category: "epochs", metric: "epochs100", target: 5 },
  { id: "ach-epoch-15", name: "Curriculum Crusher", desc: "Finish 15 epochs 100%", emoji: "🎓", category: "epochs", metric: "epochs100", target: 15 },

  // ── Leagues (target = DIVISIONS index) ──
  { id: "ach-league-gold",     name: "Golden",   desc: "Reach the Gold league",     emoji: "🥇", category: "leagues", metric: "division", target: 2 },
  { id: "ach-league-diamond",  name: "Brilliant", desc: "Reach the Diamond league", emoji: "💎", category: "leagues", metric: "division", target: 4 },
  { id: "ach-league-obsidian", name: "Apex Predator", desc: "Reach the Obsidian league", emoji: "🔮", category: "leagues", metric: "division", target: 5 },
];

export type AchievementStats = {
  stages: number;
  xp: number;
  clean: number;
  streak: number;
  epochs100: number;
  division: number;
};

export type AchievementState = Achievement & { progress: number; earned: boolean };

/** Resolve every achievement's progress + earned flag from the player's stats. */
export function computeAchievements(stats: AchievementStats): AchievementState[] {
  return ACHIEVEMENTS.map((a) => {
    const value = stats[a.metric];
    return { ...a, progress: Math.min(a.target, value), earned: value >= a.target };
  });
}

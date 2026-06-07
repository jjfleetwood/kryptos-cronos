/**
 * Streak 2.0 config (gamification Phase 3). Pure, client-safe.
 *
 * A day counts toward the streak only once the player earns DAILY_GOAL_XP that
 * day (not merely opening a stage). Each active streak day adds a small, capped
 * XP multiplier. Streak freezes bridge missed days so a long streak survives a
 * skipped day.
 */

/** XP a player must earn in a UTC day for it to count toward the streak. */
export const DAILY_GOAL_XP = 50;

export const STREAK_MULT_PER_DAY = 0.02; // +2% XP per active streak day
export const STREAK_MULT_CAP = 0.2;      // capped at +20% (reached at a 10-day streak)

/** XP multiplier (0–CAP) granted by the current streak. */
export function streakMultiplier(streak: number): number {
  if (streak <= 0) return 0;
  return Math.min(STREAK_MULT_CAP, streak * STREAK_MULT_PER_DAY);
}

/** Maximum streak freezes a player can bank. */
export const MAX_FREEZES = 3;

/** Coin cost to buy one streak freeze (the Phase 4 coin sink). */
export const FREEZE_PRICE = 200;

/**
 * Pro perks (gamification Phase 5). Pure config. Pro perks deliberately touch
 * only the COIN economy and engagement helpers — never XP — so the leaderboard,
 * levels, ranks, and leagues stay a pure, pay-to-win-free measure of learning.
 */

/** Pro/trial users earn this multiple of coins per completion (XP is unchanged). */
export const PRO_COIN_MULTIPLIER = 1.5;

/** Extra daily quest slots granted to Pro/trial users. */
export const PRO_DAILY_QUEST_BONUS = 1;

/** Streak freezes auto-granted to Pro/trial users at the start of each week. */
export const PRO_WEEKLY_FREE_FREEZES = 1;

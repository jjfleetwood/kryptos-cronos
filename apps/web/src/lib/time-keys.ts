// Shared UTC date + leaderboard Redis-key helpers. Pure, deterministic, no
// side effects — the single source of truth for the day/week time windows used
// by the leaderboard, streaks, quests, and league cohorts.

/** Today's date as a UTC `YYYY-MM-DD` string. */
export function todayUTC(): string {
  return new Date().toISOString().slice(0, 10);
}

/** Yesterday's date as a UTC `YYYY-MM-DD` string. */
export function yesterdayUTC(): string {
  const d = new Date();
  d.setUTCDate(d.getUTCDate() - 1);
  return d.toISOString().slice(0, 10);
}

/** Monday (UTC) date string `YYYY-MM-DD` for the week containing `d`. */
export function weekMondayKey(d = new Date()): string {
  const day = d.getUTCDay();
  const diff = d.getUTCDate() - day + (day === 0 ? -6 : 1);
  const monday = new Date(Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), diff));
  return monday.toISOString().slice(0, 10);
}

/** Daily leaderboard sorted-set key, e.g. `lb:d:2026-06-18`. */
export function getDayKey(): string {
  return `lb:d:${todayUTC()}`;
}

/** Weekly leaderboard sorted-set key, e.g. `lb:w:2026-06-15` (Monday-anchored). */
export function getWeekKey(): string {
  return `lb:w:${weekMondayKey()}`;
}

import { getSession } from "@/lib/auth";

export type UserProgress = {
  /** Lifetime XP — drives Level / Rank / Leagues / leaderboard. Never spent. */
  xp: number;
  completedStages: string[];
  badges: string[];
  streak?: number;
  quizCompletedStages?: string[];
};

/** Fetch authoritative progress from the server. Returns null if unauthenticated or on error. */
export async function fetchProgress(): Promise<UserProgress | null> {
  try {
    const res = await fetch("/api/progress");
    if (!res.ok) return null;
    return await res.json() as UserProgress;
  } catch {
    return null;
  }
}

/** Posts a stage completion to the server. Used by the extraCommands path in CtfChallenge.
 *  Resolves with the first-blood signal (null if unauthenticated or on error). */
export async function awardStage(
  stageId: string,
  _xp: number,
  badge?: string,
): Promise<{ firstBlood?: boolean; clears?: number } | null> {
  if (!getSession()) return null;
  try {
    const res = await fetch("/api/progress", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ stageId, badgeId: badge }),
    });
    if (!res.ok) return null;
    const data = await res.json() as { progress?: { firstBlood?: boolean; clears?: number } };
    return data.progress ?? null;
  } catch {
    return null;
  }
}

/** Posts an audit quiz completion to the server. */
export async function awardQuizStage(stageId: string): Promise<string[]> {
  if (!getSession()) return [];
  try {
    const res = await fetch("/api/quiz-progress", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ stageId }),
    });
    if (!res.ok) return [];
    const data = await res.json() as { quizCompletedStages: string[] };
    return data.quizCompletedStages ?? [];
  } catch {
    return [];
  }
}

/** Fetch quiz-completed stage IDs for the current user. */
export async function fetchQuizProgress(): Promise<string[]> {
  try {
    const res = await fetch("/api/quiz-progress");
    if (!res.ok) return [];
    const data = await res.json() as { quizCompletedStages: string[] };
    return data.quizCompletedStages ?? [];
  } catch {
    return [];
  }
}

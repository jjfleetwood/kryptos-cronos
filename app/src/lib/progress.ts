import { getSession } from "@/lib/auth";

export type UserProgress = {
  xp: number;
  completedStages: string[];
  badges: string[];
  streak?: number;
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

/** Posts a stage completion to the server. Used by the extraCommands path in CtfChallenge. */
export function awardStage(stageId: string, _xp: number, badge?: string): void {
  if (!getSession()) return;
  fetch("/api/progress", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ stageId, badgeId: badge }),
  }).catch(() => {});
}

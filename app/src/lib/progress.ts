import { getSession } from "@/lib/auth";

export type UserProgress = {
  xp: number;
  completedStages: string[];
  badges: string[];
  streak?: number;
};

const BASE_KEY = "kryptos_progress";

function progressKey(): string {
  const username = getSession();
  return username ? `${BASE_KEY}_${username}` : BASE_KEY;
}

function load(): UserProgress {
  if (typeof window === "undefined") return { xp: 0, completedStages: [], badges: [] };
  try {
    const raw = localStorage.getItem(progressKey());
    return raw ? (JSON.parse(raw) as UserProgress) : { xp: 0, completedStages: [], badges: [] };
  } catch {
    return { xp: 0, completedStages: [], badges: [] };
  }
}

function save(p: UserProgress) {
  if (typeof window !== "undefined") localStorage.setItem(progressKey(), JSON.stringify(p));
}

export function getProgress(): UserProgress {
  return load();
}

/** Merges server-authoritative progress into localStorage. Call with the
 *  progress object returned by /api/check-flag or /api/check-answer. */
export function applyServerProgress(p: UserProgress): void {
  const local = load();
  const merged: UserProgress = {
    xp: Math.max(local.xp, p.xp),
    completedStages: Array.from(new Set([...local.completedStages, ...p.completedStages])),
    badges: Array.from(new Set([...local.badges, ...p.badges])),
    streak: p.streak ?? local.streak,
  };
  save(merged);
}

/** Awards a stage locally and syncs to server via session-authenticated POST.
 *  Used by the extraCommands path which bypasses the check endpoints. */
export function awardStage(stageId: string, xp: number, badge?: string): UserProgress {
  const p = load();
  if (!p.completedStages.includes(stageId)) {
    p.xp += xp;
    p.completedStages.push(stageId);
  }
  if (badge && !p.badges.includes(badge)) {
    p.badges.push(badge);
  }
  save(p);

  // Sync to server — session cookie is sent automatically, so the server can
  // authenticate the request and re-derive XP from the authoritative stage data.
  if (getSession()) {
    fetch("/api/progress", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ stageId, badgeId: badge }),
    })
      .then((res) => res.json())
      .then((data) => { if (data.progress) applyServerProgress(data.progress); })
      .catch(() => {});
  }

  return p;
}

export async function restoreFromServer(username: string): Promise<void> {
  try {
    const res = await fetch(`/api/progress?username=${encodeURIComponent(username)}`);
    if (!res.ok) return;
    const data = await res.json();
    if (!data) return;
    const local = load();
    const merged: UserProgress = {
      xp: Math.max(local.xp, data.xp),
      completedStages: Array.from(new Set([...local.completedStages, ...data.completedStages])),
      badges: Array.from(new Set([...local.badges, ...data.badges])),
    };
    save(merged);
  } catch {
    // ignore — local progress is still valid
  }
}

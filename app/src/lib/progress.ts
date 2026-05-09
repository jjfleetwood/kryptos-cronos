export type UserProgress = {
  xp: number;
  completedStages: string[];
  badges: string[];
};

const KEY = "cyberquest_progress";

function load(): UserProgress {
  if (typeof window === "undefined") return { xp: 0, completedStages: [], badges: [] };
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as UserProgress) : { xp: 0, completedStages: [], badges: [] };
  } catch {
    return { xp: 0, completedStages: [], badges: [] };
  }
}

function save(p: UserProgress) {
  if (typeof window !== "undefined") localStorage.setItem(KEY, JSON.stringify(p));
}

export function getProgress(): UserProgress {
  return load();
}

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
  return p;
}

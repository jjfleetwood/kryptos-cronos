export type UserGroup = "elementary" | "junior-hs" | "high-school" | "university" | "career" | "curious";

// Active groups shown to users — curriculum levels reserved for future use
export const USER_GROUPS: UserGroup[] = ["career", "curious"];

export const DEFAULT_GROUPS: UserGroup[] = ["career", "curious"];

export const GROUP_LABELS: Record<UserGroup, string> = {
  "elementary": "Elementary",
  "junior-hs": "Junior HS",
  "high-school": "High School",
  "university": "University",
  "career": "Career",
  "curious": "Curious",
};

export const GROUP_ICONS: Record<UserGroup, string> = {
  "elementary": "🧒",
  "junior-hs": "🎒",
  "high-school": "🏫",
  "university": "🎓",
  "career": "💼",
  "curious": "🔍",
};

export function getClientGroups(): UserGroup[] {
  if (typeof document === "undefined") return [...DEFAULT_GROUPS];
  const raw = document.cookie.match(/(?:^|;\s*)userGroups=([^;]+)/)?.[1];
  if (raw) {
    const vals = decodeURIComponent(raw).split(",").filter((v): v is UserGroup => USER_GROUPS.includes(v as UserGroup));
    if (vals.length > 0) return vals;
  }
  // legacy fallback
  const legacy = document.cookie.match(/(?:^|;\s*)userGroup=([^;]+)/)?.[1] as UserGroup | undefined;
  if (legacy && USER_GROUPS.includes(legacy)) return [legacy];
  return [...DEFAULT_GROUPS];
}

export function setClientGroups(groups: UserGroup[]) {
  document.cookie = `userGroups=${encodeURIComponent(groups.join(","))}; path=/; max-age=${60 * 60 * 24 * 365}; SameSite=Lax`;
}

export function getClientGroup(): UserGroup {
  return getClientGroups()[0] ?? "career";
}

export function setClientGroup(group: UserGroup) {
  setClientGroups([group]);
}

// Shared types for the admin dashboard, split out of page.tsx so the page and
// its extracted panels (./_panels) can both reference them without the page
// having to re-export. Pure types — no runtime, no "use client" needed.

export type UserRow = {
  username: string;
  email: string;
  createdAt: number | null;
  tier: string;
  isAdmin: boolean;
  xp: number;
  coins: number;
  stageIds: string[];
  stages: number;
  badges: number;
  streak: number;
  lastActive: number | null;
  skin: string;
  userGroups: string[];
};

export type FlagCapture = { username: string; stageId: string; flagValue: string; ts: number };

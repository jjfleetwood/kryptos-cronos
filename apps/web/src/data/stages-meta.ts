// Client-safe stage metadata — no ctf, no quiz, no info.
// Import this in "use client" listing components instead of stages.ts.
// stages.ts should eventually be marked server-only; this module is the
// explicit bridge until that migration is complete.
import type { EpochConfig } from "./types";
import { stages, epochs } from "./stages";

export type StageMeta = {
  id: string;
  epochId: string;
  order: number;
  title: string;
  xp: number;
  badge: { id: string; name: string; emoji: string };
  challengeType: "quiz" | "ctf";
  cveId?: string;
  group?: string;
  wonder: { name: string; location: string; era: string; emoji: string };
  easeScore?: number;
  valueScore?: number;
  rank?: number;
};

export const stagesMeta: StageMeta[] = stages.map(
  ({ id, epochId, order, title, xp, badge, challengeType, cveId, wonder, group, easeScore, valueScore, rank }) => ({
    id,
    epochId,
    order,
    title,
    xp,
    badge,
    challengeType,
    cveId,
    wonder,
    group,
    easeScore,
    valueScore,
    rank,
  })
);

export { epochs };
export type { EpochConfig };

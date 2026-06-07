// Client-safe stage metadata — no ctf, no quiz, no info, and crucially NO import
// of stages.ts (the heavy content barrel). Import THIS in "use client" listing
// components instead of stages.ts.
//
// The data lives in stages-meta.generated.ts (codegen, fully self-contained).
// Regenerate after changing any stage/epoch content: npm run gen:meta -w @kryptos/core
import type { EpochConfig } from "./types";

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

export { stagesMeta, epochs } from "./stages-meta.generated";
export type { EpochConfig };

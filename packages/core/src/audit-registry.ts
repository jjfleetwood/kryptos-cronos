// Registry for the gated Advanced Audit track — deliberately SEPARATE from the
// main `stages.ts` barrel + stages-meta, so these modules stay off to the side
// (not in the public learner catalog, counts, or validators). The /audit section
// reads from here. As domains are added, register their epoch + stages below.
import type { EpochConfig, StageConfig } from "./types";
import { auditApplicationReviewEpoch, auditApplicationReviewStages } from "./audit-application-review";

export const auditEpochs: EpochConfig[] = [
  auditApplicationReviewEpoch,
];

export const auditStages: StageConfig[] = [
  ...auditApplicationReviewStages,
];

export function auditStagesForEpoch(epochId: string): StageConfig[] {
  return auditStages.filter((s) => s.epochId === epochId).sort((a, b) => a.order - b.order);
}

export function getAuditEpoch(epochId: string): EpochConfig | undefined {
  return auditEpochs.find((e) => e.id === epochId);
}

export function getAuditStage(id: string): StageConfig | undefined {
  return auditStages.find((s) => s.id === id);
}

/** Cross-track ranking: all modules ranked together by easeScore + valueScore. */
export function auditRanked(): StageConfig[] {
  return [...auditStages].sort(
    (a, b) => ((b.easeScore ?? 0) + (b.valueScore ?? 0)) - ((a.easeScore ?? 0) + (a.valueScore ?? 0)),
  );
}

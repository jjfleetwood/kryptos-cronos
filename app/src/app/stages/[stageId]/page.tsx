import { getStage } from "@/data/stages";
import StageContainer from "@/components/StageContainer";
import type { StageConfig } from "@/data/types";

export default async function StagePage({
  params,
}: {
  params: Promise<{ stageId: string }>;
}) {
  const { stageId } = await params;
  const stage = getStage(stageId) ?? null;

  // Strip the flag before serializing to the client — validation happens server-side via /api/check-flag
  const safeStage: StageConfig | null = stage?.ctf
    ? { ...stage, ctf: { ...stage.ctf, flag: undefined } }
    : stage;

  return <StageContainer stage={safeStage} />;
}

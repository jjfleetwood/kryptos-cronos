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

  // Strip secrets before serializing to the client — validation happens server-side
  let safeStage: StageConfig | null = stage;
  if (safeStage?.ctf) {
    safeStage = { ...safeStage, ctf: { ...safeStage.ctf, flag: undefined } };
  }
  if (safeStage?.quiz) {
    safeStage = {
      ...safeStage,
      quiz: {
        questions: safeStage.quiz.questions.map(({ correctIndex: _ci, explanation: _ex, ...q }) => q),
      },
    };
  }

  return <StageContainer stage={safeStage} />;
}

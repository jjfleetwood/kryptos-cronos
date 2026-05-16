import { NextRequest, NextResponse } from "next/server";
import { quizStage01 } from "@/data/quiz-stage-01";
import { getServerSession } from "@/lib/server-session";
import { awardStageInRedis } from "@/lib/server-progress";
import { stages } from "@/data/stages";

const quizRegistry: Record<string, typeof quizStage01> = {
  "stage-01": quizStage01,
};

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null);
  if (
    !body ||
    typeof body.stageId !== "string" ||
    typeof body.questionId !== "string" ||
    typeof body.selectedIndex !== "number"
  ) {
    return NextResponse.json({ correct: false }, { status: 400 });
  }

  const quiz = quizRegistry[body.stageId];
  if (!quiz) {
    return NextResponse.json({ correct: false }, { status: 404 });
  }

  const question = quiz.questions.find((q) => q.id === body.questionId);
  if (!question) {
    return NextResponse.json({ correct: false }, { status: 404 });
  }

  const correct = body.selectedIndex === question.correctIndex;

  // On final question correct answer, award the stage server-side
  const isLastQuestion = body.isFinalQuestion === true;
  if (correct && isLastQuestion) {
    const username = getServerSession(req);
    if (username) {
      const stage = stages.find((s) => s.id === body.stageId);
      const progress = await awardStageInRedis(
        username,
        body.stageId,
        stage?.badge.id
      );
      return NextResponse.json({ correct: true, explanation: question.explanation ?? "", progress });
    }
  }

  return NextResponse.json({ correct, explanation: question.explanation ?? "" });
}

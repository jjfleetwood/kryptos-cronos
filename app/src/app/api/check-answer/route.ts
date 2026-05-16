import { NextRequest, NextResponse } from "next/server";
import { quizStage01 } from "@/data/quiz-stage-01";

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
  return NextResponse.json({ correct, explanation: question.explanation ?? "" });
}

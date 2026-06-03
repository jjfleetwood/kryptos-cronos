import { NextRequest, NextResponse } from "next/server";
import { quizStage01 } from "@/data/quiz-stage-01";
import { getAuthedUsername } from "@/lib/api-auth";
import { awardStageInRedis, awardQuizStageInRedis } from "@/lib/server-progress";
import { getStage } from "@/data/stages";
import { canAccessStage } from "@/lib/access";
import {
  computeStageScore, computeBonusXp, updateSkillLevel,
  getWrongAttempts, trackWrongAttempt, getRecommendedNext,
} from "@/lib/difficulty";

const quizRegistry: Record<string, typeof quizStage01> = {
  "stage-01": quizStage01,
};

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null);
  if (
    !body ||
    typeof body.stageId !== "string" ||
    typeof body.questionId !== "string" ||
    (typeof body.selectedIndex !== "number" && typeof body.selectedText !== "string")
  ) {
    return NextResponse.json({ correct: false }, { status: 400 });
  }

  const username = await getAuthedUsername(req);
  if (!await canAccessStage(body.stageId, username)) {
    return NextResponse.json({ correct: false }, { status: 403 });
  }

  // Look up quiz questions: check hardcoded registry first, then fall back to stages data
  const stage = getStage(body.stageId);
  const registryQuiz = quizRegistry[body.stageId];
  const quiz = registryQuiz ?? stage?.quiz;

  if (!quiz) {
    return NextResponse.json({ correct: false }, { status: 404 });
  }

  const question = quiz.questions.find((q) => q.id === body.questionId);
  if (!question) {
    return NextResponse.json({ correct: false }, { status: 404 });
  }

  // Validate by option TEXT when supplied — lets the client shuffle option order
  // each attempt without ever exposing correctIndex. Falls back to index for
  // legacy callers that still send selectedIndex.
  const correctText =
    question.correctIndex != null ? question.options[question.correctIndex] : undefined;
  const correct =
    typeof body.selectedText === "string"
      ? correctText != null && body.selectedText === correctText
      : body.selectedIndex === question.correctIndex;

  if (!correct && username) {
    trackWrongAttempt(username, body.stageId).catch(() => {});
  }

  // On final question correct answer, record completion server-side.
  const isLastQuestion = body.isFinalQuestion === true;
  if (correct && isLastQuestion && username) {
    // Dual-mode stage (a CTF that also offers a quiz): finishing the quiz marks the
    // stage HALF complete — visual only, no XP. Capturing the CTF flag fully clears it.
    if (stage?.ctf) {
      const quizCompletedStages = await awardQuizStageInRedis(username, body.stageId);
      return NextResponse.json({
        correct: true,
        explanation: question.explanation ?? "",
        half: true,
        quizCompletedStages,
      });
    }

    // Pure quiz stage: completing the quiz fully clears the stage and awards XP.
    const wrongAttempts = await getWrongAttempts(username, body.stageId);
    // Quiz stages: no time tracking; hints unused → score driven entirely by wrong attempts
    const stageScore = computeStageScore(0, 0, wrongAttempts);
    const bonusXp = computeBonusXp(stageScore, stage?.xp ?? 0);

    const progress = await awardStageInRedis(
      username,
      body.stageId,
      stage?.badge.id,
      0,
      bonusXp
    );

    const skillLevel = await updateSkillLevel(username, stageScore);
    const recommendedNext = stage
      ? getRecommendedNext(stage.epochId, progress.completedStages, skillLevel)
      : null;

    return NextResponse.json({
      correct: true,
      explanation: question.explanation ?? "",
      half: false,
      progress,
      bonusXp,
      recommendedNext,
    });
  }

  return NextResponse.json({ correct, explanation: question.explanation ?? "" });
}

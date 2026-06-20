import { NextRequest, NextResponse } from "next/server";
import { quizStage01 } from "@kryptos/core/quiz-stage-01";
import { getAuthedUsername } from "@/lib/api-auth";
import { redis } from "@/lib/redis";
import { awardStageInRedis, awardQuizStageInRedis } from "@/lib/server-progress";
import { isRateLimited } from "@/lib/rate-limit";
import { getClientIp } from "@/lib/client-ip";
import { getStage } from "@kryptos/core/stages";
import { canAccessStage } from "@/lib/access";
import {
  computeStageScore, computeBonusXp, updateSkillLevel,
  getWrongAttempts, trackWrongAttempt, getRecommendedNext,
} from "@/lib/difficulty";

const quizRegistry: Record<string, typeof quizStage01> = {
  "stage-01": quizStage01,
};

// Must mirror QUESTIONS_PER_ATTEMPT in QuizChallenge.tsx. A stage clears when the
// learner answers at least PASS_RATIO of the attempt correctly — counted server-side.
const QUESTIONS_PER_ATTEMPT = 10;
const PASS_RATIO = 0.7;
const ATTEMPT_TTL_S = 3600;

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

  // Throttle answer submissions (per user+stage, or per IP+stage if anon).
  const rlId = `${username ?? getClientIp(req)}:${body.stageId}`;
  if (await isRateLimited("answer", rlId, 60, 600)) {
    return NextResponse.json({ correct: false, error: "Too many attempts. Slow down." }, { status: 429 });
  }

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

  // ── Attempt scoring (server-side, spoof-proof) ──
  // Track the DISTINCT questionIds answered correctly this attempt in a Redis set,
  // reset at the first question. A stage clears on a real pass rate (≥ PASS_RATIO),
  // not just a correct final question. The attempt size is derived server-side, so a
  // client can't lower the bar; the set ignores duplicate/replayed correct answers.
  const isFirst = body.isFirstQuestion === true;
  const isLast = body.isFinalQuestion === true;
  const attemptKey = username ? `quizatt:${username.toLowerCase()}:${body.stageId}` : null;

  if (attemptKey) {
    if (isFirst) await redis.del(attemptKey);
    if (correct) {
      await redis.sadd(attemptKey, question.id);
      await redis.expire(attemptKey, ATTEMPT_TTL_S);
    }
  }

  if (isLast && username && attemptKey) {
    const attemptTotal = Math.min(QUESTIONS_PER_ATTEMPT, quiz.questions.length);
    const passNeeded = Math.ceil(attemptTotal * PASS_RATIO);
    const correctCount = await redis.scard(attemptKey);
    const passed = correctCount >= passNeeded;
    const isDual = !!stage?.ctf;

    if (!passed) {
      return NextResponse.json({
        correct, explanation: question.explanation ?? "",
        half: isDual, passed: false, correctCount, attemptTotal, passNeeded,
      });
    }

    await redis.del(attemptKey); // consume the attempt once it clears

    // Dual-mode stage (a CTF that also offers a quiz): passing the quiz marks the
    // stage HALF complete — visual only, no XP. Capturing the CTF flag fully clears it.
    if (isDual) {
      const quizCompletedStages = await awardQuizStageInRedis(username, body.stageId);
      return NextResponse.json({
        correct, explanation: question.explanation ?? "",
        half: true, passed: true, quizCompletedStages,
      });
    }

    // Pure quiz stage: passing fully clears the stage and awards XP.
    const wrongAttempts = await getWrongAttempts(username, body.stageId);
    const stageScore = computeStageScore(0, 0, wrongAttempts);
    const bonusXp = computeBonusXp(stageScore, stage?.xp ?? 0);
    const progress = await awardStageInRedis(username, body.stageId, stage?.badge.id, 0, bonusXp);
    const skillLevel = await updateSkillLevel(username, stageScore);
    const recommendedNext = stage
      ? getRecommendedNext(stage.epochId, progress.completedStages, skillLevel)
      : null;

    return NextResponse.json({
      correct, explanation: question.explanation ?? "",
      half: false, passed: true, progress, bonusXp, recommendedNext,
    });
  }

  return NextResponse.json({ correct, explanation: question.explanation ?? "" });
}

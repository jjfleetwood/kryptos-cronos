import { NextRequest, NextResponse } from "next/server";
import { getAuthedUsername } from "@/lib/api-auth";
import { redis } from "@/lib/redis";
import { awardStageInRedis } from "@/lib/server-progress";
import { isRateLimited } from "@/lib/rate-limit";
import { getClientIp } from "@/lib/client-ip";
import { getStage } from "@kryptos/core/stages";
import { canAccessStage } from "@/lib/access";
import {
  computeStageScore, computeBonusXp, updateSkillLevel,
  getWrongAttempts, trackWrongAttempt, getRecommendedNext,
} from "@/lib/difficulty";

// A Decision-Trainer attempt clears the stage when the learner makes at least
// PASS_RATIO of the spot decisions correctly — counted server-side, spoof-proof.
// Unlike the quiz, the attempt size is the scenario's own spot count (not a fixed
// number), so the bar is the whole hand sequence.
const PASS_RATIO = 0.7;
const ATTEMPT_TTL_S = 3600;

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null);
  if (
    !body ||
    typeof body.stageId !== "string" ||
    typeof body.spotId !== "string" ||
    typeof body.selectedText !== "string"
  ) {
    return NextResponse.json({ correct: false }, { status: 400 });
  }

  const username = await getAuthedUsername(req);

  // Throttle submissions (per user+stage, or per IP+stage if anon).
  const rlId = `${username ?? getClientIp(req)}:${body.stageId}`;
  if (await isRateLimited("scenario", rlId, 80, 600)) {
    return NextResponse.json({ correct: false, error: "Too many attempts. Slow down." }, { status: 429 });
  }

  if (!await canAccessStage(body.stageId, username)) {
    return NextResponse.json({ correct: false }, { status: 403 });
  }

  const stage = getStage(body.stageId);
  const scenario = stage?.scenario;
  if (!scenario || scenario.spots.length === 0) {
    return NextResponse.json({ correct: false }, { status: 404 });
  }

  const spot = scenario.spots.find((s) => s.id === body.spotId);
  if (!spot) {
    return NextResponse.json({ correct: false }, { status: 404 });
  }

  // Validate by option TEXT — options are shuffled client-side, so the correct
  // answer is never exposed by position.
  const correctText =
    spot.correctIndex != null ? spot.options[spot.correctIndex] : undefined;
  const correct = correctText != null && body.selectedText === correctText;

  if (!correct && username) {
    trackWrongAttempt(username, body.stageId).catch(() => {});
  }

  // ── Attempt scoring (server-side) — track DISTINCT spotIds answered correctly
  // this attempt in a Redis set, reset at the first spot. The stage clears on a
  // real pass rate over the scenario's own spots. ──
  const isFirst = body.isFirstSpot === true;
  const isLast = body.isFinalSpot === true;
  const attemptKey = username ? `scenatt:${username.toLowerCase()}:${body.stageId}` : null;

  if (attemptKey) {
    if (isFirst) await redis.del(attemptKey);
    if (correct) {
      await redis.sadd(attemptKey, spot.id);
      await redis.expire(attemptKey, ATTEMPT_TTL_S);
    }
  }

  if (isLast && username && attemptKey) {
    const attemptTotal = scenario.spots.length;
    const passNeeded = Math.ceil(attemptTotal * PASS_RATIO);
    const correctCount = await redis.scard(attemptKey);
    const passed = correctCount >= passNeeded;

    if (!passed) {
      return NextResponse.json({
        correct, explanation: spot.explanation ?? "",
        passed: false, correctCount, attemptTotal, passNeeded,
      });
    }

    await redis.del(attemptKey); // consume the attempt once it clears

    // The scenario is a FULL clear (it is the poker stage's "play the hand" path),
    // so passing awards the stage and its XP — mirrors the pure-quiz clear branch.
    const wrongAttempts = await getWrongAttempts(username, body.stageId);
    const stageScore = computeStageScore(0, 0, wrongAttempts);
    const bonusXp = computeBonusXp(stageScore, stage?.xp ?? 0);
    const progress = await awardStageInRedis(username, body.stageId, stage?.badge.id, 0, bonusXp);
    const skillLevel = await updateSkillLevel(username, stageScore);
    const recommendedNext = stage
      ? getRecommendedNext(stage.epochId, progress.completedStages, skillLevel)
      : null;

    return NextResponse.json({
      correct, explanation: spot.explanation ?? "",
      passed: true, progress, bonusXp, recommendedNext,
      correctCount, attemptTotal,
    });
  }

  return NextResponse.json({ correct, explanation: spot.explanation ?? "" });
}

import { NextRequest, NextResponse } from "next/server";
import { timingSafeEqual } from "crypto";
import { verifyAdminToken } from "@/lib/admin-token";
import { stages } from "@kryptos/core/stages";
import { getAuditStage } from "@kryptos/core/audit-registry";
import { stageFlags } from "@kryptos/core/stage-flags";
import { getAuthedUsername } from "@/lib/api-auth";
import { awardStageInRedis } from "@/lib/server-progress";
import { canAccessStage } from "@/lib/access";
import { redis } from "@/lib/redis";
import { isRateLimited } from "@/lib/rate-limit";
import { getClientIp } from "@/lib/client-ip";

function safeFlagEqual(a: string, b: string): boolean {
  const ab = Buffer.from(a);
  const bb = Buffer.from(b);
  return ab.length === bb.length && timingSafeEqual(ab, bb);
}
import {
  computeStageScore, computeBonusXp, updateSkillLevel,
  getHintsUsed, getWrongAttempts, trackWrongAttempt, getRecommendedNext,
} from "@/lib/difficulty";

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null);
  if (!body || typeof body.stageId !== "string" || typeof body.flag !== "string") {
    return NextResponse.json({ correct: false }, { status: 400 });
  }

  const correctFlag = stageFlags[body.stageId];
  if (!correctFlag) {
    return NextResponse.json({ correct: false }, { status: 404 });
  }

  // Audit-track modules live in a separate registry (off the public catalog).
  const stage = stages.find((s) => s.id === body.stageId) ?? getAuditStage(body.stageId);
  if (!stage) {
    return NextResponse.json({ correct: false }, { status: 404 });
  }

  const sessionUsername = await getAuthedUsername(req);
  const adminUsername = verifyAdminToken(req.cookies.get("admin_token")?.value ?? "");
  const isAdmin = adminUsername !== null;
  const username = sessionUsername ?? adminUsername;
  if (!isAdmin && !await canAccessStage(body.stageId, username)) {
    return NextResponse.json({ correct: false }, { status: 403 });
  }

  // Throttle flag-submission attempts (per user+stage, or per IP+stage if anon)
  // to prevent brute-forcing and timing harvesting.
  const rlId = `${username ?? getClientIp(req)}:${body.stageId}`;
  if (await isRateLimited("flag", rlId, 30, 600)) {
    return NextResponse.json({ correct: false, error: "Too many attempts. Slow down." }, { status: 429 });
  }

  const correct = safeFlagEqual(body.flag.trim(), correctFlag);
  if (!correct) {
    if (username) {
      trackWrongAttempt(username, stage.id).catch(() => {});
    }
    return NextResponse.json({ correct: false });
  }

  // Penalty: client sends timeTakenMs; server caps it to max 20% of base XP
  const timeTakenMs = typeof body.timeTakenMs === "number" ? body.timeTakenMs : 0;
  const freeMs = 10 * 60 * 1000;
  const penaltyMinutes = Math.max(0, Math.floor((timeTakenMs - freeMs) / 60000));
  const maxPenalty = Math.floor(stage.xp * 0.2);
  const timePenaltyXp = Math.min(penaltyMinutes, maxPenalty);

  // Award server-side if user is authenticated
  if (username) {
    const [hintsUsed, wrongAttempts] = await Promise.all([
      getHintsUsed(username, stage.id),
      getWrongAttempts(username, stage.id),
    ]);

    // Clean-solve bonus from SERVER-tracked signals only (hints + wrong attempts).
    // Client-supplied timeTakenMs is deliberately NOT used for scoring — a client
    // could claim an instant solve to inflate the bonus. A neutral 10-min value is
    // passed so the bonus reflects a hint-free, error-free solve, not a fast one.
    // (timeTakenMs still drives only the self-imposed time PENALTY below.)
    const NEUTRAL_TIME_MS = 10 * 60 * 1000;
    const stageScore = computeStageScore(NEUTRAL_TIME_MS, hintsUsed, wrongAttempts);
    const bonusXp = computeBonusXp(stageScore, stage.xp);

    const progress = await awardStageInRedis(username, stage.id, stage.badge.id, timePenaltyXp, bonusXp);

    const [skillLevel] = await Promise.all([
      updateSkillLevel(username, stageScore),
    ]);

    const recommendedNext = getRecommendedNext(stage.epochId, progress.completedStages, skillLevel);

    redis.lpush("admin:flag-log", JSON.stringify({ username, stageId: body.stageId, flagValue: correctFlag, ts: Date.now() }))
      .then(() => redis.ltrim("admin:flag-log", 0, 499))
      .catch(() => {});

    return NextResponse.json({ correct: true, progress, timePenaltyXp, bonusXp, recommendedNext });
  }

  return NextResponse.json({ correct: true, timePenaltyXp, bonusXp: 0, recommendedNext: null });
}

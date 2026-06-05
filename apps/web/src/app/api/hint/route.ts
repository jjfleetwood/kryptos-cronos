import { NextRequest, NextResponse } from "next/server";
import { getAuthedUsername } from "@/lib/api-auth";
import { trackHint, getSkillLevel, getHintsUsed, adaptiveCooldownSeconds } from "@/lib/difficulty";
import { getUserTier } from "@/lib/access";
import { isRateLimited } from "@/lib/rate-limit";
import { getClientIp } from "@/lib/client-ip";

// Free users get a limited number of ARIA hints per mission; Pro/trial get unlimited
// guidance plus the adaptive (shorter) cooldown. This monetization gate is dormant while
// OPEN_ACCESS makes everyone Pro (see access.ts) and activates when the paywall is
// restored at launch — exactly like the content gating.
const FREE_ARIA_PER_STAGE = 5;

export async function POST(req: NextRequest) {
  // ARIA calls the paid Claude API — require a signed-in user and rate-limit per
  // user (non-spoofable), with a per-IP backstop, to prevent cost abuse.
  const username = await getAuthedUsername(req);
  if (!username) {
    return NextResponse.json({ error: "Sign in to use ARIA." }, { status: 401 });
  }
  const ip = getClientIp(req);
  if (
    (await isRateLimited("hint:user", username, 30, 900)) ||
    (await isRateLimited("hint:ip", ip, 60, 900))
  ) {
    return NextResponse.json({ error: "Too many requests. Take a breather and try again." }, { status: 429 });
  }

  const body = await req.json().catch(() => null) as {
    message?: string;
    stageId?: string;
    stageTitle?: string;
    scenario?: string;
    hint?: string;
    chatbotContext?: string;
    keyTakeaways?: string[];
    tagline?: string;
  } | null;

  if (!body?.message || typeof body.message !== "string") {
    return NextResponse.json({ error: "message required" }, { status: 400 });
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "AI assistant not configured." }, { status: 503 });
  }

  // Tier gate: free users get a capped number of ARIA hints per mission; Pro/trial
  // get unlimited. The per-stage count is persistent (Redis), so it can't be reset by
  // refreshing the page — unlike the client-side session counter.
  const tier = await getUserTier(username);
  const isPro = tier === "pro" || tier === "trial";

  let usedThisStage = 0;
  if (!isPro && body.stageId) {
    usedThisStage = await getHintsUsed(username, body.stageId);
    if (usedThisStage >= FREE_ARIA_PER_STAGE) {
      return NextResponse.json(
        {
          error: `You've used all ${FREE_ARIA_PER_STAGE} free ARIA hints for this mission. Upgrade to Pro for unlimited guidance.`,
          upgrade: true,
        },
        { status: 402 }
      );
    }
  }

  const systemPrompt = [
    "You are ARIA — an AI cyber-intelligence assistant inside Kryptós CronOS, a gamified cybersecurity training platform.",
    "Your role is to guide trainees to discover answers themselves — never hand answers over directly.",
    "Use the Socratic method: respond with a probing question or a partial nudge that makes the trainee think. If they're close, confirm what's right and push further. If they're lost, reframe the concept as a question.",
    "Never reveal flag values, exact file paths to fragments, or command sequences that solve the challenge outright.",
    "Keep responses concise (2–4 sentences). Speak like a mission controller — calm, precise, mission-focused.",
    body.stageTitle ? `Current mission: "${body.stageTitle}".` : "",
    body.scenario ? `Mission briefing: ${body.scenario}` : "",
    body.tagline ? `Core concept for this mission: ${body.tagline}` : "",
    body.hint ? `Built-in hint (paraphrase — do not quote verbatim): ${body.hint}` : "",
    body.keyTakeaways?.length ? `Learning objectives the trainee should walk away with:\n${body.keyTakeaways.map((k) => `- ${k}`).join("\n")}` : "",
    body.chatbotContext ? `Additional mission context: ${body.chatbotContext}` : "",
  ].filter(Boolean).join("\n");

  const res = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "x-api-key": apiKey,
      "anthropic-version": "2023-06-01",
      "content-type": "application/json",
    },
    body: JSON.stringify({
      model: "claude-haiku-4-5-20251001",
      max_tokens: 300,
      system: systemPrompt,
      messages: [{ role: "user", content: body.message.slice(0, 500) }],
    }),
  });

  if (!res.ok) {
    return NextResponse.json({ error: "AI assistant temporarily unavailable." }, { status: 502 });
  }

  const data = await res.json() as { content: { type: string; text: string }[] };
  const reply = data.content?.find((c) => c.type === "text")?.text ?? "No response.";

  // Track hint usage; Pro/trial get the adaptive (often shorter) cooldown, free a fixed 30 s.
  let nextCooldownS = 30; // default for free users
  if (body.stageId) {
    if (isPro) {
      const skillLevel = await getSkillLevel(username);
      nextCooldownS = adaptiveCooldownSeconds(skillLevel);
    }
    await trackHint(username, body.stageId);
  }

  const hintsRemaining = isPro ? null : Math.max(0, FREE_ARIA_PER_STAGE - (usedThisStage + 1));

  return NextResponse.json({ reply, nextCooldownS, hintsRemaining, pro: isPro });
}

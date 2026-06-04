import { NextRequest, NextResponse } from "next/server";
import { createHmac, timingSafeEqual } from "crypto";
import { redis } from "@/lib/redis";
import { stages } from "@kryptos/core/stages";
import { stageFlags } from "@kryptos/core/stage-flags";
import { getAuthedUsername } from "@/lib/api-auth";
import { awardStageInRedis } from "@/lib/server-progress";

function extractAdminUsername(req: NextRequest): string | null {
  const secret = process.env.ADMIN_SECRET;
  const token = req.cookies.get("admin_token")?.value ?? "";
  if (!secret || !token) return null;
  const colonIdx = token.lastIndexOf(":");
  if (colonIdx === -1) return null;
  const user = token.slice(0, colonIdx);
  const sig = token.slice(colonIdx + 1);
  if (!user || !sig) return null;
  const expected = createHmac("sha256", secret).update(user).digest("hex");
  try {
    const a = Buffer.from(sig, "hex");
    const b = Buffer.from(expected, "hex");
    if (a.length !== b.length || !timingSafeEqual(a, b)) return null;
    return user;
  } catch { return null; }
}

export async function GET(req: NextRequest) {
  const username = await getAuthedUsername(req) ?? extractAdminUsername(req);
  if (!username) return NextResponse.json({ error: "unauthorized" }, { status: 401 });

  const lower = username.toLowerCase();
  const [data, streakData] = await Promise.all([
    redis.hgetall(`progress:${lower}`),
    redis.hgetall(`streak:${lower}`),
  ]);
  if (!data) return NextResponse.json(null);

  function parseArr(val: unknown): string[] {
    if (!val) return [];
    if (Array.isArray(val)) return val as string[];
    const s = String(val);
    try { const p = JSON.parse(s); return Array.isArray(p) ? p : []; } catch { return s.split(",").filter(Boolean); }
  }

  // Read `coins` field; fall back to legacy `xp` field for existing records
  const coins = Number(data.coins ?? data.xp ?? 0);
  return NextResponse.json({
    coins,
    coinsSpent: Number(data.coinsSpent ?? 0),
    completedStages: parseArr(data.stages),
    badges: parseArr(data.badges),
    streak: streakData ? Number(streakData.current ?? 0) : 0,
  });
}

export async function POST(req: NextRequest) {
  // Identity is taken from the verified token, never the body.
  const username = await getAuthedUsername(req);
  if (!username) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }

  const body = await req.json().catch(() => null);
  if (!body || typeof body.stageId !== "string") {
    return NextResponse.json({ error: "stageId required" }, { status: 400 });
  }

  const stage = stages.find((s) => s.id === body.stageId);
  if (!stage) {
    return NextResponse.json({ error: "unknown stage" }, { status: 400 });
  }

  // SECURITY: any stage with a server-side flag must be completed via
  // /api/check-flag, which verifies the submitted flag. Refusing them here
  // prevents a client from forging completion — and the XP, leaderboard rank,
  // badges, and certificate-readiness that flow from it — by simply naming a
  // stageId. (Only genuinely flag-less, command-solved stages reach the award.)
  if (stageFlags[body.stageId]) {
    return NextResponse.json(
      { error: "This stage is completed by submitting its flag." },
      { status: 403 }
    );
  }

  // Grant only the stage's own badge — never an arbitrary client-supplied id.
  const progress = await awardStageInRedis(username, stage.id, stage.badge?.id);
  return NextResponse.json({ ok: true, progress });
}

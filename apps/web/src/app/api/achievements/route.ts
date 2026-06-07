import { NextRequest, NextResponse } from "next/server";
import { redis } from "@/lib/redis";
import { getAuthedUsername } from "@/lib/api-auth";
import { deriveEconomy } from "@/lib/economy";
import { stages, epochs } from "@kryptos/core/stages";
import { computeAchievements } from "@kryptos/core/achievements";
import { divisionIndex } from "@kryptos/core/leagues";

function parseArr(val: unknown): string[] {
  if (!val) return [];
  if (Array.isArray(val)) return val as string[];
  const s = String(val);
  try { const p = JSON.parse(s); return Array.isArray(p) ? p : []; } catch { return s.split(",").filter(Boolean); }
}

// epochId → its stage ids (built once at module load).
const EPOCH_STAGE_IDS = new Map<string, string[]>();
for (const s of stages) {
  const arr = EPOCH_STAGE_IDS.get(s.epochId);
  if (arr) arr.push(s.id); else EPOCH_STAGE_IDS.set(s.epochId, [s.id]);
}

/** GET /api/achievements — every achievement with the caller's progress + earned flag. */
export async function GET(req: NextRequest) {
  const username = await getAuthedUsername(req);
  if (!username) return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  const lower = username.toLowerCase();

  const [prog, streak, league] = await Promise.all([
    redis.hgetall(`progress:${lower}`) as Promise<Record<string, unknown> | null>,
    redis.hgetall(`streak:${lower}`) as Promise<Record<string, unknown> | null>,
    redis.hgetall(`league:user:${lower}`) as Promise<Record<string, unknown> | null>,
  ]);

  const econ = deriveEconomy(prog);
  const completed = new Set(parseArr(prog?.stages));

  let epochs100 = 0;
  for (const e of epochs) {
    const ids = EPOCH_STAGE_IDS.get(e.id);
    if (ids && ids.length > 0 && ids.every((id) => completed.has(id))) epochs100++;
  }

  const stats = {
    stages: completed.size,
    xp: econ.xp,
    clean: Number(prog?.cleanSolves ?? 0),
    streak: Number(streak?.longest ?? 0),
    epochs100,
    division: divisionIndex(String(league?.division ?? "bronze")),
  };

  const achievements = computeAchievements(stats);
  return NextResponse.json({
    achievements,
    earnedCount: achievements.filter((a) => a.earned).length,
    total: achievements.length,
    stats,
  });
}

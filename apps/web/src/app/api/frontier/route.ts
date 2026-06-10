import { NextRequest, NextResponse } from "next/server";
import { redis } from "@/lib/redis";
import { getAuthedUsername } from "@/lib/api-auth";
import { stagesMeta as stages } from "@kryptos/core/stages-meta";

const STAGE = new Map(stages.map((s) => [s.id, s]));
function title(stageId: string): string {
  return STAGE.get(stageId)?.title ?? stageId;
}

/** GET /api/frontier — the First Bloods feed + (if authed) the caller's pioneer holdings.
 *  GET /api/frontier?stage=<id> — just that stage's pioneer + global clear count. */
export async function GET(req: NextRequest) {
  const stageParam = req.nextUrl.searchParams.get("stage");
  if (stageParam) {
    const [pioneer, clears] = await Promise.all([
      redis.get<string>(`stage:pioneer:${stageParam}`),
      redis.get<number>(`stage:clears:${stageParam}`),
    ]);
    return NextResponse.json({ stageId: stageParam, pioneer: pioneer ?? null, clears: Number(clears ?? 0) });
  }

  const username = await getAuthedUsername(req).catch(() => null);

  // ── First Bloods feed (public) ──
  const raw = (await redis.lrange<string>("frontier:feed", 0, 24)) ?? [];
  const feed = raw
    .map((s) => { try { return typeof s === "string" ? JSON.parse(s) : s; } catch { return null; } })
    .filter(Boolean)
    .map((e: { stageId: string; username: string; ts: number }) => ({
      stageId: e.stageId, stageTitle: title(e.stageId), username: e.username, ts: e.ts,
    }));

  // ── The caller's pioneer holdings ──
  let holdings: { stageId: string; stageTitle: string; clears: number; uncontested: boolean }[] = [];
  let pioneerCount = 0;
  let uncontestedCount = 0;
  if (username) {
    const lower = username.toLowerCase();
    const owned = ((await redis.smembers(`pioneer:${lower}`)) ?? []) as string[];
    pioneerCount = owned.length;
    if (owned.length) {
      const pipe = redis.pipeline();
      for (const id of owned) pipe.get(`stage:clears:${id}`);
      const counts = await pipe.exec();
      holdings = owned
        .map((id, i) => {
          const clears = Number(counts?.[i] ?? 0);
          return { stageId: id, stageTitle: title(id), clears, uncontested: clears <= 1 };
        })
        .sort((a, b) => Number(a.uncontested) - Number(b.uncontested) || a.clears - b.clears || a.stageTitle.localeCompare(b.stageTitle));
      uncontestedCount = holdings.filter((h) => h.uncontested).length;
    }
  }

  return NextResponse.json({ feed, holdings, pioneerCount, uncontestedCount });
}

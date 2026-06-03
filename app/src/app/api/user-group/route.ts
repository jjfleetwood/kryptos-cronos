import { NextRequest, NextResponse } from "next/server";
import { redis } from "@/lib/redis";
import { getAuthedUsername } from "@/lib/api-auth";

const VALID_GROUPS = new Set(["elementary", "junior-hs", "high-school", "university", "career", "curious"]);
const DEFAULT_GROUPS = ["career", "curious"];

function parseGroups(val: unknown): string[] {
  if (!val) return [];
  try { const p = JSON.parse(val as string); return Array.isArray(p) ? p : []; } catch { return []; }
}

export async function GET(req: NextRequest) {
  const username = await getAuthedUsername(req);
  if (!username) return NextResponse.json({ groups: DEFAULT_GROUPS });

  const raw = await redis.hget(`user:${username.toLowerCase()}`, "userGroups");
  const groups = parseGroups(raw).filter((g) => VALID_GROUPS.has(g));
  return NextResponse.json({ groups: groups.length > 0 ? groups : DEFAULT_GROUPS });
}

export async function POST(req: NextRequest) {
  const username = await getAuthedUsername(req);
  if (!username) return NextResponse.json({ ok: false }, { status: 401 });

  const body = await req.json().catch(() => null);
  const groups: unknown = body?.groups;
  if (!Array.isArray(groups) || groups.length === 0 || !groups.every((g) => VALID_GROUPS.has(g as string))) {
    return NextResponse.json({ error: "invalid groups" }, { status: 400 });
  }

  await redis.hset(`user:${username.toLowerCase()}`, { userGroups: JSON.stringify(groups) });
  return NextResponse.json({ ok: true });
}

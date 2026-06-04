import { NextRequest, NextResponse } from "next/server";
import { randomBytes } from "crypto";
import { redis } from "@/lib/redis";
import { logAdminAction } from "@/lib/audit";
import { requireAdmin } from "@/lib/admin-auth";

function randomSegment() {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789"; // no 0/O/1/I confusion
  const bytes = randomBytes(4);
  let s = "";
  for (let i = 0; i < 4; i++) s += chars[bytes[i] % chars.length];
  return s;
}

function generateCode() {
  return `KRYPTOS-${randomSegment()}-${randomSegment()}`;
}

export async function GET(req: NextRequest) {
  if (!(await requireAdmin(req))) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const keys = await redis.zrange("voucher:index", 0, -1, { rev: true });
  if (!keys.length) return NextResponse.json([]);

  const vouchers = await Promise.all(
    keys.map(async (key) => {
      const data = await redis.hgetall(key as string);
      if (!data) return null;
      const uses = data.uses ? JSON.parse(data.uses as string) : [];
      return {
        code: (key as string).replace("voucher:", ""),
        durationDays: Number(data.durationDays ?? 30),
        usesLimit: Number(data.usesLimit ?? 1),
        usesLeft: Number(data.usesLeft ?? 0),
        createdAt: Number(data.createdAt ?? 0),
        createdBy: data.createdBy ?? "",
        uses,
      };
    })
  );

  return NextResponse.json(vouchers.filter(Boolean));
}

export async function POST(req: NextRequest) {
  const admin = await requireAdmin(req);
  if (!admin) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const body = await req.json() as { count?: number; usesLimit?: number; durationDays?: number };
  const count = Math.min(Number(body.count ?? 1), 50);
  const usesLimit = Math.min(Math.max(Number(body.usesLimit ?? 1), 1), 1000);
  const durationDays = [30, 60, 90, 365].includes(Number(body.durationDays)) ? Number(body.durationDays) : 30;

  const codes: string[] = [];
  const now = Date.now();

  const createdBy = admin;

  for (let i = 0; i < count; i++) {
    let code: string;
    do { code = generateCode(); } while (await redis.exists(`voucher:${code}`));

    await redis.hset(`voucher:${code}`, {
      durationDays: String(durationDays),
      usesLimit: String(usesLimit),
      usesLeft: String(usesLimit),
      createdAt: String(now),
      createdBy,
      uses: "[]",
    });
    await redis.zadd("voucher:index", { score: now, member: `voucher:${code}` });
    codes.push(code);
  }

  logAdminAction(createdBy, "create-vouchers", `count:${count} dur:${durationDays}d uses:${usesLimit}`).catch(() => {});
  return NextResponse.json({ codes });
}

// Revoke a voucher by zeroing usesLeft
export async function PATCH(req: NextRequest) {
  const admin = await requireAdmin(req);
  if (!admin) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const body = await req.json() as { code?: string };
  const code = body.code?.trim().toUpperCase();
  if (!code) return NextResponse.json({ error: "code required" }, { status: 400 });

  const key = `voucher:${code}`;
  const exists = await redis.exists(key);
  if (!exists) return NextResponse.json({ error: "Voucher not found" }, { status: 404 });

  await redis.hset(key, { usesLeft: "0" });
  logAdminAction(admin, "revoke-voucher", code).catch(() => {});
  return NextResponse.json({ ok: true });
}

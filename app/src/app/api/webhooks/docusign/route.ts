import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";
import { redis } from "@/lib/redis";

type DocuSignPayload = Record<string, unknown>;

function verifyHmac(body: string, header: string, secret: string): boolean {
  const expected = crypto.createHmac("sha256", secret).update(body).digest("base64");
  try {
    return crypto.timingSafeEqual(Buffer.from(header), Buffer.from(expected));
  } catch {
    return false;
  }
}

export async function POST(req: NextRequest) {
  const body = await req.text();

  const webhookSecret = process.env.DOCUSIGN_WEBHOOK_SECRET;
  if (webhookSecret) {
    const sig = req.headers.get("x-docusign-signature-1") ?? "";
    if (!sig || !verifyHmac(body, sig, webhookSecret)) {
      return NextResponse.json({ error: "Invalid signature" }, { status: 401 });
    }
  }

  let event: DocuSignPayload;
  try {
    event = JSON.parse(body) as DocuSignPayload;
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  // Handle both per-envelope notification and Connect webhook formats
  const envelopeId =
    (event.envelopeId as string | undefined) ??
    ((event.data as DocuSignPayload | undefined)?.envelopeId as string | undefined) ??
    "";
  const status =
    (event.status as string | undefined) ??
    ((event.data as DocuSignPayload | undefined)?.envelopeSummary as DocuSignPayload | undefined)?.status as string | undefined ??
    "";

  if (!envelopeId || !status) {
    return NextResponse.json({ ok: true });
  }

  if (status === "completed" || status === "declined" || status === "voided") {
    // Scan Redis for the record with this envelopeId
    let cursor = 0;
    do {
      const [nextCursor, keys] = await redis.scan(cursor, { match: "nda:*", count: 100 });
      cursor = Number(nextCursor);
      for (const key of keys) {
        const record = await redis.hgetall(key) as Record<string, string> | null;
        if (record?.envelopeId === envelopeId) {
          const update: Record<string, string> = { status };
          if (status === "completed") update.signedAt = Date.now().toString();
          await redis.hset(key, update);
          return NextResponse.json({ ok: true });
        }
      }
    } while (cursor !== 0);
  }

  return NextResponse.json({ ok: true });
}

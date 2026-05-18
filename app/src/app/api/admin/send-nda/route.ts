import { NextRequest, NextResponse } from "next/server";
import { createHmac, timingSafeEqual } from "crypto";
import { redis } from "@/lib/redis";
import { sendNdaEnvelope } from "@/lib/docusign";

function verifyAdminToken(token: string): boolean {
  const secret = process.env.ADMIN_SECRET;
  if (!secret) return false;
  const colonIdx = token.lastIndexOf(":");
  if (colonIdx === -1) return false;
  const username = token.slice(0, colonIdx);
  const sig = token.slice(colonIdx + 1);
  const expected = createHmac("sha256", secret).update(username).digest("hex");
  try {
    const a = Buffer.from(sig, "hex");
    const b = Buffer.from(expected, "hex");
    return a.length === b.length && timingSafeEqual(a, b);
  } catch {
    return false;
  }
}

function escapeHtml(s: string): string {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

export async function POST(req: NextRequest) {
  const adminToken = req.cookies.get("admin_token")?.value;
  if (!adminToken || !verifyAdminToken(adminToken)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await req.json().catch(() => null) as { name?: string; email?: string } | null;
  const name = body?.name?.trim() ?? "";
  const email = body?.email?.trim().toLowerCase() ?? "";

  if (!name || name.length < 2) {
    return NextResponse.json({ error: "Full name is required." }, { status: 400 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "A valid email address is required." }, { status: 400 });
  }

  let envelopeId: string;
  try {
    envelopeId = await sendNdaEnvelope(name, email);
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    console.error("DocuSign send-nda error:", msg);
    if (msg.includes("not configured")) {
      return NextResponse.json({ error: "DocuSign is not configured. Add DOCUSIGN_* env vars in Vercel." }, { status: 503 });
    }
    return NextResponse.json({ error: "Failed to send NDA via DocuSign." }, { status: 503 });
  }

  await redis.hset(`nda:${email}`, {
    name: escapeHtml(name),
    email,
    sentAt: Date.now().toString(),
    envelopeId,
    method: "docusign",
    status: "sent",
  });

  return NextResponse.json({ success: true, envelopeId });
}

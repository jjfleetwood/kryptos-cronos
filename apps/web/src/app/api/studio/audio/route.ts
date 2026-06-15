import { NextRequest, NextResponse } from "next/server";
import { getAuthedUsername } from "@/lib/api-auth";
import { verifyAdminToken } from "@/lib/admin-token";
import { getUserTier } from "@/lib/access";
import { isValidStudioShare } from "@/lib/studio-share";
import fs from "fs";
import path from "path";
import { Readable } from "stream";

// GET /api/studio/audio — streams the Siempre Segundo audiobook MP3 to Pro users
// (and admins). The file lives in secured-docs/ (never public/), so it stays
// gated. Supports HTTP Range so a car/phone player can scrub and resume.
// HEAD is supported so the prose page can detect whether audio exists yet.
export async function GET(req: NextRequest) {
  const gate = await guard(req);
  if (gate) return gate;

  const filePath = path.join(process.cwd(), "secured-docs", "siempre-segundo.mp3");
  let size: number;
  try {
    size = fs.statSync(filePath).size;
  } catch {
    return NextResponse.json({ error: "not-generated" }, { status: 404 });
  }

  const range = req.headers.get("range");
  const baseHeaders: Record<string, string> = {
    "Content-Type": "audio/mpeg",
    "Accept-Ranges": "bytes",
    "Cache-Control": "private, no-store",
  };

  if (range) {
    const m = /bytes=(\d*)-(\d*)/.exec(range);
    const start = m && m[1] ? parseInt(m[1], 10) : 0;
    const end = m && m[2] ? parseInt(m[2], 10) : size - 1;
    if (isNaN(start) || isNaN(end) || start > end || end >= size) {
      return new NextResponse(null, { status: 416, headers: { "Content-Range": `bytes */${size}` } });
    }
    const stream = Readable.toWeb(fs.createReadStream(filePath, { start, end })) as ReadableStream;
    return new NextResponse(stream, {
      status: 206,
      headers: { ...baseHeaders, "Content-Range": `bytes ${start}-${end}/${size}`, "Content-Length": String(end - start + 1) },
    });
  }

  const stream = Readable.toWeb(fs.createReadStream(filePath)) as ReadableStream;
  return new NextResponse(stream, { status: 200, headers: { ...baseHeaders, "Content-Length": String(size) } });
}

export async function HEAD(req: NextRequest) {
  const gate = await guard(req);
  if (gate) return gate;
  const filePath = path.join(process.cwd(), "secured-docs", "siempre-segundo.mp3");
  try {
    const size = fs.statSync(filePath).size;
    return new NextResponse(null, { status: 200, headers: { "Accept-Ranges": "bytes", "Content-Length": String(size), "Content-Type": "audio/mpeg" } });
  } catch {
    return new NextResponse(null, { status: 404 });
  }
}

// Pro/admin gate, shared by GET and HEAD. Returns a NextResponse to short-circuit
// on failure, or null when access is granted.
async function guard(req: NextRequest): Promise<NextResponse | null> {
  if (isValidStudioShare(req.nextUrl.searchParams.get("s"))) return null;
  const admin = verifyAdminToken(req.cookies.get("admin_token")?.value ?? "");
  const username = (await getAuthedUsername(req)) ?? admin;
  if (!username) return NextResponse.json({ error: "signin" }, { status: 401 });
  if (!admin) {
    const tier = await getUserTier(username);
    if (tier !== "pro") return NextResponse.json({ error: "pro" }, { status: 403 });
  }
  return null;
}

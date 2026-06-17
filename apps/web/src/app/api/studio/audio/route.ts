import { NextRequest, NextResponse } from "next/server";
import { getAuthedUsername } from "@/lib/api-auth";
import { verifyAdminToken } from "@/lib/admin-token";
import { getUserTier } from "@/lib/access";
import { isValidStudioShare } from "@/lib/studio-share";
import fs from "fs";
import path from "path";
import { Readable } from "stream";

// GET /api/studio/audio — gives Pro users, admins, or share-link holders the
// Siempre Segundo audiobook. The MP3 lives in Vercel Blob (recorded in
// secured-docs/siempre-segundo.audio.txt); this route gates *discovery* of it and
// 302-redirects to the Blob URL (scales without proxying ~130 MB per listener).
// Dev fallback: if a local secured-docs/siempre-segundo.mp3 exists instead, it's
// streamed with HTTP Range support. HEAD reports whether audio exists yet.
const URL_FILE = path.join(process.cwd(), "secured-docs", "siempre-segundo.audio.txt");
const MANIFEST_FILE = path.join(process.cwd(), "secured-docs", "siempre-segundo.audio.json");
const LOCAL_MP3 = path.join(process.cwd(), "secured-docs", "siempre-segundo.mp3");

function blobUrl(): string | null {
  try {
    const u = fs.readFileSync(URL_FILE, "utf-8").trim();
    return u.startsWith("http") ? u : null;
  } catch {
    return null;
  }
}

type Manifest = { generatedAt: string | null; chapters: { i: number; title: string; url: string }[]; full?: { url: string; bytes?: number }; m4b?: { url: string; bytes?: number } };
function manifest(): Manifest | null {
  try {
    const m = JSON.parse(fs.readFileSync(MANIFEST_FILE, "utf-8")) as Manifest;
    return Array.isArray(m.chapters) && m.chapters.length ? m : null;
  } catch {
    return null;
  }
}

export async function GET(req: NextRequest) {
  const gate = await guard(req);
  if (gate) return gate;

  // ?manifest=1 → the chaptered audiobook: a list of {i, title, url} pointing at
  // per-chapter (unguessable, public) Blob MP3s. The player renders a chapter list
  // and plays each directly, auto-advancing.
  if (req.nextUrl.searchParams.get("manifest") === "1") {
    const m = manifest();
    return m ? NextResponse.json(m) : NextResponse.json({ error: "not-generated" }, { status: 404 });
  }

  const url = blobUrl();
  // ?meta=1 → return the Blob URL as JSON so the player can point its <audio>
  // element straight at the (unguessable, public) Blob, instead of streaming
  // through a 302 redirect — which media elements handle unreliably for large,
  // range-seeked files, especially on mobile.
  if (req.nextUrl.searchParams.get("meta") === "1") {
    if (url) return NextResponse.json({ url });
    try { fs.statSync(LOCAL_MP3); return NextResponse.json({ url: null, local: true }); }
    catch { return NextResponse.json({ error: "not-generated" }, { status: 404 }); }
  }
  if (url) return NextResponse.redirect(url, 302);

  // Dev fallback: stream a local MP3 with Range support.
  let size: number;
  try {
    size = fs.statSync(LOCAL_MP3).size;
  } catch {
    return NextResponse.json({ error: "not-generated" }, { status: 404 });
  }
  const baseHeaders: Record<string, string> = {
    "Content-Type": "audio/mpeg",
    "Accept-Ranges": "bytes",
    "Cache-Control": "private, no-store",
  };
  const range = req.headers.get("range");
  if (range) {
    const m = /bytes=(\d*)-(\d*)/.exec(range);
    const start = m && m[1] ? parseInt(m[1], 10) : 0;
    const end = m && m[2] ? parseInt(m[2], 10) : size - 1;
    if (isNaN(start) || isNaN(end) || start > end || end >= size) {
      return new NextResponse(null, { status: 416, headers: { "Content-Range": `bytes */${size}` } });
    }
    const stream = Readable.toWeb(fs.createReadStream(LOCAL_MP3, { start, end })) as ReadableStream;
    return new NextResponse(stream, {
      status: 206,
      headers: { ...baseHeaders, "Content-Range": `bytes ${start}-${end}/${size}`, "Content-Length": String(end - start + 1) },
    });
  }
  const stream = Readable.toWeb(fs.createReadStream(LOCAL_MP3)) as ReadableStream;
  return new NextResponse(stream, { status: 200, headers: { ...baseHeaders, "Content-Length": String(size) } });
}

export async function HEAD(req: NextRequest) {
  const gate = await guard(req);
  if (gate) return gate;
  if (manifest() || blobUrl()) return new NextResponse(null, { status: 200, headers: { "Content-Type": "audio/mpeg" } });
  try {
    const size = fs.statSync(LOCAL_MP3).size;
    return new NextResponse(null, { status: 200, headers: { "Accept-Ranges": "bytes", "Content-Length": String(size), "Content-Type": "audio/mpeg" } });
  } catch {
    return new NextResponse(null, { status: 404 });
  }
}

// Pro/admin/share gate, shared by GET and HEAD. Returns a NextResponse to
// short-circuit on failure, or null when access is granted.
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

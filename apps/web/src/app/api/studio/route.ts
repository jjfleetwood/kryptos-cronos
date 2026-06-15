import { NextRequest, NextResponse } from "next/server";
import { getAuthedUsername } from "@/lib/api-auth";
import { verifyAdminToken } from "@/lib/admin-token";
import { getUserTier } from "@/lib/access";
import fs from "fs";
import path from "path";

// GET /api/studio — serves the "Siempre Segundo" manuscript to Pro users (and
// admins). Not public: free/anonymous callers get 401/403 so the prose never
// leaves the server for non-Pro users. The /studio page renders what this returns.
export async function GET(req: NextRequest) {
  const admin = verifyAdminToken(req.cookies.get("admin_token")?.value ?? "");
  const username = (await getAuthedUsername(req)) ?? admin;

  if (!username) {
    return NextResponse.json({ error: "signin" }, { status: 401 });
  }
  // Admins always have access; everyone else must be Pro. (In dev OPEN_ACCESS,
  // getUserTier returns "pro" for any signed-in user; at launch this narrows to
  // genuine Pro subscribers.)
  if (!admin) {
    const tier = await getUserTier(username);
    if (tier !== "pro") {
      return NextResponse.json({ error: "pro" }, { status: 403 });
    }
  }

  try {
    const filePath = path.join(process.cwd(), "secured-docs", "SIEMPRE_SEGUNDO.md");
    const content = fs.readFileSync(filePath, "utf-8");
    // ?prose=1 → only the novelized chapters (Prologue → Epilogue), stripping the
    // blurb/thesis/cast/structure/Frame/screenplay scaffolding and the Notes tail.
    // This is the clean continuous-narration text for read-aloud / car listening.
    const proseOnly = req.nextUrl.searchParams.get("prose") === "1";
    const body = proseOnly ? extractProse(content) : content;
    return new NextResponse(body, {
      headers: { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "no-store" },
    });
  } catch {
    return NextResponse.json({ error: "not found" }, { status: 404 });
  }
}

// Slice from the first novelized section heading through the end of the Epilogue
// (i.e. up to but not including the "## Notes & to-do" tail).
function extractProse(content: string): string {
  const start = content.indexOf("## _Siempre Segundo_ — Prologue");
  if (start === -1) return content;
  const tail = content.indexOf("## Notes & to-do", start);
  const slice = tail === -1 ? content.slice(start) : content.slice(start, tail);
  return slice.trimEnd() + "\n";
}

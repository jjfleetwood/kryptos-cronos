import { NextRequest, NextResponse } from "next/server";
import { getAuthedUsername } from "@/lib/api-auth";
import { verifyAdminToken } from "@/lib/admin-token";
import { getUserTier } from "@/lib/access";
import { isValidStudioShare } from "@/lib/studio-share";
import fs from "fs";
import path from "path";

// GET /api/studio — serves the "Siempre Segundo" manuscript set to Pro users
// (and admins), or to anyone holding the secret ?s=<share-token> link. Not
// public: free/anonymous callers without the link get 401/403 so the text never
// leaves the server for non-Pro users. The /studio pages render what this returns.
//
//   ?doc=novel            (default) — the full manuscript / novel
//   ?doc=screenplay       — the literary screenplay (the "read")
//   ?doc=screenplay-sell  — the lean/sell spec screenplay
//   ?prose=1              — novel only: just the novelized chapters (clean read)
//   ?check=1              — gate-only probe: 200 {ok:true} (no body) when allowed
//
// `doc` is matched against a fixed allowlist — user input never touches the path.
const DOCS: Record<string, { file: string; from?: string }> = {
  novel: { file: "SIEMPRE_SEGUNDO.md" },
  // Strip the working-notes scaffolding ("Approach" / sequence map) — serve the
  // screenplay from the Cold Open through the Coda.
  screenplay: { file: "SIEMPRE_SEGUNDO_SCREENPLAY.md", from: "## COLD OPEN" },
  "screenplay-sell": { file: "SIEMPRE_SEGUNDO_SCREENPLAY_SELL.md" },
};

export async function GET(req: NextRequest) {
  const gate = await guard(req);
  if (gate) return gate;

  if (req.nextUrl.searchParams.get("check") === "1") {
    return NextResponse.json({ ok: true });
  }

  const docKey = req.nextUrl.searchParams.get("doc") ?? "novel";
  const doc = DOCS[docKey] ?? DOCS.novel;

  try {
    const filePath = path.join(process.cwd(), "secured-docs", doc.file);
    const content = fs.readFileSync(filePath, "utf-8");

    let body = content;
    if (docKey === "novel" && req.nextUrl.searchParams.get("prose") === "1") {
      // ?prose=1 → only the novelized chapters (Prologue → Epilogue), stripping
      // the blurb/thesis/cast/structure scaffolding and the Notes tail. This is
      // the clean continuous-narration text for read-aloud / car listening.
      body = extractProse(content);
    } else if (doc.from) {
      const start = content.indexOf(doc.from);
      if (start !== -1) body = content.slice(start);
    }

    return new NextResponse(body, {
      headers: { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "no-store" },
    });
  } catch {
    return NextResponse.json({ error: "not found" }, { status: 404 });
  }
}

// Returns an error response if the caller may not read the manuscript, else null.
async function guard(req: NextRequest): Promise<NextResponse | null> {
  const shared = isValidStudioShare(req.nextUrl.searchParams.get("s"));
  if (shared) return null;

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
  return null;
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

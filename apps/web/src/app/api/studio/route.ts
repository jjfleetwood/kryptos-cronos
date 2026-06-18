import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

// GET /api/studio — serves the "Siempre Segundo" manuscript set. The text is
// PUBLIC (anyone can read it); the /studio route is simply hidden from the nav,
// so it's reachable only by people who have the direct link. The /studio pages
// render what this returns.
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
  // Serve each screenplay from its Title Page onward — which carries the
  // copyright — through the Coda. Slicing from "## Title Page" also strips the
  // working-notes scaffolding (the file H1/synopsis + "Approach"/sequence map)
  // that sits above it in the literary draft.
  screenplay: { file: "SIEMPRE_SEGUNDO_SCREENPLAY.md", from: "## Title Page" },
  "screenplay-sell": { file: "SIEMPRE_SEGUNDO_SCREENPLAY_SELL.md", from: "## Title Page" },
};

export async function GET(req: NextRequest) {
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

// Slice from the first novelized section heading through the end of the Epilogue
// (i.e. up to but not including the "## Notes & to-do" tail).
function extractProse(content: string): string {
  const start = content.indexOf("## _Siempre Segundo_ — Prologue");
  if (start === -1) return content;
  const tail = content.indexOf("## Notes & to-do", start);
  const slice = tail === -1 ? content.slice(start) : content.slice(start, tail);
  return slice.trimEnd() + "\n";
}

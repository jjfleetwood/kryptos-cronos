import fs from "fs";
import path from "path";
import { NextResponse } from "next/server";
import { buildGuideDeck } from "@/lib/guide-deck";

// Owner-only by virtue of the edge gate in src/proxy.ts (the whole app is gated).
// Builds a .pptx from the Agent Risk Audit field-guide markdown.
export async function POST() {
  let md: string;
  try {
    md = fs.readFileSync(path.join(process.cwd(), "content", "AGENT_RISK_AUDIT_GUIDE.md"), "utf-8");
  } catch {
    return NextResponse.json({ error: "guide unavailable" }, { status: 404 });
  }
  const bytes = await buildGuideDeck(md, {
    title: "Agent Risk Audit — Field Guide",
    subtitle: "Auditing Agentic-AI Systems",
    accent: "06B6D4",
    emoji: "🛡️",
  });
  return new NextResponse(bytes as unknown as BodyInit, {
    headers: {
      "Content-Type": "application/vnd.openxmlformats-officedocument.presentationml.presentation",
      "Content-Disposition": 'attachment; filename="agent-risk-audit-guide.pptx"',
      "Cache-Control": "no-store",
    },
  });
}

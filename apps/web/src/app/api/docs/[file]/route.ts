import { NextRequest, NextResponse } from "next/server";
import { requireAdmin } from "@/lib/admin-auth";
import fs from "fs";
import path from "path";

const ALLOWED_FILES = new Set([
  "README.md",
  "AGENT_RISK_AUDIT_GUIDE.md",
  "SECURITY_BRIEFING.md",
  "TECHNICAL_ARCHITECTURE.md",
  "ARCHITECTURE.md",
  "RELEASE_NOTES.md",
  "BUILD.md",
  "OPS.md",
  "CURRICULUM.md",
  "PARTNERS.md",
  "BUSINESS_PROPOSAL_PRO.md",
  "BUSINESS_PROPOSAL_CASUAL.md",
  "PITCH_TARGETS.md",
  "LAUNCH_LEGAL.md",
  "PITCH_CAE_CONTINUOUS_MONITORING.md",
  "TODO.md",
  "COPYRIGHT_FILING.md",
  "VC_READINESS_ANALYSIS.md",
  "FINANCIALS.md",
  "MOBILE_ROADMAP.md",
  "AGENT_DEV_PLAN.md",
  "AGENTS_OVERVIEW.md",
  // Architecture suite (v1.0.0, added 2026-05-26)
  "DATA_DIAGRAM.md",
  "TECH_BOM.md",
  "BIZ_REQUIREMENTS.md",
  "TECHNICAL_DESIGN.md",
  "USER_ACCEPTANCE_CRITERIA.md",
  "TECH_SPECIFICATIONS.md",
  "TESTING_STRATEGY.md",
  "CICD_PIPELINE.md",
  "API_REFERENCE.md",
  "ADR.md",
  "HOURS_LOG.md",
  // Studio — creative manuscript (admin-only)
  "SIEMPRE_SEGUNDO.md",
]);

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ file: string }> }
) {
  if (!(await requireAdmin(req))) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { file } = await params;
  if (!ALLOWED_FILES.has(file)) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  try {
    const filePath = path.join(process.cwd(), "secured-docs", file);
    const content = fs.readFileSync(filePath, "utf-8");
    return new NextResponse(content, {
      headers: { "Content-Type": "text/plain; charset=utf-8" },
    });
  } catch {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }
}

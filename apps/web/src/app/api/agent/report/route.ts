import { NextRequest, NextResponse } from "next/server";
import { listItems, createItem, putItem, newItem } from "@/lib/scrum";
import type { ScrumItem, ScrumType, ScrumPriority } from "@/lib/scrum-types";

// Agent reporting endpoint — how the Phase-1 Deep Testing Agent (and future
// agents) file findings to the Development board. Gated by an agent token (NOT
// the admin cookie — least privilege) and a global kill switch. It can only
// create source:"agent" cards and reconcile its own test cards; it cannot read,
// edit, or delete human/manual items.

type Finding = {
  stageId: string; epochId?: string; checkId: string;
  severity: "high" | "medium" | "low"; title: string; detail?: string;
};

const SEV: Record<string, { type: ScrumType; priority: ScrumPriority }> = {
  high:   { type: "bug",  priority: "p1" },
  medium: { type: "test", priority: "p2" },
  low:    { type: "test", priority: "p3" },
};

export async function POST(req: NextRequest) {
  // Kill switch — agents do nothing unless explicitly enabled.
  if (process.env.AGENTS_ENABLED !== "true") {
    return NextResponse.json({ error: "Agents disabled" }, { status: 503 });
  }
  const token = req.headers.get("authorization")?.replace(/^Bearer\s+/i, "");
  const expected = process.env.AGENT_REPORT_TOKEN;
  if (!expected || token !== expected) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await req.json().catch(() => null);
  if (!body || !Array.isArray(body.findings)) {
    return NextResponse.json({ error: "findings[] required" }, { status: 400 });
  }
  const agent = (typeof body.agent === "string" ? body.agent : "tester").slice(0, 40);
  const findings: Finding[] = body.findings.filter(
    (f: Finding) => f && f.stageId && f.checkId && f.title && f.severity !== "low",
  );

  // Map existing OPEN agent-test cards by their finding key (stored in sourceRef).
  const all = await listItems();
  const open = new Map<string, ScrumItem>();
  for (const it of all) {
    if (it.source === "agent" && it.sourceRef?.startsWith("test:") && it.status !== "archived" && it.status !== "done") {
      open.set(it.sourceRef, it);
    }
  }

  const seen = new Set<string>();
  let created = 0, updated = 0;
  for (const f of findings) {
    const key = `test:${f.stageId}:${f.checkId}`;
    if (seen.has(key)) continue;
    seen.add(key);
    const sev = SEV[f.severity] ?? SEV.medium;
    const desc = `${f.detail ?? ""}\n\nstage: ${f.stageId}${f.epochId ? ` (${f.epochId})` : ""} · check: ${f.checkId} · severity: ${f.severity}`;
    const existing = open.get(key);
    if (existing) {
      existing.title = f.title.slice(0, 200);
      existing.description = desc;
      existing.updatedAt = Date.now();
      await putItem(existing);
      updated++;
    } else {
      await createItem({
        title: f.title.slice(0, 200), description: desc,
        type: sev.type, priority: sev.priority, status: "triage",
        source: "agent", initiator: `agent:${agent}`, sourceRef: key,
      });
      created++;
    }
  }

  // Auto-resolve open findings that are no longer detected.
  let resolved = 0;
  for (const [key, it] of open) {
    if (!seen.has(key)) {
      it.status = "done";
      it.notes = [...(it.notes ?? []), { ts: Date.now(), author: `agent:${agent}`, text: "✓ Auto-resolved — no longer detected in the latest sweep." }];
      it.updatedAt = Date.now();
      await putItem(it);
      resolved++;
    }
  }

  // Upsert the single sweep-summary heartbeat card.
  const s = body.summary ?? {};
  const lowStr = Object.entries(s.low ?? {}).map(([k, v]) => `${k}: ${v}`).join(" · ") || "none";
  await putItem(newItem({
    id: "agent-test-sweep",
    title: `🧪 Test sweep — ${new Date().toISOString().slice(0, 16).replace("T", " ")}Z · ${s.quizzes ?? "?"} quizzes / ${s.ctfs ?? "?"} CTFs · ${findings.length} open finding(s)`,
    description: `Latest deep test sweep by agent:${agent}.\n- Quiz stages checked: ${s.quizzes ?? "?"}\n- CTF stages checked: ${s.ctfs ?? "?"}\n- Open high/medium findings: ${findings.length} (new ${created}, updated ${updated}, auto-resolved ${resolved})\n- Low-severity (aggregated, not carded): ${lowStr}`,
    type: "test", priority: findings.length ? "p2" : "p3", status: "review",
    source: "agent", initiator: `agent:${agent}`, sourceRef: "test:sweep:summary",
    order: -8.6e15, // just under the pinned plan card, top of Review
  }));

  return NextResponse.json({ ok: true, created, updated, resolved, open: findings.length });
}

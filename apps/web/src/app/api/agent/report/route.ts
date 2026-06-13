import { NextRequest, NextResponse } from "next/server";
import { listItems, createItem, putItem, newItem } from "@/lib/scrum";
import type { ScrumItem, ScrumType, ScrumPriority } from "@/lib/scrum-types";
import { redis } from "@/lib/redis";

// Agent reporting endpoint — how report-only dev agents (testing, content, code-
// health, format, …) file findings to the Development board. Gated by an agent
// token (NOT the admin cookie — least privilege) and a global kill switch. Each
// agent manages only its OWN cards: dedup, auto-resolve, and the sweep-summary
// are scoped by `initiator = agent:<name>`, so agents never touch each other's
// (or any human's) items.

type Finding = {
  ref?: string; stageId?: string;     // identifier (stage id or file path)
  epochId?: string; checkId: string;
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
  const agent = (typeof body.agent === "string" ? body.agent : "tester").replace(/[^a-z0-9_-]/gi, "").slice(0, 40) || "agent";
  const initiator = `agent:${agent}`;
  const keyPrefix = `${agent}:`;
  const summaryRef = `${agent}:sweep:summary`;
  const findings: Finding[] = body.findings.filter(
    (f: Finding) => f && (f.ref || f.stageId) && f.checkId && f.title && f.severity !== "low",
  );

  // Map THIS agent's existing finding cards by their finding key (sourceRef),
  // across ALL statuses. Deduping only on OPEN cards is what made the board
  // balloon: a finding triaged to done/archived was invisible next sweep, so a
  // duplicate card was created. Now one finding key → one card, forever:
  //   • archived  → human dismissed it; never re-card (respect the decision).
  //   • done      → still detected ⇒ re-open (it regressed / the fix didn't take).
  //   • open      → update in place.
  // `open` is the subset eligible for auto-resolve when a finding disappears.
  const all = await listItems();
  const byKey = new Map<string, ScrumItem>();
  const open = new Map<string, ScrumItem>();
  for (const it of all) {
    if (it.source === "agent" && it.initiator === initiator &&
        it.sourceRef?.startsWith(keyPrefix) && it.sourceRef !== summaryRef) {
      byKey.set(it.sourceRef, it);
      if (it.status !== "archived" && it.status !== "done") open.set(it.sourceRef, it);
    }
  }

  const seen = new Set<string>();
  let created = 0, updated = 0, reopened = 0, suppressed = 0;
  for (const f of findings) {
    const refId = f.ref ?? f.stageId ?? "?";
    const key = `${agent}:${refId}:${f.checkId}`;
    if (seen.has(key)) continue;
    seen.add(key);
    const sev = SEV[f.severity] ?? SEV.medium;
    const desc = `${f.detail ?? ""}\n\nref: ${refId}${f.epochId ? ` (${f.epochId})` : ""} · check: ${f.checkId} · severity: ${f.severity}`;
    const existing = byKey.get(key);
    if (existing?.status === "archived") {
      suppressed++; // dismissed by a human — leave it archived, don't re-card
      continue;
    }
    if (existing) {
      existing.title = f.title.slice(0, 200);
      existing.description = desc;
      existing.priority = sev.priority;
      if (existing.status === "done") {
        existing.status = "triage";
        existing.notes = [...(existing.notes ?? []), { ts: Date.now(), author: initiator, text: "↻ Re-opened — detected again in the latest sweep." }];
        reopened++;
      } else {
        updated++;
      }
      existing.updatedAt = Date.now();
      await putItem(existing);
    } else {
      await createItem({
        title: f.title.slice(0, 200), description: desc,
        type: sev.type, priority: sev.priority, status: "triage",
        source: "agent", initiator, sourceRef: key,
      });
      created++;
    }
  }

  // Auto-resolve this agent's still-open findings that are no longer detected.
  let resolved = 0;
  for (const [key, it] of open) {
    if (!seen.has(key)) {
      it.status = "done";
      it.notes = [...(it.notes ?? []), { ts: Date.now(), author: initiator, text: "✓ Auto-resolved — no longer detected in the latest sweep." }];
      it.updatedAt = Date.now();
      await putItem(it);
      resolved++;
    }
  }

  // Upsert this agent's single sweep-summary heartbeat card.
  const s = body.summary ?? {};
  const lowStr = Object.entries(s.low ?? {}).map(([k, v]) => `${k}: ${v}`).join(" · ") || "none";
  const scopeStr = Object.entries(s.scope ?? {}).map(([k, v]) => `${k}: ${v}`).join(" · ");
  await putItem(newItem({
    id: `agent-${agent}-sweep`,
    title: `${s.icon ?? "🤖"} ${s.label ?? agent} sweep — ${new Date().toISOString().slice(0, 16).replace("T", " ")}Z · ${findings.length} open finding(s)`,
    description: `Latest sweep by ${initiator}.\n${scopeStr ? `- Scope: ${scopeStr}\n` : ""}- Open high/medium findings: ${findings.length} (new ${created}, updated ${updated}, reopened ${reopened}, suppressed ${suppressed}, auto-resolved ${resolved})\n- Low-severity (aggregated, not carded): ${lowStr}`,
    type: "test", priority: findings.length ? "p2" : "p3", status: "review",
    source: "agent", initiator, sourceRef: summaryRef,
    order: -8.6e15, // just under the pinned plan card, top of Review
  }));

  // ── Phase 4 (orchestration): trend history + the cross-agent digest card ──
  // Each sweep appends a compact stat row (capped at 12) and refreshes a single
  // board-wide digest card, so test-pass / format-drift / open-finding trends
  // are visible without leaving the board.
  type SweepStat = { ts: number; open: number; low: number; label: string; icon: string };
  const lowTotal = Object.values((s.low ?? {}) as Record<string, number>).reduce(
    (a, v) => a + (Number(v) || 0), 0,
  );
  const stat: SweepStat = {
    ts: Date.now(), open: findings.length, low: lowTotal,
    label: typeof s.label === "string" ? s.label : agent,
    icon: typeof s.icon === "string" ? s.icon : "🤖",
  };
  const histKey = `agent:history:${agent}`;
  await redis.lpush(histKey, JSON.stringify(stat));
  await redis.ltrim(histKey, 0, 11);
  await redis.sadd("agent:names", agent);

  const names = await redis.smembers("agent:names");
  const lines: string[] = [];
  let totalOpen = 0;
  for (const name of names.sort()) {
    const rows = await redis.lrange<SweepStat>(`agent:history:${name}`, 0, 1);
    const cur = rows[0];
    if (!cur) continue;
    const prev = rows[1];
    const trend = !prev ? "·" : cur.open < prev.open ? "▼" : cur.open > prev.open ? "▲" : "=";
    totalOpen += cur.open;
    lines.push(
      `- ${cur.icon} **${cur.label}** — open: ${cur.open} ${trend}${prev ? ` (prev ${prev.open})` : ""} · low: ${cur.low} · last sweep: ${new Date(cur.ts).toISOString().slice(0, 16).replace("T", " ")}Z`,
    );
  }
  await putItem(newItem({
    id: "agent-digest",
    title: `📊 Agent digest — ${new Date().toISOString().slice(0, 10)} · ${totalOpen} open finding(s) across ${lines.length} agent(s)`,
    description: `Cross-agent rollup (auto-updated on every sweep; trend vs previous sweep).\n${lines.join("\n")}`,
    type: "test", priority: totalOpen ? "p2" : "p3", status: "review",
    source: "agent", initiator: "agent:digest", sourceRef: "agents:digest",
    order: -8.65e15, // sits with the sweep summaries at the top of Review
  }));

  return NextResponse.json({ ok: true, agent, created, updated, reopened, suppressed, resolved, open: findings.length });
}

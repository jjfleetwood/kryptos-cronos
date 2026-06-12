#!/usr/bin/env node
// Board Ops — operationalises the Development scrum board: pulls the open items,
// ranks them by risk (priority) then age, and classifies each as AUTO-workable
// (a deterministic-agent fix that can safely go branch→PR) vs HUMAN-gated
// (judgement/product/destructive). Read-only triage by default — the actual work
// still happens through the agents (branch + PR + human merge), never a blind
// auto-merge. With --annotate it leaves a short audit-trail note on each item.
//
//   Triage:   node scripts/board-ops.mjs
//   Audit:    node scripts/board-ops.mjs --annotate
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { createHmac } from "node:crypto";

const ANNOTATE = process.argv.includes("--annotate");
const BASE = "https://www.kryptoscronos.com";

function env() {
  const e = { ...process.env };
  try {
    for (const line of readFileSync(resolve(process.cwd(), ".env.local"), "utf8").split(/\r?\n/)) {
      if (!line || line.startsWith("#")) continue;
      const i = line.indexOf("=");
      if (i > 0 && !(line.slice(0, i) in e)) e[line.slice(0, i)] = line.slice(i + 1);
    }
  } catch { /* env-only is fine */ }
  return e;
}
const ENV = env();
const SECRET = ENV.ADMIN_SECRET;
const USER = (ENV.ADMIN_USERNAME || "admin").toLowerCase().trim();
if (!SECRET) { console.error("ADMIN_SECRET not found."); process.exit(1); }
const token = () => { const m = `v2.${USER}.${Date.now()}`; return `${m}.${createHmac("sha256", SECRET).update(m).digest("hex")}`; };

// AUTO-workable: an existing deterministic agent can fix it safely on a branch+PR.
// Keyed by the agent finding `checkId` (the report route stores it in sourceRef/desc).
const AUTO = {
  "stale-meta":        "drift-agent --fix",
  "count-drift-stages":"drift-agent --fix",
  "count-drift-epochs":"drift-agent --fix",
  "secured-docs-drift":"docs-agent --fix",
  "doc-count-drift":   "docs-agent --fix",
  "inline-list":       "prose-quality-agent --fix",
  "missing-keys":      "i18n-agent (translate)",
  "oversized-file":    "code-reviewer (extract on a branch)",
};
const RISK = { p0: 0, p1: 1, p2: 2, p3: 3 };

function classify(it) {
  const ref = `${it.sourceRef ?? ""} ${it.description ?? ""}`;
  for (const [check, how] of Object.entries(AUTO)) if (ref.includes(check)) return { lane: "AUTO", how };
  // Agent-sourced low-priority maintenance can auto-work; human feedback is gated.
  if (it.source === "agent" && it.priority === "p3") return { lane: "AUTO", how: "owning agent" };
  return { lane: "HUMAN", how: it.source === "feedback" ? "judgement / product call" : "human review" };
}

const ageDays = (ts) => Math.floor((Date.now() - ts) / 86_400_000);

(async () => {
  const r = await fetch(`${BASE}/api/admin/scrum`, { headers: { Cookie: `admin_token=${token()}` } });
  const { items } = await r.json();
  const open = items
    .filter((it) => ["triage", "backlog", "todo", "in-progress"].includes(it.status))
    .sort((a, b) => (RISK[a.priority] ?? 9) - (RISK[b.priority] ?? 9) || a.createdAt - b.createdAt);

  console.log(`\nBoard Ops — ${open.length} open item(s), ranked by risk then age:\n`);
  let auto = 0, human = 0;
  for (const it of open) {
    const { lane, how } = classify(it);
    lane === "AUTO" ? auto++ : human++;
    console.log(`[${it.priority}] ${lane === "AUTO" ? "🤖" : "🧑"} ${lane}(${how})  ${it.title.slice(0, 64)}  · ${ageDays(it.createdAt)}d · ${it.id}`);
    if (ANNOTATE) {
      await fetch(`${BASE}/api/admin/scrum`, {
        method: "PATCH", headers: { "Content-Type": "application/json", Cookie: `admin_token=${token()}` },
        body: JSON.stringify({ id: it.id, note: `[board-ops] risk ${it.priority} · lane ${lane} (${how}) · ${ageDays(it.createdAt)}d old.` }),
      }).catch(() => {});
    }
  }
  console.log(`\n${auto} AUTO-workable (route to the owning agent → branch+PR) · ${human} HUMAN-gated.`);
  if (!ANNOTATE) console.log("(triage only — re-run with --annotate to leave an audit-trail note on each card)");
})();

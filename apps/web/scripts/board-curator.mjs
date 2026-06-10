#!/usr/bin/env node
// Board Curator — moves/annotates Development-board cards (status + a note),
// e.g. flipping a feedback card to "review" once its work has shipped. Unlike
// the report-only fleet (which manage only their OWN agent cards via the
// least-priv AGENT_REPORT_TOKEN), curating human cards needs admin rights, so
// this mints a short-lived admin token from ADMIN_SECRET and PATCHes
// /api/admin/scrum. Dry-run by default; pass --apply to actually write.
//
//   Dry run:  node scripts/board-curator.mjs
//   Apply:    node scripts/board-curator.mjs --apply
//
// Edit MOVES below for each run. status ∈ triage|backlog|todo|in-progress|review|done|archived.
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { createHmac } from "node:crypto";

// ── The cards to curate this run ───────────────────────────────────────────────
const MOVES = [
  { id: "it_mq7g2u7yxe8nb", status: "review",
    note: "Done: agent finding detail made more verbose — code-health oversized-file now reports the overage + export/component counts + a concrete extraction plan; content-agent dup-id/missing-badge/empty-overview/empty-takeaways now explain the impact + a Fix: line. Commit 7ff6ced (master). Moving to Review for confirmation." },
  { id: "it_mq7g2u7g1zvm7", status: "review",
    note: "Done: new UX-explorer agent (.claude/agents/ux-reviewer.md) — walks the live site as a learner (run-cyberquest/Playwright), files UX-friction + gamification/retention findings to this board (agent:ux); report-only. Commit 7ff6ced (master). Moving to Review for confirmation." },
  { id: "it_mq78fxikrkvt6", status: "review",
    note: "Done: quantum-06 (NISQ Era) overview + technical prose deepened — Preskill's NISQ coinage, why noise compounds (decoherence/gate-error), logical-vs-physical qubits + the ~1000:1 surface-code overhead, the Willow below-threshold crossover, and HNDL stakes. Commit ac792da (master). Moving to Review for confirmation." },
  // Agent-owned card — leave status (the code-health sweep auto-resolves it once the file is no longer oversized); just link the PR.
  { id: "it_mq78ew0okrrqm",
    note: "PR opened: https://github.com/jjfleetwood/kryptos-cronos/pull/2 — extracts 5 panels out of admin/page.tsx (1889 → 1213 lines), behaviour-preserving. Gates: tsc 0, eslint 0 errors, npm run build green. Will auto-resolve on the next code-health sweep after merge." },
];

// ── Admin token (mint from ADMIN_SECRET) ───────────────────────────────────────
function loadEnv() {
  const env = { ...process.env };
  try {
    const txt = readFileSync(resolve(process.cwd(), ".env.local"), "utf8");
    for (const line of txt.split(/\r?\n/)) {
      if (!line || line.startsWith("#")) continue;
      const i = line.indexOf("=");
      if (i > 0 && !(line.slice(0, i) in env)) env[line.slice(0, i)] = line.slice(i + 1);
    }
  } catch { /* env-only is fine */ }
  return env;
}

const env = loadEnv();
const secret = env.ADMIN_SECRET;
const user = (env.ADMIN_USERNAME || "admin").toLowerCase().trim();
const BASE = "https://www.kryptoscronos.com"; // www: the apex 308-strips the auth cookie
const APPLY = process.argv.includes("--apply");

if (!secret) { console.error("ADMIN_SECRET not found (env or .env.local)."); process.exit(1); }

function adminToken() {
  const msg = `v2.${user}.${Date.now()}`;
  return `${msg}.${createHmac("sha256", secret).update(msg).digest("hex")}`;
}

const run = async () => {
  console.log(`Board Curator — ${MOVES.length} card(s) · ${APPLY ? "APPLY" : "DRY RUN"}\n`);
  for (const m of MOVES) {
    const parts = [m.status ? `status→${m.status}` : null, m.note ? "note" : null].filter(Boolean).join(" + ");
    console.log(`• ${m.id}: ${parts}`);
    if (!APPLY) continue;
    const body = { id: m.id };
    if (m.status) body.status = m.status;
    if (m.note) body.note = m.note;
    const r = await fetch(`${BASE}/api/admin/scrum`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json", Cookie: `admin_token=${adminToken()}` },
      body: JSON.stringify(body),
    });
    const out = await r.json().catch(() => ({}));
    console.log(`   → ${r.status} ${out.item ? `ok (status: ${out.item.status})` : JSON.stringify(out)}`);
    if (!r.ok) process.exitCode = 1;
  }
  if (!APPLY) console.log("\n(dry run — re-run with --apply to write)");
};

run();

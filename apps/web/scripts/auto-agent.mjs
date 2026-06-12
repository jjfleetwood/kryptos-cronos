#!/usr/bin/env node
// Programming Agent (auto mode) — reviews the Development scrum board and, for the
// low-risk AUTO tier ONLY, runs the deterministic fix, opens a branch + PR via gh,
// and moves the card to `review`. It NEVER merges and NEVER touches HUMAN-tier or
// judgement work. This is the executing half of the tier method that board-ops.mjs
// classifies (board-ops triages; this agent acts on the safe subset).
//
// "Not high risk" here is deliberately stricter than board-ops' AUTO lane: only the
// self-gating, tsc-verified, deterministic fixes run unattended (stage/epoch-count
// drift, stale meta, secured-docs sync, house-style bullet normalization). AUTO-lane
// items that still need judgement (i18n translation, large-file extraction) are left
// for a supervised run — an autonomous agent shouldn't guess.
//
//   Dry run (classify + plan, no writes):  node scripts/auto-agent.mjs
//   Execute (fix → PR → move cards):       node scripts/auto-agent.mjs --execute
//
// CI setup (one-time): repo secrets ADMIN_SECRET + ADMIN_USERNAME (to drive the board
// API) and the default GITHUB_TOKEN (to open PRs). Pause without editing the workflow
// by setting repo variable AUTO_AGENT_ENABLED=false.
import { readFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { createHmac } from "node:crypto";
import { execSync } from "node:child_process";

const EXECUTE = process.argv.includes("--execute");
const BASE = "https://www.kryptoscronos.com";
const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..", "..");
const MAX_PER_RUN = Number(process.env.AUTO_AGENT_MAX || 3);
const ENABLED = (process.env.AUTO_AGENT_ENABLED ?? "true") !== "false";

function env() {
  const e = { ...process.env };
  try {
    for (const line of readFileSync(resolve(process.cwd(), ".env.local"), "utf8").split(/\r?\n/)) {
      if (!line || line.startsWith("#")) continue;
      const i = line.indexOf("=");
      if (i > 0 && !(line.slice(0, i) in e)) e[line.slice(0, i)] = line.slice(i + 1);
    }
  } catch { /* env-only (CI) is fine */ }
  return e;
}
const ENV = env();
const SECRET = ENV.ADMIN_SECRET;
const USER = (ENV.ADMIN_USERNAME || "admin").toLowerCase().trim();

if (!ENABLED) { console.log("auto-agent: disabled (AUTO_AGENT_ENABLED=false) — no-op."); process.exit(0); }
if (!SECRET) { console.log("auto-agent: ADMIN_SECRET not set — skipping (clean no-op)."); process.exit(0); }

const token = () => { const m = `v2.${USER}.${Date.now()}`; return `${m}.${createHmac("sha256", SECRET).update(m).digest("hex")}`; };
const api = (path, init = {}) =>
  fetch(`${BASE}${path}`, { ...init, headers: { ...(init.headers || {}), Cookie: `admin_token=${token()}` } });
const sh = (cmd) => execSync(cmd, { cwd: ROOT, encoding: "utf8" }).trim();

// The unattended-safe subset: each entry is fully deterministic and self-gating.
// `selfPR` agents open their own branch+PR; the rest are committed+PR'd here.
const EXECUTORS = {
  "stale-meta":         { cmd: "node apps/web/scripts/drift-agent.mjs --fix", paths: "packages/core/src/stages-meta.generated.ts", slug: "regen-meta",   title: "regenerate stages-meta" },
  "count-drift-stages": { cmd: "node apps/web/scripts/drift-agent.mjs --fix", paths: "packages/core/src",                          slug: "count-stages", title: "reconcile stage-count drift" },
  "count-drift-epochs": { cmd: "node apps/web/scripts/drift-agent.mjs --fix", paths: "packages/core/src",                          slug: "count-epochs", title: "reconcile epoch-count drift" },
  "secured-docs-drift": { cmd: "node apps/web/scripts/docs-agent.mjs --fix",  paths: "docs apps/web/secured-docs",                 slug: "docs-sync",    title: "sync secured-docs" },
  "doc-count-drift":    { cmd: "node apps/web/scripts/docs-agent.mjs --fix",  paths: "docs apps/web/secured-docs",                 slug: "doc-counts",   title: "reconcile doc-count drift" },
  "inline-list":        { selfPR: true, cmd: "node apps/web/scripts/prose-quality-agent.mjs --fix",                                 slug: "prose-quality", title: "bullet-normalize inline lists" },
};

function executorFor(it) {
  const ref = `${it.sourceRef ?? ""} ${it.description ?? ""}`;
  for (const [check, ex] of Object.entries(EXECUTORS)) if (ref.includes(check)) return { check, ex };
  return null;
}

async function moveCard(id, status, note) {
  await api("/api/admin/scrum", {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id, status, note }),
  }).catch(() => {});
}

function ensureCleanTree() {
  if (sh("git status --porcelain -uno")) throw new Error("working tree not clean");
}

// In-place fix → branch + commit + PR. Returns { prUrl } or { noop: true }.
function fixAndPR({ check, ex, item }) {
  ensureCleanTree();
  const branch = `agent/auto-${ex.slug}-${new Date().toISOString().slice(0, 16).replace(/[-:T]/g, "")}`;
  try {
    sh(ex.cmd); // deterministic writer
  } catch (e) {
    sh("git checkout -- .");
    throw new Error(`fix command failed: ${e.message}`);
  }
  if (!sh(`git status --porcelain ${ex.paths}`)) {
    sh("git checkout -- ."); // nothing changed → the finding is already resolved
    return { noop: true };
  }
  // Green gate before anything ships.
  try {
    execSync("npx tsc -p packages/core/tsconfig.json --noEmit --skipLibCheck", { cwd: ROOT, stdio: "inherit" });
  } catch {
    sh("git checkout -- .");
    throw new Error("tsc gate failed");
  }
  sh(`git checkout -b ${branch}`);
  sh(`git add ${ex.paths}`);
  sh(`git commit -m "Auto agent: ${ex.title} (${check}) [${item.id}]"`);
  sh(`git push -u origin ${branch}`);
  const prUrl = sh(
    `gh pr create --base master --head ${branch} ` +
    `--title "Auto agent: ${ex.title}" ` +
    `--body "Deterministic, tsc-gated fix by the Programming Agent (auto mode) for board item ${item.id} (${check}). Human review + merge required — the agent never merges."`,
  );
  sh("git checkout master");
  return { prUrl };
}

// Self-PR agent (format) opens its own branch+PR; capture the URL it prints.
function runSelfPR(ex) {
  ensureCleanTree();
  const out = execSync(ex.cmd, { cwd: ROOT, encoding: "utf8" });
  process.stdout.write(out);
  const m = out.match(/PR opened:\s*(\S+)/);
  if (m) return { prUrl: m[1] };
  if (/no cleanly-fixable|nothing met the safety bar/i.test(out)) return { noop: true };
  return { prUrl: "(opened — see Actions log)" };
}

(async () => {
  const r = await api("/api/admin/scrum");
  const { items } = await r.json();
  // The actionable columns, excluding work already in flight/done. "Approved &
  // Planned" is the greenlit lane (planned + agreed to do) — prioritized first.
  const RANK = { planned: 0, todo: 1, backlog: 2, triage: 3 };
  const open = items
    .filter((it) => it.status in RANK)
    .sort((a, b) => (RANK[a.status] - RANK[b.status]) || (a.createdAt ?? 0) - (b.createdAt ?? 0));

  const workable = [];
  for (const it of open) {
    const hit = executorFor(it);
    if (hit) workable.push({ ...hit, item: it });
  }

  console.log(`auto-agent: ${open.length} open item(s), ${workable.length} unattended-safe AUTO, ${open.length - workable.length} left for humans.`);
  if (!EXECUTE) {
    for (const w of workable.slice(0, MAX_PER_RUN)) console.log(`  would fix → ${w.ex.title}  · ${w.item.id}  (${w.check})`);
    console.log("(dry run — pass --execute to open PRs)");
    return;
  }

  let done = 0;
  for (const w of workable) {
    if (done >= MAX_PER_RUN) { console.log(`auto-agent: hit MAX_PER_RUN=${MAX_PER_RUN}, stopping.`); break; }
    try {
      const res = w.ex.selfPR ? runSelfPR(w.ex) : fixAndPR(w);
      if (res.noop) {
        await moveCard(w.item.id, "review", `[auto-agent] no-op — already resolved; please verify and close.`);
        console.log(`  ✓ no-op (already resolved) · ${w.item.id}`);
      } else {
        await moveCard(w.item.id, "review", `[auto-agent] auto-fixed → ${res.prUrl} — review + merge.`);
        console.log(`  ✓ PR opened ${res.prUrl} · ${w.item.id}`);
        done++;
      }
    } catch (e) {
      // Best-effort recover the tree and leave the card where it is for a human.
      try { sh("git checkout master"); sh("git checkout -- ."); } catch { /* best effort */ }
      console.log(`  ✗ ${w.item.id}: ${e.message} — left for human.`);
    }
  }
  console.log(`auto-agent: ${done} PR(s) opened this run (cards moved to review; nothing merged).`);
})();

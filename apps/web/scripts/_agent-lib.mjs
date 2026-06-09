// Shared helpers for report-only dev agents (content, code-health, format, …).
// All agents are report-only: they analyse and file findings to the Development
// board via POST /api/agent/report; they never edit anything.
import { execSync } from "node:child_process";
import { createRequire } from "node:module";
import { rmSync, readdirSync, statSync, readFileSync } from "node:fs";
import { resolve, join } from "node:path";

export const ROOT = resolve(process.cwd(), "../..");

/** Transpile @kryptos/core and return the full stages array (+ a cleanup fn). */
export function loadStages(tag = "agent") {
  const OUT = resolve(ROOT, `.tmp_${tag}`);
  const require = createRequire(import.meta.url);
  execSync(
    `npx tsc -p packages/core/tsconfig.json --outDir "${OUT}" --module commonjs --moduleResolution node --noEmit false --declaration false --skipLibCheck`,
    { cwd: ROOT, stdio: "inherit" },
  );
  const { stages } = require(resolve(OUT, "stages.js"));
  return { stages, cleanup: () => rmSync(OUT, { recursive: true, force: true }) };
}

/** Collector: high/medium become board cards; low aggregates into the summary. */
export function makeCollector() {
  const findings = [], low = {};
  return {
    findings, low,
    add(severity, ref, epochId, checkId, title, detail) {
      if (severity === "low") { low[checkId] = (low[checkId] || 0) + 1; return; }
      findings.push({ severity, ref, epochId, checkId, title, detail });
    },
  };
}

/** Recursively list files under `dir` matching any of `exts`. */
export function walk(dir, exts, skip = ["node_modules", ".next", ".turbo", "scripts", "secured-docs"]) {
  const out = [];
  (function rec(d) {
    let entries; try { entries = readdirSync(d); } catch { return; }
    for (const name of entries) {
      if (skip.includes(name)) continue;
      const p = join(d, name);
      const st = statSync(p);
      if (st.isDirectory()) rec(p);
      else if (exts.some((e) => name.endsWith(e))) out.push(p);
    }
  })(dir);
  return out;
}
export { readFileSync };

/** Print a console report and (with --report) POST findings to the board. */
export async function report({ agent, icon, label, findings, low, scope }) {
  const REPORT = process.argv.includes("--report");
  const high = findings.filter((f) => f.severity === "high").length;
  const med = findings.filter((f) => f.severity === "medium").length;
  console.log(`\n${icon} ${label} — ${Object.entries(scope || {}).map(([k, v]) => `${k}: ${v}`).join(", ")}`);
  console.log(`Findings: ${high} high · ${med} medium · low(aggregated): ${Object.entries(low).map(([k, v]) => `${k}=${v}`).join(", ") || "none"}`);
  for (const f of findings) console.log(`  [${f.severity.toUpperCase()}] ${f.title}`);
  if (!findings.length) console.log("  ✓ No high/medium findings.");
  if (!REPORT) { console.log("\n(dry run — add --report with AGENT_REPORT_URL + AGENT_REPORT_TOKEN)"); return; }
  const url = process.env.AGENT_REPORT_URL, token = process.env.AGENT_REPORT_TOKEN;
  if (!url || !token) { console.error("\n--report requires AGENT_REPORT_URL and AGENT_REPORT_TOKEN."); process.exitCode = 1; return; }
  const res = await fetch(`${url.replace(/\/$/, "")}/api/agent/report`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
    body: JSON.stringify({ agent, findings, summary: { icon, label, scope, low } }),
  });
  const out = await res.json().catch(() => ({}));
  console.log(`\nReported to board → ${res.status} ${JSON.stringify(out)}`);
  if (!res.ok) process.exitCode = 1;
}

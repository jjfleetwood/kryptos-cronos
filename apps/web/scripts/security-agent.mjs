#!/usr/bin/env node
// Security Hygiene Agent — for a security-training product, dogfood the basics:
// dependency advisories, accidentally-committed secrets, and the highest-signal
// risky source patterns. Report-only (it never edits or runs fixes).
//   Dry run:  node scripts/security-agent.mjs
//   Report:   AGENT_REPORT_URL=… AGENT_REPORT_TOKEN=… node scripts/security-agent.mjs --report
import { makeCollector, report, walk, readFileSync, ROOT } from "./_agent-lib.mjs";
import { execSync } from "node:child_process";
import { resolve } from "node:path";

const c = makeCollector();

// 1. Dependency advisories via `npm audit` (the registry call needs network).
function auditCounts() {
  try {
    const out = execSync("npm audit --json", { cwd: ROOT, encoding: "utf8", stdio: ["ignore", "pipe", "ignore"] });
    return JSON.parse(out).metadata?.vulnerabilities ?? {};
  } catch (e) {
    // npm audit exits non-zero when advisories exist — its JSON is on stdout.
    try { return JSON.parse(e.stdout || "{}").metadata?.vulnerabilities ?? {}; } catch { return null; }
  }
}
const v = auditCounts();
if (v) {
  const crit = v.critical || 0, high = v.high || 0;
  if (crit + high > 0) {
    c.add(crit > 0 ? "high" : "medium", "deps", "", "dep-vulns", `npm audit: ${crit} critical, ${high} high`,
      `npm audit reports ${crit} critical and ${high} high-severity advisories in the dependency tree (moderate/low: ${v.moderate || 0}/${v.low || 0}). Fix: \`npm audit fix\` where safe, or bump the offending packages; review breaking changes before merge.`);
  }
}

// 2. Secret scan + risky patterns over the app source.
const SECRETS = [
  [/sk_live_[A-Za-z0-9]{16,}/, "Stripe live key"],
  [/AKIA[0-9A-Z]{16}/, "AWS access key id"],
  [/-----BEGIN (?:RSA |EC )?PRIVATE KEY-----/, "private key"],
  [/ghp_[A-Za-z0-9]{36}/, "GitHub token"],
  [/xox[baprs]-[A-Za-z0-9-]{10,}/, "Slack token"],
];
const files = walk(resolve(ROOT, "apps/web/src"), [".ts", ".tsx", ".mjs", ".js"]);
let danger = 0;
for (const f of files) {
  let txt; try { txt = readFileSync(f, "utf8"); } catch { continue; }
  const rel = f.replace(ROOT, "").replace(/\\/g, "/");
  for (const [re, what] of SECRETS) {
    if (re.test(txt)) {
      c.add("high", rel, "", "hardcoded-secret", `Possible hardcoded secret (${what}) in ${rel.split("/").pop()}`,
        `A string matching a ${what} format appears in ${rel}. Secrets must never be committed. Fix: move it to an env var, ROTATE the exposed credential immediately, and scrub git history if it was ever pushed.`);
      break;
    }
  }
  if (/dangerouslySetInnerHTML/.test(txt)) { danger++; c.add("low", rel, "", "dangerous-html", "", ""); }
  if (/\/api\//.test(rel) && /console\.(log|error|warn)\(/.test(txt)) c.add("low", rel, "", "api-console", "", "");
}
if (danger > 0) {
  c.add("medium", "xss", "", "xss-surface", `${danger} dangerouslySetInnerHTML usage(s)`,
    `${danger} file(s) use dangerouslySetInnerHTML, React's primary XSS vector. Each must render only trusted/constant HTML or sanitize its input. Fix: review each usage; prefer plain JSX, or run content-derived HTML through a sanitizer (e.g. DOMPurify).`);
}

await report({ agent: "security", icon: "🔐", label: "Security Hygiene", findings: c.findings, low: c.low, scope: { files: files.length, audit: v ? "ok" : "skipped" } });

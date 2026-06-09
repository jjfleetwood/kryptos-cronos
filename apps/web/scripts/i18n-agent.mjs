#!/usr/bin/env node
// i18n Coverage Agent — checks every locale against English for missing/orphan
// translation keys (missing keys render fallbacks or raw keys in the UI). Report-only.
//   Dry run:  node scripts/i18n-agent.mjs
//   Report:   AGENT_REPORT_URL=… AGENT_REPORT_TOKEN=… node scripts/i18n-agent.mjs --report
import { ROOT, makeCollector, report, readFileSync } from "./_agent-lib.mjs";
import { resolve } from "node:path";

const DIR = resolve(ROOT, "apps/web/src/messages");
const LOCALES = ["es", "fr", "de", "hi", "pt", "pl"];
const c = makeCollector();

function keys(obj, prefix = "") {
  const out = new Set();
  for (const [k, v] of Object.entries(obj)) {
    const key = prefix ? `${prefix}.${k}` : k;
    if (v && typeof v === "object" && !Array.isArray(v)) for (const kk of keys(v, key)) out.add(kk);
    else out.add(key);
  }
  return out;
}

const en = keys(JSON.parse(readFileSync(resolve(DIR, "en.json"), "utf8")));
let worstLocale = null, worstMissing = 0;

for (const loc of LOCALES) {
  let data;
  try { data = JSON.parse(readFileSync(resolve(DIR, `${loc}.json`), "utf8")); }
  catch { c.add("high", `${loc}.json`, "", "locale-unreadable", `${loc}.json: missing or invalid JSON`, "Locale file could not be parsed."); continue; }
  const lk = keys(data);
  const missing = [...en].filter((k) => !lk.has(k));
  const orphan = [...lk].filter((k) => !en.has(k));
  if (missing.length > worstMissing) { worstMissing = missing.length; worstLocale = loc; }
  if (missing.length) {
    const sev = missing.length > 20 ? "medium" : "low";
    if (sev === "medium") c.add("medium", `${loc}.json`, "", "missing-keys", `${loc}: ${missing.length} untranslated key(s) vs en`, `First few: ${missing.slice(0, 12).join(", ")}${missing.length > 12 ? " …" : ""}`);
    else for (let i = 0; i < missing.length; i++) c.add("low", "", "", `missing-${loc}`, "", "");
  }
  for (let i = 0; i < orphan.length; i++) c.add("low", "", "", `orphan-${loc}`, "", "");
}

await report({ agent: "i18n", icon: "🌐", label: "i18n Coverage", findings: c.findings, low: c.low, scope: { locales: LOCALES.length, enKeys: en.size, worst: worstLocale ? `${worstLocale} (-${worstMissing})` : "none" } });

#!/usr/bin/env node
// Merge all CTF quiz translation files into per-locale final files
const fs = require("fs");
const path = require("path");
const BASE = __dirname;
const QUIZ_DATA = path.join(__dirname, "..", "ctf-quiz-data.json");

const allStages = Object.keys(JSON.parse(fs.readFileSync(QUIZ_DATA, "utf8")));

function validateAndReport(locale, data) {
  const keys = Object.keys(data);
  const missing = allStages.filter(k => !data[k]);
  const invalid = [];
  for (const k of keys) {
    if (!data[k].questions || data[k].questions.length !== 5) {
      invalid.push(k);
    }
  }
  if (missing.length > 0) console.error(`  ${locale}: MISSING ${missing.length} stages: ${missing.join(", ")}`);
  if (invalid.length > 0) console.error(`  ${locale}: INVALID ${invalid.length} stages: ${invalid.join(", ")}`);
  if (missing.length === 0 && invalid.length === 0) console.log(`  ${locale}: ${keys.length} stages OK`);
  return missing.length === 0 && invalid.length === 0;
}

// === Spanish (es) ===
{
  let es = {};
  for (let i = 1; i <= 7; i++) {
    const f = path.join(BASE, `ctf-quiz-es-part${i}.json`);
    if (fs.existsSync(f)) {
      try {
        Object.assign(es, JSON.parse(fs.readFileSync(f, "utf8")));
      } catch (e) {
        console.error(`  es part${i}: ${e.message}`);
      }
    }
  }
  if (validateAndReport("es", es)) {
    fs.writeFileSync(path.join(BASE, "ctf-quiz-es.json"), JSON.stringify(es, null, 2), "utf8");
    console.log(`  Wrote ctf-quiz-es.json`);
  }
}

// === German (de) ===
{
  let de = {};
  const main = path.join(BASE, "ctf-quiz-de.json");
  const missing = path.join(BASE, "ctf-quiz-de-missing.json");
  if (fs.existsSync(main)) {
    try { Object.assign(de, JSON.parse(fs.readFileSync(main, "utf8"))); } catch (e) { console.error(`  de main: ${e.message}`); }
  }
  if (fs.existsSync(missing)) {
    try { Object.assign(de, JSON.parse(fs.readFileSync(missing, "utf8"))); } catch (e) { console.error(`  de missing: ${e.message}`); }
  }
  if (validateAndReport("de", de)) {
    fs.writeFileSync(path.join(BASE, "ctf-quiz-de-final.json"), JSON.stringify(de, null, 2), "utf8");
    console.log(`  Wrote ctf-quiz-de-final.json (rename to ctf-quiz-de.json after verifying)`);
  }
}

// === Already complete (just validate) ===
for (const locale of ["fr", "hi", "pt", "pl"]) {
  const f = path.join(BASE, `ctf-quiz-${locale}.json`);
  if (fs.existsSync(f)) {
    try {
      const d = JSON.parse(fs.readFileSync(f, "utf8"));
      validateAndReport(locale, d);
    } catch (e) {
      console.error(`  ${locale}: PARSE ERROR ${e.message}`);
    }
  } else {
    console.error(`  ${locale}: FILE MISSING`);
  }
}

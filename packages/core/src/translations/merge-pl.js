#!/usr/bin/env node
// Merge all Polish batch files into pl.json
// Run from: src/data/translations/
const fs = require("fs");
const path = require("path");

const BASE = path.join(__dirname);
const OUTPUT = path.join(BASE, "pl.json");

// Reference key order from es.json
const ref = JSON.parse(fs.readFileSync(path.join(BASE, "es.json"), "utf8"));
const refKeys = Object.keys(ref);

// All batch files to merge (in any order — output will be sorted by refKeys)
const BATCH_FILES = [
  "pl-p1-1.json",
  "pl-p1-2.json",
  "pl-p1-3.json",
  "pl-part2.json",
  "pl-p3-1.json",
  // pl-p3-2 may be a single file or split into 2a/2b
  "pl-p3-2.json",
  "pl-p3-2a.json",
  "pl-p3-2b.json",
  "pl-p3-3.json",
  "pl-p3-4.json",
  "pl-p3-5.json",
];

const merged = {};
let totalFiles = 0;

for (const file of BATCH_FILES) {
  const fullPath = path.join(BASE, file);
  if (!fs.existsSync(fullPath)) continue;
  try {
    const data = JSON.parse(fs.readFileSync(fullPath, "utf8"));
    const keys = Object.keys(data);
    for (const key of keys) merged[key] = data[key];
    console.log(`  ✓ ${file}: ${keys.length} keys`);
    totalFiles++;
  } catch (e) {
    console.error(`  ✗ ${file}: JSON ERROR — ${e.message}`);
    process.exit(1);
  }
}

// Output sorted by reference key order
const output = {};
let covered = 0;
for (const key of refKeys) {
  if (key in merged) {
    output[key] = merged[key];
    covered++;
  }
}

// Any extra keys not in ref
for (const key of Object.keys(merged)) {
  if (!(key in output)) {
    output[key] = merged[key];
    console.warn(`  ⚠ Extra key (not in es.json): ${key}`);
  }
}

const missing = refKeys.filter((k) => !(k in merged));
if (missing.length > 0) {
  console.warn(`\n⚠ Missing ${missing.length} keys:`);
  missing.forEach((k) => console.warn(`  - ${k}`));
} else {
  console.log(`\n✓ All ${refKeys.length} reference keys covered.`);
}

fs.writeFileSync(OUTPUT, JSON.stringify(output, null, 2), "utf8");
console.log(`\nWrote ${covered} keys to pl.json (from ${totalFiles} batch files)`);

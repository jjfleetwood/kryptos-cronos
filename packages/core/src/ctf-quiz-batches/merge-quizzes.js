#!/usr/bin/env node
// Merge all quiz batch files into ctf-quiz-data.json
const fs = require("fs");
const path = require("path");

const BATCHES_DIR = path.join(__dirname);
const OUTPUT = path.join(__dirname, "..", "ctf-quiz-data.json");

const files = fs.readdirSync(BATCHES_DIR).filter(f => f.startsWith("quiz-") && f.endsWith(".json"));

const merged = {};
let totalStages = 0;

for (const file of files.sort()) {
  try {
    const data = JSON.parse(fs.readFileSync(path.join(BATCHES_DIR, file), "utf8"));
    const keys = Object.keys(data);
    // Validate
    let errors = 0;
    for (const key of keys) {
      if (!data[key].questions || data[key].questions.length !== 5) {
        console.error(`  ✗ ${file} → ${key}: expected 5 questions, got ${data[key].questions?.length}`);
        errors++;
      }
    }
    if (errors === 0) {
      Object.assign(merged, data);
      totalStages += keys.length;
      console.log(`  ✓ ${file}: ${keys.length} stages`);
    }
  } catch (e) {
    console.error(`  ✗ ${file}: ${e.message}`);
  }
}

fs.writeFileSync(OUTPUT, JSON.stringify(merged, null, 2), "utf8");
console.log(`\nWrote ${totalStages} stage quizzes to ctf-quiz-data.json`);

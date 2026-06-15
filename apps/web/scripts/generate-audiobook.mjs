// Generate a single MP3 audiobook of the Siempre Segundo novelized prose using
// ElevenLabs TTS, upload it to Vercel Blob, and record the resulting URL in
// secured-docs/siempre-segundo.audio.txt (committed; read by /api/studio/audio).
//
//   ELEVENLABS_API_KEY=...  BLOB_READ_WRITE_TOKEN=...  node scripts/generate-audiobook.mjs
//
// (Both are read from apps/web/.env.local automatically when run via the npm
// script: `npm run gen:audiobook -w @kryptos/web`.)
//
// Optional env:
//   ELEVENLABS_VOICE_ID   (default: Rachel — "21m00Tcm4TlvDq8ikWAM")
//   ELEVENLABS_MODEL_ID   (default: eleven_multilingual_v2)
//   ELEVENLABS_FORMAT     (default: mp3_44100_64 — good spoken-word quality)
//
// Hosting note: the MP3 goes to Vercel Blob (no 100 MB git limit), so we can use
// a higher bitrate than the old git-served path. ~42k words ≈ 4.5 hrs; at 64 kbps
// that's ~130 MB. The Blob URL is unguessable but bearer-style; access is gated
// at /api/studio/audio (Pro / admin / share-link) which 302-redirects to it.

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { put } from "@vercel/blob";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, ".."); // apps/web
const SRC = path.join(ROOT, "secured-docs", "SIEMPRE_SEGUNDO.md");
const URL_FILE = path.join(ROOT, "secured-docs", "siempre-segundo.audio.txt");
const BUILD_DIR = path.join(ROOT, ".audiobook-build");
const LOCAL_MP3 = path.join(BUILD_DIR, "siempre-segundo.mp3");

const API_KEY = process.env.ELEVENLABS_API_KEY || process.env.ELEVEN_API_KEY;
const BLOB_TOKEN = process.env.BLOB_READ_WRITE_TOKEN;
const VOICE_ID = process.env.ELEVENLABS_VOICE_ID || "21m00Tcm4TlvDq8ikWAM";
const MODEL_ID = process.env.ELEVENLABS_MODEL_ID || "eleven_multilingual_v2";
const FORMAT = process.env.ELEVENLABS_FORMAT || "mp3_44100_64";

if (!API_KEY) { console.error("ELEVENLABS_API_KEY is not set. Aborting."); process.exit(1); }
// BLOB_READ_WRITE_TOKEN is optional: with it, we upload via the SDK; without it,
// we just write the local MP3 and print the `vercel blob put` command (which
// auths via the linked project — no token needed).

// Same slice as /api/studio?prose=1: Prologue → Epilogue, no scaffolding.
function extractProse(content) {
  const start = content.indexOf("## _Siempre Segundo_ — Prologue");
  if (start === -1) return content;
  const tail = content.indexOf("## Notes & to-do", start);
  return (tail === -1 ? content.slice(start) : content.slice(start, tail)).trimEnd();
}

function mdToSpeech(md) {
  return md
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/^#{1,6}\s+/gm, "")
    .replace(/^\s*>\s?/gm, "")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/[*_`]/g, "")
    .replace(/^\s*[-–—]\s*$/gm, " ")
    .replace(/\n{2,}/g, "\n\n")
    .trim();
}

// Larger chunks than the browser path (fewer API calls); split at paragraph then
// sentence boundaries, capped ~2400 chars.
function chunk(text, max = 2400) {
  const paras = text.split(/\n{2,}/);
  const out = [];
  let buf = "";
  for (const para of paras) {
    const sentences = para.match(/[^.!?]+[.!?]*\s*/g) ?? [para];
    for (const s of sentences) {
      if ((buf + s).length > max && buf) { out.push(buf.trim()); buf = ""; }
      buf += s;
    }
    buf += "\n\n";
  }
  if (buf.trim()) out.push(buf.trim());
  return out.filter(Boolean);
}

async function tts(text, prev, next) {
  const url = `https://api.elevenlabs.io/v1/text-to-speech/${VOICE_ID}?output_format=${FORMAT}`;
  const body = {
    text,
    model_id: MODEL_ID,
    previous_text: prev || undefined,
    next_text: next || undefined,
    voice_settings: { stability: 0.5, similarity_boost: 0.75, style: 0.0, use_speaker_boost: true },
  };
  for (let attempt = 1; attempt <= 4; attempt++) {
    const res = await fetch(url, {
      method: "POST",
      headers: { "xi-api-key": API_KEY, "Content-Type": "application/json", Accept: "audio/mpeg" },
      body: JSON.stringify(body),
    });
    if (res.ok) return Buffer.from(await res.arrayBuffer());
    if (res.status === 429 || res.status >= 500) {
      const wait = attempt * 3000;
      console.warn(`  ${res.status} — retry ${attempt} in ${wait}ms`);
      await new Promise((r) => setTimeout(r, wait));
      continue;
    }
    throw new Error(`ElevenLabs ${res.status}: ${await res.text()}`);
  }
  throw new Error("ElevenLabs: exhausted retries");
}

async function main() {
  const md = fs.readFileSync(SRC, "utf-8");
  const all = chunk(mdToSpeech(extractProse(md)));
  // AUDIOBOOK_LIMIT=N renders only the first N chunks (cheap pipeline test).
  const LIMIT = parseInt(process.env.AUDIOBOOK_LIMIT || "0", 10);
  const chunks = LIMIT > 0 ? all.slice(0, LIMIT) : all;
  console.log(`${chunks.length}${LIMIT > 0 ? ` of ${all.length} (LIMIT)` : ""} chunks @ ${FORMAT} → ${LOCAL_MP3}`);

  fs.mkdirSync(BUILD_DIR, { recursive: true });
  const fd = fs.openSync(LOCAL_MP3, "w");
  try {
    for (let i = 0; i < chunks.length; i++) {
      const audio = await tts(chunks[i], chunks[i - 1], chunks[i + 1]);
      fs.writeSync(fd, audio);
      process.stdout.write(`\r  ${i + 1}/${chunks.length} (${(audio.length / 1024).toFixed(0)} KB)   `);
    }
  } finally {
    fs.closeSync(fd);
  }

  const mb = (fs.statSync(LOCAL_MP3).size / 1024 / 1024).toFixed(1);
  console.log(`\nGenerated ${mb} MB at ${path.relative(ROOT, LOCAL_MP3)}.`);

  if (!BLOB_TOKEN) {
    console.log(`\nNo BLOB_READ_WRITE_TOKEN set — upload via the linked-project CLI instead:`);
    console.log(`  npx vercel blob put "${LOCAL_MP3}" --access public --add-random-suffix --content-type audio/mpeg --pathname studio/siempre-segundo.mp3`);
    console.log(`Then record the printed URL in secured-docs/siempre-segundo.audio.txt, commit, and push.`);
    return;
  }

  console.log(`Uploading to Vercel Blob…`);
  const buf = fs.readFileSync(LOCAL_MP3);
  const blob = await put("studio/siempre-segundo.mp3", buf, {
    access: "public",
    contentType: "audio/mpeg",
    addRandomSuffix: true, // unguessable URL
    token: BLOB_TOKEN,
  });

  fs.writeFileSync(URL_FILE, blob.url + "\n", "utf-8");
  console.log(`Uploaded. URL recorded in ${path.relative(ROOT, URL_FILE)}:`);
  console.log(`  ${blob.url}`);
  console.log(`\nNext: commit secured-docs/siempre-segundo.audio.txt and push — the`);
  console.log(`/studio/prose 🎙 player will light up automatically.`);
}

main().catch((e) => { console.error("\n", e); process.exit(1); });

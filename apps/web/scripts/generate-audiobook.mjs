// Generate a single MP3 audiobook of the Siempre Segundo novelized prose using
// ElevenLabs TTS, and write it to secured-docs/ (Pro-gated, NOT public).
//
//   ELEVENLABS_API_KEY=...  node scripts/generate-audiobook.mjs
//
// Optional env:
//   ELEVENLABS_VOICE_ID   (default: Rachel — "21m00Tcm4TlvDq8ikWAM")
//   ELEVENLABS_MODEL_ID   (default: eleven_multilingual_v2)
//   ELEVENLABS_FORMAT     (default: mp3_22050_32)
//
// MP3 frames concatenate cleanly for playback, so each chunk's audio is appended
// to one file. previous_text / next_text are passed for prosody continuity.
//
// IMPORTANT — file size & hosting: the MP3 lives in secured-docs/ and is served
// from the git-built deploy, so it MUST stay under GitHub's 100 MB hard limit.
// At ~42k words ≈ 4.5 hrs: 32 kbps ≈ 65 MB (default, fits), 64 kbps ≈ 130 MB
// (too big for git — would need Vercel Blob instead), 128 kbps ≈ 250 MB (no).
// 32 kbps mono is fine for spoken word. Keep the default unless you switch the
// host off git.

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, ".."); // apps/web
const SRC = path.join(ROOT, "secured-docs", "SIEMPRE_SEGUNDO.md");
const OUT = path.join(ROOT, "secured-docs", "siempre-segundo.mp3");

const API_KEY = process.env.ELEVENLABS_API_KEY;
const VOICE_ID = process.env.ELEVENLABS_VOICE_ID || "21m00Tcm4TlvDq8ikWAM";
const MODEL_ID = process.env.ELEVENLABS_MODEL_ID || "eleven_multilingual_v2";
const FORMAT = process.env.ELEVENLABS_FORMAT || "mp3_22050_32"; // ~65 MB, fits git

if (!API_KEY) {
  console.error("ELEVENLABS_API_KEY is not set. Aborting.");
  process.exit(1);
}

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

// Larger chunks than the browser path (fewer API calls); split at paragraph
// then sentence boundaries, capped ~2400 chars.
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
  const chunks = chunk(mdToSpeech(extractProse(md)));
  console.log(`${chunks.length} chunks → ${OUT}`);
  const fd = fs.openSync(OUT, "w");
  try {
    for (let i = 0; i < chunks.length; i++) {
      const audio = await tts(chunks[i], chunks[i - 1], chunks[i + 1]);
      fs.writeSync(fd, audio);
      process.stdout.write(`\r  ${i + 1}/${chunks.length} (${(audio.length / 1024).toFixed(0)} KB)   `);
    }
  } finally {
    fs.closeSync(fd);
  }
  const mb = (fs.statSync(OUT).size / 1024 / 1024).toFixed(1);
  console.log(`\nDone. ${mb} MB written.`);
}

main().catch((e) => { console.error("\n", e); process.exit(1); });

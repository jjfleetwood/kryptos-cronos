// Generate a CHAPTERED audiobook of the Siempre Segundo novelized prose using
// ElevenLabs TTS: one seekable MP3 per chapter, each uploaded to Vercel Blob, with
// a manifest recorded in secured-docs/siempre-segundo.audio.json (committed; read by
// /api/studio/audio?manifest=1). The /studio/prose player renders a chapter list and
// auto-advances.
//
//   ELEVENLABS_API_KEY=...  BLOB_READ_WRITE_TOKEN=...  node scripts/generate-audiobook.mjs
//
// (Both are read from apps/web/.env.local automatically via: npm run gen:audiobook -w @kryptos/web)
//
// Optional env:
//   ELEVENLABS_VOICE_ID   (default: Rachel — "21m00Tcm4TlvDq8ikWAM")
//   ELEVENLABS_MODEL_ID   (default: eleven_multilingual_v2)
//   ELEVENLABS_FORMAT     (default: mp3_44100_64)
//   AUDIOBOOK_LIMIT=N     render only the first N chapters (cheap pipeline test)
//   AUDIOBOOK_RESUME_FROM=N  start at chapter index N (1-based), keeping manifest
//                            entries already recorded — finish a run that stopped on a
//                            quota cap without re-paying for chapters already done.

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { execFileSync } from "child_process";
import { put } from "@vercel/blob";
import ffmpegPath from "ffmpeg-static";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, ".."); // apps/web
const SRC = path.join(ROOT, "secured-docs", "SIEMPRE_SEGUNDO.md");
const MANIFEST_FILE = path.join(ROOT, "secured-docs", "siempre-segundo.audio.json");
const BUILD_DIR = path.join(ROOT, ".audiobook-build");

const API_KEY = process.env.ELEVENLABS_API_KEY || process.env.ELEVEN_API_KEY;
const BLOB_TOKEN = process.env.BLOB_READ_WRITE_TOKEN;
const VOICE_ID = process.env.ELEVENLABS_VOICE_ID || "21m00Tcm4TlvDq8ikWAM";
const MODEL_ID = process.env.ELEVENLABS_MODEL_ID || "eleven_multilingual_v2";
const FORMAT = process.env.ELEVENLABS_FORMAT || "mp3_44100_64";

if (!API_KEY) { console.error("ELEVENLABS_API_KEY is not set. Aborting."); process.exit(1); }
if (!BLOB_TOKEN) { console.error("BLOB_READ_WRITE_TOKEN is required for the chaptered uploader. Aborting."); process.exit(1); }

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

function cleanTitle(h) {
  let t = h.replace(/[*_`]/g, "").trim();
  t = t.replace(/^Chapter\s*[—–-]\s*/i, "");
  t = t.replace(/,?\s*novelized.*$/i, "").trim();
  t = t.replace(/^Siempre Segundo\s*[—–-]\s*/i, "").trim();
  return t || h.replace(/[*_`#]/g, "").trim();
}

// Split the prose into chapters at any level-2 or level-3 heading. Pure-heading
// dividers (the structural top heading, Act breaks) have no body and are dropped;
// each real chapter is narrated as a clean spoken title followed by its text.
function splitChapters(prose) {
  const lines = prose.split("\n");
  const segs = [];
  let cur = null;
  for (const line of lines) {
    const m = /^(#{2,3})\s+(.*\S)\s*$/.exec(line);
    if (m) {
      if (cur) segs.push(cur);
      cur = { title: cleanTitle(m[2]), body: "" };
    } else {
      if (!cur) cur = { title: "Prologue", body: "" };
      cur.body += line + "\n";
    }
  }
  if (cur) segs.push(cur);
  return segs
    .map((s) => ({ title: s.title, bodySpeech: mdToSpeech(s.body) }))
    .filter((s) => s.bodySpeech.length > 0)
    .map((s) => ({ title: s.title, speech: `${s.title}.\n\n${s.bodySpeech}` }));
}

function slugify(s) {
  return s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "").slice(0, 40) || "chapter";
}

// Split a chapter's narration into ≤2400-char TTS calls at sentence boundaries.
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

function readManifest() {
  try { return JSON.parse(fs.readFileSync(MANIFEST_FILE, "utf-8")); }
  catch { return { generatedAt: null, chapters: [] }; }
}

// Stitch the per-chapter seekable MP3s already on disk into ONE seekable file,
// upload it, and record it as manifest.full — a single-file download / offline play.
// No ElevenLabs calls. (AUDIOBOOK_COMBINE=1)
async function combineFull() {
  const m = readManifest();
  if (!m.chapters?.length) { console.error("No manifest chapters to combine. Run a full generation first."); process.exit(1); }
  const n = m.chapters.length;
  fs.mkdirSync(BUILD_DIR, { recursive: true });
  const lines = [];
  for (let i = 1; i <= n; i++) {
    const f = path.join(BUILD_DIR, `ch-${String(i).padStart(3, "0")}-seek.mp3`);
    if (!fs.existsSync(f)) { console.error(`Missing local chapter file: ${f}`); process.exit(1); }
    lines.push(`file '${f.replace(/\\/g, "/")}'`);
  }
  const listPath = path.join(BUILD_DIR, "concat-list.txt");
  fs.writeFileSync(listPath, lines.join("\n") + "\n", "utf-8");
  const fullPath = path.join(BUILD_DIR, "siempre-segundo-full.mp3");
  console.log(`Concatenating ${n} chapters into one seekable MP3 (ffmpeg)…`);
  execFileSync(ffmpegPath, ["-y", "-f", "concat", "-safe", "0", "-i", listPath, "-c:a", "libmp3lame", "-b:a", "64k", "-write_xing", "1", fullPath], { stdio: "ignore" });
  const buf = fs.readFileSync(fullPath);
  console.log(`Combined ${(buf.length / 1024 / 1024).toFixed(1)} MB. Uploading…`);
  const blob = await put("studio/siempre-segundo-full.mp3", buf, { access: "public", contentType: "audio/mpeg", addRandomSuffix: true, token: BLOB_TOKEN });
  m.full = { url: blob.url, bytes: buf.length };
  fs.writeFileSync(MANIFEST_FILE, JSON.stringify(m, null, 2) + "\n", "utf-8");
  console.log(`Full audiobook:\n  ${blob.url}`);
  console.log(`Manifest updated with .full — commit secured-docs/siempre-segundo.audio.json.`);
}

async function main() {
  if (process.env.AUDIOBOOK_COMBINE === "1") { await combineFull(); return; }

  const md = fs.readFileSync(SRC, "utf-8");
  let chapters = splitChapters(extractProse(md));
  const LIMIT = parseInt(process.env.AUDIOBOOK_LIMIT || "0", 10);
  if (LIMIT > 0) chapters = chapters.slice(0, LIMIT);

  const RESUME = parseInt(process.env.AUDIOBOOK_RESUME_FROM || "0", 10);
  const startIdx = RESUME > 0 ? RESUME - 1 : 0;

  fs.mkdirSync(BUILD_DIR, { recursive: true });

  // Resume keeps prior manifest entries; a fresh run starts the manifest clean.
  const prior = startIdx > 0 ? readManifest().chapters : [];
  const byIndex = new Map(prior.map((c) => [c.i, c]));

  console.log(`${chapters.length} chapters @ ${FORMAT}${startIdx > 0 ? ` — RESUMING from chapter ${RESUME}` : ""}`);
  let totalChars = 0;

  for (let i = startIdx; i < chapters.length; i++) {
    const ch = chapters[i];
    const parts = chunk(ch.speech);
    totalChars += ch.speech.length;
    const buffers = [];
    for (let j = 0; j < parts.length; j++) {
      const audio = await tts(parts[j], parts[j - 1], parts[j + 1]);
      buffers.push(audio);
    }
    const tag = String(i + 1).padStart(3, "0");
    const rawPath = path.join(BUILD_DIR, `ch-${tag}.mp3`);
    fs.writeFileSync(rawPath, Buffer.concat(buffers));
    const fixedPath = path.join(BUILD_DIR, `ch-${tag}-seek.mp3`);
    execFileSync(ffmpegPath, ["-y", "-i", rawPath, "-c:a", "libmp3lame", "-b:a", "64k", "-write_xing", "1", fixedPath], { stdio: "ignore" });

    const buf = fs.readFileSync(fixedPath);
    const blob = await put(`studio/chapters/${tag}-${slugify(ch.title)}.mp3`, buf, {
      access: "public",
      contentType: "audio/mpeg",
      addRandomSuffix: true,
      token: BLOB_TOKEN,
    });
    byIndex.set(i, { i, title: ch.title, url: blob.url });

    // Write the manifest after every chapter, so a crash never loses progress.
    const list = [...byIndex.values()].sort((a, b) => a.i - b.i);
    fs.writeFileSync(MANIFEST_FILE, JSON.stringify({ generatedAt: new Date().toISOString(), chapters: list }, null, 2) + "\n", "utf-8");
    console.log(`  ${tag}/${String(chapters.length).padStart(3, "0")}  ${ch.title}  (${parts.length} call${parts.length > 1 ? "s" : ""}, ${(buf.length / 1024).toFixed(0)} KB)`);
  }

  console.log(`\nDone. ${byIndex.size} chapters in manifest, ~${totalChars.toLocaleString()} chars narrated this run.`);
  console.log(`Manifest: ${path.relative(ROOT, MANIFEST_FILE)}`);
  console.log(`Next: commit secured-docs/siempre-segundo.audio.json and push — the /studio/prose chapter player lights up automatically.`);
}

main().catch((e) => { console.error("\n", e); process.exit(1); });

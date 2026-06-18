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
//   AUDIOBOOK_REMUX_M4B=1 fix an existing .m4b: relocate moov to the front
//                            (+faststart) so streaming apps read chapters without
//                            full buffering. No TTS, no re-encode; repoints manifest.

import fs from "fs";
import path from "path";
import crypto from "crypto";
import { fileURLToPath } from "url";
import { execFileSync } from "child_process";
import { put, list, del } from "@vercel/blob";
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
    .replace(/©/g, "") // the glyph; TTS would read it as the word "copyright"
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

// Read a media file's duration (ms) by parsing ffmpeg's stderr (ffmpeg-static
// ships no ffprobe). `ffmpeg -i FILE` with no output exits non-zero and prints
// "Duration: HH:MM:SS.ss" to stderr.
function durationMs(file) {
  let err = "";
  try { execFileSync(ffmpegPath, ["-i", file], { stdio: ["ignore", "ignore", "pipe"] }); }
  catch (e) { err = (e.stderr || e.stdout || "").toString(); }
  const m = /Duration:\s*(\d+):(\d+):(\d+(?:\.\d+)?)/.exec(err);
  if (!m) throw new Error(`No duration parsed for ${file}`);
  return Math.round((parseInt(m[1], 10) * 3600 + parseInt(m[2], 10) * 60 + parseFloat(m[3])) * 1000);
}

// Set the MP4 major_brand to "M4B " (audiobook) in place. ffmpeg's ipod muxer
// writes "M4A " (music), which makes iOS Apple Books — and strict audiobook apps —
// refuse the file or route it to Music. The brand is 4 bytes at offset 8, right
// after the leading `ftyp` box, so this is a tiny in-place write (no rewrite of the
// ~250MB file). The "M4A " compatible-brand stays for fallback players.
function brandAsAudiobook(file) {
  const fd = fs.openSync(file, "r+");
  try {
    const head = Buffer.alloc(8);
    fs.readSync(fd, head, 0, 8, 0);
    if (head.toString("latin1", 4, 8) !== "ftyp") { console.warn("WARN: no leading ftyp box; skipping M4B brand patch."); return; }
    fs.writeSync(fd, Buffer.from("M4B "), 0, 4, 8);
  } finally { fs.closeSync(fd); }
}

// Build a single .m4b audiobook from the per-chapter MP3s on disk: AAC audio in an
// MP4 container with real chapter markers + title/album, so Apple Books (and any
// audiobook app) treats it as a proper audiobook — chapter list, cover, and
// auto-resume. No ElevenLabs calls. (AUDIOBOOK_M4B=1)
async function combineM4b() {
  const m = readManifest();
  if (!m.chapters?.length) { console.error("No manifest chapters. Run a full generation first."); process.exit(1); }
  const n = m.chapters.length;
  fs.mkdirSync(BUILD_DIR, { recursive: true });

  let meta = ";FFMETADATA1\ntitle=Siempre Segundo\nalbum=Siempre Segundo\nartist=Siempre Segundo\ngenre=Audiobook\n";
  const listLines = [];
  let start = 0;
  console.log(`Measuring ${n} chapters…`);
  for (let i = 1; i <= n; i++) {
    const f = path.join(BUILD_DIR, `ch-${String(i).padStart(3, "0")}-seek.mp3`);
    if (!fs.existsSync(f)) { console.error(`Missing local chapter file: ${f}`); process.exit(1); }
    const dur = durationMs(f);
    listLines.push(`file '${f.replace(/\\/g, "/")}'`);
    const end = start + dur;
    const title = (m.chapters[i - 1]?.title || `Chapter ${i}`).replace(/[\r\n=;#]/g, " ").trim();
    meta += `[CHAPTER]\nTIMEBASE=1/1000\nSTART=${start}\nEND=${end}\ntitle=${title}\n`;
    start = end;
  }
  const listPath = path.join(BUILD_DIR, "m4b-list.txt");
  const metaPath = path.join(BUILD_DIR, "chapters.ffmeta");
  fs.writeFileSync(listPath, listLines.join("\n") + "\n", "utf-8");
  fs.writeFileSync(metaPath, meta, "utf-8");
  const outPath = path.join(BUILD_DIR, "siempre-segundo.m4b");
  console.log(`Encoding .m4b with ${n} chapter markers (ffmpeg → AAC)…`);
  execFileSync(ffmpegPath, ["-y", "-f", "concat", "-safe", "0", "-i", listPath, "-i", metaPath, "-map", "0:a", "-map_metadata", "1", "-map_chapters", "1", "-c:a", "aac", "-b:a", "64k", "-movflags", "+faststart", outPath], { stdio: "ignore" });
  brandAsAudiobook(outPath);
  const buf = fs.readFileSync(outPath);
  console.log(`Built ${(buf.length / 1024 / 1024).toFixed(1)} MB .m4b. Uploading…`);
  const blob = await put("studio/siempre-segundo.m4b", buf, { access: "public", contentType: "audio/mp4", addRandomSuffix: true, token: BLOB_TOKEN });
  m.m4b = { url: blob.url, bytes: buf.length };
  fs.writeFileSync(MANIFEST_FILE, JSON.stringify(m, null, 2) + "\n", "utf-8");
  console.log(`Audiobook (.m4b):\n  ${blob.url}`);
  console.log(`Manifest updated with .m4b — commit secured-docs/siempre-segundo.audio.json.`);
}

// Delete every studio/ Blob NOT referenced by the current chapter manifest — the
// stale single-file MP3, the combined MP3, orphaned smoke-test chapters — to stay
// Cheap fix for an already-uploaded .m4b: download it, relocate the moov atom to
// the front (+faststart) so streaming audiobook apps can read the chapter index
// without buffering the whole file, and re-upload. No TTS, no re-encode (-c copy
// keeps the AAC audio + chapter text track + markers byte-for-byte). The old Blob
// is deleted and the manifest is repointed. (AUDIOBOOK_REMUX_M4B=1)
async function remuxM4b() {
  const m = readManifest();
  if (!m.m4b?.url) { console.error("No .m4b in the manifest to remux. Build one first (AUDIOBOOK_M4B=1)."); process.exit(1); }
  fs.mkdirSync(BUILD_DIR, { recursive: true });
  const inPath = path.join(BUILD_DIR, "remux-in.m4b");
  const outPath = path.join(BUILD_DIR, "remux-out.m4b");
  console.log(`Downloading current .m4b (~${((m.m4b.bytes || 0) / 1024 / 1024).toFixed(1)} MB)…`);
  const res = await fetch(m.m4b.url);
  if (!res.ok) { console.error(`Download failed: HTTP ${res.status}`); process.exit(1); }
  fs.writeFileSync(inPath, Buffer.from(await res.arrayBuffer()));
  console.log("Remuxing with +faststart (no re-encode)…");
  // Map only the audio and copy it; ffmpeg regenerates the QuickTime chapter track
  // from the (preserved) chapter metadata. Mapping the existing text track here
  // makes the ipod/.m4b muxer reject the copy ("Tag text incompatible…").
  execFileSync(ffmpegPath, ["-y", "-i", inPath, "-map", "0:a", "-c:a", "copy", "-movflags", "+faststart", outPath], { stdio: "ignore" });
  brandAsAudiobook(outPath);
  const buf = fs.readFileSync(outPath);
  console.log(`Remuxed ${(buf.length / 1024 / 1024).toFixed(1)} MB. Uploading…`);
  const oldUrl = m.m4b.url;
  const blob = await put("studio/siempre-segundo.m4b", buf, { access: "public", contentType: "audio/mp4", addRandomSuffix: true, token: BLOB_TOKEN });
  m.m4b = { url: blob.url, bytes: buf.length };
  fs.writeFileSync(MANIFEST_FILE, JSON.stringify(m, null, 2) + "\n", "utf-8");
  if (oldUrl !== blob.url) { try { await del(oldUrl, { token: BLOB_TOKEN }); console.log(`Deleted old .m4b.`); } catch {} }
  console.log(`.m4b remuxed + uploaded:\n  ${blob.url}\nCommit secured-docs/siempre-segundo.audio.json to deploy.`);
}

// under the Blob quota. (AUDIOBOOK_PRUNE=1) Drops the now-dead .full pointer too.
async function prune() {
  const m = readManifest();
  const keep = new Set();
  for (const c of m.chapters || []) if (c?.url) keep.add(new URL(c.url).pathname.replace(/^\//, ""));
  for (const ref of [m.m4b, m.full]) if (ref?.url) keep.add(new URL(ref.url).pathname.replace(/^\//, ""));
  let cursor, deleted = 0, kept = 0, freed = 0;
  do {
    const res = await list({ token: BLOB_TOKEN, cursor, prefix: "studio/" });
    for (const b of res.blobs) {
      if (keep.has(b.pathname)) { kept++; continue; }
      await del(b.url, { token: BLOB_TOKEN });
      console.log(`  deleted ${b.pathname} (${(b.size / 1024 / 1024).toFixed(1)} MB)`);
      deleted++; freed += b.size;
    }
    cursor = res.cursor;
  } while (cursor);
  console.log(`Pruned: kept ${kept} referenced blobs, deleted ${deleted} orphans (${(freed / 1024 / 1024).toFixed(1)} MB freed).`);
}

// Diff-aware regen. AUDIOBOOK_SYNC=<git-ref> (the ref the live audiobook was last
// generated from) — re-narrates ONLY chapters whose narration text changed vs that
// ref, reuses the existing Blob MP3s for the rest, and rebuilds the manifest + .m4b.
// AUDIOBOOK_DRYRUN=1 just lists what changed (no narration, no upload, no spend).
async function syncFromRef(ref) {
  const DRY = process.env.AUDIOBOOK_DRYRUN === "1";
  const oldMd = execFileSync("git", ["show", `${ref}:apps/web/secured-docs/SIEMPRE_SEGUNDO.md`], { encoding: "utf8", maxBuffer: 64 * 1024 * 1024 });
  const oldChapters = splitChapters(extractProse(oldMd));
  const curChapters = splitChapters(extractProse(fs.readFileSync(SRC, "utf-8")));
  const m = readManifest();
  if (!m.chapters?.length) { console.error("No manifest to sync against. Aborting."); process.exit(1); }
  if (oldChapters.length !== m.chapters.length) {
    console.warn(`WARN: split at ${ref} = ${oldChapters.length} but manifest = ${m.chapters.length}; URL reuse maps by position.`);
  }

  const sha = (s) => crypto.createHash("sha1").update(s).digest("hex");
  const urlByHash = new Map();
  oldChapters.forEach((c, i) => { const u = m.chapters[i]?.url; if (u) urlByHash.set(sha(c.speech), u); });

  const changed = curChapters.filter((c) => !urlByHash.has(sha(c.speech)));
  console.log(`${curChapters.length} chapters now; ${changed.length} changed/new, ${curChapters.length - changed.length} unchanged (reused).`);
  console.log("Will re-narrate:");
  changed.forEach((c) => console.log(`  - ${c.title}`));
  if (DRY) { console.log("\nDRY RUN — nothing narrated, uploaded, or spent."); return; }

  fs.mkdirSync(BUILD_DIR, { recursive: true });
  const newChapters = [];
  let narrated = 0, reused = 0, chars = 0;
  for (let i = 0; i < curChapters.length; i++) {
    const ch = curChapters[i];
    const tag = String(i + 1).padStart(3, "0");
    const seekPath = path.join(BUILD_DIR, `sync-${tag}-seek.mp3`);
    let url = urlByHash.get(sha(ch.speech));
    if (url) {
      const res = await fetch(url);
      if (!res.ok) throw new Error(`fetch ${url} -> ${res.status}`);
      fs.writeFileSync(seekPath, Buffer.from(await res.arrayBuffer()));
      reused++;
    } else {
      const parts = chunk(ch.speech); chars += ch.speech.length;
      const buffers = [];
      for (let j = 0; j < parts.length; j++) buffers.push(await tts(parts[j], parts[j - 1], parts[j + 1]));
      const rawPath = path.join(BUILD_DIR, `sync-${tag}.mp3`);
      fs.writeFileSync(rawPath, Buffer.concat(buffers));
      execFileSync(ffmpegPath, ["-y", "-i", rawPath, "-c:a", "libmp3lame", "-b:a", "64k", "-write_xing", "1", seekPath], { stdio: "ignore" });
      const blob = await put(`studio/chapters/${tag}-${slugify(ch.title)}.mp3`, fs.readFileSync(seekPath), { access: "public", contentType: "audio/mpeg", addRandomSuffix: true, token: BLOB_TOKEN });
      url = blob.url; narrated++;
      console.log(`  narrated ${tag} ${ch.title} (${parts.length} call${parts.length > 1 ? "s" : ""})`);
    }
    newChapters.push({ i, title: ch.title, url });
  }

  const out = { generatedAt: new Date().toISOString(), chapters: newChapters };
  fs.writeFileSync(MANIFEST_FILE, JSON.stringify(out, null, 2) + "\n", "utf-8");
  console.log(`Narration: ${narrated} re-narrated, ${reused} reused, ~${chars.toLocaleString()} chars billed.`);

  console.log("Rebuilding .m4b with chapter markers…");
  let meta = ";FFMETADATA1\ntitle=Siempre Segundo\nalbum=Siempre Segundo\nartist=Siempre Segundo\ngenre=Audiobook\n";
  const listLines = [];
  let start = 0;
  for (let i = 0; i < curChapters.length; i++) {
    const f = path.join(BUILD_DIR, `sync-${String(i + 1).padStart(3, "0")}-seek.mp3`);
    const dur = durationMs(f);
    listLines.push(`file '${f.replace(/\\/g, "/")}'`);
    const end = start + dur;
    meta += `[CHAPTER]\nTIMEBASE=1/1000\nSTART=${start}\nEND=${end}\ntitle=${(curChapters[i].title || `Chapter ${i + 1}`).replace(/[\r\n=;#]/g, " ").trim()}\n`;
    start = end;
  }
  const listPath = path.join(BUILD_DIR, "sync-m4b-list.txt");
  const metaPath = path.join(BUILD_DIR, "sync-chapters.ffmeta");
  fs.writeFileSync(listPath, listLines.join("\n") + "\n", "utf-8");
  fs.writeFileSync(metaPath, meta, "utf-8");
  const outPath = path.join(BUILD_DIR, "siempre-segundo.m4b");
  execFileSync(ffmpegPath, ["-y", "-f", "concat", "-safe", "0", "-i", listPath, "-i", metaPath, "-map", "0:a", "-map_metadata", "1", "-map_chapters", "1", "-c:a", "aac", "-b:a", "64k", "-movflags", "+faststart", outPath], { stdio: "ignore" });
  brandAsAudiobook(outPath);
  const buf = fs.readFileSync(outPath);
  const blob = await put("studio/siempre-segundo.m4b", buf, { access: "public", contentType: "audio/mp4", addRandomSuffix: true, token: BLOB_TOKEN });
  out.m4b = { url: blob.url, bytes: buf.length };
  fs.writeFileSync(MANIFEST_FILE, JSON.stringify(out, null, 2) + "\n", "utf-8");
  console.log(`.m4b rebuilt + uploaded:\n  ${blob.url}`);

  console.log("Auto-pruning orphaned blobs (the previous .m4b + superseded chapter versions)…");
  await prune();
  console.log(`Manifest updated — commit secured-docs/siempre-segundo.audio.json.`);
}

async function main() {
  if (process.env.AUDIOBOOK_LIST === "1") {
    let cursor, total = 0; const all = [];
    do {
      const res = await list({ token: BLOB_TOKEN, cursor, prefix: "studio/" });
      for (const b of res.blobs) { all.push(b); total += b.size; }
      cursor = res.cursor;
    } while (cursor);
    all.sort((a, b) => b.size - a.size);
    for (const b of all) console.log(`${(b.size / 1024 / 1024).toFixed(1).padStart(7)} MB  ${b.pathname}`);
    console.log(`TOTAL: ${(total / 1024 / 1024).toFixed(1)} MB across ${all.length} blobs`);
    return;
  }
  if (process.env.AUDIOBOOK_SYNC) { await syncFromRef(process.env.AUDIOBOOK_SYNC); return; }
  // AUDIOBOOK_DELETE="url1,url2" — delete exactly these named Blob objects (user-
  // authorized cleanup of specific obsolete files). Drops a matching .full pointer.
  if (process.env.AUDIOBOOK_DELETE) {
    const urls = process.env.AUDIOBOOK_DELETE.split(",").map((s) => s.trim()).filter(Boolean);
    for (const u of urls) { await del(u, { token: BLOB_TOKEN }); console.log(`deleted ${u}`); }
    const m = readManifest();
    if (m.full && urls.includes(m.full.url)) { delete m.full; fs.writeFileSync(MANIFEST_FILE, JSON.stringify(m, null, 2) + "\n", "utf-8"); }
    return;
  }
  if (process.env.AUDIOBOOK_PRUNE === "1") { await prune(); return; }
  if (process.env.AUDIOBOOK_REMUX_M4B === "1") { await remuxM4b(); return; }
  if (process.env.AUDIOBOOK_M4B === "1") { await combineM4b(); return; }
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

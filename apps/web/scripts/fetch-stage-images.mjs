// One-off fetcher: pulls free-licensed Wikimedia Commons images for new-epoch
// stages, filtering by free license + named author and excluding bad subjects,
// downloads them to public/img/<id>.<ext>, and writes an attribution sidecar.
// Usage: node scripts/fetch-stage-images.mjs [idPrefix]   (e.g. "ot" or "all")
// VERIFY each image visually before wiring STAGE_IMAGES — auto-search can mis-hit.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const IMG_DIR = path.join(__dirname, "..", "public", "img");
const ATTRIB = path.join(__dirname, ".img-attrib.json");
const UA = "KryptosCronos-image-fetch/1.0 (educational; contact jjbolotin@yahoo.com)";

// [id, query, badwords-csv] — RE-FETCH set (misses + rejected mismatches)
const TARGETS = [
  ["r2-03", "automated warehouse storage robots", "diagram,logo,map,construction,corridor,building,plan"],
  ["r2-05", "military quadcopter drone uav", "diagram,logo,map,toy,emblem,patch"],
  ["s2-01", "telecommunications satellite spacecraft", "diagram,logo,map,ship,saturn,planet,jupiter,moon,galaxy,nebula,earth,sun"],
  ["s2-10", "blue marble earth from space", "diagram,logo,map,ship,night"],
];

const FREE = /(^cc0|^cc[ -]?by|public domain|^pd|^attribution$)/i;

function stripHtml(s) {
  return (s || "").replace(/<[^>]*>/g, "").replace(/\s+/g, " ").trim();
}

async function api(query) {
  const url = "https://commons.wikimedia.org/w/api.php?action=query&format=json&generator=search" +
    "&gsrsearch=" + encodeURIComponent(query) +
    "&gsrnamespace=6&gsrlimit=20&prop=imageinfo&iiprop=url%7Cextmetadata&iiurlwidth=1100";
  const r = await fetch(url, { headers: { "User-Agent": UA } });
  if (!r.ok) throw new Error("API " + r.status);
  const j = await r.json();
  return Object.values(j?.query?.pages || {});
}

function pick(pages, bad) {
  const badRe = bad.length ? new RegExp(bad.join("|"), "i") : null;
  for (const p of pages) {
    const ii = p.imageinfo?.[0];
    if (!ii) continue;
    const title = p.title || "";
    if (!/\.(jpe?g|png)$/i.test(title)) continue;
    if (badRe && badRe.test(title)) continue;
    const m = ii.extmetadata || {};
    const lic = (m.License?.value || "") + " " + (m.LicenseShortName?.value || "");
    if (!FREE.test(lic)) continue;
    const artist = stripHtml(m.Artist?.value);
    const isPD = /public domain|^cc0|^pd/i.test(lic);
    if (!artist && !isPD) continue;
    const thumb = ii.thumburl || ii.url;
    if (!thumb) continue;
    const w = ii.thumbwidth || 0, h = ii.thumbheight || 0;
    if (w && h && h > w * 1.15) continue; // skip very tall/portrait
    return {
      title: title.replace(/^File:/, ""),
      artist: artist || "Public domain",
      license: stripHtml(m.LicenseShortName?.value) || stripHtml(m.License?.value) || "Public domain",
      descUrl: ii.descriptionurl || ("https://commons.wikimedia.org/wiki/" + encodeURIComponent(title)),
      thumb,
    };
  }
  return null;
}

async function download(thumb, dest) {
  const r = await fetch(thumb, { headers: { "User-Agent": UA } });
  if (!r.ok) throw new Error("DL " + r.status);
  const buf = Buffer.from(await r.arrayBuffer());
  fs.writeFileSync(dest, buf);
  return buf.length;
}

const only = process.argv[2] || "all";
const attrib = fs.existsSync(ATTRIB) ? JSON.parse(fs.readFileSync(ATTRIB, "utf8")) : {};
const stageLines = [];

for (const [id, query, badCsv] of TARGETS) {
  if (only !== "all" && !id.startsWith(only)) continue;
  try {
    const pages = await api(query);
    const hit = pick(pages, (badCsv || "").split(",").filter(Boolean));
    if (!hit) { console.log(`MISS  ${id}  (no free hit) "${query}"`); continue; }
    const ext = /\.png$/i.test(hit.thumb) ? "png" : "jpg";
    const file = `${id}.${ext}`;
    const bytes = await download(hit.thumb, path.join(IMG_DIR, file));
    attrib[id] = { file, title: hit.title, artist: hit.artist, license: hit.license, source: hit.descUrl };
    stageLines.push(`  "${id}": "/img/${file}",`);
    console.log(`OK    ${id}  ${file}  ${(bytes / 1024 | 0)}KB  | ${hit.title} — ${hit.artist} (${hit.license})`);
  } catch (e) {
    console.log(`ERR   ${id}  ${e.message}`);
  }
}

fs.writeFileSync(ATTRIB, JSON.stringify(attrib, null, 2));
console.log("\n--- STAGE_IMAGES lines ---\n" + stageLines.join("\n"));
console.log("\nattrib sidecar -> " + ATTRIB);

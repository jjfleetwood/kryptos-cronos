"use client";

// TEMPORARY design-review page for the generated stage cover (the "block of
// color" shown on stages with no real photo). Renders the CURRENT cover beside
// redesigned variants across diverse sample stages so the direction can be
// picked visually. DELETE this file once a variant is chosen and applied to
// components/GeneratedCover.tsx.

/* eslint-disable @typescript-eslint/no-explicit-any */

function hashStr(seed: string): number {
  let h = 0;
  for (let i = 0; i < seed.length; i++) h = (h * 31 + seed.charCodeAt(i)) | 0;
  return h;
}
const CATEGORY_BAND: Record<string, [number, number]> = {
  cybersecurity: [198, 16], ai: [278, 16], owasp: [28, 12],
  arts: [330, 18], driving: [42, 10], health: [172, 12], sports: [150, 12],
};
function hueFor(seed: string, category?: string): number {
  const band = category ? CATEGORY_BAND[category] : undefined;
  const h = Math.abs(hashStr(seed));
  if (band) { const [c, s] = band; return (((c + (h % (s * 2)) - s) % 360) + 360) % 360; }
  return ((h % 360) + 360) % 360;
}
function mulberry32(a: number) {
  return () => {
    a |= 0; a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
const VW = 400, VH = 225;

type Props = { title: string; label?: string; emoji: string; seed: string; order?: number; category?: string };

function Shell({ children, bg, title }: any) {
  return (
    <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-white/10 ring-1 ring-white/5 shadow-[0_10px_45px_rgba(0,0,0,0.45)]"
      style={{ background: bg }} role="img" aria-label={title}>
      {children}
    </div>
  );
}

function Foreground({ label, emoji, title, order, accent }: any) {
  return (
    <div className="relative z-10 flex h-full flex-col justify-between p-5 sm:p-6">
      {label ? (
        <span className="max-w-[70%] self-start truncate rounded border px-2.5 py-1 font-mono text-[0.7rem] uppercase tracking-wider backdrop-blur"
          style={{ borderColor: `${accent}66`, color: accent, background: `${accent}14` }}>{label}</span>
      ) : <span />}
      <div className="flex items-center gap-3 sm:gap-4">
        <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl text-3xl sm:h-16 sm:w-16 sm:text-4xl"
          style={{ border: `1px solid ${accent}55`, background: `${accent}1a`, boxShadow: `0 0 24px ${accent}40` }}>{emoji}</div>
        <h3 className="text-xl font-bold leading-tight text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)] sm:text-2xl" style={{ fontFamily: "var(--font-display)" }}>{title}</h3>
      </div>
      <div className="flex items-center justify-between font-mono text-[0.65rem] uppercase tracking-[0.18em]" style={{ color: `${accent}aa` }}>
        <span>Kryptós CronOS</span>{order != null && <span>Stage {order}</span>}
      </div>
    </div>
  );
}

// ── CURRENT (as shipped) ────────────────────────────────────────────────────
function Current({ title, label, emoji, seed, order, category }: Props) {
  const hue = hueFor(seed, category);
  const accent = `hsl(${hue} 90% 63%)`;
  const bg = `linear-gradient(135deg, hsl(${hue} 42% 11%) 0%, hsl(${hue} 48% 5%) 100%)`;
  const rnd = mulberry32(hashStr(`${seed}|${title}`));
  const paths: string[] = []; const nodes: [number, number][] = [];
  const count = 5 + Math.floor(rnd() * 3);
  for (let i = 0; i < count; i++) {
    const fs = Math.floor(rnd() * 4);
    let x = fs === 1 ? VW : fs === 3 ? 0 : Math.round(rnd() * VW);
    let y = fs === 0 ? 0 : fs === 2 ? VH : Math.round(rnd() * VH);
    let h = fs === 1 || fs === 3; let d = `M${x} ${y}`;
    const segs = 2 + Math.floor(rnd() * 2);
    for (let j = 0; j < segs; j++) {
      if (h) { x = Math.max(8, Math.min(VW - 8, x + Math.round((rnd() - 0.5) * 230))); d += ` H${x}`; }
      else { y = Math.max(8, Math.min(VH - 8, y + Math.round((rnd() - 0.5) * 170))); d += ` V${y}`; }
      h = !h;
    }
    paths.push(d); nodes.push([x, y]);
  }
  return (
    <Shell bg={bg} title={title}>
      <svg className="absolute inset-0 h-full w-full opacity-50" preserveAspectRatio="none" viewBox={`0 0 ${VW} ${VH}`} style={{ filter: `drop-shadow(0 0 4px ${accent})` }} aria-hidden>
        <g stroke={accent} strokeWidth="1" fill="none" opacity="0.55">{paths.map((d, i) => <path key={i} d={d} />)}</g>
        {nodes.map(([x, y], i) => <circle key={i} cx={x} cy={y} r="3.5" fill={accent} />)}
      </svg>
      <div className="pointer-events-none absolute -bottom-8 -right-3 select-none text-[10rem] leading-none opacity-[0.08]">{emoji}</div>
      <Foreground label={label} emoji={emoji} title={title} order={order} accent={accent} />
    </Shell>
  );
}

// ── V1 "Vivid Circuit" — same motif, dialed up: lighter bg, bolder bright
//     traces, glowing nodes, dot-grid, far more visible emoji watermark ───────
function VividCircuit({ title, label, emoji, seed, order, category }: Props) {
  const hue = hueFor(seed, category);
  const accent = `hsl(${hue} 92% 66%)`;
  const bg = `linear-gradient(135deg, hsl(${hue} 50% 16%) 0%, hsl(${(hue + 24) % 360} 55% 8%) 100%)`;
  const rnd = mulberry32(hashStr(`${seed}|${title}`));
  const paths: string[] = []; const nodes: [number, number][] = [];
  const count = 6 + Math.floor(rnd() * 3);
  for (let i = 0; i < count; i++) {
    const fs = Math.floor(rnd() * 4);
    let x = fs === 1 ? VW : fs === 3 ? 0 : Math.round(rnd() * VW);
    let y = fs === 0 ? 0 : fs === 2 ? VH : Math.round(rnd() * VH);
    let h = fs === 1 || fs === 3; let d = `M${x} ${y}`;
    const segs = 2 + Math.floor(rnd() * 2);
    for (let j = 0; j < segs; j++) {
      if (h) { x = Math.max(8, Math.min(VW - 8, x + Math.round((rnd() - 0.5) * 230))); d += ` H${x}`; }
      else { y = Math.max(8, Math.min(VH - 8, y + Math.round((rnd() - 0.5) * 170))); d += ` V${y}`; }
      h = !h;
    }
    paths.push(d); nodes.push([x, y]);
  }
  return (
    <Shell bg={bg} title={title}>
      <div className="absolute inset-0" style={{ backgroundImage: `radial-gradient(${accent}22 1px, transparent 1px)`, backgroundSize: "18px 18px", opacity: 0.5 }} aria-hidden />
      <svg className="absolute inset-0 h-full w-full" preserveAspectRatio="none" viewBox={`0 0 ${VW} ${VH}`} style={{ filter: `drop-shadow(0 0 6px ${accent})` }} aria-hidden>
        <g stroke={accent} strokeWidth="1.6" fill="none" opacity="0.95" strokeLinecap="round">{paths.map((d, i) => <path key={i} d={d} />)}</g>
        {nodes.map(([x, y], i) => <g key={i}><circle cx={x} cy={y} r="6" fill={accent} opacity="0.25" /><circle cx={x} cy={y} r="3" fill={accent} /></g>)}
      </svg>
      <div className="pointer-events-none absolute -bottom-10 -right-4 select-none text-[11rem] leading-none opacity-[0.20]" style={{ filter: `drop-shadow(0 0 30px ${accent})` }}>{emoji}</div>
      <Foreground label={label} emoji={emoji} title={title} order={order} accent={accent} />
    </Shell>
  );
}

// ── V2 "Aurora Mesh" — layered radial color blobs around the base hue, soft and
//     colorful; clearly NOT a flat block. Big ghost emoji, faint geometry ──────
function AuroraMesh({ title, label, emoji, seed, order, category }: Props) {
  const hue = hueFor(seed, category);
  const accent = `hsl(${hue} 92% 70%)`;
  const h2 = (hue + 40) % 360, h3 = (hue + 320) % 360;
  const rnd = mulberry32(hashStr(`${seed}|${title}`));
  const blob = (hh: number) => `radial-gradient(circle at ${20 + Math.round(rnd() * 60)}% ${15 + Math.round(rnd() * 70)}%, hsl(${hh} 80% 45% / 0.55) 0%, transparent 45%)`;
  const bg = `${blob(hue)}, ${blob(h2)}, ${blob(h3)}, linear-gradient(135deg, hsl(${hue} 45% 10%), hsl(${(hue + 20) % 360} 50% 5%))`;
  return (
    <Shell bg={bg} title={title}>
      <div className="absolute inset-0 backdrop-blur-[2px]" aria-hidden />
      <svg className="absolute inset-0 h-full w-full opacity-[0.18]" preserveAspectRatio="none" viewBox={`0 0 ${VW} ${VH}`} aria-hidden>
        <g stroke="#fff" strokeWidth="0.5" fill="none">
          {Array.from({ length: 4 }).map((_, i) => <line key={i} x1={0} y1={40 + i * 50} x2={VW} y2={20 + i * 55} />)}
        </g>
      </svg>
      <div className="pointer-events-none absolute -bottom-12 -right-6 select-none text-[12rem] leading-none opacity-[0.16]">{emoji}</div>
      <Foreground label={label} emoji={emoji} title={title} order={order} accent={accent} />
    </Shell>
  );
}

// ── V3 "Concept Graph" — a flowchart-like connected node graph (nods to the
//     user's "flowcharts"), light blueprint grid; great for conceptual stages ──
function ConceptGraph({ title, label, emoji, seed, order, category }: Props) {
  const hue = hueFor(seed, category);
  const accent = `hsl(${hue} 90% 66%)`;
  const bg = `linear-gradient(135deg, hsl(${hue} 38% 13%) 0%, hsl(${(hue + 18) % 360} 44% 7%) 100%)`;
  const rnd = mulberry32(hashStr(`${seed}|${title}|g`));
  const pts: [number, number][] = [];
  const n = 5 + Math.floor(rnd() * 2);
  for (let i = 0; i < n; i++) pts.push([30 + Math.round(rnd() * (VW - 60)), 30 + Math.round(rnd() * (VH - 60))]);
  const edges: [number, number][] = [];
  for (let i = 1; i < n; i++) edges.push([i, Math.floor(rnd() * i)]); // connected tree
  return (
    <Shell bg={bg} title={title}>
      <div className="absolute inset-0" style={{ backgroundImage: `linear-gradient(${accent}14 1px, transparent 1px), linear-gradient(90deg, ${accent}14 1px, transparent 1px)`, backgroundSize: "28px 28px", opacity: 0.6 }} aria-hidden />
      <svg className="absolute inset-0 h-full w-full" preserveAspectRatio="none" viewBox={`0 0 ${VW} ${VH}`} style={{ filter: `drop-shadow(0 0 5px ${accent})` }} aria-hidden>
        <g stroke={accent} strokeWidth="1.2" opacity="0.7">{edges.map(([a, b], i) => <line key={i} x1={pts[a][0]} y1={pts[a][1]} x2={pts[b][0]} y2={pts[b][1]} />)}</g>
        {pts.map(([x, y], i) => <g key={i}><circle cx={x} cy={y} r="7" fill={`hsl(${hue} 90% 66% / 0.18)`} /><circle cx={x} cy={y} r="4" fill={accent} /></g>)}
      </svg>
      <div className="pointer-events-none absolute -bottom-9 -right-3 select-none text-[10rem] leading-none opacity-[0.12]">{emoji}</div>
      <Foreground label={label} emoji={emoji} title={title} order={order} accent={accent} />
    </Shell>
  );
}

const SAMPLES: Props[] = [
  { title: "Initial Access", label: "Present Day", emoji: "🎯", seed: "mitre", order: 1, category: "cybersecurity" },
  { title: "Prompt Injection", label: "Present Day", emoji: "💉", seed: "owasp-llm", order: 1, category: "owasp" },
  { title: "Anatomy of an Agentic Workflow", label: "Present Day", emoji: "🗺️", seed: "tech-audit-5", order: 1, category: "ai" },
  { title: "The Qubit Awakens", label: "1935", emoji: "🪙", seed: "quantum-1", order: 1, category: "cybersecurity" },
  { title: "How Computers Really Work", label: "Present Day", emoji: "💻", seed: "computing-foundations", order: 1, category: "cybersecurity" },
  { title: "Foundations of Debate", label: "Classical Era", emoji: "🗣️", seed: "debate-1", order: 1, category: "arts" },
];

const VARIANTS: { name: string; note: string; Comp: (p: Props) => any }[] = [
  { name: "Current", note: "as shipped — dark, faint traces", Comp: Current },
  { name: "V1 · Vivid Circuit", note: "same motif, brighter + dot-grid + glow emoji", Comp: VividCircuit },
  { name: "V2 · Aurora Mesh", note: "soft color blobs, modern, not flat", Comp: AuroraMesh },
  { name: "V3 · Concept Graph", note: "flowchart-style node graph + blueprint grid", Comp: ConceptGraph },
];

export default function CoverLab() {
  return (
    <div className="min-h-screen px-4 py-12" style={{ background: "linear-gradient(135deg, #0d1117 0%, #0f2027 50%, #1a1a2e 100%)" }}>
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold text-white mb-1">Stage Cover Lab</h1>
        <p className="text-gray-400 text-sm mb-8">Temporary review page. {SAMPLES.length} sample stages × {VARIANTS.length} variants. Pick a column; I&apos;ll apply it to <code className="text-cyan-300">GeneratedCover.tsx</code> and delete this page.</p>
        <div className="grid mb-4" style={{ gridTemplateColumns: `repeat(${VARIANTS.length}, minmax(0, 1fr))`, gap: "1rem" }}>
          {VARIANTS.map((v) => (
            <div key={v.name} className="text-center">
              <div className="text-white font-bold text-sm">{v.name}</div>
              <div className="text-gray-500 text-xs">{v.note}</div>
            </div>
          ))}
        </div>
        <div className="space-y-4">
          {SAMPLES.map((s) => (
            <div key={s.seed} className="grid" style={{ gridTemplateColumns: `repeat(${VARIANTS.length}, minmax(0, 1fr))`, gap: "1rem" }}>
              {VARIANTS.map((v) => (
                <div key={v.name}><v.Comp {...s} /></div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

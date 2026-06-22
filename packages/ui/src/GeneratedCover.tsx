// A deterministic, on-brand "neon circuit" cover rendered for any stage that has
// no self-hosted/real image. Replaces the blank gap so every one of the 811
// stages shows a hero visual. Pure presentational — no client APIs, no network,
// no motion — so it is SSR-safe, responsive, and reduced-motion-safe.
//
// The hue is hashed from the epoch id (so all stages in an epoch share a colour
// family and epochs differ); the circuit traces are procedurally seeded from the
// stage itself, so every card within an epoch is visually distinct.

function hashStr(seed: string): number {
  let h = 0;
  for (let i = 0; i < seed.length; i++) h = (h * 31 + seed.charCodeAt(i)) | 0;
  return h;
}

// Brand-coherent hue bands per content category — each epoch gets a distinct hue
// WITHIN its category's band (security = cyan/blue, AI = violet, etc.), so covers
// stay on-brand while still varying epoch to epoch. Falls back to a full hash.
const CATEGORY_BAND: Record<string, [center: number, spread: number]> = {
  cybersecurity: [198, 16], // cyan → blue
  ai: [278, 16],            // violet → fuchsia
  owasp: [28, 12],          // orange
  arts: [330, 18],          // pink → rose
  driving: [42, 10],        // amber
  health: [172, 12],        // teal
  sports: [150, 12],        // emerald
};

function hueFor(seed: string, category?: string): number {
  const band = category ? CATEGORY_BAND[category] : undefined;
  const h = Math.abs(hashStr(seed));
  if (band) {
    const [center, spread] = band;
    return (((center + (h % (spread * 2)) - spread) % 360) + 360) % 360;
  }
  return ((h % 360) + 360) % 360;
}

function mulberry32(a: number) {
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const VW = 400;
const VH = 225;

// Deterministic Manhattan-routed "circuit" traces + end-of-trace node dots.
function buildCircuit(seed: string): { paths: string[]; nodes: Array<[number, number]> } {
  const rnd = mulberry32(hashStr(seed));
  const paths: string[] = [];
  const nodes: Array<[number, number]> = [];
  const count = 5 + Math.floor(rnd() * 3); // 5–7 traces
  for (let i = 0; i < count; i++) {
    const fromSide = Math.floor(rnd() * 4); // 0 top, 1 right, 2 bottom, 3 left
    let x = fromSide === 1 ? VW : fromSide === 3 ? 0 : Math.round(rnd() * VW);
    let y = fromSide === 0 ? 0 : fromSide === 2 ? VH : Math.round(rnd() * VH);
    let horizontal = fromSide === 1 || fromSide === 3; // enter perpendicular to the edge
    let d = `M${x} ${y}`;
    const segs = 2 + Math.floor(rnd() * 2);
    for (let j = 0; j < segs; j++) {
      if (horizontal) {
        x = Math.max(8, Math.min(VW - 8, x + Math.round((rnd() - 0.5) * 230)));
        d += ` H${x}`;
      } else {
        y = Math.max(8, Math.min(VH - 8, y + Math.round((rnd() - 0.5) * 170)));
        d += ` V${y}`;
      }
      horizontal = !horizontal;
    }
    paths.push(d);
    nodes.push([x, y]);
  }
  return { paths, nodes };
}

export default function GeneratedCover({
  title,
  label,
  emoji,
  seed,
  order,
  category,
}: {
  title: string;
  label?: string;
  emoji: string;
  seed: string;
  order?: number;
  category?: string;
}) {
  const hue = hueFor(seed, category);
  const accent = `hsl(${hue} 90% 63%)`;
  const bg = `linear-gradient(135deg, hsl(${hue} 42% 11%) 0%, hsl(${hue} 48% 5%) 100%)`;
  const { paths, nodes } = buildCircuit(`${seed}|${title}`);

  return (
    <div
      className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-white/10 ring-1 ring-white/5 shadow-[0_10px_45px_rgba(0,0,0,0.45)]"
      style={{ background: bg }}
      role="img"
      aria-label={title}
    >
      {/* circuit traces */}
      <svg
        className="absolute inset-0 h-full w-full opacity-50"
        preserveAspectRatio="none"
        viewBox={`0 0 ${VW} ${VH}`}
        style={{ filter: `drop-shadow(0 0 4px ${accent})` }}
        aria-hidden="true"
      >
        <g stroke={accent} strokeWidth="1" fill="none" opacity="0.55">
          {paths.map((d, i) => (
            <path key={i} d={d} />
          ))}
        </g>
        {nodes.map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r="3.5" fill={accent} />
        ))}
      </svg>

      {/* oversized emoji watermark */}
      <div className="pointer-events-none absolute -bottom-8 -right-3 select-none text-[10rem] leading-none opacity-[0.08]">
        {emoji}
      </div>

      {/* content */}
      <div className="relative z-10 flex h-full flex-col justify-between p-5 sm:p-6">
        {label ? (
          <span
            className="max-w-[70%] self-start truncate rounded border px-2.5 py-1 font-mono text-[0.7rem] uppercase tracking-wider backdrop-blur"
            style={{ borderColor: `${accent}66`, color: accent, background: `${accent}14` }}
          >
            {label}
          </span>
        ) : (
          <span />
        )}

        <div className="flex items-center gap-3 sm:gap-4">
          <div
            className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl text-3xl sm:h-16 sm:w-16 sm:text-4xl"
            style={{ border: `1px solid ${accent}55`, background: `${accent}1a`, boxShadow: `0 0 24px ${accent}40` }}
          >
            {emoji}
          </div>
          <h3
            className="text-xl font-bold leading-tight text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)] sm:text-2xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {title}
          </h3>
        </div>

        <div
          className="flex items-center justify-between font-mono text-[0.65rem] uppercase tracking-[0.18em]"
          style={{ color: `${accent}aa` }}
        >
          <span>Kryptós CronOS</span>
          {order != null && <span>Stage {order}</span>}
        </div>
      </div>
    </div>
  );
}

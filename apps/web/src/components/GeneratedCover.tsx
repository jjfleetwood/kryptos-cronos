// A deterministic, on-brand cover card rendered for any stage that has no
// self-hosted/real image. Replaces the blank gap (and the generic placeholder)
// so every one of the 801 stages shows a hero visual. Pure presentational —
// no client APIs, no network, no motion — so it is SSR-safe, responsive, and
// reduced-motion-safe by construction. The gradient hue is hashed from the
// epoch id so all stages in an epoch share a colour family and epochs differ.

function hashHue(seed: string): number {
  let h = 0;
  for (let i = 0; i < seed.length; i++) h = (h * 31 + seed.charCodeAt(i)) | 0;
  return ((h % 360) + 360) % 360;
}

export default function GeneratedCover({
  title,
  label,
  emoji,
  seed,
  order,
}: {
  title: string;
  label?: string;
  emoji: string;
  seed: string;
  order?: number;
}) {
  const h1 = hashHue(seed);
  const h2 = (h1 + 38) % 360;
  const bg = `linear-gradient(135deg, hsl(${h1} 64% 17%) 0%, hsl(${h2} 58% 9%) 100%)`;

  return (
    <div
      className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-white/10 ring-1 ring-white/5 shadow-[0_10px_45px_rgba(0,0,0,0.45)]"
      style={{ background: bg }}
      role="img"
      aria-label={title}
    >
      {/* dot grid texture */}
      <div
        className="absolute inset-0 opacity-[0.14]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />
      {/* corner glow */}
      <div
        className="absolute -right-1/4 -top-1/3 h-2/3 w-2/3 rounded-full blur-3xl"
        style={{ background: `hsl(${h1} 85% 55% / 0.22)` }}
      />
      {/* oversized emoji watermark */}
      <div className="pointer-events-none absolute -bottom-8 -right-3 select-none text-[10rem] leading-none opacity-10">
        {emoji}
      </div>

      {/* content */}
      <div className="relative z-10 flex h-full flex-col justify-between p-5 sm:p-6">
        {label ? (
          <span className="max-w-[70%] self-start truncate rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[0.7rem] font-medium uppercase tracking-wider text-white/80 backdrop-blur">
            {label}
          </span>
        ) : (
          <span />
        )}

        <div className="flex items-center gap-3 sm:gap-4">
          <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl border border-white/15 bg-white/10 text-3xl backdrop-blur sm:h-16 sm:w-16 sm:text-4xl">
            {emoji}
          </div>
          <h3
            className="text-xl font-bold leading-tight text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)] sm:text-2xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {title}
          </h3>
        </div>

        <div className="flex items-center justify-between text-[0.65rem] uppercase tracking-[0.18em] text-white/45">
          <span>Kryptós CronOS</span>
          {order != null && <span>Stage {order}</span>}
        </div>
      </div>
    </div>
  );
}

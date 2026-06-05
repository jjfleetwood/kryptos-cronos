"use client";

// TEMP design-review page for the Sports/Baseball layout. Delete after a choice is made.
import { epochs } from "@kryptos/core/stages-meta";
import { epochAccent } from "@/app/stages/epoch-theme";

const BASEBALL = (ids: string[]) =>
  ids.map((id) => epochs.find((e) => e.id === id)).filter(Boolean) as typeof epochs;

const SUBGROUPS = [
  { label: "Fundamentals", ids: ["baseball-1"] },
  { label: "Hitting", ids: ["baseball-2", "baseball-3", "baseball-4"] },
  { label: "Pitching", ids: ["baseball-5", "baseball-6", "baseball-7"] },
  { label: "Positions", ids: ["baseball-8", "baseball-9", "baseball-10", "baseball-11", "baseball-12", "baseball-13", "baseball-14", "baseball-15"] },
];

// ── shared card variants ────────────────────────────────────────────────────
function FullCard({ epoch }: { epoch: (typeof epochs)[number] }) {
  return (
    <div className="group relative flex items-center gap-3 px-4 py-3.5 rounded-xl border border-white/10 bg-white/2 hover:border-white/25 hover:bg-white/5 transition-all overflow-hidden min-w-[220px]">
      <span className="text-2xl leading-none flex-shrink-0">{epoch.emoji}</span>
      <div className="flex-1 min-w-0">
        <span className="text-sm font-semibold text-gray-200 block truncate">{epoch.name}</span>
        <p className="text-xs text-gray-600 truncate">{epoch.subtitle}</p>
      </div>
      <span className="text-gray-700 group-hover:text-gray-400 text-sm flex-shrink-0">→</span>
    </div>
  );
}

function Chip({ epoch }: { epoch: (typeof epochs)[number] }) {
  return (
    <div className="group flex items-center gap-2 px-3 py-2 rounded-lg border border-white/10 bg-white/2 hover:border-white/25 hover:bg-white/5 transition-all">
      <span className="text-lg leading-none flex-shrink-0">{epoch.emoji}</span>
      <span className="text-xs font-semibold text-gray-200 whitespace-nowrap">{epoch.name}</span>
    </div>
  );
}

// ── sub-category label styles to try ─────────────────────────────────────────
function SubLabel({ children, color = "#fca5a5" }: { children: React.ReactNode; color?: string }) {
  return (
    <span className="text-[11px] font-mono font-bold uppercase tracking-widest whitespace-nowrap" style={{ color }}>
      {children}
    </span>
  );
}

// ── Track + Baseball headers (shared across options) ─────────────────────────
function TrackHeader({ visible }: { visible: "current" | "bold" }) {
  if (visible === "current") {
    return (
      <div className="flex items-center gap-3 mb-3 pl-1">
        <span className="text-[10px] font-mono font-bold text-gray-600 uppercase tracking-widest">SPORTS</span>
        <div className="flex-1 h-px bg-white/5" />
        <span className="text-[10px] text-gray-700">Master America&apos;s pastime</span>
      </div>
    );
  }
  return (
    <div className="flex items-center gap-3 mb-1">
      <span className="text-base">🏅</span>
      <span className="text-base font-bold text-white tracking-tight">Sports</span>
      <div className="flex-1 h-px bg-gradient-to-r from-red-500/40 to-transparent" />
    </div>
  );
}

function BaseballHeader() {
  return (
    <div className="flex items-center gap-2 mb-4 mt-1 pl-1">
      <span className="text-sm">⚾</span>
      <span className="text-sm font-bold text-red-300 uppercase tracking-wider">Baseball</span>
      <span className="text-[11px] text-gray-600">· 15 epochs · 150 stages</span>
    </div>
  );
}

export default function StagesPreview() {
  return (
    <div className="min-h-screen px-4 py-12" style={{ background: "linear-gradient(135deg, #0d1117 0%, #0f2027 50%, #1a1a2e 100%)" }}>
      <div className="max-w-5xl mx-auto space-y-14">
        <header>
          <h1 className="text-3xl font-bold text-white">Sports / Baseball — layout options</h1>
          <p className="text-gray-400 text-sm mt-1">Pick a number. Each option keeps the &quot;Sports&quot; track, sub-labels Baseball, and groups the epochs left-to-right.</p>
        </header>

        {/* ════ OPTION 0 — CURRENT (for reference) ════ */}
        <section>
          <OptTitle n="0" name="Current (for reference)" desc="Flat 3-column grid, tiny gray label, no baseball grouping." />
          <div className="rounded-2xl border border-white/10 p-5 bg-black/20">
            <TrackHeader visible="current" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 pl-4">
              {BASEBALL(SUBGROUPS.flatMap((g) => g.ids)).map((e) => <FullCard key={e.id} epoch={e} />)}
            </div>
          </div>
        </section>

        {/* ════ OPTION A — Grouped rows (sub-label left, cards wrap right) ════ */}
        <section>
          <OptTitle n="A" name="Grouped rows" desc="Bold Sports + Baseball headers. Each sub-category is a labeled row; cards flow left-to-right and wrap. Positions wrap to a second line." />
          <div className="rounded-2xl border border-white/10 p-5 bg-black/20">
            <TrackHeader visible="bold" />
            <BaseballHeader />
            <div className="space-y-4">
              {SUBGROUPS.map((g) => (
                <div key={g.label} className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4">
                  <div className="sm:w-28 sm:pt-3 flex-shrink-0"><SubLabel>{g.label}</SubLabel></div>
                  <div className="flex flex-wrap gap-3 flex-1">
                    {BASEBALL(g.ids).map((e) => <FullCard key={e.id} epoch={e} />)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════ OPTION B — Sub-category columns ════ */}
        <section>
          <OptTitle n="B" name="Columns by category" desc="Hitting · Pitching · Positions as side-by-side columns (each a header with cards stacked below). Reads left-to-right by category." />
          <div className="rounded-2xl border border-white/10 p-5 bg-black/20">
            <TrackHeader visible="bold" />
            <BaseballHeader />
            <div className="mb-4">
              <SubLabel color="#86efac">Fundamentals</SubLabel>
              <div className="mt-2 max-w-xs">{BASEBALL(["baseball-1"]).map((e) => <FullCard key={e.id} epoch={e} />)}</div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {SUBGROUPS.slice(1).map((g) => (
                <div key={g.label}>
                  <div className="flex items-center gap-2 mb-2 pb-2 border-b border-white/10">
                    <SubLabel>{g.label}</SubLabel>
                    <span className="text-[10px] text-gray-600">({g.ids.length})</span>
                  </div>
                  <div className="space-y-2">
                    {BASEBALL(g.ids).map((e) => <FullCard key={e.id} epoch={e} />)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════ OPTION C — Compact position chips ════ */}
        <section>
          <OptTitle n="C" name="Compact positions" desc="Hitting & Pitching as full cards in rows; the 8 Positions become a tidy grid of compact chips (emoji + name) so they fit cleanly in one block." />
          <div className="rounded-2xl border border-white/10 p-5 bg-black/20">
            <TrackHeader visible="bold" />
            <BaseballHeader />
            <div className="space-y-4">
              {SUBGROUPS.slice(0, 3).map((g) => (
                <div key={g.label}>
                  <SubLabel>{g.label}</SubLabel>
                  <div className="mt-2 flex flex-wrap gap-3">
                    {BASEBALL(g.ids).map((e) => <FullCard key={e.id} epoch={e} />)}
                  </div>
                </div>
              ))}
              <div>
                <div className="flex items-center gap-2"><SubLabel>Positions</SubLabel><span className="text-[10px] text-gray-600">the 9 spots on the field</span></div>
                <div className="mt-2 grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {BASEBALL(SUBGROUPS[3].ids).map((e) => <Chip key={e.id} epoch={e} />)}
                </div>
              </div>
            </div>
          </div>
        </section>

        <p className="text-gray-600 text-xs pb-10">This is a temporary preview page (/stages-preview) — it will be deleted once a layout is chosen.</p>
      </div>
    </div>
  );
}

function OptTitle({ n, name, desc }: { n: string; name: string; desc: string }) {
  return (
    <div className="mb-3">
      <div className="flex items-center gap-2">
        <span className="w-7 h-7 rounded-lg bg-red-500/15 border border-red-500/30 text-red-300 font-bold text-sm flex items-center justify-center">{n}</span>
        <span className="text-lg font-bold text-white">{name}</span>
      </div>
      <p className="text-xs text-gray-500 mt-1 max-w-2xl">{desc}</p>
    </div>
  );
}

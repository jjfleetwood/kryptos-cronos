import Link from "next/link";
import { stages } from "@kryptos/core/stages";
import { DECISION_BANKS, epochGroups, extendedGroups, TRACK_STYLE, DEFAULT_STYLE } from "@/app/stages/track-data";
import enMessages from "@/messages/en.json";

export const metadata = { title: "Decision Banks · Kryptós CronOS" };

// Spot count for a set of epochs — sums every Play-the-Hand/Spot decision attached
// to those epochs' stages.
function spotCount(epochIds: string[]): number {
  const set = new Set(epochIds);
  let n = 0;
  for (const s of stages) {
    if (set.has(s.epochId) && s.scenario?.spots?.length) n += s.scenario.spots.length;
  }
  return n;
}

const msg = enMessages as Record<string, string>;

export default function DrillIndexPage() {
  const featured = DECISION_BANKS
    .map((b) => ({ ...b, count: spotCount(b.epochIds) }))
    .filter((b) => b.count > 0);

  const trackBanks = [...epochGroups, ...extendedGroups]
    .map((g) => ({
      id: g.id,
      title: msg[g.labelKey] ?? g.id,
      subtitle: msg[g.descKey] ?? "",
      style: TRACK_STYLE[g.id] ?? DEFAULT_STYLE,
      count: spotCount(g.epochIds),
    }))
    .filter((g) => g.count > 0)
    .sort((a, b) => b.count - a.count);

  const grandTotal = trackBanks.reduce((n, g) => n + g.count, 0);

  return (
    <div className="min-h-screen px-4 py-12" style={{ background: "linear-gradient(135deg, #0d1117 0%, #0f2027 50%, #1a1a2e 100%)" }}>
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center gap-2 mb-6 text-sm">
          <Link href="/explore" className="text-gray-500 hover:text-cyan-400 transition-colors">Explore</Link>
          <span className="text-gray-700">/</span>
          <span className="text-gray-400">Decision Banks</span>
        </div>

        <div className="mb-8">
          <h1 className="text-3xl font-black text-white mb-2 flex items-center gap-3"><span>🎯</span> Decision Banks</h1>
          <p className="text-gray-400 text-sm leading-relaxed max-w-2xl">
            Drill the <b className="text-gray-300">Play the Hand / Play the Spot</b> decisions from a whole track in one
            shuffled set — a fresh batch of {Math.min(25, grandTotal)} every run, pulled at random from the full pool.
            Practice only; nothing is graded. {grandTotal.toLocaleString()} decisions and counting.
          </p>
        </div>

        {featured.length > 0 && (
          <section className="mb-8">
            <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-cyan-400/80 mb-3">Featured drills</h2>
            <div className="space-y-2.5">
              {featured.map((b) => (
                <Link key={b.id} href={`/drill/${b.id}`}
                  className="flex items-center gap-3 px-4 py-3.5 rounded-xl border border-cyan-500/25 bg-cyan-500/5 hover:border-cyan-400/50 hover:bg-cyan-500/10 transition-colors group">
                  <span className="text-2xl flex-shrink-0">🎯</span>
                  <div className="flex-1 min-w-0">
                    <p className="text-cyan-200 font-semibold text-sm">{b.title}</p>
                    <p className="text-gray-500 text-xs truncate">{b.subtitle}</p>
                  </div>
                  <span className="text-[11px] font-mono text-cyan-400/70 flex-shrink-0">{b.count} spots</span>
                  <span className="text-cyan-600 group-hover:text-cyan-400 text-sm flex-shrink-0 transition-colors">→</span>
                </Link>
              ))}
            </div>
          </section>
        )}

        <section>
          <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-gray-500 mb-3">By track</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {trackBanks.map((g) => (
              <Link key={g.id} href={`/drill/${g.id}`}
                title={g.subtitle}
                className="flex items-center gap-3 px-4 py-3 rounded-xl border border-white/10 bg-white/2 hover:border-white/25 hover:bg-white/5 transition-colors group">
                <span className="text-xl flex-shrink-0">{g.style.icon}</span>
                <div className="flex-1 min-w-0">
                  <p className="text-gray-200 font-semibold text-sm truncate">{g.title}</p>
                  <p className="text-gray-600 text-[11px]">{g.count} decisions</p>
                </div>
                <span className="text-gray-700 group-hover:text-gray-400 text-sm flex-shrink-0 transition-colors">→</span>
              </Link>
            ))}
          </div>
        </section>

        <p className="text-gray-600 text-xs mt-8">
          Want a single epoch instead? Every epoch page with a trainer has its own <span className="text-gray-400">Decision Bank</span> link.
        </p>
      </div>
    </div>
  );
}

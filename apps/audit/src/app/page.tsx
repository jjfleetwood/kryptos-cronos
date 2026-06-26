import Link from "next/link";
import { auditEpochs, auditStagesForEpoch, auditRanked, getAuditEpoch } from "@kryptos/core/audit-registry";

export const metadata = {
  title: "Agentic Audit Library",
  robots: { index: false, follow: false },
};

export default function Home() {
  // Each domain's score = average of its modules' (ease + value). Ranked best-first.
  const domainStats = auditEpochs
    .map((epoch) => {
      const modules = auditStagesForEpoch(epoch.id);
      const n = Math.max(modules.length, 1);
      const avgEase = modules.reduce((s, m) => s + (m.easeScore ?? 0), 0) / n;
      const avgValue = modules.reduce((s, m) => s + (m.valueScore ?? 0), 0) / n;
      return { epoch, modules, avgEase, avgValue, avgCombined: avgEase + avgValue };
    })
    .sort((a, b) => b.avgCombined - a.avgCombined);

  // The 20 highest-value opportunities across the whole track (ease + value).
  const top20 = auditRanked().slice(0, 20);

  const totalModules = domainStats.reduce((s, d) => s + d.modules.length, 0);
  const totalDownloads = domainStats.reduce(
    (s, d) => s + d.modules.reduce((t, m) => t + (m.info.downloads?.length ?? 0), 0),
    0
  );

  return (
    <div
      className="min-h-screen px-4 py-12"
      style={{ background: "linear-gradient(135deg, #0d1117 0%, #160f24 50%, #1a1a2e 100%)" }}
    >
      <div className="max-w-5xl mx-auto">
        <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-violet-500/40 bg-violet-500/10 px-3 py-1 text-xs font-semibold text-violet-200">
          <span>AGENTIC AUDIT</span>
        </div>

        <h1 className="text-4xl font-black tracking-tight text-white">The Agentic Audit Library</h1>
        <p className="mt-3 max-w-3xl leading-relaxed text-gray-300">
          A professional reference for technical and privacy auditors. Each{" "}
          <strong className="text-white">domain</strong> is an epoch; each{" "}
          <strong className="text-white">sub-process</strong> is a module that teaches the test as a repeatable{" "}
          <strong className="text-violet-300">agentic workflow</strong> — the control objective, the read-only MCP
          tooling that gathers evidence, a workflow diagram, hints, and a downloadable, runnable Python example.
        </p>
        <p className="mt-2 text-sm text-gray-500">
          {auditEpochs.length} domains · {totalModules} modules · {totalDownloads} runnable Python downloads
        </p>

        <Link
          href="/guide"
          className="mt-5 inline-flex items-center gap-2 rounded-lg border border-violet-400/40 bg-violet-500/10 px-3.5 py-2 text-sm font-semibold text-violet-200 transition-colors hover:bg-violet-500/20"
        >
          🛡️ Agent Risk Audit — Field Guide →
        </Link>

        {/* ── Prioritized: the highest-value opportunities across the whole track ── */}
        <div className="mt-12 mb-3">
          <h2 className="text-lg font-black text-white">🎯 Prioritized — Top 20 Opportunities</h2>
          <p className="text-xs text-gray-400">
            The highest-value, most-implementable controls across every domain — start here.
          </p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {top20.map((m, i) => {
            const epoch = getAuditEpoch(m.epochId);
            const ease = m.easeScore ?? 0;
            const value = m.valueScore ?? 0;
            return (
              <Link
                key={m.id}
                href={`/${m.epochId}/${m.id}`}
                className="group flex items-center gap-3 rounded-xl border border-violet-500/25 bg-white/[0.03] p-3 transition-all hover:border-violet-400/60 hover:bg-violet-500/[0.06]"
              >
                <div className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-violet-500/15 text-sm font-black text-violet-200">
                  {i + 1}
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="truncate text-sm font-semibold text-white group-hover:text-violet-100">{m.title}</h3>
                  <p className="truncate text-[11px] text-gray-500">
                    {epoch?.emoji} {epoch?.name}
                  </p>
                </div>
                <div className="shrink-0 text-right">
                  <div className="text-sm font-black text-violet-200">
                    {ease + value}
                    <span className="text-[10px] text-gray-500">/20</span>
                  </div>
                  <div className="text-[9px] uppercase tracking-wide text-gray-500">
                    <span className="text-emerald-300">E{ease}</span> <span className="text-amber-300">V{value}</span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* ── Domains, ranked, each listing its modules + Python downloads ── */}
        <p className="mt-12 mb-4 text-xs font-semibold uppercase tracking-wider text-violet-300/70">
          Domains, ranked by average module score (ease + value)
        </p>
        <div className="space-y-5">
          {domainStats.map(({ epoch, modules, avgEase, avgValue, avgCombined }, i) => (
            <section
              key={epoch.id}
              className="rounded-2xl border border-violet-500/20 bg-white/[0.03] p-5 sm:p-6"
            >
              <div className="flex items-start gap-4">
                <div className="relative grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-violet-500/15 text-2xl">
                  {epoch.emoji}
                  <span className="absolute -left-2 -top-2 grid h-6 w-6 place-items-center rounded-full bg-violet-500 text-[11px] font-black text-white ring-2 ring-[#160f24]">
                    {i + 1}
                  </span>
                </div>
                <div className="min-w-0 flex-1">
                  <h2 className="text-lg font-bold text-white">{epoch.name}</h2>
                  {epoch.description && (
                    <p className="mt-0.5 line-clamp-2 text-sm text-gray-400">{epoch.description}</p>
                  )}
                </div>
                <div className="shrink-0 text-right">
                  <div className="text-xl font-black text-violet-200">{avgCombined.toFixed(1)}</div>
                  <div className="text-[10px] uppercase tracking-wide text-gray-500">avg /20</div>
                </div>
              </div>

              <div className="mt-3 flex flex-wrap items-center gap-2 text-xs">
                <span className="rounded-full bg-violet-500/10 px-2.5 py-1 font-semibold text-violet-200">
                  {modules.length} module{modules.length === 1 ? "" : "s"}
                </span>
                <span className="rounded-md bg-emerald-500/10 px-2 py-1 font-semibold text-emerald-300">
                  Ease {avgEase.toFixed(1)}
                </span>
                <span className="rounded-md bg-amber-500/10 px-2 py-1 font-semibold text-amber-300">
                  Value {avgValue.toFixed(1)}
                </span>
              </div>

              <ul className="mt-4 divide-y divide-white/5">
                {modules.map((m) => {
                  const dl = m.info.downloads ?? [];
                  return (
                    <li key={m.id} className="flex items-center gap-3 py-2">
                      <Link
                        href={`/${epoch.id}/${m.id}`}
                        className="group flex min-w-0 flex-1 items-center gap-3"
                      >
                        <span className="shrink-0 font-mono text-[11px] text-gray-600">
                          {String(m.order).padStart(2, "0")}
                        </span>
                        <span className="truncate text-sm text-gray-300 group-hover:text-violet-200">{m.title}</span>
                        <span className="hidden shrink-0 items-center gap-1.5 text-[10px] text-gray-600 sm:flex">
                          <span className="text-emerald-400/70">E{m.easeScore ?? 0}</span>
                          <span className="text-amber-400/70">V{m.valueScore ?? 0}</span>
                        </span>
                      </Link>
                      {dl.length > 0 ? (
                        <a
                          href={dl[0].url}
                          download
                          title={dl[0].name}
                          className="inline-flex shrink-0 items-center gap-1.5 rounded-md border border-white/10 bg-black/20 px-2.5 py-1 text-[11px] font-semibold text-violet-200 transition-colors hover:border-violet-400/50 hover:bg-violet-500/[0.08]"
                        >
                          🐍 .py ↓
                        </a>
                      ) : (
                        <span className="shrink-0 text-[11px] text-gray-700">—</span>
                      )}
                    </li>
                  );
                })}
              </ul>
            </section>
          ))}
        </div>

        <p className="mt-12 text-xs text-gray-500">
          A working reference library for technical and privacy auditors.
        </p>
      </div>
    </div>
  );
}

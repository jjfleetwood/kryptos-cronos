import Link from "next/link";
import { cookies } from "next/headers";
import { auditEpochs, auditStagesForEpoch, auditRanked, getAuditEpoch } from "@kryptos/core/audit-registry";
import { getSessionFromCookies } from "@/lib/server-session";
import { getUserTier } from "@/lib/access";
import AuditGate from "./AuditGate";

export const metadata = {
  title: "Advanced Audit · Kryptós CronOS",
  description: "Agentic technical & privacy audit modules — runnable MCP tooling, CTF + quiz review.",
};

function isAdminUser(username: string | null): boolean {
  const admin = process.env.ADMIN_USERNAME;
  return !!username && !!admin && username.toLowerCase() === admin.toLowerCase();
}

export default async function AuditLanding() {
  const username = await getSessionFromCookies();
  await cookies(); // ensure dynamic rendering (session-aware)

  if (!username) return <AuditGate reason="signin" />;
  const tier = await getUserTier(username);
  if (tier === "free" && !isAdminUser(username)) return <AuditGate reason="pro" />;

  // Each domain's score = the average of its modules' (ease + value). Domains are
  // ranked by that average and listed best-first.
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

  return (
    <div
      className="min-h-screen px-4 py-12"
      style={{ background: "linear-gradient(135deg, #0d1117 0%, #160f24 50%, #1a1a2e 100%)" }}
    >
      <div className="max-w-5xl mx-auto">
        <Link href="/stages" className="text-violet-300 hover:text-violet-200 text-sm transition-colors">
          ← Stage map
        </Link>

        <div className="mt-6 mb-2 inline-flex items-center gap-2 rounded-full border border-violet-500/40 bg-violet-500/10 px-3 py-1 text-xs font-semibold text-violet-200">
          <span>PRO / ENTERPRISE</span>
          <span className="text-violet-400/60">·</span>
          <span>Advanced Audit</span>
        </div>

        <h1 className="text-4xl font-black text-white tracking-tight">The Agentic Audit Library</h1>
        <p className="mt-3 max-w-3xl text-gray-300 leading-relaxed">
          A separate, professional track for technical and privacy auditors. Each <strong className="text-white">domain</strong>{" "}
          is an epoch; each <strong className="text-white">sub-process</strong> is a module that teaches the test as a
          repeatable <strong className="text-violet-300">agentic workflow</strong> — the control objective, the agents and
          read-only MCP server tools that gather the evidence, a workflow diagram, helpful hints, a CTF and a 10-question
          quiz, and a downloadable, runnable example you can drill into at the domain / sub-domain level. Modules are ranked
          together by ease of implementation and audit value.
        </p>

        {/* Prioritized — the highest-value opportunities across the whole track. */}
        <div className="mt-10 mb-3 flex items-center justify-between gap-3">
          <div>
            <h2 className="text-lg font-black text-white">🎯 Prioritized — Top 20 Opportunities</h2>
            <p className="text-xs text-gray-400">The highest-value, most-implementable controls across every domain — start here.</p>
          </div>
          <Link
            href="/audit/ranked"
            className="shrink-0 rounded-lg border border-violet-400/40 bg-violet-500/10 px-2.5 py-1 text-[11px] font-semibold text-violet-200 transition-colors hover:bg-violet-500/20"
          >
            ↕ All ranked →
          </Link>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {top20.map((m, i) => {
            const epoch = getAuditEpoch(m.epochId);
            const ease = m.easeScore ?? 0;
            const value = m.valueScore ?? 0;
            return (
              <Link
                key={m.id}
                href={`/audit/${m.epochId}/${m.id}`}
                className="group flex items-center gap-3 rounded-xl border border-violet-500/25 bg-white/[0.03] p-3 transition-all hover:border-violet-400/60 hover:bg-violet-500/[0.06]"
              >
                <div className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-violet-500/15 text-sm font-black text-violet-200">
                  {i + 1}
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="truncate text-sm font-semibold text-white group-hover:text-violet-100">{m.title}</h3>
                  <p className="truncate text-[11px] text-gray-500">{epoch?.emoji} {epoch?.name}</p>
                </div>
                <div className="shrink-0 text-right">
                  <div className="text-sm font-black text-violet-200">{ease + value}<span className="text-[10px] text-gray-500">/20</span></div>
                  <div className="text-[9px] uppercase tracking-wide text-gray-500"><span className="text-emerald-300">E{ease}</span> <span className="text-amber-300">V{value}</span></div>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="mt-10 mb-3 flex items-center justify-between gap-3">
          <p className="text-xs font-semibold uppercase tracking-wider text-violet-300/70">
            Domains, ranked by average module score (ease + value)
          </p>
          <Link
            href="/audit/ranked"
            className="shrink-0 rounded-lg border border-violet-400/40 bg-violet-500/10 px-2.5 py-1 text-[11px] font-semibold text-violet-200 transition-colors hover:bg-violet-500/20"
          >
            ↕ All modules ranked →
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {domainStats.map(({ epoch, modules, avgEase, avgValue, avgCombined }, i) => (
            <Link
              key={epoch.id}
              href={`/audit/${epoch.id}`}
              className="group rounded-2xl border border-violet-500/25 bg-white/[0.03] p-6 transition-all hover:border-violet-400/60 hover:bg-violet-500/[0.06]"
            >
              <div className="flex items-start gap-4">
                <div className="relative grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-violet-500/15 text-2xl">
                  {epoch.emoji}
                  <span className="absolute -left-2 -top-2 grid h-6 w-6 place-items-center rounded-full bg-violet-500 text-[11px] font-black text-white ring-2 ring-[#160f24]">
                    {i + 1}
                  </span>
                </div>
                <div className="min-w-0">
                  <h2 className="text-lg font-bold text-white group-hover:text-violet-200">{epoch.name}</h2>
                  <p className="mt-0.5 text-sm text-gray-400">{epoch.subtitle}</p>
                </div>
                <div className="ml-auto shrink-0 text-right">
                  <div className="text-xl font-black text-violet-200">{avgCombined.toFixed(1)}</div>
                  <div className="text-[10px] uppercase tracking-wide text-gray-500">avg /20</div>
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-gray-400 line-clamp-2">{epoch.description}</p>
              <div className="mt-4 flex flex-wrap items-center gap-2 text-xs">
                <span className="rounded-full bg-violet-500/10 px-2.5 py-1 font-semibold text-violet-200">
                  {modules.length} module{modules.length === 1 ? "" : "s"}
                </span>
                <span className="rounded-md bg-emerald-500/10 px-2 py-1 font-semibold text-emerald-300">
                  Ease {avgEase.toFixed(1)}
                </span>
                <span className="rounded-md bg-amber-500/10 px-2 py-1 font-semibold text-amber-300">
                  Value {avgValue.toFixed(1)}
                </span>
                <span className="ml-auto text-violet-300 group-hover:translate-x-0.5 transition-transform">Open →</span>
              </div>
            </Link>
          ))}
        </div>

        <p className="mt-10 text-xs text-gray-500">
          More domains are being authored. This track is intentionally kept off the public stage catalog and counts.
        </p>
      </div>
    </div>
  );
}

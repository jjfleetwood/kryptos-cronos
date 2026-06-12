import Link from "next/link";
import { cookies } from "next/headers";
import { auditEpochs, auditStagesForEpoch } from "@kryptos/core/audit-registry";
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

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {auditEpochs.map((epoch) => {
            const modules = auditStagesForEpoch(epoch.id);
            return (
              <Link
                key={epoch.id}
                href={`/audit/${epoch.id}`}
                className="group rounded-2xl border border-violet-500/25 bg-white/[0.03] p-6 transition-all hover:border-violet-400/60 hover:bg-violet-500/[0.06]"
              >
                <div className="flex items-start gap-4">
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-violet-500/15 text-2xl">
                    {epoch.emoji}
                  </div>
                  <div className="min-w-0">
                    <h2 className="text-lg font-bold text-white group-hover:text-violet-200">{epoch.name}</h2>
                    <p className="mt-0.5 text-sm text-gray-400">{epoch.subtitle}</p>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-gray-400 line-clamp-3">{epoch.description}</p>
                <div className="mt-4 flex items-center justify-between text-xs">
                  <span className="rounded-full bg-violet-500/10 px-2.5 py-1 font-semibold text-violet-200">
                    {modules.length} module{modules.length === 1 ? "" : "s"}
                  </span>
                  <span className="text-violet-300 group-hover:translate-x-0.5 transition-transform">Open →</span>
                </div>
              </Link>
            );
          })}
        </div>

        <p className="mt-10 text-xs text-gray-500">
          More domains are being authored. This track is intentionally kept off the public stage catalog and counts.
        </p>
      </div>
    </div>
  );
}

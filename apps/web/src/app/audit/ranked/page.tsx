import Link from "next/link";
import { cookies } from "next/headers";
import { auditRanked, getAuditEpoch } from "@kryptos/core/audit-registry";
import { getSessionFromCookies } from "@/lib/server-session";
import { getUserTier } from "@/lib/access";
import AuditGate from "../AuditGate";

export const metadata = {
  title: "Advanced Audit · All modules ranked · Kryptós CronOS",
  description: "Every Advanced Audit module across all domains, ranked by ease + value.",
};

function isAdminUser(username: string | null): boolean {
  const admin = process.env.ADMIN_USERNAME;
  return !!username && !!admin && username.toLowerCase() === admin.toLowerCase();
}

export default async function AuditRankedPage() {
  await cookies();
  const username = await getSessionFromCookies();
  if (!username) return <AuditGate reason="signin" />;
  const tier = await getUserTier(username);
  if (tier === "free" && !isAdminUser(username)) return <AuditGate reason="pro" />;

  const ranked = auditRanked();

  return (
    <div
      className="min-h-screen px-4 py-12"
      style={{ background: "linear-gradient(135deg, #0d1117 0%, #160f24 50%, #1a1a2e 100%)" }}
    >
      <div className="max-w-4xl mx-auto">
        <Link href="/audit" className="text-violet-300 hover:text-violet-200 text-sm transition-colors">
          ← Audit library
        </Link>

        <h1 className="mt-6 text-3xl font-black text-white tracking-tight">All modules, ranked</h1>
        <p className="mt-2 max-w-3xl text-gray-300 leading-relaxed">
          Every module across all {new Set(ranked.map((m) => m.epochId)).size} domains, ranked together by combined score
          (ease of implementation + audit value). This is the cross-track prioritization — start at the top.
        </p>

        <div className="mt-8 space-y-2">
          {ranked.map((m, i) => {
            const ease = m.easeScore ?? 0;
            const value = m.valueScore ?? 0;
            const epoch = getAuditEpoch(m.epochId);
            return (
              <Link
                key={m.id}
                href={`/audit/${m.epochId}/${m.id}`}
                className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-3 transition-all hover:border-violet-400/50 hover:bg-violet-500/[0.06]"
              >
                <div className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-violet-500/15 text-sm font-black text-violet-200">
                  {i + 1}
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="truncate font-semibold text-white group-hover:text-violet-100">{m.title}</h3>
                  <p className="truncate text-xs text-gray-500">
                    {epoch?.emoji} {epoch?.name}
                  </p>
                </div>
                <div className="hidden shrink-0 items-center gap-2 sm:flex">
                  <span className="rounded-md bg-white/5 px-2 py-1 text-xs font-bold text-white" title="combined score (ease + value)">
                    {ease + value}<span className="text-gray-500">/20</span>
                  </span>
                  <span className="rounded-md bg-emerald-500/10 px-2 py-1 text-xs font-semibold text-emerald-300">E {ease}</span>
                  <span className="rounded-md bg-amber-500/10 px-2 py-1 text-xs font-semibold text-amber-300">V {value}</span>
                </div>
                <span className="text-violet-300 group-hover:translate-x-0.5 transition-transform">→</span>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

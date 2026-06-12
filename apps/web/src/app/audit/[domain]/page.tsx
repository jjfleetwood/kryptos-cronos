import Link from "next/link";
import { cookies } from "next/headers";
import { notFound } from "next/navigation";
import { getAuditEpoch, auditStagesForEpoch } from "@kryptos/core/audit-registry";
import { getSessionFromCookies } from "@/lib/server-session";
import { getUserTier } from "@/lib/access";
import AuditGate from "../AuditGate";

function isAdminUser(username: string | null): boolean {
  const admin = process.env.ADMIN_USERNAME;
  return !!username && !!admin && username.toLowerCase() === admin.toLowerCase();
}

export default async function AuditDomainPage({ params }: { params: Promise<{ domain: string }> }) {
  const { domain } = await params;
  await cookies();
  const username = await getSessionFromCookies();
  if (!username) return <AuditGate reason="signin" />;
  const tier = await getUserTier(username);
  if (tier === "free" && !isAdminUser(username)) return <AuditGate reason="pro" />;

  const epoch = getAuditEpoch(domain);
  if (!epoch) return notFound();
  const modules = auditStagesForEpoch(domain);

  return (
    <div
      className="min-h-screen px-4 py-12"
      style={{ background: "linear-gradient(135deg, #0d1117 0%, #160f24 50%, #1a1a2e 100%)" }}
    >
      <div className="max-w-4xl mx-auto">
        <Link href="/audit" className="text-violet-300 hover:text-violet-200 text-sm transition-colors">
          ← Audit library
        </Link>

        <div className="mt-6 flex items-start gap-4">
          <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-violet-500/15 text-3xl">
            {epoch.emoji}
          </div>
          <div>
            <h1 className="text-3xl font-black text-white tracking-tight">{epoch.name}</h1>
            <p className="mt-1 text-violet-200/80 text-sm">{epoch.subtitle}</p>
          </div>
        </div>
        <p className="mt-4 max-w-3xl text-gray-300 leading-relaxed">{epoch.description}</p>

        <div className="mt-10 space-y-3">
          {modules.map((m) => {
            const ease = m.easeScore ?? 0;
            const value = m.valueScore ?? 0;
            return (
              <Link
                key={m.id}
                href={`/audit/${domain}/${m.id}`}
                className="group flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.03] p-4 transition-all hover:border-violet-400/50 hover:bg-violet-500/[0.06]"
              >
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-violet-500/10 text-sm font-bold text-violet-200">
                  {String(m.order).padStart(2, "0")}
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-semibold text-white group-hover:text-violet-100">{m.title}</h3>
                  <p className="truncate text-sm text-gray-400">{m.subtitle}</p>
                </div>
                <div className="hidden shrink-0 items-center gap-2 sm:flex">
                  <span className="rounded-md bg-emerald-500/10 px-2 py-1 text-xs font-semibold text-emerald-300">
                    Ease {ease}
                  </span>
                  <span className="rounded-md bg-amber-500/10 px-2 py-1 text-xs font-semibold text-amber-300">
                    Value {value}
                  </span>
                  {m.rank != null && (
                    <span className="rounded-md bg-violet-500/10 px-2 py-1 text-xs font-semibold text-violet-200">
                      #{m.rank}
                    </span>
                  )}
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

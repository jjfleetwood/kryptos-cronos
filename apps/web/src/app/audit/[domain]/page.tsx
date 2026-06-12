import Link from "next/link";
import { cookies } from "next/headers";
import { notFound } from "next/navigation";
import { getAuditEpoch, auditStagesForEpoch } from "@kryptos/core/audit-registry";
import { getSessionFromCookies } from "@/lib/server-session";
import { getUserTier } from "@/lib/access";
import { redis } from "@/lib/redis";
import AuditGate from "../AuditGate";

function parseArr(val: unknown): string[] {
  if (!val) return [];
  if (Array.isArray(val)) return val as string[];
  const s = String(val);
  try { const p = JSON.parse(s); return Array.isArray(p) ? p : []; } catch { return s.split(",").filter(Boolean); }
}

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

  // Completion state: a module is fully cleared (CTF flag captured) or half-cleared
  // (10-question quiz passed). Read straight from the user's progress record.
  const prog = await redis.hgetall(`progress:${username.toLowerCase()}`);
  const cleared = new Set(parseArr(prog?.stages));
  const halfCleared = new Set(parseArr(prog?.quizStages));

  // Rank this domain's modules by combined score (ease + value), best-first.
  const combined = (m: { easeScore?: number; valueScore?: number }) => (m.easeScore ?? 0) + (m.valueScore ?? 0);
  const ranked = [...modules].sort((a, b) => combined(b) - combined(a));
  const n = Math.max(modules.length, 1);
  const avgEase = modules.reduce((s, m) => s + (m.easeScore ?? 0), 0) / n;
  const avgValue = modules.reduce((s, m) => s + (m.valueScore ?? 0), 0) / n;
  const avgCombined = avgEase + avgValue;

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
          <div className="min-w-0">
            <h1 className="text-3xl font-black text-white tracking-tight">{epoch.name}</h1>
            <p className="mt-1 text-violet-200/80 text-sm">{epoch.subtitle}</p>
          </div>
          <div className="ml-auto shrink-0 text-right">
            <div className="text-2xl font-black text-violet-200">{avgCombined.toFixed(1)}</div>
            <div className="text-[10px] uppercase tracking-wide text-gray-500">avg score /20</div>
            <div className="mt-1 text-[11px] text-gray-400">
              <span className="text-emerald-300">ease {avgEase.toFixed(1)}</span> ·{" "}
              <span className="text-amber-300">value {avgValue.toFixed(1)}</span>
            </div>
          </div>
        </div>
        <p className="mt-4 max-w-3xl text-gray-300 leading-relaxed">{epoch.description}</p>

        <p className="mt-8 mb-3 text-xs font-semibold uppercase tracking-wider text-violet-300/70">
          Modules, ranked by score (ease + value) · #n = rank across the whole track
        </p>
        <div className="space-y-3">
          {ranked.map((m, i) => {
            const ease = m.easeScore ?? 0;
            const value = m.valueScore ?? 0;
            const done = cleared.has(m.id);
            const half = !done && halfCleared.has(m.id);
            return (
              <Link
                key={m.id}
                href={`/audit/${domain}/${m.id}`}
                className="group flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.03] p-4 transition-all hover:border-violet-400/50 hover:bg-violet-500/[0.06]"
              >
                <div className={`grid h-10 w-10 shrink-0 place-items-center rounded-lg text-base font-black ${done ? "bg-emerald-500/20 text-emerald-300" : half ? "bg-amber-500/15 text-amber-300" : "bg-violet-500/10 text-violet-200"}`}>
                  {done ? "✓" : half ? "◐" : i + 1}
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-semibold text-white group-hover:text-violet-100">
                    {m.title}
                    {done && <span className="ml-2 align-middle rounded bg-emerald-500/15 px-1.5 py-0.5 text-[10px] font-semibold text-emerald-300">CLEARED</span>}
                    {half && <span className="ml-2 align-middle rounded bg-amber-500/15 px-1.5 py-0.5 text-[10px] font-semibold text-amber-300">QUIZ PASSED · ½</span>}
                  </h3>
                  <p className="truncate text-sm text-gray-400">{m.subtitle}</p>
                </div>
                <div className="hidden shrink-0 items-center gap-2 sm:flex">
                  <span className="rounded-md bg-white/5 px-2 py-1 text-xs font-bold text-white" title="combined score (ease + value)">
                    {ease + value}<span className="text-gray-500">/20</span>
                  </span>
                  <span className="rounded-md bg-emerald-500/10 px-2 py-1 text-xs font-semibold text-emerald-300">
                    Ease {ease}
                  </span>
                  <span className="rounded-md bg-amber-500/10 px-2 py-1 text-xs font-semibold text-amber-300">
                    Value {value}
                  </span>
                  {m.rank != null && (
                    <span className="rounded-md bg-violet-500/10 px-2 py-1 text-xs font-semibold text-violet-200" title="rank across the whole track">
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

"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { fetchProgress } from "@/lib/progress";
import { getSession } from "@/lib/auth";
import { CYBEROPS_DOMAINS, computeCyberOpsReadiness } from "@kryptos/core/cyberops-domains";
import { stagesMeta } from "@kryptos/core/stages-meta";

const COLOR_MAP: Record<string, { bar: string; text: string; border: string; bg: string; badge: string }> = {
  cyan:    { bar: "bg-cyan-500",    text: "text-cyan-400",    border: "border-cyan-500/30",    bg: "bg-cyan-500/5",    badge: "bg-cyan-500/15 border-cyan-500/30 text-cyan-300" },
  emerald: { bar: "bg-emerald-500", text: "text-emerald-400", border: "border-emerald-500/30", bg: "bg-emerald-500/5", badge: "bg-emerald-500/15 border-emerald-500/30 text-emerald-300" },
  violet:  { bar: "bg-violet-500",  text: "text-violet-400",  border: "border-violet-500/30",  bg: "bg-violet-500/5",  badge: "bg-violet-500/15 border-violet-500/30 text-violet-300" },
  rose:    { bar: "bg-rose-500",    text: "text-rose-400",    border: "border-rose-500/30",    bg: "bg-rose-500/5",    badge: "bg-rose-500/15 border-rose-500/30 text-rose-300" },
  amber:   { bar: "bg-amber-500",   text: "text-amber-400",   border: "border-amber-500/30",   bg: "bg-amber-500/5",   badge: "bg-amber-500/15 border-amber-500/30 text-amber-300" },
};

function ReadinessRing({ pct }: { pct: number }) {
  const r = 52;
  const circ = 2 * Math.PI * r;
  const filled = (pct / 100) * circ;
  const grade =
    pct >= 80 ? { label: "READY", color: "#22c55e" } :
    pct >= 60 ? { label: "PROGRESSING", color: "#f59e0b" } :
    pct >= 30 ? { label: "IN TRAINING", color: "#06b6d4" } :
                { label: "GETTING STARTED", color: "#6366f1" };

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-36 h-36">
        <svg className="w-full h-full -rotate-90" viewBox="0 0 120 120">
          <circle cx="60" cy="60" r={r} fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="10" />
          <circle
            cx="60" cy="60" r={r} fill="none"
            stroke={grade.color} strokeWidth="10"
            strokeDasharray={`${filled} ${circ}`}
            strokeLinecap="round"
            style={{ transition: "stroke-dasharray 1s ease" }}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-3xl font-black text-white">{pct}%</span>
          <span className="text-gray-500 text-xs">readiness</span>
        </div>
      </div>
      <span className="mt-2 text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full border"
        style={{ color: grade.color, borderColor: grade.color + "40", background: grade.color + "15" }}>
        {grade.label}
      </span>
    </div>
  );
}

export default function CyberOpsPage() {
  const [completedIds, setCompletedIds] = useState<string[]>([]);
  const [username, setUsername] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [expanded, setExpanded] = useState<string | null>(null);

  useEffect(() => {
    const u = getSession();
    setUsername(u);
    if (!u) { setLoading(false); return; }
    fetchProgress().then((p) => {
      if (p) setCompletedIds(p.completedStages);
    }).finally(() => setLoading(false));
  }, []);

  const { overall, domains } = computeCyberOpsReadiness(completedIds);

  // Total Cisco stages across all mapped domains (deduped)
  const allMappedIds = [...new Set(CYBEROPS_DOMAINS.flatMap(d => d.stageIds))];
  const totalMapped = allMappedIds.length;
  const totalCompleted = allMappedIds.filter(id => completedIds.includes(id)).length;

  return (
    <div className="min-h-screen px-4 py-10"
      style={{ background: "linear-gradient(135deg, #0d1117 0%, #0a0e1a 100%)" }}>
      <div className="max-w-3xl mx-auto">

        {/* Back nav */}
        <Link href="/stages" className="text-gray-500 hover:text-cyan-400 text-sm mb-6 inline-block transition-colors">
          ← Stage Map
        </Link>

        {/* Header */}
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs px-2.5 py-1 rounded-full border text-blue-400 bg-blue-400/10 border-blue-400/30 font-semibold">
              Cisco Certification
            </span>
            <span className="text-xs text-gray-600">CBROPS 200-201</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-white mb-2">CyberOps Associate</h1>
          <p className="text-gray-400 leading-relaxed">
            Track your readiness for the Cisco Certified CyberOps Associate exam. Every Cisco and Umbrella stage you complete
            maps to one of the five official exam domains.
          </p>
        </div>

        {/* Readiness hero */}
        <div className="mb-10 rounded-2xl border border-white/10 overflow-hidden"
          style={{ background: "linear-gradient(135deg, rgba(6,182,212,0.06) 0%, rgba(99,102,241,0.06) 100%)" }}>
          <div className="p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-8">
            {loading ? (
              <div className="w-36 h-36 rounded-full bg-white/5 animate-pulse" />
            ) : (
              <ReadinessRing pct={overall} />
            )}
            <div className="flex-1 text-center sm:text-left">
              <p className="text-gray-400 text-sm mb-4">
                {username
                  ? `${totalCompleted} of ${totalMapped} Cisco stages completed across all domains`
                  : "Sign in to track your exam readiness"}
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {domains.map(({ domain, pct }) => {
                  const c = COLOR_MAP[domain.color];
                  return (
                    <div key={domain.id} className={`rounded-lg px-3 py-2 border ${c.border} ${c.bg}`}>
                      <p className={`text-xs font-semibold ${c.text}`}>{domain.icon} {domain.weight}%</p>
                      <p className="text-white font-bold text-sm">{pct}%</p>
                      <p className="text-gray-600 text-xs truncate">{domain.name}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Exam CTA */}
          <div className="px-6 sm:px-8 py-4 border-t border-white/8 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div>
              <p className="text-white font-semibold text-sm">Cisco Certified CyberOps Associate</p>
              <p className="text-gray-500 text-xs">Exam code: 200-201 CBROPS · ~120 min · 95–105 questions</p>
            </div>
            <a
              href="https://www.cisco.com/c/en/us/training-events/training-certifications/certifications/associate/cyberops-associate.html"
              target="_blank" rel="noopener noreferrer"
              className="flex-shrink-0 px-5 py-2 rounded-xl text-sm font-bold text-black transition-all hover:scale-105"
              style={{ background: "linear-gradient(90deg, #22d3ee, #6366f1)" }}
            >
              Exam info →
            </a>
          </div>
        </div>

        {/* Domain breakdown */}
        <div className="space-y-4">
          {domains.map(({ domain, completed, total, pct }) => {
            const c = COLOR_MAP[domain.color];
            const isOpen = expanded === domain.id;
            const completedStages = domain.stageIds.filter(id => completedIds.includes(id));
            const remainingStages = domain.stageIds.filter(id => !completedIds.includes(id));

            return (
              <div key={domain.id} className={`rounded-xl border overflow-hidden ${c.border}`}>
                {/* Domain header */}
                <button
                  className={`w-full px-5 py-4 flex items-center gap-4 hover:bg-white/3 transition-colors text-left ${c.bg}`}
                  onClick={() => setExpanded(isOpen ? null : domain.id)}
                >
                  <span className="text-2xl flex-shrink-0">{domain.icon}</span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1.5">
                      <h2 className={`font-bold text-sm ${c.text}`}>{domain.name}</h2>
                      <span className={`text-xs px-2 py-0.5 rounded-full border font-mono ${c.badge}`}>
                        {domain.weight}% of exam
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex-1 h-1.5 rounded-full bg-white/8 overflow-hidden">
                        <div className={`h-full rounded-full ${c.bar} transition-all duration-700`}
                          style={{ width: `${pct}%` }} />
                      </div>
                      <span className={`text-xs font-bold flex-shrink-0 ${c.text}`}>
                        {completed}/{total}
                      </span>
                    </div>
                  </div>
                  <span className="text-gray-600 text-sm flex-shrink-0">{isOpen ? "▲" : "▼"}</span>
                </button>

                {/* Expanded detail */}
                {isOpen && (
                  <div className="px-5 pb-5 pt-1 border-t border-white/8">
                    <p className="text-gray-400 text-sm mb-4 leading-relaxed">{domain.description}</p>

                    {/* Topics */}
                    <div className="mb-5">
                      <p className="text-gray-600 text-xs uppercase tracking-widest mb-2 font-semibold">Exam topics</p>
                      <div className="flex flex-wrap gap-1.5">
                        {domain.topics.map((topic, i) => (
                          <span key={i} className={`text-xs px-2.5 py-1 rounded-full border ${c.badge}`}>
                            {topic}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Completed stages */}
                    {completedStages.length > 0 && (
                      <div className="mb-3">
                        <p className="text-gray-600 text-xs uppercase tracking-widest mb-2 font-semibold">
                          ✓ Completed ({completedStages.length})
                        </p>
                        <div className="space-y-1">
                          {completedStages.map(id => {
                            const meta = stagesMeta.find(s => s.id === id);
                            return (
                              <Link key={id} href={`/stages/${id}`}
                                className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/3 border border-white/8 hover:border-white/15 transition-colors">
                                <span className="text-green-400 text-xs flex-shrink-0">✓</span>
                                <span className="text-gray-300 text-xs truncate">{meta?.title ?? id}</span>
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    )}

                    {/* Remaining stages */}
                    {remainingStages.length > 0 && (
                      <div>
                        <p className="text-gray-600 text-xs uppercase tracking-widest mb-2 font-semibold">
                          Remaining ({remainingStages.length})
                        </p>
                        <div className="space-y-1">
                          {remainingStages.map(id => {
                            const meta = stagesMeta.find(s => s.id === id);
                            return (
                              <Link key={id} href={`/stages/${id}`}
                                className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/3 border border-white/8 hover:border-white/15 transition-colors group">
                                <span className="text-gray-700 text-xs flex-shrink-0">○</span>
                                <span className="text-gray-500 group-hover:text-gray-300 text-xs truncate transition-colors">{meta?.title ?? id}</span>
                                <span className="ml-auto text-gray-700 group-hover:text-gray-500 text-xs flex-shrink-0 transition-colors">→</span>
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Footer note */}
        <p className="mt-8 text-center text-gray-700 text-xs leading-relaxed">
          Stage-to-domain mappings reflect the official CBROPS 200-201 exam blueprint.
          Completing all mapped stages does not guarantee exam passage — use this as a readiness guide alongside official Cisco study materials.
        </p>

      </div>
    </div>
  );
}

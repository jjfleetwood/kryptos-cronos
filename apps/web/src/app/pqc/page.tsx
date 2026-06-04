"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { fetchProgress } from "@/lib/progress";
import { getSession } from "@/lib/auth";
import { PQC_PHASES, computePqcReadiness } from "@kryptos/core/pqc-domains";
import { stagesMeta } from "@kryptos/core/stages-meta";

const COLOR_MAP: Record<string, { bar: string; text: string; border: string; bg: string; badge: string }> = {
  cyan:    { bar: "bg-cyan-500",    text: "text-cyan-400",    border: "border-cyan-500/30",    bg: "bg-cyan-500/5",    badge: "bg-cyan-500/15 border-cyan-500/30 text-cyan-300" },
  sky:     { bar: "bg-sky-500",     text: "text-sky-400",     border: "border-sky-500/30",     bg: "bg-sky-500/5",     badge: "bg-sky-500/15 border-sky-500/30 text-sky-300" },
  teal:    { bar: "bg-teal-500",    text: "text-teal-400",    border: "border-teal-500/30",    bg: "bg-teal-500/5",    badge: "bg-teal-500/15 border-teal-500/30 text-teal-300" },
  indigo:  { bar: "bg-indigo-500",  text: "text-indigo-400",  border: "border-indigo-500/30",  bg: "bg-indigo-500/5",  badge: "bg-indigo-500/15 border-indigo-500/30 text-indigo-300" },
  violet:  { bar: "bg-violet-500",  text: "text-violet-400",  border: "border-violet-500/30",  bg: "bg-violet-500/5",  badge: "bg-violet-500/15 border-violet-500/30 text-violet-300" },
  emerald: { bar: "bg-emerald-500", text: "text-emerald-400", border: "border-emerald-500/30", bg: "bg-emerald-500/5", badge: "bg-emerald-500/15 border-emerald-500/30 text-emerald-300" },
};

function ReadinessRing({ pct }: { pct: number }) {
  const r = 52;
  const circ = 2 * Math.PI * r;
  const filled = (pct / 100) * circ;
  const grade =
    pct >= 80 ? { label: "QUANTUM-SAFE", color: "#22c55e" } :
    pct >= 60 ? { label: "MIGRATING", color: "#8b5cf6" } :
    pct >= 30 ? { label: "PLANNING", color: "#06b6d4" } :
                { label: "EXPOSED", color: "#6366f1" };

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
          <span className="text-gray-500 text-xs">migrated</span>
        </div>
      </div>
      <span className="mt-2 text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full border"
        style={{ color: grade.color, borderColor: grade.color + "40", background: grade.color + "15" }}>
        {grade.label}
      </span>
    </div>
  );
}

export default function PqcPage() {
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

  const { overall, phases } = computePqcReadiness(completedIds);

  const allMappedIds = [...new Set(PQC_PHASES.flatMap(p => p.stageIds))];
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
          <div className="flex items-center gap-2 mb-2 flex-wrap">
            <span className="text-xs px-2.5 py-1 rounded-full border text-cyan-400 bg-cyan-400/10 border-cyan-400/30 font-semibold">
              Framework Readiness
            </span>
            <span className="text-xs text-gray-600">NIST FIPS 203/204/205 · CNSA 2.0 · CISA roadmap</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-white mb-2">Quantum-Safe Migration</h1>
          <p className="text-gray-400 leading-relaxed">
            Track your organization&apos;s readiness to migrate to post-quantum cryptography. Every Quantum Era stage you
            complete maps to one of the six phases of the NSA/CISA/NIST migration roadmap — from governance to a
            validated, quantum-safe estate. This is a framework tracker, not a certification exam.
          </p>
        </div>

        {/* Readiness hero */}
        <div className="mb-10 rounded-2xl border border-white/10 overflow-hidden"
          style={{ background: "linear-gradient(135deg, rgba(6,182,212,0.06) 0%, rgba(139,92,246,0.06) 100%)" }}>
          <div className="p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-8">
            {loading ? (
              <div className="w-36 h-36 rounded-full bg-white/5 animate-pulse" />
            ) : (
              <ReadinessRing pct={overall} />
            )}
            <div className="flex-1 text-center sm:text-left">
              <p className="text-gray-400 text-sm mb-4">
                {username
                  ? `${totalCompleted} of ${totalMapped} quantum stages completed across all migration phases`
                  : "Sign in to track your migration readiness"}
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {phases.map(({ phase, pct }) => {
                  const c = COLOR_MAP[phase.color];
                  return (
                    <div key={phase.id} className={`rounded-lg px-3 py-2 border ${c.border} ${c.bg}`}>
                      <p className={`text-xs font-semibold ${c.text}`}>{phase.icon} {phase.weight}%</p>
                      <p className="text-white font-bold text-sm">{pct}%</p>
                      <p className="text-gray-600 text-xs truncate">{phase.name}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Framework CTA */}
          <div className="px-6 sm:px-8 py-4 border-t border-white/8 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div>
              <p className="text-white font-semibold text-sm">NSA / CISA / NIST — Quantum-Readiness Roadmap</p>
              <p className="text-gray-500 text-xs">Migration to Post-Quantum Cryptography · CNSA 2.0 mandate by 2035</p>
            </div>
            <a
              href="https://www.cisa.gov/quantum"
              target="_blank" rel="noopener noreferrer"
              className="flex-shrink-0 px-5 py-2 rounded-xl text-sm font-bold text-black transition-all hover:scale-105"
              style={{ background: "linear-gradient(90deg, #22d3ee, #8b5cf6)" }}
            >
              Roadmap →
            </a>
          </div>
        </div>

        {/* Phase breakdown */}
        <div className="space-y-4">
          {phases.map(({ phase, completed, total, pct }) => {
            const c = COLOR_MAP[phase.color];
            const isOpen = expanded === phase.id;
            const completedStages = phase.stageIds.filter(id => completedIds.includes(id));
            const remainingStages = phase.stageIds.filter(id => !completedIds.includes(id));

            return (
              <div key={phase.id} className={`rounded-xl border overflow-hidden ${c.border}`}>
                {/* Phase header */}
                <button
                  className={`w-full px-5 py-4 flex items-center gap-4 hover:bg-white/3 transition-colors text-left ${c.bg}`}
                  onClick={() => setExpanded(isOpen ? null : phase.id)}
                >
                  <span className="text-2xl flex-shrink-0">{phase.icon}</span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1.5">
                      <h2 className={`font-bold text-sm ${c.text}`}>{phase.name}</h2>
                      <span className={`text-xs px-2 py-0.5 rounded-full border font-mono ${c.badge}`}>
                        {phase.weight}% of program
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
                    <p className="text-gray-400 text-sm mb-4 leading-relaxed">{phase.description}</p>

                    {/* Topics */}
                    <div className="mb-5">
                      <p className="text-gray-600 text-xs uppercase tracking-widest mb-2 font-semibold">Phase topics</p>
                      <div className="flex flex-wrap gap-1.5">
                        {phase.topics.map((topic, i) => (
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
          Phase mappings follow the NSA/CISA/NIST &ldquo;Quantum-Readiness: Migration to Post-Quantum Cryptography&rdquo; roadmap,
          NIST FIPS 203/204/205, and CNSA 2.0. This is a learning-readiness guide for PQC migration competency —
          there is no quantum-security certification exam; quantum-safe skills are credentialed today through cryptography,
          risk, and AI certifications. See the <Link href="/certs" className="text-cyan-500 hover:text-cyan-400 transition-colors">Certificate Paths</Link>.
        </p>

      </div>
    </div>
  );
}

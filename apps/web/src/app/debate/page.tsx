"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { fetchProgress } from "@/lib/progress";
import { getSession } from "@/lib/auth";
import {
  DEBATE_DEGREES,
  DEBATE_CREDENTIALS,
  computeDebateReadiness,
} from "@kryptos/core/debate-domains";
import { stagesMeta } from "@kryptos/core/stages-meta";

const COLOR_MAP: Record<string, { bar: string; text: string; border: string; bg: string; badge: string }> = {
  sky:     { bar: "bg-sky-500",     text: "text-sky-400",     border: "border-sky-500/30",     bg: "bg-sky-500/5",     badge: "bg-sky-500/15 border-sky-500/30 text-sky-300" },
  cyan:    { bar: "bg-cyan-500",    text: "text-cyan-400",    border: "border-cyan-500/30",    bg: "bg-cyan-500/5",    badge: "bg-cyan-500/15 border-cyan-500/30 text-cyan-300" },
  teal:    { bar: "bg-teal-500",    text: "text-teal-400",    border: "border-teal-500/30",    bg: "bg-teal-500/5",    badge: "bg-teal-500/15 border-teal-500/30 text-teal-300" },
  emerald: { bar: "bg-emerald-500", text: "text-emerald-400", border: "border-emerald-500/30", bg: "bg-emerald-500/5", badge: "bg-emerald-500/15 border-emerald-500/30 text-emerald-300" },
  amber:   { bar: "bg-amber-500",   text: "text-amber-400",   border: "border-amber-500/30",   bg: "bg-amber-500/5",   badge: "bg-amber-500/15 border-amber-500/30 text-amber-300" },
  rose:    { bar: "bg-rose-500",    text: "text-rose-400",    border: "border-rose-500/30",    bg: "bg-rose-500/5",    badge: "bg-rose-500/15 border-rose-500/30 text-rose-300" },
  indigo:  { bar: "bg-indigo-500",  text: "text-indigo-400",  border: "border-indigo-500/30",  bg: "bg-indigo-500/5",  badge: "bg-indigo-500/15 border-indigo-500/30 text-indigo-300" },
  purple:  { bar: "bg-purple-500",  text: "text-purple-400",  border: "border-purple-500/30",  bg: "bg-purple-500/5",  badge: "bg-purple-500/15 border-purple-500/30 text-purple-300" },
};

function ReadinessRing({ pct, degreeLabel, degreeColor }: { pct: number; degreeLabel: string; degreeColor: string }) {
  const r = 52;
  const circ = 2 * Math.PI * r;
  const filled = (pct / 100) * circ;

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-36 h-36">
        <svg className="w-full h-full -rotate-90" viewBox="0 0 120 120">
          <circle cx="60" cy="60" r={r} fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="10" />
          <circle
            cx="60" cy="60" r={r} fill="none"
            stroke={degreeColor} strokeWidth="10"
            strokeDasharray={`${filled} ${circ}`}
            strokeLinecap="round"
            style={{ transition: "stroke-dasharray 1s ease" }}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-3xl font-black text-white">{pct}%</span>
          <span className="text-gray-500 text-xs">mastered</span>
        </div>
      </div>
      <span className="mt-2 text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full border text-center"
        style={{ color: degreeColor, borderColor: degreeColor + "40", background: degreeColor + "15" }}>
        {degreeLabel}
      </span>
    </div>
  );
}

export default function DebatePage() {
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

  const { overall, totalCompleted, totalStages, domains, currentDegree, nextDegree } =
    computeDebateReadiness(completedIds);

  const degreeLabel = currentDegree ? currentDegree.name.replace("Degree of ", "") : "Member";
  const degreeColor = currentDegree ? currentDegree.color : "#6366f1";

  return (
    <div className="min-h-screen px-4 py-10"
      style={{ background: "linear-gradient(135deg, #0d1117 0%, #0a0e1a 100%)" }}>
      <div className="max-w-3xl mx-auto">

        {/* Back nav */}
        <Link href="/stages" className="text-gray-500 hover:text-sky-400 text-sm mb-6 inline-block transition-colors">
          ← Stage Map
        </Link>

        {/* Header */}
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-2 flex-wrap">
            <span className="text-xs px-2.5 py-1 rounded-full border text-sky-400 bg-sky-400/10 border-sky-400/30 font-semibold">
              Skill & Credential Tracker
            </span>
            <span className="text-xs text-gray-600">NSDA · Toastmasters · WUDC/WSDC · TOC</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-white mb-2">Debate &amp; Speech Mastery</h1>
          <p className="text-gray-400 leading-relaxed">
            Track your progress across the eight domains of debate — from foundations to professional mastery and the psychology of persuasion — and climb
            a degree ladder modeled on the NSDA&apos;s Merit-to-Premier-Distinction awards. Below, the real credentials you
            can pursue beyond this curriculum: NSDA degrees, Toastmasters Pathways, collegiate and world championships, and
            the Tournament of Champions. This is a learning-readiness tracker, not the official award.
          </p>
        </div>

        {/* Readiness hero */}
        <div className="mb-10 rounded-2xl border border-white/10 overflow-hidden"
          style={{ background: "linear-gradient(135deg, rgba(56,189,248,0.06) 0%, rgba(167,139,250,0.06) 100%)" }}>
          <div className="p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-8">
            {loading ? (
              <div className="w-36 h-36 rounded-full bg-white/5 animate-pulse" />
            ) : (
              <ReadinessRing pct={overall} degreeLabel={degreeLabel} degreeColor={degreeColor} />
            )}
            <div className="flex-1 text-center sm:text-left">
              <p className="text-gray-400 text-sm mb-4">
                {username
                  ? `${totalCompleted} of ${totalStages} debate stages completed across all eight domains`
                  : "Sign in to track your debate mastery"}
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

          {/* Next-degree CTA */}
          <div className="px-6 sm:px-8 py-4 border-t border-white/8 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div>
              <p className="text-white font-semibold text-sm">
                {nextDegree
                  ? `Next: ${nextDegree.name}`
                  : currentDegree
                    ? "Premier Distinction earned — the complete advocate"
                    : "Begin your first stage to start the climb"}
              </p>
              <p className="text-gray-500 text-xs">
                {nextDegree
                  ? `${nextDegree.threshold - totalCompleted} more stage${nextDegree.threshold - totalCompleted === 1 ? "" : "s"} to advance · ${nextDegree.blurb}`
                  : currentDegree
                    ? currentDegree.blurb
                    : "Degrees advance as you complete debate stages, mirroring the NSDA points ladder."}
              </p>
            </div>
            <Link
              href="/stages/epoch/debate-1"
              className="flex-shrink-0 px-5 py-2 rounded-xl text-sm font-bold text-black transition-all hover:scale-105"
              style={{ background: "linear-gradient(90deg, #38bdf8, #a78bfa)" }}
            >
              Train →
            </Link>
          </div>
        </div>

        {/* Degree ladder */}
        <div className="mb-10">
          <h2 className="text-white font-bold text-lg mb-3">The Degree Ladder</h2>
          <div className="rounded-xl border border-white/10 overflow-hidden divide-y divide-white/8">
            {DEBATE_DEGREES.map((degree) => {
              const earned = currentDegree
                ? DEBATE_DEGREES.indexOf(degree) <= DEBATE_DEGREES.indexOf(currentDegree)
                : false;
              return (
                <div key={degree.name} className="flex items-center gap-3 px-4 py-3"
                  style={{ background: earned ? degree.color + "10" : "transparent" }}>
                  <span className="text-lg flex-shrink-0" style={{ opacity: earned ? 1 : 0.3 }}>
                    {earned ? "🏅" : "○"}
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="font-bold text-sm" style={{ color: earned ? degree.color : "#64748b" }}>
                      {degree.name}
                    </p>
                    <p className="text-gray-600 text-xs truncate">{degree.blurb}</p>
                  </div>
                  <span className="text-xs font-mono flex-shrink-0" style={{ color: earned ? degree.color : "#475569" }}>
                    {degree.threshold} stages
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Domain breakdown */}
        <h2 className="text-white font-bold text-lg mb-3">Skill Domains</h2>
        <div className="space-y-4 mb-12">
          {domains.map(({ domain, completed, total, pct }) => {
            const c = COLOR_MAP[domain.color];
            const isOpen = expanded === domain.id;
            const completedStages = domain.stageIds.filter(id => completedIds.includes(id));
            const remainingStages = domain.stageIds.filter(id => !completedIds.includes(id));

            return (
              <div key={domain.id} className={`rounded-xl border overflow-hidden ${c.border}`}>
                <button
                  className={`w-full px-5 py-4 flex items-center gap-4 hover:bg-white/3 transition-colors text-left ${c.bg}`}
                  onClick={() => setExpanded(isOpen ? null : domain.id)}
                >
                  <span className="text-2xl flex-shrink-0">{domain.icon}</span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1.5">
                      <h3 className={`font-bold text-sm ${c.text}`}>{domain.name}</h3>
                      <span className={`text-xs px-2 py-0.5 rounded-full border font-mono ${c.badge}`}>
                        {domain.weight}% of track
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

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 border-t border-white/8">
                    <p className="text-gray-400 text-sm mb-4 leading-relaxed">{domain.description}</p>

                    <div className="mb-5">
                      <p className="text-gray-600 text-xs uppercase tracking-widest mb-2 font-semibold">Domain skills</p>
                      <div className="flex flex-wrap gap-1.5">
                        {domain.topics.map((topic, i) => (
                          <span key={i} className={`text-xs px-2.5 py-1 rounded-full border ${c.badge}`}>
                            {topic}
                          </span>
                        ))}
                      </div>
                    </div>

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

        {/* Real credentials */}
        <h2 className="text-white font-bold text-lg mb-1">Real Credentials to Pursue</h2>
        <p className="text-gray-500 text-sm mb-4">
          This curriculum builds the skills; these organizations award the recognized credentials. Pursue them beyond the
          tracker — in school, at university, and for a lifetime.
        </p>
        <div className="grid sm:grid-cols-2 gap-4">
          {DEBATE_CREDENTIALS.map((cred) => {
            const c = COLOR_MAP[cred.color];
            return (
              <a key={cred.name} href={cred.url} target="_blank" rel="noopener noreferrer"
                className={`block rounded-xl border p-5 transition-colors hover:bg-white/3 ${c.border} ${c.bg} group`}>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xl flex-shrink-0">{cred.icon}</span>
                  <h3 className={`font-bold text-sm ${c.text}`}>{cred.name}</h3>
                </div>
                <p className="text-gray-600 text-xs mb-3">{cred.org}</p>
                <p className="text-gray-400 text-xs leading-relaxed mb-3">{cred.summary}</p>
                <div className="flex flex-wrap items-center gap-1.5">
                  {cred.ladder.map((rung, i) => (
                    <span key={i} className="flex items-center gap-1.5">
                      <span className={`text-xs px-2 py-0.5 rounded-full border ${c.badge}`}>{rung}</span>
                      {i < cred.ladder.length - 1 && <span className="text-gray-700 text-xs">→</span>}
                    </span>
                  ))}
                </div>
                <p className={`mt-3 text-xs font-semibold ${c.text} opacity-70 group-hover:opacity-100 transition-opacity`}>
                  Learn more →
                </p>
              </a>
            );
          })}
        </div>

        {/* Footer note */}
        <p className="mt-10 text-center text-gray-700 text-xs leading-relaxed">
          The degree ladder mirrors the NSDA Merit-to-Premier-Distinction awards, advanced here by stages completed as a
          learning proxy for accrued merit points. It is a study-readiness guide, not the official NSDA award — those, and
          the Toastmasters, collegiate, and championship credentials above, are earned through real competition and the
          organizations linked. See also the security <Link href="/certs" className="text-sky-500 hover:text-sky-400 transition-colors">Certificate Paths</Link>.
        </p>

      </div>
    </div>
  );
}

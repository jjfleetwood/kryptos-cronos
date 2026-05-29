"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { fetchProgress } from "@/lib/progress";
import { getSession } from "@/lib/auth";
import {
  CERT_DOMAINS,
  COMPTIA_DOMAINS,
  ISC2_DOMAINS,
  computeCertReadiness,
  type CertDomain,
  type CertDomainDef,
} from "@/data/cert-domains";
import { stagesMeta } from "@/data/stages-meta";

// ─── Types ────────────────────────────────────────────────────────────────────

type CertId = "comptia-secplus" | "isc2-cc";

type CertConfig = {
  id: CertId;
  name: string;
  examCode: string;
  emoji: string;
  tagline: string;
  examUrl: string;
  salaryRange: string;
  jobCount: string;
  gradient: string;
  ringColor: string;
  accentClass: string;
  barClass: string;
  borderClass: string;
  bgClass: string;
  badgeClass: string;
};

const CERTS: CertConfig[] = [
  {
    id: "comptia-secplus",
    name: "CompTIA Security+",
    examCode: "SY0-701",
    emoji: "🔐",
    tagline: "The industry-standard entry certification for security professionals — vendor-neutral, DoD-approved, and globally recognized.",
    examUrl: "https://www.comptia.org/certifications/security",
    salaryRange: "$75k – $110k",
    jobCount: "700k+ open roles",
    gradient: "linear-gradient(135deg, rgba(99,102,241,0.08) 0%, rgba(139,92,246,0.06) 100%)",
    ringColor: "#818cf8",
    accentClass: "text-indigo-400",
    barClass: "bg-indigo-500",
    borderClass: "border-indigo-500/30",
    bgClass: "bg-indigo-500/5",
    badgeClass: "bg-indigo-500/15 border-indigo-500/30 text-indigo-300",
  },
  {
    id: "isc2-cc",
    name: "ISC² CC",
    examCode: "Certified in Cybersecurity",
    emoji: "🛡️",
    tagline: "ISC²'s entry-level certification. Free to take — designed to get your first cybersecurity job. Backed by the world's largest security membership body.",
    examUrl: "https://www.isc2.org/certifications/cc",
    salaryRange: "$65k – $95k",
    jobCount: "500k+ open roles",
    gradient: "linear-gradient(135deg, rgba(20,184,166,0.08) 0%, rgba(6,182,212,0.06) 100%)",
    ringColor: "#2dd4bf",
    accentClass: "text-teal-400",
    barClass: "bg-teal-500",
    borderClass: "border-teal-500/30",
    bgClass: "bg-teal-500/5",
    badgeClass: "bg-teal-500/15 border-teal-500/30 text-teal-300",
  },
];

// ─── Helper: stage IDs for a cert + domain ────────────────────────────────────

function stageIdsForDomain(certId: CertId, domainId: string): string[] {
  return Object.entries(CERT_DOMAINS)
    .filter(([, cds]: [string, CertDomain[]]) =>
      cds.some((d) => d.certId === certId && d.domainId === domainId)
    )
    .map(([id]) => id);
}

function allStageIdsForCert(certId: CertId): string[] {
  return [
    ...new Set(
      Object.entries(CERT_DOMAINS)
        .filter(([, cds]: [string, CertDomain[]]) => cds.some((d) => d.certId === certId))
        .map(([id]) => id)
    ),
  ];
}

// ─── Readiness ring ───────────────────────────────────────────────────────────

function ReadinessRing({ pct, color }: { pct: number; color: string }) {
  const r = 48;
  const circ = 2 * Math.PI * r;
  const filled = (pct / 100) * circ;
  const grade =
    pct >= 80 ? "READY" :
    pct >= 60 ? "PROGRESSING" :
    pct >= 30 ? "IN TRAINING" :
                "GETTING STARTED";

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative w-32 h-32">
        <svg className="w-full h-full -rotate-90" viewBox="0 0 110 110">
          <circle cx="55" cy="55" r={r} fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="9" />
          <circle
            cx="55" cy="55" r={r} fill="none"
            stroke={color} strokeWidth="9"
            strokeDasharray={`${filled} ${circ}`}
            strokeLinecap="round"
            style={{ transition: "stroke-dasharray 1s ease" }}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-2xl font-black text-white">{pct}%</span>
          <span className="text-gray-500 text-[10px]">readiness</span>
        </div>
      </div>
      <span
        className="text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full border"
        style={{ color, borderColor: color + "40", background: color + "15" }}
      >
        {grade}
      </span>
    </div>
  );
}

// ─── Domain row ───────────────────────────────────────────────────────────────

function DomainRow({
  domain,
  completed,
  total,
  pct,
  cert,
  completedIds,
  expanded,
  onToggle,
}: {
  domain: CertDomainDef;
  completed: number;
  total: number;
  pct: number;
  cert: CertConfig;
  completedIds: string[];
  expanded: boolean;
  onToggle: () => void;
}) {
  const stageIds = stageIdsForDomain(cert.id, domain.id);
  const completedStages = stageIds.filter((id) => completedIds.includes(id));
  const remainingStages = stageIds.filter((id) => !completedIds.includes(id));

  return (
    <div className={`rounded-xl border overflow-hidden ${cert.borderClass}`}>
      <button
        className={`w-full px-5 py-3.5 flex items-center gap-3 hover:bg-white/3 transition-colors text-left ${cert.bgClass}`}
        onClick={onToggle}
      >
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1.5">
            <h3 className={`font-bold text-sm ${cert.accentClass}`}>{domain.name}</h3>
            <span className={`text-xs px-2 py-0.5 rounded-full border font-mono flex-shrink-0 ${cert.badgeClass}`}>
              {domain.weight}% of exam
            </span>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex-1 h-1.5 rounded-full bg-white/8 overflow-hidden">
              <div
                className={`h-full rounded-full ${cert.barClass} transition-all duration-700`}
                style={{ width: `${pct}%` }}
              />
            </div>
            <span className={`text-xs font-bold flex-shrink-0 ${cert.accentClass}`}>
              {completed}/{total}
            </span>
          </div>
        </div>
        <span className="text-gray-600 text-sm flex-shrink-0">{expanded ? "▲" : "▼"}</span>
      </button>

      {expanded && (
        <div className="px-5 pb-4 pt-1 border-t border-white/8">
          {completedStages.length > 0 && (
            <div className="mb-3">
              <p className="text-gray-600 text-xs uppercase tracking-widest mb-2 font-semibold">
                ✓ Completed ({completedStages.length})
              </p>
              <div className="space-y-1">
                {completedStages.map((id) => {
                  const meta = stagesMeta.find((s) => s.id === id);
                  return (
                    <Link
                      key={id}
                      href={`/stages/${id}`}
                      className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/3 border border-white/8 hover:border-white/15 transition-colors"
                    >
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
                {remainingStages.map((id) => {
                  const meta = stagesMeta.find((s) => s.id === id);
                  return (
                    <Link
                      key={id}
                      href={`/stages/${id}`}
                      className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/3 border border-white/8 hover:border-white/15 transition-colors group"
                    >
                      <span className="text-gray-700 text-xs flex-shrink-0">○</span>
                      <span className="text-gray-500 group-hover:text-gray-300 text-xs truncate transition-colors">
                        {meta?.title ?? id}
                      </span>
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
}

// ─── Cert card ────────────────────────────────────────────────────────────────

function CertCard({
  cert,
  completedIds,
  loading,
  username,
}: {
  cert: CertConfig;
  completedIds: string[];
  loading: boolean;
  username: string | null;
}) {
  const [expanded, setExpanded] = useState<string | null>(null);
  const { overall, domains } = computeCertReadiness(cert.id, completedIds);

  const allMapped = allStageIdsForCert(cert.id);
  const totalMapped = allMapped.length;
  const totalCompleted = allMapped.filter((id) => completedIds.includes(id)).length;

  return (
    <div className="rounded-2xl border border-white/10 overflow-hidden" style={{ background: cert.gradient }}>

      {/* Hero: ring + info */}
      <div className="p-6 flex flex-col sm:flex-row items-center gap-6">
        {loading ? (
          <div className="w-32 h-32 rounded-full bg-white/5 animate-pulse flex-shrink-0" />
        ) : (
          <ReadinessRing pct={overall} color={cert.ringColor} />
        )}
        <div className="flex-1 text-center sm:text-left">
          <div className="flex items-center gap-2 mb-1 justify-center sm:justify-start">
            <span className="text-2xl">{cert.emoji}</span>
            <h2 className="text-xl font-black text-white">{cert.name}</h2>
          </div>
          <p className={`text-xs font-mono mb-3 ${cert.accentClass}`}>{cert.examCode}</p>
          <p className="text-gray-400 text-sm leading-relaxed mb-4">{cert.tagline}</p>

          <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
            <div className={`text-xs px-3 py-1.5 rounded-lg border ${cert.borderClass} ${cert.bgClass}`}>
              <span className="text-gray-500">Salary: </span>
              <span className={`font-bold ${cert.accentClass}`}>{cert.salaryRange}</span>
            </div>
            <div className={`text-xs px-3 py-1.5 rounded-lg border ${cert.borderClass} ${cert.bgClass}`}>
              <span className="text-gray-500">Jobs: </span>
              <span className={`font-bold ${cert.accentClass}`}>{cert.jobCount}</span>
            </div>
            <div className={`text-xs px-3 py-1.5 rounded-lg border ${cert.borderClass} ${cert.bgClass}`}>
              <span className="text-gray-500">Stages: </span>
              <span className={`font-bold ${cert.accentClass}`}>
                {username ? `${totalCompleted}/${totalMapped}` : `${totalMapped} mapped`}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Domain progress mini-grid */}
      <div className="px-6 pb-4 grid grid-cols-2 sm:grid-cols-3 gap-2">
        {domains.map(({ domain, pct }) => (
          <div key={domain.id} className={`rounded-lg px-3 py-2 border ${cert.borderClass} ${cert.bgClass}`}>
            <p className={`text-xs font-semibold ${cert.accentClass}`}>{domain.weight}%</p>
            <p className="text-white font-bold text-sm">{pct}%</p>
            <p className="text-gray-600 text-xs truncate">{domain.name}</p>
          </div>
        ))}
      </div>

      {/* CTA bar */}
      <div className="px-6 py-3 border-t border-white/8 flex items-center justify-between gap-3">
        <p className="text-gray-500 text-xs">
          {username
            ? `${totalCompleted} of ${totalMapped} mapped stages completed`
            : "Sign in to track your readiness"}
        </p>
        <a
          href={cert.examUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-shrink-0 px-4 py-2 rounded-xl text-xs font-bold transition-all hover:scale-105 border"
          style={{ borderColor: cert.ringColor + "60", background: cert.ringColor + "20", color: cert.ringColor }}
        >
          Exam info →
        </a>
      </div>

      {/* Domain breakdown accordion */}
      <div className="px-6 pb-6">
        <p className="text-gray-600 text-xs uppercase tracking-widest font-semibold mb-3 mt-4">Domain Breakdown</p>
        <div className="space-y-2">
          {domains.map(({ domain, completed, total, pct }) => (
            <DomainRow
              key={domain.id}
              domain={domain}
              completed={completed}
              total={total}
              pct={pct}
              cert={cert}
              completedIds={completedIds}
              expanded={expanded === domain.id}
              onToggle={() => setExpanded(expanded === domain.id ? null : domain.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function CertsPage() {
  const [completedIds, setCompletedIds] = useState<string[]>([]);
  const [username, setUsername] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const u = getSession();
    setUsername(u);
    if (!u) { setLoading(false); return; }
    fetchProgress().then((p) => {
      if (p) setCompletedIds(p.completedStages);
    }).finally(() => setLoading(false));
  }, []);

  return (
    <div
      className="min-h-screen px-4 py-10"
      style={{ background: "linear-gradient(135deg, #0d1117 0%, #0a0e1a 100%)" }}
    >
      <div className="max-w-5xl mx-auto">

        {/* Back nav */}
        <Link href="/stages" className="text-gray-500 hover:text-indigo-400 text-sm mb-6 inline-block transition-colors">
          ← Stage Map
        </Link>

        {/* Header */}
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs px-2.5 py-1 rounded-full border text-indigo-400 bg-indigo-400/10 border-indigo-400/30 font-semibold">
              Certification Paths
            </span>
            <span className="text-xs text-gray-600">Security+ · ISC² CC</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-white mb-2">Certificate Paths</h1>
          <p className="text-gray-400 leading-relaxed max-w-2xl">
            Track your readiness for industry-leading cybersecurity certifications. Every stage you complete maps to
            real exam domains — see exactly where you stand and what to tackle next.
          </p>
        </div>

        {/* Two cert cards */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          {CERTS.map((cert) => (
            <CertCard
              key={cert.id}
              cert={cert}
              completedIds={completedIds}
              loading={loading}
              username={username}
            />
          ))}
        </div>

        {/* Footer note */}
        <p className="mt-8 text-center text-gray-700 text-xs leading-relaxed">
          Stage-to-domain mappings reflect official exam blueprints. Completing all mapped stages does not guarantee
          exam passage — use this as a readiness guide alongside official study materials.
        </p>

      </div>
    </div>
  );
}

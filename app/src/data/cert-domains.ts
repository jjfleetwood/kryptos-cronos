// Certificate path domain mappings for CompTIA Security+ SY0-701 and ISC² CC.
// Each entry maps a stage ID to the certification domains it covers.
// Weights match official exam blueprints.

export type CertDomain = {
  certId: "comptia-secplus" | "isc2-cc";
  domainId: string;
  domainName: string;
};

export type CertDomainDef = {
  id: string;
  name: string;
  weight: number;
};

export const COMPTIA_DOMAINS: CertDomainDef[] = [
  { id: "general-security",     name: "General Security Concepts",               weight: 12 },
  { id: "threats-vulns",        name: "Threats, Vulnerabilities & Mitigations",  weight: 22 },
  { id: "security-architecture",name: "Security Architecture",                   weight: 18 },
  { id: "security-operations",  name: "Security Operations",                     weight: 28 },
  { id: "security-program",     name: "Security Program Management & Oversight", weight: 20 },
  { id: "cryptography",         name: "Cryptography & PKI",                      weight: 12 },
];

export const ISC2_DOMAINS: CertDomainDef[] = [
  { id: "security-principles",   name: "Security Principles",                          weight: 26 },
  { id: "bc-dr-ir",              name: "Business Continuity, DR & Incident Response",  weight: 10 },
  { id: "access-controls",       name: "Access Controls Concepts",                     weight: 22 },
  { id: "network-security",      name: "Network Security",                             weight: 24 },
  { id: "security-operations-cc",name: "Security Operations",                          weight: 18 },
];

// ─── Helper to build domain entries ───────────────────────────────────────────

function sp(...domainIds: string[]): CertDomain[] {
  return domainIds.map((id) => {
    const def = COMPTIA_DOMAINS.find((d) => d.id === id)!;
    return { certId: "comptia-secplus", domainId: id, domainName: def.name };
  });
}

function cc(...domainIds: string[]): CertDomain[] {
  return domainIds.map((id) => {
    const def = ISC2_DOMAINS.find((d) => d.id === id)!;
    return { certId: "isc2-cc", domainId: id, domainName: def.name };
  });
}

function both(spIds: string[], ccIds: string[]): CertDomain[] {
  return [...sp(...spIds), ...cc(...ccIds)];
}

// ─── Stage → domain mappings ───────────────────────────────────────────────────

export const CERT_DOMAINS: Record<string, CertDomain[]> = {

  // ── first-journey (bt-01 → bt-30) — beginner security concepts ───────────────
  "bt-01": both(["general-security"], ["security-principles"]),
  "bt-02": both(["general-security"], ["security-principles"]),
  "bt-03": both(["general-security"], ["security-principles"]),
  "bt-04": both(["general-security"], ["security-principles"]),
  "bt-05": both(["general-security"], ["security-principles"]),
  "bt-06": both(["general-security"], ["security-principles"]),
  "bt-07": both(["general-security"], ["security-principles"]),
  "bt-08": both(["general-security"], ["security-principles"]),
  "bt-09": both(["general-security"], ["security-principles"]),
  "bt-11": both(["general-security"], ["security-principles"]),
  "bt-12": both(["general-security"], ["security-principles"]),
  "bt-13": both(["general-security"], ["security-principles"]),
  "bt-14": both(["general-security"], ["security-principles"]),
  "bt-15": both(["general-security"], ["security-principles"]),
  "bt-16": both(["general-security"], ["security-principles"]),
  "bt-17": both(["general-security"], ["security-principles"]),
  "bt-18": both(["general-security"], ["security-principles"]),
  "bt-19": both(["general-security"], ["security-principles"]),
  "bt-20": both(["general-security"], ["security-principles"]),
  "bt-21": both(["general-security"], ["security-principles"]),
  "bt-22": both(["general-security"], ["security-principles"]),
  "bt-23": both(["general-security"], ["security-principles"]),
  "bt-24": both(["general-security"], ["security-principles"]),
  "bt-25": both(["general-security"], ["security-principles"]),
  "bt-26": both(["general-security"], ["security-principles"]),
  "bt-27": both(["general-security"], ["security-principles"]),
  "bt-28": both(["general-security"], ["security-principles"]),
  "bt-29": both(["general-security"], ["security-principles"]),
  "bt-30": both(["general-security"], ["security-principles"]),

  // ── ancient (stage-01 → stage-12) — foundational crypto/history ──────────────
  "stage-01": both(["general-security"], ["security-principles"]),
  "stage-02": both(["general-security"], ["security-principles"]),
  "stage-03": both(["cryptography"],     ["security-principles"]),
  "stage-04": both(["cryptography"],     ["security-principles"]),
  "stage-05": both(["cryptography"],     ["security-principles"]),
  "stage-06": both(["cryptography"],     ["security-principles"]),
  "stage-07": both(["cryptography"],     ["security-principles"]),
  "stage-08": both(["cryptography"],     ["security-principles"]),
  "stage-09": both(["cryptography"],     ["security-principles"]),
  "stage-10": both(["cryptography"],     ["security-principles"]),
  "stage-11": both(["cryptography"],     ["security-principles"]),
  "stage-12": both(["cryptography"],     ["security-principles"]),

  // ── cisco-core (stage-m01 → stage-m12) — CVEs, network vulns ─────────────────
  "stage-m01": both(["threats-vulns"], ["network-security"]),
  "stage-m02": both(["threats-vulns"], ["network-security"]),
  "stage-m03": both(["threats-vulns"], ["network-security"]),
  "stage-m04": both(["threats-vulns"], ["network-security"]),
  "stage-m05": both(["threats-vulns"], ["network-security"]),
  "stage-m06": both(["threats-vulns"], ["network-security"]),
  "stage-m07": both(["threats-vulns"], ["network-security"]),
  "stage-m08": both(["threats-vulns"], ["network-security"]),
  "stage-m09": both(["threats-vulns"], ["network-security"]),
  "stage-m10": both(["threats-vulns"], ["network-security"]),
  "stage-m11": both(["threats-vulns"], ["network-security"]),
  "stage-m12": both(["threats-vulns"], ["network-security"]),

  // ── cisco-enterprise (stage-m13 → stage-m25) — enterprise attacks ────────────
  "stage-m13": both(["security-architecture", "threats-vulns"], ["network-security"]),
  "stage-m14": both(["security-architecture", "threats-vulns"], ["network-security"]),
  "stage-m15": both(["security-architecture", "threats-vulns"], ["network-security"]),
  "stage-m16": both(["security-architecture", "threats-vulns"], ["network-security"]),
  "stage-m17": both(["security-architecture", "threats-vulns"], ["network-security"]),
  "stage-m18": both(["security-architecture", "threats-vulns"], ["network-security"]),
  "stage-m19": both(["security-architecture", "threats-vulns"], ["network-security"]),
  "stage-m20": both(["security-architecture", "threats-vulns"], ["network-security"]),
  "stage-m21": both(["security-architecture", "threats-vulns"], ["network-security"]),
  "stage-m22": both(["security-architecture", "threats-vulns"], ["network-security"]),
  "stage-m23": both(["security-architecture", "threats-vulns"], ["network-security"]),
  "stage-m24": both(["security-architecture", "threats-vulns"], ["network-security"]),
  "stage-m25": both(["security-architecture", "threats-vulns"], ["network-security"]),

  // ── cisco-secops (stage-m26 → stage-m38) — security operations ───────────────
  "stage-m26": both(["security-operations"], ["security-operations-cc"]),
  "stage-m27": both(["security-operations"], ["security-operations-cc"]),
  "stage-m28": both(["security-operations"], ["security-operations-cc"]),
  "stage-m29": both(["security-operations"], ["security-operations-cc"]),
  "stage-m30": both(["security-operations"], ["security-operations-cc"]),
  "stage-m31": both(["security-operations"], ["security-operations-cc"]),
  "stage-m32": both(["security-operations"], ["security-operations-cc"]),
  "stage-m33": both(["security-operations"], ["security-operations-cc"]),
  "stage-m34": both(["security-operations"], ["security-operations-cc"]),
  "stage-m35": both(["security-operations"], ["security-operations-cc"]),
  "stage-m36": both(["security-operations"], ["security-operations-cc"]),
  "stage-m37": both(["security-operations"], ["security-operations-cc"]),
  "stage-m38": both(["security-operations"], ["security-operations-cc"]),

  // ── cisco-advanced (stage-m39 → stage-m50) — advanced defense ────────────────
  "stage-m39": both(["security-architecture", "security-operations"], ["security-operations-cc"]),
  "stage-m40": both(["security-architecture", "security-operations"], ["security-operations-cc"]),
  "stage-m41": both(["security-architecture", "security-operations"], ["security-operations-cc"]),
  "stage-m42": both(["security-architecture", "security-operations"], ["security-operations-cc"]),
  "stage-m43": both(["security-architecture", "security-operations"], ["security-operations-cc"]),
  "stage-m44": both(["security-architecture", "security-operations"], ["security-operations-cc"]),
  "stage-m45": both(["security-architecture", "security-operations"], ["security-operations-cc"]),
  "stage-m46": both(["security-architecture", "security-operations"], ["security-operations-cc"]),
  "stage-m47": both(["security-architecture", "security-operations"], ["security-operations-cc"]),
  "stage-m48": both(["security-architecture", "security-operations"], ["security-operations-cc"]),
  "stage-m49": both(["security-architecture", "security-operations"], ["security-operations-cc"]),
  "stage-m50": both(["security-architecture", "security-operations"], ["security-operations-cc"]),

  // ── tech-audit-1 (audit-01 → audit-12) — frameworks/governance ───────────────
  "audit-01": both(["security-program"], ["security-principles"]),
  "audit-02": both(["security-program"], ["security-principles"]),
  "audit-03": both(["security-program"], ["security-principles"]),
  "audit-04": both(["security-program"], ["security-principles"]),
  "audit-05": both(["security-program"], ["security-principles"]),
  "audit-06": both(["security-program"], ["security-principles"]),
  "audit-07": both(["security-program"], ["security-principles"]),
  "audit-08": both(["security-program"], ["security-principles"]),
  "audit-09": both(["security-program"], ["security-principles"]),
  "audit-10": both(["security-program"], ["security-principles"]),
  "audit-11": both(["security-program"], ["security-principles"]),
  "audit-12": both(["security-program"], ["security-principles"]),

  // ── tech-audit-2 (audit-t01 → audit-t12) — technical security ────────────────
  "audit-t01": both(["security-architecture"], ["access-controls"]),
  "audit-t02": both(["security-architecture"], ["access-controls"]),
  "audit-t03": both(["security-architecture"], ["access-controls"]),
  "audit-t04": both(["security-architecture"], ["access-controls"]),
  "audit-t05": both(["security-architecture"], ["access-controls"]),
  "audit-t06": both(["security-architecture"], ["access-controls"]),
  "audit-t07": both(["security-architecture"], ["access-controls"]),
  "audit-t08": both(["security-architecture"], ["access-controls"]),
  "audit-t09": both(["security-architecture"], ["access-controls"]),
  "audit-t10": both(["security-architecture"], ["access-controls"]),
  "audit-t11": both(["security-architecture"], ["access-controls"]),
  "audit-t12": both(["security-architecture"], ["access-controls"]),

  // ── tech-audit-3 (audit-a01 → audit-a12) — agentic/AI security ───────────────
  "audit-a01": both(["general-security", "threats-vulns"], ["security-principles"]),
  "audit-a02": both(["general-security", "threats-vulns"], ["security-principles"]),
  "audit-a03": both(["general-security", "threats-vulns"], ["security-principles"]),
  "audit-a04": both(["general-security", "threats-vulns"], ["security-principles"]),
  "audit-a05": both(["general-security", "threats-vulns"], ["security-principles"]),
  "audit-a06": both(["general-security", "threats-vulns"], ["security-principles"]),
  "audit-a07": both(["general-security", "threats-vulns"], ["security-principles"]),
  "audit-a08": both(["general-security", "threats-vulns"], ["security-principles"]),
  "audit-a09": both(["general-security", "threats-vulns"], ["security-principles"]),
  "audit-a10": both(["general-security", "threats-vulns"], ["security-principles"]),
  "audit-a11": both(["general-security", "threats-vulns"], ["security-principles"]),
  "audit-a12": both(["general-security", "threats-vulns"], ["security-principles"]),

  // ── tech-audit-4 (audit-cm01 → audit-cm12) — monitoring ──────────────────────
  "audit-cm01": both(["security-operations"], ["bc-dr-ir", "security-operations-cc"]),
  "audit-cm02": both(["security-operations"], ["bc-dr-ir", "security-operations-cc"]),
  "audit-cm03": both(["security-operations"], ["bc-dr-ir", "security-operations-cc"]),
  "audit-cm04": both(["security-operations"], ["bc-dr-ir", "security-operations-cc"]),
  "audit-cm05": both(["security-operations"], ["bc-dr-ir", "security-operations-cc"]),
  "audit-cm06": both(["security-operations"], ["bc-dr-ir", "security-operations-cc"]),
  "audit-cm07": both(["security-operations"], ["bc-dr-ir", "security-operations-cc"]),
  "audit-cm08": both(["security-operations"], ["bc-dr-ir", "security-operations-cc"]),
  "audit-cm09": both(["security-operations"], ["bc-dr-ir", "security-operations-cc"]),
  "audit-cm10": both(["security-operations"], ["bc-dr-ir", "security-operations-cc"]),
  "audit-cm11": both(["security-operations"], ["bc-dr-ir", "security-operations-cc"]),
  "audit-cm12": both(["security-operations"], ["bc-dr-ir", "security-operations-cc"]),

  // ── mitre (mitre-01 → mitre-12) — ATT&CK tactics ─────────────────────────────
  "mitre-01": both(["threats-vulns", "security-operations"], ["security-operations-cc"]),
  "mitre-02": both(["threats-vulns", "security-operations"], ["security-operations-cc"]),
  "mitre-03": both(["threats-vulns", "security-operations"], ["security-operations-cc"]),
  "mitre-04": both(["threats-vulns", "security-operations"], ["security-operations-cc"]),
  "mitre-05": both(["threats-vulns", "security-operations"], ["security-operations-cc"]),
  "mitre-06": both(["threats-vulns", "security-operations"], ["security-operations-cc"]),
  "mitre-07": both(["threats-vulns", "security-operations"], ["security-operations-cc"]),
  "mitre-08": both(["threats-vulns", "security-operations"], ["security-operations-cc"]),
  "mitre-09": both(["threats-vulns", "security-operations"], ["security-operations-cc"]),
  "mitre-10": both(["threats-vulns", "security-operations"], ["security-operations-cc"]),
  "mitre-11": both(["threats-vulns", "security-operations"], ["security-operations-cc"]),
  "mitre-12": both(["threats-vulns", "security-operations"], ["security-operations-cc"]),

  // ── mitre-atlas (atlas-01 → atlas-12) — AI threats ───────────────────────────
  "atlas-01": both(["threats-vulns"], ["security-principles"]),
  "atlas-02": both(["threats-vulns"], ["security-principles"]),
  "atlas-03": both(["threats-vulns"], ["security-principles"]),
  "atlas-04": both(["threats-vulns"], ["security-principles"]),
  "atlas-05": both(["threats-vulns"], ["security-principles"]),
  "atlas-06": both(["threats-vulns"], ["security-principles"]),
  "atlas-07": both(["threats-vulns"], ["security-principles"]),
  "atlas-08": both(["threats-vulns"], ["security-principles"]),
  "atlas-09": both(["threats-vulns"], ["security-principles"]),
  "atlas-10": both(["threats-vulns"], ["security-principles"]),
  "atlas-11": both(["threats-vulns"], ["security-principles"]),
  "atlas-12": both(["threats-vulns"], ["security-principles"]),

  // ── owasp-llm (llm-01 → llm-12) — LLM security ───────────────────────────────
  "llm-01": both(["threats-vulns", "general-security"], ["security-principles"]),
  "llm-02": both(["threats-vulns", "general-security"], ["security-principles"]),
  "llm-03": both(["threats-vulns", "general-security"], ["security-principles"]),
  "llm-04": both(["threats-vulns", "general-security"], ["security-principles"]),
  "llm-05": both(["threats-vulns", "general-security"], ["security-principles"]),
  "llm-06": both(["threats-vulns", "general-security"], ["security-principles"]),
  "llm-07": both(["threats-vulns", "general-security"], ["security-principles"]),
  "llm-08": both(["threats-vulns", "general-security"], ["security-principles"]),
  "llm-09": both(["threats-vulns", "general-security"], ["security-principles"]),
  "llm-10": both(["threats-vulns", "general-security"], ["security-principles"]),
  "llm-11": both(["threats-vulns", "general-security"], ["security-principles"]),
  "llm-12": both(["threats-vulns", "general-security"], ["security-principles"]),

  // ── quantum-1 (quantum-01 → quantum-10) — quantum threats ────────────────────
  "quantum-01": both(["cryptography"], ["security-principles"]),
  "quantum-02": both(["cryptography"], ["security-principles"]),
  "quantum-03": both(["cryptography"], ["security-principles"]),
  "quantum-04": both(["cryptography"], ["security-principles"]),
  "quantum-05": both(["cryptography"], ["security-principles"]),
  "quantum-06": both(["cryptography"], ["security-principles"]),
  "quantum-07": both(["cryptography"], ["security-principles"]),
  "quantum-08": both(["cryptography"], ["security-principles"]),
  "quantum-09": both(["cryptography"], ["security-principles"]),
  "quantum-10": both(["cryptography"], ["security-principles"]),

  // ── quantum-2 (quantum-b01 → quantum-b10) — PQC ──────────────────────────────
  "quantum-b01": both(["cryptography", "security-architecture"], ["security-principles"]),
  "quantum-b02": both(["cryptography", "security-architecture"], ["security-principles"]),
  "quantum-b03": both(["cryptography", "security-architecture"], ["security-principles"]),
  "quantum-b04": both(["cryptography", "security-architecture"], ["security-principles"]),
  "quantum-b05": both(["cryptography", "security-architecture"], ["security-principles"]),
  "quantum-b06": both(["cryptography", "security-architecture"], ["security-principles"]),
  "quantum-b07": both(["cryptography", "security-architecture"], ["security-principles"]),
  "quantum-b08": both(["cryptography", "security-architecture"], ["security-principles"]),
  "quantum-b09": both(["cryptography", "security-architecture"], ["security-principles"]),
  "quantum-b10": both(["cryptography", "security-architecture"], ["security-principles"]),

  // ── quantum-3 (quantum-c01 → quantum-c10) — QKD ──────────────────────────────
  "quantum-c01": both(["cryptography", "security-architecture"], ["security-principles"]),
  "quantum-c02": both(["cryptography", "security-architecture"], ["security-principles"]),
  "quantum-c03": both(["cryptography", "security-architecture"], ["security-principles"]),
  "quantum-c04": both(["cryptography", "security-architecture"], ["security-principles"]),
  "quantum-c05": both(["cryptography", "security-architecture"], ["security-principles"]),
  "quantum-c06": both(["cryptography", "security-architecture"], ["security-principles"]),
  "quantum-c07": both(["cryptography", "security-architecture"], ["security-principles"]),
  "quantum-c08": both(["cryptography", "security-architecture"], ["security-principles"]),
  "quantum-c09": both(["cryptography", "security-architecture"], ["security-principles"]),
  "quantum-c10": both(["cryptography", "security-architecture"], ["security-principles"]),
};

// ─── Lookup helpers ────────────────────────────────────────────────────────────

/** Return all cert-domain mappings for a given stage. */
export function getCertDomainsForStage(stageId: string): CertDomain[] {
  return CERT_DOMAINS[stageId] ?? [];
}

/** All stage IDs mapped to a specific cert. */
export function getStagesForCert(certId: "comptia-secplus" | "isc2-cc"): string[] {
  return Object.entries(CERT_DOMAINS)
    .filter(([, domains]) => domains.some((d) => d.certId === certId))
    .map(([id]) => id);
}

/** Per-domain and overall readiness for a cert from a completed stage list. */
export function computeCertReadiness(
  certId: "comptia-secplus" | "isc2-cc",
  completedStageIds: string[]
): {
  overall: number;
  domains: Array<{ domain: CertDomainDef; completed: number; total: number; pct: number }>;
} {
  const defs = certId === "comptia-secplus" ? COMPTIA_DOMAINS : ISC2_DOMAINS;

  const domains = defs.map((domain) => {
    const stageIds = Object.entries(CERT_DOMAINS)
      .filter(([, cds]) => cds.some((d) => d.certId === certId && d.domainId === domain.id))
      .map(([id]) => id);
    const completed = stageIds.filter((id) => completedStageIds.includes(id)).length;
    const total = stageIds.length;
    const pct = total > 0 ? Math.round((completed / total) * 100) : 0;
    return { domain, completed, total, pct };
  });

  const overall = Math.round(
    domains.reduce((sum, { domain, pct }) => sum + (pct * domain.weight) / 100, 0)
  );

  return { overall, domains };
}

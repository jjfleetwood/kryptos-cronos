// Certificate path domain mappings.
// Covers: CompTIA Security+ SY0-701, ISC² CC, CompTIA Network+ N10-009, CompTIA CySA+ CS0-003.
// Stage → domain weights match official exam blueprints.

export type CertId = "comptia-secplus" | "isc2-cc" | "comptia-netplus" | "comptia-cysa";

export type CertDomain = {
  certId: CertId;
  domainId: string;
  domainName: string;
};

export type CertDomainDef = {
  id: string;
  name: string;
  weight: number;
};

// ─── Domain definitions ────────────────────────────────────────────────────────

export const COMPTIA_DOMAINS: CertDomainDef[] = [
  { id: "general-security",      name: "General Security Concepts",               weight: 12 },
  { id: "threats-vulns",         name: "Threats, Vulnerabilities & Mitigations",  weight: 22 },
  { id: "security-architecture", name: "Security Architecture",                   weight: 18 },
  { id: "security-operations",   name: "Security Operations",                     weight: 28 },
  { id: "security-program",      name: "Security Program Management & Oversight", weight: 20 },
  { id: "cryptography",          name: "Cryptography & PKI",                      weight: 12 },
];

export const ISC2_DOMAINS: CertDomainDef[] = [
  { id: "security-principles",    name: "Security Principles",                         weight: 26 },
  { id: "bc-dr-ir",               name: "Business Continuity, DR & Incident Response", weight: 10 },
  { id: "access-controls",        name: "Access Controls Concepts",                    weight: 22 },
  { id: "network-security",       name: "Network Security",                            weight: 24 },
  { id: "security-operations-cc", name: "Security Operations",                         weight: 18 },
];

export const NETPLUS_DOMAINS: CertDomainDef[] = [
  { id: "net-fundamentals",     name: "Networking Fundamentals",    weight: 23 },
  { id: "net-implementations",  name: "Network Implementations",    weight: 20 },
  { id: "net-operations",       name: "Network Operations",         weight: 19 },
  { id: "net-security",         name: "Network Security",           weight: 19 },
  { id: "net-troubleshooting",  name: "Network Troubleshooting",    weight: 19 },
];

export const CYSA_DOMAINS: CertDomainDef[] = [
  { id: "cysa-security-ops", name: "Security Operations",            weight: 33 },
  { id: "cysa-vuln-mgmt",    name: "Vulnerability Management",       weight: 30 },
  { id: "cysa-ir",           name: "Incident Response Management",   weight: 20 },
  { id: "cysa-reporting",    name: "Reporting & Communication",      weight: 17 },
];

// ─── Helper builders ────────────────────────────────────────────────────────────

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

function np(...domainIds: string[]): CertDomain[] {
  return domainIds.map((id) => {
    const def = NETPLUS_DOMAINS.find((d) => d.id === id)!;
    return { certId: "comptia-netplus", domainId: id, domainName: def.name };
  });
}

function cy(...domainIds: string[]): CertDomain[] {
  return domainIds.map((id) => {
    const def = CYSA_DOMAINS.find((d) => d.id === id)!;
    return { certId: "comptia-cysa", domainId: id, domainName: def.name };
  });
}

function combine(...groups: CertDomain[][]): CertDomain[] {
  return groups.flat();
}

// ─── Stage → domain mappings ────────────────────────────────────────────────────

export const CERT_DOMAINS: Record<string, CertDomain[]> = {

  // ── first-journey (bt-01 → bt-30) ────────────────────────────────────────────
  // Network fundamentals (bt-01–bt-20) map heavily to Network+
  // Security hygiene (bt-21–bt-30) map to Security+ threats/ops and ISC² CC

  "bt-01": combine(sp("general-security"),           cc("security-principles"), np("net-fundamentals")),
  "bt-02": combine(sp("general-security"),           cc("security-principles"), np("net-fundamentals")),
  "bt-03": combine(sp("general-security"),           cc("security-principles"), np("net-fundamentals")),
  "bt-04": combine(sp("security-architecture"),      cc("network-security"),    np("net-implementations")),
  "bt-05": combine(sp("general-security"),           cc("network-security"),    np("net-fundamentals")),
  "bt-06": combine(sp("general-security"),           cc("network-security"),    np("net-fundamentals")),
  "bt-07": combine(sp("security-architecture"),      cc("network-security"),    np("net-security")),
  "bt-08": combine(sp("general-security"),           cc("network-security"),    np("net-fundamentals")),
  "bt-09": combine(sp("security-architecture"),      cc("network-security"),    np("net-implementations", "net-fundamentals")),
  "bt-10": combine(sp("general-security"),           cc("network-security"),    np("net-fundamentals")),
  "bt-11": combine(sp("general-security"),           cc("network-security"),    np("net-security")),
  "bt-12": combine(sp("general-security"),           cc("security-principles"), np("net-fundamentals")),
  "bt-13": combine(sp("general-security"),           cc("network-security"),    np("net-fundamentals")),
  "bt-14": combine(sp("cryptography"),               cc("network-security"),    np("net-security")),
  "bt-15": combine(sp("general-security"),           cc("security-principles"), np("net-security")),
  "bt-16": combine(sp("general-security"),           cc("network-security"),    np("net-fundamentals")),
  "bt-17": combine(sp("general-security"),           cc("network-security"),    np("net-operations")),
  "bt-18": combine(sp("general-security"),           cc("network-security"),    np("net-operations")),
  "bt-19": combine(sp("threats-vulns"),              cc("network-security"),    np("net-security")),
  "bt-20": combine(sp("security-architecture"),      cc("network-security"),    np("net-implementations")),
  "bt-21": combine(sp("threats-vulns"),              cc("security-principles"), np("net-security")),
  "bt-22": combine(sp("general-security"),           cc("access-controls"),     np("net-security")),
  "bt-23": combine(sp("general-security"),           cc("access-controls")),
  "bt-24": combine(sp("threats-vulns"),              cc("network-security"),    np("net-security")),
  "bt-25": combine(sp("threats-vulns"),              cc("security-principles")),
  "bt-26": combine(sp("threats-vulns", "security-operations"), cc("security-operations-cc"), cy("cysa-security-ops")),
  "bt-27": combine(sp("threats-vulns"),              cc("security-principles"), cy("cysa-vuln-mgmt")),
  "bt-28": combine(sp("security-program"),           cc("security-principles")),
  "bt-29": combine(sp("security-program"),           cc("security-principles")),
  "bt-30": combine(sp("security-operations"),        cc("bc-dr-ir"),            cy("cysa-ir")),

  // ── ancient (stage-01 → stage-12) ────────────────────────────────────────────
  "stage-01": combine(sp("general-security"),  cc("security-principles")),
  "stage-02": combine(sp("general-security"),  cc("security-principles")),
  "stage-03": combine(sp("cryptography"),      cc("security-principles")),
  "stage-04": combine(sp("cryptography"),      cc("security-principles")),
  "stage-05": combine(sp("cryptography"),      cc("security-principles")),
  "stage-06": combine(sp("cryptography"),      cc("security-principles")),
  "stage-07": combine(sp("cryptography"),      cc("security-principles")),
  "stage-08": combine(sp("cryptography"),      cc("security-principles")),
  "stage-09": combine(sp("cryptography"),      cc("security-principles")),
  "stage-10": combine(sp("cryptography"),      cc("security-principles")),
  "stage-11": combine(sp("cryptography"),      cc("security-principles")),
  "stage-12": combine(sp("cryptography"),      cc("security-principles")),

  // ── cisco-core (stage-m01 → stage-m12) ───────────────────────────────────────
  "stage-m01": combine(sp("threats-vulns"), cc("network-security"), np("net-implementations"), cy("cysa-vuln-mgmt")),
  "stage-m02": combine(sp("threats-vulns"), cc("network-security"), np("net-implementations"), cy("cysa-vuln-mgmt")),
  "stage-m03": combine(sp("threats-vulns"), cc("network-security"), np("net-implementations"), cy("cysa-vuln-mgmt")),
  "stage-m04": combine(sp("threats-vulns"), cc("network-security"), np("net-implementations"), cy("cysa-vuln-mgmt")),
  "stage-m05": combine(sp("threats-vulns"), cc("network-security"), np("net-implementations"), cy("cysa-vuln-mgmt")),
  "stage-m06": combine(sp("threats-vulns"), cc("network-security"), np("net-implementations"), cy("cysa-vuln-mgmt")),
  "stage-m07": combine(sp("threats-vulns"), cc("network-security"), np("net-implementations"), cy("cysa-vuln-mgmt")),
  "stage-m08": combine(sp("threats-vulns"), cc("network-security"), np("net-implementations"), cy("cysa-vuln-mgmt")),
  "stage-m09": combine(sp("threats-vulns"), cc("network-security"), np("net-implementations"), cy("cysa-vuln-mgmt")),
  "stage-m10": combine(sp("threats-vulns"), cc("network-security"), np("net-implementations"), cy("cysa-vuln-mgmt")),
  "stage-m11": combine(sp("threats-vulns"), cc("network-security"), np("net-implementations"), cy("cysa-vuln-mgmt")),
  "stage-m12": combine(sp("threats-vulns"), cc("network-security"), np("net-implementations"), cy("cysa-vuln-mgmt")),

  // ── cisco-enterprise (stage-m13 → stage-m25) ─────────────────────────────────
  "stage-m13": combine(sp("security-architecture", "threats-vulns"), cc("network-security"), np("net-implementations", "net-troubleshooting")),
  "stage-m14": combine(sp("security-architecture", "threats-vulns"), cc("network-security"), np("net-implementations", "net-troubleshooting")),
  "stage-m15": combine(sp("security-architecture", "threats-vulns"), cc("network-security"), np("net-implementations", "net-troubleshooting")),
  "stage-m16": combine(sp("security-architecture", "threats-vulns"), cc("network-security"), np("net-implementations", "net-troubleshooting")),
  "stage-m17": combine(sp("security-architecture", "threats-vulns"), cc("network-security"), np("net-implementations", "net-troubleshooting")),
  "stage-m18": combine(sp("security-architecture", "threats-vulns"), cc("network-security"), np("net-implementations", "net-troubleshooting")),
  "stage-m19": combine(sp("security-architecture", "threats-vulns"), cc("network-security"), np("net-implementations", "net-troubleshooting")),
  "stage-m20": combine(sp("security-architecture", "threats-vulns"), cc("network-security"), np("net-implementations", "net-troubleshooting")),
  "stage-m21": combine(sp("security-architecture", "threats-vulns"), cc("network-security"), np("net-implementations", "net-troubleshooting")),
  "stage-m22": combine(sp("security-architecture", "threats-vulns"), cc("network-security"), np("net-implementations", "net-troubleshooting")),
  "stage-m23": combine(sp("security-architecture", "threats-vulns"), cc("network-security"), np("net-implementations", "net-troubleshooting")),
  "stage-m24": combine(sp("security-architecture", "threats-vulns"), cc("network-security"), np("net-implementations", "net-troubleshooting")),
  "stage-m25": combine(sp("security-architecture", "threats-vulns"), cc("network-security"), np("net-implementations", "net-troubleshooting")),

  // ── cisco-secops (stage-m26 → stage-m38) ─────────────────────────────────────
  "stage-m26": combine(sp("security-operations"), cc("security-operations-cc"), np("net-security", "net-troubleshooting"), cy("cysa-security-ops")),
  "stage-m27": combine(sp("security-operations"), cc("security-operations-cc"), np("net-security", "net-troubleshooting"), cy("cysa-security-ops")),
  "stage-m28": combine(sp("security-operations"), cc("security-operations-cc"), np("net-security", "net-troubleshooting"), cy("cysa-security-ops")),
  "stage-m29": combine(sp("security-operations"), cc("security-operations-cc"), np("net-security", "net-troubleshooting"), cy("cysa-security-ops")),
  "stage-m30": combine(sp("security-operations"), cc("security-operations-cc"), np("net-security", "net-troubleshooting"), cy("cysa-security-ops")),
  "stage-m31": combine(sp("security-operations"), cc("security-operations-cc"), np("net-security", "net-troubleshooting"), cy("cysa-security-ops")),
  "stage-m32": combine(sp("security-operations"), cc("security-operations-cc"), np("net-security", "net-troubleshooting"), cy("cysa-security-ops")),
  "stage-m33": combine(sp("security-operations"), cc("security-operations-cc"), np("net-security", "net-troubleshooting"), cy("cysa-security-ops")),
  "stage-m34": combine(sp("security-operations"), cc("security-operations-cc"), np("net-security", "net-troubleshooting"), cy("cysa-security-ops")),
  "stage-m35": combine(sp("security-operations"), cc("security-operations-cc"), np("net-security", "net-troubleshooting"), cy("cysa-security-ops")),
  "stage-m36": combine(sp("security-operations"), cc("security-operations-cc"), np("net-security", "net-troubleshooting"), cy("cysa-security-ops")),
  "stage-m37": combine(sp("security-operations"), cc("security-operations-cc"), np("net-security", "net-troubleshooting"), cy("cysa-security-ops")),
  "stage-m38": combine(sp("security-operations"), cc("security-operations-cc"), np("net-security", "net-troubleshooting"), cy("cysa-security-ops")),

  // ── cisco-advanced (stage-m39 → stage-m50) ───────────────────────────────────
  "stage-m39": combine(sp("security-architecture", "security-operations"), cc("security-operations-cc"), np("net-troubleshooting"), cy("cysa-security-ops")),
  "stage-m40": combine(sp("security-architecture", "security-operations"), cc("security-operations-cc"), np("net-troubleshooting"), cy("cysa-security-ops")),
  "stage-m41": combine(sp("security-architecture", "security-operations"), cc("security-operations-cc"), np("net-troubleshooting"), cy("cysa-security-ops")),
  "stage-m42": combine(sp("security-architecture", "security-operations"), cc("security-operations-cc"), np("net-troubleshooting"), cy("cysa-security-ops")),
  "stage-m43": combine(sp("security-architecture", "security-operations"), cc("security-operations-cc"), np("net-troubleshooting"), cy("cysa-security-ops")),
  "stage-m44": combine(sp("security-architecture", "security-operations"), cc("security-operations-cc"), np("net-troubleshooting"), cy("cysa-security-ops")),
  "stage-m45": combine(sp("security-architecture", "security-operations"), cc("security-operations-cc"), np("net-troubleshooting"), cy("cysa-security-ops")),
  "stage-m46": combine(sp("security-architecture", "security-operations"), cc("security-operations-cc"), np("net-troubleshooting"), cy("cysa-security-ops")),
  "stage-m47": combine(sp("security-architecture", "security-operations"), cc("security-operations-cc"), np("net-troubleshooting"), cy("cysa-security-ops")),
  "stage-m48": combine(sp("security-architecture", "security-operations"), cc("security-operations-cc"), np("net-troubleshooting"), cy("cysa-security-ops")),
  "stage-m49": combine(sp("security-architecture", "security-operations"), cc("security-operations-cc"), np("net-troubleshooting"), cy("cysa-security-ops")),
  "stage-m50": combine(sp("security-architecture", "security-operations", "cryptography"), cc("security-operations-cc"), np("net-troubleshooting"), cy("cysa-security-ops")),

  // ── umbrella (umbrella-01 → umbrella-10) ─────────────────────────────────────
  "umbrella-01": combine(sp("security-architecture"), cc("network-security"), np("net-security"), cy("cysa-security-ops")),
  "umbrella-02": combine(sp("security-architecture"), cc("network-security"), np("net-security"), cy("cysa-security-ops")),
  "umbrella-03": combine(sp("threats-vulns"),          cc("network-security"), np("net-security"), cy("cysa-vuln-mgmt")),
  "umbrella-04": combine(sp("threats-vulns"),          cc("network-security"), np("net-security"), cy("cysa-vuln-mgmt")),
  "umbrella-05": combine(sp("threats-vulns"),          cc("network-security"), np("net-security"), cy("cysa-vuln-mgmt")),
  "umbrella-06": combine(sp("security-operations"),    cc("security-operations-cc"), np("net-operations"), cy("cysa-security-ops")),
  "umbrella-07": combine(sp("security-operations"),    cc("security-operations-cc"), np("net-operations"), cy("cysa-security-ops")),
  "umbrella-08": combine(sp("security-architecture"),  cc("network-security"), np("net-security"), cy("cysa-security-ops")),
  "umbrella-09": combine(sp("security-architecture"),  cc("network-security"), np("net-security"), cy("cysa-security-ops")),
  "umbrella-10": combine(sp("security-architecture"),  cc("network-security"), np("net-security"), cy("cysa-security-ops")),

  // ── tech-audit-1 (audit-01 → audit-12) ───────────────────────────────────────
  "audit-01": combine(sp("security-program"), cc("security-principles"), cy("cysa-reporting")),
  "audit-02": combine(sp("security-program"), cc("security-principles"), cy("cysa-reporting")),
  "audit-03": combine(sp("security-program"), cc("security-principles"), cy("cysa-reporting")),
  "audit-04": combine(sp("security-program"), cc("security-principles"), cy("cysa-reporting")),
  "audit-05": combine(sp("security-program"), cc("security-principles"), cy("cysa-reporting")),
  "audit-06": combine(sp("security-program"), cc("security-principles"), cy("cysa-reporting")),
  "audit-07": combine(sp("security-program"), cc("security-principles"), cy("cysa-reporting")),
  "audit-08": combine(sp("security-program"), cc("security-principles"), cy("cysa-reporting")),
  "audit-09": combine(sp("security-program"), cc("security-principles"), cy("cysa-reporting")),
  "audit-10": combine(sp("security-program"), cc("security-principles"), cy("cysa-reporting")),
  "audit-11": combine(sp("security-program"), cc("security-principles"), cy("cysa-reporting")),
  "audit-12": combine(sp("security-program"), cc("security-principles"), cy("cysa-reporting")),

  // ── tech-audit-2 (audit-t01 → audit-t12) ─────────────────────────────────────
  "audit-t01": combine(sp("security-architecture"), cc("access-controls"), cy("cysa-vuln-mgmt")),
  "audit-t02": combine(sp("security-architecture"), cc("access-controls"), cy("cysa-vuln-mgmt")),
  "audit-t03": combine(sp("security-architecture"), cc("access-controls"), cy("cysa-vuln-mgmt")),
  "audit-t04": combine(sp("security-architecture"), cc("access-controls"), cy("cysa-vuln-mgmt")),
  "audit-t05": combine(sp("security-architecture"), cc("access-controls"), cy("cysa-vuln-mgmt")),
  "audit-t06": combine(sp("security-architecture"), cc("access-controls"), cy("cysa-vuln-mgmt")),
  "audit-t07": combine(sp("security-architecture"), cc("access-controls"), cy("cysa-vuln-mgmt")),
  "audit-t08": combine(sp("security-architecture"), cc("access-controls"), cy("cysa-vuln-mgmt")),
  "audit-t09": combine(sp("security-architecture"), cc("access-controls"), cy("cysa-vuln-mgmt")),
  "audit-t10": combine(sp("security-architecture"), cc("access-controls"), cy("cysa-vuln-mgmt")),
  "audit-t11": combine(sp("security-architecture"), cc("access-controls"), cy("cysa-vuln-mgmt")),
  "audit-t12": combine(sp("security-architecture"), cc("access-controls"), cy("cysa-vuln-mgmt")),

  // ── tech-audit-3 (audit-a01 → audit-a12) ─────────────────────────────────────
  "audit-a01": combine(sp("general-security", "threats-vulns"), cc("security-principles"), cy("cysa-reporting")),
  "audit-a02": combine(sp("general-security", "threats-vulns"), cc("security-principles"), cy("cysa-reporting")),
  "audit-a03": combine(sp("general-security", "threats-vulns"), cc("security-principles"), cy("cysa-reporting")),
  "audit-a04": combine(sp("general-security", "threats-vulns"), cc("security-principles"), cy("cysa-reporting")),
  "audit-a05": combine(sp("general-security", "threats-vulns"), cc("security-principles"), cy("cysa-reporting")),
  "audit-a06": combine(sp("general-security", "threats-vulns"), cc("security-principles"), cy("cysa-reporting")),
  "audit-a07": combine(sp("general-security", "threats-vulns"), cc("security-principles"), cy("cysa-reporting")),
  "audit-a08": combine(sp("general-security", "threats-vulns"), cc("security-principles"), cy("cysa-reporting")),
  "audit-a09": combine(sp("general-security", "threats-vulns"), cc("security-principles"), cy("cysa-reporting")),
  "audit-a10": combine(sp("general-security", "threats-vulns"), cc("security-principles"), cy("cysa-reporting")),
  "audit-a11": combine(sp("general-security", "threats-vulns"), cc("security-principles"), cy("cysa-reporting")),
  "audit-a12": combine(sp("general-security", "threats-vulns"), cc("security-principles"), cy("cysa-reporting")),

  // ── tech-audit-4 (audit-cm01 → audit-cm12) ───────────────────────────────────
  "audit-cm01": combine(sp("security-operations"), cc("bc-dr-ir", "security-operations-cc"), np("net-operations"), cy("cysa-security-ops", "cysa-ir")),
  "audit-cm02": combine(sp("security-operations"), cc("bc-dr-ir", "security-operations-cc"), np("net-operations"), cy("cysa-security-ops", "cysa-ir")),
  "audit-cm03": combine(sp("security-operations"), cc("bc-dr-ir", "security-operations-cc"), np("net-operations"), cy("cysa-security-ops", "cysa-ir")),
  "audit-cm04": combine(sp("security-operations"), cc("bc-dr-ir", "security-operations-cc"), np("net-operations"), cy("cysa-security-ops", "cysa-ir")),
  "audit-cm05": combine(sp("security-operations"), cc("bc-dr-ir", "security-operations-cc"), np("net-operations"), cy("cysa-security-ops", "cysa-ir")),
  "audit-cm06": combine(sp("security-operations"), cc("bc-dr-ir", "security-operations-cc"), np("net-operations"), cy("cysa-security-ops", "cysa-ir")),
  "audit-cm07": combine(sp("security-operations"), cc("bc-dr-ir", "security-operations-cc"), np("net-operations"), cy("cysa-security-ops", "cysa-ir")),
  "audit-cm08": combine(sp("security-operations"), cc("bc-dr-ir", "security-operations-cc"), np("net-operations"), cy("cysa-security-ops", "cysa-ir")),
  "audit-cm09": combine(sp("security-operations"), cc("bc-dr-ir", "security-operations-cc"), np("net-operations"), cy("cysa-security-ops", "cysa-ir")),
  "audit-cm10": combine(sp("security-operations"), cc("bc-dr-ir", "security-operations-cc"), np("net-operations"), cy("cysa-security-ops", "cysa-ir")),
  "audit-cm11": combine(sp("security-operations"), cc("bc-dr-ir", "security-operations-cc"), np("net-operations"), cy("cysa-security-ops", "cysa-ir")),
  "audit-cm12": combine(sp("security-operations"), cc("bc-dr-ir", "security-operations-cc"), np("net-operations"), cy("cysa-security-ops", "cysa-ir")),

  // ── mitre (mitre-01 → mitre-12) ──────────────────────────────────────────────
  "mitre-01": combine(sp("threats-vulns", "security-operations"), cc("security-operations-cc"), cy("cysa-security-ops", "cysa-ir")),
  "mitre-02": combine(sp("threats-vulns", "security-operations"), cc("security-operations-cc"), cy("cysa-security-ops", "cysa-ir")),
  "mitre-03": combine(sp("threats-vulns", "security-operations"), cc("security-operations-cc"), cy("cysa-security-ops", "cysa-ir")),
  "mitre-04": combine(sp("threats-vulns", "security-operations"), cc("security-operations-cc"), cy("cysa-security-ops", "cysa-ir")),
  "mitre-05": combine(sp("threats-vulns", "security-operations"), cc("security-operations-cc"), cy("cysa-security-ops", "cysa-ir")),
  "mitre-06": combine(sp("threats-vulns", "security-operations"), cc("security-operations-cc"), cy("cysa-security-ops", "cysa-ir")),
  "mitre-07": combine(sp("threats-vulns", "security-operations"), cc("security-operations-cc"), cy("cysa-security-ops", "cysa-ir")),
  "mitre-08": combine(sp("threats-vulns", "security-operations"), cc("security-operations-cc"), cy("cysa-security-ops", "cysa-ir")),
  "mitre-09": combine(sp("threats-vulns", "security-operations"), cc("security-operations-cc"), cy("cysa-security-ops", "cysa-ir")),
  "mitre-10": combine(sp("threats-vulns", "security-operations"), cc("security-operations-cc"), cy("cysa-security-ops", "cysa-ir")),
  "mitre-11": combine(sp("threats-vulns", "security-operations"), cc("security-operations-cc"), cy("cysa-security-ops", "cysa-ir")),
  "mitre-12": combine(sp("threats-vulns", "security-operations"), cc("security-operations-cc"), cy("cysa-security-ops", "cysa-ir")),

  // ── mitre-atlas (atlas-01 → atlas-12) ────────────────────────────────────────
  "atlas-01": combine(sp("threats-vulns"), cc("security-principles"), cy("cysa-vuln-mgmt")),
  "atlas-02": combine(sp("threats-vulns"), cc("security-principles"), cy("cysa-vuln-mgmt")),
  "atlas-03": combine(sp("threats-vulns"), cc("security-principles"), cy("cysa-vuln-mgmt")),
  "atlas-04": combine(sp("threats-vulns"), cc("security-principles"), cy("cysa-vuln-mgmt")),
  "atlas-05": combine(sp("threats-vulns"), cc("security-principles"), cy("cysa-vuln-mgmt")),
  "atlas-06": combine(sp("threats-vulns"), cc("security-principles"), cy("cysa-vuln-mgmt")),
  "atlas-07": combine(sp("threats-vulns"), cc("security-principles"), cy("cysa-vuln-mgmt")),
  "atlas-08": combine(sp("threats-vulns"), cc("security-principles"), cy("cysa-vuln-mgmt")),
  "atlas-09": combine(sp("threats-vulns"), cc("security-principles"), cy("cysa-vuln-mgmt")),
  "atlas-10": combine(sp("threats-vulns"), cc("security-principles"), cy("cysa-vuln-mgmt")),
  "atlas-11": combine(sp("threats-vulns"), cc("security-principles"), cy("cysa-vuln-mgmt")),
  "atlas-12": combine(sp("threats-vulns"), cc("security-principles"), cy("cysa-vuln-mgmt")),

  // ── owasp-llm (llm-01 → llm-12) ──────────────────────────────────────────────
  "llm-01": combine(sp("threats-vulns", "general-security"), cc("security-principles"), cy("cysa-vuln-mgmt")),
  "llm-02": combine(sp("threats-vulns", "general-security"), cc("security-principles"), cy("cysa-vuln-mgmt")),
  "llm-03": combine(sp("threats-vulns", "general-security"), cc("security-principles"), cy("cysa-vuln-mgmt")),
  "llm-04": combine(sp("threats-vulns", "general-security"), cc("security-principles"), cy("cysa-vuln-mgmt")),
  "llm-05": combine(sp("threats-vulns", "general-security"), cc("security-principles"), cy("cysa-vuln-mgmt")),
  "llm-06": combine(sp("threats-vulns", "general-security"), cc("security-principles"), cy("cysa-vuln-mgmt")),
  "llm-07": combine(sp("threats-vulns", "general-security"), cc("security-principles"), cy("cysa-vuln-mgmt")),
  "llm-08": combine(sp("threats-vulns", "general-security"), cc("security-principles"), cy("cysa-vuln-mgmt")),
  "llm-09": combine(sp("threats-vulns", "general-security"), cc("security-principles"), cy("cysa-vuln-mgmt")),
  "llm-10": combine(sp("threats-vulns", "general-security"), cc("security-principles"), cy("cysa-vuln-mgmt")),
  "llm-11": combine(sp("threats-vulns", "general-security"), cc("security-principles"), cy("cysa-vuln-mgmt")),
  "llm-12": combine(sp("threats-vulns", "general-security"), cc("security-principles"), cy("cysa-vuln-mgmt")),

  // ── quantum-1 (quantum-01 → quantum-10) ──────────────────────────────────────
  "quantum-01": combine(sp("cryptography"), cc("security-principles")),
  "quantum-02": combine(sp("cryptography"), cc("security-principles")),
  "quantum-03": combine(sp("cryptography"), cc("security-principles")),
  "quantum-04": combine(sp("cryptography"), cc("security-principles")),
  "quantum-05": combine(sp("cryptography"), cc("security-principles")),
  "quantum-06": combine(sp("cryptography"), cc("security-principles")),
  "quantum-07": combine(sp("cryptography"), cc("security-principles")),
  "quantum-08": combine(sp("cryptography"), cc("security-principles")),
  "quantum-09": combine(sp("cryptography"), cc("security-principles")),
  "quantum-10": combine(sp("cryptography"), cc("security-principles")),

  // ── quantum-2 (quantum-b01 → quantum-b10) ────────────────────────────────────
  "quantum-b01": combine(sp("cryptography", "security-architecture"), cc("security-principles")),
  "quantum-b02": combine(sp("cryptography", "security-architecture"), cc("security-principles")),
  "quantum-b03": combine(sp("cryptography", "security-architecture"), cc("security-principles")),
  "quantum-b04": combine(sp("cryptography", "security-architecture"), cc("security-principles")),
  "quantum-b05": combine(sp("cryptography", "security-architecture"), cc("security-principles")),
  "quantum-b06": combine(sp("cryptography", "security-architecture"), cc("security-principles")),
  "quantum-b07": combine(sp("cryptography", "security-architecture"), cc("security-principles")),
  "quantum-b08": combine(sp("cryptography", "security-architecture"), cc("security-principles")),
  "quantum-b09": combine(sp("cryptography", "security-architecture"), cc("security-principles")),
  "quantum-b10": combine(sp("cryptography", "security-architecture"), cc("security-principles")),

  // ── quantum-3 (quantum-c01 → quantum-c10) ────────────────────────────────────
  "quantum-c01": combine(sp("cryptography", "security-architecture"), cc("security-principles")),
  "quantum-c02": combine(sp("cryptography", "security-architecture"), cc("security-principles")),
  "quantum-c03": combine(sp("cryptography", "security-architecture"), cc("security-principles")),
  "quantum-c04": combine(sp("cryptography", "security-architecture"), cc("security-principles")),
  "quantum-c05": combine(sp("cryptography", "security-architecture"), cc("security-principles")),
  "quantum-c06": combine(sp("cryptography", "security-architecture"), cc("security-principles")),
  "quantum-c07": combine(sp("cryptography", "security-architecture"), cc("security-principles")),
  "quantum-c08": combine(sp("cryptography", "security-architecture"), cc("security-principles")),
  "quantum-c09": combine(sp("cryptography", "security-architecture"), cc("security-principles")),
  "quantum-c10": combine(sp("cryptography", "security-architecture"), cc("security-principles")),
};

// ─── Lookup helpers ────────────────────────────────────────────────────────────

export function getCertDomainsForStage(stageId: string): CertDomain[] {
  return CERT_DOMAINS[stageId] ?? [];
}

export function getStagesForCert(certId: CertId): string[] {
  return Object.entries(CERT_DOMAINS)
    .filter(([, domains]) => domains.some((d) => d.certId === certId))
    .map(([id]) => id);
}

export function getDomainsForCert(certId: CertId): CertDomainDef[] {
  if (certId === "comptia-secplus") return COMPTIA_DOMAINS;
  if (certId === "isc2-cc") return ISC2_DOMAINS;
  if (certId === "comptia-netplus") return NETPLUS_DOMAINS;
  if (certId === "comptia-cysa") return CYSA_DOMAINS;
  return [];
}

export function computeCertReadiness(
  certId: CertId,
  completedStageIds: string[]
): {
  overall: number;
  domains: Array<{ domain: CertDomainDef; completed: number; total: number; pct: number }>;
} {
  const defs = getDomainsForCert(certId);

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

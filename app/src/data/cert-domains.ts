// Certificate path domain mappings.
// Covers: CompTIA Security+ SY0-701, ISC² CC, CompTIA Network+ N10-009, CompTIA CySA+ CS0-003,
//         ISACA CISA, ISACA CISM, ISACA CRISC.
// Stage → domain weights match official exam blueprints.

export type CertId =
  | "comptia-secplus"
  | "isc2-cc"
  | "comptia-netplus"
  | "comptia-cysa"
  | "isaca-cisa"
  | "isaca-cism"
  | "isaca-crisc";

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

// ─── ISACA domain definitions ──────────────────────────────────────────────────

// CISA — Certified Information Systems Auditor (2022 blueprint)
export const CISA_DOMAINS: CertDomainDef[] = [
  { id: "cisa-audit-process", name: "IS Auditing Process",                              weight: 21 },
  { id: "cisa-governance",    name: "Governance and Management of IT",                  weight: 17 },
  { id: "cisa-acquisition",   name: "IS Acquisition, Development & Implementation",     weight: 12 },
  { id: "cisa-operations",    name: "IS Operations and Business Resilience",             weight: 23 },
  { id: "cisa-protection",    name: "Protection of Information Assets",                  weight: 27 },
];

// CISM — Certified Information Security Manager (2022 blueprint)
export const CISM_DOMAINS: CertDomainDef[] = [
  { id: "cism-governance", name: "Information Security Governance",      weight: 17 },
  { id: "cism-risk",       name: "Information Security Risk Management", weight: 20 },
  { id: "cism-program",    name: "Information Security Program",         weight: 33 },
  { id: "cism-incident",   name: "Incident Management",                  weight: 30 },
];

// CRISC — Certified in Risk and Information Systems Control (2022 blueprint)
export const CRISC_DOMAINS: CertDomainDef[] = [
  { id: "crisc-governance",      name: "Governance",                       weight: 26 },
  { id: "crisc-risk-assessment", name: "IT Risk Assessment",               weight: 20 },
  { id: "crisc-risk-response",   name: "Risk Response and Reporting",      weight: 32 },
  { id: "crisc-it-security",     name: "Information Technology & Security", weight: 22 },
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

function cisa(...domainIds: string[]): CertDomain[] {
  return domainIds.map((id) => {
    const def = CISA_DOMAINS.find((d) => d.id === id)!;
    return { certId: "isaca-cisa" as CertId, domainId: id, domainName: def.name };
  });
}

function cism(...domainIds: string[]): CertDomain[] {
  return domainIds.map((id) => {
    const def = CISM_DOMAINS.find((d) => d.id === id)!;
    return { certId: "isaca-cism" as CertId, domainId: id, domainName: def.name };
  });
}

function crisc(...domainIds: string[]): CertDomain[] {
  return domainIds.map((id) => {
    const def = CRISC_DOMAINS.find((d) => d.id === id)!;
    return { certId: "isaca-crisc" as CertId, domainId: id, domainName: def.name };
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

  "bt-01": combine(sp("general-security"),           cc("security-principles"), np("net-fundamentals"),  cisa("cisa-protection"), crisc("crisc-it-security")),
  "bt-02": combine(sp("general-security"),           cc("security-principles"), np("net-fundamentals"),  cisa("cisa-protection"), crisc("crisc-it-security")),
  "bt-03": combine(sp("general-security"),           cc("security-principles"), np("net-fundamentals"),  cisa("cisa-protection"), crisc("crisc-it-security")),
  "bt-04": combine(sp("security-architecture"),      cc("network-security"),    np("net-implementations"), cisa("cisa-protection"), crisc("crisc-it-security")),
  "bt-05": combine(sp("general-security"),           cc("network-security"),    np("net-fundamentals"),  cisa("cisa-protection"), crisc("crisc-it-security")),
  "bt-06": combine(sp("general-security"),           cc("network-security"),    np("net-fundamentals"),  cisa("cisa-protection"), crisc("crisc-it-security")),
  "bt-07": combine(sp("security-architecture"),      cc("network-security"),    np("net-security"),      cisa("cisa-protection"), crisc("crisc-it-security")),
  "bt-08": combine(sp("general-security"),           cc("network-security"),    np("net-fundamentals"),  cisa("cisa-protection"), crisc("crisc-it-security")),
  "bt-09": combine(sp("security-architecture"),      cc("network-security"),    np("net-implementations", "net-fundamentals"), cisa("cisa-protection"), crisc("crisc-it-security")),
  "bt-10": combine(sp("general-security"),           cc("network-security"),    np("net-fundamentals"),  cisa("cisa-protection"), crisc("crisc-it-security")),
  "bt-11": combine(sp("general-security"),           cc("network-security"),    np("net-security"),      cisa("cisa-protection"), crisc("crisc-it-security")),
  "bt-12": combine(sp("general-security"),           cc("security-principles"), np("net-fundamentals"),  cisa("cisa-protection"), crisc("crisc-it-security")),
  "bt-13": combine(sp("general-security"),           cc("network-security"),    np("net-fundamentals"),  cisa("cisa-protection"), crisc("crisc-it-security")),
  "bt-14": combine(sp("cryptography"),               cc("network-security"),    np("net-security"),      cisa("cisa-protection"), crisc("crisc-it-security")),
  "bt-15": combine(sp("general-security"),           cc("security-principles"), np("net-security"),      cisa("cisa-protection"), crisc("crisc-it-security")),
  "bt-16": combine(sp("general-security"),           cc("network-security"),    np("net-fundamentals"),  cisa("cisa-protection"), crisc("crisc-it-security")),
  "bt-17": combine(sp("general-security"),           cc("network-security"),    np("net-operations"),    cisa("cisa-operations"), crisc("crisc-it-security")),
  "bt-18": combine(sp("general-security"),           cc("network-security"),    np("net-operations"),    cisa("cisa-operations"), crisc("crisc-it-security")),
  "bt-19": combine(sp("threats-vulns"),              cc("network-security"),    np("net-security"),      cisa("cisa-protection"), cism("cism-risk"), crisc("crisc-risk-assessment")),
  "bt-20": combine(sp("security-architecture"),      cc("network-security"),    np("net-implementations"), cisa("cisa-protection"), crisc("crisc-it-security")),
  "bt-21": combine(sp("threats-vulns"),              cc("security-principles"), np("net-security"),      cisa("cisa-protection"), cism("cism-risk"), crisc("crisc-risk-assessment")),
  "bt-22": combine(sp("general-security"),           cc("access-controls"),     np("net-security"),      cisa("cisa-protection"), cism("cism-risk"), crisc("crisc-risk-assessment")),
  "bt-23": combine(sp("general-security"),           cc("access-controls"),                              cisa("cisa-protection"), cism("cism-risk"), crisc("crisc-risk-assessment")),
  "bt-24": combine(sp("threats-vulns"),              cc("network-security"),    np("net-security"),      cisa("cisa-protection"), cism("cism-risk"), crisc("crisc-risk-assessment")),
  "bt-25": combine(sp("threats-vulns"),              cc("security-principles"),                          cisa("cisa-protection"), cism("cism-risk"), crisc("crisc-risk-assessment")),
  "bt-26": combine(sp("threats-vulns", "security-operations"), cc("security-operations-cc"), cy("cysa-security-ops"), cisa("cisa-operations"), cism("cism-incident"), crisc("crisc-risk-response")),
  "bt-27": combine(sp("threats-vulns"),              cc("security-principles"), cy("cysa-vuln-mgmt"),   cisa("cisa-protection"), cism("cism-risk"), crisc("crisc-risk-assessment")),
  "bt-28": combine(sp("security-program"),           cc("security-principles"),                          cisa("cisa-governance"), cism("cism-governance"), crisc("crisc-governance")),
  "bt-29": combine(sp("security-program"),           cc("security-principles"),                          cisa("cisa-governance"), cism("cism-governance"), crisc("crisc-governance")),
  "bt-30": combine(sp("security-operations"),        cc("bc-dr-ir"),            cy("cysa-ir"),           cisa("cisa-operations"), cism("cism-incident"), crisc("crisc-risk-response")),

  // ── ancient (stage-01 → stage-12) ────────────────────────────────────────────
  // stage-01 CIA Triad, stage-02 Supply Chain/SolarWinds, stage-03 SQLi, stage-04 XSS,
  // stage-05 Heartbleed, stage-06 IDOR, stage-07 Auth Failures, stage-08 Log4Shell,
  // stage-09 WannaCry, stage-10 SSRF, stage-11 Equifax/Struts, stage-12 MongoDB
  "stage-01": combine(sp("general-security"),               cc("security-principles"),    cisa("cisa-protection"),           cism("cism-governance"),           crisc("crisc-governance")),
  "stage-02": combine(sp("threats-vulns", "general-security"), cc("security-principles"), cisa("cisa-protection"),           cism("cism-risk"),                 crisc("crisc-risk-assessment")),
  "stage-03": combine(sp("threats-vulns"),                  cc("security-principles", "access-controls"), cisa("cisa-protection"), cism("cism-risk"), crisc("crisc-risk-assessment"), cy("cysa-vuln-mgmt")),
  "stage-04": combine(sp("threats-vulns"),                  cc("security-principles"),    cisa("cisa-protection"),           cism("cism-risk"),                 crisc("crisc-risk-assessment"), cy("cysa-vuln-mgmt")),
  "stage-05": combine(sp("cryptography", "threats-vulns"),  cc("security-principles", "network-security"), cisa("cisa-protection"), cism("cism-risk"), crisc("crisc-risk-assessment")),
  "stage-06": combine(sp("threats-vulns"),                  cc("access-controls"),        cisa("cisa-protection"),           cism("cism-risk"),                 crisc("crisc-risk-assessment"), cy("cysa-vuln-mgmt")),
  "stage-07": combine(sp("general-security", "threats-vulns"), cc("access-controls"),     cisa("cisa-protection"),           cism("cism-risk"),                 crisc("crisc-risk-assessment")),
  "stage-08": combine(sp("threats-vulns"),                  cc("security-principles"),    cisa("cisa-protection", "cisa-operations"), cism("cism-risk", "cism-incident"), crisc("crisc-risk-assessment"), cy("cysa-vuln-mgmt")),
  "stage-09": combine(sp("threats-vulns", "security-operations"), cc("security-operations-cc", "bc-dr-ir"), cisa("cisa-operations"), cism("cism-incident"), crisc("crisc-risk-response"), cy("cysa-security-ops", "cysa-ir")),
  "stage-10": combine(sp("threats-vulns"),                  cc("security-principles"),    cisa("cisa-protection"),           cism("cism-risk"),                 crisc("crisc-risk-assessment"), cy("cysa-vuln-mgmt")),
  "stage-11": combine(sp("threats-vulns", "security-operations"), cc("security-operations-cc"), cisa("cisa-operations"), cism("cism-incident"), crisc("crisc-risk-response"), cy("cysa-security-ops", "cysa-ir")),
  "stage-12": combine(sp("threats-vulns", "security-operations"), cc("security-operations-cc"), cisa("cisa-protection"), cism("cism-program"), crisc("crisc-risk-response"), cy("cysa-vuln-mgmt")),

  // ── cisco-core (stage-m01 → stage-m12) — network device CVEs ─────────────────
  "stage-m01": combine(sp("threats-vulns"), cc("network-security"), np("net-implementations"), cy("cysa-vuln-mgmt"), cisa("cisa-protection"), cism("cism-risk"), crisc("crisc-risk-assessment", "crisc-it-security")),
  "stage-m02": combine(sp("threats-vulns"), cc("network-security"), np("net-implementations"), cy("cysa-vuln-mgmt"), cisa("cisa-protection"), cism("cism-risk"), crisc("crisc-risk-assessment", "crisc-it-security")),
  "stage-m03": combine(sp("threats-vulns"), cc("network-security"), np("net-implementations"), cy("cysa-vuln-mgmt"), cisa("cisa-protection"), cism("cism-risk"), crisc("crisc-risk-assessment", "crisc-it-security")),
  "stage-m04": combine(sp("threats-vulns"), cc("network-security"), np("net-implementations"), cy("cysa-vuln-mgmt"), cisa("cisa-protection"), cism("cism-risk"), crisc("crisc-risk-assessment", "crisc-it-security")),
  "stage-m05": combine(sp("threats-vulns"), cc("network-security"), np("net-implementations"), cy("cysa-vuln-mgmt"), cisa("cisa-protection"), cism("cism-risk"), crisc("crisc-risk-assessment", "crisc-it-security")),
  "stage-m06": combine(sp("threats-vulns"), cc("network-security"), np("net-implementations"), cy("cysa-vuln-mgmt"), cisa("cisa-protection"), cism("cism-risk"), crisc("crisc-risk-assessment", "crisc-it-security")),
  "stage-m07": combine(sp("threats-vulns"), cc("network-security"), np("net-implementations"), cy("cysa-vuln-mgmt"), cisa("cisa-protection"), cism("cism-risk"), crisc("crisc-risk-assessment", "crisc-it-security")),
  "stage-m08": combine(sp("threats-vulns"), cc("network-security"), np("net-implementations"), cy("cysa-vuln-mgmt"), cisa("cisa-protection"), cism("cism-risk"), crisc("crisc-risk-assessment", "crisc-it-security")),
  "stage-m09": combine(sp("threats-vulns"), cc("network-security"), np("net-implementations"), cy("cysa-vuln-mgmt"), cisa("cisa-protection"), cism("cism-risk"), crisc("crisc-risk-assessment", "crisc-it-security")),
  "stage-m10": combine(sp("threats-vulns"), cc("network-security"), np("net-implementations"), cy("cysa-vuln-mgmt"), cisa("cisa-protection"), cism("cism-risk"), crisc("crisc-risk-assessment", "crisc-it-security")),
  "stage-m11": combine(sp("threats-vulns"), cc("network-security"), np("net-implementations"), cy("cysa-vuln-mgmt"), cisa("cisa-protection"), cism("cism-risk"), crisc("crisc-risk-assessment", "crisc-it-security")),
  "stage-m12": combine(sp("threats-vulns"), cc("network-security"), np("net-implementations"), cy("cysa-vuln-mgmt"), cisa("cisa-protection"), cism("cism-risk"), crisc("crisc-risk-assessment", "crisc-it-security")),

  // ── cisco-enterprise (stage-m13 → stage-m25) — enterprise attack campaigns ───
  "stage-m13": combine(sp("security-architecture", "threats-vulns"), cc("network-security"), np("net-implementations", "net-troubleshooting"), cisa("cisa-protection", "cisa-operations"), cism("cism-risk"), crisc("crisc-risk-assessment", "crisc-it-security")),
  "stage-m14": combine(sp("security-architecture", "threats-vulns"), cc("network-security"), np("net-implementations", "net-troubleshooting"), cisa("cisa-protection", "cisa-operations"), cism("cism-risk"), crisc("crisc-risk-assessment", "crisc-it-security")),
  "stage-m15": combine(sp("security-architecture", "threats-vulns"), cc("network-security"), np("net-implementations", "net-troubleshooting"), cisa("cisa-protection", "cisa-operations"), cism("cism-risk"), crisc("crisc-risk-assessment", "crisc-it-security")),
  "stage-m16": combine(sp("security-architecture", "threats-vulns"), cc("network-security"), np("net-implementations", "net-troubleshooting"), cisa("cisa-protection", "cisa-operations"), cism("cism-risk"), crisc("crisc-risk-assessment", "crisc-it-security")),
  "stage-m17": combine(sp("security-architecture", "threats-vulns"), cc("network-security"), np("net-implementations", "net-troubleshooting"), cisa("cisa-protection", "cisa-operations"), cism("cism-risk"), crisc("crisc-risk-assessment", "crisc-it-security")),
  "stage-m18": combine(sp("security-architecture", "threats-vulns"), cc("network-security"), np("net-implementations", "net-troubleshooting"), cisa("cisa-protection", "cisa-operations"), cism("cism-risk"), crisc("crisc-risk-assessment", "crisc-it-security")),
  "stage-m19": combine(sp("security-architecture", "threats-vulns"), cc("network-security"), np("net-implementations", "net-troubleshooting"), cisa("cisa-protection", "cisa-operations"), cism("cism-risk"), crisc("crisc-risk-assessment", "crisc-it-security")),
  "stage-m20": combine(sp("security-architecture", "threats-vulns"), cc("network-security"), np("net-implementations", "net-troubleshooting"), cisa("cisa-protection", "cisa-operations"), cism("cism-risk"), crisc("crisc-risk-assessment", "crisc-it-security")),
  "stage-m21": combine(sp("security-architecture", "threats-vulns"), cc("network-security"), np("net-implementations", "net-troubleshooting"), cisa("cisa-protection", "cisa-operations"), cism("cism-risk"), crisc("crisc-risk-assessment", "crisc-it-security")),
  "stage-m22": combine(sp("security-architecture", "threats-vulns"), cc("network-security"), np("net-implementations", "net-troubleshooting"), cisa("cisa-protection", "cisa-operations"), cism("cism-risk"), crisc("crisc-risk-assessment", "crisc-it-security")),
  "stage-m23": combine(sp("security-architecture", "threats-vulns"), cc("network-security"), np("net-implementations", "net-troubleshooting"), cisa("cisa-protection", "cisa-operations"), cism("cism-risk"), crisc("crisc-risk-assessment", "crisc-it-security")),
  "stage-m24": combine(sp("security-architecture", "threats-vulns"), cc("network-security"), np("net-implementations", "net-troubleshooting"), cisa("cisa-protection", "cisa-operations"), cism("cism-risk"), crisc("crisc-risk-assessment", "crisc-it-security")),
  "stage-m25": combine(sp("security-architecture", "threats-vulns"), cc("network-security"), np("net-implementations", "net-troubleshooting"), cisa("cisa-protection", "cisa-operations"), cism("cism-risk"), crisc("crisc-risk-assessment", "crisc-it-security")),

  // ── cisco-secops (stage-m26 → stage-m38) — security operations ───────────────
  "stage-m26": combine(sp("security-operations"), cc("security-operations-cc"), np("net-security", "net-troubleshooting"), cy("cysa-security-ops"), cisa("cisa-operations"), cism("cism-incident"), crisc("crisc-risk-response")),
  "stage-m27": combine(sp("security-operations"), cc("security-operations-cc"), np("net-security", "net-troubleshooting"), cy("cysa-security-ops"), cisa("cisa-operations"), cism("cism-incident"), crisc("crisc-risk-response")),
  "stage-m28": combine(sp("security-operations"), cc("security-operations-cc"), np("net-security", "net-troubleshooting"), cy("cysa-security-ops"), cisa("cisa-operations"), cism("cism-incident"), crisc("crisc-risk-response")),
  "stage-m29": combine(sp("security-operations"), cc("security-operations-cc"), np("net-security", "net-troubleshooting"), cy("cysa-security-ops"), cisa("cisa-operations"), cism("cism-incident"), crisc("crisc-risk-response")),
  "stage-m30": combine(sp("security-operations"), cc("security-operations-cc"), np("net-security", "net-troubleshooting"), cy("cysa-security-ops"), cisa("cisa-operations"), cism("cism-incident"), crisc("crisc-risk-response")),
  "stage-m31": combine(sp("security-operations"), cc("security-operations-cc"), np("net-security", "net-troubleshooting"), cy("cysa-security-ops"), cisa("cisa-operations"), cism("cism-incident"), crisc("crisc-risk-response")),
  "stage-m32": combine(sp("security-operations"), cc("security-operations-cc"), np("net-security", "net-troubleshooting"), cy("cysa-security-ops"), cisa("cisa-operations"), cism("cism-incident"), crisc("crisc-risk-response")),
  "stage-m33": combine(sp("security-operations"), cc("security-operations-cc"), np("net-security", "net-troubleshooting"), cy("cysa-security-ops"), cisa("cisa-operations"), cism("cism-incident"), crisc("crisc-risk-response")),
  "stage-m34": combine(sp("security-operations"), cc("security-operations-cc"), np("net-security", "net-troubleshooting"), cy("cysa-security-ops"), cisa("cisa-operations"), cism("cism-incident"), crisc("crisc-risk-response")),
  "stage-m35": combine(sp("security-operations"), cc("security-operations-cc"), np("net-security", "net-troubleshooting"), cy("cysa-security-ops"), cisa("cisa-operations"), cism("cism-incident"), crisc("crisc-risk-response")),
  "stage-m36": combine(sp("security-operations"), cc("security-operations-cc"), np("net-security", "net-troubleshooting"), cy("cysa-security-ops"), cisa("cisa-operations"), cism("cism-incident"), crisc("crisc-risk-response")),
  "stage-m37": combine(sp("security-operations"), cc("security-operations-cc"), np("net-security", "net-troubleshooting"), cy("cysa-security-ops"), cisa("cisa-operations"), cism("cism-incident"), crisc("crisc-risk-response")),
  "stage-m38": combine(sp("security-operations"), cc("security-operations-cc"), np("net-security", "net-troubleshooting"), cy("cysa-security-ops"), cisa("cisa-operations"), cism("cism-incident"), crisc("crisc-risk-response")),

  // ── cisco-advanced (stage-m39 → stage-m50) — advanced defense ────────────────
  "stage-m39": combine(sp("security-architecture", "security-operations"), cc("security-operations-cc"), np("net-troubleshooting"), cy("cysa-security-ops"), cisa("cisa-operations", "cisa-protection"), cism("cism-program", "cism-incident"), crisc("crisc-risk-response", "crisc-it-security")),
  "stage-m40": combine(sp("security-architecture", "security-operations"), cc("security-operations-cc"), np("net-troubleshooting"), cy("cysa-security-ops"), cisa("cisa-operations", "cisa-protection"), cism("cism-program", "cism-incident"), crisc("crisc-risk-response", "crisc-it-security")),
  "stage-m41": combine(sp("security-architecture", "security-operations"), cc("security-operations-cc"), np("net-troubleshooting"), cy("cysa-security-ops"), cisa("cisa-operations", "cisa-protection"), cism("cism-program", "cism-incident"), crisc("crisc-risk-response", "crisc-it-security")),
  "stage-m42": combine(sp("security-architecture", "security-operations"), cc("security-operations-cc"), np("net-troubleshooting"), cy("cysa-security-ops"), cisa("cisa-operations", "cisa-protection"), cism("cism-program", "cism-incident"), crisc("crisc-risk-response", "crisc-it-security")),
  "stage-m43": combine(sp("security-architecture", "security-operations"), cc("security-operations-cc"), np("net-troubleshooting"), cy("cysa-security-ops"), cisa("cisa-operations", "cisa-protection"), cism("cism-program", "cism-incident"), crisc("crisc-risk-response", "crisc-it-security")),
  "stage-m44": combine(sp("security-architecture", "security-operations"), cc("security-operations-cc"), np("net-troubleshooting"), cy("cysa-security-ops"), cisa("cisa-operations", "cisa-protection"), cism("cism-program", "cism-incident"), crisc("crisc-risk-response", "crisc-it-security")),
  "stage-m45": combine(sp("security-architecture", "security-operations"), cc("security-operations-cc"), np("net-troubleshooting"), cy("cysa-security-ops"), cisa("cisa-operations", "cisa-protection"), cism("cism-program", "cism-incident"), crisc("crisc-risk-response", "crisc-it-security")),
  "stage-m46": combine(sp("security-architecture", "security-operations"), cc("security-operations-cc"), np("net-troubleshooting"), cy("cysa-security-ops"), cisa("cisa-operations", "cisa-protection"), cism("cism-program", "cism-incident"), crisc("crisc-risk-response", "crisc-it-security")),
  "stage-m47": combine(sp("security-architecture", "security-operations"), cc("security-operations-cc"), np("net-troubleshooting"), cy("cysa-security-ops"), cisa("cisa-operations", "cisa-protection"), cism("cism-program", "cism-incident"), crisc("crisc-risk-response", "crisc-it-security")),
  "stage-m48": combine(sp("security-architecture", "security-operations"), cc("security-operations-cc"), np("net-troubleshooting"), cy("cysa-security-ops"), cisa("cisa-operations", "cisa-protection"), cism("cism-program", "cism-incident"), crisc("crisc-risk-response", "crisc-it-security")),
  "stage-m49": combine(sp("security-architecture", "security-operations"), cc("security-operations-cc"), np("net-troubleshooting"), cy("cysa-security-ops"), cisa("cisa-operations", "cisa-protection"), cism("cism-program", "cism-incident"), crisc("crisc-risk-response", "crisc-it-security")),
  "stage-m50": combine(sp("security-architecture", "security-operations", "cryptography"), cc("security-operations-cc"), np("net-troubleshooting"), cy("cysa-security-ops"), cisa("cisa-operations", "cisa-protection"), cism("cism-program", "cism-incident"), crisc("crisc-risk-response", "crisc-it-security")),

  // ── umbrella (umbrella-01 → umbrella-10) — Cisco Umbrella/SASE ───────────────
  "umbrella-01": combine(sp("security-architecture"), cc("network-security"), np("net-security"), cy("cysa-security-ops"), cisa("cisa-protection"), cism("cism-program"), crisc("crisc-it-security")),
  "umbrella-02": combine(sp("security-architecture"), cc("network-security"), np("net-security"), cy("cysa-security-ops"), cisa("cisa-protection"), cism("cism-program"), crisc("crisc-it-security")),
  "umbrella-03": combine(sp("threats-vulns"),          cc("network-security"), np("net-security"), cy("cysa-vuln-mgmt"), cisa("cisa-protection"), cism("cism-risk"), crisc("crisc-risk-assessment")),
  "umbrella-04": combine(sp("threats-vulns"),          cc("network-security"), np("net-security"), cy("cysa-vuln-mgmt"), cisa("cisa-protection"), cism("cism-risk"), crisc("crisc-risk-assessment")),
  "umbrella-05": combine(sp("threats-vulns"),          cc("network-security"), np("net-security"), cy("cysa-vuln-mgmt"), cisa("cisa-protection"), cism("cism-risk"), crisc("crisc-risk-assessment")),
  "umbrella-06": combine(sp("security-operations"),    cc("security-operations-cc"), np("net-operations"), cy("cysa-security-ops"), cisa("cisa-operations"), cism("cism-incident"), crisc("crisc-risk-response")),
  "umbrella-07": combine(sp("security-operations"),    cc("security-operations-cc"), np("net-operations"), cy("cysa-security-ops"), cisa("cisa-operations"), cism("cism-incident"), crisc("crisc-risk-response")),
  "umbrella-08": combine(sp("security-architecture"),  cc("network-security"), np("net-security"), cy("cysa-security-ops"), cisa("cisa-protection"), cism("cism-program"), crisc("crisc-it-security")),
  "umbrella-09": combine(sp("security-architecture"),  cc("network-security"), np("net-security"), cy("cysa-security-ops"), cisa("cisa-protection"), cism("cism-program"), crisc("crisc-it-security")),
  "umbrella-10": combine(sp("security-architecture"),  cc("network-security"), np("net-security"), cy("cysa-security-ops"), cisa("cisa-protection"), cism("cism-program"), crisc("crisc-it-security")),

  // ── tech-audit-1 (audit-01 → audit-12) — audit foundations ───────────────────
  // CISA Domain 1 (Audit Process) + Domain 2 (Governance) = core CISA prep
  // CISM Domain 1 (Governance) = core CISM prep
  // CRISC Domain 1 (Governance) = core CRISC prep
  "audit-01": combine(sp("security-program"), cc("security-principles"), cy("cysa-reporting"), cisa("cisa-audit-process", "cisa-governance"), cism("cism-governance"), crisc("crisc-governance")),
  "audit-02": combine(sp("security-program"), cc("security-principles"), cy("cysa-reporting"), cisa("cisa-audit-process", "cisa-governance"), cism("cism-governance"), crisc("crisc-governance")),
  "audit-03": combine(sp("security-program"), cc("security-principles"), cy("cysa-reporting"), cisa("cisa-audit-process", "cisa-governance"), cism("cism-governance"), crisc("crisc-governance")),
  "audit-04": combine(sp("security-program"), cc("security-principles"), cy("cysa-reporting"), cisa("cisa-audit-process", "cisa-governance"), cism("cism-governance"), crisc("crisc-governance")),
  "audit-05": combine(sp("security-program"), cc("security-principles"), cy("cysa-reporting"), cisa("cisa-audit-process", "cisa-governance"), cism("cism-governance"), crisc("crisc-governance")),
  "audit-06": combine(sp("security-program"), cc("security-principles"), cy("cysa-reporting"), cisa("cisa-audit-process", "cisa-governance"), cism("cism-governance"), crisc("crisc-governance")),
  "audit-07": combine(sp("security-program"), cc("security-principles"), cy("cysa-reporting"), cisa("cisa-audit-process", "cisa-governance"), cism("cism-governance"), crisc("crisc-governance")),
  "audit-08": combine(sp("security-program"), cc("security-principles"), cy("cysa-reporting"), cisa("cisa-audit-process", "cisa-governance"), cism("cism-governance"), crisc("crisc-governance")),
  "audit-09": combine(sp("security-program"), cc("security-principles"), cy("cysa-reporting"), cisa("cisa-audit-process", "cisa-governance"), cism("cism-governance"), crisc("crisc-governance")),
  "audit-10": combine(sp("security-program"), cc("security-principles"), cy("cysa-reporting"), cisa("cisa-audit-process", "cisa-governance"), cism("cism-governance"), crisc("crisc-governance")),
  "audit-11": combine(sp("security-program"), cc("security-principles"), cy("cysa-reporting"), cisa("cisa-audit-process", "cisa-governance"), cism("cism-governance"), crisc("crisc-governance")),
  "audit-12": combine(sp("security-program"), cc("security-principles"), cy("cysa-reporting"), cisa("cisa-audit-process", "cisa-governance"), cism("cism-governance"), crisc("crisc-governance")),

  // ── tech-audit-2 (audit-t01 → audit-t12) — technical audit ───────────────────
  // CISA Domain 3 (Acquisition/Dev/Impl) + Domain 5 (Protection)
  // CISM Domain 3 (Program) | CRISC Domain 2 (Risk Assessment)
  "audit-t01": combine(sp("security-architecture"), cc("access-controls"), cy("cysa-vuln-mgmt"), cisa("cisa-acquisition", "cisa-protection"), cism("cism-program"), crisc("crisc-risk-assessment")),
  "audit-t02": combine(sp("security-architecture"), cc("access-controls"), cy("cysa-vuln-mgmt"), cisa("cisa-acquisition", "cisa-protection"), cism("cism-program"), crisc("crisc-risk-assessment")),
  "audit-t03": combine(sp("security-architecture"), cc("access-controls"), cy("cysa-vuln-mgmt"), cisa("cisa-acquisition", "cisa-protection"), cism("cism-program"), crisc("crisc-risk-assessment")),
  "audit-t04": combine(sp("security-architecture"), cc("access-controls"), cy("cysa-vuln-mgmt"), cisa("cisa-acquisition", "cisa-protection"), cism("cism-program"), crisc("crisc-risk-assessment")),
  "audit-t05": combine(sp("security-architecture"), cc("access-controls"), cy("cysa-vuln-mgmt"), cisa("cisa-acquisition", "cisa-protection"), cism("cism-program"), crisc("crisc-risk-assessment")),
  "audit-t06": combine(sp("security-architecture"), cc("access-controls"), cy("cysa-vuln-mgmt"), cisa("cisa-acquisition", "cisa-protection"), cism("cism-program"), crisc("crisc-risk-assessment")),
  "audit-t07": combine(sp("security-architecture"), cc("access-controls"), cy("cysa-vuln-mgmt"), cisa("cisa-acquisition", "cisa-protection"), cism("cism-program"), crisc("crisc-risk-assessment")),
  "audit-t08": combine(sp("security-architecture"), cc("access-controls"), cy("cysa-vuln-mgmt"), cisa("cisa-acquisition", "cisa-protection"), cism("cism-program"), crisc("crisc-risk-assessment")),
  "audit-t09": combine(sp("security-architecture"), cc("access-controls"), cy("cysa-vuln-mgmt"), cisa("cisa-acquisition", "cisa-protection"), cism("cism-program"), crisc("crisc-risk-assessment")),
  "audit-t10": combine(sp("security-architecture"), cc("access-controls"), cy("cysa-vuln-mgmt"), cisa("cisa-acquisition", "cisa-protection"), cism("cism-program"), crisc("crisc-risk-assessment")),
  "audit-t11": combine(sp("security-architecture"), cc("access-controls"), cy("cysa-vuln-mgmt"), cisa("cisa-acquisition", "cisa-protection"), cism("cism-program"), crisc("crisc-risk-assessment")),
  "audit-t12": combine(sp("security-architecture"), cc("access-controls"), cy("cysa-vuln-mgmt"), cisa("cisa-acquisition", "cisa-protection"), cism("cism-program"), crisc("crisc-risk-assessment")),

  // ── tech-audit-3 (audit-a01 → audit-a12) — agentic AI audit ──────────────────
  // CISA Domain 1 (Audit Process) | CISM Domain 2 (Risk) | CRISC Domain 2 (Risk Assessment)
  "audit-a01": combine(sp("general-security", "threats-vulns"), cc("security-principles"), cy("cysa-reporting"), cisa("cisa-audit-process"), cism("cism-risk"), crisc("crisc-risk-assessment")),
  "audit-a02": combine(sp("general-security", "threats-vulns"), cc("security-principles"), cy("cysa-reporting"), cisa("cisa-audit-process"), cism("cism-risk"), crisc("crisc-risk-assessment")),
  "audit-a03": combine(sp("general-security", "threats-vulns"), cc("security-principles"), cy("cysa-reporting"), cisa("cisa-audit-process"), cism("cism-risk"), crisc("crisc-risk-assessment")),
  "audit-a04": combine(sp("general-security", "threats-vulns"), cc("security-principles"), cy("cysa-reporting"), cisa("cisa-audit-process"), cism("cism-risk"), crisc("crisc-risk-assessment")),
  "audit-a05": combine(sp("general-security", "threats-vulns"), cc("security-principles"), cy("cysa-reporting"), cisa("cisa-audit-process"), cism("cism-risk"), crisc("crisc-risk-assessment")),
  "audit-a06": combine(sp("general-security", "threats-vulns"), cc("security-principles"), cy("cysa-reporting"), cisa("cisa-audit-process"), cism("cism-risk"), crisc("crisc-risk-assessment")),
  "audit-a07": combine(sp("general-security", "threats-vulns"), cc("security-principles"), cy("cysa-reporting"), cisa("cisa-audit-process"), cism("cism-risk"), crisc("crisc-risk-assessment")),
  "audit-a08": combine(sp("general-security", "threats-vulns"), cc("security-principles"), cy("cysa-reporting"), cisa("cisa-audit-process"), cism("cism-risk"), crisc("crisc-risk-assessment")),
  "audit-a09": combine(sp("general-security", "threats-vulns"), cc("security-principles"), cy("cysa-reporting"), cisa("cisa-audit-process"), cism("cism-risk"), crisc("crisc-risk-assessment")),
  "audit-a10": combine(sp("general-security", "threats-vulns"), cc("security-principles"), cy("cysa-reporting"), cisa("cisa-audit-process"), cism("cism-risk"), crisc("crisc-risk-assessment")),
  "audit-a11": combine(sp("general-security", "threats-vulns"), cc("security-principles"), cy("cysa-reporting"), cisa("cisa-audit-process"), cism("cism-risk"), crisc("crisc-risk-assessment")),
  "audit-a12": combine(sp("general-security", "threats-vulns"), cc("security-principles"), cy("cysa-reporting"), cisa("cisa-audit-process"), cism("cism-risk"), crisc("crisc-risk-assessment")),

  // ── tech-audit-4 (audit-cm01 → audit-cm12) — continuous monitoring ───────────
  // CISA Domain 4 (Operations) | CISM Domain 4 (Incident) | CRISC Domain 3 (Risk Response)
  "audit-cm01": combine(sp("security-operations"), cc("bc-dr-ir", "security-operations-cc"), np("net-operations"), cy("cysa-security-ops", "cysa-ir"), cisa("cisa-operations"), cism("cism-incident", "cism-program"), crisc("crisc-risk-response")),
  "audit-cm02": combine(sp("security-operations"), cc("bc-dr-ir", "security-operations-cc"), np("net-operations"), cy("cysa-security-ops", "cysa-ir"), cisa("cisa-operations"), cism("cism-incident", "cism-program"), crisc("crisc-risk-response")),
  "audit-cm03": combine(sp("security-operations"), cc("bc-dr-ir", "security-operations-cc"), np("net-operations"), cy("cysa-security-ops", "cysa-ir"), cisa("cisa-operations"), cism("cism-incident", "cism-program"), crisc("crisc-risk-response")),
  "audit-cm04": combine(sp("security-operations"), cc("bc-dr-ir", "security-operations-cc"), np("net-operations"), cy("cysa-security-ops", "cysa-ir"), cisa("cisa-operations"), cism("cism-incident", "cism-program"), crisc("crisc-risk-response")),
  "audit-cm05": combine(sp("security-operations"), cc("bc-dr-ir", "security-operations-cc"), np("net-operations"), cy("cysa-security-ops", "cysa-ir"), cisa("cisa-operations"), cism("cism-incident", "cism-program"), crisc("crisc-risk-response")),
  "audit-cm06": combine(sp("security-operations"), cc("bc-dr-ir", "security-operations-cc"), np("net-operations"), cy("cysa-security-ops", "cysa-ir"), cisa("cisa-operations"), cism("cism-incident", "cism-program"), crisc("crisc-risk-response")),
  "audit-cm07": combine(sp("security-operations"), cc("bc-dr-ir", "security-operations-cc"), np("net-operations"), cy("cysa-security-ops", "cysa-ir"), cisa("cisa-operations"), cism("cism-incident", "cism-program"), crisc("crisc-risk-response")),
  "audit-cm08": combine(sp("security-operations"), cc("bc-dr-ir", "security-operations-cc"), np("net-operations"), cy("cysa-security-ops", "cysa-ir"), cisa("cisa-operations"), cism("cism-incident", "cism-program"), crisc("crisc-risk-response")),
  "audit-cm09": combine(sp("security-operations"), cc("bc-dr-ir", "security-operations-cc"), np("net-operations"), cy("cysa-security-ops", "cysa-ir"), cisa("cisa-operations"), cism("cism-incident", "cism-program"), crisc("crisc-risk-response")),
  "audit-cm10": combine(sp("security-operations"), cc("bc-dr-ir", "security-operations-cc"), np("net-operations"), cy("cysa-security-ops", "cysa-ir"), cisa("cisa-operations"), cism("cism-incident", "cism-program"), crisc("crisc-risk-response")),
  "audit-cm11": combine(sp("security-operations"), cc("bc-dr-ir", "security-operations-cc"), np("net-operations"), cy("cysa-security-ops", "cysa-ir"), cisa("cisa-operations"), cism("cism-incident", "cism-program"), crisc("crisc-risk-response")),
  "audit-cm12": combine(sp("security-operations"), cc("bc-dr-ir", "security-operations-cc"), np("net-operations"), cy("cysa-security-ops", "cysa-ir"), cisa("cisa-operations"), cism("cism-incident", "cism-program"), crisc("crisc-risk-response")),

  // ── mitre (mitre-01 → mitre-12) — MITRE ATT&CK framework ─────────────────────
  // CISA Domain 4 (Operations) | CISM Domain 4 (Incident) | CRISC Domains 2+3
  "mitre-01": combine(sp("threats-vulns", "security-operations"), cc("security-operations-cc"), cy("cysa-security-ops", "cysa-ir"), cisa("cisa-operations"), cism("cism-incident", "cism-risk"), crisc("crisc-risk-assessment", "crisc-risk-response")),
  "mitre-02": combine(sp("threats-vulns", "security-operations"), cc("security-operations-cc"), cy("cysa-security-ops", "cysa-ir"), cisa("cisa-operations"), cism("cism-incident", "cism-risk"), crisc("crisc-risk-assessment", "crisc-risk-response")),
  "mitre-03": combine(sp("threats-vulns", "security-operations"), cc("security-operations-cc"), cy("cysa-security-ops", "cysa-ir"), cisa("cisa-operations"), cism("cism-incident", "cism-risk"), crisc("crisc-risk-assessment", "crisc-risk-response")),
  "mitre-04": combine(sp("threats-vulns", "security-operations"), cc("security-operations-cc"), cy("cysa-security-ops", "cysa-ir"), cisa("cisa-operations"), cism("cism-incident", "cism-risk"), crisc("crisc-risk-assessment", "crisc-risk-response")),
  "mitre-05": combine(sp("threats-vulns", "security-operations"), cc("security-operations-cc"), cy("cysa-security-ops", "cysa-ir"), cisa("cisa-operations"), cism("cism-incident", "cism-risk"), crisc("crisc-risk-assessment", "crisc-risk-response")),
  "mitre-06": combine(sp("threats-vulns", "security-operations"), cc("security-operations-cc"), cy("cysa-security-ops", "cysa-ir"), cisa("cisa-operations"), cism("cism-incident", "cism-risk"), crisc("crisc-risk-assessment", "crisc-risk-response")),
  "mitre-07": combine(sp("threats-vulns", "security-operations"), cc("security-operations-cc"), cy("cysa-security-ops", "cysa-ir"), cisa("cisa-operations"), cism("cism-incident", "cism-risk"), crisc("crisc-risk-assessment", "crisc-risk-response")),
  "mitre-08": combine(sp("threats-vulns", "security-operations"), cc("security-operations-cc"), cy("cysa-security-ops", "cysa-ir"), cisa("cisa-operations"), cism("cism-incident", "cism-risk"), crisc("crisc-risk-assessment", "crisc-risk-response")),
  "mitre-09": combine(sp("threats-vulns", "security-operations"), cc("security-operations-cc"), cy("cysa-security-ops", "cysa-ir"), cisa("cisa-operations"), cism("cism-incident", "cism-risk"), crisc("crisc-risk-assessment", "crisc-risk-response")),
  "mitre-10": combine(sp("threats-vulns", "security-operations"), cc("security-operations-cc"), cy("cysa-security-ops", "cysa-ir"), cisa("cisa-operations"), cism("cism-incident", "cism-risk"), crisc("crisc-risk-assessment", "crisc-risk-response")),
  "mitre-11": combine(sp("threats-vulns", "security-operations"), cc("security-operations-cc"), cy("cysa-security-ops", "cysa-ir"), cisa("cisa-operations"), cism("cism-incident", "cism-risk"), crisc("crisc-risk-assessment", "crisc-risk-response")),
  "mitre-12": combine(sp("threats-vulns", "security-operations"), cc("security-operations-cc"), cy("cysa-security-ops", "cysa-ir"), cisa("cisa-operations"), cism("cism-incident", "cism-risk"), crisc("crisc-risk-assessment", "crisc-risk-response")),

  // ── mitre-atlas (atlas-01 → atlas-12) — MITRE ATLAS AI/ML threats ────────────
  "atlas-01": combine(sp("threats-vulns"), cc("security-principles"), cy("cysa-vuln-mgmt"), cisa("cisa-protection"), cism("cism-risk"), crisc("crisc-risk-assessment")),
  "atlas-02": combine(sp("threats-vulns"), cc("security-principles"), cy("cysa-vuln-mgmt"), cisa("cisa-protection"), cism("cism-risk"), crisc("crisc-risk-assessment")),
  "atlas-03": combine(sp("threats-vulns"), cc("security-principles"), cy("cysa-vuln-mgmt"), cisa("cisa-protection"), cism("cism-risk"), crisc("crisc-risk-assessment")),
  "atlas-04": combine(sp("threats-vulns"), cc("security-principles"), cy("cysa-vuln-mgmt"), cisa("cisa-protection"), cism("cism-risk"), crisc("crisc-risk-assessment")),
  "atlas-05": combine(sp("threats-vulns"), cc("security-principles"), cy("cysa-vuln-mgmt"), cisa("cisa-protection"), cism("cism-risk"), crisc("crisc-risk-assessment")),
  "atlas-06": combine(sp("threats-vulns"), cc("security-principles"), cy("cysa-vuln-mgmt"), cisa("cisa-protection"), cism("cism-risk"), crisc("crisc-risk-assessment")),
  "atlas-07": combine(sp("threats-vulns"), cc("security-principles"), cy("cysa-vuln-mgmt"), cisa("cisa-protection"), cism("cism-risk"), crisc("crisc-risk-assessment")),
  "atlas-08": combine(sp("threats-vulns"), cc("security-principles"), cy("cysa-vuln-mgmt"), cisa("cisa-protection"), cism("cism-risk"), crisc("crisc-risk-assessment")),
  "atlas-09": combine(sp("threats-vulns"), cc("security-principles"), cy("cysa-vuln-mgmt"), cisa("cisa-protection"), cism("cism-risk"), crisc("crisc-risk-assessment")),
  "atlas-10": combine(sp("threats-vulns"), cc("security-principles"), cy("cysa-vuln-mgmt"), cisa("cisa-protection"), cism("cism-risk"), crisc("crisc-risk-assessment")),
  "atlas-11": combine(sp("threats-vulns"), cc("security-principles"), cy("cysa-vuln-mgmt"), cisa("cisa-protection"), cism("cism-risk"), crisc("crisc-risk-assessment")),
  "atlas-12": combine(sp("threats-vulns"), cc("security-principles"), cy("cysa-vuln-mgmt"), cisa("cisa-protection"), cism("cism-risk"), crisc("crisc-risk-assessment")),

  // ── owasp-llm (llm-01 → llm-12) — OWASP LLM Top 10 ──────────────────────────
  "llm-01": combine(sp("threats-vulns", "general-security"), cc("security-principles"), cy("cysa-vuln-mgmt"), cisa("cisa-protection"), cism("cism-risk"), crisc("crisc-risk-assessment")),
  "llm-02": combine(sp("threats-vulns", "general-security"), cc("security-principles"), cy("cysa-vuln-mgmt"), cisa("cisa-protection"), cism("cism-risk"), crisc("crisc-risk-assessment")),
  "llm-03": combine(sp("threats-vulns", "general-security"), cc("security-principles"), cy("cysa-vuln-mgmt"), cisa("cisa-protection"), cism("cism-risk"), crisc("crisc-risk-assessment")),
  "llm-04": combine(sp("threats-vulns", "general-security"), cc("security-principles"), cy("cysa-vuln-mgmt"), cisa("cisa-protection"), cism("cism-risk"), crisc("crisc-risk-assessment")),
  "llm-05": combine(sp("threats-vulns", "general-security"), cc("security-principles"), cy("cysa-vuln-mgmt"), cisa("cisa-protection"), cism("cism-risk"), crisc("crisc-risk-assessment")),
  "llm-06": combine(sp("threats-vulns", "general-security"), cc("security-principles"), cy("cysa-vuln-mgmt"), cisa("cisa-protection"), cism("cism-risk"), crisc("crisc-risk-assessment")),
  "llm-07": combine(sp("threats-vulns", "general-security"), cc("security-principles"), cy("cysa-vuln-mgmt"), cisa("cisa-protection"), cism("cism-risk"), crisc("crisc-risk-assessment")),
  "llm-08": combine(sp("threats-vulns", "general-security"), cc("security-principles"), cy("cysa-vuln-mgmt"), cisa("cisa-protection"), cism("cism-risk"), crisc("crisc-risk-assessment")),
  "llm-09": combine(sp("threats-vulns", "general-security"), cc("security-principles"), cy("cysa-vuln-mgmt"), cisa("cisa-protection"), cism("cism-risk"), crisc("crisc-risk-assessment")),
  "llm-10": combine(sp("threats-vulns", "general-security"), cc("security-principles"), cy("cysa-vuln-mgmt"), cisa("cisa-protection"), cism("cism-risk"), crisc("crisc-risk-assessment")),
  "llm-11": combine(sp("threats-vulns", "general-security"), cc("security-principles"), cy("cysa-vuln-mgmt"), cisa("cisa-protection"), cism("cism-risk"), crisc("crisc-risk-assessment")),
  "llm-12": combine(sp("threats-vulns", "general-security"), cc("security-principles"), cy("cysa-vuln-mgmt"), cisa("cisa-protection"), cism("cism-risk"), crisc("crisc-risk-assessment")),

  // ── quantum-1 (quantum-01 → quantum-10) — quantum threat landscape ────────────
  "quantum-01": combine(sp("cryptography"), cc("security-principles"), cisa("cisa-protection"), cism("cism-risk"), crisc("crisc-it-security")),
  "quantum-02": combine(sp("cryptography"), cc("security-principles"), cisa("cisa-protection"), cism("cism-risk"), crisc("crisc-it-security")),
  "quantum-03": combine(sp("cryptography"), cc("security-principles"), cisa("cisa-protection"), cism("cism-risk"), crisc("crisc-it-security")),
  "quantum-04": combine(sp("cryptography"), cc("security-principles"), cisa("cisa-protection"), cism("cism-risk"), crisc("crisc-it-security")),
  "quantum-05": combine(sp("cryptography"), cc("security-principles"), cisa("cisa-protection"), cism("cism-risk"), crisc("crisc-it-security")),
  "quantum-06": combine(sp("cryptography"), cc("security-principles"), cisa("cisa-protection"), cism("cism-risk"), crisc("crisc-it-security")),
  "quantum-07": combine(sp("cryptography"), cc("security-principles"), cisa("cisa-protection"), cism("cism-risk"), crisc("crisc-it-security")),
  "quantum-08": combine(sp("cryptography"), cc("security-principles"), cisa("cisa-protection"), cism("cism-risk"), crisc("crisc-it-security")),
  "quantum-09": combine(sp("cryptography"), cc("security-principles"), cisa("cisa-protection"), cism("cism-risk"), crisc("crisc-it-security")),
  "quantum-10": combine(sp("cryptography"), cc("security-principles"), cisa("cisa-protection"), cism("cism-risk"), crisc("crisc-it-security")),

  // ── quantum-2 (quantum-b01 → quantum-b10) — post-quantum cryptography ─────────
  "quantum-b01": combine(sp("cryptography", "security-architecture"), cc("security-principles"), cisa("cisa-protection"), cism("cism-program"), crisc("crisc-it-security", "crisc-governance")),
  "quantum-b02": combine(sp("cryptography", "security-architecture"), cc("security-principles"), cisa("cisa-protection"), cism("cism-program"), crisc("crisc-it-security", "crisc-governance")),
  "quantum-b03": combine(sp("cryptography", "security-architecture"), cc("security-principles"), cisa("cisa-protection"), cism("cism-program"), crisc("crisc-it-security", "crisc-governance")),
  "quantum-b04": combine(sp("cryptography", "security-architecture"), cc("security-principles"), cisa("cisa-protection"), cism("cism-program"), crisc("crisc-it-security", "crisc-governance")),
  "quantum-b05": combine(sp("cryptography", "security-architecture"), cc("security-principles"), cisa("cisa-protection"), cism("cism-program"), crisc("crisc-it-security", "crisc-governance")),
  "quantum-b06": combine(sp("cryptography", "security-architecture"), cc("security-principles"), cisa("cisa-protection"), cism("cism-program"), crisc("crisc-it-security", "crisc-governance")),
  "quantum-b07": combine(sp("cryptography", "security-architecture"), cc("security-principles"), cisa("cisa-protection"), cism("cism-program"), crisc("crisc-it-security", "crisc-governance")),
  "quantum-b08": combine(sp("cryptography", "security-architecture"), cc("security-principles"), cisa("cisa-protection"), cism("cism-program"), crisc("crisc-it-security", "crisc-governance")),
  "quantum-b09": combine(sp("cryptography", "security-architecture"), cc("security-principles"), cisa("cisa-protection"), cism("cism-program"), crisc("crisc-it-security", "crisc-governance")),
  "quantum-b10": combine(sp("cryptography", "security-architecture"), cc("security-principles"), cisa("cisa-protection"), cism("cism-program"), crisc("crisc-it-security", "crisc-governance")),

  // ── quantum-3 (quantum-c01 → quantum-c10) — quantum key distribution ──────────
  "quantum-c01": combine(sp("cryptography", "security-architecture"), cc("security-principles"), cisa("cisa-protection"), cism("cism-program"), crisc("crisc-it-security")),
  "quantum-c02": combine(sp("cryptography", "security-architecture"), cc("security-principles"), cisa("cisa-protection"), cism("cism-program"), crisc("crisc-it-security")),
  "quantum-c03": combine(sp("cryptography", "security-architecture"), cc("security-principles"), cisa("cisa-protection"), cism("cism-program"), crisc("crisc-it-security")),
  "quantum-c04": combine(sp("cryptography", "security-architecture"), cc("security-principles"), cisa("cisa-protection"), cism("cism-program"), crisc("crisc-it-security")),
  "quantum-c05": combine(sp("cryptography", "security-architecture"), cc("security-principles"), cisa("cisa-protection"), cism("cism-program"), crisc("crisc-it-security")),
  "quantum-c06": combine(sp("cryptography", "security-architecture"), cc("security-principles"), cisa("cisa-protection"), cism("cism-program"), crisc("crisc-it-security")),
  "quantum-c07": combine(sp("cryptography", "security-architecture"), cc("security-principles"), cisa("cisa-protection"), cism("cism-program"), crisc("crisc-it-security")),
  "quantum-c08": combine(sp("cryptography", "security-architecture"), cc("security-principles"), cisa("cisa-protection"), cism("cism-program"), crisc("crisc-it-security")),
  "quantum-c09": combine(sp("cryptography", "security-architecture"), cc("security-principles"), cisa("cisa-protection"), cism("cism-program"), crisc("crisc-it-security")),
  "quantum-c10": combine(sp("cryptography", "security-architecture"), cc("security-principles"), cisa("cisa-protection"), cism("cism-program"), crisc("crisc-it-security")),
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
  if (certId === "isaca-cisa") return CISA_DOMAINS;
  if (certId === "isaca-cism") return CISM_DOMAINS;
  if (certId === "isaca-crisc") return CRISC_DOMAINS;
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

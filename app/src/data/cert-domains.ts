// Certificate path domain mappings.
// Covers: CompTIA Security+ SY0-701, ISC² CC, CompTIA Network+ N10-009, CompTIA CySA+ CS0-003,
//         ISACA CISA, ISACA CISM, ISACA CRISC, CompTIA AI+ (2024),
//         AWS Certified AI Practitioner (AIF-C01), Google Cloud Professional ML Engineer.
// Stage → domain weights match official exam blueprints.

export type CertId =
  | "comptia-secplus"
  | "isc2-cc"
  | "comptia-netplus"
  | "comptia-cysa"
  | "isaca-cisa"
  | "isaca-cism"
  | "isaca-crisc"
  | "comptia-aiplus"
  | "aws-aip"
  | "gcp-pmle";

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

// CompTIA AI+ (2024 blueprint — 5 domains, exam launched June 2024)
export const AIPLUS_DOMAINS: CertDomainDef[] = [
  { id: "aiplus-concepts",       name: "AI Concepts",                      weight: 15 },
  { id: "aiplus-data",           name: "Data Science Fundamentals",        weight: 20 },
  { id: "aiplus-models",         name: "AI Models and Training",           weight: 20 },
  { id: "aiplus-security",       name: "AI Security, Ethics & Governance", weight: 30 },
  { id: "aiplus-infrastructure", name: "AI Infrastructure & Operations",   weight: 15 },
];

// CRISC — Certified in Risk and Information Systems Control (2022 blueprint)
export const CRISC_DOMAINS: CertDomainDef[] = [
  { id: "crisc-governance",      name: "Governance",                       weight: 26 },
  { id: "crisc-risk-assessment", name: "IT Risk Assessment",               weight: 20 },
  { id: "crisc-risk-response",   name: "Risk Response and Reporting",      weight: 32 },
  { id: "crisc-it-security",     name: "Information Technology & Security", weight: 22 },
];

// AWS Certified AI Practitioner (AIF-C01, launched 2024 — foundational AI/ML)
export const AWS_AIP_DOMAINS: CertDomainDef[] = [
  { id: "awsaip-ai-ml",       name: "Fundamentals of AI and ML",                 weight: 20 },
  { id: "awsaip-genai",       name: "Fundamentals of Generative AI",             weight: 24 },
  { id: "awsaip-foundation",  name: "Applications of Foundation Models",         weight: 28 },
  { id: "awsaip-responsible", name: "Guidelines for Responsible AI",             weight: 14 },
  { id: "awsaip-security",    name: "Security, Compliance & Governance for AI",  weight: 14 },
];

// Google Cloud Professional Machine Learning Engineer (2024 exam guide)
export const GCP_PMLE_DOMAINS: CertDomainDef[] = [
  { id: "gcpml-lowcode",     name: "Architecting Low-Code AI Solutions",            weight: 13 },
  { id: "gcpml-collaborate", name: "Collaborating to Manage Data & Models",         weight: 14 },
  { id: "gcpml-scaling",     name: "Scaling Prototypes into ML Models",             weight: 18 },
  { id: "gcpml-serving",     name: "Serving & Scaling Models",                      weight: 20 },
  { id: "gcpml-pipelines",   name: "Automating & Orchestrating ML Pipelines",       weight: 22 },
  { id: "gcpml-monitoring",  name: "Monitoring AI Solutions",                       weight: 13 },
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

function ai(...domainIds: string[]): CertDomain[] {
  return domainIds.map((id) => {
    const def = AIPLUS_DOMAINS.find((d) => d.id === id)!;
    return { certId: "comptia-aiplus" as CertId, domainId: id, domainName: def.name };
  });
}

function awsaip(...domainIds: string[]): CertDomain[] {
  return domainIds.map((id) => {
    const def = AWS_AIP_DOMAINS.find((d) => d.id === id)!;
    return { certId: "aws-aip" as CertId, domainId: id, domainName: def.name };
  });
}

function gcpml(...domainIds: string[]): CertDomain[] {
  return domainIds.map((id) => {
    const def = GCP_PMLE_DOMAINS.find((d) => d.id === id)!;
    return { certId: "gcp-pmle" as CertId, domainId: id, domainName: def.name };
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
  "stage-m42": combine(sp("security-architecture", "security-operations"), cc("security-operations-cc"), np("net-troubleshooting"), cy("cysa-security-ops"), cisa("cisa-operations", "cisa-protection"), cism("cism-program", "cism-incident"), crisc("crisc-risk-response", "crisc-it-security"), ai("aiplus-security", "aiplus-infrastructure")),
  "stage-m43": combine(sp("security-architecture", "security-operations"), cc("security-operations-cc"), np("net-troubleshooting"), cy("cysa-security-ops"), cisa("cisa-operations", "cisa-protection"), cism("cism-program", "cism-incident"), crisc("crisc-risk-response", "crisc-it-security"), ai("aiplus-security", "aiplus-infrastructure")),
  "stage-m44": combine(sp("security-architecture", "security-operations"), cc("security-operations-cc"), np("net-troubleshooting"), cy("cysa-security-ops"), cisa("cisa-operations", "cisa-protection"), cism("cism-program", "cism-incident"), crisc("crisc-risk-response", "crisc-it-security")),
  "stage-m45": combine(sp("security-architecture", "security-operations"), cc("security-operations-cc"), np("net-troubleshooting"), cy("cysa-security-ops"), cisa("cisa-operations", "cisa-protection"), cism("cism-program", "cism-incident"), crisc("crisc-risk-response", "crisc-it-security")),
  "stage-m46": combine(sp("security-architecture", "security-operations"), cc("security-operations-cc"), np("net-troubleshooting"), cy("cysa-security-ops"), cisa("cisa-operations", "cisa-protection"), cism("cism-program", "cism-incident"), crisc("crisc-risk-response", "crisc-it-security")),
  "stage-m47": combine(sp("security-architecture", "security-operations"), cc("security-operations-cc"), np("net-troubleshooting"), cy("cysa-security-ops"), cisa("cisa-operations", "cisa-protection"), cism("cism-program", "cism-incident"), crisc("crisc-risk-response", "crisc-it-security")),
  "stage-m48": combine(sp("security-architecture", "security-operations"), cc("security-operations-cc"), np("net-troubleshooting"), cy("cysa-security-ops"), cisa("cisa-operations", "cisa-protection"), cism("cism-program", "cism-incident"), crisc("crisc-risk-response", "crisc-it-security")),
  "stage-m49": combine(sp("security-architecture", "security-operations"), cc("security-operations-cc"), np("net-troubleshooting"), cy("cysa-security-ops"), cisa("cisa-operations", "cisa-protection"), cism("cism-program", "cism-incident"), crisc("crisc-risk-response", "crisc-it-security")),
  "stage-m50": combine(sp("security-architecture", "security-operations", "cryptography"), cc("security-operations-cc"), np("net-troubleshooting"), cy("cysa-security-ops"), cisa("cisa-operations", "cisa-protection"), cism("cism-program", "cism-incident"), crisc("crisc-risk-response", "crisc-it-security"), ai("aiplus-security", "aiplus-infrastructure")),

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
  "atlas-01": combine(sp("threats-vulns"), cc("security-principles"), cy("cysa-vuln-mgmt"), cisa("cisa-protection"), cism("cism-risk"), crisc("crisc-risk-assessment"), ai("aiplus-security", "aiplus-data")),
  "atlas-02": combine(sp("threats-vulns"), cc("security-principles"), cy("cysa-vuln-mgmt"), cisa("cisa-protection"), cism("cism-risk"), crisc("crisc-risk-assessment"), ai("aiplus-security", "aiplus-models")),
  "atlas-03": combine(sp("threats-vulns"), cc("security-principles"), cy("cysa-vuln-mgmt"), cisa("cisa-protection"), cism("cism-risk"), crisc("crisc-risk-assessment"), ai("aiplus-security", "aiplus-infrastructure")),
  "atlas-04": combine(sp("threats-vulns"), cc("security-principles"), cy("cysa-vuln-mgmt"), cisa("cisa-protection"), cism("cism-risk"), crisc("crisc-risk-assessment"), ai("aiplus-security", "aiplus-models")),
  "atlas-05": combine(sp("threats-vulns"), cc("security-principles"), cy("cysa-vuln-mgmt"), cisa("cisa-protection"), cism("cism-risk"), crisc("crisc-risk-assessment"), ai("aiplus-security", "aiplus-models")),
  "atlas-06": combine(sp("threats-vulns"), cc("security-principles"), cy("cysa-vuln-mgmt"), cisa("cisa-protection"), cism("cism-risk"), crisc("crisc-risk-assessment"), ai("aiplus-security")),
  "atlas-07": combine(sp("threats-vulns"), cc("security-principles"), cy("cysa-vuln-mgmt"), cisa("cisa-protection"), cism("cism-risk"), crisc("crisc-risk-assessment"), ai("aiplus-security", "aiplus-data")),
  "atlas-08": combine(sp("threats-vulns"), cc("security-principles"), cy("cysa-vuln-mgmt"), cisa("cisa-protection"), cism("cism-risk"), crisc("crisc-risk-assessment"), ai("aiplus-security", "aiplus-models")),
  "atlas-09": combine(sp("threats-vulns"), cc("security-principles"), cy("cysa-vuln-mgmt"), cisa("cisa-protection"), cism("cism-risk"), crisc("crisc-risk-assessment"), ai("aiplus-security", "aiplus-models")),
  "atlas-10": combine(sp("threats-vulns"), cc("security-principles"), cy("cysa-vuln-mgmt"), cisa("cisa-protection"), cism("cism-risk"), crisc("crisc-risk-assessment"), ai("aiplus-security", "aiplus-models")),
  "atlas-11": combine(sp("threats-vulns"), cc("security-principles"), cy("cysa-vuln-mgmt"), cisa("cisa-protection"), cism("cism-risk"), crisc("crisc-risk-assessment"), ai("aiplus-security", "aiplus-data")),
  "atlas-12": combine(sp("threats-vulns"), cc("security-principles"), cy("cysa-vuln-mgmt"), cisa("cisa-protection"), cism("cism-risk"), crisc("crisc-risk-assessment"), ai("aiplus-security", "aiplus-concepts")),

  // ── owasp-llm (llm-01 → llm-12) — OWASP LLM Top 10 ──────────────────────────
  "llm-01": combine(sp("threats-vulns", "general-security"), cc("security-principles"), cy("cysa-vuln-mgmt"), cisa("cisa-protection"), cism("cism-risk"), crisc("crisc-risk-assessment"), ai("aiplus-security", "aiplus-concepts")),
  "llm-02": combine(sp("threats-vulns", "general-security"), cc("security-principles"), cy("cysa-vuln-mgmt"), cisa("cisa-protection"), cism("cism-risk"), crisc("crisc-risk-assessment"), ai("aiplus-security", "aiplus-models")),
  "llm-03": combine(sp("threats-vulns", "general-security"), cc("security-principles"), cy("cysa-vuln-mgmt"), cisa("cisa-protection"), cism("cism-risk"), crisc("crisc-risk-assessment"), ai("aiplus-security", "aiplus-infrastructure")),
  "llm-04": combine(sp("threats-vulns", "general-security"), cc("security-principles"), cy("cysa-vuln-mgmt"), cisa("cisa-protection"), cism("cism-risk"), crisc("crisc-risk-assessment"), ai("aiplus-security", "aiplus-data")),
  "llm-05": combine(sp("threats-vulns", "general-security"), cc("security-principles"), cy("cysa-vuln-mgmt"), cisa("cisa-protection"), cism("cism-risk"), crisc("crisc-risk-assessment"), ai("aiplus-security", "aiplus-concepts")),
  "llm-06": combine(sp("threats-vulns", "general-security"), cc("security-principles"), cy("cysa-vuln-mgmt"), cisa("cisa-protection"), cism("cism-risk"), crisc("crisc-risk-assessment"), ai("aiplus-security", "aiplus-concepts")),
  "llm-07": combine(sp("threats-vulns", "general-security"), cc("security-principles"), cy("cysa-vuln-mgmt"), cisa("cisa-protection"), cism("cism-risk"), crisc("crisc-risk-assessment"), ai("aiplus-security", "aiplus-concepts")),
  "llm-08": combine(sp("threats-vulns", "general-security"), cc("security-principles"), cy("cysa-vuln-mgmt"), cisa("cisa-protection"), cism("cism-risk"), crisc("crisc-risk-assessment"), ai("aiplus-security", "aiplus-infrastructure")),
  "llm-09": combine(sp("threats-vulns", "general-security"), cc("security-principles"), cy("cysa-vuln-mgmt"), cisa("cisa-protection"), cism("cism-risk"), crisc("crisc-risk-assessment"), ai("aiplus-security", "aiplus-concepts")),
  "llm-10": combine(sp("threats-vulns", "general-security"), cc("security-principles"), cy("cysa-vuln-mgmt"), cisa("cisa-protection"), cism("cism-risk"), crisc("crisc-risk-assessment"), ai("aiplus-security", "aiplus-infrastructure")),
  "llm-11": combine(sp("threats-vulns", "general-security"), cc("security-principles"), cy("cysa-vuln-mgmt"), cisa("cisa-protection"), cism("cism-risk"), crisc("crisc-risk-assessment"), ai("aiplus-security")),
  "llm-12": combine(sp("threats-vulns", "general-security"), cc("security-principles"), cy("cysa-vuln-mgmt"), cisa("cisa-protection"), cism("cism-risk"), crisc("crisc-risk-assessment"), ai("aiplus-security", "aiplus-infrastructure")),

  // ── quantum-1 (quantum-01 → quantum-10) — quantum threat landscape ────────────
  "quantum-01": combine(sp("cryptography"), cc("security-principles"), cisa("cisa-protection"), cism("cism-risk"), crisc("crisc-it-security"), ai("aiplus-security", "aiplus-concepts")),
  "quantum-02": combine(sp("cryptography"), cc("security-principles"), cisa("cisa-protection"), cism("cism-risk"), crisc("crisc-it-security"), ai("aiplus-security", "aiplus-concepts")),
  "quantum-03": combine(sp("cryptography"), cc("security-principles"), cisa("cisa-protection"), cism("cism-risk"), crisc("crisc-it-security"), ai("aiplus-security", "aiplus-concepts")),
  "quantum-04": combine(sp("cryptography"), cc("security-principles"), cisa("cisa-protection"), cism("cism-risk"), crisc("crisc-it-security"), ai("aiplus-security", "aiplus-concepts")),
  "quantum-05": combine(sp("cryptography"), cc("security-principles"), cisa("cisa-protection"), cism("cism-risk"), crisc("crisc-it-security"), ai("aiplus-security", "aiplus-concepts")),
  "quantum-06": combine(sp("cryptography"), cc("security-principles"), cisa("cisa-protection"), cism("cism-risk"), crisc("crisc-it-security"), ai("aiplus-security", "aiplus-concepts")),
  "quantum-07": combine(sp("cryptography"), cc("security-principles"), cisa("cisa-protection"), cism("cism-risk"), crisc("crisc-it-security"), ai("aiplus-security", "aiplus-concepts")),
  "quantum-08": combine(sp("cryptography"), cc("security-principles"), cisa("cisa-protection"), cism("cism-risk"), crisc("crisc-it-security"), ai("aiplus-security", "aiplus-concepts")),
  "quantum-09": combine(sp("cryptography"), cc("security-principles"), cisa("cisa-protection"), cism("cism-risk"), crisc("crisc-it-security"), ai("aiplus-security", "aiplus-concepts")),
  "quantum-10": combine(sp("cryptography"), cc("security-principles"), cisa("cisa-protection"), cism("cism-risk"), crisc("crisc-it-security"), ai("aiplus-security", "aiplus-concepts")),

  // ── quantum-2 (quantum-b01 → quantum-b10) — post-quantum cryptography ─────────
  "quantum-b01": combine(sp("cryptography", "security-architecture"), cc("security-principles"), cisa("cisa-protection"), cism("cism-program"), crisc("crisc-it-security", "crisc-governance"), ai("aiplus-security", "aiplus-infrastructure")),
  "quantum-b02": combine(sp("cryptography", "security-architecture"), cc("security-principles"), cisa("cisa-protection"), cism("cism-program"), crisc("crisc-it-security", "crisc-governance"), ai("aiplus-security", "aiplus-infrastructure")),
  "quantum-b03": combine(sp("cryptography", "security-architecture"), cc("security-principles"), cisa("cisa-protection"), cism("cism-program"), crisc("crisc-it-security", "crisc-governance"), ai("aiplus-security", "aiplus-infrastructure")),
  "quantum-b04": combine(sp("cryptography", "security-architecture"), cc("security-principles"), cisa("cisa-protection"), cism("cism-program"), crisc("crisc-it-security", "crisc-governance"), ai("aiplus-security", "aiplus-infrastructure")),
  "quantum-b05": combine(sp("cryptography", "security-architecture"), cc("security-principles"), cisa("cisa-protection"), cism("cism-program"), crisc("crisc-it-security", "crisc-governance"), ai("aiplus-security", "aiplus-infrastructure")),
  "quantum-b06": combine(sp("cryptography", "security-architecture"), cc("security-principles"), cisa("cisa-protection"), cism("cism-program"), crisc("crisc-it-security", "crisc-governance"), ai("aiplus-security", "aiplus-infrastructure")),
  "quantum-b07": combine(sp("cryptography", "security-architecture"), cc("security-principles"), cisa("cisa-protection"), cism("cism-program"), crisc("crisc-it-security", "crisc-governance"), ai("aiplus-security", "aiplus-infrastructure")),
  "quantum-b08": combine(sp("cryptography", "security-architecture"), cc("security-principles"), cisa("cisa-protection"), cism("cism-program"), crisc("crisc-it-security", "crisc-governance"), ai("aiplus-security", "aiplus-infrastructure")),
  "quantum-b09": combine(sp("cryptography", "security-architecture"), cc("security-principles"), cisa("cisa-protection"), cism("cism-program"), crisc("crisc-it-security", "crisc-governance"), ai("aiplus-security", "aiplus-infrastructure")),
  "quantum-b10": combine(sp("cryptography", "security-architecture"), cc("security-principles"), cisa("cisa-protection"), cism("cism-program"), crisc("crisc-it-security", "crisc-governance"), ai("aiplus-security", "aiplus-infrastructure")),

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

  // ── quantum-4 (Risk Management): quantum-d01..d10 → CISA + CISM + CRISC + AI Security ──
  "quantum-d01": combine(sp("security-architecture"), cisa("cisa-protection", "cisa-operations"), cism("cism-program"), crisc("crisc-risk-assessment", "crisc-it-security"), ai("aiplus-security")),
  "quantum-d02": combine(sp("security-architecture"), cisa("cisa-protection", "cisa-operations"), cism("cism-program"), crisc("crisc-risk-assessment"), ai("aiplus-security")),
  "quantum-d03": combine(sp("cryptography", "security-architecture"), cisa("cisa-protection"), cism("cism-program"), crisc("crisc-it-security"), ai("aiplus-security", "aiplus-infrastructure")),
  "quantum-d04": combine(sp("cryptography", "security-architecture"), cisa("cisa-protection"), cism("cism-program"), crisc("crisc-risk-response", "crisc-it-security")),
  "quantum-d05": combine(sp("security-architecture"), cisa("cisa-operations", "cisa-protection"), cism("cism-program"), crisc("crisc-risk-assessment", "crisc-risk-response")),
  "quantum-d06": combine(sp("security-architecture"), cisa("cisa-operations", "cisa-protection"), cism("cism-program"), crisc("crisc-risk-assessment")),
  "quantum-d07": combine(sp("security-architecture"), cisa("cisa-governance"), cism("cism-governance", "cism-program"), crisc("crisc-governance", "crisc-risk-assessment")),
  "quantum-d08": combine(sp("cryptography", "security-architecture"), cisa("cisa-protection"), cism("cism-program"), crisc("crisc-it-security")),
  "quantum-d09": combine(sp("cryptography", "security-architecture"), cisa("cisa-protection"), cism("cism-program"), crisc("crisc-it-security", "crisc-risk-response")),
  "quantum-d10": combine(sp("security-architecture"), cisa("cisa-operations", "cisa-protection"), cism("cism-program"), crisc("crisc-risk-assessment", "crisc-risk-response")),

  // ── emerging-tech (AI/Deep Learning Risk): emerging-01..10 → AI+ + MITRE ATLAS domains ──
  "emerging-01": combine(ai("aiplus-security", "aiplus-models"), cisa("cisa-protection")),
  "emerging-02": combine(ai("aiplus-security", "aiplus-models", "aiplus-data"), cisa("cisa-protection")),
  "emerging-03": combine(ai("aiplus-security", "aiplus-data", "aiplus-models"), cisa("cisa-protection")),
  "emerging-04": combine(ai("aiplus-security", "aiplus-concepts"), cisa("cisa-protection", "cisa-operations")),
  "emerging-05": combine(ai("aiplus-security", "aiplus-concepts"), cisa("cisa-protection", "cisa-operations"), sp("threats-vulns")),
  "emerging-06": combine(ai("aiplus-security", "aiplus-infrastructure"), cisa("cisa-protection")),
  "emerging-07": combine(ai("aiplus-security", "aiplus-concepts", "aiplus-models"), cisa("cisa-governance"), cism("cism-governance"), crisc("crisc-governance")),
  "emerging-08": combine(ai("aiplus-security", "aiplus-concepts"), cisa("cisa-protection"), sp("threats-vulns")),
  "emerging-09": combine(ai("aiplus-security", "aiplus-infrastructure", "aiplus-concepts"), cisa("cisa-protection")),
  "emerging-10": combine(ai("aiplus-security", "aiplus-concepts"), cisa("cisa-governance"), cism("cism-governance", "cism-program"), crisc("crisc-governance", "crisc-risk-assessment")),

};

// ─── AI-platform cert mappings (AWS AIP + GCP PMLE) ─────────────────────────────
// Kept in a separate table from the security-cert mappings above for clarity, then
// merged into CERT_DOMAINS at module load. These two certs only cover the AI-native
// epochs (MITRE ATLAS, OWASP LLM, Emerging Tech, Agentic/Continuous-Monitoring audit,
// and the AI-security Cisco stages) — quantum/crypto and pure-security stages are
// intentionally excluded so the readiness rings stay credible.

const AI_PLATFORM_CERT_DOMAINS: Record<string, CertDomain[]> = {

  // ── MITRE ATLAS (atlas-01 → atlas-12) — adversarial ML / model attacks ────────
  "atlas-01": combine(awsaip("awsaip-security", "awsaip-foundation")),
  "atlas-02": combine(awsaip("awsaip-security", "awsaip-foundation"), gcpml("gcpml-scaling")),
  "atlas-03": combine(awsaip("awsaip-security", "awsaip-foundation"), gcpml("gcpml-pipelines")),
  "atlas-04": combine(awsaip("awsaip-security", "awsaip-foundation"), gcpml("gcpml-serving")),
  "atlas-05": combine(awsaip("awsaip-security", "awsaip-foundation"), gcpml("gcpml-serving")),
  "atlas-06": combine(awsaip("awsaip-security"),                      gcpml("gcpml-monitoring")),
  "atlas-07": combine(awsaip("awsaip-security", "awsaip-foundation"), gcpml("gcpml-collaborate")),
  "atlas-08": combine(awsaip("awsaip-security", "awsaip-foundation"), gcpml("gcpml-serving")),
  "atlas-09": combine(awsaip("awsaip-security", "awsaip-foundation"), gcpml("gcpml-scaling")),
  "atlas-10": combine(awsaip("awsaip-security", "awsaip-foundation"), gcpml("gcpml-serving")),
  "atlas-11": combine(awsaip("awsaip-security", "awsaip-foundation"), gcpml("gcpml-collaborate")),
  "atlas-12": combine(awsaip("awsaip-security", "awsaip-ai-ml")),

  // ── OWASP LLM Top 10 (llm-01 → llm-12) — generative-AI app security ───────────
  "llm-01": combine(awsaip("awsaip-genai", "awsaip-foundation", "awsaip-security"), gcpml("gcpml-lowcode")),
  "llm-02": combine(awsaip("awsaip-genai", "awsaip-foundation", "awsaip-security"), gcpml("gcpml-serving")),
  "llm-03": combine(awsaip("awsaip-foundation", "awsaip-security"),                 gcpml("gcpml-collaborate")),
  "llm-04": combine(awsaip("awsaip-foundation", "awsaip-security"),                 gcpml("gcpml-serving")),
  "llm-05": combine(awsaip("awsaip-foundation", "awsaip-security"),                 gcpml("gcpml-pipelines")),
  "llm-06": combine(awsaip("awsaip-genai", "awsaip-security"),                      gcpml("gcpml-lowcode")),
  "llm-07": combine(awsaip("awsaip-foundation", "awsaip-security")),
  "llm-08": combine(awsaip("awsaip-foundation", "awsaip-responsible", "awsaip-security"), gcpml("gcpml-serving")),
  "llm-09": combine(awsaip("awsaip-responsible", "awsaip-security")),
  "llm-10": combine(awsaip("awsaip-foundation", "awsaip-security"),                 gcpml("gcpml-serving")),
  "llm-11": combine(awsaip("awsaip-genai", "awsaip-security")),
  "llm-12": combine(awsaip("awsaip-foundation", "awsaip-security")),

  // ── Emerging Tech & Deep Learning Risk (emerging-01 → emerging-10) ────────────
  "emerging-01": combine(awsaip("awsaip-ai-ml", "awsaip-security"),                 gcpml("gcpml-scaling")),
  "emerging-02": combine(awsaip("awsaip-foundation", "awsaip-security"),            gcpml("gcpml-pipelines")),
  "emerging-03": combine(awsaip("awsaip-ai-ml", "awsaip-security"),                 gcpml("gcpml-scaling", "gcpml-collaborate")),
  "emerging-04": combine(awsaip("awsaip-genai", "awsaip-responsible"),              gcpml("gcpml-lowcode")),
  "emerging-05": combine(awsaip("awsaip-genai", "awsaip-security")),
  "emerging-06": combine(awsaip("awsaip-foundation", "awsaip-security"),            gcpml("gcpml-serving")),
  "emerging-07": combine(awsaip("awsaip-responsible", "awsaip-security"),           gcpml("gcpml-collaborate")),
  "emerging-08": combine(awsaip("awsaip-foundation", "awsaip-security")),
  "emerging-09": combine(awsaip("awsaip-ai-ml", "awsaip-security")),
  "emerging-10": combine(awsaip("awsaip-responsible", "awsaip-security"),           gcpml("gcpml-monitoring")),

  // ── Agentic AI audit (audit-a01 → audit-a12) — governance + orchestration ─────
  "audit-a01": combine(awsaip("awsaip-responsible", "awsaip-security")),
  "audit-a02": combine(awsaip("awsaip-responsible", "awsaip-security")),
  "audit-a03": combine(awsaip("awsaip-responsible", "awsaip-security")),
  "audit-a04": combine(awsaip("awsaip-responsible", "awsaip-security")),
  "audit-a05": combine(awsaip("awsaip-responsible", "awsaip-security")),
  "audit-a06": combine(awsaip("awsaip-responsible", "awsaip-security"), gcpml("gcpml-pipelines")),
  "audit-a07": combine(awsaip("awsaip-responsible", "awsaip-security")),
  "audit-a08": combine(awsaip("awsaip-responsible", "awsaip-security")),
  "audit-a09": combine(awsaip("awsaip-responsible", "awsaip-security"), gcpml("gcpml-pipelines")),
  "audit-a10": combine(awsaip("awsaip-responsible", "awsaip-security")),
  "audit-a11": combine(awsaip("awsaip-responsible", "awsaip-security"), gcpml("gcpml-monitoring")),
  "audit-a12": combine(awsaip("awsaip-responsible", "awsaip-security"), gcpml("gcpml-pipelines")),

  // ── Continuous monitoring (ML-specific stages) — GCP monitoring/pipelines ─────
  "audit-cm02": combine(gcpml("gcpml-monitoring")),
  "audit-cm03": combine(gcpml("gcpml-monitoring")),
  "audit-cm11": combine(gcpml("gcpml-pipelines")),
  "audit-cm12": combine(gcpml("gcpml-monitoring")),

  // ── Cisco: Advanced Defense — AI-security stages (m42, m43, m50) ──────────────
  "stage-m42": combine(awsaip("awsaip-security")),
  "stage-m43": combine(awsaip("awsaip-security")),
  "stage-m50": combine(awsaip("awsaip-security")),

};

// Merge the AI-platform mappings into the main table (additive — appends domains
// to any stage that also has security-cert mappings).
for (const [stageId, doms] of Object.entries(AI_PLATFORM_CERT_DOMAINS)) {
  CERT_DOMAINS[stageId] = [...(CERT_DOMAINS[stageId] ?? []), ...doms];
}

// ─── Cert display metadata (single source of truth for badges) ──────────────────
// `short` is the compact label used on module badges; `badgeCls` mirrors the
// accent color of the matching card on /certs so the two surfaces stay in sync.

export const CERT_META: Record<CertId, { short: string; badgeCls: string }> = {
  "comptia-secplus": { short: "Security+", badgeCls: "border-indigo-500/25 bg-indigo-500/8 text-indigo-400 hover:border-indigo-400/50" },
  "comptia-cysa":    { short: "CySA+",     badgeCls: "border-orange-500/25 bg-orange-500/8 text-orange-400 hover:border-orange-400/50" },
  "comptia-netplus": { short: "Network+",  badgeCls: "border-blue-500/25 bg-blue-500/8 text-blue-400 hover:border-blue-400/50" },
  "isc2-cc":         { short: "ISC² CC",   badgeCls: "border-teal-500/25 bg-teal-500/8 text-teal-400 hover:border-teal-400/50" },
  "isaca-cisa":      { short: "CISA",      badgeCls: "border-yellow-500/25 bg-yellow-500/8 text-yellow-400 hover:border-yellow-400/50" },
  "isaca-cism":      { short: "CISM",      badgeCls: "border-purple-500/25 bg-purple-500/8 text-purple-400 hover:border-purple-400/50" },
  "isaca-crisc":     { short: "CRISC",     badgeCls: "border-emerald-500/25 bg-emerald-500/8 text-emerald-400 hover:border-emerald-400/50" },
  "comptia-aiplus":  { short: "AI+",       badgeCls: "border-sky-500/25 bg-sky-500/8 text-sky-400 hover:border-sky-400/50" },
  "aws-aip":         { short: "AWS AIP",   badgeCls: "border-rose-500/25 bg-rose-500/8 text-rose-400 hover:border-rose-400/50" },
  "gcp-pmle":        { short: "GCP MLE",   badgeCls: "border-green-500/25 bg-green-500/8 text-green-400 hover:border-green-400/50" },
};

// Priority order for rendering badges on a module (most foundational first).
const CERT_ORDER: CertId[] = [
  "comptia-secplus", "comptia-cysa", "comptia-netplus", "isc2-cc",
  "isaca-cisa", "isaca-cism", "isaca-crisc", "comptia-aiplus",
  "aws-aip", "gcp-pmle",
];

// Compact domain labels for badges. Falls back to the full domain name.
const DOMAIN_SHORT: Record<string, string> = {
  // Security+
  "general-security": "General Concepts", "threats-vulns": "Threats & Vulns",
  "security-architecture": "Security Arch", "security-operations": "Security Ops",
  "security-program": "Program Mgmt", "cryptography": "Cryptography",
  // ISC² CC
  "security-principles": "Security Principles", "bc-dr-ir": "BC/DR & IR",
  "access-controls": "Access Controls", "network-security": "Network Security",
  "security-operations-cc": "Security Ops",
  // Network+
  "net-fundamentals": "Net Fundamentals", "net-implementations": "Net Implementations",
  "net-operations": "Net Operations", "net-security": "Net Security",
  "net-troubleshooting": "Net Troubleshooting",
  // CySA+
  "cysa-security-ops": "Security Ops", "cysa-vuln-mgmt": "Vuln Mgmt",
  "cysa-ir": "Incident Response", "cysa-reporting": "Reporting",
  // CISA
  "cisa-audit-process": "Audit Process", "cisa-governance": "Governance",
  "cisa-acquisition": "Acquisition & Dev", "cisa-operations": "Operations & Resilience",
  "cisa-protection": "Protection of Assets",
  // CISM
  "cism-governance": "Governance", "cism-risk": "Risk Mgmt",
  "cism-program": "Security Program", "cism-incident": "Incident Mgmt",
  // CRISC
  "crisc-governance": "Governance", "crisc-risk-assessment": "Risk Assessment",
  "crisc-risk-response": "Risk Response", "crisc-it-security": "IT & Security",
  // AI+
  "aiplus-concepts": "AI Concepts", "aiplus-data": "Data Science",
  "aiplus-models": "AI Models", "aiplus-security": "AI Security",
  "aiplus-infrastructure": "AI Infrastructure",
  // AWS AI Practitioner
  "awsaip-ai-ml": "AI/ML Fundamentals", "awsaip-genai": "Generative AI",
  "awsaip-foundation": "Foundation Models", "awsaip-responsible": "Responsible AI",
  "awsaip-security": "AI Security & Governance",
  // Google Professional ML Engineer
  "gcpml-lowcode": "Low-Code AI", "gcpml-collaborate": "Data & Model Mgmt",
  "gcpml-scaling": "Scaling Prototypes", "gcpml-serving": "Serving & Scaling",
  "gcpml-pipelines": "ML Pipelines", "gcpml-monitoring": "Monitoring",
};

export function shortDomainName(domainId: string, fallback?: string): string {
  return DOMAIN_SHORT[domainId] ?? fallback ?? domainId;
}

// ─── Lookup helpers ────────────────────────────────────────────────────────────

export function getCertDomainsForStage(stageId: string): CertDomain[] {
  return CERT_DOMAINS[stageId] ?? [];
}

// One badge per cert a stage supports, naming the primary domain it covers,
// returned in CERT_ORDER. Drives the "which cert does this module support" pills.
export function getCertBadgesForStage(
  stageId: string
): Array<{ certId: CertId; short: string; domain: string; badgeCls: string }> {
  const byCert = new Map<CertId, string[]>();
  for (const d of getCertDomainsForStage(stageId)) {
    const arr = byCert.get(d.certId) ?? [];
    arr.push(shortDomainName(d.domainId, d.domainName));
    byCert.set(d.certId, arr);
  }
  return CERT_ORDER.filter((c) => byCert.has(c)).map((certId) => {
    const domains = byCert.get(certId)!;
    const extra = domains.length > 1 ? ` +${domains.length - 1}` : "";
    return {
      certId,
      short: CERT_META[certId].short,
      domain: domains[0] + extra,
      badgeCls: CERT_META[certId].badgeCls,
    };
  });
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
  if (certId === "comptia-aiplus") return AIPLUS_DOMAINS;
  if (certId === "aws-aip") return AWS_AIP_DOMAINS;
  if (certId === "gcp-pmle") return GCP_PMLE_DOMAINS;
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

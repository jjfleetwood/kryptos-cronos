// Cisco CyberOps Associate (CBROPS 200-201) exam domain definitions and stage mappings.
// Each Cisco/Umbrella stage is mapped to the primary domain it covers.
// Weights match the official exam blueprint.

export type CyberOpsDomain = {
  id: string;
  name: string;
  weight: number; // % of exam
  description: string;
  color: string;
  icon: string;
  topics: string[];
  stageIds: string[];
};

export const CYBEROPS_DOMAINS: CyberOpsDomain[] = [
  {
    id: "security-concepts",
    name: "Security Concepts",
    weight: 20,
    description: "Threats, cryptography, access control, authentication, and foundational vulnerability classes.",
    color: "cyan",
    icon: "🔐",
    topics: [
      "CIA Triad & risk management",
      "Authentication & access control",
      "Cryptography fundamentals",
      "Vulnerability classes (SQLi, XSS, buffer overflow)",
      "Zero Trust architecture",
      "CVSS scoring",
    ],
    stageIds: [
      "stage-m01", // CVE-2023-20198 — auth bypass (unauthenticated access)
      "stage-m03", // CVE-2018-0171 — Smart Install, unauthenticated RCE
      "stage-m04", // CVE-2019-1653 — unauthenticated config disclosure
      "stage-m06", // CVE-2022-20695 — ISE auth bypass CVSS 10.0
      "stage-m10", // CVE-2020-3580 — XSS on ASA
      "stage-m28", // CVE-2022-20773 — SAML forgery / auth bypass
      "stage-m38", // Zero Trust Entry — Zero Trust network access
      "stage-m43", // The Management Plane — control/mgmt plane security
    ],
  },
  {
    id: "security-monitoring",
    name: "Security Monitoring",
    weight: 25,
    description: "Log analysis, SIEM, NetFlow, DNS security, alert triage, and network telemetry.",
    color: "emerald",
    icon: "📡",
    topics: [
      "SIEM and log aggregation",
      "NetFlow / IPFIX analysis",
      "DNS-layer security & threat intel",
      "Alert triage and prioritization",
      "SNMP and network telemetry",
      "SOC tooling (Cisco Umbrella, SecureX)",
    ],
    stageIds: [
      "stage-m02", // CVE-2016-6366 — EXTRABACON SNMP buffer overflow
      "stage-m32", // Alert Avalanche — SOC alert triage
      "stage-m40", // Snort 3 configuration and tuning
      "stage-m41", // FMC inline normalization / IPS monitoring
      "stage-m45", // FMC IPS policy configuration
      "umbrella-01", // DNS Security & Threat Intelligence
      "umbrella-02", // The Invisible Shield — DNS-layer architecture
      "umbrella-03", // Cisco Umbrella architecture overview
      "umbrella-04", // How Umbrella intercepts DNS
      "umbrella-05", // Trickbot C2 blocked via Umbrella
      "umbrella-06", // Umbrella overview
      "umbrella-07", // Talos C2 tracking
    ],
  },
  {
    id: "host-based-analysis",
    name: "Host-Based Analysis",
    weight: 20,
    description: "Endpoint forensics, malware behavior, process analysis, file system attacks, and persistence mechanisms.",
    color: "violet",
    icon: "🖥️",
    topics: [
      "Endpoint log analysis",
      "Malware behavior and persistence",
      "File system and process forensics",
      "Command injection and OS exploitation",
      "Rootkits and implant detection",
      "Restricted shell escapes",
    ],
    stageIds: [
      "stage-m05", // CVE-2020-3452 — ASA path traversal (file system access)
      "stage-m07", // CVE-2021-1497 — HyperFlex command injection → root
      "stage-m08", // CVE-2023-20273 — IOS XE command injection (summit stage)
      "stage-m09", // CVE-2019-1821 — JSP upload → RCE on Prime Infrastructure
      "stage-m11", // CVE-2020-3187 — ASA path traversal / file deletion
      "stage-m19", // CVE-2022-20812 — Expressway path traversal / root read+write
      "stage-m20", // CVE-2024-20399 — Velvet Ant NX-OS zero-day, APT persistence
      "stage-m21", // CVE-2024-20353 — ArcaneDoor phantom crash / implant loading
      "stage-m22", // CVE-2024-20359 — Line Dancer backdoor surviving reboots
      "stage-m26", // CVE-2022-20828 — FTD restricted shell escape → OS root
    ],
  },
  {
    id: "network-intrusion-analysis",
    name: "Network Intrusion Analysis",
    weight: 20,
    description: "Packet analysis, IDS/IPS evasion, exploit identification, protocol attacks, and firewall bypasses.",
    color: "rose",
    icon: "🔍",
    topics: [
      "Packet and traffic analysis",
      "IDS/IPS rule evasion techniques",
      "Protocol-level exploits (TCP, DHCP, CDP)",
      "Firewall bypass and path traversal",
      "DNS tunneling and C2 detection",
      "Exploit chain analysis",
    ],
    stageIds: [
      "stage-m12", // CVE-2017-6736 — DHCP buffer overflow
      "stage-m13", // CVE-2016-1287 — IKE/VPN tunnel collapse
      "stage-m14", // CVE-2017-3881 — Telnet RCE (Vault 7)
      "stage-m15", // CVE-2020-3118 — CDPwn format string (discovery protocol)
      "stage-m17", // CVE-2020-3259 — Akira ransomware VPN exploitation
      "stage-m18", // CVE-2019-1663 — SOHO stack overflow
      "stage-m23", // CVE-2021-1291 — SD-WAN SQL injection
      "stage-m24", // CVE-2023-20109 — GET VPN group key poisoning
      "stage-m25", // CVE-2018-0296 — ASA path traversal
      "stage-m27", // CVE-2021-1224 — Snort IPS TCP stream evasion
      "stage-m30", // CVE-2019-1896 — Cisco APIC REST API injection
      "stage-m34", // CVE-2023-20198 — God Mode mass exploitation
      "stage-m35", // CVE-2023-20273 — IOS XE post-exploitation
      "stage-m37", // CVE-2018-0171 — Smart Install mass compromise
      "stage-m39", // CVE-2022-20927 — FTD IPS bypass via fragmentation
      "stage-m44", // FTD deployment modes and IPS policy architecture
      "stage-m46", // FTD inline vs passive deployment
      "stage-m47", // Snort 3 rule writing (Talos)
      "stage-m48", // Half-open connections / TCP SYN flood analysis
      "umbrella-08", // The Hollow Pipe — DNS tunneling
      "umbrella-09", // DNS tunneling exfiltration over port 53
      "umbrella-10", // DNS tunneling mechanics
    ],
  },
  {
    id: "security-policies",
    name: "Security Policies & Procedures",
    weight: 15,
    description: "Incident response, threat hunting, SOC operations, compliance frameworks, and security program design.",
    color: "amber",
    icon: "📋",
    topics: [
      "Incident response lifecycle (NIST)",
      "Threat hunting methodology",
      "SOC roles and escalation procedures",
      "Security frameworks and compliance",
      "Nation-state threat attribution",
      "IPS/IDS hardening and policy governance",
    ],
    stageIds: [
      "stage-m16", // CVE-2021-1609 — SOHO router mass exposure (advisory/response)
      "stage-m29", // SecureX — single pane of glass risk / incident integration
      "stage-m31", // API Keymaster — API security policy / DevNet governance
      "stage-m33", // Hunt or Be Hunted — threat hunting methodology
      "stage-m36", // ArcaneDoor — nation-state incident response & forensics
      "stage-m42", // CISA IPS/IDS hardening guidance
      "stage-m49", // CVE-2022-20927 advisory — patch response procedures
      "stage-m50", // NVD advisory follow-through
    ],
  },
];

// Lookup: stageId → domain ids
export function getDomainsForStage(stageId: string): CyberOpsDomain[] {
  return CYBEROPS_DOMAINS.filter((d) => d.stageIds.includes(stageId));
}

// Compute per-domain and overall readiness from a list of completed stage IDs
export function computeCyberOpsReadiness(completedStageIds: string[]): {
  overall: number;
  domains: Array<{ domain: CyberOpsDomain; completed: number; total: number; pct: number }>;
} {
  const domains = CYBEROPS_DOMAINS.map((domain) => {
    const completed = domain.stageIds.filter((id) => completedStageIds.includes(id)).length;
    const total = domain.stageIds.length;
    const pct = total > 0 ? Math.round((completed / total) * 100) : 0;
    return { domain, completed, total, pct };
  });

  // Weighted overall score
  const overall = Math.round(
    domains.reduce((sum, { domain, pct }) => sum + (pct * domain.weight) / 100, 0)
  );

  return { overall, domains };
}

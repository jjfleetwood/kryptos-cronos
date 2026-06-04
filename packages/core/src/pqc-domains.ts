// Post-Quantum Cryptography (PQC) migration readiness — phase definitions and stage mappings.
// This is a FRAMEWORK readiness tracker, not a certification: the phases follow the
// NSA/CISA/NIST "Quantum-Readiness: Migration to Post-Quantum Cryptography" roadmap,
// CNSA 2.0, and NIST FIPS 203/204/205. There is no industry "quantum security" exam to
// map to, so this dashboard tracks readiness against the published migration lifecycle.
// Each quantum stage is mapped to the migration phase it most directly advances.

export type PqcPhase = {
  id: string;
  name: string;
  weight: number; // % of a complete migration program (sums to 100)
  description: string;
  color: string;
  icon: string;
  topics: string[];
  stageIds: string[];
};

export const PQC_PHASES: PqcPhase[] = [
  {
    id: "prepare",
    name: "Prepare & Govern",
    weight: 15,
    description:
      "Establish quantum-readiness as a program: build awareness of the threat timeline, secure executive and board sponsorship, set a migration roadmap, and assign ownership. The first move in the CISA roadmap is organizational, not technical.",
    color: "cyan",
    icon: "🧭",
    topics: [
      "Quantum threat timeline & NISQ reality",
      "Executive / board sponsorship",
      "CISA migration roadmap",
      "SEC & regulatory disclosure",
      "Quantum-readiness program ownership",
      "Budget & resourcing",
    ],
    stageIds: [
      "quantum-01", // Superposition — threat foundation / awareness
      "quantum-06", // NISQ — where the technology actually is
      "quantum-07", // Error correction — the bridge to fault tolerance (timeline)
      "quantum-10", // Quantum timeline — when to act
      "quantum-c09", // CISO briefing, board reporting, budget
      "quantum-d05", // CISA migration roadmap (5-phase)
      "quantum-d07", // Board briefing + SEC disclosure
    ],
  },
  {
    id: "discover",
    name: "Discover (CBOM)",
    weight: 15,
    description:
      "You cannot migrate cryptography you cannot see. Inventory every algorithm, key, certificate, protocol, and library across the estate and assemble a Cryptographic Bill of Materials (CBOM) — the foundation every later phase depends on.",
    color: "sky",
    icon: "🔎",
    topics: [
      "Cryptographic asset inventory",
      "Cryptography Bill of Materials (CBOM)",
      "Algorithm & key discovery tooling",
      "Certificate & PKI mapping",
      "Embedded & third-party crypto",
      "Dependency / library scanning",
    ],
    stageIds: [
      "quantum-b09", // Discovering & cataloging cryptographic assets for PQC migration
      "quantum-d01", // CBOM — Cryptographic Bill of Materials
    ],
  },
  {
    id: "assess",
    name: "Assess Risk & Prioritize",
    weight: 15,
    description:
      "Rank what to migrate first. Model Harvest-Now-Decrypt-Later exposure against data shelf-life, understand exactly which algorithms Shor and Grover break, and weigh sector, supply-chain, and nation-state risk to sequence the migration.",
    color: "teal",
    icon: "⚖️",
    topics: [
      "Harvest-Now-Decrypt-Later (HNDL)",
      "Shor's algorithm — RSA/ECC break",
      "Grover's algorithm — symmetric impact",
      "Organizational quantum risk framework",
      "Sector & data-sensitivity prioritization",
      "Supply-chain & nation-state risk",
    ],
    stageIds: [
      "quantum-02", // Shor's algorithm — the RSA/ECC killer
      "quantum-03", // Grover's algorithm — AES weakening
      "quantum-04", // HNDL — the threat already underway
      "quantum-08", // Organizational quantum risk assessment framework
      "quantum-c03", // State-sponsored quantum networks & SIGINT implications
      "quantum-d02", // HNDL threat assessment
      "quantum-d06", // Sector risk (finance / healthcare / SCADA / blockchain)
      "quantum-d10", // Third-party & supply-chain quantum risk
    ],
  },
  {
    id: "standards",
    name: "Select PQC Standards",
    weight: 20,
    description:
      "Choose the algorithms. Understand the lattice math behind the NIST winners, the FIPS 203/204/205 standards, the CNSA 2.0 mandate, and where quantum key distribution fits — so the right primitive is matched to each use case.",
    color: "indigo",
    icon: "📐",
    topics: [
      "NIST PQC standardization process",
      "Learning With Errors (lattice math)",
      "ML-KEM (FIPS 203) key encapsulation",
      "ML-DSA / SLH-DSA / FN-DSA signatures",
      "CNSA 2.0 mandate & timelines",
      "Quantum key distribution (QKD)",
    ],
    stageIds: [
      "quantum-b01", // NIST PQC standardization
      "quantum-b02", // Learning With Errors — the math foundation
      "quantum-b03", // ML-KEM (Kyber) — FIPS 203
      "quantum-b04", // ML-DSA (Dilithium) — FIPS 204
      "quantum-b05", // SLH-DSA (SPHINCS+) — FIPS 205
      "quantum-b06", // FN-DSA (FALCON)
      "quantum-d04", // CNSA 2.0 NSS mandate
      "quantum-05", // Entanglement — QKD foundation
      "quantum-c01", // QKD — security guaranteed by physics
    ],
  },
  {
    id: "engineer",
    name: "Engineer & Migrate",
    weight: 20,
    description:
      "The hands-on phase: build crypto-agility so algorithms can be swapped without downtime, deploy hybrid key exchange in TLS, SSH, and VPNs, migrate PKI and HSMs, and integrate PQC libraries into real systems.",
    color: "violet",
    icon: "🛠️",
    topics: [
      "Crypto-agility & algorithm negotiation",
      "Hybrid key exchange (classical + PQC)",
      "PQC in TLS 1.3, VPN & WireGuard",
      "PKI, certificate & HSM migration",
      "Open Quantum Safe / liboqs integration",
      "Quantum-safe reference architecture",
    ],
    stageIds: [
      "quantum-b07", // Hybrid classical + PQC migration
      "quantum-b08", // Deploying PQC in TLS 1.3
      "quantum-09", // Quantum RNG — seeding cryptographic security
      "quantum-c02", // Trusted nodes, fiber & satellite QKD
      "quantum-c04", // Crypto-agility — swap algorithms without downtime
      "quantum-c05", // WireGuard + ML-KEM hybrid key exchange
      "quantum-c06", // Root CAs, certificate chains & HSM firmware
      "quantum-c07", // Deploying PQC via Open Quantum Safe
      "quantum-d03", // NIST FIPS 203/204/205 deployment
      "quantum-d08", // Hybrid cryptography (X25519 + ML-KEM-768)
      "quantum-d09", // Quantum-safe architecture (crypto agility)
    ],
  },
  {
    id: "validate",
    name: "Validate & Operate",
    weight: 15,
    description:
      "Prove it works and keep it working: validate implementations against FIPS 140-3 / CMVP, run interoperability and side-channel testing, and operate the migrated estate end to end with monitoring and rollback.",
    color: "emerald",
    icon: "✅",
    topics: [
      "PQC implementation testing",
      "Interoperability validation",
      "Side-channel resistance",
      "FIPS 140-3 / CMVP validation",
      "End-to-end quantum-safe operations",
      "Monitoring & rollback",
    ],
    stageIds: [
      "quantum-b10", // PQC testing — validation, interoperability, side-channels
      "quantum-c08", // Validating PQC modules under FIPS 140-3 / CMVP
      "quantum-c10", // End-to-end quantum-safe architecture
    ],
  },
];

// Lookup: stageId → phases it advances
export function getPhasesForStage(stageId: string): PqcPhase[] {
  return PQC_PHASES.filter((p) => p.stageIds.includes(stageId));
}

// Compute per-phase and overall PQC migration readiness from completed stage IDs.
export function computePqcReadiness(completedStageIds: string[]): {
  overall: number;
  phases: Array<{ phase: PqcPhase; completed: number; total: number; pct: number }>;
} {
  const phases = PQC_PHASES.map((phase) => {
    const completed = phase.stageIds.filter((id) => completedStageIds.includes(id)).length;
    const total = phase.stageIds.length;
    const pct = total > 0 ? Math.round((completed / total) * 100) : 0;
    return { phase, completed, total, pct };
  });

  const overall = Math.round(
    phases.reduce((sum, { phase, pct }) => sum + (pct * phase.weight) / 100, 0)
  );

  return { overall, phases };
}

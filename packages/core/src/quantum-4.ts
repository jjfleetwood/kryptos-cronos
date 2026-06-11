import type { StageConfig, EpochConfig } from "./types";

export const quantum4Epoch: EpochConfig = {
  id: "quantum-4",
  name: "Quantum Risk Management",
  subtitle: "CBOM, Migration Programs & Governance",
  description: "Build cryptographic inventories, design PQC migration programs, assess sector-specific quantum risk, and brief the board — using NIST, CISA, and NSA CNSA 2.0 frameworks.",
  emoji: "⚠️",
  color: "emerald",
  unlocked: true,
};

export const quantum4Stages: StageConfig[] = [
  // ─── quantum-d01: CBOM ───────────────────────────────────────────────────────
  {
    epochId: "quantum-4",
    wonder: { name: "NIST Cybersecurity Center of Excellence", location: "Gaithersburg, Maryland, USA", era: "2024 CE", emoji: "📋" },
    id: "quantum-d01",
    order: 1,
    title: "Crypto Inventory Day One",
    subtitle: "Cryptographic Bill of Materials — Know What You Have",
    category: "cybersecurity",
    xp: 160,
    badge: { id: "badge-qrm-cbom", name: "Crypto Cartographer", emoji: "📋" },
    challengeType: "ctf",
    info: {
      tagline: "You cannot migrate what you cannot find. A CBOM is the prerequisite for every post-quantum transition plan.",
      year: 2024,
      overview: [
        "This epoch reframes everything you've learned about the quantum threat as a management problem — and management starts with an inventory. A Cryptographic Bill of Materials (CBOM) is a structured catalog of every algorithm, key, certificate, and protocol an organization relies on, the cryptographic cousin of the SBOM that lists software dependencies. Every RSA key pair, every TLS certificate, every ECDH handshake and symmetric key gets an entry. It sounds clerical, and it is — but it is also the foundation everything else in a migration program stands on, which is why both NIST and CISA name it as step one, not step five. You cannot manage, prioritize, or report on a risk whose extent you have never measured.",
        "The reason the CBOM is hard — and the reason most organizations badly underestimate it — is that cryptography long ago stopped living only in the obvious places. Yes, it's in the PKI, the VPNs, the email encryption. But it's also silently inside every TLS connection, every SSH session, every JWT your APIs mint, the encryption-at-rest layer under your databases, your authentication flows, and your code-signing pipeline. And it sinks deeper still: into HSMs, IoT firmware, embedded controllers, and the legacy SCADA gear running your physical plant — dependencies that are effectively invisible to a normal IT asset inventory because nobody ever wrote them down. A CBOM done honestly is an excavation, not a survey.",
        "Without that excavation, the entire program is blind: no risk assessment, no prioritization, no readiness reporting to a regulator or a board. This is now a formal expectation, not just best practice — CISA's 2023 roadmap directed federal agencies to complete cryptographic inventories, and NIST IR 8547 supplies the actual field taxonomy so a CBOM is machine-readable and comparable rather than a bespoke spreadsheet. The good news is you don't build it by hand: tools like Cryptosense Analyzer, XAEGIS, and IBM Quantum Safe Explorer generate CBOMs automatically by analyzing network traffic and scanning source code, turning a years-long manual census into a repeatable, re-runnable scan. The rest of this epoch is what you *do* with the CBOM once you have it.",
      ],
      technical: {
        title: "CBOM Data Fields and Automated Discovery",
        body: [
          "A complete CBOM record captures the full context per asset:\n- Algorithm (RSA-2048, AES-256-GCM, ECDH-P384), key length, mode, CA, expiry, deployment context (TLS/SSH/S-MIME/code signing), owner, data classification, and a quantum-vulnerability rating.\n- NIST IR 8547 defines five tiers: V1 (immediately vulnerable, RSA/ECC), V2 (safe, monitor), V3 (quantum-safe, AES-256), V4 (PQC-ready), V5 (unknown).",
          "Automated discovery comes at the inventory from several angles:\n- Passive network analysis (reading TLS ClientHello/ServerHello to enumerate cipher suites), static code analysis, certificate-transparency harvesting, and PKI CA export.\n- Open-source tools include CryptoLyzer (protocol scanning) and Cryptobom (schema validator); output is typically JSON/XML in the CycloneDX CBOM extension.",
        ],
        codeExample: {
          label: "CryptoLyzer — scan TLS endpoints for cipher suite inventory",
          code: `# Install CryptoLyzer
pip install cryptolyzer

# Scan a host for all TLS cipher suites in use
cryptolyze tls all example.com --output json > cbom-tls.json

# Parse results to identify quantum-vulnerable suites
python3 - <<'EOF'
import json
with open("cbom-tls.json") as f:
    data = json.load(f)

vulnerable = []
for suite in data.get("cipher_suites", []):
    name = suite.get("name", "")
    if any(kex in name for kex in ["RSA", "ECDH", "DHE"]):
        vulnerable.append(name)

print(f"Quantum-vulnerable cipher suites found: {len(vulnerable)}")
for s in vulnerable:
    print(f"  V1 (QUANTUM-VULNERABLE): {s}")
EOF`,
        },
      },
      incident: {
        title: "U.S. Federal CBOM Mandate — The Crypto Inventory Gap",
        when: "2022–2024",
        where: "U.S. Federal civilian agencies — OMB M-23-02 mandate",
        impact: "Agencies found 70–90% of cryptographic assets were undocumented; migration planning blocked",
        body: [
          "After NSM-10 (May 2022) required federal cryptographic inventories, CISA's 2023 gap assessments found a chasm:\n- Most civilian agencies had no systematic record of their cryptographic dependencies.\n- IT teams could name their PKI and VPN systems but missed crypto buried in SCADA, healthcare databases, satellite ground-station firmware, and decades-old mainframe batch jobs.",
          "That inventory gap directly blocked migration planning:\n- Without knowing what they were migrating, agencies couldn't estimate cost, timeline, or risk exposure.\n- CISA's Post-Quantum Cybersecurity Roadmap (Nov 2023) formalized the fix: complete a CBOM by end of FY2025 and flag the highest-priority systems for migration to NIST FIPS 203/204/205 algorithms.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Discovery Scan", sub: "Network traffic + source code analysis", type: "system" },
          { label: "CBOM Record", sub: "Algorithm, key, cert, context, owner", type: "system" },
          { label: "Vulnerability Tier", sub: "V1=RSA/ECC, V3=AES-256, V4=PQC", type: "attacker" },
          { label: "Migration Priority", sub: "High-value + long-lived data first", type: "result" },
        ],
      },
      timeline: [
        { year: 2022, event: "NSM-10: Biden directs federal agencies to begin PQC migration" },
        { year: 2023, event: "CISA Post-Quantum Cybersecurity Roadmap published — CBOM mandate" },
        { year: 2024, event: "NIST FIPS 203/204/205 finalized — migration target algorithms confirmed", highlight: true },
        { year: 2025, event: "Federal agency CBOM completion deadline (OMB guidance)" },
        { year: 2027, event: "Target: priority federal systems migrated to PQC" },
      ],
      keyTakeaways: [
        "CBOM is prerequisite to migration — you cannot plan what you have not inventoried",
        "Cryptography is embedded everywhere: TLS, SSH, IoT firmware, SCADA, mainframes, code signing",
        "NIST IR 8547 defines five vulnerability tiers — V1 (RSA/ECC) requires immediate migration planning",
        "Automated tools (CryptoLyzer, Cryptosense) generate CBOMs from network traffic and source code",
      ],
      references: [
        { title: "CISA Post-Quantum Cybersecurity Roadmap", url: "https://www.cisa.gov/sites/default/files/2023-11/CISA-2023-Post-Quantum-Cybersecurity-Roadmap.pdf" },
        { title: "NIST IR 8547: CBOM Taxonomy", url: "https://csrc.nist.gov/pubs/ir/8547/final" },
      ],
    },
    quiz: {
      questions: [
        { id: "quantum-d01-q1", type: "Core Idea", challenge: "Why CBOM first.", text: "Why is a Cryptography Bill of Materials (CBOM) the prerequisite for any post-quantum transition plan?", options: ["You cannot migrate cryptography you cannot find — the CBOM inventories where and how crypto is used","It satisfies SEC fines automatically","It replaces the need for ML-KEM","It generates quantum keys"], correctIndex: 0, explanation: "A CBOM catalogs algorithms, key sizes, and locations so migration can be planned and prioritized." },
        { id: "quantum-d01-q2", type: "Implementation", challenge: "CBOM fields.", text: "Which fields belong in a useful CBOM entry for an endpoint?", options: ["Algorithm, key size, certificate validity, and quantum vulnerability tier","Only the server hostname","Just the OS version","The admin's email"], correctIndex: 0, explanation: "Capturing algorithm, key size, validity, and a vulnerability classification turns inventory into actionable risk data." },
        { id: "quantum-d01-q3", type: "Discovery", challenge: "Automated discovery.", text: "How is a CBOM for public-facing infrastructure most efficiently built?", options: ["Automated scanning of TLS endpoints to enumerate algorithms and classify vulnerability tiers","Manually asking each developer","Reading marketing brochures","Guessing from the firewall logs"], correctIndex: 0, explanation: "Scanning TLS endpoints discovers real deployed crypto far faster and more accurately than manual surveys." },
        { id: "quantum-d01-q4", type: "Concept", challenge: "CBOM vs SBOM.", text: "How does a CBOM differ from a Software Bill of Materials (SBOM)?", options: ["A CBOM catalogs cryptographic usage; an SBOM catalogs software components","They are identical","A CBOM lists only AES keys","An SBOM is for quantum hardware"], correctIndex: 0, explanation: "SBOMs track software inventory; CBOMs specifically map cryptographic assets and their quantum exposure." },
        { id: "quantum-d01-q5", type: "Policy", challenge: "Federal mandate.", text: "What gap does the U.S. federal CBOM mandate aim to close?", options: ["The crypto inventory gap — agencies often don't know what algorithms their systems use","A shortage of QKD satellites","The lack of RSA in government","Too few passwords"], correctIndex: 0, explanation: "Agencies historically lacked a crypto inventory; the mandate forces discovery before migration." },
        { id: "quantum-d01-q6", type: "Implementation", challenge: "Vulnerability tiering.", text: "When classifying CBOM entries, which crypto is tiered as most quantum-vulnerable?", options: ["Public-key algorithms like RSA and ECC, broken by Shor's algorithm","AES-256 bulk encryption","SHA-512 hashing of public data","Random number generation"], correctIndex: 0, explanation: "RSA/ECC key exchange and signatures fall to Shor's algorithm, making them the highest-priority tier." },
        { id: "quantum-d01-q7", type: "Strategy", challenge: "From inventory to plan.", text: "After building the CBOM, what is the immediate next step in the migration program?", options: ["Score and prioritize systems by quantum risk (e.g., HNDL exposure and key longevity)","Delete all certificates","Buy QKD hardware","Stop using TLS"], correctIndex: 0, explanation: "The inventory feeds risk scoring, which sequences the migration roadmap." },
        { id: "quantum-d01-q8", type: "Defense", challenge: "Keeping CBOM current.", text: "Why must a CBOM be maintained continuously rather than produced once?", options: ["Cryptographic deployments change as systems and algorithms evolve; a stale inventory misleads migration","It only matters at audit time","CBOMs never change","It's a one-time legal filing"], correctIndex: 0, explanation: "Living infrastructure changes constantly; an outdated CBOM hides new quantum-vulnerable assets." },
      ],
    },
    ctf: {
      scenario: "You're the lead quantum risk analyst at a federal agency. Build a CBOM for the agency's public-facing infrastructure by scanning TLS endpoints and classifying quantum vulnerability tiers.",
      hint: "Start by reading the agency inventory brief, then run the crypto scanner, then classify assets by vulnerability tier.",
      hints: [
        "Read the agency brief first. Run: cat agency-brief.txt",
        "Run the TLS scanner to discover cipher suites. Run: cbom-scan --tls agency.gov",
        "Parse and normalize the raw scan output into a CBOM record set. Run: cbom-parse results.json",
        "Classify scanned assets by quantum vulnerability tier. Run: cbom-classify results.json",
        "Run 'assemble' to submit your completed CBOM assessment",
      ],
      fragments: [
        { trigger: "/agency-brief.txt", value: "FLAG{CBOM_INV", label: "Agency Brief — Crypto Inventory Scope" },
        { trigger: "cbom-scan", value: "ENTORY_", label: "TLS Scan — Quantum-Vulnerable Suites Found" },
        { trigger: "cbom-parse", value: "V1_", label: "Scan Output Parsed — CBOM Records Normalized" },
        { trigger: "cbom-classify", value: "ASSETS}", label: "CBOM Classification — V1/V3/V4 Tiers Assigned" },
      ],
      files: {
        "/agency-brief.txt": [
          "QUANTUM RISK ASSESSMENT — AGENCY CBOM",
          "Mission: Build cryptographic asset inventory for PQC migration planning.",
          "Scope: Public-facing TLS endpoints, internal PKI, SSH infrastructure.",
          "Priority: Identify all V1 (RSA/ECC/DH) assets for priority migration.",
          "Timeline: CBOM complete by FY2025 per CISA roadmap.",
          "Sequence: cbom-scan → cbom-classify → assemble",
        ].join("\n"),
      },
      dirs: { "/": [{ name: "agency-brief.txt", isDir: false }] },
      extraCommands: {
        "cbom-scan": (_args: string[]) => ({
          lines: [
            "Running TLS cipher suite scan on agency.gov...",
            "Discovered cipher suites:",
            "  TLS_RSA_WITH_AES_256_CBC_SHA256 [V1 — RSA key exchange, QUANTUM-VULNERABLE]",
            "  TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256 [V1 — ECDHE, QUANTUM-VULNERABLE]",
            "  TLS_AES_256_GCM_SHA384 (TLS 1.3) [V3 — AES-256 quantum-safe]",
            "SSH server key types: ssh-rsa 2048-bit [V1], ecdsa-sha2-nistp256 [V1]",
            "Certificate inventory: 47 certificates, avg key size RSA-2048",
            "PKI CA: RSA-4096 root [V1], RSA-2048 intermediates [V1]",
            "Results saved to results.json. Fragment collected.",
            "",
            ">> LEARN: TLS RSA and ECDHE key exchange are both V1 — broken by Shor's Algorithm.",
            "   Only the symmetric portion (AES-256) is quantum-safe (Grover requires 2^128 ops).",
            "   Migration path: replace RSA/ECDH with ML-KEM-768 (KYBER) per FIPS 203.",
          ],
        }),
        "cbom-parse": (_args: string[]) => ({
          lines: [
            "Parsing results.json into normalized CBOM records...",
            "  52 raw scan hits → deduped to 41 unique crypto assets",
            "  extracting per-asset: algorithm, key size, protocol, endpoint, owner",
            "  normalizing names (RSA-2048 / rsaEncryption 2048 → one canonical ID)",
            "  flagging records missing key size for manual follow-up",
            "Clean CBOM record set ready for tier classification.",
            "Next: cbom-classify results.json",
            "",
            ">> LEARN: Raw scan output is not a CBOM — normalize first",
            "   Dedup and canonicalization turn noisy scanner hits into comparable",
            "   records; without it, classification double-counts and misses assets.",
            "   A CBOM is only as trustworthy as the parsing step beneath it.",
          ],
        }),
        "cbom-classify": (_args: string[]) => ({
          lines: [
            "Classifying 52 assets from results.json...",
            "V1 (Immediately Quantum-Vulnerable): 48 assets",
            "  - 47 RSA/ECC TLS certificates",
            "  - 1 RSA-4096 PKI root CA",
            "V3 (Quantum-Safe): 4 assets",
            "  - AES-256-GCM symmetric encryption (database, backup)",
            "V4 (PQC-Ready): 0 assets",
            "",
            "Priority migration order:",
            "  1. PKI root CA (highest impact — signs everything else)",
            "  2. Public TLS endpoints (internet-exposed, HNDL risk)",
            "  3. Internal SSH infrastructure",
            "CBOM classification complete. Migration cost estimate: 18 months, 3 FTEs.",
            "Fragment collected.",
            "",
            ">> LEARN: PKI root CA migration is the most critical step.",
            "   Once the root CA is migrated to ML-DSA (FIPS 204), all issued certs inherit PQC.",
            "   Hybrid certificates (RSA + ML-DSA) allow transition without breaking legacy clients.",
          ],
        }),
      },
    },
  },

  // ─── quantum-d02: HNDL ───────────────────────────────────────────────────────
  {
    epochId: "quantum-4",
    wonder: { name: "NSA National Cryptologic Museum", location: "Fort Meade, Maryland, USA", era: "2024 CE", emoji: "🕵️" },
    id: "quantum-d02",
    order: 2,
    title: "Harvest Now, Decrypt Later",
    subtitle: "HNDL — The Threat That Is Already Happening",
    category: "cybersecurity",
    xp: 160,
    badge: { id: "badge-qrm-hndl", name: "HNDL Analyst", emoji: "🕵️" },
    challengeType: "ctf",
    info: {
      tagline: "Nation-states are capturing encrypted traffic today, storing it, and waiting for Q-Day. The threat window is now — not 2030.",
      year: 2022,
      overview: [
        "From the risk manager's chair, Harvest Now Decrypt Later (also Store Now Decrypt Later) is the threat that breaks the usual logic of 'we'll deal with it when it's imminent.' It is an intelligence-collection strategy already underway: adversaries intercept and archive encrypted traffic *today*, fully aware they can't read it yet, and warehouse it to decrypt the moment a cryptographically-relevant quantum computer exists. Because RSA and ECC are expected to fall within roughly 10–15 years, every byte you encrypt with them now carries a retrospective risk — and agencies worldwide assess HNDL not as a future scenario but as an active operation. The capture has already happened; only the decryption is pending.",
        "What makes HNDL a *prioritization* tool rather than just a scare story is that it sorts your data by shelf life. The danger concentrates wherever secrets must stay secret for a long time: classified communications, medical and genomic records, privileged legal documents, trade secrets and IP, financial transactions, and the infrastructure credentials that unlock everything else. The reframing every risk owner needs to internalize is this — a nation-state capturing your agency's TLS traffic today can't read it in 2025, but can in 2032, so the *effective* security lifetime of your RSA-2048-protected data against a capable state actor is not 'until Q-Day.' It is 'right now.' That single sentence is what moves long-lived data to the front of the migration queue.",
        "And this isn't analyst speculation dressed up as fact — Western agencies have publicly confirmed adversary HNDL programs in their own words. NSA, GCHQ, and CISA all acknowledge that strategically motivated adversaries are running collection campaigns aimed at future quantum decryption. The NSA's guidance warns plainly that adversaries are 'today collecting encrypted data for future decryption,' and for planning purposes recommends treating any RSA- or ECC-protected data with a secrecy horizon beyond 2030 as *already compromised*. For a CISO building a risk register, that official posture is gold: it converts 'quantum' from a speculative line item the board waves away into a named, government-confirmed threat with a concrete planning deadline.",
      ],
      technical: {
        title: "HNDL Attack Infrastructure and Defense",
        body: [
          "HNDL campaigns target bulk collection points cheaply:\n- Undersea cable taps, Internet Exchange Points, BGP route hijacking, and compromised ISP infrastructure — the adversary only needs to capture and store ciphertext, not decrypt in real time.\n- Storage is trivial: ~$20,000 to store 1 petabyte of raw traffic, making bulk collection economically viable for states.",
          "Hybrid PQC key exchange, deployed now, is the counter:\n- Even if the PQC algorithm is later broken classically, captured ciphertext was encrypted with keys the adversary can't derive quantum-mechanically.\n- Deploy ML-KEM-768 hybrid key exchange immediately — it protects future sessions so traffic captured after deployment can't be retrospectively decrypted by a CRQC.",
        ],
        codeExample: {
          label: "OpenSSL — configure hybrid X25519+ML-KEM-768 key exchange (HNDL defense)",
          code: `# OpenSSL 3.4+ with oqs-provider for post-quantum groups
# Configure TLS 1.3 with hybrid X25519+ML-KEM-768 key exchange
openssl s_server -groups x25519_mlkem768 -tls1_3 \\
  -cert server.crt -key server.key -port 4433

# Verify hybrid key exchange is negotiated
openssl s_client -groups x25519_mlkem768 -tls1_3 \\
  -connect localhost:4433 -brief 2>&1 | grep "Server Temp Key"
# Expected: Server Temp Key: X25519MLKEM768, 1216 bits

# Hybrid security: both algorithms must be broken to expose session key
# X25519 protects against classical adversaries
# ML-KEM-768 protects against quantum adversaries (Shor's Algorithm)`,
        },
      },
      incident: {
        title: "Chinese HNDL Operations Against U.S. Federal Agencies",
        when: "2017–present (ongoing)",
        where: "U.S. federal networks, financial infrastructure, defense contractors",
        impact: "Years of encrypted federal traffic captured; retrospective decryption risk once CRQC available",
        body: [
          "U.S. intelligence assessments (2022–2024) conclude PRC state actors run systematic HNDL collection against federal traffic:\n- NSA Director Paul Nakasone's 2023 congressional testimony confirmed the NSA tracks HNDL collection by foreign intelligence services.\n- The 2023 advisory specifically warns Chinese actors — including MSS-associated groups — have the capability and motivation for large-scale HNDL.",
          "The implication for risk managers is stark:\n- Any classified or sensitive U.S. government data sent over RSA/ECC channels since ~2017 must be treated as potentially captured and held for future quantum decryption.\n- CISA's guidance: assume HNDL is occurring and assess each data set's remaining secrecy horizon — if it must stay secret past 2035, treat PQC migration as an emergency, not a planned transition.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Today — RSA Traffic", sub: "Captured & stored by adversary", type: "attacker" },
          { label: "Storage (Cheap)", sub: "1 PB = $20K — bulk collection viable", type: "system" },
          { label: "Q-Day (~2030-35)", sub: "CRQC decrypts stored ciphertext", type: "victim" },
          { label: "HNDL Defense", sub: "Hybrid PQC key exchange NOW", type: "result" },
        ],
      },
      timeline: [
        { year: 2013, event: "Snowden revelations confirm bulk TLS traffic collection by NSA/GCHQ" },
        { year: 2017, event: "Intelligence estimates: China begins large-scale HNDL collection programs" },
        { year: 2022, event: "NSA issues HNDL warning; recommends immediate PQC key exchange deployment" },
        { year: 2023, event: "NSA Director confirms foreign HNDL programs in Congressional testimony", highlight: true },
        { year: 2024, event: "NIST FIPS 203 (ML-KEM) finalized — HNDL defense algorithm available" },
      ],
      keyTakeaways: [
        "HNDL is active today — nation-states are capturing and storing your encrypted traffic now",
        "The effective security lifetime of RSA-2048 data is not Q-Day — it is the present moment",
        "Hybrid PQC key exchange (X25519+ML-KEM-768) defends against HNDL immediately",
        "Data with secrecy horizon past 2035 should be treated as urgently requiring PQC migration",
      ],
      references: [
        { title: "NSA: Quantum Computing and Post-Quantum Cryptography", url: "https://media.defense.gov/2021/Aug/04/2002821837/-1/-1/1/Quantum_FAQs_20210804.PDF" },
        { title: "CISA: Post-Quantum Cryptography Initiative", url: "https://www.cisa.gov/quantum" },
      ],
    },
    quiz: {
      questions: [
        { id: "quantum-d02-q1", type: "Core Idea", challenge: "HNDL timing.", text: "Why is the Harvest-Now-Decrypt-Later (HNDL) threat described as 'now, not 2030'?", options: ["Adversaries are capturing and storing encrypted traffic today to decrypt after Q-Day","Quantum computers already break RSA at scale","All data expires in 2030","HNDL only affects future data"], correctIndex: 0, explanation: "The harvesting happens today; the threat window is open now even though decryption waits for a future quantum computer." },
        { id: "quantum-d02-q2", type: "Threat", challenge: "HNDL infrastructure.", text: "What infrastructure does an HNDL adversary need?", options: ["Bulk traffic capture and large-scale encrypted-data storage for later decryption","A working CRQC today","Physical access to every server","A valid TLS certificate"], correctIndex: 0, explanation: "HNDL requires interception and storage capacity now; the quantum decryption capability is acquired later." },
        { id: "quantum-d02-q3", type: "Real World", challenge: "Targeting pattern.", text: "What characterizes nation-state HNDL operations against federal agencies?", options: ["Systematic capture of RSA/ECC-protected traffic with long secrecy value","Random ransomware deployment","Phishing for gift cards","Defacing public websites"], correctIndex: 0, explanation: "HNDL campaigns target durable secrets — exactly the data whose value survives until Q-Day." },
        { id: "quantum-d02-q4", type: "Analysis", challenge: "Risk window.", text: "How is the HNDL risk window for a given dataset calculated?", options: ["Compare the data's required secrecy lifetime against the estimated time to Q-Day","Count the number of packets","Measure CPU usage","Divide key size by 2"], correctIndex: 0, explanation: "If secrecy must outlast Q-Day, harvested ciphertext is at risk — that overlap defines the window." },
        { id: "quantum-d02-q5", type: "Defense", challenge: "Stopping HNDL.", text: "What is the most direct defense against HNDL for sensitive communications?", options: ["Migrate key exchange to PQC now so harvested traffic stays undecryptable later","Increase log retention","Shorten passwords","Disable TLS compression only"], correctIndex: 0, explanation: "Once the key exchange is quantum-safe, already-harvested or future-harvested sessions can't be decrypted at Q-Day." },
        { id: "quantum-d02-q6", type: "Concept", challenge: "Why long-lived data.", text: "Which data is the highest-value HNDL target?", options: ["Secrets with long required confidentiality (state secrets, IP, health records)","Public press releases","Cached images","Expired session tokens"], correctIndex: 0, explanation: "The longer data must stay secret, the more likely it's still sensitive when Q-Day arrives." },
        { id: "quantum-d02-q7", type: "Analysis", challenge: "Telemetry review.", text: "When investigating suspected HNDL against a contractor, what evidence is most relevant?", options: ["Large-volume captures of RSA/ECC-encrypted sessions exfiltrated for storage","Increased disk temperature","More frequent logins","A new desktop wallpaper"], correctIndex: 0, explanation: "Bulk exfiltration of encrypted sessions to attacker storage is the HNDL signature." },
        { id: "quantum-d02-q8", type: "Strategy", challenge: "Prioritizing response.", text: "Why can't an organization 'wait and see' on HNDL until quantum computers mature?", options: ["The data is harvested today; waiting guarantees future exposure of already-stolen ciphertext","Because RSA is illegal","Because TLS will be banned","There is no urgency"], correctIndex: 0, explanation: "Delay doesn't reduce risk for data already harvested — only forward-secret PQC migration does." },
      ],
    },
    ctf: {
      scenario: "You're investigating an HNDL threat against a defense contractor. Analyze captured network telemetry to identify RSA-encrypted data harvested, assess the HNDL risk window, and recommend defenses.",
      hint: "Read the threat intel brief, analyze capture telemetry, then model the HNDL risk window.",
      hints: [
        "Start with the threat intel brief. Run: cat hndl-brief.txt",
        "Analyze captured traffic telemetry. Run: hndl-analyze capture-log.pcap",
        "Extract the long-secrecy flows worth harvesting from the capture. Run: hndl-extract capture-log.pcap",
        "Model the HNDL risk window. Run: hndl-risk-model --horizon 2035",
        "Run 'assemble' to submit the HNDL assessment",
      ],
      fragments: [
        { trigger: "/hndl-brief.txt", value: "FLAG{HNDL_HAR", label: "HNDL Brief — Threat Intelligence Summary" },
        { trigger: "hndl-analyze", value: "VEST_", label: "Capture Analysis — RSA Traffic Identified" },
        { trigger: "hndl-extract", value: "NOW_", label: "Long-Secrecy Flows Extracted — Harvest Targets" },
        { trigger: "hndl-risk-model", value: "DECRYPT_LATER}", label: "Risk Model — Secrecy Horizon Assessment" },
      ],
      files: {
        "/hndl-brief.txt": [
          "HNDL THREAT ASSESSMENT — DEFENSE CONTRACTOR",
          "Intelligence: Foreign state actor collection of contractor TLS traffic.",
          "Duration: Estimated 2020–present (4+ years of ciphertext stored).",
          "Algorithms: RSA-2048 (TLS), ECDH-P256 (VPN), RSA-2048 (email S/MIME).",
          "Data sensitivity: Program acquisition data, classified sub-contracts.",
          "Secrecy horizon required: 2040+ (program lifecycle).",
          "Sequence: hndl-analyze → hndl-risk-model → assemble",
        ].join("\n"),
        "/capture-log.pcap": "Binary TLS capture log — 2.3TB over 4 years. Use hndl-analyze to process.",
      },
      dirs: {
        "/": [
          { name: "hndl-brief.txt", isDir: false },
          { name: "capture-log.pcap", isDir: false },
        ],
      },
      extraCommands: {
        "hndl-analyze": (_args: string[]) => ({
          lines: [
            "Analyzing capture-log.pcap — 2.3TB TLS traffic (2020-2024)...",
            "TLS cipher suites in captured traffic:",
            "  RSA key exchange: 68% of sessions [V1 — quantum-vulnerable]",
            "  ECDHE: 31% of sessions [V1 — quantum-vulnerable]",
            "  TLS 1.3 (ECDHE only): 1% of sessions [V1 — still vulnerable]",
            "",
            "Sensitive data endpoints in session metadata:",
            "  acquisition-portal.gov (program contracts)",
            "  classified-mail.contractor.mil (S/MIME encrypted)",
            "  vpn.hq.contractor.mil (RSA-2048 IKE)",
            "Estimated adversary storage cost: ~$46,000 (2.3TB compressed)",
            "Fragment collected.",
            "",
            ">> LEARN: Even TLS 1.3 with ECDHE is quantum-vulnerable to HNDL.",
            "   An adversary stores the ECDHE ephemeral public keys and ciphertext.",
            "   A CRQC computes the private key via discrete log and decrypts all sessions.",
            "   Fix: deploy ML-KEM-768 hybrid — ECDHE alone is insufficient.",
          ],
        }),
        "hndl-extract": (_args: string[]) => ({
          lines: [
            "Extracting harvest-worthy flows from capture-log.pcap...",
            "  filtering 2.3TB by key-exchange: RSA/ECDHE TLS sessions",
            "  ranking by payload secrecy lifetime:",
            "    health records (HIPAA, 50-yr secrecy): 1.1TB → PRIME target",
            "    M&A / legal (10-yr): 0.4TB → high value",
            "    session cookies (minutes): discard — no harvest value",
            "Harvest set isolated: long-secrecy ciphertext worth storing to Q-Day.",
            "Next: hndl-risk-model --horizon 2035",
            "",
            ">> LEARN: HNDL adversaries are selective, not greedy",
            "   Storage isn't free — attackers harvest only ciphertext whose secrecy",
            "   outlives the CRQC timeline, so long-lived data is the real target.",
            "   That selection is exactly what defenders must model and prioritize.",
          ],
        }),
        "hndl-risk-model": (_args: string[]) => ({
          lines: [
            "Modeling HNDL risk for secrecy horizon: 2040...",
            "Data captured: 2020–2024 (RSA-2048 / ECDH-P256 encrypted)",
            "CRQC availability estimate: 2030–2035 (optimistic)",
            "Secrecy horizon: 2040 (program lifecycle)",
            "",
            "Risk assessment: CRITICAL",
            "  HNDL exposure window: 5–10 years before horizon",
            "  Probability adversary has CRQC by 2035: 40–60% (IC estimate)",
            "  Captured data will likely be decryptable before end of secrecy period",
            "",
            "Immediate actions:",
            "  1. Deploy X25519+ML-KEM-768 hybrid TLS for all contractor comms (30 days)",
            "  2. Replace IKE RSA with ML-KEM-768 + ML-DSA for VPN (60 days)",
            "  3. Re-encrypt archived classified data with AES-256 (quantum-safe)",
            "Fragment collected.",
          ],
        }),
      },
    },
  },

  // ─── quantum-d03: NIST PQC Standards ─────────────────────────────────────────
  {
    epochId: "quantum-4",
    wonder: { name: "NIST Computer Security Division", location: "Gaithersburg, Maryland, USA", era: "2024 CE", emoji: "📐" },
    id: "quantum-d03",
    order: 3,
    title: "The New Crypto Standards",
    subtitle: "FIPS 203, 204, 205 — NIST Post-Quantum Algorithms",
    category: "cybersecurity",
    xp: 160,
    badge: { id: "badge-qrm-nist-pqc", name: "NIST Standards Architect", emoji: "📐" },
    challengeType: "ctf",
    info: {
      tagline: "In August 2024, NIST finalized the world's first post-quantum cryptographic standards — three algorithms that replace RSA, ECC, and Diffie-Hellman.",
      year: 2024,
      overview: [
        "For a migration program, August 13, 2024 is the date that turned 'someday' into 'now,' because that's when NIST published the three Federal Information Processing Standards that define the world's post-quantum algorithms: FIPS 203 (ML-KEM, for key encapsulation), FIPS 204 (ML-DSA, for digital signatures), and FIPS 205 (SLH-DSA, hash-based signatures). They are the survivors of a six-year open competition that began with 69 candidates and narrowed, through relentless public cryptanalysis, to CRYSTALS-Kyber, CRYSTALS-Dilithium, SPHINCS+, and FALCON. The significance for a risk owner is procurement-grade certainty: the targets are no longer moving. You are migrating *to* named, finalized standards, not betting on a draft.",
        "What makes them immediately actionable is that each one maps cleanly onto a classical primitive you already know you have from the CBOM. ML-KEM (from CRYSTALS-Kyber) is the drop-in for RSA and ECDH key exchange — TLS, SSH, VPNs, anywhere two parties agree on a key. ML-DSA (from CRYSTALS-Dilithium) replaces RSA and ECDSA signatures — code signing, certificates, JWTs, document signing. And SLH-DSA (from SPHINCS+) stands behind them as a hash-based alternative whose security rests on entirely different mathematics, there for algorithm diversity. That one-to-one replacement map is what lets you translate a CBOM line ('ECDH here, RSA-2048 there') directly into a migration target without re-architecting the function.",
        "The practical guidance for most organizations is refreshingly simple: make FIPS 203 and 204 your primary algorithms. They are what CISA, the NSA, and international bodies like ETSI and ISO converge on endorsing, and they cover the overwhelming majority of real cryptographic uses. Keep SLH-DSA in your back pocket as insurance — if some future cryptanalytic breakthrough were to weaken the lattice family that 203 and 204 both belong to, the hash-based scheme would be unaffected, giving you a pre-vetted fallback. All three rest on problems believed hard for classical and quantum computers alike, which is the whole point: you are not trading a doomed assumption for a fashionable one, you're trading it for standardized math the world's cryptanalysts spent six years failing to break.",
      ],
      technical: {
        title: "Algorithm Selection Guide — When to Use Which Standard",
        body: [
          "ML-KEM-768 is the recommended KEM, but the size jump matters:\n- ML-KEM-768 (FIPS 203, level 3, ~192-bit) has 1088-byte ciphertexts and 1184-byte public keys — far larger than RSA-2048's 256 bytes, so TLS and app protocols need bigger handshakes; ML-KEM-1024 (level 5) covers top-secret.\n- ML-DSA-65 (FIPS 204) produces 3309-byte signatures vs RSA-2048's 256, substantially growing X.509 certificate sizes.",
          "A migration priority matrix orders the rollout:\n- Internet-facing TLS — deploy ML-KEM-768 hybrid with X25519 immediately; code-signing pipelines — ML-DSA-65 within 12 months.\n- Certificate authority — migrate the root CA to ML-DSA-87 (level 5) as the top PKI change; VPN/IPsec — replace IKEv2 ECDH with ML-KEM-768. Hybrid mode is recommended during transition.",
        ],
        codeExample: {
          label: "Python — ML-KEM-768 key encapsulation using liboqs",
          code: `# pip install liboqs-python
import oqs

# Key Encapsulation (FIPS 203 — ML-KEM-768)
kem = oqs.KeyEncapsulation("ML-KEM-768")

# Server: generate keypair
public_key = kem.generate_keypair()
print(f"Public key size: {len(public_key)} bytes")  # 1184 bytes

# Client: encapsulate — produces ciphertext + shared secret
client_kem = oqs.KeyEncapsulation("ML-KEM-768")
ciphertext, shared_secret_client = client_kem.encap_secret(public_key)
print(f"Ciphertext size: {len(ciphertext)} bytes")  # 1088 bytes

# Server: decapsulate — recovers shared secret from ciphertext
shared_secret_server = kem.decap_secret(ciphertext)

assert shared_secret_client == shared_secret_server
print("ML-KEM-768 key agreement successful — quantum-safe!")
kem.free(); client_kem.free()`,
        },
      },
      incident: {
        title: "SIKE Broken in 62 Minutes — Why Algorithm Diversity Matters",
        when: "2022",
        where: "NIST PQC competition — SIKE finalist",
        impact: "SIKE completely broken by classical attack; reinforced need for multiple algorithm families",
        body: [
          "NIST's PQC project ran from a 2016 call for submissions through four rounds of analysis:\n- 69 candidates narrowed to CRYSTALS-Kyber, CRYSTALS-Dilithium, FALCON, and SPHINCS+.\n- But in 2022, SIKE (Supersingular Isogeny Key Encapsulation) was completely broken — a single researcher recovered SIKE private keys in 62 minutes on a laptop.",
          "The SIKE break is why algorithm diversity matters:\n- Deploying a single PQC algorithm risks a classical or quantum attack breaking it.\n- NIST's response was to standardize from two distinct families — lattices (ML-KEM, ML-DSA) and hash functions (SLH-DSA) — so a break in one doesn't compromise all post-quantum cryptography.",
        ],
      },
      diagram: {
        nodes: [
          { label: "ML-KEM (FIPS 203)", sub: "Key encapsulation — replaces RSA/ECDH", type: "result" },
          { label: "ML-DSA (FIPS 204)", sub: "Digital signatures — replaces RSA/ECDSA", type: "result" },
          { label: "SLH-DSA (FIPS 205)", sub: "Hash-based signatures — algorithm diversity", type: "result" },
          { label: "SIKE Broken", sub: "62-minute classical attack — diversity validated", type: "attacker" },
        ],
      },
      timeline: [
        { year: 2016, event: "NIST launches Post-Quantum Cryptography Standardization — 69 submissions" },
        { year: 2022, event: "SIKE finalist broken in 62 minutes on a laptop — algorithm diversity lesson", highlight: true },
        { year: 2022, event: "NIST announces CRYSTALS-Kyber, Dilithium, FALCON, SPHINCS+ as selections" },
        { year: 2024, event: "FIPS 203, 204, 205 published — world's first PQC standards" },
        { year: 2025, event: "FIPS 206 (FN-DSA/FALCON) expected finalization" },
      ],
      keyTakeaways: [
        "FIPS 203 (ML-KEM) = use for key exchange; FIPS 204 (ML-DSA) = use for signatures",
        "Hybrid mode (X25519 + ML-KEM-768) is recommended during transition — deploy now",
        "SIKE was broken classically — algorithm diversity (lattices + hash functions) is essential",
        "Message and key sizes are much larger than RSA — protocols and MTU configurations need updating",
      ],
      references: [
        { title: "NIST FIPS 203 — ML-KEM Standard", url: "https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.203.pdf" },
        { title: "NIST FIPS 204 — ML-DSA Standard", url: "https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.204.pdf" },
      ],
    },
    quiz: {
      questions: [
        { id: "quantum-d03-q1", type: "Core Idea", challenge: "Aug 2024 standards.", text: "What did NIST finalize in August 2024?", options: ["The first post-quantum cryptographic standards: FIPS 203, 204, and 205","QKD over satellite","The end of AES","A new RSA key size"], correctIndex: 0, explanation: "NIST published FIPS 203 (ML-KEM), 204 (ML-DSA), and 205 (SLH-DSA) — the first PQC standards." },
        { id: "quantum-d03-q2", type: "Standards", challenge: "FIPS 203.", text: "What does FIPS 203 (ML-KEM) replace?", options: ["Quantum-vulnerable key establishment like RSA key transport and Diffie-Hellman","AES-256 bulk encryption","SHA-256 hashing","TLS itself"], correctIndex: 0, explanation: "ML-KEM is a key-encapsulation mechanism replacing classical key exchange/transport." },
        { id: "quantum-d03-q3", type: "Standards", challenge: "Signature standards.", text: "Which FIPS standards provide post-quantum digital signatures?", options: ["FIPS 204 (ML-DSA) and FIPS 205 (SLH-DSA)","FIPS 203 only","FIPS 140-3 only","FIPS 197 (AES)"], correctIndex: 0, explanation: "ML-DSA (204) and SLH-DSA (205) are the standardized PQC signature algorithms, replacing RSA/ECDSA signatures." },
        { id: "quantum-d03-q4", type: "Real World", challenge: "SIKE break.", text: "What does the SIKE break (solved in ~62 minutes on a single core) teach about PQC?", options: ["Algorithm diversity matters — even a NIST finalist can fall, so don't bet on one scheme","PQC is hopeless","SIKE is the safest choice","All lattice schemes are broken"], correctIndex: 0, explanation: "SIKE's collapse underscores why agility and a diverse algorithm portfolio are essential." },
        { id: "quantum-d03-q5", type: "Selection", challenge: "Choosing a standard.", text: "For general-purpose post-quantum key establishment in TLS, which standard is selected?", options: ["FIPS 203 ML-KEM (typically ML-KEM-768)","FIPS 205 SLH-DSA","RSA-4096","QKD"], correctIndex: 0, explanation: "ML-KEM is the KEM standard used (often hybridized) for quantum-safe TLS key exchange." },
        { id: "quantum-d03-q6", type: "Selection", challenge: "When SLH-DSA.", text: "Why might an organization choose SLH-DSA (FIPS 205) despite larger signatures?", options: ["It's hash-based with conservative, well-understood security assumptions — useful where lattice risk is a concern","It's the smallest signature","It's faster than AES","It needs no keys"], correctIndex: 0, explanation: "SLH-DSA's hash-based design offers diversity and conservative assurance as a hedge against lattice surprises." },
        { id: "quantum-d03-q7", type: "Implementation", challenge: "Deploying ML-KEM.", text: "When standing up the first PQC TLS server, what validates FIPS 203 compliance?", options: ["Confirming the ML-KEM-768 handshake completes and uses a validated implementation","Checking the favicon","Counting open ports","Disabling certificates"], correctIndex: 0, explanation: "A successful ML-KEM-768 handshake via a validated module demonstrates FIPS 203 deployment." },
        { id: "quantum-d03-q8", type: "Strategy", challenge: "Portfolio thinking.", text: "Given the SIKE lesson, how should standards be deployed?", options: ["With crypto agility so a broken algorithm can be swapped without redesign","Hardcode one algorithm forever","Use only experimental schemes","Avoid all NIST standards"], correctIndex: 0, explanation: "Agility lets you replace an algorithm (as SIKE would have required) without re-architecting systems." },
      ],
    },
    ctf: {
      scenario: "You're deploying the first PQC-enabled TLS server for a federal agency. Configure ML-KEM-768 key encapsulation, test the handshake, and validate FIPS 203 compliance.",
      hint: "Generate ML-KEM keys, configure TLS, and verify the algorithm negotiation.",
      hints: [
        "Read the deployment brief. Run: cat deploy-brief.txt",
        "Generate an ML-KEM-768 keypair. Run: pqc-keygen --alg ML-KEM-768",
        "Install the keypair and configure the hybrid TLS listener. Run: pqc-tls-config --port 4433",
        "Test the PQC TLS handshake. Run: pqc-tls-test --connect localhost:4433",
        "Run 'assemble' to certify deployment",
      ],
      fragments: [
        { trigger: "/deploy-brief.txt", value: "FLAG{FIPS203_", label: "Deploy Brief — PQC TLS Deployment Scope" },
        { trigger: "pqc-keygen", value: "ML_KEM_", label: "ML-KEM-768 Keypair Generated" },
        { trigger: "pqc-tls-config", value: "768_", label: "Listener Configured — Hybrid Suite Enabled" },
        { trigger: "pqc-tls-test", value: "QUANTUM_SAFE}", label: "PQC TLS Handshake Verified" },
      ],
      files: {
        "/deploy-brief.txt": [
          "PQC TLS DEPLOYMENT — FEDERAL AGENCY",
          "Standard: NIST FIPS 203 (ML-KEM-768)",
          "Mode: Hybrid X25519+ML-KEM-768 (backward compatible)",
          "Goal: Protect all agency HTTPS traffic from HNDL attacks.",
          "Sequence: pqc-keygen → pqc-tls-test → assemble",
        ].join("\n"),
      },
      dirs: { "/": [{ name: "deploy-brief.txt", isDir: false }] },
      extraCommands: {
        "pqc-keygen": (_args: string[]) => ({
          lines: [
            "Generating ML-KEM-768 keypair (NIST FIPS 203)...",
            "  Public key: 1184 bytes (vs RSA-2048: 256 bytes)",
            "  Private key: 2400 bytes",
            "  Security level: 3 (equivalent to AES-192)",
            "  Based on: Module Learning With Errors (MLWE) problem",
            "  Quantum attack resistance: Grover's gives sqrt speedup → still requires 2^96 ops",
            "Keypair saved. Configuring hybrid X25519+ML-KEM-768...",
            "  IANA code point: 0x11EC (x25519_mlkem768)",
            "  ClientHello key_share extension size: 1216 bytes (was 32 bytes for X25519 alone)",
            "Fragment collected.",
          ],
        }),
        "pqc-tls-config": (_args: string[]) => ({
          lines: [
            "Configuring the TLS 1.3 listener on :4433 with the new keypair...",
            "  installing ML-DSA-65 server certificate + ML-KEM-768 key share",
            "  enabling groups: X25519MLKEM768 (priority 1), X25519 (fallback)",
            "  loading the OQS provider into the OpenSSL config",
            "  reloading the service — listener up on :4433",
            "Hybrid TLS endpoint live; ready for a client handshake test.",
            "Next: pqc-tls-test --connect localhost:4433",
            "",
            ">> LEARN: Keygen is not deployment — wiring the listener is",
            "   The keypair only matters once the server advertises the hybrid group",
            "   and loads the PQC provider; misconfig here silently falls back to classical.",
            "   Always verify the negotiated group, not just that keys exist.",
          ],
        }),
        "pqc-tls-test": (_args: string[]) => ({
          lines: [
            "Testing PQC TLS 1.3 handshake to localhost:4433...",
            "  Protocol: TLSv1.3",
            "  Cipher: TLS_AES_256_GCM_SHA384",
            "  Server Temp Key: X25519MLKEM768, 1216 bits",
            "  Key exchange: HYBRID (X25519 classical + ML-KEM-768 post-quantum)",
            "",
            "Quantum resistance assessment:",
            "  ✅ Key exchange: QUANTUM-SAFE (ML-KEM-768 resists Shor's)",
            "  ✅ Symmetric encryption: QUANTUM-SAFE (AES-256 resists Grover's)",
            "  ⚠️  Certificate signature: RSA-2048 (migrate to ML-DSA for full PQC)",
            "",
            "HNDL protection: ACTIVE — stored ciphertext cannot be decrypted by CRQC.",
            "Deployment certified. Fragment collected.",
          ],
        }),
      },
    },
  },

  // ─── quantum-d04: CNSA 2.0 ───────────────────────────────────────────────────
  {
    epochId: "quantum-4",
    wonder: { name: "NSA Information Assurance Directorate", location: "Fort Meade, Maryland, USA", era: "2022 CE", emoji: "🏛️" },
    id: "quantum-d04",
    order: 4,
    title: "CNSA 2.0 — National Security Mandate",
    subtitle: "NSA's Commercial National Security Algorithm Suite 2.0",
    category: "cybersecurity",
    xp: 160,
    badge: { id: "badge-qrm-cnsa2", name: "CNSA 2.0 Analyst", emoji: "🏛️" },
    challengeType: "ctf",
    info: {
      tagline: "CNSA 2.0 is NSA's mandatory algorithm suite for National Security Systems — the world's most stringent quantum-safe cryptography mandate.",
      year: 2022,
      overview: [
        "FIPS standards *recommend*; the NSA's CNSA 2.0 *commands* — and the difference matters enormously for anyone touching government work. Published in September 2022, the Commercial National Security Algorithm Suite 2.0 replaced CNSA 1.0's blessing of RSA and ECC and laid down specific post-quantum algorithms as a mandate for all National Security Systems: the classified, SCI, and nuclear-command-and-control infrastructure where a cryptographic failure is a national-security event. Where a typical enterprise weighs NIST guidance against cost, NSS operators have no such discretion — CNSA 2.0 sets the algorithms and the deadlines, and compliance is obligatory. For vendors, this is also the leading edge of demand: if you sell into the NSS market, CNSA 2.0 is your product roadmap whether you like it or not.",
        "CNSA 2.0 is notable for how *specific* it is — it names exact algorithms and parameter sets, leaving no room for interpretation. Key agreement must use ML-KEM-1024 (the highest, level-5 parameter set, not the level-3 default an ordinary enterprise might pick — national security buys the maximum margin). Signatures use ML-DSA-87. Firmware and software-update signing must use the stateful hash-based schemes LMS or XMSS, with that firmware requirement landing earliest. Symmetric crypto moves to AES-256 and hashing to SHA-384/512 — and critically, the suite drops RSA, ECC, and pre-SHA-256 hashes entirely. There is no 'continue using RSA for now' clause. The legacy algorithms are simply gone from the approved list.",
        "And the timelines are deliberately aggressive, designed to force the supply chain to move. Vendors of NSS products must support CNSA 2.0 algorithms in new products, and all NSS must use them exclusively by 2033 — but the headline pressure is the early firmware deadline: LMS/XMSS signing for software and firmware updates is required first, meaning every router, switch, HSM, and server firmware pipeline serving national security had to be upgraded within roughly two years of publication. That firmware-first ordering is itself a lesson in risk sequencing — update-signing keys are how you'll deliver every *future* fix, so they have to be quantum-safe before anything else, or you lose the very channel you'd use to remediate later. CNSA 2.0 is the most concrete migration mandate in existence, and even non-government risk programs study it as the template for what a serious, dated, no-exceptions plan looks like.",
      ],
      technical: {
        title: "CNSA 2.0 Algorithm Requirements and LMS Statefulness",
        body: [
          "CNSA 2.0 specifies one algorithm per role at the highest level:\n- Key establishment ML-KEM-1024 (1568-byte ciphertext and public key); signatures ML-DSA-87 (4627-byte signature).\n- Firmware/software signing LMS or XMSS (stateful hash-based, state tracked in HSM); symmetric AES-256-GCM/CCM only (AES-128 deprecated); hashing SHA-384 or SHA-512 only.",
          "The LMS/XMSS firmware requirement is notable because these schemes are stateful:\n- They use one-time signature keys that must never be reused — lose the state (power failure, backup restore) or reuse it (a bug) and the guarantee fails.\n- CNSA 2.0 requires LMS state management in HSMs with atomic state updates, a departure from current RSA/ECDSA firmware signing with no statefulness.",
        ],
        codeExample: {
          label: "LMS stateful firmware signing — state must be atomically stored in HSM",
          code: `# CNSA 2.0 requires LMS/XMSS for firmware update signatures
# WARNING: Key state MUST be atomically stored — reuse breaks security
from lms import LMS, LMS_SHA256_M32_H10, LMOTS_SHA256_N32_W8

lms_key = LMS(LMS_SHA256_M32_H10, LMOTS_SHA256_N32_W8)
pub_key, priv_key_state = lms_key.generate_key()

# Sign firmware image — each signing consumes one OTS key
with open("firmware_v2.bin", "rb") as f:
    firmware_bytes = f.read()

signature, updated_state = lms_key.sign(firmware_bytes, priv_key_state)

# CRITICAL: updated_state MUST be written to HSM atomically before returning
# If power fails between sign() and state save → key reuse vulnerability
save_to_hsm_atomic(updated_state)  # atomic write required

print(f"LMS signature size: {len(signature)} bytes")
print(f"Remaining OTS keys: {lms_key.remaining_keys(updated_state)}")
# LMS_H10 provides 1024 one-time keys — sufficient for firmware lifecycle`,
        },
      },
      incident: {
        title: "NSA Abandons ECC After 15 Years — CNSA 1.0 Sunset",
        when: "2022",
        where: "NSA, Defense industrial base, National Security Systems",
        impact: "Every NSS product — routers, HSMs, VPNs, classified comms — requires algorithm redesign by 2025",
        body: [
          "CNSA 1.0 (2015) had endorsed Suite B — ECDH and ECDSA — the very algorithms NSA championed for 15 years and pushed onto allies and contractors:\n- When CNSA 2.0 deprecated all ECC in 2022, it was the NSA admitting its own prior standards were now inadequate, before Q-Day.\n- Every prime contractor (Lockheed, Raytheon, Boeing, Northrop, General Dynamics) had built classified systems on CNSA 1.0 ECC.",
          "The impact on the defense industrial base was enormous:\n- HSM vendors (Thales, Entrust, Utimaco) had to ship firmware supporting ML-KEM and LMS; DoD VPN vendors (Palo Alto, Cisco, Juniper) had to redesign classified-variant IKEv2.\n- The 2025 firmware deadline forced an emergency procurement cycle — primes couldn't deliver compliant systems until their chip fabs, firmware RTOS, and HSM suppliers all updated first.",
        ],
      },
      diagram: {
        nodes: [
          { label: "CNSA 1.0 (2015)", sub: "RSA-3072, ECDH-384, ECDSA-384 endorsed", type: "victim" },
          { label: "CNSA 2.0 (2022)", sub: "All RSA/ECC deprecated — quantum threat", type: "attacker" },
          { label: "ML-KEM-1024", sub: "NSS key agreement mandate", type: "result" },
          { label: "LMS/XMSS 2025", sub: "Firmware signing mandate — stateful HSM", type: "system" },
        ],
      },
      timeline: [
        { year: 2015, event: "CNSA 1.0 endorses ECC Suite B — 15 years of adoption begins" },
        { year: 2022, event: "CNSA 2.0 published — all ECC deprecated, PQC mandated", highlight: true },
        { year: 2025, event: "CNSA 2.0 deadline: new NSS products must support ML-KEM + LMS" },
        { year: 2030, event: "CNSA 2.0 deadline: priority NSS systems exclusively use CNSA 2.0" },
        { year: 2033, event: "CNSA 2.0 deadline: all NSS must exclusively use CNSA 2.0 algorithms" },
      ],
      keyTakeaways: [
        "CNSA 2.0 mandates ML-KEM-1024 and ML-DSA-87 — level 5, stricter than NIST FIPS minimums",
        "LMS/XMSS for firmware signing is stateful — requires HSM atomic state management to prevent reuse",
        "NSS vendors must support CNSA 2.0 in new products by 2025 — emergency redesign cycle active",
        "CNSA 2.0 deprecating ECC after 15 years shows cryptographic standards require periodic reassessment",
      ],
      references: [
        { title: "NSA CNSA 2.0 — Commercial National Security Algorithm Suite", url: "https://media.defense.gov/2022/Sep/07/2003071834/-1/-1/0/CSA_CNSA_2.0_ALGORITHMS_.PDF" },
        { title: "NSA LMS/XMSS Guidance", url: "https://media.defense.gov/2022/Sep/07/2003071836/-1/-1/0/CSI_CNSA_2.0_FAQ_.PDF" },
      ],
    },
    quiz: {
      questions: [
        { id: "quantum-d04-q1", type: "Core Idea", challenge: "CNSA 2.0 scope.", text: "What is CNSA 2.0?", options: ["NSA's mandatory quantum-safe algorithm suite for National Security Systems","A consumer VPN app","A NIST competition","A QKD satellite"], correctIndex: 0, explanation: "CNSA 2.0 is the NSA's stringent algorithm mandate governing National Security Systems." },
        { id: "quantum-d04-q2", type: "Real World", challenge: "ECC sunset.", text: "What did the NSA do that signaled the urgency behind CNSA 2.0?", options: ["Abandoned ECC after ~15 years, sunsetting CNSA 1.0 in favor of post-quantum algorithms","Adopted RSA-512","Endorsed SIKE","Banned AES"], correctIndex: 0, explanation: "NSA's move off ECC after 15 years marked a decisive pivot to quantum-safe cryptography." },
        { id: "quantum-d04-q3", type: "Implementation", challenge: "LMS statefulness.", text: "What operational caution applies to the stateful hash-based signatures (e.g., LMS) allowed under CNSA 2.0?", options: ["State must never be reused — reusing a one-time key index catastrophically breaks security","They are stateless and carefree","They require QKD","They use RSA internally"], correctIndex: 0, explanation: "Stateful schemes like LMS demand strict state management; reusing an index destroys the signature's security." },
        { id: "quantum-d04-q4", type: "Compliance", challenge: "Auditing a vendor.", text: "When auditing an NSS vendor for CNSA 2.0 compliance, what do you validate?", options: ["Correct approved algorithms, key sizes, and adherence to the migration timeline","Their marketing slogans","The color of their logo","Their office location"], correctIndex: 0, explanation: "Compliance review checks that approved algorithms and parameters are implemented on schedule." },
        { id: "quantum-d04-q5", type: "Concept", challenge: "Why most stringent.", text: "Why is CNSA 2.0 considered the world's most stringent quantum-safe mandate?", options: ["It is mandatory for the highest-assurance national security systems with firm timelines","It is optional guidance","It permits any algorithm","It applies only to websites"], correctIndex: 0, explanation: "CNSA 2.0 imposes binding requirements on systems with the highest security stakes." },
        { id: "quantum-d04-q6", type: "Implementation", challenge: "State management.", text: "What infrastructure control prevents LMS index reuse in practice?", options: ["Hardware/secure state tracking that atomically advances and persists the key index","Random selection of indices","Disabling logging","Using RSA instead"], correctIndex: 0, explanation: "Reliable, atomic state persistence ensures each one-time key index is used exactly once." },
        { id: "quantum-d04-q7", type: "Compliance", challenge: "Timeline adherence.", text: "Beyond algorithm choice, what else does CNSA 2.0 compliance require?", options: ["Meeting the mandated migration milestones and deadlines","Only a one-time self-assessment","Nothing further","Using QKD exclusively"], correctIndex: 0, explanation: "CNSA 2.0 specifies a phased timeline; staying on schedule is part of compliance." },
        { id: "quantum-d04-q8", type: "Strategy", challenge: "NSS vs civilian.", text: "How does the NSS path under CNSA 2.0 differ from civilian federal PQC adoption?", options: ["NSS follow NSA's mandatory suite and Type 1 process, distinct from civilian CMVP-driven adoption","They are identical","NSS skip all standards","Civilian systems are stricter"], correctIndex: 0, explanation: "NSS operate under NSA's CNSA/Type 1 regime, separate from the civilian CMVP track." },
      ],
    },
    ctf: {
      scenario: "You're auditing an NSS vendor's CNSA 2.0 compliance. Validate their algorithm implementations and timeline adherence.",
      hint: "Read the audit scope, check algorithm compliance, then assess timeline adherence.",
      hints: [
        "Read the audit scope. Run: cat audit-scope.txt",
        "Check vendor algorithm implementations. Run: cnsa2-audit --vendor nss-vendor-a",
        "Map each finding to the required CNSA 2.0 algorithm set. Run: cnsa2-gap",
        "Assess timeline compliance. Run: cnsa2-timeline-check --deadline 2025",
        "Run 'assemble' to submit the compliance report",
      ],
      fragments: [
        { trigger: "/audit-scope.txt", value: "FLAG{CNSA2_", label: "Audit Scope — NSS Vendor Compliance Check" },
        { trigger: "cnsa2-audit", value: "MANDATE_", label: "Algorithm Audit — Vendor Implementations Found" },
        { trigger: "cnsa2-gap", value: "NSS_", label: "Gap Analysis — Mapped to CNSA 2.0 Algorithm Set" },
        { trigger: "cnsa2-timeline-check", value: "COMPLIANT}", label: "Timeline Assessment — 2025 Deadline Status" },
      ],
      files: {
        "/audit-scope.txt": [
          "CNSA 2.0 COMPLIANCE AUDIT — NSS VENDOR A",
          "Scope: VPN appliance, HSM firmware, classified TLS endpoints.",
          "Deadline: 2025 new product compliance (NSA mandate).",
          "Sequence: cnsa2-audit → cnsa2-timeline-check → assemble",
        ].join("\n"),
      },
      dirs: { "/": [{ name: "audit-scope.txt", isDir: false }] },
      extraCommands: {
        "cnsa2-audit": (_args: string[]) => ({
          lines: [
            "Auditing NSS Vendor A for CNSA 2.0 compliance...",
            "",
            "VPN appliance (IKEv2):",
            "  Current: ECDH-384 + AES-256 [NON-COMPLIANT — ECC deprecated by CNSA 2.0]",
            "  Required: ML-KEM-1024 + AES-256-GCM",
            "  Status: Engineering in progress, ETA Q2 2025",
            "",
            "HSM firmware signing:",
            "  Current: ECDSA-384 [NON-COMPLIANT — must use LMS or XMSS by 2025]",
            "  Required: LMS-SHA256-H10 with HSM state management",
            "  Status: Design complete, implementation 60% — at risk for 2025 deadline",
            "",
            "Classified TLS endpoints:",
            "  Current: ML-KEM-1024 + ML-DSA-87 [COMPLIANT]",
            "Overall: 2/3 components non-compliant. Fragment collected.",
          ],
        }),
        "cnsa2-gap": (_args: string[]) => ({
          lines: [
            "Mapping audit findings to the CNSA 2.0 required algorithm set...",
            "  CNSA 2.0 requires: ML-KEM-1024, ML-DSA-87, SHA-384/512, AES-256",
            "  vendor uses ML-KEM-768 → BELOW required level 5 (need 1024)",
            "  vendor signing still RSA-3072 → NON-COMPLIANT (need ML-DSA-87)",
            "  symmetric AES-256 + SHA-384 → COMPLIANT",
            "Gap list: 2 of 4 primitives miss the CNSA 2.0 bar.",
            "Next: cnsa2-timeline-check --deadline 2025",
            "",
            ">> LEARN: CNSA 2.0 mandates specific parameter levels, not just 'PQC'",
            "   NSS requires the level-5 sets (ML-KEM-1024 / ML-DSA-87) — deploying",
            "   ML-KEM-768 is real PQC but still fails the mandate.",
            "   Map findings to the exact required set before judging compliance.",
          ],
        }),
        "cnsa2-timeline-check": (_args: string[]) => ({
          lines: [
            "Assessing CNSA 2.0 2025 deadline compliance...",
            "Days to deadline: 218 (FY2025 end)",
            "VPN appliance: Engineering in progress — 85% probability on-time",
            "HSM firmware: Implementation 60% — 45% probability on-time",
            "",
            "Risk: HSM firmware LMS state management requires HSM vendor cooperation.",
            "Vendor dependency: Thales HSM firmware must ship LMS support by Q1 2025.",
            "Current Thales commitment: Beta firmware available Q1 2025.",
            "",
            "Recommendation: Escalate HSM timeline to program office.",
            "Contingency: Interim RSA-PSS signing with documented exception and",
            "             written NSA/CNSS waiver required if deadline missed.",
            "Fragment collected.",
          ],
        }),
      },
    },
  },

  // ─── quantum-d05: Migration Roadmap ──────────────────────────────────────────
  {
    epochId: "quantum-4",
    wonder: { name: "CISA Cybersecurity Division HQ", location: "Washington, D.C., USA", era: "2024 CE", emoji: "🗺️" },
    id: "quantum-d05",
    order: 5,
    title: "The Migration Roadmap",
    subtitle: "Phased PQC Transition — Prioritize, Phase, Execute",
    category: "cybersecurity",
    xp: 160,
    badge: { id: "badge-qrm-migration", name: "PQC Migration Planner", emoji: "🗺️" },
    challengeType: "ctf",
    info: {
      tagline: "Post-quantum migration is a 5–10 year program, not a patch cycle. CISA's roadmap provides the framework.",
      year: 2023,
      overview: [
        "A CBOM tells you what you have; a roadmap tells you the order to fix it in — and CISA's Post-Quantum Cybersecurity Roadmap (November 2023) supplies a five-phase backbone that large organizations can actually run. Inventory (complete the CBOM), Prioritize (rank systems by data sensitivity and exposure), Plan (build system-specific schedules), Implement (deploy hybrid PQC), and Validate (verify the implementations and finally remove the classical fallbacks). Each phase carries measurable milestones, and crucially they're designed to overlap and run in parallel across a big enterprise rather than as a rigid waterfall — while you're still inventorying the long tail, you can already be implementing on the systems you've fully scoped.",
        "The heart of the roadmap is risk-based prioritization, which is just the HNDL logic from earlier made operational. Long-secrecy-horizon data — classified, healthcare, legal — migrates *first*, because it's the data already exposed to Harvest Now Decrypt Later and every day of delay extends the window. Internet-facing RSA/ECC key exchange comes next, since anything reachable from the open internet is exposed to bulk passive collection. Internal systems and legacy or air-gapped environments migrate later, where the exposure is lower and the engineering is harder. Threaded through all of it, CISA hammers one architectural demand: crypto agility — build (or retrofit) systems so the algorithm can be swapped without a full redesign, because you will be doing this again.",
        "What separates a roadmap that finishes from one that stalls is anticipating the blockers, and they're depressingly predictable. PKI dependencies impose ordering you can't violate — a leaf certificate can't meaningfully migrate before the root CA above it does. Hardware-constrained systems (IoT, embedded, SCADA) may simply lack the compute or memory to run lattice algorithms at all, turning a software update into a hardware-replacement project. Legacy protocols often hardcode their algorithm negotiation, leaving no clean hook to insert a new one. And third-party software with no published PQC roadmap can quietly gate your entire timeline. CISA's answer to that last one is a formal vendor-engagement program: don't assume your suppliers are moving — query every one of them in writing for their PQC support dates, because their timeline just became part of yours.",
      ],
      technical: {
        title: "Phased Migration Architecture — Hybrid First, Pure PQC Later",
        body: [
          "The architecture is hybrid-first, pure-PQC-later:\n- Phase 1 (2024–2027) deploys ML-KEM alongside ECDH/RSA — hybrid TLS (X25519+ML-KEM-768) and IKE (ECDH+ML-KEM-1024) — for immediate HNDL protection with backward compatibility.\n- Phase 2 (2027–2030) retires classical key exchange from internal systems; Phase 3 (2030+) removes all classical key exchange, retires RSA PKI, and deploys ML-DSA root CAs.",
          "Crypto agility runs through an abstraction layer:\n- Separate algorithm selection from application logic — OpenSSL 3.x providers, Java JCA providers, and Go crypto/x509 all swap algorithms without app changes.\n- Tag every cryptographic operation with algorithm identifiers in logs for future audit, and avoid hardcoding algorithm OIDs or key sizes in application code.",
        ],
        codeExample: {
          label: "Crypto-agile nginx TLS configuration — algorithm selection via config",
          code: `# nginx with openssl-oqs-provider — swap algorithms via config, not code
# /etc/nginx/nginx.conf

server {
    listen 443 ssl;
    ssl_certificate     /certs/server-hybrid.crt;
    ssl_certificate_key /certs/server.key;

    # Phase 1: Hybrid key exchange — PQC + classical
    ssl_ecdh_curve x25519_mlkem768:secp384r1;

    # Phase 3 (future): Pure PQC — just change this one line
    # ssl_ecdh_curve mlkem1024;

    ssl_protocols TLSv1.3;
    ssl_ciphers   TLS_AES_256_GCM_SHA384;

    # Log negotiated algorithm for CBOM tracking
    log_format pqc_audit '$remote_addr "$ssl_curve" "$ssl_cipher"';
    access_log /var/log/nginx/pqc-audit.log pqc_audit;
}`,
        },
      },
      incident: {
        title: "The 2030 Federal PQC Deadline — $7.1 Billion Migration Race",
        when: "2024–2030",
        where: "U.S. federal civilian and national security systems",
        impact: "Estimated $7.1 billion federal IT migration cost; 6-year transition window against quantum timeline",
        body: [
          "OMB Memorandum M-23-02 (Dec 2022) set an aggressive federal timeline:\n- Agencies must develop PQC migration plans by 2024 and prioritize high-value assets by 2030 — the year some estimates place earliest CRQC availability.\n- GAO assessed in 2023 that agencies collectively run thousands of RSA/ECC systems, and that full migration by 2030 was 'highly challenging' given procurement lead times, contractor dependencies, and the pace of federal IT modernization.",
          "The federal acquisition cycle compounds the problem:\n- A system procured in 2024 on RSA will be used through 2035 or later — past the CRQC timeline.\n- OMB now requires PQC-support mandates in all new IT procurements (vendors must show a CNSA 2.0 or FIPS 203/204/205 roadmap), and CISA runs a technical-assistance program to help agencies prioritize when they lack cryptographic expertise.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Phase 1: Hybrid", sub: "2024–2027: HNDL protection now", type: "result" },
          { label: "Phase 2: PQC Primary", sub: "2027–2030: Retire classical KEM", type: "system" },
          { label: "Phase 3: Pure PQC", sub: "2030+: Remove all RSA/ECC", type: "result" },
          { label: "Crypto Agility", sub: "Algorithm swap without redesign", type: "system" },
        ],
      },
      timeline: [
        { year: 2022, event: "OMB M-23-02: federal PQC migration planning mandated" },
        { year: 2023, event: "CISA Post-Quantum Cybersecurity Roadmap published", highlight: true },
        { year: 2024, event: "NIST FIPS 203/204/205 final — migration algorithm baseline set" },
        { year: 2027, event: "Target: all federal internet-facing systems in hybrid mode" },
        { year: 2030, event: "Target: priority systems migrated to pure PQC" },
      ],
      keyTakeaways: [
        "CISA's 5-phase roadmap: Inventory → Prioritize → Plan → Implement → Validate",
        "Hybrid mode (classical + PQC) provides immediate HNDL protection with backward compatibility",
        "Crypto agility — abstract algorithm selection from application logic — is essential for future-proofing",
        "New federal procurements must mandate PQC support to avoid locking in RSA/ECC through 2035+",
      ],
      references: [
        { title: "CISA Post-Quantum Cybersecurity Roadmap (2023)", url: "https://www.cisa.gov/sites/default/files/2023-11/CISA-2023-Post-Quantum-Cybersecurity-Roadmap.pdf" },
        { title: "OMB M-23-02: Migrating to Post-Quantum Cryptography", url: "https://www.whitehouse.gov/wp-content/uploads/2022/11/M-23-02-M-Memo-on-Migrating-to-Post-Quantum-Cryptography.pdf" },
      ],
    },
    quiz: {
      questions: [
        { id: "quantum-d05-q1", type: "Core Idea", challenge: "Program not patch.", text: "Why is post-quantum migration framed as a 5–10 year program rather than a patch cycle?", options: ["It requires inventory, prioritization, infrastructure replacement, and coordination across many systems","Because vendors are slow","Because QKD is illegal","Because RSA never expires"], correctIndex: 0, explanation: "Migration touches PKI, HSMs, protocols, and vendors — a multi-year transformation, not a quick fix." },
        { id: "quantum-d05-q2", type: "Architecture", challenge: "Hybrid first.", text: "What does the phased 'hybrid first, pure PQC later' architecture mean?", options: ["Deploy classical+PQC combined now for safety and compatibility, transition to pure PQC as it matures","Use only PQC immediately everywhere","Keep RSA forever","Skip PQC entirely"], correctIndex: 0, explanation: "Hybrid provides defense-in-depth and interoperability during transition before moving to pure PQC." },
        { id: "quantum-d05-q3", type: "Real World", challenge: "2030 deadline.", text: "What does the '2030 federal PQC deadline' and '$7.1 billion migration race' refer to?", options: ["The federal target to migrate prioritized systems to PQC, with multi-billion-dollar estimated cost","A QKD satellite launch","An RSA renewal fee","A single agency's budget"], correctIndex: 0, explanation: "Federal guidance sets ~2030 milestones; the government-wide cost is estimated in the billions." },
        { id: "quantum-d05-q4", type: "Strategy", challenge: "Prioritizing systems.", text: "When building a financial institution's PQC roadmap, what drives prioritization?", options: ["HNDL risk — systems handling long-lived sensitive data migrate first","Alphabetical order of hostnames","Newest hardware first","Cheapest systems first"], correctIndex: 0, explanation: "HNDL exposure determines urgency; long-secrecy data in transit leads the schedule." },
        { id: "quantum-d05-q5", type: "Planning", challenge: "Identifying blockers.", text: "Which is a common migration blocker the roadmap must surface?", options: ["Legacy HSMs or vendor products that can't support PQC without replacement","Too many available algorithms","Excess budget","Overly fast networks"], correctIndex: 0, explanation: "Hardware and vendor limitations frequently gate migration and must be identified early." },
        { id: "quantum-d05-q6", type: "Concept", challenge: "Why phased.", text: "Why not switch directly to pure PQC across all systems at once?", options: ["Interoperability, immature implementations, and operational risk make a phased hybrid approach safer","Pure PQC is illegal","It would be cheaper to do all at once","Hybrid offers no benefit"], correctIndex: 0, explanation: "A phased hybrid path manages compatibility and implementation maturity risks." },
        { id: "quantum-d05-q7", type: "Framework", challenge: "CISA roadmap role.", text: "What does CISA's migration roadmap provide to organizations?", options: ["A structured framework of phases for discovery, prioritization, and migration","Free quantum computers","A list of banned algorithms only","Tax incentives"], correctIndex: 0, explanation: "CISA's roadmap gives a repeatable, phased framework to organize a multi-year migration." },
        { id: "quantum-d05-q8", type: "Defense", challenge: "Sustaining the program.", text: "What governance element keeps a multi-year PQC program on track?", options: ["Executive sponsorship, sustained budget, and milestone-based phase gates","A single kickoff email","Removing the CBOM","Ad-hoc volunteer effort"], correctIndex: 0, explanation: "Multi-year programs need funding, ownership, and phase gates to survive leadership and budget cycles." },
      ],
    },
    ctf: {
      scenario: "You're building a PQC migration roadmap for a financial institution. Prioritize systems by HNDL risk, design the phased migration timeline, and identify blockers.",
      hint: "Inventory the system portfolio, apply CISA prioritization, then schedule the migration phases.",
      hints: [
        "Review the system portfolio. Run: cat systems-portfolio.txt",
        "Apply CISA prioritization. Run: pqc-prioritize --data-sensitivity high",
        "Group the prioritized systems into migration phases. Run: pqc-phase --phases 3",
        "Generate the phased migration timeline. Run: pqc-roadmap --phases 3",
        "Run 'assemble' to submit the roadmap",
      ],
      fragments: [
        { trigger: "/systems-portfolio.txt", value: "FLAG{PQC_ROAD", label: "System Portfolio — Cryptographic Asset Inventory" },
        { trigger: "pqc-prioritize", value: "MAP_", label: "Prioritization Matrix — HNDL Risk Ranking" },
        { trigger: "pqc-phase", value: "PHASE_", label: "Systems Grouped — Migration Phases Assigned" },
        { trigger: "pqc-roadmap", value: "PLAN_EXECUTE}", label: "Migration Roadmap — 3-Phase Timeline Generated" },
      ],
      files: {
        "/systems-portfolio.txt": [
          "FINANCIAL INSTITUTION — PQC MIGRATION PORTFOLIO",
          "System A: Internet banking TLS (RSA-2048, 50M users, sensitivity: HIGH)",
          "System B: Wire transfer settlement (RSA-4096, $2B/day, sensitivity: CRITICAL)",
          "System C: Internal HR portal (RSA-2048, sensitivity: MEDIUM)",
          "System D: ATM network HSMs (RSA-2048, hardware lifecycle 2030, sensitivity: HIGH)",
          "System E: Email S/MIME (RSA-2048, sensitivity: MEDIUM)",
          "Sequence: pqc-prioritize → pqc-roadmap → assemble",
        ].join("\n"),
      },
      dirs: { "/": [{ name: "systems-portfolio.txt", isDir: false }] },
      extraCommands: {
        "pqc-prioritize": (_args: string[]) => ({
          lines: [
            "Applying CISA prioritization matrix (data sensitivity + HNDL exposure)...",
            "",
            "Priority 1 — CRITICAL (migrate Phase 1 by 2025):",
            "  System B: Wire transfer — $2B/day, CRITICAL sensitivity, HNDL risk immediate",
            "",
            "Priority 2 — HIGH (migrate Phase 1 by 2026):",
            "  System A: Internet banking — 50M users, RSA exposed, HNDL bulk collection risk",
            "  System D: ATM HSMs — hardware lifecycle forces migration before 2030 EOL",
            "",
            "Priority 3 — MEDIUM (migrate Phase 2 by 2028):",
            "  System C: HR portal — lower sensitivity, internal only",
            "  System E: Email — S/MIME migration to ML-DSA",
            "Fragment collected.",
          ],
        }),
        "pqc-phase": (_args: string[]) => ({
          lines: [
            "Grouping the prioritized systems into 3 migration phases...",
            "  Phase 1 (0-12mo): internet-facing, high-secrecy → 14 systems",
            "  Phase 2 (12-30mo): internal PKI/VPN, medium-secrecy → 31 systems",
            "  Phase 3 (30-48mo): legacy/embedded, low-secrecy → 22 systems",
            "  honoring dependencies: HSM/PKI uplift precedes the apps that use them",
            "Phase buckets assigned by exposure × dependency order.",
            "Next: pqc-roadmap --phases 3",
            "",
            ">> LEARN: A priority list isn't a plan until it's phased",
            "   Grouping by exposure AND dependency turns a ranked list into executable",
            "   waves — you can't migrate an app before its HSM/PKI foundation is ready.",
            "   Phasing is what makes a CISA-style roadmap schedulable.",
          ],
        }),
        "pqc-roadmap": (_args: string[]) => ({
          lines: [
            "Generating 3-phase migration roadmap...",
            "",
            "Phase 1 (2024-2026): Hybrid deployment — HNDL protection",
            "  2024 Q4: Deploy X25519+ML-KEM-768 for System B wire transfer TLS",
            "  2025 Q2: Deploy X25519+ML-KEM-768 for System A internet banking",
            "  2025 Q4: Procure ML-KEM-capable HSMs for System D ATM network",
            "  Blocker: ATM HSM vendor PQC firmware ETA 2025 Q3",
            "",
            "Phase 2 (2026-2028): PQC primary — internal systems",
            "  2026: Systems C, E migrate to ML-KEM/ML-DSA",
            "  2027: ATM HSM PQC firmware deployed, RSA retired from HSMs",
            "",
            "Phase 3 (2028-2030): Pure PQC — retire classical",
            "  2028: PKI root CA migrated to ML-DSA-87",
            "  2030: Classical key exchange disabled enterprise-wide",
            "",
            "Total cost estimate: $8.2M over 6 years.",
            "Fragment collected.",
          ],
        }),
      },
    },
  },

  // ─── quantum-d06: Sector Risk ─────────────────────────────────────────────────
  {
    epochId: "quantum-4",
    wonder: { name: "Federal Reserve Board", location: "Washington, D.C., USA", era: "2024 CE", emoji: "🏦" },
    id: "quantum-d06",
    order: 6,
    title: "Who's Most Exposed?",
    subtitle: "Sector-Specific Quantum Risk — Finance, Healthcare, Energy, Defense",
    category: "cybersecurity",
    xp: 160,
    badge: { id: "badge-qrm-sector", name: "Sector Risk Assessor", emoji: "🏦" },
    challengeType: "ctf",
    info: {
      tagline: "Quantum risk is not uniform — financial settlement infrastructure and nuclear command systems have vastly different exposure profiles.",
      year: 2024,
      overview: [
        "Quantum risk is not uniform — it varies dramatically by sector, and a good risk manager calibrates to their own industry rather than a generic checklist. Three factors drive the variation: how sensitive and long-lived the protected data is, how complex and slow-to-replace the cryptographic infrastructure is, and what regulatory and operational constraints bound the migration. By that calculus, financial services sit at the sharp end of HNDL risk: wire networks, SWIFT messaging, and securities settlement carry data that is immediately and concretely valuable, and they run it through HSMs and payment terminals on decade-long replacement cycles — so the data is worth harvesting *and* the infrastructure is slow to fix, the worst possible combination.",
        "Energy and critical infrastructure carry a completely different — and in some ways more frightening — risk profile. The SCADA systems controlling grids, water, and pipelines speak industrial protocols like Modbus, DNP3, and IEC 61850 that were originally designed with *no cryptography at all* and later had RSA/ECC wrappers bolted on. Worse, this gear runs on dedicated hardware with 20-to-30-year lifecycles and frequently cannot be updated remotely. Migration there isn't a software push; it can mean physically sending technicians to touch thousands of field devices scattered across a service territory. The threat model also differs — the worry is less retrospective decryption and more an attacker forging control commands — but the lesson is the same: the longer the hardware lifecycle, the earlier you must start.",
        "Blockchain earns its own stage because its quantum vulnerability is uniquely direct and unusually concrete. Every Bitcoin and Ethereum address is derived from an elliptic-curve public key (secp256k1 ECDSA), and a quantum computer running Shor's algorithm recovers the private key from any *exposed* public key — at which point it can sign transactions as you and drain the wallet. The subtlety is in 'exposed': any address that has ever sent a transaction has published its public key on-chain forever, and analysts estimate roughly 4 million Bitcoin sitting in early pay-to-public-key (P2PK) outputs are directly quantum-vulnerable, including coins widely believed to be Satoshi's. It's a vivid, quantifiable illustration of the whole epoch's thesis: the exposure was created years ago and is permanent, and only the decryption waits on hardware.",
      ],
      technical: {
        title: "Sector Quantum Risk Scoring Matrix",
        body: [
          "Financial services breaks down into several exposed systems:\n- SWIFT messaging (RSA-2048 and 3DES in SWIFT PKI, 11,000 institutions needing coordinated migration) and central-bank settlement (Fedwire, TARGET2, CHIPS on RSA HSMs, where compromise allows forged settlement instructions).\n- Payment cards (RSA in PIN encryption and terminal auth); and healthcare, where HIPAA's 75-year confidentiality for some records spans the entire CRQC timeline.",
          "A scoring formula ranks sectors:\n- Risk Score = data_longevity×0.40 + hndl_exposure×0.35 + migration_complexity×0.25.\n- Highest-risk: classified government (0.90+), healthcare (0.85), financial settlement (0.80), and blockchain (direct Shor's ECDSA exposure); lowest: web analytics, ephemeral session data, public content.",
        ],
        codeExample: {
          label: "Sector quantum risk scoring function",
          code: `def quantum_risk_score(sector: dict) -> dict:
    longevity_risk = {
        "medical": 0.95,      # 75-year HIPAA requirement
        "classified": 0.90,   # indefinite classification
        "financial": 0.80,    # wire transfers — retroactive fraud risk
        "blockchain": 0.95,   # ECDSA key on-chain = Shor's recoverable
        "hr": 0.40,           # employee records 7 years
        "web_analytics": 0.05,
    }
    complexity_map = {
        "scada_field": 0.95,      # physical access, 30-year cycles
        "payment_terminal": 0.85, # 500K+ terminals, HSM replacement
        "cloud_saas": 0.20,       # vendor-managed, fast rotation
        "web_server": 0.15,       # TLS config update, fast
    }
    hndl_exposure = sector.get("internet_facing", False) * 0.9
    score = (
        longevity_risk.get(sector["data_type"], 0.5) * 0.40 +
        hndl_exposure * 0.35 +
        complexity_map.get(sector["infra_type"], 0.5) * 0.25
    )
    priority = "CRITICAL" if score > 0.7 else "HIGH" if score > 0.4 else "MEDIUM"
    return {"score": round(score * 100), "priority": priority}`,
        },
      },
      incident: {
        title: "Blockchain's Quantum Vulnerability — $250 Billion in Exposed Digital Assets",
        when: "2024 (risk assessment)",
        where: "Bitcoin, Ethereum, and all ECDSA-based blockchain networks",
        impact: "Approximately 4 million Bitcoin in P2PK outputs (exposed public keys) directly vulnerable to Shor's Algorithm",
        body: [
          "Every Bitcoin and Ethereum address derives from a secp256k1 ECDSA public key — and that's the exposure:\n- A CRQC running Shor's recovers the private key from any exposed public key, letting it steal any wallet whose public key has appeared on-chain.\n- Exposed keys include every address that has ever sent a transaction (the key is revealed when signing the first outgoing tx) and all pay-to-public-key (P2PK) outputs — common in early Bitcoin, including Satoshi's coinbase rewards.",
          "The scale is staggering and the fix is hard:\n- Analysts estimate ~4 million Bitcoin — roughly $250 billion at 2024 prices — sit in P2PK outputs with exposed public keys.\n- Bitcoin and Ethereum devs are designing quantum-resistant address formats (ML-DSA, hash-based), but migrating existing funds needs a soft fork users must actively join — any vulnerable address not migrated before Q-Day can be stolen; the Ethereum Foundation's roadmap names PQC migration as a long-term objective.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Financial: CRITICAL", sub: "SWIFT, HSM, settlement — HNDL immediate", type: "attacker" },
          { label: "Healthcare: HIGH", sub: "75-year HIPAA — HNDL spans entire window", type: "victim" },
          { label: "SCADA: HIGH", sub: "30-year lifecycle, physical access needed", type: "system" },
          { label: "Blockchain: CRITICAL", sub: "ECDSA private key recovery via Shor's", type: "attacker" },
        ],
      },
      timeline: [
        { year: 2022, event: "Ethereum Foundation adds PQC to long-term roadmap" },
        { year: 2023, event: "FSB and BIS publish quantum risk guidance for financial institutions" },
        { year: 2024, event: "FDA guidance: new medical devices must include PQC roadmap in submissions", highlight: true },
        { year: 2025, event: "NERC CIP updates expected to include quantum risk for energy sector" },
        { year: 2030, event: "Target: all critical infrastructure priority systems migrated to PQC" },
      ],
      keyTakeaways: [
        "Financial services face highest HNDL risk — wire transfers and settlement data immediately valuable",
        "Healthcare data has 75-year HIPAA longevity — HNDL risk spans the entire CRQC timeline",
        "SCADA quantum migration requires physical access to thousands of field devices — plan years ahead",
        "All ECDSA blockchain assets are quantum-vulnerable — Bitcoin P2PK outputs directly exposed",
      ],
      references: [
        { title: "FSB Report on Quantum Risks to Financial Stability", url: "https://www.fsb.org/" },
        { title: "NERC CIP: Quantum Computing Risk to Power Grid", url: "https://www.nerc.com/" },
      ],
    },
    quiz: {
      questions: [
        { id: "quantum-d06-q1", type: "Core Idea", challenge: "Risk not uniform.", text: "Why is quantum risk not uniform across sectors?", options: ["Different sectors have vastly different data secrecy lifetimes and exposure profiles","All sectors use the same systems","Only banks use encryption","Quantum affects only governments"], correctIndex: 0, explanation: "A nuclear command system and a retail catalog have wildly different secrecy and exposure needs." },
        { id: "quantum-d06-q2", type: "Analysis", challenge: "Scoring matrix.", text: "What does a sector quantum risk scoring matrix help an analyst do?", options: ["Rank assets/sectors by data sensitivity, secrecy lifetime, and quantum exposure","Pick a logo color","Count employees","Measure latency"], correctIndex: 0, explanation: "The matrix structures prioritization by combining sensitivity, longevity, and exposure." },
        { id: "quantum-d06-q3", type: "Real World", challenge: "Blockchain exposure.", text: "Why is blockchain singled out with '$250 billion in exposed digital assets' at quantum risk?", options: ["Exposed public keys and ECDSA signatures let a quantum attacker forge transactions/steal funds","Blockchains use no cryptography","They rely on QKD","They are immune by design"], correctIndex: 0, explanation: "Reused/exposed public keys on-chain are vulnerable to Shor's algorithm, threatening huge asset value." },
        { id: "quantum-d06-q4", type: "Analysis", challenge: "Banking infrastructure.", text: "Assessing a regional bank's HNDL exposure, which systems warrant top scrutiny?", options: ["SWIFT payment infrastructure, ATM HSM networks, and digital asset custody","The cafeteria POS","Marketing email lists","Employee parking app"], correctIndex: 0, explanation: "Settlement, key-management, and custody systems carry the highest-value, longest-secrecy data." },
        { id: "quantum-d06-q5", type: "Concept", challenge: "Settlement vs command.", text: "Why might financial settlement and nuclear command systems sit at opposite ends of a risk profile?", options: ["They differ in secrecy duration, threat actors, and consequence of compromise","They use the same key","Neither uses cryptography","They have identical risk"], correctIndex: 0, explanation: "Exposure profiles diverge by data lifetime, adversary, and impact — driving different priorities." },
        { id: "quantum-d06-q6", type: "Strategy", challenge: "Custody priority.", text: "Within the bank, why does digital asset custody rank high for quantum migration?", options: ["Private keys protect directly fungible value and signatures are quantum-forgeable","It has the least data","It is offline forever","It uses no keys"], correctIndex: 0, explanation: "Custody keys guard liquid value, and quantum-forgeable signatures make them prime targets." },
        { id: "quantum-d06-q7", type: "Analysis", challenge: "HSM network risk.", text: "Why are ATM/HSM key networks a notable quantum concern for banks?", options: ["They distribute and protect cryptographic keys whose compromise scales across the network","They store no keys","They are air-gapped from money","They use QKD"], correctIndex: 0, explanation: "Key-management infrastructure compromise has broad, networked impact on financial operations." },
        { id: "quantum-d06-q8", type: "Defense", challenge: "Sector-driven plan.", text: "How should sector risk scoring shape a migration plan?", options: ["Migrate the highest-scoring (most exposed, longest-secrecy) systems first","Migrate the lowest-risk systems first","Migrate alphabetically","Migrate nothing until 2030"], correctIndex: 0, explanation: "Risk-based sequencing directs scarce resources to where quantum exposure is greatest." },
      ],
    },
    ctf: {
      scenario: "You're the quantum risk lead for a regional bank. Assess HNDL exposure across SWIFT payment infrastructure, ATM HSM network, and digital asset custody vault.",
      hint: "Analyze each system's HNDL exposure, score by sector risk matrix, then produce the risk register.",
      hints: [
        "Read the bank system inventory. Run: cat bank-inventory.txt",
        "Score SWIFT quantum risk. Run: sector-risk --system swift",
        "Score the core-banking ledger quantum risk. Run: sector-risk --system core-banking",
        "Score ATM HSM quantum risk. Run: sector-risk --system atm-hsm",
        "Run 'assemble' to submit the risk register",
      ],
      fragments: [
        { trigger: "/bank-inventory.txt", value: "FLAG{SECTOR_Q", label: "Bank Inventory — System CBOM Summary" },
        { trigger: "sector-risk --system swift", value: "RISK_", label: "SWIFT Risk Score — HNDL Critical" },
        { trigger: "sector-risk --system core-banking", value: "MATRIX_", label: "Core-Banking Risk Score — Ledger Integrity" },
        { trigger: "sector-risk --system atm-hsm", value: "FINANCIAL}", label: "ATM HSM Risk Score — Hardware Lifecycle Risk" },
      ],
      files: {
        "/bank-inventory.txt": [
          "REGIONAL BANK — QUANTUM RISK INVENTORY",
          "System: SWIFT messaging (RSA-2048, internet-facing, $450M/day)",
          "System: ATM HSM network (RSA-2048, 2,400 terminals, hardware 2028 EOL)",
          "System: Digital asset custody (ECDSA secp256k1, $120M AUM)",
          "Sequence: sector-risk --system swift → sector-risk --system atm-hsm → assemble",
        ].join("\n"),
      },
      dirs: { "/": [{ name: "bank-inventory.txt", isDir: false }] },
      extraCommands: {
        "sector-risk": (args: string[]) => {
          const system = args.find(a => a !== "--system") ?? "";
          if (system === "swift") {
            return {
              lines: [
                "SWIFT System — Quantum Risk Assessment:",
                "  Algorithm: RSA-2048 PKI, 3DES message authentication",
                "  HNDL exposure: INTERNET-FACING — bulk collection risk HIGH",
                "  Data value: $450M/day wire transfers — retroactive fraud risk CRITICAL",
                "  Migration path: SWIFT PQC working group (ISO 20022 + ML-KEM)",
                "  SWIFT migration ETA: 2026-2027 (coordinated with 11K member banks)",
                "  Risk score: 88/100 — CRITICAL",
                "  Action: Deploy hybrid TLS for SWIFT Alliance Access now.",
                "Fragment collected.",
              ],
            };
          }
          if (system === "core-banking") {
            return {
              lines: [
                "Core-Banking Ledger — Quantum Risk Assessment:",
                "  Algorithm: RSA-2048 transaction signing, ECDSA-P256 audit log",
                "  HNDL exposure: Internal, but ledger integrity is long-lived",
                "  Threat: a CRQC could FORGE historical transaction signatures",
                "  Data value: system of record — retroactive tampering CATASTROPHIC",
                "  Migration path: ML-DSA-65 signing + hash-chained audit log",
                "  Risk score: 81/100 — CRITICAL (integrity, not just confidentiality)",
                "  Action: prioritize signature migration over encryption here.",
                "Fragment collected.",
                "",
                ">> LEARN: Quantum risk is integrity too, not only secrecy",
                "   HNDL targets confidentiality, but a CRQC also forges signatures —",
                "   for a ledger, signature migration (ML-DSA) matters more than encryption.",
                "   Score systems on what the quantum threat actually breaks for them.",
              ],
            };
          }
          return {
            lines: [
              "ATM HSM Network — Quantum Risk Assessment:",
              "  Algorithm: RSA-2048 PIN encryption, RSA-2048 firmware signing",
              "  Hardware EOL: 2028 — 2,400 terminals requiring physical replacement",
              "  HNDL exposure: Private network — lower bulk collection risk",
              "  Migration blocker: HSM PQC firmware ETA 2025 Q3",
              "  Risk score: 72/100 — HIGH",
              "  Action: Include ML-KEM requirement in 2028 ATM procurement RFP now.",
              "Fragment collected.",
            ],
          };
        },
      },
    },
  },

  // ─── quantum-d07: Board Briefing ──────────────────────────────────────────────
  {
    epochId: "quantum-4",
    wonder: { name: "SEC Cybersecurity Disclosure Office", location: "Washington, D.C., USA", era: "2024 CE", emoji: "🎙️" },
    id: "quantum-d07",
    order: 7,
    title: "Briefing the Board",
    subtitle: "Communicating Quantum Risk to Executive Leadership",
    category: "cybersecurity",
    xp: 170,
    badge: { id: "badge-qrm-board", name: "Board Risk Communicator", emoji: "🎙️" },
    challengeType: "ctf",
    info: {
      tagline: "SEC cyber disclosure rules require material quantum risk to be reported. The board needs to understand the threat — without a PhD in physics.",
      year: 2024,
      overview: [
        "Quantum risk has quietly crossed from an engineering concern into a securities-disclosure one, and that shift is what finally gets boards to pay attention. The SEC's cybersecurity disclosure rules (effective December 2023) require public companies to report material cyber risks and incidents — material risks in the annual 10-K, material incidents in an 8-K within four business days. Quantum is now emerging as a disclosure consideration in its own right: core cryptography that is quantum-vulnerable with no migration underway can plausibly be a *material* risk, and several Fortune 500 companies have already begun disclosing quantum cryptographic risk in their 10-Ks. Once a risk is potentially material to investors, it stops being something the CISO worries about alone and becomes something the board is legally exposed on — which is exactly the leverage a security leader needs.",
        "But leverage is wasted without translation, and this is where most technical leaders fail their boards. Directors do not respond to physics; they respond to financial exposure, regulatory deadlines, competitive positioning, and reputational risk. The cardinal rule of the quantum board briefing is to lead with the business consequence, never the science: not 'Shor's algorithm achieves polynomial-time factoring,' but 'our financial settlement infrastructure is exposed to a known threat with a 2030–2035 deadline, and the data is being collected now.' The physics is the appendix, available if asked. The headline is risk, money, and time — the three things a board is actually responsible for governing.",
        "An effective briefing follows a fixed, repeatable structure, because a board wants a decision, not a lecture: the threat summary (what and when), our exposure (which specific systems, drawn straight from the CBOM), our current status (where we are in the five-phase roadmap), the regulatory landscape (which mandates — SEC, FFIEC, CNSA 2.0 — actually bind us), the resource requirement (the budget ask), and the explicit decision requested. Concrete analogies do the heavy lifting where numbers can't — 'a master key that opens every lock we own will be sold openly within ten years, and copies are already being made' communicates more to a director in one sentence than a slide of lattice diagrams ever will. The deliverable of this stage isn't understanding; it's a funded mandate.",
      ],
      technical: {
        title: "SEC Disclosure Framework and Material Risk Determination",
        body: [
          "Materiality hinges on the reasonable-investor standard:\n- Under SEC Rule 10b-5 and the 2023 rules, a risk is 'material' if a reasonable investor would substantially likely consider it important.\n- Assessing it means weighing probability of harm (CRQC hitting current operations), magnitude (cost of compromise), and mitigation status (is migration underway) — companies with large consumer-financial, IP, or healthcare data should consult securities counsel.",
          "A quantum materiality assessment should quantify four things:\n- The notional value of data at HNDL risk, the cost of remediation (migration budget), the cost of breach (fines, litigation), and the timeline gap (CRQC expected vs migration complete).\n- That framing lets the CFO and audit committee weigh quantum risk alongside other material risks in the enterprise risk register.",
        ],
        codeExample: {
          label: "Quantum risk materiality scorecard — executive summary generator",
          code: `def board_quantum_scorecard(org_profile: dict) -> str:
    crqc_year_est = 2032  # IC consensus midpoint
    migration_complete_year = org_profile.get("migration_eta", 2030)
    gap_years = crqc_year_est - migration_complete_year
    hndl_data_value = org_profile.get("sensitive_data_value_usd", 0)
    migration_cost = org_profile.get("migration_budget_usd", 0)
    risk_rating = (
        "CRITICAL" if gap_years < 0
        else "HIGH" if gap_years < 2
        else "MODERATE"
    )
    return f"""
QUANTUM RISK EXECUTIVE SUMMARY
Risk rating: {risk_rating}
CRQC estimate: {crqc_year_est} | Our migration: {migration_complete_year}
Margin: {'AT RISK' if gap_years < 0 else f'{gap_years} years'}
Data at HNDL risk: \${hndl_data_value:,.0f}
Migration cost: \${migration_cost:,.0f}
Risk-adjusted ROI: {hndl_data_value // migration_cost}x

Board actions:
  Approve migration program budget
  Direct CISO to report quarterly on milestones
  Authorize legal review for SEC 10-K disclosure
"""

print(board_quantum_scorecard({
    "migration_eta": 2029,
    "sensitive_data_value_usd": 4_500_000_000,
    "migration_budget_usd": 12_000_000,
}))`,
        },
      },
      incident: {
        title: "SEC vs. SolarWinds — Personal Liability for Known Cyber Risks",
        when: "2023",
        where: "U.S. Securities and Exchange Commission, SolarWinds Corporation",
        impact: "SEC enforcement signals that known, foreseeable cyber risks must be disclosed — sets precedent for quantum risk",
        body: [
          "The SEC's October 2023 lawsuit against SolarWinds and CISO Timothy Brown set a critical precedent:\n- Cybersecurity disclosure obligations apply to known, foreseeable risks — not just incidents that have already happened.\n- The SEC alleged SolarWinds knew about cyber risks it failed to disclose; though it involved a past breach, securities attorneys note the ruling's implications for forward-looking risks like quantum computing.",
          "For CISO-board communication on quantum risk, the lesson is that boilerplate disclosure isn't enough:\n- If your team has assessed specific quantum exposure (named systems, quantified data at risk, a migration gap) and hasn't told the board or disclosed it, the CISO faces potential personal liability.\n- The correct posture: formally document the quantum risk assessment, bring it to the audit committee, and work with legal counsel on disclosure requirements.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Business Framing", sub: "Cost, timeline, regulatory — not physics", type: "system" },
          { label: "SEC Disclosure", sub: "Material quantum risk → 10-K required", type: "attacker" },
          { label: "Board Decision", sub: "Budget approval + quarterly reporting", type: "result" },
          { label: "Risk Register", sub: "Quantum alongside cyber, supply chain", type: "system" },
        ],
      },
      timeline: [
        { year: 2022, event: "SEC proposes mandatory cybersecurity risk disclosure rules" },
        { year: 2023, event: "SEC cybersecurity disclosure rules take effect — 8-K + 10-K requirements" },
        { year: 2023, event: "SEC sues SolarWinds CISO — personal liability for disclosure failures", highlight: true },
        { year: 2024, event: "First Fortune 500 companies disclose quantum cryptographic risk in 10-K filings" },
        { year: 2025, event: "Expected: SEC guidance on quantum risk materiality thresholds" },
      ],
      keyTakeaways: [
        "SEC cyber disclosure rules may require quantum risk disclosure if material to investors",
        "Board briefings should lead with business impact, regulatory timelines, and budget asks — not physics",
        "SolarWinds precedent: known, foreseeable cyber risks must be disclosed — not just past incidents",
        "Formal risk register documentation of quantum exposure protects CISOs from personal liability",
      ],
      references: [
        { title: "SEC Cybersecurity Risk Management Disclosure Rules", url: "https://www.sec.gov/rules/final/2023/33-11216.pdf" },
        { title: "NSA Quantum Computing FAQ — for Non-Technical Audiences", url: "https://media.defense.gov/2021/Aug/04/2002821837/-1/-1/1/Quantum_FAQs_20210804.PDF" },
      ],
    },
    quiz: {
      questions: [
        { id: "quantum-d07-q1", type: "Core Idea", challenge: "Disclosure duty.", text: "Why must material quantum risk be considered for SEC disclosure?", options: ["SEC cyber disclosure rules require reporting material risks, and HNDL exposure can be material","Quantum risk is exempt","Only AES must be disclosed","Disclosure is purely voluntary"], correctIndex: 0, explanation: "If quantum/HNDL risk is material to investors, SEC rules require it be disclosed." },
        { id: "quantum-d07-q2", type: "Real World", challenge: "SolarWinds case.", text: "What does the SEC vs. SolarWinds matter illustrate about cyber risk?", options: ["Officers can face personal liability for known, undisclosed cyber risks","Cyber risk is never material","Boards have no responsibility","Only engineers are liable"], correctIndex: 0, explanation: "It signaled potential personal accountability for misrepresenting or omitting known cyber risks." },
        { id: "quantum-d07-q3", type: "Governance", challenge: "Board communication.", text: "How should quantum risk be presented to a board audit committee?", options: ["In business and materiality terms — without requiring a physics PhD","As dense lattice mathematics","Only as source code","Not at all"], correctIndex: 0, explanation: "Boards need risk framed by business impact and materiality, not technical minutiae." },
        { id: "quantum-d07-q4", type: "Analysis", challenge: "Materiality test.", text: "What determines whether quantum risk is 'material' for disclosure?", options: ["Whether a reasonable investor would consider it important to decisions","The number of servers","The CISO's job title","The vendor's revenue"], correctIndex: 0, explanation: "Materiality hinges on significance to a reasonable investor's decision-making." },
        { id: "quantum-d07-q5", type: "Governance", challenge: "Healthcare IT exposure.", text: "Why is quantum risk plausibly material for a public healthcare IT company?", options: ["Long-lived patient data faces HNDL exposure, creating real future liability","Healthcare data expires instantly","It uses no encryption","It is exempt from the SEC"], correctIndex: 0, explanation: "Decades-long secrecy needs for health data make HNDL exposure a material, disclosable risk." },
        { id: "quantum-d07-q6", type: "Compliance", challenge: "Disclosure language.", text: "What makes good SEC quantum-risk disclosure language?", options: ["Clear, accurate description of the risk, exposure, and mitigation program without overstatement","Vague reassurance that all is fine","Technical jargon only","Silence"], correctIndex: 0, explanation: "Disclosure should be accurate and balanced — neither alarmist nor falsely reassuring." },
        { id: "quantum-d07-q7", type: "Concept", challenge: "Known-risk duty.", text: "What is the key lesson for leadership from known-but-undisclosed cyber risk cases?", options: ["Failing to disclose a known material risk can create legal and personal liability","Known risks need no action","Only breaches matter, not risks","Disclosure increases liability so avoid it"], correctIndex: 0, explanation: "Once a material risk is known, omitting or misrepresenting it carries serious legal exposure." },
        { id: "quantum-d07-q8", type: "Defense", challenge: "Briefing structure.", text: "What should a board-level quantum risk briefing contain?", options: ["Materiality assessment, exposure summary, mitigation roadmap, and disclosure recommendation","Only the QBER formula","A list of qubits","Nothing actionable"], correctIndex: 0, explanation: "Boards need the materiality call, exposure, the plan, and a disclosure decision — in business terms." },
      ],
    },
    ctf: {
      scenario: "You're preparing a quantum risk briefing for the board audit committee of a publicly traded healthcare IT company. Build the materiality assessment and draft SEC disclosure language.",
      hint: "Assess materiality, calculate risk exposure, then draft the board-ready summary.",
      hints: [
        "Review the company profile. Run: cat company-profile.txt",
        "Run the quantum materiality assessment. Run: qrisk-materiality --company-profile company-profile.txt",
        "Quantify the dollar exposure that drives the materiality threshold. Run: qrisk-quantify",
        "Draft SEC 10-K disclosure language. Run: qrisk-disclosure-draft",
        "Run 'assemble' to submit the board package",
      ],
      fragments: [
        { trigger: "/company-profile.txt", value: "FLAG{BOARD_Q", label: "Company Profile — Quantum Risk Context" },
        { trigger: "qrisk-materiality", value: "RISK_", label: "Materiality Assessment — SEC Threshold Analysis" },
        { trigger: "qrisk-quantify", value: "MATERIAL_", label: "Exposure Quantified — Crosses Materiality Threshold" },
        { trigger: "qrisk-disclosure-draft", value: "DISCLOSE}", label: "10-K Draft — Quantum Risk Disclosure Language" },
      ],
      files: {
        "/company-profile.txt": [
          "COMPANY PROFILE — BOARD QUANTUM RISK BRIEFING",
          "Revenue: $2.1B | Market cap: $8.4B | Industry: Healthcare IT",
          "Sensitive data: 45M patient records (75-year HIPAA requirement)",
          "Crypto: RSA-2048 across EHR, cloud backup, physician portal",
          "Migration status: CBOM complete, no migration started",
          "Migration ETA (if approved): 2028 | CRQC estimate: 2030-2035",
          "Sequence: qrisk-materiality → qrisk-disclosure-draft → assemble",
        ].join("\n"),
      },
      dirs: { "/": [{ name: "company-profile.txt", isDir: false }] },
      extraCommands: {
        "qrisk-materiality": (_args: string[]) => ({
          lines: [
            "QUANTUM RISK MATERIALITY ASSESSMENT",
            "Data at HNDL risk: 45M patient records × $150/record = $6.75B breach value",
            "CRQC estimated availability: 2032 (IC midpoint)",
            "Migration ETA if approved today: 2028",
            "Timeline gap: 4 years of margin — MODERATE risk if program approved now",
            "Timeline if not approved: 2030+ — HIGH risk of HNDL decryption before migration",
            "",
            "SEC materiality threshold: reasonable investor standard",
            "Assessment: $6.75B data exposure with known 2030-2035 threat window",
            "  on a company with $8.4B market cap LIKELY MEETS materiality threshold.",
            "Recommendation: Disclose in next 10-K; consult securities counsel.",
            "Board action: Approve $9.2M migration program to maintain 4-year margin.",
            "Risk-adjusted ROI: 733× ($9.2M migration vs. $6.75B breach exposure).",
            "Fragment collected.",
          ],
        }),
        "qrisk-quantify": (_args: string[]) => ({
          lines: [
            "Quantifying the dollar exposure behind the materiality call...",
            "  HNDL-exposed records: 2.3M customer + 0.4M employee",
            "  expected breach cost (IBM avg $165/record): ~$445M",
            "  + regulatory (GDPR/state AG) + litigation reserve: ~$120M",
            "  vs corporate materiality threshold (~5% pretax income): $90M",
            "  $565M >> $90M → quantum risk is MATERIAL and must be disclosed",
            "Exposure exceeds the materiality threshold — disclosure required.",
            "Next: qrisk-disclosure-draft",
            "",
            ">> LEARN: 'Material' is a number, not an opinion",
            "   Disclosure obligations turn on a quantified exposure crossing the company's",
            "   materiality threshold — so you must price the risk before drafting the 10-K.",
            "   SEC cyber rules make an unquantified hand-wave legally insufficient.",
          ],
        }),
        "qrisk-disclosure-draft": (_args: string[]) => ({
          lines: [
            "DRAFT — 10-K CYBERSECURITY RISK FACTOR",
            "(For review by securities counsel before filing)",
            "",
            '"Quantum Computing Risk: Advances in quantum computing may in the',
            "future render current cryptographic standards obsolete. Our systems",
            "rely on RSA and elliptic curve cryptography for protecting patient",
            "data and internal communications. We have completed a cryptographic",
            "inventory and are developing a migration roadmap to post-quantum",
            "standards as published by NIST in 2024 (FIPS 203, 204, 205).",
            "We expect to complete migration by 2028. If cryptographically",
            "relevant quantum computers become available before our migration",
            'is complete, our protected data could be at risk of decryption."',
            "",
            "Note: Disclosure highlights active mitigation (CBOM + roadmap) to",
            "      demonstrate good-faith risk management to SEC reviewers.",
            "Fragment collected.",
          ],
        }),
      },
    },
  },

  // ─── quantum-d08: Hybrid Cryptography ────────────────────────────────────────
  {
    epochId: "quantum-4",
    wonder: { name: "IETF Secretariat", location: "Fremont, California, USA", era: "2024 CE", emoji: "🔗" },
    id: "quantum-d08",
    order: 8,
    title: "Hybrid Cryptography",
    subtitle: "Running Classical and PQC in Parallel — The Transition Architecture",
    category: "cybersecurity",
    xp: 160,
    badge: { id: "badge-qrm-hybrid", name: "Hybrid Crypto Architect", emoji: "🔗" },
    challengeType: "ctf",
    info: {
      tagline: "Hybrid cryptography combines classical and post-quantum algorithms so that security holds if either is broken — the IETF-recommended transition architecture.",
      year: 2024,
      overview: [
        "When it's finally time to implement, the IETF-recommended approach isn't to rip out RSA and bolt in ML-KEM — it's to run both in parallel and combine them, and the risk logic behind that is worth dwelling on. In hybrid cryptography the session key is derived from *both* an X25519 ECDH exchange and an ML-KEM-768 encapsulation, so an adversary has to break both to recover it. The payoff is asymmetric protection against your own uncertainty: if ML-KEM-768 turns out to harbor a classical weakness — exactly the fate that befell SIKE, a finalist broken on a laptop after years of confidence — the battle-tested X25519 still protects you. You get post-quantum security without betting everything on cryptography that's only a few years old.",
        "Hybrid sounds simple but the *combining* has to be done by the standard, not improvised, or you can accidentally build something weaker than either component. The relevant specifications nail down the details: RFC 9180 (HPKE) plus the IETF drafts draft-ietf-tls-hybrid-design and draft-ietf-ipsecme-ikev2-pqc cover TLS 1.3 and IKEv2 respectively. Concretely, TLS 1.3 carries both the ECDH and the KEM key shares together in the ClientHello key_share extension and runs the concatenated secret through HKDF to derive the session key, and the negotiated combination X25519+ML-KEM-768 has a real IANA code point — 0x11EC — that you'll actually see on the wire in a packet capture. For an implementer, that level of specificity is the difference between interoperable and broken.",
        "Critically, hybrid is a bridge, not a destination — and treating it as permanent would be its own mistake. The plan is a 5-to-10-year transition: once the NIST PQC algorithms have accumulated five-plus years of real-world cryptanalysis without a crack appearing, organizations should shed the classical half and move to pure PQC, since maintaining two algorithms forever is needless complexity and overhead. And there *is* overhead to account for in capacity planning: hybrid TLS handshakes roughly double, from about 2KB to about 4KB, which means load balancers, CDNs, and middleboxes have to handle larger handshakes gracefully without tripping MTU fragmentation — a mundane but real operational gotcha that has broken more than one early deployment. Hybrid is the responsible posture for the migration window precisely because it hedges the one risk you can't engineer away: that the new math isn't as proven as the old.",
      ],
      technical: {
        title: "Hybrid Key Derivation in TLS 1.3 and Middlebox Impacts",
        body: [
          "TLS 1.3 hybrid key exchange carries both shares through the handshake:\n- The client puts both an X25519 ephemeral public key and an ML-KEM-768 public key in the ClientHello key_share; the server returns an X25519 public key and an ML-KEM-768 ciphertext.\n- The client decapsulates the ciphertext, computes the X25519 secret, and combines them: HKDF(X25519_shared || ML-KEM_shared).",
          "Chrome's 2023 deployment exposed real middlebox breakage:\n- Enterprise firewalls and TLS-inspection appliances crashed or dropped connections on seeing a 1216-byte key_share (vs the expected 32 bytes for X25519); Palo Alto, Fortinet, and Cisco shipped emergency firmware.\n- The lesson: PQC migration needs end-to-end ecosystem changes — middlebox firmware, MTU configuration, and protocol buffer sizes.",
        ],
        codeExample: {
          label: "Verify hybrid TLS is active on an endpoint",
          code: `#!/usr/bin/env python3
"""Verify hybrid key exchange is active on a TLS endpoint."""
import subprocess

def check_hybrid_tls(hostname: str, port: int = 443) -> dict:
    result = subprocess.run(
        ["openssl", "s_client",
         "-groups", "x25519_mlkem768:secp384r1:x25519",
         "-connect", f"{hostname}:{port}",
         "-brief", "-tls1_3"],
        capture_output=True, text=True, timeout=10, input=""
    )
    output = result.stderr + result.stdout
    server_temp_key = next(
        (line for line in output.splitlines() if "Server Temp Key" in line), ""
    )
    hybrid = any(kw in server_temp_key.upper() for kw in ["MLKEM", "KYBER"])
    return {
        "hostname": hostname,
        "hybrid_active": hybrid,
        "key_exchange": server_temp_key.strip(),
        "hndl_protected": hybrid,
    }

result = check_hybrid_tls("example-agency.gov")
print(result)
# {'hostname': 'example-agency.gov', 'hybrid_active': True,
#  'key_exchange': 'Server Temp Key: X25519MLKEM768, 1216 bits',
#  'hndl_protected': True}`,
        },
      },
      incident: {
        title: "Google Chrome X25519Kyber768 — First Mass-Scale PQC Deployment",
        when: "2023",
        where: "Google Chrome, Google servers — billions of TLS connections",
        impact: "0.5% of Chrome users hit connection failures due to middlebox MTU issues with larger hybrid handshakes",
        body: [
          "In August 2023, Chrome 116 enabled X25519Kyber768 hybrid key exchange by default — the first browser to deploy PQC at scale:\n- The rollout immediately surfaced interoperability problems: some TLS middleboxes (firewalls, proxies, load balancers, DPI appliances) broke on hybrid ClientHello messages with larger-than-expected key_share extensions.\n- About 0.5% of Chrome users hit connection failures.",
          "The ecosystem had to scramble, and the lesson stuck:\n- Palo Alto, Fortinet, and Cisco shipped emergency firmware, and Google added a fallback that retried with X25519-only when hybrid failed.\n- It proved PQC migration is more than algorithm updates — it needs end-to-end changes (middlebox firmware, MTU, protocol buffer sizes), so audit all TLS-inspecting appliances before enabling hybrid PQC.",
        ],
      },
      diagram: {
        nodes: [
          { label: "X25519 (Classical)", sub: "Protects against classical adversaries", type: "system" },
          { label: "ML-KEM-768 (PQC)", sub: "Protects against quantum adversaries", type: "system" },
          { label: "Combined HKDF", sub: "Both must break to expose session key", type: "result" },
          { label: "Middlebox Impact", sub: "Larger handshakes — firmware updates needed", type: "attacker" },
        ],
      },
      timeline: [
        { year: 2022, event: "IETF hybrid TLS draft published — standardizing X25519+Kyber768" },
        { year: 2023, event: "Google Chrome deploys X25519Kyber768 at scale — middlebox failures discovered", highlight: true },
        { year: 2024, event: "IANA assigns code point 0x11EC for x25519_mlkem768" },
        { year: 2024, event: "Cloudflare, AWS, Azure enable ML-KEM hybrid key exchange" },
        { year: 2027, event: "Target: hybrid mode standard across internet-facing federal systems" },
      ],
      keyTakeaways: [
        "Hybrid = X25519 + ML-KEM — both must be broken to compromise; provides defense in depth",
        "Google Chrome deployment showed 0.5% failure due to middlebox MTU and buffer size issues",
        "Hybrid mode is transitional — plan to move to pure PQC after ML-KEM has 5+ years of real-world analysis",
        "Audit all TLS-inspecting appliances before enabling hybrid PQC — firmware updates required",
      ],
      references: [
        { title: "IETF Draft: Hybrid Key Exchange in TLS 1.3", url: "https://datatracker.ietf.org/doc/html/draft-ietf-tls-hybrid-design" },
        { title: "Google Security Blog: Protecting Chrome Traffic with Hybrid PQKEM", url: "https://security.googleblog.com/2023/08/protecting-chrome-traffic-with-hybrid.html" },
      ],
    },
    quiz: {
      questions: [
        { id: "quantum-d08-q1", type: "Core Idea", challenge: "Hybrid principle.", text: "What is the security guarantee of hybrid cryptography?", options: ["Security holds as long as either the classical or the post-quantum component remains unbroken","It is twice as fast","It needs no keys","It removes certificates"], correctIndex: 0, explanation: "Combining classical and PQC means an attacker must break both — robust during the transition." },
        { id: "quantum-d08-q2", type: "Implementation", challenge: "TLS 1.3 hybrid.", text: "How is hybrid key exchange realized in TLS 1.3?", options: ["Both classical and PQC shared secrets are combined in the key derivation (e.g., X25519 + ML-KEM)","Only ML-KEM is used","RSA encrypts the PQC key","The PQC key replaces the handshake"], correctIndex: 0, explanation: "TLS 1.3 derives keys from both secrets, so neither alone unlocks the session." },
        { id: "quantum-d08-q3", type: "Real World", challenge: "Chrome deployment.", text: "What was significant about Google Chrome's X25519Kyber768 rollout?", options: ["It was the first mass-scale deployment of hybrid post-quantum key exchange","It removed TLS from Chrome","It broke all websites","It mandated QKD"], correctIndex: 0, explanation: "Chrome's X25519Kyber768 brought hybrid PQC to billions of connections — the first at scale." },
        { id: "quantum-d08-q4", type: "Pitfall", challenge: "Middlebox impact.", text: "What real-world problem can hybrid handshakes trigger with network middleboxes?", options: ["Larger handshake messages can be dropped or mangled by middleboxes intolerant of new sizes","Middleboxes get faster","Certificates disappear","QBER spikes"], correctIndex: 0, explanation: "Bigger ClientHello/handshake sizes from PQC can break brittle middleboxes — a known deployment hazard." },
        { id: "quantum-d08-q5", type: "Validation", challenge: "Checking activation.", text: "When validating a hybrid TLS deployment, what do you verify first?", options: ["That the hybrid key exchange (e.g., X25519MLKEM768) actually negotiates on connections","That RSA is disabled globally","That logs are deleted","That ports are closed"], correctIndex: 0, explanation: "Confirming the hybrid group is negotiated proves PQC is actually in the handshake." },
        { id: "quantum-d08-q6", type: "Concept", challenge: "Why IETF-recommended.", text: "Why does the IETF recommend hybrid as the transition architecture?", options: ["It hedges against immature PQC implementations while delivering quantum resistance now","Because RSA is permanent","Because PQC alone is illegal","To slow adoption"], correctIndex: 0, explanation: "Hybrid keeps a trusted classical algorithm in place while PQC implementations harden." },
        { id: "quantum-d08-q7", type: "Validation", challenge: "Handshake size.", text: "Why measure handshake size during hybrid validation?", options: ["Larger PQC messages can fragment or exceed limits, affecting compatibility and performance","Smaller is always insecure","Size has no effect","It sets the AES key"], correctIndex: 0, explanation: "PQC inflates handshakes; measuring size flags fragmentation and middlebox compatibility risks." },
        { id: "quantum-d08-q8", type: "Defense", challenge: "Smooth rollout.", text: "What practice de-risks a hybrid TLS rollout across an agency?", options: ["Staged deployment with middlebox compatibility testing and monitoring of negotiated groups","Flip every server at once with no testing","Disable monitoring","Use RSA-1024 as backup"], correctIndex: 0, explanation: "Phased rollout plus compatibility testing catches middlebox and fragmentation issues before they spread." },
      ],
    },
    ctf: {
      scenario: "You're validating a hybrid TLS deployment across a federal agency's web infrastructure. Check for hybrid key exchange activation, middlebox compatibility, and handshake size impacts.",
      hint: "Test hybrid key exchange, check middlebox compatibility, then validate configuration.",
      hints: [
        "Read the hybrid deployment checklist. Run: cat hybrid-checklist.txt",
        "Test hybrid key exchange on the TLS endpoint. Run: hybrid-tls-check agency.gov",
        "Confirm both classical and PQC shares combine into the session secret. Run: keyshare-verify agency.gov",
        "Check middlebox compatibility. Run: middlebox-scan --network agency-perimeter",
        "Run 'assemble' to submit the hybrid validation report",
      ],
      fragments: [
        { trigger: "/hybrid-checklist.txt", value: "FLAG{HYBRID_", label: "Hybrid Deployment Checklist" },
        { trigger: "hybrid-tls-check", value: "CLASSICAL_", label: "Hybrid TLS — Key Exchange Verified" },
        { trigger: "keyshare-verify", value: "PQC_", label: "Key Share Verified — Combined Secret Confirmed" },
        { trigger: "middlebox-scan", value: "PARALLEL}", label: "Middlebox Scan — Compatibility Assessment" },
      ],
      files: {
        "/hybrid-checklist.txt": [
          "HYBRID TLS DEPLOYMENT VALIDATION",
          "Target: agency.gov (federal web infrastructure)",
          "Algorithm: X25519+ML-KEM-768 (IANA 0x11EC)",
          "Tests: Key exchange verification, middlebox compatibility, MTU impact.",
          "Sequence: hybrid-tls-check → middlebox-scan → assemble",
        ].join("\n"),
      },
      dirs: { "/": [{ name: "hybrid-checklist.txt", isDir: false }] },
      extraCommands: {
        "hybrid-tls-check": (_args: string[]) => ({
          lines: [
            "Testing hybrid TLS 1.3 on agency.gov:443...",
            "  Server Temp Key: X25519MLKEM768, 1216 bits",
            "  Key exchange: HYBRID (X25519 classical + ML-KEM-768 post-quantum)",
            "  ClientHello key_share extension: 1216 bytes (was 32 bytes pre-hybrid)",
            "  Hybrid key derivation: HKDF(X25519_SS || ML-KEM_SS) ✅",
            "  HNDL protection: ACTIVE ✅",
            "  Backward compat: RSA cert still presented for legacy clients ✅",
            "Fragment collected.",
          ],
        }),
        "keyshare-verify": (_args: string[]) => ({
          lines: [
            "Verifying the hybrid key_share on agency.gov:443...",
            "  client_hello offered X25519MLKEM768; server selected it",
            "  classical share present: X25519 (32 B) ✓",
            "  PQC share present: ML-KEM-768 ciphertext (1088 B) ✓",
            "  derived secret = KDF(ss_x25519 || ss_mlkem) — both contribute",
            "  forcing classical-only fallback still negotiates → no downgrade trap",
            "Both shares confirmed in the derived secret; hybrid is genuine.",
            "Next: middlebox-scan --network agency-perimeter",
            "",
            ">> LEARN: 'Hybrid negotiated' is not 'hybrid effective'",
            "   Verify BOTH shares actually feed the KDF — a misconfig can advertise the",
            "   group yet derive from only the classical half, silently losing PQC.",
            "   Inspect the key schedule, don't trust the negotiated name alone.",
          ],
        }),
        "middlebox-scan": (_args: string[]) => ({
          lines: [
            "Scanning agency-perimeter for hybrid TLS compatibility...",
            "Palo Alto NGFW PA-5450 (firmware 11.1.2): ✅ COMPATIBLE",
            "Fortinet FortiGate 600F (firmware 7.2.3):",
            "  ⚠️  INCOMPATIBLE — drops ClientHello > 512 bytes",
            "  Fix: Update to firmware 7.4.1 — available now",
            "F5 BIG-IP LTM (version 15.1.9): ✅ COMPATIBLE",
            "Cisco ASA 9.19(1): ⚠️  NOT TESTED — upgrade to 9.21+ recommended",
            "",
            "Action required: Update FortiGate firmware before hybrid goes live.",
            "Estimated traffic impact if not fixed: ~12% of agency traffic blocked.",
            "Fragment collected.",
          ],
        }),
      },
    },
  },

  // ─── quantum-d09: Quantum-Safe Architecture ───────────────────────────────────
  {
    epochId: "quantum-4",
    wonder: { name: "Let's Encrypt Certificate Authority", location: "San Francisco, California, USA", era: "2024 CE", emoji: "🏗️" },
    id: "quantum-d09",
    order: 9,
    title: "Quantum-Safe Architecture",
    subtitle: "Crypto Agility — Design Systems for Algorithm Evolution",
    category: "cybersecurity",
    xp: 170,
    badge: { id: "badge-qrm-arch", name: "Quantum-Safe Architect", emoji: "🏗️" },
    challengeType: "ctf",
    info: {
      tagline: "Crypto agility — the ability to swap algorithms without redesigning systems — is the defining architectural principle of the post-quantum era.",
      year: 2024,
      overview: [
        "If there's one idea to carry out of this entire epoch, it's this stage's: the goal is not to swap RSA for ML-KEM once, it's to never be trapped by a single algorithm again. Quantum-safe architecture treats cryptographic agility as a first-class design property — the ability to update algorithms across your systems *without redesigning the systems themselves*. Concretely that means cryptography reached only through abstract interfaces rather than hardcoded library calls, centralized key management that can hold several algorithm types at once, and certificate pipelines that can mint a cert in any supported algorithm on demand. The organizations that built this for the SHA-1 and TLS migrations are sailing through the quantum one; the ones who hardcoded will rebuild from scratch — again.",
        "This isn't aspirational hand-waving; it's a documented design requirement, and it decomposes into three buildable components. NIST SP 800-218 and SP 800-57 Part 2 both call for crypto agility, realized through: a cryptographic service abstraction layer (CSAL) that turns algorithm-agnostic requests ('encrypt this') into specific algorithm calls, so the choice lives in configuration not code; a key management system (KMS) that stores every key tagged with algorithm metadata and supports rotation, so you always know what protects what; and a certificate authority capable of issuing in multiple formats — RSA, ML-DSA, or composite certificates carrying both. Together they turn 'change our cryptography' from a re-architecture into a config change, which is the entire point.",
        "The architecture also has to respect a hierarchy of urgency rooted in key lifetime — and getting this ordering wrong wastes the whole effort. TLS session keys are ephemeral: generated per connection and discarded seconds later, so migrating them to PQC protects all future sessions essentially the moment you flip the switch. The genuinely urgent keys are the long-lived ones — CA root keys, HSM master keys, SSH host keys, code-signing keys — that may stay valid for years or decades. These migrate *first*, and the reason is catastrophic asymmetry: a compromised CA root key doesn't just expose future traffic, it lets an attacker forge every certificate that root has *ever* signed, retroactively dissolving trust you thought was settled. Agility tells you *how* to migrate without pain; key lifetime tells you *what* to migrate first. Master both and you've internalized quantum risk management.",
      ],
      technical: {
        title: "Cryptographic Agility Implementation Patterns",
        body: [
          "A cryptographic abstraction layer decouples algorithm choice from code:\n- Define a CryptoProvider interface — Sign, Verify, KEM_Encapsulate, KEM_Decapsulate — with implementations like RsaProvider, EcdsaProvider, MlKemProvider, MlDsaProvider.\n- Algorithm selection comes from configuration, not hardcoded imports, so you can swap ML-KEM-768 for ML-KEM-1024 or a future algorithm without touching application code.",
          "A PQC-agile KMS manages the key lifecycle around quantum risk:\n- Tag each key with algorithm, key size, creation date, rotation schedule, and quantum-vulnerability rating, and automate proactive rotation of V1 (quantum-vulnerable) keys before Q-Day.\n- Use dual-signing during transition — sign artifacts with both RSA and ML-DSA — so verifiers can validate with whichever algorithm they support.",
        ],
        codeExample: {
          label: "Crypto agility layer — algorithm-agnostic signing interface",
          code: `from abc import ABC, abstractmethod
import os

class CryptoProvider(ABC):
    """Algorithm-agnostic crypto interface — swap via config, not code rewrite."""

    @abstractmethod
    def sign(self, data: bytes, private_key: bytes) -> bytes: ...

    @abstractmethod
    def verify(self, signature: bytes, data: bytes, public_key: bytes) -> bool: ...

    @property
    @abstractmethod
    def algorithm_id(self) -> str: ...

class MlDsaProvider(CryptoProvider):
    """FIPS 204 ML-DSA-65 implementation via liboqs."""

    def __init__(self):
        import oqs
        self._sig = oqs.Signature("ML-DSA-65")

    def sign(self, data: bytes, private_key: bytes) -> bytes:
        return self._sig.sign(data)

    def verify(self, signature: bytes, data: bytes, public_key: bytes) -> bool:
        return self._sig.verify(data, signature, public_key)

    @property
    def algorithm_id(self) -> str:
        return "ML-DSA-65"

CRYPTO_PROVIDERS = {
    "rsa2048":    lambda: RsaProvider(),    # V1 — quantum-vulnerable
    "ecdsa-p256": lambda: EcdsaProvider(),  # V1 — quantum-vulnerable
    "ml-dsa-65":  lambda: MlDsaProvider(),  # FIPS 204 — quantum-safe
}

def get_provider() -> CryptoProvider:
    alg = os.environ.get("CRYPTO_ALGORITHM", "ml-dsa-65")
    return CRYPTO_PROVIDERS[alg]()

# Application code never references specific algorithm
provider = get_provider()
signature = provider.sign(document_bytes, private_key)`,
        },
      },
      incident: {
        title: "Let's Encrypt — 350 Million Certificates, Crypto Agility Done Right",
        when: "2015–2024",
        where: "Let's Encrypt Certificate Authority — 350M+ certificates issued",
        impact: "Transitioned from RSA to ECDSA root CAs without disrupting subscribers — the PQC migration model",
        body: [
          "Let's Encrypt has issued 350M+ TLS certificates, and its 2021 root transition shows agility done right:\n- It moved from RSA-2048 roots to ECDSA P-384 roots (E1 and E2) without disrupting any subscriber, because crypto agility was built into the CA from the start.\n- The ACME protocol (RFC 8555) supports algorithm negotiation, so clients request RSA or ECDSA by capability and the infrastructure mints any supported algorithm on demand.",
          "That architecture positions it well for PQC:\n- Let's Encrypt has publicly committed to evaluating ML-DSA issuance; because algorithm selection is a config parameter, not a hardcoded detail, it can add ML-DSA and start issuing hybrid or PQC-only certs as soon as browsers verify ML-DSA.\n- It contrasts sharply with legacy enterprise CAs that bake algorithm assumptions into database schemas and certificate templates — those face multi-year PKI redesign projects.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Crypto Abstraction Layer", sub: "Algorithm selection via config", type: "system" },
          { label: "Agile KMS", sub: "Keys tagged with algorithm + vulnerability tier", type: "system" },
          { label: "Multi-Algorithm CA", sub: "RSA + ML-DSA issuance on demand", type: "result" },
          { label: "Root CA First", sub: "Migrate root CA → everything inherits", type: "attacker" },
        ],
      },
      timeline: [
        { year: 2015, event: "Let's Encrypt launches with crypto-agile ACME infrastructure" },
        { year: 2021, event: "Let's Encrypt transitions to ECDSA P-384 root CAs without disruption" },
        { year: 2023, event: "NIST SP 800-218 formalizes crypto agility as design requirement" },
        { year: 2024, event: "Let's Encrypt evaluates ML-DSA issuance timeline", highlight: true },
        { year: 2026, event: "Expected: major browser support for ML-DSA certificate verification" },
      ],
      keyTakeaways: [
        "Crypto agility = abstract algorithm from application logic — swap via config, not code rewrite",
        "Root CA migration is highest-priority PKI task — all certificates it issues inherit its algorithm",
        "Let's Encrypt's agile ACME architecture is the model — algorithm as config parameter",
        "Long-lived keys (root CAs, HSM master keys) must migrate first; ephemeral TLS keys migrate automatically",
      ],
      references: [
        { title: "NIST SP 800-218: Secure Software Development Framework", url: "https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-218.pdf" },
        { title: "Let's Encrypt ECDSA Migration", url: "https://letsencrypt.org/2020/09/17/new-root-and-intermediates.html" },
      ],
    },
    quiz: {
      questions: [
        { id: "quantum-d09-q1", type: "Core Idea", challenge: "Agility defined.", text: "What is cryptographic agility?", options: ["The ability to swap algorithms without redesigning systems","Encrypting data twice","Generating keys faster","Using only RSA"], correctIndex: 0, explanation: "Agility is the architectural property that lets you change algorithms via configuration, not rewrites." },
        { id: "quantum-d09-q2", type: "Real World", challenge: "Let's Encrypt model.", text: "Why is Let's Encrypt (350M+ certificates) cited as 'crypto agility done right'?", options: ["Automated, short-lived certificate issuance/renewal makes algorithm changes routine at scale","It never rotates certificates","It uses manual issuance only","It avoids automation"], correctIndex: 0, explanation: "Automation and short lifetimes let Let's Encrypt evolve crypto across hundreds of millions of certs smoothly." },
        { id: "quantum-d09-q3", type: "Architecture", challenge: "Agility layer.", text: "In a quantum-safe PKI, what is the role of a crypto agility layer?", options: ["An abstraction that lets the algorithm be selected/swapped via configuration","A hardcoded RSA module","A backup tape system","A QKD relay"], correctIndex: 0, explanation: "The agility layer decouples applications from specific algorithms, enabling clean migration." },
        { id: "quantum-d09-q4", type: "Strategy", challenge: "CA migration order.", text: "In what order should a PKI migrate to PQC?", options: ["Root first (longest validity, broadest trust), then intermediates, then end-entity certs","Leaf certs first, root last","Random order","Only intermediates"], correctIndex: 0, explanation: "Long-lived, high-trust roots are migrated first; the hierarchy follows." },
        { id: "quantum-d09-q5", type: "Standards", challenge: "Key management ref.", text: "Which NIST publication guides the key-management practices validated in the PKI design?", options: ["NIST SP 800-57 (key management)","FIPS 197 (AES)","RFC 1918","PCI-DSS"], correctIndex: 0, explanation: "SP 800-57 provides key-management lifecycle guidance for the PKI architecture." },
        { id: "quantum-d09-q6", type: "Concept", challenge: "Why automation.", text: "Why is automation central to crypto agility?", options: ["Manual rotation can't scale; automated issuance/renewal makes algorithm changes feasible across large fleets","Automation weakens security","Manual is always safer","It eliminates the need for keys"], correctIndex: 0, explanation: "At scale, only automated lifecycles make frequent algorithm changes practical and reliable." },
        { id: "quantum-d09-q7", type: "Architecture", challenge: "Short lifetimes.", text: "How do short certificate lifetimes support agility?", options: ["Frequent renewal means new algorithms roll out naturally as certs cycle","They prevent renewal","They lock in the current algorithm","They disable revocation"], correctIndex: 0, explanation: "Short-lived certs let an algorithm change propagate quickly through normal renewal." },
        { id: "quantum-d09-q8", type: "Defense", challenge: "Designing for the future.", text: "Why is agility the 'defining architectural principle' of the post-quantum era?", options: ["Algorithms will keep changing and some will break; agility lets systems adapt without redesign","Because RSA is final","Because PQC never changes","To reduce key sizes only"], correctIndex: 0, explanation: "Given ongoing algorithm evolution and breaks (e.g., SIKE), adaptability is the core design goal." },
      ],
    },
    ctf: {
      scenario: "You're designing the quantum-safe PKI architecture for a healthcare organization. Define the crypto agility layer, plan the CA migration order, and validate against NIST SP 800-57.",
      hint: "Review the current PKI, design the agility layer, then plan the CA migration sequence.",
      hints: [
        "Read the current PKI architecture. Run: cat pki-current.txt",
        "Design the crypto agility layer. Run: arch-design --agility-layer",
        "Define the algorithm negotiation and fallback policy. Run: arch-negotiate",
        "Plan the CA migration sequence. Run: arch-ca-migration-plan --priority root-first",
        "Run 'assemble' to submit the quantum-safe architecture design",
      ],
      fragments: [
        { trigger: "/pki-current.txt", value: "FLAG{QSAFE_", label: "Current PKI Architecture Review" },
        { trigger: "arch-design", value: "ARCH_", label: "Crypto Agility Layer Design" },
        { trigger: "arch-negotiate", value: "AGILE_", label: "Negotiation + Fallback Policy Defined" },
        { trigger: "arch-ca-migration-plan", value: "PKI_DESIGN}", label: "CA Migration Sequence Plan" },
      ],
      files: {
        "/pki-current.txt": [
          "HEALTHCARE ORG — CURRENT PKI ARCHITECTURE",
          "Root CA: RSA-4096 (offline, 20-year cert, expires 2030)",
          "Intermediate CA: RSA-2048 (online, 5-year cert, expires 2027)",
          "Leaf certs: RSA-2048 (1-year, auto-renewed via ACME)",
          "HSM: Thales Luna 7 (RSA key store, firmware 7.8.4)",
          "Algorithm selection: hardcoded in CA config — NOT crypto-agile",
          "Sequence: arch-design → arch-ca-migration-plan → assemble",
        ].join("\n"),
      },
      dirs: { "/": [{ name: "pki-current.txt", isDir: false }] },
      extraCommands: {
        "arch-design": (_args: string[]) => ({
          lines: [
            "Designing crypto agility layer for healthcare PKI...",
            "",
            "Layer 1: Cryptographic Service Abstraction",
            "  - Define CryptoProvider interface: Sign, Verify, KEM_Enc, KEM_Dec",
            "  - Implementations: RsaProvider, MlKemProvider, MlDsaProvider, CompositeProvider",
            "  - Algorithm selection via CRYPTO_ALGORITHM env var — no code changes to swap",
            "",
            "Layer 2: Agile Key Management System",
            "  - Tag all keys with: algorithm, created, rotates, vulnerability_tier",
            "  - Support simultaneous RSA + ML-DSA key pair storage",
            "  - Automate rotation for V1 keys per migration schedule",
            "  - HSM upgrade: Thales Luna 7 firmware 8.0+ supports ML-DSA",
            "",
            "Layer 3: Multi-Algorithm CA",
            "  - Update EJBCA to issue RSA + ML-DSA certs via same ACME endpoint",
            "  - Composite cert: embed both RSA and ML-DSA keys in X.509 extension",
            "  - ACME algorithm negotiation: client requests algorithm; CA issues matching cert",
            "Fragment collected.",
          ],
        }),
        "arch-negotiate": (_args: string[]) => ({
          lines: [
            "Defining the algorithm negotiation and fallback policy...",
            "  preference order: hybrid (X25519MLKEM768) → classical (X25519)",
            "  signature preference: ML-DSA-65 → ECDSA-P256 during transition",
            "  downgrade protection: pin minimum, log any classical fallback",
            "  per-peer capability cache so re-handshakes skip renegotiation",
            "Negotiation policy set — graceful interop without silent downgrade.",
            "Next: arch-ca-migration-plan --priority root-first",
            "",
            ">> LEARN: Agility needs an explicit negotiation policy",
            "   The agility layer is only safe if fallback is bounded and logged —",
            "   otherwise a downgrade attack quietly drops you back to classical.",
            "   Define preference order AND a monitored floor, not just 'try both'.",
          ],
        }),
        "arch-ca-migration-plan": (_args: string[]) => ({
          lines: [
            "CA MIGRATION SEQUENCE — QUANTUM-SAFE PKI (NIST SP 800-57 compliant)",
            "",
            "Step 1 (2025 Q1): HSM firmware upgrade → Thales Luna 7 firmware 8.0",
            "  - Enables ML-DSA key generation; zero downtime — RSA + ML-DSA concurrent",
            "",
            "Step 2 (2025 Q2): New Root CA — ML-DSA-87 (level 5, 30-year cert)",
            "  - Cross-sign with existing RSA-4096 root (hybrid trust for transition)",
            "  - Distribute to all trust stores: Windows, macOS, Java, browsers",
            "",
            "Step 3 (2025 Q3): New Intermediate CA — ML-DSA-65",
            "  - Issue intermediate cert from ML-DSA-87 root",
            "  - Begin issuing composite leaf certs (RSA + ML-DSA) via ACME",
            "",
            "Step 4 (2026): Migrate leaf certs — 1-year renewal cycle, all 14,000 rotate naturally",
            "",
            "Step 5 (2028): Retire RSA root CA — RSA-4096 root expires 2030, retire 2028",
            "Fragment collected.",
          ],
        }),
      },
    },
  },

  // ─── quantum-d10: Supply Chain Quantum Risk ───────────────────────────────────
  {
    epochId: "quantum-4",
    wonder: { name: "CISA ICT Supply Chain Risk Management Task Force", location: "Washington, D.C., USA", era: "2024 CE", emoji: "🔍" },
    id: "quantum-d10",
    order: 10,
    title: "Third-Party Quantum Risk",
    subtitle: "Vendor Quantum Assessment & Supply Chain Cryptography",
    category: "cybersecurity",
    xp: 170,
    badge: { id: "badge-qrm-supply", name: "Quantum Supply Chain Auditor", emoji: "🔍" },
    challengeType: "ctf",
    info: {
      tagline: "Your quantum risk is only as good as your vendors'. A CRQC-resistant system connected to an RSA-dependent supplier is still vulnerable.",
      year: 2024,
      overview: [
        "The final stage delivers the uncomfortable truth that humbles every migration program: you can make your own house perfectly quantum-safe and still be exposed, because your cryptography doesn't stop at your perimeter. Third-party and supply-chain quantum risk is among the least-addressed parts of PQC migration precisely because it's the part you don't directly control. Migrate every internal system flawlessly, but if you still exchange sensitive data with a supplier over an RSA-encrypted channel, that exchange remains fully HNDL-vulnerable — and the harvesting doesn't care which end was negligent. B2B integrations (SOAP, REST, EDI, SFTP) overwhelmingly run RSA-2048 TLS with no PQC roadmap, for the simple reason that nobody ever asked the vendor for one. CISA's supply-chain guidance now explicitly folds cryptographic-dependency assessment into third-party risk management for exactly this gap.",
        "The remedy is to extend the CBOM discipline outward, across your boundaries, as CISA's ICT Supply Chain Risk Management Task Force recommends. Inventory every external cryptographic touchpoint — each API integration, SFTP feed, B2B VPN tunnel, and EDI exchange — and document the algorithms each one actually uses, the same way you mapped your internal estate. Then make your suppliers answer for theirs with a vendor PQC questionnaire that asks the pointed questions: Have you completed a cryptographic inventory? Do you have a NIST PQC roadmap with a target migration date? Do you support hybrid TLS today? And what's your SLA for rolling out a cryptographic algorithm change when one is required? Their answers don't just inform your risk register — they become contractual leverage and early warning of which partner will gate your timeline.",
        "And the hardest supply-chain risk of all is the one literally etched into silicon, where no questionnaire or firmware patch can save you. HSMs, smart cards, TPM chips, and TLS accelerators carry their algorithm assumptions in hardware — a TPM 2.0 chip manufactured before 2024 almost certainly supports RSA and ECC but not ML-KEM or ML-DSA, and crucially *cannot be firmware-upgraded* to add them, because the cryptographic primitives are fixed in the chip's logic. That converts part of your quantum migration from a software project into a procurement-and-replacement project measured in hardware refresh cycles. The two durable lessons: write PQC algorithm support into your hardware procurement specifications *now*, so everything you buy from today forward is already capable, and plan — and budget — for physical hardware replacement, not updates, wherever cryptography lives in silicon. That long lead time is why supply-chain quantum risk has to be on the program plan from day one, not discovered at the end.",
      ],
      technical: {
        title: "Vendor PQC Assessment Questionnaire and Scoring",
        body: [
          "A structured vendor quantum-risk assessment scores five domains:\n- Cryptographic inventory (CBOM done? 0/5/10), migration roadmap (published timeline? 0/5/10), and current hybrid support (X25519+ML-KEM-768 on shared TLS? 0/10).\n- Contract commitment (committed to a PQC date? 0/10) and hardware lifecycle (do shared devices support PQC upgrade? 0/5/10).",
          "Then segment vendors by criticality and act accordingly:\n- Tier 1 (critical exchange, >$10M/day or >10k sensitive records) — require a vendor CBOM and a signed PQC migration commitment within 90 days.\n- Tier 2 (significant exchange) — require questionnaire completion within 180 days; Tier 3 (low sensitivity/volume) — fold PQC support into standard contract renewal language.",
        ],
        codeExample: {
          label: "Automated vendor PQC endpoint scanner",
          code: `#!/usr/bin/env python3
"""Scan vendor TLS endpoints for PQC support status."""
import subprocess
from dataclasses import dataclass, field

@dataclass
class VendorPqcStatus:
    vendor: str
    endpoint: str
    hybrid_tls: bool = False
    risk_level: str = "HIGH"
    notes: list = field(default_factory=list)

def scan_vendor_endpoint(vendor: str, endpoint: str) -> VendorPqcStatus:
    result = subprocess.run(
        ["openssl", "s_client", "-groups", "x25519_mlkem768:x25519:secp384r1",
         "-connect", endpoint, "-brief", "-tls1_3"],
        capture_output=True, text=True, timeout=15, input=""
    )
    output = result.stderr + result.stdout
    server_key_line = next(
        (l for l in output.splitlines() if "Server Temp Key" in l), ""
    )
    hybrid = any(kw in server_key_line.upper() for kw in ["MLKEM", "KYBER"])
    status = VendorPqcStatus(vendor=vendor, endpoint=endpoint)
    status.hybrid_tls = hybrid
    status.risk_level = "ACCEPTABLE" if hybrid else "HIGH"
    if not hybrid:
        status.notes.append("RSA/ECDH only — HNDL vulnerable. Issue PQC questionnaire.")
    else:
        status.notes.append("Hybrid PQC active — HNDL protected.")
    return status

for vendor, endpoint in [
    ("EHR Vendor A", "ehr-vendor.com:443"),
    ("Lab System B", "lab-api.partner.com:443"),
]:
    s = scan_vendor_endpoint(vendor, endpoint)
    print(f"{s.vendor}: PQC={s.hybrid_tls} | {s.risk_level} | {s.notes[0]}")`,
        },
      },
      incident: {
        title: "SWIFT gpi — Coordinating PQC Migration Across 11,000 Banks",
        when: "2022–2027",
        where: "SWIFT global financial messaging network — 11,000 member institutions",
        impact: "11,000 institutions require coordinated cryptographic migration — the world's largest supply chain PQC challenge",
        body: [
          "SWIFT carries $5 trillion in daily settlement among 11,000 institutions in 200 countries — on quantum-vulnerable crypto:\n- The network uses RSA and 3DES for message signing and encryption, which CNSA 2.0 and NIST PQC standards flag as vulnerable.\n- Migrating it is among the world's most complex supply-chain crypto challenges: all 11,000 members must update SWIFT Alliance Access software, HSMs, and TLS at once, because SWIFT requires every party to a transaction to use the same algorithms.",
          "SWIFT is coordinating the migration, and that becomes everyone's constraint:\n- It stood up a PQC working group in 2022, is building post-quantum versions of FIN and ISO 20022 messaging, and targets hybrid TLS for the network by 2026–2027.\n- The lesson for connected organizations: your migration date isn't fully your own — it's bounded by SWIFT's schedule, the archetypal supply-chain quantum risk where your completion depends on your ecosystem's.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Your PQC System", sub: "Internal migration complete", type: "result" },
          { label: "Vendor: RSA TLS", sub: "B2B channel still HNDL vulnerable", type: "attacker" },
          { label: "Vendor Questionnaire", sub: "CBOM + PQC roadmap required", type: "system" },
          { label: "Contract SLA", sub: "Signed PQC migration commitment", type: "result" },
        ],
      },
      timeline: [
        { year: 2022, event: "SWIFT establishes PQC working group — 11,000 institutions" },
        { year: 2023, event: "CISA supply chain guidance includes cryptographic dependency assessment" },
        { year: 2024, event: "TPM 2.0 Forum begins specifying PQC algorithm extensions", highlight: true },
        { year: 2026, event: "SWIFT target: hybrid PQC TLS deployment across network" },
        { year: 2028, event: "Target: all Tier 1 vendors provide signed PQC migration commitment" },
      ],
      keyTakeaways: [
        "Supply chain quantum risk: your PQC system + RSA vendor channel = still HNDL vulnerable",
        "Vendor questionnaire covers: CBOM status, migration roadmap, hybrid TLS support, contract commitment",
        "Pre-2024 TPM/HSM chips may not support ML-KEM — plan hardware replacement, not just firmware",
        "SWIFT shows ecosystem coordination required — your migration may depend on vendor timelines",
      ],
      references: [
        { title: "CISA ICT Supply Chain Risk Management", url: "https://www.cisa.gov/supply-chain" },
        { title: "SWIFT PQC Working Group", url: "https://www.swift.com/" },
      ],
    },
    quiz: {
      questions: [
        { id: "quantum-d10-q1", type: "Core Idea", challenge: "Vendor risk.", text: "Why is your quantum risk 'only as good as your vendors'?", options: ["A quantum-safe system connected to an RSA-dependent supplier is still exposed through that link","Vendors never use crypto","Vendors are always compliant","Supply chains have no crypto"], correctIndex: 0, explanation: "A weak vendor link reintroduces quantum-vulnerable cryptography into your trust chain." },
        { id: "quantum-d10-q2", type: "Assessment", challenge: "Vendor questionnaire.", text: "What does a vendor PQC assessment questionnaire evaluate?", options: ["The vendor's crypto inventory, PQC roadmap, and migration timeline","The vendor's office size","The vendor's marketing budget","The vendor's stock price"], correctIndex: 0, explanation: "Scoring vendors on inventory, roadmap, and timeline reveals supply-chain quantum exposure." },
        { id: "quantum-d10-q3", type: "Real World", challenge: "SWIFT gpi.", text: "What does the SWIFT gpi example illustrate about supply-chain PQC?", options: ["Coordinating migration across ~11,000 banks is a massive, interdependent undertaking","One bank can migrate alone with no coordination","SWIFT uses no cryptography","Migration is trivial"], correctIndex: 0, explanation: "Interconnected networks like SWIFT require coordinated migration across thousands of participants." },
        { id: "quantum-d10-q4", type: "Assessment", challenge: "Scanning vendors.", text: "How can a third-party risk lead objectively measure vendor PQC readiness?", options: ["Scan vendor TLS endpoints to see deployed algorithms, then score readiness","Trust the vendor's brochure","Assume all vendors are ready","Check their logo"], correctIndex: 0, explanation: "Endpoint scanning provides evidence-based readiness scoring beyond self-attestation." },
        { id: "quantum-d10-q5", type: "Strategy", challenge: "Remediation requirements.", text: "After scoring a lagging vendor, what is the appropriate action?", options: ["Issue remediation requirements with timelines as part of the contract/risk program","Ignore it","Immediately terminate all vendors","Wait until Q-Day"], correctIndex: 0, explanation: "Documented remediation requirements and deadlines drive vendors toward quantum readiness." },
        { id: "quantum-d10-q6", type: "Concept", challenge: "Trust chain.", text: "Why does a single RSA-dependent supplier undermine an otherwise quantum-safe system?", options: ["Data shared over that link inherits the supplier's quantum vulnerability","It doesn't matter","RSA is quantum-safe","Suppliers are out of scope"], correctIndex: 0, explanation: "Security is end-to-end; the weakest cryptographic link defines the system's real exposure." },
        { id: "quantum-d10-q7", type: "Assessment", challenge: "Coordination need.", text: "What does the SWIFT gpi case teach about interconnected migration?", options: ["Network participants must coordinate timelines so hybrid/PQC interoperate during transition","Each bank ignores the others","Coordination is unnecessary","Only SWIFT migrates"], correctIndex: 0, explanation: "Interoperability during transition requires coordinated, compatible migration across participants." },
        { id: "quantum-d10-q8", type: "Defense", challenge: "Program design.", text: "What makes a third-party quantum risk program effective?", options: ["Evidence-based scoring, contractual remediation requirements, and ongoing reassessment","A one-time email survey","Trusting all attestations","Removing vendors from scope"], correctIndex: 0, explanation: "Objective scoring plus enforceable, monitored remediation closes supply-chain quantum gaps." },
      ],
    },
    ctf: {
      scenario: "You're the third-party risk lead conducting a quantum vendor assessment program. Scan vendor TLS endpoints, score vendor PQC readiness, and issue remediation requirements.",
      hint: "Inventory vendor connections, scan their TLS, score readiness, then issue requirements.",
      hints: [
        "Read the vendor assessment scope. Run: cat vendor-scope.txt",
        "Scan vendor TLS endpoints for PQC support. Run: vendor-pqc-scan --tier 1",
        "Weight each vendor by the sensitivity of data they hold. Run: vendor-weight",
        "Score vendors and generate remediation requirements. Run: vendor-pqc-score",
        "Run 'assemble' to submit the third-party quantum risk report",
      ],
      fragments: [
        { trigger: "/vendor-scope.txt", value: "FLAG{SUPPLY_", label: "Vendor Assessment Scope" },
        { trigger: "vendor-pqc-scan", value: "CHAIN_", label: "Vendor TLS Scan — PQC Status" },
        { trigger: "vendor-weight", value: "QUANTUM_", label: "Vendors Weighted — Data Sensitivity Scored" },
        { trigger: "vendor-pqc-score", value: "RISK_MANAGED}", label: "Vendor Scoring — Remediation Issued" },
      ],
      files: {
        "/vendor-scope.txt": [
          "QUANTUM VENDOR ASSESSMENT PROGRAM",
          "Tier 1 Vendors (critical): EHR Vendor, Lab System, Insurance Clearinghouse",
          "Assessment: TLS PQC scan + questionnaire + contract commitment review",
          "Sequence: vendor-pqc-scan → vendor-pqc-score → assemble",
        ].join("\n"),
      },
      dirs: { "/": [{ name: "vendor-scope.txt", isDir: false }] },
      extraCommands: {
        "vendor-pqc-scan": (_args: string[]) => ({
          lines: [
            "Scanning Tier 1 vendor TLS endpoints for PQC support...",
            "",
            "EHR Vendor (ehr-vendor.com:443):",
            "  Server Temp Key: secp384r1 (ECDH) [NON-PQC — HNDL vulnerable]",
            "  Questionnaire: NOT SUBMITTED | Risk: HIGH",
            "",
            "Lab System (lab-api.partner.com:443):",
            "  Server Temp Key: X25519MLKEM768 [HYBRID PQC — HNDL protected]",
            "  Questionnaire: SUBMITTED (migration ETA 2026) | Risk: ACCEPTABLE",
            "",
            "Insurance Clearinghouse (clearinghouse.edi.com:443):",
            "  Server Temp Key: RSA-2048 (key exchange) [NON-PQC — HNDL vulnerable]",
            "  Questionnaire: IN PROGRESS | Risk: HIGH",
            "Fragment collected.",
          ],
        }),
        "vendor-weight": (_args: string[]) => ({
          lines: [
            "Weighting Tier 1 vendors by the data they hold + access they have...",
            "  payroll processor: PII + bank routing → weight 0.9 (CRITICAL)",
            "  cloud IdP: holds auth tokens / SSO → weight 1.0 (CRITICAL)",
            "  marketing SaaS: low-sensitivity → weight 0.3",
            "  combining weight × PQC-readiness gap = prioritized vendor risk",
            "Weighted vendor risk computed — IdP and payroll rise to the top.",
            "Next: vendor-pqc-score",
            "",
            ">> LEARN: Vendor risk = exposure × access, not just their PQC status",
            "   A non-PQC vendor with trivial data matters less than one holding your",
            "   auth tokens — weight by impact before issuing remediation deadlines.",
            "   Third-party quantum risk is a supply-chain prioritization problem.",
          ],
        }),
        "vendor-pqc-score": (_args: string[]) => ({
          lines: [
            "VENDOR PQC READINESS SCORING",
            "",
            "EHR Vendor: Score 15/50 — HIGH RISK",
            "  Requirement: Submit CBOM within 30 days.",
            "  Requirement: Deploy X25519+ML-KEM-768 on all shared endpoints within 90 days.",
            "  Requirement: Signed PQC migration SLA required for contract renewal.",
            "  Escalation: CISO-level engagement required — contract at risk.",
            "",
            "Lab System: Score 42/50 — ACCEPTABLE",
            "  Commendation: Hybrid PQC deployed. Migration ETA 2026 on track.",
            "  Action: Confirm HSM migration timeline in Q2 review.",
            "",
            "Insurance Clearinghouse: Score 20/50 — HIGH RISK",
            "  Requirement: Complete PQC questionnaire within 14 days.",
            "  Requirement: RSA key exchange must be replaced within 120 days.",
            "  Note: EDI protocol (X12) migration to PQC-TLS required by 2026.",
            "",
            "Summary: 2/3 Tier 1 vendors non-compliant. Escalation required.",
            "Fragment collected.",
          ],
        }),
      },
    },
  },
];

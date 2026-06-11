import type { StageConfig, EpochConfig, CtfConfig } from "./types";

export const quantum5Epoch: EpochConfig = {
  id: "quantum-5",
  name: "Quantum-Safe Migration Engineering",
  subtitle: "PQC in Production — Discovery to Cutover",
  description:
    "The hands-on engineering of post-quantum migration: building a Cryptographic Bill of Materials, designing crypto-agility, deploying hybrid key exchange in TLS/SSH/VPN, migrating PKI and HSMs, integrating PQC libraries, sizing performance, validating against FIPS 140-3, and running a staged cutover with rollback — through to constrained and embedded devices.",
  emoji: "🛠️",
  color: "blue",
  unlocked: true,
};

export const quantum5Stages: StageConfig[] = [
  // ─── quantum-e01: Building the CBOM ──────────────────────────────────────────
  {
    epochId: "quantum-5",
    wonder: { name: "NIST National Cybersecurity Center of Excellence", location: "Rockville, Maryland, USA", era: "2024 CE", emoji: "🔎" },
    id: "quantum-e01",
    order: 1,
    title: "Mapping the Hidden Crypto",
    subtitle: "Building a Cryptographic Bill of Materials (CBOM)",
    category: "cybersecurity",
    xp: 170,
    badge: { id: "badge-qe-cbom", name: "Crypto Cartographer", emoji: "🔎" },
    challengeType: "quiz",
    info: {
      tagline: "You cannot migrate cryptography you cannot see. The first engineering deliverable of a PQC program is a map of every algorithm, key, and certificate you own.",
      year: 2024,
      overview: [
        "Post-quantum migration begins not with an algorithm but with an inventory. Cryptography is buried everywhere — TLS endpoints, code-signing keys, VPN tunnels, database encryption, hardcoded keys in firmware, third-party libraries — and most organizations have never catalogued it. A Cryptographic Bill of Materials (CBOM) is that catalogue: a machine-readable inventory of every cryptographic asset and where it lives.",
        "A useful CBOM records far more than algorithm names, because the name alone can't tell you how urgent a fix is. Each entry needs the algorithm and its parameters (RSA-2048, ECDSA-P256, AES-128, SHA-1), where it's actually used (a protocol, a certificate, a library, a file, a hardware module), the key's purpose and lifetime (signing versus encryption, and crucially how long the data it protects must stay confidential), and the dependency chain — which library or vendor provides it, so you know who has to ship the actual fix. That last field is the one teams forget and the one that decides whether you can remediate yourself or are stuck waiting on someone else's roadmap.",
        "Captured that way, the CBOM stops being a passive inventory and becomes the engine of every later phase — it turns a vague, unbounded threat into a prioritized work queue. Long-lived confidentiality data protected by RSA or ECC key exchange rises to the top, because that's precisely what Harvest-Now-Decrypt-Later is already collecting. Code-signing and firmware roots of trust come next, since they must outlive the hardware they sign and a forged root is catastrophic. And the inventory doesn't have to be a bespoke artifact: CycloneDX 1.6 added a formal `cryptographic-asset` component type, so a CBOM can ride the very same SBOM pipeline you already run — making it something you regenerate continuously rather than assemble once and let rot.",
      ],
      technical: {
        title: "Discovery Techniques and CBOM Structure",
        body: [
          "No single tool finds all cryptography, so discovery layers several techniques:\n- Network scanning — TLS scanners (`sslscan`, `testssl.sh`) enumerate negotiated suites and certificate algorithms on listening services.\n- Static analysis — scan source and binaries for crypto API calls and hardcoded keys (`grep` for `RSA`, `EVP_`, certificate blobs; tools like `cryptobom`/`CodeQL`).\n- Certificate inventory — pull every cert from PKI, ACME, and key stores; record signature algorithm and validity.\n- Traffic and host telemetry — observe which algorithms are actually negotiated in production, not just what is configured.",
          "The output is a structured document, not a spreadsheet, so it can be diffed and automated:\n- CycloneDX 1.6 `cryptographic-asset` components capture algorithm, key size, primitive (`pke`, `signature`, `kem`), and NIST quantum-security level.\n- Each asset links to the `bom-ref` of the component that uses it, preserving the dependency chain.\n- A CBOM is regenerated in CI like an SBOM, so drift (a new RSA key, a resurrected SHA-1 cert) is caught automatically.",
        ],
        codeExample: {
          label: "Scanning a CycloneDX CBOM for quantum-vulnerable assets (jq)",
          code: `# Generate a CBOM with a CycloneDX-aware scanner, then triage it.
# Flag every asset whose primitive is quantum-vulnerable (RSA / ECC / DH).

jq '
  .components[]
  | select(.type == "cryptographic-asset")
  | .cryptoProperties as $c
  | select(
      $c.algorithmProperties.primitive == "pke" or
      $c.algorithmProperties.primitive == "kem" or
      ($c.algorithmProperties.parameterSetIdentifier // "" | test("RSA|EC|secp|DH"))
    )
  | {name, algo: $c.algorithmProperties.parameterSetIdentifier,
     level: $c.algorithmProperties.nistQuantumSecurityLevel}
' cbom.json

# nistQuantumSecurityLevel == 0  ->  no quantum resistance: migrate.`,
        },
      },
      incident: {
        title: "The SHA-1 Sunset — Why You Cannot Migrate What You Cannot Find",
        when: "2017–2023",
        where: "Global PKI and code-signing ecosystems",
        impact: "Years-long, repeatedly-extended deprecation because crypto was embedded in places no one had inventoried",
        body: [
          "SHA-1's deprecation is the cautionary tale every PQC program studies. Although SHA-1 was known broken for years and SHAttered (2017) produced a real collision, removing it took until 2023 and beyond — because no one had a complete inventory:\n- SHA-1 lurked in legacy certificates, signed firmware, Git object hashes, and embedded devices that could not be patched.\n- Each removal attempt broke something nobody knew depended on it.",
          "PQC migration is SHA-1 deprecation at an order of magnitude larger scope, which is why discovery comes first:\n- RSA and ECC are far more pervasive than SHA-1 ever was.\n- The migration deadline (CNSA 2.0, ~2030–2035) is fixed by a threat, not a vendor's convenience.\n- Organizations that built a CBOM early turned an open-ended panic into a finite, trackable backlog — the difference between managing the migration and being surprised by it.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Network + Code Scan", sub: "TLS suites, certs, API calls", type: "system" },
          { label: "Crypto Discovery", sub: "algorithms, keys, libraries", type: "attacker" },
          { label: "CBOM (CycloneDX 1.6)", sub: "machine-readable inventory", type: "result" },
          { label: "Prioritized Backlog", sub: "HNDL + roots of trust first", type: "victim" },
        ],
      },
      timeline: [
        { year: 2017, event: "SHAttered — first practical SHA-1 collision; deprecation still drags for years" },
        { year: 2022, event: "NSA/CISA/NIST quantum-readiness guidance: 'discover where and how you use cryptography' is step one" },
        { year: 2023, event: "CycloneDX 1.6 adds the cryptographic-asset component type — CBOM becomes a standard artifact", highlight: true },
        { year: 2024, event: "NIST FIPS 203/204/205 finalized — the algorithms exist; discovery is the gating constraint" },
      ],
      keyTakeaways: [
        "A CBOM is the first engineering deliverable — you cannot migrate cryptography you have not inventoried",
        "Record algorithm, location, purpose, data shelf-life, and dependency chain — not just algorithm names",
        "Layer discovery: network scanning, static analysis, certificate inventory, and production telemetry",
        "Generate the CBOM in CI (CycloneDX 1.6) so cryptographic drift is caught automatically",
      ],
      references: [
        { title: "CISA: Quantum-Readiness — Migration to Post-Quantum Cryptography", url: "https://www.cisa.gov/resources-tools/resources/quantum-readiness-migration-post-quantum-cryptography" },
        { title: "CycloneDX: Cryptography Bill of Materials (CBOM)", url: "https://cyclonedx.org/capabilities/cbom/" },
      ],
    },
    quiz: {
      questions: [
        { id: "quantum-e01-q1", type: "Core Idea", challenge: "Why discovery first.", text: "Why is building a CBOM the first step of a PQC migration program?", options: ["You cannot migrate cryptographic assets you have not inventoried", "It is required to purchase a quantum computer", "It replaces the need for new algorithms", "It encrypts data automatically"], correctIndex: 0, explanation: "Cryptography is embedded everywhere; a CBOM maps every asset so the migration has a finite, prioritized scope." },
        { id: "quantum-e01-q2", type: "Prioritization", challenge: "What goes first.", text: "Which assets should a CBOM push to the top of the migration backlog?", options: ["Long-lived confidential data protected by RSA/ECC key exchange (HNDL)", "Public marketing images", "Already-expired certificates", "Plaintext log files"], correctIndex: 0, explanation: "Harvest-Now-Decrypt-Later means data with a long confidentiality lifetime is most exposed and migrates first." },
        { id: "quantum-e01-q3", type: "Discovery", challenge: "Finding it all.", text: "Why must crypto discovery layer multiple techniques?", options: ["No single tool finds network, source, certificate, and embedded crypto", "Scanning is illegal without three tools", "It doubles the key length", "One tool would be too fast"], correctIndex: 0, explanation: "Network scans miss hardcoded keys, static analysis misses runtime negotiation — coverage requires several methods." },
        { id: "quantum-e01-q4", type: "Standards", challenge: "The artifact format.", text: "What does CycloneDX 1.6 add that makes a CBOM a standard artifact?", options: ["A cryptographic-asset component type that rides the existing SBOM pipeline", "A new TLS cipher", "A quantum random number generator", "A replacement for HTTPS"], correctIndex: 0, explanation: "CycloneDX 1.6 formalized cryptographic-asset components, so CBOMs are generated and diffed like SBOMs in CI." },
        { id: "quantum-e01-q5", type: "Lesson", challenge: "The SHA-1 parallel.", text: "What does the slow SHA-1 deprecation teach PQC programs?", options: ["Without a complete inventory, removing embedded crypto repeatedly breaks unknown dependencies", "SHA-1 is quantum-safe", "Algorithms never need replacing", "Inventories are optional"], correctIndex: 0, explanation: "SHA-1 lingered for years in un-inventoried places; PQC is far larger, so discovery must come first." },
      ],
    },
  },

  // ─── quantum-e02: Crypto-Agility ─────────────────────────────────────────────
  {
    epochId: "quantum-5",
    wonder: { name: "IETF — Internet Engineering Task Force", location: "Fremont, California, USA", era: "2024 CE", emoji: "🔀" },
    id: "quantum-e02",
    order: 2,
    title: "Swapping Engines Mid-Flight",
    subtitle: "Crypto-Agility by Design — Abstraction & Negotiation",
    category: "cybersecurity",
    xp: 170,
    badge: { id: "badge-qe-agility", name: "Crypto-Agility Architect", emoji: "🔀" },
    challengeType: "quiz",
    info: {
      tagline: "The goal is not to deploy one new algorithm — it is to build systems that can change algorithms again, because the first PQC choice will not be the last.",
      year: 2024,
      overview: [
        "Crypto-agility is the ability to change cryptographic algorithms without re-architecting the system around them. It is the real objective of PQC engineering: ML-KEM and ML-DSA are today's answer, but FN-DSA, future parameter sets, and the response to any newly-discovered weakness will all demand another swap. A system hardcoded to one algorithm has to be rebuilt each time; an agile system negotiates.",
        "Agility isn't a single feature; it's designed in at four cooperating layers. Abstraction means code calls a generic crypto interface (`encrypt`, `sign`) and never a specific algorithm, so the implementation can be swapped underneath without touching the caller. Negotiation means protocols advertise the algorithms they support and pick the best mutual one — exactly the dance TLS already performs with cipher suites. Identifiers mean every algorithm carries a registered OID or code point, so a new one can be slotted in without rewriting the spec. And configuration means the active algorithm is policy, not a compile-time constant, so it can be rolled forward or back operationally. Miss any one layer and the others can't save you — a beautifully abstracted system with hardcoded algorithm IDs still can't add ML-KEM without a release.",
        "Agility is also exactly what makes hybrid migration *safe*, because it lets you hedge instead of bet. A hybrid scheme runs a classical and a PQC algorithm together so that if either one holds, the session stays secure — but the operational value is that agility lets you turn the PQC half on, watch it in production, and turn it back off without a redeploy if something breaks. That on/off switch is the difference between a confident rollout and a terrifying one. The anti-pattern this whole stage warns against is 'rip and replace': swapping RSA for ML-KEM directly in code with no abstraction layer doesn't make you quantum-safe in any durable sense — it simply recreates the original brittleness, leaving you to do the same painful surgery again the next time an algorithm changes. And it will change.",
      ],
      technical: {
        title: "Designing for Algorithm Change",
        body: [
          "Agile designs share a set of structural properties:\n- A provider/plugin model — OpenSSL 3.x providers, JCA, and PKCS#11 let you load a new algorithm as a module instead of forking the library.\n- Versioned, negotiated wire formats — every encrypted blob or handshake states which algorithm produced it, so mixed fleets interoperate during a rollout.\n- No assumptions about sizes — ML-KEM keys and ML-DSA signatures are far larger than RSA/ECC, so buffers, database columns, and packet budgets must be parameterized, not fixed.",
          "The negotiation must itself resist attack, because an agile system is only as strong as its floor:\n- Downgrade protection — the handshake transcript is authenticated so an attacker cannot strip the PQC option and force a weak suite.\n- A policy floor — configuration sets a minimum acceptable algorithm; anything weaker is refused, not silently accepted.\n- Telemetry — the negotiated algorithm is logged so operators can see real-world adoption and detect forced downgrades.",
        ],
        codeExample: {
          label: "Agility via abstraction + negotiation (pseudocode)",
          code: `# BAD — algorithm hardcoded; every change is a code change.
ciphertext = rsa_encrypt(pubkey, data)

# GOOD — abstract interface; algorithm is configuration + negotiation.
suite = negotiate(peer_supported, local_policy.minimum)   # e.g. "X25519MLKEM768"
kem   = registry.get(suite)            # provider/plugin model
ct    = kem.encapsulate(peer_pubkey)   # same call for any KEM

# The wire format records the suite so a mixed fleet interoperates:
#   { "suite": "X25519MLKEM768", "ciphertext": "..." }
# Swapping to a future KEM changes config + registry, not call sites.`,
        },
      },
      incident: {
        title: "Heartbleed and the Cost of Inagility",
        when: "2014",
        where: "OpenSSL — two-thirds of the web's TLS servers",
        impact: "Mass key compromise; the slow, painful re-keying exposed how brittle non-agile crypto deployment was",
        body: [
          "Heartbleed was a memory bug, but its aftermath was a crypto-agility failure. Once private keys were potentially leaked, every affected site had to revoke certificates, generate new keys, and re-issue — and the ecosystem discovered how manual and fragile that process was:\n- Revocation infrastructure (CRL/OCSP) buckled under the load.\n- Many systems had no automated path to rotate keys at all.",
          "The lesson shaped modern thinking that PQC migration now depends on:\n- ACME and automated certificate management (Let's Encrypt, launched 2015) exist partly because manual rotation does not scale.\n- A PQC migration is a planned, fleet-wide key and algorithm rotation — exactly the operation Heartbleed proved most organizations could not do smoothly.\n- Crypto-agility turns that rotation from an emergency into a routine, repeatable change.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Hardcoded Algorithm", sub: "every change = redeploy", type: "victim" },
          { label: "Crypto Abstraction", sub: "interface, not algorithm", type: "system" },
          { label: "Negotiation + Policy", sub: "pick best mutual, enforce floor", type: "result" },
          { label: "Downgrade Defense", sub: "authenticated transcript", type: "attacker" },
        ],
      },
      timeline: [
        { year: 2014, event: "Heartbleed forces mass re-keying; manual rotation proves unscalable" },
        { year: 2015, event: "Let's Encrypt / ACME launches — automated cert lifecycle, a pillar of agility" },
        { year: 2022, event: "NIST/NSA guidance names crypto-agility the core objective of PQC migration", highlight: true },
        { year: 2024, event: "FIPS 203/204/205 finalized; FN-DSA still pending — proof more swaps are coming" },
      ],
      keyTakeaways: [
        "Crypto-agility — changing algorithms without re-architecting — is the real objective, not one-time PQC deployment",
        "Design it in: abstraction, negotiation, registered identifiers, and algorithm-as-configuration",
        "Parameterize for size — PQC keys and signatures dwarf RSA/ECC; fixed buffers and columns break",
        "Protect the negotiation: authenticate the transcript and enforce a policy floor to stop downgrades",
      ],
      references: [
        { title: "NIST: Migration to Post-Quantum Cryptography (NCCoE project)", url: "https://www.nccoe.nist.gov/crypto-agility-considerations-migrating-post-quantum-cryptographic-algorithms" },
        { title: "IETF: Hybrid key exchange in TLS 1.3 (draft-ietf-tls-hybrid-design)", url: "https://datatracker.ietf.org/doc/draft-ietf-tls-hybrid-design/" },
      ],
    },
    quiz: {
      questions: [
        { id: "quantum-e02-q1", type: "Core Idea", challenge: "The real objective.", text: "What is crypto-agility?", options: ["The ability to change cryptographic algorithms without re-architecting the system", "Encrypting data faster", "Using only one algorithm forever", "A type of quantum computer"], correctIndex: 0, explanation: "Agility means the active algorithm is replaceable, because today's PQC choice will not be the last." },
        { id: "quantum-e02-q2", type: "Design", challenge: "How to build it.", text: "Which design choice supports crypto-agility?", options: ["Calling an abstract crypto interface and negotiating the algorithm at runtime", "Hardcoding RSA in every call site", "Fixing all buffer sizes to RSA dimensions", "Disabling cipher negotiation"], correctIndex: 0, explanation: "Abstraction plus negotiation lets the implementation change underneath without touching call sites." },
        { id: "quantum-e02-q3", type: "Sizing", challenge: "A gotcha.", text: "Why must agile systems avoid fixed buffer and column sizes?", options: ["ML-KEM/ML-DSA keys and signatures are far larger than RSA/ECC", "PQC keys are always smaller", "Sizes never matter", "TLS forbids large fields"], correctIndex: 0, explanation: "PQC artifacts are much bigger, so storage and packet budgets must be parameterized." },
        { id: "quantum-e02-q4", type: "Security", challenge: "Protecting the choice.", text: "How does an agile protocol stop an attacker from forcing a weak algorithm?", options: ["Authenticate the negotiation transcript and enforce a policy floor", "Trust whatever the client offers", "Always pick the weakest suite", "Remove logging"], correctIndex: 0, explanation: "Transcript authentication plus a minimum-algorithm policy prevents downgrade attacks." },
        { id: "quantum-e02-q5", type: "Lesson", challenge: "The Heartbleed parallel.", text: "What did Heartbleed reveal that PQC migration depends on?", options: ["Most organizations could not rotate keys at fleet scale smoothly", "SHA-1 is secure", "Quantum computers already exist", "Manual rotation scales fine"], correctIndex: 0, explanation: "Heartbleed's painful re-keying showed why automated, agile rotation is essential for a planned PQC cutover." },
      ],
    },
  },

  // ─── quantum-e03: Hybrid TLS ─────────────────────────────────────────────────
  {
    epochId: "quantum-5",
    wonder: { name: "Cloudflare Edge Network", location: "San Francisco, California, USA", era: "2024 CE", emoji: "🔐" },
    id: "quantum-e03",
    order: 3,
    title: "Two Locks on One Door",
    subtitle: "Hybrid Key Exchange in TLS 1.3 (X25519 + ML-KEM)",
    category: "cybersecurity",
    xp: 180,
    badge: { id: "badge-qe-tls", name: "Hybrid TLS Engineer", emoji: "🔐" },
    challengeType: "quiz",
    info: {
      tagline: "The web's first real PQC deployment is already live: a hybrid TLS key exchange that combines battle-tested X25519 with NIST's ML-KEM, so a break of either still leaves the session secure.",
      year: 2024,
      overview: [
        "Hybrid key exchange is the pragmatic on-ramp to PQC for TLS. Rather than betting the connection on a young algorithm, the handshake runs two key exchanges — classical X25519 and post-quantum ML-KEM-768 — and combines both shared secrets. An attacker must break both to recover the session key: classical security guards against an ML-KEM flaw, and ML-KEM guards against a future quantum computer.",
        "This is not a thought experiment — it has already shipped to billions of users. Chrome and Cloudflare enabled `X25519Kyber768` across their traffic in 2023, then migrated to the standardized `X25519MLKEM768` code point in 2024 as the spec settled. The elegance is that the hybrid lives entirely inside the existing TLS 1.3 `key_share` extension, so it needs no new protocol — just new named groups that clients and servers learn to offer. And because the whole thing is negotiated, it's safe by construction: a client that offers the hybrid falls back cleanly to classical X25519 when it meets a server that doesn't support it yet, so turning PQC on never breaks connectivity with the un-upgraded half of the internet.",
        "The engineering reality, as everywhere in this epoch, is mostly about size and how the network reacts to it. ML-KEM-768 adds roughly 1.2 KB to the ClientHello and 1.1 KB to the ServerHello, against a few dozen bytes for X25519 — a small absolute number with outsized consequences. A larger ClientHello can spill across multiple TCP segments or overflow the QUIC initial packet, and that's exactly where ancient middleboxes and buggy servers that assumed handshakes fit in one packet start mangling connections. The cryptographic core itself is unglamorous and correct: the combiner simply concatenates the two shared secrets and runs them through the TLS key schedule (HKDF), so neither the classical nor the post-quantum secret alone determines the session keys — both must be recovered to break it.",
      ],
      technical: {
        title: "How the Hybrid Handshake Works",
        body: [
          "The hybrid named group threads a PQC KEM through the existing TLS 1.3 flow:\n- ClientHello carries a `key_share` for the `X25519MLKEM768` group: the X25519 public key plus the ML-KEM encapsulation key.\n- The server does X25519 as usual and ML-KEM `Encapsulate` against the client's encapsulation key, returning its X25519 share and the ML-KEM ciphertext.\n- The client runs X25519 and ML-KEM `Decapsulate`; both sides now hold the same two shared secrets.\n- The combined secret is `concat(ssX25519, ssMLKEM)` fed into the key schedule — IETF fixes the order so implementations interoperate.",
          "Deploying it safely means engineering for the packet, not just the math:\n- Watch ClientHello size — keep it under path MTU where possible; QUIC implementations must handle a larger Initial.\n- Test middlebox tolerance — some appliances choke on a ClientHello that no longer fits one segment ('TLS intolerance').\n- Prefer hybrid over PQC-only for now — it preserves classical security if ML-KEM is later weakened, which is the whole point of the hedge.\n- Enable per-service and measure — most stacks (OpenSSL 3.5, BoringSSL, Rustls) expose the group as a config string.",
        ],
        codeExample: {
          label: "Enabling hybrid PQC key exchange in TLS (OpenSSL 3.5+)",
          code: `# OpenSSL 3.5 ships ML-KEM and the hybrid groups natively.
# Offer the hybrid first, fall back to classical X25519.

openssl s_client -connect example.com:443 \\
  -groups X25519MLKEM768:X25519:secp256r1

# Server side (nginx/openssl): advertise the hybrid group.
#   ssl_ecdh_curve  X25519MLKEM768:X25519;

# Confirm what was actually negotiated:
#   "Negotiated TLS1.3 group: X25519MLKEM768"  -> hybrid PQC active
#   "Negotiated TLS1.3 group: X25519"          -> classical fallback`,
        },
      },
      incident: {
        title: "Chrome's X25519Kyber768 Rollout — and the Middlebox Breakage",
        when: "2023–2024",
        where: "Google Chrome, Cloudflare, and the global TLS ecosystem",
        impact: "First mass PQC deployment; also surfaced real-world TLS-intolerance bugs in middleboxes and servers",
        body: [
          "When Chrome turned on hybrid `X25519Kyber768` by default in 2024, it became the largest cryptographic deployment in history overnight — and immediately exposed brittle infrastructure:\n- A subset of users hit broken connections because some middleboxes and servers could not handle the larger ClientHello, which now spanned more than one packet.\n- The failures were not cryptographic; they were size and parsing bugs in equipment that assumed ClientHello always fit in one segment.",
          "The episode became the canonical PQC-deployment lesson:\n- Google added an enterprise policy to disable the hybrid so affected orgs could remediate their appliances rather than break users.\n- It proved hybrid negotiation and fallback worked as designed — clients that could not complete the hybrid still connected.\n- The takeaway for engineers: PQC migration breaks on the network layer (MTU, middleboxes) at least as often as on the crypto layer, so test the wire, not just the algorithm.",
        ],
      },
      diagram: {
        nodes: [
          { label: "ClientHello", sub: "X25519 + ML-KEM key_share", type: "system" },
          { label: "Server Encapsulate", sub: "X25519 share + ML-KEM ct", type: "result" },
          { label: "Combine Secrets", sub: "concat -> HKDF key schedule", type: "result" },
          { label: "Break-Both Security", sub: "either algorithm holding = safe", type: "attacker" },
        ],
      },
      timeline: [
        { year: 2023, event: "Chrome + Cloudflare ship hybrid X25519Kyber768Draft00 — first at-scale PQC" },
        { year: 2024, event: "FIPS 203 finalizes ML-KEM; ecosystem moves to standard X25519MLKEM768", highlight: true },
        { year: 2024, event: "Chrome enables hybrid by default; middlebox TLS-intolerance bugs surface" },
        { year: 2025, event: "OpenSSL 3.5 ships ML-KEM and hybrid groups in the mainline release" },
      ],
      keyTakeaways: [
        "Hybrid key exchange runs X25519 and ML-KEM together — an attacker must break both to recover the session key",
        "It rides the existing TLS 1.3 key_share extension as a new named group (X25519MLKEM768) — negotiated, with clean fallback",
        "The hard part is size: ML-KEM adds ~1 KB per hello and can trip MTU and middlebox bugs",
        "Prefer hybrid over PQC-only today — it preserves classical security if ML-KEM is later weakened",
      ],
      references: [
        { title: "Cloudflare: The state of the post-quantum Internet", url: "https://blog.cloudflare.com/pq-2024/" },
        { title: "IETF: X25519MLKEM768 hybrid group for TLS 1.3", url: "https://datatracker.ietf.org/doc/draft-kwiatkowski-tls-ecdhe-mlkem/" },
      ],
    },
    quiz: {
      questions: [
        { id: "quantum-e03-q1", type: "Core Idea", challenge: "Why two algorithms.", text: "Why does hybrid TLS run X25519 and ML-KEM together?", options: ["An attacker must break both, so either one holding keeps the session secure", "It makes the handshake smaller", "ML-KEM cannot work alone ever", "To use less CPU"], correctIndex: 0, explanation: "Hybrid hedges: classical security covers an ML-KEM flaw, and ML-KEM covers the quantum threat." },
        { id: "quantum-e03-q2", type: "Protocol", challenge: "Where it lives.", text: "How is the hybrid carried in TLS 1.3?", options: ["As a new named group in the existing key_share extension", "By inventing a new protocol replacing TLS", "In the certificate only", "Over a separate UDP port"], correctIndex: 0, explanation: "It is just a new named group (X25519MLKEM768) in key_share — negotiated, with fallback to X25519." },
        { id: "quantum-e03-q3", type: "Combiner", challenge: "Mixing the secrets.", text: "How are the two shared secrets combined?", options: ["Concatenated and fed through the TLS key schedule (HKDF)", "XORed and truncated to 128 bits", "Only the ML-KEM secret is used", "Averaged together"], correctIndex: 0, explanation: "Concatenation into HKDF means neither secret alone determines the keys; both must be broken." },
        { id: "quantum-e03-q4", type: "Deployment", challenge: "The real failure mode.", text: "What broke for some users when Chrome enabled hybrid by default?", options: ["Middleboxes/servers couldn't handle the larger multi-packet ClientHello", "ML-KEM keys were too weak", "TLS 1.3 was disabled", "Certificates expired"], correctIndex: 0, explanation: "The bigger ClientHello tripped TLS-intolerance bugs — a network-layer failure, not a crypto one." },
        { id: "quantum-e03-q5", type: "Trade-off", challenge: "Hybrid vs PQC-only.", text: "Why prefer hybrid over PQC-only deployment today?", options: ["It preserves classical security if ML-KEM is later weakened", "It is always faster", "It removes the need for certificates", "PQC-only is illegal"], correctIndex: 0, explanation: "ML-KEM is young; keeping X25519 in the mix is a hedge against an undiscovered weakness." },
      ],
    },
  },

  // ─── quantum-e04: PQC for SSH / IPsec / WireGuard ────────────────────────────
  {
    epochId: "quantum-5",
    wonder: { name: "OpenSSH Project", location: "Calgary, Alberta, Canada", era: "2024 CE", emoji: "🛰️" },
    id: "quantum-e04",
    order: 4,
    title: "Securing the Tunnels",
    subtitle: "PQC for SSH, IPsec & WireGuard",
    category: "cybersecurity",
    xp: 180,
    badge: { id: "badge-qe-vpn", name: "Quantum-Safe Tunnel Engineer", emoji: "🛰️" },
    challengeType: "quiz",
    info: {
      tagline: "TLS is not the only thing an adversary is harvesting. SSH sessions, IPsec VPNs, and WireGuard tunnels carry the most sensitive long-lived traffic — and each needs its own PQC path.",
      year: 2024,
      overview: [
        "Remote access and site-to-site tunnels are prime Harvest-Now-Decrypt-Later targets: they carry admin credentials, source code, and internal traffic that must stay secret for decades. Each tunnel protocol has its own handshake, so PQC arrives in each one differently — and SSH actually led the way.",
        "The three major tunnel protocols sit at noticeably different stages of the journey, shaped by how much negotiation each was born with. SSH led the entire industry: OpenSSH made the hybrid `sntrup761x25519-sha512` key exchange its *default* back in version 9.0 (2022) — one of the earliest production PQC deployments anywhere on earth — and has since added ML-KEM hybrids. IPsec/IKEv2 follows a standardized path: RFC 9370 defines a way to carry multiple additional key exchanges in IKEv2, letting a tunnel layer a PQC KEM on top of classical Diffie-Hellman. WireGuard is the hard case, because its deliberately rigid Noise-based handshake has no negotiation at all by design — so PQC is bolted on today through pre-shared keys, or through PQC-aware forks and overlay layers, rather than a clean in-protocol swap.",
        "Despite those protocol differences, the same engineering pattern repeats across all three, which is what makes the skill transferable. You combine a classical and a PQC secret so that either one holding keeps the tunnel safe — the now-familiar hybrid hedge. You account for larger handshake messages, which means IKEv2 may need fragmentation turned on and SSH packets simply grow. And you roll out tunnel by tunnel with fallback, deliberately prioritizing the links that carry the longest-lived secrets — the admin sessions, the replication links, the source-code transfers — because those are the ones HNDL is harvesting and the ones where a decade of retroactive exposure hurts most. Same recipe, three kitchens.",
      ],
      technical: {
        title: "PQC Across Tunnel Protocols",
        body: [
          "Each protocol exposes PQC through its own mechanism:\n- SSH key exchange names — `sntrup761x25519-sha512` (Streamlined NTRU Prime + X25519) and ML-KEM hybrids select hybrid KEX; configured via `KexAlgorithms` and negotiated like any other.\n- IKEv2 additional key exchanges (RFC 9370) — the initial IKE_SA uses classical DH, then `IKE_INTERMEDIATE` exchanges mix in up to seven additional KEMs, so a PQC break does not expose the tunnel.\n- WireGuard pre-shared key — the optional 32-byte PSK is folded into the handshake, adding a quantum-resistant symmetric layer without changing the protocol; rotate it out of band.",
          "Operational considerations differ from TLS in important ways:\n- Long-lived sessions — an SSH or IPsec tunnel can stay up for hours; rekeying with a PQC KEX matters as much as the initial handshake.\n- Fragmentation — large IKEv2 messages need IKE fragmentation (RFC 7383) or they will be dropped by path MTU limits.\n- Symmetric strength — bump symmetric ciphers to AES-256 where feasible, since Grover halves the effective brute-force security of symmetric keys.",
        ],
        codeExample: {
          label: "Enabling hybrid PQC key exchange in OpenSSH",
          code: `# OpenSSH defaults to a hybrid PQC KEX since 9.0; pin it explicitly
# for high-value hosts in ~/.ssh/config or sshd_config:

KexAlgorithms sntrup761x25519-sha512@openssh.com,mlkem768x25519-sha256

# Verify what was negotiated:
ssh -vvv user@host 2>&1 | grep "kex: algorithm"
#   kex: algorithm: sntrup761x25519-sha512@openssh.com   -> hybrid PQC

# WireGuard: add a rotated pre-shared key for a symmetric PQC layer
#   [Peer]
#   PresharedKey = <32-byte base64, rotated out of band>`,
        },
      },
      incident: {
        title: "OpenSSH 9.0 — PQC by Default Before the Standards Were Final",
        when: "April 2022",
        where: "OpenSSH — the default remote-access tool for Unix/Linux infrastructure",
        impact: "Made hybrid post-quantum key exchange the default for millions of servers years ahead of FIPS finalization",
        body: [
          "OpenSSH 9.0 quietly did something remarkable: it made `sntrup761x25519-sha512` the default key exchange, putting hybrid PQC on millions of servers in 2022 — two years before NIST finalized its standards:\n- The maintainers chose Streamlined NTRU Prime explicitly as a conservative, well-studied lattice alternative, combined with X25519 so classical security was never lost.\n- Because it was hybrid and negotiated, the change was invisible to users and fell back cleanly to older servers.",
          "The decision aged well and modeled the right engineering posture:\n- It directly addressed HNDL for SSH, the protocol guarding the keys to the rest of the estate.\n- It demonstrated that hybrid deployment can move ahead of final standards without risk, because the classical half guarantees no regression.\n- Later OpenSSH releases added ML-KEM hybrids, showing the crypto-agility payoff: a second swap was a configuration change, not a redesign.",
        ],
      },
      diagram: {
        nodes: [
          { label: "SSH KEX", sub: "sntrup761 / ML-KEM + X25519", type: "system" },
          { label: "IKEv2 (RFC 9370)", sub: "additional PQC key exchanges", type: "system" },
          { label: "WireGuard PSK", sub: "symmetric PQC layer", type: "result" },
          { label: "HNDL Target", sub: "long-lived admin traffic", type: "attacker" },
        ],
      },
      timeline: [
        { year: 2022, event: "OpenSSH 9.0 makes hybrid sntrup761x25519 the default KEX — early production PQC", highlight: true },
        { year: 2023, event: "RFC 9370 standardizes multiple additional key exchanges in IKEv2 for PQC" },
        { year: 2024, event: "ML-KEM finalized; SSH and IPsec stacks add ML-KEM hybrid key exchanges" },
        { year: 2025, event: "PQC-aware WireGuard overlays and forks mature for tunnels needing negotiation" },
      ],
      keyTakeaways: [
        "Tunnels (SSH, IPsec, WireGuard) carry the longest-lived secrets — prime HNDL targets needing PQC",
        "Each protocol adds PQC differently: SSH KEX names, IKEv2 additional key exchanges (RFC 9370), WireGuard PSK",
        "OpenSSH 9.0 shipped hybrid PQC by default in 2022 — proof hybrid can lead the standards safely",
        "Bump symmetric ciphers toward AES-256 — Grover halves symmetric brute-force security",
      ],
      references: [
        { title: "OpenSSH Release Notes (9.0 — sntrup761x25519 default)", url: "https://www.openssh.com/txt/release-9.0" },
        { title: "RFC 9370: Multiple Key Exchanges in IKEv2", url: "https://datatracker.ietf.org/doc/rfc9370/" },
      ],
    },
    quiz: {
      questions: [
        { id: "quantum-e04-q1", type: "Core Idea", challenge: "Why tunnels matter.", text: "Why are SSH/IPsec/WireGuard tunnels high-priority PQC targets?", options: ["They carry long-lived sensitive traffic — prime Harvest-Now-Decrypt-Later exposure", "They never use cryptography", "They are immune to quantum attacks", "They only carry public data"], correctIndex: 0, explanation: "Admin sessions and internal traffic must stay secret for years, exactly what HNDL threatens." },
        { id: "quantum-e04-q2", type: "SSH", challenge: "The early mover.", text: "What did OpenSSH 9.0 do in 2022?", options: ["Made a hybrid PQC key exchange the default, ahead of final standards", "Removed all encryption", "Switched to RSA-512", "Disabled key exchange"], correctIndex: 0, explanation: "It defaulted to sntrup761x25519 — hybrid PQC on millions of servers two years before FIPS." },
        { id: "quantum-e04-q3", type: "IPsec", challenge: "Layering PQC in IKEv2.", text: "How does RFC 9370 add PQC to IPsec/IKEv2?", options: ["Multiple additional key exchanges mixed in after the initial classical DH", "By removing Diffie-Hellman entirely", "Through certificate pinning only", "By disabling rekeying"], correctIndex: 0, explanation: "IKE_INTERMEDIATE exchanges layer additional KEMs so a PQC break doesn't expose the tunnel." },
        { id: "quantum-e04-q4", type: "WireGuard", challenge: "No negotiation.", text: "How is PQC commonly added to stock WireGuard today?", options: ["Folding a rotated pre-shared key into the handshake as a symmetric PQC layer", "Negotiating ML-KEM in the handshake natively", "It cannot be secured at all", "Using RSA certificates"], correctIndex: 0, explanation: "WireGuard's fixed Noise handshake has no negotiation, so the optional PSK provides a quantum-resistant symmetric layer." },
        { id: "quantum-e04-q5", type: "Symmetric", challenge: "Grover's effect.", text: "Why bump symmetric ciphers toward AES-256 during tunnel migration?", options: ["Grover's algorithm halves the effective brute-force security of symmetric keys", "AES-256 is quantum-broken", "Smaller keys are stronger", "It reduces handshake size"], correctIndex: 0, explanation: "Grover gives a quadratic speedup, so AES-128 drops to ~64-bit effective security; AES-256 restores margin." },
      ],
    },
  },

  // ─── quantum-e05: PKI & Certificate Migration ────────────────────────────────
  {
    epochId: "quantum-5",
    wonder: { name: "DigiCert Certificate Authority", location: "Lehi, Utah, USA", era: "2024 CE", emoji: "📜" },
    id: "quantum-e05",
    order: 5,
    title: "Re-Rooting Trust",
    subtitle: "PKI & Certificate Migration — Composite Certs, Dual Chains & HSMs",
    category: "cybersecurity",
    xp: 185,
    badge: { id: "badge-qe-pki", name: "PQC PKI Engineer", emoji: "📜" },
    challengeType: "quiz",
    info: {
      tagline: "Key exchange protects today's session; signatures protect trust for decades. Migrating PKI — roots, chains, and the HSMs that hold the keys — is the slowest and highest-stakes part of the journey.",
      year: 2024,
      overview: [
        "Signatures are the harder half of PQC migration. A broken key exchange exposes one session; a broken signature lets an attacker forge certificates, code signatures, and documents at will. Worse, roots of trust have 10–25 year lifetimes, so a root CA issued today may still be validating signatures when large quantum computers arrive. PKI migration therefore starts early and moves carefully.",
        "Because you can't coordinate a flag-day where every verifier on earth upgrades at once, PKI migration runs through hybrid certificate mechanisms — three of them, each a different way to let old and new clients coexist. Composite certificates bind a classical and a PQC public key (and two signatures) into a single certificate, so one credential satisfies both a legacy verifier and a modern one. Parallel or dual PKI hierarchies instead issue a separate PQC chain alongside the classical one, and each endpoint follows the chain it understands. And a lighter-touch option uses non-critical X.509 extensions to carry an alternative PQC signature that legacy clients are required to ignore while new clients verify it. All three exist for the same reason: the upgrade has to be gradual, and breaking the un-upgraded majority is not an option.",
        "What actually paces the schedule, though, is hardware and lifecycle — the parts you can't fix in software. HSMs must support ML-DSA and SLH-DSA in their *firmware* before they can generate or protect PQC signing keys, and that's a vendor-and-validation dependency with a lead time, not a config flag you flip on a Friday. The sizes balloon in ways that stress the whole ecosystem: an ML-DSA-65 signature is about 3.3 KB against roughly 64 bytes for ECDSA-P256, inflating certificate sizes, chains, CRLs, and any protocol that carries them. And the clock is already running on the most critical piece — CNSA 2.0 *requires* stateful hash-based signatures (LMS/XMSS, per NIST SP 800-208) for firmware and software signing right now, ahead of everything else, precisely because those roots of trust outlive every device and every session built on top of them.",
      ],
      technical: {
        title: "Hybrid Certificates and Signing Infrastructure",
        body: [
          "The certificate-level mechanisms each make a different trade-off:\n- Composite (IETF LAMPS) — a single cert and single signature operation combining, e.g., ECDSA + ML-DSA; a verifier must check both, so security is the stronger of the two.\n- Chameleon / alternative-signature extensions — the legacy signature stays primary and a PQC signature rides in an extension that old clients skip, easing incremental rollout.\n- Dual hierarchies — fully separate classical and PQC roots; simplest to reason about but doubles issuance and lifecycle management.",
          "Signing-key protection is where the rubber meets the road:\n- Keys must be generated and held in FIPS 140-3 HSMs whose firmware implements the PQC algorithm — track CMVP status, not marketing claims.\n- Stateful hash-based signatures (LMS/XMSS) are mandated by CNSA 2.0 for firmware signing because they are conservative, but state management is dangerous: reusing a one-time key index breaks security, so the HSM must enforce monotonic state.\n- Plan revocation and re-issuance for the larger artifacts — CRLs and OCSP responses grow with PQC signatures, affecting bandwidth and caching.",
        ],
        codeExample: {
          label: "Generating an ML-DSA CA and inspecting sizes (OpenSSL + oqs-provider)",
          code: `# Generate an ML-DSA-65 (Dilithium) signing key for a PQC CA.
openssl genpkey -algorithm mldsa65 -out pqc-ca.key

# Self-sign a PQC root certificate.
openssl req -x509 -new -key pqc-ca.key -days 3650 \\
  -subj "/CN=Example PQC Root CA" -out pqc-ca.crt

# Compare signature sizes — this is the engineering cost:
#   ECDSA-P256 signature : ~64 bytes
#   ML-DSA-65  signature : ~3,300 bytes   (chains, CRLs, OCSP all grow)

# For firmware roots, CNSA 2.0 mandates stateful hash-based sigs:
#   LMS / XMSS (NIST SP 800-208) — HSM MUST enforce one-time-key state.`,
        },
      },
      incident: {
        title: "DigiCert's Mass Revocation — PKI Operations at Scale",
        when: "July 2024",
        where: "DigiCert — a major public certificate authority",
        impact: "~83,000 certificates flagged for revocation in 24 hours over a domain-validation flaw, straining customers' rotation capacity",
        body: [
          "A subtle CA flaw forced DigiCert to revoke roughly 83,000 certificates on a 24-hour clock — and many customers simply could not re-issue and deploy that fast:\n- The incident was not quantum-related, but it stress-tested exactly the muscle PQC migration requires: rapid, fleet-wide certificate rotation.\n- Organizations with automated certificate management (ACME) handled it; those rotating by hand faced outages.",
          "It is a direct preview of the PQC PKI transition:\n- A full migration re-issues every certificate in the estate onto new algorithms and larger artifacts.\n- Automation, accurate certificate inventory (the CBOM again), and tested rotation runbooks are the difference between a planned cutover and an emergency.\n- Roots and signing keys, with their decade-long lifetimes, must be migrated first because they cannot be rotated quickly once relied upon.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Classical Root", sub: "RSA/ECDSA, 10-25yr life", type: "victim" },
          { label: "Composite / Dual Cert", sub: "classical + ML-DSA keys", type: "system" },
          { label: "PQC HSM", sub: "FIPS 140-3 firmware, state-safe", type: "result" },
          { label: "Forgery Threat", sub: "broken signature = forged trust", type: "attacker" },
        ],
      },
      timeline: [
        { year: 2020, event: "NIST SP 800-208 approves stateful hash-based signatures (LMS/XMSS) for signing" },
        { year: 2022, event: "CNSA 2.0 requires LMS/XMSS for firmware and software signing immediately" },
        { year: 2024, event: "FIPS 204 (ML-DSA) and 205 (SLH-DSA) finalized; IETF composite-cert drafts advance", highlight: true },
        { year: 2024, event: "DigiCert mass revocation shows the operational cost of fleet-wide re-issuance" },
      ],
      keyTakeaways: [
        "Signatures are the harder half — a forged signature fakes trust, and roots live 10-25 years, so PKI migrates first",
        "Hybrid certs (composite, dual hierarchies, alternative-signature extensions) bridge legacy and PQC verifiers",
        "HSM firmware must implement ML-DSA/SLH-DSA and be CMVP-validated before it can protect PQC signing keys",
        "CNSA 2.0 already mandates stateful hash-based signatures (LMS/XMSS) for firmware — state reuse is catastrophic",
      ],
      references: [
        { title: "NIST SP 800-208: Stateful Hash-Based Signature Schemes", url: "https://csrc.nist.gov/pubs/sp/800/208/final" },
        { title: "IETF LAMPS: Composite ML-DSA for certificates", url: "https://datatracker.ietf.org/doc/draft-ietf-lamps-pq-composite-sigs/" },
      ],
    },
    quiz: {
      questions: [
        { id: "quantum-e05-q1", type: "Core Idea", challenge: "Why signatures are harder.", text: "Why is signature migration higher-stakes than key-exchange migration?", options: ["A broken signature forges trust (certs, code) and roots live for decades", "Signatures are never used", "Key exchange protects data forever", "Signatures are smaller"], correctIndex: 0, explanation: "Forged signatures fake identity and code trust, and long-lived roots may still be relied on when quantum arrives." },
        { id: "quantum-e05-q2", type: "Hybrid Certs", challenge: "Bridging verifiers.", text: "What does a composite certificate do?", options: ["Binds a classical and a PQC key/signature so one cert satisfies both verifiers", "Removes the need for a CA", "Halves the key size", "Encrypts the whole chain"], correctIndex: 0, explanation: "Composite certs carry both algorithms; a verifier checks both, so security is the stronger of the two." },
        { id: "quantum-e05-q3", type: "Hardware", challenge: "The HSM dependency.", text: "Why can't you immediately generate PQC signing keys everywhere?", options: ["HSM firmware must implement and be CMVP-validated for ML-DSA/SLH-DSA first", "PQC keys need no protection", "Software keys are always fine", "HSMs are obsolete"], correctIndex: 0, explanation: "Signing keys live in HSMs, which need new validated firmware — a vendor and lifecycle dependency." },
        { id: "quantum-e05-q4", type: "Sizing", challenge: "The cost.", text: "Roughly how does an ML-DSA-65 signature compare to ECDSA-P256?", options: ["~3.3 KB vs ~64 bytes — chains, CRLs, and OCSP all grow", "Identical size", "Ten times smaller", "Exactly one byte larger"], correctIndex: 0, explanation: "PQC signatures are far larger, stressing certificate sizes, revocation lists, and protocols." },
        { id: "quantum-e05-q5", type: "Firmware", challenge: "Stateful danger.", text: "Why are stateful hash-based signatures (LMS/XMSS) handled carefully?", options: ["Reusing a one-time key index breaks security, so state must be enforced monotonically", "They are quantum-broken", "They have no keys", "They cannot sign firmware"], correctIndex: 0, explanation: "CNSA 2.0 mandates LMS/XMSS for firmware, but one-time-key state reuse is catastrophic — the HSM must enforce it." },
      ],
    },
  },

  // ─── quantum-e06: Library Migration ──────────────────────────────────────────
  {
    epochId: "quantum-5",
    wonder: { name: "Open Quantum Safe Project", location: "Waterloo, Ontario, Canada", era: "2024 CE", emoji: "📚" },
    id: "quantum-e06",
    order: 6,
    title: "Wiring In the New Math",
    subtitle: "Library Migration — OpenSSL Providers, liboqs & BoringSSL",
    category: "cybersecurity",
    xp: 180,
    badge: { id: "badge-qe-libs", name: "PQC Integration Engineer", emoji: "📚" },
    challengeType: "quiz",
    info: {
      tagline: "Algorithms only matter once they are in the libraries your code actually calls. Integrating PQC means navigating providers, ABI changes, and the gap between reference code and production-grade implementations.",
      year: 2024,
      overview: [
        "The PQC standards are useless until they ship in the crypto libraries applications link against. That integration work — adding ML-KEM and ML-DSA to OpenSSL, BoringSSL, and language runtimes — is where most engineering hours actually go, and where crypto-agility's provider model pays off.",
        "The encouraging news is that the ecosystem matured fast, and crypto-agility's provider model is what let it. Open Quantum Safe (OQS) led the way: `liboqs` packages the NIST PQC algorithms, and `oqs-provider` plugs them into OpenSSL 3.x as a loadable provider — no recompiling OpenSSL itself, just drop in a module. OpenSSL 3.5 (2025) then folded ML-KEM, ML-DSA, and SLH-DSA natively into the mainline, so many deployments no longer need a third-party provider at all. And BoringSSL — Google's library behind Chrome and Android — integrated ML-KEM directly, which is precisely what made the billions-of-users TLS rollout from the hybrid stage physically possible. The standards became running code remarkably quickly.",
        "But the integration risks are practical, mundane, and easy to underestimate — and this is where real deployments stumble. Provider and ABI handling is fiddly: a PQC provider has to be loaded and configured correctly, and getting the default provider chain subtly wrong *silently* disables post-quantum protection while everything still appears to work — the worst kind of failure. There's a sharp line between reference and production code: early PQC implementations were research-grade, and production demands constant-time, hardened versions — the KyberSlash timing bug in 2024 hit several libraries that had shipped the naive version. And language bindings lag reality: the C library may have ML-KEM months before your Java, Go, Python, or Rust wrapper exposes it, so the binding — not the algorithm — quietly becomes your bottleneck. The math arrived; the plumbing is the work.",
      ],
      technical: {
        title: "Integrating PQC into the Crypto Stack",
        body: [
          "OpenSSL's provider architecture is the model for agile integration:\n- A provider is a loadable module registering algorithm implementations; `oqs-provider` adds PQC without patching OpenSSL's core.\n- Configuration in `openssl.cnf` lists active providers and the default property query, so applications get PQC transparently through the existing EVP API.\n- Because call sites use `EVP_PKEY` abstractions, adding ML-KEM is ideally a configuration change — the crypto-agility goal from earlier made concrete.",
          "Validating an integration takes more than 'it links':\n- Constant-time checks — verify the implementation is the hardened one, not reference code; subscribe to advisories (KyberSlash, side-channel patches).\n- Interop testing — confirm your build talks to other implementations (OpenSSL ↔ BoringSSL ↔ Rustls), since subtle encoding differences break handshakes.\n- Version pinning and supply chain — PQC code is young and changing fast; pin versions, watch CVEs, and treat the PQC provider as a critical dependency in the SBOM.",
        ],
        codeExample: {
          label: "Loading the OQS provider into OpenSSL 3.x",
          code: `# openssl.cnf — enable the default and OQS providers together.
[openssl_init]
providers = provider_sect

[provider_sect]
default = default_sect
oqsprovider = oqsprovider_sect

[default_sect]
activate = 1
[oqsprovider_sect]
activate = 1

# Confirm PQC algorithms are now available:
openssl list -kem-algorithms  | grep -i mlkem
openssl list -signature-algorithms | grep -i mldsa
# If empty: the provider failed to load — check OPENSSL_MODULES path.`,
        },
      },
      incident: {
        title: "KyberSlash — A Timing Side Channel in ML-KEM Implementations",
        when: "December 2023 – 2024",
        where: "Multiple Kyber/ML-KEM implementations across the ecosystem",
        impact: "A division-timing leak allowed secret-key recovery in affected implementations until patched",
        body: [
          "KyberSlash was a textbook reminder that a secure algorithm is not a secure implementation. Researchers found that some Kyber/ML-KEM implementations performed a division whose timing depended on secret data:\n- On affected builds, an attacker measuring decapsulation timing could, over many queries, recover the secret key.\n- The flaw was in the code, not the math — the same specification compiled in constant time was safe.",
          "The fallout drove home library-migration discipline:\n- Multiple libraries (including reference and derived code) shipped patches; deployments had to update promptly.\n- It validated the warning against using research-grade implementations in production and the need to track PQC advisories like any other critical CVE.\n- It also justified hybrid deployment: a classical algorithm running alongside limited the blast radius while implementations hardened.",
        ],
      },
      diagram: {
        nodes: [
          { label: "NIST PQC Spec", sub: "ML-KEM / ML-DSA", type: "system" },
          { label: "liboqs / oqs-provider", sub: "loadable into OpenSSL 3.x", type: "result" },
          { label: "EVP API Call Sites", sub: "agility: config, not code", type: "result" },
          { label: "Side-Channel Risk", sub: "reference code != hardened", type: "attacker" },
        ],
      },
      timeline: [
        { year: 2020, event: "Open Quantum Safe matures liboqs + oqs-provider for experimentation" },
        { year: 2023, event: "KyberSlash timing side channel disclosed across multiple implementations", highlight: true },
        { year: 2024, event: "BoringSSL integrates ML-KEM, powering Chrome's at-scale hybrid TLS" },
        { year: 2025, event: "OpenSSL 3.5 ships ML-KEM/ML-DSA/SLH-DSA natively in the mainline release" },
      ],
      keyTakeaways: [
        "Algorithms matter only once integrated into the libraries your code links — that's where the hours go",
        "OpenSSL providers (oqs-provider) and native OpenSSL 3.5 make PQC a configuration change via the EVP API",
        "Use hardened, constant-time implementations — KyberSlash proved reference code can leak secret keys",
        "Test interop across implementations and pin/track PQC dependencies as critical supply-chain components",
      ],
      references: [
        { title: "Open Quantum Safe: liboqs and oqs-provider", url: "https://openquantumsafe.org/" },
        { title: "KyberSlash: division timing side channels in Kyber", url: "https://kyberslash.cr.yp.to/" },
      ],
    },
    quiz: {
      questions: [
        { id: "quantum-e06-q1", type: "Core Idea", challenge: "Where the work is.", text: "Why is library integration the bulk of PQC engineering work?", options: ["Standards are inert until ML-KEM/ML-DSA ship in the libraries applications link against", "Libraries never change", "Algorithms run without code", "It is purely a hardware task"], correctIndex: 0, explanation: "Applications call crypto libraries; PQC only becomes usable once it's integrated and configured there." },
        { id: "quantum-e06-q2", type: "Providers", challenge: "The agile path.", text: "How does the OpenSSL provider model help PQC integration?", options: ["oqs-provider loads PQC into OpenSSL 3.x without patching its core, exposed through EVP", "It forces a full OpenSSL fork", "It disables the EVP API", "It only works for RSA"], correctIndex: 0, explanation: "A loadable provider adds algorithms behind the existing EVP abstraction — agility made concrete." },
        { id: "quantum-e06-q3", type: "Implementation", challenge: "Spec vs code.", text: "What did KyberSlash demonstrate?", options: ["A correct algorithm can still leak secret keys via a timing side channel in the code", "ML-KEM is mathematically broken", "Timing never matters", "Reference code is always safe"], correctIndex: 0, explanation: "Secret-dependent division timing leaked keys; the same spec in constant time was safe." },
        { id: "quantum-e06-q4", type: "Interop", challenge: "Beyond linking.", text: "Why is cross-implementation interop testing essential?", options: ["Subtle encoding differences between OpenSSL/BoringSSL/Rustls can break handshakes", "All libraries are byte-identical", "Interop is illegal", "Linking guarantees correctness"], correctIndex: 0, explanation: "PQC encodings are young; implementations must be tested against each other to interoperate." },
        { id: "quantum-e06-q5", type: "Supply Chain", challenge: "Young dependencies.", text: "How should PQC libraries be treated in the supply chain?", options: ["As critical, fast-moving dependencies — pin versions and track CVEs/advisories", "Ignored, since they rarely change", "Updated only every decade", "Excluded from the SBOM"], correctIndex: 0, explanation: "PQC code changes rapidly and has had real CVEs; treat it as a critical dependency to monitor." },
      ],
    },
  },

  // ─── quantum-e07: Performance & Sizing ───────────────────────────────────────
  {
    epochId: "quantum-5",
    wonder: { name: "Amazon Web Services Cryptography", location: "Seattle, Washington, USA", era: "2024 CE", emoji: "📊" },
    id: "quantum-e07",
    order: 7,
    title: "Counting the Bytes",
    subtitle: "Performance & Sizing — Handshake Bytes, Latency & Tuning",
    category: "cybersecurity",
    xp: 175,
    badge: { id: "badge-qe-perf", name: "PQC Performance Engineer", emoji: "📊" },
    challengeType: "quiz",
    info: {
      tagline: "PQC's cost is rarely CPU — it is bytes on the wire. The dominant engineering constraint is the size of keys, ciphertexts, and signatures, and how the network reacts to them.",
      year: 2024,
      overview: [
        "The surprising truth of PQC performance is that the math is fast — often faster than RSA — but the artifacts are large. ML-KEM-768 encapsulation runs in microseconds, yet its public key (1184 B) and ciphertext (1088 B) are an order of magnitude bigger than X25519's 32 bytes. The bottleneck moves from CPU to the network, and that is what engineers must size.",
        "The size effects don't scale smoothly — they cluster around a few hard thresholds, which is what makes them dangerous. The first is the MTU cliff: a TLS ClientHello that grows past ~1500 bytes suddenly spans multiple packets, adding a round trip and exposing every middlebox bug that assumed handshakes were small. The second is that signatures, not KEM keys, dominate certificate bloat — ML-DSA signatures (~2.4–4.6 KB) inflate certificate chains, CRLs, and OCSP responses far more than the key-exchange material does. The third is *where* the cost lands: PQC is paid per handshake, at connection setup, not in steady state — so a long-lived connection amortizes it to nothing, while a workload of many short connections (public APIs, microservice meshes) feels it on every single call.",
        "That diagnosis points the tuning somewhere unexpected — at handshakes and topology, not at raw crypto speed, because the crypto isn't the slow part. The biggest lever is reusing connections: keep-alive, HTTP/2 and HTTP/3 multiplexing, and TLS session resumption spread that one-time handshake cost across many requests, often erasing it. Next, choose parameter sets deliberately rather than by reflex — ML-KEM-768 is the common balance, while ML-KEM-1024 (mandated by CNSA 2.0 for national security systems) buys higher assurance at the cost of more bytes on every handshake. And measure the right thing: tail latency (p99) and the extra round trip matter far more to real users than median CPU time, especially over lossy mobile links where a single added round trip can dwarf any compute difference. Size, not speed, is the metric that bites.",
      ],
      technical: {
        title: "Sizing PQC for Production",
        body: [
          "The numbers drive the decisions, so engineers keep them at hand:\n- ML-KEM-768 — public key 1184 B, ciphertext 1088 B (vs X25519's 32 B each). ML-KEM-1024 is larger again.\n- ML-DSA-65 — signature ~3293 B, public key ~1952 B (vs ECDSA-P256's ~64 B and 64 B). SLH-DSA signatures are far larger still (7-30 KB), trading size for conservative security.\n- Hybrid adds both — X25519MLKEM768 carries the classical and PQC artifacts together, so budget the sum.",
          "Production sizing turns those numbers into engineering limits:\n- Keep ClientHello within one MTU where feasible; if not, ensure the stack and path handle multi-packet/Initial-packet hellos (especially QUIC).\n- Watch amplification and DoS — larger handshakes mean more work and bytes per connection, so rate-limit and protect handshake endpoints.\n- Cache and resume — PQC makes full handshakes expensive, so session resumption and 0-RTT (used carefully) deliver outsized wins.\n- Benchmark end-to-end — synthetic crypto benchmarks understate the real cost, which lives in round trips and packet loss recovery.",
        ],
        codeExample: {
          label: "Comparing handshake sizes (illustrative byte budget)",
          code: `# Approximate on-the-wire sizes — the real PQC cost center.
#
# Key exchange artifacts:
#   X25519            public key   32 B   | shared 32 B
#   ML-KEM-768        enc key    1184 B   | ciphertext 1088 B
#   X25519MLKEM768    hybrid     ~1216 B  + ~1120 B   (sum of both)
#
# Signature artifacts (per cert in the chain):
#   ECDSA-P256        sig   ~64 B    | pubkey ~64 B
#   ML-DSA-65         sig ~3293 B    | pubkey ~1952 B
#   SLH-DSA-128s      sig ~7856 B    (size for conservative security)
#
# Rule of thumb: PQC moves the bottleneck from CPU cycles to packets.
# Tune handshakes (reuse, resumption), not cipher core speed.`,
        },
      },
      incident: {
        title: "Google + Cloudflare's PQC Measurement Experiments",
        when: "2019–2024",
        where: "Production TLS at Google and Cloudflare scale",
        impact: "Large-scale data showed PQC's real cost is handshake size and tail latency, not CPU — shaping deployment choices industry-wide",
        body: [
          "Years before standardization, Google and Cloudflare ran live experiments serving hybrid PQC to real users and measuring the impact:\n- They found median latency barely moved, but the larger handshakes increased tail latency and triggered failures on a small fraction of paths.\n- The data steered the ecosystem toward ML-KEM-768 hybrids as the size/security sweet spot and confirmed CPU was not the constraint.",
          "Those experiments are why PQC deployment guidance is what it is today:\n- They proved hybrid was viable at scale and quantified the MTU/middlebox risk before it became a production surprise.\n- They reframed PQC performance work as a networking problem — round trips, packet loss, and middlebox tolerance — rather than a cryptographic-speed problem.\n- The methodology (measure real percentiles in production, not micro-benchmarks) is now standard practice for any PQC rollout.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Fast PQC Math", sub: "encaps in microseconds", type: "system" },
          { label: "Large Artifacts", sub: "KB-scale keys/sigs", type: "victim" },
          { label: "MTU / Round-Trip Cost", sub: "the real bottleneck", type: "attacker" },
          { label: "Reuse + Resume", sub: "amortize per-handshake cost", type: "result" },
        ],
      },
      timeline: [
        { year: 2019, event: "Google/Cloudflare CECPQ2 experiments measure PQC handshake impact in production" },
        { year: 2022, event: "Studies confirm size, not CPU, dominates PQC cost; ML-KEM-768 emerges as the balance" },
        { year: 2024, event: "At-scale hybrid TLS validates the measurement-driven sizing approach", highlight: true },
        { year: 2025, event: "QUIC/HTTP-3 deployments lean on resumption and multiplexing to amortize PQC handshakes" },
      ],
      keyTakeaways: [
        "PQC's cost is bytes, not cycles — keys, ciphertexts, and signatures are an order of magnitude larger",
        "The MTU cliff is real: a multi-packet ClientHello adds round trips and exposes middlebox bugs",
        "Cost is per-handshake — connection reuse, resumption, and multiplexing amortize it",
        "Measure real p99/round trips in production; micro-benchmarks understate the network-layer cost",
      ],
      references: [
        { title: "Cloudflare: Sizing up post-quantum signatures", url: "https://blog.cloudflare.com/sizing-up-post-quantum-signatures/" },
        { title: "AWS: Post-quantum TLS performance and tuning", url: "https://aws.amazon.com/blogs/security/tag/post-quantum-cryptography/" },
      ],
    },
    quiz: {
      questions: [
        { id: "quantum-e07-q1", type: "Core Idea", challenge: "The real cost.", text: "Where does PQC's dominant cost actually fall?", options: ["On the network — large keys, ciphertexts, and signatures (bytes on the wire)", "On CPU cycles, which are far slower than RSA", "On disk storage only", "There is no measurable cost"], correctIndex: 0, explanation: "PQC math is fast; the bottleneck is the size of the artifacts and how the network handles them." },
        { id: "quantum-e07-q2", type: "MTU", challenge: "The cliff.", text: "Why does a larger ClientHello matter?", options: ["Crossing the MTU makes it span multiple packets, adding a round trip and tripping middleboxes", "It improves compression", "It removes the handshake", "It encrypts faster"], correctIndex: 0, explanation: "A multi-packet ClientHello costs an extra round trip and exposes TLS-intolerance bugs." },
        { id: "quantum-e07-q3", type: "Signatures", challenge: "Biggest inflater.", text: "Which PQC artifacts inflate certificates and CRLs the most?", options: ["ML-DSA / SLH-DSA signatures (KB-scale vs ~64-byte ECDSA)", "X25519 public keys", "AES keys", "Session tickets"], correctIndex: 0, explanation: "Signatures dominate certificate-chain and revocation sizes far more than KEM keys do." },
        { id: "quantum-e07-q4", type: "Tuning", challenge: "Amortizing cost.", text: "How do you reduce PQC handshake cost in practice?", options: ["Reuse connections — keep-alive, multiplexing, and session resumption", "Open a new connection per request", "Disable TLS 1.3", "Use larger parameter sets everywhere"], correctIndex: 0, explanation: "PQC cost is per-handshake, so reuse and resumption spread it across many requests." },
        { id: "quantum-e07-q5", type: "Measurement", challenge: "What to trust.", text: "What did Google/Cloudflare experiments teach about measuring PQC?", options: ["Measure real production percentiles/round trips — micro-benchmarks understate network cost", "CPU micro-benchmarks tell the whole story", "Latency is irrelevant", "Only median matters"], correctIndex: 0, explanation: "The cost lives in tail latency and round trips on real paths, not in synthetic crypto speed tests." },
      ],
    },
  },

  // ─── quantum-e08: Validation ─────────────────────────────────────────────────
  {
    epochId: "quantum-5",
    wonder: { name: "NIST Cryptographic Module Validation Program", location: "Gaithersburg, Maryland, USA", era: "2024 CE", emoji: "✅" },
    id: "quantum-e08",
    order: 8,
    title: "Proving It's Really Safe",
    subtitle: "Validation — FIPS 140-3 / CMVP, Interop & Side-Channels",
    category: "cybersecurity",
    xp: 180,
    badge: { id: "badge-qe-validate", name: "PQC Validation Engineer", emoji: "✅" },
    challengeType: "quiz",
    info: {
      tagline: "A PQC implementation is not done when it compiles — it is done when it is validated. FIPS 140-3, interoperability, and side-channel testing turn 'it runs' into 'it is trustworthy'.",
      year: 2024,
      overview: [
        "Deploying PQC without validation recreates exactly the risk PQC is meant to remove: a system that looks secure but is not. Validation answers three separate questions — is the algorithm implemented correctly, does it interoperate, and is it free of side channels — and each needs its own testing regime.",
        "Formal validation runs through the established programs you'd expect, now extended to cover PQC. FIPS 140-3 and its Cryptographic Module Validation Program (CMVP) certify that a module correctly implements approved algorithms, and the ML-KEM/ML-DSA/SLH-DSA test vectors and ACVP (the Automated Cryptographic Validation Protocol) support them today. Underneath that, known-answer tests demand every implementation reproduce NIST's official test vectors *exactly*, which catches encoding and modular-arithmetic bugs the moment they appear. And for regulated environments the distinction is bright and unforgiving: only a CMVP-validated module counts — a vendor's cheerful claim of being 'FIPS-ready' is marketing, not a certificate, and deploying on that basis is how compliance programs fail their audit.",
        "Conformance, though, only proves the algorithm is *correct* — it says nothing about two failure modes that have to be tested on their own. Interoperability is the first: your client must actually complete handshakes against other independent implementations, and because PQC's encodings are young and still settling, real-world mismatches are common — which is exactly why cross-stack test suites exist and why 'it works against itself' proves little. Side channels are the second and subtler: constant-time verification, leakage testing, and fault-injection resistance catch implementation flaws like KyberSlash that pass every conformance test while quietly leaking key material through timing. A module can produce perfect outputs and still be broken — validation has to look at *how* it computes them, not just *what* it computes.",
      ],
      technical: {
        title: "The PQC Validation Regime",
        body: [
          "Conformance and interop are the baseline gates:\n- ACVP / known-answer tests — feed NIST vectors through the module and assert exact outputs; automate this in CI so regressions are caught on every build.\n- Cross-implementation interop — test the deployed stack against OpenSSL, BoringSSL, and others for both success and correct negotiation/fallback.\n- Negative testing — malformed ciphertexts and signatures must be rejected cleanly; ML-KEM's implicit-rejection behavior must be implemented exactly to avoid oracles.",
          "Side-channel and operational assurance go deeper:\n- Constant-time analysis — tools (dudect, TIMECOP, ct-verif) and code review confirm no secret-dependent branches or memory access; this is where KyberSlash-class bugs are caught.\n- Leakage and fault testing — for hardware and HSMs, power/EM leakage assessment and fault-injection resistance matter, especially for signing keys.\n- Continuous revalidation — pin versions, re-run KATs and interop on every dependency bump, and track CMVP status changes, since a module's validation can lapse or be updated.",
        ],
        codeExample: {
          label: "Known-answer test against NIST ACVP vectors (sketch)",
          code: `# Validate an ML-KEM implementation against official NIST test vectors.
# Run in CI on every build — a single mismatch fails the pipeline.

for vector in acvp_mlkem_768_vectors/*.json; do
  python run_kat.py --algo ML-KEM-768 --vector "$vector" \\
    || { echo "KAT FAIL: $vector"; exit 1; }
done

# Constant-time check (catches KyberSlash-class timing leaks):
dudect ./mlkem_decaps_bench    # must show no secret-dependent timing

# Interop smoke test against another stack:
openssl s_client -groups X25519MLKEM768 -connect peer-boringssl:443`,
        },
      },
      incident: {
        title: "The Dual_EC_DRBG Backdoor — Why Validation Without Scrutiny Fails",
        when: "2007–2014",
        where: "NIST SP 800-90A / RSA BSAFE and other products",
        impact: "A standardized, validated random-number generator contained a suspected NSA backdoor, eroding trust in rubber-stamp validation",
        body: [
          "Dual_EC_DRBG is the cautionary tale that shapes how PQC validation must be done. It was a NIST-standardized, FIPS-validatable random number generator — yet researchers showed its constants could hide a backdoor allowing prediction of its output:\n- Modules using it passed validation while being fundamentally untrustworthy.\n- It revealed that conformance to a standard is necessary but not sufficient — the implementation and its parameters need open scrutiny.",
          "For PQC, the lesson is directly applicable:\n- Validation (CMVP, KATs) proves correctness against the spec, but open analysis, constant-time verification, and diverse review prove trustworthiness.\n- This is why the NIST PQC process was public and multi-round, and why engineers favor widely-reviewed implementations over closed ones.\n- Side-channel and fault testing exist precisely because passing a conformance suite does not guarantee an implementation is safe to deploy.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Known-Answer Tests", sub: "exact NIST vectors", type: "system" },
          { label: "Interop Testing", sub: "cross-stack handshakes", type: "system" },
          { label: "Side-Channel / FIPS 140-3", sub: "constant-time, CMVP cert", type: "result" },
          { label: "Hidden Flaw", sub: "compiles but leaks", type: "attacker" },
        ],
      },
      timeline: [
        { year: 2013, event: "Dual_EC_DRBG backdoor revelations — validation without scrutiny proven insufficient" },
        { year: 2023, event: "NIST ACVP adds automated validation support for the PQC algorithms" },
        { year: 2024, event: "FIPS 203/204/205 finalized; CMVP begins validating PQC modules", highlight: true },
        { year: 2024, event: "KyberSlash shows conformance tests miss side channels — constant-time testing required" },
      ],
      keyTakeaways: [
        "Validation answers three questions: correct implementation, interoperability, and side-channel freedom",
        "FIPS 140-3 / CMVP and NIST known-answer tests (ACVP) certify conformance — automate KATs in CI",
        "Conformance is necessary but not sufficient — Dual_EC_DRBG passed validation yet was backdoored",
        "Constant-time and fault testing catch implementation flaws (KyberSlash) that conformance suites miss",
      ],
      references: [
        { title: "NIST Cryptographic Module Validation Program (CMVP)", url: "https://csrc.nist.gov/projects/cryptographic-module-validation-program" },
        { title: "NIST Automated Cryptographic Validation Protocol (ACVP)", url: "https://pages.nist.gov/ACVP/" },
      ],
    },
    quiz: {
      questions: [
        { id: "quantum-e08-q1", type: "Core Idea", challenge: "Three questions.", text: "What does PQC validation establish?", options: ["Correct implementation, interoperability, and freedom from side channels", "Only that the code compiles", "That a quantum computer exists", "The marketing claims are catchy"], correctIndex: 0, explanation: "Each is a separate property needing its own testing regime; 'it runs' is not enough." },
        { id: "quantum-e08-q2", type: "Conformance", challenge: "The official gate.", text: "What certifies that a module correctly implements approved PQC algorithms?", options: ["FIPS 140-3 / CMVP validation with NIST known-answer test vectors (ACVP)", "A vendor blog post", "A passing unit test the vendor wrote", "Compiling without warnings"], correctIndex: 0, explanation: "CMVP plus ACVP known-answer tests provide the formal conformance certification regulated environments require." },
        { id: "quantum-e08-q3", type: "Interop", challenge: "Talking to others.", text: "Why is cross-implementation interop testing a distinct requirement?", options: ["PQC's young encodings make handshake mismatches between stacks common", "All stacks are identical", "Interop is automatic", "Encodings never differ"], correctIndex: 0, explanation: "A conformant module can still fail to interoperate due to subtle encoding/negotiation differences." },
        { id: "quantum-e08-q4", type: "Side Channels", challenge: "Beyond conformance.", text: "What testing catches KyberSlash-class flaws that conformance tests miss?", options: ["Constant-time and side-channel/leakage analysis", "More known-answer tests", "Larger key sizes", "Faster CPUs"], correctIndex: 0, explanation: "Timing/leakage bugs pass conformance; only constant-time and side-channel testing find them." },
        { id: "quantum-e08-q5", type: "Lesson", challenge: "Validation's limit.", text: "What does Dual_EC_DRBG teach about validation?", options: ["Passing a standard's validation is necessary but not sufficient for trustworthiness", "Validated modules are always safe", "Backdoors are impossible", "Scrutiny is unnecessary"], correctIndex: 0, explanation: "A validated, standardized RNG was backdoored — open scrutiny and side-channel review are also required." },
      ],
    },
  },

  // ─── quantum-e09: Rollout & Rollback ─────────────────────────────────────────
  {
    epochId: "quantum-5",
    wonder: { name: "Google SRE — Site Reliability Engineering", location: "Mountain View, California, USA", era: "2024 CE", emoji: "🚦" },
    id: "quantum-e09",
    order: 9,
    title: "The Cutover",
    subtitle: "Rollout & Rollback — Staged Cutover, Monitoring & Runbooks",
    category: "cybersecurity",
    xp: 185,
    badge: { id: "badge-qe-rollout", name: "Migration Operations Lead", emoji: "🚦" },
    challengeType: "quiz",
    info: {
      tagline: "A PQC migration is a fleet-wide cryptographic change to live systems. Treated as a deploy — staged, observable, reversible — it is routine. Treated as a flag day, it is an outage.",
      year: 2024,
      overview: [
        "All the engineering converges here: turning the migration on in production without breaking anything. Because cryptography sits on the critical path of every connection, a bad cutover is an immediate, total outage — which is why PQC rollout borrows the discipline of progressive delivery rather than a single switch.",
        "A safe rollout has the same shape as any other high-risk deploy, and treating it that way is the whole discipline. You stage it: enable PQC for internal traffic first, then a small percentage of production, then ramp, watching the signals at every step rather than flipping a global switch. You make it observable: log the negotiated algorithm on every single connection so that adoption, clean fallback, and any forced downgrade are visible in real time instead of inferred after an outage. And you make it reversible: because the rollout is hybrid and negotiated, turning PQC back off is a config flag, not a redeploy — and that reversibility is the safety net that lets you move fast, because a mistake is seconds from undone.",
        "What separates a calm migration from a 3 a.m. scramble is operational readiness prepared in advance. Runbooks come first — documented steps for enabling, disabling, and diagnosing PQC per service — so that an on-call engineer at the worst possible hour executes a known procedure instead of improvising against live cryptography. Monitoring and alerting come next: track handshake failure rates, latency percentiles, and the share of connections actually negotiating PQC, so you're watching adoption and health rather than hoping. And dependency awareness ties it together — coordinate with downstream and partner systems, because a peer that can't negotiate the hybrid will fall back (usually fine) while a misconfigured policy floor that *requires* PQC against a peer that lacks it will break the connection hard. The cutover is where all the prior engineering is finally tested in production; preparation is what makes that test boring.",
      ],
      technical: {
        title: "Running the Migration as a Deploy",
        body: [
          "The rollout mechanics map onto standard release practice:\n- Feature-flag the algorithm — gate PQC behind configuration so it can be ramped per service, region, or percentage and rolled back instantly.\n- Canary and bake — enable on a canary fleet, watch error and latency signals for a bake period, then progress; never flip everything at once.\n- Dual-stack during transition — keep classical and hybrid both acceptable so mixed fleets and external peers keep working throughout the ramp.",
          "Observability and reversal are the core safety properties:\n- Negotiated-algorithm telemetry — emit the chosen group/suite per connection; a sudden drop in PQC adoption signals a broken peer or a downgrade attempt.\n- Failure budgets and auto-rollback — wire handshake-failure spikes to alerts (and ideally automatic flag reversal) so a bad change self-heals.\n- Post-cutover hardening — once adoption is stable and peers support it, raise the policy floor to require PQC and eventually retire classical-only, completing the migration rather than leaving it half-done.",
        ],
        codeExample: {
          label: "Staged PQC rollout with observability (config sketch)",
          code: `# Feature-flagged, percentage-ramped, instantly reversible.
pqc_rollout:
  group: "X25519MLKEM768"
  enabled_percent: 5        # ramp: 0 -> 5 -> 25 -> 100
  fallback: "X25519"        # negotiated; mixed fleets keep working
  policy_floor: "X25519"    # raise to require PQC AFTER adoption is stable

# Emit the negotiated group per connection for dashboards/alerts:
#   metric: tls_negotiated_group{group="X25519MLKEM768"} ...
# Alert if handshake_failure_rate > budget  ->  auto-revert enabled_percent.`,
        },
      },
      incident: {
        title: "Cloudflare's Progressive PQC Rollout",
        when: "2022–2024",
        where: "Cloudflare's global edge serving millions of sites",
        impact: "Demonstrated that fleet-wide PQC can be enabled with negligible disruption when staged, observed, and reversible",
        body: [
          "Cloudflare migrated a large fraction of the Internet's traffic to hybrid PQC without a notable outage — by treating it as an operations problem, not a crypto event:\n- They enabled hybrid key exchange progressively, measured negotiated-group telemetry across billions of connections, and watched failure and latency signals at each step.\n- Where peers or middleboxes could not handle the hybrid, negotiation fell back to classical automatically, so users stayed connected.",
          "Their playbook is the template for any organization's cutover:\n- Stage, observe, and keep the change reversible; let hybrid negotiation absorb incompatible peers.\n- Publish adoption data so the whole ecosystem can see progress and remaining gaps.\n- The migration succeeds not because the cryptography is clever, but because the rollout is boring — exactly the goal for a change on the critical path.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Internal -> Canary -> Ramp", sub: "staged enablement", type: "system" },
          { label: "Negotiated-Algo Telemetry", sub: "adoption + downgrade visibility", type: "result" },
          { label: "Config Rollback", sub: "flag off, not redeploy", type: "result" },
          { label: "Flag-Day Cutover", sub: "the anti-pattern: instant outage", type: "attacker" },
        ],
      },
      timeline: [
        { year: 2022, event: "Cloudflare begins progressive hybrid PQC enablement at edge scale" },
        { year: 2023, event: "Negotiated-group telemetry becomes standard practice for PQC adoption tracking" },
        { year: 2024, event: "At-scale PQC rollouts proceed with negligible disruption via staging + fallback", highlight: true },
        { year: 2025, event: "Mature deployments begin raising policy floors to require PQC and retire classical-only" },
      ],
      keyTakeaways: [
        "A PQC migration is a fleet-wide change on the critical path — run it as a staged, observable, reversible deploy",
        "Feature-flag the algorithm: canary, ramp by percentage, and keep instant rollback via config",
        "Log the negotiated algorithm per connection — adoption, fallback, and downgrades must be observable",
        "Finish the job: once adoption is stable, raise the policy floor to require PQC and retire classical-only",
      ],
      references: [
        { title: "Cloudflare: The state of the post-quantum Internet", url: "https://blog.cloudflare.com/pq-2024/" },
        { title: "NSA: Quantum-Readiness and CNSA 2.0 transition guidance", url: "https://www.nsa.gov/Cybersecurity/Post-Quantum-Cybersecurity-Resources/" },
      ],
    },
    quiz: {
      questions: [
        { id: "quantum-e09-q1", type: "Core Idea", challenge: "Why staged.", text: "Why is a PQC migration run as a staged deploy rather than a flag day?", options: ["Cryptography is on the critical path — a bad cutover is an immediate, total outage", "It is required by law", "Staging makes keys smaller", "Flag days are faster and safer"], correctIndex: 0, explanation: "Every connection depends on the crypto, so the change must be ramped, observed, and reversible." },
        { id: "quantum-e09-q2", type: "Reversibility", challenge: "The safety net.", text: "What makes a hybrid PQC rollout instantly reversible?", options: ["It is negotiated and feature-flagged, so turning PQC off is a config change", "You must redeploy every binary", "It cannot be reversed", "Only a full rebuild reverts it"], correctIndex: 0, explanation: "Because the algorithm is negotiated config, disabling it is a flag flip with clean fallback." },
        { id: "quantum-e09-q3", type: "Observability", challenge: "Seeing the rollout.", text: "What telemetry is essential during a PQC cutover?", options: ["The negotiated algorithm/group logged per connection", "CPU temperature", "Disk free space", "DNS query counts only"], correctIndex: 0, explanation: "Per-connection negotiated-group data reveals adoption, fallback, and downgrade attempts in real time." },
        { id: "quantum-e09-q4", type: "Ops", challenge: "Acting under pressure.", text: "What lets on-call engineers handle PQC issues without improvising?", options: ["Runbooks for enabling, disabling, and diagnosing PQC per service", "Hoping for the best", "Deleting the certificates", "Turning off monitoring"], correctIndex: 0, explanation: "Documented runbooks plus monitoring turn an incident into a routine, repeatable response." },
        { id: "quantum-e09-q5", type: "Completion", challenge: "Finishing the migration.", text: "After adoption is stable, what completes the migration?", options: ["Raise the policy floor to require PQC and retire classical-only", "Leave it permanently optional", "Delete all telemetry", "Roll back to RSA"], correctIndex: 0, explanation: "A migration left at 'optional' is half-done; requiring PQC and retiring classical-only finishes it." },
      ],
    },
  },

  // ─── quantum-e10: Constrained & Embedded PQC ─────────────────────────────────
  {
    epochId: "quantum-5",
    wonder: { name: "Arm / IoT Security Working Group", location: "Cambridge, United Kingdom", era: "2024 CE", emoji: "🔌" },
    id: "quantum-e10",
    order: 10,
    title: "Quantum-Safe at the Edge",
    subtitle: "Constrained & Embedded PQC — IoT, Firmware Signing & Supply Chain",
    category: "cybersecurity",
    xp: 190,
    badge: { id: "badge-qe-embedded", name: "Embedded PQC Engineer", emoji: "🔌" },
    challengeType: "quiz",
    info: {
      tagline: "The hardest mile of the migration is the smallest devices: microcontrollers with kilobytes of RAM, 15-year field lifetimes, and firmware roots of trust that must resist quantum attacks they will never live to see fail.",
      year: 2024,
      overview: [
        "Embedded and IoT systems are where PQC migration is both most urgent and most constrained. A car, a meter, or an industrial controller deployed today may run for 15–20 years, and its firmware-verification key is a root of trust that absolutely cannot be quantum-forgeable — yet the device may have a few kilobytes of RAM and no path to a full algorithm swap later.",
        "On these devices, PQC's costs collide with hard physical limits in a way they never do on a server. Memory and flash are the first wall: ML-DSA keys and signatures run to kilobytes and SLH-DSA signatures to *tens* of kilobytes, which is brutal on a controller whose total RAM is also measured in kilobytes — stack and flash budgets have to be checked against real datasheets, never assumed. Compute and power are the second: slower microcontrollers and battery budgets turn signature-verification time and the energy it burns into genuine design constraints. And immutability is the cruelest: many roots of trust are burned into hardware — eFuses, mask ROM — so the algorithm you choose today is *permanent* for that device's 15-to-20-year life, with no firmware update that can ever change it. Get it wrong and you've shipped a fleet that can never be made quantum-safe.",
        "The engineering answer leans deliberately conservative and signature-focused, because on a 20-year device you optimize for 'can never be forged' over elegance. Firmware signing comes first — CNSA 2.0 mandates stateful hash-based signatures (LMS/XMSS) for it now, precisely because hash-based security is the most conservative assumption available and verification stays cheap even though the signatures are large. The governing trick is verify-cheap, sign-anywhere: the constrained device only ever *verifies* signatures (the cheap operation), while *signing* happens off-device in an HSM, so the device's whole cost is dominated by signature size and verify time, not the expensive private-key math. And it all rests on supply-chain integrity — the build, signing, and update pipeline itself must be quantum-safe and tamper-evident, because a single forged update bypasses every protection baked into the device. This is where the whole epoch lands: the migration is only as strong as the most constrained, longest-lived, least-updatable thing you've shipped.",
      ],
      technical: {
        title: "PQC on Constrained Devices",
        body: [
          "Algorithm selection for embedded targets is a sizing exercise:\n- Hash-based signatures (LMS/XMSS, SLH-DSA) — conservative security and cheap verification, at the cost of large signatures and (for stateful schemes) careful one-time-key state management on the signer.\n- ML-DSA / ML-KEM — smaller than SLH-DSA and lattice-fast, but key/signature sizes still dwarf ECC; feasible on mid-range MCUs, tight on the smallest.\n- Verify-only footprint — since devices verify rather than sign, the embedded cost is the public key, the signature buffer, and verification cycles — budget those explicitly.",
          "The lifecycle and supply chain are as important as the algorithm:\n- Secure boot chains — each stage verifies the next with a PQC signature; the immutable root must use an algorithm trusted for the full device lifetime.\n- Updatable where possible — design crypto-agility into firmware so the device can adopt new algorithms over the air, mitigating the immutability problem for everything above the ROM root.\n- Signing-pipeline security — protect the HSM-backed signing service, enforce stateful-key state, and produce SBOM/CBOM for firmware so a compromised build is detectable.",
        ],
        codeExample: {
          label: "Embedded PQC firmware-signing sizing (illustrative)",
          code: `# Verify-only device budget — what the MCU must hold and run.
#
# Stateful hash-based (CNSA 2.0 firmware mandate):
#   LMS / XMSS    pubkey ~32-60 B | signature ~1-3 KB | verify: cheap (hashes)
# Stateless hash-based:
#   SLH-DSA-128s  signature ~7.8 KB (large, but conservative + cheap verify)
# Lattice:
#   ML-DSA-44     signature ~2.4 KB | pubkey ~1.3 KB | verify: fast
#
# Design rules:
#   - Device VERIFIES only; signing stays in an HSM off-device.
#   - Check flash + stack against signature buffer sizes BEFORE choosing.
#   - Make firmware crypto-agile so the next swap is an OTA, not a recall.`,
        },
      },
      incident: {
        title: "Stuxnet's Stolen Signing Keys — Why Firmware Roots Must Outlive the Threat",
        when: "2010",
        where: "Industrial control systems (Natanz, Iran) — and the global code-signing trust model",
        impact: "Malware signed with stolen, valid certificates bypassed trust entirely, foreshadowing the stakes of forgeable signatures",
        body: [
          "Stuxnet carried drivers signed with legitimate, stolen code-signing certificates, so the operating system trusted them without question:\n- It proved that the signature-verification root of trust is the whole game — if an attacker can produce a valid signature, every downstream check passes.\n- The keys were stolen, not forged; but a quantum-broken signature algorithm would let an attacker forge them outright, at scale, with no theft required.",
          "For embedded PQC, the lesson is existential:\n- A firmware root of trust deployed today on a 15-year device must use a signature algorithm that is unforgeable for that entire window — which is why CNSA 2.0 pushes hash-based signing for firmware now.\n- The signing pipeline and key storage must be quantum-safe and tamper-evident end to end, because the root cannot be rotated on a device already in the field.\n- Designing agility into everything above the immutable root is the only hedge against being wrong about the timeline.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Constrained MCU", sub: "KB RAM, 15-yr life", type: "victim" },
          { label: "Hash-Based Firmware Sig", sub: "LMS/XMSS, cheap verify", type: "system" },
          { label: "Secure Boot Chain", sub: "PQC root -> stages", type: "result" },
          { label: "Forged Update", sub: "broken sig = full compromise", type: "attacker" },
        ],
      },
      timeline: [
        { year: 2010, event: "Stuxnet uses stolen code-signing certs — signature trust is the whole game" },
        { year: 2020, event: "NIST SP 800-208 standardizes LMS/XMSS, suited to constrained firmware signing" },
        { year: 2022, event: "CNSA 2.0 mandates hash-based signatures for firmware/software signing immediately", highlight: true },
        { year: 2024, event: "Embedded PQC libraries and secure-boot stacks add ML-DSA / hash-based verification" },
      ],
      keyTakeaways: [
        "Embedded is the hardest mile: KB-scale devices, 15-20 year lifetimes, and immutable firmware roots of trust",
        "Firmware signing migrates first with conservative hash-based signatures (LMS/XMSS) — cheap to verify",
        "Devices verify, not sign — budget public-key/signature buffer sizes and verify cycles against flash/RAM",
        "Make everything above the immutable root crypto-agile so the next swap is an OTA update, not a recall",
      ],
      references: [
        { title: "NSA CNSA 2.0: software and firmware signing requirements", url: "https://media.defense.gov/2022/Sep/07/2003071834/-1/-1/0/CSA_CNSA_2.0_ALGORITHMS_.PDF" },
        { title: "NIST SP 800-208: Stateful Hash-Based Signatures (firmware)", url: "https://csrc.nist.gov/pubs/sp/800/208/final" },
      ],
    },
    quiz: {
      questions: [
        { id: "quantum-e10-q1", type: "Core Idea", challenge: "Why hardest.", text: "Why is embedded/IoT the hardest part of PQC migration?", options: ["KB-scale devices with 15-20 year lifetimes and immutable firmware roots of trust", "Embedded devices use no cryptography", "MCUs have unlimited memory", "They are replaced every year"], correctIndex: 0, explanation: "Tiny resources, long field life, and burned-in roots collide with PQC's large artifacts and permanence." },
        { id: "quantum-e10-q2", type: "Algorithm", challenge: "Firmware first.", text: "Which signatures does CNSA 2.0 mandate for firmware signing now?", options: ["Stateful hash-based signatures (LMS/XMSS) — conservative, cheap to verify", "RSA-1024", "ECDSA-P256 only", "No signatures at all"], correctIndex: 0, explanation: "Hash-based security is the most conservative and verification is cheap, ideal for long-lived firmware roots." },
        { id: "quantum-e10-q3", type: "Footprint", challenge: "Verify vs sign.", text: "Why is the embedded cost dominated by verification, not signing?", options: ["Devices only verify signatures; signing happens off-device in an HSM", "Devices never verify anything", "Signing is free on MCUs", "Verification needs no memory"], correctIndex: 0, explanation: "Constrained devices verify firmware signatures; the cost is the public key, signature buffer, and verify cycles." },
        { id: "quantum-e10-q4", type: "Immutability", challenge: "The permanence problem.", text: "How do engineers hedge against an immutable root algorithm choice?", options: ["Make everything above the ROM root crypto-agile so updates can swap algorithms OTA", "Never update the device", "Use a different MCU each day", "Disable secure boot"], correctIndex: 0, explanation: "The ROM root is permanent, but agility above it lets new algorithms arrive via over-the-air updates." },
        { id: "quantum-e10-q5", type: "Lesson", challenge: "The Stuxnet warning.", text: "What does Stuxnet's use of stolen signing certs warn about for PQC?", options: ["If an attacker can produce a valid signature, every downstream trust check passes — so roots must be unforgeable", "Signatures are unimportant", "Firmware needs no root of trust", "Quantum computers signed Stuxnet"], correctIndex: 0, explanation: "Stuxnet's keys were stolen; a quantum-broken algorithm would let attackers forge them outright — roots must resist that." },
      ],
    },
  },
];

// ── CTF mode — hands-on PQC-migration terminal per stage (quiz = half-clear) ──
type Cmd = [verb: string, frag: string, lines: string[]];
function mkCtf(scenario: string, brief: string, open: string, a: Cmd, b: Cmd, labels: [string, string, string], hints: string[]): CtfConfig {
  return {
    scenario, hint: hints[0], hints,
    fragments: [
      { trigger: "/briefing.txt", value: open, label: labels[0] },
      { trigger: a[0], value: a[1], label: labels[1] },
      { trigger: b[0], value: b[1], label: labels[2] },
    ],
    files: { "/briefing.txt": brief },
    dirs: { "/": [{ name: "briefing.txt", isDir: false }] },
    extraCommands: { [a[0]]: () => ({ lines: a[2] }), [b[0]]: () => ({ lines: b[2] }) },
  };
}

const Q5_CTF: Record<string, CtfConfig> = {
  "quantum-e01": mkCtf(
    "You can't migrate what you can't find. Scan an estate for quantum-vulnerable crypto and build a Cryptographic Bill of Materials (CBOM).",
    "OP: BUILD A CBOM\nTarget: an enterprise estate with unknown crypto usage.\nGoal: scan for weak/quantum-vulnerable crypto, then build the CBOM.\nSequence: scan-crypto -> build-cbom",
    "FLAG{CB0M_",
    ["scan-crypto", "W34K_CRYPT0_", ["Scanning binaries, libs, configs, and certs for crypto usage ...", "Found RSA-2048, ECDSA P-256, and a stray SHA-1 cert — all quantum-vulnerable.", "Next: build-cbom"]],
    ["build-cbom", "F0UND}", ["Cataloging every algorithm, key size, and location into a CBOM ...", "CBOM complete — you now know exactly what must migrate.", "Run 'assemble' to retrieve your fragment."]],
    ["Mission Brief", "Weak Crypto Found", "CBOM Built"],
    ["Read the briefing. Run: cat briefing.txt", "Scan for crypto. Run: scan-crypto", "Build the CBOM. Run: build-cbom", "Run 'assemble', then submit the flag"],
  ),
  "quantum-e02": mkCtf(
    "Hardcoded algorithms make migration impossible. Audit a codebase for hardcoded crypto and refactor it behind a provider abstraction so algorithms can be swapped — crypto-agility.",
    "OP: CRYPTO-AGILITY\nTarget: an app with hardcoded RSA calls everywhere.\nGoal: audit the hardcoded crypto, then abstract it behind a provider.\nSequence: audit-hardcoded -> abstract-provider",
    "FLAG{CRYPT0_",
    ["audit-hardcoded", "4G1L1TY_", ["Grepping for direct crypto calls and pinned algorithm names ...", "47 hardcoded RSA/ECDSA call sites — no way to swap algorithms today.", "Next: abstract-provider"]],
    ["abstract-provider", "4BSTR4CT3D}", ["Refactoring calls behind a crypto-provider interface with negotiated algorithms ...", "Algorithms are now swappable via config — the app is crypto-agile.", "Run 'assemble' to retrieve your fragment."]],
    ["Mission Brief", "Hardcoded Crypto Audited", "Provider Abstracted"],
    ["Read the briefing. Run: cat briefing.txt", "Audit hardcoded crypto. Run: audit-hardcoded", "Abstract behind a provider. Run: abstract-provider", "Run 'assemble', then submit the flag"],
  ),
  "quantum-e03": mkCtf(
    "Deploy a hybrid TLS 1.3 handshake that combines classical X25519 with post-quantum ML-KEM, so the session is safe even if one is broken.",
    "OP: HYBRID TLS\nTarget: a TLS 1.3 service still on classical-only key exchange.\nGoal: negotiate the hybrid group, then verify the handshake.\nSequence: negotiate-hybrid -> verify-handshake",
    "FLAG{HYBR1D_TLS_",
    ["negotiate-hybrid", "ML_K3M_", ["Adding X25519MLKEM768 to the supported groups and offering it ...", "Client and server agree on the hybrid group — both shares combined into the secret.", "Next: verify-handshake"]],
    ["verify-handshake", "768}", ["Completing the handshake and checking the negotiated parameters ...", "Session keyed by X25519 + ML-KEM-768 — secure unless BOTH are broken.", "Run 'assemble' to retrieve your fragment."]],
    ["Mission Brief", "Hybrid Group Negotiated", "Handshake Verified"],
    ["Read the briefing. Run: cat briefing.txt", "Negotiate the hybrid group. Run: negotiate-hybrid", "Verify the handshake. Run: verify-handshake", "Run 'assemble', then submit the flag"],
  ),
  "quantum-e04": mkCtf(
    "Bring PQC to the tunnels. Enable post-quantum key exchange on SSH (and IPsec/WireGuard) and confirm the tunnel still works end to end.",
    "OP: PQC TUNNELS\nTarget: SSH/IPsec/WireGuard on classical key exchange.\nGoal: enable a PQC KEX, then test the tunnel.\nSequence: enable-pqc-kex -> test-tunnel",
    "FLAG{PQC_TUNN3L_",
    ["enable-pqc-kex", "SSH_", ["Enabling sntrup761x25519 / ML-KEM hybrid KEX in the tunnel config ...", "PQC key exchange offered first, with a classical fallback.", "Next: test-tunnel"]],
    ["test-tunnel", "3N4BL3D}", ["Bringing the tunnel up and checking the negotiated KEX ...", "Tunnel established over a post-quantum key exchange — traffic is HNDL-safe.", "Run 'assemble' to retrieve your fragment."]],
    ["Mission Brief", "PQC KEX Enabled", "Tunnel Tested"],
    ["Read the briefing. Run: cat briefing.txt", "Enable PQC key exchange. Run: enable-pqc-kex", "Test the tunnel. Run: test-tunnel", "Run 'assemble', then submit the flag"],
  ),
  "quantum-e05": mkCtf(
    "Re-root trust. Issue a hybrid (composite) certificate carrying both a classical and a PQC signature, and validate the dual chain — PKI migration.",
    "OP: PKI MIGRATION\nTarget: a PKI issuing classical-only certificates.\nGoal: issue a composite cert, then validate the dual chain.\nSequence: issue-composite -> validate-chain",
    "FLAG{HYBR1D_C3RT_",
    ["issue-composite", "DU4L_", ["Generating a composite cert with ECDSA + ML-DSA signatures from the HSM ...", "Composite leaf issued — old clients read the classical part, new clients verify both.", "Next: validate-chain"]],
    ["validate-chain", "CH41N}", ["Validating the certificate up a dual (classical + PQC) chain to the root ...", "Both signatures verify — trust re-rooted for the quantum era.", "Run 'assemble' to retrieve your fragment."]],
    ["Mission Brief", "Composite Cert Issued", "Dual Chain Validated"],
    ["Read the briefing. Run: cat briefing.txt", "Issue a composite cert. Run: issue-composite", "Validate the chain. Run: validate-chain", "Run 'assemble', then submit the flag"],
  ),
  "quantum-e06": mkCtf(
    "Wire the new math into the stack. Load a PQC provider (liboqs/OpenSSL provider) and patch a KyberSlash timing side channel in the ML-KEM implementation.",
    "OP: LIBRARY MIGRATION\nTarget: an app whose crypto library lacks PQC (and has KyberSlash).\nGoal: load the PQC provider, then patch the timing leak.\nSequence: load-provider -> patch-kyberslash",
    "FLAG{L1BOQS_",
    ["load-provider", "PR0V1D3R_", ["Building liboqs and loading the oqs-provider into OpenSSL ...", "ML-KEM/ML-DSA now available to the app via the provider.", "Next: patch-kyberslash"]],
    ["patch-kyberslash", "W1R3D}", ["Auditing the ML-KEM decode for KyberSlash (division timing leak) ...", "Replaced the variable-time division with a constant-time routine — patched.", "Run 'assemble' to retrieve your fragment."]],
    ["Mission Brief", "PQC Provider Loaded", "KyberSlash Patched"],
    ["Read the briefing. Run: cat briefing.txt", "Load the PQC provider. Run: load-provider", "Patch the timing leak. Run: patch-kyberslash", "Run 'assemble', then submit the flag"],
  ),
  "quantum-e07": mkCtf(
    "PQC handshakes are bigger. Measure the on-the-wire bytes and latency, then tune (MTU/record sizes) so the migration stays fast in production.",
    "OP: SIZE & TUNE PQC\nTarget: a service seeing larger PQC handshakes.\nGoal: measure the bytes/latency, then tune for production.\nSequence: measure-bytes -> tune-mtu",
    "FLAG{PQC_H4NDSH4K3_",
    ["measure-bytes", "S1Z3D_", ["Capturing handshakes: classical ~1-2 KB vs hybrid ML-KEM ~2-3 KB ...", "Extra bytes can cross an MTU and add a round trip on bad networks.", "Next: tune-mtu"]],
    ["tune-mtu", "TUN3D}", ["Tuning MTU/initcwnd and record sizes to absorb the larger ClientHello ...", "Handshake fits the path again — PQC with negligible latency cost.", "Run 'assemble' to retrieve your fragment."]],
    ["Mission Brief", "Handshake Sized", "Production Tuned"],
    ["Read the briefing. Run: cat briefing.txt", "Measure the bytes. Run: measure-bytes", "Tune for production. Run: tune-mtu", "Run 'assemble', then submit the flag"],
  ),
  "quantum-e08": mkCtf(
    "Prove it's really safe. Run the implementation through FIPS 140-3 / CMVP validation and check for side channels — validation without scrutiny is how Dual_EC happened.",
    "OP: PQC VALIDATION\nTarget: a PQC module headed for FIPS 140-3 validation.\nGoal: run the CAVP tests, then check for side channels.\nSequence: run-cavp -> check-sidechannel",
    "FLAG{F1PS_",
    ["run-cavp", "140_3_", ["Running CAVP known-answer tests for ML-KEM/ML-DSA against NIST vectors ...", "All algorithm test vectors pass — correctness validated.", "Next: check-sidechannel"]],
    ["check-sidechannel", "V4L1D4T3D}", ["Testing for timing/power leakage and verifying constant-time behavior ...", "No exploitable side channel — module passes validation with real scrutiny.", "Run 'assemble' to retrieve your fragment."]],
    ["Mission Brief", "CAVP Passed", "Side-Channels Checked"],
    ["Read the briefing. Run: cat briefing.txt", "Run CAVP tests. Run: run-cavp", "Check for side channels. Run: check-sidechannel", "Run 'assemble', then submit the flag"],
  ),
  "quantum-e09": mkCtf(
    "Run the migration like a deploy. Stage a progressive PQC cutover with monitoring, and verify the rollback path works before going wide.",
    "OP: CUTOVER\nTarget: a fleet migrating to PQC in production.\nGoal: stage a progressive rollout, then verify rollback.\nSequence: stage-rollout -> verify-rollback",
    "FLAG{ST4G3D_",
    ["stage-rollout", "CUT0V3R_", ["Rolling PQC to 1% -> 10% -> 50% with metrics on handshake success and latency ...", "No regressions; canaries healthy — safe to widen.", "Next: verify-rollback"]],
    ["verify-rollback", "R0LL3D_0UT}", ["Exercising the rollback runbook (flip back to classical) on a canary ...", "Rollback works instantly — full PQC cutover completed safely.", "Run 'assemble' to retrieve your fragment."]],
    ["Mission Brief", "Rollout Staged", "Rollback Verified"],
    ["Read the briefing. Run: cat briefing.txt", "Stage the rollout. Run: stage-rollout", "Verify rollback. Run: verify-rollback", "Run 'assemble', then submit the flag"],
  ),
  "quantum-e10": mkCtf(
    "Quantum-safe at the edge. Sign firmware with a PQC signature and verify the boot chain on a constrained device, so a future quantum attacker can't forge updates — the Stuxnet lesson.",
    "OP: QUANTUM-SAFE FIRMWARE\nTarget: a constrained IoT device whose firmware is classically signed.\nGoal: sign firmware with PQC, then verify the boot chain.\nSequence: sign-firmware -> verify-bootchain",
    "FLAG{F1RMW4R3_",
    ["sign-firmware", "PQC_", ["Signing the firmware image with ML-DSA (stateful hash-based as a backup) ...", "Image signed with a quantum-safe signature small enough for the device.", "Next: verify-bootchain"]],
    ["verify-bootchain", "S1GN3D}", ["Verifying the PQC signature against the immutable root of trust at boot ...", "Boot chain accepts only PQC-signed firmware — forged updates impossible.", "Run 'assemble' to retrieve your fragment."]],
    ["Mission Brief", "Firmware Signed", "Boot Chain Verified"],
    ["Read the briefing. Run: cat briefing.txt", "Sign the firmware. Run: sign-firmware", "Verify the boot chain. Run: verify-bootchain", "Run 'assemble', then submit the flag"],
  ),
};

for (const s of quantum5Stages) {
  const ctf = Q5_CTF[s.id];
  if (ctf) { s.challengeType = "ctf"; s.ctf = ctf; }
}

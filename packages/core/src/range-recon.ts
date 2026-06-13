import type { EpochConfig, StageConfig } from "./types";

// ── Cyber Range: Recon & Enumeration ─────────────────────────────────────────
// The reconnaissance toolkit — nmap (host discovery, port + version scanning),
// the Nmap Scripting Engine, and web content discovery (gobuster/ffuf). Simulated
// faithful tool output against the lab network; every offensive step pairs with
// the defensive lesson. All material from public sources (Nmap docs, OWASP).

export const rangeReconEpoch: EpochConfig = {
  id: "range-recon",
  name: "Recon & Enumeration",
  subtitle: "Map the attack surface — nmap, NSE, and content discovery",
  description:
    "Before you exploit, you enumerate. Master the recon toolkit: host discovery and port scanning, service/version fingerprinting, the Nmap Scripting Engine for vuln detection, and web content discovery — the phase that decides every engagement.",
  emoji: "🛰️",
  color: "Sky",
  unlocked: true,
};

const kali = { ip: "10.10.14.5", hostname: "kali", os: "Kali Linux 2024.1" } as const;

export const rangeReconStages: StageConfig[] = [
  // ─── Lab 1: host discovery + port scanning ──────────────────────────────────
  {
    epochId: "range-recon",
    wonder: { name: "The Recon Ridge", location: "Offensive Security Lab", era: "Present Day", emoji: "🛰️" },
    id: "recon-01",
    order: 1,
    title: "Host Discovery & Port Scanning",
    subtitle: "Find live hosts and open doors with nmap",
    category: "cybersecurity",
    xp: 150,
    badge: { id: "badge-recon-scan", name: "Port Scanner", emoji: "🔦" },
    challengeType: "ctf",
    info: {
      tagline: "An engagement begins with a map — sweep the network for live hosts, then scan the target for open ports.",
      year: 1997,
      overview: [
        "Reconnaissance is the phase that quietly decides every engagement: you cannot attack what you have not found. The first move is host discovery — figuring out which addresses on a network are actually alive — followed by port scanning each live host to see which services are listening. nmap, the standard tool since 1997, does both, and the quality of your scan determines whether you find the one forgotten, unpatched service or walk past it.",
        "Port scanning works by sending probes and reading the responses. A SYN scan (-sS) sends a TCP SYN and watches for a SYN/ACK (open), a RST (closed), or silence (filtered by a firewall) — without completing the handshake, which makes it fast and quiet. Scanning only the default 1,000 ports is a classic mistake; the interesting service is often on a high port, so -p- (all 65,535 ports) is what separates a thorough operator from a lazy one. Timing (-T0 paranoid to -T5 insane) trades stealth for speed.",
      ],
      technical: {
        title: "nmap Host Discovery + Port States",
        body: [
          "The scans you reach for first:\n- -sn — ping sweep: discover live hosts without port scanning (host discovery only).\n- -sS — TCP SYN 'half-open' scan: fast and stealthy, the default for port discovery.\n- -p- — scan all 65,535 ports (the default is only the top 1,000).\n- -T4 — aggressive timing (faster); -T0/-T1 are slow and stealthy.\n- -Pn — skip host discovery (treat the host as up) when ICMP is blocked.",
          "How to read the results — a port is reported as one of:\n- open — a service is actively accepting connections (your attack surface).\n- closed — reachable but nothing is listening.\n- filtered — a firewall is dropping the probe, so the state is unknown.\nThe blue-team mirror: the same scan that maps your exposure for an attacker is the asset-and-exposure scan your own team should run continuously — and an IDS will flag a noisy full-port SYN sweep, which is why timing matters.",
        ],
        codeExample: {
          label: "Discovery to open ports",
          code: `# 1) Which hosts are alive on the subnet?
$ nmap -sn 10.10.10.0/24
Nmap scan report for 10.10.10.40   Host is up.

# 2) Scan ALL ports on the live target (SYN scan, aggressive timing)
$ nmap -sS -p- -T4 10.10.10.40
PORT     STATE  SERVICE
22/tcp   open   ssh
80/tcp   open   http
445/tcp  open   microsoft-ds
3306/tcp open   mysql
8080/tcp open   http-proxy   # high port — missed by a default scan`,
        },
      },
      incident: {
        title: "The Scan That Finds (or Misses) Everything",
        when: "Every engagement; inverted, every attacker's staging",
        where: "Penetration tests, red teams, and asset/exposure management programs",
        impact: "A single unscanned high port is a missed service — and a missed (or unmissed) compromise",
        body: [
          "nmap's enduring lesson is that thoroughness beats cleverness in recon: breaches routinely trace back to a service nobody knew was exposed because the scan stopped at port 1,000. The operator who runs -p- finds the forgotten admin panel on 8080; the one who doesn't, doesn't.",
          "For defenders the takeaway is symmetrical and urgent: run these scans against your own estate first. Continuous external scanning, an accurate asset inventory, and alerting on anomalous scan patterns are exposure management in practice — the side that maps the network best usually wins.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Operator", sub: "nmap -sn / -sS -p-", type: "attacker" },
          { label: "10.10.10.0/24", sub: "host discovery", type: "system" },
          { label: "10.10.10.40", sub: "open: 22,80,445,3306,8080", type: "victim" },
          { label: "Attack surface", sub: "→ enumerate services next", type: "result" },
        ],
      },
      timeline: [
        { year: 1997, event: "Fyodor releases nmap" },
        { year: 2002, event: "SYN scan + timing templates become the recon standard", highlight: true },
        { year: 2017, event: "Exposure management formalizes 'scan yourself first'" },
      ],
      keyTakeaways: [
        "Recon decides the engagement: discover live hosts, then scan each for open ports",
        "-sS is a fast, stealthy half-open SYN scan; -p- scans all 65,535 ports",
        "Port states: open (attack surface), closed (nothing listening), filtered (firewall dropping)",
        "Scanning only the top 1,000 ports misses high-port services — always consider -p-",
        "Defenders should run the same scans first: exposure management is recon turned inward",
      ],
      references: [
        { title: "Nmap Reference Guide — Port Scanning", url: "https://nmap.org/book/man-port-scanning-basics.html" },
        { title: "Nmap — Host Discovery", url: "https://nmap.org/book/man-host-discovery.html" },
      ],
    },
    quiz: {
      questions: [
        { id: "recon-01-q1", type: "Discovery", challenge: "Live hosts only.", text: "Which nmap flag performs host discovery (a ping sweep) without port scanning?", options: ["-sn", "-sS", "-p-", "-A"], correctIndex: 0, explanation: "-sn discovers which hosts are up without scanning ports." },
        { id: "recon-01-q2", type: "Scan Type", challenge: "Half-open.", text: "What is the -sS scan?", options: ["A stealthy TCP SYN 'half-open' scan that never completes the handshake", "A UDP scan", "A full connect scan", "A ping only"], correctIndex: 0, explanation: "SYN scans send SYN and read the response without finishing the handshake — fast and quiet." },
        { id: "recon-01-q3", type: "Coverage", challenge: "All ports.", text: "What does -p- do?", options: ["Scans all 65,535 TCP ports instead of the default top 1,000", "Scans port 0 only", "Pings the host", "Disables scanning"], correctIndex: 0, explanation: "-p- covers every port; high-port services are missed otherwise." },
        { id: "recon-01-q4", type: "Port State", challenge: "Firewall.", text: "A port reported 'filtered' means what?", options: ["A firewall is dropping the probe, so the true state is unknown", "A service is listening", "Nothing is listening", "The host is down"], correctIndex: 0, explanation: "Filtered = no response (usually a firewall), so open/closed can't be determined." },
        { id: "recon-01-q5", type: "Port State", challenge: "Attack surface.", text: "Which port state represents your attack surface?", options: ["open", "closed", "filtered", "unknown"], correctIndex: 0, explanation: "An open port has a service actively accepting connections." },
        { id: "recon-01-q6", type: "Timing", challenge: "Stealth vs speed.", text: "What does -T4 control?", options: ["Scan timing/aggressiveness (faster but noisier)", "The target port", "The output format", "The payload"], correctIndex: 0, explanation: "Timing templates (-T0..-T5) trade stealth for speed." },
        { id: "recon-01-q7", type: "ICMP", challenge: "Ping blocked.", text: "If a host blocks ping but you know it's up, which flag treats it as alive?", options: ["-Pn", "-sn", "-F", "-6"], correctIndex: 0, explanation: "-Pn skips host discovery and scans the host directly." },
        { id: "recon-01-q8", type: "Defense", challenge: "Blue team.", text: "Why should defenders run these scans?", options: ["To find exposed services before an attacker does (exposure management)", "To slow the network", "Because nmap encrypts traffic", "It is required by TCP"], correctIndex: 0, explanation: "Finding your own forgotten open port first is the goal of exposure management." },
      ],
    },
    ctf: {
      attackerMachine: kali,
      targetMachine: { ip: "10.10.10.40", hostname: "lab-target", os: "Linux/Windows (unknown — enumerate)", openPorts: "discover them", vulnerability: "(unknown — recon)" },
      scenario: "You're dropped onto the lab network 10.10.10.0/24 with no map. Find the live host, then scan it for every open port. Collect the fragments as you go.",
      hint: "Sweep the subnet for live hosts, then run a full-port SYN scan on the target you find.",
      hints: [
        "Read the briefing. Run: cat briefing.txt",
        "Find live hosts on the subnet. Run: ping-sweep 10.10.10.0/24",
        "Full-port SYN scan the target. Run: syn-scan 10.10.10.40",
        "Run 'assemble' to view the assembled flag and the submit command",
      ],
      fragments: [
        { trigger: "/briefing.txt", value: "FLAG{NMAP_", label: "Recon Briefing" },
        { trigger: "ping-sweep 10.10.10.0/24", value: "SYN_SC4N_", label: "Live Host Found" },
        { trigger: "syn-scan 10.10.10.40", value: "0P3N_P0RTS}", label: "Open Ports Mapped" },
      ],
      files: {
        "/briefing.txt": [
          "RANGE — RECON LAB 1: HOST DISCOVERY & PORT SCANNING",
          "Network: 10.10.10.0/24   You: 10.10.14.5 (kali)",
          "Goal: find the live host, map every open port.",
          "Sequence: ping-sweep 10.10.10.0/24 -> syn-scan 10.10.10.40 -> assemble",
        ].join("\n"),
      },
      dirs: { "/": [{ name: "briefing.txt", isDir: false }] },
      extraCommands: {
        "ping-sweep": (args: string[]) => {
          if (args[0] !== "10.10.10.0/24") return { lines: ["Usage: ping-sweep 10.10.10.0/24"] };
          return {
            lines: [
              "$ nmap -sn 10.10.10.0/24",
              "Nmap scan report for 10.10.10.1    Host is up (gateway)",
              "Nmap scan report for 10.10.10.40   Host is up   <-- target",
              "Nmap done: 256 IP addresses (2 hosts up)",
              "",
              ">> LEARN: -sn discovers WHO is alive before you scan WHAT's open",
              "   Map the network first; scanning dead IPs wastes time and makes noise.",
              "   Fragment collected.",
            ],
          };
        },
        "syn-scan": (args: string[]) => {
          if (args[0] !== "10.10.10.40") return { lines: ["Usage: syn-scan 10.10.10.40"] };
          return {
            lines: [
              "$ nmap -sS -p- -T4 10.10.10.40",
              "PORT     STATE  SERVICE",
              "22/tcp   open   ssh",
              "80/tcp   open   http",
              "445/tcp  open   microsoft-ds",
              "3306/tcp open   mysql",
              "8080/tcp open   http-proxy   <-- high port (a default scan misses this)",
              "",
              ">> LEARN: -p- found 8080 — the default top-1000 scan would have missed it",
              ">> BLUE TEAM: an IDS flags this noisy SYN sweep; close/segment unused ports.",
              "   Run 'assemble' to view the flag and the submit command.",
            ],
          };
        },
      },
    },
  },

  // ─── Lab 2: service + version enumeration ───────────────────────────────────
  {
    epochId: "range-recon",
    wonder: { name: "The Fingerprint Vault", location: "Offensive Security Lab", era: "Present Day", emoji: "🔬" },
    id: "recon-02",
    order: 2,
    title: "Service & Version Enumeration",
    subtitle: "Fingerprint what's behind the open ports",
    category: "cybersecurity",
    xp: 150,
    badge: { id: "badge-recon-enum", name: "Enumerator", emoji: "🔬" },
    challengeType: "ctf",
    info: {
      tagline: "An open port is just a door — version detection tells you exactly which lock it has, and which exploit fits.",
      year: 1997,
      overview: [
        "Knowing a port is open is not enough; you need to know precisely what is running behind it and at which version, because exploits target specific software versions. nmap's -sV probes each open port and matches the response against a database of service fingerprints to report the product and version — 'Apache httpd 2.4.49', 'OpenSSH 7.4', 'vsftpd 2.3.4'. That exact string is the difference between a blind guess and a targeted hit: 2.4.49 maps directly to a known path-traversal RCE, and a vulnerable vsftpd build is a backdoored one.",
        "Beyond version detection, enumeration means pulling every detail a service will volunteer. Banner grabbing reads the greeting a service prints on connect; -sC runs nmap's safe default scripts to enumerate SMB shares, HTTP titles, SSL certificates, and more; -A bundles version detection, OS detection, default scripts, and traceroute into one aggressive sweep. The operator's mantra is 'enumerate, then exploit' — time spent here is repaid many times over in the exploitation phase.",
      ],
      technical: {
        title: "Version Detection + Service Enumeration",
        body: [
          "The enumeration flags:\n- -sV — probe open ports for service + version (the key to choosing an exploit).\n- -sC — run the safe 'default' category of NSE scripts (banners, shares, titles, certs).\n- -A — aggressive: -sV + -O (OS detection) + -sC + traceroute in one go.\n- --version-intensity 9 — try harder to fingerprint stubborn services.",
          "What you do with a version string:\n- Map it to known CVEs (searchsploit <product> <version>, or msfconsole search).\n- Banner-grab manually with nc <ip> <port> to confirm what a service announces.\n- Note default/weak configs the enumeration reveals (anonymous FTP, open SMB shares, directory listing).\nThe blue-team mirror: services that leak precise version banners hand attackers a targeting list — minimize banner disclosure, patch to current versions, and watch for version-probing scans.",
        ],
        codeExample: {
          label: "Version detection → exploit candidate",
          code: `$ nmap -sV -sC 10.10.10.40
PORT     STATE SERVICE  VERSION
21/tcp   open  ftp      vsftpd 2.3.4         # ← known backdoored build
22/tcp   open  ssh      OpenSSH 7.4
80/tcp   open  http     Apache httpd 2.4.49  # ← CVE-2021-41773 path traversal/RCE
|_http-title: Lab Corp Intranet
445/tcp  open  smb      Samba 4.x
| smb-enum-shares: \\\\10.10.10.40\\backups (READ)

$ searchsploit Apache 2.4.49
Apache 2.4.49 - Path Traversal & Remote Code Execution  | CVE-2021-41773`,
        },
      },
      incident: {
        title: "vsftpd 2.3.4 — When the Version IS the Vulnerability",
        when: "2011 (vsftpd backdoor) → a recurring teaching example",
        where: "Any host exposing a precise, vulnerable service version",
        impact: "A single version string (e.g. vsftpd 2.3.4) instantly identifies an exploitable — sometimes backdoored — service",
        body: [
          "In 2011 the vsftpd 2.3.4 source was briefly trojaned with a backdoor that opened a root shell on a smiley-face login. Ever since, that exact version string in an nmap -sV output is shorthand for 'instant root' — the clearest possible demonstration that version enumeration is the hinge of an engagement.",
          "The defensive lesson is direct: precise version banners are a gift to attackers. Keep services patched to current versions, suppress unnecessary banner detail, and treat version-probing scans as reconnaissance worth alerting on — because the moment an attacker reads your version, they've already chosen their exploit.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Operator", sub: "nmap -sV -sC", type: "attacker" },
          { label: "Open ports", sub: "21/22/80/445", type: "system" },
          { label: "Versions", sub: "vsftpd 2.3.4, Apache 2.4.49", type: "victim" },
          { label: "Exploit chosen", sub: "→ map version to CVE", type: "result" },
        ],
      },
      timeline: [
        { year: 1997, event: "nmap ships service detection" },
        { year: 2011, event: "vsftpd 2.3.4 backdoor makes 'version = vuln' iconic", highlight: true },
        { year: 2021, event: "Apache 2.4.49 path traversal (CVE-2021-41773) — version-targeted RCE" },
      ],
      keyTakeaways: [
        "An open port isn't enough — -sV gives the exact service + version that picks the exploit",
        "-sC runs safe default scripts (SMB shares, HTTP titles, certs); -A bundles everything",
        "Map version strings to CVEs with searchsploit or msfconsole search",
        "vsftpd 2.3.4 and Apache 2.4.49 show that a version string can BE the vulnerability",
        "Defenders: patch to current, minimize banner disclosure, alert on version-probing",
      ],
      references: [
        { title: "Nmap — Service & Version Detection", url: "https://nmap.org/book/vscan.html" },
        { title: "Exploit-DB / searchsploit", url: "https://www.exploit-db.com/searchsploit" },
      ],
    },
    quiz: {
      questions: [
        { id: "recon-02-q1", type: "Enumeration", challenge: "Version detection.", text: "Which nmap flag identifies the service product and version?", options: ["-sV", "-sn", "-Pn", "-T4"], correctIndex: 0, explanation: "-sV probes open ports and reports product + version." },
        { id: "recon-02-q2", type: "Scripts", challenge: "Default scripts.", text: "What does -sC do?", options: ["Runs the safe 'default' category of NSE scripts (shares, titles, certs)", "Closes ports", "Cracks passwords", "Pings the host"], correctIndex: 0, explanation: "-sC runs the default NSE scripts for extra enumeration." },
        { id: "recon-02-q3", type: "Aggressive", challenge: "All in one.", text: "What does -A bundle?", options: ["-sV + OS detection + default scripts + traceroute", "Only a ping", "A SYN flood", "Password spraying"], correctIndex: 0, explanation: "-A is the aggressive all-in-one enumeration scan." },
        { id: "recon-02-q4", type: "Mapping", challenge: "Version → exploit.", text: "After finding 'Apache httpd 2.4.49', what's the next recon step?", options: ["Map the version to known CVEs (e.g. searchsploit / msf search)", "Reboot your box", "Delete the port", "Change LHOST"], correctIndex: 0, explanation: "2.4.49 maps to CVE-2021-41773 path traversal/RCE." },
        { id: "recon-02-q5", type: "Banner", challenge: "Manual grab.", text: "How do you manually grab a service's banner?", options: ["nc <ip> <port> and read the greeting", "nmap -sn", "ping <ip>", "ls -la"], correctIndex: 0, explanation: "netcat connects and shows the banner the service announces." },
        { id: "recon-02-q6", type: "Real World", challenge: "Infamous version.", text: "Why is 'vsftpd 2.3.4' an infamous nmap result?", options: ["That build was backdoored to give a root shell", "It's the newest FTP server", "It can't be scanned", "It's a Windows service"], correctIndex: 0, explanation: "The 2.3.4 source was trojaned with a backdoor in 2011." },
        { id: "recon-02-q7", type: "SMB", challenge: "Share enum.", text: "What does smb-enum-shares reveal?", options: ["Accessible SMB shares (e.g. a READable backups share)", "The CPU model", "DNS records", "The MAC vendor only"], correctIndex: 0, explanation: "It enumerates SMB shares and their access — often a foothold." },
        { id: "recon-02-q8", type: "Defense", challenge: "Reduce disclosure.", text: "How do defenders blunt version enumeration?", options: ["Patch to current versions and minimize banner disclosure", "Open more ports", "Disable logging", "Use Telnet"], correctIndex: 0, explanation: "Precise banners + old versions are exactly what attackers target." },
      ],
    },
    ctf: {
      attackerMachine: kali,
      targetMachine: { ip: "10.10.10.40", hostname: "lab-target", os: "Linux", openPorts: "21, 22, 80, 445", vulnerability: "vulnerable service versions (enumerate)" },
      scenario: "You've mapped the open ports on 10.10.10.40. Now fingerprint exactly what's running — the versions tell you which exploits fit. Banner-grab to confirm.",
      hint: "Run version detection, then grab a banner to confirm the exact build.",
      hints: [
        "Read the briefing. Run: cat briefing.txt",
        "Detect service versions. Run: version-scan 10.10.10.40",
        "Confirm a service banner directly. Run: banner-grab 10.10.10.40",
        "Run 'assemble' to view the assembled flag and the submit command",
      ],
      fragments: [
        { trigger: "/briefing.txt", value: "FLAG{S3RV1C3_", label: "Enumeration Briefing" },
        { trigger: "version-scan 10.10.10.40", value: "V3RS10N_", label: "Versions Fingerprinted" },
        { trigger: "banner-grab 10.10.10.40", value: "3NUM3R4T3D}", label: "Banner Confirmed" },
      ],
      files: {
        "/briefing.txt": [
          "RANGE — RECON LAB 2: SERVICE & VERSION ENUMERATION",
          "Target 10.10.10.40 open ports: 21,22,80,445",
          "Goal: fingerprint exact versions, confirm via banner.",
          "Sequence: version-scan 10.10.10.40 -> banner-grab 10.10.10.40 -> assemble",
        ].join("\n"),
      },
      dirs: { "/": [{ name: "briefing.txt", isDir: false }] },
      extraCommands: {
        "version-scan": (args: string[]) => {
          if (args[0] !== "10.10.10.40") return { lines: ["Usage: version-scan 10.10.10.40"] };
          return {
            lines: [
              "$ nmap -sV -sC 10.10.10.40",
              "PORT    STATE SERVICE  VERSION",
              "21/tcp  open  ftp      vsftpd 2.3.4         <-- backdoored build",
              "22/tcp  open  ssh      OpenSSH 7.4",
              "80/tcp  open  http     Apache httpd 2.4.49  <-- CVE-2021-41773 (RCE)",
              "445/tcp open  smb      Samba 4.x",
              "| smb-enum-shares: \\\\10.10.10.40\\backups (READ)",
              "",
              ">> LEARN: the VERSION picks the exploit",
              "   vsftpd 2.3.4 = instant root; Apache 2.4.49 = path-traversal RCE.",
              "   searchsploit <product> <version> maps a banner straight to a CVE.",
              "   Fragment collected.",
            ],
          };
        },
        "banner-grab": (args: string[]) => {
          if (args[0] !== "10.10.10.40") return { lines: ["Usage: banner-grab 10.10.10.40"] };
          return {
            lines: [
              "$ nc 10.10.10.40 21",
              "220 (vsFTPd 2.3.4)",
              "$ nc 10.10.10.40 80   (HEAD / HTTP/1.0)",
              "Server: Apache/2.4.49 (Unix)",
              "",
              ">> LEARN: banner grabbing confirms the version by hand",
              "   Services announce themselves on connect — read the greeting.",
              ">> BLUE TEAM: suppress version banners; patch 2.3.4 / 2.4.49 immediately.",
              "   Run 'assemble' to view the flag and the submit command.",
            ],
          };
        },
      },
    },
  },

  // ─── Lab 3: NSE + vuln scanning ─────────────────────────────────────────────
  {
    epochId: "range-recon",
    wonder: { name: "The Script Engine", location: "Offensive Security Lab", era: "Present Day", emoji: "📜" },
    id: "recon-03",
    order: 3,
    title: "NSE: Scripted Vulnerability Scanning",
    subtitle: "Turn nmap into a vulnerability scanner",
    category: "cybersecurity",
    xp: 175,
    badge: { id: "badge-recon-nse", name: "Script Kiddie (the good kind)", emoji: "📜" },
    challengeType: "ctf",
    info: {
      tagline: "The Nmap Scripting Engine turns a port scanner into a recon Swiss-army knife — and a vulnerability scanner.",
      year: 2007,
      overview: [
        "The Nmap Scripting Engine (NSE), added in 2007, is what elevated nmap from a port scanner to a full reconnaissance platform. NSE runs Lua scripts against discovered services to do deep enumeration and, crucially, vulnerability detection: there are scripts to enumerate SMB shares and users, brute-force logins, check SSL/TLS configuration, and confirm specific CVEs like MS17-010 or Heartbleed. A single command can move you from 'port 445 is open' to 'this host is confirmed vulnerable to EternalBlue.'",
        "Scripts are organized into categories you can invoke as a group: default (-sC, safe and informative), safe, discovery, auth, brute, and vuln (the one that confirms exploitable flaws). You run them with --script, by name or category — nmap --script vuln <ip> unleashes the whole vulnerability set. Used responsibly and with authorization, NSE compresses hours of manual checking into one scan; used carelessly, brute and intrusive scripts can lock accounts or crash fragile services, so knowing what a script does before running it is part of the craft.",
      ],
      technical: {
        title: "Running NSE Scripts",
        body: [
          "Script categories worth knowing:\n- default (-sC) — safe, informative scripts run automatically.\n- discovery — enumerate more about the host/service (smb-enum-shares, http-enum).\n- vuln — confirm specific vulnerabilities (smb-vuln-ms17-010, ssl-heartbleed).\n- auth / brute — credential checks and brute-forcing (intrusive — use with care).",
          "Invocation patterns:\n- nmap --script <name> -p<port> <ip> — run a specific script (e.g. smb-vuln-ms17-010).\n- nmap --script vuln <ip> — run the whole vuln category against a host.\n- nmap --script smb-enum-shares,smb-enum-users -p445 <ip> — combine scripts.\n- --script-args <k=v> — pass arguments to a script.\nThe defensive read: NSE vuln scripts are also how YOUR team validates exposure — run them against your estate, and detect intrusive brute/auth scripts hitting your services (they're noisy and account-locking).",
        ],
        codeExample: {
          label: "From open port to confirmed vulnerability",
          code: `# Enumerate SMB, then confirm the specific flaw
$ nmap --script smb-enum-shares,smb-vuln-ms17-010 -p445 10.10.10.40
| smb-enum-shares:
|   \\\\10.10.10.40\\backups   Anonymous READ
| smb-vuln-ms17-010:
|   VULNERABLE: Remote Code Execution (MS17-010)
|_  State: VULNERABLE  (CVE-2017-0143..0148)

# Or unleash the whole vuln category
$ nmap --script vuln 10.10.10.40
|_http-vuln-cve2021-41773: VULNERABLE (Apache path traversal)`,
        },
      },
      incident: {
        title: "NSE — Recon and Vuln Scanning in One Command",
        when: "2007 (NSE) → present",
        where: "Every modern engagement and vulnerability-management program",
        impact: "Collapses enumeration + vulnerability confirmation into a single, scriptable step",
        body: [
          "When NSE shipped, it folded the vulnerability-scanner role into the recon tool: the same pass that finds SMB can confirm it's EternalBlue-vulnerable, and the same scan that finds a web server can flag a path-traversal CVE. That compression is why nmap remained the first tool reached for even as dedicated scanners proliferated.",
          "The professional discipline NSE demands is knowing your scripts: vuln and discovery scripts are safe and invaluable, but brute and some auth scripts are intrusive and can lock accounts or disrupt services. Read a script's description before you run it — and on defense, treat intrusive NSE activity against your services as an alert-worthy reconnaissance signal.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Operator", sub: "nmap --script vuln", type: "attacker" },
          { label: "Service (SMB/HTTP)", sub: "NSE Lua scripts", type: "system" },
          { label: "smb-vuln-ms17-010", sub: "VULNERABLE", type: "victim" },
          { label: "Confirmed CVE", sub: "→ pick the exploit", type: "result" },
        ],
      },
      timeline: [
        { year: 2007, event: "Nmap Scripting Engine (NSE) released", highlight: true },
        { year: 2014, event: "ssl-heartbleed NSE script confirms Heartbleed at scale" },
        { year: 2017, event: "smb-vuln-ms17-010 confirms EternalBlue exposure during WannaCry" },
      ],
      keyTakeaways: [
        "NSE runs Lua scripts to enumerate services and confirm specific vulnerabilities",
        "Script categories: default/-sC (safe), discovery, vuln (confirm CVEs), auth/brute (intrusive)",
        "nmap --script vuln <ip> runs the whole vulnerability set; --script <name> targets one",
        "A single scan can go from 'port open' to 'confirmed EternalBlue-vulnerable'",
        "Know what a script does before running it — brute/auth scripts can lock accounts; on defense, alert on them",
      ],
      references: [
        { title: "Nmap Scripting Engine (NSE) Documentation", url: "https://nmap.org/book/nse.html" },
        { title: "NSE Script Categories", url: "https://nmap.org/book/nse-usage.html" },
      ],
    },
    quiz: {
      questions: [
        { id: "recon-03-q1", type: "NSE", challenge: "What it is.", text: "What is the Nmap Scripting Engine (NSE)?", options: ["A Lua scripting system for deeper enumeration and vulnerability detection", "A password cracker", "A firewall", "A packet sniffer"], correctIndex: 0, explanation: "NSE runs Lua scripts against services for enumeration and vuln checks." },
        { id: "recon-03-q2", type: "Categories", challenge: "Confirm flaws.", text: "Which NSE category confirms specific vulnerabilities?", options: ["vuln", "brute", "default", "discovery"], correctIndex: 0, explanation: "The 'vuln' category checks for known vulnerabilities like MS17-010." },
        { id: "recon-03-q3", type: "Invocation", challenge: "Run one script.", text: "How do you run a single NSE script against port 445?", options: ["nmap --script smb-vuln-ms17-010 -p445 <ip>", "nmap -sn <ip>", "ping <ip>", "nc <ip> 445"], correctIndex: 0, explanation: "--script names the script; -p445 targets the SMB port." },
        { id: "recon-03-q4", type: "Bulk", challenge: "Whole category.", text: "What does nmap --script vuln <ip> do?", options: ["Runs the entire vulnerability-detection category against the host", "Closes all ports", "Brute-forces SSH", "Sends a payload"], correctIndex: 0, explanation: "It runs all vuln scripts to flag known issues." },
        { id: "recon-03-q5", type: "Caution", challenge: "Intrusive.", text: "Why be careful with the brute/auth categories?", options: ["They're intrusive and can lock accounts or disrupt services", "They're encrypted", "They only run on localhost", "They are the safest"], correctIndex: 0, explanation: "Brute-forcing can trigger lockouts and outages — use with authorization and care." },
        { id: "recon-03-q6", type: "Discovery", challenge: "SMB shares.", text: "Which script enumerates accessible SMB shares?", options: ["smb-enum-shares", "ssl-heartbleed", "http-title", "dns-brute"], correctIndex: 0, explanation: "smb-enum-shares lists shares and their access levels." },
        { id: "recon-03-q7", type: "Real World", challenge: "Heartbleed.", text: "What did the ssl-heartbleed NSE script enable in 2014?", options: ["Confirming Heartbleed-vulnerable TLS services at scale", "Cracking WPA2", "Defeating MFA", "Scanning UDP only"], correctIndex: 0, explanation: "It let teams quickly find Heartbleed-exposed hosts." },
        { id: "recon-03-q8", type: "Defense", challenge: "Blue team.", text: "How should defenders use NSE?", options: ["Run vuln scripts against their own estate and alert on intrusive NSE activity", "Disable patching", "Ignore it", "Only on weekends"], correctIndex: 0, explanation: "Self-scanning validates exposure; intrusive NSE traffic is a recon signal to alert on." },
      ],
    },
    ctf: {
      attackerMachine: kali,
      targetMachine: { ip: "10.10.10.40", hostname: "lab-target", os: "Linux + Samba", openPorts: "445 (SMB), 80 (HTTP)", vulnerability: "MS17-010 (to confirm via NSE)" },
      scenario: "Open ports and versions are mapped. Now use the Nmap Scripting Engine to enumerate the SMB service and confirm a specific exploitable vulnerability — turning recon into a target list.",
      hint: "Run the default/discovery scripts to enumerate, then run the vuln category to confirm the flaw.",
      hints: [
        "Read the briefing. Run: cat briefing.txt",
        "Enumerate the host with default + discovery scripts. Run: nse-default 10.10.10.40",
        "Confirm the vulnerability with the vuln category. Run: nse-vuln 10.10.10.40",
        "Run 'assemble' to view the assembled flag and the submit command",
      ],
      fragments: [
        { trigger: "/briefing.txt", value: "FLAG{NSE_", label: "NSE Briefing" },
        { trigger: "nse-default 10.10.10.40", value: "VULN_SCR1PT_", label: "Services Enumerated" },
        { trigger: "nse-vuln 10.10.10.40", value: "M4TCH}", label: "Vulnerability Confirmed" },
      ],
      files: {
        "/briefing.txt": [
          "RANGE — RECON LAB 3: NSE VULN SCANNING",
          "Target 10.10.10.40 (SMB 445, HTTP 80)",
          "Goal: enumerate with NSE, confirm a specific CVE.",
          "Sequence: nse-default 10.10.10.40 -> nse-vuln 10.10.10.40 -> assemble",
        ].join("\n"),
      },
      dirs: { "/": [{ name: "briefing.txt", isDir: false }] },
      extraCommands: {
        "nse-default": (args: string[]) => {
          if (args[0] !== "10.10.10.40") return { lines: ["Usage: nse-default 10.10.10.40"] };
          return {
            lines: [
              "$ nmap -sC --script discovery 10.10.10.40",
              "| smb-enum-shares:",
              "|   \\\\10.10.10.40\\backups   Anonymous READ",
              "| smb-os-discovery: Windows 7 SP1",
              "| http-enum: /admin/ (401), /backup/ (200)",
              "",
              ">> LEARN: discovery scripts pull shares, OS, web paths automatically",
              "   This is hours of manual enumeration in one scan.",
              "   Fragment collected.",
            ],
          };
        },
        "nse-vuln": (args: string[]) => {
          if (args[0] !== "10.10.10.40") return { lines: ["Usage: nse-vuln 10.10.10.40"] };
          return {
            lines: [
              "$ nmap --script vuln -p445 10.10.10.40",
              "| smb-vuln-ms17-010:",
              "|   VULNERABLE: Remote Code Execution (MS17-010)",
              "|_  State: VULNERABLE  (CVE-2017-0143 .. 0148)",
              "",
              ">> LEARN: one scan, recon -> confirmed exploitable",
              "   The 'vuln' category matched a known CVE — now you pick the exploit.",
              ">> BLUE TEAM: patch + disable SMBv1; alert on the vuln-script scan pattern.",
              "   Run 'assemble' to view the flag and the submit command.",
            ],
          };
        },
      },
    },
  },

  // ─── Lab 4: web content discovery ───────────────────────────────────────────
  {
    epochId: "range-recon",
    wonder: { name: "The Hidden Directory", location: "Offensive Security Lab", era: "Present Day", emoji: "🗂️" },
    id: "recon-04",
    order: 4,
    title: "Web Content Discovery",
    subtitle: "Brute-force hidden paths with gobuster/ffuf",
    category: "cybersecurity",
    xp: 175,
    badge: { id: "badge-recon-dirbust", name: "Path Finder", emoji: "🗂️" },
    challengeType: "ctf",
    info: {
      tagline: "Web servers hide more than they show — wordlist-driven brute force reveals the admin panels and backups nobody linked to.",
      year: 2014,
      overview: [
        "A web application's real attack surface is almost never what the homepage links to. Admin panels, backup files, old test pages, API endpoints, and config files sit at predictable paths that simply aren't linked anywhere — and content-discovery tools like gobuster, ffuf, and feroxbuster find them by brute force, requesting thousands of candidate paths from a wordlist and reporting which return interesting status codes. A 200 on /backup/ or a 401 on /admin/ is the door the developers forgot to lock.",
        "The technique is mechanical but high-yield: point the tool at the base URL, feed it a wordlist (SecLists is the standard collection), and read the results by HTTP status. 200 means it exists and is readable; 301/302 is a redirect (often to a login); 401/403 means it exists but is protected (and protection is often weak). Beyond directories, the same brute force finds files by extension (.bak, .zip, .config), subdomains, and virtual hosts. Always start with robots.txt and sitemap.xml — sites frequently list the very paths they want hidden.",
      ],
      technical: {
        title: "Directory & Content Brute-Forcing",
        body: [
          "The tools and their core flags:\n- gobuster dir -u <url> -w <wordlist> — brute directories/files.\n- ffuf -u <url>/FUZZ -w <wordlist> — fast, flexible fuzzer (FUZZ is the injection point).\n- -x php,bak,zip — also try these file extensions.\n- -t 50 — threads; --mc 200,301,401 — match specific status codes.",
          "Reading the results and what to grab first:\n- 200 — exists and readable (download it: backups, configs, source).\n- 301/302 — redirect, usually to a login or canonical path.\n- 401/403 — exists but protected (auth often bypassable or brute-forceable).\n- Start manual: curl <url>/robots.txt and /sitemap.xml frequently leak hidden paths outright.\nThe defensive mirror: don't rely on 'security through obscurity' — unlinked ≠ protected. Authenticate sensitive paths, remove backup/test files, monitor for the burst of 404s a brute-force generates, and rate-limit.",
        ],
        codeExample: {
          label: "Finding the unlinked admin panel",
          code: `$ curl http://10.10.10.40/robots.txt
Disallow: /admin/
Disallow: /backup/        # robots.txt leaks the 'hidden' paths

$ gobuster dir -u http://10.10.10.40 -w /usr/share/seclists/.../common.txt -x bak,zip
/admin                (Status: 401)   # exists, protected
/backup               (Status: 301)
/backup/db.sql.bak    (Status: 200)   # ← downloadable DB backup
/config.php.bak       (Status: 200)   # ← source with credentials

$ ffuf -u http://10.10.10.40/FUZZ -w common.txt -mc 200,401`,
        },
      },
      incident: {
        title: "Unlinked Is Not Unprotected",
        when: "A perennial source of breaches",
        where: "Web applications exposing backups, admin panels, and config files at guessable paths",
        impact: "Exposed .bak/.sql/.config files and unguarded admin panels routinely leak credentials and grant access",
        body: [
          "Countless breaches begin not with a clever exploit but with content discovery: a forgotten database backup at /backup/db.sql, a source file at /config.php.bak containing the DB password, or an admin panel at /admin with a default login. None of these were linked from the site — and none needed to be, because a wordlist found them in seconds.",
          "The fix is unglamorous and complete: never treat an unlinked path as protected. Put authentication and authorization on every sensitive endpoint, purge backup/test/old files from web roots, rate-limit and monitor for the tell-tale flood of 404s a brute-force generates, and remember that robots.txt advertises exactly what you hoped to hide. Obscurity is not a control.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Operator", sub: "gobuster / ffuf + wordlist", type: "attacker" },
          { label: "Web server", sub: "unlinked paths", type: "system" },
          { label: "/admin (401), /backup (200)", sub: "hidden content", type: "victim" },
          { label: "Foothold / creds", sub: "→ exploit the app", type: "result" },
        ],
      },
      timeline: [
        { year: 2005, event: "DirBuster popularizes directory brute-forcing" },
        { year: 2014, event: "gobuster brings fast Go-based content discovery", highlight: true },
        { year: 2019, event: "ffuf + SecLists become the modern content-discovery standard" },
      ],
      keyTakeaways: [
        "A web app's real attack surface is the unlinked paths: admin panels, backups, configs, APIs",
        "gobuster/ffuf brute-force candidate paths from a wordlist (SecLists) and report status codes",
        "Read by status: 200 exists/readable, 301/302 redirect, 401/403 protected (often weakly)",
        "Always check robots.txt and sitemap.xml first — they often leak the 'hidden' paths",
        "Defenders: unlinked ≠ protected — authenticate sensitive paths, remove backup/test files, rate-limit + monitor 404 bursts",
      ],
      references: [
        { title: "gobuster — GitHub", url: "https://github.com/OJ/gobuster" },
        { title: "ffuf — GitHub", url: "https://github.com/ffuf/ffuf" },
      ],
    },
    quiz: {
      questions: [
        { id: "recon-04-q1", type: "Concept", challenge: "Real surface.", text: "Why brute-force web directories?", options: ["Admin panels, backups, and configs sit at unlinked, guessable paths", "To crash the server", "To encrypt the site", "It replaces nmap"], correctIndex: 0, explanation: "The real attack surface is often unlinked content found by brute force." },
        { id: "recon-04-q2", type: "Tool", challenge: "The fuzzer.", text: "In ffuf, what does the FUZZ keyword mark?", options: ["The injection point where each wordlist entry is substituted", "The target IP", "The thread count", "The output file"], correctIndex: 0, explanation: "FUZZ is replaced by each wordlist value in the request." },
        { id: "recon-04-q3", type: "Status", challenge: "Readable.", text: "A 200 response on /backup/db.sql.bak means what?", options: ["The file exists and is downloadable", "It's protected", "It doesn't exist", "It's a redirect"], correctIndex: 0, explanation: "200 = exists and readable — grab it." },
        { id: "recon-04-q4", type: "Status", challenge: "Protected.", text: "A 401/403 on /admin/ means what?", options: ["The path exists but is protected (protection is often weak)", "The path is gone", "The server crashed", "It's the homepage"], correctIndex: 0, explanation: "401/403 = exists but auth-gated; worth attacking." },
        { id: "recon-04-q5", type: "Quick Win", challenge: "First check.", text: "What file often leaks 'hidden' paths immediately?", options: ["robots.txt (and sitemap.xml)", "index.html", "favicon.ico", "style.css"], correctIndex: 0, explanation: "robots.txt frequently lists exactly the paths a site wants hidden." },
        { id: "recon-04-q6", type: "Extensions", challenge: "Find files.", text: "What does gobuster's -x bak,zip,php do?", options: ["Also tries those file extensions on each wordlist entry", "Encrypts the wordlist", "Limits to port 80", "Sends a payload"], correctIndex: 0, explanation: "-x appends extensions to find files like config.php.bak." },
        { id: "recon-04-q7", type: "Wordlists", challenge: "The standard.", text: "What is SecLists?", options: ["A widely used collection of wordlists for discovery and brute force", "A firewall ruleset", "An exploit framework", "A SIEM"], correctIndex: 0, explanation: "SecLists is the de facto wordlist collection for content discovery." },
        { id: "recon-04-q8", type: "Defense", challenge: "Blue team.", text: "What's the right defense against content discovery?", options: ["Authenticate sensitive paths, remove backups/test files, rate-limit + monitor 404 bursts", "Hide paths and hope", "Disable HTTPS", "Trust robots.txt"], correctIndex: 0, explanation: "Obscurity isn't a control; protect, prune, and monitor." },
      ],
    },
    ctf: {
      attackerMachine: kali,
      targetMachine: { ip: "10.10.10.40", hostname: "lab-target", os: "Linux / Apache", openPorts: "80 (HTTP)", vulnerability: "exposed unlinked content" },
      scenario: "The web server on 10.10.10.40:80 shows a bland homepage. The real surface is hidden. Brute-force the paths, find the admin panel and the backup the developers forgot to remove.",
      hint: "Brute-force directories with a wordlist, then locate the protected admin path.",
      hints: [
        "Read the briefing. Run: cat briefing.txt",
        "Brute-force directories + files. Run: gobuster http://10.10.10.40",
        "Pinpoint the hidden admin panel. Run: find-admin http://10.10.10.40",
        "Run 'assemble' to view the assembled flag and the submit command",
      ],
      fragments: [
        { trigger: "/briefing.txt", value: "FLAG{D1R_BUST_", label: "Content Discovery Briefing" },
        { trigger: "gobuster http://10.10.10.40", value: "H1DD3N_", label: "Hidden Paths Enumerated" },
        { trigger: "find-admin http://10.10.10.40", value: "4DM1N}", label: "Admin Panel Located" },
      ],
      files: {
        "/briefing.txt": [
          "RANGE — RECON LAB 4: WEB CONTENT DISCOVERY",
          "Target http://10.10.10.40  (Apache)",
          "Goal: brute-force hidden paths, find the admin panel + backup.",
          "Sequence: gobuster http://10.10.10.40 -> find-admin http://10.10.10.40 -> assemble",
        ].join("\n"),
      },
      dirs: { "/": [{ name: "briefing.txt", isDir: false }] },
      extraCommands: {
        "gobuster": (args: string[]) => {
          if (args[0] !== "http://10.10.10.40") return { lines: ["Usage: gobuster http://10.10.10.40"] };
          return {
            lines: [
              "$ gobuster dir -u http://10.10.10.40 -w common.txt -x bak,zip,sql",
              "/admin                (Status: 401)   protected — exists",
              "/backup               (Status: 301)",
              "/backup/db.sql.bak    (Status: 200)   <-- downloadable DB backup",
              "/config.php.bak       (Status: 200)   <-- source w/ DB creds",
              "/robots.txt           (Status: 200)",
              "",
              ">> LEARN: 200=readable, 301=redirect, 401/403=protected (often weak)",
              "   The unlinked /backup and /config.php.bak are the real surface.",
              "   Fragment collected.",
            ],
          };
        },
        "find-admin": (args: string[]) => {
          if (args[0] !== "http://10.10.10.40") return { lines: ["Usage: find-admin http://10.10.10.40"] };
          return {
            lines: [
              "$ curl http://10.10.10.40/robots.txt",
              "Disallow: /admin/        <-- robots.txt LEAKS the hidden path",
              "$ curl -s http://10.10.10.40/config.php.bak | grep -i pass",
              "  $db_pass = 'Summer2024!';   <-- creds in the exposed backup",
              "  -> login at /admin/ with the leaked credentials",
              "",
              ">> LEARN: unlinked != protected; backups + robots.txt give it all away",
              ">> BLUE TEAM: auth every sensitive path, purge *.bak/*.sql, rate-limit.",
              "   Run 'assemble' to view the flag and the submit command.",
            ],
          };
        },
      },
    },
  },
];

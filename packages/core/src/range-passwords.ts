import type { EpochConfig, StageConfig } from "./types";

// ── Cyber Range: Password Attacks ────────────────────────────────────────────
// Online brute force (Hydra), offline hash cracking (John / Hashcat), wordlists
// and rule-based mangling, and credential attacks at scale (spraying, stuffing,
// pass-the-hash). Simulated faithful tooling; every attack pairs with its defense
// (MFA, lockout, slow salted hashing). All from public sources (Hashcat/John docs).

export const rangePasswordsEpoch: EpochConfig = {
  id: "range-passwords",
  name: "Password Attacks",
  subtitle: "Hydra, John, Hashcat — online brute force to offline cracking",
  description:
    "Credentials are the most-attacked control there is. Learn the full password-attack toolkit: online brute force with Hydra, offline hash cracking with John and Hashcat, wordlists and rule-based mangling, and credential attacks at scale (spraying, stuffing, pass-the-hash) — each paired with the defense that stops it.",
  emoji: "🔑",
  color: "Amber",
  unlocked: true,
};

const kali = { ip: "10.10.14.5", hostname: "kali", os: "Kali Linux 2024.1" } as const;
const tgt = (vuln: string, ports: string) => ({ ip: "10.10.10.40", hostname: "lab-target", os: "Linux / Windows", openPorts: ports, vulnerability: vuln });

export const rangePasswordsStages: StageConfig[] = [
  // ─── Lab 1: online brute force — Hydra ──────────────────────────────────────
  {
    epochId: "range-passwords",
    wonder: { name: "The Login Gate", location: "Offensive Security Lab", era: "Present Day", emoji: "🚪" },
    id: "pw-01",
    order: 1,
    title: "Online Brute Force: Hydra",
    subtitle: "Guess credentials against a live service",
    category: "cybersecurity",
    xp: 150,
    badge: { id: "badge-pw-hydra", name: "Brute Forcer", emoji: "🔨" },
    challengeType: "ctf",
    info: {
      tagline: "If a login has no lockout and a user picked a weak password, a tool can simply try until it gets in.",
      year: 2000,
      overview: [
        "Online brute force is the most direct credential attack: throw candidate passwords at a live login until one works. Hydra is the standard tool — it speaks dozens of protocols (SSH, FTP, RDP, HTTP forms, SMB, databases) and tries username/password combinations from wordlists at high speed. It succeeds whenever three things line up: a service exposed to the attacker, no rate-limiting or account lockout, and a user who chose a guessable password. Because real users overwhelmingly reuse weak passwords, online brute force still works against an alarming number of targets.",
        "The craft is in narrowing the search. Pure brute force is slow, so attackers start with enumerated usernames and curated wordlists (rockyou.txt, the leaked password list, is the classic), try default and seasonal passwords first, and prefer breadth-over-depth (password spraying — one common password against many accounts — to dodge lockouts). The blue-team answers are equally well-known and decisive: account lockout or progressive delays, rate-limiting, multi-factor authentication (which makes a cracked password insufficient), and monitoring for the burst of failed logins a brute-force generates. MFA in particular turns a successful password guess into a dead end.",
      ],
      technical: {
        title: "Hydra — Online Credential Attacks",
        body: [
          "Hydra invocation patterns:\n- hydra -l admin -P rockyou.txt ssh://10.10.10.40 — one user, a password list, SSH.\n- hydra -L users.txt -P pass.txt 10.10.10.40 ftp — user list × password list.\n- hydra ... http-post-form '/login:user=^USER^&pass=^PASS^:Invalid' — web form (with the failure string).\n- -t 4 throttles threads (too fast trips lockouts/IDS).",
          "Making it efficient (and stealthy):\n- Enumerate valid usernames first (don't brute-force users blindly).\n- Try defaults, the org name + year, and rockyou's top entries before deep wordlists.\n- Password SPRAY (one common password across many users) to avoid per-account lockout.\n- Mind lockout thresholds — a noisy attack locks the account and alerts the SOC.",
          "The defenses (decisive):\n- MFA — a guessed password alone is no longer enough (the single best control).\n- Account lockout / exponential backoff + rate-limiting on auth endpoints.\n- Ban weak/breached passwords (screen against known-compromised lists).\n- Alert on failed-login bursts and impossible-travel/spray patterns.",
        ],
        codeExample: {
          label: "Hydra against SSH",
          code: `# Brute-force one known user over SSH
$ hydra -l bob -P /usr/share/wordlists/rockyou.txt -t 4 ssh://10.10.10.40
[22][ssh] host: 10.10.10.40   login: bob   password: P@ssw0rd1
[STATUS] 1 valid password found

$ ssh bob@10.10.10.40        # log in with the cracked credential
bob@lab-target:~$

# THE FIX
#  - MFA (a password alone is insufficient)
#  - lockout after N failures + rate-limit + alert on bursts`,
        },
      },
      incident: {
        title: "Credential Brute Force — Still a Top Initial-Access Vector",
        when: "Continuous — every exposed login on the internet",
        where: "SSH, RDP, VPN, and web logins facing the internet",
        impact: "Weak/reused passwords + no lockout = direct account takeover at scale",
        body: [
          "Internet-facing SSH and RDP are brute-forced constantly; any exposed login without lockout and MFA is a coin-flip away from compromise if a user picked a weak password. RDP brute force in particular has been a leading ransomware entry point for years — crews scan for exposed 3389, brute the login, and deploy.",
          "The lesson is that the password itself is the weak control, and the fixes are organizational, not clever: require MFA everywhere, lock out or throttle after repeated failures, screen passwords against breach lists, and don't expose admin logins to the internet at all. Hydra works because of policy gaps, and policy closes them.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Attacker", sub: "hydra -P rockyou.txt", type: "attacker" },
          { label: "Login service", sub: "SSH/RDP/HTTP — no lockout", type: "system" },
          { label: "Weak password", sub: "P@ssw0rd1 guessed", type: "victim" },
          { label: "Account takeover", sub: "→ fix: MFA + lockout", type: "result" },
        ],
      },
      timeline: [
        { year: 2000, event: "THC-Hydra released as a multi-protocol cracker" },
        { year: 2009, event: "rockyou.txt leak becomes the de facto wordlist", highlight: true },
        { year: 2019, event: "RDP brute force ranks among top ransomware entry vectors" },
      ],
      keyTakeaways: [
        "Online brute force guesses passwords against a live service (Hydra speaks many protocols)",
        "It works when there's exposure, no lockout/rate-limit, and a weak/reused password",
        "Narrow the search: enumerate users, use curated wordlists (rockyou), try defaults first",
        "Password spraying (one password, many users) dodges per-account lockout",
        "Decisive fixes: MFA (a guessed password isn't enough), lockout/rate-limit, breach-list screening, alerting",
      ],
      references: [
        { title: "THC-Hydra — GitHub", url: "https://github.com/vanhauser-thc/thc-hydra" },
        { title: "OWASP — Credential Stuffing / Brute Force", url: "https://owasp.org/www-community/attacks/Credential_stuffing" },
      ],
    },
    quiz: {
      questions: [
        { id: "pw-01-q1", type: "Tool", challenge: "What it does.", text: "What does Hydra do?", options: ["Brute-forces credentials against live services over many protocols", "Cracks offline hashes", "Scans ports", "Sniffs traffic"], correctIndex: 0, explanation: "Hydra is an online (live-service) credential brute-forcer." },
        { id: "pw-01-q2", type: "Conditions", challenge: "When it works.", text: "Online brute force succeeds when which conditions hold?", options: ["Exposed login + no lockout/rate-limit + a weak/reused password", "Strong MFA is on", "The account is locked", "The service is offline"], correctIndex: 0, explanation: "Exposure, no throttling, and a guessable password are the trifecta." },
        { id: "pw-01-q3", type: "Wordlist", challenge: "The classic.", text: "What is rockyou.txt?", options: ["A widely used wordlist of leaked real passwords", "An exploit", "A firewall", "A hash algorithm"], correctIndex: 0, explanation: "rockyou.txt is the de facto password wordlist." },
        { id: "pw-01-q4", type: "Spraying", challenge: "Avoid lockout.", text: "How does password spraying avoid account lockout?", options: ["It tries one common password across many accounts (few attempts per account)", "It tries millions per account", "It disables logging", "It uses MFA"], correctIndex: 0, explanation: "Spreading attempts across accounts stays under per-account thresholds." },
        { id: "pw-01-q5", type: "Throttle", challenge: "Threads.", text: "Why might an attacker lower Hydra's thread count (-t)?", options: ["To avoid tripping lockouts and IDS detection", "To crack faster", "To use less wordlist", "To enable MFA"], correctIndex: 0, explanation: "Slower attacks are stealthier and less likely to lock accounts." },
        { id: "pw-01-q6", type: "Defense", challenge: "Best control.", text: "What single control most decisively defeats password guessing?", options: ["Multi-factor authentication (MFA)", "A longer username", "Hiding the login page", "Faster servers"], correctIndex: 0, explanation: "MFA makes a guessed password insufficient on its own." },
        { id: "pw-01-q7", type: "Defense", challenge: "Throttle attempts.", text: "Besides MFA, what blunts online brute force?", options: ["Account lockout / rate-limiting + alerting on failed-login bursts", "Disabling HTTPS", "Removing logging", "Opening more ports"], correctIndex: 0, explanation: "Lockout/throttling + monitoring stop high-rate guessing." },
        { id: "pw-01-q8", type: "Real World", challenge: "Ransomware vector.", text: "Which exposed service is a notorious brute-force ransomware entry point?", options: ["RDP (3389)", "DNS (53)", "NTP (123)", "SNMP (161)"], correctIndex: 0, explanation: "Internet-facing RDP is heavily brute-forced for initial access." },
      ],
    },
    ctf: {
      attackerMachine: kali,
      targetMachine: tgt("weak SSH credentials, no lockout", "22 (SSH)"),
      scenario: "SSH (port 22) on 10.10.10.40 has no lockout, and a user 'bob' picked a weak password. Brute-force it with Hydra, then log in.",
      hint: "Run Hydra against SSH with a wordlist for user bob, then SSH in with the cracked password.",
      hints: [
        "Read the briefing. Run: cat briefing.txt",
        "Brute-force SSH for user bob. Run: hydra-ssh 10.10.10.40",
        "Log in with the cracked credential. Run: ssh-login 10.10.10.40",
        "Run 'assemble' to view the assembled flag and the submit command",
      ],
      fragments: [
        { trigger: "/briefing.txt", value: "FLAG{HYDR4_", label: "Hydra Briefing" },
        { trigger: "hydra-ssh 10.10.10.40", value: "SSH_", label: "Credential Cracked" },
        { trigger: "ssh-login 10.10.10.40", value: "BRUT3_F0RC3D}", label: "Shell Obtained" },
      ],
      files: {
        "/briefing.txt": [
          "RANGE — PASSWORD LAB 1: ONLINE BRUTE FORCE (HYDRA)",
          "Target 10.10.10.40:22 (SSH), user: bob, no lockout.",
          "Goal: crack the SSH password, log in.",
          "Sequence: hydra-ssh 10.10.10.40 -> ssh-login 10.10.10.40 -> assemble",
        ].join("\n"),
      },
      dirs: { "/": [{ name: "briefing.txt", isDir: false }] },
      extraCommands: {
        "hydra-ssh": (args: string[]) => {
          if (args[0] !== "10.10.10.40") return { lines: ["Usage: hydra-ssh 10.10.10.40"] };
          return {
            lines: [
              "$ hydra -l bob -P rockyou.txt -t 4 ssh://10.10.10.40",
              "[ATTEMPT] bob:123456 ... [ATTEMPT] bob:password ...",
              "[22][ssh] host: 10.10.10.40   login: bob   password: P@ssw0rd1",
              "[STATUS] 1 valid password found",
              "",
              ">> LEARN: no lockout + weak password = guessable in seconds",
              "   -t 4 kept it slow enough to dodge throttling/IDS.",
              "   Fragment collected.",
            ],
          };
        },
        "ssh-login": (args: string[]) => {
          if (args[0] !== "10.10.10.40") return { lines: ["Usage: ssh-login 10.10.10.40"] };
          return {
            lines: [
              "$ ssh bob@10.10.10.40   (password: P@ssw0rd1)",
              "bob@lab-target:~$ id",
              "uid=1001(bob) gid=1001(bob)",
              "",
              ">> LEARN: a guessed password is a full login — same as the real user",
              ">> BLUE TEAM: MFA defeats this even with the right password; add lockout + alerts.",
              "   Run 'assemble' to view the flag and the submit command.",
            ],
          };
        },
      },
    },
  },

  // ─── Lab 2: offline cracking — John & Hashcat ───────────────────────────────
  {
    epochId: "range-passwords",
    wonder: { name: "The Hash Forge", location: "Offensive Security Lab", era: "Present Day", emoji: "⚒️" },
    id: "pw-02",
    order: 2,
    title: "Offline Cracking: John & Hashcat",
    subtitle: "Turn stolen hashes back into passwords",
    category: "cybersecurity",
    xp: 175,
    badge: { id: "badge-pw-hashcat", name: "Hash Cracker", emoji: "⚒️" },
    challengeType: "ctf",
    info: {
      tagline: "Once you've dumped the hashes, cracking is an offline race — and a GPU runs billions of guesses a second.",
      year: 1996,
      overview: [
        "Systems don't store passwords; they store hashes — one-way fingerprints. So when an attacker dumps a SAM database, an /etc/shadow file, or a leaked credential table, the next step is offline cracking: guessing passwords, hashing each guess, and comparing to the stolen hash. Unlike online brute force, offline cracking has no rate limit and no lockout — it's pure compute, and a modern GPU running Hashcat tries billions of candidates per second. John the Ripper and Hashcat are the standard tools; the first step is always identifying the hash type, because cracking speed depends enormously on the algorithm.",
        "That algorithm choice is the whole defensive story. Fast, unsalted hashes (MD5, SHA-1, NTLM) fall almost instantly — NTLM, used throughout Windows, is cracked at tens of billions of guesses per second. Identical passwords produce identical unsalted hashes, so rainbow tables (precomputed hash→password lookups) crack them without any guessing at all. The defense is to make hashing deliberately slow and unique: a per-user random salt defeats rainbow tables, and a slow, memory-hard algorithm — bcrypt, scrypt, Argon2, or PBKDF2 with high iterations — drops the attacker's rate from billions per second to a few thousand, turning a minutes-long crack into a computationally infeasible one.",
      ],
      technical: {
        title: "Offline Hash Cracking",
        body: [
          "The workflow:\n- Identify the hash type (hashid, hash-identifier, or Hashcat's --identify) — drives mode + speed.\n- Pick an attack: wordlist (-a 0), wordlist+rules, mask/brute (-a 3), or combinator.\n- Run: hashcat -m <mode> -a 0 hashes.txt rockyou.txt (or john --format=).\n- Show results: hashcat --show / john --show.",
          "Why algorithm matters (cracking speed, single GPU, order-of-magnitude):\n- MD5 / NTLM — tens of billions/sec → unsalted = near-instant.\n- SHA-256 (unsalted) — billions/sec → still fast.\n- bcrypt / Argon2 — thousands/sec → deliberately, ruinously slow for the attacker.\nIdentical unsalted hashes = identical passwords → rainbow tables crack with no guessing.",
          "The defense (password storage done right):\n- Per-user random SALT — defeats rainbow tables and identical-hash leakage.\n- A slow, memory-hard KDF — bcrypt / scrypt / Argon2id / PBKDF2(high iterations).\n- Together they crush the attacker's guess rate from billions/sec to thousands/sec.\n- Plus: ban weak/breached passwords so even a fast guess never lands.",
        ],
        codeExample: {
          label: "Cracking dumped NTLM hashes",
          code: `# 1) Identify the hash
$ hashid 31d6cfe0d16ae931b73c59d7e0c089c0
[+] NTLM

# 2) Crack with Hashcat (mode 1000 = NTLM) + rockyou
$ hashcat -m 1000 -a 0 hashes.txt rockyou.txt
5835048ce94ad0564e29a924a03510ef:Summer2024!
$ hashcat -m 1000 hashes.txt --show     # recovered creds

# Slow hashes resist this:
$ hashcat -m 3200 bcrypt_hashes.txt rockyou.txt   # bcrypt: ~thousands/sec, infeasible

# THE FIX — store passwords with salt + a slow KDF (Argon2id/bcrypt)`,
        },
      },
      incident: {
        title: "LinkedIn 2012 — Unsalted SHA-1 Cracked en Masse",
        when: "2012 (breach) → 2016 (full 117M dump cracked)",
        where: "LinkedIn — 117 million credentials stored as unsalted SHA-1",
        impact: "The vast majority of 117M passwords were cracked, fueling years of credential stuffing",
        body: [
          "In 2012 LinkedIn leaked 6.5 million (later revealed as 117 million) password hashes stored as unsalted SHA-1. Because the hashes were fast and unsalted, crackers recovered the overwhelming majority of the plaintexts — and because people reuse passwords, that single list powered credential-stuffing attacks across the internet for years. It is the canonical example of how a storage choice, not the password length, decides the outcome.",
          "Had LinkedIn salted and used a slow KDF, the same dump would have been largely uncrackable. The fix has been standard for decades: never store fast/unsalted hashes; use a per-user salt and bcrypt/scrypt/Argon2; and screen passwords against breach lists so a fast guess finds nothing. Offline cracking is GPU-bound — your job as a defender is to make each guess expensive.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Attacker (GPU)", sub: "hashcat -m 1000 + rockyou", type: "attacker" },
          { label: "Dumped hashes", sub: "NTLM / SHA-1 (unsalted)", type: "system" },
          { label: "Billions/sec offline", sub: "no lockout, no limit", type: "victim" },
          { label: "Plaintext recovered", sub: "→ fix: salt + slow KDF", type: "result" },
        ],
      },
      timeline: [
        { year: 1996, event: "John the Ripper released" },
        { year: 2009, event: "Hashcat brings GPU-accelerated cracking" },
        { year: 2012, event: "LinkedIn unsalted SHA-1 breach → mass cracking", highlight: true },
      ],
      keyTakeaways: [
        "Offline cracking has no lockout — it's a GPU race at billions of guesses per second",
        "Identify the hash type first; algorithm choice dominates cracking speed",
        "Fast/unsalted hashes (MD5/SHA-1/NTLM) fall almost instantly; rainbow tables skip guessing entirely",
        "The fix is per-user salt + a slow, memory-hard KDF (bcrypt/scrypt/Argon2) → thousands/sec, not billions",
        "LinkedIn's unsalted SHA-1 proves storage choice, not password length, decides the outcome",
      ],
      references: [
        { title: "Hashcat — Wiki", url: "https://hashcat.net/wiki/" },
        { title: "OWASP — Password Storage Cheat Sheet", url: "https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html" },
      ],
    },
    quiz: {
      questions: [
        { id: "pw-02-q1", type: "Concept", challenge: "Offline vs online.", text: "What's the key advantage of offline cracking over online brute force?", options: ["No lockout or rate limit — it's pure compute at GPU speed", "It needs no hashes", "It requires MFA", "It's slower"], correctIndex: 0, explanation: "Offline cracking isn't throttled by the target — only by hardware." },
        { id: "pw-02-q2", type: "First Step", challenge: "Before cracking.", text: "What's the first step with a dumped hash?", options: ["Identify the hash type (it drives mode and speed)", "Reboot the GPU", "Change LHOST", "Disable salt"], correctIndex: 0, explanation: "Mode and feasibility depend on the algorithm." },
        { id: "pw-02-q3", type: "Speed", challenge: "Fast hash.", text: "Why do NTLM/MD5 hashes crack almost instantly?", options: ["They're fast and unsalted — billions of guesses per second", "They use Argon2", "They're memory-hard", "They can't be cracked"], correctIndex: 0, explanation: "Fast, unsalted algorithms maximize the attacker's guess rate." },
        { id: "pw-02-q4", type: "Rainbow", challenge: "No guessing.", text: "What do rainbow tables exploit?", options: ["Identical unsalted hashes for identical passwords (precomputed lookups)", "MFA", "Salting", "Slow KDFs"], correctIndex: 0, explanation: "Precomputed hash→password tables work only on unsalted hashes." },
        { id: "pw-02-q5", type: "Salt", challenge: "Per-user salt.", text: "What does a per-user random salt accomplish?", options: ["Defeats rainbow tables and makes identical passwords hash differently", "Speeds up login", "Encrypts the database", "Adds MFA"], correctIndex: 0, explanation: "Salts make precomputation useless and break identical-hash leakage." },
        { id: "pw-02-q6", type: "KDF", challenge: "Slow it down.", text: "Which algorithms deliberately slow cracking to thousands/sec?", options: ["bcrypt / scrypt / Argon2 / PBKDF2(high iters)", "MD5 / SHA-1", "NTLM", "CRC32"], correctIndex: 0, explanation: "Slow, memory-hard KDFs make each guess expensive." },
        { id: "pw-02-q7", type: "Real World", challenge: "The breach.", text: "Why was the 2012 LinkedIn breach so damaging?", options: ["Unsalted SHA-1 let crackers recover most of 117M passwords", "It used Argon2", "Passwords were too long", "MFA failed"], correctIndex: 0, explanation: "Fast unsalted hashes made mass cracking trivial." },
        { id: "pw-02-q8", type: "Defense", challenge: "Storage done right.", text: "How should passwords be stored?", options: ["Per-user salt + a slow KDF (Argon2id/bcrypt) + breach-list screening", "Plain MD5", "Reversible encryption", "Plaintext with ACLs"], correctIndex: 0, explanation: "Salt + slow hashing is the standard; never fast/unsalted." },
      ],
    },
    ctf: {
      attackerMachine: kali,
      targetMachine: tgt("dumped NTLM hashes (from a prior foothold)", "n/a (offline)"),
      scenario: "From an earlier foothold you dumped a file of NTLM hashes. Identify the hash type, then crack them offline with Hashcat and a wordlist to recover the plaintext passwords.",
      hint: "Identify the hash algorithm, then run Hashcat with the right mode and rockyou.",
      hints: [
        "Read the briefing. Run: cat briefing.txt",
        "Identify the hash type. Run: identify-hash",
        "Crack the hashes offline. Run: hashcat-crack",
        "Run 'assemble' to view the assembled flag and the submit command",
      ],
      fragments: [
        { trigger: "/briefing.txt", value: "FLAG{H4SHC4T_", label: "Cracking Briefing" },
        { trigger: "identify-hash", value: "NTLM_", label: "Hash Type Identified" },
        { trigger: "hashcat-crack", value: "CR4CK3D}", label: "Passwords Recovered" },
      ],
      files: {
        "/briefing.txt": [
          "RANGE — PASSWORD LAB 2: OFFLINE CRACKING",
          "File hashes.txt contains dumped NTLM hashes.",
          "Goal: identify the type, crack with Hashcat + rockyou.",
          "Sequence: identify-hash -> hashcat-crack -> assemble",
        ].join("\n"),
        "/hashes.txt": [
          "Administrator:31d6cfe0d16ae931b73c59d7e0c089c0",
          "jsmith:5835048ce94ad0564e29a924a03510ef",
        ].join("\n"),
      },
      dirs: { "/": [{ name: "briefing.txt", isDir: false }, { name: "hashes.txt", isDir: false }] },
      extraCommands: {
        "identify-hash": (_args: string[]) => ({
          lines: [
            "$ hashid 5835048ce94ad0564e29a924a03510ef",
            "[+] NTLM   (Windows local hash, mode 1000)",
            "  32 hex chars, no salt — fast hash, GPU-friendly",
            "",
            ">> LEARN: identify FIRST — the algorithm sets the mode and the speed",
            "   NTLM is unsalted → billions/sec → near-instant for weak passwords.",
            "   Fragment collected.",
          ],
        }),
        "hashcat-crack": (_args: string[]) => ({
          lines: [
            "$ hashcat -m 1000 -a 0 hashes.txt rockyou.txt",
            "31d6cfe0d16ae931b73c59d7e0c089c0:(empty)",
            "5835048ce94ad0564e29a924a03510ef:Summer2024!",
            "$ hashcat -m 1000 hashes.txt --show",
            "  Administrator: (blank)   jsmith: Summer2024!",
            "",
            ">> LEARN: no lockout offline — the GPU just races the wordlist",
            ">> BLUE TEAM: store with salt + Argon2/bcrypt → thousands/sec, infeasible.",
            "   Run 'assemble' to view the flag and the submit command.",
          ],
        }),
      },
    },
  },

  // ─── Lab 3: wordlists + rules ───────────────────────────────────────────────
  {
    epochId: "range-passwords",
    wonder: { name: "The Mangling Mill", location: "Offensive Security Lab", era: "Present Day", emoji: "🔁" },
    id: "pw-03",
    order: 3,
    title: "Wordlists & Rules: Cracking 'Strong' Passwords",
    subtitle: "Why P@ssw0rd2024! isn't strong",
    category: "cybersecurity",
    xp: 175,
    badge: { id: "badge-pw-rules", name: "Mangler", emoji: "🔁" },
    challengeType: "ctf",
    info: {
      tagline: "Humans build 'complex' passwords the same predictable ways — and rules turn one wordlist into millions of those variations.",
      year: 2010,
      overview: [
        "The reason cracking works so well isn't raw brute force — it's that humans are predictable. Faced with complexity requirements, people don't pick random strings; they take a base word and mangle it the same ways: capitalize the first letter, swap letters for look-alike numbers (a→@, e→3, o→0), and append a year or a `!`. So `Password` becomes `P@ssw0rd2024!` — which feels strong and is, in fact, trivially crackable. Rule-based attacks encode exactly these transformations: a rules file applies thousands of mangling operations to every word in a wordlist, so one rockyou.txt plus the right ruleset generates billions of realistic human passwords.",
        "This is why password length and randomness beat complexity rules. A rules attack (Hashcat's best64 or the d3ad0ne/OneRuleToRuleThemAll rulesets, or John's mangling rules) cracks the vast majority of policy-compliant passwords because the policy itself shaped them predictably. Mask attacks go further, brute-forcing a known pattern (e.g. Upper-lower-lower-lower-digit-digit-symbol) directly. The defenses follow from the cause: encourage long passphrases over complex short ones, ban weak and breached passwords outright (so the predictable bases never pass), and deploy MFA so a cracked password still isn't enough. The math favors length — every extra random character multiplies the search space far more than a predictable substitution.",
      ],
      technical: {
        title: "Rule-Based & Mask Attacks",
        body: [
          "How humans mangle (and rules replicate):\n- Capitalize first letter: password → Password.\n- Leetspeak substitution: a→@, e→3, o→0, s→$, i→1.\n- Append year/symbol: + 2024, + !, + 123.\n- Combine all three: Password → P@ssw0rd2024! (still in the cracked set).",
          "The attacks:\n- Rule-based: hashcat -a 0 hashes rockyou.txt -r rules/best64.rule (applies mangling to each word).\n- Mask/brute: hashcat -a 3 hashes '?u?l?l?l?l?d?d!' (brute a known pattern).\n- Hybrid: wordlist + appended mask (rockyou + ?d?d?d?d).\nPopular rulesets (best64, OneRuleToRuleThemAll) crack most policy-compliant passwords.",
          "The defenses (length + screening + MFA):\n- Favor LONG passphrases over complex short ones — length multiplies the search space.\n- Ban weak + breached passwords (NIST 800-63B): block the predictable bases entirely.\n- Don't mandate periodic forced rotation (it produces Password1 → Password2 patterns).\n- MFA so a cracked password still isn't enough.",
        ],
        codeExample: {
          label: "Rules crack what brute force can't reach",
          code: `# Plain wordlist misses 'P@ssw0rd2024!' (not literally in rockyou)
$ hashcat -m 1000 -a 0 hashes.txt rockyou.txt          # not found

# Add a rules file — mangles each word into millions of variants
$ hashcat -m 1000 -a 0 hashes.txt rockyou.txt -r best64.rule
...:P@ssw0rd2024!         # CRACKED — 'Password' + leet + year + !

# Mask attack on a known pattern (Ullll dd !)
$ hashcat -m 1000 -a 3 hashes.txt '?u?l?l?l?l?d?d!'

# THE FIX — long passphrases, ban breached passwords, MFA`,
        },
      },
      incident: {
        title: "Complexity Theater — Why Policies Backfire",
        when: "2017 — NIST 800-63B reverses decades of complexity guidance",
        where: "Enterprise password policies everywhere",
        impact: "Complexity + rotation rules produced predictable passwords that rules attacks crack en masse",
        body: [
          "For years, policy demanded an uppercase letter, a number, a symbol, and a 90-day rotation — and the result was a generation of P@ssw0rd1, P@ssw0rd2, Summer2024! passwords that rule-based cracking eats alive. In 2017 NIST 800-63B formally reversed this: it recommends long passphrases, screening against breached-password lists, and dropping mandatory periodic rotation, precisely because complexity rules shape predictable passwords without adding real entropy.",
          "The takeaway for defenders is counterintuitive but well-established: stop forcing complexity theater and start enforcing length and breach-screening, backed by MFA. A 20-character passphrase the user can remember crushes a rules attack; an 8-character 'complex' password the policy forced is in the cracked set before lunch.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Attacker", sub: "rockyou + best64.rule", type: "attacker" },
          { label: "Predictable mangling", sub: "leet + year + symbol", type: "system" },
          { label: "P@ssw0rd2024!", sub: "in the generated set", type: "victim" },
          { label: "Cracked", sub: "→ fix: length + ban breached + MFA", type: "result" },
        ],
      },
      timeline: [
        { year: 2010, event: "Rule-based mangling matures in John/Hashcat" },
        { year: 2015, event: "OneRuleToRuleThemAll-style rulesets dominate cracking" },
        { year: 2017, event: "NIST 800-63B: passphrases + breach-screening over complexity", highlight: true },
      ],
      keyTakeaways: [
        "Humans mangle base words predictably (capitalize, leet, append year/!) — and rules replicate that",
        "One wordlist + a ruleset (best64/OneRule) generates billions of realistic human passwords",
        "P@ssw0rd2024! feels strong but is trivially crackable; mask attacks brute known patterns",
        "Length beats complexity: every extra random character multiplies the search space",
        "Fixes (NIST 800-63B): long passphrases, ban breached passwords, drop forced rotation, MFA",
      ],
      references: [
        { title: "Hashcat — Rule-Based Attack", url: "https://hashcat.net/wiki/doku.php?id=rule_based_attack" },
        { title: "NIST SP 800-63B — Authentication", url: "https://pages.nist.gov/800-63-3/sp800-63b.html" },
      ],
    },
    quiz: {
      questions: [
        { id: "pw-03-q1", type: "Why", challenge: "The real weakness.", text: "Why is rule-based cracking so effective?", options: ["Humans mangle base words in predictable ways that rules replicate", "GPUs are slow", "Hashes are reversible", "Salts help attackers"], correctIndex: 0, explanation: "Predictable human patterns are exactly what rules encode." },
        { id: "pw-03-q2", type: "Rules", challenge: "What rules do.", text: "What does a Hashcat rules file do?", options: ["Applies mangling transformations to every word in a wordlist", "Scans ports", "Adds MFA", "Encrypts the wordlist"], correctIndex: 0, explanation: "Rules expand one wordlist into millions of realistic variants." },
        { id: "pw-03-q3", type: "Leet", challenge: "Substitution.", text: "P@ssw0rd2024! is an example of what?", options: ["Predictable mangling (capitalize + leetspeak + year + symbol)", "A random password", "A hash", "A salt"], correctIndex: 0, explanation: "It's a base word mangled in the standard, crackable way." },
        { id: "pw-03-q4", type: "Mask", challenge: "Known pattern.", text: "What is a mask attack?", options: ["Brute-forcing a known character pattern (e.g. ?u?l?l?l?d?d!)", "A wordlist only", "An online attack", "A salt generator"], correctIndex: 0, explanation: "Masks brute a structure efficiently when the pattern is known." },
        { id: "pw-03-q5", type: "Entropy", challenge: "Length vs complexity.", text: "What adds more real strength to a password?", options: ["Length (more characters multiplies the search space)", "One required symbol", "A 90-day rotation", "A capital letter only"], correctIndex: 0, explanation: "Length dominates entropy; predictable complexity adds little." },
        { id: "pw-03-q6", type: "Policy", challenge: "Backfire.", text: "Why do complexity + rotation policies backfire?", options: ["They produce predictable passwords (P@ssw0rd1→2) that rules crack", "They are too random", "They use Argon2", "They block MFA"], correctIndex: 0, explanation: "Forced complexity shapes guessable patterns without real entropy." },
        { id: "pw-03-q7", type: "Standard", challenge: "Modern guidance.", text: "What does NIST 800-63B recommend?", options: ["Long passphrases + breach-list screening; drop forced periodic rotation", "Frequent rotation + complexity", "Plaintext storage", "Shorter passwords"], correctIndex: 0, explanation: "NIST reversed complexity theater in favor of length + screening." },
        { id: "pw-03-q8", type: "Defense", challenge: "Stop the bases.", text: "How do you stop predictable bases from ever passing?", options: ["Ban weak/breached passwords at set time + require length, backed by MFA", "Mandate a symbol", "Rotate monthly", "Hide the policy"], correctIndex: 0, explanation: "Breach-screening + length + MFA defeats rule-based cracking." },
      ],
    },
    ctf: {
      attackerMachine: kali,
      targetMachine: tgt("a 'complex' but mangled password (policy-compliant)", "n/a (offline)"),
      scenario: "A captured NTLM hash belongs to a user who followed the complexity policy: a base word with leetspeak, a year, and a symbol. A plain wordlist won't crack it — use rules to mangle the wordlist and recover it.",
      hint: "Try a plain wordlist (fails), then add a rules file to generate the mangled variations.",
      hints: [
        "Read the briefing. Run: cat briefing.txt",
        "Try the plain wordlist attack (it'll miss). Run: wordlist-attack",
        "Add rules to mangle the wordlist and crack it. Run: rules-attack",
        "Run 'assemble' to view the assembled flag and the submit command",
      ],
      fragments: [
        { trigger: "/briefing.txt", value: "FLAG{RUL3S_", label: "Rules Briefing" },
        { trigger: "wordlist-attack", value: "M4NGL3_", label: "Plain Wordlist Misses" },
        { trigger: "rules-attack", value: "W34K_P4SS}", label: "'Strong' Password Cracked" },
      ],
      files: {
        "/briefing.txt": [
          "RANGE — PASSWORD LAB 3: WORDLISTS & RULES",
          "Hash belongs to a policy-compliant 'complex' password.",
          "Goal: crack it with rule-based mangling.",
          "Sequence: wordlist-attack -> rules-attack -> assemble",
        ].join("\n"),
      },
      dirs: { "/": [{ name: "briefing.txt", isDir: false }] },
      extraCommands: {
        "wordlist-attack": (_args: string[]) => ({
          lines: [
            "$ hashcat -m 1000 -a 0 hash.txt rockyou.txt",
            "Status: Exhausted   Recovered: 0/1",
            "  [-] 'P@ssw0rd2024!' is NOT literally in rockyou.txt",
            "",
            ">> LEARN: a plain wordlist only matches exact entries",
            "   The user's mangled password isn't in the raw list — yet.",
            "   Fragment collected.",
          ],
        }),
        "rules-attack": (_args: string[]) => ({
          lines: [
            "$ hashcat -m 1000 -a 0 hash.txt rockyou.txt -r rules/best64.rule",
            "  applying ~77 mangling rules to every word ...",
            "  'password' -> 'Password' -> 'P@ssw0rd' -> 'P@ssw0rd2024!'",
            "...:P@ssw0rd2024!     <-- CRACKED",
            "",
            ">> LEARN: rules turn one word into the millions of human variations",
            "   Complexity policies MADE this password predictable.",
            ">> BLUE TEAM: long passphrases + ban breached passwords + MFA (NIST 800-63B).",
            "   Run 'assemble' to view the flag and the submit command.",
          ],
        }),
      },
    },
  },

  // ─── Lab 4: credential attacks at scale ─────────────────────────────────────
  {
    epochId: "range-passwords",
    wonder: { name: "The Credential Cascade", location: "Offensive Security Lab", era: "Present Day", emoji: "🌊" },
    id: "pw-04",
    order: 4,
    title: "Spraying, Stuffing & Pass-the-Hash",
    subtitle: "Credential attacks at enterprise scale",
    category: "cybersecurity",
    xp: 200,
    badge: { id: "badge-pw-scale", name: "Credential Operator", emoji: "🌊" },
    challengeType: "ctf",
    info: {
      tagline: "At scale you don't crack one password — you exploit reuse, weak choices across many accounts, and the fact that a hash IS a credential.",
      year: 2013,
      overview: [
        "Against an enterprise, the smartest credential attacks avoid cracking entirely. Password spraying flips brute force around: instead of many passwords against one account (which triggers lockout), it tries one very common password — `Spring2024!`, `Welcome1` — against every account in the organization. Statistically, in any large user base, several people chose it, and because each account sees only one attempt, lockout never fires. Credential stuffing goes further by using passwords leaked from other breaches: since people reuse passwords everywhere, a username/password pair stolen from one site frequently unlocks the corporate account, no guessing required.",
        "Pass-the-hash is the third and most elegant: on Windows, the NTLM hash isn't just a stored fingerprint — it can be used to authenticate directly, without ever knowing the plaintext. An attacker who dumps a hash from one machine can 'pass' it to authenticate to others as that user, and if a local-admin password is reused across machines (very common), one dumped hash unlocks the whole fleet. This is the lateral-movement engine behind real breaches. All three attacks share the same decisive defenses: MFA (a sprayed or stuffed password alone fails), banning breached and common passwords (so spraying/stuffing find nothing), unique per-host local-admin passwords via LAPS (so a hash can't be reused), and monitoring for the distinctive failed-login-across-many-accounts pattern that spraying generates.",
      ],
      technical: {
        title: "Spraying, Stuffing, and Pass-the-Hash",
        body: [
          "The three scale attacks:\n- Password spraying — one common password × many accounts (stays under lockout thresholds).\n- Credential stuffing — reuse leaked username:password pairs from other breaches (no guessing).\n- Pass-the-hash (PtH) — use the NTLM hash itself to authenticate on Windows, no plaintext needed.",
          "Why they work at scale:\n- Spraying: in a big org, SOME user picked Welcome1/Season+Year.\n- Stuffing: password reuse means a breach elsewhere unlocks here.\n- PtH: reused local-admin passwords → one dumped hash unlocks many hosts → lateral movement to DA.\n- Tools: crackmapexec/netexec spray + PtH across a domain in one command.",
          "The defenses (shared, decisive):\n- MFA everywhere — a sprayed/stuffed/reused password alone is insufficient (the top control).\n- Ban common + breached passwords (kills spraying and stuffing at the source).\n- LAPS — unique, rotating local-admin passwords so a hash can't be reused across hosts.\n- Detect the pattern: many accounts × one password = spraying; impossible travel; anomalous SMB auth.",
        ],
        codeExample: {
          label: "Spray, then pass-the-hash",
          code: `# Password spraying — one password, the whole user list (no lockout)
$ crackmapexec smb 10.10.10.0/24 -u users.txt -p 'Spring2024!'
[+] CORP\\rjones:Spring2024!   (one user reused the common password)

# Pass-the-hash — authenticate with the HASH, never the plaintext
$ crackmapexec smb 10.10.10.0/24 -u Administrator -H 31d6cfe0...089c0
[+] 10.10.10.41  (Pwn3d!)   [+] 10.10.10.42  (Pwn3d!)   # reused local-admin

# THE FIX — MFA, ban breached pws, LAPS (unique local-admin per host)`,
        },
      },
      incident: {
        title: "The Credential Economy — Reuse Powers Most Breaches",
        when: "2013–present — from mega-breaches to credential-stuffing campaigns",
        where: "Enterprise identity systems, SSO, VPNs, and Microsoft 365 tenants",
        impact: "Spraying and stuffing are among the most common initial-access techniques in real intrusions",
        body: [
          "Verizon's breach reports have for years placed stolen and reused credentials at the center of most breaches, and major incidents — from cloud-tenant takeovers to ransomware footholds — frequently begin with a spray against M365 or a stuffing run using a prior breach's dump. Pass-the-hash, meanwhile, is the workhorse of post-compromise lateral movement; reused local-admin hashes turn one popped box into domain-wide control.",
          "Because the attacks exploit human reuse and weak choices rather than a software bug, the fixes are identity controls, not patches: MFA everywhere (the single highest-impact control), banning common and breached passwords, LAPS for unique local-admin secrets, and detection tuned for the many-accounts-one-password signature. Crack one password and you own an account; fix reuse and MFA and you break the whole credential economy.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Attacker", sub: "spray / stuff / PtH", type: "attacker" },
          { label: "Many accounts / reused creds", sub: "Welcome1, leaked pairs, hashes", type: "system" },
          { label: "Foothold + lateral move", sub: "no cracking needed", type: "victim" },
          { label: "Domain compromise", sub: "→ fix: MFA + LAPS + breach-ban", type: "result" },
        ],
      },
      timeline: [
        { year: 2013, event: "Mega-breaches seed the credential-stuffing economy" },
        { year: 2016, event: "Pass-the-hash + reused local-admin drive ransomware lateral movement", highlight: true },
        { year: 2021, event: "M365 password spraying becomes a top cloud initial-access vector" },
      ],
      keyTakeaways: [
        "Spraying tries one common password across many accounts to dodge lockout",
        "Stuffing reuses leaked username:password pairs — no guessing, because people reuse passwords",
        "Pass-the-hash uses the NTLM hash itself to authenticate; reused local-admin = fleet-wide compromise",
        "These exploit human reuse/weak choices, not a software bug — so the fixes are identity controls",
        "Decisive defenses: MFA everywhere, ban common/breached passwords, LAPS, detect the spray pattern",
      ],
      references: [
        { title: "MITRE ATT&CK — Brute Force / Password Spraying (T1110)", url: "https://attack.mitre.org/techniques/T1110/" },
        { title: "Microsoft — Local Administrator Password Solution (LAPS)", url: "https://learn.microsoft.com/en-us/windows-server/identity/laps/laps-overview" },
      ],
    },
    quiz: {
      questions: [
        { id: "pw-04-q1", type: "Spraying", challenge: "Avoid lockout.", text: "What is password spraying?", options: ["One common password tried across many accounts (few attempts each)", "Many passwords against one account", "Cracking offline", "A DoS"], correctIndex: 0, explanation: "Spreading attempts across accounts stays under lockout thresholds." },
        { id: "pw-04-q2", type: "Stuffing", challenge: "Reuse.", text: "What makes credential stuffing work?", options: ["People reuse passwords, so a breach elsewhere unlocks the corporate account", "Strong unique passwords", "MFA", "Salting"], correctIndex: 0, explanation: "Reuse means leaked pairs frequently work elsewhere — no guessing." },
        { id: "pw-04-q3", type: "PtH", challenge: "Use the hash.", text: "What is pass-the-hash?", options: ["Authenticating with the NTLM hash directly, without the plaintext password", "Cracking a hash", "Salting a hash", "Hashing twice"], correctIndex: 0, explanation: "On Windows the hash itself can authenticate via NTLM." },
        { id: "pw-04-q4", type: "Lateral", challenge: "Fleet-wide.", text: "Why does pass-the-hash enable lateral movement?", options: ["Reused local-admin passwords mean one dumped hash unlocks many hosts", "Hashes are random", "It needs MFA", "It only works locally"], correctIndex: 0, explanation: "Reused local-admin hashes spread access across machines." },
        { id: "pw-04-q5", type: "Tooling", challenge: "At scale.", text: "What do tools like crackmapexec/netexec do?", options: ["Spray and pass-the-hash across a whole domain in one command", "Scan ports only", "Encrypt traffic", "Patch hosts"], correctIndex: 0, explanation: "They automate credential attacks across many hosts at once." },
        { id: "pw-04-q6", type: "Defense", challenge: "Top control.", text: "Which single control most blunts spraying, stuffing, AND a guessed password?", options: ["MFA everywhere", "A longer username", "Monthly rotation", "Hiding the login"], correctIndex: 0, explanation: "MFA makes a sprayed/stuffed/reused password alone insufficient." },
        { id: "pw-04-q7", type: "Defense", challenge: "Kill reuse.", text: "What stops pass-the-hash from spreading across machines?", options: ["LAPS — unique, rotating local-admin passwords per host", "One shared admin password", "Disabling MFA", "Plaintext storage"], correctIndex: 0, explanation: "Unique per-host local-admin secrets defeat hash reuse." },
        { id: "pw-04-q8", type: "Detection", challenge: "The signature.", text: "What pattern signals password spraying?", options: ["Many different accounts failing with the same password from one source", "One account locked once", "A single successful login", "High CPU"], correctIndex: 0, explanation: "Many-accounts/one-password is the tell-tale spray signature." },
      ],
    },
    ctf: {
      attackerMachine: kali,
      targetMachine: tgt("weak/reused credentials + reused local-admin hash across the subnet", "445 (SMB), 10.10.10.0/24"),
      scenario: "You have a list of org usernames and one dumped local-admin NTLM hash. Don't crack — spray a common password to find a foothold, then pass-the-hash to move across the subnet.",
      hint: "Spray one common password across the user list, then reuse the dumped hash to authenticate to other hosts.",
      hints: [
        "Read the briefing. Run: cat briefing.txt",
        "Spray one common password across the org. Run: password-spray 10.10.10.40",
        "Reuse the dumped hash across the subnet. Run: pass-the-hash 10.10.10.40",
        "Run 'assemble' to view the assembled flag and the submit command",
      ],
      fragments: [
        { trigger: "/briefing.txt", value: "FLAG{SPR4Y_", label: "Scale Briefing" },
        { trigger: "password-spray 10.10.10.40", value: "STUFF_", label: "Foothold via Spray" },
        { trigger: "pass-the-hash 10.10.10.40", value: "PTH_PWN3D}", label: "Lateral Movement via PtH" },
      ],
      files: {
        "/briefing.txt": [
          "RANGE — PASSWORD LAB 4: SPRAY / STUFF / PASS-THE-HASH",
          "You have users.txt and one local-admin NTLM hash.",
          "Goal: spray for a foothold, then PtH across 10.10.10.0/24.",
          "Sequence: password-spray 10.10.10.40 -> pass-the-hash 10.10.10.40 -> assemble",
        ].join("\n"),
      },
      dirs: { "/": [{ name: "briefing.txt", isDir: false }] },
      extraCommands: {
        "password-spray": (args: string[]) => {
          if (args[0] !== "10.10.10.40") return { lines: ["Usage: password-spray 10.10.10.40"] };
          return {
            lines: [
              "$ crackmapexec smb 10.10.10.40 -u users.txt -p 'Spring2024!'",
              "[-] CORP\\admin:Spring2024!     [-] CORP\\jsmith:Spring2024!",
              "[+] CORP\\rjones:Spring2024!    <-- one user reused the common password",
              "  (each account saw ONE attempt — no lockout tripped)",
              "",
              ">> LEARN: spraying trades depth for breadth to dodge lockout",
              "   In any big org, SOMEONE picked the seasonal password.",
              "   Fragment collected.",
            ],
          };
        },
        "pass-the-hash": (args: string[]) => {
          if (args[0] !== "10.10.10.40") return { lines: ["Usage: pass-the-hash 10.10.10.40"] };
          return {
            lines: [
              "$ crackmapexec smb 10.10.10.0/24 -u Administrator -H 31d6cfe0d16ae931b73c59d7e0c089c0",
              "[+] 10.10.10.41  Administrator  (Pwn3d!)   <-- reused local-admin",
              "[+] 10.10.10.42  Administrator  (Pwn3d!)",
              "  authenticated with the HASH — never knew the plaintext",
              "",
              ">> LEARN: the hash IS a credential on Windows; reuse = fleet-wide ownership",
              ">> BLUE TEAM: MFA + ban breached pws + LAPS (unique local-admin per host).",
              "   Run 'assemble' to view the flag and the submit command.",
            ],
          };
        },
      },
    },
  },
];

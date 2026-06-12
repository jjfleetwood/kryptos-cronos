import type { EpochConfig, StageConfig } from "./types";

// ── Advanced Audit · Application Review ──────────────────────────────────────
// Gated, professional track (off to the side from the public learner catalog).
// Every module = one audit sub-process, taught as an AGENTIC workflow: the
// control objective, the agents + MCP server tools that gather the evidence and
// run the tests, a workflow diagram, a CTF that drives the workflow, a 10-question
// quiz, and a downloadable, runnable example MCP component (the drill-down code
// library at /audit). Modules are ranked by easeScore + valueScore like audit-cm.

export const auditApplicationReviewEpoch: EpochConfig = {
  id: "audit-application-review",
  name: "Application Review",
  subtitle: "Agentic technical & privacy audit of an application estate",
  description:
    "Audit an application end to end with an agent fleet: inventory and tiering, authn/authz design, secure configuration and OWASP controls, API security, logging, business rules, patching, IAM/SoD, interfaces, data extracts, crypto & dependency management (incl. PQC), and threat modeling — each as a repeatable agentic workflow with downloadable MCP tooling.",
  emoji: "🔎",
  color: "Violet",
  unlocked: true,
};

export const auditApplicationReviewStages: StageConfig[] = [
  {
    epochId: "audit-application-review",
    id: "aar-01",
    order: 1,
    title: "Application Inventory & Tiering",
    subtitle: "You can't audit what you can't see — reconcile the sources, tier every app",
    category: "cybersecurity",
    xp: 100,
    challengeType: "ctf",
    easeScore: 6,
    valueScore: 9,
    rank: 2,
    auditMeta: {
      objective:
        "Prove that the organization maintains a complete, accurate, risk-tiered inventory of its applications — and quantify the gap where it doesn't. The example code reconciles the systems of record and produces a defensible PASS / EXCEPTIONS / MATERIAL-GAP opinion with the untiered and shadow apps named.",
      approach:
        "An audit agent calls a read-only MCP server that wraps each system of record as a tool. The agent pulls all three sources, the server reconciles them by app, computes each app's tier from policy, and returns the findings; the human auditor sets the tiering thresholds, reviews, and signs the opinion. (Sources → reconcile → tier → findings.)",
      artifacts: [
        "CMDB application export (name, owner, business criticality, data classification)",
        "SSO/IdP active application catalog (what users can actually sign into)",
        "Cloud internet-facing service list (load balancers / app services + scheme)",
        "The reconciled tiered inventory + the untiered and shadow finding lists (the working paper)",
      ],
      system:
        "ServiceNow CMDB (cmdb_ci_appl) · Okta/Entra SSO app catalog · AWS/Azure cloud asset plane (ELBv2 / App Service). One read-only credential per source.",
      dataOwner:
        "IT Asset Management / CMDB owner (the inventory), Identity & Access Management (the SSO catalog), and Cloud Platform / FinOps (the cloud asset plane); application owners attest criticality and data classification.",
      scoring: {
        ease:
          "EASE 6/10 — the source APIs (ServiceNow, Okta, cloud) are well-documented and read-only, so the agent integration is straightforward; the friction is non-technical: getting read credentials to three teams' systems and agreeing the tiering policy.",
        value:
          "VALUE 9/10 — inventory is the control every other application control is scoped against, so a gap here invalidates the rest of the audit; the finding (named shadow/untiered apps) is concrete, actionable, and almost always present.",
      },
    },
    badge: { id: "aar-badge-01", name: "Estate Cartographer", emoji: "🗺️" },
    wonder: { name: "The CMDB of Record", location: "Enterprise IT", era: "Present Day", emoji: "🗃️" },
    info: {
      tagline: "Every application audit begins with one question the organization usually can't answer: what applications do we actually have, and how critical is each one?",
      year: 2025,
      overview: [
        "The first control an application audit tests is also the one most organizations quietly fail: a complete, accurate, risk-tiered inventory of their applications. It sounds clerical, but it's foundational — every downstream control (patching, access review, logging, encryption) is scoped *per application*, so an app that isn't in the inventory gets none of them. The auditor's opening question, 'show me the list of every application and its tier,' routinely produces a stale spreadsheet, three disagreeing systems of record, and a roomful of people who realize they don't actually know.",
        "The reason it's hard is that the truth is spread across systems that were never reconciled. The CMDB (e.g. ServiceNow) holds the *official* list and the business metadata — owner, criticality, data classification — but it's maintained by hand and drifts. The SSO catalog (Okta, Entra) knows what users can actually *log in* to, including SaaS apps procurement bought without telling IT. The cloud plane (load balancers, app services) knows what's actually *running and internet-facing*. Each is authoritative for something and blind to the rest, and the gaps between them are exactly where risk hides: **untiered** apps that were never risk-rated, and **shadow** apps that are live but in no inventory.",
        "Tiering then turns the list into a risk-prioritized program. A defensible tier is a function of business criticality × data sensitivity × internet exposure — a mission-critical, regulated, internet-facing app is Tier 1 and earns the deepest scrutiny; an internal, public-data tool is Tier 4. The audit opinion on this sub-process is blunt: if apps are untiered or shadow apps exist, the inventory control has a material gap, because the organization is applying controls to a map that doesn't match the territory.",
      ],
      technical: {
        title: "The agentic workflow — automate the reconciliation, not the judgement",
        body: [
          "Manually, this audit is weeks of exporting spreadsheets and chasing owners. Agentically, you give an audit agent an MCP server that turns each system of record into a callable tool, and let it do the reconciliation while you make the judgement calls. The included `01_application_inventory_mcp.py` exposes exactly four tools: `build_inventory()` reconciles the CMDB, SSO, and cloud sources into one record per app (merging by normalized name and computing each app's tier); `find_untiered()` returns the apps that can't be risk-rated because criticality or data classification is missing; `find_shadow_apps()` returns apps live in cloud/SSO but absent from the CMDB; and `coverage_report()` produces the working-paper deliverable — total apps, tier distribution, the two finding lists, and a PASS / EXCEPTIONS / MATERIAL-GAP opinion.",
          "The pattern generalizes to every module in this track and is the whole point of agentic audit: the agent gathers and correlates evidence across systems at machine speed and with a complete, logged trail, while the human auditor sets the policy (the tiering thresholds), reviews the findings, and signs the opinion. The MCP server is deliberately **read-only** — it has tools to *list* and *report*, never to *change* — so running it can never alter the audited environment, which is a hard requirement for audit tooling and the first thing a reviewer should verify.",
          "To run the real thing: `pip install \"mcp[cli]\" requests boto3`, set the `SERVICENOW_*`, `OKTA_*`, and AWS credentials, then `mcp run 01_application_inventory_mcp.py` to expose it to your agent — or `python 01_application_inventory_mcp.py --selftest` to see the findings reproduce against the built-in fixtures offline. Each source client is isolated so you can point it at your tenant or a test fixture without touching the audit logic.",
        ],
        codeExample: {
          label: "coverage_report() — the audit deliverable (excerpt)",
          code: `def coverage_report():
    inv = list(_reconcile(_gather()).values())
    untiered = [a for a in inv if a.tier is None]
    shadow   = [a for a in inv if "cmdb" not in a.source.split(",")]
    return {
      "total_apps": len(inv),
      "tier_distribution": {t: count(inv, t) for t in (1,2,3,4)},
      "untiered_count": len(untiered),
      "shadow_count":   len(shadow),
      "opinion": "PASS" if not untiered and not shadow
                 else "EXCEPTIONS" if len(untiered)+len(shadow) <= 3
                 else "MATERIAL GAP",
    }`,
        },
      },
      incident: {
        title: "The breach of the app nobody owned",
        when: "Recurring (representative)",
        where: "Enterprise application estates",
        impact: "Internet-facing apps absent from the inventory go unpatched and unmonitored — the classic root cause behind 'we didn't know that system was still running' breach post-mortems.",
        body: [
          "The pattern repeats across real incidents: an internet-facing application — a legacy portal, a forgotten marketing microsite, a SaaS instance procurement stood up — exists in the cloud and the SSO catalog but never made it into the CMDB. Because it's not in the inventory, it's not in the patch program, not in the vulnerability-scan scope, and not in any access review. It runs, unwatched, until an attacker finds it first.",
          "Equifax (2017) is the canonical version at scale: an internet-facing Apache Struts application went unpatched against a known critical CVE for months, in part because the asset and its ownership weren't tracked with the rigor a Tier-1 app demands. The lesson auditors draw is upstream of patching: the inventory-and-tiering control failed first, and every control that should have caught the missing patch was scoped to a list the vulnerable app wasn't on.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Scope", sub: "define app estate + tiering policy", type: "attacker" },
          { label: "Agent + MCP", sub: "pull CMDB · SSO · cloud", type: "system" },
          { label: "Reconcile & tier", sub: "merge, compute tier, find gaps", type: "system" },
          { label: "Findings + opinion", sub: "untiered · shadow · CAPA", type: "result" },
        ],
      },
      timeline: [
        { year: 2017, event: "Equifax: unpatched internet-facing Struts app — an asset/ownership tracking failure at root", highlight: true },
        { year: 2023, event: "CISA BOD/known-exploited push makes 'complete asset inventory' a baseline expectation" },
        { year: 2025, event: "Agentic reconciliation of CMDB + SSO + cloud becomes the practical way to keep inventory current", highlight: true },
      ],
      keyTakeaways: [
        "An app missing from the inventory inherits none of the scoped controls — inventory is the control all other application controls depend on.",
        "Reconcile three sources, not one: CMDB (official + metadata), SSO (what users can reach), cloud (what's running + internet-facing).",
        "Tier = criticality × data sensitivity × internet exposure; untiered apps are a finding because they get no scoped scrutiny.",
        "Shadow apps (live in cloud/SSO, absent from CMDB) are the highest-risk gap — unwatched and unowned.",
        "Audit tooling must be read-only; verify the MCP server can list and report but never change the environment.",
      ],
      references: [
        { title: "NIST SP 800-53 — CM-8 System Component Inventory", url: "https://csrc.nist.gov/projects/risk-management/sp800-53-controls/release-search#!/control?version=5.1&number=CM-8" },
        { title: "CIS Critical Security Control 2 — Inventory of Software Assets", url: "https://www.cisecurity.org/controls/inventory-and-control-of-software-assets" },
        { title: "Model Context Protocol — specification", url: "https://modelcontextprotocol.io/" },
      ],
      downloads: [
        {
          name: "01_application_inventory_mcp.py",
          url: "/audit-code/application-review/01_application_inventory_mcp.py",
          description: "Runnable MCP server: reconciles CMDB + SSO + cloud into a tiered inventory and reports untiered/shadow findings. Read-only. pip install \"mcp[cli]\" requests boto3.",
        },
      ],
    },
    ctf: {
      scenario:
        "You're the application auditor at AcmeCorp. The CMDB says they run 4 applications. Their SSO catalog and cloud load-balancer list tell a different story. The evidence is in /evidence — reconcile the three sources, identify the shadow and untiered apps, and assemble the finding flag. (In a real engagement you'd run the inventory MCP server against live APIs; here the same sources are exported to files.)",
      hint: "Three systems of record disagree. Read all of them — the gaps between them are the finding.",
      hints: [
        "cat each file in /evidence. The CMDB is the 'official' list; SSO is what users can log into; the cloud list is what's actually running.",
        "An app in SSO or cloud but NOT in the CMDB is 'shadow'. An app in the CMDB with no data classification can't be tiered — it's 'untiered'.",
        "Read the computed coverage_report.json last — it confirms the two findings and carries the final fragment.",
      ],
      files: {
        "/evidence/README.md":
          "# AcmeCorp Application Inventory — Audit Evidence\n\nThree systems of record, exported for the audit:\n- cmdb_export.json   (ServiceNow — the official list + metadata)\n- sso_apps.txt       (Okta — what users can sign into)\n- cloud_lbs.json     (AWS — internet-facing load balancers)\n\nTask: reconcile them. Find apps that are SHADOW (live but not in the CMDB) and\nUNTIERED (in the CMDB but missing the data classification needed to risk-rate).\nThen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/cmdb_export.json":
          '[\n  {"name":"Customer Portal","criticality":"mission-critical","data_class":"regulated"},\n  {"name":"HR Self-Service","criticality":"high","data_class":"restricted"},\n  {"name":"Marketing Site","criticality":"low","data_class":"public"},\n  {"name":"Internal Wiki","criticality":"medium","data_class":null}\n]\n# fragment: FLAG{app_inv_',
        "/evidence/sso_apps.txt":
          "Customer Portal\nHR Self-Service\nExpense Tool (SaaS)   <-- not in CMDB\n# fragment: 1shadow_saas_",
        "/evidence/cloud_lbs.json":
          '[\n  {"name":"Customer Portal","scheme":"internet-facing"},\n  {"name":"api-gateway-prod","scheme":"internet-facing"}\n]\n# api-gateway-prod is internet-facing and NOT in the CMDB\n# fragment: 1shadow_cloud_',
        "/evidence/coverage_report.json":
          '{\n  "total_apps": 6,\n  "untiered_count": 1,   // Internal Wiki — no data_class\n  "shadow_count": 2,     // Expense Tool, api-gateway-prod\n  "opinion": "MATERIAL GAP"\n}\n# fragment: 1untiered_material_gap}',
      },
      dirs: {
        "/": [{ name: "evidence", isDir: true }],
        "/evidence": [
          { name: "README.md", isDir: false },
          { name: "cmdb_export.json", isDir: false },
          { name: "sso_apps.txt", isDir: false },
          { name: "cloud_lbs.json", isDir: false },
          { name: "coverage_report.json", isDir: false },
        ],
      },
      fragments: [
        { trigger: "/evidence/cmdb_export.json", value: "FLAG{app_inv_", label: "CMDB — the official list (and an untiered app)" },
        { trigger: "/evidence/sso_apps.txt", value: "1shadow_saas_", label: "SSO — a SaaS app not in the CMDB" },
        { trigger: "/evidence/cloud_lbs.json", value: "1shadow_cloud_", label: "Cloud — an internet-facing app not in the CMDB" },
        { trigger: "/evidence/coverage_report.json", value: "1untiered_material_gap}", label: "Coverage report — the audit opinion" },
      ],
    },
    quiz: {
      questions: [
        { id: "aar-01-q1", type: "Foundations", challenge: "Why inventory first?", text: "Why is application inventory the foundational control in an application audit?", options: ["Every other control (patching, access review, logging, encryption) is scoped per application, so an app not in the inventory receives none of them", "It is required by GDPR specifically", "Inventories are easy to produce", "It replaces the need for tiering"], correctIndex: 0, explanation: "Controls are applied to the list; anything off the list is unprotected by definition." },
        { id: "aar-01-q2", type: "Sources", challenge: "Three records.", text: "Why must an auditor reconcile the CMDB, the SSO catalog, AND the cloud plane rather than trust one?", options: ["Each is authoritative for something and blind to the rest — CMDB for metadata, SSO for what users can reach, cloud for what's actually running/internet-facing", "They always agree, so any one suffices", "Only the CMDB matters for audit", "SSO is the single source of truth"], correctIndex: 0, explanation: "The gaps between the three sources are exactly where shadow and untiered apps hide." },
        { id: "aar-01-q3", type: "Findings", challenge: "Define shadow.", text: "What is a 'shadow' application in this audit?", options: ["An app live in the cloud or SSO catalog but absent from the CMDB — running, but in no inventory", "Any app written in a shadow framework", "An app that is end-of-life", "An app with a low tier"], correctIndex: 0, explanation: "Shadow apps are unowned and unwatched — the highest-risk inventory gap." },
        { id: "aar-01-q4", type: "Findings", challenge: "Define untiered.", text: "Why is an 'untiered' app a finding even though it's in the CMDB?", options: ["Without criticality and data classification it can't be risk-rated, so it gets no scoped level of scrutiny", "Untiered apps are always internet-facing", "It means the app is unlicensed", "Untiered apps cannot be patched"], correctIndex: 0, explanation: "No tier means no risk-appropriate controls are assigned." },
        { id: "aar-01-q5", type: "Tiering", challenge: "What sets the tier?", text: "A defensible application tier is primarily a function of which combination?", options: ["Business criticality × data sensitivity × internet exposure", "Lines of code × team size", "Cloud spend × uptime", "Age × programming language"], correctIndex: 0, explanation: "Higher criticality, more sensitive data, and internet exposure drive a higher (more-scrutinized) tier." },
        { id: "aar-01-q6", type: "Agentic", challenge: "Human vs agent.", text: "In the agentic inventory workflow, which part stays with the human auditor?", options: ["Setting the tiering policy/thresholds, reviewing findings, and signing the opinion — the agent does the reconciliation, not the judgement", "Nothing — the agent issues the audit opinion", "Only running pip install", "Manually copying spreadsheets"], correctIndex: 0, explanation: "Agents automate evidence gathering and correlation; humans own policy and judgement." },
        { id: "aar-01-q7", type: "Tooling", challenge: "Read-only.", text: "Why must the inventory MCP server be read-only (list/report tools only)?", options: ["Audit tooling must never alter the audited environment; read-only guarantees running it can't change state", "Read-only servers are faster", "Write access is impossible in MCP", "So it can run without credentials"], correctIndex: 0, explanation: "Non-interference is a hard requirement for audit evidence-gathering tools." },
        { id: "aar-01-q8", type: "Real case", challenge: "Equifax root cause.", text: "What upstream control failure does the Equifax (2017) breach illustrate for this module?", options: ["Asset/ownership tracking and tiering failed first, so the unpatched internet-facing app wasn't on the list the patch and scan programs covered", "The encryption was too weak", "Multi-factor authentication was disabled", "The firewall had no rules"], correctIndex: 0, explanation: "Every control that should have caught the missing patch was scoped to an inventory the vulnerable app was missing from." },
        { id: "aar-01-q9", type: "Deliverable", challenge: "The opinion.", text: "coverage_report() returns 'MATERIAL GAP' when…", options: ["There are enough untiered and/or shadow apps that the inventory can't be relied on as complete and accurate", "The cloud account has more than one load balancer", "Any app is internet-facing", "The CMDB has fewer than ten apps"], correctIndex: 0, explanation: "The opinion escalates PASS → EXCEPTIONS → MATERIAL GAP with the count of untiered + shadow findings." },
        { id: "aar-01-q10", type: "Privacy", challenge: "Why audit cares about data class.", text: "Why does the tiering pull in data classification, not just business criticality?", options: ["Apps holding regulated/restricted data carry privacy and compliance obligations that demand a higher tier regardless of business criticality", "Data classification sets the app's color in the UI", "It determines the programming language", "Classification is only for backups"], correctIndex: 0, explanation: "Sensitive-data apps need stronger, regulated controls — tiering must reflect the data, the privacy half of the audit." },
      ],
    },
  },
];

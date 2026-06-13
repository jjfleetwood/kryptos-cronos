import type { EpochConfig, StageConfig } from "../types";

export const rpaGovernanceEpoch: EpochConfig = {
  "id": "rpa-governance",
  "name": "Robotic Process Automation (RPA) Governance",
  "subtitle": "Agentic technical & privacy audit — Robotic Process Automation (RPA) Governance",
  "description": "Audit Robotic Process Automation (RPA) Governance end to end with a read-only agent fleet: each sub-process is a module that teaches the control as a repeatable agentic workflow with downloadable MCP tooling, a CTF, and a 10-question quiz.",
  "emoji": "⚙️",
  "color": "Cyan",
  "unlocked": true
};

export const rpaGovernanceStages: StageConfig[] = [
  {
    "epochId": "rpa-governance",
    "id": "rpa-01",
    "order": 1,
    "title": "RPA strategy and governance",
    "subtitle": "Agentic technical & privacy audit of the rpa strategy and governance control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 5,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"RPA strategy and governance\" control for Robotic Process Automation (RPA) Governance is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify RPA is governed. PASS: an RPA governance/operating model (CoE, roles) exists, every bot is in an inventory with a named owner + purpose + criticality, new automations are approved/risk-assessed before production, and citizen-developer/shadow RPA is governed. Exceptions: no bot inventory or ownership (unknown automations running), bots deployed with no approval/risk assessment, ungoverned citizen-developer proliferation, and no RPA operating model.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Robotic Process Automation (RPA) Governance systems of record (RPA platform (UiPath / Blue Prism / Automation Anywhere) — Orchestrator; Bot inventory / register; Intake + approval workflow) as tools — e.g. `RPA governance/operating model (CoE, bot register, intake/prioritisati`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The RPA governance framework + operating model (the CoE, bot inventory/register, intake + prioritisation, role definitions — bot owner/developer/controller)",
        "The bot inventory + ownership (every bot registered with a business owner, purpose, the systems + data it touches, criticality)",
        "Approval/gating for new automations (business case, risk assessment, before a bot goes to production)",
        "Governance over bot proliferation + 'citizen developer' automations (shadow RPA controlled)"
      ],
      "system": [
        "RPA platform (UiPath / Blue Prism / Automation Anywhere) — Orchestrator",
        "Bot inventory / register",
        "Intake + approval workflow",
        "RPA CoE governance"
      ],
      "dataOwner": [
        "RPA CoE / automation lead",
        "Business process owners (bot owners)",
        "Risk + IT"
      ],
      "scoring": {
        "ease": "EASE 5/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Robotic Process Automation (RPA) Governance controls."
      }
    },
    "badge": {
      "id": "rpa-01-badge",
      "name": "Robotic Process Automation (RPA) Governance Auditor",
      "emoji": "⚙️"
    },
    "wonder": {
      "name": "RPA strategy and governance",
      "location": "Robotic Process Automation (RPA) Governance",
      "era": "Present Day",
      "emoji": "⚙️"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"RPA strategy and governance\" as a repeatable agentic workflow: pull the real evidence (The RPA governance framework + operating model (the CoE, bot inventory/register, intake + prioritisation, role definitions — bot owner/developer/controller)) with read-only agents, run the test against policy, and issue a defensible opinion on the Robotic Process Automation (RPA) Governance control.",
      "year": 2025,
      "overview": [
        "The \"RPA strategy and governance\" sub-process is one of the controls an auditor must verify for Robotic Process Automation (RPA) Governance. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the RPA governance framework + operating model (the CoE, bot inventory/register, intake + prioritisation, role definitions — bot owner/developer/controller), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here RPA platform (UiPath / Blue Prism / Automation Anywhere) — Orchestrator, Bot inventory / register, Intake + approval workflow — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `RPA governance/operating model (CoE, bot register, intake/prioritisation, roles)` — read-only, against the systems of record.",
        "The test itself is specific. Verify RPA is governed. PASS: an RPA governance/operating model (CoE, roles) exists, every bot is in an inventory with a named owner + purpose + criticality, new automations are approved/risk-assessed before production, and citizen-developer/shadow RPA is governed. Exceptions: no bot inventory or ownership (unknown automations running), bots deployed with no approval/risk assessment, ungoverned citizen-developer proliferation, and no RPA operating model. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `01_rpa_strategy_and_governance_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from RPA platform (UiPath / Blue Prism / Automation Anywhere) — Orchestrator and Bot inventory / register (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 01_rpa_strategy_and_governance_mcp.py` to expose it to your agent — or `python 01_rpa_strategy_and_governance_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "The bot with standing privileged access",
        "when": "Recurring",
        "where": "RPA estates",
        "impact": "An over-privileged, unmonitored bot with stored credentials becomes a powerful, unattended attack path or a compliance blind spot.",
        "body": [
          "Bots act as users at machine speed, often with broad standing access and stored credentials — and frequently outside change control and logging.",
          "Auditors verify RPA governance, secure dev/test/deploy, change control, least-privilege bot access, credential handling, and bot activity logging."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Robotic Process Automation (RPA) Governance scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull RPA platform (UiPath / Blue Prism / Automation Anywhere) — Orchestrator · Bot inventory / register",
            "type": "system"
          },
          {
            "label": "Evaluate",
            "sub": "reconcile vs policy, find gaps",
            "type": "system"
          },
          {
            "label": "Findings + opinion",
            "sub": "exceptions · CAPA",
            "type": "result"
          }
        ]
      },
      "timeline": [
        {
          "year": 2022,
          "event": "Unattended bots flagged as a top emerging access-risk class",
          "highlight": true
        },
        {
          "year": 2023,
          "event": "Credential-laden automation accounts targeted for lateral movement"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"RPA strategy and governance\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "RPA governance/operating model (CoE, bot register, intake/prioritisation, roles)\nbot inventory + ownership (owner, purpose, systems/data, criticality per bot)\napproval/gating for new automations (business case + risk assessment before prod)\ngovernance over bot proliferation + citizen-developer/shadow RPA"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The RPA governance framework + operating model (the CoE, bot inventory/register, intake + prioritisation, role definitions — bot owner/developer/controller).",
        "The test: Verify RPA is governed.",
        "Reconcile the systems of record (RPA platform (UiPath / Blue Prism / Automation Anywhere) — Orchestrator, Bot inventory / register, Intake + approval workflow) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. There's no bot inventory or governance — business units build and run bots independently with no approval or owner, so no one knows how many automations are running, what systems they touch, or who is accountable when one fails."
      ],
      "references": [
        {
          "title": "ISACA — Auditing RPA",
          "url": "https://www.isaca.org/"
        },
        {
          "title": "IIA — GTAG / RPA",
          "url": "https://www.theiia.org/"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "01_rpa_strategy_and_governance_mcp.py",
          "url": "/audit-code/rpa-governance/01_rpa_strategy_and_governance_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Robotic Process Automation (RPA) Governance evidence for \"RPA strategy and governance\" (the rpa governance framework + operating model (the coe, bot inventory/register, intake + prioritisation, role definitions — bot owner/developer/controller)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"RPA strategy and governance\" control for Robotic Process Automation (RPA) Governance at AcmeCorp. THE TEST: Verify RPA is governed. PASS: an RPA governance/operating model (CoE, roles) exists, every bot is in an inventory with a named owner + purpose + criticality, new automations are approved/risk-assessed before production, and citizen-developer/shadow RPA is governed. Exceptions: no bot inventory or ownership (unknown automations running), bots deployed with no approval/risk assessment, ungoverned citizen-developer proliferation, and no RPA operating model. The evidence — The RPA governance framework + operating model (the CoE, bot inventory/register, intake + prioritisation, role definitions — bot owner/developer/controller) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live RPA platform (UiPath / Blue Prism / Automation Anywhere) — Orchestrator APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. RPA platform (UiPath / Blue Prism / Automation Anywhere) — Orchestrator gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from RPA platform (UiPath / Blue Prism / Automation Anywhere) — Orchestrator; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Robotic Process Automation (RPA) Governance: \"RPA strategy and governance\" Audit Evidence\n\nThe test:\nVerify RPA is governed. PASS: an RPA governance/operating model (CoE, roles) exists, every bot is in an inventory with a named owner + purpose + criticality, new automations are approved/risk-assessed before production, and citizen-developer/shadow RPA is governed. Exceptions: no bot inventory or ownership (unknown automations running), bots deployed with no approval/risk assessment, ungoverned citizen-developer proliferation, and no RPA operating model.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- rpa-governance_inventory.json   (in-scope items — The RPA governance framework + operating model (the CoE, bot inventory/register, intake + prioritisation, role definitions — bot owner/developer/controller))\n- rpa-governance_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"RPA strategy and governance\",\n  \"domain\": \"Robotic Process Automation (RPA) Governance\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{rpa_",
        "/evidence/rpa-governance_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Automation CoE\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"RPA strategy and governance\" control must cover\n# fragment: rpa_strategy_governance_",
        "/evidence/rpa-governance_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
        "/evidence/coverage_report.json": "{\n  \"in_scope\": 4,\n  \"compliant\": 2,\n  \"exceptions\": [\"item-002\",\"item-003\"],\n  \"opinion\": \"MATERIAL GAP\"\n}\n# fragment: material_gap}"
      },
      "dirs": {
        "/": [
          {
            "name": "evidence",
            "isDir": true
          }
        ],
        "/evidence": [
          {
            "name": "README.md",
            "isDir": false
          },
          {
            "name": "policy.json",
            "isDir": false
          },
          {
            "name": "rpa-governance_inventory.json",
            "isDir": false
          },
          {
            "name": "rpa-governance_state.json",
            "isDir": false
          },
          {
            "name": "coverage_report.json",
            "isDir": false
          }
        ]
      },
      "fragments": [
        {
          "trigger": "/evidence/policy.json",
          "value": "FLAG{rpa_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/rpa-governance_inventory.json",
          "value": "rpa_strategy_governance_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/rpa-governance_state.json",
          "value": "gap_",
          "label": "State — the items that fail the control"
        },
        {
          "trigger": "/evidence/coverage_report.json",
          "value": "material_gap}",
          "label": "Coverage report — the audit opinion"
        }
      ]
    },
    "quiz": {
      "questions": [
        {
          "id": "rpa-01-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"RPA strategy and governance\" sub-process of Robotic Process Automation (RPA) Governance?",
          "options": [
            "Deploy and operate the rpa strategy and governance control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the rpa strategy and governance control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for rpa strategy and governance against comparable organisations in the sector",
            "Obtain evidence that the rpa strategy and governance control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "rpa-01-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"RPA strategy and governance\" matter to the broader Robotic Process Automation (RPA) Governance posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Robotic Process Automation (RPA) Governance",
            "It stops mattering once a firewall and endpoint agent are deployed across the Robotic Process Automation (RPA) Governance estate",
            "It is a control other Robotic Process Automation (RPA) Governance controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Robotic Process Automation (RPA) Governance controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "rpa-01-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"RPA strategy and governance\" control?",
          "options": [
            "A point-in-time screenshot of one system's rpa strategy and governance settings, captured during the walkthrough",
            "The The RPA governance framework + operating model (the CoE, bot inventory/register, intake + prioritisation, role definitions — bot owner/developer/controller), reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the rpa strategy and governance control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's rpa strategy and governance capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "rpa-01-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"RPA strategy and governance\"?",
          "options": [
            "From RPA platform (UiPath / Blue Prism / Automation Anywhere) — Orchestrator and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how rpa strategy and governance works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. RPA platform (UiPath / Blue Prism / Automation Anywhere) — Orchestrator) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "rpa-01-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"RPA strategy and governance\"?",
          "options": [
            "The external audit firm, since it is the party examining the rpa strategy and governance control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the rpa strategy and governance data is shared, so the accountability sits with no one in particular",
            "RPA CoE / automation lead, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "RPA CoE / automation lead owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "rpa-01-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"RPA strategy and governance\", which part stays with the human auditor?",
          "options": [
            "Re-keying each system's export into a spreadsheet by hand before the agent is allowed to read it",
            "Nothing of substance — the agent decides materiality and the human simply approves whatever it outputs",
            "Setting the policy and thresholds, reviewing the findings, and signing the opinion — the agent only gathers and correlates the evidence",
            "Issuing the final audit opinion automatically as soon as the agent's evidence-gathering run completes"
          ],
          "correctIndex": 2,
          "explanation": "Agents gather and correlate evidence at machine speed; the human owns the policy, the judgement, and the signed opinion."
        },
        {
          "id": "rpa-01-q7",
          "type": "Tooling",
          "challenge": "Read-only",
          "text": "Why must the MCP server for this module be strictly read-only?",
          "options": [
            "The MCP protocol is technically incapable of performing any write operation against a target system",
            "Audit tooling must never alter the audited environment, so read-only guarantees that running it cannot change any state",
            "Read-only is simply the only access level the source-system owners were willing to grant the audit team",
            "Write access would slow the evidence collection down, so read-only is chosen mainly for better performance"
          ],
          "correctIndex": 1,
          "explanation": "Non-interference is a hard requirement for audit evidence-gathering tools — not a permissions accident, a speed choice, or a protocol limitation."
        },
        {
          "id": "rpa-01-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"RPA strategy and governance\", which of these is a realistic reportable finding?",
          "options": [
            "There's no bot inventory or governance — business units build and run bots independently with no approval or owner, so no one knows how many automations are running, what systems they touch, or who is accountable when one fails.",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. There's no bot inventory or governance — business units build and run bots independently with no approval or owner, so no one knows how many automations are running, what systems they touch, or who is accountable when one fails. A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "rpa-01-q9",
          "type": "Deliverable",
          "challenge": "The opinion",
          "text": "How does the coverage report decide its overall opinion?",
          "options": [
            "It returns PASS by default unless the system owner formally disputes the underlying evidence in writing",
            "It assigns the opinion at random on each run, to avoid any bias in how the findings are presented",
            "It reports only the total count of in-scope assets and deliberately never renders an overall opinion",
            "It escalates PASS → EXCEPTIONS → MATERIAL GAP as the count and severity of the in-scope gaps increase"
          ],
          "correctIndex": 3,
          "explanation": "The opinion is a deterministic function of how many in-scope items fail the test and how severely."
        },
        {
          "id": "rpa-01-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"RPA strategy and governance\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind rpa strategy and governance, so there is no overlap",
            "The control applies only to public, non-sensitive data, so any gap in it carries no real regulatory exposure",
            "The control protects regulated or sensitive data, or the systems that process it, so a gap here carries compliance and privacy exposure",
            "Technical controls and privacy obligations are governed entirely separately, so this control sits outside privacy scope"
          ],
          "correctIndex": 2,
          "explanation": "Security and privacy ride on the same technical controls — a gap here is frequently a compliance and privacy gap as well."
        }
      ]
    }
  },
  {
    "epochId": "rpa-governance",
    "id": "rpa-02",
    "order": 2,
    "title": "Legal and regulatory compliance",
    "subtitle": "Agentic technical & privacy audit of the legal and regulatory compliance control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 6,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Legal and regulatory compliance\" control for Robotic Process Automation (RPA) Governance is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify RPA maintains legal + regulatory compliance. PASS: bots' actions on regulated processes preserve compliance (SoX controls, privacy, retained audit trails), every bot action is logged for traceability, automation doesn't break SoD or bypass controls, and bot data handling is privacy-compliant. Exceptions: bots performing regulated actions with no audit trail, automation collapsing segregated duties (a bot doing maker + checker), bots moving PII unlawfully, and no compliance assessment of automated processes.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Robotic Process Automation (RPA) Governance systems of record (Bot action logging / audit trail; SoD / control mapping for automated steps; Privacy assessment (bot data)) as tools — e.g. `compliance of bot actions on regulated processes (SoX controls, privac`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "Compliance assessment of what bots do (do automated actions on regulated processes maintain compliance — SoX controls, data-privacy, audit trails, the records the bot creates)",
        "The bot's audit trail/logging (every action logged for accountability + regulatory traceability — who/what the bot did)",
        "SoD + control implications of automation (a bot performing previously segregated steps; the control isn't bypassed by automating it)",
        "Data-privacy compliance of bot data handling (PII the bot processes/moves; lawful + controlled)"
      ],
      "system": [
        "Bot action logging / audit trail",
        "SoD / control mapping for automated steps",
        "Privacy assessment (bot data)",
        "Compliance / GRC"
      ],
      "dataOwner": [
        "Compliance + Legal + Privacy",
        "Internal audit / controls",
        "RPA CoE"
      ],
      "scoring": {
        "ease": "EASE 6/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Robotic Process Automation (RPA) Governance controls."
      }
    },
    "badge": {
      "id": "rpa-02-badge",
      "name": "Robotic Process Automation (RPA) Governance Auditor",
      "emoji": "⚙️"
    },
    "wonder": {
      "name": "Legal and regulatory compliance",
      "location": "Robotic Process Automation (RPA) Governance",
      "era": "Present Day",
      "emoji": "⚙️"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Legal and regulatory compliance\" as a repeatable agentic workflow: pull the real evidence (Compliance assessment of what bots do (do automated actions on regulated processes maintain compliance — SoX controls, data-privacy, audit trails, the records the bot creates)) with read-only agents, run the test against policy, and issue a defensible opinion on the Robotic Process Automation (RPA) Governance control.",
      "year": 2025,
      "overview": [
        "The \"Legal and regulatory compliance\" sub-process is one of the controls an auditor must verify for Robotic Process Automation (RPA) Governance. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me compliance assessment of what bots do (do automated actions on regulated processes maintain compliance — SoX controls, data-privacy, audit trails, the records the bot creates), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Bot action logging / audit trail, SoD / control mapping for automated steps, Privacy assessment (bot data) — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `compliance of bot actions on regulated processes (SoX controls, privacy, audit t` — read-only, against the systems of record.",
        "The test itself is specific. Verify RPA maintains legal + regulatory compliance. PASS: bots' actions on regulated processes preserve compliance (SoX controls, privacy, retained audit trails), every bot action is logged for traceability, automation doesn't break SoD or bypass controls, and bot data handling is privacy-compliant. Exceptions: bots performing regulated actions with no audit trail, automation collapsing segregated duties (a bot doing maker + checker), bots moving PII unlawfully, and no compliance assessment of automated processes. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `02_legal_and_regulatory_compliance_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Bot action logging / audit trail and SoD / control mapping for automated steps (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 02_legal_and_regulatory_compliance_mcp.py` to expose it to your agent — or `python 02_legal_and_regulatory_compliance_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "The bot with standing privileged access",
        "when": "Recurring",
        "where": "RPA estates",
        "impact": "An over-privileged, unmonitored bot with stored credentials becomes a powerful, unattended attack path or a compliance blind spot.",
        "body": [
          "Bots act as users at machine speed, often with broad standing access and stored credentials — and frequently outside change control and logging.",
          "Auditors verify RPA governance, secure dev/test/deploy, change control, least-privilege bot access, credential handling, and bot activity logging."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Robotic Process Automation (RPA) Governance scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull Bot action logging / audit trail · SoD / control mapping for automated steps",
            "type": "system"
          },
          {
            "label": "Evaluate",
            "sub": "reconcile vs policy, find gaps",
            "type": "system"
          },
          {
            "label": "Findings + opinion",
            "sub": "exceptions · CAPA",
            "type": "result"
          }
        ]
      },
      "timeline": [
        {
          "year": 2022,
          "event": "Unattended bots flagged as a top emerging access-risk class",
          "highlight": true
        },
        {
          "year": 2023,
          "event": "Credential-laden automation accounts targeted for lateral movement"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Legal and regulatory compliance\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "compliance of bot actions on regulated processes (SoX controls, privacy, audit trails, records created)\nbot audit trail/logging (every action logged for accountability + traceability)\nSoD + control implications (automation doesn't bypass a segregated/key control)\ndata-privacy compliance of bot data handling (PII processed/moved lawfully)"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: Compliance assessment of what bots do (do automated actions on regulated processes maintain compliance — SoX controls, data-privacy, audit trails, the records the bot creates).",
        "The test: Verify RPA maintains legal + regulatory compliance.",
        "Reconcile the systems of record (Bot action logging / audit trail, SoD / control mapping for automated steps, Privacy assessment (bot data)) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. A bot performs both the entry and the approval steps of a financial process that previously required two people, with no audit trail of its actions — automation silently collapsed a segregation-of-duties control and broke SoX compliance."
      ],
      "references": [
        {
          "title": "PCAOB AS 2201 — ICFR",
          "url": "https://pcaobus.org/oversight/standards/auditing-standards/details/AS2201"
        },
        {
          "title": "GDPR",
          "url": "https://gdpr-info.eu/"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "02_legal_and_regulatory_compliance_mcp.py",
          "url": "/audit-code/rpa-governance/02_legal_and_regulatory_compliance_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Robotic Process Automation (RPA) Governance evidence for \"Legal and regulatory compliance\" (compliance assessment of what bots do (do automated actions on regulated processes maintain compliance — sox controls, data-privacy, audit trails, the records the bot creates)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Legal and regulatory compliance\" control for Robotic Process Automation (RPA) Governance at AcmeCorp. THE TEST: Verify RPA maintains legal + regulatory compliance. PASS: bots' actions on regulated processes preserve compliance (SoX controls, privacy, retained audit trails), every bot action is logged for traceability, automation doesn't break SoD or bypass controls, and bot data handling is privacy-compliant. Exceptions: bots performing regulated actions with no audit trail, automation collapsing segregated duties (a bot doing maker + checker), bots moving PII unlawfully, and no compliance assessment of automated processes. The evidence — Compliance assessment of what bots do (do automated actions on regulated processes maintain compliance — SoX controls, data-privacy, audit trails, the records the bot creates) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Bot action logging / audit trail APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Bot action logging / audit trail gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Bot action logging / audit trail; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Robotic Process Automation (RPA) Governance: \"Legal and regulatory compliance\" Audit Evidence\n\nThe test:\nVerify RPA maintains legal + regulatory compliance. PASS: bots' actions on regulated processes preserve compliance (SoX controls, privacy, retained audit trails), every bot action is logged for traceability, automation doesn't break SoD or bypass controls, and bot data handling is privacy-compliant. Exceptions: bots performing regulated actions with no audit trail, automation collapsing segregated duties (a bot doing maker + checker), bots moving PII unlawfully, and no compliance assessment of automated processes.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- rpa-governance_inventory.json   (in-scope items — Compliance assessment of what bots do (do automated actions on regulated processes maintain compliance — SoX controls, data-privacy, audit trails, the records the bot creates))\n- rpa-governance_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Legal and regulatory compliance\",\n  \"domain\": \"Robotic Process Automation (RPA) Governance\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{rpa_",
        "/evidence/rpa-governance_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Automation CoE\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Legal and regulatory compliance\" control must cover\n# fragment: legal_regulatory_compliance_",
        "/evidence/rpa-governance_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
        "/evidence/coverage_report.json": "{\n  \"in_scope\": 4,\n  \"compliant\": 2,\n  \"exceptions\": [\"item-002\",\"item-003\"],\n  \"opinion\": \"MATERIAL GAP\"\n}\n# fragment: material_gap}"
      },
      "dirs": {
        "/": [
          {
            "name": "evidence",
            "isDir": true
          }
        ],
        "/evidence": [
          {
            "name": "README.md",
            "isDir": false
          },
          {
            "name": "policy.json",
            "isDir": false
          },
          {
            "name": "rpa-governance_inventory.json",
            "isDir": false
          },
          {
            "name": "rpa-governance_state.json",
            "isDir": false
          },
          {
            "name": "coverage_report.json",
            "isDir": false
          }
        ]
      },
      "fragments": [
        {
          "trigger": "/evidence/policy.json",
          "value": "FLAG{rpa_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/rpa-governance_inventory.json",
          "value": "legal_regulatory_compliance_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/rpa-governance_state.json",
          "value": "gap_",
          "label": "State — the items that fail the control"
        },
        {
          "trigger": "/evidence/coverage_report.json",
          "value": "material_gap}",
          "label": "Coverage report — the audit opinion"
        }
      ]
    },
    "quiz": {
      "questions": [
        {
          "id": "rpa-02-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Legal and regulatory compliance\" sub-process of Robotic Process Automation (RPA) Governance?",
          "options": [
            "Deploy and operate the legal and regulatory compliance control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the legal and regulatory compliance control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for legal and regulatory compliance against comparable organisations in the sector",
            "Obtain evidence that the legal and regulatory compliance control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "rpa-02-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Legal and regulatory compliance\" matter to the broader Robotic Process Automation (RPA) Governance posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Robotic Process Automation (RPA) Governance",
            "It stops mattering once a firewall and endpoint agent are deployed across the Robotic Process Automation (RPA) Governance estate",
            "It is a control other Robotic Process Automation (RPA) Governance controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Robotic Process Automation (RPA) Governance controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "rpa-02-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Legal and regulatory compliance\" control?",
          "options": [
            "A point-in-time screenshot of one system's legal and regulatory compliance settings, captured during the walkthrough",
            "The Compliance assessment of what bots do (do automated actions on regulated processes maintain compliance — SoX controls, data-privacy, audit trails, the records the bot creates), reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the legal and regulatory compliance control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's legal and regulatory compliance capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "rpa-02-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Legal and regulatory compliance\"?",
          "options": [
            "From Bot action logging / audit trail and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how legal and regulatory compliance works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. Bot action logging / audit trail) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "rpa-02-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Legal and regulatory compliance\"?",
          "options": [
            "The external audit firm, since it is the party examining the legal and regulatory compliance control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the legal and regulatory compliance data is shared, so the accountability sits with no one in particular",
            "Compliance + Legal + Privacy, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Compliance + Legal + Privacy owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "rpa-02-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Legal and regulatory compliance\", which part stays with the human auditor?",
          "options": [
            "Re-keying each system's export into a spreadsheet by hand before the agent is allowed to read it",
            "Nothing of substance — the agent decides materiality and the human simply approves whatever it outputs",
            "Setting the policy and thresholds, reviewing the findings, and signing the opinion — the agent only gathers and correlates the evidence",
            "Issuing the final audit opinion automatically as soon as the agent's evidence-gathering run completes"
          ],
          "correctIndex": 2,
          "explanation": "Agents gather and correlate evidence at machine speed; the human owns the policy, the judgement, and the signed opinion."
        },
        {
          "id": "rpa-02-q7",
          "type": "Tooling",
          "challenge": "Read-only",
          "text": "Why must the MCP server for this module be strictly read-only?",
          "options": [
            "The MCP protocol is technically incapable of performing any write operation against a target system",
            "Audit tooling must never alter the audited environment, so read-only guarantees that running it cannot change any state",
            "Read-only is simply the only access level the source-system owners were willing to grant the audit team",
            "Write access would slow the evidence collection down, so read-only is chosen mainly for better performance"
          ],
          "correctIndex": 1,
          "explanation": "Non-interference is a hard requirement for audit evidence-gathering tools — not a permissions accident, a speed choice, or a protocol limitation."
        },
        {
          "id": "rpa-02-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Legal and regulatory compliance\", which of these is a realistic reportable finding?",
          "options": [
            "A bot performs both the entry and the approval steps of a financial process that previously required two people, with no audit trail of its actions — automation silently collapsed a segregation-of-duties control and broke SoX compliance.",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. A bot performs both the entry and the approval steps of a financial process that previously required two people, with no audit trail of its actions — automation silently collapsed a segregation-of-duties control and broke SoX compliance. A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "rpa-02-q9",
          "type": "Deliverable",
          "challenge": "The opinion",
          "text": "How does the coverage report decide its overall opinion?",
          "options": [
            "It returns PASS by default unless the system owner formally disputes the underlying evidence in writing",
            "It assigns the opinion at random on each run, to avoid any bias in how the findings are presented",
            "It reports only the total count of in-scope assets and deliberately never renders an overall opinion",
            "It escalates PASS → EXCEPTIONS → MATERIAL GAP as the count and severity of the in-scope gaps increase"
          ],
          "correctIndex": 3,
          "explanation": "The opinion is a deterministic function of how many in-scope items fail the test and how severely."
        },
        {
          "id": "rpa-02-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Legal and regulatory compliance\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind legal and regulatory compliance, so there is no overlap",
            "The control applies only to public, non-sensitive data, so any gap in it carries no real regulatory exposure",
            "The control protects regulated or sensitive data, or the systems that process it, so a gap here carries compliance and privacy exposure",
            "Technical controls and privacy obligations are governed entirely separately, so this control sits outside privacy scope"
          ],
          "correctIndex": 2,
          "explanation": "Security and privacy ride on the same technical controls — a gap here is frequently a compliance and privacy gap as well."
        }
      ]
    }
  },
  {
    "epochId": "rpa-governance",
    "id": "rpa-03",
    "order": 3,
    "title": "Dev, test, deploy cycle",
    "subtitle": "Agentic technical & privacy audit of the dev, test, deploy cycle control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 7,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Dev, test, deploy cycle\" control for Robotic Process Automation (RPA) Governance is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify bots follow a controlled dev/test/deploy cycle. PASS: an RPA SDLC (process-definition, design, dev standards, non-prod testing, controlled promotion) is followed, bots are tested incl. exception handling + validated, environments are separated, and the business owner signs off before production. Exceptions: bots built + tested directly in production, no exception/error-handling testing (bots fail unpredictably), no environment separation, and no business sign-off before go-live.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Robotic Process Automation (RPA) Governance systems of record (RPA SDLC / PDD records; Bot test environment; Dev/test/prod separation) as tools — e.g. `RPA SDLC (process-definition document, design, dev standards, non-prod`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The RPA SDLC (requirements/process-definition document, bot design, development standards, testing in a non-prod environment, controlled promotion to prod)",
        "Bot testing evidence (functional testing, exception/error handling tested, the bot validated against the process before production)",
        "Environment separation (dev/test/prod for bots; bots not built + tested in production)",
        "Sign-off/UAT by the business process owner before a bot goes live"
      ],
      "system": [
        "RPA SDLC / PDD records",
        "Bot test environment",
        "Dev/test/prod separation",
        "UAT / sign-off"
      ],
      "dataOwner": [
        "RPA developers + CoE",
        "Business process owners (UAT)",
        "QA"
      ],
      "scoring": {
        "ease": "EASE 7/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Robotic Process Automation (RPA) Governance controls."
      }
    },
    "badge": {
      "id": "rpa-03-badge",
      "name": "Robotic Process Automation (RPA) Governance Auditor",
      "emoji": "⚙️"
    },
    "wonder": {
      "name": "Dev, test, deploy cycle",
      "location": "Robotic Process Automation (RPA) Governance",
      "era": "Present Day",
      "emoji": "⚙️"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Dev, test, deploy cycle\" as a repeatable agentic workflow: pull the real evidence (The RPA SDLC (requirements/process-definition document, bot design, development standards, testing in a non-prod environment, controlled promotion to prod)) with read-only agents, run the test against policy, and issue a defensible opinion on the Robotic Process Automation (RPA) Governance control.",
      "year": 2025,
      "overview": [
        "The \"Dev, test, deploy cycle\" sub-process is one of the controls an auditor must verify for Robotic Process Automation (RPA) Governance. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the RPA SDLC (requirements/process-definition document, bot design, development standards, testing in a non-prod environment, controlled promotion to prod), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here RPA SDLC / PDD records, Bot test environment, Dev/test/prod separation — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `RPA SDLC (process-definition document, design, dev standards, non-prod testing, ` — read-only, against the systems of record.",
        "The test itself is specific. Verify bots follow a controlled dev/test/deploy cycle. PASS: an RPA SDLC (process-definition, design, dev standards, non-prod testing, controlled promotion) is followed, bots are tested incl. exception handling + validated, environments are separated, and the business owner signs off before production. Exceptions: bots built + tested directly in production, no exception/error-handling testing (bots fail unpredictably), no environment separation, and no business sign-off before go-live. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `03_dev_test_deploy_cycle_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from RPA SDLC / PDD records and Bot test environment (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 03_dev_test_deploy_cycle_mcp.py` to expose it to your agent — or `python 03_dev_test_deploy_cycle_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "The bot with standing privileged access",
        "when": "Recurring",
        "where": "RPA estates",
        "impact": "An over-privileged, unmonitored bot with stored credentials becomes a powerful, unattended attack path or a compliance blind spot.",
        "body": [
          "Bots act as users at machine speed, often with broad standing access and stored credentials — and frequently outside change control and logging.",
          "Auditors verify RPA governance, secure dev/test/deploy, change control, least-privilege bot access, credential handling, and bot activity logging."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Robotic Process Automation (RPA) Governance scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull RPA SDLC / PDD records · Bot test environment",
            "type": "system"
          },
          {
            "label": "Evaluate",
            "sub": "reconcile vs policy, find gaps",
            "type": "system"
          },
          {
            "label": "Findings + opinion",
            "sub": "exceptions · CAPA",
            "type": "result"
          }
        ]
      },
      "timeline": [
        {
          "year": 2022,
          "event": "Unattended bots flagged as a top emerging access-risk class",
          "highlight": true
        },
        {
          "year": 2023,
          "event": "Credential-laden automation accounts targeted for lateral movement"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Dev, test, deploy cycle\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "RPA SDLC (process-definition document, design, dev standards, non-prod testing, controlled promotion)\nbot testing (functional + exception/error handling + validated vs the process)\nenvironment separation (dev/test/prod; not built/tested in prod)\nbusiness process-owner sign-off/UAT before go-live"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The RPA SDLC (requirements/process-definition document, bot design, development standards, testing in a non-prod environment, controlled promotion to prod).",
        "The test: Verify bots follow a controlled dev/test/deploy cycle.",
        "Reconcile the systems of record (RPA SDLC / PDD records, Bot test environment, Dev/test/prod separation) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. Bots are developed and tested directly in production with no process-definition document, no exception-handling testing, and no business sign-off — so when an upstream screen changed, the bot silently processed thousands of transactions incorrectly."
      ],
      "references": [
        {
          "title": "ISACA — Auditing RPA",
          "url": "https://www.isaca.org/"
        },
        {
          "title": "ISO/IEC/IEEE 29119",
          "url": "https://www.iso.org/standard/81291.html"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "03_dev_test_deploy_cycle_mcp.py",
          "url": "/audit-code/rpa-governance/03_dev_test_deploy_cycle_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Robotic Process Automation (RPA) Governance evidence for \"Dev, test, deploy cycle\" (the rpa sdlc (requirements/process-definition document, bot design, development standards, testing in a non-prod environment, controlled promotion to prod)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Dev, test, deploy cycle\" control for Robotic Process Automation (RPA) Governance at AcmeCorp. THE TEST: Verify bots follow a controlled dev/test/deploy cycle. PASS: an RPA SDLC (process-definition, design, dev standards, non-prod testing, controlled promotion) is followed, bots are tested incl. exception handling + validated, environments are separated, and the business owner signs off before production. Exceptions: bots built + tested directly in production, no exception/error-handling testing (bots fail unpredictably), no environment separation, and no business sign-off before go-live. The evidence — The RPA SDLC (requirements/process-definition document, bot design, development standards, testing in a non-prod environment, controlled promotion to prod) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live RPA SDLC / PDD records APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. RPA SDLC / PDD records gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from RPA SDLC / PDD records; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Robotic Process Automation (RPA) Governance: \"Dev, test, deploy cycle\" Audit Evidence\n\nThe test:\nVerify bots follow a controlled dev/test/deploy cycle. PASS: an RPA SDLC (process-definition, design, dev standards, non-prod testing, controlled promotion) is followed, bots are tested incl. exception handling + validated, environments are separated, and the business owner signs off before production. Exceptions: bots built + tested directly in production, no exception/error-handling testing (bots fail unpredictably), no environment separation, and no business sign-off before go-live.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- rpa-governance_inventory.json   (in-scope items — The RPA SDLC (requirements/process-definition document, bot design, development standards, testing in a non-prod environment, controlled promotion to prod))\n- rpa-governance_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Dev, test, deploy cycle\",\n  \"domain\": \"Robotic Process Automation (RPA) Governance\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{rpa_",
        "/evidence/rpa-governance_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Automation CoE\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Dev, test, deploy cycle\" control must cover\n# fragment: dev_test_deploy_",
        "/evidence/rpa-governance_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
        "/evidence/coverage_report.json": "{\n  \"in_scope\": 4,\n  \"compliant\": 2,\n  \"exceptions\": [\"item-002\",\"item-003\"],\n  \"opinion\": \"MATERIAL GAP\"\n}\n# fragment: material_gap}"
      },
      "dirs": {
        "/": [
          {
            "name": "evidence",
            "isDir": true
          }
        ],
        "/evidence": [
          {
            "name": "README.md",
            "isDir": false
          },
          {
            "name": "policy.json",
            "isDir": false
          },
          {
            "name": "rpa-governance_inventory.json",
            "isDir": false
          },
          {
            "name": "rpa-governance_state.json",
            "isDir": false
          },
          {
            "name": "coverage_report.json",
            "isDir": false
          }
        ]
      },
      "fragments": [
        {
          "trigger": "/evidence/policy.json",
          "value": "FLAG{rpa_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/rpa-governance_inventory.json",
          "value": "dev_test_deploy_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/rpa-governance_state.json",
          "value": "gap_",
          "label": "State — the items that fail the control"
        },
        {
          "trigger": "/evidence/coverage_report.json",
          "value": "material_gap}",
          "label": "Coverage report — the audit opinion"
        }
      ]
    },
    "quiz": {
      "questions": [
        {
          "id": "rpa-03-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Dev, test, deploy cycle\" sub-process of Robotic Process Automation (RPA) Governance?",
          "options": [
            "Deploy and operate the dev, test, deploy cycle control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the dev, test, deploy cycle control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for dev, test, deploy cycle against comparable organisations in the sector",
            "Obtain evidence that the dev, test, deploy cycle control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "rpa-03-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Dev, test, deploy cycle\" matter to the broader Robotic Process Automation (RPA) Governance posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Robotic Process Automation (RPA) Governance",
            "It stops mattering once a firewall and endpoint agent are deployed across the Robotic Process Automation (RPA) Governance estate",
            "It is a control other Robotic Process Automation (RPA) Governance controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Robotic Process Automation (RPA) Governance controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "rpa-03-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Dev, test, deploy cycle\" control?",
          "options": [
            "A point-in-time screenshot of one system's dev, test, deploy cycle settings, captured during the walkthrough",
            "The The RPA SDLC (requirements/process-definition document, bot design, development standards, testing in a non-prod environment, controlled promotion to prod), reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the dev, test, deploy cycle control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's dev, test, deploy cycle capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "rpa-03-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Dev, test, deploy cycle\"?",
          "options": [
            "From RPA SDLC / PDD records and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how dev, test, deploy cycle works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. RPA SDLC / PDD records) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "rpa-03-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Dev, test, deploy cycle\"?",
          "options": [
            "The external audit firm, since it is the party examining the dev, test, deploy cycle control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the dev, test, deploy cycle data is shared, so the accountability sits with no one in particular",
            "RPA developers + CoE, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "RPA developers + CoE owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "rpa-03-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Dev, test, deploy cycle\", which part stays with the human auditor?",
          "options": [
            "Re-keying each system's export into a spreadsheet by hand before the agent is allowed to read it",
            "Nothing of substance — the agent decides materiality and the human simply approves whatever it outputs",
            "Setting the policy and thresholds, reviewing the findings, and signing the opinion — the agent only gathers and correlates the evidence",
            "Issuing the final audit opinion automatically as soon as the agent's evidence-gathering run completes"
          ],
          "correctIndex": 2,
          "explanation": "Agents gather and correlate evidence at machine speed; the human owns the policy, the judgement, and the signed opinion."
        },
        {
          "id": "rpa-03-q7",
          "type": "Tooling",
          "challenge": "Read-only",
          "text": "Why must the MCP server for this module be strictly read-only?",
          "options": [
            "The MCP protocol is technically incapable of performing any write operation against a target system",
            "Audit tooling must never alter the audited environment, so read-only guarantees that running it cannot change any state",
            "Read-only is simply the only access level the source-system owners were willing to grant the audit team",
            "Write access would slow the evidence collection down, so read-only is chosen mainly for better performance"
          ],
          "correctIndex": 1,
          "explanation": "Non-interference is a hard requirement for audit evidence-gathering tools — not a permissions accident, a speed choice, or a protocol limitation."
        },
        {
          "id": "rpa-03-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Dev, test, deploy cycle\", which of these is a realistic reportable finding?",
          "options": [
            "Bots are developed and tested directly in production with no process-definition document, no exception-handling testing, and no business sign-off — so when an upstream screen changed, the bot silently processed thousands of transactions incorrectly.",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. Bots are developed and tested directly in production with no process-definition document, no exception-handling testing, and no business sign-off — so when an upstream screen changed, the bot silently processed thousands of transactions incorrectly. A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "rpa-03-q9",
          "type": "Deliverable",
          "challenge": "The opinion",
          "text": "How does the coverage report decide its overall opinion?",
          "options": [
            "It returns PASS by default unless the system owner formally disputes the underlying evidence in writing",
            "It assigns the opinion at random on each run, to avoid any bias in how the findings are presented",
            "It reports only the total count of in-scope assets and deliberately never renders an overall opinion",
            "It escalates PASS → EXCEPTIONS → MATERIAL GAP as the count and severity of the in-scope gaps increase"
          ],
          "correctIndex": 3,
          "explanation": "The opinion is a deterministic function of how many in-scope items fail the test and how severely."
        },
        {
          "id": "rpa-03-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Dev, test, deploy cycle\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind dev, test, deploy cycle, so there is no overlap",
            "The control applies only to public, non-sensitive data, so any gap in it carries no real regulatory exposure",
            "The control protects regulated or sensitive data, or the systems that process it, so a gap here carries compliance and privacy exposure",
            "Technical controls and privacy obligations are governed entirely separately, so this control sits outside privacy scope"
          ],
          "correctIndex": 2,
          "explanation": "Security and privacy ride on the same technical controls — a gap here is frequently a compliance and privacy gap as well."
        }
      ]
    }
  },
  {
    "epochId": "rpa-governance",
    "id": "rpa-04",
    "order": 4,
    "title": "Change mgmt and version control",
    "subtitle": "Agentic technical & privacy audit of the change mgmt and version control control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 5,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Change mgmt and version control\" control for Robotic Process Automation (RPA) Governance is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify bot changes are controlled + versioned. PASS: bot changes follow approval + testing, bot code/config is version-controlled with rollback, application/UI changes trigger bot impact review + retest, and emergency changes + rollback are handled. Exceptions: bot logic changed directly in production with no approval/testing, no version control (can't roll back a bad bot), application changes breaking bots with no impact process, and no rollback capability.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Robotic Process Automation (RPA) Governance systems of record (Change management (bots); Version control (bot code/config); App-change → bot-impact link) as tools — e.g. `change management for bots (approval + testing; assess impact of app/U`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "Change management for bots (changes to bot logic go through approval + testing; the impact of UI/application changes on bots is assessed)",
        "Version control of bot code/configuration (bots in source control; versioned; able to roll back)",
        "The link between application changes + bot impact (when the systems a bot drives change, the bot is reviewed/retested — bots are brittle to UI change)",
        "Emergency-change + rollback handling for bots"
      ],
      "system": [
        "Change management (bots)",
        "Version control (bot code/config)",
        "App-change → bot-impact link",
        "Rollback capability"
      ],
      "dataOwner": [
        "RPA CoE + change management",
        "Bot developers",
        "Application owners"
      ],
      "scoring": {
        "ease": "EASE 5/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Robotic Process Automation (RPA) Governance controls."
      }
    },
    "badge": {
      "id": "rpa-04-badge",
      "name": "Robotic Process Automation (RPA) Governance Auditor",
      "emoji": "⚙️"
    },
    "wonder": {
      "name": "Change mgmt and version control",
      "location": "Robotic Process Automation (RPA) Governance",
      "era": "Present Day",
      "emoji": "⚙️"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Change mgmt and version control\" as a repeatable agentic workflow: pull the real evidence (Change management for bots (changes to bot logic go through approval + testing; the impact of UI/application changes on bots is assessed)) with read-only agents, run the test against policy, and issue a defensible opinion on the Robotic Process Automation (RPA) Governance control.",
      "year": 2025,
      "overview": [
        "The \"Change mgmt and version control\" sub-process is one of the controls an auditor must verify for Robotic Process Automation (RPA) Governance. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me change management for bots (changes to bot logic go through approval + testing; the impact of UI/application changes on bots is assessed), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Change management (bots), Version control (bot code/config), App-change → bot-impact link — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `change management for bots (approval + testing; assess impact of app/UI changes ` — read-only, against the systems of record.",
        "The test itself is specific. Verify bot changes are controlled + versioned. PASS: bot changes follow approval + testing, bot code/config is version-controlled with rollback, application/UI changes trigger bot impact review + retest, and emergency changes + rollback are handled. Exceptions: bot logic changed directly in production with no approval/testing, no version control (can't roll back a bad bot), application changes breaking bots with no impact process, and no rollback capability. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `04_change_mgmt_and_version_control_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Change management (bots) and Version control (bot code/config) (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 04_change_mgmt_and_version_control_mcp.py` to expose it to your agent — or `python 04_change_mgmt_and_version_control_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "The bot with standing privileged access",
        "when": "Recurring",
        "where": "RPA estates",
        "impact": "An over-privileged, unmonitored bot with stored credentials becomes a powerful, unattended attack path or a compliance blind spot.",
        "body": [
          "Bots act as users at machine speed, often with broad standing access and stored credentials — and frequently outside change control and logging.",
          "Auditors verify RPA governance, secure dev/test/deploy, change control, least-privilege bot access, credential handling, and bot activity logging."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Robotic Process Automation (RPA) Governance scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull Change management (bots) · Version control (bot code/config)",
            "type": "system"
          },
          {
            "label": "Evaluate",
            "sub": "reconcile vs policy, find gaps",
            "type": "system"
          },
          {
            "label": "Findings + opinion",
            "sub": "exceptions · CAPA",
            "type": "result"
          }
        ]
      },
      "timeline": [
        {
          "year": 2022,
          "event": "Unattended bots flagged as a top emerging access-risk class",
          "highlight": true
        },
        {
          "year": 2023,
          "event": "Credential-laden automation accounts targeted for lateral movement"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Change mgmt and version control\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "change management for bots (approval + testing; assess impact of app/UI changes on bots)\nversion control of bot code/configuration (versioned, rollback)\nlink app changes → bot impact (bots retested when driven systems change)\nemergency-change + rollback handling for bots"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: Change management for bots (changes to bot logic go through approval + testing; the impact of UI/application changes on bots is assessed).",
        "The test: Verify bot changes are controlled + versioned.",
        "Reconcile the systems of record (Change management (bots), Version control (bot code/config), App-change → bot-impact link) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. Bot logic is edited live with no change control or version history, so there's no way to roll back a faulty change; a routine update to the application the bot drives broke it with no impact assessment, and the bad version couldn't be reverted."
      ],
      "references": [
        {
          "title": "ITIL 4 — Change Enablement",
          "url": "https://www.axelos.com/certifications/itil-service-management"
        },
        {
          "title": "NIST SP 800-128 — Config Mgmt",
          "url": "https://csrc.nist.gov/pubs/sp/800/128/final"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "04_change_mgmt_and_version_control_mcp.py",
          "url": "/audit-code/rpa-governance/04_change_mgmt_and_version_control_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Robotic Process Automation (RPA) Governance evidence for \"Change mgmt and version control\" (change management for bots (changes to bot logic go through approval + testing; the impact of ui/application changes on bots is assessed)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Change mgmt and version control\" control for Robotic Process Automation (RPA) Governance at AcmeCorp. THE TEST: Verify bot changes are controlled + versioned. PASS: bot changes follow approval + testing, bot code/config is version-controlled with rollback, application/UI changes trigger bot impact review + retest, and emergency changes + rollback are handled. Exceptions: bot logic changed directly in production with no approval/testing, no version control (can't roll back a bad bot), application changes breaking bots with no impact process, and no rollback capability. The evidence — Change management for bots (changes to bot logic go through approval + testing; the impact of UI/application changes on bots is assessed) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Change management (bots) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Change management (bots) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Change management (bots); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Robotic Process Automation (RPA) Governance: \"Change mgmt and version control\" Audit Evidence\n\nThe test:\nVerify bot changes are controlled + versioned. PASS: bot changes follow approval + testing, bot code/config is version-controlled with rollback, application/UI changes trigger bot impact review + retest, and emergency changes + rollback are handled. Exceptions: bot logic changed directly in production with no approval/testing, no version control (can't roll back a bad bot), application changes breaking bots with no impact process, and no rollback capability.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- rpa-governance_inventory.json   (in-scope items — Change management for bots (changes to bot logic go through approval + testing; the impact of UI/application changes on bots is assessed))\n- rpa-governance_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Change mgmt and version control\",\n  \"domain\": \"Robotic Process Automation (RPA) Governance\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{rpa_",
        "/evidence/rpa-governance_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Automation CoE\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Change mgmt and version control\" control must cover\n# fragment: change_mgmt_version_",
        "/evidence/rpa-governance_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
        "/evidence/coverage_report.json": "{\n  \"in_scope\": 4,\n  \"compliant\": 2,\n  \"exceptions\": [\"item-002\",\"item-003\"],\n  \"opinion\": \"MATERIAL GAP\"\n}\n# fragment: material_gap}"
      },
      "dirs": {
        "/": [
          {
            "name": "evidence",
            "isDir": true
          }
        ],
        "/evidence": [
          {
            "name": "README.md",
            "isDir": false
          },
          {
            "name": "policy.json",
            "isDir": false
          },
          {
            "name": "rpa-governance_inventory.json",
            "isDir": false
          },
          {
            "name": "rpa-governance_state.json",
            "isDir": false
          },
          {
            "name": "coverage_report.json",
            "isDir": false
          }
        ]
      },
      "fragments": [
        {
          "trigger": "/evidence/policy.json",
          "value": "FLAG{rpa_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/rpa-governance_inventory.json",
          "value": "change_mgmt_version_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/rpa-governance_state.json",
          "value": "gap_",
          "label": "State — the items that fail the control"
        },
        {
          "trigger": "/evidence/coverage_report.json",
          "value": "material_gap}",
          "label": "Coverage report — the audit opinion"
        }
      ]
    },
    "quiz": {
      "questions": [
        {
          "id": "rpa-04-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Change mgmt and version control\" sub-process of Robotic Process Automation (RPA) Governance?",
          "options": [
            "Deploy and operate the change mgmt and version control control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the change mgmt and version control control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for change mgmt and version control against comparable organisations in the sector",
            "Obtain evidence that the change mgmt and version control control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "rpa-04-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Change mgmt and version control\" matter to the broader Robotic Process Automation (RPA) Governance posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Robotic Process Automation (RPA) Governance",
            "It stops mattering once a firewall and endpoint agent are deployed across the Robotic Process Automation (RPA) Governance estate",
            "It is a control other Robotic Process Automation (RPA) Governance controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Robotic Process Automation (RPA) Governance controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "rpa-04-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Change mgmt and version control\" control?",
          "options": [
            "A point-in-time screenshot of one system's change mgmt and version control settings, captured during the walkthrough",
            "The Change management for bots (changes to bot logic go through approval + testing; the impact of UI/application changes on bots is assessed), reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the change mgmt and version control control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's change mgmt and version control capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "rpa-04-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Change mgmt and version control\"?",
          "options": [
            "From Change management (bots) and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how change mgmt and version control works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. Change management (bots)) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "rpa-04-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Change mgmt and version control\"?",
          "options": [
            "The external audit firm, since it is the party examining the change mgmt and version control control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the change mgmt and version control data is shared, so the accountability sits with no one in particular",
            "RPA CoE + change management, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "RPA CoE + change management owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "rpa-04-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Change mgmt and version control\", which part stays with the human auditor?",
          "options": [
            "Re-keying each system's export into a spreadsheet by hand before the agent is allowed to read it",
            "Nothing of substance — the agent decides materiality and the human simply approves whatever it outputs",
            "Setting the policy and thresholds, reviewing the findings, and signing the opinion — the agent only gathers and correlates the evidence",
            "Issuing the final audit opinion automatically as soon as the agent's evidence-gathering run completes"
          ],
          "correctIndex": 2,
          "explanation": "Agents gather and correlate evidence at machine speed; the human owns the policy, the judgement, and the signed opinion."
        },
        {
          "id": "rpa-04-q7",
          "type": "Tooling",
          "challenge": "Read-only",
          "text": "Why must the MCP server for this module be strictly read-only?",
          "options": [
            "The MCP protocol is technically incapable of performing any write operation against a target system",
            "Audit tooling must never alter the audited environment, so read-only guarantees that running it cannot change any state",
            "Read-only is simply the only access level the source-system owners were willing to grant the audit team",
            "Write access would slow the evidence collection down, so read-only is chosen mainly for better performance"
          ],
          "correctIndex": 1,
          "explanation": "Non-interference is a hard requirement for audit evidence-gathering tools — not a permissions accident, a speed choice, or a protocol limitation."
        },
        {
          "id": "rpa-04-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Change mgmt and version control\", which of these is a realistic reportable finding?",
          "options": [
            "Bot logic is edited live with no change control or version history, so there's no way to roll back a faulty change; a routine update to the application the bot drives broke it with no impact assessment, and the bad version couldn't be reverted.",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. Bot logic is edited live with no change control or version history, so there's no way to roll back a faulty change; a routine update to the application the bot drives broke it with no impact assessment, and the bad version couldn't be reverted. A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "rpa-04-q9",
          "type": "Deliverable",
          "challenge": "The opinion",
          "text": "How does the coverage report decide its overall opinion?",
          "options": [
            "It returns PASS by default unless the system owner formally disputes the underlying evidence in writing",
            "It assigns the opinion at random on each run, to avoid any bias in how the findings are presented",
            "It reports only the total count of in-scope assets and deliberately never renders an overall opinion",
            "It escalates PASS → EXCEPTIONS → MATERIAL GAP as the count and severity of the in-scope gaps increase"
          ],
          "correctIndex": 3,
          "explanation": "The opinion is a deterministic function of how many in-scope items fail the test and how severely."
        },
        {
          "id": "rpa-04-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Change mgmt and version control\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind change mgmt and version control, so there is no overlap",
            "The control applies only to public, non-sensitive data, so any gap in it carries no real regulatory exposure",
            "The control protects regulated or sensitive data, or the systems that process it, so a gap here carries compliance and privacy exposure",
            "Technical controls and privacy obligations are governed entirely separately, so this control sits outside privacy scope"
          ],
          "correctIndex": 2,
          "explanation": "Security and privacy ride on the same technical controls — a gap here is frequently a compliance and privacy gap as well."
        }
      ]
    }
  },
  {
    "epochId": "rpa-governance",
    "id": "rpa-05",
    "order": 5,
    "title": "Access management",
    "subtitle": "Agentic technical & privacy audit of the access management control",
    "category": "cybersecurity",
    "xp": 180,
    "easeScore": 6,
    "valueScore": 9,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Access management\" control for Robotic Process Automation (RPA) Governance is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify RPA access is controlled. PASS: each bot has its own identity (not a shared human login) with credentials vaulted (not in the script), bot accounts are least-privilege, attended/unattended access + human accountability are controlled, and bot accounts are access-reviewed + deprovisioned. Exceptions: bots running on shared/human credentials, credentials hardcoded in the bot, over-privileged bot accounts, and bot identities never reviewed (orphaned bot accounts with standing access).",
      "approach": "An audit agent calls a read-only MCP server that wraps the Robotic Process Automation (RPA) Governance systems of record (Bot identity / service accounts; Credential vault (CyberArk / Orchestrator vault); Least-privilege bot access) as tools — e.g. `bot identity + credential management (own service identity; credential`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "Bot identity + credential management (each bot has its own named/service identity — not a shared human account; credentials in a vault, not in the bot script)",
        "Least privilege for bot accounts (bots have only the access their process needs; not over-privileged admin)",
        "Attended-vs-unattended bot access controls + the human-bot accountability (whose authority the bot acts under; session control)",
        "Access review of bot accounts (bot identities reviewed like privileged accounts; deprovisioned when retired)"
      ],
      "system": [
        "Bot identity / service accounts",
        "Credential vault (CyberArk / Orchestrator vault)",
        "Least-privilege bot access",
        "Bot-account access review"
      ],
      "dataOwner": [
        "RPA CoE + IAM",
        "Security (privileged access)",
        "Bot owners"
      ],
      "scoring": {
        "ease": "EASE 6/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 9/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Robotic Process Automation (RPA) Governance controls."
      }
    },
    "badge": {
      "id": "rpa-05-badge",
      "name": "Robotic Process Automation (RPA) Governance Auditor",
      "emoji": "⚙️"
    },
    "wonder": {
      "name": "Access management",
      "location": "Robotic Process Automation (RPA) Governance",
      "era": "Present Day",
      "emoji": "⚙️"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Access management\" as a repeatable agentic workflow: pull the real evidence (Bot identity + credential management (each bot has its own named/service identity — not a shared human account; credentials in a vault, not in the bot script)) with read-only agents, run the test against policy, and issue a defensible opinion on the Robotic Process Automation (RPA) Governance control.",
      "year": 2025,
      "overview": [
        "The \"Access management\" sub-process is one of the controls an auditor must verify for Robotic Process Automation (RPA) Governance. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me bot identity + credential management (each bot has its own named/service identity — not a shared human account; credentials in a vault, not in the bot script), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Bot identity / service accounts, Credential vault (CyberArk / Orchestrator vault), Least-privilege bot access — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `bot identity + credential management (own service identity; credentials vaulted,` — read-only, against the systems of record.",
        "The test itself is specific. Verify RPA access is controlled. PASS: each bot has its own identity (not a shared human login) with credentials vaulted (not in the script), bot accounts are least-privilege, attended/unattended access + human accountability are controlled, and bot accounts are access-reviewed + deprovisioned. Exceptions: bots running on shared/human credentials, credentials hardcoded in the bot, over-privileged bot accounts, and bot identities never reviewed (orphaned bot accounts with standing access). The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `05_access_management_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Bot identity / service accounts and Credential vault (CyberArk / Orchestrator vault) (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 05_access_management_mcp.py` to expose it to your agent — or `python 05_access_management_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "The bot with standing privileged access",
        "when": "Recurring",
        "where": "RPA estates",
        "impact": "An over-privileged, unmonitored bot with stored credentials becomes a powerful, unattended attack path or a compliance blind spot.",
        "body": [
          "Bots act as users at machine speed, often with broad standing access and stored credentials — and frequently outside change control and logging.",
          "Auditors verify RPA governance, secure dev/test/deploy, change control, least-privilege bot access, credential handling, and bot activity logging."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Robotic Process Automation (RPA) Governance scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull Bot identity / service accounts · Credential vault (CyberArk / Orchestrator vault)",
            "type": "system"
          },
          {
            "label": "Evaluate",
            "sub": "reconcile vs policy, find gaps",
            "type": "system"
          },
          {
            "label": "Findings + opinion",
            "sub": "exceptions · CAPA",
            "type": "result"
          }
        ]
      },
      "timeline": [
        {
          "year": 2022,
          "event": "Unattended bots flagged as a top emerging access-risk class",
          "highlight": true
        },
        {
          "year": 2023,
          "event": "Credential-laden automation accounts targeted for lateral movement"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Access management\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "bot identity + credential management (own service identity; credentials vaulted, not in the script)\nleast privilege for bot accounts (only what the process needs)\nattended-vs-unattended access controls + human-bot accountability\naccess review of bot accounts (reviewed + deprovisioned like privileged accounts)"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: Bot identity + credential management (each bot has its own named/service identity — not a shared human account; credentials in a vault, not in the bot script).",
        "The test: Verify RPA access is controlled.",
        "Reconcile the systems of record (Bot identity / service accounts, Credential vault (CyberArk / Orchestrator vault), Least-privilege bot access) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. Bots run under a shared human employee's login with the password hardcoded in the bot script, and the account has broad admin rights far beyond the process — so bot activity is indistinguishable from the human's and impossible to hold accountable."
      ],
      "references": [
        {
          "title": "ISACA — Auditing RPA",
          "url": "https://www.isaca.org/"
        },
        {
          "title": "NIST SP 800-53 AC",
          "url": "https://csrc.nist.gov/projects/risk-management/sp800-53-controls"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "05_access_management_mcp.py",
          "url": "/audit-code/rpa-governance/05_access_management_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Robotic Process Automation (RPA) Governance evidence for \"Access management\" (bot identity + credential management (each bot has its own named/service identity — not a shared human account; credentials in a vault, not in the bot script)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Access management\" control for Robotic Process Automation (RPA) Governance at AcmeCorp. THE TEST: Verify RPA access is controlled. PASS: each bot has its own identity (not a shared human login) with credentials vaulted (not in the script), bot accounts are least-privilege, attended/unattended access + human accountability are controlled, and bot accounts are access-reviewed + deprovisioned. Exceptions: bots running on shared/human credentials, credentials hardcoded in the bot, over-privileged bot accounts, and bot identities never reviewed (orphaned bot accounts with standing access). The evidence — Bot identity + credential management (each bot has its own named/service identity — not a shared human account; credentials in a vault, not in the bot script) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Bot identity / service accounts APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Bot identity / service accounts gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Bot identity / service accounts; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Robotic Process Automation (RPA) Governance: \"Access management\" Audit Evidence\n\nThe test:\nVerify RPA access is controlled. PASS: each bot has its own identity (not a shared human login) with credentials vaulted (not in the script), bot accounts are least-privilege, attended/unattended access + human accountability are controlled, and bot accounts are access-reviewed + deprovisioned. Exceptions: bots running on shared/human credentials, credentials hardcoded in the bot, over-privileged bot accounts, and bot identities never reviewed (orphaned bot accounts with standing access).\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- rpa-governance_inventory.json   (in-scope items — Bot identity + credential management (each bot has its own named/service identity — not a shared human account; credentials in a vault, not in the bot script))\n- rpa-governance_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Access management\",\n  \"domain\": \"Robotic Process Automation (RPA) Governance\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{rpa_",
        "/evidence/rpa-governance_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Automation CoE\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Access management\" control must cover\n# fragment: access_management_",
        "/evidence/rpa-governance_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
        "/evidence/coverage_report.json": "{\n  \"in_scope\": 4,\n  \"compliant\": 2,\n  \"exceptions\": [\"item-002\",\"item-003\"],\n  \"opinion\": \"EXCEPTIONS\"\n}\n# fragment: exceptions}"
      },
      "dirs": {
        "/": [
          {
            "name": "evidence",
            "isDir": true
          }
        ],
        "/evidence": [
          {
            "name": "README.md",
            "isDir": false
          },
          {
            "name": "policy.json",
            "isDir": false
          },
          {
            "name": "rpa-governance_inventory.json",
            "isDir": false
          },
          {
            "name": "rpa-governance_state.json",
            "isDir": false
          },
          {
            "name": "coverage_report.json",
            "isDir": false
          }
        ]
      },
      "fragments": [
        {
          "trigger": "/evidence/policy.json",
          "value": "FLAG{rpa_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/rpa-governance_inventory.json",
          "value": "access_management_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/rpa-governance_state.json",
          "value": "gap_",
          "label": "State — the items that fail the control"
        },
        {
          "trigger": "/evidence/coverage_report.json",
          "value": "exceptions}",
          "label": "Coverage report — the audit opinion"
        }
      ]
    },
    "quiz": {
      "questions": [
        {
          "id": "rpa-05-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Access management\" sub-process of Robotic Process Automation (RPA) Governance?",
          "options": [
            "Deploy and operate the access management control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the access management control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for access management against comparable organisations in the sector",
            "Obtain evidence that the access management control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "rpa-05-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Access management\" matter to the broader Robotic Process Automation (RPA) Governance posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Robotic Process Automation (RPA) Governance",
            "It stops mattering once a firewall and endpoint agent are deployed across the Robotic Process Automation (RPA) Governance estate",
            "It is a control other Robotic Process Automation (RPA) Governance controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Robotic Process Automation (RPA) Governance controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "rpa-05-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Access management\" control?",
          "options": [
            "A point-in-time screenshot of one system's access management settings, captured during the walkthrough",
            "The Bot identity + credential management (each bot has its own named/service identity — not a shared human account; credentials in a vault, not in the bot script), reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the access management control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's access management capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "rpa-05-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Access management\"?",
          "options": [
            "From Bot identity / service accounts and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how access management works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. Bot identity / service accounts) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "rpa-05-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Access management\"?",
          "options": [
            "The external audit firm, since it is the party examining the access management control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the access management data is shared, so the accountability sits with no one in particular",
            "RPA CoE + IAM, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "RPA CoE + IAM owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "rpa-05-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Access management\", which part stays with the human auditor?",
          "options": [
            "Re-keying each system's export into a spreadsheet by hand before the agent is allowed to read it",
            "Nothing of substance — the agent decides materiality and the human simply approves whatever it outputs",
            "Setting the policy and thresholds, reviewing the findings, and signing the opinion — the agent only gathers and correlates the evidence",
            "Issuing the final audit opinion automatically as soon as the agent's evidence-gathering run completes"
          ],
          "correctIndex": 2,
          "explanation": "Agents gather and correlate evidence at machine speed; the human owns the policy, the judgement, and the signed opinion."
        },
        {
          "id": "rpa-05-q7",
          "type": "Tooling",
          "challenge": "Read-only",
          "text": "Why must the MCP server for this module be strictly read-only?",
          "options": [
            "The MCP protocol is technically incapable of performing any write operation against a target system",
            "Audit tooling must never alter the audited environment, so read-only guarantees that running it cannot change any state",
            "Read-only is simply the only access level the source-system owners were willing to grant the audit team",
            "Write access would slow the evidence collection down, so read-only is chosen mainly for better performance"
          ],
          "correctIndex": 1,
          "explanation": "Non-interference is a hard requirement for audit evidence-gathering tools — not a permissions accident, a speed choice, or a protocol limitation."
        },
        {
          "id": "rpa-05-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Access management\", which of these is a realistic reportable finding?",
          "options": [
            "Bots run under a shared human employee's login with the password hardcoded in the bot script, and the account has broad admin rights far beyond the process — so bot activity is indistinguishable from the human's and impossible to hold accountable.",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. Bots run under a shared human employee's login with the password hardcoded in the bot script, and the account has broad admin rights far beyond the process — so bot activity is indistinguishable from the human's and impossible to hold accountable. A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "rpa-05-q9",
          "type": "Deliverable",
          "challenge": "The opinion",
          "text": "How does the coverage report decide its overall opinion?",
          "options": [
            "It returns PASS by default unless the system owner formally disputes the underlying evidence in writing",
            "It assigns the opinion at random on each run, to avoid any bias in how the findings are presented",
            "It reports only the total count of in-scope assets and deliberately never renders an overall opinion",
            "It escalates PASS → EXCEPTIONS → MATERIAL GAP as the count and severity of the in-scope gaps increase"
          ],
          "correctIndex": 3,
          "explanation": "The opinion is a deterministic function of how many in-scope items fail the test and how severely."
        },
        {
          "id": "rpa-05-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Access management\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind access management, so there is no overlap",
            "The control applies only to public, non-sensitive data, so any gap in it carries no real regulatory exposure",
            "The control protects regulated or sensitive data, or the systems that process it, so a gap here carries compliance and privacy exposure",
            "Technical controls and privacy obligations are governed entirely separately, so this control sits outside privacy scope"
          ],
          "correctIndex": 2,
          "explanation": "Security and privacy ride on the same technical controls — a gap here is frequently a compliance and privacy gap as well."
        }
      ]
    }
  },
  {
    "epochId": "rpa-governance",
    "id": "rpa-06",
    "order": 6,
    "title": "Data handling and encryption",
    "subtitle": "Agentic technical & privacy audit of the data handling and encryption control",
    "category": "cybersecurity",
    "xp": 180,
    "easeScore": 7,
    "valueScore": 9,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Data handling and encryption\" control for Robotic Process Automation (RPA) Governance is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify RPA handles data securely. PASS: sensitive data the bot processes is encrypted in transit + at rest, the bot's logs/screenshots/temp files don't capture credentials or PII in clear, data flows stay within authorised systems, and secrets aren't stored plaintext in bot files. Exceptions: bots writing PII/credentials to logs or screenshots in clear, unencrypted sensitive data in bot working/output files, uncontrolled data flows (a bot emailing data out), and plaintext secrets in bot processes.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Robotic Process Automation (RPA) Governance systems of record (Bot data encryption; Bot logging / screenshot hygiene; Data-flow controls / DLP) as tools — e.g. `bot data handling (sensitive data encrypted in transit + at rest; not `, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "How bots handle data (sensitive data the bot reads/writes/transfers — encrypted in transit + at rest; no sensitive data written to logs/screenshots/temp files)",
        "Bot logging hygiene (the bot's logs/screenshots don't capture credentials or PII in clear)",
        "Data-flow control (where the bot moves data — within authorised systems; no exfiltration path; output files secured)",
        "Encryption + secrets handling within bot processes (no plaintext secrets/data in the bot's working files)"
      ],
      "system": [
        "Bot data encryption",
        "Bot logging / screenshot hygiene",
        "Data-flow controls / DLP",
        "Secrets handling (bot)"
      ],
      "dataOwner": [
        "RPA CoE + Security",
        "Data protection / Privacy",
        "Bot owners"
      ],
      "scoring": {
        "ease": "EASE 7/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 9/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Robotic Process Automation (RPA) Governance controls."
      }
    },
    "badge": {
      "id": "rpa-06-badge",
      "name": "Robotic Process Automation (RPA) Governance Auditor",
      "emoji": "⚙️"
    },
    "wonder": {
      "name": "Data handling and encryption",
      "location": "Robotic Process Automation (RPA) Governance",
      "era": "Present Day",
      "emoji": "⚙️"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Data handling and encryption\" as a repeatable agentic workflow: pull the real evidence (How bots handle data (sensitive data the bot reads/writes/transfers — encrypted in transit + at rest; no sensitive data written to logs/screenshots/temp files)) with read-only agents, run the test against policy, and issue a defensible opinion on the Robotic Process Automation (RPA) Governance control.",
      "year": 2025,
      "overview": [
        "The \"Data handling and encryption\" sub-process is one of the controls an auditor must verify for Robotic Process Automation (RPA) Governance. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me how bots handle data (sensitive data the bot reads/writes/transfers — encrypted in transit + at rest; no sensitive data written to logs/screenshots/temp files), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Bot data encryption, Bot logging / screenshot hygiene, Data-flow controls / DLP — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `bot data handling (sensitive data encrypted in transit + at rest; not in logs/sc` — read-only, against the systems of record.",
        "The test itself is specific. Verify RPA handles data securely. PASS: sensitive data the bot processes is encrypted in transit + at rest, the bot's logs/screenshots/temp files don't capture credentials or PII in clear, data flows stay within authorised systems, and secrets aren't stored plaintext in bot files. Exceptions: bots writing PII/credentials to logs or screenshots in clear, unencrypted sensitive data in bot working/output files, uncontrolled data flows (a bot emailing data out), and plaintext secrets in bot processes. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `06_data_handling_and_encryption_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Bot data encryption and Bot logging / screenshot hygiene (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 06_data_handling_and_encryption_mcp.py` to expose it to your agent — or `python 06_data_handling_and_encryption_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "The bot with standing privileged access",
        "when": "Recurring",
        "where": "RPA estates",
        "impact": "An over-privileged, unmonitored bot with stored credentials becomes a powerful, unattended attack path or a compliance blind spot.",
        "body": [
          "Bots act as users at machine speed, often with broad standing access and stored credentials — and frequently outside change control and logging.",
          "Auditors verify RPA governance, secure dev/test/deploy, change control, least-privilege bot access, credential handling, and bot activity logging."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Robotic Process Automation (RPA) Governance scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull Bot data encryption · Bot logging / screenshot hygiene",
            "type": "system"
          },
          {
            "label": "Evaluate",
            "sub": "reconcile vs policy, find gaps",
            "type": "system"
          },
          {
            "label": "Findings + opinion",
            "sub": "exceptions · CAPA",
            "type": "result"
          }
        ]
      },
      "timeline": [
        {
          "year": 2022,
          "event": "Unattended bots flagged as a top emerging access-risk class",
          "highlight": true
        },
        {
          "year": 2023,
          "event": "Credential-laden automation accounts targeted for lateral movement"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Data handling and encryption\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "bot data handling (sensitive data encrypted in transit + at rest; not in logs/screenshots/temp)\nbot logging hygiene (no credentials/PII captured in clear)\ndata-flow control (data stays in authorised systems; output secured; no exfiltration)\nencryption + secrets handling within bot processes"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: How bots handle data (sensitive data the bot reads/writes/transfers — encrypted in transit + at rest; no sensitive data written to logs/screenshots/temp files).",
        "The test: Verify RPA handles data securely.",
        "Reconcile the systems of record (Bot data encryption, Bot logging / screenshot hygiene, Data-flow controls / DLP) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. Bots write full screenshots including customer PII and on-screen passwords to an unsecured shared log folder, and one bot emails extracted data to an external address as part of its process — sensitive data is unencrypted and leaking through the automation."
      ],
      "references": [
        {
          "title": "ISACA — Auditing RPA",
          "url": "https://www.isaca.org/"
        },
        {
          "title": "GDPR",
          "url": "https://gdpr-info.eu/"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "06_data_handling_and_encryption_mcp.py",
          "url": "/audit-code/rpa-governance/06_data_handling_and_encryption_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Robotic Process Automation (RPA) Governance evidence for \"Data handling and encryption\" (how bots handle data (sensitive data the bot reads/writes/transfers — encrypted in transit + at rest; no sensitive data written to logs/screenshots/temp files)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Data handling and encryption\" control for Robotic Process Automation (RPA) Governance at AcmeCorp. THE TEST: Verify RPA handles data securely. PASS: sensitive data the bot processes is encrypted in transit + at rest, the bot's logs/screenshots/temp files don't capture credentials or PII in clear, data flows stay within authorised systems, and secrets aren't stored plaintext in bot files. Exceptions: bots writing PII/credentials to logs or screenshots in clear, unencrypted sensitive data in bot working/output files, uncontrolled data flows (a bot emailing data out), and plaintext secrets in bot processes. The evidence — How bots handle data (sensitive data the bot reads/writes/transfers — encrypted in transit + at rest; no sensitive data written to logs/screenshots/temp files) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Bot data encryption APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Bot data encryption gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Bot data encryption; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Robotic Process Automation (RPA) Governance: \"Data handling and encryption\" Audit Evidence\n\nThe test:\nVerify RPA handles data securely. PASS: sensitive data the bot processes is encrypted in transit + at rest, the bot's logs/screenshots/temp files don't capture credentials or PII in clear, data flows stay within authorised systems, and secrets aren't stored plaintext in bot files. Exceptions: bots writing PII/credentials to logs or screenshots in clear, unencrypted sensitive data in bot working/output files, uncontrolled data flows (a bot emailing data out), and plaintext secrets in bot processes.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- rpa-governance_inventory.json   (in-scope items — How bots handle data (sensitive data the bot reads/writes/transfers — encrypted in transit + at rest; no sensitive data written to logs/screenshots/temp files))\n- rpa-governance_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Data handling and encryption\",\n  \"domain\": \"Robotic Process Automation (RPA) Governance\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{rpa_",
        "/evidence/rpa-governance_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Automation CoE\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Data handling and encryption\" control must cover\n# fragment: data_handling_encryption_",
        "/evidence/rpa-governance_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
        "/evidence/coverage_report.json": "{\n  \"in_scope\": 4,\n  \"compliant\": 2,\n  \"exceptions\": [\"item-002\",\"item-003\"],\n  \"opinion\": \"MATERIAL GAP\"\n}\n# fragment: material_gap}"
      },
      "dirs": {
        "/": [
          {
            "name": "evidence",
            "isDir": true
          }
        ],
        "/evidence": [
          {
            "name": "README.md",
            "isDir": false
          },
          {
            "name": "policy.json",
            "isDir": false
          },
          {
            "name": "rpa-governance_inventory.json",
            "isDir": false
          },
          {
            "name": "rpa-governance_state.json",
            "isDir": false
          },
          {
            "name": "coverage_report.json",
            "isDir": false
          }
        ]
      },
      "fragments": [
        {
          "trigger": "/evidence/policy.json",
          "value": "FLAG{rpa_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/rpa-governance_inventory.json",
          "value": "data_handling_encryption_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/rpa-governance_state.json",
          "value": "gap_",
          "label": "State — the items that fail the control"
        },
        {
          "trigger": "/evidence/coverage_report.json",
          "value": "material_gap}",
          "label": "Coverage report — the audit opinion"
        }
      ]
    },
    "quiz": {
      "questions": [
        {
          "id": "rpa-06-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Data handling and encryption\" sub-process of Robotic Process Automation (RPA) Governance?",
          "options": [
            "Deploy and operate the data handling and encryption control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the data handling and encryption control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for data handling and encryption against comparable organisations in the sector",
            "Obtain evidence that the data handling and encryption control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "rpa-06-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Data handling and encryption\" matter to the broader Robotic Process Automation (RPA) Governance posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Robotic Process Automation (RPA) Governance",
            "It stops mattering once a firewall and endpoint agent are deployed across the Robotic Process Automation (RPA) Governance estate",
            "It is a control other Robotic Process Automation (RPA) Governance controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Robotic Process Automation (RPA) Governance controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "rpa-06-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Data handling and encryption\" control?",
          "options": [
            "A point-in-time screenshot of one system's data handling and encryption settings, captured during the walkthrough",
            "The How bots handle data (sensitive data the bot reads/writes/transfers — encrypted in transit + at rest; no sensitive data written to logs/screenshots/temp files), reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the data handling and encryption control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's data handling and encryption capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "rpa-06-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Data handling and encryption\"?",
          "options": [
            "From Bot data encryption and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how data handling and encryption works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. Bot data encryption) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "rpa-06-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Data handling and encryption\"?",
          "options": [
            "The external audit firm, since it is the party examining the data handling and encryption control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the data handling and encryption data is shared, so the accountability sits with no one in particular",
            "RPA CoE + Security, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "RPA CoE + Security owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "rpa-06-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Data handling and encryption\", which part stays with the human auditor?",
          "options": [
            "Re-keying each system's export into a spreadsheet by hand before the agent is allowed to read it",
            "Nothing of substance — the agent decides materiality and the human simply approves whatever it outputs",
            "Setting the policy and thresholds, reviewing the findings, and signing the opinion — the agent only gathers and correlates the evidence",
            "Issuing the final audit opinion automatically as soon as the agent's evidence-gathering run completes"
          ],
          "correctIndex": 2,
          "explanation": "Agents gather and correlate evidence at machine speed; the human owns the policy, the judgement, and the signed opinion."
        },
        {
          "id": "rpa-06-q7",
          "type": "Tooling",
          "challenge": "Read-only",
          "text": "Why must the MCP server for this module be strictly read-only?",
          "options": [
            "The MCP protocol is technically incapable of performing any write operation against a target system",
            "Audit tooling must never alter the audited environment, so read-only guarantees that running it cannot change any state",
            "Read-only is simply the only access level the source-system owners were willing to grant the audit team",
            "Write access would slow the evidence collection down, so read-only is chosen mainly for better performance"
          ],
          "correctIndex": 1,
          "explanation": "Non-interference is a hard requirement for audit evidence-gathering tools — not a permissions accident, a speed choice, or a protocol limitation."
        },
        {
          "id": "rpa-06-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Data handling and encryption\", which of these is a realistic reportable finding?",
          "options": [
            "Bots write full screenshots including customer PII and on-screen passwords to an unsecured shared log folder, and one bot emails extracted data to an external address as part of its process — sensitive data is unencrypted and leaking through the automation.",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. Bots write full screenshots including customer PII and on-screen passwords to an unsecured shared log folder, and one bot emails extracted data to an external address as part of its process — sensitive data is unencrypted and leaking through the automation. A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "rpa-06-q9",
          "type": "Deliverable",
          "challenge": "The opinion",
          "text": "How does the coverage report decide its overall opinion?",
          "options": [
            "It returns PASS by default unless the system owner formally disputes the underlying evidence in writing",
            "It assigns the opinion at random on each run, to avoid any bias in how the findings are presented",
            "It reports only the total count of in-scope assets and deliberately never renders an overall opinion",
            "It escalates PASS → EXCEPTIONS → MATERIAL GAP as the count and severity of the in-scope gaps increase"
          ],
          "correctIndex": 3,
          "explanation": "The opinion is a deterministic function of how many in-scope items fail the test and how severely."
        },
        {
          "id": "rpa-06-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Data handling and encryption\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind data handling and encryption, so there is no overlap",
            "The control applies only to public, non-sensitive data, so any gap in it carries no real regulatory exposure",
            "The control protects regulated or sensitive data, or the systems that process it, so a gap here carries compliance and privacy exposure",
            "Technical controls and privacy obligations are governed entirely separately, so this control sits outside privacy scope"
          ],
          "correctIndex": 2,
          "explanation": "Security and privacy ride on the same technical controls — a gap here is frequently a compliance and privacy gap as well."
        }
      ]
    }
  },
  {
    "epochId": "rpa-governance",
    "id": "rpa-07",
    "order": 7,
    "title": "Infra hardening and vuln mgmt",
    "subtitle": "Agentic technical & privacy audit of the infra hardening and vuln mgmt control",
    "category": "cybersecurity",
    "xp": 180,
    "easeScore": 5,
    "valueScore": 9,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Infra hardening and vuln mgmt\" control for Robotic Process Automation (RPA) Governance is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify RPA infrastructure is hardened + patched. PASS: the Orchestrator/control room + bot-runner hosts are hardened, patched, and access-controlled, the RPA platform + bot hosts have vuln/patch management, the control room (auth, credential store, audit log) is secured, and bot-runner endpoints are managed + monitored. Exceptions: unpatched RPA platform/runners, an Orchestrator with weak auth or an exposed credential store, unmanaged/unmonitored bot-runner machines, and no hardening of the RPA infrastructure.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Robotic Process Automation (RPA) Governance systems of record (RPA Orchestrator / control room hardening; RPA platform + runner patching; Bot-runner endpoint security) as tools — e.g. `hardening of RPA infrastructure (Orchestrator/control room + bot runne`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "Hardening of the RPA infrastructure (the Orchestrator/control room + bot runner machines hardened, patched, access-controlled)",
        "Vulnerability + patch management for the RPA platform + bot hosts (the platform kept current; CVEs in the RPA product/runners patched)",
        "Security of the RPA platform itself (the control room — authentication, the central credential store, the audit log; it's a high-value target)",
        "Bot-runner endpoint security (the unattended machines bots run on are managed, hardened, monitored)"
      ],
      "system": [
        "RPA Orchestrator / control room hardening",
        "RPA platform + runner patching",
        "Bot-runner endpoint security",
        "Vuln management"
      ],
      "dataOwner": [
        "RPA CoE + Infrastructure security",
        "IT operations",
        "Security"
      ],
      "scoring": {
        "ease": "EASE 5/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 9/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Robotic Process Automation (RPA) Governance controls."
      }
    },
    "badge": {
      "id": "rpa-07-badge",
      "name": "Robotic Process Automation (RPA) Governance Auditor",
      "emoji": "⚙️"
    },
    "wonder": {
      "name": "Infra hardening and vuln mgmt",
      "location": "Robotic Process Automation (RPA) Governance",
      "era": "Present Day",
      "emoji": "⚙️"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Infra hardening and vuln mgmt\" as a repeatable agentic workflow: pull the real evidence (Hardening of the RPA infrastructure (the Orchestrator/control room + bot runner machines hardened, patched, access-controlled)) with read-only agents, run the test against policy, and issue a defensible opinion on the Robotic Process Automation (RPA) Governance control.",
      "year": 2025,
      "overview": [
        "The \"Infra hardening and vuln mgmt\" sub-process is one of the controls an auditor must verify for Robotic Process Automation (RPA) Governance. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me hardening of the RPA infrastructure (the Orchestrator/control room + bot runner machines hardened, patched, access-controlled), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here RPA Orchestrator / control room hardening, RPA platform + runner patching, Bot-runner endpoint security — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `hardening of RPA infrastructure (Orchestrator/control room + bot runners — harde` — read-only, against the systems of record.",
        "The test itself is specific. Verify RPA infrastructure is hardened + patched. PASS: the Orchestrator/control room + bot-runner hosts are hardened, patched, and access-controlled, the RPA platform + bot hosts have vuln/patch management, the control room (auth, credential store, audit log) is secured, and bot-runner endpoints are managed + monitored. Exceptions: unpatched RPA platform/runners, an Orchestrator with weak auth or an exposed credential store, unmanaged/unmonitored bot-runner machines, and no hardening of the RPA infrastructure. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `07_infra_hardening_and_vuln_mgmt_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from RPA Orchestrator / control room hardening and RPA platform + runner patching (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 07_infra_hardening_and_vuln_mgmt_mcp.py` to expose it to your agent — or `python 07_infra_hardening_and_vuln_mgmt_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "The bot with standing privileged access",
        "when": "Recurring",
        "where": "RPA estates",
        "impact": "An over-privileged, unmonitored bot with stored credentials becomes a powerful, unattended attack path or a compliance blind spot.",
        "body": [
          "Bots act as users at machine speed, often with broad standing access and stored credentials — and frequently outside change control and logging.",
          "Auditors verify RPA governance, secure dev/test/deploy, change control, least-privilege bot access, credential handling, and bot activity logging."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Robotic Process Automation (RPA) Governance scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull RPA Orchestrator / control room hardening · RPA platform + runner patching",
            "type": "system"
          },
          {
            "label": "Evaluate",
            "sub": "reconcile vs policy, find gaps",
            "type": "system"
          },
          {
            "label": "Findings + opinion",
            "sub": "exceptions · CAPA",
            "type": "result"
          }
        ]
      },
      "timeline": [
        {
          "year": 2022,
          "event": "Unattended bots flagged as a top emerging access-risk class",
          "highlight": true
        },
        {
          "year": 2023,
          "event": "Credential-laden automation accounts targeted for lateral movement"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Infra hardening and vuln mgmt\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "hardening of RPA infrastructure (Orchestrator/control room + bot runners — hardened, patched, access-controlled)\nvuln + patch management for the RPA platform + bot hosts\nsecurity of the RPA platform (control room auth, central credential store, audit log)\nbot-runner endpoint security (unattended machines managed, hardened, monitored)"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: Hardening of the RPA infrastructure (the Orchestrator/control room + bot runner machines hardened, patched, access-controlled).",
        "The test: Verify RPA infrastructure is hardened + patched.",
        "Reconcile the systems of record (RPA Orchestrator / control room hardening, RPA platform + runner patching, Bot-runner endpoint security) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. The RPA Orchestrator runs an unpatched version with weak admin auth and holds every bot's credentials in its vault; the unattended bot-runner machines are unmanaged, unmonitored desktops — compromising the control room would hand over every bot and its credentials."
      ],
      "references": [
        {
          "title": "ISACA — Auditing RPA",
          "url": "https://www.isaca.org/"
        },
        {
          "title": "CIS Benchmarks",
          "url": "https://www.cisecurity.org/cis-benchmarks"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "07_infra_hardening_and_vuln_mgmt_mcp.py",
          "url": "/audit-code/rpa-governance/07_infra_hardening_and_vuln_mgmt_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Robotic Process Automation (RPA) Governance evidence for \"Infra hardening and vuln mgmt\" (hardening of the rpa infrastructure (the orchestrator/control room + bot runner machines hardened, patched, access-controlled)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Infra hardening and vuln mgmt\" control for Robotic Process Automation (RPA) Governance at AcmeCorp. THE TEST: Verify RPA infrastructure is hardened + patched. PASS: the Orchestrator/control room + bot-runner hosts are hardened, patched, and access-controlled, the RPA platform + bot hosts have vuln/patch management, the control room (auth, credential store, audit log) is secured, and bot-runner endpoints are managed + monitored. Exceptions: unpatched RPA platform/runners, an Orchestrator with weak auth or an exposed credential store, unmanaged/unmonitored bot-runner machines, and no hardening of the RPA infrastructure. The evidence — Hardening of the RPA infrastructure (the Orchestrator/control room + bot runner machines hardened, patched, access-controlled) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live RPA Orchestrator / control room hardening APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. RPA Orchestrator / control room hardening gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from RPA Orchestrator / control room hardening; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Robotic Process Automation (RPA) Governance: \"Infra hardening and vuln mgmt\" Audit Evidence\n\nThe test:\nVerify RPA infrastructure is hardened + patched. PASS: the Orchestrator/control room + bot-runner hosts are hardened, patched, and access-controlled, the RPA platform + bot hosts have vuln/patch management, the control room (auth, credential store, audit log) is secured, and bot-runner endpoints are managed + monitored. Exceptions: unpatched RPA platform/runners, an Orchestrator with weak auth or an exposed credential store, unmanaged/unmonitored bot-runner machines, and no hardening of the RPA infrastructure.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- rpa-governance_inventory.json   (in-scope items — Hardening of the RPA infrastructure (the Orchestrator/control room + bot runner machines hardened, patched, access-controlled))\n- rpa-governance_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Infra hardening and vuln mgmt\",\n  \"domain\": \"Robotic Process Automation (RPA) Governance\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{rpa_",
        "/evidence/rpa-governance_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Automation CoE\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Infra hardening and vuln mgmt\" control must cover\n# fragment: infra_hardening_vuln_",
        "/evidence/rpa-governance_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
        "/evidence/coverage_report.json": "{\n  \"in_scope\": 4,\n  \"compliant\": 2,\n  \"exceptions\": [\"item-002\",\"item-003\"],\n  \"opinion\": \"MATERIAL GAP\"\n}\n# fragment: material_gap}"
      },
      "dirs": {
        "/": [
          {
            "name": "evidence",
            "isDir": true
          }
        ],
        "/evidence": [
          {
            "name": "README.md",
            "isDir": false
          },
          {
            "name": "policy.json",
            "isDir": false
          },
          {
            "name": "rpa-governance_inventory.json",
            "isDir": false
          },
          {
            "name": "rpa-governance_state.json",
            "isDir": false
          },
          {
            "name": "coverage_report.json",
            "isDir": false
          }
        ]
      },
      "fragments": [
        {
          "trigger": "/evidence/policy.json",
          "value": "FLAG{rpa_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/rpa-governance_inventory.json",
          "value": "infra_hardening_vuln_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/rpa-governance_state.json",
          "value": "gap_",
          "label": "State — the items that fail the control"
        },
        {
          "trigger": "/evidence/coverage_report.json",
          "value": "material_gap}",
          "label": "Coverage report — the audit opinion"
        }
      ]
    },
    "quiz": {
      "questions": [
        {
          "id": "rpa-07-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Infra hardening and vuln mgmt\" sub-process of Robotic Process Automation (RPA) Governance?",
          "options": [
            "Deploy and operate the infra hardening and vuln mgmt control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the infra hardening and vuln mgmt control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for infra hardening and vuln mgmt against comparable organisations in the sector",
            "Obtain evidence that the infra hardening and vuln mgmt control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "rpa-07-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Infra hardening and vuln mgmt\" matter to the broader Robotic Process Automation (RPA) Governance posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Robotic Process Automation (RPA) Governance",
            "It stops mattering once a firewall and endpoint agent are deployed across the Robotic Process Automation (RPA) Governance estate",
            "It is a control other Robotic Process Automation (RPA) Governance controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Robotic Process Automation (RPA) Governance controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "rpa-07-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Infra hardening and vuln mgmt\" control?",
          "options": [
            "A point-in-time screenshot of one system's infra hardening and vuln mgmt settings, captured during the walkthrough",
            "The Hardening of the RPA infrastructure (the Orchestrator/control room + bot runner machines hardened, patched, access-controlled), reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the infra hardening and vuln mgmt control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's infra hardening and vuln mgmt capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "rpa-07-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Infra hardening and vuln mgmt\"?",
          "options": [
            "From RPA Orchestrator / control room hardening and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how infra hardening and vuln mgmt works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. RPA Orchestrator / control room hardening) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "rpa-07-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Infra hardening and vuln mgmt\"?",
          "options": [
            "The external audit firm, since it is the party examining the infra hardening and vuln mgmt control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the infra hardening and vuln mgmt data is shared, so the accountability sits with no one in particular",
            "RPA CoE + Infrastructure security, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "RPA CoE + Infrastructure security owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "rpa-07-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Infra hardening and vuln mgmt\", which part stays with the human auditor?",
          "options": [
            "Re-keying each system's export into a spreadsheet by hand before the agent is allowed to read it",
            "Nothing of substance — the agent decides materiality and the human simply approves whatever it outputs",
            "Setting the policy and thresholds, reviewing the findings, and signing the opinion — the agent only gathers and correlates the evidence",
            "Issuing the final audit opinion automatically as soon as the agent's evidence-gathering run completes"
          ],
          "correctIndex": 2,
          "explanation": "Agents gather and correlate evidence at machine speed; the human owns the policy, the judgement, and the signed opinion."
        },
        {
          "id": "rpa-07-q7",
          "type": "Tooling",
          "challenge": "Read-only",
          "text": "Why must the MCP server for this module be strictly read-only?",
          "options": [
            "The MCP protocol is technically incapable of performing any write operation against a target system",
            "Audit tooling must never alter the audited environment, so read-only guarantees that running it cannot change any state",
            "Read-only is simply the only access level the source-system owners were willing to grant the audit team",
            "Write access would slow the evidence collection down, so read-only is chosen mainly for better performance"
          ],
          "correctIndex": 1,
          "explanation": "Non-interference is a hard requirement for audit evidence-gathering tools — not a permissions accident, a speed choice, or a protocol limitation."
        },
        {
          "id": "rpa-07-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Infra hardening and vuln mgmt\", which of these is a realistic reportable finding?",
          "options": [
            "The RPA Orchestrator runs an unpatched version with weak admin auth and holds every bot's credentials in its vault; the unattended bot-runner machines are unmanaged, unmonitored desktops — compromising the control room would hand over every bot and its credentials.",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. The RPA Orchestrator runs an unpatched version with weak admin auth and holds every bot's credentials in its vault; the unattended bot-runner machines are unmanaged, unmonitored desktops — compromising the control room would hand over every bot and its credentials. A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "rpa-07-q9",
          "type": "Deliverable",
          "challenge": "The opinion",
          "text": "How does the coverage report decide its overall opinion?",
          "options": [
            "It returns PASS by default unless the system owner formally disputes the underlying evidence in writing",
            "It assigns the opinion at random on each run, to avoid any bias in how the findings are presented",
            "It reports only the total count of in-scope assets and deliberately never renders an overall opinion",
            "It escalates PASS → EXCEPTIONS → MATERIAL GAP as the count and severity of the in-scope gaps increase"
          ],
          "correctIndex": 3,
          "explanation": "The opinion is a deterministic function of how many in-scope items fail the test and how severely."
        },
        {
          "id": "rpa-07-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Infra hardening and vuln mgmt\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind infra hardening and vuln mgmt, so there is no overlap",
            "The control applies only to public, non-sensitive data, so any gap in it carries no real regulatory exposure",
            "The control protects regulated or sensitive data, or the systems that process it, so a gap here carries compliance and privacy exposure",
            "Technical controls and privacy obligations are governed entirely separately, so this control sits outside privacy scope"
          ],
          "correctIndex": 2,
          "explanation": "Security and privacy ride on the same technical controls — a gap here is frequently a compliance and privacy gap as well."
        }
      ]
    }
  },
  {
    "epochId": "rpa-governance",
    "id": "rpa-08",
    "order": 8,
    "title": "Business Continuity (RPA)",
    "subtitle": "Agentic technical & privacy audit of the business continuity (rpa) control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 6,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Business Continuity (RPA)\" control for Robotic Process Automation (RPA) Governance is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify RPA continuity is assured. PASS: critical automations have a manual fallback for bot/platform failure, the RPA platform is backed up + recoverable (DR), bot dependency/concentration risk is assessed, and bot failures are monitored + alerted. Exceptions: a critical process fully dependent on a bot with no manual fallback, no platform backup/DR, unassessed concentration risk, and silent bot failures (work undone, undetected).",
      "approach": "An audit agent calls a read-only MCP server that wraps the Robotic Process Automation (RPA) Governance systems of record (Manual fallback / process docs; RPA platform backup + DR; Bot monitoring / alerting) as tools — e.g. `BC for critical automations (manual fallback/process if a bot or the p`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "BC/resilience for critical automations (what happens if a bot or the RPA platform fails — the manual fallback/process for a critical automated process)",
        "RPA platform resilience + recovery (the Orchestrator/bots backed up, recoverable; DR for the platform)",
        "Dependency + concentration risk (how much of a critical process depends on bots; a single bot/platform failure's business impact)",
        "Monitoring + alerting on bot failures (a failed/stalled bot is detected, not silently leaving work undone)"
      ],
      "system": [
        "Manual fallback / process docs",
        "RPA platform backup + DR",
        "Bot monitoring / alerting",
        "Dependency / BIA"
      ],
      "dataOwner": [
        "RPA CoE + Business continuity",
        "Business process owners",
        "IT operations"
      ],
      "scoring": {
        "ease": "EASE 6/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Robotic Process Automation (RPA) Governance controls."
      }
    },
    "badge": {
      "id": "rpa-08-badge",
      "name": "Robotic Process Automation (RPA) Governance Auditor",
      "emoji": "⚙️"
    },
    "wonder": {
      "name": "Business Continuity (RPA)",
      "location": "Robotic Process Automation (RPA) Governance",
      "era": "Present Day",
      "emoji": "⚙️"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Business Continuity (RPA)\" as a repeatable agentic workflow: pull the real evidence (BC/resilience for critical automations (what happens if a bot or the RPA platform fails — the manual fallback/process for a critical automated process)) with read-only agents, run the test against policy, and issue a defensible opinion on the Robotic Process Automation (RPA) Governance control.",
      "year": 2025,
      "overview": [
        "The \"Business Continuity (RPA)\" sub-process is one of the controls an auditor must verify for Robotic Process Automation (RPA) Governance. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me bC/resilience for critical automations (what happens if a bot or the RPA platform fails — the manual fallback/process for a critical automated process), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Manual fallback / process docs, RPA platform backup + DR, Bot monitoring / alerting — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `BC for critical automations (manual fallback/process if a bot or the platform fa` — read-only, against the systems of record.",
        "The test itself is specific. Verify RPA continuity is assured. PASS: critical automations have a manual fallback for bot/platform failure, the RPA platform is backed up + recoverable (DR), bot dependency/concentration risk is assessed, and bot failures are monitored + alerted. Exceptions: a critical process fully dependent on a bot with no manual fallback, no platform backup/DR, unassessed concentration risk, and silent bot failures (work undone, undetected). The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `08_business_continuity_rpa_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Manual fallback / process docs and RPA platform backup + DR (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 08_business_continuity_rpa_mcp.py` to expose it to your agent — or `python 08_business_continuity_rpa_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "The bot with standing privileged access",
        "when": "Recurring",
        "where": "RPA estates",
        "impact": "An over-privileged, unmonitored bot with stored credentials becomes a powerful, unattended attack path or a compliance blind spot.",
        "body": [
          "Bots act as users at machine speed, often with broad standing access and stored credentials — and frequently outside change control and logging.",
          "Auditors verify RPA governance, secure dev/test/deploy, change control, least-privilege bot access, credential handling, and bot activity logging."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Robotic Process Automation (RPA) Governance scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull Manual fallback / process docs · RPA platform backup + DR",
            "type": "system"
          },
          {
            "label": "Evaluate",
            "sub": "reconcile vs policy, find gaps",
            "type": "system"
          },
          {
            "label": "Findings + opinion",
            "sub": "exceptions · CAPA",
            "type": "result"
          }
        ]
      },
      "timeline": [
        {
          "year": 2022,
          "event": "Unattended bots flagged as a top emerging access-risk class",
          "highlight": true
        },
        {
          "year": 2023,
          "event": "Credential-laden automation accounts targeted for lateral movement"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Business Continuity (RPA)\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "BC for critical automations (manual fallback/process if a bot or the platform fails)\nRPA platform resilience + recovery (Orchestrator/bots backed up, DR)\ndependency + concentration risk (process reliance on bots; single-failure impact)\nmonitoring + alerting on bot failures (failed/stalled bot detected)"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: BC/resilience for critical automations (what happens if a bot or the RPA platform fails — the manual fallback/process for a critical automated process).",
        "The test: Verify RPA continuity is assured.",
        "Reconcile the systems of record (Manual fallback / process docs, RPA platform backup + DR, Bot monitoring / alerting) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. A critical month-end process runs entirely on one bot with no manual fallback and no failure alerting; when the bot stalled silently, the work simply didn't happen and no one noticed until the deadline passed — and the platform has no DR plan."
      ],
      "references": [
        {
          "title": "ISACA — Auditing RPA",
          "url": "https://www.isaca.org/"
        },
        {
          "title": "ISO 22301 — Business Continuity",
          "url": "https://www.iso.org/standard/75106.html"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "08_business_continuity_rpa_mcp.py",
          "url": "/audit-code/rpa-governance/08_business_continuity_rpa_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Robotic Process Automation (RPA) Governance evidence for \"Business Continuity (RPA)\" (bc/resilience for critical automations (what happens if a bot or the rpa platform fails — the manual fallback/process for a critical automated process)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Business Continuity (RPA)\" control for Robotic Process Automation (RPA) Governance at AcmeCorp. THE TEST: Verify RPA continuity is assured. PASS: critical automations have a manual fallback for bot/platform failure, the RPA platform is backed up + recoverable (DR), bot dependency/concentration risk is assessed, and bot failures are monitored + alerted. Exceptions: a critical process fully dependent on a bot with no manual fallback, no platform backup/DR, unassessed concentration risk, and silent bot failures (work undone, undetected). The evidence — BC/resilience for critical automations (what happens if a bot or the RPA platform fails — the manual fallback/process for a critical automated process) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Manual fallback / process docs APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Manual fallback / process docs gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Manual fallback / process docs; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Robotic Process Automation (RPA) Governance: \"Business Continuity (RPA)\" Audit Evidence\n\nThe test:\nVerify RPA continuity is assured. PASS: critical automations have a manual fallback for bot/platform failure, the RPA platform is backed up + recoverable (DR), bot dependency/concentration risk is assessed, and bot failures are monitored + alerted. Exceptions: a critical process fully dependent on a bot with no manual fallback, no platform backup/DR, unassessed concentration risk, and silent bot failures (work undone, undetected).\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- rpa-governance_inventory.json   (in-scope items — BC/resilience for critical automations (what happens if a bot or the RPA platform fails — the manual fallback/process for a critical automated process))\n- rpa-governance_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Business Continuity (RPA)\",\n  \"domain\": \"Robotic Process Automation (RPA) Governance\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{rpa_",
        "/evidence/rpa-governance_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Automation CoE\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Business Continuity (RPA)\" control must cover\n# fragment: business_continuity_rpa_",
        "/evidence/rpa-governance_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
        "/evidence/coverage_report.json": "{\n  \"in_scope\": 4,\n  \"compliant\": 2,\n  \"exceptions\": [\"item-002\",\"item-003\"],\n  \"opinion\": \"MATERIAL GAP\"\n}\n# fragment: material_gap}"
      },
      "dirs": {
        "/": [
          {
            "name": "evidence",
            "isDir": true
          }
        ],
        "/evidence": [
          {
            "name": "README.md",
            "isDir": false
          },
          {
            "name": "policy.json",
            "isDir": false
          },
          {
            "name": "rpa-governance_inventory.json",
            "isDir": false
          },
          {
            "name": "rpa-governance_state.json",
            "isDir": false
          },
          {
            "name": "coverage_report.json",
            "isDir": false
          }
        ]
      },
      "fragments": [
        {
          "trigger": "/evidence/policy.json",
          "value": "FLAG{rpa_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/rpa-governance_inventory.json",
          "value": "business_continuity_rpa_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/rpa-governance_state.json",
          "value": "gap_",
          "label": "State — the items that fail the control"
        },
        {
          "trigger": "/evidence/coverage_report.json",
          "value": "material_gap}",
          "label": "Coverage report — the audit opinion"
        }
      ]
    },
    "quiz": {
      "questions": [
        {
          "id": "rpa-08-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Business Continuity (RPA)\" sub-process of Robotic Process Automation (RPA) Governance?",
          "options": [
            "Deploy and operate the business continuity (rpa) control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the business continuity (rpa) control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for business continuity (rpa) against comparable organisations in the sector",
            "Obtain evidence that the business continuity (rpa) control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "rpa-08-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Business Continuity (RPA)\" matter to the broader Robotic Process Automation (RPA) Governance posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Robotic Process Automation (RPA) Governance",
            "It stops mattering once a firewall and endpoint agent are deployed across the Robotic Process Automation (RPA) Governance estate",
            "It is a control other Robotic Process Automation (RPA) Governance controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Robotic Process Automation (RPA) Governance controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "rpa-08-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Business Continuity (RPA)\" control?",
          "options": [
            "A point-in-time screenshot of one system's business continuity (rpa) settings, captured during the walkthrough",
            "The BC/resilience for critical automations (what happens if a bot or the RPA platform fails — the manual fallback/process for a critical automated process), reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the business continuity (rpa) control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's business continuity (rpa) capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "rpa-08-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Business Continuity (RPA)\"?",
          "options": [
            "From Manual fallback / process docs and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how business continuity (rpa) works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. Manual fallback / process docs) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "rpa-08-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Business Continuity (RPA)\"?",
          "options": [
            "The external audit firm, since it is the party examining the business continuity (rpa) control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the business continuity (rpa) data is shared, so the accountability sits with no one in particular",
            "RPA CoE + Business continuity, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "RPA CoE + Business continuity owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "rpa-08-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Business Continuity (RPA)\", which part stays with the human auditor?",
          "options": [
            "Re-keying each system's export into a spreadsheet by hand before the agent is allowed to read it",
            "Nothing of substance — the agent decides materiality and the human simply approves whatever it outputs",
            "Setting the policy and thresholds, reviewing the findings, and signing the opinion — the agent only gathers and correlates the evidence",
            "Issuing the final audit opinion automatically as soon as the agent's evidence-gathering run completes"
          ],
          "correctIndex": 2,
          "explanation": "Agents gather and correlate evidence at machine speed; the human owns the policy, the judgement, and the signed opinion."
        },
        {
          "id": "rpa-08-q7",
          "type": "Tooling",
          "challenge": "Read-only",
          "text": "Why must the MCP server for this module be strictly read-only?",
          "options": [
            "The MCP protocol is technically incapable of performing any write operation against a target system",
            "Audit tooling must never alter the audited environment, so read-only guarantees that running it cannot change any state",
            "Read-only is simply the only access level the source-system owners were willing to grant the audit team",
            "Write access would slow the evidence collection down, so read-only is chosen mainly for better performance"
          ],
          "correctIndex": 1,
          "explanation": "Non-interference is a hard requirement for audit evidence-gathering tools — not a permissions accident, a speed choice, or a protocol limitation."
        },
        {
          "id": "rpa-08-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Business Continuity (RPA)\", which of these is a realistic reportable finding?",
          "options": [
            "A critical month-end process runs entirely on one bot with no manual fallback and no failure alerting; when the bot stalled silently, the work simply didn't happen and no one noticed until the deadline passed — and the platform has no DR plan.",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. A critical month-end process runs entirely on one bot with no manual fallback and no failure alerting; when the bot stalled silently, the work simply didn't happen and no one noticed until the deadline passed — and the platform has no DR plan. A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "rpa-08-q9",
          "type": "Deliverable",
          "challenge": "The opinion",
          "text": "How does the coverage report decide its overall opinion?",
          "options": [
            "It returns PASS by default unless the system owner formally disputes the underlying evidence in writing",
            "It assigns the opinion at random on each run, to avoid any bias in how the findings are presented",
            "It reports only the total count of in-scope assets and deliberately never renders an overall opinion",
            "It escalates PASS → EXCEPTIONS → MATERIAL GAP as the count and severity of the in-scope gaps increase"
          ],
          "correctIndex": 3,
          "explanation": "The opinion is a deterministic function of how many in-scope items fail the test and how severely."
        },
        {
          "id": "rpa-08-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Business Continuity (RPA)\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind business continuity (rpa), so there is no overlap",
            "The control applies only to public, non-sensitive data, so any gap in it carries no real regulatory exposure",
            "The control protects regulated or sensitive data, or the systems that process it, so a gap here carries compliance and privacy exposure",
            "Technical controls and privacy obligations are governed entirely separately, so this control sits outside privacy scope"
          ],
          "correctIndex": 2,
          "explanation": "Security and privacy ride on the same technical controls — a gap here is frequently a compliance and privacy gap as well."
        }
      ]
    }
  },
  {
    "epochId": "rpa-governance",
    "id": "rpa-09",
    "order": 9,
    "title": "Third-party / OSS contribution",
    "subtitle": "Agentic technical & privacy audit of the third-party / oss contribution control",
    "category": "cybersecurity",
    "xp": 180,
    "easeScore": 7,
    "valueScore": 9,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Third-party / OSS contribution\" control for Robotic Process Automation (RPA) Governance is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify third-party/OSS in RPA is governed. PASS: marketplace/third-party bot components are vetted before use, external dependencies in bot code are vulnerability-scanned + provenance-checked, third-party integrations bots call are controlled (incl. data shared), and shared/community reusable components are reviewed. Exceptions: unvetted marketplace/OSS components in production bots, unscanned vulnerable dependencies, uncontrolled bot integrations with external services (data leaving), and blindly-trusted shared components.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Robotic Process Automation (RPA) Governance systems of record (Component / dependency vetting; Dependency vulnerability scanning; Integration / data-sharing control) as tools — e.g. `governance of third-party/marketplace components (vetted before use)`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "Governance of third-party/marketplace components used in bots (reusable components, connectors, packages from the RPA marketplace or open source — vetted before use)",
        "Security of external dependencies in bot code (libraries/packages the bots use scanned for vulnerabilities; provenance checked)",
        "Control over what bots integrate with (third-party APIs/services bots call; the data shared with them)",
        "Review of citizen-developer/shared reusable components (community/shared bot components governed, not blindly trusted)"
      ],
      "system": [
        "Component / dependency vetting",
        "Dependency vulnerability scanning",
        "Integration / data-sharing control",
        "Reusable-component governance"
      ],
      "dataOwner": [
        "RPA CoE + AppSec",
        "Bot developers",
        "Security"
      ],
      "scoring": {
        "ease": "EASE 7/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 9/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Robotic Process Automation (RPA) Governance controls."
      }
    },
    "badge": {
      "id": "rpa-09-badge",
      "name": "Robotic Process Automation (RPA) Governance Auditor",
      "emoji": "⚙️"
    },
    "wonder": {
      "name": "Third-party / OSS contribution",
      "location": "Robotic Process Automation (RPA) Governance",
      "era": "Present Day",
      "emoji": "⚙️"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Third-party / OSS contribution\" as a repeatable agentic workflow: pull the real evidence (Governance of third-party/marketplace components used in bots (reusable components, connectors, packages from the RPA marketplace or open source — vetted before use)) with read-only agents, run the test against policy, and issue a defensible opinion on the Robotic Process Automation (RPA) Governance control.",
      "year": 2025,
      "overview": [
        "The \"Third-party / OSS contribution\" sub-process is one of the controls an auditor must verify for Robotic Process Automation (RPA) Governance. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me governance of third-party/marketplace components used in bots (reusable components, connectors, packages from the RPA marketplace or open source — vetted before use), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Component / dependency vetting, Dependency vulnerability scanning, Integration / data-sharing control — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `governance of third-party/marketplace components (vetted before use)` — read-only, against the systems of record.",
        "The test itself is specific. Verify third-party/OSS in RPA is governed. PASS: marketplace/third-party bot components are vetted before use, external dependencies in bot code are vulnerability-scanned + provenance-checked, third-party integrations bots call are controlled (incl. data shared), and shared/community reusable components are reviewed. Exceptions: unvetted marketplace/OSS components in production bots, unscanned vulnerable dependencies, uncontrolled bot integrations with external services (data leaving), and blindly-trusted shared components. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `09_third_party_oss_contribution_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Component / dependency vetting and Dependency vulnerability scanning (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 09_third_party_oss_contribution_mcp.py` to expose it to your agent — or `python 09_third_party_oss_contribution_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "The bot with standing privileged access",
        "when": "Recurring",
        "where": "RPA estates",
        "impact": "An over-privileged, unmonitored bot with stored credentials becomes a powerful, unattended attack path or a compliance blind spot.",
        "body": [
          "Bots act as users at machine speed, often with broad standing access and stored credentials — and frequently outside change control and logging.",
          "Auditors verify RPA governance, secure dev/test/deploy, change control, least-privilege bot access, credential handling, and bot activity logging."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Robotic Process Automation (RPA) Governance scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull Component / dependency vetting · Dependency vulnerability scanning",
            "type": "system"
          },
          {
            "label": "Evaluate",
            "sub": "reconcile vs policy, find gaps",
            "type": "system"
          },
          {
            "label": "Findings + opinion",
            "sub": "exceptions · CAPA",
            "type": "result"
          }
        ]
      },
      "timeline": [
        {
          "year": 2022,
          "event": "Unattended bots flagged as a top emerging access-risk class",
          "highlight": true
        },
        {
          "year": 2023,
          "event": "Credential-laden automation accounts targeted for lateral movement"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Third-party / OSS contribution\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "governance of third-party/marketplace components (vetted before use)\nsecurity of external dependencies in bot code (vuln-scanned, provenance-checked)\ncontrol over bot integrations (third-party APIs/services called; data shared)\nreview of citizen-developer/shared reusable components"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: Governance of third-party/marketplace components used in bots (reusable components, connectors, packages from the RPA marketplace or open source — vetted before use).",
        "The test: Verify third-party/OSS in RPA is governed.",
        "Reconcile the systems of record (Component / dependency vetting, Dependency vulnerability scanning, Integration / data-sharing control) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. Developers pull unvetted components from the RPA marketplace and open-source packages straight into production bots with no security scanning or provenance check, and bots call external APIs sharing customer data with no review — an unmanaged supply-chain and data-leak path."
      ],
      "references": [
        {
          "title": "ISACA — Auditing RPA",
          "url": "https://www.isaca.org/"
        },
        {
          "title": "NIST SP 800-161 — C-SCRM",
          "url": "https://csrc.nist.gov/pubs/sp/800/161/r1/final"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "09_third_party_oss_contribution_mcp.py",
          "url": "/audit-code/rpa-governance/09_third_party_oss_contribution_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Robotic Process Automation (RPA) Governance evidence for \"Third-party / OSS contribution\" (governance of third-party/marketplace components used in bots (reusable components, connectors, packages from the rpa marketplace or open source — vetted before use)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Third-party / OSS contribution\" control for Robotic Process Automation (RPA) Governance at AcmeCorp. THE TEST: Verify third-party/OSS in RPA is governed. PASS: marketplace/third-party bot components are vetted before use, external dependencies in bot code are vulnerability-scanned + provenance-checked, third-party integrations bots call are controlled (incl. data shared), and shared/community reusable components are reviewed. Exceptions: unvetted marketplace/OSS components in production bots, unscanned vulnerable dependencies, uncontrolled bot integrations with external services (data leaving), and blindly-trusted shared components. The evidence — Governance of third-party/marketplace components used in bots (reusable components, connectors, packages from the RPA marketplace or open source — vetted before use) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Component / dependency vetting APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Component / dependency vetting gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Component / dependency vetting; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Robotic Process Automation (RPA) Governance: \"Third-party / OSS contribution\" Audit Evidence\n\nThe test:\nVerify third-party/OSS in RPA is governed. PASS: marketplace/third-party bot components are vetted before use, external dependencies in bot code are vulnerability-scanned + provenance-checked, third-party integrations bots call are controlled (incl. data shared), and shared/community reusable components are reviewed. Exceptions: unvetted marketplace/OSS components in production bots, unscanned vulnerable dependencies, uncontrolled bot integrations with external services (data leaving), and blindly-trusted shared components.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- rpa-governance_inventory.json   (in-scope items — Governance of third-party/marketplace components used in bots (reusable components, connectors, packages from the RPA marketplace or open source — vetted before use))\n- rpa-governance_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Third-party / OSS contribution\",\n  \"domain\": \"Robotic Process Automation (RPA) Governance\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{rpa_",
        "/evidence/rpa-governance_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Automation CoE\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Third-party / OSS contribution\" control must cover\n# fragment: thirdparty_oss_contribution_",
        "/evidence/rpa-governance_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
        "/evidence/coverage_report.json": "{\n  \"in_scope\": 4,\n  \"compliant\": 2,\n  \"exceptions\": [\"item-002\",\"item-003\"],\n  \"opinion\": \"MATERIAL GAP\"\n}\n# fragment: material_gap}"
      },
      "dirs": {
        "/": [
          {
            "name": "evidence",
            "isDir": true
          }
        ],
        "/evidence": [
          {
            "name": "README.md",
            "isDir": false
          },
          {
            "name": "policy.json",
            "isDir": false
          },
          {
            "name": "rpa-governance_inventory.json",
            "isDir": false
          },
          {
            "name": "rpa-governance_state.json",
            "isDir": false
          },
          {
            "name": "coverage_report.json",
            "isDir": false
          }
        ]
      },
      "fragments": [
        {
          "trigger": "/evidence/policy.json",
          "value": "FLAG{rpa_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/rpa-governance_inventory.json",
          "value": "thirdparty_oss_contribution_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/rpa-governance_state.json",
          "value": "gap_",
          "label": "State — the items that fail the control"
        },
        {
          "trigger": "/evidence/coverage_report.json",
          "value": "material_gap}",
          "label": "Coverage report — the audit opinion"
        }
      ]
    },
    "quiz": {
      "questions": [
        {
          "id": "rpa-09-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Third-party / OSS contribution\" sub-process of Robotic Process Automation (RPA) Governance?",
          "options": [
            "Deploy and operate the third-party / oss contribution control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the third-party / oss contribution control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for third-party / oss contribution against comparable organisations in the sector",
            "Obtain evidence that the third-party / oss contribution control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "rpa-09-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Third-party / OSS contribution\" matter to the broader Robotic Process Automation (RPA) Governance posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Robotic Process Automation (RPA) Governance",
            "It stops mattering once a firewall and endpoint agent are deployed across the Robotic Process Automation (RPA) Governance estate",
            "It is a control other Robotic Process Automation (RPA) Governance controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Robotic Process Automation (RPA) Governance controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "rpa-09-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Third-party / OSS contribution\" control?",
          "options": [
            "A point-in-time screenshot of one system's third-party / oss contribution settings, captured during the walkthrough",
            "The Governance of third-party/marketplace components used in bots (reusable components, connectors, packages from the RPA marketplace or open source — vetted before use), reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the third-party / oss contribution control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's third-party / oss contribution capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "rpa-09-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Third-party / OSS contribution\"?",
          "options": [
            "From Component / dependency vetting and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how third-party / oss contribution works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. Component / dependency vetting) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "rpa-09-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Third-party / OSS contribution\"?",
          "options": [
            "The external audit firm, since it is the party examining the third-party / oss contribution control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the third-party / oss contribution data is shared, so the accountability sits with no one in particular",
            "RPA CoE + AppSec, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "RPA CoE + AppSec owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "rpa-09-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Third-party / OSS contribution\", which part stays with the human auditor?",
          "options": [
            "Re-keying each system's export into a spreadsheet by hand before the agent is allowed to read it",
            "Nothing of substance — the agent decides materiality and the human simply approves whatever it outputs",
            "Setting the policy and thresholds, reviewing the findings, and signing the opinion — the agent only gathers and correlates the evidence",
            "Issuing the final audit opinion automatically as soon as the agent's evidence-gathering run completes"
          ],
          "correctIndex": 2,
          "explanation": "Agents gather and correlate evidence at machine speed; the human owns the policy, the judgement, and the signed opinion."
        },
        {
          "id": "rpa-09-q7",
          "type": "Tooling",
          "challenge": "Read-only",
          "text": "Why must the MCP server for this module be strictly read-only?",
          "options": [
            "The MCP protocol is technically incapable of performing any write operation against a target system",
            "Audit tooling must never alter the audited environment, so read-only guarantees that running it cannot change any state",
            "Read-only is simply the only access level the source-system owners were willing to grant the audit team",
            "Write access would slow the evidence collection down, so read-only is chosen mainly for better performance"
          ],
          "correctIndex": 1,
          "explanation": "Non-interference is a hard requirement for audit evidence-gathering tools — not a permissions accident, a speed choice, or a protocol limitation."
        },
        {
          "id": "rpa-09-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Third-party / OSS contribution\", which of these is a realistic reportable finding?",
          "options": [
            "Developers pull unvetted components from the RPA marketplace and open-source packages straight into production bots with no security scanning or provenance check, and bots call external APIs sharing customer data with no review — an unmanaged supply-chain and data-leak path.",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. Developers pull unvetted components from the RPA marketplace and open-source packages straight into production bots with no security scanning or provenance check, and bots call external APIs sharing customer data with no review — an unmanaged supply-chain and data-leak path. A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "rpa-09-q9",
          "type": "Deliverable",
          "challenge": "The opinion",
          "text": "How does the coverage report decide its overall opinion?",
          "options": [
            "It returns PASS by default unless the system owner formally disputes the underlying evidence in writing",
            "It assigns the opinion at random on each run, to avoid any bias in how the findings are presented",
            "It reports only the total count of in-scope assets and deliberately never renders an overall opinion",
            "It escalates PASS → EXCEPTIONS → MATERIAL GAP as the count and severity of the in-scope gaps increase"
          ],
          "correctIndex": 3,
          "explanation": "The opinion is a deterministic function of how many in-scope items fail the test and how severely."
        },
        {
          "id": "rpa-09-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Third-party / OSS contribution\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind third-party / oss contribution, so there is no overlap",
            "The control applies only to public, non-sensitive data, so any gap in it carries no real regulatory exposure",
            "The control protects regulated or sensitive data, or the systems that process it, so a gap here carries compliance and privacy exposure",
            "Technical controls and privacy obligations are governed entirely separately, so this control sits outside privacy scope"
          ],
          "correctIndex": 2,
          "explanation": "Security and privacy ride on the same technical controls — a gap here is frequently a compliance and privacy gap as well."
        }
      ]
    }
  }
];

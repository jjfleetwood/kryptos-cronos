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
    "xp": 100,
    "easeScore": 5,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"RPA strategy and governance\" control for Robotic Process Automation (RPA) Governance is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the Robotic Process Automation (RPA) Governance policy/standard and flag every item where the \"RPA strategy and governance\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Robotic Process Automation (RPA) Governance systems of record (RPA platform (UiPath/Automation Anywhere/Power Automate); Bot credential vault; Bot orchestration + logs) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the rpa strategy and governance control (from RPA platform (UiPath/Automation Anywhere/Power Automate))",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "RPA platform (UiPath/Automation Anywhere/Power Automate)",
        "Bot credential vault",
        "Bot orchestration + logs",
        "Version control for bots"
      ],
      "dataOwner": [
        "Automation CoE",
        "Bot/process owners",
        "Security engineering",
        "Internal audit"
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
      "tagline": "Auditing \"RPA strategy and governance\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the rpa strategy and governance control (from RPA platform (UiPath/Automation Anywhere/Power Automate))) with read-only agents, run the test against policy, and issue a defensible opinion on the Robotic Process Automation (RPA) Governance control.",
      "year": 2025,
      "overview": [
        "The \"RPA strategy and governance\" sub-process is one of the controls an auditor must verify for Robotic Process Automation (RPA) Governance. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the rpa strategy and governance control (from RPA platform (UiPath/Automation Anywhere/Power Automate)), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here RPA platform (UiPath/Automation Anywhere/Power Automate), Bot credential vault, Bot orchestration + logs — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the Robotic Process Automation (RPA) Governance policy/standard and flag every item where the \"RPA strategy and governance\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `01_rpa_strategy_and_governance_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from RPA platform (UiPath/Automation Anywhere/Power Automate) and Bot credential vault (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
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
            "sub": "pull RPA platform (UiPath/Automation Anywhere/Power Automate) · Bot credential vault",
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
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the rpa strategy and governance control (from RPA platform (UiPath/Automation Anywhere/Power Automate)).",
        "The test: Reconcile the in-scope inventory against the Robotic Process Automation (RPA) Governance policy/standard and flag every item where the \"RPA strategy and governance\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (RPA platform (UiPath/Automation Anywhere/Power Automate), Bot credential vault, Bot orchestration + logs) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the rpa strategy and governance control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "ISACA — Auditing RPA",
          "url": "https://www.isaca.org/"
        },
        {
          "title": "NIST SP 800-53 — AC/AU families",
          "url": "https://csrc.nist.gov/projects/risk-management/sp800-53-controls"
        },
        {
          "title": "OWASP — automation/credential guidance",
          "url": "https://owasp.org/"
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
          "description": "Runnable read-only MCP server: gathers the Robotic Process Automation (RPA) Governance evidence for \"RPA strategy and governance\" (in-scope inventory for the rpa strategy and governance control (from rpa platform (uipath/automation anywhere/power automate))), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"RPA strategy and governance\" control for Robotic Process Automation (RPA) Governance at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the Robotic Process Automation (RPA) Governance policy/standard and flag every item where the \"RPA strategy and governance\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the rpa strategy and governance control (from RPA platform (UiPath/Automation Anywhere/Power Automate)) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live RPA platform (UiPath/Automation Anywhere/Power Automate) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. RPA platform (UiPath/Automation Anywhere/Power Automate) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from RPA platform (UiPath/Automation Anywhere/Power Automate); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Robotic Process Automation (RPA) Governance: \"RPA strategy and governance\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the Robotic Process Automation (RPA) Governance policy/standard and flag every item where the \"RPA strategy and governance\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- rpa-governance_inventory.json   (in-scope items — In-scope inventory for the rpa strategy and governance control (from RPA platform (UiPath/Automation Anywhere/Power Automate)))\n- rpa-governance_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
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
            "Re-implement the control on the auditor's behalf",
            "Increase the number of tools the team uses",
            "Replace the system owner's judgement entirely",
            "Obtain evidence that the rpa strategy and governance control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run or own the control."
        },
        {
          "id": "rpa-01-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"RPA strategy and governance\" matter to the broader Robotic Process Automation (RPA) Governance posture?",
          "options": [
            "It is relevant solely for marketing",
            "It has no effect once a firewall exists",
            "It is a control other Robotic Process Automation (RPA) Governance controls depend on, so a gap here propagates risk into everything scoped to it",
            "It only affects documentation aesthetics"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure undermines the controls layered on top."
        },
        {
          "id": "rpa-01-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"RPA strategy and governance\" control?",
          "options": [
            "The vendor's marketing datasheet",
            "The In-scope inventory for the rpa strategy and governance control (from RPA platform (UiPath/Automation Anywhere/Power Automate)) reconciled against policy, plus the resulting findings working paper",
            "A verbal assurance from the team lead",
            "A screenshot of the login page"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — exports reconciled to policy, not assertions."
        },
        {
          "id": "rpa-01-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where would an auditor pull the evidence for \"RPA strategy and governance\"?",
          "options": [
            "RPA platform (UiPath/Automation Anywhere/Power Automate) (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., RPA platform (UiPath/Automation Anywhere/Power Automate)) via read-only access."
        },
        {
          "id": "rpa-01-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"RPA strategy and governance\"?",
          "options": [
            "The external auditor",
            "No one — it is ownerless",
            "The end customer",
            "Automation CoE (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "Automation CoE owns the control data; the auditor independently verifies it."
        },
        {
          "id": "rpa-01-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"RPA strategy and governance\", which part stays with the human auditor?",
          "options": [
            "Nothing; the agent decides materiality",
            "Only installing dependencies",
            "Setting policy/thresholds, reviewing findings, and signing the opinion — the agent gathers and correlates evidence",
            "Issuing the final audit opinion autonomously"
          ],
          "correctIndex": 2,
          "explanation": "Agents automate evidence gathering at machine speed; humans own policy and judgement."
        },
        {
          "id": "rpa-01-q7",
          "type": "Tooling",
          "challenge": "Read-only",
          "text": "Why must the MCP server for this module be read-only?",
          "options": [
            "So it can run without any credentials",
            "Audit tooling must never alter the audited environment; read-only guarantees running it cannot change state",
            "Read-only servers are simply faster",
            "MCP cannot perform writes"
          ],
          "correctIndex": 1,
          "explanation": "Non-interference is a hard requirement for audit evidence-gathering tools."
        },
        {
          "id": "rpa-01-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"RPA strategy and governance\", which is a realistic reportable finding?",
          "options": [
            "In-scope items where the rpa strategy and governance control is not applied, mis-scoped, or has drifted from the approved baseline",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the rpa strategy and governance control is not applied, mis-scoped, or has drifted from the approved baseline"
        },
        {
          "id": "rpa-01-q9",
          "type": "Deliverable",
          "challenge": "The opinion",
          "text": "How does the coverage report escalate its opinion?",
          "options": [
            "It is always PASS to avoid conflict",
            "Randomly each run",
            "Only the asset count is reported, never an opinion",
            "PASS → EXCEPTIONS → MATERIAL GAP as the count and severity of gaps increase"
          ],
          "correctIndex": 3,
          "explanation": "The opinion is a function of how many in-scope items fail and how severely."
        },
        {
          "id": "rpa-01-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"RPA strategy and governance\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators never look at this domain",
            "It only matters for public data",
            "The control protects regulated/sensitive data or the systems that process it, so a gap carries compliance and privacy exposure",
            "Privacy is unrelated to technical controls"
          ],
          "correctIndex": 2,
          "explanation": "Security and privacy share the same controls; a technical gap is often also a compliance gap."
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
    "xp": 100,
    "easeScore": 6,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Legal and regulatory compliance\" control for Robotic Process Automation (RPA) Governance is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the Robotic Process Automation (RPA) Governance policy/standard and flag every item where the \"Legal and regulatory compliance\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Robotic Process Automation (RPA) Governance systems of record (RPA platform (UiPath/Automation Anywhere/Power Automate); Bot credential vault; Bot orchestration + logs) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the legal and regulatory compliance control (from RPA platform (UiPath/Automation Anywhere/Power Automate))",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "RPA platform (UiPath/Automation Anywhere/Power Automate)",
        "Bot credential vault",
        "Bot orchestration + logs",
        "Version control for bots"
      ],
      "dataOwner": [
        "Automation CoE",
        "Bot/process owners",
        "Security engineering",
        "Internal audit"
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
      "tagline": "Auditing \"Legal and regulatory compliance\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the legal and regulatory compliance control (from RPA platform (UiPath/Automation Anywhere/Power Automate))) with read-only agents, run the test against policy, and issue a defensible opinion on the Robotic Process Automation (RPA) Governance control.",
      "year": 2025,
      "overview": [
        "The \"Legal and regulatory compliance\" sub-process is one of the controls an auditor must verify for Robotic Process Automation (RPA) Governance. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the legal and regulatory compliance control (from RPA platform (UiPath/Automation Anywhere/Power Automate)), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here RPA platform (UiPath/Automation Anywhere/Power Automate), Bot credential vault, Bot orchestration + logs — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the Robotic Process Automation (RPA) Governance policy/standard and flag every item where the \"Legal and regulatory compliance\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `02_legal_and_regulatory_compliance_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from RPA platform (UiPath/Automation Anywhere/Power Automate) and Bot credential vault (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
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
            "sub": "pull RPA platform (UiPath/Automation Anywhere/Power Automate) · Bot credential vault",
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
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the legal and regulatory compliance control (from RPA platform (UiPath/Automation Anywhere/Power Automate)).",
        "The test: Reconcile the in-scope inventory against the Robotic Process Automation (RPA) Governance policy/standard and flag every item where the \"Legal and regulatory compliance\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (RPA platform (UiPath/Automation Anywhere/Power Automate), Bot credential vault, Bot orchestration + logs) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the legal and regulatory compliance control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "ISACA — Auditing RPA",
          "url": "https://www.isaca.org/"
        },
        {
          "title": "NIST SP 800-53 — AC/AU families",
          "url": "https://csrc.nist.gov/projects/risk-management/sp800-53-controls"
        },
        {
          "title": "OWASP — automation/credential guidance",
          "url": "https://owasp.org/"
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
          "description": "Runnable read-only MCP server: gathers the Robotic Process Automation (RPA) Governance evidence for \"Legal and regulatory compliance\" (in-scope inventory for the legal and regulatory compliance control (from rpa platform (uipath/automation anywhere/power automate))), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Legal and regulatory compliance\" control for Robotic Process Automation (RPA) Governance at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the Robotic Process Automation (RPA) Governance policy/standard and flag every item where the \"Legal and regulatory compliance\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the legal and regulatory compliance control (from RPA platform (UiPath/Automation Anywhere/Power Automate)) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live RPA platform (UiPath/Automation Anywhere/Power Automate) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. RPA platform (UiPath/Automation Anywhere/Power Automate) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from RPA platform (UiPath/Automation Anywhere/Power Automate); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Robotic Process Automation (RPA) Governance: \"Legal and regulatory compliance\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the Robotic Process Automation (RPA) Governance policy/standard and flag every item where the \"Legal and regulatory compliance\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- rpa-governance_inventory.json   (in-scope items — In-scope inventory for the legal and regulatory compliance control (from RPA platform (UiPath/Automation Anywhere/Power Automate)))\n- rpa-governance_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
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
            "Re-implement the control on the auditor's behalf",
            "Increase the number of tools the team uses",
            "Replace the system owner's judgement entirely",
            "Obtain evidence that the legal and regulatory compliance control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run or own the control."
        },
        {
          "id": "rpa-02-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Legal and regulatory compliance\" matter to the broader Robotic Process Automation (RPA) Governance posture?",
          "options": [
            "It is relevant solely for marketing",
            "It has no effect once a firewall exists",
            "It is a control other Robotic Process Automation (RPA) Governance controls depend on, so a gap here propagates risk into everything scoped to it",
            "It only affects documentation aesthetics"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure undermines the controls layered on top."
        },
        {
          "id": "rpa-02-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Legal and regulatory compliance\" control?",
          "options": [
            "The vendor's marketing datasheet",
            "The In-scope inventory for the legal and regulatory compliance control (from RPA platform (UiPath/Automation Anywhere/Power Automate)) reconciled against policy, plus the resulting findings working paper",
            "A verbal assurance from the team lead",
            "A screenshot of the login page"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — exports reconciled to policy, not assertions."
        },
        {
          "id": "rpa-02-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where would an auditor pull the evidence for \"Legal and regulatory compliance\"?",
          "options": [
            "RPA platform (UiPath/Automation Anywhere/Power Automate) (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., RPA platform (UiPath/Automation Anywhere/Power Automate)) via read-only access."
        },
        {
          "id": "rpa-02-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Legal and regulatory compliance\"?",
          "options": [
            "The external auditor",
            "No one — it is ownerless",
            "The end customer",
            "Automation CoE (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "Automation CoE owns the control data; the auditor independently verifies it."
        },
        {
          "id": "rpa-02-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Legal and regulatory compliance\", which part stays with the human auditor?",
          "options": [
            "Nothing; the agent decides materiality",
            "Only installing dependencies",
            "Setting policy/thresholds, reviewing findings, and signing the opinion — the agent gathers and correlates evidence",
            "Issuing the final audit opinion autonomously"
          ],
          "correctIndex": 2,
          "explanation": "Agents automate evidence gathering at machine speed; humans own policy and judgement."
        },
        {
          "id": "rpa-02-q7",
          "type": "Tooling",
          "challenge": "Read-only",
          "text": "Why must the MCP server for this module be read-only?",
          "options": [
            "So it can run without any credentials",
            "Audit tooling must never alter the audited environment; read-only guarantees running it cannot change state",
            "Read-only servers are simply faster",
            "MCP cannot perform writes"
          ],
          "correctIndex": 1,
          "explanation": "Non-interference is a hard requirement for audit evidence-gathering tools."
        },
        {
          "id": "rpa-02-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Legal and regulatory compliance\", which is a realistic reportable finding?",
          "options": [
            "In-scope items where the legal and regulatory compliance control is not applied, mis-scoped, or has drifted from the approved baseline",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the legal and regulatory compliance control is not applied, mis-scoped, or has drifted from the approved baseline"
        },
        {
          "id": "rpa-02-q9",
          "type": "Deliverable",
          "challenge": "The opinion",
          "text": "How does the coverage report escalate its opinion?",
          "options": [
            "It is always PASS to avoid conflict",
            "Randomly each run",
            "Only the asset count is reported, never an opinion",
            "PASS → EXCEPTIONS → MATERIAL GAP as the count and severity of gaps increase"
          ],
          "correctIndex": 3,
          "explanation": "The opinion is a function of how many in-scope items fail and how severely."
        },
        {
          "id": "rpa-02-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Legal and regulatory compliance\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators never look at this domain",
            "It only matters for public data",
            "The control protects regulated/sensitive data or the systems that process it, so a gap carries compliance and privacy exposure",
            "Privacy is unrelated to technical controls"
          ],
          "correctIndex": 2,
          "explanation": "Security and privacy share the same controls; a technical gap is often also a compliance gap."
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
    "xp": 100,
    "easeScore": 7,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Dev, test, deploy cycle\" control for Robotic Process Automation (RPA) Governance is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the Robotic Process Automation (RPA) Governance policy/standard and flag every item where the \"Dev, test, deploy cycle\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Robotic Process Automation (RPA) Governance systems of record (RPA platform (UiPath/Automation Anywhere/Power Automate); Bot credential vault; Bot orchestration + logs) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the dev, test, deploy cycle control (from RPA platform (UiPath/Automation Anywhere/Power Automate))",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "RPA platform (UiPath/Automation Anywhere/Power Automate)",
        "Bot credential vault",
        "Bot orchestration + logs",
        "Version control for bots"
      ],
      "dataOwner": [
        "Automation CoE",
        "Bot/process owners",
        "Security engineering",
        "Internal audit"
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
      "tagline": "Auditing \"Dev, test, deploy cycle\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the dev, test, deploy cycle control (from RPA platform (UiPath/Automation Anywhere/Power Automate))) with read-only agents, run the test against policy, and issue a defensible opinion on the Robotic Process Automation (RPA) Governance control.",
      "year": 2025,
      "overview": [
        "The \"Dev, test, deploy cycle\" sub-process is one of the controls an auditor must verify for Robotic Process Automation (RPA) Governance. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the dev, test, deploy cycle control (from RPA platform (UiPath/Automation Anywhere/Power Automate)), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here RPA platform (UiPath/Automation Anywhere/Power Automate), Bot credential vault, Bot orchestration + logs — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the Robotic Process Automation (RPA) Governance policy/standard and flag every item where the \"Dev, test, deploy cycle\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `03_dev_test_deploy_cycle_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from RPA platform (UiPath/Automation Anywhere/Power Automate) and Bot credential vault (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
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
            "sub": "pull RPA platform (UiPath/Automation Anywhere/Power Automate) · Bot credential vault",
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
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the dev, test, deploy cycle control (from RPA platform (UiPath/Automation Anywhere/Power Automate)).",
        "The test: Reconcile the in-scope inventory against the Robotic Process Automation (RPA) Governance policy/standard and flag every item where the \"Dev, test, deploy cycle\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (RPA platform (UiPath/Automation Anywhere/Power Automate), Bot credential vault, Bot orchestration + logs) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the dev, test, deploy cycle control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "ISACA — Auditing RPA",
          "url": "https://www.isaca.org/"
        },
        {
          "title": "NIST SP 800-53 — AC/AU families",
          "url": "https://csrc.nist.gov/projects/risk-management/sp800-53-controls"
        },
        {
          "title": "OWASP — automation/credential guidance",
          "url": "https://owasp.org/"
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
          "description": "Runnable read-only MCP server: gathers the Robotic Process Automation (RPA) Governance evidence for \"Dev, test, deploy cycle\" (in-scope inventory for the dev, test, deploy cycle control (from rpa platform (uipath/automation anywhere/power automate))), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Dev, test, deploy cycle\" control for Robotic Process Automation (RPA) Governance at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the Robotic Process Automation (RPA) Governance policy/standard and flag every item where the \"Dev, test, deploy cycle\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the dev, test, deploy cycle control (from RPA platform (UiPath/Automation Anywhere/Power Automate)) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live RPA platform (UiPath/Automation Anywhere/Power Automate) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. RPA platform (UiPath/Automation Anywhere/Power Automate) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from RPA platform (UiPath/Automation Anywhere/Power Automate); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Robotic Process Automation (RPA) Governance: \"Dev, test, deploy cycle\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the Robotic Process Automation (RPA) Governance policy/standard and flag every item where the \"Dev, test, deploy cycle\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- rpa-governance_inventory.json   (in-scope items — In-scope inventory for the dev, test, deploy cycle control (from RPA platform (UiPath/Automation Anywhere/Power Automate)))\n- rpa-governance_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
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
            "Re-implement the control on the auditor's behalf",
            "Increase the number of tools the team uses",
            "Replace the system owner's judgement entirely",
            "Obtain evidence that the dev, test, deploy cycle control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run or own the control."
        },
        {
          "id": "rpa-03-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Dev, test, deploy cycle\" matter to the broader Robotic Process Automation (RPA) Governance posture?",
          "options": [
            "It is relevant solely for marketing",
            "It has no effect once a firewall exists",
            "It is a control other Robotic Process Automation (RPA) Governance controls depend on, so a gap here propagates risk into everything scoped to it",
            "It only affects documentation aesthetics"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure undermines the controls layered on top."
        },
        {
          "id": "rpa-03-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Dev, test, deploy cycle\" control?",
          "options": [
            "The vendor's marketing datasheet",
            "The In-scope inventory for the dev, test, deploy cycle control (from RPA platform (UiPath/Automation Anywhere/Power Automate)) reconciled against policy, plus the resulting findings working paper",
            "A verbal assurance from the team lead",
            "A screenshot of the login page"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — exports reconciled to policy, not assertions."
        },
        {
          "id": "rpa-03-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where would an auditor pull the evidence for \"Dev, test, deploy cycle\"?",
          "options": [
            "RPA platform (UiPath/Automation Anywhere/Power Automate) (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., RPA platform (UiPath/Automation Anywhere/Power Automate)) via read-only access."
        },
        {
          "id": "rpa-03-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Dev, test, deploy cycle\"?",
          "options": [
            "The external auditor",
            "No one — it is ownerless",
            "The end customer",
            "Automation CoE (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "Automation CoE owns the control data; the auditor independently verifies it."
        },
        {
          "id": "rpa-03-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Dev, test, deploy cycle\", which part stays with the human auditor?",
          "options": [
            "Nothing; the agent decides materiality",
            "Only installing dependencies",
            "Setting policy/thresholds, reviewing findings, and signing the opinion — the agent gathers and correlates evidence",
            "Issuing the final audit opinion autonomously"
          ],
          "correctIndex": 2,
          "explanation": "Agents automate evidence gathering at machine speed; humans own policy and judgement."
        },
        {
          "id": "rpa-03-q7",
          "type": "Tooling",
          "challenge": "Read-only",
          "text": "Why must the MCP server for this module be read-only?",
          "options": [
            "So it can run without any credentials",
            "Audit tooling must never alter the audited environment; read-only guarantees running it cannot change state",
            "Read-only servers are simply faster",
            "MCP cannot perform writes"
          ],
          "correctIndex": 1,
          "explanation": "Non-interference is a hard requirement for audit evidence-gathering tools."
        },
        {
          "id": "rpa-03-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Dev, test, deploy cycle\", which is a realistic reportable finding?",
          "options": [
            "In-scope items where the dev, test, deploy cycle control is not applied, mis-scoped, or has drifted from the approved baseline",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the dev, test, deploy cycle control is not applied, mis-scoped, or has drifted from the approved baseline"
        },
        {
          "id": "rpa-03-q9",
          "type": "Deliverable",
          "challenge": "The opinion",
          "text": "How does the coverage report escalate its opinion?",
          "options": [
            "It is always PASS to avoid conflict",
            "Randomly each run",
            "Only the asset count is reported, never an opinion",
            "PASS → EXCEPTIONS → MATERIAL GAP as the count and severity of gaps increase"
          ],
          "correctIndex": 3,
          "explanation": "The opinion is a function of how many in-scope items fail and how severely."
        },
        {
          "id": "rpa-03-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Dev, test, deploy cycle\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators never look at this domain",
            "It only matters for public data",
            "The control protects regulated/sensitive data or the systems that process it, so a gap carries compliance and privacy exposure",
            "Privacy is unrelated to technical controls"
          ],
          "correctIndex": 2,
          "explanation": "Security and privacy share the same controls; a technical gap is often also a compliance gap."
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
    "xp": 100,
    "easeScore": 5,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Change mgmt and version control\" control for Robotic Process Automation (RPA) Governance is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the Robotic Process Automation (RPA) Governance policy/standard and flag every item where the \"Change mgmt and version control\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Robotic Process Automation (RPA) Governance systems of record (RPA platform (UiPath/Automation Anywhere/Power Automate); Bot credential vault; Bot orchestration + logs) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the change mgmt and version control control (from RPA platform (UiPath/Automation Anywhere/Power Automate))",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "RPA platform (UiPath/Automation Anywhere/Power Automate)",
        "Bot credential vault",
        "Bot orchestration + logs",
        "Version control for bots"
      ],
      "dataOwner": [
        "Automation CoE",
        "Bot/process owners",
        "Security engineering",
        "Internal audit"
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
      "tagline": "Auditing \"Change mgmt and version control\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the change mgmt and version control control (from RPA platform (UiPath/Automation Anywhere/Power Automate))) with read-only agents, run the test against policy, and issue a defensible opinion on the Robotic Process Automation (RPA) Governance control.",
      "year": 2025,
      "overview": [
        "The \"Change mgmt and version control\" sub-process is one of the controls an auditor must verify for Robotic Process Automation (RPA) Governance. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the change mgmt and version control control (from RPA platform (UiPath/Automation Anywhere/Power Automate)), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here RPA platform (UiPath/Automation Anywhere/Power Automate), Bot credential vault, Bot orchestration + logs — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the Robotic Process Automation (RPA) Governance policy/standard and flag every item where the \"Change mgmt and version control\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `04_change_mgmt_and_version_control_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from RPA platform (UiPath/Automation Anywhere/Power Automate) and Bot credential vault (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
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
            "sub": "pull RPA platform (UiPath/Automation Anywhere/Power Automate) · Bot credential vault",
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
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the change mgmt and version control control (from RPA platform (UiPath/Automation Anywhere/Power Automate)).",
        "The test: Reconcile the in-scope inventory against the Robotic Process Automation (RPA) Governance policy/standard and flag every item where the \"Change mgmt and version control\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (RPA platform (UiPath/Automation Anywhere/Power Automate), Bot credential vault, Bot orchestration + logs) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the change mgmt and version control control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "ISACA — Auditing RPA",
          "url": "https://www.isaca.org/"
        },
        {
          "title": "NIST SP 800-53 — AC/AU families",
          "url": "https://csrc.nist.gov/projects/risk-management/sp800-53-controls"
        },
        {
          "title": "OWASP — automation/credential guidance",
          "url": "https://owasp.org/"
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
          "description": "Runnable read-only MCP server: gathers the Robotic Process Automation (RPA) Governance evidence for \"Change mgmt and version control\" (in-scope inventory for the change mgmt and version control control (from rpa platform (uipath/automation anywhere/power automate))), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Change mgmt and version control\" control for Robotic Process Automation (RPA) Governance at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the Robotic Process Automation (RPA) Governance policy/standard and flag every item where the \"Change mgmt and version control\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the change mgmt and version control control (from RPA platform (UiPath/Automation Anywhere/Power Automate)) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live RPA platform (UiPath/Automation Anywhere/Power Automate) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. RPA platform (UiPath/Automation Anywhere/Power Automate) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from RPA platform (UiPath/Automation Anywhere/Power Automate); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Robotic Process Automation (RPA) Governance: \"Change mgmt and version control\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the Robotic Process Automation (RPA) Governance policy/standard and flag every item where the \"Change mgmt and version control\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- rpa-governance_inventory.json   (in-scope items — In-scope inventory for the change mgmt and version control control (from RPA platform (UiPath/Automation Anywhere/Power Automate)))\n- rpa-governance_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
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
            "Re-implement the control on the auditor's behalf",
            "Increase the number of tools the team uses",
            "Replace the system owner's judgement entirely",
            "Obtain evidence that the change mgmt and version control control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run or own the control."
        },
        {
          "id": "rpa-04-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Change mgmt and version control\" matter to the broader Robotic Process Automation (RPA) Governance posture?",
          "options": [
            "It is relevant solely for marketing",
            "It has no effect once a firewall exists",
            "It is a control other Robotic Process Automation (RPA) Governance controls depend on, so a gap here propagates risk into everything scoped to it",
            "It only affects documentation aesthetics"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure undermines the controls layered on top."
        },
        {
          "id": "rpa-04-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Change mgmt and version control\" control?",
          "options": [
            "The vendor's marketing datasheet",
            "The In-scope inventory for the change mgmt and version control control (from RPA platform (UiPath/Automation Anywhere/Power Automate)) reconciled against policy, plus the resulting findings working paper",
            "A verbal assurance from the team lead",
            "A screenshot of the login page"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — exports reconciled to policy, not assertions."
        },
        {
          "id": "rpa-04-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where would an auditor pull the evidence for \"Change mgmt and version control\"?",
          "options": [
            "RPA platform (UiPath/Automation Anywhere/Power Automate) (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., RPA platform (UiPath/Automation Anywhere/Power Automate)) via read-only access."
        },
        {
          "id": "rpa-04-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Change mgmt and version control\"?",
          "options": [
            "The external auditor",
            "No one — it is ownerless",
            "The end customer",
            "Automation CoE (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "Automation CoE owns the control data; the auditor independently verifies it."
        },
        {
          "id": "rpa-04-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Change mgmt and version control\", which part stays with the human auditor?",
          "options": [
            "Nothing; the agent decides materiality",
            "Only installing dependencies",
            "Setting policy/thresholds, reviewing findings, and signing the opinion — the agent gathers and correlates evidence",
            "Issuing the final audit opinion autonomously"
          ],
          "correctIndex": 2,
          "explanation": "Agents automate evidence gathering at machine speed; humans own policy and judgement."
        },
        {
          "id": "rpa-04-q7",
          "type": "Tooling",
          "challenge": "Read-only",
          "text": "Why must the MCP server for this module be read-only?",
          "options": [
            "So it can run without any credentials",
            "Audit tooling must never alter the audited environment; read-only guarantees running it cannot change state",
            "Read-only servers are simply faster",
            "MCP cannot perform writes"
          ],
          "correctIndex": 1,
          "explanation": "Non-interference is a hard requirement for audit evidence-gathering tools."
        },
        {
          "id": "rpa-04-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Change mgmt and version control\", which is a realistic reportable finding?",
          "options": [
            "In-scope items where the change mgmt and version control control is not applied, mis-scoped, or has drifted from the approved baseline",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the change mgmt and version control control is not applied, mis-scoped, or has drifted from the approved baseline"
        },
        {
          "id": "rpa-04-q9",
          "type": "Deliverable",
          "challenge": "The opinion",
          "text": "How does the coverage report escalate its opinion?",
          "options": [
            "It is always PASS to avoid conflict",
            "Randomly each run",
            "Only the asset count is reported, never an opinion",
            "PASS → EXCEPTIONS → MATERIAL GAP as the count and severity of gaps increase"
          ],
          "correctIndex": 3,
          "explanation": "The opinion is a function of how many in-scope items fail and how severely."
        },
        {
          "id": "rpa-04-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Change mgmt and version control\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators never look at this domain",
            "It only matters for public data",
            "The control protects regulated/sensitive data or the systems that process it, so a gap carries compliance and privacy exposure",
            "Privacy is unrelated to technical controls"
          ],
          "correctIndex": 2,
          "explanation": "Security and privacy share the same controls; a technical gap is often also a compliance gap."
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
    "xp": 100,
    "easeScore": 6,
    "valueScore": 9,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Access management\" control for Robotic Process Automation (RPA) Governance is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the Robotic Process Automation (RPA) Governance policy/standard and flag every item where the \"Access management\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Robotic Process Automation (RPA) Governance systems of record (RPA platform (UiPath/Automation Anywhere/Power Automate); Bot credential vault; Bot orchestration + logs) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the access management control (from RPA platform (UiPath/Automation Anywhere/Power Automate))",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "RPA platform (UiPath/Automation Anywhere/Power Automate)",
        "Bot credential vault",
        "Bot orchestration + logs",
        "Version control for bots"
      ],
      "dataOwner": [
        "Automation CoE",
        "Bot/process owners",
        "Security engineering",
        "Internal audit"
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
      "tagline": "Auditing \"Access management\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the access management control (from RPA platform (UiPath/Automation Anywhere/Power Automate))) with read-only agents, run the test against policy, and issue a defensible opinion on the Robotic Process Automation (RPA) Governance control.",
      "year": 2025,
      "overview": [
        "The \"Access management\" sub-process is one of the controls an auditor must verify for Robotic Process Automation (RPA) Governance. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the access management control (from RPA platform (UiPath/Automation Anywhere/Power Automate)), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here RPA platform (UiPath/Automation Anywhere/Power Automate), Bot credential vault, Bot orchestration + logs — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the Robotic Process Automation (RPA) Governance policy/standard and flag every item where the \"Access management\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `05_access_management_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from RPA platform (UiPath/Automation Anywhere/Power Automate) and Bot credential vault (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
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
            "sub": "pull RPA platform (UiPath/Automation Anywhere/Power Automate) · Bot credential vault",
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
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the access management control (from RPA platform (UiPath/Automation Anywhere/Power Automate)).",
        "The test: Reconcile the in-scope inventory against the Robotic Process Automation (RPA) Governance policy/standard and flag every item where the \"Access management\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (RPA platform (UiPath/Automation Anywhere/Power Automate), Bot credential vault, Bot orchestration + logs) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the access management control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "ISACA — Auditing RPA",
          "url": "https://www.isaca.org/"
        },
        {
          "title": "NIST SP 800-53 — AC/AU families",
          "url": "https://csrc.nist.gov/projects/risk-management/sp800-53-controls"
        },
        {
          "title": "OWASP — automation/credential guidance",
          "url": "https://owasp.org/"
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
          "description": "Runnable read-only MCP server: gathers the Robotic Process Automation (RPA) Governance evidence for \"Access management\" (in-scope inventory for the access management control (from rpa platform (uipath/automation anywhere/power automate))), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Access management\" control for Robotic Process Automation (RPA) Governance at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the Robotic Process Automation (RPA) Governance policy/standard and flag every item where the \"Access management\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the access management control (from RPA platform (UiPath/Automation Anywhere/Power Automate)) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live RPA platform (UiPath/Automation Anywhere/Power Automate) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. RPA platform (UiPath/Automation Anywhere/Power Automate) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from RPA platform (UiPath/Automation Anywhere/Power Automate); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Robotic Process Automation (RPA) Governance: \"Access management\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the Robotic Process Automation (RPA) Governance policy/standard and flag every item where the \"Access management\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- rpa-governance_inventory.json   (in-scope items — In-scope inventory for the access management control (from RPA platform (UiPath/Automation Anywhere/Power Automate)))\n- rpa-governance_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
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
            "Re-implement the control on the auditor's behalf",
            "Increase the number of tools the team uses",
            "Replace the system owner's judgement entirely",
            "Obtain evidence that the access management control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run or own the control."
        },
        {
          "id": "rpa-05-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Access management\" matter to the broader Robotic Process Automation (RPA) Governance posture?",
          "options": [
            "It is relevant solely for marketing",
            "It has no effect once a firewall exists",
            "It is a control other Robotic Process Automation (RPA) Governance controls depend on, so a gap here propagates risk into everything scoped to it",
            "It only affects documentation aesthetics"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure undermines the controls layered on top."
        },
        {
          "id": "rpa-05-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Access management\" control?",
          "options": [
            "The vendor's marketing datasheet",
            "The In-scope inventory for the access management control (from RPA platform (UiPath/Automation Anywhere/Power Automate)) reconciled against policy, plus the resulting findings working paper",
            "A verbal assurance from the team lead",
            "A screenshot of the login page"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — exports reconciled to policy, not assertions."
        },
        {
          "id": "rpa-05-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where would an auditor pull the evidence for \"Access management\"?",
          "options": [
            "RPA platform (UiPath/Automation Anywhere/Power Automate) (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., RPA platform (UiPath/Automation Anywhere/Power Automate)) via read-only access."
        },
        {
          "id": "rpa-05-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Access management\"?",
          "options": [
            "The external auditor",
            "No one — it is ownerless",
            "The end customer",
            "Automation CoE (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "Automation CoE owns the control data; the auditor independently verifies it."
        },
        {
          "id": "rpa-05-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Access management\", which part stays with the human auditor?",
          "options": [
            "Nothing; the agent decides materiality",
            "Only installing dependencies",
            "Setting policy/thresholds, reviewing findings, and signing the opinion — the agent gathers and correlates evidence",
            "Issuing the final audit opinion autonomously"
          ],
          "correctIndex": 2,
          "explanation": "Agents automate evidence gathering at machine speed; humans own policy and judgement."
        },
        {
          "id": "rpa-05-q7",
          "type": "Tooling",
          "challenge": "Read-only",
          "text": "Why must the MCP server for this module be read-only?",
          "options": [
            "So it can run without any credentials",
            "Audit tooling must never alter the audited environment; read-only guarantees running it cannot change state",
            "Read-only servers are simply faster",
            "MCP cannot perform writes"
          ],
          "correctIndex": 1,
          "explanation": "Non-interference is a hard requirement for audit evidence-gathering tools."
        },
        {
          "id": "rpa-05-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Access management\", which is a realistic reportable finding?",
          "options": [
            "In-scope items where the access management control is not applied, mis-scoped, or has drifted from the approved baseline",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the access management control is not applied, mis-scoped, or has drifted from the approved baseline"
        },
        {
          "id": "rpa-05-q9",
          "type": "Deliverable",
          "challenge": "The opinion",
          "text": "How does the coverage report escalate its opinion?",
          "options": [
            "It is always PASS to avoid conflict",
            "Randomly each run",
            "Only the asset count is reported, never an opinion",
            "PASS → EXCEPTIONS → MATERIAL GAP as the count and severity of gaps increase"
          ],
          "correctIndex": 3,
          "explanation": "The opinion is a function of how many in-scope items fail and how severely."
        },
        {
          "id": "rpa-05-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Access management\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators never look at this domain",
            "It only matters for public data",
            "The control protects regulated/sensitive data or the systems that process it, so a gap carries compliance and privacy exposure",
            "Privacy is unrelated to technical controls"
          ],
          "correctIndex": 2,
          "explanation": "Security and privacy share the same controls; a technical gap is often also a compliance gap."
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
    "xp": 100,
    "easeScore": 7,
    "valueScore": 9,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Data handling and encryption\" control for Robotic Process Automation (RPA) Governance is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the Robotic Process Automation (RPA) Governance policy/standard and flag every item where the \"Data handling and encryption\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Robotic Process Automation (RPA) Governance systems of record (RPA platform (UiPath/Automation Anywhere/Power Automate); Bot credential vault; Bot orchestration + logs) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the data handling and encryption control (from RPA platform (UiPath/Automation Anywhere/Power Automate))",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "RPA platform (UiPath/Automation Anywhere/Power Automate)",
        "Bot credential vault",
        "Bot orchestration + logs",
        "Version control for bots"
      ],
      "dataOwner": [
        "Automation CoE",
        "Bot/process owners",
        "Security engineering",
        "Internal audit"
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
      "tagline": "Auditing \"Data handling and encryption\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the data handling and encryption control (from RPA platform (UiPath/Automation Anywhere/Power Automate))) with read-only agents, run the test against policy, and issue a defensible opinion on the Robotic Process Automation (RPA) Governance control.",
      "year": 2025,
      "overview": [
        "The \"Data handling and encryption\" sub-process is one of the controls an auditor must verify for Robotic Process Automation (RPA) Governance. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the data handling and encryption control (from RPA platform (UiPath/Automation Anywhere/Power Automate)), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here RPA platform (UiPath/Automation Anywhere/Power Automate), Bot credential vault, Bot orchestration + logs — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the Robotic Process Automation (RPA) Governance policy/standard and flag every item where the \"Data handling and encryption\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `06_data_handling_and_encryption_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from RPA platform (UiPath/Automation Anywhere/Power Automate) and Bot credential vault (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
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
            "sub": "pull RPA platform (UiPath/Automation Anywhere/Power Automate) · Bot credential vault",
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
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the data handling and encryption control (from RPA platform (UiPath/Automation Anywhere/Power Automate)).",
        "The test: Reconcile the in-scope inventory against the Robotic Process Automation (RPA) Governance policy/standard and flag every item where the \"Data handling and encryption\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (RPA platform (UiPath/Automation Anywhere/Power Automate), Bot credential vault, Bot orchestration + logs) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the data handling and encryption control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "ISACA — Auditing RPA",
          "url": "https://www.isaca.org/"
        },
        {
          "title": "NIST SP 800-53 — AC/AU families",
          "url": "https://csrc.nist.gov/projects/risk-management/sp800-53-controls"
        },
        {
          "title": "OWASP — automation/credential guidance",
          "url": "https://owasp.org/"
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
          "description": "Runnable read-only MCP server: gathers the Robotic Process Automation (RPA) Governance evidence for \"Data handling and encryption\" (in-scope inventory for the data handling and encryption control (from rpa platform (uipath/automation anywhere/power automate))), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Data handling and encryption\" control for Robotic Process Automation (RPA) Governance at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the Robotic Process Automation (RPA) Governance policy/standard and flag every item where the \"Data handling and encryption\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the data handling and encryption control (from RPA platform (UiPath/Automation Anywhere/Power Automate)) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live RPA platform (UiPath/Automation Anywhere/Power Automate) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. RPA platform (UiPath/Automation Anywhere/Power Automate) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from RPA platform (UiPath/Automation Anywhere/Power Automate); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Robotic Process Automation (RPA) Governance: \"Data handling and encryption\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the Robotic Process Automation (RPA) Governance policy/standard and flag every item where the \"Data handling and encryption\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- rpa-governance_inventory.json   (in-scope items — In-scope inventory for the data handling and encryption control (from RPA platform (UiPath/Automation Anywhere/Power Automate)))\n- rpa-governance_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
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
            "Re-implement the control on the auditor's behalf",
            "Increase the number of tools the team uses",
            "Replace the system owner's judgement entirely",
            "Obtain evidence that the data handling and encryption control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run or own the control."
        },
        {
          "id": "rpa-06-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Data handling and encryption\" matter to the broader Robotic Process Automation (RPA) Governance posture?",
          "options": [
            "It is relevant solely for marketing",
            "It has no effect once a firewall exists",
            "It is a control other Robotic Process Automation (RPA) Governance controls depend on, so a gap here propagates risk into everything scoped to it",
            "It only affects documentation aesthetics"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure undermines the controls layered on top."
        },
        {
          "id": "rpa-06-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Data handling and encryption\" control?",
          "options": [
            "The vendor's marketing datasheet",
            "The In-scope inventory for the data handling and encryption control (from RPA platform (UiPath/Automation Anywhere/Power Automate)) reconciled against policy, plus the resulting findings working paper",
            "A verbal assurance from the team lead",
            "A screenshot of the login page"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — exports reconciled to policy, not assertions."
        },
        {
          "id": "rpa-06-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where would an auditor pull the evidence for \"Data handling and encryption\"?",
          "options": [
            "RPA platform (UiPath/Automation Anywhere/Power Automate) (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., RPA platform (UiPath/Automation Anywhere/Power Automate)) via read-only access."
        },
        {
          "id": "rpa-06-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Data handling and encryption\"?",
          "options": [
            "The external auditor",
            "No one — it is ownerless",
            "The end customer",
            "Automation CoE (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "Automation CoE owns the control data; the auditor independently verifies it."
        },
        {
          "id": "rpa-06-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Data handling and encryption\", which part stays with the human auditor?",
          "options": [
            "Nothing; the agent decides materiality",
            "Only installing dependencies",
            "Setting policy/thresholds, reviewing findings, and signing the opinion — the agent gathers and correlates evidence",
            "Issuing the final audit opinion autonomously"
          ],
          "correctIndex": 2,
          "explanation": "Agents automate evidence gathering at machine speed; humans own policy and judgement."
        },
        {
          "id": "rpa-06-q7",
          "type": "Tooling",
          "challenge": "Read-only",
          "text": "Why must the MCP server for this module be read-only?",
          "options": [
            "So it can run without any credentials",
            "Audit tooling must never alter the audited environment; read-only guarantees running it cannot change state",
            "Read-only servers are simply faster",
            "MCP cannot perform writes"
          ],
          "correctIndex": 1,
          "explanation": "Non-interference is a hard requirement for audit evidence-gathering tools."
        },
        {
          "id": "rpa-06-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Data handling and encryption\", which is a realistic reportable finding?",
          "options": [
            "In-scope items where the data handling and encryption control is not applied, mis-scoped, or has drifted from the approved baseline",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the data handling and encryption control is not applied, mis-scoped, or has drifted from the approved baseline"
        },
        {
          "id": "rpa-06-q9",
          "type": "Deliverable",
          "challenge": "The opinion",
          "text": "How does the coverage report escalate its opinion?",
          "options": [
            "It is always PASS to avoid conflict",
            "Randomly each run",
            "Only the asset count is reported, never an opinion",
            "PASS → EXCEPTIONS → MATERIAL GAP as the count and severity of gaps increase"
          ],
          "correctIndex": 3,
          "explanation": "The opinion is a function of how many in-scope items fail and how severely."
        },
        {
          "id": "rpa-06-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Data handling and encryption\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators never look at this domain",
            "It only matters for public data",
            "The control protects regulated/sensitive data or the systems that process it, so a gap carries compliance and privacy exposure",
            "Privacy is unrelated to technical controls"
          ],
          "correctIndex": 2,
          "explanation": "Security and privacy share the same controls; a technical gap is often also a compliance gap."
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
    "xp": 100,
    "easeScore": 5,
    "valueScore": 9,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Infra hardening and vuln mgmt\" control for Robotic Process Automation (RPA) Governance is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the Robotic Process Automation (RPA) Governance policy/standard and flag every item where the \"Infra hardening and vuln mgmt\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Robotic Process Automation (RPA) Governance systems of record (RPA platform (UiPath/Automation Anywhere/Power Automate); Bot credential vault; Bot orchestration + logs) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the infra hardening and vuln mgmt control (from RPA platform (UiPath/Automation Anywhere/Power Automate))",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "RPA platform (UiPath/Automation Anywhere/Power Automate)",
        "Bot credential vault",
        "Bot orchestration + logs",
        "Version control for bots"
      ],
      "dataOwner": [
        "Automation CoE",
        "Bot/process owners",
        "Security engineering",
        "Internal audit"
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
      "tagline": "Auditing \"Infra hardening and vuln mgmt\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the infra hardening and vuln mgmt control (from RPA platform (UiPath/Automation Anywhere/Power Automate))) with read-only agents, run the test against policy, and issue a defensible opinion on the Robotic Process Automation (RPA) Governance control.",
      "year": 2025,
      "overview": [
        "The \"Infra hardening and vuln mgmt\" sub-process is one of the controls an auditor must verify for Robotic Process Automation (RPA) Governance. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the infra hardening and vuln mgmt control (from RPA platform (UiPath/Automation Anywhere/Power Automate)), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here RPA platform (UiPath/Automation Anywhere/Power Automate), Bot credential vault, Bot orchestration + logs — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the Robotic Process Automation (RPA) Governance policy/standard and flag every item where the \"Infra hardening and vuln mgmt\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `07_infra_hardening_and_vuln_mgmt_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from RPA platform (UiPath/Automation Anywhere/Power Automate) and Bot credential vault (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
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
            "sub": "pull RPA platform (UiPath/Automation Anywhere/Power Automate) · Bot credential vault",
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
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the infra hardening and vuln mgmt control (from RPA platform (UiPath/Automation Anywhere/Power Automate)).",
        "The test: Reconcile the in-scope inventory against the Robotic Process Automation (RPA) Governance policy/standard and flag every item where the \"Infra hardening and vuln mgmt\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (RPA platform (UiPath/Automation Anywhere/Power Automate), Bot credential vault, Bot orchestration + logs) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the infra hardening and vuln mgmt control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "ISACA — Auditing RPA",
          "url": "https://www.isaca.org/"
        },
        {
          "title": "NIST SP 800-53 — AC/AU families",
          "url": "https://csrc.nist.gov/projects/risk-management/sp800-53-controls"
        },
        {
          "title": "OWASP — automation/credential guidance",
          "url": "https://owasp.org/"
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
          "description": "Runnable read-only MCP server: gathers the Robotic Process Automation (RPA) Governance evidence for \"Infra hardening and vuln mgmt\" (in-scope inventory for the infra hardening and vuln mgmt control (from rpa platform (uipath/automation anywhere/power automate))), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Infra hardening and vuln mgmt\" control for Robotic Process Automation (RPA) Governance at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the Robotic Process Automation (RPA) Governance policy/standard and flag every item where the \"Infra hardening and vuln mgmt\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the infra hardening and vuln mgmt control (from RPA platform (UiPath/Automation Anywhere/Power Automate)) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live RPA platform (UiPath/Automation Anywhere/Power Automate) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. RPA platform (UiPath/Automation Anywhere/Power Automate) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from RPA platform (UiPath/Automation Anywhere/Power Automate); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Robotic Process Automation (RPA) Governance: \"Infra hardening and vuln mgmt\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the Robotic Process Automation (RPA) Governance policy/standard and flag every item where the \"Infra hardening and vuln mgmt\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- rpa-governance_inventory.json   (in-scope items — In-scope inventory for the infra hardening and vuln mgmt control (from RPA platform (UiPath/Automation Anywhere/Power Automate)))\n- rpa-governance_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
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
            "Re-implement the control on the auditor's behalf",
            "Increase the number of tools the team uses",
            "Replace the system owner's judgement entirely",
            "Obtain evidence that the infra hardening and vuln mgmt control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run or own the control."
        },
        {
          "id": "rpa-07-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Infra hardening and vuln mgmt\" matter to the broader Robotic Process Automation (RPA) Governance posture?",
          "options": [
            "It is relevant solely for marketing",
            "It has no effect once a firewall exists",
            "It is a control other Robotic Process Automation (RPA) Governance controls depend on, so a gap here propagates risk into everything scoped to it",
            "It only affects documentation aesthetics"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure undermines the controls layered on top."
        },
        {
          "id": "rpa-07-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Infra hardening and vuln mgmt\" control?",
          "options": [
            "The vendor's marketing datasheet",
            "The In-scope inventory for the infra hardening and vuln mgmt control (from RPA platform (UiPath/Automation Anywhere/Power Automate)) reconciled against policy, plus the resulting findings working paper",
            "A verbal assurance from the team lead",
            "A screenshot of the login page"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — exports reconciled to policy, not assertions."
        },
        {
          "id": "rpa-07-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where would an auditor pull the evidence for \"Infra hardening and vuln mgmt\"?",
          "options": [
            "RPA platform (UiPath/Automation Anywhere/Power Automate) (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., RPA platform (UiPath/Automation Anywhere/Power Automate)) via read-only access."
        },
        {
          "id": "rpa-07-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Infra hardening and vuln mgmt\"?",
          "options": [
            "The external auditor",
            "No one — it is ownerless",
            "The end customer",
            "Automation CoE (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "Automation CoE owns the control data; the auditor independently verifies it."
        },
        {
          "id": "rpa-07-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Infra hardening and vuln mgmt\", which part stays with the human auditor?",
          "options": [
            "Nothing; the agent decides materiality",
            "Only installing dependencies",
            "Setting policy/thresholds, reviewing findings, and signing the opinion — the agent gathers and correlates evidence",
            "Issuing the final audit opinion autonomously"
          ],
          "correctIndex": 2,
          "explanation": "Agents automate evidence gathering at machine speed; humans own policy and judgement."
        },
        {
          "id": "rpa-07-q7",
          "type": "Tooling",
          "challenge": "Read-only",
          "text": "Why must the MCP server for this module be read-only?",
          "options": [
            "So it can run without any credentials",
            "Audit tooling must never alter the audited environment; read-only guarantees running it cannot change state",
            "Read-only servers are simply faster",
            "MCP cannot perform writes"
          ],
          "correctIndex": 1,
          "explanation": "Non-interference is a hard requirement for audit evidence-gathering tools."
        },
        {
          "id": "rpa-07-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Infra hardening and vuln mgmt\", which is a realistic reportable finding?",
          "options": [
            "In-scope items where the infra hardening and vuln mgmt control is not applied, mis-scoped, or has drifted from the approved baseline",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the infra hardening and vuln mgmt control is not applied, mis-scoped, or has drifted from the approved baseline"
        },
        {
          "id": "rpa-07-q9",
          "type": "Deliverable",
          "challenge": "The opinion",
          "text": "How does the coverage report escalate its opinion?",
          "options": [
            "It is always PASS to avoid conflict",
            "Randomly each run",
            "Only the asset count is reported, never an opinion",
            "PASS → EXCEPTIONS → MATERIAL GAP as the count and severity of gaps increase"
          ],
          "correctIndex": 3,
          "explanation": "The opinion is a function of how many in-scope items fail and how severely."
        },
        {
          "id": "rpa-07-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Infra hardening and vuln mgmt\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators never look at this domain",
            "It only matters for public data",
            "The control protects regulated/sensitive data or the systems that process it, so a gap carries compliance and privacy exposure",
            "Privacy is unrelated to technical controls"
          ],
          "correctIndex": 2,
          "explanation": "Security and privacy share the same controls; a technical gap is often also a compliance gap."
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
    "xp": 100,
    "easeScore": 6,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Business Continuity (RPA)\" control for Robotic Process Automation (RPA) Governance is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the Robotic Process Automation (RPA) Governance policy/standard and flag every item where the \"Business Continuity (RPA)\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Robotic Process Automation (RPA) Governance systems of record (RPA platform (UiPath/Automation Anywhere/Power Automate); Bot credential vault; Bot orchestration + logs) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the business continuity (rpa) control (from RPA platform (UiPath/Automation Anywhere/Power Automate))",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "RPA platform (UiPath/Automation Anywhere/Power Automate)",
        "Bot credential vault",
        "Bot orchestration + logs",
        "Version control for bots"
      ],
      "dataOwner": [
        "Automation CoE",
        "Bot/process owners",
        "Security engineering",
        "Internal audit"
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
      "tagline": "Auditing \"Business Continuity (RPA)\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the business continuity (rpa) control (from RPA platform (UiPath/Automation Anywhere/Power Automate))) with read-only agents, run the test against policy, and issue a defensible opinion on the Robotic Process Automation (RPA) Governance control.",
      "year": 2025,
      "overview": [
        "The \"Business Continuity (RPA)\" sub-process is one of the controls an auditor must verify for Robotic Process Automation (RPA) Governance. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the business continuity (rpa) control (from RPA platform (UiPath/Automation Anywhere/Power Automate)), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here RPA platform (UiPath/Automation Anywhere/Power Automate), Bot credential vault, Bot orchestration + logs — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the Robotic Process Automation (RPA) Governance policy/standard and flag every item where the \"Business Continuity (RPA)\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `08_business_continuity_rpa_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from RPA platform (UiPath/Automation Anywhere/Power Automate) and Bot credential vault (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
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
            "sub": "pull RPA platform (UiPath/Automation Anywhere/Power Automate) · Bot credential vault",
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
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the business continuity (rpa) control (from RPA platform (UiPath/Automation Anywhere/Power Automate)).",
        "The test: Reconcile the in-scope inventory against the Robotic Process Automation (RPA) Governance policy/standard and flag every item where the \"Business Continuity (RPA)\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (RPA platform (UiPath/Automation Anywhere/Power Automate), Bot credential vault, Bot orchestration + logs) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the business continuity (rpa) control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "ISACA — Auditing RPA",
          "url": "https://www.isaca.org/"
        },
        {
          "title": "NIST SP 800-53 — AC/AU families",
          "url": "https://csrc.nist.gov/projects/risk-management/sp800-53-controls"
        },
        {
          "title": "OWASP — automation/credential guidance",
          "url": "https://owasp.org/"
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
          "description": "Runnable read-only MCP server: gathers the Robotic Process Automation (RPA) Governance evidence for \"Business Continuity (RPA)\" (in-scope inventory for the business continuity (rpa) control (from rpa platform (uipath/automation anywhere/power automate))), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Business Continuity (RPA)\" control for Robotic Process Automation (RPA) Governance at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the Robotic Process Automation (RPA) Governance policy/standard and flag every item where the \"Business Continuity (RPA)\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the business continuity (rpa) control (from RPA platform (UiPath/Automation Anywhere/Power Automate)) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live RPA platform (UiPath/Automation Anywhere/Power Automate) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. RPA platform (UiPath/Automation Anywhere/Power Automate) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from RPA platform (UiPath/Automation Anywhere/Power Automate); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Robotic Process Automation (RPA) Governance: \"Business Continuity (RPA)\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the Robotic Process Automation (RPA) Governance policy/standard and flag every item where the \"Business Continuity (RPA)\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- rpa-governance_inventory.json   (in-scope items — In-scope inventory for the business continuity (rpa) control (from RPA platform (UiPath/Automation Anywhere/Power Automate)))\n- rpa-governance_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
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
            "Re-implement the control on the auditor's behalf",
            "Increase the number of tools the team uses",
            "Replace the system owner's judgement entirely",
            "Obtain evidence that the business continuity (rpa) control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run or own the control."
        },
        {
          "id": "rpa-08-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Business Continuity (RPA)\" matter to the broader Robotic Process Automation (RPA) Governance posture?",
          "options": [
            "It is relevant solely for marketing",
            "It has no effect once a firewall exists",
            "It is a control other Robotic Process Automation (RPA) Governance controls depend on, so a gap here propagates risk into everything scoped to it",
            "It only affects documentation aesthetics"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure undermines the controls layered on top."
        },
        {
          "id": "rpa-08-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Business Continuity (RPA)\" control?",
          "options": [
            "The vendor's marketing datasheet",
            "The In-scope inventory for the business continuity (rpa) control (from RPA platform (UiPath/Automation Anywhere/Power Automate)) reconciled against policy, plus the resulting findings working paper",
            "A verbal assurance from the team lead",
            "A screenshot of the login page"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — exports reconciled to policy, not assertions."
        },
        {
          "id": "rpa-08-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where would an auditor pull the evidence for \"Business Continuity (RPA)\"?",
          "options": [
            "RPA platform (UiPath/Automation Anywhere/Power Automate) (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., RPA platform (UiPath/Automation Anywhere/Power Automate)) via read-only access."
        },
        {
          "id": "rpa-08-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Business Continuity (RPA)\"?",
          "options": [
            "The external auditor",
            "No one — it is ownerless",
            "The end customer",
            "Automation CoE (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "Automation CoE owns the control data; the auditor independently verifies it."
        },
        {
          "id": "rpa-08-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Business Continuity (RPA)\", which part stays with the human auditor?",
          "options": [
            "Nothing; the agent decides materiality",
            "Only installing dependencies",
            "Setting policy/thresholds, reviewing findings, and signing the opinion — the agent gathers and correlates evidence",
            "Issuing the final audit opinion autonomously"
          ],
          "correctIndex": 2,
          "explanation": "Agents automate evidence gathering at machine speed; humans own policy and judgement."
        },
        {
          "id": "rpa-08-q7",
          "type": "Tooling",
          "challenge": "Read-only",
          "text": "Why must the MCP server for this module be read-only?",
          "options": [
            "So it can run without any credentials",
            "Audit tooling must never alter the audited environment; read-only guarantees running it cannot change state",
            "Read-only servers are simply faster",
            "MCP cannot perform writes"
          ],
          "correctIndex": 1,
          "explanation": "Non-interference is a hard requirement for audit evidence-gathering tools."
        },
        {
          "id": "rpa-08-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Business Continuity (RPA)\", which is a realistic reportable finding?",
          "options": [
            "In-scope items where the business continuity (rpa) control is not applied, mis-scoped, or has drifted from the approved baseline",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the business continuity (rpa) control is not applied, mis-scoped, or has drifted from the approved baseline"
        },
        {
          "id": "rpa-08-q9",
          "type": "Deliverable",
          "challenge": "The opinion",
          "text": "How does the coverage report escalate its opinion?",
          "options": [
            "It is always PASS to avoid conflict",
            "Randomly each run",
            "Only the asset count is reported, never an opinion",
            "PASS → EXCEPTIONS → MATERIAL GAP as the count and severity of gaps increase"
          ],
          "correctIndex": 3,
          "explanation": "The opinion is a function of how many in-scope items fail and how severely."
        },
        {
          "id": "rpa-08-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Business Continuity (RPA)\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators never look at this domain",
            "It only matters for public data",
            "The control protects regulated/sensitive data or the systems that process it, so a gap carries compliance and privacy exposure",
            "Privacy is unrelated to technical controls"
          ],
          "correctIndex": 2,
          "explanation": "Security and privacy share the same controls; a technical gap is often also a compliance gap."
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
    "xp": 100,
    "easeScore": 7,
    "valueScore": 9,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Third-party / OSS contribution\" control for Robotic Process Automation (RPA) Governance is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the Robotic Process Automation (RPA) Governance policy/standard and flag every item where the \"Third-party / OSS contribution\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Robotic Process Automation (RPA) Governance systems of record (RPA platform (UiPath/Automation Anywhere/Power Automate); Bot credential vault; Bot orchestration + logs) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the third-party / oss contribution control (from RPA platform (UiPath/Automation Anywhere/Power Automate))",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "RPA platform (UiPath/Automation Anywhere/Power Automate)",
        "Bot credential vault",
        "Bot orchestration + logs",
        "Version control for bots"
      ],
      "dataOwner": [
        "Automation CoE",
        "Bot/process owners",
        "Security engineering",
        "Internal audit"
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
      "tagline": "Auditing \"Third-party / OSS contribution\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the third-party / oss contribution control (from RPA platform (UiPath/Automation Anywhere/Power Automate))) with read-only agents, run the test against policy, and issue a defensible opinion on the Robotic Process Automation (RPA) Governance control.",
      "year": 2025,
      "overview": [
        "The \"Third-party / OSS contribution\" sub-process is one of the controls an auditor must verify for Robotic Process Automation (RPA) Governance. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the third-party / oss contribution control (from RPA platform (UiPath/Automation Anywhere/Power Automate)), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here RPA platform (UiPath/Automation Anywhere/Power Automate), Bot credential vault, Bot orchestration + logs — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the Robotic Process Automation (RPA) Governance policy/standard and flag every item where the \"Third-party / OSS contribution\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `09_third_party_oss_contribution_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from RPA platform (UiPath/Automation Anywhere/Power Automate) and Bot credential vault (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
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
            "sub": "pull RPA platform (UiPath/Automation Anywhere/Power Automate) · Bot credential vault",
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
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the third-party / oss contribution control (from RPA platform (UiPath/Automation Anywhere/Power Automate)).",
        "The test: Reconcile the in-scope inventory against the Robotic Process Automation (RPA) Governance policy/standard and flag every item where the \"Third-party / OSS contribution\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (RPA platform (UiPath/Automation Anywhere/Power Automate), Bot credential vault, Bot orchestration + logs) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the third-party / oss contribution control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "ISACA — Auditing RPA",
          "url": "https://www.isaca.org/"
        },
        {
          "title": "NIST SP 800-53 — AC/AU families",
          "url": "https://csrc.nist.gov/projects/risk-management/sp800-53-controls"
        },
        {
          "title": "OWASP — automation/credential guidance",
          "url": "https://owasp.org/"
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
          "description": "Runnable read-only MCP server: gathers the Robotic Process Automation (RPA) Governance evidence for \"Third-party / OSS contribution\" (in-scope inventory for the third-party / oss contribution control (from rpa platform (uipath/automation anywhere/power automate))), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Third-party / OSS contribution\" control for Robotic Process Automation (RPA) Governance at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the Robotic Process Automation (RPA) Governance policy/standard and flag every item where the \"Third-party / OSS contribution\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the third-party / oss contribution control (from RPA platform (UiPath/Automation Anywhere/Power Automate)) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live RPA platform (UiPath/Automation Anywhere/Power Automate) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. RPA platform (UiPath/Automation Anywhere/Power Automate) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from RPA platform (UiPath/Automation Anywhere/Power Automate); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Robotic Process Automation (RPA) Governance: \"Third-party / OSS contribution\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the Robotic Process Automation (RPA) Governance policy/standard and flag every item where the \"Third-party / OSS contribution\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- rpa-governance_inventory.json   (in-scope items — In-scope inventory for the third-party / oss contribution control (from RPA platform (UiPath/Automation Anywhere/Power Automate)))\n- rpa-governance_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
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
            "Re-implement the control on the auditor's behalf",
            "Increase the number of tools the team uses",
            "Replace the system owner's judgement entirely",
            "Obtain evidence that the third-party / oss contribution control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run or own the control."
        },
        {
          "id": "rpa-09-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Third-party / OSS contribution\" matter to the broader Robotic Process Automation (RPA) Governance posture?",
          "options": [
            "It is relevant solely for marketing",
            "It has no effect once a firewall exists",
            "It is a control other Robotic Process Automation (RPA) Governance controls depend on, so a gap here propagates risk into everything scoped to it",
            "It only affects documentation aesthetics"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure undermines the controls layered on top."
        },
        {
          "id": "rpa-09-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Third-party / OSS contribution\" control?",
          "options": [
            "The vendor's marketing datasheet",
            "The In-scope inventory for the third-party / oss contribution control (from RPA platform (UiPath/Automation Anywhere/Power Automate)) reconciled against policy, plus the resulting findings working paper",
            "A verbal assurance from the team lead",
            "A screenshot of the login page"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — exports reconciled to policy, not assertions."
        },
        {
          "id": "rpa-09-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where would an auditor pull the evidence for \"Third-party / OSS contribution\"?",
          "options": [
            "RPA platform (UiPath/Automation Anywhere/Power Automate) (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., RPA platform (UiPath/Automation Anywhere/Power Automate)) via read-only access."
        },
        {
          "id": "rpa-09-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Third-party / OSS contribution\"?",
          "options": [
            "The external auditor",
            "No one — it is ownerless",
            "The end customer",
            "Automation CoE (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "Automation CoE owns the control data; the auditor independently verifies it."
        },
        {
          "id": "rpa-09-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Third-party / OSS contribution\", which part stays with the human auditor?",
          "options": [
            "Nothing; the agent decides materiality",
            "Only installing dependencies",
            "Setting policy/thresholds, reviewing findings, and signing the opinion — the agent gathers and correlates evidence",
            "Issuing the final audit opinion autonomously"
          ],
          "correctIndex": 2,
          "explanation": "Agents automate evidence gathering at machine speed; humans own policy and judgement."
        },
        {
          "id": "rpa-09-q7",
          "type": "Tooling",
          "challenge": "Read-only",
          "text": "Why must the MCP server for this module be read-only?",
          "options": [
            "So it can run without any credentials",
            "Audit tooling must never alter the audited environment; read-only guarantees running it cannot change state",
            "Read-only servers are simply faster",
            "MCP cannot perform writes"
          ],
          "correctIndex": 1,
          "explanation": "Non-interference is a hard requirement for audit evidence-gathering tools."
        },
        {
          "id": "rpa-09-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Third-party / OSS contribution\", which is a realistic reportable finding?",
          "options": [
            "In-scope items where the third-party / oss contribution control is not applied, mis-scoped, or has drifted from the approved baseline",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the third-party / oss contribution control is not applied, mis-scoped, or has drifted from the approved baseline"
        },
        {
          "id": "rpa-09-q9",
          "type": "Deliverable",
          "challenge": "The opinion",
          "text": "How does the coverage report escalate its opinion?",
          "options": [
            "It is always PASS to avoid conflict",
            "Randomly each run",
            "Only the asset count is reported, never an opinion",
            "PASS → EXCEPTIONS → MATERIAL GAP as the count and severity of gaps increase"
          ],
          "correctIndex": 3,
          "explanation": "The opinion is a function of how many in-scope items fail and how severely."
        },
        {
          "id": "rpa-09-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Third-party / OSS contribution\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators never look at this domain",
            "It only matters for public data",
            "The control protects regulated/sensitive data or the systems that process it, so a gap carries compliance and privacy exposure",
            "Privacy is unrelated to technical controls"
          ],
          "correctIndex": 2,
          "explanation": "Security and privacy share the same controls; a technical gap is often also a compliance gap."
        }
      ]
    }
  }
];

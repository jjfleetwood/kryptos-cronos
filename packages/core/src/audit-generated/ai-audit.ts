import type { EpochConfig, StageConfig } from "../types";

export const aiAuditEpoch: EpochConfig = {
  "id": "ai-audit",
  "name": "Artificial Intelligence (AI)",
  "subtitle": "Agentic technical & privacy audit — Artificial Intelligence (AI)",
  "description": "Audit Artificial Intelligence (AI) end to end with a read-only agent fleet: each sub-process is a module that teaches the control as a repeatable agentic workflow with downloadable MCP tooling, a CTF, and a 10-question quiz.",
  "emoji": "🧠",
  "color": "Purple",
  "unlocked": true
};

export const aiAuditStages: StageConfig[] = [
  {
    "epochId": "ai-audit",
    "id": "aig-01",
    "order": 1,
    "title": "AI governance and strategic planning",
    "subtitle": "Agentic technical & privacy audit of the ai governance and strategic planning control",
    "category": "cybersecurity",
    "xp": 100,
    "easeScore": 5,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"AI governance and strategic planning\" control for Artificial Intelligence (AI) is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the Artificial Intelligence (AI) policy/standard and flag every item where the \"AI governance and strategic planning\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Artificial Intelligence (AI) systems of record (Model registry + lineage; Eval / red-team harness; AI gateway + guardrails) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the ai governance and strategic planning control (from Model registry + lineage)",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "Model registry + lineage",
        "Eval / red-team harness",
        "AI gateway + guardrails",
        "Model + prompt monitoring"
      ],
      "dataOwner": [
        "AI/ML engineering",
        "Responsible-AI / governance",
        "Security (AI red team)",
        "Data governance"
      ],
      "scoring": {
        "ease": "EASE 5/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Artificial Intelligence (AI) controls."
      }
    },
    "badge": {
      "id": "aig-01-badge",
      "name": "Artificial Intelligence (AI) Auditor",
      "emoji": "🧠"
    },
    "wonder": {
      "name": "AI governance and strategic planning",
      "location": "Artificial Intelligence (AI)",
      "era": "Present Day",
      "emoji": "🧠"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"AI governance and strategic planning\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the ai governance and strategic planning control (from Model registry + lineage)) with read-only agents, run the test against policy, and issue a defensible opinion on the Artificial Intelligence (AI) control.",
      "year": 2025,
      "overview": [
        "The \"AI governance and strategic planning\" sub-process is one of the controls an auditor must verify for Artificial Intelligence (AI). The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the ai governance and strategic planning control (from Model registry + lineage), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Model registry + lineage, Eval / red-team harness, AI gateway + guardrails — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the Artificial Intelligence (AI) policy/standard and flag every item where the \"AI governance and strategic planning\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `01_ai_governance_and_strategic_planning_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Model registry + lineage and Eval / red-team harness (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 01_ai_governance_and_strategic_planning_mcp.py` to expose it to your agent — or `python 01_ai_governance_and_strategic_planning_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Prompt injection and the leaky model",
        "when": "Recurring",
        "where": "Production AI systems",
        "impact": "An AI system with weak guardrails leaks data, executes injected instructions, or is manipulated — and without monitoring no one notices.",
        "body": [
          "AI introduces new failure modes: prompt injection, training-data poisoning, model/output manipulation, and sensitive-data leakage through generations.",
          "Auditors verify AI governance, model testing/validation, data governance, adversarial defense, AI infra/access security, and operational monitoring."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Artificial Intelligence (AI) scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull Model registry + lineage · Eval / red-team harness",
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
          "year": 2023,
          "event": "OWASP LLM Top 10 codifies prompt injection + data leakage risks",
          "highlight": true
        },
        {
          "year": 2024,
          "event": "Agentic-AI incidents elevate tool-use + autonomy as audit subjects"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"AI governance and strategic planning\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the ai governance and strategic planning control (from Model registry + lineage).",
        "The test: Reconcile the in-scope inventory against the Artificial Intelligence (AI) policy/standard and flag every item where the \"AI governance and strategic planning\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (Model registry + lineage, Eval / red-team harness, AI gateway + guardrails) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the ai governance and strategic planning control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "NIST AI RMF + Generative AI Profile",
          "url": "https://www.nist.gov/itl/ai-risk-management-framework"
        },
        {
          "title": "OWASP Top 10 for LLM Applications",
          "url": "https://owasp.org/www-project-top-10-for-large-language-model-applications/"
        },
        {
          "title": "MITRE ATLAS",
          "url": "https://atlas.mitre.org/"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "01_ai_governance_and_strategic_planning_mcp.py",
          "url": "/audit-code/ai-audit/01_ai_governance_and_strategic_planning_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Artificial Intelligence (AI) evidence for \"AI governance and strategic planning\" (in-scope inventory for the ai governance and strategic planning control (from model registry + lineage)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"AI governance and strategic planning\" control for Artificial Intelligence (AI) at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the Artificial Intelligence (AI) policy/standard and flag every item where the \"AI governance and strategic planning\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the ai governance and strategic planning control (from Model registry + lineage) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Model registry + lineage APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Model registry + lineage gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Model registry + lineage; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Artificial Intelligence (AI): \"AI governance and strategic planning\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the Artificial Intelligence (AI) policy/standard and flag every item where the \"AI governance and strategic planning\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- ai-audit_inventory.json   (in-scope items — In-scope inventory for the ai governance and strategic planning control (from Model registry + lineage))\n- ai-audit_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"AI governance and strategic planning\",\n  \"domain\": \"Artificial Intelligence (AI)\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{aig_",
        "/evidence/ai-audit_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"AI/ML engineering\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"AI governance and strategic planning\" control must cover\n# fragment: ai_governance_strategic_",
        "/evidence/ai-audit_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "ai-audit_inventory.json",
            "isDir": false
          },
          {
            "name": "ai-audit_state.json",
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
          "value": "FLAG{aig_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/ai-audit_inventory.json",
          "value": "ai_governance_strategic_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/ai-audit_state.json",
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
          "id": "aig-01-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"AI governance and strategic planning\" sub-process of Artificial Intelligence (AI)?",
          "options": [
            "Re-implement the control on the auditor's behalf",
            "Increase the number of tools the team uses",
            "Replace the system owner's judgement entirely",
            "Obtain evidence that the ai governance and strategic planning control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run or own the control."
        },
        {
          "id": "aig-01-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"AI governance and strategic planning\" matter to the broader Artificial Intelligence (AI) posture?",
          "options": [
            "It is relevant solely for marketing",
            "It has no effect once a firewall exists",
            "It is a control other Artificial Intelligence (AI) controls depend on, so a gap here propagates risk into everything scoped to it",
            "It only affects documentation aesthetics"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure undermines the controls layered on top."
        },
        {
          "id": "aig-01-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"AI governance and strategic planning\" control?",
          "options": [
            "The vendor's marketing datasheet",
            "The In-scope inventory for the ai governance and strategic planning control (from Model registry + lineage) reconciled against policy, plus the resulting findings working paper",
            "A verbal assurance from the team lead",
            "A screenshot of the login page"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — exports reconciled to policy, not assertions."
        },
        {
          "id": "aig-01-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where would an auditor pull the evidence for \"AI governance and strategic planning\"?",
          "options": [
            "Model registry + lineage (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., Model registry + lineage) via read-only access."
        },
        {
          "id": "aig-01-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"AI governance and strategic planning\"?",
          "options": [
            "The external auditor",
            "No one — it is ownerless",
            "The end customer",
            "AI/ML engineering (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "AI/ML engineering owns the control data; the auditor independently verifies it."
        },
        {
          "id": "aig-01-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"AI governance and strategic planning\", which part stays with the human auditor?",
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
          "id": "aig-01-q7",
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
          "id": "aig-01-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"AI governance and strategic planning\", which is a realistic reportable finding?",
          "options": [
            "In-scope items where the ai governance and strategic planning control is not applied, mis-scoped, or has drifted from the approved baseline",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the ai governance and strategic planning control is not applied, mis-scoped, or has drifted from the approved baseline"
        },
        {
          "id": "aig-01-q9",
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
          "id": "aig-01-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"AI governance and strategic planning\" also serve privacy and regulatory goals?",
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
    "epochId": "ai-audit",
    "id": "aig-02",
    "order": 2,
    "title": "Legal, ethics, compliance",
    "subtitle": "Agentic technical & privacy audit of the legal, ethics, compliance control",
    "category": "cybersecurity",
    "xp": 100,
    "easeScore": 6,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Legal, ethics, compliance\" control for Artificial Intelligence (AI) is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the Artificial Intelligence (AI) policy/standard and flag every item where the \"Legal, ethics, compliance\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Artificial Intelligence (AI) systems of record (Model registry + lineage; Eval / red-team harness; AI gateway + guardrails) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the legal, ethics, compliance control (from Model registry + lineage)",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "Model registry + lineage",
        "Eval / red-team harness",
        "AI gateway + guardrails",
        "Model + prompt monitoring"
      ],
      "dataOwner": [
        "AI/ML engineering",
        "Responsible-AI / governance",
        "Security (AI red team)",
        "Data governance"
      ],
      "scoring": {
        "ease": "EASE 6/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Artificial Intelligence (AI) controls."
      }
    },
    "badge": {
      "id": "aig-02-badge",
      "name": "Artificial Intelligence (AI) Auditor",
      "emoji": "🧠"
    },
    "wonder": {
      "name": "Legal, ethics, compliance",
      "location": "Artificial Intelligence (AI)",
      "era": "Present Day",
      "emoji": "🧠"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Legal, ethics, compliance\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the legal, ethics, compliance control (from Model registry + lineage)) with read-only agents, run the test against policy, and issue a defensible opinion on the Artificial Intelligence (AI) control.",
      "year": 2025,
      "overview": [
        "The \"Legal, ethics, compliance\" sub-process is one of the controls an auditor must verify for Artificial Intelligence (AI). The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the legal, ethics, compliance control (from Model registry + lineage), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Model registry + lineage, Eval / red-team harness, AI gateway + guardrails — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the Artificial Intelligence (AI) policy/standard and flag every item where the \"Legal, ethics, compliance\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `02_legal_ethics_compliance_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Model registry + lineage and Eval / red-team harness (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 02_legal_ethics_compliance_mcp.py` to expose it to your agent — or `python 02_legal_ethics_compliance_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Prompt injection and the leaky model",
        "when": "Recurring",
        "where": "Production AI systems",
        "impact": "An AI system with weak guardrails leaks data, executes injected instructions, or is manipulated — and without monitoring no one notices.",
        "body": [
          "AI introduces new failure modes: prompt injection, training-data poisoning, model/output manipulation, and sensitive-data leakage through generations.",
          "Auditors verify AI governance, model testing/validation, data governance, adversarial defense, AI infra/access security, and operational monitoring."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Artificial Intelligence (AI) scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull Model registry + lineage · Eval / red-team harness",
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
          "year": 2023,
          "event": "OWASP LLM Top 10 codifies prompt injection + data leakage risks",
          "highlight": true
        },
        {
          "year": 2024,
          "event": "Agentic-AI incidents elevate tool-use + autonomy as audit subjects"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Legal, ethics, compliance\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the legal, ethics, compliance control (from Model registry + lineage).",
        "The test: Reconcile the in-scope inventory against the Artificial Intelligence (AI) policy/standard and flag every item where the \"Legal, ethics, compliance\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (Model registry + lineage, Eval / red-team harness, AI gateway + guardrails) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the legal, ethics, compliance control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "NIST AI RMF + Generative AI Profile",
          "url": "https://www.nist.gov/itl/ai-risk-management-framework"
        },
        {
          "title": "OWASP Top 10 for LLM Applications",
          "url": "https://owasp.org/www-project-top-10-for-large-language-model-applications/"
        },
        {
          "title": "MITRE ATLAS",
          "url": "https://atlas.mitre.org/"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "02_legal_ethics_compliance_mcp.py",
          "url": "/audit-code/ai-audit/02_legal_ethics_compliance_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Artificial Intelligence (AI) evidence for \"Legal, ethics, compliance\" (in-scope inventory for the legal, ethics, compliance control (from model registry + lineage)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Legal, ethics, compliance\" control for Artificial Intelligence (AI) at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the Artificial Intelligence (AI) policy/standard and flag every item where the \"Legal, ethics, compliance\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the legal, ethics, compliance control (from Model registry + lineage) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Model registry + lineage APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Model registry + lineage gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Model registry + lineage; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Artificial Intelligence (AI): \"Legal, ethics, compliance\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the Artificial Intelligence (AI) policy/standard and flag every item where the \"Legal, ethics, compliance\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- ai-audit_inventory.json   (in-scope items — In-scope inventory for the legal, ethics, compliance control (from Model registry + lineage))\n- ai-audit_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Legal, ethics, compliance\",\n  \"domain\": \"Artificial Intelligence (AI)\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{aig_",
        "/evidence/ai-audit_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"AI/ML engineering\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Legal, ethics, compliance\" control must cover\n# fragment: legal_ethics_compliance_",
        "/evidence/ai-audit_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "ai-audit_inventory.json",
            "isDir": false
          },
          {
            "name": "ai-audit_state.json",
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
          "value": "FLAG{aig_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/ai-audit_inventory.json",
          "value": "legal_ethics_compliance_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/ai-audit_state.json",
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
          "id": "aig-02-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Legal, ethics, compliance\" sub-process of Artificial Intelligence (AI)?",
          "options": [
            "Re-implement the control on the auditor's behalf",
            "Increase the number of tools the team uses",
            "Replace the system owner's judgement entirely",
            "Obtain evidence that the legal, ethics, compliance control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run or own the control."
        },
        {
          "id": "aig-02-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Legal, ethics, compliance\" matter to the broader Artificial Intelligence (AI) posture?",
          "options": [
            "It is relevant solely for marketing",
            "It has no effect once a firewall exists",
            "It is a control other Artificial Intelligence (AI) controls depend on, so a gap here propagates risk into everything scoped to it",
            "It only affects documentation aesthetics"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure undermines the controls layered on top."
        },
        {
          "id": "aig-02-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Legal, ethics, compliance\" control?",
          "options": [
            "The vendor's marketing datasheet",
            "The In-scope inventory for the legal, ethics, compliance control (from Model registry + lineage) reconciled against policy, plus the resulting findings working paper",
            "A verbal assurance from the team lead",
            "A screenshot of the login page"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — exports reconciled to policy, not assertions."
        },
        {
          "id": "aig-02-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where would an auditor pull the evidence for \"Legal, ethics, compliance\"?",
          "options": [
            "Model registry + lineage (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., Model registry + lineage) via read-only access."
        },
        {
          "id": "aig-02-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Legal, ethics, compliance\"?",
          "options": [
            "The external auditor",
            "No one — it is ownerless",
            "The end customer",
            "AI/ML engineering (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "AI/ML engineering owns the control data; the auditor independently verifies it."
        },
        {
          "id": "aig-02-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Legal, ethics, compliance\", which part stays with the human auditor?",
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
          "id": "aig-02-q7",
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
          "id": "aig-02-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Legal, ethics, compliance\", which is a realistic reportable finding?",
          "options": [
            "In-scope items where the legal, ethics, compliance control is not applied, mis-scoped, or has drifted from the approved baseline",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the legal, ethics, compliance control is not applied, mis-scoped, or has drifted from the approved baseline"
        },
        {
          "id": "aig-02-q9",
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
          "id": "aig-02-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Legal, ethics, compliance\" also serve privacy and regulatory goals?",
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
    "epochId": "ai-audit",
    "id": "aig-03",
    "order": 3,
    "title": "AI system architecture and dev",
    "subtitle": "Agentic technical & privacy audit of the ai system architecture and dev control",
    "category": "cybersecurity",
    "xp": 100,
    "easeScore": 5,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"AI system architecture and dev\" control for Artificial Intelligence (AI) is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the Artificial Intelligence (AI) policy/standard and flag every item where the \"AI system architecture and dev\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Artificial Intelligence (AI) systems of record (Model registry + lineage; Eval / red-team harness; AI gateway + guardrails) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the ai system architecture and dev control (from Model registry + lineage)",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "Model registry + lineage",
        "Eval / red-team harness",
        "AI gateway + guardrails",
        "Model + prompt monitoring"
      ],
      "dataOwner": [
        "AI/ML engineering",
        "Responsible-AI / governance",
        "Security (AI red team)",
        "Data governance"
      ],
      "scoring": {
        "ease": "EASE 5/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Artificial Intelligence (AI) controls."
      }
    },
    "badge": {
      "id": "aig-03-badge",
      "name": "Artificial Intelligence (AI) Auditor",
      "emoji": "🧠"
    },
    "wonder": {
      "name": "AI system architecture and dev",
      "location": "Artificial Intelligence (AI)",
      "era": "Present Day",
      "emoji": "🧠"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"AI system architecture and dev\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the ai system architecture and dev control (from Model registry + lineage)) with read-only agents, run the test against policy, and issue a defensible opinion on the Artificial Intelligence (AI) control.",
      "year": 2025,
      "overview": [
        "The \"AI system architecture and dev\" sub-process is one of the controls an auditor must verify for Artificial Intelligence (AI). The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the ai system architecture and dev control (from Model registry + lineage), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Model registry + lineage, Eval / red-team harness, AI gateway + guardrails — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the Artificial Intelligence (AI) policy/standard and flag every item where the \"AI system architecture and dev\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `03_ai_system_architecture_and_dev_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Model registry + lineage and Eval / red-team harness (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 03_ai_system_architecture_and_dev_mcp.py` to expose it to your agent — or `python 03_ai_system_architecture_and_dev_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Prompt injection and the leaky model",
        "when": "Recurring",
        "where": "Production AI systems",
        "impact": "An AI system with weak guardrails leaks data, executes injected instructions, or is manipulated — and without monitoring no one notices.",
        "body": [
          "AI introduces new failure modes: prompt injection, training-data poisoning, model/output manipulation, and sensitive-data leakage through generations.",
          "Auditors verify AI governance, model testing/validation, data governance, adversarial defense, AI infra/access security, and operational monitoring."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Artificial Intelligence (AI) scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull Model registry + lineage · Eval / red-team harness",
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
          "year": 2023,
          "event": "OWASP LLM Top 10 codifies prompt injection + data leakage risks",
          "highlight": true
        },
        {
          "year": 2024,
          "event": "Agentic-AI incidents elevate tool-use + autonomy as audit subjects"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"AI system architecture and dev\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the ai system architecture and dev control (from Model registry + lineage).",
        "The test: Reconcile the in-scope inventory against the Artificial Intelligence (AI) policy/standard and flag every item where the \"AI system architecture and dev\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (Model registry + lineage, Eval / red-team harness, AI gateway + guardrails) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the ai system architecture and dev control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "NIST AI RMF + Generative AI Profile",
          "url": "https://www.nist.gov/itl/ai-risk-management-framework"
        },
        {
          "title": "OWASP Top 10 for LLM Applications",
          "url": "https://owasp.org/www-project-top-10-for-large-language-model-applications/"
        },
        {
          "title": "MITRE ATLAS",
          "url": "https://atlas.mitre.org/"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "03_ai_system_architecture_and_dev_mcp.py",
          "url": "/audit-code/ai-audit/03_ai_system_architecture_and_dev_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Artificial Intelligence (AI) evidence for \"AI system architecture and dev\" (in-scope inventory for the ai system architecture and dev control (from model registry + lineage)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"AI system architecture and dev\" control for Artificial Intelligence (AI) at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the Artificial Intelligence (AI) policy/standard and flag every item where the \"AI system architecture and dev\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the ai system architecture and dev control (from Model registry + lineage) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Model registry + lineage APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Model registry + lineage gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Model registry + lineage; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Artificial Intelligence (AI): \"AI system architecture and dev\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the Artificial Intelligence (AI) policy/standard and flag every item where the \"AI system architecture and dev\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- ai-audit_inventory.json   (in-scope items — In-scope inventory for the ai system architecture and dev control (from Model registry + lineage))\n- ai-audit_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"AI system architecture and dev\",\n  \"domain\": \"Artificial Intelligence (AI)\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{aig_",
        "/evidence/ai-audit_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"AI/ML engineering\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"AI system architecture and dev\" control must cover\n# fragment: ai_system_architecture_",
        "/evidence/ai-audit_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "ai-audit_inventory.json",
            "isDir": false
          },
          {
            "name": "ai-audit_state.json",
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
          "value": "FLAG{aig_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/ai-audit_inventory.json",
          "value": "ai_system_architecture_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/ai-audit_state.json",
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
          "id": "aig-03-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"AI system architecture and dev\" sub-process of Artificial Intelligence (AI)?",
          "options": [
            "Re-implement the control on the auditor's behalf",
            "Increase the number of tools the team uses",
            "Replace the system owner's judgement entirely",
            "Obtain evidence that the ai system architecture and dev control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run or own the control."
        },
        {
          "id": "aig-03-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"AI system architecture and dev\" matter to the broader Artificial Intelligence (AI) posture?",
          "options": [
            "It is relevant solely for marketing",
            "It has no effect once a firewall exists",
            "It is a control other Artificial Intelligence (AI) controls depend on, so a gap here propagates risk into everything scoped to it",
            "It only affects documentation aesthetics"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure undermines the controls layered on top."
        },
        {
          "id": "aig-03-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"AI system architecture and dev\" control?",
          "options": [
            "The vendor's marketing datasheet",
            "The In-scope inventory for the ai system architecture and dev control (from Model registry + lineage) reconciled against policy, plus the resulting findings working paper",
            "A verbal assurance from the team lead",
            "A screenshot of the login page"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — exports reconciled to policy, not assertions."
        },
        {
          "id": "aig-03-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where would an auditor pull the evidence for \"AI system architecture and dev\"?",
          "options": [
            "Model registry + lineage (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., Model registry + lineage) via read-only access."
        },
        {
          "id": "aig-03-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"AI system architecture and dev\"?",
          "options": [
            "The external auditor",
            "No one — it is ownerless",
            "The end customer",
            "AI/ML engineering (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "AI/ML engineering owns the control data; the auditor independently verifies it."
        },
        {
          "id": "aig-03-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"AI system architecture and dev\", which part stays with the human auditor?",
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
          "id": "aig-03-q7",
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
          "id": "aig-03-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"AI system architecture and dev\", which is a realistic reportable finding?",
          "options": [
            "In-scope items where the ai system architecture and dev control is not applied, mis-scoped, or has drifted from the approved baseline",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the ai system architecture and dev control is not applied, mis-scoped, or has drifted from the approved baseline"
        },
        {
          "id": "aig-03-q9",
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
          "id": "aig-03-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"AI system architecture and dev\" also serve privacy and regulatory goals?",
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
    "epochId": "ai-audit",
    "id": "aig-04",
    "order": 4,
    "title": "Model testing and validation",
    "subtitle": "Agentic technical & privacy audit of the model testing and validation control",
    "category": "cybersecurity",
    "xp": 100,
    "easeScore": 5,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Model testing and validation\" control for Artificial Intelligence (AI) is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the Artificial Intelligence (AI) policy/standard and flag every item where the \"Model testing and validation\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Artificial Intelligence (AI) systems of record (Model registry + lineage; Eval / red-team harness; AI gateway + guardrails) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the model testing and validation control (from Model registry + lineage)",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "Model registry + lineage",
        "Eval / red-team harness",
        "AI gateway + guardrails",
        "Model + prompt monitoring"
      ],
      "dataOwner": [
        "AI/ML engineering",
        "Responsible-AI / governance",
        "Security (AI red team)",
        "Data governance"
      ],
      "scoring": {
        "ease": "EASE 5/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Artificial Intelligence (AI) controls."
      }
    },
    "badge": {
      "id": "aig-04-badge",
      "name": "Artificial Intelligence (AI) Auditor",
      "emoji": "🧠"
    },
    "wonder": {
      "name": "Model testing and validation",
      "location": "Artificial Intelligence (AI)",
      "era": "Present Day",
      "emoji": "🧠"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Model testing and validation\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the model testing and validation control (from Model registry + lineage)) with read-only agents, run the test against policy, and issue a defensible opinion on the Artificial Intelligence (AI) control.",
      "year": 2025,
      "overview": [
        "The \"Model testing and validation\" sub-process is one of the controls an auditor must verify for Artificial Intelligence (AI). The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the model testing and validation control (from Model registry + lineage), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Model registry + lineage, Eval / red-team harness, AI gateway + guardrails — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the Artificial Intelligence (AI) policy/standard and flag every item where the \"Model testing and validation\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `04_model_testing_and_validation_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Model registry + lineage and Eval / red-team harness (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 04_model_testing_and_validation_mcp.py` to expose it to your agent — or `python 04_model_testing_and_validation_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Prompt injection and the leaky model",
        "when": "Recurring",
        "where": "Production AI systems",
        "impact": "An AI system with weak guardrails leaks data, executes injected instructions, or is manipulated — and without monitoring no one notices.",
        "body": [
          "AI introduces new failure modes: prompt injection, training-data poisoning, model/output manipulation, and sensitive-data leakage through generations.",
          "Auditors verify AI governance, model testing/validation, data governance, adversarial defense, AI infra/access security, and operational monitoring."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Artificial Intelligence (AI) scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull Model registry + lineage · Eval / red-team harness",
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
          "year": 2023,
          "event": "OWASP LLM Top 10 codifies prompt injection + data leakage risks",
          "highlight": true
        },
        {
          "year": 2024,
          "event": "Agentic-AI incidents elevate tool-use + autonomy as audit subjects"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Model testing and validation\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the model testing and validation control (from Model registry + lineage).",
        "The test: Reconcile the in-scope inventory against the Artificial Intelligence (AI) policy/standard and flag every item where the \"Model testing and validation\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (Model registry + lineage, Eval / red-team harness, AI gateway + guardrails) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the model testing and validation control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "NIST AI RMF + Generative AI Profile",
          "url": "https://www.nist.gov/itl/ai-risk-management-framework"
        },
        {
          "title": "OWASP Top 10 for LLM Applications",
          "url": "https://owasp.org/www-project-top-10-for-large-language-model-applications/"
        },
        {
          "title": "MITRE ATLAS",
          "url": "https://atlas.mitre.org/"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "04_model_testing_and_validation_mcp.py",
          "url": "/audit-code/ai-audit/04_model_testing_and_validation_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Artificial Intelligence (AI) evidence for \"Model testing and validation\" (in-scope inventory for the model testing and validation control (from model registry + lineage)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Model testing and validation\" control for Artificial Intelligence (AI) at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the Artificial Intelligence (AI) policy/standard and flag every item where the \"Model testing and validation\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the model testing and validation control (from Model registry + lineage) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Model registry + lineage APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Model registry + lineage gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Model registry + lineage; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Artificial Intelligence (AI): \"Model testing and validation\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the Artificial Intelligence (AI) policy/standard and flag every item where the \"Model testing and validation\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- ai-audit_inventory.json   (in-scope items — In-scope inventory for the model testing and validation control (from Model registry + lineage))\n- ai-audit_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Model testing and validation\",\n  \"domain\": \"Artificial Intelligence (AI)\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{aig_",
        "/evidence/ai-audit_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"AI/ML engineering\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Model testing and validation\" control must cover\n# fragment: model_testing_validation_",
        "/evidence/ai-audit_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "ai-audit_inventory.json",
            "isDir": false
          },
          {
            "name": "ai-audit_state.json",
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
          "value": "FLAG{aig_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/ai-audit_inventory.json",
          "value": "model_testing_validation_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/ai-audit_state.json",
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
          "id": "aig-04-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Model testing and validation\" sub-process of Artificial Intelligence (AI)?",
          "options": [
            "Re-implement the control on the auditor's behalf",
            "Increase the number of tools the team uses",
            "Replace the system owner's judgement entirely",
            "Obtain evidence that the model testing and validation control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run or own the control."
        },
        {
          "id": "aig-04-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Model testing and validation\" matter to the broader Artificial Intelligence (AI) posture?",
          "options": [
            "It is relevant solely for marketing",
            "It has no effect once a firewall exists",
            "It is a control other Artificial Intelligence (AI) controls depend on, so a gap here propagates risk into everything scoped to it",
            "It only affects documentation aesthetics"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure undermines the controls layered on top."
        },
        {
          "id": "aig-04-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Model testing and validation\" control?",
          "options": [
            "The vendor's marketing datasheet",
            "The In-scope inventory for the model testing and validation control (from Model registry + lineage) reconciled against policy, plus the resulting findings working paper",
            "A verbal assurance from the team lead",
            "A screenshot of the login page"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — exports reconciled to policy, not assertions."
        },
        {
          "id": "aig-04-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where would an auditor pull the evidence for \"Model testing and validation\"?",
          "options": [
            "Model registry + lineage (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., Model registry + lineage) via read-only access."
        },
        {
          "id": "aig-04-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Model testing and validation\"?",
          "options": [
            "The external auditor",
            "No one — it is ownerless",
            "The end customer",
            "AI/ML engineering (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "AI/ML engineering owns the control data; the auditor independently verifies it."
        },
        {
          "id": "aig-04-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Model testing and validation\", which part stays with the human auditor?",
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
          "id": "aig-04-q7",
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
          "id": "aig-04-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Model testing and validation\", which is a realistic reportable finding?",
          "options": [
            "In-scope items where the model testing and validation control is not applied, mis-scoped, or has drifted from the approved baseline",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the model testing and validation control is not applied, mis-scoped, or has drifted from the approved baseline"
        },
        {
          "id": "aig-04-q9",
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
          "id": "aig-04-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Model testing and validation\" also serve privacy and regulatory goals?",
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
    "epochId": "ai-audit",
    "id": "aig-05",
    "order": 5,
    "title": "Data governance and handling (AI)",
    "subtitle": "Agentic technical & privacy audit of the data governance and handling (ai) control",
    "category": "cybersecurity",
    "xp": 100,
    "easeScore": 6,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Data governance and handling (AI)\" control for Artificial Intelligence (AI) is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the Artificial Intelligence (AI) policy/standard and flag every item where the \"Data governance and handling (AI)\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Artificial Intelligence (AI) systems of record (Model registry + lineage; Eval / red-team harness; AI gateway + guardrails) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the data governance and handling (ai) control (from Model registry + lineage)",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "Model registry + lineage",
        "Eval / red-team harness",
        "AI gateway + guardrails",
        "Model + prompt monitoring"
      ],
      "dataOwner": [
        "AI/ML engineering",
        "Responsible-AI / governance",
        "Security (AI red team)",
        "Data governance"
      ],
      "scoring": {
        "ease": "EASE 6/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Artificial Intelligence (AI) controls."
      }
    },
    "badge": {
      "id": "aig-05-badge",
      "name": "Artificial Intelligence (AI) Auditor",
      "emoji": "🧠"
    },
    "wonder": {
      "name": "Data governance and handling (AI)",
      "location": "Artificial Intelligence (AI)",
      "era": "Present Day",
      "emoji": "🧠"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Data governance and handling (AI)\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the data governance and handling (ai) control (from Model registry + lineage)) with read-only agents, run the test against policy, and issue a defensible opinion on the Artificial Intelligence (AI) control.",
      "year": 2025,
      "overview": [
        "The \"Data governance and handling (AI)\" sub-process is one of the controls an auditor must verify for Artificial Intelligence (AI). The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the data governance and handling (ai) control (from Model registry + lineage), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Model registry + lineage, Eval / red-team harness, AI gateway + guardrails — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the Artificial Intelligence (AI) policy/standard and flag every item where the \"Data governance and handling (AI)\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `05_data_governance_and_handling_ai_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Model registry + lineage and Eval / red-team harness (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 05_data_governance_and_handling_ai_mcp.py` to expose it to your agent — or `python 05_data_governance_and_handling_ai_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Prompt injection and the leaky model",
        "when": "Recurring",
        "where": "Production AI systems",
        "impact": "An AI system with weak guardrails leaks data, executes injected instructions, or is manipulated — and without monitoring no one notices.",
        "body": [
          "AI introduces new failure modes: prompt injection, training-data poisoning, model/output manipulation, and sensitive-data leakage through generations.",
          "Auditors verify AI governance, model testing/validation, data governance, adversarial defense, AI infra/access security, and operational monitoring."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Artificial Intelligence (AI) scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull Model registry + lineage · Eval / red-team harness",
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
          "year": 2023,
          "event": "OWASP LLM Top 10 codifies prompt injection + data leakage risks",
          "highlight": true
        },
        {
          "year": 2024,
          "event": "Agentic-AI incidents elevate tool-use + autonomy as audit subjects"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Data governance and handling (AI)\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the data governance and handling (ai) control (from Model registry + lineage).",
        "The test: Reconcile the in-scope inventory against the Artificial Intelligence (AI) policy/standard and flag every item where the \"Data governance and handling (AI)\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (Model registry + lineage, Eval / red-team harness, AI gateway + guardrails) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the data governance and handling (ai) control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "NIST AI RMF + Generative AI Profile",
          "url": "https://www.nist.gov/itl/ai-risk-management-framework"
        },
        {
          "title": "OWASP Top 10 for LLM Applications",
          "url": "https://owasp.org/www-project-top-10-for-large-language-model-applications/"
        },
        {
          "title": "MITRE ATLAS",
          "url": "https://atlas.mitre.org/"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "05_data_governance_and_handling_ai_mcp.py",
          "url": "/audit-code/ai-audit/05_data_governance_and_handling_ai_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Artificial Intelligence (AI) evidence for \"Data governance and handling (AI)\" (in-scope inventory for the data governance and handling (ai) control (from model registry + lineage)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Data governance and handling (AI)\" control for Artificial Intelligence (AI) at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the Artificial Intelligence (AI) policy/standard and flag every item where the \"Data governance and handling (AI)\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the data governance and handling (ai) control (from Model registry + lineage) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Model registry + lineage APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Model registry + lineage gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Model registry + lineage; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Artificial Intelligence (AI): \"Data governance and handling (AI)\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the Artificial Intelligence (AI) policy/standard and flag every item where the \"Data governance and handling (AI)\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- ai-audit_inventory.json   (in-scope items — In-scope inventory for the data governance and handling (ai) control (from Model registry + lineage))\n- ai-audit_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Data governance and handling (AI)\",\n  \"domain\": \"Artificial Intelligence (AI)\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{aig_",
        "/evidence/ai-audit_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"AI/ML engineering\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Data governance and handling (AI)\" control must cover\n# fragment: data_governance_handling_",
        "/evidence/ai-audit_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "ai-audit_inventory.json",
            "isDir": false
          },
          {
            "name": "ai-audit_state.json",
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
          "value": "FLAG{aig_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/ai-audit_inventory.json",
          "value": "data_governance_handling_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/ai-audit_state.json",
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
          "id": "aig-05-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Data governance and handling (AI)\" sub-process of Artificial Intelligence (AI)?",
          "options": [
            "Re-implement the control on the auditor's behalf",
            "Increase the number of tools the team uses",
            "Replace the system owner's judgement entirely",
            "Obtain evidence that the data governance and handling (ai) control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run or own the control."
        },
        {
          "id": "aig-05-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Data governance and handling (AI)\" matter to the broader Artificial Intelligence (AI) posture?",
          "options": [
            "It is relevant solely for marketing",
            "It has no effect once a firewall exists",
            "It is a control other Artificial Intelligence (AI) controls depend on, so a gap here propagates risk into everything scoped to it",
            "It only affects documentation aesthetics"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure undermines the controls layered on top."
        },
        {
          "id": "aig-05-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Data governance and handling (AI)\" control?",
          "options": [
            "The vendor's marketing datasheet",
            "The In-scope inventory for the data governance and handling (ai) control (from Model registry + lineage) reconciled against policy, plus the resulting findings working paper",
            "A verbal assurance from the team lead",
            "A screenshot of the login page"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — exports reconciled to policy, not assertions."
        },
        {
          "id": "aig-05-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where would an auditor pull the evidence for \"Data governance and handling (AI)\"?",
          "options": [
            "Model registry + lineage (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., Model registry + lineage) via read-only access."
        },
        {
          "id": "aig-05-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Data governance and handling (AI)\"?",
          "options": [
            "The external auditor",
            "No one — it is ownerless",
            "The end customer",
            "AI/ML engineering (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "AI/ML engineering owns the control data; the auditor independently verifies it."
        },
        {
          "id": "aig-05-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Data governance and handling (AI)\", which part stays with the human auditor?",
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
          "id": "aig-05-q7",
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
          "id": "aig-05-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Data governance and handling (AI)\", which is a realistic reportable finding?",
          "options": [
            "In-scope items where the data governance and handling (ai) control is not applied, mis-scoped, or has drifted from the approved baseline",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the data governance and handling (ai) control is not applied, mis-scoped, or has drifted from the approved baseline"
        },
        {
          "id": "aig-05-q9",
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
          "id": "aig-05-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Data governance and handling (AI)\" also serve privacy and regulatory goals?",
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
    "epochId": "ai-audit",
    "id": "aig-06",
    "order": 6,
    "title": "Data privacy and security (AI)",
    "subtitle": "Agentic technical & privacy audit of the data privacy and security (ai) control",
    "category": "cybersecurity",
    "xp": 100,
    "easeScore": 7,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Data privacy and security (AI)\" control for Artificial Intelligence (AI) is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the Artificial Intelligence (AI) policy/standard and flag every item where the \"Data privacy and security (AI)\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Artificial Intelligence (AI) systems of record (Model registry + lineage; Eval / red-team harness; AI gateway + guardrails) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the data privacy and security (ai) control (from Model registry + lineage)",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "Model registry + lineage",
        "Eval / red-team harness",
        "AI gateway + guardrails",
        "Model + prompt monitoring"
      ],
      "dataOwner": [
        "AI/ML engineering",
        "Responsible-AI / governance",
        "Security (AI red team)",
        "Data governance"
      ],
      "scoring": {
        "ease": "EASE 7/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Artificial Intelligence (AI) controls."
      }
    },
    "badge": {
      "id": "aig-06-badge",
      "name": "Artificial Intelligence (AI) Auditor",
      "emoji": "🧠"
    },
    "wonder": {
      "name": "Data privacy and security (AI)",
      "location": "Artificial Intelligence (AI)",
      "era": "Present Day",
      "emoji": "🧠"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Data privacy and security (AI)\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the data privacy and security (ai) control (from Model registry + lineage)) with read-only agents, run the test against policy, and issue a defensible opinion on the Artificial Intelligence (AI) control.",
      "year": 2025,
      "overview": [
        "The \"Data privacy and security (AI)\" sub-process is one of the controls an auditor must verify for Artificial Intelligence (AI). The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the data privacy and security (ai) control (from Model registry + lineage), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Model registry + lineage, Eval / red-team harness, AI gateway + guardrails — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the Artificial Intelligence (AI) policy/standard and flag every item where the \"Data privacy and security (AI)\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `06_data_privacy_and_security_ai_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Model registry + lineage and Eval / red-team harness (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 06_data_privacy_and_security_ai_mcp.py` to expose it to your agent — or `python 06_data_privacy_and_security_ai_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Prompt injection and the leaky model",
        "when": "Recurring",
        "where": "Production AI systems",
        "impact": "An AI system with weak guardrails leaks data, executes injected instructions, or is manipulated — and without monitoring no one notices.",
        "body": [
          "AI introduces new failure modes: prompt injection, training-data poisoning, model/output manipulation, and sensitive-data leakage through generations.",
          "Auditors verify AI governance, model testing/validation, data governance, adversarial defense, AI infra/access security, and operational monitoring."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Artificial Intelligence (AI) scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull Model registry + lineage · Eval / red-team harness",
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
          "year": 2023,
          "event": "OWASP LLM Top 10 codifies prompt injection + data leakage risks",
          "highlight": true
        },
        {
          "year": 2024,
          "event": "Agentic-AI incidents elevate tool-use + autonomy as audit subjects"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Data privacy and security (AI)\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the data privacy and security (ai) control (from Model registry + lineage).",
        "The test: Reconcile the in-scope inventory against the Artificial Intelligence (AI) policy/standard and flag every item where the \"Data privacy and security (AI)\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (Model registry + lineage, Eval / red-team harness, AI gateway + guardrails) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the data privacy and security (ai) control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "NIST AI RMF + Generative AI Profile",
          "url": "https://www.nist.gov/itl/ai-risk-management-framework"
        },
        {
          "title": "OWASP Top 10 for LLM Applications",
          "url": "https://owasp.org/www-project-top-10-for-large-language-model-applications/"
        },
        {
          "title": "MITRE ATLAS",
          "url": "https://atlas.mitre.org/"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "06_data_privacy_and_security_ai_mcp.py",
          "url": "/audit-code/ai-audit/06_data_privacy_and_security_ai_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Artificial Intelligence (AI) evidence for \"Data privacy and security (AI)\" (in-scope inventory for the data privacy and security (ai) control (from model registry + lineage)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Data privacy and security (AI)\" control for Artificial Intelligence (AI) at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the Artificial Intelligence (AI) policy/standard and flag every item where the \"Data privacy and security (AI)\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the data privacy and security (ai) control (from Model registry + lineage) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Model registry + lineage APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Model registry + lineage gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Model registry + lineage; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Artificial Intelligence (AI): \"Data privacy and security (AI)\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the Artificial Intelligence (AI) policy/standard and flag every item where the \"Data privacy and security (AI)\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- ai-audit_inventory.json   (in-scope items — In-scope inventory for the data privacy and security (ai) control (from Model registry + lineage))\n- ai-audit_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Data privacy and security (AI)\",\n  \"domain\": \"Artificial Intelligence (AI)\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{aig_",
        "/evidence/ai-audit_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"AI/ML engineering\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Data privacy and security (AI)\" control must cover\n# fragment: data_privacy_security_",
        "/evidence/ai-audit_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "ai-audit_inventory.json",
            "isDir": false
          },
          {
            "name": "ai-audit_state.json",
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
          "value": "FLAG{aig_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/ai-audit_inventory.json",
          "value": "data_privacy_security_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/ai-audit_state.json",
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
          "id": "aig-06-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Data privacy and security (AI)\" sub-process of Artificial Intelligence (AI)?",
          "options": [
            "Re-implement the control on the auditor's behalf",
            "Increase the number of tools the team uses",
            "Replace the system owner's judgement entirely",
            "Obtain evidence that the data privacy and security (ai) control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run or own the control."
        },
        {
          "id": "aig-06-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Data privacy and security (AI)\" matter to the broader Artificial Intelligence (AI) posture?",
          "options": [
            "It is relevant solely for marketing",
            "It has no effect once a firewall exists",
            "It is a control other Artificial Intelligence (AI) controls depend on, so a gap here propagates risk into everything scoped to it",
            "It only affects documentation aesthetics"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure undermines the controls layered on top."
        },
        {
          "id": "aig-06-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Data privacy and security (AI)\" control?",
          "options": [
            "The vendor's marketing datasheet",
            "The In-scope inventory for the data privacy and security (ai) control (from Model registry + lineage) reconciled against policy, plus the resulting findings working paper",
            "A verbal assurance from the team lead",
            "A screenshot of the login page"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — exports reconciled to policy, not assertions."
        },
        {
          "id": "aig-06-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where would an auditor pull the evidence for \"Data privacy and security (AI)\"?",
          "options": [
            "Model registry + lineage (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., Model registry + lineage) via read-only access."
        },
        {
          "id": "aig-06-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Data privacy and security (AI)\"?",
          "options": [
            "The external auditor",
            "No one — it is ownerless",
            "The end customer",
            "AI/ML engineering (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "AI/ML engineering owns the control data; the auditor independently verifies it."
        },
        {
          "id": "aig-06-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Data privacy and security (AI)\", which part stays with the human auditor?",
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
          "id": "aig-06-q7",
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
          "id": "aig-06-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Data privacy and security (AI)\", which is a realistic reportable finding?",
          "options": [
            "In-scope items where the data privacy and security (ai) control is not applied, mis-scoped, or has drifted from the approved baseline",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the data privacy and security (ai) control is not applied, mis-scoped, or has drifted from the approved baseline"
        },
        {
          "id": "aig-06-q9",
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
          "id": "aig-06-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Data privacy and security (AI)\" also serve privacy and regulatory goals?",
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
    "epochId": "ai-audit",
    "id": "aig-07",
    "order": 7,
    "title": "AI infra and access security",
    "subtitle": "Agentic technical & privacy audit of the ai infra and access security control",
    "category": "cybersecurity",
    "xp": 100,
    "easeScore": 5,
    "valueScore": 9,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"AI infra and access security\" control for Artificial Intelligence (AI) is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the Artificial Intelligence (AI) policy/standard and flag every item where the \"AI infra and access security\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Artificial Intelligence (AI) systems of record (Model registry + lineage; Eval / red-team harness; AI gateway + guardrails) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the ai infra and access security control (from Model registry + lineage)",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "Model registry + lineage",
        "Eval / red-team harness",
        "AI gateway + guardrails",
        "Model + prompt monitoring"
      ],
      "dataOwner": [
        "AI/ML engineering",
        "Responsible-AI / governance",
        "Security (AI red team)",
        "Data governance"
      ],
      "scoring": {
        "ease": "EASE 5/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 9/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Artificial Intelligence (AI) controls."
      }
    },
    "badge": {
      "id": "aig-07-badge",
      "name": "Artificial Intelligence (AI) Auditor",
      "emoji": "🧠"
    },
    "wonder": {
      "name": "AI infra and access security",
      "location": "Artificial Intelligence (AI)",
      "era": "Present Day",
      "emoji": "🧠"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"AI infra and access security\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the ai infra and access security control (from Model registry + lineage)) with read-only agents, run the test against policy, and issue a defensible opinion on the Artificial Intelligence (AI) control.",
      "year": 2025,
      "overview": [
        "The \"AI infra and access security\" sub-process is one of the controls an auditor must verify for Artificial Intelligence (AI). The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the ai infra and access security control (from Model registry + lineage), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Model registry + lineage, Eval / red-team harness, AI gateway + guardrails — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the Artificial Intelligence (AI) policy/standard and flag every item where the \"AI infra and access security\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `07_ai_infra_and_access_security_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Model registry + lineage and Eval / red-team harness (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 07_ai_infra_and_access_security_mcp.py` to expose it to your agent — or `python 07_ai_infra_and_access_security_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Prompt injection and the leaky model",
        "when": "Recurring",
        "where": "Production AI systems",
        "impact": "An AI system with weak guardrails leaks data, executes injected instructions, or is manipulated — and without monitoring no one notices.",
        "body": [
          "AI introduces new failure modes: prompt injection, training-data poisoning, model/output manipulation, and sensitive-data leakage through generations.",
          "Auditors verify AI governance, model testing/validation, data governance, adversarial defense, AI infra/access security, and operational monitoring."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Artificial Intelligence (AI) scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull Model registry + lineage · Eval / red-team harness",
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
          "year": 2023,
          "event": "OWASP LLM Top 10 codifies prompt injection + data leakage risks",
          "highlight": true
        },
        {
          "year": 2024,
          "event": "Agentic-AI incidents elevate tool-use + autonomy as audit subjects"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"AI infra and access security\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the ai infra and access security control (from Model registry + lineage).",
        "The test: Reconcile the in-scope inventory against the Artificial Intelligence (AI) policy/standard and flag every item where the \"AI infra and access security\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (Model registry + lineage, Eval / red-team harness, AI gateway + guardrails) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the ai infra and access security control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "NIST AI RMF + Generative AI Profile",
          "url": "https://www.nist.gov/itl/ai-risk-management-framework"
        },
        {
          "title": "OWASP Top 10 for LLM Applications",
          "url": "https://owasp.org/www-project-top-10-for-large-language-model-applications/"
        },
        {
          "title": "MITRE ATLAS",
          "url": "https://atlas.mitre.org/"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "07_ai_infra_and_access_security_mcp.py",
          "url": "/audit-code/ai-audit/07_ai_infra_and_access_security_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Artificial Intelligence (AI) evidence for \"AI infra and access security\" (in-scope inventory for the ai infra and access security control (from model registry + lineage)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"AI infra and access security\" control for Artificial Intelligence (AI) at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the Artificial Intelligence (AI) policy/standard and flag every item where the \"AI infra and access security\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the ai infra and access security control (from Model registry + lineage) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Model registry + lineage APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Model registry + lineage gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Model registry + lineage; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Artificial Intelligence (AI): \"AI infra and access security\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the Artificial Intelligence (AI) policy/standard and flag every item where the \"AI infra and access security\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- ai-audit_inventory.json   (in-scope items — In-scope inventory for the ai infra and access security control (from Model registry + lineage))\n- ai-audit_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"AI infra and access security\",\n  \"domain\": \"Artificial Intelligence (AI)\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{aig_",
        "/evidence/ai-audit_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"AI/ML engineering\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"AI infra and access security\" control must cover\n# fragment: ai_infra_access_",
        "/evidence/ai-audit_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "ai-audit_inventory.json",
            "isDir": false
          },
          {
            "name": "ai-audit_state.json",
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
          "value": "FLAG{aig_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/ai-audit_inventory.json",
          "value": "ai_infra_access_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/ai-audit_state.json",
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
          "id": "aig-07-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"AI infra and access security\" sub-process of Artificial Intelligence (AI)?",
          "options": [
            "Re-implement the control on the auditor's behalf",
            "Increase the number of tools the team uses",
            "Replace the system owner's judgement entirely",
            "Obtain evidence that the ai infra and access security control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run or own the control."
        },
        {
          "id": "aig-07-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"AI infra and access security\" matter to the broader Artificial Intelligence (AI) posture?",
          "options": [
            "It is relevant solely for marketing",
            "It has no effect once a firewall exists",
            "It is a control other Artificial Intelligence (AI) controls depend on, so a gap here propagates risk into everything scoped to it",
            "It only affects documentation aesthetics"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure undermines the controls layered on top."
        },
        {
          "id": "aig-07-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"AI infra and access security\" control?",
          "options": [
            "The vendor's marketing datasheet",
            "The In-scope inventory for the ai infra and access security control (from Model registry + lineage) reconciled against policy, plus the resulting findings working paper",
            "A verbal assurance from the team lead",
            "A screenshot of the login page"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — exports reconciled to policy, not assertions."
        },
        {
          "id": "aig-07-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where would an auditor pull the evidence for \"AI infra and access security\"?",
          "options": [
            "Model registry + lineage (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., Model registry + lineage) via read-only access."
        },
        {
          "id": "aig-07-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"AI infra and access security\"?",
          "options": [
            "The external auditor",
            "No one — it is ownerless",
            "The end customer",
            "AI/ML engineering (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "AI/ML engineering owns the control data; the auditor independently verifies it."
        },
        {
          "id": "aig-07-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"AI infra and access security\", which part stays with the human auditor?",
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
          "id": "aig-07-q7",
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
          "id": "aig-07-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"AI infra and access security\", which is a realistic reportable finding?",
          "options": [
            "In-scope items where the ai infra and access security control is not applied, mis-scoped, or has drifted from the approved baseline",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the ai infra and access security control is not applied, mis-scoped, or has drifted from the approved baseline"
        },
        {
          "id": "aig-07-q9",
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
          "id": "aig-07-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"AI infra and access security\" also serve privacy and regulatory goals?",
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
    "epochId": "ai-audit",
    "id": "aig-08",
    "order": 8,
    "title": "Adversarial AI and threat defense",
    "subtitle": "Agentic technical & privacy audit of the adversarial ai and threat defense control",
    "category": "cybersecurity",
    "xp": 100,
    "easeScore": 4,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Adversarial AI and threat defense\" control for Artificial Intelligence (AI) is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the Artificial Intelligence (AI) policy/standard and flag every item where the \"Adversarial AI and threat defense\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Artificial Intelligence (AI) systems of record (Model registry + lineage; Eval / red-team harness; AI gateway + guardrails) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the adversarial ai and threat defense control (from Model registry + lineage)",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "Model registry + lineage",
        "Eval / red-team harness",
        "AI gateway + guardrails",
        "Model + prompt monitoring"
      ],
      "dataOwner": [
        "AI/ML engineering",
        "Responsible-AI / governance",
        "Security (AI red team)",
        "Data governance"
      ],
      "scoring": {
        "ease": "EASE 4/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Artificial Intelligence (AI) controls."
      }
    },
    "badge": {
      "id": "aig-08-badge",
      "name": "Artificial Intelligence (AI) Auditor",
      "emoji": "🧠"
    },
    "wonder": {
      "name": "Adversarial AI and threat defense",
      "location": "Artificial Intelligence (AI)",
      "era": "Present Day",
      "emoji": "🧠"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Adversarial AI and threat defense\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the adversarial ai and threat defense control (from Model registry + lineage)) with read-only agents, run the test against policy, and issue a defensible opinion on the Artificial Intelligence (AI) control.",
      "year": 2025,
      "overview": [
        "The \"Adversarial AI and threat defense\" sub-process is one of the controls an auditor must verify for Artificial Intelligence (AI). The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the adversarial ai and threat defense control (from Model registry + lineage), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Model registry + lineage, Eval / red-team harness, AI gateway + guardrails — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the Artificial Intelligence (AI) policy/standard and flag every item where the \"Adversarial AI and threat defense\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `08_adversarial_ai_and_threat_defense_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Model registry + lineage and Eval / red-team harness (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 08_adversarial_ai_and_threat_defense_mcp.py` to expose it to your agent — or `python 08_adversarial_ai_and_threat_defense_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Prompt injection and the leaky model",
        "when": "Recurring",
        "where": "Production AI systems",
        "impact": "An AI system with weak guardrails leaks data, executes injected instructions, or is manipulated — and without monitoring no one notices.",
        "body": [
          "AI introduces new failure modes: prompt injection, training-data poisoning, model/output manipulation, and sensitive-data leakage through generations.",
          "Auditors verify AI governance, model testing/validation, data governance, adversarial defense, AI infra/access security, and operational monitoring."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Artificial Intelligence (AI) scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull Model registry + lineage · Eval / red-team harness",
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
          "year": 2023,
          "event": "OWASP LLM Top 10 codifies prompt injection + data leakage risks",
          "highlight": true
        },
        {
          "year": 2024,
          "event": "Agentic-AI incidents elevate tool-use + autonomy as audit subjects"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Adversarial AI and threat defense\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the adversarial ai and threat defense control (from Model registry + lineage).",
        "The test: Reconcile the in-scope inventory against the Artificial Intelligence (AI) policy/standard and flag every item where the \"Adversarial AI and threat defense\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (Model registry + lineage, Eval / red-team harness, AI gateway + guardrails) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the adversarial ai and threat defense control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "NIST AI RMF + Generative AI Profile",
          "url": "https://www.nist.gov/itl/ai-risk-management-framework"
        },
        {
          "title": "OWASP Top 10 for LLM Applications",
          "url": "https://owasp.org/www-project-top-10-for-large-language-model-applications/"
        },
        {
          "title": "MITRE ATLAS",
          "url": "https://atlas.mitre.org/"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "08_adversarial_ai_and_threat_defense_mcp.py",
          "url": "/audit-code/ai-audit/08_adversarial_ai_and_threat_defense_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Artificial Intelligence (AI) evidence for \"Adversarial AI and threat defense\" (in-scope inventory for the adversarial ai and threat defense control (from model registry + lineage)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Adversarial AI and threat defense\" control for Artificial Intelligence (AI) at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the Artificial Intelligence (AI) policy/standard and flag every item where the \"Adversarial AI and threat defense\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the adversarial ai and threat defense control (from Model registry + lineage) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Model registry + lineage APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Model registry + lineage gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Model registry + lineage; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Artificial Intelligence (AI): \"Adversarial AI and threat defense\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the Artificial Intelligence (AI) policy/standard and flag every item where the \"Adversarial AI and threat defense\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- ai-audit_inventory.json   (in-scope items — In-scope inventory for the adversarial ai and threat defense control (from Model registry + lineage))\n- ai-audit_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Adversarial AI and threat defense\",\n  \"domain\": \"Artificial Intelligence (AI)\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{aig_",
        "/evidence/ai-audit_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"AI/ML engineering\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Adversarial AI and threat defense\" control must cover\n# fragment: adversarial_ai_threat_",
        "/evidence/ai-audit_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "ai-audit_inventory.json",
            "isDir": false
          },
          {
            "name": "ai-audit_state.json",
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
          "value": "FLAG{aig_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/ai-audit_inventory.json",
          "value": "adversarial_ai_threat_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/ai-audit_state.json",
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
          "id": "aig-08-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Adversarial AI and threat defense\" sub-process of Artificial Intelligence (AI)?",
          "options": [
            "Re-implement the control on the auditor's behalf",
            "Increase the number of tools the team uses",
            "Replace the system owner's judgement entirely",
            "Obtain evidence that the adversarial ai and threat defense control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run or own the control."
        },
        {
          "id": "aig-08-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Adversarial AI and threat defense\" matter to the broader Artificial Intelligence (AI) posture?",
          "options": [
            "It is relevant solely for marketing",
            "It has no effect once a firewall exists",
            "It is a control other Artificial Intelligence (AI) controls depend on, so a gap here propagates risk into everything scoped to it",
            "It only affects documentation aesthetics"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure undermines the controls layered on top."
        },
        {
          "id": "aig-08-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Adversarial AI and threat defense\" control?",
          "options": [
            "The vendor's marketing datasheet",
            "The In-scope inventory for the adversarial ai and threat defense control (from Model registry + lineage) reconciled against policy, plus the resulting findings working paper",
            "A verbal assurance from the team lead",
            "A screenshot of the login page"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — exports reconciled to policy, not assertions."
        },
        {
          "id": "aig-08-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where would an auditor pull the evidence for \"Adversarial AI and threat defense\"?",
          "options": [
            "Model registry + lineage (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., Model registry + lineage) via read-only access."
        },
        {
          "id": "aig-08-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Adversarial AI and threat defense\"?",
          "options": [
            "The external auditor",
            "No one — it is ownerless",
            "The end customer",
            "AI/ML engineering (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "AI/ML engineering owns the control data; the auditor independently verifies it."
        },
        {
          "id": "aig-08-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Adversarial AI and threat defense\", which part stays with the human auditor?",
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
          "id": "aig-08-q7",
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
          "id": "aig-08-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Adversarial AI and threat defense\", which is a realistic reportable finding?",
          "options": [
            "In-scope items where the adversarial ai and threat defense control is not applied, mis-scoped, or has drifted from the approved baseline",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the adversarial ai and threat defense control is not applied, mis-scoped, or has drifted from the approved baseline"
        },
        {
          "id": "aig-08-q9",
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
          "id": "aig-08-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Adversarial AI and threat defense\" also serve privacy and regulatory goals?",
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
    "epochId": "ai-audit",
    "id": "aig-09",
    "order": 9,
    "title": "Incident management and reporting (AI)",
    "subtitle": "Agentic technical & privacy audit of the incident management and reporting (ai) control",
    "category": "cybersecurity",
    "xp": 100,
    "easeScore": 8,
    "valueScore": 8,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Incident management and reporting (AI)\" control for Artificial Intelligence (AI) is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the Artificial Intelligence (AI) policy/standard and flag every item where the \"Incident management and reporting (AI)\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Artificial Intelligence (AI) systems of record (Model registry + lineage; Eval / red-team harness; AI gateway + guardrails) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the incident management and reporting (ai) control (from Model registry + lineage)",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "Model registry + lineage",
        "Eval / red-team harness",
        "AI gateway + guardrails",
        "Model + prompt monitoring"
      ],
      "dataOwner": [
        "AI/ML engineering",
        "Responsible-AI / governance",
        "Security (AI red team)",
        "Data governance"
      ],
      "scoring": {
        "ease": "EASE 8/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 8/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Artificial Intelligence (AI) controls."
      }
    },
    "badge": {
      "id": "aig-09-badge",
      "name": "Artificial Intelligence (AI) Auditor",
      "emoji": "🧠"
    },
    "wonder": {
      "name": "Incident management and reporting (AI)",
      "location": "Artificial Intelligence (AI)",
      "era": "Present Day",
      "emoji": "🧠"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Incident management and reporting (AI)\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the incident management and reporting (ai) control (from Model registry + lineage)) with read-only agents, run the test against policy, and issue a defensible opinion on the Artificial Intelligence (AI) control.",
      "year": 2025,
      "overview": [
        "The \"Incident management and reporting (AI)\" sub-process is one of the controls an auditor must verify for Artificial Intelligence (AI). The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the incident management and reporting (ai) control (from Model registry + lineage), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Model registry + lineage, Eval / red-team harness, AI gateway + guardrails — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the Artificial Intelligence (AI) policy/standard and flag every item where the \"Incident management and reporting (AI)\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `09_incident_management_and_reporting_ai_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Model registry + lineage and Eval / red-team harness (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 09_incident_management_and_reporting_ai_mcp.py` to expose it to your agent — or `python 09_incident_management_and_reporting_ai_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Prompt injection and the leaky model",
        "when": "Recurring",
        "where": "Production AI systems",
        "impact": "An AI system with weak guardrails leaks data, executes injected instructions, or is manipulated — and without monitoring no one notices.",
        "body": [
          "AI introduces new failure modes: prompt injection, training-data poisoning, model/output manipulation, and sensitive-data leakage through generations.",
          "Auditors verify AI governance, model testing/validation, data governance, adversarial defense, AI infra/access security, and operational monitoring."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Artificial Intelligence (AI) scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull Model registry + lineage · Eval / red-team harness",
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
          "year": 2023,
          "event": "OWASP LLM Top 10 codifies prompt injection + data leakage risks",
          "highlight": true
        },
        {
          "year": 2024,
          "event": "Agentic-AI incidents elevate tool-use + autonomy as audit subjects"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Incident management and reporting (AI)\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the incident management and reporting (ai) control (from Model registry + lineage).",
        "The test: Reconcile the in-scope inventory against the Artificial Intelligence (AI) policy/standard and flag every item where the \"Incident management and reporting (AI)\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (Model registry + lineage, Eval / red-team harness, AI gateway + guardrails) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the incident management and reporting (ai) control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "NIST AI RMF + Generative AI Profile",
          "url": "https://www.nist.gov/itl/ai-risk-management-framework"
        },
        {
          "title": "OWASP Top 10 for LLM Applications",
          "url": "https://owasp.org/www-project-top-10-for-large-language-model-applications/"
        },
        {
          "title": "MITRE ATLAS",
          "url": "https://atlas.mitre.org/"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "09_incident_management_and_reporting_ai_mcp.py",
          "url": "/audit-code/ai-audit/09_incident_management_and_reporting_ai_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Artificial Intelligence (AI) evidence for \"Incident management and reporting (AI)\" (in-scope inventory for the incident management and reporting (ai) control (from model registry + lineage)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Incident management and reporting (AI)\" control for Artificial Intelligence (AI) at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the Artificial Intelligence (AI) policy/standard and flag every item where the \"Incident management and reporting (AI)\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the incident management and reporting (ai) control (from Model registry + lineage) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Model registry + lineage APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Model registry + lineage gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Model registry + lineage; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Artificial Intelligence (AI): \"Incident management and reporting (AI)\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the Artificial Intelligence (AI) policy/standard and flag every item where the \"Incident management and reporting (AI)\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- ai-audit_inventory.json   (in-scope items — In-scope inventory for the incident management and reporting (ai) control (from Model registry + lineage))\n- ai-audit_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Incident management and reporting (AI)\",\n  \"domain\": \"Artificial Intelligence (AI)\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{aig_",
        "/evidence/ai-audit_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"AI/ML engineering\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Incident management and reporting (AI)\" control must cover\n# fragment: incident_management_reporting_",
        "/evidence/ai-audit_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "ai-audit_inventory.json",
            "isDir": false
          },
          {
            "name": "ai-audit_state.json",
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
          "value": "FLAG{aig_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/ai-audit_inventory.json",
          "value": "incident_management_reporting_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/ai-audit_state.json",
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
          "id": "aig-09-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Incident management and reporting (AI)\" sub-process of Artificial Intelligence (AI)?",
          "options": [
            "Re-implement the control on the auditor's behalf",
            "Increase the number of tools the team uses",
            "Replace the system owner's judgement entirely",
            "Obtain evidence that the incident management and reporting (ai) control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run or own the control."
        },
        {
          "id": "aig-09-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Incident management and reporting (AI)\" matter to the broader Artificial Intelligence (AI) posture?",
          "options": [
            "It is relevant solely for marketing",
            "It has no effect once a firewall exists",
            "It is a control other Artificial Intelligence (AI) controls depend on, so a gap here propagates risk into everything scoped to it",
            "It only affects documentation aesthetics"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure undermines the controls layered on top."
        },
        {
          "id": "aig-09-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Incident management and reporting (AI)\" control?",
          "options": [
            "The vendor's marketing datasheet",
            "The In-scope inventory for the incident management and reporting (ai) control (from Model registry + lineage) reconciled against policy, plus the resulting findings working paper",
            "A verbal assurance from the team lead",
            "A screenshot of the login page"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — exports reconciled to policy, not assertions."
        },
        {
          "id": "aig-09-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where would an auditor pull the evidence for \"Incident management and reporting (AI)\"?",
          "options": [
            "Model registry + lineage (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., Model registry + lineage) via read-only access."
        },
        {
          "id": "aig-09-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Incident management and reporting (AI)\"?",
          "options": [
            "The external auditor",
            "No one — it is ownerless",
            "The end customer",
            "AI/ML engineering (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "AI/ML engineering owns the control data; the auditor independently verifies it."
        },
        {
          "id": "aig-09-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Incident management and reporting (AI)\", which part stays with the human auditor?",
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
          "id": "aig-09-q7",
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
          "id": "aig-09-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Incident management and reporting (AI)\", which is a realistic reportable finding?",
          "options": [
            "In-scope items where the incident management and reporting (ai) control is not applied, mis-scoped, or has drifted from the approved baseline",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the incident management and reporting (ai) control is not applied, mis-scoped, or has drifted from the approved baseline"
        },
        {
          "id": "aig-09-q9",
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
          "id": "aig-09-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Incident management and reporting (AI)\" also serve privacy and regulatory goals?",
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
    "epochId": "ai-audit",
    "id": "aig-10",
    "order": 10,
    "title": "Operational monitoring (AI)",
    "subtitle": "Agentic technical & privacy audit of the operational monitoring (ai) control",
    "category": "cybersecurity",
    "xp": 100,
    "easeScore": 6,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Operational monitoring (AI)\" control for Artificial Intelligence (AI) is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the Artificial Intelligence (AI) policy/standard and flag every item where the \"Operational monitoring (AI)\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Artificial Intelligence (AI) systems of record (Model registry + lineage; Eval / red-team harness; AI gateway + guardrails) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the operational monitoring (ai) control (from Model registry + lineage)",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "Model registry + lineage",
        "Eval / red-team harness",
        "AI gateway + guardrails",
        "Model + prompt monitoring"
      ],
      "dataOwner": [
        "AI/ML engineering",
        "Responsible-AI / governance",
        "Security (AI red team)",
        "Data governance"
      ],
      "scoring": {
        "ease": "EASE 6/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Artificial Intelligence (AI) controls."
      }
    },
    "badge": {
      "id": "aig-10-badge",
      "name": "Artificial Intelligence (AI) Auditor",
      "emoji": "🧠"
    },
    "wonder": {
      "name": "Operational monitoring (AI)",
      "location": "Artificial Intelligence (AI)",
      "era": "Present Day",
      "emoji": "🧠"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Operational monitoring (AI)\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the operational monitoring (ai) control (from Model registry + lineage)) with read-only agents, run the test against policy, and issue a defensible opinion on the Artificial Intelligence (AI) control.",
      "year": 2025,
      "overview": [
        "The \"Operational monitoring (AI)\" sub-process is one of the controls an auditor must verify for Artificial Intelligence (AI). The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the operational monitoring (ai) control (from Model registry + lineage), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Model registry + lineage, Eval / red-team harness, AI gateway + guardrails — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the Artificial Intelligence (AI) policy/standard and flag every item where the \"Operational monitoring (AI)\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `10_operational_monitoring_ai_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Model registry + lineage and Eval / red-team harness (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 10_operational_monitoring_ai_mcp.py` to expose it to your agent — or `python 10_operational_monitoring_ai_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Prompt injection and the leaky model",
        "when": "Recurring",
        "where": "Production AI systems",
        "impact": "An AI system with weak guardrails leaks data, executes injected instructions, or is manipulated — and without monitoring no one notices.",
        "body": [
          "AI introduces new failure modes: prompt injection, training-data poisoning, model/output manipulation, and sensitive-data leakage through generations.",
          "Auditors verify AI governance, model testing/validation, data governance, adversarial defense, AI infra/access security, and operational monitoring."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Artificial Intelligence (AI) scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull Model registry + lineage · Eval / red-team harness",
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
          "year": 2023,
          "event": "OWASP LLM Top 10 codifies prompt injection + data leakage risks",
          "highlight": true
        },
        {
          "year": 2024,
          "event": "Agentic-AI incidents elevate tool-use + autonomy as audit subjects"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Operational monitoring (AI)\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the operational monitoring (ai) control (from Model registry + lineage).",
        "The test: Reconcile the in-scope inventory against the Artificial Intelligence (AI) policy/standard and flag every item where the \"Operational monitoring (AI)\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (Model registry + lineage, Eval / red-team harness, AI gateway + guardrails) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the operational monitoring (ai) control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "NIST AI RMF + Generative AI Profile",
          "url": "https://www.nist.gov/itl/ai-risk-management-framework"
        },
        {
          "title": "OWASP Top 10 for LLM Applications",
          "url": "https://owasp.org/www-project-top-10-for-large-language-model-applications/"
        },
        {
          "title": "MITRE ATLAS",
          "url": "https://atlas.mitre.org/"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "10_operational_monitoring_ai_mcp.py",
          "url": "/audit-code/ai-audit/10_operational_monitoring_ai_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Artificial Intelligence (AI) evidence for \"Operational monitoring (AI)\" (in-scope inventory for the operational monitoring (ai) control (from model registry + lineage)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Operational monitoring (AI)\" control for Artificial Intelligence (AI) at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the Artificial Intelligence (AI) policy/standard and flag every item where the \"Operational monitoring (AI)\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the operational monitoring (ai) control (from Model registry + lineage) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Model registry + lineage APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Model registry + lineage gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Model registry + lineage; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Artificial Intelligence (AI): \"Operational monitoring (AI)\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the Artificial Intelligence (AI) policy/standard and flag every item where the \"Operational monitoring (AI)\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- ai-audit_inventory.json   (in-scope items — In-scope inventory for the operational monitoring (ai) control (from Model registry + lineage))\n- ai-audit_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Operational monitoring (AI)\",\n  \"domain\": \"Artificial Intelligence (AI)\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{aig_",
        "/evidence/ai-audit_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"AI/ML engineering\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Operational monitoring (AI)\" control must cover\n# fragment: operational_monitoring_ai_",
        "/evidence/ai-audit_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "ai-audit_inventory.json",
            "isDir": false
          },
          {
            "name": "ai-audit_state.json",
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
          "value": "FLAG{aig_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/ai-audit_inventory.json",
          "value": "operational_monitoring_ai_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/ai-audit_state.json",
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
          "id": "aig-10-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Operational monitoring (AI)\" sub-process of Artificial Intelligence (AI)?",
          "options": [
            "Re-implement the control on the auditor's behalf",
            "Increase the number of tools the team uses",
            "Replace the system owner's judgement entirely",
            "Obtain evidence that the operational monitoring (ai) control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run or own the control."
        },
        {
          "id": "aig-10-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Operational monitoring (AI)\" matter to the broader Artificial Intelligence (AI) posture?",
          "options": [
            "It is relevant solely for marketing",
            "It has no effect once a firewall exists",
            "It is a control other Artificial Intelligence (AI) controls depend on, so a gap here propagates risk into everything scoped to it",
            "It only affects documentation aesthetics"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure undermines the controls layered on top."
        },
        {
          "id": "aig-10-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Operational monitoring (AI)\" control?",
          "options": [
            "The vendor's marketing datasheet",
            "The In-scope inventory for the operational monitoring (ai) control (from Model registry + lineage) reconciled against policy, plus the resulting findings working paper",
            "A verbal assurance from the team lead",
            "A screenshot of the login page"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — exports reconciled to policy, not assertions."
        },
        {
          "id": "aig-10-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where would an auditor pull the evidence for \"Operational monitoring (AI)\"?",
          "options": [
            "Model registry + lineage (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., Model registry + lineage) via read-only access."
        },
        {
          "id": "aig-10-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Operational monitoring (AI)\"?",
          "options": [
            "The external auditor",
            "No one — it is ownerless",
            "The end customer",
            "AI/ML engineering (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "AI/ML engineering owns the control data; the auditor independently verifies it."
        },
        {
          "id": "aig-10-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Operational monitoring (AI)\", which part stays with the human auditor?",
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
          "id": "aig-10-q7",
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
          "id": "aig-10-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Operational monitoring (AI)\", which is a realistic reportable finding?",
          "options": [
            "In-scope items where the operational monitoring (ai) control is not applied, mis-scoped, or has drifted from the approved baseline",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the operational monitoring (ai) control is not applied, mis-scoped, or has drifted from the approved baseline"
        },
        {
          "id": "aig-10-q9",
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
          "id": "aig-10-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Operational monitoring (AI)\" also serve privacy and regulatory goals?",
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

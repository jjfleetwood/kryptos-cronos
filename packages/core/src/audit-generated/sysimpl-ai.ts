import type { EpochConfig, StageConfig } from "../types";

export const sysimplAiEpoch: EpochConfig = {
  "id": "sysimpl-ai",
  "name": "System Implementation — AI (Artificial Intelligence)",
  "subtitle": "Agentic technical & privacy audit — System Implementation — AI (Artificial Intelligence)",
  "description": "Audit System Implementation — AI (Artificial Intelligence) end to end with a read-only agent fleet: each sub-process is a module that teaches the control as a repeatable agentic workflow with downloadable MCP tooling, a CTF, and a 10-question quiz.",
  "emoji": "🤖",
  "color": "Fuchsia",
  "unlocked": true
};

export const sysimplAiStages: StageConfig[] = [
  {
    "epochId": "sysimpl-ai",
    "id": "sia-01",
    "order": 1,
    "title": "AI use case definition",
    "subtitle": "Agentic technical & privacy audit of the ai use case definition control",
    "category": "cybersecurity",
    "xp": 100,
    "easeScore": 5,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"AI use case definition\" control for System Implementation — AI (Artificial Intelligence) is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the System Implementation — AI (Artificial Intelligence) policy/standard and flag every item where the \"AI use case definition\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the System Implementation — AI (Artificial Intelligence) systems of record (ML platform (SageMaker/Vertex/Azure ML); Feature + data store; Model registry + eval harness) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the ai use case definition control (from ML platform (SageMaker/Vertex/Azure ML))",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "ML platform (SageMaker/Vertex/Azure ML)",
        "Feature + data store",
        "Model registry + eval harness",
        "Model monitoring / drift"
      ],
      "dataOwner": [
        "Data science / ML engineering",
        "Data governance",
        "Responsible-AI / risk",
        "Product owners"
      ],
      "scoring": {
        "ease": "EASE 5/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream System Implementation — AI (Artificial Intelligence) controls."
      }
    },
    "badge": {
      "id": "sia-01-badge",
      "name": "System Implementation — AI (Artificial Intelligence) Auditor",
      "emoji": "🤖"
    },
    "wonder": {
      "name": "AI use case definition",
      "location": "System Implementation — AI (Artificial Intelligence)",
      "era": "Present Day",
      "emoji": "🤖"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"AI use case definition\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the ai use case definition control (from ML platform (SageMaker/Vertex/Azure ML))) with read-only agents, run the test against policy, and issue a defensible opinion on the System Implementation — AI (Artificial Intelligence) control.",
      "year": 2025,
      "overview": [
        "The \"AI use case definition\" sub-process is one of the controls an auditor must verify for System Implementation — AI (Artificial Intelligence). The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the ai use case definition control (from ML platform (SageMaker/Vertex/Azure ML)), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here ML platform (SageMaker/Vertex/Azure ML), Feature + data store, Model registry + eval harness — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the System Implementation — AI (Artificial Intelligence) policy/standard and flag every item where the \"AI use case definition\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `01_ai_use_case_definition_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from ML platform (SageMaker/Vertex/Azure ML) and Feature + data store (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 01_ai_use_case_definition_mcp.py` to expose it to your agent — or `python 01_ai_use_case_definition_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "A model that was never validated for the real world",
        "when": "Recurring",
        "where": "AI/ML implementations",
        "impact": "A model deployed without rigorous validation, bias testing, or drift monitoring makes harmful or non-compliant decisions at scale.",
        "body": [
          "AI implementations fail differently: unrepresentative training data, no fairness testing, and no drift monitoring let a model degrade or discriminate silently.",
          "Auditors verify use-case definition, data governance, model validation, responsible-AI controls, adversarial testing, deployment, and post-deployment monitoring."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define System Implementation — AI (Artificial Intelligence) scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull ML platform (SageMaker/Vertex/Azure ML) · Feature + data store",
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
          "year": 2024,
          "event": "EU AI Act sets risk-tiered obligations for AI systems",
          "highlight": true
        },
        {
          "year": 2023,
          "event": "High-profile model bias + drift incidents drive validation rigor"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"AI use case definition\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the ai use case definition control (from ML platform (SageMaker/Vertex/Azure ML)).",
        "The test: Reconcile the in-scope inventory against the System Implementation — AI (Artificial Intelligence) policy/standard and flag every item where the \"AI use case definition\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (ML platform (SageMaker/Vertex/Azure ML), Feature + data store, Model registry + eval harness) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the ai use case definition control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "NIST AI Risk Management Framework",
          "url": "https://www.nist.gov/itl/ai-risk-management-framework"
        },
        {
          "title": "ISO/IEC 42001 — AI management system",
          "url": "https://www.iso.org/standard/81230.html"
        },
        {
          "title": "EU AI Act",
          "url": "https://artificialintelligenceact.eu/"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "01_ai_use_case_definition_mcp.py",
          "url": "/audit-code/sysimpl-ai/01_ai_use_case_definition_mcp.py",
          "description": "Runnable read-only MCP server: gathers the System Implementation — AI (Artificial Intelligence) evidence for \"AI use case definition\" (in-scope inventory for the ai use case definition control (from ml platform (sagemaker/vertex/azure ml))), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"AI use case definition\" control for System Implementation — AI (Artificial Intelligence) at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the System Implementation — AI (Artificial Intelligence) policy/standard and flag every item where the \"AI use case definition\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the ai use case definition control (from ML platform (SageMaker/Vertex/Azure ML)) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live ML platform (SageMaker/Vertex/Azure ML) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. ML platform (SageMaker/Vertex/Azure ML) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from ML platform (SageMaker/Vertex/Azure ML); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — System Implementation — AI (Artificial Intelligence): \"AI use case definition\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the System Implementation — AI (Artificial Intelligence) policy/standard and flag every item where the \"AI use case definition\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- sysimpl-ai_inventory.json   (in-scope items — In-scope inventory for the ai use case definition control (from ML platform (SageMaker/Vertex/Azure ML)))\n- sysimpl-ai_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"AI use case definition\",\n  \"domain\": \"System Implementation — AI (Artificial Intelligence)\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{sia_",
        "/evidence/sysimpl-ai_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Data science / ML engineering\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"AI use case definition\" control must cover\n# fragment: ai_use_case_",
        "/evidence/sysimpl-ai_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "sysimpl-ai_inventory.json",
            "isDir": false
          },
          {
            "name": "sysimpl-ai_state.json",
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
          "value": "FLAG{sia_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/sysimpl-ai_inventory.json",
          "value": "ai_use_case_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/sysimpl-ai_state.json",
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
          "id": "sia-01-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"AI use case definition\" sub-process of System Implementation — AI (Artificial Intelligence)?",
          "options": [
            "Re-implement the control on the auditor's behalf",
            "Increase the number of tools the team uses",
            "Replace the system owner's judgement entirely",
            "Obtain evidence that the ai use case definition control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run or own the control."
        },
        {
          "id": "sia-01-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"AI use case definition\" matter to the broader System Implementation — AI (Artificial Intelligence) posture?",
          "options": [
            "It is relevant solely for marketing",
            "It has no effect once a firewall exists",
            "It is a control other System Implementation — AI (Artificial Intelligence) controls depend on, so a gap here propagates risk into everything scoped to it",
            "It only affects documentation aesthetics"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure undermines the controls layered on top."
        },
        {
          "id": "sia-01-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"AI use case definition\" control?",
          "options": [
            "The vendor's marketing datasheet",
            "The In-scope inventory for the ai use case definition control (from ML platform (SageMaker/Vertex/Azure ML)) reconciled against policy, plus the resulting findings working paper",
            "A verbal assurance from the team lead",
            "A screenshot of the login page"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — exports reconciled to policy, not assertions."
        },
        {
          "id": "sia-01-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where would an auditor pull the evidence for \"AI use case definition\"?",
          "options": [
            "ML platform (SageMaker/Vertex/Azure ML) (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., ML platform (SageMaker/Vertex/Azure ML)) via read-only access."
        },
        {
          "id": "sia-01-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"AI use case definition\"?",
          "options": [
            "The external auditor",
            "No one — it is ownerless",
            "The end customer",
            "Data science / ML engineering (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "Data science / ML engineering owns the control data; the auditor independently verifies it."
        },
        {
          "id": "sia-01-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"AI use case definition\", which part stays with the human auditor?",
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
          "id": "sia-01-q7",
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
          "id": "sia-01-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"AI use case definition\", which is a realistic reportable finding?",
          "options": [
            "In-scope items where the ai use case definition control is not applied, mis-scoped, or has drifted from the approved baseline",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the ai use case definition control is not applied, mis-scoped, or has drifted from the approved baseline"
        },
        {
          "id": "sia-01-q9",
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
          "id": "sia-01-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"AI use case definition\" also serve privacy and regulatory goals?",
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
    "epochId": "sysimpl-ai",
    "id": "sia-02",
    "order": 2,
    "title": "Data governance and quality for AI",
    "subtitle": "Agentic technical & privacy audit of the data governance and quality for ai control",
    "category": "cybersecurity",
    "xp": 100,
    "easeScore": 6,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Data governance and quality for AI\" control for System Implementation — AI (Artificial Intelligence) is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the System Implementation — AI (Artificial Intelligence) policy/standard and flag every item where the \"Data governance and quality for AI\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the System Implementation — AI (Artificial Intelligence) systems of record (ML platform (SageMaker/Vertex/Azure ML); Feature + data store; Model registry + eval harness) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the data governance and quality for ai control (from ML platform (SageMaker/Vertex/Azure ML))",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "ML platform (SageMaker/Vertex/Azure ML)",
        "Feature + data store",
        "Model registry + eval harness",
        "Model monitoring / drift"
      ],
      "dataOwner": [
        "Data science / ML engineering",
        "Data governance",
        "Responsible-AI / risk",
        "Product owners"
      ],
      "scoring": {
        "ease": "EASE 6/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream System Implementation — AI (Artificial Intelligence) controls."
      }
    },
    "badge": {
      "id": "sia-02-badge",
      "name": "System Implementation — AI (Artificial Intelligence) Auditor",
      "emoji": "🤖"
    },
    "wonder": {
      "name": "Data governance and quality for AI",
      "location": "System Implementation — AI (Artificial Intelligence)",
      "era": "Present Day",
      "emoji": "🤖"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Data governance and quality for AI\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the data governance and quality for ai control (from ML platform (SageMaker/Vertex/Azure ML))) with read-only agents, run the test against policy, and issue a defensible opinion on the System Implementation — AI (Artificial Intelligence) control.",
      "year": 2025,
      "overview": [
        "The \"Data governance and quality for AI\" sub-process is one of the controls an auditor must verify for System Implementation — AI (Artificial Intelligence). The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the data governance and quality for ai control (from ML platform (SageMaker/Vertex/Azure ML)), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here ML platform (SageMaker/Vertex/Azure ML), Feature + data store, Model registry + eval harness — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the System Implementation — AI (Artificial Intelligence) policy/standard and flag every item where the \"Data governance and quality for AI\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `02_data_governance_and_quality_for_ai_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from ML platform (SageMaker/Vertex/Azure ML) and Feature + data store (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 02_data_governance_and_quality_for_ai_mcp.py` to expose it to your agent — or `python 02_data_governance_and_quality_for_ai_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "A model that was never validated for the real world",
        "when": "Recurring",
        "where": "AI/ML implementations",
        "impact": "A model deployed without rigorous validation, bias testing, or drift monitoring makes harmful or non-compliant decisions at scale.",
        "body": [
          "AI implementations fail differently: unrepresentative training data, no fairness testing, and no drift monitoring let a model degrade or discriminate silently.",
          "Auditors verify use-case definition, data governance, model validation, responsible-AI controls, adversarial testing, deployment, and post-deployment monitoring."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define System Implementation — AI (Artificial Intelligence) scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull ML platform (SageMaker/Vertex/Azure ML) · Feature + data store",
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
          "year": 2024,
          "event": "EU AI Act sets risk-tiered obligations for AI systems",
          "highlight": true
        },
        {
          "year": 2023,
          "event": "High-profile model bias + drift incidents drive validation rigor"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Data governance and quality for AI\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the data governance and quality for ai control (from ML platform (SageMaker/Vertex/Azure ML)).",
        "The test: Reconcile the in-scope inventory against the System Implementation — AI (Artificial Intelligence) policy/standard and flag every item where the \"Data governance and quality for AI\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (ML platform (SageMaker/Vertex/Azure ML), Feature + data store, Model registry + eval harness) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the data governance and quality for ai control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "NIST AI Risk Management Framework",
          "url": "https://www.nist.gov/itl/ai-risk-management-framework"
        },
        {
          "title": "ISO/IEC 42001 — AI management system",
          "url": "https://www.iso.org/standard/81230.html"
        },
        {
          "title": "EU AI Act",
          "url": "https://artificialintelligenceact.eu/"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "02_data_governance_and_quality_for_ai_mcp.py",
          "url": "/audit-code/sysimpl-ai/02_data_governance_and_quality_for_ai_mcp.py",
          "description": "Runnable read-only MCP server: gathers the System Implementation — AI (Artificial Intelligence) evidence for \"Data governance and quality for AI\" (in-scope inventory for the data governance and quality for ai control (from ml platform (sagemaker/vertex/azure ml))), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Data governance and quality for AI\" control for System Implementation — AI (Artificial Intelligence) at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the System Implementation — AI (Artificial Intelligence) policy/standard and flag every item where the \"Data governance and quality for AI\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the data governance and quality for ai control (from ML platform (SageMaker/Vertex/Azure ML)) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live ML platform (SageMaker/Vertex/Azure ML) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. ML platform (SageMaker/Vertex/Azure ML) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from ML platform (SageMaker/Vertex/Azure ML); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — System Implementation — AI (Artificial Intelligence): \"Data governance and quality for AI\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the System Implementation — AI (Artificial Intelligence) policy/standard and flag every item where the \"Data governance and quality for AI\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- sysimpl-ai_inventory.json   (in-scope items — In-scope inventory for the data governance and quality for ai control (from ML platform (SageMaker/Vertex/Azure ML)))\n- sysimpl-ai_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Data governance and quality for AI\",\n  \"domain\": \"System Implementation — AI (Artificial Intelligence)\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{sia_",
        "/evidence/sysimpl-ai_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Data science / ML engineering\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Data governance and quality for AI\" control must cover\n# fragment: data_governance_quality_",
        "/evidence/sysimpl-ai_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "sysimpl-ai_inventory.json",
            "isDir": false
          },
          {
            "name": "sysimpl-ai_state.json",
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
          "value": "FLAG{sia_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/sysimpl-ai_inventory.json",
          "value": "data_governance_quality_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/sysimpl-ai_state.json",
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
          "id": "sia-02-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Data governance and quality for AI\" sub-process of System Implementation — AI (Artificial Intelligence)?",
          "options": [
            "Re-implement the control on the auditor's behalf",
            "Increase the number of tools the team uses",
            "Replace the system owner's judgement entirely",
            "Obtain evidence that the data governance and quality for ai control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run or own the control."
        },
        {
          "id": "sia-02-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Data governance and quality for AI\" matter to the broader System Implementation — AI (Artificial Intelligence) posture?",
          "options": [
            "It is relevant solely for marketing",
            "It has no effect once a firewall exists",
            "It is a control other System Implementation — AI (Artificial Intelligence) controls depend on, so a gap here propagates risk into everything scoped to it",
            "It only affects documentation aesthetics"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure undermines the controls layered on top."
        },
        {
          "id": "sia-02-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Data governance and quality for AI\" control?",
          "options": [
            "The vendor's marketing datasheet",
            "The In-scope inventory for the data governance and quality for ai control (from ML platform (SageMaker/Vertex/Azure ML)) reconciled against policy, plus the resulting findings working paper",
            "A verbal assurance from the team lead",
            "A screenshot of the login page"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — exports reconciled to policy, not assertions."
        },
        {
          "id": "sia-02-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where would an auditor pull the evidence for \"Data governance and quality for AI\"?",
          "options": [
            "ML platform (SageMaker/Vertex/Azure ML) (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., ML platform (SageMaker/Vertex/Azure ML)) via read-only access."
        },
        {
          "id": "sia-02-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Data governance and quality for AI\"?",
          "options": [
            "The external auditor",
            "No one — it is ownerless",
            "The end customer",
            "Data science / ML engineering (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "Data science / ML engineering owns the control data; the auditor independently verifies it."
        },
        {
          "id": "sia-02-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Data governance and quality for AI\", which part stays with the human auditor?",
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
          "id": "sia-02-q7",
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
          "id": "sia-02-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Data governance and quality for AI\", which is a realistic reportable finding?",
          "options": [
            "In-scope items where the data governance and quality for ai control is not applied, mis-scoped, or has drifted from the approved baseline",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the data governance and quality for ai control is not applied, mis-scoped, or has drifted from the approved baseline"
        },
        {
          "id": "sia-02-q9",
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
          "id": "sia-02-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Data governance and quality for AI\" also serve privacy and regulatory goals?",
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
    "epochId": "sysimpl-ai",
    "id": "sia-03",
    "order": 3,
    "title": "Model development and validation",
    "subtitle": "Agentic technical & privacy audit of the model development and validation control",
    "category": "cybersecurity",
    "xp": 100,
    "easeScore": 7,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Model development and validation\" control for System Implementation — AI (Artificial Intelligence) is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the System Implementation — AI (Artificial Intelligence) policy/standard and flag every item where the \"Model development and validation\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the System Implementation — AI (Artificial Intelligence) systems of record (ML platform (SageMaker/Vertex/Azure ML); Feature + data store; Model registry + eval harness) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the model development and validation control (from ML platform (SageMaker/Vertex/Azure ML))",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "ML platform (SageMaker/Vertex/Azure ML)",
        "Feature + data store",
        "Model registry + eval harness",
        "Model monitoring / drift"
      ],
      "dataOwner": [
        "Data science / ML engineering",
        "Data governance",
        "Responsible-AI / risk",
        "Product owners"
      ],
      "scoring": {
        "ease": "EASE 7/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream System Implementation — AI (Artificial Intelligence) controls."
      }
    },
    "badge": {
      "id": "sia-03-badge",
      "name": "System Implementation — AI (Artificial Intelligence) Auditor",
      "emoji": "🤖"
    },
    "wonder": {
      "name": "Model development and validation",
      "location": "System Implementation — AI (Artificial Intelligence)",
      "era": "Present Day",
      "emoji": "🤖"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Model development and validation\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the model development and validation control (from ML platform (SageMaker/Vertex/Azure ML))) with read-only agents, run the test against policy, and issue a defensible opinion on the System Implementation — AI (Artificial Intelligence) control.",
      "year": 2025,
      "overview": [
        "The \"Model development and validation\" sub-process is one of the controls an auditor must verify for System Implementation — AI (Artificial Intelligence). The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the model development and validation control (from ML platform (SageMaker/Vertex/Azure ML)), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here ML platform (SageMaker/Vertex/Azure ML), Feature + data store, Model registry + eval harness — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the System Implementation — AI (Artificial Intelligence) policy/standard and flag every item where the \"Model development and validation\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `03_model_development_and_validation_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from ML platform (SageMaker/Vertex/Azure ML) and Feature + data store (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 03_model_development_and_validation_mcp.py` to expose it to your agent — or `python 03_model_development_and_validation_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "A model that was never validated for the real world",
        "when": "Recurring",
        "where": "AI/ML implementations",
        "impact": "A model deployed without rigorous validation, bias testing, or drift monitoring makes harmful or non-compliant decisions at scale.",
        "body": [
          "AI implementations fail differently: unrepresentative training data, no fairness testing, and no drift monitoring let a model degrade or discriminate silently.",
          "Auditors verify use-case definition, data governance, model validation, responsible-AI controls, adversarial testing, deployment, and post-deployment monitoring."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define System Implementation — AI (Artificial Intelligence) scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull ML platform (SageMaker/Vertex/Azure ML) · Feature + data store",
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
          "year": 2024,
          "event": "EU AI Act sets risk-tiered obligations for AI systems",
          "highlight": true
        },
        {
          "year": 2023,
          "event": "High-profile model bias + drift incidents drive validation rigor"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Model development and validation\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the model development and validation control (from ML platform (SageMaker/Vertex/Azure ML)).",
        "The test: Reconcile the in-scope inventory against the System Implementation — AI (Artificial Intelligence) policy/standard and flag every item where the \"Model development and validation\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (ML platform (SageMaker/Vertex/Azure ML), Feature + data store, Model registry + eval harness) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the model development and validation control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "NIST AI Risk Management Framework",
          "url": "https://www.nist.gov/itl/ai-risk-management-framework"
        },
        {
          "title": "ISO/IEC 42001 — AI management system",
          "url": "https://www.iso.org/standard/81230.html"
        },
        {
          "title": "EU AI Act",
          "url": "https://artificialintelligenceact.eu/"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "03_model_development_and_validation_mcp.py",
          "url": "/audit-code/sysimpl-ai/03_model_development_and_validation_mcp.py",
          "description": "Runnable read-only MCP server: gathers the System Implementation — AI (Artificial Intelligence) evidence for \"Model development and validation\" (in-scope inventory for the model development and validation control (from ml platform (sagemaker/vertex/azure ml))), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Model development and validation\" control for System Implementation — AI (Artificial Intelligence) at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the System Implementation — AI (Artificial Intelligence) policy/standard and flag every item where the \"Model development and validation\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the model development and validation control (from ML platform (SageMaker/Vertex/Azure ML)) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live ML platform (SageMaker/Vertex/Azure ML) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. ML platform (SageMaker/Vertex/Azure ML) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from ML platform (SageMaker/Vertex/Azure ML); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — System Implementation — AI (Artificial Intelligence): \"Model development and validation\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the System Implementation — AI (Artificial Intelligence) policy/standard and flag every item where the \"Model development and validation\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- sysimpl-ai_inventory.json   (in-scope items — In-scope inventory for the model development and validation control (from ML platform (SageMaker/Vertex/Azure ML)))\n- sysimpl-ai_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Model development and validation\",\n  \"domain\": \"System Implementation — AI (Artificial Intelligence)\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{sia_",
        "/evidence/sysimpl-ai_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Data science / ML engineering\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Model development and validation\" control must cover\n# fragment: model_development_validation_",
        "/evidence/sysimpl-ai_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "sysimpl-ai_inventory.json",
            "isDir": false
          },
          {
            "name": "sysimpl-ai_state.json",
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
          "value": "FLAG{sia_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/sysimpl-ai_inventory.json",
          "value": "model_development_validation_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/sysimpl-ai_state.json",
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
          "id": "sia-03-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Model development and validation\" sub-process of System Implementation — AI (Artificial Intelligence)?",
          "options": [
            "Re-implement the control on the auditor's behalf",
            "Increase the number of tools the team uses",
            "Replace the system owner's judgement entirely",
            "Obtain evidence that the model development and validation control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run or own the control."
        },
        {
          "id": "sia-03-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Model development and validation\" matter to the broader System Implementation — AI (Artificial Intelligence) posture?",
          "options": [
            "It is relevant solely for marketing",
            "It has no effect once a firewall exists",
            "It is a control other System Implementation — AI (Artificial Intelligence) controls depend on, so a gap here propagates risk into everything scoped to it",
            "It only affects documentation aesthetics"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure undermines the controls layered on top."
        },
        {
          "id": "sia-03-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Model development and validation\" control?",
          "options": [
            "The vendor's marketing datasheet",
            "The In-scope inventory for the model development and validation control (from ML platform (SageMaker/Vertex/Azure ML)) reconciled against policy, plus the resulting findings working paper",
            "A verbal assurance from the team lead",
            "A screenshot of the login page"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — exports reconciled to policy, not assertions."
        },
        {
          "id": "sia-03-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where would an auditor pull the evidence for \"Model development and validation\"?",
          "options": [
            "ML platform (SageMaker/Vertex/Azure ML) (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., ML platform (SageMaker/Vertex/Azure ML)) via read-only access."
        },
        {
          "id": "sia-03-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Model development and validation\"?",
          "options": [
            "The external auditor",
            "No one — it is ownerless",
            "The end customer",
            "Data science / ML engineering (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "Data science / ML engineering owns the control data; the auditor independently verifies it."
        },
        {
          "id": "sia-03-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Model development and validation\", which part stays with the human auditor?",
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
          "id": "sia-03-q7",
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
          "id": "sia-03-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Model development and validation\", which is a realistic reportable finding?",
          "options": [
            "In-scope items where the model development and validation control is not applied, mis-scoped, or has drifted from the approved baseline",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the model development and validation control is not applied, mis-scoped, or has drifted from the approved baseline"
        },
        {
          "id": "sia-03-q9",
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
          "id": "sia-03-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Model development and validation\" also serve privacy and regulatory goals?",
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
    "epochId": "sysimpl-ai",
    "id": "sia-04",
    "order": 4,
    "title": "AI ethics, fairness, responsible AI",
    "subtitle": "Agentic technical & privacy audit of the ai ethics, fairness, responsible ai control",
    "category": "cybersecurity",
    "xp": 100,
    "easeScore": 5,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"AI ethics, fairness, responsible AI\" control for System Implementation — AI (Artificial Intelligence) is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the System Implementation — AI (Artificial Intelligence) policy/standard and flag every item where the \"AI ethics, fairness, responsible AI\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the System Implementation — AI (Artificial Intelligence) systems of record (ML platform (SageMaker/Vertex/Azure ML); Feature + data store; Model registry + eval harness) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the ai ethics, fairness, responsible ai control (from ML platform (SageMaker/Vertex/Azure ML))",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "ML platform (SageMaker/Vertex/Azure ML)",
        "Feature + data store",
        "Model registry + eval harness",
        "Model monitoring / drift"
      ],
      "dataOwner": [
        "Data science / ML engineering",
        "Data governance",
        "Responsible-AI / risk",
        "Product owners"
      ],
      "scoring": {
        "ease": "EASE 5/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream System Implementation — AI (Artificial Intelligence) controls."
      }
    },
    "badge": {
      "id": "sia-04-badge",
      "name": "System Implementation — AI (Artificial Intelligence) Auditor",
      "emoji": "🤖"
    },
    "wonder": {
      "name": "AI ethics, fairness, responsible AI",
      "location": "System Implementation — AI (Artificial Intelligence)",
      "era": "Present Day",
      "emoji": "🤖"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"AI ethics, fairness, responsible AI\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the ai ethics, fairness, responsible ai control (from ML platform (SageMaker/Vertex/Azure ML))) with read-only agents, run the test against policy, and issue a defensible opinion on the System Implementation — AI (Artificial Intelligence) control.",
      "year": 2025,
      "overview": [
        "The \"AI ethics, fairness, responsible AI\" sub-process is one of the controls an auditor must verify for System Implementation — AI (Artificial Intelligence). The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the ai ethics, fairness, responsible ai control (from ML platform (SageMaker/Vertex/Azure ML)), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here ML platform (SageMaker/Vertex/Azure ML), Feature + data store, Model registry + eval harness — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the System Implementation — AI (Artificial Intelligence) policy/standard and flag every item where the \"AI ethics, fairness, responsible AI\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `04_ai_ethics_fairness_responsible_ai_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from ML platform (SageMaker/Vertex/Azure ML) and Feature + data store (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 04_ai_ethics_fairness_responsible_ai_mcp.py` to expose it to your agent — or `python 04_ai_ethics_fairness_responsible_ai_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "A model that was never validated for the real world",
        "when": "Recurring",
        "where": "AI/ML implementations",
        "impact": "A model deployed without rigorous validation, bias testing, or drift monitoring makes harmful or non-compliant decisions at scale.",
        "body": [
          "AI implementations fail differently: unrepresentative training data, no fairness testing, and no drift monitoring let a model degrade or discriminate silently.",
          "Auditors verify use-case definition, data governance, model validation, responsible-AI controls, adversarial testing, deployment, and post-deployment monitoring."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define System Implementation — AI (Artificial Intelligence) scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull ML platform (SageMaker/Vertex/Azure ML) · Feature + data store",
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
          "year": 2024,
          "event": "EU AI Act sets risk-tiered obligations for AI systems",
          "highlight": true
        },
        {
          "year": 2023,
          "event": "High-profile model bias + drift incidents drive validation rigor"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"AI ethics, fairness, responsible AI\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the ai ethics, fairness, responsible ai control (from ML platform (SageMaker/Vertex/Azure ML)).",
        "The test: Reconcile the in-scope inventory against the System Implementation — AI (Artificial Intelligence) policy/standard and flag every item where the \"AI ethics, fairness, responsible AI\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (ML platform (SageMaker/Vertex/Azure ML), Feature + data store, Model registry + eval harness) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the ai ethics, fairness, responsible ai control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "NIST AI Risk Management Framework",
          "url": "https://www.nist.gov/itl/ai-risk-management-framework"
        },
        {
          "title": "ISO/IEC 42001 — AI management system",
          "url": "https://www.iso.org/standard/81230.html"
        },
        {
          "title": "EU AI Act",
          "url": "https://artificialintelligenceact.eu/"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "04_ai_ethics_fairness_responsible_ai_mcp.py",
          "url": "/audit-code/sysimpl-ai/04_ai_ethics_fairness_responsible_ai_mcp.py",
          "description": "Runnable read-only MCP server: gathers the System Implementation — AI (Artificial Intelligence) evidence for \"AI ethics, fairness, responsible AI\" (in-scope inventory for the ai ethics, fairness, responsible ai control (from ml platform (sagemaker/vertex/azure ml))), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"AI ethics, fairness, responsible AI\" control for System Implementation — AI (Artificial Intelligence) at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the System Implementation — AI (Artificial Intelligence) policy/standard and flag every item where the \"AI ethics, fairness, responsible AI\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the ai ethics, fairness, responsible ai control (from ML platform (SageMaker/Vertex/Azure ML)) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live ML platform (SageMaker/Vertex/Azure ML) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. ML platform (SageMaker/Vertex/Azure ML) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from ML platform (SageMaker/Vertex/Azure ML); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — System Implementation — AI (Artificial Intelligence): \"AI ethics, fairness, responsible AI\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the System Implementation — AI (Artificial Intelligence) policy/standard and flag every item where the \"AI ethics, fairness, responsible AI\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- sysimpl-ai_inventory.json   (in-scope items — In-scope inventory for the ai ethics, fairness, responsible ai control (from ML platform (SageMaker/Vertex/Azure ML)))\n- sysimpl-ai_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"AI ethics, fairness, responsible AI\",\n  \"domain\": \"System Implementation — AI (Artificial Intelligence)\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{sia_",
        "/evidence/sysimpl-ai_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Data science / ML engineering\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"AI ethics, fairness, responsible AI\" control must cover\n# fragment: ai_ethics_fairness_",
        "/evidence/sysimpl-ai_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "sysimpl-ai_inventory.json",
            "isDir": false
          },
          {
            "name": "sysimpl-ai_state.json",
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
          "value": "FLAG{sia_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/sysimpl-ai_inventory.json",
          "value": "ai_ethics_fairness_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/sysimpl-ai_state.json",
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
          "id": "sia-04-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"AI ethics, fairness, responsible AI\" sub-process of System Implementation — AI (Artificial Intelligence)?",
          "options": [
            "Re-implement the control on the auditor's behalf",
            "Increase the number of tools the team uses",
            "Replace the system owner's judgement entirely",
            "Obtain evidence that the ai ethics, fairness, responsible ai control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run or own the control."
        },
        {
          "id": "sia-04-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"AI ethics, fairness, responsible AI\" matter to the broader System Implementation — AI (Artificial Intelligence) posture?",
          "options": [
            "It is relevant solely for marketing",
            "It has no effect once a firewall exists",
            "It is a control other System Implementation — AI (Artificial Intelligence) controls depend on, so a gap here propagates risk into everything scoped to it",
            "It only affects documentation aesthetics"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure undermines the controls layered on top."
        },
        {
          "id": "sia-04-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"AI ethics, fairness, responsible AI\" control?",
          "options": [
            "The vendor's marketing datasheet",
            "The In-scope inventory for the ai ethics, fairness, responsible ai control (from ML platform (SageMaker/Vertex/Azure ML)) reconciled against policy, plus the resulting findings working paper",
            "A verbal assurance from the team lead",
            "A screenshot of the login page"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — exports reconciled to policy, not assertions."
        },
        {
          "id": "sia-04-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where would an auditor pull the evidence for \"AI ethics, fairness, responsible AI\"?",
          "options": [
            "ML platform (SageMaker/Vertex/Azure ML) (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., ML platform (SageMaker/Vertex/Azure ML)) via read-only access."
        },
        {
          "id": "sia-04-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"AI ethics, fairness, responsible AI\"?",
          "options": [
            "The external auditor",
            "No one — it is ownerless",
            "The end customer",
            "Data science / ML engineering (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "Data science / ML engineering owns the control data; the auditor independently verifies it."
        },
        {
          "id": "sia-04-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"AI ethics, fairness, responsible AI\", which part stays with the human auditor?",
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
          "id": "sia-04-q7",
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
          "id": "sia-04-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"AI ethics, fairness, responsible AI\", which is a realistic reportable finding?",
          "options": [
            "In-scope items where the ai ethics, fairness, responsible ai control is not applied, mis-scoped, or has drifted from the approved baseline",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the ai ethics, fairness, responsible ai control is not applied, mis-scoped, or has drifted from the approved baseline"
        },
        {
          "id": "sia-04-q9",
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
          "id": "sia-04-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"AI ethics, fairness, responsible AI\" also serve privacy and regulatory goals?",
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
    "epochId": "sysimpl-ai",
    "id": "sia-05",
    "order": 5,
    "title": "AI-specific testing and assurance",
    "subtitle": "Agentic technical & privacy audit of the ai-specific testing and assurance control",
    "category": "cybersecurity",
    "xp": 100,
    "easeScore": 6,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"AI-specific testing and assurance\" control for System Implementation — AI (Artificial Intelligence) is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the System Implementation — AI (Artificial Intelligence) policy/standard and flag every item where the \"AI-specific testing and assurance\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the System Implementation — AI (Artificial Intelligence) systems of record (ML platform (SageMaker/Vertex/Azure ML); Feature + data store; Model registry + eval harness) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the ai-specific testing and assurance control (from ML platform (SageMaker/Vertex/Azure ML))",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "ML platform (SageMaker/Vertex/Azure ML)",
        "Feature + data store",
        "Model registry + eval harness",
        "Model monitoring / drift"
      ],
      "dataOwner": [
        "Data science / ML engineering",
        "Data governance",
        "Responsible-AI / risk",
        "Product owners"
      ],
      "scoring": {
        "ease": "EASE 6/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream System Implementation — AI (Artificial Intelligence) controls."
      }
    },
    "badge": {
      "id": "sia-05-badge",
      "name": "System Implementation — AI (Artificial Intelligence) Auditor",
      "emoji": "🤖"
    },
    "wonder": {
      "name": "AI-specific testing and assurance",
      "location": "System Implementation — AI (Artificial Intelligence)",
      "era": "Present Day",
      "emoji": "🤖"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"AI-specific testing and assurance\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the ai-specific testing and assurance control (from ML platform (SageMaker/Vertex/Azure ML))) with read-only agents, run the test against policy, and issue a defensible opinion on the System Implementation — AI (Artificial Intelligence) control.",
      "year": 2025,
      "overview": [
        "The \"AI-specific testing and assurance\" sub-process is one of the controls an auditor must verify for System Implementation — AI (Artificial Intelligence). The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the ai-specific testing and assurance control (from ML platform (SageMaker/Vertex/Azure ML)), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here ML platform (SageMaker/Vertex/Azure ML), Feature + data store, Model registry + eval harness — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the System Implementation — AI (Artificial Intelligence) policy/standard and flag every item where the \"AI-specific testing and assurance\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `05_ai_specific_testing_and_assurance_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from ML platform (SageMaker/Vertex/Azure ML) and Feature + data store (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 05_ai_specific_testing_and_assurance_mcp.py` to expose it to your agent — or `python 05_ai_specific_testing_and_assurance_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "A model that was never validated for the real world",
        "when": "Recurring",
        "where": "AI/ML implementations",
        "impact": "A model deployed without rigorous validation, bias testing, or drift monitoring makes harmful or non-compliant decisions at scale.",
        "body": [
          "AI implementations fail differently: unrepresentative training data, no fairness testing, and no drift monitoring let a model degrade or discriminate silently.",
          "Auditors verify use-case definition, data governance, model validation, responsible-AI controls, adversarial testing, deployment, and post-deployment monitoring."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define System Implementation — AI (Artificial Intelligence) scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull ML platform (SageMaker/Vertex/Azure ML) · Feature + data store",
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
          "year": 2024,
          "event": "EU AI Act sets risk-tiered obligations for AI systems",
          "highlight": true
        },
        {
          "year": 2023,
          "event": "High-profile model bias + drift incidents drive validation rigor"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"AI-specific testing and assurance\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the ai-specific testing and assurance control (from ML platform (SageMaker/Vertex/Azure ML)).",
        "The test: Reconcile the in-scope inventory against the System Implementation — AI (Artificial Intelligence) policy/standard and flag every item where the \"AI-specific testing and assurance\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (ML platform (SageMaker/Vertex/Azure ML), Feature + data store, Model registry + eval harness) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the ai-specific testing and assurance control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "NIST AI Risk Management Framework",
          "url": "https://www.nist.gov/itl/ai-risk-management-framework"
        },
        {
          "title": "ISO/IEC 42001 — AI management system",
          "url": "https://www.iso.org/standard/81230.html"
        },
        {
          "title": "EU AI Act",
          "url": "https://artificialintelligenceact.eu/"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "05_ai_specific_testing_and_assurance_mcp.py",
          "url": "/audit-code/sysimpl-ai/05_ai_specific_testing_and_assurance_mcp.py",
          "description": "Runnable read-only MCP server: gathers the System Implementation — AI (Artificial Intelligence) evidence for \"AI-specific testing and assurance\" (in-scope inventory for the ai-specific testing and assurance control (from ml platform (sagemaker/vertex/azure ml))), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"AI-specific testing and assurance\" control for System Implementation — AI (Artificial Intelligence) at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the System Implementation — AI (Artificial Intelligence) policy/standard and flag every item where the \"AI-specific testing and assurance\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the ai-specific testing and assurance control (from ML platform (SageMaker/Vertex/Azure ML)) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live ML platform (SageMaker/Vertex/Azure ML) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. ML platform (SageMaker/Vertex/Azure ML) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from ML platform (SageMaker/Vertex/Azure ML); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — System Implementation — AI (Artificial Intelligence): \"AI-specific testing and assurance\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the System Implementation — AI (Artificial Intelligence) policy/standard and flag every item where the \"AI-specific testing and assurance\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- sysimpl-ai_inventory.json   (in-scope items — In-scope inventory for the ai-specific testing and assurance control (from ML platform (SageMaker/Vertex/Azure ML)))\n- sysimpl-ai_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"AI-specific testing and assurance\",\n  \"domain\": \"System Implementation — AI (Artificial Intelligence)\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{sia_",
        "/evidence/sysimpl-ai_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Data science / ML engineering\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"AI-specific testing and assurance\" control must cover\n# fragment: aispecific_testing_assurance_",
        "/evidence/sysimpl-ai_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "sysimpl-ai_inventory.json",
            "isDir": false
          },
          {
            "name": "sysimpl-ai_state.json",
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
          "value": "FLAG{sia_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/sysimpl-ai_inventory.json",
          "value": "aispecific_testing_assurance_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/sysimpl-ai_state.json",
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
          "id": "sia-05-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"AI-specific testing and assurance\" sub-process of System Implementation — AI (Artificial Intelligence)?",
          "options": [
            "Re-implement the control on the auditor's behalf",
            "Increase the number of tools the team uses",
            "Replace the system owner's judgement entirely",
            "Obtain evidence that the ai-specific testing and assurance control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run or own the control."
        },
        {
          "id": "sia-05-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"AI-specific testing and assurance\" matter to the broader System Implementation — AI (Artificial Intelligence) posture?",
          "options": [
            "It is relevant solely for marketing",
            "It has no effect once a firewall exists",
            "It is a control other System Implementation — AI (Artificial Intelligence) controls depend on, so a gap here propagates risk into everything scoped to it",
            "It only affects documentation aesthetics"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure undermines the controls layered on top."
        },
        {
          "id": "sia-05-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"AI-specific testing and assurance\" control?",
          "options": [
            "The vendor's marketing datasheet",
            "The In-scope inventory for the ai-specific testing and assurance control (from ML platform (SageMaker/Vertex/Azure ML)) reconciled against policy, plus the resulting findings working paper",
            "A verbal assurance from the team lead",
            "A screenshot of the login page"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — exports reconciled to policy, not assertions."
        },
        {
          "id": "sia-05-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where would an auditor pull the evidence for \"AI-specific testing and assurance\"?",
          "options": [
            "ML platform (SageMaker/Vertex/Azure ML) (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., ML platform (SageMaker/Vertex/Azure ML)) via read-only access."
        },
        {
          "id": "sia-05-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"AI-specific testing and assurance\"?",
          "options": [
            "The external auditor",
            "No one — it is ownerless",
            "The end customer",
            "Data science / ML engineering (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "Data science / ML engineering owns the control data; the auditor independently verifies it."
        },
        {
          "id": "sia-05-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"AI-specific testing and assurance\", which part stays with the human auditor?",
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
          "id": "sia-05-q7",
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
          "id": "sia-05-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"AI-specific testing and assurance\", which is a realistic reportable finding?",
          "options": [
            "In-scope items where the ai-specific testing and assurance control is not applied, mis-scoped, or has drifted from the approved baseline",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the ai-specific testing and assurance control is not applied, mis-scoped, or has drifted from the approved baseline"
        },
        {
          "id": "sia-05-q9",
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
          "id": "sia-05-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"AI-specific testing and assurance\" also serve privacy and regulatory goals?",
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
    "epochId": "sysimpl-ai",
    "id": "sia-06",
    "order": 6,
    "title": "AI model deployment and infra",
    "subtitle": "Agentic technical & privacy audit of the ai model deployment and infra control",
    "category": "cybersecurity",
    "xp": 100,
    "easeScore": 7,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"AI model deployment and infra\" control for System Implementation — AI (Artificial Intelligence) is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the System Implementation — AI (Artificial Intelligence) policy/standard and flag every item where the \"AI model deployment and infra\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the System Implementation — AI (Artificial Intelligence) systems of record (ML platform (SageMaker/Vertex/Azure ML); Feature + data store; Model registry + eval harness) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the ai model deployment and infra control (from ML platform (SageMaker/Vertex/Azure ML))",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "ML platform (SageMaker/Vertex/Azure ML)",
        "Feature + data store",
        "Model registry + eval harness",
        "Model monitoring / drift"
      ],
      "dataOwner": [
        "Data science / ML engineering",
        "Data governance",
        "Responsible-AI / risk",
        "Product owners"
      ],
      "scoring": {
        "ease": "EASE 7/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream System Implementation — AI (Artificial Intelligence) controls."
      }
    },
    "badge": {
      "id": "sia-06-badge",
      "name": "System Implementation — AI (Artificial Intelligence) Auditor",
      "emoji": "🤖"
    },
    "wonder": {
      "name": "AI model deployment and infra",
      "location": "System Implementation — AI (Artificial Intelligence)",
      "era": "Present Day",
      "emoji": "🤖"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"AI model deployment and infra\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the ai model deployment and infra control (from ML platform (SageMaker/Vertex/Azure ML))) with read-only agents, run the test against policy, and issue a defensible opinion on the System Implementation — AI (Artificial Intelligence) control.",
      "year": 2025,
      "overview": [
        "The \"AI model deployment and infra\" sub-process is one of the controls an auditor must verify for System Implementation — AI (Artificial Intelligence). The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the ai model deployment and infra control (from ML platform (SageMaker/Vertex/Azure ML)), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here ML platform (SageMaker/Vertex/Azure ML), Feature + data store, Model registry + eval harness — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the System Implementation — AI (Artificial Intelligence) policy/standard and flag every item where the \"AI model deployment and infra\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `06_ai_model_deployment_and_infra_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from ML platform (SageMaker/Vertex/Azure ML) and Feature + data store (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 06_ai_model_deployment_and_infra_mcp.py` to expose it to your agent — or `python 06_ai_model_deployment_and_infra_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "A model that was never validated for the real world",
        "when": "Recurring",
        "where": "AI/ML implementations",
        "impact": "A model deployed without rigorous validation, bias testing, or drift monitoring makes harmful or non-compliant decisions at scale.",
        "body": [
          "AI implementations fail differently: unrepresentative training data, no fairness testing, and no drift monitoring let a model degrade or discriminate silently.",
          "Auditors verify use-case definition, data governance, model validation, responsible-AI controls, adversarial testing, deployment, and post-deployment monitoring."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define System Implementation — AI (Artificial Intelligence) scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull ML platform (SageMaker/Vertex/Azure ML) · Feature + data store",
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
          "year": 2024,
          "event": "EU AI Act sets risk-tiered obligations for AI systems",
          "highlight": true
        },
        {
          "year": 2023,
          "event": "High-profile model bias + drift incidents drive validation rigor"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"AI model deployment and infra\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the ai model deployment and infra control (from ML platform (SageMaker/Vertex/Azure ML)).",
        "The test: Reconcile the in-scope inventory against the System Implementation — AI (Artificial Intelligence) policy/standard and flag every item where the \"AI model deployment and infra\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (ML platform (SageMaker/Vertex/Azure ML), Feature + data store, Model registry + eval harness) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the ai model deployment and infra control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "NIST AI Risk Management Framework",
          "url": "https://www.nist.gov/itl/ai-risk-management-framework"
        },
        {
          "title": "ISO/IEC 42001 — AI management system",
          "url": "https://www.iso.org/standard/81230.html"
        },
        {
          "title": "EU AI Act",
          "url": "https://artificialintelligenceact.eu/"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "06_ai_model_deployment_and_infra_mcp.py",
          "url": "/audit-code/sysimpl-ai/06_ai_model_deployment_and_infra_mcp.py",
          "description": "Runnable read-only MCP server: gathers the System Implementation — AI (Artificial Intelligence) evidence for \"AI model deployment and infra\" (in-scope inventory for the ai model deployment and infra control (from ml platform (sagemaker/vertex/azure ml))), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"AI model deployment and infra\" control for System Implementation — AI (Artificial Intelligence) at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the System Implementation — AI (Artificial Intelligence) policy/standard and flag every item where the \"AI model deployment and infra\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the ai model deployment and infra control (from ML platform (SageMaker/Vertex/Azure ML)) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live ML platform (SageMaker/Vertex/Azure ML) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. ML platform (SageMaker/Vertex/Azure ML) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from ML platform (SageMaker/Vertex/Azure ML); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — System Implementation — AI (Artificial Intelligence): \"AI model deployment and infra\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the System Implementation — AI (Artificial Intelligence) policy/standard and flag every item where the \"AI model deployment and infra\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- sysimpl-ai_inventory.json   (in-scope items — In-scope inventory for the ai model deployment and infra control (from ML platform (SageMaker/Vertex/Azure ML)))\n- sysimpl-ai_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"AI model deployment and infra\",\n  \"domain\": \"System Implementation — AI (Artificial Intelligence)\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{sia_",
        "/evidence/sysimpl-ai_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Data science / ML engineering\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"AI model deployment and infra\" control must cover\n# fragment: ai_model_deployment_",
        "/evidence/sysimpl-ai_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "sysimpl-ai_inventory.json",
            "isDir": false
          },
          {
            "name": "sysimpl-ai_state.json",
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
          "value": "FLAG{sia_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/sysimpl-ai_inventory.json",
          "value": "ai_model_deployment_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/sysimpl-ai_state.json",
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
          "id": "sia-06-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"AI model deployment and infra\" sub-process of System Implementation — AI (Artificial Intelligence)?",
          "options": [
            "Re-implement the control on the auditor's behalf",
            "Increase the number of tools the team uses",
            "Replace the system owner's judgement entirely",
            "Obtain evidence that the ai model deployment and infra control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run or own the control."
        },
        {
          "id": "sia-06-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"AI model deployment and infra\" matter to the broader System Implementation — AI (Artificial Intelligence) posture?",
          "options": [
            "It is relevant solely for marketing",
            "It has no effect once a firewall exists",
            "It is a control other System Implementation — AI (Artificial Intelligence) controls depend on, so a gap here propagates risk into everything scoped to it",
            "It only affects documentation aesthetics"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure undermines the controls layered on top."
        },
        {
          "id": "sia-06-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"AI model deployment and infra\" control?",
          "options": [
            "The vendor's marketing datasheet",
            "The In-scope inventory for the ai model deployment and infra control (from ML platform (SageMaker/Vertex/Azure ML)) reconciled against policy, plus the resulting findings working paper",
            "A verbal assurance from the team lead",
            "A screenshot of the login page"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — exports reconciled to policy, not assertions."
        },
        {
          "id": "sia-06-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where would an auditor pull the evidence for \"AI model deployment and infra\"?",
          "options": [
            "ML platform (SageMaker/Vertex/Azure ML) (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., ML platform (SageMaker/Vertex/Azure ML)) via read-only access."
        },
        {
          "id": "sia-06-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"AI model deployment and infra\"?",
          "options": [
            "The external auditor",
            "No one — it is ownerless",
            "The end customer",
            "Data science / ML engineering (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "Data science / ML engineering owns the control data; the auditor independently verifies it."
        },
        {
          "id": "sia-06-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"AI model deployment and infra\", which part stays with the human auditor?",
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
          "id": "sia-06-q7",
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
          "id": "sia-06-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"AI model deployment and infra\", which is a realistic reportable finding?",
          "options": [
            "In-scope items where the ai model deployment and infra control is not applied, mis-scoped, or has drifted from the approved baseline",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the ai model deployment and infra control is not applied, mis-scoped, or has drifted from the approved baseline"
        },
        {
          "id": "sia-06-q9",
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
          "id": "sia-06-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"AI model deployment and infra\" also serve privacy and regulatory goals?",
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
    "epochId": "sysimpl-ai",
    "id": "sia-07",
    "order": 7,
    "title": "Model lifecycle and drift mgmt",
    "subtitle": "Agentic technical & privacy audit of the model lifecycle and drift mgmt control",
    "category": "cybersecurity",
    "xp": 100,
    "easeScore": 5,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Model lifecycle and drift mgmt\" control for System Implementation — AI (Artificial Intelligence) is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the System Implementation — AI (Artificial Intelligence) policy/standard and flag every item where the \"Model lifecycle and drift mgmt\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the System Implementation — AI (Artificial Intelligence) systems of record (ML platform (SageMaker/Vertex/Azure ML); Feature + data store; Model registry + eval harness) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the model lifecycle and drift mgmt control (from ML platform (SageMaker/Vertex/Azure ML))",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "ML platform (SageMaker/Vertex/Azure ML)",
        "Feature + data store",
        "Model registry + eval harness",
        "Model monitoring / drift"
      ],
      "dataOwner": [
        "Data science / ML engineering",
        "Data governance",
        "Responsible-AI / risk",
        "Product owners"
      ],
      "scoring": {
        "ease": "EASE 5/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream System Implementation — AI (Artificial Intelligence) controls."
      }
    },
    "badge": {
      "id": "sia-07-badge",
      "name": "System Implementation — AI (Artificial Intelligence) Auditor",
      "emoji": "🤖"
    },
    "wonder": {
      "name": "Model lifecycle and drift mgmt",
      "location": "System Implementation — AI (Artificial Intelligence)",
      "era": "Present Day",
      "emoji": "🤖"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Model lifecycle and drift mgmt\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the model lifecycle and drift mgmt control (from ML platform (SageMaker/Vertex/Azure ML))) with read-only agents, run the test against policy, and issue a defensible opinion on the System Implementation — AI (Artificial Intelligence) control.",
      "year": 2025,
      "overview": [
        "The \"Model lifecycle and drift mgmt\" sub-process is one of the controls an auditor must verify for System Implementation — AI (Artificial Intelligence). The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the model lifecycle and drift mgmt control (from ML platform (SageMaker/Vertex/Azure ML)), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here ML platform (SageMaker/Vertex/Azure ML), Feature + data store, Model registry + eval harness — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the System Implementation — AI (Artificial Intelligence) policy/standard and flag every item where the \"Model lifecycle and drift mgmt\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `07_model_lifecycle_and_drift_mgmt_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from ML platform (SageMaker/Vertex/Azure ML) and Feature + data store (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 07_model_lifecycle_and_drift_mgmt_mcp.py` to expose it to your agent — or `python 07_model_lifecycle_and_drift_mgmt_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "A model that was never validated for the real world",
        "when": "Recurring",
        "where": "AI/ML implementations",
        "impact": "A model deployed without rigorous validation, bias testing, or drift monitoring makes harmful or non-compliant decisions at scale.",
        "body": [
          "AI implementations fail differently: unrepresentative training data, no fairness testing, and no drift monitoring let a model degrade or discriminate silently.",
          "Auditors verify use-case definition, data governance, model validation, responsible-AI controls, adversarial testing, deployment, and post-deployment monitoring."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define System Implementation — AI (Artificial Intelligence) scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull ML platform (SageMaker/Vertex/Azure ML) · Feature + data store",
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
          "year": 2024,
          "event": "EU AI Act sets risk-tiered obligations for AI systems",
          "highlight": true
        },
        {
          "year": 2023,
          "event": "High-profile model bias + drift incidents drive validation rigor"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Model lifecycle and drift mgmt\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the model lifecycle and drift mgmt control (from ML platform (SageMaker/Vertex/Azure ML)).",
        "The test: Reconcile the in-scope inventory against the System Implementation — AI (Artificial Intelligence) policy/standard and flag every item where the \"Model lifecycle and drift mgmt\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (ML platform (SageMaker/Vertex/Azure ML), Feature + data store, Model registry + eval harness) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the model lifecycle and drift mgmt control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "NIST AI Risk Management Framework",
          "url": "https://www.nist.gov/itl/ai-risk-management-framework"
        },
        {
          "title": "ISO/IEC 42001 — AI management system",
          "url": "https://www.iso.org/standard/81230.html"
        },
        {
          "title": "EU AI Act",
          "url": "https://artificialintelligenceact.eu/"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "07_model_lifecycle_and_drift_mgmt_mcp.py",
          "url": "/audit-code/sysimpl-ai/07_model_lifecycle_and_drift_mgmt_mcp.py",
          "description": "Runnable read-only MCP server: gathers the System Implementation — AI (Artificial Intelligence) evidence for \"Model lifecycle and drift mgmt\" (in-scope inventory for the model lifecycle and drift mgmt control (from ml platform (sagemaker/vertex/azure ml))), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Model lifecycle and drift mgmt\" control for System Implementation — AI (Artificial Intelligence) at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the System Implementation — AI (Artificial Intelligence) policy/standard and flag every item where the \"Model lifecycle and drift mgmt\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the model lifecycle and drift mgmt control (from ML platform (SageMaker/Vertex/Azure ML)) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live ML platform (SageMaker/Vertex/Azure ML) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. ML platform (SageMaker/Vertex/Azure ML) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from ML platform (SageMaker/Vertex/Azure ML); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — System Implementation — AI (Artificial Intelligence): \"Model lifecycle and drift mgmt\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the System Implementation — AI (Artificial Intelligence) policy/standard and flag every item where the \"Model lifecycle and drift mgmt\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- sysimpl-ai_inventory.json   (in-scope items — In-scope inventory for the model lifecycle and drift mgmt control (from ML platform (SageMaker/Vertex/Azure ML)))\n- sysimpl-ai_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Model lifecycle and drift mgmt\",\n  \"domain\": \"System Implementation — AI (Artificial Intelligence)\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{sia_",
        "/evidence/sysimpl-ai_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Data science / ML engineering\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Model lifecycle and drift mgmt\" control must cover\n# fragment: model_lifecycle_drift_",
        "/evidence/sysimpl-ai_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "sysimpl-ai_inventory.json",
            "isDir": false
          },
          {
            "name": "sysimpl-ai_state.json",
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
          "value": "FLAG{sia_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/sysimpl-ai_inventory.json",
          "value": "model_lifecycle_drift_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/sysimpl-ai_state.json",
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
          "id": "sia-07-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Model lifecycle and drift mgmt\" sub-process of System Implementation — AI (Artificial Intelligence)?",
          "options": [
            "Re-implement the control on the auditor's behalf",
            "Increase the number of tools the team uses",
            "Replace the system owner's judgement entirely",
            "Obtain evidence that the model lifecycle and drift mgmt control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run or own the control."
        },
        {
          "id": "sia-07-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Model lifecycle and drift mgmt\" matter to the broader System Implementation — AI (Artificial Intelligence) posture?",
          "options": [
            "It is relevant solely for marketing",
            "It has no effect once a firewall exists",
            "It is a control other System Implementation — AI (Artificial Intelligence) controls depend on, so a gap here propagates risk into everything scoped to it",
            "It only affects documentation aesthetics"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure undermines the controls layered on top."
        },
        {
          "id": "sia-07-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Model lifecycle and drift mgmt\" control?",
          "options": [
            "The vendor's marketing datasheet",
            "The In-scope inventory for the model lifecycle and drift mgmt control (from ML platform (SageMaker/Vertex/Azure ML)) reconciled against policy, plus the resulting findings working paper",
            "A verbal assurance from the team lead",
            "A screenshot of the login page"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — exports reconciled to policy, not assertions."
        },
        {
          "id": "sia-07-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where would an auditor pull the evidence for \"Model lifecycle and drift mgmt\"?",
          "options": [
            "ML platform (SageMaker/Vertex/Azure ML) (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., ML platform (SageMaker/Vertex/Azure ML)) via read-only access."
        },
        {
          "id": "sia-07-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Model lifecycle and drift mgmt\"?",
          "options": [
            "The external auditor",
            "No one — it is ownerless",
            "The end customer",
            "Data science / ML engineering (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "Data science / ML engineering owns the control data; the auditor independently verifies it."
        },
        {
          "id": "sia-07-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Model lifecycle and drift mgmt\", which part stays with the human auditor?",
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
          "id": "sia-07-q7",
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
          "id": "sia-07-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Model lifecycle and drift mgmt\", which is a realistic reportable finding?",
          "options": [
            "In-scope items where the model lifecycle and drift mgmt control is not applied, mis-scoped, or has drifted from the approved baseline",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the model lifecycle and drift mgmt control is not applied, mis-scoped, or has drifted from the approved baseline"
        },
        {
          "id": "sia-07-q9",
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
          "id": "sia-07-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Model lifecycle and drift mgmt\" also serve privacy and regulatory goals?",
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
    "epochId": "sysimpl-ai",
    "id": "sia-08",
    "order": 8,
    "title": "AI security and adversarial testing",
    "subtitle": "Agentic technical & privacy audit of the ai security and adversarial testing control",
    "category": "cybersecurity",
    "xp": 100,
    "easeScore": 4,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"AI security and adversarial testing\" control for System Implementation — AI (Artificial Intelligence) is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the System Implementation — AI (Artificial Intelligence) policy/standard and flag every item where the \"AI security and adversarial testing\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the System Implementation — AI (Artificial Intelligence) systems of record (ML platform (SageMaker/Vertex/Azure ML); Feature + data store; Model registry + eval harness) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the ai security and adversarial testing control (from ML platform (SageMaker/Vertex/Azure ML))",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "ML platform (SageMaker/Vertex/Azure ML)",
        "Feature + data store",
        "Model registry + eval harness",
        "Model monitoring / drift"
      ],
      "dataOwner": [
        "Data science / ML engineering",
        "Data governance",
        "Responsible-AI / risk",
        "Product owners"
      ],
      "scoring": {
        "ease": "EASE 4/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream System Implementation — AI (Artificial Intelligence) controls."
      }
    },
    "badge": {
      "id": "sia-08-badge",
      "name": "System Implementation — AI (Artificial Intelligence) Auditor",
      "emoji": "🤖"
    },
    "wonder": {
      "name": "AI security and adversarial testing",
      "location": "System Implementation — AI (Artificial Intelligence)",
      "era": "Present Day",
      "emoji": "🤖"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"AI security and adversarial testing\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the ai security and adversarial testing control (from ML platform (SageMaker/Vertex/Azure ML))) with read-only agents, run the test against policy, and issue a defensible opinion on the System Implementation — AI (Artificial Intelligence) control.",
      "year": 2025,
      "overview": [
        "The \"AI security and adversarial testing\" sub-process is one of the controls an auditor must verify for System Implementation — AI (Artificial Intelligence). The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the ai security and adversarial testing control (from ML platform (SageMaker/Vertex/Azure ML)), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here ML platform (SageMaker/Vertex/Azure ML), Feature + data store, Model registry + eval harness — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the System Implementation — AI (Artificial Intelligence) policy/standard and flag every item where the \"AI security and adversarial testing\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `08_ai_security_and_adversarial_testing_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from ML platform (SageMaker/Vertex/Azure ML) and Feature + data store (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 08_ai_security_and_adversarial_testing_mcp.py` to expose it to your agent — or `python 08_ai_security_and_adversarial_testing_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "A model that was never validated for the real world",
        "when": "Recurring",
        "where": "AI/ML implementations",
        "impact": "A model deployed without rigorous validation, bias testing, or drift monitoring makes harmful or non-compliant decisions at scale.",
        "body": [
          "AI implementations fail differently: unrepresentative training data, no fairness testing, and no drift monitoring let a model degrade or discriminate silently.",
          "Auditors verify use-case definition, data governance, model validation, responsible-AI controls, adversarial testing, deployment, and post-deployment monitoring."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define System Implementation — AI (Artificial Intelligence) scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull ML platform (SageMaker/Vertex/Azure ML) · Feature + data store",
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
          "year": 2024,
          "event": "EU AI Act sets risk-tiered obligations for AI systems",
          "highlight": true
        },
        {
          "year": 2023,
          "event": "High-profile model bias + drift incidents drive validation rigor"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"AI security and adversarial testing\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the ai security and adversarial testing control (from ML platform (SageMaker/Vertex/Azure ML)).",
        "The test: Reconcile the in-scope inventory against the System Implementation — AI (Artificial Intelligence) policy/standard and flag every item where the \"AI security and adversarial testing\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (ML platform (SageMaker/Vertex/Azure ML), Feature + data store, Model registry + eval harness) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the ai security and adversarial testing control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "NIST AI Risk Management Framework",
          "url": "https://www.nist.gov/itl/ai-risk-management-framework"
        },
        {
          "title": "ISO/IEC 42001 — AI management system",
          "url": "https://www.iso.org/standard/81230.html"
        },
        {
          "title": "EU AI Act",
          "url": "https://artificialintelligenceact.eu/"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "08_ai_security_and_adversarial_testing_mcp.py",
          "url": "/audit-code/sysimpl-ai/08_ai_security_and_adversarial_testing_mcp.py",
          "description": "Runnable read-only MCP server: gathers the System Implementation — AI (Artificial Intelligence) evidence for \"AI security and adversarial testing\" (in-scope inventory for the ai security and adversarial testing control (from ml platform (sagemaker/vertex/azure ml))), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"AI security and adversarial testing\" control for System Implementation — AI (Artificial Intelligence) at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the System Implementation — AI (Artificial Intelligence) policy/standard and flag every item where the \"AI security and adversarial testing\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the ai security and adversarial testing control (from ML platform (SageMaker/Vertex/Azure ML)) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live ML platform (SageMaker/Vertex/Azure ML) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. ML platform (SageMaker/Vertex/Azure ML) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from ML platform (SageMaker/Vertex/Azure ML); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — System Implementation — AI (Artificial Intelligence): \"AI security and adversarial testing\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the System Implementation — AI (Artificial Intelligence) policy/standard and flag every item where the \"AI security and adversarial testing\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- sysimpl-ai_inventory.json   (in-scope items — In-scope inventory for the ai security and adversarial testing control (from ML platform (SageMaker/Vertex/Azure ML)))\n- sysimpl-ai_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"AI security and adversarial testing\",\n  \"domain\": \"System Implementation — AI (Artificial Intelligence)\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{sia_",
        "/evidence/sysimpl-ai_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Data science / ML engineering\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"AI security and adversarial testing\" control must cover\n# fragment: ai_security_adversarial_",
        "/evidence/sysimpl-ai_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "sysimpl-ai_inventory.json",
            "isDir": false
          },
          {
            "name": "sysimpl-ai_state.json",
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
          "value": "FLAG{sia_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/sysimpl-ai_inventory.json",
          "value": "ai_security_adversarial_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/sysimpl-ai_state.json",
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
          "id": "sia-08-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"AI security and adversarial testing\" sub-process of System Implementation — AI (Artificial Intelligence)?",
          "options": [
            "Re-implement the control on the auditor's behalf",
            "Increase the number of tools the team uses",
            "Replace the system owner's judgement entirely",
            "Obtain evidence that the ai security and adversarial testing control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run or own the control."
        },
        {
          "id": "sia-08-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"AI security and adversarial testing\" matter to the broader System Implementation — AI (Artificial Intelligence) posture?",
          "options": [
            "It is relevant solely for marketing",
            "It has no effect once a firewall exists",
            "It is a control other System Implementation — AI (Artificial Intelligence) controls depend on, so a gap here propagates risk into everything scoped to it",
            "It only affects documentation aesthetics"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure undermines the controls layered on top."
        },
        {
          "id": "sia-08-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"AI security and adversarial testing\" control?",
          "options": [
            "The vendor's marketing datasheet",
            "The In-scope inventory for the ai security and adversarial testing control (from ML platform (SageMaker/Vertex/Azure ML)) reconciled against policy, plus the resulting findings working paper",
            "A verbal assurance from the team lead",
            "A screenshot of the login page"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — exports reconciled to policy, not assertions."
        },
        {
          "id": "sia-08-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where would an auditor pull the evidence for \"AI security and adversarial testing\"?",
          "options": [
            "ML platform (SageMaker/Vertex/Azure ML) (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., ML platform (SageMaker/Vertex/Azure ML)) via read-only access."
        },
        {
          "id": "sia-08-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"AI security and adversarial testing\"?",
          "options": [
            "The external auditor",
            "No one — it is ownerless",
            "The end customer",
            "Data science / ML engineering (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "Data science / ML engineering owns the control data; the auditor independently verifies it."
        },
        {
          "id": "sia-08-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"AI security and adversarial testing\", which part stays with the human auditor?",
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
          "id": "sia-08-q7",
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
          "id": "sia-08-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"AI security and adversarial testing\", which is a realistic reportable finding?",
          "options": [
            "In-scope items where the ai security and adversarial testing control is not applied, mis-scoped, or has drifted from the approved baseline",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the ai security and adversarial testing control is not applied, mis-scoped, or has drifted from the approved baseline"
        },
        {
          "id": "sia-08-q9",
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
          "id": "sia-08-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"AI security and adversarial testing\" also serve privacy and regulatory goals?",
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
    "epochId": "sysimpl-ai",
    "id": "sia-09",
    "order": 9,
    "title": "Regulatory and legal compliance for AI",
    "subtitle": "Agentic technical & privacy audit of the regulatory and legal compliance for ai control",
    "category": "cybersecurity",
    "xp": 100,
    "easeScore": 7,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Regulatory and legal compliance for AI\" control for System Implementation — AI (Artificial Intelligence) is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the System Implementation — AI (Artificial Intelligence) policy/standard and flag every item where the \"Regulatory and legal compliance for AI\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the System Implementation — AI (Artificial Intelligence) systems of record (ML platform (SageMaker/Vertex/Azure ML); Feature + data store; Model registry + eval harness) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the regulatory and legal compliance for ai control (from ML platform (SageMaker/Vertex/Azure ML))",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "ML platform (SageMaker/Vertex/Azure ML)",
        "Feature + data store",
        "Model registry + eval harness",
        "Model monitoring / drift"
      ],
      "dataOwner": [
        "Data science / ML engineering",
        "Data governance",
        "Responsible-AI / risk",
        "Product owners"
      ],
      "scoring": {
        "ease": "EASE 7/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream System Implementation — AI (Artificial Intelligence) controls."
      }
    },
    "badge": {
      "id": "sia-09-badge",
      "name": "System Implementation — AI (Artificial Intelligence) Auditor",
      "emoji": "🤖"
    },
    "wonder": {
      "name": "Regulatory and legal compliance for AI",
      "location": "System Implementation — AI (Artificial Intelligence)",
      "era": "Present Day",
      "emoji": "🤖"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Regulatory and legal compliance for AI\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the regulatory and legal compliance for ai control (from ML platform (SageMaker/Vertex/Azure ML))) with read-only agents, run the test against policy, and issue a defensible opinion on the System Implementation — AI (Artificial Intelligence) control.",
      "year": 2025,
      "overview": [
        "The \"Regulatory and legal compliance for AI\" sub-process is one of the controls an auditor must verify for System Implementation — AI (Artificial Intelligence). The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the regulatory and legal compliance for ai control (from ML platform (SageMaker/Vertex/Azure ML)), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here ML platform (SageMaker/Vertex/Azure ML), Feature + data store, Model registry + eval harness — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the System Implementation — AI (Artificial Intelligence) policy/standard and flag every item where the \"Regulatory and legal compliance for AI\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `09_regulatory_and_legal_compliance_for_ai_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from ML platform (SageMaker/Vertex/Azure ML) and Feature + data store (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 09_regulatory_and_legal_compliance_for_ai_mcp.py` to expose it to your agent — or `python 09_regulatory_and_legal_compliance_for_ai_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "A model that was never validated for the real world",
        "when": "Recurring",
        "where": "AI/ML implementations",
        "impact": "A model deployed without rigorous validation, bias testing, or drift monitoring makes harmful or non-compliant decisions at scale.",
        "body": [
          "AI implementations fail differently: unrepresentative training data, no fairness testing, and no drift monitoring let a model degrade or discriminate silently.",
          "Auditors verify use-case definition, data governance, model validation, responsible-AI controls, adversarial testing, deployment, and post-deployment monitoring."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define System Implementation — AI (Artificial Intelligence) scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull ML platform (SageMaker/Vertex/Azure ML) · Feature + data store",
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
          "year": 2024,
          "event": "EU AI Act sets risk-tiered obligations for AI systems",
          "highlight": true
        },
        {
          "year": 2023,
          "event": "High-profile model bias + drift incidents drive validation rigor"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Regulatory and legal compliance for AI\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the regulatory and legal compliance for ai control (from ML platform (SageMaker/Vertex/Azure ML)).",
        "The test: Reconcile the in-scope inventory against the System Implementation — AI (Artificial Intelligence) policy/standard and flag every item where the \"Regulatory and legal compliance for AI\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (ML platform (SageMaker/Vertex/Azure ML), Feature + data store, Model registry + eval harness) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the regulatory and legal compliance for ai control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "NIST AI Risk Management Framework",
          "url": "https://www.nist.gov/itl/ai-risk-management-framework"
        },
        {
          "title": "ISO/IEC 42001 — AI management system",
          "url": "https://www.iso.org/standard/81230.html"
        },
        {
          "title": "EU AI Act",
          "url": "https://artificialintelligenceact.eu/"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "09_regulatory_and_legal_compliance_for_ai_mcp.py",
          "url": "/audit-code/sysimpl-ai/09_regulatory_and_legal_compliance_for_ai_mcp.py",
          "description": "Runnable read-only MCP server: gathers the System Implementation — AI (Artificial Intelligence) evidence for \"Regulatory and legal compliance for AI\" (in-scope inventory for the regulatory and legal compliance for ai control (from ml platform (sagemaker/vertex/azure ml))), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Regulatory and legal compliance for AI\" control for System Implementation — AI (Artificial Intelligence) at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the System Implementation — AI (Artificial Intelligence) policy/standard and flag every item where the \"Regulatory and legal compliance for AI\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the regulatory and legal compliance for ai control (from ML platform (SageMaker/Vertex/Azure ML)) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live ML platform (SageMaker/Vertex/Azure ML) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. ML platform (SageMaker/Vertex/Azure ML) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from ML platform (SageMaker/Vertex/Azure ML); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — System Implementation — AI (Artificial Intelligence): \"Regulatory and legal compliance for AI\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the System Implementation — AI (Artificial Intelligence) policy/standard and flag every item where the \"Regulatory and legal compliance for AI\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- sysimpl-ai_inventory.json   (in-scope items — In-scope inventory for the regulatory and legal compliance for ai control (from ML platform (SageMaker/Vertex/Azure ML)))\n- sysimpl-ai_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Regulatory and legal compliance for AI\",\n  \"domain\": \"System Implementation — AI (Artificial Intelligence)\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{sia_",
        "/evidence/sysimpl-ai_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Data science / ML engineering\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Regulatory and legal compliance for AI\" control must cover\n# fragment: regulatory_legal_compliance_",
        "/evidence/sysimpl-ai_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "sysimpl-ai_inventory.json",
            "isDir": false
          },
          {
            "name": "sysimpl-ai_state.json",
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
          "value": "FLAG{sia_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/sysimpl-ai_inventory.json",
          "value": "regulatory_legal_compliance_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/sysimpl-ai_state.json",
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
          "id": "sia-09-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Regulatory and legal compliance for AI\" sub-process of System Implementation — AI (Artificial Intelligence)?",
          "options": [
            "Re-implement the control on the auditor's behalf",
            "Increase the number of tools the team uses",
            "Replace the system owner's judgement entirely",
            "Obtain evidence that the regulatory and legal compliance for ai control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run or own the control."
        },
        {
          "id": "sia-09-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Regulatory and legal compliance for AI\" matter to the broader System Implementation — AI (Artificial Intelligence) posture?",
          "options": [
            "It is relevant solely for marketing",
            "It has no effect once a firewall exists",
            "It is a control other System Implementation — AI (Artificial Intelligence) controls depend on, so a gap here propagates risk into everything scoped to it",
            "It only affects documentation aesthetics"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure undermines the controls layered on top."
        },
        {
          "id": "sia-09-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Regulatory and legal compliance for AI\" control?",
          "options": [
            "The vendor's marketing datasheet",
            "The In-scope inventory for the regulatory and legal compliance for ai control (from ML platform (SageMaker/Vertex/Azure ML)) reconciled against policy, plus the resulting findings working paper",
            "A verbal assurance from the team lead",
            "A screenshot of the login page"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — exports reconciled to policy, not assertions."
        },
        {
          "id": "sia-09-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where would an auditor pull the evidence for \"Regulatory and legal compliance for AI\"?",
          "options": [
            "ML platform (SageMaker/Vertex/Azure ML) (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., ML platform (SageMaker/Vertex/Azure ML)) via read-only access."
        },
        {
          "id": "sia-09-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Regulatory and legal compliance for AI\"?",
          "options": [
            "The external auditor",
            "No one — it is ownerless",
            "The end customer",
            "Data science / ML engineering (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "Data science / ML engineering owns the control data; the auditor independently verifies it."
        },
        {
          "id": "sia-09-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Regulatory and legal compliance for AI\", which part stays with the human auditor?",
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
          "id": "sia-09-q7",
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
          "id": "sia-09-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Regulatory and legal compliance for AI\", which is a realistic reportable finding?",
          "options": [
            "In-scope items where the regulatory and legal compliance for ai control is not applied, mis-scoped, or has drifted from the approved baseline",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the regulatory and legal compliance for ai control is not applied, mis-scoped, or has drifted from the approved baseline"
        },
        {
          "id": "sia-09-q9",
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
          "id": "sia-09-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Regulatory and legal compliance for AI\" also serve privacy and regulatory goals?",
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
    "epochId": "sysimpl-ai",
    "id": "sia-10",
    "order": 10,
    "title": "Third-party AI / foundation model gov",
    "subtitle": "Agentic technical & privacy audit of the third-party ai / foundation model gov control",
    "category": "cybersecurity",
    "xp": 100,
    "easeScore": 5,
    "valueScore": 9,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Third-party AI / foundation model gov\" control for System Implementation — AI (Artificial Intelligence) is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the System Implementation — AI (Artificial Intelligence) policy/standard and flag every item where the \"Third-party AI / foundation model gov\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the System Implementation — AI (Artificial Intelligence) systems of record (ML platform (SageMaker/Vertex/Azure ML); Feature + data store; Model registry + eval harness) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the third-party ai / foundation model gov control (from ML platform (SageMaker/Vertex/Azure ML))",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "ML platform (SageMaker/Vertex/Azure ML)",
        "Feature + data store",
        "Model registry + eval harness",
        "Model monitoring / drift"
      ],
      "dataOwner": [
        "Data science / ML engineering",
        "Data governance",
        "Responsible-AI / risk",
        "Product owners"
      ],
      "scoring": {
        "ease": "EASE 5/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 9/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream System Implementation — AI (Artificial Intelligence) controls."
      }
    },
    "badge": {
      "id": "sia-10-badge",
      "name": "System Implementation — AI (Artificial Intelligence) Auditor",
      "emoji": "🤖"
    },
    "wonder": {
      "name": "Third-party AI / foundation model gov",
      "location": "System Implementation — AI (Artificial Intelligence)",
      "era": "Present Day",
      "emoji": "🤖"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Third-party AI / foundation model gov\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the third-party ai / foundation model gov control (from ML platform (SageMaker/Vertex/Azure ML))) with read-only agents, run the test against policy, and issue a defensible opinion on the System Implementation — AI (Artificial Intelligence) control.",
      "year": 2025,
      "overview": [
        "The \"Third-party AI / foundation model gov\" sub-process is one of the controls an auditor must verify for System Implementation — AI (Artificial Intelligence). The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the third-party ai / foundation model gov control (from ML platform (SageMaker/Vertex/Azure ML)), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here ML platform (SageMaker/Vertex/Azure ML), Feature + data store, Model registry + eval harness — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the System Implementation — AI (Artificial Intelligence) policy/standard and flag every item where the \"Third-party AI / foundation model gov\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `10_third_party_ai_foundation_model_gov_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from ML platform (SageMaker/Vertex/Azure ML) and Feature + data store (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 10_third_party_ai_foundation_model_gov_mcp.py` to expose it to your agent — or `python 10_third_party_ai_foundation_model_gov_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "A model that was never validated for the real world",
        "when": "Recurring",
        "where": "AI/ML implementations",
        "impact": "A model deployed without rigorous validation, bias testing, or drift monitoring makes harmful or non-compliant decisions at scale.",
        "body": [
          "AI implementations fail differently: unrepresentative training data, no fairness testing, and no drift monitoring let a model degrade or discriminate silently.",
          "Auditors verify use-case definition, data governance, model validation, responsible-AI controls, adversarial testing, deployment, and post-deployment monitoring."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define System Implementation — AI (Artificial Intelligence) scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull ML platform (SageMaker/Vertex/Azure ML) · Feature + data store",
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
          "year": 2024,
          "event": "EU AI Act sets risk-tiered obligations for AI systems",
          "highlight": true
        },
        {
          "year": 2023,
          "event": "High-profile model bias + drift incidents drive validation rigor"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Third-party AI / foundation model gov\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the third-party ai / foundation model gov control (from ML platform (SageMaker/Vertex/Azure ML)).",
        "The test: Reconcile the in-scope inventory against the System Implementation — AI (Artificial Intelligence) policy/standard and flag every item where the \"Third-party AI / foundation model gov\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (ML platform (SageMaker/Vertex/Azure ML), Feature + data store, Model registry + eval harness) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the third-party ai / foundation model gov control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "NIST AI Risk Management Framework",
          "url": "https://www.nist.gov/itl/ai-risk-management-framework"
        },
        {
          "title": "ISO/IEC 42001 — AI management system",
          "url": "https://www.iso.org/standard/81230.html"
        },
        {
          "title": "EU AI Act",
          "url": "https://artificialintelligenceact.eu/"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "10_third_party_ai_foundation_model_gov_mcp.py",
          "url": "/audit-code/sysimpl-ai/10_third_party_ai_foundation_model_gov_mcp.py",
          "description": "Runnable read-only MCP server: gathers the System Implementation — AI (Artificial Intelligence) evidence for \"Third-party AI / foundation model gov\" (in-scope inventory for the third-party ai / foundation model gov control (from ml platform (sagemaker/vertex/azure ml))), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Third-party AI / foundation model gov\" control for System Implementation — AI (Artificial Intelligence) at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the System Implementation — AI (Artificial Intelligence) policy/standard and flag every item where the \"Third-party AI / foundation model gov\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the third-party ai / foundation model gov control (from ML platform (SageMaker/Vertex/Azure ML)) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live ML platform (SageMaker/Vertex/Azure ML) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. ML platform (SageMaker/Vertex/Azure ML) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from ML platform (SageMaker/Vertex/Azure ML); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — System Implementation — AI (Artificial Intelligence): \"Third-party AI / foundation model gov\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the System Implementation — AI (Artificial Intelligence) policy/standard and flag every item where the \"Third-party AI / foundation model gov\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- sysimpl-ai_inventory.json   (in-scope items — In-scope inventory for the third-party ai / foundation model gov control (from ML platform (SageMaker/Vertex/Azure ML)))\n- sysimpl-ai_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Third-party AI / foundation model gov\",\n  \"domain\": \"System Implementation — AI (Artificial Intelligence)\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{sia_",
        "/evidence/sysimpl-ai_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Data science / ML engineering\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Third-party AI / foundation model gov\" control must cover\n# fragment: thirdparty_ai_foundation_",
        "/evidence/sysimpl-ai_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "sysimpl-ai_inventory.json",
            "isDir": false
          },
          {
            "name": "sysimpl-ai_state.json",
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
          "value": "FLAG{sia_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/sysimpl-ai_inventory.json",
          "value": "thirdparty_ai_foundation_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/sysimpl-ai_state.json",
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
          "id": "sia-10-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Third-party AI / foundation model gov\" sub-process of System Implementation — AI (Artificial Intelligence)?",
          "options": [
            "Re-implement the control on the auditor's behalf",
            "Increase the number of tools the team uses",
            "Replace the system owner's judgement entirely",
            "Obtain evidence that the third-party ai / foundation model gov control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run or own the control."
        },
        {
          "id": "sia-10-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Third-party AI / foundation model gov\" matter to the broader System Implementation — AI (Artificial Intelligence) posture?",
          "options": [
            "It is relevant solely for marketing",
            "It has no effect once a firewall exists",
            "It is a control other System Implementation — AI (Artificial Intelligence) controls depend on, so a gap here propagates risk into everything scoped to it",
            "It only affects documentation aesthetics"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure undermines the controls layered on top."
        },
        {
          "id": "sia-10-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Third-party AI / foundation model gov\" control?",
          "options": [
            "The vendor's marketing datasheet",
            "The In-scope inventory for the third-party ai / foundation model gov control (from ML platform (SageMaker/Vertex/Azure ML)) reconciled against policy, plus the resulting findings working paper",
            "A verbal assurance from the team lead",
            "A screenshot of the login page"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — exports reconciled to policy, not assertions."
        },
        {
          "id": "sia-10-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where would an auditor pull the evidence for \"Third-party AI / foundation model gov\"?",
          "options": [
            "ML platform (SageMaker/Vertex/Azure ML) (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., ML platform (SageMaker/Vertex/Azure ML)) via read-only access."
        },
        {
          "id": "sia-10-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Third-party AI / foundation model gov\"?",
          "options": [
            "The external auditor",
            "No one — it is ownerless",
            "The end customer",
            "Data science / ML engineering (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "Data science / ML engineering owns the control data; the auditor independently verifies it."
        },
        {
          "id": "sia-10-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Third-party AI / foundation model gov\", which part stays with the human auditor?",
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
          "id": "sia-10-q7",
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
          "id": "sia-10-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Third-party AI / foundation model gov\", which is a realistic reportable finding?",
          "options": [
            "In-scope items where the third-party ai / foundation model gov control is not applied, mis-scoped, or has drifted from the approved baseline",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the third-party ai / foundation model gov control is not applied, mis-scoped, or has drifted from the approved baseline"
        },
        {
          "id": "sia-10-q9",
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
          "id": "sia-10-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Third-party AI / foundation model gov\" also serve privacy and regulatory goals?",
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
    "epochId": "sysimpl-ai",
    "id": "sia-11",
    "order": 11,
    "title": "Human oversight and accountability",
    "subtitle": "Agentic technical & privacy audit of the human oversight and accountability control",
    "category": "cybersecurity",
    "xp": 100,
    "easeScore": 6,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Human oversight and accountability\" control for System Implementation — AI (Artificial Intelligence) is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the System Implementation — AI (Artificial Intelligence) policy/standard and flag every item where the \"Human oversight and accountability\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the System Implementation — AI (Artificial Intelligence) systems of record (ML platform (SageMaker/Vertex/Azure ML); Feature + data store; Model registry + eval harness) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the human oversight and accountability control (from ML platform (SageMaker/Vertex/Azure ML))",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "ML platform (SageMaker/Vertex/Azure ML)",
        "Feature + data store",
        "Model registry + eval harness",
        "Model monitoring / drift"
      ],
      "dataOwner": [
        "Data science / ML engineering",
        "Data governance",
        "Responsible-AI / risk",
        "Product owners"
      ],
      "scoring": {
        "ease": "EASE 6/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream System Implementation — AI (Artificial Intelligence) controls."
      }
    },
    "badge": {
      "id": "sia-11-badge",
      "name": "System Implementation — AI (Artificial Intelligence) Auditor",
      "emoji": "🤖"
    },
    "wonder": {
      "name": "Human oversight and accountability",
      "location": "System Implementation — AI (Artificial Intelligence)",
      "era": "Present Day",
      "emoji": "🤖"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Human oversight and accountability\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the human oversight and accountability control (from ML platform (SageMaker/Vertex/Azure ML))) with read-only agents, run the test against policy, and issue a defensible opinion on the System Implementation — AI (Artificial Intelligence) control.",
      "year": 2025,
      "overview": [
        "The \"Human oversight and accountability\" sub-process is one of the controls an auditor must verify for System Implementation — AI (Artificial Intelligence). The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the human oversight and accountability control (from ML platform (SageMaker/Vertex/Azure ML)), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here ML platform (SageMaker/Vertex/Azure ML), Feature + data store, Model registry + eval harness — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the System Implementation — AI (Artificial Intelligence) policy/standard and flag every item where the \"Human oversight and accountability\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `11_human_oversight_and_accountability_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from ML platform (SageMaker/Vertex/Azure ML) and Feature + data store (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 11_human_oversight_and_accountability_mcp.py` to expose it to your agent — or `python 11_human_oversight_and_accountability_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "A model that was never validated for the real world",
        "when": "Recurring",
        "where": "AI/ML implementations",
        "impact": "A model deployed without rigorous validation, bias testing, or drift monitoring makes harmful or non-compliant decisions at scale.",
        "body": [
          "AI implementations fail differently: unrepresentative training data, no fairness testing, and no drift monitoring let a model degrade or discriminate silently.",
          "Auditors verify use-case definition, data governance, model validation, responsible-AI controls, adversarial testing, deployment, and post-deployment monitoring."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define System Implementation — AI (Artificial Intelligence) scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull ML platform (SageMaker/Vertex/Azure ML) · Feature + data store",
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
          "year": 2024,
          "event": "EU AI Act sets risk-tiered obligations for AI systems",
          "highlight": true
        },
        {
          "year": 2023,
          "event": "High-profile model bias + drift incidents drive validation rigor"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Human oversight and accountability\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the human oversight and accountability control (from ML platform (SageMaker/Vertex/Azure ML)).",
        "The test: Reconcile the in-scope inventory against the System Implementation — AI (Artificial Intelligence) policy/standard and flag every item where the \"Human oversight and accountability\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (ML platform (SageMaker/Vertex/Azure ML), Feature + data store, Model registry + eval harness) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the human oversight and accountability control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "NIST AI Risk Management Framework",
          "url": "https://www.nist.gov/itl/ai-risk-management-framework"
        },
        {
          "title": "ISO/IEC 42001 — AI management system",
          "url": "https://www.iso.org/standard/81230.html"
        },
        {
          "title": "EU AI Act",
          "url": "https://artificialintelligenceact.eu/"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "11_human_oversight_and_accountability_mcp.py",
          "url": "/audit-code/sysimpl-ai/11_human_oversight_and_accountability_mcp.py",
          "description": "Runnable read-only MCP server: gathers the System Implementation — AI (Artificial Intelligence) evidence for \"Human oversight and accountability\" (in-scope inventory for the human oversight and accountability control (from ml platform (sagemaker/vertex/azure ml))), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Human oversight and accountability\" control for System Implementation — AI (Artificial Intelligence) at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the System Implementation — AI (Artificial Intelligence) policy/standard and flag every item where the \"Human oversight and accountability\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the human oversight and accountability control (from ML platform (SageMaker/Vertex/Azure ML)) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live ML platform (SageMaker/Vertex/Azure ML) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. ML platform (SageMaker/Vertex/Azure ML) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from ML platform (SageMaker/Vertex/Azure ML); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — System Implementation — AI (Artificial Intelligence): \"Human oversight and accountability\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the System Implementation — AI (Artificial Intelligence) policy/standard and flag every item where the \"Human oversight and accountability\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- sysimpl-ai_inventory.json   (in-scope items — In-scope inventory for the human oversight and accountability control (from ML platform (SageMaker/Vertex/Azure ML)))\n- sysimpl-ai_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Human oversight and accountability\",\n  \"domain\": \"System Implementation — AI (Artificial Intelligence)\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{sia_",
        "/evidence/sysimpl-ai_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Data science / ML engineering\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Human oversight and accountability\" control must cover\n# fragment: human_oversight_accountability_",
        "/evidence/sysimpl-ai_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "sysimpl-ai_inventory.json",
            "isDir": false
          },
          {
            "name": "sysimpl-ai_state.json",
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
          "value": "FLAG{sia_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/sysimpl-ai_inventory.json",
          "value": "human_oversight_accountability_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/sysimpl-ai_state.json",
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
          "id": "sia-11-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Human oversight and accountability\" sub-process of System Implementation — AI (Artificial Intelligence)?",
          "options": [
            "Re-implement the control on the auditor's behalf",
            "Increase the number of tools the team uses",
            "Replace the system owner's judgement entirely",
            "Obtain evidence that the human oversight and accountability control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run or own the control."
        },
        {
          "id": "sia-11-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Human oversight and accountability\" matter to the broader System Implementation — AI (Artificial Intelligence) posture?",
          "options": [
            "It is relevant solely for marketing",
            "It has no effect once a firewall exists",
            "It is a control other System Implementation — AI (Artificial Intelligence) controls depend on, so a gap here propagates risk into everything scoped to it",
            "It only affects documentation aesthetics"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure undermines the controls layered on top."
        },
        {
          "id": "sia-11-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Human oversight and accountability\" control?",
          "options": [
            "The vendor's marketing datasheet",
            "The In-scope inventory for the human oversight and accountability control (from ML platform (SageMaker/Vertex/Azure ML)) reconciled against policy, plus the resulting findings working paper",
            "A verbal assurance from the team lead",
            "A screenshot of the login page"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — exports reconciled to policy, not assertions."
        },
        {
          "id": "sia-11-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where would an auditor pull the evidence for \"Human oversight and accountability\"?",
          "options": [
            "ML platform (SageMaker/Vertex/Azure ML) (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., ML platform (SageMaker/Vertex/Azure ML)) via read-only access."
        },
        {
          "id": "sia-11-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Human oversight and accountability\"?",
          "options": [
            "The external auditor",
            "No one — it is ownerless",
            "The end customer",
            "Data science / ML engineering (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "Data science / ML engineering owns the control data; the auditor independently verifies it."
        },
        {
          "id": "sia-11-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Human oversight and accountability\", which part stays with the human auditor?",
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
          "id": "sia-11-q7",
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
          "id": "sia-11-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Human oversight and accountability\", which is a realistic reportable finding?",
          "options": [
            "In-scope items where the human oversight and accountability control is not applied, mis-scoped, or has drifted from the approved baseline",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the human oversight and accountability control is not applied, mis-scoped, or has drifted from the approved baseline"
        },
        {
          "id": "sia-11-q9",
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
          "id": "sia-11-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Human oversight and accountability\" also serve privacy and regulatory goals?",
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
    "epochId": "sysimpl-ai",
    "id": "sia-12",
    "order": 12,
    "title": "AI performance / post-deployment",
    "subtitle": "Agentic technical & privacy audit of the ai performance / post-deployment control",
    "category": "cybersecurity",
    "xp": 100,
    "easeScore": 7,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"AI performance / post-deployment\" control for System Implementation — AI (Artificial Intelligence) is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the System Implementation — AI (Artificial Intelligence) policy/standard and flag every item where the \"AI performance / post-deployment\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the System Implementation — AI (Artificial Intelligence) systems of record (ML platform (SageMaker/Vertex/Azure ML); Feature + data store; Model registry + eval harness) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the ai performance / post-deployment control (from ML platform (SageMaker/Vertex/Azure ML))",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "ML platform (SageMaker/Vertex/Azure ML)",
        "Feature + data store",
        "Model registry + eval harness",
        "Model monitoring / drift"
      ],
      "dataOwner": [
        "Data science / ML engineering",
        "Data governance",
        "Responsible-AI / risk",
        "Product owners"
      ],
      "scoring": {
        "ease": "EASE 7/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream System Implementation — AI (Artificial Intelligence) controls."
      }
    },
    "badge": {
      "id": "sia-12-badge",
      "name": "System Implementation — AI (Artificial Intelligence) Auditor",
      "emoji": "🤖"
    },
    "wonder": {
      "name": "AI performance / post-deployment",
      "location": "System Implementation — AI (Artificial Intelligence)",
      "era": "Present Day",
      "emoji": "🤖"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"AI performance / post-deployment\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the ai performance / post-deployment control (from ML platform (SageMaker/Vertex/Azure ML))) with read-only agents, run the test against policy, and issue a defensible opinion on the System Implementation — AI (Artificial Intelligence) control.",
      "year": 2025,
      "overview": [
        "The \"AI performance / post-deployment\" sub-process is one of the controls an auditor must verify for System Implementation — AI (Artificial Intelligence). The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the ai performance / post-deployment control (from ML platform (SageMaker/Vertex/Azure ML)), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here ML platform (SageMaker/Vertex/Azure ML), Feature + data store, Model registry + eval harness — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the System Implementation — AI (Artificial Intelligence) policy/standard and flag every item where the \"AI performance / post-deployment\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `12_ai_performance_post_deployment_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from ML platform (SageMaker/Vertex/Azure ML) and Feature + data store (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 12_ai_performance_post_deployment_mcp.py` to expose it to your agent — or `python 12_ai_performance_post_deployment_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "A model that was never validated for the real world",
        "when": "Recurring",
        "where": "AI/ML implementations",
        "impact": "A model deployed without rigorous validation, bias testing, or drift monitoring makes harmful or non-compliant decisions at scale.",
        "body": [
          "AI implementations fail differently: unrepresentative training data, no fairness testing, and no drift monitoring let a model degrade or discriminate silently.",
          "Auditors verify use-case definition, data governance, model validation, responsible-AI controls, adversarial testing, deployment, and post-deployment monitoring."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define System Implementation — AI (Artificial Intelligence) scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull ML platform (SageMaker/Vertex/Azure ML) · Feature + data store",
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
          "year": 2024,
          "event": "EU AI Act sets risk-tiered obligations for AI systems",
          "highlight": true
        },
        {
          "year": 2023,
          "event": "High-profile model bias + drift incidents drive validation rigor"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"AI performance / post-deployment\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the ai performance / post-deployment control (from ML platform (SageMaker/Vertex/Azure ML)).",
        "The test: Reconcile the in-scope inventory against the System Implementation — AI (Artificial Intelligence) policy/standard and flag every item where the \"AI performance / post-deployment\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (ML platform (SageMaker/Vertex/Azure ML), Feature + data store, Model registry + eval harness) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the ai performance / post-deployment control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "NIST AI Risk Management Framework",
          "url": "https://www.nist.gov/itl/ai-risk-management-framework"
        },
        {
          "title": "ISO/IEC 42001 — AI management system",
          "url": "https://www.iso.org/standard/81230.html"
        },
        {
          "title": "EU AI Act",
          "url": "https://artificialintelligenceact.eu/"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "12_ai_performance_post_deployment_mcp.py",
          "url": "/audit-code/sysimpl-ai/12_ai_performance_post_deployment_mcp.py",
          "description": "Runnable read-only MCP server: gathers the System Implementation — AI (Artificial Intelligence) evidence for \"AI performance / post-deployment\" (in-scope inventory for the ai performance / post-deployment control (from ml platform (sagemaker/vertex/azure ml))), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"AI performance / post-deployment\" control for System Implementation — AI (Artificial Intelligence) at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the System Implementation — AI (Artificial Intelligence) policy/standard and flag every item where the \"AI performance / post-deployment\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the ai performance / post-deployment control (from ML platform (SageMaker/Vertex/Azure ML)) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live ML platform (SageMaker/Vertex/Azure ML) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. ML platform (SageMaker/Vertex/Azure ML) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from ML platform (SageMaker/Vertex/Azure ML); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — System Implementation — AI (Artificial Intelligence): \"AI performance / post-deployment\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the System Implementation — AI (Artificial Intelligence) policy/standard and flag every item where the \"AI performance / post-deployment\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- sysimpl-ai_inventory.json   (in-scope items — In-scope inventory for the ai performance / post-deployment control (from ML platform (SageMaker/Vertex/Azure ML)))\n- sysimpl-ai_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"AI performance / post-deployment\",\n  \"domain\": \"System Implementation — AI (Artificial Intelligence)\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{sia_",
        "/evidence/sysimpl-ai_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Data science / ML engineering\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"AI performance / post-deployment\" control must cover\n# fragment: ai_performance_postdeployment_",
        "/evidence/sysimpl-ai_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "sysimpl-ai_inventory.json",
            "isDir": false
          },
          {
            "name": "sysimpl-ai_state.json",
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
          "value": "FLAG{sia_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/sysimpl-ai_inventory.json",
          "value": "ai_performance_postdeployment_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/sysimpl-ai_state.json",
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
          "id": "sia-12-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"AI performance / post-deployment\" sub-process of System Implementation — AI (Artificial Intelligence)?",
          "options": [
            "Re-implement the control on the auditor's behalf",
            "Increase the number of tools the team uses",
            "Replace the system owner's judgement entirely",
            "Obtain evidence that the ai performance / post-deployment control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run or own the control."
        },
        {
          "id": "sia-12-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"AI performance / post-deployment\" matter to the broader System Implementation — AI (Artificial Intelligence) posture?",
          "options": [
            "It is relevant solely for marketing",
            "It has no effect once a firewall exists",
            "It is a control other System Implementation — AI (Artificial Intelligence) controls depend on, so a gap here propagates risk into everything scoped to it",
            "It only affects documentation aesthetics"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure undermines the controls layered on top."
        },
        {
          "id": "sia-12-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"AI performance / post-deployment\" control?",
          "options": [
            "The vendor's marketing datasheet",
            "The In-scope inventory for the ai performance / post-deployment control (from ML platform (SageMaker/Vertex/Azure ML)) reconciled against policy, plus the resulting findings working paper",
            "A verbal assurance from the team lead",
            "A screenshot of the login page"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — exports reconciled to policy, not assertions."
        },
        {
          "id": "sia-12-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where would an auditor pull the evidence for \"AI performance / post-deployment\"?",
          "options": [
            "ML platform (SageMaker/Vertex/Azure ML) (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., ML platform (SageMaker/Vertex/Azure ML)) via read-only access."
        },
        {
          "id": "sia-12-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"AI performance / post-deployment\"?",
          "options": [
            "The external auditor",
            "No one — it is ownerless",
            "The end customer",
            "Data science / ML engineering (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "Data science / ML engineering owns the control data; the auditor independently verifies it."
        },
        {
          "id": "sia-12-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"AI performance / post-deployment\", which part stays with the human auditor?",
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
          "id": "sia-12-q7",
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
          "id": "sia-12-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"AI performance / post-deployment\", which is a realistic reportable finding?",
          "options": [
            "In-scope items where the ai performance / post-deployment control is not applied, mis-scoped, or has drifted from the approved baseline",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the ai performance / post-deployment control is not applied, mis-scoped, or has drifted from the approved baseline"
        },
        {
          "id": "sia-12-q9",
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
          "id": "sia-12-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"AI performance / post-deployment\" also serve privacy and regulatory goals?",
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

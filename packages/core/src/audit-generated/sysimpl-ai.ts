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
    "xp": 140,
    "easeScore": 5,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"AI use case definition\" control for System Implementation — AI (Artificial Intelligence) is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify the AI use-case is properly defined and screened before build. PASS: there's a documented use-case (business problem, success metrics, the consequential decision + its impact), the use-case is risk-classified (EU AI Act tier, prohibited-use screen) up front, feasibility + appropriateness is assessed (AI vs simpler approach, human impact), and stakeholders sign off go/no-go. Exceptions: AI built with no defined use-case or success metric, no risk classification (a high-risk or even prohibited use-case discovered late), AI chosen where a deterministic approach was appropriate, and no go/no-go gate.",
      "approach": "An audit agent calls a read-only MCP server that wraps the System Implementation — AI (Artificial Intelligence) systems of record (AI use-case intake / register; EU AI Act risk-classification; Feasibility / business-case records) as tools — e.g. `the documented use-case: business problem + success metrics + the cons`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The documented AI use-case + problem definition (the business problem, why AI, success metrics, the decision the model informs and its consequence)",
        "The risk classification of the use-case (EU AI Act tier; prohibited/high-risk screening) done before build",
        "The feasibility + appropriateness assessment (is AI the right tool; could a simpler rules approach work; human-impact analysis)",
        "Stakeholder sign-off + go/no-go on the use-case before development starts"
      ],
      "system": [
        "AI use-case intake / register",
        "EU AI Act risk-classification",
        "Feasibility / business-case records",
        "Approval / sign-off workflow"
      ],
      "dataOwner": [
        "Product owner + business sponsor",
        "Responsible-AI / risk",
        "Data science / ML lead"
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
      "tagline": "Auditing \"AI use case definition\" as a repeatable agentic workflow: pull the real evidence (The documented AI use-case + problem definition (the business problem, why AI, success metrics, the decision the model informs and its consequence)) with read-only agents, run the test against policy, and issue a defensible opinion on the System Implementation — AI (Artificial Intelligence) control.",
      "year": 2025,
      "overview": [
        "The \"AI use case definition\" sub-process is one of the controls an auditor must verify for System Implementation — AI (Artificial Intelligence). The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the documented AI use-case + problem definition (the business problem, why AI, success metrics, the decision the model informs and its consequence), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here AI use-case intake / register, EU AI Act risk-classification, Feasibility / business-case records — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `the documented use-case: business problem + success metrics + the consequential ` — read-only, against the systems of record.",
        "The test itself is specific. Verify the AI use-case is properly defined and screened before build. PASS: there's a documented use-case (business problem, success metrics, the consequential decision + its impact), the use-case is risk-classified (EU AI Act tier, prohibited-use screen) up front, feasibility + appropriateness is assessed (AI vs simpler approach, human impact), and stakeholders sign off go/no-go. Exceptions: AI built with no defined use-case or success metric, no risk classification (a high-risk or even prohibited use-case discovered late), AI chosen where a deterministic approach was appropriate, and no go/no-go gate. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `01_ai_use_case_definition_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from AI use-case intake / register and EU AI Act risk-classification (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
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
            "sub": "pull AI use-case intake / register · EU AI Act risk-classification",
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
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "the documented use-case: business problem + success metrics + the consequential decision + its impact\nrisk classification (EU AI Act tier; prohibited-use screen) done before build\nfeasibility + appropriateness (AI vs simpler rules approach; human-impact analysis)\nstakeholder go/no-go sign-off before development"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The documented AI use-case + problem definition (the business problem, why AI, success metrics, the decision the model informs and its consequence).",
        "The test: Verify the AI use-case is properly defined and screened before build.",
        "Reconcile the systems of record (AI use-case intake / register, EU AI Act risk-classification, Feasibility / business-case records) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. Development started on an AI feature with no documented use-case, success metric, or risk classification; only late in build did anyone realise the use-case (inferring protected characteristics) falls in a high-risk/restricted EU AI Act category."
      ],
      "references": [
        {
          "title": "EU AI Act",
          "url": "https://artificialintelligenceact.eu/"
        },
        {
          "title": "NIST AI RMF (Map)",
          "url": "https://www.nist.gov/itl/ai-risk-management-framework"
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
          "description": "Runnable read-only MCP server: gathers the System Implementation — AI (Artificial Intelligence) evidence for \"AI use case definition\" (the documented ai use-case + problem definition (the business problem, why ai, success metrics, the decision the model informs and its consequence)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"AI use case definition\" control for System Implementation — AI (Artificial Intelligence) at AcmeCorp. THE TEST: Verify the AI use-case is properly defined and screened before build. PASS: there's a documented use-case (business problem, success metrics, the consequential decision + its impact), the use-case is risk-classified (EU AI Act tier, prohibited-use screen) up front, feasibility + appropriateness is assessed (AI vs simpler approach, human impact), and stakeholders sign off go/no-go. Exceptions: AI built with no defined use-case or success metric, no risk classification (a high-risk or even prohibited use-case discovered late), AI chosen where a deterministic approach was appropriate, and no go/no-go gate. The evidence — The documented AI use-case + problem definition (the business problem, why AI, success metrics, the decision the model informs and its consequence) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live AI use-case intake / register APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. AI use-case intake / register gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from AI use-case intake / register; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — System Implementation — AI (Artificial Intelligence): \"AI use case definition\" Audit Evidence\n\nThe test:\nVerify the AI use-case is properly defined and screened before build. PASS: there's a documented use-case (business problem, success metrics, the consequential decision + its impact), the use-case is risk-classified (EU AI Act tier, prohibited-use screen) up front, feasibility + appropriateness is assessed (AI vs simpler approach, human impact), and stakeholders sign off go/no-go. Exceptions: AI built with no defined use-case or success metric, no risk classification (a high-risk or even prohibited use-case discovered late), AI chosen where a deterministic approach was appropriate, and no go/no-go gate.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- sysimpl-ai_inventory.json   (in-scope items — The documented AI use-case + problem definition (the business problem, why AI, success metrics, the decision the model informs and its consequence))\n- sysimpl-ai_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
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
            "Deploy and operate the ai use case definition control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the ai use case definition control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for ai use case definition against comparable organisations in the sector",
            "Obtain evidence that the ai use case definition control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "sia-01-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"AI use case definition\" matter to the broader System Implementation — AI (Artificial Intelligence) posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to System Implementation — AI (Artificial Intelligence)",
            "It stops mattering once a firewall and endpoint agent are deployed across the System Implementation — AI (Artificial Intelligence) estate",
            "It is a control other System Implementation — AI (Artificial Intelligence) controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other System Implementation — AI (Artificial Intelligence) controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "sia-01-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"AI use case definition\" control?",
          "options": [
            "A point-in-time screenshot of one system's ai use case definition settings, captured during the walkthrough",
            "The The documented AI use-case + problem definition (the business problem, why AI, success metrics, the decision the model informs and its consequence), reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the ai use case definition control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's ai use case definition capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "sia-01-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"AI use case definition\"?",
          "options": [
            "From AI use-case intake / register and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how ai use case definition works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. AI use-case intake / register) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "sia-01-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"AI use case definition\"?",
          "options": [
            "The external audit firm, since it is the party examining the ai use case definition control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the ai use case definition data is shared, so the accountability sits with no one in particular",
            "Product owner + business sponsor, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Product owner + business sponsor owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "sia-01-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"AI use case definition\", which part stays with the human auditor?",
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
          "id": "sia-01-q7",
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
          "id": "sia-01-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"AI use case definition\", which of these is a realistic reportable finding?",
          "options": [
            "Development started on an AI feature with no documented use-case, success metric, or risk classification; only late in build did anyone realise the use-case (inferring protected characteristics) falls in a high-risk/restricted EU AI Act category.",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. Development started on an AI feature with no documented use-case, success metric, or risk classification; only late in build did anyone realise the use-case (inferring protected characteristics) falls in a high-risk/restricted EU AI Act category. A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "sia-01-q9",
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
          "id": "sia-01-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"AI use case definition\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind ai use case definition, so there is no overlap",
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
    "epochId": "sysimpl-ai",
    "id": "sia-02",
    "order": 2,
    "title": "Data governance and quality for AI",
    "subtitle": "Agentic technical & privacy audit of the data governance and quality for ai control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 6,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Data governance and quality for AI\" control for System Implementation — AI (Artificial Intelligence) is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify the data for this AI system is governed + fit for purpose. PASS: the training/test data is assessed for quality + representativeness against the target population (coverage, balance, label quality), has documented provenance + lawful basis (consent/licensing/classification), is prepared with leakage prevention + feature governance, and meets defined data-acceptance criteria before training. Exceptions: unrepresentative/biased training data (a population the model will serve is absent or under-sampled), unknown provenance/lawful basis, train/test leakage inflating metrics, and no data-quality acceptance gate.",
      "approach": "An audit agent calls a read-only MCP server that wraps the System Implementation — AI (Artificial Intelligence) systems of record (Feature + data store / data catalogue; Data quality + lineage tooling; Consent / licensing + classification records) as tools — e.g. `training/test data quality + representativeness for this use-case (cov`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The training/test data quality + representativeness assessment for this use-case (coverage of the real population, class balance, label quality, known gaps)",
        "Data provenance + lineage + lawful basis for the specific datasets used (consent/licensing, classification)",
        "Data preparation controls (cleaning, de-duplication, leakage prevention between train/test, feature governance)",
        "The data-quality acceptance criteria the dataset had to meet before training"
      ],
      "system": [
        "Feature + data store / data catalogue",
        "Data quality + lineage tooling",
        "Consent / licensing + classification records",
        "Train/test split + leakage checks"
      ],
      "dataOwner": [
        "Data governance + data engineering",
        "Data science / ML",
        "Privacy / Legal"
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
      "tagline": "Auditing \"Data governance and quality for AI\" as a repeatable agentic workflow: pull the real evidence (The training/test data quality + representativeness assessment for this use-case (coverage of the real population, class balance, label quality, known gaps)) with read-only agents, run the test against policy, and issue a defensible opinion on the System Implementation — AI (Artificial Intelligence) control.",
      "year": 2025,
      "overview": [
        "The \"Data governance and quality for AI\" sub-process is one of the controls an auditor must verify for System Implementation — AI (Artificial Intelligence). The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the training/test data quality + representativeness assessment for this use-case (coverage of the real population, class balance, label quality, known gaps), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Feature + data store / data catalogue, Data quality + lineage tooling, Consent / licensing + classification records — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `training/test data quality + representativeness for this use-case (coverage, bal` — read-only, against the systems of record.",
        "The test itself is specific. Verify the data for this AI system is governed + fit for purpose. PASS: the training/test data is assessed for quality + representativeness against the target population (coverage, balance, label quality), has documented provenance + lawful basis (consent/licensing/classification), is prepared with leakage prevention + feature governance, and meets defined data-acceptance criteria before training. Exceptions: unrepresentative/biased training data (a population the model will serve is absent or under-sampled), unknown provenance/lawful basis, train/test leakage inflating metrics, and no data-quality acceptance gate. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `02_data_governance_and_quality_for_ai_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Feature + data store / data catalogue and Data quality + lineage tooling (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
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
            "sub": "pull Feature + data store / data catalogue · Data quality + lineage tooling",
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
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "training/test data quality + representativeness for this use-case (coverage, balance, label quality, gaps)\ndata provenance + lineage + lawful basis (consent/licensing, classification)\ndata-prep controls: cleaning, de-dup, train/test leakage prevention, feature governance\ndata-quality acceptance criteria met before training?"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The training/test data quality + representativeness assessment for this use-case (coverage of the real population, class balance, label quality, known gaps).",
        "The test: Verify the data for this AI system is governed + fit for purpose.",
        "Reconcile the systems of record (Feature + data store / data catalogue, Data quality + lineage tooling, Consent / licensing + classification records) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. The model was trained on data that under-represents a major customer segment, the test set leaked rows from training (inflating reported accuracy), and no one documented the data's provenance or lawful basis for this use."
      ],
      "references": [
        {
          "title": "NIST AI RMF",
          "url": "https://www.nist.gov/itl/ai-risk-management-framework"
        },
        {
          "title": "EU AI Act (Data Governance)",
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
          "description": "Runnable read-only MCP server: gathers the System Implementation — AI (Artificial Intelligence) evidence for \"Data governance and quality for AI\" (the training/test data quality + representativeness assessment for this use-case (coverage of the real population, class balance, label quality, known gaps)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Data governance and quality for AI\" control for System Implementation — AI (Artificial Intelligence) at AcmeCorp. THE TEST: Verify the data for this AI system is governed + fit for purpose. PASS: the training/test data is assessed for quality + representativeness against the target population (coverage, balance, label quality), has documented provenance + lawful basis (consent/licensing/classification), is prepared with leakage prevention + feature governance, and meets defined data-acceptance criteria before training. Exceptions: unrepresentative/biased training data (a population the model will serve is absent or under-sampled), unknown provenance/lawful basis, train/test leakage inflating metrics, and no data-quality acceptance gate. The evidence — The training/test data quality + representativeness assessment for this use-case (coverage of the real population, class balance, label quality, known gaps) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Feature + data store / data catalogue APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Feature + data store / data catalogue gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Feature + data store / data catalogue; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — System Implementation — AI (Artificial Intelligence): \"Data governance and quality for AI\" Audit Evidence\n\nThe test:\nVerify the data for this AI system is governed + fit for purpose. PASS: the training/test data is assessed for quality + representativeness against the target population (coverage, balance, label quality), has documented provenance + lawful basis (consent/licensing/classification), is prepared with leakage prevention + feature governance, and meets defined data-acceptance criteria before training. Exceptions: unrepresentative/biased training data (a population the model will serve is absent or under-sampled), unknown provenance/lawful basis, train/test leakage inflating metrics, and no data-quality acceptance gate.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- sysimpl-ai_inventory.json   (in-scope items — The training/test data quality + representativeness assessment for this use-case (coverage of the real population, class balance, label quality, known gaps))\n- sysimpl-ai_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
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
            "Deploy and operate the data governance and quality for ai control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the data governance and quality for ai control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for data governance and quality for ai against comparable organisations in the sector",
            "Obtain evidence that the data governance and quality for ai control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "sia-02-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Data governance and quality for AI\" matter to the broader System Implementation — AI (Artificial Intelligence) posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to System Implementation — AI (Artificial Intelligence)",
            "It stops mattering once a firewall and endpoint agent are deployed across the System Implementation — AI (Artificial Intelligence) estate",
            "It is a control other System Implementation — AI (Artificial Intelligence) controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other System Implementation — AI (Artificial Intelligence) controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "sia-02-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Data governance and quality for AI\" control?",
          "options": [
            "A point-in-time screenshot of one system's data governance and quality for ai settings, captured during the walkthrough",
            "The The training/test data quality + representativeness assessment for this use-case (coverage of the real population, class balance, label quality, known gaps), reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the data governance and quality for ai control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's data governance and quality for ai capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "sia-02-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Data governance and quality for AI\"?",
          "options": [
            "From Feature + data store / data catalogue and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how data governance and quality for ai works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. Feature + data store / data catalogue) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "sia-02-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Data governance and quality for AI\"?",
          "options": [
            "The external audit firm, since it is the party examining the data governance and quality for ai control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the data governance and quality for ai data is shared, so the accountability sits with no one in particular",
            "Data governance + data engineering, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Data governance + data engineering owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "sia-02-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Data governance and quality for AI\", which part stays with the human auditor?",
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
          "id": "sia-02-q7",
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
          "id": "sia-02-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Data governance and quality for AI\", which of these is a realistic reportable finding?",
          "options": [
            "The model was trained on data that under-represents a major customer segment, the test set leaked rows from training (inflating reported accuracy), and no one documented the data's provenance or lawful basis for this use.",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. The model was trained on data that under-represents a major customer segment, the test set leaked rows from training (inflating reported accuracy), and no one documented the data's provenance or lawful basis for this use. A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "sia-02-q9",
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
          "id": "sia-02-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Data governance and quality for AI\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind data governance and quality for ai, so there is no overlap",
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
    "epochId": "sysimpl-ai",
    "id": "sia-03",
    "order": 3,
    "title": "Model development and validation",
    "subtitle": "Agentic technical & privacy audit of the model development and validation control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 7,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Model development and validation\" control for System Implementation — AI (Artificial Intelligence) is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify the model is developed + validated rigorously for this implementation. PASS: development is tracked + reproducible (experiment tracking, versioning); the model is validated against pre-agreed acceptance criteria on a representative held-out set (performance, robustness, calibration); subgroup/slice performance + error analysis are done; and validation is signed off before deployment. Exceptions: non-reproducible development, validation on a single average metric with no subgroup analysis (hiding poor performance on a group), no pre-agreed acceptance criteria, and deployment with no validation sign-off.",
      "approach": "An audit agent calls a read-only MCP server that wraps the System Implementation — AI (Artificial Intelligence) systems of record (Experiment tracking + model registry; Eval harness + held-out test sets; Subgroup / slice analysis tooling) as tools — e.g. `model development records: experiment tracking + versioning + reproduc`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The model development records (approach, features, hyperparameters, experiment tracking, model versioning/reproducibility)",
        "The validation evidence against pre-agreed acceptance criteria (performance on a held-out/representative test set, robustness, calibration)",
        "Subgroup/slice performance (does it work across populations, not just on average) + error analysis",
        "The validation sign-off before the model is accepted for deployment"
      ],
      "system": [
        "Experiment tracking + model registry",
        "Eval harness + held-out test sets",
        "Subgroup / slice analysis tooling",
        "Validation sign-off records"
      ],
      "dataOwner": [
        "Data science / ML engineering",
        "Model validation / QA",
        "Responsible-AI"
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
      "tagline": "Auditing \"Model development and validation\" as a repeatable agentic workflow: pull the real evidence (The model development records (approach, features, hyperparameters, experiment tracking, model versioning/reproducibility)) with read-only agents, run the test against policy, and issue a defensible opinion on the System Implementation — AI (Artificial Intelligence) control.",
      "year": 2025,
      "overview": [
        "The \"Model development and validation\" sub-process is one of the controls an auditor must verify for System Implementation — AI (Artificial Intelligence). The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the model development records (approach, features, hyperparameters, experiment tracking, model versioning/reproducibility), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Experiment tracking + model registry, Eval harness + held-out test sets, Subgroup / slice analysis tooling — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `model development records: experiment tracking + versioning + reproducibility` — read-only, against the systems of record.",
        "The test itself is specific. Verify the model is developed + validated rigorously for this implementation. PASS: development is tracked + reproducible (experiment tracking, versioning); the model is validated against pre-agreed acceptance criteria on a representative held-out set (performance, robustness, calibration); subgroup/slice performance + error analysis are done; and validation is signed off before deployment. Exceptions: non-reproducible development, validation on a single average metric with no subgroup analysis (hiding poor performance on a group), no pre-agreed acceptance criteria, and deployment with no validation sign-off. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `03_model_development_and_validation_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Experiment tracking + model registry and Eval harness + held-out test sets (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
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
            "sub": "pull Experiment tracking + model registry · Eval harness + held-out test sets",
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
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "model development records: experiment tracking + versioning + reproducibility\nvalidation vs pre-agreed acceptance criteria (representative held-out set: performance, robustness, calibration)\nsubgroup/slice performance + error analysis (works across populations?)\nvalidation sign-off before deployment?"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The model development records (approach, features, hyperparameters, experiment tracking, model versioning/reproducibility).",
        "The test: Verify the model is developed + validated rigorously for this implementation.",
        "Reconcile the systems of record (Experiment tracking + model registry, Eval harness + held-out test sets, Subgroup / slice analysis tooling) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. The model was accepted on a single aggregate accuracy figure; slice analysis (done only after go-live) showed it performs far worse for one demographic, and the development run can't be reproduced because nothing was versioned or tracked."
      ],
      "references": [
        {
          "title": "NIST AI RMF (Measure)",
          "url": "https://www.nist.gov/itl/ai-risk-management-framework"
        },
        {
          "title": "ISO/IEC 42001",
          "url": "https://www.iso.org/standard/81230.html"
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
          "description": "Runnable read-only MCP server: gathers the System Implementation — AI (Artificial Intelligence) evidence for \"Model development and validation\" (the model development records (approach, features, hyperparameters, experiment tracking, model versioning/reproducibility)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Model development and validation\" control for System Implementation — AI (Artificial Intelligence) at AcmeCorp. THE TEST: Verify the model is developed + validated rigorously for this implementation. PASS: development is tracked + reproducible (experiment tracking, versioning); the model is validated against pre-agreed acceptance criteria on a representative held-out set (performance, robustness, calibration); subgroup/slice performance + error analysis are done; and validation is signed off before deployment. Exceptions: non-reproducible development, validation on a single average metric with no subgroup analysis (hiding poor performance on a group), no pre-agreed acceptance criteria, and deployment with no validation sign-off. The evidence — The model development records (approach, features, hyperparameters, experiment tracking, model versioning/reproducibility) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Experiment tracking + model registry APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Experiment tracking + model registry gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Experiment tracking + model registry; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — System Implementation — AI (Artificial Intelligence): \"Model development and validation\" Audit Evidence\n\nThe test:\nVerify the model is developed + validated rigorously for this implementation. PASS: development is tracked + reproducible (experiment tracking, versioning); the model is validated against pre-agreed acceptance criteria on a representative held-out set (performance, robustness, calibration); subgroup/slice performance + error analysis are done; and validation is signed off before deployment. Exceptions: non-reproducible development, validation on a single average metric with no subgroup analysis (hiding poor performance on a group), no pre-agreed acceptance criteria, and deployment with no validation sign-off.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- sysimpl-ai_inventory.json   (in-scope items — The model development records (approach, features, hyperparameters, experiment tracking, model versioning/reproducibility))\n- sysimpl-ai_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
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
            "Deploy and operate the model development and validation control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the model development and validation control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for model development and validation against comparable organisations in the sector",
            "Obtain evidence that the model development and validation control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "sia-03-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Model development and validation\" matter to the broader System Implementation — AI (Artificial Intelligence) posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to System Implementation — AI (Artificial Intelligence)",
            "It stops mattering once a firewall and endpoint agent are deployed across the System Implementation — AI (Artificial Intelligence) estate",
            "It is a control other System Implementation — AI (Artificial Intelligence) controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other System Implementation — AI (Artificial Intelligence) controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "sia-03-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Model development and validation\" control?",
          "options": [
            "A point-in-time screenshot of one system's model development and validation settings, captured during the walkthrough",
            "The The model development records (approach, features, hyperparameters, experiment tracking, model versioning/reproducibility), reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the model development and validation control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's model development and validation capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "sia-03-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Model development and validation\"?",
          "options": [
            "From Experiment tracking + model registry and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how model development and validation works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. Experiment tracking + model registry) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "sia-03-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Model development and validation\"?",
          "options": [
            "The external audit firm, since it is the party examining the model development and validation control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the model development and validation data is shared, so the accountability sits with no one in particular",
            "Data science / ML engineering, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Data science / ML engineering owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "sia-03-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Model development and validation\", which part stays with the human auditor?",
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
          "id": "sia-03-q7",
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
          "id": "sia-03-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Model development and validation\", which of these is a realistic reportable finding?",
          "options": [
            "The model was accepted on a single aggregate accuracy figure; slice analysis (done only after go-live) showed it performs far worse for one demographic, and the development run can't be reproduced because nothing was versioned or tracked.",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. The model was accepted on a single aggregate accuracy figure; slice analysis (done only after go-live) showed it performs far worse for one demographic, and the development run can't be reproduced because nothing was versioned or tracked. A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "sia-03-q9",
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
          "id": "sia-03-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Model development and validation\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind model development and validation, so there is no overlap",
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
    "epochId": "sysimpl-ai",
    "id": "sia-04",
    "order": 4,
    "title": "AI ethics, fairness, responsible AI",
    "subtitle": "Agentic technical & privacy audit of the ai ethics, fairness, responsible ai control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 5,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"AI ethics, fairness, responsible AI\" control for System Implementation — AI (Artificial Intelligence) is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify responsible-AI + fairness controls are implemented for this system. PASS: a fairness/bias assessment is done (protected-attribute + disparate-impact testing with a justified fairness metric), a responsible-AI review covers transparency + explainability + contestability, mitigations are applied where bias is found with residual risk accepted by an owner, and a model card documents it. Exceptions: no fairness/bias testing on a consequential model, no explainability/contestability for affected people, bias found but not mitigated or formally accepted, and no model card/transparency record.",
      "approach": "An audit agent calls a read-only MCP server that wraps the System Implementation — AI (Artificial Intelligence) systems of record (Fairness/bias testing toolkit (Fairlearn / AIF360); Explainability tooling (SHAP / LIME); Responsible-AI review + model card) as tools — e.g. `fairness/bias assessment: protected-attribute + disparate-impact testi`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The fairness/bias assessment for this model (protected-attribute analysis, the fairness metric chosen + justified, disparate-impact testing)",
        "The responsible-AI review (transparency, explainability for affected people, contestability, the ethics sign-off)",
        "Mitigations applied where bias was found (reweighting, threshold adjustment, feature removal) + residual-risk acceptance",
        "The model card / transparency documentation"
      ],
      "system": [
        "Fairness/bias testing toolkit (Fairlearn / AIF360)",
        "Explainability tooling (SHAP / LIME)",
        "Responsible-AI review + model card",
        "Residual-risk register"
      ],
      "dataOwner": [
        "Responsible-AI / ethics",
        "Data science / ML",
        "Legal + business owner"
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
      "tagline": "Auditing \"AI ethics, fairness, responsible AI\" as a repeatable agentic workflow: pull the real evidence (The fairness/bias assessment for this model (protected-attribute analysis, the fairness metric chosen + justified, disparate-impact testing)) with read-only agents, run the test against policy, and issue a defensible opinion on the System Implementation — AI (Artificial Intelligence) control.",
      "year": 2025,
      "overview": [
        "The \"AI ethics, fairness, responsible AI\" sub-process is one of the controls an auditor must verify for System Implementation — AI (Artificial Intelligence). The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the fairness/bias assessment for this model (protected-attribute analysis, the fairness metric chosen + justified, disparate-impact testing), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Fairness/bias testing toolkit (Fairlearn / AIF360), Explainability tooling (SHAP / LIME), Responsible-AI review + model card — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `fairness/bias assessment: protected-attribute + disparate-impact testing (justif` — read-only, against the systems of record.",
        "The test itself is specific. Verify responsible-AI + fairness controls are implemented for this system. PASS: a fairness/bias assessment is done (protected-attribute + disparate-impact testing with a justified fairness metric), a responsible-AI review covers transparency + explainability + contestability, mitigations are applied where bias is found with residual risk accepted by an owner, and a model card documents it. Exceptions: no fairness/bias testing on a consequential model, no explainability/contestability for affected people, bias found but not mitigated or formally accepted, and no model card/transparency record. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `04_ai_ethics_fairness_responsible_ai_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Fairness/bias testing toolkit (Fairlearn / AIF360) and Explainability tooling (SHAP / LIME) (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
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
            "sub": "pull Fairness/bias testing toolkit (Fairlearn / AIF360) · Explainability tooling (SHAP / LIME)",
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
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "fairness/bias assessment: protected-attribute + disparate-impact testing (justified fairness metric)\nresponsible-AI review: transparency + explainability + contestability + ethics sign-off\nmitigations where bias found + residual-risk acceptance\nthe model card / transparency documentation"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The fairness/bias assessment for this model (protected-attribute analysis, the fairness metric chosen + justified, disparate-impact testing).",
        "The test: Verify responsible-AI + fairness controls are implemented for this system.",
        "Reconcile the systems of record (Fairness/bias testing toolkit (Fairlearn / AIF360), Explainability tooling (SHAP / LIME), Responsible-AI review + model card) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. No fairness testing was done before go-live; the model produces a measurable disparate impact against a protected group, there's no explanation available to affected individuals, and no model card or ethics sign-off exists."
      ],
      "references": [
        {
          "title": "NIST AI RMF",
          "url": "https://www.nist.gov/itl/ai-risk-management-framework"
        },
        {
          "title": "OECD AI Principles",
          "url": "https://oecd.ai/en/ai-principles"
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
          "description": "Runnable read-only MCP server: gathers the System Implementation — AI (Artificial Intelligence) evidence for \"AI ethics, fairness, responsible AI\" (the fairness/bias assessment for this model (protected-attribute analysis, the fairness metric chosen + justified, disparate-impact testing)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"AI ethics, fairness, responsible AI\" control for System Implementation — AI (Artificial Intelligence) at AcmeCorp. THE TEST: Verify responsible-AI + fairness controls are implemented for this system. PASS: a fairness/bias assessment is done (protected-attribute + disparate-impact testing with a justified fairness metric), a responsible-AI review covers transparency + explainability + contestability, mitigations are applied where bias is found with residual risk accepted by an owner, and a model card documents it. Exceptions: no fairness/bias testing on a consequential model, no explainability/contestability for affected people, bias found but not mitigated or formally accepted, and no model card/transparency record. The evidence — The fairness/bias assessment for this model (protected-attribute analysis, the fairness metric chosen + justified, disparate-impact testing) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Fairness/bias testing toolkit (Fairlearn / AIF360) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Fairness/bias testing toolkit (Fairlearn / AIF360) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Fairness/bias testing toolkit (Fairlearn / AIF360); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — System Implementation — AI (Artificial Intelligence): \"AI ethics, fairness, responsible AI\" Audit Evidence\n\nThe test:\nVerify responsible-AI + fairness controls are implemented for this system. PASS: a fairness/bias assessment is done (protected-attribute + disparate-impact testing with a justified fairness metric), a responsible-AI review covers transparency + explainability + contestability, mitigations are applied where bias is found with residual risk accepted by an owner, and a model card documents it. Exceptions: no fairness/bias testing on a consequential model, no explainability/contestability for affected people, bias found but not mitigated or formally accepted, and no model card/transparency record.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- sysimpl-ai_inventory.json   (in-scope items — The fairness/bias assessment for this model (protected-attribute analysis, the fairness metric chosen + justified, disparate-impact testing))\n- sysimpl-ai_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
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
            "Deploy and operate the ai ethics, fairness, responsible ai control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the ai ethics, fairness, responsible ai control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for ai ethics, fairness, responsible ai against comparable organisations in the sector",
            "Obtain evidence that the ai ethics, fairness, responsible ai control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "sia-04-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"AI ethics, fairness, responsible AI\" matter to the broader System Implementation — AI (Artificial Intelligence) posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to System Implementation — AI (Artificial Intelligence)",
            "It stops mattering once a firewall and endpoint agent are deployed across the System Implementation — AI (Artificial Intelligence) estate",
            "It is a control other System Implementation — AI (Artificial Intelligence) controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other System Implementation — AI (Artificial Intelligence) controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "sia-04-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"AI ethics, fairness, responsible AI\" control?",
          "options": [
            "A point-in-time screenshot of one system's ai ethics, fairness, responsible ai settings, captured during the walkthrough",
            "The The fairness/bias assessment for this model (protected-attribute analysis, the fairness metric chosen + justified, disparate-impact testing), reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the ai ethics, fairness, responsible ai control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's ai ethics, fairness, responsible ai capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "sia-04-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"AI ethics, fairness, responsible AI\"?",
          "options": [
            "From Fairness/bias testing toolkit (Fairlearn / AIF360) and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how ai ethics, fairness, responsible ai works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. Fairness/bias testing toolkit (Fairlearn / AIF360)) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "sia-04-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"AI ethics, fairness, responsible AI\"?",
          "options": [
            "The external audit firm, since it is the party examining the ai ethics, fairness, responsible ai control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the ai ethics, fairness, responsible ai data is shared, so the accountability sits with no one in particular",
            "Responsible-AI / ethics, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Responsible-AI / ethics owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "sia-04-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"AI ethics, fairness, responsible AI\", which part stays with the human auditor?",
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
          "id": "sia-04-q7",
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
          "id": "sia-04-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"AI ethics, fairness, responsible AI\", which of these is a realistic reportable finding?",
          "options": [
            "No fairness testing was done before go-live; the model produces a measurable disparate impact against a protected group, there's no explanation available to affected individuals, and no model card or ethics sign-off exists.",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. No fairness testing was done before go-live; the model produces a measurable disparate impact against a protected group, there's no explanation available to affected individuals, and no model card or ethics sign-off exists. A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "sia-04-q9",
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
          "id": "sia-04-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"AI ethics, fairness, responsible AI\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind ai ethics, fairness, responsible ai, so there is no overlap",
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
    "epochId": "sysimpl-ai",
    "id": "sia-05",
    "order": 5,
    "title": "AI-specific testing and assurance",
    "subtitle": "Agentic technical & privacy audit of the ai-specific testing and assurance control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 6,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"AI-specific testing and assurance\" control for System Implementation — AI (Artificial Intelligence) is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify AI-specific testing + assurance is performed. PASS: testing goes beyond accuracy (robustness, edge cases, adversarial/perturbation, prompt-injection + grounding for LLMs), UAT + human-factors testing covers appropriate trust/over-reliance, defects are tracked against acceptance criteria, and tests trace to use-case requirements. Exceptions: only happy-path accuracy tested, no adversarial/robustness or prompt-injection testing, no UAT/human-factors assessment, and no traceability from requirements to tests.",
      "approach": "An audit agent calls a read-only MCP server that wraps the System Implementation — AI (Artificial Intelligence) systems of record (Test management + defect tracking; Adversarial / robustness + LLM red-team tooling; UAT environment) as tools — e.g. `AI test plan beyond accuracy: robustness, edge cases, adversarial/pert`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The AI test plan beyond accuracy (robustness/stress tests, edge cases, adversarial/perturbation tests, prompt-injection + jailbreak tests for LLMs, hallucination/grounding checks)",
        "User-acceptance + human-factors testing (do operators understand + appropriately trust the output; over-reliance/automation-bias checks)",
        "The test evidence + defect tracking tied to acceptance criteria",
        "Test coverage + traceability from use-case requirements to test cases"
      ],
      "system": [
        "Test management + defect tracking",
        "Adversarial / robustness + LLM red-team tooling",
        "UAT environment",
        "Requirements ↔ test traceability"
      ],
      "dataOwner": [
        "QA / test + AI security",
        "Data science / ML",
        "Business / operations (UAT)"
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
      "tagline": "Auditing \"AI-specific testing and assurance\" as a repeatable agentic workflow: pull the real evidence (The AI test plan beyond accuracy (robustness/stress tests, edge cases, adversarial/perturbation tests, prompt-injection + jailbreak tests for LLMs, hallucination/grounding checks)) with read-only agents, run the test against policy, and issue a defensible opinion on the System Implementation — AI (Artificial Intelligence) control.",
      "year": 2025,
      "overview": [
        "The \"AI-specific testing and assurance\" sub-process is one of the controls an auditor must verify for System Implementation — AI (Artificial Intelligence). The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the AI test plan beyond accuracy (robustness/stress tests, edge cases, adversarial/perturbation tests, prompt-injection + jailbreak tests for LLMs, hallucination/grounding checks), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Test management + defect tracking, Adversarial / robustness + LLM red-team tooling, UAT environment — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `AI test plan beyond accuracy: robustness, edge cases, adversarial/perturbation, ` — read-only, against the systems of record.",
        "The test itself is specific. Verify AI-specific testing + assurance is performed. PASS: testing goes beyond accuracy (robustness, edge cases, adversarial/perturbation, prompt-injection + grounding for LLMs), UAT + human-factors testing covers appropriate trust/over-reliance, defects are tracked against acceptance criteria, and tests trace to use-case requirements. Exceptions: only happy-path accuracy tested, no adversarial/robustness or prompt-injection testing, no UAT/human-factors assessment, and no traceability from requirements to tests. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `05_ai_specific_testing_and_assurance_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Test management + defect tracking and Adversarial / robustness + LLM red-team tooling (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
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
            "sub": "pull Test management + defect tracking · Adversarial / robustness + LLM red-team tooling",
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
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "AI test plan beyond accuracy: robustness, edge cases, adversarial/perturbation, prompt-injection + grounding (LLMs)\nUAT + human-factors: appropriate trust / over-reliance (automation bias) checks\ntest evidence + defect tracking vs acceptance criteria\ntraceability: use-case requirements → test cases"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The AI test plan beyond accuracy (robustness/stress tests, edge cases, adversarial/perturbation tests, prompt-injection + jailbreak tests for LLMs, hallucination/grounding checks).",
        "The test: Verify AI-specific testing + assurance is performed.",
        "Reconcile the systems of record (Test management + defect tracking, Adversarial / robustness + LLM red-team tooling, UAT environment) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. Testing covered only happy-path accuracy — no adversarial, robustness, or prompt-injection testing and no UAT; operators were given the tool with no guidance, leading to automation-bias over-reliance on wrong outputs."
      ],
      "references": [
        {
          "title": "ISO/IEC/IEEE 29119 — Software Testing",
          "url": "https://www.iso.org/standard/81291.html"
        },
        {
          "title": "OWASP Top 10 for LLM Applications",
          "url": "https://owasp.org/www-project-top-10-for-large-language-model-applications/"
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
          "description": "Runnable read-only MCP server: gathers the System Implementation — AI (Artificial Intelligence) evidence for \"AI-specific testing and assurance\" (the ai test plan beyond accuracy (robustness/stress tests, edge cases, adversarial/perturbation tests, prompt-injection + jailbreak tests for llms, hallucination/grounding checks)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"AI-specific testing and assurance\" control for System Implementation — AI (Artificial Intelligence) at AcmeCorp. THE TEST: Verify AI-specific testing + assurance is performed. PASS: testing goes beyond accuracy (robustness, edge cases, adversarial/perturbation, prompt-injection + grounding for LLMs), UAT + human-factors testing covers appropriate trust/over-reliance, defects are tracked against acceptance criteria, and tests trace to use-case requirements. Exceptions: only happy-path accuracy tested, no adversarial/robustness or prompt-injection testing, no UAT/human-factors assessment, and no traceability from requirements to tests. The evidence — The AI test plan beyond accuracy (robustness/stress tests, edge cases, adversarial/perturbation tests, prompt-injection + jailbreak tests for LLMs, hallucination/grounding checks) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Test management + defect tracking APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Test management + defect tracking gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Test management + defect tracking; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — System Implementation — AI (Artificial Intelligence): \"AI-specific testing and assurance\" Audit Evidence\n\nThe test:\nVerify AI-specific testing + assurance is performed. PASS: testing goes beyond accuracy (robustness, edge cases, adversarial/perturbation, prompt-injection + grounding for LLMs), UAT + human-factors testing covers appropriate trust/over-reliance, defects are tracked against acceptance criteria, and tests trace to use-case requirements. Exceptions: only happy-path accuracy tested, no adversarial/robustness or prompt-injection testing, no UAT/human-factors assessment, and no traceability from requirements to tests.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- sysimpl-ai_inventory.json   (in-scope items — The AI test plan beyond accuracy (robustness/stress tests, edge cases, adversarial/perturbation tests, prompt-injection + jailbreak tests for LLMs, hallucination/grounding checks))\n- sysimpl-ai_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
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
            "Deploy and operate the ai-specific testing and assurance control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the ai-specific testing and assurance control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for ai-specific testing and assurance against comparable organisations in the sector",
            "Obtain evidence that the ai-specific testing and assurance control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "sia-05-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"AI-specific testing and assurance\" matter to the broader System Implementation — AI (Artificial Intelligence) posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to System Implementation — AI (Artificial Intelligence)",
            "It stops mattering once a firewall and endpoint agent are deployed across the System Implementation — AI (Artificial Intelligence) estate",
            "It is a control other System Implementation — AI (Artificial Intelligence) controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other System Implementation — AI (Artificial Intelligence) controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "sia-05-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"AI-specific testing and assurance\" control?",
          "options": [
            "A point-in-time screenshot of one system's ai-specific testing and assurance settings, captured during the walkthrough",
            "The The AI test plan beyond accuracy (robustness/stress tests, edge cases, adversarial/perturbation tests, prompt-injection + jailbreak tests for LLMs, hallucination/grounding checks), reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the ai-specific testing and assurance control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's ai-specific testing and assurance capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "sia-05-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"AI-specific testing and assurance\"?",
          "options": [
            "From Test management + defect tracking and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how ai-specific testing and assurance works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. Test management + defect tracking) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "sia-05-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"AI-specific testing and assurance\"?",
          "options": [
            "The external audit firm, since it is the party examining the ai-specific testing and assurance control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the ai-specific testing and assurance data is shared, so the accountability sits with no one in particular",
            "QA / test + AI security, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "QA / test + AI security owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "sia-05-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"AI-specific testing and assurance\", which part stays with the human auditor?",
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
          "id": "sia-05-q7",
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
          "id": "sia-05-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"AI-specific testing and assurance\", which of these is a realistic reportable finding?",
          "options": [
            "Testing covered only happy-path accuracy — no adversarial, robustness, or prompt-injection testing and no UAT; operators were given the tool with no guidance, leading to automation-bias over-reliance on wrong outputs.",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. Testing covered only happy-path accuracy — no adversarial, robustness, or prompt-injection testing and no UAT; operators were given the tool with no guidance, leading to automation-bias over-reliance on wrong outputs. A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "sia-05-q9",
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
          "id": "sia-05-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"AI-specific testing and assurance\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind ai-specific testing and assurance, so there is no overlap",
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
    "epochId": "sysimpl-ai",
    "id": "sia-06",
    "order": 6,
    "title": "AI model deployment and infra",
    "subtitle": "Agentic technical & privacy audit of the ai model deployment and infra control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 7,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"AI model deployment and infra\" control for System Implementation — AI (Artificial Intelligence) is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify the AI system is deployed securely + controllably. PASS: deployment uses a governed model CI/CD pipeline with environment separation, staged/canary rollout, prod model versioning, and tested rollback; the serving stack is secured (authenticated + rate-limited endpoint, protected artifact, vaulted secrets); promotion requires approval; and the validated artifact is exactly what reaches prod. Exceptions: models hand-deployed with no pipeline/versioning, no rollback path, an unauthenticated/unprotected inference endpoint, and an unvalidated/last-minute model artifact reaching production.",
      "approach": "An audit agent calls a read-only MCP server that wraps the System Implementation — AI (Artificial Intelligence) systems of record (Model CI/CD + serving (endpoint / containers); Model registry (prod versioning); API gateway (auth + rate-limit)) as tools — e.g. `deployment architecture + secured serving (endpoint, model CI/CD, envi`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The deployment architecture + the secured serving infrastructure (model endpoint, inference scaling, the deployment/CI-CD pipeline for models, environment separation)",
        "Deployment controls (staged/canary rollout, model versioning in prod, rollback to a prior model, approval gate to promote)",
        "Security of the serving stack (authenticated + rate-limited inference endpoint, protected model artifact, secrets handling)",
        "Reproducible, governed model promotion (the same validated artifact reaches prod — no last-minute swaps)"
      ],
      "system": [
        "Model CI/CD + serving (endpoint / containers)",
        "Model registry (prod versioning)",
        "API gateway (auth + rate-limit)",
        "Secret vault"
      ],
      "dataOwner": [
        "MLOps / ML engineering + platform",
        "AI security",
        "Release management"
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
      "tagline": "Auditing \"AI model deployment and infra\" as a repeatable agentic workflow: pull the real evidence (The deployment architecture + the secured serving infrastructure (model endpoint, inference scaling, the deployment/CI-CD pipeline for models, environment separation)) with read-only agents, run the test against policy, and issue a defensible opinion on the System Implementation — AI (Artificial Intelligence) control.",
      "year": 2025,
      "overview": [
        "The \"AI model deployment and infra\" sub-process is one of the controls an auditor must verify for System Implementation — AI (Artificial Intelligence). The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the deployment architecture + the secured serving infrastructure (model endpoint, inference scaling, the deployment/CI-CD pipeline for models, environment separation), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Model CI/CD + serving (endpoint / containers), Model registry (prod versioning), API gateway (auth + rate-limit) — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `deployment architecture + secured serving (endpoint, model CI/CD, environment se` — read-only, against the systems of record.",
        "The test itself is specific. Verify the AI system is deployed securely + controllably. PASS: deployment uses a governed model CI/CD pipeline with environment separation, staged/canary rollout, prod model versioning, and tested rollback; the serving stack is secured (authenticated + rate-limited endpoint, protected artifact, vaulted secrets); promotion requires approval; and the validated artifact is exactly what reaches prod. Exceptions: models hand-deployed with no pipeline/versioning, no rollback path, an unauthenticated/unprotected inference endpoint, and an unvalidated/last-minute model artifact reaching production. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `06_ai_model_deployment_and_infra_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Model CI/CD + serving (endpoint / containers) and Model registry (prod versioning) (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
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
            "sub": "pull Model CI/CD + serving (endpoint / containers) · Model registry (prod versioning)",
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
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "deployment architecture + secured serving (endpoint, model CI/CD, environment separation)\ndeployment controls: staged/canary rollout + prod versioning + rollback + promotion approval\nserving security: authenticated + rate-limited endpoint, protected artifact, vaulted secrets\nis the exact validated artifact what reaches prod (no last-minute swaps)?"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The deployment architecture + the secured serving infrastructure (model endpoint, inference scaling, the deployment/CI-CD pipeline for models, environment separation).",
        "The test: Verify the AI system is deployed securely + controllably.",
        "Reconcile the systems of record (Model CI/CD + serving (endpoint / containers), Model registry (prod versioning), API gateway (auth + rate-limit)) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. The model was hand-copied to a production server with no pipeline, versioning, or rollback; the inference endpoint has no authentication or rate-limiting; and the artifact in prod isn't the one that was validated."
      ],
      "references": [
        {
          "title": "NIST AI RMF",
          "url": "https://www.nist.gov/itl/ai-risk-management-framework"
        },
        {
          "title": "NIST SP 800-218 (SSDF)",
          "url": "https://csrc.nist.gov/pubs/sp/800/218/final"
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
          "description": "Runnable read-only MCP server: gathers the System Implementation — AI (Artificial Intelligence) evidence for \"AI model deployment and infra\" (the deployment architecture + the secured serving infrastructure (model endpoint, inference scaling, the deployment/ci-cd pipeline for models, environment separation)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"AI model deployment and infra\" control for System Implementation — AI (Artificial Intelligence) at AcmeCorp. THE TEST: Verify the AI system is deployed securely + controllably. PASS: deployment uses a governed model CI/CD pipeline with environment separation, staged/canary rollout, prod model versioning, and tested rollback; the serving stack is secured (authenticated + rate-limited endpoint, protected artifact, vaulted secrets); promotion requires approval; and the validated artifact is exactly what reaches prod. Exceptions: models hand-deployed with no pipeline/versioning, no rollback path, an unauthenticated/unprotected inference endpoint, and an unvalidated/last-minute model artifact reaching production. The evidence — The deployment architecture + the secured serving infrastructure (model endpoint, inference scaling, the deployment/CI-CD pipeline for models, environment separation) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Model CI/CD + serving (endpoint / containers) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Model CI/CD + serving (endpoint / containers) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Model CI/CD + serving (endpoint / containers); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — System Implementation — AI (Artificial Intelligence): \"AI model deployment and infra\" Audit Evidence\n\nThe test:\nVerify the AI system is deployed securely + controllably. PASS: deployment uses a governed model CI/CD pipeline with environment separation, staged/canary rollout, prod model versioning, and tested rollback; the serving stack is secured (authenticated + rate-limited endpoint, protected artifact, vaulted secrets); promotion requires approval; and the validated artifact is exactly what reaches prod. Exceptions: models hand-deployed with no pipeline/versioning, no rollback path, an unauthenticated/unprotected inference endpoint, and an unvalidated/last-minute model artifact reaching production.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- sysimpl-ai_inventory.json   (in-scope items — The deployment architecture + the secured serving infrastructure (model endpoint, inference scaling, the deployment/CI-CD pipeline for models, environment separation))\n- sysimpl-ai_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
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
            "Deploy and operate the ai model deployment and infra control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the ai model deployment and infra control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for ai model deployment and infra against comparable organisations in the sector",
            "Obtain evidence that the ai model deployment and infra control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "sia-06-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"AI model deployment and infra\" matter to the broader System Implementation — AI (Artificial Intelligence) posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to System Implementation — AI (Artificial Intelligence)",
            "It stops mattering once a firewall and endpoint agent are deployed across the System Implementation — AI (Artificial Intelligence) estate",
            "It is a control other System Implementation — AI (Artificial Intelligence) controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other System Implementation — AI (Artificial Intelligence) controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "sia-06-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"AI model deployment and infra\" control?",
          "options": [
            "A point-in-time screenshot of one system's ai model deployment and infra settings, captured during the walkthrough",
            "The The deployment architecture + the secured serving infrastructure (model endpoint, inference scaling, the deployment/CI-CD pipeline for models, environment separation), reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the ai model deployment and infra control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's ai model deployment and infra capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "sia-06-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"AI model deployment and infra\"?",
          "options": [
            "From Model CI/CD + serving (endpoint / containers) and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how ai model deployment and infra works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. Model CI/CD + serving (endpoint / containers)) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "sia-06-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"AI model deployment and infra\"?",
          "options": [
            "The external audit firm, since it is the party examining the ai model deployment and infra control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the ai model deployment and infra data is shared, so the accountability sits with no one in particular",
            "MLOps / ML engineering + platform, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "MLOps / ML engineering + platform owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "sia-06-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"AI model deployment and infra\", which part stays with the human auditor?",
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
          "id": "sia-06-q7",
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
          "id": "sia-06-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"AI model deployment and infra\", which of these is a realistic reportable finding?",
          "options": [
            "The model was hand-copied to a production server with no pipeline, versioning, or rollback; the inference endpoint has no authentication or rate-limiting; and the artifact in prod isn't the one that was validated.",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. The model was hand-copied to a production server with no pipeline, versioning, or rollback; the inference endpoint has no authentication or rate-limiting; and the artifact in prod isn't the one that was validated. A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "sia-06-q9",
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
          "id": "sia-06-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"AI model deployment and infra\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind ai model deployment and infra, so there is no overlap",
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
    "epochId": "sysimpl-ai",
    "id": "sia-07",
    "order": 7,
    "title": "Model lifecycle and drift mgmt",
    "subtitle": "Agentic technical & privacy audit of the model lifecycle and drift mgmt control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 5,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Model lifecycle and drift mgmt\" control for System Implementation — AI (Artificial Intelligence) is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify the model is managed across its lifecycle in production. PASS: production monitors model + data drift, performance decay, and distribution shift against thresholds; drift/decay triggers a governed retrain or rollback (with revalidation before relaunch); a lifecycle register tracks prod versions + retirement; and fairness/quality is monitored over time. Exceptions: no drift/performance monitoring (silent decay), no retraining trigger or the retrain skips revalidation, no model lifecycle/ownership register, and fairness checked only at launch.",
      "approach": "An audit agent calls a read-only MCP server that wraps the System Implementation — AI (Artificial Intelligence) systems of record (Model monitoring (Arize / Fiddler / Evidently); Drift + performance monitoring; Retraining pipeline + revalidation gate) as tools — e.g. `production monitoring: model + data drift + performance decay + distri`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The production monitoring for model + data drift, performance decay, and prediction-distribution shift, with thresholds",
        "The retraining/rollback triggers + the governed retraining pipeline (revalidation before a retrained model goes live)",
        "The model lifecycle register (versions in prod, retirement/decommission plan, ownership)",
        "Ongoing fairness/quality monitoring (not just at launch)"
      ],
      "system": [
        "Model monitoring (Arize / Fiddler / Evidently)",
        "Drift + performance monitoring",
        "Retraining pipeline + revalidation gate",
        "Model lifecycle register"
      ],
      "dataOwner": [
        "MLOps + model owners",
        "Data science",
        "Responsible-AI"
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
      "tagline": "Auditing \"Model lifecycle and drift mgmt\" as a repeatable agentic workflow: pull the real evidence (The production monitoring for model + data drift, performance decay, and prediction-distribution shift, with thresholds) with read-only agents, run the test against policy, and issue a defensible opinion on the System Implementation — AI (Artificial Intelligence) control.",
      "year": 2025,
      "overview": [
        "The \"Model lifecycle and drift mgmt\" sub-process is one of the controls an auditor must verify for System Implementation — AI (Artificial Intelligence). The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the production monitoring for model + data drift, performance decay, and prediction-distribution shift, with thresholds, for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Model monitoring (Arize / Fiddler / Evidently), Drift + performance monitoring, Retraining pipeline + revalidation gate — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `production monitoring: model + data drift + performance decay + distribution shi` — read-only, against the systems of record.",
        "The test itself is specific. Verify the model is managed across its lifecycle in production. PASS: production monitors model + data drift, performance decay, and distribution shift against thresholds; drift/decay triggers a governed retrain or rollback (with revalidation before relaunch); a lifecycle register tracks prod versions + retirement; and fairness/quality is monitored over time. Exceptions: no drift/performance monitoring (silent decay), no retraining trigger or the retrain skips revalidation, no model lifecycle/ownership register, and fairness checked only at launch. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `07_model_lifecycle_and_drift_mgmt_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Model monitoring (Arize / Fiddler / Evidently) and Drift + performance monitoring (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
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
            "sub": "pull Model monitoring (Arize / Fiddler / Evidently) · Drift + performance monitoring",
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
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "production monitoring: model + data drift + performance decay + distribution shift (thresholds)\nretraining/rollback triggers + governed retrain (revalidation before relaunch)\nmodel lifecycle register: prod versions + retirement/decommission + ownership\nongoing fairness/quality monitoring (not just at launch)?"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The production monitoring for model + data drift, performance decay, and prediction-distribution shift, with thresholds.",
        "The test: Verify the model is managed across its lifecycle in production.",
        "Reconcile the systems of record (Model monitoring (Arize / Fiddler / Evidently), Drift + performance monitoring, Retraining pipeline + revalidation gate) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. Once live, the model had no drift or performance monitoring; the input distribution shifted and accuracy silently decayed for months; there's no retraining trigger and no owner tracking which model versions are running where."
      ],
      "references": [
        {
          "title": "NIST AI RMF (Manage)",
          "url": "https://www.nist.gov/itl/ai-risk-management-framework"
        },
        {
          "title": "ISO/IEC 42001",
          "url": "https://www.iso.org/standard/81230.html"
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
          "description": "Runnable read-only MCP server: gathers the System Implementation — AI (Artificial Intelligence) evidence for \"Model lifecycle and drift mgmt\" (the production monitoring for model + data drift, performance decay, and prediction-distribution shift, with thresholds), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Model lifecycle and drift mgmt\" control for System Implementation — AI (Artificial Intelligence) at AcmeCorp. THE TEST: Verify the model is managed across its lifecycle in production. PASS: production monitors model + data drift, performance decay, and distribution shift against thresholds; drift/decay triggers a governed retrain or rollback (with revalidation before relaunch); a lifecycle register tracks prod versions + retirement; and fairness/quality is monitored over time. Exceptions: no drift/performance monitoring (silent decay), no retraining trigger or the retrain skips revalidation, no model lifecycle/ownership register, and fairness checked only at launch. The evidence — The production monitoring for model + data drift, performance decay, and prediction-distribution shift, with thresholds — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Model monitoring (Arize / Fiddler / Evidently) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Model monitoring (Arize / Fiddler / Evidently) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Model monitoring (Arize / Fiddler / Evidently); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — System Implementation — AI (Artificial Intelligence): \"Model lifecycle and drift mgmt\" Audit Evidence\n\nThe test:\nVerify the model is managed across its lifecycle in production. PASS: production monitors model + data drift, performance decay, and distribution shift against thresholds; drift/decay triggers a governed retrain or rollback (with revalidation before relaunch); a lifecycle register tracks prod versions + retirement; and fairness/quality is monitored over time. Exceptions: no drift/performance monitoring (silent decay), no retraining trigger or the retrain skips revalidation, no model lifecycle/ownership register, and fairness checked only at launch.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- sysimpl-ai_inventory.json   (in-scope items — The production monitoring for model + data drift, performance decay, and prediction-distribution shift, with thresholds)\n- sysimpl-ai_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
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
            "Deploy and operate the model lifecycle and drift mgmt control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the model lifecycle and drift mgmt control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for model lifecycle and drift mgmt against comparable organisations in the sector",
            "Obtain evidence that the model lifecycle and drift mgmt control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "sia-07-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Model lifecycle and drift mgmt\" matter to the broader System Implementation — AI (Artificial Intelligence) posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to System Implementation — AI (Artificial Intelligence)",
            "It stops mattering once a firewall and endpoint agent are deployed across the System Implementation — AI (Artificial Intelligence) estate",
            "It is a control other System Implementation — AI (Artificial Intelligence) controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other System Implementation — AI (Artificial Intelligence) controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "sia-07-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Model lifecycle and drift mgmt\" control?",
          "options": [
            "A point-in-time screenshot of one system's model lifecycle and drift mgmt settings, captured during the walkthrough",
            "The The production monitoring for model + data drift, performance decay, and prediction-distribution shift, with thresholds, reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the model lifecycle and drift mgmt control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's model lifecycle and drift mgmt capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "sia-07-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Model lifecycle and drift mgmt\"?",
          "options": [
            "From Model monitoring (Arize / Fiddler / Evidently) and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how model lifecycle and drift mgmt works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. Model monitoring (Arize / Fiddler / Evidently)) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "sia-07-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Model lifecycle and drift mgmt\"?",
          "options": [
            "The external audit firm, since it is the party examining the model lifecycle and drift mgmt control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the model lifecycle and drift mgmt data is shared, so the accountability sits with no one in particular",
            "MLOps + model owners, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "MLOps + model owners owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "sia-07-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Model lifecycle and drift mgmt\", which part stays with the human auditor?",
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
          "id": "sia-07-q7",
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
          "id": "sia-07-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Model lifecycle and drift mgmt\", which of these is a realistic reportable finding?",
          "options": [
            "Once live, the model had no drift or performance monitoring; the input distribution shifted and accuracy silently decayed for months; there's no retraining trigger and no owner tracking which model versions are running where.",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. Once live, the model had no drift or performance monitoring; the input distribution shifted and accuracy silently decayed for months; there's no retraining trigger and no owner tracking which model versions are running where. A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "sia-07-q9",
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
          "id": "sia-07-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Model lifecycle and drift mgmt\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind model lifecycle and drift mgmt, so there is no overlap",
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
    "epochId": "sysimpl-ai",
    "id": "sia-08",
    "order": 8,
    "title": "AI security and adversarial testing",
    "subtitle": "Agentic technical & privacy audit of the ai security and adversarial testing control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 4,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"AI security and adversarial testing\" control for System Implementation — AI (Artificial Intelligence) is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify the AI system is secured + adversarially tested. PASS: there's an AI threat model (MITRE ATLAS), adversarial/red-team testing with defenses deployed (input validation, robustness, LLM guardrails, inference rate-limiting/anomaly), model + data assets are protected (access control, weight encryption, pretrained-model/dependency vetting), and adversarial activity is monitored to the SOC. Exceptions: no AI threat model, no adversarial/red-team testing (an LLM with no guardrails; a model with no extraction protection), unprotected weights or unvetted pretrained dependencies, and no adversarial monitoring.",
      "approach": "An audit agent calls a read-only MCP server that wraps the System Implementation — AI (Artificial Intelligence) systems of record (AI security tooling (guardrails, robustness, AI gateway); MITRE ATLAS threat mapping; Model/weight protection + dependency vetting) as tools — e.g. `AI threat model (MITRE ATLAS): poisoning, evasion, extraction, inversi`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The AI threat model for this system (poisoning, evasion, model/data extraction, inversion, prompt injection, jailbreak) mapped to MITRE ATLAS",
        "Adversarial/red-team testing evidence against the deployed model + the defenses (input validation, robustness, guardrails, inference rate-limiting/anomaly detection)",
        "Protection of the model + training data assets (access control, encryption of weights, supply-chain vetting of pretrained models/dependencies)",
        "Monitoring for adversarial activity (extraction patterns, jailbreak attempts) wired to the SOC"
      ],
      "system": [
        "AI security tooling (guardrails, robustness, AI gateway)",
        "MITRE ATLAS threat mapping",
        "Model/weight protection + dependency vetting",
        "Inference monitoring → SIEM"
      ],
      "dataOwner": [
        "AI security / AI red team",
        "ML engineering",
        "Security operations"
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
      "tagline": "Auditing \"AI security and adversarial testing\" as a repeatable agentic workflow: pull the real evidence (The AI threat model for this system (poisoning, evasion, model/data extraction, inversion, prompt injection, jailbreak) mapped to MITRE ATLAS) with read-only agents, run the test against policy, and issue a defensible opinion on the System Implementation — AI (Artificial Intelligence) control.",
      "year": 2025,
      "overview": [
        "The \"AI security and adversarial testing\" sub-process is one of the controls an auditor must verify for System Implementation — AI (Artificial Intelligence). The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the AI threat model for this system (poisoning, evasion, model/data extraction, inversion, prompt injection, jailbreak) mapped to MITRE ATLAS, for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here AI security tooling (guardrails, robustness, AI gateway), MITRE ATLAS threat mapping, Model/weight protection + dependency vetting — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `AI threat model (MITRE ATLAS): poisoning, evasion, extraction, inversion, prompt` — read-only, against the systems of record.",
        "The test itself is specific. Verify the AI system is secured + adversarially tested. PASS: there's an AI threat model (MITRE ATLAS), adversarial/red-team testing with defenses deployed (input validation, robustness, LLM guardrails, inference rate-limiting/anomaly), model + data assets are protected (access control, weight encryption, pretrained-model/dependency vetting), and adversarial activity is monitored to the SOC. Exceptions: no AI threat model, no adversarial/red-team testing (an LLM with no guardrails; a model with no extraction protection), unprotected weights or unvetted pretrained dependencies, and no adversarial monitoring. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `08_ai_security_and_adversarial_testing_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from AI security tooling (guardrails, robustness, AI gateway) and MITRE ATLAS threat mapping (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
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
            "sub": "pull AI security tooling (guardrails, robustness, AI gateway) · MITRE ATLAS threat mapping",
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
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "AI threat model (MITRE ATLAS): poisoning, evasion, extraction, inversion, prompt injection, jailbreak\nadversarial/red-team testing + defenses (input validation, robustness, guardrails, inference rate-limiting/anomaly)\nmodel + data asset protection (access control, weight encryption, pretrained-model/dependency vetting)\nadversarial-activity monitoring wired to the SOC?"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The AI threat model for this system (poisoning, evasion, model/data extraction, inversion, prompt injection, jailbreak) mapped to MITRE ATLAS.",
        "The test: Verify the AI system is secured + adversarially tested.",
        "Reconcile the systems of record (AI security tooling (guardrails, robustness, AI gateway), MITRE ATLAS threat mapping, Model/weight protection + dependency vetting) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. The deployed LLM has no prompt-injection or jailbreak guardrails and no model-extraction rate-limiting, the pretrained base model was pulled from a public hub with no integrity vetting, and there's no AI threat model or adversarial testing for the system."
      ],
      "references": [
        {
          "title": "MITRE ATLAS",
          "url": "https://atlas.mitre.org/"
        },
        {
          "title": "OWASP Top 10 for LLM Applications",
          "url": "https://owasp.org/www-project-top-10-for-large-language-model-applications/"
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
          "description": "Runnable read-only MCP server: gathers the System Implementation — AI (Artificial Intelligence) evidence for \"AI security and adversarial testing\" (the ai threat model for this system (poisoning, evasion, model/data extraction, inversion, prompt injection, jailbreak) mapped to mitre atlas), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"AI security and adversarial testing\" control for System Implementation — AI (Artificial Intelligence) at AcmeCorp. THE TEST: Verify the AI system is secured + adversarially tested. PASS: there's an AI threat model (MITRE ATLAS), adversarial/red-team testing with defenses deployed (input validation, robustness, LLM guardrails, inference rate-limiting/anomaly), model + data assets are protected (access control, weight encryption, pretrained-model/dependency vetting), and adversarial activity is monitored to the SOC. Exceptions: no AI threat model, no adversarial/red-team testing (an LLM with no guardrails; a model with no extraction protection), unprotected weights or unvetted pretrained dependencies, and no adversarial monitoring. The evidence — The AI threat model for this system (poisoning, evasion, model/data extraction, inversion, prompt injection, jailbreak) mapped to MITRE ATLAS — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live AI security tooling (guardrails, robustness, AI gateway) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. AI security tooling (guardrails, robustness, AI gateway) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from AI security tooling (guardrails, robustness, AI gateway); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — System Implementation — AI (Artificial Intelligence): \"AI security and adversarial testing\" Audit Evidence\n\nThe test:\nVerify the AI system is secured + adversarially tested. PASS: there's an AI threat model (MITRE ATLAS), adversarial/red-team testing with defenses deployed (input validation, robustness, LLM guardrails, inference rate-limiting/anomaly), model + data assets are protected (access control, weight encryption, pretrained-model/dependency vetting), and adversarial activity is monitored to the SOC. Exceptions: no AI threat model, no adversarial/red-team testing (an LLM with no guardrails; a model with no extraction protection), unprotected weights or unvetted pretrained dependencies, and no adversarial monitoring.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- sysimpl-ai_inventory.json   (in-scope items — The AI threat model for this system (poisoning, evasion, model/data extraction, inversion, prompt injection, jailbreak) mapped to MITRE ATLAS)\n- sysimpl-ai_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
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
            "Deploy and operate the ai security and adversarial testing control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the ai security and adversarial testing control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for ai security and adversarial testing against comparable organisations in the sector",
            "Obtain evidence that the ai security and adversarial testing control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "sia-08-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"AI security and adversarial testing\" matter to the broader System Implementation — AI (Artificial Intelligence) posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to System Implementation — AI (Artificial Intelligence)",
            "It stops mattering once a firewall and endpoint agent are deployed across the System Implementation — AI (Artificial Intelligence) estate",
            "It is a control other System Implementation — AI (Artificial Intelligence) controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other System Implementation — AI (Artificial Intelligence) controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "sia-08-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"AI security and adversarial testing\" control?",
          "options": [
            "A point-in-time screenshot of one system's ai security and adversarial testing settings, captured during the walkthrough",
            "The The AI threat model for this system (poisoning, evasion, model/data extraction, inversion, prompt injection, jailbreak) mapped to MITRE ATLAS, reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the ai security and adversarial testing control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's ai security and adversarial testing capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "sia-08-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"AI security and adversarial testing\"?",
          "options": [
            "From AI security tooling (guardrails, robustness, AI gateway) and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how ai security and adversarial testing works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. AI security tooling (guardrails, robustness, AI gateway)) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "sia-08-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"AI security and adversarial testing\"?",
          "options": [
            "The external audit firm, since it is the party examining the ai security and adversarial testing control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the ai security and adversarial testing data is shared, so the accountability sits with no one in particular",
            "AI security / AI red team, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "AI security / AI red team owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "sia-08-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"AI security and adversarial testing\", which part stays with the human auditor?",
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
          "id": "sia-08-q7",
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
          "id": "sia-08-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"AI security and adversarial testing\", which of these is a realistic reportable finding?",
          "options": [
            "The deployed LLM has no prompt-injection or jailbreak guardrails and no model-extraction rate-limiting, the pretrained base model was pulled from a public hub with no integrity vetting, and there's no AI threat model or adversarial testing for the system.",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. The deployed LLM has no prompt-injection or jailbreak guardrails and no model-extraction rate-limiting, the pretrained base model was pulled from a public hub with no integrity vetting, and there's no AI threat model or adversarial testing for the system. A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "sia-08-q9",
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
          "id": "sia-08-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"AI security and adversarial testing\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind ai security and adversarial testing, so there is no overlap",
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
    "epochId": "sysimpl-ai",
    "id": "sia-09",
    "order": 9,
    "title": "Regulatory and legal compliance for AI",
    "subtitle": "Agentic technical & privacy audit of the regulatory and legal compliance for ai control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 7,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Regulatory and legal compliance for AI\" control for System Implementation — AI (Artificial Intelligence) is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify the AI system meets its regulatory + legal obligations. PASS: applicable regulation is mapped (EU AI Act tier obligations, GDPR Art. 22, sector law), conformity evidence exists for high-risk AI (risk mgmt, logging, technical docs, registration, disclosure), lawful basis + IP/licensing for data/model is established with data-subject rights handled, and legal signs off. Exceptions: no regulatory mapping, high-risk AI deployed with no conformity evidence/registration, missing automated-decision disclosure or appeal, unlawful data/IP use, and no legal sign-off.",
      "approach": "An audit agent calls a read-only MCP server that wraps the System Implementation — AI (Artificial Intelligence) systems of record (AI compliance / GRC (EU AI Act mapping); Conformity / technical-documentation records; Data lawful-basis + licensing records) as tools — e.g. `regulatory mapping: EU AI Act tier obligations + GDPR Art. 22 + sector`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The regulatory mapping for this AI system (EU AI Act obligations for its risk tier, GDPR automated-decision/Art. 22, sector rules — e.g. ECOA/FCRA for credit, HIPAA for health)",
        "The conformity/compliance evidence (high-risk AI: risk management, logging, technical documentation, registration; transparency/disclosure where required)",
        "Lawful basis + IP/licensing for training data + model use; data-subject rights handling for AI",
        "The legal sign-off that the deployed system meets applicable obligations"
      ],
      "system": [
        "AI compliance / GRC (EU AI Act mapping)",
        "Conformity / technical-documentation records",
        "Data lawful-basis + licensing records",
        "Legal review / sign-off"
      ],
      "dataOwner": [
        "Legal + Compliance",
        "Responsible-AI / risk",
        "Product owner"
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
      "tagline": "Auditing \"Regulatory and legal compliance for AI\" as a repeatable agentic workflow: pull the real evidence (The regulatory mapping for this AI system (EU AI Act obligations for its risk tier, GDPR automated-decision/Art. 22, sector rules — e.g. ECOA/FCRA for credit, HIPAA for health)) with read-only agents, run the test against policy, and issue a defensible opinion on the System Implementation — AI (Artificial Intelligence) control.",
      "year": 2025,
      "overview": [
        "The \"Regulatory and legal compliance for AI\" sub-process is one of the controls an auditor must verify for System Implementation — AI (Artificial Intelligence). The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the regulatory mapping for this AI system (EU AI Act obligations for its risk tier, GDPR automated-decision/Art. 22, sector rules — e.g. ECOA/FCRA for credit, HIPAA for health), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here AI compliance / GRC (EU AI Act mapping), Conformity / technical-documentation records, Data lawful-basis + licensing records — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `regulatory mapping: EU AI Act tier obligations + GDPR Art. 22 + sector law (ECOA` — read-only, against the systems of record.",
        "The test itself is specific. Verify the AI system meets its regulatory + legal obligations. PASS: applicable regulation is mapped (EU AI Act tier obligations, GDPR Art. 22, sector law), conformity evidence exists for high-risk AI (risk mgmt, logging, technical docs, registration, disclosure), lawful basis + IP/licensing for data/model is established with data-subject rights handled, and legal signs off. Exceptions: no regulatory mapping, high-risk AI deployed with no conformity evidence/registration, missing automated-decision disclosure or appeal, unlawful data/IP use, and no legal sign-off. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `09_regulatory_and_legal_compliance_for_ai_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from AI compliance / GRC (EU AI Act mapping) and Conformity / technical-documentation records (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
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
            "sub": "pull AI compliance / GRC (EU AI Act mapping) · Conformity / technical-documentation records",
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
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "regulatory mapping: EU AI Act tier obligations + GDPR Art. 22 + sector law (ECOA/FCRA/HIPAA)\nconformity evidence (high-risk: risk mgmt, logging, technical docs, registration, disclosure)\nlawful basis + IP/licensing for data/model + data-subject rights handling\nlegal sign-off that the deployed system meets obligations"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The regulatory mapping for this AI system (EU AI Act obligations for its risk tier, GDPR automated-decision/Art. 22, sector rules — e.g. ECOA/FCRA for credit, HIPAA for health).",
        "The test: Verify the AI system meets its regulatory + legal obligations.",
        "Reconcile the systems of record (AI compliance / GRC (EU AI Act mapping), Conformity / technical-documentation records, Data lawful-basis + licensing records) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. A high-risk AI system went live with no EU AI Act conformity documentation or registration, no Art. 22 disclosure/appeal for its automated decisions, and no legal review of whether the training data's licensing permits this use."
      ],
      "references": [
        {
          "title": "EU AI Act",
          "url": "https://artificialintelligenceact.eu/"
        },
        {
          "title": "GDPR Art. 22",
          "url": "https://gdpr-info.eu/art-22-gdpr/"
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
          "description": "Runnable read-only MCP server: gathers the System Implementation — AI (Artificial Intelligence) evidence for \"Regulatory and legal compliance for AI\" (the regulatory mapping for this ai system (eu ai act obligations for its risk tier, gdpr automated-decision/art. 22, sector rules — e.g. ecoa/fcra for credit, hipaa for health)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Regulatory and legal compliance for AI\" control for System Implementation — AI (Artificial Intelligence) at AcmeCorp. THE TEST: Verify the AI system meets its regulatory + legal obligations. PASS: applicable regulation is mapped (EU AI Act tier obligations, GDPR Art. 22, sector law), conformity evidence exists for high-risk AI (risk mgmt, logging, technical docs, registration, disclosure), lawful basis + IP/licensing for data/model is established with data-subject rights handled, and legal signs off. Exceptions: no regulatory mapping, high-risk AI deployed with no conformity evidence/registration, missing automated-decision disclosure or appeal, unlawful data/IP use, and no legal sign-off. The evidence — The regulatory mapping for this AI system (EU AI Act obligations for its risk tier, GDPR automated-decision/Art. 22, sector rules — e.g. ECOA/FCRA for credit, HIPAA for health) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live AI compliance / GRC (EU AI Act mapping) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. AI compliance / GRC (EU AI Act mapping) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from AI compliance / GRC (EU AI Act mapping); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — System Implementation — AI (Artificial Intelligence): \"Regulatory and legal compliance for AI\" Audit Evidence\n\nThe test:\nVerify the AI system meets its regulatory + legal obligations. PASS: applicable regulation is mapped (EU AI Act tier obligations, GDPR Art. 22, sector law), conformity evidence exists for high-risk AI (risk mgmt, logging, technical docs, registration, disclosure), lawful basis + IP/licensing for data/model is established with data-subject rights handled, and legal signs off. Exceptions: no regulatory mapping, high-risk AI deployed with no conformity evidence/registration, missing automated-decision disclosure or appeal, unlawful data/IP use, and no legal sign-off.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- sysimpl-ai_inventory.json   (in-scope items — The regulatory mapping for this AI system (EU AI Act obligations for its risk tier, GDPR automated-decision/Art. 22, sector rules — e.g. ECOA/FCRA for credit, HIPAA for health))\n- sysimpl-ai_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
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
            "Deploy and operate the regulatory and legal compliance for ai control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the regulatory and legal compliance for ai control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for regulatory and legal compliance for ai against comparable organisations in the sector",
            "Obtain evidence that the regulatory and legal compliance for ai control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "sia-09-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Regulatory and legal compliance for AI\" matter to the broader System Implementation — AI (Artificial Intelligence) posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to System Implementation — AI (Artificial Intelligence)",
            "It stops mattering once a firewall and endpoint agent are deployed across the System Implementation — AI (Artificial Intelligence) estate",
            "It is a control other System Implementation — AI (Artificial Intelligence) controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other System Implementation — AI (Artificial Intelligence) controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "sia-09-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Regulatory and legal compliance for AI\" control?",
          "options": [
            "A point-in-time screenshot of one system's regulatory and legal compliance for ai settings, captured during the walkthrough",
            "The The regulatory mapping for this AI system (EU AI Act obligations for its risk tier, GDPR automated-decision/Art. 22, sector rules — e.g. ECOA/FCRA for credit, HIPAA for health), reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the regulatory and legal compliance for ai control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's regulatory and legal compliance for ai capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "sia-09-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Regulatory and legal compliance for AI\"?",
          "options": [
            "From AI compliance / GRC (EU AI Act mapping) and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how regulatory and legal compliance for ai works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. AI compliance / GRC (EU AI Act mapping)) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "sia-09-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Regulatory and legal compliance for AI\"?",
          "options": [
            "The external audit firm, since it is the party examining the regulatory and legal compliance for ai control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the regulatory and legal compliance for ai data is shared, so the accountability sits with no one in particular",
            "Legal + Compliance, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Legal + Compliance owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "sia-09-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Regulatory and legal compliance for AI\", which part stays with the human auditor?",
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
          "id": "sia-09-q7",
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
          "id": "sia-09-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Regulatory and legal compliance for AI\", which of these is a realistic reportable finding?",
          "options": [
            "A high-risk AI system went live with no EU AI Act conformity documentation or registration, no Art. 22 disclosure/appeal for its automated decisions, and no legal review of whether the training data's licensing permits this use.",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. A high-risk AI system went live with no EU AI Act conformity documentation or registration, no Art. 22 disclosure/appeal for its automated decisions, and no legal review of whether the training data's licensing permits this use. A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "sia-09-q9",
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
          "id": "sia-09-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Regulatory and legal compliance for AI\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind regulatory and legal compliance for ai, so there is no overlap",
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
    "epochId": "sysimpl-ai",
    "id": "sia-10",
    "order": 10,
    "title": "Third-party AI / foundation model gov",
    "subtitle": "Agentic technical & privacy audit of the third-party ai / foundation model gov control",
    "category": "cybersecurity",
    "xp": 180,
    "easeScore": 5,
    "valueScore": 9,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Third-party AI / foundation model gov\" control for System Implementation — AI (Artificial Intelligence) is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify third-party AI + foundation models are governed. PASS: external AI/foundation-model providers pass due diligence (security, data-use/retention, provenance), contracts protect data (no-training-without-consent, IP indemnity, change-notice, audit rights), data sent to external models is controlled (DLP/redaction, AI gateway, allowed-use policy), and the third-party model is monitored for changes + incidents. Exceptions: foundation models adopted with no due diligence, no contractual data-use protection (provider free to train on your data), sensitive data sent to external models with no redaction/gateway, and no monitoring of provider model changes.",
      "approach": "An audit agent calls a read-only MCP server that wraps the System Implementation — AI (Artificial Intelligence) systems of record (TPRM / GRC (AI vendor); Contract / terms records; AI gateway + DLP / redaction) as tools — e.g. `due diligence on third-party AI/foundation-model providers (security, `, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The due-diligence + risk assessment on third-party AI/foundation-model providers used (the provider's security, data-use/retention terms, model provenance, where prompts/data go)",
        "The contractual terms (data won't be used to train the provider's models without consent, confidentiality, IP indemnity, model-change/deprecation notice, audit rights)",
        "Controls on data sent to external models (DLP/redaction of sensitive data in prompts, an AI gateway, allowed-use policy)",
        "Ongoing monitoring of the third-party model (version/behaviour changes, the provider's incidents, continued fitness)"
      ],
      "system": [
        "TPRM / GRC (AI vendor)",
        "Contract / terms records",
        "AI gateway + DLP / redaction",
        "Provider model-change monitoring"
      ],
      "dataOwner": [
        "Third-party risk + Procurement",
        "AI security",
        "Legal",
        "Product / ML owner"
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
      "tagline": "Auditing \"Third-party AI / foundation model gov\" as a repeatable agentic workflow: pull the real evidence (The due-diligence + risk assessment on third-party AI/foundation-model providers used (the provider's security, data-use/retention terms, model provenance, where prompts/data go)) with read-only agents, run the test against policy, and issue a defensible opinion on the System Implementation — AI (Artificial Intelligence) control.",
      "year": 2025,
      "overview": [
        "The \"Third-party AI / foundation model gov\" sub-process is one of the controls an auditor must verify for System Implementation — AI (Artificial Intelligence). The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the due-diligence + risk assessment on third-party AI/foundation-model providers used (the provider's security, data-use/retention terms, model provenance, where prompts/data go), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here TPRM / GRC (AI vendor), Contract / terms records, AI gateway + DLP / redaction — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `due diligence on third-party AI/foundation-model providers (security, data-use/r` — read-only, against the systems of record.",
        "The test itself is specific. Verify third-party AI + foundation models are governed. PASS: external AI/foundation-model providers pass due diligence (security, data-use/retention, provenance), contracts protect data (no-training-without-consent, IP indemnity, change-notice, audit rights), data sent to external models is controlled (DLP/redaction, AI gateway, allowed-use policy), and the third-party model is monitored for changes + incidents. Exceptions: foundation models adopted with no due diligence, no contractual data-use protection (provider free to train on your data), sensitive data sent to external models with no redaction/gateway, and no monitoring of provider model changes. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `10_third_party_ai_foundation_model_gov_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from TPRM / GRC (AI vendor) and Contract / terms records (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
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
            "sub": "pull TPRM / GRC (AI vendor) · Contract / terms records",
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
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "due diligence on third-party AI/foundation-model providers (security, data-use/retention, provenance, data flow)\ncontract terms: no-training-without-consent + confidentiality + IP indemnity + change-notice + audit rights\ncontrols on data to external models: DLP/redaction, AI gateway, allowed-use policy\nongoing monitoring of the third-party model (version/behaviour changes, provider incidents)"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The due-diligence + risk assessment on third-party AI/foundation-model providers used (the provider's security, data-use/retention terms, model provenance, where prompts/data go).",
        "The test: Verify third-party AI + foundation models are governed.",
        "Reconcile the systems of record (TPRM / GRC (AI vendor), Contract / terms records, AI gateway + DLP / redaction) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. A foundation-model API was adopted with no due diligence or contract review — the provider's default terms allow training on submitted data, employees paste sensitive customer data into prompts with no redaction or gateway, and no one tracks when the provider silently changes the model."
      ],
      "references": [
        {
          "title": "NIST SP 800-161 — C-SCRM",
          "url": "https://csrc.nist.gov/pubs/sp/800/161/r1/final"
        },
        {
          "title": "OWASP LLM — Supply Chain",
          "url": "https://owasp.org/www-project-top-10-for-large-language-model-applications/"
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
          "description": "Runnable read-only MCP server: gathers the System Implementation — AI (Artificial Intelligence) evidence for \"Third-party AI / foundation model gov\" (the due-diligence + risk assessment on third-party ai/foundation-model providers used (the provider's security, data-use/retention terms, model provenance, where prompts/data go)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Third-party AI / foundation model gov\" control for System Implementation — AI (Artificial Intelligence) at AcmeCorp. THE TEST: Verify third-party AI + foundation models are governed. PASS: external AI/foundation-model providers pass due diligence (security, data-use/retention, provenance), contracts protect data (no-training-without-consent, IP indemnity, change-notice, audit rights), data sent to external models is controlled (DLP/redaction, AI gateway, allowed-use policy), and the third-party model is monitored for changes + incidents. Exceptions: foundation models adopted with no due diligence, no contractual data-use protection (provider free to train on your data), sensitive data sent to external models with no redaction/gateway, and no monitoring of provider model changes. The evidence — The due-diligence + risk assessment on third-party AI/foundation-model providers used (the provider's security, data-use/retention terms, model provenance, where prompts/data go) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live TPRM / GRC (AI vendor) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. TPRM / GRC (AI vendor) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from TPRM / GRC (AI vendor); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — System Implementation — AI (Artificial Intelligence): \"Third-party AI / foundation model gov\" Audit Evidence\n\nThe test:\nVerify third-party AI + foundation models are governed. PASS: external AI/foundation-model providers pass due diligence (security, data-use/retention, provenance), contracts protect data (no-training-without-consent, IP indemnity, change-notice, audit rights), data sent to external models is controlled (DLP/redaction, AI gateway, allowed-use policy), and the third-party model is monitored for changes + incidents. Exceptions: foundation models adopted with no due diligence, no contractual data-use protection (provider free to train on your data), sensitive data sent to external models with no redaction/gateway, and no monitoring of provider model changes.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- sysimpl-ai_inventory.json   (in-scope items — The due-diligence + risk assessment on third-party AI/foundation-model providers used (the provider's security, data-use/retention terms, model provenance, where prompts/data go))\n- sysimpl-ai_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
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
            "Deploy and operate the third-party ai / foundation model gov control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the third-party ai / foundation model gov control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for third-party ai / foundation model gov against comparable organisations in the sector",
            "Obtain evidence that the third-party ai / foundation model gov control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "sia-10-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Third-party AI / foundation model gov\" matter to the broader System Implementation — AI (Artificial Intelligence) posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to System Implementation — AI (Artificial Intelligence)",
            "It stops mattering once a firewall and endpoint agent are deployed across the System Implementation — AI (Artificial Intelligence) estate",
            "It is a control other System Implementation — AI (Artificial Intelligence) controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other System Implementation — AI (Artificial Intelligence) controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "sia-10-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Third-party AI / foundation model gov\" control?",
          "options": [
            "A point-in-time screenshot of one system's third-party ai / foundation model gov settings, captured during the walkthrough",
            "The The due-diligence + risk assessment on third-party AI/foundation-model providers used (the provider's security, data-use/retention terms, model provenance, where prompts/data go), reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the third-party ai / foundation model gov control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's third-party ai / foundation model gov capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "sia-10-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Third-party AI / foundation model gov\"?",
          "options": [
            "From TPRM / GRC (AI vendor) and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how third-party ai / foundation model gov works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. TPRM / GRC (AI vendor)) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "sia-10-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Third-party AI / foundation model gov\"?",
          "options": [
            "The external audit firm, since it is the party examining the third-party ai / foundation model gov control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the third-party ai / foundation model gov data is shared, so the accountability sits with no one in particular",
            "Third-party risk + Procurement, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Third-party risk + Procurement owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "sia-10-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Third-party AI / foundation model gov\", which part stays with the human auditor?",
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
          "id": "sia-10-q7",
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
          "id": "sia-10-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Third-party AI / foundation model gov\", which of these is a realistic reportable finding?",
          "options": [
            "A foundation-model API was adopted with no due diligence or contract review — the provider's default terms allow training on submitted data, employees paste sensitive customer data into prompts with no redaction or gateway, and no one tracks when the provider silently changes the model.",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. A foundation-model API was adopted with no due diligence or contract review — the provider's default terms allow training on submitted data, employees paste sensitive customer data into prompts with no redaction or gateway, and no one tracks when the provider silently changes the model. A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "sia-10-q9",
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
          "id": "sia-10-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Third-party AI / foundation model gov\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind third-party ai / foundation model gov, so there is no overlap",
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
    "epochId": "sysimpl-ai",
    "id": "sia-11",
    "order": 11,
    "title": "Human oversight and accountability",
    "subtitle": "Agentic technical & privacy audit of the human oversight and accountability control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 6,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Human oversight and accountability\" control for System Implementation — AI (Artificial Intelligence) is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify human oversight + accountability are implemented. PASS: human oversight is designed to the risk (operators can interpret, override, and halt the system), accountability is assigned (RACI: model owner + outcome-answerable role + escalation), there's an override/appeal path with an audit trail (and override-rate monitoring), and operators are trained on appropriate reliance. Exceptions: a consequential model running with no effective human override or stop, no named accountable owner for AI decisions, no audit trail of human-vs-model decisions, and operators untrained (rubber-stamping or ignoring the model).",
      "approach": "An audit agent calls a read-only MCP server that wraps the System Implementation — AI (Artificial Intelligence) systems of record (Human-in-the-loop workflow + override/appeal; Decision audit trail (model vs human); RACI / accountability records) as tools — e.g. `human-oversight design (in/on/over-the-loop to the risk; interpret + o`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The human-oversight design for the AI system (human in/on/over-the-loop matched to the risk; the operator's ability to interpret, override, and stop the system)",
        "Clear accountability + RACI for the AI system's decisions (who owns the model, who is answerable for outcomes, escalation paths)",
        "Override/appeal + the audit trail of human decisions vs model recommendations (and override rates as a signal)",
        "Operator training + guidance on appropriate reliance (avoiding both automation bias and dismissal)"
      ],
      "system": [
        "Human-in-the-loop workflow + override/appeal",
        "Decision audit trail (model vs human)",
        "RACI / accountability records",
        "Operator training"
      ],
      "dataOwner": [
        "Business / operations owner",
        "Responsible-AI",
        "Risk + the accountable model owner"
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
      "tagline": "Auditing \"Human oversight and accountability\" as a repeatable agentic workflow: pull the real evidence (The human-oversight design for the AI system (human in/on/over-the-loop matched to the risk; the operator's ability to interpret, override, and stop the system)) with read-only agents, run the test against policy, and issue a defensible opinion on the System Implementation — AI (Artificial Intelligence) control.",
      "year": 2025,
      "overview": [
        "The \"Human oversight and accountability\" sub-process is one of the controls an auditor must verify for System Implementation — AI (Artificial Intelligence). The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the human-oversight design for the AI system (human in/on/over-the-loop matched to the risk; the operator's ability to interpret, override, and stop the system), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Human-in-the-loop workflow + override/appeal, Decision audit trail (model vs human), RACI / accountability records — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `human-oversight design (in/on/over-the-loop to the risk; interpret + override + ` — read-only, against the systems of record.",
        "The test itself is specific. Verify human oversight + accountability are implemented. PASS: human oversight is designed to the risk (operators can interpret, override, and halt the system), accountability is assigned (RACI: model owner + outcome-answerable role + escalation), there's an override/appeal path with an audit trail (and override-rate monitoring), and operators are trained on appropriate reliance. Exceptions: a consequential model running with no effective human override or stop, no named accountable owner for AI decisions, no audit trail of human-vs-model decisions, and operators untrained (rubber-stamping or ignoring the model). The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `11_human_oversight_and_accountability_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Human-in-the-loop workflow + override/appeal and Decision audit trail (model vs human) (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
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
            "sub": "pull Human-in-the-loop workflow + override/appeal · Decision audit trail (model vs human)",
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
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "human-oversight design (in/on/over-the-loop to the risk; interpret + override + stop)\naccountability + RACI for AI decisions (model owner, outcome-answerable role, escalation)\noverride/appeal + audit trail of human vs model decisions (override-rate signal)\noperator training on appropriate reliance (no automation bias / no dismissal)"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The human-oversight design for the AI system (human in/on/over-the-loop matched to the risk; the operator's ability to interpret, override, and stop the system).",
        "The test: Verify human oversight + accountability are implemented.",
        "Reconcile the systems of record (Human-in-the-loop workflow + override/appeal, Decision audit trail (model vs human), RACI / accountability records) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. The AI system effectively makes consequential decisions with no real human override — operators rubber-stamp its output, no one is named accountable for its decisions, and there's no audit trail distinguishing a human judgment from the model's recommendation."
      ],
      "references": [
        {
          "title": "EU AI Act — Human Oversight",
          "url": "https://artificialintelligenceact.eu/"
        },
        {
          "title": "NIST AI RMF",
          "url": "https://www.nist.gov/itl/ai-risk-management-framework"
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
          "description": "Runnable read-only MCP server: gathers the System Implementation — AI (Artificial Intelligence) evidence for \"Human oversight and accountability\" (the human-oversight design for the ai system (human in/on/over-the-loop matched to the risk; the operator's ability to interpret, override, and stop the system)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Human oversight and accountability\" control for System Implementation — AI (Artificial Intelligence) at AcmeCorp. THE TEST: Verify human oversight + accountability are implemented. PASS: human oversight is designed to the risk (operators can interpret, override, and halt the system), accountability is assigned (RACI: model owner + outcome-answerable role + escalation), there's an override/appeal path with an audit trail (and override-rate monitoring), and operators are trained on appropriate reliance. Exceptions: a consequential model running with no effective human override or stop, no named accountable owner for AI decisions, no audit trail of human-vs-model decisions, and operators untrained (rubber-stamping or ignoring the model). The evidence — The human-oversight design for the AI system (human in/on/over-the-loop matched to the risk; the operator's ability to interpret, override, and stop the system) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Human-in-the-loop workflow + override/appeal APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Human-in-the-loop workflow + override/appeal gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Human-in-the-loop workflow + override/appeal; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — System Implementation — AI (Artificial Intelligence): \"Human oversight and accountability\" Audit Evidence\n\nThe test:\nVerify human oversight + accountability are implemented. PASS: human oversight is designed to the risk (operators can interpret, override, and halt the system), accountability is assigned (RACI: model owner + outcome-answerable role + escalation), there's an override/appeal path with an audit trail (and override-rate monitoring), and operators are trained on appropriate reliance. Exceptions: a consequential model running with no effective human override or stop, no named accountable owner for AI decisions, no audit trail of human-vs-model decisions, and operators untrained (rubber-stamping or ignoring the model).\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- sysimpl-ai_inventory.json   (in-scope items — The human-oversight design for the AI system (human in/on/over-the-loop matched to the risk; the operator's ability to interpret, override, and stop the system))\n- sysimpl-ai_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
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
            "Deploy and operate the human oversight and accountability control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the human oversight and accountability control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for human oversight and accountability against comparable organisations in the sector",
            "Obtain evidence that the human oversight and accountability control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "sia-11-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Human oversight and accountability\" matter to the broader System Implementation — AI (Artificial Intelligence) posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to System Implementation — AI (Artificial Intelligence)",
            "It stops mattering once a firewall and endpoint agent are deployed across the System Implementation — AI (Artificial Intelligence) estate",
            "It is a control other System Implementation — AI (Artificial Intelligence) controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other System Implementation — AI (Artificial Intelligence) controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "sia-11-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Human oversight and accountability\" control?",
          "options": [
            "A point-in-time screenshot of one system's human oversight and accountability settings, captured during the walkthrough",
            "The The human-oversight design for the AI system (human in/on/over-the-loop matched to the risk; the operator's ability to interpret, override, and stop the system), reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the human oversight and accountability control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's human oversight and accountability capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "sia-11-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Human oversight and accountability\"?",
          "options": [
            "From Human-in-the-loop workflow + override/appeal and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how human oversight and accountability works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. Human-in-the-loop workflow + override/appeal) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "sia-11-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Human oversight and accountability\"?",
          "options": [
            "The external audit firm, since it is the party examining the human oversight and accountability control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the human oversight and accountability data is shared, so the accountability sits with no one in particular",
            "Business / operations owner, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Business / operations owner owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "sia-11-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Human oversight and accountability\", which part stays with the human auditor?",
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
          "id": "sia-11-q7",
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
          "id": "sia-11-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Human oversight and accountability\", which of these is a realistic reportable finding?",
          "options": [
            "The AI system effectively makes consequential decisions with no real human override — operators rubber-stamp its output, no one is named accountable for its decisions, and there's no audit trail distinguishing a human judgment from the model's recommendation.",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. The AI system effectively makes consequential decisions with no real human override — operators rubber-stamp its output, no one is named accountable for its decisions, and there's no audit trail distinguishing a human judgment from the model's recommendation. A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "sia-11-q9",
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
          "id": "sia-11-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Human oversight and accountability\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind human oversight and accountability, so there is no overlap",
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
    "epochId": "sysimpl-ai",
    "id": "sia-12",
    "order": 12,
    "title": "AI performance / post-deployment",
    "subtitle": "Agentic technical & privacy audit of the ai performance / post-deployment control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 7,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"AI performance / post-deployment\" control for System Implementation — AI (Artificial Intelligence) is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify the AI system's value + performance are reviewed post-deployment. PASS: a post-implementation review measures the system against its original success metrics + business case; production outcomes are tracked (real-world performance vs validation, harm/complaint/appeal rates, benefit realisation); a feedback loop feeds outcomes + affected-party feedback into improvement; and there are criteria to remediate or decommission an under-delivering/harmful model. Exceptions: no post-implementation review (no one knows if it delivered value), no production outcome/harm tracking, no feedback loop, and no criteria to retire a failing model (it runs indefinitely unmeasured).",
      "approach": "An audit agent calls a read-only MCP server that wraps the System Implementation — AI (Artificial Intelligence) systems of record (Benefits-realisation / PIR records; Production outcome + complaint/appeal tracking; Feedback-loop pipeline) as tools — e.g. `post-implementation review vs original success metrics + business case`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The post-implementation review of the AI system against its original success metrics + business case (did it deliver the intended outcome and value)",
        "Production performance + outcome tracking (real-world accuracy/impact vs validation, harm/complaint/appeal rates, benefit realisation)",
        "The feedback loop from production outcomes + user/affected-party feedback back into model improvement",
        "Decommissioning/continuation decision criteria (retire or remediate a model that under-delivers or causes harm)"
      ],
      "system": [
        "Benefits-realisation / PIR records",
        "Production outcome + complaint/appeal tracking",
        "Feedback-loop pipeline",
        "Decommission decision criteria"
      ],
      "dataOwner": [
        "Product owner + business sponsor",
        "Responsible-AI",
        "Data science (feedback loop)"
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
      "tagline": "Auditing \"AI performance / post-deployment\" as a repeatable agentic workflow: pull the real evidence (The post-implementation review of the AI system against its original success metrics + business case (did it deliver the intended outcome and value)) with read-only agents, run the test against policy, and issue a defensible opinion on the System Implementation — AI (Artificial Intelligence) control.",
      "year": 2025,
      "overview": [
        "The \"AI performance / post-deployment\" sub-process is one of the controls an auditor must verify for System Implementation — AI (Artificial Intelligence). The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the post-implementation review of the AI system against its original success metrics + business case (did it deliver the intended outcome and value), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Benefits-realisation / PIR records, Production outcome + complaint/appeal tracking, Feedback-loop pipeline — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `post-implementation review vs original success metrics + business case (delivere` — read-only, against the systems of record.",
        "The test itself is specific. Verify the AI system's value + performance are reviewed post-deployment. PASS: a post-implementation review measures the system against its original success metrics + business case; production outcomes are tracked (real-world performance vs validation, harm/complaint/appeal rates, benefit realisation); a feedback loop feeds outcomes + affected-party feedback into improvement; and there are criteria to remediate or decommission an under-delivering/harmful model. Exceptions: no post-implementation review (no one knows if it delivered value), no production outcome/harm tracking, no feedback loop, and no criteria to retire a failing model (it runs indefinitely unmeasured). The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `12_ai_performance_post_deployment_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Benefits-realisation / PIR records and Production outcome + complaint/appeal tracking (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
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
            "sub": "pull Benefits-realisation / PIR records · Production outcome + complaint/appeal tracking",
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
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "post-implementation review vs original success metrics + business case (delivered value?)\nproduction outcome tracking: real-world performance vs validation + harm/complaint/appeal rates\nfeedback loop: production outcomes + affected-party feedback → model improvement\ndecommission/continuation criteria (retire or remediate an under-delivering/harmful model)"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The post-implementation review of the AI system against its original success metrics + business case (did it deliver the intended outcome and value).",
        "The test: Verify the AI system's value + performance are reviewed post-deployment.",
        "Reconcile the systems of record (Benefits-realisation / PIR records, Production outcome + complaint/appeal tracking, Feedback-loop pipeline) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. There was never a post-implementation review — no one measured the model against its original business case or success metrics; harm and complaint rates aren't tracked, there's no feedback loop, and a model that quietly stopped delivering value is still running."
      ],
      "references": [
        {
          "title": "NIST AI RMF",
          "url": "https://www.nist.gov/itl/ai-risk-management-framework"
        },
        {
          "title": "ISO/IEC 42001",
          "url": "https://www.iso.org/standard/81230.html"
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
          "description": "Runnable read-only MCP server: gathers the System Implementation — AI (Artificial Intelligence) evidence for \"AI performance / post-deployment\" (the post-implementation review of the ai system against its original success metrics + business case (did it deliver the intended outcome and value)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"AI performance / post-deployment\" control for System Implementation — AI (Artificial Intelligence) at AcmeCorp. THE TEST: Verify the AI system's value + performance are reviewed post-deployment. PASS: a post-implementation review measures the system against its original success metrics + business case; production outcomes are tracked (real-world performance vs validation, harm/complaint/appeal rates, benefit realisation); a feedback loop feeds outcomes + affected-party feedback into improvement; and there are criteria to remediate or decommission an under-delivering/harmful model. Exceptions: no post-implementation review (no one knows if it delivered value), no production outcome/harm tracking, no feedback loop, and no criteria to retire a failing model (it runs indefinitely unmeasured). The evidence — The post-implementation review of the AI system against its original success metrics + business case (did it deliver the intended outcome and value) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Benefits-realisation / PIR records APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Benefits-realisation / PIR records gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Benefits-realisation / PIR records; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — System Implementation — AI (Artificial Intelligence): \"AI performance / post-deployment\" Audit Evidence\n\nThe test:\nVerify the AI system's value + performance are reviewed post-deployment. PASS: a post-implementation review measures the system against its original success metrics + business case; production outcomes are tracked (real-world performance vs validation, harm/complaint/appeal rates, benefit realisation); a feedback loop feeds outcomes + affected-party feedback into improvement; and there are criteria to remediate or decommission an under-delivering/harmful model. Exceptions: no post-implementation review (no one knows if it delivered value), no production outcome/harm tracking, no feedback loop, and no criteria to retire a failing model (it runs indefinitely unmeasured).\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- sysimpl-ai_inventory.json   (in-scope items — The post-implementation review of the AI system against its original success metrics + business case (did it deliver the intended outcome and value))\n- sysimpl-ai_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
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
            "Deploy and operate the ai performance / post-deployment control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the ai performance / post-deployment control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for ai performance / post-deployment against comparable organisations in the sector",
            "Obtain evidence that the ai performance / post-deployment control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "sia-12-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"AI performance / post-deployment\" matter to the broader System Implementation — AI (Artificial Intelligence) posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to System Implementation — AI (Artificial Intelligence)",
            "It stops mattering once a firewall and endpoint agent are deployed across the System Implementation — AI (Artificial Intelligence) estate",
            "It is a control other System Implementation — AI (Artificial Intelligence) controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other System Implementation — AI (Artificial Intelligence) controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "sia-12-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"AI performance / post-deployment\" control?",
          "options": [
            "A point-in-time screenshot of one system's ai performance / post-deployment settings, captured during the walkthrough",
            "The The post-implementation review of the AI system against its original success metrics + business case (did it deliver the intended outcome and value), reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the ai performance / post-deployment control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's ai performance / post-deployment capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "sia-12-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"AI performance / post-deployment\"?",
          "options": [
            "From Benefits-realisation / PIR records and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how ai performance / post-deployment works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. Benefits-realisation / PIR records) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "sia-12-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"AI performance / post-deployment\"?",
          "options": [
            "The external audit firm, since it is the party examining the ai performance / post-deployment control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the ai performance / post-deployment data is shared, so the accountability sits with no one in particular",
            "Product owner + business sponsor, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Product owner + business sponsor owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "sia-12-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"AI performance / post-deployment\", which part stays with the human auditor?",
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
          "id": "sia-12-q7",
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
          "id": "sia-12-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"AI performance / post-deployment\", which of these is a realistic reportable finding?",
          "options": [
            "There was never a post-implementation review — no one measured the model against its original business case or success metrics; harm and complaint rates aren't tracked, there's no feedback loop, and a model that quietly stopped delivering value is still running.",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. There was never a post-implementation review — no one measured the model against its original business case or success metrics; harm and complaint rates aren't tracked, there's no feedback loop, and a model that quietly stopped delivering value is still running. A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "sia-12-q9",
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
          "id": "sia-12-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"AI performance / post-deployment\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind ai performance / post-deployment, so there is no overlap",
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

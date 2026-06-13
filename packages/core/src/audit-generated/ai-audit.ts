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
    "xp": 140,
    "easeScore": 5,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"AI governance and strategic planning\" control for Artificial Intelligence (AI) is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify AI use is governed strategically. PASS: an AI governance framework + policy exists with an accountable body, an AI system register, risk-tiering of AI systems, an approval gate for new AI use-cases, and alignment to NIST AI RMF / ISO 42001; shadow AI is detected. Exceptions: no AI governance/policy, no AI inventory (shadow AI proliferating), no risk-tiering, AI deployed with no approval/governance, and no framework alignment.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Artificial Intelligence (AI) systems of record (AI governance / GRC tooling; AI system register / inventory; NIST AI RMF / ISO 42001 framework) as tools — e.g. `the AI governance framework + policy + accountable body (AI risk commi`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The AI governance framework + policy (AI-use policy, roles, an AI risk committee / governance body) + an AI system inventory/register",
        "The AI strategy + risk-tiering of AI systems (by impact/criticality, aligned to EU AI Act risk tiers)",
        "Evidence AI use is governed (an approval gate for new AI systems/use-cases; shadow-AI detection)",
        "Alignment to a recognised framework (NIST AI RMF / ISO 42001)"
      ],
      "system": [
        "AI governance / GRC tooling",
        "AI system register / inventory",
        "NIST AI RMF / ISO 42001 framework",
        "Shadow-AI discovery"
      ],
      "dataOwner": [
        "AI governance board / Chief AI Officer / Responsible-AI",
        "Risk",
        "Legal + Security"
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
      "tagline": "Auditing \"AI governance and strategic planning\" as a repeatable agentic workflow: pull the real evidence (The AI governance framework + policy (AI-use policy, roles, an AI risk committee / governance body) + an AI system inventory/register) with read-only agents, run the test against policy, and issue a defensible opinion on the Artificial Intelligence (AI) control.",
      "year": 2025,
      "overview": [
        "The \"AI governance and strategic planning\" sub-process is one of the controls an auditor must verify for Artificial Intelligence (AI). The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the AI governance framework + policy (AI-use policy, roles, an AI risk committee / governance body) + an AI system inventory/register, for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here AI governance / GRC tooling, AI system register / inventory, NIST AI RMF / ISO 42001 framework — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `the AI governance framework + policy + accountable body (AI risk committee)?` — read-only, against the systems of record.",
        "The test itself is specific. Verify AI use is governed strategically. PASS: an AI governance framework + policy exists with an accountable body, an AI system register, risk-tiering of AI systems, an approval gate for new AI use-cases, and alignment to NIST AI RMF / ISO 42001; shadow AI is detected. Exceptions: no AI governance/policy, no AI inventory (shadow AI proliferating), no risk-tiering, AI deployed with no approval/governance, and no framework alignment. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `01_ai_governance_and_strategic_planning_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from AI governance / GRC tooling and AI system register / inventory (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
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
            "sub": "pull AI governance / GRC tooling · AI system register / inventory",
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
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "the AI governance framework + policy + accountable body (AI risk committee)?\nthe AI system register: inventory + risk-tier per system (EU AI Act tiers)\napproval gate for new AI use-cases + shadow-AI detection\nalignment to NIST AI RMF / ISO 42001"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The AI governance framework + policy (AI-use policy, roles, an AI risk committee / governance body) + an AI system inventory/register.",
        "The test: Verify AI use is governed strategically.",
        "Reconcile the systems of record (AI governance / GRC tooling, AI system register / inventory, NIST AI RMF / ISO 42001 framework) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. There's no AI governance body, policy, or system register; teams deploy AI and LLM features with no approval or risk assessment, and no one can produce a list of where AI is used in the business."
      ],
      "references": [
        {
          "title": "NIST AI Risk Management Framework",
          "url": "https://www.nist.gov/itl/ai-risk-management-framework"
        },
        {
          "title": "ISO/IEC 42001",
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
          "name": "01_ai_governance_and_strategic_planning_mcp.py",
          "url": "/audit-code/ai-audit/01_ai_governance_and_strategic_planning_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Artificial Intelligence (AI) evidence for \"AI governance and strategic planning\" (the ai governance framework + policy (ai-use policy, roles, an ai risk committee / governance body) + an ai system inventory/register), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"AI governance and strategic planning\" control for Artificial Intelligence (AI) at AcmeCorp. THE TEST: Verify AI use is governed strategically. PASS: an AI governance framework + policy exists with an accountable body, an AI system register, risk-tiering of AI systems, an approval gate for new AI use-cases, and alignment to NIST AI RMF / ISO 42001; shadow AI is detected. Exceptions: no AI governance/policy, no AI inventory (shadow AI proliferating), no risk-tiering, AI deployed with no approval/governance, and no framework alignment. The evidence — The AI governance framework + policy (AI-use policy, roles, an AI risk committee / governance body) + an AI system inventory/register — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live AI governance / GRC tooling APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. AI governance / GRC tooling gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from AI governance / GRC tooling; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Artificial Intelligence (AI): \"AI governance and strategic planning\" Audit Evidence\n\nThe test:\nVerify AI use is governed strategically. PASS: an AI governance framework + policy exists with an accountable body, an AI system register, risk-tiering of AI systems, an approval gate for new AI use-cases, and alignment to NIST AI RMF / ISO 42001; shadow AI is detected. Exceptions: no AI governance/policy, no AI inventory (shadow AI proliferating), no risk-tiering, AI deployed with no approval/governance, and no framework alignment.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- ai-audit_inventory.json   (in-scope items — The AI governance framework + policy (AI-use policy, roles, an AI risk committee / governance body) + an AI system inventory/register)\n- ai-audit_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
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
            "Deploy and operate the ai governance and strategic planning control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the ai governance and strategic planning control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for ai governance and strategic planning against comparable organisations in the sector",
            "Obtain evidence that the ai governance and strategic planning control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "aig-01-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"AI governance and strategic planning\" matter to the broader Artificial Intelligence (AI) posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Artificial Intelligence (AI)",
            "It stops mattering once a firewall and endpoint agent are deployed across the Artificial Intelligence (AI) estate",
            "It is a control other Artificial Intelligence (AI) controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Artificial Intelligence (AI) controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "aig-01-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"AI governance and strategic planning\" control?",
          "options": [
            "A point-in-time screenshot of one system's ai governance and strategic planning settings, captured during the walkthrough",
            "The The AI governance framework + policy (AI-use policy, roles, an AI risk committee / governance body) + an AI system inventory/register, reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the ai governance and strategic planning control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's ai governance and strategic planning capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "aig-01-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"AI governance and strategic planning\"?",
          "options": [
            "From AI governance / GRC tooling and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how ai governance and strategic planning works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. AI governance / GRC tooling) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "aig-01-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"AI governance and strategic planning\"?",
          "options": [
            "The external audit firm, since it is the party examining the ai governance and strategic planning control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the ai governance and strategic planning data is shared, so the accountability sits with no one in particular",
            "AI governance board / Chief AI Officer / Responsible-AI, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "AI governance board / Chief AI Officer / Responsible-AI owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "aig-01-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"AI governance and strategic planning\", which part stays with the human auditor?",
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
          "id": "aig-01-q7",
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
          "id": "aig-01-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"AI governance and strategic planning\", which of these is a realistic reportable finding?",
          "options": [
            "There's no AI governance body, policy, or system register; teams deploy AI and LLM features with no approval or risk assessment, and no one can produce a list of where AI is used in the business.",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. There's no AI governance body, policy, or system register; teams deploy AI and LLM features with no approval or risk assessment, and no one can produce a list of where AI is used in the business. A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "aig-01-q9",
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
          "id": "aig-01-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"AI governance and strategic planning\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind ai governance and strategic planning, so there is no overlap",
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
    "epochId": "ai-audit",
    "id": "aig-02",
    "order": 2,
    "title": "Legal, ethics, compliance",
    "subtitle": "Agentic technical & privacy audit of the legal, ethics, compliance control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 6,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Legal, ethics, compliance\" control for Artificial Intelligence (AI) is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify AI systems meet legal + ethical + compliance obligations. PASS: each AI system is assessed against applicable law (EU AI Act, GDPR Art. 22 automated decisions, sector rules) and ethics (bias/fairness tested, transparency/explainability provided); high-risk AI meets conformity requirements; consequential decisions have human oversight + appeal; and IP/data-use is lawful. Exceptions: AI making consequential decisions with no bias testing or explainability, high-risk AI with no conformity assessment, no human-oversight/appeal for automated decisions, and unlawful data/IP use.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Artificial Intelligence (AI) systems of record (AI compliance / GRC (EU AI Act mapping); Bias / fairness testing tooling; Explainability tooling) as tools — e.g. `per AI system: legal/ethics/compliance assessment (EU AI Act, GDPR Art`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The AI legal/ethics/compliance assessment per AI system (applicable laws — EU AI Act, GDPR automated-decision, sector rules; ethics — fairness/bias, transparency)",
        "Bias/fairness assessment + the explainability/transparency provided to affected individuals",
        "Compliance with AI-specific regulation (EU AI Act conformity for high-risk; disclosure/consent)",
        "Human-oversight + appeal/contestability for consequential automated decisions"
      ],
      "system": [
        "AI compliance / GRC (EU AI Act mapping)",
        "Bias / fairness testing tooling",
        "Explainability tooling",
        "Legal review records"
      ],
      "dataOwner": [
        "Legal + Responsible-AI / ethics",
        "Compliance",
        "AI/ML teams"
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
      "tagline": "Auditing \"Legal, ethics, compliance\" as a repeatable agentic workflow: pull the real evidence (The AI legal/ethics/compliance assessment per AI system (applicable laws — EU AI Act, GDPR automated-decision, sector rules; ethics — fairness/bias, transparency)) with read-only agents, run the test against policy, and issue a defensible opinion on the Artificial Intelligence (AI) control.",
      "year": 2025,
      "overview": [
        "The \"Legal, ethics, compliance\" sub-process is one of the controls an auditor must verify for Artificial Intelligence (AI). The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the AI legal/ethics/compliance assessment per AI system (applicable laws — EU AI Act, GDPR automated-decision, sector rules; ethics — fairness/bias, transparency), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here AI compliance / GRC (EU AI Act mapping), Bias / fairness testing tooling, Explainability tooling — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `per AI system: legal/ethics/compliance assessment (EU AI Act, GDPR Art. 22, sect` — read-only, against the systems of record.",
        "The test itself is specific. Verify AI systems meet legal + ethical + compliance obligations. PASS: each AI system is assessed against applicable law (EU AI Act, GDPR Art. 22 automated decisions, sector rules) and ethics (bias/fairness tested, transparency/explainability provided); high-risk AI meets conformity requirements; consequential decisions have human oversight + appeal; and IP/data-use is lawful. Exceptions: AI making consequential decisions with no bias testing or explainability, high-risk AI with no conformity assessment, no human-oversight/appeal for automated decisions, and unlawful data/IP use. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `02_legal_ethics_compliance_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from AI compliance / GRC (EU AI Act mapping) and Bias / fairness testing tooling (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
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
            "sub": "pull AI compliance / GRC (EU AI Act mapping) · Bias / fairness testing tooling",
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
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "per AI system: legal/ethics/compliance assessment (EU AI Act, GDPR Art. 22, sector)\nbias/fairness assessment + explainability/transparency to affected individuals\nhigh-risk AI conformity assessment + disclosure/consent\nhuman-oversight + appeal for consequential automated decisions"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The AI legal/ethics/compliance assessment per AI system (applicable laws — EU AI Act, GDPR automated-decision, sector rules; ethics — fairness/bias, transparency).",
        "The test: Verify AI systems meet legal + ethical + compliance obligations.",
        "Reconcile the systems of record (AI compliance / GRC (EU AI Act mapping), Bias / fairness testing tooling, Explainability tooling) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. An AI model that influences lending decisions has no bias testing, no explainability for declined applicants, and no human-review/appeal path — a GDPR Art. 22 and emerging-AI-law exposure that was never assessed."
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
          "name": "02_legal_ethics_compliance_mcp.py",
          "url": "/audit-code/ai-audit/02_legal_ethics_compliance_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Artificial Intelligence (AI) evidence for \"Legal, ethics, compliance\" (the ai legal/ethics/compliance assessment per ai system (applicable laws — eu ai act, gdpr automated-decision, sector rules; ethics — fairness/bias, transparency)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Legal, ethics, compliance\" control for Artificial Intelligence (AI) at AcmeCorp. THE TEST: Verify AI systems meet legal + ethical + compliance obligations. PASS: each AI system is assessed against applicable law (EU AI Act, GDPR Art. 22 automated decisions, sector rules) and ethics (bias/fairness tested, transparency/explainability provided); high-risk AI meets conformity requirements; consequential decisions have human oversight + appeal; and IP/data-use is lawful. Exceptions: AI making consequential decisions with no bias testing or explainability, high-risk AI with no conformity assessment, no human-oversight/appeal for automated decisions, and unlawful data/IP use. The evidence — The AI legal/ethics/compliance assessment per AI system (applicable laws — EU AI Act, GDPR automated-decision, sector rules; ethics — fairness/bias, transparency) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live AI compliance / GRC (EU AI Act mapping) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. AI compliance / GRC (EU AI Act mapping) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from AI compliance / GRC (EU AI Act mapping); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Artificial Intelligence (AI): \"Legal, ethics, compliance\" Audit Evidence\n\nThe test:\nVerify AI systems meet legal + ethical + compliance obligations. PASS: each AI system is assessed against applicable law (EU AI Act, GDPR Art. 22 automated decisions, sector rules) and ethics (bias/fairness tested, transparency/explainability provided); high-risk AI meets conformity requirements; consequential decisions have human oversight + appeal; and IP/data-use is lawful. Exceptions: AI making consequential decisions with no bias testing or explainability, high-risk AI with no conformity assessment, no human-oversight/appeal for automated decisions, and unlawful data/IP use.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- ai-audit_inventory.json   (in-scope items — The AI legal/ethics/compliance assessment per AI system (applicable laws — EU AI Act, GDPR automated-decision, sector rules; ethics — fairness/bias, transparency))\n- ai-audit_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
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
            "Deploy and operate the legal, ethics, compliance control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the legal, ethics, compliance control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for legal, ethics, compliance against comparable organisations in the sector",
            "Obtain evidence that the legal, ethics, compliance control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "aig-02-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Legal, ethics, compliance\" matter to the broader Artificial Intelligence (AI) posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Artificial Intelligence (AI)",
            "It stops mattering once a firewall and endpoint agent are deployed across the Artificial Intelligence (AI) estate",
            "It is a control other Artificial Intelligence (AI) controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Artificial Intelligence (AI) controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "aig-02-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Legal, ethics, compliance\" control?",
          "options": [
            "A point-in-time screenshot of one system's legal, ethics, compliance settings, captured during the walkthrough",
            "The The AI legal/ethics/compliance assessment per AI system (applicable laws — EU AI Act, GDPR automated-decision, sector rules; ethics — fairness/bias, transparency), reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the legal, ethics, compliance control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's legal, ethics, compliance capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "aig-02-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Legal, ethics, compliance\"?",
          "options": [
            "From AI compliance / GRC (EU AI Act mapping) and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how legal, ethics, compliance works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. AI compliance / GRC (EU AI Act mapping)) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "aig-02-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Legal, ethics, compliance\"?",
          "options": [
            "The external audit firm, since it is the party examining the legal, ethics, compliance control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the legal, ethics, compliance data is shared, so the accountability sits with no one in particular",
            "Legal + Responsible-AI / ethics, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Legal + Responsible-AI / ethics owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "aig-02-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Legal, ethics, compliance\", which part stays with the human auditor?",
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
          "id": "aig-02-q7",
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
          "id": "aig-02-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Legal, ethics, compliance\", which of these is a realistic reportable finding?",
          "options": [
            "An AI model that influences lending decisions has no bias testing, no explainability for declined applicants, and no human-review/appeal path — a GDPR Art. 22 and emerging-AI-law exposure that was never assessed.",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. An AI model that influences lending decisions has no bias testing, no explainability for declined applicants, and no human-review/appeal path — a GDPR Art. 22 and emerging-AI-law exposure that was never assessed. A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "aig-02-q9",
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
          "id": "aig-02-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Legal, ethics, compliance\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind legal, ethics, compliance, so there is no overlap",
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
    "epochId": "ai-audit",
    "id": "aig-03",
    "order": 3,
    "title": "AI system architecture and dev",
    "subtitle": "Agentic technical & privacy audit of the ai system architecture and dev control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 5,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"AI system architecture and dev\" control for Artificial Intelligence (AI) is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify AI systems are architected + developed securely. PASS: AI systems follow a secure AI-SDLC/MLOps standard with design + threat-model review (covering AI-specific threats: poisoning, evasion, extraction, prompt injection); model development is versioned + reproducible with approved frameworks; and coverage spans AI systems. Exceptions: AI built ad hoc with no secure-SDLC, no AI-specific threat modeling, non-reproducible/unversioned models, and unapproved/unvetted ML frameworks + dependencies.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Artificial Intelligence (AI) systems of record (ML platform + MLOps pipeline (SageMaker / Vertex / Azure ML / Databricks); Model registry + versioning; AI threat-modeling (MITRE ATLAS)) as tools — e.g. `the secure AI-SDLC / MLOps standard + design + threat-model review (AI`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The AI system architecture + the secure-development standard for AI (the AI-SDLC, MLOps pipeline, design review)",
        "Security-by-design for AI (threat modeling incl. AI-specific threats; secure data/model pipelines)",
        "The model-development governance (versioning, reproducibility, approved frameworks)",
        "Coverage: AI systems built to the standard vs ad hoc"
      ],
      "system": [
        "ML platform + MLOps pipeline (SageMaker / Vertex / Azure ML / Databricks)",
        "Model registry + versioning",
        "AI threat-modeling (MITRE ATLAS)"
      ],
      "dataOwner": [
        "AI/ML engineering + AI security",
        "Enterprise architecture",
        "AppSec"
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
      "tagline": "Auditing \"AI system architecture and dev\" as a repeatable agentic workflow: pull the real evidence (The AI system architecture + the secure-development standard for AI (the AI-SDLC, MLOps pipeline, design review)) with read-only agents, run the test against policy, and issue a defensible opinion on the Artificial Intelligence (AI) control.",
      "year": 2025,
      "overview": [
        "The \"AI system architecture and dev\" sub-process is one of the controls an auditor must verify for Artificial Intelligence (AI). The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the AI system architecture + the secure-development standard for AI (the AI-SDLC, MLOps pipeline, design review), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here ML platform + MLOps pipeline (SageMaker / Vertex / Azure ML / Databricks), Model registry + versioning, AI threat-modeling (MITRE ATLAS) — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `the secure AI-SDLC / MLOps standard + design + threat-model review (AI-specific ` — read-only, against the systems of record.",
        "The test itself is specific. Verify AI systems are architected + developed securely. PASS: AI systems follow a secure AI-SDLC/MLOps standard with design + threat-model review (covering AI-specific threats: poisoning, evasion, extraction, prompt injection); model development is versioned + reproducible with approved frameworks; and coverage spans AI systems. Exceptions: AI built ad hoc with no secure-SDLC, no AI-specific threat modeling, non-reproducible/unversioned models, and unapproved/unvetted ML frameworks + dependencies. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `03_ai_system_architecture_and_dev_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from ML platform + MLOps pipeline (SageMaker / Vertex / Azure ML / Databricks) and Model registry + versioning (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
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
            "sub": "pull ML platform + MLOps pipeline (SageMaker / Vertex / Azure ML / Databricks) · Model registry + versioning",
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
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "the secure AI-SDLC / MLOps standard + design + threat-model review (AI-specific threats)\nAI threat modeling (MITRE ATLAS): poisoning, evasion, extraction, prompt injection\nmodel versioning + reproducibility + approved frameworks\ncoverage: AI systems built to the standard vs ad hoc"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The AI system architecture + the secure-development standard for AI (the AI-SDLC, MLOps pipeline, design review).",
        "The test: Verify AI systems are architected + developed securely.",
        "Reconcile the systems of record (ML platform + MLOps pipeline (SageMaker / Vertex / Azure ML / Databricks), Model registry + versioning, AI threat-modeling (MITRE ATLAS)) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. AI models are developed ad hoc in notebooks with no versioning or reproducibility, no AI-specific threat modeling, and unvetted open-source model dependencies pulled directly from public hubs."
      ],
      "references": [
        {
          "title": "NIST AI RMF",
          "url": "https://www.nist.gov/itl/ai-risk-management-framework"
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
          "description": "Runnable read-only MCP server: gathers the Artificial Intelligence (AI) evidence for \"AI system architecture and dev\" (the ai system architecture + the secure-development standard for ai (the ai-sdlc, mlops pipeline, design review)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"AI system architecture and dev\" control for Artificial Intelligence (AI) at AcmeCorp. THE TEST: Verify AI systems are architected + developed securely. PASS: AI systems follow a secure AI-SDLC/MLOps standard with design + threat-model review (covering AI-specific threats: poisoning, evasion, extraction, prompt injection); model development is versioned + reproducible with approved frameworks; and coverage spans AI systems. Exceptions: AI built ad hoc with no secure-SDLC, no AI-specific threat modeling, non-reproducible/unversioned models, and unapproved/unvetted ML frameworks + dependencies. The evidence — The AI system architecture + the secure-development standard for AI (the AI-SDLC, MLOps pipeline, design review) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live ML platform + MLOps pipeline (SageMaker / Vertex / Azure ML / Databricks) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. ML platform + MLOps pipeline (SageMaker / Vertex / Azure ML / Databricks) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from ML platform + MLOps pipeline (SageMaker / Vertex / Azure ML / Databricks); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Artificial Intelligence (AI): \"AI system architecture and dev\" Audit Evidence\n\nThe test:\nVerify AI systems are architected + developed securely. PASS: AI systems follow a secure AI-SDLC/MLOps standard with design + threat-model review (covering AI-specific threats: poisoning, evasion, extraction, prompt injection); model development is versioned + reproducible with approved frameworks; and coverage spans AI systems. Exceptions: AI built ad hoc with no secure-SDLC, no AI-specific threat modeling, non-reproducible/unversioned models, and unapproved/unvetted ML frameworks + dependencies.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- ai-audit_inventory.json   (in-scope items — The AI system architecture + the secure-development standard for AI (the AI-SDLC, MLOps pipeline, design review))\n- ai-audit_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
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
            "Deploy and operate the ai system architecture and dev control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the ai system architecture and dev control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for ai system architecture and dev against comparable organisations in the sector",
            "Obtain evidence that the ai system architecture and dev control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "aig-03-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"AI system architecture and dev\" matter to the broader Artificial Intelligence (AI) posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Artificial Intelligence (AI)",
            "It stops mattering once a firewall and endpoint agent are deployed across the Artificial Intelligence (AI) estate",
            "It is a control other Artificial Intelligence (AI) controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Artificial Intelligence (AI) controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "aig-03-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"AI system architecture and dev\" control?",
          "options": [
            "A point-in-time screenshot of one system's ai system architecture and dev settings, captured during the walkthrough",
            "The The AI system architecture + the secure-development standard for AI (the AI-SDLC, MLOps pipeline, design review), reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the ai system architecture and dev control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's ai system architecture and dev capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "aig-03-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"AI system architecture and dev\"?",
          "options": [
            "From ML platform + MLOps pipeline (SageMaker / Vertex / Azure ML / Databricks) and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how ai system architecture and dev works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. ML platform + MLOps pipeline (SageMaker / Vertex / Azure ML / Databricks)) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "aig-03-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"AI system architecture and dev\"?",
          "options": [
            "The external audit firm, since it is the party examining the ai system architecture and dev control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the ai system architecture and dev data is shared, so the accountability sits with no one in particular",
            "AI/ML engineering + AI security, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "AI/ML engineering + AI security owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "aig-03-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"AI system architecture and dev\", which part stays with the human auditor?",
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
          "id": "aig-03-q7",
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
          "id": "aig-03-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"AI system architecture and dev\", which of these is a realistic reportable finding?",
          "options": [
            "AI models are developed ad hoc in notebooks with no versioning or reproducibility, no AI-specific threat modeling, and unvetted open-source model dependencies pulled directly from public hubs.",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. AI models are developed ad hoc in notebooks with no versioning or reproducibility, no AI-specific threat modeling, and unvetted open-source model dependencies pulled directly from public hubs. A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "aig-03-q9",
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
          "id": "aig-03-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"AI system architecture and dev\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind ai system architecture and dev, so there is no overlap",
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
    "epochId": "ai-audit",
    "id": "aig-04",
    "order": 4,
    "title": "Model testing and validation",
    "subtitle": "Agentic technical & privacy audit of the model testing and validation control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 5,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Model testing and validation\" control for Artificial Intelligence (AI) is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify models are rigorously validated before deployment. PASS: models are validated pre-deployment against acceptance criteria (accuracy, robustness, bias/fairness) with a documented eval suite; AI-specific failure modes are tested (adversarial robustness, prompt-injection for LLMs, hallucination/grounding); a sign-off gate precedes production; and evals are reproducible. Exceptions: models deployed with no validation/eval, no bias/robustness testing, no acceptance criteria or sign-off gate, and non-reproducible one-off evals.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Artificial Intelligence (AI) systems of record (Eval harness + benchmarks (the model's eval suite); Adversarial / robustness + LLM red-team tooling; Model registry (validation records)) as tools — e.g. `pre-deployment validation: accuracy/performance + robustness + bias/fa`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The model validation/evaluation evidence pre-deployment (accuracy/performance, robustness, bias/fairness, the eval suite + benchmarks)",
        "The acceptance criteria + sign-off gate before a model goes to production",
        "Testing for AI-specific failure modes (adversarial robustness, prompt-injection resistance for LLMs, hallucination/grounding)",
        "Test coverage + reproducibility of evaluations"
      ],
      "system": [
        "Eval harness + benchmarks (the model's eval suite)",
        "Adversarial / robustness + LLM red-team tooling",
        "Model registry (validation records)"
      ],
      "dataOwner": [
        "AI/ML engineering + AI security / QA",
        "Responsible-AI (fairness)",
        "Model owners"
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
      "tagline": "Auditing \"Model testing and validation\" as a repeatable agentic workflow: pull the real evidence (The model validation/evaluation evidence pre-deployment (accuracy/performance, robustness, bias/fairness, the eval suite + benchmarks)) with read-only agents, run the test against policy, and issue a defensible opinion on the Artificial Intelligence (AI) control.",
      "year": 2025,
      "overview": [
        "The \"Model testing and validation\" sub-process is one of the controls an auditor must verify for Artificial Intelligence (AI). The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the model validation/evaluation evidence pre-deployment (accuracy/performance, robustness, bias/fairness, the eval suite + benchmarks), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Eval harness + benchmarks (the model's eval suite), Adversarial / robustness + LLM red-team tooling, Model registry (validation records) — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `pre-deployment validation: accuracy/performance + robustness + bias/fairness (th` — read-only, against the systems of record.",
        "The test itself is specific. Verify models are rigorously validated before deployment. PASS: models are validated pre-deployment against acceptance criteria (accuracy, robustness, bias/fairness) with a documented eval suite; AI-specific failure modes are tested (adversarial robustness, prompt-injection for LLMs, hallucination/grounding); a sign-off gate precedes production; and evals are reproducible. Exceptions: models deployed with no validation/eval, no bias/robustness testing, no acceptance criteria or sign-off gate, and non-reproducible one-off evals. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `04_model_testing_and_validation_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Eval harness + benchmarks (the model's eval suite) and Adversarial / robustness + LLM red-team tooling (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
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
            "sub": "pull Eval harness + benchmarks (the model's eval suite) · Adversarial / robustness + LLM red-team tooling",
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
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "pre-deployment validation: accuracy/performance + robustness + bias/fairness (the eval suite)\nacceptance criteria + sign-off gate before production\nAI-specific testing: adversarial robustness, prompt-injection (LLMs), hallucination/grounding\neval reproducibility + coverage"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The model validation/evaluation evidence pre-deployment (accuracy/performance, robustness, bias/fairness, the eval suite + benchmarks).",
        "The test: Verify models are rigorously validated before deployment.",
        "Reconcile the systems of record (Eval harness + benchmarks (the model's eval suite), Adversarial / robustness + LLM red-team tooling, Model registry (validation records)) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. Models ship on a single accuracy number with no robustness, bias, or adversarial testing and no sign-off gate; an LLM feature was deployed with no prompt-injection or grounding evaluation."
      ],
      "references": [
        {
          "title": "NIST AI RMF (Measure)",
          "url": "https://www.nist.gov/itl/ai-risk-management-framework"
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
          "name": "04_model_testing_and_validation_mcp.py",
          "url": "/audit-code/ai-audit/04_model_testing_and_validation_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Artificial Intelligence (AI) evidence for \"Model testing and validation\" (the model validation/evaluation evidence pre-deployment (accuracy/performance, robustness, bias/fairness, the eval suite + benchmarks)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Model testing and validation\" control for Artificial Intelligence (AI) at AcmeCorp. THE TEST: Verify models are rigorously validated before deployment. PASS: models are validated pre-deployment against acceptance criteria (accuracy, robustness, bias/fairness) with a documented eval suite; AI-specific failure modes are tested (adversarial robustness, prompt-injection for LLMs, hallucination/grounding); a sign-off gate precedes production; and evals are reproducible. Exceptions: models deployed with no validation/eval, no bias/robustness testing, no acceptance criteria or sign-off gate, and non-reproducible one-off evals. The evidence — The model validation/evaluation evidence pre-deployment (accuracy/performance, robustness, bias/fairness, the eval suite + benchmarks) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Eval harness + benchmarks (the model's eval suite) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Eval harness + benchmarks (the model's eval suite) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Eval harness + benchmarks (the model's eval suite); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Artificial Intelligence (AI): \"Model testing and validation\" Audit Evidence\n\nThe test:\nVerify models are rigorously validated before deployment. PASS: models are validated pre-deployment against acceptance criteria (accuracy, robustness, bias/fairness) with a documented eval suite; AI-specific failure modes are tested (adversarial robustness, prompt-injection for LLMs, hallucination/grounding); a sign-off gate precedes production; and evals are reproducible. Exceptions: models deployed with no validation/eval, no bias/robustness testing, no acceptance criteria or sign-off gate, and non-reproducible one-off evals.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- ai-audit_inventory.json   (in-scope items — The model validation/evaluation evidence pre-deployment (accuracy/performance, robustness, bias/fairness, the eval suite + benchmarks))\n- ai-audit_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
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
            "Deploy and operate the model testing and validation control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the model testing and validation control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for model testing and validation against comparable organisations in the sector",
            "Obtain evidence that the model testing and validation control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "aig-04-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Model testing and validation\" matter to the broader Artificial Intelligence (AI) posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Artificial Intelligence (AI)",
            "It stops mattering once a firewall and endpoint agent are deployed across the Artificial Intelligence (AI) estate",
            "It is a control other Artificial Intelligence (AI) controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Artificial Intelligence (AI) controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "aig-04-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Model testing and validation\" control?",
          "options": [
            "A point-in-time screenshot of one system's model testing and validation settings, captured during the walkthrough",
            "The The model validation/evaluation evidence pre-deployment (accuracy/performance, robustness, bias/fairness, the eval suite + benchmarks), reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the model testing and validation control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's model testing and validation capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "aig-04-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Model testing and validation\"?",
          "options": [
            "From Eval harness + benchmarks (the model's eval suite) and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how model testing and validation works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. Eval harness + benchmarks (the model's eval suite)) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "aig-04-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Model testing and validation\"?",
          "options": [
            "The external audit firm, since it is the party examining the model testing and validation control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the model testing and validation data is shared, so the accountability sits with no one in particular",
            "AI/ML engineering + AI security / QA, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "AI/ML engineering + AI security / QA owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "aig-04-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Model testing and validation\", which part stays with the human auditor?",
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
          "id": "aig-04-q7",
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
          "id": "aig-04-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Model testing and validation\", which of these is a realistic reportable finding?",
          "options": [
            "Models ship on a single accuracy number with no robustness, bias, or adversarial testing and no sign-off gate; an LLM feature was deployed with no prompt-injection or grounding evaluation.",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. Models ship on a single accuracy number with no robustness, bias, or adversarial testing and no sign-off gate; an LLM feature was deployed with no prompt-injection or grounding evaluation. A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "aig-04-q9",
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
          "id": "aig-04-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Model testing and validation\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind model testing and validation, so there is no overlap",
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
    "epochId": "ai-audit",
    "id": "aig-05",
    "order": 5,
    "title": "Data governance and handling (AI)",
    "subtitle": "Agentic technical & privacy audit of the data governance and handling (ai) control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 6,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Data governance and handling (AI)\" control for Artificial Intelligence (AI) is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify the data feeding AI is governed. PASS: training/fine-tuning data has documented provenance + lineage, is approved + classified + lawfully sourced (consent/licensing), is quality-checked, and is protected against poisoning (vetted sources, integrity); data-to-model lineage is maintained. Exceptions: training data with unknown provenance/licensing (unlicensed/scraped/PII), no data-poisoning protection, no consent for personal data used in training, and no data-to-model lineage (can't audit or remediate a tainted model).",
      "approach": "An audit agent calls a read-only MCP server that wraps the Artificial Intelligence (AI) systems of record (Data catalogue + lineage (training data); Data-source vetting + integrity; Consent / licensing records) as tools — e.g. `per model: training/fine-tuning data provenance + lineage + consent/li`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The training/fine-tuning data governance (provenance, lineage, consent/licensing, quality) per model",
        "Evidence training data is approved, classified, and lawfully sourced (no unlicensed/scraped sensitive data)",
        "Data-poisoning protection (vetting training data sources, integrity)",
        "The data-to-model lineage (which data trained which model — for audit + remediation)"
      ],
      "system": [
        "Data catalogue + lineage (training data)",
        "Data-source vetting + integrity",
        "Consent / licensing records",
        "The model registry (data ↔ model)"
      ],
      "dataOwner": [
        "Data governance + AI/ML teams",
        "Privacy / Legal (consent / licensing)",
        "AI security"
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
      "tagline": "Auditing \"Data governance and handling (AI)\" as a repeatable agentic workflow: pull the real evidence (The training/fine-tuning data governance (provenance, lineage, consent/licensing, quality) per model) with read-only agents, run the test against policy, and issue a defensible opinion on the Artificial Intelligence (AI) control.",
      "year": 2025,
      "overview": [
        "The \"Data governance and handling (AI)\" sub-process is one of the controls an auditor must verify for Artificial Intelligence (AI). The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the training/fine-tuning data governance (provenance, lineage, consent/licensing, quality) per model, for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Data catalogue + lineage (training data), Data-source vetting + integrity, Consent / licensing records — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `per model: training/fine-tuning data provenance + lineage + consent/licensing + ` — read-only, against the systems of record.",
        "The test itself is specific. Verify the data feeding AI is governed. PASS: training/fine-tuning data has documented provenance + lineage, is approved + classified + lawfully sourced (consent/licensing), is quality-checked, and is protected against poisoning (vetted sources, integrity); data-to-model lineage is maintained. Exceptions: training data with unknown provenance/licensing (unlicensed/scraped/PII), no data-poisoning protection, no consent for personal data used in training, and no data-to-model lineage (can't audit or remediate a tainted model). The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `05_data_governance_and_handling_ai_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Data catalogue + lineage (training data) and Data-source vetting + integrity (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
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
            "sub": "pull Data catalogue + lineage (training data) · Data-source vetting + integrity",
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
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "per model: training/fine-tuning data provenance + lineage + consent/licensing + quality\nis training data approved, classified, lawfully sourced (no unlicensed/scraped PII)?\ndata-poisoning protection: source vetting + integrity\ndata-to-model lineage (which data trained which model?)"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The training/fine-tuning data governance (provenance, lineage, consent/licensing, quality) per model.",
        "The test: Verify the data feeding AI is governed.",
        "Reconcile the systems of record (Data catalogue + lineage (training data), Data-source vetting + integrity, Consent / licensing records) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. A model was fine-tuned on scraped data of unknown licensing including personal data with no consent, training sources aren't vetted for poisoning, and there's no record of which data trained which model — so a tainted model couldn't be traced or remediated."
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
          "name": "05_data_governance_and_handling_ai_mcp.py",
          "url": "/audit-code/ai-audit/05_data_governance_and_handling_ai_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Artificial Intelligence (AI) evidence for \"Data governance and handling (AI)\" (the training/fine-tuning data governance (provenance, lineage, consent/licensing, quality) per model), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Data governance and handling (AI)\" control for Artificial Intelligence (AI) at AcmeCorp. THE TEST: Verify the data feeding AI is governed. PASS: training/fine-tuning data has documented provenance + lineage, is approved + classified + lawfully sourced (consent/licensing), is quality-checked, and is protected against poisoning (vetted sources, integrity); data-to-model lineage is maintained. Exceptions: training data with unknown provenance/licensing (unlicensed/scraped/PII), no data-poisoning protection, no consent for personal data used in training, and no data-to-model lineage (can't audit or remediate a tainted model). The evidence — The training/fine-tuning data governance (provenance, lineage, consent/licensing, quality) per model — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Data catalogue + lineage (training data) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Data catalogue + lineage (training data) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Data catalogue + lineage (training data); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Artificial Intelligence (AI): \"Data governance and handling (AI)\" Audit Evidence\n\nThe test:\nVerify the data feeding AI is governed. PASS: training/fine-tuning data has documented provenance + lineage, is approved + classified + lawfully sourced (consent/licensing), is quality-checked, and is protected against poisoning (vetted sources, integrity); data-to-model lineage is maintained. Exceptions: training data with unknown provenance/licensing (unlicensed/scraped/PII), no data-poisoning protection, no consent for personal data used in training, and no data-to-model lineage (can't audit or remediate a tainted model).\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- ai-audit_inventory.json   (in-scope items — The training/fine-tuning data governance (provenance, lineage, consent/licensing, quality) per model)\n- ai-audit_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
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
            "Deploy and operate the data governance and handling (ai) control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the data governance and handling (ai) control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for data governance and handling (ai) against comparable organisations in the sector",
            "Obtain evidence that the data governance and handling (ai) control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "aig-05-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Data governance and handling (AI)\" matter to the broader Artificial Intelligence (AI) posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Artificial Intelligence (AI)",
            "It stops mattering once a firewall and endpoint agent are deployed across the Artificial Intelligence (AI) estate",
            "It is a control other Artificial Intelligence (AI) controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Artificial Intelligence (AI) controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "aig-05-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Data governance and handling (AI)\" control?",
          "options": [
            "A point-in-time screenshot of one system's data governance and handling (ai) settings, captured during the walkthrough",
            "The The training/fine-tuning data governance (provenance, lineage, consent/licensing, quality) per model, reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the data governance and handling (ai) control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's data governance and handling (ai) capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "aig-05-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Data governance and handling (AI)\"?",
          "options": [
            "From Data catalogue + lineage (training data) and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how data governance and handling (ai) works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. Data catalogue + lineage (training data)) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "aig-05-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Data governance and handling (AI)\"?",
          "options": [
            "The external audit firm, since it is the party examining the data governance and handling (ai) control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the data governance and handling (ai) data is shared, so the accountability sits with no one in particular",
            "Data governance + AI/ML teams, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Data governance + AI/ML teams owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "aig-05-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Data governance and handling (AI)\", which part stays with the human auditor?",
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
          "id": "aig-05-q7",
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
          "id": "aig-05-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Data governance and handling (AI)\", which of these is a realistic reportable finding?",
          "options": [
            "A model was fine-tuned on scraped data of unknown licensing including personal data with no consent, training sources aren't vetted for poisoning, and there's no record of which data trained which model — so a tainted model couldn't be traced or remediated.",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. A model was fine-tuned on scraped data of unknown licensing including personal data with no consent, training sources aren't vetted for poisoning, and there's no record of which data trained which model — so a tainted model couldn't be traced or remediated. A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "aig-05-q9",
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
          "id": "aig-05-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Data governance and handling (AI)\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind data governance and handling (ai), so there is no overlap",
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
    "epochId": "ai-audit",
    "id": "aig-06",
    "order": 6,
    "title": "Data privacy and security (AI)",
    "subtitle": "Agentic technical & privacy audit of the data privacy and security (ai) control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 7,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Data privacy and security (AI)\" control for Artificial Intelligence (AI) is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify AI handles data privately + securely. PASS: PII is minimised/de-identified in training + inference; training data, model weights, and inference data (prompts/outputs) are encrypted + access-controlled; sensitive data doesn't leak (to logs, to external model endpoints); right-to-erasure is handled for data embedded in models; and data-leakage risks (membership inference, model inversion) are assessed. Exceptions: raw PII in training/inference, unprotected model weights, prompts/sensitive data sent to ungoverned external models or leaked to logs, no erasure handling, and unassessed model-leakage risk.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Artificial Intelligence (AI) systems of record (AI data-protection (de-identification, encryption, access); Inference / prompt logging + DLP; Model-weight protection) as tools — e.g. `PII minimisation/de-identification in training + inference + right-to-`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "Privacy controls for AI (PII minimisation in training/inference, de-identification, right-to-erasure handling for data in models)",
        "Protection of training data + the model itself (encryption, access control on the model/weights)",
        "Inference-data protection (prompts/inputs/outputs — esp. LLMs; no sensitive data leaking to logs or external models)",
        "Membership-inference / model-inversion / data-leakage risk assessment"
      ],
      "system": [
        "AI data-protection (de-identification, encryption, access)",
        "Inference / prompt logging + DLP",
        "Model-weight protection",
        "Privacy assessment for AI"
      ],
      "dataOwner": [
        "Privacy + AI security",
        "AI/ML teams",
        "Data protection"
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
      "tagline": "Auditing \"Data privacy and security (AI)\" as a repeatable agentic workflow: pull the real evidence (Privacy controls for AI (PII minimisation in training/inference, de-identification, right-to-erasure handling for data in models)) with read-only agents, run the test against policy, and issue a defensible opinion on the Artificial Intelligence (AI) control.",
      "year": 2025,
      "overview": [
        "The \"Data privacy and security (AI)\" sub-process is one of the controls an auditor must verify for Artificial Intelligence (AI). The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me privacy controls for AI (PII minimisation in training/inference, de-identification, right-to-erasure handling for data in models), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here AI data-protection (de-identification, encryption, access), Inference / prompt logging + DLP, Model-weight protection — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `PII minimisation/de-identification in training + inference + right-to-erasure fo` — read-only, against the systems of record.",
        "The test itself is specific. Verify AI handles data privately + securely. PASS: PII is minimised/de-identified in training + inference; training data, model weights, and inference data (prompts/outputs) are encrypted + access-controlled; sensitive data doesn't leak (to logs, to external model endpoints); right-to-erasure is handled for data embedded in models; and data-leakage risks (membership inference, model inversion) are assessed. Exceptions: raw PII in training/inference, unprotected model weights, prompts/sensitive data sent to ungoverned external models or leaked to logs, no erasure handling, and unassessed model-leakage risk. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `06_data_privacy_and_security_ai_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from AI data-protection (de-identification, encryption, access) and Inference / prompt logging + DLP (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
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
            "sub": "pull AI data-protection (de-identification, encryption, access) · Inference / prompt logging + DLP",
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
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "PII minimisation/de-identification in training + inference + right-to-erasure for data in models\nprotection of training data + model weights (encryption + access control)\ninference-data protection: prompts/outputs not leaking to logs or external models (DLP)\ndata-leakage risk: membership inference / model inversion assessment"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: Privacy controls for AI (PII minimisation in training/inference, de-identification, right-to-erasure handling for data in models).",
        "The test: Verify AI handles data privately + securely.",
        "Reconcile the systems of record (AI data-protection (de-identification, encryption, access), Inference / prompt logging + DLP, Model-weight protection) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. Customer PII is used raw in training, model weights sit in an open bucket, and an LLM feature sends full user prompts (including sensitive data) to a public model endpoint with prompt-logging on — multiple privacy exposures."
      ],
      "references": [
        {
          "title": "NIST AI RMF",
          "url": "https://www.nist.gov/itl/ai-risk-management-framework"
        },
        {
          "title": "OWASP LLM — Sensitive Information Disclosure",
          "url": "https://owasp.org/www-project-top-10-for-large-language-model-applications/"
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
          "description": "Runnable read-only MCP server: gathers the Artificial Intelligence (AI) evidence for \"Data privacy and security (AI)\" (privacy controls for ai (pii minimisation in training/inference, de-identification, right-to-erasure handling for data in models)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Data privacy and security (AI)\" control for Artificial Intelligence (AI) at AcmeCorp. THE TEST: Verify AI handles data privately + securely. PASS: PII is minimised/de-identified in training + inference; training data, model weights, and inference data (prompts/outputs) are encrypted + access-controlled; sensitive data doesn't leak (to logs, to external model endpoints); right-to-erasure is handled for data embedded in models; and data-leakage risks (membership inference, model inversion) are assessed. Exceptions: raw PII in training/inference, unprotected model weights, prompts/sensitive data sent to ungoverned external models or leaked to logs, no erasure handling, and unassessed model-leakage risk. The evidence — Privacy controls for AI (PII minimisation in training/inference, de-identification, right-to-erasure handling for data in models) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live AI data-protection (de-identification, encryption, access) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. AI data-protection (de-identification, encryption, access) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from AI data-protection (de-identification, encryption, access); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Artificial Intelligence (AI): \"Data privacy and security (AI)\" Audit Evidence\n\nThe test:\nVerify AI handles data privately + securely. PASS: PII is minimised/de-identified in training + inference; training data, model weights, and inference data (prompts/outputs) are encrypted + access-controlled; sensitive data doesn't leak (to logs, to external model endpoints); right-to-erasure is handled for data embedded in models; and data-leakage risks (membership inference, model inversion) are assessed. Exceptions: raw PII in training/inference, unprotected model weights, prompts/sensitive data sent to ungoverned external models or leaked to logs, no erasure handling, and unassessed model-leakage risk.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- ai-audit_inventory.json   (in-scope items — Privacy controls for AI (PII minimisation in training/inference, de-identification, right-to-erasure handling for data in models))\n- ai-audit_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
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
            "Deploy and operate the data privacy and security (ai) control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the data privacy and security (ai) control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for data privacy and security (ai) against comparable organisations in the sector",
            "Obtain evidence that the data privacy and security (ai) control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "aig-06-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Data privacy and security (AI)\" matter to the broader Artificial Intelligence (AI) posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Artificial Intelligence (AI)",
            "It stops mattering once a firewall and endpoint agent are deployed across the Artificial Intelligence (AI) estate",
            "It is a control other Artificial Intelligence (AI) controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Artificial Intelligence (AI) controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "aig-06-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Data privacy and security (AI)\" control?",
          "options": [
            "A point-in-time screenshot of one system's data privacy and security (ai) settings, captured during the walkthrough",
            "The Privacy controls for AI (PII minimisation in training/inference, de-identification, right-to-erasure handling for data in models), reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the data privacy and security (ai) control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's data privacy and security (ai) capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "aig-06-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Data privacy and security (AI)\"?",
          "options": [
            "From AI data-protection (de-identification, encryption, access) and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how data privacy and security (ai) works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. AI data-protection (de-identification, encryption, access)) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "aig-06-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Data privacy and security (AI)\"?",
          "options": [
            "The external audit firm, since it is the party examining the data privacy and security (ai) control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the data privacy and security (ai) data is shared, so the accountability sits with no one in particular",
            "Privacy + AI security, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Privacy + AI security owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "aig-06-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Data privacy and security (AI)\", which part stays with the human auditor?",
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
          "id": "aig-06-q7",
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
          "id": "aig-06-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Data privacy and security (AI)\", which of these is a realistic reportable finding?",
          "options": [
            "Customer PII is used raw in training, model weights sit in an open bucket, and an LLM feature sends full user prompts (including sensitive data) to a public model endpoint with prompt-logging on — multiple privacy exposures.",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. Customer PII is used raw in training, model weights sit in an open bucket, and an LLM feature sends full user prompts (including sensitive data) to a public model endpoint with prompt-logging on — multiple privacy exposures. A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "aig-06-q9",
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
          "id": "aig-06-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Data privacy and security (AI)\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind data privacy and security (ai), so there is no overlap",
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
    "epochId": "ai-audit",
    "id": "aig-07",
    "order": 7,
    "title": "AI infra and access security",
    "subtitle": "Agentic technical & privacy audit of the ai infra and access security control",
    "category": "cybersecurity",
    "xp": 180,
    "easeScore": 5,
    "valueScore": 9,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"AI infra and access security\" control for Artificial Intelligence (AI) is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify AI infrastructure + access are secured. PASS: AI compute, the ML platform, model registry, and data are access-controlled (least-privilege, SSO+MFA, network isolation, hardened); pipeline service identities are scoped + least-privilege; secrets (model-provider API keys, data creds) are vaulted; and model-serving/inference endpoints are authenticated + protected. Exceptions: broad/unrestricted access to models + training data, the ML platform exposed/unhardened, over-privileged pipeline service accounts, hardcoded model-provider API keys, and unauthenticated inference endpoints.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Artificial Intelligence (AI) systems of record (ML platform + compute (access / network / hardening); Model registry + storage; IAM (model / data access)) as tools — e.g. `access control to models + ML platform + training data (least-privileg`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The security of AI infrastructure (training/inference compute, model registry, ML platform, GPUs) — access control, network isolation, hardening",
        "Access control to models + the ML platform (who can train/deploy/access models + data; least-privilege; MFA/SSO)",
        "The non-human/service identities used by AI pipelines + their permissions",
        "Secrets handling in AI pipelines (API keys to model providers, data-source credentials)"
      ],
      "system": [
        "ML platform + compute (access / network / hardening)",
        "Model registry + storage",
        "IAM (model / data access)",
        "Secret vault (model API keys)"
      ],
      "dataOwner": [
        "AI security + cloud/platform security",
        "AI/ML engineering",
        "IAM"
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
      "tagline": "Auditing \"AI infra and access security\" as a repeatable agentic workflow: pull the real evidence (The security of AI infrastructure (training/inference compute, model registry, ML platform, GPUs) — access control, network isolation, hardening) with read-only agents, run the test against policy, and issue a defensible opinion on the Artificial Intelligence (AI) control.",
      "year": 2025,
      "overview": [
        "The \"AI infra and access security\" sub-process is one of the controls an auditor must verify for Artificial Intelligence (AI). The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the security of AI infrastructure (training/inference compute, model registry, ML platform, GPUs) — access control, network isolation, hardening, for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here ML platform + compute (access / network / hardening), Model registry + storage, IAM (model / data access) — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `access control to models + ML platform + training data (least-privilege, SSO/MFA` — read-only, against the systems of record.",
        "The test itself is specific. Verify AI infrastructure + access are secured. PASS: AI compute, the ML platform, model registry, and data are access-controlled (least-privilege, SSO+MFA, network isolation, hardened); pipeline service identities are scoped + least-privilege; secrets (model-provider API keys, data creds) are vaulted; and model-serving/inference endpoints are authenticated + protected. Exceptions: broad/unrestricted access to models + training data, the ML platform exposed/unhardened, over-privileged pipeline service accounts, hardcoded model-provider API keys, and unauthenticated inference endpoints. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `07_ai_infra_and_access_security_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from ML platform + compute (access / network / hardening) and Model registry + storage (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
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
            "sub": "pull ML platform + compute (access / network / hardening) · Model registry + storage",
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
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "access control to models + ML platform + training data (least-privilege, SSO/MFA, network isolation)\nAI-pipeline service identities + their permissions (scoped?)\nsecrets in AI pipelines: vaulted vs hardcoded (model-provider API keys, data creds)\ninference/serving endpoints: authenticated + protected?"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The security of AI infrastructure (training/inference compute, model registry, ML platform, GPUs) — access control, network isolation, hardening.",
        "The test: Verify AI infrastructure + access are secured.",
        "Reconcile the systems of record (ML platform + compute (access / network / hardening), Model registry + storage, IAM (model / data access)) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. Anyone in data science can access all models, weights, and training data; the inference API has no authentication; and the model-provider API key is hardcoded in a notebook in a shared repo."
      ],
      "references": [
        {
          "title": "NIST AI RMF",
          "url": "https://www.nist.gov/itl/ai-risk-management-framework"
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
          "name": "07_ai_infra_and_access_security_mcp.py",
          "url": "/audit-code/ai-audit/07_ai_infra_and_access_security_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Artificial Intelligence (AI) evidence for \"AI infra and access security\" (the security of ai infrastructure (training/inference compute, model registry, ml platform, gpus) — access control, network isolation, hardening), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"AI infra and access security\" control for Artificial Intelligence (AI) at AcmeCorp. THE TEST: Verify AI infrastructure + access are secured. PASS: AI compute, the ML platform, model registry, and data are access-controlled (least-privilege, SSO+MFA, network isolation, hardened); pipeline service identities are scoped + least-privilege; secrets (model-provider API keys, data creds) are vaulted; and model-serving/inference endpoints are authenticated + protected. Exceptions: broad/unrestricted access to models + training data, the ML platform exposed/unhardened, over-privileged pipeline service accounts, hardcoded model-provider API keys, and unauthenticated inference endpoints. The evidence — The security of AI infrastructure (training/inference compute, model registry, ML platform, GPUs) — access control, network isolation, hardening — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live ML platform + compute (access / network / hardening) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. ML platform + compute (access / network / hardening) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from ML platform + compute (access / network / hardening); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Artificial Intelligence (AI): \"AI infra and access security\" Audit Evidence\n\nThe test:\nVerify AI infrastructure + access are secured. PASS: AI compute, the ML platform, model registry, and data are access-controlled (least-privilege, SSO+MFA, network isolation, hardened); pipeline service identities are scoped + least-privilege; secrets (model-provider API keys, data creds) are vaulted; and model-serving/inference endpoints are authenticated + protected. Exceptions: broad/unrestricted access to models + training data, the ML platform exposed/unhardened, over-privileged pipeline service accounts, hardcoded model-provider API keys, and unauthenticated inference endpoints.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- ai-audit_inventory.json   (in-scope items — The security of AI infrastructure (training/inference compute, model registry, ML platform, GPUs) — access control, network isolation, hardening)\n- ai-audit_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
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
            "Deploy and operate the ai infra and access security control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the ai infra and access security control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for ai infra and access security against comparable organisations in the sector",
            "Obtain evidence that the ai infra and access security control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "aig-07-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"AI infra and access security\" matter to the broader Artificial Intelligence (AI) posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Artificial Intelligence (AI)",
            "It stops mattering once a firewall and endpoint agent are deployed across the Artificial Intelligence (AI) estate",
            "It is a control other Artificial Intelligence (AI) controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Artificial Intelligence (AI) controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "aig-07-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"AI infra and access security\" control?",
          "options": [
            "A point-in-time screenshot of one system's ai infra and access security settings, captured during the walkthrough",
            "The The security of AI infrastructure (training/inference compute, model registry, ML platform, GPUs) — access control, network isolation, hardening, reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the ai infra and access security control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's ai infra and access security capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "aig-07-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"AI infra and access security\"?",
          "options": [
            "From ML platform + compute (access / network / hardening) and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how ai infra and access security works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. ML platform + compute (access / network / hardening)) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "aig-07-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"AI infra and access security\"?",
          "options": [
            "The external audit firm, since it is the party examining the ai infra and access security control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the ai infra and access security data is shared, so the accountability sits with no one in particular",
            "AI security + cloud/platform security, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "AI security + cloud/platform security owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "aig-07-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"AI infra and access security\", which part stays with the human auditor?",
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
          "id": "aig-07-q7",
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
          "id": "aig-07-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"AI infra and access security\", which of these is a realistic reportable finding?",
          "options": [
            "Anyone in data science can access all models, weights, and training data; the inference API has no authentication; and the model-provider API key is hardcoded in a notebook in a shared repo.",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. Anyone in data science can access all models, weights, and training data; the inference API has no authentication; and the model-provider API key is hardcoded in a notebook in a shared repo. A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "aig-07-q9",
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
          "id": "aig-07-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"AI infra and access security\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind ai infra and access security, so there is no overlap",
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
    "epochId": "ai-audit",
    "id": "aig-08",
    "order": 8,
    "title": "Adversarial AI and threat defense",
    "subtitle": "Agentic technical & privacy audit of the adversarial ai and threat defense control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 4,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Adversarial AI and threat defense\" control for Artificial Intelligence (AI) is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify AI systems are defended against adversarial attacks. PASS: AI systems have an adversarial-threat assessment (MITRE ATLAS — evasion, poisoning, extraction, prompt injection, jailbreak); defenses are deployed (input validation, adversarial robustness, inference rate-limiting/anomaly detection, LLM guardrails/filters); AI red-teaming is performed; and adversarial activity is monitored. Exceptions: no adversarial-threat assessment, no defenses (an LLM with no prompt-injection guardrails; a model with no extraction protection), no AI red-teaming, and no monitoring for adversarial queries.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Artificial Intelligence (AI) systems of record (AI security tooling (guardrails, adversarial robustness, AI gateway/firewall); MITRE ATLAS (threat mapping); Inference monitoring / anomaly detection) as tools — e.g. `adversarial-threat assessment (MITRE ATLAS): evasion, poisoning, extra`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The adversarial-threat assessment per AI system (evasion, poisoning, model extraction/theft, prompt injection, jailbreak) mapped to MITRE ATLAS",
        "The defenses deployed (input validation, adversarial training, inference rate-limiting/anomaly detection, guardrails/filters for LLMs)",
        "Red-team / adversarial-testing evidence against the AI systems",
        "Monitoring for adversarial activity (anomalous queries, extraction patterns, jailbreak attempts)"
      ],
      "system": [
        "AI security tooling (guardrails, adversarial robustness, AI gateway/firewall)",
        "MITRE ATLAS (threat mapping)",
        "Inference monitoring / anomaly detection",
        "AI red-team"
      ],
      "dataOwner": [
        "AI security / AI red team",
        "AI/ML engineering",
        "Security operations"
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
      "tagline": "Auditing \"Adversarial AI and threat defense\" as a repeatable agentic workflow: pull the real evidence (The adversarial-threat assessment per AI system (evasion, poisoning, model extraction/theft, prompt injection, jailbreak) mapped to MITRE ATLAS) with read-only agents, run the test against policy, and issue a defensible opinion on the Artificial Intelligence (AI) control.",
      "year": 2025,
      "overview": [
        "The \"Adversarial AI and threat defense\" sub-process is one of the controls an auditor must verify for Artificial Intelligence (AI). The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the adversarial-threat assessment per AI system (evasion, poisoning, model extraction/theft, prompt injection, jailbreak) mapped to MITRE ATLAS, for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here AI security tooling (guardrails, adversarial robustness, AI gateway/firewall), MITRE ATLAS (threat mapping), Inference monitoring / anomaly detection — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `adversarial-threat assessment (MITRE ATLAS): evasion, poisoning, extraction, pro` — read-only, against the systems of record.",
        "The test itself is specific. Verify AI systems are defended against adversarial attacks. PASS: AI systems have an adversarial-threat assessment (MITRE ATLAS — evasion, poisoning, extraction, prompt injection, jailbreak); defenses are deployed (input validation, adversarial robustness, inference rate-limiting/anomaly detection, LLM guardrails/filters); AI red-teaming is performed; and adversarial activity is monitored. Exceptions: no adversarial-threat assessment, no defenses (an LLM with no prompt-injection guardrails; a model with no extraction protection), no AI red-teaming, and no monitoring for adversarial queries. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `08_adversarial_ai_and_threat_defense_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from AI security tooling (guardrails, adversarial robustness, AI gateway/firewall) and MITRE ATLAS (threat mapping) (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
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
            "sub": "pull AI security tooling (guardrails, adversarial robustness, AI gateway/firewall) · MITRE ATLAS (threat mapping)",
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
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "adversarial-threat assessment (MITRE ATLAS): evasion, poisoning, extraction, prompt injection, jailbreak\ndeployed defenses: input validation, adversarial robustness, inference rate-limiting/anomaly, LLM guardrails\nAI red-team / adversarial-testing evidence\nmonitoring for adversarial activity (extraction patterns, jailbreak attempts)"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The adversarial-threat assessment per AI system (evasion, poisoning, model extraction/theft, prompt injection, jailbreak) mapped to MITRE ATLAS.",
        "The test: Verify AI systems are defended against adversarial attacks.",
        "Reconcile the systems of record (AI security tooling (guardrails, adversarial robustness, AI gateway/firewall), MITRE ATLAS (threat mapping), Inference monitoring / anomaly detection) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. The customer-facing LLM has no prompt-injection or jailbreak guardrails (a tester extracted its system prompt and bypassed restrictions), there's no model-extraction rate-limiting, and no AI red-teaming has ever been done."
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
          "name": "08_adversarial_ai_and_threat_defense_mcp.py",
          "url": "/audit-code/ai-audit/08_adversarial_ai_and_threat_defense_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Artificial Intelligence (AI) evidence for \"Adversarial AI and threat defense\" (the adversarial-threat assessment per ai system (evasion, poisoning, model extraction/theft, prompt injection, jailbreak) mapped to mitre atlas), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Adversarial AI and threat defense\" control for Artificial Intelligence (AI) at AcmeCorp. THE TEST: Verify AI systems are defended against adversarial attacks. PASS: AI systems have an adversarial-threat assessment (MITRE ATLAS — evasion, poisoning, extraction, prompt injection, jailbreak); defenses are deployed (input validation, adversarial robustness, inference rate-limiting/anomaly detection, LLM guardrails/filters); AI red-teaming is performed; and adversarial activity is monitored. Exceptions: no adversarial-threat assessment, no defenses (an LLM with no prompt-injection guardrails; a model with no extraction protection), no AI red-teaming, and no monitoring for adversarial queries. The evidence — The adversarial-threat assessment per AI system (evasion, poisoning, model extraction/theft, prompt injection, jailbreak) mapped to MITRE ATLAS — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live AI security tooling (guardrails, adversarial robustness, AI gateway/firewall) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. AI security tooling (guardrails, adversarial robustness, AI gateway/firewall) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from AI security tooling (guardrails, adversarial robustness, AI gateway/firewall); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Artificial Intelligence (AI): \"Adversarial AI and threat defense\" Audit Evidence\n\nThe test:\nVerify AI systems are defended against adversarial attacks. PASS: AI systems have an adversarial-threat assessment (MITRE ATLAS — evasion, poisoning, extraction, prompt injection, jailbreak); defenses are deployed (input validation, adversarial robustness, inference rate-limiting/anomaly detection, LLM guardrails/filters); AI red-teaming is performed; and adversarial activity is monitored. Exceptions: no adversarial-threat assessment, no defenses (an LLM with no prompt-injection guardrails; a model with no extraction protection), no AI red-teaming, and no monitoring for adversarial queries.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- ai-audit_inventory.json   (in-scope items — The adversarial-threat assessment per AI system (evasion, poisoning, model extraction/theft, prompt injection, jailbreak) mapped to MITRE ATLAS)\n- ai-audit_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
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
            "Deploy and operate the adversarial ai and threat defense control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the adversarial ai and threat defense control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for adversarial ai and threat defense against comparable organisations in the sector",
            "Obtain evidence that the adversarial ai and threat defense control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "aig-08-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Adversarial AI and threat defense\" matter to the broader Artificial Intelligence (AI) posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Artificial Intelligence (AI)",
            "It stops mattering once a firewall and endpoint agent are deployed across the Artificial Intelligence (AI) estate",
            "It is a control other Artificial Intelligence (AI) controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Artificial Intelligence (AI) controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "aig-08-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Adversarial AI and threat defense\" control?",
          "options": [
            "A point-in-time screenshot of one system's adversarial ai and threat defense settings, captured during the walkthrough",
            "The The adversarial-threat assessment per AI system (evasion, poisoning, model extraction/theft, prompt injection, jailbreak) mapped to MITRE ATLAS, reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the adversarial ai and threat defense control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's adversarial ai and threat defense capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "aig-08-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Adversarial AI and threat defense\"?",
          "options": [
            "From AI security tooling (guardrails, adversarial robustness, AI gateway/firewall) and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how adversarial ai and threat defense works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. AI security tooling (guardrails, adversarial robustness, AI gateway/firewall)) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "aig-08-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Adversarial AI and threat defense\"?",
          "options": [
            "The external audit firm, since it is the party examining the adversarial ai and threat defense control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the adversarial ai and threat defense data is shared, so the accountability sits with no one in particular",
            "AI security / AI red team, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "AI security / AI red team owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "aig-08-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Adversarial AI and threat defense\", which part stays with the human auditor?",
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
          "id": "aig-08-q7",
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
          "id": "aig-08-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Adversarial AI and threat defense\", which of these is a realistic reportable finding?",
          "options": [
            "The customer-facing LLM has no prompt-injection or jailbreak guardrails (a tester extracted its system prompt and bypassed restrictions), there's no model-extraction rate-limiting, and no AI red-teaming has ever been done.",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. The customer-facing LLM has no prompt-injection or jailbreak guardrails (a tester extracted its system prompt and bypassed restrictions), there's no model-extraction rate-limiting, and no AI red-teaming has ever been done. A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "aig-08-q9",
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
          "id": "aig-08-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Adversarial AI and threat defense\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind adversarial ai and threat defense, so there is no overlap",
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
    "epochId": "ai-audit",
    "id": "aig-09",
    "order": 9,
    "title": "Incident management and reporting (AI)",
    "subtitle": "Agentic technical & privacy audit of the incident management and reporting (ai) control",
    "category": "cybersecurity",
    "xp": 160,
    "easeScore": 8,
    "valueScore": 8,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Incident management and reporting (AI)\" control for Artificial Intelligence (AI) is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify AI incidents are handled + reported. PASS: AI-specific incident playbooks exist (model failure, harmful/biased output, data leakage, adversarial attack); AI alerts feed the IR process + an incident register; incidents get RCA + remediation (rollback/retrain); and regulatory AI-incident reporting (EU AI Act serious-incident) is handled where applicable. Exceptions: no AI-specific incident playbooks, AI failures/harms not treated as incidents, no model rollback/retrain path, and missed regulatory AI-incident reporting.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Artificial Intelligence (AI) systems of record (IR playbooks (AI-specific) + SOAR; AI monitoring → IR + the AI incident register; Model rollback / retraining pipeline) as tools — e.g. `AI-specific incident playbooks (model failure / harmful output / data `, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "AI-specific incident playbooks (model failure/degradation, harmful/biased output, data leakage via the model, adversarial attack, hallucination causing harm)",
        "Integration of AI monitoring into the IR process + the AI incident register",
        "Evidence of response to past AI incidents (RCA, model rollback, retraining)",
        "Regulatory AI-incident reporting (EU AI Act serious-incident reporting for high-risk AI)"
      ],
      "system": [
        "IR playbooks (AI-specific) + SOAR",
        "AI monitoring → IR + the AI incident register",
        "Model rollback / retraining pipeline",
        "Regulatory reporting (EU AI Act)"
      ],
      "dataOwner": [
        "AI security + security operations / CSIRT",
        "Responsible-AI",
        "Legal (AI reporting)"
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
      "tagline": "Auditing \"Incident management and reporting (AI)\" as a repeatable agentic workflow: pull the real evidence (AI-specific incident playbooks (model failure/degradation, harmful/biased output, data leakage via the model, adversarial attack, hallucination causing harm)) with read-only agents, run the test against policy, and issue a defensible opinion on the Artificial Intelligence (AI) control.",
      "year": 2025,
      "overview": [
        "The \"Incident management and reporting (AI)\" sub-process is one of the controls an auditor must verify for Artificial Intelligence (AI). The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me aI-specific incident playbooks (model failure/degradation, harmful/biased output, data leakage via the model, adversarial attack, hallucination causing harm), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here IR playbooks (AI-specific) + SOAR, AI monitoring → IR + the AI incident register, Model rollback / retraining pipeline — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `AI-specific incident playbooks (model failure / harmful output / data leakage / ` — read-only, against the systems of record.",
        "The test itself is specific. Verify AI incidents are handled + reported. PASS: AI-specific incident playbooks exist (model failure, harmful/biased output, data leakage, adversarial attack); AI alerts feed the IR process + an incident register; incidents get RCA + remediation (rollback/retrain); and regulatory AI-incident reporting (EU AI Act serious-incident) is handled where applicable. Exceptions: no AI-specific incident playbooks, AI failures/harms not treated as incidents, no model rollback/retrain path, and missed regulatory AI-incident reporting. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `09_incident_management_and_reporting_ai_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from IR playbooks (AI-specific) + SOAR and AI monitoring → IR + the AI incident register (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
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
            "sub": "pull IR playbooks (AI-specific) + SOAR · AI monitoring → IR + the AI incident register",
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
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "AI-specific incident playbooks (model failure / harmful output / data leakage / adversarial)\nare AI alerts wired into the IR process + an AI incident register?\npast AI incidents: RCA + remediation (rollback / retrain)\nregulatory AI-incident reporting (EU AI Act serious-incident for high-risk)"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: AI-specific incident playbooks (model failure/degradation, harmful/biased output, data leakage via the model, adversarial attack, hallucination causing harm).",
        "The test: Verify AI incidents are handled + reported.",
        "Reconcile the systems of record (IR playbooks (AI-specific) + SOAR, AI monitoring → IR + the AI incident register, Model rollback / retraining pipeline) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. There are no AI-specific incident playbooks; when the model started producing biased, harmful outputs it wasn't treated as an incident, had no rollback path, and the EU-AI-Act serious-incident report (the system is high-risk) was never filed."
      ],
      "references": [
        {
          "title": "NIST AI RMF (Manage)",
          "url": "https://www.nist.gov/itl/ai-risk-management-framework"
        },
        {
          "title": "EU AI Act — Incident Reporting",
          "url": "https://artificialintelligenceact.eu/"
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
          "description": "Runnable read-only MCP server: gathers the Artificial Intelligence (AI) evidence for \"Incident management and reporting (AI)\" (ai-specific incident playbooks (model failure/degradation, harmful/biased output, data leakage via the model, adversarial attack, hallucination causing harm)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Incident management and reporting (AI)\" control for Artificial Intelligence (AI) at AcmeCorp. THE TEST: Verify AI incidents are handled + reported. PASS: AI-specific incident playbooks exist (model failure, harmful/biased output, data leakage, adversarial attack); AI alerts feed the IR process + an incident register; incidents get RCA + remediation (rollback/retrain); and regulatory AI-incident reporting (EU AI Act serious-incident) is handled where applicable. Exceptions: no AI-specific incident playbooks, AI failures/harms not treated as incidents, no model rollback/retrain path, and missed regulatory AI-incident reporting. The evidence — AI-specific incident playbooks (model failure/degradation, harmful/biased output, data leakage via the model, adversarial attack, hallucination causing harm) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live IR playbooks (AI-specific) + SOAR APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. IR playbooks (AI-specific) + SOAR gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from IR playbooks (AI-specific) + SOAR; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Artificial Intelligence (AI): \"Incident management and reporting (AI)\" Audit Evidence\n\nThe test:\nVerify AI incidents are handled + reported. PASS: AI-specific incident playbooks exist (model failure, harmful/biased output, data leakage, adversarial attack); AI alerts feed the IR process + an incident register; incidents get RCA + remediation (rollback/retrain); and regulatory AI-incident reporting (EU AI Act serious-incident) is handled where applicable. Exceptions: no AI-specific incident playbooks, AI failures/harms not treated as incidents, no model rollback/retrain path, and missed regulatory AI-incident reporting.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- ai-audit_inventory.json   (in-scope items — AI-specific incident playbooks (model failure/degradation, harmful/biased output, data leakage via the model, adversarial attack, hallucination causing harm))\n- ai-audit_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
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
            "Deploy and operate the incident management and reporting (ai) control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the incident management and reporting (ai) control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for incident management and reporting (ai) against comparable organisations in the sector",
            "Obtain evidence that the incident management and reporting (ai) control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "aig-09-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Incident management and reporting (AI)\" matter to the broader Artificial Intelligence (AI) posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Artificial Intelligence (AI)",
            "It stops mattering once a firewall and endpoint agent are deployed across the Artificial Intelligence (AI) estate",
            "It is a control other Artificial Intelligence (AI) controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Artificial Intelligence (AI) controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "aig-09-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Incident management and reporting (AI)\" control?",
          "options": [
            "A point-in-time screenshot of one system's incident management and reporting (ai) settings, captured during the walkthrough",
            "The AI-specific incident playbooks (model failure/degradation, harmful/biased output, data leakage via the model, adversarial attack, hallucination causing harm), reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the incident management and reporting (ai) control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's incident management and reporting (ai) capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "aig-09-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Incident management and reporting (AI)\"?",
          "options": [
            "From IR playbooks (AI-specific) + SOAR and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how incident management and reporting (ai) works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. IR playbooks (AI-specific) + SOAR) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "aig-09-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Incident management and reporting (AI)\"?",
          "options": [
            "The external audit firm, since it is the party examining the incident management and reporting (ai) control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the incident management and reporting (ai) data is shared, so the accountability sits with no one in particular",
            "AI security + security operations / CSIRT, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "AI security + security operations / CSIRT owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "aig-09-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Incident management and reporting (AI)\", which part stays with the human auditor?",
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
          "id": "aig-09-q7",
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
          "id": "aig-09-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Incident management and reporting (AI)\", which of these is a realistic reportable finding?",
          "options": [
            "There are no AI-specific incident playbooks; when the model started producing biased, harmful outputs it wasn't treated as an incident, had no rollback path, and the EU-AI-Act serious-incident report (the system is high-risk) was never filed.",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. There are no AI-specific incident playbooks; when the model started producing biased, harmful outputs it wasn't treated as an incident, had no rollback path, and the EU-AI-Act serious-incident report (the system is high-risk) was never filed. A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "aig-09-q9",
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
          "id": "aig-09-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Incident management and reporting (AI)\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind incident management and reporting (ai), so there is no overlap",
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
    "epochId": "ai-audit",
    "id": "aig-10",
    "order": 10,
    "title": "Operational monitoring (AI)",
    "subtitle": "Agentic technical & privacy audit of the operational monitoring (ai) control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 6,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Operational monitoring (AI)\" control for Artificial Intelligence (AI) is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify deployed AI is monitored in production. PASS: production AI is monitored for model + data drift, performance degradation, output quality, and fairness-over-time; drift/degradation triggers retraining or rollback; LLM output safety (toxicity/hallucination/guardrail-bypass) is monitored; and a human-in-the-loop/feedback mechanism maintains oversight. Exceptions: deployed models with no drift/performance monitoring (silent degradation), no retraining/rollback trigger, no output-safety monitoring for LLMs, and no human oversight of production AI behaviour.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Artificial Intelligence (AI) systems of record (Model monitoring (Arize / Fiddler / WhyLabs / Evidently); Drift + performance + fairness monitoring; LLM output-safety monitoring) as tools — e.g. `production monitoring: model/data drift, performance degradation, outp`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The production monitoring of AI systems (model/data drift, performance degradation, output quality, fairness over time)",
        "Drift detection + the retraining/rollback trigger (when drift/degradation exceeds threshold)",
        "Monitoring of LLM/AI output quality + safety in production (toxicity, hallucination, guardrail-bypass rate)",
        "The human-in-the-loop / feedback mechanism for ongoing oversight"
      ],
      "system": [
        "Model monitoring (Arize / Fiddler / WhyLabs / Evidently)",
        "Drift + performance + fairness monitoring",
        "LLM output-safety monitoring",
        "Feedback / human-in-the-loop"
      ],
      "dataOwner": [
        "MLOps + AI security",
        "Model owners + Responsible-AI",
        "Operations"
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
      "tagline": "Auditing \"Operational monitoring (AI)\" as a repeatable agentic workflow: pull the real evidence (The production monitoring of AI systems (model/data drift, performance degradation, output quality, fairness over time)) with read-only agents, run the test against policy, and issue a defensible opinion on the Artificial Intelligence (AI) control.",
      "year": 2025,
      "overview": [
        "The \"Operational monitoring (AI)\" sub-process is one of the controls an auditor must verify for Artificial Intelligence (AI). The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the production monitoring of AI systems (model/data drift, performance degradation, output quality, fairness over time), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Model monitoring (Arize / Fiddler / WhyLabs / Evidently), Drift + performance + fairness monitoring, LLM output-safety monitoring — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `production monitoring: model/data drift, performance degradation, output quality` — read-only, against the systems of record.",
        "The test itself is specific. Verify deployed AI is monitored in production. PASS: production AI is monitored for model + data drift, performance degradation, output quality, and fairness-over-time; drift/degradation triggers retraining or rollback; LLM output safety (toxicity/hallucination/guardrail-bypass) is monitored; and a human-in-the-loop/feedback mechanism maintains oversight. Exceptions: deployed models with no drift/performance monitoring (silent degradation), no retraining/rollback trigger, no output-safety monitoring for LLMs, and no human oversight of production AI behaviour. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `10_operational_monitoring_ai_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Model monitoring (Arize / Fiddler / WhyLabs / Evidently) and Drift + performance + fairness monitoring (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
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
            "sub": "pull Model monitoring (Arize / Fiddler / WhyLabs / Evidently) · Drift + performance + fairness monitoring",
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
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "production monitoring: model/data drift, performance degradation, output quality, fairness over time\ndrift/degradation thresholds → retraining/rollback trigger\nLLM output-safety monitoring (toxicity, hallucination, guardrail-bypass rate)\nhuman-in-the-loop / feedback mechanism for ongoing oversight"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The production monitoring of AI systems (model/data drift, performance degradation, output quality, fairness over time).",
        "The test: Verify deployed AI is monitored in production.",
        "Reconcile the systems of record (Model monitoring (Arize / Fiddler / WhyLabs / Evidently), Drift + performance + fairness monitoring, LLM output-safety monitoring) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. Deployed models have no drift or performance monitoring, so a model silently degraded for months as the data shifted; there's no retraining trigger, and the LLM's guardrail-bypass and hallucination rates in production are unmeasured."
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
          "name": "10_operational_monitoring_ai_mcp.py",
          "url": "/audit-code/ai-audit/10_operational_monitoring_ai_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Artificial Intelligence (AI) evidence for \"Operational monitoring (AI)\" (the production monitoring of ai systems (model/data drift, performance degradation, output quality, fairness over time)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Operational monitoring (AI)\" control for Artificial Intelligence (AI) at AcmeCorp. THE TEST: Verify deployed AI is monitored in production. PASS: production AI is monitored for model + data drift, performance degradation, output quality, and fairness-over-time; drift/degradation triggers retraining or rollback; LLM output safety (toxicity/hallucination/guardrail-bypass) is monitored; and a human-in-the-loop/feedback mechanism maintains oversight. Exceptions: deployed models with no drift/performance monitoring (silent degradation), no retraining/rollback trigger, no output-safety monitoring for LLMs, and no human oversight of production AI behaviour. The evidence — The production monitoring of AI systems (model/data drift, performance degradation, output quality, fairness over time) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Model monitoring (Arize / Fiddler / WhyLabs / Evidently) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Model monitoring (Arize / Fiddler / WhyLabs / Evidently) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Model monitoring (Arize / Fiddler / WhyLabs / Evidently); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Artificial Intelligence (AI): \"Operational monitoring (AI)\" Audit Evidence\n\nThe test:\nVerify deployed AI is monitored in production. PASS: production AI is monitored for model + data drift, performance degradation, output quality, and fairness-over-time; drift/degradation triggers retraining or rollback; LLM output safety (toxicity/hallucination/guardrail-bypass) is monitored; and a human-in-the-loop/feedback mechanism maintains oversight. Exceptions: deployed models with no drift/performance monitoring (silent degradation), no retraining/rollback trigger, no output-safety monitoring for LLMs, and no human oversight of production AI behaviour.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- ai-audit_inventory.json   (in-scope items — The production monitoring of AI systems (model/data drift, performance degradation, output quality, fairness over time))\n- ai-audit_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
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
            "Deploy and operate the operational monitoring (ai) control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the operational monitoring (ai) control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for operational monitoring (ai) against comparable organisations in the sector",
            "Obtain evidence that the operational monitoring (ai) control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "aig-10-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Operational monitoring (AI)\" matter to the broader Artificial Intelligence (AI) posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Artificial Intelligence (AI)",
            "It stops mattering once a firewall and endpoint agent are deployed across the Artificial Intelligence (AI) estate",
            "It is a control other Artificial Intelligence (AI) controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Artificial Intelligence (AI) controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "aig-10-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Operational monitoring (AI)\" control?",
          "options": [
            "A point-in-time screenshot of one system's operational monitoring (ai) settings, captured during the walkthrough",
            "The The production monitoring of AI systems (model/data drift, performance degradation, output quality, fairness over time), reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the operational monitoring (ai) control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's operational monitoring (ai) capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "aig-10-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Operational monitoring (AI)\"?",
          "options": [
            "From Model monitoring (Arize / Fiddler / WhyLabs / Evidently) and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how operational monitoring (ai) works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. Model monitoring (Arize / Fiddler / WhyLabs / Evidently)) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "aig-10-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Operational monitoring (AI)\"?",
          "options": [
            "The external audit firm, since it is the party examining the operational monitoring (ai) control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the operational monitoring (ai) data is shared, so the accountability sits with no one in particular",
            "MLOps + AI security, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "MLOps + AI security owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "aig-10-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Operational monitoring (AI)\", which part stays with the human auditor?",
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
          "id": "aig-10-q7",
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
          "id": "aig-10-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Operational monitoring (AI)\", which of these is a realistic reportable finding?",
          "options": [
            "Deployed models have no drift or performance monitoring, so a model silently degraded for months as the data shifted; there's no retraining trigger, and the LLM's guardrail-bypass and hallucination rates in production are unmeasured.",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. Deployed models have no drift or performance monitoring, so a model silently degraded for months as the data shifted; there's no retraining trigger, and the LLM's guardrail-bypass and hallucination rates in production are unmeasured. A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "aig-10-q9",
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
          "id": "aig-10-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Operational monitoring (AI)\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind operational monitoring (ai), so there is no overlap",
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

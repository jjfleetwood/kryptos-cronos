import type { EpochConfig, StageConfig } from "../types";

export const secureSdlcEpoch: EpochConfig = {
  "id": "secure-sdlc",
  "name": "Secure Software Development",
  "subtitle": "Agentic technical & privacy audit — Secure Software Development",
  "description": "Audit Secure Software Development end to end with a read-only agent fleet: each sub-process is a module that teaches the control as a repeatable agentic workflow with downloadable MCP tooling, a CTF, and a 10-question quiz.",
  "emoji": "🛡️",
  "color": "Emerald",
  "unlocked": true
};

export const secureSdlcStages: StageConfig[] = [
  {
    "epochId": "secure-sdlc",
    "id": "ssd-01",
    "order": 1,
    "title": "Security requirements and design (CSDL)",
    "subtitle": "Agentic technical & privacy audit of the security requirements and design (csdl) control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 5,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Security requirements and design (CSDL)\" control for Secure Software Development is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the Secure Software Development policy/standard and flag every item where the \"Security requirements and design (CSDL)\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Secure Software Development systems of record (SAST / DAST / SCA tooling; Issue tracker (Jira); CI security gates) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the security requirements and design (csdl) control (from SAST / DAST / SCA tooling)",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "SAST / DAST / SCA tooling",
        "Issue tracker (Jira)",
        "CI security gates",
        "Threat-model + design records"
      ],
      "dataOwner": [
        "Product engineering",
        "AppSec / Security champions",
        "QA",
        "Engineering leadership"
      ],
      "scoring": {
        "ease": "EASE 5/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Secure Software Development controls."
      }
    },
    "badge": {
      "id": "ssd-01-badge",
      "name": "Secure Software Development Auditor",
      "emoji": "🛡️"
    },
    "wonder": {
      "name": "Security requirements and design (CSDL)",
      "location": "Secure Software Development",
      "era": "Present Day",
      "emoji": "🛡️"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Security requirements and design (CSDL)\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the security requirements and design (csdl) control (from SAST / DAST / SCA tooling)) with read-only agents, run the test against policy, and issue a defensible opinion on the Secure Software Development control.",
      "year": 2025,
      "overview": [
        "The \"Security requirements and design (CSDL)\" sub-process is one of the controls an auditor must verify for Secure Software Development. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the security requirements and design (csdl) control (from SAST / DAST / SCA tooling), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here SAST / DAST / SCA tooling, Issue tracker (Jira), CI security gates — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the Secure Software Development policy/standard and flag every item where the \"Security requirements and design (CSDL)\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `01_security_requirements_and_design_csdl_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from SAST / DAST / SCA tooling and Issue tracker (Jira) (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 01_security_requirements_and_design_csdl_mcp.py` to expose it to your agent — or `python 01_security_requirements_and_design_csdl_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Insecure design ships to production",
        "when": "Recurring",
        "where": "Software delivery lifecycles",
        "impact": "A class of vulnerability that a secure-SDLC gate is meant to stop reaches production because the gate was advisory, not enforced.",
        "body": [
          "When security testing is bolted on at the end — or is non-blocking — known-bad patterns ship anyway. Insecure design and unvalidated third-party code are the recurring root causes.",
          "The audit confirms security is built into requirements, design, coding standards, and enforced gates across the lifecycle, with evidence at each stage."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Secure Software Development scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull SAST / DAST / SCA tooling · Issue tracker (Jira)",
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
          "year": 2021,
          "event": "Log4Shell: a dependency flaw becomes everyone's incident",
          "highlight": true
        },
        {
          "year": 2021,
          "event": "OWASP Top 10 adds A04 Insecure Design + A06 Vulnerable Components"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Security requirements and design (CSDL)\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the security requirements and design (csdl) control (from SAST / DAST / SCA tooling).",
        "The test: Reconcile the in-scope inventory against the Secure Software Development policy/standard and flag every item where the \"Security requirements and design (CSDL)\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (SAST / DAST / SCA tooling, Issue tracker (Jira), CI security gates) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the security requirements and design (csdl) control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "NIST SSDF — SP 800-218",
          "url": "https://csrc.nist.gov/pubs/sp/800/218/final"
        },
        {
          "title": "OWASP SAMM",
          "url": "https://owaspsamm.org/"
        },
        {
          "title": "BSIMM",
          "url": "https://www.bsimm.com/"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "01_security_requirements_and_design_csdl_mcp.py",
          "url": "/audit-code/secure-sdlc/01_security_requirements_and_design_csdl_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Secure Software Development evidence for \"Security requirements and design (CSDL)\" (in-scope inventory for the security requirements and design (csdl) control (from sast / dast / sca tooling)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Security requirements and design (CSDL)\" control for Secure Software Development at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the Secure Software Development policy/standard and flag every item where the \"Security requirements and design (CSDL)\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the security requirements and design (csdl) control (from SAST / DAST / SCA tooling) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live SAST / DAST / SCA tooling APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. SAST / DAST / SCA tooling gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from SAST / DAST / SCA tooling; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Secure Software Development: \"Security requirements and design (CSDL)\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the Secure Software Development policy/standard and flag every item where the \"Security requirements and design (CSDL)\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- secure-sdlc_inventory.json   (in-scope items — In-scope inventory for the security requirements and design (csdl) control (from SAST / DAST / SCA tooling))\n- secure-sdlc_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Security requirements and design (CSDL)\",\n  \"domain\": \"Secure Software Development\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{ssd_",
        "/evidence/secure-sdlc_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Product engineering\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Security requirements and design (CSDL)\" control must cover\n# fragment: security_requirements_design_",
        "/evidence/secure-sdlc_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "secure-sdlc_inventory.json",
            "isDir": false
          },
          {
            "name": "secure-sdlc_state.json",
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
          "value": "FLAG{ssd_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/secure-sdlc_inventory.json",
          "value": "security_requirements_design_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/secure-sdlc_state.json",
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
          "id": "ssd-01-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Security requirements and design (CSDL)\" sub-process of Secure Software Development?",
          "options": [
            "Deploy and operate the security requirements and design (csdl) control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the security requirements and design (csdl) control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for security requirements and design (csdl) against comparable organisations in the sector",
            "Obtain evidence that the security requirements and design (csdl) control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "ssd-01-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Security requirements and design (CSDL)\" matter to the broader Secure Software Development posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Secure Software Development",
            "It stops mattering once a firewall and endpoint agent are deployed across the Secure Software Development estate",
            "It is a control other Secure Software Development controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Secure Software Development controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "ssd-01-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Security requirements and design (CSDL)\" control?",
          "options": [
            "A point-in-time screenshot of one system's security requirements and design (csdl) settings, captured during the walkthrough",
            "The In-scope inventory for the security requirements and design (csdl) control (from SAST / DAST / SCA tooling), reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the security requirements and design (csdl) control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's security requirements and design (csdl) capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "ssd-01-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Security requirements and design (CSDL)\"?",
          "options": [
            "From SAST / DAST / SCA tooling and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how security requirements and design (csdl) works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. SAST / DAST / SCA tooling) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "ssd-01-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Security requirements and design (CSDL)\"?",
          "options": [
            "The external audit firm, since it is the party examining the security requirements and design (csdl) control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the security requirements and design (csdl) data is shared, so the accountability sits with no one in particular",
            "Product engineering, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Product engineering owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "ssd-01-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Security requirements and design (CSDL)\", which part stays with the human auditor?",
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
          "id": "ssd-01-q7",
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
          "id": "ssd-01-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Security requirements and design (CSDL)\", which of these is a realistic reportable finding?",
          "options": [
            "In-scope items where the security requirements and design (csdl) control is not applied, mis-scoped, or has drifted from the approved baseline",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the security requirements and design (csdl) control is not applied, mis-scoped, or has drifted from the approved baseline A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "ssd-01-q9",
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
          "id": "ssd-01-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Security requirements and design (CSDL)\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind security requirements and design (csdl), so there is no overlap",
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
    "epochId": "secure-sdlc",
    "id": "ssd-02",
    "order": 2,
    "title": "Secure coding standards (OWASP)",
    "subtitle": "Agentic technical & privacy audit of the secure coding standards (owasp) control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 6,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Secure coding standards (OWASP)\" control for Secure Software Development is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the Secure Software Development policy/standard and flag every item where the \"Secure coding standards (OWASP)\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Secure Software Development systems of record (SAST / DAST / SCA tooling; Issue tracker (Jira); CI security gates) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the secure coding standards (owasp) control (from SAST / DAST / SCA tooling)",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "SAST / DAST / SCA tooling",
        "Issue tracker (Jira)",
        "CI security gates",
        "Threat-model + design records"
      ],
      "dataOwner": [
        "Product engineering",
        "AppSec / Security champions",
        "QA",
        "Engineering leadership"
      ],
      "scoring": {
        "ease": "EASE 6/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Secure Software Development controls."
      }
    },
    "badge": {
      "id": "ssd-02-badge",
      "name": "Secure Software Development Auditor",
      "emoji": "🛡️"
    },
    "wonder": {
      "name": "Secure coding standards (OWASP)",
      "location": "Secure Software Development",
      "era": "Present Day",
      "emoji": "🛡️"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Secure coding standards (OWASP)\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the secure coding standards (owasp) control (from SAST / DAST / SCA tooling)) with read-only agents, run the test against policy, and issue a defensible opinion on the Secure Software Development control.",
      "year": 2025,
      "overview": [
        "The \"Secure coding standards (OWASP)\" sub-process is one of the controls an auditor must verify for Secure Software Development. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the secure coding standards (owasp) control (from SAST / DAST / SCA tooling), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here SAST / DAST / SCA tooling, Issue tracker (Jira), CI security gates — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the Secure Software Development policy/standard and flag every item where the \"Secure coding standards (OWASP)\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `02_secure_coding_standards_owasp_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from SAST / DAST / SCA tooling and Issue tracker (Jira) (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 02_secure_coding_standards_owasp_mcp.py` to expose it to your agent — or `python 02_secure_coding_standards_owasp_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Insecure design ships to production",
        "when": "Recurring",
        "where": "Software delivery lifecycles",
        "impact": "A class of vulnerability that a secure-SDLC gate is meant to stop reaches production because the gate was advisory, not enforced.",
        "body": [
          "When security testing is bolted on at the end — or is non-blocking — known-bad patterns ship anyway. Insecure design and unvalidated third-party code are the recurring root causes.",
          "The audit confirms security is built into requirements, design, coding standards, and enforced gates across the lifecycle, with evidence at each stage."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Secure Software Development scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull SAST / DAST / SCA tooling · Issue tracker (Jira)",
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
          "year": 2021,
          "event": "Log4Shell: a dependency flaw becomes everyone's incident",
          "highlight": true
        },
        {
          "year": 2021,
          "event": "OWASP Top 10 adds A04 Insecure Design + A06 Vulnerable Components"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Secure coding standards (OWASP)\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the secure coding standards (owasp) control (from SAST / DAST / SCA tooling).",
        "The test: Reconcile the in-scope inventory against the Secure Software Development policy/standard and flag every item where the \"Secure coding standards (OWASP)\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (SAST / DAST / SCA tooling, Issue tracker (Jira), CI security gates) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the secure coding standards (owasp) control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "NIST SSDF — SP 800-218",
          "url": "https://csrc.nist.gov/pubs/sp/800/218/final"
        },
        {
          "title": "OWASP SAMM",
          "url": "https://owaspsamm.org/"
        },
        {
          "title": "BSIMM",
          "url": "https://www.bsimm.com/"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "02_secure_coding_standards_owasp_mcp.py",
          "url": "/audit-code/secure-sdlc/02_secure_coding_standards_owasp_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Secure Software Development evidence for \"Secure coding standards (OWASP)\" (in-scope inventory for the secure coding standards (owasp) control (from sast / dast / sca tooling)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Secure coding standards (OWASP)\" control for Secure Software Development at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the Secure Software Development policy/standard and flag every item where the \"Secure coding standards (OWASP)\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the secure coding standards (owasp) control (from SAST / DAST / SCA tooling) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live SAST / DAST / SCA tooling APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. SAST / DAST / SCA tooling gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from SAST / DAST / SCA tooling; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Secure Software Development: \"Secure coding standards (OWASP)\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the Secure Software Development policy/standard and flag every item where the \"Secure coding standards (OWASP)\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- secure-sdlc_inventory.json   (in-scope items — In-scope inventory for the secure coding standards (owasp) control (from SAST / DAST / SCA tooling))\n- secure-sdlc_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Secure coding standards (OWASP)\",\n  \"domain\": \"Secure Software Development\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{ssd_",
        "/evidence/secure-sdlc_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Product engineering\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Secure coding standards (OWASP)\" control must cover\n# fragment: secure_coding_standards_",
        "/evidence/secure-sdlc_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "secure-sdlc_inventory.json",
            "isDir": false
          },
          {
            "name": "secure-sdlc_state.json",
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
          "value": "FLAG{ssd_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/secure-sdlc_inventory.json",
          "value": "secure_coding_standards_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/secure-sdlc_state.json",
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
          "id": "ssd-02-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Secure coding standards (OWASP)\" sub-process of Secure Software Development?",
          "options": [
            "Deploy and operate the secure coding standards (owasp) control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the secure coding standards (owasp) control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for secure coding standards (owasp) against comparable organisations in the sector",
            "Obtain evidence that the secure coding standards (owasp) control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "ssd-02-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Secure coding standards (OWASP)\" matter to the broader Secure Software Development posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Secure Software Development",
            "It stops mattering once a firewall and endpoint agent are deployed across the Secure Software Development estate",
            "It is a control other Secure Software Development controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Secure Software Development controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "ssd-02-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Secure coding standards (OWASP)\" control?",
          "options": [
            "A point-in-time screenshot of one system's secure coding standards (owasp) settings, captured during the walkthrough",
            "The In-scope inventory for the secure coding standards (owasp) control (from SAST / DAST / SCA tooling), reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the secure coding standards (owasp) control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's secure coding standards (owasp) capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "ssd-02-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Secure coding standards (OWASP)\"?",
          "options": [
            "From SAST / DAST / SCA tooling and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how secure coding standards (owasp) works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. SAST / DAST / SCA tooling) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "ssd-02-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Secure coding standards (OWASP)\"?",
          "options": [
            "The external audit firm, since it is the party examining the secure coding standards (owasp) control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the secure coding standards (owasp) data is shared, so the accountability sits with no one in particular",
            "Product engineering, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Product engineering owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "ssd-02-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Secure coding standards (OWASP)\", which part stays with the human auditor?",
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
          "id": "ssd-02-q7",
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
          "id": "ssd-02-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Secure coding standards (OWASP)\", which of these is a realistic reportable finding?",
          "options": [
            "In-scope items where the secure coding standards (owasp) control is not applied, mis-scoped, or has drifted from the approved baseline",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the secure coding standards (owasp) control is not applied, mis-scoped, or has drifted from the approved baseline A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "ssd-02-q9",
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
          "id": "ssd-02-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Secure coding standards (OWASP)\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind secure coding standards (owasp), so there is no overlap",
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
    "epochId": "secure-sdlc",
    "id": "ssd-03",
    "order": 3,
    "title": "SAST, DAST, penetration testing",
    "subtitle": "Agentic technical & privacy audit of the sast, dast, penetration testing control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 7,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"SAST, DAST, penetration testing\" control for Secure Software Development is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the Secure Software Development policy/standard and flag every item where the \"SAST, DAST, penetration testing\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Secure Software Development systems of record (SAST / DAST / SCA tooling; Issue tracker (Jira); CI security gates) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the sast, dast, penetration testing control (from SAST / DAST / SCA tooling)",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "SAST / DAST / SCA tooling",
        "Issue tracker (Jira)",
        "CI security gates",
        "Threat-model + design records"
      ],
      "dataOwner": [
        "Product engineering",
        "AppSec / Security champions",
        "QA",
        "Engineering leadership"
      ],
      "scoring": {
        "ease": "EASE 7/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Secure Software Development controls."
      }
    },
    "badge": {
      "id": "ssd-03-badge",
      "name": "Secure Software Development Auditor",
      "emoji": "🛡️"
    },
    "wonder": {
      "name": "SAST, DAST, penetration testing",
      "location": "Secure Software Development",
      "era": "Present Day",
      "emoji": "🛡️"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"SAST, DAST, penetration testing\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the sast, dast, penetration testing control (from SAST / DAST / SCA tooling)) with read-only agents, run the test against policy, and issue a defensible opinion on the Secure Software Development control.",
      "year": 2025,
      "overview": [
        "The \"SAST, DAST, penetration testing\" sub-process is one of the controls an auditor must verify for Secure Software Development. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the sast, dast, penetration testing control (from SAST / DAST / SCA tooling), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here SAST / DAST / SCA tooling, Issue tracker (Jira), CI security gates — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the Secure Software Development policy/standard and flag every item where the \"SAST, DAST, penetration testing\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `03_sast_dast_penetration_testing_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from SAST / DAST / SCA tooling and Issue tracker (Jira) (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 03_sast_dast_penetration_testing_mcp.py` to expose it to your agent — or `python 03_sast_dast_penetration_testing_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Insecure design ships to production",
        "when": "Recurring",
        "where": "Software delivery lifecycles",
        "impact": "A class of vulnerability that a secure-SDLC gate is meant to stop reaches production because the gate was advisory, not enforced.",
        "body": [
          "When security testing is bolted on at the end — or is non-blocking — known-bad patterns ship anyway. Insecure design and unvalidated third-party code are the recurring root causes.",
          "The audit confirms security is built into requirements, design, coding standards, and enforced gates across the lifecycle, with evidence at each stage."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Secure Software Development scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull SAST / DAST / SCA tooling · Issue tracker (Jira)",
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
          "year": 2021,
          "event": "Log4Shell: a dependency flaw becomes everyone's incident",
          "highlight": true
        },
        {
          "year": 2021,
          "event": "OWASP Top 10 adds A04 Insecure Design + A06 Vulnerable Components"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"SAST, DAST, penetration testing\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the sast, dast, penetration testing control (from SAST / DAST / SCA tooling).",
        "The test: Reconcile the in-scope inventory against the Secure Software Development policy/standard and flag every item where the \"SAST, DAST, penetration testing\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (SAST / DAST / SCA tooling, Issue tracker (Jira), CI security gates) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the sast, dast, penetration testing control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "NIST SSDF — SP 800-218",
          "url": "https://csrc.nist.gov/pubs/sp/800/218/final"
        },
        {
          "title": "OWASP SAMM",
          "url": "https://owaspsamm.org/"
        },
        {
          "title": "BSIMM",
          "url": "https://www.bsimm.com/"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "03_sast_dast_penetration_testing_mcp.py",
          "url": "/audit-code/secure-sdlc/03_sast_dast_penetration_testing_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Secure Software Development evidence for \"SAST, DAST, penetration testing\" (in-scope inventory for the sast, dast, penetration testing control (from sast / dast / sca tooling)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"SAST, DAST, penetration testing\" control for Secure Software Development at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the Secure Software Development policy/standard and flag every item where the \"SAST, DAST, penetration testing\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the sast, dast, penetration testing control (from SAST / DAST / SCA tooling) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live SAST / DAST / SCA tooling APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. SAST / DAST / SCA tooling gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from SAST / DAST / SCA tooling; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Secure Software Development: \"SAST, DAST, penetration testing\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the Secure Software Development policy/standard and flag every item where the \"SAST, DAST, penetration testing\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- secure-sdlc_inventory.json   (in-scope items — In-scope inventory for the sast, dast, penetration testing control (from SAST / DAST / SCA tooling))\n- secure-sdlc_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"SAST, DAST, penetration testing\",\n  \"domain\": \"Secure Software Development\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{ssd_",
        "/evidence/secure-sdlc_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Product engineering\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"SAST, DAST, penetration testing\" control must cover\n# fragment: sast_dast_penetration_",
        "/evidence/secure-sdlc_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "secure-sdlc_inventory.json",
            "isDir": false
          },
          {
            "name": "secure-sdlc_state.json",
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
          "value": "FLAG{ssd_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/secure-sdlc_inventory.json",
          "value": "sast_dast_penetration_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/secure-sdlc_state.json",
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
          "id": "ssd-03-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"SAST, DAST, penetration testing\" sub-process of Secure Software Development?",
          "options": [
            "Deploy and operate the sast, dast, penetration testing control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the sast, dast, penetration testing control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for sast, dast, penetration testing against comparable organisations in the sector",
            "Obtain evidence that the sast, dast, penetration testing control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "ssd-03-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"SAST, DAST, penetration testing\" matter to the broader Secure Software Development posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Secure Software Development",
            "It stops mattering once a firewall and endpoint agent are deployed across the Secure Software Development estate",
            "It is a control other Secure Software Development controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Secure Software Development controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "ssd-03-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"SAST, DAST, penetration testing\" control?",
          "options": [
            "A point-in-time screenshot of one system's sast, dast, penetration testing settings, captured during the walkthrough",
            "The In-scope inventory for the sast, dast, penetration testing control (from SAST / DAST / SCA tooling), reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the sast, dast, penetration testing control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's sast, dast, penetration testing capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "ssd-03-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"SAST, DAST, penetration testing\"?",
          "options": [
            "From SAST / DAST / SCA tooling and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how sast, dast, penetration testing works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. SAST / DAST / SCA tooling) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "ssd-03-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"SAST, DAST, penetration testing\"?",
          "options": [
            "The external audit firm, since it is the party examining the sast, dast, penetration testing control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the sast, dast, penetration testing data is shared, so the accountability sits with no one in particular",
            "Product engineering, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Product engineering owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "ssd-03-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"SAST, DAST, penetration testing\", which part stays with the human auditor?",
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
          "id": "ssd-03-q7",
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
          "id": "ssd-03-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"SAST, DAST, penetration testing\", which of these is a realistic reportable finding?",
          "options": [
            "In-scope items where the sast, dast, penetration testing control is not applied, mis-scoped, or has drifted from the approved baseline",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the sast, dast, penetration testing control is not applied, mis-scoped, or has drifted from the approved baseline A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "ssd-03-q9",
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
          "id": "ssd-03-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"SAST, DAST, penetration testing\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind sast, dast, penetration testing, so there is no overlap",
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
    "epochId": "secure-sdlc",
    "id": "ssd-04",
    "order": 4,
    "title": "Software composition analysis",
    "subtitle": "Agentic technical & privacy audit of the software composition analysis control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 5,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Software composition analysis\" control for Secure Software Development is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the Secure Software Development policy/standard and flag every item where the \"Software composition analysis\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Secure Software Development systems of record (SAST / DAST / SCA tooling; Issue tracker (Jira); CI security gates) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the software composition analysis control (from SAST / DAST / SCA tooling)",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "SAST / DAST / SCA tooling",
        "Issue tracker (Jira)",
        "CI security gates",
        "Threat-model + design records"
      ],
      "dataOwner": [
        "Product engineering",
        "AppSec / Security champions",
        "QA",
        "Engineering leadership"
      ],
      "scoring": {
        "ease": "EASE 5/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Secure Software Development controls."
      }
    },
    "badge": {
      "id": "ssd-04-badge",
      "name": "Secure Software Development Auditor",
      "emoji": "🛡️"
    },
    "wonder": {
      "name": "Software composition analysis",
      "location": "Secure Software Development",
      "era": "Present Day",
      "emoji": "🛡️"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Software composition analysis\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the software composition analysis control (from SAST / DAST / SCA tooling)) with read-only agents, run the test against policy, and issue a defensible opinion on the Secure Software Development control.",
      "year": 2025,
      "overview": [
        "The \"Software composition analysis\" sub-process is one of the controls an auditor must verify for Secure Software Development. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the software composition analysis control (from SAST / DAST / SCA tooling), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here SAST / DAST / SCA tooling, Issue tracker (Jira), CI security gates — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the Secure Software Development policy/standard and flag every item where the \"Software composition analysis\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `04_software_composition_analysis_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from SAST / DAST / SCA tooling and Issue tracker (Jira) (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 04_software_composition_analysis_mcp.py` to expose it to your agent — or `python 04_software_composition_analysis_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Insecure design ships to production",
        "when": "Recurring",
        "where": "Software delivery lifecycles",
        "impact": "A class of vulnerability that a secure-SDLC gate is meant to stop reaches production because the gate was advisory, not enforced.",
        "body": [
          "When security testing is bolted on at the end — or is non-blocking — known-bad patterns ship anyway. Insecure design and unvalidated third-party code are the recurring root causes.",
          "The audit confirms security is built into requirements, design, coding standards, and enforced gates across the lifecycle, with evidence at each stage."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Secure Software Development scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull SAST / DAST / SCA tooling · Issue tracker (Jira)",
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
          "year": 2021,
          "event": "Log4Shell: a dependency flaw becomes everyone's incident",
          "highlight": true
        },
        {
          "year": 2021,
          "event": "OWASP Top 10 adds A04 Insecure Design + A06 Vulnerable Components"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Software composition analysis\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the software composition analysis control (from SAST / DAST / SCA tooling).",
        "The test: Reconcile the in-scope inventory against the Secure Software Development policy/standard and flag every item where the \"Software composition analysis\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (SAST / DAST / SCA tooling, Issue tracker (Jira), CI security gates) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the software composition analysis control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "NIST SSDF — SP 800-218",
          "url": "https://csrc.nist.gov/pubs/sp/800/218/final"
        },
        {
          "title": "OWASP SAMM",
          "url": "https://owaspsamm.org/"
        },
        {
          "title": "BSIMM",
          "url": "https://www.bsimm.com/"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "04_software_composition_analysis_mcp.py",
          "url": "/audit-code/secure-sdlc/04_software_composition_analysis_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Secure Software Development evidence for \"Software composition analysis\" (in-scope inventory for the software composition analysis control (from sast / dast / sca tooling)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Software composition analysis\" control for Secure Software Development at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the Secure Software Development policy/standard and flag every item where the \"Software composition analysis\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the software composition analysis control (from SAST / DAST / SCA tooling) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live SAST / DAST / SCA tooling APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. SAST / DAST / SCA tooling gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from SAST / DAST / SCA tooling; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Secure Software Development: \"Software composition analysis\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the Secure Software Development policy/standard and flag every item where the \"Software composition analysis\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- secure-sdlc_inventory.json   (in-scope items — In-scope inventory for the software composition analysis control (from SAST / DAST / SCA tooling))\n- secure-sdlc_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Software composition analysis\",\n  \"domain\": \"Secure Software Development\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{ssd_",
        "/evidence/secure-sdlc_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Product engineering\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Software composition analysis\" control must cover\n# fragment: software_composition_analysis_",
        "/evidence/secure-sdlc_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "secure-sdlc_inventory.json",
            "isDir": false
          },
          {
            "name": "secure-sdlc_state.json",
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
          "value": "FLAG{ssd_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/secure-sdlc_inventory.json",
          "value": "software_composition_analysis_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/secure-sdlc_state.json",
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
          "id": "ssd-04-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Software composition analysis\" sub-process of Secure Software Development?",
          "options": [
            "Deploy and operate the software composition analysis control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the software composition analysis control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for software composition analysis against comparable organisations in the sector",
            "Obtain evidence that the software composition analysis control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "ssd-04-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Software composition analysis\" matter to the broader Secure Software Development posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Secure Software Development",
            "It stops mattering once a firewall and endpoint agent are deployed across the Secure Software Development estate",
            "It is a control other Secure Software Development controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Secure Software Development controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "ssd-04-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Software composition analysis\" control?",
          "options": [
            "A point-in-time screenshot of one system's software composition analysis settings, captured during the walkthrough",
            "The In-scope inventory for the software composition analysis control (from SAST / DAST / SCA tooling), reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the software composition analysis control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's software composition analysis capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "ssd-04-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Software composition analysis\"?",
          "options": [
            "From SAST / DAST / SCA tooling and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how software composition analysis works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. SAST / DAST / SCA tooling) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "ssd-04-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Software composition analysis\"?",
          "options": [
            "The external audit firm, since it is the party examining the software composition analysis control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the software composition analysis data is shared, so the accountability sits with no one in particular",
            "Product engineering, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Product engineering owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "ssd-04-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Software composition analysis\", which part stays with the human auditor?",
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
          "id": "ssd-04-q7",
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
          "id": "ssd-04-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Software composition analysis\", which of these is a realistic reportable finding?",
          "options": [
            "In-scope items where the software composition analysis control is not applied, mis-scoped, or has drifted from the approved baseline",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the software composition analysis control is not applied, mis-scoped, or has drifted from the approved baseline A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "ssd-04-q9",
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
          "id": "ssd-04-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Software composition analysis\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind software composition analysis, so there is no overlap",
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
    "epochId": "secure-sdlc",
    "id": "ssd-05",
    "order": 5,
    "title": "Open source security",
    "subtitle": "Agentic technical & privacy audit of the open source security control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 6,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Open source security\" control for Secure Software Development is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the Secure Software Development policy/standard and flag every item where the \"Open source security\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Secure Software Development systems of record (SAST / DAST / SCA tooling; Issue tracker (Jira); CI security gates) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the open source security control (from SAST / DAST / SCA tooling)",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "SAST / DAST / SCA tooling",
        "Issue tracker (Jira)",
        "CI security gates",
        "Threat-model + design records"
      ],
      "dataOwner": [
        "Product engineering",
        "AppSec / Security champions",
        "QA",
        "Engineering leadership"
      ],
      "scoring": {
        "ease": "EASE 6/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Secure Software Development controls."
      }
    },
    "badge": {
      "id": "ssd-05-badge",
      "name": "Secure Software Development Auditor",
      "emoji": "🛡️"
    },
    "wonder": {
      "name": "Open source security",
      "location": "Secure Software Development",
      "era": "Present Day",
      "emoji": "🛡️"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Open source security\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the open source security control (from SAST / DAST / SCA tooling)) with read-only agents, run the test against policy, and issue a defensible opinion on the Secure Software Development control.",
      "year": 2025,
      "overview": [
        "The \"Open source security\" sub-process is one of the controls an auditor must verify for Secure Software Development. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the open source security control (from SAST / DAST / SCA tooling), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here SAST / DAST / SCA tooling, Issue tracker (Jira), CI security gates — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the Secure Software Development policy/standard and flag every item where the \"Open source security\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `05_open_source_security_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from SAST / DAST / SCA tooling and Issue tracker (Jira) (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 05_open_source_security_mcp.py` to expose it to your agent — or `python 05_open_source_security_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Insecure design ships to production",
        "when": "Recurring",
        "where": "Software delivery lifecycles",
        "impact": "A class of vulnerability that a secure-SDLC gate is meant to stop reaches production because the gate was advisory, not enforced.",
        "body": [
          "When security testing is bolted on at the end — or is non-blocking — known-bad patterns ship anyway. Insecure design and unvalidated third-party code are the recurring root causes.",
          "The audit confirms security is built into requirements, design, coding standards, and enforced gates across the lifecycle, with evidence at each stage."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Secure Software Development scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull SAST / DAST / SCA tooling · Issue tracker (Jira)",
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
          "year": 2021,
          "event": "Log4Shell: a dependency flaw becomes everyone's incident",
          "highlight": true
        },
        {
          "year": 2021,
          "event": "OWASP Top 10 adds A04 Insecure Design + A06 Vulnerable Components"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Open source security\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the open source security control (from SAST / DAST / SCA tooling).",
        "The test: Reconcile the in-scope inventory against the Secure Software Development policy/standard and flag every item where the \"Open source security\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (SAST / DAST / SCA tooling, Issue tracker (Jira), CI security gates) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the open source security control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "NIST SSDF — SP 800-218",
          "url": "https://csrc.nist.gov/pubs/sp/800/218/final"
        },
        {
          "title": "OWASP SAMM",
          "url": "https://owaspsamm.org/"
        },
        {
          "title": "BSIMM",
          "url": "https://www.bsimm.com/"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "05_open_source_security_mcp.py",
          "url": "/audit-code/secure-sdlc/05_open_source_security_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Secure Software Development evidence for \"Open source security\" (in-scope inventory for the open source security control (from sast / dast / sca tooling)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Open source security\" control for Secure Software Development at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the Secure Software Development policy/standard and flag every item where the \"Open source security\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the open source security control (from SAST / DAST / SCA tooling) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live SAST / DAST / SCA tooling APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. SAST / DAST / SCA tooling gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from SAST / DAST / SCA tooling; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Secure Software Development: \"Open source security\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the Secure Software Development policy/standard and flag every item where the \"Open source security\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- secure-sdlc_inventory.json   (in-scope items — In-scope inventory for the open source security control (from SAST / DAST / SCA tooling))\n- secure-sdlc_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Open source security\",\n  \"domain\": \"Secure Software Development\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{ssd_",
        "/evidence/secure-sdlc_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Product engineering\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Open source security\" control must cover\n# fragment: open_source_security_",
        "/evidence/secure-sdlc_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "secure-sdlc_inventory.json",
            "isDir": false
          },
          {
            "name": "secure-sdlc_state.json",
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
          "value": "FLAG{ssd_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/secure-sdlc_inventory.json",
          "value": "open_source_security_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/secure-sdlc_state.json",
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
          "id": "ssd-05-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Open source security\" sub-process of Secure Software Development?",
          "options": [
            "Deploy and operate the open source security control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the open source security control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for open source security against comparable organisations in the sector",
            "Obtain evidence that the open source security control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "ssd-05-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Open source security\" matter to the broader Secure Software Development posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Secure Software Development",
            "It stops mattering once a firewall and endpoint agent are deployed across the Secure Software Development estate",
            "It is a control other Secure Software Development controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Secure Software Development controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "ssd-05-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Open source security\" control?",
          "options": [
            "A point-in-time screenshot of one system's open source security settings, captured during the walkthrough",
            "The In-scope inventory for the open source security control (from SAST / DAST / SCA tooling), reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the open source security control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's open source security capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "ssd-05-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Open source security\"?",
          "options": [
            "From SAST / DAST / SCA tooling and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how open source security works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. SAST / DAST / SCA tooling) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "ssd-05-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Open source security\"?",
          "options": [
            "The external audit firm, since it is the party examining the open source security control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the open source security data is shared, so the accountability sits with no one in particular",
            "Product engineering, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Product engineering owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "ssd-05-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Open source security\", which part stays with the human auditor?",
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
          "id": "ssd-05-q7",
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
          "id": "ssd-05-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Open source security\", which of these is a realistic reportable finding?",
          "options": [
            "In-scope items where the open source security control is not applied, mis-scoped, or has drifted from the approved baseline",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the open source security control is not applied, mis-scoped, or has drifted from the approved baseline A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "ssd-05-q9",
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
          "id": "ssd-05-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Open source security\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind open source security, so there is no overlap",
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
    "epochId": "secure-sdlc",
    "id": "ssd-06",
    "order": 6,
    "title": "Infrastructure as code (IaC) security",
    "subtitle": "Agentic technical & privacy audit of the infrastructure as code (iac) security control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 7,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Infrastructure as code (IaC) security\" control for Secure Software Development is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the Secure Software Development policy/standard and flag every item where the \"Infrastructure as code (IaC) security\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Secure Software Development systems of record (SAST / DAST / SCA tooling; Issue tracker (Jira); CI security gates) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the infrastructure as code (iac) security control (from SAST / DAST / SCA tooling)",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "SAST / DAST / SCA tooling",
        "Issue tracker (Jira)",
        "CI security gates",
        "Threat-model + design records"
      ],
      "dataOwner": [
        "Product engineering",
        "AppSec / Security champions",
        "QA",
        "Engineering leadership"
      ],
      "scoring": {
        "ease": "EASE 7/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Secure Software Development controls."
      }
    },
    "badge": {
      "id": "ssd-06-badge",
      "name": "Secure Software Development Auditor",
      "emoji": "🛡️"
    },
    "wonder": {
      "name": "Infrastructure as code (IaC) security",
      "location": "Secure Software Development",
      "era": "Present Day",
      "emoji": "🛡️"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Infrastructure as code (IaC) security\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the infrastructure as code (iac) security control (from SAST / DAST / SCA tooling)) with read-only agents, run the test against policy, and issue a defensible opinion on the Secure Software Development control.",
      "year": 2025,
      "overview": [
        "The \"Infrastructure as code (IaC) security\" sub-process is one of the controls an auditor must verify for Secure Software Development. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the infrastructure as code (iac) security control (from SAST / DAST / SCA tooling), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here SAST / DAST / SCA tooling, Issue tracker (Jira), CI security gates — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the Secure Software Development policy/standard and flag every item where the \"Infrastructure as code (IaC) security\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `06_infrastructure_as_code_iac_security_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from SAST / DAST / SCA tooling and Issue tracker (Jira) (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 06_infrastructure_as_code_iac_security_mcp.py` to expose it to your agent — or `python 06_infrastructure_as_code_iac_security_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Insecure design ships to production",
        "when": "Recurring",
        "where": "Software delivery lifecycles",
        "impact": "A class of vulnerability that a secure-SDLC gate is meant to stop reaches production because the gate was advisory, not enforced.",
        "body": [
          "When security testing is bolted on at the end — or is non-blocking — known-bad patterns ship anyway. Insecure design and unvalidated third-party code are the recurring root causes.",
          "The audit confirms security is built into requirements, design, coding standards, and enforced gates across the lifecycle, with evidence at each stage."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Secure Software Development scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull SAST / DAST / SCA tooling · Issue tracker (Jira)",
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
          "year": 2021,
          "event": "Log4Shell: a dependency flaw becomes everyone's incident",
          "highlight": true
        },
        {
          "year": 2021,
          "event": "OWASP Top 10 adds A04 Insecure Design + A06 Vulnerable Components"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Infrastructure as code (IaC) security\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the infrastructure as code (iac) security control (from SAST / DAST / SCA tooling).",
        "The test: Reconcile the in-scope inventory against the Secure Software Development policy/standard and flag every item where the \"Infrastructure as code (IaC) security\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (SAST / DAST / SCA tooling, Issue tracker (Jira), CI security gates) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the infrastructure as code (iac) security control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "NIST SSDF — SP 800-218",
          "url": "https://csrc.nist.gov/pubs/sp/800/218/final"
        },
        {
          "title": "OWASP SAMM",
          "url": "https://owaspsamm.org/"
        },
        {
          "title": "BSIMM",
          "url": "https://www.bsimm.com/"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "06_infrastructure_as_code_iac_security_mcp.py",
          "url": "/audit-code/secure-sdlc/06_infrastructure_as_code_iac_security_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Secure Software Development evidence for \"Infrastructure as code (IaC) security\" (in-scope inventory for the infrastructure as code (iac) security control (from sast / dast / sca tooling)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Infrastructure as code (IaC) security\" control for Secure Software Development at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the Secure Software Development policy/standard and flag every item where the \"Infrastructure as code (IaC) security\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the infrastructure as code (iac) security control (from SAST / DAST / SCA tooling) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live SAST / DAST / SCA tooling APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. SAST / DAST / SCA tooling gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from SAST / DAST / SCA tooling; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Secure Software Development: \"Infrastructure as code (IaC) security\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the Secure Software Development policy/standard and flag every item where the \"Infrastructure as code (IaC) security\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- secure-sdlc_inventory.json   (in-scope items — In-scope inventory for the infrastructure as code (iac) security control (from SAST / DAST / SCA tooling))\n- secure-sdlc_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Infrastructure as code (IaC) security\",\n  \"domain\": \"Secure Software Development\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{ssd_",
        "/evidence/secure-sdlc_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Product engineering\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Infrastructure as code (IaC) security\" control must cover\n# fragment: infrastructure_as_code_",
        "/evidence/secure-sdlc_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "secure-sdlc_inventory.json",
            "isDir": false
          },
          {
            "name": "secure-sdlc_state.json",
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
          "value": "FLAG{ssd_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/secure-sdlc_inventory.json",
          "value": "infrastructure_as_code_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/secure-sdlc_state.json",
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
          "id": "ssd-06-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Infrastructure as code (IaC) security\" sub-process of Secure Software Development?",
          "options": [
            "Deploy and operate the infrastructure as code (iac) security control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the infrastructure as code (iac) security control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for infrastructure as code (iac) security against comparable organisations in the sector",
            "Obtain evidence that the infrastructure as code (iac) security control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "ssd-06-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Infrastructure as code (IaC) security\" matter to the broader Secure Software Development posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Secure Software Development",
            "It stops mattering once a firewall and endpoint agent are deployed across the Secure Software Development estate",
            "It is a control other Secure Software Development controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Secure Software Development controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "ssd-06-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Infrastructure as code (IaC) security\" control?",
          "options": [
            "A point-in-time screenshot of one system's infrastructure as code (iac) security settings, captured during the walkthrough",
            "The In-scope inventory for the infrastructure as code (iac) security control (from SAST / DAST / SCA tooling), reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the infrastructure as code (iac) security control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's infrastructure as code (iac) security capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "ssd-06-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Infrastructure as code (IaC) security\"?",
          "options": [
            "From SAST / DAST / SCA tooling and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how infrastructure as code (iac) security works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. SAST / DAST / SCA tooling) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "ssd-06-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Infrastructure as code (IaC) security\"?",
          "options": [
            "The external audit firm, since it is the party examining the infrastructure as code (iac) security control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the infrastructure as code (iac) security data is shared, so the accountability sits with no one in particular",
            "Product engineering, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Product engineering owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "ssd-06-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Infrastructure as code (IaC) security\", which part stays with the human auditor?",
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
          "id": "ssd-06-q7",
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
          "id": "ssd-06-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Infrastructure as code (IaC) security\", which of these is a realistic reportable finding?",
          "options": [
            "In-scope items where the infrastructure as code (iac) security control is not applied, mis-scoped, or has drifted from the approved baseline",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the infrastructure as code (iac) security control is not applied, mis-scoped, or has drifted from the approved baseline A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "ssd-06-q9",
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
          "id": "ssd-06-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Infrastructure as code (IaC) security\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind infrastructure as code (iac) security, so there is no overlap",
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
    "epochId": "secure-sdlc",
    "id": "ssd-07",
    "order": 7,
    "title": "API security",
    "subtitle": "Agentic technical & privacy audit of the api security control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 5,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"API security\" control for Secure Software Development is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the Secure Software Development policy/standard and flag every item where the \"API security\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Secure Software Development systems of record (SAST / DAST / SCA tooling; Issue tracker (Jira); CI security gates) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the api security control (from SAST / DAST / SCA tooling)",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "SAST / DAST / SCA tooling",
        "Issue tracker (Jira)",
        "CI security gates",
        "Threat-model + design records"
      ],
      "dataOwner": [
        "Product engineering",
        "AppSec / Security champions",
        "QA",
        "Engineering leadership"
      ],
      "scoring": {
        "ease": "EASE 5/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Secure Software Development controls."
      }
    },
    "badge": {
      "id": "ssd-07-badge",
      "name": "Secure Software Development Auditor",
      "emoji": "🛡️"
    },
    "wonder": {
      "name": "API security",
      "location": "Secure Software Development",
      "era": "Present Day",
      "emoji": "🛡️"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"API security\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the api security control (from SAST / DAST / SCA tooling)) with read-only agents, run the test against policy, and issue a defensible opinion on the Secure Software Development control.",
      "year": 2025,
      "overview": [
        "The \"API security\" sub-process is one of the controls an auditor must verify for Secure Software Development. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the api security control (from SAST / DAST / SCA tooling), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here SAST / DAST / SCA tooling, Issue tracker (Jira), CI security gates — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the Secure Software Development policy/standard and flag every item where the \"API security\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `07_api_security_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from SAST / DAST / SCA tooling and Issue tracker (Jira) (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 07_api_security_mcp.py` to expose it to your agent — or `python 07_api_security_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Insecure design ships to production",
        "when": "Recurring",
        "where": "Software delivery lifecycles",
        "impact": "A class of vulnerability that a secure-SDLC gate is meant to stop reaches production because the gate was advisory, not enforced.",
        "body": [
          "When security testing is bolted on at the end — or is non-blocking — known-bad patterns ship anyway. Insecure design and unvalidated third-party code are the recurring root causes.",
          "The audit confirms security is built into requirements, design, coding standards, and enforced gates across the lifecycle, with evidence at each stage."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Secure Software Development scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull SAST / DAST / SCA tooling · Issue tracker (Jira)",
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
          "year": 2021,
          "event": "Log4Shell: a dependency flaw becomes everyone's incident",
          "highlight": true
        },
        {
          "year": 2021,
          "event": "OWASP Top 10 adds A04 Insecure Design + A06 Vulnerable Components"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"API security\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the api security control (from SAST / DAST / SCA tooling).",
        "The test: Reconcile the in-scope inventory against the Secure Software Development policy/standard and flag every item where the \"API security\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (SAST / DAST / SCA tooling, Issue tracker (Jira), CI security gates) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the api security control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "NIST SSDF — SP 800-218",
          "url": "https://csrc.nist.gov/pubs/sp/800/218/final"
        },
        {
          "title": "OWASP SAMM",
          "url": "https://owaspsamm.org/"
        },
        {
          "title": "BSIMM",
          "url": "https://www.bsimm.com/"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "07_api_security_mcp.py",
          "url": "/audit-code/secure-sdlc/07_api_security_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Secure Software Development evidence for \"API security\" (in-scope inventory for the api security control (from sast / dast / sca tooling)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"API security\" control for Secure Software Development at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the Secure Software Development policy/standard and flag every item where the \"API security\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the api security control (from SAST / DAST / SCA tooling) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live SAST / DAST / SCA tooling APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. SAST / DAST / SCA tooling gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from SAST / DAST / SCA tooling; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Secure Software Development: \"API security\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the Secure Software Development policy/standard and flag every item where the \"API security\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- secure-sdlc_inventory.json   (in-scope items — In-scope inventory for the api security control (from SAST / DAST / SCA tooling))\n- secure-sdlc_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"API security\",\n  \"domain\": \"Secure Software Development\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{ssd_",
        "/evidence/secure-sdlc_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Product engineering\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"API security\" control must cover\n# fragment: api_security_",
        "/evidence/secure-sdlc_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "secure-sdlc_inventory.json",
            "isDir": false
          },
          {
            "name": "secure-sdlc_state.json",
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
          "value": "FLAG{ssd_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/secure-sdlc_inventory.json",
          "value": "api_security_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/secure-sdlc_state.json",
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
          "id": "ssd-07-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"API security\" sub-process of Secure Software Development?",
          "options": [
            "Deploy and operate the api security control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the api security control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for api security against comparable organisations in the sector",
            "Obtain evidence that the api security control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "ssd-07-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"API security\" matter to the broader Secure Software Development posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Secure Software Development",
            "It stops mattering once a firewall and endpoint agent are deployed across the Secure Software Development estate",
            "It is a control other Secure Software Development controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Secure Software Development controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "ssd-07-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"API security\" control?",
          "options": [
            "A point-in-time screenshot of one system's api security settings, captured during the walkthrough",
            "The In-scope inventory for the api security control (from SAST / DAST / SCA tooling), reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the api security control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's api security capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "ssd-07-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"API security\"?",
          "options": [
            "From SAST / DAST / SCA tooling and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how api security works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. SAST / DAST / SCA tooling) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "ssd-07-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"API security\"?",
          "options": [
            "The external audit firm, since it is the party examining the api security control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the api security data is shared, so the accountability sits with no one in particular",
            "Product engineering, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Product engineering owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "ssd-07-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"API security\", which part stays with the human auditor?",
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
          "id": "ssd-07-q7",
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
          "id": "ssd-07-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"API security\", which of these is a realistic reportable finding?",
          "options": [
            "In-scope items where the api security control is not applied, mis-scoped, or has drifted from the approved baseline",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the api security control is not applied, mis-scoped, or has drifted from the approved baseline A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "ssd-07-q9",
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
          "id": "ssd-07-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"API security\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind api security, so there is no overlap",
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
    "epochId": "secure-sdlc",
    "id": "ssd-08",
    "order": 8,
    "title": "Container and cloud-native security",
    "subtitle": "Agentic technical & privacy audit of the container and cloud-native security control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 6,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Container and cloud-native security\" control for Secure Software Development is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the Secure Software Development policy/standard and flag every item where the \"Container and cloud-native security\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Secure Software Development systems of record (SAST / DAST / SCA tooling; Issue tracker (Jira); CI security gates) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the container and cloud-native security control (from SAST / DAST / SCA tooling)",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "SAST / DAST / SCA tooling",
        "Issue tracker (Jira)",
        "CI security gates",
        "Threat-model + design records"
      ],
      "dataOwner": [
        "Product engineering",
        "AppSec / Security champions",
        "QA",
        "Engineering leadership"
      ],
      "scoring": {
        "ease": "EASE 6/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Secure Software Development controls."
      }
    },
    "badge": {
      "id": "ssd-08-badge",
      "name": "Secure Software Development Auditor",
      "emoji": "🛡️"
    },
    "wonder": {
      "name": "Container and cloud-native security",
      "location": "Secure Software Development",
      "era": "Present Day",
      "emoji": "🛡️"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Container and cloud-native security\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the container and cloud-native security control (from SAST / DAST / SCA tooling)) with read-only agents, run the test against policy, and issue a defensible opinion on the Secure Software Development control.",
      "year": 2025,
      "overview": [
        "The \"Container and cloud-native security\" sub-process is one of the controls an auditor must verify for Secure Software Development. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the container and cloud-native security control (from SAST / DAST / SCA tooling), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here SAST / DAST / SCA tooling, Issue tracker (Jira), CI security gates — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the Secure Software Development policy/standard and flag every item where the \"Container and cloud-native security\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `08_container_and_cloud_native_security_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from SAST / DAST / SCA tooling and Issue tracker (Jira) (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 08_container_and_cloud_native_security_mcp.py` to expose it to your agent — or `python 08_container_and_cloud_native_security_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Insecure design ships to production",
        "when": "Recurring",
        "where": "Software delivery lifecycles",
        "impact": "A class of vulnerability that a secure-SDLC gate is meant to stop reaches production because the gate was advisory, not enforced.",
        "body": [
          "When security testing is bolted on at the end — or is non-blocking — known-bad patterns ship anyway. Insecure design and unvalidated third-party code are the recurring root causes.",
          "The audit confirms security is built into requirements, design, coding standards, and enforced gates across the lifecycle, with evidence at each stage."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Secure Software Development scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull SAST / DAST / SCA tooling · Issue tracker (Jira)",
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
          "year": 2021,
          "event": "Log4Shell: a dependency flaw becomes everyone's incident",
          "highlight": true
        },
        {
          "year": 2021,
          "event": "OWASP Top 10 adds A04 Insecure Design + A06 Vulnerable Components"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Container and cloud-native security\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the container and cloud-native security control (from SAST / DAST / SCA tooling).",
        "The test: Reconcile the in-scope inventory against the Secure Software Development policy/standard and flag every item where the \"Container and cloud-native security\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (SAST / DAST / SCA tooling, Issue tracker (Jira), CI security gates) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the container and cloud-native security control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "NIST SSDF — SP 800-218",
          "url": "https://csrc.nist.gov/pubs/sp/800/218/final"
        },
        {
          "title": "OWASP SAMM",
          "url": "https://owaspsamm.org/"
        },
        {
          "title": "BSIMM",
          "url": "https://www.bsimm.com/"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "08_container_and_cloud_native_security_mcp.py",
          "url": "/audit-code/secure-sdlc/08_container_and_cloud_native_security_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Secure Software Development evidence for \"Container and cloud-native security\" (in-scope inventory for the container and cloud-native security control (from sast / dast / sca tooling)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Container and cloud-native security\" control for Secure Software Development at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the Secure Software Development policy/standard and flag every item where the \"Container and cloud-native security\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the container and cloud-native security control (from SAST / DAST / SCA tooling) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live SAST / DAST / SCA tooling APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. SAST / DAST / SCA tooling gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from SAST / DAST / SCA tooling; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Secure Software Development: \"Container and cloud-native security\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the Secure Software Development policy/standard and flag every item where the \"Container and cloud-native security\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- secure-sdlc_inventory.json   (in-scope items — In-scope inventory for the container and cloud-native security control (from SAST / DAST / SCA tooling))\n- secure-sdlc_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Container and cloud-native security\",\n  \"domain\": \"Secure Software Development\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{ssd_",
        "/evidence/secure-sdlc_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Product engineering\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Container and cloud-native security\" control must cover\n# fragment: container_cloudnative_security_",
        "/evidence/secure-sdlc_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "secure-sdlc_inventory.json",
            "isDir": false
          },
          {
            "name": "secure-sdlc_state.json",
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
          "value": "FLAG{ssd_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/secure-sdlc_inventory.json",
          "value": "container_cloudnative_security_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/secure-sdlc_state.json",
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
          "id": "ssd-08-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Container and cloud-native security\" sub-process of Secure Software Development?",
          "options": [
            "Deploy and operate the container and cloud-native security control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the container and cloud-native security control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for container and cloud-native security against comparable organisations in the sector",
            "Obtain evidence that the container and cloud-native security control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "ssd-08-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Container and cloud-native security\" matter to the broader Secure Software Development posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Secure Software Development",
            "It stops mattering once a firewall and endpoint agent are deployed across the Secure Software Development estate",
            "It is a control other Secure Software Development controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Secure Software Development controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "ssd-08-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Container and cloud-native security\" control?",
          "options": [
            "A point-in-time screenshot of one system's container and cloud-native security settings, captured during the walkthrough",
            "The In-scope inventory for the container and cloud-native security control (from SAST / DAST / SCA tooling), reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the container and cloud-native security control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's container and cloud-native security capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "ssd-08-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Container and cloud-native security\"?",
          "options": [
            "From SAST / DAST / SCA tooling and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how container and cloud-native security works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. SAST / DAST / SCA tooling) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "ssd-08-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Container and cloud-native security\"?",
          "options": [
            "The external audit firm, since it is the party examining the container and cloud-native security control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the container and cloud-native security data is shared, so the accountability sits with no one in particular",
            "Product engineering, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Product engineering owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "ssd-08-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Container and cloud-native security\", which part stays with the human auditor?",
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
          "id": "ssd-08-q7",
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
          "id": "ssd-08-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Container and cloud-native security\", which of these is a realistic reportable finding?",
          "options": [
            "In-scope items where the container and cloud-native security control is not applied, mis-scoped, or has drifted from the approved baseline",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the container and cloud-native security control is not applied, mis-scoped, or has drifted from the approved baseline A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "ssd-08-q9",
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
          "id": "ssd-08-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Container and cloud-native security\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind container and cloud-native security, so there is no overlap",
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
    "epochId": "secure-sdlc",
    "id": "ssd-09",
    "order": 9,
    "title": "Vulnerability management",
    "subtitle": "Agentic technical & privacy audit of the vulnerability management control",
    "category": "cybersecurity",
    "xp": 180,
    "easeScore": 7,
    "valueScore": 9,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Vulnerability management\" control for Secure Software Development is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the Secure Software Development policy/standard and flag every item where the \"Vulnerability management\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Secure Software Development systems of record (SAST / DAST / SCA tooling; Issue tracker (Jira); CI security gates) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the vulnerability management control (from SAST / DAST / SCA tooling)",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "SAST / DAST / SCA tooling",
        "Issue tracker (Jira)",
        "CI security gates",
        "Threat-model + design records"
      ],
      "dataOwner": [
        "Product engineering",
        "AppSec / Security champions",
        "QA",
        "Engineering leadership"
      ],
      "scoring": {
        "ease": "EASE 7/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 9/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Secure Software Development controls."
      }
    },
    "badge": {
      "id": "ssd-09-badge",
      "name": "Secure Software Development Auditor",
      "emoji": "🛡️"
    },
    "wonder": {
      "name": "Vulnerability management",
      "location": "Secure Software Development",
      "era": "Present Day",
      "emoji": "🛡️"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Vulnerability management\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the vulnerability management control (from SAST / DAST / SCA tooling)) with read-only agents, run the test against policy, and issue a defensible opinion on the Secure Software Development control.",
      "year": 2025,
      "overview": [
        "The \"Vulnerability management\" sub-process is one of the controls an auditor must verify for Secure Software Development. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the vulnerability management control (from SAST / DAST / SCA tooling), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here SAST / DAST / SCA tooling, Issue tracker (Jira), CI security gates — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the Secure Software Development policy/standard and flag every item where the \"Vulnerability management\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `09_vulnerability_management_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from SAST / DAST / SCA tooling and Issue tracker (Jira) (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 09_vulnerability_management_mcp.py` to expose it to your agent — or `python 09_vulnerability_management_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Insecure design ships to production",
        "when": "Recurring",
        "where": "Software delivery lifecycles",
        "impact": "A class of vulnerability that a secure-SDLC gate is meant to stop reaches production because the gate was advisory, not enforced.",
        "body": [
          "When security testing is bolted on at the end — or is non-blocking — known-bad patterns ship anyway. Insecure design and unvalidated third-party code are the recurring root causes.",
          "The audit confirms security is built into requirements, design, coding standards, and enforced gates across the lifecycle, with evidence at each stage."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Secure Software Development scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull SAST / DAST / SCA tooling · Issue tracker (Jira)",
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
          "year": 2021,
          "event": "Log4Shell: a dependency flaw becomes everyone's incident",
          "highlight": true
        },
        {
          "year": 2021,
          "event": "OWASP Top 10 adds A04 Insecure Design + A06 Vulnerable Components"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Vulnerability management\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the vulnerability management control (from SAST / DAST / SCA tooling).",
        "The test: Reconcile the in-scope inventory against the Secure Software Development policy/standard and flag every item where the \"Vulnerability management\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (SAST / DAST / SCA tooling, Issue tracker (Jira), CI security gates) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the vulnerability management control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "NIST SSDF — SP 800-218",
          "url": "https://csrc.nist.gov/pubs/sp/800/218/final"
        },
        {
          "title": "OWASP SAMM",
          "url": "https://owaspsamm.org/"
        },
        {
          "title": "BSIMM",
          "url": "https://www.bsimm.com/"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "09_vulnerability_management_mcp.py",
          "url": "/audit-code/secure-sdlc/09_vulnerability_management_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Secure Software Development evidence for \"Vulnerability management\" (in-scope inventory for the vulnerability management control (from sast / dast / sca tooling)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Vulnerability management\" control for Secure Software Development at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the Secure Software Development policy/standard and flag every item where the \"Vulnerability management\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the vulnerability management control (from SAST / DAST / SCA tooling) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live SAST / DAST / SCA tooling APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. SAST / DAST / SCA tooling gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from SAST / DAST / SCA tooling; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Secure Software Development: \"Vulnerability management\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the Secure Software Development policy/standard and flag every item where the \"Vulnerability management\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- secure-sdlc_inventory.json   (in-scope items — In-scope inventory for the vulnerability management control (from SAST / DAST / SCA tooling))\n- secure-sdlc_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Vulnerability management\",\n  \"domain\": \"Secure Software Development\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{ssd_",
        "/evidence/secure-sdlc_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Product engineering\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Vulnerability management\" control must cover\n# fragment: vulnerability_management_",
        "/evidence/secure-sdlc_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "secure-sdlc_inventory.json",
            "isDir": false
          },
          {
            "name": "secure-sdlc_state.json",
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
          "value": "FLAG{ssd_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/secure-sdlc_inventory.json",
          "value": "vulnerability_management_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/secure-sdlc_state.json",
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
          "id": "ssd-09-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Vulnerability management\" sub-process of Secure Software Development?",
          "options": [
            "Deploy and operate the vulnerability management control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the vulnerability management control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for vulnerability management against comparable organisations in the sector",
            "Obtain evidence that the vulnerability management control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "ssd-09-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Vulnerability management\" matter to the broader Secure Software Development posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Secure Software Development",
            "It stops mattering once a firewall and endpoint agent are deployed across the Secure Software Development estate",
            "It is a control other Secure Software Development controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Secure Software Development controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "ssd-09-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Vulnerability management\" control?",
          "options": [
            "A point-in-time screenshot of one system's vulnerability management settings, captured during the walkthrough",
            "The In-scope inventory for the vulnerability management control (from SAST / DAST / SCA tooling), reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the vulnerability management control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's vulnerability management capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "ssd-09-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Vulnerability management\"?",
          "options": [
            "From SAST / DAST / SCA tooling and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how vulnerability management works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. SAST / DAST / SCA tooling) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "ssd-09-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Vulnerability management\"?",
          "options": [
            "The external audit firm, since it is the party examining the vulnerability management control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the vulnerability management data is shared, so the accountability sits with no one in particular",
            "Product engineering, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Product engineering owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "ssd-09-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Vulnerability management\", which part stays with the human auditor?",
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
          "id": "ssd-09-q7",
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
          "id": "ssd-09-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Vulnerability management\", which of these is a realistic reportable finding?",
          "options": [
            "In-scope items where the vulnerability management control is not applied, mis-scoped, or has drifted from the approved baseline",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the vulnerability management control is not applied, mis-scoped, or has drifted from the approved baseline A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "ssd-09-q9",
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
          "id": "ssd-09-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Vulnerability management\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind vulnerability management, so there is no overlap",
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
    "epochId": "secure-sdlc",
    "id": "ssd-10",
    "order": 10,
    "title": "Developer security training",
    "subtitle": "Agentic technical & privacy audit of the developer security training control",
    "category": "cybersecurity",
    "xp": 120,
    "easeScore": 5,
    "valueScore": 6,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Developer security training\" control for Secure Software Development is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the Secure Software Development policy/standard and flag every item where the \"Developer security training\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Secure Software Development systems of record (SAST / DAST / SCA tooling; Issue tracker (Jira); CI security gates) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the developer security training control (from SAST / DAST / SCA tooling)",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "SAST / DAST / SCA tooling",
        "Issue tracker (Jira)",
        "CI security gates",
        "Threat-model + design records"
      ],
      "dataOwner": [
        "Product engineering",
        "AppSec / Security champions",
        "QA",
        "Engineering leadership"
      ],
      "scoring": {
        "ease": "EASE 5/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 6/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Secure Software Development controls."
      }
    },
    "badge": {
      "id": "ssd-10-badge",
      "name": "Secure Software Development Auditor",
      "emoji": "🛡️"
    },
    "wonder": {
      "name": "Developer security training",
      "location": "Secure Software Development",
      "era": "Present Day",
      "emoji": "🛡️"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Developer security training\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the developer security training control (from SAST / DAST / SCA tooling)) with read-only agents, run the test against policy, and issue a defensible opinion on the Secure Software Development control.",
      "year": 2025,
      "overview": [
        "The \"Developer security training\" sub-process is one of the controls an auditor must verify for Secure Software Development. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the developer security training control (from SAST / DAST / SCA tooling), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here SAST / DAST / SCA tooling, Issue tracker (Jira), CI security gates — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the Secure Software Development policy/standard and flag every item where the \"Developer security training\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `10_developer_security_training_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from SAST / DAST / SCA tooling and Issue tracker (Jira) (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 10_developer_security_training_mcp.py` to expose it to your agent — or `python 10_developer_security_training_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Insecure design ships to production",
        "when": "Recurring",
        "where": "Software delivery lifecycles",
        "impact": "A class of vulnerability that a secure-SDLC gate is meant to stop reaches production because the gate was advisory, not enforced.",
        "body": [
          "When security testing is bolted on at the end — or is non-blocking — known-bad patterns ship anyway. Insecure design and unvalidated third-party code are the recurring root causes.",
          "The audit confirms security is built into requirements, design, coding standards, and enforced gates across the lifecycle, with evidence at each stage."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Secure Software Development scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull SAST / DAST / SCA tooling · Issue tracker (Jira)",
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
          "year": 2021,
          "event": "Log4Shell: a dependency flaw becomes everyone's incident",
          "highlight": true
        },
        {
          "year": 2021,
          "event": "OWASP Top 10 adds A04 Insecure Design + A06 Vulnerable Components"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Developer security training\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the developer security training control (from SAST / DAST / SCA tooling).",
        "The test: Reconcile the in-scope inventory against the Secure Software Development policy/standard and flag every item where the \"Developer security training\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (SAST / DAST / SCA tooling, Issue tracker (Jira), CI security gates) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the developer security training control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "NIST SSDF — SP 800-218",
          "url": "https://csrc.nist.gov/pubs/sp/800/218/final"
        },
        {
          "title": "OWASP SAMM",
          "url": "https://owaspsamm.org/"
        },
        {
          "title": "BSIMM",
          "url": "https://www.bsimm.com/"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "10_developer_security_training_mcp.py",
          "url": "/audit-code/secure-sdlc/10_developer_security_training_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Secure Software Development evidence for \"Developer security training\" (in-scope inventory for the developer security training control (from sast / dast / sca tooling)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Developer security training\" control for Secure Software Development at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the Secure Software Development policy/standard and flag every item where the \"Developer security training\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the developer security training control (from SAST / DAST / SCA tooling) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live SAST / DAST / SCA tooling APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. SAST / DAST / SCA tooling gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from SAST / DAST / SCA tooling; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Secure Software Development: \"Developer security training\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the Secure Software Development policy/standard and flag every item where the \"Developer security training\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- secure-sdlc_inventory.json   (in-scope items — In-scope inventory for the developer security training control (from SAST / DAST / SCA tooling))\n- secure-sdlc_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Developer security training\",\n  \"domain\": \"Secure Software Development\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{ssd_",
        "/evidence/secure-sdlc_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Product engineering\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Developer security training\" control must cover\n# fragment: developer_security_training_",
        "/evidence/secure-sdlc_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "secure-sdlc_inventory.json",
            "isDir": false
          },
          {
            "name": "secure-sdlc_state.json",
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
          "value": "FLAG{ssd_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/secure-sdlc_inventory.json",
          "value": "developer_security_training_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/secure-sdlc_state.json",
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
          "id": "ssd-10-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Developer security training\" sub-process of Secure Software Development?",
          "options": [
            "Deploy and operate the developer security training control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the developer security training control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for developer security training against comparable organisations in the sector",
            "Obtain evidence that the developer security training control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "ssd-10-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Developer security training\" matter to the broader Secure Software Development posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Secure Software Development",
            "It stops mattering once a firewall and endpoint agent are deployed across the Secure Software Development estate",
            "It is a control other Secure Software Development controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Secure Software Development controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "ssd-10-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Developer security training\" control?",
          "options": [
            "A point-in-time screenshot of one system's developer security training settings, captured during the walkthrough",
            "The In-scope inventory for the developer security training control (from SAST / DAST / SCA tooling), reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the developer security training control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's developer security training capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "ssd-10-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Developer security training\"?",
          "options": [
            "From SAST / DAST / SCA tooling and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how developer security training works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. SAST / DAST / SCA tooling) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "ssd-10-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Developer security training\"?",
          "options": [
            "The external audit firm, since it is the party examining the developer security training control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the developer security training data is shared, so the accountability sits with no one in particular",
            "Product engineering, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Product engineering owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "ssd-10-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Developer security training\", which part stays with the human auditor?",
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
          "id": "ssd-10-q7",
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
          "id": "ssd-10-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Developer security training\", which of these is a realistic reportable finding?",
          "options": [
            "In-scope items where the developer security training control is not applied, mis-scoped, or has drifted from the approved baseline",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the developer security training control is not applied, mis-scoped, or has drifted from the approved baseline A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "ssd-10-q9",
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
          "id": "ssd-10-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Developer security training\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind developer security training, so there is no overlap",
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
    "epochId": "secure-sdlc",
    "id": "ssd-11",
    "order": 11,
    "title": "Metrics, reporting, auditability",
    "subtitle": "Agentic technical & privacy audit of the metrics, reporting, auditability control",
    "category": "cybersecurity",
    "xp": 120,
    "easeScore": 7,
    "valueScore": 6,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Metrics, reporting, auditability\" control for Secure Software Development is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the Secure Software Development policy/standard and flag every item where the \"Metrics, reporting, auditability\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Secure Software Development systems of record (SAST / DAST / SCA tooling; Issue tracker (Jira); CI security gates) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the metrics, reporting, auditability control (from SAST / DAST / SCA tooling)",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "SAST / DAST / SCA tooling",
        "Issue tracker (Jira)",
        "CI security gates",
        "Threat-model + design records"
      ],
      "dataOwner": [
        "Product engineering",
        "AppSec / Security champions",
        "QA",
        "Engineering leadership"
      ],
      "scoring": {
        "ease": "EASE 7/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 6/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Secure Software Development controls."
      }
    },
    "badge": {
      "id": "ssd-11-badge",
      "name": "Secure Software Development Auditor",
      "emoji": "🛡️"
    },
    "wonder": {
      "name": "Metrics, reporting, auditability",
      "location": "Secure Software Development",
      "era": "Present Day",
      "emoji": "🛡️"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Metrics, reporting, auditability\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the metrics, reporting, auditability control (from SAST / DAST / SCA tooling)) with read-only agents, run the test against policy, and issue a defensible opinion on the Secure Software Development control.",
      "year": 2025,
      "overview": [
        "The \"Metrics, reporting, auditability\" sub-process is one of the controls an auditor must verify for Secure Software Development. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the metrics, reporting, auditability control (from SAST / DAST / SCA tooling), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here SAST / DAST / SCA tooling, Issue tracker (Jira), CI security gates — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the Secure Software Development policy/standard and flag every item where the \"Metrics, reporting, auditability\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `11_metrics_reporting_auditability_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from SAST / DAST / SCA tooling and Issue tracker (Jira) (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 11_metrics_reporting_auditability_mcp.py` to expose it to your agent — or `python 11_metrics_reporting_auditability_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Insecure design ships to production",
        "when": "Recurring",
        "where": "Software delivery lifecycles",
        "impact": "A class of vulnerability that a secure-SDLC gate is meant to stop reaches production because the gate was advisory, not enforced.",
        "body": [
          "When security testing is bolted on at the end — or is non-blocking — known-bad patterns ship anyway. Insecure design and unvalidated third-party code are the recurring root causes.",
          "The audit confirms security is built into requirements, design, coding standards, and enforced gates across the lifecycle, with evidence at each stage."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Secure Software Development scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull SAST / DAST / SCA tooling · Issue tracker (Jira)",
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
          "year": 2021,
          "event": "Log4Shell: a dependency flaw becomes everyone's incident",
          "highlight": true
        },
        {
          "year": 2021,
          "event": "OWASP Top 10 adds A04 Insecure Design + A06 Vulnerable Components"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Metrics, reporting, auditability\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the metrics, reporting, auditability control (from SAST / DAST / SCA tooling).",
        "The test: Reconcile the in-scope inventory against the Secure Software Development policy/standard and flag every item where the \"Metrics, reporting, auditability\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (SAST / DAST / SCA tooling, Issue tracker (Jira), CI security gates) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the metrics, reporting, auditability control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "NIST SSDF — SP 800-218",
          "url": "https://csrc.nist.gov/pubs/sp/800/218/final"
        },
        {
          "title": "OWASP SAMM",
          "url": "https://owaspsamm.org/"
        },
        {
          "title": "BSIMM",
          "url": "https://www.bsimm.com/"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "11_metrics_reporting_auditability_mcp.py",
          "url": "/audit-code/secure-sdlc/11_metrics_reporting_auditability_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Secure Software Development evidence for \"Metrics, reporting, auditability\" (in-scope inventory for the metrics, reporting, auditability control (from sast / dast / sca tooling)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Metrics, reporting, auditability\" control for Secure Software Development at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the Secure Software Development policy/standard and flag every item where the \"Metrics, reporting, auditability\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the metrics, reporting, auditability control (from SAST / DAST / SCA tooling) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live SAST / DAST / SCA tooling APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. SAST / DAST / SCA tooling gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from SAST / DAST / SCA tooling; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Secure Software Development: \"Metrics, reporting, auditability\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the Secure Software Development policy/standard and flag every item where the \"Metrics, reporting, auditability\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- secure-sdlc_inventory.json   (in-scope items — In-scope inventory for the metrics, reporting, auditability control (from SAST / DAST / SCA tooling))\n- secure-sdlc_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Metrics, reporting, auditability\",\n  \"domain\": \"Secure Software Development\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{ssd_",
        "/evidence/secure-sdlc_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Product engineering\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Metrics, reporting, auditability\" control must cover\n# fragment: metrics_reporting_auditability_",
        "/evidence/secure-sdlc_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "secure-sdlc_inventory.json",
            "isDir": false
          },
          {
            "name": "secure-sdlc_state.json",
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
          "value": "FLAG{ssd_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/secure-sdlc_inventory.json",
          "value": "metrics_reporting_auditability_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/secure-sdlc_state.json",
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
          "id": "ssd-11-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Metrics, reporting, auditability\" sub-process of Secure Software Development?",
          "options": [
            "Deploy and operate the metrics, reporting, auditability control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the metrics, reporting, auditability control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for metrics, reporting, auditability against comparable organisations in the sector",
            "Obtain evidence that the metrics, reporting, auditability control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "ssd-11-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Metrics, reporting, auditability\" matter to the broader Secure Software Development posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Secure Software Development",
            "It stops mattering once a firewall and endpoint agent are deployed across the Secure Software Development estate",
            "It is a control other Secure Software Development controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Secure Software Development controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "ssd-11-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Metrics, reporting, auditability\" control?",
          "options": [
            "A point-in-time screenshot of one system's metrics, reporting, auditability settings, captured during the walkthrough",
            "The In-scope inventory for the metrics, reporting, auditability control (from SAST / DAST / SCA tooling), reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the metrics, reporting, auditability control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's metrics, reporting, auditability capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "ssd-11-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Metrics, reporting, auditability\"?",
          "options": [
            "From SAST / DAST / SCA tooling and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how metrics, reporting, auditability works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. SAST / DAST / SCA tooling) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "ssd-11-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Metrics, reporting, auditability\"?",
          "options": [
            "The external audit firm, since it is the party examining the metrics, reporting, auditability control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the metrics, reporting, auditability data is shared, so the accountability sits with no one in particular",
            "Product engineering, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Product engineering owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "ssd-11-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Metrics, reporting, auditability\", which part stays with the human auditor?",
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
          "id": "ssd-11-q7",
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
          "id": "ssd-11-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Metrics, reporting, auditability\", which of these is a realistic reportable finding?",
          "options": [
            "In-scope items where the metrics, reporting, auditability control is not applied, mis-scoped, or has drifted from the approved baseline",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the metrics, reporting, auditability control is not applied, mis-scoped, or has drifted from the approved baseline A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "ssd-11-q9",
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
          "id": "ssd-11-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Metrics, reporting, auditability\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind metrics, reporting, auditability, so there is no overlap",
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
    "epochId": "secure-sdlc",
    "id": "ssd-12",
    "order": 12,
    "title": "Post-quantum protection support",
    "subtitle": "Agentic technical & privacy audit of the post-quantum protection support control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 7,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Post-quantum protection support\" control for Secure Software Development is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the Secure Software Development policy/standard and flag every item where the \"Post-quantum protection support\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Secure Software Development systems of record (SAST / DAST / SCA tooling; Issue tracker (Jira); CI security gates) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the post-quantum protection support control (from SAST / DAST / SCA tooling)",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "SAST / DAST / SCA tooling",
        "Issue tracker (Jira)",
        "CI security gates",
        "Threat-model + design records"
      ],
      "dataOwner": [
        "Product engineering",
        "AppSec / Security champions",
        "QA",
        "Engineering leadership"
      ],
      "scoring": {
        "ease": "EASE 7/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Secure Software Development controls."
      }
    },
    "badge": {
      "id": "ssd-12-badge",
      "name": "Secure Software Development Auditor",
      "emoji": "🛡️"
    },
    "wonder": {
      "name": "Post-quantum protection support",
      "location": "Secure Software Development",
      "era": "Present Day",
      "emoji": "🛡️"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Post-quantum protection support\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the post-quantum protection support control (from SAST / DAST / SCA tooling)) with read-only agents, run the test against policy, and issue a defensible opinion on the Secure Software Development control.",
      "year": 2025,
      "overview": [
        "The \"Post-quantum protection support\" sub-process is one of the controls an auditor must verify for Secure Software Development. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the post-quantum protection support control (from SAST / DAST / SCA tooling), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here SAST / DAST / SCA tooling, Issue tracker (Jira), CI security gates — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the Secure Software Development policy/standard and flag every item where the \"Post-quantum protection support\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `12_post_quantum_protection_support_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from SAST / DAST / SCA tooling and Issue tracker (Jira) (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 12_post_quantum_protection_support_mcp.py` to expose it to your agent — or `python 12_post_quantum_protection_support_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Insecure design ships to production",
        "when": "Recurring",
        "where": "Software delivery lifecycles",
        "impact": "A class of vulnerability that a secure-SDLC gate is meant to stop reaches production because the gate was advisory, not enforced.",
        "body": [
          "When security testing is bolted on at the end — or is non-blocking — known-bad patterns ship anyway. Insecure design and unvalidated third-party code are the recurring root causes.",
          "The audit confirms security is built into requirements, design, coding standards, and enforced gates across the lifecycle, with evidence at each stage."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Secure Software Development scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull SAST / DAST / SCA tooling · Issue tracker (Jira)",
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
          "year": 2021,
          "event": "Log4Shell: a dependency flaw becomes everyone's incident",
          "highlight": true
        },
        {
          "year": 2021,
          "event": "OWASP Top 10 adds A04 Insecure Design + A06 Vulnerable Components"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Post-quantum protection support\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the post-quantum protection support control (from SAST / DAST / SCA tooling).",
        "The test: Reconcile the in-scope inventory against the Secure Software Development policy/standard and flag every item where the \"Post-quantum protection support\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (SAST / DAST / SCA tooling, Issue tracker (Jira), CI security gates) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the post-quantum protection support control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "NIST SSDF — SP 800-218",
          "url": "https://csrc.nist.gov/pubs/sp/800/218/final"
        },
        {
          "title": "OWASP SAMM",
          "url": "https://owaspsamm.org/"
        },
        {
          "title": "BSIMM",
          "url": "https://www.bsimm.com/"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "12_post_quantum_protection_support_mcp.py",
          "url": "/audit-code/secure-sdlc/12_post_quantum_protection_support_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Secure Software Development evidence for \"Post-quantum protection support\" (in-scope inventory for the post-quantum protection support control (from sast / dast / sca tooling)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Post-quantum protection support\" control for Secure Software Development at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the Secure Software Development policy/standard and flag every item where the \"Post-quantum protection support\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the post-quantum protection support control (from SAST / DAST / SCA tooling) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live SAST / DAST / SCA tooling APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. SAST / DAST / SCA tooling gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from SAST / DAST / SCA tooling; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Secure Software Development: \"Post-quantum protection support\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the Secure Software Development policy/standard and flag every item where the \"Post-quantum protection support\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- secure-sdlc_inventory.json   (in-scope items — In-scope inventory for the post-quantum protection support control (from SAST / DAST / SCA tooling))\n- secure-sdlc_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Post-quantum protection support\",\n  \"domain\": \"Secure Software Development\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{ssd_",
        "/evidence/secure-sdlc_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Product engineering\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Post-quantum protection support\" control must cover\n# fragment: postquantum_protection_support_",
        "/evidence/secure-sdlc_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "secure-sdlc_inventory.json",
            "isDir": false
          },
          {
            "name": "secure-sdlc_state.json",
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
          "value": "FLAG{ssd_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/secure-sdlc_inventory.json",
          "value": "postquantum_protection_support_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/secure-sdlc_state.json",
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
          "id": "ssd-12-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Post-quantum protection support\" sub-process of Secure Software Development?",
          "options": [
            "Deploy and operate the post-quantum protection support control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the post-quantum protection support control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for post-quantum protection support against comparable organisations in the sector",
            "Obtain evidence that the post-quantum protection support control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "ssd-12-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Post-quantum protection support\" matter to the broader Secure Software Development posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Secure Software Development",
            "It stops mattering once a firewall and endpoint agent are deployed across the Secure Software Development estate",
            "It is a control other Secure Software Development controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Secure Software Development controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "ssd-12-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Post-quantum protection support\" control?",
          "options": [
            "A point-in-time screenshot of one system's post-quantum protection support settings, captured during the walkthrough",
            "The In-scope inventory for the post-quantum protection support control (from SAST / DAST / SCA tooling), reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the post-quantum protection support control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's post-quantum protection support capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "ssd-12-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Post-quantum protection support\"?",
          "options": [
            "From SAST / DAST / SCA tooling and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how post-quantum protection support works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. SAST / DAST / SCA tooling) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "ssd-12-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Post-quantum protection support\"?",
          "options": [
            "The external audit firm, since it is the party examining the post-quantum protection support control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the post-quantum protection support data is shared, so the accountability sits with no one in particular",
            "Product engineering, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Product engineering owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "ssd-12-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Post-quantum protection support\", which part stays with the human auditor?",
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
          "id": "ssd-12-q7",
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
          "id": "ssd-12-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Post-quantum protection support\", which of these is a realistic reportable finding?",
          "options": [
            "In-scope items where the post-quantum protection support control is not applied, mis-scoped, or has drifted from the approved baseline",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the post-quantum protection support control is not applied, mis-scoped, or has drifted from the approved baseline A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "ssd-12-q9",
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
          "id": "ssd-12-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Post-quantum protection support\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind post-quantum protection support, so there is no overlap",
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
    "epochId": "secure-sdlc",
    "id": "ssd-13",
    "order": 13,
    "title": "AI model and system development and testing",
    "subtitle": "Agentic technical & privacy audit of the ai model and system development and testing control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 5,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"AI model and system development and testing\" control for Secure Software Development is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the Secure Software Development policy/standard and flag every item where the \"AI model and system development and testing\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Secure Software Development systems of record (SAST / DAST / SCA tooling; Issue tracker (Jira); CI security gates) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the ai model and system development and testing control (from SAST / DAST / SCA tooling)",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "SAST / DAST / SCA tooling",
        "Issue tracker (Jira)",
        "CI security gates",
        "Threat-model + design records"
      ],
      "dataOwner": [
        "Product engineering",
        "AppSec / Security champions",
        "QA",
        "Engineering leadership"
      ],
      "scoring": {
        "ease": "EASE 5/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Secure Software Development controls."
      }
    },
    "badge": {
      "id": "ssd-13-badge",
      "name": "Secure Software Development Auditor",
      "emoji": "🛡️"
    },
    "wonder": {
      "name": "AI model and system development and testing",
      "location": "Secure Software Development",
      "era": "Present Day",
      "emoji": "🛡️"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"AI model and system development and testing\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the ai model and system development and testing control (from SAST / DAST / SCA tooling)) with read-only agents, run the test against policy, and issue a defensible opinion on the Secure Software Development control.",
      "year": 2025,
      "overview": [
        "The \"AI model and system development and testing\" sub-process is one of the controls an auditor must verify for Secure Software Development. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the ai model and system development and testing control (from SAST / DAST / SCA tooling), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here SAST / DAST / SCA tooling, Issue tracker (Jira), CI security gates — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the Secure Software Development policy/standard and flag every item where the \"AI model and system development and testing\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `13_ai_model_and_system_development_and_testing_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from SAST / DAST / SCA tooling and Issue tracker (Jira) (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 13_ai_model_and_system_development_and_testing_mcp.py` to expose it to your agent — or `python 13_ai_model_and_system_development_and_testing_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Insecure design ships to production",
        "when": "Recurring",
        "where": "Software delivery lifecycles",
        "impact": "A class of vulnerability that a secure-SDLC gate is meant to stop reaches production because the gate was advisory, not enforced.",
        "body": [
          "When security testing is bolted on at the end — or is non-blocking — known-bad patterns ship anyway. Insecure design and unvalidated third-party code are the recurring root causes.",
          "The audit confirms security is built into requirements, design, coding standards, and enforced gates across the lifecycle, with evidence at each stage."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Secure Software Development scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull SAST / DAST / SCA tooling · Issue tracker (Jira)",
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
          "year": 2021,
          "event": "Log4Shell: a dependency flaw becomes everyone's incident",
          "highlight": true
        },
        {
          "year": 2021,
          "event": "OWASP Top 10 adds A04 Insecure Design + A06 Vulnerable Components"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"AI model and system development and testing\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the ai model and system development and testing control (from SAST / DAST / SCA tooling).",
        "The test: Reconcile the in-scope inventory against the Secure Software Development policy/standard and flag every item where the \"AI model and system development and testing\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (SAST / DAST / SCA tooling, Issue tracker (Jira), CI security gates) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the ai model and system development and testing control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "NIST SSDF — SP 800-218",
          "url": "https://csrc.nist.gov/pubs/sp/800/218/final"
        },
        {
          "title": "OWASP SAMM",
          "url": "https://owaspsamm.org/"
        },
        {
          "title": "BSIMM",
          "url": "https://www.bsimm.com/"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "13_ai_model_and_system_development_and_testing_mcp.py",
          "url": "/audit-code/secure-sdlc/13_ai_model_and_system_development_and_testing_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Secure Software Development evidence for \"AI model and system development and testing\" (in-scope inventory for the ai model and system development and testing control (from sast / dast / sca tooling)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"AI model and system development and testing\" control for Secure Software Development at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the Secure Software Development policy/standard and flag every item where the \"AI model and system development and testing\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the ai model and system development and testing control (from SAST / DAST / SCA tooling) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live SAST / DAST / SCA tooling APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. SAST / DAST / SCA tooling gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from SAST / DAST / SCA tooling; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Secure Software Development: \"AI model and system development and testing\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the Secure Software Development policy/standard and flag every item where the \"AI model and system development and testing\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- secure-sdlc_inventory.json   (in-scope items — In-scope inventory for the ai model and system development and testing control (from SAST / DAST / SCA tooling))\n- secure-sdlc_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"AI model and system development and testing\",\n  \"domain\": \"Secure Software Development\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{ssd_",
        "/evidence/secure-sdlc_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Product engineering\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"AI model and system development and testing\" control must cover\n# fragment: ai_model_system_",
        "/evidence/secure-sdlc_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "secure-sdlc_inventory.json",
            "isDir": false
          },
          {
            "name": "secure-sdlc_state.json",
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
          "value": "FLAG{ssd_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/secure-sdlc_inventory.json",
          "value": "ai_model_system_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/secure-sdlc_state.json",
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
          "id": "ssd-13-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"AI model and system development and testing\" sub-process of Secure Software Development?",
          "options": [
            "Deploy and operate the ai model and system development and testing control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the ai model and system development and testing control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for ai model and system development and testing against comparable organisations in the sector",
            "Obtain evidence that the ai model and system development and testing control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "ssd-13-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"AI model and system development and testing\" matter to the broader Secure Software Development posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Secure Software Development",
            "It stops mattering once a firewall and endpoint agent are deployed across the Secure Software Development estate",
            "It is a control other Secure Software Development controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Secure Software Development controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "ssd-13-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"AI model and system development and testing\" control?",
          "options": [
            "A point-in-time screenshot of one system's ai model and system development and testing settings, captured during the walkthrough",
            "The In-scope inventory for the ai model and system development and testing control (from SAST / DAST / SCA tooling), reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the ai model and system development and testing control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's ai model and system development and testing capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "ssd-13-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"AI model and system development and testing\"?",
          "options": [
            "From SAST / DAST / SCA tooling and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how ai model and system development and testing works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. SAST / DAST / SCA tooling) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "ssd-13-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"AI model and system development and testing\"?",
          "options": [
            "The external audit firm, since it is the party examining the ai model and system development and testing control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the ai model and system development and testing data is shared, so the accountability sits with no one in particular",
            "Product engineering, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Product engineering owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "ssd-13-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"AI model and system development and testing\", which part stays with the human auditor?",
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
          "id": "ssd-13-q7",
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
          "id": "ssd-13-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"AI model and system development and testing\", which of these is a realistic reportable finding?",
          "options": [
            "In-scope items where the ai model and system development and testing control is not applied, mis-scoped, or has drifted from the approved baseline",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the ai model and system development and testing control is not applied, mis-scoped, or has drifted from the approved baseline A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "ssd-13-q9",
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
          "id": "ssd-13-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"AI model and system development and testing\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind ai model and system development and testing, so there is no overlap",
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

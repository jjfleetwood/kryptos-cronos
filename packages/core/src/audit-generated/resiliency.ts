import type { EpochConfig, StageConfig } from "../types";

export const resiliencyEpoch: EpochConfig = {
  "id": "resiliency",
  "name": "Resiliency & Redundancy",
  "subtitle": "Agentic technical & privacy audit — Resiliency & Redundancy",
  "description": "Audit Resiliency & Redundancy end to end with a read-only agent fleet: each sub-process is a module that teaches the control as a repeatable agentic workflow with downloadable MCP tooling, a CTF, and a 10-question quiz.",
  "emoji": "♻️",
  "color": "Green",
  "unlocked": true
};

export const resiliencyStages: StageConfig[] = [
  {
    "epochId": "resiliency",
    "id": "res-01",
    "order": 1,
    "title": "BCP, BIA, ITDR",
    "subtitle": "Agentic technical & privacy audit of the bcp, bia, itdr control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 5,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"BCP, BIA, ITDR\" control for Resiliency & Redundancy is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify the org has a current, BIA-driven continuity + DR capability. PASS: a BIA defines critical processes/systems with RTO/RPO + dependencies; BCP + ITDR plans exist, are current, owned, and approved; recovery priorities align to the BIA; and coverage spans the critical estate. Exceptions: no/stale BIA, no BCP/ITDR (or covering only some systems), RTO/RPO undefined or not driven by impact, and plans that don't match the current architecture/dependencies.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Resiliency & Redundancy systems of record (BCP/DR tooling (Fusion / Archer BC) or documented plans; The BIA; CMDB (criticality + dependencies)) as tools — e.g. `the BIA: critical processes + systems + RTO/RPO + dependencies + max t`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The Business Impact Analysis (BIA) — critical processes/systems with RTO/RPO + dependencies + max tolerable downtime",
        "The Business Continuity Plan (BCP) + IT Disaster Recovery (ITDR) plans + their currency",
        "Evidence the BCP/ITDR is approved, owned, and aligned to the BIA (recovery priorities match criticality)",
        "Coverage: critical systems with a documented, current DR plan vs total"
      ],
      "system": [
        "BCP/DR tooling (Fusion / Archer BC) or documented plans",
        "The BIA",
        "CMDB (criticality + dependencies)"
      ],
      "dataOwner": [
        "Business Continuity / DR",
        "Business process owners (BIA)",
        "IT / infra (ITDR)"
      ],
      "scoring": {
        "ease": "EASE 5/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Resiliency & Redundancy controls."
      }
    },
    "badge": {
      "id": "res-01-badge",
      "name": "Resiliency & Redundancy Auditor",
      "emoji": "♻️"
    },
    "wonder": {
      "name": "BCP, BIA, ITDR",
      "location": "Resiliency & Redundancy",
      "era": "Present Day",
      "emoji": "♻️"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"BCP, BIA, ITDR\" as a repeatable agentic workflow: pull the real evidence (The Business Impact Analysis (BIA) — critical processes/systems with RTO/RPO + dependencies + max tolerable downtime) with read-only agents, run the test against policy, and issue a defensible opinion on the Resiliency & Redundancy control.",
      "year": 2025,
      "overview": [
        "The \"BCP, BIA, ITDR\" sub-process is one of the controls an auditor must verify for Resiliency & Redundancy. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the Business Impact Analysis (BIA) — critical processes/systems with RTO/RPO + dependencies + max tolerable downtime, for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here BCP/DR tooling (Fusion / Archer BC) or documented plans, The BIA, CMDB (criticality + dependencies) — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `the BIA: critical processes + systems + RTO/RPO + dependencies + max tolerable d` — read-only, against the systems of record.",
        "The test itself is specific. Verify the org has a current, BIA-driven continuity + DR capability. PASS: a BIA defines critical processes/systems with RTO/RPO + dependencies; BCP + ITDR plans exist, are current, owned, and approved; recovery priorities align to the BIA; and coverage spans the critical estate. Exceptions: no/stale BIA, no BCP/ITDR (or covering only some systems), RTO/RPO undefined or not driven by impact, and plans that don't match the current architecture/dependencies. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `01_bcp_bia_itdr_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from BCP/DR tooling (Fusion / Archer BC) or documented plans and The BIA (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 01_bcp_bia_itdr_mcp.py` to expose it to your agent — or `python 01_bcp_bia_itdr_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Backups that didn't restore",
        "when": "Recurring",
        "where": "DR and continuity programs",
        "impact": "An organization discovers during a real incident that its failover, backups, or runbooks don't work as assumed — extending the outage.",
        "body": [
          "Resilience fails when it's never tested: backups that won't restore, a DR site missing a dependency, or runbooks no one has rehearsed.",
          "Auditors verify BCP/BIA/ITDR, backup and restore testing, failover procedures, replication, and multi-region/HA architecture against stated RTO/RPO."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Resiliency & Redundancy scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull BCP/DR tooling (Fusion / Archer BC) or documented plans · The BIA",
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
          "event": "OVHcloud fire destroys servers + some customers' only backups",
          "highlight": true
        },
        {
          "year": 2024,
          "event": "Mass outage shows untested recovery extends downtime for days"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"BCP, BIA, ITDR\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "the BIA: critical processes + systems + RTO/RPO + dependencies + max tolerable downtime\nBCP + ITDR plans: current, approved, owned?\ndo recovery priorities in the plan match the BIA criticality?\ncoverage: critical systems with a current DR plan vs total"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The Business Impact Analysis (BIA) — critical processes/systems with RTO/RPO + dependencies + max tolerable downtime.",
        "The test: Verify the org has a current, BIA-driven continuity + DR capability.",
        "Reconcile the systems of record (BCP/DR tooling (Fusion / Archer BC) or documented plans, The BIA, CMDB (criticality + dependencies)) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. The BIA is four years old and predates half the current systems; ITDR plans exist for the data center but not for the cloud workloads that now run the business, and RTO/RPO are aspirational numbers no one validated."
      ],
      "references": [
        {
          "title": "ISO 22301",
          "url": "https://www.iso.org/standard/75106.html"
        },
        {
          "title": "NIST SP 800-34",
          "url": "https://csrc.nist.gov/pubs/sp/800/34/r1/final"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "01_bcp_bia_itdr_mcp.py",
          "url": "/audit-code/resiliency/01_bcp_bia_itdr_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Resiliency & Redundancy evidence for \"BCP, BIA, ITDR\" (the business impact analysis (bia) — critical processes/systems with rto/rpo + dependencies + max tolerable downtime), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"BCP, BIA, ITDR\" control for Resiliency & Redundancy at AcmeCorp. THE TEST: Verify the org has a current, BIA-driven continuity + DR capability. PASS: a BIA defines critical processes/systems with RTO/RPO + dependencies; BCP + ITDR plans exist, are current, owned, and approved; recovery priorities align to the BIA; and coverage spans the critical estate. Exceptions: no/stale BIA, no BCP/ITDR (or covering only some systems), RTO/RPO undefined or not driven by impact, and plans that don't match the current architecture/dependencies. The evidence — The Business Impact Analysis (BIA) — critical processes/systems with RTO/RPO + dependencies + max tolerable downtime — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live BCP/DR tooling (Fusion / Archer BC) or documented plans APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. BCP/DR tooling (Fusion / Archer BC) or documented plans gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from BCP/DR tooling (Fusion / Archer BC) or documented plans; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Resiliency & Redundancy: \"BCP, BIA, ITDR\" Audit Evidence\n\nThe test:\nVerify the org has a current, BIA-driven continuity + DR capability. PASS: a BIA defines critical processes/systems with RTO/RPO + dependencies; BCP + ITDR plans exist, are current, owned, and approved; recovery priorities align to the BIA; and coverage spans the critical estate. Exceptions: no/stale BIA, no BCP/ITDR (or covering only some systems), RTO/RPO undefined or not driven by impact, and plans that don't match the current architecture/dependencies.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- resiliency_inventory.json   (in-scope items — The Business Impact Analysis (BIA) — critical processes/systems with RTO/RPO + dependencies + max tolerable downtime)\n- resiliency_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"BCP, BIA, ITDR\",\n  \"domain\": \"Resiliency & Redundancy\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{res_",
        "/evidence/resiliency_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Business Continuity / DR\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"BCP, BIA, ITDR\" control must cover\n# fragment: bcp_bia_itdr_",
        "/evidence/resiliency_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "resiliency_inventory.json",
            "isDir": false
          },
          {
            "name": "resiliency_state.json",
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
          "value": "FLAG{res_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/resiliency_inventory.json",
          "value": "bcp_bia_itdr_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/resiliency_state.json",
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
          "id": "res-01-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"BCP, BIA, ITDR\" sub-process of Resiliency & Redundancy?",
          "options": [
            "Deploy and operate the bcp, bia, itdr control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the bcp, bia, itdr control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for bcp, bia, itdr against comparable organisations in the sector",
            "Obtain evidence that the bcp, bia, itdr control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "res-01-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"BCP, BIA, ITDR\" matter to the broader Resiliency & Redundancy posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Resiliency & Redundancy",
            "It stops mattering once a firewall and endpoint agent are deployed across the Resiliency & Redundancy estate",
            "It is a control other Resiliency & Redundancy controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Resiliency & Redundancy controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "res-01-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"BCP, BIA, ITDR\" control?",
          "options": [
            "A point-in-time screenshot of one system's bcp, bia, itdr settings, captured during the walkthrough",
            "The The Business Impact Analysis (BIA) — critical processes/systems with RTO/RPO + dependencies + max tolerable downtime, reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the bcp, bia, itdr control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's bcp, bia, itdr capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "res-01-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"BCP, BIA, ITDR\"?",
          "options": [
            "From BCP/DR tooling (Fusion / Archer BC) or documented plans and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how bcp, bia, itdr works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. BCP/DR tooling (Fusion / Archer BC) or documented plans) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "res-01-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"BCP, BIA, ITDR\"?",
          "options": [
            "The external audit firm, since it is the party examining the bcp, bia, itdr control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the bcp, bia, itdr data is shared, so the accountability sits with no one in particular",
            "Business Continuity / DR, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Business Continuity / DR owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "res-01-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"BCP, BIA, ITDR\", which part stays with the human auditor?",
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
          "id": "res-01-q7",
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
          "id": "res-01-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"BCP, BIA, ITDR\", which of these is a realistic reportable finding?",
          "options": [
            "The BIA is four years old and predates half the current systems; ITDR plans exist for the data center but not for the cloud workloads that now run the business, and RTO/RPO are aspirational numbers no one validated.",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. The BIA is four years old and predates half the current systems; ITDR plans exist for the data center but not for the cloud workloads that now run the business, and RTO/RPO are aspirational numbers no one validated. A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "res-01-q9",
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
          "id": "res-01-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"BCP, BIA, ITDR\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind bcp, bia, itdr, so there is no overlap",
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
    "epochId": "resiliency",
    "id": "res-02",
    "order": 2,
    "title": "Supplier and vendor resilience",
    "subtitle": "Agentic technical & privacy audit of the supplier and vendor resilience control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 6,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Supplier and vendor resilience\" control for Resiliency & Redundancy is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify the org's resilience isn't undermined by its suppliers. PASS: recovery-critical suppliers are identified with their BCP/resilience evidence; contracts carry availability + recovery commitments + exit/escrow; concentration/single-supplier risk is assessed; and there's a contingency if a critical supplier fails (especially during a broader disaster). Exceptions: recovery depends on suppliers with no BCP evidence, no continuity/exit terms, unmitigated single-supplier concentration, and no contingency for supplier failure.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Resiliency & Redundancy systems of record (TPRM (supplier resilience); Contracts (continuity / exit terms); The BCP supplier-dependency view) as tools — e.g. `map recovery-critical suppliers + their BCP/resilience attestations + `, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The critical-supplier dependency map (which vendors a recovery depends on) + their resilience/BCP attestations",
        "Contractual continuity terms (availability, recovery commitments, exit/escrow)",
        "Concentration + single-supplier risk analysis for recovery-critical services",
        "Contingency for losing a critical supplier during a disaster"
      ],
      "system": [
        "TPRM (supplier resilience)",
        "Contracts (continuity / exit terms)",
        "The BCP supplier-dependency view"
      ],
      "dataOwner": [
        "Business continuity + vendor risk",
        "Procurement",
        "Service owners"
      ],
      "scoring": {
        "ease": "EASE 6/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Resiliency & Redundancy controls."
      }
    },
    "badge": {
      "id": "res-02-badge",
      "name": "Resiliency & Redundancy Auditor",
      "emoji": "♻️"
    },
    "wonder": {
      "name": "Supplier and vendor resilience",
      "location": "Resiliency & Redundancy",
      "era": "Present Day",
      "emoji": "♻️"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Supplier and vendor resilience\" as a repeatable agentic workflow: pull the real evidence (The critical-supplier dependency map (which vendors a recovery depends on) + their resilience/BCP attestations) with read-only agents, run the test against policy, and issue a defensible opinion on the Resiliency & Redundancy control.",
      "year": 2025,
      "overview": [
        "The \"Supplier and vendor resilience\" sub-process is one of the controls an auditor must verify for Resiliency & Redundancy. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the critical-supplier dependency map (which vendors a recovery depends on) + their resilience/BCP attestations, for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here TPRM (supplier resilience), Contracts (continuity / exit terms), The BCP supplier-dependency view — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `map recovery-critical suppliers + their BCP/resilience attestations + tested RTO` — read-only, against the systems of record.",
        "The test itself is specific. Verify the org's resilience isn't undermined by its suppliers. PASS: recovery-critical suppliers are identified with their BCP/resilience evidence; contracts carry availability + recovery commitments + exit/escrow; concentration/single-supplier risk is assessed; and there's a contingency if a critical supplier fails (especially during a broader disaster). Exceptions: recovery depends on suppliers with no BCP evidence, no continuity/exit terms, unmitigated single-supplier concentration, and no contingency for supplier failure. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `02_supplier_and_vendor_resilience_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from TPRM (supplier resilience) and Contracts (continuity / exit terms) (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 02_supplier_and_vendor_resilience_mcp.py` to expose it to your agent — or `python 02_supplier_and_vendor_resilience_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Backups that didn't restore",
        "when": "Recurring",
        "where": "DR and continuity programs",
        "impact": "An organization discovers during a real incident that its failover, backups, or runbooks don't work as assumed — extending the outage.",
        "body": [
          "Resilience fails when it's never tested: backups that won't restore, a DR site missing a dependency, or runbooks no one has rehearsed.",
          "Auditors verify BCP/BIA/ITDR, backup and restore testing, failover procedures, replication, and multi-region/HA architecture against stated RTO/RPO."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Resiliency & Redundancy scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull TPRM (supplier resilience) · Contracts (continuity / exit terms)",
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
          "event": "OVHcloud fire destroys servers + some customers' only backups",
          "highlight": true
        },
        {
          "year": 2024,
          "event": "Mass outage shows untested recovery extends downtime for days"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Supplier and vendor resilience\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "map recovery-critical suppliers + their BCP/resilience attestations + tested RTO/RPO\ncontractual continuity terms (availability, recovery, exit/escrow)\nconcentration: single-supplier dependence for recovery-critical services\ncontingency for losing a critical supplier during a disaster"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The critical-supplier dependency map (which vendors a recovery depends on) + their resilience/BCP attestations.",
        "The test: Verify the org's resilience isn't undermined by its suppliers.",
        "Reconcile the systems of record (TPRM (supplier resilience), Contracts (continuity / exit terms), The BCP supplier-dependency view) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. DR for the core platform depends on a single SaaS vendor with no BCP evidence and no exit plan; if that vendor is down during the org's own incident, there is no recovery path."
      ],
      "references": [
        {
          "title": "ISO 22301",
          "url": "https://www.iso.org/standard/75106.html"
        },
        {
          "title": "NIST SP 800-161",
          "url": "https://csrc.nist.gov/pubs/sp/800/161/r1/final"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "02_supplier_and_vendor_resilience_mcp.py",
          "url": "/audit-code/resiliency/02_supplier_and_vendor_resilience_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Resiliency & Redundancy evidence for \"Supplier and vendor resilience\" (the critical-supplier dependency map (which vendors a recovery depends on) + their resilience/bcp attestations), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Supplier and vendor resilience\" control for Resiliency & Redundancy at AcmeCorp. THE TEST: Verify the org's resilience isn't undermined by its suppliers. PASS: recovery-critical suppliers are identified with their BCP/resilience evidence; contracts carry availability + recovery commitments + exit/escrow; concentration/single-supplier risk is assessed; and there's a contingency if a critical supplier fails (especially during a broader disaster). Exceptions: recovery depends on suppliers with no BCP evidence, no continuity/exit terms, unmitigated single-supplier concentration, and no contingency for supplier failure. The evidence — The critical-supplier dependency map (which vendors a recovery depends on) + their resilience/BCP attestations — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live TPRM (supplier resilience) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. TPRM (supplier resilience) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from TPRM (supplier resilience); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Resiliency & Redundancy: \"Supplier and vendor resilience\" Audit Evidence\n\nThe test:\nVerify the org's resilience isn't undermined by its suppliers. PASS: recovery-critical suppliers are identified with their BCP/resilience evidence; contracts carry availability + recovery commitments + exit/escrow; concentration/single-supplier risk is assessed; and there's a contingency if a critical supplier fails (especially during a broader disaster). Exceptions: recovery depends on suppliers with no BCP evidence, no continuity/exit terms, unmitigated single-supplier concentration, and no contingency for supplier failure.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- resiliency_inventory.json   (in-scope items — The critical-supplier dependency map (which vendors a recovery depends on) + their resilience/BCP attestations)\n- resiliency_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Supplier and vendor resilience\",\n  \"domain\": \"Resiliency & Redundancy\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{res_",
        "/evidence/resiliency_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Business Continuity / DR\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Supplier and vendor resilience\" control must cover\n# fragment: supplier_vendor_resilience_",
        "/evidence/resiliency_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "resiliency_inventory.json",
            "isDir": false
          },
          {
            "name": "resiliency_state.json",
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
          "value": "FLAG{res_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/resiliency_inventory.json",
          "value": "supplier_vendor_resilience_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/resiliency_state.json",
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
          "id": "res-02-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Supplier and vendor resilience\" sub-process of Resiliency & Redundancy?",
          "options": [
            "Deploy and operate the supplier and vendor resilience control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the supplier and vendor resilience control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for supplier and vendor resilience against comparable organisations in the sector",
            "Obtain evidence that the supplier and vendor resilience control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "res-02-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Supplier and vendor resilience\" matter to the broader Resiliency & Redundancy posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Resiliency & Redundancy",
            "It stops mattering once a firewall and endpoint agent are deployed across the Resiliency & Redundancy estate",
            "It is a control other Resiliency & Redundancy controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Resiliency & Redundancy controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "res-02-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Supplier and vendor resilience\" control?",
          "options": [
            "A point-in-time screenshot of one system's supplier and vendor resilience settings, captured during the walkthrough",
            "The The critical-supplier dependency map (which vendors a recovery depends on) + their resilience/BCP attestations, reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the supplier and vendor resilience control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's supplier and vendor resilience capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "res-02-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Supplier and vendor resilience\"?",
          "options": [
            "From TPRM (supplier resilience) and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how supplier and vendor resilience works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. TPRM (supplier resilience)) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "res-02-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Supplier and vendor resilience\"?",
          "options": [
            "The external audit firm, since it is the party examining the supplier and vendor resilience control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the supplier and vendor resilience data is shared, so the accountability sits with no one in particular",
            "Business continuity + vendor risk, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Business continuity + vendor risk owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "res-02-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Supplier and vendor resilience\", which part stays with the human auditor?",
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
          "id": "res-02-q7",
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
          "id": "res-02-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Supplier and vendor resilience\", which of these is a realistic reportable finding?",
          "options": [
            "DR for the core platform depends on a single SaaS vendor with no BCP evidence and no exit plan; if that vendor is down during the org's own incident, there is no recovery path.",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. DR for the core platform depends on a single SaaS vendor with no BCP evidence and no exit plan; if that vendor is down during the org's own incident, there is no recovery path. A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "res-02-q9",
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
          "id": "res-02-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Supplier and vendor resilience\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind supplier and vendor resilience, so there is no overlap",
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
    "epochId": "resiliency",
    "id": "res-03",
    "order": 3,
    "title": "Tabletop and BCP/DR testing",
    "subtitle": "Agentic technical & privacy audit of the tabletop and bcp/dr testing control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 7,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Tabletop and BCP/DR testing\" control for Resiliency & Redundancy is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify continuity + DR are tested, not just documented. PASS: BCP/DR is tested on a defined cadence including realistic exercises (actual failover/restore, not only tabletops); tests measure actual RTO/RPO vs target; findings are remediated; and critical systems have been successfully recovered in a test. Exceptions: no DR testing, only paper tabletops (never an actual failover), tests that failed to meet RTO/RPO with no remediation, and critical systems never test-recovered.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Resiliency & Redundancy systems of record (DR test records + runbooks; The DR environment (for failover tests); Findings / remediation tracker) as tools — e.g. `DR/BCP test schedule + records: scope, type (tabletop vs full failover`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The DR/BCP test schedule + the test records (date, scope, type — tabletop vs full failover, participants, results)",
        "Test results vs target RTO/RPO (did recovery actually meet the objectives)",
        "The findings/gaps from tests + their remediation tracking",
        "Evidence tests are realistic (full failover/restore, not just a walkthrough)"
      ],
      "system": [
        "DR test records + runbooks",
        "The DR environment (for failover tests)",
        "Findings / remediation tracker"
      ],
      "dataOwner": [
        "Business continuity / DR",
        "IT / infra (executes tests)",
        "Service owners"
      ],
      "scoring": {
        "ease": "EASE 7/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Resiliency & Redundancy controls."
      }
    },
    "badge": {
      "id": "res-03-badge",
      "name": "Resiliency & Redundancy Auditor",
      "emoji": "♻️"
    },
    "wonder": {
      "name": "Tabletop and BCP/DR testing",
      "location": "Resiliency & Redundancy",
      "era": "Present Day",
      "emoji": "♻️"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Tabletop and BCP/DR testing\" as a repeatable agentic workflow: pull the real evidence (The DR/BCP test schedule + the test records (date, scope, type — tabletop vs full failover, participants, results)) with read-only agents, run the test against policy, and issue a defensible opinion on the Resiliency & Redundancy control.",
      "year": 2025,
      "overview": [
        "The \"Tabletop and BCP/DR testing\" sub-process is one of the controls an auditor must verify for Resiliency & Redundancy. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the DR/BCP test schedule + the test records (date, scope, type — tabletop vs full failover, participants, results), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here DR test records + runbooks, The DR environment (for failover tests), Findings / remediation tracker — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `DR/BCP test schedule + records: scope, type (tabletop vs full failover), partici` — read-only, against the systems of record.",
        "The test itself is specific. Verify continuity + DR are tested, not just documented. PASS: BCP/DR is tested on a defined cadence including realistic exercises (actual failover/restore, not only tabletops); tests measure actual RTO/RPO vs target; findings are remediated; and critical systems have been successfully recovered in a test. Exceptions: no DR testing, only paper tabletops (never an actual failover), tests that failed to meet RTO/RPO with no remediation, and critical systems never test-recovered. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `03_tabletop_and_bcp_dr_testing_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from DR test records + runbooks and The DR environment (for failover tests) (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 03_tabletop_and_bcp_dr_testing_mcp.py` to expose it to your agent — or `python 03_tabletop_and_bcp_dr_testing_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Backups that didn't restore",
        "when": "Recurring",
        "where": "DR and continuity programs",
        "impact": "An organization discovers during a real incident that its failover, backups, or runbooks don't work as assumed — extending the outage.",
        "body": [
          "Resilience fails when it's never tested: backups that won't restore, a DR site missing a dependency, or runbooks no one has rehearsed.",
          "Auditors verify BCP/BIA/ITDR, backup and restore testing, failover procedures, replication, and multi-region/HA architecture against stated RTO/RPO."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Resiliency & Redundancy scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull DR test records + runbooks · The DR environment (for failover tests)",
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
          "event": "OVHcloud fire destroys servers + some customers' only backups",
          "highlight": true
        },
        {
          "year": 2024,
          "event": "Mass outage shows untested recovery extends downtime for days"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Tabletop and BCP/DR testing\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "DR/BCP test schedule + records: scope, type (tabletop vs full failover), participants, results\nactual RTO/RPO achieved in tests vs target\ntest findings + remediation tracking\nevidence of realistic tests (failover/restore actually performed)"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The DR/BCP test schedule + the test records (date, scope, type — tabletop vs full failover, participants, results).",
        "The test: Verify continuity + DR are tested, not just documented.",
        "Reconcile the systems of record (DR test records + runbooks, The DR environment (for failover tests), Findings / remediation tracker) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. DR 'testing' is an annual tabletop discussion — no actual failover has ever been performed, so the documented 4-hour RTO is untested, and a recent real outage took 18 hours because the runbooks didn't work."
      ],
      "references": [
        {
          "title": "ISO 22301",
          "url": "https://www.iso.org/standard/75106.html"
        },
        {
          "title": "NIST SP 800-34",
          "url": "https://csrc.nist.gov/pubs/sp/800/34/r1/final"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "03_tabletop_and_bcp_dr_testing_mcp.py",
          "url": "/audit-code/resiliency/03_tabletop_and_bcp_dr_testing_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Resiliency & Redundancy evidence for \"Tabletop and BCP/DR testing\" (the dr/bcp test schedule + the test records (date, scope, type — tabletop vs full failover, participants, results)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Tabletop and BCP/DR testing\" control for Resiliency & Redundancy at AcmeCorp. THE TEST: Verify continuity + DR are tested, not just documented. PASS: BCP/DR is tested on a defined cadence including realistic exercises (actual failover/restore, not only tabletops); tests measure actual RTO/RPO vs target; findings are remediated; and critical systems have been successfully recovered in a test. Exceptions: no DR testing, only paper tabletops (never an actual failover), tests that failed to meet RTO/RPO with no remediation, and critical systems never test-recovered. The evidence — The DR/BCP test schedule + the test records (date, scope, type — tabletop vs full failover, participants, results) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live DR test records + runbooks APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. DR test records + runbooks gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from DR test records + runbooks; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Resiliency & Redundancy: \"Tabletop and BCP/DR testing\" Audit Evidence\n\nThe test:\nVerify continuity + DR are tested, not just documented. PASS: BCP/DR is tested on a defined cadence including realistic exercises (actual failover/restore, not only tabletops); tests measure actual RTO/RPO vs target; findings are remediated; and critical systems have been successfully recovered in a test. Exceptions: no DR testing, only paper tabletops (never an actual failover), tests that failed to meet RTO/RPO with no remediation, and critical systems never test-recovered.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- resiliency_inventory.json   (in-scope items — The DR/BCP test schedule + the test records (date, scope, type — tabletop vs full failover, participants, results))\n- resiliency_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Tabletop and BCP/DR testing\",\n  \"domain\": \"Resiliency & Redundancy\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{res_",
        "/evidence/resiliency_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Business Continuity / DR\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Tabletop and BCP/DR testing\" control must cover\n# fragment: tabletop_bcpdr_testing_",
        "/evidence/resiliency_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "resiliency_inventory.json",
            "isDir": false
          },
          {
            "name": "resiliency_state.json",
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
          "value": "FLAG{res_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/resiliency_inventory.json",
          "value": "tabletop_bcpdr_testing_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/resiliency_state.json",
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
          "id": "res-03-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Tabletop and BCP/DR testing\" sub-process of Resiliency & Redundancy?",
          "options": [
            "Deploy and operate the tabletop and bcp/dr testing control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the tabletop and bcp/dr testing control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for tabletop and bcp/dr testing against comparable organisations in the sector",
            "Obtain evidence that the tabletop and bcp/dr testing control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "res-03-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Tabletop and BCP/DR testing\" matter to the broader Resiliency & Redundancy posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Resiliency & Redundancy",
            "It stops mattering once a firewall and endpoint agent are deployed across the Resiliency & Redundancy estate",
            "It is a control other Resiliency & Redundancy controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Resiliency & Redundancy controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "res-03-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Tabletop and BCP/DR testing\" control?",
          "options": [
            "A point-in-time screenshot of one system's tabletop and bcp/dr testing settings, captured during the walkthrough",
            "The The DR/BCP test schedule + the test records (date, scope, type — tabletop vs full failover, participants, results), reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the tabletop and bcp/dr testing control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's tabletop and bcp/dr testing capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "res-03-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Tabletop and BCP/DR testing\"?",
          "options": [
            "From DR test records + runbooks and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how tabletop and bcp/dr testing works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. DR test records + runbooks) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "res-03-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Tabletop and BCP/DR testing\"?",
          "options": [
            "The external audit firm, since it is the party examining the tabletop and bcp/dr testing control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the tabletop and bcp/dr testing data is shared, so the accountability sits with no one in particular",
            "Business continuity / DR, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Business continuity / DR owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "res-03-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Tabletop and BCP/DR testing\", which part stays with the human auditor?",
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
          "id": "res-03-q7",
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
          "id": "res-03-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Tabletop and BCP/DR testing\", which of these is a realistic reportable finding?",
          "options": [
            "DR 'testing' is an annual tabletop discussion — no actual failover has ever been performed, so the documented 4-hour RTO is untested, and a recent real outage took 18 hours because the runbooks didn't work.",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. DR 'testing' is an annual tabletop discussion — no actual failover has ever been performed, so the documented 4-hour RTO is untested, and a recent real outage took 18 hours because the runbooks didn't work. A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "res-03-q9",
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
          "id": "res-03-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Tabletop and BCP/DR testing\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind tabletop and bcp/dr testing, so there is no overlap",
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
    "epochId": "resiliency",
    "id": "res-04",
    "order": 4,
    "title": "DR site strategy",
    "subtitle": "Agentic technical & privacy audit of the dr site strategy control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 5,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"DR site strategy\" control for Resiliency & Redundancy is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify the DR strategy matches the recovery objectives. PASS: each critical system has a DR-site strategy (hot/warm/cold/active-active) justified against its RTO/RPO; the DR site/region is independent (no shared dependency with primary), provisioned, and current; it has the capacity to run production load; and it's secured to the same standard. Exceptions: a DR strategy that can't meet RTO/RPO (cold site for a tier-1 system), a DR site sharing fate with primary (same region/power/dependency), insufficient DR capacity, and a weaker security posture at DR.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Resiliency & Redundancy systems of record (The DR site/region (secondary DC or cloud region); Replication + provisioning (IaC); Capacity + security config at DR) as tools — e.g. `per critical system: DR strategy (hot/warm/cold/active-active) vs its `, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The DR-site strategy (hot/warm/cold, cloud DR, or active-active) per critical system + its rationale vs RTO/RPO",
        "Evidence the DR site/region is provisioned, current, and independent of the primary (no shared fate)",
        "Capacity of the DR site (can it actually run production load)",
        "The DR-site security posture (same controls as production)"
      ],
      "system": [
        "The DR site/region (secondary DC or cloud region)",
        "Replication + provisioning (IaC)",
        "Capacity + security config at DR"
      ],
      "dataOwner": [
        "IT / infra + business continuity",
        "Cloud platform",
        "Security"
      ],
      "scoring": {
        "ease": "EASE 5/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Resiliency & Redundancy controls."
      }
    },
    "badge": {
      "id": "res-04-badge",
      "name": "Resiliency & Redundancy Auditor",
      "emoji": "♻️"
    },
    "wonder": {
      "name": "DR site strategy",
      "location": "Resiliency & Redundancy",
      "era": "Present Day",
      "emoji": "♻️"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"DR site strategy\" as a repeatable agentic workflow: pull the real evidence (The DR-site strategy (hot/warm/cold, cloud DR, or active-active) per critical system + its rationale vs RTO/RPO) with read-only agents, run the test against policy, and issue a defensible opinion on the Resiliency & Redundancy control.",
      "year": 2025,
      "overview": [
        "The \"DR site strategy\" sub-process is one of the controls an auditor must verify for Resiliency & Redundancy. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the DR-site strategy (hot/warm/cold, cloud DR, or active-active) per critical system + its rationale vs RTO/RPO, for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here The DR site/region (secondary DC or cloud region), Replication + provisioning (IaC), Capacity + security config at DR — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `per critical system: DR strategy (hot/warm/cold/active-active) vs its RTO/RPO` — read-only, against the systems of record.",
        "The test itself is specific. Verify the DR strategy matches the recovery objectives. PASS: each critical system has a DR-site strategy (hot/warm/cold/active-active) justified against its RTO/RPO; the DR site/region is independent (no shared dependency with primary), provisioned, and current; it has the capacity to run production load; and it's secured to the same standard. Exceptions: a DR strategy that can't meet RTO/RPO (cold site for a tier-1 system), a DR site sharing fate with primary (same region/power/dependency), insufficient DR capacity, and a weaker security posture at DR. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `04_dr_site_strategy_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from The DR site/region (secondary DC or cloud region) and Replication + provisioning (IaC) (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 04_dr_site_strategy_mcp.py` to expose it to your agent — or `python 04_dr_site_strategy_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Backups that didn't restore",
        "when": "Recurring",
        "where": "DR and continuity programs",
        "impact": "An organization discovers during a real incident that its failover, backups, or runbooks don't work as assumed — extending the outage.",
        "body": [
          "Resilience fails when it's never tested: backups that won't restore, a DR site missing a dependency, or runbooks no one has rehearsed.",
          "Auditors verify BCP/BIA/ITDR, backup and restore testing, failover procedures, replication, and multi-region/HA architecture against stated RTO/RPO."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Resiliency & Redundancy scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull The DR site/region (secondary DC or cloud region) · Replication + provisioning (IaC)",
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
          "event": "OVHcloud fire destroys servers + some customers' only backups",
          "highlight": true
        },
        {
          "year": 2024,
          "event": "Mass outage shows untested recovery extends downtime for days"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"DR site strategy\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "per critical system: DR strategy (hot/warm/cold/active-active) vs its RTO/RPO\nDR-site independence (different region/power/network/dependencies — no shared fate)\nDR capacity: can it run full production load?\nDR security posture (same controls as prod)"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The DR-site strategy (hot/warm/cold, cloud DR, or active-active) per critical system + its rationale vs RTO/RPO.",
        "The test: Verify the DR strategy matches the recovery objectives.",
        "Reconcile the systems of record (The DR site/region (secondary DC or cloud region), Replication + provisioning (IaC), Capacity + security config at DR) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. The 'DR site' is a cold standby in the same data center as production (shared power + network), so a site-level event takes out both, and it has a fraction of production capacity."
      ],
      "references": [
        {
          "title": "ISO 22301",
          "url": "https://www.iso.org/standard/75106.html"
        },
        {
          "title": "Uptime Institute Tier Standard",
          "url": "https://uptimeinstitute.com/tiers"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "04_dr_site_strategy_mcp.py",
          "url": "/audit-code/resiliency/04_dr_site_strategy_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Resiliency & Redundancy evidence for \"DR site strategy\" (the dr-site strategy (hot/warm/cold, cloud dr, or active-active) per critical system + its rationale vs rto/rpo), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"DR site strategy\" control for Resiliency & Redundancy at AcmeCorp. THE TEST: Verify the DR strategy matches the recovery objectives. PASS: each critical system has a DR-site strategy (hot/warm/cold/active-active) justified against its RTO/RPO; the DR site/region is independent (no shared dependency with primary), provisioned, and current; it has the capacity to run production load; and it's secured to the same standard. Exceptions: a DR strategy that can't meet RTO/RPO (cold site for a tier-1 system), a DR site sharing fate with primary (same region/power/dependency), insufficient DR capacity, and a weaker security posture at DR. The evidence — The DR-site strategy (hot/warm/cold, cloud DR, or active-active) per critical system + its rationale vs RTO/RPO — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live The DR site/region (secondary DC or cloud region) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. The DR site/region (secondary DC or cloud region) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from The DR site/region (secondary DC or cloud region); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Resiliency & Redundancy: \"DR site strategy\" Audit Evidence\n\nThe test:\nVerify the DR strategy matches the recovery objectives. PASS: each critical system has a DR-site strategy (hot/warm/cold/active-active) justified against its RTO/RPO; the DR site/region is independent (no shared dependency with primary), provisioned, and current; it has the capacity to run production load; and it's secured to the same standard. Exceptions: a DR strategy that can't meet RTO/RPO (cold site for a tier-1 system), a DR site sharing fate with primary (same region/power/dependency), insufficient DR capacity, and a weaker security posture at DR.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- resiliency_inventory.json   (in-scope items — The DR-site strategy (hot/warm/cold, cloud DR, or active-active) per critical system + its rationale vs RTO/RPO)\n- resiliency_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"DR site strategy\",\n  \"domain\": \"Resiliency & Redundancy\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{res_",
        "/evidence/resiliency_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Business Continuity / DR\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"DR site strategy\" control must cover\n# fragment: dr_site_strategy_",
        "/evidence/resiliency_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "resiliency_inventory.json",
            "isDir": false
          },
          {
            "name": "resiliency_state.json",
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
          "value": "FLAG{res_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/resiliency_inventory.json",
          "value": "dr_site_strategy_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/resiliency_state.json",
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
          "id": "res-04-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"DR site strategy\" sub-process of Resiliency & Redundancy?",
          "options": [
            "Deploy and operate the dr site strategy control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the dr site strategy control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for dr site strategy against comparable organisations in the sector",
            "Obtain evidence that the dr site strategy control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "res-04-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"DR site strategy\" matter to the broader Resiliency & Redundancy posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Resiliency & Redundancy",
            "It stops mattering once a firewall and endpoint agent are deployed across the Resiliency & Redundancy estate",
            "It is a control other Resiliency & Redundancy controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Resiliency & Redundancy controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "res-04-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"DR site strategy\" control?",
          "options": [
            "A point-in-time screenshot of one system's dr site strategy settings, captured during the walkthrough",
            "The The DR-site strategy (hot/warm/cold, cloud DR, or active-active) per critical system + its rationale vs RTO/RPO, reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the dr site strategy control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's dr site strategy capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "res-04-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"DR site strategy\"?",
          "options": [
            "From The DR site/region (secondary DC or cloud region) and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how dr site strategy works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. The DR site/region (secondary DC or cloud region)) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "res-04-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"DR site strategy\"?",
          "options": [
            "The external audit firm, since it is the party examining the dr site strategy control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the dr site strategy data is shared, so the accountability sits with no one in particular",
            "IT / infra + business continuity, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "IT / infra + business continuity owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "res-04-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"DR site strategy\", which part stays with the human auditor?",
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
          "id": "res-04-q7",
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
          "id": "res-04-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"DR site strategy\", which of these is a realistic reportable finding?",
          "options": [
            "The 'DR site' is a cold standby in the same data center as production (shared power + network), so a site-level event takes out both, and it has a fraction of production capacity.",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. The 'DR site' is a cold standby in the same data center as production (shared power + network), so a site-level event takes out both, and it has a fraction of production capacity. A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "res-04-q9",
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
          "id": "res-04-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"DR site strategy\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind dr site strategy, so there is no overlap",
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
    "epochId": "resiliency",
    "id": "res-05",
    "order": 5,
    "title": "Failover and fallback procedures",
    "subtitle": "Agentic technical & privacy audit of the failover and fallback procedures control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 6,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Failover and fallback procedures\" control for Resiliency & Redundancy is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify failover + failback are documented, ordered, and tested. PASS: each critical system has a tested failover runbook (steps, owners, decision criteria, dependency order) and a failback procedure; failover is automated where RTO demands; and the decision authority + sequence are clear. Exceptions: no/untested failover runbooks, no failback procedure (stuck on DR), manual failover where RTO requires automation, and unordered failover (dependencies come up in the wrong sequence and fail).",
      "approach": "An audit agent calls a read-only MCP server that wraps the Resiliency & Redundancy systems of record (Failover runbooks / automation; DNS / load-balancer / traffic management (the failover mechanism); Orchestration) as tools — e.g. `per critical system: a tested failover runbook (steps, owners, decisio`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The documented, tested failover runbooks per critical system (steps, owners, decision criteria, dependency order)",
        "The fallback/failback procedure (returning to primary after recovery)",
        "Automation evidence (automated vs manual failover) + the failover decision authority",
        "Dependency-ordering (services fail over in the right order)"
      ],
      "system": [
        "Failover runbooks / automation",
        "DNS / load-balancer / traffic management (the failover mechanism)",
        "Orchestration"
      ],
      "dataOwner": [
        "SRE / IT operations",
        "Service owners",
        "Business continuity"
      ],
      "scoring": {
        "ease": "EASE 6/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Resiliency & Redundancy controls."
      }
    },
    "badge": {
      "id": "res-05-badge",
      "name": "Resiliency & Redundancy Auditor",
      "emoji": "♻️"
    },
    "wonder": {
      "name": "Failover and fallback procedures",
      "location": "Resiliency & Redundancy",
      "era": "Present Day",
      "emoji": "♻️"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Failover and fallback procedures\" as a repeatable agentic workflow: pull the real evidence (The documented, tested failover runbooks per critical system (steps, owners, decision criteria, dependency order)) with read-only agents, run the test against policy, and issue a defensible opinion on the Resiliency & Redundancy control.",
      "year": 2025,
      "overview": [
        "The \"Failover and fallback procedures\" sub-process is one of the controls an auditor must verify for Resiliency & Redundancy. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the documented, tested failover runbooks per critical system (steps, owners, decision criteria, dependency order), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Failover runbooks / automation, DNS / load-balancer / traffic management (the failover mechanism), Orchestration — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `per critical system: a tested failover runbook (steps, owners, decision criteria` — read-only, against the systems of record.",
        "The test itself is specific. Verify failover + failback are documented, ordered, and tested. PASS: each critical system has a tested failover runbook (steps, owners, decision criteria, dependency order) and a failback procedure; failover is automated where RTO demands; and the decision authority + sequence are clear. Exceptions: no/untested failover runbooks, no failback procedure (stuck on DR), manual failover where RTO requires automation, and unordered failover (dependencies come up in the wrong sequence and fail). The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `05_failover_and_fallback_procedures_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Failover runbooks / automation and DNS / load-balancer / traffic management (the failover mechanism) (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 05_failover_and_fallback_procedures_mcp.py` to expose it to your agent — or `python 05_failover_and_fallback_procedures_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Backups that didn't restore",
        "when": "Recurring",
        "where": "DR and continuity programs",
        "impact": "An organization discovers during a real incident that its failover, backups, or runbooks don't work as assumed — extending the outage.",
        "body": [
          "Resilience fails when it's never tested: backups that won't restore, a DR site missing a dependency, or runbooks no one has rehearsed.",
          "Auditors verify BCP/BIA/ITDR, backup and restore testing, failover procedures, replication, and multi-region/HA architecture against stated RTO/RPO."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Resiliency & Redundancy scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull Failover runbooks / automation · DNS / load-balancer / traffic management (the failover mechanism)",
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
          "event": "OVHcloud fire destroys servers + some customers' only backups",
          "highlight": true
        },
        {
          "year": 2024,
          "event": "Mass outage shows untested recovery extends downtime for days"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Failover and fallback procedures\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "per critical system: a tested failover runbook (steps, owners, decision criteria, dependency order)\nthe failback-to-primary procedure\nautomated vs manual failover + the decision authority\ndependency ordering (do services fail over in the correct sequence?)"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The documented, tested failover runbooks per critical system (steps, owners, decision criteria, dependency order).",
        "The test: Verify failover + failback are documented, ordered, and tested.",
        "Reconcile the systems of record (Failover runbooks / automation, DNS / load-balancer / traffic management (the failover mechanism), Orchestration) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. Failover is a manual, undocumented tribal-knowledge process; there's no failback plan, and a test showed the app tier failed over before the database, so it came up pointing at nothing."
      ],
      "references": [
        {
          "title": "ISO 22301",
          "url": "https://www.iso.org/standard/75106.html"
        },
        {
          "title": "AWS Well-Architected — Reliability",
          "url": "https://docs.aws.amazon.com/wellarchitected/latest/reliability-pillar/welcome.html"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "05_failover_and_fallback_procedures_mcp.py",
          "url": "/audit-code/resiliency/05_failover_and_fallback_procedures_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Resiliency & Redundancy evidence for \"Failover and fallback procedures\" (the documented, tested failover runbooks per critical system (steps, owners, decision criteria, dependency order)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Failover and fallback procedures\" control for Resiliency & Redundancy at AcmeCorp. THE TEST: Verify failover + failback are documented, ordered, and tested. PASS: each critical system has a tested failover runbook (steps, owners, decision criteria, dependency order) and a failback procedure; failover is automated where RTO demands; and the decision authority + sequence are clear. Exceptions: no/untested failover runbooks, no failback procedure (stuck on DR), manual failover where RTO requires automation, and unordered failover (dependencies come up in the wrong sequence and fail). The evidence — The documented, tested failover runbooks per critical system (steps, owners, decision criteria, dependency order) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Failover runbooks / automation APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Failover runbooks / automation gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Failover runbooks / automation; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Resiliency & Redundancy: \"Failover and fallback procedures\" Audit Evidence\n\nThe test:\nVerify failover + failback are documented, ordered, and tested. PASS: each critical system has a tested failover runbook (steps, owners, decision criteria, dependency order) and a failback procedure; failover is automated where RTO demands; and the decision authority + sequence are clear. Exceptions: no/untested failover runbooks, no failback procedure (stuck on DR), manual failover where RTO requires automation, and unordered failover (dependencies come up in the wrong sequence and fail).\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- resiliency_inventory.json   (in-scope items — The documented, tested failover runbooks per critical system (steps, owners, decision criteria, dependency order))\n- resiliency_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Failover and fallback procedures\",\n  \"domain\": \"Resiliency & Redundancy\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{res_",
        "/evidence/resiliency_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Business Continuity / DR\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Failover and fallback procedures\" control must cover\n# fragment: failover_fallback_procedures_",
        "/evidence/resiliency_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "resiliency_inventory.json",
            "isDir": false
          },
          {
            "name": "resiliency_state.json",
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
          "value": "FLAG{res_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/resiliency_inventory.json",
          "value": "failover_fallback_procedures_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/resiliency_state.json",
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
          "id": "res-05-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Failover and fallback procedures\" sub-process of Resiliency & Redundancy?",
          "options": [
            "Deploy and operate the failover and fallback procedures control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the failover and fallback procedures control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for failover and fallback procedures against comparable organisations in the sector",
            "Obtain evidence that the failover and fallback procedures control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "res-05-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Failover and fallback procedures\" matter to the broader Resiliency & Redundancy posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Resiliency & Redundancy",
            "It stops mattering once a firewall and endpoint agent are deployed across the Resiliency & Redundancy estate",
            "It is a control other Resiliency & Redundancy controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Resiliency & Redundancy controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "res-05-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Failover and fallback procedures\" control?",
          "options": [
            "A point-in-time screenshot of one system's failover and fallback procedures settings, captured during the walkthrough",
            "The The documented, tested failover runbooks per critical system (steps, owners, decision criteria, dependency order), reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the failover and fallback procedures control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's failover and fallback procedures capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "res-05-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Failover and fallback procedures\"?",
          "options": [
            "From Failover runbooks / automation and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how failover and fallback procedures works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. Failover runbooks / automation) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "res-05-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Failover and fallback procedures\"?",
          "options": [
            "The external audit firm, since it is the party examining the failover and fallback procedures control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the failover and fallback procedures data is shared, so the accountability sits with no one in particular",
            "SRE / IT operations, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "SRE / IT operations owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "res-05-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Failover and fallback procedures\", which part stays with the human auditor?",
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
          "id": "res-05-q7",
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
          "id": "res-05-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Failover and fallback procedures\", which of these is a realistic reportable finding?",
          "options": [
            "Failover is a manual, undocumented tribal-knowledge process; there's no failback plan, and a test showed the app tier failed over before the database, so it came up pointing at nothing.",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. Failover is a manual, undocumented tribal-knowledge process; there's no failback plan, and a test showed the app tier failed over before the database, so it came up pointing at nothing. A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "res-05-q9",
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
          "id": "res-05-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Failover and fallback procedures\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind failover and fallback procedures, so there is no overlap",
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
    "epochId": "resiliency",
    "id": "res-06",
    "order": 6,
    "title": "Data and service replication",
    "subtitle": "Agentic technical & privacy audit of the data and service replication control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 7,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Data and service replication\" control for Resiliency & Redundancy is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify critical data + services are replicated to meet RPO. PASS: critical data/services are replicated (sync or async per the RPO) to an independent location; replication health + lag are monitored with alerting; replicas are integrity-verified + usable; and coverage spans critical assets. Exceptions: critical data not replicated (RPO unmet), replication lag exceeding RPO unnoticed, replicas that are corrupt/inconsistent (a failover would lose/corrupt data), and unmonitored replication.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Resiliency & Redundancy systems of record (Replication (DB replicas, storage replication, cross-region); Replication monitoring; Integrity validation) as tools — e.g. `per critical dataset/service: replication type (sync/async) + lag vs t`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The replication config per critical dataset/service (sync/async, replication lag, target) vs the RPO",
        "Evidence replication is healthy + monitored (lag within RPO, alerting on failure)",
        "Replication integrity (replicas are consistent + usable, not corrupted)",
        "Coverage: critical data/services replicated vs total"
      ],
      "system": [
        "Replication (DB replicas, storage replication, cross-region)",
        "Replication monitoring",
        "Integrity validation"
      ],
      "dataOwner": [
        "IT / infra + data platform",
        "SRE",
        "Business continuity"
      ],
      "scoring": {
        "ease": "EASE 7/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Resiliency & Redundancy controls."
      }
    },
    "badge": {
      "id": "res-06-badge",
      "name": "Resiliency & Redundancy Auditor",
      "emoji": "♻️"
    },
    "wonder": {
      "name": "Data and service replication",
      "location": "Resiliency & Redundancy",
      "era": "Present Day",
      "emoji": "♻️"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Data and service replication\" as a repeatable agentic workflow: pull the real evidence (The replication config per critical dataset/service (sync/async, replication lag, target) vs the RPO) with read-only agents, run the test against policy, and issue a defensible opinion on the Resiliency & Redundancy control.",
      "year": 2025,
      "overview": [
        "The \"Data and service replication\" sub-process is one of the controls an auditor must verify for Resiliency & Redundancy. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the replication config per critical dataset/service (sync/async, replication lag, target) vs the RPO, for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Replication (DB replicas, storage replication, cross-region), Replication monitoring, Integrity validation — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `per critical dataset/service: replication type (sync/async) + lag vs the RPO` — read-only, against the systems of record.",
        "The test itself is specific. Verify critical data + services are replicated to meet RPO. PASS: critical data/services are replicated (sync or async per the RPO) to an independent location; replication health + lag are monitored with alerting; replicas are integrity-verified + usable; and coverage spans critical assets. Exceptions: critical data not replicated (RPO unmet), replication lag exceeding RPO unnoticed, replicas that are corrupt/inconsistent (a failover would lose/corrupt data), and unmonitored replication. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `06_data_and_service_replication_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Replication (DB replicas, storage replication, cross-region) and Replication monitoring (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 06_data_and_service_replication_mcp.py` to expose it to your agent — or `python 06_data_and_service_replication_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Backups that didn't restore",
        "when": "Recurring",
        "where": "DR and continuity programs",
        "impact": "An organization discovers during a real incident that its failover, backups, or runbooks don't work as assumed — extending the outage.",
        "body": [
          "Resilience fails when it's never tested: backups that won't restore, a DR site missing a dependency, or runbooks no one has rehearsed.",
          "Auditors verify BCP/BIA/ITDR, backup and restore testing, failover procedures, replication, and multi-region/HA architecture against stated RTO/RPO."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Resiliency & Redundancy scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull Replication (DB replicas, storage replication, cross-region) · Replication monitoring",
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
          "event": "OVHcloud fire destroys servers + some customers' only backups",
          "highlight": true
        },
        {
          "year": 2024,
          "event": "Mass outage shows untested recovery extends downtime for days"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Data and service replication\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "per critical dataset/service: replication type (sync/async) + lag vs the RPO\nreplication health monitoring + alerting on lag/failure\nreplica integrity/consistency (usable in a failover?)\ncoverage: critical data/services replicated vs total"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The replication config per critical dataset/service (sync/async, replication lag, target) vs the RPO.",
        "The test: Verify critical data + services are replicated to meet RPO.",
        "Reconcile the systems of record (Replication (DB replicas, storage replication, cross-region), Replication monitoring, Integrity validation) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. Async replication for the primary database lags by hours (far beyond the stated 15-minute RPO) with no monitoring, and a test failover surfaced an inconsistent replica that couldn't be opened."
      ],
      "references": [
        {
          "title": "NIST SP 800-34",
          "url": "https://csrc.nist.gov/pubs/sp/800/34/r1/final"
        },
        {
          "title": "AWS Well-Architected — Reliability",
          "url": "https://docs.aws.amazon.com/wellarchitected/latest/reliability-pillar/welcome.html"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "06_data_and_service_replication_mcp.py",
          "url": "/audit-code/resiliency/06_data_and_service_replication_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Resiliency & Redundancy evidence for \"Data and service replication\" (the replication config per critical dataset/service (sync/async, replication lag, target) vs the rpo), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Data and service replication\" control for Resiliency & Redundancy at AcmeCorp. THE TEST: Verify critical data + services are replicated to meet RPO. PASS: critical data/services are replicated (sync or async per the RPO) to an independent location; replication health + lag are monitored with alerting; replicas are integrity-verified + usable; and coverage spans critical assets. Exceptions: critical data not replicated (RPO unmet), replication lag exceeding RPO unnoticed, replicas that are corrupt/inconsistent (a failover would lose/corrupt data), and unmonitored replication. The evidence — The replication config per critical dataset/service (sync/async, replication lag, target) vs the RPO — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Replication (DB replicas, storage replication, cross-region) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Replication (DB replicas, storage replication, cross-region) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Replication (DB replicas, storage replication, cross-region); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Resiliency & Redundancy: \"Data and service replication\" Audit Evidence\n\nThe test:\nVerify critical data + services are replicated to meet RPO. PASS: critical data/services are replicated (sync or async per the RPO) to an independent location; replication health + lag are monitored with alerting; replicas are integrity-verified + usable; and coverage spans critical assets. Exceptions: critical data not replicated (RPO unmet), replication lag exceeding RPO unnoticed, replicas that are corrupt/inconsistent (a failover would lose/corrupt data), and unmonitored replication.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- resiliency_inventory.json   (in-scope items — The replication config per critical dataset/service (sync/async, replication lag, target) vs the RPO)\n- resiliency_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Data and service replication\",\n  \"domain\": \"Resiliency & Redundancy\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{res_",
        "/evidence/resiliency_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Business Continuity / DR\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Data and service replication\" control must cover\n# fragment: data_service_replication_",
        "/evidence/resiliency_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "resiliency_inventory.json",
            "isDir": false
          },
          {
            "name": "resiliency_state.json",
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
          "value": "FLAG{res_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/resiliency_inventory.json",
          "value": "data_service_replication_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/resiliency_state.json",
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
          "id": "res-06-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Data and service replication\" sub-process of Resiliency & Redundancy?",
          "options": [
            "Deploy and operate the data and service replication control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the data and service replication control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for data and service replication against comparable organisations in the sector",
            "Obtain evidence that the data and service replication control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "res-06-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Data and service replication\" matter to the broader Resiliency & Redundancy posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Resiliency & Redundancy",
            "It stops mattering once a firewall and endpoint agent are deployed across the Resiliency & Redundancy estate",
            "It is a control other Resiliency & Redundancy controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Resiliency & Redundancy controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "res-06-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Data and service replication\" control?",
          "options": [
            "A point-in-time screenshot of one system's data and service replication settings, captured during the walkthrough",
            "The The replication config per critical dataset/service (sync/async, replication lag, target) vs the RPO, reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the data and service replication control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's data and service replication capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "res-06-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Data and service replication\"?",
          "options": [
            "From Replication (DB replicas, storage replication, cross-region) and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how data and service replication works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. Replication (DB replicas, storage replication, cross-region)) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "res-06-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Data and service replication\"?",
          "options": [
            "The external audit firm, since it is the party examining the data and service replication control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the data and service replication data is shared, so the accountability sits with no one in particular",
            "IT / infra + data platform, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "IT / infra + data platform owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "res-06-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Data and service replication\", which part stays with the human auditor?",
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
          "id": "res-06-q7",
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
          "id": "res-06-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Data and service replication\", which of these is a realistic reportable finding?",
          "options": [
            "Async replication for the primary database lags by hours (far beyond the stated 15-minute RPO) with no monitoring, and a test failover surfaced an inconsistent replica that couldn't be opened.",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. Async replication for the primary database lags by hours (far beyond the stated 15-minute RPO) with no monitoring, and a test failover surfaced an inconsistent replica that couldn't be opened. A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "res-06-q9",
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
          "id": "res-06-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Data and service replication\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind data and service replication, so there is no overlap",
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
    "epochId": "resiliency",
    "id": "res-07",
    "order": 7,
    "title": "Network redundancy",
    "subtitle": "Agentic technical & privacy audit of the network redundancy control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 5,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Network redundancy\" control for Resiliency & Redundancy is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify the network has no single point of failure for critical connectivity. PASS: redundant ISPs/circuits over diverse physical paths, redundant edge/core devices, redundant + resilient DNS, and redundant connectivity to cloud/SaaS/DR; SPOFs are identified + mitigated; and path failover is tested. Exceptions: single ISP/circuit or single physical path, single edge/core device, single DNS provider, and untested failover (assumed redundancy that doesn't actually reroute).",
      "approach": "An audit agent calls a read-only MCP server that wraps the Resiliency & Redundancy systems of record (Network (ISPs/circuits, edge/core devices, SD-WAN); DNS (redundant providers); Cloud / DR connectivity) as tools — e.g. `network design: redundant ISPs/circuits over DIVERSE physical paths + `, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The network-redundancy design (redundant ISPs/circuits, diverse physical paths, redundant edge/core devices, redundant DNS)",
        "Single-point-of-failure analysis of the network (any single link/device/DNS that takes everything down)",
        "Failover testing of network paths (does traffic actually reroute)",
        "Redundant connectivity to DR + to critical SaaS/cloud"
      ],
      "system": [
        "Network (ISPs/circuits, edge/core devices, SD-WAN)",
        "DNS (redundant providers)",
        "Cloud / DR connectivity"
      ],
      "dataOwner": [
        "Network engineering",
        "Infrastructure",
        "Business continuity"
      ],
      "scoring": {
        "ease": "EASE 5/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Resiliency & Redundancy controls."
      }
    },
    "badge": {
      "id": "res-07-badge",
      "name": "Resiliency & Redundancy Auditor",
      "emoji": "♻️"
    },
    "wonder": {
      "name": "Network redundancy",
      "location": "Resiliency & Redundancy",
      "era": "Present Day",
      "emoji": "♻️"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Network redundancy\" as a repeatable agentic workflow: pull the real evidence (The network-redundancy design (redundant ISPs/circuits, diverse physical paths, redundant edge/core devices, redundant DNS)) with read-only agents, run the test against policy, and issue a defensible opinion on the Resiliency & Redundancy control.",
      "year": 2025,
      "overview": [
        "The \"Network redundancy\" sub-process is one of the controls an auditor must verify for Resiliency & Redundancy. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the network-redundancy design (redundant ISPs/circuits, diverse physical paths, redundant edge/core devices, redundant DNS), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Network (ISPs/circuits, edge/core devices, SD-WAN), DNS (redundant providers), Cloud / DR connectivity — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `network design: redundant ISPs/circuits over DIVERSE physical paths + redundant ` — read-only, against the systems of record.",
        "The test itself is specific. Verify the network has no single point of failure for critical connectivity. PASS: redundant ISPs/circuits over diverse physical paths, redundant edge/core devices, redundant + resilient DNS, and redundant connectivity to cloud/SaaS/DR; SPOFs are identified + mitigated; and path failover is tested. Exceptions: single ISP/circuit or single physical path, single edge/core device, single DNS provider, and untested failover (assumed redundancy that doesn't actually reroute). The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `07_network_redundancy_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Network (ISPs/circuits, edge/core devices, SD-WAN) and DNS (redundant providers) (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 07_network_redundancy_mcp.py` to expose it to your agent — or `python 07_network_redundancy_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Backups that didn't restore",
        "when": "Recurring",
        "where": "DR and continuity programs",
        "impact": "An organization discovers during a real incident that its failover, backups, or runbooks don't work as assumed — extending the outage.",
        "body": [
          "Resilience fails when it's never tested: backups that won't restore, a DR site missing a dependency, or runbooks no one has rehearsed.",
          "Auditors verify BCP/BIA/ITDR, backup and restore testing, failover procedures, replication, and multi-region/HA architecture against stated RTO/RPO."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Resiliency & Redundancy scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull Network (ISPs/circuits, edge/core devices, SD-WAN) · DNS (redundant providers)",
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
          "event": "OVHcloud fire destroys servers + some customers' only backups",
          "highlight": true
        },
        {
          "year": 2024,
          "event": "Mass outage shows untested recovery extends downtime for days"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Network redundancy\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "network design: redundant ISPs/circuits over DIVERSE physical paths + redundant edge/core\nSPOF analysis: any single link/device/DNS that takes everything down?\nDNS redundancy (multiple providers / resilient config)\ntest path failover (pull a circuit/device — does traffic reroute?)"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The network-redundancy design (redundant ISPs/circuits, diverse physical paths, redundant edge/core devices, redundant DNS).",
        "The test: Verify the network has no single point of failure for critical connectivity.",
        "Reconcile the systems of record (Network (ISPs/circuits, edge/core devices, SD-WAN), DNS (redundant providers), Cloud / DR connectivity) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. Two 'redundant' internet circuits enter the building through the same conduit (a single backhoe takes both), DNS runs on a single provider, and a core switch is non-redundant — multiple SPOFs."
      ],
      "references": [
        {
          "title": "NIST SP 800-34",
          "url": "https://csrc.nist.gov/pubs/sp/800/34/r1/final"
        },
        {
          "title": "Uptime Institute",
          "url": "https://uptimeinstitute.com/"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "07_network_redundancy_mcp.py",
          "url": "/audit-code/resiliency/07_network_redundancy_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Resiliency & Redundancy evidence for \"Network redundancy\" (the network-redundancy design (redundant isps/circuits, diverse physical paths, redundant edge/core devices, redundant dns)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Network redundancy\" control for Resiliency & Redundancy at AcmeCorp. THE TEST: Verify the network has no single point of failure for critical connectivity. PASS: redundant ISPs/circuits over diverse physical paths, redundant edge/core devices, redundant + resilient DNS, and redundant connectivity to cloud/SaaS/DR; SPOFs are identified + mitigated; and path failover is tested. Exceptions: single ISP/circuit or single physical path, single edge/core device, single DNS provider, and untested failover (assumed redundancy that doesn't actually reroute). The evidence — The network-redundancy design (redundant ISPs/circuits, diverse physical paths, redundant edge/core devices, redundant DNS) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Network (ISPs/circuits, edge/core devices, SD-WAN) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Network (ISPs/circuits, edge/core devices, SD-WAN) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Network (ISPs/circuits, edge/core devices, SD-WAN); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Resiliency & Redundancy: \"Network redundancy\" Audit Evidence\n\nThe test:\nVerify the network has no single point of failure for critical connectivity. PASS: redundant ISPs/circuits over diverse physical paths, redundant edge/core devices, redundant + resilient DNS, and redundant connectivity to cloud/SaaS/DR; SPOFs are identified + mitigated; and path failover is tested. Exceptions: single ISP/circuit or single physical path, single edge/core device, single DNS provider, and untested failover (assumed redundancy that doesn't actually reroute).\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- resiliency_inventory.json   (in-scope items — The network-redundancy design (redundant ISPs/circuits, diverse physical paths, redundant edge/core devices, redundant DNS))\n- resiliency_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Network redundancy\",\n  \"domain\": \"Resiliency & Redundancy\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{res_",
        "/evidence/resiliency_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Business Continuity / DR\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Network redundancy\" control must cover\n# fragment: network_redundancy_",
        "/evidence/resiliency_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "resiliency_inventory.json",
            "isDir": false
          },
          {
            "name": "resiliency_state.json",
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
          "value": "FLAG{res_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/resiliency_inventory.json",
          "value": "network_redundancy_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/resiliency_state.json",
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
          "id": "res-07-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Network redundancy\" sub-process of Resiliency & Redundancy?",
          "options": [
            "Deploy and operate the network redundancy control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the network redundancy control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for network redundancy against comparable organisations in the sector",
            "Obtain evidence that the network redundancy control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "res-07-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Network redundancy\" matter to the broader Resiliency & Redundancy posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Resiliency & Redundancy",
            "It stops mattering once a firewall and endpoint agent are deployed across the Resiliency & Redundancy estate",
            "It is a control other Resiliency & Redundancy controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Resiliency & Redundancy controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "res-07-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Network redundancy\" control?",
          "options": [
            "A point-in-time screenshot of one system's network redundancy settings, captured during the walkthrough",
            "The The network-redundancy design (redundant ISPs/circuits, diverse physical paths, redundant edge/core devices, redundant DNS), reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the network redundancy control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's network redundancy capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "res-07-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Network redundancy\"?",
          "options": [
            "From Network (ISPs/circuits, edge/core devices, SD-WAN) and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how network redundancy works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. Network (ISPs/circuits, edge/core devices, SD-WAN)) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "res-07-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Network redundancy\"?",
          "options": [
            "The external audit firm, since it is the party examining the network redundancy control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the network redundancy data is shared, so the accountability sits with no one in particular",
            "Network engineering, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Network engineering owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "res-07-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Network redundancy\", which part stays with the human auditor?",
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
          "id": "res-07-q7",
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
          "id": "res-07-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Network redundancy\", which of these is a realistic reportable finding?",
          "options": [
            "Two 'redundant' internet circuits enter the building through the same conduit (a single backhoe takes both), DNS runs on a single provider, and a core switch is non-redundant — multiple SPOFs.",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. Two 'redundant' internet circuits enter the building through the same conduit (a single backhoe takes both), DNS runs on a single provider, and a core switch is non-redundant — multiple SPOFs. A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "res-07-q9",
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
          "id": "res-07-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Network redundancy\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind network redundancy, so there is no overlap",
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
    "epochId": "resiliency",
    "id": "res-08",
    "order": 8,
    "title": "Multi-region / AZ deployment",
    "subtitle": "Agentic technical & privacy audit of the multi-region / az deployment control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 6,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Multi-region / AZ deployment\" control for Resiliency & Redundancy is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify critical cloud workloads are deployed for AZ/region resilience. PASS: tier-1 workloads are multi-AZ (and multi-region where RTO/RPO demands), including stateful data; they survive an AZ failure (tested via game-day); and no tier-1 service is a single-AZ/single-region SPOF. Exceptions: tier-1 workloads in a single AZ, stateful data not replicated across AZ/region, multi-AZ assumed but never tested (AZ-loss not survived), and single-region dependence where the RTO requires cross-region.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Resiliency & Redundancy systems of record (Cloud workloads (multi-AZ/region config); Managed-DB Multi-AZ + cross-region replicas; Resilience Hub / game-day tooling) as tools — e.g. `per tier-1 workload: AZ/region spread (single-AZ SPOFs?)`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The multi-AZ / multi-region posture per critical cloud workload + its rationale vs RTO/RPO",
        "Evidence workloads survive an AZ loss (and a region loss where required) — design + test",
        "Stateful-data resilience across AZ/region (not just stateless compute)",
        "Single-AZ / single-region SPOFs for tier-1 services"
      ],
      "system": [
        "Cloud workloads (multi-AZ/region config)",
        "Managed-DB Multi-AZ + cross-region replicas",
        "Resilience Hub / game-day tooling"
      ],
      "dataOwner": [
        "SRE / cloud platform",
        "Application owners",
        "Business continuity"
      ],
      "scoring": {
        "ease": "EASE 6/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Resiliency & Redundancy controls."
      }
    },
    "badge": {
      "id": "res-08-badge",
      "name": "Resiliency & Redundancy Auditor",
      "emoji": "♻️"
    },
    "wonder": {
      "name": "Multi-region / AZ deployment",
      "location": "Resiliency & Redundancy",
      "era": "Present Day",
      "emoji": "♻️"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Multi-region / AZ deployment\" as a repeatable agentic workflow: pull the real evidence (The multi-AZ / multi-region posture per critical cloud workload + its rationale vs RTO/RPO) with read-only agents, run the test against policy, and issue a defensible opinion on the Resiliency & Redundancy control.",
      "year": 2025,
      "overview": [
        "The \"Multi-region / AZ deployment\" sub-process is one of the controls an auditor must verify for Resiliency & Redundancy. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the multi-AZ / multi-region posture per critical cloud workload + its rationale vs RTO/RPO, for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Cloud workloads (multi-AZ/region config), Managed-DB Multi-AZ + cross-region replicas, Resilience Hub / game-day tooling — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `per tier-1 workload: AZ/region spread (single-AZ SPOFs?)` — read-only, against the systems of record.",
        "The test itself is specific. Verify critical cloud workloads are deployed for AZ/region resilience. PASS: tier-1 workloads are multi-AZ (and multi-region where RTO/RPO demands), including stateful data; they survive an AZ failure (tested via game-day); and no tier-1 service is a single-AZ/single-region SPOF. Exceptions: tier-1 workloads in a single AZ, stateful data not replicated across AZ/region, multi-AZ assumed but never tested (AZ-loss not survived), and single-region dependence where the RTO requires cross-region. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `08_multi_region_az_deployment_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Cloud workloads (multi-AZ/region config) and Managed-DB Multi-AZ + cross-region replicas (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 08_multi_region_az_deployment_mcp.py` to expose it to your agent — or `python 08_multi_region_az_deployment_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Backups that didn't restore",
        "when": "Recurring",
        "where": "DR and continuity programs",
        "impact": "An organization discovers during a real incident that its failover, backups, or runbooks don't work as assumed — extending the outage.",
        "body": [
          "Resilience fails when it's never tested: backups that won't restore, a DR site missing a dependency, or runbooks no one has rehearsed.",
          "Auditors verify BCP/BIA/ITDR, backup and restore testing, failover procedures, replication, and multi-region/HA architecture against stated RTO/RPO."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Resiliency & Redundancy scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull Cloud workloads (multi-AZ/region config) · Managed-DB Multi-AZ + cross-region replicas",
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
          "event": "OVHcloud fire destroys servers + some customers' only backups",
          "highlight": true
        },
        {
          "year": 2024,
          "event": "Mass outage shows untested recovery extends downtime for days"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Multi-region / AZ deployment\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "per tier-1 workload: AZ/region spread (single-AZ SPOFs?)\nstateful data: Multi-AZ + cross-region replica (RDS Multi-AZ, etc.)\nAZ-loss game-day: does the workload survive losing an AZ?\nsingle-region dependence vs the RTO requirement"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The multi-AZ / multi-region posture per critical cloud workload + its rationale vs RTO/RPO.",
        "The test: Verify critical cloud workloads are deployed for AZ/region resilience.",
        "Reconcile the systems of record (Cloud workloads (multi-AZ/region config), Managed-DB Multi-AZ + cross-region replicas, Resilience Hub / game-day tooling) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. The primary database is single-AZ (a documented Multi-AZ requirement never enabled), several tier-1 services run in one AZ, and no AZ-failure game day has ever been run."
      ],
      "references": [
        {
          "title": "AWS Well-Architected — Reliability",
          "url": "https://docs.aws.amazon.com/wellarchitected/latest/reliability-pillar/welcome.html"
        },
        {
          "title": "NIST SP 800-34",
          "url": "https://csrc.nist.gov/pubs/sp/800/34/r1/final"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "08_multi_region_az_deployment_mcp.py",
          "url": "/audit-code/resiliency/08_multi_region_az_deployment_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Resiliency & Redundancy evidence for \"Multi-region / AZ deployment\" (the multi-az / multi-region posture per critical cloud workload + its rationale vs rto/rpo), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Multi-region / AZ deployment\" control for Resiliency & Redundancy at AcmeCorp. THE TEST: Verify critical cloud workloads are deployed for AZ/region resilience. PASS: tier-1 workloads are multi-AZ (and multi-region where RTO/RPO demands), including stateful data; they survive an AZ failure (tested via game-day); and no tier-1 service is a single-AZ/single-region SPOF. Exceptions: tier-1 workloads in a single AZ, stateful data not replicated across AZ/region, multi-AZ assumed but never tested (AZ-loss not survived), and single-region dependence where the RTO requires cross-region. The evidence — The multi-AZ / multi-region posture per critical cloud workload + its rationale vs RTO/RPO — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Cloud workloads (multi-AZ/region config) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Cloud workloads (multi-AZ/region config) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Cloud workloads (multi-AZ/region config); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Resiliency & Redundancy: \"Multi-region / AZ deployment\" Audit Evidence\n\nThe test:\nVerify critical cloud workloads are deployed for AZ/region resilience. PASS: tier-1 workloads are multi-AZ (and multi-region where RTO/RPO demands), including stateful data; they survive an AZ failure (tested via game-day); and no tier-1 service is a single-AZ/single-region SPOF. Exceptions: tier-1 workloads in a single AZ, stateful data not replicated across AZ/region, multi-AZ assumed but never tested (AZ-loss not survived), and single-region dependence where the RTO requires cross-region.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- resiliency_inventory.json   (in-scope items — The multi-AZ / multi-region posture per critical cloud workload + its rationale vs RTO/RPO)\n- resiliency_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Multi-region / AZ deployment\",\n  \"domain\": \"Resiliency & Redundancy\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{res_",
        "/evidence/resiliency_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Business Continuity / DR\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Multi-region / AZ deployment\" control must cover\n# fragment: multiregion_az_deployment_",
        "/evidence/resiliency_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "resiliency_inventory.json",
            "isDir": false
          },
          {
            "name": "resiliency_state.json",
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
          "value": "FLAG{res_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/resiliency_inventory.json",
          "value": "multiregion_az_deployment_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/resiliency_state.json",
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
          "id": "res-08-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Multi-region / AZ deployment\" sub-process of Resiliency & Redundancy?",
          "options": [
            "Deploy and operate the multi-region / az deployment control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the multi-region / az deployment control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for multi-region / az deployment against comparable organisations in the sector",
            "Obtain evidence that the multi-region / az deployment control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "res-08-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Multi-region / AZ deployment\" matter to the broader Resiliency & Redundancy posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Resiliency & Redundancy",
            "It stops mattering once a firewall and endpoint agent are deployed across the Resiliency & Redundancy estate",
            "It is a control other Resiliency & Redundancy controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Resiliency & Redundancy controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "res-08-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Multi-region / AZ deployment\" control?",
          "options": [
            "A point-in-time screenshot of one system's multi-region / az deployment settings, captured during the walkthrough",
            "The The multi-AZ / multi-region posture per critical cloud workload + its rationale vs RTO/RPO, reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the multi-region / az deployment control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's multi-region / az deployment capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "res-08-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Multi-region / AZ deployment\"?",
          "options": [
            "From Cloud workloads (multi-AZ/region config) and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how multi-region / az deployment works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. Cloud workloads (multi-AZ/region config)) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "res-08-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Multi-region / AZ deployment\"?",
          "options": [
            "The external audit firm, since it is the party examining the multi-region / az deployment control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the multi-region / az deployment data is shared, so the accountability sits with no one in particular",
            "SRE / cloud platform, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "SRE / cloud platform owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "res-08-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Multi-region / AZ deployment\", which part stays with the human auditor?",
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
          "id": "res-08-q7",
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
          "id": "res-08-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Multi-region / AZ deployment\", which of these is a realistic reportable finding?",
          "options": [
            "The primary database is single-AZ (a documented Multi-AZ requirement never enabled), several tier-1 services run in one AZ, and no AZ-failure game day has ever been run.",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. The primary database is single-AZ (a documented Multi-AZ requirement never enabled), several tier-1 services run in one AZ, and no AZ-failure game day has ever been run. A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "res-08-q9",
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
          "id": "res-08-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Multi-region / AZ deployment\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind multi-region / az deployment, so there is no overlap",
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
    "epochId": "resiliency",
    "id": "res-09",
    "order": 9,
    "title": "Infrastructure as code",
    "subtitle": "Agentic technical & privacy audit of the infrastructure as code control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 7,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Infrastructure as code\" control for Resiliency & Redundancy is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify infrastructure can be rebuilt from code for recovery. PASS: critical infrastructure is defined in version-controlled IaC; the environment can be recreated from IaC in DR (tested); drift between IaC and running state is minimal (a rebuild would match reality); and IaC + its state are stored independently of the primary (available in a disaster). Exceptions: critical infra not in IaC (snowflake servers that can't be rebuilt), IaC that's drifted/stale (rebuild ≠ reality), never-tested rebuild, and IaC/state only available in the failed primary.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Resiliency & Redundancy systems of record (IaC (Terraform / CloudFormation / Bicep) + version control; State storage (independent); The DR rebuild process) as tools — e.g. `is critical infrastructure in version-controlled IaC (or hand-built sn`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "Evidence critical infrastructure is defined in IaC (so it can be rebuilt) + the IaC is version-controlled + current",
        "The rebuild-from-IaC capability (can the environment be recreated in DR from code) + test evidence",
        "Drift between IaC and the running environment (would a rebuild match reality)",
        "IaC + state stored independently of the primary (available during a disaster)"
      ],
      "system": [
        "IaC (Terraform / CloudFormation / Bicep) + version control",
        "State storage (independent)",
        "The DR rebuild process"
      ],
      "dataOwner": [
        "Platform / SRE",
        "Cloud engineering",
        "Business continuity"
      ],
      "scoring": {
        "ease": "EASE 7/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Resiliency & Redundancy controls."
      }
    },
    "badge": {
      "id": "res-09-badge",
      "name": "Resiliency & Redundancy Auditor",
      "emoji": "♻️"
    },
    "wonder": {
      "name": "Infrastructure as code",
      "location": "Resiliency & Redundancy",
      "era": "Present Day",
      "emoji": "♻️"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Infrastructure as code\" as a repeatable agentic workflow: pull the real evidence (Evidence critical infrastructure is defined in IaC (so it can be rebuilt) + the IaC is version-controlled + current) with read-only agents, run the test against policy, and issue a defensible opinion on the Resiliency & Redundancy control.",
      "year": 2025,
      "overview": [
        "The \"Infrastructure as code\" sub-process is one of the controls an auditor must verify for Resiliency & Redundancy. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me evidence critical infrastructure is defined in IaC (so it can be rebuilt) + the IaC is version-controlled + current, for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here IaC (Terraform / CloudFormation / Bicep) + version control, State storage (independent), The DR rebuild process — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `is critical infrastructure in version-controlled IaC (or hand-built snowflakes)?` — read-only, against the systems of record.",
        "The test itself is specific. Verify infrastructure can be rebuilt from code for recovery. PASS: critical infrastructure is defined in version-controlled IaC; the environment can be recreated from IaC in DR (tested); drift between IaC and running state is minimal (a rebuild would match reality); and IaC + its state are stored independently of the primary (available in a disaster). Exceptions: critical infra not in IaC (snowflake servers that can't be rebuilt), IaC that's drifted/stale (rebuild ≠ reality), never-tested rebuild, and IaC/state only available in the failed primary. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `09_infrastructure_as_code_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from IaC (Terraform / CloudFormation / Bicep) + version control and State storage (independent) (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 09_infrastructure_as_code_mcp.py` to expose it to your agent — or `python 09_infrastructure_as_code_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Backups that didn't restore",
        "when": "Recurring",
        "where": "DR and continuity programs",
        "impact": "An organization discovers during a real incident that its failover, backups, or runbooks don't work as assumed — extending the outage.",
        "body": [
          "Resilience fails when it's never tested: backups that won't restore, a DR site missing a dependency, or runbooks no one has rehearsed.",
          "Auditors verify BCP/BIA/ITDR, backup and restore testing, failover procedures, replication, and multi-region/HA architecture against stated RTO/RPO."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Resiliency & Redundancy scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull IaC (Terraform / CloudFormation / Bicep) + version control · State storage (independent)",
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
          "event": "OVHcloud fire destroys servers + some customers' only backups",
          "highlight": true
        },
        {
          "year": 2024,
          "event": "Mass outage shows untested recovery extends downtime for days"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Infrastructure as code\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "is critical infrastructure in version-controlled IaC (or hand-built snowflakes)?\nrebuild-from-IaC test: can the environment be recreated in DR?\ndrift: IaC vs running state (would a rebuild match reality?)\nis the IaC + state stored independently of the primary?"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: Evidence critical infrastructure is defined in IaC (so it can be rebuilt) + the IaC is version-controlled + current.",
        "The test: Verify infrastructure can be rebuilt from code for recovery.",
        "Reconcile the systems of record (IaC (Terraform / CloudFormation / Bicep) + version control, State storage (independent), The DR rebuild process) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. Half the production infrastructure was hand-built and isn't in IaC (can't be rebuilt), the Terraform that exists has drifted significantly from reality, and the state file lives only in the primary region a disaster would take out."
      ],
      "references": [
        {
          "title": "AWS Well-Architected — Reliability",
          "url": "https://docs.aws.amazon.com/wellarchitected/latest/reliability-pillar/welcome.html"
        },
        {
          "title": "NIST SP 800-34",
          "url": "https://csrc.nist.gov/pubs/sp/800/34/r1/final"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "09_infrastructure_as_code_mcp.py",
          "url": "/audit-code/resiliency/09_infrastructure_as_code_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Resiliency & Redundancy evidence for \"Infrastructure as code\" (evidence critical infrastructure is defined in iac (so it can be rebuilt) + the iac is version-controlled + current), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Infrastructure as code\" control for Resiliency & Redundancy at AcmeCorp. THE TEST: Verify infrastructure can be rebuilt from code for recovery. PASS: critical infrastructure is defined in version-controlled IaC; the environment can be recreated from IaC in DR (tested); drift between IaC and running state is minimal (a rebuild would match reality); and IaC + its state are stored independently of the primary (available in a disaster). Exceptions: critical infra not in IaC (snowflake servers that can't be rebuilt), IaC that's drifted/stale (rebuild ≠ reality), never-tested rebuild, and IaC/state only available in the failed primary. The evidence — Evidence critical infrastructure is defined in IaC (so it can be rebuilt) + the IaC is version-controlled + current — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live IaC (Terraform / CloudFormation / Bicep) + version control APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. IaC (Terraform / CloudFormation / Bicep) + version control gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from IaC (Terraform / CloudFormation / Bicep) + version control; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Resiliency & Redundancy: \"Infrastructure as code\" Audit Evidence\n\nThe test:\nVerify infrastructure can be rebuilt from code for recovery. PASS: critical infrastructure is defined in version-controlled IaC; the environment can be recreated from IaC in DR (tested); drift between IaC and running state is minimal (a rebuild would match reality); and IaC + its state are stored independently of the primary (available in a disaster). Exceptions: critical infra not in IaC (snowflake servers that can't be rebuilt), IaC that's drifted/stale (rebuild ≠ reality), never-tested rebuild, and IaC/state only available in the failed primary.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- resiliency_inventory.json   (in-scope items — Evidence critical infrastructure is defined in IaC (so it can be rebuilt) + the IaC is version-controlled + current)\n- resiliency_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Infrastructure as code\",\n  \"domain\": \"Resiliency & Redundancy\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{res_",
        "/evidence/resiliency_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Business Continuity / DR\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Infrastructure as code\" control must cover\n# fragment: infrastructure_as_code_",
        "/evidence/resiliency_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "resiliency_inventory.json",
            "isDir": false
          },
          {
            "name": "resiliency_state.json",
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
          "value": "FLAG{res_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/resiliency_inventory.json",
          "value": "infrastructure_as_code_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/resiliency_state.json",
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
          "id": "res-09-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Infrastructure as code\" sub-process of Resiliency & Redundancy?",
          "options": [
            "Deploy and operate the infrastructure as code control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the infrastructure as code control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for infrastructure as code against comparable organisations in the sector",
            "Obtain evidence that the infrastructure as code control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "res-09-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Infrastructure as code\" matter to the broader Resiliency & Redundancy posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Resiliency & Redundancy",
            "It stops mattering once a firewall and endpoint agent are deployed across the Resiliency & Redundancy estate",
            "It is a control other Resiliency & Redundancy controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Resiliency & Redundancy controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "res-09-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Infrastructure as code\" control?",
          "options": [
            "A point-in-time screenshot of one system's infrastructure as code settings, captured during the walkthrough",
            "The Evidence critical infrastructure is defined in IaC (so it can be rebuilt) + the IaC is version-controlled + current, reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the infrastructure as code control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's infrastructure as code capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "res-09-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Infrastructure as code\"?",
          "options": [
            "From IaC (Terraform / CloudFormation / Bicep) + version control and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how infrastructure as code works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. IaC (Terraform / CloudFormation / Bicep) + version control) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "res-09-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Infrastructure as code\"?",
          "options": [
            "The external audit firm, since it is the party examining the infrastructure as code control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the infrastructure as code data is shared, so the accountability sits with no one in particular",
            "Platform / SRE, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Platform / SRE owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "res-09-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Infrastructure as code\", which part stays with the human auditor?",
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
          "id": "res-09-q7",
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
          "id": "res-09-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Infrastructure as code\", which of these is a realistic reportable finding?",
          "options": [
            "Half the production infrastructure was hand-built and isn't in IaC (can't be rebuilt), the Terraform that exists has drifted significantly from reality, and the state file lives only in the primary region a disaster would take out.",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. Half the production infrastructure was hand-built and isn't in IaC (can't be rebuilt), the Terraform that exists has drifted significantly from reality, and the state file lives only in the primary region a disaster would take out. A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "res-09-q9",
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
          "id": "res-09-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Infrastructure as code\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind infrastructure as code, so there is no overlap",
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
    "epochId": "resiliency",
    "id": "res-10",
    "order": 10,
    "title": "Vendor lock-in risk",
    "subtitle": "Agentic technical & privacy audit of the vendor lock-in risk control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 5,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Vendor lock-in risk\" control for Resiliency & Redundancy is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify critical vendor lock-in is assessed + mitigated. PASS: lock-in is assessed for critical vendors/platforms (proprietary coupling, data portability, switching feasibility); an exit/transition plan exists (with escrow where relevant); data + workloads are portable in a usable form; and there's a contingency for a vendor failure/acquisition/repricing. Exceptions: deep un-assessed lock-in to a single vendor, no exit/transition plan, data that can't be extracted in a usable form, and no contingency for losing or being repriced by a critical vendor.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Resiliency & Redundancy systems of record (TPRM (lock-in assessment); Contracts (exit / escrow); Data-portability mechanisms) as tools — e.g. `lock-in assessment per critical vendor: proprietary coupling, data por`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The lock-in assessment per critical vendor/platform (proprietary dependencies, data portability, switching cost/feasibility)",
        "The exit/transition plan + source-code/data escrow where applicable",
        "Data-portability evidence (can data + workloads be extracted in a usable form)",
        "The contingency if a critical vendor fails, is acquired, or changes terms drastically"
      ],
      "system": [
        "TPRM (lock-in assessment)",
        "Contracts (exit / escrow)",
        "Data-portability mechanisms"
      ],
      "dataOwner": [
        "Enterprise architecture + vendor risk",
        "Procurement",
        "Business continuity"
      ],
      "scoring": {
        "ease": "EASE 5/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Resiliency & Redundancy controls."
      }
    },
    "badge": {
      "id": "res-10-badge",
      "name": "Resiliency & Redundancy Auditor",
      "emoji": "♻️"
    },
    "wonder": {
      "name": "Vendor lock-in risk",
      "location": "Resiliency & Redundancy",
      "era": "Present Day",
      "emoji": "♻️"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Vendor lock-in risk\" as a repeatable agentic workflow: pull the real evidence (The lock-in assessment per critical vendor/platform (proprietary dependencies, data portability, switching cost/feasibility)) with read-only agents, run the test against policy, and issue a defensible opinion on the Resiliency & Redundancy control.",
      "year": 2025,
      "overview": [
        "The \"Vendor lock-in risk\" sub-process is one of the controls an auditor must verify for Resiliency & Redundancy. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the lock-in assessment per critical vendor/platform (proprietary dependencies, data portability, switching cost/feasibility), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here TPRM (lock-in assessment), Contracts (exit / escrow), Data-portability mechanisms — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `lock-in assessment per critical vendor: proprietary coupling, data portability, ` — read-only, against the systems of record.",
        "The test itself is specific. Verify critical vendor lock-in is assessed + mitigated. PASS: lock-in is assessed for critical vendors/platforms (proprietary coupling, data portability, switching feasibility); an exit/transition plan exists (with escrow where relevant); data + workloads are portable in a usable form; and there's a contingency for a vendor failure/acquisition/repricing. Exceptions: deep un-assessed lock-in to a single vendor, no exit/transition plan, data that can't be extracted in a usable form, and no contingency for losing or being repriced by a critical vendor. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `10_vendor_lock_in_risk_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from TPRM (lock-in assessment) and Contracts (exit / escrow) (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 10_vendor_lock_in_risk_mcp.py` to expose it to your agent — or `python 10_vendor_lock_in_risk_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Backups that didn't restore",
        "when": "Recurring",
        "where": "DR and continuity programs",
        "impact": "An organization discovers during a real incident that its failover, backups, or runbooks don't work as assumed — extending the outage.",
        "body": [
          "Resilience fails when it's never tested: backups that won't restore, a DR site missing a dependency, or runbooks no one has rehearsed.",
          "Auditors verify BCP/BIA/ITDR, backup and restore testing, failover procedures, replication, and multi-region/HA architecture against stated RTO/RPO."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Resiliency & Redundancy scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull TPRM (lock-in assessment) · Contracts (exit / escrow)",
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
          "event": "OVHcloud fire destroys servers + some customers' only backups",
          "highlight": true
        },
        {
          "year": 2024,
          "event": "Mass outage shows untested recovery extends downtime for days"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Vendor lock-in risk\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "lock-in assessment per critical vendor: proprietary coupling, data portability, switching cost/feasibility\nexit/transition plan + source/data escrow\ndata portability: can data + workloads be extracted in a usable form?\ncontingency for vendor failure / acquisition / drastic repricing"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The lock-in assessment per critical vendor/platform (proprietary dependencies, data portability, switching cost/feasibility).",
        "The test: Verify critical vendor lock-in is assessed + mitigated.",
        "Reconcile the systems of record (TPRM (lock-in assessment), Contracts (exit / escrow), Data-portability mechanisms) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. The business is deeply coupled to one platform's proprietary features with no exit plan; a recent 3x price increase had to be absorbed because there was no feasible migration path and no escrow."
      ],
      "references": [
        {
          "title": "ISO/IEC 27036",
          "url": "https://www.iso.org/standard/59648.html"
        },
        {
          "title": "EU DORA — Exit Strategies",
          "url": "https://www.eba.europa.eu/regulation-and-policy/operational-resilience"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "10_vendor_lock_in_risk_mcp.py",
          "url": "/audit-code/resiliency/10_vendor_lock_in_risk_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Resiliency & Redundancy evidence for \"Vendor lock-in risk\" (the lock-in assessment per critical vendor/platform (proprietary dependencies, data portability, switching cost/feasibility)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Vendor lock-in risk\" control for Resiliency & Redundancy at AcmeCorp. THE TEST: Verify critical vendor lock-in is assessed + mitigated. PASS: lock-in is assessed for critical vendors/platforms (proprietary coupling, data portability, switching feasibility); an exit/transition plan exists (with escrow where relevant); data + workloads are portable in a usable form; and there's a contingency for a vendor failure/acquisition/repricing. Exceptions: deep un-assessed lock-in to a single vendor, no exit/transition plan, data that can't be extracted in a usable form, and no contingency for losing or being repriced by a critical vendor. The evidence — The lock-in assessment per critical vendor/platform (proprietary dependencies, data portability, switching cost/feasibility) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live TPRM (lock-in assessment) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. TPRM (lock-in assessment) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from TPRM (lock-in assessment); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Resiliency & Redundancy: \"Vendor lock-in risk\" Audit Evidence\n\nThe test:\nVerify critical vendor lock-in is assessed + mitigated. PASS: lock-in is assessed for critical vendors/platforms (proprietary coupling, data portability, switching feasibility); an exit/transition plan exists (with escrow where relevant); data + workloads are portable in a usable form; and there's a contingency for a vendor failure/acquisition/repricing. Exceptions: deep un-assessed lock-in to a single vendor, no exit/transition plan, data that can't be extracted in a usable form, and no contingency for losing or being repriced by a critical vendor.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- resiliency_inventory.json   (in-scope items — The lock-in assessment per critical vendor/platform (proprietary dependencies, data portability, switching cost/feasibility))\n- resiliency_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Vendor lock-in risk\",\n  \"domain\": \"Resiliency & Redundancy\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{res_",
        "/evidence/resiliency_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Business Continuity / DR\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Vendor lock-in risk\" control must cover\n# fragment: vendor_lockin_risk_",
        "/evidence/resiliency_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "resiliency_inventory.json",
            "isDir": false
          },
          {
            "name": "resiliency_state.json",
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
          "value": "FLAG{res_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/resiliency_inventory.json",
          "value": "vendor_lockin_risk_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/resiliency_state.json",
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
          "id": "res-10-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Vendor lock-in risk\" sub-process of Resiliency & Redundancy?",
          "options": [
            "Deploy and operate the vendor lock-in risk control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the vendor lock-in risk control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for vendor lock-in risk against comparable organisations in the sector",
            "Obtain evidence that the vendor lock-in risk control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "res-10-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Vendor lock-in risk\" matter to the broader Resiliency & Redundancy posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Resiliency & Redundancy",
            "It stops mattering once a firewall and endpoint agent are deployed across the Resiliency & Redundancy estate",
            "It is a control other Resiliency & Redundancy controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Resiliency & Redundancy controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "res-10-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Vendor lock-in risk\" control?",
          "options": [
            "A point-in-time screenshot of one system's vendor lock-in risk settings, captured during the walkthrough",
            "The The lock-in assessment per critical vendor/platform (proprietary dependencies, data portability, switching cost/feasibility), reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the vendor lock-in risk control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's vendor lock-in risk capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "res-10-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Vendor lock-in risk\"?",
          "options": [
            "From TPRM (lock-in assessment) and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how vendor lock-in risk works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. TPRM (lock-in assessment)) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "res-10-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Vendor lock-in risk\"?",
          "options": [
            "The external audit firm, since it is the party examining the vendor lock-in risk control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the vendor lock-in risk data is shared, so the accountability sits with no one in particular",
            "Enterprise architecture + vendor risk, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Enterprise architecture + vendor risk owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "res-10-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Vendor lock-in risk\", which part stays with the human auditor?",
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
          "id": "res-10-q7",
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
          "id": "res-10-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Vendor lock-in risk\", which of these is a realistic reportable finding?",
          "options": [
            "The business is deeply coupled to one platform's proprietary features with no exit plan; a recent 3x price increase had to be absorbed because there was no feasible migration path and no escrow.",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. The business is deeply coupled to one platform's proprietary features with no exit plan; a recent 3x price increase had to be absorbed because there was no feasible migration path and no escrow. A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "res-10-q9",
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
          "id": "res-10-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Vendor lock-in risk\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind vendor lock-in risk, so there is no overlap",
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
    "epochId": "resiliency",
    "id": "res-11",
    "order": 11,
    "title": "Secret and certificate management",
    "subtitle": "Agentic technical & privacy audit of the secret and certificate management control",
    "category": "cybersecurity",
    "xp": 180,
    "easeScore": 6,
    "valueScore": 9,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Secret and certificate management\" control for Resiliency & Redundancy is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify secrets + certificates don't become a single point of failure for resilience. PASS: secrets + certs are replicated/available in the DR environment; certificate expiry is monitored + auto-renewed (no expiry-driven outages); the secrets-management/PKI system itself has a recovery plan; and there's no hard dependency on a single primary-region vault/CA. Exceptions: DR can't access secrets/certs (recovery blocked), expiring certs causing outages, no recovery plan for the vault/PKI, and a single-region vault/CA that a disaster locks (taking everything with it).",
      "approach": "An audit agent calls a read-only MCP server that wraps the Resiliency & Redundancy systems of record (Secrets manager / Vault (replication / DR); Certificate management (expiry monitoring + auto-renew); PKI / CA (DR)) as tools — e.g. `are secrets + certs replicated to / accessible from the DR environment`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "Evidence secrets + certificates are available in DR (replicated to / accessible from the recovery environment)",
        "Certificate-expiry monitoring (expiries that would cause an outage) + auto-renewal",
        "The recovery procedure for the secrets-management / PKI system itself (it's a dependency for everything)",
        "No hard dependency on a single secrets/PKI instance in the primary region"
      ],
      "system": [
        "Secrets manager / Vault (replication / DR)",
        "Certificate management (expiry monitoring + auto-renew)",
        "PKI / CA (DR)"
      ],
      "dataOwner": [
        "Platform security / PKI",
        "SRE",
        "Business continuity"
      ],
      "scoring": {
        "ease": "EASE 6/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 9/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Resiliency & Redundancy controls."
      }
    },
    "badge": {
      "id": "res-11-badge",
      "name": "Resiliency & Redundancy Auditor",
      "emoji": "♻️"
    },
    "wonder": {
      "name": "Secret and certificate management",
      "location": "Resiliency & Redundancy",
      "era": "Present Day",
      "emoji": "♻️"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Secret and certificate management\" as a repeatable agentic workflow: pull the real evidence (Evidence secrets + certificates are available in DR (replicated to / accessible from the recovery environment)) with read-only agents, run the test against policy, and issue a defensible opinion on the Resiliency & Redundancy control.",
      "year": 2025,
      "overview": [
        "The \"Secret and certificate management\" sub-process is one of the controls an auditor must verify for Resiliency & Redundancy. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me evidence secrets + certificates are available in DR (replicated to / accessible from the recovery environment), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Secrets manager / Vault (replication / DR), Certificate management (expiry monitoring + auto-renew), PKI / CA (DR) — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `are secrets + certs replicated to / accessible from the DR environment?` — read-only, against the systems of record.",
        "The test itself is specific. Verify secrets + certificates don't become a single point of failure for resilience. PASS: secrets + certs are replicated/available in the DR environment; certificate expiry is monitored + auto-renewed (no expiry-driven outages); the secrets-management/PKI system itself has a recovery plan; and there's no hard dependency on a single primary-region vault/CA. Exceptions: DR can't access secrets/certs (recovery blocked), expiring certs causing outages, no recovery plan for the vault/PKI, and a single-region vault/CA that a disaster locks (taking everything with it). The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `11_secret_and_certificate_management_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Secrets manager / Vault (replication / DR) and Certificate management (expiry monitoring + auto-renew) (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 11_secret_and_certificate_management_mcp.py` to expose it to your agent — or `python 11_secret_and_certificate_management_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Backups that didn't restore",
        "when": "Recurring",
        "where": "DR and continuity programs",
        "impact": "An organization discovers during a real incident that its failover, backups, or runbooks don't work as assumed — extending the outage.",
        "body": [
          "Resilience fails when it's never tested: backups that won't restore, a DR site missing a dependency, or runbooks no one has rehearsed.",
          "Auditors verify BCP/BIA/ITDR, backup and restore testing, failover procedures, replication, and multi-region/HA architecture against stated RTO/RPO."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Resiliency & Redundancy scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull Secrets manager / Vault (replication / DR) · Certificate management (expiry monitoring + auto-renew)",
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
          "event": "OVHcloud fire destroys servers + some customers' only backups",
          "highlight": true
        },
        {
          "year": 2024,
          "event": "Mass outage shows untested recovery extends downtime for days"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Secret and certificate management\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "are secrets + certs replicated to / accessible from the DR environment?\ncertificate-expiry monitoring + auto-renewal (the surprise-outage class)\nrecovery plan for the secrets-manager / PKI itself\nsingle-region vault/CA dependency that a disaster would lock"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: Evidence secrets + certificates are available in DR (replicated to / accessible from the recovery environment).",
        "The test: Verify secrets + certificates don't become a single point of failure for resilience.",
        "Reconcile the systems of record (Secrets manager / Vault (replication / DR), Certificate management (expiry monitoring + auto-renew), PKI / CA (DR)) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. The Vault cluster is single-region with no DR replica, so a regional failure would lock every workload out of its secrets; and three production certs expired last quarter because nothing monitors expiry."
      ],
      "references": [
        {
          "title": "NIST SP 800-57",
          "url": "https://csrc.nist.gov/projects/key-management"
        },
        {
          "title": "NIST SP 800-34",
          "url": "https://csrc.nist.gov/pubs/sp/800/34/r1/final"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "11_secret_and_certificate_management_mcp.py",
          "url": "/audit-code/resiliency/11_secret_and_certificate_management_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Resiliency & Redundancy evidence for \"Secret and certificate management\" (evidence secrets + certificates are available in dr (replicated to / accessible from the recovery environment)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Secret and certificate management\" control for Resiliency & Redundancy at AcmeCorp. THE TEST: Verify secrets + certificates don't become a single point of failure for resilience. PASS: secrets + certs are replicated/available in the DR environment; certificate expiry is monitored + auto-renewed (no expiry-driven outages); the secrets-management/PKI system itself has a recovery plan; and there's no hard dependency on a single primary-region vault/CA. Exceptions: DR can't access secrets/certs (recovery blocked), expiring certs causing outages, no recovery plan for the vault/PKI, and a single-region vault/CA that a disaster locks (taking everything with it). The evidence — Evidence secrets + certificates are available in DR (replicated to / accessible from the recovery environment) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Secrets manager / Vault (replication / DR) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Secrets manager / Vault (replication / DR) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Secrets manager / Vault (replication / DR); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Resiliency & Redundancy: \"Secret and certificate management\" Audit Evidence\n\nThe test:\nVerify secrets + certificates don't become a single point of failure for resilience. PASS: secrets + certs are replicated/available in the DR environment; certificate expiry is monitored + auto-renewed (no expiry-driven outages); the secrets-management/PKI system itself has a recovery plan; and there's no hard dependency on a single primary-region vault/CA. Exceptions: DR can't access secrets/certs (recovery blocked), expiring certs causing outages, no recovery plan for the vault/PKI, and a single-region vault/CA that a disaster locks (taking everything with it).\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- resiliency_inventory.json   (in-scope items — Evidence secrets + certificates are available in DR (replicated to / accessible from the recovery environment))\n- resiliency_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Secret and certificate management\",\n  \"domain\": \"Resiliency & Redundancy\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{res_",
        "/evidence/resiliency_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Business Continuity / DR\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Secret and certificate management\" control must cover\n# fragment: secret_certificate_management_",
        "/evidence/resiliency_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "resiliency_inventory.json",
            "isDir": false
          },
          {
            "name": "resiliency_state.json",
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
          "value": "FLAG{res_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/resiliency_inventory.json",
          "value": "secret_certificate_management_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/resiliency_state.json",
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
          "id": "res-11-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Secret and certificate management\" sub-process of Resiliency & Redundancy?",
          "options": [
            "Deploy and operate the secret and certificate management control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the secret and certificate management control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for secret and certificate management against comparable organisations in the sector",
            "Obtain evidence that the secret and certificate management control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "res-11-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Secret and certificate management\" matter to the broader Resiliency & Redundancy posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Resiliency & Redundancy",
            "It stops mattering once a firewall and endpoint agent are deployed across the Resiliency & Redundancy estate",
            "It is a control other Resiliency & Redundancy controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Resiliency & Redundancy controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "res-11-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Secret and certificate management\" control?",
          "options": [
            "A point-in-time screenshot of one system's secret and certificate management settings, captured during the walkthrough",
            "The Evidence secrets + certificates are available in DR (replicated to / accessible from the recovery environment), reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the secret and certificate management control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's secret and certificate management capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "res-11-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Secret and certificate management\"?",
          "options": [
            "From Secrets manager / Vault (replication / DR) and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how secret and certificate management works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. Secrets manager / Vault (replication / DR)) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "res-11-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Secret and certificate management\"?",
          "options": [
            "The external audit firm, since it is the party examining the secret and certificate management control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the secret and certificate management data is shared, so the accountability sits with no one in particular",
            "Platform security / PKI, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Platform security / PKI owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "res-11-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Secret and certificate management\", which part stays with the human auditor?",
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
          "id": "res-11-q7",
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
          "id": "res-11-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Secret and certificate management\", which of these is a realistic reportable finding?",
          "options": [
            "The Vault cluster is single-region with no DR replica, so a regional failure would lock every workload out of its secrets; and three production certs expired last quarter because nothing monitors expiry.",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. The Vault cluster is single-region with no DR replica, so a regional failure would lock every workload out of its secrets; and three production certs expired last quarter because nothing monitors expiry. A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "res-11-q9",
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
          "id": "res-11-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Secret and certificate management\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind secret and certificate management, so there is no overlap",
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
    "epochId": "resiliency",
    "id": "res-12",
    "order": 12,
    "title": "High-availability architecture",
    "subtitle": "Agentic technical & privacy audit of the high-availability architecture control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 5,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"High-availability architecture\" control for Resiliency & Redundancy is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify critical services are architected for high availability. PASS: critical services run redundant instances behind load balancing with health checks + auto-healing (no single-instance SPOF); the stack is SPOF-analyzed + mitigated end-to-end; and achieved availability meets the SLO. Exceptions: single-instance services (one crash = outage), no health checks/auto-healing, unmitigated SPOFs in the stack (a single LB/cache/queue), and availability below the SLO.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Resiliency & Redundancy systems of record (Load balancers + redundant instances + auto-scaling; Health checks + auto-healing; The full service stack (LB/cache/queue/DB)) as tools — e.g. `per critical service: redundant instances + LB + health checks + auto-`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The HA design per critical service (redundant instances, load balancing, health checks, auto-scaling, no SPOF)",
        "SPOF analysis across the stack (any single instance/component whose loss = outage)",
        "Health-check + auto-healing config (unhealthy instances replaced automatically)",
        "Uptime/availability achieved vs the SLA/SLO"
      ],
      "system": [
        "Load balancers + redundant instances + auto-scaling",
        "Health checks + auto-healing",
        "The full service stack (LB/cache/queue/DB)"
      ],
      "dataOwner": [
        "SRE / platform",
        "Application owners",
        "Architecture"
      ],
      "scoring": {
        "ease": "EASE 5/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Resiliency & Redundancy controls."
      }
    },
    "badge": {
      "id": "res-12-badge",
      "name": "Resiliency & Redundancy Auditor",
      "emoji": "♻️"
    },
    "wonder": {
      "name": "High-availability architecture",
      "location": "Resiliency & Redundancy",
      "era": "Present Day",
      "emoji": "♻️"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"High-availability architecture\" as a repeatable agentic workflow: pull the real evidence (The HA design per critical service (redundant instances, load balancing, health checks, auto-scaling, no SPOF)) with read-only agents, run the test against policy, and issue a defensible opinion on the Resiliency & Redundancy control.",
      "year": 2025,
      "overview": [
        "The \"High-availability architecture\" sub-process is one of the controls an auditor must verify for Resiliency & Redundancy. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the HA design per critical service (redundant instances, load balancing, health checks, auto-scaling, no SPOF), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Load balancers + redundant instances + auto-scaling, Health checks + auto-healing, The full service stack (LB/cache/queue/DB) — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `per critical service: redundant instances + LB + health checks + auto-healing (n` — read-only, against the systems of record.",
        "The test itself is specific. Verify critical services are architected for high availability. PASS: critical services run redundant instances behind load balancing with health checks + auto-healing (no single-instance SPOF); the stack is SPOF-analyzed + mitigated end-to-end; and achieved availability meets the SLO. Exceptions: single-instance services (one crash = outage), no health checks/auto-healing, unmitigated SPOFs in the stack (a single LB/cache/queue), and availability below the SLO. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `12_high_availability_architecture_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Load balancers + redundant instances + auto-scaling and Health checks + auto-healing (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 12_high_availability_architecture_mcp.py` to expose it to your agent — or `python 12_high_availability_architecture_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Backups that didn't restore",
        "when": "Recurring",
        "where": "DR and continuity programs",
        "impact": "An organization discovers during a real incident that its failover, backups, or runbooks don't work as assumed — extending the outage.",
        "body": [
          "Resilience fails when it's never tested: backups that won't restore, a DR site missing a dependency, or runbooks no one has rehearsed.",
          "Auditors verify BCP/BIA/ITDR, backup and restore testing, failover procedures, replication, and multi-region/HA architecture against stated RTO/RPO."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Resiliency & Redundancy scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull Load balancers + redundant instances + auto-scaling · Health checks + auto-healing",
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
          "event": "OVHcloud fire destroys servers + some customers' only backups",
          "highlight": true
        },
        {
          "year": 2024,
          "event": "Mass outage shows untested recovery extends downtime for days"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"High-availability architecture\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "per critical service: redundant instances + LB + health checks + auto-healing (no single-instance SPOF)\nend-to-end SPOF analysis (a single LB/cache/queue/DB that takes the service down)\nhealth-check + auto-healing config (are unhealthy instances replaced?)\nachieved availability vs the SLO"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The HA design per critical service (redundant instances, load balancing, health checks, auto-scaling, no SPOF).",
        "The test: Verify critical services are architected for high availability.",
        "Reconcile the systems of record (Load balancers + redundant instances + auto-scaling, Health checks + auto-healing, The full service stack (LB/cache/queue/DB)) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. A tier-1 service runs a single instance with no load balancer or health check, and the shared message queue behind several services is a single non-redundant node — multiple SPOFs that each cause a full outage on failure."
      ],
      "references": [
        {
          "title": "AWS Well-Architected — Reliability",
          "url": "https://docs.aws.amazon.com/wellarchitected/latest/reliability-pillar/welcome.html"
        },
        {
          "title": "Google SRE",
          "url": "https://sre.google/books/"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "12_high_availability_architecture_mcp.py",
          "url": "/audit-code/resiliency/12_high_availability_architecture_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Resiliency & Redundancy evidence for \"High-availability architecture\" (the ha design per critical service (redundant instances, load balancing, health checks, auto-scaling, no spof)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"High-availability architecture\" control for Resiliency & Redundancy at AcmeCorp. THE TEST: Verify critical services are architected for high availability. PASS: critical services run redundant instances behind load balancing with health checks + auto-healing (no single-instance SPOF); the stack is SPOF-analyzed + mitigated end-to-end; and achieved availability meets the SLO. Exceptions: single-instance services (one crash = outage), no health checks/auto-healing, unmitigated SPOFs in the stack (a single LB/cache/queue), and availability below the SLO. The evidence — The HA design per critical service (redundant instances, load balancing, health checks, auto-scaling, no SPOF) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Load balancers + redundant instances + auto-scaling APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Load balancers + redundant instances + auto-scaling gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Load balancers + redundant instances + auto-scaling; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Resiliency & Redundancy: \"High-availability architecture\" Audit Evidence\n\nThe test:\nVerify critical services are architected for high availability. PASS: critical services run redundant instances behind load balancing with health checks + auto-healing (no single-instance SPOF); the stack is SPOF-analyzed + mitigated end-to-end; and achieved availability meets the SLO. Exceptions: single-instance services (one crash = outage), no health checks/auto-healing, unmitigated SPOFs in the stack (a single LB/cache/queue), and availability below the SLO.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- resiliency_inventory.json   (in-scope items — The HA design per critical service (redundant instances, load balancing, health checks, auto-scaling, no SPOF))\n- resiliency_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"High-availability architecture\",\n  \"domain\": \"Resiliency & Redundancy\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{res_",
        "/evidence/resiliency_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Business Continuity / DR\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"High-availability architecture\" control must cover\n# fragment: highavailability_architecture_",
        "/evidence/resiliency_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "resiliency_inventory.json",
            "isDir": false
          },
          {
            "name": "resiliency_state.json",
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
          "value": "FLAG{res_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/resiliency_inventory.json",
          "value": "highavailability_architecture_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/resiliency_state.json",
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
          "id": "res-12-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"High-availability architecture\" sub-process of Resiliency & Redundancy?",
          "options": [
            "Deploy and operate the high-availability architecture control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the high-availability architecture control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for high-availability architecture against comparable organisations in the sector",
            "Obtain evidence that the high-availability architecture control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "res-12-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"High-availability architecture\" matter to the broader Resiliency & Redundancy posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Resiliency & Redundancy",
            "It stops mattering once a firewall and endpoint agent are deployed across the Resiliency & Redundancy estate",
            "It is a control other Resiliency & Redundancy controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Resiliency & Redundancy controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "res-12-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"High-availability architecture\" control?",
          "options": [
            "A point-in-time screenshot of one system's high-availability architecture settings, captured during the walkthrough",
            "The The HA design per critical service (redundant instances, load balancing, health checks, auto-scaling, no SPOF), reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the high-availability architecture control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's high-availability architecture capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "res-12-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"High-availability architecture\"?",
          "options": [
            "From Load balancers + redundant instances + auto-scaling and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how high-availability architecture works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. Load balancers + redundant instances + auto-scaling) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "res-12-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"High-availability architecture\"?",
          "options": [
            "The external audit firm, since it is the party examining the high-availability architecture control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the high-availability architecture data is shared, so the accountability sits with no one in particular",
            "SRE / platform, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "SRE / platform owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "res-12-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"High-availability architecture\", which part stays with the human auditor?",
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
          "id": "res-12-q7",
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
          "id": "res-12-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"High-availability architecture\", which of these is a realistic reportable finding?",
          "options": [
            "A tier-1 service runs a single instance with no load balancer or health check, and the shared message queue behind several services is a single non-redundant node — multiple SPOFs that each cause a full outage on failure.",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. A tier-1 service runs a single instance with no load balancer or health check, and the shared message queue behind several services is a single non-redundant node — multiple SPOFs that each cause a full outage on failure. A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "res-12-q9",
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
          "id": "res-12-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"High-availability architecture\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind high-availability architecture, so there is no overlap",
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
    "epochId": "resiliency",
    "id": "res-13",
    "order": 13,
    "title": "Chaos engineering",
    "subtitle": "Agentic technical & privacy audit of the chaos engineering control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 3,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Chaos engineering\" control for Resiliency & Redundancy is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify the org proactively validates resilience (chaos engineering). PASS: a resilience-testing/chaos program runs controlled fault-injection + game days against critical systems with safety controls (blast-radius limits, abort); experiments validate real failure modes (instance/AZ/dependency loss); and findings drive remediation. Exceptions: no proactive resilience testing (resilience assumed, never validated), chaos run with no safety controls, experiments that found weaknesses never fixed, and critical failure modes never tested.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Resiliency & Redundancy systems of record (Chaos tooling (Gremlin / AWS FIS / Chaos Mesh); Game-day process; Findings / remediation tracker) as tools — e.g. `the chaos/resilience-testing program + scope (instance / AZ / dependen`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The chaos-engineering / resilience-testing program (controlled fault injection, game days) + its scope",
        "Experiment records (hypothesis, fault injected, blast-radius control, findings)",
        "Evidence findings drive resilience fixes (weaknesses found are remediated)",
        "Safety controls on chaos experiments (blast-radius limits, abort, non-prod-first)"
      ],
      "system": [
        "Chaos tooling (Gremlin / AWS FIS / Chaos Mesh)",
        "Game-day process",
        "Findings / remediation tracker"
      ],
      "dataOwner": [
        "SRE / resilience engineering",
        "Platform",
        "Service owners"
      ],
      "scoring": {
        "ease": "EASE 3/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Resiliency & Redundancy controls."
      }
    },
    "badge": {
      "id": "res-13-badge",
      "name": "Resiliency & Redundancy Auditor",
      "emoji": "♻️"
    },
    "wonder": {
      "name": "Chaos engineering",
      "location": "Resiliency & Redundancy",
      "era": "Present Day",
      "emoji": "♻️"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Chaos engineering\" as a repeatable agentic workflow: pull the real evidence (The chaos-engineering / resilience-testing program (controlled fault injection, game days) + its scope) with read-only agents, run the test against policy, and issue a defensible opinion on the Resiliency & Redundancy control.",
      "year": 2025,
      "overview": [
        "The \"Chaos engineering\" sub-process is one of the controls an auditor must verify for Resiliency & Redundancy. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the chaos-engineering / resilience-testing program (controlled fault injection, game days) + its scope, for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Chaos tooling (Gremlin / AWS FIS / Chaos Mesh), Game-day process, Findings / remediation tracker — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `the chaos/resilience-testing program + scope (instance / AZ / dependency / laten` — read-only, against the systems of record.",
        "The test itself is specific. Verify the org proactively validates resilience (chaos engineering). PASS: a resilience-testing/chaos program runs controlled fault-injection + game days against critical systems with safety controls (blast-radius limits, abort); experiments validate real failure modes (instance/AZ/dependency loss); and findings drive remediation. Exceptions: no proactive resilience testing (resilience assumed, never validated), chaos run with no safety controls, experiments that found weaknesses never fixed, and critical failure modes never tested. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `13_chaos_engineering_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Chaos tooling (Gremlin / AWS FIS / Chaos Mesh) and Game-day process (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 13_chaos_engineering_mcp.py` to expose it to your agent — or `python 13_chaos_engineering_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Backups that didn't restore",
        "when": "Recurring",
        "where": "DR and continuity programs",
        "impact": "An organization discovers during a real incident that its failover, backups, or runbooks don't work as assumed — extending the outage.",
        "body": [
          "Resilience fails when it's never tested: backups that won't restore, a DR site missing a dependency, or runbooks no one has rehearsed.",
          "Auditors verify BCP/BIA/ITDR, backup and restore testing, failover procedures, replication, and multi-region/HA architecture against stated RTO/RPO."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Resiliency & Redundancy scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull Chaos tooling (Gremlin / AWS FIS / Chaos Mesh) · Game-day process",
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
          "event": "OVHcloud fire destroys servers + some customers' only backups",
          "highlight": true
        },
        {
          "year": 2024,
          "event": "Mass outage shows untested recovery extends downtime for days"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Chaos engineering\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "the chaos/resilience-testing program + scope (instance / AZ / dependency / latency faults)\nexperiment records: hypothesis, fault, blast-radius control, findings\ndo findings drive remediation (fixes tracked)?\nsafety controls: blast-radius limits + abort + non-prod-first"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The chaos-engineering / resilience-testing program (controlled fault injection, game days) + its scope.",
        "The test: Verify the org proactively validates resilience (chaos engineering).",
        "Reconcile the systems of record (Chaos tooling (Gremlin / AWS FIS / Chaos Mesh), Game-day process, Findings / remediation tracker) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. There is no chaos/resilience testing — failure modes are assumed handled but never validated; when a real AZ event hit, several 'resilient' services failed in ways a single game day would have caught."
      ],
      "references": [
        {
          "title": "Principles of Chaos Engineering",
          "url": "https://principlesofchaos.org/"
        },
        {
          "title": "AWS Fault Injection Service",
          "url": "https://aws.amazon.com/fis/"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "13_chaos_engineering_mcp.py",
          "url": "/audit-code/resiliency/13_chaos_engineering_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Resiliency & Redundancy evidence for \"Chaos engineering\" (the chaos-engineering / resilience-testing program (controlled fault injection, game days) + its scope), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Chaos engineering\" control for Resiliency & Redundancy at AcmeCorp. THE TEST: Verify the org proactively validates resilience (chaos engineering). PASS: a resilience-testing/chaos program runs controlled fault-injection + game days against critical systems with safety controls (blast-radius limits, abort); experiments validate real failure modes (instance/AZ/dependency loss); and findings drive remediation. Exceptions: no proactive resilience testing (resilience assumed, never validated), chaos run with no safety controls, experiments that found weaknesses never fixed, and critical failure modes never tested. The evidence — The chaos-engineering / resilience-testing program (controlled fault injection, game days) + its scope — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Chaos tooling (Gremlin / AWS FIS / Chaos Mesh) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Chaos tooling (Gremlin / AWS FIS / Chaos Mesh) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Chaos tooling (Gremlin / AWS FIS / Chaos Mesh); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Resiliency & Redundancy: \"Chaos engineering\" Audit Evidence\n\nThe test:\nVerify the org proactively validates resilience (chaos engineering). PASS: a resilience-testing/chaos program runs controlled fault-injection + game days against critical systems with safety controls (blast-radius limits, abort); experiments validate real failure modes (instance/AZ/dependency loss); and findings drive remediation. Exceptions: no proactive resilience testing (resilience assumed, never validated), chaos run with no safety controls, experiments that found weaknesses never fixed, and critical failure modes never tested.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- resiliency_inventory.json   (in-scope items — The chaos-engineering / resilience-testing program (controlled fault injection, game days) + its scope)\n- resiliency_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Chaos engineering\",\n  \"domain\": \"Resiliency & Redundancy\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{res_",
        "/evidence/resiliency_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Business Continuity / DR\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Chaos engineering\" control must cover\n# fragment: chaos_engineering_",
        "/evidence/resiliency_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "resiliency_inventory.json",
            "isDir": false
          },
          {
            "name": "resiliency_state.json",
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
          "value": "FLAG{res_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/resiliency_inventory.json",
          "value": "chaos_engineering_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/resiliency_state.json",
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
          "id": "res-13-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Chaos engineering\" sub-process of Resiliency & Redundancy?",
          "options": [
            "Deploy and operate the chaos engineering control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the chaos engineering control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for chaos engineering against comparable organisations in the sector",
            "Obtain evidence that the chaos engineering control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "res-13-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Chaos engineering\" matter to the broader Resiliency & Redundancy posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Resiliency & Redundancy",
            "It stops mattering once a firewall and endpoint agent are deployed across the Resiliency & Redundancy estate",
            "It is a control other Resiliency & Redundancy controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Resiliency & Redundancy controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "res-13-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Chaos engineering\" control?",
          "options": [
            "A point-in-time screenshot of one system's chaos engineering settings, captured during the walkthrough",
            "The The chaos-engineering / resilience-testing program (controlled fault injection, game days) + its scope, reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the chaos engineering control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's chaos engineering capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "res-13-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Chaos engineering\"?",
          "options": [
            "From Chaos tooling (Gremlin / AWS FIS / Chaos Mesh) and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how chaos engineering works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. Chaos tooling (Gremlin / AWS FIS / Chaos Mesh)) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "res-13-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Chaos engineering\"?",
          "options": [
            "The external audit firm, since it is the party examining the chaos engineering control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the chaos engineering data is shared, so the accountability sits with no one in particular",
            "SRE / resilience engineering, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "SRE / resilience engineering owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "res-13-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Chaos engineering\", which part stays with the human auditor?",
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
          "id": "res-13-q7",
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
          "id": "res-13-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Chaos engineering\", which of these is a realistic reportable finding?",
          "options": [
            "There is no chaos/resilience testing — failure modes are assumed handled but never validated; when a real AZ event hit, several 'resilient' services failed in ways a single game day would have caught.",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. There is no chaos/resilience testing — failure modes are assumed handled but never validated; when a real AZ event hit, several 'resilient' services failed in ways a single game day would have caught. A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "res-13-q9",
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
          "id": "res-13-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Chaos engineering\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind chaos engineering, so there is no overlap",
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
    "epochId": "resiliency",
    "id": "res-14",
    "order": 14,
    "title": "SLA and SLO monitoring",
    "subtitle": "Agentic technical & privacy audit of the sla and slo monitoring control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 7,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"SLA and SLO monitoring\" control for Resiliency & Redundancy is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify reliability is measured + managed against SLOs/SLAs. PASS: critical services have defined SLOs/SLIs (availability/latency/errors) + customer SLAs; SLOs are monitored with error-budget tracking + burn alerting; SLO breaches / error-budget exhaustion prioritise reliability work; and customer SLA performance is tracked. Exceptions: no SLOs (reliability unmeasured), no error-budget / burn alerting, SLO breaches that drive no action, and customer SLA breaches unnoticed/uncredited.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Resiliency & Redundancy systems of record (Observability (Datadog / Prometheus + Grafana / Honeycomb) + SLO tracking; Error-budget tooling; Customer SLA reporting) as tools — e.g. `defined SLOs/SLIs per critical service (availability/latency/error) + `, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The defined SLOs/SLIs per critical service (availability, latency, error rate) + the SLA commitments to customers",
        "SLO monitoring + error-budget tracking + alerting on burn",
        "Evidence SLO breaches drive action (reliability work prioritized when error budget is spent)",
        "Customer-facing SLA performance + credit history"
      ],
      "system": [
        "Observability (Datadog / Prometheus + Grafana / Honeycomb) + SLO tracking",
        "Error-budget tooling",
        "Customer SLA reporting"
      ],
      "dataOwner": [
        "SRE / reliability",
        "Service owners",
        "Customer success (SLAs)"
      ],
      "scoring": {
        "ease": "EASE 7/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Resiliency & Redundancy controls."
      }
    },
    "badge": {
      "id": "res-14-badge",
      "name": "Resiliency & Redundancy Auditor",
      "emoji": "♻️"
    },
    "wonder": {
      "name": "SLA and SLO monitoring",
      "location": "Resiliency & Redundancy",
      "era": "Present Day",
      "emoji": "♻️"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"SLA and SLO monitoring\" as a repeatable agentic workflow: pull the real evidence (The defined SLOs/SLIs per critical service (availability, latency, error rate) + the SLA commitments to customers) with read-only agents, run the test against policy, and issue a defensible opinion on the Resiliency & Redundancy control.",
      "year": 2025,
      "overview": [
        "The \"SLA and SLO monitoring\" sub-process is one of the controls an auditor must verify for Resiliency & Redundancy. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the defined SLOs/SLIs per critical service (availability, latency, error rate) + the SLA commitments to customers, for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Observability (Datadog / Prometheus + Grafana / Honeycomb) + SLO tracking, Error-budget tooling, Customer SLA reporting — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `defined SLOs/SLIs per critical service (availability/latency/error) + customer S` — read-only, against the systems of record.",
        "The test itself is specific. Verify reliability is measured + managed against SLOs/SLAs. PASS: critical services have defined SLOs/SLIs (availability/latency/errors) + customer SLAs; SLOs are monitored with error-budget tracking + burn alerting; SLO breaches / error-budget exhaustion prioritise reliability work; and customer SLA performance is tracked. Exceptions: no SLOs (reliability unmeasured), no error-budget / burn alerting, SLO breaches that drive no action, and customer SLA breaches unnoticed/uncredited. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `14_sla_and_slo_monitoring_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Observability (Datadog / Prometheus + Grafana / Honeycomb) + SLO tracking and Error-budget tooling (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 14_sla_and_slo_monitoring_mcp.py` to expose it to your agent — or `python 14_sla_and_slo_monitoring_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Backups that didn't restore",
        "when": "Recurring",
        "where": "DR and continuity programs",
        "impact": "An organization discovers during a real incident that its failover, backups, or runbooks don't work as assumed — extending the outage.",
        "body": [
          "Resilience fails when it's never tested: backups that won't restore, a DR site missing a dependency, or runbooks no one has rehearsed.",
          "Auditors verify BCP/BIA/ITDR, backup and restore testing, failover procedures, replication, and multi-region/HA architecture against stated RTO/RPO."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Resiliency & Redundancy scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull Observability (Datadog / Prometheus + Grafana / Honeycomb) + SLO tracking · Error-budget tooling",
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
          "event": "OVHcloud fire destroys servers + some customers' only backups",
          "highlight": true
        },
        {
          "year": 2024,
          "event": "Mass outage shows untested recovery extends downtime for days"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"SLA and SLO monitoring\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "defined SLOs/SLIs per critical service (availability/latency/error) + customer SLAs\nSLO monitoring + error-budget tracking + burn alerting\ndo SLO breaches / error-budget exhaustion prioritise reliability work?\ncustomer SLA performance + credit history"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The defined SLOs/SLIs per critical service (availability, latency, error rate) + the SLA commitments to customers.",
        "The test: Verify reliability is measured + managed against SLOs/SLAs.",
        "Reconcile the systems of record (Observability (Datadog / Prometheus + Grafana / Honeycomb) + SLO tracking, Error-budget tooling, Customer SLA reporting) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. There are no SLOs or error budgets, so reliability is unmeasured and never prioritised until customers complain; a customer-facing SLA was breached for months with no credits issued because no one tracked it."
      ],
      "references": [
        {
          "title": "Google SRE — SLOs & Error Budgets",
          "url": "https://sre.google/sre-book/service-level-objectives/"
        },
        {
          "title": "ITIL 4 — Service Level Management",
          "url": "https://www.axelos.com/certifications/itil-service-management"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "14_sla_and_slo_monitoring_mcp.py",
          "url": "/audit-code/resiliency/14_sla_and_slo_monitoring_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Resiliency & Redundancy evidence for \"SLA and SLO monitoring\" (the defined slos/slis per critical service (availability, latency, error rate) + the sla commitments to customers), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"SLA and SLO monitoring\" control for Resiliency & Redundancy at AcmeCorp. THE TEST: Verify reliability is measured + managed against SLOs/SLAs. PASS: critical services have defined SLOs/SLIs (availability/latency/errors) + customer SLAs; SLOs are monitored with error-budget tracking + burn alerting; SLO breaches / error-budget exhaustion prioritise reliability work; and customer SLA performance is tracked. Exceptions: no SLOs (reliability unmeasured), no error-budget / burn alerting, SLO breaches that drive no action, and customer SLA breaches unnoticed/uncredited. The evidence — The defined SLOs/SLIs per critical service (availability, latency, error rate) + the SLA commitments to customers — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Observability (Datadog / Prometheus + Grafana / Honeycomb) + SLO tracking APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Observability (Datadog / Prometheus + Grafana / Honeycomb) + SLO tracking gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Observability (Datadog / Prometheus + Grafana / Honeycomb) + SLO tracking; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Resiliency & Redundancy: \"SLA and SLO monitoring\" Audit Evidence\n\nThe test:\nVerify reliability is measured + managed against SLOs/SLAs. PASS: critical services have defined SLOs/SLIs (availability/latency/errors) + customer SLAs; SLOs are monitored with error-budget tracking + burn alerting; SLO breaches / error-budget exhaustion prioritise reliability work; and customer SLA performance is tracked. Exceptions: no SLOs (reliability unmeasured), no error-budget / burn alerting, SLO breaches that drive no action, and customer SLA breaches unnoticed/uncredited.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- resiliency_inventory.json   (in-scope items — The defined SLOs/SLIs per critical service (availability, latency, error rate) + the SLA commitments to customers)\n- resiliency_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"SLA and SLO monitoring\",\n  \"domain\": \"Resiliency & Redundancy\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{res_",
        "/evidence/resiliency_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Business Continuity / DR\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"SLA and SLO monitoring\" control must cover\n# fragment: sla_slo_monitoring_",
        "/evidence/resiliency_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "resiliency_inventory.json",
            "isDir": false
          },
          {
            "name": "resiliency_state.json",
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
          "value": "FLAG{res_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/resiliency_inventory.json",
          "value": "sla_slo_monitoring_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/resiliency_state.json",
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
          "id": "res-14-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"SLA and SLO monitoring\" sub-process of Resiliency & Redundancy?",
          "options": [
            "Deploy and operate the sla and slo monitoring control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the sla and slo monitoring control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for sla and slo monitoring against comparable organisations in the sector",
            "Obtain evidence that the sla and slo monitoring control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "res-14-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"SLA and SLO monitoring\" matter to the broader Resiliency & Redundancy posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Resiliency & Redundancy",
            "It stops mattering once a firewall and endpoint agent are deployed across the Resiliency & Redundancy estate",
            "It is a control other Resiliency & Redundancy controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Resiliency & Redundancy controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "res-14-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"SLA and SLO monitoring\" control?",
          "options": [
            "A point-in-time screenshot of one system's sla and slo monitoring settings, captured during the walkthrough",
            "The The defined SLOs/SLIs per critical service (availability, latency, error rate) + the SLA commitments to customers, reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the sla and slo monitoring control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's sla and slo monitoring capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "res-14-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"SLA and SLO monitoring\"?",
          "options": [
            "From Observability (Datadog / Prometheus + Grafana / Honeycomb) + SLO tracking and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how sla and slo monitoring works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. Observability (Datadog / Prometheus + Grafana / Honeycomb) + SLO tracking) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "res-14-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"SLA and SLO monitoring\"?",
          "options": [
            "The external audit firm, since it is the party examining the sla and slo monitoring control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the sla and slo monitoring data is shared, so the accountability sits with no one in particular",
            "SRE / reliability, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "SRE / reliability owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "res-14-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"SLA and SLO monitoring\", which part stays with the human auditor?",
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
          "id": "res-14-q7",
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
          "id": "res-14-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"SLA and SLO monitoring\", which of these is a realistic reportable finding?",
          "options": [
            "There are no SLOs or error budgets, so reliability is unmeasured and never prioritised until customers complain; a customer-facing SLA was breached for months with no credits issued because no one tracked it.",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. There are no SLOs or error budgets, so reliability is unmeasured and never prioritised until customers complain; a customer-facing SLA was breached for months with no credits issued because no one tracked it. A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "res-14-q9",
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
          "id": "res-14-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"SLA and SLO monitoring\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind sla and slo monitoring, so there is no overlap",
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

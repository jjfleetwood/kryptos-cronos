import type { EpochConfig, StageConfig } from "../types";

export const thirdPartyEpoch: EpochConfig = {
  "id": "third-party",
  "name": "Third Party Systems",
  "subtitle": "Agentic technical & privacy audit — Third Party Systems",
  "description": "Audit Third Party Systems end to end with a read-only agent fleet: each sub-process is a module that teaches the control as a repeatable agentic workflow with downloadable MCP tooling, a CTF, and a 10-question quiz.",
  "emoji": "🔗",
  "color": "Amber",
  "unlocked": true
};

export const thirdPartyStages: StageConfig[] = [
  {
    "epochId": "third-party",
    "id": "tps-01",
    "order": 1,
    "title": "Data security and privacy",
    "subtitle": "Agentic technical & privacy audit of the data security and privacy control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 5,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Data security and privacy\" control for Third Party Systems is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify vendors holding the org's data protect it to the org's standard. PASS: each vendor has a current data-security attestation (SOC 2 II / ISO 27001) whose scope covers the service used; a DPA defines purpose limitation, sub-processor controls, deletion, and breach notification; data shared is minimized + classified; and high-risk vendors are independently validated. Exceptions: vendors with sensitive data and no/stale attestation, missing or weak DPA, over-sharing of data, and no breach-notification clause.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Third Party Systems systems of record (TPRM / GRC (Archer / OneTrust / ProcessUnity); Vendor SOC 2 / ISO repository; Contracts / DPAs) as tools — e.g. `TPRM: per vendor, the data classification received + a current SOC 2 I`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The data-flow + data inventory per vendor (what data they receive/process/store, classification, volume)",
        "The vendor's data-security attestation (SOC 2 Type II / ISO 27001) + its scope and currency",
        "The Data Processing Agreement (DPA) + its terms (purpose limitation, sub-processors, deletion, breach notice)",
        "Evidence of how vendor-held data is protected (encryption, access, retention)"
      ],
      "system": [
        "TPRM / GRC (Archer / OneTrust / ProcessUnity)",
        "Vendor SOC 2 / ISO repository",
        "Contracts / DPAs",
        "Data catalogue (what data goes to whom)"
      ],
      "dataOwner": [
        "Third-party risk management",
        "Privacy / DPO",
        "Procurement / Legal (the DPA)",
        "Data owners"
      ],
      "scoring": {
        "ease": "EASE 5/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Third Party Systems controls."
      }
    },
    "badge": {
      "id": "tps-01-badge",
      "name": "Third Party Systems Auditor",
      "emoji": "🔗"
    },
    "wonder": {
      "name": "Data security and privacy",
      "location": "Third Party Systems",
      "era": "Present Day",
      "emoji": "🔗"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Data security and privacy\" as a repeatable agentic workflow: pull the real evidence (The data-flow + data inventory per vendor (what data they receive/process/store, classification, volume)) with read-only agents, run the test against policy, and issue a defensible opinion on the Third Party Systems control.",
      "year": 2025,
      "overview": [
        "The \"Data security and privacy\" sub-process is one of the controls an auditor must verify for Third Party Systems. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the data-flow + data inventory per vendor (what data they receive/process/store, classification, volume), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here TPRM / GRC (Archer / OneTrust / ProcessUnity), Vendor SOC 2 / ISO repository, Contracts / DPAs — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `TPRM: per vendor, the data classification received + a current SOC 2 II / ISO ce` — read-only, against the systems of record.",
        "The test itself is specific. Verify vendors holding the org's data protect it to the org's standard. PASS: each vendor has a current data-security attestation (SOC 2 II / ISO 27001) whose scope covers the service used; a DPA defines purpose limitation, sub-processor controls, deletion, and breach notification; data shared is minimized + classified; and high-risk vendors are independently validated. Exceptions: vendors with sensitive data and no/stale attestation, missing or weak DPA, over-sharing of data, and no breach-notification clause. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `01_data_security_and_privacy_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from TPRM / GRC (Archer / OneTrust / ProcessUnity) and Vendor SOC 2 / ISO repository (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 01_data_security_and_privacy_mcp.py` to expose it to your agent — or `python 01_data_security_and_privacy_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "The breach that came through a vendor",
        "when": "Recurring",
        "where": "Third-party / supplier integrations",
        "impact": "A trusted vendor or nth-party with access becomes the path in — the customer inherits a risk they didn't directly control.",
        "body": [
          "From Target's HVAC vendor to MOVEit's mass exploitation, third parties are a leading breach vector because their access and weaknesses become yours.",
          "Auditors verify vendor due diligence, contractual security/SLA terms, integration security, audit rights, and nth-party (subcontractor) risk."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Third Party Systems scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull TPRM / GRC (Archer / OneTrust / ProcessUnity) · Vendor SOC 2 / ISO repository",
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
          "event": "MOVEit: one vendor flaw breaches thousands of downstream orgs",
          "highlight": true
        },
        {
          "year": 2013,
          "event": "Target: HVAC-vendor credentials lead to a 40M-card breach"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Data security and privacy\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "TPRM: per vendor, the data classification received + a current SOC 2 II / ISO cert (scope + date)\nDPA review: purpose limitation, sub-processors, deletion, breach-notice SLA\ndata-flow map: is data minimized vs what the vendor actually needs?\nhigh-risk vendor: independent validation (pen-test summary / evidenced questionnaire)"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The data-flow + data inventory per vendor (what data they receive/process/store, classification, volume).",
        "The test: Verify vendors holding the org's data protect it to the org's standard.",
        "Reconcile the systems of record (TPRM / GRC (Archer / OneTrust / ProcessUnity), Vendor SOC 2 / ISO repository, Contracts / DPAs) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. A vendor processing customer PII has no DPA and only a two-year-old SOC 2 whose scope doesn't cover the product in use; the org shares more data fields than the service requires."
      ],
      "references": [
        {
          "title": "NIST SP 800-161 C-SCRM",
          "url": "https://csrc.nist.gov/pubs/sp/800/161/r1/final"
        },
        {
          "title": "ISO/IEC 27036",
          "url": "https://www.iso.org/standard/59648.html"
        },
        {
          "title": "GDPR Art. 28",
          "url": "https://gdpr-info.eu/art-28-gdpr/"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "01_data_security_and_privacy_mcp.py",
          "url": "/audit-code/third-party/01_data_security_and_privacy_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Third Party Systems evidence for \"Data security and privacy\" (the data-flow + data inventory per vendor (what data they receive/process/store, classification, volume)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Data security and privacy\" control for Third Party Systems at AcmeCorp. THE TEST: Verify vendors holding the org's data protect it to the org's standard. PASS: each vendor has a current data-security attestation (SOC 2 II / ISO 27001) whose scope covers the service used; a DPA defines purpose limitation, sub-processor controls, deletion, and breach notification; data shared is minimized + classified; and high-risk vendors are independently validated. Exceptions: vendors with sensitive data and no/stale attestation, missing or weak DPA, over-sharing of data, and no breach-notification clause. The evidence — The data-flow + data inventory per vendor (what data they receive/process/store, classification, volume) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live TPRM / GRC (Archer / OneTrust / ProcessUnity) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. TPRM / GRC (Archer / OneTrust / ProcessUnity) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from TPRM / GRC (Archer / OneTrust / ProcessUnity); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Third Party Systems: \"Data security and privacy\" Audit Evidence\n\nThe test:\nVerify vendors holding the org's data protect it to the org's standard. PASS: each vendor has a current data-security attestation (SOC 2 II / ISO 27001) whose scope covers the service used; a DPA defines purpose limitation, sub-processor controls, deletion, and breach notification; data shared is minimized + classified; and high-risk vendors are independently validated. Exceptions: vendors with sensitive data and no/stale attestation, missing or weak DPA, over-sharing of data, and no breach-notification clause.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- third-party_inventory.json   (in-scope items — The data-flow + data inventory per vendor (what data they receive/process/store, classification, volume))\n- third-party_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Data security and privacy\",\n  \"domain\": \"Third Party Systems\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{tps_",
        "/evidence/third-party_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Third-party risk management\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Data security and privacy\" control must cover\n# fragment: data_security_privacy_",
        "/evidence/third-party_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "third-party_inventory.json",
            "isDir": false
          },
          {
            "name": "third-party_state.json",
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
          "value": "FLAG{tps_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/third-party_inventory.json",
          "value": "data_security_privacy_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/third-party_state.json",
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
          "id": "tps-01-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Data security and privacy\" sub-process of Third Party Systems?",
          "options": [
            "Deploy and operate the data security and privacy control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the data security and privacy control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for data security and privacy against comparable organisations in the sector",
            "Obtain evidence that the data security and privacy control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "tps-01-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Data security and privacy\" matter to the broader Third Party Systems posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Third Party Systems",
            "It stops mattering once a firewall and endpoint agent are deployed across the Third Party Systems estate",
            "It is a control other Third Party Systems controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Third Party Systems controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "tps-01-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Data security and privacy\" control?",
          "options": [
            "A point-in-time screenshot of one system's data security and privacy settings, captured during the walkthrough",
            "The The data-flow + data inventory per vendor (what data they receive/process/store, classification, volume), reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the data security and privacy control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's data security and privacy capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "tps-01-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Data security and privacy\"?",
          "options": [
            "From TPRM / GRC (Archer / OneTrust / ProcessUnity) and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how data security and privacy works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. TPRM / GRC (Archer / OneTrust / ProcessUnity)) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "tps-01-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Data security and privacy\"?",
          "options": [
            "The external audit firm, since it is the party examining the data security and privacy control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the data security and privacy data is shared, so the accountability sits with no one in particular",
            "Third-party risk management, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Third-party risk management owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "tps-01-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Data security and privacy\", which part stays with the human auditor?",
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
          "id": "tps-01-q7",
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
          "id": "tps-01-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Data security and privacy\", which of these is a realistic reportable finding?",
          "options": [
            "A vendor processing customer PII has no DPA and only a two-year-old SOC 2 whose scope doesn't cover the product in use; the org shares more data fields than the service requires.",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. A vendor processing customer PII has no DPA and only a two-year-old SOC 2 whose scope doesn't cover the product in use; the org shares more data fields than the service requires. A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "tps-01-q9",
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
          "id": "tps-01-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Data security and privacy\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind data security and privacy, so there is no overlap",
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
    "epochId": "third-party",
    "id": "tps-02",
    "order": 2,
    "title": "Integration and interface security",
    "subtitle": "Agentic technical & privacy audit of the integration and interface security control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 6,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Integration and interface security\" control for Third Party Systems is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify vendor integrations are authenticated, encrypted, least-privilege, and monitored. PASS: every interface uses strong auth (OAuth/mTLS, not shared static keys) and encryption in transit; the access granted to the vendor is least-privilege + scoped; credentials are rotated; and interfaces are logged + monitored. Exceptions: integrations over plaintext or with shared static API keys, vendor access far broader than needed, non-rotating credentials, and unmonitored interfaces.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Third Party Systems systems of record (API gateway / integration platform (MuleSoft / Boomi); SFTP / file-transfer + VPN/tunnel config; IdP (vendor federation)) as tools — e.g. `inventory integrations + the auth/encryption each uses (OAuth/mTLS vs `, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The inventory of integrations/interfaces with each vendor (API, file transfer, VPN/tunnel, SSO federation) + the data crossing each",
        "Authentication + encryption of each interface (API keys / OAuth, TLS, SFTP, mTLS)",
        "The access scope each integration grants the vendor (least-privilege?) + the credentials it uses",
        "Interface monitoring / logging + anomaly detection"
      ],
      "system": [
        "API gateway / integration platform (MuleSoft / Boomi)",
        "SFTP / file-transfer + VPN/tunnel config",
        "IdP (vendor federation)",
        "SIEM (interface logs)"
      ],
      "dataOwner": [
        "Integration / platform team",
        "Vendor risk + security",
        "App owners"
      ],
      "scoring": {
        "ease": "EASE 6/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Third Party Systems controls."
      }
    },
    "badge": {
      "id": "tps-02-badge",
      "name": "Third Party Systems Auditor",
      "emoji": "🔗"
    },
    "wonder": {
      "name": "Integration and interface security",
      "location": "Third Party Systems",
      "era": "Present Day",
      "emoji": "🔗"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Integration and interface security\" as a repeatable agentic workflow: pull the real evidence (The inventory of integrations/interfaces with each vendor (API, file transfer, VPN/tunnel, SSO federation) + the data crossing each) with read-only agents, run the test against policy, and issue a defensible opinion on the Third Party Systems control.",
      "year": 2025,
      "overview": [
        "The \"Integration and interface security\" sub-process is one of the controls an auditor must verify for Third Party Systems. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the inventory of integrations/interfaces with each vendor (API, file transfer, VPN/tunnel, SSO federation) + the data crossing each, for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here API gateway / integration platform (MuleSoft / Boomi), SFTP / file-transfer + VPN/tunnel config, IdP (vendor federation) — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `inventory integrations + the auth/encryption each uses (OAuth/mTLS vs static key` — read-only, against the systems of record.",
        "The test itself is specific. Verify vendor integrations are authenticated, encrypted, least-privilege, and monitored. PASS: every interface uses strong auth (OAuth/mTLS, not shared static keys) and encryption in transit; the access granted to the vendor is least-privilege + scoped; credentials are rotated; and interfaces are logged + monitored. Exceptions: integrations over plaintext or with shared static API keys, vendor access far broader than needed, non-rotating credentials, and unmonitored interfaces. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `02_integration_and_interface_security_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from API gateway / integration platform (MuleSoft / Boomi) and SFTP / file-transfer + VPN/tunnel config (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 02_integration_and_interface_security_mcp.py` to expose it to your agent — or `python 02_integration_and_interface_security_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "The breach that came through a vendor",
        "when": "Recurring",
        "where": "Third-party / supplier integrations",
        "impact": "A trusted vendor or nth-party with access becomes the path in — the customer inherits a risk they didn't directly control.",
        "body": [
          "From Target's HVAC vendor to MOVEit's mass exploitation, third parties are a leading breach vector because their access and weaknesses become yours.",
          "Auditors verify vendor due diligence, contractual security/SLA terms, integration security, audit rights, and nth-party (subcontractor) risk."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Third Party Systems scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull API gateway / integration platform (MuleSoft / Boomi) · SFTP / file-transfer + VPN/tunnel config",
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
          "event": "MOVEit: one vendor flaw breaches thousands of downstream orgs",
          "highlight": true
        },
        {
          "year": 2013,
          "event": "Target: HVAC-vendor credentials lead to a 40M-card breach"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Integration and interface security\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "inventory integrations + the auth/encryption each uses (OAuth/mTLS vs static key; TLS vs plaintext SFTP)\nthe access scope each vendor integration holds (least-privilege?) + credential rotation\nconfirm interface logging → SIEM + anomaly detection\ntest: could the vendor API credential read more than it needs?"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The inventory of integrations/interfaces with each vendor (API, file transfer, VPN/tunnel, SSO federation) + the data crossing each.",
        "The test: Verify vendor integrations are authenticated, encrypted, least-privilege, and monitored.",
        "Reconcile the systems of record (API gateway / integration platform (MuleSoft / Boomi), SFTP / file-transfer + VPN/tunnel config, IdP (vendor federation)) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. Three vendor integrations use shared static API keys that never rotate, one file transfer runs over plain FTP, and a vendor's API credential can read the entire customer table when it only needs order status."
      ],
      "references": [
        {
          "title": "OWASP API Security Top 10",
          "url": "https://owasp.org/API-Security/"
        },
        {
          "title": "NIST SP 800-204",
          "url": "https://csrc.nist.gov/pubs/sp/800/204/final"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "02_integration_and_interface_security_mcp.py",
          "url": "/audit-code/third-party/02_integration_and_interface_security_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Third Party Systems evidence for \"Integration and interface security\" (the inventory of integrations/interfaces with each vendor (api, file transfer, vpn/tunnel, sso federation) + the data crossing each), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Integration and interface security\" control for Third Party Systems at AcmeCorp. THE TEST: Verify vendor integrations are authenticated, encrypted, least-privilege, and monitored. PASS: every interface uses strong auth (OAuth/mTLS, not shared static keys) and encryption in transit; the access granted to the vendor is least-privilege + scoped; credentials are rotated; and interfaces are logged + monitored. Exceptions: integrations over plaintext or with shared static API keys, vendor access far broader than needed, non-rotating credentials, and unmonitored interfaces. The evidence — The inventory of integrations/interfaces with each vendor (API, file transfer, VPN/tunnel, SSO federation) + the data crossing each — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live API gateway / integration platform (MuleSoft / Boomi) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. API gateway / integration platform (MuleSoft / Boomi) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from API gateway / integration platform (MuleSoft / Boomi); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Third Party Systems: \"Integration and interface security\" Audit Evidence\n\nThe test:\nVerify vendor integrations are authenticated, encrypted, least-privilege, and monitored. PASS: every interface uses strong auth (OAuth/mTLS, not shared static keys) and encryption in transit; the access granted to the vendor is least-privilege + scoped; credentials are rotated; and interfaces are logged + monitored. Exceptions: integrations over plaintext or with shared static API keys, vendor access far broader than needed, non-rotating credentials, and unmonitored interfaces.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- third-party_inventory.json   (in-scope items — The inventory of integrations/interfaces with each vendor (API, file transfer, VPN/tunnel, SSO federation) + the data crossing each)\n- third-party_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Integration and interface security\",\n  \"domain\": \"Third Party Systems\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{tps_",
        "/evidence/third-party_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Third-party risk management\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Integration and interface security\" control must cover\n# fragment: integration_interface_security_",
        "/evidence/third-party_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "third-party_inventory.json",
            "isDir": false
          },
          {
            "name": "third-party_state.json",
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
          "value": "FLAG{tps_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/third-party_inventory.json",
          "value": "integration_interface_security_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/third-party_state.json",
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
          "id": "tps-02-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Integration and interface security\" sub-process of Third Party Systems?",
          "options": [
            "Deploy and operate the integration and interface security control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the integration and interface security control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for integration and interface security against comparable organisations in the sector",
            "Obtain evidence that the integration and interface security control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "tps-02-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Integration and interface security\" matter to the broader Third Party Systems posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Third Party Systems",
            "It stops mattering once a firewall and endpoint agent are deployed across the Third Party Systems estate",
            "It is a control other Third Party Systems controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Third Party Systems controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "tps-02-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Integration and interface security\" control?",
          "options": [
            "A point-in-time screenshot of one system's integration and interface security settings, captured during the walkthrough",
            "The The inventory of integrations/interfaces with each vendor (API, file transfer, VPN/tunnel, SSO federation) + the data crossing each, reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the integration and interface security control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's integration and interface security capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "tps-02-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Integration and interface security\"?",
          "options": [
            "From API gateway / integration platform (MuleSoft / Boomi) and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how integration and interface security works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. API gateway / integration platform (MuleSoft / Boomi)) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "tps-02-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Integration and interface security\"?",
          "options": [
            "The external audit firm, since it is the party examining the integration and interface security control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the integration and interface security data is shared, so the accountability sits with no one in particular",
            "Integration / platform team, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Integration / platform team owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "tps-02-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Integration and interface security\", which part stays with the human auditor?",
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
          "id": "tps-02-q7",
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
          "id": "tps-02-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Integration and interface security\", which of these is a realistic reportable finding?",
          "options": [
            "Three vendor integrations use shared static API keys that never rotate, one file transfer runs over plain FTP, and a vendor's API credential can read the entire customer table when it only needs order status.",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. Three vendor integrations use shared static API keys that never rotate, one file transfer runs over plain FTP, and a vendor's API credential can read the entire customer table when it only needs order status. A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "tps-02-q9",
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
          "id": "tps-02-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Integration and interface security\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind integration and interface security, so there is no overlap",
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
    "epochId": "third-party",
    "id": "tps-03",
    "order": 3,
    "title": "Change and release management (vendor)",
    "subtitle": "Agentic technical & privacy audit of the change and release management (vendor) control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 7,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Change and release management (vendor)\" control for Third Party Systems is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify vendor changes are governed so they don't surprise the org. PASS: contracts require advance notice of material/breaking changes + maintenance windows; the org receives + assesses vendor change notifications and tests them before they affect production; and there's a process for vendor deprecations. Exceptions: no contractual change-notice terms, vendor changes that broke production with no warning, no org-side assessment/testing of vendor changes, and unmanaged API deprecations.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Third Party Systems systems of record (Vendor change/release notifications + status pages; Contracts (change-notice terms); The org's vendor-change assessment process) as tools — e.g. `confirm contractual advance-notice terms for breaking changes + mainte`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The vendor's change-notification process + evidence the org is notified of material vendor changes (releases, deprecations, infra changes)",
        "The contractual change/notice terms (advance notice for breaking changes, maintenance windows)",
        "The org's process to assess + test vendor changes before they hit production",
        "Records of vendor changes that caused incidents"
      ],
      "system": [
        "Vendor change/release notifications + status pages",
        "Contracts (change-notice terms)",
        "The org's vendor-change assessment process",
        "Integration test environments"
      ],
      "dataOwner": [
        "Vendor management",
        "Integration / app owners",
        "Change management"
      ],
      "scoring": {
        "ease": "EASE 7/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Third Party Systems controls."
      }
    },
    "badge": {
      "id": "tps-03-badge",
      "name": "Third Party Systems Auditor",
      "emoji": "🔗"
    },
    "wonder": {
      "name": "Change and release management (vendor)",
      "location": "Third Party Systems",
      "era": "Present Day",
      "emoji": "🔗"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Change and release management (vendor)\" as a repeatable agentic workflow: pull the real evidence (The vendor's change-notification process + evidence the org is notified of material vendor changes (releases, deprecations, infra changes)) with read-only agents, run the test against policy, and issue a defensible opinion on the Third Party Systems control.",
      "year": 2025,
      "overview": [
        "The \"Change and release management (vendor)\" sub-process is one of the controls an auditor must verify for Third Party Systems. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the vendor's change-notification process + evidence the org is notified of material vendor changes (releases, deprecations, infra changes), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Vendor change/release notifications + status pages, Contracts (change-notice terms), The org's vendor-change assessment process — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `confirm contractual advance-notice terms for breaking changes + maintenance wind` — read-only, against the systems of record.",
        "The test itself is specific. Verify vendor changes are governed so they don't surprise the org. PASS: contracts require advance notice of material/breaking changes + maintenance windows; the org receives + assesses vendor change notifications and tests them before they affect production; and there's a process for vendor deprecations. Exceptions: no contractual change-notice terms, vendor changes that broke production with no warning, no org-side assessment/testing of vendor changes, and unmanaged API deprecations. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `03_change_and_release_management_vendor_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Vendor change/release notifications + status pages and Contracts (change-notice terms) (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 03_change_and_release_management_vendor_mcp.py` to expose it to your agent — or `python 03_change_and_release_management_vendor_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "The breach that came through a vendor",
        "when": "Recurring",
        "where": "Third-party / supplier integrations",
        "impact": "A trusted vendor or nth-party with access becomes the path in — the customer inherits a risk they didn't directly control.",
        "body": [
          "From Target's HVAC vendor to MOVEit's mass exploitation, third parties are a leading breach vector because their access and weaknesses become yours.",
          "Auditors verify vendor due diligence, contractual security/SLA terms, integration security, audit rights, and nth-party (subcontractor) risk."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Third Party Systems scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull Vendor change/release notifications + status pages · Contracts (change-notice terms)",
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
          "event": "MOVEit: one vendor flaw breaches thousands of downstream orgs",
          "highlight": true
        },
        {
          "year": 2013,
          "event": "Target: HVAC-vendor credentials lead to a 40M-card breach"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Change and release management (vendor)\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "confirm contractual advance-notice terms for breaking changes + maintenance windows\nis the org subscribed to + acting on vendor change notifications / status pages / API-deprecation notices?\na process to test vendor changes in a sandbox before prod\nincidents caused by unannounced vendor changes"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The vendor's change-notification process + evidence the org is notified of material vendor changes (releases, deprecations, infra changes).",
        "The test: Verify vendor changes are governed so they don't surprise the org.",
        "Reconcile the systems of record (Vendor change/release notifications + status pages, Contracts (change-notice terms), The org's vendor-change assessment process) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. A vendor deprecated an API version with 30 days' notice that nobody was monitoring; the integration broke in production, and there's no contractual requirement or internal process for assessing vendor changes."
      ],
      "references": [
        {
          "title": "ITIL 4 — Change Enablement",
          "url": "https://www.axelos.com/certifications/itil-service-management"
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
          "name": "03_change_and_release_management_vendor_mcp.py",
          "url": "/audit-code/third-party/03_change_and_release_management_vendor_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Third Party Systems evidence for \"Change and release management (vendor)\" (the vendor's change-notification process + evidence the org is notified of material vendor changes (releases, deprecations, infra changes)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Change and release management (vendor)\" control for Third Party Systems at AcmeCorp. THE TEST: Verify vendor changes are governed so they don't surprise the org. PASS: contracts require advance notice of material/breaking changes + maintenance windows; the org receives + assesses vendor change notifications and tests them before they affect production; and there's a process for vendor deprecations. Exceptions: no contractual change-notice terms, vendor changes that broke production with no warning, no org-side assessment/testing of vendor changes, and unmanaged API deprecations. The evidence — The vendor's change-notification process + evidence the org is notified of material vendor changes (releases, deprecations, infra changes) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Vendor change/release notifications + status pages APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Vendor change/release notifications + status pages gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Vendor change/release notifications + status pages; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Third Party Systems: \"Change and release management (vendor)\" Audit Evidence\n\nThe test:\nVerify vendor changes are governed so they don't surprise the org. PASS: contracts require advance notice of material/breaking changes + maintenance windows; the org receives + assesses vendor change notifications and tests them before they affect production; and there's a process for vendor deprecations. Exceptions: no contractual change-notice terms, vendor changes that broke production with no warning, no org-side assessment/testing of vendor changes, and unmanaged API deprecations.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- third-party_inventory.json   (in-scope items — The vendor's change-notification process + evidence the org is notified of material vendor changes (releases, deprecations, infra changes))\n- third-party_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Change and release management (vendor)\",\n  \"domain\": \"Third Party Systems\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{tps_",
        "/evidence/third-party_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Third-party risk management\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Change and release management (vendor)\" control must cover\n# fragment: change_release_management_",
        "/evidence/third-party_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "third-party_inventory.json",
            "isDir": false
          },
          {
            "name": "third-party_state.json",
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
          "value": "FLAG{tps_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/third-party_inventory.json",
          "value": "change_release_management_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/third-party_state.json",
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
          "id": "tps-03-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Change and release management (vendor)\" sub-process of Third Party Systems?",
          "options": [
            "Deploy and operate the change and release management (vendor) control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the change and release management (vendor) control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for change and release management (vendor) against comparable organisations in the sector",
            "Obtain evidence that the change and release management (vendor) control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "tps-03-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Change and release management (vendor)\" matter to the broader Third Party Systems posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Third Party Systems",
            "It stops mattering once a firewall and endpoint agent are deployed across the Third Party Systems estate",
            "It is a control other Third Party Systems controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Third Party Systems controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "tps-03-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Change and release management (vendor)\" control?",
          "options": [
            "A point-in-time screenshot of one system's change and release management (vendor) settings, captured during the walkthrough",
            "The The vendor's change-notification process + evidence the org is notified of material vendor changes (releases, deprecations, infra changes), reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the change and release management (vendor) control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's change and release management (vendor) capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "tps-03-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Change and release management (vendor)\"?",
          "options": [
            "From Vendor change/release notifications + status pages and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how change and release management (vendor) works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. Vendor change/release notifications + status pages) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "tps-03-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Change and release management (vendor)\"?",
          "options": [
            "The external audit firm, since it is the party examining the change and release management (vendor) control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the change and release management (vendor) data is shared, so the accountability sits with no one in particular",
            "Vendor management, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Vendor management owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "tps-03-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Change and release management (vendor)\", which part stays with the human auditor?",
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
          "id": "tps-03-q7",
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
          "id": "tps-03-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Change and release management (vendor)\", which of these is a realistic reportable finding?",
          "options": [
            "A vendor deprecated an API version with 30 days' notice that nobody was monitoring; the integration broke in production, and there's no contractual requirement or internal process for assessing vendor changes.",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. A vendor deprecated an API version with 30 days' notice that nobody was monitoring; the integration broke in production, and there's no contractual requirement or internal process for assessing vendor changes. A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "tps-03-q9",
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
          "id": "tps-03-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Change and release management (vendor)\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind change and release management (vendor), so there is no overlap",
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
    "epochId": "third-party",
    "id": "tps-04",
    "order": 4,
    "title": "Incident and problem management (vendor)",
    "subtitle": "Agentic technical & privacy audit of the incident and problem management (vendor) control",
    "category": "cybersecurity",
    "xp": 180,
    "easeScore": 5,
    "valueScore": 9,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Incident and problem management (vendor)\" control for Third Party Systems is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify vendor incidents are communicated + jointly managed. PASS: contracts mandate incident/breach notification within a defined SLA (e.g. 24-72h); the org has a runbook for vendor-side incidents (escalation, comms, customer notice); the vendor provides RCAs for significant/recurring issues; and past incidents show the SLA was met. Exceptions: no contractual notification SLA, late/no notice in real incidents, no joint IR runbook, and recurring vendor problems with no RCA or remediation.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Third Party Systems systems of record (Contracts (incident/breach SLA); The joint IR runbook; Vendor status / incident comms) as tools — e.g. `contract: incident + breach-notification SLA (hours)`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The vendor incident-notification SLA + evidence it's met (breach/incident-notice timeliness in real cases)",
        "The joint incident-response runbook (roles, escalation, comms) for vendor-side incidents",
        "The vendor's problem-management / RCA evidence for recurring issues",
        "Records of vendor incidents + the org's response"
      ],
      "system": [
        "Contracts (incident/breach SLA)",
        "The joint IR runbook",
        "Vendor status / incident comms",
        "The org's incident records"
      ],
      "dataOwner": [
        "Vendor risk + security operations / CSIRT",
        "Legal (breach notice)",
        "Service owners"
      ],
      "scoring": {
        "ease": "EASE 5/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 9/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Third Party Systems controls."
      }
    },
    "badge": {
      "id": "tps-04-badge",
      "name": "Third Party Systems Auditor",
      "emoji": "🔗"
    },
    "wonder": {
      "name": "Incident and problem management (vendor)",
      "location": "Third Party Systems",
      "era": "Present Day",
      "emoji": "🔗"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Incident and problem management (vendor)\" as a repeatable agentic workflow: pull the real evidence (The vendor incident-notification SLA + evidence it's met (breach/incident-notice timeliness in real cases)) with read-only agents, run the test against policy, and issue a defensible opinion on the Third Party Systems control.",
      "year": 2025,
      "overview": [
        "The \"Incident and problem management (vendor)\" sub-process is one of the controls an auditor must verify for Third Party Systems. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the vendor incident-notification SLA + evidence it's met (breach/incident-notice timeliness in real cases), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Contracts (incident/breach SLA), The joint IR runbook, Vendor status / incident comms — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `contract: incident + breach-notification SLA (hours)` — read-only, against the systems of record.",
        "The test itself is specific. Verify vendor incidents are communicated + jointly managed. PASS: contracts mandate incident/breach notification within a defined SLA (e.g. 24-72h); the org has a runbook for vendor-side incidents (escalation, comms, customer notice); the vendor provides RCAs for significant/recurring issues; and past incidents show the SLA was met. Exceptions: no contractual notification SLA, late/no notice in real incidents, no joint IR runbook, and recurring vendor problems with no RCA or remediation. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `04_incident_and_problem_management_vendor_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Contracts (incident/breach SLA) and The joint IR runbook (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 04_incident_and_problem_management_vendor_mcp.py` to expose it to your agent — or `python 04_incident_and_problem_management_vendor_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "The breach that came through a vendor",
        "when": "Recurring",
        "where": "Third-party / supplier integrations",
        "impact": "A trusted vendor or nth-party with access becomes the path in — the customer inherits a risk they didn't directly control.",
        "body": [
          "From Target's HVAC vendor to MOVEit's mass exploitation, third parties are a leading breach vector because their access and weaknesses become yours.",
          "Auditors verify vendor due diligence, contractual security/SLA terms, integration security, audit rights, and nth-party (subcontractor) risk."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Third Party Systems scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull Contracts (incident/breach SLA) · The joint IR runbook",
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
          "event": "MOVEit: one vendor flaw breaches thousands of downstream orgs",
          "highlight": true
        },
        {
          "year": 2013,
          "event": "Target: HVAC-vendor credentials lead to a 40M-card breach"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Incident and problem management (vendor)\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "contract: incident + breach-notification SLA (hours)\nreal incidents: was the org notified within SLA? (timeline evidence)\njoint IR runbook: escalation path + comms + customer-notification responsibility\nvendor RCAs for recurring problems + remediation tracking"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The vendor incident-notification SLA + evidence it's met (breach/incident-notice timeliness in real cases).",
        "The test: Verify vendor incidents are communicated + jointly managed.",
        "Reconcile the systems of record (Contracts (incident/breach SLA), The joint IR runbook, Vendor status / incident comms) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. The vendor learned of a breach affecting the org's data weeks before notifying, the contract has no notification SLA, and there's no joint incident-response runbook — so the org's own breach-notification clock started late."
      ],
      "references": [
        {
          "title": "NIST SP 800-61",
          "url": "https://csrc.nist.gov/pubs/sp/800/61/r2/final"
        },
        {
          "title": "GDPR Art. 33 (breach notification)",
          "url": "https://gdpr-info.eu/art-33-gdpr/"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "04_incident_and_problem_management_vendor_mcp.py",
          "url": "/audit-code/third-party/04_incident_and_problem_management_vendor_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Third Party Systems evidence for \"Incident and problem management (vendor)\" (the vendor incident-notification sla + evidence it's met (breach/incident-notice timeliness in real cases)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Incident and problem management (vendor)\" control for Third Party Systems at AcmeCorp. THE TEST: Verify vendor incidents are communicated + jointly managed. PASS: contracts mandate incident/breach notification within a defined SLA (e.g. 24-72h); the org has a runbook for vendor-side incidents (escalation, comms, customer notice); the vendor provides RCAs for significant/recurring issues; and past incidents show the SLA was met. Exceptions: no contractual notification SLA, late/no notice in real incidents, no joint IR runbook, and recurring vendor problems with no RCA or remediation. The evidence — The vendor incident-notification SLA + evidence it's met (breach/incident-notice timeliness in real cases) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Contracts (incident/breach SLA) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Contracts (incident/breach SLA) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Contracts (incident/breach SLA); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Third Party Systems: \"Incident and problem management (vendor)\" Audit Evidence\n\nThe test:\nVerify vendor incidents are communicated + jointly managed. PASS: contracts mandate incident/breach notification within a defined SLA (e.g. 24-72h); the org has a runbook for vendor-side incidents (escalation, comms, customer notice); the vendor provides RCAs for significant/recurring issues; and past incidents show the SLA was met. Exceptions: no contractual notification SLA, late/no notice in real incidents, no joint IR runbook, and recurring vendor problems with no RCA or remediation.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- third-party_inventory.json   (in-scope items — The vendor incident-notification SLA + evidence it's met (breach/incident-notice timeliness in real cases))\n- third-party_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Incident and problem management (vendor)\",\n  \"domain\": \"Third Party Systems\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{tps_",
        "/evidence/third-party_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Third-party risk management\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Incident and problem management (vendor)\" control must cover\n# fragment: incident_problem_management_",
        "/evidence/third-party_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "third-party_inventory.json",
            "isDir": false
          },
          {
            "name": "third-party_state.json",
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
          "value": "FLAG{tps_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/third-party_inventory.json",
          "value": "incident_problem_management_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/third-party_state.json",
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
          "id": "tps-04-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Incident and problem management (vendor)\" sub-process of Third Party Systems?",
          "options": [
            "Deploy and operate the incident and problem management (vendor) control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the incident and problem management (vendor) control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for incident and problem management (vendor) against comparable organisations in the sector",
            "Obtain evidence that the incident and problem management (vendor) control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "tps-04-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Incident and problem management (vendor)\" matter to the broader Third Party Systems posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Third Party Systems",
            "It stops mattering once a firewall and endpoint agent are deployed across the Third Party Systems estate",
            "It is a control other Third Party Systems controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Third Party Systems controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "tps-04-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Incident and problem management (vendor)\" control?",
          "options": [
            "A point-in-time screenshot of one system's incident and problem management (vendor) settings, captured during the walkthrough",
            "The The vendor incident-notification SLA + evidence it's met (breach/incident-notice timeliness in real cases), reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the incident and problem management (vendor) control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's incident and problem management (vendor) capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "tps-04-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Incident and problem management (vendor)\"?",
          "options": [
            "From Contracts (incident/breach SLA) and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how incident and problem management (vendor) works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. Contracts (incident/breach SLA)) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "tps-04-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Incident and problem management (vendor)\"?",
          "options": [
            "The external audit firm, since it is the party examining the incident and problem management (vendor) control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the incident and problem management (vendor) data is shared, so the accountability sits with no one in particular",
            "Vendor risk + security operations / CSIRT, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Vendor risk + security operations / CSIRT owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "tps-04-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Incident and problem management (vendor)\", which part stays with the human auditor?",
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
          "id": "tps-04-q7",
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
          "id": "tps-04-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Incident and problem management (vendor)\", which of these is a realistic reportable finding?",
          "options": [
            "The vendor learned of a breach affecting the org's data weeks before notifying, the contract has no notification SLA, and there's no joint incident-response runbook — so the org's own breach-notification clock started late.",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. The vendor learned of a breach affecting the org's data weeks before notifying, the contract has no notification SLA, and there's no joint incident-response runbook — so the org's own breach-notification clock started late. A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "tps-04-q9",
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
          "id": "tps-04-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Incident and problem management (vendor)\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind incident and problem management (vendor), so there is no overlap",
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
    "epochId": "third-party",
    "id": "tps-05",
    "order": 5,
    "title": "Compliance and regulatory alignment",
    "subtitle": "Agentic technical & privacy audit of the compliance and regulatory alignment control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 6,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Compliance and regulatory alignment\" control for Third Party Systems is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify vendors meet the regulatory obligations they inherit from the org. PASS: each vendor is mapped to the regulations relevant to the data/service; the vendor holds the required attestations (PCI AOC, HITRUST, FedRAMP, etc.) covering the in-scope service; flow-down regulatory requirements are contractual; and the vendor cooperates with the org's regulatory needs. Exceptions: a vendor in a regulated data flow without the required certification, attestations that don't cover the service used, no flow-down clauses, and vendors that won't support the org's regulatory/audit needs.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Third Party Systems systems of record (TPRM / GRC (vendor-to-regulation mapping); Vendor compliance certs (PCI AOC, HITRUST, FedRAMP, SOC 2); Contracts (flow-down terms)) as tools — e.g. `map each vendor to the regulations it touches (GDPR / HIPAA / PCI / SO`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The mapping of each vendor to the regulations it must support for the org (GDPR, HIPAA, PCI, SOX, sector rules)",
        "The vendor's compliance attestations + certifications covering those obligations",
        "Evidence the vendor's controls satisfy the org's flow-down regulatory requirements",
        "Right-to-audit + regulatory-cooperation contract terms"
      ],
      "system": [
        "TPRM / GRC (vendor-to-regulation mapping)",
        "Vendor compliance certs (PCI AOC, HITRUST, FedRAMP, SOC 2)",
        "Contracts (flow-down terms)"
      ],
      "dataOwner": [
        "Compliance / GRC + vendor risk",
        "Legal",
        "Privacy"
      ],
      "scoring": {
        "ease": "EASE 6/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Third Party Systems controls."
      }
    },
    "badge": {
      "id": "tps-05-badge",
      "name": "Third Party Systems Auditor",
      "emoji": "🔗"
    },
    "wonder": {
      "name": "Compliance and regulatory alignment",
      "location": "Third Party Systems",
      "era": "Present Day",
      "emoji": "🔗"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Compliance and regulatory alignment\" as a repeatable agentic workflow: pull the real evidence (The mapping of each vendor to the regulations it must support for the org (GDPR, HIPAA, PCI, SOX, sector rules)) with read-only agents, run the test against policy, and issue a defensible opinion on the Third Party Systems control.",
      "year": 2025,
      "overview": [
        "The \"Compliance and regulatory alignment\" sub-process is one of the controls an auditor must verify for Third Party Systems. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the mapping of each vendor to the regulations it must support for the org (GDPR, HIPAA, PCI, SOX, sector rules), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here TPRM / GRC (vendor-to-regulation mapping), Vendor compliance certs (PCI AOC, HITRUST, FedRAMP, SOC 2), Contracts (flow-down terms) — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `map each vendor to the regulations it touches (GDPR / HIPAA / PCI / SOX / sector` — read-only, against the systems of record.",
        "The test itself is specific. Verify vendors meet the regulatory obligations they inherit from the org. PASS: each vendor is mapped to the regulations relevant to the data/service; the vendor holds the required attestations (PCI AOC, HITRUST, FedRAMP, etc.) covering the in-scope service; flow-down regulatory requirements are contractual; and the vendor cooperates with the org's regulatory needs. Exceptions: a vendor in a regulated data flow without the required certification, attestations that don't cover the service used, no flow-down clauses, and vendors that won't support the org's regulatory/audit needs. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `05_compliance_and_regulatory_alignment_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from TPRM / GRC (vendor-to-regulation mapping) and Vendor compliance certs (PCI AOC, HITRUST, FedRAMP, SOC 2) (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 05_compliance_and_regulatory_alignment_mcp.py` to expose it to your agent — or `python 05_compliance_and_regulatory_alignment_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "The breach that came through a vendor",
        "when": "Recurring",
        "where": "Third-party / supplier integrations",
        "impact": "A trusted vendor or nth-party with access becomes the path in — the customer inherits a risk they didn't directly control.",
        "body": [
          "From Target's HVAC vendor to MOVEit's mass exploitation, third parties are a leading breach vector because their access and weaknesses become yours.",
          "Auditors verify vendor due diligence, contractual security/SLA terms, integration security, audit rights, and nth-party (subcontractor) risk."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Third Party Systems scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull TPRM / GRC (vendor-to-regulation mapping) · Vendor compliance certs (PCI AOC, HITRUST, FedRAMP, SOC 2)",
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
          "event": "MOVEit: one vendor flaw breaches thousands of downstream orgs",
          "highlight": true
        },
        {
          "year": 2013,
          "event": "Target: HVAC-vendor credentials lead to a 40M-card breach"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Compliance and regulatory alignment\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "map each vendor to the regulations it touches (GDPR / HIPAA / PCI / SOX / sector)\nverify the vendor holds the required cert covering the in-scope service (e.g. a PCI AOC for a payment processor)\ncontract flow-down: are the org's regulatory obligations passed to the vendor?\nright-to-audit + regulatory-cooperation clauses"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The mapping of each vendor to the regulations it must support for the org (GDPR, HIPAA, PCI, SOX, sector rules).",
        "The test: Verify vendors meet the regulatory obligations they inherit from the org.",
        "Reconcile the systems of record (TPRM / GRC (vendor-to-regulation mapping), Vendor compliance certs (PCI AOC, HITRUST, FedRAMP, SOC 2), Contracts (flow-down terms)) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. A payment-adjacent vendor has no current PCI Attestation of Compliance, a health-data vendor isn't HITRUST/BAA-covered, and contracts lack regulatory flow-down — exposing the org to its own compliance findings."
      ],
      "references": [
        {
          "title": "NIST SP 800-161",
          "url": "https://csrc.nist.gov/pubs/sp/800/161/r1/final"
        },
        {
          "title": "ISO/IEC 27036",
          "url": "https://www.iso.org/standard/59648.html"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "05_compliance_and_regulatory_alignment_mcp.py",
          "url": "/audit-code/third-party/05_compliance_and_regulatory_alignment_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Third Party Systems evidence for \"Compliance and regulatory alignment\" (the mapping of each vendor to the regulations it must support for the org (gdpr, hipaa, pci, sox, sector rules)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Compliance and regulatory alignment\" control for Third Party Systems at AcmeCorp. THE TEST: Verify vendors meet the regulatory obligations they inherit from the org. PASS: each vendor is mapped to the regulations relevant to the data/service; the vendor holds the required attestations (PCI AOC, HITRUST, FedRAMP, etc.) covering the in-scope service; flow-down regulatory requirements are contractual; and the vendor cooperates with the org's regulatory needs. Exceptions: a vendor in a regulated data flow without the required certification, attestations that don't cover the service used, no flow-down clauses, and vendors that won't support the org's regulatory/audit needs. The evidence — The mapping of each vendor to the regulations it must support for the org (GDPR, HIPAA, PCI, SOX, sector rules) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live TPRM / GRC (vendor-to-regulation mapping) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. TPRM / GRC (vendor-to-regulation mapping) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from TPRM / GRC (vendor-to-regulation mapping); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Third Party Systems: \"Compliance and regulatory alignment\" Audit Evidence\n\nThe test:\nVerify vendors meet the regulatory obligations they inherit from the org. PASS: each vendor is mapped to the regulations relevant to the data/service; the vendor holds the required attestations (PCI AOC, HITRUST, FedRAMP, etc.) covering the in-scope service; flow-down regulatory requirements are contractual; and the vendor cooperates with the org's regulatory needs. Exceptions: a vendor in a regulated data flow without the required certification, attestations that don't cover the service used, no flow-down clauses, and vendors that won't support the org's regulatory/audit needs.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- third-party_inventory.json   (in-scope items — The mapping of each vendor to the regulations it must support for the org (GDPR, HIPAA, PCI, SOX, sector rules))\n- third-party_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Compliance and regulatory alignment\",\n  \"domain\": \"Third Party Systems\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{tps_",
        "/evidence/third-party_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Third-party risk management\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Compliance and regulatory alignment\" control must cover\n# fragment: compliance_regulatory_alignment_",
        "/evidence/third-party_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "third-party_inventory.json",
            "isDir": false
          },
          {
            "name": "third-party_state.json",
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
          "value": "FLAG{tps_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/third-party_inventory.json",
          "value": "compliance_regulatory_alignment_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/third-party_state.json",
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
          "id": "tps-05-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Compliance and regulatory alignment\" sub-process of Third Party Systems?",
          "options": [
            "Deploy and operate the compliance and regulatory alignment control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the compliance and regulatory alignment control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for compliance and regulatory alignment against comparable organisations in the sector",
            "Obtain evidence that the compliance and regulatory alignment control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "tps-05-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Compliance and regulatory alignment\" matter to the broader Third Party Systems posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Third Party Systems",
            "It stops mattering once a firewall and endpoint agent are deployed across the Third Party Systems estate",
            "It is a control other Third Party Systems controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Third Party Systems controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "tps-05-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Compliance and regulatory alignment\" control?",
          "options": [
            "A point-in-time screenshot of one system's compliance and regulatory alignment settings, captured during the walkthrough",
            "The The mapping of each vendor to the regulations it must support for the org (GDPR, HIPAA, PCI, SOX, sector rules), reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the compliance and regulatory alignment control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's compliance and regulatory alignment capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "tps-05-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Compliance and regulatory alignment\"?",
          "options": [
            "From TPRM / GRC (vendor-to-regulation mapping) and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how compliance and regulatory alignment works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. TPRM / GRC (vendor-to-regulation mapping)) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "tps-05-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Compliance and regulatory alignment\"?",
          "options": [
            "The external audit firm, since it is the party examining the compliance and regulatory alignment control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the compliance and regulatory alignment data is shared, so the accountability sits with no one in particular",
            "Compliance / GRC + vendor risk, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Compliance / GRC + vendor risk owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "tps-05-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Compliance and regulatory alignment\", which part stays with the human auditor?",
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
          "id": "tps-05-q7",
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
          "id": "tps-05-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Compliance and regulatory alignment\", which of these is a realistic reportable finding?",
          "options": [
            "A payment-adjacent vendor has no current PCI Attestation of Compliance, a health-data vendor isn't HITRUST/BAA-covered, and contracts lack regulatory flow-down — exposing the org to its own compliance findings.",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. A payment-adjacent vendor has no current PCI Attestation of Compliance, a health-data vendor isn't HITRUST/BAA-covered, and contracts lack regulatory flow-down — exposing the org to its own compliance findings. A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "tps-05-q9",
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
          "id": "tps-05-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Compliance and regulatory alignment\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind compliance and regulatory alignment, so there is no overlap",
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
    "epochId": "third-party",
    "id": "tps-06",
    "order": 6,
    "title": "BCP and resilience (vendor)",
    "subtitle": "Agentic technical & privacy audit of the bcp and resilience (vendor) control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 7,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"BCP and resilience (vendor)\" control for Third Party Systems is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify the org can withstand a vendor outage or failure. PASS: critical vendors have a tested BCP/DR with RTO/RPO meeting the org's needs; contracts carry availability SLAs + an exit/transition plan; concentration risk is assessed (no single vendor/cloud is an unmitigated SPOF); and the org has a contingency for losing each critical vendor. Exceptions: critical-vendor dependence with no BCP evidence or exit plan, no SLA, unmitigated concentration risk, and no contingency for a vendor failure.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Third Party Systems systems of record (TPRM (vendor criticality + BCP evidence); Contracts (SLA + exit terms); The org's BCP (vendor-dependency view)) as tools — e.g. `per critical vendor: BCP/DR attestation + tested RTO/RPO vs the org's `, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The vendor's BCP/DR attestation + tested RTO/RPO for the service the org depends on",
        "The org's dependency/criticality rating of each vendor (single point of failure?)",
        "The contractual availability SLA + the exit/continuity plan if the vendor fails",
        "Concentration-risk analysis (multiple critical services on one vendor/cloud)"
      ],
      "system": [
        "TPRM (vendor criticality + BCP evidence)",
        "Contracts (SLA + exit terms)",
        "The org's BCP (vendor-dependency view)"
      ],
      "dataOwner": [
        "Vendor risk + business continuity",
        "Service owners",
        "Procurement"
      ],
      "scoring": {
        "ease": "EASE 7/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Third Party Systems controls."
      }
    },
    "badge": {
      "id": "tps-06-badge",
      "name": "Third Party Systems Auditor",
      "emoji": "🔗"
    },
    "wonder": {
      "name": "BCP and resilience (vendor)",
      "location": "Third Party Systems",
      "era": "Present Day",
      "emoji": "🔗"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"BCP and resilience (vendor)\" as a repeatable agentic workflow: pull the real evidence (The vendor's BCP/DR attestation + tested RTO/RPO for the service the org depends on) with read-only agents, run the test against policy, and issue a defensible opinion on the Third Party Systems control.",
      "year": 2025,
      "overview": [
        "The \"BCP and resilience (vendor)\" sub-process is one of the controls an auditor must verify for Third Party Systems. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the vendor's BCP/DR attestation + tested RTO/RPO for the service the org depends on, for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here TPRM (vendor criticality + BCP evidence), Contracts (SLA + exit terms), The org's BCP (vendor-dependency view) — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `per critical vendor: BCP/DR attestation + tested RTO/RPO vs the org's need` — read-only, against the systems of record.",
        "The test itself is specific. Verify the org can withstand a vendor outage or failure. PASS: critical vendors have a tested BCP/DR with RTO/RPO meeting the org's needs; contracts carry availability SLAs + an exit/transition plan; concentration risk is assessed (no single vendor/cloud is an unmitigated SPOF); and the org has a contingency for losing each critical vendor. Exceptions: critical-vendor dependence with no BCP evidence or exit plan, no SLA, unmitigated concentration risk, and no contingency for a vendor failure. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `06_bcp_and_resilience_vendor_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from TPRM (vendor criticality + BCP evidence) and Contracts (SLA + exit terms) (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 06_bcp_and_resilience_vendor_mcp.py` to expose it to your agent — or `python 06_bcp_and_resilience_vendor_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "The breach that came through a vendor",
        "when": "Recurring",
        "where": "Third-party / supplier integrations",
        "impact": "A trusted vendor or nth-party with access becomes the path in — the customer inherits a risk they didn't directly control.",
        "body": [
          "From Target's HVAC vendor to MOVEit's mass exploitation, third parties are a leading breach vector because their access and weaknesses become yours.",
          "Auditors verify vendor due diligence, contractual security/SLA terms, integration security, audit rights, and nth-party (subcontractor) risk."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Third Party Systems scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull TPRM (vendor criticality + BCP evidence) · Contracts (SLA + exit terms)",
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
          "event": "MOVEit: one vendor flaw breaches thousands of downstream orgs",
          "highlight": true
        },
        {
          "year": 2013,
          "event": "Target: HVAC-vendor credentials lead to a 40M-card breach"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"BCP and resilience (vendor)\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "per critical vendor: BCP/DR attestation + tested RTO/RPO vs the org's need\ncontract availability SLA + the exit / transition / source-escrow plan\nconcentration risk: how many critical services on one vendor/cloud?\nthe org's contingency if this vendor goes down for a week"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The vendor's BCP/DR attestation + tested RTO/RPO for the service the org depends on.",
        "The test: Verify the org can withstand a vendor outage or failure.",
        "Reconcile the systems of record (TPRM (vendor criticality + BCP evidence), Contracts (SLA + exit terms), The org's BCP (vendor-dependency view)) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. The org's entire payments + identity stack depends on a single vendor with no exit plan and no tested BCP evidence on file; a multi-day vendor outage would halt the business with no fallback."
      ],
      "references": [
        {
          "title": "ISO 22301",
          "url": "https://www.iso.org/standard/75106.html"
        },
        {
          "title": "FFIEC — Concentration Risk",
          "url": "https://www.ffiec.gov/"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "06_bcp_and_resilience_vendor_mcp.py",
          "url": "/audit-code/third-party/06_bcp_and_resilience_vendor_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Third Party Systems evidence for \"BCP and resilience (vendor)\" (the vendor's bcp/dr attestation + tested rto/rpo for the service the org depends on), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"BCP and resilience (vendor)\" control for Third Party Systems at AcmeCorp. THE TEST: Verify the org can withstand a vendor outage or failure. PASS: critical vendors have a tested BCP/DR with RTO/RPO meeting the org's needs; contracts carry availability SLAs + an exit/transition plan; concentration risk is assessed (no single vendor/cloud is an unmitigated SPOF); and the org has a contingency for losing each critical vendor. Exceptions: critical-vendor dependence with no BCP evidence or exit plan, no SLA, unmitigated concentration risk, and no contingency for a vendor failure. The evidence — The vendor's BCP/DR attestation + tested RTO/RPO for the service the org depends on — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live TPRM (vendor criticality + BCP evidence) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. TPRM (vendor criticality + BCP evidence) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from TPRM (vendor criticality + BCP evidence); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Third Party Systems: \"BCP and resilience (vendor)\" Audit Evidence\n\nThe test:\nVerify the org can withstand a vendor outage or failure. PASS: critical vendors have a tested BCP/DR with RTO/RPO meeting the org's needs; contracts carry availability SLAs + an exit/transition plan; concentration risk is assessed (no single vendor/cloud is an unmitigated SPOF); and the org has a contingency for losing each critical vendor. Exceptions: critical-vendor dependence with no BCP evidence or exit plan, no SLA, unmitigated concentration risk, and no contingency for a vendor failure.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- third-party_inventory.json   (in-scope items — The vendor's BCP/DR attestation + tested RTO/RPO for the service the org depends on)\n- third-party_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"BCP and resilience (vendor)\",\n  \"domain\": \"Third Party Systems\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{tps_",
        "/evidence/third-party_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Third-party risk management\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"BCP and resilience (vendor)\" control must cover\n# fragment: bcp_resilience_vendor_",
        "/evidence/third-party_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "third-party_inventory.json",
            "isDir": false
          },
          {
            "name": "third-party_state.json",
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
          "value": "FLAG{tps_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/third-party_inventory.json",
          "value": "bcp_resilience_vendor_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/third-party_state.json",
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
          "id": "tps-06-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"BCP and resilience (vendor)\" sub-process of Third Party Systems?",
          "options": [
            "Deploy and operate the bcp and resilience (vendor) control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the bcp and resilience (vendor) control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for bcp and resilience (vendor) against comparable organisations in the sector",
            "Obtain evidence that the bcp and resilience (vendor) control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "tps-06-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"BCP and resilience (vendor)\" matter to the broader Third Party Systems posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Third Party Systems",
            "It stops mattering once a firewall and endpoint agent are deployed across the Third Party Systems estate",
            "It is a control other Third Party Systems controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Third Party Systems controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "tps-06-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"BCP and resilience (vendor)\" control?",
          "options": [
            "A point-in-time screenshot of one system's bcp and resilience (vendor) settings, captured during the walkthrough",
            "The The vendor's BCP/DR attestation + tested RTO/RPO for the service the org depends on, reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the bcp and resilience (vendor) control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's bcp and resilience (vendor) capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "tps-06-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"BCP and resilience (vendor)\"?",
          "options": [
            "From TPRM (vendor criticality + BCP evidence) and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how bcp and resilience (vendor) works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. TPRM (vendor criticality + BCP evidence)) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "tps-06-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"BCP and resilience (vendor)\"?",
          "options": [
            "The external audit firm, since it is the party examining the bcp and resilience (vendor) control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the bcp and resilience (vendor) data is shared, so the accountability sits with no one in particular",
            "Vendor risk + business continuity, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Vendor risk + business continuity owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "tps-06-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"BCP and resilience (vendor)\", which part stays with the human auditor?",
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
          "id": "tps-06-q7",
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
          "id": "tps-06-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"BCP and resilience (vendor)\", which of these is a realistic reportable finding?",
          "options": [
            "The org's entire payments + identity stack depends on a single vendor with no exit plan and no tested BCP evidence on file; a multi-day vendor outage would halt the business with no fallback.",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. The org's entire payments + identity stack depends on a single vendor with no exit plan and no tested BCP evidence on file; a multi-day vendor outage would halt the business with no fallback. A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "tps-06-q9",
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
          "id": "tps-06-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"BCP and resilience (vendor)\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind bcp and resilience (vendor), so there is no overlap",
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
    "epochId": "third-party",
    "id": "tps-07",
    "order": 7,
    "title": "Vulnerability and patch (vendor)",
    "subtitle": "Agentic technical & privacy audit of the vulnerability and patch (vendor) control",
    "category": "cybersecurity",
    "xp": 180,
    "easeScore": 5,
    "valueScore": 9,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Vulnerability and patch (vendor)\" control for Third Party Systems is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify vendor software/services are kept patched against known vulnerabilities. PASS: SaaS vendors attest to a vuln-management program (+ a pen-test summary); for vendor software the org runs, the org tracks the vendor's advisories (PSIRT) and patches within SLA; vendor products are checked against CISA KEV; and contracts set a remediation SLA for vendor-side vulns. Exceptions: vendor products with open KEV-listed CVEs, no vendor advisory monitoring, self-hosted vendor software left unpatched, and no contractual remediation SLA.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Third Party Systems systems of record (TPRM (vendor vuln-mgmt attestation); Vendor PSIRT / advisory feeds; Vuln scanner (for self-hosted vendor software)) as tools — e.g. `SaaS vendor: vuln-mgmt attestation + recent pen-test summary`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "Evidence of the vendor's vulnerability + patch management for the service (their attestation + any pen-test summary)",
        "For self-hosted vendor software: the org's patching of it + the vendor's advisory (PSIRT) feed",
        "Known-vulnerability status of vendor products in use (CISA KEV, vendor PSIRT)",
        "The SLA for the vendor to remediate vulnerabilities in their service"
      ],
      "system": [
        "TPRM (vendor vuln-mgmt attestation)",
        "Vendor PSIRT / advisory feeds",
        "Vuln scanner (for self-hosted vendor software)",
        "CISA KEV"
      ],
      "dataOwner": [
        "Vendor risk + vulnerability management",
        "IT ops (patch self-hosted)",
        "Security"
      ],
      "scoring": {
        "ease": "EASE 5/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 9/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Third Party Systems controls."
      }
    },
    "badge": {
      "id": "tps-07-badge",
      "name": "Third Party Systems Auditor",
      "emoji": "🔗"
    },
    "wonder": {
      "name": "Vulnerability and patch (vendor)",
      "location": "Third Party Systems",
      "era": "Present Day",
      "emoji": "🔗"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Vulnerability and patch (vendor)\" as a repeatable agentic workflow: pull the real evidence (Evidence of the vendor's vulnerability + patch management for the service (their attestation + any pen-test summary)) with read-only agents, run the test against policy, and issue a defensible opinion on the Third Party Systems control.",
      "year": 2025,
      "overview": [
        "The \"Vulnerability and patch (vendor)\" sub-process is one of the controls an auditor must verify for Third Party Systems. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me evidence of the vendor's vulnerability + patch management for the service (their attestation + any pen-test summary), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here TPRM (vendor vuln-mgmt attestation), Vendor PSIRT / advisory feeds, Vuln scanner (for self-hosted vendor software) — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `SaaS vendor: vuln-mgmt attestation + recent pen-test summary` — read-only, against the systems of record.",
        "The test itself is specific. Verify vendor software/services are kept patched against known vulnerabilities. PASS: SaaS vendors attest to a vuln-management program (+ a pen-test summary); for vendor software the org runs, the org tracks the vendor's advisories (PSIRT) and patches within SLA; vendor products are checked against CISA KEV; and contracts set a remediation SLA for vendor-side vulns. Exceptions: vendor products with open KEV-listed CVEs, no vendor advisory monitoring, self-hosted vendor software left unpatched, and no contractual remediation SLA. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `07_vulnerability_and_patch_vendor_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from TPRM (vendor vuln-mgmt attestation) and Vendor PSIRT / advisory feeds (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 07_vulnerability_and_patch_vendor_mcp.py` to expose it to your agent — or `python 07_vulnerability_and_patch_vendor_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "The breach that came through a vendor",
        "when": "Recurring",
        "where": "Third-party / supplier integrations",
        "impact": "A trusted vendor or nth-party with access becomes the path in — the customer inherits a risk they didn't directly control.",
        "body": [
          "From Target's HVAC vendor to MOVEit's mass exploitation, third parties are a leading breach vector because their access and weaknesses become yours.",
          "Auditors verify vendor due diligence, contractual security/SLA terms, integration security, audit rights, and nth-party (subcontractor) risk."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Third Party Systems scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull TPRM (vendor vuln-mgmt attestation) · Vendor PSIRT / advisory feeds",
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
          "event": "MOVEit: one vendor flaw breaches thousands of downstream orgs",
          "highlight": true
        },
        {
          "year": 2013,
          "event": "Target: HVAC-vendor credentials lead to a 40M-card breach"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Vulnerability and patch (vendor)\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "SaaS vendor: vuln-mgmt attestation + recent pen-test summary\nself-hosted vendor software: version vs vendor advisories (PSIRT) + patch status\njoin vendor products to CISA KEV (the MOVEit / Ivanti / Citrix class)\ncontractual vuln-remediation SLA for the vendor's service"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: Evidence of the vendor's vulnerability + patch management for the service (their attestation + any pen-test summary).",
        "The test: Verify vendor software/services are kept patched against known vulnerabilities.",
        "Reconcile the systems of record (TPRM (vendor vuln-mgmt attestation), Vendor PSIRT / advisory feeds, Vuln scanner (for self-hosted vendor software)) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. A self-hosted vendor appliance is running a version with a KEV-listed critical CVE (the MOVEit/Citrix pattern) because no one tracks the vendor's PSIRT feed; SaaS vendors provide no vuln-management evidence."
      ],
      "references": [
        {
          "title": "NIST SP 800-161",
          "url": "https://csrc.nist.gov/pubs/sp/800/161/r1/final"
        },
        {
          "title": "CISA KEV",
          "url": "https://www.cisa.gov/known-exploited-vulnerabilities-catalog"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "07_vulnerability_and_patch_vendor_mcp.py",
          "url": "/audit-code/third-party/07_vulnerability_and_patch_vendor_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Third Party Systems evidence for \"Vulnerability and patch (vendor)\" (evidence of the vendor's vulnerability + patch management for the service (their attestation + any pen-test summary)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Vulnerability and patch (vendor)\" control for Third Party Systems at AcmeCorp. THE TEST: Verify vendor software/services are kept patched against known vulnerabilities. PASS: SaaS vendors attest to a vuln-management program (+ a pen-test summary); for vendor software the org runs, the org tracks the vendor's advisories (PSIRT) and patches within SLA; vendor products are checked against CISA KEV; and contracts set a remediation SLA for vendor-side vulns. Exceptions: vendor products with open KEV-listed CVEs, no vendor advisory monitoring, self-hosted vendor software left unpatched, and no contractual remediation SLA. The evidence — Evidence of the vendor's vulnerability + patch management for the service (their attestation + any pen-test summary) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live TPRM (vendor vuln-mgmt attestation) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. TPRM (vendor vuln-mgmt attestation) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from TPRM (vendor vuln-mgmt attestation); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Third Party Systems: \"Vulnerability and patch (vendor)\" Audit Evidence\n\nThe test:\nVerify vendor software/services are kept patched against known vulnerabilities. PASS: SaaS vendors attest to a vuln-management program (+ a pen-test summary); for vendor software the org runs, the org tracks the vendor's advisories (PSIRT) and patches within SLA; vendor products are checked against CISA KEV; and contracts set a remediation SLA for vendor-side vulns. Exceptions: vendor products with open KEV-listed CVEs, no vendor advisory monitoring, self-hosted vendor software left unpatched, and no contractual remediation SLA.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- third-party_inventory.json   (in-scope items — Evidence of the vendor's vulnerability + patch management for the service (their attestation + any pen-test summary))\n- third-party_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Vulnerability and patch (vendor)\",\n  \"domain\": \"Third Party Systems\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{tps_",
        "/evidence/third-party_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Third-party risk management\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Vulnerability and patch (vendor)\" control must cover\n# fragment: vulnerability_patch_vendor_",
        "/evidence/third-party_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "third-party_inventory.json",
            "isDir": false
          },
          {
            "name": "third-party_state.json",
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
          "value": "FLAG{tps_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/third-party_inventory.json",
          "value": "vulnerability_patch_vendor_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/third-party_state.json",
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
          "id": "tps-07-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Vulnerability and patch (vendor)\" sub-process of Third Party Systems?",
          "options": [
            "Deploy and operate the vulnerability and patch (vendor) control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the vulnerability and patch (vendor) control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for vulnerability and patch (vendor) against comparable organisations in the sector",
            "Obtain evidence that the vulnerability and patch (vendor) control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "tps-07-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Vulnerability and patch (vendor)\" matter to the broader Third Party Systems posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Third Party Systems",
            "It stops mattering once a firewall and endpoint agent are deployed across the Third Party Systems estate",
            "It is a control other Third Party Systems controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Third Party Systems controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "tps-07-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Vulnerability and patch (vendor)\" control?",
          "options": [
            "A point-in-time screenshot of one system's vulnerability and patch (vendor) settings, captured during the walkthrough",
            "The Evidence of the vendor's vulnerability + patch management for the service (their attestation + any pen-test summary), reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the vulnerability and patch (vendor) control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's vulnerability and patch (vendor) capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "tps-07-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Vulnerability and patch (vendor)\"?",
          "options": [
            "From TPRM (vendor vuln-mgmt attestation) and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how vulnerability and patch (vendor) works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. TPRM (vendor vuln-mgmt attestation)) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "tps-07-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Vulnerability and patch (vendor)\"?",
          "options": [
            "The external audit firm, since it is the party examining the vulnerability and patch (vendor) control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the vulnerability and patch (vendor) data is shared, so the accountability sits with no one in particular",
            "Vendor risk + vulnerability management, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Vendor risk + vulnerability management owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "tps-07-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Vulnerability and patch (vendor)\", which part stays with the human auditor?",
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
          "id": "tps-07-q7",
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
          "id": "tps-07-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Vulnerability and patch (vendor)\", which of these is a realistic reportable finding?",
          "options": [
            "A self-hosted vendor appliance is running a version with a KEV-listed critical CVE (the MOVEit/Citrix pattern) because no one tracks the vendor's PSIRT feed; SaaS vendors provide no vuln-management evidence.",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. A self-hosted vendor appliance is running a version with a KEV-listed critical CVE (the MOVEit/Citrix pattern) because no one tracks the vendor's PSIRT feed; SaaS vendors provide no vuln-management evidence. A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "tps-07-q9",
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
          "id": "tps-07-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Vulnerability and patch (vendor)\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind vulnerability and patch (vendor), so there is no overlap",
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
    "epochId": "third-party",
    "id": "tps-08",
    "order": 8,
    "title": "Vendor governance and risk management",
    "subtitle": "Agentic technical & privacy audit of the vendor governance and risk management control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 6,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Vendor governance and risk management\" control for Third Party Systems is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify third parties are governed across their lifecycle with risk-based rigor. PASS: a complete vendor inventory is risk-tiered; onboarding due-diligence matches the tier; vendors are reassessed on cadence (and continuously monitored for high-risk ones); and offboarding revokes access + confirms data return/destruction. Exceptions: shadow/uninventoried vendors, no risk-tiering, onboarding with no due-diligence, high-risk vendors never reassessed, and offboarded vendors with residual access/data.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Third Party Systems systems of record (TPRM / GRC (Archer / OneTrust / ProcessUnity / Whistic); Continuous monitoring (SecurityScorecard / BitSight); Procurement + the contract repository) as tools — e.g. `vendor inventory + risk-tier (criticality × data sensitivity) + assess`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The vendor inventory + risk-tiering (criticality × data sensitivity) + the assessment cadence per tier",
        "The onboarding due-diligence process + evidence (questionnaire, financial, security, references)",
        "Ongoing-monitoring evidence (reassessment, continuous monitoring, news/breach alerts)",
        "The offboarding/termination process (data return/destruction, access revocation)"
      ],
      "system": [
        "TPRM / GRC (Archer / OneTrust / ProcessUnity / Whistic)",
        "Continuous monitoring (SecurityScorecard / BitSight)",
        "Procurement + the contract repository"
      ],
      "dataOwner": [
        "Third-party risk management (owns the program)",
        "Procurement",
        "Risk committee"
      ],
      "scoring": {
        "ease": "EASE 6/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Third Party Systems controls."
      }
    },
    "badge": {
      "id": "tps-08-badge",
      "name": "Third Party Systems Auditor",
      "emoji": "🔗"
    },
    "wonder": {
      "name": "Vendor governance and risk management",
      "location": "Third Party Systems",
      "era": "Present Day",
      "emoji": "🔗"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Vendor governance and risk management\" as a repeatable agentic workflow: pull the real evidence (The vendor inventory + risk-tiering (criticality × data sensitivity) + the assessment cadence per tier) with read-only agents, run the test against policy, and issue a defensible opinion on the Third Party Systems control.",
      "year": 2025,
      "overview": [
        "The \"Vendor governance and risk management\" sub-process is one of the controls an auditor must verify for Third Party Systems. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the vendor inventory + risk-tiering (criticality × data sensitivity) + the assessment cadence per tier, for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here TPRM / GRC (Archer / OneTrust / ProcessUnity / Whistic), Continuous monitoring (SecurityScorecard / BitSight), Procurement + the contract repository — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `vendor inventory + risk-tier (criticality × data sensitivity) + assessment caden` — read-only, against the systems of record.",
        "The test itself is specific. Verify third parties are governed across their lifecycle with risk-based rigor. PASS: a complete vendor inventory is risk-tiered; onboarding due-diligence matches the tier; vendors are reassessed on cadence (and continuously monitored for high-risk ones); and offboarding revokes access + confirms data return/destruction. Exceptions: shadow/uninventoried vendors, no risk-tiering, onboarding with no due-diligence, high-risk vendors never reassessed, and offboarded vendors with residual access/data. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `08_vendor_governance_and_risk_management_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from TPRM / GRC (Archer / OneTrust / ProcessUnity / Whistic) and Continuous monitoring (SecurityScorecard / BitSight) (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 08_vendor_governance_and_risk_management_mcp.py` to expose it to your agent — or `python 08_vendor_governance_and_risk_management_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "The breach that came through a vendor",
        "when": "Recurring",
        "where": "Third-party / supplier integrations",
        "impact": "A trusted vendor or nth-party with access becomes the path in — the customer inherits a risk they didn't directly control.",
        "body": [
          "From Target's HVAC vendor to MOVEit's mass exploitation, third parties are a leading breach vector because their access and weaknesses become yours.",
          "Auditors verify vendor due diligence, contractual security/SLA terms, integration security, audit rights, and nth-party (subcontractor) risk."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Third Party Systems scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull TPRM / GRC (Archer / OneTrust / ProcessUnity / Whistic) · Continuous monitoring (SecurityScorecard / BitSight)",
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
          "event": "MOVEit: one vendor flaw breaches thousands of downstream orgs",
          "highlight": true
        },
        {
          "year": 2013,
          "event": "Target: HVAC-vendor credentials lead to a 40M-card breach"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Vendor governance and risk management\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "vendor inventory + risk-tier (criticality × data sensitivity) + assessment cadence per tier\nonboarding due-diligence evidence (SIG questionnaire, SOC 2, financial, references)\ncontinuous monitoring (SecurityScorecard / BitSight) for high-risk vendors\noffboarding: access revoked + data return/destruction attested"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The vendor inventory + risk-tiering (criticality × data sensitivity) + the assessment cadence per tier.",
        "The test: Verify third parties are governed across their lifecycle with risk-based rigor.",
        "Reconcile the systems of record (TPRM / GRC (Archer / OneTrust / ProcessUnity / Whistic), Continuous monitoring (SecurityScorecard / BitSight), Procurement + the contract repository) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. There's no central vendor inventory (procurement, IT, and business units each onboard vendors), no risk-tiering, and high-risk vendors are assessed once at onboarding and never again — plus several 'terminated' vendors still hold active integration credentials."
      ],
      "references": [
        {
          "title": "NIST SP 800-161",
          "url": "https://csrc.nist.gov/pubs/sp/800/161/r1/final"
        },
        {
          "title": "Shared Assessments SIG",
          "url": "https://sharedassessments.org/"
        },
        {
          "title": "ISO/IEC 27036",
          "url": "https://www.iso.org/standard/59648.html"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "08_vendor_governance_and_risk_management_mcp.py",
          "url": "/audit-code/third-party/08_vendor_governance_and_risk_management_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Third Party Systems evidence for \"Vendor governance and risk management\" (the vendor inventory + risk-tiering (criticality × data sensitivity) + the assessment cadence per tier), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Vendor governance and risk management\" control for Third Party Systems at AcmeCorp. THE TEST: Verify third parties are governed across their lifecycle with risk-based rigor. PASS: a complete vendor inventory is risk-tiered; onboarding due-diligence matches the tier; vendors are reassessed on cadence (and continuously monitored for high-risk ones); and offboarding revokes access + confirms data return/destruction. Exceptions: shadow/uninventoried vendors, no risk-tiering, onboarding with no due-diligence, high-risk vendors never reassessed, and offboarded vendors with residual access/data. The evidence — The vendor inventory + risk-tiering (criticality × data sensitivity) + the assessment cadence per tier — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live TPRM / GRC (Archer / OneTrust / ProcessUnity / Whistic) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. TPRM / GRC (Archer / OneTrust / ProcessUnity / Whistic) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from TPRM / GRC (Archer / OneTrust / ProcessUnity / Whistic); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Third Party Systems: \"Vendor governance and risk management\" Audit Evidence\n\nThe test:\nVerify third parties are governed across their lifecycle with risk-based rigor. PASS: a complete vendor inventory is risk-tiered; onboarding due-diligence matches the tier; vendors are reassessed on cadence (and continuously monitored for high-risk ones); and offboarding revokes access + confirms data return/destruction. Exceptions: shadow/uninventoried vendors, no risk-tiering, onboarding with no due-diligence, high-risk vendors never reassessed, and offboarded vendors with residual access/data.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- third-party_inventory.json   (in-scope items — The vendor inventory + risk-tiering (criticality × data sensitivity) + the assessment cadence per tier)\n- third-party_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Vendor governance and risk management\",\n  \"domain\": \"Third Party Systems\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{tps_",
        "/evidence/third-party_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Third-party risk management\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Vendor governance and risk management\" control must cover\n# fragment: vendor_governance_risk_",
        "/evidence/third-party_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "third-party_inventory.json",
            "isDir": false
          },
          {
            "name": "third-party_state.json",
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
          "value": "FLAG{tps_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/third-party_inventory.json",
          "value": "vendor_governance_risk_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/third-party_state.json",
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
          "id": "tps-08-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Vendor governance and risk management\" sub-process of Third Party Systems?",
          "options": [
            "Deploy and operate the vendor governance and risk management control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the vendor governance and risk management control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for vendor governance and risk management against comparable organisations in the sector",
            "Obtain evidence that the vendor governance and risk management control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "tps-08-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Vendor governance and risk management\" matter to the broader Third Party Systems posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Third Party Systems",
            "It stops mattering once a firewall and endpoint agent are deployed across the Third Party Systems estate",
            "It is a control other Third Party Systems controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Third Party Systems controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "tps-08-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Vendor governance and risk management\" control?",
          "options": [
            "A point-in-time screenshot of one system's vendor governance and risk management settings, captured during the walkthrough",
            "The The vendor inventory + risk-tiering (criticality × data sensitivity) + the assessment cadence per tier, reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the vendor governance and risk management control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's vendor governance and risk management capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "tps-08-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Vendor governance and risk management\"?",
          "options": [
            "From TPRM / GRC (Archer / OneTrust / ProcessUnity / Whistic) and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how vendor governance and risk management works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. TPRM / GRC (Archer / OneTrust / ProcessUnity / Whistic)) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "tps-08-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Vendor governance and risk management\"?",
          "options": [
            "The external audit firm, since it is the party examining the vendor governance and risk management control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the vendor governance and risk management data is shared, so the accountability sits with no one in particular",
            "Third-party risk management (owns the program), with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Third-party risk management (owns the program) owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "tps-08-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Vendor governance and risk management\", which part stays with the human auditor?",
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
          "id": "tps-08-q7",
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
          "id": "tps-08-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Vendor governance and risk management\", which of these is a realistic reportable finding?",
          "options": [
            "There's no central vendor inventory (procurement, IT, and business units each onboard vendors), no risk-tiering, and high-risk vendors are assessed once at onboarding and never again — plus several 'terminated' vendors still hold active integration credentials.",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. There's no central vendor inventory (procurement, IT, and business units each onboard vendors), no risk-tiering, and high-risk vendors are assessed once at onboarding and never again — plus several 'terminated' vendors still hold active integration credentials. A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "tps-08-q9",
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
          "id": "tps-08-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Vendor governance and risk management\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind vendor governance and risk management, so there is no overlap",
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
    "epochId": "third-party",
    "id": "tps-09",
    "order": 9,
    "title": "Data backup and recovery (vendor)",
    "subtitle": "Agentic technical & privacy audit of the data backup and recovery (vendor) control",
    "category": "cybersecurity",
    "xp": 180,
    "easeScore": 7,
    "valueScore": 9,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Data backup and recovery (vendor)\" control for Third Party Systems is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify data held in vendor systems is recoverable — including the org's own copy. PASS: the vendor backs up + can restore the org's data to a defined RTO/RPO; critically, the org keeps its OWN backup/export of data held in SaaS (the shared-responsibility gap — SaaS providers protect the platform, not your data from your own mistake/deletion); restores are tested; and data is exportable. Exceptions: sole reliance on the vendor for recoverability, no independent backup of SaaS data, restores never tested, and no data-export capability.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Third Party Systems systems of record (Vendor backup/restore attestation; SaaS backup tooling (for M365 / Salesforce / Workday — Veeam / Own); The data-export / portability process) as tools — e.g. `vendor: backup + restore capability + RTO/RPO for the org's data`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "Evidence the vendor backs up the org's data + the vendor's restore capability / RTO-RPO",
        "The org's OWN backup of data held in the vendor's SaaS (shared responsibility — SaaS vendors don't guarantee your data)",
        "Restore-test evidence (vendor-side or org-side export/restore tested)",
        "The data-export / portability capability (can the org get its data out)"
      ],
      "system": [
        "Vendor backup/restore attestation",
        "SaaS backup tooling (for M365 / Salesforce / Workday — Veeam / Own)",
        "The data-export / portability process"
      ],
      "dataOwner": [
        "Vendor risk + backup operations",
        "Data owners",
        "IT"
      ],
      "scoring": {
        "ease": "EASE 7/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 9/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Third Party Systems controls."
      }
    },
    "badge": {
      "id": "tps-09-badge",
      "name": "Third Party Systems Auditor",
      "emoji": "🔗"
    },
    "wonder": {
      "name": "Data backup and recovery (vendor)",
      "location": "Third Party Systems",
      "era": "Present Day",
      "emoji": "🔗"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Data backup and recovery (vendor)\" as a repeatable agentic workflow: pull the real evidence (Evidence the vendor backs up the org's data + the vendor's restore capability / RTO-RPO) with read-only agents, run the test against policy, and issue a defensible opinion on the Third Party Systems control.",
      "year": 2025,
      "overview": [
        "The \"Data backup and recovery (vendor)\" sub-process is one of the controls an auditor must verify for Third Party Systems. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me evidence the vendor backs up the org's data + the vendor's restore capability / RTO-RPO, for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Vendor backup/restore attestation, SaaS backup tooling (for M365 / Salesforce / Workday — Veeam / Own), The data-export / portability process — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `vendor: backup + restore capability + RTO/RPO for the org's data` — read-only, against the systems of record.",
        "The test itself is specific. Verify data held in vendor systems is recoverable — including the org's own copy. PASS: the vendor backs up + can restore the org's data to a defined RTO/RPO; critically, the org keeps its OWN backup/export of data held in SaaS (the shared-responsibility gap — SaaS providers protect the platform, not your data from your own mistake/deletion); restores are tested; and data is exportable. Exceptions: sole reliance on the vendor for recoverability, no independent backup of SaaS data, restores never tested, and no data-export capability. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `09_data_backup_and_recovery_vendor_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Vendor backup/restore attestation and SaaS backup tooling (for M365 / Salesforce / Workday — Veeam / Own) (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 09_data_backup_and_recovery_vendor_mcp.py` to expose it to your agent — or `python 09_data_backup_and_recovery_vendor_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "The breach that came through a vendor",
        "when": "Recurring",
        "where": "Third-party / supplier integrations",
        "impact": "A trusted vendor or nth-party with access becomes the path in — the customer inherits a risk they didn't directly control.",
        "body": [
          "From Target's HVAC vendor to MOVEit's mass exploitation, third parties are a leading breach vector because their access and weaknesses become yours.",
          "Auditors verify vendor due diligence, contractual security/SLA terms, integration security, audit rights, and nth-party (subcontractor) risk."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Third Party Systems scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull Vendor backup/restore attestation · SaaS backup tooling (for M365 / Salesforce / Workday — Veeam / Own)",
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
          "event": "MOVEit: one vendor flaw breaches thousands of downstream orgs",
          "highlight": true
        },
        {
          "year": 2013,
          "event": "Target: HVAC-vendor credentials lead to a 40M-card breach"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Data backup and recovery (vendor)\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "vendor: backup + restore capability + RTO/RPO for the org's data\nconfirm the org has an INDEPENDENT backup of critical SaaS data (M365 / Salesforce / etc.) — the shared-responsibility gap\nrestore-test evidence (export + restore actually tested)\ndata-export / portability: can the org extract its data on demand?"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: Evidence the vendor backs up the org's data + the vendor's restore capability / RTO-RPO.",
        "The test: Verify data held in vendor systems is recoverable — including the org's own copy.",
        "Reconcile the systems of record (Vendor backup/restore attestation, SaaS backup tooling (for M365 / Salesforce / Workday — Veeam / Own), The data-export / portability process) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. The org relies entirely on its SaaS vendors for data durability with no independent backup — so an accidental bulk-delete in Salesforce (the customer's responsibility under shared responsibility) would be unrecoverable past the vendor's short retention."
      ],
      "references": [
        {
          "title": "NIST SP 800-34",
          "url": "https://csrc.nist.gov/pubs/sp/800/34/r1/final"
        },
        {
          "title": "Shared Responsibility Model",
          "url": "https://aws.amazon.com/compliance/shared-responsibility-model/"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "09_data_backup_and_recovery_vendor_mcp.py",
          "url": "/audit-code/third-party/09_data_backup_and_recovery_vendor_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Third Party Systems evidence for \"Data backup and recovery (vendor)\" (evidence the vendor backs up the org's data + the vendor's restore capability / rto-rpo), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Data backup and recovery (vendor)\" control for Third Party Systems at AcmeCorp. THE TEST: Verify data held in vendor systems is recoverable — including the org's own copy. PASS: the vendor backs up + can restore the org's data to a defined RTO/RPO; critically, the org keeps its OWN backup/export of data held in SaaS (the shared-responsibility gap — SaaS providers protect the platform, not your data from your own mistake/deletion); restores are tested; and data is exportable. Exceptions: sole reliance on the vendor for recoverability, no independent backup of SaaS data, restores never tested, and no data-export capability. The evidence — Evidence the vendor backs up the org's data + the vendor's restore capability / RTO-RPO — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Vendor backup/restore attestation APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Vendor backup/restore attestation gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Vendor backup/restore attestation; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Third Party Systems: \"Data backup and recovery (vendor)\" Audit Evidence\n\nThe test:\nVerify data held in vendor systems is recoverable — including the org's own copy. PASS: the vendor backs up + can restore the org's data to a defined RTO/RPO; critically, the org keeps its OWN backup/export of data held in SaaS (the shared-responsibility gap — SaaS providers protect the platform, not your data from your own mistake/deletion); restores are tested; and data is exportable. Exceptions: sole reliance on the vendor for recoverability, no independent backup of SaaS data, restores never tested, and no data-export capability.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- third-party_inventory.json   (in-scope items — Evidence the vendor backs up the org's data + the vendor's restore capability / RTO-RPO)\n- third-party_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Data backup and recovery (vendor)\",\n  \"domain\": \"Third Party Systems\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{tps_",
        "/evidence/third-party_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Third-party risk management\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Data backup and recovery (vendor)\" control must cover\n# fragment: data_backup_recovery_",
        "/evidence/third-party_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "third-party_inventory.json",
            "isDir": false
          },
          {
            "name": "third-party_state.json",
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
          "value": "FLAG{tps_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/third-party_inventory.json",
          "value": "data_backup_recovery_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/third-party_state.json",
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
          "id": "tps-09-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Data backup and recovery (vendor)\" sub-process of Third Party Systems?",
          "options": [
            "Deploy and operate the data backup and recovery (vendor) control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the data backup and recovery (vendor) control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for data backup and recovery (vendor) against comparable organisations in the sector",
            "Obtain evidence that the data backup and recovery (vendor) control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "tps-09-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Data backup and recovery (vendor)\" matter to the broader Third Party Systems posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Third Party Systems",
            "It stops mattering once a firewall and endpoint agent are deployed across the Third Party Systems estate",
            "It is a control other Third Party Systems controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Third Party Systems controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "tps-09-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Data backup and recovery (vendor)\" control?",
          "options": [
            "A point-in-time screenshot of one system's data backup and recovery (vendor) settings, captured during the walkthrough",
            "The Evidence the vendor backs up the org's data + the vendor's restore capability / RTO-RPO, reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the data backup and recovery (vendor) control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's data backup and recovery (vendor) capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "tps-09-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Data backup and recovery (vendor)\"?",
          "options": [
            "From Vendor backup/restore attestation and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how data backup and recovery (vendor) works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. Vendor backup/restore attestation) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "tps-09-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Data backup and recovery (vendor)\"?",
          "options": [
            "The external audit firm, since it is the party examining the data backup and recovery (vendor) control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the data backup and recovery (vendor) data is shared, so the accountability sits with no one in particular",
            "Vendor risk + backup operations, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Vendor risk + backup operations owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "tps-09-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Data backup and recovery (vendor)\", which part stays with the human auditor?",
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
          "id": "tps-09-q7",
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
          "id": "tps-09-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Data backup and recovery (vendor)\", which of these is a realistic reportable finding?",
          "options": [
            "The org relies entirely on its SaaS vendors for data durability with no independent backup — so an accidental bulk-delete in Salesforce (the customer's responsibility under shared responsibility) would be unrecoverable past the vendor's short retention.",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. The org relies entirely on its SaaS vendors for data durability with no independent backup — so an accidental bulk-delete in Salesforce (the customer's responsibility under shared responsibility) would be unrecoverable past the vendor's short retention. A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "tps-09-q9",
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
          "id": "tps-09-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Data backup and recovery (vendor)\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind data backup and recovery (vendor), so there is no overlap",
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
    "epochId": "third-party",
    "id": "tps-10",
    "order": 10,
    "title": "Systems availability and capacity",
    "subtitle": "Agentic technical & privacy audit of the systems availability and capacity control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 5,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Systems availability and capacity\" control for Third Party Systems is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify vendor services meet availability + capacity needs. PASS: critical vendors have an availability SLA the org actually monitors (independent uptime/perf monitoring, not just the vendor's word); capacity is sufficient for the org's peak + growth; SLA breaches trigger credits + review; and degradation is detected early. Exceptions: no SLA or no independent monitoring, capacity limits hit at peak, SLA breaches unnoticed/uncredited, and no performance monitoring of the dependency.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Third Party Systems systems of record (Vendor SLA + status page; Independent uptime / synthetic monitoring (the org's view); APM (vendor-integration performance)) as tools — e.g. `vendor availability SLA + actual uptime (status-page history / the org`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The vendor's availability SLA + actual uptime evidence (status-page history, SLA credits)",
        "Capacity/scalability evidence (can the vendor handle the org's growth/peak load)",
        "Performance monitoring of the vendor service from the org's side",
        "The SLA-breach + service-credit history"
      ],
      "system": [
        "Vendor SLA + status page",
        "Independent uptime / synthetic monitoring (the org's view)",
        "APM (vendor-integration performance)"
      ],
      "dataOwner": [
        "Service owners + vendor management",
        "SRE / operations",
        "Procurement (SLA credits)"
      ],
      "scoring": {
        "ease": "EASE 5/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Third Party Systems controls."
      }
    },
    "badge": {
      "id": "tps-10-badge",
      "name": "Third Party Systems Auditor",
      "emoji": "🔗"
    },
    "wonder": {
      "name": "Systems availability and capacity",
      "location": "Third Party Systems",
      "era": "Present Day",
      "emoji": "🔗"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Systems availability and capacity\" as a repeatable agentic workflow: pull the real evidence (The vendor's availability SLA + actual uptime evidence (status-page history, SLA credits)) with read-only agents, run the test against policy, and issue a defensible opinion on the Third Party Systems control.",
      "year": 2025,
      "overview": [
        "The \"Systems availability and capacity\" sub-process is one of the controls an auditor must verify for Third Party Systems. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the vendor's availability SLA + actual uptime evidence (status-page history, SLA credits), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Vendor SLA + status page, Independent uptime / synthetic monitoring (the org's view), APM (vendor-integration performance) — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `vendor availability SLA + actual uptime (status-page history / the org's synthet` — read-only, against the systems of record.",
        "The test itself is specific. Verify vendor services meet availability + capacity needs. PASS: critical vendors have an availability SLA the org actually monitors (independent uptime/perf monitoring, not just the vendor's word); capacity is sufficient for the org's peak + growth; SLA breaches trigger credits + review; and degradation is detected early. Exceptions: no SLA or no independent monitoring, capacity limits hit at peak, SLA breaches unnoticed/uncredited, and no performance monitoring of the dependency. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `10_systems_availability_and_capacity_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Vendor SLA + status page and Independent uptime / synthetic monitoring (the org's view) (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 10_systems_availability_and_capacity_mcp.py` to expose it to your agent — or `python 10_systems_availability_and_capacity_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "The breach that came through a vendor",
        "when": "Recurring",
        "where": "Third-party / supplier integrations",
        "impact": "A trusted vendor or nth-party with access becomes the path in — the customer inherits a risk they didn't directly control.",
        "body": [
          "From Target's HVAC vendor to MOVEit's mass exploitation, third parties are a leading breach vector because their access and weaknesses become yours.",
          "Auditors verify vendor due diligence, contractual security/SLA terms, integration security, audit rights, and nth-party (subcontractor) risk."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Third Party Systems scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull Vendor SLA + status page · Independent uptime / synthetic monitoring (the org's view)",
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
          "event": "MOVEit: one vendor flaw breaches thousands of downstream orgs",
          "highlight": true
        },
        {
          "year": 2013,
          "event": "Target: HVAC-vendor credentials lead to a 40M-card breach"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Systems availability and capacity\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "vendor availability SLA + actual uptime (status-page history / the org's synthetic monitoring)\ncapacity: can the vendor handle the org's peak + projected growth?\nindependent monitoring of the vendor service (not relying on the vendor's status page)\nSLA-breach + service-credit history"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The vendor's availability SLA + actual uptime evidence (status-page history, SLA credits).",
        "The test: Verify vendor services meet availability + capacity needs.",
        "Reconcile the systems of record (Vendor SLA + status page, Independent uptime / synthetic monitoring (the org's view), APM (vendor-integration performance)) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. The org has no independent monitoring of its critical vendors, so a vendor's repeated SLA breaches went unnoticed and uncredited, and a capacity ceiling caused failures during the org's seasonal peak."
      ],
      "references": [
        {
          "title": "ITIL 4 — Service Level Management",
          "url": "https://www.axelos.com/certifications/itil-service-management"
        },
        {
          "title": "ISO/IEC 27036",
          "url": "https://www.iso.org/standard/59648.html"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "10_systems_availability_and_capacity_mcp.py",
          "url": "/audit-code/third-party/10_systems_availability_and_capacity_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Third Party Systems evidence for \"Systems availability and capacity\" (the vendor's availability sla + actual uptime evidence (status-page history, sla credits)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Systems availability and capacity\" control for Third Party Systems at AcmeCorp. THE TEST: Verify vendor services meet availability + capacity needs. PASS: critical vendors have an availability SLA the org actually monitors (independent uptime/perf monitoring, not just the vendor's word); capacity is sufficient for the org's peak + growth; SLA breaches trigger credits + review; and degradation is detected early. Exceptions: no SLA or no independent monitoring, capacity limits hit at peak, SLA breaches unnoticed/uncredited, and no performance monitoring of the dependency. The evidence — The vendor's availability SLA + actual uptime evidence (status-page history, SLA credits) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Vendor SLA + status page APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Vendor SLA + status page gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Vendor SLA + status page; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Third Party Systems: \"Systems availability and capacity\" Audit Evidence\n\nThe test:\nVerify vendor services meet availability + capacity needs. PASS: critical vendors have an availability SLA the org actually monitors (independent uptime/perf monitoring, not just the vendor's word); capacity is sufficient for the org's peak + growth; SLA breaches trigger credits + review; and degradation is detected early. Exceptions: no SLA or no independent monitoring, capacity limits hit at peak, SLA breaches unnoticed/uncredited, and no performance monitoring of the dependency.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- third-party_inventory.json   (in-scope items — The vendor's availability SLA + actual uptime evidence (status-page history, SLA credits))\n- third-party_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Systems availability and capacity\",\n  \"domain\": \"Third Party Systems\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{tps_",
        "/evidence/third-party_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Third-party risk management\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Systems availability and capacity\" control must cover\n# fragment: systems_availability_capacity_",
        "/evidence/third-party_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "third-party_inventory.json",
            "isDir": false
          },
          {
            "name": "third-party_state.json",
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
          "value": "FLAG{tps_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/third-party_inventory.json",
          "value": "systems_availability_capacity_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/third-party_state.json",
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
          "id": "tps-10-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Systems availability and capacity\" sub-process of Third Party Systems?",
          "options": [
            "Deploy and operate the systems availability and capacity control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the systems availability and capacity control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for systems availability and capacity against comparable organisations in the sector",
            "Obtain evidence that the systems availability and capacity control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "tps-10-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Systems availability and capacity\" matter to the broader Third Party Systems posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Third Party Systems",
            "It stops mattering once a firewall and endpoint agent are deployed across the Third Party Systems estate",
            "It is a control other Third Party Systems controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Third Party Systems controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "tps-10-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Systems availability and capacity\" control?",
          "options": [
            "A point-in-time screenshot of one system's systems availability and capacity settings, captured during the walkthrough",
            "The The vendor's availability SLA + actual uptime evidence (status-page history, SLA credits), reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the systems availability and capacity control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's systems availability and capacity capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "tps-10-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Systems availability and capacity\"?",
          "options": [
            "From Vendor SLA + status page and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how systems availability and capacity works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. Vendor SLA + status page) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "tps-10-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Systems availability and capacity\"?",
          "options": [
            "The external audit firm, since it is the party examining the systems availability and capacity control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the systems availability and capacity data is shared, so the accountability sits with no one in particular",
            "Service owners + vendor management, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Service owners + vendor management owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "tps-10-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Systems availability and capacity\", which part stays with the human auditor?",
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
          "id": "tps-10-q7",
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
          "id": "tps-10-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Systems availability and capacity\", which of these is a realistic reportable finding?",
          "options": [
            "The org has no independent monitoring of its critical vendors, so a vendor's repeated SLA breaches went unnoticed and uncredited, and a capacity ceiling caused failures during the org's seasonal peak.",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. The org has no independent monitoring of its critical vendors, so a vendor's repeated SLA breaches went unnoticed and uncredited, and a capacity ceiling caused failures during the org's seasonal peak. A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "tps-10-q9",
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
          "id": "tps-10-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Systems availability and capacity\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind systems availability and capacity, so there is no overlap",
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
    "epochId": "third-party",
    "id": "tps-11",
    "order": 11,
    "title": "Audit and monitoring rights",
    "subtitle": "Agentic technical & privacy audit of the audit and monitoring rights control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 7,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Audit and monitoring rights\" control for Third Party Systems is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify the org can verify its vendors (audit + monitoring rights). PASS: contracts grant a right to audit (or accept SOC 2 II in lieu); the org actually receives + reviews the vendor's audit reports (and follows up on exceptions + the CUECs it must implement); high-risk vendors are continuously monitored; and the org can get vendor logs for its own incidents. Exceptions: no right-to-audit, audit reports received but never reviewed (or CUECs ignored), no continuous monitoring, and no access to vendor logs during an incident.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Third Party Systems systems of record (Contracts (right-to-audit); Vendor SOC 2 / audit reports; Continuous monitoring (BitSight / SecurityScorecard)) as tools — e.g. `contract: right-to-audit clause (or SOC 2 II acceptance)`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The contractual right-to-audit clause + evidence it's exercised (on-site, remote, or via assessments)",
        "The vendor audit reports the org receives (SOC 2 II, pen-test summaries) + their review, including the complementary user-entity controls (CUECs)",
        "Continuous monitoring of the vendor's external security posture (SecurityScorecard / BitSight)",
        "The org's access to vendor logs/monitoring relevant to its data"
      ],
      "system": [
        "Contracts (right-to-audit)",
        "Vendor SOC 2 / audit reports",
        "Continuous monitoring (BitSight / SecurityScorecard)",
        "Vendor log-access / SIEM integration"
      ],
      "dataOwner": [
        "Vendor risk / internal audit",
        "Security operations (continuous monitoring)",
        "Legal"
      ],
      "scoring": {
        "ease": "EASE 7/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Third Party Systems controls."
      }
    },
    "badge": {
      "id": "tps-11-badge",
      "name": "Third Party Systems Auditor",
      "emoji": "🔗"
    },
    "wonder": {
      "name": "Audit and monitoring rights",
      "location": "Third Party Systems",
      "era": "Present Day",
      "emoji": "🔗"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Audit and monitoring rights\" as a repeatable agentic workflow: pull the real evidence (The contractual right-to-audit clause + evidence it's exercised (on-site, remote, or via assessments)) with read-only agents, run the test against policy, and issue a defensible opinion on the Third Party Systems control.",
      "year": 2025,
      "overview": [
        "The \"Audit and monitoring rights\" sub-process is one of the controls an auditor must verify for Third Party Systems. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the contractual right-to-audit clause + evidence it's exercised (on-site, remote, or via assessments), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Contracts (right-to-audit), Vendor SOC 2 / audit reports, Continuous monitoring (BitSight / SecurityScorecard) — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `contract: right-to-audit clause (or SOC 2 II acceptance)` — read-only, against the systems of record.",
        "The test itself is specific. Verify the org can verify its vendors (audit + monitoring rights). PASS: contracts grant a right to audit (or accept SOC 2 II in lieu); the org actually receives + reviews the vendor's audit reports (and follows up on exceptions + the CUECs it must implement); high-risk vendors are continuously monitored; and the org can get vendor logs for its own incidents. Exceptions: no right-to-audit, audit reports received but never reviewed (or CUECs ignored), no continuous monitoring, and no access to vendor logs during an incident. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `11_audit_and_monitoring_rights_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Contracts (right-to-audit) and Vendor SOC 2 / audit reports (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 11_audit_and_monitoring_rights_mcp.py` to expose it to your agent — or `python 11_audit_and_monitoring_rights_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "The breach that came through a vendor",
        "when": "Recurring",
        "where": "Third-party / supplier integrations",
        "impact": "A trusted vendor or nth-party with access becomes the path in — the customer inherits a risk they didn't directly control.",
        "body": [
          "From Target's HVAC vendor to MOVEit's mass exploitation, third parties are a leading breach vector because their access and weaknesses become yours.",
          "Auditors verify vendor due diligence, contractual security/SLA terms, integration security, audit rights, and nth-party (subcontractor) risk."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Third Party Systems scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull Contracts (right-to-audit) · Vendor SOC 2 / audit reports",
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
          "event": "MOVEit: one vendor flaw breaches thousands of downstream orgs",
          "highlight": true
        },
        {
          "year": 2013,
          "event": "Target: HVAC-vendor credentials lead to a 40M-card breach"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Audit and monitoring rights\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "contract: right-to-audit clause (or SOC 2 II acceptance)\nare received SOC 2 reports REVIEWED — including exceptions + the CUECs the org must implement?\ncontinuous monitoring (SecurityScorecard / BitSight) for high-risk vendors + alerting\ncan the org obtain vendor logs relevant to an incident on its data?"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The contractual right-to-audit clause + evidence it's exercised (on-site, remote, or via assessments).",
        "The test: Verify the org can verify its vendors (audit + monitoring rights).",
        "Reconcile the systems of record (Contracts (right-to-audit), Vendor SOC 2 / audit reports, Continuous monitoring (BitSight / SecurityScorecard)) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. SOC 2 reports are collected but never read — so the report's qualified opinion and the complementary user-entity controls (which the org was supposed to implement) were missed; there's no right-to-audit and no continuous monitoring."
      ],
      "references": [
        {
          "title": "SOC 2 / SSAE 18 — CUECs",
          "url": "https://www.aicpa-cima.com/topic/audit-assurance/audit-and-assurance-greater-than-soc-2"
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
          "name": "11_audit_and_monitoring_rights_mcp.py",
          "url": "/audit-code/third-party/11_audit_and_monitoring_rights_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Third Party Systems evidence for \"Audit and monitoring rights\" (the contractual right-to-audit clause + evidence it's exercised (on-site, remote, or via assessments)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Audit and monitoring rights\" control for Third Party Systems at AcmeCorp. THE TEST: Verify the org can verify its vendors (audit + monitoring rights). PASS: contracts grant a right to audit (or accept SOC 2 II in lieu); the org actually receives + reviews the vendor's audit reports (and follows up on exceptions + the CUECs it must implement); high-risk vendors are continuously monitored; and the org can get vendor logs for its own incidents. Exceptions: no right-to-audit, audit reports received but never reviewed (or CUECs ignored), no continuous monitoring, and no access to vendor logs during an incident. The evidence — The contractual right-to-audit clause + evidence it's exercised (on-site, remote, or via assessments) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Contracts (right-to-audit) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Contracts (right-to-audit) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Contracts (right-to-audit); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Third Party Systems: \"Audit and monitoring rights\" Audit Evidence\n\nThe test:\nVerify the org can verify its vendors (audit + monitoring rights). PASS: contracts grant a right to audit (or accept SOC 2 II in lieu); the org actually receives + reviews the vendor's audit reports (and follows up on exceptions + the CUECs it must implement); high-risk vendors are continuously monitored; and the org can get vendor logs for its own incidents. Exceptions: no right-to-audit, audit reports received but never reviewed (or CUECs ignored), no continuous monitoring, and no access to vendor logs during an incident.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- third-party_inventory.json   (in-scope items — The contractual right-to-audit clause + evidence it's exercised (on-site, remote, or via assessments))\n- third-party_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Audit and monitoring rights\",\n  \"domain\": \"Third Party Systems\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{tps_",
        "/evidence/third-party_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Third-party risk management\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Audit and monitoring rights\" control must cover\n# fragment: audit_monitoring_rights_",
        "/evidence/third-party_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "third-party_inventory.json",
            "isDir": false
          },
          {
            "name": "third-party_state.json",
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
          "value": "FLAG{tps_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/third-party_inventory.json",
          "value": "audit_monitoring_rights_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/third-party_state.json",
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
          "id": "tps-11-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Audit and monitoring rights\" sub-process of Third Party Systems?",
          "options": [
            "Deploy and operate the audit and monitoring rights control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the audit and monitoring rights control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for audit and monitoring rights against comparable organisations in the sector",
            "Obtain evidence that the audit and monitoring rights control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "tps-11-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Audit and monitoring rights\" matter to the broader Third Party Systems posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Third Party Systems",
            "It stops mattering once a firewall and endpoint agent are deployed across the Third Party Systems estate",
            "It is a control other Third Party Systems controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Third Party Systems controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "tps-11-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Audit and monitoring rights\" control?",
          "options": [
            "A point-in-time screenshot of one system's audit and monitoring rights settings, captured during the walkthrough",
            "The The contractual right-to-audit clause + evidence it's exercised (on-site, remote, or via assessments), reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the audit and monitoring rights control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's audit and monitoring rights capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "tps-11-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Audit and monitoring rights\"?",
          "options": [
            "From Contracts (right-to-audit) and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how audit and monitoring rights works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. Contracts (right-to-audit)) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "tps-11-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Audit and monitoring rights\"?",
          "options": [
            "The external audit firm, since it is the party examining the audit and monitoring rights control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the audit and monitoring rights data is shared, so the accountability sits with no one in particular",
            "Vendor risk / internal audit, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Vendor risk / internal audit owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "tps-11-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Audit and monitoring rights\", which part stays with the human auditor?",
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
          "id": "tps-11-q7",
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
          "id": "tps-11-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Audit and monitoring rights\", which of these is a realistic reportable finding?",
          "options": [
            "SOC 2 reports are collected but never read — so the report's qualified opinion and the complementary user-entity controls (which the org was supposed to implement) were missed; there's no right-to-audit and no continuous monitoring.",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. SOC 2 reports are collected but never read — so the report's qualified opinion and the complementary user-entity controls (which the org was supposed to implement) were missed; there's no right-to-audit and no continuous monitoring. A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "tps-11-q9",
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
          "id": "tps-11-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Audit and monitoring rights\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind audit and monitoring rights, so there is no overlap",
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
    "epochId": "third-party",
    "id": "tps-12",
    "order": 12,
    "title": "Subcontractor / nth party risk",
    "subtitle": "Agentic technical & privacy audit of the subcontractor / nth party risk control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 7,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Subcontractor / nth party risk\" control for Third Party Systems is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify risk is managed beyond the direct vendor (nth-party / fourth-party). PASS: critical vendors disclose their sub-processors; contracts flow security/privacy obligations down to sub-processors + require notice of changes; concentration risk across fourth parties is assessed (the shared dependency that affects many vendors at once); and the org can object to new sub-processors. Exceptions: no visibility into sub-processors, no contractual flow-down, an unmanaged shared fourth-party concentration (the systemic-risk pattern), and no notice/objection rights.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Third Party Systems systems of record (TPRM (sub-processor mapping); Vendor sub-processor lists / DPAs; Concentration-risk analysis) as tools — e.g. `per critical vendor: its disclosed sub-processors / fourth parties + t`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The map of each vendor's critical sub-processors / fourth parties (and the data they touch)",
        "The contractual flow-down requiring vendors to manage + disclose their sub-processors",
        "A concentration-risk view across nth parties (a shared fourth party behind many vendors)",
        "The org's visibility/notice rights when a vendor changes sub-processors"
      ],
      "system": [
        "TPRM (sub-processor mapping)",
        "Vendor sub-processor lists / DPAs",
        "Concentration-risk analysis"
      ],
      "dataOwner": [
        "Third-party risk management",
        "Privacy / Legal (DPA flow-down)",
        "Risk committee"
      ],
      "scoring": {
        "ease": "EASE 7/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Third Party Systems controls."
      }
    },
    "badge": {
      "id": "tps-12-badge",
      "name": "Third Party Systems Auditor",
      "emoji": "🔗"
    },
    "wonder": {
      "name": "Subcontractor / nth party risk",
      "location": "Third Party Systems",
      "era": "Present Day",
      "emoji": "🔗"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Subcontractor / nth party risk\" as a repeatable agentic workflow: pull the real evidence (The map of each vendor's critical sub-processors / fourth parties (and the data they touch)) with read-only agents, run the test against policy, and issue a defensible opinion on the Third Party Systems control.",
      "year": 2025,
      "overview": [
        "The \"Subcontractor / nth party risk\" sub-process is one of the controls an auditor must verify for Third Party Systems. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the map of each vendor's critical sub-processors / fourth parties (and the data they touch), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here TPRM (sub-processor mapping), Vendor sub-processor lists / DPAs, Concentration-risk analysis — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `per critical vendor: its disclosed sub-processors / fourth parties + the data th` — read-only, against the systems of record.",
        "The test itself is specific. Verify risk is managed beyond the direct vendor (nth-party / fourth-party). PASS: critical vendors disclose their sub-processors; contracts flow security/privacy obligations down to sub-processors + require notice of changes; concentration risk across fourth parties is assessed (the shared dependency that affects many vendors at once); and the org can object to new sub-processors. Exceptions: no visibility into sub-processors, no contractual flow-down, an unmanaged shared fourth-party concentration (the systemic-risk pattern), and no notice/objection rights. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `12_subcontractor_nth_party_risk_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from TPRM (sub-processor mapping) and Vendor sub-processor lists / DPAs (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 12_subcontractor_nth_party_risk_mcp.py` to expose it to your agent — or `python 12_subcontractor_nth_party_risk_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "The breach that came through a vendor",
        "when": "Recurring",
        "where": "Third-party / supplier integrations",
        "impact": "A trusted vendor or nth-party with access becomes the path in — the customer inherits a risk they didn't directly control.",
        "body": [
          "From Target's HVAC vendor to MOVEit's mass exploitation, third parties are a leading breach vector because their access and weaknesses become yours.",
          "Auditors verify vendor due diligence, contractual security/SLA terms, integration security, audit rights, and nth-party (subcontractor) risk."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Third Party Systems scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull TPRM (sub-processor mapping) · Vendor sub-processor lists / DPAs",
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
          "event": "MOVEit: one vendor flaw breaches thousands of downstream orgs",
          "highlight": true
        },
        {
          "year": 2013,
          "event": "Target: HVAC-vendor credentials lead to a 40M-card breach"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Subcontractor / nth party risk\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "per critical vendor: its disclosed sub-processors / fourth parties + the data they touch\nDPA flow-down: are obligations passed to sub-processors + is change-notice required?\nconcentration: is one fourth party (a shared cloud / CDN / auth provider) behind many vendors?\nthe org's notice + objection rights for new sub-processors"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The map of each vendor's critical sub-processors / fourth parties (and the data they touch).",
        "The test: Verify risk is managed beyond the direct vendor (nth-party / fourth-party).",
        "Reconcile the systems of record (TPRM (sub-processor mapping), Vendor sub-processor lists / DPAs, Concentration-risk analysis) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. The org has no visibility past its direct vendors; a single shared fourth party sits behind five 'independent' critical vendors (an unmanaged concentration), and contracts don't require sub-processor disclosure or change notice."
      ],
      "references": [
        {
          "title": "NIST SP 800-161 (nth-party)",
          "url": "https://csrc.nist.gov/pubs/sp/800/161/r1/final"
        },
        {
          "title": "GDPR Art. 28 (sub-processors)",
          "url": "https://gdpr-info.eu/art-28-gdpr/"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "12_subcontractor_nth_party_risk_mcp.py",
          "url": "/audit-code/third-party/12_subcontractor_nth_party_risk_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Third Party Systems evidence for \"Subcontractor / nth party risk\" (the map of each vendor's critical sub-processors / fourth parties (and the data they touch)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Subcontractor / nth party risk\" control for Third Party Systems at AcmeCorp. THE TEST: Verify risk is managed beyond the direct vendor (nth-party / fourth-party). PASS: critical vendors disclose their sub-processors; contracts flow security/privacy obligations down to sub-processors + require notice of changes; concentration risk across fourth parties is assessed (the shared dependency that affects many vendors at once); and the org can object to new sub-processors. Exceptions: no visibility into sub-processors, no contractual flow-down, an unmanaged shared fourth-party concentration (the systemic-risk pattern), and no notice/objection rights. The evidence — The map of each vendor's critical sub-processors / fourth parties (and the data they touch) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live TPRM (sub-processor mapping) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. TPRM (sub-processor mapping) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from TPRM (sub-processor mapping); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Third Party Systems: \"Subcontractor / nth party risk\" Audit Evidence\n\nThe test:\nVerify risk is managed beyond the direct vendor (nth-party / fourth-party). PASS: critical vendors disclose their sub-processors; contracts flow security/privacy obligations down to sub-processors + require notice of changes; concentration risk across fourth parties is assessed (the shared dependency that affects many vendors at once); and the org can object to new sub-processors. Exceptions: no visibility into sub-processors, no contractual flow-down, an unmanaged shared fourth-party concentration (the systemic-risk pattern), and no notice/objection rights.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- third-party_inventory.json   (in-scope items — The map of each vendor's critical sub-processors / fourth parties (and the data they touch))\n- third-party_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Subcontractor / nth party risk\",\n  \"domain\": \"Third Party Systems\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{tps_",
        "/evidence/third-party_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Third-party risk management\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Subcontractor / nth party risk\" control must cover\n# fragment: subcontractor_nth_party_",
        "/evidence/third-party_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "third-party_inventory.json",
            "isDir": false
          },
          {
            "name": "third-party_state.json",
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
          "value": "FLAG{tps_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/third-party_inventory.json",
          "value": "subcontractor_nth_party_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/third-party_state.json",
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
          "id": "tps-12-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Subcontractor / nth party risk\" sub-process of Third Party Systems?",
          "options": [
            "Deploy and operate the subcontractor / nth party risk control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the subcontractor / nth party risk control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for subcontractor / nth party risk against comparable organisations in the sector",
            "Obtain evidence that the subcontractor / nth party risk control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "tps-12-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Subcontractor / nth party risk\" matter to the broader Third Party Systems posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Third Party Systems",
            "It stops mattering once a firewall and endpoint agent are deployed across the Third Party Systems estate",
            "It is a control other Third Party Systems controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Third Party Systems controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "tps-12-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Subcontractor / nth party risk\" control?",
          "options": [
            "A point-in-time screenshot of one system's subcontractor / nth party risk settings, captured during the walkthrough",
            "The The map of each vendor's critical sub-processors / fourth parties (and the data they touch), reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the subcontractor / nth party risk control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's subcontractor / nth party risk capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "tps-12-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Subcontractor / nth party risk\"?",
          "options": [
            "From TPRM (sub-processor mapping) and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how subcontractor / nth party risk works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. TPRM (sub-processor mapping)) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "tps-12-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Subcontractor / nth party risk\"?",
          "options": [
            "The external audit firm, since it is the party examining the subcontractor / nth party risk control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the subcontractor / nth party risk data is shared, so the accountability sits with no one in particular",
            "Third-party risk management, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Third-party risk management owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "tps-12-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Subcontractor / nth party risk\", which part stays with the human auditor?",
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
          "id": "tps-12-q7",
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
          "id": "tps-12-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Subcontractor / nth party risk\", which of these is a realistic reportable finding?",
          "options": [
            "The org has no visibility past its direct vendors; a single shared fourth party sits behind five 'independent' critical vendors (an unmanaged concentration), and contracts don't require sub-processor disclosure or change notice.",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. The org has no visibility past its direct vendors; a single shared fourth party sits behind five 'independent' critical vendors (an unmanaged concentration), and contracts don't require sub-processor disclosure or change notice. A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "tps-12-q9",
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
          "id": "tps-12-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Subcontractor / nth party risk\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind subcontractor / nth party risk, so there is no overlap",
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
    "epochId": "third-party",
    "id": "tps-13",
    "order": 13,
    "title": "Identity federation and authentication",
    "subtitle": "Agentic technical & privacy audit of the identity federation and authentication control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 5,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Identity federation and authentication\" control for Third Party Systems is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify identity + access between the org and vendors is federated, MFA-protected, and deprovisioned. PASS: the org's access to vendor services is via SSO + MFA (local vendor passwords disabled); the vendor's access into the org's environment is least-privilege, JIT, MFA'd, and logged; and access is deprovisioned on leaver/termination in both directions. Exceptions: vendor services with local passwords bypassing SSO/MFA, vendor standing admin into the org's tenant, no MFA on vendor access, and vendor/leaver access not deprovisioned.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Third Party Systems systems of record (IdP (SSO / SAML / OIDC federation); PAM (vendor / third-party access); Vendor admin/support-access controls) as tools — e.g. `confirm vendor apps use SSO + MFA with local logins disabled (the Sale`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The federation config for each vendor (SAML / OIDC SSO) + whether local vendor logins are disabled",
        "MFA enforcement for vendor access (the org's users into the vendor, and the vendor's users into the org)",
        "Vendor-side admin/support access into the org's tenant (standing vs JIT, logged, scoped)",
        "Deprovisioning — vendor access removed when the org's users leave / the contract ends"
      ],
      "system": [
        "IdP (SSO / SAML / OIDC federation)",
        "PAM (vendor / third-party access)",
        "Vendor admin/support-access controls",
        "JML / deprovisioning"
      ],
      "dataOwner": [
        "IAM + vendor risk",
        "Security operations",
        "Service owners"
      ],
      "scoring": {
        "ease": "EASE 5/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Third Party Systems controls."
      }
    },
    "badge": {
      "id": "tps-13-badge",
      "name": "Third Party Systems Auditor",
      "emoji": "🔗"
    },
    "wonder": {
      "name": "Identity federation and authentication",
      "location": "Third Party Systems",
      "era": "Present Day",
      "emoji": "🔗"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Identity federation and authentication\" as a repeatable agentic workflow: pull the real evidence (The federation config for each vendor (SAML / OIDC SSO) + whether local vendor logins are disabled) with read-only agents, run the test against policy, and issue a defensible opinion on the Third Party Systems control.",
      "year": 2025,
      "overview": [
        "The \"Identity federation and authentication\" sub-process is one of the controls an auditor must verify for Third Party Systems. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the federation config for each vendor (SAML / OIDC SSO) + whether local vendor logins are disabled, for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here IdP (SSO / SAML / OIDC federation), PAM (vendor / third-party access), Vendor admin/support-access controls — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `confirm vendor apps use SSO + MFA with local logins disabled (the Salesforce-loc` — read-only, against the systems of record.",
        "The test itself is specific. Verify identity + access between the org and vendors is federated, MFA-protected, and deprovisioned. PASS: the org's access to vendor services is via SSO + MFA (local vendor passwords disabled); the vendor's access into the org's environment is least-privilege, JIT, MFA'd, and logged; and access is deprovisioned on leaver/termination in both directions. Exceptions: vendor services with local passwords bypassing SSO/MFA, vendor standing admin into the org's tenant, no MFA on vendor access, and vendor/leaver access not deprovisioned. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `13_identity_federation_and_authentication_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from IdP (SSO / SAML / OIDC federation) and PAM (vendor / third-party access) (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 13_identity_federation_and_authentication_mcp.py` to expose it to your agent — or `python 13_identity_federation_and_authentication_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "The breach that came through a vendor",
        "when": "Recurring",
        "where": "Third-party / supplier integrations",
        "impact": "A trusted vendor or nth-party with access becomes the path in — the customer inherits a risk they didn't directly control.",
        "body": [
          "From Target's HVAC vendor to MOVEit's mass exploitation, third parties are a leading breach vector because their access and weaknesses become yours.",
          "Auditors verify vendor due diligence, contractual security/SLA terms, integration security, audit rights, and nth-party (subcontractor) risk."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Third Party Systems scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull IdP (SSO / SAML / OIDC federation) · PAM (vendor / third-party access)",
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
          "event": "MOVEit: one vendor flaw breaches thousands of downstream orgs",
          "highlight": true
        },
        {
          "year": 2013,
          "event": "Target: HVAC-vendor credentials lead to a 40M-card breach"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Identity federation and authentication\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "confirm vendor apps use SSO + MFA with local logins disabled (the Salesforce-local-login gap)\nvendor access INTO the org: standing vs JIT, scoped, MFA'd, logged (third-party PAM)\ndeprovisioning: vendor + leaver access removed on offboarding/termination\nreview vendor support/admin access to the org's tenant"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The federation config for each vendor (SAML / OIDC SSO) + whether local vendor logins are disabled.",
        "The test: Verify identity + access between the org and vendors is federated, MFA-protected, and deprovisioned.",
        "Reconcile the systems of record (IdP (SSO / SAML / OIDC federation), PAM (vendor / third-party access), Vendor admin/support-access controls) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. Several vendor apps allow local password logins that bypass the org's SSO + MFA, and a vendor holds standing admin access into the org's cloud tenant with no JIT, no MFA, and no logging."
      ],
      "references": [
        {
          "title": "NIST SP 800-63",
          "url": "https://pages.nist.gov/800-63-3/"
        },
        {
          "title": "NIST SP 800-207",
          "url": "https://csrc.nist.gov/pubs/sp/800/207/final"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "13_identity_federation_and_authentication_mcp.py",
          "url": "/audit-code/third-party/13_identity_federation_and_authentication_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Third Party Systems evidence for \"Identity federation and authentication\" (the federation config for each vendor (saml / oidc sso) + whether local vendor logins are disabled), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Identity federation and authentication\" control for Third Party Systems at AcmeCorp. THE TEST: Verify identity + access between the org and vendors is federated, MFA-protected, and deprovisioned. PASS: the org's access to vendor services is via SSO + MFA (local vendor passwords disabled); the vendor's access into the org's environment is least-privilege, JIT, MFA'd, and logged; and access is deprovisioned on leaver/termination in both directions. Exceptions: vendor services with local passwords bypassing SSO/MFA, vendor standing admin into the org's tenant, no MFA on vendor access, and vendor/leaver access not deprovisioned. The evidence — The federation config for each vendor (SAML / OIDC SSO) + whether local vendor logins are disabled — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live IdP (SSO / SAML / OIDC federation) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. IdP (SSO / SAML / OIDC federation) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from IdP (SSO / SAML / OIDC federation); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Third Party Systems: \"Identity federation and authentication\" Audit Evidence\n\nThe test:\nVerify identity + access between the org and vendors is federated, MFA-protected, and deprovisioned. PASS: the org's access to vendor services is via SSO + MFA (local vendor passwords disabled); the vendor's access into the org's environment is least-privilege, JIT, MFA'd, and logged; and access is deprovisioned on leaver/termination in both directions. Exceptions: vendor services with local passwords bypassing SSO/MFA, vendor standing admin into the org's tenant, no MFA on vendor access, and vendor/leaver access not deprovisioned.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- third-party_inventory.json   (in-scope items — The federation config for each vendor (SAML / OIDC SSO) + whether local vendor logins are disabled)\n- third-party_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Identity federation and authentication\",\n  \"domain\": \"Third Party Systems\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{tps_",
        "/evidence/third-party_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Third-party risk management\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Identity federation and authentication\" control must cover\n# fragment: identity_federation_authentication_",
        "/evidence/third-party_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "third-party_inventory.json",
            "isDir": false
          },
          {
            "name": "third-party_state.json",
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
          "value": "FLAG{tps_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/third-party_inventory.json",
          "value": "identity_federation_authentication_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/third-party_state.json",
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
          "id": "tps-13-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Identity federation and authentication\" sub-process of Third Party Systems?",
          "options": [
            "Deploy and operate the identity federation and authentication control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the identity federation and authentication control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for identity federation and authentication against comparable organisations in the sector",
            "Obtain evidence that the identity federation and authentication control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "tps-13-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Identity federation and authentication\" matter to the broader Third Party Systems posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Third Party Systems",
            "It stops mattering once a firewall and endpoint agent are deployed across the Third Party Systems estate",
            "It is a control other Third Party Systems controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Third Party Systems controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "tps-13-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Identity federation and authentication\" control?",
          "options": [
            "A point-in-time screenshot of one system's identity federation and authentication settings, captured during the walkthrough",
            "The The federation config for each vendor (SAML / OIDC SSO) + whether local vendor logins are disabled, reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the identity federation and authentication control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's identity federation and authentication capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "tps-13-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Identity federation and authentication\"?",
          "options": [
            "From IdP (SSO / SAML / OIDC federation) and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how identity federation and authentication works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. IdP (SSO / SAML / OIDC federation)) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "tps-13-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Identity federation and authentication\"?",
          "options": [
            "The external audit firm, since it is the party examining the identity federation and authentication control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the identity federation and authentication data is shared, so the accountability sits with no one in particular",
            "IAM + vendor risk, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "IAM + vendor risk owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "tps-13-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Identity federation and authentication\", which part stays with the human auditor?",
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
          "id": "tps-13-q7",
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
          "id": "tps-13-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Identity federation and authentication\", which of these is a realistic reportable finding?",
          "options": [
            "Several vendor apps allow local password logins that bypass the org's SSO + MFA, and a vendor holds standing admin access into the org's cloud tenant with no JIT, no MFA, and no logging.",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. Several vendor apps allow local password logins that bypass the org's SSO + MFA, and a vendor holds standing admin access into the org's cloud tenant with no JIT, no MFA, and no logging. A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "tps-13-q9",
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
          "id": "tps-13-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Identity federation and authentication\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind identity federation and authentication, so there is no overlap",
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
    "epochId": "third-party",
    "id": "tps-14",
    "order": 14,
    "title": "Vendor AI supply chain",
    "subtitle": "Agentic technical & privacy audit of the vendor ai supply chain control",
    "category": "cybersecurity",
    "xp": 180,
    "easeScore": 6,
    "valueScore": 9,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Vendor AI supply chain\" control for Third Party Systems is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify vendor AI use doesn't create hidden data/model risk. PASS: vendors using AI on the org's data are inventoried (incl. AI features added to existing SaaS); contracts prohibit training on the org's data without consent + require AI governance (NIST AI RMF / ISO 42001); the vendor's model supply chain + foundation-model providers are disclosed; and AI-specific risks (data leakage, IP, hallucination liability) are addressed. Exceptions: vendors training on the org's data without consent, AI features enabled with no governance review, an undisclosed model supply chain, and no contractual AI/data-use terms.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Third Party Systems systems of record (TPRM (vendor AI inventory + attestation); Vendor AI / data-use terms (contracts / DPAs); AI governance (NIST AI RMF / ISO 42001)) as tools — e.g. `inventory vendors using AI on the org's data (incl. newly-added AI fea`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The inventory of vendors using AI/ML in the service (incl. AI features bolted onto existing products) + how the org's data is used (training? inference?)",
        "The vendor's AI-governance attestation (NIST AI RMF / ISO 42001) + data-use terms (no training on the org's data without consent)",
        "The provenance + risk of the foundation models the vendor relies on (model supply chain)",
        "Contractual AI terms (data use, IP, liability, transparency, opt-out)"
      ],
      "system": [
        "TPRM (vendor AI inventory + attestation)",
        "Vendor AI / data-use terms (contracts / DPAs)",
        "AI governance (NIST AI RMF / ISO 42001)"
      ],
      "dataOwner": [
        "Third-party risk + AI governance",
        "Privacy / Legal",
        "Data owners"
      ],
      "scoring": {
        "ease": "EASE 6/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 9/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Third Party Systems controls."
      }
    },
    "badge": {
      "id": "tps-14-badge",
      "name": "Third Party Systems Auditor",
      "emoji": "🔗"
    },
    "wonder": {
      "name": "Vendor AI supply chain",
      "location": "Third Party Systems",
      "era": "Present Day",
      "emoji": "🔗"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Vendor AI supply chain\" as a repeatable agentic workflow: pull the real evidence (The inventory of vendors using AI/ML in the service (incl. AI features bolted onto existing products) + how the org's data is used (training? inference?)) with read-only agents, run the test against policy, and issue a defensible opinion on the Third Party Systems control.",
      "year": 2025,
      "overview": [
        "The \"Vendor AI supply chain\" sub-process is one of the controls an auditor must verify for Third Party Systems. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the inventory of vendors using AI/ML in the service (incl. AI features bolted onto existing products) + how the org's data is used (training? inference?), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here TPRM (vendor AI inventory + attestation), Vendor AI / data-use terms (contracts / DPAs), AI governance (NIST AI RMF / ISO 42001) — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `inventory vendors using AI on the org's data (incl. newly-added AI features in e` — read-only, against the systems of record.",
        "The test itself is specific. Verify vendor AI use doesn't create hidden data/model risk. PASS: vendors using AI on the org's data are inventoried (incl. AI features added to existing SaaS); contracts prohibit training on the org's data without consent + require AI governance (NIST AI RMF / ISO 42001); the vendor's model supply chain + foundation-model providers are disclosed; and AI-specific risks (data leakage, IP, hallucination liability) are addressed. Exceptions: vendors training on the org's data without consent, AI features enabled with no governance review, an undisclosed model supply chain, and no contractual AI/data-use terms. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `14_vendor_ai_supply_chain_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from TPRM (vendor AI inventory + attestation) and Vendor AI / data-use terms (contracts / DPAs) (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 14_vendor_ai_supply_chain_mcp.py` to expose it to your agent — or `python 14_vendor_ai_supply_chain_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "The breach that came through a vendor",
        "when": "Recurring",
        "where": "Third-party / supplier integrations",
        "impact": "A trusted vendor or nth-party with access becomes the path in — the customer inherits a risk they didn't directly control.",
        "body": [
          "From Target's HVAC vendor to MOVEit's mass exploitation, third parties are a leading breach vector because their access and weaknesses become yours.",
          "Auditors verify vendor due diligence, contractual security/SLA terms, integration security, audit rights, and nth-party (subcontractor) risk."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Third Party Systems scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull TPRM (vendor AI inventory + attestation) · Vendor AI / data-use terms (contracts / DPAs)",
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
          "event": "MOVEit: one vendor flaw breaches thousands of downstream orgs",
          "highlight": true
        },
        {
          "year": 2013,
          "event": "Target: HVAC-vendor credentials lead to a 40M-card breach"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Vendor AI supply chain\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "inventory vendors using AI on the org's data (incl. newly-added AI features in existing SaaS)\ncontract / DPA: is training on the org's data prohibited without consent? is AI governance required?\nthe vendor's model supply chain + foundation-model providers (disclosed?)\nAI-specific terms: data use, IP, transparency, opt-out"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The inventory of vendors using AI/ML in the service (incl. AI features bolted onto existing products) + how the org's data is used (training? inference?).",
        "The test: Verify vendor AI use doesn't create hidden data/model risk.",
        "Reconcile the systems of record (TPRM (vendor AI inventory + attestation), Vendor AI / data-use terms (contracts / DPAs), AI governance (NIST AI RMF / ISO 42001)) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. A SaaS vendor quietly enabled an AI feature that trains on customer data with a default opt-in, the contract is silent on AI/data-use, and the underlying foundation-model provider (a further fourth party) is undisclosed."
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
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "14_vendor_ai_supply_chain_mcp.py",
          "url": "/audit-code/third-party/14_vendor_ai_supply_chain_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Third Party Systems evidence for \"Vendor AI supply chain\" (the inventory of vendors using ai/ml in the service (incl. ai features bolted onto existing products) + how the org's data is used (training? inference?)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Vendor AI supply chain\" control for Third Party Systems at AcmeCorp. THE TEST: Verify vendor AI use doesn't create hidden data/model risk. PASS: vendors using AI on the org's data are inventoried (incl. AI features added to existing SaaS); contracts prohibit training on the org's data without consent + require AI governance (NIST AI RMF / ISO 42001); the vendor's model supply chain + foundation-model providers are disclosed; and AI-specific risks (data leakage, IP, hallucination liability) are addressed. Exceptions: vendors training on the org's data without consent, AI features enabled with no governance review, an undisclosed model supply chain, and no contractual AI/data-use terms. The evidence — The inventory of vendors using AI/ML in the service (incl. AI features bolted onto existing products) + how the org's data is used (training? inference?) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live TPRM (vendor AI inventory + attestation) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. TPRM (vendor AI inventory + attestation) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from TPRM (vendor AI inventory + attestation); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Third Party Systems: \"Vendor AI supply chain\" Audit Evidence\n\nThe test:\nVerify vendor AI use doesn't create hidden data/model risk. PASS: vendors using AI on the org's data are inventoried (incl. AI features added to existing SaaS); contracts prohibit training on the org's data without consent + require AI governance (NIST AI RMF / ISO 42001); the vendor's model supply chain + foundation-model providers are disclosed; and AI-specific risks (data leakage, IP, hallucination liability) are addressed. Exceptions: vendors training on the org's data without consent, AI features enabled with no governance review, an undisclosed model supply chain, and no contractual AI/data-use terms.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- third-party_inventory.json   (in-scope items — The inventory of vendors using AI/ML in the service (incl. AI features bolted onto existing products) + how the org's data is used (training? inference?))\n- third-party_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Vendor AI supply chain\",\n  \"domain\": \"Third Party Systems\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{tps_",
        "/evidence/third-party_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Third-party risk management\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Vendor AI supply chain\" control must cover\n# fragment: vendor_ai_supply_",
        "/evidence/third-party_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "third-party_inventory.json",
            "isDir": false
          },
          {
            "name": "third-party_state.json",
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
          "value": "FLAG{tps_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/third-party_inventory.json",
          "value": "vendor_ai_supply_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/third-party_state.json",
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
          "id": "tps-14-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Vendor AI supply chain\" sub-process of Third Party Systems?",
          "options": [
            "Deploy and operate the vendor ai supply chain control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the vendor ai supply chain control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for vendor ai supply chain against comparable organisations in the sector",
            "Obtain evidence that the vendor ai supply chain control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "tps-14-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Vendor AI supply chain\" matter to the broader Third Party Systems posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Third Party Systems",
            "It stops mattering once a firewall and endpoint agent are deployed across the Third Party Systems estate",
            "It is a control other Third Party Systems controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Third Party Systems controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "tps-14-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Vendor AI supply chain\" control?",
          "options": [
            "A point-in-time screenshot of one system's vendor ai supply chain settings, captured during the walkthrough",
            "The The inventory of vendors using AI/ML in the service (incl. AI features bolted onto existing products) + how the org's data is used (training? inference?), reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the vendor ai supply chain control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's vendor ai supply chain capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "tps-14-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Vendor AI supply chain\"?",
          "options": [
            "From TPRM (vendor AI inventory + attestation) and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how vendor ai supply chain works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. TPRM (vendor AI inventory + attestation)) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "tps-14-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Vendor AI supply chain\"?",
          "options": [
            "The external audit firm, since it is the party examining the vendor ai supply chain control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the vendor ai supply chain data is shared, so the accountability sits with no one in particular",
            "Third-party risk + AI governance, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Third-party risk + AI governance owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "tps-14-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Vendor AI supply chain\", which part stays with the human auditor?",
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
          "id": "tps-14-q7",
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
          "id": "tps-14-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Vendor AI supply chain\", which of these is a realistic reportable finding?",
          "options": [
            "A SaaS vendor quietly enabled an AI feature that trains on customer data with a default opt-in, the contract is silent on AI/data-use, and the underlying foundation-model provider (a further fourth party) is undisclosed.",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. A SaaS vendor quietly enabled an AI feature that trains on customer data with a default opt-in, the contract is silent on AI/data-use, and the underlying foundation-model provider (a further fourth party) is undisclosed. A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "tps-14-q9",
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
          "id": "tps-14-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Vendor AI supply chain\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind vendor ai supply chain, so there is no overlap",
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
    "epochId": "third-party",
    "id": "tps-15",
    "order": 15,
    "title": "Post-quantum protection support",
    "subtitle": "Agentic technical & privacy audit of the post-quantum protection support control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 7,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Post-quantum protection support\" control for Third Party Systems is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify critical vendors are on a path to post-quantum-safe cryptography for the org's data. PASS: vendors holding/transmitting long-lived sensitive data are inventoried for their crypto; each critical vendor has a published PQC roadmap (NIST FIPS 203/204) + crypto-agility; HNDL exposure through vendors is assessed; and contracts require PQC support on a timeline. Exceptions: long-lived data protected only by classical crypto at/through vendors, vendors with no PQC roadmap, no HNDL assessment of the vendor data flows, and no contractual PQC-migration requirement.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Third Party Systems systems of record (TPRM (vendor crypto + PQC roadmap); The data-flow map (what long-lived data goes to which vendor); Vendor PQC roadmaps) as tools — e.g. `inventory vendors holding/transmitting long-lived sensitive data + the`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The inventory of vendors protecting the org's long-lived/sensitive data with cryptography (TLS to the vendor, data-at-rest at the vendor, signed exchanges)",
        "Each critical vendor's PQC roadmap + crypto-agility commitment",
        "HNDL exposure via vendors (org data traversing to / stored at vendors on classical crypto)",
        "Contractual terms requiring PQC migration / crypto-agility"
      ],
      "system": [
        "TPRM (vendor crypto + PQC roadmap)",
        "The data-flow map (what long-lived data goes to which vendor)",
        "Vendor PQC roadmaps",
        "Contracts (crypto terms)"
      ],
      "dataOwner": [
        "Vendor risk + Cryptography team",
        "Enterprise architecture",
        "Procurement"
      ],
      "scoring": {
        "ease": "EASE 7/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Third Party Systems controls."
      }
    },
    "badge": {
      "id": "tps-15-badge",
      "name": "Third Party Systems Auditor",
      "emoji": "🔗"
    },
    "wonder": {
      "name": "Post-quantum protection support",
      "location": "Third Party Systems",
      "era": "Present Day",
      "emoji": "🔗"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Post-quantum protection support\" as a repeatable agentic workflow: pull the real evidence (The inventory of vendors protecting the org's long-lived/sensitive data with cryptography (TLS to the vendor, data-at-rest at the vendor, signed exchanges)) with read-only agents, run the test against policy, and issue a defensible opinion on the Third Party Systems control.",
      "year": 2025,
      "overview": [
        "The \"Post-quantum protection support\" sub-process is one of the controls an auditor must verify for Third Party Systems. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the inventory of vendors protecting the org's long-lived/sensitive data with cryptography (TLS to the vendor, data-at-rest at the vendor, signed exchanges), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here TPRM (vendor crypto + PQC roadmap), The data-flow map (what long-lived data goes to which vendor), Vendor PQC roadmaps — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `inventory vendors holding/transmitting long-lived sensitive data + the crypto th` — read-only, against the systems of record.",
        "The test itself is specific. Verify critical vendors are on a path to post-quantum-safe cryptography for the org's data. PASS: vendors holding/transmitting long-lived sensitive data are inventoried for their crypto; each critical vendor has a published PQC roadmap (NIST FIPS 203/204) + crypto-agility; HNDL exposure through vendors is assessed; and contracts require PQC support on a timeline. Exceptions: long-lived data protected only by classical crypto at/through vendors, vendors with no PQC roadmap, no HNDL assessment of the vendor data flows, and no contractual PQC-migration requirement. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `15_post_quantum_protection_support_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from TPRM (vendor crypto + PQC roadmap) and The data-flow map (what long-lived data goes to which vendor) (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 15_post_quantum_protection_support_mcp.py` to expose it to your agent — or `python 15_post_quantum_protection_support_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "The breach that came through a vendor",
        "when": "Recurring",
        "where": "Third-party / supplier integrations",
        "impact": "A trusted vendor or nth-party with access becomes the path in — the customer inherits a risk they didn't directly control.",
        "body": [
          "From Target's HVAC vendor to MOVEit's mass exploitation, third parties are a leading breach vector because their access and weaknesses become yours.",
          "Auditors verify vendor due diligence, contractual security/SLA terms, integration security, audit rights, and nth-party (subcontractor) risk."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Third Party Systems scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull TPRM (vendor crypto + PQC roadmap) · The data-flow map (what long-lived data goes to which vendor)",
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
          "event": "MOVEit: one vendor flaw breaches thousands of downstream orgs",
          "highlight": true
        },
        {
          "year": 2013,
          "event": "Target: HVAC-vendor credentials lead to a 40M-card breach"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Post-quantum protection support\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "inventory vendors holding/transmitting long-lived sensitive data + the crypto they use\neach critical vendor's published PQC roadmap + crypto-agility commitment\nHNDL exposure: long-secret org data traversing to / stored at vendors on classical algorithms\ncontractual terms requiring PQC migration on a timeline"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The inventory of vendors protecting the org's long-lived/sensitive data with cryptography (TLS to the vendor, data-at-rest at the vendor, signed exchanges).",
        "The test: Verify critical vendors are on a path to post-quantum-safe cryptography for the org's data.",
        "Reconcile the systems of record (TPRM (vendor crypto + PQC roadmap), The data-flow map (what long-lived data goes to which vendor), Vendor PQC roadmaps) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. Decades-retention regulated data is sent to and stored at vendors protected only by classical TLS/RSA, none of the critical vendors has a published PQC roadmap, and contracts are silent on crypto-agility — a harvest-now-decrypt-later exposure the org doesn't control."
      ],
      "references": [
        {
          "title": "NIST FIPS 203 / 204",
          "url": "https://csrc.nist.gov/projects/post-quantum-cryptography"
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
          "name": "15_post_quantum_protection_support_mcp.py",
          "url": "/audit-code/third-party/15_post_quantum_protection_support_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Third Party Systems evidence for \"Post-quantum protection support\" (the inventory of vendors protecting the org's long-lived/sensitive data with cryptography (tls to the vendor, data-at-rest at the vendor, signed exchanges)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Post-quantum protection support\" control for Third Party Systems at AcmeCorp. THE TEST: Verify critical vendors are on a path to post-quantum-safe cryptography for the org's data. PASS: vendors holding/transmitting long-lived sensitive data are inventoried for their crypto; each critical vendor has a published PQC roadmap (NIST FIPS 203/204) + crypto-agility; HNDL exposure through vendors is assessed; and contracts require PQC support on a timeline. Exceptions: long-lived data protected only by classical crypto at/through vendors, vendors with no PQC roadmap, no HNDL assessment of the vendor data flows, and no contractual PQC-migration requirement. The evidence — The inventory of vendors protecting the org's long-lived/sensitive data with cryptography (TLS to the vendor, data-at-rest at the vendor, signed exchanges) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live TPRM (vendor crypto + PQC roadmap) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. TPRM (vendor crypto + PQC roadmap) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from TPRM (vendor crypto + PQC roadmap); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Third Party Systems: \"Post-quantum protection support\" Audit Evidence\n\nThe test:\nVerify critical vendors are on a path to post-quantum-safe cryptography for the org's data. PASS: vendors holding/transmitting long-lived sensitive data are inventoried for their crypto; each critical vendor has a published PQC roadmap (NIST FIPS 203/204) + crypto-agility; HNDL exposure through vendors is assessed; and contracts require PQC support on a timeline. Exceptions: long-lived data protected only by classical crypto at/through vendors, vendors with no PQC roadmap, no HNDL assessment of the vendor data flows, and no contractual PQC-migration requirement.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- third-party_inventory.json   (in-scope items — The inventory of vendors protecting the org's long-lived/sensitive data with cryptography (TLS to the vendor, data-at-rest at the vendor, signed exchanges))\n- third-party_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Post-quantum protection support\",\n  \"domain\": \"Third Party Systems\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{tps_",
        "/evidence/third-party_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Third-party risk management\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Post-quantum protection support\" control must cover\n# fragment: postquantum_protection_support_",
        "/evidence/third-party_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "third-party_inventory.json",
            "isDir": false
          },
          {
            "name": "third-party_state.json",
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
          "value": "FLAG{tps_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/third-party_inventory.json",
          "value": "postquantum_protection_support_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/third-party_state.json",
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
          "id": "tps-15-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Post-quantum protection support\" sub-process of Third Party Systems?",
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
          "id": "tps-15-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Post-quantum protection support\" matter to the broader Third Party Systems posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Third Party Systems",
            "It stops mattering once a firewall and endpoint agent are deployed across the Third Party Systems estate",
            "It is a control other Third Party Systems controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Third Party Systems controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "tps-15-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Post-quantum protection support\" control?",
          "options": [
            "A point-in-time screenshot of one system's post-quantum protection support settings, captured during the walkthrough",
            "The The inventory of vendors protecting the org's long-lived/sensitive data with cryptography (TLS to the vendor, data-at-rest at the vendor, signed exchanges), reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the post-quantum protection support control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's post-quantum protection support capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "tps-15-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Post-quantum protection support\"?",
          "options": [
            "From TPRM (vendor crypto + PQC roadmap) and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how post-quantum protection support works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. TPRM (vendor crypto + PQC roadmap)) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "tps-15-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Post-quantum protection support\"?",
          "options": [
            "The external audit firm, since it is the party examining the post-quantum protection support control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the post-quantum protection support data is shared, so the accountability sits with no one in particular",
            "Vendor risk + Cryptography team, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Vendor risk + Cryptography team owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "tps-15-q6",
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
          "id": "tps-15-q7",
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
          "id": "tps-15-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Post-quantum protection support\", which of these is a realistic reportable finding?",
          "options": [
            "Decades-retention regulated data is sent to and stored at vendors protected only by classical TLS/RSA, none of the critical vendors has a published PQC roadmap, and contracts are silent on crypto-agility — a harvest-now-decrypt-later exposure the org doesn't control.",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. Decades-retention regulated data is sent to and stored at vendors protected only by classical TLS/RSA, none of the critical vendors has a published PQC roadmap, and contracts are silent on crypto-agility — a harvest-now-decrypt-later exposure the org doesn't control. A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "tps-15-q9",
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
          "id": "tps-15-q10",
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
  }
];

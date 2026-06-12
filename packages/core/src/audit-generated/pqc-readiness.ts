import type { EpochConfig, StageConfig } from "../types";

export const pqcReadinessEpoch: EpochConfig = {
  "id": "pqc-readiness",
  "name": "Post-Quantum Readiness",
  "subtitle": "Agentic technical & privacy audit — Post-Quantum Readiness",
  "description": "Audit Post-Quantum Readiness end to end with a read-only agent fleet: each sub-process is a module that teaches the control as a repeatable agentic workflow with downloadable MCP tooling, a CTF, and a 10-question quiz.",
  "emoji": "🧮",
  "color": "Indigo",
  "unlocked": true
};

export const pqcReadinessStages: StageConfig[] = [
  {
    "epochId": "pqc-readiness",
    "id": "pqc-01",
    "order": 1,
    "title": "Cryptographic inventory and visibility",
    "subtitle": "Agentic technical & privacy audit of the cryptographic inventory and visibility control",
    "category": "cybersecurity",
    "xp": 180,
    "easeScore": 6,
    "valueScore": 9,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Cryptographic inventory and visibility\" control for Post-Quantum Readiness is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify the org has visibility into where + what cryptography it uses. PASS: a cryptographic inventory covers the estate (TLS, PKI, data-at-rest, code-signing, VPN, app crypto, libraries) via automated discovery; each asset has algorithm/key-size/location/owner; and crypto is classified by quantum vulnerability. Exceptions: no cryptographic inventory (can't migrate what you can't see), partial/manual discovery missing major surfaces, no quantum-vulnerability classification, and crypto assets with no owner.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Post-Quantum Readiness systems of record (Crypto-discovery tooling (Venafi / Keyfactor / SandboxAQ / native scans); Code / SCA crypto analysis; Network / traffic + config scanning) as tools — e.g. `crypto-discovery: scan TLS endpoints (testssl/nmap), CT logs, code (Co`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The cryptographic inventory across the estate (algorithms, key sizes, protocols, certificates, libraries) + where each is used",
        "The discovery method + coverage (scanning, code analysis, traffic, config) — how complete",
        "Classification of crypto by quantum-vulnerability (RSA/ECC/DH = vulnerable; AES-256/SHA-384 = quantum-resistant-enough)",
        "Owner + location for each cryptographic asset"
      ],
      "system": [
        "Crypto-discovery tooling (Venafi / Keyfactor / SandboxAQ / native scans)",
        "Code / SCA crypto analysis",
        "Network / traffic + config scanning",
        "The CBOM repository"
      ],
      "dataOwner": [
        "Cryptography / PKI team",
        "Enterprise architecture",
        "Security"
      ],
      "scoring": {
        "ease": "EASE 6/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 9/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Post-Quantum Readiness controls."
      }
    },
    "badge": {
      "id": "pqc-01-badge",
      "name": "Post-Quantum Readiness Auditor",
      "emoji": "🧮"
    },
    "wonder": {
      "name": "Cryptographic inventory and visibility",
      "location": "Post-Quantum Readiness",
      "era": "Present Day",
      "emoji": "🧮"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Cryptographic inventory and visibility\" as a repeatable agentic workflow: pull the real evidence (The cryptographic inventory across the estate (algorithms, key sizes, protocols, certificates, libraries) + where each is used) with read-only agents, run the test against policy, and issue a defensible opinion on the Post-Quantum Readiness control.",
      "year": 2025,
      "overview": [
        "The \"Cryptographic inventory and visibility\" sub-process is one of the controls an auditor must verify for Post-Quantum Readiness. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the cryptographic inventory across the estate (algorithms, key sizes, protocols, certificates, libraries) + where each is used, for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Crypto-discovery tooling (Venafi / Keyfactor / SandboxAQ / native scans), Code / SCA crypto analysis, Network / traffic + config scanning — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `crypto-discovery: scan TLS endpoints (testssl/nmap), CT logs, code (CodeQL crypt` — read-only, against the systems of record.",
        "The test itself is specific. Verify the org has visibility into where + what cryptography it uses. PASS: a cryptographic inventory covers the estate (TLS, PKI, data-at-rest, code-signing, VPN, app crypto, libraries) via automated discovery; each asset has algorithm/key-size/location/owner; and crypto is classified by quantum vulnerability. Exceptions: no cryptographic inventory (can't migrate what you can't see), partial/manual discovery missing major surfaces, no quantum-vulnerability classification, and crypto assets with no owner. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `01_cryptographic_inventory_and_visibility_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Crypto-discovery tooling (Venafi / Keyfactor / SandboxAQ / native scans) and Code / SCA crypto analysis (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 01_cryptographic_inventory_and_visibility_mcp.py` to expose it to your agent — or `python 01_cryptographic_inventory_and_visibility_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Harvest now, decrypt later",
        "when": "Ongoing",
        "where": "Long-lived encrypted data + comms",
        "impact": "Adversaries record encrypted traffic today to decrypt once a cryptographically relevant quantum computer exists — long-lived secrets are already at risk.",
        "body": [
          "HNDL makes PQC migration urgent for data that must stay confidential for years: it can be captured now and broken later.",
          "Auditors verify cryptographic inventory/CBOM, long-lived data identification, crypto agility, PQC migration of comms, and CNSA 2.0 / NIST alignment."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Post-Quantum Readiness scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull Crypto-discovery tooling (Venafi / Keyfactor / SandboxAQ / native scans) · Code / SCA crypto analysis",
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
          "event": "NIST finalizes FIPS 203/204/205 PQC standards",
          "highlight": true
        },
        {
          "year": 2022,
          "event": "CNSA 2.0 sets quantum-resistant migration timelines for NSS"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Cryptographic inventory and visibility\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "crypto-discovery: scan TLS endpoints (testssl/nmap), CT logs, code (CodeQL crypto), configs, libraries\ncoverage: % of the estate inventoried via automated discovery vs unknown\nclassify each asset by quantum vulnerability (RSA/ECC/DH vs AES-256/SHA-384)\nowner + location per cryptographic asset"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The cryptographic inventory across the estate (algorithms, key sizes, protocols, certificates, libraries) + where each is used.",
        "The test: Verify the org has visibility into where + what cryptography it uses.",
        "Reconcile the systems of record (Crypto-discovery tooling (Venafi / Keyfactor / SandboxAQ / native scans), Code / SCA crypto analysis, Network / traffic + config scanning) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. There is no cryptographic inventory — the org can't say where RSA/ECC is used, how many certs/keys exist, or which libraries do crypto, so a PQC migration has no starting map."
      ],
      "references": [
        {
          "title": "NIST SP 1800-38 — PQC Migration",
          "url": "https://www.nccoe.nist.gov/crypto-agility-considerations-migrating-post-quantum-cryptographic-algorithms"
        },
        {
          "title": "CISA Post-Quantum Cryptography",
          "url": "https://www.cisa.gov/quantum"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "01_cryptographic_inventory_and_visibility_mcp.py",
          "url": "/audit-code/pqc-readiness/01_cryptographic_inventory_and_visibility_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Post-Quantum Readiness evidence for \"Cryptographic inventory and visibility\" (the cryptographic inventory across the estate (algorithms, key sizes, protocols, certificates, libraries) + where each is used), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Cryptographic inventory and visibility\" control for Post-Quantum Readiness at AcmeCorp. THE TEST: Verify the org has visibility into where + what cryptography it uses. PASS: a cryptographic inventory covers the estate (TLS, PKI, data-at-rest, code-signing, VPN, app crypto, libraries) via automated discovery; each asset has algorithm/key-size/location/owner; and crypto is classified by quantum vulnerability. Exceptions: no cryptographic inventory (can't migrate what you can't see), partial/manual discovery missing major surfaces, no quantum-vulnerability classification, and crypto assets with no owner. The evidence — The cryptographic inventory across the estate (algorithms, key sizes, protocols, certificates, libraries) + where each is used — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Crypto-discovery tooling (Venafi / Keyfactor / SandboxAQ / native scans) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Crypto-discovery tooling (Venafi / Keyfactor / SandboxAQ / native scans) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Crypto-discovery tooling (Venafi / Keyfactor / SandboxAQ / native scans); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Post-Quantum Readiness: \"Cryptographic inventory and visibility\" Audit Evidence\n\nThe test:\nVerify the org has visibility into where + what cryptography it uses. PASS: a cryptographic inventory covers the estate (TLS, PKI, data-at-rest, code-signing, VPN, app crypto, libraries) via automated discovery; each asset has algorithm/key-size/location/owner; and crypto is classified by quantum vulnerability. Exceptions: no cryptographic inventory (can't migrate what you can't see), partial/manual discovery missing major surfaces, no quantum-vulnerability classification, and crypto assets with no owner.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- pqc-readiness_inventory.json   (in-scope items — The cryptographic inventory across the estate (algorithms, key sizes, protocols, certificates, libraries) + where each is used)\n- pqc-readiness_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Cryptographic inventory and visibility\",\n  \"domain\": \"Post-Quantum Readiness\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{pqc_",
        "/evidence/pqc-readiness_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Crypto / PKI team\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Cryptographic inventory and visibility\" control must cover\n# fragment: cryptographic_inventory_visibility_",
        "/evidence/pqc-readiness_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "pqc-readiness_inventory.json",
            "isDir": false
          },
          {
            "name": "pqc-readiness_state.json",
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
          "value": "FLAG{pqc_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/pqc-readiness_inventory.json",
          "value": "cryptographic_inventory_visibility_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/pqc-readiness_state.json",
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
          "id": "pqc-01-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Cryptographic inventory and visibility\" sub-process of Post-Quantum Readiness?",
          "options": [
            "Deploy and operate the cryptographic inventory and visibility control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the cryptographic inventory and visibility control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for cryptographic inventory and visibility against comparable organisations in the sector",
            "Obtain evidence that the cryptographic inventory and visibility control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "pqc-01-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Cryptographic inventory and visibility\" matter to the broader Post-Quantum Readiness posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Post-Quantum Readiness",
            "It stops mattering once a firewall and endpoint agent are deployed across the Post-Quantum Readiness estate",
            "It is a control other Post-Quantum Readiness controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Post-Quantum Readiness controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "pqc-01-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Cryptographic inventory and visibility\" control?",
          "options": [
            "A point-in-time screenshot of one system's cryptographic inventory and visibility settings, captured during the walkthrough",
            "The The cryptographic inventory across the estate (algorithms, key sizes, protocols, certificates, libraries) + where each is used, reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the cryptographic inventory and visibility control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's cryptographic inventory and visibility capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "pqc-01-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Cryptographic inventory and visibility\"?",
          "options": [
            "From Crypto-discovery tooling (Venafi / Keyfactor / SandboxAQ / native scans) and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how cryptographic inventory and visibility works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. Crypto-discovery tooling (Venafi / Keyfactor / SandboxAQ / native scans)) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "pqc-01-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Cryptographic inventory and visibility\"?",
          "options": [
            "The external audit firm, since it is the party examining the cryptographic inventory and visibility control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the cryptographic inventory and visibility data is shared, so the accountability sits with no one in particular",
            "Cryptography / PKI team, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Cryptography / PKI team owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "pqc-01-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Cryptographic inventory and visibility\", which part stays with the human auditor?",
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
          "id": "pqc-01-q7",
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
          "id": "pqc-01-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Cryptographic inventory and visibility\", which of these is a realistic reportable finding?",
          "options": [
            "There is no cryptographic inventory — the org can't say where RSA/ECC is used, how many certs/keys exist, or which libraries do crypto, so a PQC migration has no starting map.",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. There is no cryptographic inventory — the org can't say where RSA/ECC is used, how many certs/keys exist, or which libraries do crypto, so a PQC migration has no starting map. A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "pqc-01-q9",
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
          "id": "pqc-01-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Cryptographic inventory and visibility\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind cryptographic inventory and visibility, so there is no overlap",
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
    "epochId": "pqc-readiness",
    "id": "pqc-02",
    "order": 2,
    "title": "Crypto Bill of Materials (CBOM)",
    "subtitle": "Agentic technical & privacy audit of the crypto bill of materials (cbom) control",
    "category": "cybersecurity",
    "xp": 180,
    "easeScore": 6,
    "valueScore": 9,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Crypto Bill of Materials (CBOM)\" control for Post-Quantum Readiness is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify a CBOM exists and is usable for PQC migration. PASS: a CBOM (CycloneDX crypto-assets) is generated for applications/systems, kept current (CI-integrated or scan-refreshed), covers the portfolio, and is queryable to drive migration (find every component using a vulnerable algorithm). Exceptions: no CBOM, stale/manual CBOM, partial portfolio coverage, and a CBOM that can't be queried for impact (so migration is guesswork).",
      "approach": "An audit agent calls a read-only MCP server that wraps the Post-Quantum Readiness systems of record (CBOM tooling (CycloneDX + cdxgen / crypto plugins); CI integration; CBOM repository / Dependency-Track) as tools — e.g. `confirm a CBOM (CycloneDX crypto-assets) is generated for apps/systems`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The CBOM (CycloneDX cryptography assets) for applications + systems — algorithms, key lengths, protocols, certificate dependencies, and their relationships",
        "CBOM generation integration (produced in CI / from scans, kept current)",
        "CBOM coverage across the application portfolio",
        "Use of the CBOM for migration planning (querying 'what uses RSA-2048')"
      ],
      "system": [
        "CBOM tooling (CycloneDX + cdxgen / crypto plugins)",
        "CI integration",
        "CBOM repository / Dependency-Track"
      ],
      "dataOwner": [
        "Cryptography team + AppSec",
        "Engineering",
        "Enterprise architecture"
      ],
      "scoring": {
        "ease": "EASE 6/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 9/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Post-Quantum Readiness controls."
      }
    },
    "badge": {
      "id": "pqc-02-badge",
      "name": "Post-Quantum Readiness Auditor",
      "emoji": "🧮"
    },
    "wonder": {
      "name": "Crypto Bill of Materials (CBOM)",
      "location": "Post-Quantum Readiness",
      "era": "Present Day",
      "emoji": "🧮"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Crypto Bill of Materials (CBOM)\" as a repeatable agentic workflow: pull the real evidence (The CBOM (CycloneDX cryptography assets) for applications + systems — algorithms, key lengths, protocols, certificate dependencies, and their relationships) with read-only agents, run the test against policy, and issue a defensible opinion on the Post-Quantum Readiness control.",
      "year": 2025,
      "overview": [
        "The \"Crypto Bill of Materials (CBOM)\" sub-process is one of the controls an auditor must verify for Post-Quantum Readiness. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the CBOM (CycloneDX cryptography assets) for applications + systems — algorithms, key lengths, protocols, certificate dependencies, and their relationships, for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here CBOM tooling (CycloneDX + cdxgen / crypto plugins), CI integration, CBOM repository / Dependency-Track — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `confirm a CBOM (CycloneDX crypto-assets) is generated for apps/systems` — read-only, against the systems of record.",
        "The test itself is specific. Verify a CBOM exists and is usable for PQC migration. PASS: a CBOM (CycloneDX crypto-assets) is generated for applications/systems, kept current (CI-integrated or scan-refreshed), covers the portfolio, and is queryable to drive migration (find every component using a vulnerable algorithm). Exceptions: no CBOM, stale/manual CBOM, partial portfolio coverage, and a CBOM that can't be queried for impact (so migration is guesswork). The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `02_crypto_bill_of_materials_cbom_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from CBOM tooling (CycloneDX + cdxgen / crypto plugins) and CI integration (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 02_crypto_bill_of_materials_cbom_mcp.py` to expose it to your agent — or `python 02_crypto_bill_of_materials_cbom_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Harvest now, decrypt later",
        "when": "Ongoing",
        "where": "Long-lived encrypted data + comms",
        "impact": "Adversaries record encrypted traffic today to decrypt once a cryptographically relevant quantum computer exists — long-lived secrets are already at risk.",
        "body": [
          "HNDL makes PQC migration urgent for data that must stay confidential for years: it can be captured now and broken later.",
          "Auditors verify cryptographic inventory/CBOM, long-lived data identification, crypto agility, PQC migration of comms, and CNSA 2.0 / NIST alignment."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Post-Quantum Readiness scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull CBOM tooling (CycloneDX + cdxgen / crypto plugins) · CI integration",
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
          "event": "NIST finalizes FIPS 203/204/205 PQC standards",
          "highlight": true
        },
        {
          "year": 2022,
          "event": "CNSA 2.0 sets quantum-resistant migration timelines for NSS"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Crypto Bill of Materials (CBOM)\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "confirm a CBOM (CycloneDX crypto-assets) is generated for apps/systems\nCBOM currency: CI-integrated / scan-refreshed vs one-off\nportfolio coverage (apps with a CBOM vs total)\nquery the CBOM: 'which components use RSA-2048 / P-256?' (migration impact)"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The CBOM (CycloneDX cryptography assets) for applications + systems — algorithms, key lengths, protocols, certificate dependencies, and their relationships.",
        "The test: Verify a CBOM exists and is usable for PQC migration.",
        "Reconcile the systems of record (CBOM tooling (CycloneDX + cdxgen / crypto plugins), CI integration, CBOM repository / Dependency-Track) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. No CBOM exists; crypto dependencies are invisible at the component level, so the org can't scope which of its 400 applications would be affected by a PQC migration."
      ],
      "references": [
        {
          "title": "CycloneDX — CBOM",
          "url": "https://cyclonedx.org/capabilities/cbom/"
        },
        {
          "title": "NIST SP 1800-38",
          "url": "https://www.nccoe.nist.gov/crypto-agility-considerations-migrating-post-quantum-cryptographic-algorithms"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "02_crypto_bill_of_materials_cbom_mcp.py",
          "url": "/audit-code/pqc-readiness/02_crypto_bill_of_materials_cbom_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Post-Quantum Readiness evidence for \"Crypto Bill of Materials (CBOM)\" (the cbom (cyclonedx cryptography assets) for applications + systems — algorithms, key lengths, protocols, certificate dependencies, and their relationships), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Crypto Bill of Materials (CBOM)\" control for Post-Quantum Readiness at AcmeCorp. THE TEST: Verify a CBOM exists and is usable for PQC migration. PASS: a CBOM (CycloneDX crypto-assets) is generated for applications/systems, kept current (CI-integrated or scan-refreshed), covers the portfolio, and is queryable to drive migration (find every component using a vulnerable algorithm). Exceptions: no CBOM, stale/manual CBOM, partial portfolio coverage, and a CBOM that can't be queried for impact (so migration is guesswork). The evidence — The CBOM (CycloneDX cryptography assets) for applications + systems — algorithms, key lengths, protocols, certificate dependencies, and their relationships — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live CBOM tooling (CycloneDX + cdxgen / crypto plugins) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. CBOM tooling (CycloneDX + cdxgen / crypto plugins) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from CBOM tooling (CycloneDX + cdxgen / crypto plugins); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Post-Quantum Readiness: \"Crypto Bill of Materials (CBOM)\" Audit Evidence\n\nThe test:\nVerify a CBOM exists and is usable for PQC migration. PASS: a CBOM (CycloneDX crypto-assets) is generated for applications/systems, kept current (CI-integrated or scan-refreshed), covers the portfolio, and is queryable to drive migration (find every component using a vulnerable algorithm). Exceptions: no CBOM, stale/manual CBOM, partial portfolio coverage, and a CBOM that can't be queried for impact (so migration is guesswork).\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- pqc-readiness_inventory.json   (in-scope items — The CBOM (CycloneDX cryptography assets) for applications + systems — algorithms, key lengths, protocols, certificate dependencies, and their relationships)\n- pqc-readiness_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Crypto Bill of Materials (CBOM)\",\n  \"domain\": \"Post-Quantum Readiness\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{pqc_",
        "/evidence/pqc-readiness_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Crypto / PKI team\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Crypto Bill of Materials (CBOM)\" control must cover\n# fragment: crypto_bill_materials_",
        "/evidence/pqc-readiness_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "pqc-readiness_inventory.json",
            "isDir": false
          },
          {
            "name": "pqc-readiness_state.json",
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
          "value": "FLAG{pqc_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/pqc-readiness_inventory.json",
          "value": "crypto_bill_materials_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/pqc-readiness_state.json",
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
          "id": "pqc-02-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Crypto Bill of Materials (CBOM)\" sub-process of Post-Quantum Readiness?",
          "options": [
            "Deploy and operate the crypto bill of materials (cbom) control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the crypto bill of materials (cbom) control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for crypto bill of materials (cbom) against comparable organisations in the sector",
            "Obtain evidence that the crypto bill of materials (cbom) control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "pqc-02-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Crypto Bill of Materials (CBOM)\" matter to the broader Post-Quantum Readiness posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Post-Quantum Readiness",
            "It stops mattering once a firewall and endpoint agent are deployed across the Post-Quantum Readiness estate",
            "It is a control other Post-Quantum Readiness controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Post-Quantum Readiness controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "pqc-02-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Crypto Bill of Materials (CBOM)\" control?",
          "options": [
            "A point-in-time screenshot of one system's crypto bill of materials (cbom) settings, captured during the walkthrough",
            "The The CBOM (CycloneDX cryptography assets) for applications + systems — algorithms, key lengths, protocols, certificate dependencies, and their relationships, reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the crypto bill of materials (cbom) control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's crypto bill of materials (cbom) capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "pqc-02-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Crypto Bill of Materials (CBOM)\"?",
          "options": [
            "From CBOM tooling (CycloneDX + cdxgen / crypto plugins) and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how crypto bill of materials (cbom) works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. CBOM tooling (CycloneDX + cdxgen / crypto plugins)) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "pqc-02-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Crypto Bill of Materials (CBOM)\"?",
          "options": [
            "The external audit firm, since it is the party examining the crypto bill of materials (cbom) control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the crypto bill of materials (cbom) data is shared, so the accountability sits with no one in particular",
            "Cryptography team + AppSec, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Cryptography team + AppSec owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "pqc-02-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Crypto Bill of Materials (CBOM)\", which part stays with the human auditor?",
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
          "id": "pqc-02-q7",
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
          "id": "pqc-02-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Crypto Bill of Materials (CBOM)\", which of these is a realistic reportable finding?",
          "options": [
            "No CBOM exists; crypto dependencies are invisible at the component level, so the org can't scope which of its 400 applications would be affected by a PQC migration.",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. No CBOM exists; crypto dependencies are invisible at the component level, so the org can't scope which of its 400 applications would be affected by a PQC migration. A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "pqc-02-q9",
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
          "id": "pqc-02-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Crypto Bill of Materials (CBOM)\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind crypto bill of materials (cbom), so there is no overlap",
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
    "epochId": "pqc-readiness",
    "id": "pqc-03",
    "order": 3,
    "title": "Long-lived data identification",
    "subtitle": "Agentic technical & privacy audit of the long-lived data identification control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 7,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Long-lived data identification\" control for Post-Quantum Readiness is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify the org has identified data needing protection beyond the quantum horizon. PASS: long-secret data is inventoried with its required confidentiality lifetime; it's mapped to the crypto protecting it; data whose secrecy must outlast the expected arrival of a cryptographically-relevant quantum computer (~2030s) is flagged HNDL-priority; and owners are assigned. Exceptions: no identification of long-lived sensitive data, no mapping to protecting crypto, no HNDL prioritisation, and unowned long-secret data.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Post-Quantum Readiness systems of record (Data inventory + retention schedule; Data classification + the CBOM (crypto protecting it); HNDL risk model) as tools — e.g. `inventory long-secret data + its required confidentiality lifetime (ye`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The inventory of long-lived/long-secret data (must stay confidential for years/decades) + its required secrecy lifetime",
        "The mapping of that data to the cryptography protecting it (at rest + in transit)",
        "HNDL prioritisation (data whose secrecy lifetime extends past the expected CRQC arrival)",
        "The owners + locations of long-lived sensitive data"
      ],
      "system": [
        "Data inventory + retention schedule",
        "Data classification + the CBOM (crypto protecting it)",
        "HNDL risk model"
      ],
      "dataOwner": [
        "Data owners + Privacy",
        "Cryptography team",
        "Risk"
      ],
      "scoring": {
        "ease": "EASE 7/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Post-Quantum Readiness controls."
      }
    },
    "badge": {
      "id": "pqc-03-badge",
      "name": "Post-Quantum Readiness Auditor",
      "emoji": "🧮"
    },
    "wonder": {
      "name": "Long-lived data identification",
      "location": "Post-Quantum Readiness",
      "era": "Present Day",
      "emoji": "🧮"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Long-lived data identification\" as a repeatable agentic workflow: pull the real evidence (The inventory of long-lived/long-secret data (must stay confidential for years/decades) + its required secrecy lifetime) with read-only agents, run the test against policy, and issue a defensible opinion on the Post-Quantum Readiness control.",
      "year": 2025,
      "overview": [
        "The \"Long-lived data identification\" sub-process is one of the controls an auditor must verify for Post-Quantum Readiness. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the inventory of long-lived/long-secret data (must stay confidential for years/decades) + its required secrecy lifetime, for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Data inventory + retention schedule, Data classification + the CBOM (crypto protecting it), HNDL risk model — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `inventory long-secret data + its required confidentiality lifetime (years/decade` — read-only, against the systems of record.",
        "The test itself is specific. Verify the org has identified data needing protection beyond the quantum horizon. PASS: long-secret data is inventoried with its required confidentiality lifetime; it's mapped to the crypto protecting it; data whose secrecy must outlast the expected arrival of a cryptographically-relevant quantum computer (~2030s) is flagged HNDL-priority; and owners are assigned. Exceptions: no identification of long-lived sensitive data, no mapping to protecting crypto, no HNDL prioritisation, and unowned long-secret data. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `03_long_lived_data_identification_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Data inventory + retention schedule and Data classification + the CBOM (crypto protecting it) (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 03_long_lived_data_identification_mcp.py` to expose it to your agent — or `python 03_long_lived_data_identification_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Harvest now, decrypt later",
        "when": "Ongoing",
        "where": "Long-lived encrypted data + comms",
        "impact": "Adversaries record encrypted traffic today to decrypt once a cryptographically relevant quantum computer exists — long-lived secrets are already at risk.",
        "body": [
          "HNDL makes PQC migration urgent for data that must stay confidential for years: it can be captured now and broken later.",
          "Auditors verify cryptographic inventory/CBOM, long-lived data identification, crypto agility, PQC migration of comms, and CNSA 2.0 / NIST alignment."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Post-Quantum Readiness scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull Data inventory + retention schedule · Data classification + the CBOM (crypto protecting it)",
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
          "event": "NIST finalizes FIPS 203/204/205 PQC standards",
          "highlight": true
        },
        {
          "year": 2022,
          "event": "CNSA 2.0 sets quantum-resistant migration timelines for NSS"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Long-lived data identification\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "inventory long-secret data + its required confidentiality lifetime (years/decades)\nmap that data to the crypto protecting it (at-rest + in-transit) via the CBOM\nHNDL prioritisation: secrecy lifetime extending past the ~2030 CRQC horizon\nowners + locations of long-lived sensitive data"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The inventory of long-lived/long-secret data (must stay confidential for years/decades) + its required secrecy lifetime.",
        "The test: Verify the org has identified data needing protection beyond the quantum horizon.",
        "Reconcile the systems of record (Data inventory + retention schedule, Data classification + the CBOM (crypto protecting it), HNDL risk model) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. Long-secret data (health records, trade secrets, classified material, biometrics) hasn't been identified or mapped to its crypto, so the org can't prioritise what's actually exposed to harvest-now-decrypt-later."
      ],
      "references": [
        {
          "title": "CISA / NSA / NIST — HNDL Guidance",
          "url": "https://www.cisa.gov/quantum"
        },
        {
          "title": "NIST SP 1800-38",
          "url": "https://www.nccoe.nist.gov/crypto-agility-considerations-migrating-post-quantum-cryptographic-algorithms"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "03_long_lived_data_identification_mcp.py",
          "url": "/audit-code/pqc-readiness/03_long_lived_data_identification_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Post-Quantum Readiness evidence for \"Long-lived data identification\" (the inventory of long-lived/long-secret data (must stay confidential for years/decades) + its required secrecy lifetime), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Long-lived data identification\" control for Post-Quantum Readiness at AcmeCorp. THE TEST: Verify the org has identified data needing protection beyond the quantum horizon. PASS: long-secret data is inventoried with its required confidentiality lifetime; it's mapped to the crypto protecting it; data whose secrecy must outlast the expected arrival of a cryptographically-relevant quantum computer (~2030s) is flagged HNDL-priority; and owners are assigned. Exceptions: no identification of long-lived sensitive data, no mapping to protecting crypto, no HNDL prioritisation, and unowned long-secret data. The evidence — The inventory of long-lived/long-secret data (must stay confidential for years/decades) + its required secrecy lifetime — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Data inventory + retention schedule APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Data inventory + retention schedule gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Data inventory + retention schedule; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Post-Quantum Readiness: \"Long-lived data identification\" Audit Evidence\n\nThe test:\nVerify the org has identified data needing protection beyond the quantum horizon. PASS: long-secret data is inventoried with its required confidentiality lifetime; it's mapped to the crypto protecting it; data whose secrecy must outlast the expected arrival of a cryptographically-relevant quantum computer (~2030s) is flagged HNDL-priority; and owners are assigned. Exceptions: no identification of long-lived sensitive data, no mapping to protecting crypto, no HNDL prioritisation, and unowned long-secret data.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- pqc-readiness_inventory.json   (in-scope items — The inventory of long-lived/long-secret data (must stay confidential for years/decades) + its required secrecy lifetime)\n- pqc-readiness_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Long-lived data identification\",\n  \"domain\": \"Post-Quantum Readiness\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{pqc_",
        "/evidence/pqc-readiness_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Crypto / PKI team\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Long-lived data identification\" control must cover\n# fragment: longlived_data_identification_",
        "/evidence/pqc-readiness_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "pqc-readiness_inventory.json",
            "isDir": false
          },
          {
            "name": "pqc-readiness_state.json",
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
          "value": "FLAG{pqc_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/pqc-readiness_inventory.json",
          "value": "longlived_data_identification_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/pqc-readiness_state.json",
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
          "id": "pqc-03-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Long-lived data identification\" sub-process of Post-Quantum Readiness?",
          "options": [
            "Deploy and operate the long-lived data identification control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the long-lived data identification control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for long-lived data identification against comparable organisations in the sector",
            "Obtain evidence that the long-lived data identification control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "pqc-03-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Long-lived data identification\" matter to the broader Post-Quantum Readiness posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Post-Quantum Readiness",
            "It stops mattering once a firewall and endpoint agent are deployed across the Post-Quantum Readiness estate",
            "It is a control other Post-Quantum Readiness controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Post-Quantum Readiness controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "pqc-03-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Long-lived data identification\" control?",
          "options": [
            "A point-in-time screenshot of one system's long-lived data identification settings, captured during the walkthrough",
            "The The inventory of long-lived/long-secret data (must stay confidential for years/decades) + its required secrecy lifetime, reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the long-lived data identification control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's long-lived data identification capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "pqc-03-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Long-lived data identification\"?",
          "options": [
            "From Data inventory + retention schedule and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how long-lived data identification works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. Data inventory + retention schedule) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "pqc-03-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Long-lived data identification\"?",
          "options": [
            "The external audit firm, since it is the party examining the long-lived data identification control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the long-lived data identification data is shared, so the accountability sits with no one in particular",
            "Data owners + Privacy, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Data owners + Privacy owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "pqc-03-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Long-lived data identification\", which part stays with the human auditor?",
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
          "id": "pqc-03-q7",
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
          "id": "pqc-03-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Long-lived data identification\", which of these is a realistic reportable finding?",
          "options": [
            "Long-secret data (health records, trade secrets, classified material, biometrics) hasn't been identified or mapped to its crypto, so the org can't prioritise what's actually exposed to harvest-now-decrypt-later.",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. Long-secret data (health records, trade secrets, classified material, biometrics) hasn't been identified or mapped to its crypto, so the org can't prioritise what's actually exposed to harvest-now-decrypt-later. A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "pqc-03-q9",
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
          "id": "pqc-03-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Long-lived data identification\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind long-lived data identification, so there is no overlap",
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
    "epochId": "pqc-readiness",
    "id": "pqc-04",
    "order": 4,
    "title": "Network traffic exposure",
    "subtitle": "Agentic technical & privacy audit of the network traffic exposure control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 5,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Network traffic exposure\" control for Post-Quantum Readiness is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify exposure of sensitive network traffic to HNDL is assessed. PASS: traffic carrying long-secret data over interceptable links is inventoried with its key-exchange; quantum-vulnerable key exchange (RSA/ECDH) on long-secret traffic is identified as HNDL-exposed (record now, decrypt later); and there's a plan to migrate that traffic to hybrid/PQC key exchange. Exceptions: no assessment of which sensitive traffic uses vulnerable key exchange, long-secret data on classical-ECDH internet links with no plan, and no move toward hybrid key exchange for the most exposed flows.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Post-Quantum Readiness systems of record (TLS / network scanning (negotiated key exchange); Traffic / data-flow mapping; TLS hybrid-PQC support (where deployed)) as tools — e.g. `scan endpoints/links for negotiated key-exchange (ECDHE/RSA vs hybrid `, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The inventory of network traffic carrying sensitive long-lived data over interceptable links (internet, partner links, cross-region) + its key-exchange algorithm",
        "Identification of traffic using quantum-vulnerable key exchange (RSA/ECDH/DH) — capturable + later-decryptable",
        "The plan to move sensitive comms to quantum-resistant / hybrid key exchange",
        "Where hybrid PQC TLS is already deployed vs classical-only"
      ],
      "system": [
        "TLS / network scanning (negotiated key exchange)",
        "Traffic / data-flow mapping",
        "TLS hybrid-PQC support (where deployed)"
      ],
      "dataOwner": [
        "Cryptography + network security",
        "Enterprise architecture",
        "Data owners"
      ],
      "scoring": {
        "ease": "EASE 5/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Post-Quantum Readiness controls."
      }
    },
    "badge": {
      "id": "pqc-04-badge",
      "name": "Post-Quantum Readiness Auditor",
      "emoji": "🧮"
    },
    "wonder": {
      "name": "Network traffic exposure",
      "location": "Post-Quantum Readiness",
      "era": "Present Day",
      "emoji": "🧮"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Network traffic exposure\" as a repeatable agentic workflow: pull the real evidence (The inventory of network traffic carrying sensitive long-lived data over interceptable links (internet, partner links, cross-region) + its key-exchange algorithm) with read-only agents, run the test against policy, and issue a defensible opinion on the Post-Quantum Readiness control.",
      "year": 2025,
      "overview": [
        "The \"Network traffic exposure\" sub-process is one of the controls an auditor must verify for Post-Quantum Readiness. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the inventory of network traffic carrying sensitive long-lived data over interceptable links (internet, partner links, cross-region) + its key-exchange algorithm, for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here TLS / network scanning (negotiated key exchange), Traffic / data-flow mapping, TLS hybrid-PQC support (where deployed) — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `scan endpoints/links for negotiated key-exchange (ECDHE/RSA vs hybrid ML-KEM)` — read-only, against the systems of record.",
        "The test itself is specific. Verify exposure of sensitive network traffic to HNDL is assessed. PASS: traffic carrying long-secret data over interceptable links is inventoried with its key-exchange; quantum-vulnerable key exchange (RSA/ECDH) on long-secret traffic is identified as HNDL-exposed (record now, decrypt later); and there's a plan to migrate that traffic to hybrid/PQC key exchange. Exceptions: no assessment of which sensitive traffic uses vulnerable key exchange, long-secret data on classical-ECDH internet links with no plan, and no move toward hybrid key exchange for the most exposed flows. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `04_network_traffic_exposure_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from TLS / network scanning (negotiated key exchange) and Traffic / data-flow mapping (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 04_network_traffic_exposure_mcp.py` to expose it to your agent — or `python 04_network_traffic_exposure_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Harvest now, decrypt later",
        "when": "Ongoing",
        "where": "Long-lived encrypted data + comms",
        "impact": "Adversaries record encrypted traffic today to decrypt once a cryptographically relevant quantum computer exists — long-lived secrets are already at risk.",
        "body": [
          "HNDL makes PQC migration urgent for data that must stay confidential for years: it can be captured now and broken later.",
          "Auditors verify cryptographic inventory/CBOM, long-lived data identification, crypto agility, PQC migration of comms, and CNSA 2.0 / NIST alignment."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Post-Quantum Readiness scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull TLS / network scanning (negotiated key exchange) · Traffic / data-flow mapping",
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
          "event": "NIST finalizes FIPS 203/204/205 PQC standards",
          "highlight": true
        },
        {
          "year": 2022,
          "event": "CNSA 2.0 sets quantum-resistant migration timelines for NSS"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Network traffic exposure\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "scan endpoints/links for negotiated key-exchange (ECDHE/RSA vs hybrid ML-KEM)\nmap sensitive long-lived data flows to interceptable links (internet/partner/cross-region)\nHNDL exposure: long-secret traffic on quantum-vulnerable key exchange (capturable now)\nwhere is hybrid PQC TLS already enabled vs classical-only?"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The inventory of network traffic carrying sensitive long-lived data over interceptable links (internet, partner links, cross-region) + its key-exchange algorithm.",
        "The test: Verify exposure of sensitive network traffic to HNDL is assessed.",
        "Reconcile the systems of record (TLS / network scanning (negotiated key exchange), Traffic / data-flow mapping, TLS hybrid-PQC support (where deployed)) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. Long-secret data crosses the internet to partners over classical ECDHE with no hybrid PQC anywhere — an adversary recording that traffic today can decrypt it once a quantum computer exists (the core HNDL exposure)."
      ],
      "references": [
        {
          "title": "NIST SP 800-52",
          "url": "https://csrc.nist.gov/pubs/sp/800/52/r2/final"
        },
        {
          "title": "IETF — Hybrid Key Exchange in TLS 1.3",
          "url": "https://datatracker.ietf.org/doc/draft-ietf-tls-hybrid-design/"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "04_network_traffic_exposure_mcp.py",
          "url": "/audit-code/pqc-readiness/04_network_traffic_exposure_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Post-Quantum Readiness evidence for \"Network traffic exposure\" (the inventory of network traffic carrying sensitive long-lived data over interceptable links (internet, partner links, cross-region) + its key-exchange algorithm), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Network traffic exposure\" control for Post-Quantum Readiness at AcmeCorp. THE TEST: Verify exposure of sensitive network traffic to HNDL is assessed. PASS: traffic carrying long-secret data over interceptable links is inventoried with its key-exchange; quantum-vulnerable key exchange (RSA/ECDH) on long-secret traffic is identified as HNDL-exposed (record now, decrypt later); and there's a plan to migrate that traffic to hybrid/PQC key exchange. Exceptions: no assessment of which sensitive traffic uses vulnerable key exchange, long-secret data on classical-ECDH internet links with no plan, and no move toward hybrid key exchange for the most exposed flows. The evidence — The inventory of network traffic carrying sensitive long-lived data over interceptable links (internet, partner links, cross-region) + its key-exchange algorithm — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live TLS / network scanning (negotiated key exchange) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. TLS / network scanning (negotiated key exchange) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from TLS / network scanning (negotiated key exchange); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Post-Quantum Readiness: \"Network traffic exposure\" Audit Evidence\n\nThe test:\nVerify exposure of sensitive network traffic to HNDL is assessed. PASS: traffic carrying long-secret data over interceptable links is inventoried with its key-exchange; quantum-vulnerable key exchange (RSA/ECDH) on long-secret traffic is identified as HNDL-exposed (record now, decrypt later); and there's a plan to migrate that traffic to hybrid/PQC key exchange. Exceptions: no assessment of which sensitive traffic uses vulnerable key exchange, long-secret data on classical-ECDH internet links with no plan, and no move toward hybrid key exchange for the most exposed flows.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- pqc-readiness_inventory.json   (in-scope items — The inventory of network traffic carrying sensitive long-lived data over interceptable links (internet, partner links, cross-region) + its key-exchange algorithm)\n- pqc-readiness_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Network traffic exposure\",\n  \"domain\": \"Post-Quantum Readiness\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{pqc_",
        "/evidence/pqc-readiness_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Crypto / PKI team\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Network traffic exposure\" control must cover\n# fragment: network_traffic_exposure_",
        "/evidence/pqc-readiness_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "pqc-readiness_inventory.json",
            "isDir": false
          },
          {
            "name": "pqc-readiness_state.json",
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
          "value": "FLAG{pqc_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/pqc-readiness_inventory.json",
          "value": "network_traffic_exposure_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/pqc-readiness_state.json",
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
          "id": "pqc-04-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Network traffic exposure\" sub-process of Post-Quantum Readiness?",
          "options": [
            "Deploy and operate the network traffic exposure control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the network traffic exposure control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for network traffic exposure against comparable organisations in the sector",
            "Obtain evidence that the network traffic exposure control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "pqc-04-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Network traffic exposure\" matter to the broader Post-Quantum Readiness posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Post-Quantum Readiness",
            "It stops mattering once a firewall and endpoint agent are deployed across the Post-Quantum Readiness estate",
            "It is a control other Post-Quantum Readiness controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Post-Quantum Readiness controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "pqc-04-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Network traffic exposure\" control?",
          "options": [
            "A point-in-time screenshot of one system's network traffic exposure settings, captured during the walkthrough",
            "The The inventory of network traffic carrying sensitive long-lived data over interceptable links (internet, partner links, cross-region) + its key-exchange algorithm, reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the network traffic exposure control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's network traffic exposure capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "pqc-04-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Network traffic exposure\"?",
          "options": [
            "From TLS / network scanning (negotiated key exchange) and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how network traffic exposure works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. TLS / network scanning (negotiated key exchange)) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "pqc-04-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Network traffic exposure\"?",
          "options": [
            "The external audit firm, since it is the party examining the network traffic exposure control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the network traffic exposure data is shared, so the accountability sits with no one in particular",
            "Cryptography + network security, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Cryptography + network security owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "pqc-04-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Network traffic exposure\", which part stays with the human auditor?",
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
          "id": "pqc-04-q7",
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
          "id": "pqc-04-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Network traffic exposure\", which of these is a realistic reportable finding?",
          "options": [
            "Long-secret data crosses the internet to partners over classical ECDHE with no hybrid PQC anywhere — an adversary recording that traffic today can decrypt it once a quantum computer exists (the core HNDL exposure).",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. Long-secret data crosses the internet to partners over classical ECDHE with no hybrid PQC anywhere — an adversary recording that traffic today can decrypt it once a quantum computer exists (the core HNDL exposure). A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "pqc-04-q9",
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
          "id": "pqc-04-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Network traffic exposure\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind network traffic exposure, so there is no overlap",
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
    "epochId": "pqc-readiness",
    "id": "pqc-05",
    "order": 5,
    "title": "Historical encryption assessment",
    "subtitle": "Agentic technical & privacy audit of the historical encryption assessment control",
    "category": "cybersecurity",
    "xp": 180,
    "easeScore": 6,
    "valueScore": 9,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Historical encryption assessment\" control for Post-Quantum Readiness is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify the org assessed already-captured encrypted data for future quantum decryption. PASS: data already outside the org's control (past breaches, intercepted traffic, decommissioned media) protected by quantum-vulnerable crypto is identified; residual exposure is analysed (secrecy lifetime vs decryptability horizon); and a risk decision (accept, re-key where still controlled, notify) is made. Exceptions: no consideration of historical/exfiltrated encrypted data, no analysis of whether its secrecy outlasts the quantum horizon, and no risk decision for known past exposures.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Post-Quantum Readiness systems of record (Incident / breach history; Data classification + retention (secrecy lifetime); Crypto inventory (what protected it)) as tools — e.g. `review past breaches / lost media / intercepted traffic: was the data `, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The assessment of already-exfiltrated/captured encrypted data (past breaches, lost media, intercepted traffic) protected by quantum-vulnerable crypto",
        "The exposure analysis (does that historical data's secrecy lifetime outlast the decryptability horizon)",
        "The list of past incidents where encrypted data left the org's control",
        "The re-encryption / risk-acceptance decision for historical exposures"
      ],
      "system": [
        "Incident / breach history",
        "Data classification + retention (secrecy lifetime)",
        "Crypto inventory (what protected it)"
      ],
      "dataOwner": [
        "Cryptography + Privacy / Legal",
        "Security operations (breach history)",
        "Risk"
      ],
      "scoring": {
        "ease": "EASE 6/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 9/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Post-Quantum Readiness controls."
      }
    },
    "badge": {
      "id": "pqc-05-badge",
      "name": "Post-Quantum Readiness Auditor",
      "emoji": "🧮"
    },
    "wonder": {
      "name": "Historical encryption assessment",
      "location": "Post-Quantum Readiness",
      "era": "Present Day",
      "emoji": "🧮"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Historical encryption assessment\" as a repeatable agentic workflow: pull the real evidence (The assessment of already-exfiltrated/captured encrypted data (past breaches, lost media, intercepted traffic) protected by quantum-vulnerable crypto) with read-only agents, run the test against policy, and issue a defensible opinion on the Post-Quantum Readiness control.",
      "year": 2025,
      "overview": [
        "The \"Historical encryption assessment\" sub-process is one of the controls an auditor must verify for Post-Quantum Readiness. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the assessment of already-exfiltrated/captured encrypted data (past breaches, lost media, intercepted traffic) protected by quantum-vulnerable crypto, for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Incident / breach history, Data classification + retention (secrecy lifetime), Crypto inventory (what protected it) — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `review past breaches / lost media / intercepted traffic: was the data encrypted,` — read-only, against the systems of record.",
        "The test itself is specific. Verify the org assessed already-captured encrypted data for future quantum decryption. PASS: data already outside the org's control (past breaches, intercepted traffic, decommissioned media) protected by quantum-vulnerable crypto is identified; residual exposure is analysed (secrecy lifetime vs decryptability horizon); and a risk decision (accept, re-key where still controlled, notify) is made. Exceptions: no consideration of historical/exfiltrated encrypted data, no analysis of whether its secrecy outlasts the quantum horizon, and no risk decision for known past exposures. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `05_historical_encryption_assessment_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Incident / breach history and Data classification + retention (secrecy lifetime) (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 05_historical_encryption_assessment_mcp.py` to expose it to your agent — or `python 05_historical_encryption_assessment_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Harvest now, decrypt later",
        "when": "Ongoing",
        "where": "Long-lived encrypted data + comms",
        "impact": "Adversaries record encrypted traffic today to decrypt once a cryptographically relevant quantum computer exists — long-lived secrets are already at risk.",
        "body": [
          "HNDL makes PQC migration urgent for data that must stay confidential for years: it can be captured now and broken later.",
          "Auditors verify cryptographic inventory/CBOM, long-lived data identification, crypto agility, PQC migration of comms, and CNSA 2.0 / NIST alignment."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Post-Quantum Readiness scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull Incident / breach history · Data classification + retention (secrecy lifetime)",
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
          "event": "NIST finalizes FIPS 203/204/205 PQC standards",
          "highlight": true
        },
        {
          "year": 2022,
          "event": "CNSA 2.0 sets quantum-resistant migration timelines for NSS"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Historical encryption assessment\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "review past breaches / lost media / intercepted traffic: was the data encrypted, with what algorithm?\nexposure analysis: does that historical data's secrecy lifetime outlast the quantum horizon?\nlist incidents where encrypted data left the org's control\nrisk decision: accept / re-key (where still controlled) / notify"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The assessment of already-exfiltrated/captured encrypted data (past breaches, lost media, intercepted traffic) protected by quantum-vulnerable crypto.",
        "The test: Verify the org assessed already-captured encrypted data for future quantum decryption.",
        "Reconcile the systems of record (Incident / breach history, Data classification + retention (secrecy lifetime), Crypto inventory (what protected it)) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. A historical breach exfiltrated a database encrypted with RSA-wrapped keys; because the data (genetic records) must stay secret for decades, it's squarely a future-quantum-decryption exposure that was never assessed or risk-accepted."
      ],
      "references": [
        {
          "title": "CISA / NSA — HNDL",
          "url": "https://www.cisa.gov/quantum"
        },
        {
          "title": "NIST Post-Quantum Cryptography",
          "url": "https://csrc.nist.gov/projects/post-quantum-cryptography"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "05_historical_encryption_assessment_mcp.py",
          "url": "/audit-code/pqc-readiness/05_historical_encryption_assessment_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Post-Quantum Readiness evidence for \"Historical encryption assessment\" (the assessment of already-exfiltrated/captured encrypted data (past breaches, lost media, intercepted traffic) protected by quantum-vulnerable crypto), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Historical encryption assessment\" control for Post-Quantum Readiness at AcmeCorp. THE TEST: Verify the org assessed already-captured encrypted data for future quantum decryption. PASS: data already outside the org's control (past breaches, intercepted traffic, decommissioned media) protected by quantum-vulnerable crypto is identified; residual exposure is analysed (secrecy lifetime vs decryptability horizon); and a risk decision (accept, re-key where still controlled, notify) is made. Exceptions: no consideration of historical/exfiltrated encrypted data, no analysis of whether its secrecy outlasts the quantum horizon, and no risk decision for known past exposures. The evidence — The assessment of already-exfiltrated/captured encrypted data (past breaches, lost media, intercepted traffic) protected by quantum-vulnerable crypto — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Incident / breach history APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Incident / breach history gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Incident / breach history; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Post-Quantum Readiness: \"Historical encryption assessment\" Audit Evidence\n\nThe test:\nVerify the org assessed already-captured encrypted data for future quantum decryption. PASS: data already outside the org's control (past breaches, intercepted traffic, decommissioned media) protected by quantum-vulnerable crypto is identified; residual exposure is analysed (secrecy lifetime vs decryptability horizon); and a risk decision (accept, re-key where still controlled, notify) is made. Exceptions: no consideration of historical/exfiltrated encrypted data, no analysis of whether its secrecy outlasts the quantum horizon, and no risk decision for known past exposures.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- pqc-readiness_inventory.json   (in-scope items — The assessment of already-exfiltrated/captured encrypted data (past breaches, lost media, intercepted traffic) protected by quantum-vulnerable crypto)\n- pqc-readiness_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Historical encryption assessment\",\n  \"domain\": \"Post-Quantum Readiness\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{pqc_",
        "/evidence/pqc-readiness_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Crypto / PKI team\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Historical encryption assessment\" control must cover\n# fragment: historical_encryption_assessment_",
        "/evidence/pqc-readiness_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "pqc-readiness_inventory.json",
            "isDir": false
          },
          {
            "name": "pqc-readiness_state.json",
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
          "value": "FLAG{pqc_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/pqc-readiness_inventory.json",
          "value": "historical_encryption_assessment_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/pqc-readiness_state.json",
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
          "id": "pqc-05-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Historical encryption assessment\" sub-process of Post-Quantum Readiness?",
          "options": [
            "Deploy and operate the historical encryption assessment control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the historical encryption assessment control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for historical encryption assessment against comparable organisations in the sector",
            "Obtain evidence that the historical encryption assessment control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "pqc-05-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Historical encryption assessment\" matter to the broader Post-Quantum Readiness posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Post-Quantum Readiness",
            "It stops mattering once a firewall and endpoint agent are deployed across the Post-Quantum Readiness estate",
            "It is a control other Post-Quantum Readiness controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Post-Quantum Readiness controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "pqc-05-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Historical encryption assessment\" control?",
          "options": [
            "A point-in-time screenshot of one system's historical encryption assessment settings, captured during the walkthrough",
            "The The assessment of already-exfiltrated/captured encrypted data (past breaches, lost media, intercepted traffic) protected by quantum-vulnerable crypto, reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the historical encryption assessment control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's historical encryption assessment capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "pqc-05-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Historical encryption assessment\"?",
          "options": [
            "From Incident / breach history and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how historical encryption assessment works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. Incident / breach history) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "pqc-05-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Historical encryption assessment\"?",
          "options": [
            "The external audit firm, since it is the party examining the historical encryption assessment control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the historical encryption assessment data is shared, so the accountability sits with no one in particular",
            "Cryptography + Privacy / Legal, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Cryptography + Privacy / Legal owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "pqc-05-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Historical encryption assessment\", which part stays with the human auditor?",
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
          "id": "pqc-05-q7",
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
          "id": "pqc-05-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Historical encryption assessment\", which of these is a realistic reportable finding?",
          "options": [
            "A historical breach exfiltrated a database encrypted with RSA-wrapped keys; because the data (genetic records) must stay secret for decades, it's squarely a future-quantum-decryption exposure that was never assessed or risk-accepted.",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. A historical breach exfiltrated a database encrypted with RSA-wrapped keys; because the data (genetic records) must stay secret for decades, it's squarely a future-quantum-decryption exposure that was never assessed or risk-accepted. A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "pqc-05-q9",
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
          "id": "pqc-05-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Historical encryption assessment\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind historical encryption assessment, so there is no overlap",
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
    "epochId": "pqc-readiness",
    "id": "pqc-06",
    "order": 6,
    "title": "PQC regulatory compliance",
    "subtitle": "Agentic technical & privacy audit of the pqc regulatory compliance control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 7,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"PQC regulatory compliance\" control for Post-Quantum Readiness is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify the org tracks + plans for its PQC regulatory obligations. PASS: applicable PQC mandates + timelines are identified (CNSA 2.0, OMB M-23-02 / CISA, EU, sector); the org has a plan + status against each deadline; PQC requirements are flowed into procurement + product specs; and migration evidence is audit-ready. Exceptions: PQC mandates unidentified, no plan against published deadlines, no flow-down to procurement/products, and no audit-ready migration evidence.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Post-Quantum Readiness systems of record (GRC (PQC mandate mapping); The PQC migration plan / roadmap; Procurement + product requirement specs) as tools — e.g. `map PQC mandates + timelines (CNSA 2.0, OMB M-23-02 / CISA, EU, sector`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The mapping of PQC-related mandates/timelines the org is subject to (CNSA 2.0 for NSS, US OMB/CISA directives, EU/regional, sector regulators)",
        "The org's compliance status + plan against each PQC deadline",
        "Evidence PQC requirements are flowed into procurement + product requirements",
        "The audit-readiness of PQC migration evidence"
      ],
      "system": [
        "GRC (PQC mandate mapping)",
        "The PQC migration plan / roadmap",
        "Procurement + product requirement specs"
      ],
      "dataOwner": [
        "Compliance / GRC + Cryptography team",
        "Legal",
        "Procurement"
      ],
      "scoring": {
        "ease": "EASE 7/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Post-Quantum Readiness controls."
      }
    },
    "badge": {
      "id": "pqc-06-badge",
      "name": "Post-Quantum Readiness Auditor",
      "emoji": "🧮"
    },
    "wonder": {
      "name": "PQC regulatory compliance",
      "location": "Post-Quantum Readiness",
      "era": "Present Day",
      "emoji": "🧮"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"PQC regulatory compliance\" as a repeatable agentic workflow: pull the real evidence (The mapping of PQC-related mandates/timelines the org is subject to (CNSA 2.0 for NSS, US OMB/CISA directives, EU/regional, sector regulators)) with read-only agents, run the test against policy, and issue a defensible opinion on the Post-Quantum Readiness control.",
      "year": 2025,
      "overview": [
        "The \"PQC regulatory compliance\" sub-process is one of the controls an auditor must verify for Post-Quantum Readiness. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the mapping of PQC-related mandates/timelines the org is subject to (CNSA 2.0 for NSS, US OMB/CISA directives, EU/regional, sector regulators), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here GRC (PQC mandate mapping), The PQC migration plan / roadmap, Procurement + product requirement specs — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `map PQC mandates + timelines (CNSA 2.0, OMB M-23-02 / CISA, EU, sector regulator` — read-only, against the systems of record.",
        "The test itself is specific. Verify the org tracks + plans for its PQC regulatory obligations. PASS: applicable PQC mandates + timelines are identified (CNSA 2.0, OMB M-23-02 / CISA, EU, sector); the org has a plan + status against each deadline; PQC requirements are flowed into procurement + product specs; and migration evidence is audit-ready. Exceptions: PQC mandates unidentified, no plan against published deadlines, no flow-down to procurement/products, and no audit-ready migration evidence. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `06_pqc_regulatory_compliance_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from GRC (PQC mandate mapping) and The PQC migration plan / roadmap (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 06_pqc_regulatory_compliance_mcp.py` to expose it to your agent — or `python 06_pqc_regulatory_compliance_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Harvest now, decrypt later",
        "when": "Ongoing",
        "where": "Long-lived encrypted data + comms",
        "impact": "Adversaries record encrypted traffic today to decrypt once a cryptographically relevant quantum computer exists — long-lived secrets are already at risk.",
        "body": [
          "HNDL makes PQC migration urgent for data that must stay confidential for years: it can be captured now and broken later.",
          "Auditors verify cryptographic inventory/CBOM, long-lived data identification, crypto agility, PQC migration of comms, and CNSA 2.0 / NIST alignment."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Post-Quantum Readiness scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull GRC (PQC mandate mapping) · The PQC migration plan / roadmap",
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
          "event": "NIST finalizes FIPS 203/204/205 PQC standards",
          "highlight": true
        },
        {
          "year": 2022,
          "event": "CNSA 2.0 sets quantum-resistant migration timelines for NSS"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"PQC regulatory compliance\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "map PQC mandates + timelines (CNSA 2.0, OMB M-23-02 / CISA, EU, sector regulators) to the org\ncompliance status + plan against each PQC deadline\nare PQC requirements flowed into procurement + product specs?\naudit-ready migration evidence"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The mapping of PQC-related mandates/timelines the org is subject to (CNSA 2.0 for NSS, US OMB/CISA directives, EU/regional, sector regulators).",
        "The test: Verify the org tracks + plans for its PQC regulatory obligations.",
        "Reconcile the systems of record (GRC (PQC mandate mapping), The PQC migration plan / roadmap, Procurement + product requirement specs) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. Applicable PQC directives (and their deadlines) haven't been identified, there's no migration plan against any of them, and procurement still buys crypto products with no PQC roadmap requirement."
      ],
      "references": [
        {
          "title": "NSA CNSA 2.0",
          "url": "https://www.nsa.gov/Cybersecurity/Post-Quantum-Cybersecurity-Resources/"
        },
        {
          "title": "US OMB M-23-02",
          "url": "https://www.whitehouse.gov/wp-content/uploads/2022/11/M-23-02-M-Memo-on-Migrating-to-Post-Quantum-Cryptography.pdf"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "06_pqc_regulatory_compliance_mcp.py",
          "url": "/audit-code/pqc-readiness/06_pqc_regulatory_compliance_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Post-Quantum Readiness evidence for \"PQC regulatory compliance\" (the mapping of pqc-related mandates/timelines the org is subject to (cnsa 2.0 for nss, us omb/cisa directives, eu/regional, sector regulators)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"PQC regulatory compliance\" control for Post-Quantum Readiness at AcmeCorp. THE TEST: Verify the org tracks + plans for its PQC regulatory obligations. PASS: applicable PQC mandates + timelines are identified (CNSA 2.0, OMB M-23-02 / CISA, EU, sector); the org has a plan + status against each deadline; PQC requirements are flowed into procurement + product specs; and migration evidence is audit-ready. Exceptions: PQC mandates unidentified, no plan against published deadlines, no flow-down to procurement/products, and no audit-ready migration evidence. The evidence — The mapping of PQC-related mandates/timelines the org is subject to (CNSA 2.0 for NSS, US OMB/CISA directives, EU/regional, sector regulators) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live GRC (PQC mandate mapping) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. GRC (PQC mandate mapping) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from GRC (PQC mandate mapping); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Post-Quantum Readiness: \"PQC regulatory compliance\" Audit Evidence\n\nThe test:\nVerify the org tracks + plans for its PQC regulatory obligations. PASS: applicable PQC mandates + timelines are identified (CNSA 2.0, OMB M-23-02 / CISA, EU, sector); the org has a plan + status against each deadline; PQC requirements are flowed into procurement + product specs; and migration evidence is audit-ready. Exceptions: PQC mandates unidentified, no plan against published deadlines, no flow-down to procurement/products, and no audit-ready migration evidence.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- pqc-readiness_inventory.json   (in-scope items — The mapping of PQC-related mandates/timelines the org is subject to (CNSA 2.0 for NSS, US OMB/CISA directives, EU/regional, sector regulators))\n- pqc-readiness_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"PQC regulatory compliance\",\n  \"domain\": \"Post-Quantum Readiness\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{pqc_",
        "/evidence/pqc-readiness_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Crypto / PKI team\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"PQC regulatory compliance\" control must cover\n# fragment: pqc_regulatory_compliance_",
        "/evidence/pqc-readiness_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "pqc-readiness_inventory.json",
            "isDir": false
          },
          {
            "name": "pqc-readiness_state.json",
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
          "value": "FLAG{pqc_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/pqc-readiness_inventory.json",
          "value": "pqc_regulatory_compliance_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/pqc-readiness_state.json",
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
          "id": "pqc-06-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"PQC regulatory compliance\" sub-process of Post-Quantum Readiness?",
          "options": [
            "Deploy and operate the pqc regulatory compliance control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the pqc regulatory compliance control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for pqc regulatory compliance against comparable organisations in the sector",
            "Obtain evidence that the pqc regulatory compliance control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "pqc-06-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"PQC regulatory compliance\" matter to the broader Post-Quantum Readiness posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Post-Quantum Readiness",
            "It stops mattering once a firewall and endpoint agent are deployed across the Post-Quantum Readiness estate",
            "It is a control other Post-Quantum Readiness controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Post-Quantum Readiness controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "pqc-06-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"PQC regulatory compliance\" control?",
          "options": [
            "A point-in-time screenshot of one system's pqc regulatory compliance settings, captured during the walkthrough",
            "The The mapping of PQC-related mandates/timelines the org is subject to (CNSA 2.0 for NSS, US OMB/CISA directives, EU/regional, sector regulators), reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the pqc regulatory compliance control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's pqc regulatory compliance capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "pqc-06-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"PQC regulatory compliance\"?",
          "options": [
            "From GRC (PQC mandate mapping) and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how pqc regulatory compliance works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. GRC (PQC mandate mapping)) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "pqc-06-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"PQC regulatory compliance\"?",
          "options": [
            "The external audit firm, since it is the party examining the pqc regulatory compliance control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the pqc regulatory compliance data is shared, so the accountability sits with no one in particular",
            "Compliance / GRC + Cryptography team, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Compliance / GRC + Cryptography team owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "pqc-06-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"PQC regulatory compliance\", which part stays with the human auditor?",
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
          "id": "pqc-06-q7",
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
          "id": "pqc-06-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"PQC regulatory compliance\", which of these is a realistic reportable finding?",
          "options": [
            "Applicable PQC directives (and their deadlines) haven't been identified, there's no migration plan against any of them, and procurement still buys crypto products with no PQC roadmap requirement.",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. Applicable PQC directives (and their deadlines) haven't been identified, there's no migration plan against any of them, and procurement still buys crypto products with no PQC roadmap requirement. A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "pqc-06-q9",
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
          "id": "pqc-06-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"PQC regulatory compliance\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind pqc regulatory compliance, so there is no overlap",
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
    "epochId": "pqc-readiness",
    "id": "pqc-07",
    "order": 7,
    "title": "Active HNDL threat intel",
    "subtitle": "Agentic technical & privacy audit of the active hndl threat intel control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 5,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Active HNDL threat intel\" control for Post-Quantum Readiness is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify the org tracks the quantum threat to keep its migration timeline current. PASS: the org consumes credible threat-intel on quantum progress + adversary harvesting; maintains a CRQC-timeline assumption that's periodically updated; has trigger criteria that would accelerate migration on a breakthrough; and feeds this into prioritisation. Exceptions: no quantum threat-intel tracking, a static/unexamined timeline assumption, no acceleration triggers, and migration prioritisation disconnected from the evolving threat.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Post-Quantum Readiness systems of record (Threat-intel sources (NIST / NSA / academic / vendor quantum tracking); The CRQC-timeline assumption + risk model; Migration prioritisation) as tools — e.g. `the threat-intel consumed on quantum progress + adversary HNDL collect`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The threat-intelligence the org consumes on quantum-computing progress + adversary harvesting activity (nation-state HNDL collection)",
        "The org's CRQC-timeline assumptions + how they're updated as the field advances",
        "The trigger criteria that would accelerate migration (a quantum breakthrough)",
        "Integration of HNDL threat-intel into migration prioritisation"
      ],
      "system": [
        "Threat-intel sources (NIST / NSA / academic / vendor quantum tracking)",
        "The CRQC-timeline assumption + risk model",
        "Migration prioritisation"
      ],
      "dataOwner": [
        "Cryptography team + threat intel",
        "Risk",
        "Enterprise architecture"
      ],
      "scoring": {
        "ease": "EASE 5/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Post-Quantum Readiness controls."
      }
    },
    "badge": {
      "id": "pqc-07-badge",
      "name": "Post-Quantum Readiness Auditor",
      "emoji": "🧮"
    },
    "wonder": {
      "name": "Active HNDL threat intel",
      "location": "Post-Quantum Readiness",
      "era": "Present Day",
      "emoji": "🧮"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Active HNDL threat intel\" as a repeatable agentic workflow: pull the real evidence (The threat-intelligence the org consumes on quantum-computing progress + adversary harvesting activity (nation-state HNDL collection)) with read-only agents, run the test against policy, and issue a defensible opinion on the Post-Quantum Readiness control.",
      "year": 2025,
      "overview": [
        "The \"Active HNDL threat intel\" sub-process is one of the controls an auditor must verify for Post-Quantum Readiness. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the threat-intelligence the org consumes on quantum-computing progress + adversary harvesting activity (nation-state HNDL collection), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Threat-intel sources (NIST / NSA / academic / vendor quantum tracking), The CRQC-timeline assumption + risk model, Migration prioritisation — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `the threat-intel consumed on quantum progress + adversary HNDL collection` — read-only, against the systems of record.",
        "The test itself is specific. Verify the org tracks the quantum threat to keep its migration timeline current. PASS: the org consumes credible threat-intel on quantum progress + adversary harvesting; maintains a CRQC-timeline assumption that's periodically updated; has trigger criteria that would accelerate migration on a breakthrough; and feeds this into prioritisation. Exceptions: no quantum threat-intel tracking, a static/unexamined timeline assumption, no acceleration triggers, and migration prioritisation disconnected from the evolving threat. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `07_active_hndl_threat_intel_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Threat-intel sources (NIST / NSA / academic / vendor quantum tracking) and The CRQC-timeline assumption + risk model (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 07_active_hndl_threat_intel_mcp.py` to expose it to your agent — or `python 07_active_hndl_threat_intel_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Harvest now, decrypt later",
        "when": "Ongoing",
        "where": "Long-lived encrypted data + comms",
        "impact": "Adversaries record encrypted traffic today to decrypt once a cryptographically relevant quantum computer exists — long-lived secrets are already at risk.",
        "body": [
          "HNDL makes PQC migration urgent for data that must stay confidential for years: it can be captured now and broken later.",
          "Auditors verify cryptographic inventory/CBOM, long-lived data identification, crypto agility, PQC migration of comms, and CNSA 2.0 / NIST alignment."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Post-Quantum Readiness scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull Threat-intel sources (NIST / NSA / academic / vendor quantum tracking) · The CRQC-timeline assumption + risk model",
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
          "event": "NIST finalizes FIPS 203/204/205 PQC standards",
          "highlight": true
        },
        {
          "year": 2022,
          "event": "CNSA 2.0 sets quantum-resistant migration timelines for NSS"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Active HNDL threat intel\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "the threat-intel consumed on quantum progress + adversary HNDL collection\nthe org's CRQC-timeline assumption + its update process\nacceleration trigger criteria (a quantum breakthrough)\nis HNDL threat-intel feeding the migration prioritisation?"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The threat-intelligence the org consumes on quantum-computing progress + adversary harvesting activity (nation-state HNDL collection).",
        "The test: Verify the org tracks the quantum threat to keep its migration timeline current.",
        "Reconcile the systems of record (Threat-intel sources (NIST / NSA / academic / vendor quantum tracking), The CRQC-timeline assumption + risk model, Migration prioritisation) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. The org has no view on quantum-computing progress or adversary harvesting and assumes 'quantum is decades away' as a static fact, so there are no triggers to accelerate a migration that hasn't started."
      ],
      "references": [
        {
          "title": "CISA / NSA / NIST Quantum Guidance",
          "url": "https://www.cisa.gov/quantum"
        },
        {
          "title": "ETSI Quantum-Safe Cryptography",
          "url": "https://www.etsi.org/technologies/quantum-safe-cryptography"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "07_active_hndl_threat_intel_mcp.py",
          "url": "/audit-code/pqc-readiness/07_active_hndl_threat_intel_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Post-Quantum Readiness evidence for \"Active HNDL threat intel\" (the threat-intelligence the org consumes on quantum-computing progress + adversary harvesting activity (nation-state hndl collection)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Active HNDL threat intel\" control for Post-Quantum Readiness at AcmeCorp. THE TEST: Verify the org tracks the quantum threat to keep its migration timeline current. PASS: the org consumes credible threat-intel on quantum progress + adversary harvesting; maintains a CRQC-timeline assumption that's periodically updated; has trigger criteria that would accelerate migration on a breakthrough; and feeds this into prioritisation. Exceptions: no quantum threat-intel tracking, a static/unexamined timeline assumption, no acceleration triggers, and migration prioritisation disconnected from the evolving threat. The evidence — The threat-intelligence the org consumes on quantum-computing progress + adversary harvesting activity (nation-state HNDL collection) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Threat-intel sources (NIST / NSA / academic / vendor quantum tracking) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Threat-intel sources (NIST / NSA / academic / vendor quantum tracking) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Threat-intel sources (NIST / NSA / academic / vendor quantum tracking); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Post-Quantum Readiness: \"Active HNDL threat intel\" Audit Evidence\n\nThe test:\nVerify the org tracks the quantum threat to keep its migration timeline current. PASS: the org consumes credible threat-intel on quantum progress + adversary harvesting; maintains a CRQC-timeline assumption that's periodically updated; has trigger criteria that would accelerate migration on a breakthrough; and feeds this into prioritisation. Exceptions: no quantum threat-intel tracking, a static/unexamined timeline assumption, no acceleration triggers, and migration prioritisation disconnected from the evolving threat.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- pqc-readiness_inventory.json   (in-scope items — The threat-intelligence the org consumes on quantum-computing progress + adversary harvesting activity (nation-state HNDL collection))\n- pqc-readiness_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Active HNDL threat intel\",\n  \"domain\": \"Post-Quantum Readiness\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{pqc_",
        "/evidence/pqc-readiness_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Crypto / PKI team\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Active HNDL threat intel\" control must cover\n# fragment: active_hndl_threat_",
        "/evidence/pqc-readiness_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "pqc-readiness_inventory.json",
            "isDir": false
          },
          {
            "name": "pqc-readiness_state.json",
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
          "value": "FLAG{pqc_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/pqc-readiness_inventory.json",
          "value": "active_hndl_threat_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/pqc-readiness_state.json",
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
          "id": "pqc-07-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Active HNDL threat intel\" sub-process of Post-Quantum Readiness?",
          "options": [
            "Deploy and operate the active hndl threat intel control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the active hndl threat intel control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for active hndl threat intel against comparable organisations in the sector",
            "Obtain evidence that the active hndl threat intel control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "pqc-07-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Active HNDL threat intel\" matter to the broader Post-Quantum Readiness posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Post-Quantum Readiness",
            "It stops mattering once a firewall and endpoint agent are deployed across the Post-Quantum Readiness estate",
            "It is a control other Post-Quantum Readiness controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Post-Quantum Readiness controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "pqc-07-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Active HNDL threat intel\" control?",
          "options": [
            "A point-in-time screenshot of one system's active hndl threat intel settings, captured during the walkthrough",
            "The The threat-intelligence the org consumes on quantum-computing progress + adversary harvesting activity (nation-state HNDL collection), reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the active hndl threat intel control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's active hndl threat intel capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "pqc-07-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Active HNDL threat intel\"?",
          "options": [
            "From Threat-intel sources (NIST / NSA / academic / vendor quantum tracking) and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how active hndl threat intel works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. Threat-intel sources (NIST / NSA / academic / vendor quantum tracking)) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "pqc-07-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Active HNDL threat intel\"?",
          "options": [
            "The external audit firm, since it is the party examining the active hndl threat intel control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the active hndl threat intel data is shared, so the accountability sits with no one in particular",
            "Cryptography team + threat intel, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Cryptography team + threat intel owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "pqc-07-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Active HNDL threat intel\", which part stays with the human auditor?",
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
          "id": "pqc-07-q7",
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
          "id": "pqc-07-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Active HNDL threat intel\", which of these is a realistic reportable finding?",
          "options": [
            "The org has no view on quantum-computing progress or adversary harvesting and assumes 'quantum is decades away' as a static fact, so there are no triggers to accelerate a migration that hasn't started.",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. The org has no view on quantum-computing progress or adversary harvesting and assumes 'quantum is decades away' as a static fact, so there are no triggers to accelerate a migration that hasn't started. A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "pqc-07-q9",
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
          "id": "pqc-07-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Active HNDL threat intel\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind active hndl threat intel, so there is no overlap",
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
    "epochId": "pqc-readiness",
    "id": "pqc-08",
    "order": 8,
    "title": "Crypto, protocol, hardware agility",
    "subtitle": "Agentic technical & privacy audit of the crypto, protocol, hardware agility control",
    "category": "cybersecurity",
    "xp": 180,
    "easeScore": 6,
    "valueScore": 9,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Crypto, protocol, hardware agility\" control for Post-Quantum Readiness is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify the estate can actually adopt new cryptography (agility). PASS: crypto is abstracted (centrally swappable in software), protocols are configurable to new algorithms, and hardware (HSMs, devices) can support PQC or has an upgrade path; un-agile crypto is identified + being remediated. Exceptions: crypto hardcoded per call-site (a PQC swap = mass refactor), protocols/products that can't be reconfigured, HSMs/hardware with no PQC support or upgrade path, and no plan to fix the un-agile long-poles.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Post-Quantum Readiness systems of record (The codebase + crypto libraries (abstraction); Protocol stacks (TLS / IKE config); HSMs / crypto hardware (PQC support)) as tools — e.g. `crypto-agility: is crypto behind a central abstraction or hardcoded pe`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The crypto-agility assessment of the estate (can algorithms be swapped centrally without re-architecture — software, protocols, hardware/HSM)",
        "Evidence crypto is abstracted (behind interfaces/libraries) vs hardcoded per call-site",
        "Protocol agility (TLS/IKE configurable to new algorithms) + hardware agility (HSMs/devices that can run PQC)",
        "The plan to remediate un-agile crypto (the migration long-pole)"
      ],
      "system": [
        "The codebase + crypto libraries (abstraction)",
        "Protocol stacks (TLS / IKE config)",
        "HSMs / crypto hardware (PQC support)"
      ],
      "dataOwner": [
        "Cryptography + enterprise architecture",
        "Engineering",
        "Infrastructure (HSM)"
      ],
      "scoring": {
        "ease": "EASE 6/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 9/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Post-Quantum Readiness controls."
      }
    },
    "badge": {
      "id": "pqc-08-badge",
      "name": "Post-Quantum Readiness Auditor",
      "emoji": "🧮"
    },
    "wonder": {
      "name": "Crypto, protocol, hardware agility",
      "location": "Post-Quantum Readiness",
      "era": "Present Day",
      "emoji": "🧮"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Crypto, protocol, hardware agility\" as a repeatable agentic workflow: pull the real evidence (The crypto-agility assessment of the estate (can algorithms be swapped centrally without re-architecture — software, protocols, hardware/HSM)) with read-only agents, run the test against policy, and issue a defensible opinion on the Post-Quantum Readiness control.",
      "year": 2025,
      "overview": [
        "The \"Crypto, protocol, hardware agility\" sub-process is one of the controls an auditor must verify for Post-Quantum Readiness. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the crypto-agility assessment of the estate (can algorithms be swapped centrally without re-architecture — software, protocols, hardware/HSM), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here The codebase + crypto libraries (abstraction), Protocol stacks (TLS / IKE config), HSMs / crypto hardware (PQC support) — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `crypto-agility: is crypto behind a central abstraction or hardcoded per call-sit` — read-only, against the systems of record.",
        "The test itself is specific. Verify the estate can actually adopt new cryptography (agility). PASS: crypto is abstracted (centrally swappable in software), protocols are configurable to new algorithms, and hardware (HSMs, devices) can support PQC or has an upgrade path; un-agile crypto is identified + being remediated. Exceptions: crypto hardcoded per call-site (a PQC swap = mass refactor), protocols/products that can't be reconfigured, HSMs/hardware with no PQC support or upgrade path, and no plan to fix the un-agile long-poles. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `08_crypto_protocol_hardware_agility_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from The codebase + crypto libraries (abstraction) and Protocol stacks (TLS / IKE config) (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 08_crypto_protocol_hardware_agility_mcp.py` to expose it to your agent — or `python 08_crypto_protocol_hardware_agility_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Harvest now, decrypt later",
        "when": "Ongoing",
        "where": "Long-lived encrypted data + comms",
        "impact": "Adversaries record encrypted traffic today to decrypt once a cryptographically relevant quantum computer exists — long-lived secrets are already at risk.",
        "body": [
          "HNDL makes PQC migration urgent for data that must stay confidential for years: it can be captured now and broken later.",
          "Auditors verify cryptographic inventory/CBOM, long-lived data identification, crypto agility, PQC migration of comms, and CNSA 2.0 / NIST alignment."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Post-Quantum Readiness scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull The codebase + crypto libraries (abstraction) · Protocol stacks (TLS / IKE config)",
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
          "event": "NIST finalizes FIPS 203/204/205 PQC standards",
          "highlight": true
        },
        {
          "year": 2022,
          "event": "CNSA 2.0 sets quantum-resistant migration timelines for NSS"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Crypto, protocol, hardware agility\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "crypto-agility: is crypto behind a central abstraction or hardcoded per call-site?\nprotocol agility: can TLS/IKE be reconfigured to new algorithms?\nhardware agility: do HSMs/devices support PQC or have an upgrade path?\nthe remediation plan for un-agile crypto (the migration long-pole)"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The crypto-agility assessment of the estate (can algorithms be swapped centrally without re-architecture — software, protocols, hardware/HSM).",
        "The test: Verify the estate can actually adopt new cryptography (agility).",
        "Reconcile the systems of record (The codebase + crypto libraries (abstraction), Protocol stacks (TLS / IKE config), HSMs / crypto hardware (PQC support)) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. Crypto is hardcoded across hundreds of call-sites with no abstraction, the HSMs can't run PQC algorithms and aren't upgradeable, and embedded devices have fixed firmware crypto — so even a ready PQC algorithm couldn't be deployed without a massive re-architecture."
      ],
      "references": [
        {
          "title": "NIST — Crypto Agility",
          "url": "https://csrc.nist.gov/projects/crypto-agility"
        },
        {
          "title": "NIST SP 1800-38",
          "url": "https://www.nccoe.nist.gov/crypto-agility-considerations-migrating-post-quantum-cryptographic-algorithms"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "08_crypto_protocol_hardware_agility_mcp.py",
          "url": "/audit-code/pqc-readiness/08_crypto_protocol_hardware_agility_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Post-Quantum Readiness evidence for \"Crypto, protocol, hardware agility\" (the crypto-agility assessment of the estate (can algorithms be swapped centrally without re-architecture — software, protocols, hardware/hsm)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Crypto, protocol, hardware agility\" control for Post-Quantum Readiness at AcmeCorp. THE TEST: Verify the estate can actually adopt new cryptography (agility). PASS: crypto is abstracted (centrally swappable in software), protocols are configurable to new algorithms, and hardware (HSMs, devices) can support PQC or has an upgrade path; un-agile crypto is identified + being remediated. Exceptions: crypto hardcoded per call-site (a PQC swap = mass refactor), protocols/products that can't be reconfigured, HSMs/hardware with no PQC support or upgrade path, and no plan to fix the un-agile long-poles. The evidence — The crypto-agility assessment of the estate (can algorithms be swapped centrally without re-architecture — software, protocols, hardware/HSM) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live The codebase + crypto libraries (abstraction) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. The codebase + crypto libraries (abstraction) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from The codebase + crypto libraries (abstraction); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Post-Quantum Readiness: \"Crypto, protocol, hardware agility\" Audit Evidence\n\nThe test:\nVerify the estate can actually adopt new cryptography (agility). PASS: crypto is abstracted (centrally swappable in software), protocols are configurable to new algorithms, and hardware (HSMs, devices) can support PQC or has an upgrade path; un-agile crypto is identified + being remediated. Exceptions: crypto hardcoded per call-site (a PQC swap = mass refactor), protocols/products that can't be reconfigured, HSMs/hardware with no PQC support or upgrade path, and no plan to fix the un-agile long-poles.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- pqc-readiness_inventory.json   (in-scope items — The crypto-agility assessment of the estate (can algorithms be swapped centrally without re-architecture — software, protocols, hardware/HSM))\n- pqc-readiness_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Crypto, protocol, hardware agility\",\n  \"domain\": \"Post-Quantum Readiness\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{pqc_",
        "/evidence/pqc-readiness_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Crypto / PKI team\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Crypto, protocol, hardware agility\" control must cover\n# fragment: crypto_protocol_hardware_",
        "/evidence/pqc-readiness_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "pqc-readiness_inventory.json",
            "isDir": false
          },
          {
            "name": "pqc-readiness_state.json",
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
          "value": "FLAG{pqc_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/pqc-readiness_inventory.json",
          "value": "crypto_protocol_hardware_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/pqc-readiness_state.json",
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
          "id": "pqc-08-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Crypto, protocol, hardware agility\" sub-process of Post-Quantum Readiness?",
          "options": [
            "Deploy and operate the crypto, protocol, hardware agility control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the crypto, protocol, hardware agility control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for crypto, protocol, hardware agility against comparable organisations in the sector",
            "Obtain evidence that the crypto, protocol, hardware agility control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "pqc-08-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Crypto, protocol, hardware agility\" matter to the broader Post-Quantum Readiness posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Post-Quantum Readiness",
            "It stops mattering once a firewall and endpoint agent are deployed across the Post-Quantum Readiness estate",
            "It is a control other Post-Quantum Readiness controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Post-Quantum Readiness controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "pqc-08-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Crypto, protocol, hardware agility\" control?",
          "options": [
            "A point-in-time screenshot of one system's crypto, protocol, hardware agility settings, captured during the walkthrough",
            "The The crypto-agility assessment of the estate (can algorithms be swapped centrally without re-architecture — software, protocols, hardware/HSM), reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the crypto, protocol, hardware agility control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's crypto, protocol, hardware agility capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "pqc-08-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Crypto, protocol, hardware agility\"?",
          "options": [
            "From The codebase + crypto libraries (abstraction) and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how crypto, protocol, hardware agility works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. The codebase + crypto libraries (abstraction)) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "pqc-08-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Crypto, protocol, hardware agility\"?",
          "options": [
            "The external audit firm, since it is the party examining the crypto, protocol, hardware agility control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the crypto, protocol, hardware agility data is shared, so the accountability sits with no one in particular",
            "Cryptography + enterprise architecture, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Cryptography + enterprise architecture owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "pqc-08-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Crypto, protocol, hardware agility\", which part stays with the human auditor?",
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
          "id": "pqc-08-q7",
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
          "id": "pqc-08-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Crypto, protocol, hardware agility\", which of these is a realistic reportable finding?",
          "options": [
            "Crypto is hardcoded across hundreds of call-sites with no abstraction, the HSMs can't run PQC algorithms and aren't upgradeable, and embedded devices have fixed firmware crypto — so even a ready PQC algorithm couldn't be deployed without a massive re-architecture.",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. Crypto is hardcoded across hundreds of call-sites with no abstraction, the HSMs can't run PQC algorithms and aren't upgradeable, and embedded devices have fixed firmware crypto — so even a ready PQC algorithm couldn't be deployed without a massive re-architecture. A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "pqc-08-q9",
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
          "id": "pqc-08-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Crypto, protocol, hardware agility\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind crypto, protocol, hardware agility, so there is no overlap",
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
    "epochId": "pqc-readiness",
    "id": "pqc-09",
    "order": 9,
    "title": "Secure communications PQC migration",
    "subtitle": "Agentic technical & privacy audit of the secure communications pqc migration control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 5,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Secure communications PQC migration\" control for Post-Quantum Readiness is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify secure-communications are being migrated to PQC, prioritised by exposure. PASS: a migration plan moves secure-comms (TLS, VPN, SSH, email) to hybrid/PQC key exchange, with deployments/pilots underway (hybrid TLS 1.3 with ML-KEM), prioritised by HNDL exposure, and with interop/fallback handled. Exceptions: no secure-comms migration plan, no hybrid pilots, migration not prioritised by exposure, and hybrid deployments that break interop or fall back to classical silently.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Post-Quantum Readiness systems of record (TLS / VPN / SSH / email stacks (hybrid PQC support); Load balancers / proxies (PQC TLS termination); The migration plan) as tools — e.g. `migration plan + status for secure-comms channels (TLS/VPN/SSH/email/A`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The migration plan + status for secure-communications channels (TLS, VPN/IPsec, SSH, email/S-MIME, API) to hybrid/PQC",
        "Evidence of pilots/deployments of hybrid key exchange (e.g. X25519 + ML-KEM-768 in TLS 1.3)",
        "Prioritisation by HNDL exposure (most-exposed channels first)",
        "Interop + fallback handling (hybrid negotiates, falls back safely)"
      ],
      "system": [
        "TLS / VPN / SSH / email stacks (hybrid PQC support)",
        "Load balancers / proxies (PQC TLS termination)",
        "The migration plan"
      ],
      "dataOwner": [
        "Cryptography + network/platform engineering",
        "Application owners",
        "Enterprise architecture"
      ],
      "scoring": {
        "ease": "EASE 5/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Post-Quantum Readiness controls."
      }
    },
    "badge": {
      "id": "pqc-09-badge",
      "name": "Post-Quantum Readiness Auditor",
      "emoji": "🧮"
    },
    "wonder": {
      "name": "Secure communications PQC migration",
      "location": "Post-Quantum Readiness",
      "era": "Present Day",
      "emoji": "🧮"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Secure communications PQC migration\" as a repeatable agentic workflow: pull the real evidence (The migration plan + status for secure-communications channels (TLS, VPN/IPsec, SSH, email/S-MIME, API) to hybrid/PQC) with read-only agents, run the test against policy, and issue a defensible opinion on the Post-Quantum Readiness control.",
      "year": 2025,
      "overview": [
        "The \"Secure communications PQC migration\" sub-process is one of the controls an auditor must verify for Post-Quantum Readiness. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the migration plan + status for secure-communications channels (TLS, VPN/IPsec, SSH, email/S-MIME, API) to hybrid/PQC, for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here TLS / VPN / SSH / email stacks (hybrid PQC support), Load balancers / proxies (PQC TLS termination), The migration plan — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `migration plan + status for secure-comms channels (TLS/VPN/SSH/email/API) to hyb` — read-only, against the systems of record.",
        "The test itself is specific. Verify secure-communications are being migrated to PQC, prioritised by exposure. PASS: a migration plan moves secure-comms (TLS, VPN, SSH, email) to hybrid/PQC key exchange, with deployments/pilots underway (hybrid TLS 1.3 with ML-KEM), prioritised by HNDL exposure, and with interop/fallback handled. Exceptions: no secure-comms migration plan, no hybrid pilots, migration not prioritised by exposure, and hybrid deployments that break interop or fall back to classical silently. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `09_secure_communications_pqc_migration_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from TLS / VPN / SSH / email stacks (hybrid PQC support) and Load balancers / proxies (PQC TLS termination) (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 09_secure_communications_pqc_migration_mcp.py` to expose it to your agent — or `python 09_secure_communications_pqc_migration_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Harvest now, decrypt later",
        "when": "Ongoing",
        "where": "Long-lived encrypted data + comms",
        "impact": "Adversaries record encrypted traffic today to decrypt once a cryptographically relevant quantum computer exists — long-lived secrets are already at risk.",
        "body": [
          "HNDL makes PQC migration urgent for data that must stay confidential for years: it can be captured now and broken later.",
          "Auditors verify cryptographic inventory/CBOM, long-lived data identification, crypto agility, PQC migration of comms, and CNSA 2.0 / NIST alignment."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Post-Quantum Readiness scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull TLS / VPN / SSH / email stacks (hybrid PQC support) · Load balancers / proxies (PQC TLS termination)",
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
          "event": "NIST finalizes FIPS 203/204/205 PQC standards",
          "highlight": true
        },
        {
          "year": 2022,
          "event": "CNSA 2.0 sets quantum-resistant migration timelines for NSS"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Secure communications PQC migration\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "migration plan + status for secure-comms channels (TLS/VPN/SSH/email/API) to hybrid/PQC\nhybrid pilots: e.g. X25519 + ML-KEM-768 in TLS 1.3 (where enabled?)\nprioritisation by HNDL exposure (most-exposed channels first)\ninterop + safe-fallback handling for hybrid negotiation"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The migration plan + status for secure-communications channels (TLS, VPN/IPsec, SSH, email/S-MIME, API) to hybrid/PQC.",
        "The test: Verify secure-communications are being migrated to PQC, prioritised by exposure.",
        "Reconcile the systems of record (TLS / VPN / SSH / email stacks (hybrid PQC support), Load balancers / proxies (PQC TLS termination), The migration plan) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. No secure-communications channel uses hybrid PQC; there are no pilots and no migration plan, so the most HNDL-exposed flows (long-secret data to partners over the internet) remain classical-only."
      ],
      "references": [
        {
          "title": "IETF — Hybrid Key Exchange in TLS 1.3",
          "url": "https://datatracker.ietf.org/doc/draft-ietf-tls-hybrid-design/"
        },
        {
          "title": "NSA CNSA 2.0",
          "url": "https://www.nsa.gov/Cybersecurity/Post-Quantum-Cybersecurity-Resources/"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "09_secure_communications_pqc_migration_mcp.py",
          "url": "/audit-code/pqc-readiness/09_secure_communications_pqc_migration_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Post-Quantum Readiness evidence for \"Secure communications PQC migration\" (the migration plan + status for secure-communications channels (tls, vpn/ipsec, ssh, email/s-mime, api) to hybrid/pqc), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Secure communications PQC migration\" control for Post-Quantum Readiness at AcmeCorp. THE TEST: Verify secure-communications are being migrated to PQC, prioritised by exposure. PASS: a migration plan moves secure-comms (TLS, VPN, SSH, email) to hybrid/PQC key exchange, with deployments/pilots underway (hybrid TLS 1.3 with ML-KEM), prioritised by HNDL exposure, and with interop/fallback handled. Exceptions: no secure-comms migration plan, no hybrid pilots, migration not prioritised by exposure, and hybrid deployments that break interop or fall back to classical silently. The evidence — The migration plan + status for secure-communications channels (TLS, VPN/IPsec, SSH, email/S-MIME, API) to hybrid/PQC — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live TLS / VPN / SSH / email stacks (hybrid PQC support) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. TLS / VPN / SSH / email stacks (hybrid PQC support) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from TLS / VPN / SSH / email stacks (hybrid PQC support); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Post-Quantum Readiness: \"Secure communications PQC migration\" Audit Evidence\n\nThe test:\nVerify secure-communications are being migrated to PQC, prioritised by exposure. PASS: a migration plan moves secure-comms (TLS, VPN, SSH, email) to hybrid/PQC key exchange, with deployments/pilots underway (hybrid TLS 1.3 with ML-KEM), prioritised by HNDL exposure, and with interop/fallback handled. Exceptions: no secure-comms migration plan, no hybrid pilots, migration not prioritised by exposure, and hybrid deployments that break interop or fall back to classical silently.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- pqc-readiness_inventory.json   (in-scope items — The migration plan + status for secure-communications channels (TLS, VPN/IPsec, SSH, email/S-MIME, API) to hybrid/PQC)\n- pqc-readiness_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Secure communications PQC migration\",\n  \"domain\": \"Post-Quantum Readiness\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{pqc_",
        "/evidence/pqc-readiness_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Crypto / PKI team\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Secure communications PQC migration\" control must cover\n# fragment: secure_communications_pqc_",
        "/evidence/pqc-readiness_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "pqc-readiness_inventory.json",
            "isDir": false
          },
          {
            "name": "pqc-readiness_state.json",
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
          "value": "FLAG{pqc_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/pqc-readiness_inventory.json",
          "value": "secure_communications_pqc_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/pqc-readiness_state.json",
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
          "id": "pqc-09-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Secure communications PQC migration\" sub-process of Post-Quantum Readiness?",
          "options": [
            "Deploy and operate the secure communications pqc migration control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the secure communications pqc migration control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for secure communications pqc migration against comparable organisations in the sector",
            "Obtain evidence that the secure communications pqc migration control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "pqc-09-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Secure communications PQC migration\" matter to the broader Post-Quantum Readiness posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Post-Quantum Readiness",
            "It stops mattering once a firewall and endpoint agent are deployed across the Post-Quantum Readiness estate",
            "It is a control other Post-Quantum Readiness controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Post-Quantum Readiness controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "pqc-09-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Secure communications PQC migration\" control?",
          "options": [
            "A point-in-time screenshot of one system's secure communications pqc migration settings, captured during the walkthrough",
            "The The migration plan + status for secure-communications channels (TLS, VPN/IPsec, SSH, email/S-MIME, API) to hybrid/PQC, reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the secure communications pqc migration control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's secure communications pqc migration capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "pqc-09-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Secure communications PQC migration\"?",
          "options": [
            "From TLS / VPN / SSH / email stacks (hybrid PQC support) and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how secure communications pqc migration works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. TLS / VPN / SSH / email stacks (hybrid PQC support)) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "pqc-09-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Secure communications PQC migration\"?",
          "options": [
            "The external audit firm, since it is the party examining the secure communications pqc migration control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the secure communications pqc migration data is shared, so the accountability sits with no one in particular",
            "Cryptography + network/platform engineering, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Cryptography + network/platform engineering owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "pqc-09-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Secure communications PQC migration\", which part stays with the human auditor?",
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
          "id": "pqc-09-q7",
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
          "id": "pqc-09-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Secure communications PQC migration\", which of these is a realistic reportable finding?",
          "options": [
            "No secure-communications channel uses hybrid PQC; there are no pilots and no migration plan, so the most HNDL-exposed flows (long-secret data to partners over the internet) remain classical-only.",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. No secure-communications channel uses hybrid PQC; there are no pilots and no migration plan, so the most HNDL-exposed flows (long-secret data to partners over the internet) remain classical-only. A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "pqc-09-q9",
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
          "id": "pqc-09-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Secure communications PQC migration\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind secure communications pqc migration, so there is no overlap",
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
    "epochId": "pqc-readiness",
    "id": "pqc-10",
    "order": 10,
    "title": "RFC 9881 alignment",
    "subtitle": "Agentic technical & privacy audit of the rfc 9881 alignment control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 5,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"RFC 9881 alignment\" control for Post-Quantum Readiness is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify PQC implementations conform to the published protocol standards (incl. RFC 9881). PASS: PQC protocol use follows the standardised specifications (IETF PQC RFCs / RFC 9881) — standard algorithm identifiers, hybrid combiners, and negotiation — validated for interop, not a proprietary/non-conformant scheme; and the org tracks the standards as they finalise. Exceptions: custom/non-standard PQC implementations (interop + security risk), implementations diverging from the finalised RFC, no interop validation, and no tracking of standards updates.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Post-Quantum Readiness systems of record (The PQC protocol implementations (TLS / IKE / SSH libraries); The relevant IETF PQC RFCs / RFC 9881; Interop test harness) as tools — e.g. `map PQC protocol implementations to the published standards/RFCs (incl`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The mapping of the org's PQC protocol implementations to the published standards/RFCs (the relevant IETF PQC RFCs incl. RFC 9881) — conformant, not custom",
        "Evidence PQC is implemented per the standard (correct algorithm IDs, hybrid combiners, negotiation) not a proprietary scheme",
        "Interop validation against the RFC",
        "Tracking of the RFC's status + updates"
      ],
      "system": [
        "The PQC protocol implementations (TLS / IKE / SSH libraries)",
        "The relevant IETF PQC RFCs / RFC 9881",
        "Interop test harness"
      ],
      "dataOwner": [
        "Cryptography team",
        "Protocol / engineering",
        "Standards liaison"
      ],
      "scoring": {
        "ease": "EASE 5/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Post-Quantum Readiness controls."
      }
    },
    "badge": {
      "id": "pqc-10-badge",
      "name": "Post-Quantum Readiness Auditor",
      "emoji": "🧮"
    },
    "wonder": {
      "name": "RFC 9881 alignment",
      "location": "Post-Quantum Readiness",
      "era": "Present Day",
      "emoji": "🧮"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"RFC 9881 alignment\" as a repeatable agentic workflow: pull the real evidence (The mapping of the org's PQC protocol implementations to the published standards/RFCs (the relevant IETF PQC RFCs incl. RFC 9881) — conformant, not custom) with read-only agents, run the test against policy, and issue a defensible opinion on the Post-Quantum Readiness control.",
      "year": 2025,
      "overview": [
        "The \"RFC 9881 alignment\" sub-process is one of the controls an auditor must verify for Post-Quantum Readiness. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the mapping of the org's PQC protocol implementations to the published standards/RFCs (the relevant IETF PQC RFCs incl. RFC 9881) — conformant, not custom, for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here The PQC protocol implementations (TLS / IKE / SSH libraries), The relevant IETF PQC RFCs / RFC 9881, Interop test harness — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `map PQC protocol implementations to the published standards/RFCs (incl. RFC 9881` — read-only, against the systems of record.",
        "The test itself is specific. Verify PQC implementations conform to the published protocol standards (incl. RFC 9881). PASS: PQC protocol use follows the standardised specifications (IETF PQC RFCs / RFC 9881) — standard algorithm identifiers, hybrid combiners, and negotiation — validated for interop, not a proprietary/non-conformant scheme; and the org tracks the standards as they finalise. Exceptions: custom/non-standard PQC implementations (interop + security risk), implementations diverging from the finalised RFC, no interop validation, and no tracking of standards updates. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `10_rfc_9881_alignment_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from The PQC protocol implementations (TLS / IKE / SSH libraries) and The relevant IETF PQC RFCs / RFC 9881 (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 10_rfc_9881_alignment_mcp.py` to expose it to your agent — or `python 10_rfc_9881_alignment_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Harvest now, decrypt later",
        "when": "Ongoing",
        "where": "Long-lived encrypted data + comms",
        "impact": "Adversaries record encrypted traffic today to decrypt once a cryptographically relevant quantum computer exists — long-lived secrets are already at risk.",
        "body": [
          "HNDL makes PQC migration urgent for data that must stay confidential for years: it can be captured now and broken later.",
          "Auditors verify cryptographic inventory/CBOM, long-lived data identification, crypto agility, PQC migration of comms, and CNSA 2.0 / NIST alignment."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Post-Quantum Readiness scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull The PQC protocol implementations (TLS / IKE / SSH libraries) · The relevant IETF PQC RFCs / RFC 9881",
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
          "event": "NIST finalizes FIPS 203/204/205 PQC standards",
          "highlight": true
        },
        {
          "year": 2022,
          "event": "CNSA 2.0 sets quantum-resistant migration timelines for NSS"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"RFC 9881 alignment\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "map PQC protocol implementations to the published standards/RFCs (incl. RFC 9881)\nconfirm standard algorithm IDs + hybrid combiners + negotiation (not proprietary)\ninterop validation against the RFC\ntrack the RFC status + updates"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The mapping of the org's PQC protocol implementations to the published standards/RFCs (the relevant IETF PQC RFCs incl. RFC 9881) — conformant, not custom.",
        "The test: Verify PQC implementations conform to the published protocol standards (incl.",
        "Reconcile the systems of record (The PQC protocol implementations (TLS / IKE / SSH libraries), The relevant IETF PQC RFCs / RFC 9881, Interop test harness) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. An early PQC pilot used a pre-standard, proprietary hybrid construction that doesn't conform to the finalised RFC — creating interop failures and an implementation that must be redone."
      ],
      "references": [
        {
          "title": "IETF — TLS / PQC RFCs",
          "url": "https://datatracker.ietf.org/wg/tls/documents/"
        },
        {
          "title": "NIST Post-Quantum Cryptography",
          "url": "https://csrc.nist.gov/projects/post-quantum-cryptography"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "10_rfc_9881_alignment_mcp.py",
          "url": "/audit-code/pqc-readiness/10_rfc_9881_alignment_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Post-Quantum Readiness evidence for \"RFC 9881 alignment\" (the mapping of the org's pqc protocol implementations to the published standards/rfcs (the relevant ietf pqc rfcs incl. rfc 9881) — conformant, not custom), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"RFC 9881 alignment\" control for Post-Quantum Readiness at AcmeCorp. THE TEST: Verify PQC implementations conform to the published protocol standards (incl. RFC 9881). PASS: PQC protocol use follows the standardised specifications (IETF PQC RFCs / RFC 9881) — standard algorithm identifiers, hybrid combiners, and negotiation — validated for interop, not a proprietary/non-conformant scheme; and the org tracks the standards as they finalise. Exceptions: custom/non-standard PQC implementations (interop + security risk), implementations diverging from the finalised RFC, no interop validation, and no tracking of standards updates. The evidence — The mapping of the org's PQC protocol implementations to the published standards/RFCs (the relevant IETF PQC RFCs incl. RFC 9881) — conformant, not custom — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live The PQC protocol implementations (TLS / IKE / SSH libraries) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. The PQC protocol implementations (TLS / IKE / SSH libraries) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from The PQC protocol implementations (TLS / IKE / SSH libraries); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Post-Quantum Readiness: \"RFC 9881 alignment\" Audit Evidence\n\nThe test:\nVerify PQC implementations conform to the published protocol standards (incl. RFC 9881). PASS: PQC protocol use follows the standardised specifications (IETF PQC RFCs / RFC 9881) — standard algorithm identifiers, hybrid combiners, and negotiation — validated for interop, not a proprietary/non-conformant scheme; and the org tracks the standards as they finalise. Exceptions: custom/non-standard PQC implementations (interop + security risk), implementations diverging from the finalised RFC, no interop validation, and no tracking of standards updates.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- pqc-readiness_inventory.json   (in-scope items — The mapping of the org's PQC protocol implementations to the published standards/RFCs (the relevant IETF PQC RFCs incl. RFC 9881) — conformant, not custom)\n- pqc-readiness_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"RFC 9881 alignment\",\n  \"domain\": \"Post-Quantum Readiness\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{pqc_",
        "/evidence/pqc-readiness_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Crypto / PKI team\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"RFC 9881 alignment\" control must cover\n# fragment: rfc_9881_alignment_",
        "/evidence/pqc-readiness_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "pqc-readiness_inventory.json",
            "isDir": false
          },
          {
            "name": "pqc-readiness_state.json",
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
          "value": "FLAG{pqc_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/pqc-readiness_inventory.json",
          "value": "rfc_9881_alignment_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/pqc-readiness_state.json",
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
          "id": "pqc-10-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"RFC 9881 alignment\" sub-process of Post-Quantum Readiness?",
          "options": [
            "Deploy and operate the rfc 9881 alignment control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the rfc 9881 alignment control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for rfc 9881 alignment against comparable organisations in the sector",
            "Obtain evidence that the rfc 9881 alignment control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "pqc-10-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"RFC 9881 alignment\" matter to the broader Post-Quantum Readiness posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Post-Quantum Readiness",
            "It stops mattering once a firewall and endpoint agent are deployed across the Post-Quantum Readiness estate",
            "It is a control other Post-Quantum Readiness controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Post-Quantum Readiness controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "pqc-10-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"RFC 9881 alignment\" control?",
          "options": [
            "A point-in-time screenshot of one system's rfc 9881 alignment settings, captured during the walkthrough",
            "The The mapping of the org's PQC protocol implementations to the published standards/RFCs (the relevant IETF PQC RFCs incl. RFC 9881) — conformant, not custom, reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the rfc 9881 alignment control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's rfc 9881 alignment capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "pqc-10-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"RFC 9881 alignment\"?",
          "options": [
            "From The PQC protocol implementations (TLS / IKE / SSH libraries) and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how rfc 9881 alignment works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. The PQC protocol implementations (TLS / IKE / SSH libraries)) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "pqc-10-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"RFC 9881 alignment\"?",
          "options": [
            "The external audit firm, since it is the party examining the rfc 9881 alignment control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the rfc 9881 alignment data is shared, so the accountability sits with no one in particular",
            "Cryptography team, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Cryptography team owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "pqc-10-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"RFC 9881 alignment\", which part stays with the human auditor?",
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
          "id": "pqc-10-q7",
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
          "id": "pqc-10-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"RFC 9881 alignment\", which of these is a realistic reportable finding?",
          "options": [
            "An early PQC pilot used a pre-standard, proprietary hybrid construction that doesn't conform to the finalised RFC — creating interop failures and an implementation that must be redone.",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. An early PQC pilot used a pre-standard, proprietary hybrid construction that doesn't conform to the finalised RFC — creating interop failures and an implementation that must be redone. A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "pqc-10-q9",
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
          "id": "pqc-10-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"RFC 9881 alignment\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind rfc 9881 alignment, so there is no overlap",
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
    "epochId": "pqc-readiness",
    "id": "pqc-11",
    "order": 11,
    "title": "CNSA 2.0 compliance planning",
    "subtitle": "Agentic technical & privacy audit of the cnsa 2.0 compliance planning control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 6,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"CNSA 2.0 compliance planning\" control for Post-Quantum Readiness is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify systems subject to CNSA 2.0 have a compliant migration plan + are on track. PASS: CNSA-2.0-in-scope systems (national-security systems / their suppliers) are inventoried; a plan adopts the CNSA 2.0 algorithm suite (ML-KEM-1024, ML-DSA, AES-256, SHA-384/512) against the published category deadlines (software/firmware signing first); and status tracks the milestones. Exceptions: CNSA-2.0-in-scope systems with no migration plan, missing the published milestones (e.g. the signing deadline), and adopting non-CNSA-2.0 parameter sets where CNSA 2.0 applies.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Post-Quantum Readiness systems of record (The CNSA-2.0-scope inventory; The migration plan / roadmap; Crypto implementations (CNSA 2.0 suite)) as tools — e.g. `inventory CNSA-2.0-in-scope systems (NSS / suppliers to NSS)`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "For national-security-relevant systems: the CNSA 2.0 migration plan + the algorithm-transition timeline (CNSA 2.0 category deadlines — software/firmware signing first, then broader)",
        "The inventory of CNSA-2.0-in-scope systems",
        "Status against the CNSA 2.0 milestones",
        "Evidence of adopting the CNSA 2.0 algorithm suite (ML-KEM-1024, ML-DSA, AES-256, SHA-384/512)"
      ],
      "system": [
        "The CNSA-2.0-scope inventory",
        "The migration plan / roadmap",
        "Crypto implementations (CNSA 2.0 suite)"
      ],
      "dataOwner": [
        "Cryptography team + Compliance",
        "Systems owners (NSS)",
        "Enterprise architecture"
      ],
      "scoring": {
        "ease": "EASE 6/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Post-Quantum Readiness controls."
      }
    },
    "badge": {
      "id": "pqc-11-badge",
      "name": "Post-Quantum Readiness Auditor",
      "emoji": "🧮"
    },
    "wonder": {
      "name": "CNSA 2.0 compliance planning",
      "location": "Post-Quantum Readiness",
      "era": "Present Day",
      "emoji": "🧮"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"CNSA 2.0 compliance planning\" as a repeatable agentic workflow: pull the real evidence (For national-security-relevant systems: the CNSA 2.0 migration plan + the algorithm-transition timeline (CNSA 2.0 category deadlines — software/firmware signing first, then broader)) with read-only agents, run the test against policy, and issue a defensible opinion on the Post-Quantum Readiness control.",
      "year": 2025,
      "overview": [
        "The \"CNSA 2.0 compliance planning\" sub-process is one of the controls an auditor must verify for Post-Quantum Readiness. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me for national-security-relevant systems: the CNSA 2.0 migration plan + the algorithm-transition timeline (CNSA 2.0 category deadlines — software/firmware signing first, then broader), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here The CNSA-2.0-scope inventory, The migration plan / roadmap, Crypto implementations (CNSA 2.0 suite) — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `inventory CNSA-2.0-in-scope systems (NSS / suppliers to NSS)` — read-only, against the systems of record.",
        "The test itself is specific. Verify systems subject to CNSA 2.0 have a compliant migration plan + are on track. PASS: CNSA-2.0-in-scope systems (national-security systems / their suppliers) are inventoried; a plan adopts the CNSA 2.0 algorithm suite (ML-KEM-1024, ML-DSA, AES-256, SHA-384/512) against the published category deadlines (software/firmware signing first); and status tracks the milestones. Exceptions: CNSA-2.0-in-scope systems with no migration plan, missing the published milestones (e.g. the signing deadline), and adopting non-CNSA-2.0 parameter sets where CNSA 2.0 applies. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `11_cnsa_2_0_compliance_planning_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from The CNSA-2.0-scope inventory and The migration plan / roadmap (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 11_cnsa_2_0_compliance_planning_mcp.py` to expose it to your agent — or `python 11_cnsa_2_0_compliance_planning_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Harvest now, decrypt later",
        "when": "Ongoing",
        "where": "Long-lived encrypted data + comms",
        "impact": "Adversaries record encrypted traffic today to decrypt once a cryptographically relevant quantum computer exists — long-lived secrets are already at risk.",
        "body": [
          "HNDL makes PQC migration urgent for data that must stay confidential for years: it can be captured now and broken later.",
          "Auditors verify cryptographic inventory/CBOM, long-lived data identification, crypto agility, PQC migration of comms, and CNSA 2.0 / NIST alignment."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Post-Quantum Readiness scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull The CNSA-2.0-scope inventory · The migration plan / roadmap",
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
          "event": "NIST finalizes FIPS 203/204/205 PQC standards",
          "highlight": true
        },
        {
          "year": 2022,
          "event": "CNSA 2.0 sets quantum-resistant migration timelines for NSS"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"CNSA 2.0 compliance planning\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "inventory CNSA-2.0-in-scope systems (NSS / suppliers to NSS)\nplan adopting the CNSA 2.0 suite (ML-KEM-1024, ML-DSA, AES-256, SHA-384/512)\nstatus vs the CNSA 2.0 category deadlines (software/firmware signing first)\nconfirm correct parameter sets where CNSA 2.0 applies"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: For national-security-relevant systems: the CNSA 2.0 migration plan + the algorithm-transition timeline (CNSA 2.0 category deadlines — software/firmware signing first, then broader).",
        "The test: Verify systems subject to CNSA 2.0 have a compliant migration plan + are on track.",
        "Reconcile the systems of record (The CNSA-2.0-scope inventory, The migration plan / roadmap, Crypto implementations (CNSA 2.0 suite)) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. Systems supplying a national-security customer are in CNSA 2.0 scope but have no migration plan and will miss the software/firmware-signing deadline, with code-signing still on classical RSA/ECDSA."
      ],
      "references": [
        {
          "title": "NSA CNSA 2.0",
          "url": "https://www.nsa.gov/Cybersecurity/Post-Quantum-Cybersecurity-Resources/"
        },
        {
          "title": "NIST FIPS 203 / 204",
          "url": "https://csrc.nist.gov/projects/post-quantum-cryptography"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "11_cnsa_2_0_compliance_planning_mcp.py",
          "url": "/audit-code/pqc-readiness/11_cnsa_2_0_compliance_planning_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Post-Quantum Readiness evidence for \"CNSA 2.0 compliance planning\" (for national-security-relevant systems: the cnsa 2.0 migration plan + the algorithm-transition timeline (cnsa 2.0 category deadlines — software/firmware signing first, then broader)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"CNSA 2.0 compliance planning\" control for Post-Quantum Readiness at AcmeCorp. THE TEST: Verify systems subject to CNSA 2.0 have a compliant migration plan + are on track. PASS: CNSA-2.0-in-scope systems (national-security systems / their suppliers) are inventoried; a plan adopts the CNSA 2.0 algorithm suite (ML-KEM-1024, ML-DSA, AES-256, SHA-384/512) against the published category deadlines (software/firmware signing first); and status tracks the milestones. Exceptions: CNSA-2.0-in-scope systems with no migration plan, missing the published milestones (e.g. the signing deadline), and adopting non-CNSA-2.0 parameter sets where CNSA 2.0 applies. The evidence — For national-security-relevant systems: the CNSA 2.0 migration plan + the algorithm-transition timeline (CNSA 2.0 category deadlines — software/firmware signing first, then broader) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live The CNSA-2.0-scope inventory APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. The CNSA-2.0-scope inventory gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from The CNSA-2.0-scope inventory; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Post-Quantum Readiness: \"CNSA 2.0 compliance planning\" Audit Evidence\n\nThe test:\nVerify systems subject to CNSA 2.0 have a compliant migration plan + are on track. PASS: CNSA-2.0-in-scope systems (national-security systems / their suppliers) are inventoried; a plan adopts the CNSA 2.0 algorithm suite (ML-KEM-1024, ML-DSA, AES-256, SHA-384/512) against the published category deadlines (software/firmware signing first); and status tracks the milestones. Exceptions: CNSA-2.0-in-scope systems with no migration plan, missing the published milestones (e.g. the signing deadline), and adopting non-CNSA-2.0 parameter sets where CNSA 2.0 applies.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- pqc-readiness_inventory.json   (in-scope items — For national-security-relevant systems: the CNSA 2.0 migration plan + the algorithm-transition timeline (CNSA 2.0 category deadlines — software/firmware signing first, then broader))\n- pqc-readiness_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"CNSA 2.0 compliance planning\",\n  \"domain\": \"Post-Quantum Readiness\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{pqc_",
        "/evidence/pqc-readiness_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Crypto / PKI team\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"CNSA 2.0 compliance planning\" control must cover\n# fragment: cnsa_20_compliance_",
        "/evidence/pqc-readiness_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "pqc-readiness_inventory.json",
            "isDir": false
          },
          {
            "name": "pqc-readiness_state.json",
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
          "value": "FLAG{pqc_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/pqc-readiness_inventory.json",
          "value": "cnsa_20_compliance_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/pqc-readiness_state.json",
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
          "id": "pqc-11-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"CNSA 2.0 compliance planning\" sub-process of Post-Quantum Readiness?",
          "options": [
            "Deploy and operate the cnsa 2.0 compliance planning control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the cnsa 2.0 compliance planning control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for cnsa 2.0 compliance planning against comparable organisations in the sector",
            "Obtain evidence that the cnsa 2.0 compliance planning control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "pqc-11-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"CNSA 2.0 compliance planning\" matter to the broader Post-Quantum Readiness posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Post-Quantum Readiness",
            "It stops mattering once a firewall and endpoint agent are deployed across the Post-Quantum Readiness estate",
            "It is a control other Post-Quantum Readiness controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Post-Quantum Readiness controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "pqc-11-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"CNSA 2.0 compliance planning\" control?",
          "options": [
            "A point-in-time screenshot of one system's cnsa 2.0 compliance planning settings, captured during the walkthrough",
            "The For national-security-relevant systems: the CNSA 2.0 migration plan + the algorithm-transition timeline (CNSA 2.0 category deadlines — software/firmware signing first, then broader), reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the cnsa 2.0 compliance planning control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's cnsa 2.0 compliance planning capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "pqc-11-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"CNSA 2.0 compliance planning\"?",
          "options": [
            "From The CNSA-2.0-scope inventory and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how cnsa 2.0 compliance planning works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. The CNSA-2.0-scope inventory) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "pqc-11-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"CNSA 2.0 compliance planning\"?",
          "options": [
            "The external audit firm, since it is the party examining the cnsa 2.0 compliance planning control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the cnsa 2.0 compliance planning data is shared, so the accountability sits with no one in particular",
            "Cryptography team + Compliance, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Cryptography team + Compliance owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "pqc-11-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"CNSA 2.0 compliance planning\", which part stays with the human auditor?",
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
          "id": "pqc-11-q7",
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
          "id": "pqc-11-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"CNSA 2.0 compliance planning\", which of these is a realistic reportable finding?",
          "options": [
            "Systems supplying a national-security customer are in CNSA 2.0 scope but have no migration plan and will miss the software/firmware-signing deadline, with code-signing still on classical RSA/ECDSA.",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. Systems supplying a national-security customer are in CNSA 2.0 scope but have no migration plan and will miss the software/firmware-signing deadline, with code-signing still on classical RSA/ECDSA. A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "pqc-11-q9",
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
          "id": "pqc-11-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"CNSA 2.0 compliance planning\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind cnsa 2.0 compliance planning, so there is no overlap",
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
    "epochId": "pqc-readiness",
    "id": "pqc-12",
    "order": 12,
    "title": "Standards monitoring (IETF, NIST)",
    "subtitle": "Agentic technical & privacy audit of the standards monitoring (ietf, nist) control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 8,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Standards monitoring (IETF, NIST)\" control for Post-Quantum Readiness is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify the org tracks evolving PQC standards + acts on them. PASS: PQC standards development (NIST, IETF, ETSI, ISO) is monitored by an owner; new/updated standards are assessed for impact + adopted into the plan; and there's a defined process to incorporate changes (new algorithms, parameter updates, deprecations). Exceptions: no standards monitoring, no owner, standards changes that don't reach the migration plan, and decisions made on outdated/draft standards.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Post-Quantum Readiness systems of record (Standards-tracking process; The migration plan (update mechanism); Standards sources (NIST / IETF / ETSI / ISO)) as tools — e.g. `confirm monitoring of PQC standards (NIST PQC, IETF drafts/RFCs, ETSI,`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "Evidence the org monitors PQC standards development (NIST PQC standardisation, IETF protocol drafts/RFCs, ETSI, ISO)",
        "The process to assess + adopt new/updated standards (a new algorithm, a parameter set, an HNDL advisory)",
        "Assigned ownership / liaison for standards tracking",
        "How standards changes flow into the migration plan"
      ],
      "system": [
        "Standards-tracking process",
        "The migration plan (update mechanism)",
        "Standards sources (NIST / IETF / ETSI / ISO)"
      ],
      "dataOwner": [
        "Cryptography team / standards liaison",
        "Enterprise architecture",
        "Security"
      ],
      "scoring": {
        "ease": "EASE 8/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Post-Quantum Readiness controls."
      }
    },
    "badge": {
      "id": "pqc-12-badge",
      "name": "Post-Quantum Readiness Auditor",
      "emoji": "🧮"
    },
    "wonder": {
      "name": "Standards monitoring (IETF, NIST)",
      "location": "Post-Quantum Readiness",
      "era": "Present Day",
      "emoji": "🧮"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Standards monitoring (IETF, NIST)\" as a repeatable agentic workflow: pull the real evidence (Evidence the org monitors PQC standards development (NIST PQC standardisation, IETF protocol drafts/RFCs, ETSI, ISO)) with read-only agents, run the test against policy, and issue a defensible opinion on the Post-Quantum Readiness control.",
      "year": 2025,
      "overview": [
        "The \"Standards monitoring (IETF, NIST)\" sub-process is one of the controls an auditor must verify for Post-Quantum Readiness. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me evidence the org monitors PQC standards development (NIST PQC standardisation, IETF protocol drafts/RFCs, ETSI, ISO), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Standards-tracking process, The migration plan (update mechanism), Standards sources (NIST / IETF / ETSI / ISO) — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `confirm monitoring of PQC standards (NIST PQC, IETF drafts/RFCs, ETSI, ISO)` — read-only, against the systems of record.",
        "The test itself is specific. Verify the org tracks evolving PQC standards + acts on them. PASS: PQC standards development (NIST, IETF, ETSI, ISO) is monitored by an owner; new/updated standards are assessed for impact + adopted into the plan; and there's a defined process to incorporate changes (new algorithms, parameter updates, deprecations). Exceptions: no standards monitoring, no owner, standards changes that don't reach the migration plan, and decisions made on outdated/draft standards. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `12_standards_monitoring_ietf_nist_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Standards-tracking process and The migration plan (update mechanism) (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 12_standards_monitoring_ietf_nist_mcp.py` to expose it to your agent — or `python 12_standards_monitoring_ietf_nist_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Harvest now, decrypt later",
        "when": "Ongoing",
        "where": "Long-lived encrypted data + comms",
        "impact": "Adversaries record encrypted traffic today to decrypt once a cryptographically relevant quantum computer exists — long-lived secrets are already at risk.",
        "body": [
          "HNDL makes PQC migration urgent for data that must stay confidential for years: it can be captured now and broken later.",
          "Auditors verify cryptographic inventory/CBOM, long-lived data identification, crypto agility, PQC migration of comms, and CNSA 2.0 / NIST alignment."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Post-Quantum Readiness scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull Standards-tracking process · The migration plan (update mechanism)",
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
          "event": "NIST finalizes FIPS 203/204/205 PQC standards",
          "highlight": true
        },
        {
          "year": 2022,
          "event": "CNSA 2.0 sets quantum-resistant migration timelines for NSS"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Standards monitoring (IETF, NIST)\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "confirm monitoring of PQC standards (NIST PQC, IETF drafts/RFCs, ETSI, ISO)\nthe process to assess + adopt new/updated standards\nassigned owner / standards liaison\nhow standards changes flow into the migration plan"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: Evidence the org monitors PQC standards development (NIST PQC standardisation, IETF protocol drafts/RFCs, ETSI, ISO).",
        "The test: Verify the org tracks evolving PQC standards + acts on them.",
        "Reconcile the systems of record (Standards-tracking process, The migration plan (update mechanism), Standards sources (NIST / IETF / ETSI / ISO)) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. No one tracks PQC standards, so the org's pilot used a draft parameter set that the final standard changed, and a relevant new NIST algorithm + an IETF RFC went unnoticed."
      ],
      "references": [
        {
          "title": "NIST Post-Quantum Cryptography Project",
          "url": "https://csrc.nist.gov/projects/post-quantum-cryptography"
        },
        {
          "title": "ETSI Quantum-Safe Cryptography",
          "url": "https://www.etsi.org/technologies/quantum-safe-cryptography"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "12_standards_monitoring_ietf_nist_mcp.py",
          "url": "/audit-code/pqc-readiness/12_standards_monitoring_ietf_nist_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Post-Quantum Readiness evidence for \"Standards monitoring (IETF, NIST)\" (evidence the org monitors pqc standards development (nist pqc standardisation, ietf protocol drafts/rfcs, etsi, iso)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Standards monitoring (IETF, NIST)\" control for Post-Quantum Readiness at AcmeCorp. THE TEST: Verify the org tracks evolving PQC standards + acts on them. PASS: PQC standards development (NIST, IETF, ETSI, ISO) is monitored by an owner; new/updated standards are assessed for impact + adopted into the plan; and there's a defined process to incorporate changes (new algorithms, parameter updates, deprecations). Exceptions: no standards monitoring, no owner, standards changes that don't reach the migration plan, and decisions made on outdated/draft standards. The evidence — Evidence the org monitors PQC standards development (NIST PQC standardisation, IETF protocol drafts/RFCs, ETSI, ISO) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Standards-tracking process APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Standards-tracking process gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Standards-tracking process; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Post-Quantum Readiness: \"Standards monitoring (IETF, NIST)\" Audit Evidence\n\nThe test:\nVerify the org tracks evolving PQC standards + acts on them. PASS: PQC standards development (NIST, IETF, ETSI, ISO) is monitored by an owner; new/updated standards are assessed for impact + adopted into the plan; and there's a defined process to incorporate changes (new algorithms, parameter updates, deprecations). Exceptions: no standards monitoring, no owner, standards changes that don't reach the migration plan, and decisions made on outdated/draft standards.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- pqc-readiness_inventory.json   (in-scope items — Evidence the org monitors PQC standards development (NIST PQC standardisation, IETF protocol drafts/RFCs, ETSI, ISO))\n- pqc-readiness_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Standards monitoring (IETF, NIST)\",\n  \"domain\": \"Post-Quantum Readiness\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{pqc_",
        "/evidence/pqc-readiness_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Crypto / PKI team\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Standards monitoring (IETF, NIST)\" control must cover\n# fragment: standards_monitoring_ietf_",
        "/evidence/pqc-readiness_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "pqc-readiness_inventory.json",
            "isDir": false
          },
          {
            "name": "pqc-readiness_state.json",
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
          "value": "FLAG{pqc_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/pqc-readiness_inventory.json",
          "value": "standards_monitoring_ietf_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/pqc-readiness_state.json",
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
          "id": "pqc-12-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Standards monitoring (IETF, NIST)\" sub-process of Post-Quantum Readiness?",
          "options": [
            "Deploy and operate the standards monitoring (ietf, nist) control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the standards monitoring (ietf, nist) control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for standards monitoring (ietf, nist) against comparable organisations in the sector",
            "Obtain evidence that the standards monitoring (ietf, nist) control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "pqc-12-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Standards monitoring (IETF, NIST)\" matter to the broader Post-Quantum Readiness posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Post-Quantum Readiness",
            "It stops mattering once a firewall and endpoint agent are deployed across the Post-Quantum Readiness estate",
            "It is a control other Post-Quantum Readiness controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Post-Quantum Readiness controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "pqc-12-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Standards monitoring (IETF, NIST)\" control?",
          "options": [
            "A point-in-time screenshot of one system's standards monitoring (ietf, nist) settings, captured during the walkthrough",
            "The Evidence the org monitors PQC standards development (NIST PQC standardisation, IETF protocol drafts/RFCs, ETSI, ISO), reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the standards monitoring (ietf, nist) control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's standards monitoring (ietf, nist) capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "pqc-12-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Standards monitoring (IETF, NIST)\"?",
          "options": [
            "From Standards-tracking process and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how standards monitoring (ietf, nist) works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. Standards-tracking process) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "pqc-12-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Standards monitoring (IETF, NIST)\"?",
          "options": [
            "The external audit firm, since it is the party examining the standards monitoring (ietf, nist) control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the standards monitoring (ietf, nist) data is shared, so the accountability sits with no one in particular",
            "Cryptography team / standards liaison, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Cryptography team / standards liaison owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "pqc-12-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Standards monitoring (IETF, NIST)\", which part stays with the human auditor?",
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
          "id": "pqc-12-q7",
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
          "id": "pqc-12-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Standards monitoring (IETF, NIST)\", which of these is a realistic reportable finding?",
          "options": [
            "No one tracks PQC standards, so the org's pilot used a draft parameter set that the final standard changed, and a relevant new NIST algorithm + an IETF RFC went unnoticed.",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. No one tracks PQC standards, so the org's pilot used a draft parameter set that the final standard changed, and a relevant new NIST algorithm + an IETF RFC went unnoticed. A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "pqc-12-q9",
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
          "id": "pqc-12-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Standards monitoring (IETF, NIST)\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind standards monitoring (ietf, nist), so there is no overlap",
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
    "epochId": "pqc-readiness",
    "id": "pqc-13",
    "order": 13,
    "title": "Regional standards alignment",
    "subtitle": "Agentic technical & privacy audit of the regional standards alignment control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 5,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Regional standards alignment\" control for Post-Quantum Readiness is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify PQC migration aligns to all applicable regional standards. PASS: the regional/national PQC standards relevant to where the org operates (NIST/CNSA, ENISA/BSI, NCSC, ANSSI) are identified; conflicting requirements are reconciled; and the plan satisfies each jurisdiction (algorithm + timeline). Exceptions: regional standards unidentified, conflicts between jurisdictions unaddressed, and the migration plan aligned to only one region.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Post-Quantum Readiness systems of record (GRC (regional standards mapping); The migration plan; Regional standards (NIST/CNSA, BSI, NCSC, ANSSI)) as tools — e.g. `map regional/national PQC standards per jurisdiction (NIST/CNSA, ENISA`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The mapping of regional/national PQC standards + recommendations the org must follow (US NIST/CNSA, EU/ENISA + BSI, UK NCSC, ANSSI) per where it operates",
        "Reconciliation where regional standards differ (algorithm choices, timelines)",
        "The plan to satisfy multiple jurisdictions' PQC requirements",
        "Evidence regional requirements flow into the migration + product decisions"
      ],
      "system": [
        "GRC (regional standards mapping)",
        "The migration plan",
        "Regional standards (NIST/CNSA, BSI, NCSC, ANSSI)"
      ],
      "dataOwner": [
        "Cryptography + Compliance",
        "Legal (per region)",
        "Enterprise architecture"
      ],
      "scoring": {
        "ease": "EASE 5/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Post-Quantum Readiness controls."
      }
    },
    "badge": {
      "id": "pqc-13-badge",
      "name": "Post-Quantum Readiness Auditor",
      "emoji": "🧮"
    },
    "wonder": {
      "name": "Regional standards alignment",
      "location": "Post-Quantum Readiness",
      "era": "Present Day",
      "emoji": "🧮"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Regional standards alignment\" as a repeatable agentic workflow: pull the real evidence (The mapping of regional/national PQC standards + recommendations the org must follow (US NIST/CNSA, EU/ENISA + BSI, UK NCSC, ANSSI) per where it operates) with read-only agents, run the test against policy, and issue a defensible opinion on the Post-Quantum Readiness control.",
      "year": 2025,
      "overview": [
        "The \"Regional standards alignment\" sub-process is one of the controls an auditor must verify for Post-Quantum Readiness. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the mapping of regional/national PQC standards + recommendations the org must follow (US NIST/CNSA, EU/ENISA + BSI, UK NCSC, ANSSI) per where it operates, for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here GRC (regional standards mapping), The migration plan, Regional standards (NIST/CNSA, BSI, NCSC, ANSSI) — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `map regional/national PQC standards per jurisdiction (NIST/CNSA, ENISA/BSI, UK N` — read-only, against the systems of record.",
        "The test itself is specific. Verify PQC migration aligns to all applicable regional standards. PASS: the regional/national PQC standards relevant to where the org operates (NIST/CNSA, ENISA/BSI, NCSC, ANSSI) are identified; conflicting requirements are reconciled; and the plan satisfies each jurisdiction (algorithm + timeline). Exceptions: regional standards unidentified, conflicts between jurisdictions unaddressed, and the migration plan aligned to only one region. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `13_regional_standards_alignment_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from GRC (regional standards mapping) and The migration plan (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 13_regional_standards_alignment_mcp.py` to expose it to your agent — or `python 13_regional_standards_alignment_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Harvest now, decrypt later",
        "when": "Ongoing",
        "where": "Long-lived encrypted data + comms",
        "impact": "Adversaries record encrypted traffic today to decrypt once a cryptographically relevant quantum computer exists — long-lived secrets are already at risk.",
        "body": [
          "HNDL makes PQC migration urgent for data that must stay confidential for years: it can be captured now and broken later.",
          "Auditors verify cryptographic inventory/CBOM, long-lived data identification, crypto agility, PQC migration of comms, and CNSA 2.0 / NIST alignment."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Post-Quantum Readiness scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull GRC (regional standards mapping) · The migration plan",
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
          "event": "NIST finalizes FIPS 203/204/205 PQC standards",
          "highlight": true
        },
        {
          "year": 2022,
          "event": "CNSA 2.0 sets quantum-resistant migration timelines for NSS"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Regional standards alignment\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "map regional/national PQC standards per jurisdiction (NIST/CNSA, ENISA/BSI, UK NCSC, ANSSI)\nreconcile where they differ (algorithm choices, timelines)\nthe plan to satisfy multiple jurisdictions\ndo regional requirements flow into migration + product decisions?"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The mapping of regional/national PQC standards + recommendations the org must follow (US NIST/CNSA, EU/ENISA + BSI, UK NCSC, ANSSI) per where it operates.",
        "The test: Verify PQC migration aligns to all applicable regional standards.",
        "Reconcile the systems of record (GRC (regional standards mapping), The migration plan, Regional standards (NIST/CNSA, BSI, NCSC, ANSSI)) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. The migration aligns only to NIST guidance; the org also operates in the EU and Germany where BSI recommends specific schemes/parameters, and that divergence hasn't been reconciled into the plan."
      ],
      "references": [
        {
          "title": "BSI — Quantum-Safe Cryptography",
          "url": "https://www.bsi.bund.de/EN/Themen/Unternehmen-und-Organisationen/Informationen-und-Empfehlungen/Quantentechnologien-und-Post-Quanten-Kryptografie/post-quanten-kryptografie_node.html"
        },
        {
          "title": "UK NCSC — PQC",
          "url": "https://www.ncsc.gov.uk/whitepaper/preparing-for-quantum-safe-cryptography"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "13_regional_standards_alignment_mcp.py",
          "url": "/audit-code/pqc-readiness/13_regional_standards_alignment_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Post-Quantum Readiness evidence for \"Regional standards alignment\" (the mapping of regional/national pqc standards + recommendations the org must follow (us nist/cnsa, eu/enisa + bsi, uk ncsc, anssi) per where it operates), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Regional standards alignment\" control for Post-Quantum Readiness at AcmeCorp. THE TEST: Verify PQC migration aligns to all applicable regional standards. PASS: the regional/national PQC standards relevant to where the org operates (NIST/CNSA, ENISA/BSI, NCSC, ANSSI) are identified; conflicting requirements are reconciled; and the plan satisfies each jurisdiction (algorithm + timeline). Exceptions: regional standards unidentified, conflicts between jurisdictions unaddressed, and the migration plan aligned to only one region. The evidence — The mapping of regional/national PQC standards + recommendations the org must follow (US NIST/CNSA, EU/ENISA + BSI, UK NCSC, ANSSI) per where it operates — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live GRC (regional standards mapping) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. GRC (regional standards mapping) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from GRC (regional standards mapping); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Post-Quantum Readiness: \"Regional standards alignment\" Audit Evidence\n\nThe test:\nVerify PQC migration aligns to all applicable regional standards. PASS: the regional/national PQC standards relevant to where the org operates (NIST/CNSA, ENISA/BSI, NCSC, ANSSI) are identified; conflicting requirements are reconciled; and the plan satisfies each jurisdiction (algorithm + timeline). Exceptions: regional standards unidentified, conflicts between jurisdictions unaddressed, and the migration plan aligned to only one region.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- pqc-readiness_inventory.json   (in-scope items — The mapping of regional/national PQC standards + recommendations the org must follow (US NIST/CNSA, EU/ENISA + BSI, UK NCSC, ANSSI) per where it operates)\n- pqc-readiness_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Regional standards alignment\",\n  \"domain\": \"Post-Quantum Readiness\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{pqc_",
        "/evidence/pqc-readiness_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Crypto / PKI team\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Regional standards alignment\" control must cover\n# fragment: regional_standards_alignment_",
        "/evidence/pqc-readiness_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "pqc-readiness_inventory.json",
            "isDir": false
          },
          {
            "name": "pqc-readiness_state.json",
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
          "value": "FLAG{pqc_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/pqc-readiness_inventory.json",
          "value": "regional_standards_alignment_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/pqc-readiness_state.json",
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
          "id": "pqc-13-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Regional standards alignment\" sub-process of Post-Quantum Readiness?",
          "options": [
            "Deploy and operate the regional standards alignment control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the regional standards alignment control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for regional standards alignment against comparable organisations in the sector",
            "Obtain evidence that the regional standards alignment control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "pqc-13-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Regional standards alignment\" matter to the broader Post-Quantum Readiness posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Post-Quantum Readiness",
            "It stops mattering once a firewall and endpoint agent are deployed across the Post-Quantum Readiness estate",
            "It is a control other Post-Quantum Readiness controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Post-Quantum Readiness controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "pqc-13-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Regional standards alignment\" control?",
          "options": [
            "A point-in-time screenshot of one system's regional standards alignment settings, captured during the walkthrough",
            "The The mapping of regional/national PQC standards + recommendations the org must follow (US NIST/CNSA, EU/ENISA + BSI, UK NCSC, ANSSI) per where it operates, reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the regional standards alignment control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's regional standards alignment capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "pqc-13-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Regional standards alignment\"?",
          "options": [
            "From GRC (regional standards mapping) and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how regional standards alignment works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. GRC (regional standards mapping)) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "pqc-13-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Regional standards alignment\"?",
          "options": [
            "The external audit firm, since it is the party examining the regional standards alignment control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the regional standards alignment data is shared, so the accountability sits with no one in particular",
            "Cryptography + Compliance, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Cryptography + Compliance owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "pqc-13-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Regional standards alignment\", which part stays with the human auditor?",
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
          "id": "pqc-13-q7",
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
          "id": "pqc-13-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Regional standards alignment\", which of these is a realistic reportable finding?",
          "options": [
            "The migration aligns only to NIST guidance; the org also operates in the EU and Germany where BSI recommends specific schemes/parameters, and that divergence hasn't been reconciled into the plan.",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. The migration aligns only to NIST guidance; the org also operates in the EU and Germany where BSI recommends specific schemes/parameters, and that divergence hasn't been reconciled into the plan. A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "pqc-13-q9",
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
          "id": "pqc-13-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Regional standards alignment\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind regional standards alignment, so there is no overlap",
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
    "epochId": "pqc-readiness",
    "id": "pqc-14",
    "order": 14,
    "title": "Trust store updates",
    "subtitle": "Agentic technical & privacy audit of the trust store updates control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 6,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Trust store updates\" control for Post-Quantum Readiness is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify trust stores can be updated for PQC. PASS: trust stores across the estate (OS/browser/app/device) are inventoried; there's a process + capability to distribute new PQC/hybrid CA roots + intermediates; constrained/embedded devices have a trust-store update path; and the mechanism is tested. Exceptions: no trust-store inventory, no process to roll out PQC roots, embedded/IoT devices with un-updatable trust stores (stuck on classical roots), and an untested update mechanism.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Post-Quantum Readiness systems of record (Trust stores (OS / browser / app / device); PKI (PQC root issuance); Device-management / update mechanisms) as tools — e.g. `inventory trust stores (OS / browser / app / device CA stores)`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The inventory of trust stores (OS, browser, application, device CA trust stores) + the process to update them for PQC roots/intermediates",
        "The plan to issue/distribute PQC (or hybrid) CA roots + the rollout to clients",
        "Update capability for constrained/embedded devices' trust stores (the hard case)",
        "Evidence trust-store update mechanisms exist + are tested"
      ],
      "system": [
        "Trust stores (OS / browser / app / device)",
        "PKI (PQC root issuance)",
        "Device-management / update mechanisms"
      ],
      "dataOwner": [
        "PKI / Cryptography team",
        "Endpoint + device management",
        "Platform"
      ],
      "scoring": {
        "ease": "EASE 6/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Post-Quantum Readiness controls."
      }
    },
    "badge": {
      "id": "pqc-14-badge",
      "name": "Post-Quantum Readiness Auditor",
      "emoji": "🧮"
    },
    "wonder": {
      "name": "Trust store updates",
      "location": "Post-Quantum Readiness",
      "era": "Present Day",
      "emoji": "🧮"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Trust store updates\" as a repeatable agentic workflow: pull the real evidence (The inventory of trust stores (OS, browser, application, device CA trust stores) + the process to update them for PQC roots/intermediates) with read-only agents, run the test against policy, and issue a defensible opinion on the Post-Quantum Readiness control.",
      "year": 2025,
      "overview": [
        "The \"Trust store updates\" sub-process is one of the controls an auditor must verify for Post-Quantum Readiness. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the inventory of trust stores (OS, browser, application, device CA trust stores) + the process to update them for PQC roots/intermediates, for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Trust stores (OS / browser / app / device), PKI (PQC root issuance), Device-management / update mechanisms — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `inventory trust stores (OS / browser / app / device CA stores)` — read-only, against the systems of record.",
        "The test itself is specific. Verify trust stores can be updated for PQC. PASS: trust stores across the estate (OS/browser/app/device) are inventoried; there's a process + capability to distribute new PQC/hybrid CA roots + intermediates; constrained/embedded devices have a trust-store update path; and the mechanism is tested. Exceptions: no trust-store inventory, no process to roll out PQC roots, embedded/IoT devices with un-updatable trust stores (stuck on classical roots), and an untested update mechanism. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `14_trust_store_updates_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Trust stores (OS / browser / app / device) and PKI (PQC root issuance) (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 14_trust_store_updates_mcp.py` to expose it to your agent — or `python 14_trust_store_updates_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Harvest now, decrypt later",
        "when": "Ongoing",
        "where": "Long-lived encrypted data + comms",
        "impact": "Adversaries record encrypted traffic today to decrypt once a cryptographically relevant quantum computer exists — long-lived secrets are already at risk.",
        "body": [
          "HNDL makes PQC migration urgent for data that must stay confidential for years: it can be captured now and broken later.",
          "Auditors verify cryptographic inventory/CBOM, long-lived data identification, crypto agility, PQC migration of comms, and CNSA 2.0 / NIST alignment."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Post-Quantum Readiness scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull Trust stores (OS / browser / app / device) · PKI (PQC root issuance)",
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
          "event": "NIST finalizes FIPS 203/204/205 PQC standards",
          "highlight": true
        },
        {
          "year": 2022,
          "event": "CNSA 2.0 sets quantum-resistant migration timelines for NSS"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Trust store updates\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "inventory trust stores (OS / browser / app / device CA stores)\nprocess + capability to distribute new PQC / hybrid CA roots + intermediates\ntrust-store update path for constrained/embedded devices (the hard case)\ntest the update mechanism"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The inventory of trust stores (OS, browser, application, device CA trust stores) + the process to update them for PQC roots/intermediates.",
        "The test: Verify trust stores can be updated for PQC.",
        "Reconcile the systems of record (Trust stores (OS / browser / app / device), PKI (PQC root issuance), Device-management / update mechanisms) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. There's no inventory of trust stores and no process to push new roots; thousands of embedded devices have hardcoded classical CA trust with no update mechanism, so they can never trust a PQC root."
      ],
      "references": [
        {
          "title": "NIST SP 1800-38",
          "url": "https://www.nccoe.nist.gov/crypto-agility-considerations-migrating-post-quantum-cryptographic-algorithms"
        },
        {
          "title": "CA/Browser Forum",
          "url": "https://cabforum.org/"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "14_trust_store_updates_mcp.py",
          "url": "/audit-code/pqc-readiness/14_trust_store_updates_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Post-Quantum Readiness evidence for \"Trust store updates\" (the inventory of trust stores (os, browser, application, device ca trust stores) + the process to update them for pqc roots/intermediates), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Trust store updates\" control for Post-Quantum Readiness at AcmeCorp. THE TEST: Verify trust stores can be updated for PQC. PASS: trust stores across the estate (OS/browser/app/device) are inventoried; there's a process + capability to distribute new PQC/hybrid CA roots + intermediates; constrained/embedded devices have a trust-store update path; and the mechanism is tested. Exceptions: no trust-store inventory, no process to roll out PQC roots, embedded/IoT devices with un-updatable trust stores (stuck on classical roots), and an untested update mechanism. The evidence — The inventory of trust stores (OS, browser, application, device CA trust stores) + the process to update them for PQC roots/intermediates — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Trust stores (OS / browser / app / device) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Trust stores (OS / browser / app / device) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Trust stores (OS / browser / app / device); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Post-Quantum Readiness: \"Trust store updates\" Audit Evidence\n\nThe test:\nVerify trust stores can be updated for PQC. PASS: trust stores across the estate (OS/browser/app/device) are inventoried; there's a process + capability to distribute new PQC/hybrid CA roots + intermediates; constrained/embedded devices have a trust-store update path; and the mechanism is tested. Exceptions: no trust-store inventory, no process to roll out PQC roots, embedded/IoT devices with un-updatable trust stores (stuck on classical roots), and an untested update mechanism.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- pqc-readiness_inventory.json   (in-scope items — The inventory of trust stores (OS, browser, application, device CA trust stores) + the process to update them for PQC roots/intermediates)\n- pqc-readiness_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Trust store updates\",\n  \"domain\": \"Post-Quantum Readiness\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{pqc_",
        "/evidence/pqc-readiness_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Crypto / PKI team\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Trust store updates\" control must cover\n# fragment: trust_store_updates_",
        "/evidence/pqc-readiness_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "pqc-readiness_inventory.json",
            "isDir": false
          },
          {
            "name": "pqc-readiness_state.json",
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
          "value": "FLAG{pqc_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/pqc-readiness_inventory.json",
          "value": "trust_store_updates_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/pqc-readiness_state.json",
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
          "id": "pqc-14-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Trust store updates\" sub-process of Post-Quantum Readiness?",
          "options": [
            "Deploy and operate the trust store updates control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the trust store updates control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for trust store updates against comparable organisations in the sector",
            "Obtain evidence that the trust store updates control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "pqc-14-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Trust store updates\" matter to the broader Post-Quantum Readiness posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Post-Quantum Readiness",
            "It stops mattering once a firewall and endpoint agent are deployed across the Post-Quantum Readiness estate",
            "It is a control other Post-Quantum Readiness controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Post-Quantum Readiness controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "pqc-14-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Trust store updates\" control?",
          "options": [
            "A point-in-time screenshot of one system's trust store updates settings, captured during the walkthrough",
            "The The inventory of trust stores (OS, browser, application, device CA trust stores) + the process to update them for PQC roots/intermediates, reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the trust store updates control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's trust store updates capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "pqc-14-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Trust store updates\"?",
          "options": [
            "From Trust stores (OS / browser / app / device) and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how trust store updates works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. Trust stores (OS / browser / app / device)) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "pqc-14-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Trust store updates\"?",
          "options": [
            "The external audit firm, since it is the party examining the trust store updates control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the trust store updates data is shared, so the accountability sits with no one in particular",
            "PKI / Cryptography team, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "PKI / Cryptography team owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "pqc-14-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Trust store updates\", which part stays with the human auditor?",
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
          "id": "pqc-14-q7",
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
          "id": "pqc-14-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Trust store updates\", which of these is a realistic reportable finding?",
          "options": [
            "There's no inventory of trust stores and no process to push new roots; thousands of embedded devices have hardcoded classical CA trust with no update mechanism, so they can never trust a PQC root.",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. There's no inventory of trust stores and no process to push new roots; thousands of embedded devices have hardcoded classical CA trust with no update mechanism, so they can never trust a PQC root. A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "pqc-14-q9",
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
          "id": "pqc-14-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Trust store updates\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind trust store updates, so there is no overlap",
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
    "epochId": "pqc-readiness",
    "id": "pqc-15",
    "order": 15,
    "title": "Vendor PQC roadmap",
    "subtitle": "Agentic technical & privacy audit of the vendor pqc roadmap control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 7,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Vendor PQC roadmap\" control for Post-Quantum Readiness is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify the org tracks + drives its vendors' PQC readiness. PASS: critical crypto/security vendors' PQC roadmaps are tracked; the org's migration dependencies on vendor PQC delivery are mapped; the org actively engages vendors for commitments + timelines; and there's a contingency where a critical vendor is behind. Exceptions: vendor PQC roadmaps untracked, unmapped dependencies on vendor delivery (migration blocked by a vendor), no vendor engagement, and no contingency for a laggard critical vendor.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Post-Quantum Readiness systems of record (TPRM (vendor PQC roadmaps); The migration dependency map; Vendor engagement records) as tools — e.g. `track critical crypto/security vendors' PQC roadmaps (TLS/PKI/HSM/VPN/`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The tracked PQC roadmaps of critical crypto/security vendors (TLS/PKI/HSM/VPN/cloud providers)",
        "The dependency analysis (which parts of the org's migration depend on a vendor shipping PQC)",
        "Engagement evidence (the org pushing vendors for PQC commitments + timelines)",
        "Contingency where a critical vendor has no/late PQC roadmap"
      ],
      "system": [
        "TPRM (vendor PQC roadmaps)",
        "The migration dependency map",
        "Vendor engagement records"
      ],
      "dataOwner": [
        "Cryptography + vendor management",
        "Enterprise architecture",
        "Procurement"
      ],
      "scoring": {
        "ease": "EASE 7/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Post-Quantum Readiness controls."
      }
    },
    "badge": {
      "id": "pqc-15-badge",
      "name": "Post-Quantum Readiness Auditor",
      "emoji": "🧮"
    },
    "wonder": {
      "name": "Vendor PQC roadmap",
      "location": "Post-Quantum Readiness",
      "era": "Present Day",
      "emoji": "🧮"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Vendor PQC roadmap\" as a repeatable agentic workflow: pull the real evidence (The tracked PQC roadmaps of critical crypto/security vendors (TLS/PKI/HSM/VPN/cloud providers)) with read-only agents, run the test against policy, and issue a defensible opinion on the Post-Quantum Readiness control.",
      "year": 2025,
      "overview": [
        "The \"Vendor PQC roadmap\" sub-process is one of the controls an auditor must verify for Post-Quantum Readiness. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the tracked PQC roadmaps of critical crypto/security vendors (TLS/PKI/HSM/VPN/cloud providers), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here TPRM (vendor PQC roadmaps), The migration dependency map, Vendor engagement records — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `track critical crypto/security vendors' PQC roadmaps (TLS/PKI/HSM/VPN/cloud)` — read-only, against the systems of record.",
        "The test itself is specific. Verify the org tracks + drives its vendors' PQC readiness. PASS: critical crypto/security vendors' PQC roadmaps are tracked; the org's migration dependencies on vendor PQC delivery are mapped; the org actively engages vendors for commitments + timelines; and there's a contingency where a critical vendor is behind. Exceptions: vendor PQC roadmaps untracked, unmapped dependencies on vendor delivery (migration blocked by a vendor), no vendor engagement, and no contingency for a laggard critical vendor. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `15_vendor_pqc_roadmap_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from TPRM (vendor PQC roadmaps) and The migration dependency map (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 15_vendor_pqc_roadmap_mcp.py` to expose it to your agent — or `python 15_vendor_pqc_roadmap_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Harvest now, decrypt later",
        "when": "Ongoing",
        "where": "Long-lived encrypted data + comms",
        "impact": "Adversaries record encrypted traffic today to decrypt once a cryptographically relevant quantum computer exists — long-lived secrets are already at risk.",
        "body": [
          "HNDL makes PQC migration urgent for data that must stay confidential for years: it can be captured now and broken later.",
          "Auditors verify cryptographic inventory/CBOM, long-lived data identification, crypto agility, PQC migration of comms, and CNSA 2.0 / NIST alignment."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Post-Quantum Readiness scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull TPRM (vendor PQC roadmaps) · The migration dependency map",
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
          "event": "NIST finalizes FIPS 203/204/205 PQC standards",
          "highlight": true
        },
        {
          "year": 2022,
          "event": "CNSA 2.0 sets quantum-resistant migration timelines for NSS"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Vendor PQC roadmap\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "track critical crypto/security vendors' PQC roadmaps (TLS/PKI/HSM/VPN/cloud)\ndependency analysis: which migration steps depend on a vendor shipping PQC?\nengagement: is the org pushing vendors for PQC commitments + timelines?\ncontingency where a critical vendor has no / late PQC roadmap"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The tracked PQC roadmaps of critical crypto/security vendors (TLS/PKI/HSM/VPN/cloud providers).",
        "The test: Verify the org tracks + drives its vendors' PQC readiness.",
        "Reconcile the systems of record (TPRM (vendor PQC roadmaps), The migration dependency map, Vendor engagement records) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. The org's PQC migration is gated on its HSM and VPN vendors, neither of which has a committed PQC roadmap, and no one is engaging them or planning a contingency — so the migration is blocked with no owner."
      ],
      "references": [
        {
          "title": "NIST SP 800-161",
          "url": "https://csrc.nist.gov/pubs/sp/800/161/r1/final"
        },
        {
          "title": "CISA PQC",
          "url": "https://www.cisa.gov/quantum"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "15_vendor_pqc_roadmap_mcp.py",
          "url": "/audit-code/pqc-readiness/15_vendor_pqc_roadmap_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Post-Quantum Readiness evidence for \"Vendor PQC roadmap\" (the tracked pqc roadmaps of critical crypto/security vendors (tls/pki/hsm/vpn/cloud providers)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Vendor PQC roadmap\" control for Post-Quantum Readiness at AcmeCorp. THE TEST: Verify the org tracks + drives its vendors' PQC readiness. PASS: critical crypto/security vendors' PQC roadmaps are tracked; the org's migration dependencies on vendor PQC delivery are mapped; the org actively engages vendors for commitments + timelines; and there's a contingency where a critical vendor is behind. Exceptions: vendor PQC roadmaps untracked, unmapped dependencies on vendor delivery (migration blocked by a vendor), no vendor engagement, and no contingency for a laggard critical vendor. The evidence — The tracked PQC roadmaps of critical crypto/security vendors (TLS/PKI/HSM/VPN/cloud providers) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live TPRM (vendor PQC roadmaps) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. TPRM (vendor PQC roadmaps) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from TPRM (vendor PQC roadmaps); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Post-Quantum Readiness: \"Vendor PQC roadmap\" Audit Evidence\n\nThe test:\nVerify the org tracks + drives its vendors' PQC readiness. PASS: critical crypto/security vendors' PQC roadmaps are tracked; the org's migration dependencies on vendor PQC delivery are mapped; the org actively engages vendors for commitments + timelines; and there's a contingency where a critical vendor is behind. Exceptions: vendor PQC roadmaps untracked, unmapped dependencies on vendor delivery (migration blocked by a vendor), no vendor engagement, and no contingency for a laggard critical vendor.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- pqc-readiness_inventory.json   (in-scope items — The tracked PQC roadmaps of critical crypto/security vendors (TLS/PKI/HSM/VPN/cloud providers))\n- pqc-readiness_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Vendor PQC roadmap\",\n  \"domain\": \"Post-Quantum Readiness\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{pqc_",
        "/evidence/pqc-readiness_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Crypto / PKI team\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Vendor PQC roadmap\" control must cover\n# fragment: vendor_pqc_roadmap_",
        "/evidence/pqc-readiness_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "pqc-readiness_inventory.json",
            "isDir": false
          },
          {
            "name": "pqc-readiness_state.json",
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
          "value": "FLAG{pqc_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/pqc-readiness_inventory.json",
          "value": "vendor_pqc_roadmap_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/pqc-readiness_state.json",
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
          "id": "pqc-15-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Vendor PQC roadmap\" sub-process of Post-Quantum Readiness?",
          "options": [
            "Deploy and operate the vendor pqc roadmap control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the vendor pqc roadmap control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for vendor pqc roadmap against comparable organisations in the sector",
            "Obtain evidence that the vendor pqc roadmap control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "pqc-15-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Vendor PQC roadmap\" matter to the broader Post-Quantum Readiness posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Post-Quantum Readiness",
            "It stops mattering once a firewall and endpoint agent are deployed across the Post-Quantum Readiness estate",
            "It is a control other Post-Quantum Readiness controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Post-Quantum Readiness controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "pqc-15-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Vendor PQC roadmap\" control?",
          "options": [
            "A point-in-time screenshot of one system's vendor pqc roadmap settings, captured during the walkthrough",
            "The The tracked PQC roadmaps of critical crypto/security vendors (TLS/PKI/HSM/VPN/cloud providers), reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the vendor pqc roadmap control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's vendor pqc roadmap capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "pqc-15-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Vendor PQC roadmap\"?",
          "options": [
            "From TPRM (vendor PQC roadmaps) and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how vendor pqc roadmap works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. TPRM (vendor PQC roadmaps)) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "pqc-15-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Vendor PQC roadmap\"?",
          "options": [
            "The external audit firm, since it is the party examining the vendor pqc roadmap control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the vendor pqc roadmap data is shared, so the accountability sits with no one in particular",
            "Cryptography + vendor management, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Cryptography + vendor management owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "pqc-15-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Vendor PQC roadmap\", which part stays with the human auditor?",
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
          "id": "pqc-15-q7",
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
          "id": "pqc-15-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Vendor PQC roadmap\", which of these is a realistic reportable finding?",
          "options": [
            "The org's PQC migration is gated on its HSM and VPN vendors, neither of which has a committed PQC roadmap, and no one is engaging them or planning a contingency — so the migration is blocked with no owner.",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. The org's PQC migration is gated on its HSM and VPN vendors, neither of which has a committed PQC roadmap, and no one is engaging them or planning a contingency — so the migration is blocked with no owner. A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "pqc-15-q9",
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
          "id": "pqc-15-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Vendor PQC roadmap\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind vendor pqc roadmap, so there is no overlap",
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
    "epochId": "pqc-readiness",
    "id": "pqc-16",
    "order": 16,
    "title": "Third-party PKI dependency",
    "subtitle": "Agentic technical & privacy audit of the third-party pki dependency control",
    "category": "cybersecurity",
    "xp": 180,
    "easeScore": 5,
    "valueScore": 9,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Third-party PKI dependency\" control for Post-Quantum Readiness is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify external PKI dependencies won't block PQC. PASS: external PKI/CA dependencies are inventoried with their PQC readiness; the org understands which external roots/intermediates must go PQC for its chains; there's a plan/timeline (and alternatives if a CA lags); and bridge/cross-cert PKI is considered. Exceptions: unmapped external PKI dependencies, reliance on public/partner CAs with no PQC plan, no alternative if a critical CA is late, and ignored cross-certification PQC implications.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Post-Quantum Readiness systems of record (External CAs (public CAs, partner PKIs, cloud CAs); The org's certificate chains; Bridge / cross-cert PKI) as tools — e.g. `inventory external PKI/CA dependencies (public CAs, partner PKIs, clou`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The inventory of external PKI/CA dependencies (public CAs, partner PKIs, cloud-managed CAs) + their PQC readiness",
        "The dependency on external roots/intermediates that must become PQC for the org's chains to be PQC",
        "The plan + timeline for external PKI to support PQC (and the org's options if they lag)",
        "Cross-certification / bridge-PKI PQC considerations"
      ],
      "system": [
        "External CAs (public CAs, partner PKIs, cloud CAs)",
        "The org's certificate chains",
        "Bridge / cross-cert PKI"
      ],
      "dataOwner": [
        "PKI / Cryptography team",
        "Vendor risk",
        "Enterprise architecture"
      ],
      "scoring": {
        "ease": "EASE 5/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 9/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Post-Quantum Readiness controls."
      }
    },
    "badge": {
      "id": "pqc-16-badge",
      "name": "Post-Quantum Readiness Auditor",
      "emoji": "🧮"
    },
    "wonder": {
      "name": "Third-party PKI dependency",
      "location": "Post-Quantum Readiness",
      "era": "Present Day",
      "emoji": "🧮"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Third-party PKI dependency\" as a repeatable agentic workflow: pull the real evidence (The inventory of external PKI/CA dependencies (public CAs, partner PKIs, cloud-managed CAs) + their PQC readiness) with read-only agents, run the test against policy, and issue a defensible opinion on the Post-Quantum Readiness control.",
      "year": 2025,
      "overview": [
        "The \"Third-party PKI dependency\" sub-process is one of the controls an auditor must verify for Post-Quantum Readiness. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the inventory of external PKI/CA dependencies (public CAs, partner PKIs, cloud-managed CAs) + their PQC readiness, for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here External CAs (public CAs, partner PKIs, cloud CAs), The org's certificate chains, Bridge / cross-cert PKI — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `inventory external PKI/CA dependencies (public CAs, partner PKIs, cloud-managed ` — read-only, against the systems of record.",
        "The test itself is specific. Verify external PKI dependencies won't block PQC. PASS: external PKI/CA dependencies are inventoried with their PQC readiness; the org understands which external roots/intermediates must go PQC for its chains; there's a plan/timeline (and alternatives if a CA lags); and bridge/cross-cert PKI is considered. Exceptions: unmapped external PKI dependencies, reliance on public/partner CAs with no PQC plan, no alternative if a critical CA is late, and ignored cross-certification PQC implications. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `16_third_party_pki_dependency_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from External CAs (public CAs, partner PKIs, cloud CAs) and The org's certificate chains (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 16_third_party_pki_dependency_mcp.py` to expose it to your agent — or `python 16_third_party_pki_dependency_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Harvest now, decrypt later",
        "when": "Ongoing",
        "where": "Long-lived encrypted data + comms",
        "impact": "Adversaries record encrypted traffic today to decrypt once a cryptographically relevant quantum computer exists — long-lived secrets are already at risk.",
        "body": [
          "HNDL makes PQC migration urgent for data that must stay confidential for years: it can be captured now and broken later.",
          "Auditors verify cryptographic inventory/CBOM, long-lived data identification, crypto agility, PQC migration of comms, and CNSA 2.0 / NIST alignment."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Post-Quantum Readiness scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull External CAs (public CAs, partner PKIs, cloud CAs) · The org's certificate chains",
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
          "event": "NIST finalizes FIPS 203/204/205 PQC standards",
          "highlight": true
        },
        {
          "year": 2022,
          "event": "CNSA 2.0 sets quantum-resistant migration timelines for NSS"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Third-party PKI dependency\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "inventory external PKI/CA dependencies (public CAs, partner PKIs, cloud-managed CAs) + their PQC readiness\nwhich external roots/intermediates must go PQC for the org's chains?\nplan/timeline for external PKI PQC + the org's options if they lag\ncross-certification / bridge-PKI PQC considerations"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The inventory of external PKI/CA dependencies (public CAs, partner PKIs, cloud-managed CAs) + their PQC readiness.",
        "The test: Verify external PKI dependencies won't block PQC.",
        "Reconcile the systems of record (External CAs (public CAs, partner PKIs, cloud CAs), The org's certificate chains, Bridge / cross-cert PKI) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. The org's TLS chains depend on a public CA with no published PQC root timeline, and a partner's bridge PKI is classical-only — both must migrate before the org's chains can be PQC, and neither is tracked."
      ],
      "references": [
        {
          "title": "CA/Browser Forum",
          "url": "https://cabforum.org/"
        },
        {
          "title": "NIST SP 1800-38",
          "url": "https://www.nccoe.nist.gov/crypto-agility-considerations-migrating-post-quantum-cryptographic-algorithms"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "16_third_party_pki_dependency_mcp.py",
          "url": "/audit-code/pqc-readiness/16_third_party_pki_dependency_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Post-Quantum Readiness evidence for \"Third-party PKI dependency\" (the inventory of external pki/ca dependencies (public cas, partner pkis, cloud-managed cas) + their pqc readiness), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Third-party PKI dependency\" control for Post-Quantum Readiness at AcmeCorp. THE TEST: Verify external PKI dependencies won't block PQC. PASS: external PKI/CA dependencies are inventoried with their PQC readiness; the org understands which external roots/intermediates must go PQC for its chains; there's a plan/timeline (and alternatives if a CA lags); and bridge/cross-cert PKI is considered. Exceptions: unmapped external PKI dependencies, reliance on public/partner CAs with no PQC plan, no alternative if a critical CA is late, and ignored cross-certification PQC implications. The evidence — The inventory of external PKI/CA dependencies (public CAs, partner PKIs, cloud-managed CAs) + their PQC readiness — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live External CAs (public CAs, partner PKIs, cloud CAs) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. External CAs (public CAs, partner PKIs, cloud CAs) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from External CAs (public CAs, partner PKIs, cloud CAs); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Post-Quantum Readiness: \"Third-party PKI dependency\" Audit Evidence\n\nThe test:\nVerify external PKI dependencies won't block PQC. PASS: external PKI/CA dependencies are inventoried with their PQC readiness; the org understands which external roots/intermediates must go PQC for its chains; there's a plan/timeline (and alternatives if a CA lags); and bridge/cross-cert PKI is considered. Exceptions: unmapped external PKI dependencies, reliance on public/partner CAs with no PQC plan, no alternative if a critical CA is late, and ignored cross-certification PQC implications.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- pqc-readiness_inventory.json   (in-scope items — The inventory of external PKI/CA dependencies (public CAs, partner PKIs, cloud-managed CAs) + their PQC readiness)\n- pqc-readiness_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Third-party PKI dependency\",\n  \"domain\": \"Post-Quantum Readiness\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{pqc_",
        "/evidence/pqc-readiness_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Crypto / PKI team\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Third-party PKI dependency\" control must cover\n# fragment: thirdparty_pki_dependency_",
        "/evidence/pqc-readiness_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "pqc-readiness_inventory.json",
            "isDir": false
          },
          {
            "name": "pqc-readiness_state.json",
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
          "value": "FLAG{pqc_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/pqc-readiness_inventory.json",
          "value": "thirdparty_pki_dependency_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/pqc-readiness_state.json",
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
          "id": "pqc-16-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Third-party PKI dependency\" sub-process of Post-Quantum Readiness?",
          "options": [
            "Deploy and operate the third-party pki dependency control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the third-party pki dependency control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for third-party pki dependency against comparable organisations in the sector",
            "Obtain evidence that the third-party pki dependency control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "pqc-16-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Third-party PKI dependency\" matter to the broader Post-Quantum Readiness posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Post-Quantum Readiness",
            "It stops mattering once a firewall and endpoint agent are deployed across the Post-Quantum Readiness estate",
            "It is a control other Post-Quantum Readiness controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Post-Quantum Readiness controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "pqc-16-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Third-party PKI dependency\" control?",
          "options": [
            "A point-in-time screenshot of one system's third-party pki dependency settings, captured during the walkthrough",
            "The The inventory of external PKI/CA dependencies (public CAs, partner PKIs, cloud-managed CAs) + their PQC readiness, reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the third-party pki dependency control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's third-party pki dependency capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "pqc-16-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Third-party PKI dependency\"?",
          "options": [
            "From External CAs (public CAs, partner PKIs, cloud CAs) and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how third-party pki dependency works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. External CAs (public CAs, partner PKIs, cloud CAs)) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "pqc-16-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Third-party PKI dependency\"?",
          "options": [
            "The external audit firm, since it is the party examining the third-party pki dependency control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the third-party pki dependency data is shared, so the accountability sits with no one in particular",
            "PKI / Cryptography team, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "PKI / Cryptography team owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "pqc-16-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Third-party PKI dependency\", which part stays with the human auditor?",
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
          "id": "pqc-16-q7",
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
          "id": "pqc-16-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Third-party PKI dependency\", which of these is a realistic reportable finding?",
          "options": [
            "The org's TLS chains depend on a public CA with no published PQC root timeline, and a partner's bridge PKI is classical-only — both must migrate before the org's chains can be PQC, and neither is tracked.",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. The org's TLS chains depend on a public CA with no published PQC root timeline, and a partner's bridge PKI is classical-only — both must migrate before the org's chains can be PQC, and neither is tracked. A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "pqc-16-q9",
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
          "id": "pqc-16-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Third-party PKI dependency\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind third-party pki dependency, so there is no overlap",
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
    "epochId": "pqc-readiness",
    "id": "pqc-17",
    "order": 17,
    "title": "Secure product PQC readiness",
    "subtitle": "Agentic technical & privacy audit of the secure product pqc readiness control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 6,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Secure product PQC readiness\" control for Post-Quantum Readiness is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify the org's own products are on a PQC path (where it's a producer). PASS: products the org ships have their cryptography assessed for quantum vulnerability; a product PQC roadmap + customer commitments exist; shipped products are field-upgradeable to PQC (firmware/software update path); and long-lived product data/comms exposure is addressed. Exceptions: shipped products with quantum-vulnerable crypto and no roadmap, no customer-facing PQC commitment, products with un-upgradeable crypto (especially embedded/IoT), and long-secret product data on classical crypto.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Post-Quantum Readiness systems of record (The product's crypto + CBOM; The product roadmap; Field-update mechanism (firmware / software)) as tools — e.g. `assess the shipped product's cryptography for quantum vulnerability (p`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "For products the org builds/ships: the PQC readiness of the product's cryptography (the crypto customers depend on)",
        "The product PQC roadmap + customer-facing commitments",
        "Field-upgradeability of shipped products' crypto (can deployed products be updated to PQC)",
        "Long-lived product data/comms exposure (products protecting customer data long-term)"
      ],
      "system": [
        "The product's crypto + CBOM",
        "The product roadmap",
        "Field-update mechanism (firmware / software)"
      ],
      "dataOwner": [
        "Product engineering + Cryptography",
        "Product management (roadmap / commitments)",
        "AppSec"
      ],
      "scoring": {
        "ease": "EASE 6/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Post-Quantum Readiness controls."
      }
    },
    "badge": {
      "id": "pqc-17-badge",
      "name": "Post-Quantum Readiness Auditor",
      "emoji": "🧮"
    },
    "wonder": {
      "name": "Secure product PQC readiness",
      "location": "Post-Quantum Readiness",
      "era": "Present Day",
      "emoji": "🧮"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Secure product PQC readiness\" as a repeatable agentic workflow: pull the real evidence (For products the org builds/ships: the PQC readiness of the product's cryptography (the crypto customers depend on)) with read-only agents, run the test against policy, and issue a defensible opinion on the Post-Quantum Readiness control.",
      "year": 2025,
      "overview": [
        "The \"Secure product PQC readiness\" sub-process is one of the controls an auditor must verify for Post-Quantum Readiness. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me for products the org builds/ships: the PQC readiness of the product's cryptography (the crypto customers depend on), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here The product's crypto + CBOM, The product roadmap, Field-update mechanism (firmware / software) — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `assess the shipped product's cryptography for quantum vulnerability (product CBO` — read-only, against the systems of record.",
        "The test itself is specific. Verify the org's own products are on a PQC path (where it's a producer). PASS: products the org ships have their cryptography assessed for quantum vulnerability; a product PQC roadmap + customer commitments exist; shipped products are field-upgradeable to PQC (firmware/software update path); and long-lived product data/comms exposure is addressed. Exceptions: shipped products with quantum-vulnerable crypto and no roadmap, no customer-facing PQC commitment, products with un-upgradeable crypto (especially embedded/IoT), and long-secret product data on classical crypto. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `17_secure_product_pqc_readiness_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from The product's crypto + CBOM and The product roadmap (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 17_secure_product_pqc_readiness_mcp.py` to expose it to your agent — or `python 17_secure_product_pqc_readiness_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Harvest now, decrypt later",
        "when": "Ongoing",
        "where": "Long-lived encrypted data + comms",
        "impact": "Adversaries record encrypted traffic today to decrypt once a cryptographically relevant quantum computer exists — long-lived secrets are already at risk.",
        "body": [
          "HNDL makes PQC migration urgent for data that must stay confidential for years: it can be captured now and broken later.",
          "Auditors verify cryptographic inventory/CBOM, long-lived data identification, crypto agility, PQC migration of comms, and CNSA 2.0 / NIST alignment."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Post-Quantum Readiness scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull The product's crypto + CBOM · The product roadmap",
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
          "event": "NIST finalizes FIPS 203/204/205 PQC standards",
          "highlight": true
        },
        {
          "year": 2022,
          "event": "CNSA 2.0 sets quantum-resistant migration timelines for NSS"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Secure product PQC readiness\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "assess the shipped product's cryptography for quantum vulnerability (product CBOM)\nthe product PQC roadmap + customer-facing commitments\nfield-upgradeability: can deployed products be updated to PQC (firmware/software)?\nlong-lived product data/comms exposure (does the product protect customer data long-term?)"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: For products the org builds/ships: the PQC readiness of the product's cryptography (the crypto customers depend on).",
        "The test: Verify the org's own products are on a PQC path (where it's a producer).",
        "Reconcile the systems of record (The product's crypto + CBOM, The product roadmap, Field-update mechanism (firmware / software)) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. A shipped IoT product hardcodes ECC with no field-update capability, so the millions already deployed can never be made quantum-safe, and there's no PQC roadmap or customer commitment."
      ],
      "references": [
        {
          "title": "NIST SP 800-213 (IoT)",
          "url": "https://csrc.nist.gov/pubs/sp/800/213/final"
        },
        {
          "title": "NIST Post-Quantum Cryptography",
          "url": "https://csrc.nist.gov/projects/post-quantum-cryptography"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "17_secure_product_pqc_readiness_mcp.py",
          "url": "/audit-code/pqc-readiness/17_secure_product_pqc_readiness_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Post-Quantum Readiness evidence for \"Secure product PQC readiness\" (for products the org builds/ships: the pqc readiness of the product's cryptography (the crypto customers depend on)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Secure product PQC readiness\" control for Post-Quantum Readiness at AcmeCorp. THE TEST: Verify the org's own products are on a PQC path (where it's a producer). PASS: products the org ships have their cryptography assessed for quantum vulnerability; a product PQC roadmap + customer commitments exist; shipped products are field-upgradeable to PQC (firmware/software update path); and long-lived product data/comms exposure is addressed. Exceptions: shipped products with quantum-vulnerable crypto and no roadmap, no customer-facing PQC commitment, products with un-upgradeable crypto (especially embedded/IoT), and long-secret product data on classical crypto. The evidence — For products the org builds/ships: the PQC readiness of the product's cryptography (the crypto customers depend on) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live The product's crypto + CBOM APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. The product's crypto + CBOM gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from The product's crypto + CBOM; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Post-Quantum Readiness: \"Secure product PQC readiness\" Audit Evidence\n\nThe test:\nVerify the org's own products are on a PQC path (where it's a producer). PASS: products the org ships have their cryptography assessed for quantum vulnerability; a product PQC roadmap + customer commitments exist; shipped products are field-upgradeable to PQC (firmware/software update path); and long-lived product data/comms exposure is addressed. Exceptions: shipped products with quantum-vulnerable crypto and no roadmap, no customer-facing PQC commitment, products with un-upgradeable crypto (especially embedded/IoT), and long-secret product data on classical crypto.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- pqc-readiness_inventory.json   (in-scope items — For products the org builds/ships: the PQC readiness of the product's cryptography (the crypto customers depend on))\n- pqc-readiness_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Secure product PQC readiness\",\n  \"domain\": \"Post-Quantum Readiness\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{pqc_",
        "/evidence/pqc-readiness_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Crypto / PKI team\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Secure product PQC readiness\" control must cover\n# fragment: secure_product_pqc_",
        "/evidence/pqc-readiness_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "pqc-readiness_inventory.json",
            "isDir": false
          },
          {
            "name": "pqc-readiness_state.json",
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
          "value": "FLAG{pqc_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/pqc-readiness_inventory.json",
          "value": "secure_product_pqc_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/pqc-readiness_state.json",
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
          "id": "pqc-17-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Secure product PQC readiness\" sub-process of Post-Quantum Readiness?",
          "options": [
            "Deploy and operate the secure product pqc readiness control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the secure product pqc readiness control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for secure product pqc readiness against comparable organisations in the sector",
            "Obtain evidence that the secure product pqc readiness control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "pqc-17-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Secure product PQC readiness\" matter to the broader Post-Quantum Readiness posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Post-Quantum Readiness",
            "It stops mattering once a firewall and endpoint agent are deployed across the Post-Quantum Readiness estate",
            "It is a control other Post-Quantum Readiness controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Post-Quantum Readiness controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "pqc-17-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Secure product PQC readiness\" control?",
          "options": [
            "A point-in-time screenshot of one system's secure product pqc readiness settings, captured during the walkthrough",
            "The For products the org builds/ships: the PQC readiness of the product's cryptography (the crypto customers depend on), reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the secure product pqc readiness control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's secure product pqc readiness capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "pqc-17-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Secure product PQC readiness\"?",
          "options": [
            "From The product's crypto + CBOM and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how secure product pqc readiness works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. The product's crypto + CBOM) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "pqc-17-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Secure product PQC readiness\"?",
          "options": [
            "The external audit firm, since it is the party examining the secure product pqc readiness control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the secure product pqc readiness data is shared, so the accountability sits with no one in particular",
            "Product engineering + Cryptography, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Product engineering + Cryptography owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "pqc-17-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Secure product PQC readiness\", which part stays with the human auditor?",
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
          "id": "pqc-17-q7",
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
          "id": "pqc-17-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Secure product PQC readiness\", which of these is a realistic reportable finding?",
          "options": [
            "A shipped IoT product hardcodes ECC with no field-update capability, so the millions already deployed can never be made quantum-safe, and there's no PQC roadmap or customer commitment.",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. A shipped IoT product hardcodes ECC with no field-update capability, so the millions already deployed can never be made quantum-safe, and there's no PQC roadmap or customer commitment. A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "pqc-17-q9",
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
          "id": "pqc-17-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Secure product PQC readiness\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind secure product pqc readiness, so there is no overlap",
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
    "epochId": "pqc-readiness",
    "id": "pqc-18",
    "order": 18,
    "title": "Industry interop testing",
    "subtitle": "Agentic technical & privacy audit of the industry interop testing control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 7,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Industry interop testing\" control for Post-Quantum Readiness is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify PQC implementations are interoperability-tested before broad rollout. PASS: PQC/hybrid implementations are interop-tested (IETF/NIST interop suites, partners, vendors); they interoperate across the heterogeneous estate (legacy + PQC-capable clients); negotiation/downgrade is handled safely; and interop failures are tracked + fixed. Exceptions: PQC deployed with no interop testing (breakage in production), no testing against partners/legacy clients, unsafe downgrade behaviour, and unresolved interop failures.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Post-Quantum Readiness systems of record (Interop test harness + suites (IETF hackathon, OpenSSL / BoringSSL hybrid); Partner / vendor interop; The heterogeneous client estate) as tools — e.g. `participation/results in PQC interop testing (IETF/NIST events, hybrid`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "Participation/results in PQC interoperability testing (NIST/IETF interop events, vendor interop, hybrid-TLS interop suites)",
        "Evidence the org's PQC implementations interoperate with partners/clients/vendors",
        "Handling of interop failures + downgrade/negotiation issues",
        "Testing across the heterogeneous estate (old + new clients during the transition)"
      ],
      "system": [
        "Interop test harness + suites (IETF hackathon, OpenSSL / BoringSSL hybrid)",
        "Partner / vendor interop",
        "The heterogeneous client estate"
      ],
      "dataOwner": [
        "Cryptography + engineering",
        "QA",
        "Partner integration"
      ],
      "scoring": {
        "ease": "EASE 7/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Post-Quantum Readiness controls."
      }
    },
    "badge": {
      "id": "pqc-18-badge",
      "name": "Post-Quantum Readiness Auditor",
      "emoji": "🧮"
    },
    "wonder": {
      "name": "Industry interop testing",
      "location": "Post-Quantum Readiness",
      "era": "Present Day",
      "emoji": "🧮"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Industry interop testing\" as a repeatable agentic workflow: pull the real evidence (Participation/results in PQC interoperability testing (NIST/IETF interop events, vendor interop, hybrid-TLS interop suites)) with read-only agents, run the test against policy, and issue a defensible opinion on the Post-Quantum Readiness control.",
      "year": 2025,
      "overview": [
        "The \"Industry interop testing\" sub-process is one of the controls an auditor must verify for Post-Quantum Readiness. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me participation/results in PQC interoperability testing (NIST/IETF interop events, vendor interop, hybrid-TLS interop suites), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Interop test harness + suites (IETF hackathon, OpenSSL / BoringSSL hybrid), Partner / vendor interop, The heterogeneous client estate — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `participation/results in PQC interop testing (IETF/NIST events, hybrid-TLS suite` — read-only, against the systems of record.",
        "The test itself is specific. Verify PQC implementations are interoperability-tested before broad rollout. PASS: PQC/hybrid implementations are interop-tested (IETF/NIST interop suites, partners, vendors); they interoperate across the heterogeneous estate (legacy + PQC-capable clients); negotiation/downgrade is handled safely; and interop failures are tracked + fixed. Exceptions: PQC deployed with no interop testing (breakage in production), no testing against partners/legacy clients, unsafe downgrade behaviour, and unresolved interop failures. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `18_industry_interop_testing_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Interop test harness + suites (IETF hackathon, OpenSSL / BoringSSL hybrid) and Partner / vendor interop (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 18_industry_interop_testing_mcp.py` to expose it to your agent — or `python 18_industry_interop_testing_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Harvest now, decrypt later",
        "when": "Ongoing",
        "where": "Long-lived encrypted data + comms",
        "impact": "Adversaries record encrypted traffic today to decrypt once a cryptographically relevant quantum computer exists — long-lived secrets are already at risk.",
        "body": [
          "HNDL makes PQC migration urgent for data that must stay confidential for years: it can be captured now and broken later.",
          "Auditors verify cryptographic inventory/CBOM, long-lived data identification, crypto agility, PQC migration of comms, and CNSA 2.0 / NIST alignment."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Post-Quantum Readiness scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull Interop test harness + suites (IETF hackathon, OpenSSL / BoringSSL hybrid) · Partner / vendor interop",
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
          "event": "NIST finalizes FIPS 203/204/205 PQC standards",
          "highlight": true
        },
        {
          "year": 2022,
          "event": "CNSA 2.0 sets quantum-resistant migration timelines for NSS"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Industry interop testing\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "participation/results in PQC interop testing (IETF/NIST events, hybrid-TLS suites)\ninterop with partners/clients/vendors (does the org's PQC handshake succeed?)\nnegotiation/downgrade handling (safe fallback, no break)\ntesting across legacy + PQC-capable clients during transition"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: Participation/results in PQC interoperability testing (NIST/IETF interop events, vendor interop, hybrid-TLS interop suites).",
        "The test: Verify PQC implementations are interoperability-tested before broad rollout.",
        "Reconcile the systems of record (Interop test harness + suites (IETF hackathon, OpenSSL / BoringSSL hybrid), Partner / vendor interop, The heterogeneous client estate) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. A hybrid-TLS rollout was deployed with no interop testing and broke connectivity with older partner clients that couldn't negotiate the hybrid suite, forcing an emergency rollback."
      ],
      "references": [
        {
          "title": "IETF — TLS Interop",
          "url": "https://datatracker.ietf.org/wg/tls/documents/"
        },
        {
          "title": "NIST Post-Quantum Cryptography",
          "url": "https://csrc.nist.gov/projects/post-quantum-cryptography"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "18_industry_interop_testing_mcp.py",
          "url": "/audit-code/pqc-readiness/18_industry_interop_testing_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Post-Quantum Readiness evidence for \"Industry interop testing\" (participation/results in pqc interoperability testing (nist/ietf interop events, vendor interop, hybrid-tls interop suites)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Industry interop testing\" control for Post-Quantum Readiness at AcmeCorp. THE TEST: Verify PQC implementations are interoperability-tested before broad rollout. PASS: PQC/hybrid implementations are interop-tested (IETF/NIST interop suites, partners, vendors); they interoperate across the heterogeneous estate (legacy + PQC-capable clients); negotiation/downgrade is handled safely; and interop failures are tracked + fixed. Exceptions: PQC deployed with no interop testing (breakage in production), no testing against partners/legacy clients, unsafe downgrade behaviour, and unresolved interop failures. The evidence — Participation/results in PQC interoperability testing (NIST/IETF interop events, vendor interop, hybrid-TLS interop suites) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Interop test harness + suites (IETF hackathon, OpenSSL / BoringSSL hybrid) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Interop test harness + suites (IETF hackathon, OpenSSL / BoringSSL hybrid) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Interop test harness + suites (IETF hackathon, OpenSSL / BoringSSL hybrid); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Post-Quantum Readiness: \"Industry interop testing\" Audit Evidence\n\nThe test:\nVerify PQC implementations are interoperability-tested before broad rollout. PASS: PQC/hybrid implementations are interop-tested (IETF/NIST interop suites, partners, vendors); they interoperate across the heterogeneous estate (legacy + PQC-capable clients); negotiation/downgrade is handled safely; and interop failures are tracked + fixed. Exceptions: PQC deployed with no interop testing (breakage in production), no testing against partners/legacy clients, unsafe downgrade behaviour, and unresolved interop failures.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- pqc-readiness_inventory.json   (in-scope items — Participation/results in PQC interoperability testing (NIST/IETF interop events, vendor interop, hybrid-TLS interop suites))\n- pqc-readiness_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Industry interop testing\",\n  \"domain\": \"Post-Quantum Readiness\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{pqc_",
        "/evidence/pqc-readiness_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Crypto / PKI team\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Industry interop testing\" control must cover\n# fragment: industry_interop_testing_",
        "/evidence/pqc-readiness_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "pqc-readiness_inventory.json",
            "isDir": false
          },
          {
            "name": "pqc-readiness_state.json",
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
          "value": "FLAG{pqc_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/pqc-readiness_inventory.json",
          "value": "industry_interop_testing_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/pqc-readiness_state.json",
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
          "id": "pqc-18-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Industry interop testing\" sub-process of Post-Quantum Readiness?",
          "options": [
            "Deploy and operate the industry interop testing control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the industry interop testing control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for industry interop testing against comparable organisations in the sector",
            "Obtain evidence that the industry interop testing control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "pqc-18-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Industry interop testing\" matter to the broader Post-Quantum Readiness posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Post-Quantum Readiness",
            "It stops mattering once a firewall and endpoint agent are deployed across the Post-Quantum Readiness estate",
            "It is a control other Post-Quantum Readiness controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Post-Quantum Readiness controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "pqc-18-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Industry interop testing\" control?",
          "options": [
            "A point-in-time screenshot of one system's industry interop testing settings, captured during the walkthrough",
            "The Participation/results in PQC interoperability testing (NIST/IETF interop events, vendor interop, hybrid-TLS interop suites), reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the industry interop testing control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's industry interop testing capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "pqc-18-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Industry interop testing\"?",
          "options": [
            "From Interop test harness + suites (IETF hackathon, OpenSSL / BoringSSL hybrid) and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how industry interop testing works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. Interop test harness + suites (IETF hackathon, OpenSSL / BoringSSL hybrid)) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "pqc-18-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Industry interop testing\"?",
          "options": [
            "The external audit firm, since it is the party examining the industry interop testing control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the industry interop testing data is shared, so the accountability sits with no one in particular",
            "Cryptography + engineering, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Cryptography + engineering owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "pqc-18-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Industry interop testing\", which part stays with the human auditor?",
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
          "id": "pqc-18-q7",
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
          "id": "pqc-18-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Industry interop testing\", which of these is a realistic reportable finding?",
          "options": [
            "A hybrid-TLS rollout was deployed with no interop testing and broke connectivity with older partner clients that couldn't negotiate the hybrid suite, forcing an emergency rollback.",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. A hybrid-TLS rollout was deployed with no interop testing and broke connectivity with older partner clients that couldn't negotiate the hybrid suite, forcing an emergency rollback. A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "pqc-18-q9",
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
          "id": "pqc-18-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Industry interop testing\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind industry interop testing, so there is no overlap",
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
    "epochId": "pqc-readiness",
    "id": "pqc-19",
    "order": 19,
    "title": "PQC pen testing",
    "subtitle": "Agentic technical & privacy audit of the pqc pen testing control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 5,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"PQC pen testing\" control for Post-Quantum Readiness is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify PQC implementations are security-tested for implementation flaws + downgrade. PASS: PQC/hybrid deployments are penetration/security-tested for downgrade attacks (forcing classical), implementation flaws (the library/integration, side-channels, bad parameter validation), and negotiation manipulation; findings are remediated. Exceptions: no security testing of PQC implementations, no downgrade-attack testing (the main practical risk — strong algorithm, weak negotiation), untested PQC libraries/integrations, and unremediated PQC findings.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Post-Quantum Readiness systems of record (Pen-test / security-testing of PQC deployments; TLS / protocol fuzzing + downgrade testing; PQC library security review) as tools — e.g. `security-test PQC/hybrid implementations: downgrade-to-classical attac`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The security testing of PQC/hybrid implementations (correct implementation, no downgrade-to-classical, side-channels, parameter validation)",
        "Downgrade-attack testing (can an attacker force the connection back to classical/vulnerable crypto)",
        "Implementation-flaw testing (the PQC library/integration, not the algorithm math)",
        "Findings + remediation from PQC-focused testing"
      ],
      "system": [
        "Pen-test / security-testing of PQC deployments",
        "TLS / protocol fuzzing + downgrade testing",
        "PQC library security review"
      ],
      "dataOwner": [
        "Offensive security / AppSec + Cryptography",
        "Engineering",
        "Pen-test vendor"
      ],
      "scoring": {
        "ease": "EASE 5/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Post-Quantum Readiness controls."
      }
    },
    "badge": {
      "id": "pqc-19-badge",
      "name": "Post-Quantum Readiness Auditor",
      "emoji": "🧮"
    },
    "wonder": {
      "name": "PQC pen testing",
      "location": "Post-Quantum Readiness",
      "era": "Present Day",
      "emoji": "🧮"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"PQC pen testing\" as a repeatable agentic workflow: pull the real evidence (The security testing of PQC/hybrid implementations (correct implementation, no downgrade-to-classical, side-channels, parameter validation)) with read-only agents, run the test against policy, and issue a defensible opinion on the Post-Quantum Readiness control.",
      "year": 2025,
      "overview": [
        "The \"PQC pen testing\" sub-process is one of the controls an auditor must verify for Post-Quantum Readiness. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the security testing of PQC/hybrid implementations (correct implementation, no downgrade-to-classical, side-channels, parameter validation), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Pen-test / security-testing of PQC deployments, TLS / protocol fuzzing + downgrade testing, PQC library security review — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `security-test PQC/hybrid implementations: downgrade-to-classical attacks (forcin` — read-only, against the systems of record.",
        "The test itself is specific. Verify PQC implementations are security-tested for implementation flaws + downgrade. PASS: PQC/hybrid deployments are penetration/security-tested for downgrade attacks (forcing classical), implementation flaws (the library/integration, side-channels, bad parameter validation), and negotiation manipulation; findings are remediated. Exceptions: no security testing of PQC implementations, no downgrade-attack testing (the main practical risk — strong algorithm, weak negotiation), untested PQC libraries/integrations, and unremediated PQC findings. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `19_pqc_pen_testing_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Pen-test / security-testing of PQC deployments and TLS / protocol fuzzing + downgrade testing (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 19_pqc_pen_testing_mcp.py` to expose it to your agent — or `python 19_pqc_pen_testing_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Harvest now, decrypt later",
        "when": "Ongoing",
        "where": "Long-lived encrypted data + comms",
        "impact": "Adversaries record encrypted traffic today to decrypt once a cryptographically relevant quantum computer exists — long-lived secrets are already at risk.",
        "body": [
          "HNDL makes PQC migration urgent for data that must stay confidential for years: it can be captured now and broken later.",
          "Auditors verify cryptographic inventory/CBOM, long-lived data identification, crypto agility, PQC migration of comms, and CNSA 2.0 / NIST alignment."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Post-Quantum Readiness scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull Pen-test / security-testing of PQC deployments · TLS / protocol fuzzing + downgrade testing",
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
          "event": "NIST finalizes FIPS 203/204/205 PQC standards",
          "highlight": true
        },
        {
          "year": 2022,
          "event": "CNSA 2.0 sets quantum-resistant migration timelines for NSS"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"PQC pen testing\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "security-test PQC/hybrid implementations: downgrade-to-classical attacks (forcing vulnerable crypto)\nimplementation-flaw testing (the library/integration, side-channels, parameter validation)\nnegotiation manipulation testing\nfindings + remediation from PQC-focused testing"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The security testing of PQC/hybrid implementations (correct implementation, no downgrade-to-classical, side-channels, parameter validation).",
        "The test: Verify PQC implementations are security-tested for implementation flaws + downgrade.",
        "Reconcile the systems of record (Pen-test / security-testing of PQC deployments, TLS / protocol fuzzing + downgrade testing, PQC library security review) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. A hybrid-TLS deployment was never security-tested; a downgrade test showed an attacker can strip the PQC component and force classical ECDHE, defeating the entire point of the migration."
      ],
      "references": [
        {
          "title": "NIST Post-Quantum Cryptography",
          "url": "https://csrc.nist.gov/projects/post-quantum-cryptography"
        },
        {
          "title": "OWASP Web Security Testing Guide",
          "url": "https://owasp.org/www-project-web-security-testing-guide/"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "19_pqc_pen_testing_mcp.py",
          "url": "/audit-code/pqc-readiness/19_pqc_pen_testing_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Post-Quantum Readiness evidence for \"PQC pen testing\" (the security testing of pqc/hybrid implementations (correct implementation, no downgrade-to-classical, side-channels, parameter validation)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"PQC pen testing\" control for Post-Quantum Readiness at AcmeCorp. THE TEST: Verify PQC implementations are security-tested for implementation flaws + downgrade. PASS: PQC/hybrid deployments are penetration/security-tested for downgrade attacks (forcing classical), implementation flaws (the library/integration, side-channels, bad parameter validation), and negotiation manipulation; findings are remediated. Exceptions: no security testing of PQC implementations, no downgrade-attack testing (the main practical risk — strong algorithm, weak negotiation), untested PQC libraries/integrations, and unremediated PQC findings. The evidence — The security testing of PQC/hybrid implementations (correct implementation, no downgrade-to-classical, side-channels, parameter validation) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Pen-test / security-testing of PQC deployments APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Pen-test / security-testing of PQC deployments gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Pen-test / security-testing of PQC deployments; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Post-Quantum Readiness: \"PQC pen testing\" Audit Evidence\n\nThe test:\nVerify PQC implementations are security-tested for implementation flaws + downgrade. PASS: PQC/hybrid deployments are penetration/security-tested for downgrade attacks (forcing classical), implementation flaws (the library/integration, side-channels, bad parameter validation), and negotiation manipulation; findings are remediated. Exceptions: no security testing of PQC implementations, no downgrade-attack testing (the main practical risk — strong algorithm, weak negotiation), untested PQC libraries/integrations, and unremediated PQC findings.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- pqc-readiness_inventory.json   (in-scope items — The security testing of PQC/hybrid implementations (correct implementation, no downgrade-to-classical, side-channels, parameter validation))\n- pqc-readiness_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"PQC pen testing\",\n  \"domain\": \"Post-Quantum Readiness\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{pqc_",
        "/evidence/pqc-readiness_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Crypto / PKI team\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"PQC pen testing\" control must cover\n# fragment: pqc_pen_testing_",
        "/evidence/pqc-readiness_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "pqc-readiness_inventory.json",
            "isDir": false
          },
          {
            "name": "pqc-readiness_state.json",
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
          "value": "FLAG{pqc_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/pqc-readiness_inventory.json",
          "value": "pqc_pen_testing_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/pqc-readiness_state.json",
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
          "id": "pqc-19-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"PQC pen testing\" sub-process of Post-Quantum Readiness?",
          "options": [
            "Deploy and operate the pqc pen testing control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the pqc pen testing control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for pqc pen testing against comparable organisations in the sector",
            "Obtain evidence that the pqc pen testing control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "pqc-19-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"PQC pen testing\" matter to the broader Post-Quantum Readiness posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Post-Quantum Readiness",
            "It stops mattering once a firewall and endpoint agent are deployed across the Post-Quantum Readiness estate",
            "It is a control other Post-Quantum Readiness controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Post-Quantum Readiness controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "pqc-19-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"PQC pen testing\" control?",
          "options": [
            "A point-in-time screenshot of one system's pqc pen testing settings, captured during the walkthrough",
            "The The security testing of PQC/hybrid implementations (correct implementation, no downgrade-to-classical, side-channels, parameter validation), reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the pqc pen testing control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's pqc pen testing capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "pqc-19-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"PQC pen testing\"?",
          "options": [
            "From Pen-test / security-testing of PQC deployments and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how pqc pen testing works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. Pen-test / security-testing of PQC deployments) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "pqc-19-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"PQC pen testing\"?",
          "options": [
            "The external audit firm, since it is the party examining the pqc pen testing control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the pqc pen testing data is shared, so the accountability sits with no one in particular",
            "Offensive security / AppSec + Cryptography, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Offensive security / AppSec + Cryptography owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "pqc-19-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"PQC pen testing\", which part stays with the human auditor?",
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
          "id": "pqc-19-q7",
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
          "id": "pqc-19-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"PQC pen testing\", which of these is a realistic reportable finding?",
          "options": [
            "A hybrid-TLS deployment was never security-tested; a downgrade test showed an attacker can strip the PQC component and force classical ECDHE, defeating the entire point of the migration.",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. A hybrid-TLS deployment was never security-tested; a downgrade test showed an attacker can strip the PQC component and force classical ECDHE, defeating the entire point of the migration. A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "pqc-19-q9",
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
          "id": "pqc-19-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"PQC pen testing\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind pqc pen testing, so there is no overlap",
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

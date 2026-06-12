import type { EpochConfig, StageConfig } from "../types";

export const buildCicdEpoch: EpochConfig = {
  "id": "build-cicd",
  "name": "Build Environment & CI/CD (Continuous Integration / Continuous Delivery)",
  "subtitle": "Agentic technical & privacy audit — Build Environment & CI/CD (Continuous Integration / Continuous Delivery)",
  "description": "Audit Build Environment & CI/CD (Continuous Integration / Continuous Delivery) end to end with a read-only agent fleet: each sub-process is a module that teaches the control as a repeatable agentic workflow with downloadable MCP tooling, a CTF, and a 10-question quiz.",
  "emoji": "🏗️",
  "color": "Indigo",
  "unlocked": true
};

export const buildCicdStages: StageConfig[] = [
  {
    "epochId": "build-cicd",
    "id": "bcd-01",
    "order": 1,
    "title": "Build environment security",
    "subtitle": "Agentic technical & privacy audit of the build environment security control",
    "category": "cybersecurity",
    "xp": 100,
    "easeScore": 5,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Build environment security\" control for Build Environment & CI/CD (Continuous Integration / Continuous Delivery) is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify the build environment is hardened, isolated, and tamper-resistant (the SolarWinds lesson). PASS: build runners are ephemeral (fresh per job), hardened, network-egress-restricted, and isolated from production; only reviewed source builds; the environment can't be modified to inject artifacts; and build provenance is attested. Exceptions: persistent/shared runners that accumulate state, broad egress, build agents with production access, and no provenance on artifacts.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Build Environment & CI/CD (Continuous Integration / Continuous Delivery) systems of record (CI runners (GitHub Actions runners, GitLab runners, Jenkins agents); The build orchestrator; SLSA / provenance attestation) as tools — e.g. `inventory runners: ephemeral vs persistent, self-hosted vs hosted, who`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The inventory of build agents/runners (self-hosted + cloud) + their hardening + isolation",
        "The build-agent access model (who/what can run jobs; ephemeral vs persistent runners)",
        "Network egress + secret exposure of the build environment",
        "Evidence builds run from reviewed source on isolated, ephemeral runners + produce provenance"
      ],
      "system": [
        "CI runners (GitHub Actions runners, GitLab runners, Jenkins agents)",
        "The build orchestrator",
        "SLSA / provenance attestation"
      ],
      "dataOwner": [
        "Platform / DevOps engineering — owns build infra",
        "AppSec — owns build integrity",
        "Security"
      ],
      "scoring": {
        "ease": "EASE 5/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Build Environment & CI/CD (Continuous Integration / Continuous Delivery) controls."
      }
    },
    "badge": {
      "id": "bcd-01-badge",
      "name": "Build Environment & CI/CD (Continuous Integration / Continuous Delivery) Auditor",
      "emoji": "🏗️"
    },
    "wonder": {
      "name": "Build environment security",
      "location": "Build Environment & CI/CD (Continuous Integration / Continuous Delivery)",
      "era": "Present Day",
      "emoji": "🏗️"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Build environment security\" as a repeatable agentic workflow: pull the real evidence (The inventory of build agents/runners (self-hosted + cloud) + their hardening + isolation) with read-only agents, run the test against policy, and issue a defensible opinion on the Build Environment & CI/CD (Continuous Integration / Continuous Delivery) control.",
      "year": 2025,
      "overview": [
        "The \"Build environment security\" sub-process is one of the controls an auditor must verify for Build Environment & CI/CD (Continuous Integration / Continuous Delivery). The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the inventory of build agents/runners (self-hosted + cloud) + their hardening + isolation, for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here CI runners (GitHub Actions runners, GitLab runners, Jenkins agents), The build orchestrator, SLSA / provenance attestation — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `inventory runners: ephemeral vs persistent, self-hosted vs hosted, who can targe` — read-only, against the systems of record.",
        "The test itself is specific. Verify the build environment is hardened, isolated, and tamper-resistant (the SolarWinds lesson). PASS: build runners are ephemeral (fresh per job), hardened, network-egress-restricted, and isolated from production; only reviewed source builds; the environment can't be modified to inject artifacts; and build provenance is attested. Exceptions: persistent/shared runners that accumulate state, broad egress, build agents with production access, and no provenance on artifacts. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `01_build_environment_security_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from CI runners (GitHub Actions runners, GitLab runners, Jenkins agents) and The build orchestrator (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 01_build_environment_security_mcp.py` to expose it to your agent — or `python 01_build_environment_security_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "SolarWinds: the build system as the attack surface",
        "when": "2020",
        "where": "SolarWinds Orion build pipeline",
        "impact": "Malicious code injected during the build reached ~18,000 customers through a signed, trusted update.",
        "body": [
          "The SUNBURST actors did not tamper with source in the repo — they compromised the BUILD environment and injected the backdoor as Orion was compiled, so the malicious artifact was signed and shipped as legitimate.",
          "It reframed CI/CD as a first-class attack surface: an auditor must verify build-environment isolation, provenance/SLSA attestation, and that what ships is provably built from reviewed source."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Build Environment & CI/CD (Continuous Integration / Continuous Delivery) scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull CI runners (GitHub Actions runners, GitLab runners, Jenkins agents) · The build orchestrator",
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
          "year": 2020,
          "event": "SolarWinds SUNBURST — build-time injection into a signed update",
          "highlight": true
        },
        {
          "year": 2021,
          "event": "Codecov bash-uploader compromise exposes CI secrets at scale"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Build environment security\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "inventory runners: ephemeral vs persistent, self-hosted vs hosted, who can target them\ncheck runner egress + whether secrets are exposed to untrusted PR builds\nconfirm builds produce SLSA provenance attestation\nverify the runner image is hardened + rebuilt regularly"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The inventory of build agents/runners (self-hosted + cloud) + their hardening + isolation.",
        "The test: Verify the build environment is hardened, isolated, and tamper-resistant (the SolarWinds lesson).",
        "Reconcile the systems of record (CI runners (GitHub Actions runners, GitLab runners, Jenkins agents), The build orchestrator, SLSA / provenance attestation) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. Self-hosted runners are persistent and shared across repos with broad egress, so a malicious PR can run on them and exfiltrate other repos' secrets — the SolarWinds-class build-injection risk."
      ],
      "references": [
        {
          "title": "SLSA",
          "url": "https://slsa.dev/"
        },
        {
          "title": "NIST SP 800-204D CI/CD Security",
          "url": "https://csrc.nist.gov/pubs/sp/800/204/d/final"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "01_build_environment_security_mcp.py",
          "url": "/audit-code/build-cicd/01_build_environment_security_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Build Environment & CI/CD (Continuous Integration / Continuous Delivery) evidence for \"Build environment security\" (the inventory of build agents/runners (self-hosted + cloud) + their hardening + isolation), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Build environment security\" control for Build Environment & CI/CD (Continuous Integration / Continuous Delivery) at AcmeCorp. THE TEST: Verify the build environment is hardened, isolated, and tamper-resistant (the SolarWinds lesson). PASS: build runners are ephemeral (fresh per job), hardened, network-egress-restricted, and isolated from production; only reviewed source builds; the environment can't be modified to inject artifacts; and build provenance is attested. Exceptions: persistent/shared runners that accumulate state, broad egress, build agents with production access, and no provenance on artifacts. The evidence — The inventory of build agents/runners (self-hosted + cloud) + their hardening + isolation — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live CI runners (GitHub Actions runners, GitLab runners, Jenkins agents) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. CI runners (GitHub Actions runners, GitLab runners, Jenkins agents) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from CI runners (GitHub Actions runners, GitLab runners, Jenkins agents); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Build Environment & CI/CD (Continuous Integration / Continuous Delivery): \"Build environment security\" Audit Evidence\n\nThe test:\nVerify the build environment is hardened, isolated, and tamper-resistant (the SolarWinds lesson). PASS: build runners are ephemeral (fresh per job), hardened, network-egress-restricted, and isolated from production; only reviewed source builds; the environment can't be modified to inject artifacts; and build provenance is attested. Exceptions: persistent/shared runners that accumulate state, broad egress, build agents with production access, and no provenance on artifacts.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- build-cicd_inventory.json   (in-scope items — The inventory of build agents/runners (self-hosted + cloud) + their hardening + isolation)\n- build-cicd_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Build environment security\",\n  \"domain\": \"Build Environment & CI/CD (Continuous Integration / Continuous Delivery)\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{bcd_",
        "/evidence/build-cicd_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Platform / DevOps engineering\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Build environment security\" control must cover\n# fragment: build_environment_security_",
        "/evidence/build-cicd_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "build-cicd_inventory.json",
            "isDir": false
          },
          {
            "name": "build-cicd_state.json",
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
          "value": "FLAG{bcd_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/build-cicd_inventory.json",
          "value": "build_environment_security_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/build-cicd_state.json",
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
          "id": "bcd-01-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Build environment security\" sub-process of Build Environment & CI/CD (Continuous Integration / Continuous Delivery)?",
          "options": [
            "Re-implement the control on the auditor's behalf",
            "Increase the number of tools the team uses",
            "Replace the system owner's judgement entirely",
            "Obtain evidence that the build environment security control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run or own the control."
        },
        {
          "id": "bcd-01-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Build environment security\" matter to the broader Build Environment & CI/CD (Continuous Integration / Continuous Delivery) posture?",
          "options": [
            "It is relevant solely for marketing",
            "It has no effect once a firewall exists",
            "It is a control other Build Environment & CI/CD (Continuous Integration / Continuous Delivery) controls depend on, so a gap here propagates risk into everything scoped to it",
            "It only affects documentation aesthetics"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure undermines the controls layered on top."
        },
        {
          "id": "bcd-01-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Build environment security\" control?",
          "options": [
            "The vendor's marketing datasheet",
            "The The inventory of build agents/runners (self-hosted + cloud) + their hardening + isolation reconciled against policy, plus the resulting findings working paper",
            "A verbal assurance from the team lead",
            "A screenshot of the login page"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — exports reconciled to policy, not assertions."
        },
        {
          "id": "bcd-01-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where would an auditor pull the evidence for \"Build environment security\"?",
          "options": [
            "CI runners (GitHub Actions runners, GitLab runners, Jenkins agents) (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., CI runners (GitHub Actions runners, GitLab runners, Jenkins agents)) via read-only access."
        },
        {
          "id": "bcd-01-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Build environment security\"?",
          "options": [
            "The external auditor",
            "No one — it is ownerless",
            "The end customer",
            "Platform / DevOps engineering — owns build infra (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "Platform / DevOps engineering — owns build infra owns the control data; the auditor independently verifies it."
        },
        {
          "id": "bcd-01-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Build environment security\", which part stays with the human auditor?",
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
          "id": "bcd-01-q7",
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
          "id": "bcd-01-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Build environment security\", which is a realistic reportable finding?",
          "options": [
            "Self-hosted runners are persistent and shared across repos with broad egress, so a malicious PR can run on them and exfiltrate other repos' secrets — the SolarWinds-class build-injection risk.",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. Self-hosted runners are persistent and shared across repos with broad egress, so a malicious PR can run on them and exfiltrate other repos' secrets — the SolarWinds-class build-injection risk."
        },
        {
          "id": "bcd-01-q9",
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
          "id": "bcd-01-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Build environment security\" also serve privacy and regulatory goals?",
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
    "epochId": "build-cicd",
    "id": "bcd-02",
    "order": 2,
    "title": "CI/CD pipeline security",
    "subtitle": "Agentic technical & privacy audit of the ci/cd pipeline security control",
    "category": "cybersecurity",
    "xp": 100,
    "easeScore": 6,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"CI/CD pipeline security\" control for Build Environment & CI/CD (Continuous Integration / Continuous Delivery) is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify the CI/CD pipeline enforces security and can't be subverted. PASS: pipeline definitions are protected (changes reviewed); security gates are blocking, not advisory; production deploys require approval and come only from protected branches; and deploy credentials are short-lived (OIDC federation), least-privilege. Exceptions: anyone can edit the pipeline, gates set to non-blocking, prod deploy with no approval, and long-lived powerful deploy credentials in CI.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Build Environment & CI/CD (Continuous Integration / Continuous Delivery) systems of record (GitHub Actions / GitLab CI / Jenkins / Argo CD; The security-scan integrations; Cloud OIDC federation) as tools — e.g. `who can modify pipeline YAML / Jenkinsfiles (branch protection on the `, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The pipeline-definition inventory + who can edit pipeline config (pipeline-as-code permissions)",
        "The required security gates in the pipeline (SAST/SCA/secret/image scan) + whether they block or warn",
        "Branch/environment protection for deploy stages (approvals before prod deploy)",
        "Pipeline credential scope (deploy creds — OIDC vs long-lived)"
      ],
      "system": [
        "GitHub Actions / GitLab CI / Jenkins / Argo CD",
        "The security-scan integrations",
        "Cloud OIDC federation"
      ],
      "dataOwner": [
        "DevOps / platform — owns pipelines",
        "AppSec — owns the gates",
        "Release management"
      ],
      "scoring": {
        "ease": "EASE 6/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Build Environment & CI/CD (Continuous Integration / Continuous Delivery) controls."
      }
    },
    "badge": {
      "id": "bcd-02-badge",
      "name": "Build Environment & CI/CD (Continuous Integration / Continuous Delivery) Auditor",
      "emoji": "🏗️"
    },
    "wonder": {
      "name": "CI/CD pipeline security",
      "location": "Build Environment & CI/CD (Continuous Integration / Continuous Delivery)",
      "era": "Present Day",
      "emoji": "🏗️"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"CI/CD pipeline security\" as a repeatable agentic workflow: pull the real evidence (The pipeline-definition inventory + who can edit pipeline config (pipeline-as-code permissions)) with read-only agents, run the test against policy, and issue a defensible opinion on the Build Environment & CI/CD (Continuous Integration / Continuous Delivery) control.",
      "year": 2025,
      "overview": [
        "The \"CI/CD pipeline security\" sub-process is one of the controls an auditor must verify for Build Environment & CI/CD (Continuous Integration / Continuous Delivery). The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the pipeline-definition inventory + who can edit pipeline config (pipeline-as-code permissions), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here GitHub Actions / GitLab CI / Jenkins / Argo CD, The security-scan integrations, Cloud OIDC federation — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `who can modify pipeline YAML / Jenkinsfiles (branch protection on the pipeline c` — read-only, against the systems of record.",
        "The test itself is specific. Verify the CI/CD pipeline enforces security and can't be subverted. PASS: pipeline definitions are protected (changes reviewed); security gates are blocking, not advisory; production deploys require approval and come only from protected branches; and deploy credentials are short-lived (OIDC federation), least-privilege. Exceptions: anyone can edit the pipeline, gates set to non-blocking, prod deploy with no approval, and long-lived powerful deploy credentials in CI. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `02_ci_cd_pipeline_security_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from GitHub Actions / GitLab CI / Jenkins / Argo CD and The security-scan integrations (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 02_ci_cd_pipeline_security_mcp.py` to expose it to your agent — or `python 02_ci_cd_pipeline_security_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "SolarWinds: the build system as the attack surface",
        "when": "2020",
        "where": "SolarWinds Orion build pipeline",
        "impact": "Malicious code injected during the build reached ~18,000 customers through a signed, trusted update.",
        "body": [
          "The SUNBURST actors did not tamper with source in the repo — they compromised the BUILD environment and injected the backdoor as Orion was compiled, so the malicious artifact was signed and shipped as legitimate.",
          "It reframed CI/CD as a first-class attack surface: an auditor must verify build-environment isolation, provenance/SLSA attestation, and that what ships is provably built from reviewed source."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Build Environment & CI/CD (Continuous Integration / Continuous Delivery) scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull GitHub Actions / GitLab CI / Jenkins / Argo CD · The security-scan integrations",
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
          "year": 2020,
          "event": "SolarWinds SUNBURST — build-time injection into a signed update",
          "highlight": true
        },
        {
          "year": 2021,
          "event": "Codecov bash-uploader compromise exposes CI secrets at scale"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"CI/CD pipeline security\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "who can modify pipeline YAML / Jenkinsfiles (branch protection on the pipeline config itself)\nconfirm SAST/SCA/secret/image gates fail the build (not continue-on-error)\ndeploy stage: required approvals + environment protection rules\nCI→cloud auth: OIDC short-lived vs stored long-lived keys"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The pipeline-definition inventory + who can edit pipeline config (pipeline-as-code permissions).",
        "The test: Verify the CI/CD pipeline enforces security and can't be subverted.",
        "Reconcile the systems of record (GitHub Actions / GitLab CI / Jenkins / Argo CD, The security-scan integrations, Cloud OIDC federation) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. Security scans run with continue-on-error (so they never block), any developer can edit the deploy workflow, and the pipeline holds a long-lived AWS admin key instead of OIDC — a compromised PR could deploy anything."
      ],
      "references": [
        {
          "title": "NIST SP 800-204D",
          "url": "https://csrc.nist.gov/pubs/sp/800/204/d/final"
        },
        {
          "title": "OWASP Top 10 CI/CD Security Risks",
          "url": "https://owasp.org/www-project-top-10-ci-cd-security-risks/"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "02_ci_cd_pipeline_security_mcp.py",
          "url": "/audit-code/build-cicd/02_ci_cd_pipeline_security_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Build Environment & CI/CD (Continuous Integration / Continuous Delivery) evidence for \"CI/CD pipeline security\" (the pipeline-definition inventory + who can edit pipeline config (pipeline-as-code permissions)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"CI/CD pipeline security\" control for Build Environment & CI/CD (Continuous Integration / Continuous Delivery) at AcmeCorp. THE TEST: Verify the CI/CD pipeline enforces security and can't be subverted. PASS: pipeline definitions are protected (changes reviewed); security gates are blocking, not advisory; production deploys require approval and come only from protected branches; and deploy credentials are short-lived (OIDC federation), least-privilege. Exceptions: anyone can edit the pipeline, gates set to non-blocking, prod deploy with no approval, and long-lived powerful deploy credentials in CI. The evidence — The pipeline-definition inventory + who can edit pipeline config (pipeline-as-code permissions) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live GitHub Actions / GitLab CI / Jenkins / Argo CD APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. GitHub Actions / GitLab CI / Jenkins / Argo CD gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from GitHub Actions / GitLab CI / Jenkins / Argo CD; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Build Environment & CI/CD (Continuous Integration / Continuous Delivery): \"CI/CD pipeline security\" Audit Evidence\n\nThe test:\nVerify the CI/CD pipeline enforces security and can't be subverted. PASS: pipeline definitions are protected (changes reviewed); security gates are blocking, not advisory; production deploys require approval and come only from protected branches; and deploy credentials are short-lived (OIDC federation), least-privilege. Exceptions: anyone can edit the pipeline, gates set to non-blocking, prod deploy with no approval, and long-lived powerful deploy credentials in CI.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- build-cicd_inventory.json   (in-scope items — The pipeline-definition inventory + who can edit pipeline config (pipeline-as-code permissions))\n- build-cicd_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"CI/CD pipeline security\",\n  \"domain\": \"Build Environment & CI/CD (Continuous Integration / Continuous Delivery)\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{bcd_",
        "/evidence/build-cicd_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Platform / DevOps engineering\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"CI/CD pipeline security\" control must cover\n# fragment: cicd_pipeline_security_",
        "/evidence/build-cicd_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "build-cicd_inventory.json",
            "isDir": false
          },
          {
            "name": "build-cicd_state.json",
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
          "value": "FLAG{bcd_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/build-cicd_inventory.json",
          "value": "cicd_pipeline_security_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/build-cicd_state.json",
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
          "id": "bcd-02-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"CI/CD pipeline security\" sub-process of Build Environment & CI/CD (Continuous Integration / Continuous Delivery)?",
          "options": [
            "Re-implement the control on the auditor's behalf",
            "Increase the number of tools the team uses",
            "Replace the system owner's judgement entirely",
            "Obtain evidence that the ci/cd pipeline security control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run or own the control."
        },
        {
          "id": "bcd-02-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"CI/CD pipeline security\" matter to the broader Build Environment & CI/CD (Continuous Integration / Continuous Delivery) posture?",
          "options": [
            "It is relevant solely for marketing",
            "It has no effect once a firewall exists",
            "It is a control other Build Environment & CI/CD (Continuous Integration / Continuous Delivery) controls depend on, so a gap here propagates risk into everything scoped to it",
            "It only affects documentation aesthetics"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure undermines the controls layered on top."
        },
        {
          "id": "bcd-02-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"CI/CD pipeline security\" control?",
          "options": [
            "The vendor's marketing datasheet",
            "The The pipeline-definition inventory + who can edit pipeline config (pipeline-as-code permissions) reconciled against policy, plus the resulting findings working paper",
            "A verbal assurance from the team lead",
            "A screenshot of the login page"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — exports reconciled to policy, not assertions."
        },
        {
          "id": "bcd-02-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where would an auditor pull the evidence for \"CI/CD pipeline security\"?",
          "options": [
            "GitHub Actions / GitLab CI / Jenkins / Argo CD (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., GitHub Actions / GitLab CI / Jenkins / Argo CD) via read-only access."
        },
        {
          "id": "bcd-02-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"CI/CD pipeline security\"?",
          "options": [
            "The external auditor",
            "No one — it is ownerless",
            "The end customer",
            "DevOps / platform — owns pipelines (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "DevOps / platform — owns pipelines owns the control data; the auditor independently verifies it."
        },
        {
          "id": "bcd-02-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"CI/CD pipeline security\", which part stays with the human auditor?",
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
          "id": "bcd-02-q7",
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
          "id": "bcd-02-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"CI/CD pipeline security\", which is a realistic reportable finding?",
          "options": [
            "Security scans run with continue-on-error (so they never block), any developer can edit the deploy workflow, and the pipeline holds a long-lived AWS admin key instead of OIDC — a compromised PR could deploy anything.",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. Security scans run with continue-on-error (so they never block), any developer can edit the deploy workflow, and the pipeline holds a long-lived AWS admin key instead of OIDC — a compromised PR could deploy anything."
        },
        {
          "id": "bcd-02-q9",
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
          "id": "bcd-02-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"CI/CD pipeline security\" also serve privacy and regulatory goals?",
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
    "epochId": "build-cicd",
    "id": "bcd-03",
    "order": 3,
    "title": "Container image security",
    "subtitle": "Agentic technical & privacy audit of the container image security control",
    "category": "cybersecurity",
    "xp": 100,
    "easeScore": 7,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Container image security\" control for Build Environment & CI/CD (Continuous Integration / Continuous Delivery) is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify container images are minimal, scanned, hardened, and trusted. PASS: images use approved minimal/distroless bases, run as non-root, contain no embedded secrets, are vuln-scanned with no unaddressed criticals, and are signed (cosign) with admission control enforcing signatures. Exceptions: images with critical CVEs deployed, running as root, secrets baked into layers, untrusted/public base images, and unsigned images allowed to run.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Build Environment & CI/CD (Continuous Integration / Continuous Delivery) systems of record (Registry (ECR/ACR/Harbor) + scanner (Trivy/Grype/Inspector); Sigstore cosign + admission control (Kyverno / OPA Gatekeeper); Base-image policy) as tools — e.g. `registry/Trivy scan: images with critical CVEs; flag root user + embed`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The image inventory in the registry + their vulnerability-scan results (base + app layers)",
        "Image-hardening evidence (minimal/distroless base, non-root user, no secrets baked in)",
        "The approved-base-image policy + provenance (only trusted bases)",
        "Image signing + admission policy (only signed images run)"
      ],
      "system": [
        "Registry (ECR/ACR/Harbor) + scanner (Trivy/Grype/Inspector)",
        "Sigstore cosign + admission control (Kyverno / OPA Gatekeeper)",
        "Base-image policy"
      ],
      "dataOwner": [
        "Platform / DevOps — own images",
        "AppSec — owns the policy",
        "Security"
      ],
      "scoring": {
        "ease": "EASE 7/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Build Environment & CI/CD (Continuous Integration / Continuous Delivery) controls."
      }
    },
    "badge": {
      "id": "bcd-03-badge",
      "name": "Build Environment & CI/CD (Continuous Integration / Continuous Delivery) Auditor",
      "emoji": "🏗️"
    },
    "wonder": {
      "name": "Container image security",
      "location": "Build Environment & CI/CD (Continuous Integration / Continuous Delivery)",
      "era": "Present Day",
      "emoji": "🏗️"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Container image security\" as a repeatable agentic workflow: pull the real evidence (The image inventory in the registry + their vulnerability-scan results (base + app layers)) with read-only agents, run the test against policy, and issue a defensible opinion on the Build Environment & CI/CD (Continuous Integration / Continuous Delivery) control.",
      "year": 2025,
      "overview": [
        "The \"Container image security\" sub-process is one of the controls an auditor must verify for Build Environment & CI/CD (Continuous Integration / Continuous Delivery). The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the image inventory in the registry + their vulnerability-scan results (base + app layers), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Registry (ECR/ACR/Harbor) + scanner (Trivy/Grype/Inspector), Sigstore cosign + admission control (Kyverno / OPA Gatekeeper), Base-image policy — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `registry/Trivy scan: images with critical CVEs; flag root user + embedded secret` — read-only, against the systems of record.",
        "The test itself is specific. Verify container images are minimal, scanned, hardened, and trusted. PASS: images use approved minimal/distroless bases, run as non-root, contain no embedded secrets, are vuln-scanned with no unaddressed criticals, and are signed (cosign) with admission control enforcing signatures. Exceptions: images with critical CVEs deployed, running as root, secrets baked into layers, untrusted/public base images, and unsigned images allowed to run. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `03_container_image_security_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Registry (ECR/ACR/Harbor) + scanner (Trivy/Grype/Inspector) and Sigstore cosign + admission control (Kyverno / OPA Gatekeeper) (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 03_container_image_security_mcp.py` to expose it to your agent — or `python 03_container_image_security_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "SolarWinds: the build system as the attack surface",
        "when": "2020",
        "where": "SolarWinds Orion build pipeline",
        "impact": "Malicious code injected during the build reached ~18,000 customers through a signed, trusted update.",
        "body": [
          "The SUNBURST actors did not tamper with source in the repo — they compromised the BUILD environment and injected the backdoor as Orion was compiled, so the malicious artifact was signed and shipped as legitimate.",
          "It reframed CI/CD as a first-class attack surface: an auditor must verify build-environment isolation, provenance/SLSA attestation, and that what ships is provably built from reviewed source."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Build Environment & CI/CD (Continuous Integration / Continuous Delivery) scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull Registry (ECR/ACR/Harbor) + scanner (Trivy/Grype/Inspector) · Sigstore cosign + admission control (Kyverno / OPA Gatekeeper)",
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
          "year": 2020,
          "event": "SolarWinds SUNBURST — build-time injection into a signed update",
          "highlight": true
        },
        {
          "year": 2021,
          "event": "Codecov bash-uploader compromise exposes CI secrets at scale"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Container image security\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "registry/Trivy scan: images with critical CVEs; flag root user + embedded secrets (trivy + dockle)\nconfirm minimal/distroless bases vs full-OS images\ncosign verify + confirm admission control blocks unsigned\nscan image layers for hardcoded secrets (trivy secret / docker history)"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The image inventory in the registry + their vulnerability-scan results (base + app layers).",
        "The test: Verify container images are minimal, scanned, hardened, and trusted.",
        "Reconcile the systems of record (Registry (ECR/ACR/Harbor) + scanner (Trivy/Grype/Inspector), Sigstore cosign + admission control (Kyverno / OPA Gatekeeper), Base-image policy) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. Production images run as root off a full Ubuntu base with dozens of critical CVEs and an embedded API key in an early layer; nothing enforces signing, so any image can run."
      ],
      "references": [
        {
          "title": "NIST SP 800-190 Container Security",
          "url": "https://csrc.nist.gov/pubs/sp/800/190/final"
        },
        {
          "title": "CIS Docker Benchmark",
          "url": "https://www.cisecurity.org/benchmark/docker"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "03_container_image_security_mcp.py",
          "url": "/audit-code/build-cicd/03_container_image_security_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Build Environment & CI/CD (Continuous Integration / Continuous Delivery) evidence for \"Container image security\" (the image inventory in the registry + their vulnerability-scan results (base + app layers)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Container image security\" control for Build Environment & CI/CD (Continuous Integration / Continuous Delivery) at AcmeCorp. THE TEST: Verify container images are minimal, scanned, hardened, and trusted. PASS: images use approved minimal/distroless bases, run as non-root, contain no embedded secrets, are vuln-scanned with no unaddressed criticals, and are signed (cosign) with admission control enforcing signatures. Exceptions: images with critical CVEs deployed, running as root, secrets baked into layers, untrusted/public base images, and unsigned images allowed to run. The evidence — The image inventory in the registry + their vulnerability-scan results (base + app layers) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Registry (ECR/ACR/Harbor) + scanner (Trivy/Grype/Inspector) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Registry (ECR/ACR/Harbor) + scanner (Trivy/Grype/Inspector) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Registry (ECR/ACR/Harbor) + scanner (Trivy/Grype/Inspector); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Build Environment & CI/CD (Continuous Integration / Continuous Delivery): \"Container image security\" Audit Evidence\n\nThe test:\nVerify container images are minimal, scanned, hardened, and trusted. PASS: images use approved minimal/distroless bases, run as non-root, contain no embedded secrets, are vuln-scanned with no unaddressed criticals, and are signed (cosign) with admission control enforcing signatures. Exceptions: images with critical CVEs deployed, running as root, secrets baked into layers, untrusted/public base images, and unsigned images allowed to run.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- build-cicd_inventory.json   (in-scope items — The image inventory in the registry + their vulnerability-scan results (base + app layers))\n- build-cicd_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Container image security\",\n  \"domain\": \"Build Environment & CI/CD (Continuous Integration / Continuous Delivery)\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{bcd_",
        "/evidence/build-cicd_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Platform / DevOps engineering\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Container image security\" control must cover\n# fragment: container_image_security_",
        "/evidence/build-cicd_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "build-cicd_inventory.json",
            "isDir": false
          },
          {
            "name": "build-cicd_state.json",
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
          "value": "FLAG{bcd_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/build-cicd_inventory.json",
          "value": "container_image_security_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/build-cicd_state.json",
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
          "id": "bcd-03-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Container image security\" sub-process of Build Environment & CI/CD (Continuous Integration / Continuous Delivery)?",
          "options": [
            "Re-implement the control on the auditor's behalf",
            "Increase the number of tools the team uses",
            "Replace the system owner's judgement entirely",
            "Obtain evidence that the container image security control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run or own the control."
        },
        {
          "id": "bcd-03-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Container image security\" matter to the broader Build Environment & CI/CD (Continuous Integration / Continuous Delivery) posture?",
          "options": [
            "It is relevant solely for marketing",
            "It has no effect once a firewall exists",
            "It is a control other Build Environment & CI/CD (Continuous Integration / Continuous Delivery) controls depend on, so a gap here propagates risk into everything scoped to it",
            "It only affects documentation aesthetics"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure undermines the controls layered on top."
        },
        {
          "id": "bcd-03-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Container image security\" control?",
          "options": [
            "The vendor's marketing datasheet",
            "The The image inventory in the registry + their vulnerability-scan results (base + app layers) reconciled against policy, plus the resulting findings working paper",
            "A verbal assurance from the team lead",
            "A screenshot of the login page"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — exports reconciled to policy, not assertions."
        },
        {
          "id": "bcd-03-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where would an auditor pull the evidence for \"Container image security\"?",
          "options": [
            "Registry (ECR/ACR/Harbor) + scanner (Trivy/Grype/Inspector) (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., Registry (ECR/ACR/Harbor) + scanner (Trivy/Grype/Inspector)) via read-only access."
        },
        {
          "id": "bcd-03-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Container image security\"?",
          "options": [
            "The external auditor",
            "No one — it is ownerless",
            "The end customer",
            "Platform / DevOps — own images (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "Platform / DevOps — own images owns the control data; the auditor independently verifies it."
        },
        {
          "id": "bcd-03-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Container image security\", which part stays with the human auditor?",
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
          "id": "bcd-03-q7",
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
          "id": "bcd-03-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Container image security\", which is a realistic reportable finding?",
          "options": [
            "Production images run as root off a full Ubuntu base with dozens of critical CVEs and an embedded API key in an early layer; nothing enforces signing, so any image can run.",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. Production images run as root off a full Ubuntu base with dozens of critical CVEs and an embedded API key in an early layer; nothing enforces signing, so any image can run."
        },
        {
          "id": "bcd-03-q9",
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
          "id": "bcd-03-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Container image security\" also serve privacy and regulatory goals?",
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
    "epochId": "build-cicd",
    "id": "bcd-04",
    "order": 4,
    "title": "Container runtime security",
    "subtitle": "Agentic technical & privacy audit of the container runtime security control",
    "category": "cybersecurity",
    "xp": 100,
    "easeScore": 5,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Container runtime security\" control for Build Environment & CI/CD (Continuous Integration / Continuous Delivery) is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify containers run with least privilege and runtime threats are detected. PASS: containers are non-privileged, drop Linux capabilities, use read-only root filesystems + seccomp/AppArmor, and don't mount the host or run as root; runtime threat detection (Falco) is deployed; and network policy restricts pod-to-pod. Exceptions: privileged containers, host-path/Docker-socket mounts, no seccomp, no runtime detection, and flat pod networking.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Build Environment & CI/CD (Continuous Integration / Continuous Delivery) systems of record (Kubernetes runtime (containerd) + Pod Security Standards / admission; Runtime detection — Falco / Defender for Containers / Sysdig; CNI network policy (Calico / Cilium)) as tools — e.g. `scan running pods for privileged:true, hostPID/hostNetwork, host-path/`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The runtime security config (read-only root FS, dropped capabilities, no privileged containers, seccomp/AppArmor)",
        "The runtime-threat-detection tooling + its coverage (Falco / Defender for Containers)",
        "The privileged / host-mounted container inventory",
        "The runtime network policy (pod-to-pod restriction)"
      ],
      "system": [
        "Kubernetes runtime (containerd) + Pod Security Standards / admission",
        "Runtime detection — Falco / Defender for Containers / Sysdig",
        "CNI network policy (Calico / Cilium)"
      ],
      "dataOwner": [
        "Platform / SRE (Kubernetes)",
        "Security (runtime detection)",
        "App owners"
      ],
      "scoring": {
        "ease": "EASE 5/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Build Environment & CI/CD (Continuous Integration / Continuous Delivery) controls."
      }
    },
    "badge": {
      "id": "bcd-04-badge",
      "name": "Build Environment & CI/CD (Continuous Integration / Continuous Delivery) Auditor",
      "emoji": "🏗️"
    },
    "wonder": {
      "name": "Container runtime security",
      "location": "Build Environment & CI/CD (Continuous Integration / Continuous Delivery)",
      "era": "Present Day",
      "emoji": "🏗️"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Container runtime security\" as a repeatable agentic workflow: pull the real evidence (The runtime security config (read-only root FS, dropped capabilities, no privileged containers, seccomp/AppArmor)) with read-only agents, run the test against policy, and issue a defensible opinion on the Build Environment & CI/CD (Continuous Integration / Continuous Delivery) control.",
      "year": 2025,
      "overview": [
        "The \"Container runtime security\" sub-process is one of the controls an auditor must verify for Build Environment & CI/CD (Continuous Integration / Continuous Delivery). The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the runtime security config (read-only root FS, dropped capabilities, no privileged containers, seccomp/AppArmor), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Kubernetes runtime (containerd) + Pod Security Standards / admission, Runtime detection — Falco / Defender for Containers / Sysdig, CNI network policy (Calico / Cilium) — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `scan running pods for privileged:true, hostPID/hostNetwork, host-path/docker.soc` — read-only, against the systems of record.",
        "The test itself is specific. Verify containers run with least privilege and runtime threats are detected. PASS: containers are non-privileged, drop Linux capabilities, use read-only root filesystems + seccomp/AppArmor, and don't mount the host or run as root; runtime threat detection (Falco) is deployed; and network policy restricts pod-to-pod. Exceptions: privileged containers, host-path/Docker-socket mounts, no seccomp, no runtime detection, and flat pod networking. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `04_container_runtime_security_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Kubernetes runtime (containerd) + Pod Security Standards / admission and Runtime detection — Falco / Defender for Containers / Sysdig (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 04_container_runtime_security_mcp.py` to expose it to your agent — or `python 04_container_runtime_security_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "SolarWinds: the build system as the attack surface",
        "when": "2020",
        "where": "SolarWinds Orion build pipeline",
        "impact": "Malicious code injected during the build reached ~18,000 customers through a signed, trusted update.",
        "body": [
          "The SUNBURST actors did not tamper with source in the repo — they compromised the BUILD environment and injected the backdoor as Orion was compiled, so the malicious artifact was signed and shipped as legitimate.",
          "It reframed CI/CD as a first-class attack surface: an auditor must verify build-environment isolation, provenance/SLSA attestation, and that what ships is provably built from reviewed source."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Build Environment & CI/CD (Continuous Integration / Continuous Delivery) scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull Kubernetes runtime (containerd) + Pod Security Standards / admission · Runtime detection — Falco / Defender for Containers / Sysdig",
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
          "year": 2020,
          "event": "SolarWinds SUNBURST — build-time injection into a signed update",
          "highlight": true
        },
        {
          "year": 2021,
          "event": "Codecov bash-uploader compromise exposes CI secrets at scale"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Container runtime security\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "scan running pods for privileged:true, hostPID/hostNetwork, host-path/docker.sock mounts, runAsRoot\nconfirm Pod Security Standards (restricted) admission is enforced\nFalco / Defender-for-Containers deployment + rule coverage\nNetworkPolicy presence (default-deny pod-to-pod?)"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The runtime security config (read-only root FS, dropped capabilities, no privileged containers, seccomp/AppArmor).",
        "The test: Verify containers run with least privilege and runtime threats are detected.",
        "Reconcile the systems of record (Kubernetes runtime (containerd) + Pod Security Standards / admission, Runtime detection — Falco / Defender for Containers / Sysdig, CNI network policy (Calico / Cilium)) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. Several workloads run privileged with the Docker socket mounted (container escape to the node), no seccomp profiles are applied, there's no runtime detection, and any pod can reach any other pod."
      ],
      "references": [
        {
          "title": "NIST SP 800-190",
          "url": "https://csrc.nist.gov/pubs/sp/800/190/final"
        },
        {
          "title": "CIS Kubernetes Benchmark",
          "url": "https://www.cisecurity.org/benchmark/kubernetes"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "04_container_runtime_security_mcp.py",
          "url": "/audit-code/build-cicd/04_container_runtime_security_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Build Environment & CI/CD (Continuous Integration / Continuous Delivery) evidence for \"Container runtime security\" (the runtime security config (read-only root fs, dropped capabilities, no privileged containers, seccomp/apparmor)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Container runtime security\" control for Build Environment & CI/CD (Continuous Integration / Continuous Delivery) at AcmeCorp. THE TEST: Verify containers run with least privilege and runtime threats are detected. PASS: containers are non-privileged, drop Linux capabilities, use read-only root filesystems + seccomp/AppArmor, and don't mount the host or run as root; runtime threat detection (Falco) is deployed; and network policy restricts pod-to-pod. Exceptions: privileged containers, host-path/Docker-socket mounts, no seccomp, no runtime detection, and flat pod networking. The evidence — The runtime security config (read-only root FS, dropped capabilities, no privileged containers, seccomp/AppArmor) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Kubernetes runtime (containerd) + Pod Security Standards / admission APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Kubernetes runtime (containerd) + Pod Security Standards / admission gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Kubernetes runtime (containerd) + Pod Security Standards / admission; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Build Environment & CI/CD (Continuous Integration / Continuous Delivery): \"Container runtime security\" Audit Evidence\n\nThe test:\nVerify containers run with least privilege and runtime threats are detected. PASS: containers are non-privileged, drop Linux capabilities, use read-only root filesystems + seccomp/AppArmor, and don't mount the host or run as root; runtime threat detection (Falco) is deployed; and network policy restricts pod-to-pod. Exceptions: privileged containers, host-path/Docker-socket mounts, no seccomp, no runtime detection, and flat pod networking.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- build-cicd_inventory.json   (in-scope items — The runtime security config (read-only root FS, dropped capabilities, no privileged containers, seccomp/AppArmor))\n- build-cicd_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Container runtime security\",\n  \"domain\": \"Build Environment & CI/CD (Continuous Integration / Continuous Delivery)\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{bcd_",
        "/evidence/build-cicd_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Platform / DevOps engineering\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Container runtime security\" control must cover\n# fragment: container_runtime_security_",
        "/evidence/build-cicd_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "build-cicd_inventory.json",
            "isDir": false
          },
          {
            "name": "build-cicd_state.json",
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
          "value": "FLAG{bcd_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/build-cicd_inventory.json",
          "value": "container_runtime_security_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/build-cicd_state.json",
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
          "id": "bcd-04-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Container runtime security\" sub-process of Build Environment & CI/CD (Continuous Integration / Continuous Delivery)?",
          "options": [
            "Re-implement the control on the auditor's behalf",
            "Increase the number of tools the team uses",
            "Replace the system owner's judgement entirely",
            "Obtain evidence that the container runtime security control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run or own the control."
        },
        {
          "id": "bcd-04-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Container runtime security\" matter to the broader Build Environment & CI/CD (Continuous Integration / Continuous Delivery) posture?",
          "options": [
            "It is relevant solely for marketing",
            "It has no effect once a firewall exists",
            "It is a control other Build Environment & CI/CD (Continuous Integration / Continuous Delivery) controls depend on, so a gap here propagates risk into everything scoped to it",
            "It only affects documentation aesthetics"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure undermines the controls layered on top."
        },
        {
          "id": "bcd-04-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Container runtime security\" control?",
          "options": [
            "The vendor's marketing datasheet",
            "The The runtime security config (read-only root FS, dropped capabilities, no privileged containers, seccomp/AppArmor) reconciled against policy, plus the resulting findings working paper",
            "A verbal assurance from the team lead",
            "A screenshot of the login page"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — exports reconciled to policy, not assertions."
        },
        {
          "id": "bcd-04-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where would an auditor pull the evidence for \"Container runtime security\"?",
          "options": [
            "Kubernetes runtime (containerd) + Pod Security Standards / admission (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., Kubernetes runtime (containerd) + Pod Security Standards / admission) via read-only access."
        },
        {
          "id": "bcd-04-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Container runtime security\"?",
          "options": [
            "The external auditor",
            "No one — it is ownerless",
            "The end customer",
            "Platform / SRE (Kubernetes) (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "Platform / SRE (Kubernetes) owns the control data; the auditor independently verifies it."
        },
        {
          "id": "bcd-04-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Container runtime security\", which part stays with the human auditor?",
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
          "id": "bcd-04-q7",
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
          "id": "bcd-04-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Container runtime security\", which is a realistic reportable finding?",
          "options": [
            "Several workloads run privileged with the Docker socket mounted (container escape to the node), no seccomp profiles are applied, there's no runtime detection, and any pod can reach any other pod.",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. Several workloads run privileged with the Docker socket mounted (container escape to the node), no seccomp profiles are applied, there's no runtime detection, and any pod can reach any other pod."
        },
        {
          "id": "bcd-04-q9",
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
          "id": "bcd-04-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Container runtime security\" also serve privacy and regulatory goals?",
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
    "epochId": "build-cicd",
    "id": "bcd-05",
    "order": 5,
    "title": "Orchestration cluster security",
    "subtitle": "Agentic technical & privacy audit of the orchestration cluster security control",
    "category": "cybersecurity",
    "xp": 100,
    "easeScore": 6,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Orchestration cluster security\" control for Build Environment & CI/CD (Continuous Integration / Continuous Delivery) is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify orchestration clusters are hardened and access-controlled. PASS: the API server isn't publicly exposed without auth; RBAC is least-privilege (few cluster-admins, no wildcard roles, no anonymous access); etcd is encrypted at rest; audit logging is on and shipped; admission control (Pod Security, OPA) is enforced; and the cluster + nodes are patched/supported. Exceptions: public API server, broad cluster-admin/wildcard RBAC, anonymous access, etcd unencrypted, audit logging off, and EOL cluster versions.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Build Environment & CI/CD (Continuous Integration / Continuous Delivery) systems of record (Kubernetes (EKS / AKS / GKE / self-managed); kube-bench / CIS-CAT; RBAC + admission control) as tools — e.g. `kube-bench (CIS Kubernetes Benchmark) on control plane + nodes`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The Kubernetes cluster config (API-server access, RBAC, etcd encryption, audit logging) vs the CIS benchmark",
        "The cluster RBAC export — who/what has cluster-admin",
        "Control-plane + node hardening + version/patch (supported, not EOL)",
        "Admission control + Pod Security + network-policy enforcement"
      ],
      "system": [
        "Kubernetes (EKS / AKS / GKE / self-managed)",
        "kube-bench / CIS-CAT",
        "RBAC + admission control"
      ],
      "dataOwner": [
        "Platform / SRE — owns the cluster",
        "Security — owns the baseline",
        "Cloud platform"
      ],
      "scoring": {
        "ease": "EASE 6/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Build Environment & CI/CD (Continuous Integration / Continuous Delivery) controls."
      }
    },
    "badge": {
      "id": "bcd-05-badge",
      "name": "Build Environment & CI/CD (Continuous Integration / Continuous Delivery) Auditor",
      "emoji": "🏗️"
    },
    "wonder": {
      "name": "Orchestration cluster security",
      "location": "Build Environment & CI/CD (Continuous Integration / Continuous Delivery)",
      "era": "Present Day",
      "emoji": "🏗️"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Orchestration cluster security\" as a repeatable agentic workflow: pull the real evidence (The Kubernetes cluster config (API-server access, RBAC, etcd encryption, audit logging) vs the CIS benchmark) with read-only agents, run the test against policy, and issue a defensible opinion on the Build Environment & CI/CD (Continuous Integration / Continuous Delivery) control.",
      "year": 2025,
      "overview": [
        "The \"Orchestration cluster security\" sub-process is one of the controls an auditor must verify for Build Environment & CI/CD (Continuous Integration / Continuous Delivery). The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the Kubernetes cluster config (API-server access, RBAC, etcd encryption, audit logging) vs the CIS benchmark, for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Kubernetes (EKS / AKS / GKE / self-managed), kube-bench / CIS-CAT, RBAC + admission control — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `kube-bench (CIS Kubernetes Benchmark) on control plane + nodes` — read-only, against the systems of record.",
        "The test itself is specific. Verify orchestration clusters are hardened and access-controlled. PASS: the API server isn't publicly exposed without auth; RBAC is least-privilege (few cluster-admins, no wildcard roles, no anonymous access); etcd is encrypted at rest; audit logging is on and shipped; admission control (Pod Security, OPA) is enforced; and the cluster + nodes are patched/supported. Exceptions: public API server, broad cluster-admin/wildcard RBAC, anonymous access, etcd unencrypted, audit logging off, and EOL cluster versions. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `05_orchestration_cluster_security_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Kubernetes (EKS / AKS / GKE / self-managed) and kube-bench / CIS-CAT (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 05_orchestration_cluster_security_mcp.py` to expose it to your agent — or `python 05_orchestration_cluster_security_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "SolarWinds: the build system as the attack surface",
        "when": "2020",
        "where": "SolarWinds Orion build pipeline",
        "impact": "Malicious code injected during the build reached ~18,000 customers through a signed, trusted update.",
        "body": [
          "The SUNBURST actors did not tamper with source in the repo — they compromised the BUILD environment and injected the backdoor as Orion was compiled, so the malicious artifact was signed and shipped as legitimate.",
          "It reframed CI/CD as a first-class attack surface: an auditor must verify build-environment isolation, provenance/SLSA attestation, and that what ships is provably built from reviewed source."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Build Environment & CI/CD (Continuous Integration / Continuous Delivery) scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull Kubernetes (EKS / AKS / GKE / self-managed) · kube-bench / CIS-CAT",
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
          "year": 2020,
          "event": "SolarWinds SUNBURST — build-time injection into a signed update",
          "highlight": true
        },
        {
          "year": 2021,
          "event": "Codecov bash-uploader compromise exposes CI secrets at scale"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Orchestration cluster security\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "kube-bench (CIS Kubernetes Benchmark) on control plane + nodes\nkubectl get clusterrolebindings → who has cluster-admin; find wildcard ClusterRoles + system:anonymous binding\nconfirm etcd encryption-at-rest + API audit logging enabled + shipped\ncheck cluster version vs vendor EOL"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The Kubernetes cluster config (API-server access, RBAC, etcd encryption, audit logging) vs the CIS benchmark.",
        "The test: Verify orchestration clusters are hardened and access-controlled.",
        "Reconcile the systems of record (Kubernetes (EKS / AKS / GKE / self-managed), kube-bench / CIS-CAT, RBAC + admission control) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. The cluster grants cluster-admin via a wildcard role to a CI service account, the API audit log is disabled, etcd isn't encrypted, and the cluster is two versions past end-of-life."
      ],
      "references": [
        {
          "title": "CIS Kubernetes Benchmark",
          "url": "https://www.cisecurity.org/benchmark/kubernetes"
        },
        {
          "title": "NSA/CISA Kubernetes Hardening Guide",
          "url": "https://www.cisa.gov/news-events/alerts/2022/03/15/updated-kubernetes-hardening-guide"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "05_orchestration_cluster_security_mcp.py",
          "url": "/audit-code/build-cicd/05_orchestration_cluster_security_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Build Environment & CI/CD (Continuous Integration / Continuous Delivery) evidence for \"Orchestration cluster security\" (the kubernetes cluster config (api-server access, rbac, etcd encryption, audit logging) vs the cis benchmark), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Orchestration cluster security\" control for Build Environment & CI/CD (Continuous Integration / Continuous Delivery) at AcmeCorp. THE TEST: Verify orchestration clusters are hardened and access-controlled. PASS: the API server isn't publicly exposed without auth; RBAC is least-privilege (few cluster-admins, no wildcard roles, no anonymous access); etcd is encrypted at rest; audit logging is on and shipped; admission control (Pod Security, OPA) is enforced; and the cluster + nodes are patched/supported. Exceptions: public API server, broad cluster-admin/wildcard RBAC, anonymous access, etcd unencrypted, audit logging off, and EOL cluster versions. The evidence — The Kubernetes cluster config (API-server access, RBAC, etcd encryption, audit logging) vs the CIS benchmark — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Kubernetes (EKS / AKS / GKE / self-managed) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Kubernetes (EKS / AKS / GKE / self-managed) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Kubernetes (EKS / AKS / GKE / self-managed); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Build Environment & CI/CD (Continuous Integration / Continuous Delivery): \"Orchestration cluster security\" Audit Evidence\n\nThe test:\nVerify orchestration clusters are hardened and access-controlled. PASS: the API server isn't publicly exposed without auth; RBAC is least-privilege (few cluster-admins, no wildcard roles, no anonymous access); etcd is encrypted at rest; audit logging is on and shipped; admission control (Pod Security, OPA) is enforced; and the cluster + nodes are patched/supported. Exceptions: public API server, broad cluster-admin/wildcard RBAC, anonymous access, etcd unencrypted, audit logging off, and EOL cluster versions.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- build-cicd_inventory.json   (in-scope items — The Kubernetes cluster config (API-server access, RBAC, etcd encryption, audit logging) vs the CIS benchmark)\n- build-cicd_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Orchestration cluster security\",\n  \"domain\": \"Build Environment & CI/CD (Continuous Integration / Continuous Delivery)\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{bcd_",
        "/evidence/build-cicd_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Platform / DevOps engineering\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Orchestration cluster security\" control must cover\n# fragment: orchestration_cluster_security_",
        "/evidence/build-cicd_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "build-cicd_inventory.json",
            "isDir": false
          },
          {
            "name": "build-cicd_state.json",
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
          "value": "FLAG{bcd_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/build-cicd_inventory.json",
          "value": "orchestration_cluster_security_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/build-cicd_state.json",
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
          "id": "bcd-05-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Orchestration cluster security\" sub-process of Build Environment & CI/CD (Continuous Integration / Continuous Delivery)?",
          "options": [
            "Re-implement the control on the auditor's behalf",
            "Increase the number of tools the team uses",
            "Replace the system owner's judgement entirely",
            "Obtain evidence that the orchestration cluster security control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run or own the control."
        },
        {
          "id": "bcd-05-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Orchestration cluster security\" matter to the broader Build Environment & CI/CD (Continuous Integration / Continuous Delivery) posture?",
          "options": [
            "It is relevant solely for marketing",
            "It has no effect once a firewall exists",
            "It is a control other Build Environment & CI/CD (Continuous Integration / Continuous Delivery) controls depend on, so a gap here propagates risk into everything scoped to it",
            "It only affects documentation aesthetics"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure undermines the controls layered on top."
        },
        {
          "id": "bcd-05-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Orchestration cluster security\" control?",
          "options": [
            "The vendor's marketing datasheet",
            "The The Kubernetes cluster config (API-server access, RBAC, etcd encryption, audit logging) vs the CIS benchmark reconciled against policy, plus the resulting findings working paper",
            "A verbal assurance from the team lead",
            "A screenshot of the login page"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — exports reconciled to policy, not assertions."
        },
        {
          "id": "bcd-05-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where would an auditor pull the evidence for \"Orchestration cluster security\"?",
          "options": [
            "Kubernetes (EKS / AKS / GKE / self-managed) (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., Kubernetes (EKS / AKS / GKE / self-managed)) via read-only access."
        },
        {
          "id": "bcd-05-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Orchestration cluster security\"?",
          "options": [
            "The external auditor",
            "No one — it is ownerless",
            "The end customer",
            "Platform / SRE — owns the cluster (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "Platform / SRE — owns the cluster owns the control data; the auditor independently verifies it."
        },
        {
          "id": "bcd-05-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Orchestration cluster security\", which part stays with the human auditor?",
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
          "id": "bcd-05-q7",
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
          "id": "bcd-05-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Orchestration cluster security\", which is a realistic reportable finding?",
          "options": [
            "The cluster grants cluster-admin via a wildcard role to a CI service account, the API audit log is disabled, etcd isn't encrypted, and the cluster is two versions past end-of-life.",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. The cluster grants cluster-admin via a wildcard role to a CI service account, the API audit log is disabled, etcd isn't encrypted, and the cluster is two versions past end-of-life."
        },
        {
          "id": "bcd-05-q9",
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
          "id": "bcd-05-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Orchestration cluster security\" also serve privacy and regulatory goals?",
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
    "epochId": "build-cicd",
    "id": "bcd-06",
    "order": 6,
    "title": "Workload security",
    "subtitle": "Agentic technical & privacy audit of the workload security control",
    "category": "cybersecurity",
    "xp": 100,
    "easeScore": 7,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Workload security\" control for Build Environment & CI/CD (Continuous Integration / Continuous Delivery) is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify individual workloads run least-privilege with scoped identity. PASS: each workload uses a dedicated, least-privilege service account mapped to a scoped cloud identity (IRSA / workload identity, not the node role); has resource limits; restricts its network exposure with auth on anything external; and consumes secrets via a vault/CSI driver, not baked env vars. Exceptions: workloads using the node role or default SA (over-privileged), no resource limits, externally-exposed services with no auth, and secrets in plain env vars.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Build Environment & CI/CD (Continuous Integration / Continuous Delivery) systems of record (Kubernetes workloads + ServiceAccounts; IRSA / GKE / Azure Workload Identity; Secrets CSI / Vault injector) as tools — e.g. `per workload: serviceAccountName + its RBAC + the cloud identity it as`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "Per-workload security context + resource limits + the service-account/identity it runs as",
        "The workload-to-cloud-identity mapping (IRSA / workload identity vs node role)",
        "Workload network exposure (Services/Ingress exposed externally) + their auth",
        "Secrets mounted into workloads + how (env vs mounted secret vs vault injection)"
      ],
      "system": [
        "Kubernetes workloads + ServiceAccounts",
        "IRSA / GKE / Azure Workload Identity",
        "Secrets CSI / Vault injector"
      ],
      "dataOwner": [
        "App owners — own their workloads",
        "Platform / SRE",
        "Security"
      ],
      "scoring": {
        "ease": "EASE 7/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Build Environment & CI/CD (Continuous Integration / Continuous Delivery) controls."
      }
    },
    "badge": {
      "id": "bcd-06-badge",
      "name": "Build Environment & CI/CD (Continuous Integration / Continuous Delivery) Auditor",
      "emoji": "🏗️"
    },
    "wonder": {
      "name": "Workload security",
      "location": "Build Environment & CI/CD (Continuous Integration / Continuous Delivery)",
      "era": "Present Day",
      "emoji": "🏗️"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Workload security\" as a repeatable agentic workflow: pull the real evidence (Per-workload security context + resource limits + the service-account/identity it runs as) with read-only agents, run the test against policy, and issue a defensible opinion on the Build Environment & CI/CD (Continuous Integration / Continuous Delivery) control.",
      "year": 2025,
      "overview": [
        "The \"Workload security\" sub-process is one of the controls an auditor must verify for Build Environment & CI/CD (Continuous Integration / Continuous Delivery). The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me per-workload security context + resource limits + the service-account/identity it runs as, for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Kubernetes workloads + ServiceAccounts, IRSA / GKE / Azure Workload Identity, Secrets CSI / Vault injector — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `per workload: serviceAccountName + its RBAC + the cloud identity it assumes (IRS` — read-only, against the systems of record.",
        "The test itself is specific. Verify individual workloads run least-privilege with scoped identity. PASS: each workload uses a dedicated, least-privilege service account mapped to a scoped cloud identity (IRSA / workload identity, not the node role); has resource limits; restricts its network exposure with auth on anything external; and consumes secrets via a vault/CSI driver, not baked env vars. Exceptions: workloads using the node role or default SA (over-privileged), no resource limits, externally-exposed services with no auth, and secrets in plain env vars. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `06_workload_security_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Kubernetes workloads + ServiceAccounts and IRSA / GKE / Azure Workload Identity (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 06_workload_security_mcp.py` to expose it to your agent — or `python 06_workload_security_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "SolarWinds: the build system as the attack surface",
        "when": "2020",
        "where": "SolarWinds Orion build pipeline",
        "impact": "Malicious code injected during the build reached ~18,000 customers through a signed, trusted update.",
        "body": [
          "The SUNBURST actors did not tamper with source in the repo — they compromised the BUILD environment and injected the backdoor as Orion was compiled, so the malicious artifact was signed and shipped as legitimate.",
          "It reframed CI/CD as a first-class attack surface: an auditor must verify build-environment isolation, provenance/SLSA attestation, and that what ships is provably built from reviewed source."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Build Environment & CI/CD (Continuous Integration / Continuous Delivery) scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull Kubernetes workloads + ServiceAccounts · IRSA / GKE / Azure Workload Identity",
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
          "year": 2020,
          "event": "SolarWinds SUNBURST — build-time injection into a signed update",
          "highlight": true
        },
        {
          "year": 2021,
          "event": "Codecov bash-uploader compromise exposes CI secrets at scale"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Workload security\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "per workload: serviceAccountName + its RBAC + the cloud identity it assumes (IRSA annotation)\nfind pods using the default SA or the node instance role (over-privileged)\nlist externally-exposed Services/Ingress + whether they require auth\nhow secrets reach pods: env vs mounted vs vault-injected"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: Per-workload security context + resource limits + the service-account/identity it runs as.",
        "The test: Verify individual workloads run least-privilege with scoped identity.",
        "Reconcile the systems of record (Kubernetes workloads + ServiceAccounts, IRSA / GKE / Azure Workload Identity, Secrets CSI / Vault injector) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. Most pods use the default service account and inherit the node's broad IAM role (so a compromised pod has the node's cloud permissions), and database passwords are passed as plain environment variables."
      ],
      "references": [
        {
          "title": "NIST SP 800-190",
          "url": "https://csrc.nist.gov/pubs/sp/800/190/final"
        },
        {
          "title": "CIS Kubernetes Benchmark",
          "url": "https://www.cisecurity.org/benchmark/kubernetes"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "06_workload_security_mcp.py",
          "url": "/audit-code/build-cicd/06_workload_security_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Build Environment & CI/CD (Continuous Integration / Continuous Delivery) evidence for \"Workload security\" (per-workload security context + resource limits + the service-account/identity it runs as), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Workload security\" control for Build Environment & CI/CD (Continuous Integration / Continuous Delivery) at AcmeCorp. THE TEST: Verify individual workloads run least-privilege with scoped identity. PASS: each workload uses a dedicated, least-privilege service account mapped to a scoped cloud identity (IRSA / workload identity, not the node role); has resource limits; restricts its network exposure with auth on anything external; and consumes secrets via a vault/CSI driver, not baked env vars. Exceptions: workloads using the node role or default SA (over-privileged), no resource limits, externally-exposed services with no auth, and secrets in plain env vars. The evidence — Per-workload security context + resource limits + the service-account/identity it runs as — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Kubernetes workloads + ServiceAccounts APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Kubernetes workloads + ServiceAccounts gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Kubernetes workloads + ServiceAccounts; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Build Environment & CI/CD (Continuous Integration / Continuous Delivery): \"Workload security\" Audit Evidence\n\nThe test:\nVerify individual workloads run least-privilege with scoped identity. PASS: each workload uses a dedicated, least-privilege service account mapped to a scoped cloud identity (IRSA / workload identity, not the node role); has resource limits; restricts its network exposure with auth on anything external; and consumes secrets via a vault/CSI driver, not baked env vars. Exceptions: workloads using the node role or default SA (over-privileged), no resource limits, externally-exposed services with no auth, and secrets in plain env vars.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- build-cicd_inventory.json   (in-scope items — Per-workload security context + resource limits + the service-account/identity it runs as)\n- build-cicd_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Workload security\",\n  \"domain\": \"Build Environment & CI/CD (Continuous Integration / Continuous Delivery)\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{bcd_",
        "/evidence/build-cicd_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Platform / DevOps engineering\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Workload security\" control must cover\n# fragment: workload_security_",
        "/evidence/build-cicd_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "build-cicd_inventory.json",
            "isDir": false
          },
          {
            "name": "build-cicd_state.json",
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
          "value": "FLAG{bcd_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/build-cicd_inventory.json",
          "value": "workload_security_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/build-cicd_state.json",
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
          "id": "bcd-06-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Workload security\" sub-process of Build Environment & CI/CD (Continuous Integration / Continuous Delivery)?",
          "options": [
            "Re-implement the control on the auditor's behalf",
            "Increase the number of tools the team uses",
            "Replace the system owner's judgement entirely",
            "Obtain evidence that the workload security control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run or own the control."
        },
        {
          "id": "bcd-06-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Workload security\" matter to the broader Build Environment & CI/CD (Continuous Integration / Continuous Delivery) posture?",
          "options": [
            "It is relevant solely for marketing",
            "It has no effect once a firewall exists",
            "It is a control other Build Environment & CI/CD (Continuous Integration / Continuous Delivery) controls depend on, so a gap here propagates risk into everything scoped to it",
            "It only affects documentation aesthetics"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure undermines the controls layered on top."
        },
        {
          "id": "bcd-06-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Workload security\" control?",
          "options": [
            "The vendor's marketing datasheet",
            "The Per-workload security context + resource limits + the service-account/identity it runs as reconciled against policy, plus the resulting findings working paper",
            "A verbal assurance from the team lead",
            "A screenshot of the login page"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — exports reconciled to policy, not assertions."
        },
        {
          "id": "bcd-06-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where would an auditor pull the evidence for \"Workload security\"?",
          "options": [
            "Kubernetes workloads + ServiceAccounts (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., Kubernetes workloads + ServiceAccounts) via read-only access."
        },
        {
          "id": "bcd-06-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Workload security\"?",
          "options": [
            "The external auditor",
            "No one — it is ownerless",
            "The end customer",
            "App owners — own their workloads (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "App owners — own their workloads owns the control data; the auditor independently verifies it."
        },
        {
          "id": "bcd-06-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Workload security\", which part stays with the human auditor?",
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
          "id": "bcd-06-q7",
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
          "id": "bcd-06-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Workload security\", which is a realistic reportable finding?",
          "options": [
            "Most pods use the default service account and inherit the node's broad IAM role (so a compromised pod has the node's cloud permissions), and database passwords are passed as plain environment variables.",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. Most pods use the default service account and inherit the node's broad IAM role (so a compromised pod has the node's cloud permissions), and database passwords are passed as plain environment variables."
        },
        {
          "id": "bcd-06-q9",
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
          "id": "bcd-06-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Workload security\" also serve privacy and regulatory goals?",
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
    "epochId": "build-cicd",
    "id": "bcd-07",
    "order": 7,
    "title": "Supply chain in orchestration",
    "subtitle": "Agentic technical & privacy audit of the supply chain in orchestration control",
    "category": "cybersecurity",
    "xp": 100,
    "easeScore": 5,
    "valueScore": 9,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Supply chain in orchestration\" control for Build Environment & CI/CD (Continuous Integration / Continuous Delivery) is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify only trusted, provenance-verified software runs in the cluster. PASS: admission control enforces signed images from approved registries with provenance/SLSA attestation; Helm charts/manifests come from trusted, pinned sources; third-party operators are vetted and least-privilege; and there's no path to deploy unverified artifacts. Exceptions: any-registry pulls, unsigned images admitted, unpinned/untrusted Helm charts, and cluster-wide operators with excessive permissions.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Build Environment & CI/CD (Continuous Integration / Continuous Delivery) systems of record (Admission control (Kyverno / OPA Gatekeeper / Sigstore policy-controller); Registry allow-list; Helm / GitOps source) as tools — e.g. `Kyverno/Gatekeeper policy: enforce signed + approved-registry + proven`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The provenance + admission policy for what's allowed to run (signed images, trusted registries, SLSA level)",
        "Helm-chart/manifest source trust (charts from trusted repos, pinned versions)",
        "The admission-control policy set (Kyverno / OPA Gatekeeper) enforcing supply-chain rules",
        "Third-party operators/controllers running in-cluster + their permissions"
      ],
      "system": [
        "Admission control (Kyverno / OPA Gatekeeper / Sigstore policy-controller)",
        "Registry allow-list",
        "Helm / GitOps source"
      ],
      "dataOwner": [
        "Platform / SRE — owns admission",
        "AppSec — owns supply-chain policy",
        "Security"
      ],
      "scoring": {
        "ease": "EASE 5/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 9/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Build Environment & CI/CD (Continuous Integration / Continuous Delivery) controls."
      }
    },
    "badge": {
      "id": "bcd-07-badge",
      "name": "Build Environment & CI/CD (Continuous Integration / Continuous Delivery) Auditor",
      "emoji": "🏗️"
    },
    "wonder": {
      "name": "Supply chain in orchestration",
      "location": "Build Environment & CI/CD (Continuous Integration / Continuous Delivery)",
      "era": "Present Day",
      "emoji": "🏗️"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Supply chain in orchestration\" as a repeatable agentic workflow: pull the real evidence (The provenance + admission policy for what's allowed to run (signed images, trusted registries, SLSA level)) with read-only agents, run the test against policy, and issue a defensible opinion on the Build Environment & CI/CD (Continuous Integration / Continuous Delivery) control.",
      "year": 2025,
      "overview": [
        "The \"Supply chain in orchestration\" sub-process is one of the controls an auditor must verify for Build Environment & CI/CD (Continuous Integration / Continuous Delivery). The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the provenance + admission policy for what's allowed to run (signed images, trusted registries, SLSA level), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Admission control (Kyverno / OPA Gatekeeper / Sigstore policy-controller), Registry allow-list, Helm / GitOps source — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `Kyverno/Gatekeeper policy: enforce signed + approved-registry + provenance` — read-only, against the systems of record.",
        "The test itself is specific. Verify only trusted, provenance-verified software runs in the cluster. PASS: admission control enforces signed images from approved registries with provenance/SLSA attestation; Helm charts/manifests come from trusted, pinned sources; third-party operators are vetted and least-privilege; and there's no path to deploy unverified artifacts. Exceptions: any-registry pulls, unsigned images admitted, unpinned/untrusted Helm charts, and cluster-wide operators with excessive permissions. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `07_supply_chain_in_orchestration_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Admission control (Kyverno / OPA Gatekeeper / Sigstore policy-controller) and Registry allow-list (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 07_supply_chain_in_orchestration_mcp.py` to expose it to your agent — or `python 07_supply_chain_in_orchestration_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "SolarWinds: the build system as the attack surface",
        "when": "2020",
        "where": "SolarWinds Orion build pipeline",
        "impact": "Malicious code injected during the build reached ~18,000 customers through a signed, trusted update.",
        "body": [
          "The SUNBURST actors did not tamper with source in the repo — they compromised the BUILD environment and injected the backdoor as Orion was compiled, so the malicious artifact was signed and shipped as legitimate.",
          "It reframed CI/CD as a first-class attack surface: an auditor must verify build-environment isolation, provenance/SLSA attestation, and that what ships is provably built from reviewed source."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Build Environment & CI/CD (Continuous Integration / Continuous Delivery) scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull Admission control (Kyverno / OPA Gatekeeper / Sigstore policy-controller) · Registry allow-list",
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
          "year": 2020,
          "event": "SolarWinds SUNBURST — build-time injection into a signed update",
          "highlight": true
        },
        {
          "year": 2021,
          "event": "Codecov bash-uploader compromise exposes CI secrets at scale"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Supply chain in orchestration\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "Kyverno/Gatekeeper policy: enforce signed + approved-registry + provenance\ntest: try to deploy an unsigned/public image — is it blocked?\nreview third-party operators (their ClusterRole permissions)\nHelm chart sources + version pinning"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The provenance + admission policy for what's allowed to run (signed images, trusted registries, SLSA level).",
        "The test: Verify only trusted, provenance-verified software runs in the cluster.",
        "Reconcile the systems of record (Admission control (Kyverno / OPA Gatekeeper / Sigstore policy-controller), Registry allow-list, Helm / GitOps source) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. Admission control is in audit mode only, so unsigned images from public registries deploy freely, and a third-party logging operator holds cluster-admin-equivalent permissions."
      ],
      "references": [
        {
          "title": "SLSA",
          "url": "https://slsa.dev/"
        },
        {
          "title": "NSA/CISA Kubernetes Hardening Guide",
          "url": "https://www.cisa.gov/news-events/alerts/2022/03/15/updated-kubernetes-hardening-guide"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "07_supply_chain_in_orchestration_mcp.py",
          "url": "/audit-code/build-cicd/07_supply_chain_in_orchestration_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Build Environment & CI/CD (Continuous Integration / Continuous Delivery) evidence for \"Supply chain in orchestration\" (the provenance + admission policy for what's allowed to run (signed images, trusted registries, slsa level)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Supply chain in orchestration\" control for Build Environment & CI/CD (Continuous Integration / Continuous Delivery) at AcmeCorp. THE TEST: Verify only trusted, provenance-verified software runs in the cluster. PASS: admission control enforces signed images from approved registries with provenance/SLSA attestation; Helm charts/manifests come from trusted, pinned sources; third-party operators are vetted and least-privilege; and there's no path to deploy unverified artifacts. Exceptions: any-registry pulls, unsigned images admitted, unpinned/untrusted Helm charts, and cluster-wide operators with excessive permissions. The evidence — The provenance + admission policy for what's allowed to run (signed images, trusted registries, SLSA level) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Admission control (Kyverno / OPA Gatekeeper / Sigstore policy-controller) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Admission control (Kyverno / OPA Gatekeeper / Sigstore policy-controller) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Admission control (Kyverno / OPA Gatekeeper / Sigstore policy-controller); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Build Environment & CI/CD (Continuous Integration / Continuous Delivery): \"Supply chain in orchestration\" Audit Evidence\n\nThe test:\nVerify only trusted, provenance-verified software runs in the cluster. PASS: admission control enforces signed images from approved registries with provenance/SLSA attestation; Helm charts/manifests come from trusted, pinned sources; third-party operators are vetted and least-privilege; and there's no path to deploy unverified artifacts. Exceptions: any-registry pulls, unsigned images admitted, unpinned/untrusted Helm charts, and cluster-wide operators with excessive permissions.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- build-cicd_inventory.json   (in-scope items — The provenance + admission policy for what's allowed to run (signed images, trusted registries, SLSA level))\n- build-cicd_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Supply chain in orchestration\",\n  \"domain\": \"Build Environment & CI/CD (Continuous Integration / Continuous Delivery)\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{bcd_",
        "/evidence/build-cicd_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Platform / DevOps engineering\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Supply chain in orchestration\" control must cover\n# fragment: supply_chain_orchestration_",
        "/evidence/build-cicd_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "build-cicd_inventory.json",
            "isDir": false
          },
          {
            "name": "build-cicd_state.json",
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
          "value": "FLAG{bcd_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/build-cicd_inventory.json",
          "value": "supply_chain_orchestration_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/build-cicd_state.json",
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
          "id": "bcd-07-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Supply chain in orchestration\" sub-process of Build Environment & CI/CD (Continuous Integration / Continuous Delivery)?",
          "options": [
            "Re-implement the control on the auditor's behalf",
            "Increase the number of tools the team uses",
            "Replace the system owner's judgement entirely",
            "Obtain evidence that the supply chain in orchestration control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run or own the control."
        },
        {
          "id": "bcd-07-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Supply chain in orchestration\" matter to the broader Build Environment & CI/CD (Continuous Integration / Continuous Delivery) posture?",
          "options": [
            "It is relevant solely for marketing",
            "It has no effect once a firewall exists",
            "It is a control other Build Environment & CI/CD (Continuous Integration / Continuous Delivery) controls depend on, so a gap here propagates risk into everything scoped to it",
            "It only affects documentation aesthetics"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure undermines the controls layered on top."
        },
        {
          "id": "bcd-07-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Supply chain in orchestration\" control?",
          "options": [
            "The vendor's marketing datasheet",
            "The The provenance + admission policy for what's allowed to run (signed images, trusted registries, SLSA level) reconciled against policy, plus the resulting findings working paper",
            "A verbal assurance from the team lead",
            "A screenshot of the login page"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — exports reconciled to policy, not assertions."
        },
        {
          "id": "bcd-07-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where would an auditor pull the evidence for \"Supply chain in orchestration\"?",
          "options": [
            "Admission control (Kyverno / OPA Gatekeeper / Sigstore policy-controller) (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., Admission control (Kyverno / OPA Gatekeeper / Sigstore policy-controller)) via read-only access."
        },
        {
          "id": "bcd-07-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Supply chain in orchestration\"?",
          "options": [
            "The external auditor",
            "No one — it is ownerless",
            "The end customer",
            "Platform / SRE — owns admission (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "Platform / SRE — owns admission owns the control data; the auditor independently verifies it."
        },
        {
          "id": "bcd-07-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Supply chain in orchestration\", which part stays with the human auditor?",
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
          "id": "bcd-07-q7",
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
          "id": "bcd-07-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Supply chain in orchestration\", which is a realistic reportable finding?",
          "options": [
            "Admission control is in audit mode only, so unsigned images from public registries deploy freely, and a third-party logging operator holds cluster-admin-equivalent permissions.",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. Admission control is in audit mode only, so unsigned images from public registries deploy freely, and a third-party logging operator holds cluster-admin-equivalent permissions."
        },
        {
          "id": "bcd-07-q9",
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
          "id": "bcd-07-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Supply chain in orchestration\" also serve privacy and regulatory goals?",
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
    "epochId": "build-cicd",
    "id": "bcd-08",
    "order": 8,
    "title": "Code and repository security",
    "subtitle": "Agentic technical & privacy audit of the code and repository security control",
    "category": "cybersecurity",
    "xp": 100,
    "easeScore": 6,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Code and repository security\" control for Build Environment & CI/CD (Continuous Integration / Continuous Delivery) is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify source-code integrity controls prevent unreviewed/malicious code reaching builds. PASS: protected branches require PR review (CODEOWNERS for sensitive paths), passing status checks, and (ideally) signed commits; direct push + force-push to protected branches are blocked; admin bypass is restricted + logged; and repo access is least-privilege. Exceptions: unprotected default branch, no required review, admins routinely bypassing checks, force-push allowed, and broad write/admin access.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Build Environment & CI/CD (Continuous Integration / Continuous Delivery) systems of record (GitHub/GitLab/Bitbucket branch protection + CODEOWNERS; Signed commits (GPG / Sigstore gitsign); SCM access model) as tools — e.g. `export branch-protection rules per repo: required reviews, CODEOWNERS,`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "Branch-protection + required-review (CODEOWNERS) config on the default/release branches",
        "Signed-commit + required-status-check config before merge",
        "The repo access model (who can push/merge/admin; outside collaborators)",
        "The required CI checks and whether they can be bypassed/admin-overridden"
      ],
      "system": [
        "GitHub/GitLab/Bitbucket branch protection + CODEOWNERS",
        "Signed commits (GPG / Sigstore gitsign)",
        "SCM access model"
      ],
      "dataOwner": [
        "Engineering org / repo admins",
        "AppSec",
        "DevOps"
      ],
      "scoring": {
        "ease": "EASE 6/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Build Environment & CI/CD (Continuous Integration / Continuous Delivery) controls."
      }
    },
    "badge": {
      "id": "bcd-08-badge",
      "name": "Build Environment & CI/CD (Continuous Integration / Continuous Delivery) Auditor",
      "emoji": "🏗️"
    },
    "wonder": {
      "name": "Code and repository security",
      "location": "Build Environment & CI/CD (Continuous Integration / Continuous Delivery)",
      "era": "Present Day",
      "emoji": "🏗️"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Code and repository security\" as a repeatable agentic workflow: pull the real evidence (Branch-protection + required-review (CODEOWNERS) config on the default/release branches) with read-only agents, run the test against policy, and issue a defensible opinion on the Build Environment & CI/CD (Continuous Integration / Continuous Delivery) control.",
      "year": 2025,
      "overview": [
        "The \"Code and repository security\" sub-process is one of the controls an auditor must verify for Build Environment & CI/CD (Continuous Integration / Continuous Delivery). The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me branch-protection + required-review (CODEOWNERS) config on the default/release branches, for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here GitHub/GitLab/Bitbucket branch protection + CODEOWNERS, Signed commits (GPG / Sigstore gitsign), SCM access model — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `export branch-protection rules per repo: required reviews, CODEOWNERS, status ch` — read-only, against the systems of record.",
        "The test itself is specific. Verify source-code integrity controls prevent unreviewed/malicious code reaching builds. PASS: protected branches require PR review (CODEOWNERS for sensitive paths), passing status checks, and (ideally) signed commits; direct push + force-push to protected branches are blocked; admin bypass is restricted + logged; and repo access is least-privilege. Exceptions: unprotected default branch, no required review, admins routinely bypassing checks, force-push allowed, and broad write/admin access. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `08_code_and_repository_security_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from GitHub/GitLab/Bitbucket branch protection + CODEOWNERS and Signed commits (GPG / Sigstore gitsign) (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 08_code_and_repository_security_mcp.py` to expose it to your agent — or `python 08_code_and_repository_security_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "SolarWinds: the build system as the attack surface",
        "when": "2020",
        "where": "SolarWinds Orion build pipeline",
        "impact": "Malicious code injected during the build reached ~18,000 customers through a signed, trusted update.",
        "body": [
          "The SUNBURST actors did not tamper with source in the repo — they compromised the BUILD environment and injected the backdoor as Orion was compiled, so the malicious artifact was signed and shipped as legitimate.",
          "It reframed CI/CD as a first-class attack surface: an auditor must verify build-environment isolation, provenance/SLSA attestation, and that what ships is provably built from reviewed source."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Build Environment & CI/CD (Continuous Integration / Continuous Delivery) scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull GitHub/GitLab/Bitbucket branch protection + CODEOWNERS · Signed commits (GPG / Sigstore gitsign)",
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
          "year": 2020,
          "event": "SolarWinds SUNBURST — build-time injection into a signed update",
          "highlight": true
        },
        {
          "year": 2021,
          "event": "Codecov bash-uploader compromise exposes CI secrets at scale"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Code and repository security\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "export branch-protection rules per repo: required reviews, CODEOWNERS, status checks, signed commits, no force-push\nlist who has admin/maintain/write; outside collaborators\ncheck 'allow admins to bypass' + recent bypass events\nconfirm required CI checks can't be skipped"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: Branch-protection + required-review (CODEOWNERS) config on the default/release branches.",
        "The test: Verify source-code integrity controls prevent unreviewed/malicious code reaching builds.",
        "Reconcile the systems of record (GitHub/GitLab/Bitbucket branch protection + CODEOWNERS, Signed commits (GPG / Sigstore gitsign), SCM access model) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. The release branch allows direct pushes with no required review, signed commits aren't required, and three outside collaborators have write access — unreviewed code can reach the build unchecked."
      ],
      "references": [
        {
          "title": "NIST SSDF (SP 800-218) — PS practices",
          "url": "https://csrc.nist.gov/pubs/sp/800/218/final"
        },
        {
          "title": "SLSA",
          "url": "https://slsa.dev/"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "08_code_and_repository_security_mcp.py",
          "url": "/audit-code/build-cicd/08_code_and_repository_security_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Build Environment & CI/CD (Continuous Integration / Continuous Delivery) evidence for \"Code and repository security\" (branch-protection + required-review (codeowners) config on the default/release branches), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Code and repository security\" control for Build Environment & CI/CD (Continuous Integration / Continuous Delivery) at AcmeCorp. THE TEST: Verify source-code integrity controls prevent unreviewed/malicious code reaching builds. PASS: protected branches require PR review (CODEOWNERS for sensitive paths), passing status checks, and (ideally) signed commits; direct push + force-push to protected branches are blocked; admin bypass is restricted + logged; and repo access is least-privilege. Exceptions: unprotected default branch, no required review, admins routinely bypassing checks, force-push allowed, and broad write/admin access. The evidence — Branch-protection + required-review (CODEOWNERS) config on the default/release branches — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live GitHub/GitLab/Bitbucket branch protection + CODEOWNERS APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. GitHub/GitLab/Bitbucket branch protection + CODEOWNERS gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from GitHub/GitLab/Bitbucket branch protection + CODEOWNERS; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Build Environment & CI/CD (Continuous Integration / Continuous Delivery): \"Code and repository security\" Audit Evidence\n\nThe test:\nVerify source-code integrity controls prevent unreviewed/malicious code reaching builds. PASS: protected branches require PR review (CODEOWNERS for sensitive paths), passing status checks, and (ideally) signed commits; direct push + force-push to protected branches are blocked; admin bypass is restricted + logged; and repo access is least-privilege. Exceptions: unprotected default branch, no required review, admins routinely bypassing checks, force-push allowed, and broad write/admin access.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- build-cicd_inventory.json   (in-scope items — Branch-protection + required-review (CODEOWNERS) config on the default/release branches)\n- build-cicd_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Code and repository security\",\n  \"domain\": \"Build Environment & CI/CD (Continuous Integration / Continuous Delivery)\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{bcd_",
        "/evidence/build-cicd_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Platform / DevOps engineering\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Code and repository security\" control must cover\n# fragment: code_repository_security_",
        "/evidence/build-cicd_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "build-cicd_inventory.json",
            "isDir": false
          },
          {
            "name": "build-cicd_state.json",
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
          "value": "FLAG{bcd_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/build-cicd_inventory.json",
          "value": "code_repository_security_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/build-cicd_state.json",
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
          "id": "bcd-08-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Code and repository security\" sub-process of Build Environment & CI/CD (Continuous Integration / Continuous Delivery)?",
          "options": [
            "Re-implement the control on the auditor's behalf",
            "Increase the number of tools the team uses",
            "Replace the system owner's judgement entirely",
            "Obtain evidence that the code and repository security control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run or own the control."
        },
        {
          "id": "bcd-08-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Code and repository security\" matter to the broader Build Environment & CI/CD (Continuous Integration / Continuous Delivery) posture?",
          "options": [
            "It is relevant solely for marketing",
            "It has no effect once a firewall exists",
            "It is a control other Build Environment & CI/CD (Continuous Integration / Continuous Delivery) controls depend on, so a gap here propagates risk into everything scoped to it",
            "It only affects documentation aesthetics"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure undermines the controls layered on top."
        },
        {
          "id": "bcd-08-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Code and repository security\" control?",
          "options": [
            "The vendor's marketing datasheet",
            "The Branch-protection + required-review (CODEOWNERS) config on the default/release branches reconciled against policy, plus the resulting findings working paper",
            "A verbal assurance from the team lead",
            "A screenshot of the login page"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — exports reconciled to policy, not assertions."
        },
        {
          "id": "bcd-08-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where would an auditor pull the evidence for \"Code and repository security\"?",
          "options": [
            "GitHub/GitLab/Bitbucket branch protection + CODEOWNERS (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., GitHub/GitLab/Bitbucket branch protection + CODEOWNERS) via read-only access."
        },
        {
          "id": "bcd-08-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Code and repository security\"?",
          "options": [
            "The external auditor",
            "No one — it is ownerless",
            "The end customer",
            "Engineering org / repo admins (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "Engineering org / repo admins owns the control data; the auditor independently verifies it."
        },
        {
          "id": "bcd-08-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Code and repository security\", which part stays with the human auditor?",
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
          "id": "bcd-08-q7",
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
          "id": "bcd-08-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Code and repository security\", which is a realistic reportable finding?",
          "options": [
            "The release branch allows direct pushes with no required review, signed commits aren't required, and three outside collaborators have write access — unreviewed code can reach the build unchecked.",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. The release branch allows direct pushes with no required review, signed commits aren't required, and three outside collaborators have write access — unreviewed code can reach the build unchecked."
        },
        {
          "id": "bcd-08-q9",
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
          "id": "bcd-08-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Code and repository security\" also serve privacy and regulatory goals?",
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
    "epochId": "build-cicd",
    "id": "bcd-09",
    "order": 9,
    "title": "Secrets and credential management",
    "subtitle": "Agentic technical & privacy audit of the secrets and credential management control",
    "category": "cybersecurity",
    "xp": 100,
    "easeScore": 7,
    "valueScore": 9,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Secrets and credential management\" control for Build Environment & CI/CD (Continuous Integration / Continuous Delivery) is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify CI/CD secrets are minimal, scoped, short-lived, and not exposed. PASS: cloud auth uses OIDC short-lived federation (not stored long-lived keys); secrets are scoped to specific environments/workflows; fork/PR workflows can't access secrets; secrets are masked in logs and rotated; and there's no plaintext credential in pipeline config. Exceptions: long-lived cloud keys stored as CI secrets, org-wide secrets readable by every workflow, secrets exposed to fork-PR runs, secrets echoed in logs, and unrotated CI credentials.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Build Environment & CI/CD (Continuous Integration / Continuous Delivery) systems of record (CI secret stores (GitHub/GitLab secrets) + cloud OIDC; Vault / Secrets Manager; The pipeline config) as tools — e.g. `inventory repo/org/environment secrets + which workflows can read them`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The inventory of secrets in CI/CD (repo/org/environment secrets, stored credentials) + their scope",
        "Evidence secrets aren't exposed to untrusted workflows (fork PRs) or printed in logs",
        "Use of short-lived/OIDC credentials vs long-lived stored secrets",
        "Secret rotation + access scoping (which workflows can read which secrets)"
      ],
      "system": [
        "CI secret stores (GitHub/GitLab secrets) + cloud OIDC",
        "Vault / Secrets Manager",
        "The pipeline config"
      ],
      "dataOwner": [
        "DevOps / platform security",
        "AppSec",
        "Cloud platform"
      ],
      "scoring": {
        "ease": "EASE 7/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 9/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Build Environment & CI/CD (Continuous Integration / Continuous Delivery) controls."
      }
    },
    "badge": {
      "id": "bcd-09-badge",
      "name": "Build Environment & CI/CD (Continuous Integration / Continuous Delivery) Auditor",
      "emoji": "🏗️"
    },
    "wonder": {
      "name": "Secrets and credential management",
      "location": "Build Environment & CI/CD (Continuous Integration / Continuous Delivery)",
      "era": "Present Day",
      "emoji": "🏗️"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Secrets and credential management\" as a repeatable agentic workflow: pull the real evidence (The inventory of secrets in CI/CD (repo/org/environment secrets, stored credentials) + their scope) with read-only agents, run the test against policy, and issue a defensible opinion on the Build Environment & CI/CD (Continuous Integration / Continuous Delivery) control.",
      "year": 2025,
      "overview": [
        "The \"Secrets and credential management\" sub-process is one of the controls an auditor must verify for Build Environment & CI/CD (Continuous Integration / Continuous Delivery). The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the inventory of secrets in CI/CD (repo/org/environment secrets, stored credentials) + their scope, for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here CI secret stores (GitHub/GitLab secrets) + cloud OIDC, Vault / Secrets Manager, The pipeline config — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `inventory repo/org/environment secrets + which workflows can read them` — read-only, against the systems of record.",
        "The test itself is specific. Verify CI/CD secrets are minimal, scoped, short-lived, and not exposed. PASS: cloud auth uses OIDC short-lived federation (not stored long-lived keys); secrets are scoped to specific environments/workflows; fork/PR workflows can't access secrets; secrets are masked in logs and rotated; and there's no plaintext credential in pipeline config. Exceptions: long-lived cloud keys stored as CI secrets, org-wide secrets readable by every workflow, secrets exposed to fork-PR runs, secrets echoed in logs, and unrotated CI credentials. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `09_secrets_and_credential_management_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from CI secret stores (GitHub/GitLab secrets) + cloud OIDC and Vault / Secrets Manager (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 09_secrets_and_credential_management_mcp.py` to expose it to your agent — or `python 09_secrets_and_credential_management_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "SolarWinds: the build system as the attack surface",
        "when": "2020",
        "where": "SolarWinds Orion build pipeline",
        "impact": "Malicious code injected during the build reached ~18,000 customers through a signed, trusted update.",
        "body": [
          "The SUNBURST actors did not tamper with source in the repo — they compromised the BUILD environment and injected the backdoor as Orion was compiled, so the malicious artifact was signed and shipped as legitimate.",
          "It reframed CI/CD as a first-class attack surface: an auditor must verify build-environment isolation, provenance/SLSA attestation, and that what ships is provably built from reviewed source."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Build Environment & CI/CD (Continuous Integration / Continuous Delivery) scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull CI secret stores (GitHub/GitLab secrets) + cloud OIDC · Vault / Secrets Manager",
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
          "year": 2020,
          "event": "SolarWinds SUNBURST — build-time injection into a signed update",
          "highlight": true
        },
        {
          "year": 2021,
          "event": "Codecov bash-uploader compromise exposes CI secrets at scale"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Secrets and credential management\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "inventory repo/org/environment secrets + which workflows can read them\nconfirm cloud auth is OIDC (id-token) not a stored long-lived key\ncheck pull_request_target / fork-PR workflows can't reach secrets\nscan pipeline logs for leaked/echoed secrets; confirm masking + rotation"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The inventory of secrets in CI/CD (repo/org/environment secrets, stored credentials) + their scope.",
        "The test: Verify CI/CD secrets are minimal, scoped, short-lived, and not exposed.",
        "Reconcile the systems of record (CI secret stores (GitHub/GitLab secrets) + cloud OIDC, Vault / Secrets Manager, The pipeline config) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. A long-lived AWS admin key is an org-wide secret readable by every workflow including fork PRs, and a recent build log printed it in plaintext — full cloud compromise from one contributor."
      ],
      "references": [
        {
          "title": "OWASP CI/CD Security Risks",
          "url": "https://owasp.org/www-project-top-10-ci-cd-security-risks/"
        },
        {
          "title": "GitHub OIDC Hardening",
          "url": "https://docs.github.com/actions/deployment/security-hardening-your-deployments"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "09_secrets_and_credential_management_mcp.py",
          "url": "/audit-code/build-cicd/09_secrets_and_credential_management_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Build Environment & CI/CD (Continuous Integration / Continuous Delivery) evidence for \"Secrets and credential management\" (the inventory of secrets in ci/cd (repo/org/environment secrets, stored credentials) + their scope), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Secrets and credential management\" control for Build Environment & CI/CD (Continuous Integration / Continuous Delivery) at AcmeCorp. THE TEST: Verify CI/CD secrets are minimal, scoped, short-lived, and not exposed. PASS: cloud auth uses OIDC short-lived federation (not stored long-lived keys); secrets are scoped to specific environments/workflows; fork/PR workflows can't access secrets; secrets are masked in logs and rotated; and there's no plaintext credential in pipeline config. Exceptions: long-lived cloud keys stored as CI secrets, org-wide secrets readable by every workflow, secrets exposed to fork-PR runs, secrets echoed in logs, and unrotated CI credentials. The evidence — The inventory of secrets in CI/CD (repo/org/environment secrets, stored credentials) + their scope — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live CI secret stores (GitHub/GitLab secrets) + cloud OIDC APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. CI secret stores (GitHub/GitLab secrets) + cloud OIDC gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from CI secret stores (GitHub/GitLab secrets) + cloud OIDC; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Build Environment & CI/CD (Continuous Integration / Continuous Delivery): \"Secrets and credential management\" Audit Evidence\n\nThe test:\nVerify CI/CD secrets are minimal, scoped, short-lived, and not exposed. PASS: cloud auth uses OIDC short-lived federation (not stored long-lived keys); secrets are scoped to specific environments/workflows; fork/PR workflows can't access secrets; secrets are masked in logs and rotated; and there's no plaintext credential in pipeline config. Exceptions: long-lived cloud keys stored as CI secrets, org-wide secrets readable by every workflow, secrets exposed to fork-PR runs, secrets echoed in logs, and unrotated CI credentials.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- build-cicd_inventory.json   (in-scope items — The inventory of secrets in CI/CD (repo/org/environment secrets, stored credentials) + their scope)\n- build-cicd_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Secrets and credential management\",\n  \"domain\": \"Build Environment & CI/CD (Continuous Integration / Continuous Delivery)\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{bcd_",
        "/evidence/build-cicd_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Platform / DevOps engineering\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Secrets and credential management\" control must cover\n# fragment: secrets_credential_management_",
        "/evidence/build-cicd_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "build-cicd_inventory.json",
            "isDir": false
          },
          {
            "name": "build-cicd_state.json",
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
          "value": "FLAG{bcd_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/build-cicd_inventory.json",
          "value": "secrets_credential_management_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/build-cicd_state.json",
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
          "id": "bcd-09-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Secrets and credential management\" sub-process of Build Environment & CI/CD (Continuous Integration / Continuous Delivery)?",
          "options": [
            "Re-implement the control on the auditor's behalf",
            "Increase the number of tools the team uses",
            "Replace the system owner's judgement entirely",
            "Obtain evidence that the secrets and credential management control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run or own the control."
        },
        {
          "id": "bcd-09-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Secrets and credential management\" matter to the broader Build Environment & CI/CD (Continuous Integration / Continuous Delivery) posture?",
          "options": [
            "It is relevant solely for marketing",
            "It has no effect once a firewall exists",
            "It is a control other Build Environment & CI/CD (Continuous Integration / Continuous Delivery) controls depend on, so a gap here propagates risk into everything scoped to it",
            "It only affects documentation aesthetics"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure undermines the controls layered on top."
        },
        {
          "id": "bcd-09-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Secrets and credential management\" control?",
          "options": [
            "The vendor's marketing datasheet",
            "The The inventory of secrets in CI/CD (repo/org/environment secrets, stored credentials) + their scope reconciled against policy, plus the resulting findings working paper",
            "A verbal assurance from the team lead",
            "A screenshot of the login page"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — exports reconciled to policy, not assertions."
        },
        {
          "id": "bcd-09-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where would an auditor pull the evidence for \"Secrets and credential management\"?",
          "options": [
            "CI secret stores (GitHub/GitLab secrets) + cloud OIDC (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., CI secret stores (GitHub/GitLab secrets) + cloud OIDC) via read-only access."
        },
        {
          "id": "bcd-09-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Secrets and credential management\"?",
          "options": [
            "The external auditor",
            "No one — it is ownerless",
            "The end customer",
            "DevOps / platform security (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "DevOps / platform security owns the control data; the auditor independently verifies it."
        },
        {
          "id": "bcd-09-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Secrets and credential management\", which part stays with the human auditor?",
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
          "id": "bcd-09-q7",
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
          "id": "bcd-09-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Secrets and credential management\", which is a realistic reportable finding?",
          "options": [
            "A long-lived AWS admin key is an org-wide secret readable by every workflow including fork PRs, and a recent build log printed it in plaintext — full cloud compromise from one contributor.",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. A long-lived AWS admin key is an org-wide secret readable by every workflow including fork PRs, and a recent build log printed it in plaintext — full cloud compromise from one contributor."
        },
        {
          "id": "bcd-09-q9",
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
          "id": "bcd-09-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Secrets and credential management\" also serve privacy and regulatory goals?",
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
    "epochId": "build-cicd",
    "id": "bcd-10",
    "order": 10,
    "title": "Audit logging",
    "subtitle": "Agentic technical & privacy audit of the audit logging control",
    "category": "cybersecurity",
    "xp": 100,
    "easeScore": 6,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Audit logging\" control for Build Environment & CI/CD (Continuous Integration / Continuous Delivery) is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify build/CI/CD/registry activity is logged, retained, and monitored. PASS: SCM + CI/CD + registry emit audit logs (merges, workflow changes, deploys, secret access, image pushes, admin actions); logs ship to the SIEM with retention; detections fire on high-risk events (pipeline tampering, secret access by a new actor, prod deploy outside the change window); and the trail is tamper-resistant. Exceptions: build systems not logging to the SIEM, no detections on pipeline/secret abuse, short retention, and logs editable by the same admins.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Build Environment & CI/CD (Continuous Integration / Continuous Delivery) systems of record (GitHub/GitLab audit log, CI/CD logs, registry logs; SIEM; Detection content) as tools — e.g. `confirm SCM/CI/registry audit logs forward to the SIEM (e.g. GitHub au`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The audit-log coverage for SCM, CI/CD, and registry (who did what: merges, pipeline edits, deploys, secret access, image pushes)",
        "Forwarding of those logs to the SIEM + retention",
        "Detections on high-risk build events (pipeline modified, secret accessed, admin bypass, image push to prod)",
        "Tamper-resistance of the build audit trail"
      ],
      "system": [
        "GitHub/GitLab audit log, CI/CD logs, registry logs",
        "SIEM",
        "Detection content"
      ],
      "dataOwner": [
        "Security operations / detection engineering",
        "DevOps (emits logs)",
        "SOC"
      ],
      "scoring": {
        "ease": "EASE 6/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Build Environment & CI/CD (Continuous Integration / Continuous Delivery) controls."
      }
    },
    "badge": {
      "id": "bcd-10-badge",
      "name": "Build Environment & CI/CD (Continuous Integration / Continuous Delivery) Auditor",
      "emoji": "🏗️"
    },
    "wonder": {
      "name": "Audit logging",
      "location": "Build Environment & CI/CD (Continuous Integration / Continuous Delivery)",
      "era": "Present Day",
      "emoji": "🏗️"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Audit logging\" as a repeatable agentic workflow: pull the real evidence (The audit-log coverage for SCM, CI/CD, and registry (who did what: merges, pipeline edits, deploys, secret access, image pushes)) with read-only agents, run the test against policy, and issue a defensible opinion on the Build Environment & CI/CD (Continuous Integration / Continuous Delivery) control.",
      "year": 2025,
      "overview": [
        "The \"Audit logging\" sub-process is one of the controls an auditor must verify for Build Environment & CI/CD (Continuous Integration / Continuous Delivery). The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the audit-log coverage for SCM, CI/CD, and registry (who did what: merges, pipeline edits, deploys, secret access, image pushes), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here GitHub/GitLab audit log, CI/CD logs, registry logs, SIEM, Detection content — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `confirm SCM/CI/registry audit logs forward to the SIEM (e.g. GitHub audit-log st` — read-only, against the systems of record.",
        "The test itself is specific. Verify build/CI/CD/registry activity is logged, retained, and monitored. PASS: SCM + CI/CD + registry emit audit logs (merges, workflow changes, deploys, secret access, image pushes, admin actions); logs ship to the SIEM with retention; detections fire on high-risk events (pipeline tampering, secret access by a new actor, prod deploy outside the change window); and the trail is tamper-resistant. Exceptions: build systems not logging to the SIEM, no detections on pipeline/secret abuse, short retention, and logs editable by the same admins. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `10_audit_logging_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from GitHub/GitLab audit log, CI/CD logs, registry logs and SIEM (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 10_audit_logging_mcp.py` to expose it to your agent — or `python 10_audit_logging_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "SolarWinds: the build system as the attack surface",
        "when": "2020",
        "where": "SolarWinds Orion build pipeline",
        "impact": "Malicious code injected during the build reached ~18,000 customers through a signed, trusted update.",
        "body": [
          "The SUNBURST actors did not tamper with source in the repo — they compromised the BUILD environment and injected the backdoor as Orion was compiled, so the malicious artifact was signed and shipped as legitimate.",
          "It reframed CI/CD as a first-class attack surface: an auditor must verify build-environment isolation, provenance/SLSA attestation, and that what ships is provably built from reviewed source."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Build Environment & CI/CD (Continuous Integration / Continuous Delivery) scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull GitHub/GitLab audit log, CI/CD logs, registry logs · SIEM",
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
          "year": 2020,
          "event": "SolarWinds SUNBURST — build-time injection into a signed update",
          "highlight": true
        },
        {
          "year": 2021,
          "event": "Codecov bash-uploader compromise exposes CI secrets at scale"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Audit logging\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "confirm SCM/CI/registry audit logs forward to the SIEM (e.g. GitHub audit-log streaming)\nretention check\ndetections for: workflow file changed, secret accessed, admin bypass, image push to a prod tag, new deploy credential\nverify the build audit trail can't be edited by the dev admins"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The audit-log coverage for SCM, CI/CD, and registry (who did what: merges, pipeline edits, deploys, secret access, image pushes).",
        "The test: Verify build/CI/CD/registry activity is logged, retained, and monitored.",
        "Reconcile the systems of record (GitHub/GitLab audit log, CI/CD logs, registry logs, SIEM, Detection content) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. GitHub audit-log streaming isn't enabled, so SCM events never reach the SIEM, and there are no detections for pipeline tampering or secret access — a malicious workflow edit would be invisible."
      ],
      "references": [
        {
          "title": "NIST SP 800-92",
          "url": "https://csrc.nist.gov/pubs/sp/800/92/final"
        },
        {
          "title": "OWASP CI/CD Security Risks",
          "url": "https://owasp.org/www-project-top-10-ci-cd-security-risks/"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "10_audit_logging_mcp.py",
          "url": "/audit-code/build-cicd/10_audit_logging_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Build Environment & CI/CD (Continuous Integration / Continuous Delivery) evidence for \"Audit logging\" (the audit-log coverage for scm, ci/cd, and registry (who did what: merges, pipeline edits, deploys, secret access, image pushes)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Audit logging\" control for Build Environment & CI/CD (Continuous Integration / Continuous Delivery) at AcmeCorp. THE TEST: Verify build/CI/CD/registry activity is logged, retained, and monitored. PASS: SCM + CI/CD + registry emit audit logs (merges, workflow changes, deploys, secret access, image pushes, admin actions); logs ship to the SIEM with retention; detections fire on high-risk events (pipeline tampering, secret access by a new actor, prod deploy outside the change window); and the trail is tamper-resistant. Exceptions: build systems not logging to the SIEM, no detections on pipeline/secret abuse, short retention, and logs editable by the same admins. The evidence — The audit-log coverage for SCM, CI/CD, and registry (who did what: merges, pipeline edits, deploys, secret access, image pushes) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live GitHub/GitLab audit log, CI/CD logs, registry logs APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. GitHub/GitLab audit log, CI/CD logs, registry logs gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from GitHub/GitLab audit log, CI/CD logs, registry logs; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Build Environment & CI/CD (Continuous Integration / Continuous Delivery): \"Audit logging\" Audit Evidence\n\nThe test:\nVerify build/CI/CD/registry activity is logged, retained, and monitored. PASS: SCM + CI/CD + registry emit audit logs (merges, workflow changes, deploys, secret access, image pushes, admin actions); logs ship to the SIEM with retention; detections fire on high-risk events (pipeline tampering, secret access by a new actor, prod deploy outside the change window); and the trail is tamper-resistant. Exceptions: build systems not logging to the SIEM, no detections on pipeline/secret abuse, short retention, and logs editable by the same admins.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- build-cicd_inventory.json   (in-scope items — The audit-log coverage for SCM, CI/CD, and registry (who did what: merges, pipeline edits, deploys, secret access, image pushes))\n- build-cicd_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Audit logging\",\n  \"domain\": \"Build Environment & CI/CD (Continuous Integration / Continuous Delivery)\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{bcd_",
        "/evidence/build-cicd_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Platform / DevOps engineering\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Audit logging\" control must cover\n# fragment: audit_logging_",
        "/evidence/build-cicd_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "build-cicd_inventory.json",
            "isDir": false
          },
          {
            "name": "build-cicd_state.json",
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
          "value": "FLAG{bcd_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/build-cicd_inventory.json",
          "value": "audit_logging_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/build-cicd_state.json",
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
          "id": "bcd-10-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Audit logging\" sub-process of Build Environment & CI/CD (Continuous Integration / Continuous Delivery)?",
          "options": [
            "Re-implement the control on the auditor's behalf",
            "Increase the number of tools the team uses",
            "Replace the system owner's judgement entirely",
            "Obtain evidence that the audit logging control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run or own the control."
        },
        {
          "id": "bcd-10-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Audit logging\" matter to the broader Build Environment & CI/CD (Continuous Integration / Continuous Delivery) posture?",
          "options": [
            "It is relevant solely for marketing",
            "It has no effect once a firewall exists",
            "It is a control other Build Environment & CI/CD (Continuous Integration / Continuous Delivery) controls depend on, so a gap here propagates risk into everything scoped to it",
            "It only affects documentation aesthetics"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure undermines the controls layered on top."
        },
        {
          "id": "bcd-10-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Audit logging\" control?",
          "options": [
            "The vendor's marketing datasheet",
            "The The audit-log coverage for SCM, CI/CD, and registry (who did what: merges, pipeline edits, deploys, secret access, image pushes) reconciled against policy, plus the resulting findings working paper",
            "A verbal assurance from the team lead",
            "A screenshot of the login page"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — exports reconciled to policy, not assertions."
        },
        {
          "id": "bcd-10-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where would an auditor pull the evidence for \"Audit logging\"?",
          "options": [
            "GitHub/GitLab audit log, CI/CD logs, registry logs (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., GitHub/GitLab audit log, CI/CD logs, registry logs) via read-only access."
        },
        {
          "id": "bcd-10-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Audit logging\"?",
          "options": [
            "The external auditor",
            "No one — it is ownerless",
            "The end customer",
            "Security operations / detection engineering (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "Security operations / detection engineering owns the control data; the auditor independently verifies it."
        },
        {
          "id": "bcd-10-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Audit logging\", which part stays with the human auditor?",
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
          "id": "bcd-10-q7",
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
          "id": "bcd-10-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Audit logging\", which is a realistic reportable finding?",
          "options": [
            "GitHub audit-log streaming isn't enabled, so SCM events never reach the SIEM, and there are no detections for pipeline tampering or secret access — a malicious workflow edit would be invisible.",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. GitHub audit-log streaming isn't enabled, so SCM events never reach the SIEM, and there are no detections for pipeline tampering or secret access — a malicious workflow edit would be invisible."
        },
        {
          "id": "bcd-10-q9",
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
          "id": "bcd-10-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Audit logging\" also serve privacy and regulatory goals?",
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
    "epochId": "build-cicd",
    "id": "bcd-11",
    "order": 11,
    "title": "Segregation of duties",
    "subtitle": "Agentic technical & privacy audit of the segregation of duties control",
    "category": "cybersecurity",
    "xp": 100,
    "easeScore": 6,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Segregation of duties\" control for Build Environment & CI/CD (Continuous Integration / Continuous Delivery) is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify duties are separated across the build-to-deploy flow. PASS: code authorship, review/approval, and production deployment are separated so no single person can push their own code to prod unreviewed; prod-deploy requires a distinct approver; emergency/break-glass deploys are logged + reviewed. Exceptions: a developer who can author, self-approve, and deploy to prod; shared deploy accounts that mask who deployed; and break-glass with no logging/review.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Build Environment & CI/CD (Continuous Integration / Continuous Delivery) systems of record (SCM (review/merge rights) + CI/CD (deploy rights); Environment protection rules; IGA (role assignments)) as tools — e.g. `map who can: merge to the release branch vs approve vs trigger prod de`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The SoD matrix for the SDLC (who can code, who approves, who deploys to prod) + the actual role assignments",
        "Evidence that the same person can't author + approve + deploy their own change to production unchecked",
        "Production-deploy authorisation (separate from code authorship)",
        "The break-glass deploy process + its logging"
      ],
      "system": [
        "SCM (review/merge rights) + CI/CD (deploy rights)",
        "Environment protection rules",
        "IGA (role assignments)"
      ],
      "dataOwner": [
        "Engineering leadership + AppSec",
        "Release management",
        "Audit / GRC"
      ],
      "scoring": {
        "ease": "EASE 6/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Build Environment & CI/CD (Continuous Integration / Continuous Delivery) controls."
      }
    },
    "badge": {
      "id": "bcd-11-badge",
      "name": "Build Environment & CI/CD (Continuous Integration / Continuous Delivery) Auditor",
      "emoji": "🏗️"
    },
    "wonder": {
      "name": "Segregation of duties",
      "location": "Build Environment & CI/CD (Continuous Integration / Continuous Delivery)",
      "era": "Present Day",
      "emoji": "🏗️"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Segregation of duties\" as a repeatable agentic workflow: pull the real evidence (The SoD matrix for the SDLC (who can code, who approves, who deploys to prod) + the actual role assignments) with read-only agents, run the test against policy, and issue a defensible opinion on the Build Environment & CI/CD (Continuous Integration / Continuous Delivery) control.",
      "year": 2025,
      "overview": [
        "The \"Segregation of duties\" sub-process is one of the controls an auditor must verify for Build Environment & CI/CD (Continuous Integration / Continuous Delivery). The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the SoD matrix for the SDLC (who can code, who approves, who deploys to prod) + the actual role assignments, for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here SCM (review/merge rights) + CI/CD (deploy rights), Environment protection rules, IGA (role assignments) — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `map who can: merge to the release branch vs approve vs trigger prod deploy (sepa` — read-only, against the systems of record.",
        "The test itself is specific. Verify duties are separated across the build-to-deploy flow. PASS: code authorship, review/approval, and production deployment are separated so no single person can push their own code to prod unreviewed; prod-deploy requires a distinct approver; emergency/break-glass deploys are logged + reviewed. Exceptions: a developer who can author, self-approve, and deploy to prod; shared deploy accounts that mask who deployed; and break-glass with no logging/review. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `11_segregation_of_duties_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from SCM (review/merge rights) + CI/CD (deploy rights) and Environment protection rules (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 11_segregation_of_duties_mcp.py` to expose it to your agent — or `python 11_segregation_of_duties_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "SolarWinds: the build system as the attack surface",
        "when": "2020",
        "where": "SolarWinds Orion build pipeline",
        "impact": "Malicious code injected during the build reached ~18,000 customers through a signed, trusted update.",
        "body": [
          "The SUNBURST actors did not tamper with source in the repo — they compromised the BUILD environment and injected the backdoor as Orion was compiled, so the malicious artifact was signed and shipped as legitimate.",
          "It reframed CI/CD as a first-class attack surface: an auditor must verify build-environment isolation, provenance/SLSA attestation, and that what ships is provably built from reviewed source."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Build Environment & CI/CD (Continuous Integration / Continuous Delivery) scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull SCM (review/merge rights) + CI/CD (deploy rights) · Environment protection rules",
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
          "year": 2020,
          "event": "SolarWinds SUNBURST — build-time injection into a signed update",
          "highlight": true
        },
        {
          "year": 2021,
          "event": "Codecov bash-uploader compromise exposes CI secrets at scale"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Segregation of duties\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "map who can: merge to the release branch vs approve vs trigger prod deploy (separated per person?)\nfind individuals holding all three (self-service to prod)\nenvironment protection: required reviewers distinct from the PR author\nbreak-glass deploy logging + review"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The SoD matrix for the SDLC (who can code, who approves, who deploys to prod) + the actual role assignments.",
        "The test: Verify duties are separated across the build-to-deploy flow.",
        "Reconcile the systems of record (SCM (review/merge rights) + CI/CD (deploy rights), Environment protection rules, IGA (role assignments)) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. Five engineers can author code, approve their own PR (admin bypass), and trigger production deploys — no separation of duties, so one person can ship unreviewed code to prod."
      ],
      "references": [
        {
          "title": "NIST SP 800-53 AC-5 Separation of Duties",
          "url": "https://csrc.nist.gov/projects/risk-management/sp800-53-controls"
        },
        {
          "title": "SLSA (two-person review)",
          "url": "https://slsa.dev/"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "11_segregation_of_duties_mcp.py",
          "url": "/audit-code/build-cicd/11_segregation_of_duties_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Build Environment & CI/CD (Continuous Integration / Continuous Delivery) evidence for \"Segregation of duties\" (the sod matrix for the sdlc (who can code, who approves, who deploys to prod) + the actual role assignments), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Segregation of duties\" control for Build Environment & CI/CD (Continuous Integration / Continuous Delivery) at AcmeCorp. THE TEST: Verify duties are separated across the build-to-deploy flow. PASS: code authorship, review/approval, and production deployment are separated so no single person can push their own code to prod unreviewed; prod-deploy requires a distinct approver; emergency/break-glass deploys are logged + reviewed. Exceptions: a developer who can author, self-approve, and deploy to prod; shared deploy accounts that mask who deployed; and break-glass with no logging/review. The evidence — The SoD matrix for the SDLC (who can code, who approves, who deploys to prod) + the actual role assignments — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live SCM (review/merge rights) + CI/CD (deploy rights) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. SCM (review/merge rights) + CI/CD (deploy rights) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from SCM (review/merge rights) + CI/CD (deploy rights); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Build Environment & CI/CD (Continuous Integration / Continuous Delivery): \"Segregation of duties\" Audit Evidence\n\nThe test:\nVerify duties are separated across the build-to-deploy flow. PASS: code authorship, review/approval, and production deployment are separated so no single person can push their own code to prod unreviewed; prod-deploy requires a distinct approver; emergency/break-glass deploys are logged + reviewed. Exceptions: a developer who can author, self-approve, and deploy to prod; shared deploy accounts that mask who deployed; and break-glass with no logging/review.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- build-cicd_inventory.json   (in-scope items — The SoD matrix for the SDLC (who can code, who approves, who deploys to prod) + the actual role assignments)\n- build-cicd_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Segregation of duties\",\n  \"domain\": \"Build Environment & CI/CD (Continuous Integration / Continuous Delivery)\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{bcd_",
        "/evidence/build-cicd_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Platform / DevOps engineering\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Segregation of duties\" control must cover\n# fragment: segregation_duties_",
        "/evidence/build-cicd_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "build-cicd_inventory.json",
            "isDir": false
          },
          {
            "name": "build-cicd_state.json",
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
          "value": "FLAG{bcd_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/build-cicd_inventory.json",
          "value": "segregation_duties_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/build-cicd_state.json",
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
          "id": "bcd-11-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Segregation of duties\" sub-process of Build Environment & CI/CD (Continuous Integration / Continuous Delivery)?",
          "options": [
            "Re-implement the control on the auditor's behalf",
            "Increase the number of tools the team uses",
            "Replace the system owner's judgement entirely",
            "Obtain evidence that the segregation of duties control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run or own the control."
        },
        {
          "id": "bcd-11-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Segregation of duties\" matter to the broader Build Environment & CI/CD (Continuous Integration / Continuous Delivery) posture?",
          "options": [
            "It is relevant solely for marketing",
            "It has no effect once a firewall exists",
            "It is a control other Build Environment & CI/CD (Continuous Integration / Continuous Delivery) controls depend on, so a gap here propagates risk into everything scoped to it",
            "It only affects documentation aesthetics"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure undermines the controls layered on top."
        },
        {
          "id": "bcd-11-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Segregation of duties\" control?",
          "options": [
            "The vendor's marketing datasheet",
            "The The SoD matrix for the SDLC (who can code, who approves, who deploys to prod) + the actual role assignments reconciled against policy, plus the resulting findings working paper",
            "A verbal assurance from the team lead",
            "A screenshot of the login page"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — exports reconciled to policy, not assertions."
        },
        {
          "id": "bcd-11-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where would an auditor pull the evidence for \"Segregation of duties\"?",
          "options": [
            "SCM (review/merge rights) + CI/CD (deploy rights) (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., SCM (review/merge rights) + CI/CD (deploy rights)) via read-only access."
        },
        {
          "id": "bcd-11-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Segregation of duties\"?",
          "options": [
            "The external auditor",
            "No one — it is ownerless",
            "The end customer",
            "Engineering leadership + AppSec (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "Engineering leadership + AppSec owns the control data; the auditor independently verifies it."
        },
        {
          "id": "bcd-11-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Segregation of duties\", which part stays with the human auditor?",
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
          "id": "bcd-11-q7",
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
          "id": "bcd-11-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Segregation of duties\", which is a realistic reportable finding?",
          "options": [
            "Five engineers can author code, approve their own PR (admin bypass), and trigger production deploys — no separation of duties, so one person can ship unreviewed code to prod.",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. Five engineers can author code, approve their own PR (admin bypass), and trigger production deploys — no separation of duties, so one person can ship unreviewed code to prod."
        },
        {
          "id": "bcd-11-q9",
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
          "id": "bcd-11-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Segregation of duties\" also serve privacy and regulatory goals?",
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
    "epochId": "build-cicd",
    "id": "bcd-12",
    "order": 12,
    "title": "AI-assisted dev / agentic workloads",
    "subtitle": "Agentic technical & privacy audit of the ai-assisted dev / agentic workloads control",
    "category": "cybersecurity",
    "xp": 100,
    "easeScore": 7,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"AI-assisted dev / agentic workloads\" control for Build Environment & CI/CD (Continuous Integration / Continuous Delivery) is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Govern AI-assisted development and agentic workloads. PASS: AI coding tools are approved + inventoried; AI-generated code goes through the same review + security gates as human code (no auto-merge to protected branches); agentic build/fix workloads run least-privilege with a human-in-the-loop for merges/deploys and full logging; and proprietary code isn't sent to ungoverned model endpoints (training opt-out, approved tenancy). Exceptions: shadow AI dev tools, AI/agent code auto-merged without review, agents with broad commit/deploy authority, and source code leaking to public models.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Build Environment & CI/CD (Continuous Integration / Continuous Delivery) systems of record (GitHub Copilot / Cursor / AI review tools; Agentic CI workloads + their service-account permissions; DLP / approved-model tenancy) as tools — e.g. `inventory AI dev tools + agentic CI agents and their repo/deploy permi`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The inventory of AI coding tools + agentic CI workloads in use (Copilot, AI review, autonomous build/fix agents) + their permissions",
        "Guardrails on AI-generated code (human review required, no auto-merge, scanning of AI output)",
        "Data-handling for AI dev tools (proprietary code sent to which model endpoints; training opt-out)",
        "The permission scope + logging of any agent that can commit/build/deploy"
      ],
      "system": [
        "GitHub Copilot / Cursor / AI review tools",
        "Agentic CI workloads + their service-account permissions",
        "DLP / approved-model tenancy"
      ],
      "dataOwner": [
        "Engineering + AppSec",
        "AI governance",
        "Platform security"
      ],
      "scoring": {
        "ease": "EASE 7/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Build Environment & CI/CD (Continuous Integration / Continuous Delivery) controls."
      }
    },
    "badge": {
      "id": "bcd-12-badge",
      "name": "Build Environment & CI/CD (Continuous Integration / Continuous Delivery) Auditor",
      "emoji": "🏗️"
    },
    "wonder": {
      "name": "AI-assisted dev / agentic workloads",
      "location": "Build Environment & CI/CD (Continuous Integration / Continuous Delivery)",
      "era": "Present Day",
      "emoji": "🏗️"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"AI-assisted dev / agentic workloads\" as a repeatable agentic workflow: pull the real evidence (The inventory of AI coding tools + agentic CI workloads in use (Copilot, AI review, autonomous build/fix agents) + their permissions) with read-only agents, run the test against policy, and issue a defensible opinion on the Build Environment & CI/CD (Continuous Integration / Continuous Delivery) control.",
      "year": 2025,
      "overview": [
        "The \"AI-assisted dev / agentic workloads\" sub-process is one of the controls an auditor must verify for Build Environment & CI/CD (Continuous Integration / Continuous Delivery). The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the inventory of AI coding tools + agentic CI workloads in use (Copilot, AI review, autonomous build/fix agents) + their permissions, for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here GitHub Copilot / Cursor / AI review tools, Agentic CI workloads + their service-account permissions, DLP / approved-model tenancy — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `inventory AI dev tools + agentic CI agents and their repo/deploy permissions` — read-only, against the systems of record.",
        "The test itself is specific. Govern AI-assisted development and agentic workloads. PASS: AI coding tools are approved + inventoried; AI-generated code goes through the same review + security gates as human code (no auto-merge to protected branches); agentic build/fix workloads run least-privilege with a human-in-the-loop for merges/deploys and full logging; and proprietary code isn't sent to ungoverned model endpoints (training opt-out, approved tenancy). Exceptions: shadow AI dev tools, AI/agent code auto-merged without review, agents with broad commit/deploy authority, and source code leaking to public models. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `12_ai_assisted_dev_agentic_workloads_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from GitHub Copilot / Cursor / AI review tools and Agentic CI workloads + their service-account permissions (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 12_ai_assisted_dev_agentic_workloads_mcp.py` to expose it to your agent — or `python 12_ai_assisted_dev_agentic_workloads_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "SolarWinds: the build system as the attack surface",
        "when": "2020",
        "where": "SolarWinds Orion build pipeline",
        "impact": "Malicious code injected during the build reached ~18,000 customers through a signed, trusted update.",
        "body": [
          "The SUNBURST actors did not tamper with source in the repo — they compromised the BUILD environment and injected the backdoor as Orion was compiled, so the malicious artifact was signed and shipped as legitimate.",
          "It reframed CI/CD as a first-class attack surface: an auditor must verify build-environment isolation, provenance/SLSA attestation, and that what ships is provably built from reviewed source."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Build Environment & CI/CD (Continuous Integration / Continuous Delivery) scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull GitHub Copilot / Cursor / AI review tools · Agentic CI workloads + their service-account permissions",
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
          "year": 2020,
          "event": "SolarWinds SUNBURST — build-time injection into a signed update",
          "highlight": true
        },
        {
          "year": 2021,
          "event": "Codecov bash-uploader compromise exposes CI secrets at scale"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"AI-assisted dev / agentic workloads\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "inventory AI dev tools + agentic CI agents and their repo/deploy permissions\nconfirm AI-generated PRs require human review + pass security gates (no auto-merge)\ncheck agent service accounts are least-privilege + their actions logged/attributable\nconfirm source isn't sent to public model endpoints (enterprise tenancy + training opt-out)"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The inventory of AI coding tools + agentic CI workloads in use (Copilot, AI review, autonomous build/fix agents) + their permissions.",
        "The test: Govern AI-assisted development and agentic workloads.",
        "Reconcile the systems of record (GitHub Copilot / Cursor / AI review tools, Agentic CI workloads + their service-account permissions, DLP / approved-model tenancy) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. An autonomous 'auto-fix' agent has write access to all repos and can merge its own PRs to protected branches with no human review, and developers use a personal AI tool that sends proprietary code to a public endpoint with training enabled."
      ],
      "references": [
        {
          "title": "NIST AI Risk Management Framework",
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
          "name": "12_ai_assisted_dev_agentic_workloads_mcp.py",
          "url": "/audit-code/build-cicd/12_ai_assisted_dev_agentic_workloads_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Build Environment & CI/CD (Continuous Integration / Continuous Delivery) evidence for \"AI-assisted dev / agentic workloads\" (the inventory of ai coding tools + agentic ci workloads in use (copilot, ai review, autonomous build/fix agents) + their permissions), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"AI-assisted dev / agentic workloads\" control for Build Environment & CI/CD (Continuous Integration / Continuous Delivery) at AcmeCorp. THE TEST: Govern AI-assisted development and agentic workloads. PASS: AI coding tools are approved + inventoried; AI-generated code goes through the same review + security gates as human code (no auto-merge to protected branches); agentic build/fix workloads run least-privilege with a human-in-the-loop for merges/deploys and full logging; and proprietary code isn't sent to ungoverned model endpoints (training opt-out, approved tenancy). Exceptions: shadow AI dev tools, AI/agent code auto-merged without review, agents with broad commit/deploy authority, and source code leaking to public models. The evidence — The inventory of AI coding tools + agentic CI workloads in use (Copilot, AI review, autonomous build/fix agents) + their permissions — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live GitHub Copilot / Cursor / AI review tools APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. GitHub Copilot / Cursor / AI review tools gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from GitHub Copilot / Cursor / AI review tools; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Build Environment & CI/CD (Continuous Integration / Continuous Delivery): \"AI-assisted dev / agentic workloads\" Audit Evidence\n\nThe test:\nGovern AI-assisted development and agentic workloads. PASS: AI coding tools are approved + inventoried; AI-generated code goes through the same review + security gates as human code (no auto-merge to protected branches); agentic build/fix workloads run least-privilege with a human-in-the-loop for merges/deploys and full logging; and proprietary code isn't sent to ungoverned model endpoints (training opt-out, approved tenancy). Exceptions: shadow AI dev tools, AI/agent code auto-merged without review, agents with broad commit/deploy authority, and source code leaking to public models.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- build-cicd_inventory.json   (in-scope items — The inventory of AI coding tools + agentic CI workloads in use (Copilot, AI review, autonomous build/fix agents) + their permissions)\n- build-cicd_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"AI-assisted dev / agentic workloads\",\n  \"domain\": \"Build Environment & CI/CD (Continuous Integration / Continuous Delivery)\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{bcd_",
        "/evidence/build-cicd_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Platform / DevOps engineering\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"AI-assisted dev / agentic workloads\" control must cover\n# fragment: aiassisted_dev_agentic_",
        "/evidence/build-cicd_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "build-cicd_inventory.json",
            "isDir": false
          },
          {
            "name": "build-cicd_state.json",
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
          "value": "FLAG{bcd_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/build-cicd_inventory.json",
          "value": "aiassisted_dev_agentic_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/build-cicd_state.json",
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
          "id": "bcd-12-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"AI-assisted dev / agentic workloads\" sub-process of Build Environment & CI/CD (Continuous Integration / Continuous Delivery)?",
          "options": [
            "Re-implement the control on the auditor's behalf",
            "Increase the number of tools the team uses",
            "Replace the system owner's judgement entirely",
            "Obtain evidence that the ai-assisted dev / agentic workloads control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run or own the control."
        },
        {
          "id": "bcd-12-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"AI-assisted dev / agentic workloads\" matter to the broader Build Environment & CI/CD (Continuous Integration / Continuous Delivery) posture?",
          "options": [
            "It is relevant solely for marketing",
            "It has no effect once a firewall exists",
            "It is a control other Build Environment & CI/CD (Continuous Integration / Continuous Delivery) controls depend on, so a gap here propagates risk into everything scoped to it",
            "It only affects documentation aesthetics"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure undermines the controls layered on top."
        },
        {
          "id": "bcd-12-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"AI-assisted dev / agentic workloads\" control?",
          "options": [
            "The vendor's marketing datasheet",
            "The The inventory of AI coding tools + agentic CI workloads in use (Copilot, AI review, autonomous build/fix agents) + their permissions reconciled against policy, plus the resulting findings working paper",
            "A verbal assurance from the team lead",
            "A screenshot of the login page"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — exports reconciled to policy, not assertions."
        },
        {
          "id": "bcd-12-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where would an auditor pull the evidence for \"AI-assisted dev / agentic workloads\"?",
          "options": [
            "GitHub Copilot / Cursor / AI review tools (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., GitHub Copilot / Cursor / AI review tools) via read-only access."
        },
        {
          "id": "bcd-12-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"AI-assisted dev / agentic workloads\"?",
          "options": [
            "The external auditor",
            "No one — it is ownerless",
            "The end customer",
            "Engineering + AppSec (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "Engineering + AppSec owns the control data; the auditor independently verifies it."
        },
        {
          "id": "bcd-12-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"AI-assisted dev / agentic workloads\", which part stays with the human auditor?",
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
          "id": "bcd-12-q7",
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
          "id": "bcd-12-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"AI-assisted dev / agentic workloads\", which is a realistic reportable finding?",
          "options": [
            "An autonomous 'auto-fix' agent has write access to all repos and can merge its own PRs to protected branches with no human review, and developers use a personal AI tool that sends proprietary code to a public endpoint with training enabled.",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. An autonomous 'auto-fix' agent has write access to all repos and can merge its own PRs to protected branches with no human review, and developers use a personal AI tool that sends proprietary code to a public endpoint with training enabled."
        },
        {
          "id": "bcd-12-q9",
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
          "id": "bcd-12-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"AI-assisted dev / agentic workloads\" also serve privacy and regulatory goals?",
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
    "epochId": "build-cicd",
    "id": "bcd-13",
    "order": 13,
    "title": "SBOM image provenance",
    "subtitle": "Agentic technical & privacy audit of the sbom image provenance control",
    "category": "cybersecurity",
    "xp": 100,
    "easeScore": 5,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"SBOM image provenance\" control for Build Environment & CI/CD (Continuous Integration / Continuous Delivery) is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify every artifact has an SBOM and verifiable provenance. PASS: each build produces an SBOM (CycloneDX/SPDX) stored + associated with the image; SLSA provenance attests the artifact was built from the reviewed source on the trusted builder; SBOM coverage is near-complete; and SBOMs are queryable for vulnerability impact. Exceptions: images with no SBOM, no build provenance (can't prove what's inside or where it came from), and no way to answer 'which artifacts contain this vulnerable component'.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Build Environment & CI/CD (Continuous Integration / Continuous Delivery) systems of record (SBOM tooling (Syft, cdxgen) + storage (registry referrers / Dependency-Track); SLSA provenance (slsa-github-generator, cosign attest); The build pipeline) as tools — e.g. `confirm each build generates + stores an SBOM (Syft → CycloneDX) attac`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The SBOM (Software Bill of Materials) generated for each build/image (CycloneDX/SPDX) + where stored",
        "Provenance/attestation (SLSA) linking artifact → source commit → build",
        "SBOM coverage (builds/images with an SBOM vs total)",
        "The process to query SBOMs for impact (e.g. 'which images contain log4j x.y')"
      ],
      "system": [
        "SBOM tooling (Syft, cdxgen) + storage (registry referrers / Dependency-Track)",
        "SLSA provenance (slsa-github-generator, cosign attest)",
        "The build pipeline"
      ],
      "dataOwner": [
        "AppSec / platform — own SBOM/provenance",
        "DevOps",
        "Security"
      ],
      "scoring": {
        "ease": "EASE 5/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Build Environment & CI/CD (Continuous Integration / Continuous Delivery) controls."
      }
    },
    "badge": {
      "id": "bcd-13-badge",
      "name": "Build Environment & CI/CD (Continuous Integration / Continuous Delivery) Auditor",
      "emoji": "🏗️"
    },
    "wonder": {
      "name": "SBOM image provenance",
      "location": "Build Environment & CI/CD (Continuous Integration / Continuous Delivery)",
      "era": "Present Day",
      "emoji": "🏗️"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"SBOM image provenance\" as a repeatable agentic workflow: pull the real evidence (The SBOM (Software Bill of Materials) generated for each build/image (CycloneDX/SPDX) + where stored) with read-only agents, run the test against policy, and issue a defensible opinion on the Build Environment & CI/CD (Continuous Integration / Continuous Delivery) control.",
      "year": 2025,
      "overview": [
        "The \"SBOM image provenance\" sub-process is one of the controls an auditor must verify for Build Environment & CI/CD (Continuous Integration / Continuous Delivery). The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the SBOM (Software Bill of Materials) generated for each build/image (CycloneDX/SPDX) + where stored, for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here SBOM tooling (Syft, cdxgen) + storage (registry referrers / Dependency-Track), SLSA provenance (slsa-github-generator, cosign attest), The build pipeline — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `confirm each build generates + stores an SBOM (Syft → CycloneDX) attached to the` — read-only, against the systems of record.",
        "The test itself is specific. Verify every artifact has an SBOM and verifiable provenance. PASS: each build produces an SBOM (CycloneDX/SPDX) stored + associated with the image; SLSA provenance attests the artifact was built from the reviewed source on the trusted builder; SBOM coverage is near-complete; and SBOMs are queryable for vulnerability impact. Exceptions: images with no SBOM, no build provenance (can't prove what's inside or where it came from), and no way to answer 'which artifacts contain this vulnerable component'. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `13_sbom_image_provenance_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from SBOM tooling (Syft, cdxgen) + storage (registry referrers / Dependency-Track) and SLSA provenance (slsa-github-generator, cosign attest) (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 13_sbom_image_provenance_mcp.py` to expose it to your agent — or `python 13_sbom_image_provenance_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "SolarWinds: the build system as the attack surface",
        "when": "2020",
        "where": "SolarWinds Orion build pipeline",
        "impact": "Malicious code injected during the build reached ~18,000 customers through a signed, trusted update.",
        "body": [
          "The SUNBURST actors did not tamper with source in the repo — they compromised the BUILD environment and injected the backdoor as Orion was compiled, so the malicious artifact was signed and shipped as legitimate.",
          "It reframed CI/CD as a first-class attack surface: an auditor must verify build-environment isolation, provenance/SLSA attestation, and that what ships is provably built from reviewed source."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Build Environment & CI/CD (Continuous Integration / Continuous Delivery) scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull SBOM tooling (Syft, cdxgen) + storage (registry referrers / Dependency-Track) · SLSA provenance (slsa-github-generator, cosign attest)",
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
          "year": 2020,
          "event": "SolarWinds SUNBURST — build-time injection into a signed update",
          "highlight": true
        },
        {
          "year": 2021,
          "event": "Codecov bash-uploader compromise exposes CI secrets at scale"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"SBOM image provenance\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "confirm each build generates + stores an SBOM (Syft → CycloneDX) attached to the image\nverify SLSA provenance attestation (cosign verify-attestation)\nSBOM coverage: images with an SBOM vs total in the registry\ntest an impact query: 'which images contain component X' via Dependency-Track"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The SBOM (Software Bill of Materials) generated for each build/image (CycloneDX/SPDX) + where stored.",
        "The test: Verify every artifact has an SBOM and verifiable provenance.",
        "Reconcile the systems of record (SBOM tooling (Syft, cdxgen) + storage (registry referrers / Dependency-Track), SLSA provenance (slsa-github-generator, cosign attest), The build pipeline) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. Only a handful of images have SBOMs and none have build provenance, so when the next Log4Shell hits, there's no way to know which of the 400 production images are affected."
      ],
      "references": [
        {
          "title": "CISA / NTIA SBOM",
          "url": "https://www.cisa.gov/sbom"
        },
        {
          "title": "SLSA",
          "url": "https://slsa.dev/"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "13_sbom_image_provenance_mcp.py",
          "url": "/audit-code/build-cicd/13_sbom_image_provenance_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Build Environment & CI/CD (Continuous Integration / Continuous Delivery) evidence for \"SBOM image provenance\" (the sbom (software bill of materials) generated for each build/image (cyclonedx/spdx) + where stored), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"SBOM image provenance\" control for Build Environment & CI/CD (Continuous Integration / Continuous Delivery) at AcmeCorp. THE TEST: Verify every artifact has an SBOM and verifiable provenance. PASS: each build produces an SBOM (CycloneDX/SPDX) stored + associated with the image; SLSA provenance attests the artifact was built from the reviewed source on the trusted builder; SBOM coverage is near-complete; and SBOMs are queryable for vulnerability impact. Exceptions: images with no SBOM, no build provenance (can't prove what's inside or where it came from), and no way to answer 'which artifacts contain this vulnerable component'. The evidence — The SBOM (Software Bill of Materials) generated for each build/image (CycloneDX/SPDX) + where stored — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live SBOM tooling (Syft, cdxgen) + storage (registry referrers / Dependency-Track) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. SBOM tooling (Syft, cdxgen) + storage (registry referrers / Dependency-Track) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from SBOM tooling (Syft, cdxgen) + storage (registry referrers / Dependency-Track); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Build Environment & CI/CD (Continuous Integration / Continuous Delivery): \"SBOM image provenance\" Audit Evidence\n\nThe test:\nVerify every artifact has an SBOM and verifiable provenance. PASS: each build produces an SBOM (CycloneDX/SPDX) stored + associated with the image; SLSA provenance attests the artifact was built from the reviewed source on the trusted builder; SBOM coverage is near-complete; and SBOMs are queryable for vulnerability impact. Exceptions: images with no SBOM, no build provenance (can't prove what's inside or where it came from), and no way to answer 'which artifacts contain this vulnerable component'.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- build-cicd_inventory.json   (in-scope items — The SBOM (Software Bill of Materials) generated for each build/image (CycloneDX/SPDX) + where stored)\n- build-cicd_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"SBOM image provenance\",\n  \"domain\": \"Build Environment & CI/CD (Continuous Integration / Continuous Delivery)\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{bcd_",
        "/evidence/build-cicd_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Platform / DevOps engineering\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"SBOM image provenance\" control must cover\n# fragment: sbom_image_provenance_",
        "/evidence/build-cicd_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "build-cicd_inventory.json",
            "isDir": false
          },
          {
            "name": "build-cicd_state.json",
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
          "value": "FLAG{bcd_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/build-cicd_inventory.json",
          "value": "sbom_image_provenance_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/build-cicd_state.json",
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
          "id": "bcd-13-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"SBOM image provenance\" sub-process of Build Environment & CI/CD (Continuous Integration / Continuous Delivery)?",
          "options": [
            "Re-implement the control on the auditor's behalf",
            "Increase the number of tools the team uses",
            "Replace the system owner's judgement entirely",
            "Obtain evidence that the sbom image provenance control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run or own the control."
        },
        {
          "id": "bcd-13-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"SBOM image provenance\" matter to the broader Build Environment & CI/CD (Continuous Integration / Continuous Delivery) posture?",
          "options": [
            "It is relevant solely for marketing",
            "It has no effect once a firewall exists",
            "It is a control other Build Environment & CI/CD (Continuous Integration / Continuous Delivery) controls depend on, so a gap here propagates risk into everything scoped to it",
            "It only affects documentation aesthetics"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure undermines the controls layered on top."
        },
        {
          "id": "bcd-13-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"SBOM image provenance\" control?",
          "options": [
            "The vendor's marketing datasheet",
            "The The SBOM (Software Bill of Materials) generated for each build/image (CycloneDX/SPDX) + where stored reconciled against policy, plus the resulting findings working paper",
            "A verbal assurance from the team lead",
            "A screenshot of the login page"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — exports reconciled to policy, not assertions."
        },
        {
          "id": "bcd-13-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where would an auditor pull the evidence for \"SBOM image provenance\"?",
          "options": [
            "SBOM tooling (Syft, cdxgen) + storage (registry referrers / Dependency-Track) (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., SBOM tooling (Syft, cdxgen) + storage (registry referrers / Dependency-Track)) via read-only access."
        },
        {
          "id": "bcd-13-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"SBOM image provenance\"?",
          "options": [
            "The external auditor",
            "No one — it is ownerless",
            "The end customer",
            "AppSec / platform — own SBOM/provenance (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "AppSec / platform — own SBOM/provenance owns the control data; the auditor independently verifies it."
        },
        {
          "id": "bcd-13-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"SBOM image provenance\", which part stays with the human auditor?",
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
          "id": "bcd-13-q7",
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
          "id": "bcd-13-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"SBOM image provenance\", which is a realistic reportable finding?",
          "options": [
            "Only a handful of images have SBOMs and none have build provenance, so when the next Log4Shell hits, there's no way to know which of the 400 production images are affected.",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. Only a handful of images have SBOMs and none have build provenance, so when the next Log4Shell hits, there's no way to know which of the 400 production images are affected."
        },
        {
          "id": "bcd-13-q9",
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
          "id": "bcd-13-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"SBOM image provenance\" also serve privacy and regulatory goals?",
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
    "epochId": "build-cicd",
    "id": "bcd-14",
    "order": 14,
    "title": "Vulnerability scanning and testing",
    "subtitle": "Agentic technical & privacy audit of the vulnerability scanning and testing control",
    "category": "cybersecurity",
    "xp": 100,
    "easeScore": 7,
    "valueScore": 9,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Vulnerability scanning and testing\" control for Build Environment & CI/CD (Continuous Integration / Continuous Delivery) is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify security testing is built into the pipeline and gates risky releases. PASS: SAST + SCA + secret-scan + image-scan + IaC-scan run on every pipeline and BLOCK on criticals; DAST runs against pre-prod; coverage spans repos/pipelines; findings have remediation SLAs; and suppressions are justified + reviewed. Exceptions: missing scan types (e.g. no SCA), gates in warn-only mode, large coverage gaps, no DAST, and blanket suppressions hiding real findings.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Build Environment & CI/CD (Continuous Integration / Continuous Delivery) systems of record (SAST (CodeQL/Semgrep/SonarQube), SCA (Snyk/Dependabot/Trivy), secret scan, image scan, IaC scan (Checkov), DAST (ZAP/Burp); The CI pipeline; Findings / ASPM platform) as tools — e.g. `per pipeline: which gates exist (SAST/SCA/secret/image/IaC/DAST) + blo`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The build-time security gates: SAST, SCA (dependencies), secret scan, image scan, IaC scan, DAST — and which are wired into the pipeline",
        "Coverage (repos/pipelines with each gate) + whether gates block or warn",
        "Findings + remediation SLA + the suppressed/accepted-findings register",
        "DAST / dynamic testing of the running app pre-prod"
      ],
      "system": [
        "SAST (CodeQL/Semgrep/SonarQube), SCA (Snyk/Dependabot/Trivy), secret scan, image scan, IaC scan (Checkov), DAST (ZAP/Burp)",
        "The CI pipeline",
        "Findings / ASPM platform"
      ],
      "dataOwner": [
        "AppSec — owns the testing program",
        "Developers — remediate",
        "DevOps (wiring)"
      ],
      "scoring": {
        "ease": "EASE 7/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 9/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Build Environment & CI/CD (Continuous Integration / Continuous Delivery) controls."
      }
    },
    "badge": {
      "id": "bcd-14-badge",
      "name": "Build Environment & CI/CD (Continuous Integration / Continuous Delivery) Auditor",
      "emoji": "🏗️"
    },
    "wonder": {
      "name": "Vulnerability scanning and testing",
      "location": "Build Environment & CI/CD (Continuous Integration / Continuous Delivery)",
      "era": "Present Day",
      "emoji": "🏗️"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Vulnerability scanning and testing\" as a repeatable agentic workflow: pull the real evidence (The build-time security gates: SAST, SCA (dependencies), secret scan, image scan, IaC scan, DAST — and which are wired into the pipeline) with read-only agents, run the test against policy, and issue a defensible opinion on the Build Environment & CI/CD (Continuous Integration / Continuous Delivery) control.",
      "year": 2025,
      "overview": [
        "The \"Vulnerability scanning and testing\" sub-process is one of the controls an auditor must verify for Build Environment & CI/CD (Continuous Integration / Continuous Delivery). The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the build-time security gates: SAST, SCA (dependencies), secret scan, image scan, IaC scan, DAST — and which are wired into the pipeline, for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here SAST (CodeQL/Semgrep/SonarQube), SCA (Snyk/Dependabot/Trivy), secret scan, image scan, IaC scan (Checkov), DAST (ZAP/Burp), The CI pipeline, Findings / ASPM platform — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `per pipeline: which gates exist (SAST/SCA/secret/image/IaC/DAST) + block vs warn` — read-only, against the systems of record.",
        "The test itself is specific. Verify security testing is built into the pipeline and gates risky releases. PASS: SAST + SCA + secret-scan + image-scan + IaC-scan run on every pipeline and BLOCK on criticals; DAST runs against pre-prod; coverage spans repos/pipelines; findings have remediation SLAs; and suppressions are justified + reviewed. Exceptions: missing scan types (e.g. no SCA), gates in warn-only mode, large coverage gaps, no DAST, and blanket suppressions hiding real findings. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `14_vulnerability_scanning_and_testing_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from SAST (CodeQL/Semgrep/SonarQube), SCA (Snyk/Dependabot/Trivy), secret scan, image scan, IaC scan (Checkov), DAST (ZAP/Burp) and The CI pipeline (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 14_vulnerability_scanning_and_testing_mcp.py` to expose it to your agent — or `python 14_vulnerability_scanning_and_testing_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "SolarWinds: the build system as the attack surface",
        "when": "2020",
        "where": "SolarWinds Orion build pipeline",
        "impact": "Malicious code injected during the build reached ~18,000 customers through a signed, trusted update.",
        "body": [
          "The SUNBURST actors did not tamper with source in the repo — they compromised the BUILD environment and injected the backdoor as Orion was compiled, so the malicious artifact was signed and shipped as legitimate.",
          "It reframed CI/CD as a first-class attack surface: an auditor must verify build-environment isolation, provenance/SLSA attestation, and that what ships is provably built from reviewed source."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Build Environment & CI/CD (Continuous Integration / Continuous Delivery) scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull SAST (CodeQL/Semgrep/SonarQube), SCA (Snyk/Dependabot/Trivy), secret scan, image scan, IaC scan (Checkov), DAST (ZAP/Burp) · The CI pipeline",
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
          "year": 2020,
          "event": "SolarWinds SUNBURST — build-time injection into a signed update",
          "highlight": true
        },
        {
          "year": 2021,
          "event": "Codecov bash-uploader compromise exposes CI secrets at scale"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Vulnerability scanning and testing\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "per pipeline: which gates exist (SAST/SCA/secret/image/IaC/DAST) + block vs warn\ncoverage = repos with the gate ÷ total repos\nfindings + remediation SLA + the suppression register (justified?)\nconfirm DAST runs against a deployed pre-prod build"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The build-time security gates: SAST, SCA (dependencies), secret scan, image scan, IaC scan, DAST — and which are wired into the pipeline.",
        "The test: Verify security testing is built into the pipeline and gates risky releases.",
        "Reconcile the systems of record (SAST (CodeQL/Semgrep/SonarQube), SCA (Snyk/Dependabot/Trivy), secret scan, image scan, IaC scan (Checkov), DAST (ZAP/Burp), The CI pipeline, Findings / ASPM platform) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. Half the repos have no SCA (so vulnerable dependencies ship freely), SAST runs warn-only, there's no DAST, and a blanket suppression hides 200 'won't fix' findings including criticals."
      ],
      "references": [
        {
          "title": "NIST SSDF (SP 800-218)",
          "url": "https://csrc.nist.gov/pubs/sp/800/218/final"
        },
        {
          "title": "OWASP DevSecOps Guideline",
          "url": "https://owasp.org/www-project-devsecops-guideline/"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "14_vulnerability_scanning_and_testing_mcp.py",
          "url": "/audit-code/build-cicd/14_vulnerability_scanning_and_testing_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Build Environment & CI/CD (Continuous Integration / Continuous Delivery) evidence for \"Vulnerability scanning and testing\" (the build-time security gates: sast, sca (dependencies), secret scan, image scan, iac scan, dast — and which are wired into the pipeline), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Vulnerability scanning and testing\" control for Build Environment & CI/CD (Continuous Integration / Continuous Delivery) at AcmeCorp. THE TEST: Verify security testing is built into the pipeline and gates risky releases. PASS: SAST + SCA + secret-scan + image-scan + IaC-scan run on every pipeline and BLOCK on criticals; DAST runs against pre-prod; coverage spans repos/pipelines; findings have remediation SLAs; and suppressions are justified + reviewed. Exceptions: missing scan types (e.g. no SCA), gates in warn-only mode, large coverage gaps, no DAST, and blanket suppressions hiding real findings. The evidence — The build-time security gates: SAST, SCA (dependencies), secret scan, image scan, IaC scan, DAST — and which are wired into the pipeline — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live SAST (CodeQL/Semgrep/SonarQube), SCA (Snyk/Dependabot/Trivy), secret scan, image scan, IaC scan (Checkov), DAST (ZAP/Burp) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. SAST (CodeQL/Semgrep/SonarQube), SCA (Snyk/Dependabot/Trivy), secret scan, image scan, IaC scan (Checkov), DAST (ZAP/Burp) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from SAST (CodeQL/Semgrep/SonarQube), SCA (Snyk/Dependabot/Trivy), secret scan, image scan, IaC scan (Checkov), DAST (ZAP/Burp); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Build Environment & CI/CD (Continuous Integration / Continuous Delivery): \"Vulnerability scanning and testing\" Audit Evidence\n\nThe test:\nVerify security testing is built into the pipeline and gates risky releases. PASS: SAST + SCA + secret-scan + image-scan + IaC-scan run on every pipeline and BLOCK on criticals; DAST runs against pre-prod; coverage spans repos/pipelines; findings have remediation SLAs; and suppressions are justified + reviewed. Exceptions: missing scan types (e.g. no SCA), gates in warn-only mode, large coverage gaps, no DAST, and blanket suppressions hiding real findings.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- build-cicd_inventory.json   (in-scope items — The build-time security gates: SAST, SCA (dependencies), secret scan, image scan, IaC scan, DAST — and which are wired into the pipeline)\n- build-cicd_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Vulnerability scanning and testing\",\n  \"domain\": \"Build Environment & CI/CD (Continuous Integration / Continuous Delivery)\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{bcd_",
        "/evidence/build-cicd_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Platform / DevOps engineering\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Vulnerability scanning and testing\" control must cover\n# fragment: vulnerability_scanning_testing_",
        "/evidence/build-cicd_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "build-cicd_inventory.json",
            "isDir": false
          },
          {
            "name": "build-cicd_state.json",
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
          "value": "FLAG{bcd_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/build-cicd_inventory.json",
          "value": "vulnerability_scanning_testing_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/build-cicd_state.json",
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
          "id": "bcd-14-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Vulnerability scanning and testing\" sub-process of Build Environment & CI/CD (Continuous Integration / Continuous Delivery)?",
          "options": [
            "Re-implement the control on the auditor's behalf",
            "Increase the number of tools the team uses",
            "Replace the system owner's judgement entirely",
            "Obtain evidence that the vulnerability scanning and testing control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run or own the control."
        },
        {
          "id": "bcd-14-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Vulnerability scanning and testing\" matter to the broader Build Environment & CI/CD (Continuous Integration / Continuous Delivery) posture?",
          "options": [
            "It is relevant solely for marketing",
            "It has no effect once a firewall exists",
            "It is a control other Build Environment & CI/CD (Continuous Integration / Continuous Delivery) controls depend on, so a gap here propagates risk into everything scoped to it",
            "It only affects documentation aesthetics"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure undermines the controls layered on top."
        },
        {
          "id": "bcd-14-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Vulnerability scanning and testing\" control?",
          "options": [
            "The vendor's marketing datasheet",
            "The The build-time security gates: SAST, SCA (dependencies), secret scan, image scan, IaC scan, DAST — and which are wired into the pipeline reconciled against policy, plus the resulting findings working paper",
            "A verbal assurance from the team lead",
            "A screenshot of the login page"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — exports reconciled to policy, not assertions."
        },
        {
          "id": "bcd-14-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where would an auditor pull the evidence for \"Vulnerability scanning and testing\"?",
          "options": [
            "SAST (CodeQL/Semgrep/SonarQube), SCA (Snyk/Dependabot/Trivy), secret scan, image scan, IaC scan (Checkov), DAST (ZAP/Burp) (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., SAST (CodeQL/Semgrep/SonarQube), SCA (Snyk/Dependabot/Trivy), secret scan, image scan, IaC scan (Checkov), DAST (ZAP/Burp)) via read-only access."
        },
        {
          "id": "bcd-14-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Vulnerability scanning and testing\"?",
          "options": [
            "The external auditor",
            "No one — it is ownerless",
            "The end customer",
            "AppSec — owns the testing program (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "AppSec — owns the testing program owns the control data; the auditor independently verifies it."
        },
        {
          "id": "bcd-14-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Vulnerability scanning and testing\", which part stays with the human auditor?",
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
          "id": "bcd-14-q7",
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
          "id": "bcd-14-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Vulnerability scanning and testing\", which is a realistic reportable finding?",
          "options": [
            "Half the repos have no SCA (so vulnerable dependencies ship freely), SAST runs warn-only, there's no DAST, and a blanket suppression hides 200 'won't fix' findings including criticals.",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. Half the repos have no SCA (so vulnerable dependencies ship freely), SAST runs warn-only, there's no DAST, and a blanket suppression hides 200 'won't fix' findings including criticals."
        },
        {
          "id": "bcd-14-q9",
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
          "id": "bcd-14-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Vulnerability scanning and testing\" also serve privacy and regulatory goals?",
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
    "epochId": "build-cicd",
    "id": "bcd-15",
    "order": 15,
    "title": "License scanning",
    "subtitle": "Agentic technical & privacy audit of the license scanning control",
    "category": "cybersecurity",
    "xp": 100,
    "easeScore": 8,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"License scanning\" control for Build Environment & CI/CD (Continuous Integration / Continuous Delivery) is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify open-source license obligations are identified and met. PASS: SCA/SBOM enumerates every component's license; a license policy classifies allowed/restricted/prohibited; the pipeline flags policy violations (e.g. AGPL in a distributed product) before release; and attribution/notice + copyleft obligations are met. Exceptions: unknown-license components shipped, prohibited/incompatible licenses (copyleft in proprietary distributed software), missing attribution/NOTICE, and no gate catching license risk.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Build Environment & CI/CD (Continuous Integration / Continuous Delivery) systems of record (SCA / license tooling (Snyk / FOSSA / Black Duck / Trivy license); SBOM; Legal license policy) as tools — e.g. `SCA license report per app (FOSSA / Black Duck / Trivy --scanners lice`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The open-source license inventory per application (from SCA/SBOM) + each component's license",
        "The org's license policy (allowed / restricted / prohibited — e.g. GPL/AGPL copyleft handling)",
        "License-policy violations (prohibited or incompatible licenses in shipped products)",
        "Attribution/notice compliance (NOTICE files, source-offer obligations)"
      ],
      "system": [
        "SCA / license tooling (Snyk / FOSSA / Black Duck / Trivy license)",
        "SBOM",
        "Legal license policy"
      ],
      "dataOwner": [
        "AppSec / Open-Source Program Office",
        "Legal",
        "Developers"
      ],
      "scoring": {
        "ease": "EASE 8/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Build Environment & CI/CD (Continuous Integration / Continuous Delivery) controls."
      }
    },
    "badge": {
      "id": "bcd-15-badge",
      "name": "Build Environment & CI/CD (Continuous Integration / Continuous Delivery) Auditor",
      "emoji": "🏗️"
    },
    "wonder": {
      "name": "License scanning",
      "location": "Build Environment & CI/CD (Continuous Integration / Continuous Delivery)",
      "era": "Present Day",
      "emoji": "🏗️"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"License scanning\" as a repeatable agentic workflow: pull the real evidence (The open-source license inventory per application (from SCA/SBOM) + each component's license) with read-only agents, run the test against policy, and issue a defensible opinion on the Build Environment & CI/CD (Continuous Integration / Continuous Delivery) control.",
      "year": 2025,
      "overview": [
        "The \"License scanning\" sub-process is one of the controls an auditor must verify for Build Environment & CI/CD (Continuous Integration / Continuous Delivery). The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the open-source license inventory per application (from SCA/SBOM) + each component's license, for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here SCA / license tooling (Snyk / FOSSA / Black Duck / Trivy license), SBOM, Legal license policy — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `SCA license report per app (FOSSA / Black Duck / Trivy --scanners license)` — read-only, against the systems of record.",
        "The test itself is specific. Verify open-source license obligations are identified and met. PASS: SCA/SBOM enumerates every component's license; a license policy classifies allowed/restricted/prohibited; the pipeline flags policy violations (e.g. AGPL in a distributed product) before release; and attribution/notice + copyleft obligations are met. Exceptions: unknown-license components shipped, prohibited/incompatible licenses (copyleft in proprietary distributed software), missing attribution/NOTICE, and no gate catching license risk. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `15_license_scanning_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from SCA / license tooling (Snyk / FOSSA / Black Duck / Trivy license) and SBOM (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 15_license_scanning_mcp.py` to expose it to your agent — or `python 15_license_scanning_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "SolarWinds: the build system as the attack surface",
        "when": "2020",
        "where": "SolarWinds Orion build pipeline",
        "impact": "Malicious code injected during the build reached ~18,000 customers through a signed, trusted update.",
        "body": [
          "The SUNBURST actors did not tamper with source in the repo — they compromised the BUILD environment and injected the backdoor as Orion was compiled, so the malicious artifact was signed and shipped as legitimate.",
          "It reframed CI/CD as a first-class attack surface: an auditor must verify build-environment isolation, provenance/SLSA attestation, and that what ships is provably built from reviewed source."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Build Environment & CI/CD (Continuous Integration / Continuous Delivery) scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull SCA / license tooling (Snyk / FOSSA / Black Duck / Trivy license) · SBOM",
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
          "year": 2020,
          "event": "SolarWinds SUNBURST — build-time injection into a signed update",
          "highlight": true
        },
        {
          "year": 2021,
          "event": "Codecov bash-uploader compromise exposes CI secrets at scale"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"License scanning\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "SCA license report per app (FOSSA / Black Duck / Trivy --scanners license)\nmap components to the license policy (allowed / restricted / prohibited)\nflag copyleft (GPL/AGPL) in distributed/proprietary products\nconfirm NOTICE/attribution files + source-offer obligations are met"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The open-source license inventory per application (from SCA/SBOM) + each component's license.",
        "The test: Verify open-source license obligations are identified and met.",
        "Reconcile the systems of record (SCA / license tooling (Snyk / FOSSA / Black Duck / Trivy license), SBOM, Legal license policy) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. A distributed product bundles an AGPL component (triggering copyleft source-disclosure obligations the company isn't meeting), and dozens of dependencies have unknown or unvetted licenses with no NOTICE file."
      ],
      "references": [
        {
          "title": "SPDX License List",
          "url": "https://spdx.org/licenses/"
        },
        {
          "title": "OpenChain ISO/IEC 5230",
          "url": "https://www.openchainproject.org/"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "15_license_scanning_mcp.py",
          "url": "/audit-code/build-cicd/15_license_scanning_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Build Environment & CI/CD (Continuous Integration / Continuous Delivery) evidence for \"License scanning\" (the open-source license inventory per application (from sca/sbom) + each component's license), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"License scanning\" control for Build Environment & CI/CD (Continuous Integration / Continuous Delivery) at AcmeCorp. THE TEST: Verify open-source license obligations are identified and met. PASS: SCA/SBOM enumerates every component's license; a license policy classifies allowed/restricted/prohibited; the pipeline flags policy violations (e.g. AGPL in a distributed product) before release; and attribution/notice + copyleft obligations are met. Exceptions: unknown-license components shipped, prohibited/incompatible licenses (copyleft in proprietary distributed software), missing attribution/NOTICE, and no gate catching license risk. The evidence — The open-source license inventory per application (from SCA/SBOM) + each component's license — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live SCA / license tooling (Snyk / FOSSA / Black Duck / Trivy license) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. SCA / license tooling (Snyk / FOSSA / Black Duck / Trivy license) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from SCA / license tooling (Snyk / FOSSA / Black Duck / Trivy license); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Build Environment & CI/CD (Continuous Integration / Continuous Delivery): \"License scanning\" Audit Evidence\n\nThe test:\nVerify open-source license obligations are identified and met. PASS: SCA/SBOM enumerates every component's license; a license policy classifies allowed/restricted/prohibited; the pipeline flags policy violations (e.g. AGPL in a distributed product) before release; and attribution/notice + copyleft obligations are met. Exceptions: unknown-license components shipped, prohibited/incompatible licenses (copyleft in proprietary distributed software), missing attribution/NOTICE, and no gate catching license risk.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- build-cicd_inventory.json   (in-scope items — The open-source license inventory per application (from SCA/SBOM) + each component's license)\n- build-cicd_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"License scanning\",\n  \"domain\": \"Build Environment & CI/CD (Continuous Integration / Continuous Delivery)\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{bcd_",
        "/evidence/build-cicd_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Platform / DevOps engineering\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"License scanning\" control must cover\n# fragment: license_scanning_",
        "/evidence/build-cicd_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "build-cicd_inventory.json",
            "isDir": false
          },
          {
            "name": "build-cicd_state.json",
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
          "value": "FLAG{bcd_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/build-cicd_inventory.json",
          "value": "license_scanning_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/build-cicd_state.json",
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
          "id": "bcd-15-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"License scanning\" sub-process of Build Environment & CI/CD (Continuous Integration / Continuous Delivery)?",
          "options": [
            "Re-implement the control on the auditor's behalf",
            "Increase the number of tools the team uses",
            "Replace the system owner's judgement entirely",
            "Obtain evidence that the license scanning control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run or own the control."
        },
        {
          "id": "bcd-15-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"License scanning\" matter to the broader Build Environment & CI/CD (Continuous Integration / Continuous Delivery) posture?",
          "options": [
            "It is relevant solely for marketing",
            "It has no effect once a firewall exists",
            "It is a control other Build Environment & CI/CD (Continuous Integration / Continuous Delivery) controls depend on, so a gap here propagates risk into everything scoped to it",
            "It only affects documentation aesthetics"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure undermines the controls layered on top."
        },
        {
          "id": "bcd-15-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"License scanning\" control?",
          "options": [
            "The vendor's marketing datasheet",
            "The The open-source license inventory per application (from SCA/SBOM) + each component's license reconciled against policy, plus the resulting findings working paper",
            "A verbal assurance from the team lead",
            "A screenshot of the login page"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — exports reconciled to policy, not assertions."
        },
        {
          "id": "bcd-15-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where would an auditor pull the evidence for \"License scanning\"?",
          "options": [
            "SCA / license tooling (Snyk / FOSSA / Black Duck / Trivy license) (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., SCA / license tooling (Snyk / FOSSA / Black Duck / Trivy license)) via read-only access."
        },
        {
          "id": "bcd-15-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"License scanning\"?",
          "options": [
            "The external auditor",
            "No one — it is ownerless",
            "The end customer",
            "AppSec / Open-Source Program Office (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "AppSec / Open-Source Program Office owns the control data; the auditor independently verifies it."
        },
        {
          "id": "bcd-15-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"License scanning\", which part stays with the human auditor?",
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
          "id": "bcd-15-q7",
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
          "id": "bcd-15-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"License scanning\", which is a realistic reportable finding?",
          "options": [
            "A distributed product bundles an AGPL component (triggering copyleft source-disclosure obligations the company isn't meeting), and dozens of dependencies have unknown or unvetted licenses with no NOTICE file.",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. A distributed product bundles an AGPL component (triggering copyleft source-disclosure obligations the company isn't meeting), and dozens of dependencies have unknown or unvetted licenses with no NOTICE file."
        },
        {
          "id": "bcd-15-q9",
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
          "id": "bcd-15-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"License scanning\" also serve privacy and regulatory goals?",
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

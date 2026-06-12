#!/usr/bin/env python3
"""Read-only MCP server — Infrastructure as Code (IaC): "Module and template governance" audit evidence.

THE TEST
Verify reusable modules and templates are governed, versioned, and trusted. PASS: callers consume modules from an approved private registry pinned to immutable, semver-tagged versions (not a moving branch or `latest`); module publishing is restricted to module owners and the module passes scanning/review before a version is cut; third-party/public modules are vetted (forked into the registry or pinned to a reviewed commit); and a known-good module change propagates through controlled version bumps, not silently. Exceptions: modules sourced from a floating `main`/`master` branch (any push changes prod), unrestricted publishing, public modules pulled directly from the internet with no review, and unpinned/`latest` references.

ARTIFACT (what _gather() pulls)
    The private module registry inventory (HCP Terraform private registry / Terraform Registry / Git module sources) and their version constraints

REAL SOURCES / COMMANDS to wire in place of the fixtures (read-only):
    grep callers for `source =` + `version =` / git `?ref=` → flag any pointing at a branch (`?ref=main`) or with no version constraint
    HCP Terraform: GET /api/v2/organizations/{org}/registry-modules  → versions, publishers
    confirm module repos run Checkov/tfsec + tests on PR before a tag is published
    for public modules: confirm they're vendored into the private registry or pinned to a reviewed commit SHA, not `terraform-aws-modules/...` floating

This server gathers the in-scope inventory and the observed control state, evaluates
each item against policy, and reports the exceptions with a PASS / EXCEPTIONS /
MATERIAL-GAP opinion. READ-ONLY: it lists and reports, never changes state — the hard
requirement for audit tooling.

  pip install "mcp[cli]"
  mcp run 05_module_and_template_governance_mcp.py                 # expose to an agent
  python 05_module_and_template_governance_mcp.py --selftest       # reproduce findings against fixtures, offline
"""
from __future__ import annotations
import json, sys
from dataclasses import dataclass, asdict

EXCEPTION_THRESHOLD = 3  # auditor-set policy: >3 exceptions => material gap

# ---- Offline fixtures (replace with read-only source API calls) ----------------
_FIXTURE_INVENTORY = [
    {"id": "item-001", "in_scope": True},
    {"id": "item-002", "in_scope": True},
    {"id": "item-003", "in_scope": True},
    {"id": "item-004", "in_scope": True},
]
_FIXTURE_STATE = {
    "item-001": True,
    "item-002": False,   # exception: control not applied
    "item-003": False,   # exception: drifted from baseline
    "item-004": True,
}

@dataclass
class Item:
    id: str
    in_scope: bool
    control_applied: bool
    @property
    def compliant(self) -> bool:
        return (not self.in_scope) or self.control_applied

def _gather() -> list[Item]:
    """Read-only: pull in-scope inventory + observed state from systems of record."""
    state = _FIXTURE_STATE
    return [Item(i["id"], bool(i.get("in_scope")), bool(state.get(i["id"], False)))
            for i in _FIXTURE_INVENTORY]

def _evaluate(items: list[Item]) -> list[dict]:
    return [{"id": i.id, "compliant": i.compliant} for i in items if i.in_scope]

# ---- MCP tools -----------------------------------------------------------------
def build_inventory() -> list[dict]:
    """List every in-scope item the "Module and template governance" control must cover."""
    return [asdict(i) for i in _gather()]

def find_exceptions() -> list[str]:
    """Return in-scope items where the control is missing or not operating."""
    return [r["id"] for r in _evaluate(_gather()) if not r["compliant"]]

def coverage_report() -> dict:
    """The audit deliverable: totals, exceptions, and the opinion."""
    rows = _evaluate(_gather())
    exceptions = [r["id"] for r in rows if not r["compliant"]]
    opinion = ("PASS" if not exceptions
               else "EXCEPTIONS" if len(exceptions) <= EXCEPTION_THRESHOLD
               else "MATERIAL GAP")
    return {
        "domain": "Infrastructure as Code (IaC)",
        "control": "Module and template governance",
        "in_scope": len(rows),
        "compliant": len(rows) - len(exceptions),
        "exceptions": exceptions,
        "opinion": opinion,
    }

# ---- MCP wiring (guarded so --selftest runs without the dependency) ------------
def _register():
    from mcp.server.fastmcp import FastMCP
    mcp = FastMCP("IAC Module and template governance Audit (read-only)")
    mcp.tool()(build_inventory)
    mcp.tool()(find_exceptions)
    mcp.tool()(coverage_report)
    return mcp

if __name__ == "__main__":
    if "--selftest" in sys.argv:
        print(json.dumps(coverage_report(), indent=2))
    else:
        _register().run()

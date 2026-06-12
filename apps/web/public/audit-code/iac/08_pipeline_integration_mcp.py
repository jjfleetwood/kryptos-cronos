#!/usr/bin/env python3
"""Read-only MCP server — Infrastructure as Code (IaC): "Pipeline integration" audit evidence.

THE TEST
Verify IaC change is delivered only through a controlled pipeline. PASS: applies run only from the pipeline (no local apply to prod), in the order plan → IaC-scan → policy-as-code → human approval → apply; the apply consumes the saved, reviewed plan artifact (so what's approved is what runs); prod applies require an approver distinct from the author via environment protection; the runner assumes a least-privilege, short-lived role scoped to the workspace; and the pipeline definition itself is branch-protected. Exceptions: developers applying to prod from laptops, the apply re-planning instead of using the approved plan (review/apply divergence), no approval gate before prod apply, an over-privileged shared apply role, and an editable pipeline anyone can change.

ARTIFACT (what _gather() pulls)
    The IaC pipeline definition (plan → policy → approval → apply) and the protected-environment / required-approval config for prod applies

REAL SOURCES / COMMANDS to wire in place of the fixtures (read-only):
    confirm the workflow uses `terraform plan -out=plan.out` then `terraform apply plan.out` (same artifact), not a bare `terraform apply` that re-plans
    GitHub: required reviewers on the `production` environment (gh api repos/{org}/{repo}/environments/production) — approver ≠ author
    inspect the apply-stage cloud role: scoped to the stack's resources + short-lived (OIDC), not AdministratorAccess
    confirm `terraform apply` is blocked outside CI (state-lock + no human apply credentials) and the pipeline YAML is branch-protected

This server gathers the in-scope inventory and the observed control state, evaluates
each item against policy, and reports the exceptions with a PASS / EXCEPTIONS /
MATERIAL-GAP opinion. READ-ONLY: it lists and reports, never changes state — the hard
requirement for audit tooling.

  pip install "mcp[cli]"
  mcp run 08_pipeline_integration_mcp.py                 # expose to an agent
  python 08_pipeline_integration_mcp.py --selftest       # reproduce findings against fixtures, offline
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
    """List every in-scope item the "Pipeline integration" control must cover."""
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
        "control": "Pipeline integration",
        "in_scope": len(rows),
        "compliant": len(rows) - len(exceptions),
        "exceptions": exceptions,
        "opinion": opinion,
    }

# ---- MCP wiring (guarded so --selftest runs without the dependency) ------------
def _register():
    from mcp.server.fastmcp import FastMCP
    mcp = FastMCP("IAC Pipeline integration Audit (read-only)")
    mcp.tool()(build_inventory)
    mcp.tool()(find_exceptions)
    mcp.tool()(coverage_report)
    return mcp

if __name__ == "__main__":
    if "--selftest" in sys.argv:
        print(json.dumps(coverage_report(), indent=2))
    else:
        _register().run()

#!/usr/bin/env python3
"""Read-only MCP server — Datacenter / Lab / Colocation (CoLo): "Physical security controls" audit evidence.

THE TEST
Verify physical access to the facility is least-privilege, layered, and logged. PASS: badge access to the DC/lab/cage is least-privilege with documented justification; access is provisioned on approval + revoked on leaver/role-change/term; layered controls (perimeter → mantrap → cage/cabinet) plus CCTV exist; and visitors/vendors are logged + escorted. Exceptions: people with access and no business need, leaver/contractor badges still active, tailgating-prone single-door entry (no mantrap/anti-passback), unmonitored or short-retention CCTV, and unescorted visitors.

ARTIFACT (what _gather() pulls)
    The physical-access-control records (badge/PACS access list to the data center/lab/cage) + who has access + their justification

REAL SOURCES / COMMANDS to wire in place of the fixtures (read-only):
    PACS access export: who can enter the DC/lab/cage + justification (least-privilege?)
    reconcile badge access vs active employees/contractors (orphaned/leaver badges)
    layered controls: perimeter, mantrap/anti-passback, cage/cabinet locks, CCTV coverage + retention
    visitor + vendor logs + escort-policy adherence

This server gathers the in-scope inventory and the observed control state, evaluates
each item against policy, and reports the exceptions with a PASS / EXCEPTIONS /
MATERIAL-GAP opinion. READ-ONLY: it lists and reports, never changes state — the hard
requirement for audit tooling.

  pip install "mcp[cli]"
  mcp run 01_physical_security_controls_mcp.py                 # expose to an agent
  python 01_physical_security_controls_mcp.py --selftest       # reproduce findings against fixtures, offline
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
    """List every in-scope item the "Physical security controls" control must cover."""
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
        "domain": "Datacenter / Lab / Colocation (CoLo)",
        "control": "Physical security controls",
        "in_scope": len(rows),
        "compliant": len(rows) - len(exceptions),
        "exceptions": exceptions,
        "opinion": opinion,
    }

# ---- MCP wiring (guarded so --selftest runs without the dependency) ------------
def _register():
    from mcp.server.fastmcp import FastMCP
    mcp = FastMCP("DCR Physical security controls Audit (read-only)")
    mcp.tool()(build_inventory)
    mcp.tool()(find_exceptions)
    mcp.tool()(coverage_report)
    return mcp

if __name__ == "__main__":
    if "--selftest" in sys.argv:
        print(json.dumps(coverage_report(), indent=2))
    else:
        _register().run()

import Link from "next/link";
import { auditEpochs, auditStagesForEpoch } from "@kryptos/core/audit-registry";

// Owner-only library browser for the private Agentic Audit deployment. Reaching
// this page already means the edge gate (src/proxy.ts) passed. Renders the full
// domain/module structure straight from @kryptos/core/audit-registry — no gating
// logic and no StageContainer dependency (deep per-module rendering is a follow-up;
// see ../../docs/AUDIT_EXTRACTION.md).
export default function Home() {
  return (
    <main style={{ minHeight: "100vh", padding: "48px 24px", maxWidth: 1000, margin: "0 auto" }}>
      <p style={{ fontSize: 12, letterSpacing: 2, textTransform: "uppercase", color: "#a78bfa" }}>
        Private · owner-only
      </p>
      <h1 style={{ fontSize: 32, fontWeight: 800, margin: "8px 0 6px" }}>Agentic Audit Library</h1>
      <p style={{ color: "#9ca3af", marginBottom: 32 }}>
        {auditEpochs.length} domains · personal agentic-audit working reference. Not part of the Kryptós product.
      </p>

      <div style={{ display: "grid", gap: 20 }}>
        {auditEpochs.map((e) => {
          const modules = auditStagesForEpoch(e.id);
          return (
            <section
              key={e.id}
              style={{
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: 16,
                padding: 20,
                background: "rgba(255,255,255,0.02)",
              }}
            >
              <h2 style={{ fontSize: 18, fontWeight: 700, margin: "0 0 4px" }}>
                <span style={{ marginRight: 8 }}>{e.emoji}</span>
                {e.name}
                <span style={{ color: "#6b7280", fontSize: 12, fontWeight: 400, marginLeft: 8 }}>
                  {modules.length} modules
                </span>
              </h2>
              {e.description && (
                <p style={{ color: "#9ca3af", fontSize: 13, margin: "0 0 12px" }}>{e.description}</p>
              )}
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 6 }}>
                {modules.map((m) => (
                  <li key={m.id}>
                    <Link
                      href={`/${e.id}/${m.id}`}
                      style={{ fontSize: 13, color: "#d1d5db", display: "flex", gap: 8, textDecoration: "none", padding: "4px 6px", borderRadius: 6 }}
                    >
                      <span style={{ color: "#6b7280", fontFamily: "monospace", flexShrink: 0 }}>{m.id}</span>
                      <span>{m.title}</span>
                      <span style={{ color: "#7c3aed", marginLeft: "auto" }}>→</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          );
        })}
      </div>
    </main>
  );
}

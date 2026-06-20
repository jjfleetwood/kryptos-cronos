// Placeholder landing for the private Agentic Audit deployment. The audit routes
// + registry + downloadable code move here from apps/web (see docs/AUDIT_EXTRACTION.md).
// Reaching this page at all already means the owner-only edge gate (src/proxy.ts) passed.
export default function Home() {
  return (
    <main style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: 24 }}>
      <div style={{ maxWidth: 560 }}>
        <p style={{ fontSize: 12, letterSpacing: 2, textTransform: "uppercase", color: "#a78bfa" }}>Private · owner-only</p>
        <h1 style={{ fontSize: 32, fontWeight: 800, margin: "8px 0 12px" }}>Agentic Audit Library</h1>
        <p style={{ color: "#9ca3af", lineHeight: 1.6 }}>
          Personal agentic-audit working library — separate from the Kryptós product.
          Domains and modules will appear here once migrated from the main app.
        </p>
      </div>
    </main>
  );
}

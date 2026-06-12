import Link from "next/link";

export default function AuditGate({ reason }: { reason: "signin" | "pro" }) {
  return (
    <div
      className="min-h-screen flex items-center justify-center px-4"
      style={{ background: "linear-gradient(135deg, #0d1117 0%, #160f24 50%, #1a1a2e 100%)" }}
    >
      <div className="text-center max-w-sm">
        <div className="text-6xl mb-4">🔒</div>
        <h2 className="text-2xl font-black text-white mb-2">Advanced Audit</h2>
        {reason === "signin" ? (
          <>
            <p className="text-gray-400 text-sm mb-6">
              The agentic audit library is a gated Pro / Enterprise track. Sign in to continue.
            </p>
            <Link href="/login" className="inline-block rounded-lg bg-violet-500/90 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-violet-400">
              Sign in
            </Link>
          </>
        ) : (
          <>
            <p className="text-gray-400 text-sm mb-6">
              The agentic audit library is available on Pro and Enterprise plans.
            </p>
            <Link href="/account" className="inline-block rounded-lg bg-violet-500/90 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-violet-400">
              Upgrade to Pro
            </Link>
          </>
        )}
        <div className="mt-6">
          <Link href="/stages" className="text-violet-300 hover:text-violet-200 text-sm transition-colors">
            ← Back to stage map
          </Link>
        </div>
      </div>
    </div>
  );
}

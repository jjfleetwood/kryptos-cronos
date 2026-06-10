import fs from "fs";
import path from "path";
import Link from "next/link";
import type { Metadata } from "next";
import ReactMarkdown, { type Components } from "react-markdown";
import remarkGfm from "remark-gfm";

export const metadata: Metadata = {
  title: "Agent Risk Audit Guide — Kryptós CronOS",
  description:
    "A practical field guide for auditing agentic-AI systems: the G-I-A risk framework, scoping, the evidence trail, per-layer tests, framework mapping, and CAPA reporting.",
};

// The canonical guide lives in secured-docs (also surfaced in the admin docs
// viewer); this public page renders the same markdown for everyone. The route is
// traced to the file in next.config.ts.
function loadGuide(): string {
  try {
    return fs.readFileSync(path.join(process.cwd(), "secured-docs", "AGENT_RISK_AUDIT_GUIDE.md"), "utf-8");
  } catch {
    return "# Agent Risk Audit Guide\n\nThe guide is temporarily unavailable.";
  }
}

const components: Components = {
  h1: ({ children }) => <h1 className="text-3xl font-bold text-white mb-6 mt-2 leading-tight">{children}</h1>,
  h2: ({ children }) => <h2 className="text-xl font-semibold text-cyan-400 mt-10 mb-3 border-b border-white/10 pb-2">{children}</h2>,
  h3: ({ children }) => <h3 className="text-sm font-semibold text-gray-200 mt-6 mb-2 uppercase tracking-wide">{children}</h3>,
  h4: ({ children }) => <h4 className="text-sm font-semibold text-gray-300 mt-4 mb-2">{children}</h4>,
  p: ({ children }) => <p className="text-gray-400 mb-4 leading-relaxed text-[15px]">{children}</p>,
  pre: ({ children }) => (
    <pre className="bg-black/70 border border-white/10 rounded-lg p-4 overflow-x-auto mb-4 leading-relaxed">{children}</pre>
  ),
  code: ({ children, className }) => {
    const isBlock = className?.startsWith("language-") || String(children).includes("\n");
    return isBlock ? (
      <code className="text-green-300 text-xs font-mono">{children}</code>
    ) : (
      <code className="bg-white/10 text-green-300 px-1 py-0.5 rounded text-xs font-mono">{children}</code>
    );
  },
  ul: ({ children, className }) => {
    const isTaskList = className?.includes("contains-task-list");
    return <ul className={`${isTaskList ? "list-none pl-1" : "list-disc pl-5"} mb-4 space-y-1`}>{children}</ul>;
  },
  ol: ({ children }) => <ol className="list-decimal pl-5 mb-4 space-y-1">{children}</ol>,
  li: ({ children, className }) => {
    const isTaskItem = className?.includes("task-list-item");
    return (
      <li className={`text-gray-400 leading-relaxed text-[15px] ${isTaskItem ? "flex items-start gap-2 [&>input]:mt-0.5 [&>input]:accent-cyan-400 [&>input]:shrink-0" : ""}`}>
        {children}
      </li>
    );
  },
  strong: ({ children }) => <strong className="text-white font-semibold">{children}</strong>,
  em: ({ children }) => <em className="text-gray-300 italic">{children}</em>,
  a: ({ href, children }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 underline transition-colors">
      {children}
    </a>
  ),
  table: ({ children }) => (
    <div className="overflow-x-auto mb-6 rounded-lg border border-white/8">
      <table className="w-full text-sm">{children}</table>
    </div>
  ),
  thead: ({ children }) => <thead className="border-b border-white/10 bg-white/3">{children}</thead>,
  tbody: ({ children }) => <tbody>{children}</tbody>,
  tr: ({ children }) => <tr className="border-b border-white/5 hover:bg-white/2 transition-colors">{children}</tr>,
  th: ({ children }) => <th className="text-left px-4 py-2 text-xs text-gray-500 uppercase tracking-wider font-semibold">{children}</th>,
  td: ({ children }) => <td className="px-4 py-2 text-gray-400 text-sm">{children}</td>,
  hr: () => <hr className="border-white/10 my-8" />,
  blockquote: ({ children }) => (
    <blockquote className="border-l-2 border-cyan-500/30 pl-4 italic text-gray-500 mb-4 text-sm">{children}</blockquote>
  ),
};

export default function AgentRiskAuditGuidePage() {
  const markdown = loadGuide();

  return (
    <div className="min-h-screen px-4 py-16" style={{ background: "linear-gradient(135deg, #0d1117 0%, #0f2027 50%, #1a1a2e 100%)" }}>
      <div className="max-w-3xl mx-auto">
        <Link href="/stages" className="text-gray-500 hover:text-cyan-400 text-sm transition-colors">
          ← Back to stages
        </Link>

        <div className="mt-6 mb-8 flex items-center gap-3">
          <span className="text-3xl flex-shrink-0">🛡️</span>
          <div>
            <p className="text-[11px] font-mono font-bold text-violet-400 uppercase tracking-widest">Field Guide</p>
            <p className="text-gray-500 text-sm">How to audit agentic-AI systems · companion to the Auditing Agentic AI epochs</p>
          </div>
        </div>

        <article className="rounded-2xl border border-white/10 bg-white/2 p-6 sm:p-8">
          <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
            {markdown}
          </ReactMarkdown>
        </article>

        {/* Run the epochs — the deep, worked-example version */}
        <div className="mt-8 grid sm:grid-cols-2 gap-4">
          <Link
            href="/stages/audit-ag01"
            className="group rounded-xl border border-cyan-500/30 bg-gradient-to-br from-cyan-500/10 to-transparent p-5 hover:border-cyan-400/60 transition-colors"
          >
            <p className="text-[11px] font-mono font-bold text-cyan-400 uppercase tracking-widest mb-1">Baseline · tech-audit-5</p>
            <p className="text-white font-bold text-sm mb-1 group-hover:text-cyan-200 transition-colors">Auditing Agentic AI →</p>
            <p className="text-gray-500 text-xs">The agentic loop, the lifecycle, the G-I-A layers, the evidence trail, and a baseline engagement — 10 stages.</p>
          </Link>
          <Link
            href="/stages/audit-ag11"
            className="group rounded-xl border border-violet-500/30 bg-gradient-to-br from-violet-500/10 to-transparent p-5 hover:border-violet-400/60 transition-colors"
          >
            <p className="text-[11px] font-mono font-bold text-violet-400 uppercase tracking-widest mb-1">Advanced · tech-audit-6</p>
            <p className="text-white font-bold text-sm mb-1 group-hover:text-violet-200 transition-colors">Auditing Agentic AI: Advanced →</p>
            <p className="text-gray-500 text-xs">Eval engineering, the MCP/NHI ecosystem, multi-agent chaos, trace integrity, continuous monitoring, and incident forensics — 10 stages.</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

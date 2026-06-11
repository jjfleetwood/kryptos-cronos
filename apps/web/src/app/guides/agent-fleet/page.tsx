import fs from "fs";
import path from "path";
import Link from "next/link";
import type { Metadata } from "next";
import ReactMarkdown, { type Components } from "react-markdown";
import remarkGfm from "remark-gfm";

export const metadata: Metadata = {
  title: "Agent Fleet Overview — Kryptós CronOS",
  description:
    "Every automated agent on Kryptós CronOS: the nightly report fleet, the hourly programming agent, the tier method, the Claude Code subagents, and the never-merge rule they all share.",
};

// Public render of the Agent Fleet Overview (mirrors the Agent Risk Audit Guide).
// The route is traced to the markdown file in next.config.ts.
function loadGuide(): string {
  try {
    return fs.readFileSync(path.join(process.cwd(), "secured-docs", "AGENTS_OVERVIEW.md"), "utf-8");
  } catch {
    return "# Agent Fleet Overview\n\nThe overview is temporarily unavailable.";
  }
}

const components: Components = {
  h1: ({ children }) => <h1 className="text-3xl font-bold text-white mb-6 mt-2 leading-tight">{children}</h1>,
  h2: ({ children }) => <h2 className="text-xl font-semibold text-emerald-400 mt-10 mb-3 border-b border-white/10 pb-2">{children}</h2>,
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
  ul: ({ children }) => <ul className="list-disc pl-5 mb-4 space-y-1">{children}</ul>,
  ol: ({ children }) => <ol className="list-decimal pl-5 mb-4 space-y-1">{children}</ol>,
  li: ({ children }) => <li className="text-gray-400 leading-relaxed text-[15px]">{children}</li>,
  strong: ({ children }) => <strong className="text-white font-semibold">{children}</strong>,
  em: ({ children }) => <em className="text-gray-300 italic">{children}</em>,
  a: ({ href, children }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:text-emerald-300 underline transition-colors">{children}</a>
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
    <blockquote className="border-l-2 border-emerald-500/30 pl-4 italic text-gray-500 mb-4 text-sm">{children}</blockquote>
  ),
};

export default function AgentFleetPage() {
  const markdown = loadGuide();
  return (
    <div className="min-h-screen px-4 py-16" style={{ background: "linear-gradient(135deg, #0d1117 0%, #0f2027 50%, #1a1a2e 100%)" }}>
      <div className="max-w-3xl mx-auto">
        <Link href="/stages" className="text-gray-500 hover:text-emerald-400 text-sm transition-colors">← Back to stages</Link>
        <div className="mt-6 mb-8 flex items-center gap-3">
          <span className="text-3xl flex-shrink-0">🛰️</span>
          <div>
            <p className="text-[11px] font-mono font-bold text-emerald-400 uppercase tracking-widest">Behind the scenes</p>
            <p className="text-gray-500 text-sm">Every automated agent on Kryptós CronOS — what runs, when, and the rules they share</p>
          </div>
        </div>
        <article className="rounded-2xl border border-white/10 bg-white/2 p-6 sm:p-8">
          <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
            {markdown}
          </ReactMarkdown>
        </article>
      </div>
    </div>
  );
}

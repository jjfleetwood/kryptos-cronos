"use client";

import React from "react";

// ── Pattern definitions ────────────────────────────────────────────────────────
// Each pattern has a regex and a render function.
// Patterns are applied in order — earlier patterns win on overlap.

type PatternDef = {
  regex: RegExp;
  render: (match: string, groups: RegExpExecArray) => React.ReactNode;
};

const PATTERNS: PatternDef[] = [
  // CVE identifiers — neon green monospace pill
  {
    regex: /CVE-\d{4}-\d+/g,
    render: (m) => (
      <span className="text-green-400 font-mono font-bold bg-green-400/10 px-1.5 py-0.5 rounded text-[0.85em] border border-green-400/20">
        {m}
      </span>
    ),
  },
  // Quoted strings — amber (these are usually named exploits, protocols, terms)
  {
    regex: /"([^"]{2,80})"/g,
    render: (m) => (
      <span className="text-amber-300 font-medium">{m}</span>
    ),
  },
  // Dollar amounts — cyan bold
  {
    regex: /\$[\d,.]+\s*(?:trillion|billion|million|thousand|[BMK])?(?=[\s.,;:!?)—–]|$)/gi,
    render: (m) => (
      <span className="text-cyan-300 font-semibold">{m}</span>
    ),
  },
  // Large numbers with scale word (must come before bare %)
  {
    regex: /\b\d[\d,]*(?:\.\d+)?\s*(?:trillion|billion|million|thousand)\b/gi,
    render: (m) => (
      <span className="text-cyan-300 font-semibold">{m}</span>
    ),
  },
  // Percentages
  {
    regex: /\b\d+(?:\.\d+)?%/g,
    render: (m) => (
      <span className="text-cyan-300 font-semibold">{m}</span>
    ),
  },
  // Version numbers — teal monospace
  {
    regex: /\bv\d+\.\d+(?:\.\d+)?\b/g,
    render: (m) => (
      <span className="text-teal-300 font-mono text-[0.88em]">{m}</span>
    ),
  },
  // CVSS scores — e.g. "9.8", "10.0" in context of "CVSS" or as standalone decimal 7–10
  {
    regex: /\bCVSS\s*(?:score\s+of\s+)?(\d+\.\d)\b/gi,
    render: (m) => (
      <span className="text-orange-300 font-mono font-semibold">{m}</span>
    ),
  },
  // Bare years used as historical anchors (4-digit, 1900–2029)
  {
    regex: /\b(19|20)\d{2}\b/g,
    render: (m) => (
      <span className="text-gray-300 font-medium">{m}</span>
    ),
  },
];

// ── Tokeniser ─────────────────────────────────────────────────────────────────

function tokenise(text: string): React.ReactNode[] {
  // Collect all non-overlapping matches sorted by position
  const hits: Array<{ start: number; end: number; node: React.ReactNode }> = [];

  for (const { regex, render } of PATTERNS) {
    regex.lastIndex = 0;
    let m: RegExpExecArray | null;
    while ((m = regex.exec(text)) !== null) {
      hits.push({ start: m.index, end: m.index + m[0].length, node: render(m[0], m) });
    }
  }

  // Sort by start; drop overlapping matches (first one wins)
  hits.sort((a, b) => a.start - b.start || b.end - a.end);
  const kept: typeof hits = [];
  let cursor = 0;
  for (const h of hits) {
    if (h.start >= cursor) {
      kept.push(h);
      cursor = h.end;
    }
  }

  // Interleave plain text with highlighted spans
  const nodes: React.ReactNode[] = [];
  let pos = 0;
  for (let i = 0; i < kept.length; i++) {
    const { start, end, node } = kept[i];
    if (start > pos) nodes.push(text.slice(pos, start));
    nodes.push(React.cloneElement(node as React.ReactElement, { key: i }));
    pos = end;
  }
  if (pos < text.length) nodes.push(text.slice(pos));
  return nodes;
}

// ── Public component ──────────────────────────────────────────────────────────

export default function RichText({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) {
  const nodes = tokenise(text);
  return <span className={className}>{nodes}</span>;
}

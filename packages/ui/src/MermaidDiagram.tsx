"use client";

import { useEffect, useRef, useState } from "react";

interface Props {
  code: string;
}

export default function MermaidDiagram({ code }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    const id = `mmd-${Math.random().toString(36).slice(2, 10)}`;

    import("mermaid").then(({ default: mermaid }) => {
      mermaid.initialize({
        startOnLoad: false,
        theme: "dark",
        themeVariables: {
          background: "#0d1117",
          primaryColor: "#164e63",
          primaryTextColor: "#e2e8f0",
          primaryBorderColor: "#06b6d4",
          lineColor: "#4b5563",
          secondaryColor: "#1e293b",
          tertiaryColor: "#0f172a",
          tertiaryTextColor: "#94a3b8",
          edgeLabelBackground: "#111827",
          fontFamily: "ui-monospace, SFMono-Regular, monospace",
          fontSize: "13px",
        },
      });

      mermaid
        .render(id, code.trim())
        .then(({ svg }) => {
          if (!cancelled && ref.current) {
            ref.current.innerHTML = svg;
          }
        })
        .catch((e: Error) => {
          if (!cancelled) setError(e.message);
        });
    });

    return () => {
      cancelled = true;
    };
  }, [code]);

  if (error) {
    return (
      <pre className="bg-red-900/20 border border-red-500/30 rounded-lg p-3 text-red-400 text-xs overflow-x-auto mb-4">
        Diagram error: {error}
        {"\n\n"}
        {code}
      </pre>
    );
  }

  return (
    <div
      ref={ref}
      className="flex justify-center py-6 overflow-x-auto mb-4 [&_svg]:max-w-full [&_svg]:h-auto [&_svg]:rounded"
    />
  );
}

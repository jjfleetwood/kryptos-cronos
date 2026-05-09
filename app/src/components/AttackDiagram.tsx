import type { DiagramNode } from "@/data/types";

const nodeStyles: Record<DiagramNode["type"], { border: string; bg: string; text: string; label: string }> = {
  attacker: { border: "border-red-500/60", bg: "bg-red-500/10", text: "text-red-400", label: "ATTACKER" },
  system:   { border: "border-yellow-500/60", bg: "bg-yellow-500/10", text: "text-yellow-400", label: "SYSTEM" },
  victim:   { border: "border-cyan-500/60", bg: "bg-cyan-500/10", text: "text-cyan-400", label: "TARGET" },
  result:   { border: "border-purple-500/60", bg: "bg-purple-500/10", text: "text-purple-400", label: "RESULT" },
};

export default function AttackDiagram({ nodes }: { nodes: DiagramNode[] }) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-0 my-2">
      {nodes.map((node, i) => {
        const s = nodeStyles[node.type];
        return (
          <div key={i} className="flex items-center">
            <div className={`border ${s.border} ${s.bg} rounded-lg px-4 py-3 min-w-[100px] max-w-[160px] text-center`}>
              <div className={`text-[10px] font-bold tracking-widest mb-1 opacity-60 ${s.text}`}>
                {s.label}
              </div>
              <div className={`text-sm font-semibold ${s.text}`}>{node.label}</div>
              {node.sub && (
                <div className="text-[11px] text-gray-500 mt-1">{node.sub}</div>
              )}
            </div>
            {i < nodes.length - 1 && (
              <div className="flex items-center mx-1">
                <div className="w-6 h-px bg-gray-600" />
                <div className="w-0 h-0 border-t-4 border-b-4 border-l-6 border-t-transparent border-b-transparent border-l-gray-600"
                  style={{ borderLeftWidth: 6 }} />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

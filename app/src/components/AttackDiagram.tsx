import type { DiagramNode } from "@/data/types";

const nodeStyles: Record<DiagramNode["type"], { border: string; bg: string; text: string }> = {
  attacker: { border: "border-red-500/60",    bg: "bg-red-500/10",    text: "text-red-400" },
  system:   { border: "border-yellow-500/60", bg: "bg-yellow-500/10", text: "text-yellow-400" },
  victim:   { border: "border-cyan-500/60",   bg: "bg-cyan-500/10",   text: "text-cyan-400" },
  result:   { border: "border-purple-500/60", bg: "bg-purple-500/10", text: "text-purple-400" },
};

// Security categories use attack-specific labels; all others use neutral step labels.
const SECURITY_CATEGORIES = new Set(["cybersecurity", "ai", "owasp"]);

const SECURITY_TYPE_LABELS: Record<DiagramNode["type"], string> = {
  attacker: "ATTACKER",
  system:   "SYSTEM",
  victim:   "TARGET",
  result:   "OUTCOME",
};

const CATEGORY_TYPE_LABELS: Record<string, Record<DiagramNode["type"], string>> = {
  sports:  { attacker: "PLAYER",   system: "ACTION",   victim: "PLAY",    result: "OUTCOME" },
  arts:    { attacker: "STEP",     system: "PROCESS",  victim: "ELEMENT", result: "FINISH" },
  driving: { attacker: "DRIVER",   system: "RULE",     victim: "HAZARD",  result: "OUTCOME" },
  health:  { attacker: "CAUSE",    system: "PROCESS",  victim: "PATIENT", result: "OUTCOME" },
};

export default function AttackDiagram({ nodes, category = "cybersecurity" }: { nodes: DiagramNode[]; category?: string }) {
  const isSecurity = SECURITY_CATEGORIES.has(category);
  const categoryLabels = CATEGORY_TYPE_LABELS[category];

  return (
    <div className="flex flex-wrap items-center justify-center gap-0 my-2">
      {nodes.map((node, i) => {
        const s = nodeStyles[node.type];
        let typeLabel: string;
        if (isSecurity) {
          typeLabel = SECURITY_TYPE_LABELS[node.type];
        } else if (categoryLabels) {
          typeLabel = categoryLabels[node.type];
        } else {
          // Travel, language, or other non-security: use sequential step numbers
          typeLabel = `STEP ${i + 1}`;
        }
        return (
          <div key={i} className="flex items-center">
            <div className={`border ${s.border} ${s.bg} rounded-lg px-4 py-3 min-w-[110px] max-w-[170px] text-center`}>
              <div className={`text-[10px] font-bold tracking-widest mb-1 opacity-60 ${s.text}`}>
                {typeLabel}
              </div>
              <div className={`text-sm font-semibold ${s.text}`}>{node.label}</div>
              {node.sub && (
                <div className="text-[11px] text-gray-500 mt-1 leading-tight">{node.sub}</div>
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

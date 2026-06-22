import type { DiagramNode } from "@kryptos/core/types";

// Attack/exploit content keeps the threat-colored roles (attacker/system/...).
const ATTACK_STYLES: Record<DiagramNode["type"], { border: string; bg: string; text: string }> = {
  attacker: { border: "border-red-500/60",    bg: "bg-red-500/10",    text: "text-red-400" },
  system:   { border: "border-yellow-500/60", bg: "bg-yellow-500/10", text: "text-yellow-400" },
  victim:   { border: "border-cyan-500/60",   bg: "bg-cyan-500/10",   text: "text-cyan-400" },
  result:   { border: "border-purple-500/60", bg: "bg-purple-500/10", text: "text-purple-400" },
};

// Concept/flow content (no real attack) uses a calm, position-based palette so the
// boxes read as a flow chart of ideas — not an attack with "ATTACKER"/"TARGET" roles.
const FLOW_PALETTE = [
  { border: "border-cyan-500/50",    bg: "bg-cyan-500/10",    text: "text-cyan-300" },
  { border: "border-sky-500/50",     bg: "bg-sky-500/10",     text: "text-sky-300" },
  { border: "border-indigo-500/50",  bg: "bg-indigo-500/10",  text: "text-indigo-300" },
  { border: "border-violet-500/50",  bg: "bg-violet-500/10",  text: "text-violet-300" },
  { border: "border-emerald-500/50", bg: "bg-emerald-500/10", text: "text-emerald-300" },
];

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

export default function AttackDiagram({
  nodes,
  category = "cybersecurity",
  attack = true,
}: {
  nodes: DiagramNode[];
  category?: string;
  attack?: boolean;
}) {
  const categoryLabels = CATEGORY_TYPE_LABELS[category];

  return (
    <div className="flex flex-wrap items-stretch justify-center gap-y-3 my-2">
      {nodes.map((node, i) => {
        const isLast = i === nodes.length - 1;
        const s = attack ? ATTACK_STYLES[node.type] : FLOW_PALETTE[i % FLOW_PALETTE.length];

        let typeLabel: string;
        if (attack && SECURITY_CATEGORIES.has(category)) typeLabel = SECURITY_TYPE_LABELS[node.type];
        else if (categoryLabels) typeLabel = categoryLabels[node.type];
        else typeLabel = attack ? `STEP ${i + 1}` : ""; // concept mode shows just the number badge

        return (
          <div key={i} className="flex items-stretch">
            <div className={`flex flex-col justify-center border ${s.border} ${s.bg} rounded-xl px-4 py-3 min-w-[120px] max-w-[185px] text-center`}>
              <div className={`flex items-center justify-center gap-1.5 text-[10px] font-bold tracking-widest mb-1 ${attack ? "opacity-60" : "opacity-90"} ${s.text}`}>
                {!attack && (
                  <span className={`inline-flex items-center justify-center w-4 h-4 rounded-full text-[9px] ${s.bg} ${s.text} border ${s.border}`}>{i + 1}</span>
                )}
                {typeLabel}
              </div>
              <div className={`text-sm font-semibold ${attack ? s.text : "text-gray-100"}`}>{node.label}</div>
              {node.sub && (
                <div className={`text-[11px] mt-1 leading-snug ${attack ? "text-gray-500" : "text-gray-400"}`}>{node.sub}</div>
              )}
            </div>
            {!isLast && (
              <div className="flex items-center mx-1.5" aria-hidden>
                <div className={`w-5 h-px ${attack ? "bg-gray-600" : "bg-gray-500"}`} />
                <div
                  className={`w-0 h-0 border-t-4 border-b-4 border-t-transparent border-b-transparent ${attack ? "border-l-gray-600" : "border-l-gray-500"}`}
                  style={{ borderLeftWidth: 6 }}
                />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

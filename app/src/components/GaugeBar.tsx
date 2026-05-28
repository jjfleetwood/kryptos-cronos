"use client";

type GaugeBarProps = {
  value: number;     // 1–10
  label: string;
  compact?: boolean; // smaller version for stage cards
};

function valueToColor(v: number): string {
  // 1=red, 5=amber, 10=green — smooth interpolation
  const pct = (v - 1) / 9; // 0..1
  if (pct < 0.5) {
    // red → amber
    const t = pct / 0.5;
    const r = 239;
    const g = Math.round(68 + (160 - 68) * t);
    const b = Math.round(68 + (0 - 68) * t);
    return `rgb(${r},${g},${b})`;
  } else {
    // amber → green
    const t = (pct - 0.5) / 0.5;
    const r = Math.round(239 + (34 - 239) * t);
    const g = Math.round(160 + (197 - 160) * t);
    const b = Math.round(0 + (94 - 0) * t);
    return `rgb(${r},${g},${b})`;
  }
}

export default function GaugeBar({ value, label, compact = false }: GaugeBarProps) {
  const clampedValue = Math.max(1, Math.min(10, value));
  const pct = ((clampedValue - 1) / 9) * 100;
  const color = valueToColor(clampedValue);
  const needleLeft = `${pct}%`;

  if (compact) {
    return (
      <div className="flex items-center gap-2">
        <span className="text-gray-500 text-xs whitespace-nowrap">{label}</span>
        <div className="relative flex-1 h-1.5 rounded-full overflow-hidden"
          style={{ background: "linear-gradient(to right, #ef4444, #f59e0b, #22c55e)" }}>
          <div
            className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full border border-white/40 -translate-x-1/2"
            style={{ left: needleLeft, background: color }}
          />
        </div>
        <span className="text-xs font-bold font-mono w-4 text-right" style={{ color }}>{clampedValue}</span>
      </div>
    );
  }

  return (
    <div>
      <div className="flex justify-between items-baseline mb-1.5">
        <span className="text-xs text-gray-400 font-medium">{label}</span>
        <span className="text-sm font-black font-mono" style={{ color }}>{clampedValue}<span className="text-gray-600 text-xs">/10</span></span>
      </div>

      {/* Track */}
      <div className="relative h-3 rounded-full" style={{ background: "linear-gradient(to right, #ef4444 0%, #f59e0b 50%, #22c55e 100%)" }}>
        {/* Tick marks */}
        {[0, 25, 50, 75, 100].map((p) => (
          <div key={p} className="absolute top-0 bottom-0 w-px bg-black/20" style={{ left: `${p}%` }} />
        ))}

        {/* Needle */}
        <div
          className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 transition-all duration-700"
          style={{ left: needleLeft }}
        >
          <div className="w-4 h-4 rounded-full border-2 border-white/80 shadow-lg shadow-black/50"
            style={{ background: color }} />
        </div>
      </div>

      {/* Scale labels */}
      <div className="flex justify-between mt-1">
        <span className="text-xs text-red-500/60">Low</span>
        <span className="text-xs text-amber-500/60">Mid</span>
        <span className="text-xs text-green-500/60">High</span>
      </div>
    </div>
  );
}

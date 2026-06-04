// Maps the Tailwind color names stored on EpochConfig.color (e.g. "emerald",
// "cyan") to hex, so RN can paint per-track accents the way the website does.
const PALETTE: Record<string, string> = {
  emerald: "#34d399",
  amber: "#fbbf24",
  blue: "#60a5fa",
  indigo: "#818cf8",
  violet: "#a78bfa",
  cyan: "#22d3ee",
  purple: "#c084fc",
  rose: "#fb7185",
  red: "#f87171",
  fuchsia: "#e879f9",
  orange: "#fb923c",
  teal: "#2dd4bf",
  sky: "#38bdf8",
  green: "#4ade80",
  yellow: "#facc15",
  pink: "#f472b6",
  lime: "#a3e635",
};

export function epochColor(name: string | undefined): string {
  return (name && PALETTE[name]) || "#22d3ee";
}

// Hex + 2-digit alpha suffix, e.g. withAlpha("#22d3ee", 0.1) -> "#22d3ee1a".
export function withAlpha(hex: string, alpha: number): string {
  const a = Math.round(Math.max(0, Math.min(1, alpha)) * 255)
    .toString(16)
    .padStart(2, "0");
  return `${hex}${a}`;
}

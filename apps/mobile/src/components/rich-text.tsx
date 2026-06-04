import { Text, View, type StyleProp, type TextStyle } from "react-native";

// Lightweight inline formatter for stage briefing text. Mirrors the spirit of the
// web RichText: `backtick` spans render as cyan monospace pills, "double-quoted"
// terms render in amber. Apostrophes are intentionally left alone (no single-quote
// rule) so contractions in prose don't get mangled.
const TOKEN = /(`[^`]+`|"[^"]+")/g;

export function RichText({ text, style }: { text: string; style?: StyleProp<TextStyle> }) {
  const parts = text.split(TOKEN);
  return (
    <Text style={style}>
      {parts.map((part, i) => {
        if (part.startsWith("`") && part.endsWith("`")) {
          return <Text key={i} style={codeStyle}>{part.slice(1, -1)}</Text>;
        }
        if (part.startsWith('"') && part.endsWith('"')) {
          return <Text key={i} style={quoteStyle}>{part}</Text>;
        }
        return part;
      })}
    </Text>
  );
}

const isBullet = (l: string) => /^\s*[-•*]\s+/.test(l);
const stripBullet = (l: string) => l.replace(/^\s*[-•*]\s+/, "");

// Renders one body block. Lines starting with "- ", "• " or "* " become bullet
// rows; everything else is prose. Mixed blocks keep their original order.
export function RichBlock({
  text,
  textStyle,
  markerColor = "#22d3ee",
}: {
  text: string;
  textStyle?: StyleProp<TextStyle>;
  markerColor?: string;
}) {
  const lines = text.split("\n").filter((l) => l.trim().length > 0);
  const segments: { type: "p" | "ul"; lines: string[] }[] = [];
  for (const line of lines) {
    const type = isBullet(line) ? "ul" : "p";
    const last = segments[segments.length - 1];
    if (last && last.type === type) last.lines.push(line);
    else segments.push({ type, lines: [line] });
  }

  if (!segments.some((s) => s.type === "ul")) {
    return <RichText text={text.replace(/\n+/g, " ")} style={textStyle} />;
  }

  return (
    <View style={{ gap: 6 }}>
      {segments.map((seg, i) =>
        seg.type === "ul" ? (
          <View key={i} style={{ gap: 6 }}>
            {seg.lines.map((l, j) => (
              <View key={j} style={{ flexDirection: "row", gap: 8 }}>
                <Text style={[{ color: markerColor }, textStyle]}>•</Text>
                <RichText text={stripBullet(l)} style={[{ flex: 1 }, textStyle]} />
              </View>
            ))}
          </View>
        ) : (
          <RichText key={i} text={seg.lines.join(" ")} style={textStyle} />
        )
      )}
    </View>
  );
}

const codeStyle: TextStyle = {
  fontFamily: "monospace",
  color: "#67e8f9",
  backgroundColor: "rgba(34,211,238,0.1)",
  fontSize: 13,
};

const quoteStyle: TextStyle = { color: "#fbbf24" };

import { Linking, Pressable, StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import type { StageConfig } from "@kryptos/core/types";
import { RichText, RichBlock } from "./rich-text";

type Theme = {
  flowLabel: string; flowIcon: string;
  techLabel: string; techIcon: string;
  incidentLabel: string; incidentIcon: string;
  incidentColor: string; badge: string;
};

const THEMES: Record<string, Theme> = {
  cybersecurity: { flowLabel: "Attack Chain", flowIcon: "⚔️", techLabel: "Technical Deep-Dive", techIcon: "🔬", incidentLabel: "Real-World Incident", incidentIcon: "🚨", incidentColor: "#f87171", badge: "CONFIRMED" },
  ai: { flowLabel: "Attack Chain", flowIcon: "⚔️", techLabel: "Technical Deep-Dive", techIcon: "🔬", incidentLabel: "Real-World Incident", incidentIcon: "🚨", incidentColor: "#f87171", badge: "CONFIRMED" },
  owasp: { flowLabel: "Attack Chain", flowIcon: "⚔️", techLabel: "Technical Deep-Dive", techIcon: "🔬", incidentLabel: "Real-World Incident", incidentIcon: "🚨", incidentColor: "#f87171", badge: "CONFIRMED" },
  sports: { flowLabel: "How It Works", flowIcon: "⚾", techLabel: "Rules & Mechanics", techIcon: "📐", incidentLabel: "Historic Moment", incidentIcon: "🏆", incidentColor: "#fbbf24", badge: "HISTORIC" },
  arts: { flowLabel: "Step by Step", flowIcon: "✂️", techLabel: "Technique & Process", techIcon: "🎨", incidentLabel: "Cultural Context", incidentIcon: "📖", incidentColor: "#c4b5fd", badge: "SPOTLIGHT" },
  driving: { flowLabel: "The Process", flowIcon: "🛣️", techLabel: "Rules & Regulations", techIcon: "📋", incidentLabel: "Real-World Scenario", incidentIcon: "🚗", incidentColor: "#93c5fd", badge: "SCENARIO" },
  health: { flowLabel: "How It Works", flowIcon: "🩺", techLabel: "Clinical Deep-Dive", techIcon: "🧬", incidentLabel: "Case Study", incidentIcon: "📋", incidentColor: "#5eead4", badge: "CASE STUDY" },
};

const DEFAULT_THEME: Theme = { flowLabel: "Overview Flow", flowIcon: "🔄", techLabel: "Technical", techIcon: "🔍", incidentLabel: "Spotlight", incidentIcon: "📖", incidentColor: "#a5b4fc", badge: "SPOTLIGHT" };

const CATEGORY_LABEL: Record<string, string> = {
  cybersecurity: "Cybersecurity", ai: "AI Security", owasp: "OWASP",
  arts: "Arts & Craft", driving: "Driving", health: "Health", sports: "Sports",
};

function SectionHeader({ icon, label, color }: { icon: string; label: string; color: string }) {
  return (
    <View style={s.sectionHead}>
      <Text style={{ fontSize: 15 }}>{icon}</Text>
      <Text style={[s.sectionLabel, { color }]}>{label.toUpperCase()}</Text>
      <View style={[s.sectionRule, { backgroundColor: color }]} />
    </View>
  );
}

function isCommentLine(line: string): boolean {
  const t = line.trimStart();
  return t.startsWith("#") || t.startsWith("//") || t.startsWith("/*") || t.startsWith("*") || t.startsWith("--");
}

export default function StageBriefing({
  stage, onQuiz, onCtf, onBack,
}: {
  stage: StageConfig;
  onQuiz: () => void;
  onCtf?: () => void;
  onBack?: () => void;
}) {
  const insets = useSafeAreaInsets();
  const { info } = stage;
  const theme = THEMES[stage.category] ?? DEFAULT_THEME;
  const cvss = stage.cvssScore;
  const cvssColor = cvss === undefined ? "#9ca3af" : cvss >= 9 ? "#f87171" : cvss >= 7 ? "#fb923c" : "#facc15";

  return (
    <View style={{ paddingBottom: 48 }}>
      {/* Gradient hero */}
      <LinearGradient
        colors={["#0e2230", "#141a3a", "#1a1430"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={[s.hero, { paddingTop: insets.top + 12 }]}
      >
        <View style={[s.glow, s.glowCyan]} />
        <View style={[s.glow, s.glowViolet]} />

        {onBack && (
          <Pressable onPress={onBack} hitSlop={10} style={s.back}>
            <Text style={s.backText}>‹ Back</Text>
          </Pressable>
        )}

        <View style={s.wonder}>
          <Text style={{ fontSize: 34 }}>{stage.wonder.emoji}</Text>
          <View style={{ flex: 1 }}>
            <Text style={s.wonderName}>{stage.wonder.name}</Text>
            <Text style={s.wonderMeta}>📍 {stage.wonder.location}  ·  🕰 {stage.wonder.era}</Text>
          </View>
        </View>

        <View style={s.pills}>
          <Pill text={CATEGORY_LABEL[stage.category] ?? stage.category} color="#22d3ee" />
          {stage.owaspRef ? <Pill text={stage.owaspRef} color="#fb923c" mono /> : null}
          {stage.cveId ? <Pill text={stage.cveId} color="#f87171" mono /> : null}
          <Pill text={`Stage ${stage.order}`} color="#9ca3af" />
        </View>

        <Text style={s.title}>{stage.title}</Text>
        <RichText text={info.tagline} style={s.tagline} />

        {cvss !== undefined && (
          <View style={s.cvssCard}>
            <View style={{ alignItems: "center" }}>
              <Text style={[s.cvssValue, { color: cvssColor }]}>{cvss.toFixed(1)}</Text>
              <Text style={s.cvssLabel}>CVSS</Text>
            </View>
            <View style={{ flex: 1, gap: 6 }}>
              <Text style={[s.cvssSeverity, { color: cvssColor }]}>
                {cvss >= 9 ? "CRITICAL" : cvss >= 7 ? "HIGH" : cvss >= 4 ? "MEDIUM" : "LOW"}
              </Text>
              <View style={s.cvssTrack}>
                <View style={[s.cvssFill, { width: `${(cvss / 10) * 100}%`, backgroundColor: cvssColor }]} />
              </View>
            </View>
          </View>
        )}
      </LinearGradient>

      {/* Body */}
      <View style={s.body}>
        {/* Overview */}
        <View style={{ gap: 12 }}>
          <SectionHeader icon="📡" label="Overview" color="#22d3ee" />
          {info.overview.map((para, i) => (
            <RichBlock key={i} text={para} textStyle={i === 0 ? s.overviewLead : s.bodyText} markerColor="#22d3ee" />
          ))}
        </View>

        {/* Attack flow / process */}
        {info.diagram?.nodes?.length ? (
          <View style={{ gap: 12 }}>
            <SectionHeader icon={theme.flowIcon} label={theme.flowLabel} color="#fb7185" />
            <View style={s.flowWrap}>
              {info.diagram.nodes.map((node, i) => (
                <View key={i} style={s.flowRow}>
                  <View style={[s.flowNode, { borderLeftColor: nodeColor(node.type) }]}>
                    <Text style={s.flowLabel}>{node.label}</Text>
                    {node.sub ? <Text style={s.flowSub}>{node.sub}</Text> : null}
                  </View>
                  {i < info.diagram.nodes.length - 1 ? <Text style={s.flowArrow}>↓</Text> : null}
                </View>
              ))}
            </View>
          </View>
        ) : null}

        {/* Technical deep-dive */}
        <View style={{ gap: 12 }}>
          <SectionHeader icon={theme.techIcon} label={theme.techLabel} color="#34d399" />
          <View style={s.techCard}>
            <View style={s.techHead}>
              <RichText text={info.technical.title} style={s.techTitle} />
            </View>
            <View style={{ padding: 14, gap: 10 }}>
              {info.technical.body.map((para, i) => (
                <RichBlock key={i} text={para} textStyle={s.bodyText} markerColor="#34d399" />
              ))}
            </View>
            {info.technical.codeExample && (
              <View style={{ paddingHorizontal: 14, paddingBottom: 14, gap: 6 }}>
                <Text style={s.codeLabel}>▸ {info.technical.codeExample.label.toUpperCase()}</Text>
                <View style={s.codeBlock}>
                  {info.technical.codeExample.code.split("\n").map((line, i) => (
                    <Text key={i} style={[s.codeLine, { color: isCommentLine(line) ? "rgba(134,239,172,0.38)" : "#86efac" }]}>
                      {line || " "}
                    </Text>
                  ))}
                </View>
              </View>
            )}
          </View>
        </View>

        {/* Real-world incident */}
        <View style={{ gap: 12 }}>
          <SectionHeader icon={theme.incidentIcon} label={theme.incidentLabel} color={theme.incidentColor} />
          <View style={[s.incidentCard, { borderColor: theme.incidentColor + "40" }]}>
            <View style={[s.incidentHead, { backgroundColor: theme.incidentColor + "1a" }]}>
              <RichText text={info.incident.title} style={[s.incidentTitle, { color: theme.incidentColor }]} />
              <Text style={[s.incidentBadge, { color: theme.incidentColor }]}>{theme.badge}</Text>
            </View>
            <View style={s.incidentMeta}>
              <Text style={s.metaText}>📅 {info.incident.when}</Text>
              <Text style={s.metaText}>📍 {info.incident.where}</Text>
            </View>
            <View style={[s.incidentImpact, { backgroundColor: theme.incidentColor + "0d" }]}>
              <Text style={s.impactLabel}>IMPACT</Text>
              <RichText text={info.incident.impact} style={[s.impactText, { color: theme.incidentColor }]} />
            </View>
            <View style={{ padding: 14, gap: 10 }}>
              {info.incident.body.map((para, i) => (
                <RichBlock key={i} text={para} textStyle={s.bodyText} markerColor={theme.incidentColor} />
              ))}
            </View>
          </View>
        </View>

        {/* Timeline */}
        {info.timeline?.length ? (
          <View style={{ gap: 12 }}>
            <SectionHeader icon="🕰" label="Timeline" color="#fbbf24" />
            <View style={{ gap: 14 }}>
              {info.timeline.map((entry, i) => (
                <View key={i} style={s.timelineRow}>
                  <View style={[s.timelineDot, entry.highlight && s.timelineDotOn]} />
                  <View style={{ flex: 1 }}>
                    <Text style={[s.timelineYear, entry.highlight && s.timelineYearOn]}>{entry.year}</Text>
                    <RichText text={entry.event} style={[s.bodyText, entry.highlight && { color: "#fff" }]} />
                  </View>
                </View>
              ))}
            </View>
          </View>
        ) : null}

        {/* Key takeaways */}
        <View style={{ gap: 12 }}>
          <SectionHeader icon="🎯" label="Key Takeaways" color="#a78bfa" />
          <View style={{ gap: 10 }}>
            {info.keyTakeaways.map((item, i) => (
              <View key={i} style={s.takeaway}>
                <View style={s.takeawayNum}><Text style={s.takeawayNumText}>{i + 1}</Text></View>
                <RichText text={item} style={[s.bodyText, { flex: 1, color: "#e5e7eb" }]} />
              </View>
            ))}
          </View>
        </View>

        {/* References */}
        {info.references?.length ? (
          <View style={{ gap: 12 }}>
            <SectionHeader icon="📚" label="References" color="#38bdf8" />
            <View style={{ gap: 8 }}>
              {info.references.map((ref, i) => (
                <Pressable key={i} style={s.refRow} onPress={() => Linking.openURL(ref.url).catch(() => {})}>
                  <Text style={s.refNum}>{i + 1}</Text>
                  <Text style={s.refTitle} numberOfLines={2}>{ref.title}</Text>
                  <Text style={s.refArrow}>↗</Text>
                </Pressable>
              ))}
            </View>
          </View>
        ) : null}

        {/* CTA */}
        <View style={s.cta}>
          <Text style={s.ctaTitle}>Ready for the challenge?</Text>
          {onCtf ? (
            <>
              <Text style={s.ctaSub}>Choose how you want to clear this stage.</Text>
              <Pressable style={[s.choice, { borderColor: "#22c55e66", backgroundColor: "rgba(34,197,94,0.06)" }]} onPress={onCtf}>
                <Text style={{ fontSize: 26 }}>🚩</Text>
                <Text style={s.choiceTitle}>Run the CTF</Text>
                <Text style={s.choiceSub}>Work the terminal and capture the flag.</Text>
                <Text style={[s.choiceTag, { color: "#4ade80", borderColor: "#22c55e4d", backgroundColor: "rgba(34,197,94,0.1)" }]}>
                  ✓ Full clear · +{stage.xp} 🪙
                </Text>
              </Pressable>
              <Pressable style={[s.choice, { borderColor: "#f59e0b66", backgroundColor: "rgba(245,158,11,0.06)" }]} onPress={onQuiz}>
                <Text style={{ fontSize: 26 }}>📝</Text>
                <Text style={s.choiceTitle}>Take the Quiz</Text>
                <Text style={s.choiceSub}>5 quick questions to test what you know.</Text>
                <Text style={[s.choiceTag, { color: "#fbbf24", borderColor: "#f59e0b4d", backgroundColor: "rgba(245,158,11,0.1)" }]}>
                  ◗ Half clear
                </Text>
              </Pressable>
            </>
          ) : (
            <>
              <Text style={s.ctaSub}>Answer the quiz to clear this stage and earn its 🪙.</Text>
              <Pressable style={s.primaryBtn} onPress={onQuiz}>
                <Text style={s.primaryText}>Start Quiz →</Text>
              </Pressable>
            </>
          )}
        </View>
      </View>
    </View>
  );
}

function Pill({ text, color, mono }: { text: string; color: string; mono?: boolean }) {
  return (
    <View style={[s.pill, { borderColor: color + "4d", backgroundColor: color + "1a" }]}>
      <Text style={[s.pillText, { color }, mono && { fontFamily: "monospace" }]}>{text}</Text>
    </View>
  );
}

function nodeColor(type: string): string {
  switch (type) {
    case "attacker": return "#f87171";
    case "victim": return "#fb923c";
    case "result": return "#4ade80";
    default: return "#22d3ee";
  }
}

const s = StyleSheet.create({
  hero: { paddingHorizontal: 16, paddingBottom: 20, overflow: "hidden", borderBottomWidth: 1, borderBottomColor: "rgba(255,255,255,0.06)", gap: 14 },
  glow: { position: "absolute", borderRadius: 999 },
  glowCyan: { top: -90, right: -50, width: 260, height: 260, backgroundColor: "rgba(34,211,238,0.10)" },
  glowViolet: { bottom: -110, left: -40, width: 240, height: 240, backgroundColor: "rgba(167,139,250,0.10)" },
  back: { alignSelf: "flex-start", marginBottom: -2 },
  backText: { color: "#9ca3af", fontSize: 14 },
  body: { paddingHorizontal: 16, paddingTop: 26, gap: 28 },

  wonder: { flexDirection: "row", alignItems: "center", gap: 12, padding: 12, borderRadius: 12, backgroundColor: "rgba(0,0,0,0.25)", borderColor: "rgba(255,255,255,0.1)", borderWidth: 1 },
  wonderName: { color: "#fff", fontWeight: "700", fontSize: 14 },
  wonderMeta: { color: "#9ca3af", fontSize: 12, marginTop: 2 },
  pills: { flexDirection: "row", flexWrap: "wrap", gap: 8 },
  pill: { borderWidth: 1, borderRadius: 999, paddingHorizontal: 10, paddingVertical: 4 },
  pillText: { fontSize: 11, fontWeight: "600" },
  title: { color: "#fff", fontSize: 26, fontWeight: "900", lineHeight: 31 },
  tagline: { color: "#cbd5e1", fontSize: 16, lineHeight: 23 },
  cvssCard: { flexDirection: "row", alignItems: "center", gap: 16, padding: 14, borderRadius: 12, backgroundColor: "rgba(0,0,0,0.25)", borderColor: "rgba(255,255,255,0.1)", borderWidth: 1 },
  cvssValue: { fontSize: 28, fontWeight: "900", fontFamily: "monospace" },
  cvssLabel: { color: "#9ca3af", fontSize: 10, letterSpacing: 1, marginTop: 2 },
  cvssSeverity: { fontSize: 11, fontWeight: "700", letterSpacing: 1 },
  cvssTrack: { height: 8, borderRadius: 999, backgroundColor: "rgba(255,255,255,0.1)", overflow: "hidden" },
  cvssFill: { height: 8, borderRadius: 999 },

  sectionHead: { flexDirection: "row", alignItems: "center", gap: 8 },
  sectionLabel: { fontSize: 11, fontWeight: "800", letterSpacing: 2 },
  sectionRule: { flex: 1, height: 1, opacity: 0.2 },

  overviewLead: { color: "#d1d5db", fontSize: 15, lineHeight: 23 },
  bodyText: { color: "#9ca3af", fontSize: 14, lineHeight: 21 },

  flowWrap: { backgroundColor: "rgba(255,255,255,0.02)", borderColor: "rgba(255,255,255,0.08)", borderWidth: 1, borderRadius: 12, padding: 14, gap: 4 },
  flowRow: { alignItems: "stretch" },
  flowNode: { borderLeftWidth: 3, paddingLeft: 12, paddingVertical: 6, backgroundColor: "rgba(255,255,255,0.02)", borderRadius: 6 },
  flowLabel: { color: "#e5e7eb", fontSize: 14, fontWeight: "600" },
  flowSub: { color: "#6b7280", fontSize: 12, marginTop: 1 },
  flowArrow: { color: "#4b5563", textAlign: "center", fontSize: 14, paddingVertical: 2 },

  techCard: { borderColor: "rgba(52,211,153,0.18)", borderWidth: 1, borderRadius: 12, overflow: "hidden" },
  techHead: { paddingHorizontal: 14, paddingVertical: 12, backgroundColor: "rgba(52,211,153,0.06)", borderBottomColor: "rgba(52,211,153,0.18)", borderBottomWidth: 1 },
  techTitle: { color: "#fff", fontWeight: "700", fontSize: 15 },
  codeLabel: { color: "#34d399", fontSize: 10, fontFamily: "monospace", letterSpacing: 1 },
  codeBlock: { backgroundColor: "rgba(0,0,0,0.7)", borderColor: "rgba(52,211,153,0.2)", borderWidth: 1, borderRadius: 8, padding: 12 },
  codeLine: { fontFamily: "monospace", fontSize: 12, lineHeight: 18 },

  incidentCard: { borderWidth: 1, borderRadius: 12, overflow: "hidden" },
  incidentHead: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: 8, paddingHorizontal: 14, paddingVertical: 11 },
  incidentTitle: { fontWeight: "700", fontSize: 14, flex: 1 },
  incidentBadge: { fontSize: 10, fontFamily: "monospace", fontWeight: "700" },
  incidentMeta: { flexDirection: "row", flexWrap: "wrap", gap: 16, paddingHorizontal: 14, paddingVertical: 10, backgroundColor: "rgba(0,0,0,0.3)" },
  metaText: { color: "#9ca3af", fontSize: 12 },
  incidentImpact: { paddingHorizontal: 14, paddingVertical: 12 },
  impactLabel: { color: "#6b7280", fontSize: 10, letterSpacing: 2, fontWeight: "700", marginBottom: 3 },
  impactText: { fontWeight: "600", fontSize: 14, lineHeight: 20 },

  timelineRow: { flexDirection: "row", gap: 12, alignItems: "flex-start" },
  timelineDot: { width: 12, height: 12, borderRadius: 6, marginTop: 3, borderWidth: 2, borderColor: "#4b5563", backgroundColor: "#1f2937" },
  timelineDotOn: { borderColor: "#fbbf24", backgroundColor: "#f59e0b" },
  timelineYear: { color: "#6b7280", fontFamily: "monospace", fontWeight: "700", fontSize: 12, marginBottom: 2 },
  timelineYearOn: { color: "#fcd34d" },

  takeaway: { flexDirection: "row", gap: 12, alignItems: "flex-start", padding: 12, borderRadius: 12, backgroundColor: "rgba(139,92,246,0.05)", borderColor: "rgba(139,92,246,0.15)", borderWidth: 1 },
  takeawayNum: { width: 24, height: 24, borderRadius: 12, alignItems: "center", justifyContent: "center", backgroundColor: "#7c3aed" },
  takeawayNumText: { color: "#fff", fontWeight: "900", fontSize: 12 },

  refRow: { flexDirection: "row", alignItems: "center", gap: 12, paddingHorizontal: 12, paddingVertical: 10, borderRadius: 10, backgroundColor: "rgba(255,255,255,0.02)", borderColor: "rgba(255,255,255,0.08)", borderWidth: 1 },
  refNum: { color: "#6b7280", fontFamily: "monospace", fontSize: 12, width: 18, textAlign: "center" },
  refTitle: { color: "#38bdf8", fontSize: 13, flex: 1 },
  refArrow: { color: "#6b7280", fontSize: 12 },

  cta: { borderRadius: 16, borderColor: "rgba(34,211,238,0.3)", borderWidth: 1, backgroundColor: "rgba(34,211,238,0.05)", padding: 18, gap: 12 },
  ctaTitle: { color: "#fff", fontWeight: "800", fontSize: 18 },
  ctaSub: { color: "#9ca3af", fontSize: 13, marginTop: -4 },
  primaryBtn: { backgroundColor: "#22d3ee", borderRadius: 12, paddingVertical: 15, alignItems: "center" },
  primaryText: { color: "#000", fontWeight: "900", fontSize: 15 },
  choice: { borderWidth: 2, borderRadius: 14, padding: 16, gap: 4 },
  choiceTitle: { color: "#fff", fontWeight: "800", fontSize: 16, marginTop: 4 },
  choiceSub: { color: "#9ca3af", fontSize: 12 },
  choiceTag: { alignSelf: "flex-start", fontSize: 12, fontFamily: "monospace", borderWidth: 1, borderRadius: 999, paddingHorizontal: 10, paddingVertical: 4, marginTop: 8, overflow: "hidden" },
});

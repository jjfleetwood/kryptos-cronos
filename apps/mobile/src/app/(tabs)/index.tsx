import { useEffect, useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { stagesMeta, epochs } from "@kryptos/core/stages-meta";
import { api } from "@/lib/api";
import { epochColor, withAlpha } from "@/constants/epoch-colors";

export default function Stages() {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const [completed, setCompleted] = useState<Set<string>>(new Set());
  const [coins, setCoins] = useState(0);
  const [streak, setStreak] = useState(0);

  useEffect(() => {
    api.getProgress()
      .then((p) => {
        if (!p) return;
        setCompleted(new Set(p.completedStages));
        setCoins(p.coins ?? 0);
        setStreak(p.streak ?? 0);
      })
      .catch(() => {});
  }, []);

  const totalStages = stagesMeta.length;
  const doneCount = completed.size;
  const pct = totalStages ? Math.round((doneCount / totalStages) * 100) : 0;

  return (
    <View style={s.root}>
      <ScrollView contentContainerStyle={{ paddingBottom: 36 }}>
        {/* Hero */}
        <LinearGradient
          colors={["#0e2230", "#141a3a", "#1a1430"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={[s.hero, { paddingTop: insets.top + 18 }]}
        >
          <View style={[s.glow, s.glowCyan]} />
          <View style={[s.glow, s.glowViolet]} />
          <Text style={s.heroEyebrow}>KRYPTÓS CRONOS</Text>
          <Text style={s.heroTitle}>Agent Dashboard</Text>
          <Text style={s.heroSub}>Continue your mission, one stage at a time.</Text>

          <View style={s.statsRow}>
            <Stat icon="✅" value={`${doneCount}/${totalStages}`} label="Stages" />
            <Stat icon="🪙" value={String(coins)} label="Coins" />
            <Stat icon="🔥" value={String(streak)} label="Day streak" />
          </View>

          <View style={s.heroBarTrack}>
            <View style={[s.heroBarFill, { width: `${pct}%` }]} />
          </View>
          <Text style={s.heroPct}>{pct}% complete</Text>
        </LinearGradient>

        {/* Epoch cards */}
        <View style={{ padding: 16, gap: 16 }}>
          {epochs.map((epoch) => {
            const stages = stagesMeta
              .filter((st) => st.epochId === epoch.id)
              .sort((a, b) => a.order - b.order);
            if (stages.length === 0) return null;
            const done = stages.filter((st) => completed.has(st.id)).length;
            const color = epochColor(epoch.color);
            const epochPct = Math.round((done / stages.length) * 100);

            return (
              <View key={epoch.id} style={[s.card, { borderColor: withAlpha(color, 0.35) }]}>
                <View style={[s.cardAccent, { backgroundColor: color }]} />
                <View style={s.cardHead}>
                  <View style={[s.emojiBadge, { backgroundColor: withAlpha(color, 0.14), borderColor: withAlpha(color, 0.4) }]}>
                    <Text style={{ fontSize: 20 }}>{epoch.emoji}</Text>
                  </View>
                  <View style={{ flex: 1 }}>
                    <Text style={s.epochTitle}>{epoch.name}</Text>
                    <Text style={[s.epochMeta, { color }]}>{done}/{stages.length} complete · {epochPct}%</Text>
                  </View>
                </View>

                <View style={s.barTrack}>
                  <View style={[s.barFill, { width: `${epochPct}%`, backgroundColor: color }]} />
                </View>

                <View style={{ gap: 7, marginTop: 12 }}>
                  {stages.map((st) => {
                    const isDone = completed.has(st.id);
                    return (
                      <Pressable key={st.id} style={s.stage} onPress={() => router.push(`/stage/${st.id}`)}>
                        <Text style={[s.check, isDone && { color }]}>{isDone ? "●" : "○"}</Text>
                        <Text style={s.stageTitle} numberOfLines={1}>{st.title}</Text>
                        {st.challengeType === "ctf" && <Text style={s.ctfTag}>🚩</Text>}
                        <Text style={[s.xp, { color }]}>{st.xp} XP</Text>
                      </Pressable>
                    );
                  })}
                </View>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
}

function Stat({ icon, value, label }: { icon: string; value: string; label: string }) {
  return (
    <View style={s.stat}>
      <Text style={s.statIcon}>{icon}</Text>
      <Text style={s.statValue}>{value}</Text>
      <Text style={s.statLabel}>{label}</Text>
    </View>
  );
}

const s = StyleSheet.create({
  root: { flex: 1, backgroundColor: "#0d1117" },

  hero: { paddingHorizontal: 20, paddingBottom: 22, overflow: "hidden", borderBottomWidth: 1, borderBottomColor: "rgba(255,255,255,0.06)" },
  glow: { position: "absolute", borderRadius: 999 },
  glowCyan: { top: -90, right: -50, width: 260, height: 260, backgroundColor: "rgba(34,211,238,0.12)" },
  glowViolet: { bottom: -110, left: -40, width: 240, height: 240, backgroundColor: "rgba(167,139,250,0.12)" },
  heroEyebrow: { color: "#67e8f9", fontSize: 11, fontWeight: "800", letterSpacing: 2 },
  heroTitle: { color: "#fff", fontSize: 28, fontWeight: "900", marginTop: 6 },
  heroSub: { color: "#9ca3af", fontSize: 13, marginTop: 4 },

  statsRow: { flexDirection: "row", gap: 10, marginTop: 18 },
  stat: { flex: 1, backgroundColor: "rgba(0,0,0,0.3)", borderColor: "rgba(255,255,255,0.1)", borderWidth: 1, borderRadius: 12, paddingVertical: 12, alignItems: "center", gap: 2 },
  statIcon: { fontSize: 16 },
  statValue: { color: "#fff", fontSize: 17, fontWeight: "900" },
  statLabel: { color: "#6b7280", fontSize: 10, letterSpacing: 0.5 },

  heroBarTrack: { height: 7, borderRadius: 999, backgroundColor: "rgba(255,255,255,0.08)", marginTop: 18, overflow: "hidden" },
  heroBarFill: { height: 7, borderRadius: 999, backgroundColor: "#22d3ee" },
  heroPct: { color: "#9ca3af", fontSize: 11, marginTop: 6, textAlign: "right" },

  card: { backgroundColor: "#11161f", borderWidth: 1, borderRadius: 16, padding: 16, paddingLeft: 18, overflow: "hidden" },
  cardAccent: { position: "absolute", left: 0, top: 0, bottom: 0, width: 4 },
  cardHead: { flexDirection: "row", alignItems: "center", gap: 12 },
  emojiBadge: { width: 42, height: 42, borderRadius: 12, borderWidth: 1, alignItems: "center", justifyContent: "center" },
  epochTitle: { color: "#fff", fontSize: 16, fontWeight: "800" },
  epochMeta: { fontSize: 12, fontWeight: "600", marginTop: 2 },

  barTrack: { height: 5, borderRadius: 999, backgroundColor: "rgba(255,255,255,0.07)", marginTop: 14, overflow: "hidden" },
  barFill: { height: 5, borderRadius: 999 },

  stage: {
    flexDirection: "row", alignItems: "center", gap: 10,
    backgroundColor: "rgba(255,255,255,0.025)", borderColor: "rgba(255,255,255,0.06)", borderWidth: 1,
    borderRadius: 10, paddingHorizontal: 12, paddingVertical: 11,
  },
  check: { fontSize: 13, color: "#5b6577", width: 14 },
  stageTitle: { color: "#d1d5db", flex: 1, fontSize: 13.5 },
  ctfTag: { fontSize: 12 },
  xp: { fontSize: 12, fontWeight: "700" },
});

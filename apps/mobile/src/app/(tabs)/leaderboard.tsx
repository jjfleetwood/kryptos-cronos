import { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { api } from "@/lib/api";
import type { LeaderboardPlayer, LeaderboardPeriod } from "@kryptos/api-client";

const PERIODS: { id: LeaderboardPeriod; label: string }[] = [
  { id: "alltime", label: "All-time" },
  { id: "weekly", label: "Weekly" },
  { id: "daily", label: "Daily" },
];

const MEDAL: Record<number, { color: string; glyph: string }> = {
  0: { color: "#fbbf24", glyph: "🥇" },
  1: { color: "#cbd5e1", glyph: "🥈" },
  2: { color: "#fb923c", glyph: "🥉" },
};

export default function Leaderboard() {
  const insets = useSafeAreaInsets();
  const [period, setPeriod] = useState<LeaderboardPeriod>("alltime");
  const [players, setPlayers] = useState<LeaderboardPlayer[]>([]);
  const [loadedPeriod, setLoadedPeriod] = useState<LeaderboardPeriod | null>(null);

  useEffect(() => {
    let active = true;
    api.getLeaderboard(period)
      .then((p) => { if (active) { setPlayers(p); setLoadedPeriod(period); } })
      .catch(() => { if (active) { setPlayers([]); setLoadedPeriod(period); } });
    return () => { active = false; };
  }, [period]);

  const loading = loadedPeriod !== period;

  const header = (
    <View>
      <LinearGradient
        colors={["#2a2410", "#141a3a", "#1a1430"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={[s.hero, { paddingTop: insets.top + 18 }]}
      >
        <View style={[s.glow, s.glowGold]} />
        <View style={[s.glow, s.glowViolet]} />
        <Text style={s.heroEyebrow}>🏆 RANKINGS</Text>
        <Text style={s.heroTitle}>Leaderboard</Text>
        <Text style={s.heroSub}>Top agents across the network.</Text>

        <View style={s.toggle}>
          {PERIODS.map((p) => (
            <Pressable key={p.id} style={[s.toggleBtn, period === p.id && s.toggleBtnActive]} onPress={() => setPeriod(p.id)}>
              <Text style={[s.toggleText, period === p.id && s.toggleTextActive]}>{p.label}</Text>
            </Pressable>
          ))}
        </View>
      </LinearGradient>
      {!loading && players.length === 0 && <Text style={s.empty}>No rankings yet — be the first.</Text>}
    </View>
  );

  if (loading) {
    return (
      <View style={s.root}>
        {header}
        <View style={s.loading}><ActivityIndicator color="#22d3ee" /></View>
      </View>
    );
  }

  return (
    <FlatList
      style={s.root}
      ListHeaderComponent={header}
      contentContainerStyle={{ paddingBottom: 32 }}
      data={players}
      keyExtractor={(p) => p.username}
      renderItem={({ item, index }) => {
        const medal = MEDAL[index];
        return (
          <View style={[s.row, medal && { borderColor: medal.color + "55", backgroundColor: medal.color + "0d" }]}>
            <View style={s.rankWrap}>
              {medal ? <Text style={s.medal}>{medal.glyph}</Text> : <Text style={s.rank}>{index + 1}</Text>}
            </View>
            <View style={{ flex: 1 }}>
              <Text style={[s.name, medal && { color: medal.color }]} numberOfLines={1}>{item.username}</Text>
              <Text style={s.sub}>{item.stages} stages · {item.badges} badges</Text>
            </View>
            <Text style={s.coins}>{item.coins} 🪙</Text>
          </View>
        );
      }}
    />
  );
}

const s = StyleSheet.create({
  root: { flex: 1, backgroundColor: "#0d1117" },
  loading: { paddingTop: 60, alignItems: "center" },

  hero: { paddingHorizontal: 20, paddingBottom: 18, overflow: "hidden", borderBottomWidth: 1, borderBottomColor: "rgba(255,255,255,0.06)" },
  glow: { position: "absolute", borderRadius: 999 },
  glowGold: { top: -90, right: -40, width: 240, height: 240, backgroundColor: "rgba(251,191,36,0.12)" },
  glowViolet: { bottom: -110, left: -50, width: 240, height: 240, backgroundColor: "rgba(167,139,250,0.12)" },
  heroEyebrow: { color: "#fcd34d", fontSize: 11, fontWeight: "800", letterSpacing: 2 },
  heroTitle: { color: "#fff", fontSize: 28, fontWeight: "900", marginTop: 6 },
  heroSub: { color: "#9ca3af", fontSize: 13, marginTop: 4 },

  toggle: { flexDirection: "row", gap: 8, marginTop: 18, backgroundColor: "rgba(0,0,0,0.25)", borderRadius: 12, padding: 4 },
  toggleBtn: { flex: 1, paddingVertical: 9, borderRadius: 9, alignItems: "center" },
  toggleBtnActive: { backgroundColor: "rgba(34,211,238,0.15)" },
  toggleText: { color: "#6b7280", fontWeight: "700", fontSize: 13 },
  toggleTextActive: { color: "#22d3ee" },

  empty: { color: "#5b6577", textAlign: "center", marginTop: 40 },
  row: {
    flexDirection: "row", alignItems: "center", gap: 12,
    backgroundColor: "#11161f", borderColor: "#222a37", borderWidth: 1,
    borderRadius: 12, paddingHorizontal: 14, paddingVertical: 12, marginBottom: 8,
    marginHorizontal: 16,
  },
  rankWrap: { width: 30, alignItems: "center" },
  rank: { color: "#6b7280", fontWeight: "800", fontSize: 15 },
  medal: { fontSize: 20 },
  name: { color: "#d1d5db", fontSize: 15, fontWeight: "600" },
  sub: { color: "#5b6577", fontSize: 11, marginTop: 1 },
  coins: { color: "#fbbf24", fontWeight: "800", fontSize: 14 },
});

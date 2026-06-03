import { useEffect, useState } from "react";
import { ActivityIndicator, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { useAuth } from "@/lib/auth";
import { api } from "@/lib/api";
import type { Me, Progress } from "@kryptos/api-client";

function Stat({ label, value }: { label: string; value: number }) {
  return (
    <View style={s.stat}>
      <Text style={s.statValue}>{value}</Text>
      <Text style={s.statLabel}>{label}</Text>
    </View>
  );
}

export default function Profile() {
  const { signOut } = useAuth();
  const [me, setMe] = useState<Me | null>(null);
  const [progress, setProgress] = useState<Progress | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      api.getMe().then(setMe).catch(() => {}),
      api.getProgress().then(setProgress).catch(() => {}),
    ]).finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <View style={s.center}><ActivityIndicator color="#22d3ee" /></View>;
  }

  return (
    <ScrollView style={s.root} contentContainerStyle={{ padding: 20 }}>
      <Text style={s.name}>{me?.username ?? "—"}</Text>
      <View style={s.tierBadge}>
        <Text style={s.tierText}>{(me?.tier ?? "free").toUpperCase()}</Text>
      </View>

      <View style={s.statsRow}>
        <Stat label="Coins" value={progress?.coins ?? 0} />
        <Stat label="Stages" value={progress?.completedStages.length ?? 0} />
        <Stat label="Streak" value={progress?.streak ?? 0} />
      </View>

      <Pressable style={s.signout} onPress={signOut}>
        <Text style={s.signoutText}>Sign out</Text>
      </Pressable>
    </ScrollView>
  );
}

const s = StyleSheet.create({
  root: { flex: 1, backgroundColor: "#0d1117" },
  center: { flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: "#0d1117" },
  name: { color: "#fff", fontSize: 26, fontWeight: "900" },
  tierBadge: {
    alignSelf: "flex-start", backgroundColor: "rgba(34,211,238,0.12)",
    borderColor: "rgba(34,211,238,0.3)", borderWidth: 1, borderRadius: 999,
    paddingHorizontal: 12, paddingVertical: 4, marginTop: 8,
  },
  tierText: { color: "#22d3ee", fontWeight: "800", fontSize: 12, letterSpacing: 1 },
  statsRow: { flexDirection: "row", gap: 12, marginTop: 24 },
  stat: {
    flex: 1, backgroundColor: "#161b22", borderColor: "#222a37", borderWidth: 1,
    borderRadius: 12, paddingVertical: 16, alignItems: "center",
  },
  statValue: { color: "#fff", fontSize: 22, fontWeight: "900" },
  statLabel: { color: "#5b6577", fontSize: 11, textTransform: "uppercase", marginTop: 4 },
  signout: {
    marginTop: 32, borderColor: "#3a2330", borderWidth: 1, backgroundColor: "rgba(248,113,113,0.08)",
    borderRadius: 12, paddingVertical: 14, alignItems: "center",
  },
  signoutText: { color: "#f87171", fontWeight: "700" },
});

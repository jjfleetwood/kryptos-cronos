import { useEffect, useState } from "react";
import { ActivityIndicator, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { useAuth } from "@/lib/auth";
import { api } from "@/lib/api";
import type { Me, Progress } from "@kryptos/api-client";

function Stat({ label, value, color = "#fff" }: { label: string; value: number; color?: string }) {
  return (
    <View style={s.stat}>
      <Text style={[s.statValue, { color }]}>{value}</Text>
      <Text style={s.statLabel}>{label}</Text>
    </View>
  );
}

const TIER_COLOR: Record<string, string> = { pro: "#fbbf24", trial: "#22d3ee", free: "#9ca3af" };

export default function Profile() {
  const { signOut } = useAuth();
  const router = useRouter();
  const insets = useSafeAreaInsets();
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

  const tier = me?.tier ?? "free";
  const tierColor = TIER_COLOR[tier] ?? "#9ca3af";
  const initial = (me?.username ?? "?").charAt(0).toUpperCase();
  const isPro = tier === "pro";

  return (
    <View style={s.root}>
      <ScrollView contentContainerStyle={{ paddingBottom: 36 }}>
        {/* Hero */}
        <LinearGradient
          colors={["#0e2230", "#141a3a", "#1a1430"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={[s.hero, { paddingTop: insets.top + 22 }]}
        >
          <View style={[s.glow, s.glowCyan]} />
          <View style={[s.glow, s.glowViolet]} />

          <LinearGradient
            colors={["#22d3ee", "#818cf8"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={s.avatar}
          >
            <Text style={s.avatarText}>{initial}</Text>
          </LinearGradient>

          <Text style={s.name}>{me?.username ?? "—"}</Text>
          {me?.email ? <Text style={s.email}>{me.email}</Text> : null}

          <View style={[s.tierBadge, { backgroundColor: tierColor + "1f", borderColor: tierColor + "59" }]}>
            <Text style={[s.tierText, { color: tierColor }]}>
              {tier.toUpperCase()}
              {tier === "trial" && me?.trialDaysLeft != null ? ` · ${me.trialDaysLeft}d left` : ""}
            </Text>
          </View>
        </LinearGradient>

        <View style={{ padding: 16, gap: 16 }}>
          <View style={s.statsRow}>
            <Stat label="Coins" value={progress?.coins ?? 0} color="#fbbf24" />
            <Stat label="Stages" value={progress?.completedStages.length ?? 0} color="#22d3ee" />
            <Stat label="Badges" value={progress?.badges.length ?? 0} color="#a78bfa" />
            <Stat label="Streak" value={progress?.streak ?? 0} color="#fb923c" />
          </View>

          {!isPro && (
            <Pressable onPress={() => router.push("/upgrade")}>
              <LinearGradient
                colors={["#22d3ee", "#818cf8"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={s.proBtn}
              >
                <Text style={s.proText}>⭐ Upgrade to Kryptós Pro</Text>
              </LinearGradient>
            </Pressable>
          )}

          <Pressable style={s.signout} onPress={signOut}>
            <Text style={s.signoutText}>Sign out</Text>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
}

const s = StyleSheet.create({
  root: { flex: 1, backgroundColor: "#0d1117" },
  center: { flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: "#0d1117" },

  hero: { paddingHorizontal: 20, paddingBottom: 24, alignItems: "center", overflow: "hidden", borderBottomWidth: 1, borderBottomColor: "rgba(255,255,255,0.06)" },
  glow: { position: "absolute", borderRadius: 999 },
  glowCyan: { top: -90, left: -50, width: 240, height: 240, backgroundColor: "rgba(34,211,238,0.12)" },
  glowViolet: { bottom: -110, right: -40, width: 240, height: 240, backgroundColor: "rgba(167,139,250,0.12)" },
  avatar: { width: 76, height: 76, borderRadius: 24, alignItems: "center", justifyContent: "center", marginBottom: 14 },
  avatarText: { color: "#06121a", fontSize: 34, fontWeight: "900" },
  name: { color: "#fff", fontSize: 24, fontWeight: "900" },
  email: { color: "#9ca3af", fontSize: 13, marginTop: 3 },
  tierBadge: { borderWidth: 1, borderRadius: 999, paddingHorizontal: 14, paddingVertical: 5, marginTop: 12 },
  tierText: { fontWeight: "800", fontSize: 12, letterSpacing: 1 },

  statsRow: { flexDirection: "row", gap: 10 },
  stat: { flex: 1, backgroundColor: "#11161f", borderColor: "#222a37", borderWidth: 1, borderRadius: 14, paddingVertical: 16, alignItems: "center", gap: 4 },
  statValue: { fontSize: 20, fontWeight: "900" },
  statLabel: { color: "#5b6577", fontSize: 10, textTransform: "uppercase", letterSpacing: 0.5 },

  proBtn: { borderRadius: 14, paddingVertical: 16, alignItems: "center" },
  proText: { color: "#06121a", fontWeight: "900", fontSize: 15 },
  signout: { borderColor: "#3a2330", borderWidth: 1, backgroundColor: "rgba(248,113,113,0.08)", borderRadius: 12, paddingVertical: 14, alignItems: "center" },
  signoutText: { color: "#f87171", fontWeight: "700" },
});

import { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from "react-native";
import { api } from "@/lib/api";
import type { LeaderboardPlayer } from "@kryptos/api-client";

export default function Leaderboard() {
  const [players, setPlayers] = useState<LeaderboardPlayer[] | null>(null);

  useEffect(() => {
    api.getLeaderboard("alltime").then(setPlayers).catch(() => setPlayers([]));
  }, []);

  if (!players) {
    return (
      <View style={s.center}><ActivityIndicator color="#22d3ee" /></View>
    );
  }

  return (
    <FlatList
      style={s.root}
      contentContainerStyle={{ padding: 16 }}
      data={players}
      keyExtractor={(p) => p.username}
      ListEmptyComponent={<Text style={s.empty}>No rankings yet.</Text>}
      renderItem={({ item, index }) => (
        <View style={s.row}>
          <Text style={s.rank}>{index + 1}</Text>
          <Text style={s.name} numberOfLines={1}>{item.username}</Text>
          <Text style={s.coins}>{item.coins} 🪙</Text>
        </View>
      )}
    />
  );
}

const s = StyleSheet.create({
  root: { flex: 1, backgroundColor: "#0d1117" },
  center: { flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: "#0d1117" },
  empty: { color: "#5b6577", textAlign: "center", marginTop: 40 },
  row: {
    flexDirection: "row", alignItems: "center", gap: 12,
    backgroundColor: "#161b22", borderColor: "#222a37", borderWidth: 1,
    borderRadius: 10, paddingHorizontal: 14, paddingVertical: 12, marginBottom: 8,
  },
  rank: { color: "#22d3ee", fontWeight: "800", width: 28, fontSize: 15 },
  name: { color: "#d1d5db", flex: 1, fontSize: 15 },
  coins: { color: "#fbbf24", fontWeight: "700", fontSize: 13 },
});

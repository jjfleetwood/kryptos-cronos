import { Tabs } from "expo-router";
import { Text, type ColorValue } from "react-native";

const icon = (glyph: string) => ({ color }: { color: ColorValue }) => (
  <Text style={{ color, fontSize: 18 }}>{glyph}</Text>
);

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerStyle: { backgroundColor: "#0d1117" },
        headerTintColor: "#fff",
        headerTitleStyle: { fontWeight: "900" },
        tabBarStyle: { backgroundColor: "#0d1117", borderTopColor: "#222a37" },
        tabBarActiveTintColor: "#22d3ee",
        tabBarInactiveTintColor: "#5b6577",
      }}
    >
      <Tabs.Screen name="index" options={{ title: "Stages", tabBarIcon: icon("📚") }} />
      <Tabs.Screen name="leaderboard" options={{ title: "Leaderboard", tabBarIcon: icon("🏆") }} />
      <Tabs.Screen name="profile" options={{ title: "Profile", tabBarIcon: icon("🧑‍💻") }} />
    </Tabs>
  );
}

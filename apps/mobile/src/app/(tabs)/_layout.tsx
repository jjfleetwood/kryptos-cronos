import { Tabs } from "expo-router";
import { Text, type ColorValue } from "react-native";

const icon = (glyph: string) => {
  const TabIcon = ({ color }: { color: ColorValue }) => (
    <Text style={{ color, fontSize: 18 }}>{glyph}</Text>
  );
  return TabIcon;
};

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
      <Tabs.Screen name="index" options={{ title: "Stages", headerShown: false, tabBarIcon: icon("📚") }} />
      <Tabs.Screen name="leaderboard" options={{ title: "Leaderboard", headerShown: false, tabBarIcon: icon("🏆") }} />
      <Tabs.Screen name="profile" options={{ title: "Profile", headerShown: false, tabBarIcon: icon("🧑‍💻") }} />
    </Tabs>
  );
}

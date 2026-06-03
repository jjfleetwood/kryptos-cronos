import { ActivityIndicator, View } from "react-native";

// Landing route — the auth gate in _layout immediately redirects to /login or
// /(tabs); this just renders while that decision settles.
export default function Index() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: "#0d1117" }}>
      <ActivityIndicator color="#22d3ee" />
    </View>
  );
}

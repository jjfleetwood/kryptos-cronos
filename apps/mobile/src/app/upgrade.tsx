import { Stack, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { ActivityIndicator, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import type { PurchasesOffering, PurchasesPackage } from "react-native-purchases";
import { configurePurchases, getProOffering, purchase, purchasesEnabled, restorePurchases } from "@/lib/purchases";

const PERKS = [
  "All 458 stages across 38 epochs",
  "Unlimited ARIA AI hints",
  "No paywalls, no waiting",
  "Certification readiness tracking",
];

function label(pkg: PurchasesPackage): string {
  const t = String(pkg.packageType);
  if (t === "ANNUAL") return "Yearly";
  if (t === "MONTHLY") return "Monthly";
  return pkg.product.title || pkg.identifier;
}

export default function Upgrade() {
  const router = useRouter();
  const [offering, setOffering] = useState<PurchasesOffering | null>(null);
  const [loading, setLoading] = useState(true);
  const [busy, setBusy] = useState(false);
  const [msg, setMsg] = useState<string | null>(null);

  useEffect(() => {
    configurePurchases();
    getProOffering().then(setOffering).finally(() => setLoading(false));
  }, []);

  async function buy(pkg: PurchasesPackage) {
    setBusy(true); setMsg(null);
    const res = await purchase(pkg);
    setBusy(false);
    if (res.pro) { setMsg("You're Pro! 🎉"); setTimeout(() => router.back(), 1200); }
    else if (!res.cancelled) setMsg("Purchase didn't complete. Please try again.");
  }

  async function onRestore() {
    setBusy(true); setMsg(null);
    const pro = await restorePurchases();
    setBusy(false);
    setMsg(pro ? "Restored — you're Pro! 🎉" : "No active purchases found.");
    if (pro) setTimeout(() => router.back(), 1200);
  }

  return (
    <ScrollView style={s.root} contentContainerStyle={{ padding: 24 }}>
      <Stack.Screen options={{ headerShown: true, title: "Kryptós Pro", headerStyle: { backgroundColor: "#0d1117" }, headerTintColor: "#fff" }} />
      <Text style={s.h1}>Go Pro</Text>
      <Text style={s.sub}>Unlock everything. Cancel anytime.</Text>

      <View style={s.perks}>
        {PERKS.map((p) => <Text key={p} style={s.perk}>✓ {p}</Text>)}
      </View>

      {loading ? (
        <ActivityIndicator color="#22d3ee" style={{ marginTop: 24 }} />
      ) : !purchasesEnabled() ? (
        <Text style={s.notice}>
          In-app purchases aren&apos;t configured on this build. Set the EXPO_PUBLIC_REVENUECAT_* keys and run a
          dev build (RevenueCat needs native modules — not available in Expo Go).
        </Text>
      ) : !offering || offering.availablePackages.length === 0 ? (
        <Text style={s.notice}>No subscription options available right now.</Text>
      ) : (
        <View style={{ gap: 12, marginTop: 8 }}>
          {offering.availablePackages.map((pkg) => (
            <Pressable key={pkg.identifier} style={s.pkg} onPress={() => buy(pkg)} disabled={busy}>
              <View style={{ flex: 1 }}>
                <Text style={s.pkgLabel}>{label(pkg)}</Text>
                <Text style={s.pkgPrice}>{pkg.product.priceString}</Text>
              </View>
              <Text style={s.pkgCta}>Subscribe →</Text>
            </Pressable>
          ))}
        </View>
      )}

      {busy && <ActivityIndicator color="#22d3ee" style={{ marginTop: 16 }} />}
      {msg && <Text style={s.msg}>{msg}</Text>}

      <Pressable onPress={onRestore} disabled={busy} style={{ marginTop: 20 }}>
        <Text style={s.restore}>Restore purchases</Text>
      </Pressable>
      <Text style={s.fine}>
        Payment is charged to your App Store / Google Play account. Subscriptions renew automatically unless cancelled
        at least 24h before the period ends.
      </Text>
    </ScrollView>
  );
}

const s = StyleSheet.create({
  root: { flex: 1, backgroundColor: "#0d1117" },
  h1: { color: "#fff", fontSize: 30, fontWeight: "900" },
  sub: { color: "#9ca3af", marginTop: 6, marginBottom: 20 },
  perks: { gap: 8, marginBottom: 8 },
  perk: { color: "#d1d5db", fontSize: 15 },
  notice: { color: "#9ca3af", marginTop: 20, lineHeight: 21, fontSize: 13 },
  pkg: {
    flexDirection: "row", alignItems: "center", borderColor: "#22d3ee", borderWidth: 1,
    backgroundColor: "rgba(34,211,238,0.08)", borderRadius: 14, paddingHorizontal: 18, paddingVertical: 16,
  },
  pkgLabel: { color: "#fff", fontWeight: "800", fontSize: 16 },
  pkgPrice: { color: "#22d3ee", fontSize: 13, marginTop: 2 },
  pkgCta: { color: "#22d3ee", fontWeight: "800" },
  msg: { color: "#4ade80", textAlign: "center", marginTop: 16, fontWeight: "700" },
  restore: { color: "#22d3ee", textAlign: "center", fontWeight: "600" },
  fine: { color: "#5b6577", fontSize: 11, lineHeight: 16, marginTop: 20, textAlign: "center" },
});

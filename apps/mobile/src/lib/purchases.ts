import { Platform } from "react-native";
import Purchases, {
  type CustomerInfo, type PurchasesOffering, type PurchasesPackage,
} from "react-native-purchases";

// RevenueCat (mobile IAP). The backend grants the Pro tier via the
// /api/webhooks/revenuecat webhook — the app just configures the SDK, logs the
// user in (so app_user_id == our username, matching the webhook), and presents
// offerings. Entitlement id must match the webhook + RC dashboard ("pro").
const PRO_ENTITLEMENT = "pro";

// Public SDK keys — safe to ship. Set in apps/mobile/.env.
const apiKey =
  Platform.select({
    ios: process.env.EXPO_PUBLIC_REVENUECAT_IOS_KEY,
    android: process.env.EXPO_PUBLIC_REVENUECAT_ANDROID_KEY,
  }) ?? "";

let configured = false;

export function purchasesEnabled(): boolean {
  return !!apiKey;
}

export function configurePurchases(): void {
  if (configured || !apiKey) return;
  try {
    Purchases.configure({ apiKey });
    configured = true;
  } catch {
    // Native module unavailable (e.g. Expo Go) — the paywall shows a notice.
  }
}

export async function identifyPurchases(username: string): Promise<void> {
  if (!configured) return;
  try { await Purchases.logIn(username.toLowerCase()); } catch { /* non-fatal */ }
}

export async function logOutPurchases(): Promise<void> {
  if (!configured) return;
  try { await Purchases.logOut(); } catch { /* non-fatal */ }
}

export function isPro(info: CustomerInfo): boolean {
  return info.entitlements.active[PRO_ENTITLEMENT] !== undefined;
}

export async function getProOffering(): Promise<PurchasesOffering | null> {
  if (!configured) return null;
  try {
    const offerings = await Purchases.getOfferings();
    return offerings.current ?? null;
  } catch {
    return null;
  }
}

export async function purchase(pkg: PurchasesPackage): Promise<{ ok: boolean; pro: boolean; cancelled: boolean }> {
  try {
    const { customerInfo } = await Purchases.purchasePackage(pkg);
    return { ok: true, pro: isPro(customerInfo), cancelled: false };
  } catch (e: unknown) {
    const cancelled = !!(e && typeof e === "object" && "userCancelled" in e && (e as { userCancelled?: boolean }).userCancelled);
    return { ok: false, pro: false, cancelled };
  }
}

export async function restorePurchases(): Promise<boolean> {
  if (!configured) return false;
  try {
    const info = await Purchases.restorePurchases();
    return isPro(info);
  } catch {
    return false;
  }
}

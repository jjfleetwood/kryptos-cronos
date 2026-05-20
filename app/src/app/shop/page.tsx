"use client";

import { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Avatar from "@/components/Avatar";
import { SHOP_ITEMS, type ShopItem } from "@/data/shop-items";

type ShopData = {
  items: ShopItem[];
  inventory: string[];
  equipped: Record<string, string>;
  coins: number;
  coinsSpent: number;
  spendable: number;
};

type Tab = "shop" | "trophy";

const RARITY_COLORS: Record<string, string> = {
  common: "text-gray-400 border-gray-600/40 bg-gray-600/10",
  rare: "text-purple-400 border-purple-500/40 bg-purple-500/10",
  legendary: "text-amber-400 border-amber-500/40 bg-amber-500/10",
};

export default function ShopPage() {
  const router = useRouter();
  const [data, setData] = useState<ShopData | null>(null);
  const [loading, setLoading] = useState(true);
  const [tab, setTab] = useState<Tab>("shop");
  const [busy, setBusy] = useState<string | null>(null);
  const [flash, setFlash] = useState<{ msg: string; ok: boolean } | null>(null);

  const load = useCallback(() => {
    fetch("/api/shop")
      .then((r) => {
        if (r.status === 401) { router.replace("/login"); return null; }
        return r.json() as Promise<ShopData>;
      })
      .then((d) => { if (d) setData(d); })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, [router]);

  useEffect(() => { load(); }, [load]);

  function showFlash(msg: string, ok: boolean) {
    setFlash({ msg, ok });
    setTimeout(() => setFlash(null), 3000);
  }

  async function purchase(item: ShopItem) {
    if (!data || busy) return;
    setBusy(item.id);
    const res = await fetch("/api/shop", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ itemId: item.id }),
    });
    const json = await res.json();
    setBusy(null);
    if (res.ok) {
      showFlash(`${item.emoji} ${item.name} added to your trophy room!`, true);
      load();
    } else {
      showFlash(json.error === "insufficient coins"
        ? `Not enough coins — need ${item.price}, have ${data.spendable}`
        : (json.error ?? "Purchase failed"), false);
    }
  }

  async function toggleEquip(itemId: string) {
    if (!data || busy) return;
    setBusy(itemId);
    const res = await fetch("/api/shop", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ itemId }),
    });
    const json = await res.json();
    setBusy(null);
    if (res.ok) {
      showFlash(json.action === "equipped" ? "Item equipped!" : "Item unequipped", true);
      load();
    } else {
      showFlash(json.error ?? "Failed", false);
    }
  }

  const itemsById = Object.fromEntries(SHOP_ITEMS.map((i) => [i.id, i]));
  const equipped = data?.equipped ?? {};
  const inventory = data?.inventory ?? [];

  return (
    <div
      className="min-h-screen px-4 py-10"
      style={{ background: "linear-gradient(160deg, #060a10 0%, #0d1117 50%, #0a0e1a 100%)" }}
    >
      {/* Flash message */}
      {flash && (
        <div
          className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 px-5 py-3 rounded-xl border text-sm font-semibold shadow-xl transition-all ${
            flash.ok
              ? "bg-green-500/15 border-green-500/40 text-green-400"
              : "bg-red-500/15 border-red-500/40 text-red-400"
          }`}
        >
          {flash.msg}
        </div>
      )}

      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <Link href="/stages" className="text-gray-600 hover:text-gray-400 text-sm mb-4 inline-block transition-colors">
            ← Stage Map
          </Link>
          <div className="flex items-start justify-between gap-4 flex-wrap">
            <div>
              <h1 className="text-3xl font-black text-white">Shop & Trophy Room</h1>
              <p className="text-gray-600 text-sm mt-1">Spend coins on items. Equip them from your trophy room.</p>
            </div>
            {data && (
              <div className="flex items-center gap-2 px-4 py-2 rounded-xl border border-amber-500/30 bg-amber-500/8 text-amber-400 font-mono text-lg font-bold">
                {data.spendable} 🪙
                <span className="text-xs text-gray-600 font-normal ml-1">spendable</span>
              </div>
            )}
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-1 bg-white/3 border border-white/10 rounded-xl p-1 mb-8 w-fit">
          {(["shop", "trophy"] as Tab[]).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`px-6 py-2 rounded-lg text-sm font-semibold transition-all ${
                tab === t ? "bg-cyan-500/15 border border-cyan-500/40 text-cyan-400" : "text-gray-500 hover:text-gray-300"
              }`}
            >
              {t === "shop" ? "🛒 Shop" : "🏆 Trophy Room"}
            </button>
          ))}
        </div>

        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-48 rounded-xl bg-white/3 border border-white/8 animate-pulse" />
            ))}
          </div>
        ) : tab === "shop" ? (
          /* ── Shop ── */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SHOP_ITEMS.map((item) => {
              const owned = inventory.includes(item.id);
              const canAfford = (data?.spendable ?? 0) >= item.price;
              return (
                <div
                  key={item.id}
                  className={`rounded-2xl border p-5 flex flex-col gap-4 transition-all ${
                    owned
                      ? "border-green-500/30 bg-green-500/5"
                      : "border-white/8 bg-white/2 hover:border-white/15"
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div className="text-4xl">{item.emoji}</div>
                    <span className={`text-xs px-2 py-0.5 rounded-full border font-semibold ${RARITY_COLORS[item.rarity]}`}>
                      {item.rarity}
                    </span>
                  </div>
                  <div>
                    <div className="text-white font-bold">{item.name}</div>
                    <div className="text-gray-500 text-xs mt-1 leading-relaxed">{item.description}</div>
                    <div className="text-gray-600 text-xs mt-2">Slot: <span className="text-gray-400">{item.slot}</span></div>
                  </div>
                  <div className="mt-auto flex items-center justify-between">
                    <span className="text-amber-400 font-mono font-bold">{item.price} 🪙</span>
                    {owned ? (
                      <span className="text-green-500 text-xs font-semibold">✓ Owned</span>
                    ) : (
                      <button
                        onClick={() => purchase(item)}
                        disabled={!!busy || !canAfford}
                        className={`px-4 py-1.5 rounded-lg text-sm font-bold transition-all ${
                          canAfford
                            ? "bg-cyan-500 hover:bg-cyan-400 text-black"
                            : "bg-white/5 text-gray-600 cursor-not-allowed"
                        }`}
                      >
                        {busy === item.id ? "…" : canAfford ? "Buy" : "Need more coins"}
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          /* ── Trophy Room ── */
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Avatar display */}
            <div className="flex flex-col items-center gap-4 flex-shrink-0">
              <div className="text-xs text-gray-600 uppercase tracking-wider font-semibold">Your Avatar</div>
              <div className="bg-white/2 border border-white/8 rounded-2xl p-8 flex items-center justify-center"
                style={{ background: "radial-gradient(ellipse at center, rgba(6,182,212,0.06) 0%, transparent 70%)" }}
              >
                <Avatar equipped={equipped} itemsById={itemsById} size="lg" />
              </div>
              <div className="text-xs text-gray-700 text-center">Click items below to equip / unequip</div>
            </div>

            {/* Inventory grid */}
            <div className="flex-1">
              <div className="text-xs text-gray-600 uppercase tracking-wider font-semibold mb-4">
                Your Items ({inventory.length})
              </div>
              {inventory.length === 0 ? (
                <div className="text-center py-16 text-gray-600 text-sm">
                  No items yet. Head to the Shop to get your first one.
                  <button onClick={() => setTab("shop")} className="block mx-auto mt-3 text-cyan-400 hover:text-cyan-300 text-xs">
                    → Go to Shop
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {inventory.map((itemId) => {
                    const item = itemsById[itemId];
                    if (!item) return null;
                    const isEquipped = equipped[item.slot] === itemId;
                    return (
                      <button
                        key={itemId}
                        onClick={() => toggleEquip(itemId)}
                        disabled={!!busy}
                        className={`rounded-xl border p-4 text-left transition-all hover:scale-105 ${
                          isEquipped
                            ? "border-cyan-500/50 bg-cyan-500/10 shadow-lg shadow-cyan-500/10"
                            : "border-white/10 bg-white/3 hover:border-white/20"
                        }`}
                      >
                        <div className="text-3xl mb-2">{item.emoji}</div>
                        <div className="text-white text-xs font-semibold leading-tight">{item.name}</div>
                        <div className={`text-xs mt-1.5 font-medium ${isEquipped ? "text-cyan-400" : "text-gray-600"}`}>
                          {isEquipped ? "✓ Equipped" : "Tap to equip"}
                        </div>
                        <span className={`text-xs px-1.5 py-0.5 rounded-full border mt-2 inline-block ${RARITY_COLORS[item.rarity]}`}>
                          {item.rarity}
                        </span>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

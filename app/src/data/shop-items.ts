export type ItemSlot = "head" | "body" | "hands" | "background";

export type ShopItem = {
  id: string;
  name: string;
  description: string;
  price: number;
  slot: ItemSlot;
  emoji: string;
  rarity: "common" | "rare" | "legendary";
  /** SVG path/shape string used to render the item on the avatar silhouette */
  svgClass: string;
};

export const SHOP_ITEMS: ShopItem[] = [
  {
    id: "medallion-of-amazement",
    name: "Medallion of Amazement",
    description: "A gleaming medal awarded to those who dare to be amazing. Worn proudly on the chest.",
    price: 300,
    slot: "body",
    emoji: "🏅",
    rarity: "rare",
    svgClass: "item-medallion",
  },
];

export function getItem(id: string): ShopItem | undefined {
  return SHOP_ITEMS.find((i) => i.id === id);
}

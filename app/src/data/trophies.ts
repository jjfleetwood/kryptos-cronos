export type TrophyTier = "field" | "enlisted" | "commended" | "decorated" | "distinguished" | "elite" | "legendary" | "apex";

export type Trophy = {
  id: string;
  name: string;
  emoji: string;
  tier: TrophyTier;
  supply: number;
  price: number;
  description: string;
};

export const TIER_META: Record<TrophyTier, { label: string; color: string; textColor: string; borderColor: string; bgColor: string }> = {
  field:         { label: "Field",         color: "#6b7280", textColor: "text-gray-400",   borderColor: "border-gray-500/40",   bgColor: "bg-gray-500/8"   },
  enlisted:      { label: "Enlisted",      color: "#78716c", textColor: "text-stone-400",  borderColor: "border-stone-500/40",  bgColor: "bg-stone-500/8"  },
  commended:     { label: "Commended",     color: "#b45309", textColor: "text-amber-500",  borderColor: "border-amber-500/40",  bgColor: "bg-amber-500/8"  },
  decorated:     { label: "Decorated",     color: "#6d28d9", textColor: "text-violet-400", borderColor: "border-violet-500/40", bgColor: "bg-violet-500/8" },
  distinguished: { label: "Distinguished", color: "#0284c7", textColor: "text-sky-400",    borderColor: "border-sky-500/40",    bgColor: "bg-sky-500/8"    },
  elite:         { label: "Elite",         color: "#0891b2", textColor: "text-cyan-400",   borderColor: "border-cyan-500/40",   bgColor: "bg-cyan-500/8"   },
  legendary:     { label: "Legendary",     color: "#7c3aed", textColor: "text-purple-400", borderColor: "border-purple-500/40", bgColor: "bg-purple-500/8" },
  apex:          { label: "Apex",          color: "#b91c1c", textColor: "text-red-400",    borderColor: "border-red-500/40",    bgColor: "bg-red-500/8"    },
};

export const TROPHIES: Trophy[] = [

  // ── Field (supply: 50,000 · price: 10) ──────────────────────────────────────
  { id: "field-recruit",     tier: "field", supply: 50000, price: 10,  emoji: "🎖️", name: "Field Recruit Medal",    description: "Your first steps into the operational grid." },
  { id: "cipher-novice",     tier: "field", supply: 50000, price: 10,  emoji: "📌", name: "Cipher Novice Pin",       description: "You're just getting started. Keep going." },
  { id: "bronze-boot",       tier: "field", supply: 50000, price: 10,  emoji: "🥾", name: "Bronze Boot Badge",       description: "Still lacing them up. That's fine." },
  { id: "packet-pup",        tier: "field", supply: 50000, price: 10,  emoji: "🐾", name: "Packet Pup Award",        description: "Small bites of big data." },
  { id: "network-initiate",  tier: "field", supply: 50000, price: 10,  emoji: "🏷️", name: "Network Initiate Tag",    description: "Welcome to the grid, operator." },
  { id: "terminal-trainee",  tier: "field", supply: 50000, price: 10,  emoji: "⌨️", name: "Terminal Trainee",        description: "The terminal is your new home. Get comfortable." },
  { id: "first-login-token", tier: "field", supply: 50000, price: 10,  emoji: "💾", name: "First Login Token",       description: "You showed up. That's the first move." },
  { id: "recon-ribbon",      tier: "field", supply: 50000, price: 10,  emoji: "🎗️", name: "Recon Ribbon",            description: "Eyes open, mouth shut." },

  // ── Enlisted (supply: 10,000 · price: 50) ───────────────────────────────────
  { id: "agent-commendation", tier: "enlisted", supply: 10000, price: 50, emoji: "🏅", name: "Agent Commendation",      description: "Service noted, agent. Keep moving." },
  { id: "firewall-walker",    tier: "enlisted", supply: 10000, price: 50, emoji: "🔥", name: "Firewall Walker",          description: "You've touched the perimeter." },
  { id: "log-analyst-pin",    tier: "enlisted", supply: 10000, price: 50, emoji: "🔍", name: "Log Analyst Pin",          description: "Reading between the lines, one event at a time." },
  { id: "defcon-attendee",    tier: "enlisted", supply: 10000, price: 50, emoji: "🔲", name: "DEFCON Attendee Pin",      description: "You've been to the show. Or at least you act like it." },
  { id: "bug-spotter",        tier: "enlisted", supply: 10000, price: 50, emoji: "🐛", name: "Bug Spotter Badge",        description: "You found the cracks before they found you." },
  { id: "packet-inspector",   tier: "enlisted", supply: 10000, price: 50, emoji: "📦", name: "Packet Inspector",         description: "You know what's inside every transmission." },
  { id: "blue-teamer-ribbon", tier: "enlisted", supply: 10000, price: 50, emoji: "🔵", name: "Blue Teamer's Ribbon",     description: "Defense is your craft. Honor it." },
  { id: "script-grad",        tier: "enlisted", supply: 10000, price: 50, emoji: "💻", name: "Script Kiddie Graduate",   description: "You've gone legit. There's no turning back." },

  // ── Commended (supply: 2,500 · price: 200) ──────────────────────────────────
  { id: "red-team-citation",   tier: "commended", supply: 2500, price: 200, emoji: "⚔️", name: "Red Team Citation",        description: "Offense noted. You've earned the red." },
  { id: "cve-hunter",          tier: "commended", supply: 2500, price: 200, emoji: "🎯", name: "CVE Hunter Badge",          description: "Real vulnerabilities. Real targets. Real work." },
  { id: "osint-operative",     tier: "commended", supply: 2500, price: 200, emoji: "🕵️", name: "OSINT Operative",           description: "You find what others miss, without touching the wire." },
  { id: "zero-trust-advocate", tier: "commended", supply: 2500, price: 200, emoji: "🔒", name: "Zero Trust Advocate",       description: "Never trust. Always verify. No exceptions." },
  { id: "threat-hunter-mark",  tier: "commended", supply: 2500, price: 200, emoji: "🌡️", name: "Threat Hunter's Mark",      description: "You hunt what alerts miss. Dwell time is your enemy." },
  { id: "adversary-emulator",  tier: "commended", supply: 2500, price: 200, emoji: "🎭", name: "Adversary Emulator",        description: "You think like the enemy. That's the point." },
  { id: "shadow-brokers-svnr", tier: "commended", supply: 2500, price: 200, emoji: "📁", name: "Shadow Brokers Souvenir",   description: "A relic from the leak that changed everything. 2016 will not be forgotten." },
  { id: "vault7-relic",        tier: "commended", supply: 2500, price: 200, emoji: "📂", name: "Vault 7 Relic",             description: "CIA tools. Public archive. You know what's in there." },

  // ── Decorated (supply: 500 · price: 1,000) ──────────────────────────────────
  { id: "network-sovereign",  tier: "decorated", supply: 500, price: 1000, emoji: "👑", name: "Network Sovereign",         description: "Owner of the wire. The switches answer to you." },
  { id: "ctf-champion",       tier: "decorated", supply: 500, price: 1000, emoji: "🏆", name: "CTF Champion's Trophy",     description: "Flags claimed. Boxes owned. Score submitted." },
  { id: "phantom-protocol",   tier: "decorated", supply: 500, price: 1000, emoji: "👻", name: "Phantom Protocol",          description: "In. Out. No trace. No log. No evidence." },
  { id: "shadow-operator",    tier: "decorated", supply: 500, price: 1000, emoji: "🌑", name: "Shadow Operator",           description: "The network doesn't know you're here." },
  { id: "exploit-architect",  tier: "decorated", supply: 500, price: 1000, emoji: "🏗️", name: "Exploit Architect",         description: "You don't just find holes. You build the attack." },
  { id: "founders-badge",     tier: "decorated", supply: 500, price: 1000, emoji: "🔑", name: "Kryptós Founder's Badge",   description: "Early. Committed. Operating while others were watching." },
  { id: "zero-day-found",     tier: "decorated", supply: 500, price: 1000, emoji: "0️⃣", name: "Zero-Day Found",            description: "Not many people can say this. You can." },

  // ── Distinguished (supply: 100 · price: 5,000) ──────────────────────────────
  { id: "dist-cipher-breaker",  tier: "distinguished", supply: 100, price: 5000, emoji: "🔓", name: "1-of-100 Cipher Breaker",        description: "A rare decryptors-only club. One hundred exist across the entire platform." },
  { id: "dist-nation-analyst",  tier: "distinguished", supply: 100, price: 5000, emoji: "🌍", name: "1-of-100 Nation-State Analyst",  description: "APT tracking at scale. Only a hundred operators reach this level." },
  { id: "dist-zero-day-scout",  tier: "distinguished", supply: 100, price: 5000, emoji: "⚡", name: "1-of-100 Zero-Day Scout",         description: "One hundred will ever hold this. Are you one of them?" },
  { id: "dist-vault-raider",    tier: "distinguished", supply: 100, price: 5000, emoji: "🏛️", name: "1-of-100 Vault Raider",          description: "NSA-grade persistence. One hundred total. This one is yours." },
  { id: "dist-ghost-protocol",  tier: "distinguished", supply: 100, price: 5000, emoji: "🕊️", name: "1-of-100 Ghost Protocol",        description: "Silent. Rare. Lethal. A hundred ghosts walk the grid." },
  { id: "dist-arcanedoor",      tier: "distinguished", supply: 100, price: 5000, emoji: "🚪", name: "1-of-100 ArcaneDoor Certificate", description: "Only a hundred operators know this door. Only a hundred will hold this." },
  { id: "dist-pioneer",         tier: "distinguished", supply: 100, price: 5000, emoji: "🧭", name: "1-of-100 Kryptós Pioneer",        description: "You were here before it was known. One of a hundred trailblazers." },

  // ── Elite (supply: 25 · price: 15,000) ──────────────────────────────────────
  { id: "elite-iron-protocol",  tier: "elite", supply: 25, price: 15000, emoji: "⚙️", name: "1-of-25 Iron Protocol",       description: "Unbreakable methodology. Twenty-five in existence. You own one." },
  { id: "elite-apex-cipher",    tier: "elite", supply: 25, price: 15000, emoji: "💎", name: "1-of-25 Apex Cipher",         description: "Elite cryptanalyst. Near the very top. Twenty-five holders, no more." },
  { id: "elite-vanguard-shield",tier: "elite", supply: 25, price: 15000, emoji: "🛡️", name: "1-of-25 Vanguard Shield",     description: "Elite defender. Twenty-five shields protect the platform." },
  { id: "elite-shadow-council", tier: "elite", supply: 25, price: 15000, emoji: "🌚", name: "1-of-25 Shadow Council",      description: "Inner circle. Very few. You have a seat at the table." },
  { id: "elite-velvet-ant",     tier: "elite", supply: 25, price: 15000, emoji: "🐜", name: "1-of-25 Velvet Ant Trophy",   description: "Only 25 operators tracked this three-year data center persistence. You're one." },
  { id: "elite-binary-sov",     tier: "elite", supply: 25, price: 15000, emoji: "👑", name: "1-of-25 Binary Sovereign",    description: "Twenty-five kings of the binary realm. The crown fits." },

  // ── Legendary (supply: 5 · price: 50,000) ───────────────────────────────────
  { id: "leg-pantheon-key",    tier: "legendary", supply: 5, price: 50000, emoji: "🗝️", name: "1-of-5 Pantheon Key",       description: "Almost no one has this. Five keys open the Pantheon. You hold one." },
  { id: "leg-obsidian-cipher", tier: "legendary", supply: 5, price: 50000, emoji: "⬛", name: "1-of-5 Obsidian Cipher",    description: "Near-mythic rarity. Five exist. The rest will never see this." },
  { id: "leg-apex-predator",   tier: "legendary", supply: 5, price: 50000, emoji: "🦅", name: "1-of-5 Apex Predator",      description: "Only five have reached this height. You're at the top of the food chain." },
  { id: "leg-dark-matter",     tier: "legendary", supply: 5, price: 50000, emoji: "🌌", name: "1-of-5 Dark Matter Badge",  description: "Five exist. Can't be seen. Can't be disproved. But it's there." },
  { id: "leg-crown-protocol",  tier: "legendary", supply: 5, price: 50000, emoji: "🔮", name: "1-of-5 Crown Protocol",     description: "Five crowns. One operation. You've been authorized." },

  // ── Apex (supply: 1 · price: 200,000) ───────────────────────────────────────
  { id: "apex-origin-stone",   tier: "apex", supply: 1, price: 200000, emoji: "💠", name: "1-of-1 Origin Stone",       description: "The first. The only. Singular. One exists across the entire platform. You're reading this." },
  { id: "apex-singularity",    tier: "apex", supply: 1, price: 200000, emoji: "☯️", name: "1-of-1 Singularity Badge",  description: "There is no second. One badge. One holder. The rest of the platform will never own this." },
  { id: "apex-sovereign-relic",tier: "apex", supply: 1, price: 200000, emoji: "👁️", name: "1-of-1 Sovereign Relic",    description: "Unique across all of Kryptós CronOS. This does not repeat. This does not end." },
];

export const TROPHY_MAP = new Map(TROPHIES.map((t) => [t.id, t]));

export function getTrophy(id: string): Trophy | undefined {
  return TROPHY_MAP.get(id);
}

export function getTrophiesByTier(tier: TrophyTier): Trophy[] {
  return TROPHIES.filter((t) => t.tier === tier);
}

const TIER_ORDER: TrophyTier[] = ["field", "enlisted", "commended", "decorated", "distinguished", "elite", "legendary", "apex"];

export { TIER_ORDER };

// Seeded deterministic shuffle — daily rotation per user
function seededFloat(seed: number): number {
  const x = Math.sin(seed + 1) * 10000;
  return x - Math.floor(x);
}

function hashString(s: string): number {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (Math.imul(31, h) + s.charCodeAt(i)) | 0;
  return Math.abs(h);
}

export function dailyShopTrophies(username: string, count = 10): Trophy[] {
  const dayKey = Math.floor(Date.now() / 86400000);
  const seed = hashString(username.toLowerCase() + String(dayKey));
  const arr = [...TROPHIES];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(seededFloat(seed + i) * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr.slice(0, count);
}

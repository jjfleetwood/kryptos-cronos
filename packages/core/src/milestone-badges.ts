export type MilestoneBadge = {
  id: string;
  name: string;
  emoji: string;
  desc: string;
};

export const milestoneBadges: MilestoneBadge[] = [
  { id: "m-stage-1",   name: "First Strike",    emoji: "🎯", desc: "Complete your first stage" },
  { id: "m-stage-10",  name: "Threat Scout",    emoji: "🔍", desc: "Complete 10 stages" },
  { id: "m-stage-25",  name: "Cyber Defender",  emoji: "🛡️", desc: "Complete 25 stages" },
  { id: "m-stage-50",  name: "Threat Hunter",   emoji: "🏹", desc: "Complete 50 stages" },
  { id: "m-stage-100", name: "Elite Operator",  emoji: "💫", desc: "Complete 100 stages" },
  { id: "m-xp-1k",    name: "1K Club",          emoji: "💯", desc: "Reach 1,000 XP" },
  { id: "m-xp-5k",    name: "5K Elite",         emoji: "🌟", desc: "Reach 5,000 XP" },
  { id: "m-streak-3", name: "On Fire",           emoji: "🔥", desc: "3-day completion streak" },
  { id: "m-streak-7", name: "Week Warrior",      emoji: "⚡", desc: "7-day completion streak" },
  { id: "m-streak-30",name: "Iron Defender",     emoji: "🏆", desc: "30-day completion streak" },
];

export function checkStageMilestones(count: number): string[] {
  const earned: string[] = [];
  if (count >= 1)   earned.push("m-stage-1");
  if (count >= 10)  earned.push("m-stage-10");
  if (count >= 25)  earned.push("m-stage-25");
  if (count >= 50)  earned.push("m-stage-50");
  if (count >= 100) earned.push("m-stage-100");
  return earned;
}

export function checkXpMilestones(xp: number): string[] {
  const earned: string[] = [];
  if (xp >= 1000)  earned.push("m-xp-1k");
  if (xp >= 5000)  earned.push("m-xp-5k");
  return earned;
}

export function checkStreakMilestones(streak: number): string[] {
  const earned: string[] = [];
  if (streak >= 3)  earned.push("m-streak-3");
  if (streak >= 7)  earned.push("m-streak-7");
  if (streak >= 30) earned.push("m-streak-30");
  return earned;
}

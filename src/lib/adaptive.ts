import type { Question, SkillId, CodeRegion } from "@/data/types";
import { QUESTIONS } from "@/data/questions";
import { SKILLS } from "@/data/skills";
import { clamp } from "./utils";

export const P_TRANSIT = 0.14;
export const P_GUESS = 0.25;
export const P_SLIP = 0.1;
export const P_L0 = 0.22;
export const MASTERY = 0.8;

export type Sm2Card = {
  ease: number;
  interval: number;
  reps: number;
  due: number;
  lapses: number;
};

export function initMastery(): Record<SkillId, number> {
  return Object.fromEntries(SKILLS.map((s) => [s.id, P_L0])) as Record<SkillId, number>;
}

export function observe(pL: number, correct: boolean): number {
  const prior = clamp(pL, 0.02, 0.98);
  const posterior = correct
    ? (prior * (1 - P_SLIP)) / (prior * (1 - P_SLIP) + (1 - prior) * P_GUESS)
    : (prior * P_SLIP) / (prior * P_SLIP + (1 - prior) * (1 - P_GUESS));
  return clamp(posterior + (1 - posterior) * P_TRANSIT, 0.02, 0.98);
}

export function introduce(pL: number): number {
  return clamp(pL + (1 - pL) * 0.08, 0.02, 0.95);
}

export function qualityFrom(correct: boolean, firstTry: boolean): number {
  if (correct && firstTry) return 5;
  if (correct) return 3;
  return 1;
}

export function reviewSm2(card: Sm2Card | undefined, quality: number, now = Date.now()): Sm2Card {
  const ease0 = card?.ease ?? 2.5;
  const reps0 = card?.reps ?? 0;
  const interval0 = card?.interval ?? 0;
  const lapses0 = card?.lapses ?? 0;
  const ease = Math.max(1.3, ease0 + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02)));
  if (quality < 3) {
    return {
      ease,
      interval: 1,
      reps: 0,
      due: now + 10 * 60 * 1000,
      lapses: lapses0 + 1,
    };
  }
  let interval = 1;
  const reps = reps0 + 1;
  if (reps === 1) interval = 1;
  else if (reps === 2) interval = 3;
  else interval = Math.round(interval0 * ease);
  return {
    ease,
    interval,
    reps,
    due: now + interval * 24 * 60 * 60 * 1000,
    lapses: lapses0,
  };
}

export function pickQuestions(opts: {
  mastery: Record<SkillId, number>;
  sm2: Record<string, Sm2Card>;
  recentIds: string[];
  n: number;
  preferSkills?: SkillId[];
  region?: CodeRegion;
  now?: number;
}): Question[] {
  const now = opts.now ?? Date.now();
  const region = opts.region ?? "eu";
  const recent = new Set(opts.recentIds.slice(-8));
  const scored = QUESTIONS.filter(
    (q) => (q.region ?? "eu") === region && !recent.has(q.id),
  ).map((q) => {
    const pL = opts.mastery[q.skillId] ?? P_L0;
    const card = opts.sm2[q.id];
    const dueBoost = card && card.due <= now ? 1.35 : card ? 0.7 : 1;
    const zone = pL > 0.2 && pL < 0.88 ? 1.25 : 0.8;
    const prefer = opts.preferSkills?.includes(q.skillId) ? 1.4 : 1;
    const weak = 1 + (1 - pL);
    const jitter = 0.92 + Math.random() * 0.16;
    return { q, score: dueBoost * zone * prefer * weak * jitter };
  });
  scored.sort((a, b) => b.score - a.score);
  const picked: Question[] = [];
  const usedSkills: SkillId[] = [];
  for (const row of scored) {
    if (picked.length >= opts.n) break;
    const same = usedSkills.filter((s) => s === row.q.skillId).length;
    if (same >= 2 && picked.length + 1 < opts.n) continue;
    picked.push(row.q);
    usedSkills.push(row.q.skillId);
  }
  if (picked.length < opts.n) {
    for (const row of scored) {
      if (picked.length >= opts.n) break;
      if (!picked.includes(row.q)) picked.push(row.q);
    }
  }
  return picked;
}

export const PLACEMENT_IDS = [
  "q-family-1",
  "q-duty-1",
  "q-70-1",
  "q-73-1",
  "q-72-1",
  "q-76p-1",
  "q-76c-1",
  "q-76m-1",
] as const;

function skillsIn(region: CodeRegion = "eu") {
  return SKILLS.filter((s) => (s.region ?? "eu") === region);
}

export function overallMastery(mastery: Record<SkillId, number>, region: CodeRegion = "eu"): number {
  const vals = skillsIn(region).map((s) => mastery[s.id] ?? P_L0);
  if (!vals.length) return 0;
  return vals.reduce((a, b) => a + b, 0) / vals.length;
}

export function weakSkills(mastery: Record<SkillId, number>, n = 3, region: CodeRegion = "eu"): SkillId[] {
  return skillsIn(region)
    .sort((a, b) => (mastery[a.id] ?? 0) - (mastery[b.id] ?? 0))
    .slice(0, n)
    .map((s) => s.id);
}

export function masteredCount(mastery: Record<SkillId, number>, region: CodeRegion = "eu"): number {
  return skillsIn(region).filter((s) => (mastery[s.id] ?? 0) >= MASTERY).length;
}

import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { SkillId, CodeRegion } from "@/data/types";
import {
  type Sm2Card,
  initMastery,
  observe,
  introduce,
  reviewSm2,
  qualityFrom,
} from "./adaptive";

export type LogItem = {
  ts: number;
  questionId: string;
  skillId: SkillId;
  correct: boolean;
};

type Progress = {
  hydrated: boolean;
  setHydrated: (v: boolean) => void;
  mastery: Record<SkillId, number>;
  sm2: Record<string, Sm2Card>;
  lessonsDone: string[];
  scenariosDone: string[];
  recentQuestionIds: string[];
  log: LogItem[];
  streak: number;
  lastActiveDay: string;
  answers: number;
  correct: number;
  placementDone: boolean;
  displayName: string;
  codeRegion: CodeRegion;
  latamMastery: Record<string, number>;
  latamRecent: Record<string, string[]>;
  markAnswer: (opts: {
    questionId: string;
    skillId: SkillId;
    correct: boolean;
    firstTry: boolean;
  }) => void;
  markLatamAnswer: (opts: {
    slug: string;
    questionId: string;
    correct: boolean;
    firstTry: boolean;
  }) => void;
  completeLesson: (lessonId: string, skillIds: SkillId[]) => void;
  completeScenario: (id: string, skillIds: SkillId[], successRate: number) => void;
  finishPlacement: () => void;
  touchStreak: () => void;
  reset: () => void;
  setName: (name: string) => void;
  setCodeRegion: (region: CodeRegion) => void;
};

const empty = {
  mastery: initMastery(),
  sm2: {} as Record<string, Sm2Card>,
  lessonsDone: [] as string[],
  scenariosDone: [] as string[],
  recentQuestionIds: [] as string[],
  log: [] as LogItem[],
  streak: 0,
  lastActiveDay: "",
  answers: 0,
  correct: 0,
  placementDone: false,
  displayName: "",
  codeRegion: "eu" as CodeRegion,
  latamMastery: {} as Record<string, number>,
  latamRecent: {} as Record<string, string[]>,
};

function today() {
  return new Date().toISOString().slice(0, 10);
}

function nextStreak(last: string, streak: number) {
  const t = today();
  if (last === t) return streak || 1;
  const y = new Date();
  y.setDate(y.getDate() - 1);
  const yday = y.toISOString().slice(0, 10);
  if (last === yday) return streak + 1;
  return 1;
}

export const useProgress = create<Progress>()(
  persist(
    (set, get) => ({
      hydrated: false,
      setHydrated: (v) => set({ hydrated: v }),
      ...empty,
      markAnswer: ({ questionId, skillId, correct, firstTry }) => {
        const s = get();
        const pL = observe(s.mastery[skillId] ?? 0.22, correct);
        const q = qualityFrom(correct, firstTry);
        const card = reviewSm2(s.sm2[questionId], q);
        const streak = nextStreak(s.lastActiveDay, s.streak);
        set({
          mastery: { ...s.mastery, [skillId]: pL },
          sm2: { ...s.sm2, [questionId]: card },
          recentQuestionIds: [...s.recentQuestionIds, questionId].slice(-24),
          log: [
            ...s.log,
            { ts: Date.now(), questionId, skillId, correct },
          ].slice(-200),
          answers: s.answers + 1,
          correct: s.correct + (correct ? 1 : 0),
          streak,
          lastActiveDay: today(),
        });
      },
      markLatamAnswer: ({ slug, questionId, correct, firstTry }) => {
        const s = get();
        const key = `${slug}:${questionId}`;
        const mastery = s.latamMastery ?? {};
        const recentMap = s.latamRecent ?? {};
        const pL = observe(mastery[key] ?? 0.22, correct);
        const card = reviewSm2(s.sm2[`latam:${key}`], qualityFrom(correct, firstTry));
        const recent = [...(recentMap[slug] ?? []), questionId].slice(-12);
        set({
          latamMastery: { ...mastery, [key]: pL },
          sm2: { ...s.sm2, [`latam:${key}`]: card },
          latamRecent: { ...recentMap, [slug]: recent },
          streak: nextStreak(s.lastActiveDay, s.streak),
          lastActiveDay: today(),
        });
      },
      completeLesson: (lessonId, skillIds) => {
        const s = get();
        if (s.lessonsDone.includes(lessonId)) return;
        const mastery = { ...s.mastery };
        for (const id of skillIds) mastery[id] = introduce(mastery[id] ?? 0.22);
        set({
          lessonsDone: [...s.lessonsDone, lessonId],
          mastery,
          streak: nextStreak(s.lastActiveDay, s.streak),
          lastActiveDay: today(),
        });
      },
      completeScenario: (id, skillIds, successRate) => {
        const s = get();
        const mastery = { ...s.mastery };
        for (const sid of skillIds) {
          mastery[sid] = observe(mastery[sid] ?? 0.22, successRate >= 0.67);
        }
        set({
          scenariosDone: s.scenariosDone.includes(id)
            ? s.scenariosDone
            : [...s.scenariosDone, id],
          mastery,
          streak: nextStreak(s.lastActiveDay, s.streak),
          lastActiveDay: today(),
        });
      },
      finishPlacement: () => set({ placementDone: true }),
      touchStreak: () => {
        const s = get();
        set({
          streak: nextStreak(s.lastActiveDay, s.streak),
          lastActiveDay: today(),
        });
      },
      reset: () => set({ ...empty, hydrated: true }),
      setName: (displayName) => set({ displayName }),
      setCodeRegion: (codeRegion) => set({ codeRegion }),
    }),
    {
      name: "liftiq-progress-v1",
      skipHydration: true,
      partialize: (s) => ({
        mastery: s.mastery,
        sm2: s.sm2,
        lessonsDone: s.lessonsDone,
        scenariosDone: s.scenariosDone,
        recentQuestionIds: s.recentQuestionIds,
        log: s.log,
        streak: s.streak,
        lastActiveDay: s.lastActiveDay,
        answers: s.answers,
        correct: s.correct,
        placementDone: s.placementDone,
        displayName: s.displayName,
        codeRegion: s.codeRegion,
        latamMastery: s.latamMastery,
        latamRecent: s.latamRecent,
      }),
    },
  ),
);

import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { QuestionCard } from "@/components/quiz/question-card";
import { Button, buttonVariants } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { QUESTIONS } from "@/data/questions";
import type { Question } from "@/data/types";
import { SKILL_BY_ID } from "@/data/skills";
import { pickQuestions } from "@/lib/adaptive";
import { useProgress } from "@/lib/store";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/drill")({ component: DrillPage });

function snapshotDue(): Question[] {
  const s = useProgress.getState();
  const region = "eu" as const;
  const now = Date.now();
  const dueIds = Object.entries(s.sm2)
    .filter(([, card]) => card.due <= now)
    .map(([id]) => id);
  const dueQs = QUESTIONS.filter(
    (q) => dueIds.includes(q.id) && (q.region ?? "eu") === region,
  ).slice(0, 8);
  if (dueQs.length >= 6) return dueQs;
  return pickQuestions({
    mastery: s.mastery,
    sm2: s.sm2,
    recentIds: s.recentQuestionIds,
    n: 8,
    region,
  });
}

function DrillPage() {
  const markAnswer = useProgress((s) => s.markAnswer);
  const hydrated = useProgress((s) => s.hydrated);
  const sm2 = useProgress((s) => s.sm2);
  const [deck, setDeck] = useState<Question[] | null>(null);
  const [index, setIndex] = useState(0);
  const [done, setDone] = useState(false);
  const dueCount = Object.values(sm2).filter((c) => c.due <= Date.now()).length;
  const current = deck?.[index];

  if (!hydrated) {
    return (
      <main className="mx-auto max-w-3xl px-4 py-16">
        <p className="text-muted">Loading diary…</p>
      </main>
    );
  }

  if (done) {
    return (
      <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <h1 className="font-display text-4xl font-semibold">Filed for later</h1>
        <p className="mt-3 text-muted">
          Correct cards stretch their interval. Missed ones come back in minutes.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link to="/practice" className={buttonVariants()}>
            Adaptive practice
          </Link>
          <Link to="/" className={buttonVariants({ variant: "secondary" })}>
            Lobby
          </Link>
        </div>
      </main>
    );
  }

  if (deck === null) {
    return (
      <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <p className="text-sm font-medium uppercase tracking-wider text-accent">
          Spaced drill · {dueCount} due
        </p>
        <h1 className="mt-2 font-display text-4xl font-semibold sm:text-5xl">
          Come back just as you forget
        </h1>
        <p className="mt-4 text-muted">
          SM-2 spaced repetition. If nothing is due yet, ElevatorIQ will still drill
          the weakest floors so the diary has something to work with.
        </p>
        <Button className="mt-8" size="lg" onClick={() => setDeck(snapshotDue())}>
          Start drill
        </Button>
      </main>
    );
  }

  if (!current) {
    return (
      <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <h1 className="font-display text-4xl font-semibold">Nothing is due</h1>
        <p className="mt-3 text-muted">
          Answer a few in practice first. The spaced-repetition diary fills itself.
        </p>
        <Link to="/practice" className={cn(buttonVariants(), "mt-6")}>
          Practice instead
        </Link>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-12">
      <p className="text-sm font-medium uppercase tracking-wider text-accent">
        Spaced drill · {dueCount} due
      </p>
      <h1 className="mt-2 font-display text-3xl font-semibold">
        {SKILL_BY_ID[current.skillId].name}
      </h1>
      <Progress value={(index + 1) / deck.length} className="mt-4 mb-8" />
      <QuestionCard
        key={current.id}
        question={current}
        index={index}
        total={deck.length}
        onResolved={(correct, firstTry) => {
          markAnswer({
            questionId: current.id,
            skillId: current.skillId,
            correct,
            firstTry,
          });
          if (index + 1 >= deck.length) setDone(true);
          else setIndex((i) => i + 1);
        }}
      />
    </main>
  );
}

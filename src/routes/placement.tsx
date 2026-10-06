import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { QuestionCard } from "@/components/quiz/question-card";
import { buttonVariants } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { LESSONS } from "@/data/lessons";
import { QUESTION_BY_ID } from "@/data/questions";
import { SKILL_BY_ID } from "@/data/skills";
import { PLACEMENT_IDS, weakSkills } from "@/lib/adaptive";
import { useProgress } from "@/lib/store";

export const Route = createFileRoute("/placement")({ component: PlacementPage });

function PlacementPage() {
  const deck = useMemo(
    () => PLACEMENT_IDS.map((id) => QUESTION_BY_ID[id]).filter(Boolean),
    [],
  );
  const markAnswer = useProgress((s) => s.markAnswer);
  const finishPlacement = useProgress((s) => s.finishPlacement);
  const mastery = useProgress((s) => s.mastery);
  const [index, setIndex] = useState(0);
  const [done, setDone] = useState(false);
  const current = deck[index];
  const weak = done ? weakSkills(mastery, 3) : [];
  const next =
    LESSONS.filter((l) => (l.region ?? "eu") === "eu").find((l) =>
      weak.includes(l.skillIds[0]),
    ) ?? LESSONS[0];

  if (done) {
    return (
      <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <p className="text-sm font-medium uppercase tracking-wider text-accent">
          Placement
        </p>
        <h1 className="mt-2 font-display text-4xl font-semibold sm:text-5xl">
          Your first lessons
        </h1>
        <p className="mt-3 text-muted">
          ElevatorIQ now knows where you are solid and where the language still slips.
          Start on a weak floor — not at the beginning of the book.
        </p>
        <ul className="mt-6 space-y-2">
          {weak.map((id) => (
            <li key={id} className="rounded-xl bg-raised px-4 py-3 text-sm">
              {SKILL_BY_ID[id].name}
            </li>
          ))}
        </ul>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link to="/learn/$id" params={{ id: next.id }} className={buttonVariants()}>
            Start there
          </Link>
          <Link to="/practice" className={buttonVariants({ variant: "secondary" })}>
            Jump to practice
          </Link>
        </div>
      </main>
    );
  }

  if (!current) {
    return (
      <main className="mx-auto max-w-3xl px-4 py-12">
        <p>Placement bank is empty.</p>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-12">
      <p className="text-sm font-medium uppercase tracking-wider text-accent">
        Diagnostic · eight questions
      </p>
      <h1 className="mt-2 font-display text-3xl font-semibold">Show us the landing</h1>
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
          if (index + 1 >= deck.length) {
            finishPlacement();
            setDone(true);
          } else setIndex((i) => i + 1);
        }}
      />
    </main>
  );
}

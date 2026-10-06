import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { QuestionCard } from "@/components/quiz/question-card";
import { Button, buttonVariants } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import type { Question, CodeRegion } from "@/data/types";
import { SKILL_BY_ID } from "@/data/skills";
import { reteachFor } from "@/data/reteach";
import { pickQuestions } from "@/lib/adaptive";
import { useProgress } from "@/lib/store";
import { cn, formatPct } from "@/lib/utils";
import { AdSlot } from "@/components/ads/ad-slot";
import { PlainSketch } from "@/components/learn/plain-sketch";

import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/practice")({
  head: () =>
    pageHead({
      title: "EN 81 practice questions · lift regulations",
      description:
        "Practice questions on EN 81, LOLER, firefighter lifts, and evacuation lifts. A miss brings the rule back in simpler words.",
      path: "/practice",
    }),
  component: EuPractice,
});

function EuPractice() {
  return <PracticeSession region="eu" />;
}

function snapshotDeck(region: CodeRegion): Question[] {
  const s = useProgress.getState();
  return pickQuestions({
    mastery: s.mastery,
    sm2: s.sm2,
    recentIds: s.recentQuestionIds,
    n: 8,
    region,
  });
}

export function PracticeSession({ region }: { region: CodeRegion }) {
  const markAnswer = useProgress((s) => s.markAnswer);
  const hydrated = useProgress((s) => s.hydrated);
  const [deck, setDeck] = useState<Question[] | null>(null);
  const [index, setIndex] = useState(0);
  const [hits, setHits] = useState(0);
  const [done, setDone] = useState(false);
  const [phase, setPhase] = useState<"ask" | "teach" | "check">("ask");
  const [anglePick, setAnglePick] = useState<number | null>(null);

  useEffect(() => {
    if (!hydrated || deck !== null) return;
    setDeck(snapshotDeck(region));
  }, [hydrated, deck, region]);

  const current = deck?.[index];

  if (!hydrated || deck === null) {
    return (
      <main className="mx-auto max-w-3xl px-4 py-16">
        <p className="text-muted">Loading your questions…</p>
      </main>
    );
  }

  if (done && deck.length) {
    return (
      <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <p className="text-sm font-medium uppercase tracking-wider text-accent">
          {region === "asme" ? "ASME questions" : "Questions only"}
        </p>
        <h1 className="mt-2 font-display text-4xl font-semibold">Set closed</h1>
        <p className="mt-3 text-lg text-muted">
          {hits} of {deck.length} were clear the first time. The others were
          translated into ordinary words. A miss is not a mark against you. It
          is how the jargon gets explained.
        </p>
        <p className="mt-6 font-display text-5xl tabular-nums">
          {formatPct(hits / deck.length)}
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button
            onClick={() => {
              setDeck(snapshotDeck(region));
              setIndex(0);
              setHits(0);
              setDone(false);
              setPhase("ask");
              setAnglePick(null);
            }}
          >
            Another set
          </Button>
          {region === "asme" ? (
            <Link to="/asme/test" className={buttonVariants({ variant: "secondary" })}>
              Sit the test
            </Link>
          ) : (
            <Link to="/test" className={buttonVariants({ variant: "secondary" })}>
              Sit the test
            </Link>
          )}
          {region === "asme" ? (
            <Link to="/asme/learn" className={buttonVariants({ variant: "secondary" })}>
              Back to lessons
            </Link>
          ) : (
            <Link to="/learn" className={buttonVariants({ variant: "secondary" })}>
              Back to lessons
            </Link>
          )}
        </div>
        <div className="mt-10">
          <AdSlot slot="drill" size="card" />
        </div>
      </main>
    );
  }

  if (!deck.length) {
    return (
      <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <h1 className="font-display text-4xl font-semibold">No questions in the bank.</h1>
        {region === "asme" ? (
          <Link to="/asme/test" className={cn(buttonVariants(), "mt-6")}>
            Sit the test
          </Link>
        ) : (
          <Link to="/test" className={cn(buttonVariants(), "mt-6")}>
            Sit the test
          </Link>
        )}
      </main>
    );
  }

  if (!current) {
    return (
      <main className="mx-auto max-w-3xl px-4 py-12">
        <p>No questions in the bank.</p>
      </main>
    );
  }

  const question = current;
  const total = deck.length;
  const reteach = reteachFor(question);

  function leaveQuestion(firstTryCorrect: boolean) {
    markAnswer({
      questionId: question.id,
      skillId: question.skillId,
      correct: firstTryCorrect,
      firstTry: firstTryCorrect,
    });
    if (firstTryCorrect) setHits((h) => h + 1);
    setPhase("ask");
    setAnglePick(null);
    if (index + 1 >= total) setDone(true);
    else setIndex((i) => i + 1);
  }

  return (
    <main className="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-12">
      <div className="flex flex-wrap items-baseline justify-between gap-3">
        <p className="text-sm font-medium uppercase tracking-wider text-faint">
          Question {index + 1} of {total} · {SKILL_BY_ID[question.skillId].name}
        </p>
        {region === "asme" ? (
          <Link to="/asme/test" className="text-sm text-yellow hover:underline">
            Sit the test
          </Link>
        ) : (
          <Link to="/test" className="text-sm text-yellow hover:underline">
            Sit the test
          </Link>
        )}
      </div>
      <Progress value={(index + 1) / total} className="mt-4 mb-3" />
      <p className="mb-8 mt-4 text-base text-muted">
        These questions translate legal words. If you do not know yet, that is
        the point of the page. Bayesian Knowledge Tracing updates how likely it
        is you already know this rule. A low likelihood brings the rule back,
        with a simpler explanation. It is not a mark.
      </p>
      {phase === "ask" ? (
        <QuestionCard
          key={question.id}
          question={question}
          index={index}
          total={total}
          holdOnMiss
          onMiss={() => {
            setPhase("teach");
          }}
          onResolved={(correct, firstTry) => {
            leaveQuestion(correct && firstTry);
          }}
        />
      ) : (
        <div className="space-y-5">
          <p className="text-sm font-medium uppercase tracking-wider text-accent">
            Plainer words
          </p>
          <h2 className="font-display text-2xl font-semibold text-pretty sm:text-3xl">
            A miss is not a mark against you.
          </h2>
          <p className="text-lg text-muted">
            The standard uses dense words. Here is the same rule, drawn and said
            so anyone can follow it.
          </p>
          <PlainSketch questionId={question.id} skillId={question.skillId} />
          <article className="rounded-xl border-l-4 border-green bg-paper p-5 text-paper-fg shadow-[var(--shadow-border)] sm:p-6">
            <p className="text-sm font-medium uppercase tracking-wider text-paper-muted">
              What it means
            </p>
            <p className="mt-2 text-lg leading-relaxed">{question.plain}</p>
          </article>
          {reteach.teach !== question.plain ? (
            <p className="text-lg leading-relaxed text-muted">{reteach.teach}</p>
          ) : null}
          {phase === "teach" ? (
            <Button onClick={() => setPhase("check")}>Check it in these words</Button>
          ) : (
            <div className="space-y-3">
              <h3 className="font-display text-xl font-semibold">{reteach.prompt}</h3>
              <ul className="space-y-2">
                {reteach.choices.map((choice, i) => {
                  const revealed = anglePick !== null;
                  const isAnswer = i === reteach.answer;
                  const isPicked = anglePick === i;
                  return (
                    <li key={choice}>
                      <button
                        type="button"
                        disabled={revealed}
                        onClick={() => setAnglePick(i)}
                        className={cn(
                          "flex min-h-14 w-full items-start rounded-xl px-4 py-3 text-left text-base shadow-[var(--shadow-border)]",
                          !revealed && "bg-surface hover:bg-inset",
                          revealed && isAnswer && "bg-green text-ok-fg",
                          revealed && isPicked && !isAnswer && "bg-orange text-accent-fg",
                        )}
                      >
                        {choice}
                      </button>
                    </li>
                  );
                })}
              </ul>
              {anglePick !== null ? (
                <div className="space-y-3">
                  <p className="text-base text-muted">
                    {anglePick === reteach.answer
                      ? "Yes. That is the rule, in ordinary words."
                      : "That is all right. The highlighted line is the plain version. Take that with you."}
                  </p>
                  <Button onClick={() => leaveQuestion(false)}>Continue</Button>
                </div>
              ) : null}
            </div>
          )}
        </div>
      )}
    </main>
  );
}

import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { QuestionCard } from "@/components/quiz/question-card";
import { Button, buttonVariants } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { QUESTION_BY_ID } from "@/data/questions";
import { TEST_IDS, TEST_PASS } from "@/data/test-paper";
import { ASME_TEST_IDS, ASME_TEST_PASS } from "@/data/asme";
import type { CodeRegion, Question } from "@/data/types";
import { useProgress } from "@/lib/store";
import { formatPct } from "@/lib/utils";

import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/test")({
  head: () =>
    pageHead({
      title: "EN 81 test · elevator regulations",
      description:
        "A short test on EN 81 and the duties around a passenger lift, a firefighter lift, and an evacuation lift.",
      path: "/test",
    }),
  component: EuTest,
});

const EU_PAPER: Question[] = TEST_IDS.map((id) => QUESTION_BY_ID[id]);
const ASME_PAPER: Question[] = ASME_TEST_IDS.map((id) => QUESTION_BY_ID[id]);

function EuTest() {
  return <TestSession region="eu" />;
}

export function TestSession({ region }: { region: CodeRegion }) {
  const markAnswer = useProgress((s) => s.markAnswer);
  const paper = region === "asme" ? ASME_PAPER : EU_PAPER;
  const passMark = region === "asme" ? ASME_TEST_PASS : TEST_PASS;
  const [index, setIndex] = useState(0);
  const [hits, setHits] = useState(0);
  const [misses, setMisses] = useState<Question[]>([]);
  const [done, setDone] = useState(false);

  const current = paper[index];
  const passed = hits >= passMark;

  if (done) {
    return (
      <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <p className="text-sm font-medium uppercase tracking-wider text-accent">
          {region === "asme" ? "ASME test" : "Test"}
        </p>
        <h1 className="mt-2 font-display text-4xl font-semibold">
          {passed ? "Pass" : "Not yet"}
        </h1>
        <p className="mt-3 text-lg text-muted">
          {hits} of {paper.length} correct. The pass mark is {passMark}. One
          attempt each. No second chance on the same question.
        </p>
        <p className="mt-6 font-display text-5xl tabular-nums">{formatPct(hits / paper.length)}</p>
        {misses.length ? (
          <section className="mt-10">
            <h2 className="font-display text-2xl font-semibold">What to look at again</h2>
            <ul className="mt-4 space-y-3">
              {misses.map((q) => (
                <li key={q.id} className="rounded-xl bg-paper p-5 text-paper-fg">
                  <p className="font-medium">{q.prompt}</p>
                  <p className="mt-2 text-base leading-relaxed">{q.plain}</p>
                </li>
              ))}
            </ul>
          </section>
        ) : null}
        <div className="mt-8 flex flex-wrap gap-3">
          <Button
            onClick={() => {
              setIndex(0);
              setHits(0);
              setMisses([]);
              setDone(false);
            }}
          >
            Sit it again
          </Button>
          {region === "asme" ? (
            <Link to="/asme/practice" className={buttonVariants({ variant: "secondary" })}>
              Back to practice
            </Link>
          ) : (
            <Link to="/practice" className={buttonVariants({ variant: "secondary" })}>
              Back to practice
            </Link>
          )}
        </div>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-12">
      <div className="flex flex-wrap items-baseline justify-between gap-3">
        <p className="text-sm font-medium uppercase tracking-wider text-accent">
          Test · question {index + 1} of {paper.length}
        </p>
        {region === "asme" ? (
          <Link to="/asme/practice" className="text-sm text-muted hover:text-fg">
            Practice instead
          </Link>
        ) : (
          <Link to="/practice" className="text-sm text-muted hover:text-fg">
            Practice instead
          </Link>
        )}
      </div>
      <p className="mt-2 text-base text-muted">
        One answer. The page does not teach you until the score.
      </p>
      <Progress value={(index + 1) / paper.length} className="mt-4 mb-8" />
      <QuestionCard
        key={current.id}
        question={current}
        index={index}
        total={paper.length}
        exam
        onResolved={(correct) => {
          markAnswer({
            questionId: current.id,
            skillId: current.skillId,
            correct,
            firstTry: correct,
          });
          if (correct) setHits((n) => n + 1);
          else setMisses((list) => [...list, current]);
          if (index + 1 >= paper.length) setDone(true);
          else setIndex((i) => i + 1);
        }}
      />
    </main>
  );
}

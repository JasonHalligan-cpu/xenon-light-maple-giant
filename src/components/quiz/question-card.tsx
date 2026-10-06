import { useEffect, useRef, useState } from "react";
import type { Question } from "@/data/types";
import { Button } from "@/components/ui/button";
import { StatuteSplit } from "@/components/learn/statute-split";
import { cn } from "@/lib/utils";

export function QuestionCard({
  question,
  index,
  total,
  onResolved,
  onCorrect,
  onMiss,
  holdOnMiss = false,
  exam = false,
}: {
  question: Question;
  index: number;
  total: number;
  onResolved: (correct: boolean, firstTry: boolean) => void;
  onCorrect?: () => void;
  onMiss?: (picked: number) => void;
  /** Practice: a wrong pick is taught from another angle, not retried here. */
  holdOnMiss?: boolean;
  /** Test: one pick, then the answer. No retry. */
  exam?: boolean;
}) {
  const [picked, setPicked] = useState<number | null>(null);
  const [firstWrong, setFirstWrong] = useState(false);
  const [locked, setLocked] = useState(false);
  const continueRef = useRef<HTMLButtonElement>(null);

  const revealed = picked !== null;
  const correct = picked === question.answer;

  useEffect(() => {
    if (!locked) return;
    continueRef.current?.scrollIntoView({ block: "center", behavior: "smooth" });
  }, [locked]);

  function choose(i: number) {
    if (locked) return;
    setPicked(i);
    if (exam) {
      setLocked(true);
      if (i !== question.answer) setFirstWrong(true);
      else onCorrect?.();
      return;
    }
    if (i === question.answer) {
      setLocked(true);
      onCorrect?.();
    } else {
      setFirstWrong(true);
      onMiss?.(i);
    }
  }

  return (
    <div className="space-y-5">
      <p className="text-sm font-medium uppercase tracking-wider text-faint">
        {index + 1} of {total}
      </p>
      <h2 className="font-display text-2xl font-semibold text-pretty sm:text-3xl">
        {question.prompt}
      </h2>
      <ul className="space-y-2">
        {question.choices.map((choice, i) => {
          const isPicked = picked === i;
          const isAnswer = i === question.answer;
          const show = revealed && (isPicked || (locked && isAnswer));
          return (
            <li key={choice}>
              <button
                type="button"
                disabled={locked}
                onClick={() => choose(i)}
                className={cn(
                  "flex min-h-14 w-full items-start gap-3 rounded-xl px-4 py-3 text-left text-base transition-colors duration-150",
                  "shadow-[var(--shadow-border)]",
                  !show && "bg-surface hover:bg-inset",
                  show && isAnswer && "bg-green text-ok-fg",
                  show && isPicked && !isAnswer && "bg-orange text-accent-fg",
                )}
              >
                <span className="mt-0.5 font-mono text-xs text-muted">
                  {String.fromCharCode(65 + i)}
                </span>
                <span>{choice}</span>
              </button>
            </li>
          );
        })}
      </ul>
      {revealed && !(holdOnMiss && !locked) ? (
        <div className="space-y-4">
          {locked ? (
            <Button
              ref={continueRef}
              onClick={() => onResolved(correct, !firstWrong)}
              className="w-full sm:w-auto"
            >
              Continue
            </Button>
          ) : (
            <p className="text-base text-muted">Try again.</p>
          )}
          <StatuteSplit
            statute={question.statute}
            plain={question.plain}
            why={question.why}
          />
        </div>
      ) : null}
    </div>
  );
}

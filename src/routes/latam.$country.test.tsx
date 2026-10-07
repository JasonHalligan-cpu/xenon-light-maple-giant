import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { LATAM_BY_SLUG } from "@/data/latam";
import { pageHead } from "@/lib/seo";
import { useProgress } from "@/lib/store";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/latam/$country/test")({
  head: ({ params }) => {
    const country = LATAM_BY_SLUG[params.country];
    return pageHead({
      title: country ? `${country.name} test` : "Test",
      description: country ? `A four-question test for ${country.name}. Pass mark 3.` : "Country test.",
      path: `/latam/${params.country}/test`,
    });
  },
  component: CountryTest,
});

function CountryTest() {
  const { country: slug } = Route.useParams();
  const country = LATAM_BY_SLUG[slug];
  const markLatamAnswer = useProgress((s) => s.markLatamAnswer);
  const [index, setIndex] = useState(0);
  const [picks, setPicks] = useState<number[]>([]);
  const [locked, setLocked] = useState(false);
  if (!country) return null;
  const finished = picks.length >= country.questions.length;
  if (finished) {
    const score = picks.filter((pick, i) => pick === country.questions[i].answer).length;
    const passed = score >= 3;
    return (
      <main className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
        <p className="text-sm font-medium uppercase tracking-wider text-accent">{country.name}</p>
        <h1 className="mt-2 font-display text-4xl font-semibold">{passed ? "Pass" : "Not yet"}</h1>
        <p className="mt-3 text-lg text-muted">
          {score} of {country.questions.length}. The pass mark is 3.
        </p>
        <p className="mt-3 text-lg text-muted">Misses come back in practice, in simpler words.</p>
        <ul className="mt-8 space-y-4">
          {country.questions.map((question) => (
            <li key={question.id} className="space-y-3">
              <p className="font-display text-xl font-semibold">{question.prompt}</p>
              <article className="rounded-xl border-l-4 border-green bg-paper p-5 text-paper-fg shadow-[var(--shadow-border)] sm:p-6">
                <p className="text-sm font-medium uppercase tracking-wider text-paper-muted">
                  What it means
                </p>
                <p className="mt-2 text-lg leading-relaxed">{question.plain}</p>
              </article>
            </li>
          ))}
        </ul>
      </main>
    );
  }
  const question = country.questions[index];
  const picked = locked ? picks[index] : null;
  return (
    <main className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <p className="text-sm font-medium uppercase tracking-wider text-accent">
        {country.name} · Test · {index + 1} of {country.questions.length}
      </p>
      <h1 className="mt-2 font-display text-3xl font-semibold text-pretty">{question.prompt}</h1>
      <p className="mt-2 text-sm text-muted">One sitting. You cannot change an answer.</p>
      <ul className="mt-6 space-y-3">
        {question.choices.map((choice, choiceIndex) => {
          const revealed = picked !== null && picked !== undefined;
          const isPicked = picked === choiceIndex;
          const isAnswer = choiceIndex === question.answer;
          const show = revealed && (isPicked || isAnswer);
          return (
            <li key={choice}>
              <button
                type="button"
                disabled={locked}
                onClick={() => {
                  if (locked) return;
                  setLocked(true);
                  setPicks((current) => [...current, choiceIndex]);
                  markLatamAnswer({
                    slug,
                    questionId: question.id,
                    correct: choiceIndex === question.answer,
                    firstTry: true,
                  });
                }}
                className={cn(
                  "w-full rounded-2xl p-4 text-left text-base shadow-[var(--shadow-border)] transition-colors duration-150",
                  !show && "bg-surface hover:bg-inset",
                  show && isAnswer && "bg-green text-ok-fg",
                  show && isPicked && !isAnswer && "bg-orange text-accent-fg",
                )}
              >
                {choice}
              </button>
            </li>
          );
        })}
      </ul>
      {locked ? (
        <div className="mt-6 space-y-4">
          <article className="rounded-xl border-l-4 border-green bg-paper p-5 text-paper-fg shadow-[var(--shadow-border)] sm:p-6">
            <p className="text-sm font-medium uppercase tracking-wider text-paper-muted">
              What it means
            </p>
            <p className="mt-2 text-lg leading-relaxed">{question.plain}</p>
          </article>
          <button
            type="button"
            className="inline-flex min-h-11 items-center rounded-full bg-orange px-5 text-accent-fg"
            onClick={() => {
              setIndex((value) => value + 1);
              setLocked(false);
            }}
          >
            Next
          </button>
        </div>
      ) : null}
    </main>
  );
}

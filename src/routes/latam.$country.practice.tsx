import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { pickLatamQuestions } from "@/lib/adaptive";
import { useProgress } from "@/lib/store";
import { Button, buttonVariants } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { LATAM_BY_SLUG, type LatamQuestion } from "@/data/latam";
import { pageHead } from "@/lib/seo";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/latam/$country/practice")({
  head: ({ params }) => {
    const country = LATAM_BY_SLUG[params.country];
    return pageHead({
      title: country ? `${country.name} practice` : "Practice",
      description: country
        ? `Practice for ${country.name} only. A miss brings that country’s rule back in simpler words.`
        : "Country practice.",
      path: `/latam/${params.country}/practice`,
    });
  },
  component: CountryPractice,
});

function snapshotDeck(slug: string, questions: readonly LatamQuestion[]) {
  const s = useProgress.getState();
  return pickLatamQuestions({
    questions,
    mastery: s.latamMastery ?? {},
    sm2: s.sm2,
    recentIds: s.latamRecent?.[slug] ?? [],
    slug,
  });
}

function checkFor(question: LatamQuestion) {
  const correct = question.choices[question.answer] ?? question.plain;
  const wrongs = question.choices.filter((_, i) => i !== question.answer);
  const pool = [correct, wrongs[0] ?? question.plain, wrongs[1] ?? wrongs[0] ?? question.plain];
  const shift = [...question.id].reduce((n, ch) => n + ch.charCodeAt(0), 0) % pool.length;
  const choices = [...pool.slice(shift), ...pool.slice(0, shift)];
  return {
    prompt: "In those words, which line is the rule?",
    choices,
    answer: choices.indexOf(correct),
  };
}

function CountryPractice() {
  const { country: slug } = Route.useParams();
  const country = LATAM_BY_SLUG[slug];
  const markLatamAnswer = useProgress((s) => s.markLatamAnswer);
  const hydrated = useProgress((s) => s.hydrated);
  const [deck, setDeck] = useState<LatamQuestion[] | null>(null);
  const [index, setIndex] = useState(0);
  const [hits, setHits] = useState(0);
  const [done, setDone] = useState(false);
  const [phase, setPhase] = useState<"ask" | "teach" | "check">("ask");
  const [picked, setPicked] = useState<number | null>(null);
  const [anglePick, setAnglePick] = useState<number | null>(null);

  useEffect(() => {
    if (!hydrated || deck !== null || !country) return;
    setDeck(snapshotDeck(slug, country.questions));
  }, [hydrated, deck, country, slug]);

  if (!country) return null;

  if (!hydrated || deck === null) {
    return (
      <main className="mx-auto max-w-3xl px-4 py-16">
        <p className="text-muted">Loading your questions…</p>
      </main>
    );
  }

  function restart() {
    setDeck(snapshotDeck(slug, country!.questions));
    setIndex(0);
    setHits(0);
    setDone(false);
    setPhase("ask");
    setPicked(null);
    setAnglePick(null);
  }

  if (done || !deck[index]) {
    return (
      <main className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
        <p className="text-sm font-medium uppercase tracking-wider text-accent">{country.name}</p>
        <h1 className="mt-2 font-display text-4xl font-semibold">Set closed</h1>
        <p className="mt-3 text-lg text-muted">
          {hits} of {deck.length} were clear the first time. The others come back in simpler words.
        </p>
        <p className="mt-3 text-lg text-muted">A miss is not a mark against you.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button onClick={restart}>Another set</Button>
          <Link
            to="/latam/$country/test"
            params={{ country: slug }}
            className={buttonVariants({ variant: "secondary" })}
          >
            Sit the test
          </Link>
        </div>
      </main>
    );
  }

  const question = deck[index];
  const check = checkFor(question);

  function leaveQuestion(firstTryCorrect: boolean) {
    markLatamAnswer({
      slug,
      questionId: question.id,
      correct: firstTryCorrect,
      firstTry: firstTryCorrect,
    });
    if (firstTryCorrect) setHits((value) => value + 1);
    setPhase("ask");
    setPicked(null);
    setAnglePick(null);
    if (index + 1 >= deck!.length) setDone(true);
    else setIndex((value) => value + 1);
  }

  return (
    <main className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <div className="flex flex-wrap items-baseline justify-between gap-3">
        <p className="text-sm font-medium uppercase tracking-wider text-accent">
          {country.name} · Question {index + 1} of {deck.length}
        </p>
        <Link
          to="/latam/$country/test"
          params={{ country: slug }}
          className="text-sm text-yellow hover:underline"
        >
          Sit the test
        </Link>
      </div>
      <Progress value={(index + 1) / deck.length} className="mt-4 mb-3" />
      <p className="mb-8 mt-4 text-base text-muted">
        These questions stay on this country’s own book. Bayesian Knowledge Tracing updates how likely it is you already know that rule. A miss is not a mark. The rule comes back in simpler words.
      </p>
      {phase === "ask" ? (
        <>
          <h1 className="font-display text-3xl font-semibold text-pretty">{question.prompt}</h1>
          <ul className="mt-6 space-y-3">
            {question.choices.map((choice, choiceIndex) => {
              const revealed = picked !== null;
              const isPicked = picked === choiceIndex;
              const isAnswer = choiceIndex === question.answer;
              const show = revealed && (isPicked || isAnswer);
              return (
                <li key={choice}>
                  <button
                    type="button"
                    disabled={revealed}
                    onClick={() => setPicked(choiceIndex)}
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
          {picked !== null ? (
            <div className="mt-6 space-y-4">
              <article className="rounded-xl border-l-4 border-green bg-paper p-5 text-paper-fg shadow-[var(--shadow-border)] sm:p-6">
                <p className="text-sm font-medium uppercase tracking-wider text-paper-muted">
                  What it means
                </p>
                <p className="mt-2 text-lg leading-relaxed">{question.plain}</p>
              </article>
              {picked === question.answer ? (
                <Button onClick={() => leaveQuestion(true)}>Continue</Button>
              ) : (
                <Button onClick={() => setPhase("teach")}>See it in simpler words</Button>
              )}
            </div>
          ) : null}
        </>
      ) : (
        <div className="space-y-5">
          <h2 className="font-display text-3xl font-semibold text-pretty">
            A miss is not a mark against you.
          </h2>
          <p className="text-lg text-muted">Here is the same rule in simpler words.</p>
          <article className="rounded-xl border-l-4 border-green bg-paper p-5 text-paper-fg shadow-[var(--shadow-border)] sm:p-6">
            <p className="text-sm font-medium uppercase tracking-wider text-paper-muted">
              What it means
            </p>
            <p className="mt-2 text-lg leading-relaxed">{question.plain}</p>
          </article>
          {phase === "teach" ? (
            <Button onClick={() => setPhase("check")}>Check it in these words</Button>
          ) : (
            <div className="space-y-3">
              <h3 className="font-display text-xl font-semibold">{check.prompt}</h3>
              <ul className="space-y-2">
                {check.choices.map((choice, choiceIndex) => {
                  const revealed = anglePick !== null;
                  const isAnswer = choiceIndex === check.answer;
                  const isPicked = anglePick === choiceIndex;
                  const show = revealed && (isPicked || isAnswer);
                  return (
                    <li key={choice}>
                      <button
                        type="button"
                        disabled={revealed}
                        onClick={() => setAnglePick(choiceIndex)}
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
              {anglePick !== null ? (
                <div className="space-y-3">
                  <p className="text-base text-muted">
                    {anglePick === check.answer
                      ? "Yes. That is the rule, in ordinary words."
                      : "That is all right. The highlighted line is the plain version."}
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

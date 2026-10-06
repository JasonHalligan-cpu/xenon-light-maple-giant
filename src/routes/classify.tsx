import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  CLASSIFIER_DEFAULT,
  recommend,
  type ClassifierAnswers,
} from "@/data/classifier";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/classify")({ component: ClassifyPage });

type Key = keyof ClassifierAnswers;

const STEPS: {
  key: Key;
  q: string;
  hint: string;
  showIf?: (a: ClassifierAnswers) => boolean;
}[] = [
  {
    key: "existing",
    q: "Is this an elevator already in the shaft?",
    hint: "Existing metal lives under 80, 82 and LOLER. 76 is for new cars.",
  },
  {
    key: "firefightersRequired",
    q: "Does the fire strategy require a firefighters elevator?",
    hint: "Usually a height or risk trigger in national fire guidance — not a sales choice.",
  },
  {
    key: "needEvacuation",
    q: "Must people who cannot use stairs have an elevator as a way out?",
    hint: "If yes, you are in EN 81-76 territory (for a new elevator) plus a human plan B.",
  },
  {
    key: "oneEel",
    q: "Is there only one evacuation exit level?",
    hint: "One way-out floor points at Class A. Several exit floors point at Class B.",
    showIf: (a) => a.existing === false && a.needEvacuation === true,
  },
  {
    key: "secondaryPower",
    q: "Will the building have a secondary power supply for this elevator?",
    hint: "No generator and a simple plot can still be Class A — if rescue-to-exit on mains failure is real.",
    showIf: (a) => a.existing === false && a.needEvacuation === true,
  },
  {
    key: "remote",
    q: "Do you need someone in a control room to drive the car?",
    hint: "Remote-assisted is a Class B feature. It needs a person, video and speech whenever the building is occupied.",
    showIf: (a) => a.existing === false && a.needEvacuation === true,
  },
  {
    key: "staffed",
    q: "Is the building staffed whenever people might need to leave?",
    hint: "Unstaffed nights belong to automatic mode — the only independent self-rescue.",
    showIf: (a) => a.existing === false && a.needEvacuation === true,
  },
];

function ClassifyPage() {
  const [answers, setAnswers] = useState<ClassifierAnswers>(CLASSIFIER_DEFAULT);
  const visible = STEPS.filter((s) => !s.showIf || s.showIf(answers));
  const next = visible.find((s) => answers[s.key] === null);
  const rec = recommend(answers);

  function set(key: Key, value: boolean) {
    setAnswers((prev) => {
      const nextAns = { ...prev, [key]: value };
      if (key === "existing" && value) {
        return {
          ...nextAns,
          oneEel: null,
          secondaryPower: null,
          remote: null,
          staffed: null,
        };
      }
      if (key === "needEvacuation" && !value) {
        return {
          ...nextAns,
          oneEel: null,
          secondaryPower: null,
          remote: null,
          staffed: null,
        };
      }
      return nextAns;
    });
  }

  return (
    <main className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <p className="text-sm font-medium uppercase tracking-wider text-accent">
        Building classifier
      </p>
      <h1 className="mt-2 font-display text-4xl font-semibold sm:text-5xl">
        Match the machine to the plot
      </h1>
      <p className="mt-3 text-muted">
        Answer in ordinary language. ElevatorIQ returns the stack under EU regulations — 20, 70, 72, 73,
        76 — and the mode that would survive a fire strategy meeting. Not a
        certificate.
      </p>

      <figure className="mt-8 overflow-hidden rounded-2xl shadow-[var(--shadow-border)]">
        <img
          src="/graphics/shaft-floors.jpg"
          alt="Cutaway of a UK building with three elevator cars in the shaft"
          className="aspect-video w-full object-cover"
        />
      </figure>

      <ol className="mt-8 space-y-4">
        {visible.map((step) => {
          const value = answers[step.key];
          const isNext = next?.key === step.key;
          if (value === null && !isNext) return null;
          return (
            <li
              key={step.key}
              className="rounded-2xl bg-surface p-5 shadow-[var(--shadow-border)]"
            >
              <p className="font-display text-xl font-semibold">{step.q}</p>
              <p className="mt-1 text-base text-muted">{step.hint}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={() => set(step.key, true)}
                  className={cn(
                    "min-h-12 rounded-lg px-5 text-base",
                    value === true ? "bg-accent text-accent-fg" : "bg-raised text-fg",
                  )}
                >
                  Yes
                </button>
                <button
                  type="button"
                  onClick={() => set(step.key, false)}
                  className={cn(
                    "min-h-12 rounded-lg px-5 text-base",
                    value === false ? "bg-accent text-accent-fg" : "bg-raised text-fg",
                  )}
                >
                  No
                </button>
              </div>
            </li>
          );
        })}
      </ol>

      {rec ? (
        <section className="mt-8 space-y-4">
          <div className="rounded-2xl bg-paper p-6 text-paper-fg">
            <p className="text-sm font-medium uppercase tracking-wider text-paper-muted">
              What it means
            </p>
            <h2 className="mt-2 font-display text-3xl font-semibold">{rec.headline}</h2>
            <p className="mt-3 leading-relaxed">{rec.plain}</p>
          </div>
          <div className="rounded-2xl bg-inset p-6">
            <h3 className="font-display text-xl font-semibold">The stack</h3>
            <ul className="mt-3 space-y-2 text-base text-muted">
              {rec.stack.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
            <h3 className="mt-6 font-display text-xl font-semibold">Mode</h3>
            <p className="mt-2 text-base text-muted">{rec.mode}</p>
            <h3 className="mt-6 font-display text-xl font-semibold">Do not skip</h3>
            <ul className="mt-3 space-y-2 text-base text-muted">
              {rec.caveats.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button
              variant="secondary"
              onClick={() => setAnswers(CLASSIFIER_DEFAULT)}
            >
              Start over
            </Button>
            <Link to="/library/$id" params={{ id: "en81-76" }} className={buttonVariants()}>
              Read 76
            </Link>
            <Link to="/specs" className={buttonVariants({ variant: "secondary" })}>
              Open spec sheets
            </Link>
          </div>
        </section>
      ) : null}
    </main>
  );
}

import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Button, buttonVariants } from "@/components/ui/button";
import { BackLink, NextLink, PageArrows } from "@/components/layout/page-arrows";
import { Progress } from "@/components/ui/progress";
import { SCENARIO_BY_ID, SCENARIOS } from "@/data/scenarios";
import { useProgress } from "@/lib/store";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/scenarios/$id")({ component: ScenarioPage });

function ScenarioPage() {
  const { id } = Route.useParams();
  const scenario = SCENARIO_BY_ID[id];
  const completeScenario = useProgress((s) => s.completeScenario);
  const [beat, setBeat] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [hits, setHits] = useState(0);
  const [finished, setFinished] = useState(false);

  if (!scenario) {
    return (
      <main className="mx-auto max-w-2xl px-4 py-16">
        <p>Unknown scenario.</p>
        <Link to="/scenarios" className="mt-4 inline-block text-accent">
          All scenarios
        </Link>
      </main>
    );
  }

  const current = scenario.beats[beat];
  const totalBeats = scenario.beats.length;
  const scenarioIndex = SCENARIOS.findIndex((item) => item.id === scenario.id);
  const prevScenario = scenarioIndex > 0 ? SCENARIOS[scenarioIndex - 1] : undefined;
  const nextScenario =
    scenarioIndex >= 0 && scenarioIndex < SCENARIOS.length - 1
      ? SCENARIOS[scenarioIndex + 1]
      : undefined;
  const arrows = (
    <PageArrows
      back={prevScenario ? <BackLink to="/scenarios/$id" params={{ id: prevScenario.id }} /> : null}
      next={nextScenario ? <NextLink to="/scenarios/$id" params={{ id: nextScenario.id }} /> : null}
    />
  );

  function advance(correct: boolean) {
    const nextHits = hits + (correct ? 1 : 0);
    if (beat + 1 >= totalBeats) {
      completeScenario(scenario.id, scenario.skillIds, nextHits / totalBeats);
      setHits(nextHits);
      setFinished(true);
      return;
    }
    setHits(nextHits);
    setBeat((b) => b + 1);
    setPicked(null);
  }

  if (finished) {
    return (
      <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        {arrows}
        <p className="text-sm font-medium uppercase tracking-wider text-accent">
          Debrief
        </p>
        <h1 className="mt-2 font-display text-4xl font-semibold">{scenario.title}</h1>
        <p className="mt-4 text-lg text-muted">{scenario.debrief}</p>
        <p className="mt-6 font-mono text-sm tabular-nums text-faint">
          {hits} / {totalBeats} calls that would survive a meeting
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link to="/scenarios" className={buttonVariants()}>
            More landings
          </Link>
          <Link to="/classify" className={buttonVariants({ variant: "secondary" })}>
            Specify a building
          </Link>
        </div>
      </main>
    );
  }

  const revealed = picked !== null;
  const choice = revealed ? current.choices[picked] : null;

  return (
    <main className="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-12">
      {arrows}
      <p className="text-sm font-medium uppercase tracking-wider text-accent">
        {scenario.role}
      </p>
      <h1 className="mt-2 font-display text-4xl font-semibold">{scenario.title}</h1>
      <p className="mt-3 text-sm text-muted">{scenario.setting}</p>
      <Progress value={(beat + 1) / totalBeats} className="mt-6" />
      <h2 className="mt-8 font-display text-2xl font-semibold text-pretty">
        {current.prompt}
      </h2>
      <ul className="mt-5 space-y-2">
        {current.choices.map((c, i) => {
          const isPicked = picked === i;
          const show = revealed && isPicked;
          return (
            <li key={c.text}>
              <button
                type="button"
                disabled={revealed}
                onClick={() => setPicked(i)}
                className={cn(
                  "w-full rounded-xl px-4 py-3 text-left text-base min-h-14 shadow-[var(--shadow-border)]",
                  !show && "bg-raised hover:bg-surface",
                  show && c.correct && "bg-ok/20",
                  show && !c.correct && "bg-accent/20",
                )}
              >
                {c.text}
              </button>
            </li>
          );
        })}
      </ul>
      {choice ? (
        <div className="mt-6 rounded-2xl bg-paper p-5 text-paper-fg">
          <p className="text-sm font-medium uppercase tracking-wider text-paper-muted">
            What it means
          </p>
          <p className="mt-2 text-lg leading-relaxed">{choice.feedback}</p>
          <Button
            className="mt-5"
            onClick={() => advance(choice.correct)}
          >
            {beat + 1 >= totalBeats ? "Debrief" : "Next beat"}
          </Button>
        </div>
      ) : null}
    </main>
  );
}

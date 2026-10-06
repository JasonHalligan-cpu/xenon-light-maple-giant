import { createFileRoute, Link } from "@tanstack/react-router";
import { SCENARIOS } from "@/data/scenarios";
import { useProgress } from "@/lib/store";
import { cn } from "@/lib/utils";
import { AdSlot } from "@/components/ads/ad-slot";

export const Route = createFileRoute("/scenarios/")({ component: ScenariosPage });

function ScenariosPage() {
  const done = useProgress((s) => s.scenariosDone);
  return (
    <main className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
      <p className="text-sm font-medium uppercase tracking-wider text-accent">
        Worked cases
      </p>
      <h1 className="mt-2 font-display text-4xl font-semibold sm:text-5xl">
        A real landing, a real choice
      </h1>
      <p className="mt-3 max-w-2xl text-muted">
        Retrieval beats rereading. These are the meetings and midnights the
        standards were written for — with feedback in everyday language.
      </p>
      <ul className="mt-8 grid gap-3 sm:grid-cols-2">
        {SCENARIOS.map((s) => {
          const complete = done.includes(s.id);
          return (
            <li key={s.id}>
              <Link
                to="/scenarios/$id"
                params={{ id: s.id }}
                className={cn(
                  "block min-h-36 rounded-2xl p-5 shadow-[var(--shadow-border)] transition-colors",
                  complete ? "bg-ok/10" : "bg-surface hover:bg-raised",
                )}
              >
                <span className="text-sm font-medium uppercase tracking-wider text-faint">
                  {s.role}
                </span>
                <span className="mt-2 block font-display text-2xl font-semibold">
                  {s.title}
                </span>
                <span className="mt-2 block text-base text-muted">{s.setting}</span>
              </Link>
            </li>
          );
        })}
      </ul>
      <div className="mt-10">
        <AdSlot slot="scenario" size="card" />
      </div>
    </main>
  );
}

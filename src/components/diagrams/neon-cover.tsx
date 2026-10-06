import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { cn, formatPct } from "@/lib/utils";

export function NeonCover({
  placementDone,
  nextId,
  overall,
  mastered,
  streak,
  answers,
  correct,
  hydrated,
}: {
  placementDone: boolean;
  nextId: string;
  overall: number;
  mastered: number;
  streak: number;
  answers: number;
  correct: number;
  hydrated: boolean;
}) {
  return (
    <section className="relative isolate min-h-dvh overflow-hidden bg-night text-night-fg">
      <img
        src="/graphics/lift-hero.jpg"
        alt="Futuristic closed elevator: chrome doors, cyan edges, orange up-lantern"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-night via-night/50 to-night/10" />
      <div className="relative mx-auto flex min-h-dvh max-w-6xl flex-col justify-end gap-6 px-4 pb-10 pt-24 sm:px-6 sm:pb-14 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-xl">
          <p className="font-mono text-sm font-medium uppercase tracking-wider text-cyan neon-cyan">
            One elevator · EU & ASME regulations
          </p>
          <h1 className="mt-3 font-display text-5xl font-semibold leading-[0.95] text-pretty sm:text-7xl">
            <span className="neon-text">Call this elevator.</span>
            <span className="mt-2 block italic text-yellow neon-acid">
              Then learn what it must do.
            </span>
          </h1>
          <p className="mt-5 max-w-lg text-lg text-night-fg/90 sm:text-xl">
            ElevatorIQ is for elevator professionals and anyone who has an
            interest in how the regulations affect our industry. EU and ASME
            rules are written here in simpler terms, so the legal duty
            is easier to understand.
          </p>
          <p className="mt-4 max-w-lg border-l-4 border-yellow pl-4 text-lg text-yellow">
            Bayesian Knowledge Tracing is the primary method. Each answer updates
            how likely it is you already know that rule. A miss is not a score.
            The rule comes back in simpler words.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            {!placementDone ? (
              <Link
                to="/placement"
                className={cn(buttonVariants({ size: "lg" }), "neon-box")}
              >
                Call the elevator
                <ArrowRight className="size-4" />
              </Link>
            ) : (
              <Link
                to="/learn/$id"
                params={{ id: nextId }}
                className={cn(buttonVariants({ size: "lg" }), "neon-box")}
              >
                Continue
                <ArrowRight className="size-4" />
              </Link>
            )}
            <Link
              to="/practice"
              className={cn(
                buttonVariants({ size: "lg", variant: "secondary" }),
                "neon-box-green",
              )}
            >
              Bayesian Knowledge Tracing
            </Link>
          </div>
        </div>
        <aside className="w-full max-w-sm rounded-2xl border border-cyan/50 bg-night/70 p-5 neon-box">
          <div className="flex items-baseline justify-between">
            <p className="font-mono text-sm uppercase tracking-wider text-cyan neon-cyan">
              Progress
            </p>
            <p className="font-mono text-sm tabular-nums text-night-fg/70">
              {mastered}/13 <span>lessons</span>
            </p>
          </div>
          <p className="mt-2 font-display text-4xl font-semibold tabular-nums neon-text">
            {formatPct(overall)}
          </p>
          <Progress value={overall} className="mt-3 bg-night-fg/20" tone="ok" />
          <dl className="mt-4 grid grid-cols-3 gap-3 text-sm">
            <div>
              <dt className="text-night-fg/55">Streak</dt>
              <dd className="font-mono tabular-nums">{hydrated ? streak : 0}d</dd>
            </div>
            <div>
              <dt className="text-night-fg/55">Answered</dt>
              <dd className="font-mono tabular-nums">{hydrated ? answers : 0}</dd>
            </div>
            <div>
              <dt className="text-night-fg/55">Accurate</dt>
              <dd className="font-mono tabular-nums">
                {hydrated && answers ? formatPct(correct / answers) : "—"}
              </dd>
            </div>
          </dl>
        </aside>
      </div>
    </section>
  );
}

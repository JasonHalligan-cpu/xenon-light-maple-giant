import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BookOpen, Layers3, Repeat, Sparkles } from "lucide-react";
import { LESSONS } from "@/data/lessons";
import { SKILL_BY_ID } from "@/data/skills";
import { buttonVariants } from "@/components/ui/button";
import { ShaftMap } from "@/components/learn/shaft-map";
import { ThreeLifts } from "@/components/diagrams/three-lifts";
import { UkLayers } from "@/components/diagrams/uk-layers";
import { UkShaft } from "@/components/diagrams/uk-shaft";
import { NeonCover } from "@/components/diagrams/neon-cover";
import { AdSlot } from "@/components/ads/ad-slot";
import { LIFT_SPECS } from "@/data/specs";
import { masteredCount, overallMastery, weakSkills } from "@/lib/adaptive";
import { useProgress } from "@/lib/store";
import { HOME_FAQS, homeJsonLd, pageHead } from "@/lib/seo";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/")({
  head: () =>
    pageHead({
      title: "ElevatorIQ · EN 81 and ASME A17.1 explained in plain language",
      description:
        "ElevatorIQ is for elevator professionals and anyone who has an interest in how the regulations affect our industry. EU and ASME rules are written here in simpler terms, so the legal duty is easier to understand.",
      path: "/",
      jsonLd: homeJsonLd(),
    }),
  component: Home,
});

function Home() {
  const hydrated = useProgress((s) => s.hydrated);
  const mastery = useProgress((s) => s.mastery);
  const lessonsDone = useProgress((s) => s.lessonsDone);
  const streak = useProgress((s) => s.streak);
  const answers = useProgress((s) => s.answers);
  const correct = useProgress((s) => s.correct);
  const placementDone = useProgress((s) => s.placementDone);

  const overall = hydrated ? overallMastery(mastery) : 0;
  const mastered = hydrated ? masteredCount(mastery) : 0;
  const weak = hydrated ? weakSkills(mastery, 2) : [];
  const euLessons = LESSONS.filter((l) => (l.region ?? "eu") === "eu");
  const nextLesson =
    euLessons.find((l) => !lessonsDone.includes(l.id)) ?? euLessons[0];

  return (
    <main>
      <NeonCover
        placementDone={placementDone}
        nextId={nextLesson.id}
        overall={overall}
        mastered={mastered}
        streak={streak}
        answers={answers}
        correct={correct}
        hydrated={hydrated}
      />
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12">
      <section className="overflow-hidden rounded-2xl bg-night shadow-[var(--shadow-elevator)]">
        <div className="grid lg:grid-cols-2">
          <img
            src="/graphics/lift-tower.jpg"
            alt="A single glass elevator climbing the outside of a night skyscraper"
            className="aspect-video w-full object-cover lg:aspect-auto lg:min-h-72"
          />
          <div className="p-6 text-night-fg sm:p-8">
            <p className="font-mono text-sm uppercase tracking-wider text-cyan neon-cyan">
              One car. The whole plot.
            </p>
            <h2 className="mt-2 font-display text-3xl font-semibold neon-text sm:text-4xl">
              Ride it. Then learn what it must do.
            </h2>
            <p className="mt-3 text-lg text-night-fg/80">
              Standard cars park. Firefighter cars wait for the fire brigade.
              Evacuation cars keep working for people who cannot use the stairs.
            </p>
            <Link
              to="/uk"
              className={cn(buttonVariants({ size: "lg" }), "mt-6 neon-box")}
            >
              Enter the shaft
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="mt-14">
        <AdSlot slot="lobby" size="billboard" />
      </section>

      <section className="mt-14">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <h2 className="font-display text-3xl font-semibold">Tap the shaft</h2>
            <p className="mt-2 max-w-2xl text-lg text-muted">
              Four bands in the building. Evacuation, firefighter, standard, then
              the LOLER diary. Tap a band.
            </p>
          </div>
          <Link
            to="/uk"
            className="inline-flex min-h-12 items-center gap-2 text-base text-accent hover:underline"
          >
            Full tour
            <ArrowRight className="size-4" />
          </Link>
        </div>
        <div className="mt-6">
          <UkShaft />
        </div>
      </section>

      <section className="mt-14">
        <h2 className="font-display text-3xl font-semibold">Law, recipe, health check</h2>
        <p className="mt-2 max-w-2xl text-lg text-muted">
          Under EU regulations those are three different conversations. Tap a layer.
        </p>
        <div className="mt-6">
          <UkLayers />
        </div>
      </section>

      <section className="mt-14">
        <h2 className="font-display text-3xl font-semibold">Three elevators, one alarm</h2>
        <p className="mt-2 max-w-2xl text-lg text-muted">
          Click on the elevator cars below. The standard elevator parks in the
          event of a fire. The firefighter elevator waits for the fire brigade.
          Evacuation elevators — if you specified EN 81-76 — keep working for
          people who cannot use the stairs.
        </p>
        <div className="mt-6">
          <ThreeLifts />
        </div>
      </section>

      <section className="mt-14">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <h2 className="font-display text-3xl font-semibold">Detailed specifications</h2>
            <p className="mt-2 max-w-2xl text-lg text-muted">
              Load, speed, car size, doors, power, water. Typical UK figures,
              the standard, and the landing version.
            </p>
          </div>
          <Link to="/specs" className="inline-flex min-h-12 items-center gap-2 text-base text-accent hover:underline">
            All spec sheets
            <ArrowRight className="size-4" />
          </Link>
        </div>
        <ul className="mt-6 grid gap-3 sm:grid-cols-3">
          {LIFT_SPECS.slice(0, 3).map((spec) => (
            <li key={spec.id}>
              <Link
                to="/specs/$id"
                params={{ id: spec.id }}
                className="block min-h-36 rounded-2xl bg-surface p-5 shadow-[var(--shadow-border)] hover:bg-raised"
              >
                <span className="font-mono text-sm uppercase tracking-wider text-accent">
                  {spec.kicker}
                </span>
                <span className="mt-2 block font-display text-2xl font-semibold">{spec.name}</span>
                <span className="mt-2 block text-base text-muted">{spec.who}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-14 grid min-w-0 gap-6 lg:grid-cols-2">
        <div className="min-w-0 rounded-2xl bg-surface p-5 shadow-[var(--shadow-border)] sm:p-6">
          <div className="flex items-center justify-between">
            <h2 className="font-display text-2xl font-semibold">Your shaft</h2>
            <Link to="/learn" className="text-sm text-muted hover:text-fg">
              All lessons
            </Link>
          </div>
          <div className="mt-4">
            <ShaftMap mastery={mastery} compact />
          </div>
        </div>
        <div className="min-w-0 space-y-4">
          <div className="rounded-2xl bg-paper p-5 text-paper-fg sm:p-6">
            <p className="text-sm font-medium uppercase tracking-wider text-paper-muted">
              Next floor
            </p>
            <h3 className="mt-2 font-display text-3xl font-semibold">
              {nextLesson.title}
            </h3>
            <p className="mt-2 text-paper-muted">{nextLesson.summary}</p>
            <Link
              to="/learn/$id"
              params={{ id: nextLesson.id }}
              className={cn(buttonVariants({ variant: "primary" }), "mt-5")}
            >
              Open lesson
              <ArrowRight className="size-4" />
            </Link>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            <Link
              to="/drill"
              className="rounded-2xl bg-raised p-5 shadow-[var(--shadow-border)] transition-colors hover:bg-surface"
            >
              <Repeat className="size-5 text-accent" />
              <p className="mt-3 font-display text-xl font-semibold">Spaced drill</p>
              <p className="mt-1 text-base text-muted">
                Cards come back just as you start to forget them.
              </p>
            </Link>
            <Link
              to="/library/$id"
              params={{ id: "en81-76" }}
              className="rounded-2xl bg-raised p-5 shadow-[var(--shadow-border)] transition-colors hover:bg-surface"
            >
              <BookOpen className="size-5 text-accent" />
              <p className="mt-3 font-display text-xl font-semibold">EN 81-76</p>
              <p className="mt-1 text-base text-muted">
                Featured: self-rescue for people the stairs cannot carry.
              </p>
            </Link>
            <Link
              to="/scenarios"
              className="rounded-2xl bg-raised p-5 shadow-[var(--shadow-border)] transition-colors hover:bg-surface"
            >
              <Layers3 className="size-5 text-accent" />
              <p className="mt-3 font-display text-xl font-semibold">Scenarios</p>
              <p className="mt-1 text-base text-muted">
                Midnight hotel, listed shaft, substitution in the meeting.
              </p>
            </Link>
          </div>
          {weak.length ? (
            <p className="text-sm text-muted">
              Weakest floors right now:{" "}
              {weak.map((id) => SKILL_BY_ID[id].name).join(" · ")}
            </p>
          ) : null}
        </div>
      </section>

      <section className="mt-14 rounded-2xl bg-inset p-6 sm:p-8">
        <div className="flex items-start gap-3">
          <Sparkles className="mt-1 size-5 text-accent" />
          <div>
            <h2 className="font-display text-2xl font-semibold">Bayesian Knowledge Tracing</h2>
            <p className="mt-3 max-w-3xl text-lg text-fg">
              This is the primary way ElevatorIQ teaches. Each answer updates how
              likely it is you already know that rule. A miss is not a score. It
              brings the same rule back in simpler words, with a picture.
            </p>
            <ul className="mt-4 grid gap-2 text-base text-muted sm:grid-cols-2">
              <li>Diagnostic placement before the first lesson path.</li>
              <li>Mastery gates: weak floors return until they hold.</li>
              <li>Spaced repetition (SM-2) so 76 does not evaporate overnight.</li>
              <li>Interleaving 72, 73 and 76 so you stop mixing them up.</li>
              <li>Dual coding: statute language beside ordinary words, every time.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mt-14">
        <h2 className="font-display text-3xl font-semibold">
          EN 81 and ASME A17.1, in plain language
        </h2>
        <p className="mt-3 max-w-3xl text-lg text-muted">
          Look up a firefighter lift, an evacuation lift, LOLER, EN 81-70, EN
          81-72, EN 81-73, EN 81-76, or ASME A17.1. Each page says what the
          regulation is for, in ordinary words.
        </p>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {[
            { to: "/learn/$id" as const, params: { id: "base-20" }, label: "EN 81-20, the base for a new passenger lift" },
            { to: "/learn/$id" as const, params: { id: "access-70" }, label: "EN 81-70, a lift a wheelchair user can use" },
            { to: "/learn/$id" as const, params: { id: "fire-72" }, label: "EN 81-72, the firefighter lift" },
            { to: "/learn/$id" as const, params: { id: "fire-73" }, label: "EN 81-73, what a normal lift does in a fire" },
            { to: "/learn/$id" as const, params: { id: "evacuation-why" }, label: "EN 81-76, the evacuation lift" },
            { to: "/library/$id" as const, params: { id: "loler" }, label: "LOLER, the six-month thorough examination" },
            { to: "/asme" as const, params: undefined, label: "ASME A17.1, the code for a new elevator in the US and Canada" },
            { to: "/learn/$id" as const, params: { id: "three-elevators" }, label: "Firefighter lift, evacuation lift, and a normal lift" },
          ].map((item) => (
            <li key={item.label}>
              <Link
                to={item.to}
                params={item.params}
                className="flex min-h-14 items-center rounded-xl bg-surface px-4 text-base text-fg shadow-[var(--shadow-border)] hover:bg-raised"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-8 space-y-6">
          {HOME_FAQS.map((item) => (
            <div key={item.q}>
              <h3 className="font-display text-xl font-semibold">{item.q}</h3>
              <p className="mt-2 max-w-3xl text-lg text-muted">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-14 rounded-2xl border-t-4 border-yellow bg-paper p-6 text-paper-fg sm:p-8">
        <h2 className="font-display text-2xl font-semibold">Guidance only</h2>
        <p className="mt-3 max-w-3xl text-lg leading-relaxed">
          ElevatorIQ is for elevator professionals and anyone who has an interest
          in how the regulations affect our industry. EU and ASME rules are
          written here in simpler terms, so the legal duty is easier to
          understand. The pages are guidance. They are not the published
          standard, and they are not legal advice.
        </p>
      </section>
      </div>
    </main>
  );
}

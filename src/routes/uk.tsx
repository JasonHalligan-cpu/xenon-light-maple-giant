import { createFileRoute, Link } from "@tanstack/react-router";
import { UkLayers } from "@/components/diagrams/uk-layers";
import { UkShaft } from "@/components/diagrams/uk-shaft";
import { ThreeLifts } from "@/components/diagrams/three-lifts";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { StatuteSplit } from "@/components/learn/statute-split";

import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/uk")({
  head: () =>
    pageHead({
      title: "EU lift regulations explained · EN 81, LOLER, firefighter and evacuation lifts",
      description:
        "How EU elevator regulations fit together: the Lifts Directive, EN 81, LOLER, a firefighter lift, and an evacuation lift, in plain language.",
      path: "/uk",
    }),
  component: UkPage,
});

function UkPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
      <p className="text-sm font-medium uppercase tracking-wider text-accent">
        EU regulations
      </p>
      <h1 className="mt-2 font-display text-4xl font-semibold text-pretty sm:text-5xl">
        Tap the shaft. The EU regulations light up.
      </h1>
      <p className="mt-4 max-w-2xl text-lg text-muted">
        ElevatorIQ explains EU regulations. The law for a new elevator is the Lifts
        Directive. The recipe is the EN 81 family. The health check is LOLER. Click
        on the cars below, then tap a layer. That is the whole game.
      </p>

      <section className="mt-10">
        <h2 className="font-display text-3xl font-semibold">The building</h2>
        <p className="mt-2 max-w-2xl text-muted">
          Four bands, top to bottom: evacuation, firefighter, standard, then the
          diary once people are riding it.
        </p>
        <div className="mt-5">
          <UkShaft />
        </div>
      </section>

      <section className="mt-14">
        <h2 className="font-display text-3xl font-semibold">Three layers</h2>
        <p className="mt-2 max-w-2xl text-muted">
          Law, recipe, health check. They are not the same document. Tap one.
        </p>
        <div className="mt-5">
          <UkLayers />
        </div>
      </section>

      <div className="mt-10">
        <StatuteSplit
          statute="The Lifts Directive 2014/33/EU sets essential health and safety requirements for placing elevators on the market. Harmonised EN 81 parts confer a presumption of conformity. LOLER 1998 places in-service thorough-examination duties on those who control passenger elevators, typically every six months. Approved Documents B and M, and the Equality Act 2010, sit on the building — not on the factory plate."
          plain="Think of three different conversations. The factory talks to the Lifts Regulations. The drawing talks to EN 81 — and you must name the part. The owner talks to LOLER twice a year. Fire and access live in Part B, Part M and the Equality Act. Mix them up and you specify a firefighter elevator that cannot carry a wheelchair user out."
          why="This is why a CE mark is not a fire strategy, and a 72 car is not a 76 car."
        />
      </div>

      <section className="mt-14">
        <h2 className="font-display text-3xl font-semibold">Three cars, one alarm</h2>
        <p className="mt-2 text-muted">Click on the cars below. The UK job of that car is underneath.</p>
        <div className="mt-5">
          <ThreeLifts />
        </div>
      </section>

      <section className="mt-14 overflow-hidden rounded-2xl bg-surface shadow-[var(--shadow-border)]">
        <div className="grid lg:grid-cols-2">
          <img
            src="/graphics/loler-machine.jpg"
            alt="Elevator machine room prepared for a LOLER thorough examination, with no people"
            className="aspect-square w-full object-cover lg:aspect-auto lg:h-full"
          />
          <div className="p-6 sm:p-8">
            <p className="font-mono text-sm text-accent">LOLER 1998</p>
            <h2 className="mt-2 font-display text-3xl font-semibold">
              The six-month health check
            </h2>
            <p className="mt-3 text-lg text-muted">
              A competent person looks at the real machine, not the brochure.
              People-carrying elevators: usually every six months. Defects that are
              or could become a danger get written down — and you stop using it.
            </p>
            <Link
              to="/library/$id"
              params={{ id: "loler" }}
              className={cn(buttonVariants(), "mt-6")}
            >
              Read LOLER in landing language
            </Link>
          </div>
        </div>
      </section>

      <div className="mt-10 flex flex-wrap gap-3">
        <Link to="/classify" className={buttonVariants()}>
          Specify this building
        </Link>
        <Link to="/library" className={buttonVariants({ variant: "secondary" })}>
          BS EN 81 library
        </Link>
        <Link to="/specs" className={buttonVariants({ variant: "secondary" })}>
          Spec sheets
        </Link>
      </div>
    </main>
  );
}

import { createFileRoute, Link } from "@tanstack/react-router";
import { LIFT_SPECS } from "@/data/specs";
import { AdSlot } from "@/components/ads/ad-slot";

export const Route = createFileRoute("/specs/")({ component: SpecsPage });

function SpecsPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
      <p className="text-sm font-medium uppercase tracking-wider text-accent">
        Specification sheets
      </p>
      <h1 className="mt-2 font-display text-4xl font-semibold sm:text-5xl">
        Write the machine, not the brochure.
      </h1>
      <p className="mt-4 max-w-2xl text-lg text-muted">
        Typical UK numbers, the line from the standard, and the landing
        version. Teaching sheets — not a certificate, not a substitute for
        BS EN 81. Click on the cars below.
      </p>
      <ul className="mt-10 grid gap-4 sm:grid-cols-2">
        {LIFT_SPECS.map((spec) => (
          <li key={spec.id}>
            <Link
              to="/specs/$id"
              params={{ id: spec.id }}
              className="block overflow-hidden rounded-2xl bg-surface shadow-[var(--shadow-border)] transition-colors hover:bg-raised"
            >
              <img src={spec.img} alt={spec.alt} className="aspect-video w-full object-cover" />
              <span className="block p-5">
                <span className="font-mono text-sm uppercase tracking-wider text-accent">
                  {spec.kicker}
                </span>
                <span className="mt-2 block font-display text-2xl font-semibold">{spec.name}</span>
                <span className="mt-2 block text-base text-muted">{spec.who}</span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
      <p className="mt-8 text-sm text-faint">
        Figures are typical UK teaching values (Type 2 630 kg, 1.0 m/s, six-month
        LOLER). Always check the current BS EN 81 part and the fire strategy.
      </p>
      <div className="mt-10">
        <AdSlot slot="codes" size="strip" />
      </div>
    </main>
  );
}

import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { AdSlot } from "@/components/ads/ad-slot";
import { buttonVariants } from "@/components/ui/button";
import { SPONSOR_AUDIENCE, SPONSOR_PACKAGES } from "@/data/sponsors";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/sponsors/")({ component: SponsorsPage });

function SponsorsPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
      <p className="text-sm font-medium uppercase tracking-wider text-accent">
        Future sponsorship
      </p>
      <h1 className="mt-2 font-display text-4xl font-semibold sm:text-6xl">
        Put your name on the landing.
      </h1>
      <p className="mt-4 max-w-2xl text-lg text-muted sm:text-xl">
        Slots in ElevatorIQ already carry simulated campaigns — Ashcombe, Beacon,
        Northbank, Harbour, Kiln & Rail — so you can see the shape. None of
        them is real. Hold a place for when yours is.
      </p>
      <div className="mt-7 flex flex-wrap gap-3">
        <Link
          to="/adverts"
          className={cn(buttonVariants({ size: "lg" }))}
        >
          See pretend ads
          <ArrowRight className="size-4" />
        </Link>
        <Link
          to="/sponsors/$id"
          params={{ id: "lobby" }}
          className={cn(buttonVariants({ size: "lg", variant: "secondary" }))}
        >
          Hold the lobby
        </Link>
      </div>

      <section className="mt-12">
        <h2 className="font-display text-3xl font-semibold">Who is in the car</h2>
        <ul className="mt-5 grid gap-3 sm:grid-cols-2">
          {SPONSOR_AUDIENCE.map((a) => (
            <li key={a.label} className="rounded-2xl bg-surface p-5 shadow-[var(--shadow-border)]">
              <p className="font-display text-2xl font-semibold">{a.label}</p>
              <p className="mt-2 text-base text-muted">{a.line}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="font-display text-3xl font-semibold">The inventory</h2>
        <p className="mt-2 max-w-xl text-lg text-muted">
          Five labelled places. Tap a package for the spec and to hold a place.
        </p>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {SPONSOR_PACKAGES.map((p) => (
            <li key={p.id}>
              <Link
                to="/sponsors/$id"
                params={{ id: p.id }}
                className="block min-h-36 rounded-2xl bg-surface p-5 shadow-[var(--shadow-border)] transition-colors hover:bg-raised"
              >
                <span className="font-mono text-sm uppercase tracking-wider text-accent">
                  {p.kicker} · {p.price}
                </span>
                <span className="mt-2 block font-display text-2xl font-semibold">
                  {p.title}
                </span>
                <span className="mt-2 block text-base text-muted">{p.placement}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="font-display text-3xl font-semibold">How a slot looks today</h2>
        <p className="mt-2 mb-5 max-w-xl text-lg text-muted">
          Live lobby unit, filled with a pretend manufacturer.
        </p>
        <AdSlot slot="lobby" size="billboard" />
      </section>

      <p className="mt-10 text-sm text-faint">
        Ads stay labelled. The campaigns you see now are simulations. ElevatorIQ
        will not sell lessons, hide a code, or let a partner rewrite the landing
        language.
      </p>
    </main>
  );
}

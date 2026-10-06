import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { STANDARDS } from "@/data/standards";
import { UkLayers } from "@/components/diagrams/uk-layers";
import { AdSlot } from "@/components/ads/ad-slot";
import type { CodeRegion } from "@/data/types";

import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/library/")({
  head: () =>
    pageHead({
      title: "EN 81 code library · lift regulations explained",
      description:
        "Every EN 81 part and the UK duties around a lift: LOLER, the Lifts Regulations, fire, and access, explained in ordinary words.",
      path: "/library",
    }),
  component: EuLibrary,
});

const FAMILY: Record<string, string> = {
  law: "The law around the elevator",
  base: "The default machine",
  people: "People in the car",
  fire: "When the building is in trouble",
  existing: "Elevators already in the shaft",
};

const ORDER = ["law", "base", "people", "fire", "existing"] as const;

function EuLibrary() {
  return <CodeLibrary region="eu" />;
}

export function CodeLibrary({ region }: { region: CodeRegion }) {
  const standards = STANDARDS.filter((s) => (s.region ?? "eu") === region);
  return (
    <main className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
      <p className="text-sm font-medium uppercase tracking-wider text-accent">
        {region === "asme" ? "ASME regulations" : "EU regulations"}
      </p>
      <h1 className="mt-2 font-display text-4xl font-semibold sm:text-5xl">
        {region === "asme"
          ? "ASME codes, into a language everyone can understand"
          : "Every part, into a language everyone can understand"}
      </h1>
      <p className="mt-3 max-w-2xl text-lg text-muted">
        {region === "asme"
          ? "A17.1 is the new elevator. A17.2 is inspection. A17.3 is an elevator already there. Phase I parks. Phase II is the firefighters’ key. Occupant evacuation is the way out. The edition is the one that place adopted. These codes stay in this tab. They are not EN 81."
          : "EU regulations. Every regulation that sits on an elevator is listed here, then the BS EN 81 parts. The Lifts Regulations say a new elevator must be safe to put on the market. LOLER is the six-month health check. The others are the duties around fire, access, work and design. Tap one."}
      </p>

      {region === "eu" ? (
        <section className="mt-10">
          <h2 className="font-display text-2xl font-semibold">EU regulations</h2>
          <p className="mt-1 max-w-xl text-base text-muted">
            Law, recipe, health check — tap to open. The regulations themselves are listed underneath.
          </p>
          <div className="mt-5">
            <UkLayers />
          </div>
          <Link
            to="/uk"
            className="mt-4 inline-flex min-h-11 items-center gap-2 text-base text-accent hover:underline"
          >
            Interactive shaft
            <ArrowRight className="size-4" />
          </Link>
          <Link
            to="/specs"
            className="mt-2 inline-flex min-h-11 items-center gap-2 text-base text-accent hover:underline sm:mt-4 sm:ml-6"
          >
            Detailed specifications
            <ArrowRight className="size-4" />
          </Link>
        </section>
      ) : null}

      <p className="mt-12 text-sm font-medium uppercase tracking-wider text-faint">
        {region === "asme" ? "The ASME codes" : "The regulations and the BS EN 81 parts"}
      </p>
      {ORDER.map((family) => {
        const items = standards.filter((s) => s.family === family);
        if (!items.length) return null;
        return (
          <section key={family} className="mt-10">
            <h2 className="font-display text-2xl font-semibold">{FAMILY[family]}</h2>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {items.map((std) => {
                const className =
                  "block min-h-28 rounded-2xl bg-surface p-5 shadow-[var(--shadow-border)] transition-colors hover:bg-raised";
                const inner = (
                  <>
                    <span className="flex items-center gap-2">
                      <span className="font-mono text-xs text-accent">{std.code}</span>
                      {std.featured ? (
                        <span className="rounded-full bg-accent/15 px-2 py-0.5 text-xs text-accent">
                          Featured
                        </span>
                      ) : null}
                    </span>
                    <span className="mt-2 block font-display text-xl font-semibold">
                      {std.everydayTitle}
                    </span>
                    <span className="mt-2 block text-base text-muted">{std.oneLiner}</span>
                  </>
                );
                return (
                  <li key={std.id}>
                    {region === "asme" ? (
                      <Link to="/asme/library/$id" params={{ id: std.id }} className={className}>
                        {inner}
                      </Link>
                    ) : (
                      <Link to="/library/$id" params={{ id: std.id }} className={className}>
                        {inner}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
          </section>
        );
      })}
      <div className="mt-12">
        <AdSlot slot="codes" size="strip" />
      </div>
    </main>
  );
}

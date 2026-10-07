import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { StatuteSplit } from "@/components/learn/statute-split";
import { BackLink, NextLink, PageArrows } from "@/components/layout/page-arrows";
import { buttonVariants } from "@/components/ui/button";
import { LIFT_SPECS, SPEC_BY_ID, type SpecId } from "@/data/specs";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/specs/$id")({ component: SpecPage });

function isSpec(id: string): id is SpecId {
  return id in SPEC_BY_ID;
}

function SpecPage() {
  const { id } = Route.useParams();
  const spec = isSpec(id) ? SPEC_BY_ID[id] : undefined;
  const [open, setOpen] = useState("");

  useEffect(() => {
    setOpen(spec?.rows[0]?.item ?? "");
  }, [spec]);

  if (!spec) {
    return (
      <main className="mx-auto max-w-2xl px-4 py-16">
        <p>That sheet is not on the board.</p>
        <Link to="/specs" className="mt-4 inline-block text-accent">
          All specifications
        </Link>
      </main>
    );
  }

  const row = spec.rows.find((r) => r.item === open) ?? spec.rows[0];
  const specIndex = LIFT_SPECS.findIndex((item) => item.id === spec.id);
  const prevSpec = specIndex > 0 ? LIFT_SPECS[specIndex - 1] : undefined;
  const nextSpec =
    specIndex >= 0 && specIndex < LIFT_SPECS.length - 1 ? LIFT_SPECS[specIndex + 1] : undefined;

  return (
    <main className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
      <PageArrows
        back={prevSpec ? <BackLink to="/specs/$id" params={{ id: prevSpec.id }} /> : null}
        next={nextSpec ? <NextLink to="/specs/$id" params={{ id: nextSpec.id }} /> : null}
      />
      <Link to="/specs" className="text-base text-accent hover:underline">
        All specifications
      </Link>
      <p className="mt-4 font-mono text-sm uppercase tracking-wider text-accent">{spec.kicker}</p>
      <h1 className="mt-2 font-display text-4xl font-semibold sm:text-5xl">{spec.name}</h1>
      <p className="mt-3 max-w-2xl text-lg text-muted">{spec.summary}</p>
      <img
        src={spec.img}
        alt={spec.alt}
        className="mt-6 aspect-video w-full rounded-2xl object-cover shadow-[var(--shadow-border)]"
      />

      <section className="mt-10">
        <h2 className="font-display text-3xl font-semibold">The sheet</h2>
        <p className="mt-2 text-lg text-muted">
          Tap a line. Left is the standard. Right is the landing. Typical numbers
          are teaching values for a UK spec.
        </p>
        <ul className="mt-5 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {spec.rows.map((r) => (
            <li key={r.item}>
              <button
                type="button"
                onClick={() => setOpen(r.item)}
                className={cn(
                  "flex min-h-16 w-full flex-col items-start rounded-xl px-4 py-3 text-left shadow-[var(--shadow-border)]",
                  open === r.item ? "bg-orange text-accent-fg" : "bg-surface hover:bg-raised",
                )}
              >
                <span className="font-display text-xl font-semibold">{r.item}</span>
                <span className={cn("mt-1 text-sm", open === r.item ? "text-accent-fg/85" : "text-muted")}>
                  {r.typical}
                </span>
              </button>
            </li>
          ))}
        </ul>
        {row ? (
          <div className="mt-6">
            <StatuteSplit statute={row.statute} plain={row.plain} why={`Typical UK figure: ${row.typical}.`} />
          </div>
        ) : null}
      </section>

      <section className="mt-12 grid gap-4 lg:grid-cols-2">
        <div className="rounded-2xl bg-surface p-5 shadow-[var(--shadow-border)]">
          <h2 className="font-display text-2xl font-semibold">Write this</h2>
          <ul className="mt-3 space-y-2 text-lg">
            {spec.must.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl bg-surface p-5 shadow-[var(--shadow-border)]">
          <h2 className="font-display text-2xl font-semibold">Do not write this</h2>
          <ul className="mt-3 space-y-2 text-lg">
            {spec.never.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mt-10 rounded-2xl bg-paper p-6 text-paper-fg">
        <p className="text-sm font-medium uppercase tracking-wider text-paper-muted">
          Sample tender line
        </p>
        <p className="mt-3 font-mono text-base leading-relaxed">{spec.tender}</p>
        <p className="mt-4 text-sm text-paper-muted">
          A starting sentence for a specifier. Check the current BS part, the fire
          strategy, and Part B / M before it leaves the office.
        </p>
      </section>

      <div className="mt-10 flex flex-wrap gap-3">
        <Link to="/classify" className={buttonVariants()}>
          Match a building
        </Link>
        <Link to="/library" className={buttonVariants({ variant: "secondary" })}>
          EU regulations
        </Link>
      </div>

      <ul className="mt-10 flex flex-wrap gap-2">
        {LIFT_SPECS.filter((s) => s.id !== spec.id).map((s) => (
          <li key={s.id}>
            <Link
              to="/specs/$id"
              params={{ id: s.id }}
              className="inline-flex min-h-11 items-center rounded-lg bg-raised px-3 text-base hover:bg-surface"
            >
              {s.name}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}

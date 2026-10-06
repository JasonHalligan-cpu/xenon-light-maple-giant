import { createFileRoute, Link } from "@tanstack/react-router";
import { StatuteSplit } from "@/components/learn/statute-split";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { LESSONS } from "@/data/lessons";
import { STANDARD_BY_ID } from "@/data/standards";
import type { CodeRegion, StandardId } from "@/data/types";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/library/$id")({
  head: ({ params }) => {
    const std = STANDARD_BY_ID[params.id as StandardId];
    return pageHead({
      title: std ? `${std.code} explained · ${std.everydayTitle}` : "Lift regulation",
      description:
        std?.oneLiner ??
        "A lift regulation explained in plain language. Not a copy of the standard.",
      path: `/library/${params.id}`,
    });
  },
  component: EuCode,
});

function EuCode() {
  const { id } = Route.useParams();
  return <CodePage id={id} region="eu" />;
}

export function CodePage({ id, region }: { id: string; region: CodeRegion }) {
  const std = STANDARD_BY_ID[id as StandardId];
  if (!std || (std.region ?? "eu") !== region) {
    return (
      <main className="mx-auto max-w-2xl px-4 py-16">
        <p>Unknown code in this set.</p>
        {region === "asme" ? (
          <Link to="/asme/library" className="mt-4 inline-block text-accent">
            Back to ASME codes
          </Link>
        ) : (
          <Link to="/library" className="mt-4 inline-block text-accent">
            Back to library
          </Link>
        )}
      </main>
    );
  }
  const relatedLessons = LESSONS.filter(
    (l) => (l.region ?? "eu") === region && l.standardIds.includes(std.id),
  );
  return (
    <main className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
      <p className="font-mono text-xs text-accent">{std.code}</p>
      <h1 className="mt-2 font-display text-4xl font-semibold text-pretty sm:text-5xl">
        {std.everydayTitle}
      </h1>
      <p className="mt-2 text-sm text-muted">{std.title}</p>
      <p className="mt-4 max-w-2xl text-muted">{std.oneLiner}</p>
      <div className="mt-8">
        <StatuteSplit statute={std.statute} plain={std.plain} />
      </div>
      <section className="mt-8">
        <h2 className="font-display text-2xl font-semibold">Keep this</h2>
        <ul className="mt-3 space-y-2">
          {std.remember.map((line) => (
            <li
              key={line}
              className="rounded-xl bg-raised px-4 py-3 text-sm text-fg shadow-[var(--shadow-border)]"
            >
              {line}
            </li>
          ))}
        </ul>
      </section>
      {std.related.length ? (
        <section className="mt-8">
          <h2 className="font-display text-2xl font-semibold">Sits next to</h2>
          <div className="mt-3 flex flex-wrap gap-2">
            {std.related
              .filter((rid) => (STANDARD_BY_ID[rid]?.region ?? "eu") === region)
              .map((rid) => {
              const other = STANDARD_BY_ID[rid];
              const className =
                "min-h-11 rounded-lg bg-surface px-3 py-2 font-mono text-xs text-muted hover:text-fg";
              const label = other?.code ?? rid;
              return region === "asme" ? (
                <Link key={rid} to="/asme/library/$id" params={{ id: rid }} className={className}>
                  {label}
                </Link>
              ) : (
                <Link key={rid} to="/library/$id" params={{ id: rid }} className={className}>
                  {label}
                </Link>
              );
            })}
          </div>
        </section>
      ) : null}
      {relatedLessons.length ? (
        <section className="mt-8">
          <h2 className="font-display text-2xl font-semibold">Learn it as a floor</h2>
          <ul className="mt-3 space-y-2">
            {relatedLessons.map((lesson) => (
              <li key={lesson.id}>
                {region === "asme" ? (
                  <Link
                    to="/asme/learn/$id"
                    params={{ id: lesson.id }}
                    className="block rounded-xl bg-paper px-4 py-3 text-paper-fg"
                  >
                    <span className="font-display text-lg font-semibold">{lesson.title}</span>
                    <span className="mt-1 block text-sm text-paper-muted">{lesson.summary}</span>
                  </Link>
                ) : (
                  <Link
                    to="/learn/$id"
                    params={{ id: lesson.id }}
                    className="block rounded-xl bg-paper px-4 py-3 text-paper-fg"
                  >
                    <span className="font-display text-lg font-semibold">{lesson.title}</span>
                    <span className="mt-1 block text-sm text-paper-muted">{lesson.summary}</span>
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </section>
      ) : null}
      {region === "asme" ? (
        <Link to="/asme/library" className={cn(buttonVariants({ variant: "ghost" }), "mt-10")}>
          All codes
        </Link>
      ) : (
        <Link to="/library" className={cn(buttonVariants({ variant: "ghost" }), "mt-10")}>
          All codes
        </Link>
      )}
    </main>
  );
}

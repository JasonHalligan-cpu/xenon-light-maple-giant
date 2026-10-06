import { createFileRoute, Link } from "@tanstack/react-router";
import { LESSONS } from "@/data/lessons";
import { MovingLift } from "@/components/learn/moving-lift";
import { useProgress } from "@/lib/store";
import { cn } from "@/lib/utils";
import type { CodeRegion } from "@/data/types";

import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/learn/")({
  head: () =>
    pageHead({
      title: "EN 81 lessons · elevator regulations in plain language",
      description:
        "Short lessons on EN 81-20, EN 81-70, firefighter lifts, fire recall, evacuation lifts, and LOLER. Plain language, then a check.",
      path: "/learn",
    }),
  component: EuLessons,
});

function EuLessons() {
  return <LessonList region="eu" />;
}

export function LessonList({ region }: { region: CodeRegion }) {
  const done = useProgress((s) => s.lessonsDone);
  const lessons = LESSONS.filter((lesson) => (lesson.region ?? "eu") === region);
  const landings = [
    { mark: "G", name: "Lobby" },
    ...lessons.map((lesson, i) => ({
      mark: String(i + 1).padStart(2, "0"),
      name: lesson.title,
      done: done.includes(lesson.id),
    })),
  ];

  return (
    <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <p className="text-sm font-medium uppercase tracking-wider text-accent">
        Curriculum
      </p>
      <h1 className="mt-2 font-display text-4xl font-semibold sm:text-5xl">
        {region === "asme" ? "ASME, one floor at a time" : "One floor at a time"}
      </h1>
      <p className="mt-3 max-w-2xl text-muted">
        {region === "asme"
          ? "Each floor is a short lesson on ASME A17.1 / CSA B44 and the building code beside it. These floors stay in the ASME regulations tab. They are not EN 81."
          : "Each floor is a short lesson: what the standard says, then what it means. Get the check right and the car climbs. Practice is a different tab — questions only, no reading."}
      </p>
      <div className="mt-8 grid gap-8 lg:grid-cols-12 lg:items-start">
        <div className="lg:sticky lg:top-24 lg:col-span-4">
          <MovingLift floor={lessons.filter((lesson) => done.includes(lesson.id)).length} landings={landings} />
        </div>
        <ol className="space-y-3 lg:col-span-8">
          {lessons.map((lesson, i) => {
            const complete = done.includes(lesson.id);
            const className = cn(
              "flex min-h-16 flex-col gap-1 rounded-2xl px-5 py-4 shadow-[var(--shadow-border)] transition-colors sm:flex-row sm:items-center sm:gap-6",
              complete ? "bg-ok/10" : "bg-surface hover:bg-raised",
            );
            const inner = (
              <>
                <span className="font-mono text-xs tabular-nums text-muted">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="flex flex-wrap items-center gap-2">
                    <span className="font-display text-xl font-semibold">{lesson.title}</span>
                    {lesson.featured ? (
                      <span className="rounded-full bg-accent/15 px-2 py-0.5 text-xs text-accent">
                        {region === "asme" ? "OEO" : "76"}
                      </span>
                    ) : null}
                  </span>
                  <span className="mt-1 block text-base text-muted">{lesson.summary}</span>
                </span>
                <span className="text-xs text-faint">{lesson.minutes} min</span>
              </>
            );
            return (
              <li key={lesson.id}>
                {region === "asme" ? (
                  <Link to="/asme/learn/$id" params={{ id: lesson.id }} className={className}>
                    {inner}
                  </Link>
                ) : (
                  <Link to="/learn/$id" params={{ id: lesson.id }} className={className}>
                    {inner}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </main>
  );
}
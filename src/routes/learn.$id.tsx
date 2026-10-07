import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { LESSON_BY_ID, LESSONS } from "@/data/lessons";
import { StatuteSplit } from "@/components/learn/statute-split";
import { MovingLift } from "@/components/learn/moving-lift";
import { Button, buttonVariants } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useProgress } from "@/lib/store";
import type { CodeRegion, StandardId } from "@/data/types";
import { AdSlot } from "@/components/ads/ad-slot";
import { BackLink, NextLink, PageArrows } from "@/components/layout/page-arrows";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/learn/$id")({
  head: ({ params }) => {
    const lesson = LESSON_BY_ID[params.id];
    const title = lesson ? `${lesson.title} · EN 81 lesson` : "EN 81 lesson";
    return pageHead({
      title,
      description:
        lesson?.summary ??
        "An EN 81 lesson in plain language: what the regulation is for, then a check.",
      path: `/learn/${params.id}`,
    });
  },
  component: EuLesson,
});

function EuLesson() {
  const { id } = Route.useParams();
  return <LessonFloor id={id} region="eu" />;
}

const ART: Partial<Record<StandardId, { src: string; alt: string }>> = {
  "en81-76": {
    src: "/graphics/car-evac-i.jpg",
    alt: "Person in a wheelchair inside an evacuation elevator with a large clear floor",
  },
  "en81-72": {
    src: "/graphics/car-firefighter-o.jpg",
    alt: "Firefighter in protective kit inside a firefighters elevator with a key panel and a wet floor",
  },
  "en81-73": {
    src: "/graphics/car-ordinary-j.jpg",
    alt: "Empty standard passenger elevator with doors open",
  },
  "a17-1": {
    src: "/graphics/asme-lobby.jpg",
    alt: "Modern North American elevator lobby with stainless doors and a city skyline",
  },
  "asme-ahj": {
    src: "/graphics/asme-inspect.jpg",
    alt: "Inspector checking an elevator landing door with a flashlight",
  },
  "a17-2": {
    src: "/graphics/asme-inspect.jpg",
    alt: "Inspector checking an elevator landing door with a flashlight",
  },
  "a17-3": {
    src: "/graphics/asme-existing.jpg",
    alt: "Older passenger elevator still in use, with worn metal walls",
  },
  "asme-ada": {
    src: "/graphics/asme-oeo.jpg",
    alt: "Wheelchair user inside a large elevator with the doors open",
  },
  "asme-phase1": {
    src: "/graphics/asme-phase1.jpg",
    alt: "Empty elevator parked at the lobby under amber emergency light",
  },
  "asme-phase2": {
    src: "/graphics/asme-phase2.jpg",
    alt: "Firefighter using a key switch inside an elevator",
  },
  "asme-fsae": {
    src: "/graphics/asme-phase2.jpg",
    alt: "Firefighter using a key switch inside an elevator",
  },
  "asme-oeo": {
    src: "/graphics/asme-oeo.jpg",
    alt: "Wheelchair user inside a large elevator with the doors open",
  },
  "asme-ibc": {
    src: "/graphics/asme-lobby.jpg",
    alt: "Modern North American elevator lobby with stainless doors and a city skyline",
  },
  loler: {
    src: "/graphics/loler-machine.jpg",
    alt: "Elevator machine room set for a thorough examination",
  },
  directive: {
    src: "/graphics/shaft-floors.jpg",
    alt: "Cutaway of a UK building showing the elevator shaft",
  },
};

function artFor(ids: StandardId[], region: "eu" | "asme") {
  for (const id of ids) {
    if (ART[id]) return ART[id];
  }
  if (region === "asme") return ART["a17-1"];
  return ART.directive;
}

export function LessonFloor({ id, region }: { id: string; region: CodeRegion }) {
  const lesson = LESSON_BY_ID[id];
  const completeLesson = useProgress((s) => s.completeLesson);
  const lessonsDone = useProgress((s) => s.lessonsDone);
  const done = lessonsDone.includes(id);
  const [section, setSection] = useState(0);
  const [finished, setFinished] = useState(done);
  const stepRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!finished) return;
    stepRef.current?.scrollIntoView({ block: "start", behavior: "smooth" });
  }, [finished]);

  if (!lesson || (lesson.region ?? "eu") !== region) {
    return (
      <main className="mx-auto max-w-2xl px-4 py-16">
        <p>That floor does not exist in this set.</p>
        {region === "asme" ? (
          <Link to="/asme/learn" className="mt-4 inline-block text-accent">
            Back to ASME lessons
          </Link>
        ) : (
          <Link to="/learn" className="mt-4 inline-block text-accent">
            Back to lessons
          </Link>
        )}
      </main>
    );
  }

  const art = artFor(lesson.standardIds, lesson.region ?? "eu");
  const totalSteps = lesson.sections.length;
  const track = LESSONS.filter((item) => (item.region ?? "eu") === (lesson.region ?? "eu"));
  const lessonIndex = track.findIndex((item) => item.id === id);
  const prevLesson = lessonIndex > 0 ? track[lessonIndex - 1] : undefined;
  const nextLesson =
    lessonIndex >= 0 && lessonIndex < track.length - 1 ? track[lessonIndex + 1] : undefined;
  const curriculum = [
    { mark: "G", name: "Lobby" },
    ...track.map((item, i) => ({
      mark: String(i + 1).padStart(2, "0"),
      name: item.title,
      done: lessonsDone.includes(item.id),
    })),
  ];

  function finish() {
    completeLesson(lesson!.id, lesson!.skillIds);
    setFinished(true);
  }

  return (
    <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12">
      <PageArrows
        back={
          prevLesson ? (
            region === "asme" ? (
              <BackLink to="/asme/learn/$id" params={{ id: prevLesson.id }} />
            ) : (
              <BackLink to="/learn/$id" params={{ id: prevLesson.id }} />
            )
          ) : null
        }
        next={
          nextLesson ? (
            region === "asme" ? (
              <NextLink to="/asme/learn/$id" params={{ id: nextLesson.id }} />
            ) : (
              <NextLink to="/learn/$id" params={{ id: nextLesson.id }} />
            )
          ) : null
        }
      />
      <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
      <div className="order-2 min-w-0 lg:order-1 lg:col-span-8">
      <p className="text-sm font-medium uppercase tracking-wider text-accent">
        {lesson.kicker} · {lesson.minutes} min
      </p>
      <h1 className="mt-2 font-display text-4xl font-semibold text-pretty sm:text-5xl">
        {lesson.title}
      </h1>
      <p className="mt-3 max-w-2xl text-lg text-muted">{lesson.summary}</p>
      {art ? (
        <img
          src={art.src}
          alt={art.alt}
          className="mt-6 aspect-video w-full rounded-2xl object-cover shadow-[var(--shadow-border)]"
        />
      ) : null}
      <Progress value={(section + (finished ? 1 : 0)) / (totalSteps + 1)} className="mt-6" />

      {finished ? (
        <div ref={stepRef}>
        <div className="mt-10 rounded-2xl bg-paper p-6 text-paper-fg">
          <p className="text-base font-medium uppercase tracking-wider text-paper-muted">
            Floor complete
          </p>
          <h2 className="mt-2 font-display text-3xl font-semibold">This one will come back</h2>
          <p className="mt-3 text-lg leading-relaxed">
            Reading helps. Remembering the answer without the page open is what
            makes it stick. Practice will keep asking until you can say it yourself.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {region === "asme" ? (
              <Link to="/asme/practice" className={buttonVariants()}>
                Practice this skill
              </Link>
            ) : (
              <Link to="/practice" className={buttonVariants()}>
                Practice this skill
              </Link>
            )}
          </div>
        </div>
        <div className="mt-6">
          <AdSlot slot="floor" size="card" />
        </div>
        </div>
      ) : (
        <div className="mt-10 space-y-8">
          <h2 className="font-display text-2xl font-semibold">
            {lesson.sections[section].heading}
          </h2>
          <StatuteSplit
            statute={lesson.sections[section].statute}
            plain={lesson.sections[section].plain}
            why={lesson.sections[section].why}
          />
          <div className="flex flex-wrap gap-3">
            {section > 0 ? (
              <Button variant="ghost" onClick={() => setSection((s) => s - 1)}>
                Previous
              </Button>
            ) : null}
            {section + 1 < lesson.sections.length ? (
              <Button onClick={() => setSection((s) => s + 1)}>Next section</Button>
            ) : (
              <Button onClick={finish}>Mark floor complete</Button>
            )}
          </div>
        </div>
      )}
      </div>
      <div className="order-1 lg:sticky lg:top-24 lg:order-2 lg:col-span-4">
        <MovingLift
          floor={finished ? Math.max(lessonIndex + 1, 0) : Math.max(lessonIndex, 0)}
          landings={curriculum}
        />
      </div>
      </div>
    </main>
  );
}

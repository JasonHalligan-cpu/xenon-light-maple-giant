import { createFileRoute, Link } from "@tanstack/react-router";
import { StatuteSplit } from "@/components/learn/statute-split";

import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/asme/")({
  head: () =>
    pageHead({
      title: "ASME A17.1 explained · elevator code in plain language",
      description:
        "ASME A17.1 / CSA B44 in ordinary words: Phase I recall, Phase II firefighter operation, and occupant evacuation. Not EN 81.",
      path: "/asme",
    }),
  component: AsmePage,
});

const PARTS = [
  {
    code: "ASME A17.1 / CSA B44",
    statute:
      "ASME A17.1 / CSA B44 is the Safety Code for Elevators and Escalators. It is the code used for new elevators in the United States and Canada.",
    plain:
      "This is the North American rule book for a new elevator. It is not EN 81. A line in one is not a line in the other.",
    why: "Writing EN 81-20 on a US job, or A17.1 on a European job, names the wrong code.",
  },
  {
    code: "Who adopts it",
    statute:
      "A state, city, or province adopts an edition of the code. The authority having jurisdiction enforces that edition.",
    plain:
      "There is no single federal elevator law that switches the code on by itself. The edition that applies is the one that city, state, or province has adopted.",
    why: "Two cities can be on two different editions. Ask which one, before you quote a clause.",
  },
  {
    code: "Phase I and Phase II",
    statute:
      "Phase I emergency recall sends the elevator to a designated level and takes it out of normal service. Phase II emergency in-car operation lets firefighters run that car with a key.",
    plain:
      "Phase I parks the elevator for the fire. Phase II is the firefighters’ key, so they can drive the car. It is their tool. It is not a passenger way out.",
    why: "A key switch is not the same thing as an elevator that stays open for people who cannot use the stairs.",
  },
  {
    code: "Occupant evacuation",
    statute:
      "Later editions of A17.1 include occupant evacuation operation. The International Building Code can require a fire service access elevator or an occupant evacuation elevator.",
    plain:
      "An occupant evacuation elevator is a special car the building code asks for, so people can leave. It is not EN 81-76, and it is not Phase II.",
    why: "The jobs can look alike in a meeting. The code numbers are not interchangeable.",
  },
  {
    code: "A17.2 and A17.3",
    statute:
      "ASME A17.2 is a guide for inspection of elevators. ASME A17.3 is the safety code for existing elevators and escalators.",
    plain:
      "A17.1 is how a new elevator is built. A17.2 is how someone inspects. A17.3 is the safety code for an elevator already in the building.",
    why: "An old elevator is not made new by quoting the code for a new one.",
  },
] as const;

const DOORS = [
  { to: "/asme/learn" as const, title: "Lessons", line: "Twelve floors. They stay in this tab. They are not EN 81." },
  { to: "/asme/practice" as const, title: "Practice", line: "ASME questions only. A miss is explained in ordinary words." },
  { to: "/asme/test" as const, title: "Test", line: "Twelve ASME questions. Pass mark 10. One attempt each." },
  { to: "/asme/library" as const, title: "Codes", line: "A17.1, A17.2, A17.3, Phase I, Phase II, and occupant evacuation." },
] as const;

function AsmePage() {
  return (
    <main>
      <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
        <p className="text-sm font-medium uppercase tracking-wider text-accent">
          United States and Canada
        </p>
        <h1 className="mt-2 font-display text-4xl font-semibold text-pretty sm:text-5xl">
          ASME regulations, into a language everyone can understand
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-muted">
          This tab is the only door into ASME. Lessons, practice, the test, and
          the codes here follow ASME A17.1 / CSA B44. They are not mixed with
          EN 81. The words are a translation, not a substitute for the edition
          that place adopted, or for an elevator professional.
        </p>
        <img
          src="/graphics/asme-lobby.jpg"
          alt="Modern North American elevator lobby"
          className="mt-8 aspect-video w-full rounded-2xl object-cover shadow-[var(--shadow-border)]"
        />
        <ul className="mt-4 grid gap-3 sm:grid-cols-3">
          {[
            { src: "/graphics/asme-phase1.jpg", alt: "Empty elevator recalled to the lobby", cap: "Phase I" },
            { src: "/graphics/asme-phase2.jpg", alt: "Firefighter driving the car with a key", cap: "Phase II" },
            { src: "/graphics/asme-oeo.jpg", alt: "Wheelchair user in an occupant evacuation elevator", cap: "Occupant evacuation" },
          ].map((shot) => (
            <li key={shot.cap}>
              <img src={shot.src} alt={shot.alt} className="aspect-video w-full rounded-2xl object-cover" />
              <p className="mt-2 text-sm text-muted">{shot.cap}</p>
            </li>
          ))}
        </ul>
        <ul className="mt-8 grid gap-3 sm:grid-cols-2">
          {DOORS.map((door) => (
            <li key={door.to}>
              <Link
                to={door.to}
                className="block min-h-28 rounded-2xl bg-surface p-5 shadow-[var(--shadow-border)] hover:bg-raised"
              >
                <span className="font-display text-2xl font-semibold">{door.title}</span>
                <span className="mt-2 block text-base text-muted">{door.line}</span>
              </Link>
            </li>
          ))}
        </ul>
        <ul className="mt-10 space-y-8">
          {PARTS.map((part) => (
            <li key={part.code}>
              <h2 className="mb-3 font-display text-2xl font-semibold">{part.code}</h2>
              <StatuteSplit statute={part.statute} plain={part.plain} why={part.why} />
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}

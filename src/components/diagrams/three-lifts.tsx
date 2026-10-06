import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

const CARS = [
  {
    id: "73",
    title: "Standard",
    line: "Parks",
    detail: "Recalls the elevator and places the elevator out of service.",
    img: "/graphics/car-ordinary-j.jpg",
    alt: "Empty standard passenger elevator with doors open onto a yellow landing",
    tone: "bg-yellow text-night",
    to: "en81-73",
  },
  {
    id: "72",
    title: "Firefighter",
    line: "Taken over",
    detail:
      "A firefighter elevator is the fire brigade's tool, not a way out for residents. They take it over with a key and ride it up to the bridgehead: the protected floor, usually two floors below the fire, where the crew start their attack. It has to keep working while water from the firefighting above runs down the shaft, so it has a second power supply, a pit that drains, and a phone to fire control. A fire strategy may still use it to move people. That does not make it an EN 81-76 evacuation elevator. Mix the two up and the building gets the wrong car.",
    img: "/graphics/car-firefighter-o.jpg",
    alt: "Firefighter in protective kit inside a firefighters elevator with a key panel and a wet floor",
    tone: "bg-orange text-accent-fg",
    to: "en81-72",
  },
  {
    id: "76",
    title: "Evacuation",
    line: "Keeps working",
    detail: "The elevator remains available for evacuation of persons with disabilities under this chosen mode.",
    img: "/graphics/car-evac-i.jpg",
    alt: "Person in a wheelchair inside an evacuation elevator with a large clear floor",
    tone: "bg-green text-ok-fg",
    to: "en81-76",
  },
] as const;

export function ThreeLifts() {
  const [active, setActive] = useState<(typeof CARS)[number]["id"]>("76");
  const car = CARS.find((c) => c.id === active) ?? CARS[2];

  return (
    <div>
      <div className="grid gap-3 sm:grid-cols-3">
        {CARS.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setActive(item.id)}
            aria-pressed={active === item.id}
            className={cn(
              "flex h-full flex-col overflow-hidden rounded-xl text-left shadow-[var(--shadow-border)]",
              active === item.id ? "ring-1 ring-yellow" : "",
            )}
          >
            {item.img ? (
              <img
                src={item.img}
                alt={item.alt}
                className="aspect-square w-full object-cover"
              />
            ) : null}
            <div className={cn("flex flex-1 flex-col justify-center p-4", item.tone)}>
              <p className="font-mono text-sm">{item.id}</p>
              <p className="mt-1 font-display text-2xl font-semibold">{item.title}</p>
              <p className="mt-1 text-base">{item.line}</p>
            </div>
          </button>
        ))}
      </div>
      <div className={cn("mt-4 rounded-2xl p-5 sm:p-6", car.tone)}>
        <p className="font-mono text-sm">EN 81-{car.id}</p>
        <p className="mt-2 text-lg leading-relaxed">{car.detail}</p>
        <Link
          to="/library/$id"
          params={{ id: car.to }}
          className="mt-4 inline-flex min-h-12 items-center text-base underline decoration-2 underline-offset-4"
        >
          Read this part
        </Link>
      </div>
    </div>
  );
}

import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { SHAFT_HOTSPOTS } from "@/data/uk-stack";
import { cn } from "@/lib/utils";

export function UkShaft() {
  const [active, setActive] = useState(SHAFT_HOTSPOTS[0].id);
  const spot = SHAFT_HOTSPOTS.find((s) => s.id === active) ?? SHAFT_HOTSPOTS[0];

  return (
    <div className="grid gap-4 lg:grid-cols-[1.3fr_0.7fr] lg:items-stretch">
      <div className="relative overflow-hidden rounded-2xl bg-surface shadow-[var(--shadow-elevator)]">
        <img
          src="/graphics/shaft-floors.jpg"
          alt="Cutaway of a UK office building showing three elevator cars in a shaft"
          className="aspect-video w-full object-cover"
        />
        <div className="absolute inset-0 grid grid-rows-4">
          {SHAFT_HOTSPOTS.map((h) => (
            <button
              key={h.id}
              type="button"
              onClick={() => setActive(h.id)}
              aria-pressed={active === h.id}
              className={cn(
                "flex min-h-11 items-end justify-start px-3 py-2 text-left transition-colors",
                active === h.id ? h.tone : "bg-fg/0 hover:bg-fg/20",
              )}
            >
              <span
                className={cn(
                  "rounded-md px-2 py-1 font-mono text-sm",
                  active === h.id ? "" : "bg-paper/90 text-paper-fg",
                )}
              >
                {h.code}
              </span>
            </button>
          ))}
        </div>
      </div>
      <aside className="flex flex-col justify-between rounded-2xl bg-paper p-5 text-paper-fg sm:p-6">
        <div>
          <p className="font-mono text-sm text-accent">{spot.code}</p>
          <h3 className="mt-2 font-display text-3xl font-semibold">{spot.label}</h3>
          <p className="mt-3 text-lg leading-relaxed text-paper-muted">{spot.plain}</p>
        </div>
        <Link
          to="/library/$id"
          params={{ id: spot.params.id }}
          className="mt-6 inline-flex min-h-12 items-center text-base text-accent hover:underline"
        >
          Open this code
        </Link>
      </aside>
    </div>
  );
}

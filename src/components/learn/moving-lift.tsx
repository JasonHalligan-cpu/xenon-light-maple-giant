import { cn } from "@/lib/utils";

export type RideLanding = {
  mark: string;
  name: string;
  done?: boolean;
};

export function MovingLift({
  floor,
  landings,
  missKey = 0,
}: {
  floor: number;
  landings: RideLanding[];
  missKey?: number;
}) {
  const max = Math.max(landings.length - 1, 1);
  const at = Math.max(0, Math.min(floor, max));
  const here = landings[at];

  return (
    <div
      className="overflow-hidden rounded-2xl bg-night text-night-fg shadow-[var(--shadow-elevator)] p-4"
      aria-live="polite"
    >
      <p className="font-mono text-sm uppercase tracking-wider text-cyan">
        {here ? `Floor ${here.mark}` : "Shaft"}
      </p>
      <p className="mt-1 truncate font-display text-xl font-semibold">{here?.name}</p>
      <div
        className="ride-shaft relative mt-3 overflow-hidden rounded-xl"
        style={{ height: `calc(${landings.length} * var(--ride-floor))` }}
      >
        <ol className="absolute inset-0 flex flex-col-reverse">
          {landings.map((land, i) => (
            <li
              key={`${land.mark}-${i}`}
              className="ride-landing flex items-center gap-2 border-t border-night-fg/10 px-2"
            >
              <span
                className={cn(
                  "w-10 shrink-0 font-mono text-sm tabular-nums",
                  i === at ? "text-yellow" : land.done ? "text-green" : "text-night-fg/45",
                )}
              >
                {land.mark}
              </span>
              <span
                className={cn(
                  "min-w-0 flex-1 truncate text-sm",
                  i === at ? "text-night-fg" : "text-night-fg/50",
                )}
              >
                {land.name}
              </span>
            </li>
          ))}
        </ol>
        <div
          key={missKey}
          className={cn("ride-car", missKey > 0 && "ride-car-miss")}
          style={{ bottom: `calc(${at} * var(--ride-floor) + 4px)` }}
        >
          <img
            src="/graphics/car-ordinary-j.jpg"
            alt=""
            className="h-full w-full rounded-md object-cover"
          />
        </div>
      </div>
      <p className="mt-3 text-sm text-night-fg/70">
        Right answer — the car goes up. Miss — it stays.
      </p>
    </div>
  );
}

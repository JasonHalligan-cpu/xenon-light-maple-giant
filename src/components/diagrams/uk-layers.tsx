import { useState } from "react";
import { UK_LAYERS, type UkLayer } from "@/data/uk-stack";
import { cn } from "@/lib/utils";

const TONE: Record<UkLayer["id"], string> = {
  law: "bg-orange text-accent-fg",
  recipe: "bg-yellow text-night",
  check: "bg-green text-ok-fg",
};

export function UkLayers() {
  const [open, setOpen] = useState<UkLayer["id"]>("law");
  const layer = UK_LAYERS.find((l) => l.id === open) ?? UK_LAYERS[0];

  return (
    <div>
      <div className="grid gap-2 sm:grid-cols-3">
        {UK_LAYERS.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setOpen(item.id)}
            aria-pressed={open === item.id}
            className={cn(
              "min-h-24 rounded-xl p-4 text-left",
              TONE[item.id],
              open === item.id ? "ring-1 ring-yellow" : "opacity-80",
            )}
          >
            <p className="font-mono text-sm">{item.code}</p>
            <p className="mt-1 font-display text-2xl font-semibold">{item.title}</p>
            <p className="mt-1 text-sm opacity-90">{item.kicker}</p>
          </button>
        ))}
      </div>
      <div className="mt-4 rounded-2xl bg-surface p-5 shadow-[var(--shadow-border)] sm:p-6">
        <p className="text-sm font-medium uppercase tracking-wider text-faint">
          What it means
        </p>
        <p className="mt-3 text-lg leading-relaxed">{layer.plain}</p>
        <ul className="mt-4 space-y-2">
          {layer.remember.map((line) => (
            <li key={line} className="rounded-xl bg-inset px-4 py-3 text-base">
              {line}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

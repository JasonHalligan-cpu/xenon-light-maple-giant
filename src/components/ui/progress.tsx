import { cn } from "@/lib/utils";

export function Progress({
  value,
  className,
  tone = "accent",
}: {
  value: number;
  className?: string;
  tone?: "accent" | "ok" | "paper";
}) {
  const pct = Math.max(0, Math.min(100, Math.round(value * 100)));
  const fill =
    tone === "ok" ? "bg-ok" : tone === "paper" ? "bg-paper" : "bg-accent";
  return (
    <div
      className={cn(
        "h-1.5 w-full overflow-hidden rounded-full bg-fg/10",
        className,
      )}
      role="progressbar"
      aria-valuenow={pct}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <div
        className={cn("h-full rounded-full transition-[width] duration-300", fill)}
        style={{ width: `${pct}%` }}
      />
    </div>
  );
}

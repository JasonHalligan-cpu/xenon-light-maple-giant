import { Link } from "@tanstack/react-router";
import { advertForSlot, type SponsorPackageId } from "@/data/sponsors";
import { cn } from "@/lib/utils";

export function AdSlot({
  slot,
  size,
}: {
  slot: SponsorPackageId;
  size: "billboard" | "card" | "strip";
}) {
  const ad = advertForSlot(slot);
  return (
    <aside
      className={cn(
        "overflow-hidden rounded-2xl shadow-[var(--shadow-border)]",
        ad.tone,
        size === "strip" && "p-4 sm:px-5 sm:py-4",
      )}
      aria-label={`Simulated advertisement for ${ad.brand}`}
    >
      {size !== "strip" ? (
        <img
          src={ad.img}
          alt={ad.alt}
          className={cn(
            "w-full object-cover",
            size === "billboard" ? "aspect-[16/7] sm:aspect-[21/8]" : "aspect-video",
          )}
        />
      ) : null}
      <div className={cn(size === "strip" ? "" : "p-5 sm:p-6")}>
        <p className="font-mono text-sm uppercase tracking-wider opacity-80">
          Advertisement · Simulated
        </p>
        <div
          className={cn(
            "mt-2 grid gap-3",
            size === "billboard" && "sm:grid-cols-[1fr_auto] sm:items-end",
            size === "strip" && "sm:grid-cols-[1fr_auto] sm:items-center",
          )}
        >
          <div>
            <p className="text-sm font-medium">
              {ad.brand}
              <span className="opacity-70"> · {ad.town}</span>
            </p>
            <p
              className={cn(
                "mt-1 font-display font-semibold text-pretty",
                size === "billboard" ? "text-3xl sm:text-4xl" : "text-2xl",
              )}
            >
              {ad.headline}
            </p>
            {size !== "strip" ? (
              <p className="mt-2 max-w-xl text-base opacity-90">{ad.line}</p>
            ) : null}
          </div>
          <Link
            to="/adverts/$id"
            params={{ id: ad.id }}
            className={cn(
              "inline-flex min-h-11 items-center justify-center rounded-lg px-4 text-base",
              ad.tone.includes("bg-orange")
                ? "bg-paper text-paper-fg hover:bg-raised"
                : "bg-orange text-accent-fg hover:brightness-110",
            )}
          >
            {ad.cta}
          </Link>
        </div>
      </div>
    </aside>
  );
}

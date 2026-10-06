import { createFileRoute, Link } from "@tanstack/react-router";
import { buttonVariants } from "@/components/ui/button";
import { ADVERT_BY_ID, ADVERTS, type AdvertId } from "@/data/sponsors";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/adverts/$id")({ component: AdvertPage });

function isAd(id: string): id is AdvertId {
  return id in ADVERT_BY_ID;
}

function AdvertPage() {
  const { id } = Route.useParams();
  if (!isAd(id)) {
    return (
      <main className="mx-auto max-w-2xl px-4 py-16">
        <p>That advert is not on the board.</p>
        <Link to="/adverts" className="mt-4 inline-block text-accent">
          All simulated ads
        </Link>
      </main>
    );
  }
  const ad = ADVERT_BY_ID[id];

  return (
    <main>
      <section className={cn("text-inherit", ad.tone)}>
        <div className="mx-auto grid max-w-6xl lg:grid-cols-2">
          <img src={ad.img} alt={ad.alt} className="aspect-video w-full object-cover lg:aspect-auto lg:min-h-[28rem]" />
          <div className="flex flex-col justify-end p-6 sm:p-10">
            <p className="font-mono text-sm uppercase tracking-wider opacity-80">
              Advertisement · Simulated · {ad.town}
            </p>
            <p className="mt-3 text-lg font-medium">{ad.brand}</p>
            <h1 className="mt-2 font-display text-4xl font-semibold text-pretty sm:text-5xl">
              {ad.headline}
            </h1>
            <p className="mt-4 max-w-xl text-lg opacity-90">{ad.line}</p>
            <p className="mt-6 inline-flex min-h-12 items-center rounded-lg bg-paper px-4 text-base text-paper-fg">
              {ad.cta} · demo only
            </p>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
        <p className="rounded-xl bg-raised px-4 py-3 text-sm text-muted">
          Pretend page. {ad.brand} is not a real firm. ElevatorIQ uses it to show
          how a future sponsor would land.
        </p>
        <h2 className="mt-8 font-display text-3xl font-semibold">{ad.kicker}</h2>
        <p className="mt-3 text-lg text-muted">{ad.pitch}</p>
        <ul className="mt-6 grid gap-3">
          {ad.points.map((p) => (
            <li key={p} className="rounded-xl bg-surface p-4 text-lg shadow-[var(--shadow-border)]">
              {p}
            </li>
          ))}
        </ul>
        <div className="mt-10 flex flex-wrap gap-3">
          <Link to="/" className={buttonVariants()}>
            Back to the lobby
          </Link>
          <Link to="/sponsors" className={buttonVariants({ variant: "secondary" })}>
            Put a real name here
          </Link>
        </div>
        <ul className="mt-12 flex flex-wrap gap-2">
          {ADVERTS.filter((a) => a.id !== ad.id).map((a) => (
            <li key={a.id}>
              <Link
                to="/adverts/$id"
                params={{ id: a.id }}
                className="inline-flex min-h-11 items-center rounded-lg bg-raised px-3 text-base hover:bg-surface"
              >
                {a.brand}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}

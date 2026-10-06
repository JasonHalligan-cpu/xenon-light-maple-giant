import { createFileRoute, Link } from "@tanstack/react-router";
import { AdSlot } from "@/components/ads/ad-slot";
import { EnquireForm } from "@/components/ads/enquire-form";
import { SPONSOR_BY_ID, SPONSOR_PACKAGES, type SponsorPackageId } from "@/data/sponsors";

export const Route = createFileRoute("/sponsors/$id")({ component: SponsorPackagePage });

function isPack(id: string): id is SponsorPackageId {
  return id in SPONSOR_BY_ID;
}

function SponsorPackagePage() {
  const { id } = Route.useParams();
  if (!isPack(id)) {
    return (
      <main className="mx-auto max-w-2xl px-4 py-16">
        <p>That slot is not on the board.</p>
        <Link to="/sponsors" className="mt-4 inline-block text-accent">
          All packages
        </Link>
      </main>
    );
  }
  const pack = SPONSOR_BY_ID[id];

  return (
    <main className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
      <Link to="/sponsors" className="text-base text-accent hover:underline">
        All packages
      </Link>
      <p className="mt-4 font-mono text-sm uppercase tracking-wider text-accent">
        {pack.kicker} · {pack.price}
      </p>
      <h1 className="mt-2 font-display text-4xl font-semibold sm:text-5xl">{pack.title}</h1>
      <p className="mt-3 max-w-2xl text-lg text-muted">
        {pack.placement} Right now this slot runs a simulated campaign.
      </p>

      <div className="mt-8">
        <AdSlot slot={pack.id} size={pack.size} />
      </div>

      <dl className="mt-8 grid gap-4 sm:grid-cols-2">
        <div className="rounded-2xl bg-surface p-5 shadow-[var(--shadow-border)]">
          <dt className="text-sm font-medium uppercase tracking-wider text-faint">Who sees it</dt>
          <dd className="mt-2 text-lg">{pack.who}</dd>
        </div>
        <div className="rounded-2xl bg-surface p-5 shadow-[var(--shadow-border)]">
          <dt className="text-sm font-medium uppercase tracking-wider text-faint">Reach</dt>
          <dd className="mt-2 text-lg">{pack.reach}</dd>
        </div>
        <div className="rounded-2xl bg-surface p-5 shadow-[var(--shadow-border)] sm:col-span-2">
          <dt className="text-sm font-medium uppercase tracking-wider text-faint">Creative spec</dt>
          <dd className="mt-2 text-lg">{pack.spec}</dd>
        </div>
      </dl>

      <section className="mt-12 grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-start">
        <div>
          <h2 className="font-display text-3xl font-semibold">Hold a place</h2>
          <p className="mt-2 text-lg text-muted">
            Sponsorship is not live yet. Leave your organisation and we keep
            the enquiry against this slot.
          </p>
        </div>
        <EnquireForm packId={pack.id} />
      </section>

      <ul className="mt-12 flex flex-wrap gap-2">
        {SPONSOR_PACKAGES.filter((p) => p.id !== pack.id).map((p) => (
          <li key={p.id}>
            <Link
              to="/sponsors/$id"
              params={{ id: p.id }}
              className="inline-flex min-h-11 items-center rounded-lg bg-raised px-3 text-base hover:bg-surface"
            >
              {p.title}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}

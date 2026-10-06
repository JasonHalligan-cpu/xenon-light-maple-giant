import { createFileRoute, Link } from "@tanstack/react-router";
import { AdSlot } from "@/components/ads/ad-slot";
import { ADVERTS, SPONSOR_BY_ID } from "@/data/sponsors";

export const Route = createFileRoute("/adverts/")({ component: AdvertsPage });

function AdvertsPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
      <p className="text-sm font-medium uppercase tracking-wider text-accent">
        Simulated adverts
      </p>
      <h1 className="mt-2 font-display text-4xl font-semibold sm:text-5xl">
        Pretend brands, real slots.
      </h1>
      <p className="mt-4 max-w-2xl text-lg text-muted">
        These five campaigns are fiction — so you can see how ElevatorIQ will look
        with partners in. None of them is a real company. Tap an advert to open
        its landing page.
      </p>
      <ul className="mt-10 grid gap-6">
        {ADVERTS.map((ad) => (
          <li key={ad.id}>
            <AdSlot slot={ad.slot} size={SPONSOR_BY_ID[ad.slot].size} />
          </li>
        ))}
      </ul>
      <p className="mt-10 text-sm text-faint">
        Want the slot for a real name?{" "}
        <Link to="/sponsors" className="text-accent hover:underline">
          Hold a place
        </Link>
        .
      </p>
    </main>
  );
}

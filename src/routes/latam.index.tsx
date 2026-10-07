import { createFileRoute, Link } from "@tanstack/react-router";
import { LATAM_COUNTRIES } from "@/data/latam";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/latam/")({
  head: () =>
    pageHead({
      title: "Latin America elevator rules, by country",
      description:
        "A separate sub-tab for each Latin American country, using that country’s own book.",
      path: "/latam",
    }),
  component: LatamHome,
});

function LatamHome() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
      <p className="text-sm font-medium uppercase tracking-wider text-accent">Latin America</p>
      <h1 className="mt-2 font-display text-4xl font-semibold text-pretty sm:text-5xl">
        One sub-tab for each country
      </h1>
      <p className="mt-4 max-w-2xl text-lg text-muted">
        There is no single Latin American elevator code. Open a country. Lessons, practice, the test, and the codes stay inside that sub-tab, and they teach that country’s own book.
      </p>
      <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {LATAM_COUNTRIES.map((country) => (
          <li key={country.slug}>
            <Link
              to="/latam/$country"
              params={{ country: country.slug }}
              className="block min-h-28 rounded-2xl bg-surface p-5 shadow-[var(--shadow-border)] hover:bg-raised"
            >
              <span className="font-display text-2xl font-semibold">{country.name}</span>
              <span className="mt-2 block text-base text-muted">{country.body}</span>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}

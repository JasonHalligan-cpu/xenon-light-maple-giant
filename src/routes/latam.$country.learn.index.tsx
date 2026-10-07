import { createFileRoute, Link } from "@tanstack/react-router";
import { LATAM_BY_SLUG } from "@/data/latam";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/latam/$country/learn/")({
  head: ({ params }) => {
    const country = LATAM_BY_SLUG[params.country];
    return pageHead({
      title: country ? `${country.name} lessons` : "Lessons",
      description: country ? `Lessons for ${country.name} only.` : "Country lessons.",
      path: `/latam/${params.country}/learn`,
    });
  },
  component: CountryLessons,
});

function CountryLessons() {
  const { country: slug } = Route.useParams();
  const country = LATAM_BY_SLUG[slug];
  if (!country) return null;
  return (
    <main className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <p className="text-sm font-medium uppercase tracking-wider text-accent">{country.name}</p>
      <h1 className="mt-2 font-display text-4xl font-semibold">Lessons</h1>
      <ul className="mt-8 space-y-3">
        {country.codes.map((code, index) => (
          <li key={code.id}>
            <Link
              to="/latam/$country/learn/$id"
              params={{ country: slug, id: code.id }}
              className="block rounded-2xl bg-surface p-5 shadow-[var(--shadow-border)] hover:bg-raised"
            >
              <p className="text-sm text-muted">Floor {index + 1}</p>
              <p className="mt-1 font-display text-2xl font-semibold">{code.title}</p>
              <p className="mt-2 font-mono text-sm text-yellow">{code.code}</p>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}

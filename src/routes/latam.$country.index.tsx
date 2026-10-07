import { createFileRoute, Link } from "@tanstack/react-router";
import { StatuteSplit } from "@/components/learn/statute-split";
import { LATAM_BY_SLUG } from "@/data/latam";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/latam/$country/")({
  head: ({ params }) => {
    const country = LATAM_BY_SLUG[params.country];
    return pageHead({
      title: country ? `${country.name} elevator rules, in simpler terms` : "Latin America",
      description: country
        ? `${country.name}: the lessons, practice, test, and codes for that country’s own book.`
        : "A Latin American country sub-tab.",
      path: `/latam/${params.country}`,
    });
  },
  component: CountryOverview,
});

function CountryOverview() {
  const { country: slug } = Route.useParams();
  const country = LATAM_BY_SLUG[slug];
  if (!country) {
    return (
      <main className="mx-auto max-w-3xl px-4 py-10">
        <p>That country is not on this tab.</p>
        <Link to="/latam" className="mt-4 inline-block text-accent">
          All countries
        </Link>
      </main>
    );
  }
  const doors = [
    { to: "/latam/$country/learn" as const, title: "Lessons", line: `${country.codes.length} floors. They stay in ${country.name}.` },
    { to: "/latam/$country/practice" as const, title: "Practice", line: `${country.name} questions only.` },
    { to: "/latam/$country/test" as const, title: "Test", line: "Four questions. Pass mark 3. One sitting." },
    { to: "/latam/$country/library" as const, title: "Codes", line: `The books named for ${country.name}.` },
  ];
  return (
    <main className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
      <p className="text-sm font-medium uppercase tracking-wider text-accent">{country.name}</p>
      <h1 className="mt-2 font-display text-4xl font-semibold text-pretty sm:text-5xl">
        {`${country.name}, in simpler terms`}
      </h1>
      <p className="mt-4 max-w-2xl text-lg text-muted">
        The standards body is {country.body}. These pages are a guide to that book, not the published standard, and not legal advice.
      </p>
      <ul className="mt-8 grid gap-3 sm:grid-cols-2">
        {doors.map((door) => (
          <li key={door.title}>
            <Link
              to={door.to}
              params={{ country: slug }}
              className="block min-h-28 rounded-2xl bg-surface p-5 shadow-[var(--shadow-border)] hover:bg-raised"
            >
              <span className="font-display text-2xl font-semibold">{door.title}</span>
              <span className="mt-2 block text-base text-muted">{door.line}</span>
            </Link>
          </li>
        ))}
      </ul>
      <ul className="mt-10 space-y-8">
        {country.codes.map((part) => (
          <li key={part.id}>
            <h2 className="mb-3 font-display text-2xl font-semibold">{part.code}</h2>
            <StatuteSplit statute={part.statute} plain={part.plain} why={part.why} />
          </li>
        ))}
      </ul>
    </main>
  );
}

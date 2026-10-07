import { createFileRoute, Link } from "@tanstack/react-router";
import { StatuteSplit } from "@/components/learn/statute-split";
import { BackLink, NextLink, PageArrows } from "@/components/layout/page-arrows";
import { LATAM_BY_SLUG } from "@/data/latam";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/latam/$country/library/$id")({
  head: ({ params }) => {
    const country = LATAM_BY_SLUG[params.country];
    const code = country?.codes.find((item) => item.id === params.id);
    return pageHead({
      title: code ? `${code.code} explained` : "Code",
      description: code?.plain ?? "A country code in ordinary words.",
      path: `/latam/${params.country}/library/${params.id}`,
    });
  },
  component: CountryCode,
});

function CountryCode() {
  const { country: slug, id } = Route.useParams();
  const country = LATAM_BY_SLUG[slug];
  const code = country?.codes.find((item) => item.id === id);
  if (!country || !code) {
    return (
      <main className="mx-auto max-w-3xl px-4 py-10">
        <p>That code is not on this sub-tab.</p>
      </main>
    );
  }
  const index = country.codes.findIndex((item) => item.id === id);
  const prev = index > 0 ? country.codes[index - 1] : undefined;
  const next = index >= 0 && index < country.codes.length - 1 ? country.codes[index + 1] : undefined;
  return (
    <main className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
      <PageArrows
        back={
          prev ? (
            <BackLink to="/latam/$country/library/$id" params={{ country: slug, id: prev.id }} />
          ) : null
        }
        next={
          next ? (
            <NextLink to="/latam/$country/library/$id" params={{ country: slug, id: next.id }} />
          ) : null
        }
      />
      <p className="text-sm font-medium uppercase tracking-wider text-accent">{country.name}</p>
      <p className="mt-2 font-mono text-sm text-yellow">{code.code}</p>
      <h1 className="mt-2 font-display text-4xl font-semibold">{code.title}</h1>
      <div className="mt-8">
        <StatuteSplit statute={code.statute} plain={code.plain} why={code.why} />
      </div>
      <Link to="/latam/$country/library" params={{ country: slug }} className="mt-8 inline-flex min-h-11 items-center text-accent">
        All codes
      </Link>
    </main>
  );
}

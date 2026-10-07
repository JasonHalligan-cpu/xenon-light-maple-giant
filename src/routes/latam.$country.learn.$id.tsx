import { createFileRoute, Link } from "@tanstack/react-router";
import { StatuteSplit } from "@/components/learn/statute-split";
import { BackLink, NextLink, PageArrows } from "@/components/layout/page-arrows";
import { LATAM_BY_SLUG } from "@/data/latam";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/latam/$country/learn/$id")({
  head: ({ params }) => {
    const country = LATAM_BY_SLUG[params.country];
    const code = country?.codes.find((item) => item.id === params.id);
    return pageHead({
      title: code && country ? `${code.title} · ${country.name}` : "Lesson",
      description: code?.plain ?? "A country lesson.",
      path: `/latam/${params.country}/learn/${params.id}`,
    });
  },
  component: CountryLesson,
});

function CountryLesson() {
  const { country: slug, id } = Route.useParams();
  const country = LATAM_BY_SLUG[slug];
  const index = country?.codes.findIndex((item) => item.id === id) ?? -1;
  const code = index >= 0 ? country?.codes[index] : undefined;
  if (!country || !code) {
    return (
      <main className="mx-auto max-w-3xl px-4 py-10">
        <p>That lesson is not on this sub-tab.</p>
      </main>
    );
  }
  const prev = index > 0 ? country.codes[index - 1] : undefined;
  const next = index < country.codes.length - 1 ? country.codes[index + 1] : undefined;
  return (
    <main className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
      <PageArrows
        back={
          prev ? (
            <BackLink to="/latam/$country/learn/$id" params={{ country: slug, id: prev.id }} />
          ) : null
        }
        next={
          next ? (
            <NextLink to="/latam/$country/learn/$id" params={{ country: slug, id: next.id }} />
          ) : null
        }
      />
      <p className="text-sm font-medium uppercase tracking-wider text-accent">
        {country.name} · Floor {index + 1} of {country.codes.length}
      </p>
      <h1 className="mt-2 font-display text-4xl font-semibold">{code.title}</h1>
      <p className="mt-2 font-mono text-sm text-yellow">{code.code}</p>
      <div className="mt-8">
        <StatuteSplit statute={code.statute} plain={code.plain} why={code.why} />
      </div>
      <div className="mt-8">
        <Link to="/latam/$country/learn" params={{ country: slug }} className="inline-flex min-h-11 items-center text-accent">
          All lessons
        </Link>
      </div>
    </main>
  );
}

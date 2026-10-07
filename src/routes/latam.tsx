import { createFileRoute, Link, Outlet, useRouterState } from "@tanstack/react-router";
import { LATAM_BY_SLUG } from "@/data/latam";

export const Route = createFileRoute("/latam")({ component: LatamLayout });

function LatamLayout() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const slug = pathname.split("/")[2];
  const current = slug ? LATAM_BY_SLUG[slug] : undefined;
  return (
    <div>
      <p className="border-b border-border bg-surface px-4 py-3 text-base text-muted sm:px-6">
        <span className="font-medium text-fg">Latin America.</span> Pick a country. Lessons, practice, the test, and the codes on that page follow that country’s own book.
      </p>
      {current ? (
        <nav aria-label="Countries" className="border-b border-border bg-bg">
          <div className="mx-auto flex max-w-6xl items-center gap-4 px-4 sm:px-6">
            <Link to="/latam" className="inline-flex min-h-12 items-center text-base text-accent">
              All countries
            </Link>
            <span className="inline-flex min-h-12 items-center border-b-2 border-orange text-base text-yellow">
              {current.name}
            </span>
          </div>
        </nav>
      ) : null}
      <Outlet />
    </div>
  );
}

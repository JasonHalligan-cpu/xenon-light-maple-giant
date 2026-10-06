import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/sponsors")({ component: SponsorsLayout });

function SponsorsLayout() {
  return <Outlet />;
}

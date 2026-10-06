import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/adverts")({ component: AdvertsLayout });

function AdvertsLayout() {
  return <Outlet />;
}

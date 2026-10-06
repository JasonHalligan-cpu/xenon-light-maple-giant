import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/scenarios")({ component: ScenariosLayout });

function ScenariosLayout() {
  return <Outlet />;
}

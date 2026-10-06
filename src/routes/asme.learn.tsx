import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/asme/learn")({ component: () => <Outlet /> });

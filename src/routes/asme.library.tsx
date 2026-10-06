import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/asme/library")({ component: () => <Outlet /> });

import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/latam/$country")({ component: () => <Outlet /> });

import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/latam/$country/learn")({ component: () => <Outlet /> });

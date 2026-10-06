import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/asme")({ component: AsmeLayout });

function AsmeLayout() {
  return (
    <div>
      <p className="border-b border-border bg-surface px-4 py-3 text-base text-muted sm:px-6">
        <span className="font-medium text-fg">ASME regulations.</span> Lessons, practice, the test, and the codes on this tab are ASME A17.1 / CSA B44. They are not EN 81. Open EU regulations, or the lobby, to leave.
      </p>
      <Outlet />
    </div>
  );
}
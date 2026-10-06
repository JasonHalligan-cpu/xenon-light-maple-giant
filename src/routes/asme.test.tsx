import { createFileRoute } from "@tanstack/react-router";
import { TestSession } from "./test";

import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/asme/test")({
  head: () =>
    pageHead({
      title: "ASME A17.1 test · elevator code",
      description:
        "A short test on ASME A17.1 / CSA B44, firefighter operation, and occupant evacuation.",
      path: "/asme/test",
    }),
  component: () => <TestSession region="asme" />,
});

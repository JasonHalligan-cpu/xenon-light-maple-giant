import { createFileRoute } from "@tanstack/react-router";
import { PracticeSession } from "./practice";

import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/asme/practice")({
  head: () =>
    pageHead({
      title: "ASME A17.1 practice questions",
      description:
        "Practice questions on ASME A17.1 / CSA B44, Phase I, Phase II, and occupant evacuation.",
      path: "/asme/practice",
    }),
  component: () => <PracticeSession region="asme" />,
});

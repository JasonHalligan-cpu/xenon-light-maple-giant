import { createFileRoute } from "@tanstack/react-router";
import { LessonList } from "./learn.index";

import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/asme/learn/")({
  head: () =>
    pageHead({
      title: "ASME A17.1 lessons · elevator code explained",
      description:
        "Lessons on ASME A17.1 / CSA B44, Phase I, Phase II, and occupant evacuation. Separate from EN 81.",
      path: "/asme/learn",
    }),
  component: () => <LessonList region="asme" />,
});

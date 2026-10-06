import { createFileRoute } from "@tanstack/react-router";
import { CodeLibrary } from "./library.index";

import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/asme/library/")({
  head: () =>
    pageHead({
      title: "ASME A17.1 code library · A17.2 and A17.3 explained",
      description:
        "ASME A17.1, A17.2 inspection, and A17.3 for existing elevators, explained in plain language. Not EN 81.",
      path: "/asme/library",
    }),
  component: () => <CodeLibrary region="asme" />,
});

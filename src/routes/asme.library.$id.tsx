import { createFileRoute } from "@tanstack/react-router";
import { CodePage } from "./library.$id";
import { STANDARD_BY_ID } from "@/data/standards";
import type { StandardId } from "@/data/types";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/asme/library/$id")({
  head: ({ params }) => {
    const std = STANDARD_BY_ID[params.id as StandardId];
    return pageHead({
      title: std ? `${std.code} explained · ASME` : "ASME code",
      description:
        std?.oneLiner ?? "An ASME elevator code explained in plain language. Not EN 81.",
      path: `/asme/library/${params.id}`,
    });
  },
  component: AsmeCode,
});

function AsmeCode() {
  const { id } = Route.useParams();
  return <CodePage id={id} region="asme" />;
}

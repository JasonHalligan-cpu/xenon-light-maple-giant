import { createFileRoute } from "@tanstack/react-router";
import { LessonFloor } from "./learn.$id";
import { LESSON_BY_ID } from "@/data/lessons";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/asme/learn/$id")({
  head: ({ params }) => {
    const lesson = LESSON_BY_ID[params.id];
    return pageHead({
      title: lesson ? `${lesson.title} · ASME A17.1 lesson` : "ASME A17.1 lesson",
      description:
        lesson?.summary ??
        "An ASME A17.1 lesson in plain language. Not EN 81.",
      path: `/asme/learn/${params.id}`,
    });
  },
  component: AsmeLesson,
});

function AsmeLesson() {
  const { id } = Route.useParams();
  return <LessonFloor id={id} region="asme" />;
}

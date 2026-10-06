import { Link } from "@tanstack/react-router";
import { SKILLS } from "@/data/skills";
import { LESSONS } from "@/data/lessons";
import type { SkillId } from "@/data/types";
import { MASTERY } from "@/lib/adaptive";
import { cn, formatPct } from "@/lib/utils";

export function ShaftMap({
  mastery,
  compact = false,
}: {
  mastery: Record<SkillId, number>;
  compact?: boolean;
}) {
  return (
    <ol className={cn("flex flex-col-reverse gap-1.5", compact && "gap-1")}>
      {SKILLS.filter((skill) => (skill.region ?? "eu") === "eu").map((skill) => {
        const p = mastery[skill.id] ?? 0;
        const done = p >= MASTERY;
        const lesson = LESSONS.find((l) => l.skillIds[0] === skill.id);
        const className = cn(
          "flex min-h-12 min-w-0 items-center gap-3 rounded-lg px-3 py-2.5 transition-colors duration-150",
          done ? "bg-ok/15" : "bg-raised hover:bg-raised/80",
        );
        const inner = (
          <>
            <span
              className={cn(
                "grid w-12 shrink-0 place-items-center font-mono text-sm tabular-nums",
                done ? "text-ok" : "text-muted",
              )}
            >
              {skill.floor}
            </span>
            <span className="min-w-0 flex-1">
              <span className="block truncate text-base text-fg">{skill.name}</span>
              {!compact ? (
                <span className="block truncate text-sm text-faint">{skill.blurb}</span>
              ) : null}
            </span>
            <span className="font-mono text-sm tabular-nums text-muted">{formatPct(p)}</span>
          </>
        );
        return (
          <li key={skill.id}>
            {lesson ? (
              <Link to="/learn/$id" params={{ id: lesson.id }} className={className}>
                {inner}
              </Link>
            ) : (
              <Link to="/practice" className={className}>
                {inner}
              </Link>
            )}
          </li>
        );
      })}
    </ol>
  );
}

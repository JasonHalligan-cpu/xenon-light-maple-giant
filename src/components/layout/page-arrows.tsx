import { forwardRef, type AnchorHTMLAttributes, type ReactNode } from "react";
import { createLink } from "@tanstack/react-router";
import { ChevronLeft, ChevronRight } from "lucide-react";

export const arrowClass =
  "inline-flex min-h-11 items-center gap-1.5 text-base font-medium text-fg hover:text-accent";

const BackAnchor = forwardRef<HTMLAnchorElement, AnchorHTMLAttributes<HTMLAnchorElement>>(
  (props, ref) => (
    <a ref={ref} {...props} className={arrowClass}>
      <ChevronLeft className="size-5 shrink-0" aria-hidden="true" />
      Back
    </a>
  ),
);
BackAnchor.displayName = "BackAnchor";

const NextAnchor = forwardRef<HTMLAnchorElement, AnchorHTMLAttributes<HTMLAnchorElement>>(
  (props, ref) => (
    <a ref={ref} {...props} className={arrowClass}>
      Next
      <ChevronRight className="size-5 shrink-0" aria-hidden="true" />
    </a>
  ),
);
NextAnchor.displayName = "NextAnchor";

export const BackLink = createLink(BackAnchor);
export const NextLink = createLink(NextAnchor);

export function PageArrows({ back, next }: { back?: ReactNode; next?: ReactNode }) {
  if (!back && !next) return null;
  return (
    <nav aria-label="Back and next" className="mb-8 flex items-center justify-between gap-4">
      <div className="min-w-0">{back}</div>
      <div className="min-w-0 text-right">{next}</div>
    </nav>
  );
}

import type { ReactNode } from "react";

export function StatuteSplit({
  statute,
  plain,
  why,
}: {
  statute: string;
  plain: string;
  why?: string;
}) {
  return (
    <div className="grid gap-3 lg:grid-cols-2">
      <article className="rounded-xl border-t-4 border-yellow bg-raised p-5 text-fg sm:p-6">
        <p className="text-sm font-medium uppercase tracking-[0.16em] text-yellow">
          What the standard says
        </p>
        <p className="mt-3 font-mono text-base leading-relaxed text-fg/90">{statute}</p>
      </article>
      <article className="rounded-xl border-t-4 border-green bg-paper p-5 text-paper-fg sm:p-6">
        <p className="text-sm font-medium uppercase tracking-wider text-paper-muted">
          What it means
        </p>
        <p className="mt-3 text-lg leading-relaxed">{plain}</p>
      </article>
      {why ? (
        <article className="rounded-xl border-t-4 border-yellow bg-raised p-5 text-fg sm:p-6 lg:col-span-2">
          <p className="text-sm font-medium uppercase tracking-wider text-yellow">
            WHY IT MATTERS
          </p>
          <p className="mt-3 text-lg leading-relaxed">{why}</p>
        </article>
      ) : null}
    </div>
  );
}

export function Panel({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-2xl bg-surface p-5 shadow-[var(--shadow-border)] sm:p-6 ${className}`}
    >
      {children}
    </div>
  );
}

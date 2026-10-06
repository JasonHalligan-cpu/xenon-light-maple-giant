import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import type { SponsorPackageId } from "@/data/sponsors";

const KEY = "liftiq-sponsor-enquiries";

export function EnquireForm({ packId }: { packId: SponsorPackageId }) {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const row = {
      at: new Date().toISOString(),
      pack: packId,
      name: String(data.get("name") ?? "").trim(),
      org: String(data.get("org") ?? "").trim(),
      email: String(data.get("email") ?? "").trim(),
      note: String(data.get("note") ?? "").trim(),
    };
    const prev = JSON.parse(localStorage.getItem(KEY) ?? "[]") as unknown[];
    localStorage.setItem(KEY, JSON.stringify([row, ...prev].slice(0, 40)));
    setSent(true);
  }

  if (sent) {
    return (
      <p className="rounded-2xl bg-green p-5 text-lg text-ok-fg">
        Noted. When ElevatorIQ opens sponsorship, this enquiry is already on the
        list. We will not sell the address.
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-3 rounded-2xl bg-surface p-5 shadow-[var(--shadow-border)]">
      <label className="grid gap-1 text-sm">
        Name
        <input
          required
          name="name"
          autoComplete="name"
          className="min-h-12 rounded-lg bg-paper px-3 text-base text-paper-fg shadow-[var(--shadow-border)]"
        />
      </label>
      <label className="grid gap-1 text-sm">
        Organisation
        <input
          required
          name="org"
          autoComplete="organization"
          className="min-h-12 rounded-lg bg-paper px-3 text-base text-paper-fg shadow-[var(--shadow-border)]"
        />
      </label>
      <label className="grid gap-1 text-sm">
        Work email
        <input
          required
          type="email"
          name="email"
          autoComplete="email"
          className="min-h-12 rounded-lg bg-paper px-3 text-base text-paper-fg shadow-[var(--shadow-border)]"
        />
      </label>
      <label className="grid gap-1 text-sm">
        What you would put on the landing
        <textarea
          name="note"
          rows={3}
          className="rounded-lg bg-paper px-3 py-2 text-base text-paper-fg shadow-[var(--shadow-border)]"
        />
      </label>
      <Button type="submit" size="lg">
        Hold a place
      </Button>
    </form>
  );
}

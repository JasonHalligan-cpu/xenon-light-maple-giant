import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { SHOP_ITEMS } from "@/data/shop";

export const Route = createFileRoute("/shop")({ component: ShopPage });

function ShopPage() {
  const [basket, setBasket] = useState<string[]>([]);

  function toggle(id: string) {
    setBasket((current) =>
      current.includes(id) ? current.filter((item) => item !== id) : [...current, id],
    );
  }

  return (
    <main>
      <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
        <p className="text-sm font-medium uppercase tracking-wider text-accent">
          Demonstration
        </p>
        <div className="mt-2 flex flex-wrap items-end justify-between gap-3">
          <h1 className="font-display text-4xl font-semibold sm:text-5xl">Shopping</h1>
          <p className="font-mono text-sm text-muted">{basket.length} in the basket</p>
        </div>
        <p className="mt-4 max-w-2xl text-lg text-muted">
          A pretend shop for later sponsorship. Nothing here is for sale, and no
          payment is taken.
        </p>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2">
          {SHOP_ITEMS.map((item) => {
            const inBasket = basket.includes(item.id);
            return (
              <li key={item.id} className="flex flex-col rounded-2xl bg-surface p-5 shadow-[var(--shadow-border)]">
                <p className="font-mono text-xs uppercase tracking-wider text-accent">{item.kind}</p>
                <h2 className="mt-2 font-display text-2xl font-semibold">{item.name}</h2>
                <p className="mt-2 flex-1 text-base leading-relaxed text-muted">{item.line}</p>
                <div className="mt-5 flex items-center justify-between gap-3">
                  <p className="font-display text-2xl">{item.price}</p>
                  <Button
                    variant={inBasket ? "secondary" : "primary"}
                    onClick={() => toggle(item.id)}
                  >
                    {inBasket ? "Remove" : "Add"}
                  </Button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </main>
  );
}

import { Link } from "@tanstack/react-router";
import { LANGUAGES, useLanguage, type LangId } from "@/lib/language";
import { cn } from "@/lib/utils";

function LanguageFlag({ id }: { id: LangId }) {
  const common = "h-4 w-6 shrink-0 overflow-hidden rounded-xs ring-1 ring-night-fg/40";
  if (id === "fr") {
    return (
      <svg viewBox="0 0 3 2" className={common} aria-hidden>
        <rect width="1" height="2" fill="#0055A4" />
        <rect x="1" width="1" height="2" fill="#fff" />
        <rect x="2" width="1" height="2" fill="#EF4135" />
      </svg>
    );
  }
  if (id === "de") {
    return (
      <svg viewBox="0 0 5 3" className={common} aria-hidden>
        <rect width="5" height="1" fill="#000" />
        <rect y="1" width="5" height="1" fill="#DD0000" />
        <rect y="2" width="5" height="1" fill="#FFCE00" />
      </svg>
    );
  }
  if (id === "es") {
    return (
      <svg viewBox="0 0 5 3" className={common} aria-hidden>
        <rect width="5" height="3" fill="#AA151B" />
        <rect y="0.75" width="5" height="1.5" fill="#F1BF00" />
      </svg>
    );
  }
  if (id === "it") {
    return (
      <svg viewBox="0 0 3 2" className={common} aria-hidden>
        <rect width="1" height="2" fill="#009246" />
        <rect x="1" width="1" height="2" fill="#fff" />
        <rect x="2" width="1" height="2" fill="#CE2B37" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 60 30" className={common} aria-hidden>
      <clipPath id="uk-flag">
        <rect width="60" height="30" />
      </clipPath>
      <g clipPath="url(#uk-flag)">
        <rect width="60" height="30" fill="#012169" />
        <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="8" />
        <path d="M0,0 L60,30 M60,0 L0,30" stroke="#C8102E" strokeWidth="4" />
        <path d="M30,0 V30 M0,15 H60" stroke="#fff" strokeWidth="14" />
        <path d="M30,0 V30 M0,15 H60" stroke="#C8102E" strokeWidth="8" />
      </g>
    </svg>
  );
}

export function LobbyTabs({ current }: { current: "lobby" | "eu" | "asme" | null }) {
  const lang = useLanguage((s) => s.lang);
  const setLang = useLanguage((s) => s.setLang);
  const tabs = [
    { to: "/" as const, id: "lobby" as const, label: "Lobby" },
    { to: "/uk" as const, id: "eu" as const, label: "EU regulations" },
    { to: "/asme" as const, id: "asme" as const, label: "ASME regulations" },
  ];

  return (
    <nav aria-label="Lobby" className="border-t border-white/10 bg-night">
      <ul className="mx-auto flex max-w-6xl items-center gap-1 overflow-x-auto px-4 sm:px-6">
        {tabs.map((tab) => {
          const active = tab.id === current;
          return (
            <li key={tab.id} className="shrink-0">
              <Link
                to={tab.to}
                className={cn(
                  "inline-flex min-h-12 items-center border-b-2 px-4 text-base whitespace-nowrap",
                  active
                    ? "border-orange text-yellow"
                    : "border-transparent text-muted hover:text-fg",
                )}
                aria-current={active ? "page" : undefined}
              >
                {tab.label}
              </Link>
            </li>
          );
        })}
        <li className="ml-auto flex shrink-0 items-center gap-1" data-no-translate>
          {LANGUAGES.map((item) => {
            const on = item.id === lang;
            return (
              <button
                key={item.id}
                type="button"
                aria-label={item.label}
                aria-pressed={on}
                onClick={() => setLang(item.id)}
                className={cn(
                  "inline-flex min-h-12 items-center border-b-2 px-1.5",
                  on ? "border-orange" : "border-transparent opacity-70 hover:opacity-100",
                )}
              >
                <LanguageFlag id={item.id} />
              </button>
            );
          })}
        </li>
      </ul>
    </nav>
  );
}

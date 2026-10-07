import { Link, useRouterState } from "@tanstack/react-router";
import { BookOpen, Building2, ClipboardCheck, GraduationCap, Layers3, Repeat, ShoppingBag } from "lucide-react";
import { useEffect, useLayoutEffect, useState, type MouseEvent, type ReactNode } from "react";
import { LobbyTabs } from "@/components/layout/lobby-tabs";
import { LATAM_BY_SLUG } from "@/data/latam";
import { dictionaryFor, useLanguage } from "@/lib/language";
import { useProgress } from "@/lib/store";
import { applyLanguage } from "@/lib/translate-dom";
import { cn } from "@/lib/utils";

const EU_NAV = [
  { to: "/learn", label: "Lessons", icon: GraduationCap },
  { to: "/practice", label: "Practice", icon: Repeat },
  { to: "/test", label: "Test", icon: ClipboardCheck },
  { to: "/library", label: "Codes", icon: BookOpen },
  { to: "/classify", label: "Specify", icon: Building2 },
] as const;

const ASME_NAV = [
  { to: "/asme", label: "Overview", icon: Building2 },
  { to: "/asme/learn", label: "Lessons", icon: GraduationCap },
  { to: "/asme/practice", label: "Practice", icon: Repeat },
  { to: "/asme/test", label: "Test", icon: ClipboardCheck },
  { to: "/asme/library", label: "Codes", icon: BookOpen },
] as const;

function navActive(pathname: string, to: string) {
  if (to === "/asme") return pathname === "/asme" || pathname === "/asme/";
  return pathname === to || pathname.startsWith(`${to}/`);
}

function CountryDoors({
  country,
  pathname,
  mobile,
}: {
  country: string;
  pathname: string;
  mobile?: boolean;
}) {
  const doors = [
    { to: "/latam/$country" as const, label: "Overview", icon: Building2, tail: "" },
    { to: "/latam/$country/learn" as const, label: "Lessons", icon: GraduationCap, tail: "/learn" },
    { to: "/latam/$country/practice" as const, label: "Practice", icon: Repeat, tail: "/practice" },
    { to: "/latam/$country/test" as const, label: "Test", icon: ClipboardCheck, tail: "/test" },
    { to: "/latam/$country/library" as const, label: "Codes", icon: BookOpen, tail: "/library" },
  ] as const;
  return doors.map((door) => {
    const active =
      door.tail === ""
        ? pathname === `/latam/${country}` || pathname === `/latam/${country}/`
        : pathname.startsWith(`/latam/${country}${door.tail}`);
    const className = mobile
      ? cn(
          "flex min-h-14 flex-col items-center justify-center gap-1 px-0.5 text-xs tracking-wide",
          active ? "text-yellow" : "text-muted",
        )
      : cn(
          "flex min-h-12 items-center gap-2 border-b-2 px-3 text-base",
          active ? "border-orange text-yellow" : "border-transparent text-muted hover:text-fg",
        );
    const link = (
      <Link to={door.to} params={{ country }} className={className}>
        <door.icon className={mobile ? "size-5" : "size-4"} strokeWidth={1.75} />
        {door.label}
      </Link>
    );
    return mobile ? <li key={door.label}>{link}</li> : <span key={door.label}>{link}</span>;
  });
}

export function AppShell({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const setHydrated = useProgress((s) => s.setHydrated);
  const lang = useLanguage((s) => s.lang);
  const inAsme = pathname.startsWith("/asme");
  const inLatam = pathname.startsWith("/latam");
  const latamSlug = pathname.split("/")[2];
  const latamCountry = inLatam && latamSlug && LATAM_BY_SLUG[latamSlug] ? latamSlug : null;
  const nav = inAsme ? ASME_NAV : EU_NAV;
  const [mailNote, setMailNote] = useState<string | null>(null);

  function openEmail(event: MouseEvent<HTMLAnchorElement>, address: string) {
    event.preventDefault();
    window.location.href = `mailto:${address}`;
    void navigator.clipboard?.writeText(address).then(
      () => setMailNote(address),
      () => setMailNote(null),
    );
  }

  useEffect(() => {
    void Promise.resolve(useProgress.persist.rehydrate()).then(() => setHydrated(true));
    void useLanguage.persist.rehydrate();
  }, [setHydrated]);

  useLayoutEffect(() => {
    let stop = false;
    const root = document.body;
    let dict: Record<string, string> = {};
    const apply = () => {
      if (stop) return;
      applyLanguage(root, lang, dict);
    };
    apply();
    const obs = new MutationObserver(apply);
    obs.observe(root, { subtree: true, childList: true, characterData: true });
    void dictionaryFor(lang).then((next) => {
      if (stop) return;
      dict = next;
      apply();
    });
    return () => {
      stop = true;
      obs.disconnect();
    };
  }, [lang, pathname]);

  return (
    <div className="min-h-dvh overflow-x-clip bg-bg text-fg">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-orange focus:px-3 focus:py-2 focus:text-accent-fg"
      >
        Skip to content
      </a>
      <div className="rainbow-bar" />
      <header className="sticky top-0 z-40 border-b border-border bg-night text-night-fg">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4 sm:h-[4.5rem] sm:px-6">
          <Link to="/" className="flex min-h-11 items-center gap-3">
            <span className="relative grid h-8 w-6 place-items-center border border-yellow/80 bg-night">
              <span className="h-3 w-3 border border-orange" />
            </span>
            <span className="font-display text-2xl font-medium tracking-tight text-yellow sm:text-[1.7rem]">
              ElevatorIQ
            </span>
          </Link>
          <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
            {inLatam ? (
              latamCountry ? (
                <CountryDoors country={latamCountry} pathname={pathname} />
              ) : (
                <Link
                  to="/latam"
                  className="flex min-h-12 items-center gap-2 border-b-2 border-orange px-3 text-base text-yellow"
                >
                  <Building2 className="size-4" strokeWidth={1.75} />
                  Countries
                </Link>
              )
            ) : (
              nav.map((item) => {
                const active = navActive(pathname, item.to);
                return (
                  <Link
                    key={item.to}
                    to={item.to}
                    className={cn(
                      "flex min-h-12 items-center gap-2 border-b-2 px-3 text-base transition-colors duration-150",
                      active
                        ? "border-orange text-yellow"
                        : "border-transparent text-muted hover:text-fg",
                    )}
                  >
                    <item.icon className="size-4" strokeWidth={1.75} />
                    {item.label}
                  </Link>
                );
              })
            )}
          </nav>
          <Link
            to="/shop"
            className="hidden min-h-12 items-center gap-2 px-3 text-base text-muted hover:text-fg sm:flex"
          >
            <ShoppingBag className="size-4" strokeWidth={1.75} />
            Shopping
          </Link>
          <Link
            to="/sponsors"
            className="hidden min-h-12 items-center gap-2 px-3 text-base text-muted hover:text-fg lg:flex"
          >
            Partners
          </Link>
          <Link
            to="/scenarios"
            className="hidden min-h-12 items-center gap-2 px-3 text-base text-muted hover:text-fg lg:flex"
          >
            <Layers3 className="size-4" strokeWidth={1.75} />
            Scenarios
          </Link>
        </div>
        <LobbyTabs
          current={
            pathname === "/"
              ? "lobby"
              : pathname.startsWith("/uk")
                ? "eu"
                : pathname.startsWith("/asme")
                  ? "asme"
                  : pathname.startsWith("/latam")
                    ? "latam"
                    : null
          }
        />
      </header>
      <div id="main">{children}</div>
      <footer className="border-t border-border bg-surface px-4 py-8 text-sm text-muted sm:px-6">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-display text-base font-semibold text-fg">ElevatorIQ</p>
            <p className="mt-1">EU and ASME rules, in simpler terms</p>
            <div className="mt-3 flex flex-col items-start gap-0.5">
              <a href="https://elevatoriq.net" className="text-yellow hover:underline">
                elevatoriq.net
              </a>
              <a href="mailto:info@escalatoriq.net" className="text-yellow hover:underline">
                escalatoriq.net
              </a>
              <a
                href="mailto:info@elevatoriq.net"
                className="inline-flex min-h-11 cursor-pointer items-center text-yellow underline underline-offset-4"
                onClick={(event) => openEmail(event, "info@elevatoriq.net")}
              >
                info@elevatoriq.net
              </a>
              {mailNote === "info@elevatoriq.net" ? (
                <span className="text-xs text-muted">Copied</span>
              ) : null}
            </div>
          </div>
        </div>
        <div className="mx-auto mt-5 flex max-w-6xl flex-wrap gap-x-5 gap-y-2">
          <Link to="/sponsors" className="hover:text-fg hover:underline">
            Advertise with us
          </Link>
        </div>
        <p className="mx-auto mt-5 max-w-6xl text-sm leading-relaxed text-faint">
          For guidance only. ElevatorIQ is for elevator professionals and anyone who has an interest in how the regulations affect our industry. EU and ASME rules are written here in simpler terms. It is not the published standard, and it is not legal advice. ElevatorIQ is not published or endorsed by BSI, CEN, ASME, or ICC, and it does not reproduce their standards.
        </p>
      </footer>
      <div className="h-16 md:hidden" />
      <nav
        className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-night pb-[env(safe-area-inset-bottom)] text-night-fg md:hidden"
        aria-label="Mobile"
      >
        <div className="rainbow-bar" />
        <ul className={inLatam && latamCountry ? "grid grid-cols-5" : nav.length === 5 ? "grid grid-cols-5" : "grid grid-cols-5"}>
          {inLatam ? (
            latamCountry ? (
              <CountryDoors country={latamCountry} pathname={pathname} mobile />
            ) : (
              <li>
                <Link to="/latam" className="flex min-h-14 flex-col items-center justify-center gap-1 text-xs text-yellow">
                  <Building2 className="size-5" strokeWidth={1.75} />
                  Countries
                </Link>
              </li>
            )
          ) : (
            nav.map((item) => {
              const active = navActive(pathname, item.to);
              return (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className={cn(
                      "flex min-h-14 flex-col items-center justify-center gap-1 px-0.5 text-xs tracking-wide",
                      active ? "text-yellow" : "text-muted",
                    )}
                  >
                    <item.icon className="size-5" strokeWidth={1.75} />
                    {item.label}
                  </Link>
                </li>
              );
            })
          )}
        </ul>
      </nav>
    </div>
  );
}

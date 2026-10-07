import { create } from "zustand";
import { persist } from "zustand/middleware";

export const LANGUAGES = [
  { id: "en", label: "English" },
  { id: "fr", label: "Français" },
  { id: "de", label: "Deutsch" },
  { id: "es", label: "Español" },
  { id: "it", label: "Italiano" },
  { id: "pt", label: "Português" },
] as const;

export type LangId = (typeof LANGUAGES)[number]["id"];

type LanguageState = {
  lang: LangId;
  setLang: (lang: LangId) => void;
};

export const useLanguage = create<LanguageState>()(
  persist(
    (set) => ({
      lang: "en",
      setLang: (lang) => set({ lang }),
    }),
    { name: "liftiq-lang", skipHydration: true },
  ),
);

const loaders: Record<Exclude<LangId, "en">, () => Promise<Record<string, string>>> = {
  fr: async () => (await import("@/i18n/fr.json")).default,
  de: async () => (await import("@/i18n/de.json")).default,
  es: async () => (await import("@/i18n/es.json")).default,
  it: async () => (await import("@/i18n/it.json")).default,
  pt: async () => (await import("@/i18n/pt.json")).default,
};

const cache = new Map<LangId, Record<string, string>>();

export async function dictionaryFor(lang: LangId): Promise<Record<string, string>> {
  if (lang === "en") return {};
  const hit = cache.get(lang);
  if (hit) return hit;
  const dict = await loaders[lang]();
  cache.set(lang, dict);
  return dict;
}

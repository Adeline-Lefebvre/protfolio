export const i18n = {
  defaultLocale: "en",
  locales: ["en", "fr", "es"],
} as const;

export type Locale = (typeof i18n)["locales"][number];

export const localeNames: Record<Locale, string> = {
  en: "English",
  fr: "Français",
  es: "Español",
};

export const localeFlags: Record<Locale, string> = {
  en: "🇬🇧",
  fr: "🇫🇷",
  es: "🇪🇸",
};

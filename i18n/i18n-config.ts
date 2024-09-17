// i18n-config.ts

export const i18n = {
    defaultLocale: "en",
    locales: [
        { code: "en", ico: '🇬🇧', name: "English" },
        { code: "zh", ico: '🇨🇳', name: "中文" },
        { code: "es", ico: '🇪🇸', name: "Español" },
        { code: "fr", ico: '🇫🇷', name: "Français" },
        { code: "de", ico: '🇩🇪', name: "Deutsch" },
    ],
} as const;

export type Locale = (typeof i18n.locales)[number]["code"];
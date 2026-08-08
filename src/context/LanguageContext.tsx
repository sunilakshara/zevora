"use client";

import React, { createContext, useContext } from "react";
import { useLocale, useMessages } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import { Locale, Translations } from "@/lib/translations";

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: Translations;
  isRTL: boolean;
  languages: { code: Locale; label: string; name: string }[];
}

const languages: { code: Locale; label: string; name: string }[] = [
  { code: "en", label: "EN", name: "English" },
  { code: "ar", label: "AR", name: "العربية" },
  { code: "fr", label: "FR", name: "Français" },
];

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const locale = useLocale() as Locale;
  const messages = useMessages() as unknown as Translations;
  const router = useRouter();
  const pathname = usePathname();

  const setLocale = (newLocale: Locale) => {
    // Replace the locale in the URL path (e.g. /en/about -> /ar/about)
    const segments = window.location.pathname.split('/');
    if (languages.some(l => l.code === segments[1])) {
      segments[1] = newLocale;
    } else {
      segments.splice(1, 0, newLocale);
    }
    const newPath = segments.join('/') + window.location.search + window.location.hash;
    window.location.href = newPath || '/';
  };

  const isRTL = locale === "ar";

  return (
    <LanguageContext.Provider
      value={{
        locale,
        setLocale,
        t: messages,
        isRTL,
        languages,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}

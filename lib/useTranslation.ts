"use client"

import { create } from "zustand"
import { persist } from "zustand/middleware"
import { en, type TranslationKeys } from "@/lib/translations/en"
import { sv } from "@/lib/translations/sv"

type Language = "en" | "sv"

interface LanguageStore {
  language: Language
  setLanguage: (language: Language) => void
}

const useLanguageStore = create<LanguageStore>()(
  persist(
    (set) => ({
      language: "en",
      setLanguage: (language) => set({ language }),
    }),
    {
      name: "cavu-language",
    }
  )
)

export function useTranslation() {
  const { language, setLanguage } = useLanguageStore()

  const translations: Record<Language, TranslationKeys> = {
    en,
    sv,
  }

  const t = translations[language]

  return {
    t,
    language,
    setLanguage,
  }
}

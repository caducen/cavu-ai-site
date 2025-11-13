"use client"

import { Globe } from "lucide-react"
import { useTranslation } from "@/lib/useTranslation"

export function LanguageSwitcher() {
  const { language, setLanguage } = useTranslation()

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "sv" : "en")
  }

  return (
    <button
      type="button"
      onClick={toggleLanguage}
      className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm font-medium uppercase text-white transition hover:border-primary/60 hover:bg-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
      aria-label="Switch language"
    >
      <Globe className="h-4 w-4" />
      <span>{language === "en" ? "SV" : "EN"}</span>
    </button>
  )
}

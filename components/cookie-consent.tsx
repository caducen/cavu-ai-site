"use client"

import * as React from "react"
import Link from "next/link"
import { AnimatePresence, motion } from "framer-motion"
import { X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { useTranslation } from "@/lib/useTranslation"

const STORAGE_KEY = "cavu-cookie-consent"

type CookiePreferences = {
  necessary: boolean
  analytics: boolean
  marketing: boolean
}

export function CookieConsent() {
  const { t } = useTranslation()
  const [visible, setVisible] = React.useState(false)
  const [showPreferences, setShowPreferences] = React.useState(false)
  const [ready, setReady] = React.useState(false)
  const [preferences, setPreferences] = React.useState<CookiePreferences>({
    necessary: true, // Always required
    analytics: false,
    marketing: false,
  })

  React.useEffect(() => {
    if (typeof window === "undefined") return
    const stored = window.localStorage.getItem(STORAGE_KEY)
    if (stored) {
      try {
        const parsed = JSON.parse(stored)
        if (parsed.accepted === "all" || parsed.accepted === "custom") {
          setVisible(false)
        } else {
          setVisible(true)
        }
        if (parsed.preferences) {
          setPreferences(parsed.preferences)
        }
      } catch {
        // If parsing fails, show banner
        setVisible(true)
      }
    } else {
      setVisible(true)
    }
    setReady(true)
  }, [])

  const savePreferences = (prefs: CookiePreferences, accepted: "all" | "custom" | "necessary") => {
    try {
      window.localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({
          accepted,
          preferences: prefs,
          timestamp: new Date().toISOString(),
        })
      )
    } catch (error) {
      console.error("Unable to persist cookie consent state", error)
    }
    setVisible(false)
    setShowPreferences(false)
  }

  const handleAcceptAll = () => {
    savePreferences(
      {
        necessary: true,
        analytics: true,
        marketing: true,
      },
      "all"
    )
  }

  const handleRejectAll = () => {
    savePreferences(
      {
        necessary: true,
        analytics: false,
        marketing: false,
      },
      "necessary"
    )
  }

  const handleSavePreferences = () => {
    savePreferences(preferences, "custom")
  }

  const togglePreference = (key: keyof CookiePreferences) => {
    if (key === "necessary") return // Can't disable necessary cookies
    setPreferences((prev) => ({ ...prev, [key]: !prev[key] }))
  }

  if (!ready) return null

  return (
    <>
      <AnimatePresence>
        {visible && !showPreferences && (
          <motion.aside
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 24 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed inset-x-4 bottom-6 z-[60] mx-auto w-full max-w-2xl rounded-3xl border border-white/10 bg-black/80 p-6 text-sm text-gray-200 shadow-2xl shadow-primary/10 backdrop-blur"
            role="dialog"
            aria-live="polite"
            aria-label={t.cookieBanner.title}
          >
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
              <div className="space-y-2">
                <h2 className="text-base font-semibold text-white">{t.cookieBanner.title}</h2>
                <p className="text-sm text-gray-300">{t.cookieBanner.description}</p>
                <Link
                  href="/cookie-policy"
                  className="text-xs font-medium text-primary underline decoration-dotted underline-offset-4 hover:text-primary/80"
                >
                  {t.cookieBanner.preferencesTitle}
                </Link>
              </div>
              <div className="flex flex-shrink-0 gap-3 sm:flex-col">
                <Button onClick={handleAcceptAll} className="rounded-full px-5">
                  {t.cookieBanner.accept}
                </Button>
                <Button onClick={() => setShowPreferences(true)} variant="outline" className="rounded-full px-5">
                  {t.cookieBanner.customize}
                </Button>
                <Button onClick={handleRejectAll} variant="ghost" className="rounded-full px-5 text-xs">
                  {t.cookieBanner.reject}
                </Button>
              </div>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showPreferences && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowPreferences(false)}
              className="fixed inset-0 z-[70] bg-black/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-x-4 top-1/2 z-[80] mx-auto max-h-[85vh] w-full max-w-2xl -translate-y-1/2 overflow-y-auto rounded-3xl border border-white/10 bg-black/90 p-6 text-sm text-gray-200 shadow-2xl shadow-primary/10 backdrop-blur"
              role="dialog"
              aria-label={t.cookieBanner.preferencesTitle}
            >
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-semibold text-white">{t.cookieBanner.preferencesTitle}</h2>
                  <p className="mt-1 text-sm text-gray-300">{t.cookieBanner.preferencesDescription}</p>
                </div>
                <button
                  onClick={() => setShowPreferences(false)}
                  className="rounded-full p-2 text-gray-400 transition hover:bg-white/10 hover:text-white"
                  aria-label="Close"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="space-y-4">
                {/* Necessary Cookies */}
                <div className="rounded-2xl border border-white/10 bg-black/50 p-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3">
                        <h3 className="font-semibold text-white">{t.cookieBanner.necessary}</h3>
                        <span className="rounded-full bg-primary/20 px-2 py-0.5 text-xs text-primary">Required</span>
                      </div>
                      <p className="mt-2 text-sm text-gray-300">{t.cookieBanner.necessaryDesc}</p>
                    </div>
                    <div className="ml-4">
                      <div className="relative inline-flex h-6 w-11 items-center rounded-full bg-primary/30">
                        <div className="absolute h-4 w-4 translate-x-1 rounded-full bg-white" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Analytics Cookies */}
                <div className="rounded-2xl border border-white/10 bg-black/50 p-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="font-semibold text-white">{t.cookieBanner.analytics}</h3>
                      <p className="mt-2 text-sm text-gray-300">{t.cookieBanner.analyticsDesc}</p>
                    </div>
                    <button
                      onClick={() => togglePreference("analytics")}
                      className={`relative ml-4 inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        preferences.analytics ? "bg-primary" : "bg-white/20"
                      }`}
                      aria-label="Toggle analytics cookies"
                    >
                      <div
                        className={`h-4 w-4 rounded-full bg-white transition-transform ${
                          preferences.analytics ? "translate-x-6" : "translate-x-1"
                        }`}
                      />
                    </button>
                  </div>
                </div>

                {/* Marketing Cookies */}
                <div className="rounded-2xl border border-white/10 bg-black/50 p-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="font-semibold text-white">{t.cookieBanner.marketing}</h3>
                      <p className="mt-2 text-sm text-gray-300">{t.cookieBanner.marketingDesc}</p>
                    </div>
                    <button
                      onClick={() => togglePreference("marketing")}
                      className={`relative ml-4 inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        preferences.marketing ? "bg-primary" : "bg-white/20"
                      }`}
                      aria-label="Toggle marketing cookies"
                    >
                      <div
                        className={`h-4 w-4 rounded-full bg-white transition-transform ${
                          preferences.marketing ? "translate-x-6" : "translate-x-1"
                        }`}
                      />
                    </button>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-end">
                <Button onClick={() => setShowPreferences(false)} variant="outline" className="rounded-full px-5">
                  Cancel
                </Button>
                <Button onClick={handleSavePreferences} className="rounded-full px-5">
                  {t.cookieBanner.save}
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

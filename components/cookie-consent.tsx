"use client"

import * as React from "react"
import Link from "next/link"
import { AnimatePresence, motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { useTranslation } from "@/lib/useTranslation"

const STORAGE_KEY = "cavu-cookie-consent"

export function CookieConsent() {
  const { t } = useTranslation()
  const [visible, setVisible] = React.useState(false)
  const [ready, setReady] = React.useState(false)

  React.useEffect(() => {
    if (typeof window === "undefined") return
    const stored = window.localStorage.getItem(STORAGE_KEY)
    if (stored === "accepted") {
      setVisible(false)
    } else {
      setVisible(true)
    }
    setReady(true)
  }, [])

  const handleAccept = () => {
    try {
      window.localStorage.setItem(STORAGE_KEY, "accepted")
    } catch (error) {
      console.error("Unable to persist cookie consent state", error)
    }
    setVisible(false)
  }

  if (!ready) return null

  return (
    <AnimatePresence>
      {visible && (
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
                {t.cookieBanner.manage}
              </Link>
            </div>
            <div className="flex flex-shrink-0 gap-3 sm:flex-col">
              <Button onClick={handleAccept} className="rounded-full px-5">
                {t.cookieBanner.accept}
              </Button>
            </div>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  )
}

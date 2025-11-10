"use client"

import * as React from "react"
import { MoonStar, SunMedium } from "lucide-react"
import { useTheme } from "next-themes"
import { animate, motion, useMotionValue, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"

export function ModeToggle() {
  const { theme, setTheme, systemTheme } = useTheme()
  const isMounted = React.useRef(false)
  const [resolvedTheme, setResolvedTheme] = React.useState("dark")
  const progress = useMotionValue(0)
  const glowOpacity = useTransform(progress, [0, 1], [0.2, 0.6])

  React.useEffect(() => {
    isMounted.current = true
    return () => {
      isMounted.current = false
    }
  }, [])

  React.useEffect(() => {
    if (!isMounted.current) return
    const current =
      theme === "system" ? systemTheme ?? resolvedTheme : theme ?? resolvedTheme
    setResolvedTheme(current)

    animate(progress, current === "dark" ? 0 : 1, {
      type: "spring",
      stiffness: 140,
      damping: 18,
    })
  }, [theme, systemTheme, resolvedTheme, progress])

  const toggleTheme = () => {
    const next = resolvedTheme === "dark" ? "light" : "dark"
    setTheme(next)
  }

  return (
    <Button
      type="button"
      size="icon"
      variant="ghost"
      aria-label="Toggle theme"
      onClick={toggleTheme}
      className="relative h-10 w-10 overflow-hidden rounded-full border border-white/10 bg-white/5 backdrop-blur transition hover:border-primary/60 hover:bg-primary/10 focus-visible:ring-2 focus-visible:ring-offset-0"
    >
      <motion.span
        className="absolute inset-0 -z-10 rounded-full bg-gradient-to-br from-primary/60 via-secondary/40 to-primary/30"
        style={{ opacity: glowOpacity }}
      />
      <motion.span
        key="sun"
        className="absolute inset-0 flex items-center justify-center"
        initial={{ y: -16, opacity: 0 }}
        animate={{
          y: resolvedTheme === "light" ? 0 : 16,
          opacity: resolvedTheme === "light" ? 1 : 0,
        }}
        transition={{ type: "spring", stiffness: 180, damping: 20 }}
      >
        <SunMedium className="h-5 w-5 text-amber-400" />
      </motion.span>
      <motion.span
        key="moon"
        className="absolute inset-0 flex items-center justify-center"
        initial={{ y: 16, opacity: 0 }}
        animate={{
          y: resolvedTheme === "dark" ? 0 : -16,
          opacity: resolvedTheme === "dark" ? 1 : 0,
        }}
        transition={{ type: "spring", stiffness: 180, damping: 20 }}
      >
        <MoonStar className="h-5 w-5 text-sky-300" />
      </motion.span>
    </Button>
  )
}

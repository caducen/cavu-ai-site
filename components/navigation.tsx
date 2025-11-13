"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useMotionValueEvent, useScroll } from "framer-motion"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Separator } from "@/components/ui/separator"
import { ModeToggle } from "@/components/mode-toggle"
import { LanguageSwitcher } from "@/components/LanguageSwitcher"
import { useTranslation } from "@/lib/useTranslation"

export function Navigation() {
  const { scrollY } = useScroll()
  const [isScrolled, setIsScrolled] = React.useState(false)
  const { t } = useTranslation()

  const navItems = [
    { href: "/#services", label: t.nav.services },
    { href: "/#experience", label: t.nav.experience },
    { href: "/#about", label: t.nav.about },
    { href: "/#contact", label: t.nav.contact },
  ]

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 4)
  })

  return (
    <motion.header
      initial={false}
      animate={{
        backdropFilter: isScrolled ? "blur(16px)" : "blur(0px)",
        backgroundColor: isScrolled
          ? "rgba(10, 15, 30, 0.72)"
          : "rgba(10, 15, 30, 0.0)",
        borderBottomColor: isScrolled ? "rgba(148, 163, 184, 0.18)" : "rgba(0,0,0,0)",
      }}
      transition={{ type: "spring", stiffness: 150, damping: 24 }}
      className="sticky top-0 z-50 border-b border-transparent"
    >
      <div className="mx-auto flex h-20 w-full max-w-6xl items-center px-6">
        <Link href="#top" className="group flex items-center gap-3 text-foreground">
          <motion.div
            className="relative h-10 w-10 overflow-hidden rounded-full border border-primary/30 bg-white shadow-lg shadow-primary/20 transition group-hover:shadow-primary/40 dark:border-white/20 dark:bg-white/5"
            whileHover={{ rotate: 2, scale: 1.05 }}
            transition={{ type: "spring", stiffness: 220, damping: 20 }}
          >
            <Image src="/cavu-logo-new.png" alt="CAVU AI logo" fill className="object-contain" priority />
          </motion.div>
          <div className="flex flex-col leading-4">
            <span className="font-heading text-lg font-semibold tracking-tight text-slate-900 transition dark:text-white">
              CAVU AI
            </span>
            <span className="text-xs uppercase tracking-[0.35em] text-slate-500 transition dark:text-gray-400">
              Ceiling And Visibility Unlimited
            </span>
          </div>
        </Link>
        <nav className="ml-auto hidden items-center gap-4 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-600 transition hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 dark:text-gray-300 dark:hover:text-white"
            >
              {item.label}
            </Link>
          ))}
          <LanguageSwitcher />
          <ModeToggle />
          <Button asChild size="lg" className="rounded-full px-5">
            <Link href="/#contact">{t.hero.ctaPrimary}</Link>
          </Button>
        </nav>
        <div className="ml-auto flex items-center gap-2 lg:hidden">
          <LanguageSwitcher />
          <ModeToggle />
          <MobileMenu navItems={navItems} cta={t.hero.ctaPrimary} secondaryCta={t.hero.ctaSecondary} />
        </div>
      </div>
    </motion.header>
  )
}

function MobileMenu({
  navItems,
  cta,
  secondaryCta,
}: {
  navItems: { href: string; label: string }[]
  cta: string
  secondaryCta: string
}) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="h-10 w-10 rounded-full">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Open navigation</span>
        </Button>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="glass-panel border-l border-white/10 bg-background/90 text-foreground transition dark:border-white/15"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative h-9 w-9 overflow-hidden rounded-full border border-primary/25 bg-white shadow dark:border-white/20 dark:bg-white/10">
              <Image src="/cavu-logo-new.png" alt="CAVU AI logo" fill className="object-contain" />
            </div>
            <div className="flex flex-col">
              <span className="font-heading text-lg font-semibold text-slate-900 transition dark:text-white">
                CAVU AI
              </span>
              <span className="text-xs uppercase tracking-[0.35em] text-slate-500 transition dark:text-gray-400">
                Ceiling And Visibility Unlimited
              </span>
            </div>
          </div>
        </div>
        <Separator className="my-6 bg-white/10 dark:bg-white/10" />
        <div className="flex flex-col gap-4 text-base font-medium">
          {navItems.map((item) => (
            <SheetClose asChild key={item.href}>
              <Link
                href={item.href}
                className="rounded-xl border border-transparent bg-white/70 px-3 py-2 text-slate-700 transition hover:border-primary/50 hover:bg-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 dark:bg-transparent dark:text-gray-200 dark:hover:border-primary/40"
              >
                {item.label}
              </Link>
            </SheetClose>
          ))}
        </div>
        <div className="mt-8 space-y-3">
          <SheetClose asChild>
            <Button asChild size="lg" className="w-full rounded-full">
              <Link href="/#contact">{cta}</Link>
            </Button>
          </SheetClose>
          <SheetClose asChild>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="w-full rounded-full border-slate-300 text-slate-700 hover:bg-slate-100 dark:border-white/20 dark:text-gray-200 dark:hover:bg-white/10"
            >
              <Link href="/#process">{secondaryCta}</Link>
            </Button>
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  )
}

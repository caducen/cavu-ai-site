"use client"

import * as React from "react"
import Link from "next/link"
import { motion, useMotionValueEvent, useScroll } from "framer-motion"
import { Menu, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Separator } from "@/components/ui/separator"
import { ModeToggle } from "@/components/mode-toggle"

const NAV_ITEMS = [
  { href: "#services", label: "Services" },
  { href: "#experience", label: "Experience" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
]

export function Navigation() {
  const { scrollY } = useScroll()
  const [isScrolled, setIsScrolled] = React.useState(false)

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 4)
  })

  return (
    <motion.header
      initial={false}
      animate={{
        backdropFilter: isScrolled ? "blur(16px)" : "blur(0px)",
        backgroundColor: isScrolled ? "rgba(6, 12, 28, 0.68)" : "rgba(6, 12, 28, 0.0)",
        borderBottomColor: isScrolled ? "rgba(148, 163, 184, 0.18)" : "rgba(0,0,0,0)",
      }}
      transition={{ type: "spring", stiffness: 150, damping: 24 }}
      className="sticky top-0 z-50 border-b border-transparent"
    >
      <div className="mx-auto flex h-20 w-full max-w-6xl items-center px-6">
        <Link href="#top" className="group flex items-center gap-2 text-white">
          <motion.span
            className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-primary/80 via-secondary/70 to-primary/50 text-white shadow-lg shadow-primary/40"
            whileHover={{ rotate: 6, scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200, damping: 18 }}
          >
            <Sparkles className="h-5 w-5" />
          </motion.span>
          <div className="flex flex-col leading-4">
            <span className="font-heading text-lg font-semibold tracking-tight">CAVU AI</span>
            <span className="text-xs text-gray-400">Ceiling And Visibility Unlimited</span>
          </div>
        </Link>
        <nav className="ml-auto hidden items-center gap-8 lg:flex">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-gray-400 transition hover:text-white"
            >
              {item.label}
            </Link>
          ))}
          <ModeToggle />
          <Button asChild size="lg" className="rounded-full px-5">
            <Link href="#contact">Schedule Your Strategy Session</Link>
          </Button>
        </nav>
        <div className="ml-auto flex items-center gap-2 lg:hidden">
          <ModeToggle />
          <MobileMenu />
        </div>
      </div>
    </motion.header>
  )
}

function MobileMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="h-10 w-10 rounded-full">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Open navigation</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="glass-panel border-l border-white/10 bg-background/80">
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <span className="font-heading text-lg font-semibold">CAVU AI</span>
            <span className="text-xs text-gray-400">Ceiling And Visibility Unlimited</span>
          </div>
        </div>
        <Separator className="my-6 bg-white/10" />
        <div className="flex flex-col gap-4 text-base font-medium">
          {NAV_ITEMS.map((item) => (
            <SheetClose asChild key={item.href}>
              <Link
                href={item.href}
                className="rounded-lg border border-transparent px-3 py-2 transition hover:border-primary/40 hover:bg-primary/10"
              >
                {item.label}
              </Link>
            </SheetClose>
          ))}
        </div>
        <div className="mt-8 space-y-3">
          <SheetClose asChild>
            <Button asChild size="lg" className="w-full rounded-full">
              <Link href="#contact">Schedule Your Strategy Session</Link>
            </Button>
          </SheetClose>
          <SheetClose asChild>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="w-full rounded-full border-white/20 bg-transparent text-gray-200"
            >
              <Link href="#process">Explore Our Approach</Link>
            </Button>
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  )
}

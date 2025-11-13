"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight, PlayCircle } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useTranslation } from "@/lib/useTranslation"

const stagger = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
}

export function Hero() {
  const { t } = useTranslation()

  const stats = [t.hero.stat1, t.hero.stat2, t.hero.stat3, t.hero.stat4]

  return (
    <section id="top" className="relative overflow-hidden pb-24 pt-32">
      <div className="absolute inset-0 -z-30">
        <video
          className="hidden h-full w-full object-cover md:block"
          autoPlay
          loop
          muted
          playsInline
          poster="/hero-poster.jpg"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        <Image
          src="/hero-poster.jpg"
          alt=""
          fill
          priority
          className="h-full w-full object-cover md:hidden"
        />
      </div>
      <div className="absolute inset-0 -z-20 bg-black/60" />
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.18),transparent_55%)]" />
        <div className="absolute right-0 top-1/2 h-[520px] w-[520px] -translate-y-1/2 rounded-full bg-gradient-to-br from-secondary/20 via-primary/10 to-transparent blur-3xl" />
      </div>
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6">
        <motion.div
          initial="initial"
          animate="animate"
          transition={{ staggerChildren: 0.12, delayChildren: 0.1 }}
          className="relative flex flex-col gap-8 overflow-hidden rounded-3xl border border-white/10 bg-black/40 p-8 text-center shadow-lg shadow-black/40 backdrop-blur md:p-12 lg:text-left"
        >
          <motion.span
            variants={stagger}
            className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-secondary shadow-lg shadow-secondary/20 lg:mx-0"
          >
            {t.about.tagline}
          </motion.span>
          <motion.h1
            variants={stagger}
            className="text-balance text-4xl font-semibold leading-tight text-white sm:text-5xl md:text-6xl"
          >
            {t.hero.headline}
          </motion.h1>
          <motion.p
            variants={stagger}
            className="mx-auto max-w-3xl text-lg text-gray-200 lg:mx-0"
          >
            {t.hero.subheadline}
          </motion.p>
          <motion.div
            variants={stagger}
            className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start"
          >
            <Button asChild size="lg" className="rounded-full px-6 text-base">
              <Link href="/#contact" className="flex items-center gap-2">
                {t.hero.ctaPrimary}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full border-white/30 bg-black/20 px-6 text-base text-gray-200 hover:border-white/60"
            >
              <Link href="/#process" className="flex items-center gap-2">
                <PlayCircle className="h-5 w-5" /> {t.hero.ctaSecondary}
              </Link>
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 32 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ amount: 0.3, once: true }}
          transition={{ type: "spring", stiffness: 120, damping: 20 }}
          className="relative flex flex-col gap-6 rounded-3xl border border-white/10 bg-black/70 p-8 shadow-2xl shadow-primary/10 backdrop-blur-xl"
        >
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div className="max-w-xl space-y-2 text-left">
              <h2 className="text-2xl font-semibold tracking-tight text-white">{t.hero.subheadingTitle}</h2>
              <p className="text-sm text-gray-200">{t.hero.paragraph1}</p>
            </div>
            <div className="grid grid-cols-2 gap-4 text-center text-sm sm:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat} className="rounded-2xl border border-white/10 bg-white/5 p-3">
                  <p className="font-heading text-sm font-semibold text-white">{stat}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative overflow-hidden rounded-[1.4rem] border border-white/10 bg-gradient-to-br from-primary/20 via-secondary/10 to-transparent p-1">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(139,92,246,0.28),transparent_45%)]" />
            <div className="relative rounded-[1.2rem] bg-black/80 p-6 shadow-inner">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-3">
                  <p className="text-xs uppercase tracking-[0.3em] text-gray-400">{t.hero.missionLabel}</p>
                  <p className="text-sm text-gray-200">{t.hero.missionText}</p>
                </div>
                <div className="space-y-3">
                  <p className="text-xs uppercase tracking-[0.3em] text-gray-400">{t.hero.deliverLabel}</p>
                  <ul className="grid gap-2 text-sm text-gray-200">
                    {t.hero.deliverItems.map((item: string) => (
                      <li key={item} className="rounded-2xl border border-white/10 bg-black/50 px-4 py-2">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-white/10 bg-black/60 px-6 py-5 text-xs text-gray-400">
            <p className="text-sm uppercase tracking-[0.3em] text-gray-200">CAVU AI · Oscar Caducén</p>
            <div className="flex flex-wrap items-center justify-center gap-4 text-center text-xs sm:justify-end">
              {t.hero.chips.map((chip: string) => (
                <span key={chip} className="rounded-full border border-white/15 bg-black/40 px-4 py-2 text-gray-200">
                  {chip}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

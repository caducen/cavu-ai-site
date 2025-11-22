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

  return (
    <>
      <section id="top" className="relative overflow-hidden min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 -z-30 min-h-full">
          <video
            className="hidden h-full w-full object-cover md:block"
            autoPlay
            loop
            muted
            playsInline
            poster="/hero-poster.png"
          >
            <source src="/cavuai-hero.mp4" type="video/mp4" />
          </video>
          <Image
            src="/hero-poster.png"
            alt=""
            fill
            priority
            className="h-full w-full object-cover md:hidden"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 -z-20 bg-black/60" />
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.18),transparent_55%)]" />
          <div className="absolute right-0 top-1/2 h-[520px] w-[520px] -translate-y-1/2 rounded-full bg-gradient-to-br from-secondary/20 via-primary/10 to-transparent blur-3xl" />
        </div>
        <div className="mx-auto max-w-6xl px-6 w-full">
          <motion.div
            initial="initial"
            animate="animate"
            transition={{ staggerChildren: 0.12, delayChildren: 0.1 }}
            className="relative flex flex-col gap-6 overflow-hidden rounded-3xl border border-white/10 bg-transparent p-8 text-center md:p-12"
          >
            <motion.h1
              variants={stagger}
              className="text-balance text-4xl font-semibold leading-tight text-white sm:text-5xl md:text-6xl"
            >
              AI Systems Engineering
              <br />
              that delivers clarity in complexity
            </motion.h1>
            <motion.p
              variants={stagger}
              className="mx-auto max-w-3xl text-lg text-gray-200"
            >
              {t.hero.subheadline}
            </motion.p>
            <motion.div
              variants={stagger}
              className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
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
        </div>
      </section>
      <section className="relative py-16 bg-gray-950">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-secondary shadow-lg shadow-secondary/20">
              {t.about.tagline}
            </span>
          </motion.div>
        </div>
      </section>
    </>
  )
}

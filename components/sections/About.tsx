"use client"

import { motion } from "framer-motion"
import { useTranslation } from "@/lib/useTranslation"

export function About() {
  const { t } = useTranslation()

  return (
    <section id="about" className="relative py-20">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,_rgba(15,23,42,0.55),transparent_70%)]" />
      <div className="mx-auto flex max-w-5xl flex-col gap-10 px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="space-y-6 rounded-3xl border border-white/10 bg-black/50 p-8 text-left shadow-lg shadow-black/40 backdrop-blur"
        >
          <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-gray-400">
            {t.about.badge}
          </span>
          <h2 className="text-3xl font-semibold text-white md:text-4xl">{t.about.headline}</h2>
          <p className="text-base text-gray-200">{t.about.paragraph1}</p>
          <p className="text-base text-gray-200">{t.about.paragraph2}</p>
          <div className="grid gap-3 text-sm text-gray-200">
            {t.about.highlights.map((item: string) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-2xl border border-white/10 bg-black/60 px-4 py-3 shadow-inner shadow-primary/10"
              >
                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-primary" />
                <span>{item}</span>
              </div>
            ))}
          </div>
          <blockquote className="mt-6 border-l-2 border-primary pl-4 text-sm italic text-gray-200">
            “{t.about.quote}”
          </blockquote>
        </motion.div>
      </div>
    </section>
  )
}

"use client"

import { motion } from "framer-motion"
import { Cpu, Globe, ShieldCheck, Target, Users2, Workflow } from "lucide-react"
import { useTranslation } from "@/lib/useTranslation"

const iconComponents = [Cpu, ShieldCheck, Users2, Globe]

export function Features() {
  const { t } = useTranslation()
  const cards = t.features.cards

  return (
    <section id="why" className="relative py-24">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6">
        <div className="relative max-w-2xl space-y-4 overflow-hidden rounded-3xl border border-white/10 bg-black/50 p-8 shadow-lg shadow-black/40 backdrop-blur">
          <span className="inline-flex items-center rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-primary">
            {t.features.badge}
          </span>
          <h2 className="text-3xl font-semibold text-white md:text-4xl">{t.features.heading}</h2>
          <p className="text-base text-gray-200">{t.features.subheading}</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {cards.map((card: { title: string; description: string; metric: string }, idx: number) => {
            const Icon = iconComponents[idx % iconComponents.length] ?? Workflow
            return (
              <motion.article
                key={card.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-black/60 p-6 shadow-lg shadow-primary/5 backdrop-blur"
              >
                <div className="absolute inset-0 -z-10 bg-gradient-to-br from-white/0 via-primary/0 to-secondary/10 opacity-0 transition duration-500 group-hover:opacity-100" />
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/15 text-primary">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-white">{card.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-200">{card.description}</p>
                <div className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                  <span className="h-2 w-2 rounded-full bg-primary" />
                  {card.metric}
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

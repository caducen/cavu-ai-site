"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { useTranslation } from "@/lib/useTranslation"

export function Pricing() {
  const { t } = useTranslation()
  const groups = [
    t.expertise.technical,
    t.expertise.leadership,
    t.expertise.differentiators,
  ]

  return (
    <section id="expertise" className="relative py-20">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_left,_rgba(59,130,246,0.2),transparent_65%)]" />
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6">
        <div className="relative flex flex-col gap-4 rounded-3xl border border-white/10 bg-black/50 p-8 text-center shadow-lg shadow-black/40 backdrop-blur">
          <span className="mx-auto inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-gray-400">
            {t.expertise.badge}
          </span>
          <h2 className="text-balance text-3xl font-semibold text-white md:text-4xl">{t.expertise.heading}</h2>
          <p className="mx-auto max-w-3xl text-base text-gray-200">{t.expertise.description}</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {groups.map(
            (
              group: { heading: string; items: string[] },
              idx: number
            ) => (
              <motion.div
                key={group.heading}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-black/60 p-8 shadow-xl shadow-primary/10"
              >
                <Badge className="mb-4 w-fit rounded-full border-none bg-primary/20 px-4 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.35em] text-primary">
                  {group.heading}
                </Badge>
                <ul className="space-y-3 text-sm text-gray-200">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-1 inline-block h-2 w-2 rounded-full bg-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          )}
        </div>
      </div>
    </section>
  )
}

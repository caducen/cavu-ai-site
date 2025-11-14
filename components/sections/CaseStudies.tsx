"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { useTranslation } from "@/lib/useTranslation"

export function CaseStudies() {
  const { t } = useTranslation()
  const items = t.caseStudies.items

  return (
    <section id="experience" className="relative py-24">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_bottom,_rgba(139,92,246,0.25),transparent_65%)]" />
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6">
        <div className="relative flex flex-col gap-4 rounded-3xl border border-white/10 bg-black/50 p-8 text-center shadow-lg shadow-black/40 backdrop-blur">
          <span className="mx-auto inline-flex items-center rounded-full border border-amber-400/40 bg-amber-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-amber-300">
            {t.caseStudies.badge}
          </span>
          <h2 className="text-balance text-3xl font-semibold text-white md:text-4xl">{t.caseStudies.heading}</h2>
          <p className="mx-auto max-w-3xl text-base text-gray-200">{t.caseStudies.description}</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {items.map(
            (
              item: {
                client: string
                challenge: string
                solution: string
                results: string[]
              },
              idx: number
            ) => (
              <motion.article
                key={item.client}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.55, delay: idx * 0.1 }}
                className="group flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-black/60 p-6 text-left shadow-lg shadow-primary/10"
              >
                <div className="space-y-3">
                  <Badge variant="outline" className="border-white/20 bg-white/5 text-xs uppercase tracking-[0.25em] text-gray-200">
                    {item.client}
                  </Badge>
                  <h3 className="text-lg font-semibold text-white">{item.challenge}</h3>
                  <p className="text-sm leading-relaxed text-gray-200">{item.solution}</p>
                </div>
                <div className="mt-6 space-y-2">
                  {item.results.map((result: string) => (
                    <div
                      key={result}
                      className="flex items-center justify-between rounded-2xl border border-white/5 bg-black/40 px-4 py-2 text-sm text-gray-200"
                    >
                      <span>{result}</span>
                      <span className="text-primary">★</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 text-right text-xs uppercase tracking-[0.3em] text-gray-400">
                  {t.caseStudies.missionPrefix} {idx + 1}
                </div>
              </motion.article>
            )
          )}
        </div>
      </div>
    </section>
  )
}

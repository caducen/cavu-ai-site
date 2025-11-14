"use client"

import { motion } from "framer-motion"
import { Compass, Layers, Rocket, Search } from "lucide-react"
import { useTranslation } from "@/lib/useTranslation"

const iconOrder = [Search, Layers, Rocket, Compass]

export function HowItWorks() {
  const { t } = useTranslation()

  const steps = t.process.steps

  return (
    <section id="process" className="relative py-24">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(15,23,42,0.45),transparent_65%)]" />
      <div className="relative mx-auto flex max-w-5xl flex-col gap-12 rounded-3xl border border-white/10 bg-black/50 px-6 py-10 text-center shadow-lg shadow-black/40 backdrop-blur">
        <div className="space-y-4">
          <span className="inline-flex items-center justify-center rounded-full border border-secondary/40 bg-secondary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-secondary">
            {t.process.badge}
          </span>
          <h2 className="text-balance text-3xl font-semibold text-white md:text-4xl">{t.process.heading}</h2>
          <p className="mx-auto max-w-2xl text-base text-gray-200">{t.process.description}</p>
        </div>
        <div className="relative mx-auto grid max-w-4xl gap-6 md:grid-cols-3">
          <motion.span
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-20 hidden h-px w-[70%] -translate-x-1/2 bg-gradient-to-r from-transparent via-primary/50 to-transparent md:block"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />
          {steps.map(
            (
              step: { title: string; description: string },
              idx: number
            ) => {
              const Icon = iconOrder[idx % iconOrder.length] ?? Compass
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="group relative flex h-full flex-col gap-4 overflow-hidden rounded-3xl border border-white/10 bg-black/40 p-8 text-left shadow-xl shadow-primary/5"
                >
                  <div
                    className="absolute inset-0 -z-10 opacity-10 transition duration-500 group-hover:opacity-30"
                    style={{ background: "radial-gradient(circle at top, rgba(59,130,246,0.35), transparent 60%)" }}
                  />
                  <div className="flex items-center justify-between">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/15 text-primary">
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="text-sm font-semibold text-gray-400">
                      {t.process.stepLabel} {idx + 1}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-white">{step.title}</h3>
                  <p className="text-sm leading-relaxed text-gray-200">{step.description}</p>
                </motion.div>
              )
            }
          )}
        </div>
      </div>
    </section>
  )
}

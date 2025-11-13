"use client"

import { motion } from "framer-motion"
import { useTranslation } from "@/lib/useTranslation"

export function TrustSignals() {
  const { t } = useTranslation()

  return (
    <section className="relative py-16">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,_rgba(148,163,184,0.15),transparent_65%)]" />
      <div className="relative mx-auto flex max-w-5xl flex-col items-center gap-8 rounded-3xl border border-white/10 bg-black/50 px-6 py-12 text-center shadow-lg shadow-black/40 backdrop-blur">
        <motion.span
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="rounded-full border border-white/10 bg-black/40 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.4em] text-gray-400"
        >
          {t.trust.badge}
        </motion.span>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-2xl text-sm text-gray-200"
        >
          {t.trust.description}
        </motion.p>
        <div className="grid w-full gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {t.about.highlights.map((item: string, idx: number) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="flex h-full flex-col gap-3 rounded-2xl border border-white/10 bg-black/60 p-6 text-left shadow-lg shadow-primary/10"
            >
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-200">
                {item.split(":")[0]}
              </h3>
              <p className="text-sm text-gray-200/80">{item.split(": ")[1] ?? ""}</p>
            </motion.div>
          ))}
        </div>
        <p className="text-xs uppercase tracking-[0.35em] text-gray-400">{t.trust.footer}</p>
      </div>
    </section>
  )
}

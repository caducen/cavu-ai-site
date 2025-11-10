"use client"

import { motion } from "framer-motion"
import { credentialHighlights } from "@/lib/data"

export function TrustSignals() {
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
          Trusted Expertise from Defense to Innovation
        </motion.span>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-2xl text-sm text-gray-200"
        >
          CAVU AI draws on 30+ years of Swedish Air Force fighter pilot experience and Gripen E program leadership—bringing
          aerospace-grade systems engineering to human-centric AI transformation.
        </motion.p>
        <div className="grid w-full gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {credentialHighlights.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="flex h-full flex-col gap-3 rounded-2xl border border-white/10 bg-black/60 p-6 text-left shadow-lg shadow-primary/10"
            >
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-200">{item.title}</h3>
              <p className="text-sm text-gray-200/80">{item.detail}</p>
            </motion.div>
          ))}
        </div>
        <p className="text-xs uppercase tracking-[0.35em] text-gray-400">
          Bringing aerospace-grade systems thinking to business innovation
        </p>
      </div>
    </section>
  )
}

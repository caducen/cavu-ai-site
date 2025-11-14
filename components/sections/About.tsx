"use client"

import { motion } from "framer-motion"
import { useTranslation } from "@/lib/useTranslation"

export function About() {
  const { t } = useTranslation()

  return (
    <section id="about" className="relative py-24">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,_rgba(15,23,42,0.55),transparent_70%)]" />
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="space-y-6 text-center"
        >
          <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-gray-400">
            {t.about.badge}
          </span>
          <h2 className="text-3xl font-semibold text-white md:text-4xl">{t.about.headline}</h2>
        </motion.div>

        {/* Two columns */}
        <div className="grid gap-12 md:grid-cols-2">
          {/* LEFT: Bio */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-200">{t.about.paragraph1}</p>
            <p className="text-lg text-gray-200">{t.about.paragraph2}</p>
          </motion.div>

          {/* RIGHT: Career Highlights box */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="rounded-lg border border-gray-800 bg-gray-900/50 p-8"
          >
            <h3 className="mb-6 text-xl font-bold text-white">{t.about.careerHighlightsTitle}</h3>
            <div className="space-y-6">
              {t.about.careerHighlights.map((item, i) => (
                <div key={i} className="flex gap-4">
                  <span className="font-mono text-yellow-500">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="flex-1">
                    <h4 className="mb-1 font-semibold text-white">{item.title}</h4>
                    <p className="text-sm text-gray-400">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Quote card - full width */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="rounded-lg border border-gray-700 bg-gradient-to-r from-gray-900 to-gray-800 p-8 text-center"
        >
          <p className="mb-4 text-2xl italic text-gray-200">
            "{t.about.quote}"
          </p>
          <p className="text-gray-400">— {t.about.quoteAuthor}</p>
        </motion.div>
      </div>
    </section>
  )
}

"use client"

import * as React from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Star } from "lucide-react"
import { useTranslation } from "@/lib/useTranslation"

const INTERVAL = 6200

export function Testimonials() {
  const { t } = useTranslation()
  const testimonials = t.testimonials.items
  const [active, setActive] = React.useState(0)

  React.useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length)
    }, INTERVAL)
    return () => clearInterval(timer)
  }, [testimonials.length])

  return (
    <section id="testimonials" className="relative py-24">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,_rgba(6,182,212,0.2),transparent_65%)]" />
      <div className="relative mx-auto flex max-w-5xl flex-col gap-10 rounded-3xl border border-white/10 bg-black/50 px-6 py-10 text-center shadow-lg shadow-black/40 backdrop-blur">
        <div className="space-y-4">
          <span className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-gray-400">
            {t.testimonials.badge}
          </span>
          <h2 className="text-balance text-3xl font-semibold text-white md:text-4xl">{t.testimonials.heading}</h2>
          <p className="mx-auto max-w-3xl text-base text-gray-200">{t.testimonials.description}</p>
        </div>
        <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr] lg:items-stretch">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-black/50 p-8 text-left shadow-2xl shadow-primary/10">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                className="flex h-full flex-col gap-6"
              >
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1 text-amber-400">
                    {Array.from({ length: 5 }).map((_, idx) => (
                      <Star key={idx} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-xs uppercase tracking-[0.35em] text-primary/80">{t.testimonials.verified}</span>
                </div>
                <blockquote className="text-lg font-medium leading-relaxed text-white">
                  “{testimonials[active].quote}”
                </blockquote>
                <div className="mt-auto text-sm font-semibold text-gray-200">
                  {testimonials[active].author}
                  <span className="block text-xs font-normal uppercase tracking-[0.35em] text-gray-400">
                    {testimonials[active].role}
                  </span>
                  <span className="block text-xs font-normal uppercase tracking-[0.3em] text-gray-500">
                    {testimonials[active].company}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
            <div className="mt-8 flex items-center gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActive(idx)}
                  className={`h-2.5 w-8 rounded-full transition ${
                    active === idx ? "bg-primary" : "bg-white/20 hover:bg-white/40"
                  }`}
                  aria-label={`Show testimonial ${idx + 1}`}
                />
              ))}
            </div>
          </div>
          <div className="grid gap-4">
            {testimonials.map((testimonial: (typeof testimonials)[number], idx: number) => (
              <motion.div
                key={`${testimonial.author}-${idx}`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                className={`rounded-3xl border border-white/10 p-6 text-left shadow-lg shadow-primary/10 transition ${
                  active === idx ? "border-primary/60 bg-black/70" : "bg-black/60"
                }`}
              >
                <p className="text-sm text-gray-200">“{testimonial.quote}”</p>
                <div className="mt-4 text-sm font-semibold text-gray-200">
                  {testimonial.author}
                  <span className="block text-xs font-normal uppercase tracking-[0.3em] text-gray-400">
                    {testimonial.role}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

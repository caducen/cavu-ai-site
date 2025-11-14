"use client"

import { motion } from "framer-motion"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { useTranslation } from "@/lib/useTranslation"

export function FAQ() {
  const { t } = useTranslation()

  return (
    <section id="faq" className="relative py-24">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_bottom_right,_rgba(245,158,11,0.15),transparent_65%)]" />
      <div className="relative mx-auto flex max-w-4xl flex-col gap-10 rounded-3xl border border-white/10 bg-black/50 px-6 py-10 text-center shadow-lg shadow-black/40 backdrop-blur">
        <div className="space-y-4">
          <span className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-gray-400">
            {t.faq.badge}
          </span>
          <h2 className="text-balance text-3xl font-semibold text-white md:text-4xl">{t.faq.heading}</h2>
          <p className="mx-auto max-w-2xl text-base text-gray-200">{t.faq.description}</p>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="overflow-hidden rounded-3xl border border-white/10 bg-black/60 p-2 text-left"
        >
          <Accordion type="single" collapsible className="w-full space-y-2">
            {t.faq.items.map(
              (
                item: { question: string; answer: string },
                idx: number
              ) => (
                <AccordionItem
                  key={item.question}
                  value={`faq-${idx}`}
                  className="overflow-hidden rounded-2xl border border-white/5 bg-black/40 px-4 text-left"
                >
                  <AccordionTrigger className="text-left text-base font-semibold text-white">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="pb-4 text-sm leading-relaxed text-gray-200">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              )
            )}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}

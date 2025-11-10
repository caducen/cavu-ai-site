"use client"

import { motion } from "framer-motion"
import { expertise } from "@/lib/data"
import { Badge } from "@/components/ui/badge"

export function Pricing() {
  return (
    <section id="expertise" className="relative py-20">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_left,_rgba(59,130,246,0.2),transparent_65%)]" />
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6">
        <div className="relative flex flex-col gap-4 rounded-3xl border border-white/10 bg-black/50 p-8 text-center shadow-lg shadow-black/40 backdrop-blur">
          <span className="mx-auto inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-gray-400">
            Skills & Expertise
          </span>
          <h2 className="text-balance text-3xl font-semibold text-white md:text-4xl">
            The capabilities behind Ceiling And Visibility Unlimited.
          </h2>
          <p className="mx-auto max-w-3xl text-base text-gray-200">
            Our technical mastery, leadership experience, and differentiators combine to deliver AI initiatives that are as
            strategic as they are executable.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { title: "Technical Mastery", items: expertise.technical },
            { title: "Leadership & Consulting", items: expertise.leadership },
            { title: "Unique Differentiators", items: expertise.differentiators },
          ].map((group, idx) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-black/60 p-8 shadow-xl shadow-primary/10"
            >
              <Badge className="mb-4 w-fit rounded-full border-none bg-primary/20 px-4 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.35em] text-primary">
                {group.title}
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
          ))}
        </div>
        <p className="text-center text-xs uppercase tracking-[0.3em] text-gray-400">
          Every capability is battle-tested—shaped by missions where clarity and reliability are non-negotiable.
        </p>
      </div>
    </section>
  )
}

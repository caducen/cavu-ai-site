"use client"

import { motion } from "framer-motion"
import { Cpu, GraduationCap, Search, Sparkles, Target, Users } from "lucide-react"
import Link from "next/link"
import { services } from "@/lib/data"
import { Button } from "@/components/ui/button"

const iconMap = {
  search: Search,
  cpu: Cpu,
  target: Target,
  graduation: GraduationCap,
  users: Users,
}

export function Services() {
  return (
    <section id="services" className="relative py-20">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="relative max-w-2xl space-y-4 overflow-hidden rounded-3xl border border-white/10 bg-black/50 p-8 shadow-lg shadow-black/40 backdrop-blur">
            <span className="inline-flex items-center rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-primary">
              Five Ways We Transform Your Organization
            </span>
            <h2 className="text-3xl font-semibold text-white md:text-4xl">
              Precision-engineered services that unlock clarity, speed, and resilience.
            </h2>
            <p className="text-base text-gray-200">
              Each engagement applies fighter pilot discipline to your AI strategy—ensuring every system fits your mission
              profile and accelerates sustainable growth.
            </p>
          </div>
          <Button asChild variant="outline" size="lg" className="w-full rounded-full border-white/30 text-gray-200 md:w-auto">
            <Link href="#process" className="flex items-center gap-2">
              Explore Our Approach
              <Sparkles className="h-4 w-4" />
            </Link>
          </Button>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, idx) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap] ?? Sparkles
            return (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: (idx % 3) * 0.08 }}
                className="group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-black/60 p-6 shadow-lg shadow-primary/10"
              >
                <div className="absolute inset-0 -z-10 opacity-0 transition duration-500 group-hover:opacity-100" style={{
                  background:
                    "radial-gradient(circle at top right, rgba(139,92,246,0.3), transparent 60%)",
                }} />
                <div className="flex items-center gap-4">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary/15 text-secondary">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{service.name}</h3>
                </div>
                <p className="mt-4 text-sm text-gray-200 leading-relaxed">
                  {service.description}
                </p>
                <Link
                  href="#contact"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary transition hover:gap-3"
                >
                  Learn more
                  <span aria-hidden className="text-lg">→</span>
                </Link>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

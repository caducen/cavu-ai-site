"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { ArrowUpRight, Check, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useTranslation } from "@/lib/useTranslation"

export function CTA() {
  const [status, setStatus] = React.useState<"idle" | "loading" | "success" | "error">("idle")
  const { t } = useTranslation()

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setStatus("loading")
    const data = Object.fromEntries(new FormData(event.currentTarget))

    setTimeout(() => {
      if ((data.email as string)?.includes("@")) {
        setStatus("success")
        event.currentTarget.reset()
      } else {
        setStatus("error")
      }
    }, 900)
  }

  return (
    <section id="contact" className="relative py-24">
      <span id="book" className="absolute -top-24 block h-px w-px opacity-0" aria-hidden="true" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.3),transparent_65%)]" />
      <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-[1.1fr_1fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="relative space-y-6 overflow-hidden rounded-3xl border border-white/10 bg-black/50 p-8 shadow-lg shadow-black/40 backdrop-blur"
        >
          <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-gray-400">
            {t.cta.badge}
          </span>
          <h2 className="text-balance text-3xl font-semibold text-white md:text-5xl">{t.cta.heading}</h2>
          <p className="text-base text-gray-200">{t.cta.description}</p>
          <div className="flex flex-wrap gap-4 text-sm text-gray-200">
            <div className="rounded-full border border-white/20 bg-white/10 px-4 py-2">
              <span className="font-semibold text-primary">3.4x</span> {t.cta.metrics.pipeline}
            </div>
            <div className="rounded-full border border-white/20 bg-white/10 px-4 py-2">
              <span className="font-semibold text-secondary">98%</span> {t.cta.metrics.satisfaction}
            </div>
            <div className="rounded-full border border-white/20 bg-white/10 px-4 py-2">
              <span className="font-semibold text-amber-400">24h</span> {t.cta.metrics.support}
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55 }}
          className="glass-panel relative overflow-hidden rounded-3xl p-8"
        >
          <form onSubmit={handleSubmit} className="space-y-5" aria-label="Contact form">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2 text-left">
                <Label htmlFor="name">{t.cta.form.name}</Label>
                <Input id="name" name="name" placeholder="Jordan Smith" required className="bg-black/30" />
              </div>
              <div className="space-y-2 text-left">
                <Label htmlFor="email">{t.cta.form.email}</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@company.com"
                  required
                  className="bg-black/30"
                />
              </div>
            </div>
            <div className="space-y-2 text-left">
              <Label htmlFor="company">{t.cta.form.company}</Label>
              <Input id="company" name="company" placeholder="Acme Corp" className="bg-black/30" />
            </div>
            <div className="space-y-2 text-left">
              <Label htmlFor="message">{t.cta.form.messageLabel}</Label>
              <Textarea
                id="message"
                name="message"
                placeholder={t.cta.form.messagePlaceholder}
                rows={4}
                className="resize-none bg-black/30"
              />
            </div>
            <Button
              type="submit"
              size="lg"
              className="flex w-full items-center justify-center gap-2 rounded-full text-base"
              disabled={status === "loading"}
            >
              {status === "loading" ? t.cta.form.sending : t.cta.form.submit}
              <Send className="h-4 w-4" />
            </Button>
            <Button
              asChild
              variant="ghost"
              size="lg"
              className="flex w-full items-center justify-center gap-2 rounded-full border border-white/20 bg-transparent text-gray-200 hover:bg-white/10"
            >
              <a href="#book">
                {t.cta.form.secondary}
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </Button>
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-gray-300">
              {t.cta.benefits.map((benefit, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-emerald-400" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
            {status === "success" && (
              <p className="text-center text-sm text-emerald-400">{t.cta.form.success}</p>
            )}
            {status === "error" && (
              <p className="text-center text-sm text-red-400">{t.cta.form.error}</p>
            )}
          </form>
          <div className="pointer-events-none absolute -left-20 top-1/2 h-60 w-60 -translate-y-1/2 rounded-full bg-primary/30 blur-3xl" />
          <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-secondary/30 blur-3xl" />
        </motion.div>
      </div>
    </section>
  )
}

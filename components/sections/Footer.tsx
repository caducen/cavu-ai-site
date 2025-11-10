"use client"

import * as React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Linkedin, Mail, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const servicesLinks = [
  { label: "Deep Analysis & Strategy", href: "#services" },
  { label: "AI Systems Integration", href: "#services" },
  { label: "Decision Support Frameworks", href: "#services" },
  { label: "Leadership Development", href: "#services" },
  { label: "AI Deep Study Programs", href: "#services" },
]

const companyLinks = [
  { label: "About Oscar", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Case Studies", href: "#experience" },
  { label: "Contact", href: "#contact" },
]

const contactLinks = [
  { label: "Email: contact@cavuai.com", href: "mailto:contact@cavuai.com" },
  { label: "LinkedIn: Oscar Caducén", href: "https://linkedin.com" },
  { label: "Göteborg, Sweden", href: "https://maps.google.com/?q=Göteborg,+Sweden" },
]

export function Footer() {
  const [submitted, setSubmitted] = React.useState(false)

  const handleNewsletter = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitted(true)
    event.currentTarget.reset()
  }

  return (
    <footer className="relative mt-20 border-t border-white/10 bg-black/60 py-16">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.2),transparent_70%)]" />
      <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-[1.1fr_1fr]">
        <div className="space-y-6 rounded-3xl border border-white/10 bg-black/50 p-8 shadow-lg shadow-black/40 backdrop-blur">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <Link href="#top" className="inline-flex items-center gap-3 text-white">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-primary via-secondary to-primary/60 text-lg font-semibold shadow-lg shadow-primary/40">
                CA
              </span>
              <div>
                <p className="font-heading text-lg font-semibold">CAVU AI</p>
                <p className="text-xs uppercase tracking-[0.35em] text-gray-400">Ceiling And Visibility Unlimited</p>
              </div>
            </Link>
          </motion.div>
          <p className="max-w-lg text-sm text-gray-200">
            Founded by Oscar Caducén, MSc, LtCol (ret). Göteborg, Sweden. Aerospace-grade AI systems engineering for leaders
            who demand clarity, precision, and measurable outcomes.
          </p>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gray-400">
            AI Insights from the Cockpit to the Boardroom
          </p>
          <form onSubmit={handleNewsletter} className="flex flex-col gap-3 text-left sm:flex-row">
            <Input
              type="email"
              name="newsletter"
              placeholder="Enter your email"
              required
              className="h-11 bg-black/40"
            />
            <Button type="submit" className="h-11 rounded-full px-6">
              Subscribe
            </Button>
          </form>
          {submitted && (
            <p className="text-sm text-emerald-400">Thanks! Expect our next insights drop in your inbox soon.</p>
          )}
          <div className="flex items-center gap-4 text-gray-200">
            <Link href="https://linkedin.com" target="_blank" className="hover:text-white">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link href="https://twitter.com" target="_blank" className="hover:text-white">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="mailto:contact@cavuai.com" className="hover:text-white">
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </Link>
          </div>
        </div>
        <div className="grid gap-8 sm:grid-cols-3">
          <FooterColumn title="Services" links={servicesLinks} />
          <FooterColumn title="Company" links={companyLinks} />
          <FooterColumn title="Contact" links={contactLinks} />
        </div>
      </div>
      <div className="mt-12 border-t border-white/10 pt-6 text-center text-xs text-gray-400">
        <div className="flex flex-wrap items-center justify-center gap-4 pb-3 text-[0.7rem] uppercase tracking-[0.35em]">
          <Link href="/privacy" className="transition hover:text-white">
            Privacy Policy
          </Link>
          <span className="text-gray-600">•</span>
          <Link href="/terms" className="transition hover:text-white">
            Terms of Service
          </Link>
        </div>
        © {new Date().getFullYear()} CAVU AI. All rights reserved.
      </div>
    </footer>
  )
}

type FooterColumnProps = {
  title: string
  links: { label: string; href: string }[]
}

function FooterColumn({ title, links }: FooterColumnProps) {
  return (
    <div className="space-y-3 text-left">
      <h4 className="text-sm font-semibold uppercase tracking-[0.35em] text-gray-400">{title}</h4>
      <ul className="space-y-2 text-sm text-gray-400">
        {links.map((link) => (
          <li key={link.label}>
            <Link href={link.href} className="transition hover:text-white">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

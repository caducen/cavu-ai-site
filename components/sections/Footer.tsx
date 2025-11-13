"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Linkedin, Mail, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useTranslation } from "@/lib/useTranslation"

const servicesLinks = [
  { key: "service1Title", href: "/#services" },
  { key: "service2Title", href: "/#services" },
  { key: "service3Title", href: "/#services" },
  { key: "service4Title", href: "/#services" },
  { key: "service5Title", href: "/#services" },
]

const companyLinks = [
  { labelKey: "about", href: "/#about" },
  { labelKey: "experience", href: "/#experience" },
  { labelKey: "contact", href: "/#contact" },
]

const legalLinks = [
  { labelKey: "privacyPolicy", href: "/privacy-policy" },
  { labelKey: "cookiePolicy", href: "/cookie-policy" },
  { labelKey: "termsOfService", href: "/terms-of-service" },
]

export function Footer() {
  const [submitted, setSubmitted] = React.useState(false)
  const { t } = useTranslation()

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
            <Link href="/#top" className="inline-flex items-center gap-3 text-white">
              <span className="relative grid h-10 w-10 place-items-center overflow-hidden rounded-full border border-white/20 bg-white/10 shadow-lg shadow-primary/30">
                <Image src="/cavu-footer-logo.png" alt="CAVU AI monogram" fill className="object-contain" sizes="2.5rem" priority />
              </span>
              <div>
                <p className="font-heading text-lg font-semibold">CAVU AI</p>
                <p className="text-xs uppercase tracking-[0.35em] text-gray-400">Ceiling And Visibility Unlimited</p>
              </div>
            </Link>
          </motion.div>
          <p className="max-w-lg text-sm text-gray-200">{t.footer.description}</p>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gray-400">{t.footer.newsletter}</p>
          <form onSubmit={handleNewsletter} className="flex flex-col gap-3 text-left sm:flex-row">
            <Input
              type="email"
              name="newsletter"
              placeholder={t.footer.newsletterPlaceholder}
              required
              className="h-11 bg-black/40"
            />
            <Button type="submit" className="h-11 rounded-full px-6">
              {t.footer.subscribe}
            </Button>
          </form>
          {submitted && (
            <p className="text-sm text-emerald-400">{t.footer.successMessage}</p>
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
          <FooterColumn title={t.footer.services} links={servicesLinks.map((link) => ({ label: t.services[link.key as keyof typeof t.services] as string, href: link.href }))} />
          <FooterColumn title={t.footer.company} links={companyLinks.map((link) => ({ label: t.nav[link.labelKey as keyof typeof t.nav], href: link.href }))} />
          <FooterColumn title={t.footer.legal} links={legalLinks.map((link) => ({ label: t.footer[link.labelKey as keyof typeof t.footer], href: link.href }))} />
        </div>
      </div>
      <div className="mt-12 border-t border-white/10 pt-6 text-center text-xs text-gray-400">
        <div className="flex flex-wrap items-center justify-center gap-4 pb-3 text-[0.7rem] uppercase tracking-[0.35em]">
          {legalLinks.map((link, idx) => (
            <React.Fragment key={link.href}>
              {idx > 0 && <span className="text-gray-600">•</span>}
              <Link href={link.href} className="transition hover:text-white">
                {t.footer[link.labelKey as keyof typeof t.footer]}
              </Link>
            </React.Fragment>
          ))}
        </div>
        © {new Date().getFullYear()} CAVU AI. {t.footer.allRightsReserved}.
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

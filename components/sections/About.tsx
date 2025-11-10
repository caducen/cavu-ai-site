"use client"

import { motion } from "framer-motion"

const highlights = [
  "Successfully advocated for the JAS 39 Gripen E/F development from political decision to operational reality.",
  "Led tactical system architecture integrating AESA Radar, IRST, and advanced AI-based decision-making systems.",
  "Directed cross-functional teams across Sweden, Brazil, Hungary, Czech Republic, and Thailand.",
  "MSc in Systems Engineering for Defense from Cranfield University.",
  "Commanded fighter squadrons and served as Wing Commander Flying.",
]

export function About() {
  return (
    <section id="about" className="relative py-20">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,_rgba(15,23,42,0.55),transparent_70%)]" />
      <div className="mx-auto flex max-w-5xl flex-col gap-10 px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="space-y-6 rounded-3xl border border-white/10 bg-black/50 p-8 text-left shadow-lg shadow-black/40 backdrop-blur"
        >
          <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-gray-400">
            From Clear Skies to Clear Strategy
          </span>
          <h2 className="text-3xl font-semibold text-white md:text-4xl">
            Oscar Caducén brings tactical precision and strategic vision to AI implementation.
          </h2>
          <p className="text-base text-gray-200">
            As a former Swedish Air Force Lieutenant Colonel and fighter pilot with 30+ years of experience, Oscar led the
            Information Intelligence Systems integration for the JAS 39 Gripen E—pioneering human-machine collaboration in one
            of the world&apos;s most advanced fighter aircraft.
          </p>
          <p className="text-base text-gray-200">
            At CAVU AI, he blends systems thinking honed in aerospace and defense with human-centric design inspired by
            consciousness studies. The result: AI programs engineered for clarity, resilience, and measurable impact.
          </p>
          <div className="grid gap-3 text-sm text-gray-200">
            {highlights.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-2xl border border-white/10 bg-black/60 px-4 py-3 shadow-inner shadow-primary/10"
              >
                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-primary" />
                <span>{item}</span>
              </div>
            ))}
          </div>
          <blockquote className="mt-6 border-l-2 border-primary pl-4 text-sm italic text-gray-200">
            “Ceiling And Visibility Unlimited isn&apos;t just our name—it&apos;s our promise. Just as pilots rely on clear skies for
            optimal performance, organizations need clarity to unlock their full potential.”
          </blockquote>
        </motion.div>
      </div>
    </section>
  )
}

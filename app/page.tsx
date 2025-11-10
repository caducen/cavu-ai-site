import Script from "next/script"
import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/sections/Hero"
import { TrustSignals } from "@/components/sections/TrustSignals"
import { Features } from "@/components/sections/Features"
import { Services } from "@/components/sections/Services"
import { CaseStudies } from "@/components/sections/CaseStudies"
import { About } from "@/components/sections/About"
import { HowItWorks } from "@/components/sections/HowItWorks"
import { Testimonials } from "@/components/sections/Testimonials"
import { Pricing } from "@/components/sections/Pricing"
import { FAQ } from "@/components/sections/FAQ"
import { CTA } from "@/components/sections/CTA"
import { Footer } from "@/components/sections/Footer"

const structuredData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "CAVU AI",
  url: "https://www.cavuai.com",
  description:
    "CAVU AI delivers aerospace-grade AI systems engineering for business transformation. Led by Oscar Caducén, former fighter pilot and JAS 39 Gripen E program leader.",
  areaServed: "Global",
  serviceType: [
    "Deep Analysis of Core Challenges",
    "Automation Designed Around Your Business Flow",
    "Decision Support and Leadership Frameworks",
    "AI Deep Study Programs",
    "Sustainable Team Development",
  ],
  founder: {
    "@type": "Person",
    name: "Oscar Caducén",
    jobTitle: "Founder & CEO | Senior AI Systems Consultant | Former Fighter Pilot",
  },
  sameAs: ["https://linkedin.com", "https://twitter.com"],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "consultation",
    email: "contact@cavuai.com",
  },
  slogan: "Ceiling And Visibility Unlimited",
}

export default function Home() {
  return (
    <>
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="relative flex min-h-screen flex-col">
        <Navigation />
        <main className="flex-1">
          <Hero />
          <TrustSignals />
          <Features />
          <Services />
          <CaseStudies />
          <About />
          <HowItWorks />
          <Testimonials />
          <Pricing />
          <FAQ />
          <CTA />
        </main>
        <Footer />
      </div>
    </>
  )
}

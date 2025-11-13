"use client"

import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/sections/Footer"
import { useTranslation } from "@/lib/useTranslation"

export default function TermsOfServicePage() {
  const { t, language } = useTranslation()

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main className="mx-auto max-w-4xl px-6 py-24 lg:px-0">
        <div className="prose prose-invert prose-slate max-w-none">
          <h1 className="font-heading text-4xl font-semibold text-white">{t.termsOfService.title}</h1>
          <p className="text-sm uppercase tracking-[0.3em] text-gray-400">{t.termsOfService.lastUpdated}</p>

          {language === "en" && (
            <div className="mt-10 space-y-10 text-gray-200">
              <section className="space-y-4 rounded-3xl border border-white/10 bg-black/60 p-6 shadow-lg shadow-black/40">
                <h2 className="text-2xl font-semibold text-white">Agreement to Our Legal Terms</h2>
                <p>We are CAVU AI ("Company," "we," "us," or "our").</p>
                <p>
                  We operate {" "}
                  <Link href="https://cavuai.com" className="text-primary underline hover:text-primary/80">
                    https://cavuai.com
                  </Link>{" "}
                  as well as related products and services that link to these legal terms (the "Services").
                </p>
                <p>
                  Contact us at {" "}
                  <Link href="mailto:oscar.caducen@gmail.com" className="text-primary underline hover:text-primary/80">
                    oscar.caducen@gmail.com
                  </Link>{" "}
                  or by mail at Fontinvägen 54, Kungälv 442 32, Sweden.
                </p>
                <p>
                  These Legal Terms are a binding agreement between you and CAVU AI. By accessing the Services you agree to these terms.
                  If you do not agree, discontinue use immediately.
                </p>
                <p>
                  Supplemental terms or documents may be posted on the Services and are incorporated herein. We may revise these terms at
                  any time; the “Last updated” date will change accordingly. Continued use constitutes acceptance of any revisions.
                </p>
                <p>We recommend printing a copy of these Legal Terms for your records.</p>
              </section>

              <section className="space-y-4 rounded-3xl border border-white/10 bg-black/60 p-6 shadow-lg shadow-black/40">
                <h2 className="text-2xl font-semibold text-white">Table of Contents</h2>
                <ol className="list-decimal space-y-2 pl-6 text-primary">
                  {[
                    "Our Services",
                    "Intellectual Property Rights",
                    "User Representations",
                    "Prohibited Activities",
                    "User Generated Contributions",
                    "Contribution License",
                    "Services Management",
                    "Term and Termination",
                    "Modifications and Interruptions",
                    "Governing Law",
                    "Dispute Resolution",
                    "Disclaimer",
                    "Limitations of Liability",
                    "Indemnification",
                    "User Data",
                    "Electronic Communications, Transactions, and Signatures",
                    "Miscellaneous",
                    "Contact Us",
                  ].map((item, idx) => (
                    <li key={item}>
                      <Link href={`#en-section-${idx + 1}`} className="hover:underline">
                        {item}
                      </Link>
                    </li>
                  ))}
                </ol>
              </section>

              <section id="en-section-1" className="space-y-4 rounded-3xl border border-white/10 bg-black/60 p-6 shadow-lg shadow-black/40">
                <h2 className="text-2xl font-semibold text-white">1. Our Services</h2>
                <p>
                  Information on the Services is not intended for distribution or use in any jurisdiction where such distribution would be
                  contrary to law or regulation. Users accessing from other jurisdictions do so at their own initiative and are responsible
                  for compliance with local laws.
                </p>
              </section>

              <section id="en-section-2" className="space-y-4 rounded-3xl border border-white/10 bg-black/60 p-6 shadow-lg shadow-black/40">
                <h2 className="text-2xl font-semibold text-white">2. Intellectual Property Rights</h2>
                <h3 className="text-xl font-semibold text-white">Our intellectual property</h3>
                <p>
                  We own or license all intellectual property in the Services, including source code, content, and marks. These are protected
                  by law and provided “as is” for personal or internal business use only.
                </p>
                <h3 className="text-xl font-semibold text-white">Your use of our Services</h3>
                <p>
                  Subject to these terms, we grant you a non-transferable, revocable license to access the Services and download or print
                  portions of the content for personal or internal business use. No other use is permitted without our written consent.
                </p>
                <p>
                  Requests for additional use should be directed to {" "}
                  <Link href="mailto:oscar.caducen@gmail.com" className="text-primary underline hover:text-primary/80">
                    oscar.caducen@gmail.com
                  </Link>
                  . We reserve all rights not expressly granted.
                </p>
              </section>

              <section id="en-section-3" className="space-y-4 rounded-3xl border border-white/10 bg-black/60 p-6 shadow-lg shadow-black/40">
                <h2 className="text-2xl font-semibold text-white">3. User Representations</h2>
                <p>
                  By using the Services, you represent that you have the legal capacity to agree to these terms, are not a minor in your
                  jurisdiction, will not use automated means to access the Services, will not use them for illegal purposes, and will not
                  violate applicable laws or regulations.
                </p>
                <p>Providing false information may result in termination of access.</p>
              </section>

              <section id="en-section-4" className="space-y-4 rounded-3xl border border-white/10 bg-black/60 p-6 shadow-lg shadow-black/40">
                <h2 className="text-2xl font-semibold text-white">4. Prohibited Activities</h2>
                <p>
                  You agree not to engage in unauthorized or unlawful activities, including data harvesting, security circumvention,
                  impersonation, harassment, and other prohibited conduct detailed in this section.
                </p>
              </section>

              <section id="en-section-5" className="space-y-4 rounded-3xl border border-white/10 bg-black/60 p-6 shadow-lg shadow-black/40">
                <h2 className="text-2xl font-semibold text-white">5. User Generated Contributions</h2>
                <p>
                  Although the Services do not currently offer user-generated content, any submissions you provide (feedback, ideas, etc.)
                  become our property without obligation to compensate you.
                </p>
              </section>

              <section id="en-section-6" className="space-y-4 rounded-3xl border border-white/10 bg-black/60 p-6 shadow-lg shadow-black/40">
                <h2 className="text-2xl font-semibold text-white">6. Contribution License</h2>
                <p>
                  By submitting feedback or other contributions, you grant us the right to use and share the material for any lawful purpose
                  without compensation.
                </p>
              </section>

              <section id="en-section-7" className="space-y-4 rounded-3xl border border-white/10 bg-black/60 p-6 shadow-lg shadow-black/40">
                <h2 className="text-2xl font-semibold text-white">7. Services Management</h2>
                <p>
                  We may monitor the Services, enforce these terms, remove content, and manage the Services to protect our rights and ensure
                  proper functioning.
                </p>
              </section>

              <section id="en-section-8" className="space-y-4 rounded-3xl border border-white/10 bg-black/60 p-6 shadow-lg shadow-black/40">
                <h2 className="text-2xl font-semibold text-white">8. Term and Termination</h2>
                <p>
                  We may deny access to the Services at our discretion without notice, particularly for breaches of these terms. Terminated
                  users are prohibited from creating new accounts, and we may pursue legal remedies.
                </p>
              </section>

              <section id="en-section-9" className="space-y-4 rounded-3xl border border-white/10 bg-black/60 p-6 shadow-lg shadow-black/40">
                <h2 className="text-2xl font-semibold text-white">9. Modifications and Interruptions</h2>
                <p>
                  We may modify or discontinue Services without notice and are not liable for downtime or changes. We are not obligated to
                  update information and may pause Services for maintenance.
                </p>
              </section>

              <section id="en-section-10" className="space-y-4 rounded-3xl border border-white/10 bg-black/60 p-6 shadow-lg shadow-black/40">
                <h2 className="text-2xl font-semibold text-white">10. Governing Law</h2>
                <p>These terms are governed by the laws of Sweden. The courts of Sweden have exclusive jurisdiction over disputes.</p>
              </section>

              <section id="en-section-11" className="space-y-4 rounded-3xl border border-white/10 bg-black/60 p-6 shadow-lg shadow-black/40">
                <h2 className="text-2xl font-semibold text-white">11. Dispute Resolution</h2>
                <h3 className="text-xl font-semibold text-white">Informal Negotiations</h3>
                <p>Parties will attempt to resolve disputes informally for 30 days before arbitration.</p>
                <h3 className="text-xl font-semibold text-white">Binding Arbitration</h3>
                <p>
                  Disputes shall be resolved through binding arbitration at the International Commercial Arbitration Court under the
                  European Arbitration Chamber with seat in Stockholm, Sweden. Proceedings will be in English.
                </p>
                <h3 className="text-xl font-semibold text-white">Restrictions</h3>
                <p>Arbitration is limited to individual disputes; no class or representative actions are permitted.</p>
                <h3 className="text-xl font-semibold text-white">Exceptions</h3>
                <p>
                  Intellectual property disputes, allegations of theft, privacy violations, or requests for injunctive relief may be brought
                  in court.
                </p>
              </section>

              <section id="en-section-12" className="space-y-4 rounded-3xl border border-white/10 bg-black/60 p-6 shadow-lg shadow-black/40">
                <h2 className="text-2xl font-semibold text-white">12. Disclaimer</h2>
                <p>
                  The Services are provided “as is.” We disclaim all warranties to the fullest extent permitted by law and are not
                  responsible for errors, interruptions, security breaches, or losses arising from use of the Services.
                </p>
              </section>

              <section id="en-section-13" className="space-y-4 rounded-3xl border border-white/10 bg-black/60 p-6 shadow-lg shadow-black/40">
                <h2 className="text-2xl font-semibold text-white">13. Limitations of Liability</h2>
                <p>
                  We are not liable for indirect, incidental, or consequential damages. In all cases, our liability is limited to the amount
                  paid by you, if any. Some jurisdictions may provide additional rights.
                </p>
              </section>

              <section id="en-section-14" className="space-y-4 rounded-3xl border border-white/10 bg-black/60 p-6 shadow-lg shadow-black/40">
                <h2 className="text-2xl font-semibold text-white">14. Indemnification</h2>
                <p>
                  You agree to indemnify us against losses arising from your use of the Services, breach of these terms, or violations of
                  third-party rights.
                </p>
              </section>

              <section id="en-section-15" className="space-y-4 rounded-3xl border border-white/10 bg-black/60 p-6 shadow-lg shadow-black/40">
                <h2 className="text-2xl font-semibold text-white">15. User Data</h2>
                <p>
                  We maintain certain data related to your use of the Services but are not liable for any loss or corruption of such data. You
                  are responsible for backups of your information.
                </p>
              </section>

              <section id="en-section-16" className="space-y-4 rounded-3xl border border-white/10 bg-black/60 p-6 shadow-lg shadow-black/40">
                <h2 className="text-2xl font-semibold text-white">16. Electronic Communications, Transactions, and Signatures</h2>
                <p>
                  You consent to receive electronic communications and agree that electronic signatures and records satisfy legal requirements
                  for written agreements.
                </p>
              </section>

              <section id="en-section-17" className="space-y-4 rounded-3xl border border-white/10 bg-black/60 p-6 shadow-lg shadow-black/40">
                <h2 className="text-2xl font-semibold text-white">17. Miscellaneous</h2>
                <p>
                  These terms, together with posted policies, constitute the entire agreement between you and us. Failure to enforce any
                  provision is not a waiver. If any provision is invalid, the remainder remains in effect. We may assign our rights and
                  obligations at any time.
                </p>
              </section>

              <section id="en-section-18" className="space-y-4 rounded-3xl border border-white/10 bg-black/60 p-6 shadow-lg shadow-black/40">
                <h2 className="text-2xl font-semibold text-white">18. Contact Us</h2>
                <p>For questions or complaints regarding the Services, contact us at:</p>
                <address className="not-italic leading-relaxed">
                  <span className="font-semibold text-white">CAVU AI</span>
                  <br />Oscar Caducén
                  <br />Fontinvägen 54
                  <br />Kungälv 442 32
                  <br />Sweden
                  <br />
                  <Link href="mailto:oscar.caducen@gmail.com" className="text-primary underline hover:text-primary/80">
                    oscar.caducen@gmail.com
                  </Link>
                </address>
              </section>
            </div>
          )}

          {language === "sv" && (
            <div className="mt-10 space-y-10 text-gray-200">
              <section className="space-y-4 rounded-3xl border border-white/10 bg-black/60 p-6 shadow-lg shadow-black/40">
                <h2 className="text-2xl font-semibold text-white">Tolkning och definitioner</h2>
                <h3 className="text-xl font-semibold text-white">Tolkning</h3>
                <p>
                  Ord där den inledande bokstaven är versal har betydelser som definieras under följande villkor. Följande definitioner ska
                  ha samma betydelse oavsett om de förekommer i singular eller plural.
                </p>
                <h3 className="text-xl font-semibold text-white">Definitioner</h3>
                <p>För dessa användarvillkors syften:</p>
                <ul className="list-disc space-y-2 pl-6">
                  <li>
                    <strong>Samarbetspartner (Affiliate)</strong> avser en enhet som kontrollerar, kontrolleras av eller står under gemensam
                    kontroll med en part.
                  </li>
                  <li><strong>Land</strong> avser Sverige.</li>
                  <li><strong>Företaget</strong> avser CAVU AI, Kungälv, Sverige.</li>
                  <li><strong>Enhet</strong> avser en dator, mobiltelefon eller digital surfplatta.</li>
                  <li><strong>Tjänst</strong> avser webbplatsen.</li>
                  <li>
                    <strong>Villkor</strong> avser dessa användarvillkor som utgör hela avtalet mellan dig och Företaget.
                  </li>
                  <li>
                    <strong>Tredjepartstjänst för sociala medier</strong> avser en webbplats där användare kan logga in eller skapa konto för att
                    använda tjänsten.
                  </li>
                  <li>
                    <strong>Webbplats</strong> avser CAVU AI, åtkomlig från {" "}
                    <Link href="https://cavuai.com" className="text-primary underline hover:text-primary/80">
                      https://cavuai.com
                    </Link>
                    .
                  </li>
                  <li>
                    <strong>Du</strong> avser den person som använder tjänsten, eller den juridiska enhet för vars räkning personen använder
                    tjänsten.
                  </li>
                </ul>
              </section>

              <section className="space-y-4 rounded-3xl border border-white/10 bg-black/60 p-6 shadow-lg shadow-black/40">
                <h2 className="text-2xl font-semibold text-white">Bekräftelse</h2>
                <p>
                  Detta är användarvillkoren som styr användningen av tjänsten och avtalet mellan dig och Företaget. Dessa användarvillkor
                  anger rättigheter och skyldigheter för alla användare angående användningen av tjänsten.
                </p>
                <p>
                  Din åtkomst till tjänsten är villkorad av att du accepterar och följer dessa användarvillkor. Genom att använda tjänsten
                  samtycker du till att vara bunden av dem. Om du inte samtycker ska du inte använda tjänsten.
                </p>
                <p>Du garanterar att du är över 18 år. Vi tillåter inte personer under 18 år att använda tjänsten.</p>
                <p>
                  Din åtkomst är också villkorad av att du accepterar och följer vår integritetspolicy. Läs den noggrant innan du använder
                  tjänsten.
                </p>
              </section>

              <section className="space-y-4 rounded-3xl border border-white/10 bg-black/60 p-6 shadow-lg shadow-black/40">
                <h2 className="text-2xl font-semibold text-white">Användardeklarationer</h2>
                <p>Genom att använda tjänsten garanterar du att:</p>
                <ol className="list-decimal space-y-2 pl-6">
                  <li>All registreringsinformation är sann, korrekt, aktuell och fullständig.</li>
                  <li>Du kommer att uppdatera registreringsinformationen omedelbart vid behov.</li>
                  <li>Du har rättslig kapacitet och samtycker till att följa dessa villkor.</li>
                  <li>Du inte är minderårig i din jurisdiktion.</li>
                  <li>Du inte får tillgång till tjänsten genom automatiserade eller icke-mänskliga medel.</li>
                  <li>Du inte använder tjänsten för olagliga eller otillåtna ändamål.</li>
                  <li>Din användning inte bryter mot tillämpliga lagar eller regler.</li>
                </ol>
                <p>
                  Om du tillhandahåller information som är osann eller ofullständig har vi rätt att stänga av eller avsluta ditt konto och
                  vägra framtida användning.
                </p>
              </section>

              <section className="space-y-4 rounded-3xl border border-white/10 bg-black/60 p-6 shadow-lg shadow-black/40">
                <h2 className="text-2xl font-semibold text-white">Förbjudna aktiviteter</h2>
                <p>
                  Du får inte använda tjänsten för andra syften än de vi tillhandahåller. Det inkluderar bland annat att:
                </p>
                <ol className="list-decimal space-y-2 pl-6">
                  <li>Systematiskt hämta data för att skapa en databas utan vår tillåtelse.</li>
                  <li>Göra obehörig användning, samla e-postadresser eller skapa konton under falska förespeglingar.</li>
                  <li>Störa säkerhetsfunktioner eller begränsa användning av innehåll.</li>
                  <li>Ägna dig åt obehörig inramning eller länkning.</li>
                  <li>Lura eller vilseleda oss eller andra användare.</li>
                  <li>Missbruka supporttjänster eller skicka falska rapporter.</li>
                  <li>Använda automatiserade system, datautvinning eller robotar.</li>
                  <li>Störa eller belasta tjänsten eller nätverk oproportionerligt.</li>
                  <li>Utge dig för annan användare eller person.</li>
                  <li>Sälja eller överföra din profil.</li>
                  <li>Använda information för att trakassera eller skada andra.</li>
                  <li>Använda tjänsten i konkurrerande syften eller för intäktsgenerering utan tillstånd.</li>
                  <li>Dekompilera eller bakåtkompilera programvara som ingår i tjänsten.</li>
                  <li>Kringgå åtgärder som begränsar åtkomst.</li>
                  <li>Trakassera eller hota våra anställda eller agenter.</li>
                  <li>Ta bort upphovsrätts- eller rättighetsmeddelanden.</li>
                  <li>Kopiera eller anpassa programvara (Flash, PHP, HTML, JavaScript, etc.).</li>
                  <li>Ladda upp virus, trojaner eller spam som stör andra användare.</li>
                  <li>Ladda upp material som samlar in information obemärkt (t.ex. web bugs, cookies).</li>
                  <li>Använda eller distribuera automatiserade system eller scripts som får åtkomst till tjänsten.</li>
                  <li>Smutskasta eller skada oss eller tjänsten.</li>
                  <li>Använda tjänsten i strid med lagar eller regler.</li>
                </ol>
              </section>

              <section className="space-y-4 rounded-3xl border border-white/10 bg-black/60 p-6 shadow-lg shadow-black/40">
                <h2 className="text-2xl font-semibold text-white">Användargenererade bidrag</h2>
                <p>
                  Tjänsten kan ge möjlighet att skicka in innehåll till oss eller göra det tillgängligt på tjänsten. Bidrag kan ses av andra
                  och betraktas som icke-konfidentiella. Genom att göra bidrag garanterar du bland annat att:
                </p>
                <ol className="list-decimal space-y-2 pl-6">
                  <li>Bidragen inte bryter mot tredje parts rättigheter.</li>
                  <li>Du är skapare eller har nödvändiga licenser och tillstånd.</li>
                  <li>Du har samtycke från identifierbara personer i bidragen.</li>
                  <li>Bidragen är inte falska eller vilseledande.</li>
                  <li>Bidragen är inte obehörig reklam eller spam.</li>
                  <li>Bidragen är inte obscena, trakasserande eller stötande.</li>
                  <li>Bidragen kränker inte integritet eller offentlighetsrättigheter.</li>
                  <li>Bidragen begär inte information från minderåriga eller utnyttjar dem.</li>
                  <li>Bidragen bryter inte mot lagar om barnpornografi eller skydd för minderåriga.</li>
                  <li>Bidragen innehåller inte stötande kommentarer om ras, kön eller andra skyddade kategorier.</li>
                  <li>Bidragen strider inte mot dessa villkor eller tillämplig lag.</li>
                </ol>
                <p>Vi kan övervaka bidrag men är inte skyldiga att göra det.</p>
              </section>

              <section className="space-y-4 rounded-3xl border border-white/10 bg-black/60 p-6 shadow-lg shadow-black/40">
                <h2 className="text-2xl font-semibold text-white">Bidragslicens</h2>
                <p>
                  Genom att publicera bidrag ger du oss en obegränsad, oåterkallelig och royaltyfri licens att använda, kopiera, distribuera,
                  offentligt visa och skapa härledda verk av bidragen, samt att använda ditt namn och varumärken i samband med dessa.
                </p>
                <p>Du avsäger dig moraliska rättigheter och garanterar att inga moraliska rättigheter hävdas i bidragen.</p>
              </section>

              <section className="space-y-4 rounded-3xl border border-white/10 bg-black/60 p-6 shadow-lg shadow-black/40">
                <h2 className="text-2xl font-semibold text-white">Tjänstehantering</h2>
                <ol className="list-decimal space-y-2 pl-6">
                  <li>Vi får övervaka tjänsten för att upptäcka brott mot villkoren.</li>
                  <li>Vi kan vidta rättsliga åtgärder mot användare som bryter mot lag eller villkor.</li>
                  <li>Vi kan begränsa tillgång till eller inaktivera bidrag.</li>
                  <li>Vi kan ta bort filer och innehåll som är betungande för våra system.</li>
                  <li>Vi kan hantera tjänsten för att skydda våra rättigheter och underlätta korrekt funktion.</li>
                </ol>
              </section>

              <section className="space-y-4 rounded-3xl border border-white/10 bg-black/60 p-6 shadow-lg shadow-black/40">
                <h2 className="text-2xl font-semibold text-white">Giltighetstid och uppsägning</h2>
                <p>
                  Dessa användarvillkor gäller så länge du använder tjänsten. Vi förbehåller oss rätten att neka tillgång och användning av
                  tjänsten till någon person av vilken anledning som helst, inklusive vid brott mot dessa villkor.
                </p>
                <p>
                  Om ditt konto avslutas får du inte registrera ett nytt konto. Vi kan vidta rättsliga åtgärder för att söka skadestånd.
                </p>
              </section>

              <section className="space-y-4 rounded-3xl border border-white/10 bg-black/60 p-6 shadow-lg shadow-black/40">
                <h2 className="text-2xl font-semibold text-white">Ändringar och avbrott</h2>
                <p>
                  Vi kan ändra, modifiera eller ta bort innehåll i tjänsten utan meddelande. Vi ansvarar inte för förlust eller skada som
                  uppkommer vid avbrott eller ändringar. Ingenting i villkoren förpliktar oss att underhålla eller uppdatera tjänsten.
                </p>
              </section>

              <section className="space-y-4 rounded-3xl border border-white/10 bg-black/60 p-6 shadow-lg shadow-black/40">
                <h2 className="text-2xl font-semibold text-white">Tillämplig lag</h2>
                <p>Dessa villkor styrs av svensk lag. Du underkastar dig den exklusiva jurisdiktionen hos domstolar i Sverige.</p>
              </section>

              <section className="space-y-4 rounded-3xl border border-white/10 bg-black/60 p-6 shadow-lg shadow-black/40">
                <h2 className="text-2xl font-semibold text-white">Tvistlösning</h2>
                <h3 className="text-xl font-semibold text-white">Informella förhandlingar</h3>
                <p>Parterna samtycker till att först försöka lösa tvister informellt i minst 60 dagar.</p>
                <h3 className="text-xl font-semibold text-white">Bindande skiljedom</h3>
                <p>
                  Tvister som inte kan lösas informellt ska lösas genom bindande skiljedom enligt Stockholms Handelskammares
                  skiljedomsinstitut (SCC). Skiljeförfarandet ska äga rum i Stockholm, Sverige.
                </p>
                <h3 className="text-xl font-semibold text-white">Undantag</h3>
                <ol className="list-decimal space-y-2 pl-6">
                  <li>Tvister om immateriella rättigheter.</li>
                  <li>Tvister som rör stöld, intrång eller brott mot dataintrångslagen.</li>
                  <li>Anspråk på föreläggande.</li>
                  <li>Tvister där juridiska åtgärder söks i domstol för föreläggande eller annan rättslig lättnad.</li>
                </ol>
              </section>

              <section className="space-y-4 rounded-3xl border border-white/10 bg-black/60 p-6 shadow-lg shadow-black/40">
                <h2 className="text-2xl font-semibold text-white">Begränsningar av ansvar</h2>
                <p>
                  I ingen händelse ska Företaget eller dess anställda hållas ansvariga för direkta, indirekta, följd- eller straffskador
                  inklusive förlust av data eller intäkter som uppstår vid användning av tjänsten.
                </p>
              </section>

              <section className="space-y-4 rounded-3xl border border-white/10 bg-black/60 p-6 shadow-lg shadow-black/40">
                <h2 className="text-2xl font-semibold text-white">Ansvarsfriskrivning</h2>
                <p>
                  Tjänsten tillhandahålls i befintligt skick och som tillgänglig. Du använder tjänsten på egen risk. Vi friskriver oss från
                  alla garantier i den utsträckning lagen tillåter.
                </p>
              </section>

              <section className="space-y-4 rounded-3xl border border-white/10 bg-black/60 p-6 shadow-lg shadow-black/40">
                <h2 className="text-2xl font-semibold text-white">Skadeersättning</h2>
                <p>
                  Du samtycker till att försvara, ersätta och hålla oss skadeslösa från förluster, skador, ansvar, anspråk eller krav inklusive
                  advokatkostnader som uppstår på grund av din användning av tjänsten eller brott mot dessa villkor.
                </p>
              </section>

              <section className="space-y-4 rounded-3xl border border-white/10 bg-black/60 p-6 shadow-lg shadow-black/40">
                <h2 className="text-2xl font-semibold text-white">Användardata</h2>
                <p>
                  Vi kan upprätthålla data du överför till tjänsten för att hantera dess prestanda. Du ansvarar för att säkerhetskopiera data
                  och vi ansvarar inte för förlust eller korruption av sådan data.
                </p>
              </section>

              <section className="space-y-4 rounded-3xl border border-white/10 bg-black/60 p-6 shadow-lg shadow-black/40">
                <h2 className="text-2xl font-semibold text-white">Elektronisk kommunikation, transaktioner och signaturer</h2>
                <p>
                  Genom att besöka tjänsten eller skicka e-post godtar du elektroniska kommunikationer. Du samtycker till användning av
                  elektroniska signaturer, kontrakt, beställningar och andra dokument.
                </p>
              </section>

              <section className="space-y-4 rounded-3xl border border-white/10 bg-black/60 p-6 shadow-lg shadow-black/40">
                <h2 className="text-2xl font-semibold text-white">Diverse</h2>
                <p>
                  Dessa användarvillkor och policyer som publicerats av oss utgör hela avtalet mellan dig och oss. Vårt misslyckande att
                  utöva en rättighet utgör inte ett avstående. Om någon bestämmelse är ogiltig ska den anses avskiljbar utan att påverka
                  övriga bestämmelser.
                </p>
                <p>
                  Det finns inget joint venture-, partner-, anställnings- eller agenturförhållande mellan dig och oss. Du avsäger dig försvar
                  baserat på villkorens elektroniska form eller avsaknaden av signatur.
                </p>
              </section>

              <section className="space-y-4 rounded-3xl border border-white/10 bg-black/60 p-6 shadow-lg shadow-black/40">
                <h2 className="text-2xl font-semibold text-white">Kontakta oss</h2>
                <p>För att lösa klagomål eller få information om tjänsten, kontakta oss på:</p>
                <address className="not-italic leading-relaxed">
                  <strong className="text-white">CAVU AI</strong>
                  <br />Kungälv, Sverige
                  <br />E-post: {" "}
                  <Link href="mailto:oscar.caducen@gmail.com" className="text-primary underline hover:text-primary/80">
                    oscar.caducen@gmail.com
                  </Link>
                  <br />
                  <Link href="https://cavuai.com/contact" className="text-primary underline hover:text-primary/80">
                    https://cavuai.com/contact
                  </Link>
                </address>
              </section>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  )
}

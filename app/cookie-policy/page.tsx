"use client"

import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/sections/Footer"
import { useTranslation } from "@/lib/useTranslation"

export default function CookiePolicyPage() {
  const { t, language } = useTranslation()

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main className="mx-auto max-w-4xl px-6 py-24 lg:px-0">
        <div className="prose prose-invert prose-slate max-w-none">
          <h1 className="font-heading text-4xl font-semibold text-white">{t.cookiePolicy.title}</h1>
          <p className="text-sm uppercase tracking-[0.3em] text-gray-400">{t.cookiePolicy.lastUpdated}</p>

          {language === "en" && (
            <div className="mt-10 space-y-10 text-gray-200">
              <section className="space-y-4 rounded-3xl border border-white/10 bg-black/60 p-6 shadow-lg shadow-black/40">
                <p className="leading-relaxed">
                  This Cookie Policy explains how CAVU AI ("Company," "we," "us," or "our") uses cookies and similar technologies to
                  recognize you when you visit our website at {" "}
                  <Link href="https://cavuai.com" className="text-primary underline hover:text-primary/80">
                    https://cavuai.com
                  </Link>{" "}
                  ("Website"). It describes what these technologies are and why we use them, as well as your rights to control our use of
                  them.
                </p>
                <p className="leading-relaxed">
                  In some cases we may use cookies to collect personal information, or that becomes personal information if we combine it
                  with other information.
                </p>
              </section>

              <section className="space-y-4 rounded-3xl border border-white/10 bg-black/60 p-6 shadow-lg shadow-black/40">
                <h2 className="text-2xl font-semibold text-white">What are cookies?</h2>
                <p className="leading-relaxed">
                  Cookies are small data files that are placed on your computer or mobile device when you visit a website. Website owners
                  use cookies to keep their sites working, to work more efficiently, and to provide reporting.
                </p>
                <p className="leading-relaxed">
                  Cookies set by the website owner (CAVU AI) are "first-party cookies." Cookies set by other parties are "third-party
                  cookies" and enable third-party functionality (such as advertising, interactive content, and analytics) across the
                  site and other websites.
                </p>
              </section>

              <section className="space-y-4 rounded-3xl border border-white/10 bg-black/60 p-6 shadow-lg shadow-black/40">
                <h2 className="text-2xl font-semibold text-white">How do we use cookies?</h2>
                <p className="leading-relaxed">
                  We use first- and third-party cookies for several reasons. Some cookies are required for technical reasons to operate our
                  Website and are referred to as "essential" or "strictly necessary" cookies. Other cookies help us understand user
                  preferences, tailor experiences, and provide analytics or advertising services.
                </p>
              </section>

              <section className="space-y-4 rounded-3xl border border-white/10 bg-black/60 p-6 shadow-lg shadow-black/40">
                <h2 className="text-2xl font-semibold text-white">How can I control cookies?</h2>
                <p className="leading-relaxed">
                  You can decide whether to accept or reject cookies. Our cookie banner allows you to select which categories you accept,
                  except for essential cookies, which are required for the site to function. You can also adjust browser controls to
                  manage cookies, though some features may not work if you disable them.
                </p>
              </section>

              <section className="space-y-6 rounded-3xl border border-white/10 bg-black/60 p-6 shadow-lg shadow-black/40">
                <h2 className="text-2xl font-semibold text-white">Types of cookies we use</h2>
                <p className="leading-relaxed">
                  The specific cookies served may vary depending on how you interact with the Website. Below are the primary categories we
                  use and what they do.
                </p>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white">Essential website cookies</h3>
                    <p className="leading-relaxed">
                      These cookies are necessary to provide services and use features such as secure areas. Without them, key functions
                      may not work.
                    </p>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse border border-white/10 text-sm">
                        <tbody>
                          <tr className="border-b border-white/10 bg-black/70">
                            <td className="px-4 py-3 font-semibold text-white">Name</td>
                            <td className="px-4 py-3 text-gray-200">theme-preference</td>
                          </tr>
                          <tr className="border-b border-white/10">
                            <td className="px-4 py-3 font-semibold text-white">Purpose</td>
                            <td className="px-4 py-3 text-gray-200">Stores the visitor’s dark/light mode preference.</td>
                          </tr>
                          <tr className="border-b border-white/10 bg-black/70">
                            <td className="px-4 py-3 font-semibold text-white">Provider</td>
                            <td className="px-4 py-3 text-gray-200">cavuai.com</td>
                          </tr>
                          <tr className="border-b border-white/10">
                            <td className="px-4 py-3 font-semibold text-white">Type</td>
                            <td className="px-4 py-3 text-gray-200">First-party cookie</td>
                          </tr>
                          <tr>
                            <td className="px-4 py-3 font-semibold text-white">Expires in</td>
                            <td className="px-4 py-3 text-gray-200">1 year</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white">Performance and functionality cookies</h3>
                    <p className="leading-relaxed">
                      Enhance performance and functionality but are not essential. Without them, some features (like embedded media) may be
                      unavailable.
                    </p>
                    <p className="italic text-gray-400">We currently do not use performance or functionality cookies.</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white">Analytics and customization cookies</h3>
                    <p className="leading-relaxed">
                      Collect aggregated information to help us understand usage patterns and improve our offerings.
                    </p>
                    <p className="italic text-gray-400">
                      We may adopt analytics services in the future; if we do, this policy will be updated.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white">Advertising cookies</h3>
                    <p className="leading-relaxed">Make advertising more relevant by preventing repetition and measuring effectiveness.</p>
                    <p className="italic text-gray-400">We currently do not use advertising cookies.</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white">Social networking cookies</h3>
                    <p className="leading-relaxed">
                      Enable sharing content through social networks and may be used for advertising.
                    </p>
                    <p className="italic text-gray-400">We currently do not use social networking cookies.</p>
                  </div>
                </div>
              </section>

              <section className="space-y-4 rounded-3xl border border-white/10 bg-black/60 p-6 shadow-lg shadow-black/40">
                <h2 className="text-2xl font-semibold text-white">How can I control cookies on my browser?</h2>
                <p className="leading-relaxed">
                  Browser controls vary; check your browser’s help menu for instructions on managing cookies. Below are links for popular
                  browsers:
                </p>
                <ul className="list-disc space-y-2 pl-6">
                  <li>
                    <Link
                      href="https://support.google.com/chrome/answer/95647"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary underline hover:text-primary/80"
                    >
                      Chrome
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://support.microsoft.com/en-us/windows/delete-and-manage-cookies-168dab11-0753-043d-7c16-ede5947fc64d"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary underline hover:text-primary/80"
                    >
                      Internet Explorer
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary underline hover:text-primary/80"
                    >
                      Firefox
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://support.apple.com/en-ie/guide/safari/sfri11471/mac"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary underline hover:text-primary/80"
                    >
                      Safari
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://support.microsoft.com/en-us/windows/microsoft-edge-browsing-data-and-privacy-bb8174ba-9d73-dcf2-9b4a-c582b4e640dd"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary underline hover:text-primary/80"
                    >
                      Edge
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://help.opera.com/en/latest/web-preferences/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary underline hover:text-primary/80"
                    >
                      Opera
                    </Link>
                  </li>
                </ul>
                <p className="leading-relaxed">
                  Most advertising networks provide opt-out mechanisms for targeted advertising. Learn more at the {" "}
                  <Link
                    href="http://www.aboutads.info/choices/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary underline hover:text-primary/80"
                  >
                    Digital Advertising Alliance
                  </Link>
                  , {" "}
                  <Link
                    href="https://youradchoices.ca/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary underline hover:text-primary/80"
                  >
                    Digital Advertising Alliance of Canada
                  </Link>
                  , and {" "}
                  <Link
                    href="http://www.youronlinechoices.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary underline hover:text-primary/80"
                  >
                    European Interactive Digital Advertising Alliance
                  </Link>
                  .
                </p>
              </section>

              <section className="space-y-4 rounded-3xl border border-white/10 bg-black/60 p-6 shadow-lg shadow-black/40">
                <h2 className="text-2xl font-semibold text-white">What about other tracking technologies?</h2>
                <p className="leading-relaxed">
                  We may occasionally use web beacons or tracking pixels to monitor traffic patterns, improve site performance, and measure
                  marketing effectiveness. These technologies often rely on cookies, so declining cookies may impair their functionality.
                </p>
              </section>

              <section className="space-y-4 rounded-3xl border border-white/10 bg-black/60 p-6 shadow-lg shadow-black/40">
                <h2 className="text-2xl font-semibold text-white">Do you use Flash cookies or Local Shared Objects?</h2>
                <p className="leading-relaxed">
                  Some services use Flash Cookies (Local Shared Objects) for additional storage. You can manage them via the {" "}
                  <Link
                    href="http://www.macromedia.com/support/documentation/en/flashplayer/help/settings_manager07.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary underline hover:text-primary/80"
                  >
                    Website Storage Settings Panel
                  </Link>{" "}
                  and the {" "}
                  <Link
                    href="http://www.macromedia.com/support/documentation/en/flashplayer/help/settings_manager03.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary underline hover:text-primary/80"
                  >
                    Global Storage Settings Panel
                  </Link>
                  . Restricting Flash Cookies may reduce functionality of some applications.
                </p>
              </section>

              <section className="space-y-4 rounded-3xl border border-white/10 bg-black/60 p-6 shadow-lg shadow-black/40">
                <h2 className="text-2xl font-semibold text-white">Do you serve targeted advertising?</h2>
                <p className="leading-relaxed">
                  Third parties may serve cookies to deliver advertising. They may collect information about visits to this and other sites
                  to show relevant ads. The data collected does not directly identify you unless you choose to provide identifying details.
                </p>
              </section>

              <section className="space-y-4 rounded-3xl border border-white/10 bg-black/60 p-6 shadow-lg shadow-black/40">
                <h2 className="text-2xl font-semibold text-white">How often will you update this Cookie Policy?</h2>
                <p className="leading-relaxed">
                  We may update this policy from time to time to reflect changes in the cookies we use or for other operational, legal, or
                  regulatory reasons. Please revisit this page regularly to stay informed.
                </p>
              </section>

              <section className="space-y-4 rounded-3xl border border-white/10 bg-black/60 p-6 shadow-lg shadow-black/40">
                <h2 className="text-2xl font-semibold text-white">Where can I get further information?</h2>
                <p className="leading-relaxed">
                  If you have questions about our use of cookies or other technologies, email us at {" "}
                  <Link href="mailto:oscar.caducen@gmail.com" className="text-primary underline hover:text-primary/80">
                    oscar.caducen@gmail.com
                  </Link>{" "}
                  or write to:
                </p>
                <address className="not-italic leading-relaxed">
                  CAVU AI
                  <br />
                  Oscar Caducén
                  <br />
                  Fontinvägen 54
                  <br />
                  Kungälv 442 32
                  <br />
                  Sweden
                </address>
              </section>
            </div>
          )}

          {language === "sv" && (
            <div className="mt-10 space-y-10 text-gray-200">
              <section className="space-y-4 rounded-3xl border border-white/10 bg-black/60 p-6 shadow-lg shadow-black/40">
                <p className="leading-relaxed">
                  Denna cookiepolicy förklarar vad cookies är och hur vi använder dem, de typer av cookies vi använder, vilken information
                  som samlas in och hur den används, samt hur du kan kontrollera dina cookiepreferenser. För mer information om hur vi
                  hanterar personuppgifter, se vår integritetspolicy.
                </p>
                <p className="leading-relaxed">
                  Du kan när som helst ändra eller återkalla ditt samtycke från cookiedeklarationen på vår webbplats. Läs mer om vilka vi
                  är, hur du kontaktar oss och hur vi behandlar personuppgifter i vår integritetspolicy.
                </p>
                <p className="leading-relaxed">Ditt samtycke gäller för följande domän: cavuai.com.</p>
              </section>

              <section className="space-y-4 rounded-3xl border border-white/10 bg-black/60 p-6 shadow-lg shadow-black/40">
                <h2 className="text-2xl font-semibold text-white">Vad är cookies?</h2>
                <p className="leading-relaxed">
                  Cookies är små textfiler som lagrar information på din enhet när webbplatsen laddas i din webbläsare. De hjälper oss att
                  webbplatsen fungerar korrekt, gör den säkrare, ger en bättre användarupplevelse och låter oss analysera hur webbplatsen
                  presterar.
                </p>
              </section>

              <section className="space-y-4 rounded-3xl border border-white/10 bg-black/60 p-6 shadow-lg shadow-black/40">
                <h2 className="text-2xl font-semibold text-white">Hur använder vi cookies?</h2>
                <p className="leading-relaxed">
                  Precis som de flesta webbplatser använder vi både förstapartscookies och tredjepartscookies. Förstapartscookies är
                  nödvändiga för webbplatsens funktion och samlar inte in personligt identifierbar information. Tredjepartscookies används
                  främst för att analysera hur webbplatsen används, hålla tjänster säkra, tillhandahålla relevanta annonser och förbättra
                  användarupplevelsen.
                </p>
              </section>

              <section className="space-y-4 rounded-3xl border border-white/10 bg-black/60 p-6 shadow-lg shadow-black/40">
                <h2 className="text-2xl font-semibold text-white">Vilka typer av cookies använder vi?</h2>
                <h3 className="text-xl font-semibold text-white">Nödvändiga cookies</h3>
                <p className="leading-relaxed">
                  Dessa cookies är nödvändiga för att webbplatsen ska fungera korrekt och säkerställa grundläggande funktioner.
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-white/10 text-sm">
                    <thead>
                      <tr className="bg-black/70">
                        <th className="px-4 py-3 text-left font-semibold text-white">Cookie</th>
                        <th className="px-4 py-3 text-left font-semibold text-white">Varaktighet</th>
                        <th className="px-4 py-3 text-left font-semibold text-white">Beskrivning</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-t border-white/10">
                        <td className="px-4 py-3 text-gray-200">theme-preference</td>
                        <td className="px-4 py-3 text-gray-200">1 år</td>
                        <td className="px-4 py-3 text-gray-200">Lagrar användarens val av ljust/mörkt tema.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <h3 className="text-xl font-semibold text-white">Funktionella cookies</h3>
                <p className="leading-relaxed">Vi använder för närvarande inga funktionella cookies.</p>
                <h3 className="text-xl font-semibold text-white">Analytiska cookies</h3>
                <p className="leading-relaxed">
                  Hjälper till att förstå hur besökare interagerar med webbplatsen. Vi använder för närvarande inga analytiska cookies, men
                  om vi inför sådana kommer policyn att uppdateras.
                </p>
                <h3 className="text-xl font-semibold text-white">Prestanda cookies</h3>
                <p className="leading-relaxed">Vi använder för närvarande inga prestanda cookies.</p>
                <h3 className="text-xl font-semibold text-white">Annonscookies</h3>
                <p className="leading-relaxed">Vi använder för närvarande inga annonscookies.</p>
              </section>

              <section className="space-y-4 rounded-3xl border border-white/10 bg-black/60 p-6 shadow-lg shadow-black/40">
                <h2 className="text-2xl font-semibold text-white">Hur kan du kontrollera cookiepreferenser?</h2>
                <p className="leading-relaxed">
                  Du kan ändra preferenser genom att klicka på "Integritet & Cookies"-fliken och återkalla samtycke. Webb­lä­sare erbjuder också
                  olika metoder för att blockera eller radera cookies. Instruktioner finns i respektive webbläsares supportdokument.
                </p>
                <ul className="list-disc space-y-2 pl-6">
                  <li>
                    <Link href="https://support.google.com/accounts/answer/32050" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:text-primary/80">
                      Chrome
                    </Link>
                  </li>
                  <li>
                    <Link href="https://support.apple.com/sv-se/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:text-primary/80">
                      Safari
                    </Link>
                  </li>
                  <li>
                    <Link href="https://support.mozilla.org/sv/kb/forbattrad-spårningsskydd-firefox-datorer" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:text-primary/80">
                      Firefox
                    </Link>
                  </li>
                  <li>
                    <Link href="https://support.microsoft.com/sv-se/windows/ta-bort-och-hantera-cookies-168dab11-0753-043d-7c16-ede5947fc64d" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:text-primary/80">
                      Internet Explorer
                    </Link>
                  </li>
                  <li>
                    <Link href="https://support.microsoft.com/sv-se/microsoft-edge/ta-bort-cookies-i-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:text-primary/80">
                      Microsoft Edge
                    </Link>
                  </li>
                </ul>
                <p className="leading-relaxed">
                  För att välja bort intressebaserad reklam, besök {" "}
                  <Link href="http://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:text-primary/80">
                    Digital Advertising Alliance
                  </Link>
                  , {" "}
                  <Link href="http://www.networkadvertising.org/managing/opt_out.asp" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:text-primary/80">
                    Network Advertising Initiative
                  </Link>{" "}
                  samt {" "}
                  <Link href="http://www.youronlinechoices.eu/" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:text-primary/80">
                    European Interactive Digital Advertising Alliance
                  </Link>
                  .
                </p>
              </section>

              <section className="space-y-4 rounded-3xl border border-white/10 bg-black/60 p-6 shadow-lg shadow-black/40">
                <h2 className="text-2xl font-semibold text-white">Mer information om cookies</h2>
                <p className="leading-relaxed">
                  Du kan läsa mer om cookies på {" "}
                  <Link href="https://www.termsfeed.com/blog/cookies/" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:text-primary/80">
                    TermsFeed – All About Cookies
                  </Link>
                  .
                </p>
              </section>

              <section className="space-y-4 rounded-3xl border border-white/10 bg-black/60 p-6 shadow-lg shadow-black/40">
                <h2 className="text-2xl font-semibold text-white">Spårningsteknologier och Do Not Track</h2>
                <p className="leading-relaxed">
                  De flesta webbläsare är inställda på att acceptera cookies som standard. Du kan ställa in webbläsaren för att ta bort eller
                  blockera cookies, men vissa funktioner kan påverkas. Vi svarar för närvarande inte på "Do Not Track"-signaler.
                </p>
              </section>

              <section className="space-y-4 rounded-3xl border border-white/10 bg-black/60 p-6 shadow-lg shadow-black/40">
                <h2 className="text-2xl font-semibold text-white">Dataskydd enligt GDPR</h2>
                <p className="leading-relaxed">
                  Om du är bosatt inom EES har du rättigheter såsom tillgång, rättelse, radering, dataportabilitet och att invända mot
                  behandling. Kontakta oss för att utöva dina rättigheter eller kontakta Integritetsskyddsmyndigheten (IMY) på {" "}
                  <Link href="https://www.imy.se" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:text-primary/80">
                    https://www.imy.se
                  </Link>
                  .
                </p>
              </section>

              <section className="space-y-4 rounded-3xl border border-white/10 bg-black/60 p-6 shadow-lg shadow-black/40">
                <h2 className="text-2xl font-semibold text-white">Ändringar i denna cookiepolicy</h2>
                <p className="leading-relaxed">
                  Vi kan uppdatera policyn vid behov. Ändringar publiceras på denna sida och "Senast uppdaterad"-datumet justeras
                  därefter. Granska policyn regelbundet.
                </p>
              </section>

              <section className="space-y-4 rounded-3xl border border-white/10 bg-black/60 p-6 shadow-lg shadow-black/40">
                <h2 className="text-2xl font-semibold text-white">Kontakta oss</h2>
                <ul className="list-disc space-y-2 pl-6 text-sm sm:text-base">
                  <li>E-post: {" "}
                    <Link href="mailto:oscar.caducen@gmail.com" className="text-primary underline hover:text-primary/80">
                      oscar.caducen@gmail.com
                    </Link>
                  </li>
                  <li>
                    Webbplats: {" "}
                    <Link href="https://cavuai.com/contact" className="text-primary underline hover:text-primary/80">
                      https://cavuai.com/contact
                    </Link>
                  </li>
                  <li>Post: CAVU AI, Kungälv, Sverige</li>
                </ul>
              </section>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  )
}

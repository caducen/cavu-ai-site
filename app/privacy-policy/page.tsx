"use client"

import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/sections/Footer"
import { useTranslation } from "@/lib/useTranslation"

export default function PrivacyPolicyPage() {
  const { t, language } = useTranslation()

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main className="mx-auto max-w-4xl px-6 py-24 lg:px-0">
        <div className="prose prose-invert prose-slate max-w-none">
          <h1 className="font-heading text-4xl font-semibold text-white">{t.privacyPolicy.title}</h1>
          <p className="text-sm uppercase tracking-[0.3em] text-gray-400">{t.privacyPolicy.lastUpdated}</p>

          {language === "en" && (
            <div className="space-y-10 text-gray-200">
              <section className="space-y-4 rounded-3xl border border-white/10 bg-black/60 p-6 shadow-lg shadow-black/40">
                <p className="leading-relaxed">
                  This Privacy Notice for CAVU AI ("we," "us," or "our") describes how and why we might access, collect, store,
                  use, and/or share ("process") your personal information when you use our services ("Services"), including when you:
                </p>
                <ul className="list-disc space-y-2 pl-6 text-sm sm:text-base">
                  <li>
                    Visit our website at {" "}
                    <Link href="https://cavuai.com" className="text-primary underline hover:text-primary/80">
                      https://cavuai.com
                    </Link>{" "}
                    or any website of ours that links to this Privacy Notice
                  </li>
                  <li>Use CAVU AI – innovating smart software solutions for the future with business automation</li>
                  <li>Engage with us in other related ways, including any sales, marketing, or events</li>
                </ul>
                <p className="leading-relaxed">
                  <strong>Questions or concerns?</strong> Reading this Privacy Notice will help you understand your privacy rights and
                  choices. We are responsible for making decisions about how your personal information is processed. If you do not
                  agree with our policies and practices, please do not use our Services. If you still have any questions or
                  concerns, please contact us at {" "}
                  <Link href="mailto:oscar.caducen@gmail.com" className="text-primary underline hover:text-primary/80">
                    oscar.caducen@gmail.com
                  </Link>
                  .
                </p>
              </section>

              <section className="space-y-4 rounded-3xl border border-white/10 bg-black/60 p-6 shadow-lg shadow-black/40">
                <h2 className="text-2xl font-semibold text-white">Summary of Key Points</h2>
                <p className="italic leading-relaxed text-gray-300">
                  This summary provides key points from our Privacy Notice, but you can find out more details about any of these
                  topics by consulting the relevant sections below.
                </p>
                <div className="space-y-4 text-sm sm:text-base">
                  <div>
                    <p className="font-semibold text-white">What personal information do we process?</p>
                    <p>
                      When you visit, use, or navigate our Services, we may process personal information depending on how you interact
                      with us and the Services, the choices you make, and the products and features you use.
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-white">Do we process any sensitive personal information?</p>
                    <p>We do not process sensitive personal information.</p>
                  </div>
                  <div>
                    <p className="font-semibold text-white">Do we collect any information from third parties?</p>
                    <p>We do not collect any information from third parties.</p>
                  </div>
                  <div>
                    <p className="font-semibold text-white">How do we process your information?</p>
                    <p>
                      We process your information to provide, improve, and administer our Services, communicate with you, for security
                      and fraud prevention, and to comply with law. We may also process your information for other purposes with your
                      consent.
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-white">In what situations and with which parties do we share personal information?</p>
                    <p>We may share information in specific situations and with specific third parties.</p>
                  </div>
                  <div>
                    <p className="font-semibold text-white">How do we keep your information safe?</p>
                    <p>
                      We have organizational and technical safeguards in place to protect your personal information, but no online
                      transmission or storage technology can be guaranteed to be 100% secure.
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-white">What are your rights?</p>
                    <p>
                      Depending on where you are located, the applicable privacy law may give you certain rights regarding your
                      personal information.
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-white">How do you exercise your rights?</p>
                    <p>You can exercise your rights by submitting a data subject access request or contacting us directly.</p>
                  </div>
                </div>
              </section>

              <section className="space-y-4 rounded-3xl border border-white/10 bg-black/60 p-6 shadow-lg shadow-black/40">
                <h2 className="text-2xl font-semibold text-white">Table of Contents</h2>
                <ol className="list-decimal space-y-2 pl-6 text-primary">
                  <li>
                    <Link href="#section1" className="hover:underline">
                      What Information Do We Collect?
                    </Link>
                  </li>
                  <li>
                    <Link href="#section2" className="hover:underline">
                      How Do We Process Your Information?
                    </Link>
                  </li>
                  <li>
                    <Link href="#section3" className="hover:underline">
                      What Legal Bases Do We Rely On?
                    </Link>
                  </li>
                  <li>
                    <Link href="#section4" className="hover:underline">
                      When and With Whom Do We Share Information?
                    </Link>
                  </li>
                  <li>
                    <Link href="#section5" className="hover:underline">
                      Do We Use Cookies?
                    </Link>
                  </li>
                  <li>
                    <Link href="#section6" className="hover:underline">
                      How Long Do We Keep Your Information?
                    </Link>
                  </li>
                  <li>
                    <Link href="#section7" className="hover:underline">
                      How Do We Keep Your Information Safe?
                    </Link>
                  </li>
                  <li>
                    <Link href="#section8" className="hover:underline">
                      Do We Collect Information from Minors?
                    </Link>
                  </li>
                  <li>
                    <Link href="#section9" className="hover:underline">
                      What Are Your Privacy Rights?
                    </Link>
                  </li>
                  <li>
                    <Link href="#section10" className="hover:underline">
                      Controls for Do-Not-Track Features
                    </Link>
                  </li>
                  <li>
                    <Link href="#section11" className="hover:underline">
                      Do We Make Updates to This Notice?
                    </Link>
                  </li>
                  <li>
                    <Link href="#section12" className="hover:underline">
                      How Can You Contact Us?
                    </Link>
                  </li>
                  <li>
                    <Link href="#section13" className="hover:underline">
                      How Can You Review, Update, or Delete Data?
                    </Link>
                  </li>
                </ol>
              </section>

              <section id="section1" className="space-y-4 rounded-3xl border border-white/10 bg-black/60 p-6 shadow-lg shadow-black/40">
                <h2 className="text-2xl font-semibold text-white">1. What Information Do We Collect?</h2>
                <h3 className="text-xl font-semibold text-white">Personal Information You Disclose to Us</h3>
                <p className="leading-relaxed">
                  <strong>
                    <em>In Short:</em>
                  </strong>{" "}
                  <em>We collect personal information that you provide to us.</em>
                </p>
                <p className="leading-relaxed">
                  We collect personal information that you voluntarily provide when you express an interest in obtaining information
                  about us or our products and Services, participate in activities on the Services, or contact us.
                </p>
                <p className="leading-relaxed">
                  <strong>Personal Information Provided by You.</strong> The information we collect depends on the context of your
                  interactions with us and the Services. It may include names, phone numbers, email addresses, job titles, and company
                  names.
                </p>
                <p className="leading-relaxed">
                  <strong>Sensitive Information.</strong> We do not process sensitive information.
                </p>
                <p className="leading-relaxed">
                  All personal information that you provide must be true, complete, and accurate, and you must notify us of any
                  changes.
                </p>
              </section>

              <section id="section2" className="space-y-4 rounded-3xl border border-white/10 bg-black/60 p-6 shadow-lg shadow-black/40">
                <h2 className="text-2xl font-semibold text-white">2. How Do We Process Your Information?</h2>
                <p className="leading-relaxed">
                  <strong>
                    <em>In Short:</em>
                  </strong>{" "}
                  <em>
                    We process your information to provide, improve, and administer our Services, communicate with you, for security and
                    fraud prevention, and to comply with law. We may also process your information for other purposes with your
                    consent.
                  </em>
                </p>
                <p className="leading-relaxed">
                  We process personal information for a variety of reasons depending on how you interact with our Services, including:
                </p>
                <ul className="list-disc space-y-2 pl-6 text-sm sm:text-base">
                  <li>To deliver and facilitate delivery of services to the user.</li>
                  <li>To respond to user inquiries or offer support.</li>
                  <li>To send administrative information about products, services, and policy updates.</li>
                  <li>To fulfill and manage orders, payments, returns, and exchanges.</li>
                  <li>To enable user-to-user communications when applicable.</li>
                  <li>To save or protect an individual’s vital interest, such as to prevent harm.</li>
                </ul>
              </section>

              <section id="section3" className="space-y-4 rounded-3xl border border-white/10 bg-black/60 p-6 shadow-lg shadow-black/40">
                <h2 className="text-2xl font-semibold text-white">3. What Legal Bases Do We Rely On?</h2>
                <p className="leading-relaxed">
                  <strong>
                    <em>In Short:</em>
                  </strong>{" "}
                  <em>
                    We only process your personal information when we believe it is necessary and we have a valid legal reason under
                    applicable law.
                  </em>
                </p>
                <p className="leading-relaxed">Under GDPR and UK GDPR, the legal bases we may rely on include:</p>
                <ul className="list-disc space-y-2 pl-6 text-sm sm:text-base">
                  <li>
                    <strong>Consent.</strong> Processing with your permission for a specific purpose (you can withdraw consent at any
                    time).
                  </li>
                  <li>
                    <strong>Performance of a Contract.</strong> Processing necessary to fulfill our contractual obligations to you or
                    at your request prior to entering a contract.
                  </li>
                  <li>
                    <strong>Legal Obligations.</strong> Processing necessary to comply with legal duties, cooperate with authorities, or
                    exercise legal rights.
                  </li>
                  <li>
                    <strong>Vital Interests.</strong> Processing necessary to protect your vital interests or those of another person.
                  </li>
                </ul>
              </section>

              <section id="section4" className="space-y-4 rounded-3xl border border-white/10 bg-black/60 p-6 shadow-lg shadow-black/40">
                <h2 className="text-2xl font-semibold text-white">4. When and With Whom Do We Share Your Information?</h2>
                <p className="leading-relaxed">
                  <strong>
                    <em>In Short:</em>
                  </strong>{" "}
                  <em>We may share information in specific situations described in this section.</em>
                </p>
                <p className="leading-relaxed">
                  We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company
                  assets, financing, or acquisition of all or a portion of our business to another company.
                </p>
              </section>

              <section id="section5" className="space-y-4 rounded-3xl border border-white/10 bg-black/60 p-6 shadow-lg shadow-black/40">
                <h2 className="text-2xl font-semibold text-white">5. Do We Use Cookies and Other Tracking Technologies?</h2>
                <p className="leading-relaxed">
                  <strong>
                    <em>In Short:</em>
                  </strong>{" "}
                  <em>We may use cookies and other tracking technologies to collect and store information.</em>
                </p>
                <p className="leading-relaxed">
                  We may use cookies and similar tracking technologies (like web beacons and pixels) to gather information when you
                  interact with our Services. Some technologies maintain security, prevent crashes, save preferences, and support basic
                  functionality. Others allow analytics or advertising partners to tailor experiences.
                </p>
                <p className="leading-relaxed">
                  Specific information about how we use such technologies and how you can refuse certain cookies is outlined in our
                  Cookie Policy at {" "}
                  <Link href="https://cavuai.com/cookie-policy" className="text-primary underline hover:text-primary/80">
                    https://cavuai.com/cookie-policy
                  </Link>
                  .
                </p>
              </section>

              <section id="section6" className="space-y-4 rounded-3xl border border-white/10 bg-black/60 p-6 shadow-lg shadow-black/40">
                <h2 className="text-2xl font-semibold text-white">6. How Long Do We Keep Your Information?</h2>
                <p className="leading-relaxed">
                  <strong>
                    <em>In Short:</em>
                  </strong>{" "}
                  <em>
                    We keep your information for as long as necessary to fulfill the purposes outlined in this Privacy Notice unless
                    otherwise required by law.
                  </em>
                </p>
                <p className="leading-relaxed">
                  We retain personal information only as long as needed for the purposes stated, unless a longer retention period is
                  required or permitted by law. When we have no ongoing legitimate business need, we delete or anonymize the
                  information, or securely store it until deletion is possible.
                </p>
              </section>

              <section id="section7" className="space-y-4 rounded-3xl border border-white/10 bg-black/60 p-6 shadow-lg shadow-black/40">
                <h2 className="text-2xl font-semibold text-white">7. How Do We Keep Your Information Safe?</h2>
                <p className="leading-relaxed">
                  <strong>
                    <em>In Short:</em>
                  </strong>{" "}
                  <em>We strive to protect your personal information with organizational and technical measures.</em>
                </p>
                <p className="leading-relaxed">
                  We implement appropriate safeguards, but no electronic transmission or storage technology can be guaranteed to be
                  100% secure. Access the Services within a secure environment and contact us if you suspect unauthorized access.
                </p>
              </section>

              <section id="section8" className="space-y-4 rounded-3xl border border-white/10 bg-black/60 p-6 shadow-lg shadow-black/40">
                <h2 className="text-2xl font-semibold text-white">8. Do We Collect Information from Minors?</h2>
                <p className="leading-relaxed">
                  <strong>
                    <em>In Short:</em>
                  </strong>{" "}
                  <em>We do not knowingly collect or market data to children under 18 years of age.</em>
                </p>
                <p className="leading-relaxed">
                  If we learn that personal information from users under 18 has been collected, we will deactivate the account and
                  delete the data. Contact us at {" "}
                  <Link href="mailto:oscar.caducen@gmail.com" className="text-primary underline hover:text-primary/80">
                    oscar.caducen@gmail.com
                  </Link>{" "}
                  if you become aware of such data.
                </p>
              </section>

              <section id="section9" className="space-y-4 rounded-3xl border border-white/10 bg-black/60 p-6 shadow-lg shadow-black/40">
                <h2 className="text-2xl font-semibold text-white">9. What Are Your Privacy Rights?</h2>
                <p className="leading-relaxed">
                  <strong>
                    <em>In Short:</em>
                  </strong>{" "}
                  <em>
                    In some regions you have rights that allow you greater access to and control over your personal information.
                  </em>
                </p>
                <p className="leading-relaxed">
                  Depending on your location (e.g., EEA, UK, Switzerland) you may have rights to request access, correction, erasure,
                  restriction, portability, or object to processing. We will consider and act upon any request in accordance with
                  applicable laws.
                </p>
                <p className="leading-relaxed">
                  If you believe we are unlawfully processing your data, you can contact your local data protection authority such as
                  the {" "}
                  <Link
                    href="https://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary underline hover:text-primary/80"
                  >
                    EEA Member State authority
                  </Link>
                  , the {" "}
                  <Link
                    href="https://ico.org.uk/make-a-complaint/data-protection-complaints/data-protection-complaints/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary underline hover:text-primary/80"
                  >
                    UK ICO
                  </Link>
                  , or the {" "}
                  <Link
                    href="https://www.edoeb.admin.ch/edoeb/en/home.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary underline hover:text-primary/80"
                  >
                    Swiss FDPIC
                  </Link>
                  .
                </p>
                <h3 className="text-xl font-semibold text-white">Withdrawing Your Consent</h3>
                <p className="leading-relaxed">
                  If we rely on consent, you may withdraw it at any time by contacting us. This will not affect processing already
                  carried out.
                </p>
                <h3 className="text-xl font-semibold text-white">Cookies and Similar Technologies</h3>
                <p className="leading-relaxed">
                  Most browsers accept cookies by default. You can usually change settings to remove or reject cookies, though some
                  features may be affected. See our Cookie Policy at {" "}
                  <Link href="https://cavuai.com/cookie-policy" className="text-primary underline hover:text-primary/80">
                    https://cavuai.com/cookie-policy
                  </Link>
                  .
                </p>
                <p className="leading-relaxed">
                  For privacy-rights questions, email us at {" "}
                  <Link href="mailto:oscar.caducen@gmail.com" className="text-primary underline hover:text-primary/80">
                    oscar.caducen@gmail.com
                  </Link>
                  .
                </p>
              </section>

              <section id="section10" className="space-y-4 rounded-3xl border border-white/10 bg-black/60 p-6 shadow-lg shadow-black/40">
                <h2 className="text-2xl font-semibold text-white">10. Controls for Do-Not-Track Features</h2>
                <p className="leading-relaxed">
                  Most browsers and mobile systems offer a Do-Not-Track (DNT) setting. There is no uniform technology standard for
                  recognizing DNT signals, so we currently do not respond to them. If a standard emerges that we must follow, we will
                  update this notice.
                </p>
              </section>

              <section id="section11" className="space-y-4 rounded-3xl border border-white/10 bg-black/60 p-6 shadow-lg shadow-black/40">
                <h2 className="text-2xl font-semibold text-white">11. Do We Make Updates to This Notice?</h2>
                <p className="leading-relaxed">
                  <strong>
                    <em>In Short:</em>
                  </strong>{" "}
                  <em>Yes, we will update this notice as necessary to stay compliant with relevant laws.</em>
                </p>
                <p className="leading-relaxed">
                  We may update this Privacy Notice from time to time. The updated version will include an updated “Revised” date. If
                  we make material changes, we may notify you by posting a prominent notice or contacting you directly.
                </p>
              </section>

              <section id="section12" className="space-y-4 rounded-3xl border border-white/10 bg-black/60 p-6 shadow-lg shadow-black/40">
                <h2 className="text-2xl font-semibold text-white">12. How Can You Contact Us?</h2>
                <p className="leading-relaxed">
                  If you have questions or comments about this notice, email us at {" "}
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

              <section id="section13" className="space-y-4 rounded-3xl border border-white/10 bg-black/60 p-6 shadow-lg shadow-black/40">
                <h2 className="text-2xl font-semibold text-white">13. How Can You Review, Update, or Delete the Data We Collect?</h2>
                <p className="leading-relaxed">
                  You have the right to request access to the personal information we collect, understand how we process it, rectify
                  inaccuracies, or request deletion. These rights may be limited by applicable law.
                </p>
                <p className="leading-relaxed">
                  To submit a request, please complete our {" "}
                  <Link
                    href="https://app.termly.io/dsar/18f14735-1c48-499a-9c09-41fdae0770b4"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary underline hover:text-primary/80"
                  >
                    data subject access request form
                  </Link>
                  .
                </p>
              </section>
            </div>
          )}

          {language === "sv" && (
            <div className="space-y-10 text-gray-200">
              <section className="space-y-4 rounded-3xl border border-white/10 bg-black/60 p-6 shadow-lg shadow-black/40">
                <p className="leading-relaxed">
                  Denna integritetspolicy beskriver våra riktlinjer och rutiner för insamling, användning och utlämnande av din
                  information när du använder tjänsten, samt informerar dig om dina integritetsrättigheter och hur lagen skyddar dig.
                </p>
                <p className="leading-relaxed">
                  Vi använder dina personuppgifter för att tillhandahålla och förbättra tjänsten. Genom att använda tjänsten samtycker du
                  till insamling och användning av information i enlighet med denna integritetspolicy.
                </p>
              </section>

              <section className="space-y-4 rounded-3xl border border-white/10 bg-black/60 p-6 shadow-lg shadow-black/40">
                <h2 className="text-2xl font-semibold text-white">Tolkning och Definitioner</h2>
                <h3 className="text-xl font-semibold text-white">Tolkning</h3>
                <p className="leading-relaxed">
                  Ord där den inledande bokstaven är versal har betydelser som definieras under följande villkor. Följande definitioner
                  ska ha samma betydelse oavsett om de förekommer i singular eller plural.
                </p>
                <h3 className="text-xl font-semibold text-white">Definitioner</h3>
                <p className="leading-relaxed">För denna integritetspolicys syften:</p>
                <ul className="list-disc space-y-2 pl-6 text-sm sm:text-base">
                  <li>
                    <strong>Konto</strong> avser ett unikt konto som skapats för dig för att få tillgång till vår tjänst eller delar av
                    vår tjänst.
                  </li>
                  <li>
                    <strong>Affiliate (Samarbetspartner)</strong> avser en enhet som kontrollerar, kontrolleras av eller står under
                    gemensam kontroll med en part, där "kontroll" avser ägande av 50% eller mer av aktierna, ägarintresset eller andra
                    värdepapper som berättigar till rösträtt för val av styrelseledamöter eller annan förvaltande myndighet.
                  </li>
                  <li>
                    <strong>Företaget</strong> ("Företaget", "Vi", "Oss" eller "Vår") avser CAVU AI, Kungälv, Sverige.
                  </li>
                  <li>
                    <strong>Cookies</strong> är små filer som placeras på din enhet av en webbplats och innehåller uppgifter om din
                    webbhistorik.
                  </li>
                  <li>
                    <strong>Land</strong> avser Sverige.
                  </li>
                  <li>
                    <strong>Enhet</strong> avser vilken enhet som helst som kan få tillgång till tjänsten, såsom dator, mobiltelefon eller
                    digital surfplatta.
                  </li>
                  <li>
                    <strong>Personuppgifter</strong> är all information som relaterar till en identifierad eller identifierbar person.
                  </li>
                  <li>
                    <strong>Tjänst</strong> avser webbplatsen.
                  </li>
                  <li>
                    <strong>Tjänsteleverantör</strong> avser fysisk eller juridisk person som behandlar data för Företagets räkning.
                  </li>
                  <li>
                    <strong>Användningsdata</strong> avser data som samlas in automatiskt vid användning av tjänsten.
                  </li>
                  <li>
                    <strong>Webbplats</strong> avser CAVU AI, åtkomlig från {" "}
                    <Link href="https://cavuai.com" className="text-primary underline hover:text-primary/80">
                      https://cavuai.com
                    </Link>
                    .
                  </li>
                  <li>
                    <strong>Du</strong> avser den person som använder tjänsten eller den juridiska enhet som använder tjänsten.
                  </li>
                </ul>
              </section>

              <section className="space-y-4 rounded-3xl border border-white/10 bg-black/60 p-6 shadow-lg shadow-black/40">
                <h2 className="text-2xl font-semibold text-white">Insamling och Användning av Personuppgifter</h2>
                <h3 className="text-xl font-semibold text-white">Typer av Data som Samlas In</h3>
                <h4 className="text-lg font-semibold text-white">Personuppgifter</h4>
                <p className="leading-relaxed">
                  När du använder vår tjänst kan vi be dig att tillhandahålla viss personligt identifierbar information, såsom
                  e-postadress, namn, telefonnummer, företagsnamn eller användningsdata.
                </p>
                <h4 className="text-lg font-semibold text-white">Användningsdata</h4>
                <p className="leading-relaxed">
                  Användningsdata samlas in automatiskt och kan inkludera IP-adress, webbläsartyp, besökta sidor och andra diagnostiska
                  data. Vid användning via mobil enhet kan vi samla in enhetstyp, operativsystem och unika identifierare.
                </p>
                <h4 className="text-lg font-semibold text-white">Spårningsteknologier och Cookies</h4>
                <p className="leading-relaxed">
                  Vi använder cookies, web beacons och liknande teknologier för att förbättra och analysera tjänsten. Du kan välja att
                  vägra cookies i din webbläsare, men vissa delar av tjänsten kan bli otillgängliga.
                </p>
              </section>

              <section className="space-y-4 rounded-3xl border border-white/10 bg-black/60 p-6 shadow-lg shadow-black/40">
                <h2 className="text-2xl font-semibold text-white">Användning av Dina Personuppgifter</h2>
                <p className="leading-relaxed">Företaget kan använda personuppgifter för att:</p>
                <ul className="list-disc space-y-2 pl-6 text-sm sm:text-base">
                  <li>Tillhandahålla och upprätthålla tjänsten.</li>
                  <li>Hantera ditt konto och ge tillgång till användarfunktioner.</li>
                  <li>Fullgöra kontrakt eller beställningar.</li>
                  <li>Kontakta dig via e-post, telefon eller andra elektroniska medel.</li>
                  <li>Tillhandahålla nyheter, erbjudanden eller information om liknande tjänster.</li>
                  <li>Hantera förfrågningar och support.</li>
                  <li>Genomföra företagsöverföringar eller andra affärstransaktioner.</li>
                  <li>Utföra dataanalys och förbättra tjänstens kvalitet.</li>
                </ul>
                <p className="leading-relaxed">
                  Vi kan dela personuppgifter med tjänsteleverantörer, samarbetspartners, affärspartners eller med ditt samtycke.
                </p>
              </section>

              <section className="space-y-4 rounded-3xl border border-white/10 bg-black/60 p-6 shadow-lg shadow-black/40">
                <h2 className="text-2xl font-semibold text-white">Lagring och Överföring av Personuppgifter</h2>
                <p className="leading-relaxed">
                  Vi behåller personuppgifter så länge det behövs för de syften som anges här eller enligt lag. Uppgifterna kan överföras
                  till länder utanför din jurisdiktion, men vi säkerställer adekvata skyddsåtgärder innan överföring.
                </p>
              </section>

              <section className="space-y-4 rounded-3xl border border-white/10 bg-black/60 p-6 shadow-lg shadow-black/40">
                <h2 className="text-2xl font-semibold text-white">Ta Bort Personuppgifter</h2>
                <p className="leading-relaxed">
                  Du kan begära att vi raderar personuppgifter. Vissa uppgifter kan behöva behållas enligt lag. Uppdatera, ändra eller
                  radera information via ditt konto eller genom att kontakta oss.
                </p>
              </section>

              <section className="space-y-4 rounded-3xl border border-white/10 bg-black/60 p-6 shadow-lg shadow-black/40">
                <h2 className="text-2xl font-semibold text-white">Utlämnande av Personuppgifter</h2>
                <ul className="list-disc space-y-2 pl-6 text-sm sm:text-base">
                  <li><strong>Affärstransaktioner:</strong> Uppgifter kan överföras vid fusion, förvärv eller liknande.</li>
                  <li>
                    <strong>Brottsbekämpning:</strong> Uppgifter kan lämnas ut på begäran av myndigheter eller enligt lag.
                  </li>
                  <li>
                    <strong>Juridiska krav:</strong> Uppgifter kan delas för att uppfylla lag, skydda rättigheter eller förebygga fel.
                  </li>
                </ul>
              </section>

              <section className="space-y-4 rounded-3xl border border-white/10 bg-black/60 p-6 shadow-lg shadow-black/40">
                <h2 className="text-2xl font-semibold text-white">Säkerhet för Dina Personuppgifter</h2>
                <p className="leading-relaxed">
                  Vi använder rimliga säkerhetsåtgärder men kan inte garantera fullständig säkerhet. Kontakta oss om du misstänker
                  obehörig åtkomst.
                </p>
              </section>

              <section className="space-y-4 rounded-3xl border border-white/10 bg-black/60 p-6 shadow-lg shadow-black/40">
                <h2 className="text-2xl font-semibold text-white">Barns Integritet</h2>
                <p className="leading-relaxed">
                  Tjänsten riktar sig inte till personer under 18 år. Om vi får kännedom om att vi samlat in uppgifter om minderåriga
                  utan vårdnadshavares samtycke, raderar vi dem.
                </p>
              </section>

              <section className="space-y-4 rounded-3xl border border-white/10 bg-black/60 p-6 shadow-lg shadow-black/40">
                <h2 className="text-2xl font-semibold text-white">Länkar till Andra Webbplatser</h2>
                <p className="leading-relaxed">
                  Tjänsten kan innehålla länkar till externa webbplatser. Vi ansvarar inte för deras innehåll eller integritetspolicyer och
                  rekommenderar att du granskar varje webbplats du besöker.
                </p>
              </section>

              <section className="space-y-4 rounded-3xl border border-white/10 bg-black/60 p-6 shadow-lg shadow-black/40">
                <h2 className="text-2xl font-semibold text-white">Ändringar i Integritetspolicyn</h2>
                <p className="leading-relaxed">
                  Vi kan uppdatera denna integritetspolicy. Förändringar meddelas genom uppdaterad version på denna sida och, om
                  nödvändigt, via e-post eller annat meddelande.
                </p>
              </section>

              <section className="space-y-4 rounded-3xl border border-white/10 bg-black/60 p-6 shadow-lg shadow-black/40">
                <h2 className="text-2xl font-semibold text-white">Kontakta Oss</h2>
                <p className="leading-relaxed">Vid frågor om denna integritetspolicy, kontakta oss:</p>
                <ul className="list-disc space-y-2 pl-6 text-sm sm:text-base">
                  <li>E-post: {" "}
                    <Link href="mailto:oscar.caducen@gmail.com" className="text-primary underline hover:text-primary/80">
                      oscar.caducen@gmail.com
                    </Link>
                  </li>
                  <li>
                    Webbsida: {" "}
                    <Link href="https://cavuai.com/contact" className="text-primary underline hover:text-primary/80">
                      https://cavuai.com/contact
                    </Link>
                  </li>
                  <li>Telefon: +46 (lägg till ditt telefonnummer)</li>
                  <li>Postadress: CAVU AI, Kungälv, Sverige</li>
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

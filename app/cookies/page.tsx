import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import CookieBanner from '@/components/cookie-banner'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Zásady cookies — CzechMatchTrips',
  description: 'Informace o používání souborů cookie na webu czechmatchtrips.com.',
}

export default function CookiesPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <div className="relative bg-card border-b border-border py-14 overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 border border-primary/10 rotate-45 translate-x-1/3 -translate-y-1/3 pointer-events-none" />
          <div className="max-w-3xl mx-auto px-4 relative z-10">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">Právní dokumenty</span>
            <h1 className="font-black text-4xl md:text-5xl mt-2 uppercase leading-tight">
              Zásady cookies
            </h1>
            <p className="text-muted-foreground mt-3 text-sm">
              Poslední aktualizace: 2026
            </p>
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-4 py-14">
          <div className="prose-custom space-y-10 text-muted-foreground text-sm leading-relaxed">

            <section>
              <h2 className="font-black text-xl text-foreground uppercase tracking-tight mb-3">1. Co jsou soubory cookie?</h2>
              <p>
                Soubory cookie jsou malé textové soubory, které se ukládají do vašeho zařízení při návštěvě webových stránek. Pomáhají webovým stránkám zapamatovat si vaše preference a zlepšovat uživatelský zážitek.
              </p>
            </section>

            <section>
              <h2 className="font-black text-xl text-foreground uppercase tracking-tight mb-3">2. Jaké cookies používáme?</h2>
              <div className="space-y-4">
                <div className="bg-card border border-border p-4">
                  <h3 className="font-bold text-foreground text-sm mb-1">Nezbytné cookies</h3>
                  <p>Tyto soubory cookie jsou nutné pro správné fungování webu. Bez nich by web nemohl fungovat. Nelze je zakázat.</p>
                </div>
                <div className="bg-card border border-border p-4">
                  <h3 className="font-bold text-foreground text-sm mb-1">Funkční cookies</h3>
                  <p>Umožňují webu zapamatovat si vaše volby (např. jazyk, region) a poskytovat vylepšené, personalizované funkce.</p>
                </div>
                <div className="bg-card border border-border p-4">
                  <h3 className="font-bold text-foreground text-sm mb-1">Analytické cookies</h3>
                  <p>Pomáhají nám pochopit, jak návštěvníci interagují s webem. Veškerá data jsou anonymizována a používána výhradně pro zlepšování našich služeb.</p>
                </div>
                <div className="bg-card border border-border p-4">
                  <h3 className="font-bold text-foreground text-sm mb-1">Marketingové cookies</h3>
                  <p>Slouží k zobrazování relevantní reklamy. Jsou aktivovány pouze s vaším výslovným souhlasem.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-black text-xl text-foreground uppercase tracking-tight mb-3">3. Jak dlouho jsou cookies uloženy?</h2>
              <p>
                Relační cookies (session cookies) jsou smazány po zavření prohlížeče. Trvalé cookies přetrvávají po stanovenou dobu — obvykle od 30 dní do 2 let, v závislosti na typu.
              </p>
            </section>

            <section>
              <h2 className="font-black text-xl text-foreground uppercase tracking-tight mb-3">4. Správa cookies</h2>
              <p className="mb-3">
                Svůj souhlas s cookies můžete kdykoli odvolat nebo upravit prostřednictvím nastavení vašeho prohlížeče. Níže jsou uvedeny odkazy na pokyny pro nejběžnější prohlížeče:
              </p>
              <ul className="space-y-1 list-disc pl-5">
                <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Google Chrome</a></li>
                <li><a href="https://support.mozilla.org/cs/kb/povoleni-zakazani-cookies" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Mozilla Firefox</a></li>
                <li><a href="https://support.apple.com/cs-cz/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Safari</a></li>
                <li><a href="https://support.microsoft.com/cs-cz/microsoft-edge/odstranění-souborů-cookie-v-microsoft-edge" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Microsoft Edge</a></li>
              </ul>
            </section>

            <section>
              <h2 className="font-black text-xl text-foreground uppercase tracking-tight mb-3">5. Cookies třetích stran</h2>
              <p>
                Náš web může obsahovat obsah nebo funkce třetích stran (mapy, videa, analýzy), které mohou také ukládat cookies. Tito poskytovatelé mají vlastní zásady ochrany soukromí a zpracování údajů.
              </p>
            </section>

            <section>
              <h2 className="font-black text-xl text-foreground uppercase tracking-tight mb-3">6. Kontakt</h2>
              <p>
                Máte-li dotazy k používání souborů cookie, kontaktujte nás na{' '}
                <a href="mailto:info@czechmatchtrips.com" className="text-primary hover:underline">info@czechmatchtrips.com</a>.
              </p>
              <p className="mt-2">
                K.C. NTOMATA LIMITED, Stylianou Lena 24, Christiana Court, Flat/Office 202, Strovolos, 2019 Nicosia, Cyprus.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
      <CookieBanner />
    </>
  )
}

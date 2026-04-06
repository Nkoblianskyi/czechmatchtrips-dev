import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import CookieBanner from '@/components/cookie-banner'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Ochrana soukromí — CzechMatchTrips',
  description: 'Zásady ochrany osobních údajů webu czechmatchtrips.com v souladu s GDPR.',
}

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <div className="relative bg-card border-b border-border py-14 overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 border border-primary/10 rotate-45 translate-x-1/3 -translate-y-1/3 pointer-events-none" />
          <div className="max-w-3xl mx-auto px-4 relative z-10">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">Právní dokumenty</span>
            <h1 className="font-black text-4xl md:text-5xl mt-2 uppercase leading-tight">
              Ochrana soukromí
            </h1>
            <p className="text-muted-foreground mt-3 text-sm">
              Poslední aktualizace: 2026
            </p>
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-4 py-14">
          <div className="space-y-10 text-muted-foreground text-sm leading-relaxed">

            <section>
              <h2 className="font-black text-xl text-foreground uppercase tracking-tight mb-3">1. Správce osobních údajů</h2>
              <p>
                Správcem vašich osobních údajů je společnost <strong className="text-foreground">K.C. NTOMATA LIMITED</strong>, se sídlem Stylianou Lena 24, Christiana Court, Flat/Office 202, Strovolos, 2019 Nicosia, Cyprus.
              </p>
            </section>

            <section>
              <h2 className="font-black text-xl text-foreground uppercase tracking-tight mb-3">2. Jaké osobní údaje zpracováváme?</h2>
              <div className="space-y-3">
                {[
                  { title: 'Identifikační údaje', text: 'Jméno a příjmení pro identifikaci zákazníka a vystavení dokladů.' },
                  { title: 'Kontaktní údaje', text: 'E-mailová adresa a telefonní číslo pro komunikaci ohledně rezervace a zájezdu.' },
                  { title: 'Technické údaje', text: 'IP adresa, typ prohlížeče, cookies — anonymně pro analytické účely.' },
                  { title: 'Údaje o rezervaci', text: 'Informace o objednaném zájezdu, termínu a počtu účastníků.' },
                ].map((item) => (
                  <div key={item.title} className="bg-card border border-border p-4">
                    <h3 className="font-bold text-foreground text-sm mb-1">{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="font-black text-xl text-foreground uppercase tracking-tight mb-3">3. Účel zpracování</h2>
              <ul className="space-y-2 list-disc pl-5">
                <li>Zpracování a správa rezervací zájezdů</li>
                <li>Komunikace se zákazníky před, během a po zájezdu</li>
                <li>Plnění zákonných povinností (účetnictví, daně)</li>
                <li>Zlepšování kvality našich služeb na základě anonymní analýzy</li>
                <li>Zasílání informací o nových zájezdech (pouze se souhlasem)</li>
              </ul>
            </section>

            <section>
              <h2 className="font-black text-xl text-foreground uppercase tracking-tight mb-3">4. Právní základ zpracování</h2>
              <p className="mb-3">
                Zpracováváme vaše údaje na základě:
              </p>
              <ul className="space-y-2 list-disc pl-5">
                <li><strong className="text-foreground">Plnění smlouvy</strong> — zpracování rezervace a poskytnutí zájezdu.</li>
                <li><strong className="text-foreground">Právní povinnost</strong> — vedení účetnictví a dalších zákonných povinností.</li>
                <li><strong className="text-foreground">Oprávněný zájem</strong> — ochrana našich práv a zlepšování služeb.</li>
                <li><strong className="text-foreground">Souhlas</strong> — marketingová komunikace (kdykoli odvolatelný).</li>
              </ul>
            </section>

            <section>
              <h2 className="font-black text-xl text-foreground uppercase tracking-tight mb-3">5. Doba uchovávání údajů</h2>
              <p>
                Osobní údaje uchováváme po dobu nezbytnou pro splnění účelu zpracování, nejdéle však po dobu stanovenou platnou legislativou. Údaje z rezervací uchováváme po dobu 5 let od uskutečnění zájezdu.
              </p>
            </section>

            <section>
              <h2 className="font-black text-xl text-foreground uppercase tracking-tight mb-3">6. Vaše práva</h2>
              <p className="mb-3">V souladu s GDPR máte právo:</p>
              <ul className="space-y-2 list-disc pl-5">
                <li>Na přístup ke svým osobním údajům</li>
                <li>Na opravu nepřesných údajů</li>
                <li>Na výmaz („právo být zapomenut") za splnění zákonných podmínek</li>
                <li>Na omezení zpracování</li>
                <li>Na přenositelnost údajů</li>
                <li>Na námitku proti zpracování</li>
                <li>Kdykoli odvolat udělený souhlas</li>
              </ul>
              <p className="mt-3">
                Svá práva uplatníte na adrese <a href="mailto:info@czechmatchtrips.com" className="text-primary hover:underline">info@czechmatchtrips.com</a>. Máte také právo podat stížnost u dozorového úřadu — Úřadu pro ochranu osobních údajů (ÚOOÚ).
              </p>
            </section>

            <section>
              <h2 className="font-black text-xl text-foreground uppercase tracking-tight mb-3">7. Předávání údajů třetím stranám</h2>
              <p>
                Vaše osobní údaje neprodáváme ani nepronajímáme. Údaje sdílíme výhradně s poskytovateli, kteří se podílejí na realizaci zájezdů (ubytovací zařízení, průvodci) a se zpracovateli plateb — vždy v rozsahu nezbytném pro dané účely a s příslušnými smluvními zárukami.
              </p>
            </section>

            <section>
              <h2 className="font-black text-xl text-foreground uppercase tracking-tight mb-3">8. Bezpečnost</h2>
              <p>
                Přijímáme vhodná technická a organizační opatření k ochraně vašich osobních údajů před neoprávněným přístupem, ztrátou nebo zneužitím. Přenos dat je šifrován pomocí SSL/TLS.
              </p>
            </section>

            <section>
              <h2 className="font-black text-xl text-foreground uppercase tracking-tight mb-3">9. Kontakt a změny zásad</h2>
              <p>
                Tyto zásady mohou být čas od času aktualizovány. O podstatných změnách vás budeme informovat e-mailem nebo prostřednictvím oznámení na webu. Dotazy zasílejte na <a href="mailto:info@czechmatchtrips.com" className="text-primary hover:underline">info@czechmatchtrips.com</a>.
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

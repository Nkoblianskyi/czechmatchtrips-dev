'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    q: 'Jaká fyzická kondice je potřeba pro vaše zájezdy?',
    a: 'Každý zájezd má označení obtížnosti — Lehká, Střední, Náročná nebo Extrémní. U lehkých výletů stačí pravidelná procházka, u náročnějších doporučujeme minimálně 2–3 měsíce pravidelného tréninku. Vždy uvádíme přesné parametry (km/den, převýšení), abyste se mohli připravit.',
  },
  {
    q: 'Co je zahrnuto v ceně zájezdu?',
    a: 'Každý zájezd má jasně uvedený seznam "Zahrnuto" a "Nezahrnuto". Zpravidla v ceně jsou: ubytování, strava dle programu, průvodce, pojištění záchranné služby a přeprava zavazadel. Doprava na start a zpět zpravidla zahrnuta není.',
  },
  {
    q: 'Jaký je maximální počet účastníků?',
    a: 'Záměrně udržujeme malé skupiny — od 8 do max. 14 osob. Průvodce tak věnuje pozornost každému, tempo skupiny je příjemné a trasa zůstává "vaší" bez přeplnění.',
  },
  {
    q: 'Je možné zájezd zrušit nebo přesunout?',
    a: 'Storno podmínky jsou uvedeny v každé rezervaci. Obecně: zrušení více než 30 dní před výjezdem — vrátíme 80 % ceny. 15–30 dní — 50 %. Méně než 15 dní — pouze při závažných okolnostech. Vždy rádi pomůžeme s přesunem na jiný termín.',
  },
  {
    q: 'Co dělat, pokud nejsem připraven fyzicky?',
    a: 'Napište nám! Rádi poradíme, který zájezd je pro vaši aktuální kondici nejvhodnější, a pošleme tréninkový plán, který vás připraví na náročnější výlety.',
  },
  {
    q: 'Organizujete zájezdy na míru pro skupiny?',
    a: 'Ano. Pro firemní teambuildingy, party přátel nebo rodinné výlety vytvoříme individuální program. Kontaktujte nás s požadavky a rádi připravíme nabídku.',
  },
]

export default function FaqSection() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className="py-20 bg-secondary/20">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">Časté otázky</span>
          <h2 className="font-black text-4xl md:text-5xl mt-2 uppercase leading-tight text-balance">
            Máte<br />
            <span className="text-primary">otázky?</span>
          </h2>
        </div>

        <div className="space-y-2">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-border bg-card overflow-hidden">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 p-5 text-left hover:bg-secondary/40 transition-colors"
                aria-expanded={open === i}
              >
                <span className="font-semibold text-sm text-foreground">{faq.q}</span>
                <ChevronDown
                  className={`w-4 h-4 text-primary flex-shrink-0 transition-transform duration-200 ${open === i ? 'rotate-180' : ''}`}
                />
              </button>
              {open === i && (
                <div className="px-5 pb-5">
                  <p className="text-sm text-muted-foreground leading-relaxed border-t border-border/50 pt-4">
                    {faq.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

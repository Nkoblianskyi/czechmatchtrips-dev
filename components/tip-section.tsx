import { Compass, Backpack, Map, Zap, Shield, Users } from 'lucide-react'

const tips = [
  {
    icon: Compass,
    title: 'Plánujte s předstihem',
    body: 'Oblíbené trasy v Krkonoších a na Šumavě jsou v létě plně obsazeny měsíce předem. Rezervujte co nejdříve.',
  },
  {
    icon: Backpack,
    title: 'Vybavení rozhoduje',
    body: 'Lehké a funkční oblečení šetří energii na vícedenních túrách. Méně je více — přeneste se do každého zájezdu s optimálním batohem.',
  },
  {
    icon: Map,
    title: 'Offline mapy jsou základ',
    body: 'V horách signál kolísá. Stáhněte si offline mapu před výjezdem — doporučujeme OpenTopoMap nebo Mapy.cz.',
  },
  {
    icon: Zap,
    title: 'Příprava před výjezdem',
    body: 'Před náročnější túrou si dopřejte pár kratších výletů a zkontrolujte vybavení. Budete se soustředit na krajinu, ne na řešení detailů po cestě.',
  },
  {
    icon: Shield,
    title: 'Pojištění a podmínky',
    body: 'Standardní cestovní pojištění nemusí krýt zásah horské záchranné služby. Ověřte si limity a připojištění pro pobyt v horách podle náročnosti trasy.',
  },
  {
    icon: Users,
    title: 'Cestujte ve skupině',
    body: 'Skupinový zájezd přináší nejen bezpečí, ale i energii, která vás pohání v nejtěžších momentech. A nová přátelství.',
  },
]

export default function TipSection() {
  return (
    <section className="py-20 max-w-6xl mx-auto px-4">
      <div className="mb-12">
        <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">Průvodce cestováním</span>
        <h2 className="font-black text-4xl md:text-5xl mt-2 uppercase leading-tight text-balance">
          Tipy pro<br />
          <span className="text-primary">aktivní</span> turisty
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {tips.map((tip, i) => (
          <div
            key={tip.title}
            className="bg-card border border-border p-6 group hover:border-primary/40 transition-colors duration-300"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <tip.icon className="w-5 h-5 text-primary" />
              </div>
              <span className="font-mono text-xs text-muted-foreground">0{i + 1}</span>
            </div>
            <h3 className="font-bold text-lg text-foreground mb-2">{tip.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{tip.body}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

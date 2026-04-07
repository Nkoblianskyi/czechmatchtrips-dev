import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

const pillars = [
  'Zkušení průvodci s certifikací',
  'Malé skupiny — max. 14 osob',
  'Autorské trasy bez turistického přeplnění',
  'Plné zázemí a pojištění v ceně',
]

export default function AboutSection() {
  return (
    <section className="py-20 max-w-6xl mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Image side */}
        <div className="relative">
          <div className="relative h-72 md:h-[420px] overflow-hidden">
            <Image
              src="/images/about-team.jpg"
              alt="Náš tým průvodců"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-linear-to-br from-primary/20 to-transparent mix-blend-multiply" />
          </div>
          {/* Abstract accent */}
          <div className="absolute -bottom-4 -right-4 w-32 h-32 border-2 border-primary/30 hidden md:block" />
          <div className="absolute -top-4 -left-4 w-20 h-20 bg-primary/10 hidden md:block" />
        </div>

        {/* Text side */}
        <div>
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">O nás</span>
          <h2 className="font-black text-4xl md:text-5xl mt-3 mb-5 leading-tight text-balance uppercase">
            Autorskými<br />
            <span className="text-primary">túrami</span><br />
            k zážitkům
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            CzechMatchTrips vzniklo z touhy sdílet to nejlepší, co Česko a Evropa nabízí — formou malých autorských výletů s průvodcem. Každá trasa vzniká v terénu, ne v katalogu.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Náš tým trasy prochází a ladí po celý rok. Upravujeme tempo, přidáváme zastávky, výhledy a místa, která mají atmosféru. Výsledkem jsou výlety, na které se nezapomíná.
          </p>
          <ul className="space-y-2 mb-8">
            {pillars.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-foreground">
                <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
          <Link
            href="/o-nas"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-bold uppercase tracking-wider text-sm hover:opacity-90 transition-opacity"
          >
            Více o nás <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

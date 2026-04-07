import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import CookieBanner from '@/components/cookie-banner'
import { Shield, Compass, Users, Award, MapPin, Mountain } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'O nás — CzechMatchTrips',
  description: 'Jsme tým průvodců. Vytváříme autorské výlety a vícedenní túry po Česku i Evropě v malých skupinách.',
}

const values = [
  {
    icon: Compass,
    title: 'Autorské trasy',
    text: 'Každá naše trasa je pečlivě vymyšlena a osobně prověřena. Nevybíráme z katalogů — tvoříme od základu.',
  },
  {
    icon: Shield,
    title: 'Bezpečnost na prvním místě',
    text: 'Všichni průvodci mají certifikaci v horské záchranné službě a první pomoci. Pojištění je součástí každého zájezdu.',
  },
  {
    icon: Users,
    title: 'Malé skupiny',
    text: 'Maximálně 14 účastníků na zájezd. Věříme, že dobrodružství se lépe prožívá v intimní skupině.',
  },
  {
    icon: Award,
    title: 'Zkušení průvodci',
    text: 'Náš tým tvoří zkušení průvodci se zkušenostmi z hor, vícedenních přechodů, cyklovýletů i cestování na lehko.',
  },
]

const stats = [
  { value: '6', label: 'Typů tras' },
  { value: '12', label: 'Destinací' },
  { value: '200+', label: 'Spokojených cestovatelů' },
  { value: '4', label: 'Roky zkušeností' },
]

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Hero */}
        <div className="relative bg-card border-b border-border overflow-hidden">
          {/* Abstract geometry */}
          <div className="absolute top-0 right-0 w-80 h-80 border border-primary/10 rotate-45 translate-x-1/3 -translate-y-1/2 pointer-events-none" />
          <div className="absolute bottom-0 left-8 w-20 h-20 bg-primary/5 pointer-events-none" />

          <div className="max-w-6xl mx-auto px-4 py-20 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Mountain className="w-4 h-4 text-primary" />
                  <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">O nás</span>
                </div>
                <h1 className="font-black text-5xl md:text-6xl uppercase leading-tight text-balance mb-5">
                  Tvoříme<br />
                  <span className="text-primary">zážitky,</span><br />
                  ne jen zájezdy
                </h1>
                <p className="text-muted-foreground leading-relaxed text-base max-w-md">
                  CzechMatchTrips vznikl z jednoduché myšlenky: krajina se poznává nejlíp pomalu a naplno. Jsme malý tým průvodců a nadšenců, kteří věří, že nejlepší cesta k zážitkům je na kole, pěšky nebo na vodě.
                </p>
              </div>

              <div className="relative aspect-4/3 overflow-hidden">
                <Image
                  src="/images/about-team.jpg"
                  alt="Náš tým průvodců"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                {/* Abstract corner accent */}
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-primary/20 pointer-events-none" />
                <div className="absolute top-0 right-0 w-10 h-10 bg-primary/10 pointer-events-none" />
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="bg-primary py-12 border-b border-primary/20">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="font-black text-4xl text-primary-foreground">{s.value}</div>
                  <div className="text-xs font-bold uppercase tracking-widest text-primary-foreground/60 mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="max-w-6xl mx-auto px-4 py-20">
          <div className="mb-12 text-center">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">Naše hodnoty</span>
            <h2 className="font-black text-4xl uppercase mt-2 text-balance">
              Proč jet s námi
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {values.map((v) => {
              const Icon = v.icon
              return (
                <div key={v.title} className="bg-card border border-border p-7 relative overflow-hidden group hover:border-primary/40 transition-colors">
                  {/* BG accent */}
                  <div className="absolute -top-4 -right-4 w-16 h-16 border border-primary/10 rotate-12 group-hover:rotate-45 transition-transform duration-500 pointer-events-none" />
                  <div className="w-10 h-10 bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-black text-lg uppercase tracking-tight mb-2">{v.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{v.text}</p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Story section */}
        <div className="bg-card border-y border-border">
          <div className="max-w-6xl mx-auto px-4 py-16">
            <div className="max-w-2xl mx-auto text-center">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">Náš příběh</span>
              <h2 className="font-black text-3xl uppercase mt-2 mb-6 text-balance">Od vášně k profesi</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Vše začalo jednou dlouhou cyklojízdou přes Šumavu. Tehdy jsme si uvědomili, jak málo existuje výletů, které jsou skutečně autorské — bez davů, bez spěchu a bez povrchního „odškrtávání“ míst.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Rozhodli jsme se to změnit. Začali jsme navrhovat vlastní trasy, testovat je na vlastní kůži a postupně budovat komunitu cestovatelů, kteří chtějí víc než jen pohlednice.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Dnes nabízíme několik typů tras a výletů po celé Evropě. Naše základna je v Čechách, zázemí máme na Kypru, ale doma jsme všude tam, kde vedou pěkné cesty a jsou silné zážitky.
              </p>
            </div>
          </div>
        </div>

        {/* Address */}
        <div className="max-w-6xl mx-auto px-4 py-16">
          <div className="bg-card border border-border p-8 max-w-lg mx-auto text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 border border-primary/10 rotate-45 translate-x-1/2 -translate-y-1/2 pointer-events-none" />
            <MapPin className="w-6 h-6 text-primary mx-auto mb-3" />
            <h3 className="font-black text-lg uppercase tracking-tight mb-4">Firemní sídlo</h3>
            <p className="text-muted-foreground text-sm leading-loose">
              <strong className="text-foreground">K.C. NTOMATA LIMITED</strong><br />
              Stylianou Lena, 24 Christiana Court,<br />
              Flat/Office 202, Strovolos,<br />
              2019 Nicosia, Cyprus
            </p>
            <Link
              href="/kontakt"
              className="inline-block mt-6 px-6 py-2.5 bg-primary text-primary-foreground font-bold text-xs uppercase tracking-widest hover:opacity-90 transition-opacity"
            >
              Kontaktovat nás
            </Link>
          </div>
        </div>
      </main>
      <Footer />
      <CookieBanner />
    </>
  )
}

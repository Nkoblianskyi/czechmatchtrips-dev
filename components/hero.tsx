import Image from 'next/image'
import Link from 'next/link'
import { ArrowDown, Zap } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="Česká krajina při západu slunce"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      {/* Abstract geometric accent */}
      <div className="absolute top-1/3 right-0 w-64 h-64 md:w-96 md:h-96 opacity-10 pointer-events-none">
        <div
          className="w-full h-full border-2 border-primary rotate-45 translate-x-1/3"
          style={{ borderColor: 'var(--brand-orange)' }}
        />
      </div>
      <div className="absolute top-1/2 right-24 w-32 h-32 opacity-5 pointer-events-none">
        <div className="w-full h-full bg-primary rotate-12" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 pt-20 pb-16">
        <div className="max-w-xl">
          {/* Eyebrow */}
          <div className="flex items-center gap-2 mb-5">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">
              Autorské sportovní zájezdy
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-black text-5xl md:text-7xl leading-[0.9] text-balance mb-6 uppercase">
            Žij<br />
            <span className="text-primary">Aktivně.</span><br />
            Cestuj<br />
            Daleko.
          </h1>

          {/* Subline */}
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8 max-w-md">
            Cykloturistika, mototury, maratony, horská turistika a kanoistika — v Česku i napříč Evropou. Bez kompromisů.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3">
            <Link
              href="/zájezdy"
              className="px-7 py-3.5 bg-primary text-primary-foreground font-bold uppercase tracking-wider text-sm hover:opacity-90 transition-opacity"
            >
              Prozkoumat zájezdy
            </Link>
            <Link
              href="/o-nas"
              className="px-7 py-3.5 border border-border text-foreground font-semibold uppercase tracking-wider text-sm hover:border-primary/50 transition-colors"
            >
              O nás
            </Link>
          </div>

          {/* Stats strip */}
          <div className="flex gap-8 mt-10 pt-8 border-t border-border/50">
            {[
              { value: '6+', label: 'Kategorie' },
              { value: '200+', label: 'Spokojených cestovatelů' },
              { value: 'CZ & EU', label: 'Destinace' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-black text-2xl text-primary">{stat.value}</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-50">
        <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Scroll</span>
        <ArrowDown className="w-4 h-4 text-muted-foreground animate-bounce" />
      </div>
    </section>
  )
}

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { tours } from '@/lib/tours-data'
import TourCard from './tour-card'

export default function ToursPreview() {
  const featured = tours.filter((t) => t.isFeatured).slice(0, 3)

  return (
    <section className="py-20 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">Zájezdy</span>
            <h2 className="font-black text-4xl md:text-5xl mt-2 uppercase leading-tight text-balance">
              Vybrané<br />
              <span className="text-primary">expedice</span>
            </h2>
          </div>
          <Link
            href="/zájezdy"
            className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-primary hover:opacity-80 transition-opacity whitespace-nowrap"
          >
            Všechny zájezdy <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {featured.map((tour) => (
            <TourCard key={tour.id} tour={tour} variant="featured" />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <Link
            href="/zájezdy"
            className="inline-flex items-center gap-2 px-8 py-4 border border-border text-foreground font-bold uppercase tracking-wider text-sm hover:border-primary/50 hover:text-primary transition-colors"
          >
            Zobrazit celý katalog <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

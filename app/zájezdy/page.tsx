'use client'

import { useState, useMemo } from 'react'
import { SlidersHorizontal, Grid3X3, List, X } from 'lucide-react'
import { tours, CATEGORIES, LOCATIONS, type TourCategory } from '@/lib/tours-data'
import TourCard from '@/components/tour-card'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import CookieBanner from '@/components/cookie-banner'

const DIFFICULTIES = [
  { value: 'all', label: 'Vše' },
  { value: 'Lehká', label: 'Lehká' },
  { value: 'Střední', label: 'Střední' },
  { value: 'Náročná', label: 'Náročná' },
  { value: 'Extrémní', label: 'Extrémní' },
]

export default function CatalogPage() {
  const [category, setCategory] = useState('all')
  const [location, setLocation] = useState('all')
  const [difficulty, setDifficulty] = useState('all')
  const [view, setView] = useState<'grid' | 'list'>('grid')
  const [filtersOpen, setFiltersOpen] = useState(false)

  const filtered = useMemo(() => {
    return tours.filter((t) => {
      if (category !== 'all' && t.category !== category) return false
      if (location === 'cz' && t.isEurope) return false
      if (location === 'europe' && !t.isEurope) return false
      if (difficulty !== 'all' && t.difficulty !== difficulty) return false
      return true
    })
  }, [category, location, difficulty])

  const activeFiltersCount = [
    category !== 'all',
    location !== 'all',
    difficulty !== 'all',
  ].filter(Boolean).length

  const clearAll = () => {
    setCategory('all')
    setLocation('all')
    setDifficulty('all')
  }

  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Page header */}
        <div className="relative bg-card border-b border-border py-16 overflow-hidden">
          {/* Abstract BG */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-64 h-64 border border-primary/10 rotate-45 translate-x-1/3 -translate-y-1/3" />
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-primary/5" />
          </div>
          <div className="max-w-6xl mx-auto px-4 relative z-10">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">Katalog</span>
            <h1 className="font-black text-5xl md:text-6xl mt-2 uppercase leading-tight text-balance">
              Všechny<br />
              <span className="text-primary">zájezdy</span>
            </h1>
            <p className="text-muted-foreground mt-3 max-w-lg">
              {tours.length} autorských výletů čeká na vás. Filtrujte podle kategorie, destinace nebo obtížnosti.
            </p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 py-10">
          {/* Filter bar */}
          <div className="flex flex-col gap-4 mb-8">
            {/* Top controls */}
            <div className="flex items-center justify-between gap-3">
              <button
                onClick={() => setFiltersOpen(!filtersOpen)}
                className="flex items-center gap-2 px-4 py-2 border border-border text-sm font-semibold hover:border-primary/50 transition-colors relative"
              >
                <SlidersHorizontal className="w-4 h-4" />
                Filtrovat
                {activeFiltersCount > 0 && (
                  <span className="absolute -top-2 -right-2 w-5 h-5 bg-primary text-primary-foreground text-[10px] font-black flex items-center justify-center rounded-full">
                    {activeFiltersCount}
                  </span>
                )}
              </button>

              <div className="flex items-center gap-2 ml-auto">
                <span className="text-xs text-muted-foreground hidden sm:block">
                  {filtered.length} výsledků
                </span>
                <button
                  onClick={() => setView('grid')}
                  className={`p-2 ${view === 'grid' ? 'text-primary bg-primary/10' : 'text-muted-foreground hover:text-foreground'}`}
                  aria-label="Mřížka"
                >
                  <Grid3X3 className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setView('list')}
                  className={`p-2 ${view === 'list' ? 'text-primary bg-primary/10' : 'text-muted-foreground hover:text-foreground'}`}
                  aria-label="Seznam"
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Expanded filters */}
            {filtersOpen && (
              <div className="bg-card border border-border p-5 space-y-5">
                {/* Category */}
                <div>
                  <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2 block">Kategorie</label>
                  <div className="flex flex-wrap gap-2">
                    {CATEGORIES.map((c) => (
                      <button
                        key={c.value}
                        onClick={() => setCategory(c.value)}
                        className={`px-3 py-1.5 text-xs font-semibold uppercase tracking-wider border transition-colors ${
                          category === c.value
                            ? 'bg-primary border-primary text-primary-foreground'
                            : 'border-border text-muted-foreground hover:border-primary/50 hover:text-foreground'
                        }`}
                      >
                        {c.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Location */}
                <div>
                  <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2 block">Destinace</label>
                  <div className="flex flex-wrap gap-2">
                    {LOCATIONS.map((l) => (
                      <button
                        key={l.value}
                        onClick={() => setLocation(l.value)}
                        className={`px-3 py-1.5 text-xs font-semibold uppercase tracking-wider border transition-colors ${
                          location === l.value
                            ? 'bg-primary border-primary text-primary-foreground'
                            : 'border-border text-muted-foreground hover:border-primary/50 hover:text-foreground'
                        }`}
                      >
                        {l.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Difficulty */}
                <div>
                  <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2 block">Obtížnost</label>
                  <div className="flex flex-wrap gap-2">
                    {DIFFICULTIES.map((d) => (
                      <button
                        key={d.value}
                        onClick={() => setDifficulty(d.value)}
                        className={`px-3 py-1.5 text-xs font-semibold uppercase tracking-wider border transition-colors ${
                          difficulty === d.value
                            ? 'bg-primary border-primary text-primary-foreground'
                            : 'border-border text-muted-foreground hover:border-primary/50 hover:text-foreground'
                        }`}
                      >
                        {d.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Clear */}
                {activeFiltersCount > 0 && (
                  <button
                    onClick={clearAll}
                    className="flex items-center gap-1.5 text-xs text-primary hover:opacity-80 transition-opacity font-semibold"
                  >
                    <X className="w-3 h-3" /> Zrušit filtry
                  </button>
                )}
              </div>
            )}

            {/* Active filter chips */}
            {activeFiltersCount > 0 && !filtersOpen && (
              <div className="flex flex-wrap gap-2">
                {category !== 'all' && (
                  <button
                    onClick={() => setCategory('all')}
                    className="flex items-center gap-1.5 px-3 py-1 bg-primary/10 text-primary text-xs font-semibold border border-primary/30"
                  >
                    {CATEGORIES.find((c) => c.value === category)?.label} <X className="w-3 h-3" />
                  </button>
                )}
                {location !== 'all' && (
                  <button
                    onClick={() => setLocation('all')}
                    className="flex items-center gap-1.5 px-3 py-1 bg-primary/10 text-primary text-xs font-semibold border border-primary/30"
                  >
                    {LOCATIONS.find((l) => l.value === location)?.label} <X className="w-3 h-3" />
                  </button>
                )}
                {difficulty !== 'all' && (
                  <button
                    onClick={() => setDifficulty('all')}
                    className="flex items-center gap-1.5 px-3 py-1 bg-primary/10 text-primary text-xs font-semibold border border-primary/30"
                  >
                    {difficulty} <X className="w-3 h-3" />
                  </button>
                )}
              </div>
            )}
          </div>

          {/* Results */}
          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-muted-foreground text-lg font-semibold">Žádné zájezdy neodpovídají filtru.</p>
              <button onClick={clearAll} className="mt-4 text-primary text-sm underline">
                Zrušit filtry
              </button>
            </div>
          ) : (
            <div
              className={
                view === 'grid'
                  ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5'
                  : 'flex flex-col gap-4'
              }
            >
              {filtered.map((tour) => (
                <TourCard key={tour.id} tour={tour} variant="featured" />
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
      <CookieBanner />
    </>
  )
}

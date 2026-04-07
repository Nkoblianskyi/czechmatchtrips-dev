'use client'

import { notFound, useParams } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { tours, getCategoryColor } from '@/lib/tours-data'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import CookieBanner from '@/components/cookie-banner'
import {
  Calendar,
  MapPin,
  Clock,
  Users,
  Gauge,
  Route,
  ArrowLeft,
  CheckCircle2,
  XCircle,
  ChevronRight,
  Send,
  X,
} from 'lucide-react'

export default function TourDetailPage() {
  const params = useParams()
  const slug = params?.slug as string
  const tour = tours.find((t) => t.slug === slug)
  if (!tour) notFound()

  const color = getCategoryColor(tour.category)

  const startFmt = new Date(tour.startDate).toLocaleDateString('cs-CZ', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
  const endFmt = new Date(tour.endDate).toLocaleDateString('cs-CZ', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  const related = tours.filter((t) => t.id !== tour.id && t.category === tour.category).slice(0, 2)

  // Contact form state
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)

  const validate = () => {
    const e: Record<string, string> = {}
    if (!form.name.trim()) e.name = 'Zadejte své jméno.'
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = 'Zadejte platný e-mail.'
    if (!form.message.trim()) e.message = 'Napište zprávu.'
    return e
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const e2 = validate()
    if (Object.keys(e2).length) { setErrors(e2); return }
    setSending(true)
    setTimeout(() => {
      setSending(false)
      setSubmitted(true)
      setForm({ name: '', email: '', phone: '', message: '' })
      setErrors({})
    }, 900)
  }

  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Hero image */}
        <div className="relative h-[55vw] max-h-[500px] min-h-[260px] overflow-hidden">
          <Image
            src={tour.image}
            alt={tour.title}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/60 to-transparent" />

          <div
            className="absolute top-5 left-4 md:left-8 px-3 py-1.5 text-xs font-black uppercase tracking-widest"
            style={{ backgroundColor: color, color: '#0d0d1a' }}
          >
            {tour.categoryLabel}
          </div>

          <Link
            href="/zájezdy"
            className="absolute top-5 right-4 md:right-8 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-foreground/80 hover:text-primary transition-colors bg-background/40 backdrop-blur-sm px-3 py-1.5"
          >
            <ArrowLeft className="w-3 h-3" /> Zpět na katalog
          </Link>

          <div
            className="absolute bottom-0 right-0 w-40 h-40 md:w-64 md:h-64 border-2 rotate-45 translate-x-1/2 translate-y-1/2 pointer-events-none"
            style={{ borderColor: `${color}30` }}
          />
        </div>

        {/* Page body */}
        <div className="max-w-6xl mx-auto px-4 py-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Main content */}
            <div className="lg:col-span-2 space-y-10">
              {/* Title block */}
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color }}>
                    {tour.country}
                  </span>
                  <span className="text-border">·</span>
                  <span className="text-xs text-muted-foreground uppercase tracking-wider">{tour.difficulty}</span>
                </div>
                <h1 className="font-black text-4xl md:text-5xl leading-tight uppercase text-balance mb-3">
                  {tour.title}
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed">{tour.subtitle}</p>
              </div>

              {/* Quick stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { icon: Clock, label: 'Délka', value: tour.duration },
                  { icon: Route, label: 'Trasa', value: tour.distance },
                  { icon: Gauge, label: 'Obtížnost', value: tour.difficulty },
                  { icon: Users, label: 'Max. osob', value: String(tour.maxParticipants) },
                ].map(({ icon: Icon, label, value }) => (
                  <div key={label} className="bg-card border border-border p-3">
                    <div className="flex items-center gap-1.5 mb-1">
                      <Icon className="w-3.5 h-3.5" style={{ color }} />
                      <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">{label}</span>
                    </div>
                    <div className="font-black text-sm text-foreground">{value}</div>
                  </div>
                ))}
              </div>

              {/* Description */}
              <div>
                <h2 className="font-black text-xl uppercase tracking-tight mb-4" style={{ color }}>O zájezdu</h2>
                <p className="text-muted-foreground leading-relaxed text-base">{tour.longDescription}</p>
              </div>

              {/* Highlights */}
              <div>
                <h2 className="font-black text-xl uppercase tracking-tight mb-4">Hlavní zážitky</h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {tour.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2.5 bg-card border border-border p-3">
                      <span className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ backgroundColor: color }} />
                      <span className="text-sm text-foreground leading-relaxed">{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Itinerary */}
              <div>
                <h2 className="font-black text-xl uppercase tracking-tight mb-4">Itinerář</h2>
                <div className="space-y-0 border-l-2" style={{ borderColor: `${color}40` }}>
                  {tour.itinerary.map((day) => (
                    <div key={day.day} className="relative pl-6 pb-6 last:pb-0">
                      <div
                        className="absolute left-[-5px] top-0 w-2.5 h-2.5 rounded-full border-2 border-background"
                        style={{ backgroundColor: color }}
                      />
                      <div className="text-xs font-black uppercase tracking-widest mb-0.5" style={{ color }}>Den {day.day}</div>
                      <div className="font-bold text-foreground text-sm mb-1">{day.title}</div>
                      <div className="text-xs text-muted-foreground leading-relaxed">{day.description}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Included / Not included */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-black text-base uppercase tracking-tight mb-3 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                    V ceně zahrnuto
                  </h3>
                  <ul className="space-y-2">
                    {tour.included.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="w-1 h-1 rounded-full bg-green-500 mt-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-black text-base uppercase tracking-tight mb-3 flex items-center gap-2">
                    <XCircle className="w-4 h-4 text-destructive" />
                    Není v ceně
                  </h3>
                  <ul className="space-y-2">
                    {tour.notIncluded.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="w-1 h-1 rounded-full bg-destructive mt-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Sidebar — sticky contact form */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <div className="bg-card border border-border overflow-hidden">
                  {/* Header */}
                  <div className="p-5 border-b border-border" style={{ background: `${color}15` }}>
                    <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">Máte zájem?</div>
                    <div className="font-black text-xl text-foreground leading-tight">Napište nám</div>
                    <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                      Zašleme vám veškeré informace a přibližnou cenu na míru.
                    </p>
                  </div>

                  {/* Tour info strip */}
                  <div className="px-5 py-3 border-b border-border space-y-2">
                    <div className="flex items-start gap-2 text-xs">
                      <Calendar className="w-3.5 h-3.5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="text-muted-foreground">Termín: </span>
                        <span className="font-semibold text-foreground">{startFmt} — {endFmt}</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-2 text-xs">
                      <MapPin className="w-3.5 h-3.5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="text-muted-foreground">Místo: </span>
                        <span className="font-semibold text-foreground">{tour.location}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-xs">
                      <Users className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">Max. </span>
                      <span className="font-semibold text-foreground">{tour.maxParticipants} účastníků</span>
                    </div>
                  </div>

                  {/* Form */}
                  <form onSubmit={handleSubmit} className="p-5 space-y-3" noValidate>
                    {/* Hidden tour name for reference */}
                    <input type="hidden" name="tour" value={tour.title} />

                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-1">
                        Jméno a příjmení *
                      </label>
                      <input
                        type="text"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Jana Novotná"
                        className={`w-full bg-background border px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none focus:border-primary transition-colors ${errors.name ? 'border-destructive' : 'border-border'}`}
                      />
                      {errors.name && <p className="text-[10px] text-destructive mt-1">{errors.name}</p>}
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-1">
                        E-mail *
                      </label>
                      <input
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="jana@example.cz"
                        className={`w-full bg-background border px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none focus:border-primary transition-colors ${errors.email ? 'border-destructive' : 'border-border'}`}
                      />
                      {errors.email && <p className="text-[10px] text-destructive mt-1">{errors.email}</p>}
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-1">
                        Zpráva *
                      </label>
                      <textarea
                        rows={3}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        placeholder="Mám zájem o tento zájezd, rád/a bych..."
                        className={`w-full bg-background border px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none focus:border-primary transition-colors resize-none ${errors.message ? 'border-destructive' : 'border-border'}`}
                      />
                      {errors.message && <p className="text-[10px] text-destructive mt-1">{errors.message}</p>}
                    </div>

                    <button
                      type="submit"
                      disabled={sending}
                      className="w-full py-3 font-black text-xs uppercase tracking-widest text-primary-foreground flex items-center justify-center gap-2 transition-opacity hover:opacity-90 disabled:opacity-60"
                      style={{ backgroundColor: color }}
                    >
                      {sending ? (
                        <span className="inline-block w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                      ) : (
                        <>
                          <Send className="w-3.5 h-3.5" />
                          Odeslat dotaz
                        </>
                      )}
                    </button>
                  </form>
                </div>

                <p className="text-[11px] text-muted-foreground text-center mt-3 leading-relaxed">
                  Odpovíme do 24 hodin. Bez závazků.
                </p>
              </div>
            </div>
          </div>

          {/* Related tours */}
          {related.length > 0 && (
            <div className="mt-20">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-black text-2xl uppercase tracking-tight">Podobné zájezdy</h2>
                <Link
                  href="/zájezdy"
                  className="flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-primary hover:opacity-80 transition-opacity"
                >
                  Vše <ChevronRight className="w-3 h-3" />
                </Link>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {related.map((t) => {
                  const rc = getCategoryColor(t.category)
                  const rDate = new Date(t.startDate).toLocaleDateString('cs-CZ', {
                    day: 'numeric',
                    month: 'short',
                    year: 'numeric',
                  })
                  return (
                    <Link
                      key={t.id}
                      href={`/zájezdy/${t.slug}`}
                      className="tour-card group flex gap-4 bg-card border border-border p-4 hover:border-primary/50 transition-colors"
                    >
                      <div className="relative w-24 h-20 flex-shrink-0 overflow-hidden">
                        <Image
                          src={t.image}
                          alt={t.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                          sizes="96px"
                        />
                      </div>
                      <div className="min-w-0">
                        <div className="text-[10px] font-bold uppercase tracking-widest mb-0.5" style={{ color: rc }}>
                          {t.categoryLabel}
                        </div>
                        <div className="font-black text-sm leading-tight truncate">{t.title}</div>
                        <div className="text-xs text-muted-foreground mt-1">{rDate}</div>
                        <div className="text-xs text-muted-foreground mt-0.5">{t.duration}</div>
                      </div>
                    </Link>
                  )
                })}
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
      <CookieBanner />

      {/* Success popup */}
      {submitted && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm">
          <div className="relative bg-card border border-border max-w-sm w-full p-8 text-center overflow-hidden">
            {/* Decorative corner */}
            <div
              className="absolute top-0 right-0 w-20 h-20 border-l-2 border-b-2 translate-x-1/2 -translate-y-1/2 rotate-45 pointer-events-none"
              style={{ borderColor: color }}
            />
            <button
              onClick={() => setSubmitted(false)}
              className="absolute top-3 right-3 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Zavřít"
            >
              <X className="w-4 h-4" />
            </button>
            <div
              className="w-14 h-14 mx-auto mb-4 flex items-center justify-center"
              style={{ backgroundColor: `${color}20` }}
            >
              <CheckCircle2 className="w-7 h-7" style={{ color }} />
            </div>
            <h3 className="font-black text-xl uppercase tracking-tight mb-2">Zpráva odeslána!</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Děkujeme za váš zájem o zájezd <strong className="text-foreground">{tour.title}</strong>.
              Ozveme se vám do 24 hodin s podrobnými informacemi.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="px-6 py-2.5 font-black text-xs uppercase tracking-widest text-primary-foreground"
              style={{ backgroundColor: color }}
            >
              Zavřít
            </button>
          </div>
        </div>
      )}
    </>
  )
}

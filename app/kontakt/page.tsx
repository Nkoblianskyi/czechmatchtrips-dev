'use client'

import { useState } from 'react'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import CookieBanner from '@/components/cookie-banner'
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, X } from 'lucide-react'

const contactInfo = [
  {
    icon: Mail,
    label: 'E-mail',
    value: 'info@czechmatchtrips.com',
    href: 'mailto:info@czechmatchtrips.com',
  },
  {
    icon: MapPin,
    label: 'Adresa',
    value: 'K.C. NTOMATA LIMITED\nStylianou Lena, 24 Christiana Court,\nFlat/Office 202, Strovolos,\n2019 Nicosia, Cyprus',
    href: null,
  },
  {
    icon: Clock,
    label: 'Pracovní doba',
    value: 'Po–Pá: 9:00–18:00\nSo: 10:00–14:00',
    href: null,
  },
]

export default function ContactPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    tour: '',
    message: '',
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)

  const validate = () => {
    const e: Record<string, string> = {}
    if (!form.name.trim()) e.name = 'Zadejte jméno'
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = 'Zadejte platný e-mail'
    if (!form.message.trim()) e.message = 'Napište zprávu'
    return e
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    if (errors[e.target.name]) setErrors((prev) => ({ ...prev, [e.target.name]: '' }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) { setErrors(errs); return }
    setSending(true)
    await new Promise((r) => setTimeout(r, 1200))
    setSending(false)
    setSent(true)
  }

  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Page header */}
        <div className="relative bg-card border-b border-border py-16 overflow-hidden">
          <div className="absolute top-0 right-0 w-72 h-72 border border-primary/10 rotate-45 translate-x-1/3 -translate-y-1/3 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary/5 pointer-events-none" />
          <div className="max-w-6xl mx-auto px-4 relative z-10">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">Kontakt</span>
            <h1 className="font-black text-5xl md:text-6xl mt-2 uppercase leading-tight text-balance">
              Napište<br />
              <span className="text-primary">nám</span>
            </h1>
            <p className="text-muted-foreground mt-3 max-w-md">
              Máte otázku k zájezdu, chcete rezervovat místo nebo se jen poradit? Ozveme se do 24 hodin.
            </p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 py-14">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* Contact info */}
            <div className="lg:col-span-2 space-y-4">
              {contactInfo.map((item) => {
                const Icon = item.icon
                return (
                  <div key={item.label} className="bg-card border border-border p-5 flex gap-4 group hover:border-primary/40 transition-colors">
                    <div className="w-10 h-10 bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-1">
                        {item.label}
                      </div>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-sm font-semibold text-foreground hover:text-primary transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-sm text-foreground whitespace-pre-line leading-relaxed">
                          {item.value}
                        </p>
                      )}
                    </div>
                  </div>
                )
              })}

              {/* Abstract accent block */}
              <div className="bg-primary p-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 border-2 border-primary-foreground/10 rotate-45 translate-x-1/2 -translate-y-1/2 pointer-events-none" />
                <p className="font-black text-xl text-primary-foreground uppercase leading-tight text-balance relative z-10">
                  Žijte dobrodružství naplno — ozvěte se dnes.
                </p>
              </div>
            </div>

            {/* Contact form */}
            <div className="lg:col-span-3">
              <div className="bg-card border border-border p-6 md:p-8">
                <h2 className="font-black text-xl uppercase tracking-tight mb-6">Kontaktní formulář</h2>
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  {/* Name + email row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1.5">
                        Jméno a příjmení <span className="text-primary">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Jana Novák"
                        className={`w-full bg-input border px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors ${errors.name ? 'border-destructive' : 'border-border'}`}
                      />
                      {errors.name && <p className="text-xs text-destructive mt-1">{errors.name}</p>}
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1.5">
                        E-mail <span className="text-primary">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="jana@example.com"
                        className={`w-full bg-input border px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors ${errors.email ? 'border-destructive' : 'border-border'}`}
                      />
                      {errors.email && <p className="text-xs text-destructive mt-1">{errors.email}</p>}
                    </div>
                  </div>

                  {/* Phone + tour */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1.5">
                        Telefon
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        autoComplete="tel"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+420 ..."
                        className="w-full bg-input border border-border px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="tour" className="block text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1.5">
                        Zájem o zájezd
                      </label>
                      <select
                        id="tour"
                        name="tour"
                        value={form.tour}
                        onChange={handleChange}
                        className="w-full bg-input border border-border px-4 py-2.5 text-sm text-foreground focus:outline-none focus:border-primary transition-colors appearance-none"
                      >
                        <option value="">-- Vybrat zájezd --</option>
                        <option value="Šumavská cyklostezka">Šumavská cyklostezka</option>
                        <option value="Alpská mototura">Alpská mototura</option>
                        <option value="Středočeský půlmaraton">Středočeský půlmaraton</option>
                        <option value="Krkonošský hřeben">Krkonošský hřeben</option>
                        <option value="Vltavský proud">Vltavský proud</option>
                        <option value="Pyrenejský trail">Pyrenejský trail</option>
                        <option value="Obecný dotaz">Obecný dotaz</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1.5">
                      Zpráva <span className="text-primary">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Vaše otázka nebo poptávka..."
                      className={`w-full bg-input border px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none ${errors.message ? 'border-destructive' : 'border-border'}`}
                    />
                    {errors.message && <p className="text-xs text-destructive mt-1">{errors.message}</p>}
                  </div>

                  {/* GDPR note */}
                  <p className="text-[11px] text-muted-foreground leading-relaxed">
                    Odesláním souhlasíte se zpracováním osobních údajů v souladu s naší{' '}
                    <a href="/soukromi" className="text-primary hover:underline">Ochranou soukromí</a>.
                  </p>

                  <button
                    type="submit"
                    disabled={sending}
                    className="flex items-center justify-center gap-2 w-full py-3.5 bg-primary text-primary-foreground font-black text-sm uppercase tracking-widest hover:opacity-90 transition-opacity disabled:opacity-60"
                  >
                    {sending ? (
                      <>
                        <span className="w-4 h-4 border-2 border-primary-foreground/40 border-t-primary-foreground rounded-full animate-spin" />
                        Odesílám...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Odeslat zprávu
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <CookieBanner />

      {/* Success popup */}
      {sent && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background/80 backdrop-blur-sm px-4"
          role="dialog"
          aria-modal="true"
          aria-label="Zpráva odeslána"
          onClick={() => setSent(false)}
        >
          <div
            className="relative bg-card border border-border p-8 max-w-sm w-full text-center overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* abstract corner */}
            <div className="absolute top-0 right-0 w-20 h-20 border border-primary/20 rotate-45 translate-x-1/2 -translate-y-1/2 pointer-events-none" />

            <button
              onClick={() => setSent(false)}
              className="absolute top-3 right-3 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Zavřít"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="w-14 h-14 bg-primary/10 flex items-center justify-center mx-auto mb-5">
              <CheckCircle2 className="w-7 h-7 text-primary" />
            </div>

            <h3 className="font-black text-2xl uppercase tracking-tight mb-2">
              Odesláno!
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Vaše zpráva byla úspěšně odeslána. Ozveme se vám nejpozději do 24 hodin.
            </p>
            <button
              onClick={() => setSent(false)}
              className="w-full py-3 bg-primary text-primary-foreground font-black text-xs uppercase tracking-widest hover:opacity-90 transition-opacity"
            >
              Zavřít
            </button>
          </div>
        </div>
      )}
    </>
  )
}

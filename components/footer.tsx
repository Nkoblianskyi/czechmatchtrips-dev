import Link from 'next/link'
import { Mail, Phone, MapPin } from 'lucide-react'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border mt-24">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Image src="/favicon.ico" alt="Logo" width={32} height={32} />
              <span className="font-black text-lg tracking-tight">
                Czech<span className="text-primary">Match</span>Trips
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Autorské sportovní zájezdy po Česku a celé Evropě. Žijte dobrodružství naplno.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-bold uppercase tracking-widest text-xs text-muted-foreground mb-4">Navigace</h4>
            <ul className="space-y-3">
              {[
                { href: '/', label: 'Domů' },
                { href: '/zájezdy', label: 'Všechny zájezdy' },
                { href: '/o-nas', label: 'O nás' },
                { href: '/kontakt', label: 'Kontakt' },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-bold uppercase tracking-widest text-xs text-muted-foreground mb-4">Kategorie</h4>
            <ul className="space-y-3">
              {['Cykloturistika', 'Mototuristika', 'Maraton', 'Horská turistika', 'Kanoistika', 'Trail Running'].map((cat) => (
                <li key={cat}>
                  <Link href={`/zájezdy?kategorie=${encodeURIComponent(cat)}`} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {cat}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Legal */}
          <div>
            <h4 className="font-bold uppercase tracking-widest text-xs text-muted-foreground mb-4">Kontakt</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
                <span>Stylianou Lena 24, Christiana Court, Flat 202, Strovolos, 2019 Nicosia, Cyprus</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <a href="mailto:info@czechmatchtrips.com" className="hover:text-foreground transition-colors">
                  info@czechmatchtrips.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <a href="tel:+420123456789" className="hover:text-foreground transition-colors">+420 123 456 789</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} K.C. NTOMATA LIMITED. Všechna práva vyhrazena.</p>
          <div className="flex gap-4">
            <Link href="/cookies" className="hover:text-foreground transition-colors">Zásady cookies</Link>
            <Link href="/soukromi" className="hover:text-foreground transition-colors">Ochrana soukromí</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

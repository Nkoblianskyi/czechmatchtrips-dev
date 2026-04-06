'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'

const navItems = [
  { href: '/', label: 'Domů' },
  { href: '/zájezdy', label: 'Zájezdy' },
  { href: '/o-nas', label: 'O nás' },
  { href: '/kontakt', label: 'Kontakt' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => setOpen(false), [pathname])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || open
            ? 'bg-background/95 backdrop-blur-md border-b border-border'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <Image src="/favicon.ico" alt="Logo" width={32} height={32} />
            <span className="font-black text-lg tracking-tight text-foreground">
              Czech<span className="text-primary">Match</span>Trips
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-semibold uppercase tracking-widest transition-colors duration-200 ${
                  pathname === item.href
                    ? 'text-primary'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/zájezdy"
              className="ml-2 px-5 py-2 bg-primary text-primary-foreground text-sm font-bold uppercase tracking-wider hover:opacity-90 transition-opacity"
            >
              Rezervovat
            </Link>
          </nav>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 text-foreground"
            aria-label={open ? 'Zavřít menu' : 'Otevřít menu'}
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile dropdown */}
        {open && (
          <div className="md:hidden bg-background border-t border-border px-4 py-6 flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-base font-semibold uppercase tracking-widest py-2 border-b border-border/50 ${
                  pathname === item.href ? 'text-primary' : 'text-foreground'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/zájezdy"
              className="mt-2 px-5 py-3 bg-primary text-primary-foreground text-sm font-bold uppercase tracking-wider text-center"
            >
              Rezervovat zájezd
            </Link>
          </div>
        )}
      </header>
    </>
  )
}

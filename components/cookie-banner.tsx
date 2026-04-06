'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { X, Cookie } from 'lucide-react'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const accepted = localStorage.getItem('cmt_cookies')
    if (!accepted) {
      const timer = setTimeout(() => setVisible(true), 1500)
      return () => clearTimeout(timer)
    }
  }, [])

  const accept = () => {
    localStorage.setItem('cmt_cookies', 'accepted')
    setVisible(false)
  }

  const reject = () => {
    localStorage.setItem('cmt_cookies', 'rejected')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] p-4 md:p-6">
      <div className="max-w-2xl mx-auto bg-card border border-border shadow-2xl p-5">
        <div className="flex items-start gap-4">
          <div className="flex-1 min-w-0">
            <h3 className="font-bold text-sm text-foreground mb-1">Soubory cookie</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Používáme cookies pro zlepšení vašeho zážitku na webu a analýzu návštěvnosti.{' '}
              <Link href="/cookies" className="text-primary hover:underline">Více informací</Link>.
            </p>
            <div className="flex gap-3 mt-3">
              <button
                onClick={accept}
                className="px-4 py-1.5 bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider hover:opacity-90 transition-opacity"
              >
                Přijmout
              </button>
              <button
                onClick={reject}
                className="px-4 py-1.5 bg-secondary text-secondary-foreground text-xs font-semibold uppercase tracking-wider hover:opacity-80 transition-opacity"
              >
                Odmítnout
              </button>
            </div>
          </div>
          <button onClick={reject} className="text-muted-foreground hover:text-foreground transition-colors flex-shrink-0" aria-label="Zavřít">
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  )
}

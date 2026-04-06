import type { Metadata } from 'next'
import { Barlow, Space_Mono } from 'next/font/google'
import './globals.css'

const barlow = Barlow({
  subsets: ['latin', 'latin-ext'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-barlow',
  display: 'swap',
})

const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-space-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'CzechMatchTrips — Sportovní zájezdy po Česku i Evropě',
  description:
    'Autorské sportovní výlety — cykloturistika, mototury, maratony, horská turistika a kanoistika. Objevujte Česko a Evropu aktivně s CzechMatchTrips.',
  keywords: [
    'sportovní turistika',
    'cykloturistika',
    'mototury',
    'maraton',
    'horská turistika',
    'kanoistika',
    'Česká republika',
    'Evropa',
  ],
  authors: [{ name: 'CzechMatchTrips' }],
  creator: 'CzechMatchTrips',
  publisher: 'K.C. NTOMATA LIMITED',
  metadataBase: new URL('https://czechmatchtrips.com'),
  openGraph: {
    title: 'CzechMatchTrips — Sportovní zájezdy',
    description: 'Autorské sportovní výlety po Česku a Evropě',
    url: 'https://czechmatchtrips.com',
    siteName: 'CzechMatchTrips',
    locale: 'cs_CZ',
    type: 'website',
  },
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="cs" className={`${barlow.variable} ${spaceMono.variable}`}>
      <body className="font-sans antialiased bg-background text-foreground">
        {children}
      </body>
    </html>
  )
}

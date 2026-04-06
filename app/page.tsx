import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import Hero from '@/components/hero'
import AboutSection from '@/components/about-section'
import ToursPreview from '@/components/tours-preview'
import TipSection from '@/components/tip-section'
import FaqSection from '@/components/faq-section'
import CookieBanner from '@/components/cookie-banner'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />

        {/* Marquee divider */}
        <div className="overflow-hidden border-y border-border bg-primary py-3">
          <div className="marquee-track flex whitespace-nowrap">
            {Array.from({ length: 8 }).map((_, i) => (
              <span key={i} className="inline-flex items-center gap-4 mx-8 text-xs font-black uppercase tracking-widest text-primary-foreground">
                <span>Cykloturistika</span>
                <span className="w-1 h-1 bg-primary-foreground/50 rounded-full inline-block" />
                <span>Mototury</span>
                <span className="w-1 h-1 bg-primary-foreground/50 rounded-full inline-block" />
                <span>Maraton</span>
                <span className="w-1 h-1 bg-primary-foreground/50 rounded-full inline-block" />
                <span>Horská turistika</span>
                <span className="w-1 h-1 bg-primary-foreground/50 rounded-full inline-block" />
                <span>Kanoistika</span>
                <span className="w-1 h-1 bg-primary-foreground/50 rounded-full inline-block" />
                <span>Trail Running</span>
                <span className="w-1 h-1 bg-primary-foreground/50 rounded-full inline-block" />
              </span>
            ))}
          </div>
        </div>

        <AboutSection />
        <ToursPreview />
        <TipSection />
        <FaqSection />
      </main>
      <Footer />
      <CookieBanner />
    </>
  )
}

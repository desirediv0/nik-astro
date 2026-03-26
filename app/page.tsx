import type { Metadata } from 'next'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import AboutSection from '@/components/AboutSection'
import CTA from '@/components/CTA'
import Testimonial from '@/components/Testimonial'

export const metadata: Metadata = {
  title: {
    default: 'NIK ASTRO - Welcome',
    template: '%s | NIK ASTRO',
  },
  description: 'Welcome to NIK ASTRO. Explore astrology consultations, remedies, puja services, and spiritual guidance.',
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Services />
      <AboutSection />
      <Testimonial />
      <CTA />
    </main>
  )
}

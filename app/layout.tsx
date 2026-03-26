import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import { Cormorant_Garamond, DM_Sans } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-cormorant',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
})


export const metadata: Metadata = {
  title: 'NIK ASTRO - Astrology & Spiritual Guidance',
  description: 'Professional astrology consultation services by Nikhil (Jyotish Acharya). Kundali analysis, vastu consultation, pujas & remedies in Gurugram.',
  keywords: ['NIK ASTRO', 'astrology consultation', 'kundli analysis', 'Gurugram astrologer', 'puja remedies'],
  openGraph: {
    title: 'NIK ASTRO - Astrology & Spiritual Guidance',
    description: 'Consult with Nikhil Ji for astrology, remedies, and spiritual guidance.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${cormorant.variable} ${dmSans.variable} font-sans antialiased bg-white text-slate-900`}>
        <Header />
        {children}
        <Footer />
        <WhatsAppButton />
        <Analytics />
      </body>
    </html>
  )
}

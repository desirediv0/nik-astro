import type { Metadata } from 'next'
import Link from 'next/link'
import { FaGraduationCap, FaWhatsapp } from 'react-icons/fa'
import { GiStarShuriken } from 'react-icons/gi'

export const metadata: Metadata = {
  title: 'Education',
  description:
    'NIK ASTRO education offerings will be available soon. Stay connected for astrology learning programs and updates.',
}

export default function EducationPage() {
  return (
    <main className=" bg-white text-ink">
      <section className="relative overflow-hidden bg-gradient-to-br from-[#080608] via-[#12100a] to-[#1a1508] px-6 py-[88px]">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_55%_60%_at_75%_40%,rgba(184,134,11,0.12)_0%,transparent_70%)]" />
        <div className="relative mx-auto max-w-[900px] text-center">
          <div className="mb-5 flex items-center justify-center gap-2.5">
            <GiStarShuriken className="text-gold text-[13px]" />
            <span className="font-sans text-[11px] font-medium uppercase tracking-[3px] text-[#c9a84c]">
              NIK ASTRO
            </span>
          </div>

          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-[rgba(184,134,11,0.28)] bg-[rgba(255,255,255,0.04)]">
            <FaGraduationCap className="text-gold text-[26px]" />
          </div>

          <h1 className="mb-4 text-[40px] leading-[1.1] text-white md:text-[56px]">
            Education Page
            <span className="block italic text-[#c9a84c]">Coming Soon</span>
          </h1>

          <p className="mx-auto mb-8 max-w-[620px] text-[16px] leading-[1.8] text-[#a89060]">
            Astrology learning programs, classes, and guided education content are being prepared.
            This section will be live soon.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/" className="btn-secondary">
              Back to Home
            </Link>
            <a
              href="https://wa.me/918377844158"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
            >
              <FaWhatsapp className="text-[18px]" />
              Ask on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}

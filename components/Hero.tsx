import Link from 'next/link'
import { FaWhatsapp, FaChevronRight, FaStar } from 'react-icons/fa'
import { MdVerified } from 'react-icons/md'
import { GiStarShuriken } from 'react-icons/gi'
import Image from 'next/image'

const trustPills = [
  '20+ Years Practice',
  'Jyotish Acharya',
  'K.N. Rao Disciple',
  'YouTube Silver Play',
]

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#080608] via-[#12100a] to-[#1a1508] py-10  px-6 md:py-14">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_60%_40%,rgba(184,134,11,0.10)_0%,transparent_65%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(184,134,11,0.04)_1px,transparent_1px)] bg-[length:28px_28px] pointer-events-none" />

      <div className="relative max-w-[1100px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_400px] gap-12 md:gap-16 items-center">
          <div>
            <div className="flex items-center gap-2.5 mb-6">
              <GiStarShuriken className="text-gold text-[13px]" />
              <span className="font-sans text-[11px] text-[#c9a84c] tracking-[3px] uppercase font-medium">
                Jyotish Acharya · Gurugram
              </span>
            </div>

            <h1 className="font-serif text-[46px] sm:text-[56px] md:text-[62px] font-semibold text-white leading-[1.1] mb-6">
              Authentic
              <br />
              <span className="text-[#c9a84c] italic">Vedic Astrology</span>
              <br />
              <span className="text-[36px] sm:text-[42px] md:text-[48px]">Guidance</span>
            </h1>

            <p className="font-sans text-base leading-[1.8] text-muted-gold max-w-[480px] mb-9">
              Accurate predictions, personalized remedies, and deep astrological guidance by{' '}
              <strong className="text-[#c9a84c] font-medium">Jyotish Acharya Nikhil Ji</strong> —
              trained under Shri K.N. Rao at Bhartiya Vidya Bhawan.
            </p>

            <div className="flex flex-wrap gap-2.5 mb-10">
              {trustPills.map((t) => (
                <span
                  key={t}
                  className="inline-flex items-center gap-1.5 bg-[rgba(184,134,11,0.1)] border border-[rgba(184,134,11,0.25)] rounded-full px-3.5 py-[5px] font-sans text-xs text-[#c9a84c] font-medium"
                >
                  <MdVerified className="text-xs" />
                  {t}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-3.5">
              <a
                href="https://wa.me/918377844158"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-gradient-to-br from-wa-green to-[#1ab854] text-white px-7 py-3.5 rounded-full font-sans text-[15px] font-semibold shadow-wa hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(37,211,102,0.45)] transition-all duration-300"
              >
                <FaWhatsapp className="text-lg" />
                Book Consultation
              </a>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 border-[1.5px] border-[rgba(184,134,11,0.4)] text-[#c9a84c] px-6 py-[13px] rounded-full font-sans text-[15px] font-medium hover:bg-[rgba(184,134,11,0.08)] transition-all duration-300"
              >
                About Nikhil Ji
                <FaChevronRight className="text-[11px]" />
              </Link>
            </div>
          </div>

          <div className="relative hidden md:block">
            <div className="absolute -inset-4 rounded-[24px] bg-[radial-gradient(ellipse_at_center,rgba(184,134,11,0.12)_0%,transparent_70%)] pointer-events-none" />

            <Image src="/nikhil-ji.png" alt="Nikhil Ji" width={500} height={500} loading='eager' />
            {/* 
            <div className="absolute -bottom-4 -left-5 bg-cream rounded-[14px] px-[18px] py-[14px] border border-cream-border shadow-[0_8px_28px_rgba(0,0,0,0.12)]">
              <div className="flex items-center gap-2">
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((n) => (
                    <FaStar key={n} className="text-gold text-[11px]" />
                  ))}
                </div>
                <span className="font-sans text-[12.5px] font-semibold text-ink">4.9 Rating</span>
              </div>
              <p className="font-sans text-[11px] text-muted-gold mt-1">50000+ Consultations</p>
            </div> */}

            <div className="absolute top-4 -right-3 bg-gradient-to-br from-gold to-[#d4a017] rounded-xl px-3.5 py-2.5 shadow-[0_4px_18px_rgba(184,134,11,0.4)]">
              <p className="font-sans text-[11px] font-bold text-white uppercase tracking-[0.5px]">
                20+ Years
              </p>
              <p className="font-sans text-[10px] text-white/75 mt-0.5">Practice</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
import Image from 'next/image'
import Link from 'next/link'
import { FaCheckCircle, FaChevronRight } from 'react-icons/fa'
import { MdVerified } from 'react-icons/md'
import {
  GiStarShuriken, GiTriquetra, GiLotus,
  GiYinYang, GiCrystalBall, GiScrollUnfurled,
  GiShield, GiMeditation, GiSun, GiPrayer,
  GiSpiralHilt, GiMoon, GiFlame
} from 'react-icons/gi'

// ── 4 services using actual images from /public ──────────────────────────────
const mainServices = [
  {
    img: '/kundli-analysis.jpg',
    alt: 'Kundali Analysis',
    tag: 'Most Popular',
    title: 'Kundali Analysis',
    desc: 'Deep birth chart reading covering all life areas — career, health, relationships, and finances — with practical remedies tailored to your chart.',
    points: ['Full chart reading', 'Dasha & transit analysis', 'Personalized remedies'],
    href: '/consultation',
  },
  {
    img: '/kundali-making.jpg',
    alt: 'Kundali Making',
    tag: 'Foundational',
    title: 'Kundali Making',
    desc: 'Professionally prepared Kundali with complete planetary positions, dasha system, and transit insights — the foundation of all astrological guidance.',
    points: ['Accurate chart preparation', 'Dasha breakdown', 'Transit insights'],
    href: '/consultation',
  },
  {
    img: '/kundli-matching.jpg',
    alt: 'Kundali Matching',
    tag: 'Pre-Marriage',
    title: 'Kundali Matching',
    desc: 'Comprehensive compatibility analysis beyond basic Guna Milan — Nikhil Ji checks 10+ parameters for true compatibility between prospective couples.',
    points: ['10+ compatibility checks', 'Dosha identification', 'Life predictions'],
    href: '/consultation',
  },
  {
    img: '/vastu-consultation.jpg',
    alt: 'Astro Vastu Consultation',
    tag: 'Specialized',
    title: 'Astro Vastu',
    desc: 'Vastu analysis combined with your birth chart — the only way to truly determine if a property is beneficial and what remedies will actually work.',
    points: ['Chart-aligned Vastu', 'Property compatibility', 'Energized remedies'],
    href: '/consultation',
  },
]

// ── Additional services (no images) ─────────────────────────────────────────
const moreServices = [
  { icon: GiTriquetra, label: 'Telephonic Consultation', sub: '30-min session' },
  { icon: GiCrystalBall, label: 'Video Consultation', sub: 'Face-to-face' },
  { icon: GiLotus, label: 'Muhurat', sub: 'Auspicious timing' },
  { icon: GiShield, label: 'Tantra Removal', sub: 'Protection' },
  { icon: GiMeditation, label: 'Sadhna Programs', sub: 'Spiritual growth' },
  { icon: GiYinYang, label: 'Puja & Remedies', sub: 'Ritual solutions' },
]

// ── Pujas ────────────────────────────────────────────────────────────────────
const pujas = [
  { icon: GiTriquetra, name: 'Rudrabhishek', desc: 'Peace, spiritual growth & dosha removal' },
  { icon: GiSun, name: 'Grah Shanti', desc: 'Pacify malefic planetary influences' },
  { icon: GiMoon, name: 'Nakshatra Shanti', desc: 'Remove birth-star doshas' },
  { icon: GiSpiralHilt, name: 'Navgrah Puja', desc: 'Balance all 9 planetary energies' },
  { icon: GiFlame, name: 'Kaal Sarpa Puja', desc: 'Relief from fear & obstacles' },
  { icon: GiPrayer, name: 'Shani Grah Puja', desc: 'Remove delays, attract success' },
]

export default function Services() {
  return (
    <>
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1100px] mx-auto">
          <div className="text-center mb-[52px]">
            <p className="font-sans text-[11px] text-gold tracking-[3px] uppercase mb-3">
              What We Offer
            </p>
            <h2 className="font-serif text-[42px] font-semibold mb-0">Consultation Services</h2>
            <div className="w-[52px] h-[2px] bg-gradient-to-r from-gold to-gold-light mt-4 mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {mainServices.map((s, i) => (
              <div
                key={i}
                className="group bg-white rounded-[18px] overflow-hidden border border-cream-border hover:shadow-gold hover:-translate-y-1.5 transition-all duration-300"
              >
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={s.img}
                    alt={s.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[rgba(0,0,0,0.35)]" />
                  <span className="absolute top-3.5 right-3.5 inline-block bg-gradient-to-br from-gold-pale to-[#f7e6b2] text-subtle-gold text-[10px] font-medium px-3 py-1 rounded-full uppercase tracking-[1px] border border-gold-border font-sans">
                    {s.tag}
                  </span>
                </div>

                <div className="px-6 pt-6 pb-7">
                  <h3 className="font-serif text-2xl font-semibold text-ink mb-2.5">{s.title}</h3>
                  <p className="font-sans text-sm text-body-text leading-[1.72] mb-4">{s.desc}</p>

                  <div className="border-t border-cream-border pt-3.5 mb-[18px]">
                    {s.points.map((pt, j) => (
                      <div key={j} className="flex items-start gap-2 mb-1.5">
                        <FaCheckCircle className="text-gold text-[11px] shrink-0 mt-[3px]" />
                        <span className="font-sans text-[13px] text-body-text">{pt}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    href={s.href}
                    className="inline-flex items-center gap-[7px] bg-[rgba(184,134,11,0.08)] border border-[rgba(184,134,11,0.2)] text-gold px-4 py-2 rounded-full font-sans text-[12.5px] font-medium hover:bg-[rgba(184,134,11,0.15)] transition-all duration-200"
                  >
                    Book This Service
                    <FaChevronRight className="text-[10px]" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20 px-6 bg-white">
        <div className="max-w-[1100px] mx-auto">
          <div className="bg-[#0e0c08] rounded-[24px] px-10 py-12">
            <div className="text-center mb-10">
              <p className="font-sans text-[11px] text-gold tracking-[3px] uppercase mb-3">
                All Services
              </p>
              <h2 className="font-serif text-[34px] font-semibold text-[#f0e8c8]">
                More from <span className="text-[#c9a84c] italic">NIK ASTRO</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
              {moreServices.map(({ icon: Icon, label, sub }, i) => (
                <Link
                  key={i}
                  href="/consultation"
                  className="flex items-center gap-3.5 bg-[rgba(255,253,247,0.04)] border border-[rgba(184,134,11,0.15)] rounded-[14px] p-4 hover:bg-[rgba(255,253,247,0.08)] transition-all duration-200"
                >
                  <div className="bg-gradient-to-br from-[#ffe8a0] to-[#ffd060] rounded-[10px] w-10 h-10 flex items-center justify-center shrink-0">
                    <Icon className="text-subtle-gold text-[17px]" />
                  </div>
                  <div>
                    <p className="font-serif text-base font-semibold text-[#f0e8c8] leading-[1.2]">
                      {label}
                    </p>
                    <p className="font-sans text-[11.5px] text-[#7a6840] mt-[3px]">{sub}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20 px-6 bg-white">
        <div className="max-w-[1100px] mx-auto">
          <div className="text-center mb-12">
            <p className="font-sans text-[11px] text-gold tracking-[3px] uppercase mb-3">
              Ritual Services
            </p>
            <h2 className="font-serif text-[42px] font-semibold">
              Puja <span className="italic text-gold">&amp;</span> Remedies
            </h2>
            <div className="w-[52px] h-[2px] bg-gradient-to-r from-gold to-gold-light mt-4 mx-auto" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {pujas.map(({ icon: Icon, name, desc }, i) => (
              <div
                key={i}
                className="bg-cream rounded-[14px] border-l-[3px] border-l-gold border border-cream-border p-5 hover:shadow-gold hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-start gap-3">
                  <div className="bg-gradient-to-br from-[#ffe8a0] to-[#ffd060] rounded-[9px] w-9 h-9 flex items-center justify-center shrink-0">
                    <Icon className="text-subtle-gold text-base" />
                  </div>
                  <div>
                    <h3 className="font-serif text-[19px] font-semibold text-ink mb-1.5">{name}</h3>
                    <p className="font-sans text-[13px] text-body-text leading-[1.6]">{desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href="/puja-remedies"
              className="inline-flex items-center gap-2 border-[1.5px] border-gold-border text-gold px-6 py-3 rounded-full font-sans text-sm font-medium hover:bg-[rgba(184,134,11,0.08)] transition-all duration-200"
            >
              View All Pujas &amp; Remedies
              <FaChevronRight className="text-[11px]" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
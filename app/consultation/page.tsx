import Image from 'next/image'
import {
  FaPhone,
  FaVideo,
  FaHeart,
  FaClock,
  FaHome,
  FaBuilding,
  FaWhatsapp,
  FaChevronRight,
  FaStar,
  FaShieldAlt,
  FaUserCheck,
  FaCheckCircle,
  FaMapMarkerAlt,
} from 'react-icons/fa'
import { MdVerified } from 'react-icons/md'
import { GiStarShuriken, GiCrystalBall, GiYinYang } from 'react-icons/gi'
import { cn } from '@/lib/utils'

const services = [
  {
    icon: FaPhone,
    tag: '30 Minutes',
    title: 'Telephonic Consultation',
    description:
      "A focused 30-minute session where you speak directly with Nikhil Ji about your concerns and receive personalized astrological guidance with remedies tailored to your birth chart.",
    benefits: ['Direct conversation with Nikhil Ji', 'Personalized astrological advice', 'Chart-specific remedies'],
    image: '/telephonic.png',
  },
  {
    icon: FaVideo,
    tag: 'Enhanced',
    title: 'Video Consultation',
    description:
      "Upgrade to video for a richer face-to-face experience. Nikhil Ji walks you through your birth chart in detail, offering deeper insights into your life path and planetary influences.",
    benefits: ['Face-to-face interaction', 'Detailed chart walkthrough', 'In-depth visual analysis'],
    image: '/video.png',
  },
  {
    icon: FaHeart,
    tag: 'Specialized',
    title: 'Kundali Milan',
    description:
      "True compatibility requires more than Guna Milan. Nikhil Ji evaluates 10+ parameters to provide couples with a comprehensive, honest compatibility assessment before marriage.",
    benefits: ['10+ compatibility parameters', 'Life predictions for the couple', 'Dosha identification & remedies'],
    image: '/kundali-milan.png',
  },
  {
    icon: FaClock,
    tag: 'Kundali-Specific',
    title: 'Muhurat',
    description:
      "Auspicious timing for significant life events — Griha Pravesh, marriage, property purchase. Each Muhurat is uniquely matched to your Kundali, not a generic calendar.",
    benefits: ['Personalized to your birth chart', 'Covers all major life events', 'Ensures positive energy alignment'],
    image: '/muhurat.png',
  },
]

const vastuServices = [
  {
    icon: FaBuilding,
    title: 'Property Compatibility Check',
    description:
      "Before making a major property investment, verify whether the house is astrologically compatible with your Kundali. A specialized process that protects your investment.",
  },
  {
    icon: FaHome,
    title: 'Vastu Dosh Analysis',
    description:
      "Vastu doshas cannot be fully identified without astrology. Nikhil Ji combines both sciences to pinpoint specific doshas and prescribe aligned remedies like energized Yantras.",
  },
  {
    icon: GiYinYang,
    title: 'Astro Vastu Consultation',
    description:
      "Vastu alone never yields complete results. Only when combined with your birth chart can remedies be truly effective and aligned with your native energy.",
  },
  {
    icon: GiCrystalBall,
    title: 'Full Remedial Vastu',
    description:
      "Complete Vastu analysis checking compatibility with charts of all family members. Includes personally energized Yantras, samagri, and Vastu chowki crafted by Nikhil Ji.",
  },
]

const steps = [
  {
    number: '01',
    title: 'Message on WhatsApp',
    desc: "Send a message to +91 83778 44158 with your consultation type and a brief description of your query.",
  },
  {
    number: '02',
    title: 'Share Birth Details',
    desc: "Provide your date, time, and place of birth so Nikhil Ji can prepare your chart in advance.",
  },
  {
    number: '03',
    title: 'Confirm & Pay',
    desc: "Receive the consultation fee, available time slots, and booking confirmation via WhatsApp.",
  },
  {
    number: '04',
    title: 'Your Consultation',
    desc: "Meet Nikhil Ji at the scheduled time and receive precise guidance, predictions, and remedies.",
  },
]

export default function Consultation() {
  return (
    <main className="min-h-screen bg-white text-ink">
      <section className="relative overflow-hidden bg-gradient-to-br from-[#080608] via-[#12100a] to-[#1a1508] py-[68px] px-6">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_55%_60%_at_80%_40%,rgba(184,134,11,0.11)_0%,transparent_70%)]" />
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle,rgba(184,134,11,0.04)_1px,transparent_1px)] bg-[length:24px_24px]" />
        <div className="relative max-w-[1100px] mx-auto">
          <div className="mb-[22px] flex items-center gap-2.5">
            <GiStarShuriken className="text-gold text-[13px]" />
            <span className="font-sans text-[11px] font-medium uppercase tracking-[3px] text-[#c9a84c]">NIK ASTRO · Gurugram</span>
          </div>
          <h1 className="mb-5 max-w-[660px] text-[40px] sm:text-[46px] md:text-[52px] leading-[1.15] text-white">
            Book Your <span className="text-[#c9a84c] italic">Personal</span>
            <br />
            Consultation
          </h1>
          <p className="mb-10 max-w-[500px] font-sans text-[16px] leading-[1.75] text-[#a89060]">
            Every session is conducted personally by Jyotish Acharya Nikhil Ji — no junior staff, no automated reports. Precise guidance rooted in classical Jyotish.
          </p>
          <div className="flex flex-wrap gap-3">
            {[
              { icon: FaShieldAlt, label: 'All sessions by Nikhil Ji personally' },
              { icon: FaUserCheck, label: 'Classical Jyotish methodology' },
              { icon: FaMapMarkerAlt, label: 'Gurugram · Available globally' },
              { icon: MdVerified, label: 'All consultations are conducted by Nikhil Ji himself — no exceptions.' },
            ].map(({ icon: Icon, label }) => (
              <span key={label} className="inline-flex items-center gap-2 rounded-full border border-[rgba(184,134,11,0.25)] bg-[rgba(184,134,11,0.1)] px-3.5 py-1.5 font-sans text-[13px] text-[#a89060]">
                <Icon className="text-gold text-xs shrink-0" />
                {label}
              </span>
            ))}
          </div>
        </div>
      </section>

      <div className="bg-[#fffdf5] border-b border-[#f0e8c8] py-3.5 px-6 flex justify-center">
        <div className="inline-flex items-center gap-2.5 font-sans text-[13.5px] text-[#7d5a00]">
          <MdVerified className="text-gold text-[17px]" />
          <span>
            <strong className="font-semibold">Important:</strong> All consultations are conducted by Nikhil Ji himself — no exceptions.
          </span>
        </div>
      </div>

      <section className="py-10 md:py-16 px-6 bg-white">
        <div className="max-w-[1100px] mx-auto">
          <div className="mb-13 text-center">
            <p className="section-label">What We Offer</p>
            <h2 className="text-[34px] md:text-[40px]">Consultation Services</h2>
            <div className="section-divider mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            {services.map((s, i) => {
              const Icon = s.icon
              return (
                <div key={s.title} className="bg-white rounded-[18px] overflow-hidden border border-cream-border hover:shadow-gold hover:-translate-y-1.5 transition-all duration-300">
                  <div className="relative aspect-video w-full border-b border-cream-border overflow-hidden">
                    <Image src={s.image} alt={s.title} fill className="object-cover" />
                  </div>

                  <div className="p-7">
                    <div className="mb-3.5 flex items-start justify-between gap-3">
                      <div className="icon-box w-11 h-11">
                        <Icon className="text-subtle-gold text-[18px]" />
                      </div>
                      <span className="pill">{s.tag}</span>
                    </div>

                    <h3 className="mb-2.5 font-serif text-[23px] font-semibold text-ink">{s.title}</h3>
                    <p className="mb-5 font-sans text-[14.5px] text-body-text leading-[1.72]">{s.description}</p>

                    <div className="border-t border-cream-border pt-4">
                      {s.benefits.map((b) => (
                        <div key={b} className="mb-1.5 flex items-start gap-2">
                          <FaCheckCircle className="mt-0.5 text-gold text-xs shrink-0" />
                          <span className="font-sans text-[13px] text-body-text">{b}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-10 md:py-16 px-6 bg-gradient-to-b from-[#fdfaf3] to-white">
        <div className="max-w-[1100px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="section-label">Specialized Service</p>
              <h2 className="mb-4 text-[34px] md:text-[40px] leading-[1.2]">
                Astro Vastu
                <br />
                <span className="italic">Consultation</span>
              </h2>
              <div className="section-divider-left mb-5" />
              <p className="mb-7 font-sans text-[15px] leading-[1.8] text-body-text">
                Vastu alone can never yield complete results. Every analysis must be combined with your birth chart to determine whether a property is truly beneficial for you — and to prescribe remedies that align with your native energy.
              </p>

              <div className="rounded-[18px] overflow-hidden border border-cream-border">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image src="/astro-vastu.png" alt="Astro Vastu Consultation" fill className="object-cover" />
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3.5">
              {vastuServices.map((v) => {
                const VIcon = v.icon
                return (
                  <div key={v.title} className="bg-[#fffdf7] rounded-[14px] border border-cream-border border-l-[3px] border-l-gold p-6 hover:shadow-gold hover:-translate-y-0.5 transition-all duration-300">
                    <div className="flex gap-3.5 items-start">
                      <div className="icon-box w-9 h-9">
                        <VIcon className="text-subtle-gold text-[15px]" />
                      </div>
                      <div>
                        <h4 className="mb-1.5 font-serif text-[17px] font-semibold text-ink">{v.title}</h4>
                        <p className="font-sans text-[13.5px] text-body-text leading-[1.65]">{v.description}</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-16 px-6 bg-white">
        <div className="max-w-[1000px] mx-auto">
          <div className="mb-13 text-center">
            <p className="section-label">Simple Process</p>
            <h2 className="text-[34px] md:text-[40px]">How to Book</h2>
            <div className="section-divider mt-4" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {steps.map((s, i) => (
              <div
                key={s.number}
                className={cn(
                  'relative overflow-hidden rounded-[16px] p-7',
                  i === 3
                    ? 'bg-gradient-to-br from-[#1e1a0f] to-[#2a2210]'
                    : 'bg-[#fffdf7] border border-cream-border hover:shadow-[0_6px_28px_rgba(184,134,11,0.1)] hover:-translate-y-0.5 transition-all'
                )}
              >
                <span className={cn('absolute top-[-4px] right-2.5 font-serif text-[64px] font-bold leading-none', i === 3 ? 'text-white/[0.05]' : 'text-black/[0.04]')}>
                  {s.number}
                </span>
                <div className={cn('icon-box w-8 h-8 mb-3.5 relative', i === 3 && 'bg-[rgba(184,134,11,0.2)]')}>
                  <span className={cn('font-sans text-xs font-bold', i === 3 ? 'text-[#f0c040]' : 'text-subtle-gold')}>{s.number}</span>
                </div>
                <h4 className={cn('mb-2 font-serif text-[15px] font-semibold leading-snug', i === 3 ? 'text-[#f0e8c8]' : 'text-ink')}>{s.title}</h4>
                <p className={cn('font-sans text-[13px] leading-[1.65]', i === 3 ? 'text-[#a89060]' : 'text-body-text')}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 md:py-16 px-6 bg-gradient-to-br from-[#0e0c08] to-[#1e1a0f] text-center">
        <div className="max-w-[560px] mx-auto">
          <div className="mb-[22px] flex justify-center gap-[5px]">
            {[1, 2, 3, 4, 5].map((n) => (
              <FaStar key={n} className="text-gold text-[15px]" />
            ))}
          </div>
          <h2 className="mb-4 text-[34px] md:text-[44px] leading-[1.2] text-white">
            Seek <span className="text-[#c9a84c] italic">Clarity</span> Today
          </h2>
          <p className="mb-9 font-sans text-[15.5px] leading-[1.75] text-[#a89060]">
            Connect with Nikhil Ji on WhatsApp to discuss your concerns, get consultation charges, and book your session at a convenient time.
          </p>

          <a href="https://wa.me/918377844158" target="_blank" rel="noopener noreferrer" className="btn-whatsapp px-9 py-4 text-base">
            <FaWhatsapp className="text-[21px]" />
            <span>Message on WhatsApp</span>
            <FaChevronRight className="text-xs" />
          </a>

          <p className="mt-[18px] font-sans text-[13px] text-[#5a4e35]">
            +91 83778 44158 · Charges shared on WhatsApp
          </p>
        </div>
      </section>
    </main>
  )
}
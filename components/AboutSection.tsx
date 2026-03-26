import Link from 'next/link'
import { FaCheckCircle, FaYoutube, FaChevronRight } from 'react-icons/fa'
import { MdVerified } from 'react-icons/md'


const credentials = [
  { value: '20+', label: 'Years of Practice' },
  { value: '5000+', label: 'Consultations' },
  { value: '1M+', label: 'YouTube Views' },
  { value: 'Global', label: 'Client Reach' },
]

const highlights = [
  'Jyotish Acharya & Jyotish Bhushan — Bhartiya Vidya Bhawan',
  'Trained under Shri K.N. Rao — one of the greatest living Jyotishis',
  'Gold Medal awarded for astrological studies',
  'Expertise in Parashari, Nadi, Jaimini, Prashn & Astro Vastu',
  'Mastery in Tantra, Mantra, Yantra & Pran Pratishtha',
  'Learnt at Ujjain, Varanasi, Haridwar & Himachal Pradesh',
]

export default function AboutSection() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-[#fdfaf3] to-white">
      <div className="max-w-[1100px] mx-auto">
        <div className="bg-[#0e0c08] rounded-[18px] border border-[#2a2210] mb-16 grid grid-cols-2 lg:grid-cols-4 overflow-hidden">
          {credentials.map(({ value, label }, i) => (
            <div
              key={i}
              className={`p-7 text-center ${i % 2 === 0 ? 'border-r border-[#2a2210] lg:border-r' : ''} ${
                i < 2 ? 'border-b border-[#2a2210] lg:border-b-0' : ''
              } ${i === 2 ? 'lg:border-r border-[#2a2210]' : ''}`}
            >
              <p className="font-serif text-[36px] font-bold text-[#c9a84c] leading-none">{value}</p>
              <p className="font-sans text-xs text-[#7a6840] mt-1.5">{label}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="font-sans text-[11px] text-gold tracking-[3px] uppercase mb-3">
              Who is Nikhil Ji
            </p>
            <h2 className="font-serif text-[42px] font-semibold leading-[1.2] mb-4">
              About <span className="text-gold italic">NIK ASTRO</span>
            </h2>
            <div className="w-[52px] h-[2px] bg-gradient-to-r from-gold to-gold-light mb-6" />

            <p className="font-sans text-[15px] text-body-text leading-[1.82] mb-[18px]">
              Popularly known as <strong className="text-[#3a2e10]">Astro Guru Nikhil</strong> —
              Jyotish Acharya Nikhil Datyal has been practicing astrology for over 20 years. His
              legacy of astrological wisdom traces back to his great grandfather Late Shri Ami
              Chand, a celebrated Jyotishi from Himachal Pradesh.
            </p>
            <p className="font-sans text-[15px] text-body-text leading-[1.82] mb-7">
              Trained formally at Bhartiya Vidya Bhawan under the legendary{' '}
              <strong className="text-[#3a2e10]">Shri K.N. Rao Ji</strong>, Nikhil Ji combines
              classical Jyotish with deep expertise in Tantra, Mantra, and Yantra — offering
              remedies that truly work.
            </p>

            <blockquote className="border-l-[3px] border-l-gold pl-5 font-serif italic text-xl text-[#3a2e10] leading-[1.6] mb-8">
              &quot;Astrology is not magic — it is a magical tool that guides people out of their problems.&quot;
            </blockquote>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 bg-gradient-to-br from-gold to-[#d4a017] text-white px-6 py-3 rounded-full font-sans text-sm font-semibold shadow-[0_3px_14px_rgba(184,134,11,0.3)] hover:-translate-y-px hover:shadow-[0_6px_20px_rgba(184,134,11,0.4)] transition-all duration-300"
            >
              Full Biography
              <FaChevronRight className="text-[11px]" />
            </Link>
          </div>

          <div className="flex flex-col gap-4">
            <div className="bg-white rounded-[18px] border border-cream-border px-[26px] py-7">
              <p className="font-serif text-[20px] font-semibold text-ink mb-[18px]">
                Credentials & Expertise
              </p>
              {highlights.map((h, i) => (
                <div key={i} className="flex items-start gap-2.5 mb-[11px]">
                  <FaCheckCircle className="text-gold text-xs shrink-0 mt-[3px]" />
                  <span className="font-sans text-[13.5px] text-[#3a2e10] leading-[1.5]">{h}</span>
                </div>
              ))}
            </div>

            <div className="bg-[#0e0c08] rounded-[16px] border border-[#2a2210] p-5 flex items-center gap-3.5">
              <div className="bg-[rgba(255,0,0,0.15)] border border-[rgba(255,0,0,0.25)] rounded-[10px] w-[46px] h-[46px] flex items-center justify-center shrink-0">
                <FaYoutube className="text-[#ff4444] text-xl" />
              </div>
              <div>
                <p className="font-serif text-[17px] font-semibold text-[#f0e8c8] mb-1">
                  YouTube Silver Play Button
                </p>
                <p className="font-sans text-[13px] text-muted-gold leading-[1.5]">
                  1M+ views · Globally followed for astrology guidance
                </p>
              </div>
              <MdVerified className="text-gold text-[18px] ml-auto shrink-0" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
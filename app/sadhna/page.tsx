import {
  FaWhatsapp, FaStar, FaCheckCircle, FaChevronRight,
} from 'react-icons/fa'
import { MdVerified } from 'react-icons/md'
import {
  GiStarShuriken, GiYinYang,
  GiLotus, GiTriquetra, GiFireflake,
  GiAngelWings, GiSparkles, GiMoon, GiSun, GiSevenPointedStar,
  GiBrain, GiBriefcase, GiShop, GiGraduateCap, GiHealing,
  GiShield, GiHeartWings, GiHouse
} from 'react-icons/gi'
import { cn } from '@/lib/utils'


// ─── Data ────────────────────────────────────────────────────────────────────

const sadhnas = [
  {
    icon: GiBrain,
    tag: 'Mental Wellness',
    title: 'Holistic Sadhna for Mental Issues',
    desc: 'Suffering from anxiety, depression, or emotional turbulence? These specialized Sadhnas are designed to help you overcome mental health challenges through targeted spiritual practices tailored to your chart.',
  },
  {
    icon: GiBriefcase,
    tag: 'Professional Growth',
    title: 'Special Sadhna for Career Enhancement',
    desc: 'Want to grow in your career? Nikhil Ji combines astrology with Tantra, Mantra, and Yantra to design a multi-level Sadhna that removes obstacles and opens pathways for professional advancement.',
  },
  {
    icon: GiShop,
    tag: 'Business Growth',
    title: 'Special Sadhna for Business Enhancement',
    desc: 'Designed for entrepreneurs and business owners. Nikhil Ji studies your horoscope and creates a specific Sadhna with procedures, Yantras, and Samagri to boost growth and prosperity.',
  },
  {
    icon: GiGraduateCap,
    tag: 'Academic Excellence',
    title: 'Special Sadhna for Students',
    desc: 'Help students excel in studies, improve retention power, and succeed in competitive exams. Each Sadhna is crafted based on the student\'s individual birth chart.',
  },
  {
    icon: GiHealing,
    tag: 'Health & Wellness',
    title: 'Special Sadhna for Health Enhancement',
    desc: 'In a time when health issues are rising daily, this Sadhna improves overall health and strengthens your body\'s natural defenses through spiritual alignment.',
  },
  {
    icon: GiShield,
    tag: 'Protection',
    title: 'Special Sadhna for Protection',
    desc: 'Protect yourself and your family from Tantra, Nazar Dosh, Totkas, and negative forces. A powerful multi-level program that creates an aura of spiritual protection.',
  },
  {
    icon: GiHeartWings,
    tag: 'Relationship Harmony',
    title: 'Special Sadhna for Happy Married Life',
    desc: 'Marital problems are increasing every day. This Sadhna resolves conflicts and restores harmony in married life through a combination of astrological and spiritual remedies.',
  },
  {
    icon: GiHouse,
    tag: 'Home Positivity',
    title: 'Special Sadhna for Vastu Enhancement',
    desc: 'Tried everything but still feel negative energy at home? This Sadhna removes all ill forces and instills lasting positive energy into your living space.',
  },
]

const deviSadhnas = [
  {
    icon: GiSevenPointedStar,
    name: 'Ganpati Sadhna',
    levels: '10+ Levels',
    benefits: 'Luck · Prosperity · Wealth · Fame · Obstacle Removal',
    desc: 'Ganpati Ji is the supreme remover of obstacles. This Sadhna brings overall luck, prosperity, money, and fame while clearing all hurdles from your path.',
    topBorderClass: 'border-t-[#e67e00]',
  },
  {
    icon: GiTriquetra,
    name: 'Shiv Sadhna',
    levels: '10+ Levels',
    benefits: 'Health · Wealth · Evil Protection · Spirituality',
    desc: 'Receive the blessings of Mahadev himself. This Sadhna brings overall health, wealth, protection from evil forces, and deep spiritual growth.',
    topBorderClass: 'border-t-gold',
  },
  {
    icon: GiLotus,
    name: 'Maha Lakshmi Sadhna',
    levels: '10+ Levels',
    benefits: 'Wealth · Fame · Family Happiness · Total Prosperity',
    desc: 'Mahalakshmi is not merely the goddess of money — her Sadhna brings complete prosperity: wealth, fame, and profound family happiness.',
    topBorderClass: 'border-t-[#e67e00]',
  },
  {
    icon: GiFireflake,
    name: 'Bagla Mukhi Sadhna',
    levels: '10+ Levels',
    benefits: 'Enemy Protection · Court Cases · Black Magic Defense',
    desc: 'Bagla Mukhi is the fierce 8th form of the 10 Mahavidyas. This Sadhna provides powerful protection from enemies, legal battles, and dark energies.',
    topBorderClass: 'border-t-gold',
  },
  {
    icon: GiMoon,
    name: 'Bhairav Sadhna',
    levels: '10 Levels',
    benefits: 'Protection · Confidence · Negativity Removal',
    desc: 'Bhairav Ji — the ultimate protector — guards against all evils, negative thoughts, black magic, and Tantra attacks while gifting the practitioner unwavering confidence.',
    topBorderClass: 'border-t-[#e67e00]',
  },
  {
    icon: GiSparkles,
    name: 'Mahakali Sadhna',
    levels: '10+ Levels',
    benefits: 'Luck · Fame · Confidence · Wealth · Negative Influence Removal',
    desc: 'The supreme Devi. Mahakali\'s Sadhna brings luck, fame, confidence, and wealth while completely removing negative influences from the native\'s life.',
    topBorderClass: 'border-t-gold',
  },
  {
    icon: GiSun,
    name: 'Navagraha Sadhna',
    levels: '9 Levels',
    benefits: 'Planetary Strength · Dosha Removal',
    desc: 'Uniquely designed based on your individual horoscope. Each of the 9 levels strengthens a specific planet in your chart and removes corresponding planetary doshas.',
    topBorderClass: 'border-t-[#e67e00]',
  },
  {
    icon: GiAngelWings,
    name: 'Lakshmi Kuber Sadhna',
    levels: '5 Levels',
    benefits: 'Wealth Multiplication · Multiple Income Sources · Savings',
    desc: 'Though Kuber is a Yaksh, his Sadhna delivers immense wealth. This program helps save, multiply, and create parallel sources of income and long-term prosperity.',
    topBorderClass: 'border-t-gold',
  },
]

const included = [
  { title: 'Customized Yantra', desc: 'Specially energized Yantras crafted and activated by Nikhil Ji for your unique birth chart and need.' },
  { title: 'Puja Samagri', desc: 'Complete sacred materials required for the Sadhna rituals, prepared and blessed by Nikhil Ji.' },
  { title: 'Personalized Mantras', desc: 'Specific Mantras formulated by Nikhil Ji based on your horoscope and the Sadhna purpose.' },
  { title: 'Video Call Session', desc: 'Nikhil Ji personally explains procedures and correct Mantra pronunciation via video call.' },
  { title: 'Multiple Levels', desc: 'Progressive multi-level programs designed for deep, sustained spiritual growth.' },
  { title: 'Ongoing Guidance', desc: 'Continued support and guidance from Nikhil Ji throughout your Sadhna journey.' },
]

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Sadhna() {
  return (
    <main className="bg-white text-ink">
      <section className="relative overflow-hidden bg-gradient-to-br from-[#080608] via-[#12100a] to-[#1a1508] py-[68px] px-6">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_55%_60%_at_80%_40%,rgba(184,134,11,0.12)_0%,transparent_70%)]" />
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle,rgba(184,134,11,0.04)_1px,transparent_1px)] bg-[length:24px_24px]" />
        <div className="relative max-w-[1100px] mx-auto">
          <div className="mb-[22px] flex items-center gap-2.5">
            <GiStarShuriken className="text-gold text-[13px]" />
            <span className="font-sans text-[11px] font-medium uppercase tracking-[3px] text-[#c9a84c]">NIK ASTRO · Spiritual Programs</span>
          </div>
          <h1 className="mb-5 max-w-[640px] text-[40px] sm:text-[48px] md:text-[54px] leading-[1.12] text-white">
            Special <span className="text-[#c9a84c] italic">Sadhna</span>
            <br />
            Programs
          </h1>
          <p className="mb-9 max-w-[540px] font-sans text-[16px] leading-[1.8] text-[#a89060]">
            Nikhil Ji combines his deep expertise in Tantra, Mantra, and Yantra to design fully customized spiritual programs — not generic prescriptions, but precise Sadhnas built around your horoscope and life situation.
          </p>
          <div className="flex flex-wrap gap-3">
            {['Astrology + Tantra + Mantra + Yantra', 'Horoscope-Based Design', 'Energized Yantras', 'Personal Guidance by Nikhil Ji'].map((t) => (
              <span key={t} className="pill">{t}</span>
            ))}
          </div>
        </div>
      </section>

      <div className="bg-[#fffdf5] border-b border-[#f0e8c8] py-3.5 px-6 flex justify-center">
        <div className="inline-flex items-center gap-2.5 font-sans text-[13.5px] text-[#7d5a00]">
          <MdVerified className="text-gold text-[17px]" />
          <span>
            Every Sadhna is <strong className="font-semibold">personally designed</strong> by Nikhil Ji based on your individual birth chart — no
            one-size-fits-all programs.
          </span>
        </div>
      </div>

      <section className="py-[72px] pb-20 px-6 bg-white">
        <div className="max-w-[1100px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="section-label">What is a Sadhna?</p>
              <h2 className="text-[34px] md:text-[40px]">About These Programs</h2>
              <div className="section-divider-left mb-6" />
              <p className="mb-5 font-sans text-[15px] leading-[1.8] text-body-text">
                Nikhil Ji combines his expertise in Tantra, Mantra, and Yantra to design special programs that include various procedures, Yantras, and Samagri to help his clients.
              </p>
              <p className="mb-5 font-sans text-[15px] leading-[1.8] text-body-text">
                These Sadhnas are <strong className="text-[#3a2e10] font-semibold">not general in nature</strong> — they are highly specific. Nikhil Ji
                also combines his astrological knowledge of your horoscope to formulate the exact Sadhna, materials, and procedures best suited for your
                individual situation.
              </p>
              <p className="mb-7 font-sans text-[15px] leading-[1.8] text-body-text">
                Each program is a complete, guided spiritual journey — with physical materials, energized Yantras, personalized Mantras, and direct guidance from Nikhil Ji himself.
              </p>
              <a href="https://wa.me/918377844158" target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
                <FaWhatsapp className="text-[18px]" />
                Connect on WhatsApp
                <FaChevronRight className="text-[11px]" />
              </a>
            </div>

            <div className="rounded-[22px] border border-[#2a2210] bg-gradient-to-br from-[#1e1a0f] to-[#2a2210] p-10">
              <div className="mb-7 flex items-center gap-3.5">
                <div className="icon-box w-[52px] h-[52px]">
                  <GiYinYang className="text-subtle-gold text-[22px]" />
                </div>
                <div>
                  <p className="font-serif text-xl text-[#f0e8c8]">The Triad of Power</p>
                  <p className="font-sans text-xs tracking-[1px] text-gold">MANTRA · TANTRA · YANTRA</p>
                </div>
              </div>
              {[
                { t: 'Mantra', d: 'Sacred sound vibrations formulated specifically for your chart and purpose.' },
                { t: 'Tantra', d: 'Powerful ritual procedures drawn from classical Shaiva-Shakti traditions.' },
                { t: 'Yantra', d: 'Energized geometric instruments personally activated through Pran Pratishtha.' },
              ].map(({ t, d }, i, arr) => (
                <div key={t} className={cn('flex gap-3.5', i < arr.length - 1 && 'mb-5')}>
                  <div className="w-0.5 rounded bg-gradient-to-b from-gold to-gold-light shrink-0" />
                  <div>
                    <p className="mb-1 font-serif text-[16px] font-semibold text-[#c9a84c]">{t}</p>
                    <p className="font-sans text-[13px] leading-[1.65] text-[#7a6840]">{d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20 px-6 bg-white">
        <div className="max-w-[1100px] mx-auto">
          <div className="mb-13 text-center">
            <p className="section-label">Holistic Programs</p>
            <h2 className="text-[34px] md:text-[40px]">Special Sadhna Programs</h2>
            <div className="section-divider mb-5" />
            <p className="mx-auto max-w-[560px] font-sans text-[15px] leading-[1.75] text-body-text">
              Each of these programs is customized based on your birth chart. Nikhil Ji designs the entire Sadhna — procedures, materials, and Mantras — for your specific situation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {sadhnas.map((s) => {
              const Icon = s.icon
              return (
                <div key={s.title} className="bg-white rounded-[16px] border border-cream-border p-[26px] hover:shadow-gold hover:-translate-y-1.5 transition-all duration-300">
                  <div className="flex items-start gap-3.5 mb-4">
                    <div className="icon-box w-11 h-11">
                      <Icon className="text-subtle-gold text-[19px]" />
                    </div>
                    <div className="flex-1">
                      <span className="pill mb-2 inline-block">{s.tag}</span>
                      <h3 className="font-serif text-[19px] font-semibold text-ink leading-snug">{s.title}</h3>
                    </div>
                  </div>
                  <p className="font-sans text-[14px] text-body-text leading-[1.72] mb-[18px]">{s.desc}</p>
                  <a href="https://wa.me/918377844158" target="_blank" rel="noopener noreferrer" className="btn-wa-subtle">
                    <FaWhatsapp className="text-[13px]" />
                    WhatsApp to Know More
                  </a>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-10 md:py-16 px-6 bg-gradient-to-b from-[#0e0c08] to-[#1a1408]">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle,rgba(184,134,11,0.04)_1px,transparent_1px)] bg-[length:24px_24px]" />
        <div className="relative max-w-[1100px] mx-auto">
          <div className="mb-13 text-center">
            <p className="font-sans text-[11px] uppercase tracking-[3px] text-gold mb-3">Divine Connection</p>
            <h2 className="text-[34px] md:text-[42px] leading-[1.2] text-[#f0e8c8]">
              Devi Devta <span className="text-[#c9a84c] italic">Sadhna</span>
            </h2>
            <div className="section-divider mb-6" />
            <p className="mx-auto max-w-[680px] font-sans text-[15px] leading-[1.8] text-[#a89060]">
              Nikhil Ji combines his expertise in Tantra, Mantra, and Yantra to teach these highly specialized Sadhnas. Each program is designed uniquely for the client after studying their horoscope — not a general course. The complete package includes Yantras, Puja Samagri, personalized Mantras formulated by Nikhil Ji, and a Video Call session explaining all procedures and correct Mantra pronunciation.
            </p>
          </div>

          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-5">
            {deviSadhnas.map((d) => {
              const Icon = d.icon
              return (
                <div
                  key={d.name}
                  className={cn(
                    'rounded-[18px] bg-[rgba(255,253,247,0.04)] border border-[rgba(184,134,11,0.18)] border-t-2 p-7 transition-all duration-300 hover:bg-[rgba(255,253,247,0.07)] hover:-translate-y-1',
                    d.topBorderClass
                  )}
                >
                  <div className="mb-3.5 flex items-start justify-between gap-3">
                    <div className="icon-box w-11 h-11">
                      <Icon className="text-subtle-gold text-[20px]" />
                    </div>
                    <span className="inline-block rounded-full border border-[rgba(184,134,11,0.3)] bg-[rgba(184,134,11,0.1)] px-3 py-1 font-sans text-[10px] font-medium uppercase tracking-[1px] text-[#c9a84c]">
                      {d.levels}
                    </span>
                  </div>

                  <h3 className="mt-3.5 mb-2.5 font-serif text-[22px] font-semibold text-[#f0e8c8]">{d.name}</h3>
                  <p className="mb-[18px] font-sans text-[14px] leading-[1.72] text-[#a89060]">{d.desc}</p>

                  <div className="mb-[18px] rounded-[8px] border border-[rgba(184,134,11,0.2)] bg-[rgba(184,134,11,0.1)] px-3.5 py-2.5">
                    <p className="font-sans text-[12px] tracking-[0.5px] text-[#c9a84c]">{d.benefits}</p>
                  </div>

                  <a
                    href="https://wa.me/918377844158"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[rgba(37,211,102,0.12)] border border-[rgba(37,211,102,0.25)] text-[#4dcc7a] px-4 py-2 rounded-full font-sans text-[12.5px] font-medium"
                  >
                    <FaWhatsapp className="text-[13px]" />
                    WhatsApp to Know More
                  </a>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-10 md:py-16 px-6 bg-white">
        <div className="max-w-[1100px] mx-auto">
          <div className="mb-13 text-center">
            <p className="section-label">Complete Package</p>
            <h2 className="text-[34px] md:text-[40px]">What&apos;s Included in Every Sadhna</h2>
            <div className="section-divider mb-5" />
            <p className="mx-auto max-w-[520px] font-sans text-[15px] leading-[1.75] text-body-text">
              Every Sadhna program is a complete package — not just instructions, but everything you need to practice with full support from Nikhil Ji.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {included.map((item) => (
              <div
                key={item.title}
                className="bg-[#fffdf7] rounded-[14px] border border-cream-border border-l-[3px] border-l-gold p-6 hover:shadow-[0_4px_20px_rgba(184,134,11,0.1)] hover:-translate-y-0.5 transition-all"
              >
                <div className="flex gap-3 items-start">
                  <div className="icon-box w-9 h-9">
                    <FaCheckCircle className="text-subtle-gold text-[14px]" />
                  </div>
                  <div>
                    <h4 className="mb-1.5 font-serif text-[17px] font-semibold text-ink">{item.title}</h4>
                    <p className="font-sans text-[13.5px] text-body-text leading-[1.65]">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 md:py-16 px-6 bg-gradient-to-br from-[#0e0c08] to-[#1e1a0f] text-center">
        <div className="max-w-[560px] mx-auto">
          <div className="mb-5 flex justify-center gap-1.5">
            {[1, 2, 3, 4, 5].map((n) => (
              <FaStar key={n} className="text-gold text-[14px]" />
            ))}
          </div>
          <h2 className="mb-4 text-[34px] md:text-[42px] leading-[1.2] text-white">
            Begin Your <span className="text-[#c9a84c] italic">Spiritual Journey</span>
          </h2>
          <p className="mb-9 font-sans text-[15px] leading-[1.75] text-[#a89060]">
            Connect with Nikhil Ji on WhatsApp to discuss your goals, get a customized Sadhna recommendation, and receive your complete program details.
          </p>
          <a href="https://wa.me/918377844158" target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
            <FaWhatsapp className="text-[20px]" />
            Inquire About Sadhna
          </a>
          <p className="mt-4 font-sans text-[12.5px] text-[#5a4e35]">+91 83778 44158 · Charges shared on WhatsApp</p>
        </div>
      </section>
    </main>
  )
}
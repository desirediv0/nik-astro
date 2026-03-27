import {
  FaWhatsapp, FaStar, FaCheckCircle, FaChevronRight,
} from 'react-icons/fa'
import { MdVerified } from 'react-icons/md'
import {
  GiStarShuriken, GiLotus, GiTriquetra, GiFlame,
  GiCrystalBall, GiYinYang, GiScrollUnfurled,
  GiSun, GiMoon, GiSpiralHilt, GiDiamondRing,
  GiPrayer
} from 'react-icons/gi'
import { cn } from '@/lib/utils'
import Image from 'next/image'

export const metadata = {
  title: 'Puja & Remedies – NIK ASTRO',
  description:
    'Specialized Pujas, Yantras, Kavach, Mantra remedies, and Gemstone recommendations by Jyotish Acharya Nikhil Ji — NIK ASTRO, Gurugram.',
}

// ─── Data ────────────────────────────────────────────────────────────────────

const pujas = [
  {
    icon: GiTriquetra,
    name: 'Rudrabhishek',
    desc: 'Sacred ritual bathing of Shiva Linga with special Panchamrit and offerings. Brings peace, removes planetary afflictions, and accelerates spiritual growth.',
    benefits: ['Peace of mind', 'Removes doshas', 'Spiritual upliftment'],
  },
  {
    icon: GiSun,
    name: 'Grah Shanti Puja',
    desc: 'Focused rituals to pacify malefic planets in your birth chart. Reduces their harmful effects and strengthens beneficial planetary influences.',
    benefits: ['Planetary harmony', 'Obstacle removal', 'Career & health boost'],
  },
  {
    icon: GiMoon,
    name: 'Nakshatra Shanti',
    desc: 'Specialized ritual for Nakshatra-related issues. Removes doshas specific to your birth star and aligns you with its positive energies.',
    benefits: ['Birth star blessings', 'Dosha removal', 'Improved luck'],
  },
  {
    icon: GiSpiralHilt,
    name: 'Navgrah Puja',
    desc: 'Complete ritual honoring all nine planets. Balances all planetary influences simultaneously and brings overall wellness to every area of life.',
    benefits: ['9-planet balance', 'Overall wellness', 'All-round protection'],
  },
  {
    icon: GiFlame,
    name: 'Kaal Sarpa Puja',
    desc: "Specialized Puja for Kaal Sarpa Dosha that causes fear, anxiety, and persistent obstacles. Reduces the dosha's intensity and removes its harmful effects.",
    benefits: ['Fear removal', 'Obstacle clearance', 'Mental peace'],
  },
  {
    icon: GiCrystalBall,
    name: 'Shani Grah Puja',
    desc: "Dedicated worship of Shani Dev for those facing delays, hardship, or Sade Sati effects. Brings relief, success, and removes Shani's negative influence.",
    benefits: ['Delay removal', 'Career success', 'Sade Sati relief'],
  },
]

const remedies = [
  {
    icon: GiYinYang,
    category: 'Yantra & Kavach',
    desc: 'Nikhil Ji is one of the very few practitioners who knows the proper procedure of Pran Pratishtha of Yantras. He personally energizes each Yantra and Kavach — giving them true spiritual potency. Thousands of clients have benefited through these over the years.',
    points: [
      'Customized to your birth chart & purpose',
      'Personally energized through Pran Pratishtha by Nikhil Ji',
      'Correct placement & usage instructions provided',
      'Kavach crafted for personalized spiritual protection',
    ],
  },
  {
    icon: GiScrollUnfurled,
    category: 'Mantra Remedies',
    desc: 'Sacred sound vibrations specifically formulated for your chart and situation. Nikhil Ji selects and teaches the precise Mantra — with correct pronunciation — that will yield results for your specific planetary conditions.',
    points: [
      'Chart-specific Mantra selection',
      'Correct pronunciation taught personally',
      'Specific timing and procedure advised',
      'Ongoing guidance throughout the practice',
    ],
  },
  {
    icon: GiDiamondRing,
    category: 'Gemstone Recommendations',
    desc: 'Natural gemstones aligned with your planetary chart strengthen beneficial planets and reduce harmful influences. Nikhil Ji recommends gems only after thorough chart analysis — never generically.',
    points: [
      'Chart-specific selection — never generic advice',
      'Authenticity and quality guidance provided',
      'Wearing rituals and activation explained',
      'Regular follow-up recommendations',
    ],
  },
  {
    icon: GiLotus,
    category: 'Special Remedial Pujas',
    desc: "Beyond standard Pujas, Nikhil Ji designs special Puja procedures combining multiple rituals, Samagri, and Mantras for complex problems. Each Puja is tailored entirely to the client's chart and situation.",
    points: [
      'Fully customized to your horoscope',
      'Combination of Puja, Mantra & Samagri',
      'Performed personally by Nikhil Ji',
      'Video documentation available on request',
    ],
  },
]

const benefits = [
  'Remove planetary doshas & imbalances',
  'Reduce persistent obstacles and delays',
  'Attract wealth and material prosperity',
  'Improve health and physical vitality',
  'Strengthen relationships and marriages',
  'Increase success in career & business',
  'Protection from negative energies & Tantra',
  'Spiritual growth, peace, and clarity',
]

const steps = [
  {
    n: '01',
    title: 'Birth Chart Analysis',
    desc: 'Nikhil Ji thoroughly analyzes your birth chart to identify doshas, planetary imbalances, and the root causes of your problems.',
  },
  {
    n: '02',
    title: 'Remedy Selection',
    desc: 'Based on analysis, the right combination is selected — Puja, Yantra, Mantra, Kavach, or Gemstone — specific to your chart.',
  },
  {
    n: '03',
    title: 'Implementation',
    desc: 'Remedies are performed or provided with detailed, personalized instructions on how and when to use them for maximum effect.',
  },
  {
    n: '04',
    title: 'Results & Follow-up',
    desc: 'Consistent practice of remedies removes obstacles and brings positive changes in health, wealth, relationships, and success.',
  },
]

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function PujaRemedies() {
  return (
    <main className="bg-white text-ink">
      <section className="relative overflow-hidden bg-gradient-to-br from-[#080608] via-[#12100a] to-[#1a1508] py-[68px] px-6">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_55%_60%_at_80%_40%,rgba(184,134,11,0.12)_0%,transparent_70%)]" />
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle,rgba(184,134,11,0.04)_1px,transparent_1px)] bg-[length:24px_24px]" />
        <div className="relative max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[52px] items-center">
          <div>
            <div className="mb-[22px] flex items-center gap-2.5">
              <GiStarShuriken className="text-gold text-[13px]" />
              <span className="font-sans text-[11px] font-medium uppercase tracking-[3px] text-[#c9a84c]">NIK ASTRO · Rituals & Remedies</span>
            </div>
            <h1 className="mb-5 text-[40px] sm:text-[46px] md:text-[52px] leading-[1.12] text-white">
              Puja &amp; <span className="text-[#c9a84c] italic">Remedies</span>
            </h1>
            <p className="mb-7 max-w-[500px] font-sans text-[16px] leading-[1.8] text-[#a89060]">
              Nikhil Ji combines various methods and makes Yantras and Kavach for his clients. He is one of the very few who knows the proper procedure of <strong className="text-[#c9a84c] font-medium">Pran Pratishtha</strong> of Yantras — and thousands of clients have benefited through these over the years.
            </p>
            <div className="flex flex-wrap gap-3">
              {['Personally Performed by Nikhil Ji', 'Pran Pratishtha Expertise', 'Chart-Specific Remedies'].map((t) => (
                <span key={t} className="pill">{t}</span>
              ))}
            </div>
          </div>

          <div className="rounded-[20px] overflow-hidden border border-[rgba(184,134,11,0.3)] shadow-[0_24px_64px_rgba(0,0,0,0.5)]">
            <Image src="/nikhil-ji-puja.png" alt="Nikhil Ji" width={800} height={500} />
          </div>
        </div>
      </section>

      <section className="py-14 px-6 bg-[#fffdf7] border-b border-[#f0e8c8]">
        <div className="max-w-[1100px] mx-auto">
          <div className="mb-8 text-center">
            <p className="section-label">Ritual Gallery</p>
            <h2 className="text-[28px]">Nikhil Ji at the Puja Anushthan</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {[
              { label: 'Rudrabhishek — Shivalinga', image: '/rudrabhishek.jpg' },
              { label: 'Devi Puja — Navaratra', image: '/devi-puja-setup.jpg' },
              { label: 'Havan Kund Preparation', image: '/havan-kund.jpg' },
              { label: 'Anushthan Ritual', image: '/anushthan-ritual.jpg' },
            ].map(({ label, image }) => (
              <div
                key={label}
                className="rounded-[14px] overflow-hidden border border-cream-border shadow-[0_2px_12px_rgba(0,0,0,0.06)]"
              >
                <div className="w-full h-[160px] relative">
                  <Image
                    src={image}
                    alt={label}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-2.5 px-3.5 pb-3 bg-white">
                  <p className="font-sans text-[12px] text-[#a89060] tracking-[0.5px]">
                    {label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 md:py-16 px-6 bg-white">
        <div className="max-w-[1100px] mx-auto">
          <div className="mb-13 text-center">
            <p className="section-label">Ritual Services</p>
            <h2 className="text-[34px] md:text-[40px]">Puja Services</h2>
            <div className="section-divider mb-5" />
            <p className="mx-auto max-w-[540px] font-sans text-[15px] leading-[1.75] text-body-text">
              Each Puja is performed personally by Nikhil Ji following proper Vedic procedures — customized to your specific chart and planetary conditions.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {pujas.map((p) => {
              const Icon = p.icon
              return (
                <div key={p.name} className="bg-white rounded-[16px] border border-cream-border p-[26px] hover:shadow-gold hover:-translate-y-1.5 transition-all duration-300">
                  <div className="flex items-start gap-3.5 mb-4">
                    <div className="icon-box w-11 h-11">
                      <Icon className="text-subtle-gold text-[20px]" />
                    </div>
                    <h3 className="font-serif text-xl font-semibold pt-1 text-ink">{p.name}</h3>
                  </div>
                  <p className="font-sans text-[14px] text-body-text leading-[1.72] mb-[18px]">{p.desc}</p>
                  <div className="border-t border-cream-border pt-3.5">
                    {p.benefits.map((b) => (
                      <div key={b} className="flex items-start gap-2 mb-1.5">
                        <FaCheckCircle className="text-gold text-[11px] mt-0.5 shrink-0" />
                        <span className="font-sans text-[13px] text-body-text">{b}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-10 md:py-16 px-6 bg-gradient-to-b from-[#fdfaf3] to-white">
        <div className="max-w-[1100px] mx-auto">
          <div className="mb-13 text-center">
            <p className="section-label">Remedy Solutions</p>
            <h2 className="text-[34px] md:text-[40px]">Remedy <span className="italic text-gold">Methods</span></h2>
            <div className="section-divider mb-5" />
            <p className="mx-auto max-w-[580px] font-sans text-[15px] leading-[1.75] text-body-text">
              For remedies, Nikhil Ji combines various methods and makes Yantras and Kavach for his clients. He is one of the very few who knows the proper procedure of Pran Pratishtha of Yantras — and many clients have benefited through these over the years.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {remedies.map((r) => {
              const Icon = r.icon
              return (
                <div key={r.category} className="bg-[#fffdf7] rounded-[18px] border border-cream-border overflow-hidden hover:shadow-gold hover:-translate-y-1 transition-all duration-300">
                  <div className="h-[3px] w-full bg-gradient-to-r from-gold to-gold-light" />
                  <div className="p-7 pb-[30px]">
                    <div className="flex items-start gap-3.5 mb-4">
                      <div className="icon-box w-11 h-11">
                        <Icon className="text-subtle-gold text-[20px]" />
                      </div>
                      <h3 className="font-serif text-[22px] font-semibold text-ink">{r.category}</h3>
                    </div>
                    <p className="font-sans text-[14.5px] text-body-text leading-[1.75] mb-5">{r.desc}</p>
                    <div className="border-t border-cream-border pt-[18px] mb-5">
                      {r.points.map((pt) => (
                        <div key={pt} className="flex items-start gap-2.5 mb-2">
                          <div className="icon-box w-[22px] h-[22px]">
                            <FaCheckCircle className="text-subtle-gold text-[9px]" />
                          </div>
                          <span className="font-sans text-[13.5px] text-ink pt-0.5">{pt}</span>
                        </div>
                      ))}
                    </div>
                    <a href="https://wa.me/918377844158" target="_blank" rel="noopener noreferrer" className="btn-wa-subtle">
                      <FaWhatsapp className="text-[13px]" />
                      Enquire on WhatsApp
                      <FaChevronRight className="text-[10px]" />
                    </a>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="px-6 pb-20 bg-white">
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
          {[
            { label: 'Havan Kund – Fire Ritual', sub: 'Sacred fire ritual performed at NIK ASTRO', image: '/havan-kund.jpg' },
            { label: 'Devi Puja Setup', sub: 'Goddess worship with flowers & diyas', image: '/devi-puja-setup.jpg' },
          ].map((img) => (
            <div key={img.label} className="rounded-[18px] overflow-hidden border border-cream-border shadow-[0_4px_20px_rgba(184,134,11,0.08)]">
              <Image src={img.image} alt={img.label} width={800} height={500} />
              <div className="p-3.5 px-[18px] pb-4 bg-white">
                <p className="font-serif text-[15px] font-semibold text-ink mb-1">{img.label}</p>
                <p className="font-sans text-[12.5px] text-[#a89060]">{img.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-10 md:py-16 px-6 bg-white">
        <div className="max-w-[1000px] mx-auto">
          <div className="mb-13 text-center">
            <p className="section-label">The Process</p>
            <h2 className="text-[34px] md:text-[40px]">How Remedies Work</h2>
            <div className="section-divider" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {steps.map((s, i) => (
              <div
                key={s.n}
                className={cn(
                  'relative overflow-hidden rounded-[16px] p-[26px]',
                  i === 3
                    ? 'bg-gradient-to-br from-[#1e1a0f] to-[#2a2210]'
                    : 'bg-[#fffdf7] border border-cream-border'
                )}
              >
                <span className={cn('absolute top-[-4px] right-2.5 font-serif text-[64px] font-bold', i === 3 ? 'text-white/[0.05]' : 'text-black/[0.04]')}>{s.n}</span>
                <div className="icon-box w-8 h-8 mb-3.5 relative">
                  <span className="font-sans text-xs font-bold text-subtle-gold">{s.n}</span>
                </div>
                <h4 className={cn('mb-2 font-serif text-[15px] font-semibold leading-snug', i === 3 ? 'text-[#f0e8c8]' : 'text-ink')}>{s.title}</h4>
                <p className={cn('font-sans text-[13px] leading-[1.65]', i === 3 ? 'text-[#a89060]' : 'text-body-text')}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 md:py-16 px-6 bg-gradient-to-br from-[#0e0c08] to-[#1e1a0f]">
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="font-sans text-[11px] uppercase tracking-[3px] text-gold mb-3">Why It Works</p>
            <h2 className="text-[32px] md:text-[38px] text-[#f0e8c8] leading-[1.25] mb-4">
              Benefits of Pujas &amp; <span className="text-[#c9a84c] italic">Remedies</span>
            </h2>
            <div className="section-divider-left mb-6" />
            <p className="font-sans text-[15px] leading-[1.8] text-[#a89060] mb-8">
              Pujas and remedies work best when combined with consistent practice and the right mindset. All Pujas are performed by Nikhil Ji himself — with complete dedication and following proper Vedic procedures.
            </p>
            <a href="https://wa.me/918377844158" target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
              <FaWhatsapp className="text-[19px]" />
              Get Your Remedy Plan
            </a>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {benefits.map((b) => (
              <div key={b} className="bg-[rgba(255,253,247,0.04)] border border-[rgba(184,134,11,0.15)] rounded-[12px] p-3.5 flex items-start gap-2.5">
                <FaCheckCircle className="text-gold text-[12px] mt-0.5 shrink-0" />
                <span className="font-sans text-[13px] text-[#a89060] leading-[1.5]">{b}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pt-15 pb-20 px-6 bg-[#fffdf7]">
        <div className="max-w-[900px] mx-auto">
          <div className="bg-white rounded-[18px] border border-cream-border border-l-[4px] border-l-gold p-8 px-9 flex gap-5 items-start">
            <div className="icon-box w-11 h-11 shrink-0">
              <MdVerified className="text-subtle-gold text-[20px]" />
            </div>
            <div>
              <h3 className="font-serif text-xl font-semibold text-ink mb-2.5">Important Note</h3>
              <p className="font-sans text-[14.5px] text-body-text leading-[1.78] mb-3">
                While Pujas and remedies are powerful tools, they work best when combined with positive actions, the correct mindset, and consistent dedication. Nikhil Ji recommends following the remedies continuously for best results.
              </p>
              <p className="font-sans text-[14.5px] text-body-text leading-[1.78]">
                All Pujas are performed by Nikhil Ji himself with complete dedication, following proper Vedic procedures. Each Puja is <strong className="text-[#3a2e10] font-semibold">customized</strong> based on your specific needs and planetary conditions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-16 px-6 bg-gradient-to-br from-[#0e0c08] to-[#1e1a0f] text-center">
        <div className="max-w-[560px] mx-auto">
          <div className="mb-5 flex justify-center gap-1.5">
            {[1, 2, 3, 4, 5].map((n) => <FaStar key={n} className="text-gold text-[14px]" />)}
          </div>
          <h2 className="mb-4 text-[34px] md:text-[40px] text-white leading-[1.2]">
            Get Your <span className="text-[#c9a84c] italic">Custom Remedy Plan</span>
          </h2>
          <p className="mb-9 font-sans text-[15px] leading-[1.75] text-[#a89060]">
            Connect with Nikhil Ji on WhatsApp to receive a personalized remedy plan — Puja, Yantra, Kavach, or Mantra — tailored precisely to your birth chart.
          </p>
          <a href="https://wa.me/918377844158" target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
            <FaWhatsapp className="text-[20px]" />
            Book Consultation
          </a>
          <p className="mt-4 font-sans text-[#5a4e35] text-[12.5px]">+91 83778 44158 · All Pujas performed by Nikhil Ji personally</p>
        </div>
      </section>
    </main>
  )
}
import {
  FaWhatsapp, FaStar, FaCheckCircle, 
} from 'react-icons/fa'
import { MdVerified, MdWarning } from 'react-icons/md'
import {
  GiStarShuriken, GiTriquetra, GiShield, GiCrystalBall,
  GiScrollUnfurled,  GiFireflake, GiAngelWings,
  GiSpiralHilt, GiBrokenShield, GiHealing, GiBrain,
  GiHeartburn, GiMoon,
} from 'react-icons/gi'
import { cn } from '@/lib/utils'

export const metadata = {
  title: 'Tantra Removal – NIK ASTRO',
  description:
    'Professional Tantra diagnosis and removal by Jyotish Acharya Nikhil Ji using Ramal Jyotish, Prashn Jyotish, and specialized methods from Ujjain, Kashi & Himachal Pradesh.',
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const signs = [
  { icon: GiBrokenShield, label: 'Sudden health issues without any medical cause' },
  { icon: GiHeartburn, label: 'Unexplained relationship conflicts and tensions' },
  { icon: GiSpiralHilt, label: 'Persistent obstacles in business or career' },
  { icon: GiBrain, label: 'Unexplained fear, anxiety, or depression' },
  { icon: GiCrystalBall, label: 'Recurring financial troubles and sudden losses' },
  { icon: GiMoon, label: 'Bad dreams, disturbed sleep, night terrors' },
  { icon: GiFireflake, label: 'Constant fatigue, drained energy, weakness' },
  { icon: GiHealing, label: 'Family discord and tensions without reason' },
]

const kriyas = [
  {
    name: 'Maran Kriya',
    desc: 'A dark practice aimed at causing severe illness, accidents, or even death to the target. Requires immediate identification and counter-ritual.',
    severity: 'Extreme',
  },
  {
    name: 'Mohan Kriya',
    desc: 'Used to control or manipulate a person\'s mind — affecting decision-making, relationships, and emotional stability without their awareness.',
    severity: 'High',
  },
  {
    name: 'Uchatan Kriya',
    desc: 'Intended to create separation — breaking families, marriages, business partnerships, or friendships through negative tantric influence.',
    severity: 'High',
  },
  {
    name: 'Stambhan Kriya',
    desc: 'A blocking practice used to halt progress, freeze opportunities, and create an invisible wall against success in career and finances.',
    severity: 'Medium',
  },
]

const expertise = [
  {
    icon: GiScrollUnfurled,
    title: 'Ramal Jyotish & Prashn Jyotish',
    desc: 'Nikhil Ji uses specialized Ramal Jyotish and Prashn Jyotish — both precise diagnostic sciences — to determine whether Tantra is present, its type, intensity, and source.',
  },
  {
    icon: GiTriquetra,
    title: 'Learnt at Sacred Sources',
    desc: 'These methods were specifically learned by Nikhil Ji from practitioners in Himachal Pradesh, Ujjain, Dhatia, and Kashi — the most revered centers of tantric knowledge in India.',
  },
  {
    icon: GiShield,
    title: 'Complete Family Analysis',
    desc: 'For Tantra removal, details of all family members are required — not just the affected person. This allows Nikhil Ji to identify the exact nature, scope, and direction of the negative influence.',
  },
  {
    icon: GiAngelWings,
    title: 'Specialized Removal Procedures',
    desc: 'Once the Tantra type is identified, Nikhil Ji performs the appropriate removal procedures combining deep knowledge of Tantra, Mantra, and Yantra learned from multiple Gurus.',
  },
]

const steps = [
  {
    n: '01',
    title: 'WhatsApp Enquiry',
    desc: 'Message on WhatsApp: +91 83778 44158 and type "Tantra Removal Charges" to initiate the process.',
  },
  {
    n: '02',
    title: 'Initial Consultation',
    desc: 'Discuss your symptoms, concerns, and situation with Nikhil Ji. Share details of all family members.',
  },
  {
    n: '03',
    title: 'Diagnostic Analysis',
    desc: 'Nikhil Ji uses Ramal Jyotish, Prashn Jyotish, and other specialized methods to identify the exact type and intensity of Tantra.',
  },
  {
    n: '04',
    title: 'Removal & Protection',
    desc: 'Specialized procedures are performed. Post-removal, protective Yantras and Mantras are provided to prevent future attacks.',
  },
]

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function TantraRemoval() {
  return (
    <main className="bg-white text-ink">
      <section className="relative overflow-hidden bg-gradient-to-br from-[#080508] via-[#130f10] to-[#1a1012] py-[68px] px-6">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_55%_60%_at_75%_40%,rgba(139,26,26,0.14)_0%,transparent_70%)]" />
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle,rgba(184,134,11,0.04)_1px,transparent_1px)] bg-[length:24px_24px]" />
        <div className="relative max-w-[1100px] mx-auto">
          <div className="mb-[22px] flex items-center gap-2.5">
            <GiStarShuriken className="text-gold text-[13px]" />
            <span className="font-sans text-[11px] font-medium uppercase tracking-[3px] text-[#c9a84c]">NIK ASTRO · Occult Remedies</span>
          </div>
          <h1 className="mb-5 max-w-[620px] text-[40px] sm:text-[46px] md:text-[52px] leading-[1.12] text-white">
            Tantra <span className="text-[#c0392b] italic">Removal</span>
            <br />
            &amp; Protection
          </h1>
          <p className="mb-9 max-w-[560px] font-sans text-[16px] leading-[1.8] text-[#a89060]">
            Using <strong className="text-[#c9a84c] font-medium">Ramal Jyotish</strong>, Prashn Jyotish, and specialized methods learned from Himachal Pradesh, Ujjain, Dhatia, and Kashi — Nikhil Ji identifies the exact type of Tantra affecting you and performs the necessary removal procedures.
          </p>
          <div className="flex flex-wrap gap-3">
            {['Ramal & Prashn Jyotish Diagnosis', 'Learned from Ujjain & Kashi', 'Family-Level Analysis', 'Specialized Removal Procedures'].map((t) => (
              <span key={t} className="pill">{t}</span>
            ))}
          </div>
        </div>
      </section>

      <div className="bg-[#1a0f0f] border-b border-[#2a1010] py-3.5 px-6 flex justify-center">
        <div className="inline-flex items-center gap-2.5 font-sans text-[13.5px] text-[#e8a0a0]">
          <MdWarning className="text-[#c0392b] text-[17px] shrink-0" />
          <span>
            <strong className="font-semibold">Please Note:</strong> This is not a horoscope reading — only Tantra diagnosis and removal is discussed in this consultation.
          </span>
        </div>
      </div>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="section-label">Understanding the Subject</p>
            <h2 className="text-[34px] md:text-[40px]">What is Negative Tantra?</h2>
            <div className="section-divider-left mb-6" />
            <p className="mb-5 font-sans text-[15px] leading-[1.82] text-body-text">
              Tantra is a vast subject formulated by Mahadev for the betterment of humanity. While many aspects of Tantra are for positive spiritual upliftment, there is a part known as <strong className="text-[#8b1a1a] font-semibold">Abhichaar Karma</strong> — the negative side of Tantra.
            </p>
            <p className="mb-5 font-sans text-[15px] leading-[1.82] text-body-text">
              In present times where jealousy, competition, and hatred are prevalent, many of these Tantra Kriyas are misused — to give harmful effects on a person&apos;s health, wealth, relationships, and life. Common examples include <strong className="text-[#3a2e10] font-semibold">Maran, Mohan, Uchatan,</strong> and <strong className="text-[#3a2e10] font-semibold">Stambhan</strong> Kriyas.
            </p>
            <p className="font-sans text-[15px] leading-[1.82] text-body-text">
              Correctly identifying which kind of Tantra has been used, and then performing the right removal procedures, requires deep expertise — which is exactly what Nikhil Ji brings to this specialized consultation.
            </p>
          </div>

          <div className="rounded-[22px] p-9 border border-[#2a1010] bg-gradient-to-br from-[#0e0c08] to-[#1a1012]">
            <div className="mb-6 flex items-center gap-3">
              <div className="icon-box w-11 h-11">
                <GiTriquetra className="text-subtle-gold text-[20px]" />
              </div>
              <div>
                <p className="font-serif text-[18px] text-[#f0e8c8]">Abhichaar Karma</p>
                <p className="font-sans text-[11px] tracking-[1px] text-gold">NEGATIVE TANTRA — IDENTIFIED & REMOVED</p>
              </div>
            </div>
            <p className="mb-6 font-sans text-[14px] leading-[1.75] text-[#a89060]">
              Not all suffering has a physical cause. When conventional medicine and logic cannot explain a problem, the root may lie in Abhichaar Karma. Nikhil Ji&apos;s expertise lies in diagnosing exactly this — and removing it completely.
            </p>
            <div className="border-t border-[#2a1010] pt-5">
              {['Precise identification of Tantra type', 'Deep knowledge of counter-procedures', 'Post-removal protection provided', 'Family-level scope analysis'].map((pt) => (
                <div key={pt} className="mb-2.5 flex items-start gap-2">
                  <FaCheckCircle className="text-gold text-[11px] mt-0.5 shrink-0" />
                  <span className="font-sans text-[13px] text-[#a89060]">{pt}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20 px-6 bg-white">
        <div className="max-w-[1100px] mx-auto">
          <div className="text-center mb-12">
            <p className="section-label">Types of Negative Tantra</p>
            <h2 className="text-[34px] md:text-[40px]">Common Abhichaar Kriyas</h2>
            <div className="mx-auto mb-5 h-[2px] w-[52px] bg-gradient-to-r from-[#8b1a1a] to-[#c0392b]" />
            <p className="mx-auto max-w-[520px] font-sans text-[15px] leading-[1.75] text-body-text">
              Different Kriyas cause different types of harm. Proper identification is critical before any removal procedure can be performed.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {kriyas.map((k) => (
              <div key={k.name} className="bg-[#0e0c08] rounded-[16px] p-[26px] transition-all duration-300 border border-[rgba(139,26,26,0.3)] border-t-2 border-t-[#8b1a1a] hover:shadow-[0_8px_32px_rgba(139,26,26,0.2)] hover:-translate-y-1">
                <div className="mb-3.5 flex items-center justify-between">
                  <div className="bg-[rgba(139,26,26,0.15)] border border-[rgba(139,26,26,0.25)] w-10 h-10 rounded-[11px] flex items-center justify-center">
                    <GiFireflake className="text-[#c0392b] text-[17px]" />
                  </div>
                  <span className="bg-[rgba(139,26,26,0.12)] text-[#c0392b] border border-[rgba(139,26,26,0.25)] font-sans text-[10px] rounded-full px-3 py-1 uppercase tracking-[1px]">{k.severity}</span>
                </div>
                <h3 className="mt-3.5 mb-2.5 font-serif text-xl font-semibold text-[#f0e8c8]">{k.name}</h3>
                <p className="font-sans text-[13px] text-[#a89060] leading-[1.68]">{k.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gradient-to-b from-[#fdfaf3] to-white">
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="section-label">Warning Signs</p>
            <h2 className="text-[34px] md:text-[40px]">Signs of Negative Tantra</h2>
            <div className="section-divider-left mb-6" />
            <p className="mb-8 font-sans text-[15px] leading-[1.8] text-body-text">
              These symptoms — especially when appearing together or without any logical medical or circumstantial explanation — may indicate the presence of negative Tantric influence.
            </p>
            <a href="https://wa.me/918377844158" target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
              <FaWhatsapp className="text-[19px]" />
              WhatsApp: Tantra Removal
            </a>
          </div>

          <div className="grid grid-cols-1 gap-2.5">
            {signs.map(({ icon: Icon, label }) => (
              <div key={label} className="bg-white rounded-[14px] border border-cream-border p-[18px] px-5 flex items-start gap-3.5 hover:shadow-[0_6px_24px_rgba(139,26,26,0.1)] hover:-translate-y-0.5 transition-all duration-300">
                <div className="bg-[rgba(139,26,26,0.08)] border border-[rgba(139,26,26,0.2)] rounded-[11px] w-[38px] h-[38px] flex items-center justify-center shrink-0">
                  <Icon className="text-[#c0392b] text-[15px]" />
                </div>
                <p className="font-sans text-[14px] text-[#3a2e10] leading-[1.55] pt-0.5">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1100px] mx-auto">
          <div className="text-center mb-13">
            <p className="section-label">Nikhil Ji&apos;s Approach</p>
            <h2 className="text-[34px] md:text-[40px]">Specialized <span className="italic text-gold">Expertise</span></h2>
            <div className="section-divider mb-5" />
            <p className="mx-auto max-w-[560px] font-sans text-[15px] leading-[1.75] text-body-text">
              Nikhil Ji combines Ramal Jyotish, Prashn Jyotish, and methods specifically learnt from Himachal Pradesh, Ujjain, Dhatia, and Kashi to ascertain what kind of Tantra is done on a client.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {expertise.map((e) => {
              const Icon = e.icon
              return (
                <div key={e.title} className="bg-[#fffdf7] rounded-[16px] border border-cream-border border-l-[3px] border-l-gold p-[26px] hover:shadow-[0_8px_28px_rgba(184,134,11,0.1)] hover:-translate-y-0.5 transition-all">
                  <div className="flex gap-3.5 items-start">
                    <div className="icon-box w-11 h-11">
                      <Icon className="text-subtle-gold text-[19px]" />
                    </div>
                    <div>
                      <h3 className="font-serif text-xl font-semibold text-ink mb-2">{e.title}</h3>
                      <p className="font-sans text-[14px] text-body-text leading-[1.72]">{e.desc}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gradient-to-b from-[#fdfaf3] to-white">
        <div className="max-w-[1000px] mx-auto">
          <div className="text-center mb-13">
            <p className="section-label">The Process</p>
            <h2 className="text-[34px] md:text-[40px]">How to Proceed</h2>
            <div className="section-divider" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {steps.map((s, i) => (
              <div
                key={s.n}
                className={cn(
                  'relative overflow-hidden rounded-[16px] p-[26px]',
                  i === 3 ? 'bg-gradient-to-br from-[#1e1a0f] to-[#2a2210]' : 'bg-[#fffdf7] border border-cream-border'
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

      <section className="pb-20 px-6 bg-white">
        <div className="max-w-[900px] mx-auto flex flex-col gap-4">
          <div className="bg-[#fffdf7] rounded-[16px] border border-cream-border border-l-[4px] border-l-gold p-7 px-8 flex gap-[18px] items-start">
            <div className="icon-box w-[42px] h-[42px] shrink-0">
              <MdVerified className="text-subtle-gold text-[18px]" />
            </div>
            <div>
              <h3 className="font-serif text-[19px] font-semibold text-ink mb-2">Important Note — Consultation Scope</h3>
              <p className="font-sans text-[14.5px] text-body-text leading-[1.78]">
                This consultation focuses <strong className="text-[#3a2e10] font-semibold">exclusively on Tantra diagnosis and removal</strong>. No other aspects of the horoscope will be discussed. The service requires birth details and detailed information of all family members for accurate identification and removal.
              </p>
            </div>
          </div>

          <div className="bg-[#0e0c08] rounded-[16px] border border-[#2a1010] border-l-[4px] border-l-[#8b1a1a] p-7 px-8 flex gap-[18px] items-start">
            <div className="bg-[rgba(139,26,26,0.15)] border border-[rgba(139,26,26,0.25)] rounded-[11px] w-[42px] h-[42px] flex items-center justify-center shrink-0">
              <GiShield className="text-[#c0392b] text-[18px]" />
            </div>
            <div>
              <h3 className="font-serif text-[19px] font-semibold text-[#f0e8c8] mb-2">After Removal — Protection</h3>
              <p className="font-sans text-[14.5px] text-[#a89060] leading-[1.78]">
                Following Tantra removal, Nikhil Ji provides specific protective measures — Yantras, Mantras, and practices — to shield you and your family from future attacks and negative influences.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 text-center bg-gradient-to-br from-[#080508] to-[#130f10]">
        <div className="max-w-[560px] mx-auto">
          <div className="mb-5 flex justify-center gap-1.5">
            {[1, 2, 3, 4, 5].map((n) => <FaStar key={n} className="text-gold text-[14px]" />)}
          </div>
          <h2 className="mb-4 text-[34px] md:text-[40px] leading-[1.2] text-white">
            Seek Help from a <span className="text-[#c9a84c] italic">Specialist</span>
          </h2>
          <p className="mb-9 font-sans text-[15px] leading-[1.75] text-[#a89060]">
            If you suspect you or your family may be affected by negative Tantra, consult Nikhil Ji immediately. Message on WhatsApp and type <strong className="text-[#c9a84c] font-medium">&quot;Tantra Removal Charges&quot;</strong>.
          </p>
          <a href="https://wa.me/918377844158?text=Tantra%20Removal%20Charges" target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
            <FaWhatsapp className="text-[20px]" />
            WhatsApp: Tantra Removal Charges
          </a>
          <p className="font-sans text-[#5a4e35] text-[12.5px] mt-4">+91 83778 44158</p>
        </div>
      </section>
    </main>
  )
}
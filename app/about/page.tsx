
import {
  FaWhatsapp,
  FaCheckCircle,
  FaYoutube,
  FaAward,
  FaGraduationCap,
  FaStar,
  FaMapMarkerAlt,
  FaGlobe,
} from 'react-icons/fa'
import { MdVerified } from 'react-icons/md'
import { GiStarShuriken, GiYinYang, GiCrystalBall, GiScrollUnfurled } from 'react-icons/gi'

export const metadata = {
  title: 'About Nikhil Ji – Jyotish Acharya | NIK ASTRO',
  description:
    'Learn about Jyotish Acharya Nikhil Datyal – 20+ years of astrological practice, trained under Shri K.N. Rao, expert in Vedic Astrology, Tantra, Yantra & Mantra.',
}

const credentials = [
  { icon: FaGraduationCap, label: 'Jyotish Acharya', sub: 'Bhartiya Vidya Bhawan' },
  { icon: FaAward, label: 'Gold Medal', sub: 'Astrological Studies' },
  { icon: FaStar, label: '20+ Years', sub: 'Professional Practice' },
  { icon: FaYoutube, label: 'Silver Play Button', sub: 'YouTube Achievement' },
]

const branches = [
  'Vedic Jyotish (Parashari)',
  'Nadi Astrology',
  'Jaimini Astrology',
  'Prashn Jyotish',
  'Astro Vastu',
  'Ramal Jyotish',
]

const occultFields = [
  'Tantra Sadhna',
  'Mantra Vidya',
  'Yantra & Pran Pratishtha',
  'Shaiva / Shakti Parampara',
  '10 Mahavidyas',
  'Bhairav & Bhairavi Sadhna',
  'Karm Kand & Prohitya',
  'Sanskrit Studies',
]

const sacredPlaces = [
  { name: 'Ujjain', desc: 'Tantra & Mantra learning' },
  { name: 'Varanasi', desc: 'Diksha & advanced rituals' },
  { name: 'Haridwar', desc: 'Occult practices' },
  { name: 'Himachal Pradesh', desc: 'Regional occult traditions' },
  { name: 'Uttarakhand', desc: 'Spiritual immersion' },
  { name: 'Delhi', desc: 'Sanskrit Vidya Peeth' },
]

const services = [
  'Astrological Consultation & Kundali Analysis',
  'Kundali Milan (Marriage Compatibility)',
  'Muhurat – Auspicious Timing',
  'Tantra Removal & Protection',
  'Special Pujas and Remedies',
  'Special Kavach and Yantras',
  'Various Sadhnas & Spiritual Guidance',
]

const timeline = [
  {
    period: 'Legacy',
    title: 'Ancestral Gift',
    desc: 'Born into an astrological lineage — great grandfather Late Shri Ami Chand was a celebrated Jyotishi from Himachal Pradesh. Interest in occult sciences began in teenage years.',
  },
  {
    period: 'Early Career',
    title: 'United Kingdom',
    desc: 'Entered the Hospitality Industry and began working in the UK at age 21. Despite professional success, the pull of occult sciences was irresistible.',
  },
  {
    period: 'Return to India',
    title: 'Formal Jyotish Education',
    desc: 'Took admission at Bhartiya Vidya Bhawan. Studied under legendary astrologer Shri K.N. Rao Ji. Completed Jyotish Bhushan and Jyotish Acharya degrees with a Gold Medal.',
  },
  {
    period: 'Advanced Learning',
    title: 'Shri Suresh Chandra Mishr Ji',
    desc: 'Deepened practice under Shri Suresh Chandra Mishr Ji — author and translator of 100 books on astrology. Conducted research and published widely appreciated articles.',
  },
  {
    period: 'Occult Journey',
    title: 'Tantra, Yantra & Mantra',
    desc: 'Traveled to Ujjain, Varanasi, Haridwar and sacred sites across Himachal & Uttarakhand. Took Diksha from multiple Gurus. Mastered Pran Pratishtha of Yantras and Kavach.',
  },
  {
    period: 'Today',
    title: 'NIK ASTRO',
    desc: 'Serving thousands globally through astrological consultation, special Pujas, Yantras, Sadhnas, and occult remedies. YouTube Silver Play Button awardee with millions of views.',
  },
]

export default function About() {
  return (
    <main className="bg-white text-ink">
      <section className="relative overflow-hidden bg-gradient-to-br from-[#080608] via-[#12100a] to-[#1a1508] py-[68px] px-6">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_55%_60%_at_80%_40%,rgba(184,134,11,0.12)_0%,transparent_70%)]" />
        <div className="relative mx-auto max-w-[1100px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="mb-5 flex items-center gap-2.5">
                <GiStarShuriken className="text-gold text-[13px]" />
                <span className="font-sans text-[11px] tracking-[3px] uppercase text-[#c9a84c]">NIK ASTRO · Gurugram</span>
              </div>
              <h1 className="mb-5 text-white text-[44px] md:text-[52px] leading-[1.12]">
                Jyotish Acharya
                <br />
                <span className="text-gold italic">Nikhil Datyal</span>
              </h1>
              <p className="mb-8 max-w-[500px] text-[16px] leading-[1.8] text-[#a89060]">
                Popularly known as <strong className="font-semibold text-[#c9a84c]">Astro Guru Nikhil</strong> — over 20 years of classical
                Jyotish practice, deep occult knowledge, and a legacy of astrological wisdom passed down through generations.
              </p>
              <div className="flex flex-wrap gap-3">
                {['20+ Years Practice', 'Jyotish Acharya Degree', 'K.N. Rao Disciple', 'YouTube Silver Play'].map((tag) => (
                  <span key={tag} className="pill">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="rounded-[20px] border border-[rgba(184,134,11,0.25)] bg-[#111] overflow-hidden">
              <div className="aspect-[3/4] bg-gradient-to-br from-[#18140b] to-[#0f0d08] relative flex items-center justify-center">
                <GiCrystalBall className="text-gold/35 text-4xl" />
                <span className="absolute bottom-4 font-sans text-[11px] uppercase tracking-[2px] text-[#c9a84c]">Nikhil Ji Photo</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#fffdf5] border-b border-[#f0e8c8] py-10 px-6">
        <div className="mx-auto max-w-[1100px] grid grid-cols-2 lg:grid-cols-4 gap-5">
          {credentials.map(({ icon: Icon, label, sub }) => (
            <div key={label} className="flex items-center gap-3.5">
              <div className="icon-box w-11 h-11">
                <Icon className="text-subtle-gold text-[18px]" />
              </div>
              <div>
                <p className="font-serif text-base font-semibold text-ink">{label}</p>
                <p className="font-sans text-xs text-[#a89060]">{sub}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-[72px] px-6 bg-white text-center">
        <div className="w-px h-[52px] bg-gradient-to-b from-transparent to-gold mx-auto mb-7" />
        <blockquote className="font-serif text-[28px] italic text-[#2a2210] leading-[1.55] max-w-[820px] mx-auto">
          "Astrology is not magic — it is a magical tool that guides people out of their problems and helps them live life to its full potential."
        </blockquote>
        <div className="mt-8 flex items-center justify-center gap-3">
          <div className="h-px w-10 bg-gradient-to-r from-transparent to-gold" />
          <MdVerified className="text-gold text-[16px]" />
          <span className="font-sans text-[13px] uppercase tracking-[1.5px] text-gold">Jyotish Acharya Nikhil</span>
          <div className="h-px w-10 bg-gradient-to-r from-gold to-transparent" />
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="mx-auto max-w-[1100px]">
          <div className="mb-12 text-center">
            <p className="section-label">Life & Learning</p>
            <h2 className="text-[38px] md:text-[42px]">The Journey</h2>
            <div className="section-divider" />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              {timeline.map((item, i) => (
                <div key={item.title} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="h-3 w-3 rounded-full bg-gradient-to-br from-gold to-gold-light mt-1.5 shadow-[0_0_0_3px_rgba(184,134,11,0.15)]" />
                    {i < timeline.length - 1 && <div className="w-px bg-gradient-to-b from-[#e8d080] to-transparent flex-1 min-h-7 ml-[5.5px]" />}
                  </div>
                  <div className={i < timeline.length - 1 ? 'pb-7' : ''}>
                    <span className="pill mb-2">{item.period}</span>
                    <h3 className="font-serif text-[20px] text-ink mb-1">{item.title}</h3>
                    <p className="font-sans text-[14px] leading-[1.72] text-body-text">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-5">
              <div className="rounded-[18px] border border-[#f0ebe0] overflow-hidden">
                <div className="aspect-[4/3] bg-gradient-to-br from-[#f7f2e8] to-[#ede6d6] relative flex items-center justify-center">
                  <GiScrollUnfurled className="text-gold/35 text-3xl" />
                  <span className="absolute bottom-4 font-sans text-[11px] uppercase tracking-[2px] text-[#c9a84c]">Learning / Study Image</span>
                </div>
              </div>
              <div className="bg-[#fffdf7] border-l-[3px] border-l-gold rounded-[16px] p-6 border border-[#f0e8c8]">
                <h3 className="font-serif text-[21px] mb-2">Trained by Legends</h3>
                <p className="font-sans text-[14px] leading-[1.72] text-body-text">
                  Nikhil Ji had the rare fortune of learning under <strong className="text-[#3a2e10]">Shri K.N. Rao Ji</strong> and later deepened his
                  knowledge under <strong className="text-[#3a2e10]">Shri Suresh Chandra Mishr Ji</strong>, author and translator of over 100 books on
                  astrology.
                </p>
              </div>
              <div className="bg-[#fffdf7] border-l-[3px] border-l-gold rounded-[16px] p-6 border border-[#f0e8c8]">
                <h3 className="font-serif text-[21px] mb-2">Research & Writing</h3>
                <p className="font-sans text-[14px] leading-[1.72] text-body-text">
                  Participated in research classes at Bhartiya Vidya Bhavan and authored multiple research articles on astrology, widely appreciated
                  within the astrological fraternity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gradient-to-b from-[#fdfaf3] to-white">
        <div className="mx-auto max-w-[1100px] grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="section-label">Areas of Mastery</p>
            <h2 className="text-[38px] md:text-[42px]">Branches of Astrology</h2>
            <div className="section-divider-left" />
            <p className="font-sans text-[15px] leading-[1.8] text-body-text mb-7">
              Nikhil Ji believes astrology is a vast ocean — never-ending in its depth. Beyond classical Parashari Jyotish, he has mastered several
              advanced branches and combines all of them while providing guidance.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {branches.map((branch) => (
                <div key={branch} className="flex items-start gap-2.5">
                  <FaCheckCircle className="text-gold text-[13px] mt-1" />
                  <span className="font-sans text-[14px] text-[#3a2e10]">{branch}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[18px] border border-[#f0ebe0] overflow-hidden">
            <div className="aspect-[4/3] bg-gradient-to-br from-[#f7f2e8] to-[#ede6d6] relative flex items-center justify-center">
              <GiYinYang className="text-gold/35 text-4xl" />
              <span className="absolute bottom-4 font-sans text-[11px] uppercase tracking-[2px] text-[#c9a84c]">Astrology Image</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="mx-auto max-w-[1100px]">
          <div className="text-center mb-12">
            <p className="section-label">Beyond Astrology</p>
            <h2 className="text-[38px] md:text-[42px]">Occult & Spiritual Expertise</h2>
            <div className="section-divider" />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div>
              <div className="rounded-[18px] border border-[#f0ebe0] overflow-hidden mb-6">
                <div className="aspect-[16/9] bg-gradient-to-br from-[#f7f2e8] to-[#ede6d6] relative flex items-center justify-center">
                  <GiCrystalBall className="text-gold/35 text-3xl" />
                  <span className="absolute bottom-4 font-sans text-[11px] uppercase tracking-[2px] text-[#c9a84c]">Occult / Spiritual Image</span>
                </div>
              </div>
              <div className="bg-[#0e0c08] rounded-[16px] p-7 border border-[#2a2210]">
                <h3 className="font-serif text-[21px] text-[#f0e8c8] mb-5">Fields of Mastery</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2.5">
                  {occultFields.map((field) => (
                    <div key={field} className="flex items-start gap-2.5">
                      <FaCheckCircle className="text-gold text-[11px] mt-1" />
                      <span className="font-sans text-[13px] text-[#a89060]">{field}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div>
                <h3 className="text-[30px] mb-2">Sacred Places of Learning</h3>
                <div className="section-divider-left mb-5" />
                <div className="grid grid-cols-3 gap-3">
                  {sacredPlaces.map((place) => (
                    <div key={place.name} className="rounded-[12px] border border-[#f0e8c8] border-t-2 border-t-gold bg-[#fffdf7] p-3.5">
                      <div className="mb-1.5 flex items-center gap-1.5">
                        <FaMapMarkerAlt className="text-gold text-[11px]" />
                        <p className="font-serif text-[16px] text-ink">{place.name}</p>
                      </div>
                      <p className="font-sans text-[12px] text-[#a89060] leading-[1.5]">{place.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-[#fffdf7] border-l-[3px] border-l-gold rounded-[16px] p-6 border border-[#f0e8c8]">
                <h3 className="font-serif text-[21px] mb-2">A Rare Combination</h3>
                <p className="font-sans text-[14px] leading-[1.72] text-body-text">
                  Nikhil Ji is one of the very few practitioners who truly knows the complete process of <strong className="text-[#3a2e10]">Pran
                  Pratishtha</strong> of Yantras, Kavach, and sacred items — and who effectively combines <strong className="text-[#3a2e10]">Mantra,
                  Tantra, and Yantra</strong> in remedies for clients.
                </p>
              </div>
              <div className="bg-[#fffdf7] border-l-[3px] border-l-gold rounded-[16px] p-6 border border-[#f0e8c8]">
                <h3 className="font-serif text-[21px] mb-2">Shaiva – Shakti Parampara</h3>
                <p className="font-sans text-[14px] leading-[1.72] text-body-text">
                  A devoted practitioner of Shiv and Shakti traditions — including Bhairav, Bhairavi, and the 10 Mahavidyas. Took formal Diksha from
                  multiple Gurus in Varanasi and Ujjain.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gradient-to-b from-[#fdfaf3] to-white">
        <div className="mx-auto max-w-[1100px] grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="section-label">Professional Services</p>
            <h2 className="text-[38px] md:text-[42px]">How Nikhil Ji Can Help You</h2>
            <div className="section-divider-left mb-7" />
            <p className="font-sans text-[15px] leading-[1.8] text-body-text mb-7">
              Drawing on 20+ years of practice, Nikhil Ji offers a comprehensive range of astrological and occult services — each conducted personally
              by him.
            </p>
            <div className="space-y-2.5">
              {services.map((service) => (
                <div key={service} className="flex items-start gap-2.5">
                  <div className="icon-box w-6 h-6 mt-0.5">
                    <FaCheckCircle className="text-subtle-gold text-[10px]" />
                  </div>
                  <span className="font-sans text-[14.5px] text-[#3a2e10]">{service}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[18px] border border-[#f0ebe0] overflow-hidden">
            <div className="aspect-[3/4] bg-gradient-to-br from-[#f7f2e8] to-[#ede6d6] relative flex items-center justify-center">
              <GiScrollUnfurled className="text-gold/35 text-3xl" />
              <span className="absolute bottom-4 font-sans text-[11px] uppercase tracking-[2px] text-[#c9a84c]">Services / Consultation Image</span>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pb-20 bg-white">
        <div className="mx-auto max-w-[1100px] bg-gradient-to-br from-[#0e0c08] to-[#1e1a0f] rounded-[24px] overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="py-[52px] px-10">
              <div className="mb-5 flex items-center gap-2.5">
                <FaYoutube className="text-[#ff0000] text-[22px]" />
                <span className="font-sans text-[11px] tracking-[2.5px] uppercase text-[#a89060]">YouTube & Social Media</span>
              </div>
              <h2 className="mb-4 text-[32px] leading-[1.25] text-[#f0e8c8]">
                Globally <span className="italic text-[#c9a84c]">Recognised</span>
              </h2>
              <p className="mb-7 font-sans text-[14.5px] leading-[1.8] text-[#a89060]">
                Nikhil Ji&apos;s teachings reach millions worldwide. His YouTube channel earned the <strong className="text-[#c9a84c]">Silver Play
                Button</strong> — a testament to the trust people place in his guidance on astrology and spiritual practices.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-2 rounded-full border border-[rgba(255,255,255,0.12)] bg-[rgba(255,255,255,0.04)] px-4 py-2 font-sans text-[13px] text-[#a89060]">
                  <FaYoutube className="text-[#ff0000] text-[14px]" />
                  Silver Play Button
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-[rgba(255,255,255,0.12)] bg-[rgba(255,255,255,0.04)] px-4 py-2 font-sans text-[13px] text-[#a89060]">
                  <FaGlobe className="text-gold text-[14px]" />
                  Global Reach
                </span>
              </div>
            </div>
            <div className="relative min-h-[280px] bg-gradient-to-br from-[#19140c] to-[#0d0b07] flex items-center justify-center">
              <div className="absolute inset-0 bg-black/20" />
              <FaYoutube className="relative z-10 text-white/25 text-5xl" />
              <span className="absolute bottom-5 z-10 font-sans text-[11px] uppercase tracking-[2px] text-[#5a4e35]">YouTube / Social Image</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gradient-to-br from-[#0e0c08] via-[#1e1a0f] to-[#261f0e]">
        <div className="mx-auto max-w-[560px] text-center">
          <div className="mb-5 flex justify-center gap-1.5">
            {[1, 2, 3, 4, 5].map((n) => (
              <FaStar key={n} className="text-gold text-[14px]" />
            ))}
          </div>
          <h2 className="mb-3 text-white text-[36px] md:text-[40px] leading-[1.2]">
            Consult <span className="text-[#c9a84c] italic">Nikhil Ji</span> Personally
          </h2>
          <p className="mb-9 font-sans text-[15px] leading-[1.75] text-[#a89060]">
            All consultations are conducted personally by Nikhil Ji. Connect on WhatsApp to discuss your concerns and book your session.
          </p>
          <a
            href="https://wa.me/918377844158"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-gradient-to-br from-[#25d366] to-[#1ab854] text-white px-8 py-3.5 rounded-full font-semibold text-[15px] shadow-[0_4px_20px_rgba(37,211,102,0.35)] hover:-translate-y-0.5 transition-all duration-300"
          >
            <FaWhatsapp className="text-[20px]" />
            Message on WhatsApp
          </a>
          <p className="mt-4 font-sans text-[12.5px] text-[#5a4e35]">+91 83778 44158</p>
        </div>
      </section>
    </main>
  )
}
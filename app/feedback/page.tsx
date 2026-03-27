import {
  FaWhatsapp, FaStar, FaFacebook, FaQuoteLeft,
  FaPlay, FaMapMarkerAlt, FaCheckCircle
} from 'react-icons/fa'
import { MdVerified } from 'react-icons/md'
import { GiStarShuriken } from 'react-icons/gi'

export const metadata = {
  title: 'Client Feedback & Reviews – NIK ASTRO',
  description:
    'Real testimonials, video reviews, and WhatsApp feedback from clients of Jyotish Acharya Nikhil Ji — NIK ASTRO, Gurugram.',
}

// ─── Data ────────────────────────────────────────────────────────────────────

const stats = [
  { value: '5000+', label: 'Consultations Done' },
  { value: '20+', label: 'Years of Practice' },
  { value: '4.9★', label: 'Average Rating' },
  { value: 'Global', label: 'Clients Worldwide' },
]

// Video review placeholders — replace src with actual YouTube embed URLs
const videoReviews = [
  { id: 1, label: 'Client Video Review 1' },
  { id: 2, label: 'Client Video Review 2' },
  { id: 3, label: 'Client Video Review 3' },
  { id: 4, label: 'Client Video Review 4' },
  { id: 5, label: 'Client Video Review 5' },
  { id: 6, label: 'Client Video Review 6' },
]

const facebookReviews = [
  {
    name: 'Nidhi Shreshtha',
    location: 'Bangalore, India',
    date: '1 March',
    text: 'I consult Nikhil Ji on regular basis — he is a very good astrologer who always gives good advice and proper time. I was having a problem in my personal life and he arranged a special puja for me and sent me an energized Rudraksha. It really helped me. Thanks Nik-Astro!',
  },
  {
    name: 'Ankita Rajput',
    location: 'Delhi, India',
    date: '27 February',
    text: 'I was facing a lot of health issues. I consulted Nikhil Ji — he did a puja for me and also made a Kavach. I feel so relieved now and my health has improved a lot. If you are facing any problem in life, just consult Nik-Astro / Nikhil Ji.',
  },
  {
    name: 'Saumya',
    location: 'Pune, India',
    date: 'Recent',
    text: 'Thanks for your patience with me and for giving me real good remedies. You are a real astrologer. Thanks a lot Sir. I need consultancy for my son\'s health too. Again thanks Sir — God bless you.',
  },
  {
    name: 'Varun',
    location: 'Faridabad, India',
    date: 'Recent',
    text: 'Though I waited 4 days for my report, after getting it — it was absolutely worth the wait. The remedies you gave, I will follow them. Again, thanks for your guidance. Really thankful from the core of my heart.',
  },
]

const whatsappReviews = [
  {
    name: 'Verified Client',
    topic: 'Health & Career',
    text: 'I got the puja and anushthan done by Nikhil Ji in May 2024, as I was facing lots of health issues and stability in job as well. Nikhil Ji suggested some Yantras and Kavach for me. Now after few months of puja, I can say life is coming back on track, health is much better now, everything going good at the job front. Please say my special thanks to Nikhil Ji for helping me out of the tough situation, thank you again.',
  },
  {
    name: 'Santosh Ch.',
    topic: 'Accuracy of Predictions',
    text: 'Your all predictions are correct. I wish my friend had given ur contact earlier. Sir can I call u — I have to ask about something. I have received both. Thanks Sir.',
  },
  {
    name: 'Team Message',
    topic: 'Predictions & Guidance',
    text: 'HI TEAM, Please pass my message to Nikhil Ji and please say my special thanks to him. All his predictions for upcoming time were absolutely spot on. He said by September I will get a new job and at a better position.',
  },
  {
    name: 'Verified Client',
    topic: 'Life Guidance',
    text: 'It was in my mind for past many days. You told that very specifically. Thanks for your patience with me and thanks for real good guidance. You are a real astrologer — thanks a lot Sir.',
  },
]

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Feedback() {
  return (
    <main className="bg-white text-ink">
      <section className="relative overflow-hidden bg-gradient-to-br from-[#080608] via-[#12100a] to-[#1a1508] py-[68px] px-6">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_55%_60%_at_75%_40%,rgba(184,134,11,0.11)_0%,transparent_70%)]" />
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle,rgba(184,134,11,0.04)_1px,transparent_1px)] bg-[length:24px_24px]" />
        <div className="relative max-w-[1100px] mx-auto">
          <div className="mb-[22px] flex items-center gap-2.5">
            <GiStarShuriken className="text-gold text-[13px]" />
            <span className="font-sans text-[11px] font-medium uppercase tracking-[3px] text-[#c9a84c]">NIK ASTRO · Testimonials</span>
          </div>
          <h1 className="mb-5 max-w-[700px] text-[40px] sm:text-[46px] md:text-[52px] leading-[1.12] text-white">
            Client <span className="text-[#c9a84c] italic">Feedback</span>
            <br />
            & Reviews
          </h1>
          <p className="mb-8 max-w-[520px] font-sans text-[16px] leading-[1.8] text-[#a89060]">
            Real words from real people — video reviews, WhatsApp messages, and Facebook testimonials from clients who have experienced transformation through Nikhil Ji&apos;s guidance.
          </p>
          <div className="flex gap-1.5">
            {[1, 2, 3, 4, 5].map((n) => <FaStar key={n} className="text-gold text-[18px]" />)}
          </div>
          <p className="mt-3 font-sans text-[#a89060] text-[14px]">Trusted by thousands across India & worldwide</p>
        </div>
      </section>

      <section className="bg-[#fffdf5] border-b border-[#f0e8c8] py-8 px-6">
        <div className="max-w-[1100px] mx-auto grid grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map(({ value, label }) => (
            <div key={label} className="text-center">
              <p className="font-serif text-[32px] font-bold text-gold leading-none">{value}</p>
              <p className="mt-1.5 font-sans text-[13px] text-[#a89060]">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-10 md:py-16 px-6 bg-white">
        <div className="max-w-[1100px] mx-auto">
          <div className="mb-13 text-center">
            <p className="section-label">Watch & Listen</p>
            <h2 className="text-[34px] md:text-[40px]">Video Reviews</h2>
            <div className="section-divider mb-5" />
            <p className="mx-auto max-w-[500px] font-sans text-[15px] leading-[1.75] text-body-text">
              Hear directly from clients — in their own words — about their experience with Nikhil Ji&apos;s consultations and remedies.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-[1100px] mx-auto">
            {videoReviews.map((v) => (
              <div key={v.id} className="group bg-white rounded-[16px] overflow-hidden border border-cream-border hover:shadow-gold hover:-translate-y-1 transition-all duration-300">
                <div className="aspect-video w-full relative overflow-hidden bg-gradient-to-br from-[#0e0c08] to-[#1e1a0f]">
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(184,134,11,0.07)_0%,transparent_70%)]" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                    <div className="w-[52px] h-[52px] rounded-full bg-[rgba(184,134,11,0.2)] border border-[rgba(184,134,11,0.5)] flex items-center justify-center transition-all duration-300 group-hover:bg-[rgba(184,134,11,0.35)] group-hover:border-gold">
                      <FaPlay className="text-[#c9a84c] text-[16px] ml-0.5" />
                    </div>
                    <span className="font-sans text-[11px] text-[#5a4e35] tracking-[1.5px] uppercase">Add Video Here</span>
                  </div>
                </div>
                <div className="p-3.5 px-4 pb-4">
                  <div className="mb-1.5 flex gap-1">
                    {[1, 2, 3, 4, 5].map((n) => <FaStar key={n} className="text-gold text-[11px]" />)}
                  </div>
                  <p className="flex items-center gap-1.5 font-sans text-[13px] text-body-text">
                    <MdVerified className="text-gold text-[13px]" />
                    {v.label}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-6 font-sans text-center text-[#a89060] text-[13px]">
            Replace placeholders with {'<iframe>'} YouTube embed tags when video URLs are ready.
          </p>
        </div>
      </section>

      <section className="py-10 md:py-16 px-6 bg-gradient-to-b from-[#fdfaf3] to-white">
        <div className="max-w-[1100px] mx-auto">
          <div className="mb-13 text-center">
            <p className="section-label">Direct Messages</p>
            <h2 className="text-[34px] md:text-[40px]">WhatsApp Feedback</h2>
            <div className="section-divider mb-5" />
            <p className="mx-auto max-w-[500px] font-sans text-[15px] leading-[1.75] text-body-text">
              Unfiltered messages from clients, shared directly on WhatsApp after experiencing results from consultations and remedies.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-[1100px] mx-auto">
            {whatsappReviews.map((w, i) => (
              <div key={`${w.name}-${i}`} className="bg-[#fffdf7] rounded-[16px] overflow-hidden border border-cream-border border-l-[3px] border-l-[#25d366] hover:shadow-gold hover:-translate-y-0.5 transition-all duration-300">
                <div className="bg-[#075e54] px-[18px] py-3.5 flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-full bg-[rgba(255,255,255,0.15)] flex items-center justify-center shrink-0">
                    <FaWhatsapp className="text-white text-[17px]" />
                  </div>
                  <div>
                    <p className="font-sans text-[13.5px] font-semibold text-white leading-tight">{w.name}</p>
                    <p className="font-sans text-[11px] text-[rgba(255,255,255,0.55)] mt-0.5">{w.topic}</p>
                  </div>
                  <MdVerified className="text-[#4dcc7a] text-[16px] ml-auto" />
                </div>
                <div className="p-5 pb-[22px]">
                  <div className="bg-[#f0f0f0] rounded-[0_12px_12px_12px] p-3 px-3.5">
                    <FaQuoteLeft className="text-gold text-[11px] opacity-60 mb-1.5 block" />
                    <p className="font-sans text-[14px] text-[#2a2a2a] leading-[1.65]">{w.text}</p>
                  </div>
                  <div className="flex justify-end gap-1 mt-2.5">
                    {[1, 2, 3, 4, 5].map((n) => <FaStar key={n} className="text-gold text-[11px]" />)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 md:py-16 px-6 bg-white">
        <div className="max-w-[1100px] mx-auto">
          <div className="mb-13 text-center">
            <div className="inline-flex items-center gap-2 bg-[#f0f2ff] border border-[#dbe0ff] rounded-full px-4 py-1.5 mb-4">
              <FaFacebook className="text-[#1877f2] text-[14px]" />
              <span className="font-sans text-[#1877f2] text-[12px] font-medium tracking-[0.5px]">Nik Astro · Puja Anushthan Kendra</span>
            </div>
            <p className="section-label">Facebook Reviews</p>
            <h2 className="text-[34px] md:text-[40px]">What Clients Say</h2>
            <div className="section-divider mb-5" />
            <p className="mx-auto max-w-[500px] font-sans text-[15px] leading-[1.75] text-body-text">
              Genuine reviews posted publicly by clients on the NIK ASTRO Facebook page.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-[1100px] mx-auto">
            {facebookReviews.map((r, i) => (
              <div key={`${r.name}-${i}`} className="bg-white rounded-[16px] border border-[#e8e8e8] p-7 hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] hover:-translate-y-0.5 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-[42px] h-[42px] rounded-full shrink-0 bg-gradient-to-br from-[#e8d5b0] to-[#f5e8cc] border border-[#e0d0a0] flex items-center justify-center">
                    <span className="font-serif text-[18px] font-semibold text-subtle-gold">{r.name[0]}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-1.5">
                      <p className="font-sans text-[14px] font-semibold text-ink">{r.name}</p>
                      <FaCheckCircle className="text-[#1877f2] text-[12px]" />
                    </div>
                    <div className="flex items-center gap-1.5 mt-0.5">
                      <FaFacebook className="text-[#1877f2] text-[10px]" />
                      <span className="font-sans text-[11px] text-[#8a8a8a]">Nik astro, puja anushthan kendra · {r.date}</span>
                    </div>
                  </div>
                  <div className="flex gap-1 ml-auto">
                    {[1, 2, 3, 4, 5].map((n) => <FaStar key={n} className="text-gold text-[12px]" />)}
                  </div>
                </div>
                <p className="font-sans text-[14.5px] text-[#3a3020] leading-[1.72] italic mb-4">&quot;{r.text}&quot;</p>
                <div className="flex items-center justify-between pt-3.5 border-t border-cream-border">
                  <div className="flex items-center gap-1.5">
                    <FaMapMarkerAlt className="text-gold text-[11px]" />
                    <span className="font-sans text-[12.5px] text-[#a89060]">{r.location}</span>
                  </div>
                  <span className="pill">Verified Client</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20 px-6 bg-white">
        <div className="max-w-[1100px] mx-auto">
          <div className="bg-gradient-to-br from-[#0e0c08] to-[#1e1a0f] rounded-[24px] flex flex-wrap items-center justify-between gap-7 p-12 px-10">
            <div>
              <div className="flex items-center gap-2.5 mb-3.5">
                <MdVerified className="text-gold text-[18px]" />
                <span className="text-gold font-sans text-[11px] uppercase tracking-[2px]">100% Authentic</span>
              </div>
              <h3 className="font-serif text-[28px] font-semibold text-[#f0e8c8] leading-snug mb-3">
                Every review is <span className="italic text-[#c9a84c]">genuine</span>
              </h3>
              <p className="font-sans text-[#a89060] text-[14.5px] leading-[1.75] max-w-[520px]">
                All feedback shown here is from real clients — unedited WhatsApp messages, public Facebook posts, and recorded video testimonials. Nikhil Ji&apos;s work speaks for itself.
              </p>
            </div>
            <a href="https://wa.me/918377844158" target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
              <FaWhatsapp className="text-[20px]" />
              Book Your Consultation
            </a>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-16 px-6 bg-gradient-to-br from-[#0e0c08] to-[#1e1a0f] text-center">
        <div className="max-w-[560px] mx-auto">
          <div className="mb-5 flex justify-center gap-1.5">
            {[1, 2, 3, 4, 5].map((n) => <FaStar key={n} className="text-gold text-[14px]" />)}
          </div>
          <h2 className="mb-4 text-[34px] md:text-[40px] text-white leading-[1.2]">
            Be Our Next <span className="text-[#c9a84c] italic">Success Story</span>
          </h2>
          <p className="mb-9 font-sans text-[15px] leading-[1.75] text-[#a89060]">
            Join thousands of clients who have found clarity, peace, and positive change through Nikhil Ji&apos;s guidance.
          </p>
          <a href="https://wa.me/918377844158" target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
            <FaWhatsapp className="text-[20px]" />
            Start Your Journey
          </a>
          <p className="mt-4 font-sans text-[#5a4e35] text-[12.5px]">+91 83778 44158 · All consultations by Nikhil Ji personally</p>
        </div>
      </section>
    </main>
  )
}
import Link from 'next/link'
import { FaWhatsapp, FaChevronRight, FaStar } from 'react-icons/fa'
import { GiStarShuriken } from 'react-icons/gi'

const quickLinks = [
  { label: 'Book Consultation', href: '/consultation' },
  { label: 'Puja & Remedies', href: '/puja-remedies' },
  { label: 'Sadhna Programs', href: '/sadhna' },
  { label: 'Client Feedback', href: '/feedback' },
]

export default function CTA() {
  return (
    <section className="relative overflow-hidden py-20 px-6 bg-gradient-to-br from-[#0e0c08] via-[#1e1a0f] to-[#261f0e]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_60%,rgba(184,134,11,0.09)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(184,134,11,0.04)_1px,transparent_1px)] bg-[length:28px_28px] pointer-events-none" />

      <div className="relative max-w-[1100px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex gap-[5px] mb-5">
              {[1, 2, 3, 4, 5].map(n => <FaStar key={n} className="text-gold text-sm" />)}
            </div>
            <h2 className="font-serif text-[46px] font-semibold text-white leading-[1.15] mb-[18px]">
              Ready for <span className="text-[#c9a84c] italic">Clarity</span>?
              <br />
              <span className="text-[36px]">Book Your Consultation</span>
            </h2>
            <p className="font-sans text-[15px] text-muted-gold leading-[1.8] mb-9">
              Connect with Jyotish Acharya Nikhil Ji personally on WhatsApp. All consultations are conducted by him directly — no staff, no automated responses.
            </p>
            <a
              href="https://wa.me/918377844158"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-gradient-to-br from-[#25d366] to-[#1ab854] text-white px-8 py-3.5 rounded-full font-semibold text-[15px] shadow-[0_4px_20px_rgba(37,211,102,0.35)] hover:-translate-y-0.5 transition-all duration-300"
            >
              <FaWhatsapp className="text-xl" />
              Message on WhatsApp
            </a>
            <p className="font-sans text-[12.5px] text-[#5a4e35] mt-[14px]">
              +91 83778 44158 · Charges shared on WhatsApp
            </p>
          </div>

          <div>
            <p className="font-sans text-[11px] text-gold tracking-[3px] uppercase mb-5">Explore Services</p>
            <div className="flex flex-col gap-3">
              {quickLinks.map(({ label, href }, i) => (
                <Link
                  key={i}
                  href={href}
                  className="flex justify-between items-center bg-[rgba(255,253,247,0.04)] border border-[rgba(184,134,11,0.15)] rounded-[14px] p-4 hover:bg-[rgba(255,253,247,0.08)] hover:border-[rgba(184,134,11,0.35)] hover:translate-x-1 transition-all duration-200"
                >
                  <div className="flex items-center gap-3">
                    <GiStarShuriken className="text-gold text-xs" />
                    <span className="font-serif text-[18px] font-semibold text-[#f0e8c8]">{label}</span>
                  </div>
                  <FaChevronRight className="text-gold text-xs" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
import Link from 'next/link'
import Image from 'next/image'
import { FaPhone, FaMapMarkerAlt, FaYoutube, FaFacebook, FaInstagram, FaWhatsapp, FaChevronRight } from 'react-icons/fa'
import { GiStarShuriken } from 'react-icons/gi'
import { MdVerified } from 'react-icons/md'

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Nikhil Ji', href: '/about' },
  { label: 'Book Consultation', href: '/consultation' },
  { label: 'Sadhna', href: '/sadhna' },
  { label: 'Client Feedback', href: '/feedback' },
]

const serviceLinks = [
  { label: 'Puja & Remedies', href: '/puja-remedies' },
  { label: 'Tantra Removal', href: '/tantra-removal' },
  { label: 'Kundali Milan', href: '/consultation' },
  { label: 'Astro Vastu', href: '/consultation' },
  { label: 'Contact Us', href: '/contact' },
]

const socials = [
  { icon: FaYoutube, href: 'https://www.youtube.com/', label: 'YouTube' },
  { icon: FaFacebook, href: 'https://www.facebook.com/', label: 'Facebook' },
  { icon: FaInstagram, href: 'https://www.instagram.com/', label: 'Instagram' },
]

export default function Footer() {
  return (
    <footer className="bg-[#0e0c08] border-t border-[#2a2210]">
      <div className="max-w-[1200px] mx-auto px-6 pt-12">
        <div className="bg-linear-to-br from-[rgba(184,134,11,0.12)] to-[rgba(184,134,11,0.05)] border border-[rgba(184,134,11,0.2)] rounded-[16px] px-7 py-6 flex items-center justify-between gap-5 flex-wrap">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <MdVerified className="text-[#b8860b] text-base" />
              <span className="font-['DM_Sans'] text-[11px] text-[#b8860b] tracking-[2px] uppercase">
                Personally Conducted
              </span>
            </div>
            <p className="font-['Cormorant_Garamond',Georgia,serif] text-[22px] font-semibold text-[#f0e8c8] leading-[1.3]">
              Ready to seek <span className="italic text-[#c9a84c]">clarity</span>? Book a consultation with Nikhil Ji.
            </p>
          </div>
          <a
            href="https://wa.me/918377844158"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp whitespace-nowrap px-6 py-3 text-sm"
          >
            <FaWhatsapp className="text-[18px]" />
            +91 83778 44158
          </a>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 py-[52px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-8">
        <div>
          <Link href="/" className="flex items-center gap-3 mb-5">
            <div className="relative w-[100px] h-[100px] rounded-full overflow-hidden border-[1.5px] border-[#b8860b] bg-white shrink-0 shadow-[0_2px_10px_rgba(184,134,11,0.25)]">
              <Image src="/logo.png" alt="NIK ASTRO logo" fill className="object-cover" />
            </div>
          
          </Link>

          <p className="font-['DM_Sans'] text-[13.5px] text-[#7a6840] leading-[1.75] max-w-[260px] mb-[22px]">
            I am Nikhil, Jyotish Acharya and founder of NIK ASTRO. Offering authentic astrological guidance rooted in classical Jyotish traditions.
          </p>

          <div className="flex gap-2.5">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-[38px] h-[38px] rounded-full flex items-center justify-center bg-[rgba(184,134,11,0.1)] border border-[rgba(184,134,11,0.2)] text-[#b8860b] hover:bg-[rgba(184,134,11,0.22)] hover:border-[#b8860b] hover:-translate-y-0.5 hover:shadow-[0_4px_14px_rgba(184,134,11,0.2)] transition-all"
              >
                <Icon className="text-[15px]" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="font-['Cormorant_Garamond',Georgia,serif] text-[18px] font-semibold text-[#f0e8c8] mb-1.5">
            Quick Links
          </p>
          <div className="w-10 h-[1.5px] bg-linear-to-r from-[#b8860b] to-[#f0c040] mb-[18px]" />
          <div className="flex flex-col gap-2.5">
            {quickLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="inline-flex items-center gap-2 font-['DM_Sans'] text-[13.5px] text-[#a89060] leading-[1.4] hover:text-[#f0c040] transition-colors group"
              >
                <FaChevronRight className="text-[9px] text-[#b8860b] shrink-0 group-hover:translate-x-[3px] transition-transform" />
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="font-['Cormorant_Garamond',Georgia,serif] text-[18px] font-semibold text-[#f0e8c8] mb-1.5">
            Services
          </p>
          <div className="w-10 h-[1.5px] bg-linear-to-r from-[#b8860b] to-[#f0c040] mb-[18px]" />
          <div className="flex flex-col gap-2.5">
            {serviceLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="inline-flex items-center gap-2 font-['DM_Sans'] text-[13.5px] text-[#a89060] leading-[1.4] hover:text-[#f0c040] transition-colors group"
              >
                <FaChevronRight className="text-[9px] text-[#b8860b] shrink-0 group-hover:translate-x-[3px] transition-transform" />
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="font-['Cormorant_Garamond',Georgia,serif] text-[18px] font-semibold text-[#f0e8c8] mb-1.5">
            Get in Touch
          </p>
          <div className="w-10 h-[1.5px] bg-linear-to-r from-[#b8860b] to-[#f0c040] mb-[18px]" />
          <div className="flex flex-col gap-4">
            <div className="flex gap-3 items-start">
              <div className="w-8 h-8 rounded-[8px] bg-[rgba(184,134,11,0.1)] flex items-center justify-center shrink-0">
                <FaMapMarkerAlt className="text-[#b8860b] text-[13px]" />
              </div>
              <p className="font-['DM_Sans'] text-[13px] text-[#a89060] leading-[1.65]">
                Sector 110A, Gurugram
                <br />
                Haryana 122017
              </p>
            </div>

            <div className="flex gap-3 items-center">
              <div className="w-8 h-8 rounded-[8px] bg-[rgba(184,134,11,0.1)] flex items-center justify-center shrink-0">
                <FaPhone className="text-[#b8860b] text-xs" />
              </div>
              <a href="tel:+918377844158" className="font-['DM_Sans'] text-[13.5px] text-[#a89060] hover:text-[#f0c040] transition-colors">
                +91 83778 44158
              </a>
            </div>

            <div className="flex gap-3 items-center">
              <div className="w-8 h-8 rounded-[8px] bg-[rgba(37,211,102,0.1)] flex items-center justify-center shrink-0">
                <FaWhatsapp className="text-[#25d366] text-[14px]" />
              </div>
              <a
                href="https://wa.me/918377844158"
                target="_blank"
                rel="noopener noreferrer"
                className="font-['DM_Sans'] text-[13.5px] text-[#a89060] hover:text-[#f0c040] transition-colors"
              >
                Message on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-6">
        <div className="border-t border-[#1e1a10] py-3 flex items-center justify-center">
          <div className="flex items-center gap-2.5 opacity-40">
            <div className="w-10 h-px bg-linear-to-r from-transparent to-[#b8860b]" />
            <GiStarShuriken className="text-[#b8860b] text-[10px]" />
            <div className="w-10 h-px bg-linear-to-r from-[#b8860b] to-transparent" />
          </div>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 pb-5 pt-3 flex flex-wrap justify-between items-center gap-2">
        <p className="font-['DM_Sans'] text-[12.5px] text-[#3a3020]">
          © 2026 NIK ASTRO. All rights reserved.
        </p>
        <p className="font-['DM_Sans'] text-[12.5px] text-[#3a3020] italic">
          Premium Astrology Consultation · Gurugram
        </p>
      </div>
    </footer>
  )
}
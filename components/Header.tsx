'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { FaBars, FaTimes, FaPhone, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa'
import { cn } from '@/lib/utils'

const menuItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Book Consultation', href: '/consultation' },
  { label: 'Sadhna', href: '/sadhna' },
  { label: 'Client Feedback', href: '/feedback' },
  { label: 'Puja & Remedies', href: '/puja-remedies' },
  { label: 'Tantra Removal', href: '/tantra-removal' },
  { label: 'Contact', href: '/contact' },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div>
      <div className="hidden md:block bg-[#0e0c08] border-b border-[#2a2210]">
        <div className="max-w-[1200px] mx-auto px-6 py-2 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-[#b8860b] text-xs" />
              <span className="font-['DM_Sans'] text-[12.5px] text-[#a89060] tracking-[0.3px]">
                Sector 110A, Gurugram, Haryana
              </span>
            </div>
            <span className="w-[3px] h-[3px] rounded-full bg-[#b8860b]/50" />
            <div className="flex items-center gap-2">
              <FaPhone className="text-[#b8860b] text-[11px]" />
              <a href="tel:+918377844158" className="font-['DM_Sans'] text-[12.5px] text-[#a89060]">
                +91 83778 44158
              </a>
            </div>
          </div>
          <a
            href="https://wa.me/918377844158"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 bg-[rgba(37,211,102,0.15)] border border-[rgba(37,211,102,0.25)] text-[#4dcc7a] px-3.5 py-1.5 rounded-full font-['DM_Sans'] text-[12.5px] font-medium transition-all"
          >
            <FaWhatsapp className="text-[13px]" />
            WhatsApp
          </a>
        </div>
      </div>

      <header
        className={cn(
          'sticky top-0 z-50 py-5 bg-[#fffdf7] border-b border-[#f0e8c8] backdrop-blur-md transition-all duration-300',
          scrolled
            ? 'shadow-[0_2px_20px_rgba(0,0,0,0.07)]'
            : 'shadow-[0_1px_0_#f0e8c8]'
        )}
      >
        <div className="max-w-[1200px] mx-auto px-6 h-[68px] flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-3 shrink-0 min-w-0">
            <div className="relative w-[100px] h-[100px] rounded-full overflow-hidden border border-[#e8d080] bg-white shrink-0 shadow-[0_2px_8px_rgba(184,134,11,0.15)]">
              <Image src="/logo.png" alt="NIK ASTRO logo" fill className="object-cover" priority />
            </div>

          </Link>

          <nav className="hidden min-[1100px]:flex items-center gap-1 flex-1 justify-center">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "font-['DM_Sans'] px-3 py-2 text-sm font-medium text-[#3a3020] hover:bg-[#fdf8ee] hover:text-[#b8860b] rounded-lg transition-all duration-200 whitespace-nowrap"
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href="https://wa.me/918377844158"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 bg-gradient-to-br from-[#25d366] to-[#1ab854] text-white px-4 py-2 rounded-full font-semibold text-sm shadow-[0_3px_12px_rgba(37,211,102,0.35)] hover:shadow-[0_5px_20px_rgba(37,211,102,0.45)] hover:-translate-y-px transition-all duration-200"
            >
              <FaWhatsapp className="text-[15px]" />
              Book Now
            </a>

            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              className="min-[1100px]:hidden bg-transparent border border-[#e8d080] rounded-[9px] px-2.5 py-2 text-[#3a3020] hover:text-[#b8860b] transition-all"
            >
              {isOpen ? <FaTimes className="text-[18px] text-[#b8860b]" /> : <FaBars className="text-[18px]" />}
            </button>
          </div>
        </div>

        <div
          className={cn(
            'min-[1100px]:hidden overflow-hidden transition-all duration-300 bg-[#fffdf7]',
            isOpen ? 'max-h-[650px] border-t border-[#f0e8c8]' : 'max-h-0'
          )}
        >
          <div className="px-5 pt-4 pb-5 flex flex-col gap-1">
            <div className="flex items-center gap-4 px-1 pb-3 mb-1 border-b border-[#f0e8c8]">
              <div className="flex items-center gap-2">
                <FaPhone className="text-[#b8860b] text-[11px]" />
                <a href="tel:+918377844158" className="font-['DM_Sans'] text-[13px] text-[#6b5c3e]">
                  +91 83778 44158
                </a>
              </div>
              <div className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-[#b8860b] text-[11px]" />
                <span className="font-['DM_Sans'] text-[13px] text-[#6b5c3e]">Gurugram</span>
              </div>
            </div>

            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block font-['DM_Sans'] text-[15px] font-medium text-[#2a2210] px-4 py-[11px] rounded-[10px] border border-transparent hover:bg-[#fdf8ee] hover:text-[#b8860b] hover:border-[#f0e8c8] transition-all"
              >
                {item.label}
              </Link>
            ))}

            <a
              href="https://wa.me/918377844158"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center justify-center gap-2.5 bg-green-500 text-white px-5 py-3 rounded-[12px] font-['DM_Sans'] text-[15px] font-semibold shadow-[0_3px_14px_rgba(184,134,11,0.3)]"
            >
              <FaWhatsapp className="text-[18px]" />
              Book Consultation on WhatsApp
            </a>
          </div>
        </div>
      </header>
    </div>
  )
}
'use client'

import { useState, useEffect } from 'react'
import { FaWhatsapp, FaTimes } from 'react-icons/fa'
import { cn } from '@/lib/utils'

export default function WhatsAppButton() {
  const [show, setShow] = useState(false)
  const [tooltip, setTooltip] = useState(true)

  useEffect(() => {
    const t1 = setTimeout(() => setShow(true), 1200)
    const t2 = setTimeout(() => setTooltip(false), 6000)
    return () => { clearTimeout(t1); clearTimeout(t2) }
  }, [])

  return (
    <div
      className={cn(
        'fixed bottom-[18px] right-4 sm:bottom-7 sm:right-6 z-999 flex flex-col items-end gap-2.5 opacity-0 translate-y-4 pointer-events-none transition-all duration-400',
        show && 'opacity-100 translate-y-0 pointer-events-auto'
      )}
      aria-label="WhatsApp contact"
    >
      {tooltip && (
        <div
          role="status"
          className="relative bg-white border border-[#f0ebe0] rounded-[14px] py-[11px] pl-[14px] pr-9 shadow-[0_6px_24px_rgba(0,0,0,0.09)] font-['DM_Sans'] text-[12.5px] sm:text-[13.5px] text-[#3a2e10] leading-normal whitespace-nowrap animate-[waFadeUp_0.35s_ease]"
        >
          <strong className="text-[#b8860b] font-semibold">Book Consultation</strong>
          <br />
          Message Nikhil Ji now
          <span className="absolute -bottom-[6px] right-6 w-3 h-3 bg-white border-r border-b border-[#f0ebe0] rotate-45" />
          <button
            className="absolute top-2 right-[9px] text-[#c9a84c] hover:text-[#b8860b] text-[10px] p-0.5 leading-none transition-colors"
            onClick={() => setTooltip(false)}
            aria-label="Dismiss"
          >
            <FaTimes />
          </button>
        </div>
      )}

      <a
        href="https://wa.me/918377844158"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="group relative w-[52px] h-[52px] sm:w-[58px] sm:h-[58px] rounded-full bg-gradient-to-br from-[#25d366] to-[#1ab854] flex items-center justify-center shadow-[0_4px_20px_rgba(37,211,102,0.45)] animate-[waBounce_3.2s_ease-in-out_infinite] hover:animate-none hover:scale-110 hover:shadow-[0_8px_30px_rgba(37,211,102,0.6)] transition-all"
      >
        <span className="absolute inset-0 rounded-full bg-[rgba(37,211,102,0.35)] animate-[waPing_2.2s_ease-out_infinite] pointer-events-none" />
        <FaWhatsapp className="relative z-1 text-white text-[24px] sm:text-[26px]" />
      </a>
    </div>
  )
}
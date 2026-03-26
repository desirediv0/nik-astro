import { FaWhatsapp } from 'react-icons/fa'
import { cn } from '@/lib/utils'

type WhatsAppLinkProps = {
  text?: string
  message?: string
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

const sizeMap = {
  sm: "px-5 py-2.5 text-[13px]",
  md: "px-8 py-3.5 text-[15px]",
  lg: "px-10 py-4 text-[16px]",
}

export function WhatsAppLink({
  text = 'Chat on WhatsApp',
  message,
  size = 'md',
  className,
}: WhatsAppLinkProps) {
  const href = message
    ? `https://wa.me/918377844158?text=${encodeURIComponent(message)}`
    : 'https://wa.me/918377844158'

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center gap-2.5 bg-linear-to-br from-[#25d366] to-[#1ab854] text-white rounded-full font-['DM_Sans'] font-semibold shadow-[0_4px_20px_rgba(37,211,102,0.35)] hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(37,211,102,0.45)] transition-all duration-300",
        sizeMap[size],
        className
      )}
    >
      <FaWhatsapp />
      {text}
    </a>
  )
}


import { type ReactNode } from 'react'
import Link from 'next/link'
import { FaChevronRight } from 'react-icons/fa'
import { Pill } from '@/components/ui/Pill'
import { CheckRow } from '@/components/ui/CheckRow'
import { IconBox } from '@/components/ui/IconBox'

type ServiceCardProps = {
  icon: ReactNode
  tag: string
  title: string
  description: string
  benefits: string[]
  href: string
}

export function ServiceCard({
  icon,
  tag,
  title,
  description,
  benefits,
  href,
}: ServiceCardProps) {
  return (
    <article className="bg-white rounded-[18px] border border-[#f0ebe0] shadow-[0_2px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_40px_rgba(184,134,11,0.13)] hover:-translate-y-1.5 transition-all duration-300 p-6">
      <div className="flex items-start justify-between gap-4 mb-4">
        <IconBox>{icon}</IconBox>
        <Pill>{tag}</Pill>
      </div>
      <h3 className="font-['Cormorant_Garamond',Georgia,serif] text-[30px] font-semibold text-[#1a1202] leading-[1.2] mb-2">
        {title}
      </h3>
      <p className="font-['DM_Sans'] text-[15px] text-[#6b5c3e] leading-[1.72] mb-4">
        {description}
      </p>
      <CheckRow items={benefits} />
      <Link
        href={href}
        className="inline-flex items-center gap-2 mt-5 border border-[#e8d080] text-[#b8860b] px-6 py-3 rounded-full font-['DM_Sans'] text-sm font-medium hover:bg-[rgba(184,134,11,0.08)] transition-all duration-200"
      >
        Learn more <FaChevronRight className="text-[11px]" />
      </Link>
    </article>
  )
}


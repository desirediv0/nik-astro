import { type ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { GoldDivider } from '@/components/ui/GoldDivider'

type SectionHeaderProps = {
  label: string
  title: string | ReactNode
  subtitle?: string
  centered?: boolean
  className?: string
}

export function SectionHeader({
  label,
  title,
  subtitle,
  centered = true,
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn(centered ? 'text-center' : 'text-left', className)}>
      <p className="font-['DM_Sans'] text-[11px] text-[#b8860b] tracking-[3px] uppercase font-medium mb-3">
        {label}
      </p>
      <h2 className="font-['Cormorant_Garamond',Georgia,serif] text-[40px] font-semibold text-[#1a1202] leading-[1.2]">
        {title}
      </h2>
      <GoldDivider align={centered ? 'center' : 'left'} />
      {subtitle ? (
        <p className="font-['DM_Sans'] text-[13px] text-[#a89060] mt-4 max-w-[760px] mx-auto">
          {subtitle}
        </p>
      ) : null}
    </div>
  )
}


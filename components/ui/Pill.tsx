import { type ReactNode } from 'react'
import { cn } from '@/lib/utils'

type PillProps = {
  children: ReactNode
  className?: string
}

export function Pill({ children, className }: PillProps) {
  return (
    <span
      className={cn(
        "inline-block bg-linear-to-br from-[#fdf3dc] to-[#f7e6b2] text-[#7d5a00] text-[10px] font-medium px-3 py-1 rounded-full uppercase tracking-[1px] border border-[#e8d080] font-['DM_Sans']",
        className
      )}
    >
      {children}
    </span>
  )
}


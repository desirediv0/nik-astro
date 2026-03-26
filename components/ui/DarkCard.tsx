import { type ReactNode } from 'react'
import { cn } from '@/lib/utils'

type DarkCardProps = {
  children: ReactNode
  className?: string
}

export function DarkCard({ children, className }: DarkCardProps) {
  return (
    <div className={cn('bg-[#0e0c08] rounded-[18px] border border-[#2a2210]', className)}>
      {children}
    </div>
  )
}


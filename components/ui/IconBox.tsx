import { type ReactNode } from 'react'
import { cn } from '@/lib/utils'

type IconBoxProps = {
  children: ReactNode
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

const sizeMap = {
  sm: 'w-8 h-8',
  md: 'w-11 h-11',
  lg: 'w-[52px] h-[52px]',
}

export function IconBox({ children, size = 'md', className }: IconBoxProps) {
  return (
    <div
      className={cn(
        'bg-linear-to-br from-[#ffe8a0] to-[#ffd060] rounded-[10px] flex items-center justify-center shrink-0',
        sizeMap[size],
        className
      )}
    >
      {children}
    </div>
  )
}


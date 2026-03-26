import { cn } from '@/lib/utils'

type GoldDividerProps = {
  align?: 'center' | 'left'
  className?: string
}

export function GoldDivider({ align = 'center', className }: GoldDividerProps) {
  return (
    <div
      className={cn(
        'w-[52px] h-[2px] bg-linear-to-r from-[#b8860b] to-[#f0c040] mt-4',
        align === 'center' ? 'mx-auto' : 'mx-0',
        className
      )}
    />
  )
}


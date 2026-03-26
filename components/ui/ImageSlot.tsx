import { cn } from '@/lib/utils'

type ImageSlotProps = {
  label: string
  aspect?: '16/9' | '4/3' | '3/4' | '1/1'
  dark?: boolean
  className?: string
}

const aspectMap = {
  '16/9': 'aspect-[16/9]',
  '4/3': 'aspect-[4/3]',
  '3/4': 'aspect-[3/4]',
  '1/1': 'aspect-square',
}

export function ImageSlot({
  label,
  aspect = '16/9',
  dark = false,
  className,
}: ImageSlotProps) {
  return (
    <div
      className={cn(
        'w-full rounded-[14px] border flex items-center justify-center',
        aspectMap[aspect],
        dark
          ? 'bg-[#1e1a0f] border-[#2a2210] text-[#c9a84c]'
          : 'bg-[#fffdf7] border-[#f0ebe0] text-[#a89060]',
        className
      )}
    >
      <span className="font-['DM_Sans'] text-xs tracking-[1.5px] uppercase">
        {label}
      </span>
    </div>
  )
}


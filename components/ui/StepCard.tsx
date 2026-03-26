import { cn } from '@/lib/utils'

type StepCardProps = {
  number: string
  title: string
  desc: string
  dark?: boolean
  className?: string
}

export function StepCard({
  number,
  title,
  desc,
  dark = false,
  className,
}: StepCardProps) {
  return (
    <article
      className={cn(
        'rounded-[14px] border p-6',
        dark
          ? 'bg-[#0e0c08] border-[#2a2210]'
          : 'bg-[#fffdf7] border-[#f0ebe0]',
        className
      )}
    >
      <div className="w-10 h-10 rounded-full bg-[#b8860b] text-white font-['DM_Sans'] text-sm font-semibold flex items-center justify-center mb-4">
        {number}
      </div>
      <h3
        className={cn(
          "font-['Cormorant_Garamond',Georgia,serif] text-[28px] font-semibold leading-[1.2] mb-2",
          dark ? 'text-[#f0e8c8]' : 'text-[#1a1202]'
        )}
      >
        {title}
      </h3>
      <p
        className={cn(
          "font-['DM_Sans'] text-[14.5px] leading-[1.72]",
          dark ? 'text-[#a89060]' : 'text-[#6b5c3e]'
        )}
      >
        {desc}
      </p>
    </article>
  )
}


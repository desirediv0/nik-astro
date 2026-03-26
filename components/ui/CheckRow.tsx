import { FaCheckCircle } from 'react-icons/fa'

type CheckRowProps = {
  items: string[]
}

export function CheckRow({ items }: CheckRowProps) {
  return (
    <div className="space-y-2.5">
      {items.map((item) => (
        <div key={item} className="flex items-start gap-2.5">
          <FaCheckCircle className="text-[#b8860b] mt-0.5 shrink-0" />
          <p className="font-['DM_Sans'] text-[14px] text-[#6b5c3e] leading-[1.65]">
            {item}
          </p>
        </div>
      ))}
    </div>
  )
}


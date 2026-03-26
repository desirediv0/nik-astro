import Link from 'next/link'
import { FaStar, FaQuoteLeft, FaChevronRight } from 'react-icons/fa'
import { MdVerified } from 'react-icons/md'

const reviews = [
    {
        name: 'Nidhi Shreshtha',
        loc: 'Bangalore',
        text: 'Nikhil Ji is a very good astrologer who always gives proper time. He arranged a special puja for me and sent an energized Rudraksha — it really helped.',
    },
    {
        name: 'Santosh',
        loc: 'Verified Client',
        text: 'Your all predictions are correct. I wish my friend had given your contact earlier. Truly life-changing guidance.',
    },
    {
        name: 'Ankita Rajput',
        loc: 'Delhi',
        text: 'I was facing health issues and Nikhil Ji did a puja and made a Kavach for me. I feel so relieved. Just consult Nik-Astro if you have any problem.',
    },
]

export default function Testimonial() {
    return (
        <section className="py-20 px-6 bg-white">
            <div className="max-w-[1100px] mx-auto">
                <div className="text-center mb-[52px]">
                    <p className="font-sans text-[11px] text-gold tracking-[3px] uppercase mb-3">
                        Real Experiences
                    </p>
                    <h2 className="font-serif text-[42px] font-semibold">
                        What Clients <span className="italic text-gold">Say</span>
                    </h2>
                    <div className="w-[52px] h-[2px] bg-gradient-to-r from-gold to-gold-light mt-4 mx-auto" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    {reviews.map((r, i) => (
                        <div
                            key={i}
                            className="bg-cream rounded-[18px] border border-cream-border p-7 hover:shadow-gold hover:-translate-y-1 transition-all duration-300"
                        >
                            <FaQuoteLeft className="text-[#f0e0a0] text-3xl mb-3" />
                            <div className="flex gap-[3px] mb-3.5">
                                {[1, 2, 3, 4, 5].map(n => <FaStar key={n} className="text-gold text-[13px]" />)}
                            </div>
                            <p className="font-sans text-[14.5px] text-[#3a2e10] leading-[1.75] mb-5 italic">
                                "{r.text}"
                            </p>
                            <div className="flex items-center gap-2.5 pt-4 border-t border-cream-border">
                                <div className="w-[38px] h-[38px] rounded-full bg-gradient-to-br from-[#ffe8a0] to-[#ffd060] flex items-center justify-center shrink-0">
                                    <span className="font-serif text-base font-semibold text-subtle-gold">{r.name[0]}</span>
                                </div>
                                <div>
                                    <div className="flex items-center gap-1.5">
                                        <p className="font-sans text-sm font-semibold text-ink">{r.name}</p>
                                        <MdVerified className="text-gold text-[13px]" />
                                    </div>
                                    <p className="font-sans text-xs text-muted-gold">{r.loc}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-9">
                    <Link
                        href="/feedback"
                        className="inline-flex items-center gap-2 border-[1.5px] border-gold-border text-gold px-6 py-3 rounded-full font-sans text-sm font-medium hover:bg-[rgba(184,134,11,0.08)] transition-all duration-200"
                    >
                        View All Feedback
                        <FaChevronRight className="text-[11px]" />
                    </Link>
                </div>
            </div>
        </section>
    )
}
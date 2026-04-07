import Image from 'next/image'
import {
  FaWhatsapp, FaStar, FaFacebook, FaEnvelope
} from 'react-icons/fa'
import { MdVerified } from 'react-icons/md'
import { GiStarShuriken } from 'react-icons/gi'

export const metadata = {
  title: 'Client Feedback & Reviews – NIK ASTRO',
  description:
    'Real testimonials, video reviews, and WhatsApp feedback from clients of Jyotish Acharya Nikhil Ji — NIK ASTRO, Gurugram.',
}

// ─── Data ────────────────────────────────────────────────────────────────────

const stats = [
  { value: '50000+', label: 'Consultations Done' },
  { value: '20+', label: 'Years of Practice' },
  { value: '4.9★', label: 'Average Rating' },
  { value: 'Global', label: 'Clients Worldwide' },
]

const videoReviews = [
  { id: 1, src: 'https://desirediv-storage.blr1.cdn.digitaloceanspaces.com/nik-astro/video1.mp4' },
  { id: 2, src: 'https://desirediv-storage.blr1.cdn.digitaloceanspaces.com/nik-astro/video2.mp4' },
  { id: 3, src: 'https://desirediv-storage.blr1.cdn.digitaloceanspaces.com/nik-astro/video3.mp4' },
  { id: 4, src: 'https://desirediv-storage.blr1.cdn.digitaloceanspaces.com/nik-astro/video4.mp4' },
  { id: 5, src: 'https://desirediv-storage.blr1.cdn.digitaloceanspaces.com/nik-astro/video5.mp4' },
]

const whatsappImages = [
  'https://desirediv-storage.blr1.cdn.digitaloceanspaces.com/nik-astro/9.jpg',
  'https://desirediv-storage.blr1.cdn.digitaloceanspaces.com/nik-astro/25.jpg',
  'https://desirediv-storage.blr1.cdn.digitaloceanspaces.com/nik-astro/22.jpg',
  'https://desirediv-storage.blr1.cdn.digitaloceanspaces.com/nik-astro/21.jpg',
  'https://desirediv-storage.blr1.cdn.digitaloceanspaces.com/nik-astro/20.jpg',
  'https://desirediv-storage.blr1.cdn.digitaloceanspaces.com/nik-astro/8.jpg',
  'https://desirediv-storage.blr1.cdn.digitaloceanspaces.com/nik-astro/15.jpg',
  'https://desirediv-storage.blr1.cdn.digitaloceanspaces.com/nik-astro/14.jpg',
  'https://desirediv-storage.blr1.cdn.digitaloceanspaces.com/nik-astro/12.jpg',
  'https://desirediv-storage.blr1.cdn.digitaloceanspaces.com/nik-astro/13.jpg',
  'https://desirediv-storage.blr1.cdn.digitaloceanspaces.com/nik-astro/11.jpg',
  'https://desirediv-storage.blr1.cdn.digitaloceanspaces.com/nik-astro/10.jpg',
  'https://desirediv-storage.blr1.cdn.digitaloceanspaces.com/nik-astro/6.jpg',
  'https://desirediv-storage.blr1.cdn.digitaloceanspaces.com/nik-astro/7.jpg',
  'https://desirediv-storage.blr1.cdn.digitaloceanspaces.com/nik-astro/9%20(1).jpg',
  'https://desirediv-storage.blr1.cdn.digitaloceanspaces.com/nik-astro/Presentation1.jpg'
]

const facebookImages = [
  'https://desirediv-storage.blr1.cdn.digitaloceanspaces.com/nik-astro/1.1.png',
  'https://desirediv-storage.blr1.cdn.digitaloceanspaces.com/nik-astro/2.2.png',
  'https://desirediv-storage.blr1.cdn.digitaloceanspaces.com/nik-astro/3.3.png',
  'https://desirediv-storage.blr1.cdn.digitaloceanspaces.com/nik-astro/4.1.png'
]

const mailImages = [
  'https://desirediv-storage.blr1.cdn.digitaloceanspaces.com/nik-astro/8%20(1).jpg',
  'https://desirediv-storage.blr1.cdn.digitaloceanspaces.com/nik-astro/8.1.png'
]

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Feedback() {
  return (
    <main className="bg-white text-ink">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#080608] via-[#12100a] to-[#1a1508] py-[68px] px-6">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_55%_60%_at_75%_40%,rgba(184,134,11,0.11)_0%,transparent_70%)]" />
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle,rgba(184,134,11,0.04)_1px,transparent_1px)] bg-[length:24px_24px]" />
        <div className="relative max-w-[1100px] mx-auto">
          <div className="mb-[22px] flex items-center gap-2.5">
            <GiStarShuriken className="text-gold text-[13px]" />
            <span className="font-sans text-[11px] font-medium uppercase tracking-[3px] text-[#c9a84c]">NIK ASTRO · Testimonials</span>
          </div>
          <h1 className="mb-5 max-w-[700px] text-[40px] sm:text-[46px] md:text-[52px] leading-[1.12] text-white">
            Client <span className="text-[#c9a84c] italic">Feedback</span>
            <br />
            & Reviews
          </h1>
          <p className="mb-8 max-w-[520px] font-sans text-[16px] leading-[1.8] text-[#a89060]">
            Real words from real people — video reviews, WhatsApp screenshots, Facebook testimonials, and emails from clients who have experienced transformation through Nikhil Ji&apos;s guidance.
          </p>
          <div className="flex gap-1.5">
            {[1, 2, 3, 4, 5].map((n) => <FaStar key={n} className="text-gold text-[18px]" />)}
          </div>
          <p className="mt-3 font-sans text-[#a89060] text-[14px]">Trusted by thousands across India & worldwide</p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-[#fffdf5] border-b border-[#f0e8c8] py-8 px-6">
        <div className="max-w-[1100px] mx-auto grid grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map(({ value, label }) => (
            <div key={label} className="text-center">
              <p className="font-serif text-[32px] font-bold text-gold leading-none">{value}</p>
              <p className="mt-1.5 font-sans text-[13px] text-[#a89060]">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Video Reviews Section */}
      <section className="py-10 md:py-16 px-6 bg-white">
        <div className="max-w-[1100px] mx-auto">
          <div className="mb-13 text-center">
            <p className="section-label">Watch & Listen</p>
            <h2 className="text-[34px] md:text-[40px]">Video Reviews</h2>
            <div className="section-divider mb-5" />
            <p className="mx-auto max-w-[500px] font-sans text-[15px] leading-[1.75] text-body-text">
              Hear directly from clients about their experience with Nikhil Ji&apos;s consultations and remedies.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-[1100px] mx-auto">
            {videoReviews.map((v) => (
              <div key={v.id} className="group bg-white rounded-[16px] overflow-hidden border border-cream-border hover:shadow-gold hover:-translate-y-1 transition-all duration-300">
                <div className="relative overflow-hidden bg-black flex items-center justify-center aspect-[9/16] max-h-[60vh] sm:max-h-[500px]">
                  <video
                    src={v.src}
                    controls
                    preload="metadata"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="p-4 bg-white border-t border-cream-border flex items-center justify-between">
                  <div className="flex gap-1.5">
                    {[1, 2, 3, 4, 5].map((n) => <FaStar key={n} className="text-gold text-[12px]" />)}
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WhatsApp Feedback Section */}
      <section className="py-10 md:py-16 px-6 bg-gradient-to-b from-[#fdfaf3] to-white">
        <div className="max-w-[1100px] mx-auto">
          <div className="mb-13 text-center">
            <div className="inline-flex items-center gap-2 bg-[#dcf8c6] border border-[#25d366]/30 text-[#075e54] rounded-full px-4 py-1.5 mb-4">
              <FaWhatsapp className="text-[#25d366] text-[16px]" />
              <span className="font-sans text-[12px] font-medium tracking-[0.5px]">Direct WhatsApp Messages</span>
            </div>
            <h2 className="text-[34px] md:text-[40px]">WhatsApp Feedback</h2>
            <div className="section-divider mb-5" />
            <p className="mx-auto max-w-[500px] font-sans text-[15px] leading-[1.75] text-body-text">
              Unfiltered screenshots shared directly by clients after experiencing positive results from consultations.
            </p>
          </div>

          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-5 max-w-[1100px] mx-auto">
            {whatsappImages.map((src, i) => (
              <div key={i} suppressHydrationWarning className="break-inside-avoid bg-white p-2.5 rounded-[12px] border border-cream-border shadow-sm hover:shadow-gold hover:-translate-y-1 transition-all duration-300 mb-5 relative">
                <Image
                  src={src}
                  alt={`WhatsApp Feedback ${i + 1}`}
                  width={400}
                  height={800}
                  className="w-full h-auto rounded-[8px] object-cover"
                  unoptimized={true}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facebook Reviews Section */}
      <section className="py-10 md:py-16 px-6 bg-white">
        <div className="max-w-[1100px] mx-auto">
          <div className="mb-13 text-center">
            <div className="inline-flex items-center gap-2 bg-[#f0f2ff] border border-[#dbe0ff] rounded-full px-4 py-1.5 mb-4">
              <FaFacebook className="text-[#1877f2] text-[15px]" />
              <span className="font-sans text-[#1877f2] text-[12px] font-medium tracking-[0.5px]">Nik Astro Facebook Page</span>
            </div>
            <h2 className="text-[34px] md:text-[40px]">Facebook Reviews</h2>
            <div className="section-divider mb-5" />
            <p className="mx-auto max-w-[500px] font-sans text-[15px] leading-[1.75] text-body-text">
              Genuine reviews posted publicly by clients on our social media platforms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[900px] mx-auto">
            {facebookImages.map((src, i) => (
              <div key={i} suppressHydrationWarning className="bg-white p-3 rounded-[16px] border border-[#e8e8e8] shadow-sm hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 flex items-center justify-center relative">
                <Image
                  src={src}
                  alt={`Facebook Review ${i + 1}`}
                  width={500}
                  height={400}
                  className="w-full h-auto rounded-[8px] object-contain max-h-[400px]"
                  unoptimized={true}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Email Feedback Section */}
      <section className="py-10 md:py-16 px-6 bg-gradient-to-b from-[#fdfaf3] to-white border-t border-[#f0e8c8]">
        <div className="max-w-[1100px] mx-auto">
          <div className="mb-13 text-center">
            <div className="inline-flex items-center gap-2 bg-[#fff4e6] border border-[#ffd599] rounded-full px-4 py-1.5 mb-4">
              <FaEnvelope className="text-[#ff9800] text-[14px]" />
              <span className="font-sans text-[#e65100] text-[12px] font-medium tracking-[0.5px]">Verified Emails</span>
            </div>
            <h2 className="text-[34px] md:text-[40px]">Email Testimonials</h2>
            <div className="section-divider mb-5" />
            <p className="mx-auto max-w-[500px] font-sans text-[15px] leading-[1.75] text-body-text">
              Detailed heartfelt emails from clients who found light in their toughest times.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[900px] mx-auto">
            {mailImages.map((src, i) => (
              <div key={i} suppressHydrationWarning className="bg-white p-3 rounded-[16px] border border-cream-border shadow-sm hover:shadow-gold hover:-translate-y-1 transition-all duration-300 flex items-center justify-center relative">
                <Image
                  src={src}
                  alt={`Email Feedback ${i + 1}`}
                  width={500}
                  height={800}
                  className="w-full h-auto rounded-[8px] object-contain max-h-[800px]"
                  unoptimized={true}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="pb-20 px-6 bg-white">
        <div className="max-w-[1100px] mx-auto">
          <div className="bg-gradient-to-br from-[#0e0c08] to-[#1e1a0f] rounded-[24px] flex flex-wrap items-center justify-between gap-7 p-12 px-10">
            <div>
              <div className="flex items-center gap-2.5 mb-3.5">
                <MdVerified className="text-gold text-[18px]" />
                <span className="text-gold font-sans text-[11px] uppercase tracking-[2px]">100% Authentic</span>
              </div>
              <h3 className="font-serif text-[28px] font-semibold text-[#f0e8c8] leading-snug mb-3">
                Every review is <span className="italic text-[#c9a84c]">genuine</span>
              </h3>
              <p className="font-sans text-[#a89060] text-[14.5px] leading-[1.75] max-w-[520px]">
                All feedback shown here is from real clients — unedited WhatsApp screenshots, public Facebook posts, and recorded video testimonials. Nikhil Ji&apos;s work speaks for itself.
              </p>
            </div>
            <a href="https://wa.me/918377844158" target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
              <FaWhatsapp className="text-[20px]" />
              Book Your Consultation
            </a>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-10 md:py-16 px-6 bg-gradient-to-br from-[#0e0c08] to-[#1e1a0f] text-center">
        <div className="max-w-[560px] mx-auto">
          <div className="mb-5 flex justify-center gap-1.5">
            {[1, 2, 3, 4, 5].map((n) => <FaStar key={n} className="text-gold text-[14px]" />)}
          </div>
          <h2 className="mb-4 text-[34px] md:text-[40px] text-white leading-[1.2]">
            Be Our Next <span className="text-[#c9a84c] italic">Success Story</span>
          </h2>
          <p className="mb-9 font-sans text-[15px] leading-[1.75] text-[#a89060]">
            Join thousands of clients who have found clarity, peace, and positive change through Nikhil Ji&apos;s guidance.
          </p>
          <a href="https://wa.me/918377844158" target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
            <FaWhatsapp className="text-[20px]" />
            Start Your Journey
          </a>
          <p className="mt-4 font-sans text-[#5a4e35] text-[12.5px]">+91 83778 44158 · All consultations by Nikhil Ji personally</p>
        </div>
      </section>
    </main>
  )
}
'use client'

import { useState, type ChangeEvent, type FormEvent } from 'react'
import {
  FaPhone, FaMapMarkerAlt, FaWhatsapp,
  FaFacebook, FaInstagram, FaCheckCircle, FaChevronRight
} from 'react-icons/fa'
import { MdVerified } from 'react-icons/md'
import { GiStarShuriken } from 'react-icons/gi'

const services = [
  'Telephonic Consultation',
  'Video Consultation',
  'Kundali Milan',
  'Muhurat',
  'Astro Vastu',
  'Puja & Remedies',
  'Tantra Removal',
  'Sadhna Program',
  'Other / General Query',
]

type ContactForm = {
  name: string
  phone: string
  service: string
  message: string
}

type ContactFormErrors = Partial<Record<keyof ContactForm, string>>

export default function Contact() {
  const [form, setForm] = useState<ContactForm>({
    name: '',
    phone: '',
    service: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState<ContactFormErrors>({})

  const validate = (): ContactFormErrors => {
    const e: ContactFormErrors = {}
    if (!form.name.trim()) e.name = 'Please enter your name'
    if (!form.phone.trim() || !/^\+?[0-9\s\-]{8,15}$/.test(form.phone.trim())) e.phone = 'Please enter a valid phone number'
    if (!form.service) e.service = 'Please select a service'
    if (!form.message.trim()) e.message = 'Please write a brief message'
    return e
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    const field = name as keyof ContactForm
    setForm(prev => ({ ...prev, [name]: value }))
    if (errors[field]) setErrors(prev => ({ ...prev, [field]: '' }))
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) { setErrors(errs); return }

    setLoading(true)
    setTimeout(() => {
      console.log('NIK ASTRO — New Contact Enquiry:', {
        name: form.name,
        phone: form.phone,
        service: form.service,
        message: form.message,
        timestamp: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
      })
      setLoading(false)
      setSubmitted(true)
    }, 800)
  }

  return (
    <main className="bg-white text-ink">
      <section className="relative overflow-hidden bg-gradient-to-br from-[#080608] via-[#12100a] to-[#1a1508] py-[68px] px-6">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_55%_60%_at_75%_40%,rgba(184,134,11,0.11)_0%,transparent_70%)]" />
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle,rgba(184,134,11,0.04)_1px,transparent_1px)] bg-[length:24px_24px]" />
        <div className="relative max-w-[1100px] mx-auto">
          <div className="mb-[22px] flex items-center gap-2.5">
            <GiStarShuriken className="text-gold text-[13px]" />
            <span className="font-sans text-[11px] font-medium uppercase tracking-[3px] text-[#c9a84c]">NIK ASTRO · Gurugram</span>
          </div>
          <h1 className="mb-5 text-[40px] sm:text-[46px] md:text-[52px] leading-[1.12] text-white">
            Get in <span className="text-[#c9a84c] italic">Touch</span>
          </h1>
          <p className="mb-8 max-w-[480px] font-sans text-[16px] leading-[1.8] text-[#a89060]">
            To book a consultation or for any enquiry, send a message on WhatsApp first. This is the quickest way to reach Nikhil Ji directly.
          </p>
          <a href="https://wa.me/918377844158" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2.5 bg-gradient-to-br from-[#25d366] to-[#1ab854] text-white px-7 py-3 rounded-full font-sans text-[15px] font-semibold shadow-[0_4px_20px_rgba(37,211,102,0.35)] hover:-translate-y-0.5 transition-all duration-300">
            <FaWhatsapp className="text-[20px]" />
            Message on WhatsApp
            <FaChevronRight className="text-[12px]" />
          </a>
        </div>
      </section>

      <section className="py-10 md:py-16 px-6 bg-white">
        <div className="max-w-[1100px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_440px] gap-[52px] items-start">

            {/* ── FORM ── */}
            <div>
              <p className="section-label">Send an Enquiry</p>
              <h2 className="mb-1.5 text-[32px] md:text-[36px] leading-[1.2]">Contact <span className="italic text-gold">Nikhil Ji</span></h2>
              <div className="section-divider-left mb-8" />

              {submitted ? (
                /* ── SUCCESS STATE ── */
                <div className="bg-gradient-to-br from-[#f0fdf4] to-[#e8faf0] border border-[#a3e6bc] rounded-[18px] p-11 text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#25d366] to-[#1ab854] flex items-center justify-center mx-auto mb-5 shadow-[0_4px_20px_rgba(37,211,102,0.3)]">
                    <FaCheckCircle className="text-white text-[28px]" />
                  </div>
                  <h3 className="font-serif text-[26px] font-semibold text-ink mb-3">Message Received!</h3>
                  <p className="font-sans text-[#4a6b50] text-[15px] leading-[1.75] max-w-[360px] mx-auto mb-7">
                    Thank you, <strong>{form.name}</strong>. Your enquiry has been noted. Nikhil Ji will get back to you on <strong>{form.phone}</strong> soon.
                  </p>
                  <p className="font-sans text-[#6b8f6b] text-[14px] mb-7">
                    For faster response, you can also message directly on WhatsApp.
                  </p>
                  <a href="https://wa.me/918377844158" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2.5 bg-gradient-to-br from-[#25d366] to-[#1ab854] text-white text-[14px] px-6 py-2.5 rounded-full font-sans font-semibold shadow-[0_4px_20px_rgba(37,211,102,0.35)]">
                    <FaWhatsapp className="text-[17px]" />
                    Also message on WhatsApp
                  </a>
                </div>
              ) : (
                /* ── FORM STATE ── */
                <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
                  {/* Name + Phone */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="field-label">Full Name</label>
                      <input
                        id="name" name="name" type="text"
                        placeholder="Your name"
                        value={form.name} onChange={handleChange}
                        className={`input-field ${errors.name ? 'error' : ''}`}
                      />
                      {errors.name && <p className="error-text">{errors.name}</p>}
                    </div>
                    <div>
                      <label htmlFor="phone" className="field-label">Phone / WhatsApp</label>
                      <input
                        id="phone" name="phone" type="tel"
                        placeholder="+91 XXXXX XXXXX"
                        value={form.phone} onChange={handleChange}
                        className={`input-field ${errors.phone ? 'error' : ''}`}
                      />
                      {errors.phone && <p className="error-text">{errors.phone}</p>}
                    </div>
                  </div>

                  {/* Service */}
                  <div>
                    <label htmlFor="service" className="field-label">Service Interested In</label>
                    <select
                      id="service" name="service"
                      value={form.service} onChange={handleChange}
                      className={`input-field cursor-pointer appearance-none bg-no-repeat bg-[right_14px_center] pr-9 ${errors.service ? 'error' : ''}`}
                      // allowed: data-uri arrow for select dropdown
                      style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%23b8860b' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E")` }}
                    >
                      <option value="">Select a service...</option>
                      {services.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                    {errors.service && <p className="error-text">{errors.service}</p>}
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="field-label">Your Message / Query</label>
                    <textarea
                      id="message" name="message"
                      placeholder="Briefly describe your concern or query..."
                      value={form.message} onChange={handleChange}
                      rows={5}
                      className={`input-field resize-y min-h-[120px] ${errors.message ? 'error' : ''}`}
                    />
                    {errors.message && <p className="error-text">{errors.message}</p>}
                  </div>

                  {/* Note */}
                  <div className="flex items-start gap-2.5 bg-[#fffdf7] border border-[#f0e8c8] rounded-[10px] p-3 px-4">
                    <MdVerified className="text-gold text-[15px] mt-0.5 shrink-0" />
                    <p className="font-sans text-[12.5px] text-subtle-gold leading-[1.6]">
                      Your details are private and will only be used by Nikhil Ji for consultation purposes. For fastest response, also message on WhatsApp.
                    </p>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-gradient-to-br from-gold to-[#d4a017] text-white border-none rounded-full py-3.5 font-sans text-[15px] font-semibold cursor-pointer shadow-[0_4px_18px_rgba(184,134,11,0.3)] hover:shadow-[0_6px_26px_rgba(184,134,11,0.42)] hover:-translate-y-px disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-300"
                  >
                    {loading ? 'Sending...' : 'Send Enquiry'}
                  </button>
                </form>
              )}
            </div>

            {/* ── CONTACT INFO SIDEBAR ── */}
            <div className="flex flex-col gap-4">
              {/* Address */}
              <div className="bg-[#fffdf7] rounded-[16px] border border-cream-border p-6">
                <div className="flex gap-3.5 items-start">
                  <div className="icon-box w-11 h-11">
                    <FaMapMarkerAlt className="text-subtle-gold text-[17px]" />
                  </div>
                  <div>
                    <p className="font-serif text-[17px] font-semibold mb-2 text-ink">Location</p>
                    <p className="font-sans text-[14px] text-body-text leading-[1.7]">
                      Sector 110A<br />Gurugram, Haryana 122017<br />India
                    </p>
                    <span className="pill mt-2.5 inline-block">By Appointment Only</span>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="bg-[#fffdf7] rounded-[16px] border border-cream-border p-6">
                <div className="flex gap-3.5 items-center">
                  <div className="icon-box w-11 h-11">
                    <FaPhone className="text-subtle-gold text-[16px]" />
                  </div>
                  <div>
                    <p className="font-serif text-[17px] font-semibold mb-1 text-ink">Phone</p>
                    <a href="tel:+918377844158" className="font-sans text-gold font-medium text-[15px]">
                      +91 83778 44158
                    </a>
                  </div>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="bg-[#f0fdf4] rounded-[16px] border border-[#a3e6bc] p-[22px] flex gap-3.5 items-center">
                <div className="bg-gradient-to-br from-[#25d366] to-[#1ab854] rounded-[10px] w-11 h-11 flex items-center justify-center shrink-0">
                  <FaWhatsapp className="text-white text-[20px]" />
                </div>
                <div>
                  <p className="font-serif text-[17px] font-semibold mb-1 text-ink">WhatsApp</p>
                  <a href="https://wa.me/918377844158" target="_blank" rel="noopener noreferrer" className="font-sans text-[#1a9e4e] text-[14px] font-medium">
                    +91 83778 44158 · Message Now
                  </a>
                  <p className="font-sans text-[11.5px] text-[#4a8a5a] mt-0.5">Preferred for all consultations</p>
                </div>
              </div>

              {/* Divider */}
              <div className="h-px bg-cream-border my-1" />

              {/* Social Media */}
              <p className="section-label">Follow Nikhil Ji</p>
              <a
                href="https://www.facebook.com/nikastro29/"
                target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-3 bg-[#fffdf7] border border-cream-border rounded-[12px] p-3.5 px-[18px] hover:shadow-gold hover:-translate-y-0.5 hover:border-[#e8d080] transition-all duration-200"
              >
                <div className="bg-[#1877f2] rounded-[9px] w-[38px] h-[38px] flex items-center justify-center shrink-0">
                  <FaFacebook className="text-white text-[18px]" />
                </div>
                <div>
                  <p className="font-sans text-[14px] font-semibold text-ink">Facebook</p>
                  <p className="font-sans text-[12px] text-[#a89060]">Nik Astro · Puja Anushthan Kendra</p>
                </div>
                <FaChevronRight className="text-gold text-[11px] ml-auto" />
              </a>

              <a
                href="https://www.instagram.com/nikastro2929/"
                target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-3 bg-[#fffdf7] border border-cream-border rounded-[12px] p-3.5 px-[18px] hover:shadow-gold hover:-translate-y-0.5 hover:border-[#e8d080] transition-all duration-200"
              >
                <div className="bg-[linear-gradient(135deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)] rounded-[9px] w-[38px] h-[38px] flex items-center justify-center shrink-0">
                  <FaInstagram className="text-white text-[18px]" />
                </div>
                <div>
                  <p className="font-sans text-[14px] font-semibold text-ink">Instagram</p>
                  <p className="font-sans text-[12px] text-[#a89060]">@nikastro2929</p>
                </div>
                <FaChevronRight className="text-gold text-[11px] ml-auto" />
              </a>

              {/* Response note */}
              <div className="bg-gradient-to-br from-[#fdf8ee] to-[#fffdf7] rounded-[12px] border border-[#f0e8c8] p-4 px-[18px] flex gap-2.5 items-start">
                <MdVerified className="text-gold text-[15px] mt-0.5 shrink-0" />
                <p className="font-sans text-[13px] text-subtle-gold leading-[1.65]">
                  We strive to respond within <strong>24 hours</strong>. For urgent matters, WhatsApp is the fastest channel. Book consultations in advance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20 px-6 bg-white max-w-[1100px] mx-auto">
        <div className="rounded-[20px] overflow-hidden border border-cream-border shadow-[0_4px_24px_rgba(0,0,0,0.06)]">
          {/* Replace with Google Maps <iframe> */}
          <div className="relative bg-gradient-to-br from-[#0e0c08] to-[#1e1a0f] h-[340px] flex flex-col items-center justify-center gap-3.5">
            <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_50%_50%_at_50%_50%,rgba(184,134,11,0.08)_0%,transparent_70%)]" />
            <div className="icon-box w-[52px] h-[52px]">
              <FaMapMarkerAlt className="text-subtle-gold text-[22px]" />
            </div>
            <div className="text-center">
              <p className="font-serif text-[22px] font-semibold text-[#f0e8c8] mb-1.5">NIK ASTRO</p>
              <p className="font-sans text-[#a89060] text-[14px]">Sector 110A, Gurugram, Haryana 122017</p>
              <span className="pill mt-3 inline-block">By Appointment Only</span>
            </div>
            <p className="font-sans text-[#5a4e35] text-[12px] mt-1">Replace this block with a Google Maps embed</p>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-16 px-6 bg-gradient-to-br from-[#0e0c08] to-[#1e1a0f] text-center">
        <div className="max-w-[560px] mx-auto">
          <GiStarShuriken className="text-gold text-[22px] mb-5 mx-auto" />
          <h2 className="mb-4 text-[34px] md:text-[40px] text-white leading-[1.2]">
            Begin Your <span className="text-[#c9a84c] italic">Spiritual Journey</span>
          </h2>
          <p className="mb-9 font-sans text-[15px] leading-[1.75] text-[#a89060]">
            Connect with Nikhil Ji for guidance and remedies tailored to your life and birth chart.
          </p>
          <a href="https://wa.me/918377844158" target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
            <FaWhatsapp className="text-[20px]" />
            Start on WhatsApp
          </a>
          <p className="mt-4 font-sans text-[#5a4e35] text-[12.5px]">+91 83778 44158</p>
        </div>
      </section>
    </main>
  )
}
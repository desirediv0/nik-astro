import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  host: process.env.NEXT_PUBLIC_SMTP_HOST,
  port: Number(process.env.NEXT_PUBLIC_SMTP_PORT) || 587,
  secure: false,
  auth: {
    user: process.env.NEXT_PUBLIC_SMTP_USER,
    pass: process.env.NEXT_PUBLIC_SMTP_PASSWORD,
  },
})

function adminEmailHtml(data: {
  name: string
  email: string
  phone: string
  service: string
  message: string
  timestamp: string
}) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width,initial-scale=1" />
<title>New Enquiry — NIK ASTRO</title>
</head>
<body style="margin:0;padding:0;background:#f4f0e8;font-family:'Georgia',serif;">

  <!-- Wrapper -->
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f0e8;padding:32px 16px;">
    <tr><td align="center">
      <table width="620" cellpadding="0" cellspacing="0" style="max-width:620px;width:100%;background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 32px rgba(0,0,0,0.10);">

        <!-- Header -->
        <tr>
          <td style="background:linear-gradient(135deg,#0e0c08 0%,#1e1a0f 60%,#2a2010 100%);padding:40px 40px 32px;text-align:center;">
            <div style="display:inline-block;background:rgba(184,134,11,0.15);border:1px solid rgba(184,134,11,0.3);border-radius:50%;width:64px;height:64px;line-height:64px;text-align:center;margin-bottom:16px;font-size:28px;">✦</div>
            <h1 style="margin:0 0 6px;color:#c9a84c;font-size:28px;font-weight:700;letter-spacing:1px;">NIK ASTRO</h1>
            <p style="margin:0;color:#a89060;font-size:13px;letter-spacing:3px;text-transform:uppercase;font-family:Arial,sans-serif;">New Consultation Enquiry</p>
          </td>
        </tr>

        <!-- Alert Banner -->
        <tr>
          <td style="background:#b8860b;padding:12px 40px;text-align:center;">
            <p style="margin:0;color:#fff;font-family:Arial,sans-serif;font-size:13px;font-weight:600;letter-spacing:0.5px;">📩 A new enquiry has been submitted via the website contact form</p>
          </td>
        </tr>

        <!-- Body -->
        <tr>
          <td style="padding:36px 40px;">

            <!-- Greeting -->
            <p style="margin:0 0 24px;color:#1a1508;font-size:16px;line-height:1.7;">
              Namaskar, <strong>Nikhil Ji</strong> 🙏<br />
              You have received a new enquiry from your website. Details are below.
            </p>

            <!-- Details Table -->
            <table width="100%" cellpadding="0" cellspacing="0" style="border-radius:12px;overflow:hidden;border:1px solid #e8d8a8;">

              <tr style="background:#fdf8ee;">
                <td style="padding:14px 20px;border-bottom:1px solid #f0e8c8;width:36%;">
                  <p style="margin:0;font-family:Arial,sans-serif;font-size:11px;text-transform:uppercase;letter-spacing:1.5px;color:#a89060;font-weight:600;">Full Name</p>
                </td>
                <td style="padding:14px 20px;border-bottom:1px solid #f0e8c8;">
                  <p style="margin:0;font-size:15px;color:#1a1508;font-weight:600;">${data.name}</p>
                </td>
              </tr>

              <tr style="background:#fff;">
                <td style="padding:14px 20px;border-bottom:1px solid #f0e8c8;">
                  <p style="margin:0;font-family:Arial,sans-serif;font-size:11px;text-transform:uppercase;letter-spacing:1.5px;color:#a89060;font-weight:600;">Email</p>
                </td>
                <td style="padding:14px 20px;border-bottom:1px solid #f0e8c8;">
                  <p style="margin:0;font-size:15px;color:#1a1508;">
                    <a href="mailto:${data.email}" style="color:#b8860b;text-decoration:none;">${data.email}</a>
                  </p>
                </td>
              </tr>

              <tr style="background:#fdf8ee;">
                <td style="padding:14px 20px;border-bottom:1px solid #f0e8c8;">
                  <p style="margin:0;font-family:Arial,sans-serif;font-size:11px;text-transform:uppercase;letter-spacing:1.5px;color:#a89060;font-weight:600;">Phone / WhatsApp</p>
                </td>
                <td style="padding:14px 20px;border-bottom:1px solid #f0e8c8;">
                  <p style="margin:0;font-size:15px;color:#1a1508;">
                    <a href="tel:${data.phone}" style="color:#b8860b;text-decoration:none;font-weight:600;">${data.phone}</a>
                  </p>
                </td>
              </tr>

              <tr style="background:#fff;">
                <td style="padding:14px 20px;border-bottom:1px solid #f0e8c8;">
                  <p style="margin:0;font-family:Arial,sans-serif;font-size:11px;text-transform:uppercase;letter-spacing:1.5px;color:#a89060;font-weight:600;">Service Requested</p>
                </td>
                <td style="padding:14px 20px;border-bottom:1px solid #f0e8c8;">
                  <span style="display:inline-block;background:#fdf3d0;border:1px solid #e8d080;color:#7a5c00;font-family:Arial,sans-serif;font-size:13px;font-weight:600;padding:4px 14px;border-radius:20px;">${data.service}</span>
                </td>
              </tr>

              <tr style="background:#fdf8ee;">
                <td style="padding:14px 20px;vertical-align:top;">
                  <p style="margin:0;font-family:Arial,sans-serif;font-size:11px;text-transform:uppercase;letter-spacing:1.5px;color:#a89060;font-weight:600;">Message</p>
                </td>
                <td style="padding:14px 20px;">
                  <p style="margin:0;font-size:15px;color:#1a1508;line-height:1.75;">${data.message.replace(/\n/g, '<br />')}</p>
                </td>
              </tr>

            </table>

            <!-- Timestamp -->
            <p style="margin:20px 0 0;font-family:Arial,sans-serif;font-size:12px;color:#a89060;text-align:right;">
              🕐 Received: ${data.timestamp}
            </p>

            <!-- Divider -->
            <hr style="border:none;border-top:1px solid #f0e8c8;margin:28px 0;" />

            <!-- Quick Reply Buttons -->
            <p style="margin:0 0 16px;font-family:Arial,sans-serif;font-size:14px;color:#5a4e35;font-weight:600;">Quick Reply Options:</p>
            <table cellpadding="0" cellspacing="0">
              <tr>
                <td style="padding-right:12px;">
                  <a href="https://wa.me/${data.phone.replace(/[^0-9]/g, '')}" style="display:inline-block;background:linear-gradient(135deg,#25d366,#1ab854);color:#fff;font-family:Arial,sans-serif;font-size:14px;font-weight:600;padding:12px 24px;border-radius:50px;text-decoration:none;">
                    📲 WhatsApp Reply
                  </a>
                </td>
                <td>
                  <a href="mailto:${data.email}" style="display:inline-block;background:linear-gradient(135deg,#b8860b,#d4a017);color:#fff;font-family:Arial,sans-serif;font-size:14px;font-weight:600;padding:12px 24px;border-radius:50px;text-decoration:none;">
                    ✉️ Reply via Email
                  </a>
                </td>
              </tr>
            </table>

          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="background:#0e0c08;padding:24px 40px;text-align:center;">
            <p style="margin:0 0 6px;color:#c9a84c;font-size:15px;font-weight:600;letter-spacing:1px;">NIK ASTRO</p>
            <p style="margin:0 0 4px;font-family:Arial,sans-serif;font-size:12px;color:#5a4e35;">Sector 110A, Gurugram, Haryana 122017</p>
            <p style="margin:0;font-family:Arial,sans-serif;font-size:12px;color:#3a3020;">This is an automated notification from your website contact form.</p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>

</body>
</html>`
}

function userConfirmationHtml(data: { name: string; service: string }) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width,initial-scale=1" />
<title>Enquiry Received — NIK ASTRO</title>
</head>
<body style="margin:0;padding:0;background:#f4f0e8;font-family:'Georgia',serif;">

  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f0e8;padding:32px 16px;">
    <tr><td align="center">
      <table width="580" cellpadding="0" cellspacing="0" style="max-width:580px;width:100%;background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 32px rgba(0,0,0,0.10);">

        <!-- Header -->
        <tr>
          <td style="background:linear-gradient(135deg,#0e0c08 0%,#1e1a0f 60%,#2a2010 100%);padding:48px 40px 36px;text-align:center;">
            <div style="display:inline-block;background:rgba(184,134,11,0.15);border:1px solid rgba(184,134,11,0.35);border-radius:50%;width:72px;height:72px;line-height:72px;text-align:center;margin-bottom:20px;font-size:32px;">🙏</div>
            <h1 style="margin:0 0 8px;color:#c9a84c;font-size:30px;font-weight:700;letter-spacing:1px;">NIK ASTRO</h1>
            <p style="margin:0;color:#a89060;font-family:Arial,sans-serif;font-size:12px;letter-spacing:3px;text-transform:uppercase;">Puja · Remedies · Consultation</p>
          </td>
        </tr>

        <!-- Green Tick Banner -->
        <tr>
          <td style="background:linear-gradient(135deg,#1ab854,#25d366);padding:20px 40px;text-align:center;">
            <p style="margin:0;color:#fff;font-family:Arial,sans-serif;font-size:15px;font-weight:700;">✅ Your enquiry has been received!</p>
          </td>
        </tr>

        <!-- Body -->
        <tr>
          <td style="padding:40px;">

            <!-- Greeting -->
            <h2 style="margin:0 0 12px;font-size:24px;color:#1a1508;">Namaskar, <span style="color:#b8860b;">${data.name}</span> 🌟</h2>
            <p style="margin:0 0 28px;font-family:Arial,sans-serif;font-size:15px;color:#5a4e35;line-height:1.8;">
              Thank you for reaching out to NIK ASTRO. We have received your enquiry for <strong style="color:#7a5c00;">${data.service}</strong> and Nikhil Ji will personally review your message.
            </p>

            <!-- What's Next Box -->
            <table width="100%" cellpadding="0" cellspacing="0" style="background:#fdf8ee;border:1px solid #e8d8a8;border-radius:12px;margin-bottom:28px;">
              <tr>
                <td style="padding:24px 28px;">
                  <p style="margin:0 0 16px;font-size:15px;color:#1a1508;font-weight:700;">What happens next?</p>
                  <table cellpadding="0" cellspacing="0" width="100%">
                    <tr>
                      <td style="padding:7px 0;vertical-align:top;width:28px;font-size:18px;">🔔</td>
                      <td style="padding:7px 0;font-family:Arial,sans-serif;font-size:14px;color:#5a4e35;line-height:1.6;">Nikhil Ji will personally review your enquiry</td>
                    </tr>
                    <tr>
                      <td style="padding:7px 0;vertical-align:top;font-size:18px;">📲</td>
                      <td style="padding:7px 0;font-family:Arial,sans-serif;font-size:14px;color:#5a4e35;line-height:1.6;">You will be contacted on your provided phone number within <strong>24 hours</strong></td>
                    </tr>
                    <tr>
                      <td style="padding:7px 0;vertical-align:top;font-size:18px;">⭐</td>
                      <td style="padding:7px 0;font-family:Arial,sans-serif;font-size:14px;color:#5a4e35;line-height:1.6;">For faster response, message directly on WhatsApp below</td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>

            <!-- WhatsApp CTA -->
            <table width="100%" cellpadding="0" cellspacing="0" style="background:linear-gradient(135deg,#0e2d0e,#0a1f0a);border-radius:14px;margin-bottom:28px;">
              <tr>
                <td style="padding:28px;text-align:center;">
                  <p style="margin:0 0 6px;color:#a3e6bc;font-family:Arial,sans-serif;font-size:11px;letter-spacing:2px;text-transform:uppercase;">Fastest Way to Connect</p>
                  <p style="margin:0 0 20px;color:#ffffff;font-size:20px;font-weight:700;">WhatsApp Nikhil Ji Directly</p>
                  <a href="https://wa.me/918377844158" style="display:inline-block;background:linear-gradient(135deg,#25d366,#1ab854);color:#fff;font-family:Arial,sans-serif;font-size:15px;font-weight:700;padding:14px 32px;border-radius:50px;text-decoration:none;letter-spacing:0.5px;">
                    📲 Message on WhatsApp
                  </a>
                  <p style="margin:12px 0 0;color:#4a8a5a;font-family:Arial,sans-serif;font-size:13px;">+91 83778 44158</p>
                </td>
              </tr>
            </table>

            <!-- Services reminder -->
            <p style="margin:0 0 14px;font-family:Arial,sans-serif;font-size:13px;color:#a89060;font-weight:600;text-transform:uppercase;letter-spacing:1px;">Our Services</p>
            <table width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td style="padding:4px 0;font-family:Arial,sans-serif;font-size:13px;color:#5a4e35;">✦ Telephonic & Video Consultation</td>
                <td style="padding:4px 0;font-family:Arial,sans-serif;font-size:13px;color:#5a4e35;">✦ Kundali Milan</td>
              </tr>
              <tr>
                <td style="padding:4px 0;font-family:Arial,sans-serif;font-size:13px;color:#5a4e35;">✦ Puja & Remedies</td>
                <td style="padding:4px 0;font-family:Arial,sans-serif;font-size:13px;color:#5a4e35;">✦ Astro Vastu</td>
              </tr>
              <tr>
                <td style="padding:4px 0;font-family:Arial,sans-serif;font-size:13px;color:#5a4e35;">✦ Tantra Removal</td>
                <td style="padding:4px 0;font-family:Arial,sans-serif;font-size:13px;color:#5a4e35;">✦ Sadhna Program</td>
              </tr>
            </table>

          </td>
        </tr>

        <!-- Divider -->
        <tr>
          <td style="padding:0 40px;">
            <hr style="border:none;border-top:1px solid #f0e8c8;margin:0;" />
          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="background:#0e0c08;padding:28px 40px;text-align:center;">
            <p style="margin:0 0 8px;color:#c9a84c;font-size:16px;font-weight:700;letter-spacing:1px;">NIK ASTRO</p>
            <p style="margin:0 0 4px;font-family:Arial,sans-serif;font-size:12px;color:#5a4e35;">Sector 110A, Gurugram, Haryana 122017</p>
            <p style="margin:0 0 14px;font-family:Arial,sans-serif;font-size:12px;color:#5a4e35;">
              <a href="tel:+918377844158" style="color:#a89060;text-decoration:none;">+91 83778 44158</a>
            </p>
            <table cellpadding="0" cellspacing="0" style="margin:0 auto 12px;">
              <tr>
                <td style="padding:0 6px;">
                  <a href="https://www.facebook.com/nikastro29/" style="display:inline-block;background:#1877f2;color:#fff;font-family:Arial,sans-serif;font-size:12px;font-weight:600;padding:7px 16px;border-radius:20px;text-decoration:none;">Facebook</a>
                </td>
                <td style="padding:0 6px;">
                  <a href="https://www.instagram.com/nikastro2929/" style="display:inline-block;background:linear-gradient(135deg,#f09433,#dc2743,#bc1888);color:#fff;font-family:Arial,sans-serif;font-size:12px;font-weight:600;padding:7px 16px;border-radius:20px;text-decoration:none;">Instagram</a>
                </td>
              </tr>
            </table>
            <p style="margin:0;font-family:Arial,sans-serif;font-size:11px;color:#3a3020;">This is an automated confirmation. Please do not reply to this email.</p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>

</body>
</html>`
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, email, phone, service, message } = body

    if (!name || !email || !phone || !service || !message) {
      return NextResponse.json({ error: 'All fields are required.' }, { status: 400 })
    }

    const timestamp = new Date().toLocaleString('en-IN', {
      timeZone: 'Asia/Kolkata',
      dateStyle: 'full',
      timeStyle: 'short',
    })

    const fromEmail = process.env.NEXT_PUBLIC_FROM_EMAIL!
    const toEmail = process.env.NEXT_PUBLIC_TO_EMAIL!

    // Send admin notification
    await transporter.sendMail({
      from: `"NIK ASTRO Website" <${fromEmail}>`,
      to: toEmail,
      subject: `New Enquiry: ${service} — ${name}`,
      html: adminEmailHtml({ name, email, phone, service, message, timestamp }),
    })

    // Send user confirmation
    await transporter.sendMail({
      from: `"NIK ASTRO" <${fromEmail}>`,
      to: email,
      subject: 'Your Enquiry Has Been Received — NIK ASTRO',
      html: userConfirmationHtml({ name, service }),
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('[contact/route] Email error:', err)
    return NextResponse.json({ error: 'Failed to send email. Please try again.' }, { status: 500 })
  }
}

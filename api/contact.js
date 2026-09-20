import { Resend } from 'resend'

const RECIPIENT = 'aftabhadi007@gmail.com'
const FROM = 'TahaInfoTech <contact@tahainfotech.com>'
const SUBJECT = 'New Contact Us Inquiry - Tahainfotech'

const ALLOWED_SERVICES = new Set([
  'Custom Software Development',
  'Cloud & DevOps',
  'IT Consultancy & Strategy',
  'Cybersecurity & Compliance',
  'Data & Analytics',
  'Managed IT Support',
])

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

function buildEmailHtml({ name, email, company, service, message }) {
  const safeCompany = company ? escapeHtml(company) : 'N/A'
  const safeMessage = escapeHtml(message).replace(/\n/g, '<br />')

  return `
    <div style="font-family: Arial, Helvetica, sans-serif; line-height: 1.6; color: #0b1f33;">
      <h2 style="margin: 0 0 16px;">New Contact Us Inquiry</h2>
      <p style="margin: 0 0 20px;">A visitor submitted the Contact Us form on tahainfotech.com.</p>
      <table style="border-collapse: collapse; width: 100%; max-width: 640px;">
        <tr>
          <td style="padding: 8px 0; font-weight: bold; width: 160px;">Name</td>
          <td style="padding: 8px 0;">${escapeHtml(name)}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; font-weight: bold;">Email</td>
          <td style="padding: 8px 0;"><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td>
        </tr>
        <tr>
          <td style="padding: 8px 0; font-weight: bold;">Company</td>
          <td style="padding: 8px 0;">${safeCompany}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; font-weight: bold;">Service interest</td>
          <td style="padding: 8px 0;">${escapeHtml(service)}</td>
        </tr>
      </table>
      <h3 style="margin: 24px 0 8px;">Message</h3>
      <div style="padding: 12px 14px; background: #f4f7fa; border: 1px solid #d7e1ea; border-radius: 8px;">
        ${safeMessage}
      </div>
    </div>
  `
}

function validatePayload(body) {
  const errors = {}
  const name = typeof body?.name === 'string' ? body.name.trim() : ''
  const email = typeof body?.email === 'string' ? body.email.trim() : ''
  const company = typeof body?.company === 'string' ? body.company.trim() : ''
  const service = typeof body?.service === 'string' ? body.service.trim() : ''
  const message = typeof body?.message === 'string' ? body.message.trim() : ''

  if (!name) errors.name = 'Please enter your name.'
  if (!email) {
    errors.email = 'Please enter your email.'
  } else if (!EMAIL_REGEX.test(email)) {
    errors.email = 'Please enter a valid email address.'
  }
  if (!service || !ALLOWED_SERVICES.has(service)) {
    errors.service = 'Please select a valid service interest.'
  }
  if (!message || message.length < 20) {
    errors.message = 'Please share a brief project summary (at least 20 characters).'
  }

  return {
    errors,
    data: { name, email, company, service, message },
  }
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'Method not allowed.' })
  }

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    console.error('Contact API misconfigured: RESEND_API_KEY is missing.')
    return res.status(500).json({ error: 'Email service is not configured.' })
  }

  const { errors, data } = validatePayload(req.body)
  if (Object.keys(errors).length) {
    return res.status(400).json({ error: 'Validation failed.', errors })
  }

  try {
    const resend = new Resend(apiKey)
    const idempotencyKey =
      typeof req.headers['idempotency-key'] === 'string'
        ? req.headers['idempotency-key'].slice(0, 256)
        : undefined

    const { data: sendData, error } = await resend.emails.send(
      {
        from: FROM,
        to: [RECIPIENT],
        replyTo: data.email,
        subject: SUBJECT,
        html: buildEmailHtml(data),
      },
      idempotencyKey ? { idempotencyKey } : undefined,
    )

    if (error) {
      console.error('Resend send failed:', error.message || 'Unknown Resend error')
      return res.status(502).json({
        error: 'Unable to send your message right now. Please try again shortly.',
      })
    }

    return res.status(200).json({
      ok: true,
      id: sendData?.id ?? null,
    })
  } catch (err) {
    console.error('Contact API unexpected error:', err instanceof Error ? err.message : 'Unknown error')
    return res.status(500).json({
      error: 'Unable to send your message right now. Please try again shortly.',
    })
  }
}

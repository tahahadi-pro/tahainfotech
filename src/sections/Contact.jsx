import { useRef, useState } from 'react'
import { Button } from '../components/Button'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { contactDetails } from '../data/content'

const initialForm = {
  name: '',
  email: '',
  company: '',
  service: 'Custom Software Development',
  message: '',
}

export function Contact() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')
  const [statusMessage, setStatusMessage] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const submittingRef = useRef(false)

  const updateField = (event) => {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
    setErrors((prev) => ({ ...prev, [name]: '' }))
    if (status !== 'idle') {
      setStatus('idle')
      setStatusMessage('')
    }
  }

  const validate = () => {
    const next = {}
    if (!form.name.trim()) next.name = 'Please enter your name.'
    if (!form.email.trim()) {
      next.email = 'Please enter your email.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      next.email = 'Please enter a valid email address.'
    }
    if (!form.message.trim() || form.message.trim().length < 20) {
      next.message = 'Please share a brief project summary (at least 20 characters).'
    }
    return next
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (submittingRef.current) return

    const nextErrors = validate()
    if (Object.keys(nextErrors).length) {
      setErrors(nextErrors)
      setStatus('idle')
      setStatusMessage('')
      return
    }

    submittingRef.current = true
    setIsSubmitting(true)
    setStatus('idle')
    setStatusMessage('')
    setErrors({})

    const payload = {
      name: form.name.trim(),
      email: form.email.trim(),
      company: form.company.trim(),
      service: form.service,
      message: form.message.trim(),
    }

    const idempotencyKey =
      typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function'
        ? crypto.randomUUID()
        : `${Date.now()}-${Math.random().toString(36).slice(2)}`

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Idempotency-Key': idempotencyKey,
        },
        body: JSON.stringify(payload),
      })

      let result = null
      try {
        result = await response.json()
      } catch {
        result = null
      }

      if (!response.ok) {
        if (result?.errors && typeof result.errors === 'object') {
          setErrors(result.errors)
        }
        setStatus('error')
        setStatusMessage(
          result?.error || 'Unable to send your message right now. Please try again shortly.',
        )
        return
      }

      setStatus('success')
      setStatusMessage('Thanks—your message has been sent. We’ll get back to you soon.')
      setForm(initialForm)
    } catch {
      setStatus('error')
      setStatusMessage('Unable to send your message right now. Please try again shortly.')
    } finally {
      submittingRef.current = false
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="section" aria-labelledby="contact-title">
      <div className="container">
        <Reveal>
          <SectionHeading
            id="contact-title"
            eyebrow="Contact"
            title="Let’s scope your next initiative."
            lead="Tell us about your goals. We’ll respond with next steps, timelines, and the right specialists for your project."
          />
        </Reveal>

        <div className="contact__grid">
          <Reveal>
            <aside className="contact__info">
              <h3>Talk with our team</h3>
              <p>
                Prefer email or a quick call? Reach us directly and we&apos;ll arrange a discovery
                conversation within one business day.
              </p>

              <div className="contact__detail">
                <span>Email</span>
                <a href={`mailto:${contactDetails.email}`}>{contactDetails.email}</a>
              </div>
              <div className="contact__detail">
                <span>Phone</span>
                <a href={`tel:${contactDetails.phone.replace(/[^\d+]/g, '')}`}>
                  {contactDetails.phone}
                </a>
              </div>
              <div className="contact__detail">
                <span>Availability</span>
                <p>{contactDetails.hours}</p>
              </div>
              <div className="contact__detail">
                <span>Address</span>
                <p>
                  {contactDetails.address}
                  <br />
                  {contactDetails.city}
                </p>
              </div>
            </aside>
          </Reveal>

          <Reveal delay={1}>
            <form className="contact__form" onSubmit={handleSubmit} noValidate>
              <div className="form-row">
                <div className="field">
                  <label htmlFor="name">Full name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    value={form.name}
                    onChange={updateField}
                    disabled={isSubmitting}
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                  />
                  {errors.name ? (
                    <span id="name-error" className="field__error">
                      {errors.name}
                    </span>
                  ) : null}
                </div>

                <div className="field">
                  <label htmlFor="email">Work email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={form.email}
                    onChange={updateField}
                    disabled={isSubmitting}
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                  />
                  {errors.email ? (
                    <span id="email-error" className="field__error">
                      {errors.email}
                    </span>
                  ) : null}
                </div>
              </div>

              <div className="form-row">
                <div className="field">
                  <label htmlFor="company">Company</label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    autoComplete="organization"
                    value={form.company}
                    onChange={updateField}
                    disabled={isSubmitting}
                  />
                </div>

                <div className="field">
                  <label htmlFor="service">Service interest</label>
                  <select
                    id="service"
                    name="service"
                    value={form.service}
                    onChange={updateField}
                    disabled={isSubmitting}
                  >
                    <option>Custom Software Development</option>
                    <option>Cloud &amp; DevOps</option>
                    <option>IT Consultancy &amp; Strategy</option>
                    <option>Cybersecurity &amp; Compliance</option>
                    <option>Data &amp; Analytics</option>
                    <option>Managed IT Support</option>
                  </select>
                </div>
              </div>

              <div className="field">
                <label htmlFor="message">Project details</label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={updateField}
                  disabled={isSubmitting}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? 'message-error' : undefined}
                  placeholder="Share goals, timeline, and current systems."
                />
                {errors.message ? (
                  <span id="message-error" className="field__error">
                    {errors.message}
                  </span>
                ) : null}
              </div>

              {status === 'success' ? (
                <p className="form-status" role="status">
                  {statusMessage}
                </p>
              ) : null}

              {status === 'error' ? (
                <p className="form-status form-status--error" role="alert">
                  {statusMessage}
                </p>
              ) : null}

              <Button type="submit" full disabled={isSubmitting}>
                {isSubmitting ? 'Sending…' : 'Send message'}
              </Button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

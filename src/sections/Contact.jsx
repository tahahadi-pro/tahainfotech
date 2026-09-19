import { useState } from 'react'
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
  const [submitted, setSubmitted] = useState(false)

  const updateField = (event) => {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
    setErrors((prev) => ({ ...prev, [name]: '' }))
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

  const handleSubmit = (event) => {
    event.preventDefault()
    const nextErrors = validate()
    if (Object.keys(nextErrors).length) {
      setErrors(nextErrors)
      setSubmitted(false)
      return
    }

    const subject = encodeURIComponent(`Project inquiry from ${form.name}`)
    const body = encodeURIComponent(
      [
        `Name: ${form.name}`,
        `Email: ${form.email}`,
        `Company: ${form.company || 'N/A'}`,
        `Service interest: ${form.service}`,
        '',
        form.message,
      ].join('\n'),
    )

    window.location.href = `mailto:${contactDetails.email}?subject=${subject}&body=${body}`
    setSubmitted(true)
    setForm(initialForm)
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
                  />
                </div>

                <div className="field">
                  <label htmlFor="service">Service interest</label>
                  <select id="service" name="service" value={form.service} onChange={updateField}>
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

              {submitted ? (
                <p className="form-status" role="status">
                  Thanks—your email draft is ready. Send it to complete your inquiry.
                </p>
              ) : null}

              <Button type="submit" full>
                Send message
              </Button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

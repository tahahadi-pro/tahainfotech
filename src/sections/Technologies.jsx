import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { technologies, techPrinciples } from '../data/content'

const categoryIcons = {
  'Frontend Engineering': (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path
        d="M4 5.5A1.5 1.5 0 0 1 5.5 4h13A1.5 1.5 0 0 1 20 5.5v9A1.5 1.5 0 0 1 18.5 16H13l-1.2 2.4a.8.8 0 0 1-1.4 0L9.2 16H5.5A1.5 1.5 0 0 1 4 14.5v-9Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path d="M8 9h8M8 12h5" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  ),
  'Backend & APIs': (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <rect x="3.5" y="4" width="17" height="5" rx="1.2" fill="none" stroke="currentColor" strokeWidth="1.7" />
      <rect x="3.5" y="10" width="17" height="5" rx="1.2" fill="none" stroke="currentColor" strokeWidth="1.7" />
      <rect x="3.5" y="16" width="17" height="4" rx="1.2" fill="none" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="7" cy="6.5" r="0.9" fill="currentColor" />
      <circle cx="7" cy="12.5" r="0.9" fill="currentColor" />
      <circle cx="7" cy="18" r="0.9" fill="currentColor" />
    </svg>
  ),
  'Cloud Platforms': (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path
        d="M8.5 17.5h9.2a3.3 3.3 0 0 0 .4-6.57 5 5 0 0 0-9.55-1.4A3.8 3.8 0 0 0 8.5 17.5Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
    </svg>
  ),
  'Data & Analytics': (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M5 19V10M10 19V5M15 19v-7M20 19V8" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  ),
  'DevOps & Automation': (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <circle cx="12" cy="12" r="3" fill="none" stroke="currentColor" strokeWidth="1.7" />
      <path
        d="M12 3.5v2.2M12 18.3v2.2M3.5 12h2.2M18.3 12h2.2M5.8 5.8l1.6 1.6M16.6 16.6l1.6 1.6M18.2 5.8l-1.6 1.6M7.4 16.6l-1.6 1.6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  ),
  'Security & Identity': (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path
        d="M12 3.5 5.5 6.2v5.1c0 4.2 2.8 7.9 6.5 9.2 3.7-1.3 6.5-5 6.5-9.2V6.2L12 3.5Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path d="M9.8 12.1 11.3 13.6 14.4 10.4" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
}

export function Technologies() {
  return (
    <section id="technologies" className="section section--alt" aria-labelledby="tech-title">
      <div className="container">
        <Reveal>
          <SectionHeading
            id="tech-title"
            eyebrow="Technologies"
            title="Enterprise-ready technology, chosen with intent."
            lead="Our engineers work across modern platforms and proven frameworks—selecting the right combination for performance, security, and long-term ownership."
          />
        </Reveal>

        <div className="tech__principles">
          {techPrinciples.map((item, index) => (
            <Reveal key={item.title} delay={Math.min(index + 1, 3)}>
              <article className="tech-principle">
                <span className="tech-principle__index" aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="tech__grid">
          {technologies.map((group, index) => (
            <Reveal key={group.category} delay={(index % 3) + 1}>
              <article className="tech-card">
                <div className="tech-card__top">
                  <div className="tech-card__icon" aria-hidden="true">
                    {categoryIcons[group.category]}
                  </div>
                  <div>
                    <h3>{group.category}</h3>
                    <p className="tech-card__focus">{group.focus}</p>
                  </div>
                </div>
                <p className="tech-card__summary">{group.summary}</p>
                <ul className="tech-card__items">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={1}>
          <p className="tech__footnote">
            Need a specific platform already in place? We adapt to your current stack, integrate cleanly with
            existing systems, and recommend upgrades only where they create measurable value.
          </p>
        </Reveal>
      </div>
    </section>
  )
}

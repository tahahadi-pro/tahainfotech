import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'

const stats = [
  { value: '120+', label: 'Projects delivered' },
  { value: '98%', label: 'Client retention' },
  { value: '15+', label: 'Industries served' },
  { value: '24/7', label: 'Support coverage' },
]

export function About() {
  return (
    <section id="about" className="section" aria-labelledby="about-title">
      <div className="container about__grid">
        <Reveal>
          <SectionHeading
            id="about-title"
            eyebrow="About TahaInfoTech"
            title="Clarity, craft, and accountable delivery."
            lead="TahaInfoTech is an IT and consultancy firm helping businesses turn complex technology challenges into practical, measurable outcomes."
          />
          <div className="about__body">
            <p>
              From product engineering to cloud modernization and cybersecurity, our teams combine
              technical depth with business context. We don&apos;t sell generic packages—we design
              solutions around how your organization actually operates.
            </p>
            <p>
              Whether you need a trusted delivery partner for a mission-critical build or strategic
              guidance for your next digital initiative, we bring structure, senior expertise, and
              transparent communication from the first conversation.
            </p>
          </div>
        </Reveal>

        <Reveal delay={1}>
          <div className="about__stats" aria-label="Company highlights">
            {stats.map((stat) => (
              <article className="stat" key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </article>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

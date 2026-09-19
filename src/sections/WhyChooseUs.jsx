import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { reasons } from '../data/content'

export function WhyChooseUs() {
  return (
    <section id="why-us" className="section" aria-labelledby="why-title">
      <div className="container">
        <Reveal>
          <SectionHeading
            id="why-title"
            eyebrow="Why choose us"
            title="A partner built for long-term trust."
            lead="Clients stay with TahaInfoTech because we treat every engagement like a shared outcome—not a ticket queue."
          />
        </Reveal>

        <div className="why__grid">
          {reasons.map((reason, index) => (
            <Reveal key={reason.title} delay={(index % 2) + 1}>
              <article className="why-card">
                <h3>{reason.title}</h3>
                <p>{reason.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

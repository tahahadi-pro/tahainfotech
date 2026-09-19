import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { services } from '../data/content'

export function Services() {
  return (
    <section id="services" className="section section--alt" aria-labelledby="services-title">
      <div className="container">
        <Reveal>
          <SectionHeading
            id="services-title"
            eyebrow="Services"
            title="End-to-end technology capabilities."
            lead="Choose a focused engagement or a full delivery partnership. Every service is designed to reduce risk and accelerate results."
          />
        </Reveal>

        <div className="services__grid">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={(index % 3) + 1}>
              <article className="service-card">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <ul>
                  {service.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

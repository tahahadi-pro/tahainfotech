import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { testimonials } from '../data/content'

export function Testimonials() {
  return (
    <section id="testimonials" className="section" aria-labelledby="testimonials-title">
      <div className="container">
        <Reveal>
          <SectionHeading
            id="testimonials-title"
            eyebrow="Testimonials"
            title="Trusted by leaders who ship."
            lead="Teams choose TahaInfoTech when delivery quality and communication matter as much as the technology itself."
          />
        </Reveal>

        <div className="testimonials__grid">
          {testimonials.map((item, index) => (
            <Reveal key={item.name} delay={Math.min(index + 1, 3)}>
              <figure className="testimonial">
                <blockquote>“{item.quote}”</blockquote>
                <figcaption>
                  <strong>{item.name}</strong>
                  <span>{item.role}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

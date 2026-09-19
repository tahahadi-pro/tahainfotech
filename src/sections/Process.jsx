import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { processSteps } from '../data/content'

export function Process() {
  return (
    <section id="process" className="section section--alt" aria-labelledby="process-title">
      <div className="container">
        <Reveal>
          <SectionHeading
            id="process-title"
            eyebrow="How we work"
            title="A clear path from idea to impact."
            lead="Our process keeps stakeholders aligned, reduces surprises, and creates momentum without sacrificing quality."
          />
        </Reveal>

        <div className="process__grid">
          {processSteps.map((step, index) => (
            <Reveal key={step.step} delay={Math.min(index + 1, 3)}>
              <article className="process-step">
                <p className="process-step__number">{step.step}</p>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

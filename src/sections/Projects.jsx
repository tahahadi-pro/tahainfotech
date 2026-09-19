import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { projects } from '../data/content'

export function Projects() {
  return (
    <section id="projects" className="section" aria-labelledby="projects-title">
      <div className="container">
        <Reveal>
          <SectionHeading
            id="projects-title"
            eyebrow="Projects"
            title="Selected work across industries."
            lead="A snapshot of recent delivery outcomes—retail, healthcare, finance, and logistics platforms built for real operational pressure."
          />
        </Reveal>

        <div className="projects__grid">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={(index % 2) + 1}>
              <article className="project-card">
                <span className="project-card__industry">{project.industry}</span>
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
                <p className="project-card__outcome">{project.outcome}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

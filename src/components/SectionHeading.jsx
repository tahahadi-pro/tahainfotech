export function SectionHeading({ id, eyebrow, title, lead, className = '' }) {
  return (
    <header className={`section__header ${className}`.trim()}>
      {eyebrow ? <p className="section__eyebrow">{eyebrow}</p> : null}
      <h2 id={id} className="section__title">
        {title}
      </h2>
      {lead ? <p className="section__lead">{lead}</p> : null}
    </header>
  )
}

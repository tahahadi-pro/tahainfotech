import { useEffect } from 'react'

export function LegalPage({ page }) {
  useEffect(() => {
    document.title = `${page.title} | TahaInfoTech`
    window.scrollTo(0, 0)
  }, [page])

  return (
    <section className="section legal" aria-labelledby="legal-title">
      <div className="container legal__container">
        <header className="section__header">
          <p className="section__eyebrow">Legal</p>
          <h1 id="legal-title" className="section__title">
            {page.title}
          </h1>
          <p className="section__lead">{page.lead}</p>
          <p className="legal__updated">Last updated: {page.updated}</p>
        </header>

        <div className="legal__content">
          {page.sections.map((section) => (
            <div key={section.heading} className="legal__section">
              <h2>{section.heading}</h2>
              {section.body?.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              {section.list ? (
                <ul>
                  {section.list.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

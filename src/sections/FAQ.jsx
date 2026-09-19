import { useState } from 'react'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { faqs } from '../data/content'

export function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="faq" className="section section--alt" aria-labelledby="faq-title">
      <div className="container">
        <Reveal>
          <SectionHeading
            id="faq-title"
            eyebrow="FAQ"
            title="Answers before we get started."
            lead="Straight answers to the questions teams ask most often when evaluating a technology partner."
          />
        </Reveal>

        <Reveal delay={1}>
          <div className="faq__list">
            {faqs.map((item, index) => {
              const isOpen = openIndex === index
              const panelId = `faq-panel-${index}`
              const buttonId = `faq-button-${index}`

              return (
                <div className={`faq__item ${isOpen ? 'is-open' : ''}`} key={item.question}>
                  <h3>
                    <button
                      id={buttonId}
                      type="button"
                      className="faq__trigger"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    >
                      {item.question}
                      <span className="faq__icon" aria-hidden="true">
                        +
                      </span>
                    </button>
                  </h3>
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    className="faq__panel"
                    aria-hidden={!isOpen}
                  >
                    <p>{item.answer}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

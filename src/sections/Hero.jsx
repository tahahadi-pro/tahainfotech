import { Button } from '../components/Button'
import { scrollToId } from '../hooks/useUi'

const HERO_IMAGE =
  'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1920&q=80'

export function Hero() {
  return (
    <section id="home" className="hero" aria-label="TahaInfoTech introduction">
      <div className="hero__media" aria-hidden="true">
        <img
          src={HERO_IMAGE}
          alt=""
          width={1920}
          height={1280}
          fetchPriority="high"
          decoding="async"
        />
      </div>
      <div className="hero__overlay" aria-hidden="true" />

      <div className="hero__content">
        <h1>Technology partners for ambitious growth.</h1>
        <p className="hero__copy">
          We help organizations modernize systems, launch reliable software, and make confident
          technology decisions—without the noise.
        </p>
        <div className="hero__actions">
          <Button
            href="#contact"
            onClick={(event) => {
              event.preventDefault()
              scrollToId('contact')
            }}
          >
            Book a consultation
          </Button>
          <Button
            variant="secondary"
            href="#services"
            onClick={(event) => {
              event.preventDefault()
              scrollToId('services')
            }}
          >
            Explore services
          </Button>
        </div>
      </div>
    </section>
  )
}

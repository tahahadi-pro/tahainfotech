import { navLinks, contactDetails } from '../data/content'
import { scrollToId } from '../hooks/useUi'

export function Footer() {
  const year = new Date().getFullYear()

  const handleNav = (event, id) => {
    event.preventDefault()
    scrollToId(id)
  }

  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <a
            className="logo"
            href="#home"
            onClick={(event) => handleNav(event, 'home')}
            aria-label="TahaInfoTech home"
          >
            <span className="logo__mark" aria-hidden="true">
              T
            </span>
            <span className="logo__text">
              Taha<span>Info</span>Tech
            </span>
          </a>
          <p>
            Enterprise-ready IT consultancy and digital delivery for organizations that need
            clarity, speed, and dependable technology partners.
          </p>
        </div>

        <div>
          <h4>Explore</h4>
          <ul className="footer__links">
            {navLinks.slice(0, 5).map((link) => (
              <li key={link.id}>
                <a href={`#${link.id}`} onClick={(event) => handleNav(event, link.id)}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4>Contact</h4>
          <ul className="footer__links">
            <li>
              <a href={`mailto:${contactDetails.email}`}>{contactDetails.email}</a>
            </li>
            <li>
              <a href={`tel:${contactDetails.phone.replace(/[^\d+]/g, '')}`}>
                {contactDetails.phone}
              </a>
            </li>
            <li>
              {contactDetails.address}
              <br />
              {contactDetails.city}
            </li>
            <li>
              <a href="https://tahainfotech.com" rel="noopener noreferrer">
                tahainfotech.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container footer__bottom">
        <p>© {year} TahaInfoTech. All rights reserved.</p>
        <p>
          Built for modern businesses ·{' '}
          <a href="https://tahainfotech.com" rel="noopener noreferrer">
            tahainfotech.com
          </a>
        </p>
      </div>
    </footer>
  )
}

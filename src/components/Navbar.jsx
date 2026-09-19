import { useEffect, useState } from 'react'
import { navLinks, sectionIds } from '../data/content'
import { scrollToId, useScrollSpy } from '../hooks/useUi'
import { Button } from './Button'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const activeId = useScrollSpy(sectionIds)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const handleNav = (event, id) => {
    event.preventDefault()
    setMenuOpen(false)
    scrollToId(id)
  }

  return (
    <>
      <header className={`nav ${scrolled ? 'is-scrolled' : ''}`}>
        <div className="nav__inner">
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

          <nav className="nav__links" aria-label="Primary">
            {navLinks.map((link) => (
              <a
                key={link.id}
                className={`nav__link ${activeId === link.id ? 'is-active' : ''}`}
                href={`#${link.id}`}
                onClick={(event) => handleNav(event, link.id)}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="nav__cta">
            <Button href="#contact" onClick={(event) => handleNav(event, 'contact')}>
              Start a project
            </Button>
          </div>

          <button
            type="button"
            className={`nav__toggle ${menuOpen ? 'is-open' : ''}`}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      <div
        id="mobile-menu"
        className={`nav__mobile ${menuOpen ? 'is-open' : ''}`}
        aria-hidden={!menuOpen}
        inert={menuOpen ? undefined : true}
      >
        {navLinks.map((link) => (
          <a
            key={link.id}
            className={`nav__link ${activeId === link.id ? 'is-active' : ''}`}
            href={`#${link.id}`}
            onClick={(event) => handleNav(event, link.id)}
          >
            {link.label}
          </a>
        ))}
        <Button href="#contact" onClick={(event) => handleNav(event, 'contact')} full>
          Start a project
        </Button>
      </div>
    </>
  )
}

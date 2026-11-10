import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { Hero } from './sections/Hero'
import { About } from './sections/About'
import { Services } from './sections/Services'
import { WhyChooseUs } from './sections/WhyChooseUs'
import { Technologies } from './sections/Technologies'
import { Projects } from './sections/Projects'
import { Process } from './sections/Process'
import { Testimonials } from './sections/Testimonials'
import { FAQ } from './sections/FAQ'
import { Contact } from './sections/Contact'
import { LegalPage } from './pages/LegalPage'
import { CheckoutPage } from './pages/CheckoutPage'
import { legalPages } from './data/legal'
import { scrollToId } from './hooks/useUi'
import './App.css'

function App() {
  const path = window.location.pathname.replace(/\/+$/, '') || '/'
  const legalPage = legalPages[path]
  const isCheckout = path === '/checkout'

  useEffect(() => {
    if (legalPage || isCheckout) return
    const hash = window.location.hash.slice(1)
    if (hash) requestAnimationFrame(() => scrollToId(hash))
  }, [legalPage, isCheckout])

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to main content
      </a>
      <Navbar />
      <main id="main">
        {legalPage ? (
          <LegalPage page={legalPage} />
        ) : isCheckout ? (
          <CheckoutPage />
        ) : (
          <>
            <Hero />
            <About />
            <Services />
            <WhyChooseUs />
            <Technologies />
            <Projects />
            <Process />
            <Testimonials />
            <FAQ />
            <Contact />
          </>
        )}
      </main>
      <Footer />
    </>
  )
}

export default App

import { useEffect, useRef, useState } from 'react'

function prefersReducedMotion() {
  if (typeof window === 'undefined') return false
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

export function useReveal() {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(prefersReducedMotion)

  useEffect(() => {
    const node = ref.current
    if (!node || isVisible) return undefined

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(node)
        }
      },
      { threshold: 0.16, rootMargin: '0px 0px -40px 0px' },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [isVisible])

  return { ref, isVisible }
}

export function useScrollSpy(ids, offset = 88) {
  const [activeId, setActiveId] = useState(ids[0] ?? '')

  useEffect(() => {
    const onScroll = () => {
      let current = ids[0] ?? ''

      for (const id of ids) {
        const el = document.getElementById(id)
        if (!el) continue
        const top = el.getBoundingClientRect().top
        if (top - offset <= 0) current = id
      }

      setActiveId(current)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [ids, offset])

  return activeId
}

function getNavOffset() {
  const raw = getComputedStyle(document.documentElement).getPropertyValue('--nav-height')
  const navHeight = Number.parseFloat(raw) || 76
  return navHeight + 8
}

export function scrollToId(id) {
  const el = document.getElementById(id)
  if (!el) return

  // Land on the section heading, not empty top padding under the sticky nav
  const target =
    el.querySelector('.section__header, h1, h2') || el
  const top =
    target.getBoundingClientRect().top + window.scrollY - getNavOffset()

  window.scrollTo({
    top: Math.max(0, top),
    behavior: 'smooth',
  })
}

import { useReveal } from '../hooks/useUi'

export function Reveal({ children, className = '', delay = 0 }) {
  const { ref, isVisible } = useReveal()
  const delayClass = delay ? `reveal-delay-${delay}` : ''

  return (
    <div
      ref={ref}
      className={`reveal ${delayClass} ${isVisible ? 'is-visible' : ''} ${className}`.trim()}
    >
      {children}
    </div>
  )
}

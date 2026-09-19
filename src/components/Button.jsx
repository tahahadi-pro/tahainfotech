export function Button({
  children,
  variant = 'primary',
  href,
  onClick,
  type = 'button',
  className = '',
  full = false,
  ariaLabel,
}) {
  const classes = `btn btn--${variant} ${full ? 'btn--full' : ''} ${className}`.trim()

  if (href) {
    return (
      <a className={classes} href={href} onClick={onClick} aria-label={ariaLabel}>
        {children}
      </a>
    )
  }

  return (
    <button type={type} className={classes} onClick={onClick} aria-label={ariaLabel}>
      {children}
    </button>
  )
}

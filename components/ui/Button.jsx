const VARIANTS = {
  primary: 'bg-gold hover:scale-105 text-white',
  dark: 'bg-dark hover:scale-105 text-white',
  white: 'bg-white hover:scale-105 text-dark',
}

const Button = ({
  children,
  variant = 'primary',
  type = 'button',
  className,
  href,
  ...props
}) => {
  const variantClassName = VARIANTS[variant] || VARIANTS.primary

  return (
    <button
      type={type}
      className={`text-base font-semibold py-3 px-8 rounded-full transition-all flex gap-2 items-center justify-center ${variantClassName} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button

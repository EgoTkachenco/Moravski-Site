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
  ...props
}) => {
  const variantClassName = VARIANTS[variant] || VARIANTS.primary

  return (
    <button
      type={type}
      className={`font-semibold py-2 px-8 rounded-full transition-all flex gap-2 items-center  ${variantClassName} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button

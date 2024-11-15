const Icon = ({ icon, className = 'fill-dark size-4', onClick = () => {} }) => {
  return (ICONS[icon] || ICONS['default'])({ className }) || null
}

export default Icon

const ICONS = {
  link: ({ className }) => (
    <svg
      className={className}
      viewBox="0 0 11 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M10.0853 1.51472C10.0853 1.18335 9.81665 0.914719 9.48528 0.914719L4.08528 0.914719C3.75391 0.914719 3.48528 1.18335 3.48528 1.51472C3.48528 1.84609 3.75391 2.11472 4.08528 2.11472L8.88528 2.11472L8.88528 6.91472C8.88528 7.24609 9.15391 7.51472 9.48528 7.51472C9.81665 7.51472 10.0853 7.24609 10.0853 6.91472L10.0853 1.51472ZM1.42426 10.4243L9.90955 1.93898L9.06102 1.09045L0.575736 9.57574L1.42426 10.4243Z" />
    </svg>
  ),
  default: () => 'icon',
}
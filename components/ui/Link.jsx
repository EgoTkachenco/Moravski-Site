import Link from 'next/link'
import Icon from './Icon'

const ArrowLink = ({ className = '', children, href, target }) => (
  <Link
    className={`${className} font-medium flex items-center gap-2 relative group
			transition-transform hover:scale-105 
			after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-white after:transition-all
			hover:after:w-full
		`}
    href={href}
    target={target}
  >
    {children}{' '}
    <Icon
      icon="link"
      className="fill-white size-4 transition-all group-hover:-mt-0.5 group-hover:-mr-0.5"
    />
  </Link>
)

export default ArrowLink

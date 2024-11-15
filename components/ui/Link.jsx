import Link from 'next/link'
import Icon from './Icon'

const ArrowLink = ({ className, children, href, target }) => (
  <Link
    className={`${className} font-medium flex items-center gap-2`}
    href={href}
    target={target}
  >
    {children} <Icon icon="link" className="fill-inherit size-4" />
  </Link>
)

export default ArrowLink

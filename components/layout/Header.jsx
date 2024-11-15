import { useIsTop } from '@/hooks'
import { useLocale, useText } from '@/locales'
import { Button } from '@/ui'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Header = ({ animated = false, general }) => {
  const pathname = usePathname()
  const { locale } = useLocale()
  const t = useText()

  const isTransparent = useIsTop(animated)

  return (
    <header
      className={`${
        isTransparent ? 'bg-transparent' : 'bg-white'
      } fixed transition-colors w-full top-0 z-50`}
    >
      <div className="max-w-screen-2xl w-full h-20 flex items-center px-8 md:px-16 mx-auto">
        <Link href="/">
          <Image
            src={general.logo.url}
            alt="Moravski"
            width={165}
            height={48}
          />
        </Link>

        <div className="flex gap-4 ml-16">
          {general.navigation_links.map((item, index) => (
            <NavigationLink
              isActive={pathname.includes('/' + item.slug)}
              key={index}
              href={'/' + item.slug}
            >
              {item.title}
            </NavigationLink>
          ))}
        </div>

        <NavigationLink
          href={pathname}
          locale={locale === 'ua' ? 'en' : 'ua'}
          className="ml-auto mr-4"
        >
          {locale === 'ua' ? 'EN' : 'UA'}
        </NavigationLink>

        <Button>{t('support-us')}</Button>
      </div>
    </header>
  )
}

export default Header

const NavigationLink = ({
  href,
  children,
  isActive,
  locale,
  className = '',
}) => (
  <Link
    href={href}
    className={`text-lg text-black font-medium group ${className}`}
    locale={locale}
  >
    {children}

    <div
      className={`${
        isActive ? 'w-full' : 'w-0'
      } bg-dark h-[2px] rounded  group-hover:w-full transition-all`}
    />
  </Link>
)

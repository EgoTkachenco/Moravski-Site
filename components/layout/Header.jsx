import { useIsTop } from '@/hooks'
import { useLocale, useText } from '@/locales'
import { Button, Icon } from '@/ui'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const Header = ({ animated = false, general }) => {
  const pathname = usePathname()
  const { locale } = useLocale()
  const t = useText()
  const isTransparent = useIsTop(animated)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
    document.body.style.overflow = !isMenuOpen ? 'hidden' : 'auto'
  }

  return (
    <header
      className={`${
        isTransparent ? 'bg-transparent' : 'bg-white'
      } fixed transition-colors w-full top-0 z-50`}
    >
      <div className="flex items-center w-full h-20 px-8 mx-auto max-w-screen-2xl md:px-16">
        <Link href="/" className="cursor-pointer">
          <Image
            src={general.logo.url}
            alt="Moravski"
            width={165}
            height={48}
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden gap-4 ml-16 md:flex">
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

        <div className="items-center hidden ml-auto md:flex">
          <NavigationLink
            href={pathname}
            locale={locale === 'ua' ? 'en' : 'ua'}
            className="mr-4"
          >
            {locale === 'ua' ? 'EN' : 'UA'}
          </NavigationLink>

          <Link href="/support">
            <Button>{t('support-us')}</Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="p-2 ml-auto md:hidden"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <Icon icon="menu" className="w-6 h-6" />
        </button>

        {/* Mobile Menu */}
        <div
          className={`fixed inset-0 bg-white z-40 md:hidden transition-transform duration-300 ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex items-center justify-end h-20 px-8">
            <button
              className="p-2 md:hidden"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <Icon icon="close" className="w-6 h-6" />
            </button>
          </div>
          <div className="container px-4 mx-auto">
            <nav className="flex flex-col space-y-6">
              {general.navigation_links.map((item, index) => (
                <NavigationLink
                  key={index}
                  href={'/' + item.slug}
                  isActive={pathname.includes('/' + item.slug)}
                  onClick={toggleMenu}
                >
                  {item.title}
                </NavigationLink>
              ))}
              <NavigationLink
                href={pathname}
                locale={locale === 'ua' ? 'en' : 'ua'}
                onClick={toggleMenu}
              >
                {locale === 'ua' ? 'EN' : 'UA'}
              </NavigationLink>
              <Link href="/support" onClick={toggleMenu}>
                <Button className="w-full">{t('support-us')}</Button>
              </Link>
            </nav>
          </div>
        </div>
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
  onClick,
}) => (
  <Link
    href={href}
    className={`text-lg text-black font-medium group cursor-pointer ${className}`}
    locale={locale}
    onClick={onClick}
  >
    {children}

    <div
      className={`${
        isActive ? 'w-full' : 'w-0'
      } bg-dark h-[2px] rounded group-hover:w-full transition-all`}
    />
  </Link>
)

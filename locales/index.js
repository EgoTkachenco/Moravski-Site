import { usePathname } from 'next/navigation'
import { useRouter } from 'next/router'
import en from './en'
import ua from './ua'

const translations = {
  en,
  ua,
}

export const defaultLocale = process.env.NEXT_PUBLIC_LOCALE
export const locales = Object.keys(translations)

export const useLocale = () => {
  const router = useRouter()
  const pathname = usePathname()
  const locale = router.locale

  const setLocale = (locale) => {
    const current = locale || defaultLocale
    const localeInPath = pathname.search(current) !== -1

    let newRoute = pathname

    if (localeInPath) newRoute = newRoute.replace('/' + current, '/' + locale)
    else newRoute = '/' + locale + newRoute

    newRoute = newRoute.replace('/' + defaultLocale, '')

    router.push(newRoute || '/')
  }

  return { locale: locale || defaultLocale, setLocale }
}
export const useText = () => {
  const { locale } = useLocale()
  return (key) => {
    return translations[locale || defaultLocale][key] !== undefined
      ? translations[locale || defaultLocale][key]
      : key
  }
}

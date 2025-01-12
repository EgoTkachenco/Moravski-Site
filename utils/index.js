import { getPageDetails, getGeneralInformation } from '@/api'
import { format } from 'date-fns'
import { uk, enGB } from 'date-fns/locale'

export const getPageProps = async (ctx, slug, isCustom = false) => {
  const locale = ctx.locale
  try {
    const general = await getGeneralInformation(locale)
    console.log(slug, locale, isCustom)

    const page = await getPageDetails(slug, locale, isCustom)

    return { general, page }
  } catch (error) {
    console.log(error.message)
    return null
  }
}

export const formatDate = (date, lang = 'ua') => {
  const locale = lang === 'ua' ? uk : enGB
  return format(new Date(date), 'dd MMMM yyyy', { locale })
}

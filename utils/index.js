import { getPageDetails, getGeneralInformation } from '@/api'

export const getPageProps = async (ctx, slug, isCustom = false) => {
  const locale = ctx.locale
  try {
    const general = await getGeneralInformation(locale)
    const page = await getPageDetails(slug, locale, isCustom)

    return { general, page }
  } catch (error) {
    console.log(error.message)
    return null
  }
}

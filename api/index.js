import axios from './axios'

export const getPageDetails = (slug, locale, is_custom = false) =>
  axios
    .get('/pages', {
      params: {
        locale: locale === 'ua' ? 'uk' : locale,
        filters: { slug, is_custom },
        populate: {
          metadata: '*',
          blocks: {
            on: {
              'blocks.text-block': { populate: '*' },
              'blocks.data-list': { populate: '*' },
              'blocks.counter-list': { populate: '*' },
              'blocks.card-list': {
                populate: {
                  cards: { populate: '*' },
                },
              },
            },
          },
        },
      },
    })
    .then((res) => res.data[0])

export const getPages = () => axios.get('/pages')

export const getGeneralInformation = (locale) =>
  axios
    .get('/general-information', {
      params: {
        locale: locale === 'ua' ? 'uk' : locale,
        populate: {
          logo: { populate: '*' },
          metadata: { populate: '*' },
          navigation_links: { populate: '*' },
        },
      },
    })
    .then((res) => res.data)

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
              'blocks.carousel': {
                populate: {
                  slides: { populate: '*' },
                },
              },
              'blocks.support-block': { populate: '*' },
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

export const getPosts = (locale, page) =>
  axios.get('/posts', {
    params: {
      // filters: {},
      sort: 'createdAt:desc',
      locale: locale === 'ua' ? 'uk' : locale,
      populate: '*',
      pagination: { page, pageSize: 10 },
    },
  })

export const getPost = (id, locale) =>
  axios.get(`/posts/${id}`, {
    params: {
      locale: locale === 'ua' ? 'uk' : locale,
      populate: '*',
    },
  })

export const getConcerts = (locale, page) =>
  axios.get('/concerts', {
    params: {
      sort: 'createdAt:desc',
      locale: locale === 'ua' ? 'uk' : locale,
      populate: '*',
      pagination: { page, pageSize: 10 },
    },
  })

export const getConcert = (id, locale) =>
  axios.get(`/concerts/${id}`, {
    params: {
      locale: locale === 'ua' ? 'uk' : locale,
      populate: '*',
    },
  })

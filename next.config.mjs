/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  i18n: {
    locales: ['en', 'ua'],
    defaultLocale: 'ua',
    localeDetection: false,
  },
  rewrites: async () => {
    return [
      {
        source: '/home',
        destination: '/',
      },
      {
        source: '/uploads/:path*',
        destination: process.env.API_URL + '/uploads/:path*',
      },
      {
        source: '/api/:path*',
        destination: process.env.API_URL + '/api/:path*',
      },
      // Strapi Admin rewrites
      {
        source: '/admin',
        destination: process.env.API_URL + '/admin',
      },
      {
        source: '/admin/:path*',
        destination: process.env.API_URL + '/admin' + '/:path*',
      },
      {
        source: '/content-manager/:path*',
        destination: process.env.API_URL + '/content-manager/:path*',
      },
      {
        source: '/content-type-builder/:path*',
        destination: process.env.API_URL + '/content-type-builder/:path*',
      },
      {
        source: '/i18n/:path*',
        destination: process.env.API_URL + '/i18n/:path*',
      },
      {
        source: '/upload/:path*',
        destination: process.env.API_URL + '/upload/:path*',
      },
      {
        source: '/users-permissions/:path*',
        destination: process.env.API_URL + '/users-permissions/:path*',
      },
    ]
  },
}

export default nextConfig

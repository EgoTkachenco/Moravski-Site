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
    ]
  },
}

export default nextConfig

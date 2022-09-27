/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: false,
  swcMinify: true,
  i18n: {
    locales: ['ar', 'en'],
    defaultLocale: 'ar',
  },
}

module.exports = nextConfig


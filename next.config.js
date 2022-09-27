/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    unoptimized: true
  },
  basePath: '/us-them',
  assetPrefix: '/us-them',
}

module.exports = nextConfig


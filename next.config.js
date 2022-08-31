/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.prismic.io'],
  },
  experimental: { images: { layoutRaw: true } },
}

module.exports = nextConfig

// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [],
    // You can add domains here if you're using external images
    // domains: ['example.com'],
  },
}

module.exports = nextConfig
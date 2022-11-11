/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['dvvjkgh94f2v6.cloudfront.net', 'cdn.rets.ly'],
    unoptimized: true,
  },
}

module.exports = nextConfig

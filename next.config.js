/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['dvvjkgh94f2v6.cloudfront.net', 'cdn.rets.ly'],
    unoptimized: true,
    exportPathMap: async function (
      defaultPathMap,
      { dev, dir, outDir, distDir, buildId }
    ) {
      return {
        '/': { page: '/' },
        '/property/buy/city/city': { page: '/property/buy/city/[name]' },
      }
    },
  },
}

module.exports = nextConfig

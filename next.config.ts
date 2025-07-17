/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  output: 'export',
  basePath: '/souzarod', // Substitua pelo nome do seu repositório
  assetPrefix: '/souzarod/', // Substitua pelo nome do seu repositório
}

module.exports = nextConfig
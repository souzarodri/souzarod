import { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  output: 'export',
  basePath: '/souzarod',
  assetPrefix: '/souzarod/',
}

export default nextConfig
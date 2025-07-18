/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Configuração para GitHub Pages
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/souzarod' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/souzarod' : '',
  // Para TinaCMS funcionar com GitHub Pages
  async rewrites() {
    return [
      {
        source: '/admin',
        destination: '/admin/index.html',
      },
    ];
  },
}

module.exports = nextConfig
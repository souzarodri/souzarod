/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  output: 'export',
  // Para GitHub Pages com repositório nomeado
  basePath: '/souzarod',
  assetPrefix: '/souzarod',
  // Configuração específica para TinaCMS
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
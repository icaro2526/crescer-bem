/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
  // Configurações para evitar erros de RSC payload
  typescript: {
    ignoreBuildErrors: false,
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
  // Configurações adicionais para resolver problemas de RSC
  outputFileTracingIncludes: {
    '/': ['./src/**/*'],
  },
  // Desabilitar cache agressivo que pode causar problemas de RSC
  onDemandEntries: {
    maxInactiveAge: 60 * 1000,
    pagesBufferLength: 5,
  },
}

module.exports = nextConfig

/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: true,
  // swcMinify: true,
  experimental: {
    images: {
      allowFutureImage: true,
      layoutRaw: true,
      minimumCacheTTL: 60
    }
  }
}

module.exports = nextConfig

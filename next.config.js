/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost'],
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "1337",
        pathname: "/uploads/**",
      },
    ],
  },
  env: {
    NEXT_PUBLIC_STRAPI_API_URL: process.env.NEXT_PUBLIC_STRAPI_API_URL,
  },
}

module.exports = nextConfig

import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "smartplastica.com.br",
      },
      {
        protocol: "https",
        hostname: "*.smartplastica.com.br",
      },
    ],
  },
}

export default nextConfig

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  devIndicators: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.discordapp.com',
      },
      {
        protocol: "https",
        hostname: "github.com", // GitHub profile pictures
      },
    ],
  },
};

export default nextConfig;

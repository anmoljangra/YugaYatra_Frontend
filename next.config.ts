import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.yugayatraretail.com",
      },
      {
        protocol: "https",
        hostname: "yugayatra.com",
      },
    ],
  },
};

export default nextConfig;

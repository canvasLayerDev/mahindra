import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.mahindra.com",
        pathname: "/sites/default/files/**",
      },
      {
        protocol: "https",
        hostname: "auto.mahindra.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;

import type { NextConfig } from "next";

export const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/dg4kcty4w/image/upload/**",
      },
    ],
  },
};

export default nextConfig;

import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

export const basePath = isProd ? "/my-website" : "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

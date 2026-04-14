import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isProd ? "/my-website" : "",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_LAST_UPDATED: new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
  },
};

export default nextConfig;

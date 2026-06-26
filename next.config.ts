import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_LAST_UPDATED: new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
  },
};

export default nextConfig;

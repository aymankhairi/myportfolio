import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/myportfolio",
  assetPrefix: "/myportfolio/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

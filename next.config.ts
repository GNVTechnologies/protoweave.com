import type { NextConfig } from "next";

const isProduction = process.env.NODE_ENV === 'production';
const repoName = 'protoweave'; // Replace with your actual GitHub repository name

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true
  },
  distDir: 'out', // GitHub Pages expects 'out' directory
  assetPrefix: isProduction ? `` : '',
  basePath: isProduction ? `` : '',
  trailingSlash: true,
};

export default nextConfig;

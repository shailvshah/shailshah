import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Ensure the base path matches your GitHub repository name if it's not a user site
  // basePath: '/shailshah',
};

export default nextConfig;

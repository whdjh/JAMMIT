import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    domains: ['torip.s3.ap-northeast-2.amazonaws.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
      },
    ],
  },
  turbopack: {
    rules: {
      '*.svg': {
        loaders: ['@svgr/webpack'],
        as: '*.js',
      },
    },
  },
};

export default nextConfig;

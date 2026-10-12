import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  // Les photographies sont servies et redimensionnées par le CDN d'Unsplash : voir src/lib/image-loader.ts.
  images: { loader: 'custom', loaderFile: './src/lib/image-loader.ts' },
};

export default nextConfig;

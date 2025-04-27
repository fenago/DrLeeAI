/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  // This improves compatibility with Netlify
  trailingSlash: true,
  // Static HTML export
  output: 'export',
  // Disable image optimization which is not supported in static export
  images: {
    unoptimized: true,
  },
  // Disable TypeScript type checking in production build
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    ignoreBuildErrors: true,
  },
  // Disable ESLint during build
  eslint: {
    ignoreDuringBuilds: true,
  },
  productionBrowserSourceMaps: true,
};

module.exports = nextConfig
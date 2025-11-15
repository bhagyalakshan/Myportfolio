/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Enable static HTML export
  output: 'export',
  // GitHub Pages base path
  basePath: '/Myportfolio',
}
export default nextConfig

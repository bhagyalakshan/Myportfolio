/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export', // <-- tells Next.js to do static export
  turbopack: {
    root: '.', // Silence workspace root warning
  },
};

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  ...(process.env.NODE_ENV === "production" && {
    output: "export",
    basePath: "/Myportfolio",
    assetPrefix: "/Myportfolio",
  }),
};

export default nextConfig;

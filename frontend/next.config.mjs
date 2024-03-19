/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["localhost", "blog.bracketed.tech"],
  },
  output: 'standalone',
};

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["localhost", "blog.bracketed.tech"],
  },
  publicRuntimeConfig: {
    trailingSlash: true,
  },
};

export default nextConfig;

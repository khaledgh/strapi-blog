/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["localhost", "blog.bracketed.tech"],
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
};

export default nextConfig;

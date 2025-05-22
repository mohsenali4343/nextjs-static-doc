/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', // enables static export
    images: {
    unoptimized: true, // ✅ disable Next.js Image Optimization API
  },
};

export default nextConfig;

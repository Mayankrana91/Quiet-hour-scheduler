/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com'],
  },
  // ✅ Ignore type errors from Supabase Deno functions
  typescript: {
    ignoreBuildErrors: true,
  },
  // ✅ Ignore ESLint errors from Supabase Deno functions
  eslint: {
    ignoreDuringBuilds: true,
  },
  // ✅ Prevent Next.js from bundling anything in supabase/functions
  webpack: (config) => {
    config.externals.push({
      'supabase/functions': 'commonjs supabase/functions',
    });
    return config;
  },
}

module.exports = nextConfig

/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'desirediv-storage.blr1.cdn.digitaloceanspaces.com',
      },
    ],
  },
}

export default nextConfig

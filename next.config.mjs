/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.shoppex.io',
      },
      {
        protocol: 'https',
        hostname: 'api.shoppex.io',
      },
      {
        protocol: 'https',
        hostname: '**.shoppex.io',
      },
      {
        protocol: 'https',
        hostname: 'imagedelivery.net',
      },  
    ],
  },
};

export default nextConfig;

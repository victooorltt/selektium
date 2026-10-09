/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: '/servicios',
        destination: '/servicios/empresas',
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;

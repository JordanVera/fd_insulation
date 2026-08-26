import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/katy-tx',
        destination: '/katy-tx-attic-insulation',
        permanent: true,
      },
      {
        source: '/woodlands-tx',
        destination: '/woodlands-tx-attic-insulation',
        permanent: true,
      },
      {
        source: '/the-woodlands-tx',
        destination: '/woodlands-tx-attic-insulation',
        permanent: true,
      },
      {
        source: '/the-woodlands-tx-attic-insulation',
        destination: '/woodlands-tx-attic-insulation',
        permanent: true,
      },
      {
        source: '/fort-worth-tx',
        destination: '/ft-worth-tx',
        permanent: true,
      },
      {
        source: '/fort-worth-tx-attic-insulation',
        destination: '/ft-worth-tx',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

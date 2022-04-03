/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["i.scdn.co"],
  },
  webpack: (config, { isServer }) => {
    if (isServer) return config;

    const { resolve } = config;

    return {
      ...config,
      resolve: {
        ...resolve,
        fallback: {
          ...resolve.fallback,
          net: false,
          tls: false,
          fs: false,
          child_process: false,
        },
      },
    };
  },
};

module.exports = nextConfig;

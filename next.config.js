/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["i.scdn.co", "www.notion.so", "s3.us-west-2.amazonaws.com"],
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

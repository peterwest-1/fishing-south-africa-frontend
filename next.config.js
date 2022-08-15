/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["storage.cloud.google.com", "storage.googleapis.com"],
  },
};

module.exports = nextConfig;

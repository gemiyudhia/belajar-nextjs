/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // daftarkan image
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "static.nike.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;

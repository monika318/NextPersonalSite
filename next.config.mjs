/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/",
        destination: "/monika-web.html",
      },
      {
        source: "/data",
        destination: "/monika-data.html",
      },
    ];
  },
};

module.exports = nextConfig;

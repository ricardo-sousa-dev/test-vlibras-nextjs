/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "Access-Control-Allow-Origin", value: "*" },
        ],
      },
      {
        source: "/(.*)",
        headers: [
          { key: "Access-Control-Allow-Headers", value: "Origin, X-Requested-With, Content-Type, Accept" },
        ],
      },
    ]
  },
}

module.exports = nextConfig

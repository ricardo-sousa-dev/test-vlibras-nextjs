/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: "/_next/:path*",
        headers: [
          { key: "Access-Control-Allow-Origin", value: "https://repository-dth.vlibras.gov.br/api/signs" },
        ],
      },
    ]
  },
}

module.exports = nextConfig

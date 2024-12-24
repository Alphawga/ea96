/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: '/:path*',
          has: [
            {
              type: 'host',
              value: 'site1.com',
            },
          ],
          destination: '/site1/:path*',
        },
        {
          source: '/:path*',
          has: [
            {
              type: 'host',
              value: 'site2.com',
            },
          ],
          destination: '/site2/:path*',
        },
      ],
    }
  },
  // Enable multiple domains
  images: {
    domains: ['site1.com', 'site2.com'],
  },
}

module.exports = nextConfig 
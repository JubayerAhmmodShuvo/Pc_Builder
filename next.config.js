/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "www.trustedreviews.com",
      "cdn.mos.cms.futurecdn.net",
      "www.datocms-assets.com",
      "www.zdnet.com",
    ],
  },
};

module.exports = nextConfig

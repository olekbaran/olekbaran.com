/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  nextConfig,
  i18n: {
    locales: ['en', 'pl'],
    defaultLocale: 'en',
  },
  trailingSlash: true,
  images: {
    dangerouslyAllowSVG: true,
    domains: ['media.graphassets.com'],
  },
};

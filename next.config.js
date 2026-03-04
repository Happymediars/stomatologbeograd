/**
 * @type {import('next').NextConfig}
 * This is the Next.js configuration for the Stomatolog Beograd site.
 *
 * Important settings include enabling the app directory and a placeholder for redirects.
 * When you provide a CSV or sitemap of legacy URLs this array can be populated with 301 redirects
 * to preserve SEO. See README.md for instructions.
 */
const nextConfig = {
  reactStrictMode: true,
  appDir: true,
  async redirects() {
    // TODO: Replace with your own redirect rules once old URLs are mapped.
    return [];
  },
};

module.exports = nextConfig;

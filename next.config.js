/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export',
  images: {
    domains: ['api.starlynthrillingadventures.com', 'api.africancitrilsafaris.com', 'images.unsplash.com'],
    unoptimized: true,
  }
}

module.exports = nextConfig

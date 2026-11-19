/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    // Collab QR order page (static file in public/collab/index.html)
    return [{ source: "/collab", destination: "/collab/index.html" }];
  },
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The docs site and the demo portal have separate root layouts (different <html lang dir>);
  // a global 404 is needed for URLs that match neither.
  experimental: { globalNotFound: true },
};

export default nextConfig;

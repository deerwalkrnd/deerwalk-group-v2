import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Keep Turbopack rooted in this project (avoids picking up parent lockfiles)
  turbopack: {
    root: process.cwd(),
  },

  // Static HTML export — run `npm run build`, output goes to /out
  output: "export",

  // Required for static export (no Next image optimization server)
  images: {
    unoptimized: true,
  },

  // Cleaner static URLs: /about instead of /about.html
  trailingSlash: true,
};

export default nextConfig;

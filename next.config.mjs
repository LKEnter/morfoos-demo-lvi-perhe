// Demo deploys (MORFOOS_DEMO=1): admin is not shipped; skip auth-secret guard during production builds.
if (process.env.MORFOOS_DEMO === "1" && !process.env.MORFOOS_AUTH_SECRET?.trim()) {
  process.env.MORFOOS_AUTH_SECRET = "demo-mode-build-placeholder";
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  transpilePackages: ["@morfoos/core", "@morfoos/morfoos-os"],
  experimental: {
    optimizePackageImports: ["@morfoos/core", "lucide-react"],
  },
  // Next ships legacy polyfills unconditionally; demo targets only modern browsers.
  turbopack: {
    resolveAlias: {
      "../build/polyfills/polyfill-module": "./lib/modern-polyfill.js",
      "next/dist/build/polyfills/polyfill-module": "./lib/modern-polyfill.js",
    },
  },
  webpack(config) {
    config.resolve.alias = {
      ...config.resolve.alias,
      "../build/polyfills/polyfill-module": false,
      "next/dist/build/polyfills/polyfill-module": false,
    };
    return config;
  },
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;

/** @type {import('next').NextConfig} */
const isGithubPages = process.env.GITHUB_PAGES === "true";
const basePath = isGithubPages ? process.env.NEXT_PUBLIC_BASE_PATH || "" : "";

const nextConfig = {
  output: isGithubPages ? "export" : "standalone",
  basePath,
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
  poweredByHeader: false,
  ...(isGithubPages
    ? {}
    : {
        async headers() {
          return [
            {
              source: "/(.*)",
              headers: [
                { key: "X-Content-Type-Options", value: "nosniff" },
                { key: "X-Frame-Options", value: "DENY" },
                {
                  key: "Referrer-Policy",
                  value: "strict-origin-when-cross-origin",
                },
                {
                  key: "Permissions-Policy",
                  value: "camera=(), microphone=(), geolocation=()",
                },
                { key: "X-DNS-Prefetch-Control", value: "off" },
              ],
            },
          ];
        },
      }),
};

module.exports = nextConfig;

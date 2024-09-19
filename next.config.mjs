import path from "path";
import { fileURLToPath } from "url";

// Use import.meta.url and fileURLToPath to get the __dirname equivalent in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Enable experimental features like the new app directory (optional)
  experimental: {
    appDir: true,
  },

  // Set up webpack aliases (e.g., alias '@' for 'src' folder)
  webpack: (config) => {
    config.resolve.alias["@"] = path.resolve(__dirname, "src");
    return config;
  },
};

export default nextConfig;

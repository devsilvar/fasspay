import path from "path";
import { fileURLToPath } from "url";

// Derive __dirname from import.meta.url
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": path.resolve(__dirname, "src"),
    };
    return config;
  },
  // Optimize for production
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  // Enable experimental features for better performance
  experimental: {
    optimizeCss: true,
  },
};

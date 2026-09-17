/** @type {import('next').NextConfig} */
const nextConfig = {
  // Fix: multiple lockfiles warning — pin workspace root to this project directory
  outputFileTracingRoot: require("path").join(__dirname),
};

module.exports = nextConfig;

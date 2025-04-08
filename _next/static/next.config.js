/** @type {import('next').NextConfig} */

const isGithubActions = process.env.GITHUB_ACTIONS === 'true'

// Define the repository name variable
const repo = 'norman-mei.github.io-metromemory' // <-- Make sure this matches your repository name exactly

const nextConfig = {
  // Configure Next.js for static export
  output: 'export',

  // Set the base path for routing
  basePath: isGithubActions ? `/${repo}` : '',

  // Set the asset prefix for loading static files (JS, CSS, images)
  assetPrefix: isGithubActions ? `/${repo}/` : '',

  // Optional: Recommended for static exports
  trailingSlash: true,

  // Optional: Disable image optimization if using static export without a custom loader
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig

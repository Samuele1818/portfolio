const withMDX = require('@next/mdx')({
 extension: /\.mdx?$/,
 options: {
  remarkPlugins: [],
  rehypePlugins: [],
  // If you use `MDXProvider`, uncomment the following line.
  // providerImportSource: "@mdx-js/react",
 },
})

/** @type {import('next').NextConfig} */
const nextConfig = {
 reactStrictMode: false,
 swcMinify: true,
 experimental: {
  mdxRs: true,
 },
 pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
 webpack(config) {
  config.module.rules.push({
   test: /\.svg$/,
   use: ['@svgr/webpack'],
  })

  return config
 },
}

module.exports = withMDX(nextConfig)

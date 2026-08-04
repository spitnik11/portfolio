/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export -> plain HTML/JS/CSS in `out/`, deployable to Cloudflare Pages.
  // No server, no runtime secrets, smallest attack surface.
  output: 'export',
  images: { unoptimized: true },
  trailingSlash: true,
  // Don't auto-generate CLAUDE.md / AGENTS.md into the repo.
  agentRules: false,
};

export default nextConfig;

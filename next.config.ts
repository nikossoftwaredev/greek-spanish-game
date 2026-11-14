import type { NextConfig } from "next";

// Guidance lives in CLAUDE.md and .claude/rules/, so stop `next dev` from injecting its own block.
const nextConfig: NextConfig = {
  agentRules: false,
  // The starter this project began from used /en and /el prefixes. Old bookmarks and browser
  // autocomplete still point there, so send them to the same page without the prefix.
  redirects: async () => [
    { source: "/:locale(en|el)", destination: "/", permanent: false },
    { source: "/:locale(en|el)/:path*", destination: "/:path*", permanent: false },
  ],
};

export default nextConfig;

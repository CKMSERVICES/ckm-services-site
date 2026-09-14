import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/constants";

// Explicitly welcome the major AI answer engines (ChatGPT, Claude,
// Perplexity, Gemini/AI Overviews, Copilot) alongside regular search bots —
// blocking them would mean those assistants simply can't cite CKM Services.
const aiBots = [
  "GPTBot",
  "ChatGPT-User",
  "PerplexityBot",
  "ClaudeBot",
  "anthropic-ai",
  "Google-Extended",
  "Bingbot",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      ...aiBots.map((userAgent) => ({ userAgent, allow: "/" })),
    ],
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}

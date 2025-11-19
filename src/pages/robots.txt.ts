import type { APIRoute } from "astro";

// Helper function that generates the content for the robots.txt file
// This specifies that all web crawlers (User-agent: *) have access to the entire site (Allow: /)
const getRobotsTxt = (sitemapURL?: URL) =>
  [
    "User-agent: *",
    "Allow: /",
    sitemapURL ? `Sitemap: ${sitemapURL.href}` : null,
  ]
    .filter(Boolean)
    .join("\n")
    .concat("\n");

// API route for serving the robots.txt file
// When a GET request is made to this route, it returns the generated robots.txt content
export const GET: APIRoute = ({ site }) => {
  const sitemapURL = site ? new URL("sitemap-index.xml", site) : undefined;
  return new Response(getRobotsTxt(sitemapURL));
};

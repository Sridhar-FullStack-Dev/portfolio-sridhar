import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/", "/blog/*", "/projects/*", "/about", "/contact", "/resume"],
        disallow: ["/api/*", "/_next/*", "/*.json$"],
        crawlDelay: 10,
      },
    ],
    sitemap: "https://sridhar-portfolio.com/sitemap.xml",
    host: "https://sridhar-portfolio.com",
  };
}

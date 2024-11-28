import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://sridhar-portfolio.com",
      lastModified: new Date(),
    },
    {
      url: "https://sridhar-portfolio.com/about",
      lastModified: new Date(),
    },
    {
      url: "https://sridhar-portfolio.com/projects",
      lastModified: new Date(),
    },
    {
      url: "https://sridhar-portfolio.com/blog",
      lastModified: new Date(),
    },
    {
      url: "https://sridhar-portfolio.com/contact",
      lastModified: new Date(),
    },
    {
      url: "https://sridhar-portfolio.com/resume",
      lastModified: new Date(),
    },
  ];
}

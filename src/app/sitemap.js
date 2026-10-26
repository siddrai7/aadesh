import { site } from "@/lib/site";
import { pages } from "@/lib/seo";

// Served at /sitemap.xml: the list of pages for Google to crawl.
export default function sitemap() {
  return Object.values(pages).map(({ path }) => ({
    url: new URL(path, site.url).href,
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : 0.8,
  }));
}

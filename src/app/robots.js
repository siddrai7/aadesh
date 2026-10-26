import { site } from "@/lib/site";

// Served at /robots.txt: lets search engines crawl everything and points them to the sitemap.
export default function robots() {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: new URL("/sitemap.xml", site.url).href,
    host: site.url,
  };
}

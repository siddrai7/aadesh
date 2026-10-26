// Search engine details: each page's title and description, and the structured
// data that tells Google who Aadesh is, what he offers and where.
//
// Titles show as the blue link in Google, descriptions as the text under it.
// Keep titles under ~70 characters and descriptions under ~165 so they aren't cut off.

import { services, site } from "./site";

export const pages = {
  home: {
    path: "/",
    title: "Aadesh Sharma — Corporate Trainer & Real Estate Strategist, Delhi NCR",
    description:
      "Corporate trainer, real estate strategist and business growth consultant for Gurgaon, Delhi and Noida, with 20+ years in sales, leadership and business development.",
  },
  about: {
    path: "/about",
    title: "About Aadesh Sharma — 20+ Years in Sales, Real Estate & Training",
    description:
      "Entrepreneur, real estate strategist and corporate trainer in Delhi NCR, with 20+ years across sales, business development, real estate and franchise development.",
  },
  services: {
    path: "/services",
    title: "Corporate Training & Real Estate Consulting, Delhi NCR — Aadesh Sharma",
    description:
      "Sales and leadership training for corporate teams, real estate strategy and channel partner development, and business growth consulting in Gurgaon, Delhi and Noida.",
  },
  contact: {
    path: "/contact",
    title: "Contact Aadesh Sharma — Gurgaon, Delhi & Noida",
    description:
      "Enquire about corporate training, real estate consulting or a business partnership in Gurgaon, Delhi or Noida. WhatsApp, call or email Aadesh Sharma directly.",
  },
};

// Google ignores this tag; a few other search engines still read it.
export const keywords = [
  "Aadesh Sharma",
  "Aadesh Kumar Sharma",
  "corporate trainer in Gurgaon",
  "corporate trainer in Delhi",
  "corporate trainer in Noida",
  "sales training Delhi NCR",
  "leadership training programs",
  "real estate consultant Gurgaon",
  "real estate strategist Delhi NCR",
  "channel partner development",
  "business growth consultant Delhi",
  "franchise development consultant",
];

export const ogImage = { url: site.portrait, width: 1121, height: 1403, alt: site.name };

// Metadata for one page: its own title, description, canonical address and link preview.
export function pageMetadata({ path, title, description }) {
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      siteName: site.name,
      locale: "en_IN",
      type: "website",
      images: [ogImage],
    },
  };
}

// ---------- Structured data (JSON-LD) ----------

const abs = (path) => new URL(path, site.url).href;
const sameAs = [site.socials.linkedin, site.socials.instagram, site.socials.facebook];
const telephone = site.contact.phone.replace(/\s/g, "");

const areaServed = [
  { "@type": "City", name: "Gurugram", alternateName: "Gurgaon" },
  { "@type": "City", name: "Delhi", alternateName: "New Delhi" },
  { "@type": "City", name: "Noida" },
];

export const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": abs("/#website"),
      url: abs("/"),
      name: site.name,
      inLanguage: "en-IN",
      publisher: { "@id": abs("/#person") },
    },
    {
      "@type": "Person",
      "@id": abs("/#person"),
      name: site.name,
      alternateName: "Aadesh Kumar Sharma",
      url: abs("/"),
      image: abs(site.portrait),
      jobTitle: site.roles,
      description: pages.home.description,
      email: site.contact.email,
      telephone,
      knowsLanguage: ["Hindi", "English"],
      knowsAbout: [
        "Corporate training",
        "Sales training",
        "Leadership development",
        "Team development",
        "Real estate strategy",
        "Real estate consulting",
        "Project marketing",
        "Channel partner development",
        "Investor relations",
        "Business development",
        "Franchise development",
        "Strategic networking",
      ],
      sameAs,
    },
    {
      "@type": "ProfessionalService",
      "@id": abs("/#business"),
      name: `${site.name} — Corporate Training, Real Estate Strategy & Business Growth`,
      url: abs("/services"),
      image: abs(site.portrait),
      description: pages.services.description,
      email: site.contact.email,
      telephone,
      founder: { "@id": abs("/#person") },
      areaServed,
      knowsLanguage: ["Hindi", "English"],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Services",
        itemListElement: services.map((s) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: s.title,
            description: s.body,
            url: abs(`/services#${s.id}`),
            areaServed,
          },
        })),
      },
      sameAs,
    },
  ],
};

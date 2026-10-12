// Central place for every editable detail on the site.
// TODO: replace the placeholder contact details below with Aadesh's real ones.

export const site = {
  name: "Aadesh Sharma",
  shortName: "Aadesh",
  role: "Real Estate Strategist · Entrepreneur · Corporate Trainer",
  roles: ["Real Estate Strategist", "Entrepreneur", "Corporate Trainer"],
  tagline: "I build people, partnerships & possibilities.",
  promise: "Transforming relationships into opportunities, ideas into businesses, and vision into growth.",
  portrait: "/images/aadesh-sharma.jpg",
  url: "https://aadeshsharma.com",
  location: "India · Available worldwide",

  contact: {
    email: "hello@aadeshsharma.com",
    phone: "+91 98765 43210",
    // Digits only, with country code — used for wa.me links.
    whatsapp: "919876543210",
  },

  socials: {
    instagram: "https://www.instagram.com/aadesh_1978",
    instagramHandle: "@aadesh_1978",
    facebook: "https://www.facebook.com/aadeshkumarsharma",
    facebookHandle: "Aadesh Kumar Sharma",
  },
};

export const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export const telHref = `tel:${site.contact.phone.replace(/\s/g, "")}`;

export function whatsappLink(message = "Hi Aadesh, I'd like to connect with you.") {
  return `https://wa.me/${site.contact.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const services = [
  {
    id: "real-estate",
    no: "01",
    title: "Real Estate Strategy & Consulting",
    short: "Real Estate Strategy",
    lede: "Clear thinking and the right connections for every real estate decision.",
    body: "Helping developers, investors and partners understand real estate opportunities, evaluate business potential and build a strategic approach to growth — with transparent communication and informed decisions at every step.",
    points: [
      "Real estate opportunities",
      "Project marketing",
      "Investor relations",
      "Developer–broker collaboration",
      "Channel partner development",
      "Strategic networking",
    ],
  },
  {
    id: "business-growth",
    no: "02",
    title: "Entrepreneurship & Business Growth",
    short: "Business Growth",
    lede: "Collaborative ecosystems where businesses grow together.",
    body: "Building the alliances, expansion plans and partner networks that turn ideas into businesses — combining relationship building, market understanding and execution-oriented thinking.",
    points: [
      "Business development",
      "Strategic alliances",
      "Market expansion",
      "Franchise development",
      "Collaborative business opportunities",
    ],
  },
  {
    id: "training",
    no: "03",
    title: "Corporate Training & People Development",
    short: "Corporate Training",
    lede: "Programs that help people recognise — and unlock — their potential.",
    body: "Interactive training for teams and leaders. When people improve their mindset, skills and relationships, they unlock new levels of personal and professional growth.",
    points: [
      "Leadership mindset",
      "Sales skills",
      "Communication",
      "Relationship building",
      "Team development",
      "Growth-oriented thinking",
    ],
  },
  {
    id: "sales-networking",
    no: "04",
    title: "Sales, Marketing & Strategic Networking",
    short: "Sales & Networking",
    lede: "Two decades of experience in turning conversations into lasting relationships.",
    body: "Practical guidance rooted in more than twenty years across sales, marketing, insurance, network marketing and business development — focused on the relationships that create long-term value.",
    points: [
      "Business relationships",
      "Customer engagement",
      "Team building",
      "Partnership development",
    ],
  },
];

export const pillars = [
  { title: "People Development", body: "Helping individuals recognise their potential and grow their mindset, skills and confidence." },
  { title: "Business Growth", body: "Identifying the right opportunities and building strategies that create sustainable value." },
  { title: "Relationship Building", body: "Connecting the right people — developers, partners, investors and teams — on a foundation of trust." },
  { title: "Leadership Mindset", body: "Clarity, ownership and growth-oriented thinking that people and organisations can build on." },
];

export const mission =
  "To empower people, build strategic relationships, and create meaningful business opportunities through knowledge, collaboration, leadership, and a growth-oriented mindset.";

export const vision =
  "To become a trusted name in real estate strategy, entrepreneurship, and people development by building a network of empowered professionals, successful business partnerships, and value-driven opportunities.";

export const philosophy = ["Build People", "Build Relationships", "Build Businesses", "Build a Legacy"];

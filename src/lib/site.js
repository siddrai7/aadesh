// Central place for every editable detail on the site.
// TODO: replace the placeholder contact details below with Aadesh's real ones.

export const site = {
  name: "Aadesh Sharma",
  shortName: "Aadesh",
  role: "Sales Coach & Motivational Speaker",
  tagline: "Helping people sell with conviction and live with purpose.",
  url: "https://aadeshsharma.com",
  location: "India · Available worldwide",

  contact: {
    email: "hello@aadeshsharma.com",
    phone: "+91 98765 43210",
    // Digits only, with country code — used for wa.me links.
    whatsapp: "919876543210",
  },

  socials: {
    instagram: "https://instagram.com/aadeshsharma",
    instagramHandle: "@aadeshsharma",
    facebook: "https://facebook.com/aadeshsharma",
    facebookHandle: "Aadesh Sharma",
  },
};

export const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export const telHref = `tel:${site.contact.phone.replace(/\s/g, "")}`;

export function whatsappLink(message = "Hi Aadesh, I'd like to know more about your sessions.") {
  return `https://wa.me/${site.contact.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const services = [
  {
    id: "speaking",
    no: "01",
    title: "Motivational Speaking",
    lede: "Keynotes that move rooms — and keep moving them long after the applause.",
    body: "High-energy, story-led sessions for conferences, colleges, corporate offsites and sales kick-offs. Every talk is built around your audience, your goals and the change you want to see on Monday morning.",
    points: ["Conference keynotes", "Corporate offsites & kick-offs", "College & youth sessions", "Leadership town halls"],
  },
  {
    id: "coaching",
    no: "02",
    title: "Sales Coaching",
    lede: "Practical, field-tested coaching for people who carry a number.",
    body: "One-on-one and small-group coaching rooted in real frontline selling. From prospecting and discovery to objection handling and closing — we sharpen the craft and the mindset behind it.",
    points: ["1:1 performance coaching", "Objection handling & closing", "Prospecting & pipeline discipline", "Mindset & consistency"],
  },
  {
    id: "workshops",
    no: "03",
    title: "Team Workshops",
    lede: "Hands-on training that turns sales teams into selling cultures.",
    body: "Interactive half-day and full-day workshops for sales and marketing teams — role-plays, live drills and frameworks your people can use the same afternoon.",
    points: ["Sales team bootcamps", "Sales × marketing alignment", "Customer conversation drills", "Custom programs"],
  },
];

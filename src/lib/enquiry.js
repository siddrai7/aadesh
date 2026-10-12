// Shared by the enquiry form (browser) and its server action, so validation
// and the WhatsApp message read the same everywhere.
import { site, whatsappLink } from "./site";

// Values match the service ids in site.js so /contact?service=<id> preselects them.
export const interestOptions = [
  { value: "real-estate", label: "Real estate consulting" },
  { value: "business-growth", label: "Business growth & partnerships" },
  { value: "training", label: "Corporate training" },
  { value: "sales-networking", label: "Sales & networking" },
  { value: "other", label: "Something else" },
];

export const audienceOptions = [
  { value: "1", label: "Just me" },
  { value: "2-25", label: "2 – 25" },
  { value: "26-100", label: "26 – 100" },
  { value: "101-500", label: "101 – 500" },
  { value: "500+", label: "500+" },
];

export const formatOptions = [
  { value: "in-person", label: "In person" },
  { value: "online", label: "Online" },
  { value: "not-sure", label: "Not sure yet" },
];

const FIELDS = ["name", "email", "phone", "organisation", "interest", "audience", "format", "date", "message"];

export function readEnquiry(formData) {
  return Object.fromEntries(FIELDS.map((f) => [f, String(formData.get(f) || "").trim()]));
}

export function validateEnquiry(v) {
  const errors = {};
  if (v.name.length < 2) errors.name = "Please tell us your name.";
  if (v.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email)) errors.email = "Please enter a valid email address.";
  if (v.phone && !/^[+\d][\d\s()-]{6,}$/.test(v.phone)) errors.phone = "Please enter a valid phone number.";
  if (!interestOptions.some((o) => o.value === v.interest)) errors.interest = "Choose what you’d like to enquire about.";
  if (v.message.length < 10) errors.message = "A few words about what you have in mind, please.";
  if (v.message.length > 1500) errors.message = "Please keep your message under 1500 characters.";
  return errors;
}

const labelOf = (options, value) => options.find((o) => o.value === value)?.label;

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

// "2026-11-14" -> "14 Nov 2026" without depending on the visitor's locale.
function formatDate(iso) {
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(iso);
  return m ? `${Number(m[3])} ${MONTHS[Number(m[2]) - 1]} ${m[1]}` : iso;
}

export function enquiryMessage(v) {
  const rows = [
    ["Regarding", labelOf(interestOptions, v.interest)],
    ["Name", v.name],
    ["Organisation", v.organisation],
    ["Email", v.email],
    ["Phone", v.phone],
    ["People involved", labelOf(audienceOptions, v.audience)],
    ["Format", labelOf(formatOptions, v.format)],
    ["Preferred date", v.date && formatDate(v.date)],
  ].filter(([, value]) => value);

  return [
    `Hi ${site.shortName}, I’m reaching out through your website.`,
    "",
    ...rows.map(([k, value]) => `*${k}:* ${value}`),
    "",
    "*Details:*",
    v.message,
  ].join("\n");
}

export function enquiryWhatsAppLink(v) {
  return whatsappLink(enquiryMessage(v));
}

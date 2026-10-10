// Shared by the enquiry form (browser) and its server action, so validation
// and the WhatsApp message read the same everywhere.
import { site, whatsappLink } from "./site";

export const interestOptions = [
  { value: "speaking", label: "Motivational session" },
  { value: "coaching", label: "Sales coaching" },
  { value: "workshops", label: "Team workshop" },
  { value: "other", label: "Something else" },
];

export const audienceOptions = [
  { value: "1", label: "Just me (1:1)" },
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
  if (v.message.length < 10) errors.message = "A few words about your event or goals, please.";
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
    ["Enquiry for", labelOf(interestOptions, v.interest)],
    ["Name", v.name],
    ["Organisation", v.organisation],
    ["Email", v.email],
    ["Phone", v.phone],
    ["Audience size", labelOf(audienceOptions, v.audience)],
    ["Format", labelOf(formatOptions, v.format)],
    ["Preferred date", v.date && formatDate(v.date)],
  ].filter(([, value]) => value);

  return [
    `Hi ${site.shortName}, I’d like to enquire about a session.`,
    "",
    ...rows.map(([k, value]) => `*${k}:* ${value}`),
    "",
    "*About the event:*",
    v.message,
  ].join("\n");
}

export function enquiryWhatsAppLink(v) {
  return whatsappLink(enquiryMessage(v));
}

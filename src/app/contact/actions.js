"use server";

import { enquiryWhatsAppLink, readEnquiry, validateEnquiry } from "@/lib/enquiry";

// The enquiry itself is delivered over WhatsApp from the visitor's phone (see
// EnquiryForm). This action re-validates, keeps a server-side record, and hands
// back the WhatsApp link so the form also works with JavaScript disabled.
export async function submitEnquiry(prevState, formData) {
  // Honeypot — bots fill hidden fields, people don't.
  if (formData.get("company_website")) {
    return { status: "success" };
  }

  const values = readEnquiry(formData);
  const errors = validateEnquiry(values);

  if (Object.keys(errors).length) {
    return { status: "error", errors, values };
  }

  // Backup record in the server logs, in case the visitor never presses Send in WhatsApp.
  console.log("[enquiry]", values);

  return { status: "success", name: values.name.split(" ")[0], waLink: enquiryWhatsAppLink(values) };
}

"use server";

const INTERESTS = ["speaking", "coaching", "workshops", "other"];

export async function submitEnquiry(prevState, formData) {
  // Honeypot — bots fill hidden fields, people don't.
  if (formData.get("company_website")) {
    return { status: "success" };
  }

  const values = {
    name: String(formData.get("name") || "").trim(),
    email: String(formData.get("email") || "").trim(),
    phone: String(formData.get("phone") || "").trim(),
    organisation: String(formData.get("organisation") || "").trim(),
    interest: String(formData.get("interest") || ""),
    audience: String(formData.get("audience") || ""),
    format: String(formData.get("format") || ""),
    date: String(formData.get("date") || ""),
    message: String(formData.get("message") || "").trim(),
  };

  const errors = {};
  if (values.name.length < 2) errors.name = "Please tell us your name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) errors.email = "Please enter a valid email address.";
  if (values.phone && !/^[+\d][\d\s()-]{6,}$/.test(values.phone)) errors.phone = "Please enter a valid phone number.";
  if (!INTERESTS.includes(values.interest)) errors.interest = "Choose what you’d like to enquire about.";
  if (values.message.length < 10) errors.message = "A few words about your event or goals, please.";
  if (values.message.length > 4000) errors.message = "Please keep your message under 4000 characters.";

  if (Object.keys(errors).length) {
    return { status: "error", errors, values };
  }

  // TODO: deliver the enquiry — e.g. send an email with Resend/Nodemailer,
  // post to a CRM, or append to a Google Sheet. For now it is logged on the server.
  console.log("[enquiry]", values);

  return { status: "success", name: values.name.split(" ")[0] };
}

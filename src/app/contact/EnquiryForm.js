"use client";

import { startTransition, useActionState, useState, useSyncExternalStore } from "react";
import { submitEnquiry } from "./actions";
import { Check, WhatsApp } from "@/components/Icons";
import { whatsappLink } from "@/lib/site";
import {
  audienceOptions,
  enquiryWhatsAppLink,
  formatOptions,
  interestOptions as interests,
  readEnquiry,
  validateEnquiry,
} from "@/lib/enquiry";

const initialState = { status: "idle" };

function Field({ name, label, error, full, children }) {
  return (
    <div className={`field${full ? " field--full" : ""}`} data-invalid={error ? "true" : undefined}>
      <label htmlFor={name}>{label}</label>
      {children}
      {error && (
        <span className="field__error" id={`${name}-error`}>
          {error}
        </span>
      )}
    </div>
  );
}

// Reads ?service= so links from the Services page preselect the right option.
const noop = () => () => {};
const getService = () => new URLSearchParams(window.location.search).get("service");

export default function EnquiryForm() {
  const [state, formAction, pending] = useActionState(submitEnquiry, initialState);
  const [picked, setPicked] = useState(null);
  const service = useSyncExternalStore(noop, getService, () => null);
  const fromUrl = interests.some((i) => i.value === service) ? service : null;
  const interest = picked ?? fromUrl ?? interests[0].value;
  const [clientErrors, setClientErrors] = useState(null);

  const e = clientErrors || state.errors || {};
  const v = state.values || {};

  // Opens WhatsApp inside the tap itself (browsers block it after an await),
  // then records the enquiry on the server in the background.
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const values = readEnquiry(formData);
    const errors = validateEnquiry(values);
    setClientErrors(errors);

    const firstInvalid = Object.keys(errors)[0];
    if (firstInvalid) {
      document.getElementById(firstInvalid)?.focus();
      return;
    }

    if (!formData.get("company_website")) {
      window.open(enquiryWhatsAppLink(values), "_blank", "noopener");
    }
    startTransition(() => formAction(formData));
  }

  if (state.status === "success") {
    return (
      <div
        className="form-success"
        role="status"
        // The form collapses into this message; bring it back into view.
        ref={(el) => el?.scrollIntoView({ block: "center", behavior: "smooth" })}
      >
        <span className="form-success__icon">
          <Check />
        </span>
        <h3 className="h3">Almost done{state.name ? `, ${state.name}` : ""}.</h3>
        <p className="lede">
          WhatsApp has opened with your enquiry already written. Just tap <strong>Send</strong> and Aadesh will reply
          personally on WhatsApp.
        </p>
        <div>
          <a href={state.waLink || whatsappLink()} target="_blank" rel="noreferrer" className="btn">
            <WhatsApp /> Didn’t open? Tap here
          </a>
        </div>
      </div>
    );
  }

  const err = (name) => (e[name] ? { "aria-invalid": true, "aria-describedby": `${name}-error` } : {});

  return (
    <form action={formAction} onSubmit={handleSubmit} className="form" noValidate>
      <fieldset className="field field--full" data-invalid={e.interest ? "true" : undefined}>
        <legend>I’d like to talk about</legend>
        <div className="chips">
          {interests.map((i) => (
            <label className="chip" key={i.value}>
              <input
                type="radio"
                name="interest"
                value={i.value}
                checked={interest === i.value}
                onChange={() => setPicked(i.value)}
              />
              <span>{i.label}</span>
            </label>
          ))}
        </div>
        {e.interest && <span className="field__error">{e.interest}</span>}
      </fieldset>

      <Field name="name" label="Your name *" error={e.name}>
        <input id="name" name="name" autoComplete="name" autoCapitalize="words" enterKeyHint="next" placeholder="Full name" defaultValue={v.name} required {...err("name")} />
      </Field>

      <Field name="email" label="Email" error={e.email}>
        <input id="email" name="email" type="email" inputMode="email" autoCapitalize="off" autoCorrect="off" spellCheck={false} enterKeyHint="next" autoComplete="email" placeholder="you@company.com" defaultValue={v.email} {...err("email")} />
      </Field>

      <Field name="phone" label="Phone / WhatsApp" error={e.phone}>
        <input id="phone" name="phone" type="tel" inputMode="tel" enterKeyHint="next" autoComplete="tel" placeholder="+91" defaultValue={v.phone} {...err("phone")} />
      </Field>

      <Field name="organisation" label="Company / organisation">
        <input id="organisation" name="organisation" autoCapitalize="words" enterKeyHint="next" autoComplete="organization" placeholder="Company, project or firm" defaultValue={v.organisation} />
      </Field>

      <Field name="audience" label="People involved">
        <select id="audience" name="audience" defaultValue={v.audience || ""}>
          <option value="">Select</option>
          {audienceOptions.map((o) => (
            <option key={o.value} value={o.value}>{o.label}</option>
          ))}
        </select>
      </Field>

      <Field name="format" label="Format">
        <select id="format" name="format" defaultValue={v.format || ""}>
          <option value="">Select</option>
          {formatOptions.map((o) => (
            <option key={o.value} value={o.value}>{o.label}</option>
          ))}
        </select>
      </Field>

      <Field name="date" label="Preferred date" full>
        <input id="date" name="date" type="date" defaultValue={v.date} />
      </Field>

      <Field name="message" label="What do you have in mind? *" error={e.message} full>
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="A project, a partnership, a training for your team — share a little about it."
          defaultValue={v.message}
          required
          {...err("message")}
        />
      </Field>

      <div className="hp" aria-hidden="true">
        <label htmlFor="company_website">Leave this empty</label>
        <input id="company_website" name="company_website" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="form__foot">
        <p className="form__note">
          This opens WhatsApp with your details filled in. Just tap Send, and Aadesh replies personally.
        </p>
        <button type="submit" className="btn btn--wa" disabled={pending}>
          <WhatsApp /> {pending ? "Opening…" : "Send on WhatsApp"}
        </button>
      </div>
    </form>
  );
}

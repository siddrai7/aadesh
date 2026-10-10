"use client";

import { useActionState, useState, useSyncExternalStore } from "react";
import { submitEnquiry } from "./actions";
import { ArrowRight, Check } from "@/components/Icons";
import { whatsappLink } from "@/lib/site";

const interests = [
  { value: "speaking", label: "Motivational session" },
  { value: "coaching", label: "Sales coaching" },
  { value: "workshops", label: "Team workshop" },
  { value: "other", label: "Something else" },
];

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
  const interest = picked ?? fromUrl ?? "speaking";

  const e = state.errors || {};
  const v = state.values || {};

  if (state.status === "success") {
    return (
      <div className="form-success" role="status">
        <span className="form-success__icon">
          <Check />
        </span>
        <h3 className="h3">Thank you{state.name ? `, ${state.name}` : ""}.</h3>
        <p className="lede">
          Your enquiry is in. Expect a personal reply within 24–48 hours. For anything urgent, a WhatsApp message is the
          quickest way to reach us.
        </p>
        <div>
          <a href={whatsappLink()} target="_blank" rel="noreferrer" className="btn">
            Message on WhatsApp <ArrowRight />
          </a>
        </div>
      </div>
    );
  }

  const err = (name) => (e[name] ? { "aria-invalid": true, "aria-describedby": `${name}-error` } : {});

  return (
    <form action={formAction} className="form" noValidate>
      <fieldset className="field field--full" data-invalid={e.interest ? "true" : undefined}>
        <legend>I’d like to enquire about</legend>
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

      <Field name="email" label="Email *" error={e.email}>
        <input id="email" name="email" type="email" inputMode="email" autoCapitalize="off" autoCorrect="off" spellCheck={false} enterKeyHint="next" autoComplete="email" placeholder="you@company.com" defaultValue={v.email} required {...err("email")} />
      </Field>

      <Field name="phone" label="Phone / WhatsApp" error={e.phone}>
        <input id="phone" name="phone" type="tel" inputMode="tel" enterKeyHint="next" autoComplete="tel" placeholder="+91" defaultValue={v.phone} {...err("phone")} />
      </Field>

      <Field name="organisation" label="Organisation">
        <input id="organisation" name="organisation" autoCapitalize="words" enterKeyHint="next" autoComplete="organization" placeholder="Company, college or event" defaultValue={v.organisation} />
      </Field>

      <Field name="audience" label="Audience size">
        <select id="audience" name="audience" defaultValue={v.audience || ""}>
          <option value="">Select</option>
          <option value="1">Just me (1:1)</option>
          <option value="2-25">2 – 25</option>
          <option value="26-100">26 – 100</option>
          <option value="101-500">101 – 500</option>
          <option value="500+">500+</option>
        </select>
      </Field>

      <Field name="format" label="Format">
        <select id="format" name="format" defaultValue={v.format || ""}>
          <option value="">Select</option>
          <option value="in-person">In person</option>
          <option value="online">Online</option>
          <option value="not-sure">Not sure yet</option>
        </select>
      </Field>

      <Field name="date" label="Preferred date" full>
        <input id="date" name="date" type="date" defaultValue={v.date} />
      </Field>

      <Field name="message" label="Tell us about your event or goals *" error={e.message} full>
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="Who’s the audience, what’s the occasion, and what would success look like?"
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
          Prefer to chat?{" "}
          <a href={whatsappLink()} target="_blank" rel="noreferrer">
            Message on WhatsApp
          </a>{" "}
          — replies are usually same day.
        </p>
        <button type="submit" className="btn" disabled={pending}>
          {pending ? "Sending…" : "Send enquiry"} <ArrowRight />
        </button>
      </div>
    </form>
  );
}

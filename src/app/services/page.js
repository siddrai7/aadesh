import Link from "next/link";
import Mask from "@/components/Mask";
import RevealObserver from "@/components/RevealObserver";
import CtaBand from "@/components/CtaBand";
import { ArrowRight } from "@/components/Icons";
import { services } from "@/lib/site";

export const metadata = {
  title: "Services",
  description:
    "Real estate strategy & consulting, entrepreneurship & business growth, corporate training and strategic networking with Aadesh Sharma.",
};

const formats = [
  { t: "Consulting", b: "One-on-one strategy for developers, investors, brokers and business owners, focused on your project and your market." },
  { t: "Training programs", b: "In-person and online programs for corporate and sales teams, shaped around your people and your goals." },
  { t: "Partnerships", b: "Collaborations, channel partner networks and franchise opportunities where everyone grows together." },
];

const faqs = [
  {
    q: "Who do you typically work with?",
    a: "Real estate developers, channel partners, brokers, investors, entrepreneurs, business associates and corporate teams: anyone looking to grow through the right strategy, relationships and people.",
  },
  {
    q: "Do you work with developers and channel partners on projects?",
    a: "Yes. Project marketing, channel partner development and developer–broker collaboration are at the heart of my real estate work.",
  },
  {
    q: "Can a training program be customised for our team?",
    a: "Always. Every program starts with a conversation about your team, your challenges and what growth looks like for you.",
  },
  {
    q: "Which languages do you work in?",
    a: "Hindi, English, or a natural mix of both, whatever works best for the people in the room.",
  },
  {
    q: "How do we get started?",
    a: "Send a message on WhatsApp or fill in the enquiry form. Aadesh replies personally to set up a first conversation.",
  },
];

export default function Services() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="label label--dot reveal">Services</span>
          <Mask className="display page-hero__title" lines={["Strategy, growth", <>&amp; <em>people</em></>]} />
          <div className="page-hero__foot">
            <span className="label reveal">(Offering)</span>
            <p className="lede reveal" style={{ "--d": "0.2s" }}>
              Four areas of work, one approach: connect the right people, find the right opportunities and build
              relationships that create long-term value.
            </p>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          {services.map((s) => (
            <article id={s.id} className="svc-detail" key={s.id}>
              <span className="svc-detail__no reveal">{s.no}</span>
              <div className="stack-sm" style={{ gap: 40 }}>
                <div className="stack-sm">
                  <Mask as="h2" className="h2 svc-detail__title" lines={[s.title]} />
                  <p className="lede reveal">{s.lede}</p>
                </div>
                <div className="svc-detail__body reveal" style={{ "--d": "0.1s" }}>
                  <div className="stack-sm">
                    <p>{s.body}</p>
                    <div>
                      <Link href={`/contact?service=${s.id}#enquire`} className="btn btn--ghost">
                        Enquire about this <ArrowRight />
                      </Link>
                    </div>
                  </div>
                  <ul className="checklist">
                    {s.points.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section dark">
        <div className="container">
          <div className="section-head">
            <span className="label reveal">(Formats)</span>
            <div className="section-head__right">
              <Mask as="h2" className="h2" lines={["Ways to", <><em>work together</em></>]} />
            </div>
          </div>
          <div className="formats">
            {formats.map((f, i) => (
              <div className="format reveal" key={f.t} style={{ "--d": `${i * 0.08}s` }}>
                <span className="label">0{i + 1}</span>
                <h3 className="h3">{f.t}</h3>
                <p>{f.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="label reveal">(FAQ)</span>
            <div className="section-head__right">
              <Mask as="h2" className="h2" lines={[<>Good <em>questions</em></>]} />
              <div className="faq reveal">
                {faqs.map((f) => (
                  <details key={f.q}>
                    <summary>{f.q}</summary>
                    <p>{f.a}</p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
      <RevealObserver />
    </>
  );
}

import Link from "next/link";
import Mask from "@/components/Mask";
import CtaBand from "@/components/CtaBand";
import { ArrowRight } from "@/components/Icons";
import { services } from "@/lib/site";

export const metadata = {
  title: "Services",
  description: "Motivational keynotes, one-on-one sales coaching and hands-on team workshops by Aadesh Sharma.",
};

const formats = [
  { t: "In person", b: "On-site at your venue, campus or office — anywhere in India and beyond." },
  { t: "Online", b: "Live virtual sessions engineered for energy and interaction, not slides on a screen." },
  { t: "Ongoing", b: "Monthly coaching programs for individuals and teams who want sustained growth." },
];

const faqs = [
  {
    q: "How far in advance should we book?",
    a: "For keynotes and workshops, three to four weeks is ideal so the session can be tailored to your audience. Shorter timelines are often possible — just ask.",
  },
  {
    q: "Can sessions be customised for our industry?",
    a: "Always. Every engagement starts with a short discovery call to understand your audience, goals and the challenges your team is facing.",
  },
  {
    q: "Which languages do you speak in?",
    a: "Sessions can be delivered in English, Hindi, or a natural mix of both — whatever connects best with your audience.",
  },
  {
    q: "Do you coach individuals as well as teams?",
    a: "Yes. One-on-one coaching is available for sales professionals, founders and anyone who needs to persuade for a living.",
  },
];

export default function Services() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="label label--dot reveal">Services</span>
          <Mask className="display page-hero__title" lines={["Keynotes, coaching", <>& <em>workshops</em></>]} />
          <div className="page-hero__foot">
            <span className="label reveal">(Offering)</span>
            <p className="lede reveal" style={{ "--d": "0.2s" }}>
              Three ways to bring sharper selling and stronger belief to your people. Every engagement is tailored —
              nothing comes off a shelf.
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
                  <Mask as="h2" className="h2" lines={[s.title]} />
                  <p className="lede reveal">{s.lede}</p>
                </div>
                <div className="svc-detail__body reveal" style={{ "--d": "0.1s" }}>
                  <div className="stack-sm">
                    <p>{s.body}</p>
                    <div>
                      <Link href={`/contact?service=${s.id}#enquire`} className="btn btn--ghost">
                        Enquire about {s.title.toLowerCase()} <ArrowRight />
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
              <Mask as="h2" className="h2" lines={["Wherever your", <>people <em>are</em></>]} />
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
    </>
  );
}

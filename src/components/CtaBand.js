import Link from "next/link";
import Mask from "./Mask";
import { ArrowRight } from "./Icons";
import { whatsappLink } from "@/lib/site";

export default function CtaBand({ eyebrow = "Let’s work together" }) {
  return (
    <section className="section dark cta">
      <div className="cta__glow" aria-hidden="true" />
      <div className="container cta__inner">
        <span className="label label--dot reveal">{eyebrow}</span>
        <Mask
          as="h2"
          className="display cta__title"
          lines={[
            "Bring the energy",
            <>
              to your <em>stage.</em>
            </>,
          ]}
        />
        <div className="cta__row">
          <p className="lede reveal" style={{ "--d": "0.2s" }}>
            Planning a conference, a sales kick-off or a team offsite? Tell us about your audience and we’ll shape a
            session around it.
          </p>
          <div className="hero__ctas reveal" style={{ "--d": "0.3s" }}>
            <Link href="/contact#enquire" className="btn">
              Enquire now <ArrowRight />
            </Link>
            <a href={whatsappLink()} target="_blank" rel="noreferrer" className="btn btn--ghost">
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

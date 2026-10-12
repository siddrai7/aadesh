import Link from "next/link";
import Mask from "./Mask";
import { ArrowRight } from "./Icons";
import { whatsappLink } from "@/lib/site";

export default function CtaBand({ eyebrow = "Let’s build together" }) {
  return (
    <section className="section dark cta">
      <div className="cta__glow" aria-hidden="true" />
      <div className="container cta__inner">
        <span className="label label--dot reveal">{eyebrow}</span>
        <Mask
          as="h2"
          className="display cta__title"
          lines={[
            "Let’s build something",
            <>
              <em>meaningful.</em>
            </>,
          ]}
        />
        <div className="cta__row">
          <p className="lede reveal" style={{ "--d": "0.2s" }}>
            A real estate project, a business partnership or a training program for your team: start with a
            conversation.
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

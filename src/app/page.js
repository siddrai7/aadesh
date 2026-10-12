import Image from "next/image";
import Link from "next/link";
import Mask from "@/components/Mask";
import Marquee from "@/components/Marquee";
import CtaBand from "@/components/CtaBand";
import { ArrowRight, ArrowUpRight } from "@/components/Icons";
import { philosophy, pillars, services, site } from "@/lib/site";

const stats = [
  { num: "20", sup: "+", label: "Years of professional experience" },
  { num: "7", sup: "", label: "Fields — from sales and insurance to real estate and franchising" },
  { num: "4", sup: "", label: "Pillars that guide every engagement" },
  { num: "3", sup: "", label: "Roles: strategist, entrepreneur and trainer" },
];

const network = ["Developers", "Channel partners", "Brokers", "Investors", "Entrepreneurs", "Business associates", "Corporate teams", "Sales professionals"];

export default function Home() {
  return (
    <>
      {/* ---------- Hero ---------- */}
      <section className="hero dark">
        <div className="hero__media">
          <Image
            src={site.portrait}
            alt="Aadesh Sharma walking towards the camera in a cream blazer"
            fill
            priority
            sizes="(min-width: 900px) 54vw, 100vw"
          />
        </div>

        <div className="container hero__content">
          <span className="label label--dot reveal">{site.roles.join(" · ")}</span>
          <Mask
            className="display hero__name"
            step={0.12}
            lines={[
              "Aadesh",
              <span className="indent" key="l2">
                <em>Sharma</em>
              </span>,
            ]}
          />
          <p className="hero__tagline reveal" style={{ "--d": "0.35s" }}>
            I build <em>people</em>, <em>partnerships</em> &amp; <em>possibilities.</em>
          </p>
          <div className="hero__ctas reveal" style={{ "--d": "0.45s" }}>
            <Link href="/contact#enquire" className="btn">
              Let’s connect <ArrowRight />
            </Link>
            <Link href="/services" className="btn btn--ghost">
              What I do
            </Link>
          </div>
        </div>

        <div className="container">
          <div className="hero__meta reveal" style={{ "--d": "0.6s" }}>
            <span className="label">20+ years · Sales · Real estate · Business development</span>
            <a href="#intro" className="scroll-cue label">
              <span className="scroll-cue__line" />
              Scroll
            </a>
          </div>
        </div>
      </section>

      <Marquee items={philosophy} />

      {/* ---------- Intro ---------- */}
      <section className="section" id="intro">
        <div className="container intro">
          <span className="label reveal">(01) — Introduction</span>
          <div className="intro__body">
            <p className="statement reveal">
              Transforming <em>relationships</em> into opportunities, <span className="dim">ideas into businesses,</span>{" "}
              and <em>vision</em> into growth.
            </p>
            <div className="intro__cols reveal" style={{ "--d": "0.15s" }}>
              <p>
                For more than two decades I’ve worked across sales, marketing, business development, insurance, network
                marketing, real estate and franchise development — learning how to connect the right people with the
                right opportunities.
              </p>
              <p>
                Success isn’t just about making money. It’s about creating value, building meaningful relationships,
                developing people and creating opportunities for sustainable growth.
              </p>
            </div>
            <div>
              <Link href="/about" className="btn btn--ghost reveal" style={{ "--d": "0.2s" }}>
                My story <ArrowRight />
              </Link>
            </div>
          </div>
        </div>

        <div className="container" style={{ marginTop: "clamp(64px, 9vw, 140px)" }}>
          <div className="stats">
            {stats.map((s, i) => (
              <div className="stat reveal" key={s.label} style={{ "--d": `${i * 0.08}s` }}>
                <span className="stat__num">
                  {s.num}
                  {s.sup && <sup>{s.sup}</sup>}
                </span>
                <span className="stat__label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Services ---------- */}
      <section className="section dark">
        <div className="container">
          <div className="section-head">
            <span className="label reveal">(02) — What I do</span>
            <div className="section-head__right">
              <Mask as="h2" className="h2" lines={["Four ways to", <><em>grow together</em></>]} />
              <p className="lede reveal">
                Strategy, partnerships and people development — each engagement built around your goals, your market and
                your team.
              </p>
            </div>
          </div>

          <ul className="svc-list">
            {services.map((s, i) => (
              <li className="svc reveal" key={s.id} style={{ "--d": `${i * 0.08}s` }}>
                <Link href={`/services#${s.id}`} className="svc__link">
                  <span className="svc__no">({s.no})</span>
                  <span className="svc__title">{s.title}</span>
                  <p className="svc__lede">{s.lede}</p>
                  <span className="svc__arrow">
                    <ArrowUpRight size={18} />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------- Pillars ---------- */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="label reveal">(03) — Philosophy</span>
            <div className="section-head__right">
              <Mask as="h2" className="h2" lines={["Four pillars.", <>One <em>philosophy.</em></>]} />
            </div>
          </div>
          <div className="method">
            {pillars.map((m, i) => (
              <div className="method__step reveal" key={m.title} style={{ "--d": `${i * 0.1}s` }}>
                <span className="method__num">0{i + 1}</span>
                <h3 className="h3">{m.title}</h3>
                <p>{m.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Network ---------- */}
      <section className="section section--tight" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-head" style={{ marginBottom: "clamp(32px, 4vw, 56px)" }}>
            <span className="label reveal">(04) — Who I work with</span>
            <div className="section-head__right">
              <Mask as="h2" className="h2" lines={[<>An ecosystem built on <em>trust</em></>]} />
              <p className="lede reveal">
                I bring together the people who make growth happen — so everyone at the table moves forward together.
              </p>
            </div>
          </div>
          <ul className="network reveal">
            {network.map((n) => (
              <li key={n}>{n}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------- Quote ---------- */}
      <section className="section" style={{ background: "var(--paper-2)" }}>
        <div className="container quote">
          <span className="quote__mark" aria-hidden="true">“</span>
          <blockquote className="reveal">
            Every relationship is an opportunity to create <em>trust</em>, every challenge an opportunity to learn, and
            every connection a <em>possibility</em> to create something meaningful.
          </blockquote>
          <span className="label reveal">— Aadesh Sharma</span>
        </div>
      </section>

      <CtaBand />
    </>
  );
}

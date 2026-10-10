import Link from "next/link";
import Mask from "@/components/Mask";
import Marquee from "@/components/Marquee";
import Portrait from "@/components/Portrait";
import CtaBand from "@/components/CtaBand";
import { ArrowRight, ArrowUpRight, Play } from "@/components/Icons";
import { services, site } from "@/lib/site";

const stats = [
  { num: "2", sup: "+", label: "Years closing deals on the frontline of sales" },
  { num: "3", sup: "×", label: "Disciplines — sales, marketing and the stage" },
  { num: "1", sup: ":1", label: "Coaching built around the individual, not a script" },
  { num: "100", sup: "%", label: "Practical. Every idea is field-tested before it’s taught" },
];

const method = [
  { title: "Listen", body: "Every engagement starts with your people — their targets, their friction, their wins." },
  { title: "Diagnose", body: "We find the real gap: skill, system, or self-belief. Usually it’s a mix of all three." },
  { title: "Ignite", body: "High-energy sessions and drills that turn insight into instinct, fast." },
  { title: "Sustain", body: "Follow-through and accountability so the momentum outlasts the event." },
];

export default function Home() {
  return (
    <>
      {/* ---------- Hero ---------- */}
      <section className="hero">
        <div className="container hero__top">
          <span className="label label--dot reveal">Sales Coach · Motivational Speaker</span>
          <span className="label hero__loc reveal" style={{ "--d": "0.1s" }}>
            {site.location}
          </span>
        </div>

        <div className="container hero__grid">
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
          <div className="hero__aside reveal" style={{ "--d": "0.35s" }}>
            <Portrait caption="On stage — soon" priority />
          </div>

          <div className="hero__bottom">
            <div className="stack-sm reveal" style={{ "--d": "0.5s" }}>
              <p className="lede">
                Sales is not a talent — it’s a trainable craft fuelled by belief. I help people and teams build both.
              </p>
              <div className="hero__ctas">
                <Link href="/contact#enquire" className="btn">
                  Book a session <ArrowRight />
                </Link>
                <Link href="/services" className="btn btn--ghost">
                  Explore services
                </Link>
              </div>
            </div>
            <a href="#intro" className="scroll-cue label reveal" style={{ "--d": "0.6s" }}>
              <span className="scroll-cue__line" />
              Scroll
            </a>
          </div>
        </div>
      </section>

      <Marquee items={["Sell with conviction", "Speak with purpose", "Lead with energy", "Close with confidence"]} />

      {/* ---------- Intro ---------- */}
      <section className="section" id="intro">
        <div className="container intro">
          <span className="label reveal">(01) — Introduction</span>
          <div className="intro__body">
            <p className="statement reveal">
              I’ve spent years in the field — making the calls, hearing the no’s, and finding the yes.{" "}
              <span className="dim">Now I help others do it with</span> <em>more confidence</em>{" "}
              <span className="dim">and less guesswork.</span>
            </p>
            <div className="intro__cols reveal" style={{ "--d": "0.15s" }}>
              <p>
                With 2+ years in frontline sales and hands-on experience in marketing, I bring a rare dual lens: how
                buyers think, and how messages land. That perspective shapes every keynote and coaching session.
              </p>
              <p>
                Whether it’s a hall of five hundred or a team of five, the goal is the same — leave people sharper,
                braver and ready to act the very next day.
              </p>
            </div>
            <div>
              <Link href="/about" className="btn btn--ghost reveal" style={{ "--d": "0.2s" }}>
                More about Aadesh <ArrowRight />
              </Link>
            </div>
          </div>
        </div>

        <div className="container" style={{ marginTop: "clamp(72px, 9vw, 140px)" }}>
          <div className="stats">
            {stats.map((s, i) => (
              <div className="stat reveal" key={s.label} style={{ "--d": `${i * 0.08}s` }}>
                <span className="stat__num">
                  {s.num}
                  <sup>{s.sup}</sup>
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
            <span className="label reveal">(02) — Services</span>
            <div className="section-head__right">
              <Mask as="h2" className="h2" lines={["Ways we can", <><em>work together</em></>]} />
              <p className="lede reveal">
                From a single keynote to a long-term coaching partnership — each engagement is shaped around your people
                and your numbers.
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

      {/* ---------- Method ---------- */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="label reveal">(03) — The method</span>
            <div className="section-head__right">
              <Mask as="h2" className="h2" lines={["Energy is the spark.", <><em>Structure</em> keeps it lit.</>]} />
            </div>
          </div>
          <div className="method">
            {method.map((m, i) => (
              <div className="method__step reveal" key={m.title} style={{ "--d": `${i * 0.1}s` }}>
                <span className="method__num">0{i + 1}</span>
                <h3 className="h3">{m.title}</h3>
                <p>{m.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Stage & screen (placeholders for photos / videos) ---------- */}
      <section className="section section--tight" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-head" style={{ marginBottom: "clamp(40px, 5vw, 72px)" }}>
            <span className="label reveal">(04) — Stage & screen</span>
            <div className="section-head__right">
              <Mask as="h2" className="h2" lines={[<>Moments from the <em>room</em></>]} />
            </div>
          </div>

          <span className="swipe-hint label" aria-hidden="true">Swipe →</span>
          <div className="media-grid">
            <article className="media media--a reveal">
              <div className="media__fill media__fill--1" />
              <div className="media__inner">
                <span className="label">Keynote · Video</span>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "end", gap: 16 }}>
                  <h3 className="media__title">The psychology of a yes</h3>
                  <span className="play" aria-hidden="true"><Play /></span>
                </div>
              </div>
            </article>
            <article className="media media--b reveal" style={{ "--d": "0.1s" }}>
              <div className="media__fill media__fill--2" />
              <div className="media__inner">
                <span className="label">Workshop · Photo</span>
                <h3 className="media__title">Sales bootcamp, live drills</h3>
              </div>
            </article>
            <article className="media media--c reveal">
              <div className="media__fill media__fill--3" />
              <div className="media__inner">
                <span className="label">Campus · Photo</span>
                <h3 className="media__title">Youth & college sessions</h3>
              </div>
            </article>
            <article className="media media--d reveal" style={{ "--d": "0.1s" }}>
              <div className="media__fill media__fill--4" />
              <div className="media__inner">
                <span className="label">Coaching · Video</span>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "end", gap: 16 }}>
                  <h3 className="media__title">Handling objections without losing the room</h3>
                  <span className="play" aria-hidden="true"><Play /></span>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ---------- Quote ---------- */}
      <section className="section" style={{ background: "var(--paper-2)" }}>
        <div className="container quote">
          <span className="quote__mark" aria-hidden="true">“</span>
          <blockquote className="reveal">
            Every great sale is a transfer of <em>belief</em>. Build the belief first — the numbers follow.
          </blockquote>
          <span className="label reveal">— Aadesh Sharma</span>
        </div>
      </section>

      <CtaBand />
    </>
  );
}

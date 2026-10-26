import Mask from "@/components/Mask";
import RevealObserver from "@/components/RevealObserver";
import Marquee from "@/components/Marquee";
import Portrait from "@/components/Portrait";
import CtaBand from "@/components/CtaBand";
import Gallery from "@/components/Gallery";
import { mission, philosophy, pillars, site, vision } from "@/lib/site";
import { galleryFor, portraits } from "@/lib/gallery";
import { pageMetadata, pages } from "@/lib/seo";

export const metadata = pageMetadata(pages.about);

const fields = [
  {
    tag: "Sales & Marketing",
    title: "Where it began",
    body: "Learning how buyers think and how messages land, and that every sale starts with a relationship.",
  },
  {
    tag: "Insurance & Network Marketing",
    title: "Trust at scale",
    body: "Building teams and long-term client trust, one conversation and one commitment at a time.",
  },
  {
    tag: "Business Development & Franchising",
    title: "Ideas into businesses",
    body: "Strategic partnerships, market expansion and franchise development that let businesses grow together.",
  },
  {
    tag: "Real Estate",
    title: "Strategy & ecosystems",
    body: "Project marketing, investor relations and developer–broker–channel partner collaboration built on transparency.",
  },
  {
    tag: "Corporate Training",
    title: "Developing people",
    body: "Leadership mindset, communication and team development: helping people unlock their potential.",
  },
];

export default function About() {
  const photos = galleryFor("about");
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="label label--dot reveal">About</span>
          <Mask className="display page-hero__title" lines={["Two decades of", <>building <em>possibilities.</em></>]} />
          <div className="page-hero__foot">
            <span className="label reveal">(Profile)</span>
            <p className="lede reveal" style={{ "--d": "0.2s" }}>
              {site.name}: {site.roles.join(", ").replace(/, ([^,]*)$/, " and $1")}. {site.promise}
            </p>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container about-split">
          <div className="about-split__media reveal">
            <Portrait
              src={portraits.about.src}
              alt={portraits.about.alt}
              focus={portraits.about.focus}
              caption={site.roles[0]}
              index="AS"
            />
          </div>
          <div className="stack-sm" style={{ gap: 48 }}>
            <p className="statement reveal">
              Success is not just about making money. It’s about <em>creating value</em> and building people.
            </p>
            <div className="prose reveal" style={{ "--d": "0.1s" }}>
              <p className="dropcap">
                I am Aadesh Sharma, an entrepreneur, real estate strategist and corporate trainer with{" "}
                <strong>over two decades of professional experience</strong> across sales, marketing, business
                development, insurance, network marketing, real estate and franchise development.
              </p>
              <p>
                Over the years I have developed expertise in business strategy, real estate consulting, project
                marketing, strategic partnerships, investor relations, team building and business expansion. Working across
                industries taught me the value of <strong>connecting the right people</strong>, identifying the right
                opportunities and building relationships that create long-term value.
              </p>
              <p>
                As a <strong>real estate strategist</strong>, I help people understand opportunities, evaluate business
                potential and approach growth strategically, because informed decisions, transparent communication and
                the right guidance build confidence.
              </p>
              <p>
                As an <strong>entrepreneur</strong>, I believe in collaborative ecosystems where developers, channel
                partners, brokers, investors and business associates work together toward shared success.
              </p>
              <p>
                As a <strong>corporate trainer</strong>, I’m passionate about leadership mindset, communication and team
                building. When people improve their mindset, skills and relationships, they unlock new levels of personal
                and professional growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Marquee items={philosophy} />

      <section className="section dark">
        <div className="container">
          <div className="section-head">
            <span className="label reveal">(Experience)</span>
            <div className="section-head__right">
              <Mask as="h2" className="h2" lines={["Built across", <><em>many industries</em></>]} />
            </div>
          </div>
          <ol className="timeline">
            {fields.map((c, i) => (
              <li key={c.tag} className="reveal" style={{ "--d": `${i * 0.06}s` }}>
                <span className="label">{c.tag}</span>
                <h3 className="h3">{c.title}</h3>
                <p>{c.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {photos.length > 0 && (
        <section className="section" style={{ paddingBottom: 0 }}>
          <div className="container">
            <div className="section-head" style={{ marginBottom: "clamp(32px, 4vw, 56px)" }}>
              <span className="label reveal">(Moments)</span>
              <div className="section-head__right">
                <Mask as="h2" className="h2" lines={[<>Along the <em>way</em></>]} />
              </div>
            </div>
            <Gallery photos={photos} />
          </div>
        </section>
      )}

      <section className="section">
        <div className="container">
          <div className="mv">
            <article className="mv__item reveal">
              <span className="label label--dot">My mission</span>
              <p className="mv__text">{mission}</p>
            </article>
            <article className="mv__item reveal" style={{ "--d": "0.1s" }}>
              <span className="label label--dot">My vision</span>
              <p className="mv__text">{vision}</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-head">
            <span className="label reveal">(Pillars)</span>
            <div className="section-head__right">
              <Mask as="h2" className="h2" lines={["What everything", <>is <em>built on</em></>]} />
            </div>
          </div>
          <span className="swipe-hint label" aria-hidden="true">Swipe →</span>
          <div className="values values--4">
            {pillars.map((v, i) => (
              <article className="value reveal" key={v.title} style={{ "--d": `${i * 0.08}s` }}>
                <span className="label">Pillar 0{i + 1}</span>
                <div>
                  <h3 className="h3">{v.title}</h3>
                  <p>{v.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section dark" style={{ paddingTop: "clamp(72px, 9vw, 140px)" }}>
        <div className="container quote">
          <span className="label reveal">My philosophy</span>
          <p className="philosophy reveal">
            {philosophy.map((p, i) => (
              <span key={p}>
                {i === philosophy.length - 1 ? <em>{p}.</em> : `${p}.`}{" "}
              </span>
            ))}
          </p>
          <p className="lede reveal" style={{ margin: "0 auto", textAlign: "center" }}>
            Lasting success comes when business growth and people development move forward together, with trust,
            clarity and purpose.
          </p>
        </div>
      </section>

      <CtaBand eyebrow="Work with Aadesh" />
      <RevealObserver />
    </>
  );
}

import Mask from "@/components/Mask";
import Marquee from "@/components/Marquee";
import Portrait from "@/components/Portrait";
import CtaBand from "@/components/CtaBand";

export const metadata = {
  title: "About",
  description: "The story of Aadesh Sharma — from frontline sales and marketing to the stage as a motivational speaker and sales coach.",
};

const chapters = [
  {
    tag: "Chapter 01",
    title: "Frontline sales",
    body: "More than two years carrying a target — cold calls, follow-ups, tough negotiations and the quiet discipline of showing up every day. This is where the method was forged.",
  },
  {
    tag: "Chapter 02",
    title: "Marketing",
    body: "Time on the other side of the pipeline taught how attention is earned: positioning, messaging and how a story moves a buyer before the first conversation.",
  },
  {
    tag: "Chapter 03",
    title: "Coaching",
    body: "Turning lived experience into repeatable frameworks — helping individual sellers and teams find their edge and their confidence.",
  },
  {
    tag: "Now",
    title: "The stage",
    body: "Speaking to rooms of students, professionals and sales teams about belief, resilience and the craft of persuasion.",
  },
];

const values = [
  { k: "Honesty", t: "Real over rehearsed", b: "No recycled quotes or borrowed stories. Everything shared comes from the field." },
  { k: "Energy", t: "Rooms that move", b: "Sessions designed to be felt — interactive, high-tempo and impossible to sit through on autopilot." },
  { k: "Results", t: "Monday-morning ready", b: "Every idea comes with a way to use it the very next working day." },
];

export default function About() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="label label--dot reveal">About</span>
          <Mask className="display page-hero__title" lines={["Built in the field.", <>Shared on <em>stage.</em></>]} />
          <div className="page-hero__foot">
            <span className="label reveal">(Profile)</span>
            <p className="lede reveal" style={{ "--d": "0.2s" }}>
              Aadesh Sharma is a sales coach and motivational speaker who learned persuasion the hard way — one
              conversation at a time.
            </p>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container about-split">
          <div className="about-split__media reveal">
            <Portrait caption="Studio portrait — soon" index="02" />
          </div>
          <div className="stack-sm" style={{ gap: 56 }}>
            <p className="statement reveal">
              I believe anyone can learn to sell — <em>once they believe</em> in what they’re selling, and in themselves.
            </p>
            <div className="prose reveal" style={{ "--d": "0.1s" }}>
              <p className="dropcap">
                My career began where most sales careers do: on the phones, in the meetings, and in the long stretch
                between a first hello and a signed deal. Over <strong>more than two years in sales</strong>, I learned that
                the best closers aren’t the loudest people in the room — they’re the best listeners, the most prepared, and
                the most resilient.
              </p>
              <p>
                A stint in <strong>marketing</strong> completed the picture. I saw how positioning, storytelling and timing
                shape a buyer’s decision long before a salesperson enters the conversation. That dual perspective is now
                at the heart of how I coach.
              </p>
              <p>
                Today I work as a <strong>sales coach</strong> and <strong>motivational speaker</strong>, helping students,
                professionals and teams find the confidence to act and the skills to win. My sessions are honest,
                energetic and relentlessly practical.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Marquee items={["Listen deeply", "Prepare relentlessly", "Believe first", "Follow through"]} />

      <section className="section dark">
        <div className="container">
          <div className="section-head">
            <span className="label reveal">(Journey)</span>
            <div className="section-head__right">
              <Mask as="h2" className="h2" lines={["The road", <>so <em>far</em></>]} />
            </div>
          </div>
          <ol className="timeline">
            {chapters.map((c, i) => (
              <li key={c.title} className="reveal" style={{ "--d": `${i * 0.06}s` }}>
                <span className="label">{c.tag}</span>
                <h3 className="h3">{c.title}</h3>
                <p>{c.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="label reveal">(Principles)</span>
            <div className="section-head__right">
              <Mask as="h2" className="h2" lines={["What every", <>session <em>stands on</em></>]} />
            </div>
          </div>
          <span className="swipe-hint label" aria-hidden="true">Swipe →</span>
          <div className="values">
            {values.map((v, i) => (
              <article className="value reveal" key={v.k} style={{ "--d": `${i * 0.08}s` }}>
                <span className="label">0{i + 1} — {v.k}</span>
                <div>
                  <h3 className="h3">{v.t}</h3>
                  <p>{v.b}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBand eyebrow="Work with Aadesh" />
    </>
  );
}

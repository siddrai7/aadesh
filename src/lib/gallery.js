// Photos for the Home and About pages.
//
// 1. Put the image files in /public/images/gallery/
// 2. Add one entry per photo below, in the order you want them shown.
//
// Each gallery section only appears once it has at least one photo, so the
// live site never shows empty placeholders. Tapping a photo opens it full size.
//
//   file     file name inside /public/images/gallery/          (required)
//   alt      what the photo shows, for screen readers and Google (required)
//   pages    where it appears: ["home"], ["about"] or ["home", "about"]
//   caption  short line shown on the photo                       (optional)
//   tag      small label above the caption, e.g. "Corporate training · Jaipur"
//   focus    part to keep when the photo is cropped, as "x% y%" — e.g. "70% 30%"
//            keeps the upper right (optional, default "center")
//   span     desktop width out of 12 columns; keep each row adding up to 12
//            (optional — without it, rows alternate wide and narrow tiles)

export const gallery = [
  // ---------- Home: Moments from the work ----------
  {
    file: "leadership-development-program.jpg",
    alt: "Aadesh Sharma presenting on stage at a Leadership Development Program, with the audience in the foreground",
    caption: "Leadership Development Program",
    tag: "Corporate training",
    focus: "50% 40%",
    span: 7,
    pages: ["home"],
  },
  {
    file: "presenting-at-lectern.jpg",
    alt: "Aadesh Sharma at the lectern preparing a presentation",
    caption: "At the lectern",
    tag: "Presentation",
    focus: "70% 30%",
    span: 5,
    pages: ["home"],
  },
  {
    file: "award-night.jpg",
    alt: "Aadesh Sharma receiving recognition on stage at an evening event",
    caption: "Recognition on stage",
    tag: "Awards",
    focus: "50% 50%",
    span: 4,
    pages: ["home"],
  },
  {
    file: "yuva-mahotsav-2021.jpg",
    alt: "Aadesh Sharma speaking with a microphone at Yuva Mahotsav 2021, a National Youth Day event in Prayagraj",
    caption: "Yuva Mahotsav 2021, Prayagraj",
    tag: "National Youth Day",
    focus: "62% 38%",
    span: 8,
    pages: ["home"],
  },
  {
    file: "with-participants.jpg",
    alt: "Aadesh Sharma taking a selfie with a large group of participants in formal wear",
    caption: "Among the participants",
    tag: "People development",
    focus: "100% 50%",
    span: 5,
    pages: ["home"],
  },
  {
    file: "workshop-in-session.jpg",
    alt: "Participants seated at round tables during a workshop in a hotel ballroom",
    caption: "Workshop in session",
    tag: "Training",
    focus: "50% 60%",
    span: 7,
    pages: ["home"],
  },

  // ---------- About: Along the way ----------
  {
    file: "felicitation.jpg",
    alt: "Aadesh Sharma holding a citation and wearing a garland after being honoured at a community event",
    caption: "Honoured with a citation",
    tag: "Recognition",
    focus: "42% 40%",
    span: 8,
    pages: ["about"],
  },
  {
    file: "office-meeting.jpg",
    alt: "Aadesh Sharma standing with a senior professional in an office",
    caption: "Relationships that last",
    tag: "Networking",
    focus: "55% 35%",
    span: 4,
    pages: ["about"],
  },
  {
    file: "yuva-mahotsav-honour.jpg",
    alt: "Aadesh Sharma being honoured with a shawl and garland at Yuva Mahotsav 2021",
    caption: "Honoured at Yuva Mahotsav 2021",
    tag: "National Youth Day",
    focus: "70% 35%",
    span: 5,
    pages: ["about"],
  },
  {
    file: "with-guest.jpg",
    alt: "Aadesh Sharma standing with a guest at a business event",
    caption: "Partnerships built on trust",
    tag: "Business partners",
    focus: "60% 30%",
    span: 7,
    pages: ["about"],
  },
  {
    file: "team-meeting.jpg",
    alt: "Aadesh Sharma standing with four colleagues in a meeting room",
    caption: "With the team",
    tag: "Collaboration",
    focus: "50% 35%",
    span: 12,
    pages: ["about"],
  },
];

export const galleryFor = (page) => gallery.filter((photo) => photo.pages?.includes(page));

// Portraits used around the site (files in /public/images/).
// The Home hero photo is set as `portrait` in site.js.
export const portraits = {
  intro: {
    src: "/images/aadesh-arms-crossed.jpg",
    alt: "Aadesh Sharma in a dark suit, arms crossed, in a hotel lobby",
    focus: "50% 22%",
  },
  about: {
    src: "/images/aadesh-at-desk.jpg",
    alt: "Aadesh Sharma seated at his desk, resting his chin on his hand",
    focus: "50% 30%",
  },
  contact: {
    src: "/images/aadesh-standing.jpg",
    alt: "Aadesh Sharma standing in a pinstripe suit in a modern office lounge",
    focus: "50% 30%",
  },
};

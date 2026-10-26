// Photos for the Home and About pages.
//
// 1. Put the image files in /public/images/gallery/
// 2. Add one entry per photo below, in the order you want them shown.
//
// Each gallery section only appears once it has at least one photo, so the
// live site never shows empty placeholders. Tapping a photo opens it full size.
//
//   file     file name inside /public/images/gallery/          (required for photos)
//   video    a video instead of a photo, e.g. "/videos/clip.mp4" in /public/videos/,
//            with `poster` set to a still image shown before it plays. It plays
//            silently in the tile and with sound when tapped. Optional
//            `preview: [start, end]` (seconds) loops just that part in the tile.
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
    video: "/videos/award-ceremony.mp4",
    poster: "/videos/award-ceremony-poster.jpg",
    // The tile loops just the award moment; tapping plays the whole clip with sound.
    preview: [11, 24],
    alt: "Video: Aadesh Sharma receiving an award on stage at an anniversary celebration, with sparklers going off",
    caption: "Recognition on stage",
    tag: "Awards · Video",
    focus: "50% 58%",
    span: 4,
    pages: ["home"],
  },
  {
    file: "leadership-development-program.jpg",
    alt: "Aadesh Sharma presenting on stage at a Leadership Development Program, with the audience in the foreground",
    caption: "Leadership Development Program",
    tag: "Corporate training",
    focus: "50% 40%",
    span: 8,
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
    file: "yuva-mahotsav-2021.jpg",
    alt: "Aadesh Sharma speaking with a microphone at Yuva Mahotsav 2021, a National Youth Day event in Prayagraj",
    caption: "Yuva Mahotsav 2021, Prayagraj",
    tag: "National Youth Day",
    focus: "62% 38%",
    span: 7,
    pages: ["home"],
  },
  {
    file: "with-participants.jpg",
    alt: "Aadesh Sharma taking a selfie with a large group of participants in formal wear",
    caption: "Among the participants",
    tag: "People development",
    focus: "100% 50%",
    span: 4,
    pages: ["home"],
  },
  {
    file: "workshop-in-session.jpg",
    alt: "Participants seated at round tables during a workshop in a hotel ballroom",
    caption: "Workshop in session",
    tag: "Training",
    focus: "50% 60%",
    span: 4,
    pages: ["home"],
  },
  {
    file: "speaking-session.jpg",
    alt: "Aadesh Sharma speaking into a microphone during a session",
    caption: "Speaking session",
    tag: "Keynote",
    focus: "0% 30%",
    span: 4,
    pages: ["home"],
  },
  {
    file: "business-expansion-program.jpg",
    alt: "Aadesh Sharma with a large group of participants holding up product packs at a Business Expansion Program in a banquet hall",
    caption: "Business Expansion Program",
    tag: "Business development",
    focus: "55% 45%",
    span: 8,
    pages: ["home"],
  },
  {
    file: "speaking-from-the-floor.jpg",
    alt: "Aadesh Sharma in a pinstripe suit standing among the audience and speaking into a microphone at a conference",
    caption: "From the floor",
    tag: "Conference",
    focus: "50% 35%",
    span: 4,
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
    file: "with-my-mentor.jpg",
    alt: "Aadesh Sharma taking a selfie with his mentor, who wears a traditional embroidered cap",
    caption: "With my mentor",
    tag: "Mentorship",
    focus: "50% 35%",
    span: 8,
    pages: ["about"],
  },
  {
    file: "with-a-fellow-leader.jpg",
    alt: "Aadesh Sharma taking a selfie with a fellow professional in a dark suit at an event",
    caption: "In good company",
    tag: "Peers",
    focus: "50% 20%",
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
    file: "with-the-team.jpg",
    alt: "Aadesh Sharma taking a selfie with a large group of team members flashing victory signs at an event venue",
    caption: "With the team",
    tag: "Collaboration",
    span: 7,
    pages: ["about"],
  },
  {
    file: "team-selfie.jpg",
    alt: "Aadesh Sharma taking a selfie with team members in front of a colourful patterned wall at a hotel",
    caption: "One team",
    tag: "Team",
    span: 5,
    pages: ["about"],
  },
  {
    file: "celebrating-a-milestone.jpg",
    alt: "Aadesh Sharma and colleagues raising a bouquet together while others applaud in a training room",
    caption: "Celebrating a milestone",
    tag: "Celebration",
    focus: "50% 55%",
    span: 5,
    pages: ["about"],
  },
  {
    file: "after-the-session.jpg",
    alt: "Aadesh Sharma in conversation with a group of men in a hotel lobby",
    caption: "Conversations after the session",
    tag: "People development",
    focus: "40% 50%",
    span: 7,
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

// Photos for the Home and About pages.
//
// 1. Put the image files in /public/images/gallery/
// 2. Add one entry per photo below, in the order you want them shown.
//
// Each gallery section only appears once it has at least one photo, so the
// live site never shows empty placeholders.
//
//   file     file name inside /public/images/gallery/          (required)
//   alt      what the photo shows, for screen readers and Google (required)
//   pages    where it appears: ["home"], ["about"] or ["home", "about"]
//   caption  short line shown on the photo                       (optional)
//   tag      small label above the caption, e.g. "Corporate training · Jaipur"
//   focus    part to keep when the photo is cropped, e.g. "center top" so
//            faces aren't cut off (optional, default "center")

export const gallery = [
  // {
  //   file: "training-session.jpg",
  //   alt: "Aadesh Sharma leading a sales training session",
  //   caption: "Leadership mindset workshop",
  //   tag: "Corporate training",
  //   pages: ["home", "about"],
  // },
];

export const galleryFor = (page) => gallery.filter((photo) => photo.pages?.includes(page));

// Optional second portrait for the About page, so it doesn't repeat the Home photo.
// Put the file in /public/images/ and set e.g. "/images/aadesh-about.jpg".
// Leave as null to reuse the Home photo.
export const aboutPortrait = null;

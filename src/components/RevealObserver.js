"use client";

import { useEffect } from "react";

// Keep in sync with the delay on the reveal-fallback animation in globals.css (2.5s), minus a margin.
const REVEAL_FALLBACK_MS = 2400;

// Marks every `.reveal` / `[data-reveal]` element with `data-in` as it scrolls into view.
// Render it as the last child of each page (not in the layout): its effect then runs only
// after that page has hydrated, so React never sees the attribute as a mismatch.
export default function RevealObserver() {
  useEffect(() => {
    const show = (el) => el.setAttribute("data-in", "");
    const els = document.querySelectorAll(".reveal:not([data-in]), [data-reveal]:not([data-in])");

    // First run on this document: switch off the CSS safety net (see globals.css).
    // If we arrived too late and it has already revealed everything, keep it all shown.
    const root = document.documentElement;
    if (!root.hasAttribute("data-reveal-ready")) {
      const fallbackFired = performance.now() > REVEAL_FALLBACK_MS;
      if (fallbackFired) els.forEach(show);
      root.setAttribute("data-reveal-ready", "");
      if (fallbackFired) return;
    }

    if (!("IntersectionObserver" in window)) {
      els.forEach(show);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            show(entry.target);
            io.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 }
    );
    els.forEach((el) => {
      // Anything already on screen animates in now, even if it sits right at the bottom edge.
      if (el.getBoundingClientRect().top < window.innerHeight) show(el);
      else io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  return null;
}

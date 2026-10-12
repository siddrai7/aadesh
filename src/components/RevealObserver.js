"use client";

import { useEffect } from "react";

// Marks every `.reveal` / `[data-reveal]` element with `data-in` as it scrolls into view.
// Render it as the last child of each page (not in the layout): its effect then runs only
// after that page has hydrated, so React never sees the attribute as a mismatch.
export default function RevealObserver() {
  useEffect(() => {
    const show = (el) => el.setAttribute("data-in", "");
    const els = document.querySelectorAll(".reveal:not([data-in]), [data-reveal]:not([data-in])");
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

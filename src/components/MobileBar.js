"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { telHref, whatsappLink } from "@/lib/site";
import { Phone, WhatsApp } from "./Icons";

// Thumb-reach action bar for phones. Appears once the hero is scrolled past
// and steps aside when the footer (which repeats these links) comes into view.
export default function MobileBar() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const footer = document.querySelector(".footer");
    let footerInView = false;
    const update = () => setVisible(window.scrollY > window.innerHeight * 0.6 && !footerInView);
    const io = new IntersectionObserver(([entry]) => {
      footerInView = entry.isIntersecting;
      update();
    });
    if (footer) io.observe(footer);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => {
      io.disconnect();
      window.removeEventListener("scroll", update);
    };
  }, [pathname]);

  const onContact = pathname.startsWith("/contact");

  return (
    <nav className={`mbar${visible ? " is-visible" : ""}`} aria-label="Quick contact" inert={!visible}>
      <a href={whatsappLink()} target="_blank" rel="noreferrer" className="mbar__btn">
        <WhatsApp /> WhatsApp
      </a>
      <a href={telHref} className="mbar__btn">
        <Phone /> Call
      </a>
      {!onContact && (
        <Link href="/contact#enquire" className="mbar__btn mbar__btn--primary">
          Enquire
        </Link>
      )}
    </nav>
  );
}

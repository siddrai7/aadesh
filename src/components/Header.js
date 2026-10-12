"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { nav, site, telHref, whatsappLink } from "@/lib/site";
import { ArrowRight, Phone, WhatsApp } from "./Icons";

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  // Menu is tied to the path it was opened on, so navigating closes it.
  const [openPath, setOpenPath] = useState(null);
  const open = openPath === pathname;
  const setOpen = (next) => setOpenPath(next ? pathname : null);
  const lastY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 24);
      setHidden(y > 240 && y > lastY.current);
      lastY.current = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e) => e.key === "Escape" && setOpenPath(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const isActive = (href) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  // The home hero is dark, so the header starts light-on-dark there.
  const overDarkHero = pathname === "/" && !scrolled && !open;

  const cls = [
    "header",
    overDarkHero && "header--light",
    scrolled && !open && "header--scrolled",
    hidden && !open && "header--hidden",
    open && "header--menu-open",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <>
      <header className={cls}>
        <div className="container header__inner">
          <Link href="/" className="brand" aria-label={`${site.name} — home`}>
            Aadesh Sharma<span className="brand__mark">®</span>
          </Link>

          <nav className="nav" aria-label="Primary">
            <ul className="nav__links">
              {nav.slice(1).map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="link-line"
                    aria-current={isActive(item.href) ? "page" : undefined}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Link href="/contact#enquire" className="btn nav__cta">
              Let’s connect <ArrowRight size={14} />
            </Link>
          </nav>

          <button
            type="button"
            className="menu-btn"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen(!open)}
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </header>

      <div id="mobile-menu" className={`mobile-menu${open ? " is-open" : ""}`} aria-hidden={!open} inert={!open}>
        <ul>
          {nav.map((item, i) => (
            <li key={item.href}>
              <Link href={item.href} aria-current={isActive(item.href) ? "page" : undefined}>
                <span>0{i + 1}</span>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="mobile-menu__actions">
          <a href={whatsappLink()} target="_blank" rel="noreferrer" className="btn">
            <WhatsApp /> WhatsApp
          </a>
          <a href={telHref} className="btn btn--ghost">
            <Phone /> Call
          </a>
        </div>
        <div className="mobile-menu__foot">
          <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a>
          <a href={site.socials.instagram} target="_blank" rel="noreferrer">Instagram</a>
          <a href={site.socials.facebook} target="_blank" rel="noreferrer">Facebook</a>
        </div>
      </div>
    </>
  );
}

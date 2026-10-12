import Link from "next/link";
import { nav, services, site, whatsappLink } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <span className="label label--dot">Open to partnerships &amp; engagements</span>
            <p>{site.promise}</p>
          </div>

          <div className="footer__col">
            <h4 className="label">Navigate</h4>
            <ul>
              {nav.map((n) => (
                <li key={n.href}>
                  <Link href={n.href}>{n.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__col">
            <h4 className="label">Services</h4>
            <ul>
              {services.map((s) => (
                <li key={s.id}>
                  <Link href={`/services#${s.id}`}>{s.short}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__col">
            <h4 className="label">Connect</h4>
            <ul>
              <li><a href={`mailto:${site.contact.email}`}>Email</a></li>
              <li><a href={whatsappLink()} target="_blank" rel="noreferrer">WhatsApp</a></li>
              <li><a href={site.socials.instagram} target="_blank" rel="noreferrer">Instagram</a></li>
              <li><a href={site.socials.facebook} target="_blank" rel="noreferrer">Facebook</a></li>
            </ul>
          </div>
        </div>

        <p className="footer__word" aria-hidden="true">
          Aadesh <em>Sharma</em>
        </p>

        <div className="footer__bottom">
          <span>© Aadesh Sharma. All rights reserved.</span>
          <span>{site.role}</span>
          <span>{site.location}</span>
        </div>
      </div>
    </footer>
  );
}

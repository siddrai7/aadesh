import Image from "next/image";
import Mask from "@/components/Mask";
import RevealObserver from "@/components/RevealObserver";
import EnquiryForm from "./EnquiryForm";
import { ArrowUpRight, Facebook, Instagram, LinkedIn, Mail, Phone, WhatsApp } from "@/components/Icons";
import { site, telHref, whatsappLink } from "@/lib/site";
import { portraits } from "@/lib/gallery";
import { pageMetadata, pages } from "@/lib/seo";

export const metadata = pageMetadata(pages.contact);

const channels = [
  { name: "WhatsApp", handle: site.contact.phone, href: whatsappLink(), Icon: WhatsApp, external: true },
  { name: "Instagram", handle: site.socials.instagramHandle, href: site.socials.instagram, Icon: Instagram, external: true },
  { name: "LinkedIn", handle: site.socials.linkedinHandle, href: site.socials.linkedin, Icon: LinkedIn, external: true },
  { name: "Facebook", handle: site.socials.facebookHandle, href: site.socials.facebook, Icon: Facebook, external: true },
  { name: "Email", handle: site.contact.email, href: `mailto:${site.contact.email}`, Icon: Mail },
  { name: "Call", handle: site.contact.phone, href: telHref, Icon: Phone },
];

export default function Contact() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="label label--dot reveal">Contact</span>
          <Mask className="display page-hero__title" lines={["Let’s build", <>something <em>together.</em></>]} />
          <div className="page-hero__foot">
            <span className="label reveal">(Say hello)</span>
            <p className="lede reveal" style={{ "--d": "0.2s" }}>
              Real estate, a business partnership or a training program for your team. Share a few details and send
              them straight to Aadesh on WhatsApp.
            </p>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }} id="enquire">
        <div className="container quick" aria-label="Quick contact">
          <a href={whatsappLink()} target="_blank" rel="noreferrer" className="quick__btn">
            <WhatsApp /> WhatsApp
          </a>
          <a href={telHref} className="quick__btn">
            <Phone /> Call
          </a>
          <a href={`mailto:${site.contact.email}`} className="quick__btn">
            <Mail /> Email
          </a>
        </div>
        <div className="container contact">
          <aside className="contact__info">
            <div className="contact__person reveal">
              <figure className="contact__person-img">
                <Image
                  src={portraits.contact.src}
                  alt={portraits.contact.alt}
                  fill
                  sizes="160px"
                  style={{ objectPosition: portraits.contact.focus }}
                />
              </figure>
              <div className="contact__block">
                <span className="label label--dot">Talk to Aadesh directly</span>
                <p className="contact__person-text">Every message is read and answered by Aadesh himself.</p>
              </div>
            </div>
            <div className="contact__block reveal">
              <span className="label">Email</span>
              <a href={`mailto:${site.contact.email}`} className="contact__big link-line">
                {site.contact.email}
              </a>
            </div>
            <div className="contact__block reveal" style={{ "--d": "0.05s" }}>
              <span className="label">Phone & WhatsApp</span>
              <a href={telHref} className="contact__big link-line">
                {site.contact.phone}
              </a>
            </div>
            <div className="contact__block reveal" style={{ "--d": "0.1s" }}>
              <span className="label">Working across</span>
              <span className="contact__big">{site.location}</span>
            </div>

            <div className="contact__block reveal" style={{ "--d": "0.15s" }}>
              <span className="label">Find me on</span>
              <ul className="socials">
                {channels.map(({ name, handle, href, Icon, external }) => (
                  <li className="social" key={name}>
                    <a href={href} {...(external ? { target: "_blank", rel: "noreferrer" } : {})}>
                      <span className="social__icon">
                        <Icon />
                      </span>
                      <span>
                        <span className="social__name">{name}</span>
                        <br />
                        <span className="social__handle">{handle}</span>
                      </span>
                      <span className="social__go">
                        <ArrowUpRight />
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          <div className="form-card reveal" style={{ "--d": "0.1s" }}>
            <div className="form-card__head">
              <span className="label label--dot">Enquiry form</span>
              <h2 className="h3">
                Start a conversation <em style={{ color: "var(--ember)" }}>with Aadesh</em>
              </h2>
            </div>
            <EnquiryForm />
          </div>
        </div>
      </section>
      <RevealObserver />
    </>
  );
}

import { Instrument_Serif, Inter_Tight, JetBrains_Mono } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileBar from "@/components/MobileBar";
import { site } from "@/lib/site";
import { keywords, ogImage, pages, structuredData } from "@/lib/seo";
import "./globals.css";

const serif = Instrument_Serif({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

const sans = Inter_Tight({
  variable: "--font-sans",
  subsets: ["latin"],
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata = {
  metadataBase: new URL(site.url),
  // Each page sets its own title, description, canonical link and preview (see src/lib/seo.js).
  title: {
    default: pages.home.title,
    template: `%s — ${site.name}`,
  },
  description: pages.home.description,
  keywords,
  authors: [{ name: site.name, url: site.url }],
  appleWebApp: { title: "Aadesh", statusBarStyle: "default" },
  formatDetection: { telephone: false },
  openGraph: {
    title: pages.home.title,
    description: pages.home.description,
    siteName: site.name,
    locale: "en_IN",
    type: "website",
    // Shown in WhatsApp / social link previews.
    images: [ogImage],
  },
};

export const viewport = {
  themeColor: "#f3efe7",
  viewportFit: "cover",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-IN" data-scroll-behavior="smooth" className={`${serif.variable} ${sans.variable} ${mono.variable}`}>
      <body>
        {/* Tells Google who Aadesh is, what he offers and where (see src/lib/seo.js). */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}
        />
        <noscript>
          <style>{`.reveal{opacity:1!important;transform:none!important}.mask>span{transform:none!important}`}</style>
        </noscript>
        <Header />
        <main>{children}</main>
        <Footer />
        <MobileBar />
      </body>
    </html>
  );
}

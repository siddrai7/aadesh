import { Instrument_Serif, Inter_Tight, JetBrains_Mono } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileBar from "@/components/MobileBar";
import { site } from "@/lib/site";
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
  title: {
    default: `${site.name} — ${site.role}`,
    template: `%s — ${site.name}`,
  },
  description:
    "Aadesh Sharma is a real estate strategist, entrepreneur and corporate trainer with 20+ years across sales, marketing, business development and real estate. I build people, partnerships & possibilities.",
  appleWebApp: { title: "Aadesh", statusBarStyle: "default" },
  formatDetection: { telephone: false },
  openGraph: {
    title: `${site.name} — ${site.role}`,
    description: `${site.tagline} ${site.promise}`,
    url: site.url,
    siteName: site.name,
    type: "website",
    // Shown in WhatsApp / social link previews.
    images: [{ url: site.portrait, width: 1121, height: 1403, alt: site.name }],
  },
};

export const viewport = {
  themeColor: "#f3efe7",
  viewportFit: "cover",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable} ${mono.variable}`}>
      <body>
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

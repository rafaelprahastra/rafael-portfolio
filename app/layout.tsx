import type { Metadata } from "next";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { profile, siteUrl } from "@/data/profile";
import "./globals.css";
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Rafael Sani Valentino Prahastra — Backend & Cloud Portfolio",
    template: "%s | Rafael Prahastra",
  },
  description: profile.summary,
  alternates: { canonical: "/" },
  openGraph: {
    title: "Rafael Prahastra — Backend & Cloud Portfolio",
    description: profile.summary,
    type: "website",
    url: siteUrl,
    images: [
      {
        url: "/images/social-card.png",
        width: 1200,
        height: 630,
        alt: "Rafael Prahastra — Backend, cloud and practical software systems",
      },
    ],
  },
  twitter: { card: "summary_large_image" },
  icons: { icon: "/favicon.svg" },
  robots: { index: true, follow: true },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <Navigation />
        {children}
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: profile.name,
              url: siteUrl,
              email: profile.email,
              description: profile.summary,
              affiliation: {
                "@type": "CollegeOrUniversity",
                name: "BINUS University",
              },
              knowsAbout: ["Python", "SQLite", "Backend systems", "Linux"],
            }).replace(/</g, "\\u003c"),
          }}
        />
      </body>
    </html>
  );
}

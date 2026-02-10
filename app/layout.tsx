import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Providers } from "@/components/Providers";
import { getSiteData, fallbackSiteData } from "@/lib/cms";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export async function generateMetadata(): Promise<Metadata> {
  const siteData = await getSiteData();
  const data = siteData || fallbackSiteData;

  return {
    title: {
      default: data.seo.defaultMetaTitle || data.brand.name,
      template: `%s | ${data.brand.name}`,
    },
    description: data.seo.defaultMetaDescription,
    icons: data.seo.favicon ? { icon: data.seo.favicon } : undefined,
    keywords: "student housing, Cleveland Heights, University Circle, Case Western Reserve, CWRU, apartments, rentals, Cleveland, student apartments, young professional housing",
    openGraph: {
      title: data.seo.defaultMetaTitle || data.brand.name,
      description: data.seo.defaultMetaDescription || "",
      type: "website",
    },
  };
}

// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  name: "Passport Student Housing",
  description: "Quality student and young professional housing serving University Circle and Cleveland Heights.",
  url: "https://passportstudenthoming.com",
  telephone: "+1-216-702-7666",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Cleveland Heights",
    addressRegion: "OH",
    addressCountry: "US",
  },
  areaServed: [
    { "@type": "City", name: "Cleveland Heights" },
    { "@type": "City", name: "Cleveland" },
    { "@type": "City", name: "University Heights" },
  ],
  serviceType: ["Student Housing", "Apartment Rentals", "Summer Sublets"],
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const siteData = await getSiteData();
  const data = siteData || fallbackSiteData;

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <Providers siteData={data}>
          <Header />
          <main className="pt-20">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}

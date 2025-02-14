import type { Metadata } from "next";
import localFont from "next/font/local";
import "../globals.css";
import PageContainer from "@/components/page-container";
import Header from "@/components/header";

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Promo Kuponi | Uštedite uz najbolje kupone za popuste",
  description:
    "Pronađite najbolje promo kodove i kupone za popuste. Uštedite pri kupovini u vodećim online prodavnicama kao što su Sinsay, Wolt, Shoppster i drugi.",
  keywords:
    "promo kodovi, kuponi za popust, online kupovina, ušteda, popusti, online prodavnice",
  openGraph: {
    title: "Promo Kuponi | Uštedite uz najbolje kupone za popuste",
    description:
      "Pronađite najbolje promo kodove i kupone za popuste. Uštedite pri kupovini u vodećim online prodavnicama.",
    type: "website",
    locale: "sr_RS",
    siteName: "Promo Kuponi",
  },
  robots: "index, follow",
  themeColor: "#ffffff",
  viewport: "width=device-width, initial-scale=1",
  alternates: {
    canonical: "https://promokuponi.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <PageContainer>
          <Header />
          {children}
        </PageContainer>
      </body>
    </html>
  );
}

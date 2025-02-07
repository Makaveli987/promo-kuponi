import type { Metadata } from "next";
import localFont from "next/font/local";
import "../globals.css";
import { CategoryCard } from "@/components/category-card";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

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
        <div className="min-h-screen bg-light-background">
          {/* Header */}
          <header className="bg-dark-background text-white">
            <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
              <div className="flex items-center space-x-8">
                <Link href={"/"}>
                  <Image
                    src={"/promo-kuponi.png"}
                    alt={"logo"}
                    className="w-full h-20 object-cover"
                    width={"300"}
                    height={"300"}
                  />
                </Link>
              </div>
              <div className="flex items-center space-x-4">
                <Button className="bg-orange-500 hover:bg-orange-600">
                  Dodaj ekstenziju
                </Button>
              </div>
            </div>
          </header>
          {/* <Header /> */}

          <div className="max-w-7xl mx-auto px-4 py-8">
            {/* <div className="grid grid-cols-4 md:grid-cols-8 gap-4 content-center"> */}
            <div className="flex gap-4 flex-wrap items-center justify-center">
              <CategoryCard store="Sinsay" />
              <CategoryCard store="Emmezeta" />
              <CategoryCard store="Cropp" />
              <CategoryCard store="Wolt" />
              <CategoryCard store="Shoppster" />
              <CategoryCard store="Temu" />
              <CategoryCard store="AliExpress" />
              <CategoryCard store="Airserbia" />
              <CategoryCard store="Reserved" />
              <CategoryCard store="Factcool" />
              <CategoryCard store="Housebrand" />
              <CategoryCard store="Myprotein" />
              <CategoryCard store="Autogume" />
            </div>
          </div>

          {/* Recommended Deals */}
          <div className="max-w-7xl mx-auto px-4 pb-8">
            <h2 className="text-2xl font-bold mb-8 border-b border-b-primary">
              Kuponi
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}

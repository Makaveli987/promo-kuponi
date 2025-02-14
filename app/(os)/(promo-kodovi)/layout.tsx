import type { Metadata } from "next";

import { CategoryCard } from "@/components/category-card";

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

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
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
    </>
  );
}

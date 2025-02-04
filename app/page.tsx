import { Button } from "@/components/ui/button";

import {
  DumbbellIcon,
  GridIcon,
  HomeIcon,
  PackageIcon,
  ShirtIcon,
  SparklesIcon,
  UtensilsCrossedIcon,
} from "lucide-react";
// import { useEffect, useState } from "react";
import Image from "next/image";
import { CategoryCard } from "@/components/category-card";
import { getPromoCodes } from "@/actions/actions";
import PromoCodesContent from "../components/promo-codes-content";
import { Suspense } from "react";
import Link from "next/link";

export default async function Home({
  searchParams,
}: {
  searchParams?: {
    prodavnica?: string;
    page?: string;
  };
}) {
  const prodavnice = searchParams?.prodavnica;

  const data = await getPromoCodes(prodavnice);

  return (
    <div className="min-h-screen bg-[#E6F0F5]">
      {/* Header */}
      <header className="bg-[#2C3E4F] text-white">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <Link href={"/"}>
              <Image
                src={"/PROMO3.png"}
                alt={"logo"}
                className="w-full h-[5rem] object-cover"
                width={"500"}
                height={"250"}
              />
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Button>Dodaj ekstenziju</Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-4 md:grid-cols-8 gap-4">
          <CategoryCard icon={<PackageIcon />} store="Sinsay" />
          <CategoryCard icon={<ShirtIcon />} store="House" />
          <CategoryCard icon={<ShirtIcon />} store="Cropp" />
          <CategoryCard icon={<DumbbellIcon />} store="Wolt" />
          <CategoryCard icon={<UtensilsCrossedIcon />} store="Shopster" />
          <CategoryCard icon={<SparklesIcon />} store="Temu" />
          <CategoryCard icon={<HomeIcon />} store="AliExpress" />
          <CategoryCard icon={<GridIcon />} store="Air Serbia" />
        </div>
      </div>

      {/* Recommended Deals */}
      <div className="container mx-auto px-4 pb-8">
        <h2 className="text-2xl font-bold mb-6 border-b border-b-[#1BBC9B]">
          Kuponi
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
          <Suspense fallback={<div>Loading...</div>}>
            <PromoCodesContent data={data} />
          </Suspense>
        </div>
      </div>
    </div>
  );
}

import PromoCodeCardOS from "@/components/promo-code-card-os";
import { Button } from "@/components/ui/button";
import {
  Package,
  Shirt,
  Dumbbell,
  UtensilsCrossed,
  Sparkles,
  Heart,
  Home,
  Grid,
} from "lucide-react";
import Image from "next/image";
import React from "react";

const deals = [
  {
    image: "https://images.unsplash.com/photo-1585399000684-d2f72660f092?w=800",
    title: "DIS",
    description: "Poklon od 500 žljiva na Mojoj aplikaciji",
    daysLeft: 4,
    purchases: 448,
  },
  {
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800",
    title: "Mister D ",
    description: "Mister D poklanja 400 RSD za prvu narudžbinu",
    daysLeft: 27,
    purchases: 141,
  },
  {
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800",
    title: "ANANAS",
    description: "1.000 RSD popusta za kupovinu iznad 7.000 RSD",
    daysLeft: 1,
    purchases: 865,
  },
  {
    image: "https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?w=800",
    title: "Maxi Online",
    description: "1.500 RSD poklon na prvu online kupovinu",
    daysLeft: 1,
    purchases: 1476,
  },
  {
    image: "https://images.unsplash.com/photo-1585399000684-d2f72660f092?w=800",
    title: "DIS",
    description: "Poklon od 500 žljiva na Mojoj aplikaciji",
    daysLeft: 4,
    purchases: 448,
  },
  {
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800",
    title: "Mister D ",
    description: "Mister D poklanja 400 RSD za prvu narudžbinu",
    daysLeft: 27,
    purchases: 141,
  },
  {
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800",
    title: "ANANAS",
    description: "1.000 RSD popusta za kupovinu iznad 7.000 RSD",
    daysLeft: 1,
    purchases: 865,
  },
  {
    image: "https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?w=800",
    title: "Maxi Online",
    description: "1.500 RSD poklon na prvu online kupovinu",
    daysLeft: 1,
    purchases: 1476,
  },
];

export default function Landing() {
  return (
    <div className="min-h-screen bg-[#E6F0F5]">
      {/* Header */}
      <header className="bg-[#2C3E4F] text-white">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <Image
              src={"/PROMO3.png"}
              alt={"logo"}
              className="w-full h-[5rem] object-cover"
              width={"500"}
              height={"250"}
            />
            <nav className="hidden flex-1 md:flex space-x-6">
              <a href="#" className="hover:text-[#1BBC9B]">
                Pregled
              </a>
              <a href="#" className="hover:text-[#1BBC9B]">
                Mapa
              </a>
              <a href="#" className="hover:text-[#1BBC9B]">
                Moji
              </a>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <Button>Dodaj ekstenziju</Button>
          </div>
        </div>
      </header>

      {/* Categories */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-4 md:grid-cols-8 gap-4">
          <CategoryCard icon={<Package />} title="Tehnička roba" />
          <CategoryCard icon={<Shirt />} title="Moda" />
          <CategoryCard icon={<Dumbbell />} title="Sport i rekreacija" />
          <CategoryCard icon={<UtensilsCrossed />} title="Hrana i piće" />
          <CategoryCard icon={<Sparkles />} title="Lepota i nega" />
          <CategoryCard icon={<Heart />} title="Zdravlje" />
          <CategoryCard icon={<Home />} title="Sve za kuću" />
          <CategoryCard icon={<Grid />} title="Sve kategorije" />
        </div>
      </div>

      {/* Recommended Deals */}
      <div className="container mx-auto px-4 pb-8">
        <h2 className="text-2xl font-bold mb-6">Preporučujemo</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
          {deals.map((deal, index) => (
            <PromoCodeCardOS deal={deal} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

function CategoryCard({
  icon,
  title,
}: {
  icon: React.ReactNode;
  title: string;
}) {
  return (
    <div className="flex flex-col items-center p-4 bg-white rounded-xl hover:shadow-lg transition-shadow cursor-pointer">
      <div className="text-gray-700 mb-2">{icon}</div>
      <span className="text-sm text-center">{title}</span>
    </div>
  );
}

import Link from "next/link";
import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

export default function Header() {
  return (
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
  );
}

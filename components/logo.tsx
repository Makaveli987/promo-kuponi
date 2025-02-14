import Link from "next/link";
import Image from "next/image";
import React from "react";

export default function Logo() {
  return (
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
  );
}

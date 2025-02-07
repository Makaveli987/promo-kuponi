"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

export function CategoryCard({ store }: { store: string }) {
  const pathname = usePathname();

  return (
    <Link
      href={`/prodavnice/${store}`}
      className={cn(
        "w-32 h-16 p-4 bg-white rounded-xl hover:shadow-lg transition-shadow cursor-pointer",
        pathname?.includes(store) && "ring-2 ring-primary"
      )}
    >
      <Image
        src={`/${store}-promo-kuponi.webp`}
        alt={store}
        className="object-fit"
        width={"450"}
        height={"450"}
      />
    </Link>
  );
}

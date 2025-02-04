"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { useCallback } from "react";
import Image from "next/image";

export function CategoryCard({
  icon,
  store,
}: {
  icon: React.ReactNode;
  store: string;
}) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  return (
    <Link
      href={pathname + "?" + createQueryString("prodavnica", store)}
      className={cn(
        "flex flex-col items-center p-4 bg-white rounded-xl hover:shadow-lg transition-shadow cursor-pointer",
        searchParams
          ?.get("prodavnica")
          ?.toLowerCase()
          .includes(store.toLowerCase()) && "ring-2 ring-[#1BBC9B]"
      )}
    >
      {/* <div className="text-gray-700 mb-2">{icon}</div>
      <span className="text-sm text-center">{store}</span> */}
      <Image
        src={`/${store}.png`}
        alt={store}
        className="h-20 object-cover"
        width={"450"}
        height={"450"}
      />
    </Link>
  );
}

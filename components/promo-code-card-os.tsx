import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import { PromoCode } from "@/models/PromoCode";
import { calculateDaysLeft } from "@/lib/utils";

type PromoCodeCardOSProps = {
  promoCode: PromoCode;
};

export default function PromoCodeCardOS({ promoCode }: PromoCodeCardOSProps) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      <Image
        src={`/${promoCode.storeName}-kuponi.jpg`}
        alt={promoCode.storeName}
        className="w-full h-24 object-cover"
        width={"400"}
        height={"200"}
      />
      <div className="p-4 flex flex-col justify-between h-[calc(100%-8rem)] border-t">
        <div>
          <h3 className="font-bold text-lg mb-2">{promoCode.storeName}</h3>
          <p className="text-gray-600 text-left text-sm mb-4">
            {promoCode?.description}
          </p>
        </div>
        <div className="mt-auto">
          <p className="text-lg text-red-600 text-center mb-2 ">25% Popust</p>

          <Button className="w-full text-base bg-primary text-white py-2 rounded-lg hover:bg-dark-background transition-colors">
            Sačuvaj kupon
          </Button>
          <div className="flex flex-col justify-center items-center mt-3 text-sm text-gray-500">
            <span className="font-semibold">
              Ponuda važi još {calculateDaysLeft(promoCode?.validUntil)} dana
            </span>
            <span>{promoCode?.usageCount + 63} preuzeto</span>
          </div>
        </div>
      </div>
    </div>
  );
}

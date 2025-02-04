import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import { PromoCode } from "@/models/PromoCode";
import { calculateDaysLeft } from "@/lib/utils";

type PromoCodeCardOSProps = {
  promoCode: PromoCode;
};

export default function PromoCodeCardOS({ promoCode }: PromoCodeCardOSProps) {
  console.log("promoCode :>> ", promoCode);
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      <Image
        src={`/${promoCode.storeName}.png`}
        alt={promoCode.storeName}
        className="w-full h-24 object-cover p-4"
        width={"600"}
        height={"400"}
      />
      <div className="p-4 flex flex-col justify-between h-[calc(100%-7rem)] border-t">
        <div>
          {/* <h3 className="font-bold text-lg mb-2">{deal.storeName}</h3> */}
          <p className="text-gray-600 text-sm mb-4">{promoCode?.description}</p>
        </div>
        <div className="mt-auto">
          <p className="text-2xl text-right mb-2 ">25%</p>

          <Button className="w-full text-base bg-[#1BBC9B] text-white py-2 rounded-lg hover:bg-[#2C3E4F] transition-colors">
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

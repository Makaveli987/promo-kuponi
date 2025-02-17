import React from "react";
import Image from "next/image";
import { PromoCode } from "@/models/PromoCode";
import { calculateDaysLeft } from "@/lib/utils";
import CopyButton from "./ui/copy-button";

type PromoCodeCardOSProps = {
  promoCode: PromoCode;
};

export default function PromoCodeCardOS({ promoCode }: PromoCodeCardOSProps) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow flex flex-col">
      <div className="flex flex-1 flex-col">
        <Image
          src={`/${promoCode.storeName}-kuponi.webp`}
          alt={promoCode.storeName}
          className="w-full h-24 object-cover"
          width={"400"}
          height={"200"}
        />
        <div className="p-4 pb-0 flex flex-col justify-between border-t">
          <div>
            <h3 className="font-bold text-lg mb-2">{promoCode.storeName}</h3>
            <p className="text-gray-600 text-left text-sm">
              {promoCode?.description}
            </p>
          </div>
        </div>
      </div>
      <div className="p-4 mt-auto">
        <p className="text-lg text-red-600 text-center mb-2 ">
          {promoCode.discount}
        </p>

        <CopyButton promoCode={promoCode.promoCode} />
        <div className="flex flex-col justify-center items-center mt-3 text-sm text-gray-500">
          <span className="font-semibold">
            Ponuda važi još {calculateDaysLeft(promoCode?.validUntil)} dana
          </span>
          {/* <span>{promoCode?.usageCount + 63} preuzeto</span> */}
        </div>
      </div>
    </div>
  );
}

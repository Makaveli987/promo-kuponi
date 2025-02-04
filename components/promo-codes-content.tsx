import PromoCodeCardOS from "@/components/promo-code-card-os";
import { PromoCode } from "@/models/PromoCode";
import React from "react";

type PromoCodesContentProps = {
  data: PromoCode[];
};

export default function PromoCodesContent({ data }: PromoCodesContentProps) {
  if (!data.length) {
    return <div>Trenutno nema promo kodova.</div>;
  }
  return (
    <>
      {data.map((deal, index) => (
        <PromoCodeCardOS promoCode={deal} key={index} />
      ))}
    </>
  );
}

import { getPromoCodes } from "@/actions/actions";
import CouponsNotFound from "@/components/coupons-not-found";
import PromoCodeCardOS from "@/components/promo-code-card-os";
import Loader from "@/components/ui/loader";
import React, { Suspense } from "react";

export default async function Page({
  params,
}: {
  params: Promise<{ storeName: string }>;
}) {
  const { storeName } = await params;
  const data = await getPromoCodes(storeName);

  return (
    <Suspense fallback={<Loader />}>
      {data.length === 0 && <CouponsNotFound store={storeName} />}

      {data.map((deal, index) => (
        <PromoCodeCardOS promoCode={deal} key={index} />
      ))}
    </Suspense>
  );
}

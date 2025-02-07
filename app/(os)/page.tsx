import { getPromoCodes } from "@/actions/actions";
import { Suspense } from "react";
import PromoCodeCardOS from "@/components/promo-code-card-os";
import Loader from "@/components/ui/loader";
import CouponsNotDound from "@/components/coupons-not-found";

export default async function Home({
  searchParams,
}: {
  searchParams?: {
    prodavnica?: string;
    page?: string;
  };
}) {
  const prodavnice = searchParams?.prodavnica;
  const data = await getPromoCodes(prodavnice);

  return (
    <Suspense fallback={<Loader />}>
      {data.length === 0 && <CouponsNotDound />}

      {data.map((deal, index) => (
        <PromoCodeCardOS promoCode={deal} key={index} />
      ))}

      {data.map((deal, index) => (
        <PromoCodeCardOS promoCode={deal} key={index} />
      ))}

      {data.map((deal, index) => (
        <PromoCodeCardOS promoCode={deal} key={index} />
      ))}

      {data.map((deal, index) => (
        <PromoCodeCardOS promoCode={deal} key={index} />
      ))}

      {data.map((deal, index) => (
        <PromoCodeCardOS promoCode={deal} key={index} />
      ))}
    </Suspense>
  );
}

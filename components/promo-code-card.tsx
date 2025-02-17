"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Edit2Icon, Trash2Icon } from "lucide-react";
import Image from "next/image";
import { usePromoCodeDialogStore } from "@/hooks/use-promo-code-dialog";
import { PromoCode } from "@/models/PromoCode";
import { deletePromoCode } from "@/actions/actions";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { useState } from "react";

interface PromoCodeCardProps {
  promoCode: PromoCode;
  getPromoCodes: () => void;
}

export default function PromoCodeCard({
  promoCode,
  getPromoCodes,
}: PromoCodeCardProps) {
  const [popoverOpen, setPopoverOpen] = useState(false);

  const handleDelete = async () => {
    await deletePromoCode(promoCode.id as string).then(() => getPromoCodes());
    setPopoverOpen(false);
  };
  const openPromoCodeDialog = usePromoCodeDialogStore().openDialog;

  return (
    <Card className="w-full max-w-lg bg-white shadow hover:shadow-lg transition-all">
      <CardContent className="p-4">
        <div className="flex flex-col gap-4">
          <div className="flex gap-4 relative">
            <div className="relative size-16 rounded-md overflow-hidden bg-muted">
              <Image
                src={
                  "https://images.unsplash.com/photo-1584441405886-bc91be61e56a?q=80&w=2660&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                }
                alt={`${promoCode.storeName} logo`}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="flex-1">
              <h3 className="text-sm font-semibold text-gray-800">
                {promoCode.storeName}
              </h3>
              <p className="text-xl font-bold text-primary mt-1">
                {promoCode.discount}
              </p>
              <div className="flex flex-col justify-between w-full mt-2">
                <p className="text-xs text-muted-foreground ">
                  Valid until {promoCode.validUntil as string}
                </p>
                <p className="text-xs text-muted-foreground ">
                  Used {promoCode.usageCount} times
                </p>
              </div>
            </div>

            <div className="ml-auto absolute right-0 top-0">
              <Button
                variant="ghost"
                size="icon"
                className="h-7 w-7"
                onClick={() => openPromoCodeDialog(promoCode)}
              >
                <Edit2Icon className="h-3 w-3" />
              </Button>
              <Popover open={popoverOpen} onOpenChange={setPopoverOpen}>
                <PopoverTrigger asChild>
                  <Button variant="ghost" size="icon" className="h-7 w-7">
                    <Trash2Icon className="h-3 w-3" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-64 flex flex-col gap-3">
                  <p className="text-sm ">
                    Are you sure you want to delete this promo code?
                  </p>
                  <Button
                    variant="destructive"
                    className=""
                    onClick={() => handleDelete()}
                  >
                    Delete
                  </Button>
                </PopoverContent>
              </Popover>
            </div>
          </div>
        </div>
        <div className="bg-muted p-2 rounded flex justify-between items-center mt-2">
          <span className="font-mono font-semibold">{promoCode.promoCode}</span>
          <Button
            variant="outline"
            size="sm"
            className="h-6 px-2"
            onClick={() => navigator.clipboard.writeText(promoCode.promoCode)}
          >
            Copy
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

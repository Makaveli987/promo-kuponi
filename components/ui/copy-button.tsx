"use client";

import React from "react";
import { Button } from "./button";
import { incrementPromoCodeUsage } from "@/actions/actions";

export default function CopyButton({ promoCode }: { promoCode: string }) {
  return (
    <Button
      className="w-full text-base bg-primary text-white py-2 rounded-lg hover:bg-dark-background transition-colors"
      onClick={async () => {
        navigator.clipboard.writeText(promoCode);
        const button = document.activeElement as HTMLButtonElement;
        button.textContent = "✓ Kopirano!";
        await incrementPromoCodeUsage(promoCode);
        setTimeout(() => {
          button.textContent = "Sačuvaj kupon";
        }, 2000);
      }}
    >
      Sačuvaj kupon
    </Button>
  );
}

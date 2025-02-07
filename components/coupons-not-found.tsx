import { TicketXIcon } from "lucide-react";
import React from "react";

type CouponsNotFoundProps = {
  store?: string;
};

export default function CouponsNotFound({ store }: CouponsNotFoundProps) {
  return (
    <div className="w-full col-span-full flex flex-col items-center mt-4">
      <div className="mb-4 flex justify-center">
        <div className="relative">
          <div className="absolute -inset-1 bg-red-100 rounded-full animate-pulse"></div>
          <TicketXIcon
            className="relative size-12 text-red-500"
            strokeWidth={1.5}
          />
        </div>
      </div>

      <h1 className="text-xl font-bold text-gray-900 mb-4">
        Trenutno nema kupona{store ? ` za ${store}` : ""}.
      </h1>
    </div>
  );
}

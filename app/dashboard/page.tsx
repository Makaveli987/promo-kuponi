"use client";
import PromoCodeCard from "@/components/promo-code-card";
import { PromoCodeDialog } from "@/components/promo-code-dialog";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Loader from "@/components/ui/loader";
import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import { usePromoCodeDialogStore } from "@/hooks/use-promo-code-dialog";
import { PromoCode } from "@/models/PromoCode";
import { Separator } from "@radix-ui/react-separator";
import { PlusCircleIcon } from "lucide-react";
import { useEffect, useState } from "react";

export default function Home() {
  const [promoCodes, setPromoCodes] = useState<PromoCode[]>([]);
  const [filteredPromoCodes, setFilteredPromoCodes] = useState<PromoCode[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const openPromoCodeDialog = usePromoCodeDialogStore().openDialog;

  async function getData() {
    const url = "http://localhost:3000/api/promo-codes";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const json = await response.json();
      setPromoCodes(json);
      setFilteredPromoCodes(json);
      setIsLoading(false);
      console.log(json);
    } catch (error: unknown) {
      console.error("Error");
    }
  }

  useEffect(() => {
    setIsLoading(true);
    getData();
    // return () => {
    //   second;
    // };
  }, []);

  function handleSearch(value: string): void {
    const filteredData = promoCodes.filter((item) =>
      item.storeName.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredPromoCodes(filteredData);
  }

  return (
    <SidebarInset>
      <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
        <SidebarTrigger className="-ml-1" />
        <Separator orientation="vertical" className="mr-2 h-4" />
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem className="hidden md:block">
              <BreadcrumbLink href="#">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="hidden md:block" />
            <BreadcrumbItem>
              <BreadcrumbPage>Promo Codes</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </header>
      <div className="flex flex-1 flex-col gap-4 p-4 w-full max-w-screen-xl m-auto ">
        <div className="flex justify-between mb-6 mt-2">
          <h1 className="text-2xl font-bold">Promo Codes</h1>

          <Input
            className="max-w-md"
            placeholder="Search store..."
            onChange={(e) => handleSearch(e.target.value)}
          />

          <Button onClick={() => openPromoCodeDialog()}>
            <PlusCircleIcon /> Add Promo Code
          </Button>
          <PromoCodeDialog />
        </div>

        <div className="grid grid-cols-3 gap-6">
          {isLoading && <Loader />}
          {filteredPromoCodes.map((promoCode) => (
            <PromoCodeCard key={promoCode.id} promoCode={promoCode} />
          ))}
        </div>
      </div>
    </SidebarInset>
  );
}

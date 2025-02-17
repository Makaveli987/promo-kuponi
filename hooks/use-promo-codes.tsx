import { PromoCode } from "@/models/PromoCode";
import { useState } from "react";

export function usePromoCodes() {
  const [promoCodes, setPromoCodes] = useState<PromoCode[]>([]);
  const [filteredPromoCodes, setFilteredPromoCodes] = useState<PromoCode[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function getPromoCodes() {
    const domain = window.location.origin;
    const url = `${domain}/api/promo-codes`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const json = await response.json();
      setPromoCodes(json);
      setFilteredPromoCodes(json);
      setIsLoading(false);
    } catch (e: unknown) {
      console.error("Error: ", e);
    }
  }

  function handleSearch(value: string): void {
    const filteredData = promoCodes.filter((item) =>
      item.storeName.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredPromoCodes(filteredData);
  }

  return {
    promoCodes,
    filteredPromoCodes,
    isLoading,
    getPromoCodes,
    handleSearch,
  };
}

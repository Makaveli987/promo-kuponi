"use client";
import { login } from "@/actions/actions";
import { AppSidebar } from "@/components/app-sidebar";
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
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Loader from "@/components/ui/loader";
import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import { usePromoCodeDialogStore } from "@/hooks/use-promo-code-dialog";
import { PromoCode } from "@/models/PromoCode";
import { Label } from "@radix-ui/react-label";
import { Separator } from "@radix-ui/react-separator";
import { PlusCircleIcon } from "lucide-react";
import { useEffect, useState } from "react";

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true"
  );
  const [promoCodes, setPromoCodes] = useState<PromoCode[]>([]);
  const [filteredPromoCodes, setFilteredPromoCodes] = useState<PromoCode[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
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
    } catch (e: unknown) {
      console.error("Error: ", e);
    }
  }

  useEffect(() => {
    setIsLoading(true);
    getData();
  }, [isLoggedIn]);

  function handleSearch(value: string): void {
    const filteredData = promoCodes.filter((item) =>
      item.storeName.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredPromoCodes(filteredData);
  }

  async function handleLogin() {
    const result = await login(password);
    if (result.success) {
      setIsLoggedIn(true);
      localStorage.setItem("isLoggedIn", "true");
    } else {
      setError(result.message || "Invalid password");
    }
  }

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-light-background w-full flex items-center justify-center gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Login</CardTitle>
          </CardHeader>
          <CardContent>
            <form action={handleLogin}>
              <div className="flex flex-col gap-6">
                <div className="grid gap-2">
                  <div className="flex items-center">
                    <Label htmlFor="password">Password</Label>
                  </div>
                  <Input
                    className="max-w-md"
                    id="password"
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  {error && <p className="text-red-500">{error}</p>}
                </div>
                <Button type="submit" className="w-full">
                  Login
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <>
      <AppSidebar />
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
    </>
  );
}

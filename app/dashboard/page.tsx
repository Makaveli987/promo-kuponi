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
import { usePromoCodes } from "@/hooks/use-promo-codes";
import { Label } from "@radix-ui/react-label";
import { Separator } from "@radix-ui/react-separator";
import { PlusCircleIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { useLocalStorage } from "usehooks-ts";

export default function DashboardPage() {
  const [isLoggedIn, setiIsLoggedIn] = useLocalStorage("isLoggedIn", "false");

  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const { filteredPromoCodes, isLoading, getPromoCodes, handleSearch } =
    usePromoCodes();
  const openPromoCodeDialog = usePromoCodeDialogStore().openDialog;
  const dialogOpen = usePromoCodeDialogStore().isOpen;

  useEffect(() => {
    if (!dialogOpen && isLoggedIn) {
      getPromoCodes();
    }
  }, [isLoggedIn, dialogOpen]);

  async function handleLogin() {
    const result = await login(password);
    if (result.success) {
      setiIsLoggedIn("true");
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
                <BreadcrumbLink href="/dashboard">Home</BreadcrumbLink>
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
              <PromoCodeCard
                key={promoCode.id}
                promoCode={promoCode}
                getPromoCodes={getPromoCodes}
              />
            ))}
          </div>
        </div>
      </SidebarInset>
    </>
  );
}

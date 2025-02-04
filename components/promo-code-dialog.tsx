"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { CalendarIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  Form,
} from "./ui/form";
import { cn } from "@/lib/utils";
import { format } from "date-fns";

import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Calendar } from "./ui/calendar";
import { useEffect } from "react";
import { usePromoCodeDialogStore } from "@/hooks/use-promo-code-dialog";
import { addPromoCode } from "@/actions/actions";

const formSchema = z.object({
  storeName: z.string().min(2).max(50),
  websiteUrl: z.string().min(2).max(100),
  promoCode: z.string().min(2).max(20),
  discount: z.string().min(1).max(2),
  description: z.string().max(50),
  validUntil: z.date(),
  usageCount: z.number(),
});

export function PromoCodeDialog() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      storeName: "",
      websiteUrl: "",
      promoCode: "",
      discount: "",
      description: "",
      usageCount: 0,
    },
  });

  const promoCodeDialog = usePromoCodeDialogStore();

  useEffect(() => {
    if (promoCodeDialog) {
      console.log("edit");
    }
  }, []);

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
    await addPromoCode(values);

    promoCodeDialog.closeDialog();
  }

  return (
    <Dialog
      open={promoCodeDialog.isOpen}
      onOpenChange={(isOpen) => {
        if (isOpen) {
          promoCodeDialog.closeDialog();
        } else {
          promoCodeDialog.closeDialog();
        }
      }}
    >
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader className="mb-4">
          <DialogTitle>Add Promo Code</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form
            id="darko"
            onSubmit={form.handleSubmit(onSubmit)}
            className="grid gap-4"
          >
            <FormField
              control={form.control}
              name="storeName"
              render={({ field }) => (
                <FormItem className="flex flex-row gap-6 items-center space-y-0">
                  <FormLabel className="w-28 whitespace-nowrap text-right">
                    Store
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="Store name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="websiteUrl"
              render={({ field }) => (
                <FormItem className="flex flex-row gap-6 items-center space-y-0">
                  <FormLabel className="w-28 whitespace-nowrap text-right">
                    Website Url
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="www.example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="promoCode"
              render={({ field }) => (
                <FormItem className="flex flex-row gap-6 items-center space-y-0">
                  <FormLabel className="w-28 whitespace-nowrap text-right">
                    Promo Code
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="Promo Code" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="discount"
              render={({ field }) => (
                <FormItem className="flex flex-row gap-6 items-center space-y-0">
                  <FormLabel className="w-28 whitespace-nowrap text-right">
                    Discount
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="Discount" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem className="flex flex-row gap-6 items-center space-y-0">
                  <FormLabel className="w-28 whitespace-nowrap text-right">
                    Description
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="Description" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="validUntil"
              render={({ field }) => (
                <FormItem className="flex flex-row gap-6 items-center space-y-0">
                  <FormLabel className="w-28 whitespace-nowrap text-right">
                    Valid until
                  </FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-full pl-3 text-left font-normal",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          {field.value ? (
                            format(field.value, "PPP")
                          ) : (
                            <span>Pick a date</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex gap-3 ml-auto">
              <DialogClose asChild>
                <Button type="reset" variant="outline">
                  Close
                </Button>
              </DialogClose>
              <Button type="submit">Submit</Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

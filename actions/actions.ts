"use server";

import { db } from "@/db/drizzle";
import { promoCodes } from "@/db/schema";
import { PromoCode } from "@/models/PromoCode";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";

export const addPromoCode = async (promoCode: PromoCode) => {
  await db.insert(promoCodes).values({
    storeName: promoCode.storeName,
    websiteUrl: promoCode.websiteUrl,
    promoCode: promoCode.promoCode,
    discount: promoCode.discount,
    description: promoCode.description,
    validUntil: promoCode.validUntil as string,
  });

  revalidatePath("/dashboard");
  return { success: true };
};

export const deletePromoCode = async (id: string) => {
  await db.delete(promoCodes).where(eq(promoCodes.id, id));

  revalidatePath("/dashboard");
  return { success: true };
};

export const editPromoCode = async (promoCode: PromoCode) => {
  await db
    .update(promoCodes)
    .set({
      storeName: promoCode.storeName,
      websiteUrl: promoCode.websiteUrl,
      promoCode: promoCode.promoCode,
      discount: promoCode.discount,
      description: promoCode.description,
      validUntil: promoCode.validUntil as string,
    })
    .where(eq(promoCodes.id, promoCode.id as string));

  revalidatePath("/dashboard");
  return { success: true };
};

export const getPromoCodes = async (store?: string): Promise<PromoCode[]> => {
  let data: PromoCode[];
  if (store) {
    data = (await db
      .select()
      .from(promoCodes)
      .where(eq(promoCodes.storeName, store))) as PromoCode[];
  } else {
    data = (await db.select().from(promoCodes)) as PromoCode[];
  }

  return data;
};

export const login = (password: string) => {
  if (password === process.env.LOGIN_PASS) {
    return { success: true };
  }
  return { success: false, message: "Invalid password" };
};

export const incrementPromoCodeUsage = async (promoCode: string) => {
  const currentPromoCode = await db
    .select()
    .from(promoCodes)
    .where(eq(promoCodes.promoCode, promoCode));

  if (!currentPromoCode[0]) {
    return { success: false, message: "Promo code not found" };
  }

  await db
    .update(promoCodes)
    .set({
      usageCount: (currentPromoCode[0].usageCount || 0) + 1,
    })
    .where(eq(promoCodes.promoCode, promoCode));

  revalidatePath("/dashboard");
  return { success: true };
};

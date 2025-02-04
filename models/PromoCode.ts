export interface PromoCode {
  id?: string;
  storeName: string;
  websiteUrl: string;
  promoCode: string;
  discount: string;
  description?: string;
  validUntil: Date | string;
  usageCount: number;
}

import { text, pgTable, uuid, date, integer } from "drizzle-orm/pg-core";

export const promoCodes = pgTable("promoCodes", {
  id: uuid("id").defaultRandom().primaryKey(),
  storeName: text("storeName").notNull(),
  websiteUrl: text("websiteUrl").notNull(),
  promoCode: text("promoCode").notNull(),
  discount: text("discount").notNull(),
  description: text("description"),
  validUntil: date("validUntil"),
  usageCount: integer("usageCount").default(0),
});

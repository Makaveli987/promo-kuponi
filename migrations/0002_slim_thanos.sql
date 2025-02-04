ALTER TABLE "promoCodes" ALTER COLUMN "id" SET DEFAULT gen_random_uuid();--> statement-breakpoint
ALTER TABLE "promoCodes" ADD COLUMN "storeName" text NOT NULL;--> statement-breakpoint
ALTER TABLE "promoCodes" ADD COLUMN "websiteUrl" text NOT NULL;--> statement-breakpoint
ALTER TABLE "promoCodes" ADD COLUMN "promoCode" text NOT NULL;--> statement-breakpoint
ALTER TABLE "promoCodes" ADD COLUMN "discount" text NOT NULL;--> statement-breakpoint
ALTER TABLE "promoCodes" ADD COLUMN "description" text;--> statement-breakpoint
ALTER TABLE "promoCodes" ADD COLUMN "validUntil" date;--> statement-breakpoint
ALTER TABLE "promoCodes" ADD COLUMN "usageCount" integer DEFAULT 0;--> statement-breakpoint
ALTER TABLE "promoCodes" DROP COLUMN "text";--> statement-breakpoint
ALTER TABLE "promoCodes" DROP COLUMN "done";
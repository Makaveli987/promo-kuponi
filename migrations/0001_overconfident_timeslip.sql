CREATE TABLE "promoCodes" (
	"id" uuid PRIMARY KEY NOT NULL,
	"text" date,
	"done" boolean DEFAULT false NOT NULL
);
--> statement-breakpoint
DROP TABLE "todo" CASCADE;
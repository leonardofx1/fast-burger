ALTER TABLE "client" ADD COLUMN "email" text;--> statement-breakpoint
ALTER TABLE "hamburger" ADD COLUMN "urlImage" text NOT NULL;--> statement-breakpoint
ALTER TABLE "stock" ADD COLUMN "amount" integer DEFAULT 0 NOT NULL;--> statement-breakpoint
ALTER TABLE "client" DROP COLUMN IF EXISTS "full_name";--> statement-breakpoint
ALTER TABLE "hamburger" DROP COLUMN IF EXISTS "amount";--> statement-breakpoint
ALTER TABLE "hamburger" DROP COLUMN IF EXISTS "stockID";--> statement-breakpoint
ALTER TABLE "stock" DROP COLUMN IF EXISTS "quantity";--> statement-breakpoint
ALTER TABLE "client" ADD CONSTRAINT "client_email_unique" UNIQUE("email");
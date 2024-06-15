CREATE TABLE IF NOT EXISTS "FAVORITOS" (
	"hamburgerID" integer NOT NULL,
	"clientID" integer NOT NULL
);
CREATE TABLE IF NOT EXISTS "hamburger" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"value" numeric NOT NULL,
	"amount" integer NOT NULL,
	"preparationTime" numeric NOT NULL,
	CONSTRAINT "hamburger_name_unique" UNIQUE("name")
);

CREATE TABLE IF NOT EXISTS "orders" (
	"clientID" integer NOT NULL,
	"hamburgerID" integer NOT NULL
);
--> statement-breakpoint
ALTER TABLE "users" RENAME TO "client";--> statement-breakpoint
ALTER TABLE "client" ADD COLUMN "name" text NOT NULL;--> statement-breakpoint
ALTER TABLE "client" DROP COLUMN IF EXISTS "phone";
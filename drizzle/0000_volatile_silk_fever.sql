CREATE TABLE IF NOT EXISTS "client" (
	"id" serial PRIMARY KEY NOT NULL,
	"full_name" text,
	"name" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "favorites" (
	"hamburgerID" integer NOT NULL,
	"clientID" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "hamburger" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"value" numeric NOT NULL,
	"amount" integer NOT NULL,
	"preparationTime" numeric NOT NULL,
	"tagID" integer,
	CONSTRAINT "hamburger_name_unique" UNIQUE("name")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "orders" (
	"clientID" integer NOT NULL,
	"hamburgerID" integer NOT NULL
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "orders" ADD CONSTRAINT "orders_clientID_client_id_fk" FOREIGN KEY ("clientID") REFERENCES "public"."client"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "orders" ADD CONSTRAINT "orders_hamburgerID_hamburger_id_fk" FOREIGN KEY ("hamburgerID") REFERENCES "public"."hamburger"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

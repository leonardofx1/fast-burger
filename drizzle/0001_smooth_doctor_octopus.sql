CREATE TABLE IF NOT EXISTS "stock" (
	"id" serial PRIMARY KEY NOT NULL,
	"quantity" integer DEFAULT 0 NOT NULL,
	"hamburgerID" integer
);
--> statement-breakpoint
ALTER TABLE "hamburger" ADD COLUMN "stockID" integer;--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "stock" ADD CONSTRAINT "stock_hamburgerID_hamburger_id_fk" FOREIGN KEY ("hamburgerID") REFERENCES "public"."hamburger"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "favorites" ADD CONSTRAINT "favorites_hamburgerID_hamburger_id_fk" FOREIGN KEY ("hamburgerID") REFERENCES "public"."hamburger"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "favorites" ADD CONSTRAINT "favorites_clientID_client_id_fk" FOREIGN KEY ("clientID") REFERENCES "public"."client"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

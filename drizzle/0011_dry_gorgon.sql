ALTER TABLE "favorites" DROP CONSTRAINT "favorites_hamburger_unique";--> statement-breakpoint
ALTER TABLE "favorites" DROP CONSTRAINT "favorites_hamburger_hamburger_id_fk";
--> statement-breakpoint
ALTER TABLE "favorites" DROP CONSTRAINT "favorites_user_user_id_fk";
--> statement-breakpoint
ALTER TABLE "favorites" ADD COLUMN "hamburgerID" integer NOT NULL;--> statement-breakpoint
ALTER TABLE "favorites" ADD COLUMN "userID" text NOT NULL;--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "favorites" ADD CONSTRAINT "favorites_hamburgerID_hamburger_id_fk" FOREIGN KEY ("hamburgerID") REFERENCES "public"."hamburger"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "favorites" ADD CONSTRAINT "favorites_userID_user_id_fk" FOREIGN KEY ("userID") REFERENCES "public"."user"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
ALTER TABLE "favorites" DROP COLUMN IF EXISTS "hamburger";--> statement-breakpoint
ALTER TABLE "favorites" DROP COLUMN IF EXISTS "user";--> statement-breakpoint
ALTER TABLE "favorites" ADD CONSTRAINT "favorites_hamburgerID_unique" UNIQUE("hamburgerID");
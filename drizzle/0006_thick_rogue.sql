ALTER TABLE "favorites" RENAME COLUMN "hamburger" TO "hamburgerID";--> statement-breakpoint
ALTER TABLE "favorites" RENAME COLUMN "user" TO "userID";--> statement-breakpoint
ALTER TABLE "favorites" DROP CONSTRAINT "favorites_hamburgerID_hamburger_id_fk";
--> statement-breakpoint
ALTER TABLE "favorites" DROP CONSTRAINT "favorites_clientID_user_id_fk";
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "favorites" ADD CONSTRAINT "favorites_hamburger_hamburger_id_fk" FOREIGN KEY ("hamburger") REFERENCES "public"."hamburger"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "favorites" ADD CONSTRAINT "favorites_user_user_id_fk" FOREIGN KEY ("user") REFERENCES "public"."user"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

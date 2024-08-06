import { pgTable, integer, unique, serial, text, numeric, timestamp, primaryKey } from "drizzle-orm/pg-core"
import { AdapterAccount } from "next-auth/adapters";




export const user = pgTable("user", {
	id: text("id").notNull().primaryKey(),
	name: text("name"),
	email: text("email").notNull(),
	emailVerified: timestamp("emailVerified", { mode: "date" }),
	image: text("image"),
  });
  
export const hamburger = pgTable("hamburger", {
	id: serial("id").primaryKey(),
	name: text("name").notNull(),
	value: numeric("value").notNull(),
	preparationTime: numeric("preparationTime").notNull(),
	imgUrl:text('urlImage').notNull(),
	description: text('description').notNull()
},
(table) => {
	return {
		hamburger_name_unique: unique("hamburger_name_unique").on(table.name),
	}
});

export const favorites = pgTable("favorites", {
	hamburgerID: integer("hamburgerID").notNull().references(() => hamburger.id).unique(),
	userID: text("userID").notNull().references(() => user.id),
  });
  
export const orders = pgTable("orders", {
	clientID: text("clientID").notNull().references(() => user.id),
	hamburgerID: integer("hamburgerID").notNull().references(() => hamburger.id),
});

  export const accounts = pgTable(
	"account",
	{
	  userId: text("userId")
		.notNull()
		.references(() => user.id, { onDelete: "cascade" }),
	  type: text("type").$type<AdapterAccount["type"]>().notNull(),
	  provider: text("provider").notNull(),
	  providerAccountId: text("providerAccountId").notNull(),
	  refresh_token: text("refresh_token"),
	  access_token: text("access_token"),
	  expires_at: integer("expires_at"),
	  token_type: text("token_type"),
	  scope: text("scope"),
	  id_token: text("id_token"),
	  session_state: text("session_state"),
	},
	(account) => ({
	  compoundKey: primaryKey({
		columns: [account.provider, account.providerAccountId],
	  }),
	})
  );
  
  export const sessions = pgTable("session", {
	sessionToken: text("sessionToken").notNull().primaryKey(),
	userId: text("userId")
	  .notNull()
	  .references(() => user.id, { onDelete: "cascade" }),
	expires: timestamp("expires", { mode: "date" }).notNull(),
  });
  
  export const verificationTokens = pgTable(
	"verificationToken",
	{
	  identifier: text("identifier").notNull(),
	  token: text("token").notNull(),
	  expires: timestamp("expires", { mode: "date" }).notNull(),
	},
	(vt) => ({
	  compoundKey: primaryKey({ columns: [vt.identifier, vt.token] }),
	})
  );

export const stock= pgTable("stock", {
    id: serial('id').primaryKey(),
    amount: integer("amaount").notNull().default(0),
    hamburgerID: integer("hamburgerID").references(()=> hamburger.id)
})
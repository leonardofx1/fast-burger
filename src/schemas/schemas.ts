import { pgTable, integer, unique, serial, text, numeric } from "drizzle-orm/pg-core"


export const favorites = pgTable("favorites", {
	hamburgerID: integer("hamburgerID").notNull().references(()=> hamburger.id),
	clientID: integer("clientID").notNull().references(() => client.id),
});

export const hamburger = pgTable("hamburger", {
	id: serial("id").primaryKey().notNull(),
	name: text("name").notNull(),
	value: numeric("value").notNull(),
	preparationTime: numeric("preparationTime").notNull(),
	tagID: integer("tagID"),
	urlImage:text('urlImage').notNull()
},
(table) => {
	return {
		hamburger_name_unique: unique("hamburger_name_unique").on(table.name),
	}
});

export const orders = pgTable("orders", {
	clientID: integer("clientID").notNull().references(() => client.id),
	hamburgerID: integer("hamburgerID").notNull().references(() => hamburger.id),
});

export const client = pgTable("client", {
	id: serial("id").primaryKey().notNull(),
	name: text("name").notNull(),
	email:text('email').unique()
});

export const stock= pgTable("stock", {
    id: serial('id').primaryKey(),
    amount: integer("amaount").notNull().default(0),
    hamburgerID: integer("hamburgerID").references(()=> hamburger.id)
})

import { relations } from "drizzle-orm";
import { client, favorites, hamburger, orders, stock } from "./schemas";



export const ordersRelation = relations(orders, ({ one }) => ({
    client: one(client, {
        fields: [orders.clientID],
        references: [client.id]
    }),
    hamburger: one(hamburger, {
        fields: [orders.hamburgerID],
        references: [hamburger.id]
    })
}))

export const favoritesRelation = relations(favorites, ({ one }) => ({
    hamburger: one(hamburger, {
        fields: [favorites.hamburgerID],
        references: [hamburger.id]
    }),
    client: one(client, {
        fields: [favorites.clientID],
        references: [client.id],
    })
}))

export const clientRelation = relations(client, ({ many }) => ({
    favorite: many(favorites),
    orders: many(orders)
}))

export const hamburgerRaltion = relations(hamburger, ({ many }) => ({
    favorite: many(favorites),
    orders: many(orders),

}))

export const stockRelation = relations(stock, ({ one }) => ({
    stockBurger: one(hamburger, {
        fields: [stock.hamburgerID],
        references: [hamburger.id]
    })
}))
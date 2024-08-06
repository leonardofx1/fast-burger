import { relations } from "drizzle-orm";
import { user, favorites, hamburger, orders, stock } from "./schemas";



export const ordersRelation = relations(orders, ({ one }) => ({
    user: one(user, {
        fields: [orders.clientID],
        references: [user.id]
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
    user: one(user, {
        fields: [favorites.userID],
        references: [user.id],
    })
}))

export const clientRelation = relations(user, ({ many }) => ({
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
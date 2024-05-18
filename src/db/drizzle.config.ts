import { defineConfig } from 'drizzle-kit'

export default defineConfig({
    schema:"./src/schemas/schemas.ts",
    dialect: "postgresql",
    // "postgresql" | "mysql"
    dbCredentials: {
        url: process.env.DATABASE_URL ?? ""
    },})

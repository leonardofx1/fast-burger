import { defineConfig } from 'drizzle-kit'

export default defineConfig({
    schema:"./src/schemas/schemas.ts",
    dialect: "postgresql",
   
    dbCredentials: {
        url: process.env.DATABASE_URL ?? ""
    },})

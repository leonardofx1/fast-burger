import { db } from "@/db"
import { hamburger } from "@/schemas/schemas"


export const  createBurger = async() => {

const res =  await db.insert(hamburger).values({name:'hafcnjh',preparationTime:15.5, urlImage:'smkxcv', value:355}).returning()
    console.log(res)
}
import { db } from "@/db"
import { favorites, hamburger } from "@/schemas/schemas"

import { NextRequest, NextResponse } from "next/server"

import { and, eq } from "drizzle-orm"

import { sql } from "drizzle-orm"
const fetchRelationhamburger = async () => {
     const user= 'a5f781c3-9979-470b-aec6-15384c8ae563'
   return  db.execute(sql`SELECT ${hamburger}.*
        FROM ${hamburger}
        INNER JOIN favorites ON ${hamburger.id} = ${favorites.hamburgerID}
        WHERE ${favorites.userID} = ${user};`)

}
const insertFavoritesHamburger = async (id:{hamburgerID:number, userID:string}) => {
   return  db.insert(favorites).values(id).returning()
}

const deleteBurger= async (idCard:number) => {
    const idUser = 'a5f781c3-9979-470b-aec6-15384c8ae563'
   return  db.delete(favorites).where(and(eq(favorites.hamburgerID, idCard), eq(favorites.userID, idUser)))
}


export async function GET(req: NextRequest) {

    if (req.method === 'GET') {
        try {

            const user = 'a5f781c3-9979-470b-aec6-15384c8ae563'
            const res = await fetchRelationhamburger ()
          

            return NextResponse.json(res)

        } catch (error) {
            console.error(error)

            return NextResponse.json({ status: 500 })
        }
    }

}

export async function POST(req: NextRequest) {
    const authh = 'a5f781c3-9979-470b-aec6-15384c8ae563'

    if (req.method === 'POST') {
        const resCart = await req.text()
        const burgerId = await JSON.parse(resCart)
        const id = { hamburgerID: burgerId, userID: authh }

        try {
            const res = await insertFavoritesHamburger (id)

            return NextResponse.json({ status: 201 })
        } catch (error) {
            console.error(error)
            return NextResponse.json({ status: 500 })
        }
    }

}

export async function DELETE(req: NextRequest) {
    const idUser = 'a5f781c3-9979-470b-aec6-15384c8ae563'

    if (req.method === 'DELETE') {
        try {
            const res = await req.text()
            const idCard = await JSON.parse(res)
            const burgerDelete= await deleteBurger(idCard)

            return NextResponse.json({ status: 200 })
        } catch (error) {
            console.error(error)

            return NextResponse.json({ status: 500 })
        }
    }
}


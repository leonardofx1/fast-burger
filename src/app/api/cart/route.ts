import { db } from "@/db"
import { favorites } from "@/schemas/schemas"
import { postFavorites } from "@/utils/cart/postFavorites"
import { NextRequest, NextResponse } from "next/server"
import { IFavorites } from "@/components/types/typeCart" 
import { and, eq } from "drizzle-orm"
import { auth } from "@/auth"



export async function POST (req:NextRequest) {
    const authh = 'a5f781c3-9979-470b-aec6-15384c8ae563'
    
    if(req.method === 'POST') {
        const resCart= await req.text()
        const ids:IFavorites = await JSON.parse(resCart)
        const id = { hamburgerID: 48, clientID:authh}
        console.log(ids,'dentro ids')
        try{
            const res = await db.insert(favorites).values(id).returning()
            console.log('return ', res)
            return NextResponse.json({message:'add to cart sucess'})
        }catch(error) {
            console.error(error)
            return NextResponse.json({message:'error cart'})
        }
    }

}

export async function DELETE (req:NextRequest){
    const clientId = '44'

    if(req.method === 'DELETE') {
       try {
        const res = await req.text()
        const idCard = await JSON.parse(res)
        const deleteBurger = await db.delete(favorites).where(and(eq(favorites.hamburgerID,  idCard), eq(favorites.clientID, clientId)))
        return NextResponse.json({message:'Item removido do carrinho'})
       }catch(error) {
        console.error(error)

        return NextResponse.json({message:'Error ao excluir item do carrinho'})
       }
    }
} 
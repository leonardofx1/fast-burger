
import { db } from "@/db";
import { hamburger } from "@/schemas/schemas";
import { fetchBurgerApi } from "@/utils/fetchBurgerApi";
import { eq, like } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";




export async function GET(req:NextRequest) {

    if(req.method === 'GET') {
        const search = req.nextUrl.searchParams.get('q')
        console.log(search)
       try{
        const res = await db.query.hamburger.findMany({
            where:like(hamburger.name,  `%${search}%`)
        })


        return NextResponse.json(res)
        

       }catch(error) {
        console.error(error)
        return NextResponse.json({status:500})
        
       }
    }

}
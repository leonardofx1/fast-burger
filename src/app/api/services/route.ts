import { db } from '@/db';
import { hamburger } from '@/schemas/schemas';
import { eq } from 'drizzle-orm';
import { NextRequest, NextResponse } from 'next/server';



export async function POST(req: NextRequest) {
if(req.method === "POST"){
    const bodyText = await req.text();
    const parsedData = JSON.parse(bodyText);
    try {
        const res = await db.insert(hamburger).values({...parsedData, urlImage:parsedData.imgUrl})

        return NextResponse.json({ message: 'Produto criado  com sucesso!' });
    }catch(error) {
        return NextResponse.json({message:'Não foi possível criar o produto.'})
    }
}
}

export async function GET (req:NextRequest) {
    if(req.method == "GET") {
   
      
        try {
            const res = await db.query.hamburger.findMany()
  
            return NextResponse.json(res)
        } catch (error) {
            console.error(error)
            return NextResponse.json({message:'Não foi possível obter os dados da requisição'})
        }
        }
}

export async function DELETE (req:NextRequest) {

    if(req.method == 'DELETE') {
        try {
            const ed = await req.text()
            const id = 5
            const res = await   db.delete(hamburger).where(eq(hamburger.id, id))

            return NextResponse.json({message:'deletado com sucesso.'})
        } catch (error) {
            console.error(error)
            return NextResponse.json({message:'Error ao deletar lanche'})
        }
    }
}

export async  function PUT (req:NextRequest) {
    if(req.method == 'PUT') {
        const res = await  req.text()
        const convert = JSON.parse(res)
  
      try {

        const res = await db.update(hamburger).set(convert).where(eq(hamburger.id, 44))
      
        return NextResponse.json({message:'editado com sucesso.'})
      }
      catch(error) {

        return NextResponse.json({message:'Error ao deletar lanche'})

      }
    }

}
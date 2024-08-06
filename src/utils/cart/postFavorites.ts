import { auth } from "@/auth";



export const postFavorites =async (id:number ) => {
 
    const options = {
        method:'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(id)
    }
    

    const res = await fetch('http://localhost:3000/api/cart',options)
    
}
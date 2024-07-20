import { auth } from "@/auth";
import { IFavorites } from "@/components/types/typeCart"; 


export const postFavorites =async (ids:IFavorites ) => {
 
    const options = {
        method:'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(ids)
    }
    
console.log('fora ids', ids)
    const res = await fetch('http://localhost:3000/api/cart',options)
    
}
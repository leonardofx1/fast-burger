import { IBurger } from "@/components/types/burgerType"

export const getFavorites =async  ():Promise<IBurger[]> => {
    

        const res = await fetch('http://localhost:3000/api/cart')
        const cardsFavorites = await res.json()
     

        return cardsFavorites

}
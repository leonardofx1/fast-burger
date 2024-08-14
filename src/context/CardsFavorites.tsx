'use client'
import { IBurger } from "@/components/types/burgerType";
import { IcontextFavorites } from "@/components/types/contextType";
import { getFavorites } from "@/utils/cart/getFavorites";
import { postFavorites } from "@/utils/cart/postFavorites";
import { deleteBurger } from "@/utils/deleteBurger";
import { createContext,useEffect,useState } from "react";



export const  contextFavorites = createContext< IcontextFavorites | null>(null)



export const CardsFavoritesProvider = ({children}:{children:React.ReactNode}) =>{
    const [cardsFavorites, setCardsFavorites] = useState<IBurger[]|[]>([])
    
    const getCardsFavorites = async () => {
        const res =  await getFavorites()
        setCardsFavorites(res)
    
    }

    useEffect(()=> {
        getCardsFavorites()
    },[])


    const handleAddFavorites = (card:IBurger) => {
        setCardsFavorites((state) =>state !== undefined ?[...state, card] :[ card] )
        postFavorites(card.id)
    }

    const handleRemoveFavorites = async (id:number) => {
        setCardsFavorites((state) => state?.filter((card) => card.id !== id))
         deleteBurger(id,'cart' )
    }
    

return (
    < contextFavorites.Provider value={{cardsFavorites, setCardsFavorites, handleAddFavorites,handleRemoveFavorites}} >
        {children}
    </ contextFavorites.Provider>
)
}


'use client'
import { CardsFavoritesProvider } from "@/context/CardsFavorites"




const ContextProviders = ({children}:{children:React.ReactNode}) => {

    return <CardsFavoritesProvider>{children}</CardsFavoritesProvider>

}

export default ContextProviders
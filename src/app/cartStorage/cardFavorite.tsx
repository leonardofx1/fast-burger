import Image from 'next/image'
import { IconClose } from './IconClose'
import style from './style.module.scss'
import useFavorites from '../Hooks/useFavorites'
import { useEffect } from 'react'


export const CardFavorite =  ({cart})=> {
    const {isFavorite, handleRemoveFavorites,setIdCard} = useFavorites()
    useEffect( ()=> {
        setIdCard(cart.id)
    },[cart.id])
    console.log(isFavorite, 'dentro do cartttttt',cart)

    return ( <>
       {isFavorite ?(
         <div key={cart.id} className={style.cardBody}>
        <IconClose  handleRemoveFavorites={handleRemoveFavorites} id={cart.id} />
        <div className={style.cardImg}>
          <Image
            src={cart.imgUrl}
            alt="hamburger"
            width={250}
            height={150}
            quality={100}
            unoptimized
          />
        </div>
        <div className={style.cardDescription}>
          {cart.description}
          <h2>R$ {cart.value}</h2>
        </div>
      </div>) : (<span>vaziooooooooooo</span>)}
     </>
    )
}
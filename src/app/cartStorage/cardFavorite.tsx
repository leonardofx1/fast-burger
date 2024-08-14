import Image from 'next/image'
import { IconClose } from './IconClose'
import style from './style.module.scss'

import { useContext } from 'react'
import { contextFavorites } from '@/context/CardsFavorites'
import { IBurger } from '@/components/types/burgerType'


export const CardFavorite =  ({urlImage, id, description, value}:IBurger)=> {
    const {handleRemoveFavorites} = useContext(contextFavorites)


    return ( <>
    
         <div key={id} className={style.cardBody}>
        <IconClose  handleRemoveFavorites={handleRemoveFavorites} id={id} />
        <div className={style.cardImg}>
          <Image
            src={urlImage}
            alt="hamburger"
            width={250}
            height={150}
            quality={100}
            unoptimized
          />
        </div>
        <div className={style.cardDescription}>
          {description}
          <h2>R$ {value}</h2>
        </div>
      </div></>
    )
}
'use client'
import Image from 'next/image'
import style from './style.module.scss'
import image from '../../../public/image.png'
import { FaStar } from "react-icons/fa";
import { MdFavorite} from 'react-icons/md';
import Link from 'next/link';

import { IBurger } from '../types/burgerType';
import useFavorites from '@/app/Hooks/useFavorites';

import { useSession } from 'next-auth/react';
import { useContext, useEffect } from 'react';

import { context } from '@/context/CardsFavorites';


export const CardBurger = (card:IBurger & {href:string}) => {
    const {cardsFavorites, handleAddFavorites, handleRemoveFavorites} = useContext(context)

    const user = useSession()
    const isFavorite = cardsFavorites?.some(({id} )=> id === card.id)
    console.log(isFavorite)
    console.log(cardsFavorites,'contextoo')


    return (
    <>
        <article className={style.cardBody}>
      <Link href={card.href}>
            <div className={style.cardImageWrapper}>
                <Image src={card.imgUrl} height={50} unoptimized quality={100} width={50} alt="imagem burguer" />

            </div>
            <div className={style.cardContent}>
                <h2>
                    {card.name}
                </h2>
                <strong>
                    Wendy's Burger
                </strong>
                
            </div>
      </Link>
            <div className={style.cardIconWrapper}>
                <span className={ style.cardIconStar }>
                <FaStar /> 4.8
                </span>
               {user.status ==='authenticated' ? ( <span className={isFavorite ?style.cardIconFavorite: style.cardIconNotFavorite}  onClick={ ()=> isFavorite ? handleRemoveFavorites(card.id):handleAddFavorites(card)
                }  >
                <MdFavorite />
                </span>):( <span className={style.carIconNotFavorite}
                 >
                <MdFavorite />
                </span>
            
            )}
            </div>
        </article></>
    )
}
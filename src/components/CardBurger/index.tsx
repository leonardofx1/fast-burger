"use client"
import Image from 'next/image'
import style from './style.module.scss'
import image from '../../../public/image.png'
import { FaStar } from "react-icons/fa";

import { MdFavorite} from 'react-icons/md';
import Link from 'next/link';
import { useState } from 'react';
import { postFavorites } from '@/utils/cart/postFavorites';
import { useSession } from 'next-auth/react';


export const CardBurger = (params) => {
const [isFavorite, setIsFavorite] = useState<Boolean>(false)
    console.log(params)
    return (
    <>
        <article className={style.cardBody}>
      <Link href={params.href}>
            <div className={style.cardImageWrapper}>
                <Image src={image} height={50} unoptimized quality={100} width={50} alt="imagem burguer" />

            </div>
            <div className={style.cardContent}>
                <h2>
                    Cheeseburger
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
                <span className={isFavorite ? style.carIconFavorite : style.carIconNotFavorite}  onClick={() => postFavorites(params.id)}   >
                <MdFavorite />
                </span>
            </div>
        </article></>
    )
}
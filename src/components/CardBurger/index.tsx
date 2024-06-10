"use client"
import Image from 'next/image'
import style from './style.module.scss'
import image from '../../../public/image.png'
import { FaStar } from "react-icons/fa";

import { MdFavorite, MdFavoriteBorder } from 'react-icons/md';
import Link from 'next/link';


export const CardBurger = ({href}) => {


    return (
      <Link href={href}>
        <article className={style.cardBody}>
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
            <div className={style.cardIconWrapper}>
                <span className={style.cardIconStar}>
                <FaStar /> 4.8
                </span>
                <span className={style.carIconFavorite}>
                <MdFavorite />
                </span>
            </div>
        </article>
      </Link>
    )
}
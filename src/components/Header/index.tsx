'use client'
import style from './style.module.scss'
import { LiaHamburgerSolid } from "react-icons/lia";
import { GiFastArrow } from "react-icons/gi";
import { PiShoppingCartFill } from "react-icons/pi";
import Link from 'next/link';
import { FiLogIn } from "react-icons/fi";
import { signIn, useSession } from 'next-auth/react';
import { postFavorites } from '@/utils/cart/postFavorites';


export const Header = ()=> {
const user = useSession()

    return (
      <header className={style.header}>
         <Link href="/">
         <h1>
          <LiaHamburgerSolid />
            Fast Burger
        </h1>
         </Link>
            {!user.data ?<div className={style.login}    onClick={() => signIn('google')}>
                Entrar
                <FiLogIn size={30}/>
            </div>: <div className={style.cartWrapper}>
                <span className={style.countItemsCart}>2</span>
            < PiShoppingCartFill  onClick={()  => postFavorites({clientID:1, hamburgerID:44})}size={25} />
                 
            </div>
 }

            
           
            
    
      </header>
    )
}
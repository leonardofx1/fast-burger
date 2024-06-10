'use client'
import style from './style.module.scss'
import { LiaHamburgerSolid } from "react-icons/lia";
import { GiFastArrow } from "react-icons/gi";
import Link from 'next/link';
import { FiLogIn } from "react-icons/fi";
import { signIn } from 'next-auth/react';

import imageo from '../../../public/imageo.png'
import Image from 'next/image';
export const Header = ()=> {


    return (
      <header className={style.header}>
         <Link href="/">
         <h1>
          <LiaHamburgerSolid />
            Fast Burger
        </h1>
         </Link>
        <nav>
            <ul>
                <li>Lanches</li>
                <li>Destaques</li>
            </ul>
        </nav>

            <div className={style.login}    onClick={() => signIn('google')}>
                Entrar
            
                <FiLogIn size={30}/>

            </div>
         
            
    
      </header>
    )
}
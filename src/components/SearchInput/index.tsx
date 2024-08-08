'use client'

import { BsSearch } from "react-icons/bs";
import style from './style.module.scss'
import Link from "next/link";
import { HTMLAttributes, useRef, useState } from "react";
import { useRouter } from "next/navigation";



export const SearchInput = () => {
    const inputRef = useRef<HTMLInputElement>(null)
    const route = useRouter()
    const handleNavigate = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const searchValue = inputRef.current?.value
        console.log(searchValue)
    
        route.push(`/searchBurger/${searchValue}`)
    }
   
    return (
        <form onSubmit={handleNavigate}>
            <div  className={style.containerSearch}>
              <button ><BsSearch /></button>
        
                <input ref={inputRef} type="text" name="search" id="" placeholder="Buscar"/>
            </div>
        </form>
    )
}



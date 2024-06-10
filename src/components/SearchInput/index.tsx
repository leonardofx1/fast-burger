'use client'

import { BsSearch } from "react-icons/bs";
import style from './style.module.scss'
import Link from "next/link";
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";



export const SearchInput = () => {
    const inputRef = useRef()
    const [search, setSearch] = useState('')
    const route = useRouter()
    const handleNavigate = (e:SubmitEvent) => {
        e.preventDefault()
        route.push(`/searchBurger/${search}`)
    }
   
    return (
        <form onSubmit={handleNavigate}>
            <div  className={style.containerSearch}>
              <button ><BsSearch /></button>
                { console.log( search)}
                <input onChange={(e) => setSearch(e.target.value)} type="text" name="search" id="" placeholder="Buscar"/>
            </div>
        </form>
    )
}
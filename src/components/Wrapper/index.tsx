import React, { ReactNode } from "react"
import style from './style.module.scss'

interface Children{
    children: ReactNode
}


export const Wrapper = ({children}:Children) => {
    return (
        <div className={style.wrapperContainer}>
            {children}
        </div>
    )
}
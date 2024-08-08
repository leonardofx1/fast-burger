import { Wrapper } from "../Wrapper"
import style from './style.module.scss'
import sad from '../../../public/sad.jpg'
import Image from "next/image"

export const BurgerNotFound  = () => {



    return (
     <Wrapper>
           <section className={style.container}>
            <h2>
                Hambúrguer não encontrado
            </h2>
            <Image src={sad} width={200} height={200} unoptimized alt='image'/> 
        </section>
     </Wrapper>
    )
}
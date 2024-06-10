import { Wrapper } from '@/components/Wrapper'
import style from './style.module.scss'
import { SearchInput } from '@/components/SearchInput'
import { CardBurger } from '@/components/CardBurger'
import Link from 'next/link'






const searchBurger = ({params:{nameBurger}}:{params:{nameBurger:string}}) => {

    console.log(nameBurger)
    return(
       <Wrapper>
        <Link href='../burgerDetails/4' >teste</Link>
        <SearchInput />
        <h2 className={style.title}>Resultados para : {nameBurger}</h2>
       <section className={style.wrapperCards}>
       <CardBurger href='../burgerDetails/5'/>
        <CardBurger href='../burgerDetails/5'/>
        <CardBurger href='../burgerDetails/5'/>
        <CardBurger href='../burgerDetails/5'/>
        <CardBurger href='../burgerDetails/5'/>
        <CardBurger href='../burgerDetails/5'/>
        <CardBurger href='../burgerDetails/5'/>
        <CardBurger href='../burgerDetails/5'/>
       </section>
       </Wrapper>
    )
}

export default searchBurger
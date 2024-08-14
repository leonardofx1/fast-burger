import { Wrapper } from '@/components/Wrapper'
import style from './style.module.scss'
import { SearchInput } from '@/components/SearchInput'
import { CardBurger } from '@/components/CardBurger'
import Link from 'next/link'
import { searchBurger} from '@/utils/searchBurger'
import { IBurger } from '@/components/types/burgerType'
import { BurgerNotFound } from '@/components/BurgerNotFound'






const searchPage =async  ({params:{nameBurger}}:{params:{nameBurger:string}}) => {
const res = await searchBurger(nameBurger)
const  isEmpty = res.length === 0

return(
       <Wrapper>
        <Link href='../burgerDetails/4' >teste</Link>
        <SearchInput />

        <h2 className={style.title}>Resultados para : {nameBurger}</h2>
       <section className={style.wrapperCards}>
        {
      
           isEmpty ?< BurgerNotFound />: res?.map((card:IBurger) =>  <CardBurger href='../burgerDetails/5' {...card} />)
        }
       </section>
       </Wrapper>
    )
}

export default searchPage